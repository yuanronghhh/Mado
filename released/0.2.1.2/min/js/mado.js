var c, aa, f;

function g() {
    void 0 != ba && (ca(ba), ba = void 0)
}

function da() {
    marked(h.innerText, function (a, b) {
        chrome.fileSystem.chooseEntry({
            type: "saveFile",
            suggestedName: ea() + ".html"
        }, function (a) {
            a && a.createWriter(function (a) {
                a.write(new Blob([b], {
                    type: "text/HTML"
                }))
            }, g)
        })
    })
}

function k(a) {
    return a.substring(a.lastIndexOf("/") + 1)
}

function ea() {
    var a = l.innerHTML;
    return "" == a ? "document" : a.substring(a.lastIndexOf("/") + 1, a.lastIndexOf("."))
}

function fa(a) {
    chrome.app.window.create(a, {
        bounds: {
            left: Math.round(window.screenX + ($(window).width() - 498) / 2),
            top: Math.round(window.screenY + ($(window).height() - 664) / 2),
            width: 498,
            height: 664
        },
        frame: "none",
        minWidth: 498,
        minHeight: 664,
        maxWidth: 498,
        maxHeight: 664
    });
    ga.click()
}

function ha() {
    chrome.storage.local.get("displaySize", function (a) {
        void 0 != a.displaySize ? "small" == a.displaySize ? $("body").attr("class", "small") : "medium" == a.displaySize ? $("body").attr("class", " ") : $("body").attr("class", "big") : (chrome.storage.local.set({
            displaySize: "medium"
        }), $("body").attr("class", " "))
    })
}

function ia() {
    0 < h.innerText.length && chrome.app.window.create("mado.html", {
        bounds: {
            left: window.screenX + 20,
            top: window.screenY + 20,
            width: window.innerWidth,
            height: window.innerHeight
        },
        frame: "none",
        minWidth: 683,
        minHeight: 240
    })
}

function ja(a) {
    a.file(function (b) {
        var e = new FileReader;
        e.onload = function (b) {
            "" != h.innerText ? chrome.storage.local.set({
                tempFileEntry: chrome.fileSystem.retainEntry(a)
            }, ia) : (h.innerText = b.target.result, c = a, m = h.innerText, n(), l.innerHTML = k(a.fullPath) + "&nbsp;-");
            ka(a)
        };
        e.readAsText(b)
    }, g)
}

function la() {
    chrome.fileSystem.chooseEntry({
        type: "openFile",
        accepts: [{
            extensions: ["markdown", "md", "txt"]
        }]
    }, function (a) {
        a && ja(a)
    })
}

function ma() {
    chrome.fileSystem.chooseEntry({
        type: "saveFile",
        suggestedName: "document.md"
    }, function (a) {
        a && a.createWriter(function (b) {
            f = !1;
            b.onwriteend = function () {
                f ? (c = a, ka(c), m = h.innerText, na(), l.innerHTML = k(a.fullPath) + "&nbsp;-") : (f = !0, this.truncate(this.position))
            };
            b.write(new Blob([h.innerText], {
                type: "plain/text"
            }))
        }, g)
    })
}

