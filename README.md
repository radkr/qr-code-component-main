# Frontend Mentor - QR code component solution

This is a solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

# Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Improved with](#improved-with)
  - [Tested with](#tested-with)
  - [Iterations](#iterations)
    - [Iteration 1](#iteration-1)
    - [Iteration 2](#iteration-2)
  - [What I learned](#what-i-learned)
    - [CSS font @import](#css-font-import)
    - [Markup validation](#markup-validation)
    - [Accessibility Evaluation](#accessibility-evaluation)
    - [Browser font size setting](#browser-font-size-setting)
  - [Useful resources](#useful-resources)

# Overview

## Screenshot

![Screenshot at default font size and desktop view](./screenshots/screenshot.png)
![Screenshot at default very large font size and mobile view](./screenshots/screenshot_veryl_375.png)

## Links

- Solution URL: [TODO](https://your-solution-url.com)
- Live Site URL: [TODO](https://your-live-site-url.com)

# My process

## Built with

- Semantic HTML5 markup
- CSS custom properties
- Mobile-first workflow
- Responsive design (media query)

## Improved with

- Autoprefixer to increase browser coverage

## Tested with

- W3C Markup validation service
- WAVE Web Accessibility Evaluation Tool
- Accessibility Insights

## Iterations

### Iteration 1

Show the styled QR code component on the page so the customers can easily navigate to the frontend mentor home page by mobile devices.

### Iteration 2

Ensure web accessibility by allowing users to adjust font sizes to their preference.

## What I learned

### CSS font @import

A serveral site claims that using CSS @import for importing fonts is generally not recommended:

- `@import` blocks CSS parsing and delays font loading because it's processed after the CSS is downloaded
- there is less control over preload or font-display optimizations (like `font-display: swap`).
- certain build tools or older browsers may not handle `@import` as well as a `<link>` tag.

### Markup validation

The W3C Markup validation service complained for Prettier's (VS Code code formatting extension) default behavior: "Trailing slash on void elements has no effect and interacts badly with unquoted attribute values."

As it turned out adding trailing slash on void html elements can cause unexpected errors when directly preceded by unquoted attribute values.

I followed the best practice and replaced Prettier in VS Code with its built in formatter for HTML files.

### Accessibility Evaluation

The style-guide states: "Ensure content is responsive and meets WCAG requirements by testing the full range of screen sizes from 320px to large screens."

WCAG stands for Web Content Accessibility Guidelines and there are a several tools for automatic compliance check and facilitating the manual test that are also required. I tried two of them and found out that the chrome extensions works with hosted sites only so I installed the Live server VS Code extension.

(As simplistic as that this page meet the guidelines.)

### Browser font size setting

[Units](https://every-layout.dev/rudiments/units/): "However, as [Evan Minto discovered](https://medium.com/@vamptvo/pixels-vs-ems-users-do-change-font-size-5cfb20831773), there are more users who adjust their default font size in browser settings than there are users of the browsers Edge or Internet Explorer. That is: disregarding users who adjust their default font size is as impactful as disregarding whole browsers."

[Units](https://every-layout.dev/rudiments/units/): "Learn to extrapolate your layouts from your text’s intrinsic dimensions and your designs will be beautiful."

Using font size relative paddings, margins, and border radius allows the design scale proportionally with the browser font size settings.

Following the recommendations of [Louis Lazaris's The Power of em Units in CSS - 2014](https://www.sitepoint.com/power-em-units-css/) article I applied

- font size in `rem` unit to the QR Code component and
- padding, margin, border radius, and font size in `em` for child elements
- in a way the component to have the same size as in the design for default 16px font size setting

In addition,

- I set a breakpoint at 40rem by media query and
- limited the width of the component to the 85% of the viewport width to prevent the component get out of sight at browser font size settings higher than 16px.

So I achieved the desktop and mobile view to look the same as in the design at default browser setting, and be reponsive upon its change.

## Useful resources

**Html void elements:**

- [Trailing slash problem explanation](https://github.com/validator/validator/wiki/Markup-%C2%BB-Void-elements#trailing-slashes-directly-preceded-by-unquoted-attribute-values)

**Relative units comprehensive guide:**

- [Adrian Sandu - Rem in CSS: Understanding and Using rem Units - 2024](https://www.sitepoint.com/understanding-and-using-rem-units-in-css/)

> [Rem in CSS: Understanding and Using rem Units](https://www.sitepoint.com/understanding-and-using-rem-units-in-css/): "Relative units in media queries are based on the initial value, which means that units are never based on results of declarations. For example, in HTML, the em unit is relative to the initial value of font-size, defined by the user agent or the user’s preferences, not any styling on the page." (See below)

```css
html {
  font-size: 62.5%; /* 62.5% of 16px = 10px */
}
@media (min-width: 20rem) {
  html {
    /* 20*16px = 320px */
    background-color: lemonchiffon;
    font-size: 200%; /* 200% of 16px = 32px */
  }
}
@media (min-width: 30em) {
  html {
    /* 30*16px = 480px */
    background-color: lightblue;
    font-size: 300%; /* 300% of 16px = 48px */
  }
}
```

**Sizing with `em`, `rem`, `ch`, and `ex` units:**

- [How to size text using ems - 2004](https://clagnut.com/blog/348/)
- [Font sizing with rem - 2011](https://snook.ca/archives/html_and_css/font-size-with-rem)
- [Font sizing with rem could be avoided - 2011](https://csswizardry.com/2011/05/font-sizing-with-rem-could-be-avoided/)
- [Font Size Idea: px at the Root, rem for Components, em for Text Elements](https://css-tricks.com/rems-ems/)
- [simurai - Sizing (Web) components - 2013](https://medium.com/@simurai/sizing-web-components-8f433689736f)
- [Louis Lazaris - The Power of em Units in CSS - 2014](https://www.sitepoint.com/power-em-units-css/)
- [Units](https://every-layout.dev/rudiments/units/)

> [Units](https://every-layout.dev/rudiments/units/): "However, as [Evan Minto discovered](https://medium.com/@vamptvo/pixels-vs-ems-users-do-change-font-size-5cfb20831773), there are more users who adjust their default font size in browser settings than there are users of the browsers Edge or Internet Explorer. That is: disregarding users who adjust their default font size is as impactful as disregarding whole browsers."

> [Units](https://every-layout.dev/rudiments/units/): "Learn to extrapolate your layouts from your text’s intrinsic dimensions and your designs will be beautiful."

**Responsive typography with `rem` units:**

- [Size Matters: Balancing Line Length And Font Size In Responsive Web Design](https://www.smashingmagazine.com/2014/09/balancing-line-length-font-size-responsive-web-design/)

> [Size Matters: Balancing Line Length And Font Size In Responsive Web Design](https://www.smashingmagazine.com/2014/09/balancing-line-length-font-size-responsive-web-design/): "A good font size (not too big) promotes horizontal eye motion. A good font size with the proper line height will help your readers find what they’re looking for."

> [Size Matters: Balancing Line Length And Font Size In Responsive Web Design](https://www.smashingmagazine.com/2014/09/balancing-line-length-font-size-responsive-web-design/): "The Ideal Measure: 45 To 75 Characters. \[...\] I’ve found, however, that we can reliably broaden the range to 45 to 85 characters (including spaces and punctuation) per line for web pages."

> [Size Matters: Balancing Line Length And Font Size In Responsive Web Design](https://www.smashingmagazine.com/2014/09/balancing-line-length-font-size-responsive-web-design/): "A good font size (not too small) is readable. A good font size (not too big) promotes horizontal eye motion. A good font size with the proper line height will help your readers find what they’re looking for."
