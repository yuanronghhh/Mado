/* Property of A+A (juridically known as Allan Rope and Armand Grillet). ALL RIGHTS RESERVED.
See our Terms of Service in the "About" section for further information. */
var a; window.onload=function(){b=document.getElementsByTagName("head")[0];a=document.getElementById("help-shortcut");c=document.getElementById("window-close");d.setAttribute("rel","stylesheet");d.setAttribute("type","text/css");-1!=navigator.appVersion.indexOf("Mac")?(d.setAttribute("href","../css/more/more-frame-mac.css"),c.setAttribute("class","cta little-icon-mac-close")):(-1!=navigator.appVersion.indexOf("Win")?d.setAttribute("href","../css/more/more-frame-windows.css"):d.setAttribute("href","../css/more/more-frame-others.css"), c.setAttribute("class","cta little-icon-win-close"));b.appendChild(d);-1!=navigator.appVersion.indexOf("Mac")?($(".ctrl-cmd-key").html("&#8984;"),a.style.display="none"):$(".ctrl-cmd-key").html("Ctrl");$(c).on("click",function(){chrome.app.window.current().close()})};var b,d=document.createElement("link"),c;