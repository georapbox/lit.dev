/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class e extends HTMLElement{connectedCallback(){this._observer=new ResizeObserver((e=>{const t=e.find((e=>e.target===this))?.borderBoxSize[0];t&&document.documentElement.style.setProperty("--banner-height",t.blockSize+"px")})),this._observer.observe(this)}disconnectedCallback(){this._observer?.disconnect(),this._observer=void 0}}customElements.define("litdev-banner",e);export{e as LitDevBanner};
