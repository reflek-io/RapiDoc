import { css } from "lit-element";

/*
This file is reserved for any custom css that developers want to add to
customize their theme. Simply add your css to this file and yarn build.
*/

export default css`
  :host {
    --border-radius: 4px;
    --bg: #21272a;
    --bg2: #1c2225;
    --bg3: #12181b;
    --light-bg: #000000;
    --fg: #fff;
    --fg2: #ffffff;
    --fg3: #ffffff;
    --light-fg: #ffffff;
    --selection-bg: #444;
    --selection-fg: #eee;
    --overlay-bg: rgba(0, 0, 0, 0.4);
    --border-color: rgba(255, 255, 255, 0.12);
    --light-border-color: rgba(255, 255, 255, 0.12);
    --code-border-color: transparent;
    --input-bg: #2b3134;
    --placeholder-color: #ffffff;
    --hover-color: rgba(255, 255, 255, 0.05);
    --red: #f06560;
    --light-red: #fff0f0;
    --pink: #990055;
    --light-pink: #ffb2b2;
    --green: #690;
    --light-green: #fbfff0;
    --blue: #47afe8;
    --light-blue: #eff8fd;
    --orange: #ff9900;
    --light-orange: #fff5e6;
    --yellow: #827717;
    --light-yellow: #fff5cc;
    --purple: #786ff1;
    --brown: #d4ac0d;
    --header-bg: #fff;
    --header-fg: #000;
    --header-color-darker: #ebebeb;
    --header-color-border: #ffffff;
    --nav-bg-color: #21272a;
    --nav-text-color: #a2a9b0;
    --nav-hover-bg-color: #21272a;
    --nav-hover-text-color: #f8f9fc;
    --nav-accent-color: #fff;
    --primary-color: #dde1e6;
    --primary-color-invert: #000;
    --primary-color-trans: rgba(221, 225, 230, 0.8);
    --code-bg: rgba(18, 24, 27, 0.7);
    --code-fg: #666;
    --inline-code-fg: brown;
    --code-property-color: #905;
    --code-keyword-color: #07a;
    --code-operator-color: #9a6e3a;
  }

  /* nav button */
  nav .nav-bar-path {
    font-size: 15px;
    line-height: 20px;
  }

  /* nav section header */
  nav .nav-bar-tag {
    font-size: 15px;
    line-height: 20px;
    text-transform: none !important;
    font-family: "FuturaPTWebMedium";
    margin-top: 16px;
    padding-bottom: 8px;
    cursor: auto !important;
    color: #fff !important;
    margin-left: 10px;
  }

  nav .nav-bar-tag.active {
    margin-top: 25px;
    padding-bottom: 8px;
  }

  nav {
    padding-bottom: 16px;
  }

  nav hr {
    margin-top: 24px !important;
    margin-bottom: -4px !important;
  }

  .operations-root > section {
    border-top: none !important;
  }

  .operations-root > section > .divider {
    display: none;
  }

  /* section header */
  section > .tag.title {
    margin-top: 80px;
    font-size: 36px;
    line-height: 48px;
    text-transform: none;
    font-family: "FuturaPTWebMedium";
  }

  /* section subheader */
  .expanded-endpoint-body > h2 {
    padding: 0;
    font-size: 28px;
    line-height: 40px;
    font-family: "FuturaPTWebMedium";
  }

  /* section subheader (custom content) */
  .m-markdown h1 {
    letter-spacing: 0.025em;
    font-size: 28px;
    line-height: 40px;
    font-family: "FuturaPTWebMedium";
  }

  section > .expanded-endpoint-body {
    padding-top: 0;
    padding-bottom: 64px;
  }
  section > .expanded-endpoint-body:last-child {
    padding-bottom: 0;
  }

  .req-res-title {
    font-size: 24px;
    line-height: 32px;
    font-weight: 400;
    text-transform: lowercase;
  }
  .req-res-title::first-letter {
    text-transform: uppercase;
  }

  .request-panel table {
    padding: 16px;
    margin: 12px 0px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
  }
  .request-panel table td {
    border-top: none !important;
  }
  .request-panel table tr:last-child td {
    padding: 0 !important;
  }
  .request-panel table input {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.05);
  }

  .tab-buttons {
    height: 40px;
    border-bottom: 1px solid transparent;
  }
  .tab-btn {
    font-size: 15px;
    text-transform: lowercase;
  }
  .tab-btn::first-letter {
    text-transform: uppercase;
  }
  .tab-btn.active {
    border-bottom: 2px solid #ff8390;
    border-radius: 0;
  }

  json-tree,
  schema-tree {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    border-top-left-radius: 0 !important;
    padding: 8px 16px;
  }
`;
