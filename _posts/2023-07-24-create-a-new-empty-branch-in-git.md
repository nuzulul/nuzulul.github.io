---
layout: post
title: Create a new empty branch in Git
categories:
  - Git
tags:
  - Git
date: 2023-07-24T02:57:40.443Z
modified: 2023-07-24T02:57:40.453Z
comments: true
---
<!--StartFragment-->

```
$ git checkout --orphan NEWBRANCH
$ git rm -rf .
```

<!--EndFragment-->