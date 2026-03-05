import{f as _,j as e,L as v,J as S,N as F,A as $}from"./index-DWV-14mb.js";import{u as k,e as f,f as h,c as r,a as T,g as B,h as N}from"./pathUtils-B2-gNmKm.js";import{F as C,a as g}from"./FolderOutlined-D4NcWBgf.js";function d(n){return n>=1024*1024?`${(n/(1024*1024)).toFixed(2)} MB`:n>=1024?`${(n/1024).toFixed(2)} KB`:`${n} B`}function u({node:n,pathSegments:s}){const{t}=k(),i=_();function a(o){i(`/tree/${f([...s,o.name])}`)}return e.jsxs(M,{children:[e.jsxs(A,{children:[e.jsx(L,{"aria-hidden":"true",children:e.jsx("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M2 4a1 1 0 0 1 1-1h3l1.5 1.5H13a1 1 0 0 1 1 1V12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4Z",fill:"#f59e0b",stroke:"#d97706",strokeWidth:"0.75"})})}),s.map((o,l)=>{const y=l===s.length-1,z=`/tree/${f(s.slice(0,l+1))}`;return e.jsxs("span",{style:{display:"flex",alignItems:"center",gap:4},children:[l>0&&e.jsx(P,{"aria-hidden":"true",children:"›"}),y?e.jsx(E,{children:o}):e.jsx(D,{to:z,children:o})]},l)})]}),n.type==="folder"?e.jsxs(e.Fragment,{children:[e.jsx(I,{children:e.jsxs(V,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx(x,{style:{width:"50%"},children:t("node_name")}),e.jsx(x,{style:{width:"20%"},children:t("explorer_type")}),e.jsx(x,{style:{width:"30%"},children:t("node_size")})]})}),e.jsx("tbody",{children:n.children.length===0?e.jsx("tr",{children:e.jsx(R,{colSpan:3,children:t("explorer_empty_folder")})}):n.children.map(o=>e.jsxs(H,{onClick:()=>a(o),children:[e.jsx(p,{children:e.jsxs(J,{children:[o.type==="folder"?e.jsx(C,{sx:{fontSize:17,color:"#f59e0b",flexShrink:0}}):e.jsx(g,{sx:{fontSize:17,color:"#94a3b8",flexShrink:0}}),e.jsx(W,{$isFolder:o.type==="folder",children:o.name})]})}),e.jsx(p,{children:e.jsx(G,{$type:o.type,children:o.type==="folder"?t("explorer_type_folder"):t("explorer_type_file")})}),e.jsx(p,{children:e.jsx(K,{children:d(h(o))})})]},o.name))})]})}),e.jsxs(m,{children:[e.jsx(c,{children:t("explorer_items_count",{count:n.children.length})}),e.jsx(j,{}),e.jsxs(c,{children:[t("node_total_size"),":"," ",e.jsx("strong",{children:d(h(n))})]})]})]}):e.jsxs(e.Fragment,{children:[e.jsx(Z,{children:e.jsxs(q,{children:[e.jsx(g,{sx:{fontSize:64,color:"#6366f1"}}),e.jsx(O,{children:n.name}),e.jsxs(Q,{children:[e.jsx(b,{children:t("node_size")}),e.jsx(w,{children:d(n.size)}),e.jsx(b,{children:t("node_path")}),e.jsx(w,{$mono:!0,children:s.join("/")})]})]})}),e.jsxs(m,{children:[e.jsx(c,{children:t("explorer_type_file")}),e.jsx(j,{}),e.jsxs(c,{children:[t("node_size"),": ",e.jsx("strong",{children:d(n.size)})]})]})]})]})}const M=r.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #fff;
`,A=r.nav`
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 0 20px;
  min-height: 44px;
  background: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
  flex-wrap: wrap;
  gap: 0;
`,L=r.span`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  margin-right: 8px;
  flex-shrink: 0;
`,P=r.span`
  color: #94a3b8;
  font-size: 14px;
  padding: 0 4px;
  user-select: none;
`,D=r(v)`
  font-size: 13px;
  font-weight: 500;
  color: #6366f1;
  text-decoration: none;
  padding: 2px 4px;
  border-radius: 4px;
  transition: background 0.12s;

  &:hover {
    background: rgba(99, 102, 241, 0.08);
    text-decoration: underline;
  }
`,E=r.span`
  font-size: 13px;
  font-weight: 600;
  color: #1e293b;
  padding: 2px 4px;
`,I=r.div`
  flex: 1;
  overflow-y: auto;
`,V=r.table`
  width: 100%;
  border-collapse: collapse;
`,x=r.th`
  padding: 10px 20px;
  text-align: left;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #94a3b8;
  background: #f8fafc;
  border-bottom: 2px solid #e2e8f0;
  position: sticky;
  top: 0;
  z-index: 1;
`,H=r.tr`
  cursor: pointer;
  transition: background 0.1s;

  &:hover {
    background: #f1f5f9;
  }

  &:hover td:first-child span {
    color: #6366f1;
  }
`,p=r.td`
  padding: 8px 20px;
  font-size: 13px;
  color: #334155;
  border-bottom: 1px solid #f1f5f9;
`,R=r.td`
  padding: 48px 20px;
  text-align: center;
  font-size: 13px;
  color: #94a3b8;
  font-style: italic;
`,J=r.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,W=r.span`
  font-weight: ${({$isFolder:n})=>n?500:400};
  color: ${({$isFolder:n})=>n?"#1e293b":"#475569"};
`,G=r.span`
  display: inline-block;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.02em;
  background: ${({$type:n})=>n==="folder"?"#fef3c7":"#f1f5f9"};
  color: ${({$type:n})=>n==="folder"?"#92400e":"#475569"};
`,K=r.span`
  font-variant-numeric: tabular-nums;
  color: #64748b;
  font-size: 12px;
`,m=r.footer`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 20px;
  background: #f8fafc;
  border-top: 1px solid #e2e8f0;
  font-size: 12px;
  color: #64748b;
  flex-shrink: 0;
  min-height: 36px;
`,c=r.span`
  strong {
    color: #475569;
    font-weight: 600;
  }
`,j=r.span`
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: #cbd5e1;
  flex-shrink: 0;
`,Z=r.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  background: #f8fafc;
`,q=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 48px 64px;
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.06);
  min-width: 360px;
  max-width: 560px;
`,O=r.h2`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: #1e293b;
  word-break: break-all;
  text-align: center;
`,Q=r.dl`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 8px 20px;
  margin: 0;
  width: 100%;
  align-items: baseline;
`,b=r.dt`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #94a3b8;
  white-space: nowrap;
`,w=r.dd`
  margin: 0;
  font-size: 13px;
  color: #475569;
  font-family: ${({$mono:n})=>n?"'JetBrains Mono', 'Fira Code', monospace":"inherit"};
  word-break: break-all;
`;function ee(){const{"*":n}=S(),{t:s}=k(),t=T(o=>o.tree);if(!t)return e.jsx(F,{to:"/",replace:!0});if(!n)return e.jsx(u,{node:t,pathSegments:[t.name]});const i=B(n),a=N(t,i);return a?e.jsx(u,{node:a,pathSegments:i}):e.jsx($,{severity:"error",sx:{m:3},children:s("not_found")})}export{ee as default};
