---
layout: post
title: "error: Flatpak system operation ConfigureRemote not allowed for user"
categories:
  - linux
tags:
  - linux
  - flatpak
  - flathub
  - wsl
date: 2025-05-23T01:02:54.155Z
modified: 2025-05-23T01:02:54.164Z
comments: true
---
k﻿etika mau menambahkan flathub dengan perintah 

**flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo** 

terjadi 

**error: Flatpak system operation ConfigureRemote not allowed for user**

s﻿olusinya tambahkan perintah sudo

```
sudo flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
```