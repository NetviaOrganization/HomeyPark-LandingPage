import{r as u}from"./index.CVf8TyFT.js";var i={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m=u,p=Symbol.for("react.element"),_=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,l=m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};function f(t,r,o){var e,n={},a=null,c=null;o!==void 0&&(a=""+o),r.key!==void 0&&(a=""+r.key),r.ref!==void 0&&(c=r.ref);for(e in r)d.call(r,e)&&!v.hasOwnProperty(e)&&(n[e]=r[e]);if(t&&t.defaultProps)for(e in r=t.defaultProps,r)n[e]===void 0&&(n[e]=r[e]);return{$$typeof:p,type:t,key:a,ref:c,props:n,_owner:l.current}}s.Fragment=_;s.jsx=f;s.jsxs=f;i.exports=s;var h=i.exports;const x=t=>{const[r,o]=u.useState(!1);return u.useEffect(()=>{const e=window.matchMedia(t),n=()=>o(e.matches);return e.addEventListener("change",n),o(e.matches),()=>{e.removeEventListener("change",n)}},[t]),r};export{h as j,x as u};
