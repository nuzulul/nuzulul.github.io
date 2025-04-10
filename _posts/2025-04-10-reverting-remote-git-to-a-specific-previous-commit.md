---
layout: post
title: Reverting remote git to a specific previous commit
categories:
  - git
tags:
  - git
date: 2025-04-10T23:06:00.405Z
modified: 2025-04-10T23:06:00.414Z
comments: true
---
```
git reset --hard 998c5d24f1b5b4920c6cbbae2e0bc6f9d04513a6
git push --force
```