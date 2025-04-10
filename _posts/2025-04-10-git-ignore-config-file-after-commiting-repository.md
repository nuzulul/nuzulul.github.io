---
layout: post
title: Git ignore config file after commiting repository
categories:
  - git
tags:
  - git
date: 2025-04-10T12:47:26.869Z
modified: 2025-04-10T12:47:26.882Z
comments: true
---
I﻿gnore config.json

```
git add config.json
git commit
git push
git update-index --assume-unchanged config.json
```

U﻿pdate config.json

```
git update-index --no-assume-unchanged config.json
git commit -a
git update-index --assume-unchanged config.json
```