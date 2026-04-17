# Q10 — Armstrong Number

## Problem Statement
Check if a number equals sum of its digits raised to power of number of digits.

## Algorithm
```
digits = split number into array
power  = length of digits array
sum    = Σ (each digit ^ power)
if sum === number → Armstrong ✓
```

## Examples
| Input | Calculation           | Result |
|-------|-----------------------|--------|
| 153   | 1³+5³+3³ = 153        | ✓      |
| 370   | 3³+7³+0³ = 370        | ✓      |
| 100   | 1³+0³+0³ = 1 ≠ 100   | ✗      |

## Status
![Status](https://img.shields.io/badge/status-complete-00ff88?style=flat-square&labelColor=111111)