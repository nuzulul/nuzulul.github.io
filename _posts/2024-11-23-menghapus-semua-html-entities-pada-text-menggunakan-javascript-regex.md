---
layout: post
title: Menghapus Semua HTML Entities Pada Text Menggunakan JavaScript Regex
categories:
  - tutorial
tags:
  - js
  - tutorial
date: 2024-11-23T02:49:38.737Z
modified: 2024-11-23T02:49:38.751Z
comments: true
---
K﻿arakter special umumnya dikonversi menjadi HTML ENTITIES agar dapat ditampilkan pada dokumen HTML. Namun ada kalanya kita tidak membutuhkannya dan ingin menghapus semuanya. Berikut contoh cara menghapusnya dengan menggunakan JavaScript Regex.

```
const catatan = "Copyright &copy; 2024"
const hasil = catatan.replace(/&[^>]*;/g,"")
console.log(hasil) //Copyright 2024
```

R﻿egex diatas akan mencari semua kata yang diawali dengan & dan diakhiri dengan ; kemudian menghapusnya.