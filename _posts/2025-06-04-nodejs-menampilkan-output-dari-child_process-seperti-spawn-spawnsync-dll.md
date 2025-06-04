---
layout: post
title: NodeJS - Menampilkan output dari child_process seperti spawn , spawnSync, dll
date: 2025-06-04T04:25:09.415Z
modified: 2025-06-04T04:25:09.428Z
comments: true
---
U﻿ntuk menampilkan output dari command yang dijalankan dari node js secara realtime gunakan opsi {stdio: 'inherit'}

c﻿ontoh:

```
import { spawn,spawnSync } from 'node:child_process';
const cmd = 'ls';
const args = ['a'];
spawn(cmd, args, {stdio: 'inherit'});
```