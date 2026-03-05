import{g as A,a as B,r as u,u as R,j as i,c as _,i as E,b as j,d as W,s as S,m as C,e as P,A as k,B as L,f as $,h as V}from"./index-DWV-14mb.js";import{c,u as b,i as D,a as H,e as I}from"./pathUtils-B2-gNmKm.js";import{u as J,L as O}from"./LanguageSwitcher-Bs8aVpef.js";function U(t){return A("MuiTypography",t)}B("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const F={primary:!0,secondary:!0,error:!0,info:!0,success:!0,warning:!0,textPrimary:!0,textSecondary:!0,textDisabled:!0},K=E(),X=t=>{const{align:e,gutterBottom:r,noWrap:o,paragraph:s,variant:n,classes:l}=t,a={root:["root",n,t.align!=="inherit"&&`align${j(e)}`,r&&"gutterBottom",o&&"noWrap",s&&"paragraph"]};return W(a,U,l)},Z=S("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,r.variant&&e[r.variant],r.align!=="inherit"&&e[`align${j(r.align)}`],r.noWrap&&e.noWrap,r.gutterBottom&&e.gutterBottom,r.paragraph&&e.paragraph]}})(C(({theme:t})=>({margin:0,variants:[{props:{variant:"inherit"},style:{font:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}},...Object.entries(t.typography).filter(([e,r])=>e!=="inherit"&&r&&typeof r=="object").map(([e,r])=>({props:{variant:e},style:r})),...Object.entries(t.palette).filter(P()).map(([e])=>({props:{color:e},style:{color:(t.vars||t).palette[e].main}})),...Object.entries(t.palette?.text||{}).filter(([,e])=>typeof e=="string").map(([e])=>({props:{color:`text${j(e)}`},style:{color:(t.vars||t).palette.text[e]}})),{props:({ownerState:e})=>e.align!=="inherit",style:{textAlign:"var(--Typography-textAlign)"}},{props:({ownerState:e})=>e.noWrap,style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},{props:({ownerState:e})=>e.gutterBottom,style:{marginBottom:"0.35em"}},{props:({ownerState:e})=>e.paragraph,style:{marginBottom:16}}]}))),z={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},T=u.forwardRef(function(e,r){const{color:o,...s}=R({props:e,name:"MuiTypography"}),n=!F[o],l=K({...s,...n&&{color:o}}),{align:a="inherit",className:p,component:d,gutterBottom:f=!1,noWrap:h=!1,paragraph:g=!1,variant:m="body1",variantMapping:v=z,...x}=l,y={...l,align:a,color:o,className:p,component:d,gutterBottom:f,noWrap:h,paragraph:g,variant:m,variantMapping:v},M=d||(g?"p":v[m]||z[m])||"span",N=X(y);return i.jsx(Z,{as:M,ref:r,className:_(N.root,p),...x,ownerState:y,style:{...a!=="inherit"&&{"--Typography-textAlign":a},...x.style}})});function q(t){return A("MuiDivider",t)}B("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);const G=t=>{const{absolute:e,children:r,classes:o,flexItem:s,light:n,orientation:l,textAlign:a,variant:p}=t;return W({root:["root",e&&"absolute",p,n&&"light",l==="vertical"&&"vertical",s&&"flexItem",r&&"withChildren",r&&l==="vertical"&&"withChildrenVertical",a==="right"&&l!=="vertical"&&"textAlignRight",a==="left"&&l!=="vertical"&&"textAlignLeft"],wrapper:["wrapper",l==="vertical"&&"wrapperVertical"]},q,o)},Q=S("div",{name:"MuiDivider",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,r.absolute&&e.absolute,e[r.variant],r.light&&e.light,r.orientation==="vertical"&&e.vertical,r.flexItem&&e.flexItem,r.children&&e.withChildren,r.children&&r.orientation==="vertical"&&e.withChildrenVertical,r.textAlign==="right"&&r.orientation!=="vertical"&&e.textAlignRight,r.textAlign==="left"&&r.orientation!=="vertical"&&e.textAlignLeft]}})(C(({theme:t})=>({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin",variants:[{props:{absolute:!0},style:{position:"absolute",bottom:0,left:0,width:"100%"}},{props:{light:!0},style:{borderColor:t.alpha((t.vars||t).palette.divider,.08)}},{props:{variant:"inset"},style:{marginLeft:72}},{props:{variant:"middle",orientation:"horizontal"},style:{marginLeft:t.spacing(2),marginRight:t.spacing(2)}},{props:{variant:"middle",orientation:"vertical"},style:{marginTop:t.spacing(1),marginBottom:t.spacing(1)}},{props:{orientation:"vertical"},style:{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"}},{props:{flexItem:!0},style:{alignSelf:"stretch",height:"auto"}},{props:({ownerState:e})=>!!e.children,style:{display:"flex",textAlign:"center",border:0,borderTopStyle:"solid",borderLeftStyle:"solid","&::before, &::after":{content:'""',alignSelf:"center"}}},{props:({ownerState:e})=>e.children&&e.orientation!=="vertical",style:{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(t.vars||t).palette.divider}`,borderTopStyle:"inherit"}}},{props:({ownerState:e})=>e.orientation==="vertical"&&e.children,style:{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(t.vars||t).palette.divider}`,borderLeftStyle:"inherit"}}},{props:({ownerState:e})=>e.textAlign==="right"&&e.orientation!=="vertical",style:{"&::before":{width:"90%"},"&::after":{width:"10%"}}},{props:({ownerState:e})=>e.textAlign==="left"&&e.orientation!=="vertical",style:{"&::before":{width:"10%"},"&::after":{width:"90%"}}}]}))),Y=S("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.wrapper,r.orientation==="vertical"&&e.wrapperVertical]}})(C(({theme:t})=>({display:"inline-block",paddingLeft:`calc(${t.spacing(1)} * 1.2)`,paddingRight:`calc(${t.spacing(1)} * 1.2)`,whiteSpace:"nowrap",variants:[{props:{orientation:"vertical"},style:{paddingTop:`calc(${t.spacing(1)} * 1.2)`,paddingBottom:`calc(${t.spacing(1)} * 1.2)`}}]}))),w=u.forwardRef(function(e,r){const o=R({props:e,name:"MuiDivider"}),{absolute:s=!1,children:n,className:l,orientation:a="horizontal",component:p=n||a==="vertical"?"div":"hr",flexItem:d=!1,light:f=!1,role:h=p!=="hr"?"separator":void 0,textAlign:g="center",variant:m="fullWidth",...v}=o,x={...o,absolute:s,component:p,flexItem:d,light:f,orientation:a,role:h,textAlign:g,variant:m},y=G(x);return i.jsx(Q,{as:p,className:_(y.root,l),role:h,ref:r,ownerState:x,"aria-orientation":h==="separator"&&(p!=="hr"||a==="vertical")?a:void 0,...v,children:n?i.jsx(Y,{className:y.wrapper,ownerState:x,children:n}):null})});w&&(w.muiSkipListHighlight=!0);const ee=c.textarea`
  width: 100%;
  min-height: 200px;
  padding: 12px;
  font-family: monospace;
  font-size: 13px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #1976d2;
    box-shadow: 0 0 0 2px rgba(25, 118, 210, 0.2);
  }
`,te=JSON.stringify({type:"folder",name:"my-project",children:[{type:"folder",name:"src",children:[{type:"folder",name:"components",children:[{type:"file",name:"Button.tsx",size:2048},{type:"file",name:"Modal.tsx",size:5120},{type:"file",name:"index.ts",size:320}]},{type:"folder",name:"utils",children:[{type:"file",name:"formatDate.ts",size:1024},{type:"file",name:"api.ts",size:8192}]},{type:"folder",name:"__tests__",children:[{type:"file",name:"Button.test.tsx",size:3072},{type:"file",name:"api.test.ts",size:4096}]},{type:"file",name:"main.tsx",size:512},{type:"file",name:"vite-env.d.ts",size:64}]},{type:"folder",name:"public",children:[{type:"file",name:"favicon.ico",size:15086},{type:"file",name:"og-image.png",size:204800}]},{type:"folder",name:"dist",children:[]},{type:"file",name:"package.json",size:1340},{type:"file",name:"tsconfig.json",size:720},{type:"file",name:"vite.config.ts",size:890},{type:"file",name:"README.md",size:3500},{type:"file",name:".gitignore",size:256}]},null,2);function re({onSubmit:t}){const{t:e}=b(),[r,o]=u.useState(""),[s,n]=u.useState(null);function l(){n(null);try{const a=JSON.parse(r);if(!D(a)){n("invalid_json_structure");return}t(a)}catch{n("invalid_json")}}return i.jsxs("div",{children:[i.jsxs(ie,{children:[i.jsx(T,{variant:"subtitle1",children:e("paste_label")}),i.jsx(ne,{type:"button",onClick:()=>{o(te),n(null)},children:e("load_example")})]}),i.jsx(ee,{value:r,onChange:a=>o(a.target.value),placeholder:'{ "name": "root", "type": "folder", "children": [] }'}),s&&i.jsx(k,{severity:"error",sx:{mt:1},children:e(s)}),i.jsx(L,{variant:"contained",sx:{mt:2},onClick:l,disabled:!r.trim(),children:e("submit")})]})}const ie=c.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 6px;
`,ne=c.button`
  font-size: 12px;
  font-weight: 500;
  font-family: inherit;
  color: #6366f1;
  background: none;
  border: none;
  cursor: pointer;
  padding: 2px 0;
  text-decoration: underline;
  text-underline-offset: 2px;
  transition: color 0.12s;

  &:hover {
    color: #4f46e5;
  }
