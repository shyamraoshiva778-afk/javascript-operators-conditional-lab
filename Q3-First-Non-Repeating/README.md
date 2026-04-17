# Q3 — First Non-Repeating Character

## Problem Statement
Find the first character in a string that does not repeat.

## Approach
1. Build a frequency map using a loop
2. Loop again — return first char where `freq === 1`

## Example
| Input         | Output |
|---------------|--------|
| `javascript`  | `j`    |
| `aab`         | `b`    |
| `aabb`        | `none` |

## Concepts Used
- Two-pass loop
- Object frequency map
- Conditional (`if`)

## How to Run
1. Open `index.html`
2. Enter string → Click **Find**

## Status
![Status](https://img.shields.io/badge/status-complete-00ff88?style=flat-square&labelColor=111111)