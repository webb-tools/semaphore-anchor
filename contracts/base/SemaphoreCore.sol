//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "../interfaces/ISemaphoreCore.sol";
// import "../interfaces/IVerifier.sol";
import "../verifiers/SemaphoreVerifier.sol";
import "./SemaphoreInputEncoder.sol";
import "hardhat/console.sol";

/// @title Semaphore core contract.
/// @notice Minimal code to allow users to signal their endorsement of an arbitrary string.
/// @dev The following code verifies that the proof is correct and saves the hash of the
/// nullifier to prevent double-signaling. External nullifier and Merkle trees (i.e. groups) must be
/// managed externally.
contract SemaphoreCore is ISemaphoreCore {
    using SemaphoreInputEncoder for SemaphoreInputEncoder.Proof;
    /// @dev Gets a nullifier hash and returns true or false.
    /// It is used to prevent double-signaling.
    mapping(uint256 => bool) internal nullifierHashes;

    /// @dev Asserts that no nullifier already exists and if the zero-knowledge proof is valid.
    /// Otherwise it reverts.
    /// @param signal: Semaphore signal.
    /// @param roots: Roots of the Merkle tree and its neighboring anchor merkle trees.
    /// @param nullifierHash: Nullifier hash.
    /// @param externalNullifier: External nullifier.
    /// @param proof: Zero-knowledge proof.
    /// @param verifier: Verifier address.
    function _verifyProof(
        bytes32 signal,
        uint256 nullifierHash,
        uint256 externalNullifier,
        bytes calldata roots,
        uint256[8] calldata proof,
        SemaphoreVerifier verifier,
        uint8 maxEdges,
        uint root
    ) internal view {
        if (nullifierHashes[nullifierHash]) {
            revert Semaphore__YouAreUsingTheSameNillifierTwice();
        }

        uint256 signalHash = _hashSignal(signal);

        SemaphoreInputEncoder.Proof memory p = SemaphoreInputEncoder.Proof({
            proof: proof,
            calculatedRoot: root,
            nullifierHash: nullifierHash,
            signalHash: signalHash,
            externalNullifier: externalNullifier,
            roots: roots
        });

        // console.log("proof: ", p.proof);
        // console.log("calculatedRoot: ", p.calculatedRoot);
        // console.log("nullifierHash: ", p.nullifierHash);
        // console.log("signalHash: ", p.signalHash);
        // console.log("externalNullifier: ", p.externalNullifier);

        (bytes memory inputs,) = p._encodeInputs(maxEdges);
        bool success = verifier.verifyProof(
            [proof[0], proof[1]],
            [[proof[2], proof[3]], [proof[4], proof[5]]],
            [proof[6], proof[7]],
            inputs,
            maxEdges
        );
        // console.log("success: ", success);
        if (!success) {
            revert("InvalidProof()");
        }
    }

    /// @dev Stores the nullifier hash to prevent double-signaling.
    /// Attention! Remember to call it when you verify a proof if you
    /// need to prevent double-signaling.
    /// @param nullifierHash: Semaphore nullifier hash.
    function _saveNullifierHash(uint256 nullifierHash) internal {
        nullifierHashes[nullifierHash] = true;
    }

    /// @dev Creates a keccak256 hash of the signal.
    /// @param signal: Semaphore signal.
    /// @return Hash of the signal.
    function _hashSignal(bytes32 signal) private pure returns (uint256) {
        return uint256(keccak256(abi.encodePacked(signal))) >> 8;
    }
}
