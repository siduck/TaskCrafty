import{s as x,k as R,l as K,m as ie,r as ne,n as le,c as ue}from"../chunks/scheduler.f6a6b711.js";import{S as F,i as G,r as I,u as N,v as j,d as k,t as T,w as z,g as E,s as L,m as oe,h as y,j as P,c as A,n as re,f as v,E as H,k as b,a as U,x as C,A as D,o as se,p as V,b as X,z as fe,B as M,y as Q}from"../chunks/index.eee7ceb8.js";import{B as J,g as he,a as me,e as O}from"../chunks/button.82dfc6a7.js";import{b as q}from"../chunks/store.eca81e80.js";function de(l){let e,t;const n=[{icon:l[0]},{onClick:l[1]},{class:"btnglass p0"},l[2],{hover:"text-blue"}];let r={};for(let o=0;o<n.length;o+=1)r=R(r,n[o]);return e=new J({props:r}),{c(){I(e.$$.fragment)},l(o){N(e.$$.fragment,o)},m(o,c){j(e,o,c),t=!0},p(o,[c]){const i=c&7?he(n,[c&1&&{icon:o[0]},c&2&&{onClick:o[1]},n[2],c&4&&me(o[2]),n[4]]):{};e.$set(i)},i(o){t||(k(e.$$.fragment,o),t=!0)},o(o){T(e.$$.fragment,o),t=!1},d(o){z(e,o)}}}function ge(l,e,t){let n;const r=["checked","externalClick"];let o=K(e,r),{checked:c=!1}=e,{externalClick:i}=e;const $=()=>{t(3,c=!c),i(c)};return l.$$set=_=>{e=R(R({},e),ie(_)),t(2,o=K(e,r)),"checked"in _&&t(3,c=_.checked),"externalClick"in _&&t(4,i=_.externalClick)},l.$$.update=()=>{l.$$.dirty&8&&t(0,n=c?"i-fluent:checkmark-circle-12-filled":"i-fluent:circle-16-regular")},[n,$,o,c,i]}class _e extends F{constructor(e){super(),G(this,e,ge,de,x,{checked:3,externalClick:4})}}function W(l){let e,t;return e=new J({props:{icon:"i-fluent:delete-12-filled text-sm bg-red2",class:"p1 ml-auto ",onClick:l[4]}}),{c(){I(e.$$.fragment)},l(n){N(e.$$.fragment,n)},m(n,r){j(e,n,r),t=!0},p:le,i(n){t||(k(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){z(e,n)}}}function pe(l){let e,t,n,r,o,c,i,$,_;t=new _e({props:{checked:l[0]=="done",externalClick:l[3]}});let u=l[2]&&W(l);return{c(){e=E("button"),I(t.$$.fragment),n=L(),r=E("p"),o=oe(l[1]),c=L(),u&&u.c(),this.h()},l(g){e=y(g,"BUTTON",{class:!0,hover:!0});var h=P(e);N(t.$$.fragment,h),n=A(h),r=y(h,"P",{});var p=P(r);o=re(p,l[1]),p.forEach(v),c=A(h),u&&u.l(h),h.forEach(v),this.h()},h(){H(r,"line-through",l[0]=="done"),b(e,"class","btnglass justify-start pl3"),b(e,"hover","bg-slate2"),H(e,"!text-slate-5",l[0]=="done")},m(g,h){U(g,e,h),j(t,e,null),C(e,n),C(e,r),C(r,o),C(e,c),u&&u.m(e,null),i=!0,$||(_=[D(e,"click",l[3]),D(e,"mouseenter",l[5]),D(e,"mouseleave",l[6])],$=!0)},p(g,[h]){const p={};h&1&&(p.checked=g[0]=="done"),t.$set(p),(!i||h&2)&&se(o,g[1]),(!i||h&1)&&H(r,"line-through",g[0]=="done"),g[2]?u?(u.p(g,h),h&4&&k(u,1)):(u=W(g),u.c(),k(u,1),u.m(e,null)):u&&(V(),T(u,1,1,()=>{u=null}),X()),(!i||h&1)&&H(e,"!text-slate-5",g[0]=="done")},i(g){i||(k(t.$$.fragment,g),k(u),i=!0)},o(g){T(t.$$.fragment,g),T(u),i=!1},d(g){g&&v(e),z(t),u&&u.d(),$=!1,ne(_)}}}function be(l,e,t){let{name:n}=e,{status:r}=e,o=!1;const c=()=>{t(0,r=r=="done"?"todo":"done"),q.edit(n,r)},i=()=>q.delete(n),$=()=>t(2,o=!0),_=()=>t(2,o=!1);return l.$$set=u=>{"name"in u&&t(1,n=u.name),"status"in u&&t(0,r=u.status)},[r,n,o,c,i,$,_]}class ke extends F{constructor(e){super(),G(this,e,be,pe,x,{name:1,status:0})}}function Y(l,e,t){const n=l.slice();return n[9]=e[t],n}function Z(l,e,t){const n=l.slice();return n[12]=e[t],n}function $e(l){let e,t=l[2](l[12].type).length+"",n,r;return{c(){e=E("span"),n=oe(t),r=L(),this.h()},l(o){e=y(o,"SPAN",{pl:!0});var c=P(e);n=re(c,t),c.forEach(v),r=A(o),this.h()},h(){b(e,"pl","1")},m(o,c){U(o,e,c),C(e,n),U(o,r,c)},p(o,c){c&4&&t!==(t=o[2](o[12].type).length+"")&&se(n,t)},d(o){o&&(v(e),v(r))}}}function ee(l){let e,t;function n(){return l[6](l[12])}return e=new J({props:{text:l[12].name,icon:l[12].icon,hover:"bg-slate7",class:`${l[0]===l[12].type?"bg-white text-black hover:text-white":""}`,onClick:n,$$slots:{default:[$e]},$$scope:{ctx:l}}}),{c(){I(e.$$.fragment)},l(r){N(e.$$.fragment,r)},m(r,o){j(e,r,o),t=!0},p(r,o){l=r;const c={};o&1&&(c.class=`${l[0]===l[12].type?"bg-white text-black hover:text-white":""}`),o&1&&(c.onClick=n),o&32772&&(c.$$scope={dirty:o,ctx:l}),e.$set(c)},i(r){t||(k(e.$$.fragment,r),t=!0)},o(r){T(e.$$.fragment,r),t=!1},d(r){z(e,r)}}}function te(l){let e,t;return e=new ke({props:{name:l[9].name,status:l[9].status}}),{c(){I(e.$$.fragment)},l(n){N(e.$$.fragment,n)},m(n,r){j(e,n,r),t=!0},p(n,r){const o={};r&5&&(o.name=n[9].name),r&5&&(o.status=n[9].status),e.$set(o)},i(n){t||(k(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){z(e,n)}}}function Ce(l){let e,t,n="Today's Todo List",r,o,c,i,$,_,u,g,h,p=O(l[3]),m=[];for(let a=0;a<p.length;a+=1)m[a]=ee(Z(l,p,a));const ae=a=>T(m[a],1,1,()=>{m[a]=null});let S=O(l[2](l[0])),d=[];for(let a=0;a<S.length;a+=1)d[a]=te(Y(l,S,a));const ce=a=>T(d[a],1,1,()=>{d[a]=null});return{c(){e=E("section"),t=E("h2"),t.textContent=n,r=L(),o=E("flex");for(let a=0;a<m.length;a+=1)m[a].c();c=L(),i=E("input"),$=L(),_=E("grid");for(let a=0;a<d.length;a+=1)d[a].c();this.h()},l(a){e=y(a,"SECTION",{class:!0,gap7:!0,p10:!0});var f=P(e);t=y(f,"H2",{text:!0,"data-svelte-h":!0}),fe(t)!=="svelte-kmyzxc"&&(t.textContent=n),r=A(f),o=y(f,"FLEX",{gap3:!0,class:!0,rounded:!0});var s=P(o);for(let B=0;B<m.length;B+=1)m[B].l(s);s.forEach(v),c=A(f),i=y(f,"INPUT",{placeholder:!0,class:!0}),$=A(f),_=y(f,"GRID",{bg:!0,p3:!0,rounded:!0});var w=P(_);for(let B=0;B<d.length;B+=1)d[B].l(w);w.forEach(v),f.forEach(v),this.h()},h(){b(t,"text","center"),b(o,"gap3",""),b(o,"class","bg-black p3"),b(o,"rounded","xl"),b(i,"placeholder","Add Todo"),b(i,"class","border-2 border-solid border-slate3"),b(_,"bg","slate1"),b(_,"p3",""),b(_,"rounded","xl"),b(e,"class","mx-auto flex flex-col"),b(e,"gap7",""),b(e,"p10","")},m(a,f){U(a,e,f),C(e,t),C(e,r),C(e,o);for(let s=0;s<m.length;s+=1)m[s]&&m[s].m(o,null);C(e,c),C(e,i),M(i,l[1]),C(e,$),C(e,_);for(let s=0;s<d.length;s+=1)d[s]&&d[s].m(_,null);u=!0,g||(h=[D(i,"input",l[7]),D(i,"keydown",l[8])],g=!0)},p(a,[f]){if(f&13){p=O(a[3]);let s;for(s=0;s<p.length;s+=1){const w=Z(a,p,s);m[s]?(m[s].p(w,f),k(m[s],1)):(m[s]=ee(w),m[s].c(),k(m[s],1),m[s].m(o,null))}for(V(),s=p.length;s<m.length;s+=1)ae(s);X()}if(f&2&&i.value!==a[1]&&M(i,a[1]),f&5){S=O(a[2](a[0]));let s;for(s=0;s<S.length;s+=1){const w=Y(a,S,s);d[s]?(d[s].p(w,f),k(d[s],1)):(d[s]=te(w),d[s].c(),k(d[s],1),d[s].m(_,null))}for(V(),s=S.length;s<d.length;s+=1)ce(s);X()}},i(a){if(!u){for(let f=0;f<p.length;f+=1)k(m[f]);for(let f=0;f<S.length;f+=1)k(d[f]);u=!0}},o(a){m=m.filter(Boolean);for(let f=0;f<m.length;f+=1)T(m[f]);d=d.filter(Boolean);for(let f=0;f<d.length;f+=1)T(d[f]);u=!1},d(a){a&&v(e),Q(m,a),Q(d,a),g=!1,ne(h)}}}function Te(l,e,t){let n,r;ue(l,q,h=>t(5,r=h));let o=[{name:"All",icon:"i-ic:round-clear-all",type:"all"},{name:"To do",icon:"i-mdi:orbit",type:"todo"},{name:"Completed",icon:"i-line-md:circle-to-confirm-circle-transition",type:"done"}],c="all",i="";const $=()=>{q.new({name:i,status:"todo"}),t(1,i=""),t(0,c="all")},_=h=>t(0,c=h.type);function u(){i=this.value,t(1,i)}const g=h=>h.key==="Enter"&&$();return l.$$.update=()=>{l.$$.dirty&32&&t(2,n=h=>h=="all"?r:r.filter(p=>p.status===h))},[c,i,n,o,$,r,_,u,g]}class ve extends F{constructor(e){super(),G(this,e,Te,Ce,x,{})}}function we(l){let e,t;return e=new ve({}),{c(){I(e.$$.fragment)},l(n){N(e.$$.fragment,n)},m(n,r){j(e,n,r),t=!0},p:le,i(n){t||(k(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){z(e,n)}}}class Le extends F{constructor(e){super(),G(this,e,null,we,x,{})}}export{Le as component};
