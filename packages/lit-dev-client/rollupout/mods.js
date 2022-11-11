/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const r=new URL(window.location.href),e=r.searchParams.get("mods"),n=n=>{if(e){const s=new URL(n,r);if(s.origin===r.origin)return s.searchParams.set("mods",e),s.href}return n},s=r=>null!==e&&e.split(" ").includes(r);export{e as MODS,n as addModsParameterToUrlIfNeeded,s as modEnabled};
