"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[884],{3884:function(e,t,r){r.d(t,{Z:function(){return R}});var a=r(5893),n=r(7294),l=r(4523);function o(e){let{type:t,timingFunction:r,duration:o,delay:i,trigger:s,children:u,onTransitionEnd:c,clearOnSettled:d=!0}=e,f=n.createRef();return(0,l.Yz)(f,t?[t]:void 0,["active"],s,r,o,i,c,d),(0,a.jsx)(a.Fragment,{children:n.cloneElement(u,{ref:f})})}function i(e){return(0,a.jsx)("ins",{className:"adsbygoogle",style:{display:"block"},"data-ad-client":e.adClient,"data-ad-slot":e.adSlot,"data-ad-format":"auto","data-full-width-responsive":"true"})}let s=n.forwardRef((e,t)=>{let{adClient:r,adSlot:n,props:l}=e;return(0,a.jsx)("div",{ref:t,...l,children:(0,a.jsx)(i,{adClient:r,adSlot:n})})});s.displayName="AdsenseBannerViewPart";var u=r(5865);let c=n.forwardRef((e,t)=>{let{buttons:r,props:l,locale:o}=e,{setPoints:i,setActiveQnaIndex:s}=(0,n.useContext)(u.b);return i?(0,a.jsx)("div",{...l,ref:t,children:r.map((e,t)=>{let{text:r,points:n,...l}=e;return(0,a.jsx)("button",{...l,type:"button",onClick(){i(e=>{if(!e)return n;let t={...e};return Object.keys(n).map(e=>{t[e]+=n[e]}),t}),s(e=>e+=1)},children:r[o]},"answer-".concat(t))})}):(0,a.jsx)(a.Fragment,{})});c.displayName="AnswerViewPart";var d=r(7279);let f=n.forwardRef((e,t)=>{let{text:r,route:l,locale:o,props:i}=e,{pageStatus:s,setPageStatus:u,goNextPage:c}=(0,n.useContext)(d.t);return(0,n.useEffect)(()=>{"leaved"===s&&c(l[o])},[c,o,s,l]),(0,a.jsx)("button",{...i,ref:t,type:"button",role:"link",onClick(){u("leaving")},children:r[o]})});f.displayName="RouteButtonViewPart";var p=r(7117);let y=n.forwardRef((e,t)=>{let{text:r,shareTitle:n,shareText:l,resultIndex:o,locale:i,testCase:s,playerName:u,props:c}=e,d=async(e,t,r)=>{try{"share"in window.navigator?(await window.navigator.share({title:e,text:t,url:r}),(0,p.oc)("share",{view_part:"ShareButtonViewPart",title:e,text:t,url:r})):(await window.navigator.clipboard.writeText(r),alert({ko:"클립보드에 공유 대상 URL이 복사 되었습니다.",en:"Target URL is copied on your clipboard.",ja:"クリップボードに共有ターゲットURLがコピーされました。"}[i]))}catch(a){console.log("CANCELED")}};return u?(0,a.jsx)("button",{...c,ref:t,type:"button",onClick(){let e=[location.origin,i,s,"share?player-name=".concat(encodeURIComponent(u),"&result=").concat(o)].join("/");d(n[i],l[i],e)},children:r[i]}):(console.error("No player name provided"),(0,a.jsx)(a.Fragment,{}))});y.displayName="ShareButtonViewPart";let m=n.forwardRef((e,t)=>{let{buttons:r,testCase:n,locale:l,playerName:o,props:i}=e;return(0,a.jsx)("div",{...i,ref:t,children:r.map((e,t)=>{switch(e.type){case"route-button":return(0,a.jsx)(f,{...e,testCase:n,locale:l,playerName:o},"route-button-view-part-".concat(t));case"share-button":return(0,a.jsx)(y,{...e,testCase:n,locale:l,playerName:o},"share-button-view-part-".concat(t))}})})});m.displayName="ButtonGroupViewPart";let w=n.forwardRef((e,t)=>{let{form:r,text:n,buttonContainerProps:l,locale:o,props:i}=e;return(0,a.jsx)("div",{...l,ref:t,children:(0,a.jsx)("button",{...i,type:"submit",form:r,children:n[o]})})});w.displayName="FormButtonViewPart";var v=r(5675),x=r.n(v),j=r(1163);let h=n.forwardRef((e,t)=>{let{figureProps:r,props:n,captionProps:o,caption:i,fileName:s,alt:u,locale:c,testCase:d}=e,f=(0,j.useRouter)(),p=(0,l.YI)(d,c);return(0,a.jsxs)("figure",{ref:t,...r,children:[(0,a.jsx)(x(),{...n,alt:"function"==typeof u?u(f.query)[c]:u[c],src:"".concat(p,"/").concat("function"==typeof s?s(f.query):s)}),i&&(0,a.jsx)("figcaption",{...o,children:"function"==typeof i?i(f.query)[c]:i[c]})]})});h.displayName="ImageViewPart";let g=n.forwardRef((e,t)=>{let{fields:r,routeBuilder:l,invalidFieldClassName:o,testCase:i,locale:s,props:u}=e,c=(0,n.useRef)(""),{pageStatus:f,setPageStatus:y,goNextPage:m}=(0,n.useContext)(d.t);(0,n.useEffect)(()=>{c.current&&"leaved"===f&&m(c.current)},[m,f]),(0,n.useEffect)(()=>{if("entered"===f&&t.current){var e;let r=null===(e=t.current)||void 0===e?void 0:e.querySelector("input");null==r||r.focus()}},[f,t]);let w=(0,n.useCallback)(e=>{if(e.preventDefault(),!o)return;let t=e.target,r=t.parentElement;r.onanimationend=()=>{r.classList.remove(o),t.focus()},r.classList.add(o)},[o]),v=(0,n.useCallback)(e=>{e.preventDefault();let t=new FormData(e.currentTarget),r=l(t,s,i);c.current=r,(0,p.oc)("route",{view_part:"RouteFormViewPart",route:r,form_data:t,locale:s,test_case:i}),y("leaving")},[s,l,y,i]);return(0,a.jsx)("form",{...u,ref:t,onInvalid:w,onSubmit:v,children:r.map(e=>{let{labelText:t,labelProps:r,inputProps:n}=e;return(0,a.jsxs)("label",{...r,children:[t[s],(0,a.jsx)("input",{...n})]},t[s])})})});g.displayName="RouteFormViewPart";let b=n.forwardRef((e,t)=>{let{text:r,locale:n,props:l}=e,o=(0,j.useRouter)();return(0,a.jsx)("p",{...l,ref:t,children:"function"==typeof r?r(o.query)[n]:r[n]})});b.displayName="TextViewPart";let C=n.forwardRef((e,t)=>{let{tagType:r="h1",text:a,locale:l,props:o}=e,i=(0,j.useRouter)();return n.createElement(r,{...o,ref:t},"function"==typeof a?a(i.query)[l]:a[l])});function N(e){var t;let{viewPartMeta:r,testCase:n,locale:l,playerName:i,pageStatus:u,onTransitionEnd:d}=e;return(0,a.jsx)(o,{...null===(t=r.transition)||void 0===t?void 0:t[u],clearOnSettled:"entering"===u,onTransitionEnd:d,children:(e=>{if("title"===e.type)return(0,a.jsx)(C,{...e,testCase:n,locale:l,playerName:i});if("text"===e.type)return(0,a.jsx)(b,{...e,testCase:n,locale:l,playerName:i});if("image"===e.type)return(0,a.jsx)(h,{...e,testCase:n,locale:l,playerName:i});if("route-form"===e.type)return(0,a.jsx)(g,{...e,testCase:n,locale:l,playerName:i});if("form-button"===e.type)return(0,a.jsx)(w,{...e,testCase:n,locale:l,playerName:i});if("answer"===e.type)return(0,a.jsx)(c,{...e,testCase:n,locale:l,playerName:i});if("route-button"===e.type)return(0,a.jsx)(f,{...e,testCase:n,locale:l,playerName:i});else if("share-button"===e.type)return(0,a.jsx)(y,{...e,testCase:n,locale:l,playerName:i});else if("button-group"===e.type)return(0,a.jsx)(m,{...e,testCase:n,locale:l,playerName:i});else if("adsense-banner"===e.type)return(0,a.jsx)(s,{...e,testCase:n,locale:l});else return console.error("Failed to find matched view part type"),(0,a.jsx)(a.Fragment,{})})(r)})}function R(e){let{testCase:t,locale:r,playerName:l,viewPartMetaList:o,pageStatus:i,onViewPartsEntered:s,onViewPartLeaved:u}=e,c=o.filter(e=>{var t;return null===(t=e.transition)||void 0===t?void 0:t.entering}).length,d=o.filter(e=>{var t;return null===(t=e.transition)||void 0===t?void 0:t.leaving}).length,f=(0,n.useRef)(0),p=(0,n.useRef)(0);return(0,a.jsx)(a.Fragment,{children:o.map((e,n)=>(0,a.jsx)(N,{viewPartMeta:e,testCase:t,locale:r,playerName:l,pageStatus:i,onTransitionEnd(){"entering"===i?(f.current+=1,f.current===c&&(null==s||s())):"leaving"===i&&(p.current+=1,p.current===d&&(null==u||u()))}},"view-part-".concat(n)))})}C.displayName="TitleViewPart"},7117:function(e,t,r){r.d(t,{Ge:function(){return n},oc:function(){return a}});let a=(e,t)=>{window.gtag("event",e,t)};r(2748);let n=(e,t)=>a(e,t)}}]);