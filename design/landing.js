/*! design/landing.js - GENERATED. Do not edit by hand; rebuild it.
 *
 * The public page's motion (P16, "Light 2"), bundled whole from the product at
 * commit 4158f6c: components/landing/motion.ts (the page: reveals, the story, the
 * ghost words, the count-up, the swap button, the FAQ, the smooth scroll),
 * components/landing/world.ts (the WebGL world, three.js) and
 * components/landing/stage.ts (what the two share), with three 0.169.0 and
 * lenis 1.1.18 from the product's own node_modules. The entry is what
 * LandingMotion.tsx does: find the `.landing` root and call runLanding(root).
 * The boot script (BootScript.tsx, the curtain) is inline in design/index.html,
 * as the product has it; design/auth.js is the dialog of P17 and is not built.
 *
 * One change on the way out, and only one: the marks' URL root is rewritten to
 * visuals/logos/, so the world and the still fallback resolve from design/.
 * With no WebGL the page shows the icons as a still (lp-nogl), and under
 * reduced motion the story lays out at its last state: both are the product's.
 *
 * Rebuild, from the product's root (read only: nothing is written there), with
 * DESIGN set to this repository's design/ folder:
 *   B="$(sed -n '1,/^ \*\/$/p' "$DESIGN/landing.js")"
 *   printf '%s\n' 'import { runLanding } from "./components/landing/motion";' \
 *     'const r = document.querySelector(".landing"); if (r) runLanding(r);' \
 *   | npx -y esbuild@0.25.10 --bundle --format=iife --minify --target=es2020 \
 *       --loader=ts --sourcefile=landing-entry.ts --banner:js="$B" \
 *   | sed 's#\([`"]\)/logos/#\1visuals/logos/#g' > "$DESIGN/landing.js"
 */
