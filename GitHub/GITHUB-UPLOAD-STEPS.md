# GitHub Upload Steps

Use these commands from the project root.

## 1) Initialize Git

```bash
git init
git branch -M main
```

## 2) Add and Commit

```bash
git add .
git commit -m "build: complete javascript lab with landing page and all 12 projects"
```

## 3) Create a Repository on GitHub

Create a new repo in your account:

- Owner: `shyamraoshiva778-afk`
- Name: `javascript-lab-operators-conditional-statements`

## 4) Connect Remote and Push

```bash
git remote add origin https://github.com/shyamraoshiva778-afk/javascript-lab-operators-conditional-statements.git
git push -u origin main
```

## 5) Optional: Enable GitHub Pages

If you want the landing page online:

- Open repository `Settings -> Pages`
- Source: `Deploy from a branch`
- Branch: `main` / root
- Save

After deployment, your `index.html` landing page will be live.
