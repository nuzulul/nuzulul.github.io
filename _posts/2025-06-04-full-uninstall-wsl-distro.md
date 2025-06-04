---
layout: post
title: Full uninstall WSL distro
categories:
  - wsl
date: 2025-06-04T01:03:49.471Z
modified: 2025-06-04T01:03:49.485Z
comments: true
---
U﻿ntuk meng uninstall distro WSL secara penuh di windows tidak berfungsi sebagaimana mestinya jika uninstall dari store atau setting.

S﻿olusinya uninstall lewat prompt.

C﻿ontoh untuk uninstall distro kali-linux dari WSL.

```
C:\Users\nuzul>wsl -l -v
  NAME                   STATE           VERSION
* docker-desktop         Stopped         2
  kali-linux             Stopped         2
  docker-desktop-data    Stopped         2

C:\Users\nuzul>wsl --unregister kali-linux
Unregistering.
The operation completed successfully.


C:\Users\nuzul>wsl -l -v
  NAME                   STATE           VERSION
* docker-desktop         Stopped         2
  docker-desktop-data    Stopped         2
```