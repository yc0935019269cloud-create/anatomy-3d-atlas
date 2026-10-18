(()=>{var Jn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Kn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},rc=0,Bo=1,ac=2;var zo=1,oc=2,xn=3,Pn=0,Lt=1,Ot=2,Dn=0,di=1,Vo=2,ko=3,Ho=4,lc=5,qn=100,cc=101,hc=102,uc=103,dc=104,fc=200,pc=201,mc=202,gc=203,Sr=204,Tr=205,_c=206,xc=207,yc=208,vc=209,Mc=210,bc=211,Sc=212,Tc=213,Ec=214,jr=0,Qr=1,ea=2,fi=3,ta=4,na=5,ia=6,sa=7,Go=0,wc=1,Ac=2,Un=0,Cc=1,Rc=2,Ic=3,ra=4,Pc=5,Lc=6,Dc=7;var Wo=300,_i=301,xi=302,aa=303,oa=304,zs=306,Er=1e3,Xn=1001,wr=1002,Kt=1003,Uc=1004;var Vs=1005;var ln=1006,la=1007;var jn=1008;var un=1009,Xo=1010,qo=1011,Ji=1012,ca=1013,Qn=1014,yn=1015,Ki=1016,ha=1017,ua=1018,ji=1020,Yo=35902,$o=35899,Zo=1021,Jo=1022,tn=1023,Vi=1026,Qi=1027,Ko=1028,da=1029,jo=1030,fa=1031;var pa=1033,ks=33776,Hs=33777,Gs=33778,Ws=33779,ma=35840,ga=35841,_a=35842,xa=35843,ya=36196,va=37492,Ma=37496,ba=37808,Sa=37809,Ta=37810,Ea=37811,wa=37812,Aa=37813,Ca=37814,Ra=37815,Ia=37816,Pa=37817,La=37818,Da=37819,Ua=37820,Na=37821,Fa=36492,Oa=36494,Ba=36495,za=36283,Va=36284,ka=36285,Ha=36286;var gs=2300,Ar=2301,br=2302,Io=2400,Po=2401,Lo=2402;var Nc=3200,Fc=3201;var Qo=0,Oc=1,Nn="",It="srgb",pi="srgb-linear",_s="linear",Ke="srgb";var hi=7680;var Do=519,Bc=512,zc=513,Vc=514,el=515,kc=516,Hc=517,Gc=518,Wc=519,Uo=35044;var tl="300 es",on=2e3,xs=2001;var fn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},St=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bl=1234567,ds=Math.PI/180,ki=180/Math.PI;function es(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(St[i&255]+St[i>>8&255]+St[i>>16&255]+St[i>>24&255]+"-"+St[e&255]+St[e>>8&255]+"-"+St[e>>16&15|64]+St[e>>24&255]+"-"+St[t&63|128]+St[t>>8&255]+"-"+St[t>>16&255]+St[t>>24&255]+St[n&255]+St[n>>8&255]+St[n>>16&255]+St[n>>24&255]).toLowerCase()}function ke(i,e,t){return Math.max(e,Math.min(t,i))}function nl(i,e){return(i%e+e)%e}function jh(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Qh(i,e,t){return i!==e?(t-i)/(e-i):0}function fs(i,e,t){return(1-t)*i+t*e}function eu(i,e,t,n){return fs(i,e,1-Math.exp(-t*n))}function tu(i,e=1){return e-Math.abs(nl(i,e*2)-e)}function nu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function iu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function su(i,e){return i+Math.floor(Math.random()*(e-i+1))}function ru(i,e){return i+Math.random()*(e-i)}function au(i){return i*(.5-Math.random())}function ou(i){i!==void 0&&(Bl=i);let e=Bl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function lu(i){return i*ds}function cu(i){return i*ki}function hu(i){return(i&i-1)===0&&i!==0}function uu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function du(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function fu(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),f=a((e-n)/2),d=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,c*u,c*f,o*l);break;case"YZY":i.set(c*f,o*h,c*u,o*l);break;case"ZXZ":i.set(c*u,c*f,o*h,o*l);break;case"XZX":i.set(o*h,c*g,c*d,o*l);break;case"YXY":i.set(c*d,o*h,c*g,o*l);break;case"ZYZ":i.set(c*g,c*d,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Bi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Rt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var il={DEG2RAD:ds,RAD2DEG:ki,generateUUID:es,clamp:ke,euclideanModulo:nl,mapLinear:jh,inverseLerp:Qh,lerp:fs,damp:eu,pingpong:tu,smoothstep:nu,smootherstep:iu,randInt:su,randFloat:ru,randFloatSpread:au,seededRandom:ou,degToRad:lu,radToDeg:cu,isPowerOfTwo:hu,ceilPowerOfTwo:uu,floorPowerOfTwo:du,setQuaternionFromProperEuler:fu,normalize:Rt,denormalize:Bi},ve=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},jt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],f=r[a+0],d=r[a+1],g=r[a+2],x=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=x;return}if(u!==x||c!==f||l!==d||h!==g){let m=1-o,p=c*f+l*d+h*g+u*x,E=p>=0?1:-1,T=1-p*p;if(T>Number.EPSILON){let A=Math.sqrt(T),R=Math.atan2(A,p*E);m=Math.sin(m*R)/A,o=Math.sin(o*R)/A}let v=o*E;if(c=c*m+f*v,l=l*m+d*v,h=h*m+g*v,u=u*m+x*v,m===1-o){let A=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=A,l*=A,h*=A,u*=A}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return e[t]=o*g+h*u+c*d-l*f,e[t+1]=c*g+h*f+l*u-o*d,e[t+2]=l*g+h*d+o*f-c*u,e[t+3]=h*g-o*u-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),f=c(n/2),d=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"YZX":this._x=f*h*u+l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u-f*d*g;break;case"XZY":this._x=f*h*u-l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(a-s)*d}else if(n>o&&n>u){let d=2*Math.sqrt(1+n-o-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+l)/d}else if(o>u){let d=2*Math.sqrt(1+o-n-u);this._w=(r-l)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-n-o);this._w=(a-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ke(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},w=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zl.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return so.copy(this).projectOnVector(e),this.sub(so)}reflect(e){return this.sub(so.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},so=new w,zl=new jt,ze=class i{constructor(e,t,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],x=s[0],m=s[3],p=s[6],E=s[1],T=s[4],v=s[7],A=s[2],R=s[5],P=s[8];return r[0]=a*x+o*E+c*A,r[3]=a*m+o*T+c*R,r[6]=a*p+o*v+c*P,r[1]=l*x+h*E+u*A,r[4]=l*m+h*T+u*R,r[7]=l*p+h*v+u*P,r[2]=f*x+d*E+g*A,r[5]=f*m+d*T+g*R,r[8]=f*p+d*v+g*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,f=o*c-h*r,d=l*r-a*c,g=t*u+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(s*l-h*n)*x,e[2]=(o*n-s*a)*x,e[3]=f*x,e[4]=(h*t-s*c)*x,e[5]=(s*r-o*t)*x,e[6]=d*x,e[7]=(n*c-l*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ro.makeScale(e,t)),this}rotate(e){return this.premultiply(ro.makeRotation(-e)),this}translate(e,t){return this.premultiply(ro.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ro=new ze;function sl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ys(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Xc(){let i=ys("canvas");return i.style.display="block",i}var Vl={};function Hi(i){i in Vl||(Vl[i]=!0,console.warn(i))}function qc(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var kl=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hl=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pu(){let i={enabled:!0,workingColorSpace:pi,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Ke&&(s.r=In(s.r),s.g=In(s.g),s.b=In(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ke&&(s.r=zi(s.r),s.g=zi(s.g),s.b=zi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Nn?_s:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Hi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Hi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[pi]:{primaries:e,whitePoint:n,transfer:_s,toXYZ:kl,fromXYZ:Hl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:It},outputColorSpaceConfig:{drawingBufferColorSpace:It}},[It]:{primaries:e,whitePoint:n,transfer:Ke,toXYZ:kl,fromXYZ:Hl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:It}}}),i}var $e=pu();function In(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function zi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var wi,Cr=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{wi===void 0&&(wi=ys("canvas")),wi.width=e.width,wi.height=e.height;let s=wi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=wi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ys("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=In(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(In(t[n]/255)*255):t[n]=In(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},mu=0,Gi=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mu++}),this.uuid=es(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ao(s[a].image)):r.push(ao(s[a]))}else r=ao(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function ao(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Cr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var gu=0,oo=new w,Wt=class i extends fn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Xn,s=Xn,r=ln,a=jn,o=tn,c=un,l=i.DEFAULT_ANISOTROPY,h=Nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gu++}),this.uuid=es(),this.name="",this.source=new Gi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ve(0,0),this.repeat=new ve(1,1),this.center=new ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(oo).x}get height(){return this.source.getSize(oo).y}get depth(){return this.source.getSize(oo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Er:e.x=e.x-Math.floor(e.x);break;case Xn:e.x=e.x<0?0:1;break;case wr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Er:e.y=e.y-Math.floor(e.y);break;case Xn:e.y=e.y<0?0:1;break;case wr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=Wo;Wt.DEFAULT_ANISOTROPY=1;var dt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(l+1)/2,v=(d+1)/2,A=(p+1)/2,R=(h+f)/4,P=(u+x)/4,N=(g+m)/4;return T>v&&T>A?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=R/n,r=P/n):v>A?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=R/s,r=N/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=P/r,s=N/r),this.set(n,s,r,t),this}let E=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(u-x)/E,this.z=(f-h)/E,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this.w=ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this.w=ke(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Rr=class extends fn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new Wt(s);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:ln,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Gi(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},pn=class extends Rr{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},vs=class extends Wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ir=class extends Wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var mn=class{constructor(e=new w(1/0,1/0,1/0),t=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,sn):sn.fromBufferAttribute(r,a),sn.applyMatrix4(e.matrixWorld),this.expandByPoint(sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ir.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ir.copy(n.boundingBox)),ir.applyMatrix4(e.matrixWorld),this.union(ir)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,sn),sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ls),sr.subVectors(this.max,ls),Ai.subVectors(e.a,ls),Ci.subVectors(e.b,ls),Ri.subVectors(e.c,ls),Bn.subVectors(Ci,Ai),zn.subVectors(Ri,Ci),ai.subVectors(Ai,Ri);let t=[0,-Bn.z,Bn.y,0,-zn.z,zn.y,0,-ai.z,ai.y,Bn.z,0,-Bn.x,zn.z,0,-zn.x,ai.z,0,-ai.x,-Bn.y,Bn.x,0,-zn.y,zn.x,0,-ai.y,ai.x,0];return!lo(t,Ai,Ci,Ri,sr)||(t=[1,0,0,0,1,0,0,0,1],!lo(t,Ai,Ci,Ri,sr))?!1:(rr.crossVectors(Bn,zn),t=[rr.x,rr.y,rr.z],lo(t,Ai,Ci,Ri,sr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(En[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),En[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),En[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),En[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),En[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),En[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),En[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),En[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(En),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},En=[new w,new w,new w,new w,new w,new w,new w,new w],sn=new w,ir=new mn,Ai=new w,Ci=new w,Ri=new w,Bn=new w,zn=new w,ai=new w,ls=new w,sr=new w,rr=new w,oi=new w;function lo(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){oi.fromArray(i,r);let o=s.x*Math.abs(oi.x)+s.y*Math.abs(oi.y)+s.z*Math.abs(oi.z),c=e.dot(oi),l=t.dot(oi),h=n.dot(oi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var _u=new mn,cs=new w,co=new w,Wi=class{constructor(e=new w,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):_u.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;cs.subVectors(e,this.center);let t=cs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(cs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(co.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(cs.copy(e.center).add(co)),this.expandByPoint(cs.copy(e.center).sub(co))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},wn=new w,ho=new w,ar=new w,Vn=new w,uo=new w,or=new w,fo=new w,Xi=class{constructor(e=new w,t=new w(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wn.copy(this.origin).addScaledVector(this.direction,t),wn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ho.copy(e).add(t).multiplyScalar(.5),ar.copy(t).sub(e).normalize(),Vn.copy(this.origin).sub(ho);let r=e.distanceTo(t)*.5,a=-this.direction.dot(ar),o=Vn.dot(this.direction),c=-Vn.dot(ar),l=Vn.lengthSq(),h=Math.abs(1-a*a),u,f,d,g;if(h>0)if(u=a*c-o,f=a*o-c,g=r*h,u>=0)if(f>=-g)if(f<=g){let x=1/h;u*=x,f*=x,d=u*(u+a*f+2*o)+f*(a*u+f+2*c)+l}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ho).addScaledVector(ar,f),d}intersectSphere(e,t){wn.subVectors(e.center,this.origin);let n=wn.dot(this.direction),s=wn.dot(wn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,wn)!==null}intersectTriangle(e,t,n,s,r){uo.subVectors(t,e),or.subVectors(n,e),fo.crossVectors(uo,or);let a=this.direction.dot(fo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Vn.subVectors(this.origin,e);let c=o*this.direction.dot(or.crossVectors(Vn,or));if(c<0)return null;let l=o*this.direction.dot(uo.cross(Vn));if(l<0||c+l>a)return null;let h=-o*Vn.dot(fo);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},pt=class i{constructor(e,t,n,s,r,a,o,c,l,h,u,f,d,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,u,f,d,g,x,m)}set(e,t,n,s,r,a,o,c,l,h,u,f,d,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Ii.setFromMatrixColumn(e,0).length(),r=1/Ii.setFromMatrixColumn(e,1).length(),a=1/Ii.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=a*h,d=a*u,g=o*h,x=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=d+g*l,t[5]=f-x*l,t[9]=-o*c,t[2]=x-f*l,t[6]=g+d*l,t[10]=a*c}else if(e.order==="YXZ"){let f=c*h,d=c*u,g=l*h,x=l*u;t[0]=f+x*o,t[4]=g*o-d,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-g,t[6]=x+f*o,t[10]=a*c}else if(e.order==="ZXY"){let f=c*h,d=c*u,g=l*h,x=l*u;t[0]=f-x*o,t[4]=-a*u,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*h,t[9]=x-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let f=a*h,d=a*u,g=o*h,x=o*u;t[0]=c*h,t[4]=g*l-d,t[8]=f*l+x,t[1]=c*u,t[5]=x*l+f,t[9]=d*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let f=a*c,d=a*l,g=o*c,x=o*l;t[0]=c*h,t[4]=x-f*u,t[8]=g*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=d*u+g,t[10]=f-x*u}else if(e.order==="XZY"){let f=a*c,d=a*l,g=o*c,x=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+x,t[5]=a*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=o*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xu,e,yu)}lookAt(e,t,n){let s=this.elements;return Ht.subVectors(e,t),Ht.lengthSq()===0&&(Ht.z=1),Ht.normalize(),kn.crossVectors(n,Ht),kn.lengthSq()===0&&(Math.abs(n.z)===1?Ht.x+=1e-4:Ht.z+=1e-4,Ht.normalize(),kn.crossVectors(n,Ht)),kn.normalize(),lr.crossVectors(Ht,kn),s[0]=kn.x,s[4]=lr.x,s[8]=Ht.x,s[1]=kn.y,s[5]=lr.y,s[9]=Ht.y,s[2]=kn.z,s[6]=lr.z,s[10]=Ht.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],x=n[6],m=n[10],p=n[14],E=n[3],T=n[7],v=n[11],A=n[15],R=s[0],P=s[4],N=s[8],b=s[12],M=s[1],L=s[5],k=s[9],X=s[13],Y=s[2],K=s[6],q=s[10],B=s[14],G=s[3],re=s[7],ge=s[11],Se=s[15];return r[0]=a*R+o*M+c*Y+l*G,r[4]=a*P+o*L+c*K+l*re,r[8]=a*N+o*k+c*q+l*ge,r[12]=a*b+o*X+c*B+l*Se,r[1]=h*R+u*M+f*Y+d*G,r[5]=h*P+u*L+f*K+d*re,r[9]=h*N+u*k+f*q+d*ge,r[13]=h*b+u*X+f*B+d*Se,r[2]=g*R+x*M+m*Y+p*G,r[6]=g*P+x*L+m*K+p*re,r[10]=g*N+x*k+m*q+p*ge,r[14]=g*b+x*X+m*B+p*Se,r[3]=E*R+T*M+v*Y+A*G,r[7]=E*P+T*L+v*K+A*re,r[11]=E*N+T*k+v*q+A*ge,r[15]=E*b+T*X+v*B+A*Se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+r*c*u-s*l*u-r*o*f+n*l*f+s*o*d-n*c*d)+x*(+t*c*d-t*l*f+r*a*f-s*a*d+s*l*h-r*c*h)+m*(+t*l*u-t*o*d-r*a*u+n*a*d+r*o*h-n*l*h)+p*(-s*o*h-t*c*u+t*o*f+s*a*u-n*a*f+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],x=e[13],m=e[14],p=e[15],E=u*m*l-x*f*l+x*c*d-o*m*d-u*c*p+o*f*p,T=g*f*l-h*m*l-g*c*d+a*m*d+h*c*p-a*f*p,v=h*x*l-g*u*l+g*o*d-a*x*d-h*o*p+a*u*p,A=g*u*c-h*x*c-g*o*f+a*x*f+h*o*m-a*u*m,R=t*E+n*T+s*v+r*A;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/R;return e[0]=E*P,e[1]=(x*f*r-u*m*r-x*s*d+n*m*d+u*s*p-n*f*p)*P,e[2]=(o*m*r-x*c*r+x*s*l-n*m*l-o*s*p+n*c*p)*P,e[3]=(u*c*r-o*f*r-u*s*l+n*f*l+o*s*d-n*c*d)*P,e[4]=T*P,e[5]=(h*m*r-g*f*r+g*s*d-t*m*d-h*s*p+t*f*p)*P,e[6]=(g*c*r-a*m*r-g*s*l+t*m*l+a*s*p-t*c*p)*P,e[7]=(a*f*r-h*c*r+h*s*l-t*f*l-a*s*d+t*c*d)*P,e[8]=v*P,e[9]=(g*u*r-h*x*r-g*n*d+t*x*d+h*n*p-t*u*p)*P,e[10]=(a*x*r-g*o*r+g*n*l-t*x*l-a*n*p+t*o*p)*P,e[11]=(h*o*r-a*u*r-h*n*l+t*u*l+a*n*d-t*o*d)*P,e[12]=A*P,e[13]=(h*x*s-g*u*s+g*n*f-t*x*f-h*n*m+t*u*m)*P,e[14]=(g*o*s-a*x*s-g*n*c+t*x*c+a*n*m-t*o*m)*P,e[15]=(a*u*s-h*o*s+h*n*c-t*u*c-a*n*f+t*o*f)*P,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,f=r*l,d=r*h,g=r*u,x=a*h,m=a*u,p=o*u,E=c*l,T=c*h,v=c*u,A=n.x,R=n.y,P=n.z;return s[0]=(1-(x+p))*A,s[1]=(d+v)*A,s[2]=(g-T)*A,s[3]=0,s[4]=(d-v)*R,s[5]=(1-(f+p))*R,s[6]=(m+E)*R,s[7]=0,s[8]=(g+T)*P,s[9]=(m-E)*P,s[10]=(1-(f+x))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Ii.set(s[0],s[1],s[2]).length(),a=Ii.set(s[4],s[5],s[6]).length(),o=Ii.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],rn.copy(this);let l=1/r,h=1/a,u=1/o;return rn.elements[0]*=l,rn.elements[1]*=l,rn.elements[2]*=l,rn.elements[4]*=h,rn.elements[5]*=h,rn.elements[6]*=h,rn.elements[8]*=u,rn.elements[9]*=u,rn.elements[10]*=u,t.setFromRotationMatrix(rn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=on,c=!1){let l=this.elements,h=2*r/(t-e),u=2*r/(n-s),f=(t+e)/(t-e),d=(n+s)/(n-s),g,x;if(c)g=r/(a-r),x=a*r/(a-r);else if(o===on)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===xs)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=on,c=!1){let l=this.elements,h=2/(t-e),u=2/(n-s),f=-(t+e)/(t-e),d=-(n+s)/(n-s),g,x;if(c)g=1/(a-r),x=a/(a-r);else if(o===on)g=-2/(a-r),x=-(a+r)/(a-r);else if(o===xs)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ii=new w,rn=new pt,xu=new w(0,0,0),yu=new w(1,1,1),kn=new w,lr=new w,Ht=new w,Gl=new pt,Wl=new jt,cn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ke(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ke(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Gl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wl.setFromEuler(this),this.setFromQuaternion(Wl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};cn.DEFAULT_ORDER="XYZ";var Ms=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},vu=0,Xl=new w,Pi=new jt,An=new pt,cr=new w,hs=new w,Mu=new w,bu=new jt,ql=new w(1,0,0),Yl=new w(0,1,0),$l=new w(0,0,1),Zl={type:"added"},Su={type:"removed"},Li={type:"childadded",child:null},po={type:"childremoved",child:null},wt=class i extends fn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vu++}),this.uuid=es(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new w,t=new cn,n=new jt,s=new w(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pt},normalMatrix:{value:new ze}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ms,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Pi.setFromAxisAngle(e,t),this.quaternion.multiply(Pi),this}rotateOnWorldAxis(e,t){return Pi.setFromAxisAngle(e,t),this.quaternion.premultiply(Pi),this}rotateX(e){return this.rotateOnAxis(ql,e)}rotateY(e){return this.rotateOnAxis(Yl,e)}rotateZ(e){return this.rotateOnAxis($l,e)}translateOnAxis(e,t){return Xl.copy(e).applyQuaternion(this.quaternion),this.position.add(Xl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ql,e)}translateY(e){return this.translateOnAxis(Yl,e)}translateZ(e){return this.translateOnAxis($l,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?cr.copy(e):cr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(hs,cr,this.up):An.lookAt(cr,hs,this.up),this.quaternion.setFromRotationMatrix(An),s&&(An.extractRotation(s.matrixWorld),Pi.setFromRotationMatrix(An),this.quaternion.premultiply(Pi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zl),Li.child=e,this.dispatchEvent(Li),Li.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Su),po.child=e,this.dispatchEvent(po),po.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),An.multiply(e.parent.matrixWorld)),e.applyMatrix4(An),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zl),Li.child=e,this.dispatchEvent(Li),Li.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,e,Mu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,bu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};wt.DEFAULT_UP=new w(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var an=new w,Cn=new w,mo=new w,Rn=new w,Di=new w,Ui=new w,Jl=new w,go=new w,_o=new w,xo=new w,yo=new dt,vo=new dt,Mo=new dt,Wn=class i{constructor(e=new w,t=new w,n=new w){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),an.subVectors(e,t),s.cross(an);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){an.subVectors(s,t),Cn.subVectors(n,t),mo.subVectors(e,t);let a=an.dot(an),o=an.dot(Cn),c=an.dot(mo),l=Cn.dot(Cn),h=Cn.dot(mo),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(l*c-o*h)*f,g=(a*h-o*c)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Rn)===null?!1:Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Rn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Rn.x),c.addScaledVector(a,Rn.y),c.addScaledVector(o,Rn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return yo.setScalar(0),vo.setScalar(0),Mo.setScalar(0),yo.fromBufferAttribute(e,t),vo.fromBufferAttribute(e,n),Mo.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(yo,r.x),a.addScaledVector(vo,r.y),a.addScaledVector(Mo,r.z),a}static isFrontFacing(e,t,n,s){return an.subVectors(n,t),Cn.subVectors(e,t),an.cross(Cn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return an.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),an.cross(Cn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Di.subVectors(s,n),Ui.subVectors(r,n),go.subVectors(e,n);let c=Di.dot(go),l=Ui.dot(go);if(c<=0&&l<=0)return t.copy(n);_o.subVectors(e,s);let h=Di.dot(_o),u=Ui.dot(_o);if(h>=0&&u<=h)return t.copy(s);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Di,a);xo.subVectors(e,r);let d=Di.dot(xo),g=Ui.dot(xo);if(g>=0&&d<=g)return t.copy(r);let x=d*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Ui,o);let m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return Jl.subVectors(r,s),o=(u-h)/(u-h+(d-g)),t.copy(s).addScaledVector(Jl,o);let p=1/(m+x+f);return a=x*p,o=f*p,t.copy(n).addScaledVector(Di,a).addScaledVector(Ui,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Yc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},hr={h:0,s:0,l:0};function bo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Xe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=$e.workingColorSpace){return this.r=e,this.g=t,this.b=n,$e.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=$e.workingColorSpace){if(e=nl(e,1),t=ke(t,0,1),n=ke(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=bo(a,r,e+1/3),this.g=bo(a,r,e),this.b=bo(a,r,e-1/3)}return $e.colorSpaceToWorking(this,s),this}setStyle(e,t=It){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=It){let n=Yc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=In(e.r),this.g=In(e.g),this.b=In(e.b),this}copyLinearToSRGB(e){return this.r=zi(e.r),this.g=zi(e.g),this.b=zi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return $e.workingToColorSpace(Tt.copy(this),e),Math.round(ke(Tt.r*255,0,255))*65536+Math.round(ke(Tt.g*255,0,255))*256+Math.round(ke(Tt.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.workingToColorSpace(Tt.copy(this),t);let n=Tt.r,s=Tt.g,r=Tt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=$e.workingColorSpace){return $e.workingToColorSpace(Tt.copy(this),t),e.r=Tt.r,e.g=Tt.g,e.b=Tt.b,e}getStyle(e=It){$e.workingToColorSpace(Tt.copy(this),e);let t=Tt.r,n=Tt.g,s=Tt.b;return e!==It?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Hn),this.setHSL(Hn.h+e,Hn.s+t,Hn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Hn),e.getHSL(hr);let n=fs(Hn.h,hr.h,t),s=fs(Hn.s,hr.s,t),r=fs(Hn.l,hr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Tt=new Xe;Xe.NAMES=Yc;var Tu=0,Yn=class extends fn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tu++}),this.uuid=es(),this.name="",this.type="Material",this.blending=di,this.side=Pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sr,this.blendDst=Tr,this.blendEquation=qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=fi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Do,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hi,this.stencilZFail=hi,this.stencilZPass=hi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==di&&(n.blending=this.blending),this.side!==Pn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Sr&&(n.blendSrc=this.blendSrc),this.blendDst!==Tr&&(n.blendDst=this.blendDst),this.blendEquation!==qn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==fi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Do&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==hi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==hi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},bs=class extends Yn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=Go,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var gt=new w,ur=new ve,Eu=0,Et=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Eu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Uo,this.updateRanges=[],this.gpuType=yn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ur.fromBufferAttribute(this,t),ur.applyMatrix3(e),this.setXY(t,ur.x,ur.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Bi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Rt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Bi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Bi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Bi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Bi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),s=Rt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),s=Rt(s,this.array),r=Rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Uo&&(e.usage=this.usage),e}};var Ss=class extends Et{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ts=class extends Et{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var _t=class extends Et{constructor(e,t,n){super(new Float32Array(e),t,n)}},wu=0,Jt=new pt,So=new wt,Ni=new w,Gt=new mn,us=new mn,Mt=new w,Xt=class i extends fn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wu++}),this.uuid=es(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sl(e)?Ts:Ss)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jt.makeRotationFromQuaternion(e),this.applyMatrix4(Jt),this}rotateX(e){return Jt.makeRotationX(e),this.applyMatrix4(Jt),this}rotateY(e){return Jt.makeRotationY(e),this.applyMatrix4(Jt),this}rotateZ(e){return Jt.makeRotationZ(e),this.applyMatrix4(Jt),this}translate(e,t,n){return Jt.makeTranslation(e,t,n),this.applyMatrix4(Jt),this}scale(e,t,n){return Jt.makeScale(e,t,n),this.applyMatrix4(Jt),this}lookAt(e){return So.lookAt(e),So.updateMatrix(),this.applyMatrix4(So.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ni).negate(),this.translate(Ni.x,Ni.y,Ni.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new _t(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Gt.setFromBufferAttribute(r),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(e){let n=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];us.setFromBufferAttribute(o),this.morphTargetsRelative?(Mt.addVectors(Gt.min,us.min),Gt.expandByPoint(Mt),Mt.addVectors(Gt.max,us.max),Gt.expandByPoint(Mt)):(Gt.expandByPoint(us.min),Gt.expandByPoint(us.max))}Gt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Mt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Mt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Mt.fromBufferAttribute(o,l),c&&(Ni.fromBufferAttribute(e,l),Mt.add(Ni)),s=Math.max(s,n.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Et(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let N=0;N<n.count;N++)o[N]=new w,c[N]=new w;let l=new w,h=new w,u=new w,f=new ve,d=new ve,g=new ve,x=new w,m=new w;function p(N,b,M){l.fromBufferAttribute(n,N),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,M),f.fromBufferAttribute(r,N),d.fromBufferAttribute(r,b),g.fromBufferAttribute(r,M),h.sub(l),u.sub(l),d.sub(f),g.sub(f);let L=1/(d.x*g.y-g.x*d.y);isFinite(L)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(L),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(L),o[N].add(x),o[b].add(x),o[M].add(x),c[N].add(m),c[b].add(m),c[M].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let N=0,b=E.length;N<b;++N){let M=E[N],L=M.start,k=M.count;for(let X=L,Y=L+k;X<Y;X+=3)p(e.getX(X+0),e.getX(X+1),e.getX(X+2))}let T=new w,v=new w,A=new w,R=new w;function P(N){A.fromBufferAttribute(s,N),R.copy(A);let b=o[N];T.copy(b),T.sub(A.multiplyScalar(A.dot(b))).normalize(),v.crossVectors(R,b);let L=v.dot(c[N])<0?-1:1;a.setXYZW(N,T.x,T.y,T.z,L)}for(let N=0,b=E.length;N<b;++N){let M=E[N],L=M.start,k=M.count;for(let X=L,Y=L+k;X<Y;X+=3)P(e.getX(X+0)),P(e.getX(X+1)),P(e.getX(X+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Et(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new w,r=new w,a=new w,o=new w,c=new w,l=new w,h=new w,u=new w;if(e)for(let f=0,d=e.count;f<d;f+=3){let g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Mt.fromBufferAttribute(e,t),Mt.normalize(),e.setXYZ(t,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,f=new l.constructor(c.length*h),d=0,g=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?d=c[x]*o.data.stride+o.offset:d=c[x]*h;for(let p=0;p<h;p++)f[g++]=l[d++]}return new Et(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=e(f,n);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Kl=new pt,li=new Xi,dr=new Wi,jl=new w,fr=new w,pr=new w,mr=new w,To=new w,gr=new w,Ql=new w,_r=new w,rt=class extends wt{constructor(e=new Xt,t=new bs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){gr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(To.fromBufferAttribute(u,e),a?gr.addScaledVector(To,h):gr.addScaledVector(To.sub(t),h))}t.add(gr)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),dr.copy(n.boundingSphere),dr.applyMatrix4(r),li.copy(e.ray).recast(e.near),!(dr.containsPoint(li.origin)===!1&&(li.intersectSphere(dr,jl)===null||li.origin.distanceToSquared(jl)>(e.far-e.near)**2))&&(Kl.copy(r).invert(),li.copy(e.ray).applyMatrix4(Kl),!(n.boundingBox!==null&&li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,li)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=a[m.materialIndex],E=Math.max(m.start,d.start),T=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let v=E,A=T;v<A;v+=3){let R=o.getX(v),P=o.getX(v+1),N=o.getX(v+2);s=xr(this,p,e,n,l,h,u,R,P,N),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let E=o.getX(m),T=o.getX(m+1),v=o.getX(m+2);s=xr(this,a,e,n,l,h,u,E,T,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=a[m.materialIndex],E=Math.max(m.start,d.start),T=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let v=E,A=T;v<A;v+=3){let R=v,P=v+1,N=v+2;s=xr(this,p,e,n,l,h,u,R,P,N),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let E=m,T=m+1,v=m+2;s=xr(this,a,e,n,l,h,u,E,T,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Au(i,e,t,n,s,r,a,o){let c;if(e.side===Lt?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===Pn,o),c===null)return null;_r.copy(o),_r.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(_r);return l<t.near||l>t.far?null:{distance:l,point:_r.clone(),object:i}}function xr(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,fr),i.getVertexPosition(c,pr),i.getVertexPosition(l,mr);let h=Au(i,e,t,n,fr,pr,mr,Ql);if(h){let u=new w;Wn.getBarycoord(Ql,fr,pr,mr,u),s&&(h.uv=Wn.getInterpolatedAttribute(s,o,c,l,u,new ve)),r&&(h.uv1=Wn.getInterpolatedAttribute(r,o,c,l,u,new ve)),a&&(h.normal=Wn.getInterpolatedAttribute(a,o,c,l,u,new w),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:c,c:l,normal:new w,materialIndex:0};Wn.getNormal(fr,pr,mr,f.normal),h.face=f,h.barycoord=u}return h}var qi=class i extends Xt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new _t(l,3)),this.setAttribute("normal",new _t(h,3)),this.setAttribute("uv",new _t(u,2));function g(x,m,p,E,T,v,A,R,P,N,b){let M=v/P,L=A/N,k=v/2,X=A/2,Y=R/2,K=P+1,q=N+1,B=0,G=0,re=new w;for(let ge=0;ge<q;ge++){let Se=ge*L-X;for(let Ie=0;Ie<K;Ie++){let qe=Ie*M-k;re[x]=qe*E,re[m]=Se*T,re[p]=Y,l.push(re.x,re.y,re.z),re[x]=0,re[m]=0,re[p]=R>0?1:-1,h.push(re.x,re.y,re.z),u.push(Ie/P),u.push(1-ge/N),B+=1}}for(let ge=0;ge<N;ge++)for(let Se=0;Se<P;Se++){let Ie=f+Se+K*ge,qe=f+Se+K*(ge+1),nt=f+(Se+1)+K*(ge+1),Ye=f+(Se+1)+K*ge;c.push(Ie,qe,Ye),c.push(qe,nt,Ye),G+=6}o.addGroup(d,G,b),d+=G,f+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function yi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function At(i){let e={};for(let t=0;t<i.length;t++){let n=yi(i[t]);for(let s in n)e[s]=n[s]}return e}function Cu(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function rl(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}var $c={clone:yi,merge:At},Ru=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Iu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,hn=class extends Yn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ru,this.fragmentShader=Iu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yi(e.uniforms),this.uniformsGroups=Cu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Es=class extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=on,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Gn=new w,ec=new ve,tc=new ve,Ft=class extends Es{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ki*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ds*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ki*2*Math.atan(Math.tan(ds*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Gn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Gn.x,Gn.y).multiplyScalar(-e/Gn.z),Gn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gn.x,Gn.y).multiplyScalar(-e/Gn.z)}getViewSize(e,t){return this.getViewBounds(e,ec,tc),t.subVectors(tc,ec)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ds*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Fi=-90,Oi=1,Pr=class extends wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ft(Fi,Oi,e,t);s.layers=this.layers,this.add(s);let r=new Ft(Fi,Oi,e,t);r.layers=this.layers,this.add(r);let a=new Ft(Fi,Oi,e,t);a.layers=this.layers,this.add(a);let o=new Ft(Fi,Oi,e,t);o.layers=this.layers,this.add(o);let c=new Ft(Fi,Oi,e,t);c.layers=this.layers,this.add(c);let l=new Ft(Fi,Oi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===on)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===xs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ws=class extends Wt{constructor(e=[],t=_i,n,s,r,a,o,c,l,h){super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Lr=class extends pn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ws(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new qi(5,5,5),r=new hn({name:"CubemapFromEquirect",uniforms:yi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Lt,blending:Dn});r.uniforms.tEquirect.value=t;let a=new rt(s,r),o=t.minFilter;return t.minFilter===jn&&(t.minFilter=ln),new Pr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},ui=class extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Pu={type:"move"},Yi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ui,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ui,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ui,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Pu)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ui;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var As=class extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cn,this.environmentIntensity=1,this.environmentRotation=new cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Eo=new w,Lu=new w,Du=new ze,Pt=class{constructor(e=new w(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Eo.subVectors(n,t).cross(Lu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Eo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Du.getNormalMatrix(e),s=this.coplanarPoint(Eo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ci=new Wi,Uu=new ve(.5,.5),yr=new w,$i=class{constructor(e=new Pt,t=new Pt,n=new Pt,s=new Pt,r=new Pt,a=new Pt){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=on,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],u=r[5],f=r[6],d=r[7],g=r[8],x=r[9],m=r[10],p=r[11],E=r[12],T=r[13],v=r[14],A=r[15];if(s[0].setComponents(l-a,d-h,p-g,A-E).normalize(),s[1].setComponents(l+a,d+h,p+g,A+E).normalize(),s[2].setComponents(l+o,d+u,p+x,A+T).normalize(),s[3].setComponents(l-o,d-u,p-x,A-T).normalize(),n)s[4].setComponents(c,f,m,v).normalize(),s[5].setComponents(l-c,d-f,p-m,A-v).normalize();else if(s[4].setComponents(l-c,d-f,p-m,A-v).normalize(),t===on)s[5].setComponents(l+c,d+f,p+m,A+v).normalize();else if(t===xs)s[5].setComponents(c,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ci.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ci.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ci)}intersectsSprite(e){ci.center.set(0,0,0);let t=Uu.distanceTo(e.center);return ci.radius=.7071067811865476+t,ci.applyMatrix4(e.matrixWorld),this.intersectsSphere(ci)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(yr.x=s.normal.x>0?e.max.x:e.min.x,yr.y=s.normal.y>0?e.max.y:e.min.y,yr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(yr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Cs=class extends Wt{constructor(e,t,n=Qn,s,r,a,o=Kt,c=Kt,l,h=Vi,u=1){if(h!==Vi&&h!==Qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Rs=class extends Wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var Qt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(a-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new ve:new w);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new w,s=[],r=[],a=[],o=new w,c=new pt;for(let d=0;d<=e;d++){let g=d/e;s[d]=this.getTangentAt(g,new w)}r[0]=new w,a[0]=new w;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(ke(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(ke(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Is=class extends Qt{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new ve){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Dr=class extends Is{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function al(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let f=(a-r)/l-(o-r)/(l+h)+(o-a)/h,d=(o-a)/h-(c-a)/(h+u)+(c-o)/u;f*=h,d*=h,s(a,o,f,d)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var vr=new w,wo=new al,Ao=new al,Co=new al,gn=class extends Qt{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new w){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(vr.subVectors(s[0],s[1]).add(s[0]),l=vr);let u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(vr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=vr),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),wo.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,x,m),Ao.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,x,m),Co.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(wo.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),Ao.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Co.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(wo.calc(c),Ao.calc(c),Co.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new w().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function nc(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,c=i*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*i+t}function Nu(i,e){let t=1-i;return t*t*e}function Fu(i,e){return 2*(1-i)*i*e}function Ou(i,e){return i*i*e}function ps(i,e,t,n){return Nu(i,e)+Fu(i,t)+Ou(i,n)}function Bu(i,e){let t=1-i;return t*t*t*e}function zu(i,e){let t=1-i;return 3*t*t*i*e}function Vu(i,e){return 3*(1-i)*i*i*e}function ku(i,e){return i*i*i*e}function ms(i,e,t,n,s){return Bu(i,e)+zu(i,t)+Vu(i,n)+ku(i,s)}var Ur=class extends Qt{constructor(e=new ve,t=new ve,n=new ve,s=new ve){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ve){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ms(e,s.x,r.x,a.x,o.x),ms(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Nr=class extends Qt{constructor(e=new w,t=new w,n=new w,s=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new w){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ms(e,s.x,r.x,a.x,o.x),ms(e,s.y,r.y,a.y,o.y),ms(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Fr=class extends Qt{constructor(e=new ve,t=new ve){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ve){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ve){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Or=class extends Qt{constructor(e=new w,t=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new w){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new w){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Br=class extends Qt{constructor(e=new ve,t=new ve,n=new ve){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ve){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ps(e,s.x,r.x,a.x),ps(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ps=class extends Qt{constructor(e=new w,t=new w,n=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new w){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ps(e,s.x,r.x,a.x),ps(e,s.y,r.y,a.y),ps(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},zr=class extends Qt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ve){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(nc(o,c.x,l.x,h.x,u.x),nc(o,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ve().fromArray(s))}return this}},Hu=Object.freeze({__proto__:null,ArcCurve:Dr,CatmullRomCurve3:gn,CubicBezierCurve:Ur,CubicBezierCurve3:Nr,EllipseCurve:Is,LineCurve:Fr,LineCurve3:Or,QuadraticBezierCurve:Br,QuadraticBezierCurve3:Ps,SplineCurve:zr});var Ls=class i extends Xt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=e/o,f=t/c,d=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let E=p*f-a;for(let T=0;T<l;T++){let v=T*u-r;g.push(v,-E,0),x.push(0,0,1),m.push(T/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let E=0;E<o;E++){let T=E+l*p,v=E+l*(p+1),A=E+1+l*(p+1),R=E+1+l*p;d.push(T,v,R),d.push(v,A,R)}this.setIndex(d),this.setAttribute("position",new _t(g,3)),this.setAttribute("normal",new _t(x,3)),this.setAttribute("uv",new _t(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Ds=class i extends Xt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],c=[],l=[],h=[],u=e,f=(t-e)/s,d=new w,g=new ve;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let p=r+m/n*a;d.x=u*Math.cos(p),d.y=u*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,h.push(g.x,g.y)}u+=f}for(let x=0;x<s;x++){let m=x*(n+1);for(let p=0;p<n;p++){let E=p+m,T=E,v=E+n+1,A=E+n+2,R=E+1;o.push(T,v,R),o.push(v,A,R)}}this.setIndex(o),this.setAttribute("position",new _t(c,3)),this.setAttribute("normal",new _t(l,3)),this.setAttribute("uv",new _t(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var _n=class i extends Xt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new w,f=new w,d=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let E=[],T=p/n,v=0;p===0&&a===0?v=.5/t:p===n&&c===Math.PI&&(v=-.5/t);for(let A=0;A<=t;A++){let R=A/t;u.x=-e*Math.cos(s+R*r)*Math.sin(a+T*o),u.y=e*Math.cos(a+T*o),u.z=e*Math.sin(s+R*r)*Math.sin(a+T*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(R+v,1-T),E.push(l++)}h.push(E)}for(let p=0;p<n;p++)for(let E=0;E<t;E++){let T=h[p][E+1],v=h[p][E],A=h[p+1][E],R=h[p+1][E+1];(p!==0||a>0)&&d.push(T,v,R),(p!==n-1||c<Math.PI)&&d.push(v,A,R)}this.setIndex(d),this.setAttribute("position",new _t(g,3)),this.setAttribute("normal",new _t(x,3)),this.setAttribute("uv",new _t(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ln=class i extends Xt{constructor(e=new Ps(new w(-1,-1,0),new w(-1,1,0),new w(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new w,c=new w,l=new ve,h=new w,u=[],f=[],d=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new _t(u,3)),this.setAttribute("normal",new _t(f,3)),this.setAttribute("uv",new _t(d,2));function x(){for(let T=0;T<t;T++)m(T);m(r===!1?t:0),E(),p()}function m(T){h=e.getPointAt(T/t,h);let v=a.normals[T],A=a.binormals[T];for(let R=0;R<=s;R++){let P=R/s*Math.PI*2,N=Math.sin(P),b=-Math.cos(P);c.x=b*v.x+N*A.x,c.y=b*v.y+N*A.y,c.z=b*v.z+N*A.z,c.normalize(),f.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,u.push(o.x,o.y,o.z)}}function p(){for(let T=1;T<=t;T++)for(let v=1;v<=s;v++){let A=(s+1)*(T-1)+(v-1),R=(s+1)*T+(v-1),P=(s+1)*T+v,N=(s+1)*(T-1)+v;g.push(A,R,N),g.push(R,P,N)}}function E(){for(let T=0;T<=t;T++)for(let v=0;v<=s;v++)l.x=T/t,l.y=v/s,d.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Hu[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var en=class extends Yn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qo,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Vr=class extends Yn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},kr=class extends Yn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Mr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Gu(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var mi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Hr=class extends mi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Io,endingEnd:Io}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Po:r=e,o=2*t-n;break;case Lo:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Po:a=e,c=2*n-t;break;case Lo:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(s-t),x=g*g,m=x*g,p=-f*m+2*f*x-f*g,E=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,T=(-1-d)*m+(1.5+d)*x+.5*g,v=d*m-d*x;for(let A=0;A!==o;++A)r[A]=p*a[h+A]+E*a[l+A]+T*a[c+A]+v*a[u+A];return r}},Gr=class extends mi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==o;++f)r[f]=a[l+f]*u+a[c+f]*h;return r}},Wr=class extends mi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},qt=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Mr(t,this.TimeBufferType),this.values=Mr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Mr(e.times,Array),values:Mr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Wr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Gr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Hr(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case gs:t=this.InterpolantFactoryMethodDiscrete;break;case Ar:t=this.InterpolantFactoryMethodLinear;break;case br:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return gs;case this.InterpolantFactoryMethodLinear:return Ar;case this.InterpolantFactoryMethodSmooth:return br}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&Gu(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===br,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let u=o*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){let x=t[u+g];if(x!==t[f+g]||x!==t[d+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*n,f=a*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};qt.prototype.ValueTypeName="";qt.prototype.TimeBufferType=Float32Array;qt.prototype.ValueBufferType=Float32Array;qt.prototype.DefaultInterpolation=Ar;var $n=class extends qt{constructor(e,t,n){super(e,t,n)}};$n.prototype.ValueTypeName="bool";$n.prototype.ValueBufferType=Array;$n.prototype.DefaultInterpolation=gs;$n.prototype.InterpolantFactoryMethodLinear=void 0;$n.prototype.InterpolantFactoryMethodSmooth=void 0;var Xr=class extends qt{constructor(e,t,n,s){super(e,t,n,s)}};Xr.prototype.ValueTypeName="color";var qr=class extends qt{constructor(e,t,n,s){super(e,t,n,s)}};qr.prototype.ValueTypeName="number";var Yr=class extends mi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)jt.slerpFlat(r,0,a,l-o,a,l,c);return r}},Us=class extends qt{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Yr(this.times,this.values,this.getValueSize(),e)}};Us.prototype.ValueTypeName="quaternion";Us.prototype.InterpolantFactoryMethodSmooth=void 0;var Zn=class extends qt{constructor(e,t,n){super(e,t,n)}};Zn.prototype.ValueTypeName="string";Zn.prototype.ValueBufferType=Array;Zn.prototype.DefaultInterpolation=gs;Zn.prototype.InterpolantFactoryMethodLinear=void 0;Zn.prototype.InterpolantFactoryMethodSmooth=void 0;var $r=class extends qt{constructor(e,t,n,s){super(e,t,n,s)}};$r.prototype.ValueTypeName="vector";var Zr=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],g=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Zc=new Zr,Jr=class{constructor(e){this.manager=e!==void 0?e:Zc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Jr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ns=class extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Fs=class extends Ns{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Ro=new pt,ic=new w,sc=new w,No=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ve(512,512),this.mapType=un,this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $i,this._frameExtents=new ve(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;ic.setFromMatrixPosition(e.matrixWorld),t.position.copy(ic),sc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(sc),t.updateMatrixWorld(),Ro.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ro,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ro)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var gi=class extends Es{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Fo=class extends No{constructor(){super(new gi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Os=class extends Ns{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new Fo}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Kr=class extends Ft{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var ol="\\[\\]\\.:\\/",Wu=new RegExp("["+ol+"]","g"),ll="[^"+ol+"]",Xu="[^"+ol.replace("\\.","")+"]",qu=/((?:WC+[\/:])*)/.source.replace("WC",ll),Yu=/(WCOD+)?/.source.replace("WCOD",Xu),$u=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ll),Zu=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ll),Ju=new RegExp("^"+qu+Yu+$u+Zu+"$"),Ku=["material","materials","bones","map"],Oo=class{constructor(e,t,n){let s=n||ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ot=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Wu,"")}static parseTrackName(e){let t=Ju.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Ku.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ot.Composite=Oo;ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ot.prototype.GetterByBindingType=[ot.prototype._getValue_direct,ot.prototype._getValue_array,ot.prototype._getValue_arrayElement,ot.prototype._getValue_toArray];ot.prototype.SetterByBindingTypeAndVersioning=[[ot.prototype._setValue_direct,ot.prototype._setValue_direct_setNeedsUpdate,ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_array,ot.prototype._setValue_array_setNeedsUpdate,ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_arrayElement,ot.prototype._setValue_arrayElement_setNeedsUpdate,ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_fromArray,ot.prototype._setValue_fromArray_setNeedsUpdate,ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var c_=new Float32Array(1);var Zi=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ke(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ke(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Bs=class extends fn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function cl(i,e,t,n){let s=ju(n);switch(t){case Zo:return i*e;case Ko:return i*e/s.components*s.byteLength;case da:return i*e/s.components*s.byteLength;case jo:return i*e*2/s.components*s.byteLength;case fa:return i*e*2/s.components*s.byteLength;case Jo:return i*e*3/s.components*s.byteLength;case tn:return i*e*4/s.components*s.byteLength;case pa:return i*e*4/s.components*s.byteLength;case ks:case Hs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Gs:case Ws:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ga:case xa:return Math.max(i,16)*Math.max(e,8)/4;case ma:case _a:return Math.max(i,8)*Math.max(e,8)/2;case ya:case va:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ma:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ba:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Sa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ta:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ea:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case wa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Aa:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ca:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ra:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ia:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Pa:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case La:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Da:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ua:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Na:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Fa:case Oa:case Ba:return Math.ceil(i/4)*Math.ceil(e/4)*16;case za:case Va:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ka:case Ha:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ju(i){switch(i){case un:case Xo:return{byteLength:1,components:1};case Ji:case qo:case Ki:return{byteLength:2,components:1};case ha:case ua:return{byteLength:2,components:4};case Qn:case ca:case yn:return{byteLength:4,components:1};case Yo:case $o:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function yh(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function ed(i){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),o.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){let g=u[f],x=u[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){let x=u[d];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var td=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nd=`#ifdef USE_ALPHAHASH
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
#endif`,id=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ad=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,od=`#ifdef USE_AOMAP
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
#endif`,ld=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cd=`#ifdef USE_BATCHING
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
#endif`,hd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ud=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pd=`#ifdef USE_IRIDESCENCE
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
#endif`,md=`#ifdef USE_BUMPMAP
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
#endif`,gd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_d=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Md=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Sd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Td=`#define PI 3.141592653589793
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
} // validated`,Ed=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wd=`vec3 transformedNormal = objectNormal;
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
#endif`,Ad=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Id=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ld=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Dd=`#ifdef USE_ENVMAP
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
#endif`,Ud=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Nd=`#ifdef USE_ENVMAP
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
#endif`,Fd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Od=`#ifdef USE_ENVMAP
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
#endif`,Bd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hd=`#ifdef USE_GRADIENTMAP
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
}`,Gd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qd=`uniform bool receiveShadow;
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
#endif`,Yd=`#ifdef USE_ENVMAP
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
#endif`,$d=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jd=`PhysicalMaterial material;
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
#endif`,Qd=`struct PhysicalMaterial {
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
}`,ef=`
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
#endif`,tf=`#if defined( RE_IndirectDiffuse )
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
#endif`,nf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,af=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,of=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,uf=`#if defined( USE_POINTS_UV )
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
#endif`,df=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ff=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_f=`#ifdef USE_MORPHTARGETS
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
#endif`,xf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Mf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tf=`#ifdef USE_NORMALMAP
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
#endif`,Ef=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Af=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,If=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Pf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Df=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Uf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ff=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Of=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
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
#endif`,Bf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Vf=`float getShadowMask() {
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
}`,kf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hf=`#ifdef USE_SKINNING
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
#endif`,Gf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wf=`#ifdef USE_SKINNING
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
#endif`,Xf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$f=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zf=`#ifdef USE_TRANSMISSION
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
#endif`,Jf=`#ifdef USE_TRANSMISSION
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
#endif`,Kf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ep=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,tp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,np=`uniform sampler2D t2D;
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
}`,ip=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,rp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ap=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,op=`#include <common>
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
}`,lp=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,cp=`#define DISTANCE
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
}`,hp=`#define DISTANCE
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
}`,up=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fp=`uniform float scale;
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
}`,pp=`uniform vec3 diffuse;
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
}`,mp=`#include <common>
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
}`,gp=`uniform vec3 diffuse;
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
}`,_p=`#define LAMBERT
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
}`,xp=`#define LAMBERT
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
}`,yp=`#define MATCAP
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
}`,vp=`#define MATCAP
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
}`,Mp=`#define NORMAL
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
}`,bp=`#define NORMAL
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
}`,Sp=`#define PHONG
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
}`,Tp=`#define PHONG
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
}`,Ep=`#define STANDARD
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
}`,wp=`#define STANDARD
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
}`,Ap=`#define TOON
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
}`,Cp=`#define TOON
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
}`,Rp=`uniform float size;
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
}`,Ip=`uniform vec3 diffuse;
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
}`,Pp=`#include <common>
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
}`,Lp=`uniform vec3 color;
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
}`,Dp=`uniform float rotation;
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
}`,Up=`uniform vec3 diffuse;
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
}`,He={alphahash_fragment:td,alphahash_pars_fragment:nd,alphamap_fragment:id,alphamap_pars_fragment:sd,alphatest_fragment:rd,alphatest_pars_fragment:ad,aomap_fragment:od,aomap_pars_fragment:ld,batching_pars_vertex:cd,batching_vertex:hd,begin_vertex:ud,beginnormal_vertex:dd,bsdfs:fd,iridescence_fragment:pd,bumpmap_pars_fragment:md,clipping_planes_fragment:gd,clipping_planes_pars_fragment:_d,clipping_planes_pars_vertex:xd,clipping_planes_vertex:yd,color_fragment:vd,color_pars_fragment:Md,color_pars_vertex:bd,color_vertex:Sd,common:Td,cube_uv_reflection_fragment:Ed,defaultnormal_vertex:wd,displacementmap_pars_vertex:Ad,displacementmap_vertex:Cd,emissivemap_fragment:Rd,emissivemap_pars_fragment:Id,colorspace_fragment:Pd,colorspace_pars_fragment:Ld,envmap_fragment:Dd,envmap_common_pars_fragment:Ud,envmap_pars_fragment:Nd,envmap_pars_vertex:Fd,envmap_physical_pars_fragment:Yd,envmap_vertex:Od,fog_vertex:Bd,fog_pars_vertex:zd,fog_fragment:Vd,fog_pars_fragment:kd,gradientmap_pars_fragment:Hd,lightmap_pars_fragment:Gd,lights_lambert_fragment:Wd,lights_lambert_pars_fragment:Xd,lights_pars_begin:qd,lights_toon_fragment:$d,lights_toon_pars_fragment:Zd,lights_phong_fragment:Jd,lights_phong_pars_fragment:Kd,lights_physical_fragment:jd,lights_physical_pars_fragment:Qd,lights_fragment_begin:ef,lights_fragment_maps:tf,lights_fragment_end:nf,logdepthbuf_fragment:sf,logdepthbuf_pars_fragment:rf,logdepthbuf_pars_vertex:af,logdepthbuf_vertex:of,map_fragment:lf,map_pars_fragment:cf,map_particle_fragment:hf,map_particle_pars_fragment:uf,metalnessmap_fragment:df,metalnessmap_pars_fragment:ff,morphinstance_vertex:pf,morphcolor_vertex:mf,morphnormal_vertex:gf,morphtarget_pars_vertex:_f,morphtarget_vertex:xf,normal_fragment_begin:yf,normal_fragment_maps:vf,normal_pars_fragment:Mf,normal_pars_vertex:bf,normal_vertex:Sf,normalmap_pars_fragment:Tf,clearcoat_normal_fragment_begin:Ef,clearcoat_normal_fragment_maps:wf,clearcoat_pars_fragment:Af,iridescence_pars_fragment:Cf,opaque_fragment:Rf,packing:If,premultiplied_alpha_fragment:Pf,project_vertex:Lf,dithering_fragment:Df,dithering_pars_fragment:Uf,roughnessmap_fragment:Nf,roughnessmap_pars_fragment:Ff,shadowmap_pars_fragment:Of,shadowmap_pars_vertex:Bf,shadowmap_vertex:zf,shadowmask_pars_fragment:Vf,skinbase_vertex:kf,skinning_pars_vertex:Hf,skinning_vertex:Gf,skinnormal_vertex:Wf,specularmap_fragment:Xf,specularmap_pars_fragment:qf,tonemapping_fragment:Yf,tonemapping_pars_fragment:$f,transmission_fragment:Zf,transmission_pars_fragment:Jf,uv_pars_fragment:Kf,uv_pars_vertex:jf,uv_vertex:Qf,worldpos_vertex:ep,background_vert:tp,background_frag:np,backgroundCube_vert:ip,backgroundCube_frag:sp,cube_vert:rp,cube_frag:ap,depth_vert:op,depth_frag:lp,distanceRGBA_vert:cp,distanceRGBA_frag:hp,equirect_vert:up,equirect_frag:dp,linedashed_vert:fp,linedashed_frag:pp,meshbasic_vert:mp,meshbasic_frag:gp,meshlambert_vert:_p,meshlambert_frag:xp,meshmatcap_vert:yp,meshmatcap_frag:vp,meshnormal_vert:Mp,meshnormal_frag:bp,meshphong_vert:Sp,meshphong_frag:Tp,meshphysical_vert:Ep,meshphysical_frag:wp,meshtoon_vert:Ap,meshtoon_frag:Cp,points_vert:Rp,points_frag:Ip,shadow_vert:Pp,shadow_frag:Lp,sprite_vert:Dp,sprite_frag:Up},ue={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},vn={basic:{uniforms:At([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:At([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Xe(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:At([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:At([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:At([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Xe(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:At([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:At([ue.points,ue.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:At([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:At([ue.common,ue.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:At([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:At([ue.sprite,ue.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:At([ue.common,ue.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:At([ue.lights,ue.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};vn.physical={uniforms:At([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};var Ga={r:0,b:0,g:0},vi=new cn,Np=new pt;function Fp(i,e,t,n,s,r,a){let o=new Xe(0),c=r===!0?0:1,l,h,u=null,f=0,d=null;function g(T){let v=T.isScene===!0?T.background:null;return v&&v.isTexture&&(v=(T.backgroundBlurriness>0?t:e).get(v)),v}function x(T){let v=!1,A=g(T);A===null?p(o,c):A&&A.isColor&&(p(A,1),v=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(T,v){let A=g(v);A&&(A.isCubeTexture||A.mapping===zs)?(h===void 0&&(h=new rt(new qi(1,1,1),new hn({name:"BackgroundCubeMaterial",uniforms:yi(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:Lt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,P,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),vi.copy(v.backgroundRotation),vi.x*=-1,vi.y*=-1,vi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Np.makeRotationFromEuler(vi)),h.material.toneMapped=$e.getTransfer(A.colorSpace)!==Ke,(u!==A||f!==A.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=A,f=A.version,d=i.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new rt(new Ls(2,2),new hn({name:"BackgroundMaterial",uniforms:yi(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=$e.getTransfer(A.colorSpace)!==Ke,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||f!==A.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=A,f=A.version,d=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function p(T,v){T.getRGB(Ga,rl(i)),n.buffers.color.setClear(Ga.r,Ga.g,Ga.b,v,a)}function E(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,v=1){o.set(T),c=v,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,p(o,c)},render:x,addToRenderList:m,dispose:E}}function Op(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(M,L,k,X,Y){let K=!1,q=u(X,k,L);r!==q&&(r=q,l(r.object)),K=d(M,X,k,Y),K&&g(M,X,k,Y),Y!==null&&e.update(Y,i.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,v(M,L,k,X),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,L,k){let X=k.wireframe===!0,Y=n[M.id];Y===void 0&&(Y={},n[M.id]=Y);let K=Y[L.id];K===void 0&&(K={},Y[L.id]=K);let q=K[X];return q===void 0&&(q=f(c()),K[X]=q),q}function f(M){let L=[],k=[],X=[];for(let Y=0;Y<t;Y++)L[Y]=0,k[Y]=0,X[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:k,attributeDivisors:X,object:M,attributes:{},index:null}}function d(M,L,k,X){let Y=r.attributes,K=L.attributes,q=0,B=k.getAttributes();for(let G in B)if(B[G].location>=0){let ge=Y[G],Se=K[G];if(Se===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(Se=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(Se=M.instanceColor)),ge===void 0||ge.attribute!==Se||Se&&ge.data!==Se.data)return!0;q++}return r.attributesNum!==q||r.index!==X}function g(M,L,k,X){let Y={},K=L.attributes,q=0,B=k.getAttributes();for(let G in B)if(B[G].location>=0){let ge=K[G];ge===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(ge=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(ge=M.instanceColor));let Se={};Se.attribute=ge,ge&&ge.data&&(Se.data=ge.data),Y[G]=Se,q++}r.attributes=Y,r.attributesNum=q,r.index=X}function x(){let M=r.newAttributes;for(let L=0,k=M.length;L<k;L++)M[L]=0}function m(M){p(M,0)}function p(M,L){let k=r.newAttributes,X=r.enabledAttributes,Y=r.attributeDivisors;k[M]=1,X[M]===0&&(i.enableVertexAttribArray(M),X[M]=1),Y[M]!==L&&(i.vertexAttribDivisor(M,L),Y[M]=L)}function E(){let M=r.newAttributes,L=r.enabledAttributes;for(let k=0,X=L.length;k<X;k++)L[k]!==M[k]&&(i.disableVertexAttribArray(k),L[k]=0)}function T(M,L,k,X,Y,K,q){q===!0?i.vertexAttribIPointer(M,L,k,Y,K):i.vertexAttribPointer(M,L,k,X,Y,K)}function v(M,L,k,X){x();let Y=X.attributes,K=k.getAttributes(),q=L.defaultAttributeValues;for(let B in K){let G=K[B];if(G.location>=0){let re=Y[B];if(re===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(re=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(re=M.instanceColor)),re!==void 0){let ge=re.normalized,Se=re.itemSize,Ie=e.get(re);if(Ie===void 0)continue;let qe=Ie.buffer,nt=Ie.type,Ye=Ie.bytesPerElement,$=nt===i.INT||nt===i.UNSIGNED_INT||re.gpuType===ca;if(re.isInterleavedBufferAttribute){let te=re.data,_e=te.stride,Pe=re.offset;if(te.isInstancedInterleavedBuffer){for(let Ee=0;Ee<G.locationSize;Ee++)p(G.location+Ee,te.meshPerAttribute);M.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Ee=0;Ee<G.locationSize;Ee++)m(G.location+Ee);i.bindBuffer(i.ARRAY_BUFFER,qe);for(let Ee=0;Ee<G.locationSize;Ee++)T(G.location+Ee,Se/G.locationSize,nt,ge,_e*Ye,(Pe+Se/G.locationSize*Ee)*Ye,$)}else{if(re.isInstancedBufferAttribute){for(let te=0;te<G.locationSize;te++)p(G.location+te,re.meshPerAttribute);M.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let te=0;te<G.locationSize;te++)m(G.location+te);i.bindBuffer(i.ARRAY_BUFFER,qe);for(let te=0;te<G.locationSize;te++)T(G.location+te,Se/G.locationSize,nt,ge,Se*Ye,Se/G.locationSize*te*Ye,$)}}else if(q!==void 0){let ge=q[B];if(ge!==void 0)switch(ge.length){case 2:i.vertexAttrib2fv(G.location,ge);break;case 3:i.vertexAttrib3fv(G.location,ge);break;case 4:i.vertexAttrib4fv(G.location,ge);break;default:i.vertexAttrib1fv(G.location,ge)}}}}E()}function A(){N();for(let M in n){let L=n[M];for(let k in L){let X=L[k];for(let Y in X)h(X[Y].object),delete X[Y];delete L[k]}delete n[M]}}function R(M){if(n[M.id]===void 0)return;let L=n[M.id];for(let k in L){let X=L[k];for(let Y in X)h(X[Y].object),delete X[Y];delete L[k]}delete n[M.id]}function P(M){for(let L in n){let k=n[L];if(k[M.id]===void 0)continue;let X=k[M.id];for(let Y in X)h(X[Y].object),delete X[Y];delete k[M.id]}}function N(){b(),a=!0,r!==s&&(r=s,l(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:N,resetDefaultState:b,dispose:A,releaseStatesOfGeometry:R,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:m,disableUnusedAttributes:E}}function Bp(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];t.update(d,n,1)}function c(l,h,u,f){if(u===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)a(l[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*f[x];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function zp(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==tn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){let N=P===Ki&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==un&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==yn&&!N)}function c(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:T,maxFragmentUniforms:v,vertexTextures:A,maxSamples:R}}function Vp(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Pt,o=new ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let E=r?0:n,T=E*4,v=p.clippingState||null;c.value=v,v=h(g,f,T,d);for(let A=0;A!==T;++A)v[A]=t[A];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=d+x*4,E=f.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,v=d;T!==x;++T,v+=4)a.copy(u[T]).applyMatrix4(E,o),a.normal.toArray(m,v),m[v+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function kp(i){let e=new WeakMap;function t(a,o){return o===aa?a.mapping=_i:o===oa&&(a.mapping=xi),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===aa||o===oa)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Lr(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var ns=4,Jc=[.125,.215,.35,.446,.526,.582],Si=20,hl=new gi,Kc=new Xe,ul=null,dl=0,fl=0,pl=!1,bi=(1+Math.sqrt(5))/2,ts=1/bi,jc=[new w(-bi,ts,0),new w(bi,ts,0),new w(-ts,0,bi),new w(ts,0,bi),new w(0,bi,-ts),new w(0,bi,ts),new w(-1,1,-1),new w(1,1,-1),new w(-1,1,1),new w(1,1,1)],Hp=new w,qa=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=Hp}=r;ul=this._renderer.getRenderTarget(),dl=this._renderer.getActiveCubeFace(),fl=this._renderer.getActiveMipmapLevel(),pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=th(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=eh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ul,dl,fl),this._renderer.xr.enabled=pl,e.scissorTest=!1,Wa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_i||e.mapping===xi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ul=this._renderer.getRenderTarget(),dl=this._renderer.getActiveCubeFace(),fl=this._renderer.getActiveMipmapLevel(),pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:Ki,format:tn,colorSpace:pi,depthBuffer:!1},s=Qc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qc(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Gp(r)),this._blurMaterial=Wp(r,e,t)}return s}_compileMaterial(e){let t=new rt(this._lodPlanes[0],e);this._renderer.compile(t,hl)}_sceneToCubeUV(e,t,n,s,r){let c=new Ft(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Kc),u.toneMapping=Un,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let x=new bs({name:"PMREM.Background",side:Lt,depthWrite:!1,depthTest:!1}),m=new rt(new qi,x),p=!1,E=e.background;E?E.isColor&&(x.color.copy(E),e.background=null,p=!0):(x.color.copy(Kc),p=!0);for(let T=0;T<6;T++){let v=T%3;v===0?(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[T],r.y,r.z)):v===1?(c.up.set(0,0,l[T]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[T],r.z)):(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[T]));let A=this._cubeSize;Wa(s,v*A,T>2?A:0,A,A),u.setRenderTarget(s),p&&u.render(m,c),u.render(e,c)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=E}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===_i||e.mapping===xi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=th()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=eh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new rt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;Wa(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,hl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=jc[(s-r-1)%jc.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new rt(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Si-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Si;m>Si&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Si}`);let p=[],E=0;for(let P=0;P<Si;++P){let N=P/x,b=Math.exp(-N*N/2);p.push(b),P===0?E+=b:P<m&&(E+=2*b)}for(let P=0;P<p.length;P++)p[P]=p[P]/E;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:T}=this;f.dTheta.value=g,f.mipInt.value=T-n;let v=this._sizeLods[s],A=3*v*(s>T-ns?s-T+ns:0),R=4*(this._cubeSize-v);Wa(t,A,R,3*v,2*v),c.setRenderTarget(t),c.render(u,hl)}};function Gp(i){let e=[],t=[],n=[],s=i,r=i-ns+1+Jc.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let c=1/o;a>i-ns?c=Jc[a-i+ns-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,x=3,m=2,p=1,E=new Float32Array(x*g*d),T=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let R=0;R<d;R++){let P=R%3*2/3-1,N=R>2?0:-1,b=[P,N,0,P+2/3,N,0,P+2/3,N+1,0,P,N,0,P+2/3,N+1,0,P,N+1,0];E.set(b,x*g*R),T.set(f,m*g*R);let M=[R,R,R,R,R,R];v.set(M,p*g*R)}let A=new Xt;A.setAttribute("position",new Et(E,x)),A.setAttribute("uv",new Et(T,m)),A.setAttribute("faceIndex",new Et(v,p)),e.push(A),s>ns&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Qc(i,e,t){let n=new pn(i,e,t);return n.texture.mapping=zs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Wa(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Wp(i,e,t){let n=new Float32Array(Si),s=new w(0,1,0);return new hn({name:"SphericalGaussianBlur",defines:{n:Si,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Tl(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function eh(){return new hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tl(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function th(){return new hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Tl(){return`

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
	`}function Xp(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===aa||c===oa,h=c===_i||c===xi;if(l||h){let u=e.get(o),f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new qa(i)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let d=o.image;return l&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new qa(i)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function qp(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Hi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Yp(i,e,t,n){let s={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete s[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function c(u){let f=u.attributes;for(let d in f)e.update(f[d],i.ARRAY_BUFFER)}function l(u){let f=[],d=u.index,g=u.attributes.position,x=0;if(d!==null){let E=d.array;x=d.version;for(let T=0,v=E.length;T<v;T+=3){let A=E[T+0],R=E[T+1],P=E[T+2];f.push(A,R,R,P,P,A)}}else if(g!==void 0){let E=g.array;x=g.version;for(let T=0,v=E.length/3-1;T<v;T+=3){let A=T+0,R=T+1,P=T+2;f.push(A,R,R,P,P,A)}}else return;let m=new(sl(f)?Ts:Ss)(f,1);m.version=x;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function $p(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,d){i.drawElements(n,d,r,f*a),t.update(d,n,1)}function l(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,f*a,g),t.update(d,n,g))}function h(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}function u(f,d,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/a,d[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,x,0,g);let p=0;for(let E=0;E<g;E++)p+=d[E]*x[E];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Zp(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Jp(i,e,t){let n=new WeakMap,s=new dt;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==u){let b=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],E=o.morphAttributes.color||[],T=0;d===!0&&(T=1),g===!0&&(T=2),x===!0&&(T=3);let v=o.attributes.position.count*T,A=1;v>e.maxTextureSize&&(A=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let R=new Float32Array(v*A*4*u),P=new vs(R,v,A,u);P.type=yn,P.needsUpdate=!0;let N=T*4;for(let M=0;M<u;M++){let L=m[M],k=p[M],X=E[M],Y=v*A*4*M;for(let K=0;K<L.count;K++){let q=K*N;d===!0&&(s.fromBufferAttribute(L,K),R[Y+q+0]=s.x,R[Y+q+1]=s.y,R[Y+q+2]=s.z,R[Y+q+3]=0),g===!0&&(s.fromBufferAttribute(k,K),R[Y+q+4]=s.x,R[Y+q+5]=s.y,R[Y+q+6]=s.z,R[Y+q+7]=0),x===!0&&(s.fromBufferAttribute(X,K),R[Y+q+8]=s.x,R[Y+q+9]=s.y,R[Y+q+10]=s.z,R[Y+q+11]=X.itemSize===4?s.w:1)}}f={count:u,texture:P,size:new ve(v,A)},n.set(o,f),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let d=0;for(let x=0;x<l.length;x++)d+=l[x];let g=o.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Kp(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}var vh=new Wt,nh=new Cs(1,1),Mh=new vs,bh=new Ir,Sh=new ws,ih=[],sh=[],rh=new Float32Array(16),ah=new Float32Array(9),oh=new Float32Array(4);function ss(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=ih[s];if(r===void 0&&(r=new Float32Array(s),ih[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function xt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function yt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function $a(i,e){let t=sh[e];t===void 0&&(t=new Int32Array(e),sh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function jp(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Qp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2fv(this.addr,e),yt(t,e)}}function em(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;i.uniform3fv(this.addr,e),yt(t,e)}}function tm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4fv(this.addr,e),yt(t,e)}}function nm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),yt(t,e)}else{if(xt(t,n))return;oh.set(n),i.uniformMatrix2fv(this.addr,!1,oh),yt(t,n)}}function im(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),yt(t,e)}else{if(xt(t,n))return;ah.set(n),i.uniformMatrix3fv(this.addr,!1,ah),yt(t,n)}}function sm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),yt(t,e)}else{if(xt(t,n))return;rh.set(n),i.uniformMatrix4fv(this.addr,!1,rh),yt(t,n)}}function rm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function am(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2iv(this.addr,e),yt(t,e)}}function om(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;i.uniform3iv(this.addr,e),yt(t,e)}}function lm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4iv(this.addr,e),yt(t,e)}}function cm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function hm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2uiv(this.addr,e),yt(t,e)}}function um(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;i.uniform3uiv(this.addr,e),yt(t,e)}}function dm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4uiv(this.addr,e),yt(t,e)}}function fm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(nh.compareFunction=el,r=nh):r=vh,t.setTexture2D(e||r,s)}function pm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||bh,s)}function mm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Sh,s)}function gm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Mh,s)}function _m(i){switch(i){case 5126:return jp;case 35664:return Qp;case 35665:return em;case 35666:return tm;case 35674:return nm;case 35675:return im;case 35676:return sm;case 5124:case 35670:return rm;case 35667:case 35671:return am;case 35668:case 35672:return om;case 35669:case 35673:return lm;case 5125:return cm;case 36294:return hm;case 36295:return um;case 36296:return dm;case 35678:case 36198:case 36298:case 36306:case 35682:return fm;case 35679:case 36299:case 36307:return pm;case 35680:case 36300:case 36308:case 36293:return mm;case 36289:case 36303:case 36311:case 36292:return gm}}function xm(i,e){i.uniform1fv(this.addr,e)}function ym(i,e){let t=ss(e,this.size,2);i.uniform2fv(this.addr,t)}function vm(i,e){let t=ss(e,this.size,3);i.uniform3fv(this.addr,t)}function Mm(i,e){let t=ss(e,this.size,4);i.uniform4fv(this.addr,t)}function bm(i,e){let t=ss(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Sm(i,e){let t=ss(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Tm(i,e){let t=ss(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Em(i,e){i.uniform1iv(this.addr,e)}function wm(i,e){i.uniform2iv(this.addr,e)}function Am(i,e){i.uniform3iv(this.addr,e)}function Cm(i,e){i.uniform4iv(this.addr,e)}function Rm(i,e){i.uniform1uiv(this.addr,e)}function Im(i,e){i.uniform2uiv(this.addr,e)}function Pm(i,e){i.uniform3uiv(this.addr,e)}function Lm(i,e){i.uniform4uiv(this.addr,e)}function Dm(i,e,t){let n=this.cache,s=e.length,r=$a(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),yt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||vh,r[a])}function Um(i,e,t){let n=this.cache,s=e.length,r=$a(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),yt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||bh,r[a])}function Nm(i,e,t){let n=this.cache,s=e.length,r=$a(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),yt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Sh,r[a])}function Fm(i,e,t){let n=this.cache,s=e.length,r=$a(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),yt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Mh,r[a])}function Om(i){switch(i){case 5126:return xm;case 35664:return ym;case 35665:return vm;case 35666:return Mm;case 35674:return bm;case 35675:return Sm;case 35676:return Tm;case 5124:case 35670:return Em;case 35667:case 35671:return wm;case 35668:case 35672:return Am;case 35669:case 35673:return Cm;case 5125:return Rm;case 36294:return Im;case 36295:return Pm;case 36296:return Lm;case 35678:case 36198:case 36298:case 36306:case 35682:return Dm;case 35679:case 36299:case 36307:return Um;case 35680:case 36300:case 36308:case 36293:return Nm;case 36289:case 36303:case 36311:case 36292:return Fm}}var gl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=_m(t.type)}},_l=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Om(t.type)}},xl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},ml=/(\w+)(\])?(\[|\.)?/g;function lh(i,e){i.seq.push(e),i.map[e.id]=e}function Bm(i,e,t){let n=i.name,s=n.length;for(ml.lastIndex=0;;){let r=ml.exec(n),a=ml.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){lh(t,l===void 0?new gl(o,i,e):new _l(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new xl(o),lh(t,u)),t=u}}}var is=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Bm(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function ch(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var zm=37297,Vm=0;function km(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var hh=new ze;function Hm(i){$e._getMatrix(hh,$e.workingColorSpace,i);let e=`mat3( ${hh.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(i)){case _s:return[e,"LinearTransferOETF"];case Ke:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function uh(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+km(i.getShaderSource(e),o)}else return r}function Gm(i,e){let t=Hm(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Wm(i,e){let t;switch(e){case Cc:t="Linear";break;case Rc:t="Reinhard";break;case Ic:t="Cineon";break;case ra:t="ACESFilmic";break;case Lc:t="AgX";break;case Dc:t="Neutral";break;case Pc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Xa=new w;function Xm(){$e.getLuminanceCoefficients(Xa);let i=Xa.x.toFixed(4),e=Xa.y.toFixed(4),t=Xa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xs).join(`
`)}function Ym(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function $m(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Xs(i){return i!==""}function dh(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Zm=/^[ \t]*#include +<([\w\d./]+)>/gm;function yl(i){return i.replace(Zm,Km)}var Jm=new Map;function Km(i,e){let t=He[e];if(t===void 0){let n=Jm.get(e);if(n!==void 0)t=He[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return yl(t)}var jm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ph(i){return i.replace(jm,Qm)}function Qm(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function mh(i){let e=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function eg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===zo?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===oc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===xn&&(e="SHADOWMAP_TYPE_VSM"),e}function tg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case _i:case xi:e="ENVMAP_TYPE_CUBE";break;case zs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ng(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===xi&&(e="ENVMAP_MODE_REFRACTION"),e}function ig(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Go:e="ENVMAP_BLENDING_MULTIPLY";break;case wc:e="ENVMAP_BLENDING_MIX";break;case Ac:e="ENVMAP_BLENDING_ADD";break}return e}function sg(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function rg(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=eg(t),l=tg(t),h=ng(t),u=ig(t),f=sg(t),d=qm(t),g=Ym(r),x=s.createProgram(),m,p,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Xs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Xs).join(`
`),p.length>0&&(p+=`
`)):(m=[mh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xs).join(`
`),p=[mh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Un?"#define TONE_MAPPING":"",t.toneMapping!==Un?He.tonemapping_pars_fragment:"",t.toneMapping!==Un?Wm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,Gm("linearToOutputTexel",t.outputColorSpace),Xm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xs).join(`
`)),a=yl(a),a=dh(a,t),a=fh(a,t),o=yl(o),o=dh(o,t),o=fh(o,t),a=ph(a),o=ph(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===tl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===tl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let T=E+m+a,v=E+p+o,A=ch(s,s.VERTEX_SHADER,T),R=ch(s,s.FRAGMENT_SHADER,v);s.attachShader(x,A),s.attachShader(x,R),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function P(L){if(i.debug.checkShaderErrors){let k=s.getProgramInfoLog(x)||"",X=s.getShaderInfoLog(A)||"",Y=s.getShaderInfoLog(R)||"",K=k.trim(),q=X.trim(),B=Y.trim(),G=!0,re=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,A,R);else{let ge=uh(s,A,"vertex"),Se=uh(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+K+`
`+ge+`
`+Se)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(q===""||B==="")&&(re=!1);re&&(L.diagnostics={runnable:G,programLog:K,vertexShader:{log:q,prefix:m},fragmentShader:{log:B,prefix:p}})}s.deleteShader(A),s.deleteShader(R),N=new is(s,x),b=$m(s,x)}let N;this.getUniforms=function(){return N===void 0&&P(this),N};let b;this.getAttributes=function(){return b===void 0&&P(this),b};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,zm)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Vm++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=R,this}var ag=0,vl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ml(e),t.set(e,n)),n}},Ml=class{constructor(e){this.id=ag++,this.code=e,this.usedTimes=0}};function og(i,e,t,n,s,r,a){let o=new Ms,c=new vl,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,M,L,k,X){let Y=k.fog,K=X.geometry,q=b.isMeshStandardMaterial?k.environment:null,B=(b.isMeshStandardMaterial?t:e).get(b.envMap||q),G=B&&B.mapping===zs?B.image.height:null,re=g[b.type];b.precision!==null&&(d=s.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));let ge=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Se=ge!==void 0?ge.length:0,Ie=0;K.morphAttributes.position!==void 0&&(Ie=1),K.morphAttributes.normal!==void 0&&(Ie=2),K.morphAttributes.color!==void 0&&(Ie=3);let qe,nt,Ye,$;if(re){let Je=vn[re];qe=Je.vertexShader,nt=Je.fragmentShader}else qe=b.vertexShader,nt=b.fragmentShader,c.update(b),Ye=c.getVertexShaderID(b),$=c.getFragmentShaderID(b);let te=i.getRenderTarget(),_e=i.state.buffers.depth.getReversed(),Pe=X.isInstancedMesh===!0,Ee=X.isBatchedMesh===!0,Ge=!!b.map,mt=!!b.matcap,C=!!B,Qe=!!b.aoMap,Z=!!b.lightMap,ne=!!b.bumpMap,ee=!!b.normalMap,Le=!!b.displacementMap,de=!!b.emissiveMap,Fe=!!b.metalnessMap,lt=!!b.roughnessMap,ct=b.anisotropy>0,S=b.clearcoat>0,_=b.dispersion>0,O=b.iridescence>0,H=b.sheen>0,ie=b.transmission>0,W=ct&&!!b.anisotropyMap,we=S&&!!b.clearcoatMap,ce=S&&!!b.clearcoatNormalMap,Me=S&&!!b.clearcoatRoughnessMap,Ae=O&&!!b.iridescenceMap,oe=O&&!!b.iridescenceThicknessMap,me=H&&!!b.sheenColorMap,Ne=H&&!!b.sheenRoughnessMap,Ce=!!b.specularMap,fe=!!b.specularColorMap,Ve=!!b.specularIntensityMap,I=ie&&!!b.transmissionMap,le=ie&&!!b.thicknessMap,he=!!b.gradientMap,ye=!!b.alphaMap,se=b.alphaTest>0,Q=!!b.alphaHash,Te=!!b.extensions,Be=Un;b.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Be=i.toneMapping);let st={shaderID:re,shaderType:b.type,shaderName:b.name,vertexShader:qe,fragmentShader:nt,defines:b.defines,customVertexShaderID:Ye,customFragmentShaderID:$,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:Ee,batchingColor:Ee&&X._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&X.instanceColor!==null,instancingMorph:Pe&&X.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:te===null?i.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:pi,alphaToCoverage:!!b.alphaToCoverage,map:Ge,matcap:mt,envMap:C,envMapMode:C&&B.mapping,envMapCubeUVHeight:G,aoMap:Qe,lightMap:Z,bumpMap:ne,normalMap:ee,displacementMap:f&&Le,emissiveMap:de,normalMapObjectSpace:ee&&b.normalMapType===Oc,normalMapTangentSpace:ee&&b.normalMapType===Qo,metalnessMap:Fe,roughnessMap:lt,anisotropy:ct,anisotropyMap:W,clearcoat:S,clearcoatMap:we,clearcoatNormalMap:ce,clearcoatRoughnessMap:Me,dispersion:_,iridescence:O,iridescenceMap:Ae,iridescenceThicknessMap:oe,sheen:H,sheenColorMap:me,sheenRoughnessMap:Ne,specularMap:Ce,specularColorMap:fe,specularIntensityMap:Ve,transmission:ie,transmissionMap:I,thicknessMap:le,gradientMap:he,opaque:b.transparent===!1&&b.blending===di&&b.alphaToCoverage===!1,alphaMap:ye,alphaTest:se,alphaHash:Q,combine:b.combine,mapUv:Ge&&x(b.map.channel),aoMapUv:Qe&&x(b.aoMap.channel),lightMapUv:Z&&x(b.lightMap.channel),bumpMapUv:ne&&x(b.bumpMap.channel),normalMapUv:ee&&x(b.normalMap.channel),displacementMapUv:Le&&x(b.displacementMap.channel),emissiveMapUv:de&&x(b.emissiveMap.channel),metalnessMapUv:Fe&&x(b.metalnessMap.channel),roughnessMapUv:lt&&x(b.roughnessMap.channel),anisotropyMapUv:W&&x(b.anisotropyMap.channel),clearcoatMapUv:we&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:ce&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:me&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&x(b.sheenRoughnessMap.channel),specularMapUv:Ce&&x(b.specularMap.channel),specularColorMapUv:fe&&x(b.specularColorMap.channel),specularIntensityMapUv:Ve&&x(b.specularIntensityMap.channel),transmissionMapUv:I&&x(b.transmissionMap.channel),thicknessMapUv:le&&x(b.thicknessMap.channel),alphaMapUv:ye&&x(b.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(ee||ct),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!K.attributes.uv&&(Ge||ye),fog:!!Y,useFog:b.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:_e,skinning:X.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Ie,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Be,decodeVideoTexture:Ge&&b.map.isVideoTexture===!0&&$e.getTransfer(b.map.colorSpace)===Ke,decodeVideoTextureEmissive:de&&b.emissiveMap.isVideoTexture===!0&&$e.getTransfer(b.emissiveMap.colorSpace)===Ke,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ot,flipSided:b.side===Lt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Te&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Te&&b.extensions.multiDraw===!0||Ee)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return st.vertexUv1s=l.has(1),st.vertexUv2s=l.has(2),st.vertexUv3s=l.has(3),l.clear(),st}function p(b){let M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(let L in b.defines)M.push(L),M.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(E(M,b),T(M,b),M.push(i.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function E(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function T(b,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),b.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),b.push(o.mask)}function v(b){let M=g[b.type],L;if(M){let k=vn[M];L=$c.clone(k.uniforms)}else L=b.uniforms;return L}function A(b,M){let L;for(let k=0,X=h.length;k<X;k++){let Y=h[k];if(Y.cacheKey===M){L=Y,++L.usedTimes;break}}return L===void 0&&(L=new rg(i,M,b,r),h.push(L)),L}function R(b){if(--b.usedTimes===0){let M=h.indexOf(b);h[M]=h[h.length-1],h.pop(),b.destroy()}}function P(b){c.remove(b)}function N(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:A,releaseProgram:R,releaseShaderCache:P,programs:h,dispose:N}}function lg(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function cg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function gh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function _h(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,f,d,g,x,m){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),e++,p}function o(u,f,d,g,x,m){let p=a(u,f,d,g,x,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):t.push(p)}function c(u,f,d,g,x,m){let p=a(u,f,d,g,x,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function l(u,f){t.length>1&&t.sort(u||cg),n.length>1&&n.sort(f||gh),s.length>1&&s.sort(f||gh)}function h(){for(let u=e,f=i.length;u<f;u++){let d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function hg(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new _h,i.set(n,[a])):s>=r.length?(a=new _h,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function ug(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new w,color:new Xe};break;case"SpotLight":t={position:new w,direction:new w,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new w,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new w,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new w,halfWidth:new w,halfHeight:new w};break}return i[e.id]=t,t}}}function dg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var fg=0;function pg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function mg(i){let e=new ug,t=dg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new w);let s=new w,r=new pt,a=new pt;function o(l){let h=0,u=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,E=0,T=0,v=0,A=0,R=0,P=0;l.sort(pg);for(let b=0,M=l.length;b<M;b++){let L=l[b],k=L.color,X=L.intensity,Y=L.distance,K=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=k.r*X,u+=k.g*X,f+=k.b*X;else if(L.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(L.sh.coefficients[q],X);P++}else if(L.isDirectionalLight){let q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let B=L.shadow,G=t.get(L);G.shadowIntensity=B.intensity,G.shadowBias=B.bias,G.shadowNormalBias=B.normalBias,G.shadowRadius=B.radius,G.shadowMapSize=B.mapSize,n.directionalShadow[d]=G,n.directionalShadowMap[d]=K,n.directionalShadowMatrix[d]=L.shadow.matrix,E++}n.directional[d]=q,d++}else if(L.isSpotLight){let q=e.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(k).multiplyScalar(X),q.distance=Y,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,n.spot[x]=q;let B=L.shadow;if(L.map&&(n.spotLightMap[A]=L.map,A++,B.updateMatrices(L),L.castShadow&&R++),n.spotLightMatrix[x]=B.matrix,L.castShadow){let G=t.get(L);G.shadowIntensity=B.intensity,G.shadowBias=B.bias,G.shadowNormalBias=B.normalBias,G.shadowRadius=B.radius,G.shadowMapSize=B.mapSize,n.spotShadow[x]=G,n.spotShadowMap[x]=K,v++}x++}else if(L.isRectAreaLight){let q=e.get(L);q.color.copy(k).multiplyScalar(X),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=q,m++}else if(L.isPointLight){let q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),q.distance=L.distance,q.decay=L.decay,L.castShadow){let B=L.shadow,G=t.get(L);G.shadowIntensity=B.intensity,G.shadowBias=B.bias,G.shadowNormalBias=B.normalBias,G.shadowRadius=B.radius,G.shadowMapSize=B.mapSize,G.shadowCameraNear=B.camera.near,G.shadowCameraFar=B.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=L.shadow.matrix,T++}n.point[g]=q,g++}else if(L.isHemisphereLight){let q=e.get(L);q.skyColor.copy(L.color).multiplyScalar(X),q.groundColor.copy(L.groundColor).multiplyScalar(X),n.hemi[p]=q,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_FLOAT_1,n.rectAreaLTC2=ue.LTC_FLOAT_2):(n.rectAreaLTC1=ue.LTC_HALF_1,n.rectAreaLTC2=ue.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let N=n.hash;(N.directionalLength!==d||N.pointLength!==g||N.spotLength!==x||N.rectAreaLength!==m||N.hemiLength!==p||N.numDirectionalShadows!==E||N.numPointShadows!==T||N.numSpotShadows!==v||N.numSpotMaps!==A||N.numLightProbes!==P)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=v+A-R,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=P,N.directionalLength=d,N.pointLength=g,N.spotLength=x,N.rectAreaLength=m,N.hemiLength=p,N.numDirectionalShadows=E,N.numPointShadows=T,N.numSpotShadows=v,N.numSpotMaps=A,N.numLightProbes=P,n.version=fg++)}function c(l,h){let u=0,f=0,d=0,g=0,x=0,m=h.matrixWorldInverse;for(let p=0,E=l.length;p<E;p++){let T=l[p];if(T.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(T.isSpotLight){let v=n.spot[d];v.position.setFromMatrixPosition(T.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(T.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(T.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(T.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(T.width*.5,0,0),v.halfHeight.set(0,T.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(T.isPointLight){let v=n.point[f];v.position.setFromMatrixPosition(T.matrixWorld),v.position.applyMatrix4(m),f++}else if(T.isHemisphereLight){let v=n.hemi[x];v.direction.setFromMatrixPosition(T.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:o,setupView:c,state:n}}function xh(i){let e=new mg(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function gg(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new xh(i),e.set(s,[o])):r>=a.length?(o=new xh(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var _g=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xg=`uniform sampler2D shadow_pass;
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
}`;function yg(i,e,t){let n=new $i,s=new ve,r=new ve,a=new dt,o=new Vr({depthPacking:Fc}),c=new kr,l={},h=t.maxTextureSize,u={[Pn]:Lt,[Lt]:Pn,[Ot]:Ot},f=new hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ve},radius:{value:4}},vertexShader:_g,fragmentShader:xg}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new Xt;g.setAttribute("position",new Et(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new rt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zo;let p=this.type;this.render=function(R,P,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;let b=i.getRenderTarget(),M=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Dn),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let X=p!==xn&&this.type===xn,Y=p===xn&&this.type!==xn;for(let K=0,q=R.length;K<q;K++){let B=R[K],G=B.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let re=G.getFrameExtents();if(s.multiply(re),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/re.x),s.x=r.x*re.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/re.y),s.y=r.y*re.y,G.mapSize.y=r.y)),G.map===null||X===!0||Y===!0){let Se=this.type!==xn?{minFilter:Kt,magFilter:Kt}:{};G.map!==null&&G.map.dispose(),G.map=new pn(s.x,s.y,Se),G.map.texture.name=B.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();let ge=G.getViewportCount();for(let Se=0;Se<ge;Se++){let Ie=G.getViewport(Se);a.set(r.x*Ie.x,r.y*Ie.y,r.x*Ie.z,r.y*Ie.w),k.viewport(a),G.updateMatrices(B,Se),n=G.getFrustum(),v(P,N,G.camera,B,this.type)}G.isPointLightShadow!==!0&&this.type===xn&&E(G,N),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,M,L)};function E(R,P){let N=e.update(x);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new pn(s.x,s.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(P,null,N,f,x,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(P,null,N,d,x,null)}function T(R,P,N,b){let M=null,L=N.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(L!==void 0)M=L;else if(M=N.isPointLight===!0?c:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let k=M.uuid,X=P.uuid,Y=l[k];Y===void 0&&(Y={},l[k]=Y);let K=Y[X];K===void 0&&(K=M.clone(),Y[X]=K,P.addEventListener("dispose",A)),M=K}if(M.visible=P.visible,M.wireframe=P.wireframe,b===xn?M.side=P.shadowSide!==null?P.shadowSide:P.side:M.side=P.shadowSide!==null?P.shadowSide:u[P.side],M.alphaMap=P.alphaMap,M.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,M.map=P.map,M.clipShadows=P.clipShadows,M.clippingPlanes=P.clippingPlanes,M.clipIntersection=P.clipIntersection,M.displacementMap=P.displacementMap,M.displacementScale=P.displacementScale,M.displacementBias=P.displacementBias,M.wireframeLinewidth=P.wireframeLinewidth,M.linewidth=P.linewidth,N.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let k=i.properties.get(M);k.light=N}return M}function v(R,P,N,b,M){if(R.visible===!1)return;if(R.layers.test(P.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===xn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,R.matrixWorld);let X=e.update(R),Y=R.material;if(Array.isArray(Y)){let K=X.groups;for(let q=0,B=K.length;q<B;q++){let G=K[q],re=Y[G.materialIndex];if(re&&re.visible){let ge=T(R,re,b,M);R.onBeforeShadow(i,R,P,N,X,ge,G),i.renderBufferDirect(N,null,X,ge,R,G),R.onAfterShadow(i,R,P,N,X,ge,G)}}}else if(Y.visible){let K=T(R,Y,b,M);R.onBeforeShadow(i,R,P,N,X,K,null),i.renderBufferDirect(N,null,X,K,R,null),R.onAfterShadow(i,R,P,N,X,K,null)}}let k=R.children;for(let X=0,Y=k.length;X<Y;X++)v(k[X],P,N,b,M)}function A(R){R.target.removeEventListener("dispose",A);for(let N in l){let b=l[N],M=R.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}var vg={[jr]:Qr,[ea]:ia,[ta]:sa,[fi]:na,[Qr]:jr,[ia]:ea,[sa]:ta,[na]:fi};function Mg(i,e){function t(){let I=!1,le=new dt,he=null,ye=new dt(0,0,0,0);return{setMask:function(se){he!==se&&!I&&(i.colorMask(se,se,se,se),he=se)},setLocked:function(se){I=se},setClear:function(se,Q,Te,Be,st){st===!0&&(se*=Be,Q*=Be,Te*=Be),le.set(se,Q,Te,Be),ye.equals(le)===!1&&(i.clearColor(se,Q,Te,Be),ye.copy(le))},reset:function(){I=!1,he=null,ye.set(-1,0,0,0)}}}function n(){let I=!1,le=!1,he=null,ye=null,se=null;return{setReversed:function(Q){if(le!==Q){let Te=e.get("EXT_clip_control");Q?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),le=Q;let Be=se;se=null,this.setClear(Be)}},getReversed:function(){return le},setTest:function(Q){Q?te(i.DEPTH_TEST):_e(i.DEPTH_TEST)},setMask:function(Q){he!==Q&&!I&&(i.depthMask(Q),he=Q)},setFunc:function(Q){if(le&&(Q=vg[Q]),ye!==Q){switch(Q){case jr:i.depthFunc(i.NEVER);break;case Qr:i.depthFunc(i.ALWAYS);break;case ea:i.depthFunc(i.LESS);break;case fi:i.depthFunc(i.LEQUAL);break;case ta:i.depthFunc(i.EQUAL);break;case na:i.depthFunc(i.GEQUAL);break;case ia:i.depthFunc(i.GREATER);break;case sa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ye=Q}},setLocked:function(Q){I=Q},setClear:function(Q){se!==Q&&(le&&(Q=1-Q),i.clearDepth(Q),se=Q)},reset:function(){I=!1,he=null,ye=null,se=null,le=!1}}}function s(){let I=!1,le=null,he=null,ye=null,se=null,Q=null,Te=null,Be=null,st=null;return{setTest:function(Je){I||(Je?te(i.STENCIL_TEST):_e(i.STENCIL_TEST))},setMask:function(Je){le!==Je&&!I&&(i.stencilMask(Je),le=Je)},setFunc:function(Je,Tn,dn){(he!==Je||ye!==Tn||se!==dn)&&(i.stencilFunc(Je,Tn,dn),he=Je,ye=Tn,se=dn)},setOp:function(Je,Tn,dn){(Q!==Je||Te!==Tn||Be!==dn)&&(i.stencilOp(Je,Tn,dn),Q=Je,Te=Tn,Be=dn)},setLocked:function(Je){I=Je},setClear:function(Je){st!==Je&&(i.clearStencil(Je),st=Je)},reset:function(){I=!1,le=null,he=null,ye=null,se=null,Q=null,Te=null,Be=null,st=null}}}let r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap,h={},u={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,E=null,T=null,v=null,A=null,R=null,P=new Xe(0,0,0),N=0,b=!1,M=null,L=null,k=null,X=null,Y=null,K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,B=0,G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(G)[1]),q=B>=1):G.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),q=B>=2);let re=null,ge={},Se=i.getParameter(i.SCISSOR_BOX),Ie=i.getParameter(i.VIEWPORT),qe=new dt().fromArray(Se),nt=new dt().fromArray(Ie);function Ye(I,le,he,ye){let se=new Uint8Array(4),Q=i.createTexture();i.bindTexture(I,Q),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Te=0;Te<he;Te++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(le,0,i.RGBA,1,1,ye,0,i.RGBA,i.UNSIGNED_BYTE,se):i.texImage2D(le+Te,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,se);return Q}let $={};$[i.TEXTURE_2D]=Ye(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=Ye(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=Ye(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=Ye(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),te(i.DEPTH_TEST),a.setFunc(fi),ne(!1),ee(Bo),te(i.CULL_FACE),Qe(Dn);function te(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function _e(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function Pe(I,le){return u[I]!==le?(i.bindFramebuffer(I,le),u[I]=le,I===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=le),I===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=le),!0):!1}function Ee(I,le){let he=d,ye=!1;if(I){he=f.get(le),he===void 0&&(he=[],f.set(le,he));let se=I.textures;if(he.length!==se.length||he[0]!==i.COLOR_ATTACHMENT0){for(let Q=0,Te=se.length;Q<Te;Q++)he[Q]=i.COLOR_ATTACHMENT0+Q;he.length=se.length,ye=!0}}else he[0]!==i.BACK&&(he[0]=i.BACK,ye=!0);ye&&i.drawBuffers(he)}function Ge(I){return g!==I?(i.useProgram(I),g=I,!0):!1}let mt={[qn]:i.FUNC_ADD,[cc]:i.FUNC_SUBTRACT,[hc]:i.FUNC_REVERSE_SUBTRACT};mt[uc]=i.MIN,mt[dc]=i.MAX;let C={[fc]:i.ZERO,[pc]:i.ONE,[mc]:i.SRC_COLOR,[Sr]:i.SRC_ALPHA,[Mc]:i.SRC_ALPHA_SATURATE,[yc]:i.DST_COLOR,[_c]:i.DST_ALPHA,[gc]:i.ONE_MINUS_SRC_COLOR,[Tr]:i.ONE_MINUS_SRC_ALPHA,[vc]:i.ONE_MINUS_DST_COLOR,[xc]:i.ONE_MINUS_DST_ALPHA,[bc]:i.CONSTANT_COLOR,[Sc]:i.ONE_MINUS_CONSTANT_COLOR,[Tc]:i.CONSTANT_ALPHA,[Ec]:i.ONE_MINUS_CONSTANT_ALPHA};function Qe(I,le,he,ye,se,Q,Te,Be,st,Je){if(I===Dn){x===!0&&(_e(i.BLEND),x=!1);return}if(x===!1&&(te(i.BLEND),x=!0),I!==lc){if(I!==m||Je!==b){if((p!==qn||v!==qn)&&(i.blendEquation(i.FUNC_ADD),p=qn,v=qn),Je)switch(I){case di:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vo:i.blendFunc(i.ONE,i.ONE);break;case ko:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ho:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case di:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ko:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ho:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}E=null,T=null,A=null,R=null,P.set(0,0,0),N=0,m=I,b=Je}return}se=se||le,Q=Q||he,Te=Te||ye,(le!==p||se!==v)&&(i.blendEquationSeparate(mt[le],mt[se]),p=le,v=se),(he!==E||ye!==T||Q!==A||Te!==R)&&(i.blendFuncSeparate(C[he],C[ye],C[Q],C[Te]),E=he,T=ye,A=Q,R=Te),(Be.equals(P)===!1||st!==N)&&(i.blendColor(Be.r,Be.g,Be.b,st),P.copy(Be),N=st),m=I,b=!1}function Z(I,le){I.side===Ot?_e(i.CULL_FACE):te(i.CULL_FACE);let he=I.side===Lt;le&&(he=!he),ne(he),I.blending===di&&I.transparent===!1?Qe(Dn):Qe(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);let ye=I.stencilWrite;o.setTest(ye),ye&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),de(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?te(i.SAMPLE_ALPHA_TO_COVERAGE):_e(i.SAMPLE_ALPHA_TO_COVERAGE)}function ne(I){M!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),M=I)}function ee(I){I!==rc?(te(i.CULL_FACE),I!==L&&(I===Bo?i.cullFace(i.BACK):I===ac?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_e(i.CULL_FACE),L=I}function Le(I){I!==k&&(q&&i.lineWidth(I),k=I)}function de(I,le,he){I?(te(i.POLYGON_OFFSET_FILL),(X!==le||Y!==he)&&(i.polygonOffset(le,he),X=le,Y=he)):_e(i.POLYGON_OFFSET_FILL)}function Fe(I){I?te(i.SCISSOR_TEST):_e(i.SCISSOR_TEST)}function lt(I){I===void 0&&(I=i.TEXTURE0+K-1),re!==I&&(i.activeTexture(I),re=I)}function ct(I,le,he){he===void 0&&(re===null?he=i.TEXTURE0+K-1:he=re);let ye=ge[he];ye===void 0&&(ye={type:void 0,texture:void 0},ge[he]=ye),(ye.type!==I||ye.texture!==le)&&(re!==he&&(i.activeTexture(he),re=he),i.bindTexture(I,le||$[I]),ye.type=I,ye.texture=le)}function S(){let I=ge[re];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function O(){try{i.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function H(){try{i.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ie(){try{i.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function W(){try{i.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function we(){try{i.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ce(){try{i.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Me(){try{i.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ae(){try{i.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function oe(){try{i.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function me(I){qe.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),qe.copy(I))}function Ne(I){nt.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),nt.copy(I))}function Ce(I,le){let he=l.get(le);he===void 0&&(he=new WeakMap,l.set(le,he));let ye=he.get(I);ye===void 0&&(ye=i.getUniformBlockIndex(le,I.name),he.set(I,ye))}function fe(I,le){let ye=l.get(le).get(I);c.get(le)!==ye&&(i.uniformBlockBinding(le,ye,I.__bindingPointIndex),c.set(le,ye))}function Ve(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},re=null,ge={},u={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,E=null,T=null,v=null,A=null,R=null,P=new Xe(0,0,0),N=0,b=!1,M=null,L=null,k=null,X=null,Y=null,qe.set(0,0,i.canvas.width,i.canvas.height),nt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:te,disable:_e,bindFramebuffer:Pe,drawBuffers:Ee,useProgram:Ge,setBlending:Qe,setMaterial:Z,setFlipSided:ne,setCullFace:ee,setLineWidth:Le,setPolygonOffset:de,setScissorTest:Fe,activeTexture:lt,bindTexture:ct,unbindTexture:S,compressedTexImage2D:_,compressedTexImage3D:O,texImage2D:Ae,texImage3D:oe,updateUBOMapping:Ce,uniformBlockBinding:fe,texStorage2D:ce,texStorage3D:Me,texSubImage2D:H,texSubImage3D:ie,compressedTexSubImage2D:W,compressedTexSubImage3D:we,scissor:me,viewport:Ne,reset:Ve}}function bg(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ve,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,_){return d?new OffscreenCanvas(S,_):ys("canvas")}function x(S,_,O){let H=1,ie=ct(S);if((ie.width>O||ie.height>O)&&(H=O/Math.max(ie.width,ie.height)),H<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){let W=Math.floor(H*ie.width),we=Math.floor(H*ie.height);u===void 0&&(u=g(W,we));let ce=_?g(W,we):u;return ce.width=W,ce.height=we,ce.getContext("2d").drawImage(S,0,0,W,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+W+"x"+we+")."),ce}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),S;return S}function m(S){return S.generateMipmaps}function p(S){i.generateMipmap(S)}function E(S){return S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?i.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(S,_,O,H,ie=!1){if(S!==null){if(i[S]!==void 0)return i[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let W=_;if(_===i.RED&&(O===i.FLOAT&&(W=i.R32F),O===i.HALF_FLOAT&&(W=i.R16F),O===i.UNSIGNED_BYTE&&(W=i.R8)),_===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(W=i.R8UI),O===i.UNSIGNED_SHORT&&(W=i.R16UI),O===i.UNSIGNED_INT&&(W=i.R32UI),O===i.BYTE&&(W=i.R8I),O===i.SHORT&&(W=i.R16I),O===i.INT&&(W=i.R32I)),_===i.RG&&(O===i.FLOAT&&(W=i.RG32F),O===i.HALF_FLOAT&&(W=i.RG16F),O===i.UNSIGNED_BYTE&&(W=i.RG8)),_===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(W=i.RG8UI),O===i.UNSIGNED_SHORT&&(W=i.RG16UI),O===i.UNSIGNED_INT&&(W=i.RG32UI),O===i.BYTE&&(W=i.RG8I),O===i.SHORT&&(W=i.RG16I),O===i.INT&&(W=i.RG32I)),_===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(W=i.RGB8UI),O===i.UNSIGNED_SHORT&&(W=i.RGB16UI),O===i.UNSIGNED_INT&&(W=i.RGB32UI),O===i.BYTE&&(W=i.RGB8I),O===i.SHORT&&(W=i.RGB16I),O===i.INT&&(W=i.RGB32I)),_===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(W=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(W=i.RGBA16UI),O===i.UNSIGNED_INT&&(W=i.RGBA32UI),O===i.BYTE&&(W=i.RGBA8I),O===i.SHORT&&(W=i.RGBA16I),O===i.INT&&(W=i.RGBA32I)),_===i.RGB&&(O===i.UNSIGNED_INT_5_9_9_9_REV&&(W=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(W=i.R11F_G11F_B10F)),_===i.RGBA){let we=ie?_s:$e.getTransfer(H);O===i.FLOAT&&(W=i.RGBA32F),O===i.HALF_FLOAT&&(W=i.RGBA16F),O===i.UNSIGNED_BYTE&&(W=we===Ke?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(W=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(W=i.RGB5_A1)}return(W===i.R16F||W===i.R32F||W===i.RG16F||W===i.RG32F||W===i.RGBA16F||W===i.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function v(S,_){let O;return S?_===null||_===Qn||_===ji?O=i.DEPTH24_STENCIL8:_===yn?O=i.DEPTH32F_STENCIL8:_===Ji&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Qn||_===ji?O=i.DEPTH_COMPONENT24:_===yn?O=i.DEPTH_COMPONENT32F:_===Ji&&(O=i.DEPTH_COMPONENT16),O}function A(S,_){return m(S)===!0||S.isFramebufferTexture&&S.minFilter!==Kt&&S.minFilter!==ln?Math.log2(Math.max(_.width,_.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?_.mipmaps.length:1}function R(S){let _=S.target;_.removeEventListener("dispose",R),N(_),_.isVideoTexture&&h.delete(_)}function P(S){let _=S.target;_.removeEventListener("dispose",P),M(_)}function N(S){let _=n.get(S);if(_.__webglInit===void 0)return;let O=S.source,H=f.get(O);if(H){let ie=H[_.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&b(S),Object.keys(H).length===0&&f.delete(O)}n.remove(S)}function b(S){let _=n.get(S);i.deleteTexture(_.__webglTexture);let O=S.source,H=f.get(O);delete H[_.__cacheKey],a.memory.textures--}function M(S){let _=n.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),n.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(_.__webglFramebuffer[H]))for(let ie=0;ie<_.__webglFramebuffer[H].length;ie++)i.deleteFramebuffer(_.__webglFramebuffer[H][ie]);else i.deleteFramebuffer(_.__webglFramebuffer[H]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[H])}else{if(Array.isArray(_.__webglFramebuffer))for(let H=0;H<_.__webglFramebuffer.length;H++)i.deleteFramebuffer(_.__webglFramebuffer[H]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let H=0;H<_.__webglColorRenderbuffer.length;H++)_.__webglColorRenderbuffer[H]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[H]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let O=S.textures;for(let H=0,ie=O.length;H<ie;H++){let W=n.get(O[H]);W.__webglTexture&&(i.deleteTexture(W.__webglTexture),a.memory.textures--),n.remove(O[H])}n.remove(S)}let L=0;function k(){L=0}function X(){let S=L;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),L+=1,S}function Y(S){let _=[];return _.push(S.wrapS),_.push(S.wrapT),_.push(S.wrapR||0),_.push(S.magFilter),_.push(S.minFilter),_.push(S.anisotropy),_.push(S.internalFormat),_.push(S.format),_.push(S.type),_.push(S.generateMipmaps),_.push(S.premultiplyAlpha),_.push(S.flipY),_.push(S.unpackAlignment),_.push(S.colorSpace),_.join()}function K(S,_){let O=n.get(S);if(S.isVideoTexture&&Fe(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&O.__version!==S.version){let H=S.image;if(H===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(O,S,_);return}}else S.isExternalTexture&&(O.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+_)}function q(S,_){let O=n.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&O.__version!==S.version){$(O,S,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+_)}function B(S,_){let O=n.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&O.__version!==S.version){$(O,S,_);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+_)}function G(S,_){let O=n.get(S);if(S.version>0&&O.__version!==S.version){te(O,S,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+_)}let re={[Er]:i.REPEAT,[Xn]:i.CLAMP_TO_EDGE,[wr]:i.MIRRORED_REPEAT},ge={[Kt]:i.NEAREST,[Uc]:i.NEAREST_MIPMAP_NEAREST,[Vs]:i.NEAREST_MIPMAP_LINEAR,[ln]:i.LINEAR,[la]:i.LINEAR_MIPMAP_NEAREST,[jn]:i.LINEAR_MIPMAP_LINEAR},Se={[Bc]:i.NEVER,[Wc]:i.ALWAYS,[zc]:i.LESS,[el]:i.LEQUAL,[Vc]:i.EQUAL,[Gc]:i.GEQUAL,[kc]:i.GREATER,[Hc]:i.NOTEQUAL};function Ie(S,_){if(_.type===yn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===ln||_.magFilter===la||_.magFilter===Vs||_.magFilter===jn||_.minFilter===ln||_.minFilter===la||_.minFilter===Vs||_.minFilter===jn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(S,i.TEXTURE_WRAP_S,re[_.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,re[_.wrapT]),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,re[_.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,ge[_.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,ge[_.minFilter]),_.compareFunction&&(i.texParameteri(S,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(S,i.TEXTURE_COMPARE_FUNC,Se[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Kt||_.minFilter!==Vs&&_.minFilter!==jn||_.type===yn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(S,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function qe(S,_){let O=!1;S.__webglInit===void 0&&(S.__webglInit=!0,_.addEventListener("dispose",R));let H=_.source,ie=f.get(H);ie===void 0&&(ie={},f.set(H,ie));let W=Y(_);if(W!==S.__cacheKey){ie[W]===void 0&&(ie[W]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),ie[W].usedTimes++;let we=ie[S.__cacheKey];we!==void 0&&(ie[S.__cacheKey].usedTimes--,we.usedTimes===0&&b(_)),S.__cacheKey=W,S.__webglTexture=ie[W].texture}return O}function nt(S,_,O){return Math.floor(Math.floor(S/O)/_)}function Ye(S,_,O,H){let W=S.updateRanges;if(W.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,O,H,_.data);else{W.sort((oe,me)=>oe.start-me.start);let we=0;for(let oe=1;oe<W.length;oe++){let me=W[we],Ne=W[oe],Ce=me.start+me.count,fe=nt(Ne.start,_.width,4),Ve=nt(me.start,_.width,4);Ne.start<=Ce+1&&fe===Ve&&nt(Ne.start+Ne.count-1,_.width,4)===fe?me.count=Math.max(me.count,Ne.start+Ne.count-me.start):(++we,W[we]=Ne)}W.length=we+1;let ce=i.getParameter(i.UNPACK_ROW_LENGTH),Me=i.getParameter(i.UNPACK_SKIP_PIXELS),Ae=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let oe=0,me=W.length;oe<me;oe++){let Ne=W[oe],Ce=Math.floor(Ne.start/4),fe=Math.ceil(Ne.count/4),Ve=Ce%_.width,I=Math.floor(Ce/_.width),le=fe,he=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ve),i.pixelStorei(i.UNPACK_SKIP_ROWS,I),t.texSubImage2D(i.TEXTURE_2D,0,Ve,I,le,he,O,H,_.data)}S.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ce),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Me),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ae)}}function $(S,_,O){let H=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(H=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(H=i.TEXTURE_3D);let ie=qe(S,_),W=_.source;t.bindTexture(H,S.__webglTexture,i.TEXTURE0+O);let we=n.get(W);if(W.version!==we.__version||ie===!0){t.activeTexture(i.TEXTURE0+O);let ce=$e.getPrimaries($e.workingColorSpace),Me=_.colorSpace===Nn?null:$e.getPrimaries(_.colorSpace),Ae=_.colorSpace===Nn||ce===Me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let oe=x(_.image,!1,s.maxTextureSize);oe=lt(_,oe);let me=r.convert(_.format,_.colorSpace),Ne=r.convert(_.type),Ce=T(_.internalFormat,me,Ne,_.colorSpace,_.isVideoTexture);Ie(H,_);let fe,Ve=_.mipmaps,I=_.isVideoTexture!==!0,le=we.__version===void 0||ie===!0,he=W.dataReady,ye=A(_,oe);if(_.isDepthTexture)Ce=v(_.format===Qi,_.type),le&&(I?t.texStorage2D(i.TEXTURE_2D,1,Ce,oe.width,oe.height):t.texImage2D(i.TEXTURE_2D,0,Ce,oe.width,oe.height,0,me,Ne,null));else if(_.isDataTexture)if(Ve.length>0){I&&le&&t.texStorage2D(i.TEXTURE_2D,ye,Ce,Ve[0].width,Ve[0].height);for(let se=0,Q=Ve.length;se<Q;se++)fe=Ve[se],I?he&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,fe.width,fe.height,me,Ne,fe.data):t.texImage2D(i.TEXTURE_2D,se,Ce,fe.width,fe.height,0,me,Ne,fe.data);_.generateMipmaps=!1}else I?(le&&t.texStorage2D(i.TEXTURE_2D,ye,Ce,oe.width,oe.height),he&&Ye(_,oe,me,Ne)):t.texImage2D(i.TEXTURE_2D,0,Ce,oe.width,oe.height,0,me,Ne,oe.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){I&&le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,Ce,Ve[0].width,Ve[0].height,oe.depth);for(let se=0,Q=Ve.length;se<Q;se++)if(fe=Ve[se],_.format!==tn)if(me!==null)if(I){if(he)if(_.layerUpdates.size>0){let Te=cl(fe.width,fe.height,_.format,_.type);for(let Be of _.layerUpdates){let st=fe.data.subarray(Be*Te/fe.data.BYTES_PER_ELEMENT,(Be+1)*Te/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,Be,fe.width,fe.height,1,me,st)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,fe.width,fe.height,oe.depth,me,fe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,se,Ce,fe.width,fe.height,oe.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?he&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,fe.width,fe.height,oe.depth,me,Ne,fe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,se,Ce,fe.width,fe.height,oe.depth,0,me,Ne,fe.data)}else{I&&le&&t.texStorage2D(i.TEXTURE_2D,ye,Ce,Ve[0].width,Ve[0].height);for(let se=0,Q=Ve.length;se<Q;se++)fe=Ve[se],_.format!==tn?me!==null?I?he&&t.compressedTexSubImage2D(i.TEXTURE_2D,se,0,0,fe.width,fe.height,me,fe.data):t.compressedTexImage2D(i.TEXTURE_2D,se,Ce,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?he&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,fe.width,fe.height,me,Ne,fe.data):t.texImage2D(i.TEXTURE_2D,se,Ce,fe.width,fe.height,0,me,Ne,fe.data)}else if(_.isDataArrayTexture)if(I){if(le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,Ce,oe.width,oe.height,oe.depth),he)if(_.layerUpdates.size>0){let se=cl(oe.width,oe.height,_.format,_.type);for(let Q of _.layerUpdates){let Te=oe.data.subarray(Q*se/oe.data.BYTES_PER_ELEMENT,(Q+1)*se/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,oe.width,oe.height,1,me,Ne,Te)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,me,Ne,oe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ce,oe.width,oe.height,oe.depth,0,me,Ne,oe.data);else if(_.isData3DTexture)I?(le&&t.texStorage3D(i.TEXTURE_3D,ye,Ce,oe.width,oe.height,oe.depth),he&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,me,Ne,oe.data)):t.texImage3D(i.TEXTURE_3D,0,Ce,oe.width,oe.height,oe.depth,0,me,Ne,oe.data);else if(_.isFramebufferTexture){if(le)if(I)t.texStorage2D(i.TEXTURE_2D,ye,Ce,oe.width,oe.height);else{let se=oe.width,Q=oe.height;for(let Te=0;Te<ye;Te++)t.texImage2D(i.TEXTURE_2D,Te,Ce,se,Q,0,me,Ne,null),se>>=1,Q>>=1}}else if(Ve.length>0){if(I&&le){let se=ct(Ve[0]);t.texStorage2D(i.TEXTURE_2D,ye,Ce,se.width,se.height)}for(let se=0,Q=Ve.length;se<Q;se++)fe=Ve[se],I?he&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,me,Ne,fe):t.texImage2D(i.TEXTURE_2D,se,Ce,me,Ne,fe);_.generateMipmaps=!1}else if(I){if(le){let se=ct(oe);t.texStorage2D(i.TEXTURE_2D,ye,Ce,se.width,se.height)}he&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,me,Ne,oe)}else t.texImage2D(i.TEXTURE_2D,0,Ce,me,Ne,oe);m(_)&&p(H),we.__version=W.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function te(S,_,O){if(_.image.length!==6)return;let H=qe(S,_),ie=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+O);let W=n.get(ie);if(ie.version!==W.__version||H===!0){t.activeTexture(i.TEXTURE0+O);let we=$e.getPrimaries($e.workingColorSpace),ce=_.colorSpace===Nn?null:$e.getPrimaries(_.colorSpace),Me=_.colorSpace===Nn||we===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let Ae=_.isCompressedTexture||_.image[0].isCompressedTexture,oe=_.image[0]&&_.image[0].isDataTexture,me=[];for(let Q=0;Q<6;Q++)!Ae&&!oe?me[Q]=x(_.image[Q],!0,s.maxCubemapSize):me[Q]=oe?_.image[Q].image:_.image[Q],me[Q]=lt(_,me[Q]);let Ne=me[0],Ce=r.convert(_.format,_.colorSpace),fe=r.convert(_.type),Ve=T(_.internalFormat,Ce,fe,_.colorSpace),I=_.isVideoTexture!==!0,le=W.__version===void 0||H===!0,he=ie.dataReady,ye=A(_,Ne);Ie(i.TEXTURE_CUBE_MAP,_);let se;if(Ae){I&&le&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ye,Ve,Ne.width,Ne.height);for(let Q=0;Q<6;Q++){se=me[Q].mipmaps;for(let Te=0;Te<se.length;Te++){let Be=se[Te];_.format!==tn?Ce!==null?I?he&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te,0,0,Be.width,Be.height,Ce,Be.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te,Ve,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te,0,0,Be.width,Be.height,Ce,fe,Be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te,Ve,Be.width,Be.height,0,Ce,fe,Be.data)}}}else{if(se=_.mipmaps,I&&le){se.length>0&&ye++;let Q=ct(me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ye,Ve,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(oe){I?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,me[Q].width,me[Q].height,Ce,fe,me[Q].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ve,me[Q].width,me[Q].height,0,Ce,fe,me[Q].data);for(let Te=0;Te<se.length;Te++){let st=se[Te].image[Q].image;I?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te+1,0,0,st.width,st.height,Ce,fe,st.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te+1,Ve,st.width,st.height,0,Ce,fe,st.data)}}else{I?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ce,fe,me[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ve,Ce,fe,me[Q]);for(let Te=0;Te<se.length;Te++){let Be=se[Te];I?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te+1,0,0,Ce,fe,Be.image[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te+1,Ve,Ce,fe,Be.image[Q])}}}m(_)&&p(i.TEXTURE_CUBE_MAP),W.__version=ie.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function _e(S,_,O,H,ie,W){let we=r.convert(O.format,O.colorSpace),ce=r.convert(O.type),Me=T(O.internalFormat,we,ce,O.colorSpace),Ae=n.get(_),oe=n.get(O);if(oe.__renderTarget=_,!Ae.__hasExternalTextures){let me=Math.max(1,_.width>>W),Ne=Math.max(1,_.height>>W);ie===i.TEXTURE_3D||ie===i.TEXTURE_2D_ARRAY?t.texImage3D(ie,W,Me,me,Ne,_.depth,0,we,ce,null):t.texImage2D(ie,W,Me,me,Ne,0,we,ce,null)}t.bindFramebuffer(i.FRAMEBUFFER,S),de(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,H,ie,oe.__webglTexture,0,Le(_)):(ie===i.TEXTURE_2D||ie>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,H,ie,oe.__webglTexture,W),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Pe(S,_,O){if(i.bindRenderbuffer(i.RENDERBUFFER,S),_.depthBuffer){let H=_.depthTexture,ie=H&&H.isDepthTexture?H.type:null,W=v(_.stencilBuffer,ie),we=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=Le(_);de(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce,W,_.width,_.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,W,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,W,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,we,i.RENDERBUFFER,S)}else{let H=_.textures;for(let ie=0;ie<H.length;ie++){let W=H[ie],we=r.convert(W.format,W.colorSpace),ce=r.convert(W.type),Me=T(W.internalFormat,we,ce,W.colorSpace),Ae=Le(_);O&&de(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae,Me,_.width,_.height):de(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ae,Me,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Me,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ee(S,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,S),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let H=n.get(_.depthTexture);H.__renderTarget=_,(!H.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),K(_.depthTexture,0);let ie=H.__webglTexture,W=Le(_);if(_.depthTexture.format===Vi)de(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0);else if(_.depthTexture.format===Qi)de(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Ge(S){let _=n.get(S),O=S.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==S.depthTexture){let H=S.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),H){let ie=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,H.removeEventListener("dispose",ie)};H.addEventListener("dispose",ie),_.__depthDisposeCallback=ie}_.__boundDepthTexture=H}if(S.depthTexture&&!_.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");let H=S.texture.mipmaps;H&&H.length>0?Ee(_.__webglFramebuffer[0],S):Ee(_.__webglFramebuffer,S)}else if(O){_.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[H]),_.__webglDepthbuffer[H]===void 0)_.__webglDepthbuffer[H]=i.createRenderbuffer(),Pe(_.__webglDepthbuffer[H],S,!1);else{let ie=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=_.__webglDepthbuffer[H];i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,W)}}else{let H=S.texture.mipmaps;if(H&&H.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Pe(_.__webglDepthbuffer,S,!1);else{let ie=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,W)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function mt(S,_,O){let H=n.get(S);_!==void 0&&_e(H.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Ge(S)}function C(S){let _=S.texture,O=n.get(S),H=n.get(_);S.addEventListener("dispose",P);let ie=S.textures,W=S.isWebGLCubeRenderTarget===!0,we=ie.length>1;if(we||(H.__webglTexture===void 0&&(H.__webglTexture=i.createTexture()),H.__version=_.version,a.memory.textures++),W){O.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[ce]=[];for(let Me=0;Me<_.mipmaps.length;Me++)O.__webglFramebuffer[ce][Me]=i.createFramebuffer()}else O.__webglFramebuffer[ce]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let ce=0;ce<_.mipmaps.length;ce++)O.__webglFramebuffer[ce]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(we)for(let ce=0,Me=ie.length;ce<Me;ce++){let Ae=n.get(ie[ce]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=i.createTexture(),a.memory.textures++)}if(S.samples>0&&de(S)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ce=0;ce<ie.length;ce++){let Me=ie[ce];O.__webglColorRenderbuffer[ce]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[ce]);let Ae=r.convert(Me.format,Me.colorSpace),oe=r.convert(Me.type),me=T(Me.internalFormat,Ae,oe,Me.colorSpace,S.isXRRenderTarget===!0),Ne=Le(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ne,me,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,O.__webglColorRenderbuffer[ce])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),Pe(O.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(W){t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture),Ie(i.TEXTURE_CUBE_MAP,_);for(let ce=0;ce<6;ce++)if(_.mipmaps&&_.mipmaps.length>0)for(let Me=0;Me<_.mipmaps.length;Me++)_e(O.__webglFramebuffer[ce][Me],S,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Me);else _e(O.__webglFramebuffer[ce],S,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(_)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let ce=0,Me=ie.length;ce<Me;ce++){let Ae=ie[ce],oe=n.get(Ae),me=i.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(me=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(me,oe.__webglTexture),Ie(me,Ae),_e(O.__webglFramebuffer,S,Ae,i.COLOR_ATTACHMENT0+ce,me,0),m(Ae)&&p(me)}t.unbindTexture()}else{let ce=i.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(ce=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,H.__webglTexture),Ie(ce,_),_.mipmaps&&_.mipmaps.length>0)for(let Me=0;Me<_.mipmaps.length;Me++)_e(O.__webglFramebuffer[Me],S,_,i.COLOR_ATTACHMENT0,ce,Me);else _e(O.__webglFramebuffer,S,_,i.COLOR_ATTACHMENT0,ce,0);m(_)&&p(ce),t.unbindTexture()}S.depthBuffer&&Ge(S)}function Qe(S){let _=S.textures;for(let O=0,H=_.length;O<H;O++){let ie=_[O];if(m(ie)){let W=E(S),we=n.get(ie).__webglTexture;t.bindTexture(W,we),p(W),t.unbindTexture()}}}let Z=[],ne=[];function ee(S){if(S.samples>0){if(de(S)===!1){let _=S.textures,O=S.width,H=S.height,ie=i.COLOR_BUFFER_BIT,W=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,we=n.get(S),ce=_.length>1;if(ce)for(let Ae=0;Ae<_.length;Ae++)t.bindFramebuffer(i.FRAMEBUFFER,we.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,we.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer);let Me=S.texture.mipmaps;Me&&Me.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let Ae=0;Ae<_.length;Ae++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(ie|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(ie|=i.STENCIL_BUFFER_BIT)),ce){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,we.__webglColorRenderbuffer[Ae]);let oe=n.get(_[Ae]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,oe,0)}i.blitFramebuffer(0,0,O,H,0,0,O,H,ie,i.NEAREST),c===!0&&(Z.length=0,ne.length=0,Z.push(i.COLOR_ATTACHMENT0+Ae),S.depthBuffer&&S.resolveDepthBuffer===!1&&(Z.push(W),ne.push(W),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ne)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Z))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ce)for(let Ae=0;Ae<_.length;Ae++){t.bindFramebuffer(i.FRAMEBUFFER,we.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,we.__webglColorRenderbuffer[Ae]);let oe=n.get(_[Ae]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,we.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,oe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&c){let _=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Le(S){return Math.min(s.maxSamples,S.samples)}function de(S){let _=n.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Fe(S){let _=a.render.frame;h.get(S)!==_&&(h.set(S,_),S.update())}function lt(S,_){let O=S.colorSpace,H=S.format,ie=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||O!==pi&&O!==Nn&&($e.getTransfer(O)===Ke?(H!==tn||ie!==un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),_}function ct(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(l.width=S.naturalWidth||S.width,l.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(l.width=S.displayWidth,l.height=S.displayHeight):(l.width=S.width,l.height=S.height),l}this.allocateTextureUnit=X,this.resetTextureUnits=k,this.setTexture2D=K,this.setTexture2DArray=q,this.setTexture3D=B,this.setTextureCube=G,this.rebindTextures=mt,this.setupRenderTarget=C,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=ee,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=de}function Sg(i,e){function t(n,s=Nn){let r,a=$e.getTransfer(s);if(n===un)return i.UNSIGNED_BYTE;if(n===ha)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ua)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Yo)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===$o)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Xo)return i.BYTE;if(n===qo)return i.SHORT;if(n===Ji)return i.UNSIGNED_SHORT;if(n===ca)return i.INT;if(n===Qn)return i.UNSIGNED_INT;if(n===yn)return i.FLOAT;if(n===Ki)return i.HALF_FLOAT;if(n===Zo)return i.ALPHA;if(n===Jo)return i.RGB;if(n===tn)return i.RGBA;if(n===Vi)return i.DEPTH_COMPONENT;if(n===Qi)return i.DEPTH_STENCIL;if(n===Ko)return i.RED;if(n===da)return i.RED_INTEGER;if(n===jo)return i.RG;if(n===fa)return i.RG_INTEGER;if(n===pa)return i.RGBA_INTEGER;if(n===ks||n===Hs||n===Gs||n===Ws)if(a===Ke)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ks)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Hs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Gs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ws)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ks)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Hs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Gs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ws)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ma||n===ga||n===_a||n===xa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ma)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ga)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_a)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===xa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ya||n===va||n===Ma)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ya||n===va)return a===Ke?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ma)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ba||n===Sa||n===Ta||n===Ea||n===wa||n===Aa||n===Ca||n===Ra||n===Ia||n===Pa||n===La||n===Da||n===Ua||n===Na)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ba)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Sa)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ta)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ea)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===wa)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Aa)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ca)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ra)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ia)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Pa)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===La)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Da)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ua)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Na)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Fa||n===Oa||n===Ba)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Fa)return a===Ke?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Oa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ba)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===za||n===Va||n===ka||n===Ha)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===za)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Va)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ka)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ha)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ji?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Tg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Eg=`
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

}`,bl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Rs(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new hn({vertexShader:Tg,fragmentShader:Eg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new rt(new Ls(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Sl=class extends fn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,g=null,x=typeof XRWebGLBinding<"u",m=new bl,p={},E=t.getContextAttributes(),T=null,v=null,A=[],R=[],P=new ve,N=null,b=new Ft;b.viewport=new dt;let M=new Ft;M.viewport=new dt;let L=[b,M],k=new Kr,X=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let te=A[$];return te===void 0&&(te=new Yi,A[$]=te),te.getTargetRaySpace()},this.getControllerGrip=function($){let te=A[$];return te===void 0&&(te=new Yi,A[$]=te),te.getGripSpace()},this.getHand=function($){let te=A[$];return te===void 0&&(te=new Yi,A[$]=te),te.getHandSpace()};function K($){let te=R.indexOf($.inputSource);if(te===-1)return;let _e=A[te];_e!==void 0&&(_e.update($.inputSource,$.frame,l||a),_e.dispatchEvent({type:$.type,data:$.inputSource}))}function q(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",B);for(let $=0;$<A.length;$++){let te=R[$];te!==null&&(R[$]=null,A[$].disconnect(te))}X=null,Y=null,m.reset();for(let $ in p)delete p[$];e.setRenderTarget(T),d=null,f=null,u=null,s=null,v=null,Ye.stop(),n.isPresenting=!1,e.setPixelRatio(N),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",q),s.addEventListener("inputsourceschange",B),E.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(P),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Pe=null,Ee=null;E.depth&&(Ee=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=E.stencil?Qi:Vi,Pe=E.stencil?ji:Qn);let Ge={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Ge),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new pn(f.textureWidth,f.textureHeight,{format:tn,type:un,depthTexture:new Cs(f.textureWidth,f.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let _e={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,_e),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new pn(d.framebufferWidth,d.framebufferHeight,{format:tn,type:un,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Ye.setContext(s),Ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function B($){for(let te=0;te<$.removed.length;te++){let _e=$.removed[te],Pe=R.indexOf(_e);Pe>=0&&(R[Pe]=null,A[Pe].disconnect(_e))}for(let te=0;te<$.added.length;te++){let _e=$.added[te],Pe=R.indexOf(_e);if(Pe===-1){for(let Ge=0;Ge<A.length;Ge++)if(Ge>=R.length){R.push(_e),Pe=Ge;break}else if(R[Ge]===null){R[Ge]=_e,Pe=Ge;break}if(Pe===-1)break}let Ee=A[Pe];Ee&&Ee.connect(_e)}}let G=new w,re=new w;function ge($,te,_e){G.setFromMatrixPosition(te.matrixWorld),re.setFromMatrixPosition(_e.matrixWorld);let Pe=G.distanceTo(re),Ee=te.projectionMatrix.elements,Ge=_e.projectionMatrix.elements,mt=Ee[14]/(Ee[10]-1),C=Ee[14]/(Ee[10]+1),Qe=(Ee[9]+1)/Ee[5],Z=(Ee[9]-1)/Ee[5],ne=(Ee[8]-1)/Ee[0],ee=(Ge[8]+1)/Ge[0],Le=mt*ne,de=mt*ee,Fe=Pe/(-ne+ee),lt=Fe*-ne;if(te.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(lt),$.translateZ(Fe),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ee[10]===-1)$.projectionMatrix.copy(te.projectionMatrix),$.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{let ct=mt+Fe,S=C+Fe,_=Le-lt,O=de+(Pe-lt),H=Qe*C/S*ct,ie=Z*C/S*ct;$.projectionMatrix.makePerspective(_,O,H,ie,ct,S),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Se($,te){te===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(te.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let te=$.near,_e=$.far;m.texture!==null&&(m.depthNear>0&&(te=m.depthNear),m.depthFar>0&&(_e=m.depthFar)),k.near=M.near=b.near=te,k.far=M.far=b.far=_e,(X!==k.near||Y!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),X=k.near,Y=k.far),k.layers.mask=$.layers.mask|6,b.layers.mask=k.layers.mask&3,M.layers.mask=k.layers.mask&5;let Pe=$.parent,Ee=k.cameras;Se(k,Pe);for(let Ge=0;Ge<Ee.length;Ge++)Se(Ee[Ge],Pe);Ee.length===2?ge(k,b,M):k.projectionMatrix.copy(b.projectionMatrix),Ie($,k,Pe)};function Ie($,te,_e){_e===null?$.matrix.copy(te.matrixWorld):($.matrix.copy(_e.matrixWorld),$.matrix.invert(),$.matrix.multiply(te.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(te.projectionMatrix),$.projectionMatrixInverse.copy(te.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ki*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function($){c=$,f!==null&&(f.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function($){return p[$]};let qe=null;function nt($,te){if(h=te.getViewerPose(l||a),g=te,h!==null){let _e=h.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let Pe=!1;_e.length!==k.cameras.length&&(k.cameras.length=0,Pe=!0);for(let C=0;C<_e.length;C++){let Qe=_e[C],Z=null;if(d!==null)Z=d.getViewport(Qe);else{let ee=u.getViewSubImage(f,Qe);Z=ee.viewport,C===0&&(e.setRenderTargetTextures(v,ee.colorTexture,ee.depthStencilTexture),e.setRenderTarget(v))}let ne=L[C];ne===void 0&&(ne=new Ft,ne.layers.enable(C),ne.viewport=new dt,L[C]=ne),ne.matrix.fromArray(Qe.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(Qe.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(Z.x,Z.y,Z.width,Z.height),C===0&&(k.matrix.copy(ne.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Pe===!0&&k.cameras.push(ne)}let Ee=s.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let C=u.getDepthInformation(_e[0]);C&&C.isValid&&C.texture&&m.init(C,s.renderState)}if(Ee&&Ee.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let C=0;C<_e.length;C++){let Qe=_e[C].camera;if(Qe){let Z=p[Qe];Z||(Z=new Rs,p[Qe]=Z);let ne=u.getCameraImage(Qe);Z.sourceTexture=ne}}}}for(let _e=0;_e<A.length;_e++){let Pe=R[_e],Ee=A[_e];Pe!==null&&Ee!==void 0&&Ee.update(Pe,te,l||a)}qe&&qe($,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),g=null}let Ye=new yh;Ye.setAnimationLoop(nt),this.setAnimationLoop=function($){qe=$},this.dispose=function(){}}},Mi=new cn,wg=new pt;function Ag(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,rl(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,E,T,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,E,T):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Lt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Lt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let E=e.get(p),T=E.envMap,v=E.envMapRotation;T&&(m.envMap.value=T,Mi.copy(v),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),m.envMapRotation.value.setFromMatrix4(wg.makeRotationFromEuler(Mi)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,E,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=T*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Lt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let E=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Cg(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,T){let v=T.program;n.uniformBlockBinding(E,v)}function l(E,T){let v=s[E.id];v===void 0&&(g(E),v=h(E),s[E.id]=v,E.addEventListener("dispose",m));let A=T.program;n.updateUBOMapping(E,A);let R=e.render.frame;r[E.id]!==R&&(f(E),r[E.id]=R)}function h(E){let T=u();E.__bindingPointIndex=T;let v=i.createBuffer(),A=E.__size,R=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,A,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,v),v}function u(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){let T=s[E.id],v=E.uniforms,A=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let R=0,P=v.length;R<P;R++){let N=Array.isArray(v[R])?v[R]:[v[R]];for(let b=0,M=N.length;b<M;b++){let L=N[b];if(d(L,R,b,A)===!0){let k=L.__offset,X=Array.isArray(L.value)?L.value:[L.value],Y=0;for(let K=0;K<X.length;K++){let q=X[K],B=x(q);typeof q=="number"||typeof q=="boolean"?(L.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,k+Y,L.__data)):q.isMatrix3?(L.__data[0]=q.elements[0],L.__data[1]=q.elements[1],L.__data[2]=q.elements[2],L.__data[3]=0,L.__data[4]=q.elements[3],L.__data[5]=q.elements[4],L.__data[6]=q.elements[5],L.__data[7]=0,L.__data[8]=q.elements[6],L.__data[9]=q.elements[7],L.__data[10]=q.elements[8],L.__data[11]=0):(q.toArray(L.__data,Y),Y+=B.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(E,T,v,A){let R=E.value,P=T+"_"+v;if(A[P]===void 0)return typeof R=="number"||typeof R=="boolean"?A[P]=R:A[P]=R.clone(),!0;{let N=A[P];if(typeof R=="number"||typeof R=="boolean"){if(N!==R)return A[P]=R,!0}else if(N.equals(R)===!1)return N.copy(R),!0}return!1}function g(E){let T=E.uniforms,v=0,A=16;for(let P=0,N=T.length;P<N;P++){let b=Array.isArray(T[P])?T[P]:[T[P]];for(let M=0,L=b.length;M<L;M++){let k=b[M],X=Array.isArray(k.value)?k.value:[k.value];for(let Y=0,K=X.length;Y<K;Y++){let q=X[Y],B=x(q),G=v%A,re=G%B.boundary,ge=G+re;v+=re,ge!==0&&A-ge<B.storage&&(v+=A-ge),k.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=v,v+=B.storage}}}let R=v%A;return R>0&&(v+=A-R),E.__size=v,E.__cache={},this}function x(E){let T={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(T.boundary=4,T.storage=4):E.isVector2?(T.boundary=8,T.storage=8):E.isVector3||E.isColor?(T.boundary=16,T.storage=12):E.isVector4?(T.boundary=16,T.storage=16):E.isMatrix3?(T.boundary=48,T.storage=48):E.isMatrix4?(T.boundary=64,T.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),T}function m(E){let T=E.target;T.removeEventListener("dispose",m);let v=a.indexOf(T.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function p(){for(let E in s)i.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}var Ya=class{constructor(e={}){let{canvas:t=Xc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,E=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let v=this,A=!1;this._outputColorSpace=It;let R=0,P=0,N=null,b=-1,M=null,L=new dt,k=new dt,X=null,Y=new Xe(0),K=0,q=t.width,B=t.height,G=1,re=null,ge=null,Se=new dt(0,0,q,B),Ie=new dt(0,0,q,B),qe=!1,nt=new $i,Ye=!1,$=!1,te=new pt,_e=new w,Pe=new dt,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ge=!1;function mt(){return N===null?G:1}let C=n;function Qe(y,D){return t.getContext(y,D)}try{let y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",ye,!1),t.addEventListener("webglcontextcreationerror",se,!1),C===null){let D="webgl2";if(C=Qe(D,y),C===null)throw Qe(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Z,ne,ee,Le,de,Fe,lt,ct,S,_,O,H,ie,W,we,ce,Me,Ae,oe,me,Ne,Ce,fe,Ve;function I(){Z=new qp(C),Z.init(),Ce=new Sg(C,Z),ne=new zp(C,Z,e,Ce),ee=new Mg(C,Z),ne.reversedDepthBuffer&&f&&ee.buffers.depth.setReversed(!0),Le=new Zp(C),de=new lg,Fe=new bg(C,Z,ee,de,ne,Ce,Le),lt=new kp(v),ct=new Xp(v),S=new ed(C),fe=new Op(C,S),_=new Yp(C,S,Le,fe),O=new Kp(C,_,S,Le),oe=new Jp(C,ne,Fe),ce=new Vp(de),H=new og(v,lt,ct,Z,ne,fe,ce),ie=new Ag(v,de),W=new hg,we=new gg(Z),Ae=new Fp(v,lt,ct,ee,O,d,c),Me=new yg(v,O,ne),Ve=new Cg(C,Le,ne,ee),me=new Bp(C,Z,Le),Ne=new $p(C,Z,Le),Le.programs=H.programs,v.capabilities=ne,v.extensions=Z,v.properties=de,v.renderLists=W,v.shadowMap=Me,v.state=ee,v.info=Le}I();let le=new Sl(v,C);this.xr=le,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let y=Z.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=Z.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(y){y!==void 0&&(G=y,this.setSize(q,B,!1))},this.getSize=function(y){return y.set(q,B)},this.setSize=function(y,D,z=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=y,B=D,t.width=Math.floor(y*G),t.height=Math.floor(D*G),z===!0&&(t.style.width=y+"px",t.style.height=D+"px"),this.setViewport(0,0,y,D)},this.getDrawingBufferSize=function(y){return y.set(q*G,B*G).floor()},this.setDrawingBufferSize=function(y,D,z){q=y,B=D,G=z,t.width=Math.floor(y*z),t.height=Math.floor(D*z),this.setViewport(0,0,y,D)},this.getCurrentViewport=function(y){return y.copy(L)},this.getViewport=function(y){return y.copy(Se)},this.setViewport=function(y,D,z,V){y.isVector4?Se.set(y.x,y.y,y.z,y.w):Se.set(y,D,z,V),ee.viewport(L.copy(Se).multiplyScalar(G).round())},this.getScissor=function(y){return y.copy(Ie)},this.setScissor=function(y,D,z,V){y.isVector4?Ie.set(y.x,y.y,y.z,y.w):Ie.set(y,D,z,V),ee.scissor(k.copy(Ie).multiplyScalar(G).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(y){ee.setScissorTest(qe=y)},this.setOpaqueSort=function(y){re=y},this.setTransparentSort=function(y){ge=y},this.getClearColor=function(y){return y.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(y=!0,D=!0,z=!0){let V=0;if(y){let U=!1;if(N!==null){let ae=N.texture.format;U=ae===pa||ae===fa||ae===da}if(U){let ae=N.texture.type,pe=ae===un||ae===Qn||ae===Ji||ae===ji||ae===ha||ae===ua,be=Ae.getClearColor(),xe=Ae.getClearAlpha(),Ue=be.r,Oe=be.g,Re=be.b;pe?(g[0]=Ue,g[1]=Oe,g[2]=Re,g[3]=xe,C.clearBufferuiv(C.COLOR,0,g)):(x[0]=Ue,x[1]=Oe,x[2]=Re,x[3]=xe,C.clearBufferiv(C.COLOR,0,x))}else V|=C.COLOR_BUFFER_BIT}D&&(V|=C.DEPTH_BUFFER_BIT),z&&(V|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",ye,!1),t.removeEventListener("webglcontextcreationerror",se,!1),Ae.dispose(),W.dispose(),we.dispose(),de.dispose(),lt.dispose(),ct.dispose(),O.dispose(),fe.dispose(),Ve.dispose(),H.dispose(),le.dispose(),le.removeEventListener("sessionstart",dn),le.removeEventListener("sessionend",Ll),si.stop()};function he(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let y=Le.autoReset,D=Me.enabled,z=Me.autoUpdate,V=Me.needsUpdate,U=Me.type;I(),Le.autoReset=y,Me.enabled=D,Me.autoUpdate=z,Me.needsUpdate=V,Me.type=U}function se(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Q(y){let D=y.target;D.removeEventListener("dispose",Q),Te(D)}function Te(y){Be(y),de.remove(y)}function Be(y){let D=de.get(y).programs;D!==void 0&&(D.forEach(function(z){H.releaseProgram(z)}),y.isShaderMaterial&&H.releaseShaderCache(y))}this.renderBufferDirect=function(y,D,z,V,U,ae){D===null&&(D=Ee);let pe=U.isMesh&&U.matrixWorld.determinant()<0,be=qh(y,D,z,V,U);ee.setMaterial(V,pe);let xe=z.index,Ue=1;if(V.wireframe===!0){if(xe=_.getWireframeAttribute(z),xe===void 0)return;Ue=2}let Oe=z.drawRange,Re=z.attributes.position,We=Oe.start*Ue,et=(Oe.start+Oe.count)*Ue;ae!==null&&(We=Math.max(We,ae.start*Ue),et=Math.min(et,(ae.start+ae.count)*Ue)),xe!==null?(We=Math.max(We,0),et=Math.min(et,xe.count)):Re!=null&&(We=Math.max(We,0),et=Math.min(et,Re.count));let ft=et-We;if(ft<0||ft===1/0)return;fe.setup(U,V,be,z,xe);let at,it=me;if(xe!==null&&(at=S.get(xe),it=Ne,it.setIndex(at)),U.isMesh)V.wireframe===!0?(ee.setLineWidth(V.wireframeLinewidth*mt()),it.setMode(C.LINES)):it.setMode(C.TRIANGLES);else if(U.isLine){let De=V.linewidth;De===void 0&&(De=1),ee.setLineWidth(De*mt()),U.isLineSegments?it.setMode(C.LINES):U.isLineLoop?it.setMode(C.LINE_LOOP):it.setMode(C.LINE_STRIP)}else U.isPoints?it.setMode(C.POINTS):U.isSprite&&it.setMode(C.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Hi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),it.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Z.get("WEBGL_multi_draw"))it.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let De=U._multiDrawStarts,ht=U._multiDrawCounts,Ze=U._multiDrawCount,Vt=xe?S.get(xe).bytesPerElement:1,Ei=de.get(V).currentProgram.getUniforms();for(let kt=0;kt<Ze;kt++)Ei.setValue(C,"_gl_DrawID",kt),it.render(De[kt]/Vt,ht[kt])}else if(U.isInstancedMesh)it.renderInstances(We,ft,U.count);else if(z.isInstancedBufferGeometry){let De=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,ht=Math.min(z.instanceCount,De);it.renderInstances(We,ft,ht)}else it.render(We,ft)};function st(y,D,z){y.transparent===!0&&y.side===Ot&&y.forceSinglePass===!1?(y.side=Lt,y.needsUpdate=!0,nr(y,D,z),y.side=Pn,y.needsUpdate=!0,nr(y,D,z),y.side=Ot):nr(y,D,z)}this.compile=function(y,D,z=null){z===null&&(z=y),p=we.get(z),p.init(D),T.push(p),z.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),y!==z&&y.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();let V=new Set;return y.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let ae=U.material;if(ae)if(Array.isArray(ae))for(let pe=0;pe<ae.length;pe++){let be=ae[pe];st(be,z,U),V.add(be)}else st(ae,z,U),V.add(ae)}),p=T.pop(),V},this.compileAsync=function(y,D,z=null){let V=this.compile(y,D,z);return new Promise(U=>{function ae(){if(V.forEach(function(pe){de.get(pe).currentProgram.isReady()&&V.delete(pe)}),V.size===0){U(y);return}setTimeout(ae,10)}Z.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let Je=null;function Tn(y){Je&&Je(y)}function dn(){si.stop()}function Ll(){si.start()}let si=new yh;si.setAnimationLoop(Tn),typeof self<"u"&&si.setContext(self),this.setAnimationLoop=function(y){Je=y,le.setAnimationLoop(y),y===null?si.stop():si.start()},le.addEventListener("sessionstart",dn),le.addEventListener("sessionend",Ll),this.render=function(y,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(D),D=le.getCamera()),y.isScene===!0&&y.onBeforeRender(v,y,D,N),p=we.get(y,T.length),p.init(D),T.push(p),te.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),nt.setFromProjectionMatrix(te,on,D.reversedDepth),$=this.localClippingEnabled,Ye=ce.init(this.clippingPlanes,$),m=W.get(y,E.length),m.init(),E.push(m),le.enabled===!0&&le.isPresenting===!0){let ae=v.xr.getDepthSensingMesh();ae!==null&&no(ae,D,-1/0,v.sortObjects)}no(y,D,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(re,ge),Ge=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,Ge&&Ae.addToRenderList(m,y),this.info.render.frame++,Ye===!0&&ce.beginShadows();let z=p.state.shadowsArray;Me.render(z,y,D),Ye===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=m.opaque,U=m.transmissive;if(p.setupLights(),D.isArrayCamera){let ae=D.cameras;if(U.length>0)for(let pe=0,be=ae.length;pe<be;pe++){let xe=ae[pe];Ul(V,U,y,xe)}Ge&&Ae.render(y);for(let pe=0,be=ae.length;pe<be;pe++){let xe=ae[pe];Dl(m,y,xe,xe.viewport)}}else U.length>0&&Ul(V,U,y,D),Ge&&Ae.render(y),Dl(m,y,D);N!==null&&P===0&&(Fe.updateMultisampleRenderTarget(N),Fe.updateRenderTargetMipmap(N)),y.isScene===!0&&y.onAfterRender(v,y,D),fe.resetDefaultState(),b=-1,M=null,T.pop(),T.length>0?(p=T[T.length-1],Ye===!0&&ce.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function no(y,D,z,V){if(y.visible===!1)return;if(y.layers.test(D.layers)){if(y.isGroup)z=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(D);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||nt.intersectsSprite(y)){V&&Pe.setFromMatrixPosition(y.matrixWorld).applyMatrix4(te);let pe=O.update(y),be=y.material;be.visible&&m.push(y,pe,be,z,Pe.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||nt.intersectsObject(y))){let pe=O.update(y),be=y.material;if(V&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Pe.copy(y.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Pe.copy(pe.boundingSphere.center)),Pe.applyMatrix4(y.matrixWorld).applyMatrix4(te)),Array.isArray(be)){let xe=pe.groups;for(let Ue=0,Oe=xe.length;Ue<Oe;Ue++){let Re=xe[Ue],We=be[Re.materialIndex];We&&We.visible&&m.push(y,pe,We,z,Pe.z,Re)}}else be.visible&&m.push(y,pe,be,z,Pe.z,null)}}let ae=y.children;for(let pe=0,be=ae.length;pe<be;pe++)no(ae[pe],D,z,V)}function Dl(y,D,z,V){let U=y.opaque,ae=y.transmissive,pe=y.transparent;p.setupLightsView(z),Ye===!0&&ce.setGlobalState(v.clippingPlanes,z),V&&ee.viewport(L.copy(V)),U.length>0&&tr(U,D,z),ae.length>0&&tr(ae,D,z),pe.length>0&&tr(pe,D,z),ee.buffers.depth.setTest(!0),ee.buffers.depth.setMask(!0),ee.buffers.color.setMask(!0),ee.setPolygonOffset(!1)}function Ul(y,D,z,V){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new pn(1,1,{generateMipmaps:!0,type:Z.has("EXT_color_buffer_half_float")||Z.has("EXT_color_buffer_float")?Ki:un,minFilter:jn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace}));let ae=p.state.transmissionRenderTarget[V.id],pe=V.viewport||L;ae.setSize(pe.z*v.transmissionResolutionScale,pe.w*v.transmissionResolutionScale);let be=v.getRenderTarget(),xe=v.getActiveCubeFace(),Ue=v.getActiveMipmapLevel();v.setRenderTarget(ae),v.getClearColor(Y),K=v.getClearAlpha(),K<1&&v.setClearColor(16777215,.5),v.clear(),Ge&&Ae.render(z);let Oe=v.toneMapping;v.toneMapping=Un;let Re=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),Ye===!0&&ce.setGlobalState(v.clippingPlanes,V),tr(y,z,V),Fe.updateMultisampleRenderTarget(ae),Fe.updateRenderTargetMipmap(ae),Z.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let et=0,ft=D.length;et<ft;et++){let at=D[et],it=at.object,De=at.geometry,ht=at.material,Ze=at.group;if(ht.side===Ot&&it.layers.test(V.layers)){let Vt=ht.side;ht.side=Lt,ht.needsUpdate=!0,Nl(it,z,V,De,ht,Ze),ht.side=Vt,ht.needsUpdate=!0,We=!0}}We===!0&&(Fe.updateMultisampleRenderTarget(ae),Fe.updateRenderTargetMipmap(ae))}v.setRenderTarget(be,xe,Ue),v.setClearColor(Y,K),Re!==void 0&&(V.viewport=Re),v.toneMapping=Oe}function tr(y,D,z){let V=D.isScene===!0?D.overrideMaterial:null;for(let U=0,ae=y.length;U<ae;U++){let pe=y[U],be=pe.object,xe=pe.geometry,Ue=pe.group,Oe=pe.material;Oe.allowOverride===!0&&V!==null&&(Oe=V),be.layers.test(z.layers)&&Nl(be,D,z,xe,Oe,Ue)}}function Nl(y,D,z,V,U,ae){y.onBeforeRender(v,D,z,V,U,ae),y.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),U.onBeforeRender(v,D,z,V,y,ae),U.transparent===!0&&U.side===Ot&&U.forceSinglePass===!1?(U.side=Lt,U.needsUpdate=!0,v.renderBufferDirect(z,D,V,U,y,ae),U.side=Pn,U.needsUpdate=!0,v.renderBufferDirect(z,D,V,U,y,ae),U.side=Ot):v.renderBufferDirect(z,D,V,U,y,ae),y.onAfterRender(v,D,z,V,U,ae)}function nr(y,D,z){D.isScene!==!0&&(D=Ee);let V=de.get(y),U=p.state.lights,ae=p.state.shadowsArray,pe=U.state.version,be=H.getParameters(y,U.state,ae,D,z),xe=H.getProgramCacheKey(be),Ue=V.programs;V.environment=y.isMeshStandardMaterial?D.environment:null,V.fog=D.fog,V.envMap=(y.isMeshStandardMaterial?ct:lt).get(y.envMap||V.environment),V.envMapRotation=V.environment!==null&&y.envMap===null?D.environmentRotation:y.envMapRotation,Ue===void 0&&(y.addEventListener("dispose",Q),Ue=new Map,V.programs=Ue);let Oe=Ue.get(xe);if(Oe!==void 0){if(V.currentProgram===Oe&&V.lightsStateVersion===pe)return Ol(y,be),Oe}else be.uniforms=H.getUniforms(y),y.onBeforeCompile(be,v),Oe=H.acquireProgram(be,xe),Ue.set(xe,Oe),V.uniforms=be.uniforms;let Re=V.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Re.clippingPlanes=ce.uniform),Ol(y,be),V.needsLights=$h(y),V.lightsStateVersion=pe,V.needsLights&&(Re.ambientLightColor.value=U.state.ambient,Re.lightProbe.value=U.state.probe,Re.directionalLights.value=U.state.directional,Re.directionalLightShadows.value=U.state.directionalShadow,Re.spotLights.value=U.state.spot,Re.spotLightShadows.value=U.state.spotShadow,Re.rectAreaLights.value=U.state.rectArea,Re.ltc_1.value=U.state.rectAreaLTC1,Re.ltc_2.value=U.state.rectAreaLTC2,Re.pointLights.value=U.state.point,Re.pointLightShadows.value=U.state.pointShadow,Re.hemisphereLights.value=U.state.hemi,Re.directionalShadowMap.value=U.state.directionalShadowMap,Re.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Re.spotShadowMap.value=U.state.spotShadowMap,Re.spotLightMatrix.value=U.state.spotLightMatrix,Re.spotLightMap.value=U.state.spotLightMap,Re.pointShadowMap.value=U.state.pointShadowMap,Re.pointShadowMatrix.value=U.state.pointShadowMatrix),V.currentProgram=Oe,V.uniformsList=null,Oe}function Fl(y){if(y.uniformsList===null){let D=y.currentProgram.getUniforms();y.uniformsList=is.seqWithValue(D.seq,y.uniforms)}return y.uniformsList}function Ol(y,D){let z=de.get(y);z.outputColorSpace=D.outputColorSpace,z.batching=D.batching,z.batchingColor=D.batchingColor,z.instancing=D.instancing,z.instancingColor=D.instancingColor,z.instancingMorph=D.instancingMorph,z.skinning=D.skinning,z.morphTargets=D.morphTargets,z.morphNormals=D.morphNormals,z.morphColors=D.morphColors,z.morphTargetsCount=D.morphTargetsCount,z.numClippingPlanes=D.numClippingPlanes,z.numIntersection=D.numClipIntersection,z.vertexAlphas=D.vertexAlphas,z.vertexTangents=D.vertexTangents,z.toneMapping=D.toneMapping}function qh(y,D,z,V,U){D.isScene!==!0&&(D=Ee),Fe.resetTextureUnits();let ae=D.fog,pe=V.isMeshStandardMaterial?D.environment:null,be=N===null?v.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:pi,xe=(V.isMeshStandardMaterial?ct:lt).get(V.envMap||pe),Ue=V.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Oe=!!z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Re=!!z.morphAttributes.position,We=!!z.morphAttributes.normal,et=!!z.morphAttributes.color,ft=Un;V.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(ft=v.toneMapping);let at=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,it=at!==void 0?at.length:0,De=de.get(V),ht=p.state.lights;if(Ye===!0&&($===!0||y!==M)){let Ct=y===M&&V.id===b;ce.setState(V,y,Ct)}let Ze=!1;V.version===De.__version?(De.needsLights&&De.lightsStateVersion!==ht.state.version||De.outputColorSpace!==be||U.isBatchedMesh&&De.batching===!1||!U.isBatchedMesh&&De.batching===!0||U.isBatchedMesh&&De.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&De.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&De.instancing===!1||!U.isInstancedMesh&&De.instancing===!0||U.isSkinnedMesh&&De.skinning===!1||!U.isSkinnedMesh&&De.skinning===!0||U.isInstancedMesh&&De.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&De.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&De.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&De.instancingMorph===!1&&U.morphTexture!==null||De.envMap!==xe||V.fog===!0&&De.fog!==ae||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==ce.numPlanes||De.numIntersection!==ce.numIntersection)||De.vertexAlphas!==Ue||De.vertexTangents!==Oe||De.morphTargets!==Re||De.morphNormals!==We||De.morphColors!==et||De.toneMapping!==ft||De.morphTargetsCount!==it)&&(Ze=!0):(Ze=!0,De.__version=V.version);let Vt=De.currentProgram;Ze===!0&&(Vt=nr(V,D,U));let Ei=!1,kt=!1,os=!1,ut=Vt.getUniforms(),$t=De.uniforms;if(ee.useProgram(Vt.program)&&(Ei=!0,kt=!0,os=!0),V.id!==b&&(b=V.id,kt=!0),Ei||M!==y){ee.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),ut.setValue(C,"projectionMatrix",y.projectionMatrix),ut.setValue(C,"viewMatrix",y.matrixWorldInverse);let Nt=ut.map.cameraPosition;Nt!==void 0&&Nt.setValue(C,_e.setFromMatrixPosition(y.matrixWorld)),ne.logarithmicDepthBuffer&&ut.setValue(C,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ut.setValue(C,"isOrthographic",y.isOrthographicCamera===!0),M!==y&&(M=y,kt=!0,os=!0)}if(U.isSkinnedMesh){ut.setOptional(C,U,"bindMatrix"),ut.setOptional(C,U,"bindMatrixInverse");let Ct=U.skeleton;Ct&&(Ct.boneTexture===null&&Ct.computeBoneTexture(),ut.setValue(C,"boneTexture",Ct.boneTexture,Fe))}U.isBatchedMesh&&(ut.setOptional(C,U,"batchingTexture"),ut.setValue(C,"batchingTexture",U._matricesTexture,Fe),ut.setOptional(C,U,"batchingIdTexture"),ut.setValue(C,"batchingIdTexture",U._indirectTexture,Fe),ut.setOptional(C,U,"batchingColorTexture"),U._colorsTexture!==null&&ut.setValue(C,"batchingColorTexture",U._colorsTexture,Fe));let Zt=z.morphAttributes;if((Zt.position!==void 0||Zt.normal!==void 0||Zt.color!==void 0)&&oe.update(U,z,Vt),(kt||De.receiveShadow!==U.receiveShadow)&&(De.receiveShadow=U.receiveShadow,ut.setValue(C,"receiveShadow",U.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&($t.envMap.value=xe,$t.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&D.environment!==null&&($t.envMapIntensity.value=D.environmentIntensity),kt&&(ut.setValue(C,"toneMappingExposure",v.toneMappingExposure),De.needsLights&&Yh($t,os),ae&&V.fog===!0&&ie.refreshFogUniforms($t,ae),ie.refreshMaterialUniforms($t,V,G,B,p.state.transmissionRenderTarget[y.id]),is.upload(C,Fl(De),$t,Fe)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(is.upload(C,Fl(De),$t,Fe),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ut.setValue(C,"center",U.center),ut.setValue(C,"modelViewMatrix",U.modelViewMatrix),ut.setValue(C,"normalMatrix",U.normalMatrix),ut.setValue(C,"modelMatrix",U.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let Ct=V.uniformsGroups;for(let Nt=0,io=Ct.length;Nt<io;Nt++){let ri=Ct[Nt];Ve.update(ri,Vt),Ve.bind(ri,Vt)}}return Vt}function Yh(y,D){y.ambientLightColor.needsUpdate=D,y.lightProbe.needsUpdate=D,y.directionalLights.needsUpdate=D,y.directionalLightShadows.needsUpdate=D,y.pointLights.needsUpdate=D,y.pointLightShadows.needsUpdate=D,y.spotLights.needsUpdate=D,y.spotLightShadows.needsUpdate=D,y.rectAreaLights.needsUpdate=D,y.hemisphereLights.needsUpdate=D}function $h(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(y,D,z){let V=de.get(y);V.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),de.get(y.texture).__webglTexture=D,de.get(y.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:z,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,D){let z=de.get(y);z.__webglFramebuffer=D,z.__useDefaultFramebuffer=D===void 0};let Zh=C.createFramebuffer();this.setRenderTarget=function(y,D=0,z=0){N=y,R=D,P=z;let V=!0,U=null,ae=!1,pe=!1;if(y){let xe=de.get(y);if(xe.__useDefaultFramebuffer!==void 0)ee.bindFramebuffer(C.FRAMEBUFFER,null),V=!1;else if(xe.__webglFramebuffer===void 0)Fe.setupRenderTarget(y);else if(xe.__hasExternalTextures)Fe.rebindTextures(y,de.get(y.texture).__webglTexture,de.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Re=y.depthTexture;if(xe.__boundDepthTexture!==Re){if(Re!==null&&de.has(Re)&&(y.width!==Re.image.width||y.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Fe.setupDepthRenderbuffer(y)}}let Ue=y.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(pe=!0);let Oe=de.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Oe[D])?U=Oe[D][z]:U=Oe[D],ae=!0):y.samples>0&&Fe.useMultisampledRTT(y)===!1?U=de.get(y).__webglMultisampledFramebuffer:Array.isArray(Oe)?U=Oe[z]:U=Oe,L.copy(y.viewport),k.copy(y.scissor),X=y.scissorTest}else L.copy(Se).multiplyScalar(G).floor(),k.copy(Ie).multiplyScalar(G).floor(),X=qe;if(z!==0&&(U=Zh),ee.bindFramebuffer(C.FRAMEBUFFER,U)&&V&&ee.drawBuffers(y,U),ee.viewport(L),ee.scissor(k),ee.setScissorTest(X),ae){let xe=de.get(y.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+D,xe.__webglTexture,z)}else if(pe){let xe=D;for(let Ue=0;Ue<y.textures.length;Ue++){let Oe=de.get(y.textures[Ue]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Ue,Oe.__webglTexture,z,xe)}}else if(y!==null&&z!==0){let xe=de.get(y.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,xe.__webglTexture,z)}b=-1},this.readRenderTargetPixels=function(y,D,z,V,U,ae,pe,be=0){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=de.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&pe!==void 0&&(xe=xe[pe]),xe){ee.bindFramebuffer(C.FRAMEBUFFER,xe);try{let Ue=y.textures[be],Oe=Ue.format,Re=Ue.type;if(!ne.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ne.textureTypeReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=y.width-V&&z>=0&&z<=y.height-U&&(y.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+be),C.readPixels(D,z,V,U,Ce.convert(Oe),Ce.convert(Re),ae))}finally{let Ue=N!==null?de.get(N).__webglFramebuffer:null;ee.bindFramebuffer(C.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(y,D,z,V,U,ae,pe,be=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=de.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&pe!==void 0&&(xe=xe[pe]),xe)if(D>=0&&D<=y.width-V&&z>=0&&z<=y.height-U){ee.bindFramebuffer(C.FRAMEBUFFER,xe);let Ue=y.textures[be],Oe=Ue.format,Re=Ue.type;if(!ne.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let We=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,We),C.bufferData(C.PIXEL_PACK_BUFFER,ae.byteLength,C.STREAM_READ),y.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+be),C.readPixels(D,z,V,U,Ce.convert(Oe),Ce.convert(Re),0);let et=N!==null?de.get(N).__webglFramebuffer:null;ee.bindFramebuffer(C.FRAMEBUFFER,et);let ft=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await qc(C,ft,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,We),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,ae),C.deleteBuffer(We),C.deleteSync(ft),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,D=null,z=0){let V=Math.pow(2,-z),U=Math.floor(y.image.width*V),ae=Math.floor(y.image.height*V),pe=D!==null?D.x:0,be=D!==null?D.y:0;Fe.setTexture2D(y,0),C.copyTexSubImage2D(C.TEXTURE_2D,z,0,0,pe,be,U,ae),ee.unbindTexture()};let Jh=C.createFramebuffer(),Kh=C.createFramebuffer();this.copyTextureToTexture=function(y,D,z=null,V=null,U=0,ae=null){ae===null&&(U!==0?(Hi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ae=U,U=0):ae=0);let pe,be,xe,Ue,Oe,Re,We,et,ft,at=y.isCompressedTexture?y.mipmaps[ae]:y.image;if(z!==null)pe=z.max.x-z.min.x,be=z.max.y-z.min.y,xe=z.isBox3?z.max.z-z.min.z:1,Ue=z.min.x,Oe=z.min.y,Re=z.isBox3?z.min.z:0;else{let Zt=Math.pow(2,-U);pe=Math.floor(at.width*Zt),be=Math.floor(at.height*Zt),y.isDataArrayTexture?xe=at.depth:y.isData3DTexture?xe=Math.floor(at.depth*Zt):xe=1,Ue=0,Oe=0,Re=0}V!==null?(We=V.x,et=V.y,ft=V.z):(We=0,et=0,ft=0);let it=Ce.convert(D.format),De=Ce.convert(D.type),ht;D.isData3DTexture?(Fe.setTexture3D(D,0),ht=C.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Fe.setTexture2DArray(D,0),ht=C.TEXTURE_2D_ARRAY):(Fe.setTexture2D(D,0),ht=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,D.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,D.unpackAlignment);let Ze=C.getParameter(C.UNPACK_ROW_LENGTH),Vt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Ei=C.getParameter(C.UNPACK_SKIP_PIXELS),kt=C.getParameter(C.UNPACK_SKIP_ROWS),os=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,at.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,at.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ue),C.pixelStorei(C.UNPACK_SKIP_ROWS,Oe),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Re);let ut=y.isDataArrayTexture||y.isData3DTexture,$t=D.isDataArrayTexture||D.isData3DTexture;if(y.isDepthTexture){let Zt=de.get(y),Ct=de.get(D),Nt=de.get(Zt.__renderTarget),io=de.get(Ct.__renderTarget);ee.bindFramebuffer(C.READ_FRAMEBUFFER,Nt.__webglFramebuffer),ee.bindFramebuffer(C.DRAW_FRAMEBUFFER,io.__webglFramebuffer);for(let ri=0;ri<xe;ri++)ut&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,de.get(y).__webglTexture,U,Re+ri),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,de.get(D).__webglTexture,ae,ft+ri)),C.blitFramebuffer(Ue,Oe,pe,be,We,et,pe,be,C.DEPTH_BUFFER_BIT,C.NEAREST);ee.bindFramebuffer(C.READ_FRAMEBUFFER,null),ee.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(U!==0||y.isRenderTargetTexture||de.has(y)){let Zt=de.get(y),Ct=de.get(D);ee.bindFramebuffer(C.READ_FRAMEBUFFER,Jh),ee.bindFramebuffer(C.DRAW_FRAMEBUFFER,Kh);for(let Nt=0;Nt<xe;Nt++)ut?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Zt.__webglTexture,U,Re+Nt):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Zt.__webglTexture,U),$t?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ct.__webglTexture,ae,ft+Nt):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ct.__webglTexture,ae),U!==0?C.blitFramebuffer(Ue,Oe,pe,be,We,et,pe,be,C.COLOR_BUFFER_BIT,C.NEAREST):$t?C.copyTexSubImage3D(ht,ae,We,et,ft+Nt,Ue,Oe,pe,be):C.copyTexSubImage2D(ht,ae,We,et,Ue,Oe,pe,be);ee.bindFramebuffer(C.READ_FRAMEBUFFER,null),ee.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else $t?y.isDataTexture||y.isData3DTexture?C.texSubImage3D(ht,ae,We,et,ft,pe,be,xe,it,De,at.data):D.isCompressedArrayTexture?C.compressedTexSubImage3D(ht,ae,We,et,ft,pe,be,xe,it,at.data):C.texSubImage3D(ht,ae,We,et,ft,pe,be,xe,it,De,at):y.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,ae,We,et,pe,be,it,De,at.data):y.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,ae,We,et,at.width,at.height,it,at.data):C.texSubImage2D(C.TEXTURE_2D,ae,We,et,pe,be,it,De,at);C.pixelStorei(C.UNPACK_ROW_LENGTH,Ze),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Vt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ei),C.pixelStorei(C.UNPACK_SKIP_ROWS,kt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,os),ae===0&&D.generateMipmaps&&C.generateMipmap(ht),ee.unbindTexture()},this.initRenderTarget=function(y){de.get(y).__webglFramebuffer===void 0&&Fe.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Fe.setTextureCube(y,0):y.isData3DTexture?Fe.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Fe.setTexture2DArray(y,0):Fe.setTexture2D(y,0),ee.unbindTexture()},this.resetState=function(){R=0,P=0,N=null,ee.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return on}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}};var Th={type:"change"},wl={type:"start"},wh={type:"end"},Ja=new Xi,Eh=new Pt,Rg=Math.cos(70*il.DEG2RAD),vt=new w,Bt=2*Math.PI,tt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},El=1e-6,Ka=class extends Bs{constructor(e,t=null){super(e,t),this.state=tt.NONE,this.target=new w,this.cursor=new w,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Jn.ROTATE,MIDDLE:Jn.DOLLY,RIGHT:Jn.PAN},this.touches={ONE:Kn.ROTATE,TWO:Kn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new w,this._lastQuaternion=new jt,this._lastTargetPosition=new w,this._quat=new jt().setFromUnitVectors(e.up,new w(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Zi,this._sphericalDelta=new Zi,this._scale=1,this._panOffset=new w,this._rotateStart=new ve,this._rotateEnd=new ve,this._rotateDelta=new ve,this._panStart=new ve,this._panEnd=new ve,this._panDelta=new ve,this._dollyStart=new ve,this._dollyEnd=new ve,this._dollyDelta=new ve,this._dollyDirection=new w,this._mouse=new ve,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Pg.bind(this),this._onPointerDown=Ig.bind(this),this._onPointerUp=Lg.bind(this),this._onContextMenu=zg.bind(this),this._onMouseWheel=Ng.bind(this),this._onKeyDown=Fg.bind(this),this._onTouchStart=Og.bind(this),this._onTouchMove=Bg.bind(this),this._onMouseDown=Dg.bind(this),this._onMouseMove=Ug.bind(this),this._interceptControlDown=Vg.bind(this),this._interceptControlUp=kg.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Th),this.update(),this.state=tt.NONE}update(e=null){let t=this.object.position;vt.copy(t).sub(this.target),vt.applyQuaternion(this._quat),this._spherical.setFromVector3(vt),this.autoRotate&&this.state===tt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Bt:n>Math.PI&&(n-=Bt),s<-Math.PI?s+=Bt:s>Math.PI&&(s-=Bt),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(vt.setFromSpherical(this._spherical),vt.applyQuaternion(this._quatInverse),t.copy(this.target).add(vt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=vt.length();a=this._clampDistance(o*this._scale);let c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let o=new w(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new w(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=vt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Ja.origin.copy(this.object.position),Ja.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ja.direction))<Rg?this.object.lookAt(this.target):(Eh.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ja.intersectPlane(Eh,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>El||8*(1-this._lastQuaternion.dot(this.object.quaternion))>El||this._lastTargetPosition.distanceToSquared(this.target)>El?(this.dispatchEvent(Th),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Bt/60*this.autoRotateSpeed*e:Bt/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){vt.setFromMatrixColumn(t,0),vt.multiplyScalar(-e),this._panOffset.add(vt)}_panUp(e,t){this.screenSpacePanning===!0?vt.setFromMatrixColumn(t,1):(vt.setFromMatrixColumn(t,0),vt.crossVectors(this.object.up,vt)),vt.multiplyScalar(e),this._panOffset.add(vt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;vt.copy(s).sub(this.target);let r=vt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Bt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Bt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Bt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Bt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Bt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Bt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Bt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Bt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ve,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Ig(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Pg(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Lg(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(wh),this.state=tt.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Dg(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Jn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=tt.DOLLY;break;case Jn.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=tt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=tt.ROTATE}break;case Jn.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=tt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=tt.PAN}break;default:this.state=tt.NONE}this.state!==tt.NONE&&this.dispatchEvent(wl)}function Ug(i){switch(this.state){case tt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case tt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case tt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Ng(i){this.enabled===!1||this.enableZoom===!1||this.state!==tt.NONE||(i.preventDefault(),this.dispatchEvent(wl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(wh))}function Fg(i){this.enabled!==!1&&this._handleKeyDown(i)}function Og(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Kn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=tt.TOUCH_ROTATE;break;case Kn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=tt.TOUCH_PAN;break;default:this.state=tt.NONE}break;case 2:switch(this.touches.TWO){case Kn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=tt.TOUCH_DOLLY_PAN;break;case Kn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=tt.TOUCH_DOLLY_ROTATE;break;default:this.state=tt.NONE}break;default:this.state=tt.NONE}this.state!==tt.NONE&&this.dispatchEvent(wl)}function Bg(i){switch(this._trackPointer(i),this.state){case tt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case tt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case tt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case tt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=tt.NONE}}function zg(i){this.enabled!==!1&&i.preventDefault()}function Vg(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function kg(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Ah=[];function F(i,e,t,n,s,r,a,o={}){Ah.push({id:i,zh:e,en:t,groups:n.split(""),models:s,position:r,note:a,representation:o.rep||"mesh",snap:o.snap??(o.rep||"mesh")==="mesh",quiz:o.quiz||null,via:o.via||[],extra:!!o.extra})}F("optic-papilla","\u8996\u4E73\u7A81\uFF0F\u8996\u795E\u7D93\u76E4","Optic papilla / optic disc","qvu",["Retina.l","Optic nerve (II).l"],[28.3,-46.2,54],"\u8996\u7DB2\u819C\u795E\u7D93\u7BC0\u7D30\u80DE\u8EF8\u7A81\u96C6\u4E2D\u96E2\u958B\u773C\u7403\u8655\u3002\u6C92\u6709 rods \u8207 cones\uFF0C\u6240\u4EE5\u662F\u751F\u7406\u6027\u76F2\u9EDE\uFF08\u4E2D\u592E\u51F9\u5247\u770B\u6700\u6E05\u695A\uFF09\u3002\u9871\u5167\u58D3\u5347\u9AD8\u6642\u53EF\u898B\u8996\u4E73\u982D\u6C34\u816B papilledema\u3002\u6A21\u578B\u4EE5\u8996\u795E\u7D93\u63A5\u4E0A\u8996\u7DB2\u819C\u5F8C\u6975\u7684\u4F4D\u7F6E\u6A19\u793A\u3002",{rep:"guide",snap:!0,quiz:1});F("dura","\u786C\u8166\u819C\uFF08\u8996\u795E\u7D93\u9798\uFF09","Dura mater (optic nerve sheath)","qv",["guide:on-sheath","Falx cerebri","Tentorium cerebelli"],[24,-44,45.5],"\u8003\u984C\u6307\u7684\u662F\u5305\u5728\u8996\u4E73\u7A81\u5F8C\u65B9\u8996\u795E\u7D93\u5916\u9762\u7684\u786C\u8166\u819C\uFF1A\u8996\u795E\u7D93\u662F\u4E2D\u6A1E\u795E\u7D93\u7684\u5EF6\u4F38\uFF0C\u5F9E\u8996\u795E\u7D93\u7BA1\u5230\u773C\u7403\u5F8C\u65B9\u90FD\u5305\u8457 dura\uFF0Farachnoid\uFF0Fpia\uFF0C\u86DB\u7DB2\u819C\u4E0B\u8154\u4E5F\u4E00\u8DEF\u5EF6\u4F38\u904E\u4F86\uFF0C\u6240\u4EE5\u9871\u5167\u58D3\u5347\u9AD8\u6703\u9020\u6210\u8996\u4E73\u982D\u6C34\u816B\u3002\u786C\u8166\u819C\u5728\u773C\u7403\u5F8C\u65B9\u8207\u978F\u819C\u76F8\u9023\u3001\u5728\u8996\u795E\u7D93\u7BA1\u8655\u8207\u9871\u5167\u786C\u8166\u819C\u5EF6\u7E8C\u3002\u6DE1\u7D2B\u8272\u534A\u900F\u660E\u7BA1\u70BA\u8996\u795E\u7D93\u9798\u793A\u610F\uFF08\u539F\u6A21\u578B\u6C92\u6709\uFF09\uFF1B\u9871\u5167\u7684\u5927\u8166\u942E\u3001\u5C0F\u8166\u5929\u5E55\u662F\u539F\u6A21\u578B\u7684\u786C\u8166\u819C\u53CD\u647A\uFF0C\u4E00\u4F75\u9AD8\u4EAE\u3002",{rep:"schematic",snap:!0,quiz:2});F("meyer","\u6885\u6C0F\u74B0\uFF08\u9873\u8449\u8996\u653E\u5C04\uFF09","Meyer\u2019s loop","qv",["guide:meyer"],[34,-31,3],"\u8996\u653E\u5C04\u4E0B\u90E8\u5148\u5411\u524D\u7E5E\u904E\u5074\u8166\u5BA4\u9873\u89D2\uFF0C\u518D\u5F80\u5F8C\u5230\u8DDD\u72C0\u6E9D\u4E0B\u5CB8\uFF08\u820C\u56DE\uFF09\uFF0C\u50B3\u905E\u5C0D\u5074\u4E0A\u65B9\u8996\u91CE\u3002\u5C0F\u8003\u7B2C 3 \u984C\u7B54\u6848\u662F Meyer\u2019s loop\uFF0C\u4E0D\u662F Baum\u2019s loop\u3002",{rep:"schematic",quiz:3});F("ora-serrata","\u92F8\u9F52\u7DE3","Ora serrata","qvk",["guide:ora"],[40,-49,68],"\u8996\u7DB2\u819C\u611F\u5149\u90E8\u7684\u524D\u7DE3\uFF0C\u8207\u776B\u72C0\u9AD4\u5E73\u5766\u90E8\u4EA4\u754C\u3002\u91D1\u8272\u74B0\u6CBF\u539F\u6A21\u578B\u8996\u7DB2\u819C\u524D\u7DE3\u756B\u51FA\uFF0C\u5BE6\u969B\u908A\u7DE3\u5448\u92F8\u9F52\u72C0\u3002",{rep:"schematic",quiz:4});F("gennari","Gennari \u7DDA","Line / stria of Gennari","qv",["Calcarine sulcus.l"],[8,-25,-75],"\u521D\u7D1A\u8996\u89BA\u76AE\u8CEA\uFF08V1\uFF0CBrodmann 17\uFF09\u7B2C IV \u5C64\u5167\u7684\u6709\u9AD3\u7E96\u7DAD\u5E36\uFF0C\u8089\u773C\u53EF\u898B\u7684\u767D\u7DDA\uFF0C\u6240\u4EE5 V1 \u53C8\u53EB\u7D0B\u72C0\u76AE\u8CEA\u3002\u5B83\u5728\u76AE\u8CEA\u88E1\u9762\uFF0C3D \u8868\u9762\u6C92\u6709\u7DB2\u683C\uFF1B\u6A19\u9EDE\u53EA\u63D0\u793A\u8DDD\u72C0\u6E9D\u5468\u570D\u7684 V1 \u5340\u3002",{rep:"reference",snap:!0,quiz:5});F("calcarine","\u8DDD\u72C0\u6E9D","Calcarine sulcus","qv",["Calcarine sulcus.l"],[6,-22,-67],"\u6795\u8449\u5167\u5074\u9762\u7684\u6E9D\uFF0C\u521D\u7D1A\u8996\u89BA\u76AE\u8CEA\u5206\u5E03\u5728\u5B83\u4E0A\u4E0B\u5169\u5CB8\u3002\u4E0A\u5CB8\u6954\u8449\u770B\u5C0D\u5074\u4E0B\u65B9\u8996\u91CE\uFF0C\u4E0B\u5CB8\u820C\u56DE\u770B\u5C0D\u5074\u4E0A\u65B9\u8996\u91CE\u3002",{quiz:6});F("chiasm","\u8996\u4EA4\u53C9","Optic chiasm","qv",["Optic chiasm"],[0,-28,17],"\u9F3B\u5074\u8996\u7DB2\u819C\u7E96\u7DAD\u4EA4\u53C9\uFF0C\u9873\u5074\u7E96\u7DAD\u4E0D\u4EA4\u53C9\u3002\u8996\u4EA4\u53C9\u4E4B\u5F8C\u6539\u7528\u300C\u5DE6\u53F3\u8996\u91CE\u300D\u601D\u8003\uFF1A\u5DE6\u8996\u675F\u8655\u7406\u96D9\u773C\u53F3\u5074\u8996\u91CE\u3002\u4F4D\u65BC\u8166\u4E0B\u5782\u9AD4\u6B63\u4E0A\u65B9\u3002",{quiz:7});F("nasolacrimal","\u9F3B\u6DDA\u7BA1","Nasolacrimal duct","q",["Nasolacrimal duct.l","Lacrimal sac.l"],[10,-75,64],"\u6DDA\u6DB2\uFF1A\u6DDA\u817A \u2192 \u6DDA\u5C0F\u7BA1 \u2192 \u6DDA\u56CA \u2192 \u9F3B\u6DDA\u7BA1 \u2192 \u958B\u53E3\u65BC\u4E0B\u9F3B\u9053\u3002\u7BA1\u9053\u8D70\u5728\u4E0A\u9837\u9AA8\u8207\u6DDA\u9AA8\u570D\u6210\u7684\u9AA8\u7BA1\u4E2D\u3002",{quiz:8});F("maxillary-sinus","\u4E0A\u9837\u7AC7","Maxillary sinus","qo",["Maxilla.l","guide:maxsinus"],[23,-73,59],"\u4E0A\u9837\u9AA8\u9AD4\u5167\u7684\u7A7A\u8154\uFF0C\u4F4D\u65BC\u773C\u7AA9\u5E95\u4E0B\u65B9\u3002\u773C\u90E8\u6B63\u9762\u649E\u64CA\u53EF\u9020\u6210\u773C\u7AA9\u5E95\u9AA8\u6298 blowout fracture\uFF0C\u773C\u7AA9\u5167\u5BB9\u7269\u6389\u5165\u4E0A\u9837\u7AC7\u3002\u539F\u6A21\u578B\u4E0A\u9837\u9AA8\u5167\u6709\u6B64\u7A7A\u8154\uFF1B\u85CD\u8272\u534A\u900F\u660E\u9AD4\u53EA\u6A19\u51FA\u7A7A\u8154\u4F4D\u7F6E\u3002",{rep:"guide",snap:!1,quiz:9});F("sphenoid-sinus","\u8776\u7AC7","Sphenoidal sinus","qc",["Sinus of sphenoid bone"],[6,-50,21],"\u8776\u9AA8\u9AD4\u5167\u7684\u7A7A\u8154\uFF0C\u6B63\u4E0A\u65B9\u662F\u8776\u978D\u8207\u8166\u4E0B\u5782\u9AD4\uFF0C\u6240\u4EE5\u8166\u4E0B\u5782\u9AD4\u624B\u8853\u53EF\u7D93\u9F3B\u8154 \u2192 \u8776\u7AC7 \u2192 \u8776\u978D\uFF08transsphenoidal approach\uFF09\u3002",{quiz:10});F("cribriform","\u7BE9\u677F\u7BE9\u5B54","Cribriform plate foramina","f",["Olfactory nerve (I)"],[5,-42,61],"CN I \u55C5\u795E\u7D93\u7D72\u7A7F\u904E\u7BE9\u9AA8\u7BE9\u677F\u3002\u53E3\u8A23\u300C\u4E00\u7BE9\u300D\u3002\u6A19\u9EDE\u4F4D\u65BC\u7BE9\u677F\u5340\uFF1B\u6A21\u578B\u672A\u9010\u4E00\u5EFA\u51FA\u6BCF\u500B\u5C0F\u5B54\u3002",{rep:"guide",snap:!1});F("optic-canal","\u8996\u795E\u7D93\u7BA1","Optic canal","fo",["Optic nerve (II)","Ophthalmic artery"],[12.5,-37.6,31.4],"\u901A\u904E\uFF1ACN II \u8996\u795E\u7D93\uFF0B\u773C\u52D5\u8108\uFF0B\u4F34\u96A8\u7684\u4EA4\u611F\u7E96\u7DAD\u3002\u53E3\u8A23\u300C\u4E8C\u8996\u300D\u3002\u4F4D\u7F6E\u53D6\u81EA\u539F\u6A21\u578B\u6A19\u8A18\u7DDA\u7AEF\u9EDE\u3002",{rep:"guide",snap:!1});F("sof","\u7736\u4E0A\u88C2","Superior orbital fissure","fo",["Oculomotor nerve (III)","Trochlear nerve (IV)","Ophthalmic nerve","Abducens nerve (VI)","Superior ophthalmic vein"],[17.1,-42.4,32.1],"III\u3001IV\u3001V1\u3001VI \u8207\u4E0A\u773C\u975C\u8108\u7D93\u6B64\u9032\u5165\u773C\u7AA9\u3002\u53E3\u8A23\u300C\u4E09\u56DB\u4E00\u516D\u7736\u4E0A\u88C2\u300D\u3002\u539F\u6A21\u578B\u6C92\u6709\u6B64\u88C2\u7684\u6A19\u8A18\u9EDE\uFF0C\u6A19\u9EDE\u53D6\u81EA\u9019\u56DB\u689D\u795E\u7D93\u5728\u9AA8\u8655\u4EA4\u6703\u7684\u4F4D\u7F6E\u3002",{rep:"guide",snap:!1});F("rotundum","\u5713\u5B54","Foramen rotundum","f",["Maxillary nerve"],[16.7,-48.5,25.5],"V2 \u4E0A\u9837\u795E\u7D93\u3002\u53E3\u8A23\u300C\u4E8C\u5713\u300D\u3002\u539F\u6A21\u578B\u7684 V2 \u8207\u6B64\u5B54\u76F8\u8DDD\u7D04 0.6 mm\u3002",{rep:"guide",snap:!1});F("ovale","\u5375\u5713\u5B54","Foramen ovale","f",["Trigeminal nerve (V)","Anterior division of mandibular nerve","Posterior division of mandibular nerve"],[24,-61.6,13.3],"V3 \u4E0B\u9837\u795E\u7D93\u3002\u53E3\u8A23\u300C\u4E09\u5375\u300D\u3002",{rep:"guide",snap:!1});F("spinosum","\u68D8\u5B54","Foramen spinosum","f",["Middle meningeal artery"],[29.2,-62.1,8.2],"\u4E2D\u8166\u819C\u52D5\u8108\uFF08\u4E0D\u662F\u8166\u795E\u7D93\uFF09\u3002\u4F4D\u65BC\u5375\u5713\u5B54\u5F8C\u5916\u5074\u3002",{rep:"guide",snap:!1});F("carotid-canal","\u9838\u52D5\u8108\u7BA1","Carotid canal","f",["Internal carotid artery"],[28,-78,-7],"\u5167\u9838\u52D5\u8108\u7531\u6B64\u9032\u5165\u9871\u5167\uFF0C\u4E4B\u5F8C\u8D70\u9032\u6D77\u7DBF\u7AC7\u3002\u6A19\u9EDE\u70BA\u9871\u5E95\u5916\u53E3\u9644\u8FD1\u7684\u8FD1\u4F3C\u4F4D\u7F6E\u3002",{rep:"guide",snap:!1});F("iam","\u5167\u8033\u9053","Internal acoustic meatus","f",["Facial nerve (VII)","Vestibulocochlear nerve (VIII)","Vestibular nerve","Cochlear nerve"],[19.5,-57.3,-5.5],"CN VII\uFF0BVIII \u5171\u540C\u9032\u5165\u3002\u53E3\u8A23\u300C\u4E03\u516B\u5167\u807D\u300D\u3002\u6A19\u9EDE\u53D6\u81EA\u5169\u689D\u795E\u7D93\u9032\u5165\u9873\u9AA8\u5CA9\u90E8\u8655\u3002",{rep:"guide",snap:!1});F("jugular","\u9838\u975C\u8108\u5B54","Jugular foramen","f",["Glossopharyngeal nerve (IX)","Vagus nerve (X)","Accessory nerve (XI)"],[26.8,-71.8,-11.2],"CN IX\u3001X\u3001XI \u5171\u540C\u8D70\u9838\u975C\u8108\u5B54\uFF08\u9084\u6709\u5167\u9838\u975C\u8108\uFF09\u3002\u53E3\u8A23\u300C\u4E5D\u5341\u5341\u4E00\u9838\u975C\u8108\u300D\u3002\u6A19\u9EDE\u53D6\u81EA\u4E09\u689D\u795E\u7D93\u5728\u9AA8\u8655\u4EA4\u6703\u7684\u4F4D\u7F6E\u3002",{rep:"guide",snap:!1});F("hypoglossal-canal","\u820C\u4E0B\u795E\u7D93\u7BA1","Hypoglossal canal","f",["Hypoglossal nerve (XII)"],[18.2,-76.9,-14.8],"CN XII\u3002\u53E3\u8A23\u300C\u5341\u4E8C\u820C\u4E0B\u300D\u3002\u4F4D\u65BC\u6795\u9AA8\u5927\u5B54\u524D\u5916\u5074\u3001\u6795\u9AC1\u4E0A\u65B9\u3002",{rep:"guide",snap:!1});F("magnum","\u6795\u9AA8\u5927\u5B54","Foramen magnum","f",["Medulla oblongata","Vertebral artery"],[.7,-83.9,-30.3],"\u5EF6\u8166\u8207\u810A\u9AD3\u4EA4\u754C\u3001\u690E\u52D5\u8108\u3001\u526F\u795E\u7D93\u810A\u9AD3\u6839\u901A\u904E\u3002",{rep:"guide",snap:!1});F("sella","\u8776\u978D\uFF08\u8166\u4E0B\u5782\u9AD4\u7AA9\uFF09","Sella turcica / hypophysial fossa","fc",["Adenohypophysis","Neurohypophysis"],[0,-46.5,15.6],"\u8776\u9AA8\u9AD4\u4E0A\u65B9\u7684\u978D\u5F62\u51F9\u7AA9\uFF0C\u5BB9\u7D0D\u8166\u4E0B\u5782\u9AD4\uFF1B\u4E0B\u9762\u662F\u8776\u7AC7\uFF0C\u5169\u5074\u662F\u6D77\u7DBF\u7AC7\u3002",{rep:"guide",snap:!1});var Dt=(...i)=>({via:i});F("cn1","CN I \u55C5\u795E\u7D93","Olfactory nerve (CN I)","n",["Olfactory nerve (I).l"],[11.6,-34.8,43.6],"\u55C5\u7403\uFF0B\u55C5\u675F\u4F4D\u65BC\u984D\u8449\u5E95\u9762\u3002",Dt("cribriform"));F("cn2","CN II \u8996\u795E\u7D93","Optic nerve (CN II)","n",["Optic nerve (II).l"],[15,-38.8,40],"CN II \u662F\u4E2D\u6A1E\u795E\u7D93\u5EF6\u4F38\uFF0C\u5916\u6709\u4E09\u5C64\u8166\u819C\u3002\u56DB\u6BB5\uFF1A\u773C\u7403\u5167\u6BB5\uFF08\u6700\u77ED\uFF0C\u7BE9\u677F\u524D\u7121\u9AD3\u9798\uFF09\u2192 \u773C\u7AA9\u6BB5\uFF08\u6700\u9577\uFF0CS \u5F62\uFF09\u2192 \u8996\u795E\u7D93\u7BA1\u6BB5 \u2192 \u9871\u5167\u6BB5\uFF08\u5230\u8996\u4EA4\u53C9\uFF09\u3002",Dt("optic-canal"));F("cn3","CN III \u52D5\u773C\u795E\u7D93","Oculomotor nerve (CN III)","ng",["Oculomotor nerve (III).l"],[6.7,-33.1,6.5],"\u5F9E\u4E2D\u8166\u8179\u5074\u3001\u8173\u9593\u7AA9\u767C\u51FA\u3002\u652F\u914D\u4E0A\u76F4\u808C\u3001\u4E0B\u76F4\u808C\u3001\u5167\u76F4\u808C\u3001\u4E0B\u659C\u808C\u3001\u63D0\u4E0A\u77BC\u808C\uFF1B\u526F\u4EA4\u611F\u7E96\u7DAD\u5230\u776B\u72C0\u795E\u7D93\u7BC0\u3002\u5728\u5171\u540C\u8171\u74B0\u5167\u5206\u6210\u4E0A\u652F\u3001\u4E0B\u652F\u3002",Dt("sof"));F("cn4","CN IV \u6ED1\u8ECA\u795E\u7D93","Trochlear nerve (CN IV)","n",["Trochlear nerve (IV).l"],[8.4,-43.1,-15.3],"\u552F\u4E00\u5F9E\u8166\u5E79\u80CC\u5074\u767C\u51FA\u7684\u8166\u795E\u7D93\uFF0C\u7E5E\u4E2D\u8166\u5411\u524D\u3002\u53EA\u652F\u914D\u4E0A\u659C\u808C\uFF08SO4\uFF09\uFF0C\u8D70\u5171\u540C\u8171\u74B0\u5916\u3002",Dt("sof"));F("cn5","CN V \u4E09\u53C9\u795E\u7D93","Trigeminal nerve (CN V)","n",["Trigeminal nerve (V).l","Sensory root of trigeminal nerve.l","Motor root of trigeminal nerve.l"],[11.9,-49.8,-12.3],"\u5F9E\u6A4B\u8166\u5916\u5074\u51FA\u4F86\uFF0C\u5F88\u7C97\uFF1A\u5927\u7684\u611F\u89BA\u6839\uFF0B\u5C0F\u7684\u904B\u52D5\u6839\uFF0C\u4E4B\u5F8C\u5206 V1\u3001V2\u3001V3\u3002",Dt("sof","rotundum","ovale"));F("v1","V1 \u773C\u795E\u7D93","Ophthalmic nerve (V1)","n",["Ophthalmic nerve.l"],[20.6,-39.4,32.3],"\u7D14\u611F\u89BA\u3002\u7D93\u7736\u4E0A\u88C2\u5165\u773C\u7AA9\u5F8C\u5206\u6210\u984D\u795E\u7D93\u3001\u6DDA\u795E\u7D93\u3001\u9F3B\u776B\u795E\u7D93\u3002\u539F\u6A21\u578B\u628A\u984D\u795E\u7D93 \u2192 \u7736\u4E0A\uFF0F\u6ED1\u8ECA\u4E0A\u795E\u7D93\u756B\u5728\u540C\u4E00\u689D\u66F2\u7DDA\u4E0A\u3002",Dt("sof"));F("v2","V2 \u4E0A\u9837\u795E\u7D93","Maxillary nerve (V2)","n",["Maxillary nerve.l"],[17.4,-49.7,22.4],"\u7D14\u611F\u89BA\u3002\u7A7F\u5713\u5B54\uFF0C\u7D93\u7FFC\u816D\u7AA9\u3001\u7736\u4E0B\u88C2\uFF0C\u5EF6\u7E8C\u70BA\u7736\u4E0B\u795E\u7D93\u3002",Dt("rotundum"));F("v3","V3 \u4E0B\u9837\u795E\u7D93","Mandibular nerve (V3)","n",["Anterior division of mandibular nerve.l","Posterior division of mandibular nerve.l","Inferior alveolar nerve.l","Lingual nerve.l"],[26.4,-69.5,18.5],"\u611F\u89BA\uFF0B\u904B\u52D5\uFF08\u5480\u56BC\u808C\uFF09\u3002\u7A7F\u5375\u5713\u5B54\uFF0C\u4E0B\u7259\u69FD\u795E\u7D93\u3001\u820C\u795E\u7D93\u7B49\u70BA\u5176\u5206\u652F\u3002",Dt("ovale"));F("cn6","CN VI \u5916\u65CB\u795E\u7D93","Abducens nerve (CN VI)","n",["Abducens nerve (VI).l"],[4.4,-64.3,-3.2],"\u6A4B\u5EF6\u4EA4\u754C\u9760\u8FD1\u4E2D\u7DDA\u767C\u51FA\u3002\u53EA\u652F\u914D\u5916\u76F4\u808C\uFF08LR6\uFF09\u3002\u5728\u6D77\u7DBF\u7AC7\u300C\u8154\u5167\u300D\u7DCA\u8CBC\u5167\u9838\u52D5\u8108\uFF0C\u75C5\u8B8A\u6642\u5E38\u6700\u5148\u53D7\u5F71\u97FF \u2192 \u773C\u7403\u7121\u6CD5\u5916\u8F49\u3002",Dt("sof"));F("cn7","CN VII \u984F\u9762\u795E\u7D93","Facial nerve (CN VII)","n",["Facial nerve (VII).l"],[12,-60,-11],"\u5C0F\u8166\u6A4B\u8166\u89D2\uFF0C\u8207 VIII \u5F88\u9760\u8FD1\uFF0C\u4E00\u8D77\u9032\u5167\u8033\u9053\uFF1B\u51FA\u9871\u7D93\u8396\u4E73\u5B54\u3002",Dt("iam"));F("cn8","CN VIII \u524D\u5EAD\u8033\u8778\u795E\u7D93","Vestibulocochlear nerve (CN VIII)","n",["Vestibulocochlear nerve (VIII).l","Vestibular nerve.l","Cochlear nerve.l"],[14.4,-60.7,-10.4],"\u5C0F\u8166\u6A4B\u8166\u89D2\uFF0C\u8207 VII \u5171\u540C\u9032\u5167\u8033\u9053\u3002",Dt("iam"));F("cn9","CN IX \u820C\u54BD\u795E\u7D93","Glossopharyngeal nerve (CN IX)","n",["Glossopharyngeal nerve (IX).l"],[12,-66,-14],"\u5EF6\u8166\u6A44\u6B16\u5F8C\u6E9D\u767C\u51FA\uFF0C\u8D70\u9838\u975C\u8108\u5B54\u3002",Dt("jugular"));F("cn10","CN X \u8FF7\u8D70\u795E\u7D93","Vagus nerve (CN X)","n",["Vagus nerve (X).l"],[11,-70,-17],"\u5EF6\u8166\u6A44\u6B16\u5F8C\u6E9D\u767C\u51FA\uFF0C\u8D70\u9838\u975C\u8108\u5B54\u3002",Dt("jugular"));F("cn11","CN XI \u526F\u795E\u7D93","Accessory nerve (CN XI)","n",["Accessory nerve (XI).l"],[12,-80,-22],"\u6A44\u6B16\u5F8C\u6E9D\u9644\u8FD1\u53CA\u4E0A\u9838\u9AD3\u767C\u51FA\uFF0C\u8D70\u9838\u975C\u8108\u5B54\u3002",Dt("jugular"));F("cn12","CN XII \u820C\u4E0B\u795E\u7D93","Hypoglossal nerve (CN XII)","n",["Hypoglossal nerve (XII).l"],[6,-74,-10],"\u5EF6\u8166\u6A44\u6B16\u524D\u6E9D\u767C\u51FA\uFF0C\u8D70\u820C\u4E0B\u795E\u7D93\u7BA1\u3002",Dt("hypoglossal-canal"));F("annulus","\u5171\u540C\u8171\u74B0\uFF08Zinn \u74B0\uFF09","Common tendinous ring (annulus of Zinn)","o",["Common tendinous ring.l"],[16.3,-40.3,34],"\u56DB\u689D\u76F4\u808C\u7684\u5171\u540C\u8D77\u9EDE\u3002\u8171\u74B0\u5167\uFF1AIII \u4E0A\u652F\u3001III \u4E0B\u652F\u3001\u9F3B\u776B\u795E\u7D93\u3001VI\uFF08\u4EE5\u53CA II \u8207\u773C\u52D5\u8108\uFF09\u3002\u8171\u74B0\u5916\uFF1AIV\u3001\u984D\u795E\u7D93\u3001\u6DDA\u795E\u7D93\u3001\u4E0A\u773C\u975C\u8108\u3002\u6309\u300C\u7736\u5C16\u6B63\u9762\u300D\u53EF\u6CBF\u7736\u8EF8\u76F4\u63A5\u770B\u3002\u539F\u6A21\u578B\u7684\u8171\u74B0\u53EA\u6709\u7D04 5 mm \u5BEC\uFF0CIV\u3001\u984D\u795E\u7D93\u3001\u4E0A\u773C\u975C\u8108\u5361\u5728\u74B0\u58C1\u4E0A\u770B\u4F3C\u7A7F\u904E\u74B0\u5167\uFF1B\u672C\u9801\u5DF2\u628A\u74B0\u5728\u5176\u5E73\u9762\u4E0A\u653E\u5927 1.5 \u500D\uFF0C\u4E26\u53EA\u5728\u7736\u5C16\u9644\u8FD1\u628A\u9019\u4E09\u8005\u79FB\u5230\u74B0\u5916\u4E0A\u65B9\u3001\u628A VI \u79FB\u9032\u74B0\u5167\uFF08\u6559\u5B78\u6821\u6B63\uFF09\u3002");F("sr","\u4E0A\u76F4\u808C","Superior rectus","o",["Superior rectus muscle.l"],[25.4,-36.5,55],"CN III \u4E0A\u652F\u652F\u914D\u3002");F("lps","\u63D0\u4E0A\u77BC\u808C","Levator palpebrae superioris","o",["Levator palpebrae superioris.l"],[28,-32,62],"CN III \u4E0A\u652F\u652F\u914D\uFF08\u53E6\u6709\u4EA4\u611F\u652F\u914D\u7684 M\xFCller \u808C\uFF09\u3002");F("ir","\u4E0B\u76F4\u808C","Inferior rectus","o",["Inferior rectus muscle.l"],[24.5,-55,52],"CN III \u4E0B\u652F\u652F\u914D\u3002");F("mr","\u5167\u76F4\u808C","Medial rectus","o",["Medial rectus muscle.l"],[16,-46.8,53],"CN III \u4E0B\u652F\u652F\u914D\uFF1B\u96D9\u5074\u6536\u7E2E\u4F7F\u773C\u7403\u6703\u805A\u3002");F("lr","\u5916\u76F4\u808C","Lateral rectus","o",["Lateral rectus muscle.l"],[38,-46,52],"CN VI \u652F\u914D\uFF08LR6\uFF09\u3002");F("so","\u4E0A\u659C\u808C\uFF0B\u6ED1\u8ECA","Superior oblique + trochlea","o",["Superior oblique muscle.l","Trochlea of superior oblique muscle.l"],[14.6,-33,75],"CN IV \u652F\u914D\uFF08SO4\uFF09\u3002\u808C\u8171\u7E5E\u904E\u984D\u9AA8\u4E0A\u7684\u6ED1\u8ECA\u518D\u8F49\u5411\u5F8C\u5916\u9644\u8457\u65BC\u773C\u7403\u3002");F("io","\u4E0B\u659C\u808C","Inferior oblique","o",["Inferior oblique muscle.l"],[30,-60,66],"CN III \u4E0B\u652F\u652F\u914D\uFF1B\u552F\u4E00\u4E0D\u5F9E\u773C\u7AA9\u5F8C\u65B9\u8D77\u59CB\u7684\u773C\u5916\u808C\u3002");F("orb-4","IV \u6ED1\u8ECA\u795E\u7D93 \u2192 \u4E0A\u659C\u808C","CN IV entering superior oblique","o",["Trochlear nerve (IV).l"],[28.1,-33.9,54.5],"\u8D70\u5171\u540C\u8171\u74B0\u5916\uFF0C\u9032\u5165\u4E0A\u659C\u808C\u4E0A\u7DE3\u3002\u770B\u795E\u7D93\u6700\u5F8C\u9032\u54EA\u689D\u808C\u8089\uFF1A\u53BB\u4E0A\u659C\u808C \u2192 IV\u3002",{rep:"guide",snap:!0,via:["sof"]});F("orb-6","VI \u5916\u65CB\u795E\u7D93 \u2192 \u5916\u76F4\u808C","CN VI entering lateral rectus","o",["Abducens nerve (VI).l"],[29.3,-40.7,43.9],"\u8D70\u5171\u540C\u8171\u74B0\u5167\uFF0C\u9032\u5165\u5916\u76F4\u808C\u5167\u9762\u3002\u53BB\u5916\u76F4\u808C \u2192 VI\u3002",{rep:"guide",snap:!0,via:["sof"]});F("orb-v1","V1 \u773C\u795E\u7D93\uFF08\u5165\u7736\u524D\uFF09","Ophthalmic nerve before branching","o",["Ophthalmic nerve.l"],[16.6,-42.4,23.2],"V1 \u5728\u7736\u4E0A\u88C2\u524D\u5206\u6210\u984D\u3001\u6DDA\u3001\u9F3B\u776B\u4E09\u652F\u3002",{rep:"guide",snap:!0,via:["sof"]});F("cn3-sup","CN III \u4E0A\u652F","Superior division of CN III","o",["Oculomotor nerve (III).l"],[24.2,-34.4,56.6],"\u8D70\u5171\u540C\u8171\u74B0\u5167\uFF0C\u5230\u4E0A\u76F4\u808C\u8207\u63D0\u4E0A\u77BC\u808C\u3002",{rep:"guide",snap:!0,via:["sof"]});F("cn3-inf","CN III \u4E0B\u652F","Inferior division of CN III","og",["Oculomotor nerve (III).l"],[27.2,-54.7,46.5],"\u8D70\u5171\u540C\u8171\u74B0\u5167\uFF0C\u5230\u5167\u76F4\u808C\u3001\u4E0B\u76F4\u808C\u3001\u4E0B\u659C\u808C\uFF0C\u4E26\u9001\u526F\u4EA4\u611F\u7E96\u7DAD\u5230\u776B\u72C0\u795E\u7D93\u7BC0\u3002",{rep:"guide",snap:!0,via:["sof"]});F("frontal-n","\u984D\u795E\u7D93\uFF08V1\uFF09","Frontal nerve (V1)","o",["Ophthalmic nerve.l"],[23.1,-32.3,46.7],"V1 \u6700\u4E0A\u65B9\u7684\u5206\u652F\uFF0C\u8D70\u5171\u540C\u8171\u74B0\u5916\u3001\u63D0\u4E0A\u77BC\u808C\u4E0A\u65B9\uFF0C\u5F80\u524D\u5206\u70BA\u7736\u4E0A\u795E\u7D93\u8207\u6ED1\u8ECA\u4E0A\u795E\u7D93\u5230\u984D\u982D\uFF08\u539F\u6A21\u578B\u7684 V1 \u66F2\u7DDA\u4E00\u8DEF\u756B\u5230\u984D\u982D\uFF0C\u672B\u7AEF\u5206\u652F\u5373\u7736\u4E0A\uFF0F\u6ED1\u8ECA\u4E0A\u795E\u7D93\uFF09\u3002",{rep:"guide",snap:!0});F("lacrimal-n","\u6DDA\u795E\u7D93\uFF08V1\uFF09","Lacrimal nerve (V1)","o",["guide:lacrimal-n"],[33,-38.2,50],"V1 \u5206\u652F\uFF0C\u8D70\u5171\u540C\u8171\u74B0\u5916\uFF0C\u6CBF\u5916\u76F4\u808C\u4E0A\u7DE3\u5230\u6DDA\u817A\u3002\u539F\u6A21\u578B\u6C92\u6709\u6B64\u795E\u7D93\uFF0C\u7C89\u8272\u7D30\u7DDA\u70BA\u8D70\u5411\u793A\u610F\u3002",{rep:"schematic"});F("nasociliary","\u9F3B\u776B\u795E\u7D93\uFF08V1\uFF09","Nasociliary nerve (V1)","og",["guide:nasociliary"],[17.8,-38.8,42],"V1 \u4F4D\u7F6E\u8F03\u6DF1\u7684\u5206\u652F\uFF0C\u552F\u4E00\u7A7F\u904E\u5171\u540C\u8171\u74B0\uFF1B\u8DE8\u904E\u8996\u795E\u7D93\u5230\u773C\u7AA9\u5167\u5074\u3002\u767C\u51FA\u776B\u72C0\u795E\u7D93\u7BC0\u611F\u89BA\u6839\u53CA\u9577\u776B\u72C0\u795E\u7D93\u3002\u539F\u6A21\u578B\u6C92\u6709\u6B64\u795E\u7D93\uFF0C\u70BA\u8D70\u5411\u793A\u610F\u3002",{rep:"schematic"});F("lacrimal-gland","\u6DDA\u817A","Lacrimal gland","o",["Lacrimal gland.l"],[45,-35,66],"\u4F4D\u65BC\u773C\u7AA9\u5916\u4E0A\u65B9\u3002\u6A21\u578B\u4E0A\u627E\u5230\u6DDA\u817A\uFF0C\u5C31\u80FD\u5224\u65B7\u54EA\u908A\u662F lateral\u3002");F("sov","\u4E0A\u773C\u975C\u8108","Superior ophthalmic vein","oe",["Superior ophthalmic vein.l"],[19.5,-38,40],"\u8D70\u5171\u540C\u8171\u74B0\u5916\u3001\u7D93\u7736\u4E0A\u88C2\uFF0C\u532F\u5165\u6D77\u7DBF\u7AC7\u3002");F("ophthalmic-a","\u773C\u52D5\u8108","Ophthalmic artery","oew",["Ophthalmic artery.l"],[17,-40,45],"\u5167\u9838\u52D5\u8108\u5206\u652F\uFF0C\u8207\u8996\u795E\u7D93\u4E00\u8D77\u8D70\u8996\u795E\u7D93\u7BA1\uFF08\u4EA4\u611F\u7E96\u7DAD\u4F34\u884C\uFF09\u3002");F("lamina","\u7BE9\u9AA8\u7D19\u677F\uFF0F\u7BE9\u7AC7","Lamina papyracea / ethmoidal cells","o",["Ethmoid bone"],[12,-46,48],"\u773C\u7AA9\u5167\u5074\u58C1\u975E\u5E38\u8584\uFF0C\u65C1\u908A\u5C31\u662F\u7BE9\u7AC7\uFF0C\u4E5F\u662F\u773C\u7AA9\u5BB9\u6613\u9AA8\u6298\u7684\u5730\u65B9\u3002",{rep:"guide",snap:!1});F("cavernous","\u6D77\u7DBF\u7AC7","Cavernous sinus","ce",["Cavernous sinus.l"],[8,-40,20],"\u4F4D\u65BC\u8776\u978D\u5169\u5074\u3002\u5916\u5074\u58C1\u7531\u4E0A\u5230\u4E0B\uFF1AIII \u2192 IV \u2192 V1 \u2192 V2\uFF083-4-1-2\uFF09\u3002\u8154\u5167\uFF1A\u5167\u9838\u52D5\u8108\uFF0BCN VI\uFF0B\u4EA4\u611F\u795E\u7D93\u53E2\u3002\u5EFA\u8B70\u628A\u900F\u660E\u5EA6\u8ABF\u4F4E\uFF0C\u5F9E\u524D\u65B9\u6216\u4E0A\u65B9\u770B\u795E\u7D93\u5728\u58C1\u4E2D\u7684\u6392\u5217\u3002");F("ica","\u5167\u9838\u52D5\u8108","Internal carotid artery","cfw",["Internal carotid artery.l"],[14.4,-56.7,20],"\u7D93\u9838\u52D5\u8108\u7BA1\u5165\u9871\uFF0C\u5728\u6D77\u7DBF\u7AC7\u8154\u5167\u5448\u5F4E\u66F2\uFF08carotid siphon\uFF09\uFF0C\u65C1\u908A\u7DCA\u8CBC CN VI\u3002\u672C\u6A21\u578B\u7684 ICA \u5728\u5207\u9762\u8655\u7565\u4F4E\u65BC\u6D77\u7DBF\u7AC7\u3002",{snap:!0});F("pituitary","\u8166\u4E0B\u5782\u9AD4","Pituitary gland","c",["Adenohypophysis","Neurohypophysis"],[3,-38,19],"\u4F4D\u5728\u8776\u978D\uFF0C\u4E0A\u65B9\u662F\u8996\u4EA4\u53C9\uFF0C\u4E0B\u65B9\u662F\u8776\u7AC7\uFF0C\u5169\u5074\u662F\u6D77\u7DBF\u7AC7\u3002\u816B\u7624\u5411\u4E0A\u58D3\u8FEB\u8996\u4EA4\u53C9 \u2192 \u96D9\u9873\u5074\u504F\u76F2\u3002");F("transsphenoidal","\u7D93\u8776\u7AC7\u624B\u8853\u8DEF\u5F91","Transsphenoidal approach","c",["guide:transsphenoidal"],[0,-44,20],"\u9F3B\u8154 \u2192 \u8776\u7AC7 \u2192 \u8776\u978D \u2192 \u8166\u4E0B\u5782\u9AD4\u3002\u7DA0\u8272\u7BAD\u7DDA\u662F\u8DEF\u5F91\u793A\u610F\u3002",{rep:"schematic",snap:!0});F("ciliary-ganglion","\u776B\u72C0\u795E\u7D93\u7BC0","Ciliary ganglion","g",["guide:ganglion"],[22.5,-43,40.5],"\u4F4D\u65BC\u773C\u7AA9\u6DF1\u90E8\u3001\u8996\u795E\u7D93\u5916\u5074\u3002\u4E09\u7A2E\u6839\uFF1A\u526F\u4EA4\u611F\uFF08CN III \u4E0B\u652F\uFF0C\u552F\u4E00\u5728\u6B64\u7A81\u89F8\uFF09\u3001\u611F\u89BA\uFF08\u9F3B\u776B\u795E\u7D93\uFF0C\u4E0D\u7A81\u89F8\uFF09\u3001\u4EA4\u611F\uFF08\u5167\u9838\u52D5\u8108\u795E\u7D93\u53E2\uFF0C\u4E0D\u7A81\u89F8\uFF09\u3002\u539F\u6A21\u578B\u6C92\u6709\u6B64\u69CB\u9020\uFF1B\u5C0F\u7403\u53EA\u793A\u610F\u4F4D\u7F6E\u3002",{rep:"schematic"});F("para-root","\u526F\u4EA4\u611F\u6839","Parasympathetic (motor) root","g",["guide:root-para"],[25,-48,43],"EW \u6838 \u2192 CN III \u2192 \u4E0B\u652F \u2192 \u776B\u72C0\u795E\u7D93\u7BC0\u7A81\u89F8 \u2192 \u77ED\u776B\u72C0\u795E\u7D93 \u2192 \u77B3\u5B54\u62EC\u7D04\u808C\uFF0B\u776B\u72C0\u808C\uFF1A\u7E2E\u77B3\uFF0B\u8ABF\u7BC0\u3002",{rep:"schematic"});F("sensory-root","\u611F\u89BA\u6839","Sensory root (from nasociliary)","g",["guide:root-sens"],[19.8,-40.5,39],"\u7531\u9F3B\u776B\u795E\u7D93\u4F86\uFF0C\u7A7F\u904E\u795E\u7D93\u7BC0\u4F46\u4E0D\u7A81\u89F8\u3002",{rep:"schematic"});F("symp-root","\u4EA4\u611F\u6839","Sympathetic root","g",["guide:root-symp"],[17.5,-42.5,38],"\u4F86\u81EA\u5167\u9838\u52D5\u8108\u4EA4\u611F\u795E\u7D93\u53E2\uFF08\u6CBF\u773C\u52D5\u8108\u9032\u773C\u7AA9\uFF09\uFF0C\u7A7F\u904E\u795E\u7D93\u7BC0\u4F46\u4E0D\u7A81\u89F8\uFF1B\u5230\u77B3\u5B54\u958B\u5927\u808C\u3002",{rep:"schematic"});F("short-ciliary","\u77ED\u776B\u72C0\u795E\u7D93","Short ciliary nerves","g",["guide:short-ciliary"],[26,-44,48],"\u5F9E\u776B\u72C0\u795E\u7D93\u7BC0\u51FA\u53BB\uFF0C\u53EF\u651C\u5E36\u526F\u4EA4\u611F\u3001\u4EA4\u611F\u3001\u611F\u89BA\u4E09\u7A2E\u7E96\u7DAD\u3002\u4E00\u79D2\u5224\u65B7\uFF1A\u5F9E\u795E\u7D93\u7BC0\u51FA\u53BB \u2192 \u77ED\u776B\u72C0\u3002",{rep:"schematic"});F("long-ciliary","\u9577\u776B\u72C0\u795E\u7D93","Long ciliary nerves","g",["guide:long-ciliary"],[22,-40,48],"\u76F4\u63A5\u7531\u9F3B\u776B\u795E\u7D93\u4F86\uFF0C\u7E5E\u904E\u776B\u72C0\u795E\u7D93\u7BC0\uFF0C\u4E3B\u8981\u5E36\u611F\u89BA\uFF0B\u4EA4\u611F\u3002",{rep:"schematic"});F("sphincter","\u77B3\u5B54\u62EC\u7D04\u808C","Sphincter pupillae","g",["guide:sphincter"],[31,-47,74],"\u77ED\u776B\u72C0\u795E\u7D93\u7684\u526F\u4EA4\u611F\u7E96\u7DAD\u652F\u914D\uFF1B\u6536\u7E2E \u2192 \u7E2E\u77B3\u3002\u74B0\u5F62\u53EA\u793A\u610F\u4F4D\u7F6E\u3002",{rep:"schematic"});F("ciliary-muscle","\u776B\u72C0\u808C","Ciliary muscle","g",["guide:ciliary"],[36,-49,69],"\u6536\u7E2E \u2192 \u61F8\u97CC\u5E36\u653E\u9B06 \u2192 \u6C34\u6676\u9AD4\u8B8A\u539A\uFF08\u8ABF\u7BC0\uFF09\u3002\u74B0\u5F62\u53EA\u793A\u610F\u4F4D\u7F6E\u3002",{rep:"schematic"});F("lens","\u6C34\u6676\u9AD4","Lens","gv",["Lens.l"],[31,-49,71.3],"\u7121\u8840\u7BA1\uFF0C\u9760\u623F\u6C34\u4F9B\u61C9\u71DF\u990A\uFF1B\u524D\u9762\u8F03\u5E73\u3001\u5F8C\u9762\u8F03\u51F8\u3002\u4E0A\u76AE\u53EA\u5728\u524D\u56CA\u5167\u5074\u3002\u767D\u5167\u969C\u8853\u5F8C\u6B98\u7559\u4E0A\u76AE\u79FB\u884C\u5230\u5F8C\u56CA \u2192 \u5F8C\u56CA\u6DF7\u6FC1 PCO\uFF08\u4E8C\u6B21\u767D\u5167\u969C\uFF09\u3002");F("ew","EW \u6838\uFF08\u52D5\u773C\u795E\u7D93\u526F\u6838\uFF09","Edinger\u2013Westphal nucleus","g",["Accessory nucleus of oculomotor nerve.l"],[.8,-31.2,-8.9],"\u526F\u4EA4\u611F\u7BC0\u524D\u795E\u7D93\u5143\u6240\u5728\uFF1B\u63A5\u6536\u5169\u5074\u9802\u84CB\u524D\u5340 \u2192 \u6240\u4EE5\u7167\u4E00\u773C\u5169\u773C\u90FD\u7E2E\u77B3\uFF08\u76F4\u63A5\uFF0B\u9593\u63A5\u53CD\u61C9\uFF09\u3002");F("nucleus3","\u52D5\u773C\u795E\u7D93\u6838","Oculomotor nucleus","g",["Nucleus of oculomotor nerve.l"],[2,-34.4,-9.3],"\u4E0A\u4E18\u5C64\u6B21\u53EF\u898B CN III \u6838\u8207 EW \u6838\u3002\u300C\u4E0A\u4E18\u4E09\u300D\u3002");F("nucleus4","\u6ED1\u8ECA\u795E\u7D93\u6838","Trochlear nucleus","g",["Nucleus of trochlear nerve.l"],[1.3,-40.3,-9.6],"\u4E0B\u4E18\u5C64\u6B21\u53EF\u898B CN IV \u6838\u3002\u300C\u4E0B\u4E18\u56DB\u300D\u3002");F("sc","\u4E0A\u4E18","Superior colliculus","gv",["Superior colliculus.l"],[8.7,-27.5,-16.6],"\u4E2D\u8166\u56DB\u758A\u9AD4\u4E0A\u5C0D\uFF0C\u4E3B\u8981\u8CA0\u8CAC\u8996\u89BA\u53CD\u5C04\u3002");F("ic","\u4E0B\u4E18","Inferior colliculus","g",["Inferior colliculus.l"],[7.3,-31.7,-16.2],"\u4E2D\u8166\u56DB\u758A\u9AD4\u4E0B\u5C0D\uFF0C\u4E3B\u8981\u8207\u807D\u89BA\u8DEF\u5F91\uFF0F\u53CD\u5C04\u76F8\u95DC\u3002");F("pretectal","\u9802\u84CB\u524D\u5340","Pretectal area","g",["guide:pretectal"],[5,-25,-11],"\u77B3\u5B54\u5C0D\u5149\u53CD\u5C04\u4E2D\u6A1E\uFF1A\u8996\u7DB2\u819C \u2192 CN II \u2192 \u9802\u84CB\u524D\u5340 \u2192 \u5169\u5074 EW \u6838 \u2192 CN III \u2192 \u776B\u72C0\u795E\u7D93\u7BC0 \u2192 \u77ED\u776B\u72C0\u795E\u7D93 \u2192 \u77B3\u5B54\u62EC\u7D04\u808C\u3002\u539F\u6A21\u578B\u7121\u6B64\u5340\u7DB2\u683C\uFF0C\u5C0F\u7403\u793A\u610F\u5728\u4E0A\u4E18\u524D\u65B9\u3002",{rep:"schematic"});F("retina","\u8996\u7DB2\u819C","Retina","vu",["Retina.l"],[40,-52,60],"\u5F71\u50CF\u4E0A\u4E0B\u5DE6\u53F3\u90FD\u5012\u7F6E\uFF1B\u4E0B\u534A\u90E8\u8996\u7DB2\u819C\u5C0D\u61C9\u4E0A\u65B9\u8996\u91CE\u3002");F("on-intraocular","\u8996\u795E\u7D93\uFF1A\u773C\u7403\u5167\u6BB5","Optic nerve \u2014 intraocular part","v",["Optic nerve (II).l"],[28.8,-46.3,55],"\u6700\u77ED\uFF08\u7D04 1 mm\uFF09\uFF1B\u7BE9\u677F\u524D\u7121\u9AD3\u9798\u3002",{rep:"guide",snap:!0});F("on-orbital","\u8996\u795E\u7D93\uFF1A\u773C\u7AA9\u6BB5","Optic nerve \u2014 intraorbital part","v",["Optic nerve (II).l"],[22,-43,43],"\u6700\u9577\uFF0C\u5448 S \u5F62\uFF0C\u8B93\u773C\u7403\u8F49\u52D5\u6642\u4E0D\u88AB\u62C9\u626F\u3002",{rep:"guide",snap:!0});F("on-canal","\u8996\u795E\u7D93\uFF1A\u8996\u795E\u7D93\u7BA1\u6BB5","Optic nerve \u2014 intracanalicular part","v",["Optic nerve (II).l"],[12.5,-37.6,31.4],"\u901A\u904E\u8996\u795E\u7D93\u7BA1\uFF0C\u8207\u773C\u52D5\u8108\u540C\u884C\u3002",{rep:"guide",snap:!0});F("on-cranial","\u8996\u795E\u7D93\uFF1A\u9871\u5167\u6BB5","Optic nerve \u2014 intracranial part","v",["Optic nerve (II).l"],[7,-33.5,24],"\u8996\u795E\u7D93\u7BA1 \u2192 \u8996\u4EA4\u53C9\u3002",{rep:"guide",snap:!0});F("optic-tract","\u8996\u675F","Optic tract","v",["Optic tract.l"],[16,-28,0],"\u8996\u4EA4\u53C9\u4E4B\u5F8C\uFF1A\u5DE6\u8996\u675F\u5E36\u96D9\u773C\u53F3\u5074\u8996\u91CE\u3002");F("lgn","\u5916\u5074\u819D\u72C0\u9AD4","Lateral geniculate nucleus","v",["Lateral geniculate body.l"],[19.1,-27.8,-13.2],"\u4E18\u8166\u7684\u8996\u89BA\u4E2D\u7E7C\u7AD9\uFF0C\u4E4B\u5F8C\u7D93\u8996\u653E\u5C04\u5230 V1\u3002");F("baum","\u9B91\u6C0F\u74B0\uFF08\u9802\u8449\u8996\u653E\u5C04\uFF09","Baum\u2019s loop","v",["guide:baum"],[31,-3,-45],"\u8996\u653E\u5C04\u4E0A\u90E8\uFF0C\u7D93\u9802\u8449\u5230\u8DDD\u72C0\u6E9D\u4E0A\u5CB8\uFF08\u6954\u8449\uFF09\uFF0C\u50B3\u905E\u5C0D\u5074\u4E0B\u65B9\u8996\u91CE\u3002",{rep:"schematic"});F("v1-cortex","\u521D\u7D1A\u8996\u89BA\u76AE\u8CEA V1","Primary visual cortex (V1, BA 17)","v",["Calcarine sulcus.l","Cuneus.l","Lingual gyrus.l"],[8,-23,-79],"= Striate cortex = Brodmann area 17\uFF0C\u4F4D\u65BC\u8DDD\u72C0\u6E9D\u5169\u5CB8\u3002\u554F\u300C\u4EC0\u9EBC\u76AE\u8CEA\u300D\u7B54 primary visual cortex\uFF1B\u554F\u300C\u7B2C\u5E7E\u5340\u300D\u7B54 17\u3002",{rep:"guide",snap:!0});F("cuneus","\u6954\u8449","Cuneus","v",["Cuneus.l"],[6,-5,-80],"\u8DDD\u72C0\u6E9D\u4E0A\u65B9\uFF1B\u4EE3\u8868\u5C0D\u5074\u4E0B\u65B9\u8996\u91CE\u3002\u300C\u4E0A\u9762\u7684\u6954\u8449\u770B\u4E0B\u9762\u300D\u3002");F("lingual","\u820C\u56DE","Lingual gyrus","v",["Lingual gyrus.l"],[8,-35,-70],"\u8DDD\u72C0\u6E9D\u4E0B\u65B9\uFF1B\u4EE3\u8868\u5C0D\u5074\u4E0A\u65B9\u8996\u91CE\u3002\u300C\u4E0B\u9762\u7684\u820C\u56DE\u770B\u4E0A\u9762\u300D\u3002");F("cav-3","III\uFF08\u5916\u5074\u58C1\u6700\u4E0A\uFF09","CN III in lateral wall","c",["Oculomotor nerve (III).l"],[12.6,-37.2,20],"\u5916\u5074\u58C1\u7531\u4E0A\u5230\u4E0B\u7B2C 1 \u689D\u3002",{rep:"guide",snap:!0,via:["sof"]});F("cav-4","IV\uFF08\u5916\u5074\u58C1\uFF09","CN IV in lateral wall","c",["Trochlear nerve (IV).l"],[13.6,-43.2,20],"\u5916\u5074\u58C1\u7B2C 2 \u689D\u3002\u672C\u6A21\u578B\u4E2D IV \u8207 V1 \u5E7E\u4E4E\u540C\u9AD8\uFF0C\u6559\u79D1\u66F8\u6392\u5217\u662F III \u2192 IV \u2192 V1 \u2192 V2\u3002",{rep:"guide",snap:!0,via:["sof"]});F("cav-v1","V1\uFF08\u5916\u5074\u58C1\uFF09","V1 in lateral wall","c",["Ophthalmic nerve.l"],[15,-42.5,20],"\u5916\u5074\u58C1\u7B2C 3 \u689D\uFF0C\u5F80\u524D\u7D93\u7736\u4E0A\u88C2\u3002",{rep:"guide",snap:!0,via:["sof"]});F("cav-v2","V2\uFF08\u5916\u5074\u58C1\u6700\u4E0B\uFF09","V2 in lateral wall","c",["Maxillary nerve.l"],[17.2,-49,20],"\u5916\u5074\u58C1\u6700\u4E0B\u65B9\uFF0C\u5F80\u524D\u51FA\u5713\u5B54\u3002",{rep:"guide",snap:!0,via:["rotundum"]});F("cav-6","VI\uFF08\u6D77\u7DBF\u7AC7\u8154\u5167\uFF09","CN VI inside the sinus","c",["Abducens nerve (VI).l"],[14,-46.2,20],"\u552F\u4E00\u8D70\u5728\u6D77\u7DBF\u7AC7\u8154\u5167\u7684\u8166\u795E\u7D93\uFF0C\u8CBC\u8457 ICA\u3002",{rep:"guide",snap:!0,via:["sof"]});F("cra","\u8996\u7DB2\u819C\u4E2D\u592E\u52D5\u8108","Central retinal artery (CRA)","ku",["Central retinal artery.l"],[25.9,-49.4,48.3],"\u773C\u52D5\u8108\u7B2C\u4E00\u689D\u5206\u652F\u3002\u5BE6\u969B\u4E0A\u5728\u773C\u7403\u5F8C\u7D04 1 cm \u7531\u4E0B\u65B9\u7A7F\u5165\u8996\u795E\u7D93\uFF0C\u6CBF\u8996\u795E\u7D93\u4E2D\u592E\u8D70\u5230\u8996\u76E4\uFF0C\u518D\u5206\u6210\u4E0A\u4E0B\u9F3B\u5074\uFF0F\u9873\u5074\u56DB\u652F\u3002\u7D42\u52D5\u8108 \u2192 \u963B\u585E\uFF08CRAO\uFF09\u9020\u6210\u5167\u5C64\u8996\u7DB2\u819C\u7F3A\u8840\u3001\u9EC3\u6591\u6AFB\u6843\u7D05\u6591\u3002\u539F\u6A21\u578B\u7684 CRA \u8D70\u5728\u8996\u795E\u7D93\u4E0B\u65B9\u3001\u5230\u8996\u76E4\u624D\u63A5\u4E0A\uFF0C\u7A7F\u5165\u4F4D\u7F6E\u4EE5\u8AAA\u660E\u70BA\u6E96\u3002");F("crv","\u8996\u7DB2\u819C\u4E2D\u592E\u975C\u8108","Central retinal vein (CRV)","ku",["guide:crv"],[24.2,-45.6,44.2],"\u8207 CRA \u540C\u884C\u65BC\u8996\u795E\u7D93\u4E2D\uFF0C\u5728\u773C\u7403\u5F8C\u65B9\u96E2\u958B\u8996\u795E\u7D93\uFF0C\u532F\u5165\u4E0A\u773C\u975C\u8108\u6216\u76F4\u63A5\u9032\u6D77\u7DBF\u7AC7\u3002\u963B\u585E\uFF08CRVO\uFF09\u2192 \u706B\u7130\u72C0\u51FA\u8840\u3002\u539F\u6A21\u578B\u6C92\u6709\uFF0C\u85CD\u7DDA\u70BA\u793A\u610F\uFF1B\u5BE6\u969B\u5728\u8996\u795E\u7D93\u4E2D\u592E\u3002",{rep:"schematic"});F("spca","\u776B\u72C0\u5F8C\u77ED\u52D5\u8108","Short posterior ciliary arteries","k",["Short posterior ciliary arteries.l","guide:spca-ext"],[21,-40.8,40.5],"\u7D04 15\u201320 \u689D\uFF0C\u5728\u8996\u795E\u7D93\u5468\u570D\u7A7F\u5165\u978F\u819C\uFF0C\u4F9B\u61C9\u8108\u7D61\u819C\uFF08\u2192 \u5916\u5C64\u8996\u7DB2\u819C\uFF09\u8207\u8996\u795E\u7D93\u982D\u3002\u539F\u6A21\u578B\u53EA\u756B\u5230\u773C\u7403\u5F8C\u65B9\u7D04 9 mm\uFF0C\u63A5\u5230\u978F\u819C\u7684\u7D30\u652F\u662F\u793A\u610F\u3002");F("zinn","Zinn-Haller \u74B0","Circle of Zinn\u2013Haller","ku",["guide:zinn"],[30.5,-46.5,51.6],"\u776B\u72C0\u5F8C\u77ED\u52D5\u8108\u5728\u978F\u819C\u5167\u74B0\u7E5E\u8996\u795E\u7D93\u982D\u5F62\u6210\u7684\u543B\u5408\u74B0\uFF0C\u4F9B\u61C9\u7BE9\u677F\u9644\u8FD1\u7684\u8996\u795E\u7D93\u3002\u524D\u90E8\u7F3A\u8840\u6027\u8996\u795E\u7D93\u75C5\u8B8A\u8207\u5B83\u6709\u95DC\u3002\u793A\u610F\u3002",{rep:"schematic"});F("lpca","\u776B\u72C0\u5F8C\u9577\u52D5\u8108","Long posterior ciliary arteries","k",["Long posterior ciliary arteries.l","guide:lpca-in"],[25.1,-39.1,47.4],"\u5167\u3001\u5916\u5074\u5404\u4E00\u689D\uFF0C\u7A7F\u978F\u819C\u5F8C\u6CBF\u6C34\u5E73\u7D93\u7DDA\u5728\u8108\u7D61\u819C\u4E0A\u8154\u5F80\u524D\uFF0C\u5230\u776B\u72C0\u9AD4\u53C3\u8207\u8679\u819C\u5927\u52D5\u8108\u74B0\u3002\u539F\u6A21\u578B\u756B\u5230\u773C\u7403\u5F8C\u4E0A\u65B9\uFF1B\u773C\u7403\u5167\u6CBF\u6C34\u5E73\u7D93\u7DDA\u7684\u8D70\u5411\u662F\u793A\u610F\u3002");F("muscular","\u773C\u52D5\u8108\u808C\u652F","Muscular branches of the ophthalmic artery","k",["guide:muscular"],[20,-41,46],"\u4F9B\u61C9\u773C\u5916\u808C\uFF0C\u4E26\u5EF6\u7E8C\u70BA\u776B\u72C0\u524D\u52D5\u8108\u3002\u793A\u610F\u3002",{rep:"schematic"});F("aca","\u776B\u72C0\u524D\u52D5\u8108","Anterior ciliary arteries","k",["guide:aca"],[31.2,-42.2,72],"\u7531\u808C\u652F\u6CBF\u56DB\u689D\u76F4\u808C\u808C\u8171\u5F80\u524D\uFF1A\u4E0A\u3001\u4E0B\u3001\u5167\u76F4\u808C\u5404 2 \u689D\uFF0C\u5916\u76F4\u808C 1 \u689D\uFF0C\u5171 7 \u689D\u3002\u5728\u89D2\u819C\u7DE3\u9644\u8FD1\u7A7F\u978F\u819C\uFF0C\u8207\u776B\u72C0\u5F8C\u9577\u52D5\u8108\u5F62\u6210\u8679\u819C\u5927\u52D5\u8108\u74B0\uFF1B\u4E5F\u5206\u652F\u5230\u7D50\u819C\u8207\u978F\u819C\u8868\u5C64\u3002\u659C\u8996\u624B\u8853\u5207\u591A\u689D\u76F4\u808C\u6642\u8981\u6CE8\u610F\u524D\u6BB5\u7F3A\u8840\u3002\u793A\u610F\u3002",{rep:"schematic",snap:!0});F("mac","\u8679\u819C\u5927\u52D5\u8108\u74B0","Major arterial circle of the iris","k",["guide:mac"],[37.4,-48.8,71.2],"\u4F4D\u65BC\u776B\u72C0\u9AD4\u3001\u8679\u819C\u6839\u90E8\uFF0C\u7531\u776B\u72C0\u5F8C\u9577\u52D5\u8108\uFF0B\u776B\u72C0\u524D\u52D5\u8108\u7D44\u6210\uFF0C\u4F9B\u61C9\u776B\u72C0\u9AD4\u8207\u8679\u819C\u3002\u793A\u610F\u3002",{rep:"schematic",snap:!0});F("mic","\u8679\u819C\u5C0F\u52D5\u8108\u74B0","Minor arterial circle of the iris","k",["guide:mic"],[34.3,-48.8,73.8],"\u5728\u8679\u819C\u8868\u9762\u7684\u9818\u72C0\u7DE3\uFF08collarette\uFF09\u9644\u8FD1\uFF0C\u7531\u5927\u52D5\u8108\u74B0\u767C\u51FA\u7684\u653E\u5C04\u72C0\u8840\u7BA1\u9023\u6210\uFF0C\u5E38\u4E0D\u5B8C\u6574\u3002\u793A\u610F\u3002",{rep:"schematic",snap:!0});F("lacrimal-a","\u6DDA\u817A\u52D5\u8108","Lacrimal artery","e",["Lacrimal artery.l"],[30,-36,50],"\u773C\u52D5\u8108\u5206\u652F\uFF0C\u6CBF\u5916\u76F4\u808C\u4E0A\u7DE3\u5230\u6DDA\u817A\uFF1B\u5206\u51FA\u77BC\u5916\u5074\u52D5\u8108\uFF0C\u4E26\u6709\u56DE\u8FD4\u8166\u819C\u652F\u7D93\u7736\u4E0A\u88C2\u3002",{snap:!0});F("supraorbital-a","\u7736\u4E0A\u52D5\u8108","Supra-orbital artery","e",["Supra-orbital artery.l"],[26,-22,82],"\u7D93\u7736\u4E0A\u5B54\uFF0F\u5207\u8DE1\u5230\u984D\u90E8\uFF0C\u8207\u7736\u4E0A\u795E\u7D93\u4F34\u884C\u3002",{snap:!0});F("supratrochlear-a","\u6ED1\u8ECA\u4E0A\u52D5\u8108","Supratrochlear artery","e",["Supratrochlear artery.l"],[12.4,-25,85],"\u773C\u52D5\u8108\u7D42\u652F\u4E4B\u4E00\uFF0C\u5728\u6ED1\u8ECA\u4E0A\u65B9\u51FA\u773C\u7AA9\u5230\u984D\u90E8\u5167\u5074\u3002",{snap:!0});F("ethmoidal-a","\u524D\uFF0F\u5F8C\u7BE9\u52D5\u8108","Anterior & posterior ethmoidal arteries","e",["Anterior ethmoidal artery.l","Posterior ethmoidal artery.l"],[10,-44,55],"\u7D93\u773C\u7AA9\u5167\u5074\u58C1\u7684\u7BE9\u5B54\u5230\u7BE9\u7AC7\u3001\u9F3B\u8154\u8207\u9871\u524D\u7AA9\u3002\u524D\u7BE9\u52D5\u8108\u662F\u9F3B\u51FA\u8840\u7684\u91CD\u8981\u4F86\u6E90\u4E4B\u4E00\u3002",{snap:!0});F("dorsal-nasal","\u9F3B\u80CC\u52D5\u8108","Dorsal nasal artery","e",["guide:dorsal-nasal"],[10,-34,79],"\u773C\u52D5\u8108\u7D42\u652F\u4E4B\u4E00\uFF0C\u5728\u5167\u7725\u4E0A\u65B9\u51FA\u773C\u7AA9\u5230\u9F3B\u80CC\uFF0C\u8207\u5167\u7725\u52D5\u8108\uFF08\u9762\u52D5\u8108\uFF09\u543B\u5408 \u2192 \u9838\u5167\u3001\u9838\u5916\u52D5\u8108\u7CFB\u7D71\u5728\u6B64\u76F8\u9023\u3002\u793A\u610F\u3002",{rep:"schematic",snap:!0});F("med-palp","\u77BC\u5167\u5074\u52D5\u8108\uFF0B\u773C\u77BC\u52D5\u8108\u5F13","Medial palpebral arteries & palpebral arcades","e",["guide:med-palp","guide:arcade"],[22,-38.6,80.3],"\u77BC\u5167\u5074\u52D5\u8108\u5206\u4E0A\u3001\u4E0B\u652F\uFF0C\u8207\u77BC\u5916\u5074\u52D5\u8108\u9023\u6210\u4E0A\u3001\u4E0B\u773C\u77BC\u52D5\u8108\u5F13\u3002\u793A\u610F\uFF0C\u4F4D\u7F6E\u70BA\u773C\u77BC\u8FD1\u4F3C\u3002",{rep:"schematic",snap:!0});F("lat-palp","\u77BC\u5916\u5074\u52D5\u8108","Lateral palpebral artery","e",["guide:lat-palp"],[44.5,-44,71],"\u7531\u6DDA\u817A\u52D5\u8108\u5206\u51FA\uFF0C\u5230\u5916\u7725\u63A5\u4E0A\u3001\u4E0B\u773C\u77BC\u52D5\u8108\u5F13\u3002\u793A\u610F\u3002",{rep:"schematic",snap:!0});F("vortex","\u6E26\u975C\u8108","Vortex veins","k",["guide:vortex"],[39.2,-40.7,60.3],"4\uFF08\u20136\uFF09\u689D\uFF0C\u6BCF\u8C61\u9650\u4E00\u689D\uFF0C\u5728\u8D64\u9053\u5F8C\u65B9\u7A7F\u51FA\u978F\u819C\uFF0C\u6536\u96C6\u8108\u7D61\u819C\u3001\u776B\u72C0\u9AD4\u3001\u8679\u819C\u7684\u975C\u8108\u8840\uFF1B\u4E0A\u65B9\u5169\u689D\u5165\u4E0A\u773C\u975C\u8108\u3001\u4E0B\u65B9\u5169\u689D\u5165\u4E0B\u773C\u975C\u8108\u3002\u793A\u610F\u3002",{rep:"schematic",snap:!0});F("iov","\u773C\u4E0B\u975C\u8108","Inferior ophthalmic vein","e",["Inferior ophthalmic vein.l"],[18,-49,40],"\u7D93\u7736\u4E0B\u88C2\u901A\u7FFC\u975C\u8108\u53E2\uFF0C\u4E5F\u53EF\u532F\u5165\u4E0A\u773C\u975C\u8108\u6216\u6D77\u7DBF\u7AC7\u3002",{snap:!0});F("infraorbital-a","\u7736\u4E0B\u52D5\u8108","Infra-orbital artery","e",["Infra-orbital artery.l"],[27,-70,62],"\u4F86\u81EA\u4E0A\u9837\u52D5\u8108\uFF08\u9838\u5916\u7CFB\u7D71\uFF09\uFF0C\u8D70\u7736\u4E0B\u6E9D\uFF0F\u7BA1\u5230\u7736\u4E0B\u5B54\uFF0C\u4F9B\u61C9\u4E0B\u76F4\u808C\u3001\u4E0B\u659C\u808C\u7B49\u9130\u8FD1\u69CB\u9020\u3002",{snap:!0});F("angular-a","\u5167\u7725\u52D5\u8108","Angular artery","e",["Angular artery.l"],[12,-45,80],"\u9762\u52D5\u8108\uFF08\u9838\u5916\u7CFB\u7D71\uFF09\u7684\u7D42\u6BB5\uFF0C\u5728\u5167\u7725\u8207\u9F3B\u80CC\u52D5\u8108\u543B\u5408\u3002",{snap:!0});F("ant-meningeal","\u524D\u8166\u819C\u52D5\u8108","Anterior meningeal artery","e",["guide:ant-meningeal"],[4,-28,66],"\u7531\u524D\u7BE9\u52D5\u8108\u5206\u51FA\uFF0C\u9032\u5165\u9871\u524D\u7AA9\u4F9B\u61C9\u786C\u8166\u819C\u3002\u793A\u610F\u3002",{rep:"schematic",snap:!0});F("zygomatic-br","\u6DDA\u817A\u52D5\u8108\u9874\u652F","Zygomatic branches of the lacrimal artery","e",["guide:zygomatic-br"],[48,-48,60],"\u7A7F\u9874\u9AA8\u5230\u9873\u90E8\u8207\u9762\u9830\uFF08\u9874\u9873\u652F\u3001\u9874\u9762\u652F\uFF09\u3002\u793A\u610F\u3002",{rep:"schematic",snap:!0});F("angular-v","\u5167\u7725\u975C\u8108","Angular vein","e",["Angular vein.l"],[12,-38,80],"\u9762\u975C\u8108\u7684\u8D77\u59CB\u6BB5\uFF0C\u5728\u5167\u7725\u8207\u4E0A\u773C\u975C\u8108\u76F8\u901A\uFF0C\u7121\u74E3\u819C\u3002",{snap:!0});F("facial-v","\u9762\u975C\u8108","Facial vein","e",["Facial vein.l"],[30,-110,55],"\u7D93\u5167\u7725\u975C\u8108 \u2194 \u4E0A\u773C\u975C\u8108 \u2192 \u6D77\u7DBF\u7AC7\uFF1B\u4E5F\u7D93\u6DF1\u9762\u975C\u8108 \u2194 \u7FFC\u975C\u8108\u53E2\u3002\u9762\u90E8\u611F\u67D3\u53EF\u9006\u6D41\u5165\u9871\u3002",{snap:!0});F("supratrochlear-v","\u6ED1\u8ECA\u4E0A\u975C\u8108\uFF0F\u9F3B\u80CC\u975C\u8108","Supratrochlear & dorsal nasal veins","e",["guide:supratrochlear-v","guide:nasal-dorsum-v"],[12,-24,86],"\u984D\u90E8\u8207\u9F3B\u80CC\u7684\u975C\u8108\uFF0C\u5728\u5167\u7725\u532F\u6210\u5167\u7725\u975C\u8108\u3002\u793A\u610F\u3002",{rep:"schematic",snap:!0});F("lacrimal-v","\u6DDA\u817A\u975C\u8108","Lacrimal vein","e",["guide:lacrimal-v"],[35,-34.5,60],"\u6DDA\u817A\u7684\u975C\u8108\uFF0C\u532F\u5165\u4E0A\u773C\u975C\u8108\u3002\u793A\u610F\u3002",{rep:"schematic",snap:!0});F("infraorbital-v","\u7736\u4E0B\u975C\u8108","Infra-orbital vein","e",["guide:infraorbital-v"],[27,-72,64],"\u6CBF\u7736\u4E0B\u7BA1\uFF0C\u7D93\u7736\u4E0B\u88C2\u5F80\u7FFC\u975C\u8108\u53E2\u3002\u793A\u610F\u3002",{rep:"schematic",snap:!0});F("pterygoid","\u7FFC\u975C\u8108\u53E2","Pterygoid venous plexus","e",["guide:pterygoid","guide:iov-pterygoid"],[31,-72,18],"\u9873\u4E0B\u7AA9\u5167\u7684\u975C\u8108\u53E2\uFF1B\u4E0B\u773C\u975C\u8108\u7D93\u7736\u4E0B\u88C2\u901A\u6B64\uFF0C\u4E5F\u7D93\u5C0E\u975C\u8108\u9023\u6D77\u7DBF\u7AC7\u3002\u793A\u610F\u3002",{rep:"schematic",snap:!0});F("danger","\u5371\u96AA\u4E09\u89D2","Danger triangle of the face","e",["guide:danger"],[19,-102,82],"\u9F3B\u6839\u5230\u5169\u5074\u5634\u89D2\u3002\u9019\u5340\u975C\u8108\uFF08\u9762\u3001\u5167\u7725\u975C\u8108\uFF09\u7121\u74E3\u819C\uFF0C\u7D93\u773C\u975C\u8108\u901A\u6D77\u7DBF\u7AC7 \u2192 \u611F\u67D3\u53EF\u9020\u6210\u6D77\u7DBF\u7AC7\u8840\u6813\uFF08\u6D77\u7DBF\u7AC7\u75C7\u5019\u7FA4\uFF09\u3002\u793A\u610F\u3002",{rep:"schematic",snap:!0});F("acv","\u776B\u72C0\u524D\u975C\u8108","Anterior ciliary veins","k",["guide:acv"],[24,-48.5,71],"\u6536\u96C6\u776B\u72C0\u9AD4\u8207\u978F\u819C\u975C\u8108\u7AC7\uFF08Schlemm \u7BA1\uFF09\u7684\u8840\uFF0C\u6CBF\u76F4\u808C\u56DE\u5230\u808C\u975C\u8108 \u2192 \u4E0A\uFF0F\u4E0B\u773C\u975C\u8108\u3002\u793A\u610F\u3002",{rep:"schematic",snap:!0});F("schlemm","\u978F\u819C\u975C\u8108\u7AC7\uFF08Schlemm \u7BA1\uFF09","Scleral venous sinus (canal of Schlemm)","k",["guide:schlemm"],[31.2,-41.9,72.7],"\u89D2\u819C\u7DE3\u7684\u74B0\u72C0\u7BA1\u9053\uFF0C\u623F\u6C34\u7531\u6B64\u6D41\u51FA \u2192 \u978F\u819C\u5167\uFF0F\u8868\u5C64\u975C\u8108 \u2192 \u776B\u72C0\u524D\u975C\u8108\u3002\u793A\u610F\u3002",{rep:"schematic",snap:!0});F("episcleral","\u978F\u819C\u8868\u5C64\u8207\u7D50\u819C\u8840\u7BA1","Episcleral & conjunctival vessels","k",["guide:episcleral"],[31.2,-56.6,71.3],"\u776B\u72C0\u524D\u52D5\u8108\u5728\u89D2\u819C\u7DE3\u9644\u8FD1\u7684\u5206\u652F\uFF08\u542B\u7D50\u819C\u524D\uFF0F\u5F8C\u52D5\u8108\uFF09\uFF0C\u5F62\u6210\u89D2\u819C\u7DE3\u5468\u570D\u7684\u8840\u7BA1\u7DB2\u3002\u793A\u610F\u3002",{rep:"schematic",snap:!0});F("plicata","\u776B\u72C0\u9AD4\u76BA\u8936\u90E8\uFF08pars plicata\uFF09","Pars plicata of the ciliary body","k",["guide:plicata"],[37.8,-48.8,70.4],"\u776B\u72C0\u9AD4\u524D\u90E8\uFF0C\u6709\u776B\u72C0\u7A81\uFF0C\u5206\u6CCC\u623F\u6C34\uFF1B\u8679\u819C\u5927\u52D5\u8108\u74B0\u5C31\u5728\u9644\u8FD1\u3002\u793A\u610F\u4F4D\u7F6E\u3002",{rep:"schematic",snap:!0});F("plana","\u776B\u72C0\u9AD4\u5E73\u5766\u90E8\uFF08pars plana\uFF09","Pars plana of the ciliary body","k",["guide:plana"],[23.6,-48.8,69.3],"\u776B\u72C0\u9AD4\u5F8C\u90E8\u5E73\u5766\u5340\uFF0C\u5F80\u5F8C\u5230\u92F8\u9F52\u7DE3\u63A5\u8996\u7DB2\u819C\u3002\u73BB\u7483\u9AD4\u624B\u8853\u5E38\u7531\u6B64\u9032\u5165\u3002\u793A\u610F\u4F4D\u7F6E\u3002",{rep:"schematic",snap:!0});F("choroid","\u8108\u7D61\u819C\uFF08\u8108\u7D61\u819C\u5FAE\u8840\u7BA1\u53E2\uFF09","Choroid & choriocapillaris","ku",["guide:choroid"],[35.8,-55.1,54.7],"\u8461\u8404\u819C\u5F8C\u90E8\uFF08\u8461\u8404\u819C\uFF1D\u8679\u819C\uFF0B\u776B\u72C0\u9AD4\uFF0B\u8108\u7D61\u819C\uFF09\u3002\u7531\u776B\u72C0\u5F8C\u77ED\uFF0F\u9577\u52D5\u8108\u4F9B\u61C9\uFF0C\u6700\u5167\u5C64\u662F\u8108\u7D61\u819C\u5FAE\u8840\u7BA1\u53E2\uFF0C\u7D93 Bruch \u819C\u64F4\u6563\u4F9B\u61C9\u8272\u7D20\u4E0A\u76AE\u8207\u611F\u5149\u7D30\u80DE\uFF08\u5916\u5C64\u8996\u7DB2\u819C\uFF09\u3002\u8840\u6D41\u56DE\u6E26\u975C\u8108\u3002\u793A\u610F\u6BBC\u5C64\u3002",{rep:"schematic",snap:!0});F("disc","\u8996\u795E\u7D93\u76E4\uFF08\u8996\u4E73\u7A81\uFF09","Optic disc","u",["guide:disc"],[28.4,-47.4,53.4],"\u7D04 1.5 \xD7 1.75 mm\uFF0C\u7121\u611F\u5149\u7D30\u80DE \u2192 \u76F2\u9EDE\u3002CRA \u7531\u6B64\u9032\u5165\u3001CRV \u7531\u6B64\u96E2\u958B\u3002\u5728\u5DE6\u773C\u773C\u5E95\u4F4D\u65BC\u9EC3\u6591\u7684\u9F3B\u5074\u3002",{rep:"schematic",snap:!0});F("cup","\u8996\u795E\u7D93\u676F\uFF08\u676F\u76E4\u6BD4\uFF09","Optic cup (cup/disc ratio)","u",["guide:cup"],[28.4,-47.4,53.4],"\u8996\u795E\u7D93\u76E4\u4E2D\u592E\u7684\u51F9\u9677\u3002\u676F\u8207\u76E4\u76F4\u5F91\u6BD4\uFF1D\u676F\u76E4\u6BD4\uFF0C\u6B63\u5E38\u7D04 < 0.3\uFF1B\u8B8A\u5927\u8981\u61F7\u7591\u9752\u5149\u773C\u3002\u793A\u610F\u5927\u5C0F\u3002",{rep:"schematic",snap:!0});F("macula","\u9EC3\u6591\u90E8\u8207\u4E2D\u592E\u51F9","Macula lutea & fovea","u",["guide:fundus-macula","guide:fundus-fovea"],[31.2,-49.6,53],"\u5728\u8996\u795E\u7D93\u76E4\u9873\u5074\u7D04 2.5 \u500B\u76E4\u5F91\u3002\u4E2D\u592E\u51F9\u7121\u8996\u7DB2\u819C\u8840\u7BA1\uFF08\u7121\u8840\u7BA1\u5340\uFF09\uFF0C\u9760\u8108\u7D61\u819C\u4F9B\u61C9\uFF1B\u5468\u570D\u7531 CRA \u7684\u4E0A\u3001\u4E0B\u9873\u5074\u652F\u4F9B\u61C9\u3002\u7D04 20% \u7684\u4EBA\u6709\u776B\u72C0\u8996\u7DB2\u819C\u52D5\u8108\u4F9B\u61C9\u9EC3\u6591\u3002",{rep:"schematic",snap:!0});F("cra-st","CRA \u9873\u4E0A\u652F","Superior temporal branch","u",["Central retinal artery.l"],[32.7,-43.7,54.8],"\u5F80\u9EC3\u6591\u4E0A\u65B9\u8207\u9873\u4E0A\u65B9\u3002\u6A19\u9EDE\u70BA\u539F\u6A21\u578B CRA \u5728\u6B64\u65B9\u5411\u6700\u8FD1\u7684\u5206\u652F\u3002",{rep:"guide",snap:!0});F("cra-sn","CRA \u9F3B\u4E0A\u652F","Superior nasal branch","u",["Central retinal artery.l"],[25.4,-44.3,55.8],"\u5F80\u9F3B\u4E0A\u65B9\u3002",{rep:"guide",snap:!0});F("cra-it","CRA \u9873\u4E0B\u652F","Inferior temporal branch","u",["Central retinal artery.l"],[33,-52,53.6],"\u5F80\u9EC3\u6591\u4E0B\u65B9\u8207\u9873\u4E0B\u65B9\uFF1B\u9873\u4E0A\u3001\u9873\u4E0B\u652F\u5171\u540C\u74B0\u7E5E\u9EC3\u6591\u3002",{rep:"guide",snap:!0});F("cra-in","CRA \u9F3B\u4E0B\u652F","Inferior nasal branch","u",["Central retinal artery.l"],[24.8,-51.6,54.9],"\u5F80\u9F3B\u4E0B\u65B9\u3002",{rep:"guide",snap:!0});F("cilioretinal","\u776B\u72C0\u8996\u7DB2\u819C\u52D5\u8108","Cilioretinal artery","u",["guide:cilioretinal"],[29.9,-48.4,53.1],"\u5C6C\u776B\u72C0\u5F8C\u77ED\u52D5\u8108\u7CFB\u7D71\uFF08\u5E38\u7D93 Zinn \u74B0\uFF09\uFF0C\u5728\u8996\u795E\u7D93\u76E4\u9873\u5074\u908A\u7DE3\u7368\u7ACB\u51FA\u4F86\u3001\u4E0D\u7D93 CRA\uFF0C\u4F9B\u61C9\u9EC3\u6591\u3002\u7D04 10\u201333%\uFF08\u8B1B\u7FA9\u4E5F\u5BEB 20%\uFF09\u7684\u4EBA\u6709\uFF0C90% \u5728\u9873\u5074\u3002CRA \u963B\u585E\u6642\u53EF\u4FDD\u4F4F\u4E2D\u592E\u8996\u529B\uFF1B\u5B83\u672C\u8EAB\u963B\u585E \u2192 \u4E2D\u592E\u8996\u529B\u55AA\u5931\u3002\u793A\u610F\u3002",{rep:"schematic",snap:!0});F("lamina","\u7BE9\u677F","Lamina cribrosa","u",["guide:lamina"],[28.1,-47.1,51.8],"\u978F\u819C\u5728\u8996\u795E\u7D93\u7A7F\u51FA\u8655\u7684\u7BE9\u72C0\u677F\uFF1B\u8996\u795E\u7D93\u5728\u7BE9\u677F\u524D\u7121\u9AD3\u9798\u3001\u7BE9\u677F\u5F8C\u6709\u9AD3\u9798\u3002\u9019\u6BB5\uFF08\u7BE9\u677F\u524D\uFF0F\u7BE9\u677F\uFF09\u7531\u776B\u72C0\u5F8C\u77ED\u52D5\u8108\uFF08Zinn \u74B0\uFF09\u4F9B\u61C9\u3002\u793A\u610F\u3002",{rep:"schematic",snap:!0});F("hyaloid","\u73BB\u7483\u9AD4\u7BA1\uFF08Cloquet \u7BA1\uFF09","Hyaloid canal","u",["guide:hyaloid"],[29.7,-48,61],"\u80DA\u80CE\u73BB\u7483\u9AD4\u52D5\u8108\u9000\u5316\u5F8C\u7559\u4E0B\u7684\u7BA1\u9053\uFF0C\u5F9E\u8996\u795E\u7D93\u76E4\u5230\u6C34\u6676\u9AD4\u5F8C\u9762\u3002\u793A\u610F\u3002",{rep:"schematic",snap:!0});F("cca","\u9838\u7E3D\u52D5\u8108","Common carotid artery","w",["Left common carotid artery"],[25,-190,8],"\u7D04\u5728\u7532\u72C0\u8EDF\u9AA8\u4E0A\u7DE3\uFF08C4\uFF09\u5206\u6210\u9838\u5167\u8207\u9838\u5916\u52D5\u8108\u3002",{snap:!0});F("carotid-sinus","\u9838\u52D5\u8108\u7AC7","Carotid sinus","w",["guide:carotid-sinus"],[31.6,-149,.2],"\u9838\u5167\u52D5\u8108\u8D77\u59CB\u7684\u81A8\u5927\u8655\uFF0C\u6709\u58D3\u529B\u611F\u53D7\u5668\uFF08CN IX\uFF09\uFF1B\u4E5F\u662F\u52D5\u8108\u7CA5\u72C0\u786C\u5316\u597D\u767C\u8655\uFF0C\u8840\u6813\u53EF\u5F80\u4E0A\u5230\u773C\u52D5\u8108 \u2192 \u4E00\u904E\u6027\u9ED1\u77C7\u3002\u793A\u610F\u3002",{rep:"schematic",snap:!0});F("eca","\u9838\u5916\u52D5\u8108","External carotid artery","w",["External carotid artery.l"],[30,-120,15],"\u4F9B\u61C9\u81C9\u90E8\u8207\u982D\u76AE\uFF1A\u9762\u52D5\u8108\u3001\u4E0A\u9837\u52D5\u8108\u3001\u9873\u6DFA\u52D5\u8108\u7B49\u3002",{snap:!0});F("facial-a","\u9762\u52D5\u8108","Facial artery","w",["Facial artery.l"],[38,-110,45],"\u9838\u5916\u52D5\u8108\u5206\u652F\uFF0C\u7D42\u6BB5\u662F\u5167\u7725\u52D5\u8108\uFF0C\u8207\u773C\u52D5\u8108\u7684\u9F3B\u80CC\u52D5\u8108\u543B\u5408\u3002",{snap:!0});F("maxillary-a","\u4E0A\u9837\u52D5\u8108","Maxillary artery","w",["Maxillary artery.l"],[40,-78,15],"\u9838\u5916\u52D5\u8108\u7D42\u652F\u4E4B\u4E00\uFF1B\u5206\u51FA\u4E2D\u8166\u819C\u52D5\u8108\u3001\u7736\u4E0B\u52D5\u8108\u3002",{snap:!0});F("sta","\u9873\u6DFA\u52D5\u8108","Superficial temporal artery","w",["Superficial temporal artery.l"],[62,-40,0],"\u9838\u5916\u52D5\u8108\u7D42\u652F\u4E4B\u4E00\uFF1B\u5DE8\u7D30\u80DE\u52D5\u8108\u708E\uFF08\u9873\u52D5\u8108\u708E\uFF09\u53EF\u9020\u6210\u7F3A\u8840\u6027\u8996\u795E\u7D93\u75C5\u8B8A\u3002",{snap:!0});F("mma","\u4E2D\u8166\u819C\u52D5\u8108","Middle meningeal artery","w",["Middle meningeal artery.l"],[31,-62,9.7],"\u4E0A\u9837\u52D5\u8108\u5206\u652F\uFF0C\u7A7F\u68D8\u5B54\u5165\u9871\u3002",{snap:!0,via:["spinosum"]});F("ijv","\u9838\u5167\u975C\u8108","Internal jugular vein","w",["Internal jugular vein.l"],[30,-150,-12],"\u7531\u4E59\u72C0\u7AC7\u5EF6\u7E8C\uFF0C\u51FA\u9838\u975C\u8108\u5B54\uFF08\u8207 IX\u3001X\u3001XI \u540C\u5B54\uFF09\u3002",{snap:!0,via:["jugular"]});F("vertebral-w","\u690E\u52D5\u8108","Vertebral artery","wb",["Vertebral artery.l"],[12,-77,-13],"\u5F8C\u5FAA\u74B0\uFF1A\u690E\u52D5\u8108 \u2192 \u57FA\u5E95\u52D5\u8108 \u2192 \u5F8C\u5927\u8166\u52D5\u8108\u3002",{snap:!0});F("basilar","\u57FA\u5E95\u52D5\u8108","Basilar artery","wb",["Basilar artery"],[0,-50,3],"\u5DE6\u53F3\u690E\u52D5\u8108\u532F\u5408\u800C\u6210\uFF0C\u8D70\u5728\u6A4B\u8166\u8179\u5074\u3002",{snap:!0});F("aca","\u524D\u5927\u8166\u52D5\u8108","Anterior cerebral artery","w",["Anterior cerebral artery.l"],[6,-28,29],"\u9838\u5167\u52D5\u8108\u5206\u652F\uFF1B\u5DE6\u53F3\u4EE5\u524D\u4EA4\u901A\u52D5\u8108\u76F8\u9023\u3002",{snap:!0});F("acom","\u524D\u4EA4\u901A\u52D5\u8108","Anterior communicating artery","w",["Anterior communicating artery"],[0,-30,23],"\u9023\u63A5\u5DE6\u53F3 ACA\uFF0C\u662F Willis \u74B0\u7684\u4E00\u6BB5\uFF1B\u4E0D\u662F\u9838\u5167\u52D5\u8108\u7684\u5206\u652F\u3002",{snap:!0});F("mca","\u4E2D\u5927\u8166\u52D5\u8108","Middle cerebral artery","w",["Middle cerebral artery"],[26,-30,22],"\u9838\u5167\u52D5\u8108\u6700\u5927\u5206\u652F\uFF0C\u5F80\u5916\u5074\u3002\u5DE6 MCA \u51FA\u8840 \u2192 \u53F3\u5074\u504F\u7671\uFF0B\u53F3\u534A\u5074\u504F\u76F2\uFF08\u50B7\u5230\u8996\u653E\u5C04\uFF09\u3002",{snap:!0});F("pcom","\u5F8C\u4EA4\u901A\u52D5\u8108","Posterior communicating artery","w",["Posterior communicating artery.l"],[8,-35,15],"\u9023\u63A5\u9838\u5167\u52D5\u8108\u8207\u5F8C\u5927\u8166\u52D5\u8108\u3002",{snap:!0});F("pca","\u5F8C\u5927\u8166\u52D5\u8108","Posterior cerebral artery","wb",["Posterior cerebral artery.l"],[26,-25,-27],"\u57FA\u5E95\u52D5\u8108\u7D42\u652F\uFF0C\u4F9B\u61C9\u6795\u8449\u8996\u89BA\u76AE\u8CEA\u3002",{snap:!0});F("willis","\u5A01\u5229\u6C0F\u74B0","Circle of Willis","w",["Anterior communicating artery","Anterior cerebral artery","Posterior communicating artery","Posterior cerebral artery","Internal carotid artery"],[0,-32,10],"ACom\u3001ACA \u8FD1\u7AEF\u3001ICA \u672B\u7AEF\u3001PCom\u3001PCA \u8FD1\u7AEF\u7D44\u6210\uFF1B\u524D\u5F8C\u5FAA\u74B0\u5728\u6B64\u76F8\u9023\u3002",{rep:"guide",snap:!1});F("heubner","Heubner \u56DE\u8FD4\u52D5\u8108","Recurrent artery of Heubner","b",["guide:heubner"],[10,-26,25],"ACA \u8FD1\u7AEF\u5206\u51FA\u5F8C\u56DE\u8FD4\uFF0C\u4F9B\u61C9\u5C3E\u72C0\u6838\u982D\u3001\u5167\u56CA\u524D\u80A2\u3002\u793A\u610F\u3002",{rep:"schematic",snap:!0});F("lenticulostriate","\u5167\u3001\u5916\u5074\u8C46\u7D0B\u52D5\u8108","Medial & lateral lenticulostriate arteries","b",["Proximal lateral striate branches","Distal lateral striate branches"],[18,-24,24],"MCA \u8D77\u59CB\u6BB5\u7684\u7A7F\u901A\u652F\uFF0C\u4F9B\u61C9\u57FA\u5E95\u6838\u8207\u5167\u56CA\uFF1B\u9AD8\u8840\u58D3\u8166\u51FA\u8840\u597D\u767C\u3002",{snap:!0});F("med-orbitofrontal","\u5167\u5074\u7736\u984D\u52D5\u8108","Medial orbitofrontal artery","b",["Orbitofrontal branches of anterior cerebral artery"],[8,-22,56],"ACA \u5728\u984D\u8449\u5E95\u9762\u7684\u5206\u652F\u3002",{snap:!0});F("lat-orbitofrontal","\u5916\u5074\u7736\u984D\u52D5\u8108","Lateral orbitofrontal artery","b",["guide:lateral-orbitofrontal"],[37,-22,39],"MCA \u5728\u7736\u984D\u5340\u7684\u5206\u652F\u3002\u793A\u610F\u3002",{rep:"schematic",snap:!0});F("candelabra","\u4E0A\u884C\u984D\u52D5\u8108\uFF08\u71ED\u81FA\u5206\u652F\uFF09","Ascending frontal (candelabra) artery","b",["guide:ascending-frontal"],[48,1,23],"MCA \u5F80\u984D\u8449\u4E0A\u884C\u7684\u5206\u652F\u3002\u793A\u610F\u3002",{rep:"schematic",snap:!0});F("acha","\u524D\u8108\u7D61\u53E2\u52D5\u8108","Anterior choroidal artery","b",["guide:acha"],[14,-32,1],"\u76F4\u63A5\u8D77\u81EA\u9838\u5167\u52D5\u8108\uFF08\u570B\u8003\uFF1AAChA \u8D77\u81EA ICA\uFF09\u3002\u4F9B\u61C9\u8996\u675F\u3001\u5916\u5074\u819D\u72C0\u9AD4\u3001\u5167\u56CA\u5F8C\u80A2\u3001\u8108\u7D61\u53E2\u3002\u793A\u610F\u3002",{rep:"schematic",snap:!0});F("post-choroidal","\u5F8C\u8108\u7D61\u53E2\u52D5\u8108","Posterior choroidal arteries","b",["guide:posterior-choroidal"],[14,-20,-25],"PCA \u5206\u652F\uFF0C\u4E5F\u53C3\u8207\u5916\u5074\u819D\u72C0\u9AD4\u8207\u8108\u7D61\u53E2\u4F9B\u8840\u3002\u793A\u610F\u3002",{rep:"schematic",snap:!0});F("sca","\u4E0A\u5C0F\u8166\u52D5\u8108","Superior cerebellar artery","b",["Superior cerebellar artery.l"],[23,-42,-28],"\u57FA\u5E95\u52D5\u8108\u9060\u7AEF\u5206\u652F\u3002",{snap:!0});F("pontine","\u6A4B\u8166\u52D5\u8108","Pontine arteries","b",["Medial pontine branches of basilar artery","Lateral pontine branches of basilar artery"],[7,-49,4],"\u57FA\u5E95\u52D5\u8108\u5230\u6A4B\u8166\u7684\u5167\u3001\u5916\u5074\u5206\u652F\u3002",{snap:!0});F("labyrinthine","\u8FF7\u8DEF\uFF08\u5167\u807D\uFF09\u52D5\u8108","Labyrinthine (internal acoustic) artery","b",["guide:labyrinthine"],[27,-57,-3],"\u5E38\u7531 AICA \u5206\u51FA\uFF0C\u9032\u5167\u8033\u9053\u3002\u793A\u610F\u3002",{rep:"schematic",snap:!0});F("aica","\u524D\u4E0B\u5C0F\u8166\u52D5\u8108","Anterior inferior cerebellar artery","b",["Anterior inferior cerebellar artery.l"],[18,-60,-13],"\u57FA\u5E95\u52D5\u8108\u5206\u652F\u3002",{snap:!0});F("pica","\u5F8C\u4E0B\u5C0F\u8166\u52D5\u8108","Posterior inferior cerebellar artery","b",["Posterior inferior cerebellar artery.l"],[27,-64,-43],"\u690E\u52D5\u8108\u5206\u652F\uFF08\u8B1B\u7FA9\u5716\u4E0A\u7684 cut \u662F\u5207\u65B7\u7AEF\uFF09\u3002",{snap:!0});F("asa","\u524D\u810A\u9AD3\u52D5\u8108","Anterior spinal artery","b",["Anterior spinal artery"],[0,-87,-16],"\u5DE6\u53F3\u690E\u52D5\u8108\u5404\u767C\u4E00\u652F\u5728\u524D\u65B9\u532F\u5408\u3002",{snap:!0});F("psa","\u5F8C\u810A\u9AD3\u52D5\u8108","Posterior spinal artery","b",["guide:psa"],[6,-88,-31],"\u6210\u5C0D\uFF0C\u8D70\u5728\u810A\u9AD3\u5F8C\u5916\u5074\u3002\u793A\u610F\u3002",{rep:"schematic",snap:!0});var zt=Ah.map((i,e)=>({...i,number:e+1})),qs={q:{title:"\u5C0F\u8003 10 \u984C",subtitle:"\u6295\u5F71\u7247\u8207\u5C0F\u8003\u5377\u4E0A\u7684 10 \u500B\u69CB\u9020\uFF0C\u4E00\u6B21\u653E\u5728\u540C\u4E00\u9846\u982D\u88E1",camera:"oblique",bone:.14,cuts:{},cortex:.12,flow:"1 \u8996\u4E73\u7A81\u30002 \u786C\u8166\u819C\u30003 Meyer\u2019s loop\u30004 \u92F8\u9F52\u7DE3\u30005 Gennari \u7DDA\u30006 \u8DDD\u72C0\u6E9D\u30007 \u8996\u4EA4\u53C9\u30008 \u9F3B\u6DDA\u7BA1\u30009 \u4E0A\u9837\u7AC7\u300010 \u8776\u7AC7"},f:{title:"\u9871\u5E95\u5B54\u6D1E",subtitle:"\u79FB\u9664\u9871\u84CB\u8207\u8166\uFF0C\u770B\u6BCF\u689D\u8166\u795E\u7D93\u7A7F\u51FA\u54EA\u500B\u5B54",camera:"top",bone:1,cuts:{y:[-30,!1]},cortex:0,flow:"\u4E00\u7BE9\u4E8C\u8996\u3000\u4E09\u56DB\u4E00\u516D\u7736\u4E0A\u88C2\u3000\u4E8C\u5713\u4E09\u5375\u3000\u4E03\u516B\u5167\u807D\u3000\u4E5D\u5341\u5341\u4E00\u9838\u975C\u8108\u3000\u5341\u4E8C\u820C\u4E0B"},n:{title:"12 \u5C0D\u8166\u795E\u7D93",subtitle:"\u5F9E\u8166\u5E95\u8A8D\u8166\u795E\u7D93\u7684\u767C\u51FA\u4F4D\u7F6E\uFF0C\u518D\u8FFD\u5230\u5B83\u7A7F\u7684\u5B54",camera:"bottom",bone:0,cuts:{},cortex:.18,flow:"I \u55C5\u3000II \u8996\u3000III \u52D5\u773C\u3000IV \u6ED1\u8ECA\u3000V \u4E09\u53C9\u3000VI \u5916\u65CB\u3000VII \u984F\u9762\u3000VIII \u524D\u5EAD\u8033\u8778\u3000IX \u820C\u54BD\u3000X \u8FF7\u8D70\u3000XI \u526F\u3000XII \u820C\u4E0B"},o:{title:"\u773C\u7AA9\u8207\u5171\u540C\u8171\u74B0",subtitle:"\u6380\u958B\u773C\u7AA9\u9802\uFF0C\u770B\u7736\u4E0A\u88C2\u7684\u795E\u7D93\u8AB0\u5728\u8171\u74B0\u5167\u3001\u8AB0\u5728\u8171\u74B0\u5916",camera:"top",bone:1,cuts:{y:[-33,!1]},cortex:0,flow:"\u4E0A\u659C\u56DB\u3001\u5916\u76F4\u516D\u3001\u5176\u4ED6\u4E09\u3000\uFF5C\u3000\u8171\u74B0\u5916\uFF1AIV\u3001\u984D\u3001\u6DDA\u3001\u4E0A\u773C\u975C\u8108\u3000\uFF5C\u3000\u8171\u74B0\u5167\uFF1AIII\u3001\u9F3B\u776B\u3001VI"},e:{title:"\u773C\u7736\u8840\u7BA1",subtitle:"\u773C\u52D5\u8108\u7684\u773C\u7736\u5206\u652F\u3001\u773C\u7736\u975C\u8108\u56DE\u6D41\u3001\u5371\u96AA\u4E09\u89D2 \u2192 \u6D77\u7DBF\u7AC7",camera:"oblique",bone:0,cuts:{},cortex:0,flow:"ICA \u2192 \u773C\u52D5\u8108 \u2192 \u6DDA\u817A\u3001\u7736\u4E0A\u3001\u6ED1\u8ECA\u4E0A\u3001\u7BE9\u3001\u9F3B\u80CC\u3001\u77BC\u52D5\u8108\uFF5C\u975C\u8108\uFF1A\u4E0A\u773C\u975C\u8108 \u2192 \u7736\u4E0A\u88C2 \u2192 \u6D77\u7DBF\u7AC7\uFF1B\u4E0B\u773C\u975C\u8108 \u2192 \u6D77\u7DBF\u7AC7\uFF0F\u7FFC\u975C\u8108\u53E2\uFF1B\u5167\u7725\u975C\u8108 \u2194 \u9762\u975C\u8108"},k:{title:"\u773C\u7403\u8840\u7BA1",subtitle:"\u776B\u72C0\u5FAA\u74B0\uFF1A\u524D\uFF0F\u5F8C\u3001\u9577\uFF0F\u77ED\u776B\u72C0\u52D5\u8108\uFF0C\u8679\u819C\u52D5\u8108\u74B0\uFF0CZinn \u74B0\uFF0C\u6E26\u975C\u8108\uFF1B\u773C\u7403\u534A\u900F\u660E\u53EF\u898B",camera:"oblique",bone:0,cuts:{},cortex:0,flow:"\u776B\u72C0\u5F8C\u77ED \u2192 \u8108\u7D61\u819C\u3001\u8996\u795E\u7D93\u982D\uFF08Zinn \u74B0\uFF09\uFF5C\u776B\u72C0\u5F8C\u9577\uFF0B\u776B\u72C0\u524D\uFF087 \u689D\uFF09\u2192 \u8679\u819C\u5927\u52D5\u8108\u74B0 \u2192 \u5C0F\u52D5\u8108\u74B0\uFF5C\u56DE\u6D41\uFF1A\u6E26\u975C\u8108\u3001\u776B\u72C0\u524D\u975C\u8108\u3001Schlemm \u7BA1"},u:{title:"\u8996\u7DB2\u819C\u8207\u773C\u5E95",subtitle:"\u773C\u5E95\u93E1\u8996\u89D2\uFF08\u51A0\u72C0\u5207\u958B\u773C\u7403\uFF09\uFF1A\u8996\u795E\u7D93\u76E4\u3001\u676F\u76E4\u6BD4\u3001\u9EC3\u6591\u3001CRA \u56DB\u5206\u652F\u3001\u776B\u72C0\u8996\u7DB2\u819C\u52D5\u8108",camera:"front",bone:0,cuts:{z:[61,!0]},cortex:0,panel:"retina",flow:"\u5167\u5C64\u8996\u7DB2\u819C \u2190 \u8996\u7DB2\u819C\u4E2D\u592E\u52D5\u8108\uFF5C\u5916\u5C64\uFF08RPE\u3001\u611F\u5149\u7D30\u80DE\uFF09\u2190 \u8108\u7D61\u819C\u5FAE\u8840\u7BA1\u53E2\uFF08Bruch \u819C\uFF09\uFF5C\u9EC3\u6591\u4E2D\u592E\u51F9\u7121\u8840\u7BA1"},c:{title:"\u6D77\u7DBF\u7AC7\u8207\u8776\u978D",subtitle:"\u51A0\u72C0\u5207\u9762\uFF1A\u5916\u5074\u58C1 III\u2192IV\u2192V1\u2192V2\uFF0C\u8154\u5167 ICA\uFF0BVI\uFF1B\u5728\u300C\u5207\u9762\u300D\u53EF\u524D\u5F8C\u79FB\u52D5",camera:"front",bone:1,cuts:{z:[20,!0]},cortex:0,flow:"\u5916\u58C1\u4E09\u56DB\u4E00\u4E8C\uFF0C\u88E1\u9762\u516D\u548C\u9838\u5167\u52D5\u8108\u3000\uFF5C\u3000\u8776\u7AC7 \u2192 \u8776\u978D \u2192 \u8166\u4E0B\u5782\u9AD4"},g:{title:"\u776B\u72C0\u795E\u7D93\u7BC0\u8207\u77B3\u5B54\u53CD\u5C04",subtitle:"\u7531\u4E0A\u5F80\u4E0B\u770B\uFF1A\u4E09\u7A2E\u6839\u3001\u9577\u77ED\u776B\u72C0\u795E\u7D93\u3001\u4E0A\u4E18\u4E09\u4E0B\u4E18\u56DB",camera:"top",bone:0,cuts:{},cortex:0,flow:"\u5149 \u2192 \u8996\u7DB2\u819C \u2192 CN II \u2192 \u9802\u84CB\u524D\u5340 \u2192 \u5169\u5074 EW \u6838 \u2192 CN III \u2192 \u776B\u72C0\u795E\u7D93\u7BC0 \u2192 \u77ED\u776B\u72C0\u795E\u7D93 \u2192 \u77B3\u5B54\u62EC\u7D04\u808C"},v:{title:"\u8996\u89BA\u8DEF\u5F91\u8207\u76AE\u8CEA",subtitle:"\u5F9E\u8996\u795E\u7D93\u56DB\u6BB5\u5230 V1\uFF0C\u6954\u8449\u5728\u4E0A\u770B\u4E0B\u9762\u3001\u820C\u56DE\u5728\u4E0B\u770B\u4E0A\u9762",camera:"top",bone:0,cuts:{},cortex:.12,flow:"\u8996\u7DB2\u819C \u2192 \u8996\u795E\u7D93 \u2192 \u8996\u4EA4\u53C9 \u2192 \u8996\u675F \u2192 LGN \u2192 \u8996\u653E\u5C04 \u2192 V1\uFF08BA17\uFF09"},w:{title:"\u9838\u90E8\u8207 Willis \u74B0",subtitle:"\u9838\u7E3D \u2192 \u9838\u5167\uFF0F\u9838\u5916\u52D5\u8108\uFF1B\u9838\u5167\u52D5\u8108\u56DB\u5206\u652F\uFF1BWillis \u74B0",camera:"left",bone:.12,cuts:{},cortex:0,flow:"\u9838\u5167\u52D5\u8108\u5206\u652F\uFF1A\u524D\u5927\u8166\u3001\u4E2D\u5927\u8166\u3001\u773C\u52D5\u8108\u3001\u524D\u8108\u7D61\u53E2\uFF5C\u5F8C\u5FAA\u74B0\uFF1A\u690E\u52D5\u8108 \u2192 \u57FA\u5E95\u52D5\u8108 \u2192 \u5F8C\u5927\u8166\u52D5\u8108"},b:{title:"\u8166\u5E95\u52D5\u8108\u5206\u652F",subtitle:"\u8B1B\u7FA9\u8166\u5E95\u8840\u7BA1\u5716\u7684\u7D30\u90E8\u5206\u652F",camera:"bottom",bone:0,cuts:{},cortex:.1,flow:"\u5BE6\u7DDA\u70BA\u539F\u6A21\u578B\u8840\u7BA1\uFF1B\u6DE1\u7D2B\u8272\u70BA\u793A\u610F"}},Ch=["q","f","n","o","e","k","u","c","g","v","w","b"];var ja={x:30.55,y:-49.3,z:63.3,r:12.4},Rh=(i,e)=>[i,e,+(ja.z-Math.sqrt(Math.max(0,ja.r**2-(i-ja.x)**2-(e-ja.y)**2))).toFixed(2)];function Ih(){let i=[],e=(s,r=1)=>new en({color:s,roughness:.5,metalness:.03,transparent:r<1,opacity:r});function t(s,r,a,o,c,l,h=[],u=!1){let f=new gn(r.map(g=>new w(...g)),u),d=new rt(new Ln(f,Math.max(24,r.length*10),a,8,u),e(o));return d.name=s,d.userData={category:c,themes:l,tags:[s,...h],schematic:!0,baseColor:o},i.push(d),d}function n(s,r,a,o,c,l="reflex-guide"){let h=new rt(new _n(a,20,14),e(o));return h.position.set(...r),h.name=s,h.userData={category:l,themes:c,tags:[s],schematic:!0,baseColor:o},i.push(h),h}for(let s of[1,-1]){let r=s>0?".l":".r",a=h=>h.map(([u,f,d])=>[s*u,f,d]);for(let h=0;h<5;h++)t("guide:meyer"+r+h,a([[19,-28,-13],[27+h*.5,-30,4],[35+h,-33,13],[40+h,-34,-12],[34+h,-32,-47],[12+h*.8,-28,-79]]),1.05,16740559,"path-guide","qv",["guide:radiation"]),t("guide:baum"+r+h,a([[19,-28,-13],[28+h,-17,-22],[34+h,-3,-39],[28+h,-6,-61],[10+h*.8,-17,-79]]),1.05,3798479,"path-guide","v",["guide:radiation"]);for(let[h,u,f,d]of[["ciliary",5.9,69,9291763],["sphincter",2.1,74,15317122]]){let g=[];for(let x=0;x<40;x++){let m=x/40*Math.PI*2;g.push([s*31+u*Math.cos(m),-49+u*Math.sin(m),f])}t("guide:"+h+r,g,.45,d,"reflex-guide","g",[],!0)}t("guide:lacrimal-n"+r,a([[16.6,-42.4,23.2],[20,-41.5,30],[26,-39.5,40],[33,-38.2,50],[38.5,-37.8,58],[41.5,-37.4,64]]),.55,16751317,"orbit-guide","o"),t("guide:nasociliary"+r,a([[14,-42.6,17.9],[15.8,-41.6,27],[16.3,-40.8,33.9],[17.8,-38.8,42],[15.5,-38.5,50],[13,-37.5,58],[12,-37,63]]),.55,16769899,"orbit-guide","og");let o=[22.4,-43,40.5];n("guide:ganglion"+r,a([o])[0],1.35,8373488,"g"),t("guide:root-para"+r,a([[24.1,-49.1,42.3],[23.6,-46.5,41.6],o]),.42,7321343,"reflex-guide","g"),t("guide:root-sens"+r,a([[17.3,-40,38],[19.8,-40.8,39.4],o]),.38,16769899,"reflex-guide","g"),t("guide:root-symp"+r,a([[13.8,-39.7,34.2],[17.5,-42,37.6],o]),.34,16739179,"reflex-guide","g"),[[-2.6,1.8],[-1,2.8],[1.2,2.2],[2.2,-.6],[-2.2,-1.8]].forEach(([h,u],f)=>{let d=Rh(28.3+h,-46.2+u);t("guide:short-ciliary"+r+f,a([o,[24.2+h*.3,-44+u*.3,45.5],d]),.28,10475775,"reflex-guide","g")}),[[23.6,-42.2],[22.4,-44]].forEach(([h,u],f)=>t("guide:long-ciliary"+r+f,a([[17.8,-38.8,42],[20.6,-40.4,47],Rh(h,u)]),.28,16761707,"reflex-guide","g")),n("guide:pretectal"+r,a([[4.2,-25.5,-12]])[0],1.6,15960927,"g");let c=t("guide:on-sheath"+r,a([[10.6,-35.9,28.7],[15.6,-39.3,36.2],[20.3,-42,41.5],[25,-44.6,46.8],[27.3,-45.7,51.4]]),1.75,12101340,"dura-guide","qv");c.material.transparent=!0,c.material.opacity=.42,c.material.depthWrite=!1,c.userData.fixedOpacity=.42;let l=new rt(new _n(1,24,16),e(5753087,.38));l.scale.set(7,8,9),l.position.set(s*23,-73,59),l.name="guide:maxsinus"+r,l.userData={category:"sinus-guide",themes:"qo",tags:["guide:maxsinus"+r],schematic:!0,baseColor:5753087,fixedOpacity:.38},i.push(l)}return t("guide:transsphenoidal",[[0,-62,96],[0,-58,72],[0,-51,46],[0,-46,31],[0,-43,20]],.8,7332762,"path-guide","c"),i}function Ph(i){let e=i.geometry.attributes.position,t=i.name.endsWith(".r")?".r":".l",n=-1/0,s=0,r=0,a=0;for(let u=0;u<e.count;u++)n=Math.max(n,e.getZ(u));let o=[];for(let u=0;u<e.count;u++)e.getZ(u)>n-.7&&(o.push([e.getX(u),e.getY(u),e.getZ(u)]),s+=e.getX(u),r+=e.getY(u),a++);s/=a,r/=a;let c=Array.from({length:36},()=>[0,0,0,0]);for(let[u,f,d]of o){let g=c[Math.floor((Math.atan2(f-r,u-s)+Math.PI)/(2*Math.PI)*36)%36];g[0]+=u,g[1]+=f,g[2]+=d,g[3]++}let l=c.filter(u=>u[3]).map(u=>new w(u[0]/u[3],u[1]/u[3],u[2]/u[3])),h=new rt(new Ln(new gn(l,!0),120,.42,8,!0),new en({color:16762941,roughness:.4}));return h.name="guide:ora"+t,h.userData={category:"eye-guide",themes:"qvgk",tags:["guide:ora"+t],schematic:!0,baseColor:16762941},h}var J=(i,e)=>`<button class="go" data-go="${i}">${e}</button>`,Lh=`
<h3>\u5C0F\u8003 10 \u984C</h3>
<table><tr><th>#</th><th>\u7B54\u6848</th><th>\u6A21\u578B</th></tr>
<tr><td>1</td><td>\u8996\u4E73\u7A81 optic papilla\uFF08\u8996\u795E\u7D93\u76E4\uFF09</td><td>${J("optic-papilla","\u770B\u4F4D\u7F6E")}</td></tr>
<tr><td>2</td><td>\u786C\u8166\u819C dura mater</td><td>${J("dura","\u770B\u4F4D\u7F6E")}</td></tr>
<tr><td>3</td><td>\u6885\u6C0F\u74B0 Meyer\u2019s loop\uFF08\u4E0D\u662F Baum\u2019s loop\uFF09</td><td>${J("meyer","\u770B\u4F4D\u7F6E")}</td></tr>
<tr><td>4</td><td>\u92F8\u9F52\u7DE3 ora serrata</td><td>${J("ora-serrata","\u770B\u4F4D\u7F6E")}</td></tr>
<tr><td>5</td><td>Gennari \u7DDA line of Gennari</td><td>${J("gennari","\u770B\u4F4D\u7F6E")}</td></tr>
<tr><td>6</td><td>\u8DDD\u72C0\u6E9D calcarine sulcus</td><td>${J("calcarine","\u770B\u4F4D\u7F6E")}</td></tr>
<tr><td>7</td><td>\u8996\u4EA4\u53C9 optic chiasm</td><td>${J("chiasm","\u770B\u4F4D\u7F6E")}</td></tr>
<tr><td>8</td><td>\u9F3B\u6DDA\u7BA1 nasolacrimal duct</td><td>${J("nasolacrimal","\u770B\u4F4D\u7F6E")}</td></tr>
<tr><td>9</td><td>\u4E0A\u9837\u7AC7 maxillary sinus</td><td>${J("maxillary-sinus","\u770B\u4F4D\u7F6E")}</td></tr>
<tr><td>10</td><td>\u8776\u7AC7 sphenoidal sinus</td><td>${J("sphenoid-sinus","\u770B\u4F4D\u7F6E")}</td></tr></table>

<h3>\u9871\u5E95\u5B54\u6D1E\uFF1A\u795E\u7D93\u7A7F\u904E\u54EA\u500B\u5B54</h3>
<table><tr><th>\u5B54</th><th>\u901A\u904E</th><th>\u6A21\u578B</th></tr>
<tr><td>\u7BE9\u677F\u7BE9\u5B54</td><td>CN I</td><td>${J("cribriform","\u770B\u5B54")}</td></tr>
<tr><td>\u8996\u795E\u7D93\u7BA1</td><td>CN II\uFF0B\u773C\u52D5\u8108\uFF08\uFF0B\u4EA4\u611F\u7E96\u7DAD\uFF09</td><td>${J("optic-canal","\u770B\u5B54")}</td></tr>
<tr><td>\u7736\u4E0A\u88C2</td><td>III\u3001IV\u3001V1\u3001VI\uFF08\uFF0B\u4E0A\u773C\u975C\u8108\uFF09</td><td>${J("sof","\u770B\u5B54")}</td></tr>
<tr><td>\u5713\u5B54</td><td>V2</td><td>${J("rotundum","\u770B\u5B54")}</td></tr>
<tr><td>\u5375\u5713\u5B54</td><td>V3</td><td>${J("ovale","\u770B\u5B54")}</td></tr>
<tr><td>\u68D8\u5B54</td><td>\u4E2D\u8166\u819C\u52D5\u8108</td><td>${J("spinosum","\u770B\u5B54")}</td></tr>
<tr><td>\u5167\u8033\u9053</td><td>VII\u3001VIII</td><td>${J("iam","\u770B\u5B54")}</td></tr>
<tr><td>\u9838\u975C\u8108\u5B54</td><td>IX\u3001X\u3001XI</td><td>${J("jugular","\u770B\u5B54")}</td></tr>
<tr><td>\u820C\u4E0B\u795E\u7D93\u7BA1</td><td>XII</td><td>${J("hypoglossal-canal","\u770B\u5B54")}</td></tr></table>
<p class="mnemonic">\u4E00\u7BE9\u4E8C\u8996\u3000\u4E09\u56DB\u4E00\u516D\u7736\u4E0A\u88C2\u3000\u4E8C\u5713\u4E09\u5375\u3000\u4E03\u516B\u5167\u807D\u3000\u4E5D\u5341\u5341\u4E00\u9838\u975C\u8108\u3000\u5341\u4E8C\u820C\u4E0B<br><small>\uFF08\u4E00\uFF1DV1\u3001\u4E8C\uFF1DV2\u3001\u4E09\uFF1DV3\uFF09</small></p>

<h3>\u7736\u4E0A\u88C2\uFF0B\u5171\u540C\u8171\u74B0</h3>
<table><tr><th>\u8171\u74B0\u5916</th><th>\u8171\u74B0\u5167</th></tr>
<tr><td>${J("orb-4","IV \u6ED1\u8ECA\u795E\u7D93")}</td><td>${J("cn3-sup","III \u4E0A\u652F")}\u3000${J("cn3-inf","III \u4E0B\u652F")}</td></tr>
<tr><td>${J("frontal-n","\u984D\u795E\u7D93\uFF08V1\uFF09")}</td><td>${J("nasociliary","\u9F3B\u776B\u795E\u7D93\uFF08V1\uFF09")}</td></tr>
<tr><td>${J("lacrimal-n","\u6DDA\u795E\u7D93\uFF08V1\uFF09")}</td><td>${J("orb-6","VI \u5916\u65CB\u795E\u7D93")}</td></tr>
<tr><td>${J("sov","\u4E0A\u773C\u975C\u8108")}</td><td>\uFF08\u8996\u795E\u7D93\u8207\u773C\u52D5\u8108\u4E5F\u5728\u8171\u74B0\u5167\uFF0C\u4F46\u8D70\u8996\u795E\u7D93\u7BA1\uFF09</td></tr></table>
<p><b>\u5C0F\u4FEE\u6B63\uFF1A</b>V1 \u5176\u5BE6\u5728\u9032\u5165\u7736\u4E0A\u88C2<em>\u4E4B\u524D</em>\uFF08\u6D77\u7DBF\u7AC7\u524D\u7AEF\uFF09\u5C31\u5206\u6210\u984D\u3001\u6DDA\u3001\u9F3B\u776B\u4E09\u652F\uFF0C\u6240\u4EE5\u4E09\u652F\u624D\u80FD\u5206\u5225\u8D70\u8171\u74B0\u5916\u6216\u8171\u74B0\u5167\u3002</p>

<h3>\u773C\u5916\u808C\uFF1A\u4E0A\u659C\u56DB\u3001\u5916\u76F4\u516D\u3001\u5176\u4ED6\u4E09</h3>
<p>SO4 LR6 AO3\u3002${J("so","\u4E0A\u659C\u808C \u2192 IV")}\u3000${J("lr","\u5916\u76F4\u808C \u2192 VI")}\u3000\u5176\u4ED6\uFF08${J("sr","\u4E0A\u76F4")}\u3001${J("ir","\u4E0B\u76F4")}\u3001${J("mr","\u5167\u76F4")}\u3001${J("io","\u4E0B\u659C")}\u3001${J("lps","\u63D0\u4E0A\u77BC\u808C")}\uFF09\u2192 III\u3002\u6A21\u578B\u600E\u9EBC\u7FFB\u90FD\u4E00\u6A23\uFF1A\u770B\u795E\u7D93\u6700\u5F8C\u9032\u54EA\u689D\u808C\u8089\u3002\u6DDA\u817A\u5728\u773C\u7AA9\u5916\u4E0A\u65B9\uFF0C\u53EF\u7528\u4F86\u5224\u65B7 lateral\u3002</p>

<h3>\u773C\u90E8\u8840\u7BA1</h3>
<table><tr><th>\u8840\u7BA1</th><th>\u4F86\u6E90\uFF0F\u8D70\u5411</th><th>\u4F9B\u61C9</th></tr>
<tr><td>${J("cra","\u8996\u7DB2\u819C\u4E2D\u592E\u52D5\u8108")}</td><td>\u773C\u52D5\u8108\u7B2C\u4E00\u5206\u652F\uFF1B\u773C\u7403\u5F8C\u7D04 1 cm \u7A7F\u5165\u8996\u795E\u7D93</td><td>\u8996\u7DB2\u819C\u5167 2/3\uFF08\u7D42\u52D5\u8108\uFF1A\u963B\u585E \u2192 \u6AFB\u6843\u7D05\u6591\uFF09</td></tr>
<tr><td>${J("spca","\u776B\u72C0\u5F8C\u77ED\u52D5\u8108")}</td><td>15\u201320 \u689D\uFF0C\u8996\u795E\u7D93\u5468\u570D\u7A7F\u978F\u819C\uFF1B\u5F62\u6210 ${J("zinn","Zinn-Haller \u74B0")}</td><td>\u8108\u7D61\u819C\uFF08\u2192 \u8996\u7DB2\u819C\u5916\u5C64\u3001\u611F\u5149\u7D30\u80DE\uFF09\u3001\u8996\u795E\u7D93\u982D</td></tr>
<tr><td>${J("lpca","\u776B\u72C0\u5F8C\u9577\u52D5\u8108")}</td><td>\u5167\u3001\u5916\u5074\u5404 1 \u689D\uFF0C\u6CBF\u6C34\u5E73\u7D93\u7DDA\u5F80\u524D</td><td>\u776B\u72C0\u9AD4\u3001\u8679\u819C\uFF08\u52A0\u5165\u5927\u52D5\u8108\u74B0\uFF09</td></tr>
<tr><td>${J("aca","\u776B\u72C0\u524D\u52D5\u8108")}</td><td>\u4F86\u81EA ${J("muscular","\u808C\u652F")}\uFF0C\u6CBF\u76F4\u808C\u808C\u8171\uFF1B\u4E0A\u3001\u4E0B\u3001\u5167\u76F4\u808C\u5404 2\u3001\u5916\u76F4\u808C 1 = 7 \u689D</td><td>\u524D\u6BB5\uFF1A\u52A0\u5165 ${J("mac","\u8679\u819C\u5927\u52D5\u8108\u74B0")}\uFF1B\u7D50\u819C\u3001\u978F\u819C\u8868\u5C64</td></tr>
<tr><td>${J("mic","\u8679\u819C\u5C0F\u52D5\u8108\u74B0")}</td><td>\u5927\u52D5\u8108\u74B0\u767C\u51FA\u653E\u5C04\u652F\uFF0C\u5728\u9818\u72C0\u7DE3\u9023\u6210</td><td>\u8679\u819C</td></tr>
<tr><td>${J("lacrimal-a","\u6DDA\u817A\u52D5\u8108")}</td><td>\u6CBF\u5916\u76F4\u808C\u4E0A\u7DE3</td><td>\u6DDA\u817A\u3001${J("lat-palp","\u77BC\u5916\u5074\u52D5\u8108")}</td></tr>
<tr><td>${J("supraorbital-a","\u7736\u4E0A")}\u3001${J("supratrochlear-a","\u6ED1\u8ECA\u4E0A")}\u3001${J("dorsal-nasal","\u9F3B\u80CC")}\u3001${J("med-palp","\u77BC\u5167\u5074")}</td><td>\u773C\u52D5\u8108\u7D42\u652F</td><td>\u984D\u90E8\u3001\u773C\u77BC\u3001\u9F3B\u80CC\uFF08\u9F3B\u80CC\u52D5\u8108\u8207${J("angular-a","\u5167\u7725\u52D5\u8108")}\u543B\u5408\uFF1A\u9838\u5167\uFF0B\u9838\u5916\uFF09</td></tr>
<tr><td>${J("ethmoidal-a","\u524D\uFF0F\u5F8C\u7BE9\u52D5\u8108")}</td><td>\u7D93\u5167\u5074\u58C1\u7BE9\u5B54</td><td>\u7BE9\u7AC7\u3001\u9F3B\u8154</td></tr></table>
<p>\u975C\u8108\uFF1A${J("crv","\u8996\u7DB2\u819C\u4E2D\u592E\u975C\u8108")} \u2192 \u4E0A\u773C\u975C\u8108\u6216\u6D77\u7DBF\u7AC7\uFF1B${J("vortex","\u6E26\u975C\u8108")}\uFF08\u6BCF\u8C61\u9650 1 \u689D\uFF0C\u8D64\u9053\u5F8C\uFF09\u2192 \u4E0A\uFF0F\u4E0B\u773C\u975C\u8108\uFF1B${J("sov","\u4E0A\u773C\u975C\u8108")}\u7D93\u7736\u4E0A\u88C2\u5165\u6D77\u7DBF\u7AC7\uFF0C${J("iov","\u4E0B\u773C\u975C\u8108")}\u901A\u7FFC\u975C\u8108\u53E2\u3002\u773C\u7736\u8207\u81C9\u90E8\u975C\u8108\u7121\u74E3\u819C \u2192 \u9762\u90E8\u300C\u5371\u96AA\u4E09\u89D2\u300D\u611F\u67D3\u53EF\u7D93\u6B64\u5230\u6D77\u7DBF\u7AC7\u3002</p>
<p class="mnemonic">\u8996\u7DB2\u819C\u5167\u5C64\u9760 CRA\uFF0C\u5916\u5C64\u9760\u8108\u7D61\u819C\uFF08\u776B\u72C0\u5F8C\u77ED\uFF09\u3002<br>\u5927\u52D5\u8108\u74B0 = \u776B\u72C0\u5F8C\u9577\uFF0B\u776B\u72C0\u524D\uFF1B\u776B\u72C0\u524D 7 \u689D\uFF08\u5916\u76F4\u808C\u53EA\u6709 1 \u689D\uFF09\u3002</p>

<h3>\u8166\u8207\u9838\u90E8\u52D5\u8108\uFF08\u8B1B\u7FA9\u7B2C 2\u201324 \u9801\uFF09</h3>
<p>\u9838\u7E3D\u52D5\u8108 \u2192 ${J("ica","\u9838\u5167\u52D5\u8108")}\uFF0B${J("eca","\u9838\u5916\u52D5\u8108")}\uFF1B${J("carotid-sinus","\u9838\u52D5\u8108\u7AC7")}\u5728\u5206\u53C9\u8655\u3002\u9838\u5167\u52D5\u8108\u56DB\u5206\u652F\uFF1A${J("aca","\u524D\u5927\u8166")}\u3001${J("mca","\u4E2D\u5927\u8166")}\u3001${J("ophthalmic-a","\u773C\u52D5\u8108")}\u3001${J("acha","\u524D\u8108\u7D61\u53E2\u52D5\u8108")}\u3002\u5F8C\u5FAA\u74B0\uFF1A${J("vertebral-w","\u690E\u52D5\u8108")} \u2192 ${J("basilar","\u57FA\u5E95\u52D5\u8108")} \u2192 ${J("pca","\u5F8C\u5927\u8166\u52D5\u8108")}\u3002${J("willis","Willis \u74B0")}\uFF1DACom\uFF0BACA\uFF0BICA\uFF0BPCom\uFF0BPCA\u3002\u9838\u5916\uFF1A${J("facial-a","\u9762\u52D5\u8108")}\u3001${J("maxillary-a","\u4E0A\u9837\u52D5\u8108")}\uFF08\u2192 ${J("mma","\u4E2D\u8166\u819C\u52D5\u8108")}\u3001\u7736\u4E0B\u52D5\u8108\uFF09\u3001${J("sta","\u9873\u6DFA\u52D5\u8108")}\u3002</p>

<h3>\u570B\u8003\u984C\uFF08\u8B1B\u7FA9\u9644\u984C\uFF09</h3>
<table><tr><th>\u984C\u76EE</th><th>\u7B54\u6848</th></tr>
<tr><td>\u4E0B\u5217\u4F55\u8005\u4E0D\u662F\u5167\u9838\u52D5\u8108\u7684\u5206\u652F\uFF1F\u773C\u52D5\u8108\uFF0F\u4E2D\u5927\u8166\uFF0F\u524D\u8108\u7D61\u53E2\uFF0F\u524D\u4EA4\u901A</td><td><b>D \u524D\u4EA4\u901A\u52D5\u8108</b>\uFF08\u9023\u63A5\u5DE6\u53F3 ACA\uFF09</td></tr>
<tr><td>\u524D\u8108\u7D61\u53E2\u52D5\u8108\u76F4\u63A5\u8D77\u81EA\uFF1F</td><td><b>B \u9838\u5167\u52D5\u8108</b></td></tr>
<tr><td>\u4F55\u8005\u56B4\u91CD\u75C5\u8B8A\u58D3\u8FEB\u8996\u795E\u7D93\u53EF\u5F15\u8D77\u5DE6\u55AE\u773C\u5168\u76F2\uFF1F\u2460\u53F3\u773C\u52D5\u8108\u7624 \u2461\u5DE6\u773C\u52D5\u8108\u7624 \u2462\u53F3 AChA \u963B\u585E \u2463\u5DE6 AChA \u963B\u585E</td><td><b>B \u50C5\u2461</b>\uFF08AChA \u963B\u585E\u50B7\u8996\u675F \u2192 \u540C\u5074\u504F\u76F2\uFF0C\u4E0D\u662F\u55AE\u773C\uFF09</td></tr>
<tr><td>\u53EF\u652F\u914D\u5916\u5074\u819D\u72C0\u9AD4\u7684\u5FAA\u74B0\uFF1F\u2460MCA \u2461ACA \u2462AChA \u2463\u9838\u5916\u52D5\u8108</td><td><b>C \u50C5\u2462</b></td></tr>
<tr><td>\u53EF\u652F\u914D\u8996\u89BA\u76AE\u8CEA\u7684\u5FAA\u74B0\uFF1F\u2460AChA \u2461\u5F8C\u8108\u7D61\u53E2 \u2462PCA</td><td><b>D \u50C5\u2462</b></td></tr>
<tr><td>\u5DE6 MCA \u51FA\u8840\u3001\u53F3\u534A\u5074\u80A2\u9AD4\u9EBB\u75FA\uFF0B\u8996\u91CE\u7F3A\u640D\uFF0C\u6700\u53EF\u80FD\uFF1F</td><td><b>B \u53F3\u534A\u5074\u504F\u76F2\uFF1B\u8996\u653E\u5C04</b></td></tr>
<tr><td>\u53C3\u8207\u5916\u53E2\u72C0\u5C64\u8A0A\u606F\u50B3\u905E\u7684\u7D30\u80DE\uFF1F\u2460\u611F\u5149 \u2461\u96D9\u6975 \u2462\u6C34\u5E73 \u2463\u7121\u8EF8\u7A81 \u2464\u795E\u7D93\u7BC0</td><td><b>A \u2460\u2461\u2462</b>\uFF08\u2463\u2464\u5728\u5167\u53E2\u72C0\u5C64\uFF09</td></tr>
<tr><td>\u8996\u89BA\u5FAA\u74B0\uFF08visual cycle\uFF09\u4E3B\u8981\u9700\u8981\u54EA\u5169\u7A2E\u7D30\u80DE\uFF1F</td><td><b>B \u8272\u7D20\u4E0A\u76AE\u7D30\u80DE\u8207 M\xFCller \u7D30\u80DE</b></td></tr></table>

<h3>\u8996\u795E\u7D93\u5404\u6BB5\u7684\u8840\u6DB2\u4F9B\u61C9</h3>
<table><tr><th>\u6BB5</th><th>\u9577\u5EA6\uFF0F\u76F4\u5F91 (mm)</th><th>\u8840\u6DB2\u4F9B\u61C9</th></tr>
<tr><td>\u773C\u7403\u5167\uFF08\u8996\u76E4\u3001\u7BE9\u677F\u524D\u3001\u7BE9\u677F\uFF09</td><td>1.0 \uFF0F 1.5\xD71.75</td><td>\u8996\u7DB2\u819C\u5C0F\u52D5\u8108\uFF0B${J("spca","\u776B\u72C0\u5F8C\u77ED\u52D5\u8108")}\uFF08${J("zinn","Zinn \u74B0")}\uFF09</td></tr>
<tr><td>\u773C\u7AA9\u5167</td><td>25 \uFF0F 3\u20134</td><td>CRA \u7684\u795E\u7D93\u5167\u5206\u652F\uFF1B\u8EDF\u8166\u819C\u8840\u7BA1\uFF08\u4F86\u81EA CRA \u8207\u8108\u7D61\u819C\uFF09</td></tr>
<tr><td>\u8996\u795E\u7D93\u7BA1\u5167</td><td>4\u201310</td><td>\u773C\u52D5\u8108</td></tr>
<tr><td>\u9871\u5167</td><td>10 \uFF0F 4\u20137</td><td>\u9838\u5167\u52D5\u8108\u8207\u773C\u52D5\u8108\u7684\u5206\u652F</td></tr></table>

<h3>\u8996\u7DB2\u819C\u7684\u8840\u6DB2\u4F9B\u61C9</h3>
<p>\u5169\u500B\u7CFB\u7D71\uFF1A${J("cra","\u8996\u7DB2\u819C\u4E2D\u592E\u52D5\u8108")}\uFF08\u5F9E\u8996\u4E73\u7A81\u9032\u5165\uFF0C\u7531\u5167\u5F80\u5916\u4F9B\u61C9\u5230\u5167\u6838\u5C64\uFF09\u8207${J("choroid","\u8108\u7D61\u819C\u5FAE\u8840\u7BA1\u53E2")}\uFF08\u776B\u72C0\u52D5\u8108\u5F62\u6210\uFF1B\u8207\u8272\u7D20\u4E0A\u76AE\u4E4B\u9593\u6C92\u6709\u5FAE\u8840\u7BA1\uFF0C\u9760\u7A7F\u904E Bruch \u819C\u64F4\u6563\u4F9B\u61C9\u8272\u7D20\u4E0A\u76AE\u8207\u611F\u5149\u7D30\u80DE\uFF09\u3002\u5916\u53E2\u72C0\u5C64\u5169\u8005\u90FD\u6709\u3002${J("macula","\u9EC3\u6591")}\u6C92\u6709 CRA \u7684\u5206\u652F\uFF08\u4E2D\u592E\u51F9\u7121\u8840\u7BA1\uFF09\uFF0C\u7531\u9873\u4E0A\uFF0F\u9873\u4E0B\u652F\u74B0\u7E5E\u3001\u8108\u7D61\u819C\u4F9B\u61C9\uFF1B\u7D04 20% \u7684\u4EBA\u53E6\u6709${J("cilioretinal","\u776B\u72C0\u8996\u7DB2\u819C\u52D5\u8108")}\u3002CRA \u5728\u773C\u5E95\u5206\u6210${J("cra-st","\u9873\u4E0A")}\u3001${J("cra-sn","\u9F3B\u4E0A")}\u3001${J("cra-it","\u9873\u4E0B")}\u3001${J("cra-in","\u9F3B\u4E0B")}\u56DB\u652F\u3002\u8996\u7DB2\u819C\u5FAE\u8840\u7BA1\u5206\u6DFA\u3001\u4E2D\u3001\u6DF1\u4E09\u5C64\u3002</p>
<p>\u8840\u6DB2\uFF0D\u8996\u7DB2\u819C\u5C4F\u969C\uFF1A\u5167\u5C64\uFF1D\u8996\u7DB2\u819C\u5FAE\u8840\u7BA1\u5167\u76AE\uFF08\u7DCA\u5BC6\u63A5\u5408\uFF09\u3001\u5468\u7D30\u80DE\u3001M\xFCller \u7D30\u80DE\u3001\u661F\u72C0\u7D30\u80DE\uFF1B\u5916\u5C64\uFF1D\u8272\u7D20\u4E0A\u76AE\uFF08\u7DCA\u5BC6\u63A5\u5408\uFF09\u3001Bruch \u819C\u3001\u8108\u7D61\u819C\u5FAE\u8840\u7BA1\u5167\u76AE\u3002\u5167\u5C64\u5FAA\u74B0\u75BE\u75C5\uFF1A\u7CD6\u5C3F\u75C5\u8996\u7DB2\u819C\u75C5\u8B8A\u3001\u8996\u7DB2\u819C\u975C\u8108\u963B\u585E\uFF1B\u5916\u5C64\uFF1A\u8001\u5E74\u6027\u9EC3\u6591\u90E8\u75C5\u8B8A\u3001\u4E2D\u5FC3\u6027\u6F3F\u6DB2\u6027\u8996\u7DB2\u819C\u75C5\u8B8A\u3002</p>
<p>${J("cup","\u676F\u76E4\u6BD4")}\u6B63\u5E38\u7D04 &lt; 0.3\u3002\u5169\u5074\u773C\u7736\u8EF8\u7D04\u593E 45\xB0\u3001\u5916\u5074\u58C1\u7D04 90\xB0\uFF1B\u8996\u8EF8\u8207\u773C\u7736\u8EF8\u4E0D\u91CD\u5408\uFF08\u7D04\u5DEE 23\xB0\uFF09\u3002\u6E26\u975C\u8108 4\u20138 \u689D\uFF08\u7D04 65% \u7684\u4EBA 4 \u6216 5 \u689D\uFF09\u3002</p>

<h3>\u6D77\u7DBF\u7AC7</h3>
<p>\u5916\u5074\u58C1\u7531\u4E0A\u5230\u4E0B\uFF1AIII \u2192 IV \u2192 V1 \u2192 V2\uFF083-4-1-2\uFF09\u3002\u8154\u5167\uFF1A\u5167\u9838\u52D5\u8108\uFF0BVI\uFF0B\u4EA4\u611F\u795E\u7D93\u53E2\u3002VI \u7DCA\u8CBC ICA\uFF0C\u6D77\u7DBF\u7AC7\u75C5\u8B8A\u6642\u5E38\u6700\u5148\u53D7\u5F71\u97FF \u2192 \u5916\u76F4\u808C\u9EBB\u75FA\u3001\u773C\u7403\u7121\u6CD5\u5916\u8F49\u3002${J("cavernous","\u770B\u6D77\u7DBF\u7AC7")}\u3000${J("ica","\u770B ICA")}</p>

<h3>\u776B\u72C0\u795E\u7D93\u7BC0</h3>
<table><tr><th>\u6839</th><th>\u4F86\u6E90</th><th>\u5728\u795E\u7D93\u7BC0\u7A81\u89F8\uFF1F</th></tr>
<tr><td>${J("para-root","\u526F\u4EA4\u611F")}</td><td>EW \u6838 \u2192 CN III \u4E0B\u652F</td><td><b>\u662F\uFF08\u552F\u4E00\uFF09</b></td></tr>
<tr><td>${J("sensory-root","\u611F\u89BA")}</td><td>\u9F3B\u776B\u795E\u7D93</td><td>\u5426</td></tr>
<tr><td>${J("symp-root","\u4EA4\u611F")}</td><td>\u5167\u9838\u52D5\u8108\u4EA4\u611F\u795E\u7D93\u53E2</td><td>\u5426</td></tr></table>
<p>${J("short-ciliary","\u77ED\u776B\u72C0\u795E\u7D93")}\uFF1A\u5F9E\u795E\u7D93\u7BC0\u51FA\u53BB\uFF0C\u53EF\u5E36\u526F\u4EA4\u611F\uFF0B\u4EA4\u611F\uFF0B\u611F\u89BA\u3002${J("long-ciliary","\u9577\u776B\u72C0\u795E\u7D93")}\uFF1A\u7531\u9F3B\u776B\u795E\u7D93\u76F4\u63A5\u5230\u773C\u7403\u3001\u7E5E\u904E\u795E\u7D93\u7BC0\uFF0C\u5E36\u611F\u89BA\uFF0B\u4EA4\u611F\u3002\u4E00\u79D2\u5224\u65B7\uFF1A\u5F9E\u795E\u7D93\u7BC0\u51FA\u53BB \u2192 \u77ED\uFF1B\u4E0D\u7D93\u795E\u7D93\u7BC0 \u2192 \u9577\u3002</p>

<h3>\u77B3\u5B54\u5C0D\u5149\u53CD\u5C04</h3>
<p>\u5149 \u2192 \u8996\u7DB2\u819C \u2192 CN II \u2192 ${J("pretectal","\u9802\u84CB\u524D\u5340")} \u2192 \u5169\u5074 ${J("ew","EW \u6838")} \u2192 CN III \u2192 ${J("ciliary-ganglion","\u776B\u72C0\u795E\u7D93\u7BC0")} \u2192 \u77ED\u776B\u72C0\u795E\u7D93 \u2192 ${J("sphincter","\u77B3\u5B54\u62EC\u7D04\u808C")} \u2192 \u7E2E\u77B3\u3002\u56E0\u70BA\u9802\u84CB\u524D\u5340\u6295\u5C04\u5230\u5169\u5074 EW \u6838\uFF0C\u7167\u4E00\u773C\uFF1A\u88AB\u7167\u773C direct response\uFF0C\u53E6\u4E00\u773C consensual response\uFF0C\u5169\u773C\u90FD\u7E2E\u3002</p>

<h3>\u8996\u795E\u7D93</h3>
<p>\u56DB\u6BB5\uFF1A${J("on-intraocular","\u773C\u7403\u5167\u6BB5")}\uFF08\u6700\u77ED\uFF0C\u7BE9\u677F\u524D\u7121\u9AD3\u9798\uFF09\u2192 ${J("on-orbital","\u773C\u7AA9\u6BB5")}\uFF08\u6700\u9577\uFF0CS \u5F62\uFF09\u2192 ${J("on-canal","\u8996\u795E\u7D93\u7BA1\u6BB5")} \u2192 ${J("on-cranial","\u9871\u5167\u6BB5")}\u3002\u8996\u795E\u7D93\u76E4\u6C92\u6709 rods\uFF0Fcones \u2192 \u751F\u7406\u6027\u76F2\u9EDE\uFF08\u4E2D\u592E\u51F9\u770B\u6700\u6E05\u695A\uFF09\u3002CN II \u662F\u4E2D\u6A1E\u795E\u7D93\u5EF6\u4F38\uFF0C\u5916\u6709 dura\u3001arachnoid\u3001pia\uFF0C\u86DB\u7DB2\u819C\u4E0B\u8154\u4E5F\u5EF6\u4F38\u904E\u4F86\uFF0C\u6240\u4EE5\u9871\u5167\u58D3\u5347\u9AD8 \u2192 \u8996\u4E73\u982D\u6C34\u816B\u3002</p>

<h3>\u8996\u89BA\u8DEF\u5F91\u8207\u76AE\u8CEA</h3>
<p>\u8996\u7DB2\u819C \u2192 \u8996\u795E\u7D93 \u2192 ${J("chiasm","\u8996\u4EA4\u53C9")}\uFF08\u9F3B\u5074\u4EA4\u53C9\u3001\u9873\u5074\u4E0D\u4EA4\u53C9\uFF09\u2192 ${J("optic-tract","\u8996\u675F")} \u2192 ${J("lgn","LGN")} \u2192 \u8996\u653E\u5C04 \u2192 ${J("v1-cortex","V1")}\uFF08\u7D0B\u72C0\u76AE\u8CEA\uFF0CBA 17\uFF09\u3002\u8996\u4EA4\u53C9\u4E4B\u5F8C\u7528\u300C\u8996\u91CE\u300D\u60F3\uFF1A\u5DE6\u8996\u675F\uFF0F\u5DE6\u76AE\u8CEA\u8655\u7406\u96D9\u773C\u53F3\u5074\u8996\u91CE\u3002${J("cuneus","\u6954\u8449")}\u5728\u8DDD\u72C0\u6E9D\u4E0A\u65B9\u770B\u5C0D\u5074\u4E0B\u65B9\u8996\u91CE\uFF1B${J("lingual","\u820C\u56DE")}\u5728\u4E0B\u65B9\u770B\u5C0D\u5074\u4E0A\u65B9\u8996\u91CE\uFF08${J("meyer","Meyer\u2019s loop")} \u8D70\u9873\u8449\u5230\u820C\u56DE\uFF0C${J("baum","Baum\u2019s loop")} \u8D70\u9802\u8449\u5230\u6954\u8449\uFF09\u3002</p>

<h3>\u6C34\u6676\u9AD4\u8207\u767D\u5167\u969C</h3>
<p>\u7121\u8840\u7BA1\u3001\u9760\u623F\u6C34\uFF1B\u524D\u9762\u8F03\u5E73\u3001\u5F8C\u9762\u8F03\u51F8\uFF1B\u4E0A\u76AE\u53EA\u5728\u524D\u56CA\u5167\u5074\u3002\u767D\u5167\u969C\u624B\u8853\uFF1A\u524D\u56CA\u6495\u958B \u2192 \u8D85\u97F3\u6CE2\u4E73\u5316 \u2192 \u5438\u9664\u5167\u5BB9\u7269 \u2192 \u4FDD\u7559\u56CA\u888B \u2192 \u653E\u5165 IOL\u3002\u6B98\u7559\u4E0A\u76AE\u589E\u751F\u3001\u79FB\u884C\u5230\u5F8C\u56CA \u2192 \u5F8C\u56CA\u6DF7\u6FC1 PCO\uFF08\u4E8C\u6B21\u767D\u5167\u969C\uFF09\uFF0C\u4E0D\u662F\u91CD\u65B0\u9577\u51FA\u6C34\u6676\u9AD4\u3002${J("lens","\u770B\u6C34\u6676\u9AD4")}</p>

<h3>\u773C\u7AA9\u3001\u9F3B\u7AC7\u3001\u8166\u4E0B\u5782\u9AD4</h3>
<p>${J("maxillary-sinus","\u4E0A\u9837\u7AC7")}\u5728\u773C\u7AA9\u5E95\u4E0B \u2192 blowout fracture\u3002${J("lamina","\u7BE9\u9AA8\u7D19\u677F")}\u5F88\u8584\uFF0C\u65C1\u908A\u662F\u7BE9\u7AC7\u3002${J("pituitary","\u8166\u4E0B\u5782\u9AD4")}\u5728\u8776\u978D\uFF0C\u4E0B\u9762\u662F${J("sphenoid-sinus","\u8776\u7AC7")}\uFF1A\u9F3B\u8154 \u2192 \u8776\u7AC7 \u2192 \u8776\u978D\uFF08${J("transsphenoidal","\u7D93\u8776\u7AC7\u624B\u8853")}\uFF09\u3002</p>

<h3>\u8166\u5E79</h3>
<p>\u7531\u4E0B\u5F80\u4E0A\uFF1A\u5EF6\u8166 \u2192 \u6A4B\u8166 \u2192 \u4E2D\u8166\u3002${J("sc","\u4E0A\u4E18")}\uFF1A\u8996\u89BA\u53CD\u5C04\uFF1B${J("ic","\u4E0B\u4E18")}\uFF1A\u807D\u89BA\u3002\u4E0A\u4E18\u5C64\u6B21\u6709 ${J("nucleus3","III \u6838")}\uFF0BEW \u6838\uFF1B\u4E0B\u4E18\u5C64\u6B21\u6709 ${J("nucleus4","IV \u6838")}\u3002\u4E0A\u4E18\u4E09\uFF0C\u4E0B\u4E18\u56DB\u3002</p>

<h3>\u6700\u5F8C\u56DB\u53E5</h3>
<p class="mnemonic">\u4E0A\u659C\u56DB\u3001\u5916\u76F4\u516D\u3001\u5176\u4ED6\u4E09\u3002<br>\u5916\u58C1\u4E09\u56DB\u4E00\u4E8C\uFF0C\u88E1\u9762\u516D\u548C\u9838\u5167\u52D5\u8108\u3002<br>\u6954\u8449\u5728\u4E0A\u770B\u4E0B\u9762\uFF0C\u820C\u56DE\u5728\u4E0B\u770B\u4E0A\u9762\u3002<br>\u4E00\u7BE9\u4E8C\u8996\u3001\u4E09\u56DB\u4E00\u516D\u7736\u4E0A\u88C2\u3001\u4E8C\u5713\u4E09\u5375\u3001\u4E03\u516B\u5167\u807D\u3001\u4E5D\u5341\u5341\u4E00\u9838\u975C\u8108\u3001\u5341\u4E8C\u820C\u4E0B\u3002</p>`;var Uh={"Trochlear nerve (IV)":[7.5,1],"Ophthalmic nerve":[7,4],"Superior ophthalmic vein":[6.5,6.5]},Hg={...Uh,"Abducens nerve (VI)":[-1.6,.8]},Gg=["Oculomotor nerve (III)","Abducens nerve (VI)","Optic nerve (II)","Ophthalmic artery"],Dh=12;function Wg(i,e){let t=i.geometry.attributes.position,n=[],s=new w;for(let h=0;h<t.count;h++){let u=new w().fromBufferAttribute(t,h);n.push(u),s.add(u)}s.divideScalar(n.length);let r=n.reduce((h,u)=>u.distanceTo(s)>h.distanceTo(s)?u:h),a=r.clone().sub(s).normalize(),o=new w;for(let h of n){let u=h.clone().sub(s);u.addScaledVector(a,-u.dot(a)),u.length()>o.length()&&(o=u)}o.normalize();let c=new w().crossVectors(a,o).normalize(),l=h=>h.clone().addScaledVector(c,-h.dot(c)).normalize();return{c:s,n:c,up:l(new w(0,1,0)),lat:l(new w(e,0,0))}}function Nh(i,e){let t=i.geometry.attributes.position,n=new w,s=0;for(let r=0;r<t.count;r++){let a=new w().fromBufferAttribute(t,r),o=a.clone().sub(e.c);Math.abs(o.dot(e.n))<1&&o.length()<25&&(n.add(a),s++)}return s?n.divideScalar(s):null}function Fh(i){let e={};for(let[t,n]of[[".l",1],[".r",-1]]){let s=i.find(c=>c.name==="Common tendinous ring"+t);if(!s)continue;let r=Wg(s,n),a=s.geometry.attributes.position;for(let c=0;c<a.count;c++){let l=new w().fromBufferAttribute(a,c),h=l.clone().sub(r.c),u=h.dot(r.n),f=h.addScaledVector(r.n,-u).multiplyScalar(1.5);l.copy(r.c).add(f).addScaledVector(r.n,u),a.setXYZ(c,l.x,l.y,l.z)}a.needsUpdate=!0,s.geometry.computeVertexNormals(),s.geometry.computeBoundingSphere();for(let[c,[l,h]]of Object.entries(Hg)){let u=i.find(m=>m.name===c+t);if(!u)continue;let f=Nh(u,r);if(!f)continue;let d=r.c.clone().addScaledVector(r.up,l).addScaledVector(r.lat,h),g=d.sub(f);g.addScaledVector(r.n,-g.dot(r.n));let x=u.geometry.attributes.position;for(let m=0;m<x.count;m++){let p=new w().fromBufferAttribute(x,m),E=p.clone().sub(r.c),T=E.dot(r.n);if(Math.abs(T)>=Dh||E.length()>40)continue;let v=.5*(1+Math.cos(Math.PI*T/Dh));p.addScaledVector(g,v),x.setXYZ(m,p.x,p.y,p.z)}x.needsUpdate=!0,u.geometry.computeVertexNormals(),u.geometry.computeBoundingSphere(),u.userData.corrected=!0}e[t]=Xg(i,r,s);let o=r.n.z<0?r.n.clone().negate():r.n.clone();e[t].frame={centre:r.c.toArray(),normal:o.toArray()}}return e}function Xg(i,e,t){let n=t.geometry.attributes.position,s=1/0,r=0;for(let c=0;c<n.count;c++){let l=new w().fromBufferAttribute(n,c).sub(e.c).projectOnPlane(e.n).length();s=Math.min(s,l),r=Math.max(r,l)}let a={ring:{inner:+s.toFixed(1),outer:+r.toFixed(1)}},o=t.name.slice(-2);for(let c of[...Object.keys(Uh),...Gg]){let l=i.find(f=>f.name===c+o),h=l&&Nh(l,e);if(!h)continue;let u=h.sub(e.c).projectOnPlane(e.n).length();a[c]={r:+u.toFixed(1),where:u<s?"inside":u<=r?"wall":"outside"}}return a}var Mn=16734810,Fn=6260464;function Oh(i){let e=[],t=(l,h=1)=>new en({color:l,roughness:.45,metalness:.03,transparent:h<1,opacity:h,depthWrite:h>=1,side:Ot}),n=(l,h,u,f,d,g={})=>(l.name=h,l.userData={category:f,themes:u,tags:[h],schematic:!0,baseColor:d,...g},e.push(l),l);function s(l,h,u,f,d,g=!1,x="vessel-guide"){if(h.length<2)return;let m=new gn(h.map(p=>p.isVector3?p.clone():new w(...p)),g);return n(new rt(new Ln(m,Math.max(32,h.length*14),u,8,g),t(f)),l,d,x,f)}function r(l,h,u,f,d,g,x=1,m=0){let p=new rt(new Ds(m,f,40),t(d,x));return p.position.copy(h),p.lookAt(h.clone().add(u)),n(p,l,g,"eye-guide",d,x<1?{fixedOpacity:x}:{})}function a(l,h,u,f,d,g=1,x="vessel-guide"){let m=new rt(new _n(u,20,14),t(f,g));return m.position.copy(h),n(m,l,d,x,f,g<1?{fixedOpacity:g}:{})}let o={};for(let[l,h]of[[".l",1],[".r",-1]]){let u=Z=>i.find(ne=>ne.name===Z+l),f=u("Sclera"),d=u("Iris"),g=u("Retina");if(!f||!d||!g)continue;let x=Z=>{let ne=Z.geometry.attributes.position,ee=[];for(let Le=0;Le<ne.count;Le++)ee.push(new w().fromBufferAttribute(ne,Le));return ee},m=Z=>Z.reduce((ne,ee)=>ne.add(ee),new w).divideScalar(Z.length),p=x(f),E=new mn().setFromPoints(p).getCenter(new w),T=Z=>Z.sort((ne,ee)=>ne-ee)[Z.length>>1],v=T(p.map(Z=>Z.distanceTo(E))),A=m(x(d)),R=(Z,ne)=>Z.sort((ee,Le)=>ee-Le)[Math.floor(Z.length*ne)],P=Z=>Z.filter(ne=>ne.z<E.z-3).map(ne=>ne.distanceTo(E)),N=R(P(x(g)),.1),b=R(P(x(g)),.9),M=R(P(p),.1),L=new w(h,0,0),k=new w(0,1,0),X=new w(0,0,1),Y=(Z,ne,ee)=>E.clone().addScaledVector(X,-Math.cos(ne)*Z).addScaledVector(L,Math.sin(ne)*Math.cos(ee)*Z).addScaledVector(k,Math.sin(ne)*Math.sin(ee)*Z),K=(Z,ne,ee,Le=48)=>Array.from({length:Le},(de,Fe)=>{let lt=Fe/Le*Math.PI*2;return new w(Z.x+ne*Math.cos(lt),Z.y+ne*Math.sin(lt),ee)}),q=(Z,ne,ee,Le)=>new w(Z.x+h*ne*Math.cos(ee),Z.y+ne*Math.sin(ee),Le),B=Z=>new w(h*Z[0],Z[1],Z[2]),G=Z=>Z.clone().sub(E).normalize(),re=(Z,ne)=>E.clone().addScaledVector(Z,ne),ge=(Z,ne,ee)=>Z.clone().lerp(ne,ee).normalize(),Se=u("Central retinal artery");if(Se){let Z=Se.geometry.attributes.position,ne=new w;for(let ee=0;ee<Z.count;ee++){ne.fromBufferAttribute(Z,ee);let Le=ne.distanceTo(E),de=Math.min(1,Math.max(0,(v+1.6-Le)/.8));if(!de||ne.z<E.z-v*1.05)continue;let Fe=N-.3;ne.copy(re(G(ne),Le+(Fe-Le)*de)),Z.setXYZ(ee,ne.x,ne.y,ne.z)}Z.needsUpdate=!0,Se.geometry.computeVertexNormals(),Se.geometry.computeBoundingSphere(),Se.userData.corrected=!0}let Ie=G(B([28,-47,51.5])),qe=new w(h*.06,-.03,-1).normalize();r("guide:disc"+l,re(Ie,N-.25),Ie.clone().negate(),.95,16176266,"u"),r("guide:cup"+l,re(Ie,N-.32),Ie.clone().negate(),.3,16774880,"u"),r("guide:fundus-macula"+l,re(qe,N-.22),qe.clone().negate(),1.55,9386530,"u",.75),r("guide:fundus-fovea"+l,re(qe,N-.28),qe.clone().negate(),.32,4855308,"u"),r("guide:lamina"+l,re(Ie,v-.4),Ie.clone().negate(),.9,13222322,"u",1,.15);let nt=[];for(let Z=0;Z<=1.0001;Z+=.1)nt.push(re(ge(ge(Ie,qe,.12),ge(Ie,qe,.8),Z),N-.38));s("guide:cilioretinal"+l,nt,.16,16752451,"u");let Ye=u("Lens"),$=Ye?new w(A.x,A.y,Math.min(...x(Ye).map(Z=>Z.z))):re(X,4),te=s("guide:hyaloid"+l,[re(Ie,N-.8),re(Ie,N-.8).lerp($,.35).add(new w(0,.6,0)),re(Ie,N-.8).lerp($,.7).add(new w(0,.3,0)),$],.7,13625589,"u");te.material.transparent=!0,te.material.opacity=.4,te.material.depthWrite=!1,te.userData.fixedOpacity=.4;let _e=new rt(new _n((b+M)/2,48,32,0,Math.PI*2,0,Math.PI*.68),t(10104623,.3));_e.rotation.x=-Math.PI/2,_e.position.copy(E),n(_e,"guide:choroid"+l,"ku","eye-guide",10104623,{fixedOpacity:.3});let Pe={r:6.25,z:A.z-2.1},Ee={r:3.1,z:A.z+.5};s("guide:mac"+l,K(A,Pe.r,Pe.z),.32,16727406,"k",!0),s("guide:mic"+l,K(A,Ee.r,Ee.z),.22,16750504,"k",!0),s("guide:schlemm"+l,K(A,6.95,A.z-.6),.3,5209343,"k",!0),s("guide:episcleral"+l,K(A,7.8,A.z-2),.14,16748464,"k",!0),s("guide:plicata"+l,K(A,6.6,A.z-2.9),.24,11767024,"k",!0),s("guide:plana"+l,K(A,7.6,A.z-4),.24,8376512,"k",!0);let Ge=B([17.6,-40,44.5]);for(let[Z,ne,ee]of[["Superior rectus muscle",2,90],["Medial rectus muscle",2,180],["Inferior rectus muscle",2,270],["Lateral rectus muscle",1,0]]){let Le=u(Z);if(!Le)continue;let de=x(Le),Fe=Math.max(...de.map(H=>H.z)),lt=m(de.filter(H=>H.z>Fe-1.5)),ct=(Fe+Math.min(...de.map(H=>H.z)))/2,S=m(de.filter(H=>Math.abs(H.z-ct)<1.5));s("guide:muscular-"+Z[0]+ee+l,[Ge,Ge.clone().lerp(S,.55).add(new w(0,.8,0)),S],.28,Mn,"ke");for(let H=0;H<ne;H++){let ie=ne===1?0:H?.35:-.35,W=ee*Math.PI/180+ie,we=q(A,6.6,W,A.z-1.2),ce=q(A,Pe.r,W,Pe.z),Me=new w(-Math.sin(W)*h,Math.cos(W),0).multiplyScalar(ne===1?0:H?1.2:-1.2);s("guide:aca-"+Z[0]+H+l,[S.clone().add(Me),lt.clone().add(Me).addScaledVector(X,.4),we,ce],.2,Mn,"k")}let _=ee*Math.PI/180+.18,O=new w(-Math.sin(_)*h,Math.cos(_),0).multiplyScalar(.7);s("guide:acv-"+Z[0]+l,[q(A,6.95,_,A.z-.6),q(A,7.7,_,A.z-2.2),lt.clone().add(O).addScaledVector(X,.2),S.clone().add(O)],.2,Fn,"k")}for(let Z of[0,Math.PI]){let ne=[];for(let ee=.33;ee<=1.95;ee+=.18)ne.push(Y(v-.7,ee,Z));ne.push(q(A,Pe.r,Z,Pe.z)),s("guide:lpca-in-"+(Z?"m":"t")+l,ne,.26,16743002,"k")}let mt=(Z,ne)=>{let ee=re(Ie,v),Le=ee.x+Z,de=ee.y+ne;return new w(Le,de,E.z-Math.sqrt(Math.max(0,v*v-(Le-E.x)**2-(de-E.y)**2)))};s("guide:zinn"+l,Array.from({length:40},(Z,ne)=>{let ee=ne/40*Math.PI*2;return mt(2.3*Math.cos(ee),2.3*Math.sin(ee))}),.2,16752451,"ku",!0),[[25,-42.2,42.4],[23.8,-42.2,42.4]].forEach((Z,ne)=>{for(let ee=0;ee<4;ee++){let Le=(ne*4+ee)/8*Math.PI*2+.3,de=mt(3.4*Math.cos(Le),3.4*Math.sin(Le));s("guide:spca-ext"+ne+ee+l,[B(Z),B(Z).lerp(de,.55).add(new w(0,0,-.5)),de],.17,Mn,"k")}}),s("guide:crv"+l,[re(Ie,N-.3),mt(.6,-.3),B([27.2,-46.9,49.5]),B([25.6,-46.3,46.6]),B([24.2,-45.6,44.2]),B([23.4,-41.5,43.2]),B([21.2,-37.6,42.1])],.3,Fn,"ku");for(let[Z,ne,ee]of[["st",45,[25.2,-34,52]],["sn",135,[19,-35.5,50]],["it",-45,[22,-52,49]],["in",-135,[18.5,-50,50]]]){let Le=ne*Math.PI/180;s("guide:vortex-"+Z+l,[Y(v+.2,1.33,Le),Y(v+3.5,1.2,Le),B(ee)],.3,Fn,"k")}let C=B([12.7,-41.3,53.9]),Qe=B([14,-47,75.5]);s("guide:dorsal-nasal"+l,[C,B([12,-38,68]),B([10,-34,79]),B([7.5,-31,86])],.24,Mn,"e"),s("guide:med-palp"+l,[C,B([13.2,-44,65]),Qe],.24,Mn,"e"),s("guide:arcade-up"+l,[Qe,B([14,-41.5,77]),B([22,-38.6,80.3]),B([31,-38,81.4]),B([40,-39.5,79.5]),B([44.5,-43,76])],.2,Mn,"e"),s("guide:arcade-lo"+l,[Qe,B([14,-54,77]),B([22,-57.2,79.6]),B([31,-58,80.3]),B([40,-57,78.8]),B([44.5,-53,76])],.2,Mn,"e"),s("guide:lat-palp"+l,[B([42.3,-39.9,64.6]),B([44.5,-44,71]),B([45,-48,75.5]),B([44.5,-53,76])],.22,Mn,"e"),s("guide:ant-meningeal"+l,[B([8,-43,60]),B([6,-37,63]),B([4,-28,66]),B([3,-14,68])],.22,Mn,"e"),s("guide:zygomatic-br"+l,[B([38.5,-35.6,56.1]),B([44,-42,58]),B([48,-48,60]),B([51,-54,63])],.2,Mn,"e"),s("guide:supratrochlear-v"+l,[B([11,-14,87]),B([12,-24,86]),B([13,-33,83]),B([13.8,-37,80])],.3,Fn,"e"),s("guide:nasal-dorsum-v"+l,[B([7,-33,86]),B([10,-36,82]),B([13.8,-37,80])],.26,Fn,"e"),s("guide:lacrimal-v"+l,[B([41.5,-36.5,64]),B([35,-34.5,60]),B([28,-34,56]),B([25.3,-33.8,55.1])],.28,Fn,"e"),s("guide:infraorbital-v"+l,[B([28,-77,75]),B([27,-72,64]),B([25,-65,52]),B([27,-62,40]),B([33,-70,22])],.3,Fn,"e"),s("guide:iov-pterygoid"+l,[B([17,-52,32]),B([24,-58,30]),B([32,-68,22])],.28,Fn,"e");for(let Z=0;Z<6;Z++)a("guide:pterygoid"+Z+l,B([31+3*Math.cos(Z),-72-2.5*Math.sin(Z*1.7),18+2*Math.sin(Z)]),1.6,Fn,"e",.55);l===".l"&&(o.frame={centre:E.toArray(),radius:+v.toFixed(2),retina:+N.toFixed(2),axis:A.toArray(),disc:re(Ie,N-.25).toArray(),fovea:re(qe,N-.22).toArray()})}let c=[new w(0,-40,99),new w(19,-102,82),new w(-19,-102,82)];return s("guide:danger",[...c],.45,16731469,"e",!0),e.report=o,e}function Bh(){let i=[];for(let e of[1,-1]){let t=e>0?".l":".r",n=r=>r.map(([a,o,c])=>new w(e*a,o,c));for(let[r,a,o]of[["acha",[[13,-34,23],[14,-34,12],[16,-33,0],[20,-31,-13],[23,-24,-20]],.65],["heubner",[[5,-29,27],[8,-29,30],[12,-26,25],[13,-19,19]],.55],["lateral-orbitofrontal",[[30,-31,24],[38,-26,30],[43,-22,44]],.65],["ascending-frontal",[[37,-28,21],[48,-12,22],[50,2,25],[45,21,19]],.65],["labyrinthine",[[16,-60,-8],[25,-58,-4],[34,-57,-1]],.5],["psa",[[10,-73,-27],[7,-84,-31],[6,-100,-34]],.6],["posterior-choroidal",[[17,-31,-18],[13,-21,-23],[11,-12,-15],[17,-14,-5]],.5]]){let c=new gn(n(a)),l=new rt(new Ln(c,64,o,8,!1),new en({color:12359147,roughness:.5}));l.name="guide:"+r+t,l.userData={category:"brainvessel-guide",themes:"b",tags:[l.name],schematic:!0,baseColor:12359147},i.push(l)}let s=new rt(new _n(3.6,24,16),new en({color:16743324,roughness:.5,transparent:!0,opacity:.55,depthWrite:!1}));s.scale.set(1,1.6,1),s.position.set(e*31.6,-149,.2),s.name="guide:carotid-sinus"+t,s.userData={category:"brainvessel-guide",themes:"w",tags:[s.name],schematic:!0,baseColor:16743324,fixedOpacity:.55},i.push(s)}return i}var j=i=>document.getElementById(i),qg={top:{dir:[0,.966,-.259],up:[0,1,0],text:"\u4E0A\u9762\u89C0 \xB7 \u524D\u65B9\u5728\u4E0A \xB7 \u5DE6\u5074\u5728\u756B\u9762\u5DE6\u65B9"},bottom:{dir:[0,-.966,.259],up:[0,1,0],text:"\u5E95\u9762\u89C0 \xB7 \u524D\u65B9\u5728\u4E0A \xB7 \u5DE6\u5074\u5728\u756B\u9762\u53F3\u65B9"},front:{dir:[0,.12,1],up:[0,1,0],text:"\u524D\u9762\u89C0 \xB7 \u5DE6\u5074\u5728\u756B\u9762\u53F3\u65B9"},left:{dir:[1,0,0],up:[0,1,0],text:"\u5DE6\u5074\u89C0 \xB7 \u524D\u65B9\u5728\u756B\u9762\u5DE6\u65B9"},medial:{dir:[-1,0,0],up:[0,1,0],text:"\u7531\u6B63\u4E2D\u9762\u770B\u5DE6\u534A\u908A \xB7 \u524D\u65B9\u5728\u756B\u9762\u53F3\u65B9"},oblique:{dir:[.62,.55,.56],up:[0,1,0],text:"\u7ACB\u9AD4\u659C\u8996 \xB7 \u53EF\u81EA\u7531\u62D6\u66F3\u65CB\u8F49"}},Yg={q:{target:[4,-38,2],zoom:1.3},f:{target:[0,-58,8],zoom:1.3},n:{target:[0,-60,2],zoom:1.9},o:{target:[20,-42,50],zoom:2.9},e:{target:[24,-50,62],zoom:1.9},k:{target:[29,-46,60],zoom:4.6},u:{target:[30.2,-48.6,55],zoom:9.5},w:{target:[18,-100,10],zoom:.95},b:{target:[0,-48,-5],zoom:1.6},c:{target:[0,-46,20],zoom:3.6},g:{target:[14,-40,22],zoom:2.3},v:{target:[0,-28,-12],zoom:1.2}},$g={mesh:"\u539F\u6A21\u578B\u69CB\u9020",guide:"\u539F\u6A21\u578B\u4E0A\u7684\u4F4D\u7F6E\uFF0F\u901A\u9053",schematic:"\u793A\u610F\uFF08\u539F\u6A21\u578B\u6C92\u6709\uFF09",reference:"\u76AE\u8CEA\u5167\u5C64\u6B21\uFF08\u7121 3D \u7DB2\u683C\uFF09"},Il=[["I",/^Olfactory/,16049038],["II",/^Optic (nerve|chiasm|tract)/,16765788],["III",/^Oculomotor/,6269183],["IV",/^Trochlear nerve/,12946431],["V1",/^Ophthalmic nerve/,16769899],["V2",/^(Maxillary nerve|Meningeal branch of maxillary)/,16755021],["V",/(Trigeminal|root of trigeminal)/,16760909],["V3",/(mandibular nerve|Inferior alveolar|Lingual nerve|Buccal nerve|Mental nerve|mylohyoid)/,16743741],["VI",/^Abducens/,4186288],["VII",/^Facial nerve/,16742568],["VIII",/^(Vestibul|Cochlear)/,10739824],["IX",/^Glossopharyngeal/,7656447],["X",/^Vagus/,10004735],["XI",/^Accessory nerve/,14263551],["XII",/^Hypoglossal nerve/,5759968]],Ks=!1,Vh=new Pt,Al={bone:[],brain:[],nerve:[],other:[]},kh=null,nn="q",Yt=!0,Ut=null,Cl="both",bn,ei,je,bt,ti=[],js=[],Sn=0,On=0,ni=!0,$s=null,Qa=new w,ii={y:{index:1,name:"\u6C34\u5E73",low:"\u4FDD\u7559\u4E0B\u65B9",high:"\u4FDD\u7559\u4E0A\u65B9",start:-30},z:{index:2,name:"\u51A0\u72C0",low:"\u4FDD\u7559\u5F8C\u65B9",high:"\u4FDD\u7559\u524D\u65B9",start:20},x:{index:0,name:"\u77E2\u72C0",low:"\u4FDD\u7559\u53F3\u5074",high:"\u4FDD\u7559\u5DE6\u5074",start:0}},Zs=Object.fromEntries(Object.keys(ii).map(i=>[i,{keep:i==="x"?"high":"low",plane:new Pt}])),rs={bone:"\u9AA8",brain:"\u8166",nerve:"\u795E\u7D93",other:"\u5176\u4ED6"};function Hh(i){let e=i?.userData.category;return e==="bone"||e==="tooth"?"bone":["cortex","cerebellum","stem","deep","dura","dura-guide","path-guide"].includes(e)?"brain":["nerve","nucleus","orbit-guide","reflex-guide"].includes(e)?"nerve":"other"}function Zg(){let i=Object.fromEntries(Object.keys(rs).map(e=>[e,Ks?[Vh]:[]]));for(let[e,t]of Object.entries(Zs)){if(!j("cut-"+e).checked)continue;let n=+j("cut-"+e+"-v").value,s=new w;s.setComponent(ii[e].index,t.keep==="low"?-1:1),t.plane.set(s,t.keep==="low"?n:-n);for(let r of Object.keys(rs))j("cut-"+e+"-"+r).checked&&i[r].push(t.plane)}return i}function Jg(){let i=[];for(let[e,t]of Object.entries(Zs)){let n=j("cut-"+e).checked,s=j("cut-"+e+"-v").value;j("cut-"+e+"-o").textContent=s+" mm",j("cut-"+e+"-flip").textContent=ii[e][t.keep];let r=Object.keys(rs).filter(a=>j("cut-"+e+"-"+a).checked);n&&i.push(ii[e].name+" "+s+(r.length===4?"":r.length?"\uFF08"+r.map(a=>rs[a]).join("")+"\uFF09":"\uFF08\u672A\u9078\uFF09"))}Ks&&i.unshift("\u7736\u5C16\u659C\u5207\u9762"),j("section-summary").textContent=i.join("\u30FB")||"\u95DC"}function Kg(i){for(let e of Object.keys(ii)){let t=i.cuts[e];j("cut-"+e).checked=!!t,j("cut-"+e+"-v").value=t?t[0]:ii[e].start;for(let n of Object.keys(rs))j("cut-"+e+"-"+n).checked=t?t[1]||n==="bone":e!=="y"||n==="bone";Zs[e].keep=e==="x"?"high":"low"}}function zh(i,e){return new e(Uint8Array.from(atob(i),t=>t.charCodeAt(0)).buffer)}function jg(i,e){return e.models.some(t=>i.name.startsWith(t)||(i.userData.tags||[]).some(n=>n.startsWith(t)))}var Qg=i=>i==="Mandible"||i.startsWith("Lower "),eo=i=>{for(let[e,t]of Il)if(t.test(i))return e;return null};function e_(i){let e=i.category,t=i.name;if(e==="nerve"){for(let[,n,s]of Il)if(n.test(t))return s;return 15848076}return e==="cortex"?13347509:e==="cerebellum"?12430768:e==="stem"?12041417:e==="artery"?14707306:e==="bone"?14471088:e==="tooth"?15919314:e==="sinus"?6079724:e==="dura"?12101340:e==="vein"?7311344:e==="nucleus"?16754784:e==="orbit"?/muscle|Levator/.test(t)?13135980:/tendinous/.test(t)?15919826:/gland/.test(t)?15185626:8377322:e==="eye"?t.startsWith("Sclera")?14476771:t.startsWith("Retina")?11845597:t.startsWith("Iris")?8101298:t.startsWith("Lens")?11130857:t.startsWith("Cornea")?13625584:10471128:t.includes("geniculate")?15253888:t.includes("hypophysis")?12753611:t.includes("ventricle")?9222861:10794433}async function t_(){let i=Uint8Array.from(atob(window.CRANIAL_GZIP),r=>r.charCodeAt(0)),e=await new Response(new Blob([i]).stream().pipeThrough(new DecompressionStream("gzip"))).json();bn=new Ya({canvas:j("canvas"),antialias:!0,alpha:!0}),bn.setPixelRatio(Math.min(devicePixelRatio,1.5)),bn.localClippingEnabled=!0,bn.outputColorSpace=It,bn.toneMapping=ra,bn.toneMappingExposure=1.05,ei=new As,je=new gi(-180,180,130,-130,.1,2400),ei.add(new Fs(15527167,4603467,2));for(let[r,a,o]of[[[180,260,280],16772326,2.3],[[-180,40,-200],11914735,1.4],[[0,-220,60],16438220,1.3]]){let c=new Os(a,o);c.position.set(...r),ei.add(c)}for(let r of e.meshes){let a=new Xt;a.setAttribute("position",new Et(zh(r.positions,Float32Array),3)),a.setIndex(new Et(zh(r.indices,Uint32Array),1)),a.computeVertexNormals();let o=e_(r),c=new rt(a,new en({color:o,roughness:r.category==="bone"||r.category==="tooth"?.82:.62,side:Ot}));c.name=r.name,c.userData={category:r.category,baseColor:o,schematic:!1},ti.push(c),ei.add(c)}let t=Fh(ti),n=Ih(),s=Oh(ti);window.ocularFrame=s.report.frame,n.push(...s,...Bh());for(let r of ti.filter(a=>/^Retina\.[lr]$/.test(a.name)))n.push(Ph(r));ti.push(...n),ei.add(...n),ei.updateMatrixWorld(!0);for(let r of zt)if(r.matches=ti.filter(a=>jg(a,r)),r.point=new w(...r.position),r.snap){let a=r.matches.filter(h=>/\.l\d*$/.test(h.name)),o=a.length?a:r.matches,c=1/0,l=new w;for(let h of o){let u=h.geometry.attributes.position;for(let f=0;f<u.count;f++){l.fromBufferAttribute(u,f).applyMatrix4(h.matrixWorld);let d=l.distanceToSquared(new w(...r.position));d<c&&(c=d,r.anchorMesh=h,r.localAnchor=new w().fromBufferAttribute(u,f))}}r.anchorMesh&&r.point.copy(r.localAnchor).applyMatrix4(r.anchorMesh.matrixWorld)}j("total").textContent=zt.length,n_(),Js("q"),new ResizeObserver(Rl).observe(j("stage")),Rl(),j("loading").hidden=!0,bn.setAnimationLoop(()=>{bt.update(),ni&&(bn.render(ei,je),a_(),ni=!1)}),window.atlas={labels:zt,groups:qs,meshes:ti,scene:ei,get camera(){return je},get controls(){return bt},annulus:t,setGroup:Js,select:as,setCamera:Pl,focusOn:r=>Wh(zt.find(a=>a.id===r)),get state(){return{current:nn,names:Yt,selected:Ut,active:js.length}}}}function n_(){j("legend").replaceChildren();for(let[i,,e]of Il){let t=document.createElement("span");t.innerHTML=`<i style="background:#${e.toString(16).padStart(6,"0")}"></i>${i}`,j("legend").append(t)}}function Gh(i){bt?.dispose();let e=je.up.clone();je.up.set(0,1,0),bt=new Ka(je,j("canvas")),je.up.copy(e),bt.enableDamping=!0,bt.dampingFactor=.1,bt.minZoom=.45,bt.maxZoom=9,bt.minPolarAngle=.17,bt.maxPolarAngle=Math.PI-.17,bt.target.copy(i),bt.addEventListener("change",()=>ni=!0),bt.addEventListener("start",()=>{j("canvas").classList.add("dragging"),j("orientation").textContent="\u81EA\u7531\u8996\u89D2 \xB7 \u6307\u7DDA\u53EF\u7A7F\u900F\u8868\u9762\uFF0C\u65CB\u8F49\u6642\u7559\u610F\u524D\u5F8C\u95DC\u4FC2"}),bt.addEventListener("end",()=>j("canvas").classList.remove("dragging")),bt.update()}function Pl(i,e=Yg[nn]){let t=qg[i],n=new w(...e.target),s=new w(...t.dir).normalize();je.up.set(...t.up),je.position.copy(n).addScaledVector(s,700),je.zoom=e.zoom,je.lookAt(n),je.updateProjectionMatrix(),Gh(n),$s=null,j("camera-view").value=i,j("orientation").textContent=t.text,ni=!0}function Js(i){nn=i,Ut=null,Ks=!1,j("apex-view").hidden=i!=="o";let e=qs[i];j("view-title").textContent=e.title,j("view-note").textContent=e.subtitle,j("flow").textContent=Yt?e.flow:"\u540D\u7A31\u8207\u8AAA\u660E\u5DF2\u96B1\u85CF \xB7 \u4FDD\u7559\u9805\u76EE\u7DE8\u865F\u4F9B\u81EA\u6E2C",j("bone").value=e.bone,j("cortex").value=e.cortex,Kg(e),j("jaw").checked=i==="q",j("right").checked=!"geku".includes(i),j("cerebellum").checked="nb".includes(i),j("retina-guide").hidden=e.panel!=="retina",j("guides").checked=!0,j("search").value="",j("legend").hidden=!"fnoc".includes(i),Pl(e.camera),document.querySelectorAll("[data-view]").forEach(t=>t.classList.toggle("active",t.dataset.view===i)),Ti(),Qs(),er(),to()}function Ti(){let i=zt.filter(c=>c.groups.includes(nn)),e=zt.find(c=>c.id===Ut),t=+j("bone").value,n=+j("cortex").value,s=new Set(i.flatMap(c=>c.matches));e&&e.matches.forEach(c=>s.add(c)),j("bone-value").textContent=Math.round(t*100)+"%",j("cortex-value").textContent=Math.round(n*100)+"%",j("nerve-dim-value").textContent=+j("nerve-dim").value?Math.round(j("nerve-dim").value*100)+"%":"\u96B1\u85CF",Jg(),Al=Zg();let r=e&&nn!=="v"?new Set(e.matches.filter(c=>c.userData.category==="nerve").map(c=>eo(c.name)).filter(Boolean)):null;r?.has("V")&&["V1","V2","V3"].forEach(c=>r.add(c)),r&&["V1","V2","V3"].some(c=>r.has(c))&&r.add("V");let a=c=>["artery","vein","vessel-guide","brainvessel-guide"].includes(c.userData.category),o="ekuwb".includes(nn)&&e?.matches.some(a);for(let c of ti){let l=c.userData.category,h=c.name,u=s.has(c),f=e?.matches.includes(c),d=nn,g=u,x=1;if(l==="bone"||l==="tooth")g=t>0&&(!Qg(h)||j("jaw").checked),x=t,f&&t<.3&&(g=!0,x=.45);else if(l==="sinus")g=u||"qocf".includes(d),x=u?.8:.45;else if(l==="cortex")g=n>0||f,x=f?Math.max(n,.75):n;else if(l==="cerebellum")g=j("cerebellum").checked,x=d==="n"?.5:d==="b"?.3:.25;else if(l==="stem")g=u||"nqgvcb".includes(d),x=u?.9:d==="n"?.85:d==="g"?.35:.22;else if(l==="deep")g=u||"vg".includes(d)&&/^Thalamus/.test(h),x=u?.85:.14;else if(l==="nerve"){if(g=u||"fnoc".includes(d)&&!(/^Optic tract/.test(h)&&d!=="n")||d==="g"&&/^(Oculomotor|Optic|Ophthalmic)/.test(h)||d==="v"&&/^Optic/.test(h)||"eku".includes(d)&&/^Optic nerve/.test(h),x=u||"fnoc".includes(d)?1:.45,r?.size){let E=r.has(eo(h)),T=+j("nerve-dim").value;g=E||T>0,x=E?1:T}}else l==="nucleus"?(g=u||"gn".includes(d),x=u?1:.6):l==="eye"?(g=!"nwb".includes(d),x=h.startsWith("Sclera")?d==="u"?1:"ek".includes(d)?.32:.13:h.startsWith("Retina")?d==="u"?1:d==="k"?.22:.3:h.startsWith("Lens")?.6:h.startsWith("Cornea")?.18:h.startsWith("Vitreous")?0:.85,x===0&&!u&&(g=!1)):l==="orbit"?(g=u||"ocfek".includes(d),x=u?1:d==="o"||d==="f"?.95:d==="e"?.14:d==="k"?.1:.35):l==="artery"?(g=u||"cf".includes(d)&&/^(Internal carotid|Ophthalmic|Middle meningeal)/.test(h)||d==="n"&&/^(Basilar|Vertebral|Internal carotid)/.test(h)||d==="e"&&/^Internal carotid/.test(h)||"bw".includes(d),x=u?1:"bw".includes(d)?.4:.6):l==="vein"?(g=u||"cofek".includes(d),x=/^Cavernous/.test(h)?d==="c"?.55:.4:.8):l==="dura"?(g=u&&(d==="q"||f),x=.32):c.userData.schematic&&(g=u||(c.userData.themes||"").includes(d),x=c.userData.fixedOpacity??1);if(Ks&&(l==="sinus"||l==="sinus-guide"||l==="bone"||l==="tooth")&&(g=!1),o&&a(c)&&!f){let E=+j("nerve-dim").value;g=g&&E>0,x=Math.min(x,E)}c.userData.schematic&&!j("guides").checked&&(g=!1),!j("right").checked&&/\.r\d*$/.test(h)&&(g=!1),f&&g&&(x=Math.max(x,l==="bone"||l==="cortex"||l==="vein"||l==="sinus"||l==="dura"?x:.8));let m=c.material;h.startsWith("Retina")&&m.color.setHex("uk".includes(d)?14714698:c.userData.baseColor),c.visible=g,m.opacity=x,m.transparent=x<.999,m.depthWrite=x>.7;let p=Al[Hh(c)];m.clippingPlanes=p.length?p:null,m.needsUpdate=!0,m.emissive.setHex(f?6966048:0),m.emissiveIntensity=f?.7:0,l==="path-guide"&&(m.emissive.setHex(c.userData.baseColor),m.emissiveIntensity=f?.9:.5),o&&f&&a(c)&&(m.emissive.setHex(c.userData.baseColor),m.emissiveIntensity=.7,c.renderOrder=3),l==="nerve"&&(f||r?.size&&r.has(eo(h)))&&(m.emissive.setHex(c.userData.baseColor),m.emissiveIntensity=.85,c.renderOrder=3),c.renderOrder=l==="nerve"&&r?.size&&r.has(eo(h))?3:x<.5?2:0}ni=!0}function i_(i){return(i.zh+" "+i.en+" "+(i.quiz?"\u5C0F\u8003 "+i.quiz:"")).toLowerCase()}function s_(){let i=j("search").value.trim().toLowerCase();return i?zt.filter(e=>i_(e).includes(i)):zt.filter(e=>e.groups.includes(nn))}function Qs(){let i=s_();j("count").textContent=i.length+" \u9805",j("list-title").textContent=j("search").value?"\u8DE8\u4E3B\u984C\u641C\u5C0B\u7D50\u679C":"\u672C\u4E3B\u984C\u69CB\u9020",j("structure-list").replaceChildren();for(let e of i){let t=document.createElement("button");t.className="structure"+(Ut===e.id?" selected":""),t.dataset.id=e.id,t.innerHTML=`<span class="num">${String(e.number).padStart(2,"0")}</span><div><strong>${Yt?e.zh:"\u9805\u76EE "+e.number}</strong><small>${Yt?e.en:"\u540D\u7A31\u5DF2\u96B1\u85CF"}</small></div><span class="hint">${e.quiz?"\u8003 "+e.quiz:e.representation==="schematic"?"\u793A\u610F":""}</span>`,t.onclick=()=>as(e),j("structure-list").append(t)}i.length||(j("structure-list").innerHTML='<p class="empty">\u6C92\u6709\u7B26\u5408\u7684\u69CB\u9020\u3002</p>')}function as(i){if(typeof i=="string"&&(i=zt.find(e=>e.id===i)),!!i){if(!i.groups.includes(nn)){let e=j("search").value;Js(i.groups[0]),j("search").value=e}Ut=i.id,i.representation==="schematic"&&(j("guides").checked=!0),Ti(),Qs(),er(),to(i)}}function to(i){let e=j("detail");if(e.querySelector(".detail-number").textContent=i?String(i.number).padStart(2,"0"):"\u25CE",e.querySelector("h3").innerHTML=i?Yt?`${i.zh}<small>${i.en}</small>`:`\u9805\u76EE ${i.number} \xB7 \u540D\u7A31\u5DF2\u96B1\u85CF`:Yt?"\u9EDE\u9078\u69CB\u9020\uFF0C\u8FFD\u8E64\u795E\u7D93\u7A7F\u904E\u54EA\u500B\u5B54\u3002":"\u540D\u7A31\u5DF2\u5168\u90E8\u96B1\u85CF",e.querySelector("p").textContent=i?Yt?i.note:"\u53EF\u65CB\u8F49\u8207\u9EDE\u9078\u7DE8\u865F\u3002\u6309\u300C\u986F\u793A\u6240\u6709\u540D\u7A31\u300D\u63ED\u66C9\u540D\u7A31\u8207\u8AAA\u660E\u3002":Yt?"\u5BE6\u7DDA\u6A19\u7C64\u662F\u539F\u6A21\u578B\u69CB\u9020\u6216\u539F\u6A21\u578B\u4E0A\u7684\u4F4D\u7F6E\uFF1B\u865B\u7DDA\u662F\u539F\u6A21\u578B\u6C92\u6709\u800C\u53E6\u756B\u7684\u793A\u610F\u3002\u6307\u7DDA\u53EF\u7A7F\u900F\u8868\u9762\u3002":"\u6A21\u578B\u6A19\u7C64\u3001\u5074\u6B04\u3001\u6D41\u7A0B\u6587\u5B57\u53CA\u8AAA\u660E\u540C\u6B65\u906E\u853D\u3002",j("detail-meta").replaceChildren(),!i)return;let t=document.createElement("span");t.textContent=$g[i.representation]+(i.quiz?" \xB7 \u5C0F\u8003\u7B2C "+i.quiz+" \u984C":""),j("detail-meta").append(t);let n=document.createElement("button");if(n.textContent="\u{1F50D} \u653E\u5927\u5230\u9019\u88E1",n.onclick=()=>Wh(i),j("detail-meta").append(n),!Yt)return;let s=(r,a)=>{let o=zt.find(l=>l.id===a);if(!o)return;let c=document.createElement("button");c.textContent=r+o.zh+" \u2192",c.onclick=()=>as(o),j("detail-meta").append(c)};for(let r of i.via)s("\u7A7F\u904E\uFF1A",r);for(let r of zt.filter(a=>a.via.includes(i.id)))s("\u901A\u904E\uFF1A",r.id)}function Wh(i){let e=i.point.clone(),t=new w().subVectors(e,bt.target);je.position.add(t),bt.target.copy(e),je.zoom=Math.min(9,Math.max(je.zoom*1.8,4.5)),je.updateProjectionMatrix(),bt.update(),ni=!0}function r_(i){let e=`<b>${String(i.number).padStart(2,"0")}</b>`;return Yt?`${e}<div>${Cl!=="en"?`<div class="zh">${i.zh}</div>`:""}${Cl!=="zh"?`<div class="en">${i.en}</div>`:""}</div>`:e}function Ys(i){kh=i,j("leaders").classList.toggle("has-focus",!!i);for(let e of js){let t=e.l.id===i;e.group.classList.toggle("focused",t),e.el.classList.toggle("traced",t),e.dot.setAttribute("r",t?5:3.6),t&&j("leaders").append(e.group)}ni=!0}function er(){let i=zt.filter(t=>t.groups.includes(nn));j("labels").replaceChildren(),j("leaders").replaceChildren();let e=t=>document.createElementNS("http://www.w3.org/2000/svg",t);js=i.map(t=>{let n=document.createElement("button");n.className="label "+(t.representation==="schematic"||t.representation==="reference"?"guide":"")+(Ut===t.id?" selected":""),n.dataset.id=t.id,n.innerHTML=r_(t),n.setAttribute("aria-label",Yt?t.zh:"\u9805\u76EE "+t.number),n.onclick=()=>as(t),n.onpointerenter=()=>Ys(t.id),n.onpointerleave=()=>Ys(Ut),n.onfocus=()=>Ys(t.id),n.onblur=()=>Ys(Ut),j("labels").append(n);let s=e("g"),r=e("line"),a=e("line"),o=e("circle");return s.dataset.id=t.id,r.classList.add("leader-halo"),a.classList.add("leader-main"),a.classList.toggle("guide",t.representation==="schematic"||t.representation==="reference"),o.setAttribute("r",3.6),s.append(r,a,o),j("leaders").append(s),{l:t,el:n,group:s,halo:r,line:a,dot:o}}),Ys(Ut),Rl()}function Rl(){let i=innerWidth<=700,e=Math.ceil(js.length/2);j("stage").style.minHeight=i?Math.max(480,e*51+46)+"px":Math.max(460,e*44+40)+"px";let t=j("stage").getBoundingClientRect();if(Sn=t.width,On=t.height,j("leaders").setAttribute("viewBox",`0 0 ${Sn} ${On}`),!bn)return;bn.setSize(Sn,On,!1);let n=Sn<500?On*.57:140;je.left=-n*Sn/On,je.right=n*Sn/On,je.top=n,je.bottom=-n,je.updateProjectionMatrix(),ni=!0}function a_(){if(!Sn||!je)return;je.updateMatrixWorld();let i=js.map(t=>(t.l.anchorMesh&&t.l.point.copy(t.l.localAnchor).applyMatrix4(t.l.anchorMesh.matrixWorld),Qa.copy(t.l.point).project(je),{...t,x:(Qa.x+1)*Sn/2,y:(1-Qa.y)*On/2,z:Qa.z}));if(!$s){let t=[...i].sort((s,r)=>s.x-r.x),n=Math.ceil(t.length/2);$s=[t.slice(0,n),t.slice(n)].map(s=>s.sort((r,a)=>r.y-a.y).map(r=>r.l.id))}let e=new Map(i.map(t=>[t.l.id,t]));for(let t=0;t<2;t++){let n=$s[t].map(o=>e.get(o)).filter(Boolean),s=n.map(o=>o.el.offsetHeight||34),r=s.reduce((o,c)=>o+c,0)+8*(n.length-1),a=Math.max(8,(On-r)/2);for(let o=0;o<n.length;o++){let c=n[o],l=c.el.offsetWidth,h=t?Sn-l-5:5;c.el.style.transform=`translate(${h}px,${a}px)`;let u=c.z>-1&&c.z<1&&c.x>=0&&c.x<=Sn&&c.y>=0&&c.y<=On,f=Al[Hh(c.l.anchorMesh||c.l.matches[0])].some(d=>d.distanceToPoint(c.l.point)<-2);c.group.style.display=u&&!f&&(!Ut||c.l.id===Ut||c.l.id===kh)?"":"none",c.el.classList.toggle("muted",!!Ut&&c.l.id!==Ut||f),c.el.classList.toggle("offscreen",!u);for(let d of[c.halo,c.line])d.setAttribute("x1",t?h:h+l),d.setAttribute("y1",a+s[o]/2),d.setAttribute("x2",c.x),d.setAttribute("y2",c.y);c.dot.setAttribute("cx",c.x),c.dot.setAttribute("cy",c.y),a+=s[o]+8}}}function Xh(i){Yt=i,document.body.classList.toggle("hidden-names",!i),j("hide").setAttribute("aria-pressed",!i),j("show").setAttribute("aria-pressed",i),i||(j("notes-dialog").close(),j("source-dialog").close()),j("flow").textContent=i?qs[nn].flow:"\u540D\u7A31\u8207\u8AAA\u660E\u5DF2\u96B1\u85CF \xB7 \u4FDD\u7559\u9805\u76EE\u7DE8\u865F\u4F9B\u81EA\u6E2C",Qs(),er(),to(zt.find(e=>e.id===Ut))}function o_(){if(!Yt){j("detail").querySelector("p").textContent="\u91CD\u9EDE\u6574\u7406\u542B\u7B54\u6848\uFF0C\u8ACB\u5148\u986F\u793A\u6240\u6709\u540D\u7A31\u3002";return}j("notes-content").innerHTML=Lh,j("notes-content").querySelectorAll("[data-go]").forEach(i=>i.onclick=()=>{j("notes-dialog").close(),as(i.dataset.go)}),j("notes-dialog").showModal()}j("views").innerHTML=Ch.map((i,e)=>`<button data-view="${i}">${String(e+1).padStart(2,"0")}\u3000${qs[i].title}</button>`).join("");j("hide").onclick=()=>Xh(!1);j("show").onclick=()=>Xh(!0);j("views").onclick=i=>{let e=i.target.closest("[data-view]");e&&Js(e.dataset.view)};j("search").oninput=Qs;j("reset").onclick=()=>Js(nn);j("camera-view").onchange=()=>Pl(j("camera-view").value);for(let i of["bone","cortex","nerve-dim","cut-y-v","cut-z-v","cut-x-v"])j(i).oninput=Ti;for(let i of["jaw","right","cerebellum","guides","cut-y","cut-z","cut-x",...["y","z","x"].flatMap(e=>Object.keys(rs).map(t=>`cut-${e}-${t}`))])j(i).onchange=Ti;for(let i of Object.keys(ii))j("cut-"+i+"-flip").onclick=()=>{Zs[i].keep=Zs[i].keep==="low"?"high":"low",j("cut-"+i).checked=!0,Ti()},j("cut-"+i+"-v").addEventListener("input",()=>{j("cut-"+i).checked||(j("cut-"+i).checked=!0,Ti())});j("language").onchange=()=>{Cl=j("language").value,er()};j("clear").onclick=()=>{Ut=null,Ti(),Qs(),er(),to()};function l_(){let i=window.atlas.annulus[".l"].frame,e=new w(...i.centre),t=new w(...i.normal);Ks=!0,Vh.set(t.clone().negate(),t.dot(e)+1.5);for(let n of Object.keys(ii))j("cut-"+n).checked=!1;j("bone").value=0,j("cortex").value=0,je.position.copy(e).addScaledVector(t,700),je.up.set(0,1,0),je.zoom=9,je.updateProjectionMatrix(),je.lookAt(e),Gh(e),$s=null,j("orientation").textContent="\u6CBF\u7736\u8EF8\u5F9E\u524D\u65B9\u770B\u7736\u5C16 \xB7 \u5207\u9762\u5E73\u884C\u65BC\u5171\u540C\u8171\u74B0 \xB7 \u4E0A\u65B9\u5728\u4E0A",as("annulus")}j("apex-view").onclick=l_;j("source-button").onclick=()=>j("source-dialog").showModal();j("notes-button").onclick=o_;document.querySelectorAll("[data-close]").forEach(i=>i.onclick=()=>j(i.dataset.close).close());t_().catch(i=>{j("loading").textContent="\u6A21\u578B\u8F09\u5165\u5931\u6557\uFF1A"+i.message+"\u3002\u8ACB\u4F7F\u7528\u65B0\u7248 Chrome \u6216 Edge \u958B\u555F\u3002",console.error(i)});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
