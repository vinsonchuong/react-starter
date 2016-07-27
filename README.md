# react-starter
A commit-by-commit walkthrough of how to bootstrap a React application

## Getting Started
Install the latest versions of:
* Node.js
* npm

Create a new Git repository with this code as its base:
```sh
mkdir project
cd project
git init
git pull https://github.com/vinsonchuong/react-starter master
```

Install external dependencies with:
```sh
npm install
```

Serve the application with:
```sh
npm start
```

Run tests with:
```sh
npm test
```

Note that the integration tests (under `spec/integration`) assume that the
application is already being served.

## Deployment
Compile, minify, and compress assets with:
```bash
npm run build
```

Deploy to Cloud Foundry with:
```bash
cf push react-starter-app -p dist
```

Deploy to Heroku with:
```bash
cd dist
git init
git add -A
git commit -m 'Deploy'
heroku git:remote --app react-starter-app || heroku apps:create react-starter-app
heroku buildpacks:set https://github.com/heroku/heroku-buildpack-static
git push -f heroku master
```
