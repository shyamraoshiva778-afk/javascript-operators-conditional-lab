# Q9 — Find Prime Numbers in Range

## Problem Statement
Input two numbers (start, end) and print all prime numbers between them.

## Algorithm
```
isPrime(n):
  if n < 2 → false
  if n == 2 → true
  if n % 2 == 0 → false
  for i = 3 to √n (step 2):
    if n % i == 0 → false
  return true
```

## Concepts Used
- `Math.sqrt()`
- Nested loops
- Conditional logic
- DOM rendering

## Status
![Status](https://img.shields.io/badge/status-complete-00ff88?style=flat-square&labelColor=111111)