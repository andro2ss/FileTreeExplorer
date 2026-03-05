import{r as O,_ as Br,R as et,k as Wr,l as tt,T as nr,n as Ir,o as Fr,p as Se,q as Hr,t as st,v as zr,g as ir,a as ar,j as c,d as sr,w as pr,u as lr,s as ct,x as ze,y as cr,z as Ur,C as Lt,c as Nt,D as rt,E as Vr,b as fr,m as Tt,F as Bt,G as qr,H as Xr,L as ur,I as Gr,f as Yr,O as _r,N as Kr}from"./index-DWV-14mb.js";import{c as j,e as dr,u as jt,a as pt,s as Zr}from"./pathUtils-B2-gNmKm.js";import{u as xt,L as Wt}from"./LanguageSwitcher-Bs8aVpef.js";import{F as hr,a as vr}from"./FolderOutlined-D4NcWBgf.js";function It(e){return e&&e.ownerDocument||document}function Ft(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function Jr(e){const{controlled:t,default:r}=e,{current:n}=O.useRef(t!==void 0),[o,i]=O.useState(r),a=n?t:o,p=O.useCallback(s=>{n||i(s)},[]);return[a,p]}const Ht={disabled:!1};var Qr=function(t){return t.scrollTop},Ue="unmounted",de="exited",he="entering",je="entered",bt="exiting",ie=(function(e){Br(t,e);function t(n,o){var i;i=e.call(this,n,o)||this;var a=o,p=a&&!a.isMounting?n.enter:n.appear,s;return i.appearStatus=null,n.in?p?(s=de,i.appearStatus=he):s=je:n.unmountOnExit||n.mountOnEnter?s=Ue:s=de,i.state={status:s},i.nextCallback=null,i}t.getDerivedStateFromProps=function(o,i){var a=o.in;return a&&i.status===Ue?{status:de}:null};var r=t.prototype;return r.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},r.componentDidUpdate=function(o){var i=null;if(o!==this.props){var a=this.state.status;this.props.in?a!==he&&a!==je&&(i=he):(a===he||a===je)&&(i=bt)}this.updateStatus(!1,i)},r.componentWillUnmount=function(){this.cancelNextCallback()},r.getTimeouts=function(){var o=this.props.timeout,i,a,p;return i=a=p=o,o!=null&&typeof o!="number"&&(i=o.exit,a=o.enter,p=o.appear!==void 0?o.appear:a),{exit:i,enter:a,appear:p}},r.updateStatus=function(o,i){if(o===void 0&&(o=!1),i!==null)if(this.cancelNextCallback(),i===he){if(this.props.unmountOnExit||this.props.mountOnEnter){var a=this.props.nodeRef?this.props.nodeRef.current:et.findDOMNode(this);a&&Qr(a)}this.performEnter(o)}else this.performExit();else this.props.unmountOnExit&&this.state.status===de&&this.setState({status:Ue})},r.performEnter=function(o){var i=this,a=this.props.enter,p=this.context?this.context.isMounting:o,s=this.props.nodeRef?[p]:[et.findDOMNode(this),p],f=s[0],l=s[1],v=this.getTimeouts(),w=p?v.appear:v.enter;if(!o&&!a||Ht.disabled){this.safeSetState({status:je},function(){i.props.onEntered(f)});return}this.props.onEnter(f,l),this.safeSetState({status:he},function(){i.props.onEntering(f,l),i.onTransitionEnd(w,function(){i.safeSetState({status:je},function(){i.props.onEntered(f,l)})})})},r.performExit=function(){var o=this,i=this.props.exit,a=this.getTimeouts(),p=this.props.nodeRef?void 0:et.findDOMNode(this);if(!i||Ht.disabled){this.safeSetState({status:de},function(){o.props.onExited(p)});return}this.props.onExit(p),this.safeSetState({status:bt},function(){o.props.onExiting(p),o.onTransitionEnd(a.exit,function(){o.safeSetState({status:de},function(){o.props.onExited(p)})})})},r.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},r.safeSetState=function(o,i){i=this.setNextCallback(i),this.setState(o,i)},r.setNextCallback=function(o){var i=this,a=!0;return this.nextCallback=function(p){a&&(a=!1,i.nextCallback=null,o(p))},this.nextCallback.cancel=function(){a=!1},this.nextCallback},r.onTransitionEnd=function(o,i){this.setNextCallback(i);var a=this.props.nodeRef?this.props.nodeRef.current:et.findDOMNode(this),p=o==null&&!this.props.addEndListener;if(!a||p){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var s=this.props.nodeRef?[this.nextCallback]:[a,this.nextCallback],f=s[0],l=s[1];this.props.addEndListener(f,l)}o!=null&&setTimeout(this.nextCallback,o)},r.render=function(){var o=this.state.status;if(o===Ue)return null;var i=this.props,a=i.children;i.in,i.mountOnEnter,i.unmountOnExit,i.appear,i.enter,i.exit,i.timeout,i.addEndListener,i.onEnter,i.onEntering,i.onEntered,i.onExit,i.onExiting,i.onExited,i.nodeRef;var p=Wr(i,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return tt.createElement(nr.Provider,{value:null},typeof a=="function"?a(o,p):tt.cloneElement(tt.Children.only(a),p))},t})(tt.Component);ie.contextType=nr;ie.propTypes={};function Te(){}ie.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Te,onEntering:Te,onEntered:Te,onExit:Te,onExiting:Te,onExited:Te};ie.UNMOUNTED=Ue;ie.EXITED=de;ie.ENTERING=he;ie.ENTERED=je;ie.EXITING=bt;const eo=e=>e.scrollTop;function zt(e,t){const{timeout:r,easing:n,style:o={}}=e;return{duration:o.transitionDuration??(typeof r=="number"?r:r[t.mode]||0),easing:o.transitionTimingFunction??(typeof n=="object"?n[t.mode]:n),delay:o.transitionDelay}}var z="top",_="bottom",K="right",U="left",St="auto",Ye=[z,_,K,U],Re="start",Xe="end",to="clippingParents",mr="viewport",Fe="popper",ro="reference",Ut=Ye.reduce(function(e,t){return e.concat([t+"-"+Re,t+"-"+Xe])},[]),gr=[].concat(Ye,[St]).reduce(function(e,t){return e.concat([t,t+"-"+Re,t+"-"+Xe])},[]),oo="beforeRead",no="read",io="afterRead",ao="beforeMain",so="main",po="afterMain",lo="beforeWrite",co="write",fo="afterWrite",uo=[oo,no,io,ao,so,po,lo,co,fo];function re(e){return e?(e.nodeName||"").toLowerCase():null}function q(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function me(e){var t=q(e).Element;return e instanceof t||e instanceof Element}function Y(e){var t=q(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function Rt(e){if(typeof ShadowRoot>"u")return!1;var t=q(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function ho(e){var t=e.state;Object.keys(t.elements).forEach(function(r){var n=t.styles[r]||{},o=t.attributes[r]||{},i=t.elements[r];!Y(i)||!re(i)||(Object.assign(i.style,n),Object.keys(o).forEach(function(a){var p=o[a];p===!1?i.removeAttribute(a):i.setAttribute(a,p===!0?"":p)}))})}function vo(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(n){var o=t.elements[n],i=t.attributes[n]||{},a=Object.keys(t.styles.hasOwnProperty(n)?t.styles[n]:r[n]),p=a.reduce(function(s,f){return s[f]="",s},{});!Y(o)||!re(o)||(Object.assign(o.style,p),Object.keys(i).forEach(function(s){o.removeAttribute(s)}))})}}const mo={name:"applyStyles",enabled:!0,phase:"write",fn:ho,effect:vo,requires:["computeStyles"]};function te(e){return e.split("-")[0]}var ve=Math.max,lt=Math.min,ke=Math.round;function yt(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function xr(){return!/^((?!chrome|android).)*safari/i.test(yt())}function Ce(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!1);var n=e.getBoundingClientRect(),o=1,i=1;t&&Y(e)&&(o=e.offsetWidth>0&&ke(n.width)/e.offsetWidth||1,i=e.offsetHeight>0&&ke(n.height)/e.offsetHeight||1);var a=me(e)?q(e):window,p=a.visualViewport,s=!xr()&&r,f=(n.left+(s&&p?p.offsetLeft:0))/o,l=(n.top+(s&&p?p.offsetTop:0))/i,v=n.width/o,w=n.height/i;return{width:v,height:w,top:l,right:f+v,bottom:l+w,left:f,x:f,y:l}}function kt(e){var t=Ce(e),r=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}}function br(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&Rt(r)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function ne(e){return q(e).getComputedStyle(e)}function go(e){return["table","td","th"].indexOf(re(e))>=0}function pe(e){return((me(e)?e.ownerDocument:e.document)||window.document).documentElement}function ft(e){return re(e)==="html"?e:e.assignedSlot||e.parentNode||(Rt(e)?e.host:null)||pe(e)}function Vt(e){return!Y(e)||ne(e).position==="fixed"?null:e.offsetParent}function xo(e){var t=/firefox/i.test(yt()),r=/Trident/i.test(yt());if(r&&Y(e)){var n=ne(e);if(n.position==="fixed")return null}var o=ft(e);for(Rt(o)&&(o=o.host);Y(o)&&["html","body"].indexOf(re(o))<0;){var i=ne(o);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||t&&i.willChange==="filter"||t&&i.filter&&i.filter!=="none")return o;o=o.parentNode}return null}function _e(e){for(var t=q(e),r=Vt(e);r&&go(r)&&ne(r).position==="static";)r=Vt(r);return r&&(re(r)==="html"||re(r)==="body"&&ne(r).position==="static")?t:r||xo(e)||t}function Ct(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Ve(e,t,r){return ve(e,lt(t,r))}function bo(e,t,r){var n=Ve(e,t,r);return n>r?r:n}function yr(){return{top:0,right:0,bottom:0,left:0}}function wr(e){return Object.assign({},yr(),e)}function Er(e,t){return t.reduce(function(r,n){return r[n]=e,r},{})}var yo=function(t,r){return t=typeof t=="function"?t(Object.assign({},r.rects,{placement:r.placement})):t,wr(typeof t!="number"?t:Er(t,Ye))};function wo(e){var t,r=e.state,n=e.name,o=e.options,i=r.elements.arrow,a=r.modifiersData.popperOffsets,p=te(r.placement),s=Ct(p),f=[U,K].indexOf(p)>=0,l=f?"height":"width";if(!(!i||!a)){var v=yo(o.padding,r),w=kt(i),h=s==="y"?z:U,E=s==="y"?_:K,d=r.rects.reference[l]+r.rects.reference[s]-a[s]-r.rects.popper[l],g=a[s]-r.rects.reference[s],P=_e(i),C=P?s==="y"?P.clientHeight||0:P.clientWidth||0:0,y=d/2-g/2,u=v[h],m=C-w[l]-v[E],x=C/2-w[l]/2+y,T=Ve(u,x,m),L=s;r.modifiersData[n]=(t={},t[L]=T,t.centerOffset=T-x,t)}}function Eo(e){var t=e.state,r=e.options,n=r.element,o=n===void 0?"[data-popper-arrow]":n;o!=null&&(typeof o=="string"&&(o=t.elements.popper.querySelector(o),!o)||br(t.elements.popper,o)&&(t.elements.arrow=o))}const Po={name:"arrow",enabled:!0,phase:"main",fn:wo,effect:Eo,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function $e(e){return e.split("-")[1]}var Oo={top:"auto",right:"auto",bottom:"auto",left:"auto"};function To(e,t){var r=e.x,n=e.y,o=t.devicePixelRatio||1;return{x:ke(r*o)/o||0,y:ke(n*o)/o||0}}function qt(e){var t,r=e.popper,n=e.popperRect,o=e.placement,i=e.variation,a=e.offsets,p=e.position,s=e.gpuAcceleration,f=e.adaptive,l=e.roundOffsets,v=e.isFixed,w=a.x,h=w===void 0?0:w,E=a.y,d=E===void 0?0:E,g=typeof l=="function"?l({x:h,y:d}):{x:h,y:d};h=g.x,d=g.y;var P=a.hasOwnProperty("x"),C=a.hasOwnProperty("y"),y=U,u=z,m=window;if(f){var x=_e(r),T="clientHeight",L="clientWidth";if(x===q(r)&&(x=pe(r),ne(x).position!=="static"&&p==="absolute"&&(T="scrollHeight",L="scrollWidth")),x=x,o===z||(o===U||o===K)&&i===Xe){u=_;var M=v&&x===m&&m.visualViewport?m.visualViewport.height:x[T];d-=M-n.height,d*=s?1:-1}if(o===U||(o===z||o===_)&&i===Xe){y=K;var S=v&&x===m&&m.visualViewport?m.visualViewport.width:x[L];h-=S-n.width,h*=s?1:-1}}var $=Object.assign({position:p},f&&Oo),I=l===!0?To({x:h,y:d},q(r)):{x:h,y:d};if(h=I.x,d=I.y,s){var D;return Object.assign({},$,(D={},D[u]=C?"0":"",D[y]=P?"0":"",D.transform=(m.devicePixelRatio||1)<=1?"translate("+h+"px, "+d+"px)":"translate3d("+h+"px, "+d+"px, 0)",D))}return Object.assign({},$,(t={},t[u]=C?d+"px":"",t[y]=P?h+"px":"",t.transform="",t))}function jo(e){var t=e.state,r=e.options,n=r.gpuAcceleration,o=n===void 0?!0:n,i=r.adaptive,a=i===void 0?!0:i,p=r.roundOffsets,s=p===void 0?!0:p,f={placement:te(t.placement),variation:$e(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,qt(Object.assign({},f,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:s})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,qt(Object.assign({},f,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const So={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:jo,data:{}};var ot={passive:!0};function Ro(e){var t=e.state,r=e.instance,n=e.options,o=n.scroll,i=o===void 0?!0:o,a=n.resize,p=a===void 0?!0:a,s=q(t.elements.popper),f=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&f.forEach(function(l){l.addEventListener("scroll",r.update,ot)}),p&&s.addEventListener("resize",r.update,ot),function(){i&&f.forEach(function(l){l.removeEventListener("scroll",r.update,ot)}),p&&s.removeEventListener("resize",r.update,ot)}}const ko={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Ro,data:{}};var Co={left:"right",right:"left",bottom:"top",top:"bottom"};function at(e){return e.replace(/left|right|bottom|top/g,function(t){return Co[t]})}var $o={start:"end",end:"start"};function Xt(e){return e.replace(/start|end/g,function(t){return $o[t]})}function $t(e){var t=q(e),r=t.pageXOffset,n=t.pageYOffset;return{scrollLeft:r,scrollTop:n}}function At(e){return Ce(pe(e)).left+$t(e).scrollLeft}function Ao(e,t){var r=q(e),n=pe(e),o=r.visualViewport,i=n.clientWidth,a=n.clientHeight,p=0,s=0;if(o){i=o.width,a=o.height;var f=xr();(f||!f&&t==="fixed")&&(p=o.offsetLeft,s=o.offsetTop)}return{width:i,height:a,x:p+At(e),y:s}}function Mo(e){var t,r=pe(e),n=$t(e),o=(t=e.ownerDocument)==null?void 0:t.body,i=ve(r.scrollWidth,r.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=ve(r.scrollHeight,r.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),p=-n.scrollLeft+At(e),s=-n.scrollTop;return ne(o||r).direction==="rtl"&&(p+=ve(r.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:p,y:s}}function Mt(e){var t=ne(e),r=t.overflow,n=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+o+n)}function Pr(e){return["html","body","#document"].indexOf(re(e))>=0?e.ownerDocument.body:Y(e)&&Mt(e)?e:Pr(ft(e))}function qe(e,t){var r;t===void 0&&(t=[]);var n=Pr(e),o=n===((r=e.ownerDocument)==null?void 0:r.body),i=q(n),a=o?[i].concat(i.visualViewport||[],Mt(n)?n:[]):n,p=t.concat(a);return o?p:p.concat(qe(ft(a)))}function wt(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Do(e,t){var r=Ce(e,!1,t==="fixed");return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}function Gt(e,t,r){return t===mr?wt(Ao(e,r)):me(t)?Do(t,r):wt(Mo(pe(e)))}function Lo(e){var t=qe(ft(e)),r=["absolute","fixed"].indexOf(ne(e).position)>=0,n=r&&Y(e)?_e(e):e;return me(n)?t.filter(function(o){return me(o)&&br(o,n)&&re(o)!=="body"}):[]}function No(e,t,r,n){var o=t==="clippingParents"?Lo(e):[].concat(t),i=[].concat(o,[r]),a=i[0],p=i.reduce(function(s,f){var l=Gt(e,f,n);return s.top=ve(l.top,s.top),s.right=lt(l.right,s.right),s.bottom=lt(l.bottom,s.bottom),s.left=ve(l.left,s.left),s},Gt(e,a,n));return p.width=p.right-p.left,p.height=p.bottom-p.top,p.x=p.left,p.y=p.top,p}function Or(e){var t=e.reference,r=e.element,n=e.placement,o=n?te(n):null,i=n?$e(n):null,a=t.x+t.width/2-r.width/2,p=t.y+t.height/2-r.height/2,s;switch(o){case z:s={x:a,y:t.y-r.height};break;case _:s={x:a,y:t.y+t.height};break;case K:s={x:t.x+t.width,y:p};break;case U:s={x:t.x-r.width,y:p};break;default:s={x:t.x,y:t.y}}var f=o?Ct(o):null;if(f!=null){var l=f==="y"?"height":"width";switch(i){case Re:s[f]=s[f]-(t[l]/2-r[l]/2);break;case Xe:s[f]=s[f]+(t[l]/2-r[l]/2);break}}return s}function Ge(e,t){t===void 0&&(t={});var r=t,n=r.placement,o=n===void 0?e.placement:n,i=r.strategy,a=i===void 0?e.strategy:i,p=r.boundary,s=p===void 0?to:p,f=r.rootBoundary,l=f===void 0?mr:f,v=r.elementContext,w=v===void 0?Fe:v,h=r.altBoundary,E=h===void 0?!1:h,d=r.padding,g=d===void 0?0:d,P=wr(typeof g!="number"?g:Er(g,Ye)),C=w===Fe?ro:Fe,y=e.rects.popper,u=e.elements[E?C:w],m=No(me(u)?u:u.contextElement||pe(e.elements.popper),s,l,a),x=Ce(e.elements.reference),T=Or({reference:x,element:y,placement:o}),L=wt(Object.assign({},y,T)),M=w===Fe?L:x,S={top:m.top-M.top+P.top,bottom:M.bottom-m.bottom+P.bottom,left:m.left-M.left+P.left,right:M.right-m.right+P.right},$=e.modifiersData.offset;if(w===Fe&&$){var I=$[o];Object.keys(S).forEach(function(D){var V=[K,_].indexOf(D)>=0?1:-1,k=[z,_].indexOf(D)>=0?"y":"x";S[D]+=I[k]*V})}return S}function Bo(e,t){t===void 0&&(t={});var r=t,n=r.placement,o=r.boundary,i=r.rootBoundary,a=r.padding,p=r.flipVariations,s=r.allowedAutoPlacements,f=s===void 0?gr:s,l=$e(n),v=l?p?Ut:Ut.filter(function(E){return $e(E)===l}):Ye,w=v.filter(function(E){return f.indexOf(E)>=0});w.length===0&&(w=v);var h=w.reduce(function(E,d){return E[d]=Ge(e,{placement:d,boundary:o,rootBoundary:i,padding:a})[te(d)],E},{});return Object.keys(h).sort(function(E,d){return h[E]-h[d]})}function Wo(e){if(te(e)===St)return[];var t=at(e);return[Xt(e),t,Xt(t)]}function Io(e){var t=e.state,r=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var o=r.mainAxis,i=o===void 0?!0:o,a=r.altAxis,p=a===void 0?!0:a,s=r.fallbackPlacements,f=r.padding,l=r.boundary,v=r.rootBoundary,w=r.altBoundary,h=r.flipVariations,E=h===void 0?!0:h,d=r.allowedAutoPlacements,g=t.options.placement,P=te(g),C=P===g,y=s||(C||!E?[at(g)]:Wo(g)),u=[g].concat(y).reduce(function(Z,X){return Z.concat(te(X)===St?Bo(t,{placement:X,boundary:l,rootBoundary:v,padding:f,flipVariations:E,allowedAutoPlacements:d}):X)},[]),m=t.rects.reference,x=t.rects.popper,T=new Map,L=!0,M=u[0],S=0;S<u.length;S++){var $=u[S],I=te($),D=$e($)===Re,V=[z,_].indexOf(I)>=0,k=V?"width":"height",A=Ge(t,{placement:$,boundary:l,rootBoundary:v,altBoundary:w,padding:f}),R=V?D?K:U:D?_:z;m[k]>x[k]&&(R=at(R));var F=at(R),B=[];if(i&&B.push(A[I]<=0),p&&B.push(A[R]<=0,A[F]<=0),B.every(function(Z){return Z})){M=$,L=!1;break}T.set($,B)}if(L)for(var W=E?3:1,ge=function(X){var ae=u.find(function(se){var G=T.get(se);if(G)return G.slice(0,X).every(function(be){return be})});if(ae)return M=ae,"break"},oe=W;oe>0;oe--){var xe=ge(oe);if(xe==="break")break}t.placement!==M&&(t.modifiersData[n]._skip=!0,t.placement=M,t.reset=!0)}}const Fo={name:"flip",enabled:!0,phase:"main",fn:Io,requiresIfExists:["offset"],data:{_skip:!1}};function Yt(e,t,r){return r===void 0&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function _t(e){return[z,K,_,U].some(function(t){return e[t]>=0})}function Ho(e){var t=e.state,r=e.name,n=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=Ge(t,{elementContext:"reference"}),p=Ge(t,{altBoundary:!0}),s=Yt(a,n),f=Yt(p,o,i),l=_t(s),v=_t(f);t.modifiersData[r]={referenceClippingOffsets:s,popperEscapeOffsets:f,isReferenceHidden:l,hasPopperEscaped:v},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":v})}const zo={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Ho};function Uo(e,t,r){var n=te(e),o=[U,z].indexOf(n)>=0?-1:1,i=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,a=i[0],p=i[1];return a=a||0,p=(p||0)*o,[U,K].indexOf(n)>=0?{x:p,y:a}:{x:a,y:p}}function Vo(e){var t=e.state,r=e.options,n=e.name,o=r.offset,i=o===void 0?[0,0]:o,a=gr.reduce(function(l,v){return l[v]=Uo(v,t.rects,i),l},{}),p=a[t.placement],s=p.x,f=p.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=s,t.modifiersData.popperOffsets.y+=f),t.modifiersData[n]=a}const qo={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Vo};function Xo(e){var t=e.state,r=e.name;t.modifiersData[r]=Or({reference:t.rects.reference,element:t.rects.popper,placement:t.placement})}const Go={name:"popperOffsets",enabled:!0,phase:"read",fn:Xo,data:{}};function Yo(e){return e==="x"?"y":"x"}function _o(e){var t=e.state,r=e.options,n=e.name,o=r.mainAxis,i=o===void 0?!0:o,a=r.altAxis,p=a===void 0?!1:a,s=r.boundary,f=r.rootBoundary,l=r.altBoundary,v=r.padding,w=r.tether,h=w===void 0?!0:w,E=r.tetherOffset,d=E===void 0?0:E,g=Ge(t,{boundary:s,rootBoundary:f,padding:v,altBoundary:l}),P=te(t.placement),C=$e(t.placement),y=!C,u=Ct(P),m=Yo(u),x=t.modifiersData.popperOffsets,T=t.rects.reference,L=t.rects.popper,M=typeof d=="function"?d(Object.assign({},t.rects,{placement:t.placement})):d,S=typeof M=="number"?{mainAxis:M,altAxis:M}:Object.assign({mainAxis:0,altAxis:0},M),$=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,I={x:0,y:0};if(x){if(i){var D,V=u==="y"?z:U,k=u==="y"?_:K,A=u==="y"?"height":"width",R=x[u],F=R+g[V],B=R-g[k],W=h?-L[A]/2:0,ge=C===Re?T[A]:L[A],oe=C===Re?-L[A]:-T[A],xe=t.elements.arrow,Z=h&&xe?kt(xe):{width:0,height:0},X=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:yr(),ae=X[V],se=X[k],G=Ve(0,T[A],Z[A]),be=y?T[A]/2-W-G-ae-S.mainAxis:ge-G-ae-S.mainAxis,dt=y?-T[A]/2+W+G+se+S.mainAxis:oe+G+se+S.mainAxis,ye=t.elements.arrow&&_e(t.elements.arrow),J=ye?u==="y"?ye.clientTop||0:ye.clientLeft||0:0,we=(D=$?.[u])!=null?D:0,le=R+be-we-J,Ee=R+dt-we,Ae=Ve(h?lt(F,le):F,R,h?ve(B,Ee):B);x[u]=Ae,I[u]=Ae-R}if(p){var ce,Pe=u==="x"?z:U,Me=u==="x"?_:K,ee=x[m],fe=m==="y"?"height":"width",De=ee+g[Pe],Le=ee-g[Me],Ne=[z,U].indexOf(P)!==-1,Ke=(ce=$?.[m])!=null?ce:0,Ze=Ne?De:ee-T[fe]-L[fe]-Ke+S.altAxis,Oe=Ne?ee+T[fe]+L[fe]-Ke-S.altAxis:Le,Je=h&&Ne?bo(Ze,ee,Oe):Ve(h?Ze:De,ee,h?Oe:Le);x[m]=Je,I[m]=Je-ee}t.modifiersData[n]=I}}const Ko={name:"preventOverflow",enabled:!0,phase:"main",fn:_o,requiresIfExists:["offset"]};function Zo(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Jo(e){return e===q(e)||!Y(e)?$t(e):Zo(e)}function Qo(e){var t=e.getBoundingClientRect(),r=ke(t.width)/e.offsetWidth||1,n=ke(t.height)/e.offsetHeight||1;return r!==1||n!==1}function en(e,t,r){r===void 0&&(r=!1);var n=Y(t),o=Y(t)&&Qo(t),i=pe(t),a=Ce(e,o,r),p={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(n||!n&&!r)&&((re(t)!=="body"||Mt(i))&&(p=Jo(t)),Y(t)?(s=Ce(t,!0),s.x+=t.clientLeft,s.y+=t.clientTop):i&&(s.x=At(i))),{x:a.left+p.scrollLeft-s.x,y:a.top+p.scrollTop-s.y,width:a.width,height:a.height}}function tn(e){var t=new Map,r=new Set,n=[];e.forEach(function(i){t.set(i.name,i)});function o(i){r.add(i.name);var a=[].concat(i.requires||[],i.requiresIfExists||[]);a.forEach(function(p){if(!r.has(p)){var s=t.get(p);s&&o(s)}}),n.push(i)}return e.forEach(function(i){r.has(i.name)||o(i)}),n}function rn(e){var t=tn(e);return uo.reduce(function(r,n){return r.concat(t.filter(function(o){return o.phase===n}))},[])}function on(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function nn(e){var t=e.reduce(function(r,n){var o=r[n.name];return r[n.name]=o?Object.assign({},o,n,{options:Object.assign({},o.options,n.options),data:Object.assign({},o.data,n.data)}):n,r},{});return Object.keys(t).map(function(r){return t[r]})}var Kt={placement:"bottom",modifiers:[],strategy:"absolute"};function Zt(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function an(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,n=r===void 0?[]:r,o=t.defaultOptions,i=o===void 0?Kt:o;return function(p,s,f){f===void 0&&(f=i);var l={placement:"bottom",orderedModifiers:[],options:Object.assign({},Kt,i),modifiersData:{},elements:{reference:p,popper:s},attributes:{},styles:{}},v=[],w=!1,h={state:l,setOptions:function(P){var C=typeof P=="function"?P(l.options):P;d(),l.options=Object.assign({},i,l.options,C),l.scrollParents={reference:me(p)?qe(p):p.contextElement?qe(p.contextElement):[],popper:qe(s)};var y=rn(nn([].concat(n,l.options.modifiers)));return l.orderedModifiers=y.filter(function(u){return u.enabled}),E(),h.update()},forceUpdate:function(){if(!w){var P=l.elements,C=P.reference,y=P.popper;if(Zt(C,y)){l.rects={reference:en(C,_e(y),l.options.strategy==="fixed"),popper:kt(y)},l.reset=!1,l.placement=l.options.placement,l.orderedModifiers.forEach(function(S){return l.modifiersData[S.name]=Object.assign({},S.data)});for(var u=0;u<l.orderedModifiers.length;u++){if(l.reset===!0){l.reset=!1,u=-1;continue}var m=l.orderedModifiers[u],x=m.fn,T=m.options,L=T===void 0?{}:T,M=m.name;typeof x=="function"&&(l=x({state:l,options:L,name:M,instance:h})||l)}}}},update:on(function(){return new Promise(function(g){h.forceUpdate(),g(l)})}),destroy:function(){d(),w=!0}};if(!Zt(p,s))return h;h.setOptions(f).then(function(g){!w&&f.onFirstUpdate&&f.onFirstUpdate(g)});function E(){l.orderedModifiers.forEach(function(g){var P=g.name,C=g.options,y=C===void 0?{}:C,u=g.effect;if(typeof u=="function"){var m=u({state:l,name:P,instance:h,options:y}),x=function(){};v.push(m||x)}})}function d(){v.forEach(function(g){return g()}),v=[]}return h}}var sn=[ko,Go,So,mo,qo,Fo,Ko,Po,zo],pn=an({defaultModifiers:sn});function ln(e){const{elementType:t,externalSlotProps:r,ownerState:n,skipResolvingSlotProps:o=!1,...i}=e,a=o?{}:Ir(r,n),{props:p,internalRef:s}=Fr({...i,externalSlotProps:a}),f=Se(s,a?.ref,e.additionalProps?.ref);return Hr(t,{...p,ref:f},n)}function Dt(e){return parseInt(O.version,10)>=19?e?.props?.ref||null:e?.ref||null}function cn(e){return typeof e=="function"?e():e}const fn=O.forwardRef(function(t,r){const{children:n,container:o,disablePortal:i=!1}=t,[a,p]=O.useState(null),s=Se(O.isValidElement(n)?Dt(n):null,r);if(st(()=>{i||p(cn(o)||document.body)},[o,i]),st(()=>{if(a&&!i)return Ft(r,a),()=>{Ft(r,null)}},[r,a,i]),i){if(O.isValidElement(n)){const f={ref:s};return O.cloneElement(n,f)}return n}return a&&zr.createPortal(n,a)});function un(e){return ir("MuiPopper",e)}ar("MuiPopper",["root"]);function dn(e,t){if(t==="ltr")return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}function Et(e){return typeof e=="function"?e():e}function hn(e){return e.nodeType!==void 0}const vn=e=>{const{classes:t}=e;return sr({root:["root"]},un,t)},mn={},gn=O.forwardRef(function(t,r){const{anchorEl:n,children:o,direction:i,disablePortal:a,modifiers:p,open:s,placement:f,popperOptions:l,popperRef:v,slotProps:w={},slots:h={},TransitionProps:E,ownerState:d,...g}=t,P=O.useRef(null),C=Se(P,r),y=O.useRef(null),u=Se(y,v),m=O.useRef(u);st(()=>{m.current=u},[u]),O.useImperativeHandle(v,()=>y.current,[]);const x=dn(f,i),[T,L]=O.useState(x),[M,S]=O.useState(Et(n));O.useEffect(()=>{y.current&&y.current.forceUpdate()}),O.useEffect(()=>{n&&S(Et(n))},[n]),st(()=>{if(!M||!s)return;const k=F=>{L(F.placement)};let A=[{name:"preventOverflow",options:{altBoundary:a}},{name:"flip",options:{altBoundary:a}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:({state:F})=>{k(F)}}];p!=null&&(A=A.concat(p)),l&&l.modifiers!=null&&(A=A.concat(l.modifiers));const R=pn(M,P.current,{placement:x,...l,modifiers:A});return m.current(R),()=>{R.destroy(),m.current(null)}},[M,a,p,s,l,x]);const $={placement:T};E!==null&&($.TransitionProps=E);const I=vn(t),D=h.root??"div",V=ln({elementType:D,externalSlotProps:w.root,externalForwardedProps:g,additionalProps:{role:"tooltip",ref:C},ownerState:t,className:I.root});return c.jsx(D,{...V,children:typeof o=="function"?o($):o})}),xn=O.forwardRef(function(t,r){const{anchorEl:n,children:o,container:i,direction:a="ltr",disablePortal:p=!1,keepMounted:s=!1,modifiers:f,open:l,placement:v="bottom",popperOptions:w=mn,popperRef:h,style:E,transition:d=!1,slotProps:g={},slots:P={},...C}=t,[y,u]=O.useState(!0),m=()=>{u(!1)},x=()=>{u(!0)};if(!s&&!l&&(!d||y))return null;let T;if(i)T=i;else if(n){const S=Et(n);T=S&&hn(S)?It(S).body:It(null).body}const L=!l&&s&&(!d||y)?"none":void 0,M=d?{in:l,onEnter:m,onExited:x}:void 0;return c.jsx(fn,{disablePortal:p,container:T,children:c.jsx(gn,{anchorEl:n,direction:a,disablePortal:p,modifiers:f,ref:r,open:d?!y:l,placement:v,popperOptions:w,popperRef:h,slotProps:g,slots:P,...C,style:{position:"fixed",top:0,left:0,display:L,...E},TransitionProps:M,children:o})})}),bn=ct(xn,{name:"MuiPopper",slot:"Root"})({}),Tr=O.forwardRef(function(t,r){const n=pr(),o=lr({props:t,name:"MuiPopper"}),{anchorEl:i,component:a,components:p,componentsProps:s,container:f,disablePortal:l,keepMounted:v,modifiers:w,open:h,placement:E,popperOptions:d,popperRef:g,transition:P,slots:C,slotProps:y,...u}=o,m=C?.root??p?.Root,x={anchorEl:i,container:f,disablePortal:l,keepMounted:v,modifiers:w,open:h,placement:E,popperOptions:d,popperRef:g,transition:P,...u};return c.jsx(bn,{as:a,direction:n?"rtl":"ltr",slots:{root:m},slotProps:y??s,...x,ref:r})});function Pt(e){return`scale(${e}, ${e**2})`}const yn={entering:{opacity:1,transform:Pt(1)},entered:{opacity:1,transform:"none"}},gt=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),Ot=O.forwardRef(function(t,r){const{addEndListener:n,appear:o=!0,children:i,easing:a,in:p,onEnter:s,onEntered:f,onEntering:l,onExit:v,onExited:w,onExiting:h,style:E,timeout:d="auto",TransitionComponent:g=ie,...P}=t,C=ze(),y=O.useRef(),u=cr(),m=O.useRef(null),x=Se(m,Dt(i),r),T=k=>A=>{if(k){const R=m.current;A===void 0?k(R):k(R,A)}},L=T(l),M=T((k,A)=>{eo(k);const{duration:R,delay:F,easing:B}=zt({style:E,timeout:d,easing:a},{mode:"enter"});let W;d==="auto"?(W=u.transitions.getAutoHeightDuration(k.clientHeight),y.current=W):W=R,k.style.transition=[u.transitions.create("opacity",{duration:W,delay:F}),u.transitions.create("transform",{duration:gt?W:W*.666,delay:F,easing:B})].join(","),s&&s(k,A)}),S=T(f),$=T(h),I=T(k=>{const{duration:A,delay:R,easing:F}=zt({style:E,timeout:d,easing:a},{mode:"exit"});let B;d==="auto"?(B=u.transitions.getAutoHeightDuration(k.clientHeight),y.current=B):B=A,k.style.transition=[u.transitions.create("opacity",{duration:B,delay:R}),u.transitions.create("transform",{duration:gt?B:B*.666,delay:gt?R:R||B*.333,easing:F})].join(","),k.style.opacity=0,k.style.transform=Pt(.75),v&&v(k)}),D=T(w),V=k=>{d==="auto"&&C.start(y.current||0,k),n&&n(m.current,k)};return c.jsx(g,{appear:o,in:p,nodeRef:m,onEnter:M,onEntered:S,onEntering:L,onExit:I,onExited:D,onExiting:$,addEndListener:V,timeout:d==="auto"?null:d,...P,children:(k,{ownerState:A,...R})=>O.cloneElement(i,{style:{opacity:0,transform:Pt(.75),visibility:k==="exited"&&!p?"hidden":void 0,...yn[k],...E,...i.props.style},ref:x,...R})})});Ot&&(Ot.muiSupportAuto=!0);function wn(e){return ir("MuiTooltip",e)}const N=ar("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]);function En(e){return Math.round(e*1e5)/1e5}const Pn=e=>{const{classes:t,disableInteractive:r,arrow:n,touch:o,placement:i}=e,a={popper:["popper",!r&&"popperInteractive",n&&"popperArrow"],tooltip:["tooltip",n&&"tooltipArrow",o&&"touch",`tooltipPlacement${fr(i.split("-")[0])}`],arrow:["arrow"]};return sr(a,wn,t)},On=ct(Tr,{name:"MuiTooltip",slot:"Popper",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.popper,!r.disableInteractive&&t.popperInteractive,r.arrow&&t.popperArrow,!r.open&&t.popperClose]}})(Tt(({theme:e})=>({zIndex:(e.vars||e).zIndex.tooltip,pointerEvents:"none",variants:[{props:({ownerState:t})=>!t.disableInteractive,style:{pointerEvents:"auto"}},{props:({open:t})=>!t,style:{pointerEvents:"none"}},{props:({ownerState:t})=>t.arrow,style:{[`&[data-popper-placement*="bottom"] .${N.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${N.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${N.arrow}`]:{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}},[`&[data-popper-placement*="left"] .${N.arrow}`]:{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}}}},{props:({ownerState:t})=>t.arrow&&!t.isRtl,style:{[`&[data-popper-placement*="right"] .${N.arrow}`]:{left:0,marginLeft:"-0.71em"}}},{props:({ownerState:t})=>t.arrow&&!!t.isRtl,style:{[`&[data-popper-placement*="right"] .${N.arrow}`]:{right:0,marginRight:"-0.71em"}}},{props:({ownerState:t})=>t.arrow&&!t.isRtl,style:{[`&[data-popper-placement*="left"] .${N.arrow}`]:{right:0,marginRight:"-0.71em"}}},{props:({ownerState:t})=>t.arrow&&!!t.isRtl,style:{[`&[data-popper-placement*="left"] .${N.arrow}`]:{left:0,marginLeft:"-0.71em"}}}]}))),Tn=ct("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.tooltip,r.touch&&t.touch,r.arrow&&t.tooltipArrow,t[`tooltipPlacement${fr(r.placement.split("-")[0])}`]]}})(Tt(({theme:e})=>({backgroundColor:e.vars?e.vars.palette.Tooltip.bg:e.alpha(e.palette.grey[700],.92),borderRadius:(e.vars||e).shape.borderRadius,color:(e.vars||e).palette.common.white,fontFamily:e.typography.fontFamily,padding:"4px 8px",fontSize:e.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:e.typography.fontWeightMedium,[`.${N.popper}[data-popper-placement*="left"] &`]:{transformOrigin:"right center"},[`.${N.popper}[data-popper-placement*="right"] &`]:{transformOrigin:"left center"},[`.${N.popper}[data-popper-placement*="top"] &`]:{transformOrigin:"center bottom",marginBottom:"14px"},[`.${N.popper}[data-popper-placement*="bottom"] &`]:{transformOrigin:"center top",marginTop:"14px"},variants:[{props:({ownerState:t})=>t.arrow,style:{position:"relative",margin:0}},{props:({ownerState:t})=>t.touch,style:{padding:"8px 16px",fontSize:e.typography.pxToRem(14),lineHeight:`${En(16/14)}em`,fontWeight:e.typography.fontWeightRegular}},{props:({ownerState:t})=>!t.isRtl,style:{[`.${N.popper}[data-popper-placement*="left"] &`]:{marginRight:"14px"},[`.${N.popper}[data-popper-placement*="right"] &`]:{marginLeft:"14px"}}},{props:({ownerState:t})=>!t.isRtl&&t.touch,style:{[`.${N.popper}[data-popper-placement*="left"] &`]:{marginRight:"24px"},[`.${N.popper}[data-popper-placement*="right"] &`]:{marginLeft:"24px"}}},{props:({ownerState:t})=>!!t.isRtl,style:{[`.${N.popper}[data-popper-placement*="left"] &`]:{marginLeft:"14px"},[`.${N.popper}[data-popper-placement*="right"] &`]:{marginRight:"14px"}}},{props:({ownerState:t})=>!!t.isRtl&&t.touch,style:{[`.${N.popper}[data-popper-placement*="left"] &`]:{marginLeft:"24px"},[`.${N.popper}[data-popper-placement*="right"] &`]:{marginRight:"24px"}}},{props:({ownerState:t})=>t.touch,style:{[`.${N.popper}[data-popper-placement*="top"] &`]:{marginBottom:"24px"}}},{props:({ownerState:t})=>t.touch,style:{[`.${N.popper}[data-popper-placement*="bottom"] &`]:{marginTop:"24px"}}}]}))),jn=ct("span",{name:"MuiTooltip",slot:"Arrow"})(Tt(({theme:e})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:e.vars?e.vars.palette.Tooltip.bg:e.alpha(e.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}})));let nt=!1;const Jt=new Vr;let He={x:0,y:0};function it(e,t){return(r,...n)=>{t&&t(r,...n),e(r,...n)}}const Qt=O.forwardRef(function(t,r){const n=lr({props:t,name:"MuiTooltip"}),{arrow:o=!1,children:i,classes:a,components:p={},componentsProps:s={},describeChild:f=!1,disableFocusListener:l=!1,disableHoverListener:v=!1,disableInteractive:w=!1,disableTouchListener:h=!1,enterDelay:E=100,enterNextDelay:d=0,enterTouchDelay:g=700,followCursor:P=!1,id:C,leaveDelay:y=0,leaveTouchDelay:u=1500,onClose:m,onOpen:x,open:T,placement:L="bottom",PopperComponent:M,PopperProps:S={},slotProps:$={},slots:I={},title:D,TransitionComponent:V,TransitionProps:k,...A}=n,R=O.isValidElement(i)?i:c.jsx("span",{children:i}),F=cr(),B=pr(),[W,ge]=O.useState(),[oe,xe]=O.useState(null),Z=O.useRef(!1),X=w||P,ae=ze(),se=ze(),G=ze(),be=ze(),[dt,ye]=Jr({controlled:T,default:!1});let J=dt;const we=Ur(C),le=O.useRef(),Ee=Lt(()=>{le.current!==void 0&&(document.body.style.WebkitUserSelect=le.current,le.current=void 0),be.clear()});O.useEffect(()=>Ee,[Ee]);const Ae=b=>{Jt.clear(),nt=!0,ye(!0),x&&!J&&x(b)},ce=Lt(b=>{Jt.start(800+y,()=>{nt=!1}),ye(!1),m&&J&&m(b),ae.start(F.transitions.duration.shortest,()=>{Z.current=!1})}),Pe=b=>{Z.current&&b.type!=="touchstart"||(W&&W.removeAttribute("title"),se.clear(),G.clear(),E||nt&&d?se.start(nt?d:E,()=>{Ae(b)}):Ae(b))},Me=b=>{se.clear(),G.start(y,()=>{ce(b)})},[,ee]=O.useState(!1),fe=b=>{const H=b?.target??W;if(!H||!Bt(H)){ee(!1);const mt=b??new Event("blur");!b&&H&&(Object.defineProperty(mt,"target",{value:H}),Object.defineProperty(mt,"currentTarget",{value:H})),Me(mt)}},De=b=>{W||ge(b.currentTarget),Bt(b.target)&&(ee(!0),Pe(b))},Le=b=>{Z.current=!0;const H=R.props;H.onTouchStart&&H.onTouchStart(b)},Ne=b=>{Le(b),G.clear(),ae.clear(),Ee(),le.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",be.start(g,()=>{document.body.style.WebkitUserSelect=le.current,Pe(b)})},Ke=b=>{R.props.onTouchEnd&&R.props.onTouchEnd(b),Ee(),G.start(u,()=>{ce(b)})};O.useEffect(()=>{if(!J)return;function b(H){H.key==="Escape"&&ce(H)}return document.addEventListener("keydown",b),()=>{document.removeEventListener("keydown",b)}},[ce,J]);const Ze=Se(Dt(R),ge,r);!D&&D!==0&&(J=!1);const Oe=O.useRef(),Je=b=>{const H=R.props;H.onMouseMove&&H.onMouseMove(b),He={x:b.clientX,y:b.clientY},Oe.current&&Oe.current.update()},Be={},ht=typeof D=="string";f?(Be.title=!J&&ht&&!v?D:null,Be["aria-describedby"]=J?we:null):(Be["aria-label"]=ht?D:null,Be["aria-labelledby"]=J&&!ht?we:null);const Q={...Be,...A,...R.props,className:Nt(A.className,R.props.className),onTouchStart:Le,ref:Ze,...P?{onMouseMove:Je}:{}},We={};h||(Q.onTouchStart=Ne,Q.onTouchEnd=Ke),v||(Q.onMouseOver=it(Pe,Q.onMouseOver),Q.onMouseLeave=it(Me,Q.onMouseLeave),X||(We.onMouseOver=Pe,We.onMouseLeave=Me)),l||(Q.onFocus=it(De,Q.onFocus),Q.onBlur=it(fe,Q.onBlur),X||(We.onFocus=De,We.onBlur=fe));const ue={...n,isRtl:B,arrow:o,disableInteractive:X,placement:L,PopperComponentProp:M,touch:Z.current},Ie=typeof $.popper=="function"?$.popper(ue):$.popper,Sr=O.useMemo(()=>{let b=[{name:"arrow",enabled:!!oe,options:{element:oe,padding:4}}];return S.popperOptions?.modifiers&&(b=b.concat(S.popperOptions.modifiers)),Ie?.popperOptions?.modifiers&&(b=b.concat(Ie.popperOptions.modifiers)),{...S.popperOptions,...Ie?.popperOptions,modifiers:b}},[oe,S.popperOptions,Ie?.popperOptions]),vt=Pn(ue),Rr=typeof $.transition=="function"?$.transition(ue):$.transition,Qe={slots:{popper:p.Popper,transition:p.Transition??V,tooltip:p.Tooltip,arrow:p.Arrow,...I},slotProps:{arrow:$.arrow??s.arrow,popper:{...S,...Ie??s.popper},tooltip:$.tooltip??s.tooltip,transition:{...k,...Rr??s.transition}}},[kr,Cr]=rt("popper",{elementType:On,externalForwardedProps:Qe,ownerState:ue,className:Nt(vt.popper,S?.className)}),[$r,Ar]=rt("transition",{elementType:Ot,externalForwardedProps:Qe,ownerState:ue}),[Mr,Dr]=rt("tooltip",{elementType:Tn,className:vt.tooltip,externalForwardedProps:Qe,ownerState:ue}),[Lr,Nr]=rt("arrow",{elementType:jn,className:vt.arrow,externalForwardedProps:Qe,ownerState:ue,ref:xe});return c.jsxs(O.Fragment,{children:[O.cloneElement(R,Q),c.jsx(kr,{as:M??Tr,placement:L,anchorEl:P?{getBoundingClientRect:()=>({top:He.y,left:He.x,right:He.x,bottom:He.y,width:0,height:0})}:W,popperRef:Oe,open:W?J:!1,id:we,transition:!0,...We,...Cr,popperOptions:Sr,children:({TransitionProps:b})=>c.jsx($r,{timeout:F.transitions.duration.shorter,...b,...Ar,children:c.jsxs(Mr,{...Dr,children:[D,o?c.jsx(Lr,{...Nr}):null]})})})]})});function Sn({expanded:e}){return c.jsx(Rn,{expanded:e,"aria-hidden":"true",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:c.jsx("polyline",{points:"9,6 15,12 9,18",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}const Rn=j.svg`
  width: 16px;
  height: 16px;
  transition: transform 0.2s ease;
  flex-shrink: 0;
  transform: ${({expanded:e})=>e?"rotate(90deg)":"rotate(0deg)"};
`,kn=qr(c.jsx("path",{d:"M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m0 12H4V8h16z"}));function Cn({node:e,depth:t,expanded:r=!1,onToggle:n,pathSegments:o}){const i=dr(o),a=e.type==="folder",s=!!Xr(`/tree/${i}`);return c.jsx($n,{$depth:t,children:a?c.jsxs(An,{onClick:n,"aria-expanded":r,"aria-label":e.name,type:"button",$isActive:s,children:[c.jsx(Dn,{children:c.jsx(Sn,{expanded:r})}),r?c.jsx(kn,{sx:{fontSize:15,color:"#fbbf24",flexShrink:0}}):c.jsx(hr,{sx:{fontSize:15,color:"#f59e0b",flexShrink:0}}),c.jsx(er,{to:`/tree/${i}`,$isActive:s,onClick:f=>f.stopPropagation(),children:e.name})]}):c.jsxs(Mn,{$isActive:s,children:[c.jsx(Ln,{}),c.jsx(vr,{sx:{fontSize:15,color:"#94a3b8",flexShrink:0}}),c.jsx(er,{to:`/tree/${i}`,$isActive:s,children:e.name})]})})}const $n=j.div`
  padding-left: ${({$depth:e})=>e*12}px;
`,An=j.button`
  display: flex;
  align-items: center;
  gap: 5px;
  background: ${({$isActive:e})=>e?"rgba(99, 102, 241, 0.18)":"transparent"};
  border: none;
  border-left: 2px solid ${({$isActive:e})=>e?"#6366f1":"transparent"};
  cursor: pointer;
  padding: 5px 10px 5px 8px;
  width: 100%;
  text-align: left;
  transition: background 0.12s;

  &:hover {
    background: ${({$isActive:e})=>e?"rgba(99, 102, 241, 0.24)":"rgba(255, 255, 255, 0.05)"};
  }
`,Mn=j.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 10px 5px 10px;
  border-left: 2px solid ${({$isActive:e})=>e?"#6366f1":"transparent"};
  background: ${({$isActive:e})=>e?"rgba(99, 102, 241, 0.18)":"transparent"};
  transition: background 0.12s;

  &:hover {
    background: ${({$isActive:e})=>e?"rgba(99, 102, 241, 0.24)":"rgba(255, 255, 255, 0.05)"};
  }
`,Dn=j.span`
  display: flex;
  align-items: center;
  color: #475569;
  flex-shrink: 0;
`,Ln=j.span`
  width: 16px;
  flex-shrink: 0;
`,er=j(ur)`
  color: ${({$isActive:e})=>e?"#c7d2fe":"#94a3b8"};
  text-decoration: none;
  font-size: 13px;
  font-weight: ${({$isActive:e})=>e?"500":"400"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
  flex: 1;
  transition: color 0.1s;

  &:hover {
    color: #e2e8f0;
  }
`;function jr({node:e,depth:t=0,parentSegments:r=[]}){const n=xt(s=>s.expandedPaths),o=xt(s=>s.toggle),i=[...r,e.name],a=i.join("/"),p=n.includes(a);return c.jsxs("div",{children:[c.jsx(Cn,{node:e,depth:t,expanded:p,onToggle:e.type==="folder"?()=>o(a):void 0,pathSegments:i}),e.type==="folder"&&p&&c.jsx("div",{children:e.children.map(s=>c.jsx(jr,{node:s,depth:t+1,parentSegments:i},s.name))})]})}function Nn({value:e,onChange:t}){const{t:r}=jt();return c.jsxs(Bn,{children:[c.jsx(Wn,{"aria-hidden":"true",children:c.jsxs("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("circle",{cx:"11",cy:"11",r:"8"}),c.jsx("path",{d:"m21 21-4.35-4.35"})]})}),c.jsx(In,{type:"search",value:e,onChange:n=>t(n.target.value),placeholder:r("search_placeholder"),"aria-label":r("search_placeholder")}),e&&c.jsx(Fn,{type:"button",onClick:()=>t(""),"aria-label":"clear search",children:"✕"})]})}const Bn=j.div`
  position: relative;
  display: flex;
  align-items: center;
`,Wn=j.span`
  position: absolute;
  left: 10px;
  color: #475569;
  display: flex;
  align-items: center;
  pointer-events: none;
`,In=j.input`
  width: 100%;
  padding: 8px 28px 8px 32px;
  font-size: 12.5px;
  font-family: inherit;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 7px;
  color: #e2e8f0;
  box-sizing: border-box;
  outline: none;
  transition: border-color 0.15s, background 0.15s;

  &::placeholder {
    color: #475569;
  }

  &:focus {
    border-color: #6366f1;
    background: rgba(99, 102, 241, 0.1);
  }

  &::-webkit-search-cancel-button {
    display: none;
  }
`,Fn=j.button`
  position: absolute;
  right: 8px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 11px;
  color: #475569;
  line-height: 1;
  padding: 2px 3px;

  &:hover {
    color: #94a3b8;
  }
`;function Hn({node:e,path:t}){const r=t.split("/"),n=dr(r),o=e.type==="folder";return c.jsx(zn,{children:c.jsxs(Un,{to:`/tree/${n}`,children:[o?c.jsx(hr,{sx:{fontSize:14,color:"#f59e0b",flexShrink:0}}):c.jsx(vr,{sx:{fontSize:14,color:"#64748b",flexShrink:0}}),c.jsxs(Vn,{children:[c.jsx(qn,{children:e.name}),c.jsx(Xn,{children:t})]})]})})}const zn=j.li`
  &:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  }
`,Un=j(ur)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 7px 10px;
  text-decoration: none;
  transition: background 0.1s;

  &:hover {
    background: rgba(255, 255, 255, 0.06);
  }
`,Vn=j.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  overflow: hidden;
`,qn=j.span`
  font-size: 12px;
  font-weight: 500;
  color: #cbd5e1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Xn=j.span`
  font-size: 10px;
  color: #475569;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: ui-monospace, 'Cascadia Code', monospace;
`;function tr({variant:e="sidebar"}){const{t}=jt(),[r,n]=Gr(),o=pt(s=>s.tree),i=r.get("q")??"";function a(s){n(s?{q:s}:{},{replace:!0})}const p=i&&o?Zr(o,i):[];return c.jsxs(Gn,{$topbar:e==="topbar",children:[c.jsx(Nn,{value:i,onChange:a}),i&&c.jsx(Yn,{$topbar:e==="topbar",children:p.length===0?c.jsx(Kn,{children:t("search_no_results")}):c.jsxs(c.Fragment,{children:[c.jsx(_n,{children:t("search_results_count",{count:p.length})}),c.jsx(Zn,{children:p.map(({node:s,path:f})=>c.jsx(Hn,{node:s,path:f},f))})]})})]})}const Gn=j.div`
  padding: ${({$topbar:e})=>e?"0":"10px"};
  flex-shrink: 0;
  flex: ${({$topbar:e})=>e?"1":"unset"};
  position: relative;
`,Yn=j.div`
  margin-top: 6px;
  background: #1e293b;
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 8px;
  overflow: hidden;
  max-height: 260px;
  overflow-y: auto;
  position: ${({$topbar:e})=>e?"absolute":"relative"};
  ${({$topbar:e})=>e&&"left: 0; right: 0; z-index: 200;"}
`,_n=j.div`
  font-size: 11px;
  color: #475569;
  padding: 6px 10px 4px;
  letter-spacing: 0.01em;
`,Kn=j.div`
  font-size: 12px;
  color: #475569;
  padding: 14px 10px;
  text-align: center;
`,Zn=j.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`,ut="768px";function Jn(){const e=pt(a=>a.tree),t=pt(a=>a.clearTree),r=xt(a=>a.clear),n=Yr(),{t:o}=jt();function i(){r(),t(),n("/")}return c.jsxs(Qn,{children:[c.jsxs(ei,{children:[c.jsxs(ti,{children:[c.jsx(ri,{"aria-hidden":"true",children:c.jsx("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:c.jsx("path",{d:"M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z",fill:"rgba(255,255,255,0.18)",stroke:"rgba(255,255,255,0.5)",strokeWidth:"1.5",strokeLinejoin:"round"})})}),c.jsx(rr,{children:"FileTree"})]}),c.jsx(oi,{children:c.jsx(tr,{variant:"topbar"})}),c.jsxs(ni,{children:[c.jsx(Wt,{compact:!0}),c.jsx(Qt,{title:o("load_new_tree"),placement:"bottom",children:c.jsx(or,{onClick:i,type:"button","aria-label":o("load_new_tree"),children:"↺"})})]})]}),c.jsxs(ii,{children:[c.jsxs(ai,{children:[c.jsx(si,{"aria-hidden":"true",children:c.jsx("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:c.jsx("path",{d:"M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z",fill:"rgba(255,255,255,0.18)",stroke:"rgba(255,255,255,0.5)",strokeWidth:"1.5",strokeLinejoin:"round"})})}),c.jsx(rr,{children:"FileTree"}),c.jsx(pi,{}),c.jsx(Wt,{compact:!0}),c.jsx(Qt,{title:o("load_new_tree"),placement:"right",children:c.jsx(or,{onClick:i,type:"button","aria-label":o("load_new_tree"),children:"↺"})})]}),c.jsx(tr,{}),e&&c.jsx(li,{children:c.jsx(jr,{node:e})})]}),c.jsx(ci,{children:c.jsx(_r,{})})]})}const Qn=j.div`
  display: flex;
  height: 100%;
  overflow: hidden;

  @media (max-width: ${ut}) {
    flex-direction: column;
  }
`,ei=j.header`
  display: none;

  @media (max-width: ${ut}) {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 12px;
    min-height: 52px;
    background: #0f172a;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    flex-shrink: 0;
    position: relative;
    z-index: 100;
  }
`,ti=j.div`
  display: flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
`,ri=j.span`
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
`,oi=j.div`
  flex: 1;
  min-width: 0;
`,ni=j.div`
  display: flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
`,ii=j.aside`
  width: 280px;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  background: #0f172a;
  flex-shrink: 0;

  @media (max-width: ${ut}) {
    display: none;
  }
`,ai=j.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 14px 14px 14px 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  flex-shrink: 0;
`,si=j.span`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
`,rr=j.span`
  font-size: 13px;
  font-weight: 600;
  color: #e2e8f0;
  letter-spacing: -0.01em;
`,pi=j.div`
  flex: 1;
`,or=j.button`
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  color: #94a3b8;
  cursor: pointer;
  padding: 0;
  font-size: 16px;
  transition: all 0.15s;

  &:hover {
    background: rgba(255, 255, 255, 0.14);
    color: #e2e8f0;
  }
`,li=j.div`
  flex: 1;
  overflow-y: auto;
  padding: 6px 0 12px;
`,ci=j.main`
  flex: 1;
  overflow-y: auto;
  padding: 40px;
  background: #f8fafc;

  @media (max-width: ${ut}) {
    padding: 0;
  }
`;function vi(){return pt(t=>t.tree)?c.jsx(Jn,{}):c.jsx(Kr,{to:"/",replace:!0})}export{vi as default};
