import{q as _,r as p,s as v,d as k,u as N,b as h,v as x,k as b,o as c,e as i,h as e,t as r,f as s,F as y,g as w,x as C,l as g,w as S,y as V}from"./vendor.90acdd3d.js";const B=_("user",()=>{const t=p(""),o=p(new Set),m=v(()=>Array.from(o.value)),a=v(()=>m.value.filter(u=>u!==t.value));function n(u){t.value&&o.value.add(t.value),t.value=u}return{setNewName:n,otherNames:a,savedName:t}}),E=e("div",{"text-4xl":""},[e("div",{"i-carbon-pedestrian":"","inline-block":""})],-1),F={"text-sm":"","opacity-50":""},$={key:0,"text-sm":"","mt-4":""},q={"opacity-75":""},D=k({props:{name:null},setup(t){const o=t,m=N(),a=B(),{t:n}=h();return x(()=>{a.setNewName(o.name)}),(u,d)=>{const f=b("router-link");return c(),i("div",null,[E,e("p",null,r(s(n)("intro.hi",{name:o.name})),1),e("p",F,[e("em",null,r(s(n)("intro.dynamic-route")),1)]),s(a).otherNames.length?(c(),i("p",$,[e("span",q,r(s(n)("intro.aka"))+":",1),e("ul",null,[(c(!0),i(y,null,w(s(a).otherNames,l=>(c(),i("li",{key:l},[g(f,{to:`/hi/${l}`,replace:""},{default:S(()=>[V(r(l),1)]),_:2},1032,["to"])]))),128))])])):C("",!0),e("div",null,[e("button",{btn:"",m:"3 t6","text-sm":"",onClick:d[0]||(d[0]=l=>s(m).back())},r(s(n)("button.back")),1)])])}}});export{D as default};
