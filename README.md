# Dominick Cole — Writing Portfolio

A static electronic portfolio (HUMN-391). Plain HTML, CSS, and JavaScript — no build step, no dependencies.

## Structure

```
.
├── index.html                      About Me / landing page
├── pages/
│   ├── personal-statement.html
│   ├── discourse-community.html
│   └── literature-review.html
├── assets/
│   ├── styles.css                  all styling
│   ├── main.js                     nav, scroll reveal, resume fallback
│   ├── thumbs/                     first-page preview images
│   ├── pdfs/                       the full documents
│   └── resume.pdf                  ← add your résumé here (see below)
└── README.md
```

## To add later

- **Headshot:** replace the placeholder on `index.html`. Drop your image in `assets/`
  (e.g. `assets/headshot.jpg`) and swap the `.headshot` block for an `<img>`.
  Search `<div class="headshot">` in `index.html`.
- **Résumé:** add a file named `resume.pdf` to the `assets/` folder. The "View résumé"
  button already points to `assets/resume.pdf`. Until that file exists, the button
  shows a brief "coming soon" note instead of breaking.

## Publishing to GitHub Pages

1. Create a repo (for a user site, name it `yourusername.github.io`).
2. From this folder:
   ```bash
   git init
   git add .
   git commit -m "Portfolio"
   git branch -M main
   git remote add origin https://github.com/YOURUSERNAME/YOURREPO.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Source: Deploy from a branch → main / (root)**.
4. The site goes live at `https://yourusername.github.io/` (or `/REPO` for a project site).

No subfolder gotchas: every internal link is relative, so it works at the root or under a project path.
