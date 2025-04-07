# Frontend Mentor - QR code component solution

This is a solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Tested with](#tested-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)

## Overview

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [TODO](https://your-solution-url.com)
- Live Site URL: [TODO](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Mobile-first workflow

### Tested with

- W3C Markup validation service
- WAVE Web Accessibility Evaluation Tool
- Accessibility Insights

### What I learned

#### CSS font @import

A serveral site claims that using CSS @import for importing fonts is generally not recommended:

- `@import` blocks CSS parsing and delays font loading because it's processed after the CSS is downloaded
- there is less control over preload or font-display optimizations (like `font-display: swap`).
- certain build tools or older browsers may not handle `@import` as well as a `<link>` tag.

#### Markup validation

The W3C Markup validation service complained for Prettier's (VS Code code formatting extension) default behavior: "Trailing slash on void elements has no effect and interacts badly with unquoted attribute values."

As it turned out adding trailing slash on void html elements can cause unexpected errors when directly preceded by unquoted attribute values.

I followed the best practice and replaced Prettier in VS Code with its built in formatter for HTML files.

#### Accessibility Evaluation

The style-guide states: "Ensure content is responsive and meets WCAG requirements by testing the full range of screen sizes from 320px to large screens."

WCAG stands for Web Content Accessibility Guidelines and there are a several tools for automatic compliance check and facilitating the manual test that are also required. I tried two of them and found out that the chrome extensions works with hosted sites only so I installed the Live server VS Code extension.

(As simplistic as that this page meet the guidelines.)

### Useful resources

- [Trailing slash problem explanation](https://github.com/validator/validator/wiki/Markup-%C2%BB-Void-elements#trailing-slashes-directly-preceded-by-unquoted-attribute-values) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