`;function ae({onSubmit:t}){const{t:e}=b(),r=u.useRef(null),[o,s]=u.useState(null),[n,l]=u.useState(null);function a(p){s(null);const d=p.target.files?.[0];if(!d)return;l(d.name);const f=new FileReader;f.onload=h=>{try{const g=JSON.parse(h.target?.result);if(!D(g)){s("invalid_json_structure");return}t(g)}catch{s("invalid_json")}},f.readAsText(d)}return i.jsxs("div",{children:[i.jsx(T,{variant:"subtitle1",gutterBottom:!0,children:e("upload_label")}),i.jsx("input",{ref:r,type:"file",accept:".json",style:{display:"none"},onChange:a}),i.jsx(L,{variant:"outlined",onClick:()=>r.current?.click(),children:e("upload_label")}),o&&i.jsxs(k,{severity:"error",sx:{mt:1},children:[n&&i.jsxs("strong",{children:[n,": "]}),e(o)]})]})}function oe(){const{t}=b(),e=H(n=>n.setTree),r=J(n=>n.clear),o=$();function s(n){r(),e(n),o(`/tree/${I([n.name])}`)}return i.jsxs(se,{children:[i.jsx(re,{onSubmit:s}),i.jsx(w,{sx:{my:3},children:i.jsx(T,{variant:"body2",color:"text.secondary",children:t("or")})}),i.jsx(ae,{onSubmit:s})]})}const se=c.div`
  max-width: 600px;
  margin: -28px auto 0;
  background: #fff;
  border-radius: 16px;
  padding: 32px;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.06),
    0 10px 40px -4px rgba(0, 0, 0, 0.1);
