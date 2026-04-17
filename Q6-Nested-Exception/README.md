# Q6 — Nested Exception Handling

## Problem Statement
Take a JSON string input, parse it using `JSON.parse()`, and handle invalid JSON using nested `try...catch`.

## Approach
- **Outer try**: Validate input is not empty
- **Inner try**: `JSON.parse()` — catches `SyntaxError`
- **finally**: Always executes

## Test Cases
| Input                     | Result         |
|---------------------------|----------------|
| `{"name":"John"}`         | ✓ Valid JSON   |
| `{name: "John",}`         | ✗ SyntaxError  |
| (empty)                   | ✗ Empty error  |

## Status
![Status](https://img.shields.io/badge/status-complete-00ff88?style=flat-square&labelColor=111111)