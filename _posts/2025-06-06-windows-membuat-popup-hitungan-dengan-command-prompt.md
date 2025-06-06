---
layout: post
title: Windows - membuat popup hitungan dengan command prompt
date: 2025-06-06T16:25:15.534Z
modified: 2025-06-06T16:25:15.548Z
comments: true
---
```
start cmd /c "@echo off & mode con cols=60 lines=20 & echo MyApp Message & (FOR /L %A IN (1,1,1000) DO CLS & echo Please wait MyApp downloading required package .. & ECHO Timelapse : %A s & Timeout /t 1 >nul)"
```