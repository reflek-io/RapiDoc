import { css } from "lit-element";

/*
This file is reserved for any custom css that developers want to add to
customize their theme. Simply add your css to this file and yarn build.
*/

export default css`
  :host {
    --border-radius: 4px;
    --border-color: rgba(255, 255, 255, 0.12);
    --light-border-color: rgba(255, 255, 255, 0.12);
    --hover-color: rgba(255, 255, 255, 0.05);
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