(()=>{var rc=Object.defineProperty;var nu=(i,t,e)=>t in i?rc(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var Ao=(i,t)=>()=>(i&&(t=i(i=0)),t);var iu=(i,t)=>{for(var e in t)rc(i,e,{get:t[e],enumerable:!0})};var Vt=(i,t,e)=>nu(i,typeof t!="symbol"?t+"":t,e);var or,ie,Le,Ue,Ro,hc,Co=Ao(()=>{"use strict";or=[["spotify",[.86,.47,150,"u"],[.8,.6,110,"u"],10,12],["netflix",[.55,.2,30,"u"],[.22,.3,30,"u"],-8,10],["hulu",[.99,.13,-80,"u"],[.86,.14,-80,"u"],-6,6],["amazon-prime",[.18,.58,-140,"u"],[.34,.78,-140,"u"],12,13],["chatgpt",[.3,.1,-340,"u"],[.52,.16,-340,"u"],6,4],["adobe-cc",[.66,.8,-360,"u"],[.62,.92,-360,"u"],-10,8],["icloud",[.42,.4,-380,"u"],[.06,.56,-380,"u"],-6,2],["disney-plus",[.7,.56,-760,"u"],[.46,.5,-760,"u"],-12,5],["nyt",[.86,.28,-1e3,"u"],[.7,.36,-1e3,"u"],10,1],["apple-music",[.95,.86,-880,"u"],null,8,9],["notion",[.08,.92,-820,"u"],[.96,.4,-900,"u"],14,3],["economist",[.42,.15,-1e3,"h"],null,-8,0],["strava",[.3,.95,-1100,"h"],null,-14,7],["peloton",[.58,.93,-950,"h"],null,14,11]],ie=(i,t=0,e=1)=>i<t?t:i>e?e:i,Le=i=>i*i*(3-2*i),Ue=(i,t,e)=>Le(ie((e-i)/(t-i))),Ro=i=>1-Math.pow(1-i,3),hc=i=>({far:ie(-i/1100),sc:1e3/(1e3-i)})});function wi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ze[i&255]+ze[i>>8&255]+ze[i>>16&255]+ze[i>>24&255]+"-"+ze[t&255]+ze[t>>8&255]+"-"+ze[t>>16&15|64]+ze[t>>24&255]+"-"+ze[e&63|128]+ze[e>>8&255]+"-"+ze[e>>16&255]+ze[e>>24&255]+ze[n&255]+ze[n>>8&255]+ze[n>>16&255]+ze[n>>24&255]).toLowerCase()}function Ne(i,t,e){return Math.max(t,Math.min(e,i))}function zl(i,t){return(i%t+t)%t}function td(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function ed(i,t,e){return i!==t?(e-i)/(t-i):0}function Ns(i,t,e){return(1-e)*i+e*t}function nd(i,t,e,n){return Ns(i,t,1-Math.exp(-e*n))}function id(i,t=1){return t-Math.abs(zl(i,t*2)-t)}function sd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function rd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function od(i,t){return i+Math.floor(Math.random()*(t-i+1))}function ad(i,t){return i+Math.random()*(t-i)}function ld(i){return i*(.5-Math.random())}function cd(i){i!==void 0&&(Mc=i);let t=Mc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function hd(i){return i*Us}function ud(i){return i*Hs}function dd(i){return(i&i-1)===0&&i!==0}function fd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function pd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function md(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),u=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*d,l*u,a*c);break;case"YZY":i.set(l*u,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*u,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ns(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ve(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}function Ch(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Xr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function gd(){let i=Xr("canvas");return i.style.display="block",i}function zr(i){i in Sc||(Sc[i]=!0,console.warn(i))}function _d(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function vd(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function xd(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}function as(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Do(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}function Uo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Za.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function Fo(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){li.fromArray(i,r);let a=s.x*Math.abs(li.x)+s.y*Math.abs(li.y)+s.z*Math.abs(li.z),l=t.dot(li),c=e.dot(li),h=n.dot(li);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}function $o(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}function Ld(i,t,e,n,s,r,o,a){let l;if(t.side===Je?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===jn,a),l===null)return null;Sr.copy(a),Sr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Sr);return c<e.near||c>e.far?null:{distance:c,point:Sr.clone(),object:i}}function br(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,vr),i.getVertexPosition(l,xr),i.getVertexPosition(c,yr);let h=Ld(i,t,e,n,vr,xr,yr,Fc);if(h){let d=new D;mi.getBarycoord(Fc,vr,xr,yr,d),s&&(h.uv=mi.getInterpolatedAttribute(s,a,l,c,d,new Pt)),r&&(h.uv1=mi.getInterpolatedAttribute(r,a,l,c,d,new Pt)),o&&(h.normal=mi.getInterpolatedAttribute(o,a,l,c,d,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new D,materialIndex:0};mi.getNormal(vr,xr,yr,u.normal),h.face=u,h.barycoord=d}return h}function ms(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ge(i){let t={};for(let e=0;e<i.length;e++){let n=ms(i[e]);for(let s in n)t[s]=n[s]}return t}function Dd(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ih(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:de.workingColorSpace}function Lh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function zd(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],y=d[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++u,d[u]=y)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let y=d[f];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}function Mm(i,t,e,n,s,r,o){let a=new he(0),l=r===!0?0:1,c,h,d=null,u=0,f=null;function g(A){let S=A.isScene===!0?A.background:null;return S&&S.isTexture&&(S=(A.backgroundBlurriness>0?e:t).get(S)),S}function y(A){let S=!1,w=g(A);w===null?m(a,l):w&&w.isColor&&(m(w,1),S=!0);let O=i.xr.getEnvironmentBlendMode();O==="additive"?n.buffers.color.setClear(0,0,0,1,o):O==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(A,S){let w=g(S);w&&(w.isCubeTexture||w.mapping===po)?(h===void 0&&(h=new Fe(new Vs(1,1,1),new Oe({name:"BackgroundCubeMaterial",uniforms:ms(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:Je,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(O,P,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ui.copy(S.backgroundRotation),ui.x*=-1,ui.y*=-1,ui.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(ui.y*=-1,ui.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ym.makeRotationFromEuler(ui)),h.material.toneMapped=de.getTransfer(w.colorSpace)!==ye,(d!==w||u!==w.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,d=w,u=w.version,f=i.toneMapping),h.layers.enableAll(),A.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new Fe(new gs(2,2),new Oe({name:"BackgroundMaterial",uniforms:ms(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=de.getTransfer(w.colorSpace)!==ye,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(d!==w||u!==w.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,d=w,u=w.version,f=i.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function m(A,S){A.getRGB(wr,Ih(i)),n.buffers.color.setClear(wr.r,wr.g,wr.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(A,S=1){a.set(A),l=S,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,m(a,l)},render:y,addToRenderList:p}}function Sm(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(_,M,Q,B,X){let at=!1,k=d(B,Q,M);r!==k&&(r=k,c(r.object)),at=f(_,B,Q,X),at&&g(_,B,Q,X),X!==null&&t.update(X,i.ELEMENT_ARRAY_BUFFER),(at||o)&&(o=!1,w(_,M,Q,B),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return i.createVertexArray()}function c(_){return i.bindVertexArray(_)}function h(_){return i.deleteVertexArray(_)}function d(_,M,Q){let B=Q.wireframe===!0,X=n[_.id];X===void 0&&(X={},n[_.id]=X);let at=X[M.id];at===void 0&&(at={},X[M.id]=at);let k=at[B];return k===void 0&&(k=u(l()),at[B]=k),k}function u(_){let M=[],Q=[],B=[];for(let X=0;X<e;X++)M[X]=0,Q[X]=0,B[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:Q,attributeDivisors:B,object:_,attributes:{},index:null}}function f(_,M,Q,B){let X=r.attributes,at=M.attributes,k=0,ht=Q.getAttributes();for(let Z in ht)if(ht[Z].location>=0){let St=X[Z],xt=at[Z];if(xt===void 0&&(Z==="instanceMatrix"&&_.instanceMatrix&&(xt=_.instanceMatrix),Z==="instanceColor"&&_.instanceColor&&(xt=_.instanceColor)),St===void 0||St.attribute!==xt||xt&&St.data!==xt.data)return!0;k++}return r.attributesNum!==k||r.index!==B}function g(_,M,Q,B){let X={},at=M.attributes,k=0,ht=Q.getAttributes();for(let Z in ht)if(ht[Z].location>=0){let St=at[Z];St===void 0&&(Z==="instanceMatrix"&&_.instanceMatrix&&(St=_.instanceMatrix),Z==="instanceColor"&&_.instanceColor&&(St=_.instanceColor));let xt={};xt.attribute=St,St&&St.data&&(xt.data=St.data),X[Z]=xt,k++}r.attributes=X,r.attributesNum=k,r.index=B}function y(){let _=r.newAttributes;for(let M=0,Q=_.length;M<Q;M++)_[M]=0}function p(_){m(_,0)}function m(_,M){let Q=r.newAttributes,B=r.enabledAttributes,X=r.attributeDivisors;Q[_]=1,B[_]===0&&(i.enableVertexAttribArray(_),B[_]=1),X[_]!==M&&(i.vertexAttribDivisor(_,M),X[_]=M)}function A(){let _=r.newAttributes,M=r.enabledAttributes;for(let Q=0,B=M.length;Q<B;Q++)M[Q]!==_[Q]&&(i.disableVertexAttribArray(Q),M[Q]=0)}function S(_,M,Q,B,X,at,k){k===!0?i.vertexAttribIPointer(_,M,Q,X,at):i.vertexAttribPointer(_,M,Q,B,X,at)}function w(_,M,Q,B){y();let X=B.attributes,at=Q.getAttributes(),k=M.defaultAttributeValues;for(let ht in at){let Z=at[ht];if(Z.location>=0){let Mt=X[ht];if(Mt===void 0&&(ht==="instanceMatrix"&&_.instanceMatrix&&(Mt=_.instanceMatrix),ht==="instanceColor"&&_.instanceColor&&(Mt=_.instanceColor)),Mt!==void 0){let St=Mt.normalized,xt=Mt.itemSize,Zt=t.get(Mt);if(Zt===void 0)continue;let Qt=Zt.buffer,et=Zt.type,lt=Zt.bytesPerElement,Tt=et===i.INT||et===i.UNSIGNED_INT||Mt.gpuType===Ll;if(Mt.isInterleavedBufferAttribute){let q=Mt.data,zt=q.stride,Bt=Mt.offset;if(q.isInstancedInterleavedBuffer){for(let Yt=0;Yt<Z.locationSize;Yt++)m(Z.location+Yt,q.meshPerAttribute);_.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let Yt=0;Yt<Z.locationSize;Yt++)p(Z.location+Yt);i.bindBuffer(i.ARRAY_BUFFER,Qt);for(let Yt=0;Yt<Z.locationSize;Yt++)S(Z.location+Yt,xt/Z.locationSize,et,St,zt*lt,(Bt+xt/Z.locationSize*Yt)*lt,Tt)}else{if(Mt.isInstancedBufferAttribute){for(let q=0;q<Z.locationSize;q++)m(Z.location+q,Mt.meshPerAttribute);_.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let q=0;q<Z.locationSize;q++)p(Z.location+q);i.bindBuffer(i.ARRAY_BUFFER,Qt);for(let q=0;q<Z.locationSize;q++)S(Z.location+q,xt/Z.locationSize,et,St,xt*lt,xt/Z.locationSize*q*lt,Tt)}}else if(k!==void 0){let St=k[ht];if(St!==void 0)switch(St.length){case 2:i.vertexAttrib2fv(Z.location,St);break;case 3:i.vertexAttrib3fv(Z.location,St);break;case 4:i.vertexAttrib4fv(Z.location,St);break;default:i.vertexAttrib1fv(Z.location,St)}}}}A()}function O(){F();for(let _ in n){let M=n[_];for(let Q in M){let B=M[Q];for(let X in B)h(B[X].object),delete B[X];delete M[Q]}delete n[_]}}function P(_){if(n[_.id]===void 0)return;let M=n[_.id];for(let Q in M){let B=M[Q];for(let X in B)h(B[X].object),delete B[X];delete M[Q]}delete n[_.id]}function R(_){for(let M in n){let Q=n[M];if(Q[_.id]===void 0)continue;let B=Q[_.id];for(let X in B)h(B[X].object),delete B[X];delete Q[_.id]}}function F(){ot(),o=!0,r!==s&&(r=s,c(r.object))}function ot(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:F,resetDefaultState:ot,dispose:O,releaseStatesOfGeometry:P,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:p,disableUnusedAttributes:A}}function bm(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];e.update(f,n,1)}function l(c,h,d,u){if(d===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let g=0;for(let y=0;y<d;y++)g+=h[y];for(let y=0;y<u.length;y++)e.update(g,n,u[y])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Em(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==fn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let F=R===Zs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Fn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Dn&&!F)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(u===!0){let R=t.get("EXT_clip_control");R.clipControlEXT(R.LOWER_LEFT_EXT,R.ZERO_TO_ONE_EXT)}let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),O=g>0,P=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:A,maxVaryings:S,maxFragmentUniforms:w,vertexTextures:O,maxSamples:P}}function wm(i){let t=this,e=null,n=0,s=!1,r=!1,o=new In,a=new ee,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,y=d.clipIntersection,p=d.clipShadows,m=i.get(d);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let A=r?0:n,S=A*4,w=m.clippingState||null;l.value=w,w=h(g,u,S,f);for(let O=0;O!==S;++O)w[O]=e[O];m.clippingState=w,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){let y=d!==null?d.length:0,p=null;if(y!==0){if(p=l.value,g!==!0||p===null){let m=f+y*4,A=u.matrixWorldInverse;a.getNormalMatrix(A),(p===null||p.length<m)&&(p=new Float32Array(m));for(let S=0,w=f;S!==y;++S,w+=4)o.copy(d[S]).applyMatrix4(A,a),o.normal.toArray(p,w),p[w+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,p}}function Tm(i){let t=new WeakMap;function e(o,a){return a===_a?o.mapping=hs:a===va&&(o.mapping=us),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===_a||a===va)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Qa(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}function Am(i){let t=[],e=[],n=[],s=i,r=i-is+1+zc.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-is?l=zc[o-i+is-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,y=3,p=2,m=1,A=new Float32Array(y*g*f),S=new Float32Array(p*g*f),w=new Float32Array(m*g*f);for(let P=0;P<f;P++){let R=P%3*2/3-1,F=P>2?0:-1,ot=[R,F,0,R+2/3,F,0,R+2/3,F+1,0,R,F,0,R+2/3,F+1,0,R,F+1,0];A.set(ot,y*g*P),S.set(u,p*g*P);let _=[P,P,P,P,P,P];w.set(_,m*g*P)}let O=new tn;O.setAttribute("position",new Xe(A,y)),O.setAttribute("uv",new Xe(S,p)),O.setAttribute("faceIndex",new Xe(w,m)),t.push(O),s>is&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Vc(i,t,e){let n=new On(i,t,e);return n.texture.mapping=po,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Tr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Rm(i,t,e){let n=new Float32Array(gi),s=new D(0,1,0);return new Oe({name:"SphericalGaussianBlur",defines:{n:gi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Gc(){return new Oe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Wc(){return new Oe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function kl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Cm(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===_a||l===va,h=l===hs||l===us;if(c||h){let d=t.get(a),u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new no(i)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new no(i)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Pm(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&zr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Im(i,t,e,n){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);for(let g in u.morphAttributes){let y=u.morphAttributes[g];for(let p=0,m=y.length;p<m;p++)t.remove(y[p])}u.removeEventListener("dispose",o),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let g in u)t.update(u[g],i.ARRAY_BUFFER);let f=d.morphAttributes;for(let g in f){let y=f[g];for(let p=0,m=y.length;p<m;p++)t.update(y[p],i.ARRAY_BUFFER)}}function c(d){let u=[],f=d.index,g=d.attributes.position,y=0;if(f!==null){let A=f.array;y=f.version;for(let S=0,w=A.length;S<w;S+=3){let O=A[S+0],P=A[S+1],R=A[S+2];u.push(O,P,P,R,R,O)}}else if(g!==void 0){let A=g.array;y=g.version;for(let S=0,w=A.length/3-1;S<w;S+=3){let O=S+0,P=S+1,R=S+2;u.push(O,P,P,R,R,O)}}else return;let p=new(Ch(u)?Qr:Kr)(u,1);p.version=y;let m=r.get(d);m&&t.remove(m),r.set(d,p)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Lm(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){i.drawElements(n,f,r,u*o),e.update(f,n,1)}function c(u,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,u*o,g),e.update(f,n,g))}function h(u,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];e.update(p,n,1)}function d(u,f,g,y){if(g===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<u.length;m++)c(u[m]/o,f[m],y[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,y,0,g);let m=0;for(let A=0;A<g;A++)m+=f[A];for(let A=0;A<y.length;A++)e.update(m,n,y[A])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Dm(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Um(i,t,e){let n=new WeakMap,s=new Me;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let ot=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",ot)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],A=a.morphAttributes.color||[],S=0;f===!0&&(S=1),g===!0&&(S=2),y===!0&&(S=3);let w=a.attributes.position.count*S,O=1;w>t.maxTextureSize&&(O=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);let P=new Float32Array(w*O*4*d),R=new Yr(P,w,O,d);R.type=Dn,R.needsUpdate=!0;let F=S*4;for(let _=0;_<d;_++){let M=p[_],Q=m[_],B=A[_],X=w*O*4*_;for(let at=0;at<M.count;at++){let k=at*F;f===!0&&(s.fromBufferAttribute(M,at),P[X+k+0]=s.x,P[X+k+1]=s.y,P[X+k+2]=s.z,P[X+k+3]=0),g===!0&&(s.fromBufferAttribute(Q,at),P[X+k+4]=s.x,P[X+k+5]=s.y,P[X+k+6]=s.z,P[X+k+7]=0),y===!0&&(s.fromBufferAttribute(B,at),P[X+k+8]=s.x,P[X+k+9]=s.y,P[X+k+10]=s.z,P[X+k+11]=B.itemSize===4?s.w:1)}}u={count:d,texture:R,size:new Pt(w,O)},n.set(a,u),a.addEventListener("dispose",ot)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Nm(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}function xs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=qc[s];if(r===void 0&&(r=new Float32Array(s),qc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ce(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Pe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function go(i,t){let e=Yc[t];e===void 0&&(e=new Int32Array(t),Yc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Fm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Om(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2fv(this.addr,t),Pe(e,t)}}function Bm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ce(e,t))return;i.uniform3fv(this.addr,t),Pe(e,t)}}function zm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4fv(this.addr,t),Pe(e,t)}}function km(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,n))return;Jc.set(n),i.uniformMatrix2fv(this.addr,!1,Jc),Pe(e,n)}}function Hm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,n))return;$c.set(n),i.uniformMatrix3fv(this.addr,!1,$c),Pe(e,n)}}function Vm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,n))return;Zc.set(n),i.uniformMatrix4fv(this.addr,!1,Zc),Pe(e,n)}}function Gm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Wm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2iv(this.addr,t),Pe(e,t)}}function Xm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;i.uniform3iv(this.addr,t),Pe(e,t)}}function qm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4iv(this.addr,t),Pe(e,t)}}function Ym(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Zm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2uiv(this.addr,t),Pe(e,t)}}function $m(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;i.uniform3uiv(this.addr,t),Pe(e,t)}}function Jm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4uiv(this.addr,t),Pe(e,t)}}function Km(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Xc.compareFunction=Ah,r=Xc):r=Dh,e.setTexture2D(t||r,s)}function Qm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Nh,s)}function jm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Fh,s)}function tg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Uh,s)}function eg(i){switch(i){case 5126:return Fm;case 35664:return Om;case 35665:return Bm;case 35666:return zm;case 35674:return km;case 35675:return Hm;case 35676:return Vm;case 5124:case 35670:return Gm;case 35667:case 35671:return Wm;case 35668:case 35672:return Xm;case 35669:case 35673:return qm;case 5125:return Ym;case 36294:return Zm;case 36295:return $m;case 36296:return Jm;case 35678:case 36198:case 36298:case 36306:case 35682:return Km;case 35679:case 36299:case 36307:return Qm;case 35680:case 36300:case 36308:case 36293:return jm;case 36289:case 36303:case 36311:case 36292:return tg}}function ng(i,t){i.uniform1fv(this.addr,t)}function ig(i,t){let e=xs(t,this.size,2);i.uniform2fv(this.addr,e)}function sg(i,t){let e=xs(t,this.size,3);i.uniform3fv(this.addr,e)}function rg(i,t){let e=xs(t,this.size,4);i.uniform4fv(this.addr,e)}function og(i,t){let e=xs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function ag(i,t){let e=xs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function lg(i,t){let e=xs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function cg(i,t){i.uniform1iv(this.addr,t)}function hg(i,t){i.uniform2iv(this.addr,t)}function ug(i,t){i.uniform3iv(this.addr,t)}function dg(i,t){i.uniform4iv(this.addr,t)}function fg(i,t){i.uniform1uiv(this.addr,t)}function pg(i,t){i.uniform2uiv(this.addr,t)}function mg(i,t){i.uniform3uiv(this.addr,t)}function gg(i,t){i.uniform4uiv(this.addr,t)}function _g(i,t,e){let n=this.cache,s=t.length,r=go(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Dh,r[o])}function vg(i,t,e){let n=this.cache,s=t.length,r=go(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Nh,r[o])}function xg(i,t,e){let n=this.cache,s=t.length,r=go(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Fh,r[o])}function yg(i,t,e){let n=this.cache,s=t.length,r=go(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Uh,r[o])}function Mg(i){switch(i){case 5126:return ng;case 35664:return ig;case 35665:return sg;case 35666:return rg;case 35674:return og;case 35675:return ag;case 35676:return lg;case 5124:case 35670:return cg;case 35667:case 35671:return hg;case 35668:case 35672:return ug;case 35669:case 35673:return dg;case 5125:return fg;case 36294:return pg;case 36295:return mg;case 36296:return gg;case 35678:case 36198:case 36298:case 36306:case 35682:return _g;case 35679:case 36299:case 36307:return vg;case 35680:case 36300:case 36308:case 36293:return xg;case 36289:case 36303:case 36311:case 36292:return yg}}function Kc(i,t){i.seq.push(t),i.map[t.id]=t}function Sg(i,t,e){let n=i.name,s=n.length;for(sa.lastIndex=0;;){let r=sa.exec(n),o=sa.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Kc(e,c===void 0?new tl(a,i,t):new el(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new nl(a),Kc(e,d)),e=d}}}function Qc(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}function wg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Tg(i){let t=de.getPrimaries(de.workingColorSpace),e=de.getPrimaries(i),n;switch(t===e?n="":t===Gr&&e===Vr?n="LinearDisplayP3ToLinearSRGB":t===Vr&&e===Gr&&(n="LinearSRGBToLinearDisplayP3"),i){case ei:case mo:return[n,"LinearTransferOETF"];case _n:case Bl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function jc(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+wg(i.getShaderSource(t),o)}else return s}function Ag(i,t){let e=Tg(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Rg(i,t){let e;switch(t){case Nu:e="Linear";break;case Fu:e="Reinhard";break;case Ou:e="Cineon";break;case Bu:e="ACESFilmic";break;case ku:e="AgX";break;case Hu:e="Neutral";break;case zu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Cg(){de.getLuminanceCoefficients(Ar);let i=Ar.x.toFixed(4),t=Ar.y.toFixed(4),e=Ar.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Pg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ds).join(`
`)}function Ig(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Lg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ds(i){return i!==""}function th(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function eh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function il(i){return i.replace(Dg,Ng)}function Ng(i,t){let e=te[t];if(e===void 0){let n=Ug.get(t);if(n!==void 0)e=te[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return il(e)}function nh(i){return i.replace(Fg,Og)}function Og(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ih(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Bg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ph?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===pu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Pn&&(t="SHADOWMAP_TYPE_VSM"),t}function zg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case hs:case us:t="ENVMAP_TYPE_CUBE";break;case po:t="ENVMAP_TYPE_CUBE_UV";break}return t}function kg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case us:t="ENVMAP_MODE_REFRACTION";break}return t}function Hg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case mh:t="ENVMAP_BLENDING_MULTIPLY";break;case Du:t="ENVMAP_BLENDING_MIX";break;case Uu:t="ENVMAP_BLENDING_ADD";break}return t}function Vg(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Gg(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Bg(e),c=zg(e),h=kg(e),d=Hg(e),u=Vg(e),f=Pg(e),g=Ig(r),y=s.createProgram(),p,m,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ds).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ds).join(`
`),m.length>0&&(m+=`
`)):(p=[ih(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ds).join(`
`),m=[ih(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Qn?"#define TONE_MAPPING":"",e.toneMapping!==Qn?te.tonemapping_pars_fragment:"",e.toneMapping!==Qn?Rg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,Ag("linearToOutputTexel",e.outputColorSpace),Cg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ds).join(`
`)),o=il(o),o=th(o,e),o=eh(o,e),a=il(a),a=th(a,e),a=eh(a,e),o=nh(o),a=nh(a),e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===yc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===yc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let S=A+p+o,w=A+m+a,O=Qc(s,s.VERTEX_SHADER,S),P=Qc(s,s.FRAGMENT_SHADER,w);s.attachShader(y,O),s.attachShader(y,P),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function R(M){if(i.debug.checkShaderErrors){let Q=s.getProgramInfoLog(y).trim(),B=s.getShaderInfoLog(O).trim(),X=s.getShaderInfoLog(P).trim(),at=!0,k=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(at=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,O,P);else{let ht=jc(s,O,"vertex"),Z=jc(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+Q+`
`+ht+`
`+Z)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(B===""||X==="")&&(k=!1);k&&(M.diagnostics={runnable:at,programLog:Q,vertexShader:{log:B,prefix:p},fragmentShader:{log:X,prefix:m}})}s.deleteShader(O),s.deleteShader(P),F=new ls(s,y),ot=Lg(s,y)}let F;this.getUniforms=function(){return F===void 0&&R(this),F};let ot;this.getAttributes=function(){return ot===void 0&&R(this),ot};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(y,bg)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Eg++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=O,this.fragmentShader=P,this}function Xg(i,t,e,n,s,r,o){let a=new $r,l=new sl,c=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.reverseDepthBuffer,f=s.vertexTextures,g=s.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return c.add(_),_===0?"uv":`uv${_}`}function m(_,M,Q,B,X){let at=B.fog,k=X.geometry,ht=_.isMeshStandardMaterial?B.environment:null,Z=(_.isMeshStandardMaterial?e:t).get(_.envMap||ht),Mt=Z&&Z.mapping===po?Z.image.height:null,St=y[_.type];_.precision!==null&&(g=s.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));let xt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Zt=xt!==void 0?xt.length:0,Qt=0;k.morphAttributes.position!==void 0&&(Qt=1),k.morphAttributes.normal!==void 0&&(Qt=2),k.morphAttributes.color!==void 0&&(Qt=3);let et,lt,Tt,q;if(St){let oe=vn[St];et=oe.vertexShader,lt=oe.fragmentShader}else et=_.vertexShader,lt=_.fragmentShader,l.update(_),Tt=l.getVertexShaderID(_),q=l.getFragmentShaderID(_);let zt=i.getRenderTarget(),Bt=X.isInstancedMesh===!0,Yt=X.isBatchedMesh===!0,Gt=!!_.map,nt=!!_.matcap,E=!!Z,gt=!!_.aoMap,ut=!!_.lightMap,$=!!_.bumpMap,yt=!!_.normalMap,Nt=!!_.displacementMap,Rt=!!_.emissiveMap,b=!!_.metalnessMap,v=!!_.roughnessMap,U=_.anisotropy>0,J=_.clearcoat>0,it=_.dispersion>0,tt=_.iridescence>0,Lt=_.sheen>0,_t=_.transmission>0,bt=U&&!!_.anisotropyMap,$t=J&&!!_.clearcoatMap,T=J&&!!_.clearcoatNormalMap,Y=J&&!!_.clearcoatRoughnessMap,j=tt&&!!_.iridescenceMap,st=tt&&!!_.iridescenceThicknessMap,K=Lt&&!!_.sheenColorMap,Et=Lt&&!!_.sheenRoughnessMap,vt=!!_.specularMap,Xt=!!_.specularColorMap,C=!!_.specularIntensityMap,ft=_t&&!!_.transmissionMap,z=_t&&!!_.thicknessMap,G=!!_.gradientMap,ct=!!_.alphaMap,pt=_.alphaTest>0,kt=!!_.alphaHash,ne=!!_.extensions,fe=Qn;_.toneMapped&&(zt===null||zt.isXRRenderTarget===!0)&&(fe=i.toneMapping);let Jt={shaderID:St,shaderType:_.type,shaderName:_.name,vertexShader:et,fragmentShader:lt,defines:_.defines,customVertexShaderID:Tt,customFragmentShaderID:q,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:Yt,batchingColor:Yt&&X._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&X.instanceColor!==null,instancingMorph:Bt&&X.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:zt===null?i.outputColorSpace:zt.isXRRenderTarget===!0?zt.texture.colorSpace:ei,alphaToCoverage:!!_.alphaToCoverage,map:Gt,matcap:nt,envMap:E,envMapMode:E&&Z.mapping,envMapCubeUVHeight:Mt,aoMap:gt,lightMap:ut,bumpMap:$,normalMap:yt,displacementMap:f&&Nt,emissiveMap:Rt,normalMapObjectSpace:yt&&_.normalMapType===qu,normalMapTangentSpace:yt&&_.normalMapType===Xu,metalnessMap:b,roughnessMap:v,anisotropy:U,anisotropyMap:bt,clearcoat:J,clearcoatMap:$t,clearcoatNormalMap:T,clearcoatRoughnessMap:Y,dispersion:it,iridescence:tt,iridescenceMap:j,iridescenceThicknessMap:st,sheen:Lt,sheenColorMap:K,sheenRoughnessMap:Et,specularMap:vt,specularColorMap:Xt,specularIntensityMap:C,transmission:_t,transmissionMap:ft,thicknessMap:z,gradientMap:G,opaque:_.transparent===!1&&_.blending===Nn&&_.alphaToCoverage===!1,alphaMap:ct,alphaTest:pt,alphaHash:kt,combine:_.combine,mapUv:Gt&&p(_.map.channel),aoMapUv:gt&&p(_.aoMap.channel),lightMapUv:ut&&p(_.lightMap.channel),bumpMapUv:$&&p(_.bumpMap.channel),normalMapUv:yt&&p(_.normalMap.channel),displacementMapUv:Nt&&p(_.displacementMap.channel),emissiveMapUv:Rt&&p(_.emissiveMap.channel),metalnessMapUv:b&&p(_.metalnessMap.channel),roughnessMapUv:v&&p(_.roughnessMap.channel),anisotropyMapUv:bt&&p(_.anisotropyMap.channel),clearcoatMapUv:$t&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:T&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:st&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:K&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:Et&&p(_.sheenRoughnessMap.channel),specularMapUv:vt&&p(_.specularMap.channel),specularColorMapUv:Xt&&p(_.specularColorMap.channel),specularIntensityMapUv:C&&p(_.specularIntensityMap.channel),transmissionMapUv:ft&&p(_.transmissionMap.channel),thicknessMapUv:z&&p(_.thicknessMap.channel),alphaMapUv:ct&&p(_.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(yt||U),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!k.attributes.uv&&(Gt||ct),fog:!!at,useFog:_.fog===!0,fogExp2:!!at&&at.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:u,skinning:X.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Zt,morphTextureStride:Qt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&Q.length>0,shadowMapType:i.shadowMap.type,toneMapping:fe,decodeVideoTexture:Gt&&_.map.isVideoTexture===!0&&de.getTransfer(_.map.colorSpace)===ye,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ln,flipSided:_.side===Je,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ne&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&_.extensions.multiDraw===!0||Yt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Jt.vertexUv1s=c.has(1),Jt.vertexUv2s=c.has(2),Jt.vertexUv3s=c.has(3),c.clear(),Jt}function A(_){let M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(let Q in _.defines)M.push(Q),M.push(_.defines[Q]);return _.isRawShaderMaterial===!1&&(S(M,_),w(M,_),M.push(i.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function S(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapCubeUVHeight),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.morphAttributeCount),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function w(_,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.alphaToCoverage&&a.enable(20),_.push(a.mask)}function O(_){let M=y[_.type],Q;if(M){let B=vn[M];Q=Ud.clone(B.uniforms)}else Q=_.uniforms;return Q}function P(_,M){let Q;for(let B=0,X=h.length;B<X;B++){let at=h[B];if(at.cacheKey===M){Q=at,++Q.usedTimes;break}}return Q===void 0&&(Q=new Gg(i,M,_,r),h.push(Q)),Q}function R(_){if(--_.usedTimes===0){let M=h.indexOf(_);h[M]=h[h.length-1],h.pop(),_.destroy()}}function F(_){l.remove(_)}function ot(){l.dispose()}return{getParameters:m,getProgramCacheKey:A,getUniforms:O,acquireProgram:P,releaseProgram:R,releaseShaderCache:F,programs:h,dispose:ot}}function qg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Yg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function sh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function rh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,u,f,g,y,p){let m=i[t];return m===void 0?(m={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:y,group:p},i[t]=m):(m.id=d.id,m.object=d,m.geometry=u,m.material=f,m.groupOrder=g,m.renderOrder=d.renderOrder,m.z=y,m.group=p),t++,m}function a(d,u,f,g,y,p){let m=o(d,u,f,g,y,p);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):e.push(m)}function l(d,u,f,g,y,p){let m=o(d,u,f,g,y,p);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):e.unshift(m)}function c(d,u){e.length>1&&e.sort(d||Yg),n.length>1&&n.sort(u||sh),s.length>1&&s.sort(u||sh)}function h(){for(let d=t,u=i.length;d<u;d++){let f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Zg(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new rh,i.set(n,[o])):s>=r.length?(o=new rh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function $g(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new he};break;case"SpotLight":e={position:new D,direction:new D,color:new he,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new he,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new he,groundColor:new he};break;case"RectAreaLight":e={color:new he,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function Jg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}function Qg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function jg(i){let t=new $g,e=Jg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);let s=new D,r=new ge,o=new ge;function a(c){let h=0,d=0,u=0;for(let ot=0;ot<9;ot++)n.probe[ot].set(0,0,0);let f=0,g=0,y=0,p=0,m=0,A=0,S=0,w=0,O=0,P=0,R=0;c.sort(Qg);for(let ot=0,_=c.length;ot<_;ot++){let M=c[ot],Q=M.color,B=M.intensity,X=M.distance,at=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)h+=Q.r*B,d+=Q.g*B,u+=Q.b*B;else if(M.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(M.sh.coefficients[k],B);R++}else if(M.isDirectionalLight){let k=t.get(M);if(k.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){let ht=M.shadow,Z=e.get(M);Z.shadowIntensity=ht.intensity,Z.shadowBias=ht.bias,Z.shadowNormalBias=ht.normalBias,Z.shadowRadius=ht.radius,Z.shadowMapSize=ht.mapSize,n.directionalShadow[f]=Z,n.directionalShadowMap[f]=at,n.directionalShadowMatrix[f]=M.shadow.matrix,A++}n.directional[f]=k,f++}else if(M.isSpotLight){let k=t.get(M);k.position.setFromMatrixPosition(M.matrixWorld),k.color.copy(Q).multiplyScalar(B),k.distance=X,k.coneCos=Math.cos(M.angle),k.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),k.decay=M.decay,n.spot[y]=k;let ht=M.shadow;if(M.map&&(n.spotLightMap[O]=M.map,O++,ht.updateMatrices(M),M.castShadow&&P++),n.spotLightMatrix[y]=ht.matrix,M.castShadow){let Z=e.get(M);Z.shadowIntensity=ht.intensity,Z.shadowBias=ht.bias,Z.shadowNormalBias=ht.normalBias,Z.shadowRadius=ht.radius,Z.shadowMapSize=ht.mapSize,n.spotShadow[y]=Z,n.spotShadowMap[y]=at,w++}y++}else if(M.isRectAreaLight){let k=t.get(M);k.color.copy(Q).multiplyScalar(B),k.halfWidth.set(M.width*.5,0,0),k.halfHeight.set(0,M.height*.5,0),n.rectArea[p]=k,p++}else if(M.isPointLight){let k=t.get(M);if(k.color.copy(M.color).multiplyScalar(M.intensity),k.distance=M.distance,k.decay=M.decay,M.castShadow){let ht=M.shadow,Z=e.get(M);Z.shadowIntensity=ht.intensity,Z.shadowBias=ht.bias,Z.shadowNormalBias=ht.normalBias,Z.shadowRadius=ht.radius,Z.shadowMapSize=ht.mapSize,Z.shadowCameraNear=ht.camera.near,Z.shadowCameraFar=ht.camera.far,n.pointShadow[g]=Z,n.pointShadowMap[g]=at,n.pointShadowMatrix[g]=M.shadow.matrix,S++}n.point[g]=k,g++}else if(M.isHemisphereLight){let k=t.get(M);k.skyColor.copy(M.color).multiplyScalar(B),k.groundColor.copy(M.groundColor).multiplyScalar(B),n.hemi[m]=k,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=wt.LTC_FLOAT_1,n.rectAreaLTC2=wt.LTC_FLOAT_2):(n.rectAreaLTC1=wt.LTC_HALF_1,n.rectAreaLTC2=wt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let F=n.hash;(F.directionalLength!==f||F.pointLength!==g||F.spotLength!==y||F.rectAreaLength!==p||F.hemiLength!==m||F.numDirectionalShadows!==A||F.numPointShadows!==S||F.numSpotShadows!==w||F.numSpotMaps!==O||F.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=y,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=w+O-P,n.spotLightMap.length=O,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=R,F.directionalLength=f,F.pointLength=g,F.spotLength=y,F.rectAreaLength=p,F.hemiLength=m,F.numDirectionalShadows=A,F.numPointShadows=S,F.numSpotShadows=w,F.numSpotMaps=O,F.numLightProbes=R,n.version=Kg++)}function l(c,h){let d=0,u=0,f=0,g=0,y=0,p=h.matrixWorldInverse;for(let m=0,A=c.length;m<A;m++){let S=c[m];if(S.isDirectionalLight){let w=n.directional[d];w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),d++}else if(S.isSpotLight){let w=n.spot[f];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),f++}else if(S.isRectAreaLight){let w=n.rectArea[g];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(p),o.identity(),r.copy(S.matrixWorld),r.premultiply(p),o.extractRotation(r),w.halfWidth.set(S.width*.5,0,0),w.halfHeight.set(0,S.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){let w=n.point[u];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(p),u++}else if(S.isHemisphereLight){let w=n.hemi[y];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(p),y++}}}return{setup:a,setupView:l,state:n}}function oh(i){let t=new jg(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function t0(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new oh(i),t.set(s,[a])):r>=o.length?(a=new oh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function i0(i,t,e){let n=new eo,s=new Pt,r=new Pt,o=new Me,a=new ol({depthPacking:Wu}),l=new al,c={},h=e.maxTextureSize,d={[jn]:Je,[Je]:jn,[Ln]:Ln},u=new Oe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:e0,fragmentShader:n0}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new tn;g.setAttribute("position",new Xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Fe(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ph;let m=this.type;this.render=function(P,R,F){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||P.length===0)return;let ot=i.getRenderTarget(),_=i.getActiveCubeFace(),M=i.getActiveMipmapLevel(),Q=i.state;Q.setBlending(Kn),Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);let B=m!==Pn&&this.type===Pn,X=m===Pn&&this.type!==Pn;for(let at=0,k=P.length;at<k;at++){let ht=P[at],Z=ht.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",ht,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let Mt=Z.getFrameExtents();if(s.multiply(Mt),r.copy(Z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Mt.x),s.x=r.x*Mt.x,Z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Mt.y),s.y=r.y*Mt.y,Z.mapSize.y=r.y)),Z.map===null||B===!0||X===!0){let xt=this.type!==Pn?{minFilter:rn,magFilter:rn}:{};Z.map!==null&&Z.map.dispose(),Z.map=new On(s.x,s.y,xt),Z.map.texture.name=ht.name+".shadowMap",Z.camera.updateProjectionMatrix()}i.setRenderTarget(Z.map),i.clear();let St=Z.getViewportCount();for(let xt=0;xt<St;xt++){let Zt=Z.getViewport(xt);o.set(r.x*Zt.x,r.y*Zt.y,r.x*Zt.z,r.y*Zt.w),Q.viewport(o),Z.updateMatrices(ht,xt),n=Z.getFrustum(),w(R,F,Z.camera,ht,this.type)}Z.isPointLightShadow!==!0&&this.type===Pn&&A(Z,F),Z.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(ot,_,M)};function A(P,R){let F=t.update(y);u.defines.VSM_SAMPLES!==P.blurSamples&&(u.defines.VSM_SAMPLES=P.blurSamples,f.defines.VSM_SAMPLES=P.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new On(s.x,s.y)),u.uniforms.shadow_pass.value=P.map.texture,u.uniforms.resolution.value=P.mapSize,u.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(R,null,F,u,y,null),f.uniforms.shadow_pass.value=P.mapPass.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(R,null,F,f,y,null)}function S(P,R,F,ot){let _=null,M=F.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(M!==void 0)_=M;else if(_=F.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let Q=_.uuid,B=R.uuid,X=c[Q];X===void 0&&(X={},c[Q]=X);let at=X[B];at===void 0&&(at=_.clone(),X[B]=at,R.addEventListener("dispose",O)),_=at}if(_.visible=R.visible,_.wireframe=R.wireframe,ot===Pn?_.side=R.shadowSide!==null?R.shadowSide:R.side:_.side=R.shadowSide!==null?R.shadowSide:d[R.side],_.alphaMap=R.alphaMap,_.alphaTest=R.alphaTest,_.map=R.map,_.clipShadows=R.clipShadows,_.clippingPlanes=R.clippingPlanes,_.clipIntersection=R.clipIntersection,_.displacementMap=R.displacementMap,_.displacementScale=R.displacementScale,_.displacementBias=R.displacementBias,_.wireframeLinewidth=R.wireframeLinewidth,_.linewidth=R.linewidth,F.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let Q=i.properties.get(_);Q.light=F}return _}function w(P,R,F,ot,_){if(P.visible===!1)return;if(P.layers.test(R.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&_===Pn)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,P.matrixWorld);let B=t.update(P),X=P.material;if(Array.isArray(X)){let at=B.groups;for(let k=0,ht=at.length;k<ht;k++){let Z=at[k],Mt=X[Z.materialIndex];if(Mt&&Mt.visible){let St=S(P,Mt,ot,_);P.onBeforeShadow(i,P,R,F,B,St,Z),i.renderBufferDirect(F,null,B,St,P,Z),P.onAfterShadow(i,P,R,F,B,St,Z)}}}else if(X.visible){let at=S(P,X,ot,_);P.onBeforeShadow(i,P,R,F,B,at,null),i.renderBufferDirect(F,null,B,at,P,null),P.onAfterShadow(i,P,R,F,B,at,null)}}let Q=P.children;for(let B=0,X=Q.length;B<X;B++)w(Q[B],R,F,ot,_)}function O(P){P.target.removeEventListener("dispose",O);for(let F in c){let ot=c[F],_=P.target.uuid;_ in ot&&(ot[_].dispose(),delete ot[_])}}}function r0(i){function t(){let C=!1,ft=new Me,z=null,G=new Me(0,0,0,0);return{setMask:function(ct){z!==ct&&!C&&(i.colorMask(ct,ct,ct,ct),z=ct)},setLocked:function(ct){C=ct},setClear:function(ct,pt,kt,ne,fe){fe===!0&&(ct*=ne,pt*=ne,kt*=ne),ft.set(ct,pt,kt,ne),G.equals(ft)===!1&&(i.clearColor(ct,pt,kt,ne),G.copy(ft))},reset:function(){C=!1,z=null,G.set(-1,0,0,0)}}}function e(){let C=!1,ft=!1,z=null,G=null,ct=null;return{setReversed:function(pt){ft=pt},setTest:function(pt){pt?Tt(i.DEPTH_TEST):q(i.DEPTH_TEST)},setMask:function(pt){z!==pt&&!C&&(i.depthMask(pt),z=pt)},setFunc:function(pt){if(ft&&(pt=s0[pt]),G!==pt){switch(pt){case ha:i.depthFunc(i.NEVER);break;case ua:i.depthFunc(i.ALWAYS);break;case da:i.depthFunc(i.LESS);break;case cs:i.depthFunc(i.LEQUAL);break;case fa:i.depthFunc(i.EQUAL);break;case pa:i.depthFunc(i.GEQUAL);break;case ma:i.depthFunc(i.GREATER);break;case ga:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}G=pt}},setLocked:function(pt){C=pt},setClear:function(pt){ct!==pt&&(i.clearDepth(pt),ct=pt)},reset:function(){C=!1,z=null,G=null,ct=null}}}function n(){let C=!1,ft=null,z=null,G=null,ct=null,pt=null,kt=null,ne=null,fe=null;return{setTest:function(Jt){C||(Jt?Tt(i.STENCIL_TEST):q(i.STENCIL_TEST))},setMask:function(Jt){ft!==Jt&&!C&&(i.stencilMask(Jt),ft=Jt)},setFunc:function(Jt,oe,pe){(z!==Jt||G!==oe||ct!==pe)&&(i.stencilFunc(Jt,oe,pe),z=Jt,G=oe,ct=pe)},setOp:function(Jt,oe,pe){(pt!==Jt||kt!==oe||ne!==pe)&&(i.stencilOp(Jt,oe,pe),pt=Jt,kt=oe,ne=pe)},setLocked:function(Jt){C=Jt},setClear:function(Jt){fe!==Jt&&(i.clearStencil(Jt),fe=Jt)},reset:function(){C=!1,ft=null,z=null,G=null,ct=null,pt=null,kt=null,ne=null,fe=null}}}let s=new t,r=new e,o=new n,a=new WeakMap,l=new WeakMap,c={},h={},d=new WeakMap,u=[],f=null,g=!1,y=null,p=null,m=null,A=null,S=null,w=null,O=null,P=new he(0,0,0),R=0,F=!1,ot=null,_=null,M=null,Q=null,B=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),at=!1,k=0,ht=i.getParameter(i.VERSION);ht.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(ht)[1]),at=k>=1):ht.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(ht)[1]),at=k>=2);let Z=null,Mt={},St=i.getParameter(i.SCISSOR_BOX),xt=i.getParameter(i.VIEWPORT),Zt=new Me().fromArray(St),Qt=new Me().fromArray(xt);function et(C,ft,z,G){let ct=new Uint8Array(4),pt=i.createTexture();i.bindTexture(C,pt),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let kt=0;kt<z;kt++)C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY?i.texImage3D(ft,0,i.RGBA,1,1,G,0,i.RGBA,i.UNSIGNED_BYTE,ct):i.texImage2D(ft+kt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ct);return pt}let lt={};lt[i.TEXTURE_2D]=et(i.TEXTURE_2D,i.TEXTURE_2D,1),lt[i.TEXTURE_CUBE_MAP]=et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),lt[i.TEXTURE_2D_ARRAY]=et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),lt[i.TEXTURE_3D]=et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Tt(i.DEPTH_TEST),r.setFunc(cs),ut(!1),$(uc),Tt(i.CULL_FACE),E(Kn);function Tt(C){c[C]!==!0&&(i.enable(C),c[C]=!0)}function q(C){c[C]!==!1&&(i.disable(C),c[C]=!1)}function zt(C,ft){return h[C]!==ft?(i.bindFramebuffer(C,ft),h[C]=ft,C===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ft),C===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ft),!0):!1}function Bt(C,ft){let z=u,G=!1;if(C){z=d.get(ft),z===void 0&&(z=[],d.set(ft,z));let ct=C.textures;if(z.length!==ct.length||z[0]!==i.COLOR_ATTACHMENT0){for(let pt=0,kt=ct.length;pt<kt;pt++)z[pt]=i.COLOR_ATTACHMENT0+pt;z.length=ct.length,G=!0}}else z[0]!==i.BACK&&(z[0]=i.BACK,G=!0);G&&i.drawBuffers(z)}function Yt(C){return f!==C?(i.useProgram(C),f=C,!0):!1}let Gt={[pi]:i.FUNC_ADD,[gu]:i.FUNC_SUBTRACT,[_u]:i.FUNC_REVERSE_SUBTRACT};Gt[vu]=i.MIN,Gt[xu]=i.MAX;let nt={[yu]:i.ZERO,[Mu]:i.ONE,[Su]:i.SRC_COLOR,[la]:i.SRC_ALPHA,[Ru]:i.SRC_ALPHA_SATURATE,[Tu]:i.DST_COLOR,[Eu]:i.DST_ALPHA,[bu]:i.ONE_MINUS_SRC_COLOR,[ca]:i.ONE_MINUS_SRC_ALPHA,[Au]:i.ONE_MINUS_DST_COLOR,[wu]:i.ONE_MINUS_DST_ALPHA,[Cu]:i.CONSTANT_COLOR,[Pu]:i.ONE_MINUS_CONSTANT_COLOR,[Iu]:i.CONSTANT_ALPHA,[Lu]:i.ONE_MINUS_CONSTANT_ALPHA};function E(C,ft,z,G,ct,pt,kt,ne,fe,Jt){if(C===Kn){g===!0&&(q(i.BLEND),g=!1);return}if(g===!1&&(Tt(i.BLEND),g=!0),C!==mu){if(C!==y||Jt!==F){if((p!==pi||S!==pi)&&(i.blendEquation(i.FUNC_ADD),p=pi,S=pi),Jt)switch(C){case Nn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dc:i.blendFunc(i.ONE,i.ONE);break;case fc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case pc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Nn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case fc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case pc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}m=null,A=null,w=null,O=null,P.set(0,0,0),R=0,y=C,F=Jt}return}ct=ct||ft,pt=pt||z,kt=kt||G,(ft!==p||ct!==S)&&(i.blendEquationSeparate(Gt[ft],Gt[ct]),p=ft,S=ct),(z!==m||G!==A||pt!==w||kt!==O)&&(i.blendFuncSeparate(nt[z],nt[G],nt[pt],nt[kt]),m=z,A=G,w=pt,O=kt),(ne.equals(P)===!1||fe!==R)&&(i.blendColor(ne.r,ne.g,ne.b,fe),P.copy(ne),R=fe),y=C,F=!1}function gt(C,ft){C.side===Ln?q(i.CULL_FACE):Tt(i.CULL_FACE);let z=C.side===Je;ft&&(z=!z),ut(z),C.blending===Nn&&C.transparent===!1?E(Kn):E(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),r.setFunc(C.depthFunc),r.setTest(C.depthTest),r.setMask(C.depthWrite),s.setMask(C.colorWrite);let G=C.stencilWrite;o.setTest(G),G&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Nt(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Tt(i.SAMPLE_ALPHA_TO_COVERAGE):q(i.SAMPLE_ALPHA_TO_COVERAGE)}function ut(C){ot!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),ot=C)}function $(C){C!==du?(Tt(i.CULL_FACE),C!==_&&(C===uc?i.cullFace(i.BACK):C===fu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):q(i.CULL_FACE),_=C}function yt(C){C!==M&&(at&&i.lineWidth(C),M=C)}function Nt(C,ft,z){C?(Tt(i.POLYGON_OFFSET_FILL),(Q!==ft||B!==z)&&(i.polygonOffset(ft,z),Q=ft,B=z)):q(i.POLYGON_OFFSET_FILL)}function Rt(C){C?Tt(i.SCISSOR_TEST):q(i.SCISSOR_TEST)}function b(C){C===void 0&&(C=i.TEXTURE0+X-1),Z!==C&&(i.activeTexture(C),Z=C)}function v(C,ft,z){z===void 0&&(Z===null?z=i.TEXTURE0+X-1:z=Z);let G=Mt[z];G===void 0&&(G={type:void 0,texture:void 0},Mt[z]=G),(G.type!==C||G.texture!==ft)&&(Z!==z&&(i.activeTexture(z),Z=z),i.bindTexture(C,ft||lt[C]),G.type=C,G.texture=ft)}function U(){let C=Mt[Z];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function J(){try{i.compressedTexImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function it(){try{i.compressedTexImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function tt(){try{i.texSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Lt(){try{i.texSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function _t(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function bt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function $t(){try{i.texStorage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function T(){try{i.texStorage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Y(){try{i.texImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function j(){try{i.texImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function st(C){Zt.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),Zt.copy(C))}function K(C){Qt.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),Qt.copy(C))}function Et(C,ft){let z=l.get(ft);z===void 0&&(z=new WeakMap,l.set(ft,z));let G=z.get(C);G===void 0&&(G=i.getUniformBlockIndex(ft,C.name),z.set(C,G))}function vt(C,ft){let G=l.get(ft).get(C);a.get(ft)!==G&&(i.uniformBlockBinding(ft,G,C.__bindingPointIndex),a.set(ft,G))}function Xt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},Z=null,Mt={},h={},d=new WeakMap,u=[],f=null,g=!1,y=null,p=null,m=null,A=null,S=null,w=null,O=null,P=new he(0,0,0),R=0,F=!1,ot=null,_=null,M=null,Q=null,B=null,Zt.set(0,0,i.canvas.width,i.canvas.height),Qt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:Tt,disable:q,bindFramebuffer:zt,drawBuffers:Bt,useProgram:Yt,setBlending:E,setMaterial:gt,setFlipSided:ut,setCullFace:$,setLineWidth:yt,setPolygonOffset:Nt,setScissorTest:Rt,activeTexture:b,bindTexture:v,unbindTexture:U,compressedTexImage2D:J,compressedTexImage3D:it,texImage2D:Y,texImage3D:j,updateUBOMapping:Et,uniformBlockBinding:vt,texStorage2D:$t,texStorage3D:T,texSubImage2D:tt,texSubImage3D:Lt,compressedTexSubImage2D:_t,compressedTexSubImage3D:bt,scissor:st,viewport:K,reset:Xt}}function ah(i,t,e,n){let s=o0(n);switch(e){case yh:return i*t;case Sh:return i*t;case bh:return i*t*2;case Eh:return i*t/s.components*s.byteLength;case Nl:return i*t/s.components*s.byteLength;case wh:return i*t*2/s.components*s.byteLength;case Fl:return i*t*2/s.components*s.byteLength;case Mh:return i*t*3/s.components*s.byteLength;case fn:return i*t*4/s.components*s.byteLength;case Ol:return i*t*4/s.components*s.byteLength;case Ur:case Nr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Fr:case Or:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Sa:case Ea:return Math.max(i,16)*Math.max(t,8)/4;case Ma:case ba:return Math.max(i,8)*Math.max(t,8)/2;case wa:case Ta:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Aa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ra:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ca:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Pa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ia:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case La:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Da:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ua:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Na:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Fa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Oa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ba:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case za:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ka:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ha:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Br:case Va:case Ga:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Th:case Wa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Xa:case qa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function o0(i){switch(i){case Fn:case _h:return{byteLength:1,components:1};case ks:case vh:case Zs:return{byteLength:2,components:1};case Dl:case Ul:return{byteLength:2,components:4};case xi:case Ll:case Dn:return{byteLength:4,components:1};case xh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function a0(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Pt,h=new WeakMap,d,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,v){return f?new OffscreenCanvas(b,v):Xr("canvas")}function y(b,v,U){let J=1,it=Rt(b);if((it.width>U||it.height>U)&&(J=U/Math.max(it.width,it.height)),J<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){let tt=Math.floor(J*it.width),Lt=Math.floor(J*it.height);d===void 0&&(d=g(tt,Lt));let _t=v?g(tt,Lt):d;return _t.width=tt,_t.height=Lt,_t.getContext("2d").drawImage(b,0,0,tt,Lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+tt+"x"+Lt+")."),_t}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),b;return b}function p(b){return b.generateMipmaps&&b.minFilter!==rn&&b.minFilter!==dn}function m(b){i.generateMipmap(b)}function A(b,v,U,J,it=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let tt=v;if(v===i.RED&&(U===i.FLOAT&&(tt=i.R32F),U===i.HALF_FLOAT&&(tt=i.R16F),U===i.UNSIGNED_BYTE&&(tt=i.R8)),v===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(tt=i.R8UI),U===i.UNSIGNED_SHORT&&(tt=i.R16UI),U===i.UNSIGNED_INT&&(tt=i.R32UI),U===i.BYTE&&(tt=i.R8I),U===i.SHORT&&(tt=i.R16I),U===i.INT&&(tt=i.R32I)),v===i.RG&&(U===i.FLOAT&&(tt=i.RG32F),U===i.HALF_FLOAT&&(tt=i.RG16F),U===i.UNSIGNED_BYTE&&(tt=i.RG8)),v===i.RG_INTEGER&&(U===i.UNSIGNED_BYTE&&(tt=i.RG8UI),U===i.UNSIGNED_SHORT&&(tt=i.RG16UI),U===i.UNSIGNED_INT&&(tt=i.RG32UI),U===i.BYTE&&(tt=i.RG8I),U===i.SHORT&&(tt=i.RG16I),U===i.INT&&(tt=i.RG32I)),v===i.RGB_INTEGER&&(U===i.UNSIGNED_BYTE&&(tt=i.RGB8UI),U===i.UNSIGNED_SHORT&&(tt=i.RGB16UI),U===i.UNSIGNED_INT&&(tt=i.RGB32UI),U===i.BYTE&&(tt=i.RGB8I),U===i.SHORT&&(tt=i.RGB16I),U===i.INT&&(tt=i.RGB32I)),v===i.RGBA_INTEGER&&(U===i.UNSIGNED_BYTE&&(tt=i.RGBA8UI),U===i.UNSIGNED_SHORT&&(tt=i.RGBA16UI),U===i.UNSIGNED_INT&&(tt=i.RGBA32UI),U===i.BYTE&&(tt=i.RGBA8I),U===i.SHORT&&(tt=i.RGBA16I),U===i.INT&&(tt=i.RGBA32I)),v===i.RGB&&U===i.UNSIGNED_INT_5_9_9_9_REV&&(tt=i.RGB9_E5),v===i.RGBA){let Lt=it?Hr:de.getTransfer(J);U===i.FLOAT&&(tt=i.RGBA32F),U===i.HALF_FLOAT&&(tt=i.RGBA16F),U===i.UNSIGNED_BYTE&&(tt=Lt===ye?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT_4_4_4_4&&(tt=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(tt=i.RGB5_A1)}return(tt===i.R16F||tt===i.R32F||tt===i.RG16F||tt===i.RG32F||tt===i.RGBA16F||tt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function S(b,v){let U;return b?v===null||v===xi||v===ds?U=i.DEPTH24_STENCIL8:v===Dn?U=i.DEPTH32F_STENCIL8:v===ks&&(U=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===xi||v===ds?U=i.DEPTH_COMPONENT24:v===Dn?U=i.DEPTH_COMPONENT32F:v===ks&&(U=i.DEPTH_COMPONENT16),U}function w(b,v){return p(b)===!0||b.isFramebufferTexture&&b.minFilter!==rn&&b.minFilter!==dn?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function O(b){let v=b.target;v.removeEventListener("dispose",O),R(v),v.isVideoTexture&&h.delete(v)}function P(b){let v=b.target;v.removeEventListener("dispose",P),ot(v)}function R(b){let v=n.get(b);if(v.__webglInit===void 0)return;let U=b.source,J=u.get(U);if(J){let it=J[v.__cacheKey];it.usedTimes--,it.usedTimes===0&&F(b),Object.keys(J).length===0&&u.delete(U)}n.remove(b)}function F(b){let v=n.get(b);i.deleteTexture(v.__webglTexture);let U=b.source,J=u.get(U);delete J[v.__cacheKey],o.memory.textures--}function ot(b){let v=n.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(v.__webglFramebuffer[J]))for(let it=0;it<v.__webglFramebuffer[J].length;it++)i.deleteFramebuffer(v.__webglFramebuffer[J][it]);else i.deleteFramebuffer(v.__webglFramebuffer[J]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[J])}else{if(Array.isArray(v.__webglFramebuffer))for(let J=0;J<v.__webglFramebuffer.length;J++)i.deleteFramebuffer(v.__webglFramebuffer[J]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let J=0;J<v.__webglColorRenderbuffer.length;J++)v.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[J]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let U=b.textures;for(let J=0,it=U.length;J<it;J++){let tt=n.get(U[J]);tt.__webglTexture&&(i.deleteTexture(tt.__webglTexture),o.memory.textures--),n.remove(U[J])}n.remove(b)}let _=0;function M(){_=0}function Q(){let b=_;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),_+=1,b}function B(b){let v=[];return v.push(b.wrapS),v.push(b.wrapT),v.push(b.wrapR||0),v.push(b.magFilter),v.push(b.minFilter),v.push(b.anisotropy),v.push(b.internalFormat),v.push(b.format),v.push(b.type),v.push(b.generateMipmaps),v.push(b.premultiplyAlpha),v.push(b.flipY),v.push(b.unpackAlignment),v.push(b.colorSpace),v.join()}function X(b,v){let U=n.get(b);if(b.isVideoTexture&&yt(b),b.isRenderTargetTexture===!1&&b.version>0&&U.__version!==b.version){let J=b.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Qt(U,b,v);return}}e.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+v)}function at(b,v){let U=n.get(b);if(b.version>0&&U.__version!==b.version){Qt(U,b,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+v)}function k(b,v){let U=n.get(b);if(b.version>0&&U.__version!==b.version){Qt(U,b,v);return}e.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+v)}function ht(b,v){let U=n.get(b);if(b.version>0&&U.__version!==b.version){et(U,b,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+v)}let Z={[xa]:i.REPEAT,[_i]:i.CLAMP_TO_EDGE,[ya]:i.MIRRORED_REPEAT},Mt={[rn]:i.NEAREST,[Vu]:i.NEAREST_MIPMAP_NEAREST,[ar]:i.NEAREST_MIPMAP_LINEAR,[dn]:i.LINEAR,[Po]:i.LINEAR_MIPMAP_NEAREST,[vi]:i.LINEAR_MIPMAP_LINEAR},St={[Yu]:i.NEVER,[ju]:i.ALWAYS,[Zu]:i.LESS,[Ah]:i.LEQUAL,[$u]:i.EQUAL,[Qu]:i.GEQUAL,[Ju]:i.GREATER,[Ku]:i.NOTEQUAL};function xt(b,v){if(v.type===Dn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===dn||v.magFilter===Po||v.magFilter===ar||v.magFilter===vi||v.minFilter===dn||v.minFilter===Po||v.minFilter===ar||v.minFilter===vi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,Z[v.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,Z[v.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,Z[v.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,Mt[v.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,Mt[v.minFilter]),v.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,St[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===rn||v.minFilter!==ar&&v.minFilter!==vi||v.type===Dn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let U=t.get("EXT_texture_filter_anisotropic");i.texParameterf(b,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Zt(b,v){let U=!1;b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",O));let J=v.source,it=u.get(J);it===void 0&&(it={},u.set(J,it));let tt=B(v);if(tt!==b.__cacheKey){it[tt]===void 0&&(it[tt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,U=!0),it[tt].usedTimes++;let Lt=it[b.__cacheKey];Lt!==void 0&&(it[b.__cacheKey].usedTimes--,Lt.usedTimes===0&&F(v)),b.__cacheKey=tt,b.__webglTexture=it[tt].texture}return U}function Qt(b,v,U){let J=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(J=i.TEXTURE_3D);let it=Zt(b,v),tt=v.source;e.bindTexture(J,b.__webglTexture,i.TEXTURE0+U);let Lt=n.get(tt);if(tt.version!==Lt.__version||it===!0){e.activeTexture(i.TEXTURE0+U);let _t=de.getPrimaries(de.workingColorSpace),bt=v.colorSpace===Jn?null:de.getPrimaries(v.colorSpace),$t=v.colorSpace===Jn||_t===bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);let T=y(v.image,!1,s.maxTextureSize);T=Nt(v,T);let Y=r.convert(v.format,v.colorSpace),j=r.convert(v.type),st=A(v.internalFormat,Y,j,v.colorSpace,v.isVideoTexture);xt(J,v);let K,Et=v.mipmaps,vt=v.isVideoTexture!==!0,Xt=Lt.__version===void 0||it===!0,C=tt.dataReady,ft=w(v,T);if(v.isDepthTexture)st=S(v.format===fs,v.type),Xt&&(vt?e.texStorage2D(i.TEXTURE_2D,1,st,T.width,T.height):e.texImage2D(i.TEXTURE_2D,0,st,T.width,T.height,0,Y,j,null));else if(v.isDataTexture)if(Et.length>0){vt&&Xt&&e.texStorage2D(i.TEXTURE_2D,ft,st,Et[0].width,Et[0].height);for(let z=0,G=Et.length;z<G;z++)K=Et[z],vt?C&&e.texSubImage2D(i.TEXTURE_2D,z,0,0,K.width,K.height,Y,j,K.data):e.texImage2D(i.TEXTURE_2D,z,st,K.width,K.height,0,Y,j,K.data);v.generateMipmaps=!1}else vt?(Xt&&e.texStorage2D(i.TEXTURE_2D,ft,st,T.width,T.height),C&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,Y,j,T.data)):e.texImage2D(i.TEXTURE_2D,0,st,T.width,T.height,0,Y,j,T.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){vt&&Xt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,st,Et[0].width,Et[0].height,T.depth);for(let z=0,G=Et.length;z<G;z++)if(K=Et[z],v.format!==fn)if(Y!==null)if(vt){if(C)if(v.layerUpdates.size>0){let ct=ah(K.width,K.height,v.format,v.type);for(let pt of v.layerUpdates){let kt=K.data.subarray(pt*ct/K.data.BYTES_PER_ELEMENT,(pt+1)*ct/K.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,pt,K.width,K.height,1,Y,kt,0,0)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,0,K.width,K.height,T.depth,Y,K.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,z,st,K.width,K.height,T.depth,0,K.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else vt?C&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,0,K.width,K.height,T.depth,Y,j,K.data):e.texImage3D(i.TEXTURE_2D_ARRAY,z,st,K.width,K.height,T.depth,0,Y,j,K.data)}else{vt&&Xt&&e.texStorage2D(i.TEXTURE_2D,ft,st,Et[0].width,Et[0].height);for(let z=0,G=Et.length;z<G;z++)K=Et[z],v.format!==fn?Y!==null?vt?C&&e.compressedTexSubImage2D(i.TEXTURE_2D,z,0,0,K.width,K.height,Y,K.data):e.compressedTexImage2D(i.TEXTURE_2D,z,st,K.width,K.height,0,K.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):vt?C&&e.texSubImage2D(i.TEXTURE_2D,z,0,0,K.width,K.height,Y,j,K.data):e.texImage2D(i.TEXTURE_2D,z,st,K.width,K.height,0,Y,j,K.data)}else if(v.isDataArrayTexture)if(vt){if(Xt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,st,T.width,T.height,T.depth),C)if(v.layerUpdates.size>0){let z=ah(T.width,T.height,v.format,v.type);for(let G of v.layerUpdates){let ct=T.data.subarray(G*z/T.data.BYTES_PER_ELEMENT,(G+1)*z/T.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,G,T.width,T.height,1,Y,j,ct)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,T.width,T.height,T.depth,Y,j,T.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,st,T.width,T.height,T.depth,0,Y,j,T.data);else if(v.isData3DTexture)vt?(Xt&&e.texStorage3D(i.TEXTURE_3D,ft,st,T.width,T.height,T.depth),C&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,T.width,T.height,T.depth,Y,j,T.data)):e.texImage3D(i.TEXTURE_3D,0,st,T.width,T.height,T.depth,0,Y,j,T.data);else if(v.isFramebufferTexture){if(Xt)if(vt)e.texStorage2D(i.TEXTURE_2D,ft,st,T.width,T.height);else{let z=T.width,G=T.height;for(let ct=0;ct<ft;ct++)e.texImage2D(i.TEXTURE_2D,ct,st,z,G,0,Y,j,null),z>>=1,G>>=1}}else if(Et.length>0){if(vt&&Xt){let z=Rt(Et[0]);e.texStorage2D(i.TEXTURE_2D,ft,st,z.width,z.height)}for(let z=0,G=Et.length;z<G;z++)K=Et[z],vt?C&&e.texSubImage2D(i.TEXTURE_2D,z,0,0,Y,j,K):e.texImage2D(i.TEXTURE_2D,z,st,Y,j,K);v.generateMipmaps=!1}else if(vt){if(Xt){let z=Rt(T);e.texStorage2D(i.TEXTURE_2D,ft,st,z.width,z.height)}C&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Y,j,T)}else e.texImage2D(i.TEXTURE_2D,0,st,Y,j,T);p(v)&&m(J),Lt.__version=tt.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function et(b,v,U){if(v.image.length!==6)return;let J=Zt(b,v),it=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+U);let tt=n.get(it);if(it.version!==tt.__version||J===!0){e.activeTexture(i.TEXTURE0+U);let Lt=de.getPrimaries(de.workingColorSpace),_t=v.colorSpace===Jn?null:de.getPrimaries(v.colorSpace),bt=v.colorSpace===Jn||Lt===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);let $t=v.isCompressedTexture||v.image[0].isCompressedTexture,T=v.image[0]&&v.image[0].isDataTexture,Y=[];for(let G=0;G<6;G++)!$t&&!T?Y[G]=y(v.image[G],!0,s.maxCubemapSize):Y[G]=T?v.image[G].image:v.image[G],Y[G]=Nt(v,Y[G]);let j=Y[0],st=r.convert(v.format,v.colorSpace),K=r.convert(v.type),Et=A(v.internalFormat,st,K,v.colorSpace),vt=v.isVideoTexture!==!0,Xt=tt.__version===void 0||J===!0,C=it.dataReady,ft=w(v,j);xt(i.TEXTURE_CUBE_MAP,v);let z;if($t){vt&&Xt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,Et,j.width,j.height);for(let G=0;G<6;G++){z=Y[G].mipmaps;for(let ct=0;ct<z.length;ct++){let pt=z[ct];v.format!==fn?st!==null?vt?C&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,ct,0,0,pt.width,pt.height,st,pt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,ct,Et,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):vt?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,ct,0,0,pt.width,pt.height,st,K,pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,ct,Et,pt.width,pt.height,0,st,K,pt.data)}}}else{if(z=v.mipmaps,vt&&Xt){z.length>0&&ft++;let G=Rt(Y[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,Et,G.width,G.height)}for(let G=0;G<6;G++)if(T){vt?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,Y[G].width,Y[G].height,st,K,Y[G].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,Et,Y[G].width,Y[G].height,0,st,K,Y[G].data);for(let ct=0;ct<z.length;ct++){let kt=z[ct].image[G].image;vt?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,ct+1,0,0,kt.width,kt.height,st,K,kt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,ct+1,Et,kt.width,kt.height,0,st,K,kt.data)}}else{vt?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,st,K,Y[G]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,Et,st,K,Y[G]);for(let ct=0;ct<z.length;ct++){let pt=z[ct];vt?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,ct+1,0,0,st,K,pt.image[G]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,ct+1,Et,st,K,pt.image[G])}}}p(v)&&m(i.TEXTURE_CUBE_MAP),tt.__version=it.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function lt(b,v,U,J,it,tt){let Lt=r.convert(U.format,U.colorSpace),_t=r.convert(U.type),bt=A(U.internalFormat,Lt,_t,U.colorSpace);if(!n.get(v).__hasExternalTextures){let T=Math.max(1,v.width>>tt),Y=Math.max(1,v.height>>tt);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,tt,bt,T,Y,v.depth,0,Lt,_t,null):e.texImage2D(it,tt,bt,T,Y,0,Lt,_t,null)}e.bindFramebuffer(i.FRAMEBUFFER,b),$(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,it,n.get(U).__webglTexture,0,ut(v)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,it,n.get(U).__webglTexture,tt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Tt(b,v,U){if(i.bindRenderbuffer(i.RENDERBUFFER,b),v.depthBuffer){let J=v.depthTexture,it=J&&J.isDepthTexture?J.type:null,tt=S(v.stencilBuffer,it),Lt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=ut(v);$(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_t,tt,v.width,v.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,_t,tt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,tt,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Lt,i.RENDERBUFFER,b)}else{let J=v.textures;for(let it=0;it<J.length;it++){let tt=J[it],Lt=r.convert(tt.format,tt.colorSpace),_t=r.convert(tt.type),bt=A(tt.internalFormat,Lt,_t,tt.colorSpace),$t=ut(v);U&&$(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,$t,bt,v.width,v.height):$(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$t,bt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,bt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function q(b,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),X(v.depthTexture,0);let J=n.get(v.depthTexture).__webglTexture,it=ut(v);if(v.depthTexture.format===os)$(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(v.depthTexture.format===fs)$(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function zt(b){let v=n.get(b),U=b.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==b.depthTexture){let J=b.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),J){let it=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,J.removeEventListener("dispose",it)};J.addEventListener("dispose",it),v.__depthDisposeCallback=it}v.__boundDepthTexture=J}if(b.depthTexture&&!v.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");q(v.__webglFramebuffer,b)}else if(U){v.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[J]),v.__webglDepthbuffer[J]===void 0)v.__webglDepthbuffer[J]=i.createRenderbuffer(),Tt(v.__webglDepthbuffer[J],b,!1);else{let it=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=v.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,tt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Tt(v.__webglDepthbuffer,b,!1);else{let J=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,it)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Bt(b,v,U){let J=n.get(b);v!==void 0&&lt(J.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&zt(b)}function Yt(b){let v=b.texture,U=n.get(b),J=n.get(v);b.addEventListener("dispose",P);let it=b.textures,tt=b.isWebGLCubeRenderTarget===!0,Lt=it.length>1;if(Lt||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=v.version,o.memory.textures++),tt){U.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer[_t]=[];for(let bt=0;bt<v.mipmaps.length;bt++)U.__webglFramebuffer[_t][bt]=i.createFramebuffer()}else U.__webglFramebuffer[_t]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer=[];for(let _t=0;_t<v.mipmaps.length;_t++)U.__webglFramebuffer[_t]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(Lt)for(let _t=0,bt=it.length;_t<bt;_t++){let $t=n.get(it[_t]);$t.__webglTexture===void 0&&($t.__webglTexture=i.createTexture(),o.memory.textures++)}if(b.samples>0&&$(b)===!1){U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let _t=0;_t<it.length;_t++){let bt=it[_t];U.__webglColorRenderbuffer[_t]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[_t]);let $t=r.convert(bt.format,bt.colorSpace),T=r.convert(bt.type),Y=A(bt.internalFormat,$t,T,bt.colorSpace,b.isXRRenderTarget===!0),j=ut(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,j,Y,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,U.__webglColorRenderbuffer[_t])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),Tt(U.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(tt){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),xt(i.TEXTURE_CUBE_MAP,v);for(let _t=0;_t<6;_t++)if(v.mipmaps&&v.mipmaps.length>0)for(let bt=0;bt<v.mipmaps.length;bt++)lt(U.__webglFramebuffer[_t][bt],b,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,bt);else lt(U.__webglFramebuffer[_t],b,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);p(v)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Lt){for(let _t=0,bt=it.length;_t<bt;_t++){let $t=it[_t],T=n.get($t);e.bindTexture(i.TEXTURE_2D,T.__webglTexture),xt(i.TEXTURE_2D,$t),lt(U.__webglFramebuffer,b,$t,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,0),p($t)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let _t=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(_t=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(_t,J.__webglTexture),xt(_t,v),v.mipmaps&&v.mipmaps.length>0)for(let bt=0;bt<v.mipmaps.length;bt++)lt(U.__webglFramebuffer[bt],b,v,i.COLOR_ATTACHMENT0,_t,bt);else lt(U.__webglFramebuffer,b,v,i.COLOR_ATTACHMENT0,_t,0);p(v)&&m(_t),e.unbindTexture()}b.depthBuffer&&zt(b)}function Gt(b){let v=b.textures;for(let U=0,J=v.length;U<J;U++){let it=v[U];if(p(it)){let tt=b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Lt=n.get(it).__webglTexture;e.bindTexture(tt,Lt),m(tt),e.unbindTexture()}}}let nt=[],E=[];function gt(b){if(b.samples>0){if($(b)===!1){let v=b.textures,U=b.width,J=b.height,it=i.COLOR_BUFFER_BIT,tt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Lt=n.get(b),_t=v.length>1;if(_t)for(let bt=0;bt<v.length;bt++)e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let bt=0;bt<v.length;bt++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),_t){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[bt]);let $t=n.get(v[bt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,$t,0)}i.blitFramebuffer(0,0,U,J,0,0,U,J,it,i.NEAREST),l===!0&&(nt.length=0,E.length=0,nt.push(i.COLOR_ATTACHMENT0+bt),b.depthBuffer&&b.resolveDepthBuffer===!1&&(nt.push(tt),E.push(tt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,E)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,nt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_t)for(let bt=0;bt<v.length;bt++){e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[bt]);let $t=n.get(v[bt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,$t,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){let v=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function ut(b){return Math.min(s.maxSamples,b.samples)}function $(b){let v=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function yt(b){let v=o.render.frame;h.get(b)!==v&&(h.set(b,v),b.update())}function Nt(b,v){let U=b.colorSpace,J=b.format,it=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||U!==ei&&U!==Jn&&(de.getTransfer(U)===ye?(J!==fn||it!==Fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),v}function Rt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=Q,this.resetTextureUnits=M,this.setTexture2D=X,this.setTexture2DArray=at,this.setTexture3D=k,this.setTextureCube=ht,this.rebindTextures=Bt,this.setupRenderTarget=Yt,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=$}function l0(i,t){function e(n,s=Jn){let r,o=de.getTransfer(s);if(n===Fn)return i.UNSIGNED_BYTE;if(n===Dl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ul)return i.UNSIGNED_SHORT_5_5_5_1;if(n===xh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===_h)return i.BYTE;if(n===vh)return i.SHORT;if(n===ks)return i.UNSIGNED_SHORT;if(n===Ll)return i.INT;if(n===xi)return i.UNSIGNED_INT;if(n===Dn)return i.FLOAT;if(n===Zs)return i.HALF_FLOAT;if(n===yh)return i.ALPHA;if(n===Mh)return i.RGB;if(n===fn)return i.RGBA;if(n===Sh)return i.LUMINANCE;if(n===bh)return i.LUMINANCE_ALPHA;if(n===os)return i.DEPTH_COMPONENT;if(n===fs)return i.DEPTH_STENCIL;if(n===Eh)return i.RED;if(n===Nl)return i.RED_INTEGER;if(n===wh)return i.RG;if(n===Fl)return i.RG_INTEGER;if(n===Ol)return i.RGBA_INTEGER;if(n===Ur||n===Nr||n===Fr||n===Or)if(o===ye)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ur)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ur)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Nr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Fr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Or)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ma||n===Sa||n===ba||n===Ea)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ma)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Sa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ba)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ea)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===wa||n===Ta||n===Aa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===wa||n===Ta)return o===ye?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Aa)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ra||n===Ca||n===Pa||n===Ia||n===La||n===Da||n===Ua||n===Na||n===Fa||n===Oa||n===Ba||n===za||n===ka||n===Ha)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ra)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ca)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Pa)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ia)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===La)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Da)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ua)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Na)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fa)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Oa)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ba)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===za)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ka)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ha)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Br||n===Va||n===Ga)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Br)return o===ye?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Va)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ga)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Th||n===Wa||n===Xa||n===qa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Br)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Wa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Xa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===qa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ds?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}function f0(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Ih(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,A,S,w){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&f(p,m,w)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),y(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,A,S):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Je&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Je&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let A=t.get(m),S=A.envMap,w=A.envMapRotation;S&&(p.envMap.value=S,di.copy(w),di.x*=-1,di.y*=-1,di.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(di.y*=-1,di.z*=-1),p.envMapRotation.value.setFromMatrix4(d0.makeRotationFromEuler(di)),p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,A,S){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*A,p.scale.value=S*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,A){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Je&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=A.texture,p.transmissionSamplerSize.value.set(A.width,A.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function y(p,m){let A=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(A.matrixWorld),p.nearDistance.value=A.shadow.camera.near,p.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function p0(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,S){let w=S.program;n.uniformBlockBinding(A,w)}function c(A,S){let w=s[A.id];w===void 0&&(g(A),w=h(A),s[A.id]=w,A.addEventListener("dispose",p));let O=S.program;n.updateUBOMapping(A,O);let P=t.render.frame;r[A.id]!==P&&(u(A),r[A.id]=P)}function h(A){let S=d();A.__bindingPointIndex=S;let w=i.createBuffer(),O=A.__size,P=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,O,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,w),w}function d(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(A){let S=s[A.id],w=A.uniforms,O=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let P=0,R=w.length;P<R;P++){let F=Array.isArray(w[P])?w[P]:[w[P]];for(let ot=0,_=F.length;ot<_;ot++){let M=F[ot];if(f(M,P,ot,O)===!0){let Q=M.__offset,B=Array.isArray(M.value)?M.value:[M.value],X=0;for(let at=0;at<B.length;at++){let k=B[at],ht=y(k);typeof k=="number"||typeof k=="boolean"?(M.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,Q+X,M.__data)):k.isMatrix3?(M.__data[0]=k.elements[0],M.__data[1]=k.elements[1],M.__data[2]=k.elements[2],M.__data[3]=0,M.__data[4]=k.elements[3],M.__data[5]=k.elements[4],M.__data[6]=k.elements[5],M.__data[7]=0,M.__data[8]=k.elements[6],M.__data[9]=k.elements[7],M.__data[10]=k.elements[8],M.__data[11]=0):(k.toArray(M.__data,X),X+=ht.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Q,M.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(A,S,w,O){let P=A.value,R=S+"_"+w;if(O[R]===void 0)return typeof P=="number"||typeof P=="boolean"?O[R]=P:O[R]=P.clone(),!0;{let F=O[R];if(typeof P=="number"||typeof P=="boolean"){if(F!==P)return O[R]=P,!0}else if(F.equals(P)===!1)return F.copy(P),!0}return!1}function g(A){let S=A.uniforms,w=0,O=16;for(let R=0,F=S.length;R<F;R++){let ot=Array.isArray(S[R])?S[R]:[S[R]];for(let _=0,M=ot.length;_<M;_++){let Q=ot[_],B=Array.isArray(Q.value)?Q.value:[Q.value];for(let X=0,at=B.length;X<at;X++){let k=B[X],ht=y(k),Z=w%O,Mt=Z%ht.boundary,St=Z+Mt;w+=Mt,St!==0&&O-St<ht.storage&&(w+=O-St),Q.__data=new Float32Array(ht.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=w,w+=ht.storage}}}let P=w%O;return P>0&&(w+=O-P),A.__size=w,A.__cache={},this}function y(A){let S={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(S.boundary=4,S.storage=4):A.isVector2?(S.boundary=8,S.storage=8):A.isVector3||A.isColor?(S.boundary=16,S.storage=12):A.isVector4?(S.boundary=16,S.storage=16):A.isMatrix3?(S.boundary=48,S.storage=48):A.isMatrix4?(S.boundary=64,S.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),S}function p(A){let S=A.target;S.removeEventListener("dispose",p);let w=o.indexOf(S.__bindingPointIndex);o.splice(w,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function m(){for(let A in s)i.deleteBuffer(s[A]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}function ch(i,t,e,n,s,r,o){let a=dl.distanceSqToPoint(i);if(a<e){let l=new D;dl.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}function Hl(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}function hh(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function m0(i,t){let e=1-i;return e*e*t}function g0(i,t){return 2*(1-i)*i*t}function _0(i,t){return i*i*t}function Os(i,t,e,n){return m0(i,t)+g0(i,e)+_0(i,n)}function v0(i,t){let e=1-i;return e*e*e*t}function x0(i,t){let e=1-i;return 3*e*e*i*t}function y0(i,t){return 3*(1-i)*i*i*t}function M0(i,t){return i*i*i*t}function Bs(i,t,e,n,s){return v0(i,t)+x0(i,e)+y0(i,n)+M0(i,s)}function Oh(i,t,e,n,s){let r,o;if(s===B0(i,t,e,n)>0)for(r=t;r<e;r+=n)o=uh(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=uh(r,i[r],i[r+1],o);return o&&_o(o,o.next)&&(Ys(o),o=o.next),o}function Si(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(_o(e,e.next)||be(e.prev,e,e.next)===0)){if(Ys(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Xs(i,t,e,n,s,r,o){if(!i)return;!o&&r&&L0(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?E0(i,n,s,r):b0(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Ys(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=w0(Si(i),t,e),Xs(i,t,e,n,s,r,2)):o===2&&T0(i,t,e,n,s,r):Xs(Si(i),t,e,n,s,r,1);break}}}function b0(i){let t=i.prev,e=i,n=i.next;if(be(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,d=a<l?a<c?a:c:l<c?l:c,u=s>r?s>o?s:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&rs(s,a,r,l,o,c,g.x,g.y)&&be(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function E0(i,t,e,n){let s=i.prev,r=i,o=i.next;if(be(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,u=o.y,f=a<l?a<c?a:c:l<c?l:c,g=h<d?h<u?h:u:d<u?d:u,y=a>l?a>c?a:c:l>c?l:c,p=h>d?h>u?h:u:d>u?d:u,m=yl(f,g,t,e,n),A=yl(y,p,t,e,n),S=i.prevZ,w=i.nextZ;for(;S&&S.z>=m&&w&&w.z<=A;){if(S.x>=f&&S.x<=y&&S.y>=g&&S.y<=p&&S!==s&&S!==o&&rs(a,h,l,d,c,u,S.x,S.y)&&be(S.prev,S,S.next)>=0||(S=S.prevZ,w.x>=f&&w.x<=y&&w.y>=g&&w.y<=p&&w!==s&&w!==o&&rs(a,h,l,d,c,u,w.x,w.y)&&be(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;S&&S.z>=m;){if(S.x>=f&&S.x<=y&&S.y>=g&&S.y<=p&&S!==s&&S!==o&&rs(a,h,l,d,c,u,S.x,S.y)&&be(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;w&&w.z<=A;){if(w.x>=f&&w.x<=y&&w.y>=g&&w.y<=p&&w!==s&&w!==o&&rs(a,h,l,d,c,u,w.x,w.y)&&be(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function w0(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!_o(s,r)&&Bh(s,n,n.next,r)&&qs(s,r)&&qs(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Ys(n),Ys(n.next),n=i=r),n=n.next}while(n!==i);return Si(n)}function T0(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&N0(o,a)){let l=zh(o,a);o=Si(o,o.next),l=Si(l,l.next),Xs(o,t,e,n,s,r,0),Xs(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function A0(i,t,e,n){let s=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Oh(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(U0(c));for(s.sort(R0),r=0;r<s.length;r++)e=C0(s[r],e);return e}function R0(i,t){return i.x-t.x}function C0(i,t){let e=P0(i,t);if(!e)return t;let n=zh(e,i);return Si(n,n.next),Si(e,e.next)}function P0(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let u=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=r&&u>n&&(n=u,s=e.x<e.next.x?e:e.next,u===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,d;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&rs(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(d=Math.abs(o-e.y)/(r-e.x),qs(e,i)&&(d<h||d===h&&(e.x>s.x||e.x===s.x&&I0(s,e)))&&(s=e,h=d)),e=e.next;while(e!==a);return s}function I0(i,t){return be(i.prev,i,t.prev)<0&&be(t.next,i,i.next)<0}function L0(i,t,e,n){let s=i;do s.z===0&&(s.z=yl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,D0(s)}function D0(i){let t,e,n,s,r,o,a,l,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function yl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function U0(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function rs(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function N0(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!F0(i,t)&&(qs(i,t)&&qs(t,i)&&O0(i,t)&&(be(i.prev,i,t.prev)||be(i,t.prev,t))||_o(i,t)&&be(i.prev,i,i.next)>0&&be(t.prev,t,t.next)>0)}function be(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function _o(i,t){return i.x===t.x&&i.y===t.y}function Bh(i,t,e,n){let s=Lr(be(i,t,e)),r=Lr(be(i,t,n)),o=Lr(be(e,n,i)),a=Lr(be(e,n,t));return!!(s!==r&&o!==a||s===0&&Ir(i,e,t)||r===0&&Ir(i,n,t)||o===0&&Ir(e,i,n)||a===0&&Ir(e,t,n))}function Ir(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Lr(i){return i>0?1:i<0?-1:0}function F0(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Bh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function qs(i,t){return be(i.prev,i,i.next)<0?be(i,t,i.next)>=0&&be(i,i.prev,t)>=0:be(i,t,i.prev)<0||be(i,i.next,t)<0}function O0(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function zh(i,t){let e=new Ml(i.i,i.x,i.y),n=new Ml(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function uh(i,t,e,n){let s=new Ml(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ys(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ml(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function B0(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}function dh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function fh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}function k0(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}function Dr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function H0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var du,uc,fu,ph,pu,Pn,jn,Je,Ln,Kn,Nn,dc,fc,pc,mu,pi,gu,_u,vu,xu,yu,Mu,Su,bu,la,ca,Eu,wu,Tu,Au,Ru,Cu,Pu,Iu,Lu,ha,ua,da,cs,fa,pa,ma,ga,mh,Du,Uu,Qn,Nu,Fu,Ou,Bu,zu,ku,Hu,gh,hs,us,_a,va,po,xa,_i,ya,rn,Vu,ar,dn,Po,vi,Fn,_h,vh,ks,Ll,xi,Dn,Zs,Dl,Ul,ds,xh,yh,Mh,fn,Sh,bh,os,fs,Eh,Nl,wh,Fl,Ol,Ur,Nr,Fr,Or,Ma,Sa,ba,Ea,wa,Ta,Aa,Ra,Ca,Pa,Ia,La,Da,Ua,Na,Fa,Oa,Ba,za,ka,Ha,Br,Va,Ga,Th,Wa,Xa,qa,kr,Ya,Io,mc,gc,_c,Gu,Wu,Xu,qu,Jn,_n,ei,Bl,mo,Hr,ye,Vr,Gr,Vi,vc,Yu,Zu,$u,Ah,Ju,Ku,Qu,ju,xc,yc,Un,Wr,ti,ze,Mc,Us,Hs,Rh,Pt,ee,Lo,Sc,bc,Ec,Rs,yd,de,Gi,Za,Md,qr,Sd,Ke,Me,$a,On,Yr,Ja,xn,D,No,wc,yi,wn,cn,lr,Wi,Xi,qi,Wn,Xn,ai,Cs,cr,hr,li,bd,Ps,Oo,ps,Tn,Bo,ur,qn,zo,dr,ko,Zr,ge,Yi,hn,Ed,wd,Yn,fr,Qe,Tc,Ac,pn,$r,Td,Rc,Zi,An,pr,Is,Ad,Rd,Cc,Pc,Ic,Lc,Cd,$i,Ho,He,un,Rn,Vo,Cn,Ji,Ki,Dc,Go,Wo,Xo,qo,Yo,Zo,mi,Ph,Zn,mr,he,ke,Pd,Mi,Jr,Te,gr,Xe,Kr,Qr,Re,Id,sn,Jo,Qi,je,Ls,De,tn,Uc,ci,_r,Nc,vr,xr,yr,Ko,Mr,Fc,Sr,Fe,Vs,Ud,Nd,Fd,Oe,jr,$n,Oc,Bc,We,ji,ts,Ka,to,Qa,Qo,Od,Bd,In,hi,Er,eo,gs,kd,Hd,Vd,Gd,Wd,Xd,qd,Yd,Zd,$d,Jd,Kd,Qd,jd,tf,ef,nf,sf,rf,of,af,lf,cf,hf,uf,df,ff,pf,mf,gf,_f,vf,xf,yf,Mf,Sf,bf,Ef,wf,Tf,Af,Rf,Cf,Pf,If,Lf,Df,Uf,Nf,Ff,Of,Bf,zf,kf,Hf,Vf,Gf,Wf,Xf,qf,Yf,Zf,$f,Jf,Kf,Qf,jf,tp,ep,np,ip,sp,rp,op,ap,lp,cp,hp,up,dp,fp,pp,mp,gp,_p,vp,xp,yp,Mp,Sp,bp,Ep,wp,Tp,Ap,Rp,Cp,Pp,Ip,Lp,Dp,Up,Np,Fp,Op,Bp,zp,kp,Hp,Vp,Gp,Wp,Xp,qp,Yp,Zp,$p,Jp,Kp,Qp,jp,tm,em,nm,im,sm,rm,om,am,lm,cm,hm,um,dm,fm,pm,mm,gm,_m,vm,xm,te,wt,vn,wr,ui,ym,ja,is,zc,gi,jo,kc,ta,ea,na,ia,fi,es,Hc,no,io,Dh,Xc,Uh,Nh,Fh,qc,Yc,Zc,$c,Jc,tl,el,nl,sa,ls,bg,Eg,Ar,Dg,Ug,Fg,Wg,sl,rl,Kg,ol,al,e0,n0,s0,ll,ss,c0,Fs,h0,u0,cl,hl,di,d0,so,ro,ul,lh,dl,Rr,Cr,_s,on,Gs,fl,Pr,ra,oa,aa,pl,oo,ml,ao,gl,lo,_l,co,vl,xl,ho,Ws,S0,zs,uo,z0,vs,Sl,bl,El,mn,bi,wl,Tl,Al,fo,Ei,Rl,Cl,V0,Pl,Vl,G0,Gl,W0,X0,q0,Y0,Z0,$0,J0,Il,Se,p_,kh=Ao(()=>{du=0,uc=1,fu=2,ph=1,pu=2,Pn=3,jn=0,Je=1,Ln=2,Kn=0,Nn=1,dc=2,fc=3,pc=4,mu=5,pi=100,gu=101,_u=102,vu=103,xu=104,yu=200,Mu=201,Su=202,bu=203,la=204,ca=205,Eu=206,wu=207,Tu=208,Au=209,Ru=210,Cu=211,Pu=212,Iu=213,Lu=214,ha=0,ua=1,da=2,cs=3,fa=4,pa=5,ma=6,ga=7,mh=0,Du=1,Uu=2,Qn=0,Nu=1,Fu=2,Ou=3,Bu=4,zu=5,ku=6,Hu=7,gh=300,hs=301,us=302,_a=303,va=304,po=306,xa=1e3,_i=1001,ya=1002,rn=1003,Vu=1004,ar=1005,dn=1006,Po=1007,vi=1008,Fn=1009,_h=1010,vh=1011,ks=1012,Ll=1013,xi=1014,Dn=1015,Zs=1016,Dl=1017,Ul=1018,ds=1020,xh=35902,yh=1021,Mh=1022,fn=1023,Sh=1024,bh=1025,os=1026,fs=1027,Eh=1028,Nl=1029,wh=1030,Fl=1031,Ol=1033,Ur=33776,Nr=33777,Fr=33778,Or=33779,Ma=35840,Sa=35841,ba=35842,Ea=35843,wa=36196,Ta=37492,Aa=37496,Ra=37808,Ca=37809,Pa=37810,Ia=37811,La=37812,Da=37813,Ua=37814,Na=37815,Fa=37816,Oa=37817,Ba=37818,za=37819,ka=37820,Ha=37821,Br=36492,Va=36494,Ga=36495,Th=36283,Wa=36284,Xa=36285,qa=36286,kr=2300,Ya=2301,Io=2302,mc=2400,gc=2401,_c=2402,Gu=3200,Wu=3201,Xu=0,qu=1,Jn="",_n="srgb",ei="srgb-linear",Bl="display-p3",mo="display-p3-linear",Hr="linear",ye="srgb",Vr="rec709",Gr="p3",Vi=7680,vc=519,Yu=512,Zu=513,$u=514,Ah=515,Ju=516,Ku=517,Qu=518,ju=519,xc=35044,yc="300 es",Un=2e3,Wr=2001,ti=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Mc=1234567,Us=Math.PI/180,Hs=180/Math.PI;Rh={DEG2RAD:Us,RAD2DEG:Hs,generateUUID:wi,clamp:Ne,euclideanModulo:zl,mapLinear:td,inverseLerp:ed,lerp:Ns,damp:nd,pingpong:id,smoothstep:sd,smootherstep:rd,randInt:od,randFloat:ad,randFloatSpread:ld,seededRandom:cd,degToRad:hd,radToDeg:ud,isPowerOfTwo:dd,ceilPowerOfTwo:fd,floorPowerOfTwo:pd,setQuaternionFromProperEuler:md,normalize:Ve,denormalize:ns},Pt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ee=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],y=s[0],p=s[3],m=s[6],A=s[1],S=s[4],w=s[7],O=s[2],P=s[5],R=s[8];return r[0]=o*y+a*A+l*O,r[3]=o*p+a*S+l*P,r[6]=o*m+a*w+l*R,r[1]=c*y+h*A+d*O,r[4]=c*p+h*S+d*P,r[7]=c*m+h*w+d*R,r[2]=u*y+f*A+g*O,r[5]=u*p+f*S+g*P,r[8]=u*m+f*w+g*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,g=e*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=d*y,t[1]=(s*c-h*n)*y,t[2]=(a*n-s*o)*y,t[3]=u*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-a*e)*y,t[6]=f*y,t[7]=(n*l-c*e)*y,t[8]=(o*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Lo.makeScale(t,e)),this}rotate(t){return this.premultiply(Lo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Lo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Lo=new ee;Sc={};bc=new ee().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ec=new ee().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Rs={[ei]:{transfer:Hr,primaries:Vr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[_n]:{transfer:ye,primaries:Vr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[mo]:{transfer:Hr,primaries:Gr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Ec),fromReference:i=>i.applyMatrix3(bc)},[Bl]:{transfer:ye,primaries:Gr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Ec),fromReference:i=>i.applyMatrix3(bc).convertLinearToSRGB()}},yd=new Set([ei,mo]),de={enabled:!0,_workingColorSpace:ei,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!yd.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=Rs[t].toReference,s=Rs[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Rs[i].primaries},getTransfer:function(i){return i===Jn?Hr:Rs[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(Rs[t].luminanceCoefficients)}};Za=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Gi===void 0&&(Gi=Xr("canvas")),Gi.width=t.width,Gi.height=t.height;let n=Gi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Gi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Xr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=as(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(as(e[n]/255)*255):e[n]=as(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Md=0,qr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=wi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Uo(s[o].image)):r.push(Uo(s[o]))}else r=Uo(s);n.url=r}return e||(t.images[this.uuid]=n),n}};Sd=0,Ke=class i extends ti{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=_i,s=_i,r=dn,o=vi,a=fn,l=Fn,c=i.DEFAULT_ANISOTROPY,h=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=wi(),this.name="",this.source=new qr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==gh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case xa:t.x=t.x-Math.floor(t.x);break;case _i:t.x=t.x<0?0:1;break;case ya:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case xa:t.y=t.y-Math.floor(t.y);break;case _i:t.y=t.y<0?0:1;break;case ya:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ke.DEFAULT_IMAGE=null;Ke.DEFAULT_MAPPING=gh;Ke.DEFAULT_ANISOTROPY=1;Me=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],y=l[2],p=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-y)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+y)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(c+1)/2,w=(f+1)/2,O=(m+1)/2,P=(h+u)/4,R=(d+y)/4,F=(g+p)/4;return S>w&&S>O?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=P/n,r=R/n):w>O?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=P/s,r=F/s):O<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(O),n=R/r,s=F/r),this.set(n,s,r,e),this}let A=Math.sqrt((p-g)*(p-g)+(d-y)*(d-y)+(u-h)*(u-h));return Math.abs(A)<.001&&(A=1),this.x=(p-g)/A,this.y=(d-y)/A,this.z=(u-h)/A,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},$a=class extends ti{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Ke(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new qr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},On=class extends $a{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Yr=class extends Ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},Ja=class extends Ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},xn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],f=r[o+1],g=r[o+2],y=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=f,t[e+2]=g,t[e+3]=y;return}if(d!==y||l!==u||c!==f||h!==g){let p=1-a,m=l*u+c*f+h*g+d*y,A=m>=0?1:-1,S=1-m*m;if(S>Number.EPSILON){let O=Math.sqrt(S),P=Math.atan2(O,m*A);p=Math.sin(p*P)/O,a=Math.sin(a*P)/O}let w=a*A;if(l=l*p+u*w,c=c*p+f*w,h=h*p+g*w,d=d*p+y*w,p===1-a){let O=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=O,c*=O,h*=O,d*=O}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],u=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-a*f,t[e+2]=c*g+h*f+a*u-l*d,t[e+3]=h*g-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),u=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ne(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(wc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(wc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return No.copy(this).projectOnVector(t),this.sub(No)}reflect(t){return this.sub(No.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},No=new D,wc=new xn,yi=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,cn):cn.fromBufferAttribute(r,o),cn.applyMatrix4(t.matrixWorld),this.expandByPoint(cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),lr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),lr.copy(n.boundingBox)),lr.applyMatrix4(t.matrixWorld),this.union(lr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,cn),cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Cs),cr.subVectors(this.max,Cs),Wi.subVectors(t.a,Cs),Xi.subVectors(t.b,Cs),qi.subVectors(t.c,Cs),Wn.subVectors(Xi,Wi),Xn.subVectors(qi,Xi),ai.subVectors(Wi,qi);let e=[0,-Wn.z,Wn.y,0,-Xn.z,Xn.y,0,-ai.z,ai.y,Wn.z,0,-Wn.x,Xn.z,0,-Xn.x,ai.z,0,-ai.x,-Wn.y,Wn.x,0,-Xn.y,Xn.x,0,-ai.y,ai.x,0];return!Fo(e,Wi,Xi,qi,cr)||(e=[1,0,0,0,1,0,0,0,1],!Fo(e,Wi,Xi,qi,cr))?!1:(hr.crossVectors(Wn,Xn),e=[hr.x,hr.y,hr.z],Fo(e,Wi,Xi,qi,cr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(wn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},wn=[new D,new D,new D,new D,new D,new D,new D,new D],cn=new D,lr=new yi,Wi=new D,Xi=new D,qi=new D,Wn=new D,Xn=new D,ai=new D,Cs=new D,cr=new D,hr=new D,li=new D;bd=new yi,Ps=new D,Oo=new D,ps=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):bd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ps.subVectors(t,this.center);let e=Ps.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ps,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Oo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ps.copy(t.center).add(Oo)),this.expandByPoint(Ps.copy(t.center).sub(Oo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Tn=new D,Bo=new D,ur=new D,qn=new D,zo=new D,dr=new D,ko=new D,Zr=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Tn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Tn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Tn.copy(this.origin).addScaledVector(this.direction,e),Tn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Bo.copy(t).add(e).multiplyScalar(.5),ur.copy(e).sub(t).normalize(),qn.copy(this.origin).sub(Bo);let r=t.distanceTo(e)*.5,o=-this.direction.dot(ur),a=qn.dot(this.direction),l=-qn.dot(ur),c=qn.lengthSq(),h=Math.abs(1-o*o),d,u,f,g;if(h>0)if(d=o*l-a,u=o*a-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let y=1/h;d*=y,u*=y,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Bo).addScaledVector(ur,u),f}intersectSphere(t,e){Tn.subVectors(t.center,this.origin);let n=Tn.dot(this.direction),s=Tn.dot(Tn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Tn)!==null}intersectTriangle(t,e,n,s,r){zo.subVectors(e,t),dr.subVectors(n,t),ko.crossVectors(zo,dr);let o=this.direction.dot(ko),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;qn.subVectors(this.origin,t);let l=a*this.direction.dot(dr.crossVectors(qn,dr));if(l<0)return null;let c=a*this.direction.dot(zo.cross(qn));if(c<0||l+c>o)return null;let h=-a*qn.dot(ko);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ge=class i{constructor(t,e,n,s,r,o,a,l,c,h,d,u,f,g,y,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,d,u,f,g,y,p)}set(t,e,n,s,r,o,a,l,c,h,d,u,f,g,y,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=g,m[11]=y,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Yi.setFromMatrixColumn(t,0).length(),r=1/Yi.setFromMatrixColumn(t,1).length(),o=1/Yi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,f=o*d,g=a*h,y=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-y*c,e[9]=-a*l,e[2]=y-u*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,g=c*h,y=c*d;e[0]=u+y*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=y+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,g=c*h,y=c*d;e[0]=u-y*a,e[4]=-o*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=y-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,f=o*d,g=a*h,y=a*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+y,e[1]=l*d,e[5]=y*c+u,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,f=o*c,g=a*l,y=a*c;e[0]=l*h,e[4]=y-u*d,e[8]=g*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-y*d}else if(t.order==="XZY"){let u=o*l,f=o*c,g=a*l,y=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+y,e[5]=o*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*h,e[10]=y*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ed,t,wd)}lookAt(t,e,n){let s=this.elements;return Qe.subVectors(t,e),Qe.lengthSq()===0&&(Qe.z=1),Qe.normalize(),Yn.crossVectors(n,Qe),Yn.lengthSq()===0&&(Math.abs(n.z)===1?Qe.x+=1e-4:Qe.z+=1e-4,Qe.normalize(),Yn.crossVectors(n,Qe)),Yn.normalize(),fr.crossVectors(Qe,Yn),s[0]=Yn.x,s[4]=fr.x,s[8]=Qe.x,s[1]=Yn.y,s[5]=fr.y,s[9]=Qe.y,s[2]=Yn.z,s[6]=fr.z,s[10]=Qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],y=n[6],p=n[10],m=n[14],A=n[3],S=n[7],w=n[11],O=n[15],P=s[0],R=s[4],F=s[8],ot=s[12],_=s[1],M=s[5],Q=s[9],B=s[13],X=s[2],at=s[6],k=s[10],ht=s[14],Z=s[3],Mt=s[7],St=s[11],xt=s[15];return r[0]=o*P+a*_+l*X+c*Z,r[4]=o*R+a*M+l*at+c*Mt,r[8]=o*F+a*Q+l*k+c*St,r[12]=o*ot+a*B+l*ht+c*xt,r[1]=h*P+d*_+u*X+f*Z,r[5]=h*R+d*M+u*at+f*Mt,r[9]=h*F+d*Q+u*k+f*St,r[13]=h*ot+d*B+u*ht+f*xt,r[2]=g*P+y*_+p*X+m*Z,r[6]=g*R+y*M+p*at+m*Mt,r[10]=g*F+y*Q+p*k+m*St,r[14]=g*ot+y*B+p*ht+m*xt,r[3]=A*P+S*_+w*X+O*Z,r[7]=A*R+S*M+w*at+O*Mt,r[11]=A*F+S*Q+w*k+O*St,r[15]=A*ot+S*B+w*ht+O*xt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],y=t[7],p=t[11],m=t[15];return g*(+r*l*d-s*c*d-r*a*u+n*c*u+s*a*f-n*l*f)+y*(+e*l*f-e*c*u+r*o*u-s*o*f+s*c*h-r*l*h)+p*(+e*c*d-e*a*f-r*o*d+n*o*f+r*a*h-n*c*h)+m*(-s*a*h-e*l*d+e*a*u+s*o*d-n*o*u+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],y=t[13],p=t[14],m=t[15],A=d*p*c-y*u*c+y*l*f-a*p*f-d*l*m+a*u*m,S=g*u*c-h*p*c-g*l*f+o*p*f+h*l*m-o*u*m,w=h*y*c-g*d*c+g*a*f-o*y*f-h*a*m+o*d*m,O=g*d*l-h*y*l-g*a*u+o*y*u+h*a*p-o*d*p,P=e*A+n*S+s*w+r*O;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/P;return t[0]=A*R,t[1]=(y*u*r-d*p*r-y*s*f+n*p*f+d*s*m-n*u*m)*R,t[2]=(a*p*r-y*l*r+y*s*c-n*p*c-a*s*m+n*l*m)*R,t[3]=(d*l*r-a*u*r-d*s*c+n*u*c+a*s*f-n*l*f)*R,t[4]=S*R,t[5]=(h*p*r-g*u*r+g*s*f-e*p*f-h*s*m+e*u*m)*R,t[6]=(g*l*r-o*p*r-g*s*c+e*p*c+o*s*m-e*l*m)*R,t[7]=(o*u*r-h*l*r+h*s*c-e*u*c-o*s*f+e*l*f)*R,t[8]=w*R,t[9]=(g*d*r-h*y*r-g*n*f+e*y*f+h*n*m-e*d*m)*R,t[10]=(o*y*r-g*a*r+g*n*c-e*y*c-o*n*m+e*a*m)*R,t[11]=(h*a*r-o*d*r-h*n*c+e*d*c+o*n*f-e*a*f)*R,t[12]=O*R,t[13]=(h*y*s-g*d*s+g*n*u-e*y*u-h*n*p+e*d*p)*R,t[14]=(g*a*s-o*y*s-g*n*l+e*y*l+o*n*p-e*a*p)*R,t[15]=(o*d*s-h*a*s+h*n*l-e*d*l-o*n*u+e*a*u)*R,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,g=r*d,y=o*h,p=o*d,m=a*d,A=l*c,S=l*h,w=l*d,O=n.x,P=n.y,R=n.z;return s[0]=(1-(y+m))*O,s[1]=(f+w)*O,s[2]=(g-S)*O,s[3]=0,s[4]=(f-w)*P,s[5]=(1-(u+m))*P,s[6]=(p+A)*P,s[7]=0,s[8]=(g+S)*R,s[9]=(p-A)*R,s[10]=(1-(u+y))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Yi.set(s[0],s[1],s[2]).length(),o=Yi.set(s[4],s[5],s[6]).length(),a=Yi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],hn.copy(this);let c=1/r,h=1/o,d=1/a;return hn.elements[0]*=c,hn.elements[1]*=c,hn.elements[2]*=c,hn.elements[4]*=h,hn.elements[5]*=h,hn.elements[6]*=h,hn.elements[8]*=d,hn.elements[9]*=d,hn.elements[10]*=d,e.setFromRotationMatrix(hn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Un){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),u=(n+s)/(n-s),f,g;if(a===Un)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Wr)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Un){let l=this.elements,c=1/(e-t),h=1/(n-s),d=1/(o-r),u=(e+t)*c,f=(n+s)*h,g,y;if(a===Un)g=(o+r)*d,y=-2*d;else if(a===Wr)g=r*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Yi=new D,hn=new ge,Ed=new D(0,0,0),wd=new D(1,1,1),Yn=new D,fr=new D,Qe=new D,Tc=new ge,Ac=new xn,pn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ne(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ne(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ne(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Tc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Tc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ac.setFromEuler(this),this.setFromQuaternion(Ac,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};pn.DEFAULT_ORDER="XYZ";$r=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Td=0,Rc=new D,Zi=new xn,An=new ge,pr=new D,Is=new D,Ad=new D,Rd=new xn,Cc=new D(1,0,0),Pc=new D(0,1,0),Ic=new D(0,0,1),Lc={type:"added"},Cd={type:"removed"},$i={type:"childadded",child:null},Ho={type:"childremoved",child:null},He=class i extends ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new D,e=new pn,n=new xn,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ge},normalMatrix:{value:new ee}}),this.matrix=new ge,this.matrixWorld=new ge,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $r,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Zi.setFromAxisAngle(t,e),this.quaternion.multiply(Zi),this}rotateOnWorldAxis(t,e){return Zi.setFromAxisAngle(t,e),this.quaternion.premultiply(Zi),this}rotateX(t){return this.rotateOnAxis(Cc,t)}rotateY(t){return this.rotateOnAxis(Pc,t)}rotateZ(t){return this.rotateOnAxis(Ic,t)}translateOnAxis(t,e){return Rc.copy(t).applyQuaternion(this.quaternion),this.position.add(Rc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Cc,t)}translateY(t){return this.translateOnAxis(Pc,t)}translateZ(t){return this.translateOnAxis(Ic,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?pr.copy(t):pr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(Is,pr,this.up):An.lookAt(pr,Is,this.up),this.quaternion.setFromRotationMatrix(An),s&&(An.extractRotation(s.matrixWorld),Zi.setFromRotationMatrix(An),this.quaternion.premultiply(Zi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Lc),$i.child=t,this.dispatchEvent($i),$i.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Cd),Ho.child=t,this.dispatchEvent(Ho),Ho.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),An.multiply(t.parent.matrixWorld)),t.applyMatrix4(An),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Lc),$i.child=t,this.dispatchEvent($i),$i.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,t,Ad),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,Rd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};He.DEFAULT_UP=new D(0,1,0);He.DEFAULT_MATRIX_AUTO_UPDATE=!0;He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;un=new D,Rn=new D,Vo=new D,Cn=new D,Ji=new D,Ki=new D,Dc=new D,Go=new D,Wo=new D,Xo=new D,qo=new Me,Yo=new Me,Zo=new Me,mi=class i{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),un.subVectors(t,e),s.cross(un);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){un.subVectors(s,e),Rn.subVectors(n,e),Vo.subVectors(t,e);let o=un.dot(un),a=un.dot(Rn),l=un.dot(Vo),c=Rn.dot(Rn),h=Rn.dot(Vo),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Cn)===null?!1:Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Cn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Cn.x),l.addScaledVector(o,Cn.y),l.addScaledVector(a,Cn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return qo.setScalar(0),Yo.setScalar(0),Zo.setScalar(0),qo.fromBufferAttribute(t,e),Yo.fromBufferAttribute(t,n),Zo.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(qo,r.x),o.addScaledVector(Yo,r.y),o.addScaledVector(Zo,r.z),o}static isFrontFacing(t,e,n,s){return un.subVectors(n,e),Rn.subVectors(t,e),un.cross(Rn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return un.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),un.cross(Rn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Ji.subVectors(s,n),Ki.subVectors(r,n),Go.subVectors(t,n);let l=Ji.dot(Go),c=Ki.dot(Go);if(l<=0&&c<=0)return e.copy(n);Wo.subVectors(t,s);let h=Ji.dot(Wo),d=Ki.dot(Wo);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Ji,o);Xo.subVectors(t,r);let f=Ji.dot(Xo),g=Ki.dot(Xo);if(g>=0&&f<=g)return e.copy(r);let y=f*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Ki,a);let p=h*g-f*d;if(p<=0&&d-h>=0&&f-g>=0)return Dc.subVectors(r,s),a=(d-h)/(d-h+(f-g)),e.copy(s).addScaledVector(Dc,a);let m=1/(p+y+u);return o=y*m,a=u*m,e.copy(n).addScaledVector(Ji,o).addScaledVector(Ki,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ph={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zn={h:0,s:0,l:0},mr={h:0,s:0,l:0};he=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=_n){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,de.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=de.workingColorSpace){return this.r=t,this.g=e,this.b=n,de.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=de.workingColorSpace){if(t=zl(t,1),e=Ne(e,0,1),n=Ne(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=$o(o,r,t+1/3),this.g=$o(o,r,t),this.b=$o(o,r,t-1/3)}return de.toWorkingColorSpace(this,s),this}setStyle(t,e=_n){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=_n){let n=Ph[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=as(t.r),this.g=as(t.g),this.b=as(t.b),this}copyLinearToSRGB(t){return this.r=Do(t.r),this.g=Do(t.g),this.b=Do(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=_n){return de.fromWorkingColorSpace(ke.copy(this),t),Math.round(Ne(ke.r*255,0,255))*65536+Math.round(Ne(ke.g*255,0,255))*256+Math.round(Ne(ke.b*255,0,255))}getHexString(t=_n){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=de.workingColorSpace){de.fromWorkingColorSpace(ke.copy(this),e);let n=ke.r,s=ke.g,r=ke.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=de.workingColorSpace){return de.fromWorkingColorSpace(ke.copy(this),e),t.r=ke.r,t.g=ke.g,t.b=ke.b,t}getStyle(t=_n){de.fromWorkingColorSpace(ke.copy(this),t);let e=ke.r,n=ke.g,s=ke.b;return t!==_n?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Zn),this.setHSL(Zn.h+t,Zn.s+e,Zn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Zn),t.getHSL(mr);let n=Ns(Zn.h,mr.h,e),s=Ns(Zn.s,mr.s,e),r=Ns(Zn.l,mr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ke=new he;he.NAMES=Ph;Pd=0,Mi=class extends ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=wi(),this.name="",this.type="Material",this.blending=Nn,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=la,this.blendDst=ca,this.blendEquation=pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new he(0,0,0),this.blendAlpha=0,this.depthFunc=cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vi,this.stencilZFail=Vi,this.stencilZPass=Vi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Nn&&(n.blending=this.blending),this.side!==jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==la&&(n.blendSrc=this.blendSrc),this.blendDst!==ca&&(n.blendDst=this.blendDst),this.blendEquation!==pi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==cs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Vi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Vi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Jr=class extends Mi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=mh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Te=new D,gr=new Pt,Xe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=xc,this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)gr.fromBufferAttribute(this,e),gr.applyMatrix3(t),this.setXY(e,gr.x,gr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix3(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ns(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ve(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ns(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ns(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ns(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ns(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),s=Ve(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),s=Ve(s,this.array),r=Ve(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==xc&&(t.usage=this.usage),t}},Kr=class extends Xe{constructor(t,e,n){super(new Uint16Array(t),e,n)}},Qr=class extends Xe{constructor(t,e,n){super(new Uint32Array(t),e,n)}},Re=class extends Xe{constructor(t,e,n){super(new Float32Array(t),e,n)}},Id=0,sn=new ge,Jo=new He,Qi=new D,je=new yi,Ls=new yi,De=new D,tn=class i extends ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=wi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ch(t)?Qr:Kr)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ee().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return sn.makeRotationFromQuaternion(t),this.applyMatrix4(sn),this}rotateX(t){return sn.makeRotationX(t),this.applyMatrix4(sn),this}rotateY(t){return sn.makeRotationY(t),this.applyMatrix4(sn),this}rotateZ(t){return sn.makeRotationZ(t),this.applyMatrix4(sn),this}translate(t,e,n){return sn.makeTranslation(t,e,n),this.applyMatrix4(sn),this}scale(t,e,n){return sn.makeScale(t,e,n),this.applyMatrix4(sn),this}lookAt(t){return Jo.lookAt(t),Jo.updateMatrix(),this.applyMatrix4(Jo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qi).negate(),this.translate(Qi.x,Qi.y,Qi.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Re(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];je.setFromBufferAttribute(r),this.morphTargetsRelative?(De.addVectors(this.boundingBox.min,je.min),this.boundingBox.expandByPoint(De),De.addVectors(this.boundingBox.max,je.max),this.boundingBox.expandByPoint(De)):(this.boundingBox.expandByPoint(je.min),this.boundingBox.expandByPoint(je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ps);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){let n=this.boundingSphere.center;if(je.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ls.setFromBufferAttribute(a),this.morphTargetsRelative?(De.addVectors(je.min,Ls.min),je.expandByPoint(De),De.addVectors(je.max,Ls.max),je.expandByPoint(De)):(je.expandByPoint(Ls.min),je.expandByPoint(Ls.max))}je.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)De.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(De));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)De.fromBufferAttribute(a,c),l&&(Qi.fromBufferAttribute(t,c),De.add(Qi)),s=Math.max(s,n.distanceToSquared(De))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xe(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<n.count;F++)a[F]=new D,l[F]=new D;let c=new D,h=new D,d=new D,u=new Pt,f=new Pt,g=new Pt,y=new D,p=new D;function m(F,ot,_){c.fromBufferAttribute(n,F),h.fromBufferAttribute(n,ot),d.fromBufferAttribute(n,_),u.fromBufferAttribute(r,F),f.fromBufferAttribute(r,ot),g.fromBufferAttribute(r,_),h.sub(c),d.sub(c),f.sub(u),g.sub(u);let M=1/(f.x*g.y-g.x*f.y);isFinite(M)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(M),p.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(M),a[F].add(y),a[ot].add(y),a[_].add(y),l[F].add(p),l[ot].add(p),l[_].add(p))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let F=0,ot=A.length;F<ot;++F){let _=A[F],M=_.start,Q=_.count;for(let B=M,X=M+Q;B<X;B+=3)m(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let S=new D,w=new D,O=new D,P=new D;function R(F){O.fromBufferAttribute(s,F),P.copy(O);let ot=a[F];S.copy(ot),S.sub(O.multiplyScalar(O.dot(ot))).normalize(),w.crossVectors(P,ot);let M=w.dot(l[F])<0?-1:1;o.setXYZW(F,S.x,S.y,S.z,M)}for(let F=0,ot=A.length;F<ot;++F){let _=A[F],M=_.start,Q=_.count;for(let B=M,X=M+Q;B<X;B+=3)R(t.getX(B+0)),R(t.getX(B+1)),R(t.getX(B+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new D,r=new D,o=new D,a=new D,l=new D,c=new D,h=new D,d=new D;if(t)for(let u=0,f=t.count;u<f;u+=3){let g=t.getX(u+0),y=t.getX(u+1),p=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,p),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)De.fromBufferAttribute(t,e),De.normalize(),t.setXYZ(e,De.x,De.y,De.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let y=0,p=l.length;y<p;y++){a.isInterleavedBufferAttribute?f=l[y]*a.data.stride+a.offset:f=l[y]*h;for(let m=0;m<h;m++)u[g++]=c[f++]}return new Xe(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Uc=new ge,ci=new Zr,_r=new ps,Nc=new D,vr=new D,xr=new D,yr=new D,Ko=new D,Mr=new D,Fc=new D,Sr=new D,Fe=class extends He{constructor(t=new tn,e=new Jr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Mr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(Ko.fromBufferAttribute(d,t),o?Mr.addScaledVector(Ko,h):Mr.addScaledVector(Ko.sub(e),h))}e.add(Mr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_r.copy(n.boundingSphere),_r.applyMatrix4(r),ci.copy(t.ray).recast(t.near),!(_r.containsPoint(ci.origin)===!1&&(ci.intersectSphere(_r,Nc)===null||ci.origin.distanceToSquared(Nc)>(t.far-t.near)**2))&&(Uc.copy(r).invert(),ci.copy(t.ray).applyMatrix4(Uc),!(n.boundingBox!==null&&ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ci)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=u.length;g<y;g++){let p=u[g],m=o[p.materialIndex],A=Math.max(p.start,f.start),S=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let w=A,O=S;w<O;w+=3){let P=a.getX(w),R=a.getX(w+1),F=a.getX(w+2);s=br(this,m,t,n,c,h,d,P,R,F),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let p=g,m=y;p<m;p+=3){let A=a.getX(p),S=a.getX(p+1),w=a.getX(p+2);s=br(this,o,t,n,c,h,d,A,S,w),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=u.length;g<y;g++){let p=u[g],m=o[p.materialIndex],A=Math.max(p.start,f.start),S=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let w=A,O=S;w<O;w+=3){let P=w,R=w+1,F=w+2;s=br(this,m,t,n,c,h,d,P,R,F),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let p=g,m=y;p<m;p+=3){let A=p,S=p+1,w=p+2;s=br(this,o,t,n,c,h,d,A,S,w),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};Vs=class i extends tn{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Re(c,3)),this.setAttribute("normal",new Re(h,3)),this.setAttribute("uv",new Re(d,2));function g(y,p,m,A,S,w,O,P,R,F,ot){let _=w/R,M=O/F,Q=w/2,B=O/2,X=P/2,at=R+1,k=F+1,ht=0,Z=0,Mt=new D;for(let St=0;St<k;St++){let xt=St*M-B;for(let Zt=0;Zt<at;Zt++){let Qt=Zt*_-Q;Mt[y]=Qt*A,Mt[p]=xt*S,Mt[m]=X,c.push(Mt.x,Mt.y,Mt.z),Mt[y]=0,Mt[p]=0,Mt[m]=P>0?1:-1,h.push(Mt.x,Mt.y,Mt.z),d.push(Zt/R),d.push(1-St/F),ht+=1}}for(let St=0;St<F;St++)for(let xt=0;xt<R;xt++){let Zt=u+xt+at*St,Qt=u+xt+at*(St+1),et=u+(xt+1)+at*(St+1),lt=u+(xt+1)+at*St;l.push(Zt,Qt,lt),l.push(Qt,et,lt),Z+=6}a.addGroup(f,Z,ot),f+=Z,u+=ht}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};Ud={clone:ms,merge:Ge},Nd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Oe=class extends Mi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nd,this.fragmentShader=Fd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ms(t.uniforms),this.uniformsGroups=Dd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},jr=class extends He{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ge,this.projectionMatrix=new ge,this.projectionMatrixInverse=new ge,this.coordinateSystem=Un}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},$n=new D,Oc=new Pt,Bc=new Pt,We=class extends jr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Hs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Us*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Hs*2*Math.atan(Math.tan(Us*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){$n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set($n.x,$n.y).multiplyScalar(-t/$n.z),$n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($n.x,$n.y).multiplyScalar(-t/$n.z)}getViewSize(t,e){return this.getViewBounds(t,Oc,Bc),e.subVectors(Bc,Oc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Us*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ji=-90,ts=1,Ka=class extends He{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new We(ji,ts,t,e);s.layers=this.layers,this.add(s);let r=new We(ji,ts,t,e);r.layers=this.layers,this.add(r);let o=new We(ji,ts,t,e);o.layers=this.layers,this.add(o);let a=new We(ji,ts,t,e);a.layers=this.layers,this.add(a);let l=new We(ji,ts,t,e);l.layers=this.layers,this.add(l);let c=new We(ji,ts,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Un)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Wr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},to=class extends Ke{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:hs,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Qa=class extends On{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new to(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:dn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Vs(5,5,5),r=new Oe({name:"CubemapFromEquirect",uniforms:ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Je,blending:Kn});r.uniforms.tEquirect.value=e;let o=new Fe(s,r),a=e.minFilter;return e.minFilter===vi&&(e.minFilter=dn),new Ka(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Qo=new D,Od=new D,Bd=new ee,In=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Qo.subVectors(n,e).cross(Od.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Qo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Bd.getNormalMatrix(t),s=this.coplanarPoint(Qo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},hi=new ps,Er=new D,eo=class{constructor(t=new In,e=new In,n=new In,s=new In,r=new In,o=new In){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Un){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],f=s[8],g=s[9],y=s[10],p=s[11],m=s[12],A=s[13],S=s[14],w=s[15];if(n[0].setComponents(l-r,u-c,p-f,w-m).normalize(),n[1].setComponents(l+r,u+c,p+f,w+m).normalize(),n[2].setComponents(l+o,u+h,p+g,w+A).normalize(),n[3].setComponents(l-o,u-h,p-g,w-A).normalize(),n[4].setComponents(l-a,u-d,p-y,w-S).normalize(),e===Un)n[5].setComponents(l+a,u+d,p+y,w+S).normalize();else if(e===Wr)n[5].setComponents(a,d,y,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),hi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),hi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(hi)}intersectsSprite(t){return hi.center.set(0,0,0),hi.radius=.7071067811865476,hi.applyMatrix4(t.matrixWorld),this.intersectsSphere(hi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Er.x=s.normal.x>0?t.max.x:t.min.x,Er.y=s.normal.y>0?t.max.y:t.min.y,Er.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Er)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};gs=class i extends tn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=t/a,u=e/l,f=[],g=[],y=[],p=[];for(let m=0;m<h;m++){let A=m*u-o;for(let S=0;S<c;S++){let w=S*d-r;g.push(w,-A,0),y.push(0,0,1),p.push(S/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let A=0;A<a;A++){let S=A+c*m,w=A+c*(m+1),O=A+1+c*(m+1),P=A+1+c*m;f.push(S,w,P),f.push(w,O,P)}this.setIndex(f),this.setAttribute("position",new Re(g,3)),this.setAttribute("normal",new Re(y,3)),this.setAttribute("uv",new Re(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},kd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Vd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Yd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,$d=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,jd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,tf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ef=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,nf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,of=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,af=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,cf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,hf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,uf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,df=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ff=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_f="gl_FragColor = linearToOutputTexel( gl_FragColor );",vf=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,yf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Mf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Sf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ef=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Af=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Cf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,If=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Df=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Uf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ff=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Of=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,zf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,kf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Hf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Vf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$f=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Jf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ep=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,np=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ip=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,rp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,op=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ap=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,hp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,up=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,gp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_p=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,bp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ep=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,wp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Tp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ap=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Rp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Pp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ip=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Dp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Up=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Np=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Fp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Op=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,zp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,kp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Yp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Zp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$p=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Kp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,em=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,im=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,rm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,om=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,am=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,lm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,um=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,mm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_m=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,vm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,te={alphahash_fragment:kd,alphahash_pars_fragment:Hd,alphamap_fragment:Vd,alphamap_pars_fragment:Gd,alphatest_fragment:Wd,alphatest_pars_fragment:Xd,aomap_fragment:qd,aomap_pars_fragment:Yd,batching_pars_vertex:Zd,batching_vertex:$d,begin_vertex:Jd,beginnormal_vertex:Kd,bsdfs:Qd,iridescence_fragment:jd,bumpmap_pars_fragment:tf,clipping_planes_fragment:ef,clipping_planes_pars_fragment:nf,clipping_planes_pars_vertex:sf,clipping_planes_vertex:rf,color_fragment:of,color_pars_fragment:af,color_pars_vertex:lf,color_vertex:cf,common:hf,cube_uv_reflection_fragment:uf,defaultnormal_vertex:df,displacementmap_pars_vertex:ff,displacementmap_vertex:pf,emissivemap_fragment:mf,emissivemap_pars_fragment:gf,colorspace_fragment:_f,colorspace_pars_fragment:vf,envmap_fragment:xf,envmap_common_pars_fragment:yf,envmap_pars_fragment:Mf,envmap_pars_vertex:Sf,envmap_physical_pars_fragment:Df,envmap_vertex:bf,fog_vertex:Ef,fog_pars_vertex:wf,fog_fragment:Tf,fog_pars_fragment:Af,gradientmap_pars_fragment:Rf,lightmap_pars_fragment:Cf,lights_lambert_fragment:Pf,lights_lambert_pars_fragment:If,lights_pars_begin:Lf,lights_toon_fragment:Uf,lights_toon_pars_fragment:Nf,lights_phong_fragment:Ff,lights_phong_pars_fragment:Of,lights_physical_fragment:Bf,lights_physical_pars_fragment:zf,lights_fragment_begin:kf,lights_fragment_maps:Hf,lights_fragment_end:Vf,logdepthbuf_fragment:Gf,logdepthbuf_pars_fragment:Wf,logdepthbuf_pars_vertex:Xf,logdepthbuf_vertex:qf,map_fragment:Yf,map_pars_fragment:Zf,map_particle_fragment:$f,map_particle_pars_fragment:Jf,metalnessmap_fragment:Kf,metalnessmap_pars_fragment:Qf,morphinstance_vertex:jf,morphcolor_vertex:tp,morphnormal_vertex:ep,morphtarget_pars_vertex:np,morphtarget_vertex:ip,normal_fragment_begin:sp,normal_fragment_maps:rp,normal_pars_fragment:op,normal_pars_vertex:ap,normal_vertex:lp,normalmap_pars_fragment:cp,clearcoat_normal_fragment_begin:hp,clearcoat_normal_fragment_maps:up,clearcoat_pars_fragment:dp,iridescence_pars_fragment:fp,opaque_fragment:pp,packing:mp,premultiplied_alpha_fragment:gp,project_vertex:_p,dithering_fragment:vp,dithering_pars_fragment:xp,roughnessmap_fragment:yp,roughnessmap_pars_fragment:Mp,shadowmap_pars_fragment:Sp,shadowmap_pars_vertex:bp,shadowmap_vertex:Ep,shadowmask_pars_fragment:wp,skinbase_vertex:Tp,skinning_pars_vertex:Ap,skinning_vertex:Rp,skinnormal_vertex:Cp,specularmap_fragment:Pp,specularmap_pars_fragment:Ip,tonemapping_fragment:Lp,tonemapping_pars_fragment:Dp,transmission_fragment:Up,transmission_pars_fragment:Np,uv_pars_fragment:Fp,uv_pars_vertex:Op,uv_vertex:Bp,worldpos_vertex:zp,background_vert:kp,background_frag:Hp,backgroundCube_vert:Vp,backgroundCube_frag:Gp,cube_vert:Wp,cube_frag:Xp,depth_vert:qp,depth_frag:Yp,distanceRGBA_vert:Zp,distanceRGBA_frag:$p,equirect_vert:Jp,equirect_frag:Kp,linedashed_vert:Qp,linedashed_frag:jp,meshbasic_vert:tm,meshbasic_frag:em,meshlambert_vert:nm,meshlambert_frag:im,meshmatcap_vert:sm,meshmatcap_frag:rm,meshnormal_vert:om,meshnormal_frag:am,meshphong_vert:lm,meshphong_frag:cm,meshphysical_vert:hm,meshphysical_frag:um,meshtoon_vert:dm,meshtoon_frag:fm,points_vert:pm,points_frag:mm,shadow_vert:gm,shadow_frag:_m,sprite_vert:vm,sprite_frag:xm},wt={common:{diffuse:{value:new he(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ee}},envmap:{envMap:{value:null},envMapRotation:{value:new ee},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ee},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new he(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new he(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0},uvTransform:{value:new ee}},sprite:{diffuse:{value:new he(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}}},vn={basic:{uniforms:Ge([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:Ge([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new he(0)}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:Ge([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new he(0)},specular:{value:new he(1118481)},shininess:{value:30}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:Ge([wt.common,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.roughnessmap,wt.metalnessmap,wt.fog,wt.lights,{emissive:{value:new he(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:Ge([wt.common,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.gradientmap,wt.fog,wt.lights,{emissive:{value:new he(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:Ge([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:Ge([wt.points,wt.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:Ge([wt.common,wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:Ge([wt.common,wt.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:Ge([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:Ge([wt.sprite,wt.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ee}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distanceRGBA:{uniforms:Ge([wt.common,wt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distanceRGBA_vert,fragmentShader:te.distanceRGBA_frag},shadow:{uniforms:Ge([wt.lights,wt.fog,{color:{value:new he(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};vn.physical={uniforms:Ge([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ee},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ee},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ee},sheen:{value:0},sheenColor:{value:new he(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ee},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ee},attenuationDistance:{value:0},attenuationColor:{value:new he(0)},specularColor:{value:new he(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ee},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ee}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};wr={r:0,b:0,g:0},ui=new pn,ym=new ge;ja=class extends jr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},is=4,zc=[.125,.215,.35,.446,.526,.582],gi=20,jo=new ja,kc=new he,ta=null,ea=0,na=0,ia=!1,fi=(1+Math.sqrt(5))/2,es=1/fi,Hc=[new D(-fi,es,0),new D(fi,es,0),new D(-es,0,fi),new D(es,0,fi),new D(0,fi,-es),new D(0,fi,es),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],no=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ta=this._renderer.getRenderTarget(),ea=this._renderer.getActiveCubeFace(),na=this._renderer.getActiveMipmapLevel(),ia=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ta,ea,na),this._renderer.xr.enabled=ia,t.scissorTest=!1,Tr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===hs||t.mapping===us?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ta=this._renderer.getRenderTarget(),ea=this._renderer.getActiveCubeFace(),na=this._renderer.getActiveMipmapLevel(),ia=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:Zs,format:fn,colorSpace:ei,depthBuffer:!1},s=Vc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vc(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Am(r)),this._blurMaterial=Rm(r,t,e)}return s}_compileMaterial(t){let e=new Fe(this._lodPlanes[0],t);this._renderer.compile(e,jo)}_sceneToCubeUV(t,e,n,s){let a=new We(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(kc),h.toneMapping=Qn,h.autoClear=!1;let f=new Jr({name:"PMREM.Background",side:Je,depthWrite:!1,depthTest:!1}),g=new Fe(new Vs,f),y=!1,p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,y=!0):(f.color.copy(kc),y=!0);for(let m=0;m<6;m++){let A=m%3;A===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):A===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));let S=this._cubeSize;Tr(s,A*S,m>2?S:0,S,S),h.setRenderTarget(s),y&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=p}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===hs||t.mapping===us;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gc());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Fe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Tr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,jo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Hc[(s-r-1)%Hc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new Fe(this._lodPlanes[s],c),u=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*gi-1),y=r/g,p=isFinite(r)?1+Math.floor(h*y):gi;p>gi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${gi}`);let m=[],A=0;for(let R=0;R<gi;++R){let F=R/y,ot=Math.exp(-F*F/2);m.push(ot),R===0?A+=ot:R<p&&(A+=2*ot)}for(let R=0;R<m.length;R++)m[R]=m[R]/A;u.envMap.value=t.texture,u.samples.value=p,u.weights.value=m,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:S}=this;u.dTheta.value=g,u.mipInt.value=S-n;let w=this._sizeLods[s],O=3*w*(s>S-is?s-S+is:0),P=4*(this._cubeSize-w);Tr(e,O,P,3*w,2*w),l.setRenderTarget(e),l.render(d,jo)}};io=class extends Ke{constructor(t,e,n,s,r,o,a,l,c,h=os){if(h!==os&&h!==fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===os&&(n=xi),n===void 0&&h===fs&&(n=ds),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:rn,this.minFilter=l!==void 0?l:rn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Dh=new Ke,Xc=new io(1,1),Uh=new Yr,Nh=new Ja,Fh=new to,qc=[],Yc=[],Zc=new Float32Array(16),$c=new Float32Array(9),Jc=new Float32Array(4);tl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=eg(e.type)}},el=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Mg(e.type)}},nl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},sa=/(\w+)(\])?(\[|\.)?/g;ls=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Sg(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};bg=37297,Eg=0;Ar=new D;Dg=/^[ \t]*#include +<([\w\d./]+)>/gm;Ug=new Map;Fg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;Wg=0,sl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new rl(t),e.set(t,n)),n}},rl=class{constructor(t){this.id=Wg++,this.code=t,this.usedTimes=0}};Kg=0;ol=class extends Mi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},al=class extends Mi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},e0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,n0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;s0={[ha]:ua,[da]:ma,[fa]:ga,[cs]:pa,[ua]:ha,[ma]:da,[ga]:fa,[pa]:cs};ll=class extends We{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ss=class extends He{constructor(){super(),this.isGroup=!0,this.type="Group"}},c0={type:"move"},Fs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ss,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ss,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ss,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let y of t.hand.values()){let p=e.getJointPose(y,n),m=this._getHandJoint(c,y);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(c0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ss;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},h0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,u0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,cl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Ke,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Oe({vertexShader:h0,fragmentShader:u0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Fe(new gs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},hl=class extends ti{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,y=new cl,p=e.getContextAttributes(),m=null,A=null,S=[],w=[],O=new Pt,P=null,R=new We;R.layers.enable(1),R.viewport=new Me;let F=new We;F.layers.enable(2),F.viewport=new Me;let ot=[R,F],_=new ll;_.layers.enable(1),_.layers.enable(2);let M=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let lt=S[et];return lt===void 0&&(lt=new Fs,S[et]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(et){let lt=S[et];return lt===void 0&&(lt=new Fs,S[et]=lt),lt.getGripSpace()},this.getHand=function(et){let lt=S[et];return lt===void 0&&(lt=new Fs,S[et]=lt),lt.getHandSpace()};function B(et){let lt=w.indexOf(et.inputSource);if(lt===-1)return;let Tt=S[lt];Tt!==void 0&&(Tt.update(et.inputSource,et.frame,c||o),Tt.dispatchEvent({type:et.type,data:et.inputSource}))}function X(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",at);for(let et=0;et<S.length;et++){let lt=w[et];lt!==null&&(w[et]=null,S[et].disconnect(lt))}M=null,Q=null,y.reset(),t.setRenderTarget(m),f=null,u=null,d=null,s=null,A=null,Qt.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(O.width,O.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){r=et,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){a=et,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(et){c=et},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(et){if(s=et,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",X),s.addEventListener("inputsourceschange",at),p.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(O),s.renderState.layers===void 0){let lt={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,lt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),A=new On(f.framebufferWidth,f.framebufferHeight,{format:fn,type:Fn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let lt=null,Tt=null,q=null;p.depth&&(q=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,lt=p.stencil?fs:os,Tt=p.stencil?ds:xi);let zt={colorFormat:e.RGBA8,depthFormat:q,scaleFactor:r};d=new XRWebGLBinding(s,e),u=d.createProjectionLayer(zt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),A=new On(u.textureWidth,u.textureHeight,{format:fn,type:Fn,depthTexture:new io(u.textureWidth,u.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,lt),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Qt.setContext(s),Qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function at(et){for(let lt=0;lt<et.removed.length;lt++){let Tt=et.removed[lt],q=w.indexOf(Tt);q>=0&&(w[q]=null,S[q].disconnect(Tt))}for(let lt=0;lt<et.added.length;lt++){let Tt=et.added[lt],q=w.indexOf(Tt);if(q===-1){for(let Bt=0;Bt<S.length;Bt++)if(Bt>=w.length){w.push(Tt),q=Bt;break}else if(w[Bt]===null){w[Bt]=Tt,q=Bt;break}if(q===-1)break}let zt=S[q];zt&&zt.connect(Tt)}}let k=new D,ht=new D;function Z(et,lt,Tt){k.setFromMatrixPosition(lt.matrixWorld),ht.setFromMatrixPosition(Tt.matrixWorld);let q=k.distanceTo(ht),zt=lt.projectionMatrix.elements,Bt=Tt.projectionMatrix.elements,Yt=zt[14]/(zt[10]-1),Gt=zt[14]/(zt[10]+1),nt=(zt[9]+1)/zt[5],E=(zt[9]-1)/zt[5],gt=(zt[8]-1)/zt[0],ut=(Bt[8]+1)/Bt[0],$=Yt*gt,yt=Yt*ut,Nt=q/(-gt+ut),Rt=Nt*-gt;if(lt.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(Rt),et.translateZ(Nt),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),zt[10]===-1)et.projectionMatrix.copy(lt.projectionMatrix),et.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{let b=Yt+Nt,v=Gt+Nt,U=$-Rt,J=yt+(q-Rt),it=nt*Gt/v*b,tt=E*Gt/v*b;et.projectionMatrix.makePerspective(U,J,it,tt,b,v),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function Mt(et,lt){lt===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(lt.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(s===null)return;let lt=et.near,Tt=et.far;y.texture!==null&&(y.depthNear>0&&(lt=y.depthNear),y.depthFar>0&&(Tt=y.depthFar)),_.near=F.near=R.near=lt,_.far=F.far=R.far=Tt,(M!==_.near||Q!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),M=_.near,Q=_.far);let q=et.parent,zt=_.cameras;Mt(_,q);for(let Bt=0;Bt<zt.length;Bt++)Mt(zt[Bt],q);zt.length===2?Z(_,R,F):_.projectionMatrix.copy(R.projectionMatrix),St(et,_,q)};function St(et,lt,Tt){Tt===null?et.matrix.copy(lt.matrixWorld):(et.matrix.copy(Tt.matrixWorld),et.matrix.invert(),et.matrix.multiply(lt.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(lt.projectionMatrix),et.projectionMatrixInverse.copy(lt.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=Hs*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(et){l=et,u!==null&&(u.fixedFoveation=et),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=et)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(_)};let xt=null;function Zt(et,lt){if(h=lt.getViewerPose(c||o),g=lt,h!==null){let Tt=h.views;f!==null&&(t.setRenderTargetFramebuffer(A,f.framebuffer),t.setRenderTarget(A));let q=!1;Tt.length!==_.cameras.length&&(_.cameras.length=0,q=!0);for(let Bt=0;Bt<Tt.length;Bt++){let Yt=Tt[Bt],Gt=null;if(f!==null)Gt=f.getViewport(Yt);else{let E=d.getViewSubImage(u,Yt);Gt=E.viewport,Bt===0&&(t.setRenderTargetTextures(A,E.colorTexture,u.ignoreDepthValues?void 0:E.depthStencilTexture),t.setRenderTarget(A))}let nt=ot[Bt];nt===void 0&&(nt=new We,nt.layers.enable(Bt),nt.viewport=new Me,ot[Bt]=nt),nt.matrix.fromArray(Yt.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(Yt.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(Gt.x,Gt.y,Gt.width,Gt.height),Bt===0&&(_.matrix.copy(nt.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),q===!0&&_.cameras.push(nt)}let zt=s.enabledFeatures;if(zt&&zt.includes("depth-sensing")){let Bt=d.getDepthInformation(Tt[0]);Bt&&Bt.isValid&&Bt.texture&&y.init(t,Bt,s.renderState)}}for(let Tt=0;Tt<S.length;Tt++){let q=w[Tt],zt=S[Tt];q!==null&&zt!==void 0&&zt.update(q,lt,c||o)}xt&&xt(et,lt),lt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:lt}),g=null}let Qt=new Lh;Qt.setAnimationLoop(Zt),this.setAnimationLoop=function(et){xt=et},this.dispose=function(){}}},di=new pn,d0=new ge;so=class{constructor(t={}){let{canvas:e=gd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=o;let f=new Uint32Array(4),g=new Int32Array(4),y=null,p=null,m=[],A=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_n,this.toneMapping=Qn,this.toneMappingExposure=1;let S=this,w=!1,O=0,P=0,R=null,F=-1,ot=null,_=new Me,M=new Me,Q=null,B=new he(0),X=0,at=e.width,k=e.height,ht=1,Z=null,Mt=null,St=new Me(0,0,at,k),xt=new Me(0,0,at,k),Zt=!1,Qt=new eo,et=!1,lt=!1,Tt=new ge,q=new ge,zt=new D,Bt=new Me,Yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Gt=!1;function nt(){return R===null?ht:1}let E=n;function gt(x,I){return e.getContext(x,I)}try{let x={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r169"),e.addEventListener("webglcontextlost",G,!1),e.addEventListener("webglcontextrestored",ct,!1),e.addEventListener("webglcontextcreationerror",pt,!1),E===null){let I="webgl2";if(E=gt(I,x),E===null)throw gt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let ut,$,yt,Nt,Rt,b,v,U,J,it,tt,Lt,_t,bt,$t,T,Y,j,st,K,Et,vt,Xt,C;function ft(){ut=new Pm(E),ut.init(),vt=new l0(E,ut),$=new Em(E,ut,t,vt),yt=new r0(E),$.reverseDepthBuffer&&yt.buffers.depth.setReversed(!0),Nt=new Dm(E),Rt=new qg,b=new a0(E,ut,yt,Rt,$,vt,Nt),v=new Tm(S),U=new Cm(S),J=new zd(E),Xt=new Sm(E,J),it=new Im(E,J,Nt,Xt),tt=new Nm(E,it,J,Nt),st=new Um(E,$,b),T=new wm(Rt),Lt=new Xg(S,v,U,ut,$,Xt,T),_t=new f0(S,Rt),bt=new Zg,$t=new t0(ut),j=new Mm(S,v,U,yt,tt,u,l),Y=new i0(S,tt,$),C=new p0(E,Nt,$,yt),K=new bm(E,ut,Nt),Et=new Lm(E,ut,Nt),Nt.programs=Lt.programs,S.capabilities=$,S.extensions=ut,S.properties=Rt,S.renderLists=bt,S.shadowMap=Y,S.state=yt,S.info=Nt}ft();let z=new hl(S,E);this.xr=z,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){let x=ut.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){let x=ut.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return ht},this.setPixelRatio=function(x){x!==void 0&&(ht=x,this.setSize(at,k,!1))},this.getSize=function(x){return x.set(at,k)},this.setSize=function(x,I,N=!0){if(z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}at=x,k=I,e.width=Math.floor(x*ht),e.height=Math.floor(I*ht),N===!0&&(e.style.width=x+"px",e.style.height=I+"px"),this.setViewport(0,0,x,I)},this.getDrawingBufferSize=function(x){return x.set(at*ht,k*ht).floor()},this.setDrawingBufferSize=function(x,I,N){at=x,k=I,ht=N,e.width=Math.floor(x*N),e.height=Math.floor(I*N),this.setViewport(0,0,x,I)},this.getCurrentViewport=function(x){return x.copy(_)},this.getViewport=function(x){return x.copy(St)},this.setViewport=function(x,I,N,H){x.isVector4?St.set(x.x,x.y,x.z,x.w):St.set(x,I,N,H),yt.viewport(_.copy(St).multiplyScalar(ht).round())},this.getScissor=function(x){return x.copy(xt)},this.setScissor=function(x,I,N,H){x.isVector4?xt.set(x.x,x.y,x.z,x.w):xt.set(x,I,N,H),yt.scissor(M.copy(xt).multiplyScalar(ht).round())},this.getScissorTest=function(){return Zt},this.setScissorTest=function(x){yt.setScissorTest(Zt=x)},this.setOpaqueSort=function(x){Z=x},this.setTransparentSort=function(x){Mt=x},this.getClearColor=function(x){return x.copy(j.getClearColor())},this.setClearColor=function(){j.setClearColor.apply(j,arguments)},this.getClearAlpha=function(){return j.getClearAlpha()},this.setClearAlpha=function(){j.setClearAlpha.apply(j,arguments)},this.clear=function(x=!0,I=!0,N=!0){let H=0;if(x){let L=!1;if(R!==null){let mt=R.texture.format;L=mt===Ol||mt===Fl||mt===Nl}if(L){let mt=R.texture.type,At=mt===Fn||mt===xi||mt===ks||mt===ds||mt===Dl||mt===Ul,Dt=j.getClearColor(),Ft=j.getClearAlpha(),qt=Dt.r,Wt=Dt.g,Ct=Dt.b;At?(f[0]=qt,f[1]=Wt,f[2]=Ct,f[3]=Ft,E.clearBufferuiv(E.COLOR,0,f)):(g[0]=qt,g[1]=Wt,g[2]=Ct,g[3]=Ft,E.clearBufferiv(E.COLOR,0,g))}else H|=E.COLOR_BUFFER_BIT}I&&(H|=E.DEPTH_BUFFER_BIT,E.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),N&&(H|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",G,!1),e.removeEventListener("webglcontextrestored",ct,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),bt.dispose(),$t.dispose(),Rt.dispose(),v.dispose(),U.dispose(),tt.dispose(),Xt.dispose(),C.dispose(),Lt.dispose(),z.dispose(),z.removeEventListener("sessionstart",ni),z.removeEventListener("sessionend",Ti),Ae.stop()};function G(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function ct(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let x=Nt.autoReset,I=Y.enabled,N=Y.autoUpdate,H=Y.needsUpdate,L=Y.type;ft(),Nt.autoReset=x,Y.enabled=I,Y.autoUpdate=N,Y.needsUpdate=H,Y.type=L}function pt(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function kt(x){let I=x.target;I.removeEventListener("dispose",kt),ne(I)}function ne(x){fe(x),Rt.remove(x)}function fe(x){let I=Rt.get(x).programs;I!==void 0&&(I.forEach(function(N){Lt.releaseProgram(N)}),x.isShaderMaterial&&Lt.releaseShaderCache(x))}this.renderBufferDirect=function(x,I,N,H,L,mt){I===null&&(I=Yt);let At=L.isMesh&&L.matrixWorld.determinant()<0,Dt=Ri(x,I,N,H,L);yt.setMaterial(H,At);let Ft=N.index,qt=1;if(H.wireframe===!0){if(Ft=it.getWireframeAttribute(N),Ft===void 0)return;qt=2}let Wt=N.drawRange,Ct=N.attributes.position,ce=Wt.start*qt,le=(Wt.start+Wt.count)*qt;mt!==null&&(ce=Math.max(ce,mt.start*qt),le=Math.min(le,(mt.start+mt.count)*qt)),Ft!==null?(ce=Math.max(ce,0),le=Math.min(le,Ft.count)):Ct!=null&&(ce=Math.max(ce,0),le=Math.min(le,Ct.count));let _e=le-ce;if(_e<0||_e===1/0)return;Xt.setup(L,H,Dt,N,Ft);let Be,se=K;if(Ft!==null&&(Be=J.get(Ft),se=Et,se.setIndex(Be)),L.isMesh)H.wireframe===!0?(yt.setLineWidth(H.wireframeLinewidth*nt()),se.setMode(E.LINES)):se.setMode(E.TRIANGLES);else if(L.isLine){let Ot=H.linewidth;Ot===void 0&&(Ot=1),yt.setLineWidth(Ot*nt()),L.isLineSegments?se.setMode(E.LINES):L.isLineLoop?se.setMode(E.LINE_LOOP):se.setMode(E.LINE_STRIP)}else L.isPoints?se.setMode(E.POINTS):L.isSprite&&se.setMode(E.TRIANGLES);if(L.isBatchedMesh)if(L._multiDrawInstances!==null)se.renderMultiDrawInstances(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount,L._multiDrawInstances);else if(ut.get("WEBGL_multi_draw"))se.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else{let Ot=L._multiDrawStarts,Ee=L._multiDrawCounts,ae=L._multiDrawCount,qe=Ft?J.get(Ft).bytesPerElement:1,Sn=Rt.get(H).currentProgram.getUniforms();for(let we=0;we<ae;we++)Sn.setValue(E,"_gl_DrawID",we),se.render(Ot[we]/qe,Ee[we])}else if(L.isInstancedMesh)se.renderInstances(ce,_e,L.count);else if(N.isInstancedBufferGeometry){let Ot=N._maxInstanceCount!==void 0?N._maxInstanceCount:1/0,Ee=Math.min(N.instanceCount,Ot);se.renderInstances(ce,_e,Ee)}else se.render(ce,_e)};function Jt(x,I,N){x.transparent===!0&&x.side===Ln&&x.forceSinglePass===!1?(x.side=Je,x.needsUpdate=!0,Mn(x,I,N),x.side=jn,x.needsUpdate=!0,Mn(x,I,N),x.side=Ln):Mn(x,I,N)}this.compile=function(x,I,N=null){N===null&&(N=x),p=$t.get(N),p.init(I),A.push(p),N.traverseVisible(function(L){L.isLight&&L.layers.test(I.layers)&&(p.pushLight(L),L.castShadow&&p.pushShadow(L))}),x!==N&&x.traverseVisible(function(L){L.isLight&&L.layers.test(I.layers)&&(p.pushLight(L),L.castShadow&&p.pushShadow(L))}),p.setupLights();let H=new Set;return x.traverse(function(L){if(!(L.isMesh||L.isPoints||L.isLine||L.isSprite))return;let mt=L.material;if(mt)if(Array.isArray(mt))for(let At=0;At<mt.length;At++){let Dt=mt[At];Jt(Dt,N,L),H.add(Dt)}else Jt(mt,N,L),H.add(mt)}),A.pop(),p=null,H},this.compileAsync=function(x,I,N=null){let H=this.compile(x,I,N);return new Promise(L=>{function mt(){if(H.forEach(function(At){Rt.get(At).currentProgram.isReady()&&H.delete(At)}),H.size===0){L(x);return}setTimeout(mt,10)}ut.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let oe=null;function pe(x){oe&&oe(x)}function ni(){Ae.stop()}function Ti(){Ae.start()}let Ae=new Lh;Ae.setAnimationLoop(pe),typeof self<"u"&&Ae.setContext(self),this.setAnimationLoop=function(x){oe=x,z.setAnimationLoop(x),x===null?Ae.stop():Ae.start()},z.addEventListener("sessionstart",ni),z.addEventListener("sessionend",Ti),this.render=function(x,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(z.cameraAutoUpdate===!0&&z.updateCamera(I),I=z.getCamera()),x.isScene===!0&&x.onBeforeRender(S,x,I,R),p=$t.get(x,A.length),p.init(I),A.push(p),q.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Qt.setFromProjectionMatrix(q),lt=this.localClippingEnabled,et=T.init(this.clippingPlanes,lt),y=bt.get(x,m.length),y.init(),m.push(y),z.enabled===!0&&z.isPresenting===!0){let mt=S.xr.getDepthSensingMesh();mt!==null&&ii(mt,I,-1/0,S.sortObjects)}ii(x,I,0,S.sortObjects),y.finish(),S.sortObjects===!0&&y.sort(Z,Mt),Gt=z.enabled===!1||z.isPresenting===!1||z.hasDepthSensing()===!1,Gt&&j.addToRenderList(y,x),this.info.render.frame++,et===!0&&T.beginShadows();let N=p.state.shadowsArray;Y.render(N,x,I),et===!0&&T.endShadows(),this.info.autoReset===!0&&this.info.reset();let H=y.opaque,L=y.transmissive;if(p.setupLights(),I.isArrayCamera){let mt=I.cameras;if(L.length>0)for(let At=0,Dt=mt.length;At<Dt;At++){let Ft=mt[At];ue(H,L,x,Ft)}Gt&&j.render(x);for(let At=0,Dt=mt.length;At<Dt;At++){let Ft=mt[At];Ai(y,x,Ft,Ft.viewport)}}else L.length>0&&ue(H,L,x,I),Gt&&j.render(x),Ai(y,x,I);R!==null&&(b.updateMultisampleRenderTarget(R),b.updateRenderTargetMipmap(R)),x.isScene===!0&&x.onAfterRender(S,x,I),Xt.resetDefaultState(),F=-1,ot=null,A.pop(),A.length>0?(p=A[A.length-1],et===!0&&T.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?y=m[m.length-1]:y=null};function ii(x,I,N,H){if(x.visible===!1)return;if(x.layers.test(I.layers)){if(x.isGroup)N=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(I);else if(x.isLight)p.pushLight(x),x.castShadow&&p.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||Qt.intersectsSprite(x)){H&&Bt.setFromMatrixPosition(x.matrixWorld).applyMatrix4(q);let At=tt.update(x),Dt=x.material;Dt.visible&&y.push(x,At,Dt,N,Bt.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||Qt.intersectsObject(x))){let At=tt.update(x),Dt=x.material;if(H&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Bt.copy(x.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),Bt.copy(At.boundingSphere.center)),Bt.applyMatrix4(x.matrixWorld).applyMatrix4(q)),Array.isArray(Dt)){let Ft=At.groups;for(let qt=0,Wt=Ft.length;qt<Wt;qt++){let Ct=Ft[qt],ce=Dt[Ct.materialIndex];ce&&ce.visible&&y.push(x,At,ce,N,Bt.z,Ct)}}else Dt.visible&&y.push(x,At,Dt,N,Bt.z,null)}}let mt=x.children;for(let At=0,Dt=mt.length;At<Dt;At++)ii(mt[At],I,N,H)}function Ai(x,I,N,H){let L=x.opaque,mt=x.transmissive,At=x.transparent;p.setupLightsView(N),et===!0&&T.setGlobalState(S.clippingPlanes,N),H&&yt.viewport(_.copy(H)),L.length>0&&si(L,I,N),mt.length>0&&si(mt,I,N),At.length>0&&si(At,I,N),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function ue(x,I,N,H){if((N.isScene===!0?N.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new On(1,1,{generateMipmaps:!0,type:ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float")?Zs:Fn,minFilter:vi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:de.workingColorSpace}));let mt=p.state.transmissionRenderTarget[H.id],At=H.viewport||_;mt.setSize(At.z,At.w);let Dt=S.getRenderTarget();S.setRenderTarget(mt),S.getClearColor(B),X=S.getClearAlpha(),X<1&&S.setClearColor(16777215,.5),S.clear(),Gt&&j.render(N);let Ft=S.toneMapping;S.toneMapping=Qn;let qt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),et===!0&&T.setGlobalState(S.clippingPlanes,H),si(x,N,H),b.updateMultisampleRenderTarget(mt),b.updateRenderTargetMipmap(mt),ut.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let Ct=0,ce=I.length;Ct<ce;Ct++){let le=I[Ct],_e=le.object,Be=le.geometry,se=le.material,Ot=le.group;if(se.side===Ln&&_e.layers.test(H.layers)){let Ee=se.side;se.side=Je,se.needsUpdate=!0,yn(_e,N,H,Be,se,Ot),se.side=Ee,se.needsUpdate=!0,Wt=!0}}Wt===!0&&(b.updateMultisampleRenderTarget(mt),b.updateRenderTargetMipmap(mt))}S.setRenderTarget(Dt),S.setClearColor(B,X),qt!==void 0&&(H.viewport=qt),S.toneMapping=Ft}function si(x,I,N){let H=I.isScene===!0?I.overrideMaterial:null;for(let L=0,mt=x.length;L<mt;L++){let At=x[L],Dt=At.object,Ft=At.geometry,qt=H===null?At.material:H,Wt=At.group;Dt.layers.test(N.layers)&&yn(Dt,I,N,Ft,qt,Wt)}}function yn(x,I,N,H,L,mt){x.onBeforeRender(S,I,N,H,L,mt),x.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),L.onBeforeRender(S,I,N,H,x,mt),L.transparent===!0&&L.side===Ln&&L.forceSinglePass===!1?(L.side=Je,L.needsUpdate=!0,S.renderBufferDirect(N,I,H,L,x,mt),L.side=jn,L.needsUpdate=!0,S.renderBufferDirect(N,I,H,L,x,mt),L.side=Ln):S.renderBufferDirect(N,I,H,L,x,mt),x.onAfterRender(S,I,N,H,L,mt)}function Mn(x,I,N){I.isScene!==!0&&(I=Yt);let H=Rt.get(x),L=p.state.lights,mt=p.state.shadowsArray,At=L.state.version,Dt=Lt.getParameters(x,L.state,mt,I,N),Ft=Lt.getProgramCacheKey(Dt),qt=H.programs;H.environment=x.isMeshStandardMaterial?I.environment:null,H.fog=I.fog,H.envMap=(x.isMeshStandardMaterial?U:v).get(x.envMap||H.environment),H.envMapRotation=H.environment!==null&&x.envMap===null?I.environmentRotation:x.envMapRotation,qt===void 0&&(x.addEventListener("dispose",kt),qt=new Map,H.programs=qt);let Wt=qt.get(Ft);if(Wt!==void 0){if(H.currentProgram===Wt&&H.lightsStateVersion===At)return Bn(x,Dt),Wt}else Dt.uniforms=Lt.getUniforms(x),x.onBeforeCompile(Dt,S),Wt=Lt.acquireProgram(Dt,Ft),qt.set(Ft,Wt),H.uniforms=Dt.uniforms;let Ct=H.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Ct.clippingPlanes=T.uniform),Bn(x,Dt),H.needsLights=Js(x),H.lightsStateVersion=At,H.needsLights&&(Ct.ambientLightColor.value=L.state.ambient,Ct.lightProbe.value=L.state.probe,Ct.directionalLights.value=L.state.directional,Ct.directionalLightShadows.value=L.state.directionalShadow,Ct.spotLights.value=L.state.spot,Ct.spotLightShadows.value=L.state.spotShadow,Ct.rectAreaLights.value=L.state.rectArea,Ct.ltc_1.value=L.state.rectAreaLTC1,Ct.ltc_2.value=L.state.rectAreaLTC2,Ct.pointLights.value=L.state.point,Ct.pointLightShadows.value=L.state.pointShadow,Ct.hemisphereLights.value=L.state.hemi,Ct.directionalShadowMap.value=L.state.directionalShadowMap,Ct.directionalShadowMatrix.value=L.state.directionalShadowMatrix,Ct.spotShadowMap.value=L.state.spotShadowMap,Ct.spotLightMatrix.value=L.state.spotLightMatrix,Ct.spotLightMap.value=L.state.spotLightMap,Ct.pointShadowMap.value=L.state.pointShadowMap,Ct.pointShadowMatrix.value=L.state.pointShadowMatrix),H.currentProgram=Wt,H.uniformsList=null,Wt}function $s(x){if(x.uniformsList===null){let I=x.currentProgram.getUniforms();x.uniformsList=ls.seqWithValue(I.seq,x.uniforms)}return x.uniformsList}function Bn(x,I){let N=Rt.get(x);N.outputColorSpace=I.outputColorSpace,N.batching=I.batching,N.batchingColor=I.batchingColor,N.instancing=I.instancing,N.instancingColor=I.instancingColor,N.instancingMorph=I.instancingMorph,N.skinning=I.skinning,N.morphTargets=I.morphTargets,N.morphNormals=I.morphNormals,N.morphColors=I.morphColors,N.morphTargetsCount=I.morphTargetsCount,N.numClippingPlanes=I.numClippingPlanes,N.numIntersection=I.numClipIntersection,N.vertexAlphas=I.vertexAlphas,N.vertexTangents=I.vertexTangents,N.toneMapping=I.toneMapping}function Ri(x,I,N,H,L){I.isScene!==!0&&(I=Yt),b.resetTextureUnits();let mt=I.fog,At=H.isMeshStandardMaterial?I.environment:null,Dt=R===null?S.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:ei,Ft=(H.isMeshStandardMaterial?U:v).get(H.envMap||At),qt=H.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,Wt=!!N.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ct=!!N.morphAttributes.position,ce=!!N.morphAttributes.normal,le=!!N.morphAttributes.color,_e=Qn;H.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(_e=S.toneMapping);let Be=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,se=Be!==void 0?Be.length:0,Ot=Rt.get(H),Ee=p.state.lights;if(et===!0&&(lt===!0||x!==ot)){let Ie=x===ot&&H.id===F;T.setState(H,x,Ie)}let ae=!1;H.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==Ee.state.version||Ot.outputColorSpace!==Dt||L.isBatchedMesh&&Ot.batching===!1||!L.isBatchedMesh&&Ot.batching===!0||L.isBatchedMesh&&Ot.batchingColor===!0&&L.colorTexture===null||L.isBatchedMesh&&Ot.batchingColor===!1&&L.colorTexture!==null||L.isInstancedMesh&&Ot.instancing===!1||!L.isInstancedMesh&&Ot.instancing===!0||L.isSkinnedMesh&&Ot.skinning===!1||!L.isSkinnedMesh&&Ot.skinning===!0||L.isInstancedMesh&&Ot.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&Ot.instancingColor===!1&&L.instanceColor!==null||L.isInstancedMesh&&Ot.instancingMorph===!0&&L.morphTexture===null||L.isInstancedMesh&&Ot.instancingMorph===!1&&L.morphTexture!==null||Ot.envMap!==Ft||H.fog===!0&&Ot.fog!==mt||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==T.numPlanes||Ot.numIntersection!==T.numIntersection)||Ot.vertexAlphas!==qt||Ot.vertexTangents!==Wt||Ot.morphTargets!==Ct||Ot.morphNormals!==ce||Ot.morphColors!==le||Ot.toneMapping!==_e||Ot.morphTargetsCount!==se)&&(ae=!0):(ae=!0,Ot.__version=H.version);let qe=Ot.currentProgram;ae===!0&&(qe=Mn(H,I,L));let Sn=!1,we=!1,Pi=!1,ve=qe.getUniforms(),an=Ot.uniforms;if(yt.useProgram(qe.program)&&(Sn=!0,we=!0,Pi=!0),H.id!==F&&(F=H.id,we=!0),Sn||ot!==x){$.reverseDepthBuffer?(Tt.copy(x.projectionMatrix),vd(Tt),xd(Tt),ve.setValue(E,"projectionMatrix",Tt)):ve.setValue(E,"projectionMatrix",x.projectionMatrix),ve.setValue(E,"viewMatrix",x.matrixWorldInverse);let Ie=ve.map.cameraPosition;Ie!==void 0&&Ie.setValue(E,zt.setFromMatrixPosition(x.matrixWorld)),$.logarithmicDepthBuffer&&ve.setValue(E,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ve.setValue(E,"isOrthographic",x.isOrthographicCamera===!0),ot!==x&&(ot=x,we=!0,Pi=!0)}if(L.isSkinnedMesh){ve.setOptional(E,L,"bindMatrix"),ve.setOptional(E,L,"bindMatrixInverse");let Ie=L.skeleton;Ie&&(Ie.boneTexture===null&&Ie.computeBoneTexture(),ve.setValue(E,"boneTexture",Ie.boneTexture,b))}L.isBatchedMesh&&(ve.setOptional(E,L,"batchingTexture"),ve.setValue(E,"batchingTexture",L._matricesTexture,b),ve.setOptional(E,L,"batchingIdTexture"),ve.setValue(E,"batchingIdTexture",L._indirectTexture,b),ve.setOptional(E,L,"batchingColorTexture"),L._colorsTexture!==null&&ve.setValue(E,"batchingColorTexture",L._colorsTexture,b));let Ii=N.morphAttributes;if((Ii.position!==void 0||Ii.normal!==void 0||Ii.color!==void 0)&&st.update(L,N,qe),(we||Ot.receiveShadow!==L.receiveShadow)&&(Ot.receiveShadow=L.receiveShadow,ve.setValue(E,"receiveShadow",L.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(an.envMap.value=Ft,an.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&I.environment!==null&&(an.envMapIntensity.value=I.environmentIntensity),we&&(ve.setValue(E,"toneMappingExposure",S.toneMappingExposure),Ot.needsLights&&Ci(an,Pi),mt&&H.fog===!0&&_t.refreshFogUniforms(an,mt),_t.refreshMaterialUniforms(an,H,ht,k,p.state.transmissionRenderTarget[x.id]),ls.upload(E,$s(Ot),an,b)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(ls.upload(E,$s(Ot),an,b),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ve.setValue(E,"center",L.center),ve.setValue(E,"modelViewMatrix",L.modelViewMatrix),ve.setValue(E,"normalMatrix",L.normalMatrix),ve.setValue(E,"modelMatrix",L.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let Ie=H.uniformsGroups;for(let Ye=0,ys=Ie.length;Ye<ys;Ye++){let Li=Ie[Ye];C.update(Li,qe),C.bind(Li,qe)}}return qe}function Ci(x,I){x.ambientLightColor.needsUpdate=I,x.lightProbe.needsUpdate=I,x.directionalLights.needsUpdate=I,x.directionalLightShadows.needsUpdate=I,x.pointLights.needsUpdate=I,x.pointLightShadows.needsUpdate=I,x.spotLights.needsUpdate=I,x.spotLightShadows.needsUpdate=I,x.rectAreaLights.needsUpdate=I,x.hemisphereLights.needsUpdate=I}function Js(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(x,I,N){Rt.get(x.texture).__webglTexture=I,Rt.get(x.depthTexture).__webglTexture=N;let H=Rt.get(x);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=N===void 0,H.__autoAllocateDepthBuffer||ut.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,I){let N=Rt.get(x);N.__webglFramebuffer=I,N.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(x,I=0,N=0){R=x,O=I,P=N;let H=!0,L=null,mt=!1,At=!1;if(x){let Ft=Rt.get(x);if(Ft.__useDefaultFramebuffer!==void 0)yt.bindFramebuffer(E.FRAMEBUFFER,null),H=!1;else if(Ft.__webglFramebuffer===void 0)b.setupRenderTarget(x);else if(Ft.__hasExternalTextures)b.rebindTextures(x,Rt.get(x.texture).__webglTexture,Rt.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){let Ct=x.depthTexture;if(Ft.__boundDepthTexture!==Ct){if(Ct!==null&&Rt.has(Ct)&&(x.width!==Ct.image.width||x.height!==Ct.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(x)}}let qt=x.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(At=!0);let Wt=Rt.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Wt[I])?L=Wt[I][N]:L=Wt[I],mt=!0):x.samples>0&&b.useMultisampledRTT(x)===!1?L=Rt.get(x).__webglMultisampledFramebuffer:Array.isArray(Wt)?L=Wt[N]:L=Wt,_.copy(x.viewport),M.copy(x.scissor),Q=x.scissorTest}else _.copy(St).multiplyScalar(ht).floor(),M.copy(xt).multiplyScalar(ht).floor(),Q=Zt;if(yt.bindFramebuffer(E.FRAMEBUFFER,L)&&H&&yt.drawBuffers(x,L),yt.viewport(_),yt.scissor(M),yt.setScissorTest(Q),mt){let Ft=Rt.get(x.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+I,Ft.__webglTexture,N)}else if(At){let Ft=Rt.get(x.texture),qt=I||0;E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,Ft.__webglTexture,N||0,qt)}F=-1},this.readRenderTargetPixels=function(x,I,N,H,L,mt,At){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=Rt.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&At!==void 0&&(Dt=Dt[At]),Dt){yt.bindFramebuffer(E.FRAMEBUFFER,Dt);try{let Ft=x.texture,qt=Ft.format,Wt=Ft.type;if(!$.textureFormatReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$.textureTypeReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=x.width-H&&N>=0&&N<=x.height-L&&E.readPixels(I,N,H,L,vt.convert(qt),vt.convert(Wt),mt)}finally{let Ft=R!==null?Rt.get(R).__webglFramebuffer:null;yt.bindFramebuffer(E.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(x,I,N,H,L,mt,At){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=Rt.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&At!==void 0&&(Dt=Dt[At]),Dt){let Ft=x.texture,qt=Ft.format,Wt=Ft.type;if(!$.textureFormatReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=x.width-H&&N>=0&&N<=x.height-L){yt.bindFramebuffer(E.FRAMEBUFFER,Dt);let Ct=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,Ct),E.bufferData(E.PIXEL_PACK_BUFFER,mt.byteLength,E.STREAM_READ),E.readPixels(I,N,H,L,vt.convert(qt),vt.convert(Wt),0);let ce=R!==null?Rt.get(R).__webglFramebuffer:null;yt.bindFramebuffer(E.FRAMEBUFFER,ce);let le=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await _d(E,le,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,Ct),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,mt),E.deleteBuffer(Ct),E.deleteSync(le),mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(x,I=null,N=0){x.isTexture!==!0&&(zr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,x=arguments[1]);let H=Math.pow(2,-N),L=Math.floor(x.image.width*H),mt=Math.floor(x.image.height*H),At=I!==null?I.x:0,Dt=I!==null?I.y:0;b.setTexture2D(x,0),E.copyTexSubImage2D(E.TEXTURE_2D,N,0,0,At,Dt,L,mt),yt.unbindTexture()},this.copyTextureToTexture=function(x,I,N=null,H=null,L=0){x.isTexture!==!0&&(zr("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,x=arguments[1],I=arguments[2],L=arguments[3]||0,N=null);let mt,At,Dt,Ft,qt,Wt;N!==null?(mt=N.max.x-N.min.x,At=N.max.y-N.min.y,Dt=N.min.x,Ft=N.min.y):(mt=x.image.width,At=x.image.height,Dt=0,Ft=0),H!==null?(qt=H.x,Wt=H.y):(qt=0,Wt=0);let Ct=vt.convert(I.format),ce=vt.convert(I.type);b.setTexture2D(I,0),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,I.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,I.unpackAlignment);let le=E.getParameter(E.UNPACK_ROW_LENGTH),_e=E.getParameter(E.UNPACK_IMAGE_HEIGHT),Be=E.getParameter(E.UNPACK_SKIP_PIXELS),se=E.getParameter(E.UNPACK_SKIP_ROWS),Ot=E.getParameter(E.UNPACK_SKIP_IMAGES),Ee=x.isCompressedTexture?x.mipmaps[L]:x.image;E.pixelStorei(E.UNPACK_ROW_LENGTH,Ee.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Ee.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Dt),E.pixelStorei(E.UNPACK_SKIP_ROWS,Ft),x.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,L,qt,Wt,mt,At,Ct,ce,Ee.data):x.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,L,qt,Wt,Ee.width,Ee.height,Ct,Ee.data):E.texSubImage2D(E.TEXTURE_2D,L,qt,Wt,mt,At,Ct,ce,Ee),E.pixelStorei(E.UNPACK_ROW_LENGTH,le),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,_e),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Be),E.pixelStorei(E.UNPACK_SKIP_ROWS,se),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Ot),L===0&&I.generateMipmaps&&E.generateMipmap(E.TEXTURE_2D),yt.unbindTexture()},this.copyTextureToTexture3D=function(x,I,N=null,H=null,L=0){x.isTexture!==!0&&(zr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),N=arguments[0]||null,H=arguments[1]||null,x=arguments[2],I=arguments[3],L=arguments[4]||0);let mt,At,Dt,Ft,qt,Wt,Ct,ce,le,_e=x.isCompressedTexture?x.mipmaps[L]:x.image;N!==null?(mt=N.max.x-N.min.x,At=N.max.y-N.min.y,Dt=N.max.z-N.min.z,Ft=N.min.x,qt=N.min.y,Wt=N.min.z):(mt=_e.width,At=_e.height,Dt=_e.depth,Ft=0,qt=0,Wt=0),H!==null?(Ct=H.x,ce=H.y,le=H.z):(Ct=0,ce=0,le=0);let Be=vt.convert(I.format),se=vt.convert(I.type),Ot;if(I.isData3DTexture)b.setTexture3D(I,0),Ot=E.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)b.setTexture2DArray(I,0),Ot=E.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,I.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,I.unpackAlignment);let Ee=E.getParameter(E.UNPACK_ROW_LENGTH),ae=E.getParameter(E.UNPACK_IMAGE_HEIGHT),qe=E.getParameter(E.UNPACK_SKIP_PIXELS),Sn=E.getParameter(E.UNPACK_SKIP_ROWS),we=E.getParameter(E.UNPACK_SKIP_IMAGES);E.pixelStorei(E.UNPACK_ROW_LENGTH,_e.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,_e.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Ft),E.pixelStorei(E.UNPACK_SKIP_ROWS,qt),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Wt),x.isDataTexture||x.isData3DTexture?E.texSubImage3D(Ot,L,Ct,ce,le,mt,At,Dt,Be,se,_e.data):I.isCompressedArrayTexture?E.compressedTexSubImage3D(Ot,L,Ct,ce,le,mt,At,Dt,Be,_e.data):E.texSubImage3D(Ot,L,Ct,ce,le,mt,At,Dt,Be,se,_e),E.pixelStorei(E.UNPACK_ROW_LENGTH,Ee),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,ae),E.pixelStorei(E.UNPACK_SKIP_PIXELS,qe),E.pixelStorei(E.UNPACK_SKIP_ROWS,Sn),E.pixelStorei(E.UNPACK_SKIP_IMAGES,we),L===0&&I.generateMipmaps&&E.generateMipmap(Ot),yt.unbindTexture()},this.initRenderTarget=function(x){Rt.get(x).__webglFramebuffer===void 0&&b.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?b.setTextureCube(x,0):x.isData3DTexture?b.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?b.setTexture2DArray(x,0):b.setTexture2D(x,0),yt.unbindTexture()},this.resetState=function(){O=0,P=0,R=null,yt.reset(),Xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Bl?"display-p3":"srgb",e.unpackColorSpace=de.workingColorSpace===mo?"display-p3":"srgb"}},ro=class extends He{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pn,this.environmentIntensity=1,this.environmentRotation=new pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},ul=class extends Mi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new he(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},lh=new ge,dl=new Zr,Rr=new ps,Cr=new D,_s=class extends He{constructor(t=new tn,e=new ul){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Rr.copy(n.boundingSphere),Rr.applyMatrix4(s),Rr.radius+=r,t.ray.intersectsSphere(Rr)===!1)return;lh.copy(s).invert(),dl.copy(t.ray).applyMatrix4(lh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=u,y=f;g<y;g++){let p=c.getX(g);Cr.fromBufferAttribute(d,p),ch(Cr,p,l,s,t,e,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=u,y=f;g<y;g++)Cr.fromBufferAttribute(d,g),ch(Cr,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};on=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new Pt:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new D,s=[],r=[],o=[],a=new D,l=new ge;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new D)}r[0]=new D,o[0]=new D;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Ne(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Ne(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Gs=class extends on{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Pt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},fl=class extends Gs{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};Pr=new D,ra=new Hl,oa=new Hl,aa=new Hl,pl=class extends on{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new D){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Pr.subVectors(s[0],s[1]).add(s[0]),c=Pr);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Pr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Pr),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),y=Math.pow(d.distanceToSquared(u),f),p=Math.pow(u.distanceToSquared(h),f);y<1e-4&&(y=1),g<1e-4&&(g=y),p<1e-4&&(p=y),ra.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,y,p),oa.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,y,p),aa.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,y,p)}else this.curveType==="catmullrom"&&(ra.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),oa.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),aa.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(ra.calc(l),oa.calc(l),aa.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};oo=class extends on{constructor(t=new Pt,e=new Pt,n=new Pt,s=new Pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Pt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Bs(t,s.x,r.x,o.x,a.x),Bs(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ml=class extends on{constructor(t=new D,e=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new D){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Bs(t,s.x,r.x,o.x,a.x),Bs(t,s.y,r.y,o.y,a.y),Bs(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ao=class extends on{constructor(t=new Pt,e=new Pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Pt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},gl=class extends on{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},lo=class extends on{constructor(t=new Pt,e=new Pt,n=new Pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Pt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Os(t,s.x,r.x,o.x),Os(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},_l=class extends on{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Os(t,s.x,r.x,o.x),Os(t,s.y,r.y,o.y),Os(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},co=class extends on{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Pt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(hh(a,l.x,c.x,h.x,d.x),hh(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Pt().fromArray(s))}return this}},vl=Object.freeze({__proto__:null,ArcCurve:fl,CatmullRomCurve3:pl,CubicBezierCurve:oo,CubicBezierCurve3:ml,EllipseCurve:Gs,LineCurve:ao,LineCurve3:gl,QuadraticBezierCurve:lo,QuadraticBezierCurve3:_l,SplineCurve:co}),xl=class extends on{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new vl[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new vl[s.type]().fromJSON(s))}return this}},ho=class extends xl{constructor(t){super(),this.type="Path",this.currentPoint=new Pt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new ao(this.currentPoint.clone(),new Pt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new lo(this.currentPoint.clone(),new Pt(t,e),new Pt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new oo(this.currentPoint.clone(),new Pt(t,e),new Pt(n,s),new Pt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new co(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new Gs(t,e,n,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ws=class extends ho{constructor(t){super(t),this.uuid=wi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new ho().fromJSON(s))}return this}},S0={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Oh(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,d,u,f;if(n&&(r=A0(i,t,r,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let g=e;g<s;g+=e)d=i[g],u=i[g+1],d<a&&(a=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return Xs(r,o,e,a,l,f,0),o}};zs=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];dh(t),fh(n,t);let o=t.length;e.forEach(dh);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,fh(n,e[l]);let a=S0.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};uo=class i extends tn{constructor(t=new Ws([new Pt(.5,.5),new Pt(-.5,.5),new Pt(-.5,-.5),new Pt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new Re(s,3)),this.setAttribute("uv",new Re(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,A=e.UVGenerator!==void 0?e.UVGenerator:z0,S,w=!1,O,P,R,F;m&&(S=m.getSpacedPoints(h),w=!0,u=!1,O=m.computeFrenetFrames(h,!1),P=new D,R=new D,F=new D),u||(p=0,f=0,g=0,y=0);let ot=a.extractPoints(c),_=ot.shape,M=ot.holes;if(!zs.isClockWise(_)){_=_.reverse();for(let nt=0,E=M.length;nt<E;nt++){let gt=M[nt];zs.isClockWise(gt)&&(M[nt]=gt.reverse())}}let B=zs.triangulateShape(_,M),X=_;for(let nt=0,E=M.length;nt<E;nt++){let gt=M[nt];_=_.concat(gt)}function at(nt,E,gt){return E||console.error("THREE.ExtrudeGeometry: vec does not exist"),nt.clone().addScaledVector(E,gt)}let k=_.length,ht=B.length;function Z(nt,E,gt){let ut,$,yt,Nt=nt.x-E.x,Rt=nt.y-E.y,b=gt.x-nt.x,v=gt.y-nt.y,U=Nt*Nt+Rt*Rt,J=Nt*v-Rt*b;if(Math.abs(J)>Number.EPSILON){let it=Math.sqrt(U),tt=Math.sqrt(b*b+v*v),Lt=E.x-Rt/it,_t=E.y+Nt/it,bt=gt.x-v/tt,$t=gt.y+b/tt,T=((bt-Lt)*v-($t-_t)*b)/(Nt*v-Rt*b);ut=Lt+Nt*T-nt.x,$=_t+Rt*T-nt.y;let Y=ut*ut+$*$;if(Y<=2)return new Pt(ut,$);yt=Math.sqrt(Y/2)}else{let it=!1;Nt>Number.EPSILON?b>Number.EPSILON&&(it=!0):Nt<-Number.EPSILON?b<-Number.EPSILON&&(it=!0):Math.sign(Rt)===Math.sign(v)&&(it=!0),it?(ut=-Rt,$=Nt,yt=Math.sqrt(U)):(ut=Nt,$=Rt,yt=Math.sqrt(U/2))}return new Pt(ut/yt,$/yt)}let Mt=[];for(let nt=0,E=X.length,gt=E-1,ut=nt+1;nt<E;nt++,gt++,ut++)gt===E&&(gt=0),ut===E&&(ut=0),Mt[nt]=Z(X[nt],X[gt],X[ut]);let St=[],xt,Zt=Mt.concat();for(let nt=0,E=M.length;nt<E;nt++){let gt=M[nt];xt=[];for(let ut=0,$=gt.length,yt=$-1,Nt=ut+1;ut<$;ut++,yt++,Nt++)yt===$&&(yt=0),Nt===$&&(Nt=0),xt[ut]=Z(gt[ut],gt[yt],gt[Nt]);St.push(xt),Zt=Zt.concat(xt)}for(let nt=0;nt<p;nt++){let E=nt/p,gt=f*Math.cos(E*Math.PI/2),ut=g*Math.sin(E*Math.PI/2)+y;for(let $=0,yt=X.length;$<yt;$++){let Nt=at(X[$],Mt[$],ut);q(Nt.x,Nt.y,-gt)}for(let $=0,yt=M.length;$<yt;$++){let Nt=M[$];xt=St[$];for(let Rt=0,b=Nt.length;Rt<b;Rt++){let v=at(Nt[Rt],xt[Rt],ut);q(v.x,v.y,-gt)}}}let Qt=g+y;for(let nt=0;nt<k;nt++){let E=u?at(_[nt],Zt[nt],Qt):_[nt];w?(R.copy(O.normals[0]).multiplyScalar(E.x),P.copy(O.binormals[0]).multiplyScalar(E.y),F.copy(S[0]).add(R).add(P),q(F.x,F.y,F.z)):q(E.x,E.y,0)}for(let nt=1;nt<=h;nt++)for(let E=0;E<k;E++){let gt=u?at(_[E],Zt[E],Qt):_[E];w?(R.copy(O.normals[nt]).multiplyScalar(gt.x),P.copy(O.binormals[nt]).multiplyScalar(gt.y),F.copy(S[nt]).add(R).add(P),q(F.x,F.y,F.z)):q(gt.x,gt.y,d/h*nt)}for(let nt=p-1;nt>=0;nt--){let E=nt/p,gt=f*Math.cos(E*Math.PI/2),ut=g*Math.sin(E*Math.PI/2)+y;for(let $=0,yt=X.length;$<yt;$++){let Nt=at(X[$],Mt[$],ut);q(Nt.x,Nt.y,d+gt)}for(let $=0,yt=M.length;$<yt;$++){let Nt=M[$];xt=St[$];for(let Rt=0,b=Nt.length;Rt<b;Rt++){let v=at(Nt[Rt],xt[Rt],ut);w?q(v.x,v.y+S[h-1].y,S[h-1].x+gt):q(v.x,v.y,d+gt)}}}et(),lt();function et(){let nt=s.length/3;if(u){let E=0,gt=k*E;for(let ut=0;ut<ht;ut++){let $=B[ut];zt($[2]+gt,$[1]+gt,$[0]+gt)}E=h+p*2,gt=k*E;for(let ut=0;ut<ht;ut++){let $=B[ut];zt($[0]+gt,$[1]+gt,$[2]+gt)}}else{for(let E=0;E<ht;E++){let gt=B[E];zt(gt[2],gt[1],gt[0])}for(let E=0;E<ht;E++){let gt=B[E];zt(gt[0]+k*h,gt[1]+k*h,gt[2]+k*h)}}n.addGroup(nt,s.length/3-nt,0)}function lt(){let nt=s.length/3,E=0;Tt(X,E),E+=X.length;for(let gt=0,ut=M.length;gt<ut;gt++){let $=M[gt];Tt($,E),E+=$.length}n.addGroup(nt,s.length/3-nt,1)}function Tt(nt,E){let gt=nt.length;for(;--gt>=0;){let ut=gt,$=gt-1;$<0&&($=nt.length-1);for(let yt=0,Nt=h+p*2;yt<Nt;yt++){let Rt=k*yt,b=k*(yt+1),v=E+ut+Rt,U=E+$+Rt,J=E+$+b,it=E+ut+b;Bt(v,U,J,it)}}}function q(nt,E,gt){l.push(nt),l.push(E),l.push(gt)}function zt(nt,E,gt){Yt(nt),Yt(E),Yt(gt);let ut=s.length/3,$=A.generateTopUV(n,s,ut-3,ut-2,ut-1);Gt($[0]),Gt($[1]),Gt($[2])}function Bt(nt,E,gt,ut){Yt(nt),Yt(E),Yt(ut),Yt(E),Yt(gt),Yt(ut);let $=s.length/3,yt=A.generateSideWallUV(n,s,$-6,$-3,$-2,$-1);Gt(yt[0]),Gt(yt[1]),Gt(yt[3]),Gt(yt[1]),Gt(yt[2]),Gt(yt[3])}function Yt(nt){s.push(l[nt*3+0]),s.push(l[nt*3+1]),s.push(l[nt*3+2])}function Gt(nt){r.push(nt.x),r.push(nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return k0(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new vl[s.type]().fromJSON(s)),new i(n,t.options)}},z0={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new Pt(r,o),new Pt(a,l),new Pt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[s*3],f=t[s*3+1],g=t[s*3+2],y=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Pt(o,1-l),new Pt(c,1-d),new Pt(u,1-g),new Pt(y,1-m)]:[new Pt(a,1-l),new Pt(h,1-d),new Pt(f,1-g),new Pt(p,1-m)]}};vs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Sl=class extends vs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:mc,endingEnd:mc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case gc:r=t,a=2*e-n;break;case _c:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case gc:o=t,l=2*n-e;break;case _c:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),y=g*g,p=y*g,m=-u*p+2*u*y-u*g,A=(1+u)*p+(-1.5-2*u)*y+(-.5+u)*g+1,S=(-1-f)*p+(1.5+f)*y+.5*g,w=f*p-f*y;for(let O=0;O!==a;++O)r[O]=m*o[h+O]+A*o[c+O]+S*o[l+O]+w*o[d+O];return r}},bl=class extends vs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},El=class extends vs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},mn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Dr(e,this.TimeBufferType),this.values=Dr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Dr(t.times,Array),values:Dr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new El(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new bl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Sl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case kr:e=this.InterpolantFactoryMethodDiscrete;break;case Ya:e=this.InterpolantFactoryMethodLinear;break;case Io:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return kr;case this.InterpolantFactoryMethodLinear:return Ya;case this.InterpolantFactoryMethodSmooth:return Io}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&H0(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Io,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){let y=e[d+g];if(y!==e[u+g]||y!==e[f+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};mn.prototype.TimeBufferType=Float32Array;mn.prototype.ValueBufferType=Float32Array;mn.prototype.DefaultInterpolation=Ya;bi=class extends mn{constructor(t,e,n){super(t,e,n)}};bi.prototype.ValueTypeName="bool";bi.prototype.ValueBufferType=Array;bi.prototype.DefaultInterpolation=kr;bi.prototype.InterpolantFactoryMethodLinear=void 0;bi.prototype.InterpolantFactoryMethodSmooth=void 0;wl=class extends mn{};wl.prototype.ValueTypeName="color";Tl=class extends mn{};Tl.prototype.ValueTypeName="number";Al=class extends vs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)xn.slerpFlat(r,0,o,c-a,o,c,l);return r}},fo=class extends mn{InterpolantFactoryMethodLinear(t){return new Al(this.times,this.values,this.getValueSize(),t)}};fo.prototype.ValueTypeName="quaternion";fo.prototype.InterpolantFactoryMethodSmooth=void 0;Ei=class extends mn{constructor(t,e,n){super(t,e,n)}};Ei.prototype.ValueTypeName="string";Ei.prototype.ValueBufferType=Array;Ei.prototype.DefaultInterpolation=kr;Ei.prototype.InterpolantFactoryMethodLinear=void 0;Ei.prototype.InterpolantFactoryMethodSmooth=void 0;Rl=class extends mn{};Rl.prototype.ValueTypeName="vector";Cl=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},V0=new Cl,Pl=class{constructor(t){this.manager=t!==void 0?t:V0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Pl.DEFAULT_MATERIAL_NAME="__DEFAULT";Vl="\\[\\]\\.:\\/",G0=new RegExp("["+Vl+"]","g"),Gl="[^"+Vl+"]",W0="[^"+Vl.replace("\\.","")+"]",X0=/((?:WC+[\/:])*)/.source.replace("WC",Gl),q0=/(WCOD+)?/.source.replace("WCOD",W0),Y0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gl),Z0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gl),$0=new RegExp("^"+X0+q0+Y0+Z0+"$"),J0=["material","materials","bones","map"],Il=class{constructor(t,e,n){let s=n||Se.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Se=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(G0,"")}static parseTrackName(t){let e=$0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);J0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Se.Composite=Il;Se.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Se.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Se.prototype.GetterByBindingType=[Se.prototype._getValue_direct,Se.prototype._getValue_array,Se.prototype._getValue_arrayElement,Se.prototype._getValue_toArray];Se.prototype.SetterByBindingTypeAndVersioning=[[Se.prototype._setValue_direct,Se.prototype._setValue_direct_setNeedsUpdate,Se.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_array,Se.prototype._setValue_array_setNeedsUpdate,Se.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_arrayElement,Se.prototype._setValue_arrayElement_setNeedsUpdate,Se.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_fromArray,Se.prototype._setValue_fromArray_setNeedsUpdate,Se.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];p_=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"169"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="169")});var Gh={};iu(Gh,{startWorld:()=>t_});function Q0(i){return function(){i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}async function j0(i,t=512){try{let e=await fetch(i);if(!e.ok)return null;let n=await e.text();return/<svg[^>]*\swidth=/.test(n)||(n=n.replace(/<svg\b/,`<svg width="${t}" height="${t}"`)),await Vh("data:image/svg+xml;charset=utf-8,"+encodeURIComponent(n))}catch{return null}}function Vh(i){return new Promise(t=>{let e=new Image;e.onload=()=>t(e),e.onerror=()=>t(null),e.src=i})}async function t_(i,t,e,n){let s=matchMedia("(hover:hover) and (pointer:fine)").matches&&!n,r=[...i.querySelectorAll(".lp-row")],o=r.map(W=>W.dataset.k||""),a=o.length,l=[1,2,3].map(W=>r.findIndex(V=>V.dataset.off===String(W))),c=i.querySelector(".lp-world");if(!c)return null;let h=Q0(20260926),d=Math.PI*2,u=null,f=()=>{if(u!==null){let dt=u;return u=null,dt}let W=0;for(;W===0;)W=h();let V=h(),rt=Math.sqrt(-2*Math.log(W));return u=rt*Math.sin(d*V),rt*Math.cos(d*V)},g;try{g=new so({canvas:c,antialias:!0,alpha:!0,premultipliedAlpha:!0,powerPreference:"high-performance"})}catch(W){return console.warn("world",W),null}g.setClearColor(16777215,0);let y=getComputedStyle(i),p=y.getPropertyValue("--bg-surface").trim()||"#ffffff",m=y.getPropertyValue("--text-action").trim()||"#1c6a76",A=`<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="26 34 46 46"><defs><clipPath id="w"><rect x="26" y="34" width="46" height="46" rx="10.8"/></clipPath></defs><rect x="26" y="34" width="46" height="46" rx="10.8" fill="${p}"/><g clip-path="url(#w)"><circle cx="40" cy="60" r="23" fill="none" stroke="${m}" stroke-width="15"/><rect x="64" y="6" width="15" height="84" rx="7.5" fill="${m}"/></g></svg>`,S=`
  float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float vnoise(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
    return mix(mix(hash(i), hash(i+vec2(1.0,0.0)), f.x), mix(hash(i+vec2(0.0,1.0)), hash(i+vec2(1.0,1.0)), f.x), f.y); }
  float dnoise(vec2 uv){ return vnoise(uv*5.0+3.1)*0.7 + vnoise(uv*11.0-7.3)*0.3; }
  `,w=`
  const vec3 PETROL = vec3(0.1098, 0.4157, 0.4627);
  const vec3 PDEEP = vec3(0.0902, 0.3529, 0.3922);
  const vec3 PLIGHT = vec3(0.4196, 0.6902, 0.7294);
  const vec3 PPALE = vec3(0.4980, 0.7373, 0.7725);
  const vec3 AMBERD = vec3(0.8392, 0.6627, 0.3176);
  `,[O,P]=await Promise.all([Promise.all(o.map(W=>j0(`visuals/logos/${W}.svg`))),Vh("data:image/svg+xml;charset=utf-8,"+encodeURIComponent(A))]),R=t.mobile,F=Math.min(devicePixelRatio||1,R?1.5:2);g.setPixelRatio(F),g.setSize(t.W,t.H,!1);let ot=new ro,_=35,M=16,Q=Math.tan(Rh.degToRad(_/2)),B=new We(_,t.W/t.H,.1,200);B.position.set(0,0,M);let X=(W=0)=>2*(M-W)*Q,at=()=>t.H/X(0),k=(W,V,rt=0)=>{let dt=X(rt),It=dt*(t.W/t.H);return[(W/t.W-.5)*It,(.5-V/t.H)*dt]},ht=g.capabilities.getMaxAnisotropy(),Z=[],Mt=W=>{let V=new Ke(W);return V.anisotropy=Math.min(8,ht),V.needsUpdate=!0,Z.push(V),V},St=512,xt=(W,V,rt=0)=>{let dt=document.createElement("canvas");dt.width=dt.height=St;let It=dt.getContext("2d");return It.fillStyle=V,It.fillRect(0,0,St,St),W&&(It.imageSmoothingQuality="high",It.drawImage(W,-St*rt,-St*rt,St*(1+2*rt),St*(1+2*rt))),dt},Zt=W=>{let V=document.createElement("canvas");V.width=V.height=8;let rt=V.getContext("2d");rt.drawImage(W,0,0,8,8);let dt=rt.getImageData(0,0,8,8).data,It=0,Ut=0,jt=0,re=0;for(let Ze=0;Ze<8;Ze++)for(let en=0;en<8;en++){if(en>0&&en<7&&Ze>0&&Ze<7)continue;let bs=(Ze*8+en)*4;It+=dt[bs],Ut+=dt[bs+1],jt+=dt[bs+2],re++}It/=re*255,Ut/=re*255,jt/=re*255;let xe=.299*It+.587*Ut+.114*jt,me=xe>.72?.84:.9,ri=new D(It*me,Ut*me,jt*me);return ri.pale=xe>.72,ri},Qt=O.map(W=>xt(W,"#ffffff")),et=Qt.map(Mt),lt=Qt.map(Zt),Tt=Mt(xt(P,m,.012)),q=128,zt=.62,Bt=(()=>{try{let W=document.createElement("canvas").getContext("2d");return!W||!("filter"in W)?!1:(W.filter="blur(2px)",W.filter==="blur(2px)")}catch{return!1}})(),Yt=(W,V,rt,dt,It)=>{W.beginPath(),W.moveTo(V+It,rt),W.arcTo(V+dt,rt,V+dt,rt+dt,It),W.arcTo(V+dt,rt+dt,V,rt+dt,It),W.arcTo(V,rt+dt,V,rt,It),W.arcTo(V,rt,V+dt,rt,It),W.closePath()},Gt=Qt.map(W=>{let V=document.createElement("canvas");V.width=V.height=q;let rt=V.getContext("2d"),dt=q*zt,It=(q-dt)/2;rt.save(),Yt(rt,It,It,dt,dt*.235),rt.clip(),rt.drawImage(W,It,It,dt,dt),rt.restore(),Yt(rt,It+.5,It+.5,dt-1,dt*.235),rt.strokeStyle="rgba(20,27,29,0.16)",rt.lineWidth=1.5,rt.stroke();let Ut=document.createElement("canvas");Ut.width=Ut.height=q;let jt=Ut.getContext("2d");if(Bt)jt.filter="blur("+(q*.07).toFixed(1)+"px)",jt.drawImage(V,0,0);else{let re=document.createElement("canvas");re.width=re.height=22;let xe=re.getContext("2d");xe.imageSmoothingQuality="high",xe.drawImage(V,0,0,22,22),jt.imageSmoothingQuality="high",jt.drawImage(re,0,0,q,q)}return Mt(Ut)}),nt=.235,E=.09,gt=.03,ut=new Ws;{let V=nt;ut.moveTo(-.5+V,-.5),ut.lineTo(.5-V,-.5),ut.quadraticCurveTo(.5,-.5,.5,-.5+V),ut.lineTo(.5,.5-V),ut.quadraticCurveTo(.5,.5,.5-V,.5),ut.lineTo(-.5+V,.5),ut.quadraticCurveTo(-.5,.5,-.5,.5-V),ut.lineTo(-.5,-.5+V),ut.quadraticCurveTo(-.5,-.5,-.5+V,-.5)}let $=new uo(ut,{depth:E,bevelEnabled:!0,bevelThickness:gt,bevelSize:.028,bevelSegments:4,curveSegments:12});$.translate(0,0,-E/2);let yt=E/2+gt,Nt=`
    varying vec3 vLocal; varying vec3 vObjN; varying vec3 vN; varying vec3 vView;
    void main(){
      vLocal = position; vObjN = normal;
      vN = normalize(normalMatrix * normal);
      vec4 mv = modelViewMatrix * vec4(position, 1.0);
      vView = mv.xyz;
      gl_Position = projectionMatrix * mv;
    }`,Rt=`
    uniform sampler2D uMap;
    uniform vec3 uSide; uniform float uRimK;
    uniform float uOpacity, uDis, uBlur, uFog, uTime, uSeed, uSheen;
    varying vec3 vLocal; varying vec3 vObjN; varying vec3 vN; varying vec3 vView;
    ${S}
    ${w}
    float sdRound(vec2 p){ vec2 q = abs(p) - vec2(0.5 - ${nt.toFixed(3)}); return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - ${nt.toFixed(3)}; }
    void main(){
      vec2 p = vLocal.xy;
      float n = dnoise(p);
      float thr = n * 0.55 + 0.02;
      if (uDis > 0.0 && uDis > thr) discard;
      vec3 N = normalize(vN);
      vec3 V = normalize(-vView);
      vec3 L = normalize(vec3(-0.4, 0.8, 0.6));
      vec3 H = normalize(L + V);
      float diff = max(dot(N, L), 0.0);
      float spec = pow(max(dot(N, H), 0.0), 60.0);
      vec2 uv = clamp(p + 0.5, 0.0, 1.0);
      vec3 col;
      float sd = sdRound(p);
      if (vObjN.z > 0.6 || vObjN.z < -0.6) {
        vec2 fuv = vObjN.z > 0.0 ? uv : vec2(1.0 - uv.x, uv.y);
        col = texture2D(uMap, fuv, uBlur).rgb;
        if (vObjN.z > 0.0) {
          float band = smoothstep(0.16, 0.0, abs((uv.x - uv.y) * 0.5 - (fract(uTime * 0.05 + uSeed) * 3.0 - 1.5)));
          col = mix(col, vec3(1.0), (band * 0.08 + spec * 0.12) * uSheen);
          col *= 0.96 + 0.05 * diff;
        } else col *= 0.9;
        /* pale tiles only: a hairline, low contrast, in the tile's own tone */
        float rim = smoothstep(-0.012, -0.002, sd);
        col = mix(col, uSide * 0.9, rim * uRimK);
      } else {
        /* the sides: the logo's own colour, darkened and lit, never lifted toward white */
        col = uSide * (0.86 + 0.18 * diff) + vec3(spec * 0.1);
      }
      /* the burn: a petrol rim, a warm hairline inside it */
      float gap = thr - uDis;
      float rimB = (uDis > 0.0) ? smoothstep(0.08, 0.0, gap) : 0.0;
      float core = (uDis > 0.0) ? smoothstep(0.022, 0.0, gap) : 0.0;
      col = mix(col, PETROL, rimB * 0.9);
      col = mix(col, AMBERD, core * 0.7);
      col = mix(col, vec3(1.0), uFog);
      gl_FragColor = vec4(col, uOpacity);
    }`,b=(W,V,rt)=>new Oe({vertexShader:Nt,fragmentShader:Rt,transparent:!0,uniforms:{uMap:{value:W},uSide:{value:rt},uRimK:{value:rt.pale?.45:0},uOpacity:{value:1},uDis:{value:0},uBlur:{value:0},uFog:{value:0},uTime:{value:0},uSeed:{value:V},uSheen:{value:1}}}),v=new gs(1,1),U="varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",J=`uniform sampler2D uMap; uniform float uOpacity, uFog; varying vec2 vUv;
    void main(){ vec4 t = texture2D(uMap, vUv); float a = t.a * uOpacity; if (a < 0.003) discard; gl_FragColor = vec4(mix(t.rgb, vec3(1.0), uFog), a); }`,it=`uniform float uA; varying vec2 vUv;
    void main(){ vec2 p = (vUv - 0.5) * 2.0; float d = length(max(abs(p) - vec2(0.38), 0.0)) - 0.3;
      float a = (1.0 - smoothstep(-0.5, 0.3, d)) * uA; if (a < 0.002) discard;
      gl_FragColor = vec4(0.0784, 0.1059, 0.1137, a); }`,tt=()=>{let W=new Fe(v,new Oe({transparent:!0,depthWrite:!1,uniforms:{uA:{value:0}},vertexShader:U,fragmentShader:it}));return W.renderOrder=-1,W.visible=!1,ot.add(W),W},Lt=[];for(let W=0;W<a;W++){let V=o[W],rt=or.find(re=>re[0]===V)||[V,[.5,.5,-900,"u"],null,0,W],dt=b(et[W],W*.137,lt[W]),It=new Fe($,dt);It.visible=!1,ot.add(It);let Ut=new Oe({transparent:!0,depthWrite:!1,uniforms:{uMap:{value:Gt[W]},uOpacity:{value:0},uFog:{value:0}},vertexShader:U,fragmentShader:J}),jt=new Fe(v,Ut);jt.visible=!1,ot.add(jt),Lt.push({mesh:It,mat:dt,sprite:jt,spMat:Ut,shadow:tt(),sp:rt,rank:rt[4],rot:rt[3]*Math.PI/180,ph:W*1.73,spd:.75+W*37%10/22,turns:1.35+W*53%7/10,fl:null,last:-W})}let _t=b(Tt,.31,new D(.0902,.3529,.3922));_t.uniforms.uSheen.value=.7;let bt=new Fe($,_t);bt.visible=!1,bt.renderOrder=6,ot.add(bt);let $t=tt(),T=new He;T.rotation.order="ZYX",ot.add(T);let Y=new He;Y.rotation.order="ZYX",ot.add(Y);let j=new He;ot.add(j);let st=new Oe({transparent:!0,depthWrite:!1,uniforms:{uA:{value:0}},vertexShader:U,fragmentShader:`uniform float uA; varying vec2 vUv; ${w}
      void main(){ float d = length(vUv - 0.5) * 2.0; float g = pow(max(1.0 - d, 0.0), 2.2) * uA; if (g < 0.002) discard; gl_FragColor = vec4(PLIGHT, g); }`}),K=new Fe(v,st);K.renderOrder=-2,K.visible=!1,ot.add(K);let Et=(W,V)=>{let rt=nt,dt=.5-rt,It=Math.max(Math.abs(W)-dt,0),Ut=Math.max(Math.abs(V)-dt,0);return Math.hypot(It,Ut)<=rt},vt=160,Xt=(()=>{let W=document.createElement("canvas");W.width=W.height=vt;let V=W.getContext("2d",{willReadFrequently:!0});return V.fillStyle="#ffffff",V.fillRect(0,0,vt,vt),P&&V.drawImage(P,0,0,vt,vt),V.getImageData(0,0,vt,vt).data})(),C=(W,V)=>{let rt=Math.floor((W+.5)*vt),dt=Math.floor((.5-V)*vt);return rt<0||dt<0||rt>=vt||dt>=vt?!1:Xt[(dt*vt+rt)*4]<150},ft=W=>{let V=.5-nt,rt=2*V,dt=nt*Math.PI/2,It=4*(rt+dt),Ut=W*It,jt=[rt,dt,rt,dt,rt,dt,rt,dt],re=0;for(;re<7&&Ut>jt[re];)Ut-=jt[re],re++;let xe=nt;switch(re){case 0:return[-V+Ut,-.5];case 1:{let me=-Math.PI/2+Ut/xe;return[V+Math.cos(me)*xe,-V+Math.sin(me)*xe]}case 2:return[.5,-V+Ut];case 3:{let me=Ut/xe;return[V+Math.cos(me)*xe,V+Math.sin(me)*xe]}case 4:return[V-Ut,.5];case 5:{let me=Math.PI/2+Ut/xe;return[-V+Math.cos(me)*xe,V+Math.sin(me)*xe]}case 6:return[-.5,V-Ut];default:{let me=Math.PI+Ut/xe;return[-V+Math.cos(me)*xe,-V+Math.sin(me)*xe]}}};function z(W,V){let rt=[],dt=0;for(let It=0;It<W&&dt<4e5;dt++){let Ut=h()-.5,jt=h()-.5;!Et(Ut,jt)||!C(Ut,jt)||(rt.push([Ut,jt,1]),It++)}for(let It=0;It<V;It++){let[Ut,jt]=ft(h()),re=(h()-.5)*.012;rt.push([Ut*(1-Math.abs(re)),jt*(1-Math.abs(re)),3])}return rt}let G=R?20:30,ct=R?3200:9e3,pt=[],kt=[],ne=[],fe=[],Jt=document.createElement("canvas");Jt.width=Jt.height=G;let oe=Jt.getContext("2d",{willReadFrequently:!0});Qt.forEach((W,V)=>{oe.fillStyle="#ffffff",oe.fillRect(0,0,G,G),oe.drawImage(W,0,0,G,G);let rt=oe.getImageData(0,0,G,G).data;for(let dt=0;dt<G;dt++)for(let It=0;It<G;It++){let Ut=(It+.5)/G-.5,jt=.5-(dt+.5)/G;if(!Et(Ut,jt))continue;let re=(dt*G+It)*4;pt.push(V),kt.push(Ut,jt),ne.push(rt[re]/255,rt[re+1]/255,rt[re+2]/255),fe.push(Math.random(),Math.random(),Math.random(),Math.random())}});for(let W=0;W<ct;W++)pt.push(-1),kt.push(0,0),ne.push(0,0,0),fe.push(Math.random(),Math.random(),Math.random(),Math.random());let pe=pt.length;for(let[W,V,rt]of z(R?700:1300,R?160:260))pt.push(rt===1?-2:-3),kt.push(W,V),rt===1?ne.push(.0902,.3529,.3922):ne.push(.2,.52,.57),fe.push(Math.random(),Math.random(),Math.random(),Math.random());let ni=pt.length,Ti=ni-pe,Ae=new tn;Ae.setAttribute("position",new Xe(new Float32Array(ni*3),3)),Ae.setAttribute("aLogo",new Re(pt,1)),Ae.setAttribute("aUV",new Re(kt,2)),Ae.setAttribute("aColor",new Re(ne,3)),Ae.setAttribute("aRnd",new Re(fe,4));let ii=new tn;for(let W of Object.keys(Ae.attributes))ii.setAttribute(W,Ae.getAttribute(W));Ae.setDrawRange(0,pe),ii.setDrawRange(pe,Ti);let Ai=5,ue={uTime:{value:0},uSpin:{value:0},uFlow:{value:0},uForm:{value:0},uPx:{value:1},uIconHide:{value:0},uDustA:{value:1},uSlotSize:{value:.3},uGrid:{value:G},uFront:{value:yt+.004},uDustDis:{value:0},uGScale:{value:1},uLogoOn:{value:1},uMarkV:{value:0},uMarkSolid:{value:0},uMarkSize:{value:1},uEatDir:{value:-1},uBreath:{value:1},uEye:{value:new D},uCamR:{value:new D(1,0,0)},uCamU:{value:new D(0,1,0)},uRes:{value:new Pt(t.W,t.H)},uClear:{value:Array.from({length:Ai},()=>new Me)},uClearW:{value:new Array(Ai).fill(0)},uTileM:{value:Array.from({length:a},()=>new ge)},uDis:{value:new Array(a).fill(0)},uGone:{value:new Array(a).fill(0)},uSlot:{value:Array.from({length:a},()=>new D)},uGalM:{value:new ge}},si=new Oe({transparent:!0,depthWrite:!1,blending:Nn,uniforms:ue,vertexShader:`
      #define NL ${a}
      #define NC ${Ai}
      uniform mat4 uTileM[NL]; uniform float uDis[NL]; uniform float uGone[NL]; uniform vec3 uSlot[NL];
      uniform mat4 uGalM;
      uniform vec3 uEye, uCamR, uCamU;
      uniform float uTime, uSpin, uFlow, uForm, uPx, uIconHide, uDustA, uSlotSize, uGrid, uFront, uDustDis, uGScale, uLogoOn;
      uniform float uMarkV, uMarkSolid, uMarkSize, uEatDir, uBreath;
      uniform vec2 uRes;
      uniform vec4 uClear[NC]; uniform float uClearW[NC];
      attribute float aLogo; attribute vec2 aUV; attribute vec3 aColor; attribute vec4 aRnd;
      varying vec3 vCol; varying float vA; varying float vHard;
      ${w}
      ${S}
      vec2 rot2(vec2 v, float a){ float c = cos(a), s = sin(a); return vec2(c * v.x - s * v.y, s * v.x + c * v.y); }
      /* the whirlpool, turning clockwise on screen, flowing inward */
      vec3 vortexLocal(vec4 r, out float rad, out float edge){
        float fl = fract(r.y + uFlow * (0.55 + 0.9 * r.x));
        edge = smoothstep(0.0, 0.1, fl) * smoothstep(1.0, 0.86, fl);
        rad = mix(5.4, 0.55, pow(fl, 0.8));
        float arm = floor(r.z * 3.0) / 3.0 * 6.2831853;
        float spread = (r.w - 0.5) * (0.45 + rad * 0.16);
        if (r.w > 0.86) spread = r.z * 40.0;
        float ang = arm + spread - 1.9 * log(rad) + uSpin;
        float y = -1.3 / (rad + 0.55) + 0.34 + (r.x - 0.5) * 0.11 * (0.5 + rad * 0.2);
        return vec3(cos(ang) * rad, y, sin(ang) * rad);
      }
      void main(){
        float rad, edge;
        vec3 vl = vortexLocal(aRnd, rad, edge);
        vec3 pB = (uGalM * vec4(vl, 1.0)).xyz;
        vec3 eye = uEye;
        float t = smoothstep(0.6, 4.6, rad);
        vec3 tint = mix(PDEEP, mix(PETROL, PLIGHT, 0.55), t);
        if (aRnd.x > 0.94) tint = AMBERD;
        float sizeB = 0.056 * (0.5 + aRnd.z) * uGScale;
        vec3 pos; vec3 col; float a; float size; float hard = 0.0;
        if (aLogo > -0.5) {
          int li = int(aLogo + 0.5);
          mat4 TM = uTileM[li];
          vec3 pA = (TM * vec4(aUV, uFront, 1.0)).xyz;
          float ts = length(TM[0].xyz);
          float dis = uDis[li];
          float n = dnoise(aUV);
          float k = clamp((dis - n * 0.55) / 0.45, 0.0, 1.0);
          float ke = k * k * (3.0 - 2.0 * k);
          /* eaten: each speck is pulled round the eye and in, and is gone before it gets there */
          vec3 off = pA - eye;
          off.xy = rot2(off.xy, uEatDir * ke * (1.5 + aRnd.x * 1.4));
          off *= 1.0 - ke * (0.8 + aRnd.y * 0.18);
          vec3 swirl = vec3(sin(aRnd.w * 30.0 + uTime), cos(aRnd.z * 30.0 + uTime * 0.8), sin(aRnd.x * 20.0)) * 0.2;
          pos = eye + off + swirl * sin(ke * 3.14159) * uGScale;
          /* a white pixel would vanish on white paper: it leaves as petrol */
          float lum = dot(aColor, vec3(0.299, 0.587, 0.114));
          vec3 lc = mix(aColor, PLIGHT, smoothstep(0.82, 0.97, lum) * 0.85);
          col = mix(mix(lc, PETROL, smoothstep(0.0, 0.25, k) * (1.0 - ke) * 0.6), mix(lc, tint, 0.85), ke);
          a = smoothstep(0.0, 0.06, k) * (1.0 - smoothstep(0.5, 1.0, ke));
          size = mix(ts / uGrid * 2.0, sizeB * 0.8, ke);
          if (dis > 0.999) { pos = pB; a = 0.0; col = mix(lc, tint, 0.72); size = sizeB; }
          /* the list: out of the whirlpool, each colour back to its own slot */
          float k2 = clamp((uForm - aRnd.y * 0.5) / 0.5, 0.0, 1.0);
          float k2e = k2 * k2 * (3.0 - 2.0 * k2);
          vec3 pC = uSlot[li] + vec3(aUV * uSlotSize, 0.0);
          float arc = sin(k2e * 3.14159);
          pos = mix(pos, pC, k2e) + vec3(-arc * aRnd.x * 0.8, arc * (aRnd.w - 0.5) * 1.2, arc * 0.6);
          col = mix(col, aColor, k2e);
          a = mix(a, 0.95, k2e);
          size = mix(size, uSlotSize / uGrid * 1.35, k2e);
          hard = k2e;
          float g = uGone[li];
          if (g > 0.0) {
            /* a cancelled icon leaves to the left, away from its own name and price, and fades early */
            vec3 blow = vec3(-(0.5 + aRnd.x * 1.5), (aRnd.y - 0.5) * 0.9, 0.4 + aRnd.z * 1.2);
            blow += vec3(sin(uTime * 1.7 + aRnd.w * 40.0), cos(uTime * 1.3 + aRnd.x * 30.0), 0.0) * 0.18;
            pos += blow * g * (0.4 + g) * 0.9 * max(uGScale, 0.7);
            a *= 1.0 - smoothstep(0.08, 0.6, g);
            col = mix(col, mix(PETROL, AMBERD, step(0.7, aRnd.z)), smoothstep(0.0, 0.3, g));
            hard *= 1.0 - smoothstep(0.0, 0.3, g);
            size *= 1.0 - 0.3 * g;
          } else {
            a *= 1.0 - uIconHide;
          }
          a *= uLogoOn;
        } else if (aLogo > -1.5) {
          /* the dust: out of the void into the whirlpool */
          float kd = smoothstep(aRnd.x * 0.5, aRnd.x * 0.5 + 0.5, uDustDis);
          vec3 wide = eye + (pB - eye) * (2.3 + aRnd.y * 1.2) + vec3(0.0, 0.0, -2.5 * aRnd.z) * uGScale;
          pos = mix(wide, pB, kd);
          col = mix(PLIGHT, tint, kd);
          a = kd * 0.85 * edge * uDustA;
          size = sizeB;
        } else {
          /* the mark assembling at the eye; once whole it becomes the solid slab */
          float ma = aLogo > -2.5 ? 0.97 : 0.72;
          vec2 muv = aUV * uBreath;
          float kd = smoothstep(aRnd.x * 0.5, aRnd.x * 0.5 + 0.5, uDustDis);
          float km = clamp((uMarkV - aRnd.y * 0.4) / 0.6, 0.0, 1.0); km = km * km * (3.0 - 2.0 * km);
          vec3 target = eye + (uCamR * muv.x + uCamU * muv.y) * uMarkSize;
          vec3 jit = vec3(sin(aRnd.w * 30.0 + uTime), cos(aRnd.z * 30.0 + uTime * 0.8), 0.0) * 0.3 * uGScale;
          pos = mix(pB, target, km) + jit * sin(km * 3.14159);
          col = mix(tint, aColor, km);
          a = mix(kd * 0.85 * edge * uDustA, ma, km) * (1.0 - uMarkSolid);
          size = mix(sizeB, uMarkSize * 0.024, km);
          hard = km;
        }
        vec4 mv = modelViewMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix * mv;
        float ps = size * uPx / max(-mv.z, 0.1);
        if (ps < 1.0) { a *= ps; ps = 1.0; }
        /* words keep their ground: a speck over a line of text all but disappears */
        vec2 ndc = gl_Position.xy / gl_Position.w;
        vec2 px = vec2((ndc.x * 0.5 + 0.5) * uRes.x, (0.5 - ndc.y * 0.5) * uRes.y);
        float dim = 1.0;
        for (int i = 0; i < NC; i++) {
          if (uClearW[i] < 0.001) continue;
          vec4 r = uClear[i];
          vec2 dd = max(r.xy - px, px - r.zw);
          float d = max(dd.x, dd.y);
          dim = min(dim, mix(1.0, mix(0.03, 1.0, smoothstep(-4.0, 34.0, d)), uClearW[i]));
        }
        a *= mix(dim, 1.0, hard);
        gl_PointSize = ps;
        vCol = col; vA = a; vHard = hard;
      }`,fragmentShader:`
      varying vec3 vCol; varying float vA; varying float vHard;
      void main(){
        float d = length(gl_PointCoord - 0.5);
        float soft = 1.0 - smoothstep(0.16, 0.5, d);
        float crisp = 1.0 - smoothstep(0.4, 0.5, d);
        float a = mix(soft, crisp, vHard) * vA;
        if (a < 0.004) discard;
        gl_FragColor = vec4(vCol, a);
      }`}),yn=new _s(Ae,si);yn.frustumCulled=!1,yn.renderOrder=3,ot.add(yn);let Mn=new _s(ii,si);Mn.frustumCulled=!1,Mn.renderOrder=5,ot.add(Mn);let $s=R?12e3:4e4,Bn=[],Ri=[],Ci=[];for(let W=0;W<$s;W++){let V=h(),rt,dt,It;if(V<.2)rt=Math.abs(f())*.32,dt=h()*d,It=f()*.1;else if(V<.34)rt=3.05+f()*.045,dt=h()*d,It=f()*.02;else if(V<.42)rt=1.65+f()*.04,dt=h()*d,It=f()*.02;else{let Ut=h()<.5?0:1;rt=.3+2.7*Math.sqrt(h()),dt=Ut*Math.PI+Math.log(rt)*2.3+f()*(.22+.1/rt),It=f()*.05}Bn.push(Math.cos(dt)*rt,It,Math.sin(dt)*rt,1-Le(ie((rt-.05)/2.85))),Ri.push(h(),h(),h(),h()),Ci.push(0,0,0,0)}let Js=[-.12,-.08],x=.19,I=.4,N=[.28,.48,-.48,.5],H=(W,V)=>{let rt=Math.hypot(W-Js[0],V-Js[1]);if(rt>=x&&rt<=I)return!0;if(W>=N[0]&&W<=N[1]&&V>=N[2]&&V<=N[3]){let dt=(N[1]-N[0])/2,It=(N[0]+N[1])/2;return V>N[3]-dt?Math.hypot(W-It,V-(N[3]-dt))<=dt:V<N[2]+dt?Math.hypot(W-It,V-(N[2]+dt))<=dt:!0}return!1},L=()=>{for(let W=0;W<1e3;W++){let V=h()*1.1-.58,rt=h()-.5;if(H(V,rt))return[V+f()*.006,rt+f()*.006]}return[0,0]},mt=()=>{let W=Math.abs(f())*.32,V=h()*d;return[Math.cos(V)*W,f()*.1,Math.sin(V)*W,1-Le(ie((W-.05)/2.85))]},At=.11,Dt=R?[1100,450,350]:[2600,1e3,800];for(let W=0;W<Dt[0]+Dt[1]+Dt[2];W++){let[V,rt]=L(),dt=W<Dt[0]?1:W<Dt[0]+Dt[1]?2:5,It=dt===1?At:dt===2?-At:(h()*2-1)*At;Bn.push(...mt()),Ri.push(h(),h(),h(),h()),Ci.push(V,rt,It,dt)}let Ft=()=>{let W=h()<.5?0:1,V=.55+h()*.7,rt=W*Math.PI+Math.log(V)*2.3+f()*.12;return[Math.cos(rt)*V,f()*.04,Math.sin(rt)*V,1-Le(ie((V-.05)/2.85))]},qt=R?[260,90]:[700,240];for(let W=0;W<qt[0]+qt[1];W++){let[V,rt]=L();Bn.push(...Ft()),Ri.push(h(),h(),h(),h()),Ci.push(V,rt,(h()*2-1)*At,W<qt[0]?6:7)}let Wt=new tn;Wt.setAttribute("position",new Xe(new Float32Array(Bn.length/4*3),3)),Wt.setAttribute("aP",new Re(Bn,4)),Wt.setAttribute("aH",new Re(Ri,4)),Wt.setAttribute("aM",new Re(Ci,4));let Ct={uT:{value:0},uIn:{value:0},uMarkC:{value:0},uRingM:{value:new ge},uMarkM:{value:new ge},uSize:{value:R?3.2:3},uAlpha:{value:R?.86:.72},uDpr:{value:F},uDist:{value:M},uRes:{value:new Pt(t.W,t.H)},uPointer:{value:new Pt(-9999,-9999)},uPointerOn:{value:0},uPushR:{value:140},uClear:{value:[new Me,new Me]},uClearW:{value:[0,0]}},ce=new Oe({transparent:!0,depthWrite:!1,depthTest:!1,blending:Nn,uniforms:Ct,vertexShader:`
      uniform float uT, uIn, uMarkC, uSize, uAlpha, uDpr, uDist, uPointerOn, uPushR;
      uniform mat4 uRingM, uMarkM;
      uniform vec2 uRes, uPointer;
      uniform vec4 uClear[2]; uniform float uClearW[2];
      attribute vec4 aP; attribute vec4 aH; attribute vec4 aM;
      varying vec3 vColor; varying float vAlpha;
      const vec3 PETROL_DEEP = vec3(0.090, 0.353, 0.392);
      const vec3 PETROL = vec3(0.110, 0.416, 0.463);
      const vec3 PETROL_SOFT = vec3(0.420, 0.690, 0.729);
      const vec3 PETROL_PALE = vec3(0.498, 0.737, 0.773);
      const vec3 SPARK = vec3(0.839, 0.663, 0.318);
      vec2 rot2(vec2 v, float a){ float c = cos(a), s = sin(a); return vec2(c * v.x - s * v.y, s * v.x + c * v.y); }
      vec3 grad(float w){
        w = clamp(w, 0.0, 1.0);
        if (w < 0.45) return mix(PETROL_DEEP, PETROL, w / 0.45);
        return mix(PETROL, PETROL_SOFT, (w - 0.45) / 0.55);
      }
      void main(){
        float h = aH.x, h2 = aH.y;
        /* differential rotation, a 0.3 tilt, a small breathing wobble */
        vec3 p = aP.xyz;
        float w = 1.0 - aP.w;
        float r = length(p.xz);
        p.xz = rot2(p.xz, -uT * 0.16 * (1.1 / (r + 0.5)));
        p.yz = rot2(p.yz, 0.3);
        p += 0.03 * vec3(sin(p.y * 1.7 + uT * 0.9 + h * 6.28), sin(p.z * 1.9 + uT * 0.8 + h2 * 6.28), sin(p.x * 1.5 + uT * 0.7));
        /* arriving: out of a wide scatter, each at its own moment */
        float e = clamp(uIn * 1.6 - h * 0.6, 0.0, 1.0); e = e * e * (3.0 - 2.0 * e);
        vec3 far = vec3((aH.z * 2.0 - 1.0) * 10.0, (aH.w * 2.0 - 1.0) * 5.0, -10.0 + h2 * 12.5) * 0.9;
        p = mix(far, p, e);
        p += sin(e * 3.14159) * vec3(sin(h * 40.0 + uT * 0.6 + p.y * 0.7), cos(h2 * 37.0 + uT * 0.5 + p.x * 0.7), sin(h * 23.0 + h2 * 11.0)) * 0.38;
        vec3 wp = (uRingM * vec4(p, 1.0)).xyz;
        float isMark = step(0.5, aM.w) * (1.0 - step(5.5, aM.w));
        float isStream = step(5.5, aM.w);
        float km = 0.0;
        vec3 col;
        w += (h2 - 0.5) * 0.14;
        col = grad(w);
        float h3 = fract(h * 91.7 + h2 * 13.1);
        float sparkP = 0.022 + 0.7 * 0.2 * (1.0 - smoothstep(0.0, 0.4, w));
        float spark = step(1.0 - sparkP, h3);
        col = mix(col, SPARK, spark * (1.0 - isMark));
        float alpha = uAlpha * 0.9;
        float sz = uSize * 0.95 * (0.5 + h2 * h2 * 1.4);
        /* as the letter condenses, the rest of the core thins a little, radially: no hole, no edge */
        alpha *= mix(1.0, 0.13, uMarkC * smoothstep(0.82, 0.965, aP.w) * (1.0 - isMark) * (1.0 - isStream));
        if (isMark > 0.5) {
          km = clamp((uMarkC - h * 0.45) / 0.55, 0.0, 1.0); km = km * km * (3.0 - 2.0 * km);
          vec3 drift = vec3(sin(h * 30.0 + uT * 0.9), cos(h2 * 30.0 + uT * 0.7), sin(h * 17.0 + uT * 0.5)) * 0.012;
          vec3 mp = (uMarkM * vec4(aM.xyz + drift, 1.0)).xyz;
          wp = mix(wp, mp, km) + sin(km * 3.14159) * vec3(sin(h * 30.0 + uT), cos(h2 * 30.0 + uT * 0.8), 0.0) * 0.25;
          float kind = aM.w;
          vec3 mc = kind < 1.5 ? PETROL_DEEP : (kind < 2.5 ? mix(PETROL_DEEP, PETROL, 0.6) : mix(PETROL_DEEP, PETROL, 0.3));
          float ma = kind < 1.5 ? 0.92 : (kind < 2.5 ? 0.5 : 0.7);
          col = mix(col, mc, km);
          alpha = mix(alpha, ma * mix(1.0, 0.82, step(0.5, spark)), km);
          sz = mix(sz, uSize * 0.8 * (0.55 + h2 * h2 * 1.0), km);
        }
        if (isStream > 0.5) {
          float sS = fract(uT * 0.075 + h);
          float es = sS * sS * (3.0 - 2.0 * sS);
          vec3 mp = (uMarkM * vec4(aM.xyz, 1.0)).xyz;
          vec3 a0 = aM.w < 6.5 ? wp : mp, a1 = aM.w < 6.5 ? mp : wp;
          vec3 dd3 = a1 - a0;
          wp = mix(a0, a1, es) + vec3(-dd3.y, dd3.x, 0.0) * 0.22 * sin(es * 3.14159);
          float wS = aM.w < 6.5 ? mix(0.5, 0.0, es) : mix(0.0, 0.5, es);
          col = grad(wS);
          alpha = uAlpha * 0.95 * pow(sin(sS * 3.14159), 0.6) * uMarkC * (aM.w < 6.5 ? 1.0 : 0.7);
          sz = uSize * 0.85 * (0.5 + h2 * h2 * 1.2);
        }
        vec4 mv = viewMatrix * vec4(wp, 1.0);
        gl_Position = projectionMatrix * mv;
        float dist = -mv.z;
        sz *= min(uDist / max(dist, 0.5), 1.6);
        /* far fades toward the paper: paler and lighter, never darker */
        float near = smoothstep(uDist * 3.0, uDist * 0.8, dist);
        float depthFade = mix(0.28, 1.0, near);
        col = mix(mix(PETROL_PALE, SPARK, spark * 0.6), col, mix(0.25, 1.0, near));
        vec2 ndc = gl_Position.xy / gl_Position.w;
        vec2 px = vec2((ndc.x * 0.5 + 0.5) * uRes.x, (0.5 - ndc.y * 0.5) * uRes.y);
        /* the pointer opens a round clearing, eased in and out */
        float boost = 1.0;
        if (uPointerOn > 0.001) {
          vec2 dp = px - uPointer;
          float dd = length(dp);
          float f = exp(-dd * dd / (2.0 * pow(uPushR * 0.72, 2.0)));
          vec2 push = (dd > 0.001 ? dp / dd : vec2(0.0)) * uPushR * f * uPointerOn * mix(1.0, 0.5, km);
          px += push;
          gl_Position.xy += vec2(push.x / uRes.x * 2.0, -push.y / uRes.y * 2.0) * gl_Position.w;
          boost += exp(-pow((dd - uPushR * 1.1) / 40.0, 2.0)) * 0.35 * uPointerOn;
        }
        /* text keeps its ground */
        float dim = 1.0;
        for (int i = 0; i < 2; i++) {
          if (uClearW[i] < 0.001) continue;
          vec4 rc = uClear[i];
          vec2 d2 = max(rc.xy - px, px - rc.zw);
          dim = min(dim, mix(1.0, mix(0.035, 1.0, smoothstep(-6.0, 72.0, max(d2.x, d2.y))), uClearW[i]));
        }
        vAlpha = alpha * depthFade * mix(dim, 1.0, km) * boost * e;
        vColor = col;
        gl_PointSize = max(1.0, sz * uDpr);
      }`,fragmentShader:`
      varying vec3 vColor; varying float vAlpha;
      void main(){
        vec2 c = gl_PointCoord - 0.5;
        float d = length(c);
        if (d > 0.5) discard;
        /* a crisp dot with a soft rim: on paper a haze reads as dirt, a dot reads as a particle */
        float a = clamp((1.0 - smoothstep(0.2, 0.5, d)) * vAlpha, 0.0, 1.0);
        if (a < 0.004) discard;
        gl_FragColor = vec4(vColor, a);
      }`}),le=new _s(Wt,ce);le.frustumCulled=!1,le.renderOrder=7,le.visible=!1,ot.add(le);let _e=-9999,Be=-9999,se=0,Ot=0,Ee=W=>{_e=W.clientX,Be=W.clientY,se=1},ae=()=>{se=0};s&&(addEventListener("pointermove",Ee,{passive:!0}),document.addEventListener("pointerleave",ae));function qe(){g.setSize(t.W,t.H,!1),B.aspect=t.W/t.H,B.updateProjectionMatrix();let W=t.H*g.getPixelRatio();ue.uPx.value=W/(2*Q),ue.uRes.value.set(t.W,t.H),Ct.uRes.value.set(t.W,t.H)}qe();let Sn=1,we={x:0,y:0};function Pi(W,V,rt,dt,It,Ut,jt){let re=W-rt,xe=(V-dt)/jt,me=Sn*Ut*Math.pow(It,1.2),ri=Math.cos(me),Ze=Math.sin(me),en=Math.pow(1-It,1.3);we.x=rt+(re*ri-xe*Ze)*en,we.y=dt+(re*Ze+xe*ri)*en*jt}let ve=(W,V,rt,dt,It,Ut)=>{ue.uClear.value[W].set(V,rt,dt,It),ue.uClearW.value[W]=Ut},an=0,Ii=0,Ie=0,Ye=0,ys=!1,Li=null,Ms=0,vo=.14,Wl=Math.random()*d,Ss=new xn,zn=new pn;function xo(W,V,rt){Ye+=W;let{W:dt,H:It,mobile:Ut}=t,jt=V.y||0,re=V.q||0,xe=V.s,{F:me,cuts:ri,post:Ze,ringV:en,ctaC:bs}=V,Yh=V.enter,bn=at(),kn=(1-me)*(n?0:1),ln=n||rt,Ks=ie((re-(Ut?.3:.1))/.95);an+=ln?0:W*.16*(1+2.4*Le(Ks))*(1-.75*me),Ii+=ln?0:W*.05*(.35+1.2*Le(Ks))*(1-.85*me),Ie+=ln?0:W;let ql=t.L,Hn=jt<t.storyTop?t.storyTop-jt:xe>ql?t.storyTop+ql*It-jt:0,Qs=dt*.5,js=It*(Ut?.5:.52)+(Hn>0?Hn*.55:Hn),[Es,ws]=k(Qs,js),Yl=(Ut?.6:Math.min(1.05,dt*.5/(5.6*bn)))*(.8+.2*Le(Ks));T.position.set(Es,ws,0),T.rotation.set((Ut?.95:1)+V.py*.07*kn,V.px*.12*kn,-.06),T.scale.setScalar(Yl),T.updateMatrixWorld(!0),ue.uGalM.value.copy(T.matrixWorld),ue.uGScale.value=Yl,ue.uEye.value.set(Es,ws,0),B.position.set(V.px*.5*kn,-V.py*.3*kn,M),B.lookAt(0,0,0),B.updateMatrixWorld();let Di=B.matrixWorld.elements;ue.uCamR.value.set(Di[0],Di[1],Di[2]),ue.uCamU.value.set(Di[4],Di[5],Di[6]);let Zh=(Ut?56:ie(dt*.064,58,98))/bn,yo=Ut?.8:.72,$h=Li===null?0:Math.abs(re-Li);Li=re;let Zl=ln?0:Math.min(.2,$h)+W*.1,$l=0;for(let Kt of Lt)if(Kt.fl){let Ht=Zl/.5;xe>1.35&&(Ht+=W*.8),me>0&&(Ht+=W*3),Kt.fl.e=Math.min(1,Kt.fl.e+Ht),Kt.fl.e>=1?(Kt.fl=null,Kt.last=Ye):$l++}let Jh=Kt=>Ut?.16+Kt.rank*.055:.08+Kt.rank*.062,Kh=Ut?.5:.6,Jl=Kt=>(Ut?Kt.sp[2]:Kt.sp[1])?ln?0:ie((re-Jh(Kt))/Kh):1;if(!ln&&re>(Ut?.95:.7)&&xe<1.3){if(Ms+=Zl,Ms>vo&&$l<(Ut?3:4)){let Kt=null;for(let Ht of Lt)!Ht.fl&&Jl(Ht)>=1&&(!Kt||Ht.last<Kt.last)&&(Kt=Ht);if(Kt){Wl+=1.2+Math.random()*2.4;let Ht=Math.hypot(dt,It);Kt.fl={e:0,phi:Wl,r0:(Ut?.52+Math.random()*.12:.36+Math.random()*.12)*Ht,turns:1.2+Math.random()*.9,rot:(Math.random()-.5)*.7},Ms=0,vo=.12+Math.random()*.1}}}else Ms=Math.min(Ms,vo);let Mo=!1;for(let Kt=0;Kt<a;Kt++){let Ht=Lt[Kt],En=Ut?Ht.sp[2]:Ht.sp[1],Ni=V.hideTiles?1:Jl(Ht),gn=ln?0:Ye*Ht.spd,Fi=0,Oi=0,Bi=0,Ts=0,$e=1,zi=Ht.rot,bo=0,er=!1,nr=1;if(Ni<1&&En){Ht.fl&&(Ht.fl=null),$e=Ni,er=!0;let nn=En[3]==="u"?t.uniR:t.heroR,sc=1-$e,tu=nn.l+En[0]*nn.w+Math.cos(gn*.7+Ht.ph)*9*sc,eu=nn.t+En[1]*nn.h+Math.sin(gn+Ht.ph)*14*sc-jt*(Ut?.75:.55);Pi(tu,eu,Qs,js,$e,Ht.turns,yo),Fi=we.x,Oi=we.y,Bi=Hh(En[2],0,Le(ie($e/.85))),Ts=1,nr=ie(Yh*1.5-Kt*.035)}else if(Ht.fl&&!V.hideTiles){let nn=Ht.fl;$e=nn.e,er=!0,Pi(Qs+Math.cos(nn.phi)*nn.r0,js+Math.sin(nn.phi)*nn.r0*yo,Qs,js,$e,nn.turns,yo),Fi=we.x,Oi=we.y,Bi=Hh(-1100,0,Le(ie($e/.8))),Ts=Ue(0,.16,$e),bo=1-Ue(.02,.42,$e),zi=nn.rot}let ir=er?ie(($e-.55)/.43):1;if(ue.uDis.value[Kt]=ir,Ht.mat.uniforms.uDis.value=ir,!er||ir>=.999){Ht.mesh.visible=Ht.sprite.visible=Ht.shadow.visible=!1;continue}let Vn=ie(-Bi/1100),jh=1e3/(1e3-Bi),sr=M*(1-1/jh)-(1-nr)*6,[Eo,wo]=k(Fi,Oi,sr),oi=Zh*(1-.72*Ue(.25,1,$e))*(.6+.4*nr),ec=1-Vn;Ht.mesh.position.set(Eo,wo,sr),zn.set(Math.cos(gn*.5+Ht.ph)*.14-V.py*.18*ec*kn,Math.sin(gn*.6+Ht.ph)*.17+V.px*.24*ec*kn,zi+Math.sin(gn*.8+Ht.ph)*.09-Sn*Le($e)*2),Ss.setFromEuler(zn),Ht.mesh.quaternion.copy(B.quaternion).multiply(Ss),Ht.mesh.scale.setScalar(oi),Ht.mesh.updateMatrixWorld(),ue.uTileM.value[Kt].copy(Ht.mesh.matrixWorld);let nc=Math.max(Math.min(Vn*.62,.42),bo),To=1-Ue(.5,.58,Vn),ic=Ue(.42,.52,Vn),As=Ts*nr*(1-Vn*.3),rr=Ht.mat.uniforms;rr.uFog.value=nc,rr.uBlur.value=Vn*1.6,rr.uTime.value=Ye,rr.uOpacity.value=As*To,Ht.mesh.visible=As*To>.01;let ki=Ht.sprite;ki.visible=As*ic>.01,ki.visible&&(ki.position.set(Eo,wo,sr),zn.set(0,0,zi+Math.sin(gn*.8+Ht.ph)*.09),ki.quaternion.copy(B.quaternion).multiply(Ss.setFromEuler(zn)),ki.scale.setScalar(oi/zt),Ht.spMat.uniforms.uOpacity.value=As*ic,Ht.spMat.uniforms.uFog.value=Math.min(.9,nc*.85)),Mo=Mo||Ht.mesh.visible||ki.visible;let Hi=Ht.shadow;Hi.visible=Ht.mesh.visible&&Vn<.5,Hi.visible&&(Hi.position.set(Eo+.05*oi,wo-.2*oi,sr-.4*oi),Hi.quaternion.copy(B.quaternion),Hi.scale.set(oi*1.5,oi*1.5,1),Hi.material.uniforms.uA.value=.22*ie(1-Vn*1.8)*ie(1-ir*2.2)*As*To*(1-bo))}let tr=ln?0:Ue(Ut?.45:.2,Ut?1:.85,re)*(1-Ue(0,.45,me))*(1-Ze),Ui=Ue(.72,.98,tr),So=Ut?78:ie(dt*.07,92,124);ue.uMarkV.value=tr,ue.uMarkSolid.value=Ui,ue.uMarkSize.value=So/bn;let Kl=1+(ln?0:.02*Math.sin(Ye*1.3));if(ue.uBreath.value=Kl,bt.visible=Ui>.004,bt.visible){let Kt=So/bn*Kl*(.92+.08*Ui);bt.position.set(Es,ws,.35),zn.set(Math.sin(Ye*.4)*.12-V.py*.1*kn,Math.sin(Ye*.5)*.3+V.px*.14*kn,Math.sin(Ye*.3)*.04),bt.quaternion.copy(B.quaternion).multiply(Ss.setFromEuler(zn)),bt.scale.setScalar(Kt),_t.uniforms.uOpacity.value=Ui,_t.uniforms.uTime.value=Ye,$t.visible=!0,$t.position.set(Es+.05*Kt,ws-.2*Kt,.35-.45*Kt),$t.quaternion.copy(B.quaternion),$t.scale.set(Kt*1.55,Kt*1.55,1),$t.material.uniforms.uA.value=.26*Ui}else $t.visible=!1;K.visible=tr>.003,K.visible&&(K.position.set(Es,ws,-.6),K.quaternion.copy(B.quaternion),K.scale.setScalar(So*4.4/bn),st.uniforms.uA.value=tr*.3);let Qh=X();for(let Kt=0;Kt<a;Kt++){let Ht=t.slots[Kt];if(!Ht)continue;let[En,Ni]=k(Ht.x,Ht.y+Hn);ue.uSlot.value[Kt].set(En,Ni,0)}ue.uSlotSize.value=t.ico/It*Qh,ue.uTime.value=Ye,ue.uSpin.value=an,ue.uFlow.value=Ii,ue.uForm.value=me,ue.uIconHide.value=V.I,ue.uDustDis.value=ie(Ks*1.2),ue.uDustA.value=(1-Ue(0,.7,me))*(1-Ze),ri.forEach((Kt,Ht)=>{l[Ht]>=0&&(ue.uGone.value[l[Ht]]=Le(Kt))}),ue.uLogoOn.value=1-Ze;let Ql=-(V.t||0)*(Ut?20:60);ve(0,t.copy.l-8,t.copy.t-jt+Ql-8,t.copy.r+8,t.copy.b-jt+Ql+8,jt<t.storyTop?V.ho:0);let jl=rt?0:Math.max(Ue(0,.25,me),V.P)*(1-Ze);t.ledHead&&t.listText&&(ve(1,t.ledHead.l,t.ledHead.t+Hn,t.ledHead.r,t.ledHead.b+Hn,jl),ve(2,t.listText.l,t.listText.t+Hn,t.listText.r,t.listText.b+Hn,jl)),yn.visible=Ze<1,Mn.visible=yn.visible&&Ui<.999;let tc=en>.002;if(le.visible=tc,tc){let Kt=3.64*(dt/It),Ht=X(0)/2/3.64,En=t.ctaH*.5/bn/1.05,Ni=Math.min(t.ctaW,dt)*(Ut?.5:.48)/bn/3.15,gn=Math.min(Math.min(1,Kt/3.6)*Ht,En,Ni),[Fi,Oi]=k(dt/2,bs);Y.position.set(Fi,Oi,0),Y.rotation.set(V.py*.05*(n?0:1),V.px*.08*(n?0:1),0),Y.scale.setScalar(gn),Y.updateMatrixWorld(!0),Ct.uRingM.value.copy(Y.matrixWorld),Ct.uT.value=Ie,Ct.uIn.value=rt?1:en,Ct.uMarkC.value=rt?1:Ue(.45,1,en);let Bi=Math.min(gn*bn*1.05,Ut?74:118),Ts=1+(ln?0:.02*Math.sin(Ie*1.2));j.position.set(Fi,Oi+gn*.02,.4);let $e=ln?.42:Math.sin(Ie*.35)*.55;zn.set(-.08+Math.sin(Ie*.3)*.08,$e,0),j.quaternion.copy(B.quaternion).multiply(Ss.setFromEuler(zn)),j.scale.setScalar(Bi/bn*Ts),j.updateMatrixWorld(!0),Ct.uMarkM.value.copy(j.matrixWorld),Ct.uDist.value=M,Ot+=((s&&se&&!rt?1:0)-Ot)*(1-Math.exp(-W*4)),Ct.uPointer.value.set(_e,Be),Ct.uPointerOn.value=rt?0:Ot,Ct.uPushR.value=Ut?34:46;let zi=rt?0:1;t.ctaHead&&t.ctaFoot&&(Ct.uClear.value[0].set(t.ctaHead.l,t.ctaHead.t-jt,t.ctaHead.r,t.ctaHead.b-jt),Ct.uClearW.value[0]=zi,Ct.uClear.value[1].set(t.ctaFoot.l,t.ctaFoot.t-jt,t.ctaFoot.r,t.ctaFoot.b-jt),Ct.uClearW.value[1]=zi)}if(!Mo&&!bt.visible&&!K.visible&&!yn.visible&&!le.visible){ys||(g.render(ot,B),ys=!0);return}ys=!1,g.render(ot,B)}function Xl(){let W=i.querySelector(".lp-cta-orbit .lp-gal");if(W&&t.ctaW>0&&t.ctaH>0){let rt={...e,y:0,q:0,s:-1,t:1,ho:0,F:1,P:1,I:1,cuts:[1,1,1],post:1,ringV:1,ctaC:t.H/2,enter:1,hideTiles:!0,px:0,py:0};xo(0,rt,!0);try{let dt=Math.round(t.ctaW*F),It=Math.round(t.ctaH*F),Ut=document.createElement("canvas");Ut.width=dt,Ut.height=It,Ut.getContext("2d").drawImage(g.domElement,Math.round((t.W-t.ctaW)/2*F),Math.round((t.H-t.ctaH)/2*F),dt,It,0,0,dt,It),W.src=Ut.toDataURL("image/png"),i.classList.add("lp-glstill")}catch{}}let V={...e,y:0,q:0,s:-1,t:0,ho:1,F:0,P:0,I:0,cuts:[0,0,0],post:0,ringV:0,enter:1,hideTiles:!1,px:0,py:0};xo(0,V,!0)}return{resize(){qe(),n&&Xl()},frame(W,V){xo(V,e,!1)},still:Xl,dispose(){s&&(removeEventListener("pointermove",Ee),document.removeEventListener("pointerleave",ae)),ot.traverse(W=>{let V=W;V.geometry&&V.geometry.dispose();let rt=V.material;Array.isArray(rt)?rt.forEach(dt=>dt.dispose()):rt?.dispose()}),Z.forEach(W=>W.dispose()),g.dispose()}}}var Hh,Wh=Ao(()=>{"use strict";kh();Co();Hh=(i,t,e)=>i+(t-i)*e});var su="1.1.18";function ac(i,t,e){return Math.max(i,Math.min(t,e))}function ru(i,t,e){return(1-e)*i+e*t}function ou(i,t,e,n){return ru(i,t,1-Math.exp(-e*n))}function au(i,t){return(i%t+t)%t}var lu=class{constructor(){Vt(this,"isRunning",!1);Vt(this,"value",0);Vt(this,"from",0);Vt(this,"to",0);Vt(this,"currentTime",0);Vt(this,"lerp");Vt(this,"duration");Vt(this,"easing");Vt(this,"onUpdate")}advance(i){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=i;let e=ac(0,this.currentTime/this.duration,1);t=e>=1;let n=t?1:this.easing(e);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=ou(this.value,this.to,this.lerp*60,i),Math.round(this.value)===this.to&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(i,t,{lerp:e,duration:n,easing:s,onStart:r,onUpdate:o}){this.from=this.value=i,this.to=t,this.lerp=e,this.duration=n,this.easing=s,this.currentTime=0,this.isRunning=!0,r?.(),this.onUpdate=o}};function cu(i,t){let e;return function(...n){let s=this;clearTimeout(e),e=setTimeout(()=>{e=void 0,i.apply(s,n)},t)}}var hu=class{constructor(i,t,{autoResize:e=!0,debounce:n=250}={}){Vt(this,"width",0);Vt(this,"height",0);Vt(this,"scrollHeight",0);Vt(this,"scrollWidth",0);Vt(this,"debouncedResize");Vt(this,"wrapperResizeObserver");Vt(this,"contentResizeObserver");Vt(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Vt(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Vt(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=i,this.content=t,e&&(this.debouncedResize=cu(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},lc=class{constructor(){Vt(this,"events",{})}emit(i,...t){let e=this.events[i]||[];for(let n=0,s=e.length;n<s;n++)e[n]?.(...t)}on(i,t){return this.events[i]?.push(t)||(this.events[i]=[t]),()=>{this.events[i]=this.events[i]?.filter(e=>t!==e)}}off(i,t){this.events[i]=this.events[i]?.filter(e=>t!==e)}destroy(){this.events={}}},oc=100/6,Gn={passive:!1},uu=class{constructor(i,t={wheelMultiplier:1,touchMultiplier:1}){Vt(this,"touchStart",{x:0,y:0});Vt(this,"lastDelta",{x:0,y:0});Vt(this,"window",{width:0,height:0});Vt(this,"emitter",new lc);Vt(this,"onTouchStart",i=>{let{clientX:t,clientY:e}=i.targetTouches?i.targetTouches[0]:i;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:i})});Vt(this,"onTouchMove",i=>{let{clientX:t,clientY:e}=i.targetTouches?i.targetTouches[0]:i,n=-(t-this.touchStart.x)*this.options.touchMultiplier,s=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:s},this.emitter.emit("scroll",{deltaX:n,deltaY:s,event:i})});Vt(this,"onTouchEnd",i=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:i})});Vt(this,"onWheel",i=>{let{deltaX:t,deltaY:e,deltaMode:n}=i,s=n===1?oc:n===2?this.window.width:1,r=n===1?oc:n===2?this.window.height:1;t*=s,e*=r,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:i})});Vt(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=i,this.options=t,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Gn),this.element.addEventListener("touchstart",this.onTouchStart,Gn),this.element.addEventListener("touchmove",this.onTouchMove,Gn),this.element.addEventListener("touchend",this.onTouchEnd,Gn)}on(i,t){return this.emitter.on(i,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,Gn),this.element.removeEventListener("touchstart",this.onTouchStart,Gn),this.element.removeEventListener("touchmove",this.onTouchMove,Gn),this.element.removeEventListener("touchend",this.onTouchEnd,Gn)}},cc=class{constructor({wrapper:i=window,content:t=document.documentElement,eventsTarget:e=i,smoothWheel:n=!0,syncTouch:s=!1,syncTouchLerp:r=.075,touchInertiaMultiplier:o=35,duration:a,easing:l=O=>Math.min(1,1.001-Math.pow(2,-10*O)),lerp:c=.1,infinite:h=!1,orientation:d="vertical",gestureOrientation:u="vertical",touchMultiplier:f=1,wheelMultiplier:g=1,autoResize:y=!0,prevent:p,virtualScroll:m,overscroll:A=!0,autoRaf:S=!1,__experimental__naiveDimensions:w=!1}={}){Vt(this,"_isScrolling",!1);Vt(this,"_isStopped",!1);Vt(this,"_isLocked",!1);Vt(this,"_preventNextNativeScrollEvent",!1);Vt(this,"_resetVelocityTimeout",null);Vt(this,"__rafID",null);Vt(this,"isTouching");Vt(this,"time",0);Vt(this,"userData",{});Vt(this,"lastVelocity",0);Vt(this,"velocity",0);Vt(this,"direction",0);Vt(this,"options");Vt(this,"targetScroll");Vt(this,"animatedScroll");Vt(this,"animate",new lu);Vt(this,"emitter",new lc);Vt(this,"dimensions");Vt(this,"virtualScroll");Vt(this,"onPointerDown",i=>{i.button===1&&this.reset()});Vt(this,"onVirtualScroll",i=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(i)===!1)return;let{deltaX:t,deltaY:e,event:n}=i;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;let s=n.type.includes("touch"),r=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";let o=t===0&&e===0;if(this.options.syncTouch&&s&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let l=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||l)return;let c=n.composedPath();c=c.slice(0,c.indexOf(this.rootElement));let h=this.options.prevent;if(c.find(p=>p instanceof HTMLElement&&(typeof h=="function"&&h?.(p)||p.hasAttribute?.("data-lenis-prevent")||s&&p.hasAttribute?.("data-lenis-prevent-touch")||r&&p.hasAttribute?.("data-lenis-prevent-wheel"))))return;if(this.isStopped||this.isLocked){n.preventDefault();return}if(!(this.options.syncTouch&&s||this.options.smoothWheel&&r)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let u=e;this.options.gestureOrientation==="both"?u=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(u=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.preventDefault();let f=s&&this.options.syncTouch,y=s&&n.type==="touchend"&&Math.abs(u)>5;y&&(u=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+u,{programmatic:!1,...f?{lerp:y?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Vt(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let i=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-i,this.direction=Math.sign(this.animatedScroll-i),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Vt(this,"raf",i=>{let t=i-(this.time||i);this.time=i,this.animate.advance(t*.001),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))});window.lenisVersion=su,(!i||i===document.documentElement||i===document.body)&&(i=window),this.options={wrapper:i,content:t,eventsTarget:e,smoothWheel:n,syncTouch:s,syncTouchLerp:r,touchInertiaMultiplier:o,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:u,orientation:d,touchMultiplier:f,wheelMultiplier:g,autoResize:y,prevent:p,virtualScroll:m,overscroll:A,autoRaf:S,__experimental__naiveDimensions:w},this.dimensions=new hu(i,t,{autoResize:y}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new uu(e,{touchMultiplier:f,wheelMultiplier:g}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this.__rafID&&cancelAnimationFrame(this.__rafID)}on(i,t){return this.emitter.on(i,t)}off(i,t){return this.emitter.off(i,t)}setScroll(i){this.isHorizontal?this.rootElement.scrollLeft=i:this.rootElement.scrollTop=i}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.reset(),this.isStopped=!1)}stop(){this.isStopped||(this.reset(),this.isStopped=!0)}scrollTo(i,{offset:t=0,immediate:e=!1,lock:n=!1,duration:s=this.options.duration,easing:r=this.options.easing,lerp:o=this.options.lerp,onStart:a,onComplete:l,force:c=!1,programmatic:h=!0,userData:d}={}){if(!((this.isStopped||this.isLocked)&&!c)){if(typeof i=="string"&&["top","left","start"].includes(i))i=0;else if(typeof i=="string"&&["bottom","right","end"].includes(i))i=this.limit;else{let u;if(typeof i=="string"?u=document.querySelector(i):i instanceof HTMLElement&&i?.nodeType&&(u=i),u){if(this.options.wrapper!==window){let g=this.rootElement.getBoundingClientRect();t-=this.isHorizontal?g.left:g.top}let f=u.getBoundingClientRect();i=(this.isHorizontal?f.left:f.top)+this.animatedScroll}}if(typeof i=="number"){if(i+=t,i=Math.round(i),this.options.infinite?h&&(this.targetScroll=this.animatedScroll=this.scroll):i=ac(0,i,this.limit),i===this.targetScroll){a?.(this),l?.(this);return}if(this.userData=d??{},e){this.animatedScroll=this.targetScroll=i,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),l?.(this),this.userData={};return}h||(this.targetScroll=i),this.animate.fromTo(this.animatedScroll,i,{duration:s,easing:r,lerp:o,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",a?.(this)},onUpdate:(u,f)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=u-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=u,this.setScroll(this.scroll),h&&(this.targetScroll=u),f||this.emit(),f&&(this.reset(),this.emit(),l?.(this),this.userData={},this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){return this.options.infinite?au(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(i){this._isScrolling!==i&&(this._isScrolling=i,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(i){this._isStopped!==i&&(this._isStopped=i,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(i){this._isLocked!==i&&(this._isLocked=i,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let i="lenis";return this.isStopped&&(i+=" lenis-stopped"),this.isLocked&&(i+=" lenis-locked"),this.isScrolling&&(i+=" lenis-scrolling"),this.isScrolling==="smooth"&&(i+=" lenis-smooth"),i}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};Co();function Xh(i){let t=matchMedia("(prefers-reduced-motion: reduce)").matches,e=matchMedia("(hover:hover) and (pointer:fine)").matches,n=T=>i.querySelector(T),s=T=>[...i.querySelectorAll(T)],r=[],o=(T,Y,j)=>{addEventListener(T,Y,j),r.push(()=>removeEventListener(T,Y,j))};i.__motion=!0,i.classList.contains("lp-js")||(i.classList.add("lp-js","lp-ready"),i.__readyAt=performance.now()-5e3,n(".lp-loader")?.classList.add("is-gone"));let a=n(".lp-nav"),l=n(".lp-story"),c=n(".lp-stage"),h=n(".lp-ledger"),d=n(".lp-stat-a"),u=n(".lp-stat-b"),f=n(".lp-hero-copy"),g=n(".lp-hero"),y=n(".lp-uni"),p=n(".lp-cta"),m=n(".lp-cta-orbit"),A=s(".lp-total > span"),S=s(".lp-count > span"),w=s(".lp-tally li"),O=n(".lp-gwords"),P=n(".lp-g1"),R=n(".lp-g2"),F=s(".lp-big"),ot=n(".lp-stats"),_=s(".lp-row"),M=_.map(T=>T.querySelector(".lp-lg img")),Q=[1,2,3].map(T=>_.findIndex(Y=>Y.dataset.off===String(T))),B=s(".lp-arw"),X=(T,Y,j)=>{let st=1-T;return 3*st*st*T*Y+3*st*T*T*j+T*T*T},at=T=>{let Y=0,j=1;for(let st=0;st<22;st++){let K=(Y+j)/2;X(K,.65,.35)<T?Y=K:j=K}return(Y+j)/2},k=T=>{T=ie(T);let Y=0,j=1;for(let st=0;st<22;st++){let K=(Y+j)/2;X(at(K),0,1)<T?Y=K:j=K}return(Y+j)/2};function ht(T){let Y=T.querySelector(".lp-arw-ic");if(!Y)return;let j=T.clientWidth,st=Y.offsetWidth,K=j-Y.offsetLeft-st,Et=Y.offsetLeft,vt=Math.max(1,Et-K);T.style.setProperty("--travel",vt+"px");let Xt=.72,C=T.getBoundingClientRect(),ft=C.width/j||1,z=G=>{let ct=G.getBoundingClientRect();return{a:(ct.left-C.left)/ft,b:(ct.right-C.left)/ft}};T.querySelectorAll(".lp-l1 .lp-ch").forEach(G=>{let ct=z(G);G.style.setProperty("--di",(Xt*k((Et-ct.b+4)/vt)).toFixed(3)+"s"),G.style.setProperty("--db",(Xt*k((ct.b-4-(Et-vt))/vt)+.06).toFixed(3)+"s")}),T.querySelectorAll(".lp-l2 .lp-ch").forEach(G=>{let ct=z(G);G.style.setProperty("--di",(Xt*k((Et+st-ct.a)/vt)).toFixed(3)+"s"),G.style.setProperty("--db",(Xt*k((ct.a-(Et+st-vt))/vt)).toFixed(3)+"s")})}let Z=s(".lp-rv, .lp-split, .lp-pills"),Mt=null;"IntersectionObserver"in window&&!t?(Mt=new IntersectionObserver(T=>T.forEach(Y=>{Y.isIntersecting&&(Y.target.classList.add("is-in"),Mt.unobserve(Y.target))}),{rootMargin:"0px 0px -8% 0px",threshold:.12}),Z.forEach(T=>Mt.observe(T))):Z.forEach(T=>T.classList.add("is-in")),!t&&"animate"in Element.prototype&&s(".lp-qa").forEach(T=>{let Y=T.querySelector("summary"),j=T.querySelector(".lp-ans-w"),st=j?.querySelector(".lp-ans");if(!Y||!j||!st)return;let K=null,Et=null,vt="cubic-bezier(.22,1,.36,1)",Xt="cubic-bezier(.65,0,.35,1)",C=ft=>{ft.preventDefault();let z=T.classList.contains("is-closing"),G=!T.open||z,ct=T.open?j.getBoundingClientRect().height:0;if(K&&(K.cancel(),K=null),Et&&(Et.cancel(),Et=null),G){T.classList.remove("is-closing"),s(".lp-qa[open]").forEach(kt=>{kt!==T&&(kt.open=!1)}),T.open=!0;let pt=j.scrollHeight;K=j.animate([{height:ct+"px"},{height:pt+"px"}],{duration:520,easing:vt}),Et=st.animate([{opacity:z?.4:0,transform:"translateY(-10px)"},{opacity:1,transform:"none"}],{duration:560,delay:z?0:70,easing:vt,fill:"backwards"}),K.onfinish=()=>{K=null}}else T.classList.add("is-closing"),K=j.animate([{height:ct+"px"},{height:"0px"}],{duration:480,easing:Xt,fill:"forwards"}),Et=st.animate([{opacity:1,transform:"none"},{opacity:0,transform:"translateY(-6px)"}],{duration:320,easing:"ease-out",fill:"forwards"}),K.onfinish=()=>{T.open=!1,T.classList.remove("is-closing"),K?.cancel(),K=null,Et?.cancel(),Et=null}};Y.addEventListener("click",C),r.push(()=>Y.removeEventListener("click",C))});let St=(()=>{try{let T=document.createElement("canvas");return!!(T.getContext("webgl2")||T.getContext("webgl"))}catch{return!1}})(),xt=null,Zt=!1;function Qt(){let T=n(".lp-nf");if(!T)return;T.textContent="";let Y=document.documentElement.clientWidth||innerWidth,j=Y<761,st=j?56:Math.max(58,Math.min(98,Y*.064));for(let K of or){let Et=j?K[2]:K[1];if(!Et||Et[3]!=="u")continue;let vt=hc(Et[2]),Xt=st*vt.sc,C=new Image;C.alt="",C.src=`visuals/logos/${K[0]}.svg`,C.style.cssText=`left:${(Et[0]*100).toFixed(1)}%;top:${(Et[1]*100).toFixed(1)}%;width:${Xt.toFixed(0)}px;height:${Xt.toFixed(0)}px;transform:translate(-50%,-50%) rotate(${K[3]}deg);opacity:${(1-vt.far*.5).toFixed(2)};`+(vt.far>.25?`filter:blur(${(vt.far*vt.far*7).toFixed(1)}px);box-shadow:none;`:""),T.appendChild(C)}}let et=!1;function lt(){i.classList.add("lp-nogl"),xt=null,Qt(),et||(et=!0,o("resize",Qt,{passive:!0}))}St||lt();let Tt=null;if(!t)try{Tt=new cc({lerp:.1,smoothWheel:!0})}catch{Tt=null}let q={navH:64,inset:8,slots:[],ledHead:null,listText:null,ctaHead:null,ctaFoot:null};s('a[href^="#"]').forEach(T=>{let Y=j=>{let st=T.getAttribute("href");if(st==="#")return;let K=st==="#top"?document.body:i.querySelector(st);if(!K)return;j.preventDefault();let Et=st==="#story"?0:-(q.navH||64)-(q.inset||8);Tt?Tt.scrollTo(st==="#top"?0:K,{offset:st==="#top"?0:Et,duration:1.5}):window.scrollTo({top:st==="#top"?0:K.getBoundingClientRect().top+scrollY+Et,behavior:t?"auto":"smooth"})};T.addEventListener("click",Y),r.push(()=>T.removeEventListener("click",Y))}),i.__hold=T=>{T?Tt?.stop():Tt?.start();let Y=document.documentElement.style,j=innerWidth-document.documentElement.clientWidth;T?j===0&&(Y.overflow="hidden"):Y.overflow=""},r.push(()=>{i.__hold=void 0});let zt=()=>a.classList.toggle("is-scrolled",scrollY>8);o("scroll",zt,{passive:!0}),zt();function Bt(){let T=scrollY,Y=document.documentElement.clientWidth||innerWidth,j=innerHeight,st=oe=>oe.getBoundingClientRect().top+T;q.W=Y,q.H=j,q.mobile=Y<761;let K=getComputedStyle(i);q.inset=parseFloat(K.getPropertyValue("--lp-inset"))*16||8,q.navH=a.offsetHeight||64,q.storyTop=st(l),q.L=Math.max(1,(l.offsetHeight-c.offsetHeight)/j);let Et=m.getBoundingClientRect();q.ctaTop=Et.top+T,q.ctaH=Et.height,q.ctaW=Et.width;let vt=y.getBoundingClientRect();q.uniR={l:vt.left,t:vt.top+T,w:vt.width,h:vt.height};let Xt=g.getBoundingClientRect();q.heroR={l:Xt.left,t:Xt.top+T,w:Xt.width,h:Xt.height};let C=f.getBoundingClientRect(),ft=parseFloat((f.style.transform||"").split(",")[1])||0;q.copy={l:C.left,r:C.right,t:C.top+T-ft,b:C.bottom+T-ft};let z=c.getBoundingClientRect(),G=_.map(oe=>{let pe=oe.style.transform;return oe.style.transform="none",pe});q.slots=_.map(oe=>{let pe=oe.querySelector(".lp-lg").getBoundingClientRect();return{x:pe.left+pe.width/2,y:pe.top+pe.height/2-z.top}}),_.forEach((oe,pe)=>{oe.style.transform=G[pe]}),q.ico=_[0].querySelector(".lp-lg").getBoundingClientRect().width||24,B.forEach(ht);let ct=h.querySelector(".lp-ledger-head").getBoundingClientRect(),pt=h.querySelector(".lp-list").getBoundingClientRect();q.ledHead={l:ct.left,t:ct.top-z.top,r:ct.right,b:ct.bottom-z.top},q.listText={l:(q.slots[0]?q.slots[0].x:pt.left)+q.ico/2+4,t:pt.top-z.top,r:pt.right,b:pt.bottom-z.top};let kt=p.querySelector(".lp-display").getBoundingClientRect(),ne=p.querySelector(".lp-lede").getBoundingClientRect(),fe=p.querySelector(".lp-again").getBoundingClientRect();q.ctaHead={l:kt.left,t:kt.top+T,r:kt.right,b:kt.bottom+T};let Jt=p.getBoundingClientRect();if(p.style.setProperty("--gy",(Et.top-Jt.top+Et.height/2).toFixed(0)+"px"),q.ctaFoot={l:Math.min(ne.left,fe.left),t:ne.top+T,r:Math.max(ne.right,fe.right),b:fe.bottom+T},O&&P&&R){q.gTop=st(O),q.gH=O.offsetHeight;let oe=P.querySelector(".lp-gk"),pe=R.querySelector(".lp-gk");q.g1c=oe.offsetLeft+oe.offsetWidth/2,q.g2c=pe.offsetLeft+pe.offsetWidth/2}ot&&(q.sTop=st(ot)),xt?.resize()}let Yt=new Map,Gt=(T,Y,j)=>{let st=Yt.get(T);st||(st={},Yt.set(T,st)),st[Y]!==j&&(st[Y]=j,T.style[Y]=j)},nt=-1;function E(T){if(T===nt)return;let Y=nt;nt=T;for(let j of[A,S,w])j.forEach((st,K)=>{st.classList.toggle("is-cur",K===T),st.classList.toggle("is-past",K<T),st.classList.toggle("is-fut",K>T),j!==w&&st.setAttribute("aria-hidden",K===T?"false":"true")});_.forEach(j=>{let st=+(j.dataset.off||0);if(!st)return;let K=T>=st;j.classList.contains("is-off")!==K&&(j.classList.toggle("is-off",K),j.querySelector(".lp-main-b")?.setAttribute("aria-hidden",K?"true":"false"),j.querySelector(".lp-alt-b")?.setAttribute("aria-hidden",K?"false":"true"),K&&Y>=0&&Y<st&&!t&&(j.classList.add("is-flash"),setTimeout(()=>j.classList.remove("is-flash"),700)))})}function gt(T){if(!P||!R)return;let Y=q.W*.55,j=(.5-T)*Y;P.style.transform=`translate3d(${(q.W/2-q.g1c+j).toFixed(1)}px,0,0)`,R.style.transform=`translate3d(${(q.W*.42-q.g2c-j).toFixed(1)}px,0,0)`}let ut=(T,Y)=>(T.dataset.pre||"")+Y.toFixed(+(T.dataset.dec||0))+(T.dataset.suf||""),$={y:0,t:0,s:0,q:0,D:0,F:0,P:0,I:0,cuts:[0,0,0],post:0,ctaC:0,ringV:0,enter:0,px:0,py:0,tx:0,ty:0,ho:1};function yt(T,Y){let j=q.H,st=q.storyTop,K=st>0?ie(T/st):1,Et=(T-st)/j,vt=T<st?K:1+Et;$.y=T,$.t=K,$.s=Et,$.q=vt,$.D=ie((vt-.3)/1.25),$.F=ie((Et-1.5)/.8),$.P=ie((Et-2.15)/.4),$.I=ie((Et-2.45)/.22),$.cuts[0]=ie((Et-2.85)/.36),$.cuts[1]=ie((Et-3.3)/.36),$.cuts[2]=ie((Et-3.75)/.36),$.post=ie((Et-q.L)/.6),$.ctaC=q.ctaTop-T+q.ctaH/2,$.ringV=t?0:Le(1-ie((Math.abs($.ctaC-j*.5)-j*.2)/(j*.5)));let Xt=i.__readyAt;$.enter=t?1:Xt===void 0?0:Ro(ie((Y-Xt)/1900))}e&&!t&&o("pointermove",T=>{$.tx=T.clientX/q.W*2-1,$.ty=T.clientY/q.H*2-1},{passive:!0});let Nt=0,Rt=0;function b(){let T=scrollY,Y=q.H,j=q.mobile,st=$.s,K=$.t;if(T<q.storyTop+Y){let ft=j?1-Ue(.22,.48,K):1-Ue(.06,.42,K);Gt(f,"opacity",ft.toFixed(3)),Gt(f,"transform",`translate3d(0,${(-K*(j?20:60)).toFixed(1)}px,0)`),Gt(f,"visibility",ft<.002?"hidden":"visible"),$.ho=ft}else $.ho=0;let Et=(ft,z,G,ct,pt,kt)=>{let ne=Le(ie((st-z)/(G-z))),fe=Le(ie((st-ct)/(pt-ct))),Jt=ne*(1-fe);if(xt){let oe=kt*(j?9:20),pe=j?3:6,ni=kt*-(1-ne)*(j?30:150),Ti=-(1-ne)*420+fe*240,Ae=(1-ne)*30-fe*40+Math.sin(Nt*.6+kt)*4*Jt;Gt(ft,"transform",`translate3d(${ni.toFixed(1)}px,${Ae.toFixed(1)}px,${Ti.toFixed(1)}px) rotateY(${(oe+$.px*4).toFixed(2)}deg) rotateX(${(pe-$.py*3).toFixed(2)}deg)`),Gt(ft,"filter",Jt<.99?`blur(${((1-Jt)*8).toFixed(1)}px)`:"none")}Gt(ft,"opacity",Jt.toFixed(3)),Gt(ft,"visibility",Jt>.001?"visible":"hidden")};Et(d,.02,.42,1.2,1.52,1),Et(u,.26,.66,1.3,1.62,-1);let vt=!!xt,Xt=vt?$.P:ie((st-1.6)/.5);Gt(h,"opacity",Xt.toFixed(3)),h.classList.toggle("is-live",Xt>.5),_.forEach((ft,z)=>{let G=Le(ie(Xt*1.7-z*.05));Gt(ft,"opacity",G.toFixed(3)),Gt(ft,"transform",`translate3d(${((1-G)*18).toFixed(1)}px,0,0)`);let ct=Q.indexOf(z),pt=ct>=0?Le($.cuts[ct]):0,kt=vt?$.I:Xt,ne=kt*(1-Ue(0,.14,pt))+Ue(.72,1,pt)*.5*kt;Gt(M[z],"opacity",ne.toFixed(3))});let C=0;$.cuts.forEach(ft=>{ft>.5&&C++}),E(C)}function v(T){if(O&&gt(ie((T+q.H-q.gTop)/(q.H+q.gH))),ot){let Y=q.sTop-T,j=ie((q.H-Y)/(q.H*.72)),st=j>.985?1:Ro(j);F.forEach(K=>{K.textContent=ut(K,+(K.dataset.to||0)*st)})}}St&&Promise.resolve().then(()=>(Wh(),Gh)).then(T=>T.startWorld(i,q,$,t)).then(T=>{if(Zt){T?.dispose();return}if(!T){lt();return}xt=T,J="m",t&&it()}).catch(T=>{console.warn("world",T),Zt||lt()});let U=0,J=!0;Bt();function it(){Bt(),O&&gt(.5),yt(0,0),xt?.still()}if(t)return E(3),_.forEach(T=>{T.style.opacity="1"}),M.forEach(T=>{T.style.opacity="1"}),it(),o("resize",it,{passive:!0}),o("load",it),document.fonts?.ready.then(()=>{Zt||it()}),()=>{Zt=!0,r.forEach(T=>T()),Mt?.disconnect(),xt?.dispose()};E(0),F.forEach(T=>{T.textContent=ut(T,0)});let tt=-1,Lt;o("resize",()=>{clearTimeout(Lt),Lt=setTimeout(()=>{J="m"},90)},{passive:!0}),document.fonts?.ready.then(()=>{J="m"});let _t=new ResizeObserver(()=>{J="m"});_t.observe(document.body),o("load",()=>{J="m"});let bt=!1;function $t(T){U=requestAnimationFrame($t),!bt&&i.__readyAt!==void 0&&(bt=!0,J="m"),Tt?.raf(T);let Y=Math.min(.05,(T-(Rt||T))/1e3);Rt=T,Nt+=Y,J==="m"&&(Bt(),J=!0);let j=scrollY;e||($.tx=Math.sin(Nt*.21)*.35,$.ty=Math.cos(Nt*.17)*.25),$.px+=($.tx-$.px)*.05,$.py+=($.ty-$.py)*.05,yt(j,T),b(),(j!==tt||J)&&(v(j),tt=j,J=!1),xt&&!document.hidden&&xt.frame(T,Y)}return U=requestAnimationFrame($t),()=>{Zt=!0,cancelAnimationFrame(U),clearTimeout(Lt),r.forEach(T=>T()),Mt?.disconnect(),_t.disconnect(),Tt?.destroy(),xt?.dispose(),document.documentElement.style.overflow=""}}var qh=document.querySelector(".landing");qh&&Xh(qh);})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
