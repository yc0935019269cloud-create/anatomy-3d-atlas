(()=>{var Jn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Kn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},rc=0,Bo=1,ac=2;var zo=1,oc=2,xn=3,Pn=0,Le=1,Oe=2,Dn=0,di=1,Vo=2,ko=3,Ho=4,lc=5,qn=100,cc=101,hc=102,uc=103,dc=104,fc=200,pc=201,mc=202,gc=203,Sr=204,Tr=205,_c=206,xc=207,yc=208,vc=209,Mc=210,bc=211,Sc=212,Tc=213,Ec=214,jr=0,Qr=1,ta=2,fi=3,ea=4,na=5,ia=6,sa=7,Go=0,wc=1,Ac=2,Un=0,Cc=1,Rc=2,Ic=3,ra=4,Pc=5,Lc=6,Dc=7;var Wo=300,_i=301,xi=302,aa=303,oa=304,zs=306,Er=1e3,Xn=1001,wr=1002,Ke=1003,Uc=1004;var Vs=1005;var ln=1006,la=1007;var jn=1008;var un=1009,Xo=1010,qo=1011,Ji=1012,ca=1013,Qn=1014,yn=1015,Ki=1016,ha=1017,ua=1018,ji=1020,Yo=35902,$o=35899,Zo=1021,Jo=1022,en=1023,Vi=1026,Qi=1027,Ko=1028,da=1029,jo=1030,fa=1031;var pa=1033,ks=33776,Hs=33777,Gs=33778,Ws=33779,ma=35840,ga=35841,_a=35842,xa=35843,ya=36196,va=37492,Ma=37496,ba=37808,Sa=37809,Ta=37810,Ea=37811,wa=37812,Aa=37813,Ca=37814,Ra=37815,Ia=37816,Pa=37817,La=37818,Da=37819,Ua=37820,Na=37821,Fa=36492,Oa=36494,Ba=36495,za=36283,Va=36284,ka=36285,Ha=36286;var gs=2300,Ar=2301,br=2302,Io=2400,Po=2401,Lo=2402;var Nc=3200,Fc=3201;var Qo=0,Oc=1,Nn="",Ie="srgb",pi="srgb-linear",_s="linear",Kt="srgb";var hi=7680;var Do=519,Bc=512,zc=513,Vc=514,tl=515,kc=516,Hc=517,Gc=518,Wc=519,Uo=35044;var el="300 es",on=2e3,xs=2001;var fn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bl=1234567,ds=Math.PI/180,ki=180/Math.PI;function ts(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(be[i&255]+be[i>>8&255]+be[i>>16&255]+be[i>>24&255]+"-"+be[t&255]+be[t>>8&255]+"-"+be[t>>16&15|64]+be[t>>24&255]+"-"+be[e&63|128]+be[e>>8&255]+"-"+be[e>>16&255]+be[e>>24&255]+be[n&255]+be[n>>8&255]+be[n>>16&255]+be[n>>24&255]).toLowerCase()}function kt(i,t,e){return Math.max(t,Math.min(e,i))}function nl(i,t){return(i%t+t)%t}function jh(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Qh(i,t,e){return i!==t?(e-i)/(t-i):0}function fs(i,t,e){return(1-e)*i+e*t}function tu(i,t,e,n){return fs(i,t,1-Math.exp(-e*n))}function eu(i,t=1){return t-Math.abs(nl(i,t*2)-t)}function nu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function iu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function su(i,t){return i+Math.floor(Math.random()*(t-i+1))}function ru(i,t){return i+Math.random()*(t-i)}function au(i){return i*(.5-Math.random())}function ou(i){i!==void 0&&(Bl=i);let t=Bl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function lu(i){return i*ds}function cu(i){return i*ki}function hu(i){return(i&i-1)===0&&i!==0}function uu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function du(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function fu(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),f=a((t-n)/2),d=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,c*u,c*f,o*l);break;case"YZY":i.set(c*f,o*h,c*u,o*l);break;case"ZXZ":i.set(c*u,c*f,o*h,o*l);break;case"XZX":i.set(o*h,c*g,c*d,o*l);break;case"YXY":i.set(c*d,o*h,c*g,o*l);break;case"ZYZ":i.set(c*g,c*d,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Bi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Re(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var il={DEG2RAD:ds,RAD2DEG:ki,generateUUID:ts,clamp:kt,euclideanModulo:nl,mapLinear:jh,inverseLerp:Qh,lerp:fs,damp:tu,pingpong:eu,smoothstep:nu,smootherstep:iu,randInt:su,randFloat:ru,randFloatSpread:au,seededRandom:ou,degToRad:lu,radToDeg:cu,isPowerOfTwo:hu,ceilPowerOfTwo:uu,floorPowerOfTwo:du,setQuaternionFromProperEuler:fu,normalize:Re,denormalize:Bi},vt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},je=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],f=r[a+0],d=r[a+1],g=r[a+2],x=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=x;return}if(u!==x||c!==f||l!==d||h!==g){let m=1-o,p=c*f+l*d+h*g+u*x,E=p>=0?1:-1,T=1-p*p;if(T>Number.EPSILON){let A=Math.sqrt(T),R=Math.atan2(A,p*E);m=Math.sin(m*R)/A,o=Math.sin(o*R)/A}let v=o*E;if(c=c*m+f*v,l=l*m+d*v,h=h*m+g*v,u=u*m+x*v,m===1-o){let A=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=A,l*=A,h*=A,u*=A}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+h*u+c*d-l*f,t[e+1]=c*g+h*f+l*u-o*d,t[e+2]=l*g+h*d+o*f-c*u,t[e+3]=h*g-o*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),f=c(n/2),d=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"YZX":this._x=f*h*u+l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u-f*d*g;break;case"XZY":this._x=f*h*u-l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(a-s)*d}else if(n>o&&n>u){let d=2*Math.sqrt(1+n-o-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+l)/d}else if(o>u){let d=2*Math.sqrt(1+o-n-u);this._w=(r-l)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-n-o);this._w=(a-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(kt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},w=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(zl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(zl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this.z=kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this.z=kt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return so.copy(this).projectOnVector(t),this.sub(so)}reflect(t){return this.sub(so.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},so=new w,zl=new je,zt=class i{constructor(t,e,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],x=s[0],m=s[3],p=s[6],E=s[1],T=s[4],v=s[7],A=s[2],R=s[5],P=s[8];return r[0]=a*x+o*E+c*A,r[3]=a*m+o*T+c*R,r[6]=a*p+o*v+c*P,r[1]=l*x+h*E+u*A,r[4]=l*m+h*T+u*R,r[7]=l*p+h*v+u*P,r[2]=f*x+d*E+g*A,r[5]=f*m+d*T+g*R,r[8]=f*p+d*v+g*P,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,f=o*c-h*r,d=l*r-a*c,g=e*u+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(s*l-h*n)*x,t[2]=(o*n-s*a)*x,t[3]=f*x,t[4]=(h*e-s*c)*x,t[5]=(s*r-o*e)*x,t[6]=d*x,t[7]=(n*c-l*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ro.makeScale(t,e)),this}rotate(t){return this.premultiply(ro.makeRotation(-t)),this}translate(t,e){return this.premultiply(ro.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ro=new zt;function sl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ys(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Xc(){let i=ys("canvas");return i.style.display="block",i}var Vl={};function Hi(i){i in Vl||(Vl[i]=!0,console.warn(i))}function qc(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var kl=new zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hl=new zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pu(){let i={enabled:!0,workingColorSpace:pi,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Kt&&(s.r=In(s.r),s.g=In(s.g),s.b=In(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Kt&&(s.r=zi(s.r),s.g=zi(s.g),s.b=zi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Nn?_s:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Hi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Hi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[pi]:{primaries:t,whitePoint:n,transfer:_s,toXYZ:kl,fromXYZ:Hl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ie},outputColorSpaceConfig:{drawingBufferColorSpace:Ie}},[Ie]:{primaries:t,whitePoint:n,transfer:Kt,toXYZ:kl,fromXYZ:Hl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ie}}}),i}var $t=pu();function In(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function zi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var wi,Cr=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{wi===void 0&&(wi=ys("canvas")),wi.width=t.width,wi.height=t.height;let s=wi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=wi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ys("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=In(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(In(e[n]/255)*255):e[n]=In(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},mu=0,Gi=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mu++}),this.uuid=ts(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ao(s[a].image)):r.push(ao(s[a]))}else r=ao(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function ao(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Cr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var gu=0,oo=new w,We=class i extends fn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Xn,s=Xn,r=ln,a=jn,o=en,c=un,l=i.DEFAULT_ANISOTROPY,h=Nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gu++}),this.uuid=ts(),this.name="",this.source=new Gi(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(oo).x}get height(){return this.source.getSize(oo).y}get depth(){return this.source.getSize(oo).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Wo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Er:t.x=t.x-Math.floor(t.x);break;case Xn:t.x=t.x<0?0:1;break;case wr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Er:t.y=t.y-Math.floor(t.y);break;case Xn:t.y=t.y<0?0:1;break;case wr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};We.DEFAULT_IMAGE=null;We.DEFAULT_MAPPING=Wo;We.DEFAULT_ANISOTROPY=1;var de=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let T=(l+1)/2,v=(d+1)/2,A=(p+1)/2,R=(h+f)/4,P=(u+x)/4,N=(g+m)/4;return T>v&&T>A?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=R/n,r=P/n):v>A?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=R/s,r=N/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=P/r,s=N/r),this.set(n,s,r,e),this}let E=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(u-x)/E,this.z=(f-h)/E,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this.z=kt(this.z,t.z,e.z),this.w=kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this.z=kt(this.z,t,e),this.w=kt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Rr=class extends fn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e);let s={width:t,height:e,depth:n.depth},r=new We(s);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:ln,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Gi(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},pn=class extends Rr{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},vs=class extends We{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ir=class extends We{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var mn=class{constructor(t=new w(1/0,1/0,1/0),e=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,sn):sn.fromBufferAttribute(r,a),sn.applyMatrix4(t.matrixWorld),this.expandByPoint(sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ir.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ir.copy(n.boundingBox)),ir.applyMatrix4(t.matrixWorld),this.union(ir)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,sn),sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ls),sr.subVectors(this.max,ls),Ai.subVectors(t.a,ls),Ci.subVectors(t.b,ls),Ri.subVectors(t.c,ls),Bn.subVectors(Ci,Ai),zn.subVectors(Ri,Ci),ai.subVectors(Ai,Ri);let e=[0,-Bn.z,Bn.y,0,-zn.z,zn.y,0,-ai.z,ai.y,Bn.z,0,-Bn.x,zn.z,0,-zn.x,ai.z,0,-ai.x,-Bn.y,Bn.x,0,-zn.y,zn.x,0,-ai.y,ai.x,0];return!lo(e,Ai,Ci,Ri,sr)||(e=[1,0,0,0,1,0,0,0,1],!lo(e,Ai,Ci,Ri,sr))?!1:(rr.crossVectors(Bn,zn),e=[rr.x,rr.y,rr.z],lo(e,Ai,Ci,Ri,sr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(En[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),En[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),En[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),En[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),En[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),En[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),En[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),En[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(En),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},En=[new w,new w,new w,new w,new w,new w,new w,new w],sn=new w,ir=new mn,Ai=new w,Ci=new w,Ri=new w,Bn=new w,zn=new w,ai=new w,ls=new w,sr=new w,rr=new w,oi=new w;function lo(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){oi.fromArray(i,r);let o=s.x*Math.abs(oi.x)+s.y*Math.abs(oi.y)+s.z*Math.abs(oi.z),c=t.dot(oi),l=e.dot(oi),h=n.dot(oi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var _u=new mn,cs=new w,co=new w,Wi=class{constructor(t=new w,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):_u.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;cs.subVectors(t,this.center);let e=cs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(cs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(co.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(cs.copy(t.center).add(co)),this.expandByPoint(cs.copy(t.center).sub(co))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},wn=new w,ho=new w,ar=new w,Vn=new w,uo=new w,or=new w,fo=new w,Xi=class{constructor(t=new w,e=new w(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,wn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=wn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(wn.copy(this.origin).addScaledVector(this.direction,e),wn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ho.copy(t).add(e).multiplyScalar(.5),ar.copy(e).sub(t).normalize(),Vn.copy(this.origin).sub(ho);let r=t.distanceTo(e)*.5,a=-this.direction.dot(ar),o=Vn.dot(this.direction),c=-Vn.dot(ar),l=Vn.lengthSq(),h=Math.abs(1-a*a),u,f,d,g;if(h>0)if(u=a*c-o,f=a*o-c,g=r*h,u>=0)if(f>=-g)if(f<=g){let x=1/h;u*=x,f*=x,d=u*(u+a*f+2*o)+f*(a*u+f+2*c)+l}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ho).addScaledVector(ar,f),d}intersectSphere(t,e){wn.subVectors(t.center,this.origin);let n=wn.dot(this.direction),s=wn.dot(wn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,wn)!==null}intersectTriangle(t,e,n,s,r){uo.subVectors(e,t),or.subVectors(n,t),fo.crossVectors(uo,or);let a=this.direction.dot(fo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Vn.subVectors(this.origin,t);let c=o*this.direction.dot(or.crossVectors(Vn,or));if(c<0)return null;let l=o*this.direction.dot(uo.cross(Vn));if(l<0||c+l>a)return null;let h=-o*Vn.dot(fo);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},pe=class i{constructor(t,e,n,s,r,a,o,c,l,h,u,f,d,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,u,f,d,g,x,m)}set(t,e,n,s,r,a,o,c,l,h,u,f,d,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Ii.setFromMatrixColumn(t,0).length(),r=1/Ii.setFromMatrixColumn(t,1).length(),a=1/Ii.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=a*h,d=a*u,g=o*h,x=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+g*l,e[5]=f-x*l,e[9]=-o*c,e[2]=x-f*l,e[6]=g+d*l,e[10]=a*c}else if(t.order==="YXZ"){let f=c*h,d=c*u,g=l*h,x=l*u;e[0]=f+x*o,e[4]=g*o-d,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=d*o-g,e[6]=x+f*o,e[10]=a*c}else if(t.order==="ZXY"){let f=c*h,d=c*u,g=l*h,x=l*u;e[0]=f-x*o,e[4]=-a*u,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*h,e[9]=x-f*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let f=a*h,d=a*u,g=o*h,x=o*u;e[0]=c*h,e[4]=g*l-d,e[8]=f*l+x,e[1]=c*u,e[5]=x*l+f,e[9]=d*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let f=a*c,d=a*l,g=o*c,x=o*l;e[0]=c*h,e[4]=x-f*u,e[8]=g*u+d,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=d*u+g,e[10]=f-x*u}else if(t.order==="XZY"){let f=a*c,d=a*l,g=o*c,x=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+x,e[5]=a*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=o*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(xu,t,yu)}lookAt(t,e,n){let s=this.elements;return He.subVectors(t,e),He.lengthSq()===0&&(He.z=1),He.normalize(),kn.crossVectors(n,He),kn.lengthSq()===0&&(Math.abs(n.z)===1?He.x+=1e-4:He.z+=1e-4,He.normalize(),kn.crossVectors(n,He)),kn.normalize(),lr.crossVectors(He,kn),s[0]=kn.x,s[4]=lr.x,s[8]=He.x,s[1]=kn.y,s[5]=lr.y,s[9]=He.y,s[2]=kn.z,s[6]=lr.z,s[10]=He.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],x=n[6],m=n[10],p=n[14],E=n[3],T=n[7],v=n[11],A=n[15],R=s[0],P=s[4],N=s[8],b=s[12],M=s[1],L=s[5],k=s[9],X=s[13],Y=s[2],K=s[6],q=s[10],B=s[14],G=s[3],rt=s[7],gt=s[11],St=s[15];return r[0]=a*R+o*M+c*Y+l*G,r[4]=a*P+o*L+c*K+l*rt,r[8]=a*N+o*k+c*q+l*gt,r[12]=a*b+o*X+c*B+l*St,r[1]=h*R+u*M+f*Y+d*G,r[5]=h*P+u*L+f*K+d*rt,r[9]=h*N+u*k+f*q+d*gt,r[13]=h*b+u*X+f*B+d*St,r[2]=g*R+x*M+m*Y+p*G,r[6]=g*P+x*L+m*K+p*rt,r[10]=g*N+x*k+m*q+p*gt,r[14]=g*b+x*X+m*B+p*St,r[3]=E*R+T*M+v*Y+A*G,r[7]=E*P+T*L+v*K+A*rt,r[11]=E*N+T*k+v*q+A*gt,r[15]=E*b+T*X+v*B+A*St,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*c*u-s*l*u-r*o*f+n*l*f+s*o*d-n*c*d)+x*(+e*c*d-e*l*f+r*a*f-s*a*d+s*l*h-r*c*h)+m*(+e*l*u-e*o*d-r*a*u+n*a*d+r*o*h-n*l*h)+p*(-s*o*h-e*c*u+e*o*f+s*a*u-n*a*f+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],x=t[13],m=t[14],p=t[15],E=u*m*l-x*f*l+x*c*d-o*m*d-u*c*p+o*f*p,T=g*f*l-h*m*l-g*c*d+a*m*d+h*c*p-a*f*p,v=h*x*l-g*u*l+g*o*d-a*x*d-h*o*p+a*u*p,A=g*u*c-h*x*c-g*o*f+a*x*f+h*o*m-a*u*m,R=e*E+n*T+s*v+r*A;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/R;return t[0]=E*P,t[1]=(x*f*r-u*m*r-x*s*d+n*m*d+u*s*p-n*f*p)*P,t[2]=(o*m*r-x*c*r+x*s*l-n*m*l-o*s*p+n*c*p)*P,t[3]=(u*c*r-o*f*r-u*s*l+n*f*l+o*s*d-n*c*d)*P,t[4]=T*P,t[5]=(h*m*r-g*f*r+g*s*d-e*m*d-h*s*p+e*f*p)*P,t[6]=(g*c*r-a*m*r-g*s*l+e*m*l+a*s*p-e*c*p)*P,t[7]=(a*f*r-h*c*r+h*s*l-e*f*l-a*s*d+e*c*d)*P,t[8]=v*P,t[9]=(g*u*r-h*x*r-g*n*d+e*x*d+h*n*p-e*u*p)*P,t[10]=(a*x*r-g*o*r+g*n*l-e*x*l-a*n*p+e*o*p)*P,t[11]=(h*o*r-a*u*r-h*n*l+e*u*l+a*n*d-e*o*d)*P,t[12]=A*P,t[13]=(h*x*s-g*u*s+g*n*f-e*x*f-h*n*m+e*u*m)*P,t[14]=(g*o*s-a*x*s-g*n*c+e*x*c+a*n*m-e*o*m)*P,t[15]=(a*u*s-h*o*s+h*n*c-e*u*c-a*n*f+e*o*f)*P,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,u=o+o,f=r*l,d=r*h,g=r*u,x=a*h,m=a*u,p=o*u,E=c*l,T=c*h,v=c*u,A=n.x,R=n.y,P=n.z;return s[0]=(1-(x+p))*A,s[1]=(d+v)*A,s[2]=(g-T)*A,s[3]=0,s[4]=(d-v)*R,s[5]=(1-(f+p))*R,s[6]=(m+E)*R,s[7]=0,s[8]=(g+T)*P,s[9]=(m-E)*P,s[10]=(1-(f+x))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Ii.set(s[0],s[1],s[2]).length(),a=Ii.set(s[4],s[5],s[6]).length(),o=Ii.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],rn.copy(this);let l=1/r,h=1/a,u=1/o;return rn.elements[0]*=l,rn.elements[1]*=l,rn.elements[2]*=l,rn.elements[4]*=h,rn.elements[5]*=h,rn.elements[6]*=h,rn.elements[8]*=u,rn.elements[9]*=u,rn.elements[10]*=u,e.setFromRotationMatrix(rn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=on,c=!1){let l=this.elements,h=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s),g,x;if(c)g=r/(a-r),x=a*r/(a-r);else if(o===on)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===xs)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=on,c=!1){let l=this.elements,h=2/(e-t),u=2/(n-s),f=-(e+t)/(e-t),d=-(n+s)/(n-s),g,x;if(c)g=1/(a-r),x=a/(a-r);else if(o===on)g=-2/(a-r),x=-(a+r)/(a-r);else if(o===xs)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ii=new w,rn=new pe,xu=new w(0,0,0),yu=new w(1,1,1),kn=new w,lr=new w,He=new w,Gl=new pe,Wl=new je,cn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-kt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(kt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Gl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Gl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Wl.setFromEuler(this),this.setFromQuaternion(Wl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};cn.DEFAULT_ORDER="XYZ";var Ms=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},vu=0,Xl=new w,Pi=new je,An=new pe,cr=new w,hs=new w,Mu=new w,bu=new je,ql=new w(1,0,0),Yl=new w(0,1,0),$l=new w(0,0,1),Zl={type:"added"},Su={type:"removed"},Li={type:"childadded",child:null},po={type:"childremoved",child:null},Ee=class i extends fn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vu++}),this.uuid=ts(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new w,e=new cn,n=new je,s=new w(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pe},normalMatrix:{value:new zt}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ms,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Pi.setFromAxisAngle(t,e),this.quaternion.multiply(Pi),this}rotateOnWorldAxis(t,e){return Pi.setFromAxisAngle(t,e),this.quaternion.premultiply(Pi),this}rotateX(t){return this.rotateOnAxis(ql,t)}rotateY(t){return this.rotateOnAxis(Yl,t)}rotateZ(t){return this.rotateOnAxis($l,t)}translateOnAxis(t,e){return Xl.copy(t).applyQuaternion(this.quaternion),this.position.add(Xl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ql,t)}translateY(t){return this.translateOnAxis(Yl,t)}translateZ(t){return this.translateOnAxis($l,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?cr.copy(t):cr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(hs,cr,this.up):An.lookAt(cr,hs,this.up),this.quaternion.setFromRotationMatrix(An),s&&(An.extractRotation(s.matrixWorld),Pi.setFromRotationMatrix(An),this.quaternion.premultiply(Pi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Zl),Li.child=t,this.dispatchEvent(Li),Li.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Su),po.child=t,this.dispatchEvent(po),po.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),An.multiply(t.parent.matrixWorld)),t.applyMatrix4(An),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Zl),Li.child=t,this.dispatchEvent(Li),Li.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,t,Mu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,bu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ee.DEFAULT_UP=new w(0,1,0);Ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var an=new w,Cn=new w,mo=new w,Rn=new w,Di=new w,Ui=new w,Jl=new w,go=new w,_o=new w,xo=new w,yo=new de,vo=new de,Mo=new de,Wn=class i{constructor(t=new w,e=new w,n=new w){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),an.subVectors(t,e),s.cross(an);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){an.subVectors(s,e),Cn.subVectors(n,e),mo.subVectors(t,e);let a=an.dot(an),o=an.dot(Cn),c=an.dot(mo),l=Cn.dot(Cn),h=Cn.dot(mo),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(l*c-o*h)*f,g=(a*h-o*c)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Rn)===null?!1:Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,Rn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Rn.x),c.addScaledVector(a,Rn.y),c.addScaledVector(o,Rn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return yo.setScalar(0),vo.setScalar(0),Mo.setScalar(0),yo.fromBufferAttribute(t,e),vo.fromBufferAttribute(t,n),Mo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(yo,r.x),a.addScaledVector(vo,r.y),a.addScaledVector(Mo,r.z),a}static isFrontFacing(t,e,n,s){return an.subVectors(n,e),Cn.subVectors(t,e),an.cross(Cn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return an.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),an.cross(Cn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Di.subVectors(s,n),Ui.subVectors(r,n),go.subVectors(t,n);let c=Di.dot(go),l=Ui.dot(go);if(c<=0&&l<=0)return e.copy(n);_o.subVectors(t,s);let h=Di.dot(_o),u=Ui.dot(_o);if(h>=0&&u<=h)return e.copy(s);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(Di,a);xo.subVectors(t,r);let d=Di.dot(xo),g=Ui.dot(xo);if(g>=0&&d<=g)return e.copy(r);let x=d*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(Ui,o);let m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return Jl.subVectors(r,s),o=(u-h)/(u-h+(d-g)),e.copy(s).addScaledVector(Jl,o);let p=1/(m+x+f);return a=x*p,o=f*p,e.copy(n).addScaledVector(Di,a).addScaledVector(Ui,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Yc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},hr={h:0,s:0,l:0};function bo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Xt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ie){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=$t.workingColorSpace){return this.r=t,this.g=e,this.b=n,$t.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=$t.workingColorSpace){if(t=nl(t,1),e=kt(e,0,1),n=kt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=bo(a,r,t+1/3),this.g=bo(a,r,t),this.b=bo(a,r,t-1/3)}return $t.colorSpaceToWorking(this,s),this}setStyle(t,e=Ie){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ie){let n=Yc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=In(t.r),this.g=In(t.g),this.b=In(t.b),this}copyLinearToSRGB(t){return this.r=zi(t.r),this.g=zi(t.g),this.b=zi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ie){return $t.workingToColorSpace(Se.copy(this),t),Math.round(kt(Se.r*255,0,255))*65536+Math.round(kt(Se.g*255,0,255))*256+Math.round(kt(Se.b*255,0,255))}getHexString(t=Ie){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.workingToColorSpace(Se.copy(this),e);let n=Se.r,s=Se.g,r=Se.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=$t.workingColorSpace){return $t.workingToColorSpace(Se.copy(this),e),t.r=Se.r,t.g=Se.g,t.b=Se.b,t}getStyle(t=Ie){$t.workingToColorSpace(Se.copy(this),t);let e=Se.r,n=Se.g,s=Se.b;return t!==Ie?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Hn),this.setHSL(Hn.h+t,Hn.s+e,Hn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Hn),t.getHSL(hr);let n=fs(Hn.h,hr.h,e),s=fs(Hn.s,hr.s,e),r=fs(Hn.l,hr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Se=new Xt;Xt.NAMES=Yc;var Tu=0,Yn=class extends fn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tu++}),this.uuid=ts(),this.name="",this.type="Material",this.blending=di,this.side=Pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sr,this.blendDst=Tr,this.blendEquation=qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=fi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Do,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hi,this.stencilZFail=hi,this.stencilZPass=hi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==di&&(n.blending=this.blending),this.side!==Pn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Sr&&(n.blendSrc=this.blendSrc),this.blendDst!==Tr&&(n.blendDst=this.blendDst),this.blendEquation!==qn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==fi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Do&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==hi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==hi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},bs=class extends Yn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=Go,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ge=new w,ur=new vt,Eu=0,Te=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Eu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Uo,this.updateRanges=[],this.gpuType=yn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ur.fromBufferAttribute(this,e),ur.applyMatrix3(t),this.setXY(e,ur.x,ur.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix3(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix4(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyNormalMatrix(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.transformDirection(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Bi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Re(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Bi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Bi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Bi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Bi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),s=Re(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),s=Re(s,this.array),r=Re(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Uo&&(t.usage=this.usage),t}};var Ss=class extends Te{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ts=class extends Te{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var _e=class extends Te{constructor(t,e,n){super(new Float32Array(t),e,n)}},wu=0,Je=new pe,So=new Ee,Ni=new w,Ge=new mn,us=new mn,Me=new w,Xe=class i extends fn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wu++}),this.uuid=ts(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(sl(t)?Ts:Ss)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Je.makeRotationFromQuaternion(t),this.applyMatrix4(Je),this}rotateX(t){return Je.makeRotationX(t),this.applyMatrix4(Je),this}rotateY(t){return Je.makeRotationY(t),this.applyMatrix4(Je),this}rotateZ(t){return Je.makeRotationZ(t),this.applyMatrix4(Je),this}translate(t,e,n){return Je.makeTranslation(t,e,n),this.applyMatrix4(Je),this}scale(t,e,n){return Je.makeScale(t,e,n),this.applyMatrix4(Je),this}lookAt(t){return So.lookAt(t),So.updateMatrix(),this.applyMatrix4(So.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ni).negate(),this.translate(Ni.x,Ni.y,Ni.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new _e(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Ge.setFromBufferAttribute(r),this.morphTargetsRelative?(Me.addVectors(this.boundingBox.min,Ge.min),this.boundingBox.expandByPoint(Me),Me.addVectors(this.boundingBox.max,Ge.max),this.boundingBox.expandByPoint(Me)):(this.boundingBox.expandByPoint(Ge.min),this.boundingBox.expandByPoint(Ge.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(t){let n=this.boundingSphere.center;if(Ge.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];us.setFromBufferAttribute(o),this.morphTargetsRelative?(Me.addVectors(Ge.min,us.min),Ge.expandByPoint(Me),Me.addVectors(Ge.max,us.max),Ge.expandByPoint(Me)):(Ge.expandByPoint(us.min),Ge.expandByPoint(us.max))}Ge.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Me.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Me));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Me.fromBufferAttribute(o,l),c&&(Ni.fromBufferAttribute(t,l),Me.add(Ni)),s=Math.max(s,n.distanceToSquared(Me))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Te(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let N=0;N<n.count;N++)o[N]=new w,c[N]=new w;let l=new w,h=new w,u=new w,f=new vt,d=new vt,g=new vt,x=new w,m=new w;function p(N,b,M){l.fromBufferAttribute(n,N),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,M),f.fromBufferAttribute(r,N),d.fromBufferAttribute(r,b),g.fromBufferAttribute(r,M),h.sub(l),u.sub(l),d.sub(f),g.sub(f);let L=1/(d.x*g.y-g.x*d.y);isFinite(L)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(L),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(L),o[N].add(x),o[b].add(x),o[M].add(x),c[N].add(m),c[b].add(m),c[M].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let N=0,b=E.length;N<b;++N){let M=E[N],L=M.start,k=M.count;for(let X=L,Y=L+k;X<Y;X+=3)p(t.getX(X+0),t.getX(X+1),t.getX(X+2))}let T=new w,v=new w,A=new w,R=new w;function P(N){A.fromBufferAttribute(s,N),R.copy(A);let b=o[N];T.copy(b),T.sub(A.multiplyScalar(A.dot(b))).normalize(),v.crossVectors(R,b);let L=v.dot(c[N])<0?-1:1;a.setXYZW(N,T.x,T.y,T.z,L)}for(let N=0,b=E.length;N<b;++N){let M=E[N],L=M.start,k=M.count;for(let X=L,Y=L+k;X<Y;X+=3)P(t.getX(X+0)),P(t.getX(X+1)),P(t.getX(X+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Te(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new w,r=new w,a=new w,o=new w,c=new w,l=new w,h=new w,u=new w;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Me.fromBufferAttribute(t,e),Me.normalize(),t.setXYZ(e,Me.x,Me.y,Me.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,u=o.normalized,f=new l.constructor(c.length*h),d=0,g=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?d=c[x]*o.data.stride+o.offset:d=c[x]*h;for(let p=0;p<h;p++)f[g++]=l[d++]}return new Te(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=t(f,n);c.push(d)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Kl=new pe,li=new Xi,dr=new Wi,jl=new w,fr=new w,pr=new w,mr=new w,To=new w,gr=new w,Ql=new w,_r=new w,se=class extends Ee{constructor(t=new Xe,e=new bs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){gr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(To.fromBufferAttribute(u,t),a?gr.addScaledVector(To,h):gr.addScaledVector(To.sub(e),h))}e.add(gr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),dr.copy(n.boundingSphere),dr.applyMatrix4(r),li.copy(t.ray).recast(t.near),!(dr.containsPoint(li.origin)===!1&&(li.intersectSphere(dr,jl)===null||li.origin.distanceToSquared(jl)>(t.far-t.near)**2))&&(Kl.copy(r).invert(),li.copy(t.ray).applyMatrix4(Kl),!(n.boundingBox!==null&&li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,li)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=a[m.materialIndex],E=Math.max(m.start,d.start),T=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let v=E,A=T;v<A;v+=3){let R=o.getX(v),P=o.getX(v+1),N=o.getX(v+2);s=xr(this,p,t,n,l,h,u,R,P,N),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let E=o.getX(m),T=o.getX(m+1),v=o.getX(m+2);s=xr(this,a,t,n,l,h,u,E,T,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=a[m.materialIndex],E=Math.max(m.start,d.start),T=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let v=E,A=T;v<A;v+=3){let R=v,P=v+1,N=v+2;s=xr(this,p,t,n,l,h,u,R,P,N),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let E=m,T=m+1,v=m+2;s=xr(this,a,t,n,l,h,u,E,T,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Au(i,t,e,n,s,r,a,o){let c;if(t.side===Le?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===Pn,o),c===null)return null;_r.copy(o),_r.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(_r);return l<e.near||l>e.far?null:{distance:l,point:_r.clone(),object:i}}function xr(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,fr),i.getVertexPosition(c,pr),i.getVertexPosition(l,mr);let h=Au(i,t,e,n,fr,pr,mr,Ql);if(h){let u=new w;Wn.getBarycoord(Ql,fr,pr,mr,u),s&&(h.uv=Wn.getInterpolatedAttribute(s,o,c,l,u,new vt)),r&&(h.uv1=Wn.getInterpolatedAttribute(r,o,c,l,u,new vt)),a&&(h.normal=Wn.getInterpolatedAttribute(a,o,c,l,u,new w),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:c,c:l,normal:new w,materialIndex:0};Wn.getNormal(fr,pr,mr,f.normal),h.face=f,h.barycoord=u}return h}var qi=class i extends Xe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new _e(l,3)),this.setAttribute("normal",new _e(h,3)),this.setAttribute("uv",new _e(u,2));function g(x,m,p,E,T,v,A,R,P,N,b){let M=v/P,L=A/N,k=v/2,X=A/2,Y=R/2,K=P+1,q=N+1,B=0,G=0,rt=new w;for(let gt=0;gt<q;gt++){let St=gt*L-X;for(let It=0;It<K;It++){let qt=It*M-k;rt[x]=qt*E,rt[m]=St*T,rt[p]=Y,l.push(rt.x,rt.y,rt.z),rt[x]=0,rt[m]=0,rt[p]=R>0?1:-1,h.push(rt.x,rt.y,rt.z),u.push(It/P),u.push(1-gt/N),B+=1}}for(let gt=0;gt<N;gt++)for(let St=0;St<P;St++){let It=f+St+K*gt,qt=f+St+K*(gt+1),ee=f+(St+1)+K*(gt+1),Yt=f+(St+1)+K*gt;c.push(It,qt,Yt),c.push(qt,ee,Yt),G+=6}o.addGroup(d,G,b),d+=G,f+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function yi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function we(i){let t={};for(let e=0;e<i.length;e++){let n=yi(i[e]);for(let s in n)t[s]=n[s]}return t}function Cu(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function rl(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$t.workingColorSpace}var $c={clone:yi,merge:we},Ru=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Iu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,hn=class extends Yn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ru,this.fragmentShader=Iu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=yi(t.uniforms),this.uniformsGroups=Cu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Es=class extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe,this.coordinateSystem=on,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Gn=new w,tc=new vt,ec=new vt,Fe=class extends Es{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ki*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ds*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ki*2*Math.atan(Math.tan(ds*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Gn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Gn.x,Gn.y).multiplyScalar(-t/Gn.z),Gn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gn.x,Gn.y).multiplyScalar(-t/Gn.z)}getViewSize(t,e){return this.getViewBounds(t,tc,ec),e.subVectors(ec,tc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ds*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Fi=-90,Oi=1,Pr=class extends Ee{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Fe(Fi,Oi,t,e);s.layers=this.layers,this.add(s);let r=new Fe(Fi,Oi,t,e);r.layers=this.layers,this.add(r);let a=new Fe(Fi,Oi,t,e);a.layers=this.layers,this.add(a);let o=new Fe(Fi,Oi,t,e);o.layers=this.layers,this.add(o);let c=new Fe(Fi,Oi,t,e);c.layers=this.layers,this.add(c);let l=new Fe(Fi,Oi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===on)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===xs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ws=class extends We{constructor(t=[],e=_i,n,s,r,a,o,c,l,h){super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Lr=class extends pn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ws(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new qi(5,5,5),r=new hn({name:"CubemapFromEquirect",uniforms:yi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Le,blending:Dn});r.uniforms.tEquirect.value=e;let a=new se(s,r),o=e.minFilter;return e.minFilter===jn&&(e.minFilter=ln),new Pr(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},ui=class extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}},Pu={type:"move"},Yi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ui,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ui,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ui,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Pu)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ui;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}};var As=class extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cn,this.environmentIntensity=1,this.environmentRotation=new cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Eo=new w,Lu=new w,Du=new zt,Pe=class{constructor(t=new w(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Eo.subVectors(n,e).cross(Lu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Eo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Du.getNormalMatrix(t),s=this.coplanarPoint(Eo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ci=new Wi,Uu=new vt(.5,.5),yr=new w,$i=class{constructor(t=new Pe,e=new Pe,n=new Pe,s=new Pe,r=new Pe,a=new Pe){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=on,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],u=r[5],f=r[6],d=r[7],g=r[8],x=r[9],m=r[10],p=r[11],E=r[12],T=r[13],v=r[14],A=r[15];if(s[0].setComponents(l-a,d-h,p-g,A-E).normalize(),s[1].setComponents(l+a,d+h,p+g,A+E).normalize(),s[2].setComponents(l+o,d+u,p+x,A+T).normalize(),s[3].setComponents(l-o,d-u,p-x,A-T).normalize(),n)s[4].setComponents(c,f,m,v).normalize(),s[5].setComponents(l-c,d-f,p-m,A-v).normalize();else if(s[4].setComponents(l-c,d-f,p-m,A-v).normalize(),e===on)s[5].setComponents(l+c,d+f,p+m,A+v).normalize();else if(e===xs)s[5].setComponents(c,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ci.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ci.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ci)}intersectsSprite(t){ci.center.set(0,0,0);let e=Uu.distanceTo(t.center);return ci.radius=.7071067811865476+e,ci.applyMatrix4(t.matrixWorld),this.intersectsSphere(ci)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(yr.x=s.normal.x>0?t.max.x:t.min.x,yr.y=s.normal.y>0?t.max.y:t.min.y,yr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(yr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Cs=class extends We{constructor(t,e,n=Qn,s,r,a,o=Ke,c=Ke,l,h=Vi,u=1){if(h!==Vi&&h!==Qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Gi(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Rs=class extends We{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var Qe=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(a-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new vt:new w);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new w,s=[],r=[],a=[],o=new w,c=new pe;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new w)}r[0]=new w,a[0]=new w;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(kt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(kt(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Is=class extends Qe{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new vt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Dr=class extends Is{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function al(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let f=(a-r)/l-(o-r)/(l+h)+(o-a)/h,d=(o-a)/h-(c-a)/(h+u)+(c-o)/u;f*=h,d*=h,s(a,o,f,d)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var vr=new w,wo=new al,Ao=new al,Co=new al,gn=class extends Qe{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new w){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(vr.subVectors(s[0],s[1]).add(s[0]),l=vr);let u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(vr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=vr),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),wo.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,x,m),Ao.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,x,m),Co.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(wo.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),Ao.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Co.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(wo.calc(c),Ao.calc(c),Co.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new w().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function nc(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function Nu(i,t){let e=1-i;return e*e*t}function Fu(i,t){return 2*(1-i)*i*t}function Ou(i,t){return i*i*t}function ps(i,t,e,n){return Nu(i,t)+Fu(i,e)+Ou(i,n)}function Bu(i,t){let e=1-i;return e*e*e*t}function zu(i,t){let e=1-i;return 3*e*e*i*t}function Vu(i,t){return 3*(1-i)*i*i*t}function ku(i,t){return i*i*i*t}function ms(i,t,e,n,s){return Bu(i,t)+zu(i,e)+Vu(i,n)+ku(i,s)}var Ur=class extends Qe{constructor(t=new vt,e=new vt,n=new vt,s=new vt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new vt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ms(t,s.x,r.x,a.x,o.x),ms(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Nr=class extends Qe{constructor(t=new w,e=new w,n=new w,s=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new w){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ms(t,s.x,r.x,a.x,o.x),ms(t,s.y,r.y,a.y,o.y),ms(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Fr=class extends Qe{constructor(t=new vt,e=new vt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new vt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new vt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Or=class extends Qe{constructor(t=new w,e=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new w){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new w){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Br=class extends Qe{constructor(t=new vt,e=new vt,n=new vt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new vt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ps(t,s.x,r.x,a.x),ps(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ps=class extends Qe{constructor(t=new w,e=new w,n=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new w){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ps(t,s.x,r.x,a.x),ps(t,s.y,r.y,a.y),ps(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},zr=class extends Qe{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new vt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(nc(o,c.x,l.x,h.x,u.x),nc(o,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new vt().fromArray(s))}return this}},Hu=Object.freeze({__proto__:null,ArcCurve:Dr,CatmullRomCurve3:gn,CubicBezierCurve:Ur,CubicBezierCurve3:Nr,EllipseCurve:Is,LineCurve:Fr,LineCurve3:Or,QuadraticBezierCurve:Br,QuadraticBezierCurve3:Ps,SplineCurve:zr});var Ls=class i extends Xe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=t/o,f=e/c,d=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let E=p*f-a;for(let T=0;T<l;T++){let v=T*u-r;g.push(v,-E,0),x.push(0,0,1),m.push(T/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let E=0;E<o;E++){let T=E+l*p,v=E+l*(p+1),A=E+1+l*(p+1),R=E+1+l*p;d.push(T,v,R),d.push(v,A,R)}this.setIndex(d),this.setAttribute("position",new _e(g,3)),this.setAttribute("normal",new _e(x,3)),this.setAttribute("uv",new _e(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Ds=class i extends Xe{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],c=[],l=[],h=[],u=t,f=(e-t)/s,d=new w,g=new vt;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let p=r+m/n*a;d.x=u*Math.cos(p),d.y=u*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let x=0;x<s;x++){let m=x*(n+1);for(let p=0;p<n;p++){let E=p+m,T=E,v=E+n+1,A=E+n+2,R=E+1;o.push(T,v,R),o.push(v,A,R)}}this.setIndex(o),this.setAttribute("position",new _e(c,3)),this.setAttribute("normal",new _e(l,3)),this.setAttribute("uv",new _e(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var _n=class i extends Xe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new w,f=new w,d=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let E=[],T=p/n,v=0;p===0&&a===0?v=.5/e:p===n&&c===Math.PI&&(v=-.5/e);for(let A=0;A<=e;A++){let R=A/e;u.x=-t*Math.cos(s+R*r)*Math.sin(a+T*o),u.y=t*Math.cos(a+T*o),u.z=t*Math.sin(s+R*r)*Math.sin(a+T*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(R+v,1-T),E.push(l++)}h.push(E)}for(let p=0;p<n;p++)for(let E=0;E<e;E++){let T=h[p][E+1],v=h[p][E],A=h[p+1][E],R=h[p+1][E+1];(p!==0||a>0)&&d.push(T,v,R),(p!==n-1||c<Math.PI)&&d.push(v,A,R)}this.setIndex(d),this.setAttribute("position",new _e(g,3)),this.setAttribute("normal",new _e(x,3)),this.setAttribute("uv",new _e(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ln=class i extends Xe{constructor(t=new Ps(new w(-1,-1,0),new w(-1,1,0),new w(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new w,c=new w,l=new vt,h=new w,u=[],f=[],d=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new _e(u,3)),this.setAttribute("normal",new _e(f,3)),this.setAttribute("uv",new _e(d,2));function x(){for(let T=0;T<e;T++)m(T);m(r===!1?e:0),E(),p()}function m(T){h=t.getPointAt(T/e,h);let v=a.normals[T],A=a.binormals[T];for(let R=0;R<=s;R++){let P=R/s*Math.PI*2,N=Math.sin(P),b=-Math.cos(P);c.x=b*v.x+N*A.x,c.y=b*v.y+N*A.y,c.z=b*v.z+N*A.z,c.normalize(),f.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,u.push(o.x,o.y,o.z)}}function p(){for(let T=1;T<=e;T++)for(let v=1;v<=s;v++){let A=(s+1)*(T-1)+(v-1),R=(s+1)*T+(v-1),P=(s+1)*T+v,N=(s+1)*(T-1)+v;g.push(A,R,N),g.push(R,P,N)}}function E(){for(let T=0;T<=e;T++)for(let v=0;v<=s;v++)l.x=T/e,l.y=v/s,d.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Hu[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var tn=class extends Yn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qo,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Vr=class extends Yn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},kr=class extends Yn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Mr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Gu(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var mi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Hr=class extends mi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Io,endingEnd:Io}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Po:r=t,o=2*e-n;break;case Lo:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Po:a=t,c=2*n-e;break;case Lo:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-e)/(s-e),x=g*g,m=x*g,p=-f*m+2*f*x-f*g,E=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,T=(-1-d)*m+(1.5+d)*x+.5*g,v=d*m-d*x;for(let A=0;A!==o;++A)r[A]=p*a[h+A]+E*a[l+A]+T*a[c+A]+v*a[u+A];return r}},Gr=class extends mi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==o;++f)r[f]=a[l+f]*u+a[c+f]*h;return r}},Wr=class extends mi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},qe=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Mr(e,this.TimeBufferType),this.values=Mr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Mr(t.times,Array),values:Mr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Wr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Gr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Hr(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case gs:e=this.InterpolantFactoryMethodDiscrete;break;case Ar:e=this.InterpolantFactoryMethodLinear;break;case br:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return gs;case this.InterpolantFactoryMethodLinear:return Ar;case this.InterpolantFactoryMethodSmooth:return br}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&Gu(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===br,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{let u=o*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){let x=e[u+g];if(x!==e[f+g]||x!==e[d+g]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let u=o*n,f=a*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};qe.prototype.ValueTypeName="";qe.prototype.TimeBufferType=Float32Array;qe.prototype.ValueBufferType=Float32Array;qe.prototype.DefaultInterpolation=Ar;var $n=class extends qe{constructor(t,e,n){super(t,e,n)}};$n.prototype.ValueTypeName="bool";$n.prototype.ValueBufferType=Array;$n.prototype.DefaultInterpolation=gs;$n.prototype.InterpolantFactoryMethodLinear=void 0;$n.prototype.InterpolantFactoryMethodSmooth=void 0;var Xr=class extends qe{constructor(t,e,n,s){super(t,e,n,s)}};Xr.prototype.ValueTypeName="color";var qr=class extends qe{constructor(t,e,n,s){super(t,e,n,s)}};qr.prototype.ValueTypeName="number";var Yr=class extends mi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let h=l+o;l!==h;l+=4)je.slerpFlat(r,0,a,l-o,a,l,c);return r}},Us=class extends qe{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Yr(this.times,this.values,this.getValueSize(),t)}};Us.prototype.ValueTypeName="quaternion";Us.prototype.InterpolantFactoryMethodSmooth=void 0;var Zn=class extends qe{constructor(t,e,n){super(t,e,n)}};Zn.prototype.ValueTypeName="string";Zn.prototype.ValueBufferType=Array;Zn.prototype.DefaultInterpolation=gs;Zn.prototype.InterpolantFactoryMethodLinear=void 0;Zn.prototype.InterpolantFactoryMethodSmooth=void 0;var $r=class extends qe{constructor(t,e,n,s){super(t,e,n,s)}};$r.prototype.ValueTypeName="vector";var Zr=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],g=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Zc=new Zr,Jr=class{constructor(t){this.manager=t!==void 0?t:Zc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Jr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ns=class extends Ee{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Xt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Fs=class extends Ns{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Ro=new pe,ic=new w,sc=new w,No=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vt(512,512),this.mapType=un,this.map=null,this.mapPass=null,this.matrix=new pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $i,this._frameExtents=new vt(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;ic.setFromMatrixPosition(t.matrixWorld),e.position.copy(ic),sc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(sc),e.updateMatrixWorld(),Ro.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ro,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ro)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var gi=class extends Es{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Fo=class extends No{constructor(){super(new gi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Os=class extends Ns{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.shadow=new Fo}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Kr=class extends Fe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var ol="\\[\\]\\.:\\/",Wu=new RegExp("["+ol+"]","g"),ll="[^"+ol+"]",Xu="[^"+ol.replace("\\.","")+"]",qu=/((?:WC+[\/:])*)/.source.replace("WC",ll),Yu=/(WCOD+)?/.source.replace("WCOD",Xu),$u=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ll),Zu=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ll),Ju=new RegExp("^"+qu+Yu+$u+Zu+"$"),Ku=["material","materials","bones","map"],Oo=class{constructor(t,e,n){let s=n||oe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},oe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Wu,"")}static parseTrackName(t){let e=Ju.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Ku.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};oe.Composite=Oo;oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};oe.prototype.GetterByBindingType=[oe.prototype._getValue_direct,oe.prototype._getValue_array,oe.prototype._getValue_arrayElement,oe.prototype._getValue_toArray];oe.prototype.SetterByBindingTypeAndVersioning=[[oe.prototype._setValue_direct,oe.prototype._setValue_direct_setNeedsUpdate,oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_array,oe.prototype._setValue_array_setNeedsUpdate,oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_arrayElement,oe.prototype._setValue_arrayElement_setNeedsUpdate,oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_fromArray,oe.prototype._setValue_fromArray_setNeedsUpdate,oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var c_=new Float32Array(1);var Zi=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=kt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(kt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Bs=class extends fn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function cl(i,t,e,n){let s=ju(n);switch(e){case Zo:return i*t;case Ko:return i*t/s.components*s.byteLength;case da:return i*t/s.components*s.byteLength;case jo:return i*t*2/s.components*s.byteLength;case fa:return i*t*2/s.components*s.byteLength;case Jo:return i*t*3/s.components*s.byteLength;case en:return i*t*4/s.components*s.byteLength;case pa:return i*t*4/s.components*s.byteLength;case ks:case Hs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Gs:case Ws:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ga:case xa:return Math.max(i,16)*Math.max(t,8)/4;case ma:case _a:return Math.max(i,8)*Math.max(t,8)/2;case ya:case va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ma:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ba:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Sa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ta:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ea:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case wa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Aa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ca:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ra:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ia:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Pa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case La:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Da:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ua:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Na:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Fa:case Oa:case Ba:return Math.ceil(i/4)*Math.ceil(t/4)*16;case za:case Va:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ka:case Ha:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ju(i){switch(i){case un:case Xo:return{byteLength:1,components:1};case Ji:case qo:case Ki:return{byteLength:2,components:1};case ha:case ua:return{byteLength:2,components:4};case Qn:case ca:case yn:return{byteLength:4,components:1};case Yo:case $o:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function yh(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function td(i){let t=new WeakMap;function e(o,c){let l=o.array,h=o.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),o.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){let g=u[f],x=u[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){let x=u[d];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var ed=`#ifdef USE_ALPHAHASH
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
}`,tf=`
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
#endif`,ef=`#if defined( RE_IndirectDiffuse )
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
#endif`,tp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ep=`varying vec2 vUv;
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
}`,Ht={alphahash_fragment:ed,alphahash_pars_fragment:nd,alphamap_fragment:id,alphamap_pars_fragment:sd,alphatest_fragment:rd,alphatest_pars_fragment:ad,aomap_fragment:od,aomap_pars_fragment:ld,batching_pars_vertex:cd,batching_vertex:hd,begin_vertex:ud,beginnormal_vertex:dd,bsdfs:fd,iridescence_fragment:pd,bumpmap_pars_fragment:md,clipping_planes_fragment:gd,clipping_planes_pars_fragment:_d,clipping_planes_pars_vertex:xd,clipping_planes_vertex:yd,color_fragment:vd,color_pars_fragment:Md,color_pars_vertex:bd,color_vertex:Sd,common:Td,cube_uv_reflection_fragment:Ed,defaultnormal_vertex:wd,displacementmap_pars_vertex:Ad,displacementmap_vertex:Cd,emissivemap_fragment:Rd,emissivemap_pars_fragment:Id,colorspace_fragment:Pd,colorspace_pars_fragment:Ld,envmap_fragment:Dd,envmap_common_pars_fragment:Ud,envmap_pars_fragment:Nd,envmap_pars_vertex:Fd,envmap_physical_pars_fragment:Yd,envmap_vertex:Od,fog_vertex:Bd,fog_pars_vertex:zd,fog_fragment:Vd,fog_pars_fragment:kd,gradientmap_pars_fragment:Hd,lightmap_pars_fragment:Gd,lights_lambert_fragment:Wd,lights_lambert_pars_fragment:Xd,lights_pars_begin:qd,lights_toon_fragment:$d,lights_toon_pars_fragment:Zd,lights_phong_fragment:Jd,lights_phong_pars_fragment:Kd,lights_physical_fragment:jd,lights_physical_pars_fragment:Qd,lights_fragment_begin:tf,lights_fragment_maps:ef,lights_fragment_end:nf,logdepthbuf_fragment:sf,logdepthbuf_pars_fragment:rf,logdepthbuf_pars_vertex:af,logdepthbuf_vertex:of,map_fragment:lf,map_pars_fragment:cf,map_particle_fragment:hf,map_particle_pars_fragment:uf,metalnessmap_fragment:df,metalnessmap_pars_fragment:ff,morphinstance_vertex:pf,morphcolor_vertex:mf,morphnormal_vertex:gf,morphtarget_pars_vertex:_f,morphtarget_vertex:xf,normal_fragment_begin:yf,normal_fragment_maps:vf,normal_pars_fragment:Mf,normal_pars_vertex:bf,normal_vertex:Sf,normalmap_pars_fragment:Tf,clearcoat_normal_fragment_begin:Ef,clearcoat_normal_fragment_maps:wf,clearcoat_pars_fragment:Af,iridescence_pars_fragment:Cf,opaque_fragment:Rf,packing:If,premultiplied_alpha_fragment:Pf,project_vertex:Lf,dithering_fragment:Df,dithering_pars_fragment:Uf,roughnessmap_fragment:Nf,roughnessmap_pars_fragment:Ff,shadowmap_pars_fragment:Of,shadowmap_pars_vertex:Bf,shadowmap_vertex:zf,shadowmask_pars_fragment:Vf,skinbase_vertex:kf,skinning_pars_vertex:Hf,skinning_vertex:Gf,skinnormal_vertex:Wf,specularmap_fragment:Xf,specularmap_pars_fragment:qf,tonemapping_fragment:Yf,tonemapping_pars_fragment:$f,transmission_fragment:Zf,transmission_pars_fragment:Jf,uv_pars_fragment:Kf,uv_pars_vertex:jf,uv_vertex:Qf,worldpos_vertex:tp,background_vert:ep,background_frag:np,backgroundCube_vert:ip,backgroundCube_frag:sp,cube_vert:rp,cube_frag:ap,depth_vert:op,depth_frag:lp,distanceRGBA_vert:cp,distanceRGBA_frag:hp,equirect_vert:up,equirect_frag:dp,linedashed_vert:fp,linedashed_frag:pp,meshbasic_vert:mp,meshbasic_frag:gp,meshlambert_vert:_p,meshlambert_frag:xp,meshmatcap_vert:yp,meshmatcap_frag:vp,meshnormal_vert:Mp,meshnormal_frag:bp,meshphong_vert:Sp,meshphong_frag:Tp,meshphysical_vert:Ep,meshphysical_frag:wp,meshtoon_vert:Ap,meshtoon_frag:Cp,points_vert:Rp,points_frag:Ip,shadow_vert:Pp,shadow_frag:Lp,sprite_vert:Dp,sprite_frag:Up},ut={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},vn={basic:{uniforms:we([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:we([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:we([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:we([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:we([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:we([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:we([ut.points,ut.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:we([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:we([ut.common,ut.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:we([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:we([ut.sprite,ut.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:we([ut.common,ut.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:we([ut.lights,ut.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};vn.physical={uniforms:we([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};var Ga={r:0,b:0,g:0},vi=new cn,Np=new pe;function Fp(i,t,e,n,s,r,a){let o=new Xt(0),c=r===!0?0:1,l,h,u=null,f=0,d=null;function g(T){let v=T.isScene===!0?T.background:null;return v&&v.isTexture&&(v=(T.backgroundBlurriness>0?e:t).get(v)),v}function x(T){let v=!1,A=g(T);A===null?p(o,c):A&&A.isColor&&(p(A,1),v=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(T,v){let A=g(v);A&&(A.isCubeTexture||A.mapping===zs)?(h===void 0&&(h=new se(new qi(1,1,1),new hn({name:"BackgroundCubeMaterial",uniforms:yi(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:Le,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,P,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),vi.copy(v.backgroundRotation),vi.x*=-1,vi.y*=-1,vi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Np.makeRotationFromEuler(vi)),h.material.toneMapped=$t.getTransfer(A.colorSpace)!==Kt,(u!==A||f!==A.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=A,f=A.version,d=i.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new se(new Ls(2,2),new hn({name:"BackgroundMaterial",uniforms:yi(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=$t.getTransfer(A.colorSpace)!==Kt,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||f!==A.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=A,f=A.version,d=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function p(T,v){T.getRGB(Ga,rl(i)),n.buffers.color.setClear(Ga.r,Ga.g,Ga.b,v,a)}function E(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,v=1){o.set(T),c=v,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,p(o,c)},render:x,addToRenderList:m,dispose:E}}function Op(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(M,L,k,X,Y){let K=!1,q=u(X,k,L);r!==q&&(r=q,l(r.object)),K=d(M,X,k,Y),K&&g(M,X,k,Y),Y!==null&&t.update(Y,i.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,v(M,L,k,X),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,L,k){let X=k.wireframe===!0,Y=n[M.id];Y===void 0&&(Y={},n[M.id]=Y);let K=Y[L.id];K===void 0&&(K={},Y[L.id]=K);let q=K[X];return q===void 0&&(q=f(c()),K[X]=q),q}function f(M){let L=[],k=[],X=[];for(let Y=0;Y<e;Y++)L[Y]=0,k[Y]=0,X[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:k,attributeDivisors:X,object:M,attributes:{},index:null}}function d(M,L,k,X){let Y=r.attributes,K=L.attributes,q=0,B=k.getAttributes();for(let G in B)if(B[G].location>=0){let gt=Y[G],St=K[G];if(St===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(St=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(St=M.instanceColor)),gt===void 0||gt.attribute!==St||St&&gt.data!==St.data)return!0;q++}return r.attributesNum!==q||r.index!==X}function g(M,L,k,X){let Y={},K=L.attributes,q=0,B=k.getAttributes();for(let G in B)if(B[G].location>=0){let gt=K[G];gt===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(gt=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(gt=M.instanceColor));let St={};St.attribute=gt,gt&&gt.data&&(St.data=gt.data),Y[G]=St,q++}r.attributes=Y,r.attributesNum=q,r.index=X}function x(){let M=r.newAttributes;for(let L=0,k=M.length;L<k;L++)M[L]=0}function m(M){p(M,0)}function p(M,L){let k=r.newAttributes,X=r.enabledAttributes,Y=r.attributeDivisors;k[M]=1,X[M]===0&&(i.enableVertexAttribArray(M),X[M]=1),Y[M]!==L&&(i.vertexAttribDivisor(M,L),Y[M]=L)}function E(){let M=r.newAttributes,L=r.enabledAttributes;for(let k=0,X=L.length;k<X;k++)L[k]!==M[k]&&(i.disableVertexAttribArray(k),L[k]=0)}function T(M,L,k,X,Y,K,q){q===!0?i.vertexAttribIPointer(M,L,k,Y,K):i.vertexAttribPointer(M,L,k,X,Y,K)}function v(M,L,k,X){x();let Y=X.attributes,K=k.getAttributes(),q=L.defaultAttributeValues;for(let B in K){let G=K[B];if(G.location>=0){let rt=Y[B];if(rt===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(rt=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(rt=M.instanceColor)),rt!==void 0){let gt=rt.normalized,St=rt.itemSize,It=t.get(rt);if(It===void 0)continue;let qt=It.buffer,ee=It.type,Yt=It.bytesPerElement,$=ee===i.INT||ee===i.UNSIGNED_INT||rt.gpuType===ca;if(rt.isInterleavedBufferAttribute){let et=rt.data,_t=et.stride,Pt=rt.offset;if(et.isInstancedInterleavedBuffer){for(let Et=0;Et<G.locationSize;Et++)p(G.location+Et,et.meshPerAttribute);M.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let Et=0;Et<G.locationSize;Et++)m(G.location+Et);i.bindBuffer(i.ARRAY_BUFFER,qt);for(let Et=0;Et<G.locationSize;Et++)T(G.location+Et,St/G.locationSize,ee,gt,_t*Yt,(Pt+St/G.locationSize*Et)*Yt,$)}else{if(rt.isInstancedBufferAttribute){for(let et=0;et<G.locationSize;et++)p(G.location+et,rt.meshPerAttribute);M.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let et=0;et<G.locationSize;et++)m(G.location+et);i.bindBuffer(i.ARRAY_BUFFER,qt);for(let et=0;et<G.locationSize;et++)T(G.location+et,St/G.locationSize,ee,gt,St*Yt,St/G.locationSize*et*Yt,$)}}else if(q!==void 0){let gt=q[B];if(gt!==void 0)switch(gt.length){case 2:i.vertexAttrib2fv(G.location,gt);break;case 3:i.vertexAttrib3fv(G.location,gt);break;case 4:i.vertexAttrib4fv(G.location,gt);break;default:i.vertexAttrib1fv(G.location,gt)}}}}E()}function A(){N();for(let M in n){let L=n[M];for(let k in L){let X=L[k];for(let Y in X)h(X[Y].object),delete X[Y];delete L[k]}delete n[M]}}function R(M){if(n[M.id]===void 0)return;let L=n[M.id];for(let k in L){let X=L[k];for(let Y in X)h(X[Y].object),delete X[Y];delete L[k]}delete n[M.id]}function P(M){for(let L in n){let k=n[L];if(k[M.id]===void 0)continue;let X=k[M.id];for(let Y in X)h(X[Y].object),delete X[Y];delete k[M.id]}}function N(){b(),a=!0,r!==s&&(r=s,l(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:N,resetDefaultState:b,dispose:A,releaseStatesOfGeometry:R,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:m,disableUnusedAttributes:E}}function Bp(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function o(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,n,1)}function c(l,h,u,f){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)a(l[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*f[x];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function zp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let P=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==en&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){let N=P===Ki&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==un&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==yn&&!N)}function c(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:T,maxFragmentUniforms:v,vertexTextures:A,maxSamples:R}}function Vp(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Pe,o=new zt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let E=r?0:n,T=E*4,v=p.clippingState||null;c.value=v,v=h(g,f,T,d);for(let A=0;A!==T;++A)v[A]=e[A];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=d+x*4,E=f.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,v=d;T!==x;++T,v+=4)a.copy(u[T]).applyMatrix4(E,o),a.normal.toArray(m,v),m[v+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function kp(i){let t=new WeakMap;function e(a,o){return o===aa?a.mapping=_i:o===oa&&(a.mapping=xi),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===aa||o===oa)if(t.has(a)){let c=t.get(a).texture;return e(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Lr(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var ns=4,Jc=[.125,.215,.35,.446,.526,.582],Si=20,hl=new gi,Kc=new Xt,ul=null,dl=0,fl=0,pl=!1,bi=(1+Math.sqrt(5))/2,es=1/bi,jc=[new w(-bi,es,0),new w(bi,es,0),new w(-es,0,bi),new w(es,0,bi),new w(0,bi,-es),new w(0,bi,es),new w(-1,1,-1),new w(1,1,-1),new w(-1,1,1),new w(1,1,1)],Hp=new w,qa=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=Hp}=r;ul=this._renderer.getRenderTarget(),dl=this._renderer.getActiveCubeFace(),fl=this._renderer.getActiveMipmapLevel(),pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=eh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=th(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ul,dl,fl),this._renderer.xr.enabled=pl,t.scissorTest=!1,Wa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===_i||t.mapping===xi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ul=this._renderer.getRenderTarget(),dl=this._renderer.getActiveCubeFace(),fl=this._renderer.getActiveMipmapLevel(),pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:Ki,format:en,colorSpace:pi,depthBuffer:!1},s=Qc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qc(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Gp(r)),this._blurMaterial=Wp(r,t,e)}return s}_compileMaterial(t){let e=new se(this._lodPlanes[0],t);this._renderer.compile(e,hl)}_sceneToCubeUV(t,e,n,s,r){let c=new Fe(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Kc),u.toneMapping=Un,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let x=new bs({name:"PMREM.Background",side:Le,depthWrite:!1,depthTest:!1}),m=new se(new qi,x),p=!1,E=t.background;E?E.isColor&&(x.color.copy(E),t.background=null,p=!0):(x.color.copy(Kc),p=!0);for(let T=0;T<6;T++){let v=T%3;v===0?(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[T],r.y,r.z)):v===1?(c.up.set(0,0,l[T]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[T],r.z)):(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[T]));let A=this._cubeSize;Wa(s,v*A,T>2?A:0,A,A),u.setRenderTarget(s),p&&u.render(m,c),u.render(t,c)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=f,t.background=E}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===_i||t.mapping===xi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=eh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=th());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new se(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;Wa(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,hl)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=jc[(s-r-1)%jc.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new se(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Si-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Si;m>Si&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Si}`);let p=[],E=0;for(let P=0;P<Si;++P){let N=P/x,b=Math.exp(-N*N/2);p.push(b),P===0?E+=b:P<m&&(E+=2*b)}for(let P=0;P<p.length;P++)p[P]=p[P]/E;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:T}=this;f.dTheta.value=g,f.mipInt.value=T-n;let v=this._sizeLods[s],A=3*v*(s>T-ns?s-T+ns:0),R=4*(this._cubeSize-v);Wa(e,A,R,3*v,2*v),c.setRenderTarget(e),c.render(u,hl)}};function Gp(i){let t=[],e=[],n=[],s=i,r=i-ns+1+Jc.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let c=1/o;a>i-ns?c=Jc[a-i+ns-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,x=3,m=2,p=1,E=new Float32Array(x*g*d),T=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let R=0;R<d;R++){let P=R%3*2/3-1,N=R>2?0:-1,b=[P,N,0,P+2/3,N,0,P+2/3,N+1,0,P,N,0,P+2/3,N+1,0,P,N+1,0];E.set(b,x*g*R),T.set(f,m*g*R);let M=[R,R,R,R,R,R];v.set(M,p*g*R)}let A=new Xe;A.setAttribute("position",new Te(E,x)),A.setAttribute("uv",new Te(T,m)),A.setAttribute("faceIndex",new Te(v,p)),t.push(A),s>ns&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Qc(i,t,e){let n=new pn(i,t,e);return n.texture.mapping=zs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Wa(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Wp(i,t,e){let n=new Float32Array(Si),s=new w(0,1,0);return new hn({name:"SphericalGaussianBlur",defines:{n:Si,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Tl(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function th(){return new hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tl(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function eh(){return new hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tl(),fragmentShader:`

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
	`}function Xp(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===aa||c===oa,h=c===_i||c===xi;if(l||h){let u=t.get(o),f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new qa(i)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let d=o.image;return l&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new qa(i)),u=l?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function qp(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Hi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Yp(i,t,e,n){let s={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function c(u){let f=u.attributes;for(let d in f)t.update(f[d],i.ARRAY_BUFFER)}function l(u){let f=[],d=u.index,g=u.attributes.position,x=0;if(d!==null){let E=d.array;x=d.version;for(let T=0,v=E.length;T<v;T+=3){let A=E[T+0],R=E[T+1],P=E[T+2];f.push(A,R,R,P,P,A)}}else if(g!==void 0){let E=g.array;x=g.version;for(let T=0,v=E.length/3-1;T<v;T+=3){let A=T+0,R=T+1,P=T+2;f.push(A,R,R,P,P,A)}}else return;let m=new(sl(f)?Ts:Ss)(f,1);m.version=x;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function $p(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,d){i.drawElements(n,d,r,f*a),e.update(d,n,1)}function l(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,f*a,g),e.update(d,n,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function u(f,d,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/a,d[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,x,0,g);let p=0;for(let E=0;E<g;E++)p+=d[E]*x[E];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Zp(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Jp(i,t,e){let n=new WeakMap,s=new de;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==u){let b=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],E=o.morphAttributes.color||[],T=0;d===!0&&(T=1),g===!0&&(T=2),x===!0&&(T=3);let v=o.attributes.position.count*T,A=1;v>t.maxTextureSize&&(A=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let R=new Float32Array(v*A*4*u),P=new vs(R,v,A,u);P.type=yn,P.needsUpdate=!0;let N=T*4;for(let M=0;M<u;M++){let L=m[M],k=p[M],X=E[M],Y=v*A*4*M;for(let K=0;K<L.count;K++){let q=K*N;d===!0&&(s.fromBufferAttribute(L,K),R[Y+q+0]=s.x,R[Y+q+1]=s.y,R[Y+q+2]=s.z,R[Y+q+3]=0),g===!0&&(s.fromBufferAttribute(k,K),R[Y+q+4]=s.x,R[Y+q+5]=s.y,R[Y+q+6]=s.z,R[Y+q+7]=0),x===!0&&(s.fromBufferAttribute(X,K),R[Y+q+8]=s.x,R[Y+q+9]=s.y,R[Y+q+10]=s.z,R[Y+q+11]=X.itemSize===4?s.w:1)}}f={count:u,texture:P,size:new vt(v,A)},n.set(o,f),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let d=0;for(let x=0;x<l.length;x++)d+=l[x];let g=o.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Kp(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}var vh=new We,nh=new Cs(1,1),Mh=new vs,bh=new Ir,Sh=new ws,ih=[],sh=[],rh=new Float32Array(16),ah=new Float32Array(9),oh=new Float32Array(4);function ss(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=ih[s];if(r===void 0&&(r=new Float32Array(s),ih[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function xe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ye(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function $a(i,t){let e=sh[t];e===void 0&&(e=new Int32Array(t),sh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function jp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Qp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2fv(this.addr,t),ye(e,t)}}function tm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(xe(e,t))return;i.uniform3fv(this.addr,t),ye(e,t)}}function em(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4fv(this.addr,t),ye(e,t)}}function nm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ye(e,t)}else{if(xe(e,n))return;oh.set(n),i.uniformMatrix2fv(this.addr,!1,oh),ye(e,n)}}function im(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ye(e,t)}else{if(xe(e,n))return;ah.set(n),i.uniformMatrix3fv(this.addr,!1,ah),ye(e,n)}}function sm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ye(e,t)}else{if(xe(e,n))return;rh.set(n),i.uniformMatrix4fv(this.addr,!1,rh),ye(e,n)}}function rm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function am(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2iv(this.addr,t),ye(e,t)}}function om(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;i.uniform3iv(this.addr,t),ye(e,t)}}function lm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4iv(this.addr,t),ye(e,t)}}function cm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function hm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2uiv(this.addr,t),ye(e,t)}}function um(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;i.uniform3uiv(this.addr,t),ye(e,t)}}function dm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4uiv(this.addr,t),ye(e,t)}}function fm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(nh.compareFunction=tl,r=nh):r=vh,e.setTexture2D(t||r,s)}function pm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||bh,s)}function mm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Sh,s)}function gm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Mh,s)}function _m(i){switch(i){case 5126:return jp;case 35664:return Qp;case 35665:return tm;case 35666:return em;case 35674:return nm;case 35675:return im;case 35676:return sm;case 5124:case 35670:return rm;case 35667:case 35671:return am;case 35668:case 35672:return om;case 35669:case 35673:return lm;case 5125:return cm;case 36294:return hm;case 36295:return um;case 36296:return dm;case 35678:case 36198:case 36298:case 36306:case 35682:return fm;case 35679:case 36299:case 36307:return pm;case 35680:case 36300:case 36308:case 36293:return mm;case 36289:case 36303:case 36311:case 36292:return gm}}function xm(i,t){i.uniform1fv(this.addr,t)}function ym(i,t){let e=ss(t,this.size,2);i.uniform2fv(this.addr,e)}function vm(i,t){let e=ss(t,this.size,3);i.uniform3fv(this.addr,e)}function Mm(i,t){let e=ss(t,this.size,4);i.uniform4fv(this.addr,e)}function bm(i,t){let e=ss(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Sm(i,t){let e=ss(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Tm(i,t){let e=ss(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Em(i,t){i.uniform1iv(this.addr,t)}function wm(i,t){i.uniform2iv(this.addr,t)}function Am(i,t){i.uniform3iv(this.addr,t)}function Cm(i,t){i.uniform4iv(this.addr,t)}function Rm(i,t){i.uniform1uiv(this.addr,t)}function Im(i,t){i.uniform2uiv(this.addr,t)}function Pm(i,t){i.uniform3uiv(this.addr,t)}function Lm(i,t){i.uniform4uiv(this.addr,t)}function Dm(i,t,e){let n=this.cache,s=t.length,r=$a(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||vh,r[a])}function Um(i,t,e){let n=this.cache,s=t.length,r=$a(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||bh,r[a])}function Nm(i,t,e){let n=this.cache,s=t.length,r=$a(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Sh,r[a])}function Fm(i,t,e){let n=this.cache,s=t.length,r=$a(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Mh,r[a])}function Om(i){switch(i){case 5126:return xm;case 35664:return ym;case 35665:return vm;case 35666:return Mm;case 35674:return bm;case 35675:return Sm;case 35676:return Tm;case 5124:case 35670:return Em;case 35667:case 35671:return wm;case 35668:case 35672:return Am;case 35669:case 35673:return Cm;case 5125:return Rm;case 36294:return Im;case 36295:return Pm;case 36296:return Lm;case 35678:case 36198:case 36298:case 36306:case 35682:return Dm;case 35679:case 36299:case 36307:return Um;case 35680:case 36300:case 36308:case 36293:return Nm;case 36289:case 36303:case 36311:case 36292:return Fm}}var gl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=_m(e.type)}},_l=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Om(e.type)}},xl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},ml=/(\w+)(\])?(\[|\.)?/g;function lh(i,t){i.seq.push(t),i.map[t.id]=t}function Bm(i,t,e){let n=i.name,s=n.length;for(ml.lastIndex=0;;){let r=ml.exec(n),a=ml.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){lh(e,l===void 0?new gl(o,i,t):new _l(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new xl(o),lh(e,u)),e=u}}}var is=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Bm(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function ch(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var zm=37297,Vm=0;function km(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var hh=new zt;function Hm(i){$t._getMatrix(hh,$t.workingColorSpace,i);let t=`mat3( ${hh.elements.map(e=>e.toFixed(4))} )`;switch($t.getTransfer(i)){case _s:return[t,"LinearTransferOETF"];case Kt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function uh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+km(i.getShaderSource(t),o)}else return r}function Gm(i,t){let e=Hm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Wm(i,t){let e;switch(t){case Cc:e="Linear";break;case Rc:e="Reinhard";break;case Ic:e="Cineon";break;case ra:e="ACESFilmic";break;case Lc:e="AgX";break;case Dc:e="Neutral";break;case Pc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Xa=new w;function Xm(){$t.getLuminanceCoefficients(Xa);let i=Xa.x.toFixed(4),t=Xa.y.toFixed(4),e=Xa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xs).join(`
`)}function Ym(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function $m(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Xs(i){return i!==""}function dh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function fh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Zm=/^[ \t]*#include +<([\w\d./]+)>/gm;function yl(i){return i.replace(Zm,Km)}var Jm=new Map;function Km(i,t){let e=Ht[t];if(e===void 0){let n=Jm.get(t);if(n!==void 0)e=Ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return yl(e)}var jm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ph(i){return i.replace(jm,Qm)}function Qm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function mh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function tg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===zo?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===oc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===xn&&(t="SHADOWMAP_TYPE_VSM"),t}function eg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case _i:case xi:t="ENVMAP_TYPE_CUBE";break;case zs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ng(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===xi&&(t="ENVMAP_MODE_REFRACTION"),t}function ig(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Go:t="ENVMAP_BLENDING_MULTIPLY";break;case wc:t="ENVMAP_BLENDING_MIX";break;case Ac:t="ENVMAP_BLENDING_ADD";break}return t}function sg(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function rg(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=tg(e),l=eg(e),h=ng(e),u=ig(e),f=sg(e),d=qm(e),g=Ym(r),x=s.createProgram(),m,p,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Xs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Xs).join(`
`),p.length>0&&(p+=`
`)):(m=[mh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xs).join(`
`),p=[mh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Un?"#define TONE_MAPPING":"",e.toneMapping!==Un?Ht.tonemapping_pars_fragment:"",e.toneMapping!==Un?Wm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,Gm("linearToOutputTexel",e.outputColorSpace),Xm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Xs).join(`
`)),a=yl(a),a=dh(a,e),a=fh(a,e),o=yl(o),o=dh(o,e),o=fh(o,e),a=ph(a),o=ph(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===el?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===el?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let T=E+m+a,v=E+p+o,A=ch(s,s.VERTEX_SHADER,T),R=ch(s,s.FRAGMENT_SHADER,v);s.attachShader(x,A),s.attachShader(x,R),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function P(L){if(i.debug.checkShaderErrors){let k=s.getProgramInfoLog(x)||"",X=s.getShaderInfoLog(A)||"",Y=s.getShaderInfoLog(R)||"",K=k.trim(),q=X.trim(),B=Y.trim(),G=!0,rt=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,A,R);else{let gt=uh(s,A,"vertex"),St=uh(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+K+`
`+gt+`
`+St)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(q===""||B==="")&&(rt=!1);rt&&(L.diagnostics={runnable:G,programLog:K,vertexShader:{log:q,prefix:m},fragmentShader:{log:B,prefix:p}})}s.deleteShader(A),s.deleteShader(R),N=new is(s,x),b=$m(s,x)}let N;this.getUniforms=function(){return N===void 0&&P(this),N};let b;this.getAttributes=function(){return b===void 0&&P(this),b};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,zm)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Vm++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=R,this}var ag=0,vl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ml(t),e.set(t,n)),n}},Ml=class{constructor(t){this.id=ag++,this.code=t,this.usedTimes=0}};function og(i,t,e,n,s,r,a){let o=new Ms,c=new vl,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,M,L,k,X){let Y=k.fog,K=X.geometry,q=b.isMeshStandardMaterial?k.environment:null,B=(b.isMeshStandardMaterial?e:t).get(b.envMap||q),G=B&&B.mapping===zs?B.image.height:null,rt=g[b.type];b.precision!==null&&(d=s.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));let gt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,St=gt!==void 0?gt.length:0,It=0;K.morphAttributes.position!==void 0&&(It=1),K.morphAttributes.normal!==void 0&&(It=2),K.morphAttributes.color!==void 0&&(It=3);let qt,ee,Yt,$;if(rt){let Jt=vn[rt];qt=Jt.vertexShader,ee=Jt.fragmentShader}else qt=b.vertexShader,ee=b.fragmentShader,c.update(b),Yt=c.getVertexShaderID(b),$=c.getFragmentShaderID(b);let et=i.getRenderTarget(),_t=i.state.buffers.depth.getReversed(),Pt=X.isInstancedMesh===!0,Et=X.isBatchedMesh===!0,Gt=!!b.map,me=!!b.matcap,C=!!B,jt=!!b.aoMap,Z=!!b.lightMap,nt=!!b.bumpMap,tt=!!b.normalMap,Lt=!!b.displacementMap,dt=!!b.emissiveMap,Ft=!!b.metalnessMap,le=!!b.roughnessMap,ce=b.anisotropy>0,S=b.clearcoat>0,_=b.dispersion>0,O=b.iridescence>0,H=b.sheen>0,it=b.transmission>0,W=ce&&!!b.anisotropyMap,wt=S&&!!b.clearcoatMap,ct=S&&!!b.clearcoatNormalMap,Mt=S&&!!b.clearcoatRoughnessMap,At=O&&!!b.iridescenceMap,ot=O&&!!b.iridescenceThicknessMap,mt=H&&!!b.sheenColorMap,Nt=H&&!!b.sheenRoughnessMap,Ct=!!b.specularMap,ft=!!b.specularColorMap,Vt=!!b.specularIntensityMap,I=it&&!!b.transmissionMap,lt=it&&!!b.thicknessMap,ht=!!b.gradientMap,yt=!!b.alphaMap,st=b.alphaTest>0,Q=!!b.alphaHash,Tt=!!b.extensions,Bt=Un;b.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Bt=i.toneMapping);let ie={shaderID:rt,shaderType:b.type,shaderName:b.name,vertexShader:qt,fragmentShader:ee,defines:b.defines,customVertexShaderID:Yt,customFragmentShaderID:$,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:Et,batchingColor:Et&&X._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&X.instanceColor!==null,instancingMorph:Pt&&X.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:et===null?i.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:pi,alphaToCoverage:!!b.alphaToCoverage,map:Gt,matcap:me,envMap:C,envMapMode:C&&B.mapping,envMapCubeUVHeight:G,aoMap:jt,lightMap:Z,bumpMap:nt,normalMap:tt,displacementMap:f&&Lt,emissiveMap:dt,normalMapObjectSpace:tt&&b.normalMapType===Oc,normalMapTangentSpace:tt&&b.normalMapType===Qo,metalnessMap:Ft,roughnessMap:le,anisotropy:ce,anisotropyMap:W,clearcoat:S,clearcoatMap:wt,clearcoatNormalMap:ct,clearcoatRoughnessMap:Mt,dispersion:_,iridescence:O,iridescenceMap:At,iridescenceThicknessMap:ot,sheen:H,sheenColorMap:mt,sheenRoughnessMap:Nt,specularMap:Ct,specularColorMap:ft,specularIntensityMap:Vt,transmission:it,transmissionMap:I,thicknessMap:lt,gradientMap:ht,opaque:b.transparent===!1&&b.blending===di&&b.alphaToCoverage===!1,alphaMap:yt,alphaTest:st,alphaHash:Q,combine:b.combine,mapUv:Gt&&x(b.map.channel),aoMapUv:jt&&x(b.aoMap.channel),lightMapUv:Z&&x(b.lightMap.channel),bumpMapUv:nt&&x(b.bumpMap.channel),normalMapUv:tt&&x(b.normalMap.channel),displacementMapUv:Lt&&x(b.displacementMap.channel),emissiveMapUv:dt&&x(b.emissiveMap.channel),metalnessMapUv:Ft&&x(b.metalnessMap.channel),roughnessMapUv:le&&x(b.roughnessMap.channel),anisotropyMapUv:W&&x(b.anisotropyMap.channel),clearcoatMapUv:wt&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:ct&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Mt&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:At&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:mt&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&x(b.sheenRoughnessMap.channel),specularMapUv:Ct&&x(b.specularMap.channel),specularColorMapUv:ft&&x(b.specularColorMap.channel),specularIntensityMapUv:Vt&&x(b.specularIntensityMap.channel),transmissionMapUv:I&&x(b.transmissionMap.channel),thicknessMapUv:lt&&x(b.thicknessMap.channel),alphaMapUv:yt&&x(b.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(tt||ce),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!K.attributes.uv&&(Gt||yt),fog:!!Y,useFog:b.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:_t,skinning:X.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:It,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Bt,decodeVideoTexture:Gt&&b.map.isVideoTexture===!0&&$t.getTransfer(b.map.colorSpace)===Kt,decodeVideoTextureEmissive:dt&&b.emissiveMap.isVideoTexture===!0&&$t.getTransfer(b.emissiveMap.colorSpace)===Kt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Oe,flipSided:b.side===Le,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Tt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Tt&&b.extensions.multiDraw===!0||Et)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ie.vertexUv1s=l.has(1),ie.vertexUv2s=l.has(2),ie.vertexUv3s=l.has(3),l.clear(),ie}function p(b){let M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(let L in b.defines)M.push(L),M.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(E(M,b),T(M,b),M.push(i.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function E(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function T(b,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),b.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),b.push(o.mask)}function v(b){let M=g[b.type],L;if(M){let k=vn[M];L=$c.clone(k.uniforms)}else L=b.uniforms;return L}function A(b,M){let L;for(let k=0,X=h.length;k<X;k++){let Y=h[k];if(Y.cacheKey===M){L=Y,++L.usedTimes;break}}return L===void 0&&(L=new rg(i,M,b,r),h.push(L)),L}function R(b){if(--b.usedTimes===0){let M=h.indexOf(b);h[M]=h[h.length-1],h.pop(),b.destroy()}}function P(b){c.remove(b)}function N(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:A,releaseProgram:R,releaseShaderCache:P,programs:h,dispose:N}}function lg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function cg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function gh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function _h(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,f,d,g,x,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),t++,p}function o(u,f,d,g,x,m){let p=a(u,f,d,g,x,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function c(u,f,d,g,x,m){let p=a(u,f,d,g,x,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,f){e.length>1&&e.sort(u||cg),n.length>1&&n.sort(f||gh),s.length>1&&s.sort(f||gh)}function h(){for(let u=t,f=i.length;u<f;u++){let d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function hg(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new _h,i.set(n,[a])):s>=r.length?(a=new _h,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function ug(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new w,color:new Xt};break;case"SpotLight":e={position:new w,direction:new w,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new w,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new w,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new w,halfWidth:new w,halfHeight:new w};break}return i[t.id]=e,e}}}function dg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var fg=0;function pg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function mg(i){let t=new ug,e=dg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new w);let s=new w,r=new pe,a=new pe;function o(l){let h=0,u=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,E=0,T=0,v=0,A=0,R=0,P=0;l.sort(pg);for(let b=0,M=l.length;b<M;b++){let L=l[b],k=L.color,X=L.intensity,Y=L.distance,K=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=k.r*X,u+=k.g*X,f+=k.b*X;else if(L.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(L.sh.coefficients[q],X);P++}else if(L.isDirectionalLight){let q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let B=L.shadow,G=e.get(L);G.shadowIntensity=B.intensity,G.shadowBias=B.bias,G.shadowNormalBias=B.normalBias,G.shadowRadius=B.radius,G.shadowMapSize=B.mapSize,n.directionalShadow[d]=G,n.directionalShadowMap[d]=K,n.directionalShadowMatrix[d]=L.shadow.matrix,E++}n.directional[d]=q,d++}else if(L.isSpotLight){let q=t.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(k).multiplyScalar(X),q.distance=Y,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,n.spot[x]=q;let B=L.shadow;if(L.map&&(n.spotLightMap[A]=L.map,A++,B.updateMatrices(L),L.castShadow&&R++),n.spotLightMatrix[x]=B.matrix,L.castShadow){let G=e.get(L);G.shadowIntensity=B.intensity,G.shadowBias=B.bias,G.shadowNormalBias=B.normalBias,G.shadowRadius=B.radius,G.shadowMapSize=B.mapSize,n.spotShadow[x]=G,n.spotShadowMap[x]=K,v++}x++}else if(L.isRectAreaLight){let q=t.get(L);q.color.copy(k).multiplyScalar(X),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=q,m++}else if(L.isPointLight){let q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),q.distance=L.distance,q.decay=L.decay,L.castShadow){let B=L.shadow,G=e.get(L);G.shadowIntensity=B.intensity,G.shadowBias=B.bias,G.shadowNormalBias=B.normalBias,G.shadowRadius=B.radius,G.shadowMapSize=B.mapSize,G.shadowCameraNear=B.camera.near,G.shadowCameraFar=B.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=L.shadow.matrix,T++}n.point[g]=q,g++}else if(L.isHemisphereLight){let q=t.get(L);q.skyColor.copy(L.color).multiplyScalar(X),q.groundColor.copy(L.groundColor).multiplyScalar(X),n.hemi[p]=q,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ut.LTC_FLOAT_1,n.rectAreaLTC2=ut.LTC_FLOAT_2):(n.rectAreaLTC1=ut.LTC_HALF_1,n.rectAreaLTC2=ut.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let N=n.hash;(N.directionalLength!==d||N.pointLength!==g||N.spotLength!==x||N.rectAreaLength!==m||N.hemiLength!==p||N.numDirectionalShadows!==E||N.numPointShadows!==T||N.numSpotShadows!==v||N.numSpotMaps!==A||N.numLightProbes!==P)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=v+A-R,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=P,N.directionalLength=d,N.pointLength=g,N.spotLength=x,N.rectAreaLength=m,N.hemiLength=p,N.numDirectionalShadows=E,N.numPointShadows=T,N.numSpotShadows=v,N.numSpotMaps=A,N.numLightProbes=P,n.version=fg++)}function c(l,h){let u=0,f=0,d=0,g=0,x=0,m=h.matrixWorldInverse;for(let p=0,E=l.length;p<E;p++){let T=l[p];if(T.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(T.isSpotLight){let v=n.spot[d];v.position.setFromMatrixPosition(T.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(T.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(T.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(T.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(T.width*.5,0,0),v.halfHeight.set(0,T.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(T.isPointLight){let v=n.point[f];v.position.setFromMatrixPosition(T.matrixWorld),v.position.applyMatrix4(m),f++}else if(T.isHemisphereLight){let v=n.hemi[x];v.direction.setFromMatrixPosition(T.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:o,setupView:c,state:n}}function xh(i){let t=new mg(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function gg(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new xh(i),t.set(s,[o])):r>=a.length?(o=new xh(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var _g=`void main() {
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
}`;function yg(i,t,e){let n=new $i,s=new vt,r=new vt,a=new de,o=new Vr({depthPacking:Fc}),c=new kr,l={},h=e.maxTextureSize,u={[Pn]:Le,[Le]:Pn,[Oe]:Oe},f=new hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:_g,fragmentShader:xg}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new Xe;g.setAttribute("position",new Te(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new se(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zo;let p=this.type;this.render=function(R,P,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;let b=i.getRenderTarget(),M=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Dn),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let X=p!==xn&&this.type===xn,Y=p===xn&&this.type!==xn;for(let K=0,q=R.length;K<q;K++){let B=R[K],G=B.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let rt=G.getFrameExtents();if(s.multiply(rt),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/rt.x),s.x=r.x*rt.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/rt.y),s.y=r.y*rt.y,G.mapSize.y=r.y)),G.map===null||X===!0||Y===!0){let St=this.type!==xn?{minFilter:Ke,magFilter:Ke}:{};G.map!==null&&G.map.dispose(),G.map=new pn(s.x,s.y,St),G.map.texture.name=B.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();let gt=G.getViewportCount();for(let St=0;St<gt;St++){let It=G.getViewport(St);a.set(r.x*It.x,r.y*It.y,r.x*It.z,r.y*It.w),k.viewport(a),G.updateMatrices(B,St),n=G.getFrustum(),v(P,N,G.camera,B,this.type)}G.isPointLightShadow!==!0&&this.type===xn&&E(G,N),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,M,L)};function E(R,P){let N=t.update(x);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new pn(s.x,s.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(P,null,N,f,x,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(P,null,N,d,x,null)}function T(R,P,N,b){let M=null,L=N.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(L!==void 0)M=L;else if(M=N.isPointLight===!0?c:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let k=M.uuid,X=P.uuid,Y=l[k];Y===void 0&&(Y={},l[k]=Y);let K=Y[X];K===void 0&&(K=M.clone(),Y[X]=K,P.addEventListener("dispose",A)),M=K}if(M.visible=P.visible,M.wireframe=P.wireframe,b===xn?M.side=P.shadowSide!==null?P.shadowSide:P.side:M.side=P.shadowSide!==null?P.shadowSide:u[P.side],M.alphaMap=P.alphaMap,M.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,M.map=P.map,M.clipShadows=P.clipShadows,M.clippingPlanes=P.clippingPlanes,M.clipIntersection=P.clipIntersection,M.displacementMap=P.displacementMap,M.displacementScale=P.displacementScale,M.displacementBias=P.displacementBias,M.wireframeLinewidth=P.wireframeLinewidth,M.linewidth=P.linewidth,N.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let k=i.properties.get(M);k.light=N}return M}function v(R,P,N,b,M){if(R.visible===!1)return;if(R.layers.test(P.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===xn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,R.matrixWorld);let X=t.update(R),Y=R.material;if(Array.isArray(Y)){let K=X.groups;for(let q=0,B=K.length;q<B;q++){let G=K[q],rt=Y[G.materialIndex];if(rt&&rt.visible){let gt=T(R,rt,b,M);R.onBeforeShadow(i,R,P,N,X,gt,G),i.renderBufferDirect(N,null,X,gt,R,G),R.onAfterShadow(i,R,P,N,X,gt,G)}}}else if(Y.visible){let K=T(R,Y,b,M);R.onBeforeShadow(i,R,P,N,X,K,null),i.renderBufferDirect(N,null,X,K,R,null),R.onAfterShadow(i,R,P,N,X,K,null)}}let k=R.children;for(let X=0,Y=k.length;X<Y;X++)v(k[X],P,N,b,M)}function A(R){R.target.removeEventListener("dispose",A);for(let N in l){let b=l[N],M=R.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}var vg={[jr]:Qr,[ta]:ia,[ea]:sa,[fi]:na,[Qr]:jr,[ia]:ta,[sa]:ea,[na]:fi};function Mg(i,t){function e(){let I=!1,lt=new de,ht=null,yt=new de(0,0,0,0);return{setMask:function(st){ht!==st&&!I&&(i.colorMask(st,st,st,st),ht=st)},setLocked:function(st){I=st},setClear:function(st,Q,Tt,Bt,ie){ie===!0&&(st*=Bt,Q*=Bt,Tt*=Bt),lt.set(st,Q,Tt,Bt),yt.equals(lt)===!1&&(i.clearColor(st,Q,Tt,Bt),yt.copy(lt))},reset:function(){I=!1,ht=null,yt.set(-1,0,0,0)}}}function n(){let I=!1,lt=!1,ht=null,yt=null,st=null;return{setReversed:function(Q){if(lt!==Q){let Tt=t.get("EXT_clip_control");Q?Tt.clipControlEXT(Tt.LOWER_LEFT_EXT,Tt.ZERO_TO_ONE_EXT):Tt.clipControlEXT(Tt.LOWER_LEFT_EXT,Tt.NEGATIVE_ONE_TO_ONE_EXT),lt=Q;let Bt=st;st=null,this.setClear(Bt)}},getReversed:function(){return lt},setTest:function(Q){Q?et(i.DEPTH_TEST):_t(i.DEPTH_TEST)},setMask:function(Q){ht!==Q&&!I&&(i.depthMask(Q),ht=Q)},setFunc:function(Q){if(lt&&(Q=vg[Q]),yt!==Q){switch(Q){case jr:i.depthFunc(i.NEVER);break;case Qr:i.depthFunc(i.ALWAYS);break;case ta:i.depthFunc(i.LESS);break;case fi:i.depthFunc(i.LEQUAL);break;case ea:i.depthFunc(i.EQUAL);break;case na:i.depthFunc(i.GEQUAL);break;case ia:i.depthFunc(i.GREATER);break;case sa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}yt=Q}},setLocked:function(Q){I=Q},setClear:function(Q){st!==Q&&(lt&&(Q=1-Q),i.clearDepth(Q),st=Q)},reset:function(){I=!1,ht=null,yt=null,st=null,lt=!1}}}function s(){let I=!1,lt=null,ht=null,yt=null,st=null,Q=null,Tt=null,Bt=null,ie=null;return{setTest:function(Jt){I||(Jt?et(i.STENCIL_TEST):_t(i.STENCIL_TEST))},setMask:function(Jt){lt!==Jt&&!I&&(i.stencilMask(Jt),lt=Jt)},setFunc:function(Jt,Tn,dn){(ht!==Jt||yt!==Tn||st!==dn)&&(i.stencilFunc(Jt,Tn,dn),ht=Jt,yt=Tn,st=dn)},setOp:function(Jt,Tn,dn){(Q!==Jt||Tt!==Tn||Bt!==dn)&&(i.stencilOp(Jt,Tn,dn),Q=Jt,Tt=Tn,Bt=dn)},setLocked:function(Jt){I=Jt},setClear:function(Jt){ie!==Jt&&(i.clearStencil(Jt),ie=Jt)},reset:function(){I=!1,lt=null,ht=null,yt=null,st=null,Q=null,Tt=null,Bt=null,ie=null}}}let r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap,h={},u={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,E=null,T=null,v=null,A=null,R=null,P=new Xt(0,0,0),N=0,b=!1,M=null,L=null,k=null,X=null,Y=null,K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,B=0,G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(G)[1]),q=B>=1):G.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),q=B>=2);let rt=null,gt={},St=i.getParameter(i.SCISSOR_BOX),It=i.getParameter(i.VIEWPORT),qt=new de().fromArray(St),ee=new de().fromArray(It);function Yt(I,lt,ht,yt){let st=new Uint8Array(4),Q=i.createTexture();i.bindTexture(I,Q),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Tt=0;Tt<ht;Tt++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(lt,0,i.RGBA,1,1,yt,0,i.RGBA,i.UNSIGNED_BYTE,st):i.texImage2D(lt+Tt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,st);return Q}let $={};$[i.TEXTURE_2D]=Yt(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=Yt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=Yt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=Yt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),et(i.DEPTH_TEST),a.setFunc(fi),nt(!1),tt(Bo),et(i.CULL_FACE),jt(Dn);function et(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function _t(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function Pt(I,lt){return u[I]!==lt?(i.bindFramebuffer(I,lt),u[I]=lt,I===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=lt),I===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=lt),!0):!1}function Et(I,lt){let ht=d,yt=!1;if(I){ht=f.get(lt),ht===void 0&&(ht=[],f.set(lt,ht));let st=I.textures;if(ht.length!==st.length||ht[0]!==i.COLOR_ATTACHMENT0){for(let Q=0,Tt=st.length;Q<Tt;Q++)ht[Q]=i.COLOR_ATTACHMENT0+Q;ht.length=st.length,yt=!0}}else ht[0]!==i.BACK&&(ht[0]=i.BACK,yt=!0);yt&&i.drawBuffers(ht)}function Gt(I){return g!==I?(i.useProgram(I),g=I,!0):!1}let me={[qn]:i.FUNC_ADD,[cc]:i.FUNC_SUBTRACT,[hc]:i.FUNC_REVERSE_SUBTRACT};me[uc]=i.MIN,me[dc]=i.MAX;let C={[fc]:i.ZERO,[pc]:i.ONE,[mc]:i.SRC_COLOR,[Sr]:i.SRC_ALPHA,[Mc]:i.SRC_ALPHA_SATURATE,[yc]:i.DST_COLOR,[_c]:i.DST_ALPHA,[gc]:i.ONE_MINUS_SRC_COLOR,[Tr]:i.ONE_MINUS_SRC_ALPHA,[vc]:i.ONE_MINUS_DST_COLOR,[xc]:i.ONE_MINUS_DST_ALPHA,[bc]:i.CONSTANT_COLOR,[Sc]:i.ONE_MINUS_CONSTANT_COLOR,[Tc]:i.CONSTANT_ALPHA,[Ec]:i.ONE_MINUS_CONSTANT_ALPHA};function jt(I,lt,ht,yt,st,Q,Tt,Bt,ie,Jt){if(I===Dn){x===!0&&(_t(i.BLEND),x=!1);return}if(x===!1&&(et(i.BLEND),x=!0),I!==lc){if(I!==m||Jt!==b){if((p!==qn||v!==qn)&&(i.blendEquation(i.FUNC_ADD),p=qn,v=qn),Jt)switch(I){case di:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vo:i.blendFunc(i.ONE,i.ONE);break;case ko:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ho:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case di:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ko:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ho:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}E=null,T=null,A=null,R=null,P.set(0,0,0),N=0,m=I,b=Jt}return}st=st||lt,Q=Q||ht,Tt=Tt||yt,(lt!==p||st!==v)&&(i.blendEquationSeparate(me[lt],me[st]),p=lt,v=st),(ht!==E||yt!==T||Q!==A||Tt!==R)&&(i.blendFuncSeparate(C[ht],C[yt],C[Q],C[Tt]),E=ht,T=yt,A=Q,R=Tt),(Bt.equals(P)===!1||ie!==N)&&(i.blendColor(Bt.r,Bt.g,Bt.b,ie),P.copy(Bt),N=ie),m=I,b=!1}function Z(I,lt){I.side===Oe?_t(i.CULL_FACE):et(i.CULL_FACE);let ht=I.side===Le;lt&&(ht=!ht),nt(ht),I.blending===di&&I.transparent===!1?jt(Dn):jt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);let yt=I.stencilWrite;o.setTest(yt),yt&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),dt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?et(i.SAMPLE_ALPHA_TO_COVERAGE):_t(i.SAMPLE_ALPHA_TO_COVERAGE)}function nt(I){M!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),M=I)}function tt(I){I!==rc?(et(i.CULL_FACE),I!==L&&(I===Bo?i.cullFace(i.BACK):I===ac?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_t(i.CULL_FACE),L=I}function Lt(I){I!==k&&(q&&i.lineWidth(I),k=I)}function dt(I,lt,ht){I?(et(i.POLYGON_OFFSET_FILL),(X!==lt||Y!==ht)&&(i.polygonOffset(lt,ht),X=lt,Y=ht)):_t(i.POLYGON_OFFSET_FILL)}function Ft(I){I?et(i.SCISSOR_TEST):_t(i.SCISSOR_TEST)}function le(I){I===void 0&&(I=i.TEXTURE0+K-1),rt!==I&&(i.activeTexture(I),rt=I)}function ce(I,lt,ht){ht===void 0&&(rt===null?ht=i.TEXTURE0+K-1:ht=rt);let yt=gt[ht];yt===void 0&&(yt={type:void 0,texture:void 0},gt[ht]=yt),(yt.type!==I||yt.texture!==lt)&&(rt!==ht&&(i.activeTexture(ht),rt=ht),i.bindTexture(I,lt||$[I]),yt.type=I,yt.texture=lt)}function S(){let I=gt[rt];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function O(){try{i.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function H(){try{i.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function it(){try{i.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function W(){try{i.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function wt(){try{i.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ct(){try{i.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Mt(){try{i.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function At(){try{i.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ot(){try{i.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function mt(I){qt.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),qt.copy(I))}function Nt(I){ee.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),ee.copy(I))}function Ct(I,lt){let ht=l.get(lt);ht===void 0&&(ht=new WeakMap,l.set(lt,ht));let yt=ht.get(I);yt===void 0&&(yt=i.getUniformBlockIndex(lt,I.name),ht.set(I,yt))}function ft(I,lt){let yt=l.get(lt).get(I);c.get(lt)!==yt&&(i.uniformBlockBinding(lt,yt,I.__bindingPointIndex),c.set(lt,yt))}function Vt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},rt=null,gt={},u={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,E=null,T=null,v=null,A=null,R=null,P=new Xt(0,0,0),N=0,b=!1,M=null,L=null,k=null,X=null,Y=null,qt.set(0,0,i.canvas.width,i.canvas.height),ee.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:et,disable:_t,bindFramebuffer:Pt,drawBuffers:Et,useProgram:Gt,setBlending:jt,setMaterial:Z,setFlipSided:nt,setCullFace:tt,setLineWidth:Lt,setPolygonOffset:dt,setScissorTest:Ft,activeTexture:le,bindTexture:ce,unbindTexture:S,compressedTexImage2D:_,compressedTexImage3D:O,texImage2D:At,texImage3D:ot,updateUBOMapping:Ct,uniformBlockBinding:ft,texStorage2D:ct,texStorage3D:Mt,texSubImage2D:H,texSubImage3D:it,compressedTexSubImage2D:W,compressedTexSubImage3D:wt,scissor:mt,viewport:Nt,reset:Vt}}function bg(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new vt,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,_){return d?new OffscreenCanvas(S,_):ys("canvas")}function x(S,_,O){let H=1,it=ce(S);if((it.width>O||it.height>O)&&(H=O/Math.max(it.width,it.height)),H<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){let W=Math.floor(H*it.width),wt=Math.floor(H*it.height);u===void 0&&(u=g(W,wt));let ct=_?g(W,wt):u;return ct.width=W,ct.height=wt,ct.getContext("2d").drawImage(S,0,0,W,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+W+"x"+wt+")."),ct}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),S;return S}function m(S){return S.generateMipmaps}function p(S){i.generateMipmap(S)}function E(S){return S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?i.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(S,_,O,H,it=!1){if(S!==null){if(i[S]!==void 0)return i[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let W=_;if(_===i.RED&&(O===i.FLOAT&&(W=i.R32F),O===i.HALF_FLOAT&&(W=i.R16F),O===i.UNSIGNED_BYTE&&(W=i.R8)),_===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(W=i.R8UI),O===i.UNSIGNED_SHORT&&(W=i.R16UI),O===i.UNSIGNED_INT&&(W=i.R32UI),O===i.BYTE&&(W=i.R8I),O===i.SHORT&&(W=i.R16I),O===i.INT&&(W=i.R32I)),_===i.RG&&(O===i.FLOAT&&(W=i.RG32F),O===i.HALF_FLOAT&&(W=i.RG16F),O===i.UNSIGNED_BYTE&&(W=i.RG8)),_===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(W=i.RG8UI),O===i.UNSIGNED_SHORT&&(W=i.RG16UI),O===i.UNSIGNED_INT&&(W=i.RG32UI),O===i.BYTE&&(W=i.RG8I),O===i.SHORT&&(W=i.RG16I),O===i.INT&&(W=i.RG32I)),_===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(W=i.RGB8UI),O===i.UNSIGNED_SHORT&&(W=i.RGB16UI),O===i.UNSIGNED_INT&&(W=i.RGB32UI),O===i.BYTE&&(W=i.RGB8I),O===i.SHORT&&(W=i.RGB16I),O===i.INT&&(W=i.RGB32I)),_===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(W=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(W=i.RGBA16UI),O===i.UNSIGNED_INT&&(W=i.RGBA32UI),O===i.BYTE&&(W=i.RGBA8I),O===i.SHORT&&(W=i.RGBA16I),O===i.INT&&(W=i.RGBA32I)),_===i.RGB&&(O===i.UNSIGNED_INT_5_9_9_9_REV&&(W=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(W=i.R11F_G11F_B10F)),_===i.RGBA){let wt=it?_s:$t.getTransfer(H);O===i.FLOAT&&(W=i.RGBA32F),O===i.HALF_FLOAT&&(W=i.RGBA16F),O===i.UNSIGNED_BYTE&&(W=wt===Kt?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(W=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(W=i.RGB5_A1)}return(W===i.R16F||W===i.R32F||W===i.RG16F||W===i.RG32F||W===i.RGBA16F||W===i.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function v(S,_){let O;return S?_===null||_===Qn||_===ji?O=i.DEPTH24_STENCIL8:_===yn?O=i.DEPTH32F_STENCIL8:_===Ji&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Qn||_===ji?O=i.DEPTH_COMPONENT24:_===yn?O=i.DEPTH_COMPONENT32F:_===Ji&&(O=i.DEPTH_COMPONENT16),O}function A(S,_){return m(S)===!0||S.isFramebufferTexture&&S.minFilter!==Ke&&S.minFilter!==ln?Math.log2(Math.max(_.width,_.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?_.mipmaps.length:1}function R(S){let _=S.target;_.removeEventListener("dispose",R),N(_),_.isVideoTexture&&h.delete(_)}function P(S){let _=S.target;_.removeEventListener("dispose",P),M(_)}function N(S){let _=n.get(S);if(_.__webglInit===void 0)return;let O=S.source,H=f.get(O);if(H){let it=H[_.__cacheKey];it.usedTimes--,it.usedTimes===0&&b(S),Object.keys(H).length===0&&f.delete(O)}n.remove(S)}function b(S){let _=n.get(S);i.deleteTexture(_.__webglTexture);let O=S.source,H=f.get(O);delete H[_.__cacheKey],a.memory.textures--}function M(S){let _=n.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),n.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(_.__webglFramebuffer[H]))for(let it=0;it<_.__webglFramebuffer[H].length;it++)i.deleteFramebuffer(_.__webglFramebuffer[H][it]);else i.deleteFramebuffer(_.__webglFramebuffer[H]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[H])}else{if(Array.isArray(_.__webglFramebuffer))for(let H=0;H<_.__webglFramebuffer.length;H++)i.deleteFramebuffer(_.__webglFramebuffer[H]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let H=0;H<_.__webglColorRenderbuffer.length;H++)_.__webglColorRenderbuffer[H]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[H]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let O=S.textures;for(let H=0,it=O.length;H<it;H++){let W=n.get(O[H]);W.__webglTexture&&(i.deleteTexture(W.__webglTexture),a.memory.textures--),n.remove(O[H])}n.remove(S)}let L=0;function k(){L=0}function X(){let S=L;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),L+=1,S}function Y(S){let _=[];return _.push(S.wrapS),_.push(S.wrapT),_.push(S.wrapR||0),_.push(S.magFilter),_.push(S.minFilter),_.push(S.anisotropy),_.push(S.internalFormat),_.push(S.format),_.push(S.type),_.push(S.generateMipmaps),_.push(S.premultiplyAlpha),_.push(S.flipY),_.push(S.unpackAlignment),_.push(S.colorSpace),_.join()}function K(S,_){let O=n.get(S);if(S.isVideoTexture&&Ft(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&O.__version!==S.version){let H=S.image;if(H===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(O,S,_);return}}else S.isExternalTexture&&(O.__webglTexture=S.sourceTexture?S.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+_)}function q(S,_){let O=n.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&O.__version!==S.version){$(O,S,_);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+_)}function B(S,_){let O=n.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&O.__version!==S.version){$(O,S,_);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+_)}function G(S,_){let O=n.get(S);if(S.version>0&&O.__version!==S.version){et(O,S,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+_)}let rt={[Er]:i.REPEAT,[Xn]:i.CLAMP_TO_EDGE,[wr]:i.MIRRORED_REPEAT},gt={[Ke]:i.NEAREST,[Uc]:i.NEAREST_MIPMAP_NEAREST,[Vs]:i.NEAREST_MIPMAP_LINEAR,[ln]:i.LINEAR,[la]:i.LINEAR_MIPMAP_NEAREST,[jn]:i.LINEAR_MIPMAP_LINEAR},St={[Bc]:i.NEVER,[Wc]:i.ALWAYS,[zc]:i.LESS,[tl]:i.LEQUAL,[Vc]:i.EQUAL,[Gc]:i.GEQUAL,[kc]:i.GREATER,[Hc]:i.NOTEQUAL};function It(S,_){if(_.type===yn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===ln||_.magFilter===la||_.magFilter===Vs||_.magFilter===jn||_.minFilter===ln||_.minFilter===la||_.minFilter===Vs||_.minFilter===jn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(S,i.TEXTURE_WRAP_S,rt[_.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,rt[_.wrapT]),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,rt[_.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,gt[_.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,gt[_.minFilter]),_.compareFunction&&(i.texParameteri(S,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(S,i.TEXTURE_COMPARE_FUNC,St[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ke||_.minFilter!==Vs&&_.minFilter!==jn||_.type===yn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(S,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function qt(S,_){let O=!1;S.__webglInit===void 0&&(S.__webglInit=!0,_.addEventListener("dispose",R));let H=_.source,it=f.get(H);it===void 0&&(it={},f.set(H,it));let W=Y(_);if(W!==S.__cacheKey){it[W]===void 0&&(it[W]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),it[W].usedTimes++;let wt=it[S.__cacheKey];wt!==void 0&&(it[S.__cacheKey].usedTimes--,wt.usedTimes===0&&b(_)),S.__cacheKey=W,S.__webglTexture=it[W].texture}return O}function ee(S,_,O){return Math.floor(Math.floor(S/O)/_)}function Yt(S,_,O,H){let W=S.updateRanges;if(W.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,O,H,_.data);else{W.sort((ot,mt)=>ot.start-mt.start);let wt=0;for(let ot=1;ot<W.length;ot++){let mt=W[wt],Nt=W[ot],Ct=mt.start+mt.count,ft=ee(Nt.start,_.width,4),Vt=ee(mt.start,_.width,4);Nt.start<=Ct+1&&ft===Vt&&ee(Nt.start+Nt.count-1,_.width,4)===ft?mt.count=Math.max(mt.count,Nt.start+Nt.count-mt.start):(++wt,W[wt]=Nt)}W.length=wt+1;let ct=i.getParameter(i.UNPACK_ROW_LENGTH),Mt=i.getParameter(i.UNPACK_SKIP_PIXELS),At=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let ot=0,mt=W.length;ot<mt;ot++){let Nt=W[ot],Ct=Math.floor(Nt.start/4),ft=Math.ceil(Nt.count/4),Vt=Ct%_.width,I=Math.floor(Ct/_.width),lt=ft,ht=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Vt),i.pixelStorei(i.UNPACK_SKIP_ROWS,I),e.texSubImage2D(i.TEXTURE_2D,0,Vt,I,lt,ht,O,H,_.data)}S.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ct),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Mt),i.pixelStorei(i.UNPACK_SKIP_ROWS,At)}}function $(S,_,O){let H=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(H=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(H=i.TEXTURE_3D);let it=qt(S,_),W=_.source;e.bindTexture(H,S.__webglTexture,i.TEXTURE0+O);let wt=n.get(W);if(W.version!==wt.__version||it===!0){e.activeTexture(i.TEXTURE0+O);let ct=$t.getPrimaries($t.workingColorSpace),Mt=_.colorSpace===Nn?null:$t.getPrimaries(_.colorSpace),At=_.colorSpace===Nn||ct===Mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);let ot=x(_.image,!1,s.maxTextureSize);ot=le(_,ot);let mt=r.convert(_.format,_.colorSpace),Nt=r.convert(_.type),Ct=T(_.internalFormat,mt,Nt,_.colorSpace,_.isVideoTexture);It(H,_);let ft,Vt=_.mipmaps,I=_.isVideoTexture!==!0,lt=wt.__version===void 0||it===!0,ht=W.dataReady,yt=A(_,ot);if(_.isDepthTexture)Ct=v(_.format===Qi,_.type),lt&&(I?e.texStorage2D(i.TEXTURE_2D,1,Ct,ot.width,ot.height):e.texImage2D(i.TEXTURE_2D,0,Ct,ot.width,ot.height,0,mt,Nt,null));else if(_.isDataTexture)if(Vt.length>0){I&&lt&&e.texStorage2D(i.TEXTURE_2D,yt,Ct,Vt[0].width,Vt[0].height);for(let st=0,Q=Vt.length;st<Q;st++)ft=Vt[st],I?ht&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,ft.width,ft.height,mt,Nt,ft.data):e.texImage2D(i.TEXTURE_2D,st,Ct,ft.width,ft.height,0,mt,Nt,ft.data);_.generateMipmaps=!1}else I?(lt&&e.texStorage2D(i.TEXTURE_2D,yt,Ct,ot.width,ot.height),ht&&Yt(_,ot,mt,Nt)):e.texImage2D(i.TEXTURE_2D,0,Ct,ot.width,ot.height,0,mt,Nt,ot.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){I&&lt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,Ct,Vt[0].width,Vt[0].height,ot.depth);for(let st=0,Q=Vt.length;st<Q;st++)if(ft=Vt[st],_.format!==en)if(mt!==null)if(I){if(ht)if(_.layerUpdates.size>0){let Tt=cl(ft.width,ft.height,_.format,_.type);for(let Bt of _.layerUpdates){let ie=ft.data.subarray(Bt*Tt/ft.data.BYTES_PER_ELEMENT,(Bt+1)*Tt/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,Bt,ft.width,ft.height,1,mt,ie)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,ft.width,ft.height,ot.depth,mt,ft.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,st,Ct,ft.width,ft.height,ot.depth,0,ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?ht&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,ft.width,ft.height,ot.depth,mt,Nt,ft.data):e.texImage3D(i.TEXTURE_2D_ARRAY,st,Ct,ft.width,ft.height,ot.depth,0,mt,Nt,ft.data)}else{I&&lt&&e.texStorage2D(i.TEXTURE_2D,yt,Ct,Vt[0].width,Vt[0].height);for(let st=0,Q=Vt.length;st<Q;st++)ft=Vt[st],_.format!==en?mt!==null?I?ht&&e.compressedTexSubImage2D(i.TEXTURE_2D,st,0,0,ft.width,ft.height,mt,ft.data):e.compressedTexImage2D(i.TEXTURE_2D,st,Ct,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?ht&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,ft.width,ft.height,mt,Nt,ft.data):e.texImage2D(i.TEXTURE_2D,st,Ct,ft.width,ft.height,0,mt,Nt,ft.data)}else if(_.isDataArrayTexture)if(I){if(lt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,Ct,ot.width,ot.height,ot.depth),ht)if(_.layerUpdates.size>0){let st=cl(ot.width,ot.height,_.format,_.type);for(let Q of _.layerUpdates){let Tt=ot.data.subarray(Q*st/ot.data.BYTES_PER_ELEMENT,(Q+1)*st/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,ot.width,ot.height,1,mt,Nt,Tt)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,mt,Nt,ot.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ct,ot.width,ot.height,ot.depth,0,mt,Nt,ot.data);else if(_.isData3DTexture)I?(lt&&e.texStorage3D(i.TEXTURE_3D,yt,Ct,ot.width,ot.height,ot.depth),ht&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,mt,Nt,ot.data)):e.texImage3D(i.TEXTURE_3D,0,Ct,ot.width,ot.height,ot.depth,0,mt,Nt,ot.data);else if(_.isFramebufferTexture){if(lt)if(I)e.texStorage2D(i.TEXTURE_2D,yt,Ct,ot.width,ot.height);else{let st=ot.width,Q=ot.height;for(let Tt=0;Tt<yt;Tt++)e.texImage2D(i.TEXTURE_2D,Tt,Ct,st,Q,0,mt,Nt,null),st>>=1,Q>>=1}}else if(Vt.length>0){if(I&&lt){let st=ce(Vt[0]);e.texStorage2D(i.TEXTURE_2D,yt,Ct,st.width,st.height)}for(let st=0,Q=Vt.length;st<Q;st++)ft=Vt[st],I?ht&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,mt,Nt,ft):e.texImage2D(i.TEXTURE_2D,st,Ct,mt,Nt,ft);_.generateMipmaps=!1}else if(I){if(lt){let st=ce(ot);e.texStorage2D(i.TEXTURE_2D,yt,Ct,st.width,st.height)}ht&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt,Nt,ot)}else e.texImage2D(i.TEXTURE_2D,0,Ct,mt,Nt,ot);m(_)&&p(H),wt.__version=W.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function et(S,_,O){if(_.image.length!==6)return;let H=qt(S,_),it=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+O);let W=n.get(it);if(it.version!==W.__version||H===!0){e.activeTexture(i.TEXTURE0+O);let wt=$t.getPrimaries($t.workingColorSpace),ct=_.colorSpace===Nn?null:$t.getPrimaries(_.colorSpace),Mt=_.colorSpace===Nn||wt===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);let At=_.isCompressedTexture||_.image[0].isCompressedTexture,ot=_.image[0]&&_.image[0].isDataTexture,mt=[];for(let Q=0;Q<6;Q++)!At&&!ot?mt[Q]=x(_.image[Q],!0,s.maxCubemapSize):mt[Q]=ot?_.image[Q].image:_.image[Q],mt[Q]=le(_,mt[Q]);let Nt=mt[0],Ct=r.convert(_.format,_.colorSpace),ft=r.convert(_.type),Vt=T(_.internalFormat,Ct,ft,_.colorSpace),I=_.isVideoTexture!==!0,lt=W.__version===void 0||H===!0,ht=it.dataReady,yt=A(_,Nt);It(i.TEXTURE_CUBE_MAP,_);let st;if(At){I&&lt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,Vt,Nt.width,Nt.height);for(let Q=0;Q<6;Q++){st=mt[Q].mipmaps;for(let Tt=0;Tt<st.length;Tt++){let Bt=st[Tt];_.format!==en?Ct!==null?I?ht&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Tt,0,0,Bt.width,Bt.height,Ct,Bt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Tt,Vt,Bt.width,Bt.height,0,Bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Tt,0,0,Bt.width,Bt.height,Ct,ft,Bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Tt,Vt,Bt.width,Bt.height,0,Ct,ft,Bt.data)}}}else{if(st=_.mipmaps,I&&lt){st.length>0&&yt++;let Q=ce(mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,Vt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ot){I?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,mt[Q].width,mt[Q].height,Ct,ft,mt[Q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Vt,mt[Q].width,mt[Q].height,0,Ct,ft,mt[Q].data);for(let Tt=0;Tt<st.length;Tt++){let ie=st[Tt].image[Q].image;I?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Tt+1,0,0,ie.width,ie.height,Ct,ft,ie.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Tt+1,Vt,ie.width,ie.height,0,Ct,ft,ie.data)}}else{I?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ct,ft,mt[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Vt,Ct,ft,mt[Q]);for(let Tt=0;Tt<st.length;Tt++){let Bt=st[Tt];I?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Tt+1,0,0,Ct,ft,Bt.image[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Tt+1,Vt,Ct,ft,Bt.image[Q])}}}m(_)&&p(i.TEXTURE_CUBE_MAP),W.__version=it.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function _t(S,_,O,H,it,W){let wt=r.convert(O.format,O.colorSpace),ct=r.convert(O.type),Mt=T(O.internalFormat,wt,ct,O.colorSpace),At=n.get(_),ot=n.get(O);if(ot.__renderTarget=_,!At.__hasExternalTextures){let mt=Math.max(1,_.width>>W),Nt=Math.max(1,_.height>>W);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,W,Mt,mt,Nt,_.depth,0,wt,ct,null):e.texImage2D(it,W,Mt,mt,Nt,0,wt,ct,null)}e.bindFramebuffer(i.FRAMEBUFFER,S),dt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,H,it,ot.__webglTexture,0,Lt(_)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,H,it,ot.__webglTexture,W),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Pt(S,_,O){if(i.bindRenderbuffer(i.RENDERBUFFER,S),_.depthBuffer){let H=_.depthTexture,it=H&&H.isDepthTexture?H.type:null,W=v(_.stencilBuffer,it),wt=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=Lt(_);dt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct,W,_.width,_.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,W,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,W,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,wt,i.RENDERBUFFER,S)}else{let H=_.textures;for(let it=0;it<H.length;it++){let W=H[it],wt=r.convert(W.format,W.colorSpace),ct=r.convert(W.type),Mt=T(W.internalFormat,wt,ct,W.colorSpace),At=Lt(_);O&&dt(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,At,Mt,_.width,_.height):dt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,At,Mt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Mt,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Et(S,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,S),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let H=n.get(_.depthTexture);H.__renderTarget=_,(!H.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),K(_.depthTexture,0);let it=H.__webglTexture,W=Lt(_);if(_.depthTexture.format===Vi)dt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0);else if(_.depthTexture.format===Qi)dt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function Gt(S){let _=n.get(S),O=S.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==S.depthTexture){let H=S.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),H){let it=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,H.removeEventListener("dispose",it)};H.addEventListener("dispose",it),_.__depthDisposeCallback=it}_.__boundDepthTexture=H}if(S.depthTexture&&!_.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");let H=S.texture.mipmaps;H&&H.length>0?Et(_.__webglFramebuffer[0],S):Et(_.__webglFramebuffer,S)}else if(O){_.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[H]),_.__webglDepthbuffer[H]===void 0)_.__webglDepthbuffer[H]=i.createRenderbuffer(),Pt(_.__webglDepthbuffer[H],S,!1);else{let it=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=_.__webglDepthbuffer[H];i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,W)}}else{let H=S.texture.mipmaps;if(H&&H.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Pt(_.__webglDepthbuffer,S,!1);else{let it=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,W)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function me(S,_,O){let H=n.get(S);_!==void 0&&_t(H.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Gt(S)}function C(S){let _=S.texture,O=n.get(S),H=n.get(_);S.addEventListener("dispose",P);let it=S.textures,W=S.isWebGLCubeRenderTarget===!0,wt=it.length>1;if(wt||(H.__webglTexture===void 0&&(H.__webglTexture=i.createTexture()),H.__version=_.version,a.memory.textures++),W){O.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[ct]=[];for(let Mt=0;Mt<_.mipmaps.length;Mt++)O.__webglFramebuffer[ct][Mt]=i.createFramebuffer()}else O.__webglFramebuffer[ct]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let ct=0;ct<_.mipmaps.length;ct++)O.__webglFramebuffer[ct]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(wt)for(let ct=0,Mt=it.length;ct<Mt;ct++){let At=n.get(it[ct]);At.__webglTexture===void 0&&(At.__webglTexture=i.createTexture(),a.memory.textures++)}if(S.samples>0&&dt(S)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ct=0;ct<it.length;ct++){let Mt=it[ct];O.__webglColorRenderbuffer[ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[ct]);let At=r.convert(Mt.format,Mt.colorSpace),ot=r.convert(Mt.type),mt=T(Mt.internalFormat,At,ot,Mt.colorSpace,S.isXRRenderTarget===!0),Nt=Lt(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,Nt,mt,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,O.__webglColorRenderbuffer[ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),Pt(O.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(W){e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture),It(i.TEXTURE_CUBE_MAP,_);for(let ct=0;ct<6;ct++)if(_.mipmaps&&_.mipmaps.length>0)for(let Mt=0;Mt<_.mipmaps.length;Mt++)_t(O.__webglFramebuffer[ct][Mt],S,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Mt);else _t(O.__webglFramebuffer[ct],S,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(_)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let ct=0,Mt=it.length;ct<Mt;ct++){let At=it[ct],ot=n.get(At),mt=i.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(mt=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(mt,ot.__webglTexture),It(mt,At),_t(O.__webglFramebuffer,S,At,i.COLOR_ATTACHMENT0+ct,mt,0),m(At)&&p(mt)}e.unbindTexture()}else{let ct=i.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(ct=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,H.__webglTexture),It(ct,_),_.mipmaps&&_.mipmaps.length>0)for(let Mt=0;Mt<_.mipmaps.length;Mt++)_t(O.__webglFramebuffer[Mt],S,_,i.COLOR_ATTACHMENT0,ct,Mt);else _t(O.__webglFramebuffer,S,_,i.COLOR_ATTACHMENT0,ct,0);m(_)&&p(ct),e.unbindTexture()}S.depthBuffer&&Gt(S)}function jt(S){let _=S.textures;for(let O=0,H=_.length;O<H;O++){let it=_[O];if(m(it)){let W=E(S),wt=n.get(it).__webglTexture;e.bindTexture(W,wt),p(W),e.unbindTexture()}}}let Z=[],nt=[];function tt(S){if(S.samples>0){if(dt(S)===!1){let _=S.textures,O=S.width,H=S.height,it=i.COLOR_BUFFER_BIT,W=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,wt=n.get(S),ct=_.length>1;if(ct)for(let At=0;At<_.length;At++)e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer);let Mt=S.texture.mipmaps;Mt&&Mt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let At=0;At<_.length;At++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),ct){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,wt.__webglColorRenderbuffer[At]);let ot=n.get(_[At]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ot,0)}i.blitFramebuffer(0,0,O,H,0,0,O,H,it,i.NEAREST),c===!0&&(Z.length=0,nt.length=0,Z.push(i.COLOR_ATTACHMENT0+At),S.depthBuffer&&S.resolveDepthBuffer===!1&&(Z.push(W),nt.push(W),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,nt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Z))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ct)for(let At=0;At<_.length;At++){e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,wt.__webglColorRenderbuffer[At]);let ot=n.get(_[At]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,ot,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&c){let _=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Lt(S){return Math.min(s.maxSamples,S.samples)}function dt(S){let _=n.get(S);return S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Ft(S){let _=a.render.frame;h.get(S)!==_&&(h.set(S,_),S.update())}function le(S,_){let O=S.colorSpace,H=S.format,it=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||O!==pi&&O!==Nn&&($t.getTransfer(O)===Kt?(H!==en||it!==un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),_}function ce(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(l.width=S.naturalWidth||S.width,l.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(l.width=S.displayWidth,l.height=S.displayHeight):(l.width=S.width,l.height=S.height),l}this.allocateTextureUnit=X,this.resetTextureUnits=k,this.setTexture2D=K,this.setTexture2DArray=q,this.setTexture3D=B,this.setTextureCube=G,this.rebindTextures=me,this.setupRenderTarget=C,this.updateRenderTargetMipmap=jt,this.updateMultisampleRenderTarget=tt,this.setupDepthRenderbuffer=Gt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=dt}function Sg(i,t){function e(n,s=Nn){let r,a=$t.getTransfer(s);if(n===un)return i.UNSIGNED_BYTE;if(n===ha)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ua)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Yo)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===$o)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Xo)return i.BYTE;if(n===qo)return i.SHORT;if(n===Ji)return i.UNSIGNED_SHORT;if(n===ca)return i.INT;if(n===Qn)return i.UNSIGNED_INT;if(n===yn)return i.FLOAT;if(n===Ki)return i.HALF_FLOAT;if(n===Zo)return i.ALPHA;if(n===Jo)return i.RGB;if(n===en)return i.RGBA;if(n===Vi)return i.DEPTH_COMPONENT;if(n===Qi)return i.DEPTH_STENCIL;if(n===Ko)return i.RED;if(n===da)return i.RED_INTEGER;if(n===jo)return i.RG;if(n===fa)return i.RG_INTEGER;if(n===pa)return i.RGBA_INTEGER;if(n===ks||n===Hs||n===Gs||n===Ws)if(a===Kt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ks)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Hs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Gs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ws)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ks)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Hs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Gs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ws)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ma||n===ga||n===_a||n===xa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ma)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ga)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_a)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===xa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ya||n===va||n===Ma)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ya||n===va)return a===Kt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ma)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ba||n===Sa||n===Ta||n===Ea||n===wa||n===Aa||n===Ca||n===Ra||n===Ia||n===Pa||n===La||n===Da||n===Ua||n===Na)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ba)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Sa)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ta)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ea)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===wa)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Aa)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ca)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ra)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ia)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Pa)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===La)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Da)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ua)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Na)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Fa||n===Oa||n===Ba)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Fa)return a===Kt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Oa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ba)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===za||n===Va||n===ka||n===Ha)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===za)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Va)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ka)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ha)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ji?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Tg=`
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

}`,bl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Rs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new hn({vertexShader:Tg,fragmentShader:Eg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new se(new Ls(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Sl=class extends fn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,g=null,x=typeof XRWebGLBinding<"u",m=new bl,p={},E=e.getContextAttributes(),T=null,v=null,A=[],R=[],P=new vt,N=null,b=new Fe;b.viewport=new de;let M=new Fe;M.viewport=new de;let L=[b,M],k=new Kr,X=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let et=A[$];return et===void 0&&(et=new Yi,A[$]=et),et.getTargetRaySpace()},this.getControllerGrip=function($){let et=A[$];return et===void 0&&(et=new Yi,A[$]=et),et.getGripSpace()},this.getHand=function($){let et=A[$];return et===void 0&&(et=new Yi,A[$]=et),et.getHandSpace()};function K($){let et=R.indexOf($.inputSource);if(et===-1)return;let _t=A[et];_t!==void 0&&(_t.update($.inputSource,$.frame,l||a),_t.dispatchEvent({type:$.type,data:$.inputSource}))}function q(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",B);for(let $=0;$<A.length;$++){let et=R[$];et!==null&&(R[$]=null,A[$].disconnect(et))}X=null,Y=null,m.reset();for(let $ in p)delete p[$];t.setRenderTarget(T),d=null,f=null,u=null,s=null,v=null,Yt.stop(),n.isPresenting=!1,t.setPixelRatio(N),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(T=t.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",q),s.addEventListener("inputsourceschange",B),E.xrCompatible!==!0&&await e.makeXRCompatible(),N=t.getPixelRatio(),t.getSize(P),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,Pt=null,Et=null;E.depth&&(Et=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=E.stencil?Qi:Vi,Pt=E.stencil?ji:Qn);let Gt={colorFormat:e.RGBA8,depthFormat:Et,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Gt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new pn(f.textureWidth,f.textureHeight,{format:en,type:un,depthTexture:new Cs(f.textureWidth,f.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let _t={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,_t),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new pn(d.framebufferWidth,d.framebufferHeight,{format:en,type:un,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Yt.setContext(s),Yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function B($){for(let et=0;et<$.removed.length;et++){let _t=$.removed[et],Pt=R.indexOf(_t);Pt>=0&&(R[Pt]=null,A[Pt].disconnect(_t))}for(let et=0;et<$.added.length;et++){let _t=$.added[et],Pt=R.indexOf(_t);if(Pt===-1){for(let Gt=0;Gt<A.length;Gt++)if(Gt>=R.length){R.push(_t),Pt=Gt;break}else if(R[Gt]===null){R[Gt]=_t,Pt=Gt;break}if(Pt===-1)break}let Et=A[Pt];Et&&Et.connect(_t)}}let G=new w,rt=new w;function gt($,et,_t){G.setFromMatrixPosition(et.matrixWorld),rt.setFromMatrixPosition(_t.matrixWorld);let Pt=G.distanceTo(rt),Et=et.projectionMatrix.elements,Gt=_t.projectionMatrix.elements,me=Et[14]/(Et[10]-1),C=Et[14]/(Et[10]+1),jt=(Et[9]+1)/Et[5],Z=(Et[9]-1)/Et[5],nt=(Et[8]-1)/Et[0],tt=(Gt[8]+1)/Gt[0],Lt=me*nt,dt=me*tt,Ft=Pt/(-nt+tt),le=Ft*-nt;if(et.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(le),$.translateZ(Ft),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Et[10]===-1)$.projectionMatrix.copy(et.projectionMatrix),$.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let ce=me+Ft,S=C+Ft,_=Lt-le,O=dt+(Pt-le),H=jt*C/S*ce,it=Z*C/S*ce;$.projectionMatrix.makePerspective(_,O,H,it,ce,S),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function St($,et){et===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(et.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let et=$.near,_t=$.far;m.texture!==null&&(m.depthNear>0&&(et=m.depthNear),m.depthFar>0&&(_t=m.depthFar)),k.near=M.near=b.near=et,k.far=M.far=b.far=_t,(X!==k.near||Y!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),X=k.near,Y=k.far),k.layers.mask=$.layers.mask|6,b.layers.mask=k.layers.mask&3,M.layers.mask=k.layers.mask&5;let Pt=$.parent,Et=k.cameras;St(k,Pt);for(let Gt=0;Gt<Et.length;Gt++)St(Et[Gt],Pt);Et.length===2?gt(k,b,M):k.projectionMatrix.copy(b.projectionMatrix),It($,k,Pt)};function It($,et,_t){_t===null?$.matrix.copy(et.matrixWorld):($.matrix.copy(_t.matrixWorld),$.matrix.invert(),$.matrix.multiply(et.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(et.projectionMatrix),$.projectionMatrixInverse.copy(et.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ki*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function($){c=$,f!==null&&(f.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function($){return p[$]};let qt=null;function ee($,et){if(h=et.getViewerPose(l||a),g=et,h!==null){let _t=h.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let Pt=!1;_t.length!==k.cameras.length&&(k.cameras.length=0,Pt=!0);for(let C=0;C<_t.length;C++){let jt=_t[C],Z=null;if(d!==null)Z=d.getViewport(jt);else{let tt=u.getViewSubImage(f,jt);Z=tt.viewport,C===0&&(t.setRenderTargetTextures(v,tt.colorTexture,tt.depthStencilTexture),t.setRenderTarget(v))}let nt=L[C];nt===void 0&&(nt=new Fe,nt.layers.enable(C),nt.viewport=new de,L[C]=nt),nt.matrix.fromArray(jt.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(jt.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(Z.x,Z.y,Z.width,Z.height),C===0&&(k.matrix.copy(nt.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Pt===!0&&k.cameras.push(nt)}let Et=s.enabledFeatures;if(Et&&Et.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let C=u.getDepthInformation(_t[0]);C&&C.isValid&&C.texture&&m.init(C,s.renderState)}if(Et&&Et.includes("camera-access")&&x){t.state.unbindTexture(),u=n.getBinding();for(let C=0;C<_t.length;C++){let jt=_t[C].camera;if(jt){let Z=p[jt];Z||(Z=new Rs,p[jt]=Z);let nt=u.getCameraImage(jt);Z.sourceTexture=nt}}}}for(let _t=0;_t<A.length;_t++){let Pt=R[_t],Et=A[_t];Pt!==null&&Et!==void 0&&Et.update(Pt,et,l||a)}qt&&qt($,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}let Yt=new yh;Yt.setAnimationLoop(ee),this.setAnimationLoop=function($){qt=$},this.dispose=function(){}}},Mi=new cn,wg=new pe;function Ag(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,rl(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,E,T,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,E,T):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Le&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Le&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let E=t.get(p),T=E.envMap,v=E.envMapRotation;T&&(m.envMap.value=T,Mi.copy(v),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),m.envMapRotation.value.setFromMatrix4(wg.makeRotationFromEuler(Mi)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,E,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=T*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Le&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let E=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Cg(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,T){let v=T.program;n.uniformBlockBinding(E,v)}function l(E,T){let v=s[E.id];v===void 0&&(g(E),v=h(E),s[E.id]=v,E.addEventListener("dispose",m));let A=T.program;n.updateUBOMapping(E,A);let R=t.render.frame;r[E.id]!==R&&(f(E),r[E.id]=R)}function h(E){let T=u();E.__bindingPointIndex=T;let v=i.createBuffer(),A=E.__size,R=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,A,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,v),v}function u(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){let T=s[E.id],v=E.uniforms,A=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let R=0,P=v.length;R<P;R++){let N=Array.isArray(v[R])?v[R]:[v[R]];for(let b=0,M=N.length;b<M;b++){let L=N[b];if(d(L,R,b,A)===!0){let k=L.__offset,X=Array.isArray(L.value)?L.value:[L.value],Y=0;for(let K=0;K<X.length;K++){let q=X[K],B=x(q);typeof q=="number"||typeof q=="boolean"?(L.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,k+Y,L.__data)):q.isMatrix3?(L.__data[0]=q.elements[0],L.__data[1]=q.elements[1],L.__data[2]=q.elements[2],L.__data[3]=0,L.__data[4]=q.elements[3],L.__data[5]=q.elements[4],L.__data[6]=q.elements[5],L.__data[7]=0,L.__data[8]=q.elements[6],L.__data[9]=q.elements[7],L.__data[10]=q.elements[8],L.__data[11]=0):(q.toArray(L.__data,Y),Y+=B.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(E,T,v,A){let R=E.value,P=T+"_"+v;if(A[P]===void 0)return typeof R=="number"||typeof R=="boolean"?A[P]=R:A[P]=R.clone(),!0;{let N=A[P];if(typeof R=="number"||typeof R=="boolean"){if(N!==R)return A[P]=R,!0}else if(N.equals(R)===!1)return N.copy(R),!0}return!1}function g(E){let T=E.uniforms,v=0,A=16;for(let P=0,N=T.length;P<N;P++){let b=Array.isArray(T[P])?T[P]:[T[P]];for(let M=0,L=b.length;M<L;M++){let k=b[M],X=Array.isArray(k.value)?k.value:[k.value];for(let Y=0,K=X.length;Y<K;Y++){let q=X[Y],B=x(q),G=v%A,rt=G%B.boundary,gt=G+rt;v+=rt,gt!==0&&A-gt<B.storage&&(v+=A-gt),k.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=v,v+=B.storage}}}let R=v%A;return R>0&&(v+=A-R),E.__size=v,E.__cache={},this}function x(E){let T={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(T.boundary=4,T.storage=4):E.isVector2?(T.boundary=8,T.storage=8):E.isVector3||E.isColor?(T.boundary=16,T.storage=12):E.isVector4?(T.boundary=16,T.storage=16):E.isMatrix3?(T.boundary=48,T.storage=48):E.isMatrix4?(T.boundary=64,T.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),T}function m(E){let T=E.target;T.removeEventListener("dispose",m);let v=a.indexOf(T.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function p(){for(let E in s)i.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}var Ya=class{constructor(t={}){let{canvas:e=Xc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,E=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let v=this,A=!1;this._outputColorSpace=Ie;let R=0,P=0,N=null,b=-1,M=null,L=new de,k=new de,X=null,Y=new Xt(0),K=0,q=e.width,B=e.height,G=1,rt=null,gt=null,St=new de(0,0,q,B),It=new de(0,0,q,B),qt=!1,ee=new $i,Yt=!1,$=!1,et=new pe,_t=new w,Pt=new de,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Gt=!1;function me(){return N===null?G:1}let C=n;function jt(y,D){return e.getContext(y,D)}try{let y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",ht,!1),e.addEventListener("webglcontextrestored",yt,!1),e.addEventListener("webglcontextcreationerror",st,!1),C===null){let D="webgl2";if(C=jt(D,y),C===null)throw jt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Z,nt,tt,Lt,dt,Ft,le,ce,S,_,O,H,it,W,wt,ct,Mt,At,ot,mt,Nt,Ct,ft,Vt;function I(){Z=new qp(C),Z.init(),Ct=new Sg(C,Z),nt=new zp(C,Z,t,Ct),tt=new Mg(C,Z),nt.reversedDepthBuffer&&f&&tt.buffers.depth.setReversed(!0),Lt=new Zp(C),dt=new lg,Ft=new bg(C,Z,tt,dt,nt,Ct,Lt),le=new kp(v),ce=new Xp(v),S=new td(C),ft=new Op(C,S),_=new Yp(C,S,Lt,ft),O=new Kp(C,_,S,Lt),ot=new Jp(C,nt,Ft),ct=new Vp(dt),H=new og(v,le,ce,Z,nt,ft,ct),it=new Ag(v,dt),W=new hg,wt=new gg(Z),At=new Fp(v,le,ce,tt,O,d,c),Mt=new yg(v,O,nt),Vt=new Cg(C,Lt,nt,tt),mt=new Bp(C,Z,Lt),Nt=new $p(C,Z,Lt),Lt.programs=H.programs,v.capabilities=nt,v.extensions=Z,v.properties=dt,v.renderLists=W,v.shadowMap=Mt,v.state=tt,v.info=Lt}I();let lt=new Sl(v,C);this.xr=lt,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let y=Z.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=Z.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(y){y!==void 0&&(G=y,this.setSize(q,B,!1))},this.getSize=function(y){return y.set(q,B)},this.setSize=function(y,D,z=!0){if(lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=y,B=D,e.width=Math.floor(y*G),e.height=Math.floor(D*G),z===!0&&(e.style.width=y+"px",e.style.height=D+"px"),this.setViewport(0,0,y,D)},this.getDrawingBufferSize=function(y){return y.set(q*G,B*G).floor()},this.setDrawingBufferSize=function(y,D,z){q=y,B=D,G=z,e.width=Math.floor(y*z),e.height=Math.floor(D*z),this.setViewport(0,0,y,D)},this.getCurrentViewport=function(y){return y.copy(L)},this.getViewport=function(y){return y.copy(St)},this.setViewport=function(y,D,z,V){y.isVector4?St.set(y.x,y.y,y.z,y.w):St.set(y,D,z,V),tt.viewport(L.copy(St).multiplyScalar(G).round())},this.getScissor=function(y){return y.copy(It)},this.setScissor=function(y,D,z,V){y.isVector4?It.set(y.x,y.y,y.z,y.w):It.set(y,D,z,V),tt.scissor(k.copy(It).multiplyScalar(G).round())},this.getScissorTest=function(){return qt},this.setScissorTest=function(y){tt.setScissorTest(qt=y)},this.setOpaqueSort=function(y){rt=y},this.setTransparentSort=function(y){gt=y},this.getClearColor=function(y){return y.copy(At.getClearColor())},this.setClearColor=function(){At.setClearColor(...arguments)},this.getClearAlpha=function(){return At.getClearAlpha()},this.setClearAlpha=function(){At.setClearAlpha(...arguments)},this.clear=function(y=!0,D=!0,z=!0){let V=0;if(y){let U=!1;if(N!==null){let at=N.texture.format;U=at===pa||at===fa||at===da}if(U){let at=N.texture.type,pt=at===un||at===Qn||at===Ji||at===ji||at===ha||at===ua,bt=At.getClearColor(),xt=At.getClearAlpha(),Ut=bt.r,Ot=bt.g,Rt=bt.b;pt?(g[0]=Ut,g[1]=Ot,g[2]=Rt,g[3]=xt,C.clearBufferuiv(C.COLOR,0,g)):(x[0]=Ut,x[1]=Ot,x[2]=Rt,x[3]=xt,C.clearBufferiv(C.COLOR,0,x))}else V|=C.COLOR_BUFFER_BIT}D&&(V|=C.DEPTH_BUFFER_BIT),z&&(V|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ht,!1),e.removeEventListener("webglcontextrestored",yt,!1),e.removeEventListener("webglcontextcreationerror",st,!1),At.dispose(),W.dispose(),wt.dispose(),dt.dispose(),le.dispose(),ce.dispose(),O.dispose(),ft.dispose(),Vt.dispose(),H.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",dn),lt.removeEventListener("sessionend",Ll),si.stop()};function ht(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function yt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let y=Lt.autoReset,D=Mt.enabled,z=Mt.autoUpdate,V=Mt.needsUpdate,U=Mt.type;I(),Lt.autoReset=y,Mt.enabled=D,Mt.autoUpdate=z,Mt.needsUpdate=V,Mt.type=U}function st(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Q(y){let D=y.target;D.removeEventListener("dispose",Q),Tt(D)}function Tt(y){Bt(y),dt.remove(y)}function Bt(y){let D=dt.get(y).programs;D!==void 0&&(D.forEach(function(z){H.releaseProgram(z)}),y.isShaderMaterial&&H.releaseShaderCache(y))}this.renderBufferDirect=function(y,D,z,V,U,at){D===null&&(D=Et);let pt=U.isMesh&&U.matrixWorld.determinant()<0,bt=qh(y,D,z,V,U);tt.setMaterial(V,pt);let xt=z.index,Ut=1;if(V.wireframe===!0){if(xt=_.getWireframeAttribute(z),xt===void 0)return;Ut=2}let Ot=z.drawRange,Rt=z.attributes.position,Wt=Ot.start*Ut,Qt=(Ot.start+Ot.count)*Ut;at!==null&&(Wt=Math.max(Wt,at.start*Ut),Qt=Math.min(Qt,(at.start+at.count)*Ut)),xt!==null?(Wt=Math.max(Wt,0),Qt=Math.min(Qt,xt.count)):Rt!=null&&(Wt=Math.max(Wt,0),Qt=Math.min(Qt,Rt.count));let fe=Qt-Wt;if(fe<0||fe===1/0)return;ft.setup(U,V,bt,z,xt);let ae,ne=mt;if(xt!==null&&(ae=S.get(xt),ne=Nt,ne.setIndex(ae)),U.isMesh)V.wireframe===!0?(tt.setLineWidth(V.wireframeLinewidth*me()),ne.setMode(C.LINES)):ne.setMode(C.TRIANGLES);else if(U.isLine){let Dt=V.linewidth;Dt===void 0&&(Dt=1),tt.setLineWidth(Dt*me()),U.isLineSegments?ne.setMode(C.LINES):U.isLineLoop?ne.setMode(C.LINE_LOOP):ne.setMode(C.LINE_STRIP)}else U.isPoints?ne.setMode(C.POINTS):U.isSprite&&ne.setMode(C.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Hi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ne.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Z.get("WEBGL_multi_draw"))ne.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let Dt=U._multiDrawStarts,he=U._multiDrawCounts,Zt=U._multiDrawCount,Ve=xt?S.get(xt).bytesPerElement:1,Ei=dt.get(V).currentProgram.getUniforms();for(let ke=0;ke<Zt;ke++)Ei.setValue(C,"_gl_DrawID",ke),ne.render(Dt[ke]/Ve,he[ke])}else if(U.isInstancedMesh)ne.renderInstances(Wt,fe,U.count);else if(z.isInstancedBufferGeometry){let Dt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,he=Math.min(z.instanceCount,Dt);ne.renderInstances(Wt,fe,he)}else ne.render(Wt,fe)};function ie(y,D,z){y.transparent===!0&&y.side===Oe&&y.forceSinglePass===!1?(y.side=Le,y.needsUpdate=!0,nr(y,D,z),y.side=Pn,y.needsUpdate=!0,nr(y,D,z),y.side=Oe):nr(y,D,z)}this.compile=function(y,D,z=null){z===null&&(z=y),p=wt.get(z),p.init(D),T.push(p),z.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),y!==z&&y.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();let V=new Set;return y.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let at=U.material;if(at)if(Array.isArray(at))for(let pt=0;pt<at.length;pt++){let bt=at[pt];ie(bt,z,U),V.add(bt)}else ie(at,z,U),V.add(at)}),p=T.pop(),V},this.compileAsync=function(y,D,z=null){let V=this.compile(y,D,z);return new Promise(U=>{function at(){if(V.forEach(function(pt){dt.get(pt).currentProgram.isReady()&&V.delete(pt)}),V.size===0){U(y);return}setTimeout(at,10)}Z.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let Jt=null;function Tn(y){Jt&&Jt(y)}function dn(){si.stop()}function Ll(){si.start()}let si=new yh;si.setAnimationLoop(Tn),typeof self<"u"&&si.setContext(self),this.setAnimationLoop=function(y){Jt=y,lt.setAnimationLoop(y),y===null?si.stop():si.start()},lt.addEventListener("sessionstart",dn),lt.addEventListener("sessionend",Ll),this.render=function(y,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(D),D=lt.getCamera()),y.isScene===!0&&y.onBeforeRender(v,y,D,N),p=wt.get(y,T.length),p.init(D),T.push(p),et.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),ee.setFromProjectionMatrix(et,on,D.reversedDepth),$=this.localClippingEnabled,Yt=ct.init(this.clippingPlanes,$),m=W.get(y,E.length),m.init(),E.push(m),lt.enabled===!0&&lt.isPresenting===!0){let at=v.xr.getDepthSensingMesh();at!==null&&no(at,D,-1/0,v.sortObjects)}no(y,D,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(rt,gt),Gt=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,Gt&&At.addToRenderList(m,y),this.info.render.frame++,Yt===!0&&ct.beginShadows();let z=p.state.shadowsArray;Mt.render(z,y,D),Yt===!0&&ct.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=m.opaque,U=m.transmissive;if(p.setupLights(),D.isArrayCamera){let at=D.cameras;if(U.length>0)for(let pt=0,bt=at.length;pt<bt;pt++){let xt=at[pt];Ul(V,U,y,xt)}Gt&&At.render(y);for(let pt=0,bt=at.length;pt<bt;pt++){let xt=at[pt];Dl(m,y,xt,xt.viewport)}}else U.length>0&&Ul(V,U,y,D),Gt&&At.render(y),Dl(m,y,D);N!==null&&P===0&&(Ft.updateMultisampleRenderTarget(N),Ft.updateRenderTargetMipmap(N)),y.isScene===!0&&y.onAfterRender(v,y,D),ft.resetDefaultState(),b=-1,M=null,T.pop(),T.length>0?(p=T[T.length-1],Yt===!0&&ct.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function no(y,D,z,V){if(y.visible===!1)return;if(y.layers.test(D.layers)){if(y.isGroup)z=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(D);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||ee.intersectsSprite(y)){V&&Pt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(et);let pt=O.update(y),bt=y.material;bt.visible&&m.push(y,pt,bt,z,Pt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||ee.intersectsObject(y))){let pt=O.update(y),bt=y.material;if(V&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Pt.copy(y.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),Pt.copy(pt.boundingSphere.center)),Pt.applyMatrix4(y.matrixWorld).applyMatrix4(et)),Array.isArray(bt)){let xt=pt.groups;for(let Ut=0,Ot=xt.length;Ut<Ot;Ut++){let Rt=xt[Ut],Wt=bt[Rt.materialIndex];Wt&&Wt.visible&&m.push(y,pt,Wt,z,Pt.z,Rt)}}else bt.visible&&m.push(y,pt,bt,z,Pt.z,null)}}let at=y.children;for(let pt=0,bt=at.length;pt<bt;pt++)no(at[pt],D,z,V)}function Dl(y,D,z,V){let U=y.opaque,at=y.transmissive,pt=y.transparent;p.setupLightsView(z),Yt===!0&&ct.setGlobalState(v.clippingPlanes,z),V&&tt.viewport(L.copy(V)),U.length>0&&er(U,D,z),at.length>0&&er(at,D,z),pt.length>0&&er(pt,D,z),tt.buffers.depth.setTest(!0),tt.buffers.depth.setMask(!0),tt.buffers.color.setMask(!0),tt.setPolygonOffset(!1)}function Ul(y,D,z,V){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new pn(1,1,{generateMipmaps:!0,type:Z.has("EXT_color_buffer_half_float")||Z.has("EXT_color_buffer_float")?Ki:un,minFilter:jn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$t.workingColorSpace}));let at=p.state.transmissionRenderTarget[V.id],pt=V.viewport||L;at.setSize(pt.z*v.transmissionResolutionScale,pt.w*v.transmissionResolutionScale);let bt=v.getRenderTarget(),xt=v.getActiveCubeFace(),Ut=v.getActiveMipmapLevel();v.setRenderTarget(at),v.getClearColor(Y),K=v.getClearAlpha(),K<1&&v.setClearColor(16777215,.5),v.clear(),Gt&&At.render(z);let Ot=v.toneMapping;v.toneMapping=Un;let Rt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),Yt===!0&&ct.setGlobalState(v.clippingPlanes,V),er(y,z,V),Ft.updateMultisampleRenderTarget(at),Ft.updateRenderTargetMipmap(at),Z.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let Qt=0,fe=D.length;Qt<fe;Qt++){let ae=D[Qt],ne=ae.object,Dt=ae.geometry,he=ae.material,Zt=ae.group;if(he.side===Oe&&ne.layers.test(V.layers)){let Ve=he.side;he.side=Le,he.needsUpdate=!0,Nl(ne,z,V,Dt,he,Zt),he.side=Ve,he.needsUpdate=!0,Wt=!0}}Wt===!0&&(Ft.updateMultisampleRenderTarget(at),Ft.updateRenderTargetMipmap(at))}v.setRenderTarget(bt,xt,Ut),v.setClearColor(Y,K),Rt!==void 0&&(V.viewport=Rt),v.toneMapping=Ot}function er(y,D,z){let V=D.isScene===!0?D.overrideMaterial:null;for(let U=0,at=y.length;U<at;U++){let pt=y[U],bt=pt.object,xt=pt.geometry,Ut=pt.group,Ot=pt.material;Ot.allowOverride===!0&&V!==null&&(Ot=V),bt.layers.test(z.layers)&&Nl(bt,D,z,xt,Ot,Ut)}}function Nl(y,D,z,V,U,at){y.onBeforeRender(v,D,z,V,U,at),y.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),U.onBeforeRender(v,D,z,V,y,at),U.transparent===!0&&U.side===Oe&&U.forceSinglePass===!1?(U.side=Le,U.needsUpdate=!0,v.renderBufferDirect(z,D,V,U,y,at),U.side=Pn,U.needsUpdate=!0,v.renderBufferDirect(z,D,V,U,y,at),U.side=Oe):v.renderBufferDirect(z,D,V,U,y,at),y.onAfterRender(v,D,z,V,U,at)}function nr(y,D,z){D.isScene!==!0&&(D=Et);let V=dt.get(y),U=p.state.lights,at=p.state.shadowsArray,pt=U.state.version,bt=H.getParameters(y,U.state,at,D,z),xt=H.getProgramCacheKey(bt),Ut=V.programs;V.environment=y.isMeshStandardMaterial?D.environment:null,V.fog=D.fog,V.envMap=(y.isMeshStandardMaterial?ce:le).get(y.envMap||V.environment),V.envMapRotation=V.environment!==null&&y.envMap===null?D.environmentRotation:y.envMapRotation,Ut===void 0&&(y.addEventListener("dispose",Q),Ut=new Map,V.programs=Ut);let Ot=Ut.get(xt);if(Ot!==void 0){if(V.currentProgram===Ot&&V.lightsStateVersion===pt)return Ol(y,bt),Ot}else bt.uniforms=H.getUniforms(y),y.onBeforeCompile(bt,v),Ot=H.acquireProgram(bt,xt),Ut.set(xt,Ot),V.uniforms=bt.uniforms;let Rt=V.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Rt.clippingPlanes=ct.uniform),Ol(y,bt),V.needsLights=$h(y),V.lightsStateVersion=pt,V.needsLights&&(Rt.ambientLightColor.value=U.state.ambient,Rt.lightProbe.value=U.state.probe,Rt.directionalLights.value=U.state.directional,Rt.directionalLightShadows.value=U.state.directionalShadow,Rt.spotLights.value=U.state.spot,Rt.spotLightShadows.value=U.state.spotShadow,Rt.rectAreaLights.value=U.state.rectArea,Rt.ltc_1.value=U.state.rectAreaLTC1,Rt.ltc_2.value=U.state.rectAreaLTC2,Rt.pointLights.value=U.state.point,Rt.pointLightShadows.value=U.state.pointShadow,Rt.hemisphereLights.value=U.state.hemi,Rt.directionalShadowMap.value=U.state.directionalShadowMap,Rt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Rt.spotShadowMap.value=U.state.spotShadowMap,Rt.spotLightMatrix.value=U.state.spotLightMatrix,Rt.spotLightMap.value=U.state.spotLightMap,Rt.pointShadowMap.value=U.state.pointShadowMap,Rt.pointShadowMatrix.value=U.state.pointShadowMatrix),V.currentProgram=Ot,V.uniformsList=null,Ot}function Fl(y){if(y.uniformsList===null){let D=y.currentProgram.getUniforms();y.uniformsList=is.seqWithValue(D.seq,y.uniforms)}return y.uniformsList}function Ol(y,D){let z=dt.get(y);z.outputColorSpace=D.outputColorSpace,z.batching=D.batching,z.batchingColor=D.batchingColor,z.instancing=D.instancing,z.instancingColor=D.instancingColor,z.instancingMorph=D.instancingMorph,z.skinning=D.skinning,z.morphTargets=D.morphTargets,z.morphNormals=D.morphNormals,z.morphColors=D.morphColors,z.morphTargetsCount=D.morphTargetsCount,z.numClippingPlanes=D.numClippingPlanes,z.numIntersection=D.numClipIntersection,z.vertexAlphas=D.vertexAlphas,z.vertexTangents=D.vertexTangents,z.toneMapping=D.toneMapping}function qh(y,D,z,V,U){D.isScene!==!0&&(D=Et),Ft.resetTextureUnits();let at=D.fog,pt=V.isMeshStandardMaterial?D.environment:null,bt=N===null?v.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:pi,xt=(V.isMeshStandardMaterial?ce:le).get(V.envMap||pt),Ut=V.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ot=!!z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Rt=!!z.morphAttributes.position,Wt=!!z.morphAttributes.normal,Qt=!!z.morphAttributes.color,fe=Un;V.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(fe=v.toneMapping);let ae=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ne=ae!==void 0?ae.length:0,Dt=dt.get(V),he=p.state.lights;if(Yt===!0&&($===!0||y!==M)){let Ce=y===M&&V.id===b;ct.setState(V,y,Ce)}let Zt=!1;V.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==he.state.version||Dt.outputColorSpace!==bt||U.isBatchedMesh&&Dt.batching===!1||!U.isBatchedMesh&&Dt.batching===!0||U.isBatchedMesh&&Dt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Dt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Dt.instancing===!1||!U.isInstancedMesh&&Dt.instancing===!0||U.isSkinnedMesh&&Dt.skinning===!1||!U.isSkinnedMesh&&Dt.skinning===!0||U.isInstancedMesh&&Dt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Dt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Dt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Dt.instancingMorph===!1&&U.morphTexture!==null||Dt.envMap!==xt||V.fog===!0&&Dt.fog!==at||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==ct.numPlanes||Dt.numIntersection!==ct.numIntersection)||Dt.vertexAlphas!==Ut||Dt.vertexTangents!==Ot||Dt.morphTargets!==Rt||Dt.morphNormals!==Wt||Dt.morphColors!==Qt||Dt.toneMapping!==fe||Dt.morphTargetsCount!==ne)&&(Zt=!0):(Zt=!0,Dt.__version=V.version);let Ve=Dt.currentProgram;Zt===!0&&(Ve=nr(V,D,U));let Ei=!1,ke=!1,os=!1,ue=Ve.getUniforms(),$e=Dt.uniforms;if(tt.useProgram(Ve.program)&&(Ei=!0,ke=!0,os=!0),V.id!==b&&(b=V.id,ke=!0),Ei||M!==y){tt.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),ue.setValue(C,"projectionMatrix",y.projectionMatrix),ue.setValue(C,"viewMatrix",y.matrixWorldInverse);let Ne=ue.map.cameraPosition;Ne!==void 0&&Ne.setValue(C,_t.setFromMatrixPosition(y.matrixWorld)),nt.logarithmicDepthBuffer&&ue.setValue(C,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ue.setValue(C,"isOrthographic",y.isOrthographicCamera===!0),M!==y&&(M=y,ke=!0,os=!0)}if(U.isSkinnedMesh){ue.setOptional(C,U,"bindMatrix"),ue.setOptional(C,U,"bindMatrixInverse");let Ce=U.skeleton;Ce&&(Ce.boneTexture===null&&Ce.computeBoneTexture(),ue.setValue(C,"boneTexture",Ce.boneTexture,Ft))}U.isBatchedMesh&&(ue.setOptional(C,U,"batchingTexture"),ue.setValue(C,"batchingTexture",U._matricesTexture,Ft),ue.setOptional(C,U,"batchingIdTexture"),ue.setValue(C,"batchingIdTexture",U._indirectTexture,Ft),ue.setOptional(C,U,"batchingColorTexture"),U._colorsTexture!==null&&ue.setValue(C,"batchingColorTexture",U._colorsTexture,Ft));let Ze=z.morphAttributes;if((Ze.position!==void 0||Ze.normal!==void 0||Ze.color!==void 0)&&ot.update(U,z,Ve),(ke||Dt.receiveShadow!==U.receiveShadow)&&(Dt.receiveShadow=U.receiveShadow,ue.setValue(C,"receiveShadow",U.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&($e.envMap.value=xt,$e.flipEnvMap.value=xt.isCubeTexture&&xt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&D.environment!==null&&($e.envMapIntensity.value=D.environmentIntensity),ke&&(ue.setValue(C,"toneMappingExposure",v.toneMappingExposure),Dt.needsLights&&Yh($e,os),at&&V.fog===!0&&it.refreshFogUniforms($e,at),it.refreshMaterialUniforms($e,V,G,B,p.state.transmissionRenderTarget[y.id]),is.upload(C,Fl(Dt),$e,Ft)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(is.upload(C,Fl(Dt),$e,Ft),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ue.setValue(C,"center",U.center),ue.setValue(C,"modelViewMatrix",U.modelViewMatrix),ue.setValue(C,"normalMatrix",U.normalMatrix),ue.setValue(C,"modelMatrix",U.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let Ce=V.uniformsGroups;for(let Ne=0,io=Ce.length;Ne<io;Ne++){let ri=Ce[Ne];Vt.update(ri,Ve),Vt.bind(ri,Ve)}}return Ve}function Yh(y,D){y.ambientLightColor.needsUpdate=D,y.lightProbe.needsUpdate=D,y.directionalLights.needsUpdate=D,y.directionalLightShadows.needsUpdate=D,y.pointLights.needsUpdate=D,y.pointLightShadows.needsUpdate=D,y.spotLights.needsUpdate=D,y.spotLightShadows.needsUpdate=D,y.rectAreaLights.needsUpdate=D,y.hemisphereLights.needsUpdate=D}function $h(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(y,D,z){let V=dt.get(y);V.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),dt.get(y.texture).__webglTexture=D,dt.get(y.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:z,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,D){let z=dt.get(y);z.__webglFramebuffer=D,z.__useDefaultFramebuffer=D===void 0};let Zh=C.createFramebuffer();this.setRenderTarget=function(y,D=0,z=0){N=y,R=D,P=z;let V=!0,U=null,at=!1,pt=!1;if(y){let xt=dt.get(y);if(xt.__useDefaultFramebuffer!==void 0)tt.bindFramebuffer(C.FRAMEBUFFER,null),V=!1;else if(xt.__webglFramebuffer===void 0)Ft.setupRenderTarget(y);else if(xt.__hasExternalTextures)Ft.rebindTextures(y,dt.get(y.texture).__webglTexture,dt.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Rt=y.depthTexture;if(xt.__boundDepthTexture!==Rt){if(Rt!==null&&dt.has(Rt)&&(y.width!==Rt.image.width||y.height!==Rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ft.setupDepthRenderbuffer(y)}}let Ut=y.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(pt=!0);let Ot=dt.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ot[D])?U=Ot[D][z]:U=Ot[D],at=!0):y.samples>0&&Ft.useMultisampledRTT(y)===!1?U=dt.get(y).__webglMultisampledFramebuffer:Array.isArray(Ot)?U=Ot[z]:U=Ot,L.copy(y.viewport),k.copy(y.scissor),X=y.scissorTest}else L.copy(St).multiplyScalar(G).floor(),k.copy(It).multiplyScalar(G).floor(),X=qt;if(z!==0&&(U=Zh),tt.bindFramebuffer(C.FRAMEBUFFER,U)&&V&&tt.drawBuffers(y,U),tt.viewport(L),tt.scissor(k),tt.setScissorTest(X),at){let xt=dt.get(y.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+D,xt.__webglTexture,z)}else if(pt){let xt=D;for(let Ut=0;Ut<y.textures.length;Ut++){let Ot=dt.get(y.textures[Ut]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Ut,Ot.__webglTexture,z,xt)}}else if(y!==null&&z!==0){let xt=dt.get(y.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,xt.__webglTexture,z)}b=-1},this.readRenderTargetPixels=function(y,D,z,V,U,at,pt,bt=0){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=dt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&pt!==void 0&&(xt=xt[pt]),xt){tt.bindFramebuffer(C.FRAMEBUFFER,xt);try{let Ut=y.textures[bt],Ot=Ut.format,Rt=Ut.type;if(!nt.textureFormatReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!nt.textureTypeReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=y.width-V&&z>=0&&z<=y.height-U&&(y.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+bt),C.readPixels(D,z,V,U,Ct.convert(Ot),Ct.convert(Rt),at))}finally{let Ut=N!==null?dt.get(N).__webglFramebuffer:null;tt.bindFramebuffer(C.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(y,D,z,V,U,at,pt,bt=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=dt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&pt!==void 0&&(xt=xt[pt]),xt)if(D>=0&&D<=y.width-V&&z>=0&&z<=y.height-U){tt.bindFramebuffer(C.FRAMEBUFFER,xt);let Ut=y.textures[bt],Ot=Ut.format,Rt=Ut.type;if(!nt.textureFormatReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!nt.textureTypeReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Wt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Wt),C.bufferData(C.PIXEL_PACK_BUFFER,at.byteLength,C.STREAM_READ),y.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+bt),C.readPixels(D,z,V,U,Ct.convert(Ot),Ct.convert(Rt),0);let Qt=N!==null?dt.get(N).__webglFramebuffer:null;tt.bindFramebuffer(C.FRAMEBUFFER,Qt);let fe=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await qc(C,fe,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Wt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,at),C.deleteBuffer(Wt),C.deleteSync(fe),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,D=null,z=0){let V=Math.pow(2,-z),U=Math.floor(y.image.width*V),at=Math.floor(y.image.height*V),pt=D!==null?D.x:0,bt=D!==null?D.y:0;Ft.setTexture2D(y,0),C.copyTexSubImage2D(C.TEXTURE_2D,z,0,0,pt,bt,U,at),tt.unbindTexture()};let Jh=C.createFramebuffer(),Kh=C.createFramebuffer();this.copyTextureToTexture=function(y,D,z=null,V=null,U=0,at=null){at===null&&(U!==0?(Hi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),at=U,U=0):at=0);let pt,bt,xt,Ut,Ot,Rt,Wt,Qt,fe,ae=y.isCompressedTexture?y.mipmaps[at]:y.image;if(z!==null)pt=z.max.x-z.min.x,bt=z.max.y-z.min.y,xt=z.isBox3?z.max.z-z.min.z:1,Ut=z.min.x,Ot=z.min.y,Rt=z.isBox3?z.min.z:0;else{let Ze=Math.pow(2,-U);pt=Math.floor(ae.width*Ze),bt=Math.floor(ae.height*Ze),y.isDataArrayTexture?xt=ae.depth:y.isData3DTexture?xt=Math.floor(ae.depth*Ze):xt=1,Ut=0,Ot=0,Rt=0}V!==null?(Wt=V.x,Qt=V.y,fe=V.z):(Wt=0,Qt=0,fe=0);let ne=Ct.convert(D.format),Dt=Ct.convert(D.type),he;D.isData3DTexture?(Ft.setTexture3D(D,0),he=C.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Ft.setTexture2DArray(D,0),he=C.TEXTURE_2D_ARRAY):(Ft.setTexture2D(D,0),he=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,D.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,D.unpackAlignment);let Zt=C.getParameter(C.UNPACK_ROW_LENGTH),Ve=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Ei=C.getParameter(C.UNPACK_SKIP_PIXELS),ke=C.getParameter(C.UNPACK_SKIP_ROWS),os=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,ae.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ae.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ut),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ot),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Rt);let ue=y.isDataArrayTexture||y.isData3DTexture,$e=D.isDataArrayTexture||D.isData3DTexture;if(y.isDepthTexture){let Ze=dt.get(y),Ce=dt.get(D),Ne=dt.get(Ze.__renderTarget),io=dt.get(Ce.__renderTarget);tt.bindFramebuffer(C.READ_FRAMEBUFFER,Ne.__webglFramebuffer),tt.bindFramebuffer(C.DRAW_FRAMEBUFFER,io.__webglFramebuffer);for(let ri=0;ri<xt;ri++)ue&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,dt.get(y).__webglTexture,U,Rt+ri),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,dt.get(D).__webglTexture,at,fe+ri)),C.blitFramebuffer(Ut,Ot,pt,bt,Wt,Qt,pt,bt,C.DEPTH_BUFFER_BIT,C.NEAREST);tt.bindFramebuffer(C.READ_FRAMEBUFFER,null),tt.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(U!==0||y.isRenderTargetTexture||dt.has(y)){let Ze=dt.get(y),Ce=dt.get(D);tt.bindFramebuffer(C.READ_FRAMEBUFFER,Jh),tt.bindFramebuffer(C.DRAW_FRAMEBUFFER,Kh);for(let Ne=0;Ne<xt;Ne++)ue?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ze.__webglTexture,U,Rt+Ne):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ze.__webglTexture,U),$e?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ce.__webglTexture,at,fe+Ne):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ce.__webglTexture,at),U!==0?C.blitFramebuffer(Ut,Ot,pt,bt,Wt,Qt,pt,bt,C.COLOR_BUFFER_BIT,C.NEAREST):$e?C.copyTexSubImage3D(he,at,Wt,Qt,fe+Ne,Ut,Ot,pt,bt):C.copyTexSubImage2D(he,at,Wt,Qt,Ut,Ot,pt,bt);tt.bindFramebuffer(C.READ_FRAMEBUFFER,null),tt.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else $e?y.isDataTexture||y.isData3DTexture?C.texSubImage3D(he,at,Wt,Qt,fe,pt,bt,xt,ne,Dt,ae.data):D.isCompressedArrayTexture?C.compressedTexSubImage3D(he,at,Wt,Qt,fe,pt,bt,xt,ne,ae.data):C.texSubImage3D(he,at,Wt,Qt,fe,pt,bt,xt,ne,Dt,ae):y.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,at,Wt,Qt,pt,bt,ne,Dt,ae.data):y.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,at,Wt,Qt,ae.width,ae.height,ne,ae.data):C.texSubImage2D(C.TEXTURE_2D,at,Wt,Qt,pt,bt,ne,Dt,ae);C.pixelStorei(C.UNPACK_ROW_LENGTH,Zt),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Ve),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ei),C.pixelStorei(C.UNPACK_SKIP_ROWS,ke),C.pixelStorei(C.UNPACK_SKIP_IMAGES,os),at===0&&D.generateMipmaps&&C.generateMipmap(he),tt.unbindTexture()},this.initRenderTarget=function(y){dt.get(y).__webglFramebuffer===void 0&&Ft.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Ft.setTextureCube(y,0):y.isData3DTexture?Ft.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Ft.setTexture2DArray(y,0):Ft.setTexture2D(y,0),tt.unbindTexture()},this.resetState=function(){R=0,P=0,N=null,tt.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return on}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=$t._getDrawingBufferColorSpace(t),e.unpackColorSpace=$t._getUnpackColorSpace()}};var Th={type:"change"},wl={type:"start"},wh={type:"end"},Ja=new Xi,Eh=new Pe,Rg=Math.cos(70*il.DEG2RAD),ve=new w,Be=2*Math.PI,te={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},El=1e-6,Ka=class extends Bs{constructor(t,e=null){super(t,e),this.state=te.NONE,this.target=new w,this.cursor=new w,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Jn.ROTATE,MIDDLE:Jn.DOLLY,RIGHT:Jn.PAN},this.touches={ONE:Kn.ROTATE,TWO:Kn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new w,this._lastQuaternion=new je,this._lastTargetPosition=new w,this._quat=new je().setFromUnitVectors(t.up,new w(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Zi,this._sphericalDelta=new Zi,this._scale=1,this._panOffset=new w,this._rotateStart=new vt,this._rotateEnd=new vt,this._rotateDelta=new vt,this._panStart=new vt,this._panEnd=new vt,this._panDelta=new vt,this._dollyStart=new vt,this._dollyEnd=new vt,this._dollyDelta=new vt,this._dollyDirection=new w,this._mouse=new vt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Pg.bind(this),this._onPointerDown=Ig.bind(this),this._onPointerUp=Lg.bind(this),this._onContextMenu=zg.bind(this),this._onMouseWheel=Ng.bind(this),this._onKeyDown=Fg.bind(this),this._onTouchStart=Og.bind(this),this._onTouchMove=Bg.bind(this),this._onMouseDown=Dg.bind(this),this._onMouseMove=Ug.bind(this),this._interceptControlDown=Vg.bind(this),this._interceptControlUp=kg.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Th),this.update(),this.state=te.NONE}update(t=null){let e=this.object.position;ve.copy(e).sub(this.target),ve.applyQuaternion(this._quat),this._spherical.setFromVector3(ve),this.autoRotate&&this.state===te.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Be:n>Math.PI&&(n-=Be),s<-Math.PI?s+=Be:s>Math.PI&&(s-=Be),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(ve.setFromSpherical(this._spherical),ve.applyQuaternion(this._quatInverse),e.copy(this.target).add(ve),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=ve.length();a=this._clampDistance(o*this._scale);let c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let o=new w(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new w(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=ve.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Ja.origin.copy(this.object.position),Ja.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ja.direction))<Rg?this.object.lookAt(this.target):(Eh.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ja.intersectPlane(Eh,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>El||8*(1-this._lastQuaternion.dot(this.object.quaternion))>El||this._lastTargetPosition.distanceToSquared(this.target)>El?(this.dispatchEvent(Th),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Be/60*this.autoRotateSpeed*t:Be/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ve.setFromMatrixColumn(e,0),ve.multiplyScalar(-t),this._panOffset.add(ve)}_panUp(t,e){this.screenSpacePanning===!0?ve.setFromMatrixColumn(e,1):(ve.setFromMatrixColumn(e,0),ve.crossVectors(this.object.up,ve)),ve.multiplyScalar(t),this._panOffset.add(ve)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;ve.copy(s).sub(this.target);let r=ve.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Be*this._rotateDelta.x/e.clientHeight),this._rotateUp(Be*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Be*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Be*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Be*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Be*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Be*this._rotateDelta.x/e.clientHeight),this._rotateUp(Be*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new vt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Ig(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Pg(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Lg(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(wh),this.state=te.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Dg(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Jn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=te.DOLLY;break;case Jn.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=te.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=te.ROTATE}break;case Jn.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=te.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=te.PAN}break;default:this.state=te.NONE}this.state!==te.NONE&&this.dispatchEvent(wl)}function Ug(i){switch(this.state){case te.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case te.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case te.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Ng(i){this.enabled===!1||this.enableZoom===!1||this.state!==te.NONE||(i.preventDefault(),this.dispatchEvent(wl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(wh))}function Fg(i){this.enabled!==!1&&this._handleKeyDown(i)}function Og(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Kn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=te.TOUCH_ROTATE;break;case Kn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=te.TOUCH_PAN;break;default:this.state=te.NONE}break;case 2:switch(this.touches.TWO){case Kn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=te.TOUCH_DOLLY_PAN;break;case Kn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=te.TOUCH_DOLLY_ROTATE;break;default:this.state=te.NONE}break;default:this.state=te.NONE}this.state!==te.NONE&&this.dispatchEvent(wl)}function Bg(i){switch(this._trackPointer(i),this.state){case te.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case te.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case te.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case te.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=te.NONE}}function zg(i){this.enabled!==!1&&i.preventDefault()}function Vg(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function kg(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Ah=[];function F(i,t,e,n,s,r,a,o={}){Ah.push({id:i,zh:t,en:e,groups:n.split(""),models:s,position:r,note:a,representation:o.rep||"mesh",snap:o.snap??(o.rep||"mesh")==="mesh",quiz:o.quiz||null,via:o.via||[],extra:!!o.extra})}F("optic-papilla","\u8996\u4E73\u7A81\uFF0F\u8996\u795E\u7D93\u76E4","Optic papilla / optic disc","qvu",["Retina.l","Optic nerve (II).l"],[28.3,-46.2,54],"\u8996\u7DB2\u819C\u795E\u7D93\u7BC0\u7D30\u80DE\u8EF8\u7A81\u96C6\u4E2D\u96E2\u958B\u773C\u7403\u8655\u3002\u6C92\u6709 rods \u8207 cones\uFF0C\u6240\u4EE5\u662F\u751F\u7406\u6027\u76F2\u9EDE\uFF08\u4E2D\u592E\u51F9\u5247\u770B\u6700\u6E05\u695A\uFF09\u3002\u9871\u5167\u58D3\u5347\u9AD8\u6642\u53EF\u898B\u8996\u4E73\u982D\u6C34\u816B papilledema\u3002\u6A21\u578B\u4EE5\u8996\u795E\u7D93\u63A5\u4E0A\u8996\u7DB2\u819C\u5F8C\u6975\u7684\u4F4D\u7F6E\u6A19\u793A\u3002",{rep:"guide",snap:!0,quiz:1});F("dura","\u786C\u8166\u819C\uFF08\u8996\u795E\u7D93\u9798\uFF09","Dura mater (optic nerve sheath)","qv",["guide:on-sheath","Falx cerebri","Tentorium cerebelli"],[24,-44,45.5],"\u8003\u984C\u6307\u7684\u662F\u5305\u5728\u8996\u4E73\u7A81\u5F8C\u65B9\u8996\u795E\u7D93\u5916\u9762\u7684\u786C\u8166\u819C\uFF1A\u8996\u795E\u7D93\u662F\u4E2D\u6A1E\u795E\u7D93\u7684\u5EF6\u4F38\uFF0C\u5F9E\u8996\u795E\u7D93\u7BA1\u5230\u773C\u7403\u5F8C\u65B9\u90FD\u5305\u8457 dura\uFF0Farachnoid\uFF0Fpia\uFF0C\u86DB\u7DB2\u819C\u4E0B\u8154\u4E5F\u4E00\u8DEF\u5EF6\u4F38\u904E\u4F86\uFF0C\u6240\u4EE5\u9871\u5167\u58D3\u5347\u9AD8\u6703\u9020\u6210\u8996\u4E73\u982D\u6C34\u816B\u3002\u786C\u8166\u819C\u5728\u773C\u7403\u5F8C\u65B9\u8207\u978F\u819C\u76F8\u9023\u3001\u5728\u8996\u795E\u7D93\u7BA1\u8655\u8207\u9871\u5167\u786C\u8166\u819C\u5EF6\u7E8C\u3002\u6DE1\u7D2B\u8272\u534A\u900F\u660E\u7BA1\u70BA\u8996\u795E\u7D93\u9798\u793A\u610F\uFF08\u539F\u6A21\u578B\u6C92\u6709\uFF09\uFF1B\u9871\u5167\u7684\u5927\u8166\u942E\u3001\u5C0F\u8166\u5929\u5E55\u662F\u539F\u6A21\u578B\u7684\u786C\u8166\u819C\u53CD\u647A\uFF0C\u4E00\u4F75\u9AD8\u4EAE\u3002",{rep:"schematic",snap:!0,quiz:2});F("meyer","\u6885\u6C0F\u74B0\uFF08\u9873\u8449\u8996\u653E\u5C04\uFF09","Meyer\u2019s loop","qv",["guide:meyer"],[34,-31,3],"\u8996\u653E\u5C04\u4E0B\u90E8\u5148\u5411\u524D\u7E5E\u904E\u5074\u8166\u5BA4\u9873\u89D2\uFF0C\u518D\u5F80\u5F8C\u5230\u8DDD\u72C0\u6E9D\u4E0B\u5CB8\uFF08\u820C\u56DE\uFF09\uFF0C\u50B3\u905E\u5C0D\u5074\u4E0A\u65B9\u8996\u91CE\u3002\u5C0F\u8003\u7B2C 3 \u984C\u7B54\u6848\u662F Meyer\u2019s loop\uFF0C\u4E0D\u662F Baum\u2019s loop\u3002",{rep:"schematic",quiz:3});F("ora-serrata","\u92F8\u9F52\u7DE3","Ora serrata","qvk",["guide:ora"],[40,-49,68],"\u8996\u7DB2\u819C\u611F\u5149\u90E8\u7684\u524D\u7DE3\uFF0C\u8207\u776B\u72C0\u9AD4\u5E73\u5766\u90E8\u4EA4\u754C\u3002\u91D1\u8272\u74B0\u6CBF\u539F\u6A21\u578B\u8996\u7DB2\u819C\u524D\u7DE3\u756B\u51FA\uFF0C\u5BE6\u969B\u908A\u7DE3\u5448\u92F8\u9F52\u72C0\u3002",{rep:"schematic",quiz:4});F("gennari","Gennari \u7DDA","Line / stria of Gennari","qv",["Calcarine sulcus.l"],[8,-25,-75],"\u521D\u7D1A\u8996\u89BA\u76AE\u8CEA\uFF08V1\uFF0CBrodmann 17\uFF09\u7B2C IV \u5C64\u5167\u7684\u6709\u9AD3\u7E96\u7DAD\u5E36\uFF0C\u8089\u773C\u53EF\u898B\u7684\u767D\u7DDA\uFF0C\u6240\u4EE5 V1 \u53C8\u53EB\u7D0B\u72C0\u76AE\u8CEA\u3002\u5B83\u5728\u76AE\u8CEA\u88E1\u9762\uFF0C3D \u8868\u9762\u6C92\u6709\u7DB2\u683C\uFF1B\u6A19\u9EDE\u53EA\u63D0\u793A\u8DDD\u72C0\u6E9D\u5468\u570D\u7684 V1 \u5340\u3002",{rep:"reference",snap:!0,quiz:5});F("calcarine","\u8DDD\u72C0\u6E9D","Calcarine sulcus","qv",["Calcarine sulcus.l"],[6,-22,-67],"\u6795\u8449\u5167\u5074\u9762\u7684\u6E9D\uFF0C\u521D\u7D1A\u8996\u89BA\u76AE\u8CEA\u5206\u5E03\u5728\u5B83\u4E0A\u4E0B\u5169\u5CB8\u3002\u4E0A\u5CB8\u6954\u8449\u770B\u5C0D\u5074\u4E0B\u65B9\u8996\u91CE\uFF0C\u4E0B\u5CB8\u820C\u56DE\u770B\u5C0D\u5074\u4E0A\u65B9\u8996\u91CE\u3002",{quiz:6});F("chiasm","\u8996\u4EA4\u53C9","Optic chiasm","qv",["Optic chiasm"],[0,-28,17],"\u9F3B\u5074\u8996\u7DB2\u819C\u7E96\u7DAD\u4EA4\u53C9\uFF0C\u9873\u5074\u7E96\u7DAD\u4E0D\u4EA4\u53C9\u3002\u8996\u4EA4\u53C9\u4E4B\u5F8C\u6539\u7528\u300C\u5DE6\u53F3\u8996\u91CE\u300D\u601D\u8003\uFF1A\u5DE6\u8996\u675F\u8655\u7406\u96D9\u773C\u53F3\u5074\u8996\u91CE\u3002\u4F4D\u65BC\u8166\u4E0B\u5782\u9AD4\u6B63\u4E0A\u65B9\u3002",{quiz:7});F("nasolacrimal","\u9F3B\u6DDA\u7BA1","Nasolacrimal duct","q",["Nasolacrimal duct.l","Lacrimal sac.l"],[10,-75,64],"\u6DDA\u6DB2\uFF1A\u6DDA\u817A \u2192 \u6DDA\u5C0F\u7BA1 \u2192 \u6DDA\u56CA \u2192 \u9F3B\u6DDA\u7BA1 \u2192 \u958B\u53E3\u65BC\u4E0B\u9F3B\u9053\u3002\u7BA1\u9053\u8D70\u5728\u4E0A\u9837\u9AA8\u8207\u6DDA\u9AA8\u570D\u6210\u7684\u9AA8\u7BA1\u4E2D\u3002",{quiz:8});F("maxillary-sinus","\u4E0A\u9837\u7AC7","Maxillary sinus","qo",["Maxilla.l","guide:maxsinus"],[23,-73,59],"\u4E0A\u9837\u9AA8\u9AD4\u5167\u7684\u7A7A\u8154\uFF0C\u4F4D\u65BC\u773C\u7AA9\u5E95\u4E0B\u65B9\u3002\u773C\u90E8\u6B63\u9762\u649E\u64CA\u53EF\u9020\u6210\u773C\u7AA9\u5E95\u9AA8\u6298 blowout fracture\uFF0C\u773C\u7AA9\u5167\u5BB9\u7269\u6389\u5165\u4E0A\u9837\u7AC7\u3002\u539F\u6A21\u578B\u4E0A\u9837\u9AA8\u5167\u6709\u6B64\u7A7A\u8154\uFF1B\u85CD\u8272\u534A\u900F\u660E\u9AD4\u53EA\u6A19\u51FA\u7A7A\u8154\u4F4D\u7F6E\u3002",{rep:"guide",snap:!1,quiz:9});F("sphenoid-sinus","\u8776\u7AC7","Sphenoidal sinus","qc",["Sinus of sphenoid bone"],[6,-50,21],"\u8776\u9AA8\u9AD4\u5167\u7684\u7A7A\u8154\uFF0C\u6B63\u4E0A\u65B9\u662F\u8776\u978D\u8207\u8166\u4E0B\u5782\u9AD4\uFF0C\u6240\u4EE5\u8166\u4E0B\u5782\u9AD4\u624B\u8853\u53EF\u7D93\u9F3B\u8154 \u2192 \u8776\u7AC7 \u2192 \u8776\u978D\uFF08transsphenoidal approach\uFF09\u3002",{quiz:10});F("cribriform","\u7BE9\u677F\u7BE9\u5B54","Cribriform plate foramina","f",["Olfactory nerve (I)"],[5,-42,61],"CN I \u55C5\u795E\u7D93\u7D72\u7A7F\u904E\u7BE9\u9AA8\u7BE9\u677F\u3002\u53E3\u8A23\u300C\u4E00\u7BE9\u300D\u3002\u6A19\u9EDE\u4F4D\u65BC\u7BE9\u677F\u5340\uFF1B\u6A21\u578B\u672A\u9010\u4E00\u5EFA\u51FA\u6BCF\u500B\u5C0F\u5B54\u3002",{rep:"guide",snap:!1});F("optic-canal","\u8996\u795E\u7D93\u7BA1","Optic canal","fo",["Optic nerve (II)","Ophthalmic artery"],[12.5,-37.6,31.4],"\u901A\u904E\uFF1ACN II \u8996\u795E\u7D93\uFF0B\u773C\u52D5\u8108\uFF0B\u4F34\u96A8\u7684\u4EA4\u611F\u7E96\u7DAD\u3002\u53E3\u8A23\u300C\u4E8C\u8996\u300D\u3002\u4F4D\u7F6E\u53D6\u81EA\u539F\u6A21\u578B\u6A19\u8A18\u7DDA\u7AEF\u9EDE\u3002",{rep:"guide",snap:!1});F("sof","\u7736\u4E0A\u88C2","Superior orbital fissure","fo",["Oculomotor nerve (III)","Trochlear nerve (IV)","Ophthalmic nerve","Abducens nerve (VI)","Superior ophthalmic vein"],[17.1,-42.4,32.1],"III\u3001IV\u3001V1\u3001VI \u8207\u4E0A\u773C\u975C\u8108\u7D93\u6B64\u9032\u5165\u773C\u7AA9\u3002\u53E3\u8A23\u300C\u4E09\u56DB\u4E00\u516D\u7736\u4E0A\u88C2\u300D\u3002\u539F\u6A21\u578B\u6C92\u6709\u6B64\u88C2\u7684\u6A19\u8A18\u9EDE\uFF0C\u6A19\u9EDE\u53D6\u81EA\u9019\u56DB\u689D\u795E\u7D93\u5728\u9AA8\u8655\u4EA4\u6703\u7684\u4F4D\u7F6E\u3002",{rep:"guide",snap:!1});F("rotundum","\u5713\u5B54","Foramen rotundum","f",["Maxillary nerve"],[16.7,-48.5,25.5],"V2 \u4E0A\u9837\u795E\u7D93\u3002\u53E3\u8A23\u300C\u4E8C\u5713\u300D\u3002\u539F\u6A21\u578B\u7684 V2 \u8207\u6B64\u5B54\u76F8\u8DDD\u7D04 0.6 mm\u3002",{rep:"guide",snap:!1});F("ovale","\u5375\u5713\u5B54","Foramen ovale","f",["Trigeminal nerve (V)","Anterior division of mandibular nerve","Posterior division of mandibular nerve"],[24,-61.6,13.3],"V3 \u4E0B\u9837\u795E\u7D93\u3002\u53E3\u8A23\u300C\u4E09\u5375\u300D\u3002",{rep:"guide",snap:!1});F("spinosum","\u68D8\u5B54","Foramen spinosum","f",["Middle meningeal artery"],[29.2,-62.1,8.2],"\u4E2D\u8166\u819C\u52D5\u8108\uFF08\u4E0D\u662F\u8166\u795E\u7D93\uFF09\u3002\u4F4D\u65BC\u5375\u5713\u5B54\u5F8C\u5916\u5074\u3002",{rep:"guide",snap:!1});F("carotid-canal","\u9838\u52D5\u8108\u7BA1","Carotid canal","f",["Internal carotid artery"],[28,-78,-7],"\u5167\u9838\u52D5\u8108\u7531\u6B64\u9032\u5165\u9871\u5167\uFF0C\u4E4B\u5F8C\u8D70\u9032\u6D77\u7DBF\u7AC7\u3002\u6A19\u9EDE\u70BA\u9871\u5E95\u5916\u53E3\u9644\u8FD1\u7684\u8FD1\u4F3C\u4F4D\u7F6E\u3002",{rep:"guide",snap:!1});F("iam","\u5167\u8033\u9053","Internal acoustic meatus","f",["Facial nerve (VII)","Vestibulocochlear nerve (VIII)","Vestibular nerve","Cochlear nerve"],[19.5,-57.3,-5.5],"CN VII\uFF0BVIII \u5171\u540C\u9032\u5165\u3002\u53E3\u8A23\u300C\u4E03\u516B\u5167\u807D\u300D\u3002\u6A19\u9EDE\u53D6\u81EA\u5169\u689D\u795E\u7D93\u9032\u5165\u9873\u9AA8\u5CA9\u90E8\u8655\u3002",{rep:"guide",snap:!1});F("jugular","\u9838\u975C\u8108\u5B54","Jugular foramen","f",["Glossopharyngeal nerve (IX)","Vagus nerve (X)","Accessory nerve (XI)"],[26.8,-71.8,-11.2],"CN IX\u3001X\u3001XI \u5171\u540C\u8D70\u9838\u975C\u8108\u5B54\uFF08\u9084\u6709\u5167\u9838\u975C\u8108\uFF09\u3002\u53E3\u8A23\u300C\u4E5D\u5341\u5341\u4E00\u9838\u975C\u8108\u300D\u3002\u6A19\u9EDE\u53D6\u81EA\u4E09\u689D\u795E\u7D93\u5728\u9AA8\u8655\u4EA4\u6703\u7684\u4F4D\u7F6E\u3002",{rep:"guide",snap:!1});F("hypoglossal-canal","\u820C\u4E0B\u795E\u7D93\u7BA1","Hypoglossal canal","f",["Hypoglossal nerve (XII)"],[18.2,-76.9,-14.8],"CN XII\u3002\u53E3\u8A23\u300C\u5341\u4E8C\u820C\u4E0B\u300D\u3002\u4F4D\u65BC\u6795\u9AA8\u5927\u5B54\u524D\u5916\u5074\u3001\u6795\u9AC1\u4E0A\u65B9\u3002",{rep:"guide",snap:!1});F("magnum","\u6795\u9AA8\u5927\u5B54","Foramen magnum","f",["Medulla oblongata","Vertebral artery"],[.7,-83.9,-30.3],"\u5EF6\u8166\u8207\u810A\u9AD3\u4EA4\u754C\u3001\u690E\u52D5\u8108\u3001\u526F\u795E\u7D93\u810A\u9AD3\u6839\u901A\u904E\u3002",{rep:"guide",snap:!1});F("sella","\u8776\u978D\uFF08\u8166\u4E0B\u5782\u9AD4\u7AA9\uFF09","Sella turcica / hypophysial fossa","fc",["Adenohypophysis","Neurohypophysis"],[0,-46.5,15.6],"\u8776\u9AA8\u9AD4\u4E0A\u65B9\u7684\u978D\u5F62\u51F9\u7AA9\uFF0C\u5BB9\u7D0D\u8166\u4E0B\u5782\u9AD4\uFF1B\u4E0B\u9762\u662F\u8776\u7AC7\uFF0C\u5169\u5074\u662F\u6D77\u7DBF\u7AC7\u3002",{rep:"guide",snap:!1});var De=(...i)=>({via:i});F("cn1","CN I \u55C5\u795E\u7D93","Olfactory nerve (CN I)","n",["Olfactory nerve (I).l"],[11.6,-34.8,43.6],"\u55C5\u7403\uFF0B\u55C5\u675F\u4F4D\u65BC\u984D\u8449\u5E95\u9762\u3002",De("cribriform"));F("cn2","CN II \u8996\u795E\u7D93","Optic nerve (CN II)","n",["Optic nerve (II).l"],[15,-38.8,40],"CN II \u662F\u4E2D\u6A1E\u795E\u7D93\u5EF6\u4F38\uFF0C\u5916\u6709\u4E09\u5C64\u8166\u819C\u3002\u56DB\u6BB5\uFF1A\u773C\u7403\u5167\u6BB5\uFF08\u6700\u77ED\uFF0C\u7BE9\u677F\u524D\u7121\u9AD3\u9798\uFF09\u2192 \u773C\u7AA9\u6BB5\uFF08\u6700\u9577\uFF0CS \u5F62\uFF09\u2192 \u8996\u795E\u7D93\u7BA1\u6BB5 \u2192 \u9871\u5167\u6BB5\uFF08\u5230\u8996\u4EA4\u53C9\uFF09\u3002",De("optic-canal"));F("cn3","CN III \u52D5\u773C\u795E\u7D93","Oculomotor nerve (CN III)","ng",["Oculomotor nerve (III).l"],[6.7,-33.1,6.5],"\u5F9E\u4E2D\u8166\u8179\u5074\u3001\u8173\u9593\u7AA9\u767C\u51FA\u3002\u652F\u914D\u4E0A\u76F4\u808C\u3001\u4E0B\u76F4\u808C\u3001\u5167\u76F4\u808C\u3001\u4E0B\u659C\u808C\u3001\u63D0\u4E0A\u77BC\u808C\uFF1B\u526F\u4EA4\u611F\u7E96\u7DAD\u5230\u776B\u72C0\u795E\u7D93\u7BC0\u3002\u5728\u5171\u540C\u8171\u74B0\u5167\u5206\u6210\u4E0A\u652F\u3001\u4E0B\u652F\u3002",De("sof"));F("cn4","CN IV \u6ED1\u8ECA\u795E\u7D93","Trochlear nerve (CN IV)","n",["Trochlear nerve (IV).l"],[8.4,-43.1,-15.3],"\u552F\u4E00\u5F9E\u8166\u5E79\u80CC\u5074\u767C\u51FA\u7684\u8166\u795E\u7D93\uFF0C\u7E5E\u4E2D\u8166\u5411\u524D\u3002\u53EA\u652F\u914D\u4E0A\u659C\u808C\uFF08SO4\uFF09\uFF0C\u8D70\u5171\u540C\u8171\u74B0\u5916\u3002",De("sof"));F("cn5","CN V \u4E09\u53C9\u795E\u7D93","Trigeminal nerve (CN V)","n",["Trigeminal nerve (V).l","Sensory root of trigeminal nerve.l","Motor root of trigeminal nerve.l"],[11.9,-49.8,-12.3],"\u5F9E\u6A4B\u8166\u5916\u5074\u51FA\u4F86\uFF0C\u5F88\u7C97\uFF1A\u5927\u7684\u611F\u89BA\u6839\uFF0B\u5C0F\u7684\u904B\u52D5\u6839\uFF0C\u4E4B\u5F8C\u5206 V1\u3001V2\u3001V3\u3002",De("sof","rotundum","ovale"));F("v1","V1 \u773C\u795E\u7D93","Ophthalmic nerve (V1)","n",["Ophthalmic nerve.l"],[20.6,-39.4,32.3],"\u7D14\u611F\u89BA\u3002\u7D93\u7736\u4E0A\u88C2\u5165\u773C\u7AA9\u5F8C\u5206\u6210\u984D\u795E\u7D93\u3001\u6DDA\u795E\u7D93\u3001\u9F3B\u776B\u795E\u7D93\u3002\u539F\u6A21\u578B\u628A\u984D\u795E\u7D93 \u2192 \u7736\u4E0A\uFF0F\u6ED1\u8ECA\u4E0A\u795E\u7D93\u756B\u5728\u540C\u4E00\u689D\u66F2\u7DDA\u4E0A\u3002",De("sof"));F("v2","V2 \u4E0A\u9837\u795E\u7D93","Maxillary nerve (V2)","n",["Maxillary nerve.l"],[17.4,-49.7,22.4],"\u7D14\u611F\u89BA\u3002\u7A7F\u5713\u5B54\uFF0C\u7D93\u7FFC\u816D\u7AA9\u3001\u7736\u4E0B\u88C2\uFF0C\u5EF6\u7E8C\u70BA\u7736\u4E0B\u795E\u7D93\u3002",De("rotundum"));F("v3","V3 \u4E0B\u9837\u795E\u7D93","Mandibular nerve (V3)","n",["Anterior division of mandibular nerve.l","Posterior division of mandibular nerve.l","Inferior alveolar nerve.l","Lingual nerve.l"],[26.4,-69.5,18.5],"\u611F\u89BA\uFF0B\u904B\u52D5\uFF08\u5480\u56BC\u808C\uFF09\u3002\u7A7F\u5375\u5713\u5B54\uFF0C\u4E0B\u7259\u69FD\u795E\u7D93\u3001\u820C\u795E\u7D93\u7B49\u70BA\u5176\u5206\u652F\u3002",De("ovale"));F("cn6","CN VI \u5916\u65CB\u795E\u7D93","Abducens nerve (CN VI)","n",["Abducens nerve (VI).l"],[4.4,-64.3,-3.2],"\u6A4B\u5EF6\u4EA4\u754C\u9760\u8FD1\u4E2D\u7DDA\u767C\u51FA\u3002\u53EA\u652F\u914D\u5916\u76F4\u808C\uFF08LR6\uFF09\u3002\u5728\u6D77\u7DBF\u7AC7\u300C\u8154\u5167\u300D\u7DCA\u8CBC\u5167\u9838\u52D5\u8108\uFF0C\u75C5\u8B8A\u6642\u5E38\u6700\u5148\u53D7\u5F71\u97FF \u2192 \u773C\u7403\u7121\u6CD5\u5916\u8F49\u3002",De("sof"));F("cn7","CN VII \u984F\u9762\u795E\u7D93","Facial nerve (CN VII)","n",["Facial nerve (VII).l"],[12,-60,-11],"\u5C0F\u8166\u6A4B\u8166\u89D2\uFF0C\u8207 VIII \u5F88\u9760\u8FD1\uFF0C\u4E00\u8D77\u9032\u5167\u8033\u9053\uFF1B\u51FA\u9871\u7D93\u8396\u4E73\u5B54\u3002",De("iam"));F("cn8","CN VIII \u524D\u5EAD\u8033\u8778\u795E\u7D93","Vestibulocochlear nerve (CN VIII)","n",["Vestibulocochlear nerve (VIII).l","Vestibular nerve.l","Cochlear nerve.l"],[14.4,-60.7,-10.4],"\u5C0F\u8166\u6A4B\u8166\u89D2\uFF0C\u8207 VII \u5171\u540C\u9032\u5167\u8033\u9053\u3002",De("iam"));F("cn9","CN IX \u820C\u54BD\u795E\u7D93","Glossopharyngeal nerve (CN IX)","n",["Glossopharyngeal nerve (IX).l"],[12,-66,-14],"\u5EF6\u8166\u6A44\u6B16\u5F8C\u6E9D\u767C\u51FA\uFF0C\u8D70\u9838\u975C\u8108\u5B54\u3002",De("jugular"));F("cn10","CN X \u8FF7\u8D70\u795E\u7D93","Vagus nerve (CN X)","n",["Vagus nerve (X).l"],[11,-70,-17],"\u5EF6\u8166\u6A44\u6B16\u5F8C\u6E9D\u767C\u51FA\uFF0C\u8D70\u9838\u975C\u8108\u5B54\u3002",De("jugular"));F("cn11","CN XI \u526F\u795E\u7D93","Accessory nerve (CN XI)","n",["Accessory nerve (XI).l"],[12,-80,-22],"\u6A44\u6B16\u5F8C\u6E9D\u9644\u8FD1\u53CA\u4E0A\u9838\u9AD3\u767C\u51FA\uFF0C\u8D70\u9838\u975C\u8108\u5B54\u3002",De("jugular"));F("cn12","CN XII \u820C\u4E0B\u795E\u7D93","Hypoglossal nerve (CN XII)","n",["Hypoglossal nerve (XII).l"],[6,-74,-10],"\u5EF6\u8166\u6A44\u6B16\u524D\u6E9D\u767C\u51FA\uFF0C\u8D70\u820C\u4E0B\u795E\u7D93\u7BA1\u3002",De("hypoglossal-canal"));F("annulus","\u5171\u540C\u8171\u74B0\uFF08Zinn \u74B0\uFF09","Common tendinous ring (annulus of Zinn)","o",["Common tendinous ring.l"],[16.3,-40.3,34],"\u56DB\u689D\u76F4\u808C\u7684\u5171\u540C\u8D77\u9EDE\u3002\u8171\u74B0\u5167\uFF1AIII \u4E0A\u652F\u3001III \u4E0B\u652F\u3001\u9F3B\u776B\u795E\u7D93\u3001VI\uFF08\u4EE5\u53CA II \u8207\u773C\u52D5\u8108\uFF09\u3002\u8171\u74B0\u5916\uFF1AIV\u3001\u984D\u795E\u7D93\u3001\u6DDA\u795E\u7D93\u3001\u4E0A\u773C\u975C\u8108\u3002\u6309\u300C\u7736\u5C16\u6B63\u9762\u300D\u53EF\u6CBF\u7736\u8EF8\u76F4\u63A5\u770B\u3002\u539F\u6A21\u578B\u7684\u8171\u74B0\u53EA\u6709\u7D04 5 mm \u5BEC\uFF0CIV\u3001\u984D\u795E\u7D93\u3001\u4E0A\u773C\u975C\u8108\u5361\u5728\u74B0\u58C1\u4E0A\u770B\u4F3C\u7A7F\u904E\u74B0\u5167\uFF1B\u672C\u9801\u5DF2\u628A\u74B0\u5728\u5176\u5E73\u9762\u4E0A\u653E\u5927 1.5 \u500D\uFF0C\u4E26\u53EA\u5728\u7736\u5C16\u9644\u8FD1\u628A\u9019\u4E09\u8005\u79FB\u5230\u74B0\u5916\u4E0A\u65B9\u3001\u628A VI \u79FB\u9032\u74B0\u5167\uFF08\u6559\u5B78\u6821\u6B63\uFF09\u3002");F("sr","\u4E0A\u76F4\u808C","Superior rectus","o",["Superior rectus muscle.l"],[25.4,-36.5,55],"CN III \u4E0A\u652F\u652F\u914D\u3002");F("lps","\u63D0\u4E0A\u77BC\u808C","Levator palpebrae superioris","o",["Levator palpebrae superioris.l"],[28,-32,62],"CN III \u4E0A\u652F\u652F\u914D\uFF08\u53E6\u6709\u4EA4\u611F\u652F\u914D\u7684 M\xFCller \u808C\uFF09\u3002");F("ir","\u4E0B\u76F4\u808C","Inferior rectus","o",["Inferior rectus muscle.l"],[24.5,-55,52],"CN III \u4E0B\u652F\u652F\u914D\u3002");F("mr","\u5167\u76F4\u808C","Medial rectus","o",["Medial rectus muscle.l"],[16,-46.8,53],"CN III \u4E0B\u652F\u652F\u914D\uFF1B\u96D9\u5074\u6536\u7E2E\u4F7F\u773C\u7403\u6703\u805A\u3002");F("lr","\u5916\u76F4\u808C","Lateral rectus","o",["Lateral rectus muscle.l"],[38,-46,52],"CN VI \u652F\u914D\uFF08LR6\uFF09\u3002");F("so","\u4E0A\u659C\u808C\uFF0B\u6ED1\u8ECA","Superior oblique + trochlea","o",["Superior oblique muscle.l","Trochlea of superior oblique muscle.l"],[14.6,-33,75],"CN IV \u652F\u914D\uFF08SO4\uFF09\u3002\u808C\u8171\u7E5E\u904E\u984D\u9AA8\u4E0A\u7684\u6ED1\u8ECA\u518D\u8F49\u5411\u5F8C\u5916\u9644\u8457\u65BC\u773C\u7403\u3002");F("io","\u4E0B\u659C\u808C","Inferior oblique","o",["Inferior oblique muscle.l"],[30,-60,66],"CN III \u4E0B\u652F\u652F\u914D\uFF1B\u552F\u4E00\u4E0D\u5F9E\u773C\u7AA9\u5F8C\u65B9\u8D77\u59CB\u7684\u773C\u5916\u808C\u3002");F("orb-4","IV \u6ED1\u8ECA\u795E\u7D93 \u2192 \u4E0A\u659C\u808C","CN IV entering superior oblique","o",["Trochlear nerve (IV).l"],[28.1,-33.9,54.5],"\u8D70\u5171\u540C\u8171\u74B0\u5916\uFF0C\u9032\u5165\u4E0A\u659C\u808C\u4E0A\u7DE3\u3002\u770B\u795E\u7D93\u6700\u5F8C\u9032\u54EA\u689D\u808C\u8089\uFF1A\u53BB\u4E0A\u659C\u808C \u2192 IV\u3002",{rep:"guide",snap:!0,via:["sof"]});F("orb-6","VI \u5916\u65CB\u795E\u7D93 \u2192 \u5916\u76F4\u808C","CN VI entering lateral rectus","o",["Abducens nerve (VI).l"],[29.3,-40.7,43.9],"\u8D70\u5171\u540C\u8171\u74B0\u5167\uFF0C\u9032\u5165\u5916\u76F4\u808C\u5167\u9762\u3002\u53BB\u5916\u76F4\u808C \u2192 VI\u3002",{rep:"guide",snap:!0,via:["sof"]});F("orb-v1","V1 \u773C\u795E\u7D93\uFF08\u5165\u7736\u524D\uFF09","Ophthalmic nerve before branching","o",["Ophthalmic nerve.l"],[16.6,-42.4,23.2],"V1 \u5728\u7736\u4E0A\u88C2\u524D\u5206\u6210\u984D\u3001\u6DDA\u3001\u9F3B\u776B\u4E09\u652F\u3002",{rep:"guide",snap:!0,via:["sof"]});F("cn3-sup","CN III \u4E0A\u652F","Superior division of CN III","o",["Oculomotor nerve (III).l"],[24.2,-34.4,56.6],"\u8D70\u5171\u540C\u8171\u74B0\u5167\uFF0C\u5230\u4E0A\u76F4\u808C\u8207\u63D0\u4E0A\u77BC\u808C\u3002",{rep:"guide",snap:!0,via:["sof"]});F("cn3-inf","CN III \u4E0B\u652F","Inferior division of CN III","og",["Oculomotor nerve (III).l"],[27.2,-54.7,46.5],"\u8D70\u5171\u540C\u8171\u74B0\u5167\uFF0C\u5230\u5167\u76F4\u808C\u3001\u4E0B\u76F4\u808C\u3001\u4E0B\u659C\u808C\uFF0C\u4E26\u9001\u526F\u4EA4\u611F\u7E96\u7DAD\u5230\u776B\u72C0\u795E\u7D93\u7BC0\u3002",{rep:"guide",snap:!0,via:["sof"]});F("frontal-n","\u984D\u795E\u7D93\uFF08V1\uFF09","Frontal nerve (V1)","o",["Ophthalmic nerve.l"],[23.1,-32.3,46.7],"V1 \u6700\u4E0A\u65B9\u7684\u5206\u652F\uFF0C\u8D70\u5171\u540C\u8171\u74B0\u5916\u3001\u63D0\u4E0A\u77BC\u808C\u4E0A\u65B9\uFF0C\u5F80\u524D\u5206\u70BA\u7736\u4E0A\u795E\u7D93\u8207\u6ED1\u8ECA\u4E0A\u795E\u7D93\u5230\u984D\u982D\uFF08\u539F\u6A21\u578B\u7684 V1 \u66F2\u7DDA\u4E00\u8DEF\u756B\u5230\u984D\u982D\uFF0C\u672B\u7AEF\u5206\u652F\u5373\u7736\u4E0A\uFF0F\u6ED1\u8ECA\u4E0A\u795E\u7D93\uFF09\u3002",{rep:"guide",snap:!0});F("lacrimal-n","\u6DDA\u795E\u7D93\uFF08V1\uFF09","Lacrimal nerve (V1)","o",["guide:lacrimal-n"],[33,-38.2,50],"V1 \u5206\u652F\uFF0C\u8D70\u5171\u540C\u8171\u74B0\u5916\uFF0C\u6CBF\u5916\u76F4\u808C\u4E0A\u7DE3\u5230\u6DDA\u817A\u3002\u539F\u6A21\u578B\u6C92\u6709\u6B64\u795E\u7D93\uFF0C\u7C89\u8272\u7D30\u7DDA\u70BA\u8D70\u5411\u793A\u610F\u3002",{rep:"schematic"});F("nasociliary","\u9F3B\u776B\u795E\u7D93\uFF08V1\uFF09","Nasociliary nerve (V1)","og",["guide:nasociliary"],[17.8,-38.8,42],"V1 \u4F4D\u7F6E\u8F03\u6DF1\u7684\u5206\u652F\uFF0C\u552F\u4E00\u7A7F\u904E\u5171\u540C\u8171\u74B0\uFF1B\u8DE8\u904E\u8996\u795E\u7D93\u5230\u773C\u7AA9\u5167\u5074\u3002\u767C\u51FA\u776B\u72C0\u795E\u7D93\u7BC0\u611F\u89BA\u6839\u53CA\u9577\u776B\u72C0\u795E\u7D93\u3002\u539F\u6A21\u578B\u6C92\u6709\u6B64\u795E\u7D93\uFF0C\u70BA\u8D70\u5411\u793A\u610F\u3002",{rep:"schematic"});F("lacrimal-gland","\u6DDA\u817A","Lacrimal gland","o",["Lacrimal gland.l"],[45,-35,66],"\u4F4D\u65BC\u773C\u7AA9\u5916\u4E0A\u65B9\u3002\u6A21\u578B\u4E0A\u627E\u5230\u6DDA\u817A\uFF0C\u5C31\u80FD\u5224\u65B7\u54EA\u908A\u662F lateral\u3002");F("sov","\u4E0A\u773C\u975C\u8108","Superior ophthalmic vein","oe",["Superior ophthalmic vein.l"],[19.5,-38,40],"\u8D70\u5171\u540C\u8171\u74B0\u5916\u3001\u7D93\u7736\u4E0A\u88C2\uFF0C\u532F\u5165\u6D77\u7DBF\u7AC7\u3002");F("ophthalmic-a","\u773C\u52D5\u8108","Ophthalmic artery","oew",["Ophthalmic artery.l"],[17,-40,45],"\u5167\u9838\u52D5\u8108\u5206\u652F\uFF0C\u8207\u8996\u795E\u7D93\u4E00\u8D77\u8D70\u8996\u795E\u7D93\u7BA1\uFF08\u4EA4\u611F\u7E96\u7DAD\u4F34\u884C\uFF09\u3002");F("lamina","\u7BE9\u9AA8\u7D19\u677F\uFF0F\u7BE9\u7AC7","Lamina papyracea / ethmoidal cells","o",["Ethmoid bone"],[12,-46,48],"\u773C\u7AA9\u5167\u5074\u58C1\u975E\u5E38\u8584\uFF0C\u65C1\u908A\u5C31\u662F\u7BE9\u7AC7\uFF0C\u4E5F\u662F\u773C\u7AA9\u5BB9\u6613\u9AA8\u6298\u7684\u5730\u65B9\u3002",{rep:"guide",snap:!1});F("cavernous","\u6D77\u7DBF\u7AC7","Cavernous sinus","ce",["Cavernous sinus.l"],[8,-40,20],"\u4F4D\u65BC\u8776\u978D\u5169\u5074\u3002\u5916\u5074\u58C1\u7531\u4E0A\u5230\u4E0B\uFF1AIII \u2192 IV \u2192 V1 \u2192 V2\uFF083-4-1-2\uFF09\u3002\u8154\u5167\uFF1A\u5167\u9838\u52D5\u8108\uFF0BCN VI\uFF0B\u4EA4\u611F\u795E\u7D93\u53E2\u3002\u5EFA\u8B70\u628A\u900F\u660E\u5EA6\u8ABF\u4F4E\uFF0C\u5F9E\u524D\u65B9\u6216\u4E0A\u65B9\u770B\u795E\u7D93\u5728\u58C1\u4E2D\u7684\u6392\u5217\u3002");F("ica","\u5167\u9838\u52D5\u8108","Internal carotid artery","cfw",["Internal carotid artery.l"],[14.4,-56.7,20],"\u7D93\u9838\u52D5\u8108\u7BA1\u5165\u9871\uFF0C\u5728\u6D77\u7DBF\u7AC7\u8154\u5167\u5448\u5F4E\u66F2\uFF08carotid siphon\uFF09\uFF0C\u65C1\u908A\u7DCA\u8CBC CN VI\u3002\u672C\u6A21\u578B\u7684 ICA \u5728\u5207\u9762\u8655\u7565\u4F4E\u65BC\u6D77\u7DBF\u7AC7\u3002",{snap:!0});F("pituitary","\u8166\u4E0B\u5782\u9AD4","Pituitary gland","c",["Adenohypophysis","Neurohypophysis"],[3,-38,19],"\u4F4D\u5728\u8776\u978D\uFF0C\u4E0A\u65B9\u662F\u8996\u4EA4\u53C9\uFF0C\u4E0B\u65B9\u662F\u8776\u7AC7\uFF0C\u5169\u5074\u662F\u6D77\u7DBF\u7AC7\u3002\u816B\u7624\u5411\u4E0A\u58D3\u8FEB\u8996\u4EA4\u53C9 \u2192 \u96D9\u9873\u5074\u504F\u76F2\u3002");F("transsphenoidal","\u7D93\u8776\u7AC7\u624B\u8853\u8DEF\u5F91","Transsphenoidal approach","c",["guide:transsphenoidal"],[0,-44,20],"\u9F3B\u8154 \u2192 \u8776\u7AC7 \u2192 \u8776\u978D \u2192 \u8166\u4E0B\u5782\u9AD4\u3002\u7DA0\u8272\u7BAD\u7DDA\u662F\u8DEF\u5F91\u793A\u610F\u3002",{rep:"schematic",snap:!0});F("ciliary-ganglion","\u776B\u72C0\u795E\u7D93\u7BC0","Ciliary ganglion","g",["guide:ganglion"],[22.5,-43,40.5],"\u4F4D\u65BC\u773C\u7AA9\u6DF1\u90E8\u3001\u8996\u795E\u7D93\u5916\u5074\u3002\u4E09\u7A2E\u6839\uFF1A\u526F\u4EA4\u611F\uFF08CN III \u4E0B\u652F\uFF0C\u552F\u4E00\u5728\u6B64\u7A81\u89F8\uFF09\u3001\u611F\u89BA\uFF08\u9F3B\u776B\u795E\u7D93\uFF0C\u4E0D\u7A81\u89F8\uFF09\u3001\u4EA4\u611F\uFF08\u5167\u9838\u52D5\u8108\u795E\u7D93\u53E2\uFF0C\u4E0D\u7A81\u89F8\uFF09\u3002\u539F\u6A21\u578B\u6C92\u6709\u6B64\u69CB\u9020\uFF1B\u5C0F\u7403\u53EA\u793A\u610F\u4F4D\u7F6E\u3002",{rep:"schematic"});F("para-root","\u526F\u4EA4\u611F\u6839","Parasympathetic (motor) root","g",["guide:root-para"],[25,-48,43],"EW \u6838 \u2192 CN III \u2192 \u4E0B\u652F \u2192 \u776B\u72C0\u795E\u7D93\u7BC0\u7A81\u89F8 \u2192 \u77ED\u776B\u72C0\u795E\u7D93 \u2192 \u77B3\u5B54\u62EC\u7D04\u808C\uFF0B\u776B\u72C0\u808C\uFF1A\u7E2E\u77B3\uFF0B\u8ABF\u7BC0\u3002",{rep:"schematic"});F("sensory-root","\u611F\u89BA\u6839","Sensory root (from nasociliary)","g",["guide:root-sens"],[19.8,-40.5,39],"\u7531\u9F3B\u776B\u795E\u7D93\u4F86\uFF0C\u7A7F\u904E\u795E\u7D93\u7BC0\u4F46\u4E0D\u7A81\u89F8\u3002",{rep:"schematic"});F("symp-root","\u4EA4\u611F\u6839","Sympathetic root","g",["guide:root-symp"],[17.5,-42.5,38],"\u4F86\u81EA\u5167\u9838\u52D5\u8108\u4EA4\u611F\u795E\u7D93\u53E2\uFF08\u6CBF\u773C\u52D5\u8108\u9032\u773C\u7AA9\uFF09\uFF0C\u7A7F\u904E\u795E\u7D93\u7BC0\u4F46\u4E0D\u7A81\u89F8\uFF1B\u5230\u77B3\u5B54\u958B\u5927\u808C\u3002",{rep:"schematic"});F("short-ciliary","\u77ED\u776B\u72C0\u795E\u7D93","Short ciliary nerves","g",["guide:short-ciliary"],[26,-44,48],"\u5F9E\u776B\u72C0\u795E\u7D93\u7BC0\u51FA\u53BB\uFF0C\u53EF\u651C\u5E36\u526F\u4EA4\u611F\u3001\u4EA4\u611F\u3001\u611F\u89BA\u4E09\u7A2E\u7E96\u7DAD\u3002\u4E00\u79D2\u5224\u65B7\uFF1A\u5F9E\u795E\u7D93\u7BC0\u51FA\u53BB \u2192 \u77ED\u776B\u72C0\u3002",{rep:"schematic"});F("long-ciliary","\u9577\u776B\u72C0\u795E\u7D93","Long ciliary nerves","g",["guide:long-ciliary"],[22,-40,48],"\u76F4\u63A5\u7531\u9F3B\u776B\u795E\u7D93\u4F86\uFF0C\u7E5E\u904E\u776B\u72C0\u795E\u7D93\u7BC0\uFF0C\u4E3B\u8981\u5E36\u611F\u89BA\uFF0B\u4EA4\u611F\u3002",{rep:"schematic"});F("sphincter","\u77B3\u5B54\u62EC\u7D04\u808C","Sphincter pupillae","g",["guide:sphincter"],[31,-47,74],"\u77ED\u776B\u72C0\u795E\u7D93\u7684\u526F\u4EA4\u611F\u7E96\u7DAD\u652F\u914D\uFF1B\u6536\u7E2E \u2192 \u7E2E\u77B3\u3002\u74B0\u5F62\u53EA\u793A\u610F\u4F4D\u7F6E\u3002",{rep:"schematic"});F("ciliary-muscle","\u776B\u72C0\u808C","Ciliary muscle","g",["guide:ciliary"],[36,-49,69],"\u6536\u7E2E \u2192 \u61F8\u97CC\u5E36\u653E\u9B06 \u2192 \u6C34\u6676\u9AD4\u8B8A\u539A\uFF08\u8ABF\u7BC0\uFF09\u3002\u74B0\u5F62\u53EA\u793A\u610F\u4F4D\u7F6E\u3002",{rep:"schematic"});F("lens","\u6C34\u6676\u9AD4","Lens","gv",["Lens.l"],[31,-49,71.3],"\u7121\u8840\u7BA1\uFF0C\u9760\u623F\u6C34\u4F9B\u61C9\u71DF\u990A\uFF1B\u524D\u9762\u8F03\u5E73\u3001\u5F8C\u9762\u8F03\u51F8\u3002\u4E0A\u76AE\u53EA\u5728\u524D\u56CA\u5167\u5074\u3002\u767D\u5167\u969C\u8853\u5F8C\u6B98\u7559\u4E0A\u76AE\u79FB\u884C\u5230\u5F8C\u56CA \u2192 \u5F8C\u56CA\u6DF7\u6FC1 PCO\uFF08\u4E8C\u6B21\u767D\u5167\u969C\uFF09\u3002");F("ew","EW \u6838\uFF08\u52D5\u773C\u795E\u7D93\u526F\u6838\uFF09","Edinger\u2013Westphal nucleus","g",["Accessory nucleus of oculomotor nerve.l"],[.8,-31.2,-8.9],"\u526F\u4EA4\u611F\u7BC0\u524D\u795E\u7D93\u5143\u6240\u5728\uFF1B\u63A5\u6536\u5169\u5074\u9802\u84CB\u524D\u5340 \u2192 \u6240\u4EE5\u7167\u4E00\u773C\u5169\u773C\u90FD\u7E2E\u77B3\uFF08\u76F4\u63A5\uFF0B\u9593\u63A5\u53CD\u61C9\uFF09\u3002");F("nucleus3","\u52D5\u773C\u795E\u7D93\u6838","Oculomotor nucleus","g",["Nucleus of oculomotor nerve.l"],[2,-34.4,-9.3],"\u4E0A\u4E18\u5C64\u6B21\u53EF\u898B CN III \u6838\u8207 EW \u6838\u3002\u300C\u4E0A\u4E18\u4E09\u300D\u3002");F("nucleus4","\u6ED1\u8ECA\u795E\u7D93\u6838","Trochlear nucleus","g",["Nucleus of trochlear nerve.l"],[1.3,-40.3,-9.6],"\u4E0B\u4E18\u5C64\u6B21\u53EF\u898B CN IV \u6838\u3002\u300C\u4E0B\u4E18\u56DB\u300D\u3002");F("sc","\u4E0A\u4E18","Superior colliculus","gv",["Superior colliculus.l"],[8.7,-27.5,-16.6],"\u4E2D\u8166\u56DB\u758A\u9AD4\u4E0A\u5C0D\uFF0C\u4E3B\u8981\u8CA0\u8CAC\u8996\u89BA\u53CD\u5C04\u3002");F("ic","\u4E0B\u4E18","Inferior colliculus","g",["Inferior colliculus.l"],[7.3,-31.7,-16.2],"\u4E2D\u8166\u56DB\u758A\u9AD4\u4E0B\u5C0D\uFF0C\u4E3B\u8981\u8207\u807D\u89BA\u8DEF\u5F91\uFF0F\u53CD\u5C04\u76F8\u95DC\u3002");F("pretectal","\u9802\u84CB\u524D\u5340","Pretectal area","g",["guide:pretectal"],[5,-25,-11],"\u77B3\u5B54\u5C0D\u5149\u53CD\u5C04\u4E2D\u6A1E\uFF1A\u8996\u7DB2\u819C \u2192 CN II \u2192 \u9802\u84CB\u524D\u5340 \u2192 \u5169\u5074 EW \u6838 \u2192 CN III \u2192 \u776B\u72C0\u795E\u7D93\u7BC0 \u2192 \u77ED\u776B\u72C0\u795E\u7D93 \u2192 \u77B3\u5B54\u62EC\u7D04\u808C\u3002\u539F\u6A21\u578B\u7121\u6B64\u5340\u7DB2\u683C\uFF0C\u5C0F\u7403\u793A\u610F\u5728\u4E0A\u4E18\u524D\u65B9\u3002",{rep:"schematic"});F("retina","\u8996\u7DB2\u819C","Retina","vu",["Retina.l"],[40,-52,60],"\u5F71\u50CF\u4E0A\u4E0B\u5DE6\u53F3\u90FD\u5012\u7F6E\uFF1B\u4E0B\u534A\u90E8\u8996\u7DB2\u819C\u5C0D\u61C9\u4E0A\u65B9\u8996\u91CE\u3002");F("on-intraocular","\u8996\u795E\u7D93\uFF1A\u773C\u7403\u5167\u6BB5","Optic nerve \u2014 intraocular part","v",["Optic nerve (II).l"],[28.8,-46.3,55],"\u6700\u77ED\uFF08\u7D04 1 mm\uFF09\uFF1B\u7BE9\u677F\u524D\u7121\u9AD3\u9798\u3002",{rep:"guide",snap:!0});F("on-orbital","\u8996\u795E\u7D93\uFF1A\u773C\u7AA9\u6BB5","Optic nerve \u2014 intraorbital part","v",["Optic nerve (II).l"],[22,-43,43],"\u6700\u9577\uFF0C\u5448 S \u5F62\uFF0C\u8B93\u773C\u7403\u8F49\u52D5\u6642\u4E0D\u88AB\u62C9\u626F\u3002",{rep:"guide",snap:!0});F("on-canal","\u8996\u795E\u7D93\uFF1A\u8996\u795E\u7D93\u7BA1\u6BB5","Optic nerve \u2014 intracanalicular part","v",["Optic nerve (II).l"],[12.5,-37.6,31.4],"\u901A\u904E\u8996\u795E\u7D93\u7BA1\uFF0C\u8207\u773C\u52D5\u8108\u540C\u884C\u3002",{rep:"guide",snap:!0});F("on-cranial","\u8996\u795E\u7D93\uFF1A\u9871\u5167\u6BB5","Optic nerve \u2014 intracranial part","v",["Optic nerve (II).l"],[7,-33.5,24],"\u8996\u795E\u7D93\u7BA1 \u2192 \u8996\u4EA4\u53C9\u3002",{rep:"guide",snap:!0});F("optic-tract","\u8996\u675F","Optic tract","v",["Optic tract.l"],[16,-28,0],"\u8996\u4EA4\u53C9\u4E4B\u5F8C\uFF1A\u5DE6\u8996\u675F\u5E36\u96D9\u773C\u53F3\u5074\u8996\u91CE\u3002");F("lgn","\u5916\u5074\u819D\u72C0\u9AD4","Lateral geniculate nucleus","v",["Lateral geniculate body.l"],[19.1,-27.8,-13.2],"\u4E18\u8166\u7684\u8996\u89BA\u4E2D\u7E7C\u7AD9\uFF0C\u4E4B\u5F8C\u7D93\u8996\u653E\u5C04\u5230 V1\u3002");F("baum","\u9B91\u6C0F\u74B0\uFF08\u9802\u8449\u8996\u653E\u5C04\uFF09","Baum\u2019s loop","v",["guide:baum"],[31,-3,-45],"\u8996\u653E\u5C04\u4E0A\u90E8\uFF0C\u7D93\u9802\u8449\u5230\u8DDD\u72C0\u6E9D\u4E0A\u5CB8\uFF08\u6954\u8449\uFF09\uFF0C\u50B3\u905E\u5C0D\u5074\u4E0B\u65B9\u8996\u91CE\u3002",{rep:"schematic"});F("v1-cortex","\u521D\u7D1A\u8996\u89BA\u76AE\u8CEA V1","Primary visual cortex (V1, BA 17)","v",["Calcarine sulcus.l","Cuneus.l","Lingual gyrus.l"],[8,-23,-79],"= Striate cortex = Brodmann area 17\uFF0C\u4F4D\u65BC\u8DDD\u72C0\u6E9D\u5169\u5CB8\u3002\u554F\u300C\u4EC0\u9EBC\u76AE\u8CEA\u300D\u7B54 primary visual cortex\uFF1B\u554F\u300C\u7B2C\u5E7E\u5340\u300D\u7B54 17\u3002",{rep:"guide",snap:!0});F("cuneus","\u6954\u8449","Cuneus","v",["Cuneus.l"],[6,-5,-80],"\u8DDD\u72C0\u6E9D\u4E0A\u65B9\uFF1B\u4EE3\u8868\u5C0D\u5074\u4E0B\u65B9\u8996\u91CE\u3002\u300C\u4E0A\u9762\u7684\u6954\u8449\u770B\u4E0B\u9762\u300D\u3002");F("lingual","\u820C\u56DE","Lingual gyrus","v",["Lingual gyrus.l"],[8,-35,-70],"\u8DDD\u72C0\u6E9D\u4E0B\u65B9\uFF1B\u4EE3\u8868\u5C0D\u5074\u4E0A\u65B9\u8996\u91CE\u3002\u300C\u4E0B\u9762\u7684\u820C\u56DE\u770B\u4E0A\u9762\u300D\u3002");F("cav-3","III\uFF08\u5916\u5074\u58C1\u6700\u4E0A\uFF09","CN III in lateral wall","c",["Oculomotor nerve (III).l"],[12.6,-37.2,20],"\u5916\u5074\u58C1\u7531\u4E0A\u5230\u4E0B\u7B2C 1 \u689D\u3002",{rep:"guide",snap:!0,via:["sof"]});F("cav-4","IV\uFF08\u5916\u5074\u58C1\uFF09","CN IV in lateral wall","c",["Trochlear nerve (IV).l"],[13.6,-43.2,20],"\u5916\u5074\u58C1\u7B2C 2 \u689D\u3002\u672C\u6A21\u578B\u4E2D IV \u8207 V1 \u5E7E\u4E4E\u540C\u9AD8\uFF0C\u6559\u79D1\u66F8\u6392\u5217\u662F III \u2192 IV \u2192 V1 \u2192 V2\u3002",{rep:"guide",snap:!0,via:["sof"]});F("cav-v1","V1\uFF08\u5916\u5074\u58C1\uFF09","V1 in lateral wall","c",["Ophthalmic nerve.l"],[15,-42.5,20],"\u5916\u5074\u58C1\u7B2C 3 \u689D\uFF0C\u5F80\u524D\u7D93\u7736\u4E0A\u88C2\u3002",{rep:"guide",snap:!0,via:["sof"]});F("cav-v2","V2\uFF08\u5916\u5074\u58C1\u6700\u4E0B\uFF09","V2 in lateral wall","c",["Maxillary nerve.l"],[17.2,-49,20],"\u5916\u5074\u58C1\u6700\u4E0B\u65B9\uFF0C\u5F80\u524D\u51FA\u5713\u5B54\u3002",{rep:"guide",snap:!0,via:["rotundum"]});F("cav-6","VI\uFF08\u6D77\u7DBF\u7AC7\u8154\u5167\uFF09","CN VI inside the sinus","c",["Abducens nerve (VI).l"],[14,-46.2,20],"\u552F\u4E00\u8D70\u5728\u6D77\u7DBF\u7AC7\u8154\u5167\u7684\u8166\u795E\u7D93\uFF0C\u8CBC\u8457 ICA\u3002",{rep:"guide",snap:!0,via:["sof"]});F("cra","\u8996\u7DB2\u819C\u4E2D\u592E\u52D5\u8108","Central retinal artery (CRA)","ku",["Central retinal artery.l"],[25.9,-49.4,48.3],"\u773C\u52D5\u8108\u7B2C\u4E00\u689D\u5206\u652F\u3002\u5BE6\u969B\u4E0A\u5728\u773C\u7403\u5F8C\u7D04 1 cm \u7531\u4E0B\u65B9\u7A7F\u5165\u8996\u795E\u7D93\uFF0C\u6CBF\u8996\u795E\u7D93\u4E2D\u592E\u8D70\u5230\u8996\u76E4\uFF0C\u518D\u5206\u6210\u4E0A\u4E0B\u9F3B\u5074\uFF0F\u9873\u5074\u56DB\u652F\u3002\u7D42\u52D5\u8108 \u2192 \u963B\u585E\uFF08CRAO\uFF09\u9020\u6210\u5167\u5C64\u8996\u7DB2\u819C\u7F3A\u8840\u3001\u9EC3\u6591\u6AFB\u6843\u7D05\u6591\u3002\u539F\u6A21\u578B\u7684 CRA \u8D70\u5728\u8996\u795E\u7D93\u4E0B\u65B9\u3001\u5230\u8996\u76E4\u624D\u63A5\u4E0A\uFF0C\u7A7F\u5165\u4F4D\u7F6E\u4EE5\u8AAA\u660E\u70BA\u6E96\u3002");F("crv","\u8996\u7DB2\u819C\u4E2D\u592E\u975C\u8108","Central retinal vein (CRV)","ku",["guide:crv"],[24.2,-45.6,44.2],"\u8207 CRA \u540C\u884C\u65BC\u8996\u795E\u7D93\u4E2D\uFF0C\u5728\u773C\u7403\u5F8C\u65B9\u96E2\u958B\u8996\u795E\u7D93\uFF0C\u532F\u5165\u4E0A\u773C\u975C\u8108\u6216\u76F4\u63A5\u9032\u6D77\u7DBF\u7AC7\u3002\u963B\u585E\uFF08CRVO\uFF09\u2192 \u706B\u7130\u72C0\u51FA\u8840\u3002\u539F\u6A21\u578B\u6C92\u6709\uFF0C\u85CD\u7DDA\u70BA\u793A\u610F\uFF1B\u5BE6\u969B\u5728\u8996\u795E\u7D93\u4E2D\u592E\u3002",{rep:"schematic"});F("spca","\u776B\u72C0\u5F8C\u77ED\u52D5\u8108","Short posterior ciliary arteries","k",["Short posterior ciliary arteries.l","guide:spca-ext"],[21,-40.8,40.5],"\u7D04 15\u201320 \u689D\uFF0C\u5728\u8996\u795E\u7D93\u5468\u570D\u7A7F\u5165\u978F\u819C\uFF0C\u4F9B\u61C9\u8108\u7D61\u819C\uFF08\u2192 \u5916\u5C64\u8996\u7DB2\u819C\uFF09\u8207\u8996\u795E\u7D93\u982D\u3002\u539F\u6A21\u578B\u53EA\u756B\u5230\u773C\u7403\u5F8C\u65B9\u7D04 9 mm\uFF0C\u63A5\u5230\u978F\u819C\u7684\u7D30\u652F\u662F\u793A\u610F\u3002");F("zinn","Zinn-Haller \u74B0","Circle of Zinn\u2013Haller","ku",["guide:zinn"],[30.5,-46.5,51.6],"\u776B\u72C0\u5F8C\u77ED\u52D5\u8108\u5728\u978F\u819C\u5167\u74B0\u7E5E\u8996\u795E\u7D93\u982D\u5F62\u6210\u7684\u543B\u5408\u74B0\uFF0C\u4F9B\u61C9\u7BE9\u677F\u9644\u8FD1\u7684\u8996\u795E\u7D93\u3002\u524D\u90E8\u7F3A\u8840\u6027\u8996\u795E\u7D93\u75C5\u8B8A\u8207\u5B83\u6709\u95DC\u3002\u793A\u610F\u3002",{rep:"schematic"});F("lpca","\u776B\u72C0\u5F8C\u9577\u52D5\u8108","Long posterior ciliary arteries","k",["Long posterior ciliary arteries.l","guide:lpca-in"],[25.1,-39.1,47.4],"\u5167\u3001\u5916\u5074\u5404\u4E00\u689D\uFF0C\u7A7F\u978F\u819C\u5F8C\u6CBF\u6C34\u5E73\u7D93\u7DDA\u5728\u8108\u7D61\u819C\u4E0A\u8154\u5F80\u524D\uFF0C\u5230\u776B\u72C0\u9AD4\u53C3\u8207\u8679\u819C\u5927\u52D5\u8108\u74B0\u3002\u539F\u6A21\u578B\u756B\u5230\u773C\u7403\u5F8C\u4E0A\u65B9\uFF1B\u773C\u7403\u5167\u6CBF\u6C34\u5E73\u7D93\u7DDA\u7684\u8D70\u5411\u662F\u793A\u610F\u3002");F("muscular","\u773C\u52D5\u8108\u808C\u652F","Muscular branches of the ophthalmic artery","k",["guide:muscular"],[20,-41,46],"\u4F9B\u61C9\u773C\u5916\u808C\uFF0C\u4E26\u5EF6\u7E8C\u70BA\u776B\u72C0\u524D\u52D5\u8108\u3002\u793A\u610F\u3002",{rep:"schematic"});F("aca","\u776B\u72C0\u524D\u52D5\u8108","Anterior ciliary arteries","k",["guide:aca"],[31.2,-42.2,72],"\u7531\u808C\u652F\u6CBF\u56DB\u689D\u76F4\u808C\u808C\u8171\u5F80\u524D\uFF1A\u4E0A\u3001\u4E0B\u3001\u5167\u76F4\u808C\u5404 2 \u689D\uFF0C\u5916\u76F4\u808C 1 \u689D\uFF0C\u5171 7 \u689D\u3002\u5728\u89D2\u819C\u7DE3\u9644\u8FD1\u7A7F\u978F\u819C\uFF0C\u8207\u776B\u72C0\u5F8C\u9577\u52D5\u8108\u5F62\u6210\u8679\u819C\u5927\u52D5\u8108\u74B0\uFF1B\u4E5F\u5206\u652F\u5230\u7D50\u819C\u8207\u978F\u819C\u8868\u5C64\u3002\u659C\u8996\u624B\u8853\u5207\u591A\u689D\u76F4\u808C\u6642\u8981\u6CE8\u610F\u524D\u6BB5\u7F3A\u8840\u3002\u793A\u610F\u3002",{rep:"schematic",snap:!0});F("mac","\u8679\u819C\u5927\u52D5\u8108\u74B0","Major arterial circle of the iris","k",["guide:mac"],[37.4,-48.8,71.2],"\u4F4D\u65BC\u776B\u72C0\u9AD4\u3001\u8679\u819C\u6839\u90E8\uFF0C\u7531\u776B\u72C0\u5F8C\u9577\u52D5\u8108\uFF0B\u776B\u72C0\u524D\u52D5\u8108\u7D44\u6210\uFF0C\u4F9B\u61C9\u776B\u72C0\u9AD4\u8207\u8679\u819C\u3002\u793A\u610F\u3002",{rep:"schematic",snap:!0});F("mic","\u8679\u819C\u5C0F\u52D5\u8108\u74B0","Minor arterial circle of the iris","k",["guide:mic"],[34.3,-48.8,73.8],"\u5728\u8679\u819C\u8868\u9762\u7684\u9818\u72C0\u7DE3\uFF08collarette\uFF09\u9644\u8FD1\uFF0C\u7531\u5927\u52D5\u8108\u74B0\u767C\u51FA\u7684\u653E\u5C04\u72C0\u8840\u7BA1\u9023\u6210\uFF0C\u5E38\u4E0D\u5B8C\u6574\u3002\u793A\u610F\u3002",{rep:"schematic",snap:!0});F("lacrimal-a","\u6DDA\u817A\u52D5\u8108","Lacrimal artery","e",["Lacrimal artery.l"],[30,-36,50],"\u773C\u52D5\u8108\u5206\u652F\uFF0C\u6CBF\u5916\u76F4\u808C\u4E0A\u7DE3\u5230\u6DDA\u817A\uFF1B\u5206\u51FA\u77BC\u5916\u5074\u52D5\u8108\uFF0C\u4E26\u6709\u56DE\u8FD4\u8166\u819C\u652F\u7D93\u7736\u4E0A\u88C2\u3002",{snap:!0});F("supraorbital-a","\u7736\u4E0A\u52D5\u8108","Supra-orbital artery","e",["Supra-orbital artery.l"],[26,-22,82],"\u7D93\u7736\u4E0A\u5B54\uFF0F\u5207\u8DE1\u5230\u984D\u90E8\uFF0C\u8207\u7736\u4E0A\u795E\u7D93\u4F34\u884C\u3002",{snap:!0});F("supratrochlear-a","\u6ED1\u8ECA\u4E0A\u52D5\u8108","Supratrochlear artery","e",["Supratrochlear artery.l"],[12.4,-25,85],"\u773C\u52D5\u8108\u7D42\u652F\u4E4B\u4E00\uFF0C\u5728\u6ED1\u8ECA\u4E0A\u65B9\u51FA\u773C\u7AA9\u5230\u984D\u90E8\u5167\u5074\u3002",{snap:!0});F("ethmoidal-a","\u524D\uFF0F\u5F8C\u7BE9\u52D5\u8108","Anterior & posterior ethmoidal arteries","e",["Anterior ethmoidal artery.l","Posterior ethmoidal artery.l"],[10,-44,55],"\u7D93\u773C\u7AA9\u5167\u5074\u58C1\u7684\u7BE9\u5B54\u5230\u7BE9\u7AC7\u3001\u9F3B\u8154\u8207\u9871\u524D\u7AA9\u3002\u524D\u7BE9\u52D5\u8108\u662F\u9F3B\u51FA\u8840\u7684\u91CD\u8981\u4F86\u6E90\u4E4B\u4E00\u3002",{snap:!0});F("dorsal-nasal","\u9F3B\u80CC\u52D5\u8108","Dorsal nasal artery","e",["guide:dorsal-nasal"],[10,-34,79],"\u773C\u52D5\u8108\u7D42\u652F\u4E4B\u4E00\uFF0C\u5728\u5167\u7725\u4E0A\u65B9\u51FA\u773C\u7AA9\u5230\u9F3B\u80CC\uFF0C\u8207\u5167\u7725\u52D5\u8108\uFF08\u9762\u52D5\u8108\uFF09\u543B\u5408 \u2192 \u9838\u5167\u3001\u9838\u5916\u52D5\u8108\u7CFB\u7D71\u5728\u6B64\u76F8\u9023\u3002\u793A\u610F\u3002",{rep:"schematic",snap:!0});F("med-palp","\u77BC\u5167\u5074\u52D5\u8108\uFF0B\u773C\u77BC\u52D5\u8108\u5F13","Medial palpebral arteries & palpebral arcades","e",["guide:med-palp","guide:arcade"],[22,-38.6,80.3],"\u77BC\u5167\u5074\u52D5\u8108\u5206\u4E0A\u3001\u4E0B\u652F\uFF0C\u8207\u77BC\u5916\u5074\u52D5\u8108\u9023\u6210\u4E0A\u3001\u4E0B\u773C\u77BC\u52D5\u8108\u5F13\u3002\u793A\u610F\uFF0C\u4F4D\u7F6E\u70BA\u773C\u77BC\u8FD1\u4F3C\u3002",{rep:"schematic",snap:!0});F("lat-palp","\u77BC\u5916\u5074\u52D5\u8108","Lateral palpebral artery","e",["guide:lat-palp"],[44.5,-44,71],"\u7531\u6DDA\u817A\u52D5\u8108\u5206\u51FA\uFF0C\u5230\u5916\u7725\u63A5\u4E0A\u3001\u4E0B\u773C\u77BC\u52D5\u8108\u5F13\u3002\u793A\u610F\u3002",{rep:"schematic",snap:!0});F("vortex","\u6E26\u975C\u8108","Vortex veins","k",["guide:vortex"],[39.2,-40.7,60.3],"4\uFF08\u20136\uFF09\u689D\uFF0C\u6BCF\u8C61\u9650\u4E00\u689D\uFF0C\u5728\u8D64\u9053\u5F8C\u65B9\u7A7F\u51FA\u978F\u819C\uFF0C\u6536\u96C6\u8108\u7D61\u819C\u3001\u776B\u72C0\u9AD4\u3001\u8679\u819C\u7684\u975C\u8108\u8840\uFF1B\u4E0A\u65B9\u5169\u689D\u5165\u4E0A\u773C\u975C\u8108\u3001\u4E0B\u65B9\u5169\u689D\u5165\u4E0B\u773C\u975C\u8108\u3002\u793A\u610F\u3002",{rep:"schematic",snap:!0});F("iov","\u773C\u4E0B\u975C\u8108","Inferior ophthalmic vein","e",["Inferior ophthalmic vein.l"],[18,-49,40],"\u7D93\u7736\u4E0B\u88C2\u901A\u7FFC\u975C\u8108\u53E2\uFF0C\u4E5F\u53EF\u532F\u5165\u4E0A\u773C\u975C\u8108\u6216\u6D77\u7DBF\u7AC7\u3002",{snap:!0});F("infraorbital-a","\u7736\u4E0B\u52D5\u8108","Infra-orbital artery","e",["Infra-orbital artery.l"],[27,-70,62],"\u4F86\u81EA\u4E0A\u9837\u52D5\u8108\uFF08\u9838\u5916\u7CFB\u7D71\uFF09\uFF0C\u8D70\u7736\u4E0B\u6E9D\uFF0F\u7BA1\u5230\u7736\u4E0B\u5B54\uFF0C\u4F9B\u61C9\u4E0B\u76F4\u808C\u3001\u4E0B\u659C\u808C\u7B49\u9130\u8FD1\u69CB\u9020\u3002",{snap:!0});F("angular-a","\u5167\u7725\u52D5\u8108","Angular artery","e",["Angular artery.l"],[12,-45,80],"\u9762\u52D5\u8108\uFF08\u9838\u5916\u7CFB\u7D71\uFF09\u7684\u7D42\u6BB5\uFF0C\u5728\u5167\u7725\u8207\u9F3B\u80CC\u52D5\u8108\u543B\u5408\u3002",{snap:!0});F("ant-meningeal","\u524D\u8166\u819C\u52D5\u8108","Anterior meningeal artery","e",["guide:ant-meningeal"],[4,-28,66],"\u7531\u524D\u7BE9\u52D5\u8108\u5206\u51FA\uFF0C\u9032\u5165\u9871\u524D\u7AA9\u4F9B\u61C9\u786C\u8166\u819C\u3002\u793A\u610F\u3002",{rep:"schematic",snap:!0});F("zygomatic-br","\u6DDA\u817A\u52D5\u8108\u9874\u652F","Zygomatic branches of the lacrimal artery","e",["guide:zygomatic-br"],[48,-48,60],"\u7A7F\u9874\u9AA8\u5230\u9873\u90E8\u8207\u9762\u9830\uFF08\u9874\u9873\u652F\u3001\u9874\u9762\u652F\uFF09\u3002\u793A\u610F\u3002",{rep:"schematic",snap:!0});F("angular-v","\u5167\u7725\u975C\u8108","Angular vein","e",["Angular vein.l"],[12,-38,80],"\u9762\u975C\u8108\u7684\u8D77\u59CB\u6BB5\uFF0C\u5728\u5167\u7725\u8207\u4E0A\u773C\u975C\u8108\u76F8\u901A\uFF0C\u7121\u74E3\u819C\u3002",{snap:!0});F("facial-v","\u9762\u975C\u8108","Facial vein","e",["Facial vein.l"],[30,-110,55],"\u7D93\u5167\u7725\u975C\u8108 \u2194 \u4E0A\u773C\u975C\u8108 \u2192 \u6D77\u7DBF\u7AC7\uFF1B\u4E5F\u7D93\u6DF1\u9762\u975C\u8108 \u2194 \u7FFC\u975C\u8108\u53E2\u3002\u9762\u90E8\u611F\u67D3\u53EF\u9006\u6D41\u5165\u9871\u3002",{snap:!0});F("supratrochlear-v","\u6ED1\u8ECA\u4E0A\u975C\u8108\uFF0F\u9F3B\u80CC\u975C\u8108","Supratrochlear & dorsal nasal veins","e",["guide:supratrochlear-v","guide:nasal-dorsum-v"],[12,-24,86],"\u984D\u90E8\u8207\u9F3B\u80CC\u7684\u975C\u8108\uFF0C\u5728\u5167\u7725\u532F\u6210\u5167\u7725\u975C\u8108\u3002\u793A\u610F\u3002",{rep:"schematic",snap:!0});F("lacrimal-v","\u6DDA\u817A\u975C\u8108","Lacrimal vein","e",["guide:lacrimal-v"],[35,-34.5,60],"\u6DDA\u817A\u7684\u975C\u8108\uFF0C\u532F\u5165\u4E0A\u773C\u975C\u8108\u3002\u793A\u610F\u3002",{rep:"schematic",snap:!0});F("infraorbital-v","\u7736\u4E0B\u975C\u8108","Infra-orbital vein","e",["guide:infraorbital-v"],[27,-72,64],"\u6CBF\u7736\u4E0B\u7BA1\uFF0C\u7D93\u7736\u4E0B\u88C2\u5F80\u7FFC\u975C\u8108\u53E2\u3002\u793A\u610F\u3002",{rep:"schematic",snap:!0});F("pterygoid","\u7FFC\u975C\u8108\u53E2","Pterygoid venous plexus","e",["guide:pterygoid","guide:iov-pterygoid"],[31,-72,18],"\u9873\u4E0B\u7AA9\u5167\u7684\u975C\u8108\u53E2\uFF1B\u4E0B\u773C\u975C\u8108\u7D93\u7736\u4E0B\u88C2\u901A\u6B64\uFF0C\u4E5F\u7D93\u5C0E\u975C\u8108\u9023\u6D77\u7DBF\u7AC7\u3002\u793A\u610F\u3002",{rep:"schematic",snap:!0});F("danger","\u5371\u96AA\u4E09\u89D2","Danger triangle of the face","e",["guide:danger"],[19,-102,82],"\u9F3B\u6839\u5230\u5169\u5074\u5634\u89D2\u3002\u9019\u5340\u975C\u8108\uFF08\u9762\u3001\u5167\u7725\u975C\u8108\uFF09\u7121\u74E3\u819C\uFF0C\u7D93\u773C\u975C\u8108\u901A\u6D77\u7DBF\u7AC7 \u2192 \u611F\u67D3\u53EF\u9020\u6210\u6D77\u7DBF\u7AC7\u8840\u6813\uFF08\u6D77\u7DBF\u7AC7\u75C7\u5019\u7FA4\uFF09\u3002\u793A\u610F\u3002",{rep:"schematic",snap:!0});F("acv","\u776B\u72C0\u524D\u975C\u8108","Anterior ciliary veins","k",["guide:acv"],[24,-48.5,71],"\u6536\u96C6\u776B\u72C0\u9AD4\u8207\u978F\u819C\u975C\u8108\u7AC7\uFF08Schlemm \u7BA1\uFF09\u7684\u8840\uFF0C\u6CBF\u76F4\u808C\u56DE\u5230\u808C\u975C\u8108 \u2192 \u4E0A\uFF0F\u4E0B\u773C\u975C\u8108\u3002\u793A\u610F\u3002",{rep:"schematic",snap:!0});F("schlemm","\u978F\u819C\u975C\u8108\u7AC7\uFF08Schlemm \u7BA1\uFF09","Scleral venous sinus (canal of Schlemm)","k",["guide:schlemm"],[31.2,-41.9,72.7],"\u89D2\u819C\u7DE3\u7684\u74B0\u72C0\u7BA1\u9053\uFF0C\u623F\u6C34\u7531\u6B64\u6D41\u51FA \u2192 \u978F\u819C\u5167\uFF0F\u8868\u5C64\u975C\u8108 \u2192 \u776B\u72C0\u524D\u975C\u8108\u3002\u793A\u610F\u3002",{rep:"schematic",snap:!0});F("episcleral","\u978F\u819C\u8868\u5C64\u8207\u7D50\u819C\u8840\u7BA1","Episcleral & conjunctival vessels","k",["guide:episcleral"],[31.2,-56.6,71.3],"\u776B\u72C0\u524D\u52D5\u8108\u5728\u89D2\u819C\u7DE3\u9644\u8FD1\u7684\u5206\u652F\uFF08\u542B\u7D50\u819C\u524D\uFF0F\u5F8C\u52D5\u8108\uFF09\uFF0C\u5F62\u6210\u89D2\u819C\u7DE3\u5468\u570D\u7684\u8840\u7BA1\u7DB2\u3002\u793A\u610F\u3002",{rep:"schematic",snap:!0});F("plicata","\u776B\u72C0\u9AD4\u76BA\u8936\u90E8\uFF08pars plicata\uFF09","Pars plicata of the ciliary body","k",["guide:plicata"],[37.8,-48.8,70.4],"\u776B\u72C0\u9AD4\u524D\u90E8\uFF0C\u6709\u776B\u72C0\u7A81\uFF0C\u5206\u6CCC\u623F\u6C34\uFF1B\u8679\u819C\u5927\u52D5\u8108\u74B0\u5C31\u5728\u9644\u8FD1\u3002\u793A\u610F\u4F4D\u7F6E\u3002",{rep:"schematic",snap:!0});F("plana","\u776B\u72C0\u9AD4\u5E73\u5766\u90E8\uFF08pars plana\uFF09","Pars plana of the ciliary body","k",["guide:plana"],[23.6,-48.8,69.3],"\u776B\u72C0\u9AD4\u5F8C\u90E8\u5E73\u5766\u5340\uFF0C\u5F80\u5F8C\u5230\u92F8\u9F52\u7DE3\u63A5\u8996\u7DB2\u819C\u3002\u73BB\u7483\u9AD4\u624B\u8853\u5E38\u7531\u6B64\u9032\u5165\u3002\u793A\u610F\u4F4D\u7F6E\u3002",{rep:"schematic",snap:!0});F("choroid","\u8108\u7D61\u819C\uFF08\u8108\u7D61\u819C\u5FAE\u8840\u7BA1\u53E2\uFF09","Choroid & choriocapillaris","ku",["guide:choroid"],[35.8,-55.1,54.7],"\u8461\u8404\u819C\u5F8C\u90E8\uFF08\u8461\u8404\u819C\uFF1D\u8679\u819C\uFF0B\u776B\u72C0\u9AD4\uFF0B\u8108\u7D61\u819C\uFF09\u3002\u7531\u776B\u72C0\u5F8C\u77ED\uFF0F\u9577\u52D5\u8108\u4F9B\u61C9\uFF0C\u6700\u5167\u5C64\u662F\u8108\u7D61\u819C\u5FAE\u8840\u7BA1\u53E2\uFF0C\u7D93 Bruch \u819C\u64F4\u6563\u4F9B\u61C9\u8272\u7D20\u4E0A\u76AE\u8207\u611F\u5149\u7D30\u80DE\uFF08\u5916\u5C64\u8996\u7DB2\u819C\uFF09\u3002\u8840\u6D41\u56DE\u6E26\u975C\u8108\u3002\u793A\u610F\u6BBC\u5C64\u3002",{rep:"schematic",snap:!0});F("disc","\u8996\u795E\u7D93\u76E4\uFF08\u8996\u4E73\u7A81\uFF09","Optic disc","u",["guide:disc"],[28.4,-47.4,53.4],"\u7D04 1.5 \xD7 1.75 mm\uFF0C\u7121\u611F\u5149\u7D30\u80DE \u2192 \u76F2\u9EDE\u3002CRA \u7531\u6B64\u9032\u5165\u3001CRV \u7531\u6B64\u96E2\u958B\u3002\u5728\u5DE6\u773C\u773C\u5E95\u4F4D\u65BC\u9EC3\u6591\u7684\u9F3B\u5074\u3002",{rep:"schematic",snap:!0});F("cup","\u8996\u795E\u7D93\u676F\uFF08\u676F\u76E4\u6BD4\uFF09","Optic cup (cup/disc ratio)","u",["guide:cup"],[28.4,-47.4,53.4],"\u8996\u795E\u7D93\u76E4\u4E2D\u592E\u7684\u51F9\u9677\u3002\u676F\u8207\u76E4\u76F4\u5F91\u6BD4\uFF1D\u676F\u76E4\u6BD4\uFF0C\u6B63\u5E38\u7D04 < 0.3\uFF1B\u8B8A\u5927\u8981\u61F7\u7591\u9752\u5149\u773C\u3002\u793A\u610F\u5927\u5C0F\u3002",{rep:"schematic",snap:!0});F("macula","\u9EC3\u6591\u90E8\u8207\u4E2D\u592E\u51F9","Macula lutea & fovea","u",["guide:fundus-macula","guide:fundus-fovea"],[31.2,-49.6,53],"\u5728\u8996\u795E\u7D93\u76E4\u9873\u5074\u7D04 2.5 \u500B\u76E4\u5F91\u3002\u4E2D\u592E\u51F9\u7121\u8996\u7DB2\u819C\u8840\u7BA1\uFF08\u7121\u8840\u7BA1\u5340\uFF09\uFF0C\u9760\u8108\u7D61\u819C\u4F9B\u61C9\uFF1B\u5468\u570D\u7531 CRA \u7684\u4E0A\u3001\u4E0B\u9873\u5074\u652F\u4F9B\u61C9\u3002\u7D04 20% \u7684\u4EBA\u6709\u776B\u72C0\u8996\u7DB2\u819C\u52D5\u8108\u4F9B\u61C9\u9EC3\u6591\u3002",{rep:"schematic",snap:!0});F("cra-st","CRA \u9873\u4E0A\u652F","Superior temporal branch","u",["Central retinal artery.l"],[32.7,-43.7,54.8],"\u5F80\u9EC3\u6591\u4E0A\u65B9\u8207\u9873\u4E0A\u65B9\u3002\u6A19\u9EDE\u70BA\u539F\u6A21\u578B CRA \u5728\u6B64\u65B9\u5411\u6700\u8FD1\u7684\u5206\u652F\u3002",{rep:"guide",snap:!0});F("cra-sn","CRA \u9F3B\u4E0A\u652F","Superior nasal branch","u",["Central retinal artery.l"],[25.4,-44.3,55.8],"\u5F80\u9F3B\u4E0A\u65B9\u3002",{rep:"guide",snap:!0});F("cra-it","CRA \u9873\u4E0B\u652F","Inferior temporal branch","u",["Central retinal artery.l"],[33,-52,53.6],"\u5F80\u9EC3\u6591\u4E0B\u65B9\u8207\u9873\u4E0B\u65B9\uFF1B\u9873\u4E0A\u3001\u9873\u4E0B\u652F\u5171\u540C\u74B0\u7E5E\u9EC3\u6591\u3002",{rep:"guide",snap:!0});F("cra-in","CRA \u9F3B\u4E0B\u652F","Inferior nasal branch","u",["Central retinal artery.l"],[24.8,-51.6,54.9],"\u5F80\u9F3B\u4E0B\u65B9\u3002",{rep:"guide",snap:!0});F("cilioretinal","\u776B\u72C0\u8996\u7DB2\u819C\u52D5\u8108","Cilioretinal artery","u",["guide:cilioretinal"],[29.9,-48.4,53.1],"\u5C6C\u776B\u72C0\u5F8C\u77ED\u52D5\u8108\u7CFB\u7D71\uFF08\u5E38\u7D93 Zinn \u74B0\uFF09\uFF0C\u5728\u8996\u795E\u7D93\u76E4\u9873\u5074\u908A\u7DE3\u7368\u7ACB\u51FA\u4F86\u3001\u4E0D\u7D93 CRA\uFF0C\u4F9B\u61C9\u9EC3\u6591\u3002\u7D04 10\u201333%\uFF08\u8B1B\u7FA9\u4E5F\u5BEB 20%\uFF09\u7684\u4EBA\u6709\uFF0C90% \u5728\u9873\u5074\u3002CRA \u963B\u585E\u6642\u53EF\u4FDD\u4F4F\u4E2D\u592E\u8996\u529B\uFF1B\u5B83\u672C\u8EAB\u963B\u585E \u2192 \u4E2D\u592E\u8996\u529B\u55AA\u5931\u3002\u793A\u610F\u3002",{rep:"schematic",snap:!0});F("lamina","\u7BE9\u677F","Lamina cribrosa","u",["guide:lamina"],[28.1,-47.1,51.8],"\u978F\u819C\u5728\u8996\u795E\u7D93\u7A7F\u51FA\u8655\u7684\u7BE9\u72C0\u677F\uFF1B\u8996\u795E\u7D93\u5728\u7BE9\u677F\u524D\u7121\u9AD3\u9798\u3001\u7BE9\u677F\u5F8C\u6709\u9AD3\u9798\u3002\u9019\u6BB5\uFF08\u7BE9\u677F\u524D\uFF0F\u7BE9\u677F\uFF09\u7531\u776B\u72C0\u5F8C\u77ED\u52D5\u8108\uFF08Zinn \u74B0\uFF09\u4F9B\u61C9\u3002\u793A\u610F\u3002",{rep:"schematic",snap:!0});F("hyaloid","\u73BB\u7483\u9AD4\u7BA1\uFF08Cloquet \u7BA1\uFF09","Hyaloid canal","u",["guide:hyaloid"],[29.7,-48,61],"\u80DA\u80CE\u73BB\u7483\u9AD4\u52D5\u8108\u9000\u5316\u5F8C\u7559\u4E0B\u7684\u7BA1\u9053\uFF0C\u5F9E\u8996\u795E\u7D93\u76E4\u5230\u6C34\u6676\u9AD4\u5F8C\u9762\u3002\u793A\u610F\u3002",{rep:"schematic",snap:!0});F("cca","\u9838\u7E3D\u52D5\u8108","Common carotid artery","w",["Left common carotid artery"],[25,-190,8],"\u7D04\u5728\u7532\u72C0\u8EDF\u9AA8\u4E0A\u7DE3\uFF08C4\uFF09\u5206\u6210\u9838\u5167\u8207\u9838\u5916\u52D5\u8108\u3002",{snap:!0});F("carotid-sinus","\u9838\u52D5\u8108\u7AC7","Carotid sinus","w",["guide:carotid-sinus"],[31.6,-149,.2],"\u9838\u5167\u52D5\u8108\u8D77\u59CB\u7684\u81A8\u5927\u8655\uFF0C\u6709\u58D3\u529B\u611F\u53D7\u5668\uFF08CN IX\uFF09\uFF1B\u4E5F\u662F\u52D5\u8108\u7CA5\u72C0\u786C\u5316\u597D\u767C\u8655\uFF0C\u8840\u6813\u53EF\u5F80\u4E0A\u5230\u773C\u52D5\u8108 \u2192 \u4E00\u904E\u6027\u9ED1\u77C7\u3002\u793A\u610F\u3002",{rep:"schematic",snap:!0});F("eca","\u9838\u5916\u52D5\u8108","External carotid artery","w",["External carotid artery.l"],[30,-120,15],"\u4F9B\u61C9\u81C9\u90E8\u8207\u982D\u76AE\uFF1A\u9762\u52D5\u8108\u3001\u4E0A\u9837\u52D5\u8108\u3001\u9873\u6DFA\u52D5\u8108\u7B49\u3002",{snap:!0});F("facial-a","\u9762\u52D5\u8108","Facial artery","w",["Facial artery.l"],[38,-110,45],"\u9838\u5916\u52D5\u8108\u5206\u652F\uFF0C\u7D42\u6BB5\u662F\u5167\u7725\u52D5\u8108\uFF0C\u8207\u773C\u52D5\u8108\u7684\u9F3B\u80CC\u52D5\u8108\u543B\u5408\u3002",{snap:!0});F("maxillary-a","\u4E0A\u9837\u52D5\u8108","Maxillary artery","w",["Maxillary artery.l"],[40,-78,15],"\u9838\u5916\u52D5\u8108\u7D42\u652F\u4E4B\u4E00\uFF1B\u5206\u51FA\u4E2D\u8166\u819C\u52D5\u8108\u3001\u7736\u4E0B\u52D5\u8108\u3002",{snap:!0});F("sta","\u9873\u6DFA\u52D5\u8108","Superficial temporal artery","w",["Superficial temporal artery.l"],[62,-40,0],"\u9838\u5916\u52D5\u8108\u7D42\u652F\u4E4B\u4E00\uFF1B\u5DE8\u7D30\u80DE\u52D5\u8108\u708E\uFF08\u9873\u52D5\u8108\u708E\uFF09\u53EF\u9020\u6210\u7F3A\u8840\u6027\u8996\u795E\u7D93\u75C5\u8B8A\u3002",{snap:!0});F("mma","\u4E2D\u8166\u819C\u52D5\u8108","Middle meningeal artery","w",["Middle meningeal artery.l"],[31,-62,9.7],"\u4E0A\u9837\u52D5\u8108\u5206\u652F\uFF0C\u7A7F\u68D8\u5B54\u5165\u9871\u3002",{snap:!0,via:["spinosum"]});F("ijv","\u9838\u5167\u975C\u8108","Internal jugular vein","w",["Internal jugular vein.l"],[30,-150,-12],"\u7531\u4E59\u72C0\u7AC7\u5EF6\u7E8C\uFF0C\u51FA\u9838\u975C\u8108\u5B54\uFF08\u8207 IX\u3001X\u3001XI \u540C\u5B54\uFF09\u3002",{snap:!0,via:["jugular"]});F("vertebral-w","\u690E\u52D5\u8108","Vertebral artery","wb",["Vertebral artery.l"],[12,-77,-13],"\u5F8C\u5FAA\u74B0\uFF1A\u690E\u52D5\u8108 \u2192 \u57FA\u5E95\u52D5\u8108 \u2192 \u5F8C\u5927\u8166\u52D5\u8108\u3002",{snap:!0});F("basilar","\u57FA\u5E95\u52D5\u8108","Basilar artery","wb",["Basilar artery"],[0,-50,3],"\u5DE6\u53F3\u690E\u52D5\u8108\u532F\u5408\u800C\u6210\uFF0C\u8D70\u5728\u6A4B\u8166\u8179\u5074\u3002",{snap:!0});F("aca","\u524D\u5927\u8166\u52D5\u8108","Anterior cerebral artery","w",["Anterior cerebral artery.l"],[6,-28,29],"\u9838\u5167\u52D5\u8108\u5206\u652F\uFF1B\u5DE6\u53F3\u4EE5\u524D\u4EA4\u901A\u52D5\u8108\u76F8\u9023\u3002",{snap:!0});F("acom","\u524D\u4EA4\u901A\u52D5\u8108","Anterior communicating artery","w",["Anterior communicating artery"],[0,-30,23],"\u9023\u63A5\u5DE6\u53F3 ACA\uFF0C\u662F Willis \u74B0\u7684\u4E00\u6BB5\uFF1B\u4E0D\u662F\u9838\u5167\u52D5\u8108\u7684\u5206\u652F\u3002",{snap:!0});F("mca","\u4E2D\u5927\u8166\u52D5\u8108","Middle cerebral artery","w",["Middle cerebral artery"],[26,-30,22],"\u9838\u5167\u52D5\u8108\u6700\u5927\u5206\u652F\uFF0C\u5F80\u5916\u5074\u3002\u5DE6 MCA \u51FA\u8840 \u2192 \u53F3\u5074\u504F\u7671\uFF0B\u53F3\u534A\u5074\u504F\u76F2\uFF08\u50B7\u5230\u8996\u653E\u5C04\uFF09\u3002",{snap:!0});F("pcom","\u5F8C\u4EA4\u901A\u52D5\u8108","Posterior communicating artery","w",["Posterior communicating artery.l"],[8,-35,15],"\u9023\u63A5\u9838\u5167\u52D5\u8108\u8207\u5F8C\u5927\u8166\u52D5\u8108\u3002",{snap:!0});F("pca","\u5F8C\u5927\u8166\u52D5\u8108","Posterior cerebral artery","wb",["Posterior cerebral artery.l"],[26,-25,-27],"\u57FA\u5E95\u52D5\u8108\u7D42\u652F\uFF0C\u4F9B\u61C9\u6795\u8449\u8996\u89BA\u76AE\u8CEA\u3002",{snap:!0});F("willis","\u5A01\u5229\u6C0F\u74B0","Circle of Willis","w",["Anterior communicating artery","Anterior cerebral artery","Posterior communicating artery","Posterior cerebral artery","Internal carotid artery"],[0,-32,10],"ACom\u3001ACA \u8FD1\u7AEF\u3001ICA \u672B\u7AEF\u3001PCom\u3001PCA \u8FD1\u7AEF\u7D44\u6210\uFF1B\u524D\u5F8C\u5FAA\u74B0\u5728\u6B64\u76F8\u9023\u3002",{rep:"guide",snap:!1});F("heubner","Heubner \u56DE\u8FD4\u52D5\u8108","Recurrent artery of Heubner","b",["guide:heubner"],[10,-26,25],"ACA \u8FD1\u7AEF\u5206\u51FA\u5F8C\u56DE\u8FD4\uFF0C\u4F9B\u61C9\u5C3E\u72C0\u6838\u982D\u3001\u5167\u56CA\u524D\u80A2\u3002\u793A\u610F\u3002",{rep:"schematic",snap:!0});F("lenticulostriate","\u5167\u3001\u5916\u5074\u8C46\u7D0B\u52D5\u8108","Medial & lateral lenticulostriate arteries","b",["Proximal lateral striate branches","Distal lateral striate branches"],[18,-24,24],"MCA \u8D77\u59CB\u6BB5\u7684\u7A7F\u901A\u652F\uFF0C\u4F9B\u61C9\u57FA\u5E95\u6838\u8207\u5167\u56CA\uFF1B\u9AD8\u8840\u58D3\u8166\u51FA\u8840\u597D\u767C\u3002",{snap:!0});F("med-orbitofrontal","\u5167\u5074\u7736\u984D\u52D5\u8108","Medial orbitofrontal artery","b",["Orbitofrontal branches of anterior cerebral artery"],[8,-22,56],"ACA \u5728\u984D\u8449\u5E95\u9762\u7684\u5206\u652F\u3002",{snap:!0});F("lat-orbitofrontal","\u5916\u5074\u7736\u984D\u52D5\u8108","Lateral orbitofrontal artery","b",["guide:lateral-orbitofrontal"],[37,-22,39],"MCA \u5728\u7736\u984D\u5340\u7684\u5206\u652F\u3002\u793A\u610F\u3002",{rep:"schematic",snap:!0});F("candelabra","\u4E0A\u884C\u984D\u52D5\u8108\uFF08\u71ED\u81FA\u5206\u652F\uFF09","Ascending frontal (candelabra) artery","b",["guide:ascending-frontal"],[48,1,23],"MCA \u5F80\u984D\u8449\u4E0A\u884C\u7684\u5206\u652F\u3002\u793A\u610F\u3002",{rep:"schematic",snap:!0});F("acha","\u524D\u8108\u7D61\u53E2\u52D5\u8108","Anterior choroidal artery","b",["guide:acha"],[14,-32,1],"\u76F4\u63A5\u8D77\u81EA\u9838\u5167\u52D5\u8108\uFF08\u570B\u8003\uFF1AAChA \u8D77\u81EA ICA\uFF09\u3002\u4F9B\u61C9\u8996\u675F\u3001\u5916\u5074\u819D\u72C0\u9AD4\u3001\u5167\u56CA\u5F8C\u80A2\u3001\u8108\u7D61\u53E2\u3002\u793A\u610F\u3002",{rep:"schematic",snap:!0});F("post-choroidal","\u5F8C\u8108\u7D61\u53E2\u52D5\u8108","Posterior choroidal arteries","b",["guide:posterior-choroidal"],[14,-20,-25],"PCA \u5206\u652F\uFF0C\u4E5F\u53C3\u8207\u5916\u5074\u819D\u72C0\u9AD4\u8207\u8108\u7D61\u53E2\u4F9B\u8840\u3002\u793A\u610F\u3002",{rep:"schematic",snap:!0});F("sca","\u4E0A\u5C0F\u8166\u52D5\u8108","Superior cerebellar artery","b",["Superior cerebellar artery.l"],[23,-42,-28],"\u57FA\u5E95\u52D5\u8108\u9060\u7AEF\u5206\u652F\u3002",{snap:!0});F("pontine","\u6A4B\u8166\u52D5\u8108","Pontine arteries","b",["Medial pontine branches of basilar artery","Lateral pontine branches of basilar artery"],[7,-49,4],"\u57FA\u5E95\u52D5\u8108\u5230\u6A4B\u8166\u7684\u5167\u3001\u5916\u5074\u5206\u652F\u3002",{snap:!0});F("labyrinthine","\u8FF7\u8DEF\uFF08\u5167\u807D\uFF09\u52D5\u8108","Labyrinthine (internal acoustic) artery","b",["guide:labyrinthine"],[27,-57,-3],"\u5E38\u7531 AICA \u5206\u51FA\uFF0C\u9032\u5167\u8033\u9053\u3002\u793A\u610F\u3002",{rep:"schematic",snap:!0});F("aica","\u524D\u4E0B\u5C0F\u8166\u52D5\u8108","Anterior inferior cerebellar artery","b",["Anterior inferior cerebellar artery.l"],[18,-60,-13],"\u57FA\u5E95\u52D5\u8108\u5206\u652F\u3002",{snap:!0});F("pica","\u5F8C\u4E0B\u5C0F\u8166\u52D5\u8108","Posterior inferior cerebellar artery","b",["Posterior inferior cerebellar artery.l"],[27,-64,-43],"\u690E\u52D5\u8108\u5206\u652F\uFF08\u8B1B\u7FA9\u5716\u4E0A\u7684 cut \u662F\u5207\u65B7\u7AEF\uFF09\u3002",{snap:!0});F("asa","\u524D\u810A\u9AD3\u52D5\u8108","Anterior spinal artery","b",["Anterior spinal artery"],[0,-87,-16],"\u5DE6\u53F3\u690E\u52D5\u8108\u5404\u767C\u4E00\u652F\u5728\u524D\u65B9\u532F\u5408\u3002",{snap:!0});F("psa","\u5F8C\u810A\u9AD3\u52D5\u8108","Posterior spinal artery","b",["guide:psa"],[6,-88,-31],"\u6210\u5C0D\uFF0C\u8D70\u5728\u810A\u9AD3\u5F8C\u5916\u5074\u3002\u793A\u610F\u3002",{rep:"schematic",snap:!0});var ze=Ah.map((i,t)=>({...i,number:t+1})),qs={q:{title:"\u5C0F\u8003 10 \u984C",subtitle:"\u6295\u5F71\u7247\u8207\u5C0F\u8003\u5377\u4E0A\u7684 10 \u500B\u69CB\u9020\uFF0C\u4E00\u6B21\u653E\u5728\u540C\u4E00\u9846\u982D\u88E1",camera:"oblique",bone:.14,cuts:{},cortex:.12,flow:"1 \u8996\u4E73\u7A81\u30002 \u786C\u8166\u819C\u30003 Meyer\u2019s loop\u30004 \u92F8\u9F52\u7DE3\u30005 Gennari \u7DDA\u30006 \u8DDD\u72C0\u6E9D\u30007 \u8996\u4EA4\u53C9\u30008 \u9F3B\u6DDA\u7BA1\u30009 \u4E0A\u9837\u7AC7\u300010 \u8776\u7AC7"},f:{title:"\u9871\u5E95\u5B54\u6D1E",subtitle:"\u79FB\u9664\u9871\u84CB\u8207\u8166\uFF0C\u770B\u6BCF\u689D\u8166\u795E\u7D93\u7A7F\u51FA\u54EA\u500B\u5B54",camera:"top",bone:1,cuts:{y:[-30,!1]},cortex:0,flow:"\u4E00\u7BE9\u4E8C\u8996\u3000\u4E09\u56DB\u4E00\u516D\u7736\u4E0A\u88C2\u3000\u4E8C\u5713\u4E09\u5375\u3000\u4E03\u516B\u5167\u807D\u3000\u4E5D\u5341\u5341\u4E00\u9838\u975C\u8108\u3000\u5341\u4E8C\u820C\u4E0B"},n:{title:"12 \u5C0D\u8166\u795E\u7D93",subtitle:"\u5F9E\u8166\u5E95\u8A8D\u8166\u795E\u7D93\u7684\u767C\u51FA\u4F4D\u7F6E\uFF0C\u518D\u8FFD\u5230\u5B83\u7A7F\u7684\u5B54",camera:"bottom",bone:0,cuts:{},cortex:.18,flow:"I \u55C5\u3000II \u8996\u3000III \u52D5\u773C\u3000IV \u6ED1\u8ECA\u3000V \u4E09\u53C9\u3000VI \u5916\u65CB\u3000VII \u984F\u9762\u3000VIII \u524D\u5EAD\u8033\u8778\u3000IX \u820C\u54BD\u3000X \u8FF7\u8D70\u3000XI \u526F\u3000XII \u820C\u4E0B"},o:{title:"\u773C\u7AA9\u8207\u5171\u540C\u8171\u74B0",subtitle:"\u6380\u958B\u773C\u7AA9\u9802\uFF0C\u770B\u7736\u4E0A\u88C2\u7684\u795E\u7D93\u8AB0\u5728\u8171\u74B0\u5167\u3001\u8AB0\u5728\u8171\u74B0\u5916",camera:"top",bone:1,cuts:{y:[-33,!1]},cortex:0,flow:"\u4E0A\u659C\u56DB\u3001\u5916\u76F4\u516D\u3001\u5176\u4ED6\u4E09\u3000\uFF5C\u3000\u8171\u74B0\u5916\uFF1AIV\u3001\u984D\u3001\u6DDA\u3001\u4E0A\u773C\u975C\u8108\u3000\uFF5C\u3000\u8171\u74B0\u5167\uFF1AIII\u3001\u9F3B\u776B\u3001VI"},e:{title:"\u773C\u7736\u8840\u7BA1",subtitle:"\u773C\u52D5\u8108\u7684\u773C\u7736\u5206\u652F\u3001\u773C\u7736\u975C\u8108\u56DE\u6D41\u3001\u5371\u96AA\u4E09\u89D2 \u2192 \u6D77\u7DBF\u7AC7",camera:"oblique",bone:0,cuts:{},cortex:0,flow:"ICA \u2192 \u773C\u52D5\u8108 \u2192 \u6DDA\u817A\u3001\u7736\u4E0A\u3001\u6ED1\u8ECA\u4E0A\u3001\u7BE9\u3001\u9F3B\u80CC\u3001\u77BC\u52D5\u8108\uFF5C\u975C\u8108\uFF1A\u4E0A\u773C\u975C\u8108 \u2192 \u7736\u4E0A\u88C2 \u2192 \u6D77\u7DBF\u7AC7\uFF1B\u4E0B\u773C\u975C\u8108 \u2192 \u6D77\u7DBF\u7AC7\uFF0F\u7FFC\u975C\u8108\u53E2\uFF1B\u5167\u7725\u975C\u8108 \u2194 \u9762\u975C\u8108"},k:{title:"\u773C\u7403\u8840\u7BA1",subtitle:"\u776B\u72C0\u5FAA\u74B0\uFF1A\u524D\uFF0F\u5F8C\u3001\u9577\uFF0F\u77ED\u776B\u72C0\u52D5\u8108\uFF0C\u8679\u819C\u52D5\u8108\u74B0\uFF0CZinn \u74B0\uFF0C\u6E26\u975C\u8108\uFF1B\u773C\u7403\u534A\u900F\u660E\u53EF\u898B",camera:"oblique",bone:0,cuts:{},cortex:0,flow:"\u776B\u72C0\u5F8C\u77ED \u2192 \u8108\u7D61\u819C\u3001\u8996\u795E\u7D93\u982D\uFF08Zinn \u74B0\uFF09\uFF5C\u776B\u72C0\u5F8C\u9577\uFF0B\u776B\u72C0\u524D\uFF087 \u689D\uFF09\u2192 \u8679\u819C\u5927\u52D5\u8108\u74B0 \u2192 \u5C0F\u52D5\u8108\u74B0\uFF5C\u56DE\u6D41\uFF1A\u6E26\u975C\u8108\u3001\u776B\u72C0\u524D\u975C\u8108\u3001Schlemm \u7BA1"},u:{title:"\u8996\u7DB2\u819C\u8207\u773C\u5E95",subtitle:"\u773C\u5E95\u93E1\u8996\u89D2\uFF08\u51A0\u72C0\u5207\u958B\u773C\u7403\uFF09\uFF1A\u8996\u795E\u7D93\u76E4\u3001\u676F\u76E4\u6BD4\u3001\u9EC3\u6591\u3001CRA \u56DB\u5206\u652F\u3001\u776B\u72C0\u8996\u7DB2\u819C\u52D5\u8108",camera:"front",bone:0,cuts:{z:[61,!0]},cortex:0,panel:"retina",flow:"\u5167\u5C64\u8996\u7DB2\u819C \u2190 \u8996\u7DB2\u819C\u4E2D\u592E\u52D5\u8108\uFF5C\u5916\u5C64\uFF08RPE\u3001\u611F\u5149\u7D30\u80DE\uFF09\u2190 \u8108\u7D61\u819C\u5FAE\u8840\u7BA1\u53E2\uFF08Bruch \u819C\uFF09\uFF5C\u9EC3\u6591\u4E2D\u592E\u51F9\u7121\u8840\u7BA1"},c:{title:"\u6D77\u7DBF\u7AC7\u8207\u8776\u978D",subtitle:"\u51A0\u72C0\u5207\u9762\uFF1A\u5916\u5074\u58C1 III\u2192IV\u2192V1\u2192V2\uFF0C\u8154\u5167 ICA\uFF0BVI\uFF1B\u5728\u300C\u5207\u9762\u300D\u53EF\u524D\u5F8C\u79FB\u52D5",camera:"front",bone:1,cuts:{z:[20,!0]},cortex:0,flow:"\u5916\u58C1\u4E09\u56DB\u4E00\u4E8C\uFF0C\u88E1\u9762\u516D\u548C\u9838\u5167\u52D5\u8108\u3000\uFF5C\u3000\u8776\u7AC7 \u2192 \u8776\u978D \u2192 \u8166\u4E0B\u5782\u9AD4"},g:{title:"\u776B\u72C0\u795E\u7D93\u7BC0\u8207\u77B3\u5B54\u53CD\u5C04",subtitle:"\u7531\u4E0A\u5F80\u4E0B\u770B\uFF1A\u4E09\u7A2E\u6839\u3001\u9577\u77ED\u776B\u72C0\u795E\u7D93\u3001\u4E0A\u4E18\u4E09\u4E0B\u4E18\u56DB",camera:"top",bone:0,cuts:{},cortex:0,flow:"\u5149 \u2192 \u8996\u7DB2\u819C \u2192 CN II \u2192 \u9802\u84CB\u524D\u5340 \u2192 \u5169\u5074 EW \u6838 \u2192 CN III \u2192 \u776B\u72C0\u795E\u7D93\u7BC0 \u2192 \u77ED\u776B\u72C0\u795E\u7D93 \u2192 \u77B3\u5B54\u62EC\u7D04\u808C"},v:{title:"\u8996\u89BA\u8DEF\u5F91\u8207\u76AE\u8CEA",subtitle:"\u5F9E\u8996\u795E\u7D93\u56DB\u6BB5\u5230 V1\uFF0C\u6954\u8449\u5728\u4E0A\u770B\u4E0B\u9762\u3001\u820C\u56DE\u5728\u4E0B\u770B\u4E0A\u9762",camera:"top",bone:0,cuts:{},cortex:.12,flow:"\u8996\u7DB2\u819C \u2192 \u8996\u795E\u7D93 \u2192 \u8996\u4EA4\u53C9 \u2192 \u8996\u675F \u2192 LGN \u2192 \u8996\u653E\u5C04 \u2192 V1\uFF08BA17\uFF09"},w:{title:"\u9838\u90E8\u8207 Willis \u74B0",subtitle:"\u9838\u7E3D \u2192 \u9838\u5167\uFF0F\u9838\u5916\u52D5\u8108\uFF1B\u9838\u5167\u52D5\u8108\u56DB\u5206\u652F\uFF1BWillis \u74B0",camera:"left",bone:.12,cuts:{},cortex:0,flow:"\u9838\u5167\u52D5\u8108\u5206\u652F\uFF1A\u524D\u5927\u8166\u3001\u4E2D\u5927\u8166\u3001\u773C\u52D5\u8108\u3001\u524D\u8108\u7D61\u53E2\uFF5C\u5F8C\u5FAA\u74B0\uFF1A\u690E\u52D5\u8108 \u2192 \u57FA\u5E95\u52D5\u8108 \u2192 \u5F8C\u5927\u8166\u52D5\u8108"},b:{title:"\u8166\u5E95\u52D5\u8108\u5206\u652F",subtitle:"\u8B1B\u7FA9\u8166\u5E95\u8840\u7BA1\u5716\u7684\u7D30\u90E8\u5206\u652F",camera:"bottom",bone:0,cuts:{},cortex:.1,flow:"\u5BE6\u7DDA\u70BA\u539F\u6A21\u578B\u8840\u7BA1\uFF1B\u6DE1\u7D2B\u8272\u70BA\u793A\u610F"}},Ch=["q","f","n","o","e","k","u","c","g","v","w","b"];var ja={x:30.55,y:-49.3,z:63.3,r:12.4},Rh=(i,t)=>[i,t,+(ja.z-Math.sqrt(Math.max(0,ja.r**2-(i-ja.x)**2-(t-ja.y)**2))).toFixed(2)];function Ih(){let i=[],t=(s,r=1)=>new tn({color:s,roughness:.5,metalness:.03,transparent:r<1,opacity:r});function e(s,r,a,o,c,l,h=[],u=!1){let f=new gn(r.map(g=>new w(...g)),u),d=new se(new Ln(f,Math.max(24,r.length*10),a,8,u),t(o));return d.name=s,d.userData={category:c,themes:l,tags:[s,...h],schematic:!0,baseColor:o},i.push(d),d}function n(s,r,a,o,c,l="reflex-guide"){let h=new se(new _n(a,20,14),t(o));return h.position.set(...r),h.name=s,h.userData={category:l,themes:c,tags:[s],schematic:!0,baseColor:o},i.push(h),h}for(let s of[1,-1]){let r=s>0?".l":".r",a=h=>h.map(([u,f,d])=>[s*u,f,d]);for(let h=0;h<5;h++)e("guide:meyer"+r+h,a([[19,-28,-13],[27+h*.5,-30,4],[35+h,-33,13],[40+h,-34,-12],[34+h,-32,-47],[12+h*.8,-28,-79]]),1.05,16740559,"path-guide","qv",["guide:radiation"]),e("guide:baum"+r+h,a([[19,-28,-13],[28+h,-17,-22],[34+h,-3,-39],[28+h,-6,-61],[10+h*.8,-17,-79]]),1.05,3798479,"path-guide","v",["guide:radiation"]);for(let[h,u,f,d]of[["ciliary",5.9,69,9291763],["sphincter",2.1,74,15317122]]){let g=[];for(let x=0;x<40;x++){let m=x/40*Math.PI*2;g.push([s*31+u*Math.cos(m),-49+u*Math.sin(m),f])}e("guide:"+h+r,g,.45,d,"reflex-guide","g",[],!0)}e("guide:lacrimal-n"+r,a([[16.6,-42.4,23.2],[20,-41.5,30],[26,-39.5,40],[33,-38.2,50],[38.5,-37.8,58],[41.5,-37.4,64]]),.55,16751317,"orbit-guide","o"),e("guide:nasociliary"+r,a([[14,-42.6,17.9],[15.8,-41.6,27],[16.3,-40.8,33.9],[17.8,-38.8,42],[15.5,-38.5,50],[13,-37.5,58],[12,-37,63]]),.55,16769899,"orbit-guide","og");let o=[22.4,-43,40.5];n("guide:ganglion"+r,a([o])[0],1.35,8373488,"g"),e("guide:root-para"+r,a([[24.1,-49.1,42.3],[23.6,-46.5,41.6],o]),.42,7321343,"reflex-guide","g"),e("guide:root-sens"+r,a([[17.3,-40,38],[19.8,-40.8,39.4],o]),.38,16769899,"reflex-guide","g"),e("guide:root-symp"+r,a([[13.8,-39.7,34.2],[17.5,-42,37.6],o]),.34,16739179,"reflex-guide","g"),[[-2.6,1.8],[-1,2.8],[1.2,2.2],[2.2,-.6],[-2.2,-1.8]].forEach(([h,u],f)=>{let d=Rh(28.3+h,-46.2+u);e("guide:short-ciliary"+r+f,a([o,[24.2+h*.3,-44+u*.3,45.5],d]),.28,10475775,"reflex-guide","g")}),[[23.6,-42.2],[22.4,-44]].forEach(([h,u],f)=>e("guide:long-ciliary"+r+f,a([[17.8,-38.8,42],[20.6,-40.4,47],Rh(h,u)]),.28,16761707,"reflex-guide","g")),n("guide:pretectal"+r,a([[4.2,-25.5,-12]])[0],1.6,15960927,"g");let c=e("guide:on-sheath"+r,a([[10.6,-35.9,28.7],[15.6,-39.3,36.2],[20.3,-42,41.5],[25,-44.6,46.8],[27.3,-45.7,51.4]]),1.75,12101340,"dura-guide","qv");c.material.transparent=!0,c.material.opacity=.42,c.material.depthWrite=!1,c.userData.fixedOpacity=.42;let l=new se(new _n(1,24,16),t(5753087,.38));l.scale.set(7,8,9),l.position.set(s*23,-73,59),l.name="guide:maxsinus"+r,l.userData={category:"sinus-guide",themes:"qo",tags:["guide:maxsinus"+r],schematic:!0,baseColor:5753087,fixedOpacity:.38},i.push(l)}return e("guide:transsphenoidal",[[0,-62,96],[0,-58,72],[0,-51,46],[0,-46,31],[0,-43,20]],.8,7332762,"path-guide","c"),i}function Ph(i){let t=i.geometry.attributes.position,e=i.name.endsWith(".r")?".r":".l",n=-1/0,s=0,r=0,a=0;for(let u=0;u<t.count;u++)n=Math.max(n,t.getZ(u));let o=[];for(let u=0;u<t.count;u++)t.getZ(u)>n-.7&&(o.push([t.getX(u),t.getY(u),t.getZ(u)]),s+=t.getX(u),r+=t.getY(u),a++);s/=a,r/=a;let c=Array.from({length:36},()=>[0,0,0,0]);for(let[u,f,d]of o){let g=c[Math.floor((Math.atan2(f-r,u-s)+Math.PI)/(2*Math.PI)*36)%36];g[0]+=u,g[1]+=f,g[2]+=d,g[3]++}let l=c.filter(u=>u[3]).map(u=>new w(u[0]/u[3],u[1]/u[3],u[2]/u[3])),h=new se(new Ln(new gn(l,!0),120,.42,8,!0),new tn({color:16762941,roughness:.4}));return h.name="guide:ora"+e,h.userData={category:"eye-guide",themes:"qvgk",tags:["guide:ora"+e],schematic:!0,baseColor:16762941},h}var J=(i,t)=>`<button class="go" data-go="${i}">${t}</button>`,Lh=`
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
<p class="mnemonic">\u4E0A\u659C\u56DB\u3001\u5916\u76F4\u516D\u3001\u5176\u4ED6\u4E09\u3002<br>\u5916\u58C1\u4E09\u56DB\u4E00\u4E8C\uFF0C\u88E1\u9762\u516D\u548C\u9838\u5167\u52D5\u8108\u3002<br>\u6954\u8449\u5728\u4E0A\u770B\u4E0B\u9762\uFF0C\u820C\u56DE\u5728\u4E0B\u770B\u4E0A\u9762\u3002<br>\u4E00\u7BE9\u4E8C\u8996\u3001\u4E09\u56DB\u4E00\u516D\u7736\u4E0A\u88C2\u3001\u4E8C\u5713\u4E09\u5375\u3001\u4E03\u516B\u5167\u807D\u3001\u4E5D\u5341\u5341\u4E00\u9838\u975C\u8108\u3001\u5341\u4E8C\u820C\u4E0B\u3002</p>`;var Uh={"Trochlear nerve (IV)":[7.5,1],"Ophthalmic nerve":[7,4],"Superior ophthalmic vein":[6.5,6.5]},Hg={...Uh,"Abducens nerve (VI)":[-1.6,.8]},Gg=["Oculomotor nerve (III)","Abducens nerve (VI)","Optic nerve (II)","Ophthalmic artery"],Dh=12;function Wg(i,t){let e=i.geometry.attributes.position,n=[],s=new w;for(let h=0;h<e.count;h++){let u=new w().fromBufferAttribute(e,h);n.push(u),s.add(u)}s.divideScalar(n.length);let r=n.reduce((h,u)=>u.distanceTo(s)>h.distanceTo(s)?u:h),a=r.clone().sub(s).normalize(),o=new w;for(let h of n){let u=h.clone().sub(s);u.addScaledVector(a,-u.dot(a)),u.length()>o.length()&&(o=u)}o.normalize();let c=new w().crossVectors(a,o).normalize(),l=h=>h.clone().addScaledVector(c,-h.dot(c)).normalize();return{c:s,n:c,up:l(new w(0,1,0)),lat:l(new w(t,0,0))}}function Nh(i,t){let e=i.geometry.attributes.position,n=new w,s=0;for(let r=0;r<e.count;r++){let a=new w().fromBufferAttribute(e,r),o=a.clone().sub(t.c);Math.abs(o.dot(t.n))<1&&o.length()<25&&(n.add(a),s++)}return s?n.divideScalar(s):null}function Fh(i){let t={};for(let[e,n]of[[".l",1],[".r",-1]]){let s=i.find(c=>c.name==="Common tendinous ring"+e);if(!s)continue;let r=Wg(s,n),a=s.geometry.attributes.position;for(let c=0;c<a.count;c++){let l=new w().fromBufferAttribute(a,c),h=l.clone().sub(r.c),u=h.dot(r.n),f=h.addScaledVector(r.n,-u).multiplyScalar(1.5);l.copy(r.c).add(f).addScaledVector(r.n,u),a.setXYZ(c,l.x,l.y,l.z)}a.needsUpdate=!0,s.geometry.computeVertexNormals(),s.geometry.computeBoundingSphere();for(let[c,[l,h]]of Object.entries(Hg)){let u=i.find(m=>m.name===c+e);if(!u)continue;let f=Nh(u,r);if(!f)continue;let d=r.c.clone().addScaledVector(r.up,l).addScaledVector(r.lat,h),g=d.sub(f);g.addScaledVector(r.n,-g.dot(r.n));let x=u.geometry.attributes.position;for(let m=0;m<x.count;m++){let p=new w().fromBufferAttribute(x,m),E=p.clone().sub(r.c),T=E.dot(r.n);if(Math.abs(T)>=Dh||E.length()>40)continue;let v=.5*(1+Math.cos(Math.PI*T/Dh));p.addScaledVector(g,v),x.setXYZ(m,p.x,p.y,p.z)}x.needsUpdate=!0,u.geometry.computeVertexNormals(),u.geometry.computeBoundingSphere(),u.userData.corrected=!0}t[e]=Xg(i,r,s);let o=r.n.z<0?r.n.clone().negate():r.n.clone();t[e].frame={centre:r.c.toArray(),normal:o.toArray()}}return t}function Xg(i,t,e){let n=e.geometry.attributes.position,s=1/0,r=0;for(let c=0;c<n.count;c++){let l=new w().fromBufferAttribute(n,c).sub(t.c).projectOnPlane(t.n).length();s=Math.min(s,l),r=Math.max(r,l)}let a={ring:{inner:+s.toFixed(1),outer:+r.toFixed(1)}},o=e.name.slice(-2);for(let c of[...Object.keys(Uh),...Gg]){let l=i.find(f=>f.name===c+o),h=l&&Nh(l,t);if(!h)continue;let u=h.sub(t.c).projectOnPlane(t.n).length();a[c]={r:+u.toFixed(1),where:u<s?"inside":u<=r?"wall":"outside"}}return a}var Mn=16734810,Fn=6260464;function Oh(i){let t=[],e=(l,h=1)=>new tn({color:l,roughness:.45,metalness:.03,transparent:h<1,opacity:h,depthWrite:h>=1,side:Oe}),n=(l,h,u,f,d,g={})=>(l.name=h,l.userData={category:f,themes:u,tags:[h],schematic:!0,baseColor:d,...g},t.push(l),l);function s(l,h,u,f,d,g=!1,x="vessel-guide"){if(h.length<2)return;let m=new gn(h.map(p=>p.isVector3?p.clone():new w(...p)),g);return n(new se(new Ln(m,Math.max(32,h.length*14),u,8,g),e(f)),l,d,x,f)}function r(l,h,u,f,d,g,x=1,m=0){let p=new se(new Ds(m,f,40),e(d,x));return p.position.copy(h),p.lookAt(h.clone().add(u)),n(p,l,g,"eye-guide",d,x<1?{fixedOpacity:x}:{})}function a(l,h,u,f,d,g=1,x="vessel-guide"){let m=new se(new _n(u,20,14),e(f,g));return m.position.copy(h),n(m,l,d,x,f,g<1?{fixedOpacity:g}:{})}let o={};for(let[l,h]of[[".l",1],[".r",-1]]){let u=Z=>i.find(nt=>nt.name===Z+l),f=u("Sclera"),d=u("Iris"),g=u("Retina");if(!f||!d||!g)continue;let x=Z=>{let nt=Z.geometry.attributes.position,tt=[];for(let Lt=0;Lt<nt.count;Lt++)tt.push(new w().fromBufferAttribute(nt,Lt));return tt},m=Z=>Z.reduce((nt,tt)=>nt.add(tt),new w).divideScalar(Z.length),p=x(f),E=new mn().setFromPoints(p).getCenter(new w),T=Z=>Z.sort((nt,tt)=>nt-tt)[Z.length>>1],v=T(p.map(Z=>Z.distanceTo(E))),A=m(x(d)),R=(Z,nt)=>Z.sort((tt,Lt)=>tt-Lt)[Math.floor(Z.length*nt)],P=Z=>Z.filter(nt=>nt.z<E.z-3).map(nt=>nt.distanceTo(E)),N=R(P(x(g)),.1),b=R(P(x(g)),.9),M=R(P(p),.1),L=new w(h,0,0),k=new w(0,1,0),X=new w(0,0,1),Y=(Z,nt,tt)=>E.clone().addScaledVector(X,-Math.cos(nt)*Z).addScaledVector(L,Math.sin(nt)*Math.cos(tt)*Z).addScaledVector(k,Math.sin(nt)*Math.sin(tt)*Z),K=(Z,nt,tt,Lt=48)=>Array.from({length:Lt},(dt,Ft)=>{let le=Ft/Lt*Math.PI*2;return new w(Z.x+nt*Math.cos(le),Z.y+nt*Math.sin(le),tt)}),q=(Z,nt,tt,Lt)=>new w(Z.x+h*nt*Math.cos(tt),Z.y+nt*Math.sin(tt),Lt),B=Z=>new w(h*Z[0],Z[1],Z[2]),G=Z=>Z.clone().sub(E).normalize(),rt=(Z,nt)=>E.clone().addScaledVector(Z,nt),gt=(Z,nt,tt)=>Z.clone().lerp(nt,tt).normalize(),St=u("Central retinal artery");if(St){let Z=St.geometry.attributes.position,nt=new w;for(let tt=0;tt<Z.count;tt++){nt.fromBufferAttribute(Z,tt);let Lt=nt.distanceTo(E),dt=Math.min(1,Math.max(0,(v+1.6-Lt)/.8));if(!dt||nt.z<E.z-v*1.05)continue;let Ft=N-.3;nt.copy(rt(G(nt),Lt+(Ft-Lt)*dt)),Z.setXYZ(tt,nt.x,nt.y,nt.z)}Z.needsUpdate=!0,St.geometry.computeVertexNormals(),St.geometry.computeBoundingSphere(),St.userData.corrected=!0}let It=G(B([28,-47,51.5])),qt=new w(h*.06,-.03,-1).normalize();r("guide:disc"+l,rt(It,N-.25),It.clone().negate(),.95,16176266,"u"),r("guide:cup"+l,rt(It,N-.32),It.clone().negate(),.3,16774880,"u"),r("guide:fundus-macula"+l,rt(qt,N-.22),qt.clone().negate(),1.55,9386530,"u",.75),r("guide:fundus-fovea"+l,rt(qt,N-.28),qt.clone().negate(),.32,4855308,"u"),r("guide:lamina"+l,rt(It,v-.4),It.clone().negate(),.9,13222322,"u",1,.15);let ee=[];for(let Z=0;Z<=1.0001;Z+=.1)ee.push(rt(gt(gt(It,qt,.12),gt(It,qt,.8),Z),N-.38));s("guide:cilioretinal"+l,ee,.16,16752451,"u");let Yt=u("Lens"),$=Yt?new w(A.x,A.y,Math.min(...x(Yt).map(Z=>Z.z))):rt(X,4),et=s("guide:hyaloid"+l,[rt(It,N-.8),rt(It,N-.8).lerp($,.35).add(new w(0,.6,0)),rt(It,N-.8).lerp($,.7).add(new w(0,.3,0)),$],.7,13625589,"u");et.material.transparent=!0,et.material.opacity=.4,et.material.depthWrite=!1,et.userData.fixedOpacity=.4;let _t=new se(new _n((b+M)/2,48,32,0,Math.PI*2,0,Math.PI*.68),e(10104623,.3));_t.rotation.x=-Math.PI/2,_t.position.copy(E),n(_t,"guide:choroid"+l,"ku","eye-guide",10104623,{fixedOpacity:.3});let Pt={r:6.25,z:A.z-2.1},Et={r:3.1,z:A.z+.5};s("guide:mac"+l,K(A,Pt.r,Pt.z),.32,16727406,"k",!0),s("guide:mic"+l,K(A,Et.r,Et.z),.22,16750504,"k",!0),s("guide:schlemm"+l,K(A,6.95,A.z-.6),.3,5209343,"k",!0),s("guide:episcleral"+l,K(A,7.8,A.z-2),.14,16748464,"k",!0),s("guide:plicata"+l,K(A,6.6,A.z-2.9),.24,11767024,"k",!0),s("guide:plana"+l,K(A,7.6,A.z-4),.24,8376512,"k",!0);let Gt=B([17.6,-40,44.5]);for(let[Z,nt,tt]of[["Superior rectus muscle",2,90],["Medial rectus muscle",2,180],["Inferior rectus muscle",2,270],["Lateral rectus muscle",1,0]]){let Lt=u(Z);if(!Lt)continue;let dt=x(Lt),Ft=Math.max(...dt.map(H=>H.z)),le=m(dt.filter(H=>H.z>Ft-1.5)),ce=(Ft+Math.min(...dt.map(H=>H.z)))/2,S=m(dt.filter(H=>Math.abs(H.z-ce)<1.5));s("guide:muscular-"+Z[0]+tt+l,[Gt,Gt.clone().lerp(S,.55).add(new w(0,.8,0)),S],.28,Mn,"ke");for(let H=0;H<nt;H++){let it=nt===1?0:H?.35:-.35,W=tt*Math.PI/180+it,wt=q(A,6.6,W,A.z-1.2),ct=q(A,Pt.r,W,Pt.z),Mt=new w(-Math.sin(W)*h,Math.cos(W),0).multiplyScalar(nt===1?0:H?1.2:-1.2);s("guide:aca-"+Z[0]+H+l,[S.clone().add(Mt),le.clone().add(Mt).addScaledVector(X,.4),wt,ct],.2,Mn,"k")}let _=tt*Math.PI/180+.18,O=new w(-Math.sin(_)*h,Math.cos(_),0).multiplyScalar(.7);s("guide:acv-"+Z[0]+l,[q(A,6.95,_,A.z-.6),q(A,7.7,_,A.z-2.2),le.clone().add(O).addScaledVector(X,.2),S.clone().add(O)],.2,Fn,"k")}for(let Z of[0,Math.PI]){let nt=[];for(let tt=.33;tt<=1.95;tt+=.18)nt.push(Y(v-.7,tt,Z));nt.push(q(A,Pt.r,Z,Pt.z)),s("guide:lpca-in-"+(Z?"m":"t")+l,nt,.26,16743002,"k")}let me=(Z,nt)=>{let tt=rt(It,v),Lt=tt.x+Z,dt=tt.y+nt;return new w(Lt,dt,E.z-Math.sqrt(Math.max(0,v*v-(Lt-E.x)**2-(dt-E.y)**2)))};s("guide:zinn"+l,Array.from({length:40},(Z,nt)=>{let tt=nt/40*Math.PI*2;return me(2.3*Math.cos(tt),2.3*Math.sin(tt))}),.2,16752451,"ku",!0),[[25,-42.2,42.4],[23.8,-42.2,42.4]].forEach((Z,nt)=>{for(let tt=0;tt<4;tt++){let Lt=(nt*4+tt)/8*Math.PI*2+.3,dt=me(3.4*Math.cos(Lt),3.4*Math.sin(Lt));s("guide:spca-ext"+nt+tt+l,[B(Z),B(Z).lerp(dt,.55).add(new w(0,0,-.5)),dt],.17,Mn,"k")}}),s("guide:crv"+l,[rt(It,N-.3),me(.6,-.3),B([27.2,-46.9,49.5]),B([25.6,-46.3,46.6]),B([24.2,-45.6,44.2]),B([23.4,-41.5,43.2]),B([21.2,-37.6,42.1])],.3,Fn,"ku");for(let[Z,nt,tt]of[["st",45,[25.2,-34,52]],["sn",135,[19,-35.5,50]],["it",-45,[22,-52,49]],["in",-135,[18.5,-50,50]]]){let Lt=nt*Math.PI/180;s("guide:vortex-"+Z+l,[Y(v+.2,1.33,Lt),Y(v+3.5,1.2,Lt),B(tt)],.3,Fn,"k")}let C=B([12.7,-41.3,53.9]),jt=B([14,-47,75.5]);s("guide:dorsal-nasal"+l,[C,B([12,-38,68]),B([10,-34,79]),B([7.5,-31,86])],.24,Mn,"e"),s("guide:med-palp"+l,[C,B([13.2,-44,65]),jt],.24,Mn,"e"),s("guide:arcade-up"+l,[jt,B([14,-41.5,77]),B([22,-38.6,80.3]),B([31,-38,81.4]),B([40,-39.5,79.5]),B([44.5,-43,76])],.2,Mn,"e"),s("guide:arcade-lo"+l,[jt,B([14,-54,77]),B([22,-57.2,79.6]),B([31,-58,80.3]),B([40,-57,78.8]),B([44.5,-53,76])],.2,Mn,"e"),s("guide:lat-palp"+l,[B([42.3,-39.9,64.6]),B([44.5,-44,71]),B([45,-48,75.5]),B([44.5,-53,76])],.22,Mn,"e"),s("guide:ant-meningeal"+l,[B([8,-43,60]),B([6,-37,63]),B([4,-28,66]),B([3,-14,68])],.22,Mn,"e"),s("guide:zygomatic-br"+l,[B([38.5,-35.6,56.1]),B([44,-42,58]),B([48,-48,60]),B([51,-54,63])],.2,Mn,"e"),s("guide:supratrochlear-v"+l,[B([11,-14,87]),B([12,-24,86]),B([13,-33,83]),B([13.8,-37,80])],.3,Fn,"e"),s("guide:nasal-dorsum-v"+l,[B([7,-33,86]),B([10,-36,82]),B([13.8,-37,80])],.26,Fn,"e"),s("guide:lacrimal-v"+l,[B([41.5,-36.5,64]),B([35,-34.5,60]),B([28,-34,56]),B([25.3,-33.8,55.1])],.28,Fn,"e"),s("guide:infraorbital-v"+l,[B([28,-77,75]),B([27,-72,64]),B([25,-65,52]),B([27,-62,40]),B([33,-70,22])],.3,Fn,"e"),s("guide:iov-pterygoid"+l,[B([17,-52,32]),B([24,-58,30]),B([32,-68,22])],.28,Fn,"e");for(let Z=0;Z<6;Z++)a("guide:pterygoid"+Z+l,B([31+3*Math.cos(Z),-72-2.5*Math.sin(Z*1.7),18+2*Math.sin(Z)]),1.6,Fn,"e",.55);l===".l"&&(o.frame={centre:E.toArray(),radius:+v.toFixed(2),retina:+N.toFixed(2),axis:A.toArray(),disc:rt(It,N-.25).toArray(),fovea:rt(qt,N-.22).toArray()})}let c=[new w(0,-40,99),new w(19,-102,82),new w(-19,-102,82)];return s("guide:danger",[...c],.45,16731469,"e",!0),t.report=o,t}function Bh(){let i=[];for(let t of[1,-1]){let e=t>0?".l":".r",n=r=>r.map(([a,o,c])=>new w(t*a,o,c));for(let[r,a,o]of[["acha",[[13,-34,23],[14,-34,12],[16,-33,0],[20,-31,-13],[23,-24,-20]],.65],["heubner",[[5,-29,27],[8,-29,30],[12,-26,25],[13,-19,19]],.55],["lateral-orbitofrontal",[[30,-31,24],[38,-26,30],[43,-22,44]],.65],["ascending-frontal",[[37,-28,21],[48,-12,22],[50,2,25],[45,21,19]],.65],["labyrinthine",[[16,-60,-8],[25,-58,-4],[34,-57,-1]],.5],["psa",[[10,-73,-27],[7,-84,-31],[6,-100,-34]],.6],["posterior-choroidal",[[17,-31,-18],[13,-21,-23],[11,-12,-15],[17,-14,-5]],.5]]){let c=new gn(n(a)),l=new se(new Ln(c,64,o,8,!1),new tn({color:12359147,roughness:.5}));l.name="guide:"+r+e,l.userData={category:"brainvessel-guide",themes:"b",tags:[l.name],schematic:!0,baseColor:12359147},i.push(l)}let s=new se(new _n(3.6,24,16),new tn({color:16743324,roughness:.5,transparent:!0,opacity:.55,depthWrite:!1}));s.scale.set(1,1.6,1),s.position.set(t*31.6,-149,.2),s.name="guide:carotid-sinus"+e,s.userData={category:"brainvessel-guide",themes:"w",tags:[s.name],schematic:!0,baseColor:16743324,fixedOpacity:.55},i.push(s)}return i}var j=i=>document.getElementById(i),qg={top:{dir:[0,1,-.02],up:[0,0,1],text:"\u4E0A\u9762\u89C0 \xB7 \u524D\u65B9\u5728\u4E0A \xB7 \u5DE6\u5074\u5728\u756B\u9762\u5DE6\u65B9"},bottom:{dir:[0,-1,-.02],up:[0,0,1],text:"\u5E95\u9762\u89C0 \xB7 \u524D\u65B9\u5728\u4E0A \xB7 \u5DE6\u5074\u5728\u756B\u9762\u53F3\u65B9"},front:{dir:[0,.12,1],up:[0,1,0],text:"\u524D\u9762\u89C0 \xB7 \u5DE6\u5074\u5728\u756B\u9762\u53F3\u65B9"},left:{dir:[1,0,0],up:[0,1,0],text:"\u5DE6\u5074\u89C0 \xB7 \u524D\u65B9\u5728\u756B\u9762\u5DE6\u65B9"},medial:{dir:[-1,0,0],up:[0,1,0],text:"\u7531\u6B63\u4E2D\u9762\u770B\u5DE6\u534A\u908A \xB7 \u524D\u65B9\u5728\u756B\u9762\u53F3\u65B9"},oblique:{dir:[.62,.55,.56],up:[0,1,0],text:"\u7ACB\u9AD4\u659C\u8996 \xB7 \u53EF\u81EA\u7531\u62D6\u66F3\u65CB\u8F49"}},Yg={q:{target:[4,-38,2],zoom:1.3},f:{target:[0,-58,8],zoom:1.3},n:{target:[0,-60,2],zoom:1.9},o:{target:[20,-42,50],zoom:2.9},e:{target:[24,-50,62],zoom:1.9},k:{target:[29,-46,60],zoom:4.6},u:{target:[30.2,-48.6,55],zoom:9.5},w:{target:[18,-100,10],zoom:.95},b:{target:[0,-48,-5],zoom:1.6},c:{target:[0,-46,20],zoom:3.6},g:{target:[14,-40,22],zoom:2.3},v:{target:[0,-28,-12],zoom:1.2}},$g={mesh:"\u539F\u6A21\u578B\u69CB\u9020",guide:"\u539F\u6A21\u578B\u4E0A\u7684\u4F4D\u7F6E\uFF0F\u901A\u9053",schematic:"\u793A\u610F\uFF08\u539F\u6A21\u578B\u6C92\u6709\uFF09",reference:"\u76AE\u8CEA\u5167\u5C64\u6B21\uFF08\u7121 3D \u7DB2\u683C\uFF09"},Il=[["I",/^Olfactory/,16049038],["II",/^Optic (nerve|chiasm|tract)/,16765788],["III",/^Oculomotor/,6269183],["IV",/^Trochlear nerve/,12946431],["V1",/^Ophthalmic nerve/,16769899],["V2",/^(Maxillary nerve|Meningeal branch of maxillary)/,16755021],["V",/(Trigeminal|root of trigeminal)/,16760909],["V3",/(mandibular nerve|Inferior alveolar|Lingual nerve|Buccal nerve|Mental nerve|mylohyoid)/,16743741],["VI",/^Abducens/,4186288],["VII",/^Facial nerve/,16742568],["VIII",/^(Vestibul|Cochlear)/,10739824],["IX",/^Glossopharyngeal/,7656447],["X",/^Vagus/,10004735],["XI",/^Accessory nerve/,14263551],["XII",/^Hypoglossal nerve/,5759968]],Ks=!1,Vh=new Pe,Al={bone:[],brain:[],nerve:[],other:[]},kh=null,nn="q",Ye=!0,Ue=null,Cl="both",bn,ti,re,Ae,ei=[],js=[],Sn=0,On=0,ni=!0,$s=null,Qa=new w,ii={y:{index:1,name:"\u6C34\u5E73",low:"\u4FDD\u7559\u4E0B\u65B9",high:"\u4FDD\u7559\u4E0A\u65B9",start:-30},z:{index:2,name:"\u51A0\u72C0",low:"\u4FDD\u7559\u5F8C\u65B9",high:"\u4FDD\u7559\u524D\u65B9",start:20},x:{index:0,name:"\u77E2\u72C0",low:"\u4FDD\u7559\u53F3\u5074",high:"\u4FDD\u7559\u5DE6\u5074",start:0}},Zs=Object.fromEntries(Object.keys(ii).map(i=>[i,{keep:i==="x"?"high":"low",plane:new Pe}])),rs={bone:"\u9AA8",brain:"\u8166",nerve:"\u795E\u7D93",other:"\u5176\u4ED6"};function Hh(i){let t=i?.userData.category;return t==="bone"||t==="tooth"?"bone":["cortex","cerebellum","stem","deep","dura","dura-guide","path-guide"].includes(t)?"brain":["nerve","nucleus","orbit-guide","reflex-guide"].includes(t)?"nerve":"other"}function Zg(){let i=Object.fromEntries(Object.keys(rs).map(t=>[t,Ks?[Vh]:[]]));for(let[t,e]of Object.entries(Zs)){if(!j("cut-"+t).checked)continue;let n=+j("cut-"+t+"-v").value,s=new w;s.setComponent(ii[t].index,e.keep==="low"?-1:1),e.plane.set(s,e.keep==="low"?n:-n);for(let r of Object.keys(rs))j("cut-"+t+"-"+r).checked&&i[r].push(e.plane)}return i}function Jg(){let i=[];for(let[t,e]of Object.entries(Zs)){let n=j("cut-"+t).checked,s=j("cut-"+t+"-v").value;j("cut-"+t+"-o").textContent=s+" mm",j("cut-"+t+"-flip").textContent=ii[t][e.keep];let r=Object.keys(rs).filter(a=>j("cut-"+t+"-"+a).checked);n&&i.push(ii[t].name+" "+s+(r.length===4?"":r.length?"\uFF08"+r.map(a=>rs[a]).join("")+"\uFF09":"\uFF08\u672A\u9078\uFF09"))}Ks&&i.unshift("\u7736\u5C16\u659C\u5207\u9762"),j("section-summary").textContent=i.join("\u30FB")||"\u95DC"}function Kg(i){for(let t of Object.keys(ii)){let e=i.cuts[t];j("cut-"+t).checked=!!e,j("cut-"+t+"-v").value=e?e[0]:ii[t].start;for(let n of Object.keys(rs))j("cut-"+t+"-"+n).checked=e?e[1]||n==="bone":t!=="y"||n==="bone";Zs[t].keep=t==="x"?"high":"low"}}function zh(i,t){return new t(Uint8Array.from(atob(i),e=>e.charCodeAt(0)).buffer)}function jg(i,t){return t.models.some(e=>i.name.startsWith(e)||(i.userData.tags||[]).some(n=>n.startsWith(e)))}var Qg=i=>i==="Mandible"||i.startsWith("Lower "),to=i=>{for(let[t,e]of Il)if(e.test(i))return t;return null};function t_(i){let t=i.category,e=i.name;if(t==="nerve"){for(let[,n,s]of Il)if(n.test(e))return s;return 15848076}return t==="cortex"?13347509:t==="cerebellum"?12430768:t==="stem"?12041417:t==="artery"?14707306:t==="bone"?14471088:t==="tooth"?15919314:t==="sinus"?6079724:t==="dura"?12101340:t==="vein"?7311344:t==="nucleus"?16754784:t==="orbit"?/muscle|Levator/.test(e)?13135980:/tendinous/.test(e)?15919826:/gland/.test(e)?15185626:8377322:t==="eye"?e.startsWith("Sclera")?14476771:e.startsWith("Retina")?11845597:e.startsWith("Iris")?8101298:e.startsWith("Lens")?11130857:e.startsWith("Cornea")?13625584:10471128:e.includes("geniculate")?15253888:e.includes("hypophysis")?12753611:e.includes("ventricle")?9222861:10794433}async function e_(){let i=Uint8Array.from(atob(window.CRANIAL_GZIP),r=>r.charCodeAt(0)),t=await new Response(new Blob([i]).stream().pipeThrough(new DecompressionStream("gzip"))).json();bn=new Ya({canvas:j("canvas"),antialias:!0,alpha:!0}),bn.setPixelRatio(Math.min(devicePixelRatio,1.5)),bn.localClippingEnabled=!0,bn.outputColorSpace=Ie,bn.toneMapping=ra,bn.toneMappingExposure=1.05,ti=new As,re=new gi(-180,180,130,-130,.1,2400),ti.add(new Fs(15527167,4603467,2));for(let[r,a,o]of[[[180,260,280],16772326,2.3],[[-180,40,-200],11914735,1.4],[[0,-220,60],16438220,1.3]]){let c=new Os(a,o);c.position.set(...r),ti.add(c)}for(let r of t.meshes){let a=new Xe;a.setAttribute("position",new Te(zh(r.positions,Float32Array),3)),a.setIndex(new Te(zh(r.indices,Uint32Array),1)),a.computeVertexNormals();let o=t_(r),c=new se(a,new tn({color:o,roughness:r.category==="bone"||r.category==="tooth"?.82:.62,side:Oe}));c.name=r.name,c.userData={category:r.category,baseColor:o,schematic:!1},ei.push(c),ti.add(c)}let e=Fh(ei),n=Ih(),s=Oh(ei);window.ocularFrame=s.report.frame,n.push(...s,...Bh());for(let r of ei.filter(a=>/^Retina\.[lr]$/.test(a.name)))n.push(Ph(r));ei.push(...n),ti.add(...n),ti.updateMatrixWorld(!0);for(let r of ze)if(r.matches=ei.filter(a=>jg(a,r)),r.point=new w(...r.position),r.snap){let a=r.matches.filter(h=>/\.l\d*$/.test(h.name)),o=a.length?a:r.matches,c=1/0,l=new w;for(let h of o){let u=h.geometry.attributes.position;for(let f=0;f<u.count;f++){l.fromBufferAttribute(u,f).applyMatrix4(h.matrixWorld);let d=l.distanceToSquared(new w(...r.position));d<c&&(c=d,r.anchorMesh=h,r.localAnchor=new w().fromBufferAttribute(u,f))}}r.anchorMesh&&r.point.copy(r.localAnchor).applyMatrix4(r.anchorMesh.matrixWorld)}j("total").textContent=ze.length,n_(),Js("q"),new ResizeObserver(Rl).observe(j("stage")),Rl(),j("loading").hidden=!0,bn.setAnimationLoop(()=>{Ae.update(),ni&&(bn.render(ti,re),a_(),ni=!1)}),window.atlas={labels:ze,groups:qs,meshes:ei,scene:ti,get camera(){return re},get controls(){return Ae},annulus:e,setGroup:Js,select:as,setCamera:Pl,focusOn:r=>Wh(ze.find(a=>a.id===r)),get state(){return{current:nn,names:Ye,selected:Ue,active:js.length}}}}function n_(){j("legend").replaceChildren();for(let[i,,t]of Il){let e=document.createElement("span");e.innerHTML=`<i style="background:#${t.toString(16).padStart(6,"0")}"></i>${i}`,j("legend").append(e)}}function Gh(i){Ae?.dispose(),Ae=new Ka(re,j("canvas")),Ae.enableDamping=!0,Ae.dampingFactor=.1,Ae.minZoom=.45,Ae.maxZoom=9,Ae.target.copy(i),Ae.addEventListener("change",()=>ni=!0),Ae.addEventListener("start",()=>{j("canvas").classList.add("dragging"),j("orientation").textContent="\u81EA\u7531\u8996\u89D2 \xB7 \u6307\u7DDA\u53EF\u7A7F\u900F\u8868\u9762\uFF0C\u65CB\u8F49\u6642\u7559\u610F\u524D\u5F8C\u95DC\u4FC2"}),Ae.addEventListener("end",()=>j("canvas").classList.remove("dragging")),Ae.update()}function Pl(i,t=Yg[nn]){let e=qg[i],n=new w(...t.target),s=new w(...e.dir).normalize();re.up.set(...e.up),re.position.copy(n).addScaledVector(s,700),re.zoom=t.zoom,re.lookAt(n),re.updateProjectionMatrix(),Gh(n),$s=null,j("camera-view").value=i,j("orientation").textContent=e.text,ni=!0}function Js(i){nn=i,Ue=null,Ks=!1,j("apex-view").hidden=i!=="o";let t=qs[i];j("view-title").textContent=t.title,j("view-note").textContent=t.subtitle,j("flow").textContent=Ye?t.flow:"\u540D\u7A31\u8207\u8AAA\u660E\u5DF2\u96B1\u85CF \xB7 \u4FDD\u7559\u9805\u76EE\u7DE8\u865F\u4F9B\u81EA\u6E2C",j("bone").value=t.bone,j("cortex").value=t.cortex,Kg(t),j("jaw").checked=i==="q",j("right").checked=!"geku".includes(i),j("cerebellum").checked="nb".includes(i),j("retina-guide").hidden=t.panel!=="retina",j("guides").checked=!0,j("search").value="",j("legend").hidden=!"fnoc".includes(i),Pl(t.camera),document.querySelectorAll("[data-view]").forEach(e=>e.classList.toggle("active",e.dataset.view===i)),Ti(),Qs(),tr(),eo()}function Ti(){let i=ze.filter(c=>c.groups.includes(nn)),t=ze.find(c=>c.id===Ue),e=+j("bone").value,n=+j("cortex").value,s=new Set(i.flatMap(c=>c.matches));t&&t.matches.forEach(c=>s.add(c)),j("bone-value").textContent=Math.round(e*100)+"%",j("cortex-value").textContent=Math.round(n*100)+"%",j("nerve-dim-value").textContent=+j("nerve-dim").value?Math.round(j("nerve-dim").value*100)+"%":"\u96B1\u85CF",Jg(),Al=Zg();let r=t&&nn!=="v"?new Set(t.matches.filter(c=>c.userData.category==="nerve").map(c=>to(c.name)).filter(Boolean)):null;r?.has("V")&&["V1","V2","V3"].forEach(c=>r.add(c)),r&&["V1","V2","V3"].some(c=>r.has(c))&&r.add("V");let a=c=>["artery","vein","vessel-guide","brainvessel-guide"].includes(c.userData.category),o="ekuwb".includes(nn)&&t?.matches.some(a);for(let c of ei){let l=c.userData.category,h=c.name,u=s.has(c),f=t?.matches.includes(c),d=nn,g=u,x=1;if(l==="bone"||l==="tooth")g=e>0&&(!Qg(h)||j("jaw").checked),x=e,f&&e<.3&&(g=!0,x=.45);else if(l==="sinus")g=u||"qocf".includes(d),x=u?.8:.45;else if(l==="cortex")g=n>0||f,x=f?Math.max(n,.75):n;else if(l==="cerebellum")g=j("cerebellum").checked,x=d==="n"?.5:d==="b"?.3:.25;else if(l==="stem")g=u||"nqgvcb".includes(d),x=u?.9:d==="n"?.85:d==="g"?.35:.22;else if(l==="deep")g=u||"vg".includes(d)&&/^Thalamus/.test(h),x=u?.85:.14;else if(l==="nerve"){if(g=u||"fnoc".includes(d)&&!(/^Optic tract/.test(h)&&d!=="n")||d==="g"&&/^(Oculomotor|Optic|Ophthalmic)/.test(h)||d==="v"&&/^Optic/.test(h)||"eku".includes(d)&&/^Optic nerve/.test(h),x=u||"fnoc".includes(d)?1:.45,r?.size){let E=r.has(to(h)),T=+j("nerve-dim").value;g=E||T>0,x=E?1:T}}else l==="nucleus"?(g=u||"gn".includes(d),x=u?1:.6):l==="eye"?(g=!"nwb".includes(d),x=h.startsWith("Sclera")?d==="u"?1:"ek".includes(d)?.32:.13:h.startsWith("Retina")?d==="u"?1:d==="k"?.22:.3:h.startsWith("Lens")?.6:h.startsWith("Cornea")?.18:h.startsWith("Vitreous")?0:.85,x===0&&!u&&(g=!1)):l==="orbit"?(g=u||"ocfek".includes(d),x=u?1:d==="o"||d==="f"?.95:d==="e"?.14:d==="k"?.1:.35):l==="artery"?(g=u||"cf".includes(d)&&/^(Internal carotid|Ophthalmic|Middle meningeal)/.test(h)||d==="n"&&/^(Basilar|Vertebral|Internal carotid)/.test(h)||d==="e"&&/^Internal carotid/.test(h)||"bw".includes(d),x=u?1:"bw".includes(d)?.4:.6):l==="vein"?(g=u||"cofek".includes(d),x=/^Cavernous/.test(h)?d==="c"?.55:.4:.8):l==="dura"?(g=u&&(d==="q"||f),x=.32):c.userData.schematic&&(g=u||(c.userData.themes||"").includes(d),x=c.userData.fixedOpacity??1);if(Ks&&(l==="sinus"||l==="sinus-guide"||l==="bone"||l==="tooth")&&(g=!1),o&&a(c)&&!f){let E=+j("nerve-dim").value;g=g&&E>0,x=Math.min(x,E)}c.userData.schematic&&!j("guides").checked&&(g=!1),!j("right").checked&&/\.r\d*$/.test(h)&&(g=!1),f&&g&&(x=Math.max(x,l==="bone"||l==="cortex"||l==="vein"||l==="sinus"||l==="dura"?x:.8));let m=c.material;h.startsWith("Retina")&&m.color.setHex("uk".includes(d)?14714698:c.userData.baseColor),c.visible=g,m.opacity=x,m.transparent=x<.999,m.depthWrite=x>.7;let p=Al[Hh(c)];m.clippingPlanes=p.length?p:null,m.needsUpdate=!0,m.emissive.setHex(f?6966048:0),m.emissiveIntensity=f?.7:0,l==="path-guide"&&(m.emissive.setHex(c.userData.baseColor),m.emissiveIntensity=f?.9:.5),o&&f&&a(c)&&(m.emissive.setHex(c.userData.baseColor),m.emissiveIntensity=.7,c.renderOrder=3),l==="nerve"&&(f||r?.size&&r.has(to(h)))&&(m.emissive.setHex(c.userData.baseColor),m.emissiveIntensity=.85,c.renderOrder=3),c.renderOrder=l==="nerve"&&r?.size&&r.has(to(h))?3:x<.5?2:0}ni=!0}function i_(i){return(i.zh+" "+i.en+" "+(i.quiz?"\u5C0F\u8003 "+i.quiz:"")).toLowerCase()}function s_(){let i=j("search").value.trim().toLowerCase();return i?ze.filter(t=>i_(t).includes(i)):ze.filter(t=>t.groups.includes(nn))}function Qs(){let i=s_();j("count").textContent=i.length+" \u9805",j("list-title").textContent=j("search").value?"\u8DE8\u4E3B\u984C\u641C\u5C0B\u7D50\u679C":"\u672C\u4E3B\u984C\u69CB\u9020",j("structure-list").replaceChildren();for(let t of i){let e=document.createElement("button");e.className="structure"+(Ue===t.id?" selected":""),e.dataset.id=t.id,e.innerHTML=`<span class="num">${String(t.number).padStart(2,"0")}</span><div><strong>${Ye?t.zh:"\u9805\u76EE "+t.number}</strong><small>${Ye?t.en:"\u540D\u7A31\u5DF2\u96B1\u85CF"}</small></div><span class="hint">${t.quiz?"\u8003 "+t.quiz:t.representation==="schematic"?"\u793A\u610F":""}</span>`,e.onclick=()=>as(t),j("structure-list").append(e)}i.length||(j("structure-list").innerHTML='<p class="empty">\u6C92\u6709\u7B26\u5408\u7684\u69CB\u9020\u3002</p>')}function as(i){if(typeof i=="string"&&(i=ze.find(t=>t.id===i)),!!i){if(!i.groups.includes(nn)){let t=j("search").value;Js(i.groups[0]),j("search").value=t}Ue=i.id,i.representation==="schematic"&&(j("guides").checked=!0),Ti(),Qs(),tr(),eo(i)}}function eo(i){let t=j("detail");if(t.querySelector(".detail-number").textContent=i?String(i.number).padStart(2,"0"):"\u25CE",t.querySelector("h3").innerHTML=i?Ye?`${i.zh}<small>${i.en}</small>`:`\u9805\u76EE ${i.number} \xB7 \u540D\u7A31\u5DF2\u96B1\u85CF`:Ye?"\u9EDE\u9078\u69CB\u9020\uFF0C\u8FFD\u8E64\u795E\u7D93\u7A7F\u904E\u54EA\u500B\u5B54\u3002":"\u540D\u7A31\u5DF2\u5168\u90E8\u96B1\u85CF",t.querySelector("p").textContent=i?Ye?i.note:"\u53EF\u65CB\u8F49\u8207\u9EDE\u9078\u7DE8\u865F\u3002\u6309\u300C\u986F\u793A\u6240\u6709\u540D\u7A31\u300D\u63ED\u66C9\u540D\u7A31\u8207\u8AAA\u660E\u3002":Ye?"\u5BE6\u7DDA\u6A19\u7C64\u662F\u539F\u6A21\u578B\u69CB\u9020\u6216\u539F\u6A21\u578B\u4E0A\u7684\u4F4D\u7F6E\uFF1B\u865B\u7DDA\u662F\u539F\u6A21\u578B\u6C92\u6709\u800C\u53E6\u756B\u7684\u793A\u610F\u3002\u6307\u7DDA\u53EF\u7A7F\u900F\u8868\u9762\u3002":"\u6A21\u578B\u6A19\u7C64\u3001\u5074\u6B04\u3001\u6D41\u7A0B\u6587\u5B57\u53CA\u8AAA\u660E\u540C\u6B65\u906E\u853D\u3002",j("detail-meta").replaceChildren(),!i)return;let e=document.createElement("span");e.textContent=$g[i.representation]+(i.quiz?" \xB7 \u5C0F\u8003\u7B2C "+i.quiz+" \u984C":""),j("detail-meta").append(e);let n=document.createElement("button");if(n.textContent="\u{1F50D} \u653E\u5927\u5230\u9019\u88E1",n.onclick=()=>Wh(i),j("detail-meta").append(n),!Ye)return;let s=(r,a)=>{let o=ze.find(l=>l.id===a);if(!o)return;let c=document.createElement("button");c.textContent=r+o.zh+" \u2192",c.onclick=()=>as(o),j("detail-meta").append(c)};for(let r of i.via)s("\u7A7F\u904E\uFF1A",r);for(let r of ze.filter(a=>a.via.includes(i.id)))s("\u901A\u904E\uFF1A",r.id)}function Wh(i){let t=i.point.clone(),e=new w().subVectors(t,Ae.target);re.position.add(e),Ae.target.copy(t),re.zoom=Math.min(9,Math.max(re.zoom*1.8,4.5)),re.updateProjectionMatrix(),Ae.update(),ni=!0}function r_(i){let t=`<b>${String(i.number).padStart(2,"0")}</b>`;return Ye?`${t}<div>${Cl!=="en"?`<div class="zh">${i.zh}</div>`:""}${Cl!=="zh"?`<div class="en">${i.en}</div>`:""}</div>`:t}function Ys(i){kh=i,j("leaders").classList.toggle("has-focus",!!i);for(let t of js){let e=t.l.id===i;t.group.classList.toggle("focused",e),t.el.classList.toggle("traced",e),t.dot.setAttribute("r",e?5:3.6),e&&j("leaders").append(t.group)}ni=!0}function tr(){let i=ze.filter(e=>e.groups.includes(nn));j("labels").replaceChildren(),j("leaders").replaceChildren();let t=e=>document.createElementNS("http://www.w3.org/2000/svg",e);js=i.map(e=>{let n=document.createElement("button");n.className="label "+(e.representation==="schematic"||e.representation==="reference"?"guide":"")+(Ue===e.id?" selected":""),n.dataset.id=e.id,n.innerHTML=r_(e),n.setAttribute("aria-label",Ye?e.zh:"\u9805\u76EE "+e.number),n.onclick=()=>as(e),n.onpointerenter=()=>Ys(e.id),n.onpointerleave=()=>Ys(Ue),n.onfocus=()=>Ys(e.id),n.onblur=()=>Ys(Ue),j("labels").append(n);let s=t("g"),r=t("line"),a=t("line"),o=t("circle");return s.dataset.id=e.id,r.classList.add("leader-halo"),a.classList.add("leader-main"),a.classList.toggle("guide",e.representation==="schematic"||e.representation==="reference"),o.setAttribute("r",3.6),s.append(r,a,o),j("leaders").append(s),{l:e,el:n,group:s,halo:r,line:a,dot:o}}),Ys(Ue),Rl()}function Rl(){let i=innerWidth<=700,t=Math.ceil(js.length/2);j("stage").style.minHeight=i?Math.max(480,t*51+46)+"px":Math.max(460,t*44+40)+"px";let e=j("stage").getBoundingClientRect();if(Sn=e.width,On=e.height,j("leaders").setAttribute("viewBox",`0 0 ${Sn} ${On}`),!bn)return;bn.setSize(Sn,On,!1);let n=Sn<500?On*.57:140;re.left=-n*Sn/On,re.right=n*Sn/On,re.top=n,re.bottom=-n,re.updateProjectionMatrix(),ni=!0}function a_(){if(!Sn||!re)return;re.updateMatrixWorld();let i=js.map(e=>(e.l.anchorMesh&&e.l.point.copy(e.l.localAnchor).applyMatrix4(e.l.anchorMesh.matrixWorld),Qa.copy(e.l.point).project(re),{...e,x:(Qa.x+1)*Sn/2,y:(1-Qa.y)*On/2,z:Qa.z}));if(!$s){let e=[...i].sort((s,r)=>s.x-r.x),n=Math.ceil(e.length/2);$s=[e.slice(0,n),e.slice(n)].map(s=>s.sort((r,a)=>r.y-a.y).map(r=>r.l.id))}let t=new Map(i.map(e=>[e.l.id,e]));for(let e=0;e<2;e++){let n=$s[e].map(o=>t.get(o)).filter(Boolean),s=n.map(o=>o.el.offsetHeight||34),r=s.reduce((o,c)=>o+c,0)+8*(n.length-1),a=Math.max(8,(On-r)/2);for(let o=0;o<n.length;o++){let c=n[o],l=c.el.offsetWidth,h=e?Sn-l-5:5;c.el.style.transform=`translate(${h}px,${a}px)`;let u=c.z>-1&&c.z<1&&c.x>=0&&c.x<=Sn&&c.y>=0&&c.y<=On,f=Al[Hh(c.l.anchorMesh||c.l.matches[0])].some(d=>d.distanceToPoint(c.l.point)<-2);c.group.style.display=u&&!f&&(!Ue||c.l.id===Ue||c.l.id===kh)?"":"none",c.el.classList.toggle("muted",!!Ue&&c.l.id!==Ue||f),c.el.classList.toggle("offscreen",!u);for(let d of[c.halo,c.line])d.setAttribute("x1",e?h:h+l),d.setAttribute("y1",a+s[o]/2),d.setAttribute("x2",c.x),d.setAttribute("y2",c.y);c.dot.setAttribute("cx",c.x),c.dot.setAttribute("cy",c.y),a+=s[o]+8}}}function Xh(i){Ye=i,document.body.classList.toggle("hidden-names",!i),j("hide").setAttribute("aria-pressed",!i),j("show").setAttribute("aria-pressed",i),i||(j("notes-dialog").close(),j("source-dialog").close()),j("flow").textContent=i?qs[nn].flow:"\u540D\u7A31\u8207\u8AAA\u660E\u5DF2\u96B1\u85CF \xB7 \u4FDD\u7559\u9805\u76EE\u7DE8\u865F\u4F9B\u81EA\u6E2C",Qs(),tr(),eo(ze.find(t=>t.id===Ue))}function o_(){if(!Ye){j("detail").querySelector("p").textContent="\u91CD\u9EDE\u6574\u7406\u542B\u7B54\u6848\uFF0C\u8ACB\u5148\u986F\u793A\u6240\u6709\u540D\u7A31\u3002";return}j("notes-content").innerHTML=Lh,j("notes-content").querySelectorAll("[data-go]").forEach(i=>i.onclick=()=>{j("notes-dialog").close(),as(i.dataset.go)}),j("notes-dialog").showModal()}j("views").innerHTML=Ch.map((i,t)=>`<button data-view="${i}">${String(t+1).padStart(2,"0")}\u3000${qs[i].title}</button>`).join("");j("hide").onclick=()=>Xh(!1);j("show").onclick=()=>Xh(!0);j("views").onclick=i=>{let t=i.target.closest("[data-view]");t&&Js(t.dataset.view)};j("search").oninput=Qs;j("reset").onclick=()=>Js(nn);j("camera-view").onchange=()=>Pl(j("camera-view").value);for(let i of["bone","cortex","nerve-dim","cut-y-v","cut-z-v","cut-x-v"])j(i).oninput=Ti;for(let i of["jaw","right","cerebellum","guides","cut-y","cut-z","cut-x",...["y","z","x"].flatMap(t=>Object.keys(rs).map(e=>`cut-${t}-${e}`))])j(i).onchange=Ti;for(let i of Object.keys(ii))j("cut-"+i+"-flip").onclick=()=>{Zs[i].keep=Zs[i].keep==="low"?"high":"low",j("cut-"+i).checked=!0,Ti()},j("cut-"+i+"-v").addEventListener("input",()=>{j("cut-"+i).checked||(j("cut-"+i).checked=!0,Ti())});j("language").onchange=()=>{Cl=j("language").value,tr()};j("clear").onclick=()=>{Ue=null,Ti(),Qs(),tr(),eo()};function l_(){let i=window.atlas.annulus[".l"].frame,t=new w(...i.centre),e=new w(...i.normal);Ks=!0,Vh.set(e.clone().negate(),e.dot(t)+1.5);for(let n of Object.keys(ii))j("cut-"+n).checked=!1;j("bone").value=0,j("cortex").value=0,re.position.copy(t).addScaledVector(e,700),re.up.set(0,1,0),re.zoom=9,re.updateProjectionMatrix(),re.lookAt(t),Gh(t),$s=null,j("orientation").textContent="\u6CBF\u7736\u8EF8\u5F9E\u524D\u65B9\u770B\u7736\u5C16 \xB7 \u5207\u9762\u5E73\u884C\u65BC\u5171\u540C\u8171\u74B0 \xB7 \u4E0A\u65B9\u5728\u4E0A",as("annulus")}j("apex-view").onclick=l_;j("source-button").onclick=()=>j("source-dialog").showModal();j("notes-button").onclick=o_;document.querySelectorAll("[data-close]").forEach(i=>i.onclick=()=>j(i.dataset.close).close());e_().catch(i=>{j("loading").textContent="\u6A21\u578B\u8F09\u5165\u5931\u6557\uFF1A"+i.message+"\u3002\u8ACB\u4F7F\u7528\u65B0\u7248 Chrome \u6216 Edge \u958B\u555F\u3002",console.error(i)});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