function oa() {
    void 0 == c || "md&nbsp;-" != l.innerHTML.substring(l.innerHTML.length - 9) ? ma() : c.createWriter(function (a) {
        f = !1;
        a.onwriteend = function () {
            f ? (ka(c), m = h.innerText, na(), l.innerHTML = k(savedFile.fullPath) + "&nbsp;-") : (f = !0, this.truncate(this.position))
        };
        a.write(new Blob([h.innerText], {
            type: "plain/text"
        }))
    }, g)
}
chrome.app.window.current().onBoundsChanged.addListener(function () {
    1366 > window.innerWidth && "switch-button activated" == p.className ? q.click() : 1366 <= window.innerWidth && 1366 > aa && pa && p.click();
    aa = window.innerWidth
});
chrome.storage.onChanged.addListener(function (a) {
    for (key in a) "analytics" == key ? qa() : "displaySize" == key ? ha() : "gfm" == key ? ra() : "resize" == key && sa()
});
$(document).click(function (a) {
    $(a.target).closest(ta).length && "tool-displayer hidden" == ua.className ? (ua.className = "tool-displayer", r.focus()) : "tool-displayer hidden" == ua.className || $(a.target).closest(r).length || $(a.target).closest(s).length || (r.value = "", va(1), s.className = "hidden", ua.className = "tool-displayer hidden");
    $(a.target).closest(wa).length && "tool-displayer hidden" == t.className ? (u.innerHTML = "Choose an image", v.value = "", w.value = "", x = void 0, 0 == $(h).find("#mado-image").length && (h.focus(), y("mado-image")),
        t.className = "tool-displayer", z = document.getElementById("mado-image"), xa = z.innerText, /!\[.*\]\(.*\)/.test(z.innerText) && (/!\[.*\]\(.*\s".*"\)/.test(z.innerText) ? (w.value = z.innerText.match(/".*"\)/)[0].substring(1, z.innerText.match(/".*"\)/)[0].length - 2), x = z.innerText.match(/.*\s"/)[0].substring(2, z.innerText.match(/.*\s"/)[0].length - 2).replace(/\\/g, "/")) : x = z.innerText.match(/\]\(\S+\)/)[0].substring(2, z.innerText.match(/\]\(\S+\)/)[0].length - 1).replace(/\\/g, "/"), ya(k(x)), v.value = z.innerText.match(/!\[.+\]/)[0].substring(2,
            z.innerText.match(/!\[.+\]/)[0].length - 1))) : "tool-displayer" != t.className || $(a.target).closest(za).length || (t.className = "tool-displayer hidden", A(z), B("mado-image"));
    $(a.target).closest(Aa).length && "tool-displayer hidden" == C.className ? (D.value = "", E.value = "", 0 == $(h).find("#mado-link").length && (h.focus(), y("mado-link")), C.className = "tool-displayer", F = document.getElementById("mado-link"), xa = F.innerText, /\[\w*\]\(.*\)/.test(F.innerText) ? (D.value = F.innerText.match(/\(.*\)/)[0].substring(1, F.innerText.match(/\(.*\)/)[0].length -
        1), E.value = F.innerText.match(/\[\w*\]/)[0].substring(1, F.innerText.match(/\[\w*\]/)[0].length - 1)) : E.value = F.innerText, D.focus()) : "tool-displayer" != C.className || $(a.target).closest(C).length || (C.className = "tool-displayer hidden", A(F), B("mado-link"));
    $(a.target).closest(ga).length && "hidden" == Ba.className ? Ba.className = " " : "hidden" == Ba.className || $(a.target).closest(Ca).length || (Ba.className = "hidden");
    $(a.target).closest(Da).length && "hidden" == G.className ? (Ea(), G.className = "") : "hidden" == G.className || $(a.target).closest(H).length ||
        (G.className = "hidden");
    $(a.target).closest(Fa).length && "tool-displayer hidden" == I.className ? I.className = "tool-displayer" : "tool-displayer hidden" == I.className || $(a.target).closest(I).length || (I.className = "tool-displayer hidden");
    "visible" != Ga.className || $(a.target).closest(Ha).length && !$(a.target).closest(Ia).length || (Ga.className = "hidden")
});
var J, h, Ja, K, Ka, xa, L, La, Ma, Na, Oa, M, Pa, Qa, Ra = document.createElement("div");
document.createElement("textarea");
var N, O;

function n() {
    4 < h.innerHTML || 0 < h.innerText.length && "<br>" != h.innerHTML ? void 0 == Ka ? chrome.storage.local.get("gfm", function (a) {
        void 0 != a.gfm ? marked.setOptions({
            gfm: a.gfm
        }) : (chrome.storage.local.set({
            gfm: !1
        }), marked.setOptions({
            gfm: !1
        }));
        ra();
        marked(h.innerText, function (a, e) {
            for (var d = P = 0; d < Q.length; d++) Q[d][2] = !1;
            N = e;
            R()
        })
    }) : (marked.setOptions({
        gfm: Ka
    }), marked(h.innerText, function (a, b) {
        for (var e = P = 0; e < Q.length; e++) Q[e][2] = !1;
        N = b;
        R()
    })) : (h.innerHTML = "", J.innerHTML = "See the result here", S.innerHTML = "&nbsp;0 characters&nbsp;", T.innerHTML =
        "&nbsp;0 words&nbsp;", na())
}

function y(a) {
    if (Oa = rangy.getSelection().rangeCount ? rangy.getSelection().getRangeAt(0) : null) {
        Ra.id = a;
        try {
            Oa.surroundContents(Ra)
        } catch (b) {}
    }
}

function Sa(a, b, e, d) {
    La = b.indexOf("<div", e);
    K = b.indexOf("</div>", e);
    return -1 != K ? -1 != La && La < K ? Sa(a + 1, b, La + 5, d) : 1 == a ? (L = b.substring(0, b.indexOf('<div id="' + d + '">')), L += b.substring(b.indexOf('<div id="' + d + '">') + ('<div id="' + d + '">').length, K), L += b.substring(K + 6), [0, L]) : Sa(a - 1, b, K + 6, d) : [-1]
}

