import{b as c,p,d,u as g,c as o}from"./pathUtils-B2-gNmKm.js";import{j as r}from"./index-DWV-14mb.js";const h=c()(p((e,a)=>({expandedPaths:[],toggle:n=>{const t=a().expandedPaths;e({expandedPaths:t.includes(n)?t.filter(i=>i!==n):[...t,n]})},clear:()=>e({expandedPaths:[]})}),{name:"filetree-expanded",storage:d(()=>sessionStorage)}));function b({compact:e=!1}){const{i18n:a}=g(),n=a.language.startsWith("pl")?"pl":"en";return r.jsxs(l,{$compact:e,children:[r.jsx(s,{$active:n==="en",$compact:e,onClick:()=>a.changeLanguage("en"),children:"EN"}),r.jsx(x,{}),r.jsx(s,{$active:n==="pl",$compact:e,onClick:()=>a.changeLanguage("pl"),children:"PL"})]})}const l=o.div`
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: ${({$compact:e})=>e?"6px":"8px"};
  overflow: hidden;
  gap: 0;
`,s=o.button`
  padding: ${({$compact:e})=>e?"4px 8px":"5px 12px"};
  font-size: ${({$compact:e})=>e?"11px":"12px"};
  font-weight: 600;
  font-family: inherit;
  letter-spacing: 0.04em;
  background: ${({$active:e})=>e?"rgba(255,255,255,0.22)":"transparent"};
  color: ${({$active:e})=>e?"#fff":"rgba(255,255,255,0.45)"};
  border: none;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;

  &:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.14);
  }
`,x=o.span`
  width: 1px;
  height: 16px;
  background: rgba(255, 255, 255, 0.18);
  flex-shrink: 0;
`;export{b as L,h as u};
