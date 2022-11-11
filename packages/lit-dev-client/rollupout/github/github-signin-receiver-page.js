/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=window.opener;if(e){const o=new URL(document.location.href).searchParams,n=o.get("code"),t=o.get("error");let r;r=t?{error:t}:n?{code:n}:{error:"No code"},e.postMessage(r)}else{const e=document.createElement("p");e.textContent="Oops! Something went wrong while signing into GitHub.\nThe Playground tab that opened this window could not be found.",document.body.appendChild(e)}
