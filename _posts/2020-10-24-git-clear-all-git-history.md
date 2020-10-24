---
layout: post
title: Git - Clear All Git History
date: 2020-10-24 00:00:00 +0700
categories: git

---
Clear Git history by removing all commits

    git checkout --orphan temp_branch
    git add -A
    git commit -am "The first commit"
    git branch -D main
    git branch -m main
    git push -f origin main

Referensi :

[https://www.shellhacks.com/git-remove-all-commits-clear-git-history-local-remote/](https://www.shellhacks.com/git-remove-all-commits-clear-git-history-local-remote/ "https://www.shellhacks.com/git-remove-all-commits-clear-git-history-local-remote/")