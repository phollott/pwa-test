const t=window.App.h;import{a as e,b as i,c as s}from"./chunk-0f8926dc.js";import{a as n,b as o}from"./chunk-2abae55f.js";class a{constructor(){this.state=!1}formattedName(){return this.name?this.name.substr(0,1).toUpperCase()+this.name.substr(1).toLowerCase():""}render(){return[t("ion-header",null,t("ion-toolbar",{color:"primary"},t("ion-buttons",{slot:"start"},t("ion-back-button",{defaultHref:"/"})),t("ion-title",null,"Profile: ",this.name))),t("ion-content",{padding:!0},t("p",null,Math.random()<.5?"Hello":"Hola","! My name is ",this.formattedName(),". My name was passed in through a route param!"),t("ion-item",null,t("ion-label",null,"Setting (",this.state.toString(),")"),t("ion-toggle",{checked:this.state,onIonChange:t=>this.state=t.detail.checked})))]}static get is(){return"app-profile"}static get properties(){return{name:{type:String,attr:"name"},state:{state:!0}}}static get style(){return""}}class l{async onClick(t){const e=this.el.closest("ion-nav");return t.preventDefault(),e&&await e.canGoBack()?e.pop({skipIfBusy:!0}):i(this.win,this.defaultHref,t,"back")}hostData(){const t=void 0!==this.defaultHref;return{class:Object.assign({},e(this.color),{button:!0,"ion-activatable":!0,"show-back-button":t})}}render(){const e="ios"===this.mode?"Back":null,i=null!=this.icon?this.icon:this.config.get("backButtonIcon","arrow-back"),s=null!=this.text?this.text:this.config.get("backButtonText",e);return t("button",{type:"button",class:"button-native",onClick:t=>this.onClick(t)},t("span",{class:"button-inner"},i&&t("ion-icon",{icon:i,lazy:!1}),s&&t("span",{class:"button-text"},s)),"md"===this.mode&&t("ion-ripple-effect",{type:"unbounded"}))}static get is(){return"ion-back-button"}static get encapsulation(){return"scoped"}static get properties(){return{color:{type:String,attr:"color"},config:{context:"config"},defaultHref:{type:String,attr:"default-href"},el:{elementRef:!0},icon:{type:String,attr:"icon"},mode:{type:String,attr:"mode"},text:{type:String,attr:"text"},win:{context:"window"}}}static get style(){return".sc-ion-back-button-md-h{--background:transparent;--ripple-color:currentColor;--transition:background-color,opacity 100ms linear;--opacity:1;display:none;color:var(--color);font-family:var(--ion-font-family,inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-kerning:none;font-kerning:none}.ion-color.sc-ion-back-button-md-h   .button-native.sc-ion-back-button-md{color:var(--ion-color-base)}.activated.sc-ion-back-button-md-h   .button-native.sc-ion-back-button-md{opacity:.4}.show-back-button.sc-ion-back-button-md-h, .can-go-back.sc-ion-back-button-md-h > ion-header.sc-ion-back-button-md, .can-go-back > ion-header   .sc-ion-back-button-md-h{display:block}.button-native.sc-ion-back-button-md{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:var(--margin-top) var(--margin-end) var(--margin-bottom) var(--margin-start);padding:var(--padding-top) var(--padding-end) var(--padding-bottom) var(--padding-start);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;min-width:var(--min-width);min-height:var(--min-height);-webkit-transition:var(--transition);transition:var(--transition);border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;opacity:var(--opacity);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.button-inner.sc-ion-back-button-md{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}ion-icon.sc-ion-back-button-md{padding:var(--icon-padding-top) var(--icon-padding-end) var(--icon-padding-bottom) var(--icon-padding-start);margin:var(--icon-margin-top) var(--icon-margin-end) var(--icon-margin-bottom) var(--icon-margin-start);display:inherit;font-size:var(--icon-font-size);font-weight:var(--icon-font-weight);pointer-events:none}.sc-ion-back-button-md-h{--color:currentColor;--margin-top:1px;--margin-end:6px;--margin-bottom:0;--margin-start:0;--padding-top:0;--padding-end:5px;--padding-bottom:0;--padding-start:5px;--min-height:32px;--min-width:44px;--icon-padding-end:.3em;--icon-padding-start:.3em;--icon-margin-top:0;--icon-margin-end:6px;--icon-margin-bottom:0;--icon-margin-start:6px;--icon-font-size:24px;--icon-font-weight:normal;font-size:14px;font-weight:500;text-transform:uppercase}.button-native.sc-ion-back-button-md{-webkit-box-shadow:none;box-shadow:none}ion-icon.sc-ion-back-button-md{line-height:.67;text-align:start}"}static get styleMode(){return"md"}}class r{static get is(){return"ion-buttons"}static get encapsulation(){return"scoped"}static get style(){return".sc-ion-buttons-md-h{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:99}.sc-ion-buttons-md-s  ion-button {--padding-start:0;--padding-end:0;--overflow:visible;margin:0;margin-left:2px;margin-right:2px;--padding-top:0;--padding-bottom:0;--padding-start:8px;--padding-end:8px;--box-shadow:none;height:32px;font-size:14px;font-weight:500}.sc-ion-buttons-md-s  ion-button:not(.button-round) {--border-radius:2px}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s  .button , .ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s  .button {--color:initial;--color-activated:initial;--color-focused:initial;--background-focused:rgba(var(--ion-color-primary-contrast-rgb,255,255,255),0.1)}.sc-ion-buttons-md-s  .button-solid {--color:var(--ion-toolbar-background,var(--ion-background-color,#fff));--color-activated:var(--ion-toolbar-background,var(--ion-background-color,#fff));--background:var(--ion-toolbar-color,var(--ion-text-color,#424242));--background-activated:var(--ion-toolbar-color,var(--ion-text-color,#424242))}.sc-ion-buttons-md-s  .button-outline {--color:initial;--color-activated:currentColor;--background:transparent;--background-activated:transparent;--border-color:currentColor}.sc-ion-buttons-md-s  .button-clear {--color:initial;--color-activated:currentColor;--background:transparent}.sc-ion-buttons-md-s  ion-icon[slot=start] {margin:0;margin-right:.3em;font-size:1.4em}.sc-ion-buttons-md-s  ion-icon[slot=end] {margin:0;margin-left:.4em;font-size:1.4em}.sc-ion-buttons-md-s  ion-icon[slot=icon-only] {padding:0;margin:0;font-size:1.8em}"}static get styleMode(){return"md"}}class c{constructor(){this.itemStyles=new Map,this.multipleInputs=!1,this.button=!1,this.detailIcon="ios-arrow-forward",this.disabled=!1,this.routerDirection="forward",this.type="button"}itemStyle(t){t.stopPropagation();const e=t.target.tagName,i=t.detail,s={},n=this.itemStyles.get(e)||{};let o=!1;Object.keys(i).forEach(t=>{const e=`item-${t}`,a=i[t];a!==n[e]&&(o=!0),a&&(s[e]=!0)}),o&&(this.itemStyles.set(e,s),this.el.forceUpdate())}componentDidLoad(){Array.from(this.el.querySelectorAll("ion-button")).forEach(t=>{void 0===t.size&&(t.size="small")});const t=this.el.querySelectorAll("ion-select, ion-datetime");this.multipleInputs=t.length>1}isClickable(){return void 0!==this.href||this.button}hostData(){const t={};return this.itemStyles.forEach(e=>{Object.assign(t,e)}),{"aria-disabled":this.disabled?"true":null,class:Object.assign({},t,e(this.color),{[`item-lines-${this.lines}`]:void 0!==this.lines,"item-disabled":this.disabled,"in-list":s("ion-list",this.el),item:!0,"item-multiple-inputs":this.multipleInputs,"ion-activatable":this.isClickable()})}}render(){const{href:e,detail:s,mode:n,win:o,detailIcon:a,routerDirection:l,type:r}=this,c=this.isClickable(),h=c?void 0===e?"button":"a":"div",d=void 0!==s?s:"ios"===n&&c;return[t(h,Object.assign({},"button"===h?{type:r}:{href:e},{class:"item-native",onClick:t=>i(o,e,t,l)}),t("slot",{name:"start"}),t("div",{class:"item-inner"},t("div",{class:"input-wrapper"},t("slot",null)),t("slot",{name:"end"}),d&&t("ion-icon",{icon:a,lazy:!1,class:"item-detail-icon"}),t("div",{class:"item-inner-highlight"})),c&&"md"===n&&t("ion-ripple-effect",null)),t("div",{class:"item-highlight"})]}static get is(){return"ion-item"}static get encapsulation(){return"shadow"}static get properties(){return{button:{type:Boolean,attr:"button"},color:{type:String,attr:"color"},detail:{type:Boolean,attr:"detail"},detailIcon:{type:String,attr:"detail-icon"},disabled:{type:Boolean,attr:"disabled"},el:{elementRef:!0},href:{type:String,attr:"href"},lines:{type:String,attr:"lines"},mode:{type:String,attr:"mode"},multipleInputs:{state:!0},routerDirection:{type:String,attr:"router-direction"},type:{type:String,attr:"type"},win:{context:"window"}}}static get listeners(){return[{name:"ionStyle",method:"itemStyle"}]}static get style(){return":host{--border-radius:0px;--border-width:0px;--border-style:solid;--padding-top:0px;--padding-bottom:0px;--padding-end:0px;--padding-start:0px;--box-shadow:none;--inner-border-width:0px;--inner-padding-top:0px;--inner-padding-bottom:0px;--inner-padding-start:0px;--inner-padding-end:0px;--inner-box-shadow:none;--show-full-highlight:0;--show-inset-highlight:0;--detail-icon-color:initial;--detail-icon-font-size:20px;--detail-icon-opacity:0.25;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;outline:none;color:var(--color);font-family:var(--ion-font-family,inherit);text-align:initial;text-decoration:none;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.ion-color) .item-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.ion-color) .item-inner,:host(.ion-color) .item-native{border-color:var(--ion-color-shade)}:host(.activated) .item-native{background:var(--background-activated)}:host(.ion-color.activated) .item-native{background:var(--ion-color-tint)}:host(.item-disabled){cursor:default;opacity:.3;pointer-events:none}.item-native{border-radius:var(--border-radius);margin:0;padding:var(--padding-top) var(--padding-end) var(--padding-bottom) calc(var(--padding-start) + var(--ion-safe-area-left, 0px));font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}a,button{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}.item-inner{margin:0;padding:var(--inner-padding-top) calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end)) var(--inner-padding-bottom) var(--inner-padding-start);display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;min-height:inherit;border-width:var(--inner-border-width);border-style:var(--border-style);border-color:var(--border-color);-webkit-box-shadow:var(--inner-box-shadow);box-shadow:var(--inner-box-shadow);overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}.item-detail-icon{color:var(--detail-icon-color);font-size:var(--detail-icon-font-size);opacity:var(--detail-icon-opacity)}::slotted(ion-icon){font-size:1.6em}::slotted(ion-button){--margin-top:0;--margin-bottom:0;--margin-start:0;--margin-end:0;z-index:1}::slotted(ion-label){-ms-flex:1;flex:1}:host(.item-input),:host([vertical-align-top]){-ms-flex-align:start;align-items:flex-start}.input-wrapper{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;text-overflow:ellipsis;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.item-label-floating) .input-wrapper,:host(.item-label-stacked) .input-wrapper{-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column}.item-highlight,.item-inner-highlight{left:0;right:0;bottom:0;position:absolute;background:var(--highlight-background)}.item-highlight{height:var(--full-highlight-height)}.item-inner-highlight{height:var(--inset-highlight-height)}:host(.item-interactive.item-has-focus){--highlight-background:var(--highlight-color-focused);--full-highlight-height:calc(var(--highlight-height) * var(--show-full-highlight));--inset-highlight-height:calc(var(--highlight-height) * var(--show-inset-highlight))}:host(.item-interactive.ion-valid){--highlight-background:var(--highlight-color-valid)}:host(.item-interactive.ion-invalid){--highlight-background:var(--highlight-color-invalid)}:host(.item-label-floating) ::slotted(ion-select),:host(.item-label-stacked) ::slotted(ion-select){--padding-start:0;-ms-flex-item-align:stretch;align-self:stretch;width:100%;max-width:100%}:host(.item-label-floating) ::slotted(ion-datetime),:host(.item-label-stacked) ::slotted(ion-datetime){--padding-start:0;width:100%}:host(.item-multiple-inputs) ::slotted(ion-datetime),:host(.item-multiple-inputs) ::slotted(ion-select){position:relative}:host(.item-textarea){-ms-flex-align:stretch;align-items:stretch}::slotted(ion-reorder[slot]){margin-top:0;margin-bottom:0}:host{--min-height:48px;--background:var(--ion-item-background,var(--ion-background-color,#fff));--background-activated:var(--background);--transition:background-color 300ms cubic-bezier(.4,0,.2,1);--padding-start:16px;--color:var(--ion-item-color,var(--ion-text-color,#000));--border-color:var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,0.13))));--inner-padding-end:16px;--inner-border-width:0 0 1px 0;--highlight-height:2px;--highlight-color-focused:var(--ion-color-primary,#3880ff);--highlight-color-valid:var(--ion-color-success,#10dc60);--highlight-color-invalid:var(--ion-color-danger,#f04141);font-size:16px;font-weight:400;text-transform:none}:host(.item-interactive){--inner-border-width:0}:host(.item-interactive),:host(.item-lines-full){--border-width:0 0 1px 0;--show-full-highlight:1;--show-inset-highlight:0}:host(.item-lines-inset){--inner-border-width:0 0 1px 0;--show-full-highlight:0;--show-inset-highlight:1}:host(.item-lines-inset),:host(.item-lines-none){--border-width:0;--show-full-highlight:0}:host(.item-lines-full),:host(.item-lines-none){--inner-border-width:0;--show-inset-highlight:0}:host(.item-multi-line) ::slotted([slot=end]),:host(.item-multi-line) ::slotted([slot=start]){margin-top:16px;margin-bottom:16px;-ms-flex-item-align:start;align-self:flex-start}::slotted(:not(.interactive)[slot=start]){margin-right:32px}::slotted(:not(.interactive)[slot=end]){margin-left:32px}::slotted(ion-icon){color:rgba(var(--ion-text-color-rgb,0,0,0),.54);font-size:24px}::slotted(ion-icon[slot]){margin-top:12px;margin-bottom:12px}::slotted(ion-icon[slot=start]){margin-right:32px}::slotted(ion-icon[slot=end]){margin-left:16px}::slotted(ion-note){margin:0;-ms-flex-item-align:start;align-self:flex-start;font-size:11px}::slotted(ion-note[slot]){padding:18px 0 10px}::slotted(ion-note[slot=start]){padding-right:16px}::slotted(ion-note[slot=end]){padding-left:16px}::slotted(ion-avatar){width:40px;height:40px}::slotted(ion-thumbnail){width:56px;height:56px}::slotted(ion-avatar),::slotted(ion-thumbnail){margin-top:8px;margin-bottom:8px}::slotted(ion-avatar[slot=start]),::slotted(ion-thumbnail[slot=start]){margin-right:16px}::slotted(ion-avatar[slot=end]),::slotted(ion-thumbnail[slot=end]){margin-left:16px}::slotted(ion-label){margin:11px 0 10px}:host(.item-label-floating) ::slotted([slot=end]),:host(.item-label-stacked) ::slotted([slot=end]){margin-top:7px;margin-bottom:7px}:host(.item-radio) ::slotted(ion-label),:host(.item-toggle) ::slotted(ion-label){margin-left:0}::slotted(.button-small){--padding-top:0;--padding-bottom:0;--padding-start:.6em;--padding-end:.6em;height:25px;font-size:12px}:host(.item-label-floating),:host(.item-label-stacked){--min-height:65px}:host(.item-label-floating) ::slotted(ion-input),:host(.item-label-floating) ::slotted(ion-select),:host(.item-label-floating) ::slotted(ion-textarea),:host(.item-label-stacked) ::slotted(ion-input),:host(.item-label-stacked) ::slotted(ion-select),:host(.item-label-stacked) ::slotted(ion-textarea){--padding-top:8px;--padding-bottom:8px;--padding-start:0}:host(:not(.item-label)) ::slotted(ion-input),:host(:not(.item-label)) ::slotted(ion-textarea){--padding-start:0}:host(.item-has-focus:not(.ion-color)) ::slotted(.label-floating),:host(.item-has-focus:not(.ion-color)) ::slotted(.label-stacked){color:var(--ion-color-primary,#3880ff)}"}static get styleMode(){return"md"}}class h{constructor(){this.noAnimate=!1}componentWillLoad(){this.noAnimate="floating"===this.position,this.emitStyle()}componentDidLoad(){this.noAnimate&&setTimeout(()=>{this.noAnimate=!1},1e3)}positionChanged(){this.emitStyle()}emitStyle(){const t=this.position;this.ionStyle.emit({label:!0,[`label-${t}`]:void 0!==t})}hostData(){const t=this.position;return{class:Object.assign({},e(this.color),{[`label-${t}`]:void 0!==t,"label-no-animate":this.noAnimate})}}static get is(){return"ion-label"}static get encapsulation(){return"scoped"}static get properties(){return{color:{type:String,attr:"color"},el:{elementRef:!0},mode:{type:String,attr:"mode"},noAnimate:{state:!0},position:{type:String,attr:"position",watchCallbacks:["positionChanged"]}}}static get events(){return[{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return".item.sc-ion-label-md-h, .item   .sc-ion-label-md-h{--color:initial;display:block;color:var(--color);font-family:var(--ion-font-family,inherit);font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-label-md-h{color:var(--ion-color-base)}[text-wrap].sc-ion-label-md-h{white-space:normal}.item-interactive-disabled.sc-ion-label-md-h, .item-interactive-disabled   .sc-ion-label-md-h{cursor:default;opacity:.3;pointer-events:none}.item-input.sc-ion-label-md-h, .item-input   .sc-ion-label-md-h{-ms-flex:initial;flex:initial;max-width:200px;pointer-events:none}.label-fixed.sc-ion-label-md-h{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}.label-floating.sc-ion-label-md-h, .label-stacked.sc-ion-label-md-h{-ms-flex-item-align:stretch;align-self:stretch;width:auto;max-width:100%}.item-has-focus.label-floating.sc-ion-label-md-h, .item-has-focus   .label-floating.sc-ion-label-md-h, .item-has-placeholder.label-floating.sc-ion-label-md-h, .item-has-placeholder   .label-floating.sc-ion-label-md-h, .item-has-value.label-floating.sc-ion-label-md-h, .item-has-value   .label-floating.sc-ion-label-md-h{-webkit-transform:translateZ(0) scale(.8);transform:translateZ(0) scale(.8)}.label-no-animate.label-floating.sc-ion-label-md-h{-webkit-transition:none;transition:none}[text-wrap].sc-ion-label-md-h{line-height:1.5}.label-stacked.sc-ion-label-md-h{font-size:12.8px}.label-floating.sc-ion-label-md-h{-webkit-transform:translate3d(0,27px,0);transform:translate3d(0,27px,0);-webkit-transform-origin:left top;transform-origin:left top;-webkit-transition:-webkit-transform .15s ease-in-out;transition:-webkit-transform .15s ease-in-out;transition:transform .15s ease-in-out;transition:transform .15s ease-in-out,-webkit-transform .15s ease-in-out}.label-floating.sc-ion-label-md-h, .label-stacked.sc-ion-label-md-h{margin-left:0;margin-bottom:0}.sc-ion-label-md-s  h1 {margin:0 0 2px;font-size:24px;font-weight:400}.sc-ion-label-md-s  h2 {margin:2px 0;font-size:16px;font-weight:400}.sc-ion-label-md-s  h3 , .sc-ion-label-md-s  h4 , .sc-ion-label-md-s  h5 , .sc-ion-label-md-s  h6 {margin:2px 0;font-size:14px;font-weight:400;line-height:normal}.sc-ion-label-md-s  p {margin:0 0 2px;font-size:14px;line-height:20px;text-overflow:inherit;overflow:inherit}.sc-ion-label-md-s > p{color:var(--ion-color-step-600,#666)}.sc-ion-label-md-h.ion-color.sc-ion-label-md-s > p, .ion-color .sc-ion-label-md-h.sc-ion-label-md-s > p{color:inherit}"}static get styleMode(){return"md"}}function d(){const t=window.TapticEngine;t&&t.selection()}class u{constructor(){this.inputId=`ion-tg-${m++}`,this.pivotX=0,this.activated=!1,this.keyFocus=!1,this.name=this.inputId,this.checked=!1,this.disabled=!1,this.value="on"}checkedChanged(t){this.ionChange.emit({checked:t,value:this.value})}disabledChanged(){this.emitStyle(),this.gesture&&this.gesture.setDisabled(this.disabled)}onClick(){this.checked=!this.checked}onKeyUp(){this.keyFocus=!0}onFocus(){this.ionFocus.emit()}onBlur(){this.keyFocus=!1,this.ionBlur.emit()}componentWillLoad(){this.emitStyle()}async componentDidLoad(){this.gesture=(await import("./gesture.js")).createGesture({el:this.el,queue:this.queue,gestureName:"toggle",gesturePriority:100,threshold:0,onStart:t=>this.onStart(t),onMove:t=>this.onMove(t),onEnd:t=>this.onEnd(t)}),this.disabledChanged()}emitStyle(){this.ionStyle.emit({"interactive-disabled":this.disabled})}onStart(t){return this.pivotX=t.currentX,this.activated=!0,t.event.preventDefault(),!0}onMove(t){const e=t.currentX;p(this.checked,e-this.pivotX,-15)&&(this.checked=!this.checked,this.pivotX=e,d())}onEnd(t){p(this.checked,t.currentX-this.pivotX,4)&&(this.checked=!this.checked,d()),this.activated=!1}getValue(){return this.value||""}hostData(){const t=this.inputId+"-lbl",i=n(this.el);return i&&(i.id=t),{role:"checkbox",tabindex:"0","aria-disabled":this.disabled?"true":null,"aria-checked":`${this.checked}`,"aria-labelledby":t,class:Object.assign({},e(this.color),{"in-item":s("ion-item",this.el),"toggle-activated":this.activated,"toggle-checked":this.checked,"toggle-disabled":this.disabled,"toggle-key":this.keyFocus,interactive:!0})}}render(){const e=this.getValue();return o(!0,this.el,this.name,this.checked?e:"",this.disabled),t("div",{class:"toggle-icon"},t("div",{class:"toggle-inner"}))}static get is(){return"ion-toggle"}static get encapsulation(){return"shadow"}static get properties(){return{activated:{state:!0},checked:{type:Boolean,attr:"checked",mutable:!0,watchCallbacks:["checkedChanged"]},color:{type:String,attr:"color"},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},el:{elementRef:!0},keyFocus:{state:!0},mode:{type:String,attr:"mode"},name:{type:String,attr:"name"},queue:{context:"queue"},value:{type:String,attr:"value"}}}static get events(){return[{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0},{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0}]}static get listeners(){return[{name:"click",method:"onClick"},{name:"keyup",method:"onKeyUp"},{name:"focus",method:"onFocus"},{name:"blur",method:"onBlur"}]}static get style(){return":host{-webkit-box-sizing:content-box!important;box-sizing:content-box!important;display:inline-block;outline:none;contain:content;cursor:pointer;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.toggle-key) input{border:2px solid #5e9ed6}:host(.toggle-disabled),input{pointer-events:none}input{left:0;top:0;margin:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host{--background:var(--ion-color-medium-tint,#a2a4ab);--background-checked:rgba(var(--ion-color-primary-rgb,56,128,255),0.5);--handle-background:var(--ion-background-color,#fff);--handle-background-checked:var(--ion-color-primary,#3880ff);padding:12px;-webkit-box-sizing:content-box;box-sizing:content-box;position:relative;width:36px;height:14px;contain:strict}:host(.ion-color.toggle-checked) .toggle-icon{background:rgba(var(--ion-color-base-rgb),.5)}:host(.ion-color.toggle-checked) .toggle-inner{background:var(--ion-color-base)}.toggle-icon{border-radius:14px;display:block;position:relative;width:100%;height:100%;-webkit-transition:background-color .16s;transition:background-color .16s;background:var(--background);pointer-events:none}.toggle-inner{left:0;top:-3px;border-radius:50%;position:absolute;width:20px;height:20px;-webkit-transition-duration:.16s;transition-duration:.16s;-webkit-transition-property:background-color,-webkit-transform;transition-property:background-color,-webkit-transform;transition-property:transform,background-color;transition-property:transform,background-color,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);background:var(--handle-background);-webkit-box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);will-change:transform,background-color;contain:strict}:host(.toggle-checked) .toggle-icon{background:var(--background-checked)}:host(.toggle-checked) .toggle-inner{-webkit-transform:translate3d(16px,0,0);transform:translate3d(16px,0,0);background:var(--handle-background-checked)}:host(.toggle-disabled){opacity:.3}:host(.in-item[slot]){margin:0;padding:12px 0 12px 16px;cursor:pointer}:host(.in-item[slot=start]){padding:12px 18px 12px 2px}"}static get styleMode(){return"md"}}function p(t,e,i){const s="rtl"===document.dir;return t?!s&&i>e||s&&-i<e:!s&&-i<e||s&&i>e}let m=0;export{a as AppProfile,l as IonBackButton,r as IonButtons,c as IonItem,h as IonLabel,u as IonToggle};