function Ta() {
    Ua = U = void 0;
    for (var a = 0; a < Q.length; a++)!1 == Q[a][2] && (Q = Q.splice(Q[a], 1));
    N = N.replace(/<img src=\"img\/nofile.png/g, '<span class="nofile-link"> <span class="nofile-visual">File not found</span>&nbsp;</span><img class="nofile" src="img/nofile.png');
    J.innerHTML = N;
    $("#html-conversion a").each(function () {
        "#" != $(this).attr("href").substring(0, 1) && "http" != $(this).attr("href").substring(0, 4) && $(this).attr("href", "http://" + $(this).attr("href"));
        $(this).attr("target", "_blank")
    });
    $(".nofile").on("click",
        function () {
            Va()
        });
    $(".nofile-link").on("click", function () {
        Va()
    });
    $(".nofile-visual").on("click", function () {
        Va()
    });
    Countable.m(J, function (a) {
        S.innerHTML = "&nbsp;" + a.characters + " characters&nbsp;";
        T.innerHTML = "&nbsp;" + a.words + " words&nbsp;";
        1 == a.characters && (S.innerHTML = "&nbsp;" + a.characters + " character&nbsp;");
        1 == a.words && (T.innerHTML = "&nbsp;" + a.words + " word&nbsp;")
    }, {
        s: !0
    });
    na()
}

function Wa() {
    y("mado-paste");
    Na = document.getElementById("mado-paste");
    Ja.focus();
    setTimeout(function () {
        void 0 != Na ? Na.innerText = Ja.value : $(h).innerText = $(h).innerText + Ja.value;
        Ja.value = "";
        A(Na);
        B("mado-paste");
        n()
    }, 20)
}

function B(a) {
    Pa = rangy.saveSelection();
    O = h.innerHTML;
    O = O.replace(/< *div/g, "<div");
    O = O.replace(/<div *>/g, "<div>");
    O = O.replace(/< *\/ *div *>/g, "</div>"); - 1 != O.indexOf('<div id="' + a + '">') && (Ma = Sa(0, O, O.indexOf('<div id="' + a + '">'), a), -1 != Ma[0] && (O = Ma[1]));
    h.innerHTML = O;
    rangy.restoreSelection(Pa);
    rangy.removeMarkers(Pa)
}

function A(a) {
    if (document.createRange && window.getSelection) {
        M = document.createRange();
        Qa = window.getSelection();
        Qa.removeAllRanges();
        try {
            M.q(a), Qa.addRange(M)
        } catch (b) {
            M.selectNode(a), Qa.addRange(M)
        }
    } else document.body.createTextRange && (M = document.body.createTextRange(), M.moveToElementText(a), M.select())
}

function ra() {
    chrome.storage.local.get("gfm", function (a) {
        void 0 != a.gfm ? Ka = a.gfm : (chrome.storage.local.set({
            gfm: !1
        }), Ka = !1);
        n()
    })
}
var S, l, T;

function Xa() {
    "none" == S.style.display ? (S.style.display = "inline", T.style.display = "none") : (S.style.display = "none", T.style.display = "inline")
}
var r, ta, ua, Ya, s, Za, V = [
        ["Headers", "Titles"],
        ["Bold", "Strong emphasis"],
        ["Italic", "Emphasis"],
        ["Bold italic", "Combined emphasis"],
        ["Ordered lists"],
        ["Unordered lists"],
        ["Inline-style links"],
        ["Reference-style links"],
        ["Images (inline)", "Pictures (inline)"],
        ["Images (reference-style)", "Pictures (reference-style)"],
        ["Blocks of code"],
        ["Blockquotes"],
        ["Inline HTML", "HTML in Markdown"],
        ["Horizontal rules"],
        ["Line breaks"],
        ["Question"]
    ],
    $a = [
        ["Six sizes available, the size depends on the numbers of #. <br> #Big title (size 1, the biggest). <br> ####A less impresive title (size 4 on 6)."],
        ['<span class="help-code">**bold**</span> or <span class="help-code">__bold__</span>'],
        ['<span class="help-code">*italic*</span> or <span class="help-code">_italic_</span>'],
        ['<span class="help-code">**_ bold italic_**</span> or <span class="help-code">*__bold italic__*</span> or <span class="help-code">***this***</span> or <span class="help-code">___this___</span>'],
        ["1. First ordered list item. <br>2. Another item."],
        ["* An item. <br>* A second item (you can also use + or -)."],
        ['<span class="help-code">[Hypertext](http://url.com)</span><br>(Also works with a local path.)'],
        ['<span class="help-code">[Hypertext][1]<br>[1]: http://url.com</span>'],
        ['<span class="help-code">![alt text](path/to/image.jpg "Title")</span>'],
        ['<span class="help-code">![alt text][image Id] <br> [image Id]: path/to/image.jpg "Title"</span>'],
        ['<span class="help-code">```Text between three back-ticks is a block of code.```<br>&nbsp;&nbsp;&nbsp;&nbsp;Text after four spaces is also a block of code.</span>'],
        ['> Blockquotes only need <span class="help-code">></span> to work. <br><br> <span class="help-code">> Two blockquotes without a break (a line who isn\'t a blockquote)  are a single quote.</span>'],
        ['<span class="help-code">It &lt;strong>works&lt;/strong>.</span>'],
        ['<span class="help-code">*** <br> You can use Hyphens, asterisks or underscores. <br> ---</span>'],
        ['To separate two paragraphs, press <span class="help-code">Enter</span> twice.<br><br>And you have a new paragraph.'],
        ["Seriously?"]
    ],
    ab = [
        ['Six sizes available, the size depends on the numbers of #.<h1 id="big-title-size-1-the-biggest-">Big title (size 1, the biggest).</h1><h4 id="a-less-impresive-title-size-4-on-6-br-">A less impresive title (size 4 on 6).</h4>'],
        ["<strong>Bold</strong>"],
        ["<em>Italic</em>"],
        ["<strong><em>Bold italic</em></strong>"],
        ["<ol><li>First ordered list item</li><li>Another item.</li></ol>"],
        ["<ul><li>An item. </li><li>A second item (you can also use + or -).</li></ul>"],
        ['<a target="_blank" href="http://aplusa.io/mado">Hypertext</a>'],
        ['<a target="_blank" href="http://aplusa.io/mado">Hypertext</a>'],
        ['<div class="example-image"></div>'],
        ['<div class="example-image"></div>'],
        ["<code>Write your code between three back-ticks to make a block of code.</code><br><code>You can also write code by indent your text with four spaces.</code>"],
        ["<blockquote>Blockquotes only need &gt; to work. To separate two blockquotes, insert a blank line between them.</blockquote>"],
        ["It <strong>works<strong>"],
        ["<hr> You can use Hyphens, asterisks or underscores.<hr>"],
        ["<p>To separate two paragraphs, press Enter twice.</p><p>And you have a new paragraph!</p>"],
        ["Life's most persistent and urgent question is, 'What are you doing for others?'."]
    ];

function bb() {
    for (var a = 1; 3 >= a; a++) "result switched" == window["result" + a].className && (window["result" + a].className = "result");
    if (0 == r.value.length) s.className = "hidden";
    else if (3 > r.value.length) {
    	s.className = "one-result no-result";
    	va(2);
        if (r.value.length == 1) answer1.innerHTML = "Add two more characters";
        else if (r.value.length == 2) answer1.innerHTML = "Add one more character"
    }
    else {
        Ya = 1;
        for (a = 0; a < V.length && 4 > Ya; a++)
            for (var b = 0; b < V[a].length; b++) - 1 != V[a][b].toLowerCase().indexOf(r.value.toLowerCase()) && (Za = V[a][b].toLowerCase().indexOf(r.value.toLowerCase()), window["answer" + Ya].innerHTML = '<span class="help-title">' + V[a][b].substring(0, Za) + '<span class="match">' +
                V[a][b].substr(Za, r.value.length) + "</span>" + V[a][b].substring(Za + r.value.length) + "</span>: " + $a[a], window["example" + Ya].innerHTML = ab[a], Ya++, b = V[a].length);
        switch (Ya) {
        case 1:
        	answer1.innerHTML = "No help found.";
            s.className = "one-result no-result";
            va(2);
            break;
        case 2:
            s.className = "one-result";
            va(2);
            break;
        case 3:
            s.className = "two-results";
            va(3);
            break;
        case 4:
            s.className = "three-results"
        }
    }
}

function va(a) {
    for (; 3 >= a; a++) "" == window["answer" + a].innerHTML ? a = 3 : (window["answer" + a].innerHTML = "", window["result" + a].className = "result", window["example" + a].innerHTML = "")
}

function cb(a) {
    window["result" + a].className = "result" == window["result" + a].className ? "result switched" : "result";
    r.focus()
}
var v, db, eb, wa, za, u, t, z, w, fb, gb = [],
    hb, x, U, P = 0,
    Q = [],
    Ua;

function ib() {
    "" == v.value ? (v.setAttribute("class", "flash"), v.focus(), v.removeAttribute("class")) : void 0 != x && (jb(), t.className = "tool-displayer hidden", A(z), B("mado-image"))
}

function kb() {
    void 0 != z && (z.innerText = xa);
    t.className = "tool-displayer hidden";
    A(z);
    B("mado-image");
    n()
}

function Va() {
    chrome.mediaGalleries.getMediaFileSystems({
        interactive: "yes"
    }, lb)
}

function mb(a) {
    gb = a;
    nb(0)
}

function R() {
    if (-1 != N.indexOf('<img src="', P))
        if (P = N.indexOf('<img src="', P) + 10, Ua = !1, U = N.substring(P, N.indexOf('"', P)), "data" != U.substring(0, 4))
            if (0 < Q.length)
                for (var a = 0; a < Q.length; a++)
                    if (Q[a][0] == U)
                        if (N = N.replace(RegExp(U, "g"), Q[a][1]), Q[a][2] = !0, -1 != N.indexOf('<img src="', P)) {
                            R();
                            break
                        } else Ta();
                        else a == Q.length - 1 && lb();
                        else lb();
                        else R();
                        else Ta()
}

function nb(a) {
    !1 == Ua ? a < gb.length ? (fb = a, gb.forEach(function (b, e) {
        e == a && void 0 != U && !1 == Ua && b.root.createReader().readEntries(ob)
    })) : (N = N.replace(RegExp(U, "g"), "img/nofile.png"), -1 != N.indexOf('<img src="', P) ? R() : Ta()) : (Q.length = 0, jb())
}

function pb(a) {
    gb[fb].root.getFile(a, {
        create: !1
    }, function (a) {
        a.file(function (a) {
            var b = new FileReader;
            b.onloadend = function () {
                Q.push([U, this.result, !0]);
                N = N.replace(RegExp(U, "g"), this.result);
                Ua = !0; - 1 != N.indexOf('<img src="', P) ? R() : Ta()
            };
            b.readAsDataURL(a)
        })
    })
}

function ob(a) {
    for (var b = 0; b < a.length && !1 == Ua; b++)
        if (a[b].isDirectory && -1 != U.indexOf(a[b].fullPath)) {
            a[b].createReader().readEntries(ob);
            break
        } else if (-1 != U.indexOf(a[b].fullPath)) {
        pb(a[b].fullPath);
        break
    } else b == a.length - 1 && nb(fb + 1)
}

function qb() {
    chrome.fileSystem.chooseEntry({
        type: "openFile",
        accepts: [{
            mimeTypes: ["image/*"]
        }]
    }, function (a) {
        a && chrome.fileSystem.getDisplayPath(a, function (a) {
            ya(k(a.replace(/\\/g, "/")));
            x = a.replace(/\\/g, "/");
            jb();
            v.focus()
        })
    })
}

function jb() {
    hb = "" == w.value ? "![" + v.value + "](" + x + ")" : "![" + v.value + "](" + x + ' "' + w.value + '")';
    void 0 != z ? z.innerText = hb : $(h).innerText = $(h).innerText + hb;
    n()
}

function ya(a) {
    u.innerHTML = a;
    15 < u.innerHTML.length && (u.innerHTML = u.innerHTML.substring(0, 6) + "(\u2026)" + u.innerHTML.substring(u.innerHTML.length - 6, u.innerHTML.length))
}

function lb() {
    chrome.mediaGalleries.getMediaFileSystems({
        interactive: "no"
    }, mb)
}
var rb, E, sb, Aa, C, D, F;

function tb() {
    "" == D.value ? (D.setAttribute("class", "flash"), D.focus(), D.removeAttribute("class")) : (ub(), C.className = "tool-displayer hidden", A(F), B("mado-link"))
}

function vb() {
    void 0 != F && (F.innerText = xa);
    C.className = "tool-displayer hidden";
    A(F);
    B("mado-link");
    n()
}

function ub() {
    sb = "" == E.value ? "[" + D.value + "](" + D.value + ")" : "[" + E.value + "](" + D.value + ")";
    void 0 != F ? F.innerText = sb : $(h).innerText = $(h).innerText + sb;
    n()
}
var ga, Ba, Ca, wb, xb, yb, zb;
window.onload = function () {
    exportButton = document.getElementById("export");
    newButton = document.getElementById("new");
    openButton = document.getElementById("open");
    Da = document.getElementById("recent");
    saveButton = document.getElementById("save");
    saveAsButton = document.getElementById("save-as");
    J = document.getElementById("html-conversion");
    h = document.getElementById("markdown");
    Ja = document.getElementById("paste-zone");
    S = document.getElementById("character-nb");
    l = document.getElementById("doc-name");
    T = document.getElementById("word-nb");
    r = document.getElementById("help-input");
    ta = document.getElementById("help-button");
    ua = document.getElementById("help-input-displayer");
    for (var a = 1; 3 >= a; a++) window["answer" + a] = document.getElementById("answer-" + a), window["example" + a] = document.getElementById("example-" + a), window["result" + a] = document.getElementById("result-" + a), window["resultSwitch" + a] = document.getElementById("result-switch-" + a);
    s = document.getElementById("help-results-container");
    db = document.getElementById("cancel-image");
    eb = document.getElementById("galleries-button");
    wa = document.getElementById("image-button");
    t = document.getElementById("image-insertion-displayer");
    za = document.getElementById("image-insertion-box");
    u = document.getElementById("browse-image");
    v = document.getElementById("alt-input");
    w = document.getElementById("title-input");
    rb = document.getElementById("cancel-link");
    Aa = document.getElementById("link-button");
    C = document.getElementById("link-insertion-displayer");
    D = document.getElementById("url-input");
    E = document.getElementById("hypertext-input");
    ga = document.getElementById("more-button");
    Ba = document.getElementById("more-displayer");
    Ca = document.getElementById("more-container");
    wb = document.getElementById("settings");
    xb = document.getElementById("q-and-a");
    yb = document.getElementById("shortcuts");
    zb = document.getElementById("about");
    Da = document.getElementById("recent-button");
    G = document.getElementById("recent-files-displayer");
    H = document.getElementById("recent-files-container");
    Fa = document.getElementById("style-tool");
    I = document.getElementById("style-tool-displayer");
    Ab = document.getElementById("home-style");
    Bb = document.getElementById("clinic-style");
    Cb = document.getElementById("tramway-style");
    Db = document.getElementById("workspace");
    q = document.getElementById("switch-md");
    p = document.getElementById("switch-both");
    Eb = document.getElementById("switch-html");
    W.push(q, p, Eb);
    Ia = document.getElementById("cancel");
    Ga = document.getElementById("close-alert-displayer");
    Fb = document.getElementsByTagName("head")[0];
    Gb = document.getElementById("quit");
    Hb = document.getElementById("save-quit");
    Ib = document.getElementById("save-state");
    Ha = document.getElementById("window-close");
    Jb = document.getElementById("window-close-button");
    Kb = document.getElementById("window-maximize");
    Lb = document.getElementById("window-minimize");
    chrome.storage.local.get("tempFileEntry", function (a) {
        void 0 != a.tempFileEntry ? chrome.fileSystem.restoreEntry(a.tempFileEntry, function (a) {
            c = a;
            chrome.storage.local.remove("tempFileEntry");
            c.file(function (a) {
                var b = new FileReader;
                b.onload = function (a) {
                    h.innerText = a.target.result;
                    m = h.innerText;
                    n();
                    l.innerHTML = k(c.fullPath) +
                        "&nbsp;-"
                };
                b.readAsText(a)
            }, g)
        }) : m = void 0
    });
    ha();
    $(newButton).on("click", ia);
    Mousetrap.bind(["command+n", "ctrl+n"], function () {
        ia();
        return !1
    });
    $(openButton).on("click", la);
    Mousetrap.bind(["command+o", "ctrl+o"], function () {
        la();
        return !1
    });
    $(saveButton).on("click", oa);
    Mousetrap.bind(["command+s", "ctrl+s"], function () {
        oa();
        return !1
    });
    $(saveAsButton).on("click", ma);
    Mousetrap.bind(["command+shift+s", "ctrl+shift+s"], function () {
        ma();
        return !1
    });
    $(exportButton).on("click", da);
    ra();
    S.style.display = "none";
    $(h).focus();
    $(h).on("input propertychange", n);
    $(h).bind("paste", function () {
        Wa()
    });
    $(h).keydown(function (a) {
        9 == a.keyCode && a.preventDefault()
    });
    $(S).on("click", Xa);
    $(T).on("click", Xa);
    Mousetrap.bind(["command+h", "ctrl+h"], function () {
        $(ta).click();
        return !1
    });
    $(r).keyup(function (a) {
        27 == a.keyCode && $(ta).click()
    });
    $(r).on("input propertychange", bb);
    $(resultSwitch1).on("click", function () {
        cb("1")
    });
    $(resultSwitch2).on("click", function () {
        cb("2")
    });
    $(resultSwitch3).on("click", function () {
        cb("3")
    });
    $(wa).on("mousedown", function () {
        y("mado-image")
    });
    $(u).on("click", qb);
    $(eb).on("click", Va);
    $(v).keyup(function (a) {
        13 == a.keyCode ? ib() : 27 == a.keyCode ? kb() : jb()
    });
    $(w).keydown(function (a) {
        9 == a.keyCode && (a.preventDefault(), $(v).select())
    });
    $(w).keyup(function (a) {
        13 == a.keyCode ? ib() : 27 == a.keyCode ? kb() : jb()
    });
    $(db).on("click", kb);
    $(Aa).on("mousedown", function () {
        y("mado-link")
    });
    Mousetrap.bind(["command+k", "ctrl+k"], function () {
        y("mado-link");
        $(Aa).click();
        return !1
    });
    $(D).keyup(function (a) {
        13 == a.keyCode ? tb() : 27 == a.keyCode ? vb() : ub()
    });
    $(E).keydown(function (a) {
        9 ==
            a.keyCode && (a.preventDefault(), $(D).select())
    });
    $(E).keyup(function (a) {
        13 == a.keyCode ? tb() : 27 == a.keyCode ? vb() : ub()
    });
    $(rb).on("click", vb);
    $(wb).on("click", function () {
        fa("more/settings.html")
    });
    $(xb).on("click", function () {
        fa("more/qanda.html")
    });
    $(yb).on("click", function () {
        fa("more/shortcuts.html")
    });
    $(zb).on("click", function () {
        fa("more/about.html")
    });
    Ea();
    navigator.onLine && (Mb = analytics.getService("Mado"), qa(), Nb = Mb.getTracker("UA-45134408-1"), Nb.sendAppView("mainWindow"));
    Ob();
    $(Ab).on("click", function () {
        Pb("home")
    });
    $(Bb).on("click",
        function () {
            Pb("clinic")
        });
    $(Cb).on("click", function () {
        Pb("tramway")
    });
    1365 < chrome.app.window.current().getBounds().width ? p.className = "switch-button activated" : (q.className = "switch-button activated", Db.className = "markdown-view");
    chrome.app.window.current().getBounds();
    sa();
    $(q).on("click", function () {
        Qb(this.id, "markdown-view")
    });
    $(p).on("click", function () {
        Qb(this.id, "normal")
    });
    $(Eb).on("click", function () {
        Qb(this.id, "conversion-view")
    });
    Mousetrap.bind(["command+alt+left", "ctrl+alt+left"], function () {
        Rb("left");
        return !1
    });
    Mousetrap.bind(["command+alt+right", "ctrl+alt+right"], function () {
        Rb("right");
        return !1
    });
    Sb.setAttribute("rel", "stylesheet");
    Sb.setAttribute("type", "text/css"); - 1 != navigator.appVersion.indexOf("Mac") ? (Sb.setAttribute("href", "css/window-bar-mac.css"), Jb.setAttribute("class", "cta little-icon-mac-close"), Kb.setAttribute("class", "cta little-icon-mac-maximize"), Lb.setAttribute("class", "cta little-icon-mac-minimize")) : (Sb.setAttribute("href", "css/window-bar-windows.css"), Jb.setAttribute("class",
        "cta little-icon-win-close"), Kb.setAttribute("class", "cta little-icon-win-maximize"), Lb.setAttribute("class", "cta little-icon-win-minimize"));
    Fb.appendChild(Sb);
    $(Gb).on("click", Tb);
    $(Hb).on("click", Ub);
    $(Jb).on("click", Vb);
    Mousetrap.bind(["command+w", "ctrl+w"], function () {
        Vb();
        return !1
    });
    $(Kb).on("click", Wb);
    $(Lb).on("click", Xb)
};
var Da, G, H, X, Y = "",
    ba, Z = {}, Yb = "recentFile1 recentFile2 recentFile3 recentFile4 recentFile5 recentFile6 recentFile7 recentFileId1 recentFileId2 recentFileId3 recentFileId4 recentFileId5 recentFileId6 recentFileId7".split(" ");

function Zb(a) {
    7 >= a && chrome.storage.local.get(Yb, function (b) {
        void 0 != b["recentFile" + a] && chrome.fileSystem.isRestorable(b["recentFileId" + a], function (e) {
            e ? chrome.fileSystem.restoreEntry(b["recentFileId" + a], function (b) {
                b ? Zb(a + 1) : (document.getElementById("recent-" + a).setAttribute("class", "recent-file deleted"), $b(a, "check"))
            }) : (document.getElementById("recent-" + a).setAttribute("class", "recent-file deleted"), $b(a, "check"))
        })
    })
}

function Ea() {
    Zb(1);
    H.innerHTML = " ";
    chrome.storage.local.get(Yb, function (a) {
        for (var b = 1; 7 >= b; b++)
            if (void 0 != a["recentFile" + b]) H.innerHTML += '<li class="recent-file" id="recent-' + b + '"><div class="recent-file-wrapped"><p>' + k(a["recentFile" + b].toString()) + '</p><div class="delete-recent-button little-icon-delete" id="delete-button-' + b + '"></div></div></li>';
            else break;
        $(".recent-file").on("click", function (a) {
            $(a.target).closest("#delete-button-" + this.id.charAt(this.id.length - 1)).length || (ba = this.id.charAt(this.id.length -
                1).valueOf(), Y = "recentFileId" + this.id.charAt(this.id.length - 1), chrome.storage.local.get(Y, function (a) {
                chrome.fileSystem.restoreEntry(a[Y], function (a) {
                    ja(a);
                    G.className = "hidden"
                })
            }))
        });
        $(".delete-recent-button").on("click", function () {
            ca(this.id.charAt(this.id.length - 1))
        });
        X = document.createElement("li");
        X.setAttribute("id", "recent-files-info");
        " " != H.innerHTML ? (X.setAttribute("class", "clear-all"), X.innerHTML = "Clear all") : (X.setAttribute("class", " "), X.innerHTML = "No recent document.");
        H.appendChild(X);
        $(".clear-all").on("click", function () {
            ac()
        })
    })
}

function ka(a, b) {
    chrome.storage.local.get(Yb, function (e) {
        for (var d = 1; 7 >= d; d++)
            if (void 0 == e["recentFile" + d] || e["recentFile" + d] == a.fullPath || 7 == d) {
                for (; 0 < d; d--) 1 < d ? (Y = ("recentFileId" + d).toString(), Z[Y] = e["recentFileId" + (d - 1)], chrome.storage.local.set(Z), Z = {}, Y = ("recentFile" + d).toString(), Z[Y] = e["recentFile" + (d - 1)], chrome.storage.local.set(Z), Z = {}) : (chrome.storage.local.set({
                        recentFileId1: chrome.fileSystem.retainEntry(a)
                    }), chrome.storage.local.set({
                        recentFile1: a.fullPath
                    }), Ea(), void 0 != b && "quit" == b &&
                    Tb());
                break
            }
    })
}

function ca(a) {
    document.getElementById("recent-" + a).setAttribute("class", "recent-file deleted");
    setTimeout(function () {
        $b(a, "display")
    }, 100)
}

function $b(a, b) {
    chrome.storage.local.get(Yb, function (e) {
        if (void 0 != e["recentFile" + a]) {
            for (var d = parseInt(a); 7 >= d; d++)
                if (void 0 != e["recentFile" + (d + 1)]) Y = ("recentFileId" + d).toString(), Z[Y] = e["recentFileId" + (d + 1)], chrome.storage.local.set(Z), Z = {}, Y = ("recentFile" + d).toString(), Z[Y] = e["recentFile" + (d + 1)], chrome.storage.local.set(Z), Z = {};
                else {
                    Y = ("recentFileId" + d).toString();
                    chrome.storage.local.remove(Y);
                    Y = ("recentFile" + d).toString();
                    chrome.storage.local.remove(Y);
                    Y = "";
                    break
                }
                "display" == b ? Ea() : "check" ==
                b && Zb(a)
        }
    })
}

function ac() {
    chrome.storage.local.get(Yb, function (a) {
        for (var b = 1; 7 >= b; b++)
            if (void 0 == a["recentFile" + (b + 1)]) {
                bc(b);
                break
            }
    })
}

function bc(a) {
    chrome.storage.local.get(Yb, function () {
        Y = ("recentFileId" + a).toString();
        chrome.storage.local.remove(Y);
        Y = ("recentFile" + a).toString();
        chrome.storage.local.remove(Y);
        Y = "";
        1 < a ? bc(a - 1) : H.innerHTML = '<li id="recent-files-info" class=" ">No recent document.</li>'
    })
}
var Mb, Nb;

function qa() {
    chrome.storage.local.get("analytics", function (a) {
        void 0 != a.analytics ? Mb.g.i(a.analytics) : (chrome.storage.local.set({
            analytics: !0
        }), Mb.g.i(!0))
    })
}
var Fa, I, Bb, Ab, Cb;

function Ob() {
    chrome.storage.local.get("style", function (a) {
        void 0 != a.style ? ("home" == a.style ? Ab.checked = !0 : "clinic" == a.style ? Bb.checked = !0 : Cb.checked = !0, $(J).attr("class", a.style)) : (Ab.checked = !0, Pb("home"))
    })
}

function Pb(a) {
    chrome.storage.local.set({
        style: a
    }, function () {
        $(J).attr("class", a)
    })
}
var p, Eb, q, Db, W = [],
    pa;

function Qb(a, b) {
    for (var e = 0; e < W.length; e++) W[e].className = W[e].id != a ? "switch-button" : "switch-button activated";
    Db.className = b
}

function sa() {
    chrome.storage.local.get("resize", function (a) {
        void 0 != a.resize ? pa = a.resize : (chrome.storage.local.set({
            resize: !0
        }), pa = !0)
    })
}

function Rb(a) {
    if (1365 < window.innerWidth)
        for (var b = 0; b < W.length; b++) "switch-button activated" == W[b].className && ("left" == a && 0 < b ? W[b - 1].click() : "right" == a && b < W.length - 1 && W[b + 1].click(), b = W.length);
    else "left" == a ? q.click() : Eb.click()
}
var Ia, Ga, Fb, m, Gb, Hb, Ib, Sb = document.createElement("link"),
    Ha, Jb, Kb, Lb, cc;

function na() {
    Ib.innerHTML = "" != h.innerText ? void 0 == m || h.innerText != m ? '<span class="little-icon-unsaved"></span>' : "" : void 0 != m ? '<span class="little-icon-unsaved"></span>' : ""
}

function Vb() {
    chrome.runtime.getBackgroundPage(function (a) {
        a.newBounds(chrome.app.window.current().getBounds())
    });
    '<span class="little-icon-unsaved"></span>' == Ib.innerHTML ? Ga.className = "visible" : chrome.app.window.current().close()
}

function Wb() {
    chrome.app.window.current().isMaximized() ? chrome.app.window.current().setBounds(cc) : (cc = chrome.app.window.current().getBounds(), chrome.app.window.current().maximize())
}

function Xb() {
    chrome.app.window.current().minimize()
}

function Tb() {
    chrome.runtime.getBackgroundPage(function (a) {
        a.newBounds(chrome.app.window.current().getBounds())
    });
    chrome.app.window.current().close()
}

function dc() {
    c.createWriter(function (a) {
        f = !1;
        a.onwriteend = function () {
            f ? ka(c, "quit") : (f = !0, this.truncate(this.position))
        };
        a.write(new Blob([h.innerText], {
            type: "plain/text"
        }))
    }, g)
}

function ec() {
    chrome.fileSystem.chooseEntry({
        type: "saveFile",
        suggestedName: "document.md"
    }, function (a) {
        a && a.createWriter(function (b) {
            f = !1;
            b.onwriteend = function () {
                f ? ka(a, "quit") : (f = !0, this.truncate(this.position))
            };
            b.write(new Blob([h.innerText], {
                type: "plain/text"
            }))
        }, g)
    })
}

function Ub() {
    void 0 == c || "md&nbsp;-" != l.innerHTML.substring(l.innerHTML.length - 9) ? ec() : dc()
};