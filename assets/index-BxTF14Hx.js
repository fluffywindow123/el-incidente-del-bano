(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kr="170",Dc=0,co=1,Uc=2,Ul=1,Nl=2,Sn=3,Vn=0,ze=1,sn=2,kn=0,Di=1,ho=2,uo=3,fo=4,Nc=5,ti=100,Fc=101,Oc=102,zc=103,Bc=104,kc=200,Hc=201,Gc=202,Vc=203,Ja=204,Za=205,Wc=206,Xc=207,qc=208,Yc=209,jc=210,$c=211,Kc=212,Jc=213,Zc=214,Qa=0,tr=1,er=2,Oi=3,nr=4,ir=5,sr=6,ar=7,Fl=0,Qc=1,th=2,Hn=0,eh=1,nh=2,ih=3,Ol=4,sh=5,ah=6,rh=7,zl=300,zi=301,Bi=302,rr=303,or=304,aa=306,ki=1e3,ni=1001,lr=1002,qe=1003,oh=1004,vs=1005,hn=1006,ua=1007,ii=1008,Tn=1009,Bl=1010,kl=1011,fs=1012,Hr=1013,ai=1014,un=1015,ps=1016,Gr=1017,Vr=1018,Hi=1020,Hl=35902,Gl=1021,Vl=1022,an=1023,Wl=1024,Xl=1025,Ui=1026,Gi=1027,Wr=1028,Xr=1029,ql=1030,qr=1031,Yr=1033,Ys=33776,js=33777,$s=33778,Ks=33779,cr=35840,hr=35841,ur=35842,dr=35843,fr=36196,pr=37492,mr=37496,gr=37808,xr=37809,vr=37810,_r=37811,yr=37812,Mr=37813,Sr=37814,br=37815,wr=37816,Er=37817,Tr=37818,Ar=37819,Rr=37820,Cr=37821,Js=36492,Pr=36494,Lr=36495,Yl=36283,Ir=36284,Dr=36285,Ur=36286,lh=3200,ch=3201,jl=0,hh=1,zn="",Me="srgb",Xi="srgb-linear",ra="linear",ne="srgb",hi=7680,po=519,uh=512,dh=513,fh=514,$l=515,ph=516,mh=517,gh=518,xh=519,Nr=35044,mo="300 es",bn=2e3,ea=2001;class qi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,t);t.target=null}}}const Le=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],da=Math.PI/180,Fr=180/Math.PI;function Gn(){const a=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Le[a&255]+Le[a>>8&255]+Le[a>>16&255]+Le[a>>24&255]+"-"+Le[t&255]+Le[t>>8&255]+"-"+Le[t>>16&15|64]+Le[t>>24&255]+"-"+Le[e&63|128]+Le[e>>8&255]+"-"+Le[e>>16&255]+Le[e>>24&255]+Le[n&255]+Le[n>>8&255]+Le[n>>16&255]+Le[n>>24&255]).toLowerCase()}function Re(a,t,e){return Math.max(t,Math.min(e,a))}function vh(a,t){return(a%t+t)%t}function fa(a,t,e){return(1-e)*a+e*t}function cn(a,t){switch(t.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function ie(a,t){switch(t.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class ct{constructor(t=0,e=0){ct.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*n-r*i+t.x,this.y=s*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Nt{constructor(t,e,n,i,s,r,o,l,c){Nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,r,o,l,c)}set(t,e,n,i,s,r,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,r=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],v=i[0],m=i[3],p=i[6],x=i[1],_=i[4],M=i[7],L=i[2],C=i[5],E=i[8];return s[0]=r*v+o*x+l*L,s[3]=r*m+o*_+l*C,s[6]=r*p+o*M+l*E,s[1]=c*v+h*x+u*L,s[4]=c*m+h*_+u*C,s[7]=c*p+h*M+u*E,s[2]=f*v+d*x+g*L,s[5]=f*m+d*_+g*C,s[8]=f*p+d*M+g*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*r*h-e*o*c-n*s*h+n*o*l+i*s*c-i*r*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*r-o*c,f=o*l-h*s,d=c*s-r*l,g=e*u+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(i*c-h*n)*v,t[2]=(o*n-i*r)*v,t[3]=f*v,t[4]=(h*e-i*l)*v,t[5]=(i*s-o*e)*v,t[6]=d*v,t[7]=(n*l-c*e)*v,t[8]=(r*e-n*s)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,r,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*r+c*o)+r+t,-i*c,i*l,-i*(-c*r+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(pa.makeScale(t,e)),this}rotate(t){return this.premultiply(pa.makeRotation(-t)),this}translate(t,e){return this.premultiply(pa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const pa=new Nt;function Kl(a){for(let t=a.length-1;t>=0;--t)if(a[t]>=65535)return!0;return!1}function na(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function _h(){const a=na("canvas");return a.style.display="block",a}const go={};function cs(a){a in go||(go[a]=!0,console.warn(a))}function yh(a,t,e){return new Promise(function(n,i){function s(){switch(a.clientWaitSync(t,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:i();break;case a.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function Mh(a){const t=a.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Sh(a){const t=a.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const jt={enabled:!0,workingColorSpace:Xi,spaces:{},convert:function(a,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ne&&(a.r=wn(a.r),a.g=wn(a.g),a.b=wn(a.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(a.applyMatrix3(this.spaces[t].toXYZ),a.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ne&&(a.r=Ni(a.r),a.g=Ni(a.g),a.b=Ni(a.b))),a},fromWorkingColorSpace:function(a,t){return this.convert(a,this.workingColorSpace,t)},toWorkingColorSpace:function(a,t){return this.convert(a,t,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===zn?ra:this.spaces[a].transfer},getLuminanceCoefficients:function(a,t=this.workingColorSpace){return a.fromArray(this.spaces[t].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,t,e){return a.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}};function wn(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Ni(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}const xo=[.64,.33,.3,.6,.15,.06],vo=[.2126,.7152,.0722],_o=[.3127,.329],yo=new Nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mo=new Nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);jt.define({[Xi]:{primaries:xo,whitePoint:_o,transfer:ra,toXYZ:yo,fromXYZ:Mo,luminanceCoefficients:vo,workingColorSpaceConfig:{unpackColorSpace:Me},outputColorSpaceConfig:{drawingBufferColorSpace:Me}},[Me]:{primaries:xo,whitePoint:_o,transfer:ne,toXYZ:yo,fromXYZ:Mo,luminanceCoefficients:vo,outputColorSpaceConfig:{drawingBufferColorSpace:Me}}});let ui;class bh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ui===void 0&&(ui=na("canvas")),ui.width=t.width,ui.height=t.height;const n=ui.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ui}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=na("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=wn(s[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(wn(e[n]/255)*255):e[n]=wn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let wh=0;class Jl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wh++}),this.uuid=Gn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?s.push(ma(i[r].image)):s.push(ma(i[r]))}else s=ma(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function ma(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?bh.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Eh=0;class Ue extends qi{constructor(t=Ue.DEFAULT_IMAGE,e=Ue.DEFAULT_MAPPING,n=ni,i=ni,s=hn,r=ii,o=an,l=Tn,c=Ue.DEFAULT_ANISOTROPY,h=zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Eh++}),this.uuid=Gn(),this.name="",this.source=new Jl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==zl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ki:t.x=t.x-Math.floor(t.x);break;case ni:t.x=t.x<0?0:1;break;case lr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ki:t.y=t.y-Math.floor(t.y);break;case ni:t.y=t.y<0?0:1;break;case lr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ue.DEFAULT_IMAGE=null;Ue.DEFAULT_MAPPING=zl;Ue.DEFAULT_ANISOTROPY=1;class se{constructor(t=0,e=0,n=0,i=1){se.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(c+1)/2,M=(d+1)/2,L=(p+1)/2,C=(h+f)/4,E=(u+v)/4,R=(g+m)/4;return _>M&&_>L?_<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(_),i=C/n,s=E/n):M>L?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=C/i,s=R/i):L<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(L),n=E/s,i=R/s),this.set(n,i,s,e),this}let x=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-v)/x,this.z=(f-h)/x,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Th extends qi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new se(0,0,t,e),this.scissorTest=!1,this.viewport=new se(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Ue(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let o=0;o<r;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Jl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ri extends Th{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Zl extends Ue{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=qe,this.minFilter=qe,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ah extends Ue{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=qe,this.minFilter=qe,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yi{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,r,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const f=s[r+0],d=s[r+1],g=s[r+2],v=s[r+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=v;return}if(u!==v||l!==f||c!==d||h!==g){let m=1-o;const p=l*f+c*d+h*g+u*v,x=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const L=Math.sqrt(_),C=Math.atan2(L,p*x);m=Math.sin(m*C)/L,o=Math.sin(o*C)/L}const M=o*x;if(l=l*m+f*M,c=c*m+d*M,h=h*m+g*M,u=u*m+v*M,m===1-o){const L=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=L,c*=L,h*=L,u*=L}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,r){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[r],f=s[r+1],d=s[r+2],g=s[r+3];return t[e]=o*g+h*u+l*d-c*f,t[e+1]=l*g+h*f+c*u-o*d,t[e+2]=c*g+h*d+o*f-l*u,t[e+3]=h*g-o*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(s/2),f=l(n/2),d=l(i/2),g=l(s/2);switch(r){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],r=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(r-i)*d}else if(n>o&&n>u){const d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+r)/d,this._z=(s+c)/d}else if(o>u){const d=2*Math.sqrt(1+o-n-u);this._w=(s-c)/d,this._x=(i+r)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-o);this._w=(r-i)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Re(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,r=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+r*o+i*c-s*l,this._y=i*h+r*l+s*o-n*c,this._z=s*h+r*c+n*l-i*o,this._w=r*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,r=this._w;let o=r*t._w+n*t._x+i*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-e;return this._w=d*r+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=r*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{constructor(t=0,e=0,n=0){T.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(So.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(So.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,r=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*i-o*n),h=2*(o*e-s*i),u=2*(s*n-r*e);return this.x=e+l*c+r*u-o*h,this.y=n+l*h+o*c-s*u,this.z=i+l*u+s*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,r=e.x,o=e.y,l=e.z;return this.x=i*l-s*o,this.y=s*r-n*l,this.z=n*o-i*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ga.copy(this).projectOnVector(t),this.sub(ga)}reflect(t){return this.sub(ga.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ga=new T,So=new Yi;class li{constructor(t=new T(1/0,1/0,1/0),e=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Qe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Qe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Qe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,Qe):Qe.fromBufferAttribute(s,r),Qe.applyMatrix4(t.matrixWorld),this.expandByPoint(Qe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),_s.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_s.copy(n.boundingBox)),_s.applyMatrix4(t.matrixWorld),this.union(_s)}const i=t.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Qe),Qe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zi),ys.subVectors(this.max,Zi),di.subVectors(t.a,Zi),fi.subVectors(t.b,Zi),pi.subVectors(t.c,Zi),Pn.subVectors(fi,di),Ln.subVectors(pi,fi),Xn.subVectors(di,pi);let e=[0,-Pn.z,Pn.y,0,-Ln.z,Ln.y,0,-Xn.z,Xn.y,Pn.z,0,-Pn.x,Ln.z,0,-Ln.x,Xn.z,0,-Xn.x,-Pn.y,Pn.x,0,-Ln.y,Ln.x,0,-Xn.y,Xn.x,0];return!xa(e,di,fi,pi,ys)||(e=[1,0,0,0,1,0,0,0,1],!xa(e,di,fi,pi,ys))?!1:(Ms.crossVectors(Pn,Ln),e=[Ms.x,Ms.y,Ms.z],xa(e,di,fi,pi,ys))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Qe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Qe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const xn=[new T,new T,new T,new T,new T,new T,new T,new T],Qe=new T,_s=new li,di=new T,fi=new T,pi=new T,Pn=new T,Ln=new T,Xn=new T,Zi=new T,ys=new T,Ms=new T,qn=new T;function xa(a,t,e,n,i){for(let s=0,r=a.length-3;s<=r;s+=3){qn.fromArray(a,s);const o=i.x*Math.abs(qn.x)+i.y*Math.abs(qn.y)+i.z*Math.abs(qn.z),l=t.dot(qn),c=e.dot(qn),h=n.dot(qn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Rh=new li,Qi=new T,va=new T;class ms{constructor(t=new T,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Rh.setFromPoints(t).getCenter(n);let i=0;for(let s=0,r=t.length;s<r;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qi.subVectors(t,this.center);const e=Qi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Qi,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(va.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qi.copy(t.center).add(va)),this.expandByPoint(Qi.copy(t.center).sub(va))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const vn=new T,_a=new T,Ss=new T,In=new T,ya=new T,bs=new T,Ma=new T;class Ch{constructor(t=new T,e=new T(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,vn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=vn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(vn.copy(this.origin).addScaledVector(this.direction,e),vn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){_a.copy(t).add(e).multiplyScalar(.5),Ss.copy(e).sub(t).normalize(),In.copy(this.origin).sub(_a);const s=t.distanceTo(e)*.5,r=-this.direction.dot(Ss),o=In.dot(this.direction),l=-In.dot(Ss),c=In.lengthSq(),h=Math.abs(1-r*r);let u,f,d,g;if(h>0)if(u=r*l-o,f=r*o-l,g=s*h,u>=0)if(f>=-g)if(f<=g){const v=1/h;u*=v,f*=v,d=u*(u+r*f+2*o)+f*(r*u+f+2*l)+c}else f=s,u=Math.max(0,-(r*f+o)),d=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(r*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-r*s+o)),f=u>0?-s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(u=Math.max(0,-(r*s+o)),f=u>0?s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c);else f=r>0?-s:s,u=Math.max(0,-(r*f+o)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(_a).addScaledVector(Ss,f),d}intersectSphere(t,e){vn.subVectors(t.center,this.origin);const n=vn.dot(this.direction),i=vn.dot(vn)-n*n,s=t.radius*t.radius;if(i>s)return null;const r=Math.sqrt(s-i),o=n-r,l=n+r;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,r,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(s=(t.min.y-f.y)*h,r=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,r=(t.min.y-f.y)*h),n>r||s>i||((s>n||isNaN(n))&&(n=s),(r<i||isNaN(i))&&(i=r),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,vn)!==null}intersectTriangle(t,e,n,i,s){ya.subVectors(e,t),bs.subVectors(n,t),Ma.crossVectors(ya,bs);let r=this.direction.dot(Ma),o;if(r>0){if(i)return null;o=1}else if(r<0)o=-1,r=-r;else return null;In.subVectors(this.origin,t);const l=o*this.direction.dot(bs.crossVectors(In,bs));if(l<0)return null;const c=o*this.direction.dot(ya.cross(In));if(c<0||l+c>r)return null;const h=-o*In.dot(Ma);return h<0?null:this.at(h/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ee{constructor(t,e,n,i,s,r,o,l,c,h,u,f,d,g,v,m){ee.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,r,o,l,c,h,u,f,d,g,v,m)}set(t,e,n,i,s,r,o,l,c,h,u,f,d,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=r,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ee().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/mi.setFromMatrixColumn(t,0).length(),s=1/mi.setFromMatrixColumn(t,1).length(),r=1/mi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,r=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const f=r*h,d=r*u,g=o*h,v=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=f-v*c,e[9]=-o*l,e[2]=v-f*c,e[6]=g+d*c,e[10]=r*l}else if(t.order==="YXZ"){const f=l*h,d=l*u,g=c*h,v=c*u;e[0]=f+v*o,e[4]=g*o-d,e[8]=r*c,e[1]=r*u,e[5]=r*h,e[9]=-o,e[2]=d*o-g,e[6]=v+f*o,e[10]=r*l}else if(t.order==="ZXY"){const f=l*h,d=l*u,g=c*h,v=c*u;e[0]=f-v*o,e[4]=-r*u,e[8]=g+d*o,e[1]=d+g*o,e[5]=r*h,e[9]=v-f*o,e[2]=-r*c,e[6]=o,e[10]=r*l}else if(t.order==="ZYX"){const f=r*h,d=r*u,g=o*h,v=o*u;e[0]=l*h,e[4]=g*c-d,e[8]=f*c+v,e[1]=l*u,e[5]=v*c+f,e[9]=d*c-g,e[2]=-c,e[6]=o*l,e[10]=r*l}else if(t.order==="YZX"){const f=r*l,d=r*c,g=o*l,v=o*c;e[0]=l*h,e[4]=v-f*u,e[8]=g*u+d,e[1]=u,e[5]=r*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*u+g,e[10]=f-v*u}else if(t.order==="XZY"){const f=r*l,d=r*c,g=o*l,v=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+v,e[5]=r*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=o*h,e[10]=v*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ph,t,Lh)}lookAt(t,e,n){const i=this.elements;return Ve.subVectors(t,e),Ve.lengthSq()===0&&(Ve.z=1),Ve.normalize(),Dn.crossVectors(n,Ve),Dn.lengthSq()===0&&(Math.abs(n.z)===1?Ve.x+=1e-4:Ve.z+=1e-4,Ve.normalize(),Dn.crossVectors(n,Ve)),Dn.normalize(),ws.crossVectors(Ve,Dn),i[0]=Dn.x,i[4]=ws.x,i[8]=Ve.x,i[1]=Dn.y,i[5]=ws.y,i[9]=Ve.y,i[2]=Dn.z,i[6]=ws.z,i[10]=Ve.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,r=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],v=n[6],m=n[10],p=n[14],x=n[3],_=n[7],M=n[11],L=n[15],C=i[0],E=i[4],R=i[8],S=i[12],y=i[1],A=i[5],D=i[9],z=i[13],X=i[2],q=i[6],G=i[10],J=i[14],W=i[3],rt=i[7],ft=i[11],wt=i[15];return s[0]=r*C+o*y+l*X+c*W,s[4]=r*E+o*A+l*q+c*rt,s[8]=r*R+o*D+l*G+c*ft,s[12]=r*S+o*z+l*J+c*wt,s[1]=h*C+u*y+f*X+d*W,s[5]=h*E+u*A+f*q+d*rt,s[9]=h*R+u*D+f*G+d*ft,s[13]=h*S+u*z+f*J+d*wt,s[2]=g*C+v*y+m*X+p*W,s[6]=g*E+v*A+m*q+p*rt,s[10]=g*R+v*D+m*G+p*ft,s[14]=g*S+v*z+m*J+p*wt,s[3]=x*C+_*y+M*X+L*W,s[7]=x*E+_*A+M*q+L*rt,s[11]=x*R+_*D+M*G+L*ft,s[15]=x*S+_*z+M*J+L*wt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],r=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+s*l*u-i*c*u-s*o*f+n*c*f+i*o*d-n*l*d)+v*(+e*l*d-e*c*f+s*r*f-i*r*d+i*c*h-s*l*h)+m*(+e*c*u-e*o*d-s*r*u+n*r*d+s*o*h-n*c*h)+p*(-i*o*h-e*l*u+e*o*f+i*r*u-n*r*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],v=t[13],m=t[14],p=t[15],x=u*m*c-v*f*c+v*l*d-o*m*d-u*l*p+o*f*p,_=g*f*c-h*m*c-g*l*d+r*m*d+h*l*p-r*f*p,M=h*v*c-g*u*c+g*o*d-r*v*d-h*o*p+r*u*p,L=g*u*l-h*v*l-g*o*f+r*v*f+h*o*m-r*u*m,C=e*x+n*_+i*M+s*L;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/C;return t[0]=x*E,t[1]=(v*f*s-u*m*s-v*i*d+n*m*d+u*i*p-n*f*p)*E,t[2]=(o*m*s-v*l*s+v*i*c-n*m*c-o*i*p+n*l*p)*E,t[3]=(u*l*s-o*f*s-u*i*c+n*f*c+o*i*d-n*l*d)*E,t[4]=_*E,t[5]=(h*m*s-g*f*s+g*i*d-e*m*d-h*i*p+e*f*p)*E,t[6]=(g*l*s-r*m*s-g*i*c+e*m*c+r*i*p-e*l*p)*E,t[7]=(r*f*s-h*l*s+h*i*c-e*f*c-r*i*d+e*l*d)*E,t[8]=M*E,t[9]=(g*u*s-h*v*s-g*n*d+e*v*d+h*n*p-e*u*p)*E,t[10]=(r*v*s-g*o*s+g*n*c-e*v*c-r*n*p+e*o*p)*E,t[11]=(h*o*s-r*u*s-h*n*c+e*u*c+r*n*d-e*o*d)*E,t[12]=L*E,t[13]=(h*v*i-g*u*i+g*n*f-e*v*f-h*n*m+e*u*m)*E,t[14]=(g*o*i-r*v*i-g*n*l+e*v*l+r*n*m-e*o*m)*E,t[15]=(r*u*i-h*o*i+h*n*l-e*u*l-r*n*f+e*o*f)*E,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,r=t.x,o=t.y,l=t.z,c=s*r,h=s*o;return this.set(c*r+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*r,0,c*l-i*o,h*l+i*r,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,r){return this.set(1,n,s,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,r=e._y,o=e._z,l=e._w,c=s+s,h=r+r,u=o+o,f=s*c,d=s*h,g=s*u,v=r*h,m=r*u,p=o*u,x=l*c,_=l*h,M=l*u,L=n.x,C=n.y,E=n.z;return i[0]=(1-(v+p))*L,i[1]=(d+M)*L,i[2]=(g-_)*L,i[3]=0,i[4]=(d-M)*C,i[5]=(1-(f+p))*C,i[6]=(m+x)*C,i[7]=0,i[8]=(g+_)*E,i[9]=(m-x)*E,i[10]=(1-(f+v))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=mi.set(i[0],i[1],i[2]).length();const r=mi.set(i[4],i[5],i[6]).length(),o=mi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],tn.copy(this);const c=1/s,h=1/r,u=1/o;return tn.elements[0]*=c,tn.elements[1]*=c,tn.elements[2]*=c,tn.elements[4]*=h,tn.elements[5]*=h,tn.elements[6]*=h,tn.elements[8]*=u,tn.elements[9]*=u,tn.elements[10]*=u,e.setFromRotationMatrix(tn),n.x=s,n.y=r,n.z=o,this}makePerspective(t,e,n,i,s,r,o=bn){const l=this.elements,c=2*s/(e-t),h=2*s/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i);let d,g;if(o===bn)d=-(r+s)/(r-s),g=-2*r*s/(r-s);else if(o===ea)d=-r/(r-s),g=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,r,o=bn){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(r-s),f=(e+t)*c,d=(n+i)*h;let g,v;if(o===bn)g=(r+s)*u,v=-2*u;else if(o===ea)g=s*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const mi=new T,tn=new ee,Ph=new T(0,0,0),Lh=new T(1,1,1),Dn=new T,ws=new T,Ve=new T,bo=new ee,wo=new Yi;class rn{constructor(t=0,e=0,n=0,i=rn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],r=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(Re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Re(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Re(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Re(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Re(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return bo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(bo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return wo.setFromEuler(this),this.setFromQuaternion(wo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}rn.DEFAULT_ORDER="XYZ";class Ql{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ih=0;const Eo=new T,gi=new Yi,_n=new ee,Es=new T,ts=new T,Dh=new T,Uh=new Yi,To=new T(1,0,0),Ao=new T(0,1,0),Ro=new T(0,0,1),Co={type:"added"},Nh={type:"removed"},xi={type:"childadded",child:null},Sa={type:"childremoved",child:null};class Ee extends qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ih++}),this.uuid=Gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ee.DEFAULT_UP.clone();const t=new T,e=new rn,n=new Yi,i=new T(1,1,1);function s(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ee},normalMatrix:{value:new Nt}}),this.matrix=new ee,this.matrixWorld=new ee,this.matrixAutoUpdate=Ee.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ql,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return gi.setFromAxisAngle(t,e),this.quaternion.multiply(gi),this}rotateOnWorldAxis(t,e){return gi.setFromAxisAngle(t,e),this.quaternion.premultiply(gi),this}rotateX(t){return this.rotateOnAxis(To,t)}rotateY(t){return this.rotateOnAxis(Ao,t)}rotateZ(t){return this.rotateOnAxis(Ro,t)}translateOnAxis(t,e){return Eo.copy(t).applyQuaternion(this.quaternion),this.position.add(Eo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(To,t)}translateY(t){return this.translateOnAxis(Ao,t)}translateZ(t){return this.translateOnAxis(Ro,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Es.copy(t):Es.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt(ts,Es,this.up):_n.lookAt(Es,ts,this.up),this.quaternion.setFromRotationMatrix(_n),i&&(_n.extractRotation(i.matrixWorld),gi.setFromRotationMatrix(_n),this.quaternion.premultiply(gi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Co),xi.child=t,this.dispatchEvent(xi),xi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Nh),Sa.child=t,this.dispatchEvent(Sa),Sa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),_n.multiply(t.parent.matrixWorld)),t.applyMatrix4(_n),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Co),xi.child=t,this.dispatchEvent(xi),xi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,t,Dh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,Uh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(t.animations,l))}}if(e){const o=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),u=r(t.shapes),f=r(t.skeletons),d=r(t.animations),g=r(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Ee.DEFAULT_UP=new T(0,1,0);Ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const en=new T,yn=new T,ba=new T,Mn=new T,vi=new T,_i=new T,Po=new T,wa=new T,Ea=new T,Ta=new T,Aa=new se,Ra=new se,Ca=new se;class Ke{constructor(t=new T,e=new T,n=new T){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),en.subVectors(t,e),i.cross(en);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){en.subVectors(i,e),yn.subVectors(n,e),ba.subVectors(t,e);const r=en.dot(en),o=en.dot(yn),l=en.dot(ba),c=yn.dot(yn),h=yn.dot(ba),u=r*c-o*o;if(u===0)return s.set(0,0,0),null;const f=1/u,d=(c*l-o*h)*f,g=(r*h-o*l)*f;return s.set(1-d-g,g,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Mn)===null?!1:Mn.x>=0&&Mn.y>=0&&Mn.x+Mn.y<=1}static getInterpolation(t,e,n,i,s,r,o,l){return this.getBarycoord(t,e,n,i,Mn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Mn.x),l.addScaledVector(r,Mn.y),l.addScaledVector(o,Mn.z),l)}static getInterpolatedAttribute(t,e,n,i,s,r){return Aa.setScalar(0),Ra.setScalar(0),Ca.setScalar(0),Aa.fromBufferAttribute(t,e),Ra.fromBufferAttribute(t,n),Ca.fromBufferAttribute(t,i),r.setScalar(0),r.addScaledVector(Aa,s.x),r.addScaledVector(Ra,s.y),r.addScaledVector(Ca,s.z),r}static isFrontFacing(t,e,n,i){return en.subVectors(n,e),yn.subVectors(t,e),en.cross(yn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return en.subVectors(this.c,this.b),yn.subVectors(this.a,this.b),en.cross(yn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ke.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ke.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return Ke.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return Ke.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ke.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let r,o;vi.subVectors(i,n),_i.subVectors(s,n),wa.subVectors(t,n);const l=vi.dot(wa),c=_i.dot(wa);if(l<=0&&c<=0)return e.copy(n);Ea.subVectors(t,i);const h=vi.dot(Ea),u=_i.dot(Ea);if(h>=0&&u<=h)return e.copy(i);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return r=l/(l-h),e.copy(n).addScaledVector(vi,r);Ta.subVectors(t,s);const d=vi.dot(Ta),g=_i.dot(Ta);if(g>=0&&d<=g)return e.copy(s);const v=d*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(_i,o);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return Po.subVectors(s,i),o=(u-h)/(u-h+(d-g)),e.copy(i).addScaledVector(Po,o);const p=1/(m+v+f);return r=v*p,o=f*p,e.copy(n).addScaledVector(vi,r).addScaledVector(_i,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const tc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Un={h:0,s:0,l:0},Ts={h:0,s:0,l:0};function Pa(a,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?a+(t-a)*6*e:e<1/2?t:e<2/3?a+(t-a)*6*(2/3-e):a}class It{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Me){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,jt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=jt.workingColorSpace){if(t=vh(t,1),e=Re(e,0,1),n=Re(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,r=2*n-s;this.r=Pa(r,s,t+1/3),this.g=Pa(r,s,t),this.b=Pa(r,s,t-1/3)}return jt.toWorkingColorSpace(this,i),this}setStyle(t,e=Me){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Me){const n=tc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=wn(t.r),this.g=wn(t.g),this.b=wn(t.b),this}copyLinearToSRGB(t){return this.r=Ni(t.r),this.g=Ni(t.g),this.b=Ni(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Me){return jt.fromWorkingColorSpace(Ie.copy(this),t),Math.round(Re(Ie.r*255,0,255))*65536+Math.round(Re(Ie.g*255,0,255))*256+Math.round(Re(Ie.b*255,0,255))}getHexString(t=Me){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.fromWorkingColorSpace(Ie.copy(this),e);const n=Ie.r,i=Ie.g,s=Ie.b,r=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const h=(o+r)/2;if(o===r)l=0,c=0;else{const u=r-o;switch(c=h<=.5?u/(r+o):u/(2-r-o),r){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=jt.workingColorSpace){return jt.fromWorkingColorSpace(Ie.copy(this),e),t.r=Ie.r,t.g=Ie.g,t.b=Ie.b,t}getStyle(t=Me){jt.fromWorkingColorSpace(Ie.copy(this),t);const e=Ie.r,n=Ie.g,i=Ie.b;return t!==Me?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Un),this.setHSL(Un.h+t,Un.s+e,Un.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Un),t.getHSL(Ts);const n=fa(Un.h,Ts.h,e),i=fa(Un.s,Ts.s,e),s=fa(Un.l,Ts.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ie=new It;It.NAMES=tc;let Fh=0;class ji extends qi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fh++}),this.uuid=Gn(),this.name="",this.blending=Di,this.side=Vn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ja,this.blendDst=Za,this.blendEquation=ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new It(0,0,0),this.blendAlpha=0,this.depthFunc=Oi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=po,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hi,this.stencilZFail=hi,this.stencilZPass=hi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Di&&(n.blending=this.blending),this.side!==Vn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ja&&(n.blendSrc=this.blendSrc),this.blendDst!==Za&&(n.blendDst=this.blendDst),this.blendEquation!==ti&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Oi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==po&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==hi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==hi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const r=[];for(const o in s){const l=s[o];delete l.metadata,r.push(l)}return r}if(e){const s=i(t.textures),r=i(t.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ec extends ji{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.combine=Fl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ye=new T,As=new ct;class Be{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Nr,this.updateRanges=[],this.gpuType=un,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)As.fromBufferAttribute(this,e),As.applyMatrix3(t),this.setXY(e,As.x,As.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix3(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix4(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyNormalMatrix(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.transformDirection(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=cn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ie(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=cn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=cn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=cn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=cn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),i=ie(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),i=ie(i,this.array),s=ie(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Nr&&(t.usage=this.usage),t}}class nc extends Be{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ic extends Be{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class de extends Be{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Oh=0;const $e=new ee,La=new Ee,yi=new T,We=new li,es=new li,we=new T;class ke extends qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Oh++}),this.uuid=Gn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Kl(t)?ic:nc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Nt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return $e.makeRotationFromQuaternion(t),this.applyMatrix4($e),this}rotateX(t){return $e.makeRotationX(t),this.applyMatrix4($e),this}rotateY(t){return $e.makeRotationY(t),this.applyMatrix4($e),this}rotateZ(t){return $e.makeRotationZ(t),this.applyMatrix4($e),this}translate(t,e,n){return $e.makeTranslation(t,e,n),this.applyMatrix4($e),this}scale(t,e,n){return $e.makeScale(t,e,n),this.applyMatrix4($e),this}lookAt(t){return La.lookAt(t),La.updateMatrix(),this.applyMatrix4(La.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yi).negate(),this.translate(yi.x,yi.y,yi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,s=t.length;i<s;i++){const r=t[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new de(n,3))}else{for(let n=0,i=e.count;n<i;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new li);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];We.setFromBufferAttribute(s),this.morphTargetsRelative?(we.addVectors(this.boundingBox.min,We.min),this.boundingBox.expandByPoint(we),we.addVectors(this.boundingBox.max,We.max),this.boundingBox.expandByPoint(we)):(this.boundingBox.expandByPoint(We.min),this.boundingBox.expandByPoint(We.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ms);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(t){const n=this.boundingSphere.center;if(We.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){const o=e[s];es.setFromBufferAttribute(o),this.morphTargetsRelative?(we.addVectors(We.min,es.min),We.expandByPoint(we),we.addVectors(We.max,es.max),We.expandByPoint(we)):(We.expandByPoint(es.min),We.expandByPoint(es.max))}We.getCenter(n);let i=0;for(let s=0,r=t.count;s<r;s++)we.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(we));if(e)for(let s=0,r=e.length;s<r;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)we.fromBufferAttribute(o,c),l&&(yi.fromBufferAttribute(t,c),we.add(yi)),i=Math.max(i,n.distanceToSquared(we))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Be(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<n.count;R++)o[R]=new T,l[R]=new T;const c=new T,h=new T,u=new T,f=new ct,d=new ct,g=new ct,v=new T,m=new T;function p(R,S,y){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,y),f.fromBufferAttribute(s,R),d.fromBufferAttribute(s,S),g.fromBufferAttribute(s,y),h.sub(c),u.sub(c),d.sub(f),g.sub(f);const A=1/(d.x*g.y-g.x*d.y);isFinite(A)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(A),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(A),o[R].add(v),o[S].add(v),o[y].add(v),l[R].add(m),l[S].add(m),l[y].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let R=0,S=x.length;R<S;++R){const y=x[R],A=y.start,D=y.count;for(let z=A,X=A+D;z<X;z+=3)p(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const _=new T,M=new T,L=new T,C=new T;function E(R){L.fromBufferAttribute(i,R),C.copy(L);const S=o[R];_.copy(S),_.sub(L.multiplyScalar(L.dot(S))).normalize(),M.crossVectors(C,S);const A=M.dot(l[R])<0?-1:1;r.setXYZW(R,_.x,_.y,_.z,A)}for(let R=0,S=x.length;R<S;++R){const y=x[R],A=y.start,D=y.count;for(let z=A,X=A+D;z<X;z+=3)E(t.getX(z+0)),E(t.getX(z+1)),E(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Be(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new T,s=new T,r=new T,o=new T,l=new T,c=new T,h=new T,u=new T;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),v=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,m),h.subVectors(r,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),r.fromBufferAttribute(e,f+2),h.subVectors(r,s),u.subVectors(i,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)we.fromBufferAttribute(t,e),we.normalize(),t.setXYZ(e,we.x,we.y,we.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let d=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?d=l[v]*o.data.stride+o.offset:d=l[v]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new Be(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ke,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],u=s[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,h=r.length;c<h;c++){const u=r[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lo=new ee,Yn=new Ch,Rs=new ms,Io=new T,Cs=new T,Ps=new T,Ls=new T,Ia=new T,Is=new T,Do=new T,Ds=new T;class Jt extends Ee{constructor(t=new ke,e=new ec){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(s&&o){Is.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],u=s[l];h!==0&&(Ia.fromBufferAttribute(u,t),r?Is.addScaledVector(Ia,h):Is.addScaledVector(Ia.sub(e),h))}e.add(Is)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Rs.copy(n.boundingSphere),Rs.applyMatrix4(s),Yn.copy(t.ray).recast(t.near),!(Rs.containsPoint(Yn.origin)===!1&&(Yn.intersectSphere(Rs,Io)===null||Yn.origin.distanceToSquared(Io)>(t.far-t.near)**2))&&(Lo.copy(s).invert(),Yn.copy(t.ray).applyMatrix4(Lo),!(n.boundingBox!==null&&Yn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Yn)))}_computeIntersections(t,e,n){let i;const s=this.geometry,r=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=r[m.materialIndex],x=Math.max(m.start,d.start),_=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let M=x,L=_;M<L;M+=3){const C=o.getX(M),E=o.getX(M+1),R=o.getX(M+2);i=Us(this,p,t,n,c,h,u,C,E,R),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const x=o.getX(m),_=o.getX(m+1),M=o.getX(m+2);i=Us(this,r,t,n,c,h,u,x,_,M),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=r[m.materialIndex],x=Math.max(m.start,d.start),_=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let M=x,L=_;M<L;M+=3){const C=M,E=M+1,R=M+2;i=Us(this,p,t,n,c,h,u,C,E,R),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const x=m,_=m+1,M=m+2;i=Us(this,r,t,n,c,h,u,x,_,M),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function zh(a,t,e,n,i,s,r,o){let l;if(t.side===ze?l=n.intersectTriangle(r,s,i,!0,o):l=n.intersectTriangle(i,s,r,t.side===Vn,o),l===null)return null;Ds.copy(o),Ds.applyMatrix4(a.matrixWorld);const c=e.ray.origin.distanceTo(Ds);return c<e.near||c>e.far?null:{distance:c,point:Ds.clone(),object:a}}function Us(a,t,e,n,i,s,r,o,l,c){a.getVertexPosition(o,Cs),a.getVertexPosition(l,Ps),a.getVertexPosition(c,Ls);const h=zh(a,t,e,n,Cs,Ps,Ls,Do);if(h){const u=new T;Ke.getBarycoord(Do,Cs,Ps,Ls,u),i&&(h.uv=Ke.getInterpolatedAttribute(i,o,l,c,u,new ct)),s&&(h.uv1=Ke.getInterpolatedAttribute(s,o,l,c,u,new ct)),r&&(h.normal=Ke.getInterpolatedAttribute(r,o,l,c,u,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new T,materialIndex:0};Ke.getNormal(Cs,Ps,Ls,f.normal),h.face=f,h.barycoord=u}return h}class me extends ke{constructor(t=1,e=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};const o=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,r,s,0),g("z","y","x",1,-1,n,e,-t,r,s,1),g("x","z","y",1,1,t,n,e,i,r,2),g("x","z","y",1,-1,t,n,-e,i,r,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new de(c,3)),this.setAttribute("normal",new de(h,3)),this.setAttribute("uv",new de(u,2));function g(v,m,p,x,_,M,L,C,E,R,S){const y=M/E,A=L/R,D=M/2,z=L/2,X=C/2,q=E+1,G=R+1;let J=0,W=0;const rt=new T;for(let ft=0;ft<G;ft++){const wt=ft*A-z;for(let Bt=0;Bt<q;Bt++){const ae=Bt*y-D;rt[v]=ae*x,rt[m]=wt*_,rt[p]=X,c.push(rt.x,rt.y,rt.z),rt[v]=0,rt[m]=0,rt[p]=C>0?1:-1,h.push(rt.x,rt.y,rt.z),u.push(Bt/E),u.push(1-ft/R),J+=1}}for(let ft=0;ft<R;ft++)for(let wt=0;wt<E;wt++){const Bt=f+wt+q*ft,ae=f+wt+q*(ft+1),j=f+(wt+1)+q*(ft+1),it=f+(wt+1)+q*ft;l.push(Bt,ae,it),l.push(ae,j,it),W+=6}o.addGroup(d,W,S),d+=W,f+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new me(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Vi(a){const t={};for(const e in a){t[e]={};for(const n in a[e]){const i=a[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Fe(a){const t={};for(let e=0;e<a.length;e++){const n=Vi(a[e]);for(const i in n)t[i]=n[i]}return t}function Bh(a){const t=[];for(let e=0;e<a.length;e++)t.push(a[e].clone());return t}function sc(a){const t=a.getRenderTarget();return t===null?a.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}const kh={clone:Vi,merge:Fe};var Hh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class An extends ji{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hh,this.fragmentShader=Gh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Vi(t.uniforms),this.uniformsGroups=Bh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class ac extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ee,this.projectionMatrix=new ee,this.projectionMatrixInverse=new ee,this.coordinateSystem=bn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Nn=new T,Uo=new ct,No=new ct;class Xe extends ac{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Fr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(da*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Fr*2*Math.atan(Math.tan(da*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Nn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Nn.x,Nn.y).multiplyScalar(-t/Nn.z),Nn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Nn.x,Nn.y).multiplyScalar(-t/Nn.z)}getViewSize(t,e){return this.getViewBounds(t,Uo,No),e.subVectors(No,Uo)}setViewOffset(t,e,n,i,s,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(da*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*i/l,e-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Mi=-90,Si=1;class Vh extends Ee{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Xe(Mi,Si,t,e);i.layers=this.layers,this.add(i);const s=new Xe(Mi,Si,t,e);s.layers=this.layers,this.add(s);const r=new Xe(Mi,Si,t,e);r.layers=this.layers,this.add(r);const o=new Xe(Mi,Si,t,e);o.layers=this.layers,this.add(o);const l=new Xe(Mi,Si,t,e);l.layers=this.layers,this.add(l);const c=new Xe(Mi,Si,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,r,o,l]=e;for(const c of e)this.remove(c);if(t===bn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ea)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,r,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,r),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class rc extends Ue{constructor(t,e,n,i,s,r,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:zi,super(t,e,n,i,s,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Wh extends ri{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new rc(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:hn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new me(5,5,5),s=new An({name:"CubemapFromEquirect",uniforms:Vi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ze,blending:kn});s.uniforms.tEquirect.value=e;const r=new Jt(i,s),o=e.minFilter;return e.minFilter===ii&&(e.minFilter=hn),new Vh(1,10,this).update(t,r),e.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(s)}}const Da=new T,Xh=new T,qh=new Nt;class Zn{constructor(t=new T(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Da.subVectors(n,e).cross(Xh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Da),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||qh.getNormalMatrix(t),i=this.coplanarPoint(Da).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const jn=new ms,Ns=new T;class jr{constructor(t=new Zn,e=new Zn,n=new Zn,i=new Zn,s=new Zn,r=new Zn){this.planes=[t,e,n,i,s,r]}set(t,e,n,i,s,r){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=bn){const n=this.planes,i=t.elements,s=i[0],r=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],d=i[8],g=i[9],v=i[10],m=i[11],p=i[12],x=i[13],_=i[14],M=i[15];if(n[0].setComponents(l-s,f-c,m-d,M-p).normalize(),n[1].setComponents(l+s,f+c,m+d,M+p).normalize(),n[2].setComponents(l+r,f+h,m+g,M+x).normalize(),n[3].setComponents(l-r,f-h,m-g,M-x).normalize(),n[4].setComponents(l-o,f-u,m-v,M-_).normalize(),e===bn)n[5].setComponents(l+o,f+u,m+v,M+_).normalize();else if(e===ea)n[5].setComponents(o,u,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),jn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),jn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(jn)}intersectsSprite(t){return jn.center.set(0,0,0),jn.radius=.7071067811865476,jn.applyMatrix4(t.matrixWorld),this.intersectsSphere(jn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Ns.x=i.normal.x>0?t.max.x:t.min.x,Ns.y=i.normal.y>0?t.max.y:t.min.y,Ns.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ns)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function oc(){let a=null,t=!1,e=null,n=null;function i(s,r){e(s,r),n=a.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=a.requestAnimationFrame(i),t=!0)},stop:function(){a.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){a=s}}}function Yh(a){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=a.createBuffer();a.bindBuffer(l,f),a.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=a.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=a.HALF_FLOAT:d=a.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=a.SHORT;else if(c instanceof Uint32Array)d=a.UNSIGNED_INT;else if(c instanceof Int32Array)d=a.INT;else if(c instanceof Int8Array)d=a.BYTE;else if(c instanceof Uint8Array)d=a.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(a.bindBuffer(c,o),u.length===0)a.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],v=u[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,u[f]=v)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const v=u[d];a.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(a.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:r}}class fn extends ke{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,r=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,f=e/l,d=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const x=p*f-r;for(let _=0;_<c;_++){const M=_*u-s;g.push(M,-x,0),v.push(0,0,1),m.push(_/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<o;x++){const _=x+c*p,M=x+c*(p+1),L=x+1+c*(p+1),C=x+1+c*p;d.push(_,M,C),d.push(M,L,C)}this.setIndex(d),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(v,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fn(t.width,t.height,t.widthSegments,t.heightSegments)}}var jh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$h=`#ifdef USE_ALPHAHASH
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
#endif`,Kh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tu=`#ifdef USE_AOMAP
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
#endif`,eu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nu=`#ifdef USE_BATCHING
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
#endif`,iu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,su=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,au=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ru=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ou=`#ifdef USE_IRIDESCENCE
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
#endif`,lu=`#ifdef USE_BUMPMAP
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
#endif`,cu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,du=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,xu=`#define PI 3.141592653589793
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
} // validated`,vu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_u=`vec3 transformedNormal = objectNormal;
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
#endif`,yu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Su=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Eu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tu=`#ifdef USE_ENVMAP
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
#endif`,Au=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ru=`#ifdef USE_ENVMAP
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
#endif`,Cu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pu=`#ifdef USE_ENVMAP
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
#endif`,Lu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Iu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Du=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Uu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nu=`#ifdef USE_GRADIENTMAP
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
}`,Fu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ou=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bu=`uniform bool receiveShadow;
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
#endif`,ku=`#ifdef USE_ENVMAP
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
#endif`,Hu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xu=`PhysicalMaterial material;
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
#endif`,qu=`struct PhysicalMaterial {
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
}`,Yu=`
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
#endif`,ju=`#if defined( RE_IndirectDiffuse )
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
#endif`,$u=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ku=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ju=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,td=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ed=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,id=`#if defined( USE_POINTS_UV )
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
#endif`,sd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ad=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,od=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ld=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cd=`#ifdef USE_MORPHTARGETS
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
#endif`,hd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ud=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,dd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,md=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gd=`#ifdef USE_NORMALMAP
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
#endif`,xd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_d=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Md=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,bd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ed=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Td=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ad=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ld=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Id=`float getShadowMask() {
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
}`,Dd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ud=`#ifdef USE_SKINNING
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
#endif`,Nd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fd=`#ifdef USE_SKINNING
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
#endif`,Od=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hd=`#ifdef USE_TRANSMISSION
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
#endif`,Gd=`#ifdef USE_TRANSMISSION
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
#endif`,Vd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Yd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jd=`uniform sampler2D t2D;
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
}`,$d=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Jd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qd=`#include <common>
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
}`,tf=`#if DEPTH_PACKING == 3200
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
}`,ef=`#define DISTANCE
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
}`,nf=`#define DISTANCE
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
}`,sf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,af=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rf=`uniform float scale;
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
}`,of=`uniform vec3 diffuse;
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
}`,lf=`#include <common>
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
}`,cf=`uniform vec3 diffuse;
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
}`,hf=`#define LAMBERT
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
}`,uf=`#define LAMBERT
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
}`,df=`#define MATCAP
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
}`,ff=`#define MATCAP
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
}`,pf=`#define NORMAL
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
}`,mf=`#define NORMAL
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
}`,gf=`#define PHONG
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
}`,xf=`#define PHONG
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
}`,vf=`#define STANDARD
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
}`,_f=`#define STANDARD
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
}`,yf=`#define TOON
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
}`,Mf=`#define TOON
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
}`,Sf=`uniform float size;
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
}`,bf=`uniform vec3 diffuse;
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
}`,wf=`#include <common>
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
}`,Ef=`uniform vec3 color;
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
}`,Tf=`uniform float rotation;
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
}`,Af=`uniform vec3 diffuse;
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
}`,Ot={alphahash_fragment:jh,alphahash_pars_fragment:$h,alphamap_fragment:Kh,alphamap_pars_fragment:Jh,alphatest_fragment:Zh,alphatest_pars_fragment:Qh,aomap_fragment:tu,aomap_pars_fragment:eu,batching_pars_vertex:nu,batching_vertex:iu,begin_vertex:su,beginnormal_vertex:au,bsdfs:ru,iridescence_fragment:ou,bumpmap_pars_fragment:lu,clipping_planes_fragment:cu,clipping_planes_pars_fragment:hu,clipping_planes_pars_vertex:uu,clipping_planes_vertex:du,color_fragment:fu,color_pars_fragment:pu,color_pars_vertex:mu,color_vertex:gu,common:xu,cube_uv_reflection_fragment:vu,defaultnormal_vertex:_u,displacementmap_pars_vertex:yu,displacementmap_vertex:Mu,emissivemap_fragment:Su,emissivemap_pars_fragment:bu,colorspace_fragment:wu,colorspace_pars_fragment:Eu,envmap_fragment:Tu,envmap_common_pars_fragment:Au,envmap_pars_fragment:Ru,envmap_pars_vertex:Cu,envmap_physical_pars_fragment:ku,envmap_vertex:Pu,fog_vertex:Lu,fog_pars_vertex:Iu,fog_fragment:Du,fog_pars_fragment:Uu,gradientmap_pars_fragment:Nu,lightmap_pars_fragment:Fu,lights_lambert_fragment:Ou,lights_lambert_pars_fragment:zu,lights_pars_begin:Bu,lights_toon_fragment:Hu,lights_toon_pars_fragment:Gu,lights_phong_fragment:Vu,lights_phong_pars_fragment:Wu,lights_physical_fragment:Xu,lights_physical_pars_fragment:qu,lights_fragment_begin:Yu,lights_fragment_maps:ju,lights_fragment_end:$u,logdepthbuf_fragment:Ku,logdepthbuf_pars_fragment:Ju,logdepthbuf_pars_vertex:Zu,logdepthbuf_vertex:Qu,map_fragment:td,map_pars_fragment:ed,map_particle_fragment:nd,map_particle_pars_fragment:id,metalnessmap_fragment:sd,metalnessmap_pars_fragment:ad,morphinstance_vertex:rd,morphcolor_vertex:od,morphnormal_vertex:ld,morphtarget_pars_vertex:cd,morphtarget_vertex:hd,normal_fragment_begin:ud,normal_fragment_maps:dd,normal_pars_fragment:fd,normal_pars_vertex:pd,normal_vertex:md,normalmap_pars_fragment:gd,clearcoat_normal_fragment_begin:xd,clearcoat_normal_fragment_maps:vd,clearcoat_pars_fragment:_d,iridescence_pars_fragment:yd,opaque_fragment:Md,packing:Sd,premultiplied_alpha_fragment:bd,project_vertex:wd,dithering_fragment:Ed,dithering_pars_fragment:Td,roughnessmap_fragment:Ad,roughnessmap_pars_fragment:Rd,shadowmap_pars_fragment:Cd,shadowmap_pars_vertex:Pd,shadowmap_vertex:Ld,shadowmask_pars_fragment:Id,skinbase_vertex:Dd,skinning_pars_vertex:Ud,skinning_vertex:Nd,skinnormal_vertex:Fd,specularmap_fragment:Od,specularmap_pars_fragment:zd,tonemapping_fragment:Bd,tonemapping_pars_fragment:kd,transmission_fragment:Hd,transmission_pars_fragment:Gd,uv_pars_fragment:Vd,uv_pars_vertex:Wd,uv_vertex:Xd,worldpos_vertex:qd,background_vert:Yd,background_frag:jd,backgroundCube_vert:$d,backgroundCube_frag:Kd,cube_vert:Jd,cube_frag:Zd,depth_vert:Qd,depth_frag:tf,distanceRGBA_vert:ef,distanceRGBA_frag:nf,equirect_vert:sf,equirect_frag:af,linedashed_vert:rf,linedashed_frag:of,meshbasic_vert:lf,meshbasic_frag:cf,meshlambert_vert:hf,meshlambert_frag:uf,meshmatcap_vert:df,meshmatcap_frag:ff,meshnormal_vert:pf,meshnormal_frag:mf,meshphong_vert:gf,meshphong_frag:xf,meshphysical_vert:vf,meshphysical_frag:_f,meshtoon_vert:yf,meshtoon_frag:Mf,points_vert:Sf,points_frag:bf,shadow_vert:wf,shadow_frag:Ef,sprite_vert:Tf,sprite_frag:Af},st={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},ln={basic:{uniforms:Fe([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:Fe([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new It(0)}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:Fe([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:Fe([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:Fe([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new It(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:Fe([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:Fe([st.points,st.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:Fe([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:Fe([st.common,st.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:Fe([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:Fe([st.sprite,st.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distanceRGBA:{uniforms:Fe([st.common,st.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distanceRGBA_vert,fragmentShader:Ot.distanceRGBA_frag},shadow:{uniforms:Fe([st.lights,st.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};ln.physical={uniforms:Fe([ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};const Fs={r:0,b:0,g:0},$n=new rn,Rf=new ee;function Cf(a,t,e,n,i,s,r){const o=new It(0);let l=s===!0?0:1,c,h,u=null,f=0,d=null;function g(x){let _=x.isScene===!0?x.background:null;return _&&_.isTexture&&(_=(x.backgroundBlurriness>0?e:t).get(_)),_}function v(x){let _=!1;const M=g(x);M===null?p(o,l):M&&M.isColor&&(p(M,1),_=!0);const L=a.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,r):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(a.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function m(x,_){const M=g(_);M&&(M.isCubeTexture||M.mapping===aa)?(h===void 0&&(h=new Jt(new me(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:Vi(ln.backgroundCube.uniforms),vertexShader:ln.backgroundCube.vertexShader,fragmentShader:ln.backgroundCube.fragmentShader,side:ze,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,C,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),$n.copy(_.backgroundRotation),$n.x*=-1,$n.y*=-1,$n.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&($n.y*=-1,$n.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Rf.makeRotationFromEuler($n)),h.material.toneMapped=jt.getTransfer(M.colorSpace)!==ne,(u!==M||f!==M.version||d!==a.toneMapping)&&(h.material.needsUpdate=!0,u=M,f=M.version,d=a.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Jt(new fn(2,2),new An({name:"BackgroundMaterial",uniforms:Vi(ln.background.uniforms),vertexShader:ln.background.vertexShader,fragmentShader:ln.background.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=jt.getTransfer(M.colorSpace)!==ne,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||f!==M.version||d!==a.toneMapping)&&(c.material.needsUpdate=!0,u=M,f=M.version,d=a.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,_){x.getRGB(Fs,sc(a)),n.buffers.color.setClear(Fs.r,Fs.g,Fs.b,_,r)}return{getClearColor:function(){return o},setClearColor:function(x,_=1){o.set(x),l=_,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(o,l)},render:v,addToRenderList:m}}function Pf(a,t){const e=a.getParameter(a.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,r=!1;function o(y,A,D,z,X){let q=!1;const G=u(z,D,A);s!==G&&(s=G,c(s.object)),q=d(y,z,D,X),q&&g(y,z,D,X),X!==null&&t.update(X,a.ELEMENT_ARRAY_BUFFER),(q||r)&&(r=!1,M(y,A,D,z),X!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return a.createVertexArray()}function c(y){return a.bindVertexArray(y)}function h(y){return a.deleteVertexArray(y)}function u(y,A,D){const z=D.wireframe===!0;let X=n[y.id];X===void 0&&(X={},n[y.id]=X);let q=X[A.id];q===void 0&&(q={},X[A.id]=q);let G=q[z];return G===void 0&&(G=f(l()),q[z]=G),G}function f(y){const A=[],D=[],z=[];for(let X=0;X<e;X++)A[X]=0,D[X]=0,z[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:D,attributeDivisors:z,object:y,attributes:{},index:null}}function d(y,A,D,z){const X=s.attributes,q=A.attributes;let G=0;const J=D.getAttributes();for(const W in J)if(J[W].location>=0){const ft=X[W];let wt=q[W];if(wt===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(wt=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(wt=y.instanceColor)),ft===void 0||ft.attribute!==wt||wt&&ft.data!==wt.data)return!0;G++}return s.attributesNum!==G||s.index!==z}function g(y,A,D,z){const X={},q=A.attributes;let G=0;const J=D.getAttributes();for(const W in J)if(J[W].location>=0){let ft=q[W];ft===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(ft=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(ft=y.instanceColor));const wt={};wt.attribute=ft,ft&&ft.data&&(wt.data=ft.data),X[W]=wt,G++}s.attributes=X,s.attributesNum=G,s.index=z}function v(){const y=s.newAttributes;for(let A=0,D=y.length;A<D;A++)y[A]=0}function m(y){p(y,0)}function p(y,A){const D=s.newAttributes,z=s.enabledAttributes,X=s.attributeDivisors;D[y]=1,z[y]===0&&(a.enableVertexAttribArray(y),z[y]=1),X[y]!==A&&(a.vertexAttribDivisor(y,A),X[y]=A)}function x(){const y=s.newAttributes,A=s.enabledAttributes;for(let D=0,z=A.length;D<z;D++)A[D]!==y[D]&&(a.disableVertexAttribArray(D),A[D]=0)}function _(y,A,D,z,X,q,G){G===!0?a.vertexAttribIPointer(y,A,D,X,q):a.vertexAttribPointer(y,A,D,z,X,q)}function M(y,A,D,z){v();const X=z.attributes,q=D.getAttributes(),G=A.defaultAttributeValues;for(const J in q){const W=q[J];if(W.location>=0){let rt=X[J];if(rt===void 0&&(J==="instanceMatrix"&&y.instanceMatrix&&(rt=y.instanceMatrix),J==="instanceColor"&&y.instanceColor&&(rt=y.instanceColor)),rt!==void 0){const ft=rt.normalized,wt=rt.itemSize,Bt=t.get(rt);if(Bt===void 0)continue;const ae=Bt.buffer,j=Bt.type,it=Bt.bytesPerElement,yt=j===a.INT||j===a.UNSIGNED_INT||rt.gpuType===Hr;if(rt.isInterleavedBufferAttribute){const ot=rt.data,Rt=ot.stride,Lt=rt.offset;if(ot.isInstancedInterleavedBuffer){for(let kt=0;kt<W.locationSize;kt++)p(W.location+kt,ot.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let kt=0;kt<W.locationSize;kt++)m(W.location+kt);a.bindBuffer(a.ARRAY_BUFFER,ae);for(let kt=0;kt<W.locationSize;kt++)_(W.location+kt,wt/W.locationSize,j,ft,Rt*it,(Lt+wt/W.locationSize*kt)*it,yt)}else{if(rt.isInstancedBufferAttribute){for(let ot=0;ot<W.locationSize;ot++)p(W.location+ot,rt.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let ot=0;ot<W.locationSize;ot++)m(W.location+ot);a.bindBuffer(a.ARRAY_BUFFER,ae);for(let ot=0;ot<W.locationSize;ot++)_(W.location+ot,wt/W.locationSize,j,ft,wt*it,wt/W.locationSize*ot*it,yt)}}else if(G!==void 0){const ft=G[J];if(ft!==void 0)switch(ft.length){case 2:a.vertexAttrib2fv(W.location,ft);break;case 3:a.vertexAttrib3fv(W.location,ft);break;case 4:a.vertexAttrib4fv(W.location,ft);break;default:a.vertexAttrib1fv(W.location,ft)}}}}x()}function L(){R();for(const y in n){const A=n[y];for(const D in A){const z=A[D];for(const X in z)h(z[X].object),delete z[X];delete A[D]}delete n[y]}}function C(y){if(n[y.id]===void 0)return;const A=n[y.id];for(const D in A){const z=A[D];for(const X in z)h(z[X].object),delete z[X];delete A[D]}delete n[y.id]}function E(y){for(const A in n){const D=n[A];if(D[y.id]===void 0)continue;const z=D[y.id];for(const X in z)h(z[X].object),delete z[X];delete D[y.id]}}function R(){S(),r=!0,s!==i&&(s=i,c(s.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:R,resetDefaultState:S,dispose:L,releaseStatesOfGeometry:C,releaseStatesOfProgram:E,initAttributes:v,enableAttribute:m,disableUnusedAttributes:x}}function Lf(a,t,e){let n;function i(c){n=c}function s(c,h){a.drawArrays(n,c,h),e.update(h,n,1)}function r(c,h,u){u!==0&&(a.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,n,1)}function l(c,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)r(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*f[v];e.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function If(a,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");i=a.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(E){return!(E!==an&&n.convert(E)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const R=E===ps&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Tn&&n.convert(E)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==un&&!R)}function l(E){if(E==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),g=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=a.getParameter(a.MAX_TEXTURE_SIZE),m=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),p=a.getParameter(a.MAX_VERTEX_ATTRIBS),x=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),_=a.getParameter(a.MAX_VARYING_VECTORS),M=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,C=a.getParameter(a.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:_,maxFragmentUniforms:M,vertexTextures:L,maxSamples:C}}function Df(a){const t=this;let e=null,n=0,i=!1,s=!1;const r=new Zn,o=new Nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=a.get(u);if(!i||g===null||g.length===0||s&&!m)s?h(null):c();else{const x=s?0:n,_=x*4;let M=p.clippingState||null;l.value=M,M=h(g,f,_,d);for(let L=0;L!==_;++L)M[L]=e[L];p.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=d+v*4,x=f.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,M=d;_!==v;++_,M+=4)r.copy(u[_]).applyMatrix4(x,o),r.normal.toArray(m,M),m[M+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function Uf(a){let t=new WeakMap;function e(r,o){return o===rr?r.mapping=zi:o===or&&(r.mapping=Bi),r}function n(r){if(r&&r.isTexture){const o=r.mapping;if(o===rr||o===or)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new Wh(l.height);return c.fromEquirectangularTexture(a,r),t.set(r,c),r.addEventListener("dispose",i),e(c.texture,r.mapping)}else return null}}return r}function i(r){const o=r.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class lc extends ac{constructor(t=-1,e=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,r=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ii=4,Fo=[.125,.215,.35,.446,.526,.582],ei=20,Ua=new lc,Oo=new It;let Na=null,Fa=0,Oa=0,za=!1;const Qn=(1+Math.sqrt(5))/2,bi=1/Qn,zo=[new T(-Qn,bi,0),new T(Qn,bi,0),new T(-bi,0,Qn),new T(bi,0,Qn),new T(0,Qn,-bi),new T(0,Qn,bi),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)];class Bo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Na=this._renderer.getRenderTarget(),Fa=this._renderer.getActiveCubeFace(),Oa=this._renderer.getActiveMipmapLevel(),za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Go(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ho(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Na,Fa,Oa),this._renderer.xr.enabled=za,t.scissorTest=!1,Os(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===zi||t.mapping===Bi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Na=this._renderer.getRenderTarget(),Fa=this._renderer.getActiveCubeFace(),Oa=this._renderer.getActiveMipmapLevel(),za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:ps,format:an,colorSpace:Xi,depthBuffer:!1},i=ko(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ko(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Nf(s)),this._blurMaterial=Ff(s,t,e)}return i}_compileMaterial(t){const e=new Jt(this._lodPlanes[0],t);this._renderer.compile(e,Ua)}_sceneToCubeUV(t,e,n,i){const o=new Xe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Oo),h.toneMapping=Hn,h.autoClear=!1;const d=new ec({name:"PMREM.Background",side:ze,depthWrite:!1,depthTest:!1}),g=new Jt(new me,d);let v=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,v=!0):(d.color.copy(Oo),v=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):x===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const _=this._cubeSize;Os(i,x*_,p>2?_:0,_,_),h.setRenderTarget(i),v&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===zi||t.mapping===Bi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Go()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ho());const s=i?this._cubemapMaterial:this._equirectMaterial,r=new Jt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Os(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,Ua)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=zo[(i-s-1)%zo.length];this._blur(t,s-1,s,r,o)}e.autoClear=n}_blur(t,e,n,i,s){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,i,"latitudinal",s),this._halfBlur(r,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Jt(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*ei-1),v=s/g,m=isFinite(s)?1+Math.floor(h*v):ei;m>ei&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ei}`);const p=[];let x=0;for(let E=0;E<ei;++E){const R=E/v,S=Math.exp(-R*R/2);p.push(S),E===0?x+=S:E<m&&(x+=2*S)}for(let E=0;E<p.length;E++)p[E]=p[E]/x;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=r==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:_}=this;f.dTheta.value=g,f.mipInt.value=_-n;const M=this._sizeLods[i],L=3*M*(i>_-Ii?i-_+Ii:0),C=4*(this._cubeSize-M);Os(e,L,C,3*M,2*M),l.setRenderTarget(e),l.render(u,Ua)}}function Nf(a){const t=[],e=[],n=[];let i=a;const s=a-Ii+1+Fo.length;for(let r=0;r<s;r++){const o=Math.pow(2,i);e.push(o);let l=1/o;r>a-Ii?l=Fo[r-a+Ii-1]:r===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,v=3,m=2,p=1,x=new Float32Array(v*g*d),_=new Float32Array(m*g*d),M=new Float32Array(p*g*d);for(let C=0;C<d;C++){const E=C%3*2/3-1,R=C>2?0:-1,S=[E,R,0,E+2/3,R,0,E+2/3,R+1,0,E,R,0,E+2/3,R+1,0,E,R+1,0];x.set(S,v*g*C),_.set(f,m*g*C);const y=[C,C,C,C,C,C];M.set(y,p*g*C)}const L=new ke;L.setAttribute("position",new Be(x,v)),L.setAttribute("uv",new Be(_,m)),L.setAttribute("faceIndex",new Be(M,p)),t.push(L),i>Ii&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ko(a,t,e){const n=new ri(a,t,e);return n.texture.mapping=aa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Os(a,t,e,n,i){a.viewport.set(t,e,n,i),a.scissor.set(t,e,n,i)}function Ff(a,t,e){const n=new Float32Array(ei),i=new T(0,1,0);return new An({name:"SphericalGaussianBlur",defines:{n:ei,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:$r(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Ho(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$r(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Go(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$r(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function $r(){return`

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
	`}function Of(a){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===rr||l===or,h=l===zi||l===Bi;if(c||h){let u=t.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Bo(a)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const d=o.image;return c&&d&&d.height>0||h&&d&&i(d)?(e===null&&(e=new Bo(a)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function zf(a){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=a.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&cs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Bf(a,t,e,n){const i={},s=new WeakMap;function r(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const v=f.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)t.remove(v[m])}f.removeEventListener("dispose",r),delete i[f.id];const d=s.get(f);d&&(t.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",r),i[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)t.update(f[g],a.ARRAY_BUFFER);const d=u.morphAttributes;for(const g in d){const v=d[g];for(let m=0,p=v.length;m<p;m++)t.update(v[m],a.ARRAY_BUFFER)}}function c(u){const f=[],d=u.index,g=u.attributes.position;let v=0;if(d!==null){const x=d.array;v=d.version;for(let _=0,M=x.length;_<M;_+=3){const L=x[_+0],C=x[_+1],E=x[_+2];f.push(L,C,C,E,E,L)}}else if(g!==void 0){const x=g.array;v=g.version;for(let _=0,M=x.length/3-1;_<M;_+=3){const L=_+0,C=_+1,E=_+2;f.push(L,C,C,E,E,L)}}else return;const m=new(Kl(f)?ic:nc)(f,1);m.version=v;const p=s.get(u);p&&t.remove(p),s.set(u,m)}function h(u){const f=s.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function kf(a,t,e){let n;function i(f){n=f}let s,r;function o(f){s=f.type,r=f.bytesPerElement}function l(f,d){a.drawElements(n,d,s,f*r),e.update(d,n,1)}function c(f,d,g){g!==0&&(a.drawElementsInstanced(n,d,s,f*r,g),e.update(d,n,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function u(f,d,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/r,d[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,v,0,g);let p=0;for(let x=0;x<g;x++)p+=d[x]*v[x];e.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Hf(a){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,o){switch(e.calls++,r){case a.TRIANGLES:e.triangles+=o*(s/3);break;case a.LINES:e.lines+=o*(s/2);break;case a.LINE_STRIP:e.lines+=o*(s-1);break;case a.LINE_LOOP:e.lines+=o*s;break;case a.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Gf(a,t,e){const n=new WeakMap,i=new se;function s(r,o,l){const c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let y=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",y)};var d=y;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let M=0;g===!0&&(M=1),v===!0&&(M=2),m===!0&&(M=3);let L=o.attributes.position.count*M,C=1;L>t.maxTextureSize&&(C=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const E=new Float32Array(L*C*4*u),R=new Zl(E,L,C,u);R.type=un,R.needsUpdate=!0;const S=M*4;for(let A=0;A<u;A++){const D=p[A],z=x[A],X=_[A],q=L*C*4*A;for(let G=0;G<D.count;G++){const J=G*S;g===!0&&(i.fromBufferAttribute(D,G),E[q+J+0]=i.x,E[q+J+1]=i.y,E[q+J+2]=i.z,E[q+J+3]=0),v===!0&&(i.fromBufferAttribute(z,G),E[q+J+4]=i.x,E[q+J+5]=i.y,E[q+J+6]=i.z,E[q+J+7]=0),m===!0&&(i.fromBufferAttribute(X,G),E[q+J+8]=i.x,E[q+J+9]=i.y,E[q+J+10]=i.z,E[q+J+11]=X.itemSize===4?i.w:1)}}f={count:u,texture:R,size:new ct(L,C)},n.set(o,f),o.addEventListener("dispose",y)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(a,"morphTexture",r.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(a,"morphTargetBaseInfluence",v),l.getUniforms().setValue(a,"morphTargetInfluences",c)}l.getUniforms().setValue(a,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(a,"morphTargetsTextureSize",f.size)}return{update:s}}function Vf(a,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,a.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,a.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function r(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:r}}class cc extends Ue{constructor(t,e,n,i,s,r,o,l,c,h=Ui){if(h!==Ui&&h!==Gi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ui&&(n=ai),n===void 0&&h===Gi&&(n=Hi),super(null,i,s,r,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:qe,this.minFilter=l!==void 0?l:qe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const hc=new Ue,Vo=new cc(1,1),uc=new Zl,dc=new Ah,fc=new rc,Wo=[],Xo=[],qo=new Float32Array(16),Yo=new Float32Array(9),jo=new Float32Array(4);function $i(a,t,e){const n=a[0];if(n<=0||n>0)return a;const i=t*e;let s=Wo[i];if(s===void 0&&(s=new Float32Array(i),Wo[i]=s),t!==0){n.toArray(s,0);for(let r=1,o=0;r!==t;++r)o+=e,a[r].toArray(s,o)}return s}function Se(a,t){if(a.length!==t.length)return!1;for(let e=0,n=a.length;e<n;e++)if(a[e]!==t[e])return!1;return!0}function be(a,t){for(let e=0,n=t.length;e<n;e++)a[e]=t[e]}function oa(a,t){let e=Xo[t];e===void 0&&(e=new Int32Array(t),Xo[t]=e);for(let n=0;n!==t;++n)e[n]=a.allocateTextureUnit();return e}function Wf(a,t){const e=this.cache;e[0]!==t&&(a.uniform1f(this.addr,t),e[0]=t)}function Xf(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(a.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;a.uniform2fv(this.addr,t),be(e,t)}}function qf(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(a.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(a.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;a.uniform3fv(this.addr,t),be(e,t)}}function Yf(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(a.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;a.uniform4fv(this.addr,t),be(e,t)}}function jf(a,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;a.uniformMatrix2fv(this.addr,!1,t),be(e,t)}else{if(Se(e,n))return;jo.set(n),a.uniformMatrix2fv(this.addr,!1,jo),be(e,n)}}function $f(a,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;a.uniformMatrix3fv(this.addr,!1,t),be(e,t)}else{if(Se(e,n))return;Yo.set(n),a.uniformMatrix3fv(this.addr,!1,Yo),be(e,n)}}function Kf(a,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;a.uniformMatrix4fv(this.addr,!1,t),be(e,t)}else{if(Se(e,n))return;qo.set(n),a.uniformMatrix4fv(this.addr,!1,qo),be(e,n)}}function Jf(a,t){const e=this.cache;e[0]!==t&&(a.uniform1i(this.addr,t),e[0]=t)}function Zf(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(a.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;a.uniform2iv(this.addr,t),be(e,t)}}function Qf(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(a.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;a.uniform3iv(this.addr,t),be(e,t)}}function tp(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(a.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;a.uniform4iv(this.addr,t),be(e,t)}}function ep(a,t){const e=this.cache;e[0]!==t&&(a.uniform1ui(this.addr,t),e[0]=t)}function np(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(a.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;a.uniform2uiv(this.addr,t),be(e,t)}}function ip(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(a.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;a.uniform3uiv(this.addr,t),be(e,t)}}function sp(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(a.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;a.uniform4uiv(this.addr,t),be(e,t)}}function ap(a,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i);let s;this.type===a.SAMPLER_2D_SHADOW?(Vo.compareFunction=$l,s=Vo):s=hc,e.setTexture2D(t||s,i)}function rp(a,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||dc,i)}function op(a,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||fc,i)}function lp(a,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||uc,i)}function cp(a){switch(a){case 5126:return Wf;case 35664:return Xf;case 35665:return qf;case 35666:return Yf;case 35674:return jf;case 35675:return $f;case 35676:return Kf;case 5124:case 35670:return Jf;case 35667:case 35671:return Zf;case 35668:case 35672:return Qf;case 35669:case 35673:return tp;case 5125:return ep;case 36294:return np;case 36295:return ip;case 36296:return sp;case 35678:case 36198:case 36298:case 36306:case 35682:return ap;case 35679:case 36299:case 36307:return rp;case 35680:case 36300:case 36308:case 36293:return op;case 36289:case 36303:case 36311:case 36292:return lp}}function hp(a,t){a.uniform1fv(this.addr,t)}function up(a,t){const e=$i(t,this.size,2);a.uniform2fv(this.addr,e)}function dp(a,t){const e=$i(t,this.size,3);a.uniform3fv(this.addr,e)}function fp(a,t){const e=$i(t,this.size,4);a.uniform4fv(this.addr,e)}function pp(a,t){const e=$i(t,this.size,4);a.uniformMatrix2fv(this.addr,!1,e)}function mp(a,t){const e=$i(t,this.size,9);a.uniformMatrix3fv(this.addr,!1,e)}function gp(a,t){const e=$i(t,this.size,16);a.uniformMatrix4fv(this.addr,!1,e)}function xp(a,t){a.uniform1iv(this.addr,t)}function vp(a,t){a.uniform2iv(this.addr,t)}function _p(a,t){a.uniform3iv(this.addr,t)}function yp(a,t){a.uniform4iv(this.addr,t)}function Mp(a,t){a.uniform1uiv(this.addr,t)}function Sp(a,t){a.uniform2uiv(this.addr,t)}function bp(a,t){a.uniform3uiv(this.addr,t)}function wp(a,t){a.uniform4uiv(this.addr,t)}function Ep(a,t,e){const n=this.cache,i=t.length,s=oa(e,i);Se(n,s)||(a.uniform1iv(this.addr,s),be(n,s));for(let r=0;r!==i;++r)e.setTexture2D(t[r]||hc,s[r])}function Tp(a,t,e){const n=this.cache,i=t.length,s=oa(e,i);Se(n,s)||(a.uniform1iv(this.addr,s),be(n,s));for(let r=0;r!==i;++r)e.setTexture3D(t[r]||dc,s[r])}function Ap(a,t,e){const n=this.cache,i=t.length,s=oa(e,i);Se(n,s)||(a.uniform1iv(this.addr,s),be(n,s));for(let r=0;r!==i;++r)e.setTextureCube(t[r]||fc,s[r])}function Rp(a,t,e){const n=this.cache,i=t.length,s=oa(e,i);Se(n,s)||(a.uniform1iv(this.addr,s),be(n,s));for(let r=0;r!==i;++r)e.setTexture2DArray(t[r]||uc,s[r])}function Cp(a){switch(a){case 5126:return hp;case 35664:return up;case 35665:return dp;case 35666:return fp;case 35674:return pp;case 35675:return mp;case 35676:return gp;case 5124:case 35670:return xp;case 35667:case 35671:return vp;case 35668:case 35672:return _p;case 35669:case 35673:return yp;case 5125:return Mp;case 36294:return Sp;case 36295:return bp;case 36296:return wp;case 35678:case 36198:case 36298:case 36306:case 35682:return Ep;case 35679:case 36299:case 36307:return Tp;case 35680:case 36300:case 36308:case 36293:return Ap;case 36289:case 36303:case 36311:case 36292:return Rp}}class Pp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=cp(e.type)}}class Lp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Cp(e.type)}}class Ip{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,r=i.length;s!==r;++s){const o=i[s];o.setValue(t,e[o.id],n)}}}const Ba=/(\w+)(\])?(\[|\.)?/g;function $o(a,t){a.seq.push(t),a.map[t.id]=t}function Dp(a,t,e){const n=a.name,i=n.length;for(Ba.lastIndex=0;;){const s=Ba.exec(n),r=Ba.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===i){$o(e,c===void 0?new Pp(o,a,t):new Lp(o,a,t));break}else{let u=e.map[o];u===void 0&&(u=new Ip(o),$o(e,u)),e=u}}}class Zs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),r=t.getUniformLocation(e,s.name);Dp(s,r,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,r=e.length;s!==r;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const r=t[i];r.id in e&&n.push(r)}return n}}function Ko(a,t,e){const n=a.createShader(t);return a.shaderSource(n,e),a.compileShader(n),n}const Up=37297;let Np=0;function Fp(a,t){const e=a.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let r=i;r<s;r++){const o=r+1;n.push(`${o===t?">":" "} ${o}: ${e[r]}`)}return n.join(`
`)}const Jo=new Nt;function Op(a){jt._getMatrix(Jo,jt.workingColorSpace,a);const t=`mat3( ${Jo.elements.map(e=>e.toFixed(4))} )`;switch(jt.getTransfer(a)){case ra:return[t,"LinearTransferOETF"];case ne:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",a),[t,"LinearTransferOETF"]}}function Zo(a,t,e){const n=a.getShaderParameter(t,a.COMPILE_STATUS),i=a.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const r=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+Fp(a.getShaderSource(t),r)}else return i}function zp(a,t){const e=Op(t);return[`vec4 ${a}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Bp(a,t){let e;switch(t){case eh:e="Linear";break;case nh:e="Reinhard";break;case ih:e="Cineon";break;case Ol:e="ACESFilmic";break;case ah:e="AgX";break;case rh:e="Neutral";break;case sh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+a+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const zs=new T;function kp(){jt.getLuminanceCoefficients(zs);const a=zs.x.toFixed(4),t=zs.y.toFixed(4),e=zs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Hp(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hs).join(`
`)}function Gp(a){const t=[];for(const e in a){const n=a[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Vp(a,t){const e={},n=a.getProgramParameter(t,a.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=a.getActiveAttrib(t,i),r=s.name;let o=1;s.type===a.FLOAT_MAT2&&(o=2),s.type===a.FLOAT_MAT3&&(o=3),s.type===a.FLOAT_MAT4&&(o=4),e[r]={type:s.type,location:a.getAttribLocation(t,r),locationSize:o}}return e}function hs(a){return a!==""}function Qo(a,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function tl(a,t){return a.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Wp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Or(a){return a.replace(Wp,qp)}const Xp=new Map;function qp(a,t){let e=Ot[t];if(e===void 0){const n=Xp.get(t);if(n!==void 0)e=Ot[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Or(e)}const Yp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function el(a){return a.replace(Yp,jp)}function jp(a,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function nl(a){let t=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?t+=`
#define HIGH_PRECISION`:a.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function $p(a){let t="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===Ul?t="SHADOWMAP_TYPE_PCF":a.shadowMapType===Nl?t="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===Sn&&(t="SHADOWMAP_TYPE_VSM"),t}function Kp(a){let t="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case zi:case Bi:t="ENVMAP_TYPE_CUBE";break;case aa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Jp(a){let t="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Bi:t="ENVMAP_MODE_REFRACTION";break}return t}function Zp(a){let t="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case Fl:t="ENVMAP_BLENDING_MULTIPLY";break;case Qc:t="ENVMAP_BLENDING_MIX";break;case th:t="ENVMAP_BLENDING_ADD";break}return t}function Qp(a){const t=a.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function tm(a,t,e,n){const i=a.getContext(),s=e.defines;let r=e.vertexShader,o=e.fragmentShader;const l=$p(e),c=Kp(e),h=Jp(e),u=Zp(e),f=Qp(e),d=Hp(e),g=Gp(s),v=i.createProgram();let m,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(hs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(hs).join(`
`),p.length>0&&(p+=`
`)):(m=[nl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hs).join(`
`),p=[nl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Hn?"#define TONE_MAPPING":"",e.toneMapping!==Hn?Ot.tonemapping_pars_fragment:"",e.toneMapping!==Hn?Bp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,zp("linearToOutputTexel",e.outputColorSpace),kp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(hs).join(`
`)),r=Or(r),r=Qo(r,e),r=tl(r,e),o=Or(o),o=Qo(o,e),o=tl(o,e),r=el(r),o=el(o),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===mo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===mo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=x+m+r,M=x+p+o,L=Ko(i,i.VERTEX_SHADER,_),C=Ko(i,i.FRAGMENT_SHADER,M);i.attachShader(v,L),i.attachShader(v,C),e.index0AttributeName!==void 0?i.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function E(A){if(a.debug.checkShaderErrors){const D=i.getProgramInfoLog(v).trim(),z=i.getShaderInfoLog(L).trim(),X=i.getShaderInfoLog(C).trim();let q=!0,G=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(q=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(i,v,L,C);else{const J=Zo(i,L,"vertex"),W=Zo(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+D+`
`+J+`
`+W)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(z===""||X==="")&&(G=!1);G&&(A.diagnostics={runnable:q,programLog:D,vertexShader:{log:z,prefix:m},fragmentShader:{log:X,prefix:p}})}i.deleteShader(L),i.deleteShader(C),R=new Zs(i,v),S=Vp(i,v)}let R;this.getUniforms=function(){return R===void 0&&E(this),R};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(v,Up)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Np++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=L,this.fragmentShader=C,this}let em=0;class nm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new im(t),e.set(t,n)),n}}class im{constructor(t){this.id=em++,this.code=t,this.usedTimes=0}}function sm(a,t,e,n,i,s,r){const o=new Ql,l=new nm,c=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,y,A,D,z){const X=D.fog,q=z.geometry,G=S.isMeshStandardMaterial?D.environment:null,J=(S.isMeshStandardMaterial?e:t).get(S.envMap||G),W=J&&J.mapping===aa?J.image.height:null,rt=g[S.type];S.precision!==null&&(d=i.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const ft=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,wt=ft!==void 0?ft.length:0;let Bt=0;q.morphAttributes.position!==void 0&&(Bt=1),q.morphAttributes.normal!==void 0&&(Bt=2),q.morphAttributes.color!==void 0&&(Bt=3);let ae,j,it,yt;if(rt){const te=ln[rt];ae=te.vertexShader,j=te.fragmentShader}else ae=S.vertexShader,j=S.fragmentShader,l.update(S),it=l.getVertexShaderID(S),yt=l.getFragmentShaderID(S);const ot=a.getRenderTarget(),Rt=a.state.buffers.depth.getReversed(),Lt=z.isInstancedMesh===!0,kt=z.isBatchedMesh===!0,pe=!!S.map,qt=!!S.matcap,_e=!!J,O=!!S.aoMap,Ye=!!S.lightMap,Vt=!!S.bumpMap,Wt=!!S.normalMap,Tt=!!S.displacementMap,ce=!!S.emissiveMap,Et=!!S.metalnessMap,P=!!S.roughnessMap,b=S.anisotropy>0,B=S.clearcoat>0,$=S.dispersion>0,Z=S.iridescence>0,Y=S.sheen>0,Mt=S.transmission>0,lt=b&&!!S.anisotropyMap,pt=B&&!!S.clearcoatMap,Yt=B&&!!S.clearcoatNormalMap,et=B&&!!S.clearcoatRoughnessMap,mt=Z&&!!S.iridescenceMap,At=Z&&!!S.iridescenceThicknessMap,Ct=Y&&!!S.sheenColorMap,gt=Y&&!!S.sheenRoughnessMap,Xt=!!S.specularMap,Ft=!!S.specularColorMap,oe=!!S.specularIntensityMap,I=Mt&&!!S.transmissionMap,at=Mt&&!!S.thicknessMap,V=!!S.gradientMap,K=!!S.alphaMap,dt=S.alphaTest>0,ht=!!S.alphaHash,Dt=!!S.extensions;let xe=Hn;S.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(xe=a.toneMapping);const Pe={shaderID:rt,shaderType:S.type,shaderName:S.name,vertexShader:ae,fragmentShader:j,defines:S.defines,customVertexShaderID:it,customFragmentShaderID:yt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:kt,batchingColor:kt&&z._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&z.instanceColor!==null,instancingMorph:Lt&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ot===null?a.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:Xi,alphaToCoverage:!!S.alphaToCoverage,map:pe,matcap:qt,envMap:_e,envMapMode:_e&&J.mapping,envMapCubeUVHeight:W,aoMap:O,lightMap:Ye,bumpMap:Vt,normalMap:Wt,displacementMap:f&&Tt,emissiveMap:ce,normalMapObjectSpace:Wt&&S.normalMapType===hh,normalMapTangentSpace:Wt&&S.normalMapType===jl,metalnessMap:Et,roughnessMap:P,anisotropy:b,anisotropyMap:lt,clearcoat:B,clearcoatMap:pt,clearcoatNormalMap:Yt,clearcoatRoughnessMap:et,dispersion:$,iridescence:Z,iridescenceMap:mt,iridescenceThicknessMap:At,sheen:Y,sheenColorMap:Ct,sheenRoughnessMap:gt,specularMap:Xt,specularColorMap:Ft,specularIntensityMap:oe,transmission:Mt,transmissionMap:I,thicknessMap:at,gradientMap:V,opaque:S.transparent===!1&&S.blending===Di&&S.alphaToCoverage===!1,alphaMap:K,alphaTest:dt,alphaHash:ht,combine:S.combine,mapUv:pe&&v(S.map.channel),aoMapUv:O&&v(S.aoMap.channel),lightMapUv:Ye&&v(S.lightMap.channel),bumpMapUv:Vt&&v(S.bumpMap.channel),normalMapUv:Wt&&v(S.normalMap.channel),displacementMapUv:Tt&&v(S.displacementMap.channel),emissiveMapUv:ce&&v(S.emissiveMap.channel),metalnessMapUv:Et&&v(S.metalnessMap.channel),roughnessMapUv:P&&v(S.roughnessMap.channel),anisotropyMapUv:lt&&v(S.anisotropyMap.channel),clearcoatMapUv:pt&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:Yt&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:mt&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:At&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:gt&&v(S.sheenRoughnessMap.channel),specularMapUv:Xt&&v(S.specularMap.channel),specularColorMapUv:Ft&&v(S.specularColorMap.channel),specularIntensityMapUv:oe&&v(S.specularIntensityMap.channel),transmissionMapUv:I&&v(S.transmissionMap.channel),thicknessMapUv:at&&v(S.thicknessMap.channel),alphaMapUv:K&&v(S.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Wt||b),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!q.attributes.uv&&(pe||K),fog:!!X,useFog:S.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Rt,skinning:z.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:wt,morphTextureStride:Bt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:a.shadowMap.enabled&&A.length>0,shadowMapType:a.shadowMap.type,toneMapping:xe,decodeVideoTexture:pe&&S.map.isVideoTexture===!0&&jt.getTransfer(S.map.colorSpace)===ne,decodeVideoTextureEmissive:ce&&S.emissiveMap.isVideoTexture===!0&&jt.getTransfer(S.emissiveMap.colorSpace)===ne,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===sn,flipSided:S.side===ze,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Dt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&S.extensions.multiDraw===!0||kt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Pe.vertexUv1s=c.has(1),Pe.vertexUv2s=c.has(2),Pe.vertexUv3s=c.has(3),c.clear(),Pe}function p(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const A in S.defines)y.push(A),y.push(S.defines[A]);return S.isRawShaderMaterial===!1&&(x(y,S),_(y,S),y.push(a.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function x(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function _(S,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),S.push(o.mask)}function M(S){const y=g[S.type];let A;if(y){const D=ln[y];A=kh.clone(D.uniforms)}else A=S.uniforms;return A}function L(S,y){let A;for(let D=0,z=h.length;D<z;D++){const X=h[D];if(X.cacheKey===y){A=X,++A.usedTimes;break}}return A===void 0&&(A=new tm(a,y,S,s),h.push(A)),A}function C(S){if(--S.usedTimes===0){const y=h.indexOf(S);h[y]=h[h.length-1],h.pop(),S.destroy()}}function E(S){l.remove(S)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:L,releaseProgram:C,releaseShaderCache:E,programs:h,dispose:R}}function am(){let a=new WeakMap;function t(r){return a.has(r)}function e(r){let o=a.get(r);return o===void 0&&(o={},a.set(r,o)),o}function n(r){a.delete(r)}function i(r,o,l){a.get(r)[o]=l}function s(){a=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function rm(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.material.id!==t.material.id?a.material.id-t.material.id:a.z!==t.z?a.z-t.z:a.id-t.id}function il(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.z!==t.z?t.z-a.z:a.id-t.id}function sl(){const a=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function r(u,f,d,g,v,m){let p=a[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},a[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),t++,p}function o(u,f,d,g,v,m){const p=r(u,f,d,g,v,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):e.push(p)}function l(u,f,d,g,v,m){const p=r(u,f,d,g,v,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||rm),n.length>1&&n.sort(f||il),i.length>1&&i.sort(f||il)}function h(){for(let u=t,f=a.length;u<f;u++){const d=a[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:h,sort:c}}function om(){let a=new WeakMap;function t(n,i){const s=a.get(n);let r;return s===void 0?(r=new sl,a.set(n,[r])):i>=s.length?(r=new sl,s.push(r)):r=s[i],r}function e(){a=new WeakMap}return{get:t,dispose:e}}function lm(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new T,color:new It};break;case"SpotLight":e={position:new T,direction:new T,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new T,color:new It,distance:0,decay:0};break;case"HemisphereLight":e={direction:new T,skyColor:new It,groundColor:new It};break;case"RectAreaLight":e={color:new It,position:new T,halfWidth:new T,halfHeight:new T};break}return a[t.id]=e,e}}}function cm(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[t.id]=e,e}}}let hm=0;function um(a,t){return(t.castShadow?2:0)-(a.castShadow?2:0)+(t.map?1:0)-(a.map?1:0)}function dm(a){const t=new lm,e=cm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new T);const i=new T,s=new ee,r=new ee;function o(c){let h=0,u=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let d=0,g=0,v=0,m=0,p=0,x=0,_=0,M=0,L=0,C=0,E=0;c.sort(um);for(let S=0,y=c.length;S<y;S++){const A=c[S],D=A.color,z=A.intensity,X=A.distance,q=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)h+=D.r*z,u+=D.g*z,f+=D.b*z;else if(A.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(A.sh.coefficients[G],z);E++}else if(A.isDirectionalLight){const G=t.get(A);if(G.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const J=A.shadow,W=e.get(A);W.shadowIntensity=J.intensity,W.shadowBias=J.bias,W.shadowNormalBias=J.normalBias,W.shadowRadius=J.radius,W.shadowMapSize=J.mapSize,n.directionalShadow[d]=W,n.directionalShadowMap[d]=q,n.directionalShadowMatrix[d]=A.shadow.matrix,x++}n.directional[d]=G,d++}else if(A.isSpotLight){const G=t.get(A);G.position.setFromMatrixPosition(A.matrixWorld),G.color.copy(D).multiplyScalar(z),G.distance=X,G.coneCos=Math.cos(A.angle),G.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),G.decay=A.decay,n.spot[v]=G;const J=A.shadow;if(A.map&&(n.spotLightMap[L]=A.map,L++,J.updateMatrices(A),A.castShadow&&C++),n.spotLightMatrix[v]=J.matrix,A.castShadow){const W=e.get(A);W.shadowIntensity=J.intensity,W.shadowBias=J.bias,W.shadowNormalBias=J.normalBias,W.shadowRadius=J.radius,W.shadowMapSize=J.mapSize,n.spotShadow[v]=W,n.spotShadowMap[v]=q,M++}v++}else if(A.isRectAreaLight){const G=t.get(A);G.color.copy(D).multiplyScalar(z),G.halfWidth.set(A.width*.5,0,0),G.halfHeight.set(0,A.height*.5,0),n.rectArea[m]=G,m++}else if(A.isPointLight){const G=t.get(A);if(G.color.copy(A.color).multiplyScalar(A.intensity),G.distance=A.distance,G.decay=A.decay,A.castShadow){const J=A.shadow,W=e.get(A);W.shadowIntensity=J.intensity,W.shadowBias=J.bias,W.shadowNormalBias=J.normalBias,W.shadowRadius=J.radius,W.shadowMapSize=J.mapSize,W.shadowCameraNear=J.camera.near,W.shadowCameraFar=J.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=A.shadow.matrix,_++}n.point[g]=G,g++}else if(A.isHemisphereLight){const G=t.get(A);G.skyColor.copy(A.color).multiplyScalar(z),G.groundColor.copy(A.groundColor).multiplyScalar(z),n.hemi[p]=G,p++}}m>0&&(a.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=st.LTC_FLOAT_1,n.rectAreaLTC2=st.LTC_FLOAT_2):(n.rectAreaLTC1=st.LTC_HALF_1,n.rectAreaLTC2=st.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const R=n.hash;(R.directionalLength!==d||R.pointLength!==g||R.spotLength!==v||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==x||R.numPointShadows!==_||R.numSpotShadows!==M||R.numSpotMaps!==L||R.numLightProbes!==E)&&(n.directional.length=d,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=M+L-C,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=E,R.directionalLength=d,R.pointLength=g,R.spotLength=v,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=x,R.numPointShadows=_,R.numSpotShadows=M,R.numSpotMaps=L,R.numLightProbes=E,n.version=hm++)}function l(c,h){let u=0,f=0,d=0,g=0,v=0;const m=h.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){const _=c[p];if(_.isDirectionalLight){const M=n.directional[u];M.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),u++}else if(_.isSpotLight){const M=n.spot[d];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),d++}else if(_.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),r.identity(),s.copy(_.matrixWorld),s.premultiply(m),r.extractRotation(s),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(r),M.halfHeight.applyMatrix4(r),g++}else if(_.isPointLight){const M=n.point[f];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),f++}else if(_.isHemisphereLight){const M=n.hemi[v];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:n}}function al(a){const t=new dm(a),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function r(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:r}}function fm(a){let t=new WeakMap;function e(i,s=0){const r=t.get(i);let o;return r===void 0?(o=new al(a),t.set(i,[o])):s>=r.length?(o=new al(a),r.push(o)):o=r[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class pm extends ji{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=lh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class mm extends ji{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const gm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xm=`uniform sampler2D shadow_pass;
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
}`;function vm(a,t,e){let n=new jr;const i=new ct,s=new ct,r=new se,o=new pm({depthPacking:ch}),l=new mm,c={},h=e.maxTextureSize,u={[Vn]:ze,[ze]:Vn,[sn]:sn},f=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:gm,fragmentShader:xm}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new ke;g.setAttribute("position",new Be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Jt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ul;let p=this.type;this.render=function(C,E,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const S=a.getRenderTarget(),y=a.getActiveCubeFace(),A=a.getActiveMipmapLevel(),D=a.state;D.setBlending(kn),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const z=p!==Sn&&this.type===Sn,X=p===Sn&&this.type!==Sn;for(let q=0,G=C.length;q<G;q++){const J=C[q],W=J.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const rt=W.getFrameExtents();if(i.multiply(rt),s.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/rt.x),i.x=s.x*rt.x,W.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/rt.y),i.y=s.y*rt.y,W.mapSize.y=s.y)),W.map===null||z===!0||X===!0){const wt=this.type!==Sn?{minFilter:qe,magFilter:qe}:{};W.map!==null&&W.map.dispose(),W.map=new ri(i.x,i.y,wt),W.map.texture.name=J.name+".shadowMap",W.camera.updateProjectionMatrix()}a.setRenderTarget(W.map),a.clear();const ft=W.getViewportCount();for(let wt=0;wt<ft;wt++){const Bt=W.getViewport(wt);r.set(s.x*Bt.x,s.y*Bt.y,s.x*Bt.z,s.y*Bt.w),D.viewport(r),W.updateMatrices(J,wt),n=W.getFrustum(),M(E,R,W.camera,J,this.type)}W.isPointLightShadow!==!0&&this.type===Sn&&x(W,R),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,a.setRenderTarget(S,y,A)};function x(C,E){const R=t.update(v);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,d.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ri(i.x,i.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,a.setRenderTarget(C.mapPass),a.clear(),a.renderBufferDirect(E,null,R,f,v,null),d.uniforms.shadow_pass.value=C.mapPass.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,a.setRenderTarget(C.map),a.clear(),a.renderBufferDirect(E,null,R,d,v,null)}function _(C,E,R,S){let y=null;const A=R.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(A!==void 0)y=A;else if(y=R.isPointLight===!0?l:o,a.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const D=y.uuid,z=E.uuid;let X=c[D];X===void 0&&(X={},c[D]=X);let q=X[z];q===void 0&&(q=y.clone(),X[z]=q,E.addEventListener("dispose",L)),y=q}if(y.visible=E.visible,y.wireframe=E.wireframe,S===Sn?y.side=E.shadowSide!==null?E.shadowSide:E.side:y.side=E.shadowSide!==null?E.shadowSide:u[E.side],y.alphaMap=E.alphaMap,y.alphaTest=E.alphaTest,y.map=E.map,y.clipShadows=E.clipShadows,y.clippingPlanes=E.clippingPlanes,y.clipIntersection=E.clipIntersection,y.displacementMap=E.displacementMap,y.displacementScale=E.displacementScale,y.displacementBias=E.displacementBias,y.wireframeLinewidth=E.wireframeLinewidth,y.linewidth=E.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const D=a.properties.get(y);D.light=R}return y}function M(C,E,R,S,y){if(C.visible===!1)return;if(C.layers.test(E.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===Sn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,C.matrixWorld);const z=t.update(C),X=C.material;if(Array.isArray(X)){const q=z.groups;for(let G=0,J=q.length;G<J;G++){const W=q[G],rt=X[W.materialIndex];if(rt&&rt.visible){const ft=_(C,rt,S,y);C.onBeforeShadow(a,C,E,R,z,ft,W),a.renderBufferDirect(R,null,z,ft,C,W),C.onAfterShadow(a,C,E,R,z,ft,W)}}}else if(X.visible){const q=_(C,X,S,y);C.onBeforeShadow(a,C,E,R,z,q,null),a.renderBufferDirect(R,null,z,q,C,null),C.onAfterShadow(a,C,E,R,z,q,null)}}const D=C.children;for(let z=0,X=D.length;z<X;z++)M(D[z],E,R,S,y)}function L(C){C.target.removeEventListener("dispose",L);for(const R in c){const S=c[R],y=C.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}const _m={[Qa]:tr,[er]:sr,[nr]:ar,[Oi]:ir,[tr]:Qa,[sr]:er,[ar]:nr,[ir]:Oi};function ym(a,t){function e(){let I=!1;const at=new se;let V=null;const K=new se(0,0,0,0);return{setMask:function(dt){V!==dt&&!I&&(a.colorMask(dt,dt,dt,dt),V=dt)},setLocked:function(dt){I=dt},setClear:function(dt,ht,Dt,xe,Pe){Pe===!0&&(dt*=xe,ht*=xe,Dt*=xe),at.set(dt,ht,Dt,xe),K.equals(at)===!1&&(a.clearColor(dt,ht,Dt,xe),K.copy(at))},reset:function(){I=!1,V=null,K.set(-1,0,0,0)}}}function n(){let I=!1,at=!1,V=null,K=null,dt=null;return{setReversed:function(ht){if(at!==ht){const Dt=t.get("EXT_clip_control");at?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT);const xe=dt;dt=null,this.setClear(xe)}at=ht},getReversed:function(){return at},setTest:function(ht){ht?ot(a.DEPTH_TEST):Rt(a.DEPTH_TEST)},setMask:function(ht){V!==ht&&!I&&(a.depthMask(ht),V=ht)},setFunc:function(ht){if(at&&(ht=_m[ht]),K!==ht){switch(ht){case Qa:a.depthFunc(a.NEVER);break;case tr:a.depthFunc(a.ALWAYS);break;case er:a.depthFunc(a.LESS);break;case Oi:a.depthFunc(a.LEQUAL);break;case nr:a.depthFunc(a.EQUAL);break;case ir:a.depthFunc(a.GEQUAL);break;case sr:a.depthFunc(a.GREATER);break;case ar:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}K=ht}},setLocked:function(ht){I=ht},setClear:function(ht){dt!==ht&&(at&&(ht=1-ht),a.clearDepth(ht),dt=ht)},reset:function(){I=!1,V=null,K=null,dt=null,at=!1}}}function i(){let I=!1,at=null,V=null,K=null,dt=null,ht=null,Dt=null,xe=null,Pe=null;return{setTest:function(te){I||(te?ot(a.STENCIL_TEST):Rt(a.STENCIL_TEST))},setMask:function(te){at!==te&&!I&&(a.stencilMask(te),at=te)},setFunc:function(te,Je,mn){(V!==te||K!==Je||dt!==mn)&&(a.stencilFunc(te,Je,mn),V=te,K=Je,dt=mn)},setOp:function(te,Je,mn){(ht!==te||Dt!==Je||xe!==mn)&&(a.stencilOp(te,Je,mn),ht=te,Dt=Je,xe=mn)},setLocked:function(te){I=te},setClear:function(te){Pe!==te&&(a.clearStencil(te),Pe=te)},reset:function(){I=!1,at=null,V=null,K=null,dt=null,ht=null,Dt=null,xe=null,Pe=null}}}const s=new e,r=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,d=[],g=null,v=!1,m=null,p=null,x=null,_=null,M=null,L=null,C=null,E=new It(0,0,0),R=0,S=!1,y=null,A=null,D=null,z=null,X=null;const q=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,J=0;const W=a.getParameter(a.VERSION);W.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(W)[1]),G=J>=1):W.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),G=J>=2);let rt=null,ft={};const wt=a.getParameter(a.SCISSOR_BOX),Bt=a.getParameter(a.VIEWPORT),ae=new se().fromArray(wt),j=new se().fromArray(Bt);function it(I,at,V,K){const dt=new Uint8Array(4),ht=a.createTexture();a.bindTexture(I,ht),a.texParameteri(I,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(I,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Dt=0;Dt<V;Dt++)I===a.TEXTURE_3D||I===a.TEXTURE_2D_ARRAY?a.texImage3D(at,0,a.RGBA,1,1,K,0,a.RGBA,a.UNSIGNED_BYTE,dt):a.texImage2D(at+Dt,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,dt);return ht}const yt={};yt[a.TEXTURE_2D]=it(a.TEXTURE_2D,a.TEXTURE_2D,1),yt[a.TEXTURE_CUBE_MAP]=it(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[a.TEXTURE_2D_ARRAY]=it(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),yt[a.TEXTURE_3D]=it(a.TEXTURE_3D,a.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ot(a.DEPTH_TEST),r.setFunc(Oi),Vt(!1),Wt(co),ot(a.CULL_FACE),O(kn);function ot(I){h[I]!==!0&&(a.enable(I),h[I]=!0)}function Rt(I){h[I]!==!1&&(a.disable(I),h[I]=!1)}function Lt(I,at){return u[I]!==at?(a.bindFramebuffer(I,at),u[I]=at,I===a.DRAW_FRAMEBUFFER&&(u[a.FRAMEBUFFER]=at),I===a.FRAMEBUFFER&&(u[a.DRAW_FRAMEBUFFER]=at),!0):!1}function kt(I,at){let V=d,K=!1;if(I){V=f.get(at),V===void 0&&(V=[],f.set(at,V));const dt=I.textures;if(V.length!==dt.length||V[0]!==a.COLOR_ATTACHMENT0){for(let ht=0,Dt=dt.length;ht<Dt;ht++)V[ht]=a.COLOR_ATTACHMENT0+ht;V.length=dt.length,K=!0}}else V[0]!==a.BACK&&(V[0]=a.BACK,K=!0);K&&a.drawBuffers(V)}function pe(I){return g!==I?(a.useProgram(I),g=I,!0):!1}const qt={[ti]:a.FUNC_ADD,[Fc]:a.FUNC_SUBTRACT,[Oc]:a.FUNC_REVERSE_SUBTRACT};qt[zc]=a.MIN,qt[Bc]=a.MAX;const _e={[kc]:a.ZERO,[Hc]:a.ONE,[Gc]:a.SRC_COLOR,[Ja]:a.SRC_ALPHA,[jc]:a.SRC_ALPHA_SATURATE,[qc]:a.DST_COLOR,[Wc]:a.DST_ALPHA,[Vc]:a.ONE_MINUS_SRC_COLOR,[Za]:a.ONE_MINUS_SRC_ALPHA,[Yc]:a.ONE_MINUS_DST_COLOR,[Xc]:a.ONE_MINUS_DST_ALPHA,[$c]:a.CONSTANT_COLOR,[Kc]:a.ONE_MINUS_CONSTANT_COLOR,[Jc]:a.CONSTANT_ALPHA,[Zc]:a.ONE_MINUS_CONSTANT_ALPHA};function O(I,at,V,K,dt,ht,Dt,xe,Pe,te){if(I===kn){v===!0&&(Rt(a.BLEND),v=!1);return}if(v===!1&&(ot(a.BLEND),v=!0),I!==Nc){if(I!==m||te!==S){if((p!==ti||M!==ti)&&(a.blendEquation(a.FUNC_ADD),p=ti,M=ti),te)switch(I){case Di:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case ho:a.blendFunc(a.ONE,a.ONE);break;case uo:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case fo:a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Di:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case ho:a.blendFunc(a.SRC_ALPHA,a.ONE);break;case uo:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case fo:a.blendFunc(a.ZERO,a.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}x=null,_=null,L=null,C=null,E.set(0,0,0),R=0,m=I,S=te}return}dt=dt||at,ht=ht||V,Dt=Dt||K,(at!==p||dt!==M)&&(a.blendEquationSeparate(qt[at],qt[dt]),p=at,M=dt),(V!==x||K!==_||ht!==L||Dt!==C)&&(a.blendFuncSeparate(_e[V],_e[K],_e[ht],_e[Dt]),x=V,_=K,L=ht,C=Dt),(xe.equals(E)===!1||Pe!==R)&&(a.blendColor(xe.r,xe.g,xe.b,Pe),E.copy(xe),R=Pe),m=I,S=!1}function Ye(I,at){I.side===sn?Rt(a.CULL_FACE):ot(a.CULL_FACE);let V=I.side===ze;at&&(V=!V),Vt(V),I.blending===Di&&I.transparent===!1?O(kn):O(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),r.setFunc(I.depthFunc),r.setTest(I.depthTest),r.setMask(I.depthWrite),s.setMask(I.colorWrite);const K=I.stencilWrite;o.setTest(K),K&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ce(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ot(a.SAMPLE_ALPHA_TO_COVERAGE):Rt(a.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(I){y!==I&&(I?a.frontFace(a.CW):a.frontFace(a.CCW),y=I)}function Wt(I){I!==Dc?(ot(a.CULL_FACE),I!==A&&(I===co?a.cullFace(a.BACK):I===Uc?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Rt(a.CULL_FACE),A=I}function Tt(I){I!==D&&(G&&a.lineWidth(I),D=I)}function ce(I,at,V){I?(ot(a.POLYGON_OFFSET_FILL),(z!==at||X!==V)&&(a.polygonOffset(at,V),z=at,X=V)):Rt(a.POLYGON_OFFSET_FILL)}function Et(I){I?ot(a.SCISSOR_TEST):Rt(a.SCISSOR_TEST)}function P(I){I===void 0&&(I=a.TEXTURE0+q-1),rt!==I&&(a.activeTexture(I),rt=I)}function b(I,at,V){V===void 0&&(rt===null?V=a.TEXTURE0+q-1:V=rt);let K=ft[V];K===void 0&&(K={type:void 0,texture:void 0},ft[V]=K),(K.type!==I||K.texture!==at)&&(rt!==V&&(a.activeTexture(V),rt=V),a.bindTexture(I,at||yt[I]),K.type=I,K.texture=at)}function B(){const I=ft[rt];I!==void 0&&I.type!==void 0&&(a.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function $(){try{a.compressedTexImage2D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{a.compressedTexImage3D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Y(){try{a.texSubImage2D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Mt(){try{a.texSubImage3D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function lt(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pt(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Yt(){try{a.texStorage2D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function et(){try{a.texStorage3D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function mt(){try{a.texImage2D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function At(){try{a.texImage3D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ct(I){ae.equals(I)===!1&&(a.scissor(I.x,I.y,I.z,I.w),ae.copy(I))}function gt(I){j.equals(I)===!1&&(a.viewport(I.x,I.y,I.z,I.w),j.copy(I))}function Xt(I,at){let V=c.get(at);V===void 0&&(V=new WeakMap,c.set(at,V));let K=V.get(I);K===void 0&&(K=a.getUniformBlockIndex(at,I.name),V.set(I,K))}function Ft(I,at){const K=c.get(at).get(I);l.get(at)!==K&&(a.uniformBlockBinding(at,K,I.__bindingPointIndex),l.set(at,K))}function oe(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),r.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),h={},rt=null,ft={},u={},f=new WeakMap,d=[],g=null,v=!1,m=null,p=null,x=null,_=null,M=null,L=null,C=null,E=new It(0,0,0),R=0,S=!1,y=null,A=null,D=null,z=null,X=null,ae.set(0,0,a.canvas.width,a.canvas.height),j.set(0,0,a.canvas.width,a.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:ot,disable:Rt,bindFramebuffer:Lt,drawBuffers:kt,useProgram:pe,setBlending:O,setMaterial:Ye,setFlipSided:Vt,setCullFace:Wt,setLineWidth:Tt,setPolygonOffset:ce,setScissorTest:Et,activeTexture:P,bindTexture:b,unbindTexture:B,compressedTexImage2D:$,compressedTexImage3D:Z,texImage2D:mt,texImage3D:At,updateUBOMapping:Xt,uniformBlockBinding:Ft,texStorage2D:Yt,texStorage3D:et,texSubImage2D:Y,texSubImage3D:Mt,compressedTexSubImage2D:lt,compressedTexSubImage3D:pt,scissor:Ct,viewport:gt,reset:oe}}function rl(a,t,e,n){const i=Mm(n);switch(e){case Gl:return a*t;case Wl:return a*t;case Xl:return a*t*2;case Wr:return a*t/i.components*i.byteLength;case Xr:return a*t/i.components*i.byteLength;case ql:return a*t*2/i.components*i.byteLength;case qr:return a*t*2/i.components*i.byteLength;case Vl:return a*t*3/i.components*i.byteLength;case an:return a*t*4/i.components*i.byteLength;case Yr:return a*t*4/i.components*i.byteLength;case Ys:case js:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*8;case $s:case Ks:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*16;case hr:case dr:return Math.max(a,16)*Math.max(t,8)/4;case cr:case ur:return Math.max(a,8)*Math.max(t,8)/2;case fr:case pr:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*8;case mr:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*16;case gr:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*16;case xr:return Math.floor((a+4)/5)*Math.floor((t+3)/4)*16;case vr:return Math.floor((a+4)/5)*Math.floor((t+4)/5)*16;case _r:return Math.floor((a+5)/6)*Math.floor((t+4)/5)*16;case yr:return Math.floor((a+5)/6)*Math.floor((t+5)/6)*16;case Mr:return Math.floor((a+7)/8)*Math.floor((t+4)/5)*16;case Sr:return Math.floor((a+7)/8)*Math.floor((t+5)/6)*16;case br:return Math.floor((a+7)/8)*Math.floor((t+7)/8)*16;case wr:return Math.floor((a+9)/10)*Math.floor((t+4)/5)*16;case Er:return Math.floor((a+9)/10)*Math.floor((t+5)/6)*16;case Tr:return Math.floor((a+9)/10)*Math.floor((t+7)/8)*16;case Ar:return Math.floor((a+9)/10)*Math.floor((t+9)/10)*16;case Rr:return Math.floor((a+11)/12)*Math.floor((t+9)/10)*16;case Cr:return Math.floor((a+11)/12)*Math.floor((t+11)/12)*16;case Js:case Pr:case Lr:return Math.ceil(a/4)*Math.ceil(t/4)*16;case Yl:case Ir:return Math.ceil(a/4)*Math.ceil(t/4)*8;case Dr:case Ur:return Math.ceil(a/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Mm(a){switch(a){case Tn:case Bl:return{byteLength:1,components:1};case fs:case kl:case ps:return{byteLength:2,components:1};case Gr:case Vr:return{byteLength:2,components:4};case ai:case Hr:case un:return{byteLength:4,components:1};case Hl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}function Sm(a,t,e,n,i,s,r){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ct,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,b){return d?new OffscreenCanvas(P,b):na("canvas")}function v(P,b,B){let $=1;const Z=Et(P);if((Z.width>B||Z.height>B)&&($=B/Math.max(Z.width,Z.height)),$<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Y=Math.floor($*Z.width),Mt=Math.floor($*Z.height);u===void 0&&(u=g(Y,Mt));const lt=b?g(Y,Mt):u;return lt.width=Y,lt.height=Mt,lt.getContext("2d").drawImage(P,0,0,Y,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+Y+"x"+Mt+")."),lt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),P;return P}function m(P){return P.generateMipmaps}function p(P){a.generateMipmap(P)}function x(P){return P.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?a.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function _(P,b,B,$,Z=!1){if(P!==null){if(a[P]!==void 0)return a[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Y=b;if(b===a.RED&&(B===a.FLOAT&&(Y=a.R32F),B===a.HALF_FLOAT&&(Y=a.R16F),B===a.UNSIGNED_BYTE&&(Y=a.R8)),b===a.RED_INTEGER&&(B===a.UNSIGNED_BYTE&&(Y=a.R8UI),B===a.UNSIGNED_SHORT&&(Y=a.R16UI),B===a.UNSIGNED_INT&&(Y=a.R32UI),B===a.BYTE&&(Y=a.R8I),B===a.SHORT&&(Y=a.R16I),B===a.INT&&(Y=a.R32I)),b===a.RG&&(B===a.FLOAT&&(Y=a.RG32F),B===a.HALF_FLOAT&&(Y=a.RG16F),B===a.UNSIGNED_BYTE&&(Y=a.RG8)),b===a.RG_INTEGER&&(B===a.UNSIGNED_BYTE&&(Y=a.RG8UI),B===a.UNSIGNED_SHORT&&(Y=a.RG16UI),B===a.UNSIGNED_INT&&(Y=a.RG32UI),B===a.BYTE&&(Y=a.RG8I),B===a.SHORT&&(Y=a.RG16I),B===a.INT&&(Y=a.RG32I)),b===a.RGB_INTEGER&&(B===a.UNSIGNED_BYTE&&(Y=a.RGB8UI),B===a.UNSIGNED_SHORT&&(Y=a.RGB16UI),B===a.UNSIGNED_INT&&(Y=a.RGB32UI),B===a.BYTE&&(Y=a.RGB8I),B===a.SHORT&&(Y=a.RGB16I),B===a.INT&&(Y=a.RGB32I)),b===a.RGBA_INTEGER&&(B===a.UNSIGNED_BYTE&&(Y=a.RGBA8UI),B===a.UNSIGNED_SHORT&&(Y=a.RGBA16UI),B===a.UNSIGNED_INT&&(Y=a.RGBA32UI),B===a.BYTE&&(Y=a.RGBA8I),B===a.SHORT&&(Y=a.RGBA16I),B===a.INT&&(Y=a.RGBA32I)),b===a.RGB&&B===a.UNSIGNED_INT_5_9_9_9_REV&&(Y=a.RGB9_E5),b===a.RGBA){const Mt=Z?ra:jt.getTransfer($);B===a.FLOAT&&(Y=a.RGBA32F),B===a.HALF_FLOAT&&(Y=a.RGBA16F),B===a.UNSIGNED_BYTE&&(Y=Mt===ne?a.SRGB8_ALPHA8:a.RGBA8),B===a.UNSIGNED_SHORT_4_4_4_4&&(Y=a.RGBA4),B===a.UNSIGNED_SHORT_5_5_5_1&&(Y=a.RGB5_A1)}return(Y===a.R16F||Y===a.R32F||Y===a.RG16F||Y===a.RG32F||Y===a.RGBA16F||Y===a.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function M(P,b){let B;return P?b===null||b===ai||b===Hi?B=a.DEPTH24_STENCIL8:b===un?B=a.DEPTH32F_STENCIL8:b===fs&&(B=a.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ai||b===Hi?B=a.DEPTH_COMPONENT24:b===un?B=a.DEPTH_COMPONENT32F:b===fs&&(B=a.DEPTH_COMPONENT16),B}function L(P,b){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==qe&&P.minFilter!==hn?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function C(P){const b=P.target;b.removeEventListener("dispose",C),R(b),b.isVideoTexture&&h.delete(b)}function E(P){const b=P.target;b.removeEventListener("dispose",E),y(b)}function R(P){const b=n.get(P);if(b.__webglInit===void 0)return;const B=P.source,$=f.get(B);if($){const Z=$[b.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&S(P),Object.keys($).length===0&&f.delete(B)}n.remove(P)}function S(P){const b=n.get(P);a.deleteTexture(b.__webglTexture);const B=P.source,$=f.get(B);delete $[b.__cacheKey],r.memory.textures--}function y(P){const b=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(b.__webglFramebuffer[$]))for(let Z=0;Z<b.__webglFramebuffer[$].length;Z++)a.deleteFramebuffer(b.__webglFramebuffer[$][Z]);else a.deleteFramebuffer(b.__webglFramebuffer[$]);b.__webglDepthbuffer&&a.deleteRenderbuffer(b.__webglDepthbuffer[$])}else{if(Array.isArray(b.__webglFramebuffer))for(let $=0;$<b.__webglFramebuffer.length;$++)a.deleteFramebuffer(b.__webglFramebuffer[$]);else a.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&a.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&a.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let $=0;$<b.__webglColorRenderbuffer.length;$++)b.__webglColorRenderbuffer[$]&&a.deleteRenderbuffer(b.__webglColorRenderbuffer[$]);b.__webglDepthRenderbuffer&&a.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const B=P.textures;for(let $=0,Z=B.length;$<Z;$++){const Y=n.get(B[$]);Y.__webglTexture&&(a.deleteTexture(Y.__webglTexture),r.memory.textures--),n.remove(B[$])}n.remove(P)}let A=0;function D(){A=0}function z(){const P=A;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),A+=1,P}function X(P){const b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function q(P,b){const B=n.get(P);if(P.isVideoTexture&&Tt(P),P.isRenderTargetTexture===!1&&P.version>0&&B.__version!==P.version){const $=P.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(B,P,b);return}}e.bindTexture(a.TEXTURE_2D,B.__webglTexture,a.TEXTURE0+b)}function G(P,b){const B=n.get(P);if(P.version>0&&B.__version!==P.version){j(B,P,b);return}e.bindTexture(a.TEXTURE_2D_ARRAY,B.__webglTexture,a.TEXTURE0+b)}function J(P,b){const B=n.get(P);if(P.version>0&&B.__version!==P.version){j(B,P,b);return}e.bindTexture(a.TEXTURE_3D,B.__webglTexture,a.TEXTURE0+b)}function W(P,b){const B=n.get(P);if(P.version>0&&B.__version!==P.version){it(B,P,b);return}e.bindTexture(a.TEXTURE_CUBE_MAP,B.__webglTexture,a.TEXTURE0+b)}const rt={[ki]:a.REPEAT,[ni]:a.CLAMP_TO_EDGE,[lr]:a.MIRRORED_REPEAT},ft={[qe]:a.NEAREST,[oh]:a.NEAREST_MIPMAP_NEAREST,[vs]:a.NEAREST_MIPMAP_LINEAR,[hn]:a.LINEAR,[ua]:a.LINEAR_MIPMAP_NEAREST,[ii]:a.LINEAR_MIPMAP_LINEAR},wt={[uh]:a.NEVER,[xh]:a.ALWAYS,[dh]:a.LESS,[$l]:a.LEQUAL,[fh]:a.EQUAL,[gh]:a.GEQUAL,[ph]:a.GREATER,[mh]:a.NOTEQUAL};function Bt(P,b){if(b.type===un&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===hn||b.magFilter===ua||b.magFilter===vs||b.magFilter===ii||b.minFilter===hn||b.minFilter===ua||b.minFilter===vs||b.minFilter===ii)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(P,a.TEXTURE_WRAP_S,rt[b.wrapS]),a.texParameteri(P,a.TEXTURE_WRAP_T,rt[b.wrapT]),(P===a.TEXTURE_3D||P===a.TEXTURE_2D_ARRAY)&&a.texParameteri(P,a.TEXTURE_WRAP_R,rt[b.wrapR]),a.texParameteri(P,a.TEXTURE_MAG_FILTER,ft[b.magFilter]),a.texParameteri(P,a.TEXTURE_MIN_FILTER,ft[b.minFilter]),b.compareFunction&&(a.texParameteri(P,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(P,a.TEXTURE_COMPARE_FUNC,wt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===qe||b.minFilter!==vs&&b.minFilter!==ii||b.type===un&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");a.texParameterf(P,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function ae(P,b){let B=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",C));const $=b.source;let Z=f.get($);Z===void 0&&(Z={},f.set($,Z));const Y=X(b);if(Y!==P.__cacheKey){Z[Y]===void 0&&(Z[Y]={texture:a.createTexture(),usedTimes:0},r.memory.textures++,B=!0),Z[Y].usedTimes++;const Mt=Z[P.__cacheKey];Mt!==void 0&&(Z[P.__cacheKey].usedTimes--,Mt.usedTimes===0&&S(b)),P.__cacheKey=Y,P.__webglTexture=Z[Y].texture}return B}function j(P,b,B){let $=a.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&($=a.TEXTURE_2D_ARRAY),b.isData3DTexture&&($=a.TEXTURE_3D);const Z=ae(P,b),Y=b.source;e.bindTexture($,P.__webglTexture,a.TEXTURE0+B);const Mt=n.get(Y);if(Y.version!==Mt.__version||Z===!0){e.activeTexture(a.TEXTURE0+B);const lt=jt.getPrimaries(jt.workingColorSpace),pt=b.colorSpace===zn?null:jt.getPrimaries(b.colorSpace),Yt=b.colorSpace===zn||lt===pt?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,b.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,b.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let et=v(b.image,!1,i.maxTextureSize);et=ce(b,et);const mt=s.convert(b.format,b.colorSpace),At=s.convert(b.type);let Ct=_(b.internalFormat,mt,At,b.colorSpace,b.isVideoTexture);Bt($,b);let gt;const Xt=b.mipmaps,Ft=b.isVideoTexture!==!0,oe=Mt.__version===void 0||Z===!0,I=Y.dataReady,at=L(b,et);if(b.isDepthTexture)Ct=M(b.format===Gi,b.type),oe&&(Ft?e.texStorage2D(a.TEXTURE_2D,1,Ct,et.width,et.height):e.texImage2D(a.TEXTURE_2D,0,Ct,et.width,et.height,0,mt,At,null));else if(b.isDataTexture)if(Xt.length>0){Ft&&oe&&e.texStorage2D(a.TEXTURE_2D,at,Ct,Xt[0].width,Xt[0].height);for(let V=0,K=Xt.length;V<K;V++)gt=Xt[V],Ft?I&&e.texSubImage2D(a.TEXTURE_2D,V,0,0,gt.width,gt.height,mt,At,gt.data):e.texImage2D(a.TEXTURE_2D,V,Ct,gt.width,gt.height,0,mt,At,gt.data);b.generateMipmaps=!1}else Ft?(oe&&e.texStorage2D(a.TEXTURE_2D,at,Ct,et.width,et.height),I&&e.texSubImage2D(a.TEXTURE_2D,0,0,0,et.width,et.height,mt,At,et.data)):e.texImage2D(a.TEXTURE_2D,0,Ct,et.width,et.height,0,mt,At,et.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ft&&oe&&e.texStorage3D(a.TEXTURE_2D_ARRAY,at,Ct,Xt[0].width,Xt[0].height,et.depth);for(let V=0,K=Xt.length;V<K;V++)if(gt=Xt[V],b.format!==an)if(mt!==null)if(Ft){if(I)if(b.layerUpdates.size>0){const dt=rl(gt.width,gt.height,b.format,b.type);for(const ht of b.layerUpdates){const Dt=gt.data.subarray(ht*dt/gt.data.BYTES_PER_ELEMENT,(ht+1)*dt/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,V,0,0,ht,gt.width,gt.height,1,mt,Dt)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,V,0,0,0,gt.width,gt.height,et.depth,mt,gt.data)}else e.compressedTexImage3D(a.TEXTURE_2D_ARRAY,V,Ct,gt.width,gt.height,et.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ft?I&&e.texSubImage3D(a.TEXTURE_2D_ARRAY,V,0,0,0,gt.width,gt.height,et.depth,mt,At,gt.data):e.texImage3D(a.TEXTURE_2D_ARRAY,V,Ct,gt.width,gt.height,et.depth,0,mt,At,gt.data)}else{Ft&&oe&&e.texStorage2D(a.TEXTURE_2D,at,Ct,Xt[0].width,Xt[0].height);for(let V=0,K=Xt.length;V<K;V++)gt=Xt[V],b.format!==an?mt!==null?Ft?I&&e.compressedTexSubImage2D(a.TEXTURE_2D,V,0,0,gt.width,gt.height,mt,gt.data):e.compressedTexImage2D(a.TEXTURE_2D,V,Ct,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?I&&e.texSubImage2D(a.TEXTURE_2D,V,0,0,gt.width,gt.height,mt,At,gt.data):e.texImage2D(a.TEXTURE_2D,V,Ct,gt.width,gt.height,0,mt,At,gt.data)}else if(b.isDataArrayTexture)if(Ft){if(oe&&e.texStorage3D(a.TEXTURE_2D_ARRAY,at,Ct,et.width,et.height,et.depth),I)if(b.layerUpdates.size>0){const V=rl(et.width,et.height,b.format,b.type);for(const K of b.layerUpdates){const dt=et.data.subarray(K*V/et.data.BYTES_PER_ELEMENT,(K+1)*V/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,K,et.width,et.height,1,mt,At,dt)}b.clearLayerUpdates()}else e.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,mt,At,et.data)}else e.texImage3D(a.TEXTURE_2D_ARRAY,0,Ct,et.width,et.height,et.depth,0,mt,At,et.data);else if(b.isData3DTexture)Ft?(oe&&e.texStorage3D(a.TEXTURE_3D,at,Ct,et.width,et.height,et.depth),I&&e.texSubImage3D(a.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,mt,At,et.data)):e.texImage3D(a.TEXTURE_3D,0,Ct,et.width,et.height,et.depth,0,mt,At,et.data);else if(b.isFramebufferTexture){if(oe)if(Ft)e.texStorage2D(a.TEXTURE_2D,at,Ct,et.width,et.height);else{let V=et.width,K=et.height;for(let dt=0;dt<at;dt++)e.texImage2D(a.TEXTURE_2D,dt,Ct,V,K,0,mt,At,null),V>>=1,K>>=1}}else if(Xt.length>0){if(Ft&&oe){const V=Et(Xt[0]);e.texStorage2D(a.TEXTURE_2D,at,Ct,V.width,V.height)}for(let V=0,K=Xt.length;V<K;V++)gt=Xt[V],Ft?I&&e.texSubImage2D(a.TEXTURE_2D,V,0,0,mt,At,gt):e.texImage2D(a.TEXTURE_2D,V,Ct,mt,At,gt);b.generateMipmaps=!1}else if(Ft){if(oe){const V=Et(et);e.texStorage2D(a.TEXTURE_2D,at,Ct,V.width,V.height)}I&&e.texSubImage2D(a.TEXTURE_2D,0,0,0,mt,At,et)}else e.texImage2D(a.TEXTURE_2D,0,Ct,mt,At,et);m(b)&&p($),Mt.__version=Y.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function it(P,b,B){if(b.image.length!==6)return;const $=ae(P,b),Z=b.source;e.bindTexture(a.TEXTURE_CUBE_MAP,P.__webglTexture,a.TEXTURE0+B);const Y=n.get(Z);if(Z.version!==Y.__version||$===!0){e.activeTexture(a.TEXTURE0+B);const Mt=jt.getPrimaries(jt.workingColorSpace),lt=b.colorSpace===zn?null:jt.getPrimaries(b.colorSpace),pt=b.colorSpace===zn||Mt===lt?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,b.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,b.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const Yt=b.isCompressedTexture||b.image[0].isCompressedTexture,et=b.image[0]&&b.image[0].isDataTexture,mt=[];for(let K=0;K<6;K++)!Yt&&!et?mt[K]=v(b.image[K],!0,i.maxCubemapSize):mt[K]=et?b.image[K].image:b.image[K],mt[K]=ce(b,mt[K]);const At=mt[0],Ct=s.convert(b.format,b.colorSpace),gt=s.convert(b.type),Xt=_(b.internalFormat,Ct,gt,b.colorSpace),Ft=b.isVideoTexture!==!0,oe=Y.__version===void 0||$===!0,I=Z.dataReady;let at=L(b,At);Bt(a.TEXTURE_CUBE_MAP,b);let V;if(Yt){Ft&&oe&&e.texStorage2D(a.TEXTURE_CUBE_MAP,at,Xt,At.width,At.height);for(let K=0;K<6;K++){V=mt[K].mipmaps;for(let dt=0;dt<V.length;dt++){const ht=V[dt];b.format!==an?Ct!==null?Ft?I&&e.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+K,dt,0,0,ht.width,ht.height,Ct,ht.data):e.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+K,dt,Xt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?I&&e.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+K,dt,0,0,ht.width,ht.height,Ct,gt,ht.data):e.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+K,dt,Xt,ht.width,ht.height,0,Ct,gt,ht.data)}}}else{if(V=b.mipmaps,Ft&&oe){V.length>0&&at++;const K=Et(mt[0]);e.texStorage2D(a.TEXTURE_CUBE_MAP,at,Xt,K.width,K.height)}for(let K=0;K<6;K++)if(et){Ft?I&&e.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,mt[K].width,mt[K].height,Ct,gt,mt[K].data):e.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Xt,mt[K].width,mt[K].height,0,Ct,gt,mt[K].data);for(let dt=0;dt<V.length;dt++){const Dt=V[dt].image[K].image;Ft?I&&e.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+K,dt+1,0,0,Dt.width,Dt.height,Ct,gt,Dt.data):e.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+K,dt+1,Xt,Dt.width,Dt.height,0,Ct,gt,Dt.data)}}else{Ft?I&&e.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ct,gt,mt[K]):e.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Xt,Ct,gt,mt[K]);for(let dt=0;dt<V.length;dt++){const ht=V[dt];Ft?I&&e.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+K,dt+1,0,0,Ct,gt,ht.image[K]):e.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+K,dt+1,Xt,Ct,gt,ht.image[K])}}}m(b)&&p(a.TEXTURE_CUBE_MAP),Y.__version=Z.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function yt(P,b,B,$,Z,Y){const Mt=s.convert(B.format,B.colorSpace),lt=s.convert(B.type),pt=_(B.internalFormat,Mt,lt,B.colorSpace),Yt=n.get(b),et=n.get(B);if(et.__renderTarget=b,!Yt.__hasExternalTextures){const mt=Math.max(1,b.width>>Y),At=Math.max(1,b.height>>Y);Z===a.TEXTURE_3D||Z===a.TEXTURE_2D_ARRAY?e.texImage3D(Z,Y,pt,mt,At,b.depth,0,Mt,lt,null):e.texImage2D(Z,Y,pt,mt,At,0,Mt,lt,null)}e.bindFramebuffer(a.FRAMEBUFFER,P),Wt(b)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,$,Z,et.__webglTexture,0,Vt(b)):(Z===a.TEXTURE_2D||Z>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,$,Z,et.__webglTexture,Y),e.bindFramebuffer(a.FRAMEBUFFER,null)}function ot(P,b,B){if(a.bindRenderbuffer(a.RENDERBUFFER,P),b.depthBuffer){const $=b.depthTexture,Z=$&&$.isDepthTexture?$.type:null,Y=M(b.stencilBuffer,Z),Mt=b.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,lt=Vt(b);Wt(b)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,lt,Y,b.width,b.height):B?a.renderbufferStorageMultisample(a.RENDERBUFFER,lt,Y,b.width,b.height):a.renderbufferStorage(a.RENDERBUFFER,Y,b.width,b.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Mt,a.RENDERBUFFER,P)}else{const $=b.textures;for(let Z=0;Z<$.length;Z++){const Y=$[Z],Mt=s.convert(Y.format,Y.colorSpace),lt=s.convert(Y.type),pt=_(Y.internalFormat,Mt,lt,Y.colorSpace),Yt=Vt(b);B&&Wt(b)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,Yt,pt,b.width,b.height):Wt(b)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Yt,pt,b.width,b.height):a.renderbufferStorage(a.RENDERBUFFER,pt,b.width,b.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function Rt(P,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(a.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(b.depthTexture);$.__renderTarget=b,(!$.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),q(b.depthTexture,0);const Z=$.__webglTexture,Y=Vt(b);if(b.depthTexture.format===Ui)Wt(b)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,Z,0,Y):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,Z,0);else if(b.depthTexture.format===Gi)Wt(b)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,Z,0,Y):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Lt(P){const b=n.get(P),B=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){const $=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),$){const Z=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,$.removeEventListener("dispose",Z)};$.addEventListener("dispose",Z),b.__depthDisposeCallback=Z}b.__boundDepthTexture=$}if(P.depthTexture&&!b.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Rt(b.__webglFramebuffer,P)}else if(B){b.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(a.FRAMEBUFFER,b.__webglFramebuffer[$]),b.__webglDepthbuffer[$]===void 0)b.__webglDepthbuffer[$]=a.createRenderbuffer(),ot(b.__webglDepthbuffer[$],P,!1);else{const Z=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Y=b.__webglDepthbuffer[$];a.bindRenderbuffer(a.RENDERBUFFER,Y),a.framebufferRenderbuffer(a.FRAMEBUFFER,Z,a.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(a.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=a.createRenderbuffer(),ot(b.__webglDepthbuffer,P,!1);else{const $=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Z=b.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,Z),a.framebufferRenderbuffer(a.FRAMEBUFFER,$,a.RENDERBUFFER,Z)}e.bindFramebuffer(a.FRAMEBUFFER,null)}function kt(P,b,B){const $=n.get(P);b!==void 0&&yt($.__webglFramebuffer,P,P.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),B!==void 0&&Lt(P)}function pe(P){const b=P.texture,B=n.get(P),$=n.get(b);P.addEventListener("dispose",E);const Z=P.textures,Y=P.isWebGLCubeRenderTarget===!0,Mt=Z.length>1;if(Mt||($.__webglTexture===void 0&&($.__webglTexture=a.createTexture()),$.__version=b.version,r.memory.textures++),Y){B.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(b.mipmaps&&b.mipmaps.length>0){B.__webglFramebuffer[lt]=[];for(let pt=0;pt<b.mipmaps.length;pt++)B.__webglFramebuffer[lt][pt]=a.createFramebuffer()}else B.__webglFramebuffer[lt]=a.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){B.__webglFramebuffer=[];for(let lt=0;lt<b.mipmaps.length;lt++)B.__webglFramebuffer[lt]=a.createFramebuffer()}else B.__webglFramebuffer=a.createFramebuffer();if(Mt)for(let lt=0,pt=Z.length;lt<pt;lt++){const Yt=n.get(Z[lt]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=a.createTexture(),r.memory.textures++)}if(P.samples>0&&Wt(P)===!1){B.__webglMultisampledFramebuffer=a.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(a.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let lt=0;lt<Z.length;lt++){const pt=Z[lt];B.__webglColorRenderbuffer[lt]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,B.__webglColorRenderbuffer[lt]);const Yt=s.convert(pt.format,pt.colorSpace),et=s.convert(pt.type),mt=_(pt.internalFormat,Yt,et,pt.colorSpace,P.isXRRenderTarget===!0),At=Vt(P);a.renderbufferStorageMultisample(a.RENDERBUFFER,At,mt,P.width,P.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+lt,a.RENDERBUFFER,B.__webglColorRenderbuffer[lt])}a.bindRenderbuffer(a.RENDERBUFFER,null),P.depthBuffer&&(B.__webglDepthRenderbuffer=a.createRenderbuffer(),ot(B.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(a.FRAMEBUFFER,null)}}if(Y){e.bindTexture(a.TEXTURE_CUBE_MAP,$.__webglTexture),Bt(a.TEXTURE_CUBE_MAP,b);for(let lt=0;lt<6;lt++)if(b.mipmaps&&b.mipmaps.length>0)for(let pt=0;pt<b.mipmaps.length;pt++)yt(B.__webglFramebuffer[lt][pt],P,b,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+lt,pt);else yt(B.__webglFramebuffer[lt],P,b,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);m(b)&&p(a.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let lt=0,pt=Z.length;lt<pt;lt++){const Yt=Z[lt],et=n.get(Yt);e.bindTexture(a.TEXTURE_2D,et.__webglTexture),Bt(a.TEXTURE_2D,Yt),yt(B.__webglFramebuffer,P,Yt,a.COLOR_ATTACHMENT0+lt,a.TEXTURE_2D,0),m(Yt)&&p(a.TEXTURE_2D)}e.unbindTexture()}else{let lt=a.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(lt=P.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),e.bindTexture(lt,$.__webglTexture),Bt(lt,b),b.mipmaps&&b.mipmaps.length>0)for(let pt=0;pt<b.mipmaps.length;pt++)yt(B.__webglFramebuffer[pt],P,b,a.COLOR_ATTACHMENT0,lt,pt);else yt(B.__webglFramebuffer,P,b,a.COLOR_ATTACHMENT0,lt,0);m(b)&&p(lt),e.unbindTexture()}P.depthBuffer&&Lt(P)}function qt(P){const b=P.textures;for(let B=0,$=b.length;B<$;B++){const Z=b[B];if(m(Z)){const Y=x(P),Mt=n.get(Z).__webglTexture;e.bindTexture(Y,Mt),p(Y),e.unbindTexture()}}}const _e=[],O=[];function Ye(P){if(P.samples>0){if(Wt(P)===!1){const b=P.textures,B=P.width,$=P.height;let Z=a.COLOR_BUFFER_BIT;const Y=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Mt=n.get(P),lt=b.length>1;if(lt)for(let pt=0;pt<b.length;pt++)e.bindFramebuffer(a.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+pt,a.RENDERBUFFER,null),e.bindFramebuffer(a.FRAMEBUFFER,Mt.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+pt,a.TEXTURE_2D,null,0);e.bindFramebuffer(a.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.bindFramebuffer(a.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let pt=0;pt<b.length;pt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Z|=a.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Z|=a.STENCIL_BUFFER_BIT)),lt){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Mt.__webglColorRenderbuffer[pt]);const Yt=n.get(b[pt]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Yt,0)}a.blitFramebuffer(0,0,B,$,0,0,B,$,Z,a.NEAREST),l===!0&&(_e.length=0,O.length=0,_e.push(a.COLOR_ATTACHMENT0+pt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(_e.push(Y),O.push(Y),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,O)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,_e))}if(e.bindFramebuffer(a.READ_FRAMEBUFFER,null),e.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),lt)for(let pt=0;pt<b.length;pt++){e.bindFramebuffer(a.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+pt,a.RENDERBUFFER,Mt.__webglColorRenderbuffer[pt]);const Yt=n.get(b[pt]).__webglTexture;e.bindFramebuffer(a.FRAMEBUFFER,Mt.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+pt,a.TEXTURE_2D,Yt,0)}e.bindFramebuffer(a.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const b=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[b])}}}function Vt(P){return Math.min(i.maxSamples,P.samples)}function Wt(P){const b=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Tt(P){const b=r.render.frame;h.get(P)!==b&&(h.set(P,b),P.update())}function ce(P,b){const B=P.colorSpace,$=P.format,Z=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||B!==Xi&&B!==zn&&(jt.getTransfer(B)===ne?($!==an||Z!==Tn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),b}function Et(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=D,this.setTexture2D=q,this.setTexture2DArray=G,this.setTexture3D=J,this.setTextureCube=W,this.rebindTextures=kt,this.setupRenderTarget=pe,this.updateRenderTargetMipmap=qt,this.updateMultisampleRenderTarget=Ye,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=Wt}function bm(a,t){function e(n,i=zn){let s;const r=jt.getTransfer(i);if(n===Tn)return a.UNSIGNED_BYTE;if(n===Gr)return a.UNSIGNED_SHORT_4_4_4_4;if(n===Vr)return a.UNSIGNED_SHORT_5_5_5_1;if(n===Hl)return a.UNSIGNED_INT_5_9_9_9_REV;if(n===Bl)return a.BYTE;if(n===kl)return a.SHORT;if(n===fs)return a.UNSIGNED_SHORT;if(n===Hr)return a.INT;if(n===ai)return a.UNSIGNED_INT;if(n===un)return a.FLOAT;if(n===ps)return a.HALF_FLOAT;if(n===Gl)return a.ALPHA;if(n===Vl)return a.RGB;if(n===an)return a.RGBA;if(n===Wl)return a.LUMINANCE;if(n===Xl)return a.LUMINANCE_ALPHA;if(n===Ui)return a.DEPTH_COMPONENT;if(n===Gi)return a.DEPTH_STENCIL;if(n===Wr)return a.RED;if(n===Xr)return a.RED_INTEGER;if(n===ql)return a.RG;if(n===qr)return a.RG_INTEGER;if(n===Yr)return a.RGBA_INTEGER;if(n===Ys||n===js||n===$s||n===Ks)if(r===ne)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ys)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===js)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===$s)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ks)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ys)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===js)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===$s)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ks)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===cr||n===hr||n===ur||n===dr)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===cr)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===hr)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ur)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===dr)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===fr||n===pr||n===mr)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===fr||n===pr)return r===ne?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===mr)return r===ne?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===gr||n===xr||n===vr||n===_r||n===yr||n===Mr||n===Sr||n===br||n===wr||n===Er||n===Tr||n===Ar||n===Rr||n===Cr)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===gr)return r===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===xr)return r===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===vr)return r===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===_r)return r===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===yr)return r===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Mr)return r===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Sr)return r===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===br)return r===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===wr)return r===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Er)return r===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Tr)return r===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ar)return r===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Rr)return r===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Cr)return r===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Js||n===Pr||n===Lr)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Js)return r===ne?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Pr)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Lr)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Yl||n===Ir||n===Dr||n===Ur)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Js)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ir)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Dr)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ur)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Hi?a.UNSIGNED_INT_24_8:a[n]!==void 0?a[n]:null}return{convert:e}}class wm extends Xe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ge extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Em={type:"move"};class ka{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ge,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ge,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ge,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Em)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ge;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Tm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Am=`
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

}`;class Rm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Ue,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new An({vertexShader:Tm,fragmentShader:Am,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Jt(new fn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Cm extends qi{constructor(t,e){super();const n=this;let i=null,s=1,r=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null;const v=new Rm,m=e.getContextAttributes();let p=null,x=null;const _=[],M=[],L=new ct;let C=null;const E=new Xe;E.viewport=new se;const R=new Xe;R.viewport=new se;const S=[E,R],y=new wm;let A=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let it=_[j];return it===void 0&&(it=new ka,_[j]=it),it.getTargetRaySpace()},this.getControllerGrip=function(j){let it=_[j];return it===void 0&&(it=new ka,_[j]=it),it.getGripSpace()},this.getHand=function(j){let it=_[j];return it===void 0&&(it=new ka,_[j]=it),it.getHandSpace()};function z(j){const it=M.indexOf(j.inputSource);if(it===-1)return;const yt=_[it];yt!==void 0&&(yt.update(j.inputSource,j.frame,c||r),yt.dispatchEvent({type:j.type,data:j.inputSource}))}function X(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",q);for(let j=0;j<_.length;j++){const it=M[j];it!==null&&(M[j]=null,_[j].disconnect(it))}A=null,D=null,v.reset(),t.setRenderTarget(p),d=null,f=null,u=null,i=null,x=null,ae.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",X),i.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(L),i.renderState.layers===void 0){const it={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,it),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new ri(d.framebufferWidth,d.framebufferHeight,{format:an,type:Tn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let it=null,yt=null,ot=null;m.depth&&(ot=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=m.stencil?Gi:Ui,yt=m.stencil?Hi:ai);const Rt={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:s};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(Rt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),x=new ri(f.textureWidth,f.textureHeight,{format:an,type:Tn,depthTexture:new cc(f.textureWidth,f.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await i.requestReferenceSpace(o),ae.setContext(i),ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function q(j){for(let it=0;it<j.removed.length;it++){const yt=j.removed[it],ot=M.indexOf(yt);ot>=0&&(M[ot]=null,_[ot].disconnect(yt))}for(let it=0;it<j.added.length;it++){const yt=j.added[it];let ot=M.indexOf(yt);if(ot===-1){for(let Lt=0;Lt<_.length;Lt++)if(Lt>=M.length){M.push(yt),ot=Lt;break}else if(M[Lt]===null){M[Lt]=yt,ot=Lt;break}if(ot===-1)break}const Rt=_[ot];Rt&&Rt.connect(yt)}}const G=new T,J=new T;function W(j,it,yt){G.setFromMatrixPosition(it.matrixWorld),J.setFromMatrixPosition(yt.matrixWorld);const ot=G.distanceTo(J),Rt=it.projectionMatrix.elements,Lt=yt.projectionMatrix.elements,kt=Rt[14]/(Rt[10]-1),pe=Rt[14]/(Rt[10]+1),qt=(Rt[9]+1)/Rt[5],_e=(Rt[9]-1)/Rt[5],O=(Rt[8]-1)/Rt[0],Ye=(Lt[8]+1)/Lt[0],Vt=kt*O,Wt=kt*Ye,Tt=ot/(-O+Ye),ce=Tt*-O;if(it.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(ce),j.translateZ(Tt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Rt[10]===-1)j.projectionMatrix.copy(it.projectionMatrix),j.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{const Et=kt+Tt,P=pe+Tt,b=Vt-ce,B=Wt+(ot-ce),$=qt*pe/P*Et,Z=_e*pe/P*Et;j.projectionMatrix.makePerspective(b,B,$,Z,Et,P),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function rt(j,it){it===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(it.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let it=j.near,yt=j.far;v.texture!==null&&(v.depthNear>0&&(it=v.depthNear),v.depthFar>0&&(yt=v.depthFar)),y.near=R.near=E.near=it,y.far=R.far=E.far=yt,(A!==y.near||D!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),A=y.near,D=y.far),E.layers.mask=j.layers.mask|2,R.layers.mask=j.layers.mask|4,y.layers.mask=E.layers.mask|R.layers.mask;const ot=j.parent,Rt=y.cameras;rt(y,ot);for(let Lt=0;Lt<Rt.length;Lt++)rt(Rt[Lt],ot);Rt.length===2?W(y,E,R):y.projectionMatrix.copy(E.projectionMatrix),ft(j,y,ot)};function ft(j,it,yt){yt===null?j.matrix.copy(it.matrixWorld):(j.matrix.copy(yt.matrixWorld),j.matrix.invert(),j.matrix.multiply(it.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(it.projectionMatrix),j.projectionMatrixInverse.copy(it.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Fr*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let wt=null;function Bt(j,it){if(h=it.getViewerPose(c||r),g=it,h!==null){const yt=h.views;d!==null&&(t.setRenderTargetFramebuffer(x,d.framebuffer),t.setRenderTarget(x));let ot=!1;yt.length!==y.cameras.length&&(y.cameras.length=0,ot=!0);for(let Lt=0;Lt<yt.length;Lt++){const kt=yt[Lt];let pe=null;if(d!==null)pe=d.getViewport(kt);else{const _e=u.getViewSubImage(f,kt);pe=_e.viewport,Lt===0&&(t.setRenderTargetTextures(x,_e.colorTexture,f.ignoreDepthValues?void 0:_e.depthStencilTexture),t.setRenderTarget(x))}let qt=S[Lt];qt===void 0&&(qt=new Xe,qt.layers.enable(Lt),qt.viewport=new se,S[Lt]=qt),qt.matrix.fromArray(kt.transform.matrix),qt.matrix.decompose(qt.position,qt.quaternion,qt.scale),qt.projectionMatrix.fromArray(kt.projectionMatrix),qt.projectionMatrixInverse.copy(qt.projectionMatrix).invert(),qt.viewport.set(pe.x,pe.y,pe.width,pe.height),Lt===0&&(y.matrix.copy(qt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ot===!0&&y.cameras.push(qt)}const Rt=i.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")){const Lt=u.getDepthInformation(yt[0]);Lt&&Lt.isValid&&Lt.texture&&v.init(t,Lt,i.renderState)}}for(let yt=0;yt<_.length;yt++){const ot=M[yt],Rt=_[yt];ot!==null&&Rt!==void 0&&Rt.update(ot,it,c||r)}wt&&wt(j,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),g=null}const ae=new oc;ae.setAnimationLoop(Bt),this.setAnimationLoop=function(j){wt=j},this.dispose=function(){}}}const Kn=new rn,Pm=new ee;function Lm(a,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,sc(a)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,x,_,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,x,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ze&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ze&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=t.get(p),_=x.envMap,M=x.envMapRotation;_&&(m.envMap.value=_,Kn.copy(M),Kn.x*=-1,Kn.y*=-1,Kn.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Kn.y*=-1,Kn.z*=-1),m.envMapRotation.value.setFromMatrix4(Pm.makeRotationFromEuler(Kn)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=_*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ze&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const x=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Im(a,t,e,n){let i={},s={},r=[];const o=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,_){const M=_.program;n.uniformBlockBinding(x,M)}function c(x,_){let M=i[x.id];M===void 0&&(g(x),M=h(x),i[x.id]=M,x.addEventListener("dispose",m));const L=_.program;n.updateUBOMapping(x,L);const C=t.render.frame;s[x.id]!==C&&(f(x),s[x.id]=C)}function h(x){const _=u();x.__bindingPointIndex=_;const M=a.createBuffer(),L=x.__size,C=x.usage;return a.bindBuffer(a.UNIFORM_BUFFER,M),a.bufferData(a.UNIFORM_BUFFER,L,C),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,_,M),M}function u(){for(let x=0;x<o;x++)if(r.indexOf(x)===-1)return r.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const _=i[x.id],M=x.uniforms,L=x.__cache;a.bindBuffer(a.UNIFORM_BUFFER,_);for(let C=0,E=M.length;C<E;C++){const R=Array.isArray(M[C])?M[C]:[M[C]];for(let S=0,y=R.length;S<y;S++){const A=R[S];if(d(A,C,S,L)===!0){const D=A.__offset,z=Array.isArray(A.value)?A.value:[A.value];let X=0;for(let q=0;q<z.length;q++){const G=z[q],J=v(G);typeof G=="number"||typeof G=="boolean"?(A.__data[0]=G,a.bufferSubData(a.UNIFORM_BUFFER,D+X,A.__data)):G.isMatrix3?(A.__data[0]=G.elements[0],A.__data[1]=G.elements[1],A.__data[2]=G.elements[2],A.__data[3]=0,A.__data[4]=G.elements[3],A.__data[5]=G.elements[4],A.__data[6]=G.elements[5],A.__data[7]=0,A.__data[8]=G.elements[6],A.__data[9]=G.elements[7],A.__data[10]=G.elements[8],A.__data[11]=0):(G.toArray(A.__data,X),X+=J.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,D,A.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function d(x,_,M,L){const C=x.value,E=_+"_"+M;if(L[E]===void 0)return typeof C=="number"||typeof C=="boolean"?L[E]=C:L[E]=C.clone(),!0;{const R=L[E];if(typeof C=="number"||typeof C=="boolean"){if(R!==C)return L[E]=C,!0}else if(R.equals(C)===!1)return R.copy(C),!0}return!1}function g(x){const _=x.uniforms;let M=0;const L=16;for(let E=0,R=_.length;E<R;E++){const S=Array.isArray(_[E])?_[E]:[_[E]];for(let y=0,A=S.length;y<A;y++){const D=S[y],z=Array.isArray(D.value)?D.value:[D.value];for(let X=0,q=z.length;X<q;X++){const G=z[X],J=v(G),W=M%L,rt=W%J.boundary,ft=W+rt;M+=rt,ft!==0&&L-ft<J.storage&&(M+=L-ft),D.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=M,M+=J.storage}}}const C=M%L;return C>0&&(M+=L-C),x.__size=M,x.__cache={},this}function v(x){const _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function m(x){const _=x.target;_.removeEventListener("dispose",m);const M=r.indexOf(_.__bindingPointIndex);r.splice(M,1),a.deleteBuffer(i[_.id]),delete i[_.id],delete s[_.id]}function p(){for(const x in i)a.deleteBuffer(i[x]);r=[],i={},s={}}return{bind:l,update:c,dispose:p}}class Dm{constructor(t={}){const{canvas:e=_h(),context:n=null,depth:i=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=r;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const x=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Me,this.toneMapping=Hn,this.toneMappingExposure=1;const M=this;let L=!1,C=0,E=0,R=null,S=-1,y=null;const A=new se,D=new se;let z=null;const X=new It(0);let q=0,G=e.width,J=e.height,W=1,rt=null,ft=null;const wt=new se(0,0,G,J),Bt=new se(0,0,G,J);let ae=!1;const j=new jr;let it=!1,yt=!1;const ot=new ee,Rt=new ee,Lt=new T,kt=new se,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qt=!1;function _e(){return R===null?W:1}let O=n;function Ye(w,U){return e.getContext(w,U)}try{const w={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${kr}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",dt,!1),e.addEventListener("webglcontextcreationerror",ht,!1),O===null){const U="webgl2";if(O=Ye(U,w),O===null)throw Ye(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Vt,Wt,Tt,ce,Et,P,b,B,$,Z,Y,Mt,lt,pt,Yt,et,mt,At,Ct,gt,Xt,Ft,oe,I;function at(){Vt=new zf(O),Vt.init(),Ft=new bm(O,Vt),Wt=new If(O,Vt,t,Ft),Tt=new ym(O,Vt),Wt.reverseDepthBuffer&&f&&Tt.buffers.depth.setReversed(!0),ce=new Hf(O),Et=new am,P=new Sm(O,Vt,Tt,Et,Wt,Ft,ce),b=new Uf(M),B=new Of(M),$=new Yh(O),oe=new Pf(O,$),Z=new Bf(O,$,ce,oe),Y=new Vf(O,Z,$,ce),Ct=new Gf(O,Wt,P),et=new Df(Et),Mt=new sm(M,b,B,Vt,Wt,oe,et),lt=new Lm(M,Et),pt=new om,Yt=new fm(Vt),At=new Cf(M,b,B,Tt,Y,d,l),mt=new vm(M,Y,Wt),I=new Im(O,ce,Wt,Tt),gt=new Lf(O,Vt,ce),Xt=new kf(O,Vt,ce),ce.programs=Mt.programs,M.capabilities=Wt,M.extensions=Vt,M.properties=Et,M.renderLists=pt,M.shadowMap=mt,M.state=Tt,M.info=ce}at();const V=new Cm(M,O);this.xr=V,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const w=Vt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Vt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(w){w!==void 0&&(W=w,this.setSize(G,J,!1))},this.getSize=function(w){return w.set(G,J)},this.setSize=function(w,U,k=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=w,J=U,e.width=Math.floor(w*W),e.height=Math.floor(U*W),k===!0&&(e.style.width=w+"px",e.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(G*W,J*W).floor()},this.setDrawingBufferSize=function(w,U,k){G=w,J=U,W=k,e.width=Math.floor(w*k),e.height=Math.floor(U*k),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(A)},this.getViewport=function(w){return w.copy(wt)},this.setViewport=function(w,U,k,H){w.isVector4?wt.set(w.x,w.y,w.z,w.w):wt.set(w,U,k,H),Tt.viewport(A.copy(wt).multiplyScalar(W).round())},this.getScissor=function(w){return w.copy(Bt)},this.setScissor=function(w,U,k,H){w.isVector4?Bt.set(w.x,w.y,w.z,w.w):Bt.set(w,U,k,H),Tt.scissor(D.copy(Bt).multiplyScalar(W).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(w){Tt.setScissorTest(ae=w)},this.setOpaqueSort=function(w){rt=w},this.setTransparentSort=function(w){ft=w},this.getClearColor=function(w){return w.copy(At.getClearColor())},this.setClearColor=function(){At.setClearColor.apply(At,arguments)},this.getClearAlpha=function(){return At.getClearAlpha()},this.setClearAlpha=function(){At.setClearAlpha.apply(At,arguments)},this.clear=function(w=!0,U=!0,k=!0){let H=0;if(w){let N=!1;if(R!==null){const nt=R.texture.format;N=nt===Yr||nt===qr||nt===Xr}if(N){const nt=R.texture.type,ut=nt===Tn||nt===ai||nt===fs||nt===Hi||nt===Gr||nt===Vr,xt=At.getClearColor(),vt=At.getClearAlpha(),Pt=xt.r,Ut=xt.g,_t=xt.b;ut?(g[0]=Pt,g[1]=Ut,g[2]=_t,g[3]=vt,O.clearBufferuiv(O.COLOR,0,g)):(v[0]=Pt,v[1]=Ut,v[2]=_t,v[3]=vt,O.clearBufferiv(O.COLOR,0,v))}else H|=O.COLOR_BUFFER_BIT}U&&(H|=O.DEPTH_BUFFER_BIT),k&&(H|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",dt,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),pt.dispose(),Yt.dispose(),Et.dispose(),b.dispose(),B.dispose(),Y.dispose(),oe.dispose(),I.dispose(),Mt.dispose(),V.dispose(),V.removeEventListener("sessionstart",eo),V.removeEventListener("sessionend",no),Wn.stop()};function K(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function dt(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const w=ce.autoReset,U=mt.enabled,k=mt.autoUpdate,H=mt.needsUpdate,N=mt.type;at(),ce.autoReset=w,mt.enabled=U,mt.autoUpdate=k,mt.needsUpdate=H,mt.type=N}function ht(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Dt(w){const U=w.target;U.removeEventListener("dispose",Dt),xe(U)}function xe(w){Pe(w),Et.remove(w)}function Pe(w){const U=Et.get(w).programs;U!==void 0&&(U.forEach(function(k){Mt.releaseProgram(k)}),w.isShaderMaterial&&Mt.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,k,H,N,nt){U===null&&(U=pe);const ut=N.isMesh&&N.matrixWorld.determinant()<0,xt=Pc(w,U,k,H,N);Tt.setMaterial(H,ut);let vt=k.index,Pt=1;if(H.wireframe===!0){if(vt=Z.getWireframeAttribute(k),vt===void 0)return;Pt=2}const Ut=k.drawRange,_t=k.attributes.position;let $t=Ut.start*Pt,le=(Ut.start+Ut.count)*Pt;nt!==null&&($t=Math.max($t,nt.start*Pt),le=Math.min(le,(nt.start+nt.count)*Pt)),vt!==null?($t=Math.max($t,0),le=Math.min(le,vt.count)):_t!=null&&($t=Math.max($t,0),le=Math.min(le,_t.count));const he=le-$t;if(he<0||he===1/0)return;oe.setup(N,H,xt,k,vt);let He,Zt=gt;if(vt!==null&&(He=$.get(vt),Zt=Xt,Zt.setIndex(He)),N.isMesh)H.wireframe===!0?(Tt.setLineWidth(H.wireframeLinewidth*_e()),Zt.setMode(O.LINES)):Zt.setMode(O.TRIANGLES);else if(N.isLine){let St=H.linewidth;St===void 0&&(St=1),Tt.setLineWidth(St*_e()),N.isLineSegments?Zt.setMode(O.LINES):N.isLineLoop?Zt.setMode(O.LINE_LOOP):Zt.setMode(O.LINE_STRIP)}else N.isPoints?Zt.setMode(O.POINTS):N.isSprite&&Zt.setMode(O.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Zt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Vt.get("WEBGL_multi_draw"))Zt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const St=N._multiDrawStarts,gn=N._multiDrawCounts,Qt=N._multiDrawCount,Ze=vt?$.get(vt).bytesPerElement:1,ci=Et.get(H).currentProgram.getUniforms();for(let Ge=0;Ge<Qt;Ge++)ci.setValue(O,"_gl_DrawID",Ge),Zt.render(St[Ge]/Ze,gn[Ge])}else if(N.isInstancedMesh)Zt.renderInstances($t,he,N.count);else if(k.isInstancedBufferGeometry){const St=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,gn=Math.min(k.instanceCount,St);Zt.renderInstances($t,he,gn)}else Zt.render($t,he)};function te(w,U,k){w.transparent===!0&&w.side===sn&&w.forceSinglePass===!1?(w.side=ze,w.needsUpdate=!0,xs(w,U,k),w.side=Vn,w.needsUpdate=!0,xs(w,U,k),w.side=sn):xs(w,U,k)}this.compile=function(w,U,k=null){k===null&&(k=w),p=Yt.get(k),p.init(U),_.push(p),k.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),w!==k&&w.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const H=new Set;return w.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const nt=N.material;if(nt)if(Array.isArray(nt))for(let ut=0;ut<nt.length;ut++){const xt=nt[ut];te(xt,k,N),H.add(xt)}else te(nt,k,N),H.add(nt)}),_.pop(),p=null,H},this.compileAsync=function(w,U,k=null){const H=this.compile(w,U,k);return new Promise(N=>{function nt(){if(H.forEach(function(ut){Et.get(ut).currentProgram.isReady()&&H.delete(ut)}),H.size===0){N(w);return}setTimeout(nt,10)}Vt.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let Je=null;function mn(w){Je&&Je(w)}function eo(){Wn.stop()}function no(){Wn.start()}const Wn=new oc;Wn.setAnimationLoop(mn),typeof self<"u"&&Wn.setContext(self),this.setAnimationLoop=function(w){Je=w,V.setAnimationLoop(w),w===null?Wn.stop():Wn.start()},V.addEventListener("sessionstart",eo),V.addEventListener("sessionend",no),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(U),U=V.getCamera()),w.isScene===!0&&w.onBeforeRender(M,w,U,R),p=Yt.get(w,_.length),p.init(U),_.push(p),Rt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),j.setFromProjectionMatrix(Rt),yt=this.localClippingEnabled,it=et.init(this.clippingPlanes,yt),m=pt.get(w,x.length),m.init(),x.push(m),V.enabled===!0&&V.isPresenting===!0){const nt=M.xr.getDepthSensingMesh();nt!==null&&ha(nt,U,-1/0,M.sortObjects)}ha(w,U,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(rt,ft),qt=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,qt&&At.addToRenderList(m,w),this.info.render.frame++,it===!0&&et.beginShadows();const k=p.state.shadowsArray;mt.render(k,w,U),it===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,N=m.transmissive;if(p.setupLights(),U.isArrayCamera){const nt=U.cameras;if(N.length>0)for(let ut=0,xt=nt.length;ut<xt;ut++){const vt=nt[ut];so(H,N,w,vt)}qt&&At.render(w);for(let ut=0,xt=nt.length;ut<xt;ut++){const vt=nt[ut];io(m,w,vt,vt.viewport)}}else N.length>0&&so(H,N,w,U),qt&&At.render(w),io(m,w,U);R!==null&&(P.updateMultisampleRenderTarget(R),P.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(M,w,U),oe.resetDefaultState(),S=-1,y=null,_.pop(),_.length>0?(p=_[_.length-1],it===!0&&et.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function ha(w,U,k,H){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)k=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||j.intersectsSprite(w)){H&&kt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Rt);const ut=Y.update(w),xt=w.material;xt.visible&&m.push(w,ut,xt,k,kt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||j.intersectsObject(w))){const ut=Y.update(w),xt=w.material;if(H&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),kt.copy(w.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),kt.copy(ut.boundingSphere.center)),kt.applyMatrix4(w.matrixWorld).applyMatrix4(Rt)),Array.isArray(xt)){const vt=ut.groups;for(let Pt=0,Ut=vt.length;Pt<Ut;Pt++){const _t=vt[Pt],$t=xt[_t.materialIndex];$t&&$t.visible&&m.push(w,ut,$t,k,kt.z,_t)}}else xt.visible&&m.push(w,ut,xt,k,kt.z,null)}}const nt=w.children;for(let ut=0,xt=nt.length;ut<xt;ut++)ha(nt[ut],U,k,H)}function io(w,U,k,H){const N=w.opaque,nt=w.transmissive,ut=w.transparent;p.setupLightsView(k),it===!0&&et.setGlobalState(M.clippingPlanes,k),H&&Tt.viewport(A.copy(H)),N.length>0&&gs(N,U,k),nt.length>0&&gs(nt,U,k),ut.length>0&&gs(ut,U,k),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function so(w,U,k,H){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new ri(1,1,{generateMipmaps:!0,type:Vt.has("EXT_color_buffer_half_float")||Vt.has("EXT_color_buffer_float")?ps:Tn,minFilter:ii,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace}));const nt=p.state.transmissionRenderTarget[H.id],ut=H.viewport||A;nt.setSize(ut.z,ut.w);const xt=M.getRenderTarget();M.setRenderTarget(nt),M.getClearColor(X),q=M.getClearAlpha(),q<1&&M.setClearColor(16777215,.5),M.clear(),qt&&At.render(k);const vt=M.toneMapping;M.toneMapping=Hn;const Pt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),it===!0&&et.setGlobalState(M.clippingPlanes,H),gs(w,k,H),P.updateMultisampleRenderTarget(nt),P.updateRenderTargetMipmap(nt),Vt.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let _t=0,$t=U.length;_t<$t;_t++){const le=U[_t],he=le.object,He=le.geometry,Zt=le.material,St=le.group;if(Zt.side===sn&&he.layers.test(H.layers)){const gn=Zt.side;Zt.side=ze,Zt.needsUpdate=!0,ao(he,k,H,He,Zt,St),Zt.side=gn,Zt.needsUpdate=!0,Ut=!0}}Ut===!0&&(P.updateMultisampleRenderTarget(nt),P.updateRenderTargetMipmap(nt))}M.setRenderTarget(xt),M.setClearColor(X,q),Pt!==void 0&&(H.viewport=Pt),M.toneMapping=vt}function gs(w,U,k){const H=U.isScene===!0?U.overrideMaterial:null;for(let N=0,nt=w.length;N<nt;N++){const ut=w[N],xt=ut.object,vt=ut.geometry,Pt=H===null?ut.material:H,Ut=ut.group;xt.layers.test(k.layers)&&ao(xt,U,k,vt,Pt,Ut)}}function ao(w,U,k,H,N,nt){w.onBeforeRender(M,U,k,H,N,nt),w.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),N.onBeforeRender(M,U,k,H,w,nt),N.transparent===!0&&N.side===sn&&N.forceSinglePass===!1?(N.side=ze,N.needsUpdate=!0,M.renderBufferDirect(k,U,H,N,w,nt),N.side=Vn,N.needsUpdate=!0,M.renderBufferDirect(k,U,H,N,w,nt),N.side=sn):M.renderBufferDirect(k,U,H,N,w,nt),w.onAfterRender(M,U,k,H,N,nt)}function xs(w,U,k){U.isScene!==!0&&(U=pe);const H=Et.get(w),N=p.state.lights,nt=p.state.shadowsArray,ut=N.state.version,xt=Mt.getParameters(w,N.state,nt,U,k),vt=Mt.getProgramCacheKey(xt);let Pt=H.programs;H.environment=w.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(w.isMeshStandardMaterial?B:b).get(w.envMap||H.environment),H.envMapRotation=H.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,Pt===void 0&&(w.addEventListener("dispose",Dt),Pt=new Map,H.programs=Pt);let Ut=Pt.get(vt);if(Ut!==void 0){if(H.currentProgram===Ut&&H.lightsStateVersion===ut)return oo(w,xt),Ut}else xt.uniforms=Mt.getUniforms(w),w.onBeforeCompile(xt,M),Ut=Mt.acquireProgram(xt,vt),Pt.set(vt,Ut),H.uniforms=xt.uniforms;const _t=H.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(_t.clippingPlanes=et.uniform),oo(w,xt),H.needsLights=Ic(w),H.lightsStateVersion=ut,H.needsLights&&(_t.ambientLightColor.value=N.state.ambient,_t.lightProbe.value=N.state.probe,_t.directionalLights.value=N.state.directional,_t.directionalLightShadows.value=N.state.directionalShadow,_t.spotLights.value=N.state.spot,_t.spotLightShadows.value=N.state.spotShadow,_t.rectAreaLights.value=N.state.rectArea,_t.ltc_1.value=N.state.rectAreaLTC1,_t.ltc_2.value=N.state.rectAreaLTC2,_t.pointLights.value=N.state.point,_t.pointLightShadows.value=N.state.pointShadow,_t.hemisphereLights.value=N.state.hemi,_t.directionalShadowMap.value=N.state.directionalShadowMap,_t.directionalShadowMatrix.value=N.state.directionalShadowMatrix,_t.spotShadowMap.value=N.state.spotShadowMap,_t.spotLightMatrix.value=N.state.spotLightMatrix,_t.spotLightMap.value=N.state.spotLightMap,_t.pointShadowMap.value=N.state.pointShadowMap,_t.pointShadowMatrix.value=N.state.pointShadowMatrix),H.currentProgram=Ut,H.uniformsList=null,Ut}function ro(w){if(w.uniformsList===null){const U=w.currentProgram.getUniforms();w.uniformsList=Zs.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function oo(w,U){const k=Et.get(w);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function Pc(w,U,k,H,N){U.isScene!==!0&&(U=pe),P.resetTextureUnits();const nt=U.fog,ut=H.isMeshStandardMaterial?U.environment:null,xt=R===null?M.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Xi,vt=(H.isMeshStandardMaterial?B:b).get(H.envMap||ut),Pt=H.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ut=!!k.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),_t=!!k.morphAttributes.position,$t=!!k.morphAttributes.normal,le=!!k.morphAttributes.color;let he=Hn;H.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(he=M.toneMapping);const He=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Zt=He!==void 0?He.length:0,St=Et.get(H),gn=p.state.lights;if(it===!0&&(yt===!0||w!==y)){const je=w===y&&H.id===S;et.setState(H,w,je)}let Qt=!1;H.version===St.__version?(St.needsLights&&St.lightsStateVersion!==gn.state.version||St.outputColorSpace!==xt||N.isBatchedMesh&&St.batching===!1||!N.isBatchedMesh&&St.batching===!0||N.isBatchedMesh&&St.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&St.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&St.instancing===!1||!N.isInstancedMesh&&St.instancing===!0||N.isSkinnedMesh&&St.skinning===!1||!N.isSkinnedMesh&&St.skinning===!0||N.isInstancedMesh&&St.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&St.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&St.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&St.instancingMorph===!1&&N.morphTexture!==null||St.envMap!==vt||H.fog===!0&&St.fog!==nt||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==et.numPlanes||St.numIntersection!==et.numIntersection)||St.vertexAlphas!==Pt||St.vertexTangents!==Ut||St.morphTargets!==_t||St.morphNormals!==$t||St.morphColors!==le||St.toneMapping!==he||St.morphTargetsCount!==Zt)&&(Qt=!0):(Qt=!0,St.__version=H.version);let Ze=St.currentProgram;Qt===!0&&(Ze=xs(H,U,N));let ci=!1,Ge=!1,Ki=!1;const ue=Ze.getUniforms(),on=St.uniforms;if(Tt.useProgram(Ze.program)&&(ci=!0,Ge=!0,Ki=!0),H.id!==S&&(S=H.id,Ge=!0),ci||y!==w){Tt.buffers.depth.getReversed()?(ot.copy(w.projectionMatrix),Mh(ot),Sh(ot),ue.setValue(O,"projectionMatrix",ot)):ue.setValue(O,"projectionMatrix",w.projectionMatrix),ue.setValue(O,"viewMatrix",w.matrixWorldInverse);const Rn=ue.map.cameraPosition;Rn!==void 0&&Rn.setValue(O,Lt.setFromMatrixPosition(w.matrixWorld)),Wt.logarithmicDepthBuffer&&ue.setValue(O,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ue.setValue(O,"isOrthographic",w.isOrthographicCamera===!0),y!==w&&(y=w,Ge=!0,Ki=!0)}if(N.isSkinnedMesh){ue.setOptional(O,N,"bindMatrix"),ue.setOptional(O,N,"bindMatrixInverse");const je=N.skeleton;je&&(je.boneTexture===null&&je.computeBoneTexture(),ue.setValue(O,"boneTexture",je.boneTexture,P))}N.isBatchedMesh&&(ue.setOptional(O,N,"batchingTexture"),ue.setValue(O,"batchingTexture",N._matricesTexture,P),ue.setOptional(O,N,"batchingIdTexture"),ue.setValue(O,"batchingIdTexture",N._indirectTexture,P),ue.setOptional(O,N,"batchingColorTexture"),N._colorsTexture!==null&&ue.setValue(O,"batchingColorTexture",N._colorsTexture,P));const Ji=k.morphAttributes;if((Ji.position!==void 0||Ji.normal!==void 0||Ji.color!==void 0)&&Ct.update(N,k,Ze),(Ge||St.receiveShadow!==N.receiveShadow)&&(St.receiveShadow=N.receiveShadow,ue.setValue(O,"receiveShadow",N.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(on.envMap.value=vt,on.flipEnvMap.value=vt.isCubeTexture&&vt.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&U.environment!==null&&(on.envMapIntensity.value=U.environmentIntensity),Ge&&(ue.setValue(O,"toneMappingExposure",M.toneMappingExposure),St.needsLights&&Lc(on,Ki),nt&&H.fog===!0&&lt.refreshFogUniforms(on,nt),lt.refreshMaterialUniforms(on,H,W,J,p.state.transmissionRenderTarget[w.id]),Zs.upload(O,ro(St),on,P)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Zs.upload(O,ro(St),on,P),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ue.setValue(O,"center",N.center),ue.setValue(O,"modelViewMatrix",N.modelViewMatrix),ue.setValue(O,"normalMatrix",N.normalMatrix),ue.setValue(O,"modelMatrix",N.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const je=H.uniformsGroups;for(let Rn=0,Cn=je.length;Rn<Cn;Rn++){const lo=je[Rn];I.update(lo,Ze),I.bind(lo,Ze)}}return Ze}function Lc(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function Ic(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,U,k){Et.get(w.texture).__webglTexture=U,Et.get(w.depthTexture).__webglTexture=k;const H=Et.get(w);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=k===void 0,H.__autoAllocateDepthBuffer||Vt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,U){const k=Et.get(w);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,k=0){R=w,C=U,E=k;let H=!0,N=null,nt=!1,ut=!1;if(w){const vt=Et.get(w);if(vt.__useDefaultFramebuffer!==void 0)Tt.bindFramebuffer(O.FRAMEBUFFER,null),H=!1;else if(vt.__webglFramebuffer===void 0)P.setupRenderTarget(w);else if(vt.__hasExternalTextures)P.rebindTextures(w,Et.get(w.texture).__webglTexture,Et.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const _t=w.depthTexture;if(vt.__boundDepthTexture!==_t){if(_t!==null&&Et.has(_t)&&(w.width!==_t.image.width||w.height!==_t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(w)}}const Pt=w.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(ut=!0);const Ut=Et.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ut[U])?N=Ut[U][k]:N=Ut[U],nt=!0):w.samples>0&&P.useMultisampledRTT(w)===!1?N=Et.get(w).__webglMultisampledFramebuffer:Array.isArray(Ut)?N=Ut[k]:N=Ut,A.copy(w.viewport),D.copy(w.scissor),z=w.scissorTest}else A.copy(wt).multiplyScalar(W).floor(),D.copy(Bt).multiplyScalar(W).floor(),z=ae;if(Tt.bindFramebuffer(O.FRAMEBUFFER,N)&&H&&Tt.drawBuffers(w,N),Tt.viewport(A),Tt.scissor(D),Tt.setScissorTest(z),nt){const vt=Et.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+U,vt.__webglTexture,k)}else if(ut){const vt=Et.get(w.texture),Pt=U||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,vt.__webglTexture,k||0,Pt)}S=-1},this.readRenderTargetPixels=function(w,U,k,H,N,nt,ut){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=Et.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ut!==void 0&&(xt=xt[ut]),xt){Tt.bindFramebuffer(O.FRAMEBUFFER,xt);try{const vt=w.texture,Pt=vt.format,Ut=vt.type;if(!Wt.textureFormatReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Wt.textureTypeReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-H&&k>=0&&k<=w.height-N&&O.readPixels(U,k,H,N,Ft.convert(Pt),Ft.convert(Ut),nt)}finally{const vt=R!==null?Et.get(R).__webglFramebuffer:null;Tt.bindFramebuffer(O.FRAMEBUFFER,vt)}}},this.readRenderTargetPixelsAsync=async function(w,U,k,H,N,nt,ut){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=Et.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ut!==void 0&&(xt=xt[ut]),xt){const vt=w.texture,Pt=vt.format,Ut=vt.type;if(!Wt.textureFormatReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Wt.textureTypeReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=w.width-H&&k>=0&&k<=w.height-N){Tt.bindFramebuffer(O.FRAMEBUFFER,xt);const _t=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,_t),O.bufferData(O.PIXEL_PACK_BUFFER,nt.byteLength,O.STREAM_READ),O.readPixels(U,k,H,N,Ft.convert(Pt),Ft.convert(Ut),0);const $t=R!==null?Et.get(R).__webglFramebuffer:null;Tt.bindFramebuffer(O.FRAMEBUFFER,$t);const le=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await yh(O,le,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,_t),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,nt),O.deleteBuffer(_t),O.deleteSync(le),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,U=null,k=0){w.isTexture!==!0&&(cs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,w=arguments[1]);const H=Math.pow(2,-k),N=Math.floor(w.image.width*H),nt=Math.floor(w.image.height*H),ut=U!==null?U.x:0,xt=U!==null?U.y:0;P.setTexture2D(w,0),O.copyTexSubImage2D(O.TEXTURE_2D,k,0,0,ut,xt,N,nt),Tt.unbindTexture()},this.copyTextureToTexture=function(w,U,k=null,H=null,N=0){w.isTexture!==!0&&(cs("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,w=arguments[1],U=arguments[2],N=arguments[3]||0,k=null);let nt,ut,xt,vt,Pt,Ut,_t,$t,le;const he=w.isCompressedTexture?w.mipmaps[N]:w.image;k!==null?(nt=k.max.x-k.min.x,ut=k.max.y-k.min.y,xt=k.isBox3?k.max.z-k.min.z:1,vt=k.min.x,Pt=k.min.y,Ut=k.isBox3?k.min.z:0):(nt=he.width,ut=he.height,xt=he.depth||1,vt=0,Pt=0,Ut=0),H!==null?(_t=H.x,$t=H.y,le=H.z):(_t=0,$t=0,le=0);const He=Ft.convert(U.format),Zt=Ft.convert(U.type);let St;U.isData3DTexture?(P.setTexture3D(U,0),St=O.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(P.setTexture2DArray(U,0),St=O.TEXTURE_2D_ARRAY):(P.setTexture2D(U,0),St=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,U.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,U.unpackAlignment);const gn=O.getParameter(O.UNPACK_ROW_LENGTH),Qt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Ze=O.getParameter(O.UNPACK_SKIP_PIXELS),ci=O.getParameter(O.UNPACK_SKIP_ROWS),Ge=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,he.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,he.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,vt),O.pixelStorei(O.UNPACK_SKIP_ROWS,Pt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ut);const Ki=w.isDataArrayTexture||w.isData3DTexture,ue=U.isDataArrayTexture||U.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const on=Et.get(w),Ji=Et.get(U),je=Et.get(on.__renderTarget),Rn=Et.get(Ji.__renderTarget);Tt.bindFramebuffer(O.READ_FRAMEBUFFER,je.__webglFramebuffer),Tt.bindFramebuffer(O.DRAW_FRAMEBUFFER,Rn.__webglFramebuffer);for(let Cn=0;Cn<xt;Cn++)Ki&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Et.get(w).__webglTexture,N,Ut+Cn),w.isDepthTexture?(ue&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Et.get(U).__webglTexture,N,le+Cn),O.blitFramebuffer(vt,Pt,nt,ut,_t,$t,nt,ut,O.DEPTH_BUFFER_BIT,O.NEAREST)):ue?O.copyTexSubImage3D(St,N,_t,$t,le+Cn,vt,Pt,nt,ut):O.copyTexSubImage2D(St,N,_t,$t,le+Cn,vt,Pt,nt,ut);Tt.bindFramebuffer(O.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else ue?w.isDataTexture||w.isData3DTexture?O.texSubImage3D(St,N,_t,$t,le,nt,ut,xt,He,Zt,he.data):U.isCompressedArrayTexture?O.compressedTexSubImage3D(St,N,_t,$t,le,nt,ut,xt,He,he.data):O.texSubImage3D(St,N,_t,$t,le,nt,ut,xt,He,Zt,he):w.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,N,_t,$t,nt,ut,He,Zt,he.data):w.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,N,_t,$t,he.width,he.height,He,he.data):O.texSubImage2D(O.TEXTURE_2D,N,_t,$t,nt,ut,He,Zt,he);O.pixelStorei(O.UNPACK_ROW_LENGTH,gn),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Qt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ze),O.pixelStorei(O.UNPACK_SKIP_ROWS,ci),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ge),N===0&&U.generateMipmaps&&O.generateMipmap(St),Tt.unbindTexture()},this.copyTextureToTexture3D=function(w,U,k=null,H=null,N=0){return w.isTexture!==!0&&(cs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,H=arguments[1]||null,w=arguments[2],U=arguments[3],N=arguments[4]||0),cs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,U,k,H,N)},this.initRenderTarget=function(w){Et.get(w).__webglFramebuffer===void 0&&P.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?P.setTextureCube(w,0):w.isData3DTexture?P.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?P.setTexture2DArray(w,0):P.setTexture2D(w,0),Tt.unbindTexture()},this.resetState=function(){C=0,E=0,R=null,Tt.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=jt._getUnpackColorSpace()}}class la{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new It(t),this.near=e,this.far=n}clone(){return new la(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ol extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rn,this.environmentIntensity=1,this.environmentRotation=new rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Um{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Nr,this.updateRanges=[],this.version=0,this.uuid=Gn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ne=new T;class ia{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=cn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ie(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=cn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=cn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=cn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=cn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),i=ie(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),i=ie(i,this.array),s=ie(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new Be(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ia(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Qs extends ji{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new It(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let wi;const ns=new T,Ei=new T,Ti=new T,Ai=new ct,is=new ct,pc=new ee,Bs=new T,ss=new T,ks=new T,ll=new ct,Ha=new ct,cl=new ct;class Ga extends Ee{constructor(t=new Qs){if(super(),this.isSprite=!0,this.type="Sprite",wi===void 0){wi=new ke;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Um(e,5);wi.setIndex([0,1,2,0,2,3]),wi.setAttribute("position",new ia(n,3,0,!1)),wi.setAttribute("uv",new ia(n,2,3,!1))}this.geometry=wi,this.material=t,this.center=new ct(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ei.setFromMatrixScale(this.matrixWorld),pc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ti.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ei.multiplyScalar(-Ti.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const r=this.center;Hs(Bs.set(-.5,-.5,0),Ti,r,Ei,i,s),Hs(ss.set(.5,-.5,0),Ti,r,Ei,i,s),Hs(ks.set(.5,.5,0),Ti,r,Ei,i,s),ll.set(0,0),Ha.set(1,0),cl.set(1,1);let o=t.ray.intersectTriangle(Bs,ss,ks,!1,ns);if(o===null&&(Hs(ss.set(-.5,.5,0),Ti,r,Ei,i,s),Ha.set(0,1),o=t.ray.intersectTriangle(Bs,ks,ss,!1,ns),o===null))return;const l=t.ray.origin.distanceTo(ns);l<t.near||l>t.far||e.push({distance:l,point:ns.clone(),uv:Ke.getInterpolation(ns,Bs,ss,ks,ll,Ha,cl,new ct),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Hs(a,t,e,n,i,s){Ai.subVectors(a,e).addScalar(.5).multiply(n),i!==void 0?(is.x=s*Ai.x-i*Ai.y,is.y=i*Ai.x+s*Ai.y):is.copy(Ai),a.copy(t),a.x+=is.x,a.y+=is.y,a.applyMatrix4(pc)}class Nm extends Ue{constructor(t=null,e=1,n=1,i,s,r,o,l,c=qe,h=qe,u,f){super(null,r,o,l,c,h,i,s,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hl extends Be{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ri=new ee,ul=new ee,Gs=[],dl=new li,Fm=new ee,as=new Jt,rs=new ms;class fl extends Jt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new hl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Fm)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new li),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ri),dl.copy(t.boundingBox).applyMatrix4(Ri),this.boundingBox.union(dl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ms),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ri),rs.copy(t.boundingSphere).applyMatrix4(Ri),this.boundingSphere.union(rs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,r=t*s+1;for(let o=0;o<n.length;o++)n[o]=i[r+o]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(as.geometry=this.geometry,as.material=this.material,as.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),rs.copy(this.boundingSphere),rs.applyMatrix4(n),t.ray.intersectsSphere(rs)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Ri),ul.multiplyMatrices(n,Ri),as.matrixWorld=ul,as.raycast(t,Gs);for(let r=0,o=Gs.length;r<o;r++){const l=Gs[r];l.instanceId=s,l.object=this,e.push(l)}Gs.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new hl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Nm(new Float32Array(i*this.count),i,this.count,Wr,un));const s=this.morphTexture.source.data.data;let r=0;for(let c=0;c<n.length;c++)r+=n[c];const o=this.geometry.morphTargetsRelative?1:1-r,l=i*t;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class oi extends Ue{constructor(t,e,n,i,s,r,o,l,c){super(t,e,n,i,s,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class pn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let r;e?r=e:r=t*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-r,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===r)return i/(s-1);const h=n[i],f=n[i+1]-h,d=(r-h)/f;return(i+d)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const r=this.getPoint(i),o=this.getPoint(s),l=e||(r.isVector2?new ct:new T);return l.copy(o).sub(r).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new T,i=[],s=[],r=[],o=new T,l=new ee;for(let d=0;d<=t;d++){const g=d/t;i[d]=this.getTangentAt(g,new T)}s[0]=new T,r[0]=new T;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),r[0].crossVectors(i[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),r[d]=r[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Re(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(o,g))}r[d].crossVectors(i[d],s[d])}if(e===!0){let d=Math.acos(Re(s[0].dot(s[t]),-1,1));d/=t,i[0].dot(o.crossVectors(s[0],s[t]))>0&&(d=-d);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],d*g)),r[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Kr extends pn{constructor(t=0,e=0,n=1,i=1,s=0,r=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new ct){const n=e,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const r=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(r?s=0:s=i),this.aClockwise===!0&&!r&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Om extends Kr{constructor(t,e,n,i,s,r){super(t,e,n,n,i,s,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Jr(){let a=0,t=0,e=0,n=0;function i(s,r,o,l){a=s,t=o,e=-3*s+3*r-2*o-l,n=2*s-2*r+o+l}return{initCatmullRom:function(s,r,o,l,c){i(r,o,c*(o-s),c*(l-r))},initNonuniformCatmullRom:function(s,r,o,l,c,h,u){let f=(r-s)/c-(o-s)/(c+h)+(o-r)/h,d=(o-r)/h-(l-r)/(h+u)+(l-o)/u;f*=h,d*=h,i(r,o,f,d)},calc:function(s){const r=s*s,o=r*s;return a+t*s+e*r+n*o}}}const Vs=new T,Va=new Jr,Wa=new Jr,Xa=new Jr;class zm extends pn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new T){const n=e,i=this.points,s=i.length,r=(s-(this.closed?0:1))*t;let o=Math.floor(r),l=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%s]:(Vs.subVectors(i[0],i[1]).add(i[0]),c=Vs);const u=i[o%s],f=i[(o+1)%s];if(this.closed||o+2<s?h=i[(o+2)%s]:(Vs.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Vs),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),d),v=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Va.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,v,m),Wa.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,v,m),Xa.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(Va.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Wa.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Xa.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Va.calc(l),Wa.calc(l),Xa.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new T().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function pl(a,t,e,n,i){const s=(n-t)*.5,r=(i-e)*.5,o=a*a,l=a*o;return(2*e-2*n+s+r)*l+(-3*e+3*n-2*s-r)*o+s*a+e}function Bm(a,t){const e=1-a;return e*e*t}function km(a,t){return 2*(1-a)*a*t}function Hm(a,t){return a*a*t}function us(a,t,e,n){return Bm(a,t)+km(a,e)+Hm(a,n)}function Gm(a,t){const e=1-a;return e*e*e*t}function Vm(a,t){const e=1-a;return 3*e*e*a*t}function Wm(a,t){return 3*(1-a)*a*a*t}function Xm(a,t){return a*a*a*t}function ds(a,t,e,n,i){return Gm(a,t)+Vm(a,e)+Wm(a,n)+Xm(a,i)}class mc extends pn{constructor(t=new ct,e=new ct,n=new ct,i=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new ct){const n=e,i=this.v0,s=this.v1,r=this.v2,o=this.v3;return n.set(ds(t,i.x,s.x,r.x,o.x),ds(t,i.y,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class qm extends pn{constructor(t=new T,e=new T,n=new T,i=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new T){const n=e,i=this.v0,s=this.v1,r=this.v2,o=this.v3;return n.set(ds(t,i.x,s.x,r.x,o.x),ds(t,i.y,s.y,r.y,o.y),ds(t,i.z,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class gc extends pn{constructor(t=new ct,e=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ct){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ym extends pn{constructor(t=new T,e=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new T){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new T){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class xc extends pn{constructor(t=new ct,e=new ct,n=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ct){const n=e,i=this.v0,s=this.v1,r=this.v2;return n.set(us(t,i.x,s.x,r.x),us(t,i.y,s.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class jm extends pn{constructor(t=new T,e=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new T){const n=e,i=this.v0,s=this.v1,r=this.v2;return n.set(us(t,i.x,s.x,r.x),us(t,i.y,s.y,r.y),us(t,i.z,s.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class vc extends pn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ct){const n=e,i=this.points,s=(i.length-1)*t,r=Math.floor(s),o=s-r,l=i[r===0?r:r-1],c=i[r],h=i[r>i.length-2?i.length-1:r+1],u=i[r>i.length-3?i.length-1:r+2];return n.set(pl(o,l.x,c.x,h.x,u.x),pl(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new ct().fromArray(i))}return this}}var ml=Object.freeze({__proto__:null,ArcCurve:Om,CatmullRomCurve3:zm,CubicBezierCurve:mc,CubicBezierCurve3:qm,EllipseCurve:Kr,LineCurve:gc,LineCurve3:Ym,QuadraticBezierCurve:xc,QuadraticBezierCurve3:jm,SplineCurve:vc});class $m extends pn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ml[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const r=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-r/l;return o.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const r=s[i],o=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new ml[i.type]().fromJSON(i))}return this}}class Km extends $m{constructor(t){super(),this.type="Path",this.currentPoint=new ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new gc(this.currentPoint.clone(),new ct(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const s=new xc(this.currentPoint.clone(),new ct(t,e),new ct(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,r){const o=new mc(this.currentPoint.clone(),new ct(t,e),new ct(n,i),new ct(s,r));return this.curves.push(o),this.currentPoint.set(s,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new vc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,r){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,i,s,r),this}absarc(t,e,n,i,s,r){return this.absellipse(t,e,n,n,i,s,r),this}ellipse(t,e,n,i,s,r,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,s,r,o,l),this}absellipse(t,e,n,i,s,r,o,l){const c=new Kr(t,e,n,i,s,r,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Zr extends ke{constructor(t=[new ct(0,-.5),new ct(.5,0),new ct(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Re(i,0,Math.PI*2);const s=[],r=[],o=[],l=[],c=[],h=1/e,u=new T,f=new ct,d=new T,g=new T,v=new T;let m=0,p=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:m=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,d.x=p*1,d.y=-m,d.z=p*0,v.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:m=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=v.x,d.y+=v.y,d.z+=v.z,d.normalize(),l.push(d.x,d.y,d.z),v.copy(g)}for(let x=0;x<=e;x++){const _=n+x*h*i,M=Math.sin(_),L=Math.cos(_);for(let C=0;C<=t.length-1;C++){u.x=t[C].x*M,u.y=t[C].y,u.z=t[C].x*L,r.push(u.x,u.y,u.z),f.x=x/e,f.y=C/(t.length-1),o.push(f.x,f.y);const E=l[3*C+0]*M,R=l[3*C+1],S=l[3*C+0]*L;c.push(E,R,S)}}for(let x=0;x<e;x++)for(let _=0;_<t.length-1;_++){const M=_+x*t.length,L=M,C=M+t.length,E=M+t.length+1,R=M+1;s.push(L,C,R),s.push(E,R,C)}this.setIndex(s),this.setAttribute("position",new de(r,3)),this.setAttribute("uv",new de(o,2)),this.setAttribute("normal",new de(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zr(t.points,t.segments,t.phiStart,t.phiLength)}}class Fi extends Zr{constructor(t=1,e=1,n=4,i=8){const s=new Km;s.absarc(0,-e/2,t,Math.PI*1.5,0),s.absarc(0,e/2,t,0,Math.PI*.5),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new Fi(t.radius,t.length,t.capSegments,t.radialSegments)}}class Qr extends ke{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const s=[],r=[],o=[],l=[],c=new T,h=new ct;r.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const d=n+u/e*i;c.x=t*Math.cos(d),c.y=t*Math.sin(d),r.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(r[f]/t+1)/2,h.y=(r[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new de(r,3)),this.setAttribute("normal",new de(o,3)),this.setAttribute("uv",new de(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qr(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class En extends ke{constructor(t=1,e=1,n=1,i=32,s=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],f=[],d=[];let g=0;const v=[],m=n/2;let p=0;x(),r===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new de(u,3)),this.setAttribute("normal",new de(f,3)),this.setAttribute("uv",new de(d,2));function x(){const M=new T,L=new T;let C=0;const E=(e-t)/n;for(let R=0;R<=s;R++){const S=[],y=R/s,A=y*(e-t)+t;for(let D=0;D<=i;D++){const z=D/i,X=z*l+o,q=Math.sin(X),G=Math.cos(X);L.x=A*q,L.y=-y*n+m,L.z=A*G,u.push(L.x,L.y,L.z),M.set(q,E,G).normalize(),f.push(M.x,M.y,M.z),d.push(z,1-y),S.push(g++)}v.push(S)}for(let R=0;R<i;R++)for(let S=0;S<s;S++){const y=v[S][R],A=v[S+1][R],D=v[S+1][R+1],z=v[S][R+1];(t>0||S!==0)&&(h.push(y,A,z),C+=3),(e>0||S!==s-1)&&(h.push(A,D,z),C+=3)}c.addGroup(p,C,0),p+=C}function _(M){const L=g,C=new ct,E=new T;let R=0;const S=M===!0?t:e,y=M===!0?1:-1;for(let D=1;D<=i;D++)u.push(0,m*y,0),f.push(0,y,0),d.push(.5,.5),g++;const A=g;for(let D=0;D<=i;D++){const X=D/i*l+o,q=Math.cos(X),G=Math.sin(X);E.x=S*G,E.y=m*y,E.z=S*q,u.push(E.x,E.y,E.z),f.push(0,y,0),C.x=q*.5+.5,C.y=G*.5*y+.5,d.push(C.x,C.y),g++}for(let D=0;D<i;D++){const z=L+D,X=A+D;M===!0?h.push(X,X+1,z):h.push(X+1,X,z),R+=3}c.addGroup(p,R,M===!0?1:2),p+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new En(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class sa extends En{constructor(t=1,e=1,n=32,i=1,s=!1,r=0,o=Math.PI*2){super(0,t,e,n,i,s,r,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:r,thetaLength:o}}static fromJSON(t){return new sa(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class to extends ke{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const s=[],r=[];o(i),c(n),h(),this.setAttribute("position",new de(s,3)),this.setAttribute("normal",new de(s.slice(),3)),this.setAttribute("uv",new de(r,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const _=new T,M=new T,L=new T;for(let C=0;C<e.length;C+=3)d(e[C+0],_),d(e[C+1],M),d(e[C+2],L),l(_,M,L,x)}function l(x,_,M,L){const C=L+1,E=[];for(let R=0;R<=C;R++){E[R]=[];const S=x.clone().lerp(M,R/C),y=_.clone().lerp(M,R/C),A=C-R;for(let D=0;D<=A;D++)D===0&&R===C?E[R][D]=S:E[R][D]=S.clone().lerp(y,D/A)}for(let R=0;R<C;R++)for(let S=0;S<2*(C-R)-1;S++){const y=Math.floor(S/2);S%2===0?(f(E[R][y+1]),f(E[R+1][y]),f(E[R][y])):(f(E[R][y+1]),f(E[R+1][y+1]),f(E[R+1][y]))}}function c(x){const _=new T;for(let M=0;M<s.length;M+=3)_.x=s[M+0],_.y=s[M+1],_.z=s[M+2],_.normalize().multiplyScalar(x),s[M+0]=_.x,s[M+1]=_.y,s[M+2]=_.z}function h(){const x=new T;for(let _=0;_<s.length;_+=3){x.x=s[_+0],x.y=s[_+1],x.z=s[_+2];const M=m(x)/2/Math.PI+.5,L=p(x)/Math.PI+.5;r.push(M,1-L)}g(),u()}function u(){for(let x=0;x<r.length;x+=6){const _=r[x+0],M=r[x+2],L=r[x+4],C=Math.max(_,M,L),E=Math.min(_,M,L);C>.9&&E<.1&&(_<.2&&(r[x+0]+=1),M<.2&&(r[x+2]+=1),L<.2&&(r[x+4]+=1))}}function f(x){s.push(x.x,x.y,x.z)}function d(x,_){const M=x*3;_.x=t[M+0],_.y=t[M+1],_.z=t[M+2]}function g(){const x=new T,_=new T,M=new T,L=new T,C=new ct,E=new ct,R=new ct;for(let S=0,y=0;S<s.length;S+=9,y+=6){x.set(s[S+0],s[S+1],s[S+2]),_.set(s[S+3],s[S+4],s[S+5]),M.set(s[S+6],s[S+7],s[S+8]),C.set(r[y+0],r[y+1]),E.set(r[y+2],r[y+3]),R.set(r[y+4],r[y+5]),L.copy(x).add(_).add(M).divideScalar(3);const A=m(L);v(C,y+0,x,A),v(E,y+2,_,A),v(R,y+4,M,A)}}function v(x,_,M,L){L<0&&x.x===1&&(r[_]=x.x-1),M.x===0&&M.z===0&&(r[_]=L/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new to(t.vertices,t.indices,t.radius,t.details)}}class Wi extends to{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Wi(t.radius,t.detail)}}class ve extends ke{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(r+o,Math.PI);let c=0;const h=[],u=new T,f=new T,d=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const x=[],_=p/n;let M=0;p===0&&r===0?M=.5/e:p===n&&l===Math.PI&&(M=-.5/e);for(let L=0;L<=e;L++){const C=L/e;u.x=-t*Math.cos(i+C*s)*Math.sin(r+_*o),u.y=t*Math.cos(r+_*o),u.z=t*Math.sin(i+C*s)*Math.sin(r+_*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),m.push(C+M,1-_),x.push(c++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){const _=h[p][x+1],M=h[p][x],L=h[p+1][x],C=h[p+1][x+1];(p!==0||r>0)&&d.push(_,M,C),(p!==n-1||l<Math.PI)&&d.push(M,L,C)}this.setIndex(d),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(v,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ve(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class dn extends ke{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const r=[],o=[],l=[],c=[],h=new T,u=new T,f=new T;for(let d=0;d<=n;d++)for(let g=0;g<=i;g++){const v=g/i*s,m=d/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(v),u.y=(t+e*Math.cos(m))*Math.sin(v),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=i;g++){const v=(i+1)*d+g-1,m=(i+1)*(d-1)+g-1,p=(i+1)*(d-1)+g,x=(i+1)*d+g;r.push(v,m,x),r.push(m,p,x)}this.setIndex(r),this.setAttribute("position",new de(o,3)),this.setAttribute("normal",new de(l,3)),this.setAttribute("uv",new de(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class re extends ji{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new It(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jl,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ca extends Ee{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new It(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class _c extends ca{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.groundColor=new It(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const qa=new ee,gl=new T,xl=new T;class yc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.map=null,this.mapPass=null,this.matrix=new ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jr,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;gl.setFromMatrixPosition(t.matrixWorld),e.position.copy(gl),xl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(xl),e.updateMatrixWorld(),qa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(qa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const vl=new ee,os=new T,Ya=new T;class Jm extends yc{constructor(){super(new Xe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ct(4,2),this._viewportCount=6,this._viewports=[new se(2,1,1,1),new se(0,1,1,1),new se(3,1,1,1),new se(1,1,1,1),new se(3,0,1,1),new se(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),os.setFromMatrixPosition(t.matrixWorld),n.position.copy(os),Ya.copy(n.position),Ya.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ya),n.updateMatrixWorld(),i.makeTranslation(-os.x,-os.y,-os.z),vl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vl)}}class zr extends ca{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Jm}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Zm extends yc{constructor(){super(new lc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Mc extends ca{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.shadow=new Zm}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Qm extends ca{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class t0{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=_l(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=_l();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function _l(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kr);class e0{keys=new Set;pressed=new Set;mouseDX=0;mouseDY=0;clicked=!1;locked=!1;el;constructor(t){this.el=t,window.addEventListener("keydown",e=>{(e.code==="Tab"||e.code==="Space")&&e.preventDefault(),this.keys.has(e.code)||this.pressed.add(e.code),this.keys.add(e.code)}),window.addEventListener("keyup",e=>this.keys.delete(e.code)),window.addEventListener("blur",()=>this.keys.clear()),window.addEventListener("mousemove",e=>{this.locked&&(this.mouseDX+=e.movementX,this.mouseDY+=e.movementY)}),window.addEventListener("mousedown",()=>this.clicked=!0),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===this.el})}lock(){if(!this.locked)try{const t=this.el.requestPointerLock();t&&typeof t.catch=="function"&&t.catch(()=>{})}catch{}}unlock(){document.pointerLockElement&&document.exitPointerLock()}down(t){return this.keys.has(t)}hit(t){return this.pressed.has(t)}consume(t){const e=this.pressed.has(t);return this.pressed.delete(t),e}endFrame(){this.pressed.clear(),this.mouseDX=0,this.mouseDY=0,this.clicked=!1}}const Jn=a=>440*Math.pow(2,(a-69)/12),Kt=(a,t=!1,e=!1)=>{const n=[a,a+(t?3:4),a+7];return e&&n.push(a+(t?10:11)),n};function Fn(a,t=60){const e=[];for(const n of a.replace(/\s/g,""))n==="."||n==="-"?e.push(null):e.push(t+parseInt(n,36));return e}const n0={menu:{bpm:112,chords:[Kt(60,!1,!0),Kt(57,!0,!0),Kt(65,!1,!0),Kt(67,!1)],bass:"x..x..x.x..x.x..",stab:"..x...x...x...x.",drums:{k:"x...x...x...x...",s:"....x.......x..x",h:"x.x.x.x.x.x.x.x."},lead:Fn("7.9.c..e.c.9.7.. 9.7.4..0.4.7.9.. 5.9.c..h.e.c.9.. b.9.7..4.7.b.e..",60),leadWave:"square",leadVol:.05,swing:.08},school:{bpm:92,chords:[Kt(62,!0,!0),Kt(67,!1,!0),Kt(60,!1,!0),Kt(57,!0,!0)],bass:"x.....x...x.....",stab:"....x.......x...",drums:{k:"x.....x...x.....",s:"....x.......x...",h:"..x...x...x...x."},lead:Fn("9...c...e...c... b...7...5.....7. 7...9...c...e... 9.....7...4.....",62),leadWave:"triangle",leadVol:.06,pad:!0,swing:.12},class:{bpm:80,chords:[Kt(60,!1,!0),Kt(65,!1,!0),Kt(62,!0,!0),Kt(67,!1)],bass:"x.......x.......",lead:Fn("c.......e.......  h.......e....... c.......9....... b.......7.......",60),leadWave:"sine",leadVol:.045,pad:!0},recess:{bpm:124,chords:[Kt(65,!1),Kt(67,!1),Kt(64,!0),Kt(69,!0)],bass:"x.xx..x.x.xx..x.",stab:"..x...x...x...x.",drums:{k:"x...x...x...x...",s:"....x.......x...",h:"xxxxxxxxxxxxxxxx"},lead:Fn("c.c.e.h.e.c.9... e.e.h.j.h.e.c... b.b.e.g.e.b.7... 9.c.e.c.9.7.4...",60),leadWave:"square",leadVol:.04,swing:.05},tension:{bpm:138,chords:[Kt(57,!0),Kt(57,!0),Kt(53,!1),Kt(52,!1)],bass:"x.x.x.x.x.x.x.x.",drums:{k:"x..x..x.x..x..x.",s:"....x.......x...",h:"x.x.x.x.x.x.x.x."},lead:Fn("0..0..3.2..2..0. 0..0..3.7..5..3. 5..5..8.7..5..3. 4..4..7.b..8..4.",69),leadWave:"sawtooth",leadVol:.035},fight:{bpm:160,chords:[Kt(52,!0),Kt(55,!1),Kt(50,!1),Kt(52,!0)],bass:"xxx.xxx.xx.xxx.x",drums:{k:"x.x.x.x.x.x.x.x.",s:"....x..x....x.xx",h:"xxxxxxxxxxxxxxxx"},lead:Fn("0.3.7.3.0.3.8.7. 7.b.e.b.7.b.e.c. 5.9.c.9.5.9.c.e. 0.3.7.c.b.7.3.0.",64),leadWave:"square",leadVol:.04},drama:{bpm:62,chords:[Kt(57,!0,!0),Kt(53,!1,!0),Kt(48,!1,!0),Kt(52,!1)],bass:"x...............",lead:Fn("c.......b...9... 9.......7....... 7.......4...7... 8...............",60),leadWave:"sine",leadVol:.06,pad:!0},ending:{bpm:96,chords:[Kt(60,!1,!0),Kt(64,!0,!0),Kt(65,!1,!0),Kt(67,!1,!0)],bass:"x.....x.x.......",stab:"....x.......x...",drums:{k:"x.......x.......",s:"....x.......x...",h:"x.x.x.x.x.x.x.x."},lead:Fn("c.e.h...e.c..... b.e.g...e.b..... 9.c.h...c.9..... b.e.j...h.e.....",60),leadWave:"triangle",leadVol:.06,pad:!0,swing:.1}};class i0{ctx=null;master;musicBus;sfxBus;ambBus;noise;trackGain=null;current="none";def=null;step=0;nextTime=0;timer=null;crowdGain=null;crowdTarget=0;babbleT=0;birdT=0;outdoors=!0;vol={master:.8,music:.55,sfx:.9};init(){if(this.ctx){this.ctx.resume();return}const t=new AudioContext;this.ctx=t,this.master=t.createGain();const e=t.createDynamicsCompressor();e.threshold.value=-14,e.ratio.value=4,this.master.connect(e).connect(t.destination),this.musicBus=t.createGain(),this.musicBus.connect(this.master),this.sfxBus=t.createGain(),this.sfxBus.connect(this.master),this.ambBus=t.createGain(),this.ambBus.connect(this.sfxBus);const n=t.sampleRate*2;this.noise=t.createBuffer(1,n,t.sampleRate);const i=this.noise.getChannelData(0);for(let s=0;s<n;s++)i[s]=Math.random()*2-1;this.applyVolumes(),this.startCrowd(),this.timer=window.setInterval(()=>this.schedule(),25)}setVolumes(t,e,n){this.vol={master:t,music:e,sfx:n},this.applyVolumes()}applyVolumes(){this.ctx&&(this.master.gain.value=this.vol.master,this.musicBus.gain.value=this.vol.music*.8,this.sfxBus.gain.value=this.vol.sfx)}play(t,e=1.2){if(!this.ctx||t===this.current)return;const n=this.ctx,i=n.currentTime;if(this.trackGain){const r=this.trackGain;r.gain.cancelScheduledValues(i),r.gain.setValueAtTime(r.gain.value,i),r.gain.linearRampToValueAtTime(0,i+e),setTimeout(()=>r.disconnect(),e*1e3+200)}if(this.current=t,t==="none"){this.trackGain=null,this.def=null;return}const s=n.createGain();s.gain.setValueAtTime(0,i),s.gain.linearRampToValueAtTime(1,i+e),s.connect(this.musicBus),this.trackGain=s,this.def=n0[t],this.step=0,this.nextTime=i+.05}schedule(){if(!this.ctx||(this.updateAmbience(),!this.def||!this.trackGain))return;const t=this.ctx,e=this.def,n=60/e.bpm/4;for(;this.nextTime<t.currentTime+.12;){const i=this.step%16,s=Math.floor(this.step/16)%e.chords.length,r=e.chords[s];let o=this.nextTime;e.swing&&i%2===1&&(o+=n*e.swing*2);const l=this.trackGain;if(e.pad&&i===0&&this.pad(r,o,n*16,l),e.bass&&e.bass[i]==="x"&&this.bassNote(Jn(r[0]-24),o,n*1.8,l),e.stab&&e.stab[i]==="x"&&r.forEach(c=>this.pluck(Jn(c),o,n*1.5,.03,"triangle",l)),e.drums&&(e.drums.k[i]==="x"&&this.kick(o,l),e.drums.s[i]==="x"&&this.snare(o,l),e.drums.h[i]==="x"&&this.hat(o,l,i%4===2?.05:.025)),e.lead){const c=this.step%e.lead.length,h=e.lead[c];h!=null&&this.pluck(Jn(h),o,n*2.2,e.leadVol??.05,e.leadWave??"triangle",l)}this.nextTime+=n,this.step++}}env(t,e,n,i,s){t.gain.setValueAtTime(1e-4,e),t.gain.exponentialRampToValueAtTime(i,e+n),t.gain.exponentialRampToValueAtTime(1e-4,e+s)}pluck(t,e,n,i,s,r){const o=this.ctx,l=o.createOscillator();l.type=s,l.frequency.value=t;const c=o.createBiquadFilter();c.type="lowpass",c.frequency.setValueAtTime(t*6,e),c.frequency.exponentialRampToValueAtTime(t*1.5,e+n);const h=o.createGain();this.env(h,e,.008,i,n),l.connect(c).connect(h).connect(r),l.start(e),l.stop(e+n+.05)}pad(t,e,n,i){const s=this.ctx,r=s.createGain();r.gain.setValueAtTime(1e-4,e),r.gain.linearRampToValueAtTime(.035,e+n*.3),r.gain.linearRampToValueAtTime(1e-4,e+n);const o=s.createBiquadFilter();o.type="lowpass",o.frequency.value=1200,o.connect(r).connect(i);for(const l of t)for(const c of[-6,6]){const h=s.createOscillator();h.type="sawtooth",h.frequency.value=Jn(l),h.detune.value=c,h.connect(o),h.start(e),h.stop(e+n+.1)}}bassNote(t,e,n,i){const s=this.ctx,r=s.createOscillator();r.type="triangle",r.frequency.value=t;const o=s.createOscillator();o.type="sine",o.frequency.value=t/2;const l=s.createGain();this.env(l,e,.01,.16,n),r.connect(l),o.connect(l),l.connect(i),r.start(e),o.start(e),r.stop(e+n+.05),o.stop(e+n+.05)}kick(t,e){const n=this.ctx,i=n.createOscillator();i.frequency.setValueAtTime(150,t),i.frequency.exponentialRampToValueAtTime(40,t+.15);const s=n.createGain();this.env(s,t,.003,.35,.22),i.connect(s).connect(e),i.start(t),i.stop(t+.25)}noiseHit(t,e,n,i,s,r,o=1){const l=this.ctx,c=l.createBufferSource();c.buffer=this.noise,c.playbackRate.value=.8+Math.random()*.4;const h=l.createBiquadFilter();h.type=i,h.frequency.value=s,h.Q.value=o;const u=l.createGain();this.env(u,t,.002,n,e),c.connect(h).connect(u).connect(r),c.start(t,Math.random()),c.stop(t+e+.05)}snare(t,e){this.noiseHit(t,.16,.16,"highpass",1800,e)}hat(t,e,n){this.noiseHit(t,.04,n,"highpass",7e3,e)}get now(){return this.ctx?this.ctx.currentTime:0}bell(t=2.6){if(!this.ctx)return;const e=this.ctx,n=this.now,i=e.createGain();i.gain.setValueAtTime(1e-4,n),i.gain.exponentialRampToValueAtTime(.22,n+.05),i.gain.setValueAtTime(.22,n+t),i.gain.exponentialRampToValueAtTime(1e-4,n+t+.8);const s=e.createGain(),r=e.createOscillator();r.frequency.value=22;const o=e.createGain();o.gain.value=.5,r.connect(o).connect(s.gain),s.gain.value=.5,s.connect(i).connect(this.sfxBus);for(const[l,c]of[[1180,1],[2650,.5],[3720,.3],[5100,.15]]){const h=e.createOscillator();h.type="sine",h.frequency.value=l;const u=e.createGain();u.gain.value=c*.4,h.connect(u).connect(s),h.start(n),h.stop(n+t+1)}r.start(n),r.stop(n+t+1)}step2(t,e){if(!this.ctx)return;const n=this.now,i=e?.12:.07;switch(t){case"grass":this.noiseHit(n,.09,i*.9,"bandpass",900,this.sfxBus,.7);break;case"tile":this.noiseHit(n,.05,i*1.1,"bandpass",3200,this.sfxBus,1.5),this.tone(220,n,.03,i*.3,"triangle");break;case"wood":this.noiseHit(n,.06,i,"bandpass",600,this.sfxBus,1.2),this.tone(140,n,.05,i*.5,"sine");break;case"court":this.noiseHit(n,.05,i,"bandpass",2e3,this.sfxBus,2);break;default:this.noiseHit(n,.07,i,"bandpass",1500,this.sfxBus,.9)}}tone(t,e,n,i,s="sine",r){const o=this.ctx,l=o.createOscillator();l.type=s,l.frequency.setValueAtTime(t,e),r&&l.frequency.exponentialRampToValueAtTime(r,e+n);const c=o.createGain();this.env(c,e,.005,i,n),l.connect(c).connect(this.sfxBus),l.start(e),l.stop(e+n+.05)}door(){if(!this.ctx)return;const t=this.now;this.tone(180,t,.35,.05,"sawtooth",320),this.noiseHit(t+.32,.12,.12,"lowpass",400,this.sfxBus)}click(){this.ctx&&this.tone(900,this.now,.05,.08,"square",1300)}hover(){this.ctx&&this.tone(600,this.now,.04,.04,"triangle",700)}confirm(){if(!this.ctx)return;const t=this.now;this.tone(660,t,.1,.09,"square"),this.tone(990,t+.08,.18,.09,"square")}correct(){if(!this.ctx)return;const t=this.now;[72,76,79,84].forEach((e,n)=>this.tone(Jn(e),t+n*.08,.2,.08,"triangle"))}wrong(){if(!this.ctx)return;const t=this.now;this.tone(220,t,.25,.1,"sawtooth",150),this.tone(160,t+.22,.4,.1,"sawtooth",100)}boing(){this.ctx&&this.tone(200,this.now,.35,.1,"sine",600)}whoosh(){if(this.ctx){const t=this.now;this.noiseHit(t,.25,.12,"bandpass",1200,this.sfxBus,.6)}}bonk(){if(!this.ctx)return;const t=this.now;this.tone(320,t,.12,.14,"square",120),this.noiseHit(t,.08,.12,"lowpass",800,this.sfxBus)}thud(){if(!this.ctx)return;const t=this.now;this.tone(90,t,.25,.25,"sine",40),this.noiseHit(t,.15,.18,"lowpass",300,this.sfxBus)}water(t){if(this.ctx)if(t&&!this.waterSrc){const e=this.ctx,n=e.createBufferSource();n.buffer=this.noise,n.loop=!0;const i=e.createBiquadFilter();i.type="bandpass",i.frequency.value=2500,i.Q.value=.5;const s=e.createGain();s.gain.value=.06,n.connect(i).connect(s).connect(this.sfxBus),n.start(),this.waterSrc=n}else!t&&this.waterSrc&&(this.waterSrc.stop(),this.waterSrc=null)}waterSrc=null;gasp(){if(this.ctx){const t=this.now;this.noiseHit(t,.3,.1,"bandpass",1800,this.sfxBus,3),this.tone(500,t,.3,.03,"sine",800)}}sob(){if(!this.ctx)return;const t=this.now;for(let e=0;e<3;e++)this.tone(420-e*30,t+e*.22,.18,.05,"triangle",330-e*30)}rage(){if(!this.ctx)return;const t=this.now;this.tone(80,t,1.5,.12,"sawtooth",160),this.noiseHit(t,1.4,.06,"lowpass",500,this.sfxBus)}stinger(){if(!this.ctx)return;const t=this.now;[57,60,63,66].forEach(e=>this.tone(Jn(e),t,1.4,.05,"sawtooth")),this.kick(t,this.sfxBus)}dun(){if(!this.ctx)return;const t=this.now;[45,52].forEach((e,n)=>{this.tone(Jn(e),t+n*.35,.9,.12,"sawtooth"),this.kick(t+n*.35,this.sfxBus)})}pop(){this.ctx&&this.tone(500,this.now,.08,.08,"sine",1200)}type(){this.ctx&&this.noiseHit(this.now,.02,.025,"highpass",4e3,this.sfxBus)}voice(t){if(!this.ctx)return;const e=this.now,n=t*(.9+Math.random()*.25);this.tone(n,e,.06,.035,"square",n*(.85+Math.random()*.3))}chalk(){this.ctx&&this.noiseHit(this.now,.12,.05,"bandpass",5e3,this.sfxBus,4)}bubble(){if(!this.ctx)return;const t=this.now;this.tone(400,t,.1,.05,"sine",900),this.tone(600,t+.1,.1,.04,"sine",1200)}keyboard(){if(!this.ctx)return;const t=this.now;for(let e=0;e<6;e++)this.noiseHit(t+e*.06+Math.random()*.03,.02,.05,"highpass",3e3,this.sfxBus)}startCrowd(){const t=this.ctx,e=t.createBufferSource();e.buffer=this.noise,e.loop=!0;const n=t.createBiquadFilter();n.type="bandpass",n.frequency.value=700,n.Q.value=.8;const i=t.createOscillator();i.frequency.value=.3;const s=t.createGain();s.gain.value=250,i.connect(s).connect(n.frequency),i.start();const r=t.createGain();r.gain.value=0,e.connect(n).connect(r).connect(this.ambBus),e.start(),this.crowdGain=r}setCrowd(t){this.crowdTarget=t}updateAmbience(){if(!this.ctx||!this.crowdGain)return;const t=this.crowdGain.gain;t.value+=(this.crowdTarget*.05-t.value)*.05;const e=this.ctx.currentTime;if(this.crowdTarget>.05&&e>this.babbleT){this.babbleT=e+.08+Math.random()*(.5/this.crowdTarget);const n=180+Math.random()*260,i=this.ctx.createOscillator();i.type="triangle",i.frequency.setValueAtTime(n,e),i.frequency.linearRampToValueAtTime(n*(.8+Math.random()*.5),e+.12);const s=this.ctx.createBiquadFilter();s.type="bandpass",s.frequency.value=900,s.Q.value=1.5;const r=this.ctx.createGain();this.env(r,e,.02,.012*this.crowdTarget,.15),i.connect(s).connect(r).connect(this.ambBus),i.start(e),i.stop(e+.2)}if(this.outdoors&&e>this.birdT){this.birdT=e+2+Math.random()*6;const n=2200+Math.random()*1600;for(let i=0;i<2+Math.floor(Math.random()*3);i++){const s=e+i*.13,r=this.ctx.createOscillator();r.type="sine",r.frequency.setValueAtTime(n,s),r.frequency.exponentialRampToValueAtTime(n*1.4,s+.07);const o=this.ctx.createGain();this.env(o,s,.01,.015,.09),r.connect(o).connect(this.ambBus),r.start(s),r.stop(s+.12)}}}}const tt=new i0,yl="eidb.settings",ja="eidb.save",Ml="eidb.meta";function $a(a){try{const t=localStorage.getItem(a);return t?JSON.parse(t):null}catch{return null}}function Ka(a,t){try{localStorage.setItem(a,JSON.stringify(t))}catch{}}const s0={master:.8,music:.55,sfx:.9,sens:1,invertY:!1,shadows:2,scale:1.5,minimap:!0,mapMode:1},Te={settings(){return{...s0,...$a(yl)??{}}},saveSettings(a){Ka(yl,a)},game(){return $a(ja)},saveGame(a){Ka(ja,a)},clearGame(){try{localStorage.removeItem(ja)}catch{}},meta(){return{completed:{},lastChar:"gonzalo",...$a(Ml)??{}}},saveMeta(a){Ka(Ml,a)}};function a0(a,t=!1){const e=a[0].index!==null,n=new Set(Object.keys(a[0].attributes)),i=new Set(Object.keys(a[0].morphAttributes)),s={},r={},o=a[0].morphTargetsRelative,l=new ke;let c=0;for(let h=0;h<a.length;++h){const u=a[h];let f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;s[d]===void 0&&(s[d]=[]),s[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0;const u=[];for(let f=0;f<a.length;++f){const d=a[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=a[f].attributes.position.count}l.setIndex(u)}for(const h in s){const u=Sl(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in r){const u=r[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let v=0;v<r[h].length;++v)d.push(r[h][v][f]);const g=Sl(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Sl(a){let t,e,n,i=-1,s=0;for(let c=0;c<a.length;++c){const h=a[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*e}const r=new t(s),o=new Be(r,e,n);let l=0;for(let c=0;c<a.length;++c){const h=a[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let f=0,d=h.count;f<d;f++)for(let g=0;g<e;g++){const v=h.getComponent(f,g);o.setComponent(f+u,g,v)}}else r.set(h.array,l);l+=h.count*e}return i!==void 0&&(o.gpuType=i),o}function r0(){const a=document.createElement("canvas");a.width=a.height=128;const t=a.getContext("2d");t.fillStyle="#ffffff",t.fillRect(0,0,128,128),t.fillStyle="#e4e4e4",t.fillRect(0,0,64,64),t.fillRect(64,64,64,64),t.strokeStyle="rgba(0,0,0,0.12)",t.lineWidth=2;for(let n=0;n<=128;n+=64)t.beginPath(),t.moveTo(n,0),t.lineTo(n,128),t.stroke(),t.beginPath(),t.moveTo(0,n),t.lineTo(128,n),t.stroke();for(let n=0;n<300;n++)t.fillStyle=`rgba(0,0,0,${Math.random()*.04})`,t.fillRect(Math.random()*128,Math.random()*128,2,2);const e=new oi(a);return e.wrapS=e.wrapT=ki,e.colorSpace=Me,e.anisotropy=8,e}function o0(){const a=document.createElement("canvas");a.width=a.height=128;const t=a.getContext("2d");t.fillStyle="#fff",t.fillRect(0,0,128,128);for(let n=0;n<128;n+=2)t.fillStyle=`rgba(90,50,10,${.05+Math.random()*.08})`,t.fillRect(0,n,128,1+Math.random()*2);const e=new oi(a);return e.wrapS=e.wrapT=ki,e.colorSpace=Me,e}class l0{constructor(t){this.world=t}buckets=new Map;noShadow=new Map;col=new It;push(t,e,n,i){this.col.set(n);const s=e.attributes.position.count,r=new Float32Array(s*3),o=.96+Math.random()*.06;for(let h=0;h<s;h++)r[h*3]=this.col.r*o,r[h*3+1]=this.col.g*o,r[h*3+2]=this.col.b*o;e.setAttribute("color",new Be(r,3)),e.index&&(e=e.toNonIndexed());const l=i?this.buckets:this.noShadow;let c=l.get(t);c||(c=[],l.set(t,c)),c.push(e)}box(t,e,n,i,s,r,o,l={}){const c=i-t,h=s-e,u=r-n;if(c<=0||h<=0||u<=0)return;const f=new me(c,h,u),d=l.mat??"std";if(d==="tile"||d==="wood"){const g=f.attributes.uv,v=f.attributes.position,m=f.attributes.normal;for(let p=0;p<g.count;p++){const x=v.getX(p)+(t+i)/2,_=v.getY(p)+(e+s)/2,M=v.getZ(p)+(n+r)/2,L=Math.abs(m.getY(p)),C=Math.abs(m.getX(p));L>.5?g.setXY(p,x/1,M/1):C>.5?g.setXY(p,M,_):g.setXY(p,x,_)}}f.translate((t+i)/2,(e+s)/2,(n+r)/2),this.push(d,f,o,l.shadow??!0),l.collide!==!1&&this.world.add({x0:t,y0:e,z0:n,x1:i,y1:s,z1:r,surface:l.surface,cam:l.cam})}boxC(t,e,n,i,s,r,o,l={}){this.box(t-i/2,e,n-r/2,t+i/2,e+s,n+r/2,o,l)}geom(t,e,n="std",i=!0){for(const s of Object.keys(t.attributes))s!=="position"&&s!=="normal"&&s!=="uv"&&t.deleteAttribute(s);t.attributes.uv||t.setAttribute("uv",new Be(new Float32Array(t.attributes.position.count*2),2)),this.push(n,t,e,i)}cyl(t,e,n,i,s,r,o={}){const l=new En(o.r2??i,i,s,o.seg??12);l.translate(t,e+s/2,n),this.geom(l,r,o.mat??"std",o.shadow??!0),o.collide&&this.world.add({x0:t-i,y0:e,z0:n-i,x1:t+i,y1:e+s,z1:n+i,surface:o.surface,cam:o.cam})}sphere(t,e,n,i,s,r=1,o=1,l=1,c="std"){const h=new Wi(i,1);h.scale(r,o,l),h.translate(t,e,n),this.geom(h,s,c)}build(t){const e=r0(),n=o0(),i={std:new re({vertexColors:!0,roughness:.82,metalness:0}),tile:new re({vertexColors:!0,roughness:.35,metalness:0,map:e}),wood:new re({vertexColors:!0,roughness:.6,metalness:0,map:n}),glass:new re({vertexColors:!0,roughness:.05,metalness:.2,transparent:!0,opacity:.35,depthWrite:!1}),emit:new re({vertexColors:!0,emissive:16777215,emissiveIntensity:.9,roughness:1}),metal:new re({vertexColors:!0,roughness:.3,metalness:.7})},s=(r,o)=>{for(const[l,c]of r){const h=new Map;for(const u of c){u.computeBoundingBox();const f=u.boundingBox.getCenter(new T),d=`${Math.floor(f.x/30)}_${Math.floor(f.z/30)}`;let g=h.get(d);g||(g=[],h.set(d,g)),g.push(u)}for(const u of h.values()){const f=a0(u,!1);if(!f)continue;f.computeBoundingSphere();const d=new Jt(f,i[l]);d.castShadow=o&&l!=="glass",d.receiveShadow=l!=="glass"&&l!=="emit",d.matrixAutoUpdate=!1,d.updateMatrix(),t.add(d)}}};s(this.buckets,!0),s(this.noShadow,!1),this.buckets.clear(),this.noShadow.clear()}}function c0(a,t,e,n="#1d3b7a",i="#ffffff",s="Bungee"){const r=document.createElement("canvas"),o=128;r.width=Math.max(64,Math.round(t*o)),r.height=Math.max(32,Math.round(e*o));const l=r.getContext("2d");l.fillStyle=n,l.fillRect(0,0,r.width,r.height),l.strokeStyle="rgba(255,255,255,0.35)",l.lineWidth=6,l.strokeRect(6,6,r.width-12,r.height-12),l.fillStyle=i,l.textAlign="center",l.textBaseline="middle";const c=a.split(`
`);let h=r.height*.62/c.length;l.font=`900 ${h}px ${s}, Arial Black, sans-serif`;const u=Math.max(...c.map(g=>l.measureText(g).width));u>r.width*.88&&(h*=r.width*.88/u,l.font=`900 ${h}px ${s}, Arial Black, sans-serif`),c.forEach((g,v)=>l.fillText(g,r.width/2,r.height/2+(v-(c.length-1)/2)*h*1.15));const f=new oi(r);return f.colorSpace=Me,f.anisotropy=8,new Jt(new fn(t,e),new re({map:f,roughness:.7}))}function Ci(a,t,e,n=!1){const i=document.createElement("canvas");i.width=Math.round(a*160),i.height=Math.round(t*160);const s=i.getContext("2d");e(s,i.width,i.height);const r=new oi(i);r.colorSpace=Me,r.anisotropy=8;const o=n?new re({map:r,emissive:16777215,emissiveMap:r,emissiveIntensity:.6,roughness:.4}):new re({map:r,roughness:.8}),l=new Jt(new fn(a,t),o);return l.userData.canvas=i,l}const On=2,bl=.4;class h0{boxes=[];grid=new Map;groundSurface=()=>"grass";key(t,e){return(t+500)*1e3+(e+500)}add(t){t.cam===void 0&&(t.cam=!0),this.boxes.push(t);const e=Math.floor(t.x0/On),n=Math.floor(t.x1/On),i=Math.floor(t.z0/On),s=Math.floor(t.z1/On);for(let r=e;r<=n;r++)for(let o=i;o<=s;o++){const l=this.key(r,o);let c=this.grid.get(l);c||(c=[],this.grid.set(l,c)),c.push(t)}}query(t,e,n,i,s){const r=Math.floor(t/On),o=Math.floor(n/On),l=Math.floor(e/On),c=Math.floor(i/On);for(let h=r;h<=o;h++)for(let u=l;u<=c;u++){const f=this.grid.get(this.key(h,u));if(f)for(const d of f)s.add(d)}return s}tmp=new Set;groundAt(t,e,n,i=.15){let s=0,r=this.groundSurface(t,e);this.tmp.clear();for(const o of this.query(t-i,e-i,t+i,e+i,this.tmp))t+i>o.x0&&t-i<o.x1&&e+i>o.z0&&e-i<o.z1&&o.y1<=n+bl&&o.y1>s&&(s=o.y1,r=o.surface??"tile");return{h:s,surface:r}}collide(t,e,n){this.tmp.clear();const i=this.query(t.x-e-.1,t.z-e-.1,t.x+e+.1,t.z+e+.1,this.tmp);for(let s=0;s<2;s++)for(const r of i){if(r.y0>=t.y+n||r.y1<=t.y+bl)continue;const o=Math.max(r.x0,Math.min(t.x,r.x1)),l=Math.max(r.z0,Math.min(t.z,r.z1)),c=t.x-o,h=t.z-l,u=c*c+h*h;if(u<e*e)if(u>1e-8){const f=Math.sqrt(u);t.x+=c/f*(e-f),t.z+=h/f*(e-f)}else{const f=[t.x-r.x0,r.x1-t.x,t.z-r.z0,r.z1-t.z],d=Math.min(...f);d===f[0]?t.x=r.x0-e:d===f[1]?t.x=r.x1+e:d===f[2]?t.z=r.z0-e:t.z=r.z1+e}}}raycast(t,e){this.tmp.clear();const n=this.query(Math.min(t.x,e.x),Math.min(t.z,e.z),Math.max(t.x,e.x),Math.max(t.z,e.z),this.tmp);let i=1;const s=e.x-t.x,r=e.y-t.y,o=e.z-t.z;for(const l of n){if(!l.cam)continue;let c=0,h=i;const u=[[t.x,s,l.x0,l.x1],[t.y,r,l.y0,l.y1],[t.z,o,l.z0,l.z1]];let f=!0;for(const[d,g,v,m]of u){if(Math.abs(g)<1e-9){if(d<v||d>m){f=!1;break}continue}let p=(v-d)/g,x=(m-d)/g;if(p>x&&([p,x]=[x,p]),c=Math.max(c,p),h=Math.min(h,x),c>h){f=!1;break}}f&&c<i&&(i=c)}return i}}class u0{nodes=[];byTag=new Map;add(t,e,n,i){const s=this.nodes.length;return this.nodes.push({id:s,p:new T(t,e,n),links:[],tag:i}),i&&this.byTag.set(i,s),s}link(t,e){t!==e&&(this.nodes[t].links.includes(e)||this.nodes[t].links.push(e),this.nodes[e].links.includes(t)||this.nodes[e].links.push(t))}chain(...t){for(let e=1;e<t.length;e++)this.link(t[e-1],t[e])}tag(t){const e=this.byTag.get(t);if(e===void 0)throw new Error("nav tag "+t);return e}has(t){return this.byTag.has(t)}los=null;nearest(t){const e=[];for(const n of this.nodes){const i=Math.abs(n.p.y-t.y);e.push({id:n.id,d:n.p.distanceToSquared(t)+(i>1.5?400:0)})}if(e.sort((n,i)=>n.d-i.d),this.los){for(let n=0;n<Math.min(10,e.length);n++)if(this.los(t,this.nodes[e[n].id].p))return e[n].id}return e[0]?.id??0}path(t,e){if(t===e)return[this.nodes[e].p.clone()];const n=new Set([t]),i=new Map,s=new Map([[t,0]]),r=new Map([[t,this.nodes[t].p.distanceTo(this.nodes[e].p)]]);let o=0;for(;n.size&&o++<5e3;){let l=-1,c=1/0;for(const h of n){const u=r.get(h)??1/0;u<c&&(c=u,l=h)}if(l===e){const h=[];let u=l;for(;u!==void 0;)h.unshift(this.nodes[u].p.clone()),u=i.get(u);return h}n.delete(l);for(const h of this.nodes[l].links){const u=(s.get(l)??1/0)+this.nodes[l].p.distanceTo(this.nodes[h].p);u<(s.get(h)??1/0)&&(i.set(h,l),s.set(h,u),r.set(h,u+this.nodes[h].p.distanceTo(this.nodes[e].p)),n.add(h))}}return[this.nodes[e].p.clone()]}}const Gt=3.6,Ws=3.3,De=.3,bt={wall:"#f1e2c4",wallLow:"#3a78b8",trim:"#b4552e",column:"#9a4127",floor:"#d8d0c0",corridor:"#c7b294",concrete:"#bfb8ac",court:"#3b8a57",courtB:"#c55a32",line:"#f4f4f0",board:"#1f4a37",desk:"#c98b4b",deskTop:"#e7c08b",chairBlue:"#2f62b0",metal:"#5b6370",glass:"#9fd3ff",roof:"#8d8172",bathWall:"#d5ecf3",bathTile:"#e8f4f6",stall:"#4f87c4",wood:"#a8672f",shelf:"#7b4a26"};class d0{constructor(t,e,n,i=1){this.hinge=t,this.dir=i;const s=new Jt(new me(e,2.25,.06),new re({color:n,roughness:.6}));s.position.set(e/2,1.125,0),s.castShadow=!0;const r=new Jt(new ve(.05,8,6),new re({color:"#d8c070",metalness:.8,roughness:.3}));r.position.set(e-.12,1.05,.06);const o=r.clone();o.position.z=-.06;const l=new Jt(new fn(e*.5,.5),new re({color:"#bfe3ff",roughness:.1}));l.position.set(e/2,1.75,.035),this.pivot.add(s,r,o,l),this.pivot.position.copy(t)}pivot=new ge;angle=0;wasOpen=!1;update(t,e){const n=e?Math.PI*.55*this.dir:0;this.angle+=(n-this.angle)*Math.min(1,t*6),this.pivot.rotation.y=this.angle;const i=e,s=i!==this.wasOpen;return this.wasOpen=i,s}}class f0{constructor(t){this.scene=t,this.b=new l0(this.world),t.add(this.group),this.world.groundSurface=(i,s)=>s>48.3?"concrete":"grass",this.buildGrounds(),this.buildMainBuilding(),this.buildCafeteria(),this.buildCourts(),this.buildEntrance(),this.buildNav();const e=new T,n=new T;this.nav.los=(i,s)=>this.world.raycast(e.copy(i).setY(i.y+1),n.copy(s).setY(s.y+1))>=.999,this.b.build(t)}world=new h0;nav=new u0;rooms=[];doors=[];mapRects=[];hangouts=[];group=new ge;flag;b;poi={};room(t){const e=this.rooms.find(n=>n.id===t);if(!e)throw new Error(t);return e}wallX(t,e,n,i,s,r=[],o=bt.wallLow,l=Ws){const c=this.b;r=[...r].sort((d,g)=>d.a-g.a);let h=t;const u=n-De/2,f=n+De/2;for(const d of[...r,{a:e,b:e,t:"end"}]){if(d.a>h&&(c.box(h,i,u,d.a,i+l,f,s),o&&c.box(h,i,u-.02,d.a,i+1,f+.02,o,{collide:!1})),d.t==="door")c.box(d.a,i+2.3,u,d.b,i+l,f,s),c.box(d.a-.06,i,u-.03,d.a,i+2.36,f+.03,bt.trim,{collide:!1}),c.box(d.b,i,u-.03,d.b+.06,i+2.36,f+.03,bt.trim,{collide:!1});else if(d.t==="win"){c.box(d.a,i,u,d.b,i+1,f,s),o&&c.box(d.a,i,u-.02,d.b,i+1,f+.02,o,{collide:!1}),c.box(d.a,i+2.3,u,d.b,i+l,f,s),c.box(d.a,i+1,n-.03,d.b,i+2.3,n+.03,bt.glass,{mat:"glass",cam:!0}),c.box(d.a,i+.98,u-.04,d.b,i+1.06,f+.04,bt.trim,{collide:!1});const g=Math.max(1,Math.round((d.b-d.a)/1.2));for(let v=1;v<g;v++){const m=d.a+(d.b-d.a)*v/g;c.box(m-.03,i+1,n-.05,m+.03,i+2.3,n+.05,"#e8e8e8",{collide:!1})}c.box(d.a,i+1.63,n-.05,d.b,i+1.67,n+.05,"#e8e8e8",{collide:!1})}h=Math.max(h,d.b)}}wallZ(t,e,n,i,s,r=[],o=bt.wallLow,l=Ws){const c=this.b;r=[...r].sort((d,g)=>d.a-g.a);let h=t;const u=n-De/2,f=n+De/2;for(const d of[...r,{a:e,b:e,t:"end"}])d.a>h&&(c.box(u,i,h,f,i+l,d.a,s),o&&c.box(u-.02,i,h,f+.02,i+1,d.a,o,{collide:!1})),d.t==="door"?c.box(u,i+2.3,d.a,f,i+l,d.b,s):d.t==="win"&&(c.box(u,i,d.a,f,i+1,d.b,s),c.box(u,i+2.3,d.a,f,i+l,d.b,s),c.box(n-.03,i+1,d.a,n+.03,i+2.3,d.b,bt.glass,{mat:"glass"}),c.box(u-.04,i+.98,d.a,f+.04,i+1.06,d.b,bt.trim,{collide:!1})),h=Math.max(h,d.b)}sign(t,e,n,i,s,r,o=0,l="#1d3b7a",c="#fff"){const h=c0(t,s,r,l,c);return h.position.set(e,n,i),h.rotation.y=o,this.group.add(h),h}buildGrounds(){const t=this.b,e=document.createElement("canvas");e.width=e.height=256;const n=e.getContext("2d");n.fillStyle="#7dbb55",n.fillRect(0,0,256,256);for(let d=0;d<4e3;d++){const g=Math.random();n.fillStyle=g<.5?"rgba(60,120,40,0.25)":"rgba(170,220,110,0.2)",n.fillRect(Math.random()*256,Math.random()*256,2,3)}const i=new oi(e);i.wrapS=i.wrapT=ki,i.repeat.set(60,60),i.colorSpace=Me;const s=new Jt(new fn(400,400),new re({map:i,roughness:1}));s.rotation.x=-Math.PI/2,s.receiveShadow=!0,this.group.add(s),t.box(-62,-.1,8,64,.02,47.7,bt.concrete,{surface:"concrete"});for(let d=-60;d<=62;d+=4)t.box(d-.03,.02,8,d+.03,.025,47.7,"#a9a296",{collide:!1,shadow:!1});for(let d=12;d<=46;d+=4)t.box(-62,.02,d-.03,64,.025,d+.03,"#a9a296",{collide:!1,shadow:!1});t.box(-62,-.1,-.5,-40,.02,8,bt.concrete,{surface:"concrete"}),t.box(40,-.1,-.5,64,.02,8,bt.concrete,{surface:"concrete"});for(let d=0;d<6;d++)t.box(-14+d*5.6,.02,20,-13.8+d*5.6,.03,40,"#f0d040",{collide:!1,shadow:!1});t.cyl(5,0,31,.6,.5,"#9a9488",{collide:!0,seg:8}),t.cyl(5,.5,31,.07,10,"#d8d8d8",{collide:!0,mat:"metal"});const r=document.createElement("canvas");r.width=192,r.height=110;const o=r.getContext("2d");o.fillStyle="#006847",o.fillRect(0,0,64,110),o.fillStyle="#fff",o.fillRect(64,0,64,110),o.fillStyle="#ce1126",o.fillRect(128,0,64,110),o.fillStyle="#8a5a2b",o.beginPath(),o.ellipse(96,55,13,15,0,0,Math.PI*2),o.fill();const l=new oi(r);l.colorSpace=Me;const c=new fn(3,1.7,16,4);this.flag=new Jt(c,new re({map:l,side:sn,roughness:.9})),this.flag.position.set(6.55,9.6,31),this.flag.castShadow=!0,this.flag.userData.base=c.attributes.position.array.slice(),this.group.add(this.flag);const h=[[-27,32,-24,44],[24.5,14,28,26],[24.5,34,28,44],[-14,44.6,-6,47],[10,44.6,18,47]];for(const[d,g,v,m]of h)t.box(d,0,g,v,.45,m,"#a24d2a"),t.box(d+.15,.45,g+.15,v-.15,.5,m-.15,"#4e8f3a",{collide:!1});const u=(d,g,v)=>{const[m,p]=[.5,2];t.boxC(d,.42,g,m,.08,p,bt.wood,{mat:"wood"}),t.boxC(d+0,0,g+-.8,.12,.42,.12,bt.metal),t.boxC(d+0,0,g+.8,.12,.42,.12,bt.metal)};u(-22.6,20),u(-22.6,30),u(-22.6,38),u(23.2,20),u(23.2,38),t.boxC(-15,0,12.5,4.4,2.2,.2,"#6b3b1d");const f=Ci(4,1.6,(d,g,v)=>{d.fillStyle="#f7efe0",d.fillRect(0,0,g,v),d.fillStyle="#c0392b",d.font=`900 ${v*.16}px Bungee, sans-serif`,d.textAlign="center",d.fillText("PERIÓDICO MURAL",g/2,v*.18);const m=["#ffe066","#9be7ff","#ffadad","#b9fbc0","#ffd6a5"];for(let p=0;p<9;p++)d.fillStyle=m[p%5],d.save(),d.translate(30+p%5*g/5.3,v*.3+Math.floor(p/5)*v*.33),d.rotate((Math.random()-.5)*.2),d.fillRect(0,0,g/6,v*.28),d.restore();d.fillStyle="#333",d.font=`700 ${v*.07}px Nunito, sans-serif`,d.fillText("Concurso de cuentos · Feria de ciencias · ¡No corran en los pasillos!",g/2,v*.96)});f.position.set(-15,1.25,12.62),this.group.add(f),t.boxC(-8,0,9,1.6,.9,.6,"#b8c4cc",{mat:"metal"}),this.poi.fountain=new T(-8,0,9.9),this.mapRects.push({name:"Patio central",x0:-24,z0:9,x1:24,z1:47,floor:0,color:"#8d877c"})}buildMainBuilding(){const t=this.b,e=-40,n=40,i=-14,s=2,r=8;t.box(e,-.1,i,n,.03,s,bt.floor,{surface:"tile",mat:"tile"}),t.box(-54,-.1,s,54,.03,r,bt.corridor,{surface:"tile",mat:"tile"}),t.box(e,Gt-.3,i,n,Gt,r+.15,"#e9e2d6",{surface:"tile",mat:"tile"}),t.box(e-.3,2*Gt-.3,i-.3,n+.3,2*Gt,r+.6,bt.roof),t.box(e-.3,2*Gt,r+.3,n+.3,2*Gt+.7,r+.6,bt.trim),t.box(e-.3,Gt-.32,r+.15,n+.3,Gt+.05,r+.35,bt.trim,{collide:!1});for(let c=-37;c<=35;c+=6)t.box(c-.25,0,r-.25,c+.25,Gt-.3,r+.25,bt.column),t.box(c-.2,Gt,r-.2,c+.2,2*Gt-.3,r+.2,bt.column);t.box(e,Gt,r,n,Gt+1,r+.12,"#e7d7b5"),t.box(e,Gt+1,r-.04,n,Gt+1.08,r+.16,bt.trim,{collide:!1}),this.world.add({x0:e,y0:Gt,z0:r,x1:n,y1:Gt+2.2,z1:r+.12,cam:!1});for(const c of[0,1]){const h=c*Gt;this.wallZ(i,s+De/2,e,h,bt.wall,[],bt.wallLow),this.wallZ(i,s+De/2,n,h,bt.wall,[],bt.wallLow)}this.stairs(-54,1),this.stairs(54,-1);const o=[["1A","1° A",-40,-28,"class"],["2A","2° A",-28,-16,"class"],["3A","3° A",-16,-4,"class"],["dir","DIRECCIÓN",-4,8,"dir"],["maestros","SALA DE MAESTROS",8,20,"teachers"],["banoH","BAÑO HOMBRES",20,26,"bathH"],["banoM","BAÑO MUJERES",26,32,"bathM"],["conserje","CONSERJERÍA",32,40,"storage"]],l=[["lab","LABORATORIO",-40,-28,"lab"],["comp","COMPUTACIÓN",-28,-16,"comp"],["biblio","BIBLIOTECA",-16,-4,"library"],["2B","2° B",-4,8,"class"],["3B","3° B",8,20,"class"],["1B","1° B",20,32,"class"],["bodega","BODEGA",32,40,"storage"]];for(const[c,h]of[[0,o],[1,l]])for(const[u,f,d,g,v]of h)this.buildRoom(u,f,c,d,g,v);this.sign("COLEGIO GANTE",0,2*Gt+.35,r+.62,9,.7,0,"#b4552e","#fff3d6"),this.sign("SECUNDARIA",-24,2*Gt+.35,r+.62,4.5,.55,0,"#b4552e","#fff3d6"),this.sign("“Saber es servir”",24,2*Gt+.35,r+.62,5,.55,0,"#b4552e","#fff3d6"),this.mapRects.push({name:"Pasillo",x0:e,z0:s,x1:n,z1:r,floor:0,color:"#6a6052"}),this.mapRects.push({name:"Pasillo",x0:e,z0:s,x1:n,z1:r,floor:1,color:"#6a6052"}),this.mapRects.push({name:"Escaleras",x0:-54,z0:s,x1:-40,z1:r,floor:0,color:"#9b7b52"}),this.mapRects.push({name:"Escaleras",x0:40,z0:s,x1:54,z1:r,floor:0,color:"#9b7b52"}),this.mapRects.push({name:"Escaleras",x0:-54,z0:s,x1:-40,z1:r,floor:1,color:"#9b7b52"}),this.mapRects.push({name:"Escaleras",x0:40,z0:s,x1:54,z1:r,floor:1,color:"#9b7b52"})}stairs(t,e){const n=this.b,i=14,s=Gt/i;for(let l=0;l<i;l++){const c=t+e*l,h=t+e*(l+1);n.box(Math.min(c,h),0,2,Math.max(c,h),(l+1)*s,8,l%2?"#c9b294":"#bda686",{surface:"concrete",mat:"tile"})}const r=Math.min(t,t+e*i),o=Math.max(t,t+e*i);for(let l=0;l<i;l++){const c=t+e*l,h=t+e*(l+1),u=(l+1)*s;for(const f of[1.9,8.1])n.box(Math.min(c,h),u,f-.06,Math.max(c,h),u+1,f+.06,bt.metal,{collide:!0,cam:!1,shadow:!1,mat:"metal"})}n.box(r,-.01,1.7,o,.01,1.8,bt.trim,{collide:!1})}buildRoom(t,e,n,i,s,r){const o=this.b,l=n*Gt,c=-14,h=2,u=s-i,f=r==="bathH"||r==="bathM",d=s-(f?4.6:2.4),g=d+1.4,v=(d+g)/2,m=f?bt.bathWall:bt.wall,p=f?"#7fb6cf":r==="dir"?"#7a2c2c":bt.wallLow,x=[{a:d,b:g,t:"door"}];!f&&u>=10?(x.push({a:i+1,b:i+4,t:"win"}),x.push({a:i+5,b:i+8.6,t:"win"})):f||x.push({a:i+1,b:i+4,t:"win"}),this.wallX(i,s,h,l,m,x,p);const _=[];u>=10?(_.push({a:i+.8,b:i+2.6,t:"win"}),_.push({a:s-2.6,b:s-.8,t:"win"})):f||_.push({a:i+1,b:s-1,t:"win"}),this.wallX(i,s,c,l,m,_,p),s<40&&this.wallZ(c,h,s,l,m,[],p);for(let E=i+3;E<s-1;E+=6)for(const R of[-10,-4])o.box(E-.6,l+Ws-.06,R-.15,E+.6,l+Ws,R+.15,"#fffbea",{mat:"emit",collide:!1,shadow:!1});const M=new d0(new T(d,l,h),1.4,f?bt.stall:"#7b4a26",1);this.doors.push(M),this.group.add(M.pivot),this.sign(e,v,l+2.75,h+.17,Math.min(3.2,e.length*.22+.6),.42,0,f?"#2a7fb8":r==="dir"?"#7a2c2c":"#1d3b7a");const L={id:t,name:e,floor:n,x0:i,x1:s,z0:c,z1:h,doorX:v,inNode:-1,corridorNode:-1,seats:[],kind:r};if(this.rooms.push(L),this.mapRects.push({name:e,x0:i,z0:c,x1:s,z1:h,floor:n,color:f?"#3d7aa0":r==="dir"?"#8a3a3a":r==="class"?"#4a5a8a":"#5a6a5a"}),r==="class"||r==="lab"||r==="comp"||r==="library"){if(r!=="library"){o.box(i+2.8,l+.85,c+.15,s-2.8,l+2.45,c+.22,"#ddd",{collide:!1});const E=Ci(u-5.8,1.45,(R,S,y)=>{R.fillStyle=bt.board,R.fillRect(0,0,S,y)});E.position.set((i+s)/2,l+1.65,c+.235),this.group.add(E),L.board=E,this.drawBoard(L,r==="lab"?["Laboratorio de Ciencias","Usa bata y lentes"]:r==="comp"?["Tecnología","No comer cerca de las compus"]:[e,"Bienvenidos"]),o.box(i+2.8,l+.82,c+.15,s-2.8,l+.86,c+.38,"#bbb",{collide:!1}),o.boxC(i+u/2+2.5,l,c+2.3,1.6,.76,.75,"#7b4a26",{mat:"wood"}),o.boxC(i+u/2+2.5,l+.76,c+2.3,1.7,.05,.8,"#5a3519",{collide:!1}),L.teacherPos=new T(i+u/2,l,c+2.1),o.cyl(s-.6,l+2.3,c+.25,.25,.06,"#fff",{seg:16})}for(let E=0;E<4;E++)for(let R=0;R<4;R++){const S=i+1.8+R*2.4,y=-9.5+E*2.3,A={pos:new T(S,l,y+.55),yaw:Math.PI,room:t,occupant:null,lane:E};L.seats.push(A),r==="class"?this.deskChair(S,l,y):r==="comp"?this.computerDesk(S,l,y):r==="library"?(R%2===0&&this.libTable(S+1.2,l,y),this.chair(S,l,y+.55,"#7b4a26")):this.chair(S,l,y+.55,"#333",!0)}if(r==="lab"){for(let R=0;R<4;R++){const S=-9.5+R*2.3;o.box(i+1,l,S-.4,i+9.8,l+.9,S+.2,"#e8e8e8"),o.box(i+.95,l+.9,S-.45,i+9.85,l+.96,S+.25,"#222",{collide:!1});for(let y=0;y<4;y++){const A=["#4ef0a0","#ff6bd5","#6bc8ff","#ffd23f"];o.cyl(i+1.6+y*2.4,l+.96,S-.2,.08,.22,A[(y+R)%4],{mat:"emit",seg:8,r2:.03})}}o.boxC(s-1,l,c+4,.9,2,2.2,"#ccc"),this.poi.labSkeleton=new T(s-1.85,l,c+5.7),this.poi.labBench=new T(i+4.2,l,-9.5+.55);const E=Ci(2.2,1.2,(R,S,y)=>{R.fillStyle="#fff",R.fillRect(0,0,S,y);const A=["#ff8a80","#ffd180","#ccff90","#80d8ff","#ea80fc"];for(let D=0;D<18;D++)for(let z=0;z<7;z++)z<1&&D>0&&D<17||(R.fillStyle=A[(D+z)%5],R.fillRect(4+D*(S-8)/18,14+z*(y-20)/7,(S-8)/18-2,(y-20)/7-2));R.fillStyle="#000",R.font=`900 ${y*.09}px Nunito`,R.fillText("TABLA PERIÓDICA",8,11)});E.position.set(i+.17,l+1.8,-6),E.rotation.y=Math.PI/2,this.group.add(E)}if(r==="comp"&&(this.poi.computer=new T(i+4.2,l,-7.2+.55)),r==="library"){for(let E=0;E<4;E++)this.bookshelf(i+.5,l,-12.5+E*2.6,!0);for(let E=0;E<4;E++)this.bookshelf(i+1.6+E*2.2,l,c+.45,!1);o.boxC(s-2.2,l,c+2.5,2,1,.8,"#7b4a26",{mat:"wood"}),L.teacherPos=new T(s-2.2,l,c+1.6),this.poi.bookshelf=new T(i+1,l,-6)}if(r==="class"){const E=["Los Niños Héroes","Tabla del 7","Verbos irregulares","Mapa de México"],R=Ci(1.6,1.1,(S,y,A)=>{S.fillStyle=["#ffe9a8","#c8f0ff","#ffd0d0","#d8ffd0"][Math.abs(Math.round(i))%4],S.fillRect(0,0,y,A),S.fillStyle="#2a2a2a",S.font=`900 ${A*.13}px Bungee, sans-serif`,S.textAlign="center",S.fillText(E[Math.abs(Math.round(i/12))%4],y/2,A*.22),S.fillStyle="#555";for(let D=0;D<5;D++)S.fillRect(y*.12,A*(.38+D*.11),y*(.5+Math.random()*.25),A*.04)});R.position.set(i+.17,l+1.7,-4),R.rotation.y=Math.PI/2,this.group.add(R)}}if(r==="dir"){const E=i+6;o.boxC(E,l,-11,2.4,.78,1,"#5a3519",{mat:"wood"}),o.boxC(E,l+.78,-11,2.5,.05,1.05,"#3a2210",{collide:!1}),o.boxC(E-.6,l+.83,-11,.4,.04,.3,"#fff",{collide:!1}),o.boxC(E+.7,l+.83,-11.1,.3,.25,.3,"#2b2b2b",{collide:!1}),this.chair(E,l,-12,"#222",!1,0),this.chair(E-.9,l,-9.6,"#7a2c2c",!1,Math.PI),this.chair(E+.9,l,-9.6,"#7a2c2c",!1,Math.PI),L.seats.push({pos:new T(E-.9,l,-9.6),yaw:Math.PI,room:t,occupant:null,lane:0}),L.seats.push({pos:new T(E+.9,l,-9.6),yaw:Math.PI,room:t,occupant:null,lane:0}),L.seats.push({pos:new T(E,l,-12),yaw:0,room:t,occupant:null,lane:0});for(let R=0;R<3;R++)o.boxC(i+.6,l,-12.5+R*.9,.7,1.4,.8,"#8a8f99",{mat:"metal"});o.cyl(s-1,l,-13,.04,2.2,"#c9a24a",{mat:"metal"}),o.box(s-1,l+1.3,-13.02,s-.2,l+1.6,-12.98,"#006847",{collide:!1}),o.box(s-1,l+1.6,-13.02,s-.2,l+1.9,-12.98,"#ffffff",{collide:!1}),o.box(s-1,l+1.9,-13.02,s-.2,l+2.2,-12.98,"#ce1126",{collide:!1});for(let R=0;R<4;R++)o.box(i+3.5+R*1.3,l+1.6,c+.15,i+4.4+R*1.3,l+2.3,c+.2,R%2?"#e7c35a":"#d9d9d9",{collide:!1});o.boxC(i+2,l,.6,3,.45,.6,bt.wood,{mat:"wood"}),L.teacherPos=new T(E,l,-12),this.poi.dirDesk=new T(E,l,-11),this.poi.dirWindow=new T(i+2.5,l,3.2)}if(r==="teachers"){o.boxC(i+6,l,-6,6,.75,2,"#6b4426",{mat:"wood"});for(let E=0;E<4;E++)this.chair(i+3.8+E*1.5,l,-7.4,"#333",!1,0),this.chair(i+3.8+E*1.5,l,-4.6,"#333",!1,Math.PI);for(let E=0;E<4;E++)L.seats.push({pos:new T(i+3.8+E*1.5,l,-7.4),yaw:0,room:t,occupant:null,lane:0});for(let E=0;E<4;E++)L.seats.push({pos:new T(i+3.8+E*1.5,l,-4.6),yaw:Math.PI,room:t,occupant:null,lane:1});for(let E=0;E<6;E++)o.boxC(i+1.5+E*1.1,l,c+.4,1,1.9,.6,"#7e8a99",{mat:"metal"});o.boxC(s-.7,l,-2,.8,.9,1.6,"#ddd"),o.boxC(s-.7,l+.9,-2.2,.3,.35,.3,"#222",{collide:!1})}if(r==="bathH"||r==="bathM"){o.box(i+De/2,l+.03,c+De/2,s-De/2,l+.04,h-De/2,bt.bathTile,{mat:"tile",surface:"tile",collide:!0,shadow:!1});for(let R=0;R<3;R++){const S=-2.6-R*1.4;o.box(i+De/2,l+.78,S-.4,i+.75,l+.9,S+.4,"#f4f4f4"),o.box(i+De/2,l,S-.08,i+.4,l+.78,S+.08,"#ddd",{collide:!1}),o.box(i+.16,l+.9,S-.03,i+.35,l+1.05,S+.03,"#c0c0c0",{mat:"metal",collide:!1}),o.box(i+De/2+.01,l+1.2,S-.45,i+De/2+.03,l+2,S+.45,"#cfe9ff",{mat:"metal",collide:!1})}for(let R=0;R<3;R++){const S=c+De/2+R*2.2,y=S+2.2,A=s-2.4;o.box(A,l+.15,y-.04,s-De/2,l+2.1,y+.04,bt.stall),o.box(A-.04,l+.15,S+.1,A+.04,l+2.1,S+.6,bt.stall),o.box(A-.04,l+.15,y-.5,A+.04,l+2.1,y,bt.stall),o.box(A-.02,l+.15,S+.6,A+.02,l+2.1,y-.5,"#5a96d3",{collide:!1,cam:!1}),o.boxC(s-.7,l,(S+y)/2,.45,.45,.6,"#fafafa")}if(r==="bathH"){for(let R=0;R<2;R++)o.boxC(i+1.4+R*1,l+.45,c+.35,.4,.6,.35,"#f5f5f5");this.poi.sink=new T(i+.95,l,-4),this.poi.bathDoorIn=new T(v,l,.6),this.poi.bathDoorOut=new T(v,l,4.5)}const E=Ci(1.2,.5,(R,S,y)=>{R.clearRect(0,0,S,y),R.fillStyle="#5a96d3",R.fillRect(0,0,S,y),R.fillStyle="#111",R.font=`700 ${y*.3}px Nunito`,R.fillText(r==="bathH"?"Vegetta777 >>>":"Ari + ??? ♥",8,y*.6)});E.position.set(s-2.45,l+1.4,c+1.6),E.rotation.y=-Math.PI/2,this.group.add(E)}if(r==="storage"){for(let E=0;E<3;E++)o.boxC(i+1.5+E*2.3,l,c+.5,2,2.2,.6,"#7b6a55");o.boxC(i+4,l,-6,1.2,.8,1.2,"#a88552"),o.cyl(s-1.4,l,-3,.3,.7,"#3a7bd5",{collide:!0})}}drawBoard(t,e,n="#f4f4ec"){if(!t.board)return;const i=t.board.userData.canvas,s=i.getContext("2d"),r=i.width,o=i.height;s.fillStyle=bt.board,s.fillRect(0,0,r,o);for(let c=0;c<18;c++)s.fillStyle="rgba(255,255,255,0.035)",s.beginPath(),s.ellipse(Math.random()*r,Math.random()*o,60+Math.random()*80,20+Math.random()*30,Math.random(),0,Math.PI*2),s.fill();s.fillStyle=n,s.textAlign="center",s.textBaseline="middle";const l=Math.min(o*.3,o*.75/e.length);e.forEach((c,h)=>{s.font=`${h===0?900:700} ${h===0?l:l*.8}px "Comic Sans MS", Nunito, sans-serif`,s.fillText(c,r/2,o/2+(h-(e.length-1)/2)*l*1.1)}),t.board.material.map.needsUpdate=!0}chair(t,e,n,i,s=!1,r=Math.PI){const o=this.b;if(s){o.cyl(t,e,n,.18,.62,i,{seg:8});return}o.boxC(t,e+.42,n,.44,.05,.42,i,{collide:!1});const l=Math.cos(r)>0?-1:1;o.boxC(t,e+.47,n+l*.2,.44,.42,.04,i,{collide:!1});for(const[c,h]of[[-.19,-.18],[.19,-.18],[-.19,.18],[.19,.18]])o.boxC(t+c,e,n+h,.035,.42,.035,bt.metal,{collide:!1})}deskChair(t,e,n){const i=this.b;i.boxC(t,e+.72,n,.75,.04,.5,bt.deskTop,{collide:!1,mat:"wood"}),i.boxC(t,e,n,.7,.72,.45,bt.desk,{collide:!0,cam:!1}),i.boxC(t,e+.5,n+.06,.66,.14,.36,"#6e4a2a",{collide:!1}),this.chair(t,e,n+.55,bt.chairBlue)}computerDesk(t,e,n){const i=this.b;i.boxC(t,e,n,1,.74,.6,"#d9d9d9",{cam:!1}),i.boxC(t,e+.74,n-.12,.5,.36,.06,"#222",{collide:!1}),i.box(t-.22,e+.78,n-.085,t+.22,e+1.07,n-.08,"#4aa3ff",{mat:"emit",collide:!1,shadow:!1}),i.boxC(t,e+.74,n+.12,.45,.02,.15,"#333",{collide:!1}),i.boxC(t+.38,e,n-.05,.18,.42,.42,"#bbb",{collide:!1}),this.chair(t,e,n+.55,"#333")}libTable(t,e,n){this.b.boxC(t,e,n,3.4,.74,.9,"#8a5a2b",{mat:"wood",cam:!1})}bookshelf(t,e,n,i){const s=this.b,[r,o]=i?[.5,2.2]:[2,.5];s.boxC(t,e,n,r,2.2,o,bt.shelf,{mat:"wood"});const l=["#c0392b","#2980b9","#27ae60","#f39c12","#8e44ad","#16a085","#d35400"];for(let c=0;c<4;c++){let h=-((i?o:r)/2)+.08;for(;h<(i?o:r)/2-.15;){const u=.06+Math.random()*.07,f=.3+Math.random()*.12,d=l[Math.floor(Math.random()*l.length)],g=i?r/2+.01:o/2+.01;i?s.box(t+g-.3,e+.15+c*.52,n+h,t+g,e+.15+c*.52+f,n+h+u,d,{collide:!1,shadow:!1}):s.box(t+h,e+.15+c*.52,n+g-.3,t+h+u,e+.15+c*.52+f,n+g,d,{collide:!1,shadow:!1}),h+=u+.01}}}buildCafeteria(){const t=this.b,e=-47,n=-33,i=14,s=30,r=3.4;t.box(e,-.1,i,n,.04,s,"#d9cbb2",{surface:"tile",mat:"tile"}),this.wallX(e,n,i,0,"#f7d9a8",[],"#c4552f",r),this.wallX(e,n,s,0,"#f7d9a8",[{a:e+3,b:e+6,t:"win"}],"#c4552f",r),this.wallZ(i,s,e,0,"#f7d9a8",[],"#c4552f",r);for(const c of[i,s])t.boxC(n,0,c,.35,r,.35,bt.column);t.box(e-.3,r,i-.4,n+1.2,r+.35,s+.4,"#c4552f"),t.box(-43.8,0,16,-43,1.05,28,"#e05a3a"),t.box(-44,1.05,15.9,-42.8,1.12,28.1,"#f4f4f4",{collide:!1});for(let c=0;c<3;c++){t.box(e+.2,0,16.5+c*4,e+.8,2.2,19.5+c*4,"#9a6a3c");for(let h=0;h<4;h++)for(let u=0;u<8;u++){const f=["#ff4d4d","#ffd23f","#3fa9ff","#6bdc5b","#ff8fd0","#ff9a3c"];t.box(e+.8,.25+h*.5,16.6+c*4+u*.36,e+.95,.55+h*.5,16.9+c*4+u*.36,f[(u+h+c)%6],{collide:!1,shadow:!1})}}t.box(e+.2,0,27.5,e+1.2,2,29.5,"#e8f0f8"),t.box(e+1.2,.3,27.7,e+1.22,1.9,29.3,"#9fd3ff",{mat:"glass",collide:!1}),this.sign("COOPERATIVA",(e+n)/2+3,r+.6,s+.42,4.5,.7,0,"#e05a3a","#fff");const o=Ci(1.8,1.2,(c,h,u)=>{c.fillStyle="#222",c.fillRect(0,0,h,u),c.fillStyle="#ffd23f",c.font=`900 ${u*.12}px Bungee`,c.textAlign="center",c.fillText("MENÚ",h/2,u*.15),c.fillStyle="#fff",c.font=`700 ${u*.085}px Nunito`,c.textAlign="left",["Torta de jamón ... $25","Tostitos preparados ... $30","Agua de horchata ... $12","Chicharrones ... $15","Maruchan ... $20","Gansito ... $14"].forEach((f,d)=>c.fillText(f,14,u*(.32+d*.12)))});o.position.set(-46.82,2.4,22),o.rotation.y=Math.PI/2,this.group.add(o),this.poi.coopCounter=new T(-42.3,0,22),this.poi.coopVendor=new T(-45,0,22);for(let c=0;c<4;c++){const h=16+c*3.6;t.boxC(-30,0,h,2.6,.75,1,"#e8e8e8",{cam:!1}),t.boxC(-30,0,h-.85,2.6,.45,.35,"#3a78b8",{cam:!1}),t.boxC(-30,0,h+.85,2.6,.45,.35,"#3a78b8",{cam:!1})}for(const[c,h]of[[-32,14.5],[-28,14.5],[-32,29.5],[-28,29.5]])t.boxC(c,0,h,.12,3,.12,bt.metal,{mat:"metal"});const l=new Jt(new me(5,.08,15.6),new re({color:"#ffcf3a",roughness:.8}));l.position.set(-30,3.05,22),l.castShadow=!0,this.group.add(l),this.mapRects.push({name:"Cooperativa",x0:e,z0:i,x1:n,z1:s,floor:0,color:"#b5562f"}),this.mapRects.push({name:"Mesas",x0:-32,z0:14.5,x1:-28,z1:29.5,floor:0,color:"#c9a23a"})}buildCourts(){const t=this.b;t.box(33,.02,14.5,61,.05,30,bt.courtB,{surface:"court",shadow:!1}),t.box(33,.02,31,61,.05,46.5,bt.court,{surface:"court",shadow:!1});const e=(s,r,o,l)=>t.box(s,.05,r,o,.06,l,bt.line,{collide:!1,shadow:!1});e(34,15.5,60,15.6),e(34,29,60,29.1),e(34,15.5,34.1,29.1),e(59.9,15.5,60,29.1),e(46.95,15.5,47.05,29.1),e(34,32,60,32.1),e(34,45.4,60,45.5),e(34,32,34.1,45.5),e(59.9,32,60,45.5),e(46.95,32,47.05,45.5);const n=new dn(1.8,.05,6,32);n.rotateX(Math.PI/2),n.translate(47,.06,38.75),t.geom(n,bt.line,"std",!1);const i=new dn(1.8,.05,6,32);i.rotateX(Math.PI/2),i.translate(47,.06,22.3),t.geom(i,bt.line,"std",!1);for(const[s,r]of[[34.6,1],[59.4,-1]]){t.cyl(s-r*.8,0,22.3,.09,3.1,"#555",{collide:!0,mat:"metal"}),t.box(s-.05,2.7,21.4,s+.05,3.8,23.2,"#fafafa",{collide:!1});const o=new dn(.24,.025,6,16);o.rotateX(Math.PI/2),o.translate(s+r*.3,3.05,22.3),t.geom(o,"#ff5a1f","std")}for(const[s,r]of[[34.2,1],[59.8,-1]])t.box(s,0,37.3,s+.12,2,37.42,"#fff",{mat:"metal"}),t.box(s,0,40.1,s+.12,2,40.22,"#fff",{mat:"metal"}),t.box(s,1.9,37.3,s+.12,2.02,40.22,"#fff",{collide:!1,mat:"metal"}),t.box(s-r*1,0,37.3,s-r*.98,1.9,40.2,"#ddd",{collide:!1,mat:"glass"});for(let s=0;s<4;s++)t.box(62+s*.7,0,16,65.5,.4+s*.4,44,s%2?"#9aa6b2":"#8592a0",{surface:"concrete"});this.poi.bleachers=new T(63.2,.8,30),this.poi.ball=new T(44,0,22),this.mapRects.push({name:"Cancha de básquet",x0:33,z0:14.5,x1:61,z1:30,floor:0,color:"#a5532f"}),this.mapRects.push({name:"Cancha de fútbol",x0:33,z0:31,x1:61,z1:46.5,floor:0,color:"#2f7a48"}),this.mapRects.push({name:"Gradas",x0:62,z0:16,x1:65.5,z1:44,floor:0,color:"#7a8592"})}buildEntrance(){const t=this.b,e=48,n=2.6;t.box(-64,0,e-.3,-3.5,n,e+.3,"#e2c79a"),t.box(3.5,0,e-.3,66,n,e+.3,"#e2c79a"),t.box(-64,n,e-.35,-3.5,n+.15,e+.35,bt.trim,{collide:!1}),t.box(3.5,n,e-.35,66,n+.15,e+.35,bt.trim,{collide:!1}),t.box(-64.3,0,-20,-63.7,n,e,"#e2c79a"),t.box(65.7,0,-20,66.3,n,e,"#e2c79a"),t.box(-64,0,-20.3,66,n,-19.7,"#e2c79a"),t.box(-64,.9,e+.3,-3.5,1.3,e+.32,"#2e6fb5",{collide:!1}),t.box(3.5,.9,e+.3,66,1.3,e+.32,"#2e6fb5",{collide:!1}),t.box(-4.3,0,e-.5,-3.3,4.6,e+.5,"#b4552e"),t.box(3.3,0,e-.5,4.3,4.6,e+.5,"#b4552e"),t.box(-4.3,3.6,e-.3,4.3,4.6,e+.3,"#b4552e",{collide:!1}),this.sign("COLEGIO GANTE",0,4.1,e+.32,6.6,.8,0,"#1d3b7a","#ffe9a8"),this.sign("COLEGIO GANTE",0,4.1,e-.32,6.6,.8,Math.PI,"#1d3b7a","#ffe9a8");for(const r of[-1,1]){const o=r*3.3;for(let l=0;l<9;l++)t.box(o-.03,0,e-.3-l*.33,o+.03,2.4,e-.25-l*.33,"#2f6b3a",{collide:!1,mat:"metal"});t.box(o-.05,2.3,e-3.3,o+.05,2.4,e-.25,"#2f6b3a",{mat:"metal"}),t.box(o-.05,.1,e-3.3,o+.05,.2,e-.25,"#2f6b3a",{collide:!1,mat:"metal"}),t.box(o-.05,0,e-3.3,o+.05,2.4,e-.25,"#2f6b3a",{collide:!0,cam:!1,shadow:!1,mat:"glass"})}t.box(4.5,-.05,45.5,8.3,.05,47.7,"#cfc6b6",{surface:"tile"}),t.box(4.5,0,45.4,8.3,1,45.6,"#e2c79a"),t.box(4.5,2.2,45.4,8.3,2.6,45.6,"#e2c79a"),t.box(4.5,1,45.47,8.3,2.2,45.53,bt.glass,{mat:"glass"}),t.box(8.2,0,45.4,8.4,2.6,47.7,"#e2c79a"),t.box(4.3,2.6,45.2,8.6,2.8,47.9,bt.trim),t.boxC(6.4,0,46,1.4,.75,.5,"#7b4a26"),this.sign("VIGILANCIA",6.4,2.45,45.38,2.2,.3,Math.PI,"#333","#ffd23f"),this.poi.guard=new T(6.4,0,46.8),t.box(-40,-.1,e+.3,50,.12,51.5,"#c7c2b8",{surface:"concrete"}),t.box(-40,-.1,51.5,50,.01,62,"#3b3d42",{surface:"concrete"});for(let r=-38;r<50;r+=6)t.box(r,.01,56.6,r+3,.02,56.9,"#f0f0e0",{collide:!1,shadow:!1});t.box(-40,-.1,62,50,.12,64,"#c7c2b8",{surface:"concrete"});const i=["#f4a261","#e76f51","#2a9d8f","#e9c46a","#a8dadc","#f6bd60","#84a59d"];for(let r=0;r<9;r++){const o=-38+r*10,l=4+r%3*1.5;t.box(o,0,64,o+9.4,l,70,i[r%i.length]),t.box(o+1,.9,63.98,o+3,2.2,64,"#9fd3ff",{collide:!1,mat:"glass"}),t.box(o+5,0,63.98,o+6.4,2.3,64,"#6b3b1d",{collide:!1}),t.box(o-.1,l,63.8,o+9.5,l+.3,70.1,"#ddd",{collide:!1})}const s=(r,o,l)=>{t.box(r-2,.3,o-.9,r+2,1.1,o+.9,l),t.box(r-1.1,1.1,o-.8,r+1,1.7,o+.8,l),t.box(r-1,1.15,o-.82,r+.9,1.6,o+.82,"#9fd3ff",{collide:!1,mat:"glass"});for(const[c,h]of[[-1.3,-.9],[1.3,-.9],[-1.3,.9],[1.3,.9]])t.cyl(r+c,0,o+h,.35,.2,"#222",{collide:!1,seg:10})};s(-14,53.2,"#d62828"),s(16,53.2,"#f1faee"),s(28,60,"#457b9d"),t.boxC(-8,.12,50.5,1.6,.9,.8,"#1e88e5"),t.cyl(-8,1.02,50.5,.4,.5,"#9e9e9e",{mat:"metal"}),this.poi.vendor=new T(-8,.12,49.6),this.world.add({x0:-41,y0:0,z0:48,x1:-40,y1:5,z1:70,cam:!1}),this.world.add({x0:50,y0:0,z0:48,x1:51,y1:5,z1:70,cam:!1}),this.poi.spawn=new T(0,.12,58),this.mapRects.push({name:"Entrada",x0:-4,z0:47.5,x1:4,z1:48.5,floor:0,color:"#d4a34a"}),this.mapRects.push({name:"Calle",x0:-40,z0:48.5,x1:50,z1:64,floor:0,color:"#3b3d42"}),this.mapRects.push({name:"Caseta",x0:4.5,z0:45.4,x1:8.4,z1:47.7,floor:0,color:"#b4552e"})}buildNav(){const t=this.nav,e={0:[],1:[]};for(const A of[0,1]){const D=A*Gt,z=new Set([-39,39]);for(const G of this.rooms)G.floor===A&&z.add(G.doorX);const X=[...z].sort((G,J)=>G-J),q=X.map(G=>t.add(G,D,5,`c${A}_${G.toFixed(1)}`));t.chain(...q),e[A]=q;for(const G of this.rooms)G.floor===A&&(G.corridorNode=q[X.indexOf(G.doorX)],this.roomNav(G))}const n=t.add(-39.5,Gt,5),i=t.add(-55.5,0,5,"stairW"),s=t.add(39.5,Gt,5),r=t.add(55.5,0,5,"stairE");t.link(n,e[1][0]),t.link(n,i),t.link(s,e[1][e[1].length-1]),t.link(s,r);const o=[-55.5,-39,...this.rooms.filter(A=>A.floor===0).map(A=>A.doorX),39,55.5].sort((A,D)=>A-D),l=o.map(A=>t.add(A,0,10.5,`s_${A.toFixed(1)}`));t.chain(...l),t.link(i,l[0]),t.link(r,l[l.length-1]);for(let A=0;A<e[0].length;A++){const D=t.nodes[e[0][A]].p,z=o.indexOf(D.x);z>=0&&t.link(e[0][A],l[z])}const c=[-20,-10,0,10,20],h=[16,26,36,44],u=c.map(A=>h.map(D=>{const z=t.add(A,0,D,`p_${A}_${D}`);return this.hangouts.push(z),z}));for(let A=0;A<c.length;A++)for(let D=0;D<h.length;D++)A>0&&t.link(u[A][D],u[A-1][D]),D>0&&t.link(u[A][D],u[A][D-1]);for(let A=0;A<c.length;A++){let D=l[0],z=1/0;for(const X of l){const q=Math.abs(t.nodes[X].p.x-c[A]);q<z&&(z=q,D=X)}t.link(u[A][0],D)}const f=t.add(0,0,48,"gate"),d=t.add(0,.12,55,"street");t.link(f,u[2][3]),t.link(f,d);const g=t.add(-20,.12,55),v=t.add(20,.12,55);t.link(d,g),t.link(d,v);const m=t.add(-26,0,21.4,"coopOut"),p=t.add(-41.5,0,21.8,"coopCounter"),x=t.add(-27.2,0,18.5,"tablesN"),_=t.add(-27.2,0,25.6,"tablesS");t.link(m,u[0][0]),t.link(m,u[0][1]),t.link(m,p),t.link(m,x),t.link(m,_),t.link(x,_);const M=t.add(-38,0,21.4,"coopQueue");t.link(M,p),t.link(M,m),this.hangouts.push(x,_,M);const L=[38,48,56],C=[18,28,38,44],E=L.map(A=>C.map(D=>{const z=t.add(A,0,D,`k_${A}_${D}`);return this.hangouts.push(z),z}));for(let A=0;A<L.length;A++)for(let D=0;D<C.length;D++)A>0&&t.link(E[A][D],E[A-1][D]),D>0&&t.link(E[A][D],E[A][D-1]);const R=t.add(30,0,29,"courtGate");t.link(R,u[4][1]),t.link(R,u[4][2]),t.link(R,E[0][1]),t.link(R,E[0][2]),t.link(E[0][0],l[l.length-2]);const S=t.add(61.3,0,30,"bleachers");t.link(S,E[2][1]),t.link(S,E[2][2]);const y=t.add(-8,0,10.5);t.link(y,l[o.findIndex(A=>A>-8)]),t.link(y,l[o.findIndex(A=>A>-8)-1]),this.hangouts.push(y)}roomNav(t){const e=this.nav,n=t.floor*Gt,i=e.add(t.doorX,n,.8,`in_${t.id}`);if(e.link(i,t.corridorNode),t.inNode=i,t.seats.length&&(t.kind==="class"||t.kind==="lab"||t.kind==="comp"||t.kind==="library")){const s=t.x0+10.6,r=[];for(let c=3;c>=0;c--){const h=-9.5+c*2.3;r.push(e.add(s,n,h+1.3,`aisle_${t.id}_${c}`))}const o=e.add(s,n,-11.6,`front_${t.id}`);e.chain(i,...r,o);const l=e.add(t.x0+6,n,-11.6,`teacher_${t.id}`);e.link(o,l),t.seats.forEach((c,h)=>{const u=Math.floor(h/4),f=r[3-u],d=e.add(c.pos.x,n,e.nodes[f].p.z,`lane_${t.id}_${h}`);e.link(d,f);const g=e.add(c.pos.x,n,c.pos.z,`seat_${t.id}_${h}`);e.link(d,g)});for(let c=0;c<4;c++){const h=[0,1,2,3].map(u=>e.tag(`lane_${t.id}_${c*4+u}`));e.chain(...h)}}else if(t.kind==="dir"){const s=e.add(t.doorX,n,-6,`mid_${t.id}`),r=e.add(t.x0+6,n,-8.6,`desk_${t.id}`),o=e.add(t.x0+7.6,n,-12,`behind_${t.id}`),l=e.add(t.x0+2,n,1.2,`bench_${t.id}`);e.chain(i,s,r),e.link(s,o),e.link(i,l),t.seats.forEach((c,h)=>{const u=e.add(c.pos.x,n,c.pos.z,`seat_${t.id}_${h}`);e.link(u,h<2?r:o)})}else if(t.kind==="teachers"){const s=e.add(t.doorX,n,-3,`mid_${t.id}`),r=e.add(t.x0+3,n,-3,`ta_${t.id}`),o=e.add(t.x0+3,n,-8.6,`tb_${t.id}`);e.chain(i,s,r,o),t.seats.forEach((l,c)=>{const h=e.add(l.pos.x,n,l.pos.z,`seat_${t.id}_${c}`),u=c<4?-8.6:-3.4,f=e.add(l.pos.x,n,u,`lane_${t.id}_${c}`);e.link(h,f),e.link(f,c<4?o:r)})}else if(t.kind==="bathH"||t.kind==="bathM"){const s=e.add(t.doorX,n,-3.5,`mid_${t.id}`),r=e.add(t.x0+.95,n,-4,`sink_${t.id}`),o=e.add(t.x1-1,n,-12.8,`stall_${t.id}`),l=e.add(t.doorX,n,-11.5,`back_${t.id}`);e.chain(i,s,r),e.chain(s,l,o)}else{const s=e.add(t.doorX,n,-4,`mid_${t.id}`);e.link(i,s)}}update(t,e,n,i){const s=this.flag.geometry.attributes.position,r=this.flag.userData.base;for(let o=0;o<s.count;o++){const l=r[o*3]+1.5;s.setZ(o,Math.sin(l*2.2-e*4)*.12*l),s.setY(o,r[o*3+1]-l*l*.01)}s.needsUpdate=!0,this.flag.geometry.computeVertexNormals();for(const o of this.doors){let l=!1;for(const c of n)if(Math.abs(c.y-o.hinge.y)<1.5&&Math.abs(c.x-(o.hinge.x+.7))<1.4&&Math.abs(c.z-o.hinge.z)<1.6){l=!0;break}o.update(t,l)&&l&&i()}}zoneAt(t){const e=t.y>Gt-.5?1:0;for(const n of this.rooms)if(n.floor===e&&t.x>n.x0&&t.x<n.x1&&t.z>n.z0&&t.z<n.z1)return n.name;return t.z>48.3?"Calle":t.z>2&&t.z<8&&t.x>-40&&t.x<40?e?"Pasillo 2º piso":"Pasillo":t.x<-33&&t.x>-47&&t.z>14&&t.z<30?"Cooperativa":t.x>32?"Canchas":t.z>8?"Patio central":"Colegio Gante"}isIndoors(t){return t.x>-40&&t.x<40&&t.z>-14&&t.z<2||t.x<-33&&t.x>-47&&t.z>14&&t.z<30}}class p0{constructor(t,e){this.scene=t,t.background=new It("#9fd4ff"),t.fog=new la("#cfe6f5",90,260);const n=new ve(400,32,16),i=new An({side:ze,depthWrite:!1,fog:!1,uniforms:{top:{value:new It("#3f8fe6")},bottom:{value:new It("#e9f5ff")},sunDir:{value:new T(.6,.35,.5).normalize()}},vertexShader:"varying vec3 vW; void main(){ vW = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform vec3 top; uniform vec3 bottom; uniform vec3 sunDir; varying vec3 vW;
        void main(){ float h = clamp(vW.y*1.6+0.1,0.0,1.0); vec3 c = mix(bottom, top, pow(h,0.7));
        float s = max(dot(normalize(vW), sunDir),0.0); c += vec3(1.0,0.85,0.6)*pow(s,40.0)*0.9 + vec3(1.0,0.8,0.5)*pow(s,4.0)*0.15;
        gl_FragColor = vec4(c,1.0); }`}),s=new Jt(n,i);s.renderOrder=-1,t.add(s),this.hemi=new _c("#dff1ff","#8a7a5a",1.35),t.add(this.hemi),t.add(new Qm("#ffffff",.35)),this.sun=new Mc("#fff0d6",2.6),this.sun.position.set(60,45,50),this.sun.castShadow=!0;const r=this.sun.shadow.camera;r.left=-45,r.right=45,r.top=45,r.bottom=-45,r.near=1,r.far=220,this.sun.shadow.mapSize.set(4096,4096),this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.03,t.add(this.sun,this.sun.target),this.fill=new zr("#fff4e0",0,14,1.5),t.add(this.fill),this.buildTrees(e),this.buildBirds(),this.clouds=this.buildClouds()}sun;hemi;fill;swayUniform={value:0};birds=[];clouds;setShadows(t,e){e.shadowMap.enabled=t>0,this.sun.castShadow=t>0;const n=t>=2?4096:2048;this.sun.shadow.map&&this.sun.shadow.mapSize.x!==n&&(this.sun.shadow.map.dispose(),this.sun.shadow.map=null),this.sun.shadow.mapSize.set(n,n)}buildTrees(t){const e=[];for(const m of[34.5,38.5,42.5])e.push([-25.5,m,1]);for(const m of[16,20,24,36,40])e.push([26.2,m,1]);for(let m=-58;m<=62;m+=8.5)e.push([m+Math.random()*2,-18.2+Math.random()*.6,.85]);for(let m=14;m<=44;m+=7)e.push([-58+Math.random()*2,m,1.1]);for(const m of[-30,-20,22,36,46])e.push([m,50.6,.9]);for(const[m,p]of[[-10,46],[14,46],[-60,-4],[60,-6],[44,11],[-50,34]])e.push([m,p,.85]);const n=new En(.16,.24,2.6,7);n.translate(0,1.3,0);const i=new fl(n,new re({color:"#7a5233",roughness:1}),e.length),s=new Wi(1,1),r=new re({color:"#ffffff",roughness:.9,flatShading:!0});r.onBeforeCompile=m=>{m.uniforms.uTime=this.swayUniform,m.vertexShader=`uniform float uTime;
`+m.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
        vec4 wp = instanceMatrix * vec4(position,1.0);
        float sway = sin(uTime*1.3 + wp.x*0.3 + wp.z*0.2) * 0.12 + sin(uTime*2.7 + wp.x) * 0.04;
        transformed.x += sway * (position.y + 1.0);
        transformed.z += sway * 0.6 * (position.y + 1.0);`)};const o=e.length*3,l=new fl(s,r,o),c=new ee,h=new Yi,u=new T,f=new T,d=["#4f9a3a","#5fae45","#3f8a35","#6dbb52","#7fbf3f"],g=new It;let v=0;e.forEach(([m,p,x],_)=>{const M=p>30&&p<47&&(m<-24||m>24)?.45:0;c.compose(f.set(m,M,p),h.identity(),u.set(x,x,x)),i.setMatrixAt(_,c),t.add({x0:m-.3,y0:0,z0:p-.3,x1:m+.3,y1:3,z1:p+.3,cam:!1});for(let L=0;L<3;L++){const C=L/3*Math.PI*2+_,E=(1.5+Math.random()*.5)*x;c.compose(f.set(m+Math.cos(C)*.6*x,M+(2.8+L*.5)*x,p+Math.sin(C)*.6*x),h.setFromEuler(new rn(Math.random(),Math.random(),0)),u.set(E,E*.85,E)),l.setMatrixAt(v,c),l.setColorAt(v,g.set(d[(_+L)%d.length])),v++}}),i.castShadow=l.castShadow=!0,i.receiveShadow=l.receiveShadow=!0,this.scene.add(i,l)}buildBirds(){const t=new re({color:"#2b2b2b",side:sn}),e=new fn(.35,.14);e.rotateX(-Math.PI/2),e.translate(.17,0,0);for(let n=0;n<9;n++){const i=new ge,s=new Jt(new ve(.07,6,4),t);s.scale.set(1,.8,1.8);const r=new Jt(e,t),o=new Jt(e,t);o.scale.x=-1,i.add(s,r,o),this.scene.add(i),this.birds.push({g:i,l:r,r:o,c:new T((Math.random()-.5)*60,0,20+(Math.random()-.5)*40),rad:8+Math.random()*14,sp:.25+Math.random()*.25,ph:Math.random()*6,h:11+Math.random()*8})}}buildClouds(){const t=new ge,e=new re({color:"#ffffff",roughness:1,flatShading:!0,fog:!1,emissive:"#ffffff",emissiveIntensity:.35}),n=new Wi(1,1);for(let i=0;i<16;i++){const s=new ge;for(let l=0;l<5;l++){const c=new Jt(n,e);c.position.set((l-2)*4+Math.random()*2,Math.random()*2,Math.random()*3);const h=3+Math.random()*3;c.scale.set(h,h*.6,h),s.add(c)}const r=Math.random()*Math.PI*2,o=140+Math.random()*100;s.position.set(Math.cos(r)*o,55+Math.random()*35,Math.sin(r)*o),s.lookAt(0,s.position.y,0),t.add(s)}return this.scene.add(t),t}update(t,e,n,i){this.swayUniform.value=e;const s=2,r=Math.round(n.x/s)*s,o=Math.round(n.z/s)*s;this.sun.target.position.set(r,0,o),this.sun.position.set(r+60,70,o+45),this.fill.position.set(n.x,n.y+2.6,n.z),this.fill.intensity+=((i?22:0)-this.fill.intensity)*Math.min(1,t*3);for(const l of this.birds){const c=e*l.sp+l.ph;l.g.position.set(l.c.x+Math.cos(c)*l.rad,l.h+Math.sin(c*2)*.8,l.c.z+Math.sin(c)*l.rad),l.g.rotation.y=-c;const h=Math.sin(e*14+l.ph)*.8;l.l.rotation.z=h,l.r.rotation.z=-h}this.clouds.rotation.y+=t*.003}}const wl=new Map;function Ae(a,t=.75){const e=a+t;let n=wl.get(e);return n||(n=new re({color:a,roughness:t}),wl.set(e,n)),n}const El=()=>({hipY:0,hipRx:0,hipRy:0,hipRz:0,spRx:0,spRy:0,spRz:0,hdRx:0,hdRy:0,hdRz:0,lSx:0,lSz:.08,lSy:0,lE:-.1,rSx:0,rSz:-.08,rSy:0,rE:-.1,lHx:0,lHz:0,lK:0,rHx:0,rHz:0,rK:0}),Xs=(a,t)=>{const e=new Fi(a,t,4,10);return e.translate(0,-t/2-a*.6,0),e};class ls{constructor(t){this.look=t;const e=t.height??(t.adult?1:.9);this.scale=e,this.skinMat=new re({color:t.skin,roughness:.6}),this.baseSkin=new It(t.skin);const n=Ae(t.shirt,.85),i=Ae(t.pants,.85),s=Ae(t.shoes??"#2a2a2a",.5),r=Ae(t.hair,.7),o=this.skinMat,l=Ae(t.skin,.6),c=(p,x,_,M=0,L=0,C=0,E=!0)=>{const R=new Jt(x,_);return R.position.set(M,L,C),R.castShadow=E,p.add(R),R};this.legLen=.78,this.root.add(this.hips),this.hips.position.y=this.legLen,c(this.hips,new Fi(.15,.1,4,10).rotateZ(Math.PI/2),i,0,0,0),t.skirt&&c(this.hips,new En(.17,.3,.42,12),i,0,-.16,0);for(const[p,x,_]of[[this.lH,this.lKn,1],[this.rH,this.rKn,-1]])p.position.set(.1*_,-.02,0),this.hips.add(p),c(p,Xs(.075,.24),t.skirt?l:i),x.position.y=-.38,p.add(x),c(x,Xs(.065,.24),t.skirt?l:i),c(x,new me(.13,.08,.24),s,0,-.37,.05).geometry.translate(0,0,0),t.skirt&&c(x,new En(.068,.068,.12,8),Ae("#f2f2f2"),0,-.3,0);this.spine.position.y=.05,this.hips.add(this.spine);const h=new Fi(.19,.24,4,12);if(h.scale(1,1,.72),h.translate(0,.25,0),c(this.spine,h,n),c(this.spine,new dn(.075,.025,6,12).rotateX(Math.PI/2),n,0,.5,0,!1),t.emblem&&c(this.spine,new Qr(.035,10),Ae("#1d3b7a"),.08,.38,.142,!1),t.tie){const p=c(this.spine,new me(.05,.26,.02),Ae(t.tie),0,.33,.145,!1);p.rotation.x=-.05}t.backpack&&(c(this.spine,new me(.3,.36,.14),Ae(t.backpack),0,.28,-.19),c(this.spine,new me(.22,.14,.05),Ae(t.backpack,.5),0,.18,-.28,!1));for(const[p,x,_]of[[this.lS,this.lEl,1],[this.rS,this.rEl,-1]])p.position.set(.23*_,.45,0),this.spine.add(p),c(p,new ve(.075,8,6),n),c(p,Xs(.058,.17),n),x.position.y=-.27,p.add(x),c(x,Xs(.05,.16),t.longSleeves?n:l),c(x,new ve(.058,8,6),l,0,-.27,.01);this.head.position.y=.6,this.spine.add(this.head),c(this.head,new En(.055,.06,.1,8),o,0,-.03,0);const u=new ve(.205,20,16);u.scale(1,1.06,.98),c(this.head,u,o,0,.17,0),c(this.head,new ve(.045,8,6).scale(.6,1,1),o,.2,.16,0,!1),c(this.head,new ve(.045,8,6).scale(.6,1,1),o,-.2,.16,0,!1),c(this.head,new ve(.03,8,6).scale(1,.9,1.1),o,0,.14,.2,!1);const f=Ae("#ffffff",.3),d=Ae("#1b1b1b",.2),g=p=>{const x=new ge;return x.position.set(p,.2,.17),c(x,new ve(.042,12,8).scale(1,1.15,.6),f,0,0,0,!1),c(x,new ve(.024,10,8).scale(1,1.2,.6),d,0,-.003,.02,!1),c(x,new ve(.007,6,4),f,.008,.01,.034,!1),this.head.add(x),x};this.eyeL=g(.072),this.eyeR=g(-.072);const v=Ae(t.hair==="#f0f0f0"?"#888":t.hair,.8);this.browL=c(this.head,new me(.075,.018,.02),v,.075,.27,.185,!1),this.browR=c(this.head,new me(.075,.018,.02),v,-.075,.27,.185,!1);const m=new dn(.045,.011,6,14,Math.PI);m.rotateZ(Math.PI),this.smile=c(this.head,m,Ae("#5a1e1e",.5),0,.085,.19,!1),this.mouthO=c(this.head,new ve(.04,12,8).scale(1,.8,.4),Ae("#4a1414",.5),0,.07,.185,!1),this.mouthO.visible=!1;for(const p of[.075,-.075]){const x=c(this.head,new ve(.018,8,6).scale(.8,1.3,.8),new re({color:"#6ec6ff",emissive:"#2a7fff",emissiveIntensity:.4,roughness:.1}),p,.15,.19,!1);x.visible=!1,this.tears.push(x)}if(t.glasses){const p=Ae("#222",.3);for(const x of[.072,-.072])c(this.head,new dn(.048,.008,6,16),p,x,.2,.2,!1);c(this.head,new me(.05,.008,.008),p,0,.21,.205,!1)}this.buildHair(t.hairStyle,r,c),this.root.scale.setScalar(e),this.root.traverse(p=>{p.isMesh&&(p.receiveShadow=!1)})}root=new ge;hips=new ge;spine=new ge;head=new ge;lS=new ge;rS=new ge;lEl=new ge;rEl=new ge;lH=new ge;rH=new ge;lKn=new ge;rKn=new ge;browL;browR;smile;mouthO;eyeL;eyeR;tears=[];skinMat;baseSkin;pose=El();legLen;anim="idle";expr="neutral";talking=!1;speed=0;phase=Math.random()*10;t=Math.random()*10;blinkT=2+Math.random()*3;redness=0;redTarget=0;lookTarget=null;steamT=0;onSteam;animSpeed=1;scale;buildHair(t,e,n){const i=this.head,s=(r=1,o=0)=>{const l=new ve(.218,20,12,0,Math.PI*2,0,Math.PI*.5);return l.rotateX(-.5),l.scale(1,r,1),n(i,l,e,0,.19,-.01+o)};switch(t){case"spiky":{s(1.05);for(let l=0;l<9;l++){const c=l/9*Math.PI*2;n(i,new sa(.055,.17,6),e,Math.cos(c)*.11,.38,Math.sin(c)*.11-.02).rotation.set(Math.sin(c)*.7,0,-Math.cos(c)*.7)}const r=n(i,new sa(.06,.2,6),e,0,.44,.02);r.rotation.x=.4;const o=n(i,new me(.3,.06,.08),e,0,.33,.16);o.rotation.x=.5;break}case"side":{s(1.04),n(i,new ve(.15,14,10).scale(1.45,.42,.85),e,.05,.345,.1).rotation.set(.25,0,-.22),n(i,new ve(.1,12,8).scale(1.2,.55,1.1),e,-.1,.36,-.02);break}case"buzz":s(.92);break;case"neat":{s(1);const r=n(i,new me(.36,.05,.1),e,0,.34,.15);r.rotation.x=.6;break}case"mohawk":{s(.9);for(let r=0;r<5;r++)n(i,new me(.05,.14,.08),e,0,.42,.12-r*.07);break}case"curly":{for(let r=0;r<22;r++){const o=Math.random()*Math.PI*2,l=Math.random()*1.2;n(i,new ve(.07,8,6),e,Math.cos(o)*Math.cos(l)*.2,.2+Math.sin(l)*.2,Math.sin(o)*Math.cos(l)*.2-.02)}break}case"long":case"pony":case"bun":{s(1.05);const r=n(i,new me(.38,.06,.1),e,0,.33,.15);if(r.rotation.x=.6,t==="long")n(i,new me(.42,.42,.16),e,0,.06,-.12),n(i,new me(.08,.36,.2),e,.2,.08,0),n(i,new me(.08,.36,.2),e,-.2,.08,0);else if(t==="pony"){const o=n(i,new Fi(.06,.22,4,8),e,0,.12,-.25);o.rotation.x=.4,n(i,new dn(.05,.015,6,10),Ae("#ff4fa3"),0,.27,-.22)}else n(i,new ve(.1,10,8),e,0,.38,-.15);break}case"bald":{n(i,new ve(.21,14,8,0,Math.PI*2,Math.PI*.35,Math.PI*.25),e,0,.17,-.01);break}}}get position(){return this.root.position}get yaw(){return this.root.rotation.y}set yaw(t){this.root.rotation.y=t}headWorld(t=new T){return this.head.getWorldPosition(t).add(new T(0,.18*this.scale,0))}setExpr(t){this.expr=t}target(t){const e=El(),n=Math.sin,i=Math.cos,s=n(t*2)*.012;switch(e.hipY=s,this.anim){case"idle":{e.spRx=.02+n(t*2)*.01,e.hdRx=n(t*.7)*.03,e.hdRy=n(t*.4)*.12,e.lSz=.1,e.rSz=-.1,e.lSx=n(t*2)*.03,e.rSx=-n(t*2)*.03;break}case"walk":case"run":case"dribble":{const r=this.anim==="run",o=this.phase,l=r?.95:.55;e.lHx=-n(o)*l,e.rHx=n(o)*l,e.lK=Math.max(0,n(o+1.6))*(r?1.4:.8)+.08,e.rK=Math.max(0,n(o+1.6+Math.PI))*(r?1.4:.8)+.08,e.lSx=n(o)*l*.8,e.rSx=-n(o)*l*.8,e.lE=r?-1.2:-.3,e.rE=r?-1.2:-.3,e.hipY=Math.abs(i(o))*(r?.06:.03)-(r?.03:0),e.spRx=r?.25:.06,e.spRy=n(o)*.08,e.hipRy=-n(o)*.08,e.hdRx=r?-.12:0,this.anim==="dribble"&&(e.rSx=-.6+Math.abs(n(t*8))*.3,e.rE=-.6);break}case"jump":{e.lHx=-.5,e.rHx=.2,e.lK=.9,e.rK=.4,e.lSx=-2.4,e.rSx=-2.4,e.lSz=.4,e.rSz=-.4;break}case"sit":case"sitWrite":case"sitRaise":case"sitSad":case"type":{e.hipY=-.31,e.lHx=-1.5,e.rHx=-1.5,e.lK=1.5,e.rK=1.5,e.lHz=.05,e.rHz=-.05,e.spRx=.08,e.lSx=-.6,e.rSx=-.6,e.lE=-.9,e.rE=-.9,this.anim==="sit"&&(e.hdRy=n(t*.5)*.15),this.anim==="sitWrite"&&(e.spRx=.3,e.hdRx=.35,e.rSx=-.9+n(t*9)*.06,e.rE=-.8,e.rSy=n(t*5)*.1),this.anim==="sitRaise"&&(e.rSx=-2.9,e.rSz=-.15,e.rE=-.1,e.spRz=.08,e.hdRz=-.05+n(t*6)*.03),this.anim==="sitSad"&&(e.spRx=.22,e.hdRx=.16,e.lSx=-.3,e.rSx=-.3),this.anim==="type"&&(e.lSx=-.8+n(t*14)*.08,e.rSx=-.8+n(t*13+1)*.08,e.lE=-1,e.rE=-1,e.hdRx=.1);break}case"talk":{e.hdRx=n(t*3)*.06,e.hdRy=n(t*1.3)*.12,e.rSx=-.5+n(t*2.5)*.25,e.rE=-.9+n(t*3)*.2,e.rSz=-.2,e.lSx=-.15+n(t*2)*.1,e.lE=-.4,e.lSz=.15,e.spRy=n(t*1.2)*.06;break}case"teach":{e.rSx=-1.6+n(t*1.5)*.4,e.rSz=-.5,e.rE=-.4,e.lSx=-.3,e.lE=-1.3,e.spRy=n(t*.8)*.3,e.hdRy=n(t*.8)*.5;break}case"point":{e.rSx=-1.5,e.rSz=-.1,e.rE=0,e.lSz=.15,e.spRy=-.1,e.hdRx=-.05;break}case"present":{e.lSx=-1,e.rSx=-1,e.lSz=.6,e.rSz=-.6,e.lE=-.4,e.rE=-.4;break}case"shrug":{e.lSz=.5,e.rSz=-.5,e.lE=-1.5,e.rE=-1.5,e.lSx=-.2,e.rSx=-.2,e.lSy=-.6,e.rSy=.6,e.hdRz=n(t*2)*.1;break}case"crossed":{e.lSx=-.5,e.rSx=-.5,e.lE=-1.9,e.rE=-1.9,e.lSy=.9,e.rSy=-.9,e.lSz=.25,e.rSz=-.25,e.hdRy=n(t*.5)*.1;break}case"raise":{e.rSx=-2.95,e.rSz=-.1,e.rE=-.05,e.lSz=.1,e.spRz=.06;break}case"cheer":{e.lSx=-2.8,e.rSx=-2.8,e.lSz=.4+n(t*10)*.15,e.rSz=-.4-n(t*10)*.15,e.hipY=Math.abs(n(t*6))*.08;break}case"whistle":{e.lSx=0,e.rSx=0,e.lSz=.05,e.rSz=-.05,e.lSy=.3,e.rSy=-.3,e.lE=-.3,e.rE=-.3,e.hdRx=-.25,e.hdRy=n(t*.9)*.5,e.spRy=n(t*.9)*.1;break}case"push":{e.lSx=-1.55,e.rSx=-1.55,e.lE=-.05,e.rE=-.05,e.lSz=-.1,e.rSz=.1,e.spRx=.3,e.lHx=-.5,e.rHx=.4,e.lK=.3;break}case"stumble":{const r=t*16;e.spRx=-.45,e.hdRx=-.3,e.lSx=-2.4+n(r)*.8,e.rSx=-2.4+n(r+2)*.8,e.lSz=.8,e.rSz=-.8,e.lHx=n(r*.7)*.6,e.rHx=-n(r*.7)*.6,e.lK=.4,e.rK=.4,e.hipRz=n(r*.5)*.15;break}case"fallen":{e.hipY=-.66,e.hipRx=-1.25,e.lHx=-1.3,e.rHx=-1,e.lK=.5,e.rK=.8,e.lSx=-.4,e.rSx=-.8,e.lSz=.9,e.rSz=-.9,e.hdRx=.6+n(t*2)*.1;break}case"brawl":{const r=t*18;e.lSx=-1.6+n(r)*1.3,e.rSx=-1.6+n(r+Math.PI)*1.3,e.lSz=.4+i(r)*.4,e.rSz=-.4-i(r)*.4,e.lE=-.6-n(r*1.3)*.5,e.rE=-.6-i(r*1.3)*.5,e.spRx=.2,e.spRy=n(r*.5)*.4,e.hdRz=n(r*.7)*.2,e.lHx=n(r*.8)*.5,e.rHx=-n(r*.8)*.5,e.lK=.5,e.rK=.5,e.hipY=Math.abs(n(r*.8))*.06;break}case"restrain":{e.lSx=-1.4,e.rSx=-1.4,e.lSz=.9+n(t*7)*.2,e.rSz=-.9-n(t*7)*.2,e.lE=-.2,e.rE=-.2,e.spRx=.15,e.lHx=-.4,e.rHx=.3,e.lK=.3;break}case"cower":{e.hipY=-.08,e.spRx=.35,e.lSx=-2,e.rSx=-2,e.lE=-1.9,e.rE=-1.9,e.lSz=-.25,e.rSz=.25,e.hdRx=.3,e.lK=.3,e.rK=.3,e.lHx=-.2,e.rHx=-.2;break}case"cry":{e.spRx=.15,e.hdRx=.1+n(t*7)*.05,e.lSx=-1.2,e.rSx=-1.2,e.lE=-1.7,e.rE=-1.7,e.lSz=-.05,e.rSz=.05,e.hipY=-.31,e.lHx=-1.5,e.rHx=-1.5,e.lK=1.5,e.rK=1.5,e.spRz=n(t*7)*.03;break}case"wipe":{e.hipY=-.31,e.lHx=-1.5,e.rHx=-1.5,e.lK=1.5,e.rK=1.5,e.spRx=.1,e.hdRx=.05,e.hdRz=-.12,e.rSx=-2.2,e.rSz=.1,e.rE=-2+n(t*4)*.15,e.rSy=.4,e.lSx=-.6,e.lE=-.9;break}case"rage":{e.hipY=-.31,e.lHx=-1.5,e.rHx=-1.5,e.lK=1.5,e.rK=1.5,e.spRx=-.05+n(t*30)*.015,e.hdRx=-.08,e.hdRz=n(t*40)*.025,e.lSx=-.8,e.rSx=-.8,e.lE=-1.6,e.rE=-1.6,e.lSz=.35,e.rSz=-.35;break}case"wash":{e.lSx=-1+n(t*9)*.15,e.rSx=-1-n(t*9)*.15,e.lE=-.7,e.rE=-.7,e.lSz=-.15,e.rSz=.15,e.spRx=.3,e.hdRx=.3;break}case"bow":{e.spRx=.6,e.hdRx=.3,e.lSx=.1,e.rSx=.1;break}case"phone":{e.rSx=-1,e.rE=-1.4,e.rSz=.1,e.hdRx=.4,e.lSz=.1;break}case"eat":{e.rSx=-1.1+Math.max(0,n(t*2.5))*.6,e.rE=-1.8,e.rSy=.4,e.hdRx=.05;break}}return e}update(t){this.t+=t*this.animSpeed;const e=this.t;(this.anim==="walk"||this.anim==="run"||this.anim==="dribble")&&(this.phase+=t*Math.max(2,this.speed*(this.anim==="run"?2.3:2.9)));const n=this.target(e),i=Math.min(1,t*(this.anim==="brawl"||this.anim==="stumble"?25:11)),s=this.pose,r=n;for(const c in r)s[c]+=(r[c]-s[c])*i;const o=this.pose;this.hips.position.y=this.legLen+o.hipY,this.hips.rotation.set(o.hipRx,o.hipRy,o.hipRz),this.spine.rotation.set(o.spRx,o.spRy,o.spRz);let l=o.hdRy;if(this.lookTarget){const c=this.root.position,h=Math.atan2(this.lookTarget.x-c.x,this.lookTarget.z-c.z)-this.root.rotation.y,u=Math.atan2(Math.sin(h),Math.cos(h));l=Math.max(-1.1,Math.min(1.1,u))}this.head.rotation.set(o.hdRx,l,o.hdRz),this.lS.rotation.set(o.lSx,o.lSy,o.lSz),this.rS.rotation.set(o.rSx,o.rSy,o.rSz),this.lEl.rotation.x=o.lE,this.rEl.rotation.x=o.rE,this.lH.rotation.set(o.lHx,0,o.lHz),this.rH.rotation.set(o.rHx,0,o.rHz),this.lKn.rotation.x=o.lK,this.rKn.rotation.x=o.rK,this.updateFace(t,e)}updateFace(t,e){this.blinkT-=t;let n=1;this.blinkT<0&&(n=.1,this.blinkT<-.12&&(this.blinkT=2+Math.random()*4));let i=0,s=0,r=.27,o=!0,l=!1,c=1,h=0;switch(this.expr){case"happy":c=1.3,r=.285;break;case"angry":i=.45,s=-.45,l=!0,r=.255;break;case"furious":i=.65,s=-.65,o=!1,h=.6+Math.sin(e*30)*.1,r=.25,n=Math.min(n,.6);break;case"sad":i=-.4,s=.4,l=!0,c=.8;break;case"cry":i=-.5,s=.5,o=!1,h=.5+Math.sin(e*8)*.2,n=Math.min(n,.35);break;case"surprised":r=.3,o=!1,h=.8,n=Math.max(n,1.25);break;case"smug":i=.15,s=-.35,c=1.1,r=.28;break;case"worried":i=-.3,s=.3,l=!0,c=.6,r=.285;break;case"bored":n=Math.min(n,.55),c=.7,l=!1;break}if(this.talking&&h===0){const f=Math.max(0,Math.sin(e*17)*.5+Math.sin(e*11)*.4);f>.15&&(h=f*.7,o=!1)}this.eyeL.scale.y=this.eyeR.scale.y=n,this.browL.rotation.z=i,this.browR.rotation.z=s,this.browL.position.y=this.browR.position.y=r,this.smile.visible=o,this.smile.rotation.z=l?Math.PI:0,this.smile.position.y=l?.055:.085,this.smile.scale.set(c,1,1),this.mouthO.visible=h>.05,this.mouthO.scale.set(.8+h*.3,.3+h,1);const u=this.expr==="cry"||this.anim==="cry";for(let f=0;f<2;f++){const d=this.tears[f];if(d.visible=u,u){const g=(e*.9+f*.5)%1;d.position.y=.17-g*.14,d.position.z=.19+g*.02,d.scale.setScalar(1-g*.4)}}this.redTarget=this.expr==="furious"?Math.max(this.redTarget,1):this.redTarget,this.redness+=(this.redTarget-this.redness)*Math.min(1,t*.8),this.skinMat.color.copy(this.baseSkin).lerp(new It("#ff2a1a"),this.redness*.8),this.skinMat.emissive.setRGB(this.redness*.35,0,0),this.redness>.6&&this.onSteam&&(this.steamT-=t,this.steamT<0&&(this.steamT=.12,this.onSteam(this.headWorld())))}resetFace(){this.redTarget=0,this.redness=0,this.expr="neutral",this.skinMat.color.copy(this.baseSkin),this.skinMat.emissive.setRGB(0,0,0)}}function m0(a,t,e,n="Bungee",i=128){const s=document.createElement("canvas"),r=s.getContext("2d");r.font=`900 ${i}px ${n}, Arial Black, sans-serif`;const o=Math.ceil(r.measureText(a).width)+i*.5;s.width=o,s.height=i*1.5,r.font=`900 ${i}px ${n}, Arial Black, sans-serif`,r.textAlign="center",r.textBaseline="middle",r.lineWidth=i*.14,r.strokeStyle=e,r.lineJoin="round",r.strokeText(a,o/2,s.height/2),r.fillStyle=t,r.fillText(a,o/2,s.height/2);const l=new oi(s);return l.colorSpace=Me,{t:l,aspect:o/s.height}}class g0{constructor(t){this.scene=t}parts=[];puffGeo=new Wi(.15,1);puffMat=new re({color:"#ffffff",roughness:1,transparent:!0,opacity:.9,flatShading:!0});dustMat=new re({color:"#efe6d2",roughness:1,transparent:!0,opacity:.95,flatShading:!0});icons=new Map;cloud=null;cloudT=0;texCache=new Map;steam(t){const e=new Jt(this.puffGeo,this.puffMat.clone());e.position.copy(t).add(new T((Math.random()-.5)*.3,.1,(Math.random()-.5)*.3)),this.scene.add(e),this.parts.push({m:e,v:new T((Math.random()-.5)*.6,1.4+Math.random(),(Math.random()-.5)*.6),life:0,max:1,grow:1.8,spin:2,fade:!0,base:.6+Math.random()*.5})}burst(t,e=10,n){for(let i=0;i<e;i++){const s=this.dustMat.clone();n&&s.color.set(n);const r=new Jt(this.puffGeo,s);r.position.copy(t),this.scene.add(r);const o=Math.random()*Math.PI*2;this.parts.push({m:r,v:new T(Math.cos(o)*2,Math.random()*1.5,Math.sin(o)*2),life:0,max:.6+Math.random()*.4,grow:2,spin:3,fade:!0,base:.8+Math.random()})}}tex(t,e,n){const i=t+e+n;let s=this.texCache.get(i);return s||(s=m0(t,e,n),this.texCache.set(i,s)),s}comic(t,e,n="#ffd23f",i=.9){const{t:s,aspect:r}=this.tex(t,n,"#1a1a1a"),o=new Ga(new Qs({map:s,transparent:!0,depthTest:!1}));o.renderOrder=999,o.position.copy(e).add(new T((Math.random()-.5)*.8,.3+Math.random()*.5,(Math.random()-.5)*.8)),o.scale.set(i*r,i,1),o.material.rotation=(Math.random()-.5)*.6,this.scene.add(o),this.parts.push({m:o,v:new T(0,.8,0),life:0,max:.9,grow:.6,spin:0,fade:!0,base:1})}icon(t,e,n="#ffd23f"){this.clearIcon(t);const{t:i,aspect:s}=this.tex(e,n,"#1a1a1a"),r=new Ga(new Qs({map:i,transparent:!0,depthTest:!1}));return r.renderOrder=998,r.scale.set(.5*s,.5,1),this.scene.add(r),this.icons.set(t,r),r}placeIcon(t,e,n){const i=this.icons.get(t);i&&i.position.set(e.x,e.y+.55+Math.sin(n*4)*.06,e.z)}clearIcon(t){const e=this.icons.get(t);e&&(this.scene.remove(e),e.material.dispose(),this.icons.delete(t))}clearIcons(){for(const t of[...this.icons.keys()])this.clearIcon(t)}startCloud(t){this.stopCloud();const e=new ge;for(let n=0;n<22;n++){const i=new Jt(this.puffGeo,this.dustMat),s=n/22*Math.PI*2;i.userData={a:s,r:.55+Math.random()*.35,y:.15+Math.random()*1.5,s:1.1+Math.random()*1.1,sp:3+Math.random()*3},e.add(i)}for(let n=0;n<5;n++){const{t:i,aspect:s}=this.tex("★","#ffe14d","#1a1a1a"),r=new Ga(new Qs({map:i,transparent:!0}));r.scale.set(.3*s,.3,1),r.userData={a:n*1.3,r:.9,y:1.9,s:1,sp:4,star:!0},e.add(r)}e.position.copy(t),this.scene.add(e),this.cloud=e,this.cloudT=0}stopCloud(){this.cloud&&(this.burst(this.cloud.position.clone().add(new T(0,.8,0)),16),this.scene.remove(this.cloud),this.cloud=null)}get cloudActive(){return!!this.cloud}moveCloud(t){this.cloud&&this.cloud.position.lerp(t,.1)}update(t){for(let e=this.parts.length-1;e>=0;e--){const n=this.parts[e];n.life+=t;const i=n.life/n.max;if(i>=1){this.scene.remove(n.m);const s=n.m.material;s&&s!==this.dustMat&&s!==this.puffMat&&s.dispose(),this.parts.splice(e,1);continue}if(n.m.position.addScaledVector(n.v,t),n.v.multiplyScalar(1-t*1.5),n.m.isSprite){const s=n.m,r=i<.15?i/.15*1.2:1.2-(i-.15)*.3,o=s.userData.baseScale??(s.userData.baseScale=s.scale.clone());s.scale.set(o.x*r,o.y*r,1),s.material.opacity=i>.6?1-(i-.6)/.4:1}else{const s=n.base*(1+i*n.grow);n.m.scale.setScalar(s),n.m.rotation.y+=n.spin*t;const r=n.m.material;n.fade&&(r.opacity=.9*(1-i))}}if(this.cloud){this.cloudT+=t;for(const e of this.cloud.children){const n=e.userData,i=n.a+this.cloudT*n.sp,s=n.r+Math.sin(this.cloudT*7+n.a)*.2;e.position.set(Math.cos(i)*s,n.y+Math.sin(this.cloudT*9+n.a*3)*.15,Math.sin(i)*s),n.star||e.scale.setScalar(n.s*(.85+Math.sin(this.cloudT*11+n.a)*.15))}}}}class Sc{constructor(t,e){this.char=t,this.school=e}path=[];speed=1.4;run=!1;resolve=null;stuckT=0;lastPos=new T;arriveAnim="idle";faceYaw=null;get moving(){return this.path.length>0}go(t,e=!1,n="idle"){return this.cancel(),this.path=t.map(i=>i.clone()),this.run=e,this.speed=e?3.6:1.45,this.arriveAnim=n,this.stuckT=0,this.lastPos.copy(this.char.position),this.path.length?new Promise(i=>this.resolve=i):Promise.resolve()}goNav(t,e=!1,n="idle",i=!1){const s=this.school.nav,r=this.char.position;if(i||r.distanceTo(t)<3&&Math.abs(r.y-t.y)<1)return this.go([t],e,n);const o=s.nearest(r),l=s.nearest(t),c=s.path(o,l);return c.length>1&&r.distanceTo(c[1])<c[0].distanceTo(c[1])&&c.shift(),c.push(t.clone()),this.go(c,e,n)}cancel(){this.path=[];const t=this.resolve;this.resolve=null,t&&t()}update(t){const e=this.char;if(!this.path.length){this.faceYaw!==null&&(e.yaw=si(e.yaw,this.faceYaw,Math.min(1,t*6)));return}const n=this.path[0],i=e.position,s=n.x-i.x,r=n.z-i.z,o=Math.hypot(s,r),l=this.speed*t;if(o<=Math.max(l,.08)){if(i.x=n.x,i.z=n.z,this.path.shift(),!this.path.length){e.anim=this.arriveAnim,e.speed=0;const h=this.resolve;this.resolve=null,h&&h();return}}else i.x+=s/o*l,i.z+=r/o*l,e.yaw=si(e.yaw,Math.atan2(s,r),Math.min(1,t*9)),e.anim=this.run?"run":"walk",e.speed=this.speed;const c=this.school.world.groundAt(i.x,i.z,i.y+.2);i.y+=(c.h-i.y)*Math.min(1,t*14),this.stuckT+=t,this.stuckT>2.5&&(i.distanceTo(this.lastPos)<.3&&this.path.length&&i.copy(this.path[0]),this.stuckT=0,this.lastPos.copy(i))}}function si(a,t,e){let n=t-a;return n=Math.atan2(Math.sin(n),Math.cos(n)),a+n*e}class x0{constructor(t,e,n){this.def=t,this.char=e,this.school=n,this.mover=new Sc(e,n);const i=[...t.lines];for(let s=i.length-1;s>0;s--){const r=Math.floor(Math.random()*(s+1));[i[s],i[r]]=[i[r],i[s]]}t.lines=i}mover;state="idle";timer=Math.random()*3;seat=null;lineIdx=0;talkCooldown=0;chatCenter=null;watchPoint=null;get id(){return this.def.id}get name(){return this.char.look.name}nextLine(){const t=this.def.lines[this.lineIdx%this.def.lines.length];return this.lineIdx++,t}release(){this.seat&&this.seat.occupant===this.id&&(this.seat.occupant=null),this.seat=null}}class v0{constructor(t,e){this.school=t,this.scene=e}npcs=[];phase={kind:"arrival"};playerPos=new T;groupRooms={"1A":"1A","3A":"3A","2B":"2B"};add(t,e,n,i=0){const s=new x0(t,e,this.school);return e.position.copy(n),e.yaw=i,this.scene.add(e.root),this.npcs.push(s),s}get(t){const e=this.npcs.find(n=>n.id===t);if(!e)throw new Error("npc "+t);return e}setPhase(t,e=!1){this.phase=t;for(const n of this.npcs)n.state!=="scripted"&&(n.release(),n.timer=e?0:Math.random()*2.2,n.state="idle",n.mover.cancel(),e&&this.placeInstant(n))}placeInstant(t){const e=this.seatFor(t);if(e&&this.phase.kind==="class"){t.char.position.copy(e.pos),t.char.yaw=e.yaw,t.char.anim="sit",t.state="seated",e.occupant=t.id,t.seat=e;return}const n=this.teacherSpot(t);if(n){t.char.position.copy(n.pos),t.char.yaw=n.yaw,t.state="teach",t.char.anim="teach";return}if(t.def.post){t.char.position.copy(t.def.post.pos),t.char.yaw=t.def.post.yaw,t.char.anim=t.def.post.anim,t.state="post";return}}roomForGroup(t){return this.phase.kind!=="class"?null:t==="2A"?this.phase.room??"2A":this.groupRooms[t]??null}seatFor(t){if(t.def.role!=="student"||!t.def.group)return null;const e=this.roomForGroup(t.def.group);if(!e)return null;const n=this.school.room(e),i=n.seats[(t.def.seatIndex??0)%n.seats.length]??null;return!i||!i.occupant||i.occupant===t.id?i:n.seats.find(s=>!s.occupant||s.occupant===t.id)??null}teacherSpot(t){if(t.def.role!=="teacher"||this.phase.kind!=="class")return null;let e=null;if(t.def.subject&&t.def.subject===this.phase.subject?e=this.phase.room??"2A":t.def.homeRoom&&(e=t.def.homeRoom),!e)return null;const n=this.school.room(e);return n.teacherPos?{pos:n.teacherPos,yaw:0}:null}update(t,e){for(const n of this.npcs){n.talkCooldown=Math.max(0,n.talkCooldown-t);const i=n.char.position.distanceToSquared(this.playerPos)>70*70;n.char.root.visible=!i,n.state!=="scripted"&&this.think(n,t,e),n.mover.update(t),i||n.char.update(t)}for(const n of this.npcs){if(n.mover.moving||n.state==="scripted"||n.state==="seated"||n.state==="post"||n.char.anim.startsWith("sit"))continue;const i=n.char.position,s=i.x-this.playerPos.x,r=i.z-this.playerPos.z,o=s*s+r*r;if(o<.64&&o>1e-4&&Math.abs(i.y-this.playerPos.y)<1){const l=Math.sqrt(o);i.x+=s/l*(.8-l)*.25,i.z+=r/l*(.8-l)*.25,this.school.world.collide(i,.28,1.5)}}for(let n=0;n<this.npcs.length;n++){const i=this.npcs[n];if(!i.mover.moving||i.state==="scripted")continue;for(let l=0;l<this.npcs.length;l++){if(n===l)continue;const c=this.npcs[l],h=i.char.position.x-c.char.position.x,u=i.char.position.z-c.char.position.z,f=h*h+u*u;if(f<.36&&f>1e-4&&Math.abs(i.char.position.y-c.char.position.y)<1){const d=Math.sqrt(f);i.char.position.x+=h/d*(.6-d)*.3,i.char.position.z+=u/d*(.6-d)*.3}}const s=i.char.position.x-this.playerPos.x,r=i.char.position.z-this.playerPos.z,o=s*s+r*r;if(o<.49&&o>1e-4){const l=Math.sqrt(o);i.char.position.x+=s/l*(.7-l)*.5,i.char.position.z+=r/l*(.7-l)*.5}}}think(t,e,n){t.timer-=e;const i=this.phase,s=t.char;if(t.state==="watch"&&t.watchPoint){if(!t.mover.moving){const c=Math.atan2(t.watchPoint.x-s.position.x,t.watchPoint.z-s.position.z);s.yaw=si(s.yaw,c,e*5)}return}if(t.state==="flee")return;if(t.def.post&&i.kind!=="class"||t.def.post&&t.def.role==="staff"){if(t.state!=="post"){t.state="post";const c=t.def.post;t.mover.goNav(c.pos,!1,c.anim).then(()=>{s.yaw=c.yaw})}return}if(i.kind==="class"){const c=this.seatFor(t);if(c){if(t.state==="seated"||t.state==="toSeat"){if(t.state==="seated"&&t.timer<0){t.timer=3+Math.random()*6;const u=Math.random();s.anim=u<.45?"sitWrite":u<.55?"sitRaise":u<.65?"sitSad":"sit",s.setExpr(u>.9?"bored":"neutral")}return}if(t.timer>0)return;t.state="toSeat",c.occupant=t.id,t.seat=c,t.mover.goNav(c.pos,!1,"sit").then(()=>{t.state==="toSeat"&&(t.state="seated",s.yaw=c.yaw,s.position.copy(c.pos),t.timer=Math.random()*4)});return}const h=this.teacherSpot(t);if(h){if(t.state==="teach"){t.mover.moving||(s.yaw=si(s.yaw,h.yaw,e*4),t.timer<0&&(t.timer=3+Math.random()*4,s.anim=Math.random()<.6?"teach":"talk",s.talking=s.anim==="talk"));return}if(t.timer>0)return;t.state="teach",t.mover.goNav(h.pos,!1,"teach");return}}if(t.def.role==="teacher"){if(t.timer>0||t.mover.moving)return;if(t.timer=6+Math.random()*10,Math.random()<.55){t.state="patrol";const c=Math.random()<.7?0:1,h=[-35,-20,-5,10,25,35];t.mover.goNav(new T(h[Math.floor(Math.random()*h.length)],c*3.6,5),!1,"crossed")}else{const h=this.school.room("maestros").seats.find(u=>!u.occupant);h&&(t.release(),h.occupant=t.id,t.seat=h,t.state="seated",t.mover.goNav(h.pos,!1,"sit").then(()=>{s.yaw=h.yaw,s.position.copy(h.pos)}))}return}if(t.timer>0||t.mover.moving){if(t.state==="chat"&&t.chatCenter&&!t.mover.moving){const c=Math.atan2(t.chatCenter.x-s.position.x,t.chatCenter.z-s.position.z);if(s.yaw=si(s.yaw,c,e*4),Math.random()<e*.4){const h=Math.random();s.anim=h<.4?"talk":h<.5?"shrug":h<.6?"cheer":h<.7?"eat":"idle",s.talking=s.anim==="talk",s.setExpr(Math.random()<.5?"happy":"neutral")}}return}s.talking=!1;const r=this.school.nav,o=Math.random(),l=i.kind==="arrival";if(o<.5){const c=l?this.school.hangouts.filter(d=>r.nodes[d].p.z>14&&r.nodes[d].p.x<30&&r.nodes[d].p.x>-24):this.school.hangouts,h=r.nodes[c[Math.floor((n*7+t.def.id.length*13)%c.length)]].p,u=Math.random()*Math.PI*2,f=h.clone().add(new T(Math.cos(u)*1.1,0,Math.sin(u)*1.1));t.state="chat",t.chatCenter=h.clone(),t.timer=10+Math.random()*14,t.mover.goNav(f,!1,"talk")}else if(o<.7&&!l)t.state="wander",t.timer=6+Math.random()*6,t.chatCenter=null,t.mover.goNav(r.nodes[r.tag("coopQueue")].p.clone().add(new T(Math.random()*1.5,0,(Math.random()-.5)*2)),!1,"idle");else if(o<.85&&!l){t.state="wander",t.chatCenter=null,t.timer=8+Math.random()*8;const c=new T(38+Math.random()*18,0,17+Math.random()*11);t.mover.goNav(c,Math.random()<.5,Math.random()<.5?"dribble":"cheer")}else{t.state="wander",t.chatCenter=null,t.timer=4+Math.random()*5;const c=this.school.hangouts[Math.floor(Math.random()*this.school.hangouts.length)];t.mover.goNav(r.nodes[c].p.clone().add(new T((Math.random()-.5)*2,0,(Math.random()-.5)*2)),!1,Math.random()<.3?"phone":"idle")}}watch(t,e,n=[]){for(const i of this.npcs)n.includes(i.id)||i.state==="scripted"||i.char.position.distanceTo(t)>e||(i.state="watch",i.watchPoint=t.clone(),i.mover.cancel(),i.char.setExpr("surprised"),i.char.anim=Math.random()<.4?"point":"idle")}unwatch(){for(const t of this.npcs)t.state==="watch"&&(t.state="idle",t.watchPoint=null,t.char.setExpr("neutral"),t.timer=Math.random()*2)}script(t){for(const e of t){const n=this.get(e);n.release(),n.mover.cancel(),n.state="scripted",n.char.talking=!1}}unscript(t){for(const e of t){const n=this.get(e);n.state==="scripted"&&(n.state="idle",n.timer=Math.random()*2,n.char.setExpr("neutral"))}}nearestTalkable(t,e=2.2,n=()=>!0){let i=null,s=e;for(const r of this.npcs){if(r.state==="flee"||!r.char.root.visible||!n(r))continue;const o=r.char.position.distanceTo(t);o<s&&Math.abs(r.char.position.y-t.y)<1.2&&(s=o,i=r)}return i}}const Bn={gonzalo:{name:"Gonzalo",shirt:"#2f7bff",pants:"#23262e",skin:"#e0ac69",hair:"#1d1612",hairStyle:"spiky",backpack:"#ffb300",voice:250},manuel:{name:"Manuel",shirt:"#e3262f",pants:"#23262e",skin:"#d29a5c",hair:"#120d0a",hairStyle:"side",backpack:"#3a3a3a",voice:230},juan:{name:"Juan",shirt:"#3cb371",pants:"#4a4a56",skin:"#f1c27d",hair:"#3b2414",hairStyle:"neat",glasses:!0,backpack:"#5c6bc0",voice:270},brayan:{name:"Brayan",shirt:"#26262b",pants:"#5c5c66",skin:"#c68642",hair:"#0d0d0d",hairStyle:"mohawk",voice:210},kevin:{name:"Kevin",shirt:"#ff8c1a",pants:"#3b3b44",skin:"#e8b98a",hair:"#2a1a10",hairStyle:"buzz",voice:290},ulises:{name:"Ulises",shirt:"#7a4dd8",pants:"#2e2e36",skin:"#a8703f",hair:"#140c08",hairStyle:"curly",voice:240},sofia:{name:"Sofía",shirt:"#ffd166",pants:"#3a4a7a",skin:"#f1c27d",hair:"#4a2c17",hairStyle:"pony",female:!0,voice:380},valeria:{name:"Valeria",shirt:"#f78fb3",pants:"#2f2f3a",skin:"#e0ac69",hair:"#1a1110",hairStyle:"long",female:!0,skirt:!0,voice:400},diego:{name:"Diego",shirt:"#9e9e9e",pants:"#3e3e48",skin:"#d8a777",hair:"#3a2a1a",hairStyle:"side",glasses:!0,voice:260},ximena:{name:"Ximena",shirt:"#80deea",pants:"#444",skin:"#c68642",hair:"#120c0a",hairStyle:"bun",female:!0,voice:390},fer:{name:"Fer",shirt:"#aed581",pants:"#33333d",skin:"#f1c27d",hair:"#6a3c1c",hairStyle:"spiky",voice:280},andrea:{name:"Andrea",shirt:"#ce93d8",pants:"#2b2b33",skin:"#ffdbac",hair:"#2a1a0e",hairStyle:"long",female:!0,voice:410},tonito:{name:"Toñito",shirt:"#ffab91",pants:"#3a3a3a",skin:"#a8703f",hair:"#0d0806",hairStyle:"buzz",voice:300,height:.82},s1:{name:"Karla",shirt:"#b39ddb",pants:"#333",skin:"#e0ac69",hair:"#2b1a10",hairStyle:"pony",female:!0,voice:400,height:.85},s2:{name:"Iván",shirt:"#90a4ae",pants:"#2b2b33",skin:"#c68642",hair:"#120c0a",hairStyle:"buzz",voice:280,height:.85},s3:{name:"Pau",shirt:"#ffe082",pants:"#37474f",skin:"#f1c27d",hair:"#5d3a1a",hairStyle:"long",female:!0,voice:410,height:.86},s4:{name:"Emilio",shirt:"#4db6ac",pants:"#333",skin:"#d8a777",hair:"#1a1a1a",hairStyle:"curly",voice:270,height:.86},s5:{name:"Renata",shirt:"#f48fb1",pants:"#2b2b33",skin:"#8d5524",hair:"#0d0806",hairStyle:"bun",female:!0,voice:390,height:.93},s6:{name:"Mateo",shirt:"#c5e1a5",pants:"#4e342e",skin:"#ffdbac",hair:"#7b4b22",hairStyle:"neat",voice:250,height:.94},s7:{name:"Luis",shirt:"#795548",pants:"#222",skin:"#c68642",hair:"#140c08",hairStyle:"spiky",voice:240,height:.95},s8:{name:"Dani",shirt:"#fff59d",pants:"#3a3a44",skin:"#e0ac69",hair:"#2a1a10",hairStyle:"side",voice:300,height:.9},s9:{name:"Majo",shirt:"#80cbc4",pants:"#2b2b33",skin:"#f1c27d",hair:"#3b2414",hairStyle:"pony",female:!0,voice:400,height:.9},s10:{name:"Chuyito",shirt:"#bcaaa4",pants:"#333",skin:"#a8703f",hair:"#0d0806",hairStyle:"mohawk",voice:270,height:.9},ramirez:{name:"Profe Ramírez",shirt:"#dcd6c4",pants:"#5a4a3a",skin:"#e0ac69",hair:"#9a9a9a",hairStyle:"bald",glasses:!0,tie:"#8b1e1e",adult:!0,longSleeves:!0,voice:150},lupita:{name:"Maestra Lupita",shirt:"#9c6ade",pants:"#3b3b5c",skin:"#e8b98a",hair:"#4a2c17",hairStyle:"bun",female:!0,skirt:!0,adult:!0,longSleeves:!0,voice:330,height:.97},herrera:{name:"Profe Herrera",shirt:"#fafafa",pants:"#37474f",skin:"#f1c27d",hair:"#d0d0d0",hairStyle:"curly",glasses:!0,adult:!0,longSleeves:!0,voice:170},galindo:{name:"Profe Galindo",shirt:"#8d6e63",pants:"#3e2723",skin:"#c68642",hair:"#6d6d6d",hairStyle:"neat",adult:!0,longSleeves:!0,voice:140,tie:"#2e4a2e"},karen:{name:"Miss Karen",shirt:"#4dd0e1",pants:"#263238",skin:"#ffdbac",hair:"#d9b26a",hairStyle:"long",female:!0,adult:!0,voice:360,height:.97},tono:{name:"Profe Toño",shirt:"#607d8b",pants:"#263238",skin:"#d8a777",hair:"#1a1a1a",hairStyle:"spiky",glasses:!0,adult:!0,voice:190},elena:{name:"Profa. Elena",shirt:"#a1887f",pants:"#4e342e",skin:"#e0ac69",hair:"#2b1a10",hairStyle:"long",female:!0,adult:!0,longSleeves:!0,voice:340,height:.96},chuy:{name:"Profe Chuy",shirt:"#9ccc65",pants:"#33691e",skin:"#a8703f",hair:"#222",hairStyle:"buzz",adult:!0,voice:160},directora:{name:"Directora Martínez",shirt:"#3c3c58",pants:"#2a2a3a",skin:"#e8b98a",hair:"#0d0d0d",hairStyle:"bun",female:!0,skirt:!0,glasses:!0,adult:!0,longSleeves:!0,voice:300},beto:{name:"Don Beto",shirt:"#5d6b3a",pants:"#2e3420",skin:"#a8703f",hair:"#bdbdbd",hairStyle:"buzz",adult:!0,voice:130},cuca:{name:"Doña Cuca",shirt:"#ffcc80",pants:"#5d4037",skin:"#c68642",hair:"#9e9e9e",hairStyle:"bun",female:!0,skirt:!0,adult:!0,voice:320,height:.93},pepe:{name:"Don Pepe",shirt:"#8a7f6a",pants:"#4a4234",skin:"#8d5524",hair:"#555",hairStyle:"bald",adult:!0,voice:140}},Tl={gonzalo:"blue",manuel:"red",juan:"green"};function _0(a){return Tl[a]?Tl[a]:Bn[a]?.adult?"gray":"gold"}const zt=(a,t,e)=>new T(a,t,e);function y0(a){const t=[{id:"juan",role:"student",group:"2A",seatIndex:4,start:zt(6.5,0,28.5),lines:["¿Viste el partido de ayer? Yo tampoco, me dormí.","Dicen que el Profe Ramírez nunca ha faltado. Ni cuando tembló.","Hoy es día de civil y Kevin vino con la misma playera de siempre.","Si me ves corriendo, no preguntes. Sólo corre también.","Me late que hoy va a ser un día tranquilo. ¿Qué podría pasar?"]},{id:"brayan",role:"student",group:"2A",seatIndex:12,start:zt(-10,0,36),lines:["¿Qué me ves? Ah, nada, ya.","Yo soy el que más sabe de Free Fire de toda la escuela.","La neta la escuela está bien aburrida."]},{id:"kevin",role:"student",group:"2A",seatIndex:13,start:zt(-11,0,37),lines:["Jajaja. No sé de qué me río, pero jajaja.","¿Ya escuchaste el rap de Vegetta777? Está bien épico.",'Brayan dice que somos un "escuadrón". Yo nomás lo sigo.']},{id:"ulises",role:"student",group:"2A",seatIndex:14,start:zt(-9,0,37.5),lines:["Shhh, estoy pensando.","Yo no hice nada. ¿De qué estábamos hablando?","¿Tienes chicle? ¿No? Ok."]},{id:"sofia",role:"student",group:"2A",seatIndex:1,start:zt(-2,0,22),lines:["Estoy organizando la kermés. ¿Quieres comprar boletos? Es broma, ¡pero cómpralos!","Me encanta Español. La Maestra Lupita lee bien bonito.","¿Tú también sientes que el receso dura cinco minutos?"]},{id:"valeria",role:"student",group:"2A",seatIndex:2,start:zt(-1,0,23),lines:["Ximena y yo vamos a hacer un TikTok en el patio. No salgas.","¿Ya viste que la cooperativa tiene Gansitos otra vez?","Mi mamá dice que en sus tiempos la escuela era más difícil. Lo dudo."]},{id:"diego",role:"student",group:"2A",seatIndex:8,start:zt(12,0,16),lines:["Estoy leyendo un libro de dinosaurios. Bueno, viendo los dibujos.","La computadora 7 del salón de cómputo tiene Buscaminas. No le digas a nadie.","Una vez me quedé encerrado en el baño una hora. Fue mi mejor hora."]},{id:"ximena",role:"student",group:"2A",seatIndex:3,start:zt(-1.5,0,21.5),lines:["¿Te sabes la tabla del 7? Yo tampoco. Somos un equipo.","Hoy hay examen de Historia… o era mañana. Ya no sé.","¡Me gusta tu playera!"]},{id:"fer",role:"student",group:"2A",seatIndex:9,start:zt(40,0,22),lines:["¿Una reta de básquet en el receso?","Si encesto desde media cancha me invitas una torta.","Toñito siempre gana en fut. Es chiquito pero rápido."]},{id:"andrea",role:"student",group:"2A",seatIndex:10,start:zt(10,0,24),lines:["Estoy a dos materias de convertirme en leyenda.","La bandera se ve bien bonita hoy, ¿no?","Doña Cuca me fía. Es porque soy encantadora."]},{id:"tonito",role:"student",group:"2A",seatIndex:11,start:zt(42,0,24),lines:["No soy chiquito, soy compacto.","¡Gol! Bueno, no ahorita. Pero hace rato sí.","Mi hermano estudió aquí y dice que el baño de abajo está embrujado."]},{id:"s1",role:"student",group:"1A",seatIndex:0,start:zt(-18,0,30),lines:["Soy de primero. Todo es enorme aquí.","¿Dónde queda el laboratorio? Llevo tres vueltas."]},{id:"s2",role:"student",group:"1A",seatIndex:1,start:zt(-17,0,31),lines:["Los de tercero dan miedo.","Me perdí buscando el salón de computación."]},{id:"s3",role:"student",group:"1A",seatIndex:5,start:zt(-19,0,29),lines:["¿Ustedes también tienen al Profe Ramírez? Pobres.","Me gusta el receso. Es mi materia favorita."]},{id:"s4",role:"student",group:"1A",seatIndex:6,start:zt(-16,0,29.5),lines:["Traje torta de tamal. Nutrición avanzada.","¿Ya te sabes el himno completo? Yo hasta la segunda estrofa."]},{id:"s5",role:"student",group:"3A",seatIndex:0,start:zt(15,0,40),lines:["Ya casi salgo de la secu. Los voy a extrañar… no.","En tercero todo es exámenes y guía de COMIPEMS."]},{id:"s6",role:"student",group:"3A",seatIndex:1,start:zt(16,0,41),lines:["Cuando yo estaba en segundo, era leyenda. Ahora soy mito.","Un consejo: nunca entres al baño cuando hay bolita."]},{id:"s7",role:"student",group:"3A",seatIndex:2,start:zt(14,0,41),lines:["¿Juegas fut? Nos falta portero.","El conserje Don Pepe sabe todos los chismes de la escuela."]},{id:"s8",role:"student",group:"2B",seatIndex:0,start:zt(50,0,38),lines:["Somos del 2° B. Los mejores, obvio.","¿Ustedes también tienen examen sorpresa? Ya no sería sorpresa."]},{id:"s9",role:"student",group:"2B",seatIndex:1,start:zt(51,0,39),lines:["Me gusta el salón de arriba, hay mejor vista.","¿Viste las palomas del patio? Una me robó una papa."]},{id:"s10",role:"student",group:"2B",seatIndex:2,start:zt(49,0,37),lines:["¡Pásala, pásala!","No me hables, estoy concentrado en ganar."]},{id:"ramirez",role:"teacher",subject:"math",start:zt(14,0,-6),lines:["Las matemáticas están en todo, joven. Hasta en el receso: 30 minutos menos lo que tarda en llegar.","No corra en los pasillos.","¿Hizo la tarea? No me conteste, ya lo sé."]},{id:"lupita",role:"teacher",subject:"espanol",start:zt(-20,0,5),lines:["Leer te lleva a otros mundos. Y a pasar el examen.","Esa ortografía, por favor.","Nada de groserías en mi pasillo."]},{id:"herrera",role:"teacher",subject:"ciencias",start:zt(-34,3.6,5),lines:["La ciencia es curiosidad con bata.","No toques ese frasco. Ni ese. Mejor no toques nada."]},{id:"galindo",role:"teacher",subject:"historia",start:zt(12,0,-4),lines:["Quien no conoce su historia, está condenado a repetir el examen.","En mis tiempos, el receso se ganaba."]},{id:"karen",role:"teacher",subject:"ingles",start:zt(16,0,-7),lines:["Good morning! ¿Ya viste el vocabulario?","Practice makes perfect. Y la tarea también."]},{id:"tono",role:"teacher",subject:"tecnologia",start:zt(-22,3.6,5),lines:["¿Ya intentaste apagarla y prenderla otra vez?","Nada de jueguitos en las compus. Bueno, Buscaminas sí."]},{id:"elena",role:"teacher",homeRoom:"1A",start:zt(-34,0,-11),lines:["Los de primero son muy tiernos. Y muy ruidosos."]},{id:"chuy",role:"teacher",homeRoom:"3A",start:zt(-10,0,-11),lines:["¡A formarse para los honores el lunes!","Educación Física es vida."]},{id:"directora",role:"staff",start:zt(2,0,-12),post:{pos:zt(2,0,-12),yaw:0,anim:"sit"},lines:["Buenos días. ¿Necesitas algo de la dirección?","Esta escuela tiene reglas. Y yo las conozco todas."]},{id:"beto",role:"staff",start:zt(6.4,0,46.8),post:{pos:zt(6.4,0,46.8),yaw:Math.PI,anim:"crossed"},lines:["Buenos días, joven. Pásele.","Aquí nadie entra sin credencial. Bueno, usted sí, ya lo conozco.","Treinta años cuidando esta puerta."]},{id:"cuca",role:"staff",start:zt(-45,0,22),post:{pos:zt(-45,0,22),yaw:Math.PI/2,anim:"idle"},lines:["¿Qué va a llevar, mijo?","Las tortas de hoy están bien buenas.","No hay fiado. Bueno… depende."]},{id:"pepe",role:"staff",start:zt(36,0,5),post:{pos:zt(36.5,0,4.5),yaw:Math.PI,anim:"crossed"},lines:["Yo limpio, yo escucho, yo sé todo.","Cuidado, está mojado el piso.","En esta escuela pasan cosas, joven. Muchas cosas."]}],e=a==="gonzalo"?"manuel":"gonzalo";return t.unshift({id:e,role:"student",group:"2A",seatIndex:e==="gonzalo"?5:6,start:zt(e==="gonzalo"?8:-6,0,e==="gonzalo"?20:34),lines:e==="gonzalo"?["¡Quiubo, Manuel! ¿Qué onda?","Hoy me siento con suerte. No sé por qué.","Si me ves distraído es porque estoy pensando en la torta del receso."]:["Hola, Gonzalo.","…Sólo quiero que este día pase tranquilo.","No me gusta mucho la bolita de Brayan."]}),t}const M0={gonzalo:5,manuel:6};class Al{constructor(t,e){this.char=t,this.school=e,this.mover=new Sc(t,e)}vel=new T;grounded=!0;camYaw=Math.PI;camPitch=.25;seat=null;scripted=!1;mover;stepPhase=0;surface="concrete";sens=1;invertY=!1;get pos(){return this.char.position}sit(t){this.seat=t,t.occupant="player",this.pos.copy(t.pos),this.char.yaw=t.yaw,this.char.anim="sit",this.vel.set(0,0,0)}stand(){if(!this.seat)return;const t=this.seat;t.occupant=null,this.seat=null,this.pos.x-=Math.sin(t.yaw)*.75,this.pos.z-=Math.cos(t.yaw)*.75,this.char.yaw=t.yaw+Math.PI,this.char.anim="idle"}look(t){const e=.0024*this.sens;this.camYaw-=t.mouseDX*e,this.camPitch+=t.mouseDY*e*(this.invertY?-1:1),this.camPitch=Math.max(-.5,Math.min(1.15,this.camPitch)),t.down("ArrowLeft")&&(this.camYaw+=.03),t.down("ArrowRight")&&(this.camYaw-=.03)}update(t,e,n){const i=this.char;if(this.scripted){this.mover.update(t),i.update(t);return}if(this.seat){i.update(t);return}const s=this.school.world;let r=0,o=0;e&&(e.down("KeyW")&&(o+=1),e.down("KeyS")&&(o-=1),e.down("KeyA")&&(r+=1),e.down("KeyD")&&(r-=1));const l=!!e&&(e.down("ShiftLeft")||e.down("ShiftRight")),c=Math.hypot(r,o),h=l?5.2:2.4,u=Math.sin(this.camYaw),f=Math.cos(this.camYaw),d=Math.cos(this.camYaw),g=-Math.sin(this.camYaw);let v=0,m=0;c>0&&(v=(u*o+d*r)/c,m=(f*o+g*r)/c);const p=this.grounded?14:4;this.vel.x+=(v*h-this.vel.x)*Math.min(1,t*p),this.vel.z+=(m*h-this.vel.z)*Math.min(1,t*p),e&&this.grounded&&e.consume("Space")&&(this.vel.y=5.2,this.grounded=!1,tt.whoosh()),this.vel.y-=16*t;const x=this.pos;x.x+=this.vel.x*t,x.z+=this.vel.z*t,x.y+=this.vel.y*t,s.collide(x,.3,1.6);for(const L of n){if(Math.abs(L.y-x.y)>1.2)continue;const C=x.x-L.x,E=x.z-L.z,R=C*C+E*E;if(R<.36&&R>1e-5){const S=Math.sqrt(R);x.x+=C/S*(.6-S),x.z+=E/S*(.6-S)}}const _=s.groundAt(x.x,x.z,Math.max(x.y,x.y-this.vel.y*t),.2);x.y<=_.h+.001?(!this.grounded&&this.vel.y<-6&&tt.thud(),x.y=_.h,this.vel.y=0,this.grounded=!0):this.grounded&&x.y-_.h<.45&&this.vel.y<=0?(x.y=_.h,this.vel.y=0):this.grounded=!1,this.surface=_.surface,x.y<-5&&(x.copy(this.school.poi.spawn),this.vel.set(0,0,0));const M=Math.hypot(this.vel.x,this.vel.z);M>.3&&(i.yaw=si(i.yaw,Math.atan2(this.vel.x,this.vel.z),Math.min(1,t*12))),i.anim=this.grounded?M>3.6?"run":M>.3?"walk":"idle":"jump",i.speed=M*.75,this.grounded&&M>.5&&(this.stepPhase+=t*M*(l?1.05:1.4),this.stepPhase>1&&(this.stepPhase-=1,tt.step2(this.surface,l))),i.update(t)}}class Rl{constructor(t,e){this.camera=t,this.school=e}pos=new T;look=new T;dist=4;curDist=4;cine=!1;from={p:new T,l:new T};to={p:new T,l:new T};tw=0;twDur=0;resolve=null;shake=0;tmpA=new T;tmpB=new T;follow=null;shot(t,e,n=0){return this.cine=!0,this.follow=null,this.resolve&&(this.resolve(),this.resolve=null),n<=0?(this.pos.copy(t),this.look.copy(e),this.to.p.copy(t),this.to.l.copy(e),this.tw=this.twDur=0,Promise.resolve()):(this.from.p.copy(this.pos),this.from.l.copy(this.look),this.to.p.copy(t),this.to.l.copy(e),this.tw=0,this.twDur=n,new Promise(i=>this.resolve=i))}release(){this.cine=!1,this.follow=null,this.resolve&&(this.resolve(),this.resolve=null)}update(t,e,n){const i=this.camera;if(this.cine){if(this.follow){const s=this.follow.target();this.to.l.copy(s),this.to.p.copy(s).add(this.follow.offset),this.pos.lerp(this.to.p,Math.min(1,t*3)),this.look.lerp(this.to.l,Math.min(1,t*4))}else if(this.twDur>0){this.tw=Math.min(this.twDur,this.tw+t);const s=this.tw/this.twDur,r=s<.5?2*s*s:1-Math.pow(-2*s+2,2)/2;if(this.pos.lerpVectors(this.from.p,this.to.p,r),this.look.lerpVectors(this.from.l,this.to.l,r),s>=1&&(this.twDur=0,this.resolve)){const o=this.resolve;this.resolve=null,o()}}i.position.copy(this.pos)}else{const s=this.tmpA.copy(e.pos).add(new T(0,e.seat?1.25:1.55,0)),r=n?3:this.dist,o=e.camYaw,l=e.camPitch,c=this.tmpB.set(-Math.sin(o)*Math.cos(l),Math.sin(l),-Math.cos(o)*Math.cos(l)),h=s.clone().addScaledVector(c,r);h.x+=Math.cos(o)*-.35,h.z+=-Math.sin(o)*-.35;const u=this.school.world.raycast(s,h),f=Math.max(.6,r*u-.25);this.curDist+=(f-this.curDist)*Math.min(1,t*(f<this.curDist?20:4));const d=s.clone().addScaledVector(c,this.curDist);d.x+=Math.cos(o)*-.35*(this.curDist/r),d.z+=-Math.sin(o)*-.35*(this.curDist/r),this.pos.lerp(d,Math.min(1,t*18)),this.look.lerp(s,Math.min(1,t*20)),i.position.copy(this.pos)}this.shake>0&&(this.shake=Math.max(0,this.shake-t*2),i.position.x+=(Math.random()-.5)*this.shake*.15,i.position.y+=(Math.random()-.5)*this.shake*.15),i.lookAt(this.look)}}const Ht=a=>document.querySelector(a),Cl={KeyE:"E",KeyF:"F",KeyA:"A",KeyD:"D",KeyW:"W",KeyS:"S",Space:"␣",KeyQ:"Q"};class S0{dialog=null;choice=null;qte=null;typeAcc=0;busy(){return!!(this.dialog||this.choice||this.qte)}reset(){this.dialog=null,this.choice=null,this.qte=null,["#dialog","#choices","#qte","#banner"].forEach(t=>Ht(t).classList.add("hidden")),Ht("#dialog-text").textContent="",this.cinematic(!1)}showHUD(t){Ht("#hud").classList.toggle("hidden",!t)}setChar(t,e){Ht("#hud-char-name").textContent=t,Ht("#hud-char-dot").style.background=e,Ht("#hud-char-dot").style.color=e}setClock(t,e){Ht("#hud-clock").textContent=t,Ht("#hud-period").textContent=e}setMission(t,e){const n=Ht("#hud-mission-title"),i=Ht("#hud-objective");i.textContent!==e&&i.animate([{transform:"scale(1.15)",color:"#ffd23f"},{transform:"scale(1)",color:"#fff"}],{duration:600}),n.textContent=t,i.textContent=e,Ht("#hud-mission").classList.toggle("hidden",!e)}setDistance(t){Ht("#hud-distance").textContent=t}prompt(t,e="E"){const n=Ht("#prompt");if(!t){n.classList.add("hidden");return}n.classList.remove("hidden"),n.innerHTML=`<kbd>${e}</kbd><span>${t}</span>`}lockHint(t){Ht("#lock-hint").classList.toggle("hidden",!t)}cinematic(t){document.body.classList.toggle("cinematic",t)}waypoint(t,e,n){const i=Ht("#waypoint");if(n===null){i.classList.add("hidden");return}i.classList.remove("hidden"),i.style.left=t+"px",i.style.top=e+"px",i.querySelector(".wp-dist").textContent=n}toast(t,e=3200){const n=document.createElement("div");n.className="toast",n.textContent=t,Ht("#notify").appendChild(n),tt.pop(),setTimeout(()=>{n.classList.add("out"),setTimeout(()=>n.remove(),450)},e)}banner(t,e,n="",i=!1,s=3200){const r=Ht("#banner");return r.classList.remove("hidden"),r.classList.toggle("red",i),r.querySelector(".banner-kicker").textContent=t,r.querySelector(".banner-title").textContent=e,r.querySelector(".banner-sub").textContent=n,r.style.animation="none",r.offsetWidth,r.style.animation="",new Promise(o=>setTimeout(()=>{r.classList.add("hidden"),o()},s))}fade(t,e=500){const n=Ht("#fade");return n.style.transition=`opacity ${e}ms ease`,n.style.opacity=String(t),new Promise(i=>setTimeout(i,e+30))}say(t,e,n="gold",i=260,s,r=0){this.dialog&&this.dialog.resolve();const o=Ht("#dialog-name");o.textContent=t,o.className=n==="gold"?"":n,o.style.display=t?"":"none";const l=Ht("#dialog-text");l.textContent="";const c=e===e.toUpperCase()&&/[A-ZÁÉÍÓÚÑ]{3}/.test(e);return l.classList.toggle("shout",c),Ht("#dialog").classList.remove("hidden"),s?.(!0),new Promise(h=>{this.dialog={full:e,shown:0,voice:i,onTalk:s,auto:r,elapsed:0,resolve:()=>{s?.(!1),h()}}})}hideDialog(){Ht("#dialog").classList.add("hidden")}choose(t){const e=Ht("#choices");return e.innerHTML="",e.classList.remove("hidden"),t.forEach((n,i)=>{const s=document.createElement("button");s.innerHTML=`<span class="k">${i+1}</span>${n}`,s.style.animationDelay=`${i*60}ms`,s.onmouseenter=()=>{this.selectChoice(i),tt.hover()},s.onclick=r=>{r.stopPropagation(),this.pickChoice(i)},e.appendChild(s)}),new Promise(n=>{this.choice={opts:t,sel:0,resolve:n},this.selectChoice(0)})}selectChoice(t){this.choice&&(this.choice.sel=t,[...Ht("#choices").children].forEach((e,n)=>e.classList.toggle("sel",n===t)))}pickChoice(t){if(!this.choice)return;const e=this.choice.resolve;this.choice=null,Ht("#choices").classList.add("hidden"),tt.confirm(),e(t)}qteMash(t,e,n,i,s){return this.startQte({mode:"mash",keys:[e],need:n,time:i,total:i,hint:s,title:t})}qteSeq(t,e,n,i){return this.startQte({mode:"seq",keys:e,need:e.length,time:n,total:n,hint:i,title:t})}startQte(t){return Ht("#qte").classList.remove("hidden"),Ht("#qte-title").textContent=t.title,Ht("#qte-hint").textContent=t.hint,Ht("#qte-key").textContent=Cl[t.keys[0]]??t.keys[0].replace("Key",""),Ht("#qte-fill").style.width="0%",new Promise(e=>{this.qte={...t,idx:0,count:0,hits:0,resolve:e}})}update(t,e){if(this.dialog){const n=this.dialog;if(n.elapsed+=t,n.shown<n.full.length){this.typeAcc+=t*55;let s=!1;for(;this.typeAcc>=1&&n.shown<n.full.length;){n.shown++,this.typeAcc-=1;const r=n.full[n.shown-1];/[a-záéíóúñ]/i.test(r)&&n.shown%3===0&&(s=!0)}s&&tt.voice(n.voice),Ht("#dialog-text").textContent=n.full.slice(0,n.shown),n.shown>=n.full.length&&n.onTalk?.(!1)}e.consume("Space")||e.consume("Enter")||e.consume("KeyE")||e.consume("KeyF")||e.clicked?n.shown<n.full.length?(n.shown=n.full.length,Ht("#dialog-text").textContent=n.full,n.onTalk?.(!1)):(this.dialog=null,this.hideDialog(),tt.click(),n.resolve()):n.auto&&n.shown>=n.full.length&&n.elapsed>n.auto&&(this.dialog=null,this.hideDialog(),n.resolve()),e.clicked=!1}if(this.choice){const n=this.choice;for(let i=0;i<n.opts.length;i++)if(e.consume("Digit"+(i+1))){this.pickChoice(i);return}(e.consume("KeyW")||e.consume("ArrowUp"))&&(this.selectChoice((n.sel+n.opts.length-1)%n.opts.length),tt.hover()),(e.consume("KeyS")||e.consume("ArrowDown"))&&(this.selectChoice((n.sel+1)%n.opts.length),tt.hover()),(e.consume("Enter")||e.consume("Space")||e.consume("KeyE"))&&this.pickChoice(n.sel)}if(this.qte){const n=this.qte;n.time-=t;const i=Ht("#qte-key"),s=n.keys[n.mode==="seq"?n.idx:0];e.consume(s)&&(n.count++,n.hits++,i.classList.add("hit"),setTimeout(()=>i.classList.remove("hit"),80),tt.whoosh(),n.mode==="seq"&&(n.idx++,n.idx<n.keys.length&&(i.textContent=Cl[n.keys[n.idx]]??n.keys[n.idx].replace("Key","")))),Ht("#qte-fill").style.width=`${Math.min(100,n.count/n.need*100)}%`,(n.count>=n.need||n.time<=0)&&(this.qte=null,Ht("#qte").classList.add("hidden"),n.resolve(n.hits/n.need))}}screen(t,e){Ht("#"+t).classList.toggle("hidden",!e)}isOpen(t){return!Ht("#"+t).classList.contains("hidden")}}const Q=new S0,Pi=(a,t,e)=>new T(a,t,e);class b0{constructor(t){this.game=t}active=!1;timers=[];update(t){for(let e=this.timers.length-1;e>=0;e--){const n=this.timers[e];n.t-=t,n.t<=0&&(this.timers.splice(e,1),n.r())}}reset(){this.timers=[],this.active=!1,this.iconOwners.clear(),Q.reset(),tt.water(!1)}wait(t){return new Promise(e=>this.timers.push({t,r:e}))}begin(t=!0){this.active=!0,this.game.player.scripted=!0,this.game.player.mover.cancel(),this.game.player.vel.set(0,0,0),t&&Q.cinematic(!0),Q.prompt(null)}end(){this.active=!1;const t=this.game.player;t.scripted=!1,t.mover.cancel(),t.char.talking=!1,t.char.lookTarget=null,Q.cinematic(!1),this.game.cam.release(),t.camYaw=t.char.yaw,t.camPitch=.22}char(t){return this.game.charOf(t)}mover(t){return t===this.game.protagonist?this.game.player.mover:this.game.npcs.get(t).mover}name(t){return Bn[t]?.name??t}async say(t,e,n={}){const i=t?this.char(t):null;i&&n.expr&&i.setExpr(n.expr);const s=i?.anim;i&&n.anim?i.anim=n.anim:i&&i.anim==="idle"&&(i.anim="talk");const r=t?Bn[t]?.voice??260:200;await Q.say(n.name??(t?this.name(t):""),e,t?_0(t):"gray",r,o=>{i&&(i.talking=o)},n.auto??0),i&&(i.talking=!1,!n.anim&&i.anim==="talk"&&s&&(i.anim=s==="talk"?"idle":s))}narrate(t,e=0){return Q.say("",t,"gray",180,void 0,e)}choose(t){return Q.choose(t)}shot(t,e,n=0){return this.game.cam.shot(t,e,n)}closeUp(t,e={}){const n=this.char(t),i=n.headWorld(),s=n.yaw+(e.side??.35),r=e.dist??1.35,o=i.clone().add(Pi(Math.sin(s)*r,e.h??.05,Math.cos(s)*r));return this.shot(o,i.clone().add(Pi(0,e.lookH??-.05,0)),e.dur??0)}overShoulder(t,e,n=0,i=1){const s=this.char(t),r=this.char(e),o=s.headWorld(),l=r.headWorld(),c=l.clone().sub(o).setY(0).normalize(),h=Pi(c.z,0,-c.x).multiplyScalar(i),u=o.clone().addScaledVector(c,-.9).addScaledVector(h,.45).add(Pi(0,.15,0));return this.shot(u,l,n)}twoShot(t,e,n=0,i=3.2,s=.4){const r=this.char(t).headWorld(),o=this.char(e).headWorld(),l=r.clone().add(o).multiplyScalar(.5),c=o.clone().sub(r).setY(0).normalize(),h=this.game.school.world;let u=l.clone().add(Pi(0,s,i)),f=-1;const d=Math.atan2(-c.x,c.z);for(const m of[0,Math.PI,.5,-.5,Math.PI+.5,Math.PI-.5,1,-1,Math.PI+1,Math.PI-1]){const p=d+m,x=l.clone().add(Pi(Math.cos(p)*i,s,Math.sin(p)*i)),_=h.raycast(l,x),M=_-Math.abs(Math.sin(m))*.15;if(M>f+.001&&(f=M,u=x,_>=1&&m===0))break}const g=h.raycast(l,u),v=g<1?l.clone().lerp(u,Math.max(.25,g-.1)):u;return this.shot(v,l,n)}shake(t=1){this.game.cam.shake=Math.max(this.game.cam.shake,t)}walk(t,e,n=!1,i="idle",s=!1){return this.mover(t).goNav(e,n,i,s)}path(t,e,n=!1,i="idle"){return this.mover(t).go(e,n,i)}place(t,e,n,i="idle"){const s=this.char(t),r=this.mover(t);r.cancel(),r.faceYaw=n??null,s.position.copy(e),n!==void 0&&(s.yaw=n),s.anim=i,t===this.game.protagonist&&(this.game.player.seat=null,this.game.player.vel.set(0,0,0))}face(t,e){const n=this.char(t);let i;if(typeof e=="number")i=e;else{const s=typeof e=="string"?this.char(e).position:e;i=Math.atan2(s.x-n.position.x,s.z-n.position.z)}this.mover(t).faceYaw=i,n.yaw=si(n.yaw,i,.35)}faceNow(t,e){const n=this.char(t),i=typeof e=="string"?this.char(e).position:e;n.yaw=Math.atan2(i.x-n.position.x,i.z-n.position.z),this.mover(t).faceYaw=n.yaw}anim(t,e){this.char(t).anim=e}expr(t,e){this.char(t).setExpr(e)}look(t,e){this.char(t).lookTarget=e?this.char(e).position:null}fade(t,e=500){return Q.fade(t,e)}comic(t,e,n,i){this.game.effects.comic(t,e,n,i)}icon(t,e,n){this.game.effects.icon("ic_"+t,e,n),this.iconOwners.add(t)}clearIcon(t){this.game.effects.clearIcon("ic_"+t),this.iconOwners.delete(t)}iconOwners=new Set;sfx(t){const e=tt[t];typeof e=="function"&&e.call(tt)}}const nn=(a,t,e)=>new T(a,t,e);async function Pl(a,t,e,n){const i=a.director,s=a.school.room(e),r=s.floor*Gt,o=a.protagonist,l=o==="gonzalo"?"manuel":"gonzalo",c=o==="gonzalo"?"Gonzalo":"Manuel";i.begin(),await i.fade(1,350);for(const x of a.npcs.npcs)x.def.group==="2A"&&x.state!=="scripted"&&a.npcs.placeInstant(x);a.npcs.script([n]),i.place(n,nn(s.doorX,r,.6),Math.PI,"walk"),await i.shot(nn(s.x1-.8,r+2.7,-12.9),nn(s.x0+5.5,r+.7,-3.5),0),tt.play("class",1.5),await i.fade(0,400),await i.walk(n,s.teacherPos.clone(),!1,"idle"),i.face(n,0),await i.wait(.3);const u=()=>i.shot(nn(s.x0+6,r+1.7,-2.2),nn(s.x0+6,r+1.5,-13),.8),f=(x,_={})=>i.say(n,x,{anim:"teach",..._}),d=(x,_={})=>i.say(o,x,{anim:"sit",..._}),g=()=>i.anim(o,"sitRaise");let v=0;const m=async x=>{tt.correct(),v++,await f(x,{expr:"happy"})},p=async x=>{tt.wrong(),await f(x,{expr:"bored"})};switch(t){case"math":{a.school.drawBoard(s,["Matemáticas","8 × 7 = ?","x + 5 = 12"]),await u(),await f("Buenos días, jóvenes. Saquen su cuaderno. Y no, Kevin, la calculadora del celular no cuenta."),await i.closeUp(n,{dur:.5}),await f(`A ver… ${c}, ¿cuánto es 8 por 7?`,{anim:"point"}),await i.closeUp(o,{dur:.4,h:.1});const x=await i.choose(["¿56?","54","63","¿Mande?"]);x===0?(await d("Eh… ¿56?",{expr:"worried"}),await m("Correcto. Milagrosamente estaba poniendo atención.")):x===1?(await d("¿54?",{expr:"worried"}),await p("Casi. Le faltaron dos. Como a su tarea, le falta todo.")):x===2?(await d("¡63!",{expr:"happy"}),await p("Ese es 9 por 7. Se adelantó una tabla, qué ambicioso.")):(await d("¿Mande?",{expr:"surprised"}),await p('"Mande" no es un número, joven. Es 56. Anótelo.')),a.school.drawBoard(s,["Matemáticas","x + 5 = 12","x = ?"]),await i.closeUp(n,{dur:.5}),await f("Ahora álgebra, para que sufran con estilo. Si x más 5 es igual a 12, ¿cuánto vale x?"),g();const _=await i.choose(["7","17","5","x vale mucho como persona"]);_===0?await m("Siete. Bien. Hoy no reprueba nadie… todavía."):_===3?(await d("x vale mucho como persona.",{expr:"smug"}),tt.boing(),await f("Muy bonito. Vale 7. Y usted vale un punto menos.",{expr:"bored"})):await p("No. Vale 7. Se resta 5 de los dos lados, como cuando reparten pizza."),await i.closeUp(l,{dur:.5}),await i.say(l,l==="manuel"?"(Ni volteo, ni volteo…)":"(¿Siete? Yo había puesto un dibujito.)",{anim:"sitWrite"}),await u(),await f("Tarea: páginas 45 a 47. Todas. Sí, también la 46."),await i.narrate("Todo el grupo: «¡Nooooo!»",1.4);break}case"espanol":{a.school.drawBoard(s,["Español","«Luis llegó tarde porque su","perro se comió su mochila.»"]),await u(),await f("Buenos días, mis niños. Hoy: comprensión lectora. Lean lo del pizarrón.",{expr:"happy"}),await i.closeUp(n,{dur:.5}),await f(`${c}, ¿por qué llegó tarde Luis?`,{anim:"point"}),await i.closeUp(o,{dur:.4,h:.1});const x=await i.choose(["Porque su perro se comió su mochila.","Porque se quedó dormido.","Porque Luis no existe, maestra."]);x===0?await m("¡Exacto! Leer con atención sirve para algo, ¿ven?"):x===1?await p("Eso te pasa a ti, no a Luis. Fue el perro."):(await d("Porque Luis no existe, maestra. Es un personaje.",{expr:"smug"}),await f("Filosófico… pero fue el perro.",{expr:"bored"})),a.school.drawBoard(s,["Español","«Ana canta en el baño.»","¿Cuál es el verbo?"]),await f('Siguiente. En la oración "Ana canta en el baño", ¿cuál es el verbo?'),g(),await i.choose(["canta","Ana","baño"])===0?await m('Muy bien. "Canta" es la acción.'):await p('No, mi vida. El verbo es "canta". Es lo que hace Ana.'),await i.closeUp("kevin",{dur:.5}),await i.say("kevin","Maestra, ¡Manuel también canta en el baño! ¡El rap de Vegetta777!",{anim:"sitRaise",expr:"smug"}),await i.say("brayan","Jajajaja.",{anim:"sit",expr:"happy"}),await i.closeUp("manuel",{dur:.4}),await i.say("manuel","…No es cierto.",{expr:"angry",anim:"sitSad"}),await i.closeUp(n,{dur:.4}),await f("Kevin, el único que va a cantar es usted: la tabla de verbos, de tarea. Completa.",{expr:"angry"});break}case"ciencias":{a.school.drawBoard(s,["Ciencias","Reacciones químicas","ácido + base → ?"]),await u(),await f("Jóvenes, hoy veremos una reacción química. Con cuidado, que el año pasado alguien se quemó las cejas."),await i.closeUp(n,{dur:.5}),await f(`${c}, pase a la mesa. ¿Qué mezclamos?`,{anim:"point"});const x=(a.player.seat?.pos??s.seats[0].pos).clone().add(nn(0,1,-.6));await i.shot(x.clone().add(nn(1.6,.8,1.6)),x,.8);const _=await i.choose(["Vinagre + bicarbonato","Agua + agua","Todo lo que hay en la mesa"]);_===0?(a.effects.burst(x,18,"#f0fff0"),a.effects.burst(x,10,"#b9f6ca"),tt.bubble(),tt.bubble(),i.comic("¡FSSSHHH!",x.clone().add(nn(0,.4,0)),"#80d8ff",.6),await m("¡Excelente! Una reacción ácido-base. Hace espuma porque libera un gas.")):_===1?(await i.wait(.6),await p("Felicidades, inventó… el agua. Premio Nobel en camino.")):(a.effects.burst(x,26,"#ff8a80"),a.effects.burst(x,20,"#ffd54f"),tt.thud(),i.shake(.8),i.comic("¡BOOM!",x.clone().add(nn(0,.5,0)),"#ff5a66",.8),await f("¡NOOO! ¡Mis cejas! …Ah, no, siguen ahí. Siéntese, por favor.",{expr:"surprised"})),await i.closeUp(n,{dur:.5}),await f("Pregunta: ¿qué gas se libera cuando mezclamos vinagre y bicarbonato?"),g();const M=await i.choose(["Dióxido de carbono (CO₂)","Oxígeno","Vapor de Vegetta"]);M===0?await m("Correcto. CO₂. El mismo que exhalan cuando suspiran en mi clase."):M===1?await p("No. Es dióxido de carbono. El oxígeno lo necesito yo para aguantarlos."):(tt.boing(),await f("¿Vapor de qué? …Es CO₂. Y ya dejen al tal Vegetta.",{expr:"bored"}));break}case"historia":{a.school.drawBoard(s,["Historia de México","Independencia","¿1810? ¿1910? ¿1521?"]),await u(),await f("Bien, jóvenes. Viajemos al pasado. No, Ulises, no en una máquina del tiempo. Con la imaginación."),await i.closeUp(n,{dur:.5}),await f(`${c}: ¿en qué año inició la Independencia de México?`,{anim:"point"}),await i.closeUp(o,{dur:.4,h:.1});const x=await i.choose(["1810","1910","1521"]);x===0?await m("Correcto. El 16 de septiembre de 1810. ¡Viva!"):x===1?await p("Ese es el inicio de la Revolución. Cien años de diferencia, nada más."):await p("Esa es la caída de Tenochtitlan. Va bien… para otro examen."),await f("Y díganme: ¿quién dio el Grito de Dolores?"),g();const _=await i.choose(["Miguel Hidalgo","Benito Juárez","Vegetta777"]);_===0?await m("Don Miguel Hidalgo y Costilla. Muy bien."):_===1?await p("Juárez es de otra época. Fue Hidalgo."):(tt.boing(),await f("…¿Qué les pasa hoy con ese muchacho? Fue Miguel Hidalgo.",{expr:"angry"})),await i.closeUp("juan",{dur:.5}),await i.say("juan","(Psst… ya casi es receso. Aguanta.)",{anim:"sitWrite"});break}case"ingles":{a.school.drawBoard(s,["English Class","Vocabulary","baño = ?"]),await u(),await f('Good morning, class! Today: vocabulary. Repeat after me: "Good morning, teacher."',{expr:"happy"}),await i.narrate("Todo el grupo, sin ganas: «Guuud mooorniiing tiiichaaar.»",1.6),await i.closeUp(n,{dur:.5}),await f(`${c}, how do you say "baño" in English?`,{anim:"point"}),await i.closeUp(o,{dur:.4,h:.1});const x=await i.choose(["Bathroom","Bañathon","Batroom"]);x===0?await m("Very good! Bathroom. Excellent pronunciation."):x===1?await p(`"Bañathon" sería un maratón de baños. It's "bathroom".`):await p("Almost! Bath-room. Con la lengua entre los dientes: th."),a.school.drawBoard(s,["English Class","«Él canta una canción»","= ?"]),await f('Now translate: "Él canta una canción."'),g();const _=await i.choose(["He sings a song.","He sing a song.","Él sings a canción."]);_===0?await m('Perfect! "He sings", con S, because third person.'):_===1?await p(`Le faltó la S: "He sings". Don't forget the S!`):(tt.boing(),await f('Eso es Spanglish, sweetie. "He sings a song."',{expr:"bored"}));break}case"tecnologia":{a.school.drawBoard(s,["Tecnología","Práctica: escribe el nombre","de la escuela en Word"]),await u(),await f("Prendan sus computadoras. Despacito, que tienen más años que ustedes."),i.anim(o,"type"),await i.closeUp(n,{dur:.5}),await f("Práctica rápida: escriban el nombre de la escuela. En mayúsculas. Sin faltas, por favor.");const x=a.player.seat?.pos??s.seats[0].pos;await i.shot(x.clone().add(nn(.7,1.45,.5)),x.clone().add(nn(0,.9,-.6)),.6);const _=["KeyG","KeyA","KeyN","KeyT","KeyE"],M=await Q.qteSeq("¡ESCRIBE: G-A-N-T-E!",_,6,"Teclea las letras en orden");tt.keyboard(),M>=1?await m("¡Perfecto! Rapidísimo. Ya puede trabajar en una oficina."):await p('Escribió "GNATE". Cerca. Muy cerca. Pero no.'),await i.closeUp(l,{dur:.5}),l==="manuel"?await i.say("manuel","¡Ay! Se reventó el cartucho de la impresora… ¡tengo las manos todas azules!",{expr:"surprised",anim:"sit"}):await i.say("gonzalo","(Ya me anda del baño… aguanta, aguanta…)",{expr:"worried",anim:"type"}),o==="manuel"&&(await i.closeUp("manuel",{dur:.4}),await i.say("manuel","¡Ay! ¡Se reventó el cartucho de la impresora… tengo las manos todas azules!",{expr:"surprised",anim:"sit"})),await i.closeUp(n,{dur:.4}),await f("Bueno, ya casi es hora. Apaguen todo. Y nada de Buscaminas, Diego, te estoy viendo.");break}}await u(),v===2?Q.toast("⭐ ¡Participación perfecta!"):v===1?Q.toast("✔ Participaste en clase"):Q.toast("😅 Al menos te presentaste"),tt.bell(),await i.narrate("*RIIIIING* — Suena la campana.",1.2),a.npcs.unscript([n]),tt.play("school",1.5),i.anim(o,"sit"),i.end()}const F=(a,t,e)=>new T(a,t,e),Oe=[{start:420,label:"Entrada a la escuela",kind:"arrival"},{start:435,label:"Matemáticas",kind:"class",room:"2A",subject:"math",teacher:"ramirez"},{start:485,label:"Español",kind:"class",room:"2A",subject:"espanol",teacher:"lupita"},{start:535,label:"Ciencias",kind:"class",room:"lab",subject:"ciencias",teacher:"herrera"},{start:585,label:"Historia",kind:"class",room:"2A",subject:"historia",teacher:"galindo"},{start:635,label:"Receso",kind:"recess"},{start:665,label:"Inglés",kind:"class",room:"2A",subject:"ingles",teacher:"karen"},{start:715,label:"Tecnología",kind:"class",room:"comp",subject:"tecnologia",teacher:"tono"},{start:765,label:"Tiempo libre",kind:"free"}],qs=900;function Br(a){let t=0;for(let e=0;e<Oe.length;e++)a>=Oe[e].start&&(t=e);return t}function ta(a){const t=Math.floor(a/60),e=Math.floor(a%60);return`${t}:${e.toString().padStart(2,"0")}`}const w0={"2A":"salón 2° A (planta baja)",lab:"Laboratorio (2º piso)",comp:"salón de Computación (2º piso)"},Ll=F(22.1,0,4.4),Li=F(21.15,0,-4);class E0{constructor(t,e,n){this.g=t,this.pc=e,this.free=n,this.other=e==="gonzalo"?"manuel":"gonzalo",this.steps=n?[]:this.buildSteps()}step=0;flags={};minutes=420;running=!1;steps;other;classDone=new Set;lastPeriod=-1;get d(){return this.g.director}get npcs(){return this.g.npcs}get cur(){return this.steps[this.step]}get pcName(){return this.pc==="gonzalo"?"Gonzalo":"Manuel"}buildSteps(){const t=this.pc,e=[];e.push({id:"arrive",mission:"Un día normal",period:0,obj:()=>"Entra a la secundaria",enter:()=>{this.setPeriodPhase(0)},target:()=>F(0,0,47),check:()=>{this.g.player.pos.z<46.6&&this.run(()=>this.arrivalScene())}}),e.push({id:"juan",mission:"Un día normal",period:0,obj:()=>"Busca a Juan junto al asta bandera (F para hablar)",enter:()=>{this.setPeriodPhase(0),this.npcs.script(["juan"]),this.d.place("juan",F(6.4,0,28.6),Math.PI*.85,"idle")},target:()=>this.g.charOf("juan").position});const n=i=>{const s=Oe[i];e.push({id:"class_"+s.subject,mission:"Un día normal",period:i,obj:()=>this.g.player.seat?.room===s.room?"Pon atención en clase":`Ve al ${w0[s.room]} y siéntate (E)`,enter:r=>{this.minutes=Math.max(this.minutes,s.start),this.setPeriodPhase(i,r),r||this.bell(`NUEVA CLASE: ${s.label.toUpperCase()}`)},target:()=>this.g.player.seat?null:this.seatTarget(s.room),check:()=>{this.g.player.seat?.room===s.room&&this.run(async()=>{await Pl(this.g,s.subject,s.room,s.teacher),this.minutes=Oe[i+1].start-1,this.next()})}})};return n(1),n(2),n(3),n(4),e.push({id:"recess",mission:"¡Receso!",period:5,obj:()=>{const i=this.flags.bought?"✔":"○",s=this.flags.juanRecess?"✔":"○";return`${i} Compra algo en la cooperativa   ${s} ${t==="gonzalo"?"Juega una reta con Juan en las canchas":"Siéntate con Juan en las mesas"}`},enter:i=>{this.minutes=Math.max(this.minutes,635),this.setPeriodPhase(5,i),this.g.player.seat&&this.g.player.stand(),i||(tt.bell(),Q.banner("10:35","¡RECESO!","Treinta minutos de libertad")),this.npcs.script(["juan"]),t==="gonzalo"?this.d.place("juan",F(44,0,22.5),-Math.PI/2,"dribble"):this.d.place("juan",F(-30,0,18.6),Math.PI/2,"eat")},target:()=>this.flags.bought?this.flags.juanRecess?null:this.g.charOf("juan").position:F(-42.3,0,22),check:()=>{this.flags.bought&&this.flags.juanRecess&&!this.flags.recessDone&&(this.flags.recessDone=!0,Q.toast("Suena la campana en un momento…"),this.minutes=Math.max(this.minutes,662)),this.minutes>=665&&(this.npcs.unscript(["juan"]),this.next())}}),n(6),n(7),e.push({id:"main",mission:"Todo por un rap",period:8,obj:()=>t==="gonzalo"?"Ve al baño de hombres (planta baja)":this.g.school.zoneAt(this.g.player.pos)==="BAÑO HOMBRES"?"Lávate las manos en el lavabo (E)":"Lávate las manos de tinta en el baño de hombres (planta baja)",enter:i=>{this.minutes=Math.max(this.minutes,765),this.setPeriodPhase(8,i),this.g.player.seat&&this.g.player.stand(),i||this.run(()=>this.mainUnlock()),this.setupPreIncident()},target:()=>t==="gonzalo"?Ll:this.g.school.zoneAt(this.g.player.pos)==="BAÑO HOMBRES"?Li:Ll,check:()=>{const i=this.g.player.pos;t==="gonzalo"&&i.y<1&&Math.abs(i.x-22.1)<1.6&&i.z<5.6&&i.z>2.2&&this.run(()=>this.incident())}}),t==="gonzalo"&&(e.push({id:"investigate",mission:"La verdad del baño",period:8,obj:()=>`Habla con los testigos (${["wDiego","wSofia","wPepe"].filter(i=>this.flags[i]).length}/3): Diego, Sofía y Don Pepe`,enter:()=>{this.setPeriodPhase(8,!0),this.npcs.script(["diego","sofia","pepe","juan"]),this.d.place("diego",F(23,0,-9),0,"idle"),this.d.place("sofia",F(25.5,0,5),-Math.PI/2,"crossed"),this.d.place("pepe",F(36.5,0,4.5),-Math.PI/2,"crossed"),this.d.place("juan",F(19.5,0,5.2),Math.PI/2,"idle");for(const i of["manuel","brayan","kevin","ulises"])this.npcs.script([i]);this.d.place("brayan",F(44,0,40),0,"dribble"),this.d.place("kevin",F(45,0,41),0,"cheer"),this.d.place("ulises",F(43,0,41),0,"idle"),this.d.place("manuel",F(1.1,0,-9.6),Math.PI,"sitSad"),this.d.place("lupita",F(3.6,0,-9),-Math.PI*.8,"crossed"),this.npcs.script(["lupita"])},target:()=>this.flags.wDiego?this.flags.wSofia?this.flags.wPepe?null:this.g.charOf("pepe").position:this.g.charOf("sofia").position:this.g.charOf("diego").position,check:()=>{this.flags.wDiego&&this.flags.wSofia&&this.flags.wPepe&&this.next()}}),e.push({id:"toDir",mission:"La verdad del baño",period:8,obj:()=>"Ve a la ventana de la Dirección",enter:i=>{i||Q.toast("Ahora sabes la verdad. Manuel está en la Dirección…",4e3),this.npcs.script(["manuel","lupita"]),this.d.place("manuel",F(1.1,0,-9.6),Math.PI,"sitSad"),this.d.place("lupita",F(3.6,0,-9),-Math.PI*.8,"crossed")},target:()=>F(-1.5,0,3.4),check:()=>{this.g.player.pos.distanceTo(F(-1.5,0,3.4))<1.6&&this.run(()=>this.gonzaloFinale())}})),e}start(t){if(t&&(this.step=t.step,this.minutes=t.minutes,this.flags={...t.flags}),this.free){this.lastPeriod=-1,this.minutes=Math.max(this.minutes,640),this.updateFree(0),Q.setMission("Exploración libre","Explora la escuela. Siéntate en un salón durante una clase para tomarla.");return}this.enter(this.step,!!t)}enter(t,e=!1){this.step=t;const n=this.cur;n&&(n.enter?.(e),this.refreshHUD(),e||this.g.save(!0))}next(){this.running=!1,this.enter(this.step+1)}run(t){this.running||(this.running=!0,t().catch(e=>{console.error(e)}).finally(()=>{this.running=!1,this.refreshHUD()}))}refreshHUD(){if(this.free)return;const t=this.cur;t&&Q.setMission(t.mission,t.obj())}setPeriodPhase(t,e=!1){const n=Oe[t];this.npcs.setPhase({kind:n.kind,room:n.room,subject:n.subject},e)}bell(t){tt.bell(),Q.banner(ta(this.minutes),t)}seatTarget(t){const e=this.g.school.room(t),n=e.seats[this.g.playerSeatIndex];return n?n.pos:F(e.doorX,e.floor*Gt,.8)}update(t){const e=this.cur;if(this.free){this.updateFree(t);return}if(e){if(!this.running&&!this.d.active){const n=Oe[e.period+1]?.start??qs;let i=n-1;const s=Oe[e.period];s.kind==="class"&&(i=this.g.player.seat?.room===s.room?n-1:s.start+4),e.id==="recess"&&(i=665),(e.id==="juan"||e.id==="arrive")&&(i=434);const r=e.id==="recess"?this.flags.recessDone?2:.33:.4;this.minutes=Math.max(this.minutes,s.start,Math.min(i,this.minutes+t*r)),e.check?.()}Q.setClock(ta(this.minutes),Oe[e.period].label),this.running||Q.setMission(e.mission,e.obj())}}updateFree(t){!this.running&&!this.d.active&&(this.minutes+=t*.5),this.minutes>=qs&&(this.minutes=420);const e=Br(this.minutes);if(e!==this.lastPeriod){const i=this.lastPeriod===-1;this.lastPeriod=e,this.setPeriodPhase(e,i),i||this.bell(Oe[e].kind==="class"?`NUEVA CLASE: ${Oe[e].label.toUpperCase()}`:Oe[e].label.toUpperCase())}const n=Oe[e];Q.setClock(ta(this.minutes),n.label),n.kind==="class"&&this.g.player.seat?.room===n.room&&!this.classDone.has(this.minutesKey(e))&&!this.running&&(this.classDone.add(this.minutesKey(e)),this.run(async()=>{await Pl(this.g,n.subject,n.room,n.teacher),this.minutes=(Oe[e+1]?.start??qs)-1}))}minutesKey(t){return t+Math.floor(this.minutes/qs)*100}waypoint(){return this.free||this.running||this.d.active?null:this.cur?.target?.()??null}interactables(){const t=[],e=this.g,n=e.player,i=e.school.poi,s=n.pos,r=s.y>Gt-.5?1:0;if(!n.seat){for(const o of e.school.rooms)if(!(o.floor!==r||s.x<o.x0-1||s.x>o.x1+1||s.z>2.5))for(const l of o.seats)!l.occupant&&l.pos.distanceTo(s)<1.1&&!this.seatTaken(l.pos)&&t.push({pos:l.pos,r:1.1,label:"Sentarse",key:"E",action:()=>n.sit(l)})}if(r===0){t.push({pos:i.coopCounter,r:1.8,label:"Comprar en la cooperativa",key:"E",action:()=>this.run(()=>this.buy())}),t.push({pos:i.fountain,r:1.5,label:"Tomar agua",key:"E",action:()=>this.run(()=>this.drink())}),t.push({pos:F(-15,0,13.3),r:1.8,label:"Leer el periódico mural",key:"E",action:()=>this.run(()=>this.mural())}),t.push({pos:Li,r:1.2,label:"Lavarse las manos",key:"E",action:()=>this.run(()=>this.cur?.id==="main"&&this.pc==="manuel"?this.incident():this.sink())});for(const o of[36,58])t.push({pos:F(o,0,22.3),r:2.2,label:"Tirar a la canasta",key:"E",action:()=>this.run(()=>this.shoot(o))})}else i.bookshelf&&t.push({pos:i.bookshelf.clone().setY(Gt),r:1.6,label:"Leer un libro",key:"E",action:()=>this.run(()=>this.book())}),i.labSkeleton&&t.push({pos:i.labSkeleton.clone().setY(Gt),r:1.6,label:"Saludar al modelo anatómico",key:"E",action:()=>this.run(()=>this.skeleton())});return t}specialTalk(t){const e=t.id,n=this.cur?.id;if(n==="juan"&&e==="juan")return async()=>{await this.juanMorning(),this.npcs.unscript(["juan"]),this.next()};if(n==="recess"&&e==="juan"&&!this.flags.juanRecess)return()=>this.juanRecess();if(n==="recess"&&e==="cuca")return()=>this.buy();if(n==="investigate"){if(e==="diego"&&!this.flags.wDiego)return()=>this.witness("diego");if(e==="sofia"&&!this.flags.wSofia)return()=>this.witness("sofia");if(e==="pepe"&&!this.flags.wPepe)return()=>this.witness("pepe");if(e==="juan")return async()=>{await this.d.say("juan","Pregúntale a Diego, a Sofía y a Don Pepe. Algo vieron, estoy seguro.")}}if((n==="main"||n==="investigate"||n==="toDir")&&["brayan","kevin","ulises"].includes(e)){const i={brayan:"¿Qué? Nosotros no sabemos nada. Estábamos aquí desde hace… mucho.",kevin:"Jajaja… digo, no, ¿cuál baño?",ulises:"Yo ni sé dónde quedan los baños."};return async()=>{await this.d.say(e,i[e],{expr:"smug"})}}return this.free&&e===this.other?this.flags.reconciled?async()=>{this.pc==="gonzalo"?await this.d.say("manuel","Ya te dije: torta de jamón. Con Gansito. No se te olvide.",{expr:"smug"}):await this.d.say("gonzalo","¡La torta va, la torta va! Ya no me lo recuerdes.",{expr:"worried"})}:async()=>{this.pc==="gonzalo"?(await this.d.say("manuel","…",{expr:"angry"}),await this.d.say("gonzalo","Oye, Manuel… perdón por lo del baño. No vi que te empujaron.",{expr:"worried"}),await this.d.say("manuel","Me pusieron reporte por tu culpa.",{expr:"angry"}),await this.d.say("gonzalo","Ya sé, ya sé. ¿Te invito una torta de la cooperativa?",{expr:"happy"}),await this.d.say("manuel","…Que sea de jamón. Y con Gansito.",{expr:"smug"})):(await this.d.say("gonzalo","Manuel… oye… lo del baño… ¿seguimos siendo compas?",{expr:"worried"}),await this.d.say("manuel","Me debes una torta. Y una disculpa con la directora.",{expr:"angry"}),await this.d.say("gonzalo","Va, va. Las dos cosas. ¡Pero no me cantes el rap de Vegetta!",{expr:"happy"}),await this.d.say("manuel","Nunca. Jamás. En la vida.",{expr:"furious"})),this.g.charOf("manuel").setExpr("neutral"),this.g.charOf("manuel").redTarget=0,this.flags.reconciled=!0}:null}canTalk(t){return t.state!=="scripted"||!!this.specialTalk(t)}seatTaken(t){return this.npcs.npcs.some(e=>e.char.position.distanceToSquared(t)<.2)}onTalk(t){const e=this.specialTalk(t);return e?(this.run(e),!0):!1}async arrivalScene(){const t=this.d;t.begin(),t.place(this.pc,this.g.player.pos.clone().setZ(46.4),Math.PI),t.place("beto",F(2.4,0,45),-Math.PI/2,"idle"),t.faceNow("beto",this.pc),t.faceNow(this.pc,"beto"),await t.twoShot(this.pc,"beto",0,3.4,.5),await t.say("beto",`¡Buenos días, joven ${this.pcName}! Hoy es día de civil, ¿eh? Se ve muy ${this.pc==="gonzalo"?"azulito":"rojito"}.`,{expr:"happy"}),this.pc==="gonzalo"?await t.say("gonzalo","Buenos días, Don Beto. ¡Hoy va a ser un gran día, lo presiento!",{expr:"happy"}):await t.say("manuel","Buenos días, Don Beto. Ojalá sea un día tranquilo.",{expr:"neutral"}),await t.say("beto","Ándele, pásele. Su amigo Juan anda por el asta bandera."),t.end(),this.npcs.unscript([]),this.next()}async juanMorning(){const t=this.d;if(t.begin(),t.face("juan",this.pc),t.face(this.pc,"juan"),await t.wait(.3),await t.twoShot(this.pc,"juan",.8,3,.45),this.pc==="gonzalo"){await t.say("juan","¡Gonzalo! ¿Hiciste la tarea de mate?",{expr:"happy"});const e=await t.choose(["Obvio. Bueno, la mitad.","¿Había tarea?","La hice en el camión, cuenta como hecha."]);e===0&&await t.say("gonzalo",'Obvio. Bueno… la mitad. La otra mitad es "pensamiento abstracto".',{expr:"smug"}),e===1&&await t.say("gonzalo","¿Había tarea? ¿Desde cuándo hay tarea?",{expr:"surprised"}),e===2&&await t.say("gonzalo","La hice en el camión. Con letra de terremoto, pero hecha.",{expr:"happy"}),await t.say("juan","Jaja. Oye, en el receso echamos una reta en las canchas, ¿va?"),await t.say("gonzalo","¡Va! Hoy siento que nada puede salir mal.",{expr:"happy"}),await t.say("juan","No digas eso… siempre que alguien dice eso, algo sale mal.",{expr:"worried"})}else{await t.say("juan","¡Manuel! ¿Qué onda? Te ves desvelado.",{expr:"happy"});const e=await t.choose(["Me dormí tarde viendo videos.","Estoy bien, gracias.","(Bostezar dramáticamente)"]);e===0&&await t.say("manuel","Me dormí tarde viendo videos. De Minecraft. Muchos.",{expr:"bored"}),e===1&&await t.say("manuel","Estoy bien, gracias. Sólo quiero que hoy sea un día tranquilo.",{expr:"neutral"}),e===2&&(t.anim("manuel","cheer"),await t.say("manuel","¡Aaaaaaahhhhh! Perdón. Sí, me desvelé.",{expr:"bored"}),t.anim("manuel","idle")),await t.say("juan","Oye, ten cuidado con Brayan y sus amigos. Andan con la onda del rap de Vegetta777, molestando a todos.",{expr:"worried"}),await t.say("manuel","Ugh. Ojalá no se acuerden de mí.",{expr:"worried"})}await t.say("juan","¡Ya va a sonar la campana! Vámonos al salón."),t.end()}async juanRecess(){const t=this.d;if(t.begin(),t.face(this.pc,"juan"),t.face("juan",this.pc),await t.twoShot(this.pc,"juan",.6,3.2,.5),this.pc==="gonzalo"){await t.say("juan","¡Llegaste! A ver si encestas una, que la última vez le diste a una paloma.",{expr:"happy"}),await t.say("gonzalo","La paloma se atravesó. Fue su culpa.",{expr:"smug"}),t.place(this.pc,F(37.6,0,22.3),-Math.PI/2,"idle"),t.place("juan",F(39.5,0,23.5),-Math.PI/2,"idle"),await t.shot(F(41.5,2.2,25.5),F(35,2.6,22.3),.8);const e=await Q.qteMash("¡TIRO DE TRES!","KeyE",8,3,"Presiona E rápido para tomar impulso");t.anim(this.pc,"jump"),tt.whoosh(),await t.wait(.4),e>=1?(t.comic("¡CANASTA!",F(35,3.4,22.3),"#ffd23f",1),tt.correct(),t.anim("juan","cheer"),await t.say("juan","¡No manches! ¡Ni tocó el aro!",{expr:"surprised"})):(t.comic("¡CLONK!",F(35,3.4,22.3),"#ff8a65",1),tt.bonk(),await t.say("juan","Le diste al tablero… y a mi autoestima.",{expr:"bored"})),t.anim(this.pc,"idle"),await t.say("juan","Al rato que salgamos de Tecnología echamos otra. Ahorita voy por agua.")}else{await t.say("juan","Siéntate, Manuel. Te aparté lugar.",{expr:"happy"}),t.place(this.pc,F(-30,0,20.4),Math.PI/2,"sit"),t.face(this.pc,"juan"),await t.twoShot(this.pc,"juan",.6,3,.4),await t.say("manuel","Gracias. Aquí nadie me molesta.",{expr:"happy"}),this.npcs.script(["brayan","kevin","ulises"]),t.place("brayan",F(-24,0,20),-Math.PI/2),t.place("kevin",F(-24,0,21.2),-Math.PI/2),t.place("ulises",F(-24,0,18.8),-Math.PI/2),t.walk("brayan",F(-28.6,0,20.4)),t.walk("kevin",F(-28.9,0,21.6)),await t.walk("ulises",F(-28.9,0,19.2)),t.face("brayan",this.pc),t.face("kevin",this.pc),t.face("ulises",this.pc),t.anim(this.pc,"sitSad"),await t.overShoulder(this.pc,"brayan",.5),await t.say("kevin","¡Manuel! ¿Te sabes el rap de Vegetta777?",{expr:"smug"}),await t.say("brayan","Dicen que te lo sabes completito. Cántatelo, ¿no?",{expr:"smug"});const e=await t.choose(["No.","No me lo sé.","(Ignorarlos y comer tu torta)"]);e===0&&await t.say("manuel","No.",{expr:"angry"}),e===1&&await t.say("manuel","No me lo sé. Ni me gusta.",{expr:"worried"}),e===2&&(t.anim(this.pc,"eat"),await t.say("manuel","(…Mastica… mastica… no hagas contacto visual…)",{expr:"bored"})),await t.say("juan","Ya déjenlo, ¿no? Vayan a molestar a las palomas.",{expr:"angry"}),await t.say("brayan","Al rato te lo vamos a sacar, Manuel. Ya verás.",{expr:"smug"}),t.walk("brayan",F(-15,0,26)),t.walk("kevin",F(-14,0,27)),t.walk("ulises",F(-15,0,28)),await t.wait(1),this.npcs.unscript(["brayan","kevin","ulises"]),await t.twoShot(this.pc,"juan",.5,3,.4),await t.say("juan","No les hagas caso. Se aburren rápido.",{expr:"worried"}),await t.say("manuel","Eso espero…",{expr:"sad"}),t.place(this.pc,F(-30,0,21.4),Math.PI/2,"idle")}this.flags.juanRecess=!0,t.end()}async buy(){const t=this.d;t.begin(!1),t.face("cuca",this.pc),t.face(this.pc,"cuca"),await t.twoShot(this.pc,"cuca",.5,2.6,.4),await t.say("cuca","¿Qué va a llevar, mijo?",{expr:"happy"});const e=await t.choose(["Torta de jamón ($25)","Tostitos preparados ($30)","Agua de horchata ($12)","Un Gansito ($14)"]),n=["Una torta de jamón, con su chile y todo. ¡Provecho!","Tostitos con salsa, limón, cueritos y amor. Bueno, sin cueritos.","Horchata bien fresquecita. Del garrafón de la esperanza.","Un Gansito. Recuérdame… bueno, ya sabes el resto."];tt.pop(),await t.say("cuca",n[e],{expr:"happy"}),t.anim(this.pc,"eat"),await t.wait(1.2),t.anim(this.pc,"idle"),this.flags.bought||Q.toast("✔ Compraste algo en la cooperativa"),this.flags.bought=!0,t.end()}async drink(){const t=this.d;t.begin(!1),t.anim(this.pc,"bow"),tt.bubble(),await t.wait(1.2),tt.bubble(),await t.wait(.6),t.anim(this.pc,"idle"),await t.say(this.pc,["Ahh. Agua con sabor a tubería. Delicioso.","Hidratación nivel secundaria.","Sabe a… metal. Y a nostalgia."][Math.floor(Math.random()*3)]),t.end()}async mural(){const t=this.d;t.begin(!1),await t.shot(F(-15,1.5,15.2),F(-15,1.3,12.6),.6),await t.narrate("«Concurso de cuentos: tema libre (no se aceptan cuentos sobre el baño, Brayan).»"),await t.narrate("«Se busca: balón perdido. Si lo encuentras, regrésalo a Educación Física. Recompensa: nada.»"),t.end()}async sink(){const t=this.d;t.begin(!1),t.place(this.pc,Li,-Math.PI/2,"wash"),tt.water(!0),await t.wait(1.6),tt.water(!1),t.anim(this.pc,"idle"),await t.say(this.pc,"Manos limpias. Higiene ante todo."),t.end()}async shoot(t){const e=this.d;e.begin(!1);const n=await Q.qteMash("¡A LA CANASTA!","KeyE",6,2.5,"Presiona E rápido");e.anim(this.pc,"jump"),tt.whoosh(),await e.wait(.4);const i=t<47?34.9:59.1;n>=1?(e.comic("¡SWISH!",F(i,3.4,22.3)),tt.correct()):(e.comic("¡FALLÓ!",F(i,3.4,22.3),"#ff8a65"),tt.bonk()),e.anim(this.pc,"idle"),e.end()}async book(){const t=this.d;t.begin(!1);const e=["«El Principito»","«Cómo sobrevivir a la secundaria», tomo 3","«Historia de México para gente con sueño»","«Química para no explotar»","«100 chistes para el recreo»"];await t.narrate(`Tomas ${e[Math.floor(Math.random()*e.length)]} y lees un par de páginas.`),await t.say(this.pc,"Interesante… creo. Ya lo leeré en vacaciones. Tal vez."),t.end()}async skeleton(){const t=this.d;t.begin(!1),t.anim(this.pc,"raise"),await t.say(this.pc,"Buenos días, Don Huesos. ¿Usted también vino en día de civil?",{expr:"happy"}),await t.narrate("El modelo anatómico no responde. Pero sabes que te escuchó."),t.end()}async mainUnlock(){const t=this.d;tt.bell(),await Q.banner("12:45","TIEMPO LIBRE","",!1,2200),tt.stinger(),await Q.banner("MISIÓN PRINCIPAL DESBLOQUEADA","TODO POR UN RAP","Nada volvería a ser igual.",!0,3600),t.begin(),this.pc==="gonzalo"?(await t.closeUp("gonzalo",{dur:.6}),await t.say("gonzalo","Uff, me anda del baño desde Historia. Me aguanté toda Tecnología.",{expr:"worried"}),await t.say("gonzalo","El baño de hombres está en la planta baja, junto a la sala de maestros. ¡Vamos!",{expr:"neutral"})):(await t.closeUp("manuel",{dur:.6}),await t.say("manuel","Ugh… se me reventó el cartucho de tinta en Tecnología. Tengo las manos azules.",{expr:"worried"}),await t.say("manuel","Voy al baño de abajo a lavarme antes de que la maestra piense que me pinté.",{expr:"neutral"})),t.end()}setupPreIncident(){const t=this.d;this.pc==="gonzalo"?(this.npcs.script(["manuel","brayan","kevin","ulises","diego"]),t.place("manuel",Li,-Math.PI/2,"wash"),t.place("brayan",F(21.4,0,-5.4),0,"talk"),t.place("kevin",F(22.3,0,-4.9),-.6,"talk"),t.place("ulises",F(22.5,0,-3.6),-1.3,"talk"),t.place("diego",F(25,0,-8.4),0,"idle")):(this.npcs.script(["gonzalo"]),t.place("gonzalo",F(14,0,10.5),Math.PI/2,"idle"))}async incident(){const t=this.d,e=this.g,n=this.pc;t.begin(),this.npcs.script(["manuel","gonzalo","brayan","kevin","ulises","juan","lupita","sofia","diego"].filter(m=>m!==n)),tt.play("tension");const i=F(22.1,0,.7);if(n==="manuel"){t.place("manuel",Li,-Math.PI/2,"wash"),tt.water(!0),await t.shot(F(23.9,1.75,-1.4),F(21,1.1,-4.4),0),await t.wait(.8),await t.say("manuel","(Ahhh… agua fría. Por fin un momento de paz.)",{expr:"happy"}),t.place("brayan",F(22.1,0,4.6),Math.PI),t.place("kevin",F(22.7,0,5.4),Math.PI),t.place("ulises",F(21.5,0,5.6),Math.PI),t.place("diego",F(25,0,-8.4),0,"idle"),tt.door(),t.walk("brayan",F(21.4,0,-5.4),!1,"idle",!0),t.path("kevin",[F(22.4,0,.5),F(22.3,0,-4.9)]),await t.path("ulises",[F(22,0,.6),F(22.5,0,-3.6)]),await t.wait(.6),t.face("brayan","manuel"),t.face("kevin","manuel"),t.face("ulises","manuel"),tt.water(!1),t.anim("manuel","idle"),t.face("manuel","kevin"),await t.wait(.3),await t.overShoulder("manuel","kevin",.6),await t.say("kevin","¡Manuel! ¡Manuel! ¡Miren quién está aquí!",{expr:"smug",anim:"point"}),await t.closeUp("brayan",{dur:.4}),await t.say("brayan","¡Manuel, cántate el rap de Vegetta777!",{expr:"smug"}),await t.closeUp("kevin",{dur:.3}),await t.say("kevin","¡Ándale, cántalo!",{expr:"happy",anim:"cheer"}),await t.say("ulises",'¡Sí! ¡El de "Vegetta, Vegetta, ñam ñam"! Bueno, no me lo sé, pero tú sí.',{expr:"smug"}),t.anim("kevin","idle"),await t.closeUp("manuel",{dur:.4});let m=await t.choose(["No, ya déjenme.","No me lo sé.","(Ignorarlos y seguir lavándote)"]);m===0&&await t.say("manuel","No, ya déjenme.",{expr:"angry"}),m===1&&await t.say("manuel","No me lo sé. En serio.",{expr:"worried"}),m===2&&(t.anim("manuel","wash"),tt.water(!0),await t.say("manuel","(…Si no los veo, no existen…)",{expr:"bored"}),tt.water(!1),t.anim("manuel","idle")),await t.overShoulder("manuel","brayan",.4),await t.say("brayan","Ándale, no seas aguado. Nomás un pedacito. El coro.",{expr:"smug"}),m=await t.choose(["Que no.","¿Por qué no se lo cantan ustedes?","Voy a decirle a la maestra."]),m===0&&(await t.say("manuel","Que no.",{expr:"angry"}),await t.say("kevin","Uuuuy, el serio.",{expr:"smug"})),m===1&&(await t.say("manuel","¿Por qué no se lo cantan ustedes, si tanto les gusta?",{expr:"angry"}),await t.say("ulises","Porque nosotros no lo sabemos, ¡duh!",{expr:"smug"})),m===2&&(await t.say("manuel","Voy a decirle a la maestra.",{expr:"worried"}),await t.say("kevin","¿A cuál? ¿A la que no está aquí? Jajaja.",{expr:"happy"})),t.walk("brayan",F(21.35,0,-4.75),!1,"idle",!0),await t.wait(.6),t.face("brayan","manuel"),await t.closeUp("brayan",{dur:.4,side:-.4}),await t.say("brayan",'Canta, Manuel. Si no, te vamos a tener que "inspirar".',{expr:"angry"}),await t.closeUp("manuel",{dur:.3}),await t.say("manuel","No, ya déjenme.",{expr:"angry"}),m=await t.choose(["Intentar salir del baño","Seguir negándote"]),m===0?(t.face("manuel",F(22.1,0,2)),await t.say("manuel","Me voy.",{expr:"angry"})):await t.say("manuel","No voy a cantar nada.",{expr:"angry"}),t.faceNow("manuel",F(22.1,0,2)),t.faceNow("brayan",F(22.1,0,2)),await t.shot(F(24.2,1.4,-2.2),F(21.6,1,-3),0),t.place("gonzalo",F(22.1,0,4.9),Math.PI,"walk"),t.anim("brayan","push"),tt.whoosh(),t.comic("¡EMPUJÓN!",F(21.5,1.6,-4.3),"#ff5a66",.8),t.shake(.6),t.anim("manuel","stumble"),t.expr("manuel","surprised"),tt.gasp(),t.path("gonzalo",[F(22.1,0,1.25)],!0),e.cam.follow={target:()=>e.charOf("manuel").headWorld(),offset:F(2,.3,.6)},e.cam.cine=!0,await t.path("manuel",[F(21.7,0,-2),i.clone().setZ(.55)],!0,"stumble")}else t.place("gonzalo",F(22.1,0,5),Math.PI,"idle"),t.place("manuel",Li,-Math.PI/2,"wash"),t.place("brayan",F(21.35,0,-4.75),.3,"idle"),t.place("kevin",F(22.3,0,-4.9),-.6,"idle"),t.place("ulises",F(22.5,0,-3.6),-1.3,"idle"),await t.shot(F(22.75,1.75,7.2),F(22.1,1.2,1.5),0),await t.say("gonzalo","(Ya casi… ya casi… aguanta, vejiga, aguanta…)",{expr:"worried"}),t.path("gonzalo",[F(22.1,0,1.25)],!0,"idle"),await t.shot(F(23.2,1.5,-.6),F(22.1,1.4,2.6),0),await t.wait(.7),t.faceNow("manuel",F(22.1,0,2)),t.faceNow("brayan",F(22.1,0,2)),t.anim("brayan","push"),t.anim("manuel","stumble"),t.expr("manuel","surprised"),await t.path("manuel",[F(21.7,0,-2),i.clone().setZ(.55)],!0,"stumble"),t.anim("brayan","whistle"),t.anim("kevin","whistle"),t.anim("ulises","whistle"),t.face("brayan",0),t.face("kevin",-.4),t.face("ulises",.6);tt.thud(),tt.bonk(),t.shake(1.2),t.comic("¡POW!",F(22.1,1.6,.9),"#ffd23f",1.1),t.place("gonzalo",F(22.1,0,1.45),Math.PI,"stumble"),t.place("manuel",F(22.05,0,.35),0,"stumble"),t.expr("gonzalo","surprised"),await t.wait(.5),t.anim("gonzalo","idle"),t.anim("manuel","idle"),t.faceNow("manuel","gonzalo"),t.faceNow("gonzalo","manuel"),await t.twoShot("gonzalo","manuel",0,2,.35),t.expr("gonzalo","angry"),t.icon("gonzalo","💢","#ff5a66"),await t.closeUp("gonzalo",{dur:.25,dist:1.1}),t.shake(.5),await t.say("gonzalo","¡¿QUÉ TE PASA?!",{expr:"angry",anim:"point"}),t.clearIcon("gonzalo"),await t.closeUp("manuel",{dur:.25,dist:1.1}),await t.say("manuel","¡Me empujaron, yo no hice nada!",{expr:"worried",anim:"present"}),n==="gonzalo"?(await t.shot(F(22.4,1.7,1.9),F(22,1.2,-4.6),.5),await t.say("gonzalo","(¿Empujaron? Ahí atrás nomás hay tres chavos chiflando y viendo el techo…)",{expr:"angry"}),await t.closeUp("gonzalo",{dur:.25,dist:1.1}),await t.say("gonzalo","¡Sí, cómo no! ¡Me aventaste a propósito!",{expr:"furious"})):(await t.overShoulder("manuel","gonzalo",.3),await t.say("gonzalo","¡Sí, cómo no! ¡Me aventaste a propósito!",{expr:"furious"}),await t.say("manuel","¡Que no! ¡Fueron ell…!",{expr:"surprised"})),tt.play("fight",.3);const s=F(22.05,0,-.5);t.place("gonzalo",s.clone().add(F(0,0,.35)),Math.PI,"brawl"),t.place("manuel",s.clone().add(F(0,0,-.35)),0,"brawl"),e.effects.startCloud(s);const r=["valeria","ximena","fer","andrea","tonito"];this.npcs.script(r),r.forEach((m,p)=>{t.place(m,F(20.6+p*.8,0,3.6+p%2*.7),Math.PI,p%2?"point":"idle"),t.expr(m,"surprised")}),this.npcs.watch(F(22.1,0,1),30,[...r,"juan","lupita","sofia"]);const o=["¡PAF!","¡ZAS!","¡CATAPLÁN!","¡AY!","¡MI PELO!","¡SUÉLTAME!","¡TÚ EMPEZASTE!","¡BONK!"];let l=0;const c=async m=>{const p=m;for(let x=0;x<p;x+=.35)Math.random()<.8&&t.comic(o[l++%o.length],s.clone().add(F(0,1.5,0)),["#ffd23f","#ff8a65","#80d8ff","#ffffff"][l%4],.6+Math.random()*.3),Math.random()<.5?tt.bonk():tt.whoosh(),t.shake(.25),await t.wait(.35)};e.cam.follow=null;const h=async(m,p,x,_=2.6)=>{for(let L=0;L<=6;L++){const C=m+(p-m)*(L/6);await t.shot(s.clone().add(F(Math.sin(C)*_*.8,1.9,Math.cos(C)*_*.6)),s.clone().add(F(0,.8,0)),x/6)}};await t.shot(F(23.8,1.8,1.5),s.clone().add(F(0,.9,0)),0),c(3),await h(.4,1.4,1.6);const u=n==="gonzalo"?"¡CAOS EN EL BAÑO!":"¡CÚBRETE!",f=["KeyA","KeyD","KeyW","KeyS"],d=Array.from({length:6},()=>f[Math.floor(Math.random()*4)]),g=c(4.5);await Q.qteSeq(u,d,4.5,n==="gonzalo"?"Esquiva los manotazos (no hay forma de ganar esto)":"Esquiva y protégete"),await g,n==="manuel"?(await t.shot(F(23.6,1.6,-3.4),F(22.2,1,-1.5),.3),t.anim("brayan","walk"),t.anim("kevin","walk"),t.anim("ulises","walk"),await t.say("kevin","¡Vámonos, vámonos! Jajajaja.",{expr:"happy",auto:1.2}),t.path("brayan",[F(22.9,0,-1.5),F(23,0,1.2),F(23.6,0,6.5),F(35,0,9)],!0),t.path("kevin",[F(23,0,-1.8),F(23.1,0,1.2),F(23.6,0,6.5),F(36,0,10)],!0),await t.path("ulises",[F(22.9,0,-2.2),F(23,0,1.2)],!0),t.path("ulises",[F(23.6,0,6.5),F(34,0,10)],!0),t.comic("(Se escapan…)",F(23,1.4,1.5),"#ffffff",.5),await t.wait(.6)):(t.place("brayan",F(35,0,9)),t.place("kevin",F(36,0,10)),t.place("ulises",F(34,0,10)),t.walk("brayan",F(44,0,40)),t.walk("kevin",F(45,0,41)),t.walk("ulises",F(43,0,41))),t.place("sofia",F(24.5,0,4.8),Math.PI/2),t.place("lupita",F(18.3,0,4.4),Math.PI/2,"idle"),t.place("juan",F(14,0,5),Math.PI/2,"idle"),t.path("sofia",[F(19.2,0,5)],!0).then(()=>t.comic("¡MAESTRA! ¡SE ESTÁN PELEANDO!",F(19.2,2.2,5),"#ffffff",.45)),await t.shot(s.clone().add(F(1.6,1.4,1.8)),s.clone().add(F(0,.9,0)),.5),c(2.1),await Q.qteMash(n==="gonzalo"?"¡PIDE TIEMPO FUERA!":"¡GRITA AUXILIO!","KeyE",7,2.4,"Presiona E repetidamente"),t.path("juan",[F(21.6,0,5),F(21.7,0,1.8),F(22,0,.5)],!0),await t.wait(1.6),await t.shot(F(23.6,1.7,2.6),s.clone().add(F(0,.9,0)),.3),await t.say("juan","¡YA, YA, SEPÁRENSE!",{expr:"angry",anim:"restrain"}),e.effects.stopCloud(),tt.play("tension",.3),t.place("juan",s.clone(),Math.PI/2,"restrain"),t.place("gonzalo",s.clone().add(F(.05,0,.9)),Math.PI,"idle"),t.place("manuel",s.clone().add(F(-.05,0,-.95)),0,"idle"),t.expr("gonzalo","angry"),t.expr("manuel","angry"),t.char("gonzalo").redTarget=.3,t.char("manuel").redTarget=.3,await t.twoShot("gonzalo","manuel",.4,2.2,.4),await t.say("juan","¡¿Qué les pasa?! ¡Están en el baño, cochinos!",{expr:"angry",anim:"restrain"}),t.path("lupita",[F(21.2,0,4.6),F(21.4,0,1.4),F(21.1,0,-.4)],!0),await t.wait(1.4),t.face("lupita",s),tt.dun(),await t.closeUp("lupita",{dur:.3,dist:1.4}),await t.say("lupita","¡¿QUÉ ESTÁ PASANDO AQUÍ?!",{expr:"furious",anim:"point"}),t.char("lupita").redTarget=0,t.anim("juan","idle"),t.place("juan",s.clone().add(F(.8,0,0)),-Math.PI/2,"idle"),t.face("gonzalo","lupita"),t.face("manuel","lupita"),await t.say("lupita","¡En mi escuela nadie se pelea! ¡Y menos en el baño!",{expr:"angry"}),await t.closeUp("gonzalo",{dur:.25}),await t.say("gonzalo","¡Maestra, él se me aventó encima!",{expr:"angry",anim:"point"}),await t.closeUp("manuel",{dur:.25}),await t.say("manuel","¡Me empujaron! ¡Yo no hice nada!",{expr:"worried",anim:"present"}),await t.closeUp("lupita",{dur:.25}),await t.say("lupita","Pues eso lo vas a explicar en la Dirección. Manuel, vente conmigo. ¡Ahora!",{expr:"angry"}),await t.closeUp("manuel",{dur:.25}),await t.say("manuel","¿Yo? ¡Pero maestra…!",{expr:"surprised"}),await t.say("lupita","Sin peros. Y tú, Gonzalo, quédate aquí: al rato hablo contigo. ¡Los demás, circulen!",{expr:"angry"}),this.npcs.unscript(r),this.npcs.unwatch(),t.char("gonzalo").redTarget=0,t.char("manuel").redTarget=0,t.expr("manuel","sad"),t.path("lupita",[F(21.8,0,1),F(21.8,0,5),F(6.3,0,5)],!1),await t.wait(.3);const v=t.path("manuel",[F(22.1,0,1),F(22.2,0,4.7),F(6.9,0,4.7)],!1);await t.shot(F(22.4,1.6,-1.6),F(22,1.1,2.6),.6),await t.wait(1.5),tt.play("none"),n==="manuel"?(await t.shot(F(14,1.8,7.6),F(18,1.1,5),.01),await t.wait(2.2),v.then(()=>{}),await this.directionScene()):(t.mover("manuel").cancel(),t.mover("lupita").cancel(),await this.gonzaloAftermath())}async directionScene(){const t=this.d,e=this.g;await t.fade(1,700),this.npcs.script(["directora","lupita"]),t.place("manuel",F(1.1,0,-9.6),Math.PI,"sitSad"),t.place("directora",F(2,0,-12),0,"sit"),t.place("lupita",F(3.7,0,-9),-Math.PI*.75,"crossed"),t.place("gonzalo",F(14,0,10.5),Math.PI/2,"idle"),t.expr("manuel","sad"),t.expr("directora","neutral"),t.expr("lupita","angry"),t.look("manuel","directora"),await t.shot(F(-2.6,2.4,-6.2),F(1.9,.9,-10.6),0),tt.play("drama",2),await t.fade(0,900),await Q.banner("DIRECCIÓN","Diez minutos después","",!1,2200),await t.closeUp("directora",{dur:1.2,dist:1.6}),await t.say("directora","A ver, Manuel. La Maestra Lupita dice que te estabas peleando en el baño.",{expr:"neutral",anim:"sit"}),await t.closeUp("manuel",{dur:.6,dist:1.4});const n=await t.choose(["¡Unos niños me empujaron!","Gonzalo empezó a pegarme.","(Quedarse callado)"]);n===0?(await t.say("manuel","¡Unos niños me empujaron! Me estaban molestando para que cantara un rap y uno me aventó.",{expr:"worried",anim:"sitSad"}),await t.say("directora","¿Cuáles niños? La maestra sólo los vio a ustedes dos.",{anim:"sit"}),await t.say("manuel","Es que… se escaparon.",{expr:"sad",anim:"sitSad"})):n===1?(await t.say("manuel","Gonzalo empezó a pegarme. Yo sólo me caí encima de él porque me empujaron.",{expr:"worried",anim:"sitSad"}),await t.say("directora","Mmm. Gonzalo dice que tú te le aventaste.",{anim:"sit"})):(await t.say("manuel","…",{expr:"sad",anim:"sitSad"}),await t.say("directora","El silencio no te va a ayudar, Manuel.",{anim:"sit"})),await t.say("lupita","Yo llegué y estaban los dos revolcándose junto a la puerta, Directora.",{expr:"angry",anim:"crossed"}),await t.closeUp("directora",{dur:.6,dist:1.5}),await t.say("directora","Mira, Manuel. Yo no vi lo que pasó. Pero hubo una pelea, y en esta escuela las peleas tienen consecuencias.",{anim:"sit"}),await t.closeUp("manuel",{dur:.5,dist:1.3}),await t.say("manuel","Pero… yo sólo me estaba lavando las manos…",{expr:"sad",anim:"sitSad"}),t.anim("directora","sitWrite"),await t.shot(F(3.2,1.5,-10),F(2,.85,-11),.8),tt.chalk(),await t.wait(.5),tt.chalk(),await t.wait(.5),tt.chalk(),await t.say("directora","Te voy a levantar un reporte. Tus papás tienen que firmarlo y traerlo el lunes.",{anim:"sitWrite"}),t.anim("directora","present"),t.comic("REPORTE",F(1.6,1.25,-10.3),"#ff5a66",.55),tt.dun(),await t.closeUp("manuel",{dur:.5,dist:1.25}),await t.choose(["Está bien…","¡No es justo!"])===0?(await t.say("manuel","Está bien…",{expr:"sad",anim:"sitSad"}),await t.say("directora","Gracias por entender. Puedes quedarte un momento aquí.",{anim:"sit"})):(await t.say("manuel","¡No es justo!",{expr:"angry",anim:"sitSad"}),await t.say("directora","La vida no siempre es justa, Manuel. Pero las reglas sí son claras.",{anim:"sit"})),t.anim("directora","sit"),await this.manuelBreakdown(!1),await t.fade(1,1200),tt.play("none"),await t.wait(.5),Q.cinematic(!1),t.end(),e.finishStory("manuel")}async manuelBreakdown(t){const e=this.d,n=this.g,i=n.charOf("manuel");e.look("manuel",null),e.face("manuel",Math.PI),t?(await e.shot(F(-1.2,1.55,2.6),i.headWorld().add(F(0,-.1,0)),0),await e.shot(F(-.4,1.45,.6),i.headWorld().add(F(0,-.1,0)),2.5)):(await e.shot(F(1.1-1.6,1.4,-9.6-2.2),i.headWorld(),0),await e.closeUp("manuel",{dur:3,dist:1.6,side:.2,h:-.08})),e.expr("manuel","sad"),e.anim("manuel","sitSad"),await e.wait(1.4),e.expr("manuel","cry"),e.anim("manuel","cry"),tt.sob(),t?await e.wait(1.6):await e.closeUp("manuel",{dur:2.2,dist:1.05,side:.15,h:-.1}),tt.sob(),await e.wait(1.3),tt.sob(),await e.wait(1.2),e.anim("manuel","wipe"),e.expr("manuel","sad"),t||await e.closeUp("manuel",{dur:1.2,dist:.95,side:-.25}),await e.wait(2),e.anim("manuel","sitSad"),tt.play("none",.8),await e.wait(1),e.expr("manuel","angry"),tt.dun(),t?await e.wait(1.6):await e.closeUp("manuel",{dur:2.4,dist:.85,side:0,h:.02}),e.anim("manuel","rage"),i.redTarget=1,i.onSteam=s=>n.effects.steam(s),await e.wait(1),e.expr("manuel","furious"),tt.rage(),e.shake(.4),await e.wait(1.6),e.comic("GRRRRR",i.headWorld().add(F(0,.45,0)),"#ff3b3b",.7),tt.rage(),e.shake(.7),t?await e.wait(1.2):await e.closeUp("manuel",{dur:1.6,dist:.62,side:0,h:.02}),await e.say("manuel","(…Esto… no… se va… a quedar… así.)",{expr:"furious",anim:"rage"}),await e.wait(1)}async gonzaloAftermath(){const t=this.d;await t.twoShot("gonzalo","juan",.6,2.4,.4),t.face("juan","gonzalo"),t.face("gonzalo","juan"),t.expr("gonzalo","angry"),await t.say("gonzalo","¡¿Viste eso?! ¡Se me aventó encima nomás porque sí!",{expr:"angry",anim:"point"}),await t.say("juan","Gonzalo… yo venía atrás de ti. Vi salir a tres chavos corriendo del baño, muertos de risa.",{expr:"worried"}),await t.say("gonzalo","¿Tres chavos? …¿Los que estaban chiflando?",{expr:"surprised"}),await t.say("juan","Pregúntale a Diego, estaba en el baño. Y Sofía y Don Pepe andaban por el pasillo.",{expr:"neutral"}),await t.say("gonzalo","(Ay no… ¿y si Manuel decía la verdad?)",{expr:"worried"}),tt.play("school",2),t.end(),this.next()}async witness(t){const e=this.d;e.begin(),e.face(t,"gonzalo"),e.face("gonzalo",t),await e.twoShot("gonzalo",t,.5,2.6,.4),t==="diego"?(await e.say("gonzalo","Diego, ¿tú estabas en el baño? ¿Qué viste?",{expr:"worried"}),await e.say("diego","Todo. Yo estaba en el cubículo. Brayan, Kevin y Ulises le pedían a Manuel que cantara el rap de Vegetta777.",{expr:"worried"}),await e.say("diego","Manuel les dijo que no como mil veces. Y luego Brayan lo empujó. Justo cuando tú ibas entrando.",{expr:"sad"}),await e.say("gonzalo","…Entonces sí lo empujaron.",{expr:"surprised"}),this.flags.wDiego=!0):t==="sofia"?(await e.say("gonzalo","Sofía, ¿viste quién salió del baño?",{expr:"worried"}),await e.say("sofia",'Sí. Brayan, Kevin y Ulises salieron corriendo y riéndose. Kevin decía: "¡Se le aventó a Gonzalo, jajaja!"',{expr:"angry"}),await e.say("sofia","Yo fui por la maestra Lupita. Pensé que estaban molestando a alguien.",{expr:"neutral"}),this.flags.wSofia=!0):(await e.say("gonzalo","Don Pepe, ¿usted escuchó algo en el baño?",{expr:"worried"}),await e.say("pepe",'Mire, joven. Yo trapeaba aquí afuerita. Oí: "¡Cántate el rap, cántate el rap!" y luego un ¡pum!',{expr:"neutral",anim:"crossed"}),await e.say("pepe","Y luego usted gritando como gallina. Eso también lo oí.",{expr:"smug",anim:"crossed"}),await e.say("gonzalo","No grité como gallina…",{expr:"sad"}),await e.say("pepe","Como gallina enojada, pues.",{expr:"smug",anim:"crossed"}),this.flags.wPepe=!0);const n=["wDiego","wSofia","wPepe"].filter(i=>this.flags[i]).length;Q.toast(`Testigo interrogado (${n}/3)`),e.end()}async gonzaloFinale(){const t=this.d,e=this.g;t.begin(),this.npcs.script(["directora","lupita","manuel","juan"]),t.place("gonzalo",F(-1.5,0,3.15),Math.PI,"idle"),t.place("juan",F(-.3,0,3.6),Math.PI,"idle"),t.place("manuel",F(1.1,0,-9.6),Math.PI,"sitSad"),t.place("directora",F(2,0,-12),0,"sit"),t.place("lupita",F(3.7,0,-9),-Math.PI*.75,"crossed"),await t.shot(F(-.6,1.7,4.8),F(-1.3,1.3,1.8),0),await t.say("gonzalo","(Ahí está… en la dirección. Con la directora.)",{expr:"worried"}),tt.play("drama",1.5),await t.say("directora","…te voy a levantar un reporte. Tus papás tienen que firmarlo.",{name:"Directora (a lo lejos)"}),t.comic("REPORTE",F(1.6,1.25,-10.3),"#ff5a66",.55),await this.manuelBreakdown(!0),t.anim("manuel","rage"),t.look("manuel","gonzalo"),await t.shot(F(-.4,1.45,.6),e.charOf("manuel").headWorld(),.3),await t.wait(1),tt.stinger(),t.comic("!!!",e.charOf("manuel").headWorld().add(F(0,.4,0)),"#ff3b3b",.6),await t.closeUp("gonzalo",{dur:.3,dist:.8,side:.25}),t.expr("gonzalo","surprised"),await t.say("gonzalo","…Ay, no. Ya la regué.",{expr:"worried"}),await t.twoShot("gonzalo","juan",.4,2.2,.35),t.face("juan","gonzalo"),await t.say("juan","Sí. La regaste. Con mayúsculas.",{expr:"bored"}),await t.say("gonzalo","¿Crees que me perdone si le invito una torta?",{expr:"worried"}),await t.say("juan","Yo que tú le invitaba la cooperativa entera.",{expr:"smug"}),await t.fade(1,1200),tt.play("none"),e.charOf("manuel").redTarget=0,t.end(),e.finishStory("gonzalo")}}const Ce=a=>a>Gt-.5?1:0,T0={"BAÑO HOMBRES":"Baño H","BAÑO MUJERES":"Baño M","SALA DE MAESTROS":"Maestros",DIRECCIÓN:"Dirección",CONSERJERÍA:"Conserje",LABORATORIO:"Lab",COMPUTACIÓN:"Cómputo",BIBLIOTECA:"Biblioteca",BODEGA:"Bodega","Cancha de básquet":"Básquet","Cancha de fútbol":"Fútbol","Patio central":"Patio",Cooperativa:"Coop."},bc=a=>T0[a]??a,A0={Dirección:"Dir",Maestros:"Prof","Baño H":"H","Baño M":"M",Conserje:"C",Cómputo:"PC",Biblioteca:"Libros",Bodega:"B",Básquet:"Bás",Fútbol:"Fut",Gradas:""},wc=new Set(["Pasillo","Escaleras","Mesas","Entrada","Caseta","Calle"]),Ec={manuel:"#ff3b4a",gonzalo:"#2f7bff",juan:"#3cb371"};function Tc(a){const t=a.getBoundingClientRect();if(t.width<4||t.height<4)return null;const e=Math.min(devicePixelRatio||1,2),n=Math.round(t.width*e),i=Math.round(t.height*e);(a.width!==n||a.height!==i)&&(a.width=n,a.height=i);const s=a.getContext("2d");return s.setTransform(e,0,0,e,0,0),{g:s,W:t.width,H:t.height}}function Il(a,t){return a.floor===t}function Ac(a,t,e,n,i){if(t.length<2)return;a.save(),a.lineCap="round",a.lineJoin="round";const s=performance.now()/60;for(let r=1;r<t.length;r++){const o=t[r-1],l=t[r],c=Ce(o.y)===e&&Ce(l.y)===e,h=Ce(o.y)!==Ce(l.y);if(!c&&!h)continue;const[u,f]=n(o.x,o.z),[d,g]=n(l.x,l.z);a.strokeStyle="rgba(0,0,0,0.45)",a.lineWidth=i+3,a.setLineDash([]),a.beginPath(),a.moveTo(u,f),a.lineTo(d,g),a.stroke(),a.strokeStyle=h?"#ffffff":"#ffd23f",a.lineWidth=i,a.setLineDash([i*2.2,i*1.6]),a.lineDashOffset=-s,a.beginPath(),a.moveTo(u,f),a.lineTo(d,g),a.stroke()}a.restore()}function Rc(a,t,e,n,i){a.save(),a.translate(t,e),a.rotate(n),a.fillStyle="#ffd23f",a.strokeStyle="#000",a.lineWidth=2,a.beginPath(),a.moveTo(0,-i),a.lineTo(i*.7,i*.75),a.lineTo(0,i*.35),a.lineTo(-i*.7,i*.75),a.closePath(),a.fill(),a.stroke(),a.restore()}function Dl(a,t,e,n){const i=Tc(a);if(!i)return;const{g:s,W:r,H:o}=i,l=-66,c=68,h=-22,u=n?56:66,f=n?6:12,d=Math.min((r-f*2)/(c-l),(o-f*2)/(u-h)),g=(r-(c-l)*d)/2,v=(o-(u-h)*d)/2,m=L=>g+(L-l)*d,p=L=>v+(L-h)*d,x=(L,C)=>[m(L),p(C)];s.clearRect(0,0,r,o),s.fillStyle=n?"rgba(63,107,51,0.92)":"#5f9a45",s.fillRect(0,0,r,o),s.fillStyle="#8a8478",s.fillRect(m(-64),p(8),128*d,40*d),s.fillStyle="#3b3d42",s.fillRect(m(-40),p(48.5),90*d,16*d),s.strokeStyle="rgba(0,0,0,0.35)",s.lineWidth=2,s.strokeRect(m(-64),p(-20),130*d,68*d);for(const L of t.school.mapRects){const C=Il(L,e);!C&&!(e===1&&L.floor===0)||(s.globalAlpha=C?1:.22,s.fillStyle=L.color,s.fillRect(m(L.x0),p(L.z0),(L.x1-L.x0)*d,(L.z1-L.z0)*d),s.strokeStyle="rgba(255,255,255,0.35)",s.lineWidth=1,s.strokeRect(m(L.x0),p(L.z0),(L.x1-L.x0)*d,(L.z1-L.z0)*d),s.globalAlpha=1)}s.textAlign="center",s.textBaseline="middle";for(const L of t.school.mapRects){if(!Il(L,e)||wc.has(L.name))continue;const C=(L.x1-L.x0)*d;let E=n||C<60?bc(L.name):L.name;const R=Math.max(n?8:9,Math.min(n?11:13,C/Math.max(4,E.length*.62)));if(s.font=`800 ${R}px Nunito, sans-serif`,s.measureText(E).width>C+2&&(E=A0[E]??""),!E||s.measureText(E).width>C+6)continue;const S=m((L.x0+L.x1)/2),y=p((L.z0+L.z1)/2);s.lineWidth=3,s.strokeStyle="rgba(0,0,0,0.55)",s.strokeText(E,S,y),s.fillStyle="#fff",s.fillText(E,S,y)}for(const L of t.npcs.npcs){if(Ce(L.char.position.y)!==e)continue;const C=Ec[L.id];s.fillStyle=C??(L.def.role==="student"?"rgba(255,255,255,0.6)":"rgba(255,210,63,0.85)"),s.beginPath(),s.arc(m(L.char.position.x),p(L.char.position.z),C?n?3.5:4.5:n?1.8:2.5,0,Math.PI*2),s.fill()}if(Ac(s,t.route,e,x,n?2.5:3.5),t.target&&Ce(t.target.y)===e){const L=Math.sin(performance.now()/200)*2;s.strokeStyle="#ffd23f",s.lineWidth=3,s.beginPath(),s.arc(m(t.target.x),p(t.target.z),(n?7:10)+L,0,Math.PI*2),s.stroke(),s.fillStyle="#ffd23f",s.font=`900 ${n?11:13}px Nunito`,s.fillText("★",m(t.target.x),p(t.target.z))}Ce(t.player.y)===e&&Rc(s,m(t.player.x),p(t.player.z),Math.PI-t.heading,n?7:9),s.fillStyle="rgba(0,0,0,0.5)",s.beginPath(),s.arc(r-18,18,12,0,Math.PI*2),s.fill(),s.fillStyle="#ff5a66",s.font="900 12px Nunito",s.fillText("N",r-18,18);const _=e?"2º PISO":"PLANTA BAJA";s.font=`900 ${n?10:12}px Nunito`,s.textAlign="left";const M=s.measureText(_).width;if(s.fillStyle="rgba(0,0,0,0.55)",s.fillRect(6,6,M+14,n?18:22),s.fillStyle="#ffd23f",s.fillText(_,13,n?15:17),t.target&&Ce(t.target.y)!==e){const L=Ce(t.target.y)?"★ Objetivo en el 2º piso ↑":"★ Objetivo en planta baja ↓";s.font=`800 ${n?10:12}px Nunito`;const C=s.measureText(L).width;s.fillStyle="rgba(0,0,0,0.6)",s.fillRect(6,o-(n?24:30),C+14,n?18:22),s.fillStyle="#fff",s.fillText(L,13,o-(n?15:19))}n||(s.font="700 12px Nunito",s.textAlign="right",s.fillStyle="rgba(0,0,0,0.55)",s.fillRect(r-300,o-30,292,22),s.fillStyle="#fff",s.fillText("▲ Tú   ★ Objetivo   ┅ Ruta   ● Juan / Gonzalo / Manuel",r-14,o-19))}function R0(a,t,e){const n=Tc(a);if(!n)return;const{g:i,W:s,H:r}=n,o=s/2,l=r/2,c=s/2,h=Ce(t.player.y),u=Math.PI+t.camYaw,f=Math.cos(u),d=Math.sin(u),g=(_,M)=>{const L=(_-t.player.x)*e,C=(M-t.player.z)*e;return[o+L*f-C*d,l+L*d+C*f]};i.clearRect(0,0,s,r),i.save(),i.beginPath(),i.arc(o,l,c,0,Math.PI*2),i.clip(),i.fillStyle="#3f6b33",i.fillRect(0,0,s,r),i.save(),i.translate(o,l),i.rotate(u);const v=_=>(_-t.player.x)*e,m=_=>(_-t.player.z)*e;i.fillStyle="#8a8478",i.fillRect(v(-64),m(8),128*e,40*e),i.fillStyle="#3b3d42",i.fillRect(v(-40),m(48.5),90*e,16*e);for(const _ of t.school.mapRects)_.floor===h&&(i.fillStyle=_.color,i.fillRect(v(_.x0),m(_.z0),(_.x1-_.x0)*e,(_.z1-_.z0)*e),i.strokeStyle="rgba(255,255,255,0.3)",i.lineWidth=1,i.strokeRect(v(_.x0),m(_.z0),(_.x1-_.x0)*e,(_.z1-_.z0)*e));i.restore(),i.textAlign="center",i.textBaseline="middle",i.font=`800 ${e>3?11:9}px Nunito, sans-serif`;for(const _ of t.school.mapRects){if(_.floor!==h||wc.has(_.name))continue;const[M,L]=g((_.x0+_.x1)/2,(_.z0+_.z1)/2);if(Math.hypot(M-o,L-l)>c-14)continue;const C=bc(_.name);i.lineWidth=3,i.strokeStyle="rgba(0,0,0,0.6)",i.strokeText(C,M,L),i.fillStyle="#fff",i.fillText(C,M,L)}for(const _ of t.npcs.npcs){if(Ce(_.char.position.y)!==h)continue;const[M,L]=g(_.char.position.x,_.char.position.z),C=Ec[_.id];i.fillStyle=C??"rgba(255,255,255,0.65)",i.beginPath(),i.arc(M,L,C?3.5:2,0,Math.PI*2),i.fill()}if(Ac(i,t.route,h,g,2.5),t.target){let[_,M]=g(t.target.x,t.target.z);const L=Math.hypot(_-o,M-l),C=c-10,E=L>C;E&&(_=o+(_-o)*C/L,M=l+(M-l)*C/L),i.fillStyle=Ce(t.target.y)===h?"#ffd23f":"#ffffff",i.strokeStyle="#000",i.lineWidth=2,i.beginPath(),i.arc(_,M,E?5:6.5,0,Math.PI*2),i.fill(),i.stroke(),Ce(t.target.y)!==h&&(i.fillStyle="#000",i.font="900 9px Nunito",i.fillText(Ce(t.target.y)?"↑":"↓",_,M+.5))}i.restore(),i.strokeStyle="rgba(255,255,255,0.45)",i.lineWidth=3,i.beginPath(),i.arc(o,l,c-1.5,0,Math.PI*2),i.stroke();const[p,x]=(()=>{const _=u-Math.PI/2;return[o+Math.cos(_)*(c-10),l+Math.sin(_)*(c-10)]})();i.fillStyle="rgba(0,0,0,0.7)",i.beginPath(),i.arc(p,x,8,0,Math.PI*2),i.fill(),i.fillStyle="#ff5a66",i.font="900 10px Nunito",i.fillText("N",p,x+.5),i.fillStyle="rgba(0,0,0,0.6)",i.fillRect(o-18,r-22,36,15),i.fillStyle="#ffd23f",i.font="900 10px Nunito",i.fillText(h?"2º":"PB",o,r-14),Rc(i,o,l,0,8)}const fe=a=>document.querySelector(a);class C0{renderer;scene=new ol;camera=new Xe(60,innerWidth/innerHeight,.1,600);input;settings=Te.settings();school;env;effects;npcs;player;cam;director;story=null;protagonist="gonzalo";state="loading";paused=!1;clock=new t0;t=0;menuT=0;selScene=new ol;selChars={};selected="gonzalo";selFree=!1;selT=0;mapFloor=0;interactTarget=null;wpTmp=new T;mapZoom=2.6;route=[];routeT=0;unlockAt=0;appliedShadows=-1;constructor(){this.renderer=new Dm({antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(innerWidth,innerHeight),this.renderer.toneMapping=Ol,this.renderer.toneMappingExposure=1.05,this.renderer.outputColorSpace=Me,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Nl,fe("#app").appendChild(this.renderer.domElement),this.input=new e0(this.renderer.domElement),this.director=new b0(this),addEventListener("resize",()=>this.resize())}async boot(){await new Promise(t=>setTimeout(t,30)),await document.fonts?.ready.catch(()=>{}),this.school=new f0(this.scene),this.env=new p0(this.scene,this.school.world),this.effects=new g0(this.scene),this.npcs=new v0(this.school,this.scene),this.buildSelectScene(),this.populate(null),this.applySettings(),this.resize(),this.renderer.compile(this.scene,this.camera),fe(".load-sub").textContent="Listo.",fe(".load-start").classList.remove("hidden"),fe("#loading").addEventListener("click",()=>{tt.init(),this.applySettings(),fe("#loading").classList.add("hidden"),this.toMenu()},{once:!0}),this.bindUI(),this.renderer.setAnimationLoop(()=>this.frame())}resize(){this.camera.aspect=innerWidth/innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(innerWidth,innerHeight)}applySettings(){const t=this.settings;tt.setVolumes(t.master,t.music,t.sfx),this.renderer.setPixelRatio(Math.min(devicePixelRatio,t.scale)),this.env&&this.env.setShadows(t.shadows,this.renderer),this.player&&(this.player.sens=t.sens,this.player.invertY=t.invertY),this.applyMapMode(),this.appliedShadows!==t.shadows&&(this.appliedShadows=t.shadows,this.scene.traverse(e=>{const n=e.material;n&&(n.needsUpdate=!0)}))}applyMapMode(){const t=this.settings.mapMode;fe("#minimap").classList.toggle("hidden",t!==1),fe("#bigmap").classList.toggle("hidden",t!==2),fe("#map-hint").classList.toggle("hidden",t===0),document.body.classList.toggle("mapbig",t===2)}cycleMapMode(){this.settings.mapMode=(this.settings.mapMode+1)%3,Te.saveSettings(this.settings),this.applyMapMode(),Q.toast(["Mapa en pantalla: apagado","Mapa en pantalla: minimapa","Mapa en pantalla: grande"][this.settings.mapMode],1500)}mapView(){return{school:this.school,player:this.player.pos,heading:this.player.char.yaw,camYaw:this.player.camYaw,target:this.story?.waypoint()??null,route:this.route,npcs:this.npcs}}updateRoute(t,e){if(this.routeT-=t,this.routeT>0)return;if(this.routeT=.35,!e){this.route=[];return}const n=this.school.nav,i=n.path(n.nearest(this.player.pos),n.nearest(e));this.route=[this.player.pos.clone(),...i,e.clone()]}populate(t){for(const n of this.npcs.npcs)this.scene.remove(n.char.root);this.npcs.npcs=[],this.effects.clearIcons(),this.effects.stopCloud();const e=y0(t??"gonzalo");t||e.push({id:"gonzalo",role:"student",group:"2A",seatIndex:5,start:new T(4,0,22),lines:["¡Quiubo!"]});for(const n of e){const i=new ls(Bn[n.id]);i.onSteam=s=>this.effects.steam(s),this.npcs.add(n,i,n.start.clone(),Math.random()*Math.PI*2)}if(this.player&&this.scene.remove(this.player.char.root),t){const n=new ls(Bn[t]);n.onSteam=i=>this.effects.steam(i),this.scene.add(n.root),this.player=new Al(n,this.school),this.player.sens=this.settings.sens,this.player.invertY=this.settings.invertY,this.cam=new Rl(this.camera,this.school)}else{const n=new ls(Bn.gonzalo);n.root.visible=!1,this.player=new Al(n,this.school),this.cam=new Rl(this.camera,this.school),this.npcs.setPhase({kind:"recess"},!1)}}get playerSeatIndex(){return M0[this.protagonist]}charOf(t){return t===this.protagonist&&this.state==="play"?this.player.char:this.npcs.get(t).char}toMenu(){this.state="menu",this.paused=!1,this.story=null,this.director.reset(),["#hud","#pause","#tab","#map","#ending","#credits","#select","#dialog","#choices","#qte"].forEach(n=>fe(n).classList.add("hidden")),Q.cinematic(!1),Q.waypoint(0,0,null),this.input.unlock(),this.populate(null);const t=!!Te.game();fe("#btn-continue").disabled=!t;const e=Te.meta();fe("#btn-free").classList.toggle("hidden",!(e.completed.gonzalo||e.completed.manuel)),Q.screen("menu",!0),Q.fade(0,600),tt.play("menu"),tt.setCrowd(.6),tt.outdoors=!0}toSelect(t=!1){this.state="select",this.selFree=t,Q.screen("menu",!1),Q.screen("select",!0),fe(".select-buttons .primary").textContent=t?"EXPLORAR":"COMENZAR HISTORIA";const e=Te.meta();for(const n of["gonzalo","manuel"])fe(`[data-badge="${n}"]`).textContent=e.completed[n]?"★ Historia completada":"";this.pick(Te.meta().lastChar??"gonzalo")}pick(t){this.selected=t,document.querySelectorAll(".card").forEach(i=>i.classList.toggle("on",i.dataset.char===t));const e=this.selChars[t];e.anim="cheer",e.setExpr("happy"),setTimeout(()=>{this.selected===t&&(e.anim="present")},900),setTimeout(()=>{this.selected===t&&(e.anim="idle",e.setExpr("neutral"))},2200);const n=this.selChars[t==="gonzalo"?"manuel":"gonzalo"];n.anim="idle",n.setExpr("neutral"),tt.confirm()}async startGame(t,e,n=!1){await Q.fade(1,500),["#menu","#select","#ending","#credits","#pause"].forEach(r=>fe(r).classList.add("hidden")),this.director.reset(),this.protagonist=t,this.state="play",this.paused=!1,this.populate(t);const i=Te.meta();i.lastChar=t,Te.saveMeta(i),Q.setChar(t==="gonzalo"?"GONZALO":"MANUEL",t==="gonzalo"?"#2f7bff":"#ff3b4a");const s=n?Te.game():null;this.story=new E0(this,t,e),s?(this.player.pos.set(...s.pos),this.player.camYaw=s.yaw,this.story.start({step:s.step,minutes:s.minutes,flags:s.flags})):e?(this.player.pos.set(2,0,20),this.player.camYaw=Math.PI,this.story.start()):(this.player.pos.copy(this.school.poi.spawn),this.player.camYaw=Math.PI,this.player.char.yaw=Math.PI,this.story.start()),this.cam.release(),Q.showHUD(!0),tt.play("school"),await Q.fade(0,700),!s&&!e&&Q.banner("7:00 AM · VIERNES","COLEGIO GANTE","Día de civil. Un día normal… por ahora.",!1,3600),Q.lockHint(!0)}finishStory(t){const e=Te.meta();e.completed[t]=!0,Te.saveMeta(e),Te.clearGame(),this.state="ending",this.input.unlock(),Q.showHUD(!1),Q.fade(0,800),tt.play("ending");const n=t==="gonzalo"?"Manuel":"Gonzalo";fe("#ending-title").textContent=t==="gonzalo"?"Gonzalo no lo vio venir":"Manuel nunca lo olvidaría",fe("#ending-text").textContent=t==="gonzalo"?"Gonzalo descubrió que Manuel había sido empujado por Brayan, Kevin y Ulises. Demasiado tarde para evitar el reporte, pero justo a tiempo para deberle una torta. Muchas tortas.":"Manuel sólo quería lavarse las manos. Terminó con un reporte, una pelea que no empezó y una furia legendaria. Y nunca, jamás, cantó el rap de Vegetta777.",fe('#ending [data-act="other"]').textContent=`Vivirlo como ${n}`,Q.screen("ending",!0)}save(t=!1){if(!this.story||this.story.free){t||Q.toast("En exploración libre no se guarda progreso de historia");return}Te.saveGame({char:this.protagonist,free:!1,step:this.story.step,minutes:this.story.minutes,pos:[this.player.pos.x,this.player.pos.y,this.player.pos.z],yaw:this.player.camYaw,flags:this.story.flags,savedAt:Date.now()}),t?Q.toast("Progreso guardado",1600):Q.toast("💾 Partida guardada")}setPause(t){this.state==="play"&&(this.paused=t,Q.screen("pause",t),t?(this.input.unlock(),tt.click()):(Q.screen("tab",!1),Q.screen("map",!1),Q.screen("settings",!1)))}bindUI(){const t=(e,n)=>document.querySelectorAll(e).forEach(i=>i.addEventListener("click",s=>{s.stopPropagation(),tt.click(),n(i)}));document.querySelectorAll("button").forEach(e=>e.addEventListener("mouseenter",()=>tt.hover())),t("#menu [data-act]",e=>{const n=e.dataset.act;if((n==="new"||n==="select")&&this.toSelect(!1),n==="free"&&this.toSelect(!0),n==="continue"){const i=Te.game();i&&this.startGame(i.char,!1,!0)}n==="settings"&&this.openSettings(),n==="credits"&&this.showCredits()}),t("#select [data-act]",e=>{e.dataset.act==="back"&&(Q.screen("select",!1),this.toMenu()),e.dataset.act==="start"&&(Te.clearGame(),this.startGame(this.selected,this.selFree))}),t(".card",e=>this.pick(e.dataset.char)),t("#pause [data-act]",e=>{const n=e.dataset.act;n==="resume"&&(this.setPause(!1),this.input.lock()),n==="schedule"&&(this.fillTab(),Q.screen("tab",!0)),n==="map"&&(this.setMapFloor(Ce(this.player.pos.y)),Q.screen("map",!0)),n==="settings"&&this.openSettings(),n==="save"&&this.save(!1),n==="mainmenu"&&Q.fade(1,400).then(()=>this.toMenu())}),t("#ending [data-act]",e=>{const n=e.dataset.act;Q.screen("ending",!1),n==="other"&&this.startGame(this.protagonist==="gonzalo"?"manuel":"gonzalo",!1),n==="free"&&this.startGame(this.protagonist,!0),n==="credits"&&this.showCredits(),n==="mainmenu"&&this.toMenu()}),t('#settings [data-act="close"]',()=>Q.screen("settings",!1)),t(".map-floors button",e=>this.setMapFloor(Number(e.dataset.floor))),fe("#credits").addEventListener("click",()=>this.closeCredits()),document.querySelectorAll("#settings [data-set]").forEach(e=>{const n=e;n.addEventListener("input",()=>{const i=n.dataset.set,s=this.settings;s[i]=n.type==="checkbox"?n.checked:Number(n.value),Te.saveSettings(this.settings),this.applySettings()})}),this.renderer.domElement.addEventListener("click",()=>{this.state==="play"&&!this.paused&&this.input.lock()}),document.addEventListener("pointerlockchange",()=>{document.pointerLockElement||(this.unlockAt=performance.now()),!document.pointerLockElement&&this.state==="play"&&!this.paused&&!Q.busy()&&!this.director.active&&this.setPause(!0)})}setMapFloor(t){this.mapFloor=t,document.querySelectorAll(".map-floors button").forEach(e=>e.classList.toggle("on",Number(e.dataset.floor)===t))}openSettings(){document.querySelectorAll("#settings [data-set]").forEach(t=>{const e=t,n=this.settings[e.dataset.set];e.type==="checkbox"?e.checked=!!n:e.value=String(n)}),Q.screen("settings",!0)}showCredits(){this.state="credits",Q.screen("menu",!1);const t=fe(".credits-roll");t.style.animation="none",t.offsetWidth,t.style.animation="",Q.screen("credits",!0),tt.play("ending")}closeCredits(){Q.screen("credits",!1),this.toMenu()}fillTab(){const t=fe("#schedule-table"),e=this.story?.minutes??420,n=Br(e);t.innerHTML=Oe.map((l,c)=>`<tr class="${c===n?"now":c<n?"done":""}"><td>${ta(l.start)}</td><td>${l.label}</td></tr>`).join("");const i=fe("#mission-list"),s=this.story;if(!s){i.innerHTML="";return}if(s.free){i.innerHTML='<div class="mission"><div class="mt">Exploración libre</div><div class="mo">Recorre la escuela, habla con todos y toma la clase que quieras.</div></div>';return}const r=[],o=s.steps.findIndex(l=>l.id==="main");r.push(`<div class="mission ${s.step>0?"done":""}"><div class="mt">Entrada</div><div class="mo">Entra a la secundaria</div></div>`),r.push(`<div class="mission ${s.step>=o?"done":""}"><div class="mt">Un día normal</div><div class="mo">Asiste a tus clases y sobrevive al receso</div></div>`),s.step>=o?r.push(`<div class="mission main"><div class="mt">★ Todo por un rap</div><div class="mo">${s.cur?.obj()??""}</div></div>`):r.push(`<div class="mission"><div class="mt">Actual</div><div class="mo">${s.cur?.obj()??""}</div></div>`),i.innerHTML=r.join("")}buildSelectScene(){const t=this.selScene;t.background=new It("#0f1424"),t.fog=new la("#0f1424",8,22),t.add(new _c("#8fb6ff","#1a1020",.9));const e=new Mc("#fff2dd",2.2);e.position.set(3,6,5),e.castShadow=!0,e.shadow.mapSize.set(1024,1024),t.add(e);const n=new zr("#3f8bff",25,10);n.position.set(-2.5,2.5,1.5),t.add(n);const i=new zr("#ff3b4a",25,10);i.position.set(2.5,2.5,1.5),t.add(i);const s=new Jt(new En(4.2,4.4,.3,48),new re({color:"#2a2f45",roughness:.4,metalness:.2}));s.position.y=-.15,s.receiveShadow=!0,t.add(s);const r=new Jt(new dn(4.25,.04,8,64),new re({color:"#ffd23f",emissive:"#ffd23f",emissiveIntensity:1.2}));r.rotation.x=Math.PI/2,t.add(r);for(let c=0;c<12;c++){const h=new Jt(new me(.9,2.4,.5),new re({color:c%2?"#2e6fb5":"#c4552f",roughness:.5})),u=-.9+c/11*1.8;h.position.set(Math.sin(u)*7,1.2,-Math.cos(u)*7),h.lookAt(0,1.2,0),t.add(h)}const o=new ls(Bn.gonzalo),l=new ls(Bn.manuel);o.position.set(-1.1,0,0),o.yaw=.25,l.position.set(1.1,0,0),l.yaw=-.25;for(const c of[o,l])c.root.traverse(h=>{h.isMesh&&(h.castShadow=!0)}),c.root.scale.setScalar(1.25),t.add(c.root);this.selChars={gonzalo:o,manuel:l}}noRender=!1;sim(t,e=[]){this.noRender=!0;const n=Math.round(t*30);for(let i=0;i<n;i++){for(const s of e)this.input.pressed.add(s);this.t+=1/30,this.state==="play"&&this.framePlay(1/30),this.input.endFrame()}this.noRender=!1}frame(){const t=Math.min(.05,this.clock.getDelta());this.t+=t;const e=this.input;this.state==="select"?this.frameSelect(t):this.state==="menu"||this.state==="credits"||this.state==="loading"||this.state==="ending"?this.frameMenu(t):this.state==="play"&&this.framePlay(t),e.hit("Escape")&&this.state==="credits"&&this.closeCredits(),e.endFrame()}frameMenu(t){this.menuT+=t;const e=this.menuT;if(this.state!=="ending"){const n=e*.04;this.camera.position.set(Math.sin(n)*26,7.5+Math.sin(e*.13)*1.5,30+Math.cos(n)*14),this.camera.lookAt(Math.sin(n*.7)*6,3,12),this.npcs.playerPos.copy(this.camera.position),this.npcs.update(t,this.t),this.school.update(t,this.t,[],()=>{}),this.env.update(t,this.t,new T(0,0,15),!1),this.effects.update(t)}this.renderer.render(this.scene,this.camera)}frameSelect(t){this.selT+=t;const e=this.selChars[this.selected],n=Math.sin(this.selT*.3)*1+(this.selected==="gonzalo"?-.25:.25),i=e.position.clone().add(new T(0,1.15,0)),s=i.clone().add(new T(Math.sin(n)*3.6,.35,Math.cos(n)*3.6));this.camera.position.lerp(s,Math.min(1,t*2)),this.camera.lookAt(i);for(const o of Object.values(this.selChars))o.update(t);const r=this.input;(r.hit("KeyA")||r.hit("ArrowLeft"))&&this.pick("gonzalo"),(r.hit("KeyD")||r.hit("ArrowRight"))&&this.pick("manuel"),r.hit("Enter")&&(Te.clearGame(),this.startGame(this.selected,this.selFree)),r.hit("Escape")&&(Q.screen("select",!1),this.toMenu()),this.renderer.render(this.selScene,this.camera)}framePlay(t){const e=this.input,n=this.story;if(e.hit("Escape")&&performance.now()-this.unlockAt>400&&(Q.isOpen("settings")?Q.screen("settings",!1):Q.isOpen("tab")||Q.isOpen("map")?(Q.screen("tab",!1),Q.screen("map",!1),Q.isOpen("pause")||(this.paused=!1)):this.setPause(!this.paused)),!Q.busy()){if(e.hit("Tab")){const u=!Q.isOpen("tab");this.fillTab(),Q.screen("tab",u),Q.screen("map",!1),this.paused=u||Q.isOpen("pause"),u&&e.unlock()}if(e.hit("KeyM")){const u=!Q.isOpen("map");u&&this.setMapFloor(Ce(this.player.pos.y)),Q.screen("map",u),Q.screen("tab",!1),this.paused=u||Q.isOpen("pause"),u&&e.unlock()}e.hit("KeyN")&&this.cycleMapMode(),(e.hit("Equal")||e.hit("NumpadAdd")||e.hit("BracketRight"))&&(this.mapZoom=Math.min(5,this.mapZoom*1.3)),(e.hit("Minus")||e.hit("NumpadSubtract")||e.hit("Slash"))&&(this.mapZoom=Math.max(1.2,this.mapZoom/1.3))}if(Q.isOpen("map")&&(e.hit("Digit1")&&this.setMapFloor(0),e.hit("Digit2")&&this.setMapFloor(1),Dl(fe("#map-canvas"),this.mapView(),this.mapFloor,!1)),this.paused){this.renderer.render(this.scene,this.camera);return}const i=this.director.active,s=i||Q.busy();this.director.update(t),n.update(t),!s&&e.locked&&this.player.look(e),Q.lockHint(!e.locked&&!s);const r=this.npcs.npcs.filter(u=>u.char.root.visible).map(u=>u.char.position);this.player.update(t,s?null:e,r),this.npcs.playerPos.copy(this.player.pos),this.npcs.update(t,this.t);const o=[this.player.pos,...r];this.school.update(t,this.t,o,()=>tt.door());const l=this.school.isIndoors(this.player.pos);this.env.update(t,this.t,this.player.pos,l),this.effects.update(t);for(const u of this.director.iconOwners)this.effects.placeIcon("ic_"+u,this.charOf(u).headWorld(),this.t);this.cam.update(t,this.player,l),Q.update(t,e);const c=Oe[Br(n.minutes)];if(!i&&!n.running&&tt.play(c.kind==="recess"?"recess":"school"),tt.outdoors=!l,tt.setCrowd(c.kind==="class"?l?.25:.1:l?.45:1),this.interactTarget=null,!s&&!n.running)if(this.player.seat)this.interactTarget={label:"Levantarse",key:"E",action:()=>this.player.stand()};else{let u=null,f=1/0;for(const g of n.interactables()){const v=g.pos.distanceTo(this.player.pos);v<g.r&&v<f&&Math.abs(g.pos.y-this.player.pos.y)<1.2&&(f=v,u=g)}const d=this.npcs.nearestTalkable(this.player.pos,2.2,g=>n.canTalk(g));d&&(!u||d.char.position.distanceTo(this.player.pos)<f+.4)&&(u={label:`Hablar con ${d.name}`,key:"F",action:()=>this.talk(d)}),this.interactTarget=u}if(Q.prompt(this.interactTarget?.label??null,this.interactTarget?.key),this.interactTarget){const u=this.interactTarget.key==="E"?"KeyE":"KeyF";(e.consume(u)||this.interactTarget.key==="F"&&e.consume("KeyE"))&&this.interactTarget.action()}const h=n.waypoint();if(h&&!s){const u=this.wpTmp.copy(h).add(new T(0,2.1,0)),f=u.distanceTo(this.player.pos);u.project(this.camera);let d=(u.x*.5+.5)*innerWidth,g=(-u.y*.5+.5)*innerHeight;u.z>1&&(d=innerWidth-d,g=innerHeight-40),d=Math.max(40,Math.min(innerWidth-40,d)),g=Math.max(80,Math.min(innerHeight-40,g)),Q.waypoint(d,g,f>2.5?`${Math.round(f)} m`:null);const v=h.y>Gt-.5?1:0,m=this.player.pos.y>Gt-.5?1:0;Q.setDistance(v!==m?v?"↑ Está en el 2º piso (escaleras a los lados del edificio)":"↓ Está en la planta baja":this.school.zoneAt(this.player.pos))}else Q.waypoint(0,0,null),Q.setDistance(this.school.zoneAt(this.player.pos));this.updateRoute(t,s?null:h),!this.noRender&&(this.settings.mapMode===1?R0(fe("#minimap"),this.mapView(),this.mapZoom):this.settings.mapMode===2&&Dl(fe("#bigmap"),this.mapView(),Ce(this.player.pos.y),!0),this.renderer.render(this.scene,this.camera))}talk(t){const e=this.story;e.onTalk(t)||t.state!=="scripted"&&e.run(async()=>{const n=this.director,i=t.state,s=t.char.anim;t.mover.cancel();const r=s.startsWith("sit")||s==="type";r||n.faceNow(t.id,this.player.char.position),n.faceNow(this.protagonist,t.char.position),t.char.lookTarget=this.player.char.position,await n.say(t.id,t.nextLine(),{anim:r?s:"talk"}),t.char.lookTarget=null,t.char.anim=s==="walk"||s==="run"?"idle":s,t.mover.faceYaw=null,(i==="chat"||i==="wander")&&(t.timer=.5)})}}const Cc=new C0;window.game=Cc;Cc.boot();
