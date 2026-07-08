---
layout: post
title: modul tpm di perangkat windows bikin vpn tor i2p cjdns gak bisa lagi
  melindungi pengguna
categories:
  - windows
tags:
  - windows
  - microsoft
  - tpm
  - security
  - privacy
date: 2026-07-08T02:38:40.727Z
modified: 2026-07-08T02:38:40.732Z
comments: true
---
sejak 2016 microsoft mulai mewajibkan komputer baru windows 10 untuk memliki modul tpm 2.0 di perangkatnya dengan alasan yang tidak jelas saat itu

ketika windows 11 diluncurkan yang mensyaratkan modul tpm pengguna windows digratiskan untuk upgrade sama seperti windows 10 tapi alasan dibalik itu juga tidak jelas

sebenarnya dari microsoft sendiri menjelasakan keberadaan modul tpm ini untuk perlindungan keamanan di level perangkat yaitu untuk menyimpan kunci bitlocker dan windows hello

namun ada hal tidak diungkapkan dan tidak banyak diketahui orang hingga baru baru ini kalau modul tpm memliki nomor identifikasi global yang digunakan oleh microsoft untuk mengidentifikasi setiap perangkat bahkan ngerinya nomor ini bisa bertahan dari installasi windows baru maupun reinstall

praktis bisa dibilang sejak era tpm 2016 sebenarnya teknologi masking ip address seperti vpn, tor, i2p, cjdns dll tidak berguna lagi melindungi privasi pengguna windows karena microsoft memliki pelacak dilevel perangkat tanpa perlu mengetahui ip address sesungguhnya