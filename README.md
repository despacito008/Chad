# Chad [![version](https://img.shields.io/github/release/40PK/Chad.svg?style=flat-square)](https://github.com/40PK/Chad/releases) [![build](https://img.shields.io/circleci/project/40PK/Chad.svg?style=flat-square)](https://circleci.com/gh/40PK/Chad) [![downloads](https://img.shields.io/github/downloads/40PK/Chad/total.svg?style=flat-square)](https://github.com/40PK/Chad/releases) [![download latest](https://img.shields.io/github/downloads/40PK/Chad/latest/total.svg?style=flat-square)](https://github.com/40PK/Chad/releases/latest) [![Dependency Status](https://www.versioneye.com/user/projects/57c2a38c939fc60037ebcb7f/badge.svg?style=flat-square)](https://www.versioneye.com/user/projects/57c2a38c939fc60037ebcb7f)

Cross-platform tool for writing posts in telegram channels with markdown and HTML supporting.

[Download](https://github.com/Perkovec/Chad/releases) - [Changelog](https://github.com/Perkovec/Chad/blob/master/CHANGELOG.md) - [Features](#features) - [How to use](#how-to-use) - [Roadmap](#roadmap) - [Used libraries](#used-libraries-and-frameworks) - [How to build](#how-to-build)

![Main window](images/main.png)

## Features
- Post preview (HTML, markdown, plain text)
- Sending posts in multiple channels
- Drafts of posts
- Change sent posts
- Sending post options
- Formatting controls (link, bold, italic)
- Multilanguage support
- Material design 😊

## How to use
If you have bot token in telegram, you can start from step 4

1. Goto `@BotFather` in telegram
2. Create new bot with `/newbot` command
3. `@BotFather` give you bot `token` (`'123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11'`)
4. Setting up bot, that will send posts in channel ![Setup bot](images/step4.png)
5. Add channels where the posts will be sent ![Add channel](images/step5.png)
6. Write your post and send ![Write and send post](images/step6.png)

## Roadmap
- Attachments
- Link preview
- Sync scroll
- Two-column writing design
- Autosave
- Hotkeys and other user settings

## Used libraries and frameworks
- [Electron](http://electron.atom.io/) - framework for create cross-platform desktop applications using JavaScript, HTML and CSS
- [React](https://facebook.github.io/react/) - JavaScript library for building user interface
  - react-dom
  - react-addons-shallow-compare
- [Material-UI](http://www.material-ui.com) - A Set of React Components that Implement Google's Material Design
  - [react-tap-event-plugin](https://github.com/zilverline/react-tap-event-plugin) - Instant TapEvents for React
- [XSS](https://github.com/leizongmin/js-xss) - HTML sanitizer
- [electron-contextmenu-middleware](https://github.com/parro-it/electron-contextmenu-middleware) - `Electron` context menu
- [electron-input-menu](https://github.com/parro-it/electron-input-menu) - Context menu for `Electron` input elements
- [react-layout-pane](https://github.com/tomkp/react-layout-pane) - React layout component using flexbox
- [superagent](https://github.com/visionmedia/superagent) - small progressive client-side HTTP request library
- [velocity-animate](https://github.com/julianshapiro/velocity) - accelerated JavaScript animation
- [react-deep-force-update](https://github.com/gaearon/react-deep-force-update) - force-updates React component tree recursively
- [semver-compare](https://github.com/substack/semver-compare) - compare two semver version strings


## How to build
#### 1. Install `gulp`:
```
npm install gulp -g
```
#### 2. Install dependencies:
```
npm install
```
#### 3. Compile code:
```
# Debug
gulp build-debug

# Release
gulp build-release
```
#### 4. Run build tasks:
```
# OS X
gulp package:mac

# Linux
gulp package:linux

# Windows
gulp package:windows
```
Builds destionation folder - `'builds'`
