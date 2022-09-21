import{_ as T,r as l,a as b,U as f,i as w,b as r,o as v,c as g,d as e,w as x,e as d,t as k,F as y,f as C,p as S,j as I,u as L,s as O,T as R}from"./index.b7b39bcc.js";import{c as z}from"./api.5dd931a9.js";const B={name:"Cell",setup(){const a=l(""),p=l(""),c=l(""),t=l(""),h=l(""),u=l(""),i=l("");b(()=>{o()});const o=()=>{let n=new Date().getTime(),m={data:{},timestamp:n,sign:f.sisgn(n,f.sign())};w.post(z,m).then(_=>{if(_.data.code===200){let s=_.data.data;a.value=s.scale,p.value=s.health,c.value=s.plugged,t.value=s.voltage,h.value=s.temperature,u.value=s.status,i.value=s.level}})};return{getPageList:o,scale:a,health:p,plugged:c,voltage:t,temperature:h,status:u,level:i}}},P=a=>(S("data-v-02090d6e"),a=a(),I(),a),E={class:"cell"},N={class:"g-container"},U={class:"g-number"},D={class:"g-contrast"},F=P(()=>d("div",{class:"g-circle"},null,-1)),G={class:"g-bubbles"};function V(a,p,c,t,h,u){const i=r("van-cell"),o=r("van-cell-group");return v(),g("div",E,[e(o,{inset:""},{default:x(()=>[e(i,{title:"\u5145\u6EE1\u7535\u91CF",value:t.scale},null,8,["value"]),e(i,{title:"\u5065\u5EB7\u5EA6",value:t.health},null,8,["value"]),e(i,{title:"\u5145\u7535\u5668",value:t.plugged},null,8,["value"])]),_:1}),d("div",N,[d("div",U,k(t.level),1),d("div",D,[F,d("ul",G,[(v(),g(y,null,C(15,(n,m)=>d("li",{key:m})),64))])])]),e(o,{inset:""},{default:x(()=>[e(i,{title:"\u5F53\u524D\u7535\u538B",value:t.voltage},null,8,["value"]),e(i,{title:"\u5F53\u524D\u6E29\u5EA6",value:t.temperature},null,8,["value"]),e(i,{title:"\u7535\u6C60\u72B6\u6001",value:t.status},null,8,["value"])]),_:1})])}var j=T(B,[["render",V],["__scopeId","data-v-02090d6e"]]);const M={name:"Setting",components:{Cell:j},setup(){const a=L();return{logOut:()=>{localStorage.clear(),O.dispatch("IS_LOGIN_POPUP",!0),a.replace({path:"/"})},msg:()=>{R({message:"\u4E0B\u6B21\u518D\u8BF4",icon:"like-o"})},switchoverTheme:()=>{f.theme()}}}},q={id:"Setting"};function A(a,p,c,t,h,u){const i=r("van-nav-bar"),o=r("Cell"),n=r("van-cell"),m=r("van-cell-group");return v(),g("div",q,[e(i,{title:"\u8BBE\u7F6E"}),e(o),e(m,{inset:""},{default:x(()=>[e(n,{icon:"https://img.ichuguang.com/imgs/2022/07/71c1a8c32da1772e.png",title:"\u5207\u6362\u914D\u7F6E","is-link":"",onClick:t.msg},null,8,["onClick"]),e(n,{icon:"https://img.ichuguang.com/imgs/2022/07/173ff349af76e415.png",title:"\u5207\u6362\u4E3B\u9898","is-link":"",onClick:t.switchoverTheme},null,8,["onClick"]),e(n,{icon:"https://img.ichuguang.com/imgs/2022/07/21a8fbfb9459ddc6.png",title:"\u7559\u8A00\u53CD\u9988","is-link":"",onClick:t.msg},null,8,["onClick"]),e(n,{icon:"https://img.ichuguang.com/imgs/2022/07/f1e062a931e18557.png",title:"\u9000\u51FA\u767B\u5F55","is-link":"",onClick:t.logOut},null,8,["onClick"])]),_:1})])}var K=T(M,[["render",A],["__scopeId","data-v-6295c490"]]);export{K as default};