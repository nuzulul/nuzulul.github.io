---
layout: post
title: npm audit false positive report
categories:
  - npm
tags:
  - npm
date: 2025-11-04T09:30:14.461Z
modified: 2025-11-04T09:30:14.473Z
comments: true
---
saya terkejut ketika iseng iseng menjalankan perintah **npm audit** di projek [wifidrop](https://github.com/nuzulul/wifidrop) ini. 

ternyata ditemukan 3 celah keamanan moderet severity di laporannya seperti ini.

`# npm audit report`

`esbuild  <=0.24.2
Severity: moderate
esbuild enables any website to send any requests to the development server and read the response - https://github.com/advisories/GHSA-67mh-4wv8-2f99
fix available via npm audit fix --force
Will install esbuild@0.25.12, which is a breaking change
node_modules/esbuild
  vite  <=6.1.6
  Depends on vulnerable versions of esbuild
  node_modules/vite`

`nanoid  <3.3.8
Severity: moderate
Predictable results in nanoid generation when given non-integer values - https://github.com/advisories/GHSA-mwcw-c2x4-8c55
fix available via npm audit fix
node_modules/nanoid`

`3 moderate severity vulnerabilities`

`To address issues that do not require attention, run:
  npm audit fix`

`To address all issues (including breaking changes), run:
  npm audit fix --force`

dalam konteks projek ini celah keamanan tersebut tidaklah nyata karena berasal dari devDependencies yang tidak disertakan dalam production nya. 

apalagi hasil production nya project ini sebenarnya hanya berupa assset static saja. 

namun karena npm audit secara bawaan ikut memeriksa devDependencies nya jadinya pengguna yang memeriksa perintah npm audit akan mendapatkan laporan celah keamanan berbahaya.

padahal jika diperiksa production nya dengan perintah **npm audit --production** hasilnya tidak ditemukan celah keamanan seperti ini.

`found 0 vulnerabilities`

seharusnya npm audit tidak menyertakan devDependencies karena bisa memicu laporan celah keamanan yang sebenarnya tidak real dan cukup mengganggu, bagaimana pendapat rekan rekan?