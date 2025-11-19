# Deployment Instructions for GitHub Pages

Since you are running the commands in your own terminal where Node/NPM is set up, follow these steps:

## 1. Create a GitHub Repository
1. Go to [GitHub.com](https://github.com) and create a new repository.
2. Name it something like `photo-portfolio` (or whatever you prefer).
3. Make sure it is **Public** (unless you have a Pro account for private Pages).
4. Do **not** initialize with README, .gitignore, or License (we have them locally).

## 2. Update package.json
Open `package.json` in your editor and find this line:
```json
"homepage": "https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO_NAME",
```
Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username and `YOUR_REPO_NAME` with the repository name you just created.

## 3. Run these commands in your terminal

First, install the dependencies (including the `gh-pages` tool we added):
```bash
npm install
```

Initialize Git and commit your files:
```bash
git init
git add .
git commit -m "Initial commit"
```

Link your local project to the GitHub repository (replace `URL_FROM_GITHUB` with the link from step 1, e.g., `https://github.com/username/repo.git`):
```bash
git branch -M main
git remote add origin URL_FROM_GITHUB
git push -u origin main
```

## 4. Deploy to GitHub Pages
Now, run the deploy script we created. This will build the website and push it to a `gh-pages` branch on GitHub:
```bash
npm run deploy
```

## 5. Finish
1. Go to your GitHub repository settings -> **Pages**.
2. Ensure the source is set to `Deploy from a branch`.
3. Ensure the branch is `gh-pages` / `(root)`.
4. Your site should be live at the URL you put in `package.json` shortly!
