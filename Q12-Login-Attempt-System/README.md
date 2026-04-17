# Q12 — Mini Project: Login Attempt System

## Problem Statement
A login system with:
- Predefined username & password
- Max 3 attempts
- Error thrown on wrong credentials
- Account locked after 3 failures

## Features
- Visual attempt dots (green -> grey -> red)
- `try...catch` for all error handling
- Password show/hide toggle
- Attempt log with timestamps
- Account lock overlay + reset

## Demo Credentials
```
Username : admin
Password : 1234
```

## Concepts Used
- `try...catch...finally`
- `throw new Error()`
- BOM interactions
- DOM manipulation
- Event listeners

## How to Run
1. Open `index.html`
2. Enter credentials
3. Try wrong ones to trigger errors
4. After 3 fails -> account locks

## Status
![Status](https://img.shields.io/badge/status-complete-00ff88?style=flat-square&labelColor=111111)
