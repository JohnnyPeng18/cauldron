!function(){"use strict";function n(n,t){var i=[];n.forEach(function(n){"plotly"===n&&i.push(window.Plotly)}),t.apply(this,i)}function t(){var n=window.PROJECT_DIRECTORY,t=e.PARAMS.id,i=e.PARAMS.sid;return n||(n="reports/"+t,n+=i?"/snapshots/"+i:"/latest"),e.DATA_DIRECTORY=n,n}function i(){var n=e.PARAMS.sid,t=$("body");return n?($("<div></div>").addClass("snapshot-bar").text("Snapshot: "+e.PARAMS.sid).prependTo(t),$("<div></div>").addClass("snapshot-bar").addClass("snapshot-bar-overlay").text("Snapshot: "+e.PARAMS.sid).prependTo(t),void(e.TITLE="{"+n+"} "+e.TITLE)):!1}function o(){var n;return t(),n=window.RESULTS?Promise.resolve():e.loadSourceFile({name:"cauldron-project",src:"/results.js"}),n.then(function(){return e.RESULTS=window.RESULTS,e.DATA=window.RESULTS.data,e.SETTINGS=window.RESULTS.settings,e.TITLE=e.SETTINGS.title||e.SETTINGS.id||id,e.loadSourceFiles(window.RESULTS.includes)}).then(function(){return e.loadStepIncludes(e.RESULTS.steps)}).then(function(){var n=$(".body-wrapper");return window.RESULTS.steps.forEach(function(t){var i=e.prepareStepBody(t);i&&n.append(i)}),$(window).trigger("resize"),e.DATA})}var e=window.CAULDRON||{};window.CAULDRON=e,e.resizeCallbacks=[],window.require=n,e.addSnapshotBar=i,e.initialize=o}();
!function(){"use strict";function d(){var d=$(r.join("")).prependTo($(".body-wrapper"));i.RESULTS.has_error&&d.addClass("project-error");d.find(".buttons")}var i=window.CAULDRON||{};window.CAULDRON=i;var r=['<div class="cd-body-header">','<div class="menu-icon"></div>','<div class="project-title"></div>','<div class="spacer"></div>','<div class="buttons"></div>',"</div>"];i.createHeader=d}();
!function(){"use strict";function o(o){var a=$("a[name='"+o+"']");$("html,body").animate({scrollTop:a.offset().top},"slow")}function a(o){$(o).toggle()}function s(o){var a=$("#"+o),s=a.hasClass("closed"),e=a.attr("data-"+(s?"opens":"closes")),t=a.attr("data-marks-"+(s?"opened":"closed"))||"";return t=t.split("|").map(function(o){return $(o)}),t.push(a),t.forEach(function(o){s?o.removeClass("closed").addClass("opened"):o.removeClass("opened").addClass("closed")}),e?(e.split("|").forEach(function(o){o=$(o),s?(o.show(),a.removeClass("closed")):(o.hide(),o.addClass("closed"))}),void $(window).resize()):void $(window).resize()}function e(o,a){o=$(o);var s=parseFloat(o.attr("data-font-size"));s=a?Math.max(.1,s+.1*a):parseFloat(o.attr("data-font-size-default")),o.attr("data-font-size",s),o.css("font-size",s+"em")}var t=window.CAULDRON||{};window.CAULDRON=t,t.scrollToAnchor=o,t.toggleVisible=a,t.collapse=s,t.changeFontSize=e}();
!function(){"use strict";function e(e){var r,n="?nocache="+o.getNoCacheString();r=e.src.startsWith(":")?e.src.slice(1):o.DATA_DIRECTORY+e.src;var t=window.document.getElementById(e.name);return t?Promise.resolve():/.*\.css$/.test(r)?new Promise(function(o){var t=document.createElement("link");t.rel="stylesheet",t.onload=o,t.href=r+n,t.id=e.name,document.head.appendChild(t)}):/.*\.js$/.test(r)?new Promise(function(o){var t=document.createElement("script");t.onload=o,t.src=r+n,t.id=e.name,document.head.appendChild(t)}):Promise.reject()}function r(e){if(!e)return Promise.resolve([]);var r=[];return e.forEach(function(e){r.push(o.loadSourceFile(e))}),Promise.all(r)}function n(e){if(!e)return Promise.resolve([]);var r=[];return e.forEach(function(e){e&&r.push(o.loadSourceFiles(e.includes))}),Promise.all(r)}var o=window.CAULDRON||{};window.CAULDRON=o,o.loadSourceFile=e,o.loadSourceFiles=r,o.loadStepIncludes=n}();
!function(){"use strict";function i(){if(o.RUNNING){var i=$(window).width();Math.abs(i-e)<10||(e=i,o.resizeCallbacks.forEach(function(i){i()}),o.resizePlotly())}}function t(){$(".cd-plotly-box").each(function(i,t){var o=$(t),e=o.parents(".cd-project-step-body").hasClass("closed");e||Plotly.relayout(o.find(".plotly-graph-div")[0],{width:o.width(),height:o.height()})})}var o=window.CAULDRON||{};window.CAULDRON=o;var e=-100;window.onresize=i,o.resizePlotly=t}();
!function(){"use strict";function e(e){if(!e||!e.body)return null;var t=$(e.body);return t.find("[data-src]").each(function(e,t){var a=$(t),n=a.attr("data-src");n.startsWith("/")&&(n=n.slice(1)),a.attr("src",r.DATA_DIRECTORY+"/"+n+"?nocache="+r.getNoCacheString()),a.attr("data-src",null)}),t}function t(e){if(console.log("RENAMES:",e),!e)return Promise.resolve(e);var t=$(".body-wrapper");return Object.keys(e).forEach(function(a){var r=e[a],n=t.find('[data-step-name="'+a+'"]');n.attr("data-step-name",r.name),n.find(".step-anchor").attr("name",r.name),n.find(".cd-step-title").html(r.title||r.name)}),Promise.resolve(e)}function a(e){if(console.log("UPDATES:",e),e){var t=e.map(function(e){return e.step});return r.loadStepIncludes(t).then(function(){var t,a=$(".body-wrapper");e.forEach(function(e){var n=$('[data-step-name="'+e.name+'"]');if("removed"===e.action)return void n.remove();var o=r.prepareStepBody(e.step);return"updated"===e.action?void n.replaceWith(o):("modified"===e.action&&(o=a.find('[data-step-name="'+e.name+'"]'),o.find(".cd-step-title").html(e.title||e.name),o.detach()),t=e.after?a.find('[data-step-name="'+e.after+'"]'):a.find(".cd-body-header").after(o),void(t&&t.length>0?t.after(o):e.after?a.append(o):a.prepend(o)))}),$(window).trigger("resize")})}}var r=window.CAULDRON||{};window.CAULDRON=r,r.prepareStepBody=e,r.processStepRenames=t,r.processStepUpdates=a}();
!function(){"use strict";function t(){var t=new Date;return t.getUTCMilliseconds()+"-"+t.getUTCSeconds()+"-"+t.getUTCMinutes()+"-"+t.getUTCHours()+"-"+t.getUTCDay()+"-"+t.getUTCMonth()+"-"+t.getUTCFullYear()}function e(t){return(t?this.toLowerCase():this).replace(/(?:^|\s)\S/g,function(t){return t.toUpperCase()})}function n(t,e){return(.01*Math.round(100*t)).toFixed(2)+" &#177; "+(.01*Math.round(100*e)).toFixed(2)}var o=window.CAULDRON||{};window.CAULDRON=o,o.getNoCacheString=t,o.capitalize=e,o.toDisplayNumber=n}();
!function(){"use strict";function e(){var e={};return document.location.search.replace(/(^\?)/,"").split("&").forEach(function(t){if(t=t.split("="),!(t.length<2)){var n=t[1];n=/[^0-9\.]+/.test(n)?"true"===n.toLowerCase()?!0:"false"===n.toLowerCase()?!1:decodeURIComponent(n):-1===n.indexOf(".")?parseInt(n,10):parseFloat(n),e[t[0]]=n}}),e}function t(){return n.initialize().then(function(){$("body");n.addSnapshotBar(),$("title").text(n.TITLE),n.SETTINGS.headerless||(n.createHeader(),$(".cd-body-header").find(".project-title").text(n.TITLE))})}var n=window.CAULDRON||{};window.CAULDRON=n,n.RUNNING=!1,n.parseUrlParameters=e,n.run=t,$(function(){n.PARAMS=n.parseUrlParameters(),n.run().then(function(){n.RUNNING=!0,n.__on__.ready(),$(window).resize()})})}();