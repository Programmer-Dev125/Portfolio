#!/bin/bash

git add .
read -p "CommitName: " commit
git commit -m $commit
git push -u origin main