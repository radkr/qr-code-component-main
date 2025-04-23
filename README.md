# Frontend Mentor - QR code component solution

This is a solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

With my solution I went a bit further and created a

- Next.js site deployed on github pages that is
- dinamically adjusts to the browser's default font size and is
- reponsive but still
- stick to the Frontend Mentor's design when the default font size is 16px.

My QR Code Component is a

- React functional component that is
- inserted into a Modal component
- shown by default or when the user clicks anywhere on the empty page and
- hide on pressing the ESC key or clicking on the backdrop.

I created my own Modal Component as well that is

- built upon the `dialog` html element
- directly injected into the DOM element with id `modal-root` and
- for accessibility reasons,
- uses the standard `showModal()` and `close()` functions to show and hide the modal.

To enhance the user experiance I also

- animated how the modal
- is showing up and
- hiding away.

The unit, integration and accessibility tests increase the confidence that the site works as intended.

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
    - [Iteration 3](#iteration-3)
    - [Iteration 4](#iteration-4)
    - [iteration 5](#iteration-5)
    - [iteration 6](#iteration-6)
    - [iteration 7](#iteration-7)
  - [What I learned](#what-i-learned)
    - [CSS font @import](#css-font-import)
    - [Markup validation](#markup-validation)
    - [Accessibility Evaluation](#accessibility-evaluation)
    - [Browser font size setting](#browser-font-size-setting)
    - [Next.js CSS modules](#nextjs-css-modules)
    - [Next.js fonts](#nextjs-fonts)
    - [Next.js favicon](#nextjs-favicon)
    - [Next.js naming conventions](#nextjs-naming-conventions)
    - [Next.js path convenient feature](#nextjs-path-convenient-feature)
    - [Next.js and React createPortal](#nextjs-and-react-createportal)
    - [Unit test scope](#unit-test-scope)
    - [CSS modules vs. CSS inheritance](#css-modules-vs-css-inheritance)
    - [Jest does not support dialog](#jest-does-not-support-dialog)
    - [Unit test of animated components](#unit-test-of-animated-components)
  - [Useful resources](#useful-resources)

# Overview

## Screenshot

**Medium browser font size in desktop view:**

![Screenshot at medium browser font size in desktop view](./screenshots/screenshot.png)

**Very large browser font size in mobile view:**

![Screenshot at very large browser font size in mobile view](./screenshots/screenshot_veryl_375.png)

## Links

- Solution URL: [On Frontend Mentor](https://www.frontendmentor.io/solutions/responsive-page-with-animated-modal-showing-the-qr-code-component-kQJrFCx7CT)
- Live Site URL: [On Github Pages](https://radkr.github.io/qr-code-component-main/)

# My process

## Built with

- Semantic HTML5 markup
- CSS custom properties, animation, media query
- Mobile-first workflow
- Responsive design
- Next.js + React.js
- React createPortal, useEffect, useState, useRef

## Improved with

- Autoprefixer to increase browser coverage

## Tested with

- W3C Markup validation service
- WAVE Web Accessibility Evaluation Tool
- Accessibility Insights
- Jest + React Testing Library + User Event Testing Library

## Iterations

### Iteration 1

Show the styled QR code component on the page so the customers can easily navigate to the frontend mentor home page by mobile devices.

### Iteration 2

Ensure web accessibility by allowing users to adjust font sizes to their preference.

### Iteration 3

Refactor the plain html and css code into a next.js project to allow creating an actual React component.

### Iteration 4

Refactor the QR Code Component into a React functional component to allow displaying it upon user interaction.

### Iteration 5

Show and hide the QR Code Component as a modal upon user interaction.

### Iteration 6

Animate show and hide of the modal for better user experience.

### Iteration 7

Hide the QR Code Component on clicking on backdrop instead of clicking on the component itself because it is closer to the behavior the customers are used to.

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

### Next.js CSS modules

In Next.js projects the recommended way of styling components is writing CSS modules and importing them into the javascript code. CSS Modules locally scope CSS by generating unique class names. This allows you to use the same class in different files without worrying about collisions.

```javascript
import styles from "./page.module.css";
//...
<dialog className={styles.dialog} open>
```

One implication is that it is generally recommended to leave css BEM naming convention behind when using CSS Modules since its primary purpose is to solve the global namespace problem in CSS. In addition, using camelCase in CSS Modules is actually common and recommended.

### Next.js fonts

The `next/font` module automatically optimizes fonts and removes external network requests for improved privacy and performance. It includes built-in automatic self-hosting for any font file. The fonts should be imported in the `layout.js` file and added for example to the `<html>` element's style as custom CSS properties.

### Next.js favicon

Next.js support favicons with `.ico` extension only.

### Next.js naming conventions

It is generally recommended and Next.js follows the same practice to name component files with `kebab-case` and components with `UpperCamelCase`.

Apart from routing folder and file conventions, Next.js is unopinionated about how one organize and colocate the project files. I choosed that I place my component files under the `app/_components/<component-name>` folder.

### Next.js path convenient feature

Next.js provides a way to write path relative to the root folder easily. This can be conveinent to use especially when importing from the public folder.

```javascript
import qrCodeImg from "@/public/image-qr-code.png";
```

### Next.js and React createPortal

Next.js may run React component code on server before actually mounting them in the browser. This can cause problems without special attention when using React create Portal feature as querying the DOM for an element to manipulate.

I followed the [example code](https://github.com/vercel/next.js/tree/canary/examples/with-portals) officially provided by Vercel (Next.js) and I return actual content only if the component has been mounted.

### Unit test scope

**Best Practices:**

- Focus on Functionality: Many developers argue that testing should primarily focus on functionality and user behavior, rather than implementation details like styles.
- Prioritize Critical Styles: Focus on testing styles of critical UI elements that have a significant impact on the user experience or that are essential for accessibility (e.g., color contrast, font sizes).
- Use toHaveStyle Sparingly: Testing Library's toHaveStyle matcher can be useful, but avoid overusing it. Focus on testing the overall visual appearance rather than specific CSS properties.
- Consider Visual Regression Testing: Explore visual regression testing tools (e.g., Percy, Chromatic) for more comprehensive style testing.
- Test CSS Classes: If you are using css modules, or styled components, testing that the correct css classes are applied can be more stable than testing raw styles.
- Balance: Find a balance between testing styles and focusing on functionality. Don't let style testing become a bottleneck in your development process.

Use the triple A method: Arrange, Act, Assert

### CSS modules vs. CSS inheritance

CSS modules fundamentally alter the way CSS inheritance works. While some CSS properties naturally inherit (like font-size or color), the local scoping of CSS modules can sometimes create unexpected results when you expect those inherited values to propagate.

To ensure consistent styling, developers often need to explicitly set inherited properties within each component's CSS module, rather than relying on implicit inheritance. In some cases, you might need to define global styles for certain inherited properties (like `font-family` or `line-height`). However, this should be done sparingly to avoid the global conflicts that CSS modules are designed to prevent.

Next.js, however, specifies in what order CSS module stylesheets are merged into one common stylesheet upon optimization: "The CSS order is determined by the order in which you import the stylesheets into your application code."

To maintain a predictable order, we recommend the following:

- Only import a CSS file in a single JS/TS file.
- If using global class names, import the global styles in the same file in the order you want them to be applied.
- Prefer CSS Modules over global styles.
- Use a consistent naming convention for your CSS modules. For example, using `<name>.module.css` over `<name>.tsx`.
- Extract shared styles into a separate shared component.

### Jest does not support dialog

So the test throw error as showModal is not a function in test react testing library.

Work around:

```javascript
beforeAll(() => {
  HTMLDialogElement.prototype.show = jest.fn();
  HTMLDialogElement.prototype.showModal = jest.fn();
  HTMLDialogElement.prototype.close = jest.fn();
});
```

### Next.js testing setup

https://nextjs.org/docs/app/building-your-application/testing/jest

> `npm install -D eslint-plugin-jest-dom eslint-plugin-testing-library`

#### eslint.config.mjs

```javascript
//...

const eslintConfig = [
  ...compat.extends([
    "next/core-web-vitals",
    "plugin:testing-library/react",
    "plugin:jest-dom/recommended",
  ]),
];

//...
```

### Unit test of animated components

Good practice to fire animation end event: `fireEvent.animationEnd(<DomElement>);`

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

**Next.js:**

- [Next.js Component Naming Conventions: Best Practices for File and Component Names](https://dev.to/vikasparmar/nextjs-component-naming-conventions-best-practices-for-file-and-component-names-39o2)
- [CSS Modules and Global Styles - Ordering and Merging](https://nextjs.org/docs/14/app/building-your-application/styling/css-modules#ordering-and-merging)
- [Project Organization and File Colocation](https://nextjs.org/docs/14/app/building-your-application/routing/colocation)

**Testing:**

- [Jest API](https://jestjs.io/docs/api)
- [Jest for React](https://github.com/testing-library/jest-dom)
- [React Testing Library API](https://testing-library.com/docs/react-testing-library/api)
- [React Testing Library Example](https://www.robinwieruch.de/react-testing-library/)
