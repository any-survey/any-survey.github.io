(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[769],{2467:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[locale]/[testCase]/qna",function(){return n(434)}])},434:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return d},default:function(){return h}});var r=n(5893),s=n(1163),a=n(7294),l=n(7019),c=n.n(l);function o(e){let{rate:t}=e;return(0,r.jsx)("div",{className:c().container,children:(0,r.jsx)("div",{className:c().progressBar,style:{width:"".concat(t,"%")}})})}var u=n(3884),i=n(7279),f=n(5865),_=n(4523),d=!0;function h(e){let{testCase:t,locale:n}=e,l=(0,s.useRouter)(),c=String(l.query["player-name"]),d=(0,_.yl)(t),{goNextPage:h}=(0,a.useContext)(i.t),{points:g,activeQnaIndex:x,setActiveQnaIndex:p}=(0,a.useContext)(f.b),[j,m]=(0,a.useState)(!1);(0,a.useEffect)(()=>{p(0)},[p]),(0,a.useLayoutEffect)(()=>{m(!1)},[x]);let q=()=>{if(!(null==d?void 0:d.qna)||!(null==d?void 0:d.result)||!g)throw Error("Failed to compute result");let e=0,t=1/0;return d.result.forEach((n,r)=>{let{standard:s}=n,a=0;for(let l in s)a+=Math.abs(s[l]-g[l]/d.qna.length);let c=a/d.qna.length;c<t&&(t=c,e=r)}),e},w=e=>{h("/".concat(n,"/").concat(t,"/result?player-name=").concat(encodeURIComponent(c),"&result=").concat(e))};return d&&d.qna&&d.result?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o,{rate:x/d.qna.length*100}),(0,r.jsx)("section",{id:"qna",children:(e=>{let s=e[x-1],a=e[x];return(0,r.jsxs)(r.Fragment,{children:[s&&!j&&(0,r.jsx)("article",{className:"question",children:(0,r.jsx)(u.Z,{testCase:t,locale:n,viewPartMetaList:s,pageStatus:"leaving",onViewPartLeaved(){if(m(!0),!a){let e=q();w(e)}}})}),a&&(!s||j)&&(0,r.jsx)("article",{className:"question",children:(0,r.jsx)(u.Z,{testCase:t,locale:n,viewPartMetaList:a,pageStatus:"entering"})})]})})(d.qna)})]}):(0,r.jsx)(r.Fragment,{})}},7019:function(e){e.exports={container:"styles_container__4T3Wt",progressBar:"styles_progressBar__9CSgx"}}},function(e){e.O(0,[675,884,774,888,179],function(){return e(e.s=2467)}),_N_E=e.O()}]);