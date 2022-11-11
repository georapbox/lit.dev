import{$ as e,t,s,k as i,m as a,w as r,e as o,a as n}from"../lit.js";import{addModsParameterToUrlIfNeeded as h}from"../mods.js";import{g as l,C as c}from"../code-language-preference.js";import"../litdev-icon-button.js";import"../litdev-example-controls.js";import"../litdev-ripple-icon-button.js";import{h as d,i as _}from"../task.js";import"../tslib.js";import"../mwc-base.js";import"../inert.esm.js";import"../playground-connected-element.js";import"../litdev-code-language-switch.js";const g=e`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 3"><rect style="fill:var(--diamond-icon-color,#324fff)" width="2" height="2" x="1" y="-1" transform="rotate(45)"/></svg>`,m=e`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentcolor" aria-hidden="true"><path d="M7.5 5.6L10 7 8.6 4.5 10 2 7.5 3.4 5 2l1.4 2.5L5 7zm12 9.8L17 14l1.4 2.5L17 19l2.5-1.4L22 19l-1.4-2.5L22 14zM22 2l-2.5 1.4L17 2l1.4 2.5L17 7l2.5-1.4L22 7l-1.4-2.5zm-7.63 5.29c-.39-.39-1.02-.39-1.41 0L1.29 18.96c-.39.39-.39 1.02 0 1.41l2.34 2.34c.39.39 1.02.39 1.41 0L16.7 11.05c.39-.39.39-1.02 0-1.41l-2.33-2.35zm-1.03 5.49l-2.12-2.12 2.44-2.44 2.12 2.12-2.44 2.44z"/></svg>`,u=e`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentcolor" aria-hidden="true"><path d="M12,5V2L8,6l4,4V7c3.31,0,6,2.69,6,6c0,2.97-2.17,5.43-5,5.91v2.02c3.95-0.49,7-3.85,7-7.93C20,8.58,16.42,5,12,5z"/><path d="M6,13c0-1.65,0.67-3.15,1.76-4.24L6.34,7.34C4.9,8.79,4,10.79,4,13c0,4.08,3.05,7.44,7,7.93v-2.02 C8.17,18.43,6,15.97,6,13z"/></svg>`,p=e`<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentcolor"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 8h4V4H4v4m6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zzm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"/></svg>`,v=e`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentcolor"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>`,f=e`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentcolor"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>`,w=e`<svg height="24px" viewBox="0 0 24 24" width="24px" fill="currentcolor"><path d="M7.94,5.12L6.49,3.66C8.07,2.61,9.96,2,12,2c5.52,0,10,4.48,10,10c0,2.04-0.61,3.93-1.66,5.51l-1.46-1.46 C19.59,14.86,20,13.48,20,12c0-4.41-3.59-8-8-8C10.52,4,9.14,4.41,7.94,5.12z M17.66,9.53l-1.41-1.41l-2.65,2.65l1.41,1.41 L17.66,9.53z M19.78,22.61l-2.27-2.27C15.93,21.39,14.04,22,12,22C6.48,22,2,17.52,2,12c0-2.04,0.61-3.93,1.66-5.51L1.39,4.22 l1.41-1.41l18.38,18.38L19.78,22.61z M16.06,18.88l-3.88-3.88l-1.59,1.59l-4.24-4.24l1.41-1.41l2.83,2.83l0.18-0.18L5.12,7.94 C4.41,9.14,4,10.52,4,12c0,4.41,3.59,8,8,8C13.48,20,14.86,19.59,16.06,18.88z"/></svg>`,k=e`<svg height="24px" viewBox="0 0 24 24" width="24px" fill="currentcolor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"/></svg>`,C=e`<svg height="24px" viewBox="0 0 24 24" width="24px" fill="currentcolor"><path d="M14.05,17.58l-0.01,0.01l-2.4-2.4l1.06-1.06l1.35,1.35L16.54,13l1.06,1.06 l-3.54,3.54L14.05,17.58z M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M7.34,6.28l1.41,1.41l1.41-1.41 l1.06,1.06L9.81,8.75l1.41,1.41l-1.06,1.06L8.75,9.81l-1.41,1.41l-1.06-1.06l1.41-1.41L6.28,7.34L7.34,6.28z M12,20 c-2.2,0-4.2-0.9-5.7-2.3L17.7,6.3C19.1,7.8,20,9.8,20,12C20,16.4,16.4,20,12,20z" fill-rule="evenodd"/></svg>`,E=e`<svg height="24px" viewBox="0 0 24 24" width="24px" fill="currentcolor"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"/></svg>`,T={origin:"*",inferTarget:!1,onMessage:()=>{}};var S;!function(e){e.HANDSHAKE="_DOCTOR_HANDSHAKE",e.HANDSHAKE_ACK="_DOCTOR_HANDSHAKE_ACK"}(S||(S={}));class x{constructor(e){this._messageTarget=null,this._messageReceiver=null,this._resolveHandshake=()=>{},this._messageChannel=null,this._messagePort=null,this._handshakeComplete=!1,this._messagePortDirty=!1,this._inferTarget=!0,this._onMessageReceiverMessage=e=>{switch(e.data){case S.HANDSHAKE:this._onHandshake(e);break;case S.HANDSHAKE_ACK:this._onHandshakeAck(e);break;default:e.data}};const{inferTarget:t,origin:s,messageTarget:i,messageReceiver:a,onMessage:r}={...T,...e};this._onMessage=r,this._origin=s,this._inferTarget=t,this._resetHandshake(!0),a&&(this.messageReceiver=a),i&&(this.messageTarget=i)}get handshake(){return this._handshake}get onMessage(){return this._onMessage}set onMessage(e){this._messagePort&&this._messagePort.removeEventListener("message",this._onMessage),this._onMessage=e,this._messagePort&&this._messagePort.addEventListener("message",e)}set messageReceiver(e){this._messageReceiver&&this._messageReceiver.removeEventListener("message",this._onMessageReceiverMessage),this._messageReceiver=e,e&&e.addEventListener("message",this._onMessageReceiverMessage)}get messageReceiver(){return this._messageReceiver}set messageTarget(e){this._messageTarget=e,this._messageTarget&&(this._destroyMessagePort(),this._resetHandshake(),this._postMessageToTarget(S.HANDSHAKE))}get messageTarget(){return this._messageTarget}_resetHandshake(e=!1){(e||this._handshakeComplete)&&(this._handshakeComplete=!1,this._handshake=new Promise((e=>{this._resolveHandshake=e})))}_postMessageToTarget(e,t){if(!this._messageTarget)throw Error("messageTarget not defined");"window"in this._messageTarget?this._messageTarget.postMessage(e,this._origin,t):this._messageTarget.postMessage(e,{transfer:t})}_onHandshake(e){if(this._inferTarget&&!this.messageTarget&&e.source)this._messageTarget=e.source;else if(this.messageTarget&&e.source&&e.source!==this.messageTarget)return;this.messageTarget&&(this._resetHandshake(),this._messagePort&&this._destroyMessagePort(),this._messagePortDirty=!0,this._messageChannel=new MessageChannel,this._messagePort=this._messageChannel.port1,this._messagePort.addEventListener("message",this.onMessage),this._messagePort.start(),this._postMessageToTarget(S.HANDSHAKE_ACK,[this._messageChannel.port2]))}_onHandshakeAck(e){if(this._inferTarget||this.messageTarget){if(!this.messageTarget)throw Error("messageTarget not defined");e.source&&e.source!==this.messageTarget||((!this._messagePort||this._messagePortDirty&&e.ports[0])&&(this._messagePort=e.ports[0],this._messagePort.addEventListener("message",this.onMessage),this._messagePort.start(),this._postMessageToTarget(S.HANDSHAKE_ACK)),this._messagePortDirty=!1,this._handshakeComplete=!0,this._resolveHandshake(this))}}_destroyMessagePort(){this._messageChannel?(this._messageChannel.port1.removeEventListener("message",this.onMessage),this._messageChannel.port1.close(),this._messageChannel.port2.removeEventListener("message",this.onMessage),this._messageChannel.port2.close()):this._messagePort&&(this._messagePort.removeEventListener("message",this.onMessage),this._messagePort.close()),this._messageChannel=null,this._messagePort=null}postMessage(e,t){if(!this._messagePort||!this._handshakeComplete)throw Error("Handhsake not complete");this._messagePort.postMessage(e,t)}}
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M=({idx:e,tutorialUrl:t,hasRecordedStart:s,hasRecordedEnd:i,numSteps:a})=>0!==e&&s?e===a-1||i?e!==a-1||i?null:(window.gtag?.("event","tutorial_end",{category:"tutorials",event_label:t}),"tutorial_end"):(window.gtag?.("event","tutorial_progress",{category:"tutorials",event_label:t,value:e}),"tutorial_progress"):(window.gtag?.("event","tutorial_start",{category:"tutorials",event_label:t,value:e}),"tutorial_start");
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let L;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const b=e=>null===e.parentElement,H=e=>"TEMPLATE"===e.tagName,P=e=>e.nodeType===Node.ELEMENT_NODE
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var $=Object.defineProperty,R=Object.getOwnPropertyDescriptor,j=(e,t,s,i)=>{for(var a,r=i>1?void 0:i?R(t,s):t,o=e.length-1;o>=0;o--)(a=e[o])&&(r=(i?a(t,s,r):a(r))||r);return i&&r&&$(t,s,r),r};const A=!HTMLTemplateElement.prototype.hasOwnProperty("shadowRoot"),N=new DOMParser;class D extends s{constructor(){super(...arguments),this._idx=0,this._checkStatus="INDETERMINATE",this._validationMessage="",this._requestSolvedCode=!1,this._hasRecordedStart=!1,this._hasRecordedEnd=!1,this.onPlaygroundMessage=e=>{if("CHECKING"!==this._checkStatus)return;const{status:t,message:s}=e.data;switch(this._validationMessage=s??"",t){case"PASSED":this._checkStatus="PASSED",this.snackbar.show();break;case"FAILED":this._checkStatus="FAILED",this.snackbar.show();break;case"READY":this._checkStatus="INDETERMINATE"}this._clearCheckingTimeout()},this.postdoc=new x({messageReceiver:window,onMessage:this.onPlaygroundMessage}),this._oldManifestValue=void 0,this._manifestTask=new d(this,(async([e])=>{const t=await fetch(`${this._samplesRoot}/tutorials/${e}/tutorial.json`);if(t.ok)return await t.json();throw Error("Manifest fetch was unsuccessful")}),(()=>[this._projectLocation])),this._oldHtmlValue=void 0,this._htmlTask=new d(this,(async([e])=>{this._requestSolvedCode=!1;const t=this._info;return this._preloadedHtml?.idx===e?await this._preloadedHtml.promise:await this._fetchHtml(t.htmlSrc)}),(()=>[this._idx])),this._onPreviewIFrameLoad=e=>{const t=e.target;this.postdoc.messageTarget=t.contentWindow,this._clearCheckingTimeout()},this._onCodeLanguagePreferenceChanged=()=>{this._info&&this._setProjectSrc(this._requestSolvedCode?this._info.projectSrcAfter:this._info.projectSrcBefore,!0)},this._readUrl=()=>{let e=window.location.hash;e.startsWith("#")&&(e=e.slice(1)),this._idx=""===e?0:this._slugToIdx(e)??this._idx,e.startsWith("0")&&(this._idx++,window.location.hash="#"+this._idxToSlug(this._idx))}}get _manifest(){return this._manifestTask.value??{header:"",steps:[{title:""}]}}get _projectLocation(){return window.location.pathname.replace("/tutorials/","").replace(/\/$/,"")}get _project(){if(this.project)return this.getRootNode().getElementById(this.project)}get _preview(){if(this.preview)return this.getRootNode().getElementById(this.preview)}get _info(){return this._idxToInfo(this._idx)}get _nextInfo(){return this._idxToInfo(this._idx+1)}get _samplesRoot(){return"ts"===l()?"/samples":"/samples/js"}createRenderRoot(){return this}update(e){this._manifest.header&&(document.title=this._manifest.header+" Tutorial – Lit"),super.update(e)}willUpdate(){const e=this._manifestTask.value;if(void 0!==e&&this._oldManifestValue!==e){this._oldManifestValue=e,this._readUrl();const t=M({idx:this._idx,numSteps:this._manifest.steps.length,tutorialUrl:this._projectLocation,hasRecordedStart:this._hasRecordedStart,hasRecordedEnd:this._hasRecordedEnd});this._handleTutorialMetricEvent(t)}const t=this._htmlTask.value;if(void 0!==t&&this._oldHtmlValue!==t){this._oldHtmlValue=t,this._setProjectSrc(this._info.projectSrcBefore);const e=this.renderRoot?.querySelector("#tutorialContent");if(e&&(e.scrollTop=0),this._idx+1<this._manifest.steps.length-1){const e=this._nextInfo;this._preloadedHtml={idx:e.idx,promise:this._fetchHtml(e.htmlSrc)}}}}render(){return e`${this.renderHeader()}${this.renderContent()}`}renderHeader(){return e`<div id="tutorialHeader"><div class="lhs"><a href="/tutorials/" tabindex="-1"><litdev-ripple-icon-button label="Tutorial Catalog">${p}</litdev-ripple-icon-button></a><span class="tutorial-metadata">${this._manifestTask.render({complete:t=>e`<span class="tutorial-title">${t?.header}</span> <span class="title-separator">${g}</span> <span class="step-text">Step</span> <span class="number">${this._idx+1}</span> / <span class="number">${t?.steps.length}</span>`})}</span></div>${this.renderHeaderNav()}</div>`}renderHeaderNav(){return e`<nav><litdev-ripple-icon-button id="prevButton" label="Previous step" .disabled="${this._idx<=0}" @click="${this._onClickPrevButton}">${f}</litdev-ripple-icon-button><litdev-ripple-icon-button id="nextButton" label="Next step" .disabled="${this._idx>=this._manifest.steps.length-1}" @click="${this._onClickNextButton}">${v}</litdev-ripple-icon-button></nav>`}renderContent(){return e`<div id="tutorialContent" class="minimalScroller" ?loading="${this._htmlTask.status===_.PENDING||this._htmlTask.status===_.INITIAL}"><h1>${i(this._idx<this._manifest.steps.length,(()=>this._manifest.steps[this._idx].title))}</h1>${this._manifestTask.render({error:()=>e`${`Could not fetch tutorial manifest. Invalid URL /${this._projectLocation}/`}<br>`})} ${this._htmlTask.render({error:()=>e`${`Could not fetch step description. Invalid URL /${this._projectLocation}/#${this._idxToSlug(this._idx)}`}`,complete:e=>a(e,(()=>{const t=N.parseFromString(e,"text/html",{includeShadowRoots:!0}).body;return A&&(e=>{var t;if(function(){if(void 0===L){const e=document.createElement("div");e.innerHTML='<div><template shadowroot="open"></template></div>',L=!!e.firstElementChild.shadowRoot}return L}())return;const s=[];let i=e.firstElementChild;for(;i!==e&&null!==i;)if(H(i))s.push(i),i=i.content;else if(null!==i.firstElementChild)i=i.firstElementChild;else if(P(i)&&null!==i.nextElementSibling)i=i.nextElementSibling;else{let a;for(;i!==e&&null!==i;)if(b(i)){a=s.pop();const e=a.parentElement,t=a.getAttribute("shadowroot");if(i=a,"open"===t||"closed"===t){const s=a.hasAttribute("shadowrootdelegatesfocus");try{e.attachShadow({mode:t,delegatesFocus:s}).append(a.content)}catch{}}else a=void 0}else{const e=i.nextElementSibling;if(null!=e){i=e,void 0!==a&&a.parentElement.removeChild(a);break}const s=null===(t=i.parentElement)||void 0===t?void 0:t.nextElementSibling;if(null!=s){i=s,void 0!==a&&a.parentElement.removeChild(a);break}i=i.parentElement,void 0!==a&&(a.parentElement.removeChild(a),a=void 0)}}})(t),[...t.children]}))})} ${this.renderFooter()}</div>`}renderFooter(){const t=`The code has ${"PASSED"===this._checkStatus?"passed":"failed"} the checks${this._validationMessage?" – "+this._validationMessage:"."}`;return e`<div id="tutorialFooter">${i(!this._manifest.steps[this._idx].noSolve,(()=>e`<litdev-icon-button @click="${this._onClickSolve}">${m} Solve</litdev-icon-button>`))} ${this._manifestTask.render({complete:e=>this._renderCodeCheckButton(e)})}<litdev-icon-button @click="${this._onClickReset}">${u} Reset</litdev-icon-button><span id="nextStep">${this._renderNextStepStatus()}</span></div><mwc-snackbar .labelText="${t}"></mwc-snackbar>`}_renderCodeCheckButton(t){if(!t.steps[this._idx].checkable)return r;const s="CHECKING"===this._checkStatus?"checking":"",i="CHECKING"===this._checkStatus||this._requestSolvedCode;return e`<litdev-icon-button class="checkButton ${s}" @click="${this._onClickCheck}" ?disabled="${i}">${this._renderCheckIcon()} Check</litdev-icon-button>`}_renderCheckIcon(){switch(this._checkStatus){case"INDETERMINATE":return C;case"CHECKING":return E;case"PASSED":return k;case"FAILED":return w}}_renderNextStepStatus(){return this._htmlTask.status===_.ERROR||this._manifestTask.status!==_.COMPLETE||this._manifest.steps.length<this._idx+1?r:this._idx+1===this._manifest.steps.length?e`<em>Tutorial complete!</em>`:e`Next: <a href="" tabindex="0" @click="${this._onClickNextButton}">${this._manifest.steps[this._idx+1].title}</a>`}connectedCallback(){super.connectedCallback(),window.addEventListener("hashchange",this._readUrl),window.addEventListener(c,this._onCodeLanguagePreferenceChanged);const e=this._preview.localName;customElements.get(e)?this._whenPreviewDefined():customElements.whenDefined(e).then((()=>{this._whenPreviewDefined()}))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("hashchange",this._readUrl),window.removeEventListener(c,this._onCodeLanguagePreferenceChanged),this._preview.iframe.removeEventListener("load",this._onPreviewIFrameLoad)}async _whenPreviewDefined(){const e=this._preview;await e.updateComplete,e.iframe.addEventListener("load",this._onPreviewIFrameLoad)}_onClickSolve(){this._info&&(this._checkStatus="PASSED",this._clearCheckingTimeout(),this._requestSolvedCode=!0,this._setProjectSrc(this._info.projectSrcAfter,!0))}_clearCheckingTimeout(){clearTimeout(this._currentCheckTimeout),this._currentCheckTimeout=void 0}async _onClickCheck(){this._checkStatus="CHECKING",this._currentCheckTimeout=setTimeout((async()=>{this._checkStatus="FAILED",this._validationMessage="The check has timed out!",this.snackbar.show()}),1e4),await this.postdoc.handshake,this.postdoc.postMessage("CHECK")}_onClickReset(){this._info&&(this._checkStatus="INDETERMINATE",this._requestSolvedCode=!1,this._setProjectSrc(this._info.projectSrcBefore,!0))}_onClickNextButton(e){if(e.preventDefault(),this._idx<this._manifest.steps.length-1&&(this._checkStatus="INDETERMINATE",this._clearCheckingTimeout(),this._idx++,this._writeUrl(),this._manifest.steps.length>1&&this._projectLocation)){const e=M({idx:this._idx,tutorialUrl:this._projectLocation,numSteps:this._manifest.steps.length,hasRecordedStart:this._hasRecordedStart,hasRecordedEnd:this._hasRecordedEnd});this._handleTutorialMetricEvent(e)}}_onClickPrevButton(e){e.preventDefault(),this._idx>0&&(this._checkStatus="INDETERMINATE",this._clearCheckingTimeout(),this._idx--,this._writeUrl())}_writeUrl(){this._info&&window.history.pushState(null,"",h(this._info.url))}_setProjectSrc(e,t=!1){const s=this._project;void 0!==s&&(t&&(s.projectSrc=void 0),s.projectSrc=e)}async _fetchHtml(e){const t=await fetch(e);if(!t.ok)throw Error("HTML fetch was unsuccessful");return await t.text()}_slugToIdx(e){const t=Number(e);return isNaN(t)?0:t-1}_idxToSlug(e){return e+1+""}_idxToInfo(e){const t=this._projectLocation,s=0===e?"/tutorials/"+t:`/tutorials/${t}/#${this._idxToSlug(e)}`,i=(e+"").padStart(2,"0"),a=(e+1+"").padStart(2,"0"),r=`/tutorials/content/${t}/${i}/`,o=`${this._samplesRoot}/tutorials/${t}`;return{idx:e,url:s,htmlSrc:r,projectSrcBefore:`${o}/${i}/before/project.json`,projectSrcAfter:this._manifest.steps[e].hasAfter?`${o}/${i}/after/project.json`:`${o}/${a}/before/project.json`}}_handleTutorialMetricEvent(e){if(e)switch(e){case"tutorial_start":this._hasRecordedStart=!0;break;case"tutorial_end":this._hasRecordedEnd=!0}}}j([o()],D.prototype,"project",2),j([o()],D.prototype,"preview",2),j([t()],D.prototype,"_idx",2),j([t()],D.prototype,"_preloadedHtml",2),j([t()],D.prototype,"_checkStatus",2),j([t()],D.prototype,"_validationMessage",2),j([n("mwc-snackbar")],D.prototype,"snackbar",2),j([t()],D.prototype,"_requestSolvedCode",2),customElements.define("litdev-tutorial",D);export{D as LitDevTutorial};
