import{f as o,P as n}from"./index.45b28418.js";var e="".concat("accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap"," ").concat("onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError").split(/[\s\n]+/);function a(o,n){return 0===o.indexOf(n)}function t(n){var t,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t=!1===r?{aria:!0,data:!0,attr:!0}:!0===r?{aria:!0}:o({},r);var i={};return Object.keys(n).forEach((function(o){(t.aria&&("role"===o||a(o,"aria-"))||t.data&&a(o,"data-")||t.attr&&e.includes(o))&&(i[o]=n[o])})),i}n("bottomLeft","bottomRight","topLeft","topRight");var r=function(o){return void 0===o||"topLeft"!==o&&"topRight"!==o?"slide-up":"slide-down"},i=function(o,n,e){return void 0!==e?e:"".concat(o,"-").concat(n)};export{r as a,i as g,t as p};
