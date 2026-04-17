# Q5 — Exception Handling with Multiple Cases

## Problem Statement
Take two numbers and an operator. Handle:
- Invalid operator
- Division by zero
- Using `try...catch...finally`

## Approach
- Wrap logic in `try` block
- `throw` custom errors for invalid cases
- `catch` displays error message
- `finally` always runs

## Test Cases
| A  | Op | B  | Expected           |
|----|----|----|------------------  |
| 10 | /  | 0  | Division by zero   |
| 5  | %  | 2  | Invalid operator   |
| 10 | +  | 5  | 15                 |

## Status
![Status](https://img.shields.io/badge/status-complete-00ff88?style=flat-square&labelColor=111111)