`;function me(){const{t}=b();return i.jsxs(le,{children:[i.jsxs(pe,{children:[i.jsx(ce,{children:i.jsx(O,{})}),i.jsx(de,{"aria-hidden":"true",children:i.jsxs("svg",{viewBox:"0 0 80 80",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("rect",{x:"8",y:"28",width:"64",height:"44",rx:"6",fill:"rgba(255,255,255,0.15)",stroke:"rgba(255,255,255,0.35)",strokeWidth:"2"}),i.jsx("path",{d:"M8 38a6 6 0 0 1 6-6h18l6 8h30a6 6 0 0 1 6 6v18a6 6 0 0 1-6 6H14a6 6 0 0 1-6-6V38Z",fill:"rgba(255,255,255,0.22)",stroke:"rgba(255,255,255,0.5)",strokeWidth:"2"}),i.jsx("rect",{x:"20",y:"50",width:"12",height:"2",rx:"1",fill:"rgba(255,255,255,0.6)"}),i.jsx("rect",{x:"20",y:"56",width:"20",height:"2",rx:"1",fill:"rgba(255,255,255,0.4)"}),i.jsx("rect",{x:"20",y:"62",width:"16",height:"2",rx:"1",fill:"rgba(255,255,255,0.4)"})]})}),i.jsx(he,{children:t("home_title")}),i.jsx(ge,{children:t("home_subtitle")})]}),i.jsx(V,{sx:{px:2,pb:8},children:i.jsx(oe,{})})]})}const le=c.div`
  min-height: 100%;
  background: #f8fafc;
`,pe=c.header`
  background: linear-gradient(160deg, #1e1b4b 0%, #3730a3 55%, #6366f1 100%);
  padding: 24px 24px 72px;
  text-align: center;
`,ce=c.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 32px;
`,de=c.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 20px;
  filter: drop-shadow(0 6px 20px rgba(0, 0, 0, 0.35));
`,he=c.h1`
  margin: 0 0 14px;
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  color: #fff;
`,ge=c.p`
  margin: 0 auto;
  max-width: 460px;
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.6);
`;export{me as default};
