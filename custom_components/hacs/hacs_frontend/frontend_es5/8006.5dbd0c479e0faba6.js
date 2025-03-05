/*! For license information please see 8006.5dbd0c479e0faba6.js.LICENSE.txt */
"use strict";(self.webpackChunkhacs_frontend=self.webpackChunkhacs_frontend||[]).push([["8006"],{74763:function(e,t,i){i.d(t,{l:()=>h});var a=i("9065"),r=i("50778"),o=(i("85601"),i("71695"),i("39527"),i("99790"),i("67670"),i("47021"),i("57243")),n=i("4077");let c,s=e=>e;class l extends o.oi{get chips(){return this.childElements.filter((e=>e instanceof n.A))}constructor(){super(),this.internals=this.attachInternals(),o.sk||(this.addEventListener("focusin",this.updateTabIndices.bind(this)),this.addEventListener("update-focus",this.updateTabIndices.bind(this)),this.addEventListener("keydown",this.handleKeyDown.bind(this)),this.internals.role="toolbar")}render(){return(0,o.dy)(c||(c=s`<slot @slotchange="${0}"></slot>`),this.updateTabIndices)}handleKeyDown(e){const t="ArrowLeft"===e.key,i="ArrowRight"===e.key,a="Home"===e.key,r="End"===e.key;if(!(t||i||a||r))return;const{chips:o}=this;if(o.length<2)return;if(e.preventDefault(),a||r){return o[a?0:o.length-1].focus({trailing:r}),void this.updateTabIndices()}const n="rtl"===getComputedStyle(this).direction?t:i,c=o.find((e=>e.matches(":focus-within")));if(!c){return(n?o[0]:o[o.length-1]).focus({trailing:!n}),void this.updateTabIndices()}const s=o.indexOf(c);let l=n?s+1:s-1;for(;l!==s;){l>=o.length?l=0:l<0&&(l=o.length-1);const e=o[l];if(!e.disabled||e.alwaysFocusable){e.focus({trailing:!n}),this.updateTabIndices();break}n?l++:l--}}updateTabIndices(){const{chips:e}=this;let t;for(const i of e){const e=i.alwaysFocusable||!i.disabled;i.matches(":focus-within")&&e?t=i:(e&&!t&&(t=i),i.tabIndex=-1)}t&&(t.tabIndex=0)}}(0,a.gn)([(0,r.NH)()],l.prototype,"childElements",void 0);let d;const p=(0,o.iv)(d||(d=(e=>e)`:host{display:flex;flex-wrap:wrap;gap:8px}`));let h=class extends l{};h.styles=[p],h=(0,a.gn)([(0,r.Mo)("md-chip-set")],h)},74514:function(e,t,i){i.d(t,{W:()=>g});var a=i("9065"),r=i("50778"),o=(i("71695"),i("19423"),i("47021"),i("57243")),n=i("49144"),c=i("17077");let s,l,d,p=e=>e;class h extends n.w{constructor(){super(...arguments),this.avatar=!1,this.href="",this.target="",this.removeOnly=!1,this.selected=!1}get primaryId(){return this.href?"link":this.removeOnly?"":"button"}get rippleDisabled(){return!this.href&&(this.disabled||this.softDisabled)}get primaryAction(){return this.removeOnly?null:this.renderRoot.querySelector(".primary.action")}getContainerClasses(){return Object.assign(Object.assign({},super.getContainerClasses()),{},{avatar:this.avatar,disabled:!this.href&&(this.disabled||this.softDisabled),link:!!this.href,selected:this.selected,"has-trailing":!0})}renderPrimaryAction(e){const{ariaLabel:t}=this;return this.href?(0,o.dy)(s||(s=p` <a class="primary action" id="link" aria-label="${0}" href="${0}" target="${0}">${0}</a> `),t||o.Ld,this.href,this.target||o.Ld,e):this.removeOnly?(0,o.dy)(l||(l=p` <span class="primary action" aria-label="${0}"> ${0} </span> `),t||o.Ld,e):(0,o.dy)(d||(d=p` <button class="primary action" id="button" aria-label="${0}" aria-disabled="${0}" ?disabled="${0}" type="button">${0}</button> `),t||o.Ld,this.softDisabled||o.Ld,this.disabled&&!this.alwaysFocusable,e)}renderTrailingAction(e){return(0,c.N)({focusListener:e,ariaLabel:this.ariaLabelRemove,disabled:!this.href&&(this.disabled||this.softDisabled),tabbable:this.removeOnly})}}(0,a.gn)([(0,r.Cb)({type:Boolean})],h.prototype,"avatar",void 0),(0,a.gn)([(0,r.Cb)()],h.prototype,"href",void 0),(0,a.gn)([(0,r.Cb)()],h.prototype,"target",void 0),(0,a.gn)([(0,r.Cb)({type:Boolean,attribute:"remove-only"})],h.prototype,"removeOnly",void 0),(0,a.gn)([(0,r.Cb)({type:Boolean,reflect:!0})],h.prototype,"selected",void 0),(0,a.gn)([(0,r.IO)(".trailing.action")],h.prototype,"trailingAction",void 0);let v;const u=(0,o.iv)(v||(v=(e=>e)`:host{--_container-height:var(--md-input-chip-container-height, 32px);--_disabled-label-text-color:var(--md-input-chip-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity:var(--md-input-chip-disabled-label-text-opacity, 0.38);--_disabled-selected-container-color:var(--md-input-chip-disabled-selected-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-selected-container-opacity:var(--md-input-chip-disabled-selected-container-opacity, 0.12);--_label-text-font:var(--md-input-chip-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height:var(--md-input-chip-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size:var(--md-input-chip-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight:var(--md-input-chip-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_selected-container-color:var(--md-input-chip-selected-container-color, var(--md-sys-color-secondary-container, #e8def8));--_selected-focus-label-text-color:var(--md-input-chip-selected-focus-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-label-text-color:var(--md-input-chip-selected-hover-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-state-layer-color:var(--md-input-chip-selected-hover-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-state-layer-opacity:var(--md-input-chip-selected-hover-state-layer-opacity, 0.08);--_selected-label-text-color:var(--md-input-chip-selected-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-outline-width:var(--md-input-chip-selected-outline-width, 0px);--_selected-pressed-label-text-color:var(--md-input-chip-selected-pressed-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-state-layer-color:var(--md-input-chip-selected-pressed-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-state-layer-opacity:var(--md-input-chip-selected-pressed-state-layer-opacity, 0.12);--_disabled-outline-color:var(--md-input-chip-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity:var(--md-input-chip-disabled-outline-opacity, 0.12);--_focus-label-text-color:var(--md-input-chip-focus-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-outline-color:var(--md-input-chip-focus-outline-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-label-text-color:var(--md-input-chip-hover-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color:var(--md-input-chip-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-opacity:var(--md-input-chip-hover-state-layer-opacity, 0.08);--_label-text-color:var(--md-input-chip-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_outline-color:var(--md-input-chip-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width:var(--md-input-chip-outline-width, 1px);--_pressed-label-text-color:var(--md-input-chip-pressed-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-color:var(--md-input-chip-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-opacity:var(--md-input-chip-pressed-state-layer-opacity, 0.12);--_avatar-shape:var(--md-input-chip-avatar-shape, var(--md-sys-shape-corner-full, 9999px));--_avatar-size:var(--md-input-chip-avatar-size, 24px);--_disabled-avatar-opacity:var(--md-input-chip-disabled-avatar-opacity, 0.38);--_disabled-leading-icon-color:var(--md-input-chip-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity:var(--md-input-chip-disabled-leading-icon-opacity, 0.38);--_icon-size:var(--md-input-chip-icon-size, 18px);--_selected-focus-leading-icon-color:var(--md-input-chip-selected-focus-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-leading-icon-color:var(--md-input-chip-selected-hover-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-leading-icon-color:var(--md-input-chip-selected-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-leading-icon-color:var(--md-input-chip-selected-pressed-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-icon-color:var(--md-input-chip-focus-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-leading-icon-color:var(--md-input-chip-hover-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_leading-icon-color:var(--md-input-chip-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_pressed-leading-icon-color:var(--md-input-chip-pressed-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_disabled-trailing-icon-color:var(--md-input-chip-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-icon-opacity:var(--md-input-chip-disabled-trailing-icon-opacity, 0.38);--_selected-focus-trailing-icon-color:var(--md-input-chip-selected-focus-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-trailing-icon-color:var(--md-input-chip-selected-hover-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-trailing-icon-color:var(--md-input-chip-selected-pressed-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-trailing-icon-color:var(--md-input-chip-selected-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_focus-trailing-icon-color:var(--md-input-chip-focus-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-icon-color:var(--md-input-chip-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-trailing-icon-color:var(--md-input-chip-pressed-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-icon-color:var(--md-input-chip-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_container-shape-start-start:var(--md-input-chip-container-shape-start-start, var(--md-input-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-start-end:var(--md-input-chip-container-shape-start-end, var(--md-input-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-end-end:var(--md-input-chip-container-shape-end-end, var(--md-input-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-end-start:var(--md-input-chip-container-shape-end-start, var(--md-input-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_leading-space:var(--md-input-chip-leading-space, 16px);--_trailing-space:var(--md-input-chip-trailing-space, 16px);--_icon-label-space:var(--md-input-chip-icon-label-space, 8px);--_with-leading-icon-leading-space:var(--md-input-chip-with-leading-icon-leading-space, 8px);--_with-trailing-icon-trailing-space:var(--md-input-chip-with-trailing-icon-trailing-space, 8px)}:host([avatar]){--_container-shape-start-start:var( --md-input-chip-container-shape-start-start, var(--md-input-chip-container-shape, calc(var(--_container-height) / 2)) );--_container-shape-start-end:var( --md-input-chip-container-shape-start-end, var(--md-input-chip-container-shape, calc(var(--_container-height) / 2)) );--_container-shape-end-end:var( --md-input-chip-container-shape-end-end, var(--md-input-chip-container-shape, calc(var(--_container-height) / 2)) );--_container-shape-end-start:var( --md-input-chip-container-shape-end-start, var(--md-input-chip-container-shape, calc(var(--_container-height) / 2)) )}.avatar .primary.action{padding-inline-start:4px}.avatar .leading.icon ::slotted(:first-child){border-radius:var(--_avatar-shape);height:var(--_avatar-size);width:var(--_avatar-size)}.disabled.avatar .leading.icon{opacity:var(--_disabled-avatar-opacity)}@media(forced-colors:active){.link .outline{border-color:ActiveText}.disabled.avatar .leading.icon{opacity:1}}`));var m=i("98128"),b=i("21016"),y=i("86529");let g=class extends h{};g.styles=[b.W,y.W,m.W,u],g=(0,a.gn)([(0,r.Mo)("md-input-chip")],g)},49144:function(e,t,i){i.d(t,{w:function(){return s}});var a=i(57243),r=i(4077);let o,n=e=>e;const c="aria-label-remove";class s extends r.A{get ariaLabelRemove(){if(this.hasAttribute(c))return this.getAttribute(c);const{ariaLabel:e}=this;return e||this.label?`Remove ${e||this.label}`:null}set ariaLabelRemove(e){e!==this.ariaLabelRemove&&(null===e?this.removeAttribute(c):this.setAttribute(c,e),this.requestUpdate())}constructor(){super(),this.handleTrailingActionFocus=this.handleTrailingActionFocus.bind(this),a.sk||this.addEventListener("keydown",this.handleKeyDown.bind(this))}focus(e){(this.alwaysFocusable||!this.disabled)&&null!=e&&e.trailing&&this.trailingAction?this.trailingAction.focus(e):super.focus(e)}renderContainerContent(){return(0,a.dy)(o||(o=n` ${0} ${0} `),super.renderContainerContent(),this.renderTrailingAction(this.handleTrailingActionFocus))}handleKeyDown(e){var t,i;const a="ArrowLeft"===e.key,r="ArrowRight"===e.key;if(!a&&!r)return;if(!this.primaryAction||!this.trailingAction)return;const o="rtl"===getComputedStyle(this).direction?a:r,n=null===(t=this.primaryAction)||void 0===t?void 0:t.matches(":focus-within"),c=null===(i=this.trailingAction)||void 0===i?void 0:i.matches(":focus-within");if(o&&c||!o&&n)return;e.preventDefault(),e.stopPropagation();(o?this.trailingAction:this.primaryAction).focus()}handleTrailingActionFocus(){const{primaryAction:e,trailingAction:t}=this;e&&t&&(e.tabIndex=-1,t.addEventListener("focusout",(()=>{e.tabIndex=0}),{once:!0}))}}},98128:function(e,t,i){i.d(t,{W:function(){return r}});let a;const r=(0,i(57243).iv)(a||(a=(e=>e)`.selected{--md-ripple-hover-color:var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity:var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-color:var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity:var(--_selected-pressed-state-layer-opacity)}:where(.selected)::before{background:var(--_selected-container-color)}:where(.selected) .outline{border-width:var(--_selected-outline-width)}:where(.selected.disabled)::before{background:var(--_disabled-selected-container-color);opacity:var(--_disabled-selected-container-opacity)}:where(.selected) .label{color:var(--_selected-label-text-color)}:where(.selected:hover) .label{color:var(--_selected-hover-label-text-color)}:where(.selected:focus) .label{color:var(--_selected-focus-label-text-color)}:where(.selected:active) .label{color:var(--_selected-pressed-label-text-color)}:where(.selected) .leading.icon{color:var(--_selected-leading-icon-color)}:where(.selected:hover) .leading.icon{color:var(--_selected-hover-leading-icon-color)}:where(.selected:focus) .leading.icon{color:var(--_selected-focus-leading-icon-color)}:where(.selected:active) .leading.icon{color:var(--_selected-pressed-leading-icon-color)}@media(forced-colors:active){:where(.selected:not(.elevated))::before{border:1px solid CanvasText}:where(.selected) .outline{border-width:1px}}`))},86529:function(e,t,i){i.d(t,{W:function(){return r}});let a;const r=(0,i(57243).iv)(a||(a=(e=>e)`.trailing.action{align-items:center;justify-content:center;padding-inline-start:var(--_icon-label-space);padding-inline-end:var(--_with-trailing-icon-trailing-space)}.trailing.action :is(md-ripple,md-focus-ring){border-radius:50%;height:calc(1.3333333333*var(--_icon-size));width:calc(1.3333333333*var(--_icon-size))}.trailing.action md-focus-ring{inset:unset}.has-trailing .primary.action{padding-inline-end:0}.trailing.icon{color:var(--_trailing-icon-color);height:var(--_icon-size);width:var(--_icon-size)}:where(:hover) .trailing.icon{color:var(--_hover-trailing-icon-color)}:where(:focus) .trailing.icon{color:var(--_focus-trailing-icon-color)}:where(:active) .trailing.icon{color:var(--_pressed-trailing-icon-color)}:where(.disabled) .trailing.icon{color:var(--_disabled-trailing-icon-color);opacity:var(--_disabled-trailing-icon-opacity)}:where(.selected) .trailing.icon{color:var(--_selected-trailing-icon-color)}:where(.selected:hover) .trailing.icon{color:var(--_selected-hover-trailing-icon-color)}:where(.selected:focus) .trailing.icon{color:var(--_selected-focus-trailing-icon-color)}:where(.selected:active) .trailing.icon{color:var(--_selected-pressed-trailing-icon-color)}@media(forced-colors:active){.trailing.icon{color:ButtonText}:where(.disabled) .trailing.icon{color:GrayText;opacity:1}}`))},17077:function(e,t,i){i.d(t,{N:function(){return n}});i(57618),i(23111);var a=i(57243);let r,o=e=>e;function n({ariaLabel:e,disabled:t,focusListener:i,tabbable:n=!1}){return(0,a.dy)(r||(r=o` <span id="remove-label" hidden aria-hidden="true">Remove</span> <button class="trailing action" aria-label="${0}" aria-labelledby="${0}" tabindex="${0}" @click="${0}" @focus="${0}"> <md-focus-ring part="trailing-focus-ring"></md-focus-ring> <md-ripple ?disabled="${0}"></md-ripple> <span class="trailing icon" aria-hidden="true"> <slot name="remove-trailing-icon"> <svg viewBox="0 96 960 960"> <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/> </svg> </slot> </span> <span class="touch"></span> </button> `),e||a.Ld,e?a.Ld:"remove-label label",n?a.Ld:-1,c,i,t)}function c(e){if(this.disabled||this.softDisabled)return;e.stopPropagation();!this.dispatchEvent(new Event("remove",{cancelable:!0}))||this.remove()}},91583:function(e,t,i){i.d(t,{r:()=>c});i("52247"),i("71695"),i("47021");var a=i("2841"),r=i("45779"),o=i("53232");const n=(e,t,i)=>{const a=new Map;for(let r=t;r<=i;r++)a.set(e[r],r);return a},c=(0,r.XM)(class extends r.Xe{constructor(e){if(super(e),e.type!==r.pX.CHILD)throw Error("repeat() can only be used in text expressions")}ct(e,t,i){let a;void 0===i?i=t:void 0!==t&&(a=t);const r=[],o=[];let n=0;for(const c of e)r[n]=a?a(c,n):n,o[n]=i(c,n),n++;return{values:o,keys:r}}render(e,t,i){return this.ct(e,t,i).values}update(e,[t,i,r]){var c;const s=(0,o.i9)(e),{values:l,keys:d}=this.ct(t,i,r);if(!Array.isArray(s))return this.ut=d,l;const p=null!==(c=this.ut)&&void 0!==c?c:this.ut=[],h=[];let v,u,m=0,b=s.length-1,y=0,g=l.length-1;for(;m<=b&&y<=g;)if(null===s[m])m++;else if(null===s[b])b--;else if(p[m]===d[y])h[y]=(0,o.fk)(s[m],l[y]),m++,y++;else if(p[b]===d[g])h[g]=(0,o.fk)(s[b],l[g]),b--,g--;else if(p[m]===d[g])h[g]=(0,o.fk)(s[m],l[g]),(0,o._Y)(e,h[g+1],s[m]),m++,g--;else if(p[b]===d[y])h[y]=(0,o.fk)(s[b],l[y]),(0,o._Y)(e,s[m],s[b]),b--,y++;else if(void 0===v&&(v=n(d,y,g),u=n(p,m,b)),v.has(p[m]))if(v.has(p[b])){const t=u.get(d[y]),i=void 0!==t?s[t]:null;if(null===i){const t=(0,o._Y)(e,s[m]);(0,o.fk)(t,l[y]),h[y]=t}else h[y]=(0,o.fk)(i,l[y]),(0,o._Y)(e,s[m],i),s[t]=null;y++}else(0,o.ws)(s[b]),b--;else(0,o.ws)(s[m]),m++;for(;y<=g;){const t=(0,o._Y)(e,h[g+1]);(0,o.fk)(t,l[y]),h[y++]=t}for(;m<=b;){const e=s[m++];null!==e&&(0,o.ws)(e)}return this.ut=d,(0,o.hl)(e,h),a.Jb}})}}]);
//# sourceMappingURL=8006.5dbd0c479e0faba6.js.map