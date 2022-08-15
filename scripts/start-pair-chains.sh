#!/bin/sh
if [ ! "$(tmux has-session -t blockchains)" ]; then
    tmux new-session -s blockchains -d
    tmux send-keys -t blockchains:0 'ganache --wallet.seed 42 --chain.chainId 1338' 'C-m'
    # tmux rename-window 'Foo'
    tmux select-window -t blockchains:0
    tmux split-window -t blockchains:0 -v 'ganache --wallet.seed 42 --chain.chainId 1339 --port 8546'
    # tmux send-keys 'ganache --port 8546' 'C-m'
    # tmux -2 attach-session -t blockchains
fi

tmux attach-session -t blockchains
