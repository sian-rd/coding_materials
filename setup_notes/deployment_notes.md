# Deploying a Vite React Project to GitHub Pages

So you've finished your project and you want to deploy it so other people can see it. GitHub pages is a tool for hosting projects.

Ensure your project is a git repository (see git_setup_notes.md if it's not) and that it is already pushed to your GitHub account. Then complete the following steps:

1. In the project directory run `npm install gh-pages --save-dev`

2. In the package.json add two scripts
```
"scripts": {
    //..
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
}
```

3. In the vite.config.js add the GitHub repository name as the base
```
export default defineConfig({
    plugins: [react()],
    base: "/my-project" // swap 'my-project' with the name of the repo
})
```

4. Add, commit and push your changes to github

5. Run `npm run deploy`

6. Go onto your GitHub account in the browser and click 'Settings' and 'Pages' (left menu). You should see a message under the heading 'Pages' that says 'Your GitHub Pages site is currently being built from the gh-pages branch'. When this is complete your project will be live at:
https://USERNAME.github.io/REPO-NAME/
(swap in your username and repo name)
