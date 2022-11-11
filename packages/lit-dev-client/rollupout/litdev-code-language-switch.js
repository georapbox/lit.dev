import{r as e,s as t,$ as n,n as a}from"./lit.js";import{C as i,g as o,s}from"./code-language-preference.js";let r=class extends t{constructor(){super(...arguments),this._onCodeLanguagePreferenceChanged=()=>{this.requestUpdate()}}connectedCallback(){super.connectedCallback(),window.addEventListener(i,this._onCodeLanguagePreferenceChanged)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(i,this._onCodeLanguagePreferenceChanged)}render(){const e=o();return n`<button role="switch" aria-checked="${"ts"==e?"true":"false"}" aria-label="Toggle TypeScript" title="${"ts"===e?"Disable TypeScript":"Enable TypeScript"}" @click="${this._toggleLanguageAndAdjustScroll}"><span id="jsLabel">JS</span> <span id="tsLabel">TS</span> <span id="toggle"></span></button>`}_toggleLanguageAndAdjustScroll(){const e="ts"===o()?"js":"ts",t=this.getBoundingClientRect().y;s(e);const n=this.getBoundingClientRect().y;window.scrollBy({top:n-t})}};r.styles=e`*,:host{box-sizing:border-box}:host{display:inline-flex;align-items:center;font-size:13px;width:calc(48em / 13);height:calc(27em / 13);border-radius:1em;padding:calc(2em / 13);border:calc(1.5em / 13) solid #ccc;background:#fff;font-family:'Open Sans',sans-serif}button{flex:1;height:100%;display:flex;position:relative;font-size:inherit;font-family:inherit;background:0 0;border:none;align-items:center;justify-content:space-around;cursor:pointer;padding:0;z-index:0}#toggle{position:absolute;width:50%;height:100%;top:0;transition:left .1s;background:#767676;z-index:-1;border-radius:1em}@media (prefers-reduced-motion:reduce){#toggle{transition:none}}button:hover>#toggle{background:#005cc5bd}[aria-checked=false]>#toggle{left:0}[aria-checked=true]>#toggle{left:50%}#jsLabel,#tsLabel{display:inline-flex;z-index:1;padding:0 0 calc(1em / 13) calc(3em / 13);opacity:60%;transition:color .1s,opacity .1s}[aria-checked=false]>#jsLabel,[aria-checked=true]>#tsLabel{color:#fff;font-weight:600;opacity:100%}`,r=((e,t,n,a)=>{for(var i,o=t,s=e.length-1;s>=0;s--)(i=e[s])&&(o=i(o)||o);return o})([a("litdev-code-language-switch")],r);
