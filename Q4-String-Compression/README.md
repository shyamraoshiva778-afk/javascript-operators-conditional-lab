# Q4 — String Compression

## Problem Statement
Compress a string by counting consecutive characters.
Input: `"aaabbc"` → Output: `"a3b2c1"`

## Approach
- Use a `while` loop
- Track current character and consecutive count
- Append `char + count` to result

## Example
| Input      | Output    |
|------------|-----------|
| `aaabbc`   | `a3b2c1`  |
| `aabccc`   | `a2b1c3`  |

## Concepts Used
- `while` loop (nested)
- String concatenation
- Conditional logic

## Status
![Status](https://img.shields.io/badge/status-complete-00ff88?style=flat-square&labelColor=111111)