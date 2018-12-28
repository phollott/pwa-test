class t{constructor(t,e,s,r,i){this.id=e,this.name=s,this.disableScroll=i,this.priority=1e6*r+e,this.ctrl=t}canStart(){return!!this.ctrl&&this.ctrl.canStart(this.name)}start(){return!!this.ctrl&&this.ctrl.start(this.name,this.id,this.priority)}capture(){if(!this.ctrl)return!1;const t=this.ctrl.capture(this.name,this.id,this.priority);return t&&this.disableScroll&&this.ctrl.disableScroll(this.id),t}release(){this.ctrl&&(this.ctrl.release(this.id),this.disableScroll&&this.ctrl.enableScroll(this.id))}destroy(){this.release(),this.ctrl=void 0}}class e{constructor(t,e,s,r){this.id=e,this.disable=s,this.disableScroll=r,this.ctrl=t}block(){if(this.ctrl){if(this.disable)for(const t of this.disable)this.ctrl.disableGesture(t,this.id);this.disableScroll&&this.ctrl.disableScroll(this.id)}}unblock(){if(this.ctrl){if(this.disable)for(const t of this.disable)this.ctrl.enableGesture(t,this.id);this.disableScroll&&this.ctrl.enableScroll(this.id)}}destroy(){this.unblock(),this.ctrl=void 0}}const s=new class{constructor(t){this.doc=t,this.gestureId=0,this.requestedStart=new Map,this.disabledGestures=new Map,this.disabledScroll=new Set}createGesture(e){return new t(this,this.newID(),e.name,e.priority||0,!!e.disableScroll)}createBlocker(t={}){return new e(this,this.newID(),t.disable,!!t.disableScroll)}start(t,e,s){return this.canStart(t)?(this.requestedStart.set(e,s),!0):(this.requestedStart.delete(e),!1)}capture(t,e,s){if(!this.start(t,e,s))return!1;const r=this.requestedStart;let i=-1e4;if(r.forEach(t=>{i=Math.max(i,t)}),i===s){this.capturedId=e,r.clear();const s=new CustomEvent("ionGestureCaptured",{detail:{gestureName:t}});return this.doc.dispatchEvent(s),!0}return r.delete(e),!1}release(t){this.requestedStart.delete(t),this.capturedId===t&&(this.capturedId=void 0)}disableGesture(t,e){let s=this.disabledGestures.get(t);void 0===s&&(s=new Set,this.disabledGestures.set(t,s)),s.add(e)}enableGesture(t,e){const s=this.disabledGestures.get(t);void 0!==s&&s.delete(e)}disableScroll(t){this.disabledScroll.add(t),1===this.disabledScroll.size&&this.doc.body.classList.add("backdrop-no-scroll")}enableScroll(t){this.disabledScroll.delete(t),0===this.disabledScroll.size&&this.doc.body.classList.remove("backdrop-no-scroll")}canStart(t){return void 0===this.capturedId&&!this.isDisabled(t)}isCaptured(){return void 0!==this.capturedId}isScrollDisabled(){return this.disabledScroll.size>0}isDisabled(t){const e=this.disabledGestures.get(t);return!!(e&&e.size>0)}newID(){return this.gestureId++,this.gestureId}}(document);let r;function i(t,e,s,i){const n=function(t){if(void 0===r)try{const e=Object.defineProperty({},"passive",{get:()=>{r=!0}});t.addEventListener("optsTest",()=>{},e)}catch(t){r=!1}return!!r}(t)?{capture:!!i.capture,passive:!!i.passive}:!!i.capture;let c,o;return t.__zone_symbol__addEventListener?(c="__zone_symbol__addEventListener",o="__zone_symbol__removeEventListener"):(c="addEventListener",o="removeEventListener"),t[c](e,s,n),()=>{t[o](e,s,n)}}const n=2e3;function c(t){return t instanceof Document?t:t.ownerDocument}function o(t){const e=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},t),r=e.canStart,o=e.onWillStart,u=e.onStart,h=e.onEnd,b=e.notCaptured,p=e.onMove,S=e.threshold,f=e.queue,v={type:"pan",startX:0,startY:0,startTimeStamp:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,timeStamp:0,event:void 0,data:void 0},m=function(t,e,s,r,o){let l,a,d,u,h,b,p,S=0;function f(r){S=Date.now()+n,e(r)&&(!a&&s&&(a=i(t,"touchmove",s,o)),d||(d=i(t,"touchend",m,o)),u||(u=i(t,"touchcancel",m,o)))}function v(r){S>Date.now()||e(r)&&(!b&&s&&(b=i(c(t),"mousemove",s,o)),p||(p=i(c(t),"mouseup",y,o)))}function m(t){X(),r&&r(t)}function y(t){Y(),r&&r(t)}function X(){a&&a(),d&&d(),u&&u(),a=d=u=void 0}function Y(){b&&b(),p&&p(),b=p=void 0}function g(){X(),Y()}function w(e){e?(l&&l(),h&&h(),l=h=void 0,g()):(l||(l=i(t,"touchstart",f,o)),h||(h=i(t,"mousedown",v,o)))}return{setDisabled:w,stop:g,destroy:function(){w(!0),r=s=e=void 0}}}(e.el,function(t){const e=d(t);return!(g||!w)&&(a(t,v),v.startX=v.currentX,v.startY=v.currentY,v.startTimeStamp=v.timeStamp=e,v.velocityX=v.velocityY=v.deltaX=v.deltaY=0,v.event=t,(!r||!1!==r(v))&&(X.release(),!!X.start()&&(g=!0,0===S?G():(y.start(v.startX,v.startY),!0))))},function(t){Y?!D&&w&&(D=!0,l(v,t),f.write(_)):(l(v,t),y.detect(v.currentX,v.currentY)&&(y.isGesture()&&G()||(E(),m.stop(),b&&b(v))))},L,{capture:!1}),y=function(t,s,r){const i=e.maxAngle*(Math.PI/180),n="x"===e.direction,c=Math.cos(i),o=s*s;let l=0,a=0,d=!1,u=0;return{start(t,e){l=t,a=e,u=0,d=!0},detect(t,e){if(!d)return!1;const s=t-l,r=e-a,i=s*s+r*r;if(i<o)return!1;const h=Math.sqrt(i),b=(n?s:r)/h;return u=b>c?1:b<-c?-1:0,d=!1,!0},isGesture:()=>0!==u,getDirection:()=>u}}(0,e.threshold),X=s.createGesture({name:t.gestureName,priority:t.gesturePriority,disableScroll:t.disableScroll});let Y=!1,g=!1,w=!0,D=!1;function _(){Y&&(D=!1,p&&p(v))}function G(){return!(X&&!X.capture()||(Y=!0,w=!1,v.startX=v.currentX,v.startY=v.currentY,v.startTimeStamp=v.timeStamp,o?o(v).then(I):I(),0))}function I(){u&&u(v),w=!0}function E(){Y=!1,g=!1,D=!1,w=!0,X.release()}function L(t){const e=Y,s=w;E(),s&&(l(v,t),e?h&&h(v):b&&b(v))}return{setDisabled(t){t&&Y&&L(void 0),m.setDisabled(t)},destroy(){X.destroy(),m.destroy()}}}function l(t,e){if(!e)return;const s=t.currentX,r=t.currentY,i=t.timeStamp;a(e,t);const n=t.currentX,c=t.currentY,o=(t.timeStamp=d(e))-i;if(o>0&&o<100){const e=(c-r)/o;t.velocityX=(n-s)/o*.7+.3*t.velocityX,t.velocityY=.7*e+.3*t.velocityY}t.deltaX=n-t.startX,t.deltaY=c-t.startY,t.event=e}function a(t,e){let s=0,r=0;if(t){const e=t.changedTouches;if(e&&e.length>0){const t=e[0];s=t.clientX,r=t.clientY}else void 0!==t.pageX&&(s=t.pageX,r=t.pageY)}e.currentX=s,e.currentY=r}function d(t){return t.timeStamp||Date.now()}export{o as createGesture};