---
layout: post
title: Escape vertical bar | in batch script (.bat)
categories:
  - bat
tags:
  - bat
date: 2026-11-18T21:25:57.385Z
modified: 2026-11-18T21:25:57.395Z
comments: true
---
E﻿rror :

```
@echo off
echo hello | world
pause
```

S﻿uccess :

```
@echo off
echo hello ^| world
pause
```

The `^` is necessary because batch scripts treat `|` like pipes regardless of context