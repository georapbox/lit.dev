document.querySelector("#mobileMenuButton")?.addEventListener("click",(()=>{const e=document.querySelector("mwc-drawer");e&&(e.open=!0,e.dispatchEvent(new Event("opening")))}));
