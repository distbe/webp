function y(){}const at=t=>t;function J(t,n){for(const e in n)t[e]=n[e];return t}function L(t){return t()}function M(){return Object.create(null)}function b(t){t.forEach(L)}function T(t){return typeof t=="function"}function ft(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let $;function dt(t,n){return $||($=document.createElement("a")),$.href=n,t===$.href}function K(t){return Object.keys(t).length===0}function Q(t,...n){if(t==null)return y;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function _t(t,n,e){t.$$.on_destroy.push(Q(n,e))}function ht(t,n,e,i){if(t){const r=z(t,n,e,i);return t[0](r)}}function z(t,n,e,i){return t[1]&&i?J(e.ctx.slice(),t[1](i(n))):e.ctx}function mt(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const s=[],c=Math.max(n.dirty.length,r.length);for(let l=0;l<c;l+=1)s[l]=n.dirty[l]|r[l];return s}return n.dirty|r}return n.dirty}function pt(t,n,e,i,r,s){if(r){const c=z(n,e,i,s);t.p(c,r)}}function yt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}const B=typeof window<"u";let gt=B?()=>window.performance.now():()=>Date.now(),D=B?t=>requestAnimationFrame(t):y;const m=new Set;function O(t){m.forEach(n=>{n.c(t)||(m.delete(n),n.f())}),m.size!==0&&D(O)}function bt(t){let n;return m.size===0&&D(O),{promise:new Promise(e=>{m.add(n={c:t,f:e})}),abort(){m.delete(n)}}}let E=!1;function R(){E=!0}function U(){E=!1}function V(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function X(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let u=0;u<n.length;u++){const f=n[u];f.claim_order!==void 0&&o.push(f)}n=o}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let o=0;o<n.length;o++){const u=n[o].claim_order,f=(r>0&&n[e[r]].claim_order<=u?r+1:V(1,r,x=>n[e[x]].claim_order,u))-1;i[o]=e[f]+1;const a=f+1;e[a]=o,r=Math.max(a,r)}const s=[],c=[];let l=n.length-1;for(let o=e[r]+1;o!=0;o=i[o-1]){for(s.push(n[o-1]);l>=o;l--)c.push(n[l]);l--}for(;l>=0;l--)c.push(n[l]);s.reverse(),c.sort((o,u)=>o.claim_order-u.claim_order);for(let o=0,u=0;o<c.length;o++){for(;u<s.length&&c[o].claim_order>=s[u].claim_order;)u++;const f=u<s.length?s[u]:null;t.insertBefore(c[o],f)}}function Y(t,n){if(E){for(X(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function xt(t,n,e){E&&!e?Y(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function Z(t){t.parentNode&&t.parentNode.removeChild(t)}function $t(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function tt(t){return document.createElement(t)}function k(t){return document.createTextNode(t)}function wt(){return k(" ")}function vt(){return k("")}function Et(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function Nt(t){return function(n){return n.preventDefault(),t.call(this,n)}}function St(t){return function(n){return n.stopPropagation(),t.call(this,n)}}function At(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function jt(t){return t===""?null:+t}function nt(t){return Array.from(t.childNodes)}function et(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function F(t,n,e,i,r=!1){et(t);const s=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const l=t[c];if(n(l)){const o=e(l);return o===void 0?t.splice(c,1):t[c]=o,r||(t.claim_info.last_index=c),l}}for(let c=t.claim_info.last_index-1;c>=0;c--){const l=t[c];if(n(l)){const o=e(l);return o===void 0?t.splice(c,1):t[c]=o,r?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,l}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function it(t,n,e,i){return F(t,r=>r.nodeName===n,r=>{const s=[];for(let c=0;c<r.attributes.length;c++){const l=r.attributes[c];e[l.name]||s.push(l.name)}s.forEach(c=>r.removeAttribute(c))},()=>i(n))}function kt(t,n,e){return it(t,n,e,tt)}function rt(t,n){return F(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>k(n),!0)}function qt(t){return rt(t," ")}function Ct(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function Mt(t,n){t.value=n??""}function Pt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function Lt(t,n){for(let e=0;e<t.options.length;e+=1){const i=t.options[e];if(i.__value===n){i.selected=!0;return}}t.selectedIndex=-1}function Tt(t){const n=t.querySelector(":checked")||t.options[0];return n&&n.__value}function zt(t,n,e){t.classList[e?"add":"remove"](n)}function Bt(t,n){return new t(n)}let g;function p(t){g=t}function I(){if(!g)throw new Error("Function called outside component initialization");return g}function Dt(t){I().$$.on_mount.push(t)}function Ot(t){I().$$.after_update.push(t)}function Ft(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(i=>i.call(this,n))}const h=[],P=[],w=[],S=[],H=Promise.resolve();let A=!1;function W(){A||(A=!0,H.then(G))}function It(){return W(),H}function j(t){w.push(t)}function Ht(t){S.push(t)}const N=new Set;let _=0;function G(){if(_!==0)return;const t=g;do{try{for(;_<h.length;){const n=h[_];_++,p(n),ct(n.$$)}}catch(n){throw h.length=0,_=0,n}for(p(null),h.length=0,_=0;P.length;)P.pop()();for(let n=0;n<w.length;n+=1){const e=w[n];N.has(e)||(N.add(e),e())}w.length=0}while(h.length);for(;S.length;)S.pop()();A=!1,N.clear(),p(t)}function ct(t){if(t.fragment!==null){t.update(),b(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(j)}}const v=new Set;let d;function Wt(){d={r:0,c:[],p:d}}function Gt(){d.r||b(d.c),d=d.p}function ot(t,n){t&&t.i&&(v.delete(t),t.i(n))}function Jt(t,n,e,i){if(t&&t.o){if(v.has(t))return;v.add(t),d.c.push(()=>{v.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function Kt(t,n,e){const i=t.$$.props[n];i!==void 0&&(t.$$.bound[i]=e,e(t.$$.ctx[i]))}function Qt(t){t&&t.c()}function Rt(t,n){t&&t.l(n)}function ut(t,n,e,i){const{fragment:r,after_update:s}=t.$$;r&&r.m(n,e),i||j(()=>{const c=t.$$.on_mount.map(L).filter(T);t.$$.on_destroy?t.$$.on_destroy.push(...c):b(c),t.$$.on_mount=[]}),s.forEach(j)}function lt(t,n){const e=t.$$;e.fragment!==null&&(b(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function st(t,n){t.$$.dirty[0]===-1&&(h.push(t),W(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Ut(t,n,e,i,r,s,c,l=[-1]){const o=g;p(t);const u=t.$$={fragment:null,ctx:[],props:s,update:y,not_equal:r,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(o?o.$$.context:[])),callbacks:M(),dirty:l,skip_bound:!1,root:n.target||o.$$.root};c&&c(u.root);let f=!1;if(u.ctx=e?e(t,n.props||{},(a,x,...q)=>{const C=q.length?q[0]:x;return u.ctx&&r(u.ctx[a],u.ctx[a]=C)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](C),f&&st(t,a)),x}):[],u.update(),f=!0,b(u.before_update),u.fragment=i?i(u.ctx):!1,n.target){if(n.hydrate){R();const a=nt(n.target);u.fragment&&u.fragment.l(a),a.forEach(Z)}else u.fragment&&u.fragment.c();n.intro&&ot(t.$$.fragment),ut(t,n.target,n.anchor,n.customElement),U(),G()}p(o)}class Vt{$destroy(){lt(this,1),this.$destroy=y}$on(n,e){if(!T(e))return y;const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!K(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{b as $,ut as A,lt as B,ht as C,pt as D,yt as E,mt as F,Y as G,y as H,_t as I,J,gt as K,bt as L,at as M,zt as N,Et as O,Kt as P,Ht as Q,Mt as R,Vt as S,jt as T,j as U,Lt as V,$t as W,Tt as X,dt as Y,St as Z,Nt as _,wt as a,Ft as a0,xt as b,qt as c,Jt as d,vt as e,Gt as f,ot as g,Z as h,Ut as i,Ot as j,tt as k,kt as l,nt as m,At as n,Dt as o,Pt as p,k as q,rt as r,ft as s,It as t,Ct as u,Wt as v,P as w,Bt as x,Qt as y,Rt as z};