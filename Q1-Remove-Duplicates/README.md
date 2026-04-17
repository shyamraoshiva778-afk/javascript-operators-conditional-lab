# Q1 — Remove Duplicate Characters from String

## Problem Statement
Given a string, remove all duplicate characters while preserving the original order of first occurrence — **without using `Set`**.

## Approach
- Loop through each character
- Use a plain object `{}` as a visited/seen map
- If character not in map → append to result + mark seen
- If already in map → skip

## Example
| Input         | Output     |
|---------------|------------|
| `programming` | `progamin` |
| `hello`       | `helo`     |
| `aabbcc`      | `abc`      |

## Concepts Used
- `for` loop
- Object as hash map
- Conditional (`if/else`)
- String concatenation

## How to Run
1. Open `index.html` in browser
2. Type a string in the input field
3. Click **Run** or press **Enter**
4. View result + trace log

## Files
```
Q1-Remove-Duplicates/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Status
![Status](https://img.shields.io/badge/status-complete-00ff88?style=flat-square&labelColor=111111)