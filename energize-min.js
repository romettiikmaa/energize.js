(function(){if("ontouchstart"in window){var d=function(a,b){return 10<Math.abs(a[0]-b[0])||10<Math.abs(a[1]-b[1])};document.addEventListener("touchstart",function(a){this.startXY=[a.touches[0].clientX,a.touches[0].clientY];this.treshold=!1},!1);document.addEventListener("touchmove",function(a){if(this.treshold)return!1;this.threshold=d(this.startXY,[a.touches[0].clientX,a.touches[0].clientY])},!1);document.addEventListener("touchend",function(a){if(!this.treshold&&!d(this.startXY,[a.changedTouches[0].clientX,
a.changedTouches[0].clientY])){var b=a.changedTouches[0],c=document.createEvent("MouseEvents");c.initMouseEvent("click",!0,!0,window,0,b.screenX,b.screenY,b.clientX,b.clientY,!1,!1,!1,!1,0,null);c.simulated=!0;a.target.dispatchEvent(c)}},!1);document.addEventListener("click",function(a){if(!a.simulated||window.navigator.standalone&&"A"===a.target.nodeName&&a.target.getAttribute("href"))a.preventDefault(),a.stopPropagation();if(window.navigator.standalone&&"A"===a.target.nodeName&&a.target.getAttribute("href"))window.location=
a.target.getAttribute("href")},!0)}})();