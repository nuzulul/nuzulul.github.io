---
layout: post
title: Missing X server or $DISPLAY
categories:
  - linux
tags:
  - linux
  - snap
date: 2025-06-04T08:11:22.298Z
modified: 2025-06-04T08:11:22.315Z
comments: true
---
k﻿etika snap app dijalankan muncul error seperti ini

```
[2908:2908:0604/142258.367159:ERROR:ui/ozone/platform/x11/ozone_platform_x11.cc:249] Missing X server or $DISPLAY
[2908:2908:0604/142258.367202:ERROR:ui/aura/env.cc:257] The platform failed to initialize.  Exiting.
```

s﻿olusinya tambahkan extension dan environment ke snap/snapcraft.yaml

```
apps:
  electron-packager-hello-world:
    command: electron-quick-start/electron-quick-start --no-sandbox
    extensions: [gnome]
    plugs:
    - browser-support
    - network
    - network-bind
    environment:
      # Correct the TMPDIR path for Chromium Framework/Electron to ensure
      # libappindicator has readable resources.
      TMPDIR: $XDG_RUNTIME_DIR
```

e﻿roor ini biasanya muncul pada snap yang memakai chromium framework seperti electron, puppeteer, dll

r﻿eferensi : https://www.electronjs.org/docs/latest/tutorial/snapcraft