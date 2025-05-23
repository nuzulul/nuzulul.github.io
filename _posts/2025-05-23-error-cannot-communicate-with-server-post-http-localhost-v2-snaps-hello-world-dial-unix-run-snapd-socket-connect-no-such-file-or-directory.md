---
layout: post
title: 'error: cannot communicate with server: Post
  "http://localhost/v2/snaps/hello-world": dial unix /run/snapd.socket: connect:
  no such file or directory'
categories:
  - linux
tags:
  - linux
  - wsl
  - snap
date: 2025-05-23T08:23:20.912Z
modified: 2025-05-23T08:23:20.923Z
comments: true
---
kdi wsl windows ketika mau install snap contohnya hello-word dengan perintah:

snap install hello-world

a﻿kan muncul error :

error: cannot communicate with server: Post "http://localhost/v2/snaps/hello-world": dial unix /run/snapd.socket: connect: no such file or directory

s﻿olusinya:

1﻿.

```
sudo apt-get update && sudo apt-get install -yqq daemonize dbus-user-session fontconfig
sudo daemonize /usr/bin/unshare --fork --pid --mount-proc /lib/systemd/systemd --system-unit=basic.target
exec sudo nsenter -t $(pidof systemd) -a su - $LOGNAME
```

2﻿.

```
sudo systemctl start snapd.service
```

R﻿eferensi : https://github.com/microsoft/WSL/issues/5126