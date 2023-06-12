function isTouchDevice() {
    return "ontouchstart" in document.documentElement
}! function(e, t, n) {
    function i(e, t) {
        return typeof e === t
    }

    function r() {
        var e, t, n, r, o, s, a;
        for (var l in _)
            if (_.hasOwnProperty(l)) {
                if (e = [], t = _[l], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
                    for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
                for (r = i(t.fn, "function") ? t.fn() : t.fn, o = 0; o < e.length; o++) s = e[o], a = s.split("."), 1 === a.length ? w[a[0]] = r : (!w[a[0]] || w[a[0]] instanceof Boolean || (w[a[0]] = new Boolean(w[a[0]])), w[a[0]][a[1]] = r), v.push((r ? "" : "no-") + a.join("-"))
            }
    }

    function o(e) {
        var t = T.className,
            n = w._config.classPrefix || "";
        if (b && (t = t.baseVal), w._config.enableJSClass) {
            var i = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
            t = t.replace(i, "$1" + n + "js$2")
        }
        w._config.enableClasses && (t += " " + n + e.join(" " + n), b ? T.className.baseVal = t : T.className = t)
    }

    function s(e) {
        return e.replace(/([a-z])-([a-z])/g, function(e, t, n) {
            return t + n.toUpperCase()
        }).replace(/^-/, "")
    }

    function a(e, t) {
        return !!~("" + e).indexOf(t)
    }

    function l() {
        return "function" != typeof t.createElement ? t.createElement(arguments[0]) : b ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
    }

    function u(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }

    function c(e, t, n) {
        var r;
        for (var o in e)
            if (e[o] in t) return n === !1 ? e[o] : (r = t[e[o]], i(r, "function") ? u(r, n || t) : r);
        return !1
    }

    function h(e) {
        return e.replace(/([A-Z])/g, function(e, t) {
            return "-" + t.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }

    function f() {
        var e = t.body;
        return e || (e = l(b ? "svg" : "body"), e.fake = !0), e
    }

    function p(e, n, i, r) {
        var o, s, a, u, c = "modernizr",
            h = l("div"),
            p = f();
        if (parseInt(i, 10))
            for (; i--;) a = l("div"), a.id = r ? r[i] : c + (i + 1), h.appendChild(a);
        return o = l("style"), o.type = "text/css", o.id = "s" + c, (p.fake ? p : h).appendChild(o), p.appendChild(h), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(t.createTextNode(e)), h.id = c, p.fake && (p.style.background = "", p.style.overflow = "hidden", u = T.style.overflow, T.style.overflow = "hidden", T.appendChild(p)), s = n(h, e), p.fake ? (p.parentNode.removeChild(p), T.style.overflow = u, T.offsetHeight) : h.parentNode.removeChild(h), !!s
    }

    function d(t, i) {
        var r = t.length;
        if ("CSS" in e && "supports" in e.CSS) {
            for (; r--;)
                if (e.CSS.supports(h(t[r]), i)) return !0;
            return !1
        }
        if ("CSSSupportsRule" in e) {
            for (var o = []; r--;) o.push("(" + h(t[r]) + ":" + i + ")");
            return o = o.join(" or "), p("@supports (" + o + ") { #modernizr { position: absolute; } }", function(e) {
                return "absolute" == getComputedStyle(e, null).position
            })
        }
        return n
    }

    function g(e, t, r, o) {
        function u() {
            h && (delete E.style, delete E.modElem)
        }
        if (o = !i(o, "undefined") && o, !i(r, "undefined")) {
            var c = d(e, r);
            if (!i(c, "undefined")) return c
        }
        for (var h, f, p, g, m, y = ["modernizr", "tspan", "samp"]; !E.style && y.length;) h = !0, E.modElem = l(y.shift()), E.style = E.modElem.style;
        for (p = e.length, f = 0; p > f; f++)
            if (g = e[f], m = E.style[g], a(g, "-") && (g = s(g)), E.style[g] !== n) {
                if (o || i(r, "undefined")) return u(), "pfx" != t || g;
                try {
                    E.style[g] = r
                } catch (e) {}
                if (E.style[g] != m) return u(), "pfx" != t || g
            }
        return u(), !1
    }

    function m(e, t, n, r, o) {
        var s = e.charAt(0).toUpperCase() + e.slice(1),
            a = (e + " " + k.join(s + " ") + s).split(" ");
        return i(t, "string") || i(t, "undefined") ? g(a, t, r, o) : (a = (e + " " + C.join(s + " ") + s).split(" "), c(a, t, n))
    }

    function y(e, t, i) {
        return m(e, n, n, t, i)
    }
    var v = [],
        _ = [],
        x = {
            _version: "3.3.1",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(e, t) {
                var n = this;
                setTimeout(function() {
                    t(n[e])
                }, 0)
            },
            addTest: function(e, t, n) {
                _.push({
                    name: e,
                    fn: t,
                    options: n
                })
            },
            addAsyncTest: function(e) {
                _.push({
                    name: null,
                    fn: e
                })
            }
        },
        w = function() {};
    w.prototype = x, w = new w;
    var T = t.documentElement,
        b = "svg" === T.nodeName.toLowerCase(),
        S = "Moz O ms Webkit",
        k = x._config.usePrefixes ? S.split(" ") : [];
    x._cssomPrefixes = k;
    var P = function(t) {
        var i, r = prefixes.length,
            o = e.CSSRule;
        if ("undefined" == typeof o) return n;
        if (!t) return !1;
        if (t = t.replace(/^@/, ""), i = t.replace(/-/g, "_").toUpperCase() + "_RULE", i in o) return "@" + t;
        for (var s = 0; r > s; s++) {
            var a = prefixes[s],
                l = a.toUpperCase() + "_" + i;
            if (l in o) return "@-" + a.toLowerCase() + "-" + t
        }
        return !1
    };
    x.atRule = P;
    var C = x._config.usePrefixes ? S.toLowerCase().split(" ") : [];
    x._domPrefixes = C;
    var O = {
        elem: l("modernizr")
    };
    w._q.push(function() {
        delete O.elem
    });
    var E = {
        style: O.elem.style
    };
    w._q.unshift(function() {
        delete E.style
    }), x.testAllProps = m, x.prefixed = function(e, t, n) {
        return 0 === e.indexOf("@") ? P(e) : (-1 != e.indexOf("-") && (e = s(e)), t ? m(e, t, n) : m(e, "pfx"))
    }, x.testAllProps = y, w.addTest("cssanimations", y("animationName", "a", !0)), r(), o(v), delete x.addTest, delete x.addAsyncTest;
    for (var M = 0; M < w._q.length; M++) w._q[M]();
    e.Modernizr = w
}(window, document),
function() {
    var e, t, n, i, r, o, s, a, l, u, c, h, f, p, d, g, m, y, v, _, x, w, T, b, S, k, P, C, O, E, M, A, N, D, R, L, F, j, X, B, I, q, z, Y, H, W, V, G, U, Q = [].slice,
        Z = {}.hasOwnProperty,
        K = function(e, t) {
            function n() {
                this.constructor = e
            }
            for (var i in t) Z.call(t, i) && (e[i] = t[i]);
            return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
        },
        $ = [].indexOf || function(e) {
            for (var t = 0, n = this.length; n > t; t++)
                if (t in this && this[t] === e) return t;
            return -1
        };
    for (x = {
            catchupTime: 100,
            initialRate: .03,
            minTime: 250,
            ghostTime: 100,
            maxProgressPerFrame: 20,
            easeFactor: 1.25,
            startOnPageLoad: !0,
            restartOnPushState: !0,
            restartOnRequestAfter: 500,
            target: "body",
            elements: {
                checkInterval: 100,
                selectors: ["body"]
            },
            eventLag: {
                minSamples: 10,
                sampleCount: 3,
                lagThreshold: 3
            },
            ajax: {
                trackMethods: ["GET"],
                trackWebSockets: !0,
                ignoreURLs: []
            }
        }, O = function() {
            var e;
            return null != (e = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance.now() : void 0) ? e : +new Date
        }, M = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, _ = window.cancelAnimationFrame || window.mozCancelAnimationFrame, null == M && (M = function(e) {
            return setTimeout(e, 50)
        }, _ = function(e) {
            return clearTimeout(e)
        }), N = function(e) {
            var t, n;
            return t = O(), (n = function() {
                var i;
                return i = O() - t, i >= 33 ? (t = O(), e(i, function() {
                    return M(n)
                })) : setTimeout(n, 33 - i)
            })()
        }, A = function() {
            var e, t, n;
            return n = arguments[0], t = arguments[1], e = 3 <= arguments.length ? Q.call(arguments, 2) : [], "function" == typeof n[t] ? n[t].apply(n, e) : n[t]
        }, w = function() {
            var e, t, n, i, r, o, s;
            for (t = arguments[0], i = 2 <= arguments.length ? Q.call(arguments, 1) : [], o = 0, s = i.length; s > o; o++)
                if (n = i[o])
                    for (e in n) Z.call(n, e) && (r = n[e], null != t[e] && "object" == typeof t[e] && null != r && "object" == typeof r ? w(t[e], r) : t[e] = r);
            return t
        }, m = function(e) {
            var t, n, i, r, o;
            for (n = t = 0, r = 0, o = e.length; o > r; r++) i = e[r], n += Math.abs(i), t++;
            return n / t
        }, b = function(e, t) {
            var n, i, r;
            if (null == e && (e = "options"), null == t && (t = !0), r = document.querySelector("[data-pace-" + e + "]")) {
                if (n = r.getAttribute("data-pace-" + e), !t) return n;
                try {
                    return JSON.parse(n)
                } catch (e) {
                    return i = e, "undefined" != typeof console && null !== console ? console.error("Error parsing inline pace options", i) : void 0
                }
            }
        }, s = function() {
            function e() {}
            return e.prototype.on = function(e, t, n, i) {
                var r;
                return null == i && (i = !1), null == this.bindings && (this.bindings = {}), null == (r = this.bindings)[e] && (r[e] = []), this.bindings[e].push({
                    handler: t,
                    ctx: n,
                    once: i
                })
            }, e.prototype.once = function(e, t, n) {
                return this.on(e, t, n, !0)
            }, e.prototype.off = function(e, t) {
                var n, i, r;
                if (null != (null != (i = this.bindings) ? i[e] : void 0)) {
                    if (null == t) return delete this.bindings[e];
                    for (n = 0, r = []; n < this.bindings[e].length;) r.push(this.bindings[e][n].handler === t ? this.bindings[e].splice(n, 1) : n++);
                    return r
                }
            }, e.prototype.trigger = function() {
                var e, t, n, i, r, o, s, a, l;
                if (n = arguments[0], e = 2 <= arguments.length ? Q.call(arguments, 1) : [], null != (s = this.bindings) ? s[n] : void 0) {
                    for (r = 0, l = []; r < this.bindings[n].length;) a = this.bindings[n][r], i = a.handler, t = a.ctx, o = a.once, i.apply(null != t ? t : this, e), l.push(o ? this.bindings[n].splice(r, 1) : r++);
                    return l
                }
            }, e
        }(), u = window.Pace || {}, window.Pace = u, w(u, s.prototype), E = u.options = w({}, x, window.paceOptions, b()), V = ["ajax", "document", "eventLag", "elements"], z = 0, H = V.length; H > z; z++) F = V[z], E[F] === !0 && (E[F] = x[F]);
    l = function(e) {
        function t() {
            return G = t.__super__.constructor.apply(this, arguments)
        }
        return K(t, e), t
    }(Error), t = function() {
        function e() {
            this.progress = 0
        }
        return e.prototype.getElement = function() {
            var e;
            if (null == this.el) {
                if (e = document.querySelector(E.target), !e) throw new l;
                this.el = document.createElement("div"), this.el.className = "pace pace-active", document.body.className = document.body.className.replace(/pace-done/g, ""), document.body.className += " pace-running", this.el.innerHTML = '<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>', null != e.firstChild ? e.insertBefore(this.el, e.firstChild) : e.appendChild(this.el)
            }
            return this.el
        }, e.prototype.finish = function() {
            var e;
            return e = this.getElement(), e.className = e.className.replace("pace-active", ""), e.className += " pace-inactive", document.body.className = document.body.className.replace("pace-running", ""), document.body.className += " pace-done"
        }, e.prototype.update = function(e) {
            return this.progress = e, this.render()
        }, e.prototype.destroy = function() {
            try {
                this.getElement().parentNode.removeChild(this.getElement())
            } catch (e) {
                l = e
            }
            return this.el = void 0
        }, e.prototype.render = function() {
            var e, t, n, i, r, o, s;
            if (null == document.querySelector(E.target)) return !1;
            for (e = this.getElement(), i = "translate3d(" + this.progress + "%, 0, 0)", s = ["webkitTransform", "msTransform", "transform"], r = 0, o = s.length; o > r; r++) t = s[r], e.children[0].style[t] = i;
            return (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) && (e.children[0].setAttribute("data-progress-text", "" + (0 | this.progress) + "%"), this.progress >= 100 ? n = "99" : (n = this.progress < 10 ? "0" : "", n += 0 | this.progress), e.children[0].setAttribute("data-progress", "" + n)), this.lastRenderedProgress = this.progress
        }, e.prototype.done = function() {
            return this.progress >= 100
        }, e
    }(), a = function() {
        function e() {
            this.bindings = {}
        }
        return e.prototype.trigger = function(e, t) {
            var n, i, r, o, s;
            if (null != this.bindings[e]) {
                for (o = this.bindings[e], s = [], i = 0, r = o.length; r > i; i++) n = o[i], s.push(n.call(this, t));
                return s
            }
        }, e.prototype.on = function(e, t) {
            var n;
            return null == (n = this.bindings)[e] && (n[e] = []), this.bindings[e].push(t)
        }, e
    }(), q = window.XMLHttpRequest, I = window.XDomainRequest, B = window.WebSocket, T = function(e, t) {
        var n, i, r;
        r = [];
        for (i in t.prototype) try {
            r.push(null == e[i] && "function" != typeof t[i] ? "function" == typeof Object.defineProperty ? Object.defineProperty(e, i, {
                get: function() {
                    return t.prototype[i]
                },
                configurable: !0,
                enumerable: !0
            }) : e[i] = t.prototype[i] : void 0)
        } catch (e) {
            n = e
        }
        return r
    }, P = [], u.ignore = function() {
        var e, t, n;
        return t = arguments[0], e = 2 <= arguments.length ? Q.call(arguments, 1) : [], P.unshift("ignore"), n = t.apply(null, e), P.shift(), n
    }, u.track = function() {
        var e, t, n;
        return t = arguments[0], e = 2 <= arguments.length ? Q.call(arguments, 1) : [], P.unshift("track"), n = t.apply(null, e), P.shift(), n
    }, L = function(e) {
        var t;
        if (null == e && (e = "GET"), "track" === P[0]) return "force";
        if (!P.length && E.ajax) {
            if ("socket" === e && E.ajax.trackWebSockets) return !0;
            if (t = e.toUpperCase(), $.call(E.ajax.trackMethods, t) >= 0) return !0
        }
        return !1
    }, c = function(e) {
        function t() {
            var e, n = this;
            t.__super__.constructor.apply(this, arguments), e = function(e) {
                var t;
                return t = e.open, e.open = function(i, r) {
                    return L(i) && n.trigger("request", {
                        type: i,
                        url: r,
                        request: e
                    }), t.apply(e, arguments)
                }
            }, window.XMLHttpRequest = function(t) {
                var n;
                return n = new q(t), e(n), n
            };
            try {
                T(window.XMLHttpRequest, q)
            } catch (e) {}
            if (null != I) {
                window.XDomainRequest = function() {
                    var t;
                    return t = new I, e(t), t
                };
                try {
                    T(window.XDomainRequest, I)
                } catch (e) {}
            }
            if (null != B && E.ajax.trackWebSockets) {
                window.WebSocket = function(e, t) {
                    var i;
                    return i = null != t ? new B(e, t) : new B(e), L("socket") && n.trigger("request", {
                        type: "socket",
                        url: e,
                        protocols: t,
                        request: i
                    }), i
                };
                try {
                    T(window.WebSocket, B)
                } catch (e) {}
            }
        }
        return K(t, e), t
    }(a), Y = null, S = function() {
        return null == Y && (Y = new c), Y
    }, R = function(e) {
        var t, n, i, r;
        for (r = E.ajax.ignoreURLs, n = 0, i = r.length; i > n; n++)
            if (t = r[n], "string" == typeof t) {
                if (-1 !== e.indexOf(t)) return !0
            } else if (t.test(e)) return !0;
        return !1
    }, S().on("request", function(t) {
        var n, i, r, o, s;
        return o = t.type, r = t.request, s = t.url, R(s) ? void 0 : u.running || E.restartOnRequestAfter === !1 && "force" !== L(o) ? void 0 : (i = arguments, n = E.restartOnRequestAfter || 0, "boolean" == typeof n && (n = 0), setTimeout(function() {
            var t, n, s, a, l, c;
            if (t = "socket" === o ? r.readyState < 2 : 0 < (a = r.readyState) && 4 > a) {
                for (u.restart(), l = u.sources, c = [], n = 0, s = l.length; s > n; n++) {
                    if (F = l[n], F instanceof e) {
                        F.watch.apply(F, i);
                        break
                    }
                    c.push(void 0)
                }
                return c
            }
        }, n))
    }), e = function() {
        function e() {
            var e = this;
            this.elements = [], S().on("request", function() {
                return e.watch.apply(e, arguments)
            })
        }
        return e.prototype.watch = function(e) {
            var t, n, i, r;
            return i = e.type, t = e.request, r = e.url, R(r) ? void 0 : (n = "socket" === i ? new p(t) : new d(t), this.elements.push(n))
        }, e
    }(), d = function() {
        function e(e) {
            var t, n, i, r, o, s, a = this;
            if (this.progress = 0, null != window.ProgressEvent)
                for (n = null, e.addEventListener("progress", function(e) {
                        return a.progress = e.lengthComputable ? 100 * e.loaded / e.total : a.progress + (100 - a.progress) / 2
                    }, !1), s = ["load", "abort", "timeout", "error"], i = 0, r = s.length; r > i; i++) t = s[i], e.addEventListener(t, function() {
                    return a.progress = 100
                }, !1);
            else o = e.onreadystatechange, e.onreadystatechange = function() {
                var t;
                return 0 === (t = e.readyState) || 4 === t ? a.progress = 100 : 3 === e.readyState && (a.progress = 50), "function" == typeof o ? o.apply(null, arguments) : void 0
            }
        }
        return e
    }(), p = function() {
        function e(e) {
            var t, n, i, r, o = this;
            for (this.progress = 0, r = ["error", "open"], n = 0, i = r.length; i > n; n++) t = r[n], e.addEventListener(t, function() {
                return o.progress = 100
            }, !1)
        }
        return e
    }(), i = function() {
        function e(e) {
            var t, n, i, o;
            for (null == e && (e = {}), this.elements = [], null == e.selectors && (e.selectors = []), o = e.selectors, n = 0, i = o.length; i > n; n++) t = o[n], this.elements.push(new r(t))
        }
        return e
    }(), r = function() {
        function e(e) {
            this.selector = e, this.progress = 0, this.check()
        }
        return e.prototype.check = function() {
            var e = this;
            return document.querySelector(this.selector) ? this.done() : setTimeout(function() {
                return e.check()
            }, E.elements.checkInterval)
        }, e.prototype.done = function() {
            return this.progress = 100
        }, e
    }(), n = function() {
        function e() {
            var e, t, n = this;
            this.progress = null != (t = this.states[document.readyState]) ? t : 100, e = document.onreadystatechange, document.onreadystatechange = function() {
                return null != n.states[document.readyState] && (n.progress = n.states[document.readyState]), "function" == typeof e ? e.apply(null, arguments) : void 0
            }
        }
        return e.prototype.states = {
            loading: 0,
            interactive: 50,
            complete: 100
        }, e
    }(), o = function() {
        function e() {
            var e, t, n, i, r, o = this;
            this.progress = 0, e = 0, r = [], i = 0, n = O(), t = setInterval(function() {
                var s;
                return s = O() - n - 50, n = O(), r.push(s), r.length > E.eventLag.sampleCount && r.shift(), e = m(r), ++i >= E.eventLag.minSamples && e < E.eventLag.lagThreshold ? (o.progress = 100, clearInterval(t)) : o.progress = 100 * (3 / (e + 3))
            }, 50)
        }
        return e
    }(), f = function() {
        function e(e) {
            this.source = e, this.last = this.sinceLastUpdate = 0, this.rate = E.initialRate, this.catchup = 0, this.progress = this.lastProgress = 0, null != this.source && (this.progress = A(this.source, "progress"))
        }
        return e.prototype.tick = function(e, t) {
            var n;
            return null == t && (t = A(this.source, "progress")), t >= 100 && (this.done = !0), t === this.last ? this.sinceLastUpdate += e : (this.sinceLastUpdate && (this.rate = (t - this.last) / this.sinceLastUpdate), this.catchup = (t - this.progress) / E.catchupTime, this.sinceLastUpdate = 0, this.last = t), t > this.progress && (this.progress += this.catchup * e), n = 1 - Math.pow(this.progress / 100, E.easeFactor), this.progress += n * this.rate * e, this.progress = Math.min(this.lastProgress + E.maxProgressPerFrame, this.progress), this.progress = Math.max(0, this.progress), this.progress = Math.min(100, this.progress), this.lastProgress = this.progress, this.progress
        }, e
    }(), j = null, D = null, y = null, X = null, g = null, v = null, u.running = !1, k = function() {
        return E.restartOnPushState ? u.restart() : void 0
    }, null != window.history.pushState && (W = window.history.pushState, window.history.pushState = function() {
        return k(), W.apply(window.history, arguments)
    }), null != window.history.replaceState && (U = window.history.replaceState, window.history.replaceState = function() {
        return k(), U.apply(window.history, arguments)
    }), h = {
        ajax: e,
        elements: i,
        document: n,
        eventLag: o
    }, (C = function() {
        var e, n, i, r, o, s, a, l;
        for (u.sources = j = [], s = ["ajax", "elements", "document", "eventLag"], n = 0, r = s.length; r > n; n++) e = s[n], E[e] !== !1 && j.push(new h[e](E[e]));
        for (l = null != (a = E.extraSources) ? a : [], i = 0, o = l.length; o > i; i++) F = l[i], j.push(new F(E));
        return u.bar = y = new t, D = [], X = new f
    })(), u.stop = function() {
        return u.trigger("stop"), u.running = !1, y.destroy(), v = !0, null != g && ("function" == typeof _ && _(g), g = null), C()
    }, u.restart = function() {
        return u.trigger("restart"), u.stop(), u.start()
    }, u.go = function() {
        var e;
        return u.running = !0, y.render(), e = O(), v = !1, g = N(function(t, n) {
            var i, r, o, s, a, l, c, h, p, d, g, m, _, x, w, T;
            for (h = 100 - y.progress, r = g = 0, o = !0, l = m = 0, x = j.length; x > m; l = ++m)
                for (F = j[l], d = null != D[l] ? D[l] : D[l] = [], a = null != (T = F.elements) ? T : [F], c = _ = 0, w = a.length; w > _; c = ++_) s = a[c], p = null != d[c] ? d[c] : d[c] = new f(s), o &= p.done, p.done || (r++, g += p.tick(t));
            return i = g / r, y.update(X.tick(t, i)), y.done() || o || v ? (y.update(100), u.trigger("done"), setTimeout(function() {
                return y.finish(), u.running = !1, u.trigger("hide")
            }, Math.max(E.ghostTime, Math.max(E.minTime - (O() - e), 0)))) : n()
        })
    }, u.start = function(e) {
        w(E, e), u.running = !0;
        try {
            y.render()
        } catch (e) {
            l = e
        }
        return document.querySelector(".pace") ? (u.trigger("start"), u.go()) : setTimeout(u.start, 50)
    }, "function" == typeof define && define.amd ? define(["pace"], function() {
        return u
    }) : "object" == typeof exports ? module.exports = u : E.startOnPageLoad && u.start()
}.call(this), ! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";

    function n(e, t) {
        t = t || te;
        var n = t.createElement("script");
        n.text = e, t.head.appendChild(n).parentNode.removeChild(n)
    }

    function i(e) {
        var t = !!e && "length" in e && e.length,
            n = de.type(e);
        return "function" !== n && !de.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function r(e, t, n) {
        return de.isFunction(t) ? de.grep(e, function(e, i) {
            return !!t.call(e, i, e) !== n
        }) : t.nodeType ? de.grep(e, function(e) {
            return e === t !== n
        }) : "string" != typeof t ? de.grep(e, function(e) {
            return se.call(t, e) > -1 !== n
        }) : Se.test(t) ? de.filter(t, e, n) : (t = de.filter(t, e), de.grep(e, function(e) {
            return se.call(t, e) > -1 !== n && 1 === e.nodeType
        }))
    }

    function o(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function s(e) {
        var t = {};
        return de.each(e.match(Me) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function a(e) {
        return e
    }

    function l(e) {
        throw e
    }

    function u(e, t, n) {
        var i;
        try {
            e && de.isFunction(i = e.promise) ? i.call(e).done(t).fail(n) : e && de.isFunction(i = e.then) ? i.call(e, t, n) : t.call(void 0, e)
        } catch (e) {
            n.call(void 0, e)
        }
    }

    function c() {
        te.removeEventListener("DOMContentLoaded", c), e.removeEventListener("load", c), de.ready()
    }

    function h() {
        this.expando = de.expando + h.uid++
    }

    function f(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : je.test(e) ? JSON.parse(e) : e)
    }

    function $(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(Xe, "-$&").toLowerCase(), n = e.getAttribute(i), "string" == typeof n) {
                try {
                    n = f(n)
                } catch (e) {}
                Fe.set(e, t, n)
            } else n = void 0;
        return n
    }

    function p(e, t, n, i) {
        var r, o = 1,
            s = 20,
            a = i ? function() {
                return i.cur()
            } : function() {
                return de.css(e, t, "")
            },
            l = a(),
            u = n && n[3] || (de.cssNumber[t] ? "" : "px"),
            c = (de.cssNumber[t] || "px" !== u && +l) && Ie.exec(de.css(e, t));
        if (c && c[3] !== u) {
            u = u || c[3], n = n || [], c = +l || 1;
            do o = o || ".5", c /= o, de.style(e, t, c + u); while (o !== (o = a() / l) && 1 !== o && --s)
        }
        return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = r)), r
    }

    function d(e) {
        var t, n = e.ownerDocument,
            i = e.nodeName,
            r = Ye[i];
        return r ? r : (t = n.body.appendChild(n.createElement(i)), r = de.css(t, "display"), t.parentNode.removeChild(t), "none" === r && (r = "block"), Ye[i] = r, r)
    }

    function g(e, t) {
        for (var n, i, r = [], o = 0, s = e.length; o < s; o++) i = e[o], i.style && (n = i.style.display, t ? ("none" === n && (r[o] = Le.get(i, "display") || null, r[o] || (i.style.display = "")), "" === i.style.display && ze(i) && (r[o] = d(i))) : "none" !== n && (r[o] = "none", Le.set(i, "display", n)));
        for (o = 0; o < s; o++) null != r[o] && (e[o].style.display = r[o]);
        return e
    }

    function m(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && de.nodeName(e, t) ? de.merge([e], n) : n
    }

    function y(e, t) {
        for (var n = 0, i = e.length; n < i; n++) Le.set(e[n], "globalEval", !t || Le.get(t[n], "globalEval"))
    }

    function v(e, t, n, i, r) {
        for (var o, s, a, l, u, c, h = t.createDocumentFragment(), f = [], p = 0, d = e.length; p < d; p++)
            if (o = e[p], o || 0 === o)
                if ("object" === de.type(o)) de.merge(f, o.nodeType ? [o] : o);
                else if (Ue.test(o)) {
            for (s = s || h.appendChild(t.createElement("div")), a = (We.exec(o) || ["", ""])[1].toLowerCase(), l = Ge[a] || Ge._default, s.innerHTML = l[1] + de.htmlPrefilter(o) + l[2], c = l[0]; c--;) s = s.lastChild;
            de.merge(f, s.childNodes), s = h.firstChild, s.textContent = ""
        } else f.push(t.createTextNode(o));
        for (h.textContent = "", p = 0; o = f[p++];)
            if (i && de.inArray(o, i) > -1) r && r.push(o);
            else if (u = de.contains(o.ownerDocument, o), s = m(h.appendChild(o), "script"), u && y(s), n)
            for (c = 0; o = s[c++];) Ve.test(o.type || "") && n.push(o);
        return h
    }

    function _() {
        return !0
    }

    function x() {
        return !1
    }

    function w() {
        try {
            return te.activeElement
        } catch (e) {}
    }

    function T(e, t, n, i, r, o) {
        var s, a;
        if ("object" == typeof t) {
            "string" != typeof n && (i = i || n, n = void 0);
            for (a in t) T(e, a, n, i, t[a], o);
            return e
        }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), r === !1) r = x;
        else if (!r) return e;
        return 1 === o && (s = r, r = function(e) {
            return de().off(e), s.apply(this, arguments)
        }, r.guid = s.guid || (s.guid = de.guid++)), e.each(function() {
            de.event.add(this, t, r, i, n)
        })
    }

    function b(e, t) {
        return de.nodeName(e, "table") && de.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e : e
    }

    function S(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function k(e) {
        var t = it.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function P(e, t) {
        var n, i, r, o, s, a, l, u;
        if (1 === t.nodeType) {
            if (Le.hasData(e) && (o = Le.access(e), s = Le.set(t, o), u = o.events)) {
                delete s.handle, s.events = {};
                for (r in u)
                    for (n = 0, i = u[r].length; n < i; n++) de.event.add(t, r, u[r][n])
            }
            Fe.hasData(e) && (a = Fe.access(e), l = de.extend({}, a), Fe.set(t, l))
        }
    }

    function C(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && He.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function O(e, t, i, r) {
        t = re.apply([], t);
        var o, s, a, l, u, c, h = 0,
            f = e.length,
            p = f - 1,
            d = t[0],
            g = de.isFunction(d);
        if (g || f > 1 && "string" == typeof d && !fe.checkClone && nt.test(d)) return e.each(function(n) {
            var o = e.eq(n);
            g && (t[0] = d.call(this, n, o.html())), O(o, t, i, r)
        });
        if (f && (o = v(t, e[0].ownerDocument, !1, e, r), s = o.firstChild, 1 === o.childNodes.length && (o = s), s || r)) {
            for (a = de.map(m(o, "script"), S), l = a.length; h < f; h++) u = o, h !== p && (u = de.clone(u, !0, !0), l && de.merge(a, m(u, "script"))), i.call(e[h], u, h);
            if (l)
                for (c = a[a.length - 1].ownerDocument, de.map(a, k), h = 0; h < l; h++) u = a[h], Ve.test(u.type || "") && !Le.access(u, "globalEval") && de.contains(c, u) && (u.src ? de._evalUrl && de._evalUrl(u.src) : n(u.textContent.replace(rt, ""), c))
        }
        return e
    }

    function E(e, t, n) {
        for (var i, r = t ? de.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || de.cleanData(m(i)), i.parentNode && (n && de.contains(i.ownerDocument, i) && y(m(i, "script")), i.parentNode.removeChild(i));
        return e
    }

    function M(e, t, n) {
        var i, r, o, s, a = e.style;
        return n = n || at(e), n && (s = n.getPropertyValue(t) || n[t], "" !== s || de.contains(e.ownerDocument, e) || (s = de.style(e, t)), !fe.pixelMarginRight() && st.test(s) && ot.test(t) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s
    }

    function A(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function N(e) {
        if (e in ft) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = ht.length; n--;)
            if (e = ht[n] + t, e in ft) return e
    }

    function D(e, t, n) {
        var i = Ie.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function R(e, t, n, i, r) {
        var o, s = 0;
        for (o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0; o < 4; o += 2) "margin" === n && (s += de.css(e, n + qe[o], !0, r)), i ? ("content" === n && (s -= de.css(e, "padding" + qe[o], !0, r)), "margin" !== n && (s -= de.css(e, "border" + qe[o] + "Width", !0, r))) : (s += de.css(e, "padding" + qe[o], !0, r), "padding" !== n && (s += de.css(e, "border" + qe[o] + "Width", !0, r)));
        return s
    }

    function L(e, t, n) {
        var i, r = !0,
            o = at(e),
            s = "border-box" === de.css(e, "boxSizing", !1, o);
        if (e.getClientRects().length && (i = e.getBoundingClientRect()[t]), i <= 0 || null == i) {
            if (i = M(e, t, o), (i < 0 || null == i) && (i = e.style[t]), st.test(i)) return i;
            r = s && (fe.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + R(e, t, n || (s ? "border" : "content"), r, o) + "px"
    }

    function F(e, t, n, i, r) {
        return new F.prototype.init(e, t, n, i, r)
    }

    function j() {
        dt && (e.requestAnimationFrame(j), de.fx.tick())
    }

    function X() {
        return e.setTimeout(function() {
            pt = void 0
        }), pt = de.now()
    }

    function B(e, t) {
        var n, i = 0,
            r = {
                height: e
            };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) n = qe[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function I(e, t, n) {
        for (var i, r = (Y.tweeners[t] || []).concat(Y.tweeners["*"]), o = 0, s = r.length; o < s; o++)
            if (i = r[o].call(n, t, e)) return i
    }

    function q(e, t, n) {
        var i, r, o, s, a, l, u, c, h = "width" in t || "height" in t,
            f = this,
            p = {},
            d = e.style,
            m = e.nodeType && ze(e),
            y = Le.get(e, "fxshow");
        n.queue || (s = de._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() {
            s.unqueued || a()
        }), s.unqueued++, f.always(function() {
            f.always(function() {
                s.unqueued--, de.queue(e, "fx").length || s.empty.fire()
            })
        }));
        for (i in t)
            if (r = t[i], gt.test(r)) {
                if (delete t[i], o = o || "toggle" === r, r === (m ? "hide" : "show")) {
                    if ("show" !== r || !y || void 0 === y[i]) continue;
                    m = !0
                }
                p[i] = y && y[i] || de.style(e, i)
            }
        if (l = !de.isEmptyObject(t), l || !de.isEmptyObject(p)) {
            h && 1 === e.nodeType && (n.overflow = [d.overflow, d.overflowX, d.overflowY], u = y && y.display, null == u && (u = Le.get(e, "display")), c = de.css(e, "display"), "none" === c && (u ? c = u : (g([e], !0), u = e.style.display || u, c = de.css(e, "display"), g([e]))), ("inline" === c || "inline-block" === c && null != u) && "none" === de.css(e, "float") && (l || (f.done(function() {
                d.display = u
            }), null == u && (c = d.display, u = "none" === c ? "" : c)), d.display = "inline-block")), n.overflow && (d.overflow = "hidden", f.always(function() {
                d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
            })), l = !1;
            for (i in p) l || (y ? "hidden" in y && (m = y.hidden) : y = Le.access(e, "fxshow", {
                display: u
            }), o && (y.hidden = !m), m && g([e], !0), f.done(function() {
                m || g([e]), Le.remove(e, "fxshow");
                for (i in p) de.style(e, i, p[i])
            })), l = I(m ? y[i] : 0, i, f), i in y || (y[i] = l.start, m && (l.end = l.start, l.start = 0))
        }
    }

    function z(e, t) {
        var n, i, r, o, s;
        for (n in e)
            if (i = de.camelCase(n), r = t[i], o = e[n], de.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), s = de.cssHooks[i], s && "expand" in s) {
                o = s.expand(o), delete e[i];
                for (n in o) n in e || (e[n] = o[n], t[n] = r)
            } else t[i] = r
    }

    function Y(e, t, n) {
        var i, r, o = 0,
            s = Y.prefilters.length,
            a = de.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (r) return !1;
                for (var t = pt || X(), n = Math.max(0, u.startTime + u.duration - t), i = n / u.duration || 0, o = 1 - i, s = 0, l = u.tweens.length; s < l; s++) u.tweens[s].run(o);
                return a.notifyWith(e, [u, o, n]), o < 1 && l ? n : (a.resolveWith(e, [u]), !1)
            },
            u = a.promise({
                elem: e,
                props: de.extend({}, t),
                opts: de.extend(!0, {
                    specialEasing: {},
                    easing: de.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: pt || X(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var i = de.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(i), i
                },
                stop: function(t) {
                    var n = 0,
                        i = t ? u.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; n < i; n++) u.tweens[n].run(1);
                    return t ? (a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u, t])) : a.rejectWith(e, [u, t]), this
                }
            }),
            c = u.props;
        for (z(c, u.opts.specialEasing); o < s; o++)
            if (i = Y.prefilters[o].call(u, e, c, u.opts)) return de.isFunction(i.stop) && (de._queueHooks(u.elem, u.opts.queue).stop = de.proxy(i.stop, i)), i;
        return de.map(c, I, u), de.isFunction(u.opts.start) && u.opts.start.call(e, u), de.fx.timer(de.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function H(e) {
        var t = e.match(Me) || [];
        return t.join(" ")
    }

    function W(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function V(e, t, n, i) {
        var r;
        if (de.isArray(t)) de.each(t, function(t, r) {
            n || Pt.test(e) ? i(e, r) : V(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
        });
        else if (n || "object" !== de.type(t)) i(e, t);
        else
            for (r in t) V(e + "[" + r + "]", t[r], n, i)
    }

    function G(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, r = 0,
                o = t.toLowerCase().match(Me) || [];
            if (de.isFunction(n))
                for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function U(e, t, n, i) {
        function r(a) {
            var l;
            return o[a] = !0, de.each(e[a] || [], function(e, a) {
                var u = a(t, n, i);
                return "string" != typeof u || s || o[u] ? s ? !(l = u) : void 0 : (t.dataTypes.unshift(u), r(u), !1)
            }), l
        }
        var o = {},
            s = e === Xt;
        return r(t.dataTypes[0]) || !o["*"] && r("*")
    }

    function Q(e, t) {
        var n, i, r = de.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
        return i && de.extend(!0, e, i), e
    }

    function Z(e, t, n) {
        for (var i, r, o, s, a = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (r in a)
                if (a[r] && a[r].test(i)) {
                    l.unshift(r);
                    break
                }
        if (l[0] in n) o = l[0];
        else {
            for (r in n) {
                if (!l[0] || e.converters[r + " " + l[0]]) {
                    o = r;
                    break
                }
                s || (s = r)
            }
            o = o || s
        }
        if (o) return o !== l[0] && l.unshift(o), n[o]
    }

    function K(e, t, n, i) {
        var r, o, s, a, l, u = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
        for (o = c.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
            if (s = u[l + " " + o] || u["* " + o], !s)
                for (r in u)
                    if (a = r.split(" "), a[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                        s === !0 ? s = u[r] : u[r] !== !0 && (o = a[0], c.unshift(a[1]));
                        break
                    }
            if (s !== !0)
                if (s && e.throws) t = s(t);
                else try {
                    t = s(t)
                } catch (e) {
                    return {
                        state: "parsererror",
                        error: s ? e : "No conversion from " + l + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function J(e) {
        return de.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var ee = [],
        te = e.document,
        ne = Object.getPrototypeOf,
        ie = ee.slice,
        re = ee.concat,
        oe = ee.push,
        se = ee.indexOf,
        ae = {},
        le = ae.toString,
        ue = ae.hasOwnProperty,
        ce = ue.toString,
        he = ce.call(Object),
        fe = {},
        pe = "3.1.1",
        de = function(e, t) {
            return new de.fn.init(e, t)
        },
        ge = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        me = /^-ms-/,
        ye = /-([a-z])/g,
        ve = function(e, t) {
            return t.toUpperCase()
        };
    de.fn = de.prototype = {
        jquery: pe,
        constructor: de,
        length: 0,
        toArray: function() {
            return ie.call(this)
        },
        get: function(e) {
            return null == e ? ie.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = de.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return de.each(this, e)
        },
        map: function(e) {
            return this.pushStack(de.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(ie.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: oe,
        sort: ee.sort,
        splice: ee.splice
    }, de.extend = de.fn.extend = function() {
        var e, t, n, i, r, o, s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || de.isFunction(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
            if (null != (e = arguments[a]))
                for (t in e) n = s[t], i = e[t], s !== i && (u && i && (de.isPlainObject(i) || (r = de.isArray(i))) ? (r ? (r = !1, o = n && de.isArray(n) ? n : []) : o = n && de.isPlainObject(n) ? n : {}, s[t] = de.extend(u, o, i)) : void 0 !== i && (s[t] = i));
        return s
    }, de.extend({
        expando: "jQuery" + (pe + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === de.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            var t = de.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        },
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== le.call(e) || (t = ne(e)) && (n = ue.call(t, "constructor") && t.constructor, "function" != typeof n || ce.call(n) !== he))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ae[le.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            n(e)
        },
        camelCase: function(e) {
            return e.replace(me, "ms-").replace(ye, ve)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t) {
            var n, r = 0;
            if (i(e))
                for (n = e.length; r < n && t.call(e[r], r, e[r]) !== !1; r++);
            else
                for (r in e)
                    if (t.call(e[r], r, e[r]) === !1) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(ge, "");
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (i(Object(e)) ? de.merge(n, "string" == typeof e ? [e] : e) : oe.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : se.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
            return e.length = r, e
        },
        grep: function(e, t, n) {
            for (var i, r = [], o = 0, s = e.length, a = !n; o < s; o++) i = !t(e[o], o), i !== a && r.push(e[o]);
            return r
        },
        map: function(e, t, n) {
            var r, o, s = 0,
                a = [];
            if (i(e))
                for (r = e.length; s < r; s++) o = t(e[s], s, n), null != o && a.push(o);
            else
                for (s in e) o = t(e[s], s, n), null != o && a.push(o);
            return re.apply([], a)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, r;
            if ("string" == typeof t && (n = e[t], t = e, e = n), de.isFunction(e)) return i = ie.call(arguments, 2), r = function() {
                return e.apply(t || this, i.concat(ie.call(arguments)))
            }, r.guid = e.guid = e.guid || de.guid++, r
        },
        now: Date.now,
        support: fe
    }), "function" == typeof Symbol && (de.fn[Symbol.iterator] = ee[Symbol.iterator]), de.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        ae["[object " + t + "]"] = t.toLowerCase()
    });
    var _e = function(e) {
        function t(e, t, n, i) {
            var r, o, s, a, l, u, c, f = t && t.ownerDocument,
                d = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== d && 9 !== d && 11 !== d) return n;
            if (!i && ((t ? t.ownerDocument || t : q) !== D && N(t), t = t || D, L)) {
                if (11 !== d && (l = ve.exec(e)))
                    if (r = l[1]) {
                        if (9 === d) {
                            if (!(s = t.getElementById(r))) return n;
                            if (s.id === r) return n.push(s), n
                        } else if (f && (s = f.getElementById(r)) && B(t, s) && s.id === r) return n.push(s), n
                    } else {
                        if (l[2]) return J.apply(n, t.getElementsByTagName(e)), n;
                        if ((r = l[3]) && T.getElementsByClassName && t.getElementsByClassName) return J.apply(n, t.getElementsByClassName(r)), n
                    }
                if (T.qsa && !V[e + " "] && (!F || !F.test(e))) {
                    if (1 !== d) f = t, c = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(we, Te) : t.setAttribute("id", a = I), u = P(e), o = u.length; o--;) u[o] = "#" + a + " " + p(u[o]);
                        c = u.join(","), f = $.test(e) && h(t.parentNode) || t
                    }
                    if (c) try {
                        return J.apply(n, f.querySelectorAll(c)), n
                    } catch (e) {} finally {
                        a === I && t.removeAttribute("id")
                    }
                }
            }
            return O(e.replace(le, "$1"), t, n, i)
        }

        function n() {
            function e(n, i) {
                return t.push(n + " ") > b.cacheLength && delete e[t.shift()], e[n + " "] = i
            }
            var t = [];
            return e
        }

        function i(e) {
            return e[I] = !0, e
        }

        function r(e) {
            var t = D.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var n = e.split("|"), i = n.length; i--;) b.attrHandle[n[i]] = t
        }

        function s(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function a(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function l(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function u(e) {
            return function(t) {
                return "form" in t ? t.parentNode && t.disabled === !1 ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Se(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function c(e) {
            return i(function(t) {
                return t = +t, i(function(n, i) {
                    for (var r, o = e([], n.length, t), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }

        function h(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function f() {}

        function p(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i
        }

        function d(e, t, n) {
            var i = t.dir,
                r = t.next,
                o = r || i,
                s = n && "parentNode" === o,
                a = Y++;
            return t.first ? function(t, n, r) {
                for (; t = t[i];)
                    if (1 === t.nodeType || s) return e(t, n, r);
                return !1
            } : function(t, n, l) {
                var u, c, h, f = [z, a];
                if (l) {
                    for (; t = t[i];)
                        if ((1 === t.nodeType || s) && e(t, n, l)) return !0
                } else
                    for (; t = t[i];)
                        if (1 === t.nodeType || s)
                            if (h = t[I] || (t[I] = {}), c = h[t.uniqueID] || (h[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[i] || t;
                            else {
                                if ((u = c[o]) && u[0] === z && u[1] === a) return f[2] = u[2];
                                if (c[o] = f, f[2] = e(t, n, l)) return !0
                            } return !1
            }
        }

        function g(e) {
            return e.length > 1 ? function(t, n, i) {
                for (var r = e.length; r--;)
                    if (!e[r](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function m(e, n, i) {
            for (var r = 0, o = n.length; r < o; r++) t(e, n[r], i);
            return i
        }

        function y(e, t, n, i, r) {
            for (var o, s = [], a = 0, l = e.length, u = null != t; a < l; a++)(o = e[a]) && (n && !n(o, i, r) || (s.push(o), u && t.push(a)));
            return s
        }

        function v(e, t, n, r, o, s) {
            return r && !r[I] && (r = v(r)), o && !o[I] && (o = v(o, s)), i(function(i, s, a, l) {
                var u, c, h, f = [],
                    p = [],
                    d = s.length,
                    g = i || m(t || "*", a.nodeType ? [a] : a, []),
                    v = !e || !i && t ? g : y(g, f, e, a, l),
                    _ = n ? o || (i ? e : d || r) ? [] : s : v;
                if (n && n(v, _, a, l), r)
                    for (u = y(_, p), r(u, [], a, l), c = u.length; c--;)(h = u[c]) && (_[p[c]] = !(v[p[c]] = h));
                if (i) {
                    if (o || e) {
                        if (o) {
                            for (u = [], c = _.length; c--;)(h = _[c]) && u.push(v[c] = h);
                            o(null, _ = [], u, l)
                        }
                        for (c = _.length; c--;)(h = _[c]) && (u = o ? te(i, h) : f[c]) > -1 && (i[u] = !(s[u] = h))
                    }
                } else _ = y(_ === s ? _.splice(d, _.length) : _), o ? o(null, s, _, l) : J.apply(s, _)
            })
        }

        function _(e) {
            for (var t, n, i, r = e.length, o = b.relative[e[0].type], s = o || b.relative[" "], a = o ? 1 : 0, l = d(function(e) {
                    return e === t
                }, s, !0), u = d(function(e) {
                    return te(t, e) > -1
                }, s, !0), c = [function(e, n, i) {
                    var r = !o && (i || n !== E) || ((t = n).nodeType ? l(e, n, i) : u(e, n, i));
                    return t = null, r
                }]; a < r; a++)
                if (n = b.relative[e[a].type]) c = [d(g(c), n)];
                else {
                    if (n = b.filter[e[a].type].apply(null, e[a].matches), n[I]) {
                        for (i = ++a; i < r && !b.relative[e[i].type]; i++);
                        return v(a > 1 && g(c), a > 1 && p(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(le, "$1"), n, a < i && _(e.slice(a, i)), i < r && _(e = e.slice(i)), i < r && p(e))
                    }
                    c.push(n)
                }
            return g(c)
        }

        function x(e, n) {
            var r = n.length > 0,
                o = e.length > 0,
                s = function(i, s, a, l, u) {
                    var c, h, f, p = 0,
                        d = "0",
                        g = i && [],
                        m = [],
                        v = E,
                        _ = i || o && b.find.TAG("*", u),
                        x = z += null == v ? 1 : Math.random() || .1,
                        w = _.length;
                    for (u && (E = s === D || s || u); d !== w && null != (c = _[d]); d++) {
                        if (o && c) {
                            for (h = 0, s || c.ownerDocument === D || (N(c), a = !L); f = e[h++];)
                                if (f(c, s || D, a)) {
                                    l.push(c);
                                    break
                                }
                            u && (z = x)
                        }
                        r && ((c = !f && c) && p--, i && g.push(c))
                    }
                    if (p += d, r && d !== p) {
                        for (h = 0; f = n[h++];) f(g, m, s, a);
                        if (i) {
                            if (p > 0)
                                for (; d--;) g[d] || m[d] || (m[d] = Z.call(l));
                            m = y(m)
                        }
                        J.apply(l, m), u && !i && m.length > 0 && p + n.length > 1 && t.uniqueSort(l)
                    }
                    return u && (z = x, E = v), g
                };
            return r ? i(s) : s
        }
        var w, T, b, S, k, P, C, O, E, M, A, N, D, R, L, F, j, X, B, I = "sizzle" + 1 * new Date,
            q = e.document,
            z = 0,
            Y = 0,
            H = n(),
            W = n(),
            V = n(),
            G = function(e, t) {
                return e === t && (A = !0), 0
            },
            U = {}.hasOwnProperty,
            Q = [],
            Z = Q.pop,
            K = Q.push,
            J = Q.push,
            ee = Q.slice,
            te = function(e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t) return n;
                return -1
            },
            ne = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ie = "[\\x20\\t\\r\\n\\f]",
            re = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            oe = "\\[" + ie + "*(" + re + ")(?:" + ie + "*([*^$|!~]?=)" + ie + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ie + "*\\]",
            se = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
            ae = new RegExp(ie + "+", "g"),
            le = new RegExp("^" + ie + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ie + "+$", "g"),
            ue = new RegExp("^" + ie + "*," + ie + "*"),
            ce = new RegExp("^" + ie + "*([>+~]|" + ie + ")" + ie + "*"),
            he = new RegExp("=" + ie + "*([^\\]'\"]*?)" + ie + "*\\]", "g"),
            fe = new RegExp(se),
            pe = new RegExp("^" + re + "$"),
            de = {
                ID: new RegExp("^#(" + re + ")"),
                CLASS: new RegExp("^\\.(" + re + ")"),
                TAG: new RegExp("^(" + re + "|[*])"),
                ATTR: new RegExp("^" + oe),
                PSEUDO: new RegExp("^" + se),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ie + "*(even|odd|(([+-]|)(\\d*)n|)" + ie + "*(?:([+-]|)" + ie + "*(\\d+)|))" + ie + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + ne + ")$", "i"),
                needsContext: new RegExp("^" + ie + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ie + "*((?:-\\d)?\\d*)" + ie + "*\\)|)(?=[^-]|$)", "i")
            },
            ge = /^(?:input|select|textarea|button)$/i,
            me = /^h\d$/i,
            ye = /^[^{]+\{\s*\[native \w/,
            ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            $ = /[+~]/,
            _e = new RegExp("\\\\([\\da-f]{1,6}" + ie + "?|(" + ie + ")|.)", "ig"),
            xe = function(e, t, n) {
                var i = "0x" + t - 65536;
                return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            we = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            Te = function(e, t) {
                return t ? "\0" === e ? "占�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            be = function() {
                N()
            },
            Se = d(function(e) {
                return e.disabled === !0 && ("form" in e || "label" in e)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            J.apply(Q = ee.call(q.childNodes), q.childNodes), Q[q.childNodes.length].nodeType
        } catch (e) {
            J = {
                apply: Q.length ? function(e, t) {
                    K.apply(e, ee.call(t))
                } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }
        T = t.support = {}, k = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, N = t.setDocument = function(e) {
            var t, n, i = e ? e.ownerDocument || e : q;
            return i !== D && 9 === i.nodeType && i.documentElement ? (D = i, R = D.documentElement, L = !k(D), q !== D && (n = D.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", be, !1) : n.attachEvent && n.attachEvent("onunload", be)), T.attributes = r(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), T.getElementsByTagName = r(function(e) {
                return e.appendChild(D.createComment("")), !e.getElementsByTagName("*").length
            }), T.getElementsByClassName = ye.test(D.getElementsByClassName), T.getById = r(function(e) {
                return R.appendChild(e).id = I, !D.getElementsByName || !D.getElementsByName(I).length
            }), T.getById ? (b.filter.ID = function(e) {
                var t = e.replace(_e, xe);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }, b.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && L) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }) : (b.filter.ID = function(e) {
                var t = e.replace(_e, xe);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }, b.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && L) {
                    var n, i, r, o = t.getElementById(e);
                    if (o) {
                        if (n = o.getAttributeNode("id"), n && n.value === e) return [o];
                        for (r = t.getElementsByName(e), i = 0; o = r[i++];)
                            if (n = o.getAttributeNode("id"), n && n.value === e) return [o]
                    }
                    return []
                }
            }), b.find.TAG = T.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : T.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var n, i = [],
                    r = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return o
            }, b.find.CLASS = T.getElementsByClassName && function(e, t) {
                if ("undefined" != typeof t.getElementsByClassName && L) return t.getElementsByClassName(e)
            }, j = [], F = [], (T.qsa = ye.test(D.querySelectorAll)) && (r(function(e) {
                R.appendChild(e).innerHTML = "<a id='" + I + "'></a><select id='" + I + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && F.push("[*^$]=" + ie + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || F.push("\\[" + ie + "*(?:value|" + ne + ")"), e.querySelectorAll("[id~=" + I + "-]").length || F.push("~="), e.querySelectorAll(":checked").length || F.push(":checked"), e.querySelectorAll("a#" + I + "+*").length || F.push(".#.+[+~]")
            }), r(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = D.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && F.push("name" + ie + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && F.push(":enabled", ":disabled"), R.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && F.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), F.push(",.*:")
            })), (T.matchesSelector = ye.test(X = R.matches || R.webkitMatchesSelector || R.mozMatchesSelector || R.oMatchesSelector || R.msMatchesSelector)) && r(function(e) {
                T.disconnectedMatch = X.call(e, "*"), X.call(e, "[s!='']:x"), j.push("!=", se)
            }), F = F.length && new RegExp(F.join("|")), j = j.length && new RegExp(j.join("|")), t = ye.test(R.compareDocumentPosition), B = t || ye.test(R.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, G = t ? function(e, t) {
                if (e === t) return A = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !T.sortDetached && t.compareDocumentPosition(e) === n ? e === D || e.ownerDocument === q && B(q, e) ? -1 : t === D || t.ownerDocument === q && B(q, t) ? 1 : M ? te(M, e) - te(M, t) : 0 : 4 & n ? -1 : 1)
            } : function(e, t) {
                if (e === t) return A = !0, 0;
                var n, i = 0,
                    r = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    l = [t];
                if (!r || !o) return e === D ? -1 : t === D ? 1 : r ? -1 : o ? 1 : M ? te(M, e) - te(M, t) : 0;
                if (r === o) return s(e, t);
                for (n = e; n = n.parentNode;) a.unshift(n);
                for (n = t; n = n.parentNode;) l.unshift(n);
                for (; a[i] === l[i];) i++;
                return i ? s(a[i], l[i]) : a[i] === q ? -1 : l[i] === q ? 1 : 0
            }, D) : D
        }, t.matches = function(e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== D && N(e), n = n.replace(he, "='$1']"), T.matchesSelector && L && !V[n + " "] && (!j || !j.test(n)) && (!F || !F.test(n))) try {
                var i = X.call(e, n);
                if (i || T.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
            } catch (e) {}
            return t(n, D, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== D && N(e), B(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== D && N(e);
            var n = b.attrHandle[t.toLowerCase()],
                i = n && U.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !L) : void 0;
            return void 0 !== i ? i : T.attributes || !L ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }, t.escape = function(e) {
            return (e + "").replace(we, Te)
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, n = [],
                i = 0,
                r = 0;
            if (A = !T.detectDuplicates, M = !T.sortStable && e.slice(0), e.sort(G), A) {
                for (; t = e[r++];) t === e[r] && (i = n.push(r));
                for (; i--;) e.splice(n[i], 1)
            }
            return M = null, e
        }, S = t.getText = function(e) {
            var t, n = "",
                i = 0,
                r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += S(e)
                } else if (3 === r || 4 === r) return e.nodeValue
            } else
                for (; t = e[i++];) n += S(t);
            return n
        }, b = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: de,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(_e, xe), e[3] = (e[3] || e[4] || e[5] || "").replace(_e, xe), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return de.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && fe.test(n) && (t = P(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(_e, xe).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = H[e + " "];
                    return t || (t = new RegExp("(^|" + ie + ")" + e + "(" + ie + "|$)")) && H(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, i) {
                    return function(r) {
                        var o = t.attr(r, e);
                        return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(ae, " ") + " ").indexOf(i) > -1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(e, t, n, i, r) {
                    var o = "nth" !== e.slice(0, 3),
                        s = "last" !== e.slice(-4),
                        a = "of-type" === t;
                    return 1 === i && 0 === r ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, l) {
                        var u, c, h, f, p, d, g = o !== s ? "nextSibling" : "previousSibling",
                            m = t.parentNode,
                            y = a && t.nodeName.toLowerCase(),
                            v = !l && !a,
                            _ = !1;
                        if (m) {
                            if (o) {
                                for (; g;) {
                                    for (f = t; f = f[g];)
                                        if (a ? f.nodeName.toLowerCase() === y : 1 === f.nodeType) return !1;
                                    d = g = "only" === e && !d && "nextSibling"
                                }
                                return !0
                            }
                            if (d = [s ? m.firstChild : m.lastChild], s && v) {
                                for (f = m, h = f[I] || (f[I] = {}), c = h[f.uniqueID] || (h[f.uniqueID] = {}), u = c[e] || [], p = u[0] === z && u[1], _ = p && u[2], f = p && m.childNodes[p]; f = ++p && f && f[g] || (_ = p = 0) || d.pop();)
                                    if (1 === f.nodeType && ++_ && f === t) {
                                        c[e] = [z, p, _];
                                        break
                                    }
                            } else if (v && (f = t, h = f[I] || (f[I] = {}), c = h[f.uniqueID] || (h[f.uniqueID] = {}), u = c[e] || [], p = u[0] === z && u[1], _ = p), _ === !1)
                                for (;
                                    (f = ++p && f && f[g] || (_ = p = 0) || d.pop()) && ((a ? f.nodeName.toLowerCase() !== y : 1 !== f.nodeType) || !++_ || (v && (h = f[I] || (f[I] = {}), c = h[f.uniqueID] || (h[f.uniqueID] = {}), c[e] = [z, _]), f !== t)););
                            return _ -= r, _ === i || _ % i === 0 && _ / i >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var r, o = b.pseudos[e] || b.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[I] ? o(n) : o.length > 1 ? (r = [e, e, "", n], b.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                        for (var i, r = o(e, n), s = r.length; s--;) i = te(e, r[s]), e[i] = !(t[i] = r[s])
                    }) : function(e) {
                        return o(e, 0, r)
                    }) : o
                }
            },
            pseudos: {
                not: i(function(e) {
                    var t = [],
                        n = [],
                        r = C(e.replace(le, "$1"));
                    return r[I] ? i(function(e, t, n, i) {
                        for (var o, s = r(e, null, i, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
                    }) : function(e, i, o) {
                        return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                    }
                }),
                has: i(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: i(function(e) {
                    return e = e.replace(_e, xe),
                        function(t) {
                            return (t.textContent || t.innerText || S(t)).indexOf(e) > -1
                        }
                }),
                lang: i(function(e) {
                    return pe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(_e, xe).toLowerCase(),
                        function(t) {
                            var n;
                            do
                                if (n = L ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === R
                },
                focus: function(e) {
                    return e === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: u(!1),
                disabled: u(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !b.pseudos.empty(e)
                },
                header: function(e) {
                    return me.test(e.nodeName)
                },
                input: function(e) {
                    return ge.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: c(function() {
                    return [0]
                }),
                last: c(function(e, t) {
                    return [t - 1]
                }),
                eq: c(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: c(function(e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }),
                odd: c(function(e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }),
                lt: c(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
                    return e
                }),
                gt: c(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                    return e
                })
            }
        }, b.pseudos.nth = b.pseudos.eq;
        for (w in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) b.pseudos[w] = a(w);
        for (w in {
                submit: !0,
                reset: !0
            }) b.pseudos[w] = l(w);
        return f.prototype = b.filters = b.pseudos, b.setFilters = new f, P = t.tokenize = function(e, n) {
            var i, r, o, s, a, l, u, c = W[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (a = e, l = [], u = b.preFilter; a;) {
                i && !(r = ue.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(o = [])), i = !1, (r = ce.exec(a)) && (i = r.shift(), o.push({
                    value: i,
                    type: r[0].replace(le, " ")
                }), a = a.slice(i.length));
                for (s in b.filter) !(r = de[s].exec(a)) || u[s] && !(r = u[s](r)) || (i = r.shift(), o.push({
                    value: i,
                    type: s,
                    matches: r
                }), a = a.slice(i.length));
                if (!i) break
            }
            return n ? a.length : a ? t.error(e) : W(e, l).slice(0)
        }, C = t.compile = function(e, t) {
            var n, i = [],
                r = [],
                o = V[e + " "];
            if (!o) {
                for (t || (t = P(e)), n = t.length; n--;) o = _(t[n]), o[I] ? i.push(o) : r.push(o);
                o = V(e, x(r, i)), o.selector = e
            }
            return o
        }, O = t.select = function(e, t, n, i) {
            var r, o, s, a, l, u = "function" == typeof e && e,
                c = !i && P(e = u.selector || e);
            if (n = n || [], 1 === c.length) {
                if (o = c[0] = c[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && 9 === t.nodeType && L && b.relative[o[1].type]) {
                    if (t = (b.find.ID(s.matches[0].replace(_e, xe), t) || [])[0], !t) return n;
                    u && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (r = de.needsContext.test(e) ? 0 : o.length; r-- && (s = o[r], !b.relative[a = s.type]);)
                    if ((l = b.find[a]) && (i = l(s.matches[0].replace(_e, xe), $.test(o[0].type) && h(t.parentNode) || t))) {
                        if (o.splice(r, 1), e = i.length && p(o), !e) return J.apply(n, i), n;
                        break
                    }
            }
            return (u || C(e, c))(i, t, !L, n, !t || $.test(e) && h(t.parentNode) || t), n
        }, T.sortStable = I.split("").sort(G).join("") === I, T.detectDuplicates = !!A, N(), T.sortDetached = r(function(e) {
            return 1 & e.compareDocumentPosition(D.createElement("fieldset"))
        }), r(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), T.attributes && r(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), r(function(e) {
            return null == e.getAttribute("disabled")
        }) || o(ne, function(e, t, n) {
            var i;
            if (!n) return e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), t
    }(e);
    de.find = _e, de.expr = _e.selectors, de.expr[":"] = de.expr.pseudos, de.uniqueSort = de.unique = _e.uniqueSort, de.text = _e.getText, de.isXMLDoc = _e.isXML, de.contains = _e.contains, de.escapeSelector = _e.escape;
    var xe = function(e, t, n) {
            for (var i = [], r = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (r && de(e).is(n)) break;
                    i.push(e)
                }
            return i
        },
        we = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        Te = de.expr.match.needsContext,
        be = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        Se = /^.[^:#\[\.,]*$/;
    de.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? de.find.matchesSelector(i, e) ? [i] : [] : de.find.matches(e, de.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, de.fn.extend({
        find: function(e) {
            var t, n, i = this.length,
                r = this;
            if ("string" != typeof e) return this.pushStack(de(e).filter(function() {
                for (t = 0; t < i; t++)
                    if (de.contains(r[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < i; t++) de.find(e, r[t], n);
            return i > 1 ? de.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(r(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(r(this, e || [], !0))
        },
        is: function(e) {
            return !!r(this, "string" == typeof e && Te.test(e) ? de(e) : e || [], !1).length
        }
    });
    var ke, Pe = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        Ce = de.fn.init = function(e, t, n) {
            var i, r;
            if (!e) return this;
            if (n = n || ke, "string" == typeof e) {
                if (i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Pe.exec(e), !i || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (i[1]) {
                    if (t = t instanceof de ? t[0] : t, de.merge(this, de.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : te, !0)), be.test(i[1]) && de.isPlainObject(t))
                        for (i in t) de.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                    return this
                }
                return r = te.getElementById(i[2]), r && (this[0] = r, this.length = 1), this
            }
            return e.nodeType ? (this[0] = e, this.length = 1, this) : de.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(de) : de.makeArray(e, this)
        };
    Ce.prototype = de.fn, ke = de(te);
    var Oe = /^(?:parents|prev(?:Until|All))/,
        Ee = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    de.fn.extend({
        has: function(e) {
            var t = de(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (de.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, i = 0,
                r = this.length,
                o = [],
                s = "string" != typeof e && de(e);
            if (!Te.test(e))
                for (; i < r; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && de.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(o.length > 1 ? de.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? se.call(de(e), this[0]) : se.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(de.uniqueSort(de.merge(this.get(), de(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), de.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return xe(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return xe(e, "parentNode", n)
        },
        next: function(e) {
            return o(e, "nextSibling")
        },
        prev: function(e) {
            return o(e, "previousSibling")
        },
        nextAll: function(e) {
            return xe(e, "nextSibling")
        },
        prevAll: function(e) {
            return xe(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return xe(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return xe(e, "previousSibling", n)
        },
        siblings: function(e) {
            return we((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return we(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || de.merge([], e.childNodes)
        }
    }, function(e, t) {
        de.fn[e] = function(n, i) {
            var r = de.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = de.filter(i, r)), this.length > 1 && (Ee[e] || de.uniqueSort(r), Oe.test(e) && r.reverse()), this.pushStack(r)
        }
    });
    var Me = /[^\x20\t\r\n\f]+/g;
    de.Callbacks = function(e) {
        e = "string" == typeof e ? s(e) : de.extend({}, e);
        var t, n, i, r, o = [],
            a = [],
            l = -1,
            u = function() {
                for (r = e.once, i = t = !0; a.length; l = -1)
                    for (n = a.shift(); ++l < o.length;) o[l].apply(n[0], n[1]) === !1 && e.stopOnFalse && (l = o.length, n = !1);
                e.memory || (n = !1), t = !1, r && (o = n ? [] : "")
            },
            c = {
                add: function() {
                    return o && (n && !t && (l = o.length - 1, a.push(n)), function t(n) {
                        de.each(n, function(n, i) {
                            de.isFunction(i) ? e.unique && c.has(i) || o.push(i) : i && i.length && "string" !== de.type(i) && t(i)
                        })
                    }(arguments), n && !t && u()), this
                },
                remove: function() {
                    return de.each(arguments, function(e, t) {
                        for (var n;
                            (n = de.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function(e) {
                    return e ? de.inArray(e, o) > -1 : o.length > 0
                },
                empty: function() {
                    return o && (o = []), this
                },
                disable: function() {
                    return r = a = [], o = n = "", this
                },
                disabled: function() {
                    return !o
                },
                lock: function() {
                    return r = a = [], n || t || (o = n = ""), this
                },
                locked: function() {
                    return !!r
                },
                fireWith: function(e, n) {
                    return r || (n = n || [], n = [e, n.slice ? n.slice() : n], a.push(n), t || u()), this
                },
                fire: function() {
                    return c.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return c
    }, de.extend({
        Deferred: function(t) {
            var n = [
                    ["notify", "progress", de.Callbacks("memory"), de.Callbacks("memory"), 2],
                    ["resolve", "done", de.Callbacks("once memory"), de.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", de.Callbacks("once memory"), de.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                r = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    catch: function(e) {
                        return r.then(null, e)
                    },
                    pipe: function() {
                        var e = arguments;
                        return de.Deferred(function(t) {
                            de.each(n, function(n, i) {
                                var r = de.isFunction(e[i[4]]) && e[i[4]];
                                o[i[1]](function() {
                                    var e = r && r.apply(this, arguments);
                                    e && de.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, r ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    then: function(t, i, r) {
                        function o(t, n, i, r) {
                            return function() {
                                var u = this,
                                    c = arguments,
                                    h = function() {
                                        var e, h;
                                        if (!(t < s)) {
                                            if (e = i.apply(u, c), e === n.promise()) throw new TypeError("Thenable self-resolution");
                                            h = e && ("object" == typeof e || "function" == typeof e) && e.then, de.isFunction(h) ? r ? h.call(e, o(s, n, a, r), o(s, n, l, r)) : (s++, h.call(e, o(s, n, a, r), o(s, n, l, r), o(s, n, a, n.notifyWith))) : (i !== a && (u = void 0, c = [e]), (r || n.resolveWith)(u, c))
                                        }
                                    },
                                    f = r ? h : function() {
                                        try {
                                            h()
                                        } catch (e) {
                                            de.Deferred.exceptionHook && de.Deferred.exceptionHook(e, f.stackTrace), t + 1 >= s && (i !== l && (u = void 0, c = [e]), n.rejectWith(u, c))
                                        }
                                    };
                                t ? f() : (de.Deferred.getStackHook && (f.stackTrace = de.Deferred.getStackHook()), e.setTimeout(f))
                            }
                        }
                        var s = 0;
                        return de.Deferred(function(e) {
                            n[0][3].add(o(0, e, de.isFunction(r) ? r : a, e.notifyWith)), n[1][3].add(o(0, e, de.isFunction(t) ? t : a)), n[2][3].add(o(0, e, de.isFunction(i) ? i : l))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? de.extend(e, r) : r
                    }
                },
                o = {};
            return de.each(n, function(e, t) {
                var s = t[2],
                    a = t[5];
                r[t[1]] = s.add, a && s.add(function() {
                    i = a
                }, n[3 - e][2].disable, n[0][2].lock), s.add(t[3].fire), o[t[0]] = function() {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[t[0] + "With"] = s.fireWith
            }), r.promise(o), t && t.call(o, o), o
        },
        when: function(e) {
            var t = arguments.length,
                n = t,
                i = Array(n),
                r = ie.call(arguments),
                o = de.Deferred(),
                s = function(e) {
                    return function(n) {
                        i[e] = this, r[e] = arguments.length > 1 ? ie.call(arguments) : n, --t || o.resolveWith(i, r)
                    }
                };
            if (t <= 1 && (u(e, o.done(s(n)).resolve, o.reject), "pending" === o.state() || de.isFunction(r[n] && r[n].then))) return o.then();
            for (; n--;) u(r[n], s(n), o.reject);
            return o.promise()
        }
    });
    var Ae = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    de.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && Ae.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, de.readyException = function(t) {
        e.setTimeout(function() {
            throw t
        })
    };
    var Ne = de.Deferred();
    de.fn.ready = function(e) {
        return Ne.then(e).catch(function(e) {
            de.readyException(e)
        }), this
    }, de.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? de.readyWait++ : de.ready(!0)
        },
        ready: function(e) {
            (e === !0 ? --de.readyWait : de.isReady) || (de.isReady = !0, e !== !0 && --de.readyWait > 0 || Ne.resolveWith(te, [de]))
        }
    }), de.ready.then = Ne.then, "complete" === te.readyState || "loading" !== te.readyState && !te.documentElement.doScroll ? e.setTimeout(de.ready) : (te.addEventListener("DOMContentLoaded", c), e.addEventListener("load", c));
    var De = function(e, t, n, i, r, o, s) {
            var a = 0,
                l = e.length,
                u = null == n;
            if ("object" === de.type(n)) {
                r = !0;
                for (a in n) De(e, t, a, n[a], !0, o, s)
            } else if (void 0 !== i && (r = !0, de.isFunction(i) || (s = !0), u && (s ? (t.call(e, i), t = null) : (u = t, t = function(e, t, n) {
                    return u.call(de(e), n)
                })), t))
                for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
            return r ? e : u ? t.call(e) : l ? t(e[0], n) : o
        },
        Re = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
    h.uid = 1, h.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, Re(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var i, r = this.cache(e);
            if ("string" == typeof t) r[de.camelCase(t)] = n;
            else
                for (i in t) r[de.camelCase(i)] = t[i];
            return r
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][de.camelCase(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    de.isArray(t) ? t = t.map(de.camelCase) : (t = de.camelCase(t), t = t in i ? [t] : t.match(Me) || []), n = t.length;
                    for (; n--;) delete i[t[n]]
                }(void 0 === t || de.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !de.isEmptyObject(t)
        }
    };
    var Le = new h,
        Fe = new h,
        je = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Xe = /[A-Z]/g;
    de.extend({
        hasData: function(e) {
            return Fe.hasData(e) || Le.hasData(e)
        },
        data: function(e, t, n) {
            return Fe.access(e, t, n)
        },
        removeData: function(e, t) {
            Fe.remove(e, t)
        },
        _data: function(e, t, n) {
            return Le.access(e, t, n)
        },
        _removeData: function(e, t) {
            Le.remove(e, t)
        }
    }), de.fn.extend({
        data: function(e, t) {
            var n, i, r, o = this[0],
                s = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (r = Fe.get(o), 1 === o.nodeType && !Le.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--;) s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = de.camelCase(i.slice(5)), $(o, i, r[i])));
                    Le.set(o, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each(function() {
                Fe.set(this, e)
            }) : De(this, function(t) {
                var n;
                if (o && void 0 === t) {
                    if (n = Fe.get(o, e), void 0 !== n) return n;
                    if (n = $(o, e), void 0 !== n) return n
                } else this.each(function() {
                    Fe.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                Fe.remove(this, e)
            })
        }
    }), de.extend({
        queue: function(e, t, n) {
            var i;
            if (e) return t = (t || "fx") + "queue", i = Le.get(e, t), n && (!i || de.isArray(n) ? i = Le.access(e, t, de.makeArray(n)) : i.push(n)), i || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = de.queue(e, t),
                i = n.length,
                r = n.shift(),
                o = de._queueHooks(e, t),
                s = function() {
                    de.dequeue(e, t)
                };
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, s, o)), !i && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Le.get(e, n) || Le.access(e, n, {
                empty: de.Callbacks("once memory").add(function() {
                    Le.remove(e, [t + "queue", n])
                })
            })
        }
    }), de.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? de.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = de.queue(this, e, t);
                de._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && de.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                de.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1,
                r = de.Deferred(),
                o = this,
                s = this.length,
                a = function() {
                    --i || r.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) n = Le.get(o[s], e + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
            return a(), r.promise(t)
        }
    });
    var Be = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Ie = new RegExp("^(?:([+-])=|)(" + Be + ")([a-z%]*)$", "i"),
        qe = ["Top", "Right", "Bottom", "Left"],
        ze = function(e, t) {
            return e = t || e, "none" === e.style.display || "" === e.style.display && de.contains(e.ownerDocument, e) && "none" === de.css(e, "display")
        },
        $e = function(e, t, n, i) {
            var r, o, s = {};
            for (o in t) s[o] = e.style[o], e.style[o] = t[o];
            r = n.apply(e, i || []);
            for (o in t) e.style[o] = s[o];
            return r
        },
        Ye = {};
    de.fn.extend({
        show: function() {
            return g(this, !0)
        },
        hide: function() {
            return g(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ze(this) ? de(this).show() : de(this).hide()
            })
        }
    });
    var He = /^(?:checkbox|radio)$/i,
        We = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        Ve = /^$|\/(?:java|ecma)script/i,
        Ge = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Ge.optgroup = Ge.option, Ge.tbody = Ge.tfoot = Ge.colgroup = Ge.caption = Ge.thead, Ge.th = Ge.td;
    var Ue = /<|&#?\w+;/;
    ! function() {
        var e = te.createDocumentFragment(),
            t = e.appendChild(te.createElement("div")),
            n = te.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), fe.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", fe.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var Qe = te.documentElement,
        Ze = /^key/,
        Ke = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Je = /^([^.]*)(?:\.(.+)|)/;
    de.event = {
        global: {},
        add: function(e, t, n, i, r) {
            var o, s, a, l, u, c, h, f, p, d, g, m = Le.get(e);
            if (m)
                for (n.handler && (o = n, n = o.handler, r = o.selector), r && de.find.matchesSelector(Qe, r), n.guid || (n.guid = de.guid++), (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function(t) {
                        return "undefined" != typeof de && de.event.triggered !== t.type ? de.event.dispatch.apply(e, arguments) : void 0
                    }), t = (t || "").match(Me) || [""], u = t.length; u--;) a = Je.exec(t[u]) || [], p = g = a[1], d = (a[2] || "").split(".").sort(), p && (h = de.event.special[p] || {}, p = (r ? h.delegateType : h.bindType) || p, h = de.event.special[p] || {}, c = de.extend({
                    type: p,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && de.expr.match.needsContext.test(r),
                    namespace: d.join(".")
                }, o), (f = l[p]) || (f = l[p] = [], f.delegateCount = 0, h.setup && h.setup.call(e, i, d, s) !== !1 || e.addEventListener && e.addEventListener(p, s)), h.add && (h.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), r ? f.splice(f.delegateCount++, 0, c) : f.push(c), de.event.global[p] = !0)
        },
        remove: function(e, t, n, i, r) {
            var o, s, a, l, u, c, h, f, p, d, g, m = Le.hasData(e) && Le.get(e);
            if (m && (l = m.events)) {
                for (t = (t || "").match(Me) || [""], u = t.length; u--;)
                    if (a = Je.exec(t[u]) || [], p = g = a[1], d = (a[2] || "").split(".").sort(), p) {
                        for (h = de.event.special[p] || {}, p = (i ? h.delegateType : h.bindType) || p, f = l[p] || [], a = a[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = f.length; o--;) c = f[o], !r && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (f.splice(o, 1), c.selector && f.delegateCount--, h.remove && h.remove.call(e, c));
                        s && !f.length && (h.teardown && h.teardown.call(e, d, m.handle) !== !1 || de.removeEvent(e, p, m.handle), delete l[p])
                    } else
                        for (p in l) de.event.remove(e, p + t[u], n, i, !0);
                de.isEmptyObject(l) && Le.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t = de.event.fix(e),
                n, i, r, o, s, a, l = new Array(arguments.length),
                u = (Le.get(this, "events") || {})[t.type] || [],
                c = de.event.special[t.type] || {};
            for (l[0] = t, n = 1; n < arguments.length; n++) l[n] = arguments[n];
            if (t.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, t) !== !1) {
                for (a = de.event.handlers.call(this, t, u), n = 0;
                    (o = a[n++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = o.elem, i = 0;
                        (s = o.handlers[i++]) && !t.isImmediatePropagationStopped();) t.rnamespace && !t.rnamespace.test(s.namespace) || (t.handleObj = s, t.data = s.data, r = ((de.event.special[s.origType] || {}).handle || s.handler).apply(o.elem, l), void 0 !== r && (t.result = r) === !1 && (t.preventDefault(), t.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(e, t) {
            var n, i, r, o, s, a = [],
                l = t.delegateCount,
                u = e.target;
            if (l && u.nodeType && !("click" === e.type && e.button >= 1))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && ("click" !== e.type || u.disabled !== !0)) {
                        for (o = [], s = {}, n = 0; n < l; n++) i = t[n], r = i.selector + " ", void 0 === s[r] && (s[r] = i.needsContext ? de(r, this).index(u) > -1 : de.find(r, this, null, [u]).length), s[r] && o.push(i);
                        o.length && a.push({
                            elem: u,
                            handlers: o
                        })
                    }
            return u = this, l < t.length && a.push({
                elem: u,
                handlers: t.slice(l)
            }), a
        },
        addProp: function(e, t) {
            Object.defineProperty(de.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: de.isFunction(t) ? function() {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[de.expando] ? e : new de.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== w() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === w() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && de.nodeName(this, "input")) return this.click(), !1
                },
                _default: function(e) {
                    return de.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, de.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, de.Event = function(e, t) {
        return this instanceof de.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? _ : x, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && de.extend(this, t), this.timeStamp = e && e.timeStamp || de.now(), void(this[de.expando] = !0)) : new de.Event(e, t)
    }, de.Event.prototype = {
        constructor: de.Event,
        isDefaultPrevented: x,
        isPropagationStopped: x,
        isImmediatePropagationStopped: x,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = _, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = _, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = _, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, de.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && Ze.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ke.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, de.event.addProp), de.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        de.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = this,
                    r = e.relatedTarget,
                    o = e.handleObj;
                return r && (r === i || de.contains(i, r)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), de.fn.extend({
        on: function(e, t, n, i) {
            return T(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
            return T(this, e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, de(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this
            }
            return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = x), this.each(function() {
                de.event.remove(this, e, n, t)
            })
        }
    });
    var et = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        tt = /<script|<style|<link/i,
        nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        it = /^true\/(.*)/,
        rt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    de.extend({
        htmlPrefilter: function(e) {
            return e.replace(et, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var i, r, o, s, a = e.cloneNode(!0),
                l = de.contains(e.ownerDocument, e);
            if (!(fe.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || de.isXMLDoc(e)))
                for (s = m(a), o = m(e), i = 0, r = o.length; i < r; i++) C(o[i], s[i]);
            if (t)
                if (n)
                    for (o = o || m(e), s = s || m(a), i = 0, r = o.length; i < r; i++) P(o[i], s[i]);
                else P(e, a);
            return s = m(a, "script"), s.length > 0 && y(s, !l && m(e, "script")), a
        },
        cleanData: function(e) {
            for (var t, n, i, r = de.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (Re(n)) {
                    if (t = n[Le.expando]) {
                        if (t.events)
                            for (i in t.events) r[i] ? de.event.remove(n, i) : de.removeEvent(n, i, t.handle);
                        n[Le.expando] = void 0
                    }
                    n[Fe.expando] && (n[Fe.expando] = void 0)
                }
        }
    }), de.fn.extend({
        detach: function(e) {
            return E(this, e, !0)
        },
        remove: function(e) {
            return E(this, e)
        },
        text: function(e) {
            return De(this, function(e) {
                return void 0 === e ? de.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return O(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = b(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return O(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = b(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return O(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return O(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (de.cleanData(m(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return de.clone(this, e, t)
            })
        },
        html: function(e) {
            return De(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !tt.test(e) && !Ge[(We.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = de.htmlPrefilter(e);
                    try {
                        for (; n < i; n++) t = this[n] || {}, 1 === t.nodeType && (de.cleanData(m(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return O(this, arguments, function(t) {
                var n = this.parentNode;
                de.inArray(this, e) < 0 && (de.cleanData(m(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), de.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        de.fn[e] = function(e) {
            for (var n, i = [], r = de(e), o = r.length - 1, s = 0; s <= o; s++) n = s === o ? this : this.clone(!0), de(r[s])[t](n), oe.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var ot = /^margin/,
        st = new RegExp("^(" + Be + ")(?!px)[a-z%]+$", "i"),
        at = function(t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        };
    ! function() {
        function t() {
            if (a) {
                a.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Qe.appendChild(s);
                var t = e.getComputedStyle(a);
                n = "1%" !== t.top, o = "2px" === t.marginLeft, i = "4px" === t.width, a.style.marginRight = "50%", r = "4px" === t.marginRight, Qe.removeChild(s), a = null
            }
        }
        var n, i, r, o, s = te.createElement("div"),
            a = te.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", fe.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), de.extend(fe, {
            pixelPosition: function() {
                return t(), n
            },
            boxSizingReliable: function() {
                return t(), i
            },
            pixelMarginRight: function() {
                return t(), r
            },
            reliableMarginLeft: function() {
                return t(), o
            }
        }))
    }();
    var lt = /^(none|table(?!-c[ea]).+)/,
        ut = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        ct = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        ht = ["Webkit", "Moz", "ms"],
        ft = te.createElement("div").style;
    de.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = M(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, s, a = de.camelCase(t),
                    l = e.style;
                return t = de.cssProps[a] || (de.cssProps[a] = N(a) || a), s = de.cssHooks[t] || de.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : l[t] : (o = typeof n, "string" === o && (r = Ie.exec(n)) && r[1] && (n = p(e, t, r), o = "number"), void(null != n && n === n && ("number" === o && (n += r && r[3] || (de.cssNumber[a] ? "" : "px")), fe.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l[t] = n))))
            }
        },
        css: function(e, t, n, i) {
            var r, o, s, a = de.camelCase(t);
            return t = de.cssProps[a] || (de.cssProps[a] = N(a) || a), s = de.cssHooks[t] || de.cssHooks[a], s && "get" in s && (r = s.get(e, !0, n)), void 0 === r && (r = M(e, t, i)), "normal" === r && t in ct && (r = ct[t]), "" === n || n ? (o = parseFloat(r), n === !0 || isFinite(o) ? o || 0 : r) : r
        }
    }), de.each(["height", "width"], function(e, t) {
        de.cssHooks[t] = {
            get: function(e, n, i) {
                if (n) return !lt.test(de.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? L(e, t, i) : $e(e, ut, function() {
                    return L(e, t, i)
                })
            },
            set: function(e, n, i) {
                var r, o = i && at(e),
                    s = i && R(e, t, i, "border-box" === de.css(e, "boxSizing", !1, o), o);
                return s && (r = Ie.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = de.css(e, t)), D(e, n, s)
            }
        }
    }), de.cssHooks.marginLeft = A(fe.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(M(e, "marginLeft")) || e.getBoundingClientRect().left - $e(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), de.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        de.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + qe[i] + t] = o[i] || o[i - 2] || o[0];
                return r
            }
        }, ot.test(e) || (de.cssHooks[e + t].set = D)
    }), de.fn.extend({
        css: function(e, t) {
            return De(this, function(e, t, n) {
                var i, r, o = {},
                    s = 0;
                if (de.isArray(t)) {
                    for (i = at(e), r = t.length; s < r; s++) o[t[s]] = de.css(e, t[s], !1, i);
                    return o
                }
                return void 0 !== n ? de.style(e, t, n) : de.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }), de.Tween = F, F.prototype = {
        constructor: F,
        init: function(e, t, n, i, r, o) {
            this.elem = e, this.prop = n, this.easing = r || de.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (de.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = F.propHooks[this.prop];
            return e && e.get ? e.get(this) : F.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = F.propHooks[this.prop];
            return this.options.duration ? this.pos = t = de.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : F.propHooks._default.set(this), this
        }
    }, F.prototype.init.prototype = F.prototype, F.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = de.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
            },
            set: function(e) {
                de.fx.step[e.prop] ? de.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[de.cssProps[e.prop]] && !de.cssHooks[e.prop] ? e.elem[e.prop] = e.now : de.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, F.propHooks.scrollTop = F.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, de.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, de.fx = F.prototype.init, de.fx.step = {};
    var pt, dt, gt = /^(?:toggle|show|hide)$/,
        mt = /queueHooks$/;
    de.Animation = de.extend(Y, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return p(n.elem, e, Ie.exec(t), n), n
                }]
            },
            tweener: function(e, t) {
                de.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Me);
                for (var n, i = 0, r = e.length; i < r; i++) n = e[i], Y.tweeners[n] = Y.tweeners[n] || [], Y.tweeners[n].unshift(t)
            },
            prefilters: [q],
            prefilter: function(e, t) {
                t ? Y.prefilters.unshift(e) : Y.prefilters.push(e)
            }
        }), de.speed = function(e, t, n) {
            var i = e && "object" == typeof e ? de.extend({}, e) : {
                complete: n || !n && t || de.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !de.isFunction(t) && t
            };
            return de.fx.off || te.hidden ? i.duration = 0 : "number" != typeof i.duration && (i.duration in de.fx.speeds ? i.duration = de.fx.speeds[i.duration] : i.duration = de.fx.speeds._default), null != i.queue && i.queue !== !0 || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                de.isFunction(i.old) && i.old.call(this), i.queue && de.dequeue(this, i.queue)
            }, i
        }, de.fn.extend({
            fadeTo: function(e, t, n, i) {
                return this.filter(ze).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function(e, t, n, i) {
                var r = de.isEmptyObject(e),
                    o = de.speed(t, n, i),
                    s = function() {
                        var t = Y(this, de.extend({}, e), o);
                        (r || Le.get(this, "finish")) && t.stop(!0)
                    };
                return s.finish = s, r || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
            },
            stop: function(e, t, n) {
                var i = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        r = null != e && e + "queueHooks",
                        o = de.timers,
                        s = Le.get(this);
                    if (r) s[r] && s[r].stop && i(s[r]);
                    else
                        for (r in s) s[r] && s[r].stop && mt.test(r) && i(s[r]);
                    for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
                    !t && n || de.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = Le.get(this),
                        i = n[e + "queue"],
                        r = n[e + "queueHooks"],
                        o = de.timers,
                        s = i ? i.length : 0;
                    for (n.finish = !0, de.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                })
            }
        }), de.each(["toggle", "show", "hide"], function(e, t) {
            var n = de.fn[t];
            de.fn[t] = function(e, i, r) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(B(t, !0), e, i, r)
            }
        }), de.each({
            slideDown: B("show"),
            slideUp: B("hide"),
            slideToggle: B("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            de.fn[e] = function(e, n, i) {
                return this.animate(t, e, n, i)
            }
        }), de.timers = [], de.fx.tick = function() {
            var e, t = 0,
                n = de.timers;
            for (pt = de.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
            n.length || de.fx.stop(), pt = void 0
        }, de.fx.timer = function(e) {
            de.timers.push(e), e() ? de.fx.start() : de.timers.pop()
        }, de.fx.interval = 13, de.fx.start = function() {
            dt || (dt = e.requestAnimationFrame ? e.requestAnimationFrame(j) : e.setInterval(de.fx.tick, de.fx.interval))
        }, de.fx.stop = function() {
            e.cancelAnimationFrame ? e.cancelAnimationFrame(dt) : e.clearInterval(dt), dt = null
        }, de.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, de.fn.delay = function(t, n) {
            return t = de.fx ? de.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, i) {
                var r = e.setTimeout(n, t);
                i.stop = function() {
                    e.clearTimeout(r)
                }
            })
        },
        function() {
            var e = te.createElement("input"),
                t = te.createElement("select"),
                n = t.appendChild(te.createElement("option"));
            e.type = "checkbox", fe.checkOn = "" !== e.value, fe.optSelected = n.selected, e = te.createElement("input"), e.value = "t", e.type = "radio", fe.radioValue = "t" === e.value
        }();
    var yt, vt = de.expr.attrHandle;
    de.fn.extend({
        attr: function(e, t) {
            return De(this, de.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                de.removeAttr(this, e)
            })
        }
    }), de.extend({
        attr: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? de.prop(e, t, n) : (1 === o && de.isXMLDoc(e) || (r = de.attrHooks[t.toLowerCase()] || (de.expr.match.bool.test(t) ? yt : void 0)), void 0 !== n ? null === n ? void de.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = de.find.attr(e, t), null == i ? void 0 : i))
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!fe.radioValue && "radio" === t && de.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i = 0,
                r = t && t.match(Me);
            if (r && 1 === e.nodeType)
                for (; n = r[i++];) e.removeAttribute(n)
        }
    }), yt = {
        set: function(e, t, n) {
            return t === !1 ? de.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, de.each(de.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = vt[t] || de.find.attr;
        vt[t] = function(e, t, i) {
            var r, o, s = t.toLowerCase();
            return i || (o = vt[s], vt[s] = r, r = null != n(e, t, i) ? s : null, vt[s] = o), r
        }
    });
    var _t = /^(?:input|select|textarea|button)$/i,
        xt = /^(?:a|area)$/i;
    de.fn.extend({
        prop: function(e, t) {
            return De(this, de.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[de.propFix[e] || e]
            })
        }
    }), de.extend({
        prop: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && de.isXMLDoc(e) || (t = de.propFix[t] || t, r = de.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = de.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : _t.test(e.nodeName) || xt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), fe.optSelected || (de.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), de.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        de.propFix[this.toLowerCase()] = this
    }), de.fn.extend({
        addClass: function(e) {
            var t, n, i, r, o, s, a, l = 0;
            if (de.isFunction(e)) return this.each(function(t) {
                de(this).addClass(e.call(this, t, W(this)))
            });
            if ("string" == typeof e && e)
                for (t = e.match(Me) || []; n = this[l++];)
                    if (r = W(n), i = 1 === n.nodeType && " " + H(r) + " ") {
                        for (s = 0; o = t[s++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        a = H(i), r !== a && n.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, i, r, o, s, a, l = 0;
            if (de.isFunction(e)) return this.each(function(t) {
                de(this).removeClass(e.call(this, t, W(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(Me) || []; n = this[l++];)
                    if (r = W(n), i = 1 === n.nodeType && " " + H(r) + " ") {
                        for (s = 0; o = t[s++];)
                            for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
                        a = H(i), r !== a && n.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : de.isFunction(e) ? this.each(function(n) {
                de(this).toggleClass(e.call(this, n, W(this), t), t)
            }) : this.each(function() {
                var t, i, r, o;
                if ("string" === n)
                    for (i = 0, r = de(this), o = e.match(Me) || []; t = o[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                else void 0 !== e && "boolean" !== n || (t = W(this), t && Le.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : Le.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];)
                if (1 === n.nodeType && (" " + H(W(n)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var wt = /\r/g;
    de.fn.extend({
        val: function(e) {
            var t, n, i, r = this[0];
            return arguments.length ? (i = de.isFunction(e), this.each(function(n) {
                var r;
                1 === this.nodeType && (r = i ? e.call(this, n, de(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : de.isArray(r) && (r = de.map(r, function(e) {
                    return null == e ? "" : e + ""
                })), t = de.valHooks[this.type] || de.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
            })) : r ? (t = de.valHooks[r.type] || de.valHooks[r.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(wt, "") : null == n ? "" : n)) : void 0
        }
    }), de.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = de.find.attr(e, "value");
                    return null != t ? t : H(de.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, i, r = e.options,
                        o = e.selectedIndex,
                        s = "select-one" === e.type,
                        a = s ? null : [],
                        l = s ? o + 1 : r.length;
                    for (i = o < 0 ? l : s ? o : 0; i < l; i++)
                        if (n = r[i], (n.selected || i === o) && !n.disabled && (!n.parentNode.disabled || !de.nodeName(n.parentNode, "optgroup"))) {
                            if (t = de(n).val(), s) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, i, r = e.options, o = de.makeArray(t), s = r.length; s--;) i = r[s], (i.selected = de.inArray(de.valHooks.option.get(i), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), de.each(["radio", "checkbox"], function() {
        de.valHooks[this] = {
            set: function(e, t) {
                if (de.isArray(t)) return e.checked = de.inArray(de(e).val(), t) > -1
            }
        }, fe.checkOn || (de.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Tt = /^(?:focusinfocus|focusoutblur)$/;
    de.extend(de.event, {
        trigger: function(t, n, i, r) {
            var o, s, a, l, u, c, h, f = [i || te],
                p = ue.call(t, "type") ? t.type : t,
                d = ue.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = a = i = i || te, 3 !== i.nodeType && 8 !== i.nodeType && !Tt.test(p + de.event.triggered) && (p.indexOf(".") > -1 && (d = p.split("."), p = d.shift(), d.sort()), u = p.indexOf(":") < 0 && "on" + p, t = t[de.expando] ? t : new de.Event(p, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = d.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : de.makeArray(n, [t]), h = de.event.special[p] || {}, r || !h.trigger || h.trigger.apply(i, n) !== !1)) {
                if (!r && !h.noBubble && !de.isWindow(i)) {
                    for (l = h.delegateType || p, Tt.test(l + p) || (s = s.parentNode); s; s = s.parentNode) f.push(s), a = s;
                    a === (i.ownerDocument || te) && f.push(a.defaultView || a.parentWindow || e)
                }
                for (o = 0;
                    (s = f[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? l : h.bindType || p, c = (Le.get(s, "events") || {})[t.type] && Le.get(s, "handle"), c && c.apply(s, n), c = u && s[u], c && c.apply && Re(s) && (t.result = c.apply(s, n), t.result === !1 && t.preventDefault());
                return t.type = p, r || t.isDefaultPrevented() || h._default && h._default.apply(f.pop(), n) !== !1 || !Re(i) || u && de.isFunction(i[p]) && !de.isWindow(i) && (a = i[u], a && (i[u] = null), de.event.triggered = p, i[p](), de.event.triggered = void 0, a && (i[u] = a)), t.result
            }
        },
        simulate: function(e, t, n) {
            var i = de.extend(new de.Event, n, {
                type: e,
                isSimulated: !0
            });
            de.event.trigger(i, null, t)
        }
    }), de.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                de.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return de.event.trigger(e, t, n, !0)
        }
    }), de.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        de.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), de.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), fe.focusin = "onfocusin" in e, fe.focusin || de.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            de.event.simulate(t, e.target, de.event.fix(e))
        };
        de.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    r = Le.access(i, t);
                r || i.addEventListener(e, n, !0), Le.access(i, t, (r || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    r = Le.access(i, t) - 1;
                r ? Le.access(i, t, r) : (i.removeEventListener(e, n, !0), Le.remove(i, t))
            }
        }
    });
    var bt = e.location,
        St = de.now(),
        kt = /\?/;
    de.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || de.error("Invalid XML: " + t), n
    };
    var Pt = /\[\]$/,
        Ct = /\r?\n/g,
        Ot = /^(?:submit|button|image|reset|file)$/i,
        Et = /^(?:input|select|textarea|keygen)/i;
    de.param = function(e, t) {
        var n, i = [],
            r = function(e, t) {
                var n = de.isFunction(t) ? t() : t;
                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (de.isArray(e) || e.jquery && !de.isPlainObject(e)) de.each(e, function() {
            r(this.name, this.value)
        });
        else
            for (n in e) V(n, e[n], t, r);
        return i.join("&")
    }, de.fn.extend({
        serialize: function() {
            return de.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = de.prop(this, "elements");
                return e ? de.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !de(this).is(":disabled") && Et.test(this.nodeName) && !Ot.test(e) && (this.checked || !He.test(e))
            }).map(function(e, t) {
                var n = de(this).val();
                return null == n ? null : de.isArray(n) ? de.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Ct, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Ct, "\r\n")
                }
            }).get()
        }
    });
    var Mt = /%20/g,
        At = /#.*$/,
        Nt = /([?&])_=[^&]*/,
        Dt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Rt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Lt = /^(?:GET|HEAD)$/,
        Ft = /^\/\//,
        jt = {},
        Xt = {},
        Bt = "*/".concat("*"),
        It = te.createElement("a");
    It.href = bt.href, de.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: bt.href,
            type: "GET",
            isLocal: Rt.test(bt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Bt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": de.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Q(Q(e, de.ajaxSettings), t) : Q(de.ajaxSettings, e)
        },
        ajaxPrefilter: G(jt),
        ajaxTransport: G(Xt),
        ajax: function(t, n) {
            function i(t, n, i, a) {
                var u, f, p, x, w, T = n;
                c || (c = !0, l && e.clearTimeout(l), r = void 0, s = a || "", b.readyState = t > 0 ? 4 : 0, u = t >= 200 && t < 300 || 304 === t, i && (x = Z(d, b, i)), x = K(d, x, b, u), u ? (d.ifModified && (w = b.getResponseHeader("Last-Modified"), w && (de.lastModified[o] = w), w = b.getResponseHeader("etag"), w && (de.etag[o] = w)), 204 === t || "HEAD" === d.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = x.state, f = x.data, p = x.error, u = !p)) : (p = T, !t && T || (T = "error", t < 0 && (t = 0))), b.status = t, b.statusText = (n || T) + "", u ? y.resolveWith(g, [f, T, b]) : y.rejectWith(g, [b, T, p]), b.statusCode(_), _ = void 0, h && m.trigger(u ? "ajaxSuccess" : "ajaxError", [b, d, u ? f : p]), v.fireWith(g, [b, T]), h && (m.trigger("ajaxComplete", [b, d]), --de.active || de.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var r, o, s, a, l, u, c, h, f, p, d = de.ajaxSetup({}, n),
                g = d.context || d,
                m = d.context && (g.nodeType || g.jquery) ? de(g) : de.event,
                y = de.Deferred(),
                v = de.Callbacks("once memory"),
                _ = d.statusCode || {},
                x = {},
                w = {},
                T = "canceled",
                b = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (c) {
                            if (!a)
                                for (a = {}; t = Dt.exec(s);) a[t[1].toLowerCase()] = t[2];
                            t = a[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return c ? s : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == c && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, x[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == c && (d.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (c) b.always(e[b.status]);
                            else
                                for (t in e) _[t] = [_[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || T;
                        return r && r.abort(t), i(0, t), this
                    }
                };
            if (y.promise(b), d.url = ((t || d.url || bt.href) + "").replace(Ft, bt.protocol + "//"), d.type = n.method || n.type || d.method || d.type, d.dataTypes = (d.dataType || "*").toLowerCase().match(Me) || [""], null == d.crossDomain) {
                u = te.createElement("a");
                try {
                    u.href = d.url, u.href = u.href, d.crossDomain = It.protocol + "//" + It.host != u.protocol + "//" + u.host
                } catch (e) {
                    d.crossDomain = !0
                }
            }
            if (d.data && d.processData && "string" != typeof d.data && (d.data = de.param(d.data, d.traditional)), U(jt, d, n, b), c) return b;
            h = de.event && d.global, h && 0 === de.active++ && de.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Lt.test(d.type), o = d.url.replace(At, ""), d.hasContent ? d.data && d.processData && 0 === (d.contentType || "").indexOf("application/x-www-form-urlencoded") && (d.data = d.data.replace(Mt, "+")) : (p = d.url.slice(o.length), d.data && (o += (kt.test(o) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (o = o.replace(Nt, "$1"), p = (kt.test(o) ? "&" : "?") + "_=" + St++ + p), d.url = o + p), d.ifModified && (de.lastModified[o] && b.setRequestHeader("If-Modified-Since", de.lastModified[o]), de.etag[o] && b.setRequestHeader("If-None-Match", de.etag[o])), (d.data && d.hasContent && d.contentType !== !1 || n.contentType) && b.setRequestHeader("Content-Type", d.contentType), b.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Bt + "; q=0.01" : "") : d.accepts["*"]);
            for (f in d.headers) b.setRequestHeader(f, d.headers[f]);
            if (d.beforeSend && (d.beforeSend.call(g, b, d) === !1 || c)) return b.abort();
            if (T = "abort", v.add(d.complete), b.done(d.success), b.fail(d.error), r = U(Xt, d, n, b)) {
                if (b.readyState = 1, h && m.trigger("ajaxSend", [b, d]), c) return b;
                d.async && d.timeout > 0 && (l = e.setTimeout(function() {
                    b.abort("timeout")
                }, d.timeout));
                try {
                    c = !1, r.send(x, i)
                } catch (e) {
                    if (c) throw e;
                    i(-1, e)
                }
            } else i(-1, "No Transport");
            return b
        },
        getJSON: function(e, t, n) {
            return de.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return de.get(e, void 0, t, "script")
        }
    }), de.each(["get", "post"], function(e, t) {
        de[t] = function(e, n, i, r) {
            return de.isFunction(n) && (r = r || i, i = n, n = void 0), de.ajax(de.extend({
                url: e,
                type: t,
                dataType: r,
                data: n,
                success: i
            }, de.isPlainObject(e) && e))
        }
    }), de._evalUrl = function(e) {
        return de.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, de.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (de.isFunction(e) && (e = e.call(this[0])), t = de(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(e) {
            return de.isFunction(e) ? this.each(function(t) {
                de(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = de(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = de.isFunction(e);
            return this.each(function(n) {
                de(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                de(this).replaceWith(this.childNodes)
            }), this
        }
    }), de.expr.pseudos.hidden = function(e) {
        return !de.expr.pseudos.visible(e)
    }, de.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, de.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    };
    var qt = {
            0: 200,
            1223: 204
        },
        zt = de.ajaxSettings.xhr();
    fe.cors = !!zt && "withCredentials" in zt, fe.ajax = zt = !!zt, de.ajaxTransport(function(t) {
        var n, i;
        if (fe.cors || zt && !t.crossDomain) return {
            send: function(r, o) {
                var s, a = t.xhr();
                if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (s in t.xhrFields) a[s] = t.xhrFields[s];
                t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                for (s in r) a.setRequestHeader(s, r[s]);
                n = function(e) {
                    return function() {
                        n && (n = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(qt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary: a.response
                        } : {
                            text: a.responseText
                        }, a.getAllResponseHeaders()))
                    }
                }, a.onload = n(), i = a.onerror = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() {
                    4 === a.readyState && e.setTimeout(function() {
                        n && i()
                    })
                }, n = n("abort");
                try {
                    a.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (n) throw e
                }
            },
            abort: function() {
                n && n()
            }
        }
    }), de.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), de.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return de.globalEval(e), e
            }
        }
    }), de.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), de.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(i, r) {
                    t = de("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type)
                    }), te.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var $t = [],
        Yt = /(=)\?(?=&|$)|\?\?/;
    de.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = $t.pop() || de.expando + "_" + St++;
            return this[e] = !0, e
        }
    }), de.ajaxPrefilter("json jsonp", function(t, n, i) {
        var r, o, s, a = t.jsonp !== !1 && (Yt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = de.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Yt, "$1" + r) : t.jsonp !== !1 && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
            return s || de.error(r + " was not called"), s[0]
        }, t.dataTypes[0] = "json", o = e[r], e[r] = function() {
            s = arguments
        }, i.always(function() {
            void 0 === o ? de(e).removeProp(r) : e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, $t.push(r)), s && de.isFunction(o) && o(s[0]), s = o = void 0
        }), "script"
    }), fe.createHTMLDocument = function() {
        var e = te.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), de.parseHTML = function(e, t, n) {
        if ("string" != typeof e) return [];
        "boolean" == typeof t && (n = t, t = !1);
        var i, r, o;
        return t || (fe.createHTMLDocument ? (t = te.implementation.createHTMLDocument(""), i = t.createElement("base"), i.href = te.location.href, t.head.appendChild(i)) : t = te), r = be.exec(e), o = !n && [], r ? [t.createElement(r[1])] : (r = v([e], t, o), o && o.length && de(o).remove(), de.merge([], r.childNodes))
    }, de.fn.load = function(e, t, n) {
        var i, r, o, s = this,
            a = e.indexOf(" ");
        return a > -1 && (i = H(e.slice(a)), e = e.slice(0, a)), de.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), s.length > 0 && de.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, s.html(i ? de("<div>").append(de.parseHTML(e)).find(i) : e)
        }).always(n && function(e, t) {
            s.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, de.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        de.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), de.expr.pseudos.animated = function(e) {
        return de.grep(de.timers, function(t) {
            return e === t.elem
        }).length
    }, de.offset = {
        setOffset: function(e, t, n) {
            var i, r, o, s, a, l, u, c = de.css(e, "position"),
                h = de(e),
                f = {};
            "static" === c && (e.style.position = "relative"), a = h.offset(), o = de.css(e, "top"), l = de.css(e, "left"), u = ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1, u ? (i = h.position(), s = i.top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), de.isFunction(t) && (t = t.call(e, n, de.extend({}, a))), null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + r), "using" in t ? t.using.call(e, f) : h.css(f)
        }
    }, de.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                de.offset.setOffset(this, e, t)
            });
            var t, n, i, r, o = this[0];
            return o ? o.getClientRects().length ? (i = o.getBoundingClientRect(), i.width || i.height ? (r = o.ownerDocument, n = J(r), t = r.documentElement, {
                top: i.top + n.pageYOffset - t.clientTop,
                left: i.left + n.pageXOffset - t.clientLeft
            }) : i) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === de.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), de.nodeName(e[0], "html") || (i = e.offset()), i = {
                    top: i.top + de.css(e[0], "borderTopWidth", !0),
                    left: i.left + de.css(e[0], "borderLeftWidth", !0)
                }), {
                    top: t.top - i.top - de.css(n, "marginTop", !0),
                    left: t.left - i.left - de.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === de.css(e, "position");) e = e.offsetParent;
                return e || Qe
            })
        }
    }), de.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        de.fn[e] = function(i) {
            return De(this, function(e, i, r) {
                var o = J(e);
                return void 0 === r ? o ? o[t] : e[i] : void(o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r)
            }, e, i, arguments.length)
        }
    }), de.each(["top", "left"], function(e, t) {
        de.cssHooks[t] = A(fe.pixelPosition, function(e, n) {
            if (n) return n = M(e, t), st.test(n) ? de(e).position()[t] + "px" : n
        })
    }), de.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        de.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, i) {
            de.fn[i] = function(r, o) {
                var s = arguments.length && (n || "boolean" != typeof r),
                    a = n || (r === !0 || o === !0 ? "margin" : "border");
                return De(this, function(t, n, r) {
                    var o;
                    return de.isWindow(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? de.css(t, n, a) : de.style(t, n, r, a)
                }, t, s ? r : void 0, s)
            }
        })
    }), de.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), de.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function() {
        return de
    });
    var Ht = e.jQuery,
        Wt = e.$;
    return de.noConflict = function(t) {
        return e.$ === de && (e.$ = Wt), t && e.jQuery === de && (e.jQuery = Ht), de
    }, t || (e.jQuery = e.$ = de), de
});
/*!
 * VERSION: 1.19.0
 * DATE: 2016-07-14
 * UPDATES AND DOCS AT: http://greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(e, t, n) {
                var i = function(e) {
                        var t, n = [],
                            i = e.length;
                        for (t = 0; t !== i; n.push(e[t++]));
                        return n
                    },
                    r = function(e, t, n) {
                        var i, r, o = e.cycle;
                        for (i in o) r = o[i], e[i] = "function" == typeof r ? r(n, t[n]) : r[n % r.length];
                        delete e.cycle
                    },
                    o = function(e, t, i) {
                        n.call(this, e, t, i), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = o.prototype.render
                    },
                    s = 1e-10,
                    a = n._internals,
                    l = a.isSelector,
                    u = a.isArray,
                    c = o.prototype = n.to({}, .1, {}),
                    h = [];
                o.version = "1.19.0", c.constructor = o, c.kill()._gc = !1, o.killTweensOf = o.killDelayedCallsTo = n.killTweensOf, o.getTweensOf = n.getTweensOf, o.lagSmoothing = n.lagSmoothing, o.ticker = n.ticker, o.render = n.render, c.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), n.prototype.invalidate.call(this)
                }, c.updateTo = function(e, t) {
                    var i, r = this.ratio,
                        o = this.vars.immediateRender || e.immediateRender;
                    t && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                    for (i in e) this.vars[i] = e[i];
                    if (this._initted || o)
                        if (t) this._initted = !1, o && this.render(0, !0, !0);
                        else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && n._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                        var s = this._totalTime;
                        this.render(0, !0, !1), this._initted = !1, this.render(s, !0, !1)
                    } else if (this._initted = !1, this._init(), this._time > 0 || o)
                        for (var a, l = 1 / (1 - r), u = this._firstPT; u;) a = u.s + u.c, u.c *= l, u.s = a - u.c, u = u._next;
                    return this
                }, c.render = function(e, t, n) {
                    this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                    var i, r, o, l, u, c, h, f, p = this._dirty ? this.totalDuration() : this._totalDuration,
                        d = this._time,
                        g = this._totalTime,
                        m = this._cycle,
                        y = this._duration,
                        v = this._rawPrevTime;
                    if (e >= p - 1e-7 ? (this._totalTime = p, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = y, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (i = !0, r = "onComplete", n = n || this._timeline.autoRemoveChildren), 0 === y && (this._initted || !this.vars.lazy || n) && (this._startTime === this._timeline._duration && (e = 0), (0 > v || 0 >= e && e >= -1e-7 || v === s && "isPause" !== this.data) && v !== e && (n = !0, v > s && (r = "onReverseComplete")), this._rawPrevTime = f = !t || e || v === e ? e : s)) : 1e-7 > e ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== g || 0 === y && v > 0) && (r = "onReverseComplete", i = this._reversed), 0 > e && (this._active = !1, 0 === y && (this._initted || !this.vars.lazy || n) && (v >= 0 && (n = !0), this._rawPrevTime = f = !t || e || v === e ? e : s)), this._initted || (n = !0)) : (this._totalTime = this._time = e, 0 !== this._repeat && (l = y + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && e >= g && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 !== (1 & this._cycle) && (this._time = y - this._time), this._time > y ? this._time = y : this._time < 0 && (this._time = 0)), this._easeType ? (u = this._time / y, c = this._easeType, h = this._easePower, (1 === c || 3 === c && u >= .5) && (u = 1 - u), 3 === c && (u *= 2), 1 === h ? u *= u : 2 === h ? u *= u * u : 3 === h ? u *= u * u * u : 4 === h && (u *= u * u * u * u), 1 === c ? this.ratio = 1 - u : 2 === c ? this.ratio = u : this._time / y < .5 ? this.ratio = u / 2 : this.ratio = 1 - u / 2) : this.ratio = this._ease.getRatio(this._time / y)), d === this._time && !n && m === this._cycle) return void(g !== this._totalTime && this._onUpdate && (t || this._callback("onUpdate")));
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!n && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = d, this._totalTime = g, this._rawPrevTime = v, this._cycle = m, a.lazyTweens.push(this), void(this._lazy = [e, t]);
                        this._time && !i ? this.ratio = this._ease.getRatio(this._time / y) : i && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== d && e >= 0 && (this._active = !0), 0 === g && (2 === this._initted && e > 0 && this._init(), this._startAt && (e >= 0 ? this._startAt.render(e, t, n) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === y) && (t || this._callback("onStart"))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
                    this._onUpdate && (0 > e && this._startAt && this._startTime && this._startAt.render(e, t, n), t || (this._totalTime !== g || r) && this._callback("onUpdate")), this._cycle !== m && (t || this._gc || this.vars.onRepeat && this._callback("onRepeat")), r && (!this._gc || n) && (0 > e && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(e, t, n), i && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[r] && this._callback(r), 0 === y && this._rawPrevTime === s && f !== s && (this._rawPrevTime = 0))
                }, o.to = function(e, t, n) {
                    return new o(e, t, n)
                }, o.from = function(e, t, n) {
                    return n.runBackwards = !0, n.immediateRender = 0 != n.immediateRender, new o(e, t, n)
                }, o.fromTo = function(e, t, n, i) {
                    return i.startAt = n, i.immediateRender = 0 != i.immediateRender && 0 != n.immediateRender, new o(e, t, i)
                }, o.staggerTo = o.allTo = function(e, t, s, a, c, f, p) {
                    a = a || 0;
                    var d, g, m, y, v = 0,
                        _ = [],
                        x = function() {
                            s.onComplete && s.onComplete.apply(s.onCompleteScope || this, arguments), c.apply(p || s.callbackScope || this, f || h)
                        },
                        w = s.cycle,
                        T = s.startAt && s.startAt.cycle;
                    for (u(e) || ("string" == typeof e && (e = n.selector(e) || e), l(e) && (e = i(e))), e = e || [], 0 > a && (e = i(e), e.reverse(), a *= -1), d = e.length - 1, m = 0; d >= m; m++) {
                        g = {};
                        for (y in s) g[y] = s[y];
                        if (w && (r(g, e, m), null != g.duration && (t = g.duration, delete g.duration)), T) {
                            T = g.startAt = {};
                            for (y in s.startAt) T[y] = s.startAt[y];
                            r(g.startAt, e, m)
                        }
                        g.delay = v + (g.delay || 0), m === d && c && (g.onComplete = x), _[m] = new o(e[m], t, g), v += a
                    }
                    return _
                }, o.staggerFrom = o.allFrom = function(e, t, n, i, r, s, a) {
                    return n.runBackwards = !0, n.immediateRender = 0 != n.immediateRender, o.staggerTo(e, t, n, i, r, s, a)
                }, o.staggerFromTo = o.allFromTo = function(e, t, n, i, r, s, a, l) {
                    return i.startAt = n, i.immediateRender = 0 != i.immediateRender && 0 != n.immediateRender, o.staggerTo(e, t, i, r, s, a, l)
                }, o.delayedCall = function(e, t, n, i, r) {
                    return new o(t, 0, {
                        delay: e,
                        onComplete: t,
                        onCompleteParams: n,
                        callbackScope: i,
                        onReverseComplete: t,
                        onReverseCompleteParams: n,
                        immediateRender: !1,
                        useFrames: r,
                        overwrite: 0
                    })
                }, o.set = function(e, t) {
                    return new o(e, 0, t)
                }, o.isTweening = function(e) {
                    return n.getTweensOf(e, !0).length > 0
                };
                var f = function(e, t) {
                        for (var i = [], r = 0, o = e._first; o;) o instanceof n ? i[r++] = o : (t && (i[r++] = o), i = i.concat(f(o, t)), r = i.length), o = o._next;
                        return i
                    },
                    p = o.getAllTweens = function(t) {
                        return f(e._rootTimeline, t).concat(f(e._rootFramesTimeline, t))
                    };
                o.killAll = function(e, n, i, r) {
                    null == n && (n = !0), null == i && (i = !0);
                    var o, s, a, l = p(0 != r),
                        u = l.length,
                        c = n && i && r;
                    for (a = 0; u > a; a++) s = l[a], (c || s instanceof t || (o = s.target === s.vars.onComplete) && i || n && !o) && (e ? s.totalTime(s._reversed ? 0 : s.totalDuration()) : s._enabled(!1, !1))
                }, o.killChildTweensOf = function(e, t) {
                    if (null != e) {
                        var r, s, c, h, f, p = a.tweenLookup;
                        if ("string" == typeof e && (e = n.selector(e) || e), l(e) && (e = i(e)), u(e))
                            for (h = e.length; --h > -1;) o.killChildTweensOf(e[h], t);
                        else {
                            r = [];
                            for (c in p)
                                for (s = p[c].target.parentNode; s;) s === e && (r = r.concat(p[c].tweens)), s = s.parentNode;
                            for (f = r.length, h = 0; f > h; h++) t && r[h].totalTime(r[h].totalDuration()), r[h]._enabled(!1, !1)
                        }
                    }
                };
                var d = function(e, n, i, r) {
                    n = n !== !1, i = i !== !1, r = r !== !1;
                    for (var o, s, a = p(r), l = n && i && r, u = a.length; --u > -1;) s = a[u], (l || s instanceof t || (o = s.target === s.vars.onComplete) && i || n && !o) && s.paused(e)
                };
                return o.pauseAll = function(e, t, n) {
                    d(!0, e, t, n)
                }, o.resumeAll = function(e, t, n) {
                    d(!1, e, t, n)
                }, o.globalTimeScale = function(t) {
                    var i = e._rootTimeline,
                        r = n.ticker.time;
                    return arguments.length ? (t = t || s, i._startTime = r - (r - i._startTime) * i._timeScale / t, i = e._rootFramesTimeline, r = n.ticker.frame, i._startTime = r - (r - i._startTime) * i._timeScale / t, i._timeScale = e._rootTimeline._timeScale = t, t) : i._timeScale
                }, c.progress = function(e, t) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), t) : this._time / this.duration()
                }, c.totalProgress = function(e, t) {
                    return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this._totalTime / this.totalDuration()
                }, c.time = function(e, t) {
                    return arguments.length ? (this._dirty && this.totalDuration(), e > this._duration && (e = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? e = this._duration - e + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (e += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(e, t)) : this._time
                }, c.duration = function(t) {
                    return arguments.length ? e.prototype.duration.call(this, t) : this._duration
                }, c.totalDuration = function(e) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                }, c.repeat = function(e) {
                    return arguments.length ? (this._repeat = e, this._uncache(!0)) : this._repeat
                }, c.repeatDelay = function(e) {
                    return arguments.length ? (this._repeatDelay = e, this._uncache(!0)) : this._repeatDelay
                }, c.yoyo = function(e) {
                    return arguments.length ? (this._yoyo = e, this) : this._yoyo
                }, o
            }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(e, t, n) {
                var i = function(e) {
                        t.call(this, e), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                        var n, i, r = this.vars;
                        for (i in r) n = r[i], l(n) && -1 !== n.join("").indexOf("{self}") && (r[i] = this._swapSelfInParams(n));
                        l(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
                    },
                    r = 1e-10,
                    o = n._internals,
                    s = i._internals = {},
                    a = o.isSelector,
                    l = o.isArray,
                    u = o.lazyTweens,
                    c = o.lazyRender,
                    h = _gsScope._gsDefine.globals,
                    f = function(e) {
                        var t, n = {};
                        for (t in e) n[t] = e[t];
                        return n
                    },
                    p = function(e, t, n) {
                        var i, r, o = e.cycle;
                        for (i in o) r = o[i], e[i] = "function" == typeof r ? r.call(t[n], n) : r[n % r.length];
                        delete e.cycle
                    },
                    d = s.pauseCallback = function() {},
                    g = function(e) {
                        var t, n = [],
                            i = e.length;
                        for (t = 0; t !== i; n.push(e[t++]));
                        return n
                    },
                    m = i.prototype = new t;
                return i.version = "1.19.0", m.constructor = i, m.kill()._gc = m._forcingPlayhead = m._hasPause = !1, m.to = function(e, t, i, r) {
                    var o = i.repeat && h.TweenMax || n;
                    return t ? this.add(new o(e, t, i), r) : this.set(e, i, r)
                }, m.from = function(e, t, i, r) {
                    return this.add((i.repeat && h.TweenMax || n).from(e, t, i), r)
                }, m.fromTo = function(e, t, i, r, o) {
                    var s = r.repeat && h.TweenMax || n;
                    return t ? this.add(s.fromTo(e, t, i, r), o) : this.set(e, r, o)
                }, m.staggerTo = function(e, t, r, o, s, l, u, c) {
                    var h, d, m = new i({
                            onComplete: l,
                            onCompleteParams: u,
                            callbackScope: c,
                            smoothChildTiming: this.smoothChildTiming
                        }),
                        y = r.cycle;
                    for ("string" == typeof e && (e = n.selector(e) || e), e = e || [], a(e) && (e = g(e)), o = o || 0, 0 > o && (e = g(e), e.reverse(), o *= -1), d = 0; d < e.length; d++) h = f(r), h.startAt && (h.startAt = f(h.startAt), h.startAt.cycle && p(h.startAt, e, d)), y && (p(h, e, d), null != h.duration && (t = h.duration, delete h.duration)), m.to(e[d], t, h, d * o);
                    return this.add(m, s)
                }, m.staggerFrom = function(e, t, n, i, r, o, s, a) {
                    return n.immediateRender = 0 != n.immediateRender, n.runBackwards = !0, this.staggerTo(e, t, n, i, r, o, s, a)
                }, m.staggerFromTo = function(e, t, n, i, r, o, s, a, l) {
                    return i.startAt = n, i.immediateRender = 0 != i.immediateRender && 0 != n.immediateRender, this.staggerTo(e, t, i, r, o, s, a, l)
                }, m.call = function(e, t, i, r) {
                    return this.add(n.delayedCall(0, e, t, i), r)
                }, m.set = function(e, t, i) {
                    return i = this._parseTimeOrLabel(i, 0, !0), null == t.immediateRender && (t.immediateRender = i === this._time && !this._paused), this.add(new n(e, 0, t), i)
                }, i.exportRoot = function(e, t) {
                    e = e || {}, null == e.smoothChildTiming && (e.smoothChildTiming = !0);
                    var r, o, s = new i(e),
                        a = s._timeline;
                    for (null == t && (t = !0), a._remove(s, !0), s._startTime = 0, s._rawPrevTime = s._time = s._totalTime = a._time, r = a._first; r;) o = r._next, t && r instanceof n && r.target === r.vars.onComplete || s.add(r, r._startTime - r._delay), r = o;
                    return a.add(s, 0), s
                }, m.add = function(r, o, s, a) {
                    var u, c, h, f, p, d;
                    if ("number" != typeof o && (o = this._parseTimeOrLabel(o, 0, !0, r)), !(r instanceof e)) {
                        if (r instanceof Array || r && r.push && l(r)) {
                            for (s = s || "normal", a = a || 0, u = o, c = r.length, h = 0; c > h; h++) l(f = r[h]) && (f = new i({
                                tweens: f
                            })), this.add(f, u), "string" != typeof f && "function" != typeof f && ("sequence" === s ? u = f._startTime + f.totalDuration() / f._timeScale : "start" === s && (f._startTime -= f.delay())), u += a;
                            return this._uncache(!0)
                        }
                        if ("string" == typeof r) return this.addLabel(r, o);
                        if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
                        r = n.delayedCall(0, r)
                    }
                    if (t.prototype.add.call(this, r, o), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                        for (p = this, d = p.rawTime() > r._startTime; p._timeline;) d && p._timeline.smoothChildTiming ? p.totalTime(p._totalTime, !0) : p._gc && p._enabled(!0, !1), p = p._timeline;
                    return this
                }, m.remove = function(t) {
                    if (t instanceof e) {
                        this._remove(t, !1);
                        var n = t._timeline = t.vars.useFrames ? e._rootFramesTimeline : e._rootTimeline;
                        return t._startTime = (t._paused ? t._pauseTime : n._time) - (t._reversed ? t.totalDuration() - t._totalTime : t._totalTime) / t._timeScale, this
                    }
                    if (t instanceof Array || t && t.push && l(t)) {
                        for (var i = t.length; --i > -1;) this.remove(t[i]);
                        return this
                    }
                    return "string" == typeof t ? this.removeLabel(t) : this.kill(null, t)
                }, m._remove = function(e, n) {
                    t.prototype._remove.call(this, e, n);
                    var i = this._last;
                    return i ? this._time > i._startTime + i._totalDuration / i._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
                }, m.append = function(e, t) {
                    return this.add(e, this._parseTimeOrLabel(null, t, !0, e))
                }, m.insert = m.insertMultiple = function(e, t, n, i) {
                    return this.add(e, t || 0, n, i)
                }, m.appendMultiple = function(e, t, n, i) {
                    return this.add(e, this._parseTimeOrLabel(null, t, !0, e), n, i)
                }, m.addLabel = function(e, t) {
                    return this._labels[e] = this._parseTimeOrLabel(t), this
                }, m.addPause = function(e, t, i, r) {
                    var o = n.delayedCall(0, d, i, r || this);
                    return o.vars.onComplete = o.vars.onReverseComplete = t, o.data = "isPause", this._hasPause = !0, this.add(o, e)
                }, m.removeLabel = function(e) {
                    return delete this._labels[e], this
                }, m.getLabelTime = function(e) {
                    return null != this._labels[e] ? this._labels[e] : -1
                }, m._parseTimeOrLabel = function(t, n, i, r) {
                    var o;
                    if (r instanceof e && r.timeline === this) this.remove(r);
                    else if (r && (r instanceof Array || r.push && l(r)))
                        for (o = r.length; --o > -1;) r[o] instanceof e && r[o].timeline === this && this.remove(r[o]);
                    if ("string" == typeof n) return this._parseTimeOrLabel(n, i && "number" == typeof t && null == this._labels[n] ? t - this.duration() : 0, i);
                    if (n = n || 0, "string" != typeof t || !isNaN(t) && null == this._labels[t]) null == t && (t = this.duration());
                    else {
                        if (o = t.indexOf("="), -1 === o) return null == this._labels[t] ? i ? this._labels[t] = this.duration() + n : n : this._labels[t] + n;
                        n = parseInt(t.charAt(o - 1) + "1", 10) * Number(t.substr(o + 1)), t = o > 1 ? this._parseTimeOrLabel(t.substr(0, o - 1), 0, i) : this.duration()
                    }
                    return Number(t) + n
                }, m.seek = function(e, t) {
                    return this.totalTime("number" == typeof e ? e : this._parseTimeOrLabel(e), t !== !1)
                }, m.stop = function() {
                    return this.paused(!0)
                }, m.gotoAndPlay = function(e, t) {
                    return this.play(e, t)
                }, m.gotoAndStop = function(e, t) {
                    return this.pause(e, t)
                }, m.render = function(e, t, n) {
                    this._gc && this._enabled(!0, !1);
                    var i, o, s, a, l, h, f, p = this._dirty ? this.totalDuration() : this._totalDuration,
                        d = this._time,
                        g = this._startTime,
                        m = this._timeScale,
                        y = this._paused;
                    if (e >= p - 1e-7) this._totalTime = this._time = p, this._reversed || this._hasPausedChild() || (o = !0, a = "onComplete", l = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= e && e >= -1e-7 || this._rawPrevTime < 0 || this._rawPrevTime === r) && this._rawPrevTime !== e && this._first && (l = !0, this._rawPrevTime > r && (a = "onReverseComplete"))), this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : r, e = p + 1e-4;
                    else if (1e-7 > e)
                        if (this._totalTime = this._time = 0, (0 !== d || 0 === this._duration && this._rawPrevTime !== r && (this._rawPrevTime > 0 || 0 > e && this._rawPrevTime >= 0)) && (a = "onReverseComplete", o = this._reversed), 0 > e) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (l = o = !0, a = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (l = !0), this._rawPrevTime = e;
                        else {
                            if (this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : r, 0 === e && o)
                                for (i = this._first; i && 0 === i._startTime;) i._duration || (o = !1), i = i._next;
                            e = 0, this._initted || (l = !0)
                        }
                    else {
                        if (this._hasPause && !this._forcingPlayhead && !t) {
                            if (e >= d)
                                for (i = this._first; i && i._startTime <= e && !h;) i._duration || "isPause" !== i.data || i.ratio || 0 === i._startTime && 0 === this._rawPrevTime || (h = i), i = i._next;
                            else
                                for (i = this._last; i && i._startTime >= e && !h;) i._duration || "isPause" === i.data && i._rawPrevTime > 0 && (h = i), i = i._prev;
                            h && (this._time = e = h._startTime, this._totalTime = e + this._cycle * (this._totalDuration + this._repeatDelay))
                        }
                        this._totalTime = this._time = this._rawPrevTime = e
                    }
                    if (this._time !== d && this._first || n || l || h) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== d && e > 0 && (this._active = !0), 0 === d && this.vars.onStart && (0 === this._time && this._duration || t || this._callback("onStart")), f = this._time, f >= d)
                            for (i = this._first; i && (s = i._next, f === this._time && (!this._paused || y));)(i._active || i._startTime <= f && !i._paused && !i._gc) && (h === i && this.pause(), i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (e - i._startTime) * i._timeScale, t, n) : i.render((e - i._startTime) * i._timeScale, t, n)), i = s;
                        else
                            for (i = this._last; i && (s = i._prev, f === this._time && (!this._paused || y));) {
                                if (i._active || i._startTime <= d && !i._paused && !i._gc) {
                                    if (h === i) {
                                        for (h = i._prev; h && h.endTime() > this._time;) h.render(h._reversed ? h.totalDuration() - (e - h._startTime) * h._timeScale : (e - h._startTime) * h._timeScale, t, n), h = h._prev;
                                        h = null, this.pause()
                                    }
                                    i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (e - i._startTime) * i._timeScale, t, n) : i.render((e - i._startTime) * i._timeScale, t, n)
                                }
                                i = s
                            }
                        this._onUpdate && (t || (u.length && c(), this._callback("onUpdate"))), a && (this._gc || (g === this._startTime || m !== this._timeScale) && (0 === this._time || p >= this.totalDuration()) && (o && (u.length && c(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[a] && this._callback(a)))
                    }
                }, m._hasPausedChild = function() {
                    for (var e = this._first; e;) {
                        if (e._paused || e instanceof i && e._hasPausedChild()) return !0;
                        e = e._next
                    }
                    return !1
                }, m.getChildren = function(e, t, i, r) {
                    r = r || -9999999999;
                    for (var o = [], s = this._first, a = 0; s;) s._startTime < r || (s instanceof n ? t !== !1 && (o[a++] = s) : (i !== !1 && (o[a++] = s), e !== !1 && (o = o.concat(s.getChildren(!0, t, i)), a = o.length))), s = s._next;
                    return o
                }, m.getTweensOf = function(e, t) {
                    var i, r, o = this._gc,
                        s = [],
                        a = 0;
                    for (o && this._enabled(!0, !0), i = n.getTweensOf(e), r = i.length; --r > -1;)(i[r].timeline === this || t && this._contains(i[r])) && (s[a++] = i[r]);
                    return o && this._enabled(!1, !0), s
                }, m.recent = function() {
                    return this._recent
                }, m._contains = function(e) {
                    for (var t = e.timeline; t;) {
                        if (t === this) return !0;
                        t = t.timeline
                    }
                    return !1
                }, m.shiftChildren = function(e, t, n) {
                    n = n || 0;
                    for (var i, r = this._first, o = this._labels; r;) r._startTime >= n && (r._startTime += e), r = r._next;
                    if (t)
                        for (i in o) o[i] >= n && (o[i] += e);
                    return this._uncache(!0)
                }, m._kill = function(e, t) {
                    if (!e && !t) return this._enabled(!1, !1);
                    for (var n = t ? this.getTweensOf(t) : this.getChildren(!0, !0, !1), i = n.length, r = !1; --i > -1;) n[i]._kill(e, t) && (r = !0);
                    return r
                }, m.clear = function(e) {
                    var t = this.getChildren(!1, !0, !0),
                        n = t.length;
                    for (this._time = this._totalTime = 0; --n > -1;) t[n]._enabled(!1, !1);
                    return e !== !1 && (this._labels = {}), this._uncache(!0)
                }, m.invalidate = function() {
                    for (var t = this._first; t;) t.invalidate(), t = t._next;
                    return e.prototype.invalidate.call(this)
                }, m._enabled = function(e, n) {
                    if (e === this._gc)
                        for (var i = this._first; i;) i._enabled(e, !0), i = i._next;
                    return t.prototype._enabled.call(this, e, n)
                }, m.totalTime = function(t, n, i) {
                    this._forcingPlayhead = !0;
                    var r = e.prototype.totalTime.apply(this, arguments);
                    return this._forcingPlayhead = !1, r
                }, m.duration = function(e) {
                    return arguments.length ? (0 !== this.duration() && 0 !== e && this.timeScale(this._duration / e), this) : (this._dirty && this.totalDuration(), this._duration)
                }, m.totalDuration = function(e) {
                    if (!arguments.length) {
                        if (this._dirty) {
                            for (var t, n, i = 0, r = this._last, o = 999999999999; r;) t = r._prev, r._dirty && r.totalDuration(), r._startTime > o && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : o = r._startTime, r._startTime < 0 && !r._paused && (i -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), o = 0), n = r._startTime + r._totalDuration / r._timeScale, n > i && (i = n), r = t;
                            this._duration = this._totalDuration = i, this._dirty = !1
                        }
                        return this._totalDuration
                    }
                    return e && this.totalDuration() ? this.timeScale(this._totalDuration / e) : this
                }, m.paused = function(t) {
                    if (!t)
                        for (var n = this._first, i = this._time; n;) n._startTime === i && "isPause" === n.data && (n._rawPrevTime = 0), n = n._next;
                    return e.prototype.paused.apply(this, arguments)
                }, m.usesFrames = function() {
                    for (var t = this._timeline; t._timeline;) t = t._timeline;
                    return t === e._rootFramesTimeline
                }, m.rawTime = function() {
                    return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
                }, i
            }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(e, t, n) {
                var i = function(t) {
                        e.call(this, t), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
                    },
                    r = 1e-10,
                    o = t._internals,
                    s = o.lazyTweens,
                    a = o.lazyRender,
                    l = _gsScope._gsDefine.globals,
                    u = new n(null, null, 1, 0),
                    c = i.prototype = new e;
                return c.constructor = i, c.kill()._gc = !1, i.version = "1.19.0", c.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), e.prototype.invalidate.call(this)
                }, c.addCallback = function(e, n, i, r) {
                    return this.add(t.delayedCall(0, e, i, r), n)
                }, c.removeCallback = function(e, t) {
                    if (e)
                        if (null == t) this._kill(null, e);
                        else
                            for (var n = this.getTweensOf(e, !1), i = n.length, r = this._parseTimeOrLabel(t); --i > -1;) n[i]._startTime === r && n[i]._enabled(!1, !1);
                    return this
                }, c.removePause = function(t) {
                    return this.removeCallback(e._internals.pauseCallback, t)
                }, c.tweenTo = function(e, n) {
                    n = n || {};
                    var i, r, o, s = {
                            ease: u,
                            useFrames: this.usesFrames(),
                            immediateRender: !1
                        },
                        a = n.repeat && l.TweenMax || t;
                    for (r in n) s[r] = n[r];
                    return s.time = this._parseTimeOrLabel(e), i = Math.abs(Number(s.time) - this._time) / this._timeScale || .001, o = new a(this, i, s), s.onStart = function() {
                        o.target.paused(!0), o.vars.time !== o.target.time() && i === o.duration() && o.duration(Math.abs(o.vars.time - o.target.time()) / o.target._timeScale), n.onStart && o._callback("onStart")
                    }, o
                }, c.tweenFromTo = function(e, t, n) {
                    n = n || {}, e = this._parseTimeOrLabel(e), n.startAt = {
                        onComplete: this.seek,
                        onCompleteParams: [e],
                        callbackScope: this
                    }, n.immediateRender = n.immediateRender !== !1;
                    var i = this.tweenTo(t, n);
                    return i.duration(Math.abs(i.vars.time - e) / this._timeScale || .001)
                }, c.render = function(e, t, n) {
                    this._gc && this._enabled(!0, !1);
                    var i, o, l, u, c, h, f, p, d = this._dirty ? this.totalDuration() : this._totalDuration,
                        g = this._duration,
                        m = this._time,
                        y = this._totalTime,
                        v = this._startTime,
                        _ = this._timeScale,
                        x = this._rawPrevTime,
                        w = this._paused,
                        T = this._cycle;
                    if (e >= d - 1e-7) this._locked || (this._totalTime = d, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (o = !0, u = "onComplete", c = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= e && e >= -1e-7 || 0 > x || x === r) && x !== e && this._first && (c = !0, x > r && (u = "onReverseComplete"))), this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : r, this._yoyo && 0 !== (1 & this._cycle) ? this._time = e = 0 : (this._time = g, e = g + 1e-4);
                    else if (1e-7 > e)
                        if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== m || 0 === g && x !== r && (x > 0 || 0 > e && x >= 0) && !this._locked) && (u = "onReverseComplete", o = this._reversed), 0 > e) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (c = o = !0, u = "onReverseComplete") : x >= 0 && this._first && (c = !0), this._rawPrevTime = e;
                        else {
                            if (this._rawPrevTime = g || !t || e || this._rawPrevTime === e ? e : r, 0 === e && o)
                                for (i = this._first; i && 0 === i._startTime;) i._duration || (o = !1), i = i._next;
                            e = 0, this._initted || (c = !0)
                        }
                    else if (0 === g && 0 > x && (c = !0), this._time = this._rawPrevTime = e, this._locked || (this._totalTime = e, 0 !== this._repeat && (h = g + this._repeatDelay, this._cycle = this._totalTime / h >> 0, 0 !== this._cycle && this._cycle === this._totalTime / h && e >= y && this._cycle--, this._time = this._totalTime - this._cycle * h, this._yoyo && 0 !== (1 & this._cycle) && (this._time = g - this._time), this._time > g ? (this._time = g, e = g + 1e-4) : this._time < 0 ? this._time = e = 0 : e = this._time)), this._hasPause && !this._forcingPlayhead && !t) {
                        if (e = this._time, e >= m)
                            for (i = this._first; i && i._startTime <= e && !f;) i._duration || "isPause" !== i.data || i.ratio || 0 === i._startTime && 0 === this._rawPrevTime || (f = i), i = i._next;
                        else
                            for (i = this._last; i && i._startTime >= e && !f;) i._duration || "isPause" === i.data && i._rawPrevTime > 0 && (f = i), i = i._prev;
                        f && (this._time = e = f._startTime, this._totalTime = e + this._cycle * (this._totalDuration + this._repeatDelay))
                    }
                    if (this._cycle !== T && !this._locked) {
                        var b = this._yoyo && 0 !== (1 & T),
                            S = b === (this._yoyo && 0 !== (1 & this._cycle)),
                            k = this._totalTime,
                            P = this._cycle,
                            C = this._rawPrevTime,
                            O = this._time;
                        if (this._totalTime = T * g, this._cycle < T ? b = !b : this._totalTime += g, this._time = m, this._rawPrevTime = 0 === g ? x - 1e-4 : x, this._cycle = T, this._locked = !0, m = b ? 0 : g, this.render(m, t, 0 === g), t || this._gc || this.vars.onRepeat && this._callback("onRepeat"), m !== this._time) return;
                        if (S && (m = b ? g + 1e-4 : -1e-4, this.render(m, !0, !1)), this._locked = !1, this._paused && !w) return;
                        this._time = O, this._totalTime = k, this._cycle = P, this._rawPrevTime = C
                    }
                    if (!(this._time !== m && this._first || n || c || f)) return void(y !== this._totalTime && this._onUpdate && (t || this._callback("onUpdate")));
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== y && e > 0 && (this._active = !0), 0 === y && this.vars.onStart && (0 === this._totalTime && this._totalDuration || t || this._callback("onStart")), p = this._time, p >= m)
                        for (i = this._first; i && (l = i._next, p === this._time && (!this._paused || w));)(i._active || i._startTime <= this._time && !i._paused && !i._gc) && (f === i && this.pause(), i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (e - i._startTime) * i._timeScale, t, n) : i.render((e - i._startTime) * i._timeScale, t, n)), i = l;
                    else
                        for (i = this._last; i && (l = i._prev, p === this._time && (!this._paused || w));) {
                            if (i._active || i._startTime <= m && !i._paused && !i._gc) {
                                if (f === i) {
                                    for (f = i._prev; f && f.endTime() > this._time;) f.render(f._reversed ? f.totalDuration() - (e - f._startTime) * f._timeScale : (e - f._startTime) * f._timeScale, t, n), f = f._prev;
                                    f = null, this.pause()
                                }
                                i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (e - i._startTime) * i._timeScale, t, n) : i.render((e - i._startTime) * i._timeScale, t, n)
                            }
                            i = l
                        }
                    this._onUpdate && (t || (s.length && a(), this._callback("onUpdate"))), u && (this._locked || this._gc || (v === this._startTime || _ !== this._timeScale) && (0 === this._time || d >= this.totalDuration()) && (o && (s.length && a(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[u] && this._callback(u)))
                }, c.getActive = function(e, t, n) {
                    null == e && (e = !0), null == t && (t = !0), null == n && (n = !1);
                    var i, r, o = [],
                        s = this.getChildren(e, t, n),
                        a = 0,
                        l = s.length;
                    for (i = 0; l > i; i++) r = s[i], r.isActive() && (o[a++] = r);
                    return o
                }, c.getLabelAfter = function(e) {
                    e || 0 !== e && (e = this._time);
                    var t, n = this.getLabelsArray(),
                        i = n.length;
                    for (t = 0; i > t; t++)
                        if (n[t].time > e) return n[t].name;
                    return null
                }, c.getLabelBefore = function(e) {
                    null == e && (e = this._time);
                    for (var t = this.getLabelsArray(), n = t.length; --n > -1;)
                        if (t[n].time < e) return t[n].name;
                    return null
                }, c.getLabelsArray = function() {
                    var e, t = [],
                        n = 0;
                    for (e in this._labels) t[n++] = {
                        time: this._labels[e],
                        name: e
                    };
                    return t.sort(function(e, t) {
                        return e.time - t.time
                    }), t
                }, c.progress = function(e, t) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), t) : this._time / this.duration()
                }, c.totalProgress = function(e, t) {
                    return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this._totalTime / this.totalDuration()
                }, c.totalDuration = function(t) {
                    return arguments.length ? -1 !== this._repeat && t ? this.timeScale(this.totalDuration() / t) : this : (this._dirty && (e.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                }, c.time = function(e, t) {
                    return arguments.length ? (this._dirty && this.totalDuration(), e > this._duration && (e = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? e = this._duration - e + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (e += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(e, t)) : this._time
                }, c.repeat = function(e) {
                    return arguments.length ? (this._repeat = e, this._uncache(!0)) : this._repeat
                }, c.repeatDelay = function(e) {
                    return arguments.length ? (this._repeatDelay = e, this._uncache(!0)) : this._repeatDelay
                }, c.yoyo = function(e) {
                    return arguments.length ? (this._yoyo = e, this) : this._yoyo
                }, c.currentLabel = function(e) {
                    return arguments.length ? this.seek(e, !0) : this.getLabelBefore(this._time + 1e-8)
                }, i
            }, !0),
            function() {
                var e = 180 / Math.PI,
                    t = [],
                    n = [],
                    i = [],
                    r = {},
                    o = _gsScope._gsDefine.globals,
                    s = function(e, t, n, i) {
                        n === i && (n = i - (i - t) / 1e6), e === t && (t = e + (n - e) / 1e6), this.a = e, this.b = t, this.c = n, this.d = i, this.da = i - e, this.ca = n - e, this.ba = t - e
                    },
                    a = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
                    l = function(e, t, n, i) {
                        var r = {
                                a: e
                            },
                            o = {},
                            s = {},
                            a = {
                                c: i
                            },
                            l = (e + t) / 2,
                            u = (t + n) / 2,
                            c = (n + i) / 2,
                            h = (l + u) / 2,
                            f = (u + c) / 2,
                            p = (f - h) / 8;
                        return r.b = l + (e - l) / 4, o.b = h + p, r.c = o.a = (r.b + o.b) / 2, o.c = s.a = (h + f) / 2, s.b = f - p, a.b = c + (i - c) / 4, s.c = a.a = (s.b + a.b) / 2, [r, o, s, a]
                    },
                    u = function(e, r, o, s, a) {
                        var u, c, h, f, p, d, g, m, y, v, _, x, w, T = e.length - 1,
                            b = 0,
                            S = e[0].a;
                        for (u = 0; T > u; u++) p = e[b], c = p.a, h = p.d, f = e[b + 1].d, a ? (_ = t[u], x = n[u], w = (x + _) * r * .25 / (s ? .5 : i[u] || .5), d = h - (h - c) * (s ? .5 * r : 0 !== _ ? w / _ : 0), g = h + (f - h) * (s ? .5 * r : 0 !== x ? w / x : 0), m = h - (d + ((g - d) * (3 * _ / (_ + x) + .5) / 4 || 0))) : (d = h - (h - c) * r * .5, g = h + (f - h) * r * .5, m = h - (d + g) / 2), d += m, g += m, p.c = y = d, 0 !== u ? p.b = S : p.b = S = p.a + .6 * (p.c - p.a), p.da = h - c, p.ca = y - c, p.ba = S - c, o ? (v = l(c, S, y, h), e.splice(b, 1, v[0], v[1], v[2], v[3]), b += 4) : b++, S = g;
                        p = e[b], p.b = S, p.c = S + .4 * (p.d - S), p.da = p.d - p.a, p.ca = p.c - p.a, p.ba = S - p.a, o && (v = l(p.a, S, p.c, p.d), e.splice(b, 1, v[0], v[1], v[2], v[3]))
                    },
                    c = function(e, i, r, o) {
                        var a, l, u, c, h, f, p = [];
                        if (o)
                            for (e = [o].concat(e), l = e.length; --l > -1;) "string" == typeof(f = e[l][i]) && "=" === f.charAt(1) && (e[l][i] = o[i] + Number(f.charAt(0) + f.substr(2)));
                        if (a = e.length - 2, 0 > a) return p[0] = new s(e[0][i], 0, 0, e[-1 > a ? 0 : 1][i]), p;
                        for (l = 0; a > l; l++) u = e[l][i], c = e[l + 1][i], p[l] = new s(u, 0, 0, c), r && (h = e[l + 2][i], t[l] = (t[l] || 0) + (c - u) * (c - u), n[l] = (n[l] || 0) + (h - c) * (h - c));
                        return p[l] = new s(e[l][i], 0, 0, e[l + 1][i]), p
                    },
                    h = function(e, o, s, l, h, f) {
                        var p, d, g, m, y, v, _, x, w = {},
                            T = [],
                            b = f || e[0];
                        h = "string" == typeof h ? "," + h + "," : a, null == o && (o = 1);
                        for (d in e[0]) T.push(d);
                        if (e.length > 1) {
                            for (x = e[e.length - 1], _ = !0, p = T.length; --p > -1;)
                                if (d = T[p], Math.abs(b[d] - x[d]) > .05) {
                                    _ = !1;
                                    break
                                }
                            _ && (e = e.concat(), f && e.unshift(f), e.push(e[1]), f = e[e.length - 3])
                        }
                        for (t.length = n.length = i.length = 0, p = T.length; --p > -1;) d = T[p], r[d] = -1 !== h.indexOf("," + d + ","), w[d] = c(e, d, r[d], f);
                        for (p = t.length; --p > -1;) t[p] = Math.sqrt(t[p]), n[p] = Math.sqrt(n[p]);
                        if (!l) {
                            for (p = T.length; --p > -1;)
                                if (r[d])
                                    for (g = w[T[p]], v = g.length - 1, m = 0; v > m; m++) y = g[m + 1].da / n[m] + g[m].da / t[m] || 0, i[m] = (i[m] || 0) + y * y;
                            for (p = i.length; --p > -1;) i[p] = Math.sqrt(i[p])
                        }
                        for (p = T.length, m = s ? 4 : 1; --p > -1;) d = T[p], g = w[d], u(g, o, s, l, r[d]), _ && (g.splice(0, m), g.splice(g.length - m, m));
                        return w
                    },
                    f = function(e, t, n) {
                        t = t || "soft";
                        var i, r, o, a, l, u, c, h, f, p, d, g = {},
                            m = "cubic" === t ? 3 : 2,
                            y = "soft" === t,
                            v = [];
                        if (y && n && (e = [n].concat(e)), null == e || e.length < m + 1) throw "invalid Bezier data";
                        for (f in e[0]) v.push(f);
                        for (u = v.length; --u > -1;) {
                            for (f = v[u], g[f] = l = [], p = 0, h = e.length, c = 0; h > c; c++) i = null == n ? e[c][f] : "string" == typeof(d = e[c][f]) && "=" === d.charAt(1) ? n[f] + Number(d.charAt(0) + d.substr(2)) : Number(d), y && c > 1 && h - 1 > c && (l[p++] = (i + l[p - 2]) / 2), l[p++] = i;
                            for (h = p - m + 1, p = 0, c = 0; h > c; c += m) i = l[c], r = l[c + 1], o = l[c + 2], a = 2 === m ? 0 : l[c + 3], l[p++] = d = 3 === m ? new s(i, r, o, a) : new s(i, (2 * r + i) / 3, (2 * r + o) / 3, o);
                            l.length = p
                        }
                        return g
                    },
                    p = function(e, t, n) {
                        for (var i, r, o, s, a, l, u, c, h, f, p, d = 1 / n, g = e.length; --g > -1;)
                            for (f = e[g], o = f.a, s = f.d - o, a = f.c - o, l = f.b - o, i = r = 0, c = 1; n >= c; c++) u = d * c, h = 1 - u, i = r - (r = (u * u * s + 3 * h * (u * a + h * l)) * u), p = g * n + c - 1, t[p] = (t[p] || 0) + i * i
                    },
                    d = function(e, t) {
                        t = t >> 0 || 6;
                        var n, i, r, o, s = [],
                            a = [],
                            l = 0,
                            u = 0,
                            c = t - 1,
                            h = [],
                            f = [];
                        for (n in e) p(e[n], s, t);
                        for (r = s.length, i = 0; r > i; i++) l += Math.sqrt(s[i]), o = i % t, f[o] = l, o === c && (u += l, o = i / t >> 0, h[o] = f, a[o] = u, l = 0, f = []);
                        return {
                            length: u,
                            lengths: a,
                            segments: h
                        }
                    },
                    g = _gsScope._gsDefine.plugin({
                        propName: "bezier",
                        priority: -1,
                        version: "1.3.7",
                        API: 2,
                        global: !0,
                        init: function(e, t, n) {
                            this._target = e, t instanceof Array && (t = {
                                values: t
                            }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == t.timeResolution ? 6 : parseInt(t.timeResolution, 10);
                            var i, r, o, s, a, l = t.values || [],
                                u = {},
                                c = l[0],
                                p = t.autoRotate || n.vars.orientToBezier;
                            this._autoRotate = p ? p instanceof Array ? p : [
                                ["x", "y", "rotation", p === !0 ? 0 : Number(p) || 0]
                            ] : null;
                            for (i in c) this._props.push(i);
                            for (o = this._props.length; --o > -1;) i = this._props[o], this._overwriteProps.push(i), r = this._func[i] = "function" == typeof e[i], u[i] = r ? e[i.indexOf("set") || "function" != typeof e["get" + i.substr(3)] ? i : "get" + i.substr(3)]() : parseFloat(e[i]), a || u[i] !== l[0][i] && (a = u);
                            if (this._beziers = "cubic" !== t.type && "quadratic" !== t.type && "soft" !== t.type ? h(l, isNaN(t.curviness) ? 1 : t.curviness, !1, "thruBasic" === t.type, t.correlate, a) : f(l, t.type, u), this._segCount = this._beziers[i].length, this._timeRes) {
                                var g = d(this._beziers, this._timeRes);
                                this._length = g.length, this._lengths = g.lengths, this._segments = g.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                            }
                            if (p = this._autoRotate)
                                for (this._initialRotations = [], p[0] instanceof Array || (this._autoRotate = p = [p]), o = p.length; --o > -1;) {
                                    for (s = 0; 3 > s; s++) i = p[o][s], this._func[i] = "function" == typeof e[i] && e[i.indexOf("set") || "function" != typeof e["get" + i.substr(3)] ? i : "get" + i.substr(3)];
                                    i = p[o][2], this._initialRotations[o] = (this._func[i] ? this._func[i].call(this._target) : this._target[i]) || 0, this._overwriteProps.push(i)
                                }
                            return this._startRatio = n.vars.runBackwards ? 1 : 0, !0
                        },
                        set: function(t) {
                            var n, i, r, o, s, a, l, u, c, h, f = this._segCount,
                                p = this._func,
                                d = this._target,
                                g = t !== this._startRatio;
                            if (this._timeRes) {
                                if (c = this._lengths, h = this._curSeg, t *= this._length, r = this._li, t > this._l2 && f - 1 > r) {
                                    for (u = f - 1; u > r && (this._l2 = c[++r]) <= t;);
                                    this._l1 = c[r - 1], this._li = r, this._curSeg = h = this._segments[r], this._s2 = h[this._s1 = this._si = 0]
                                } else if (t < this._l1 && r > 0) {
                                    for (; r > 0 && (this._l1 = c[--r]) >= t;);
                                    0 === r && t < this._l1 ? this._l1 = 0 : r++, this._l2 = c[r], this._li = r, this._curSeg = h = this._segments[r], this._s1 = h[(this._si = h.length - 1) - 1] || 0, this._s2 = h[this._si]
                                }
                                if (n = r, t -= this._l1, r = this._si, t > this._s2 && r < h.length - 1) {
                                    for (u = h.length - 1; u > r && (this._s2 = h[++r]) <= t;);
                                    this._s1 = h[r - 1], this._si = r
                                } else if (t < this._s1 && r > 0) {
                                    for (; r > 0 && (this._s1 = h[--r]) >= t;);
                                    0 === r && t < this._s1 ? this._s1 = 0 : r++, this._s2 = h[r], this._si = r
                                }
                                a = (r + (t - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                            } else n = 0 > t ? 0 : t >= 1 ? f - 1 : f * t >> 0, a = (t - n * (1 / f)) * f;
                            for (i = 1 - a, r = this._props.length; --r > -1;) o = this._props[r], s = this._beziers[o][n], l = (a * a * s.da + 3 * i * (a * s.ca + i * s.ba)) * a + s.a, this._mod[o] && (l = this._mod[o](l, d)), p[o] ? d[o](l) : d[o] = l;
                            if (this._autoRotate) {
                                var m, y, v, _, x, w, T, b = this._autoRotate;
                                for (r = b.length; --r > -1;) o = b[r][2], w = b[r][3] || 0, T = b[r][4] === !0 ? 1 : e, s = this._beziers[b[r][0]], m = this._beziers[b[r][1]], s && m && (s = s[n], m = m[n], y = s.a + (s.b - s.a) * a, _ = s.b + (s.c - s.b) * a, y += (_ - y) * a, _ += (s.c + (s.d - s.c) * a - _) * a, v = m.a + (m.b - m.a) * a, x = m.b + (m.c - m.b) * a, v += (x - v) * a, x += (m.c + (m.d - m.c) * a - x) * a, l = g ? Math.atan2(x - v, _ - y) * T + w : this._initialRotations[r], this._mod[o] && (l = this._mod[o](l, d)), p[o] ? d[o](l) : d[o] = l)
                            }
                        }
                    }),
                    m = g.prototype;
                g.bezierThrough = h, g.cubicToQuadratic = l, g._autoCSS = !0, g.quadraticToCubic = function(e, t, n) {
                    return new s(e, (2 * t + e) / 3, (2 * t + n) / 3, n)
                }, g._cssRegister = function() {
                    var e = o.CSSPlugin;
                    if (e) {
                        var t = e._internals,
                            n = t._parseToProxy,
                            i = t._setPluginRatio,
                            r = t.CSSPropTween;
                        t._registerComplexSpecialProp("bezier", {
                            parser: function(e, t, o, s, a, l) {
                                t instanceof Array && (t = {
                                    values: t
                                }), l = new g;
                                var u, c, h, f = t.values,
                                    p = f.length - 1,
                                    d = [],
                                    m = {};
                                if (0 > p) return a;
                                for (u = 0; p >= u; u++) h = n(e, f[u], s, a, l, p !== u), d[u] = h.end;
                                for (c in t) m[c] = t[c];
                                return m.values = d, a = new r(e, "bezier", 0, 0, h.pt, 2), a.data = h, a.plugin = l, a.setRatio = i, 0 === m.autoRotate && (m.autoRotate = !0), !m.autoRotate || m.autoRotate instanceof Array || (u = m.autoRotate === !0 ? 0 : Number(m.autoRotate), m.autoRotate = null != h.end.left ? [
                                    ["left", "top", "rotation", u, !1]
                                ] : null != h.end.x && [
                                    ["x", "y", "rotation", u, !1]
                                ]), m.autoRotate && (s._transform || s._enableTransforms(!1), h.autoRotate = s._target._gsTransform, h.proxy.rotation = h.autoRotate.rotation || 0, s._overwriteProps.push("rotation")), l._onInitTween(h.proxy, m, s._tween), a
                            }
                        })
                    }
                }, m._mod = function(e) {
                    for (var t, n = this._overwriteProps, i = n.length; --i > -1;) t = e[n[i]], t && "function" == typeof t && (this._mod[n[i]] = t)
                }, m._kill = function(e) {
                    var t, n, i = this._props;
                    for (t in this._beziers)
                        if (t in e)
                            for (delete this._beziers[t], delete this._func[t], n = i.length; --n > -1;) i[n] === t && i.splice(n, 1);
                    if (i = this._autoRotate)
                        for (n = i.length; --n > -1;) e[i[n][2]] && i.splice(n, 1);
                    return this._super._kill.call(this, e)
                }
            }(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(e, t) {
                var n, i, r, o, s = function() {
                        e.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = s.prototype.setRatio
                    },
                    a = _gsScope._gsDefine.globals,
                    l = {},
                    u = s.prototype = new e("css");
                u.constructor = s, s.version = "1.19.0", s.API = 2, s.defaultTransformPerspective = 0, s.defaultSkewType = "compensated", s.defaultSmoothOrigin = !0, u = "px", s.suffixMap = {
                    top: u,
                    right: u,
                    bottom: u,
                    left: u,
                    width: u,
                    height: u,
                    fontSize: u,
                    padding: u,
                    margin: u,
                    perspective: u,
                    lineHeight: ""
                };
                var c, h, f, p, d, g, m, y, v = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                    _ = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    x = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    w = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                    T = /(?:\d|\-|\+|=|#|\.)*/g,
                    b = /opacity *= *([^)]*)/i,
                    S = /opacity:([^;]*)/i,
                    k = /alpha\(opacity *=.+?\)/i,
                    P = /^(rgb|hsl)/,
                    C = /([A-Z])/g,
                    O = /-([a-z])/gi,
                    E = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    M = function(e, t) {
                        return t.toUpperCase()
                    },
                    A = /(?:Left|Right|Width)/i,
                    N = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    D = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    R = /,(?=[^\)]*(?:\(|$))/gi,
                    L = /[\s,\(]/i,
                    F = Math.PI / 180,
                    j = 180 / Math.PI,
                    X = {},
                    B = document,
                    I = function(e) {
                        return B.createElementNS ? B.createElementNS("http://www.w3.org/1999/xhtml", e) : B.createElement(e)
                    },
                    q = I("div"),
                    z = I("img"),
                    Y = s._internals = {
                        _specialProps: l
                    },
                    H = navigator.userAgent,
                    W = function() {
                        var e = H.indexOf("Android"),
                            t = I("a");
                        return f = -1 !== H.indexOf("Safari") && -1 === H.indexOf("Chrome") && (-1 === e || Number(H.substr(e + 8, 1)) > 3), d = f && Number(H.substr(H.indexOf("Version/") + 8, 1)) < 6, p = -1 !== H.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(H) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(H)) && (g = parseFloat(RegExp.$1)), !!t && (t.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(t.style.opacity))
                    }(),
                    V = function(e) {
                        return b.test("string" == typeof e ? e : (e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                    },
                    G = function(e) {
                        window.console && console.log(e)
                    },
                    U = "",
                    Q = "",
                    Z = function(e, t) {
                        t = t || q;
                        var n, i, r = t.style;
                        if (void 0 !== r[e]) return e;
                        for (e = e.charAt(0).toUpperCase() + e.substr(1), n = ["O", "Moz", "ms", "Ms", "Webkit"], i = 5; --i > -1 && void 0 === r[n[i] + e];);
                        return i >= 0 ? (Q = 3 === i ? "ms" : n[i], U = "-" + Q.toLowerCase() + "-", Q + e) : null
                    },
                    K = B.defaultView ? B.defaultView.getComputedStyle : function() {},
                    $ = s.getStyle = function(e, t, n, i, r) {
                        var o;
                        return W || "opacity" !== t ? (!i && e.style[t] ? o = e.style[t] : (n = n || K(e)) ? o = n[t] || n.getPropertyValue(t) || n.getPropertyValue(t.replace(C, "-$1").toLowerCase()) : e.currentStyle && (o = e.currentStyle[t]), null == r || o && "none" !== o && "auto" !== o && "auto auto" !== o ? o : r) : V(e)
                    },
                    J = Y.convertToPixels = function(e, n, i, r, o) {
                        if ("px" === r || !r) return i;
                        if ("auto" === r || !i) return 0;
                        var a, l, u, c = A.test(n),
                            h = e,
                            f = q.style,
                            p = 0 > i,
                            d = 1 === i;
                        if (p && (i = -i), d && (i *= 100), "%" === r && -1 !== n.indexOf("border")) a = i / 100 * (c ? e.clientWidth : e.clientHeight);
                        else {
                            if (f.cssText = "border:0 solid red;position:" + $(e, "position") + ";line-height:0;", "%" !== r && h.appendChild && "v" !== r.charAt(0) && "rem" !== r) f[c ? "borderLeftWidth" : "borderTopWidth"] = i + r;
                            else {
                                if (h = e.parentNode || B.body, l = h._gsCache, u = t.ticker.frame, l && c && l.time === u) return l.width * i / 100;
                                f[c ? "width" : "height"] = i + r
                            }
                            h.appendChild(q), a = parseFloat(q[c ? "offsetWidth" : "offsetHeight"]), h.removeChild(q), c && "%" === r && s.cacheWidths !== !1 && (l = h._gsCache = h._gsCache || {}, l.time = u, l.width = a / i * 100), 0 !== a || o || (a = J(e, n, i, r, !0))
                        }
                        return d && (a /= 100), p ? -a : a
                    },
                    ee = Y.calculateOffset = function(e, t, n) {
                        if ("absolute" !== $(e, "position", n)) return 0;
                        var i = "left" === t ? "Left" : "Top",
                            r = $(e, "margin" + i, n);
                        return e["offset" + i] - (J(e, t, parseFloat(r), r.replace(T, "")) || 0)
                    },
                    te = function(e, t) {
                        var n, i, r, o = {};
                        if (t = t || K(e, null))
                            if (n = t.length)
                                for (; --n > -1;) r = t[n], (-1 === r.indexOf("-transform") || Oe === r) && (o[r.replace(O, M)] = t.getPropertyValue(r));
                            else
                                for (n in t)(-1 === n.indexOf("Transform") || Ce === n) && (o[n] = t[n]);
                        else if (t = e.currentStyle || e.style)
                            for (n in t) "string" == typeof n && void 0 === o[n] && (o[n.replace(O, M)] = t[n]);
                        return W || (o.opacity = V(e)), i = qe(e, t, !1), o.rotation = i.rotation, o.skewX = i.skewX, o.scaleX = i.scaleX, o.scaleY = i.scaleY, o.x = i.x, o.y = i.y, Me && (o.z = i.z, o.rotationX = i.rotationX, o.rotationY = i.rotationY, o.scaleZ = i.scaleZ), o.filters && delete o.filters, o
                    },
                    ne = function(e, t, n, i, r) {
                        var o, s, a, l = {},
                            u = e.style;
                        for (s in n) "cssText" !== s && "length" !== s && isNaN(s) && (t[s] !== (o = n[s]) || r && r[s]) && -1 === s.indexOf("Origin") && ("number" == typeof o || "string" == typeof o) && (l[s] = "auto" !== o || "left" !== s && "top" !== s ? "" !== o && "auto" !== o && "none" !== o || "string" != typeof t[s] || "" === t[s].replace(w, "") ? o : 0 : ee(e, s), void 0 !== u[s] && (a = new ye(u, s, u[s], a)));
                        if (i)
                            for (s in i) "className" !== s && (l[s] = i[s]);
                        return {
                            difs: l,
                            firstMPT: a
                        }
                    },
                    ie = {
                        width: ["Left", "Right"],
                        height: ["Top", "Bottom"]
                    },
                    re = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    oe = function(e, t, n) {
                        if ("svg" === (e.nodeName + "").toLowerCase()) return (n || K(e))[t] || 0;
                        if (e.getBBox && Xe(e)) return e.getBBox()[t] || 0;
                        var i = parseFloat("width" === t ? e.offsetWidth : e.offsetHeight),
                            r = ie[t],
                            o = r.length;
                        for (n = n || K(e, null); --o > -1;) i -= parseFloat($(e, "padding" + r[o], n, !0)) || 0, i -= parseFloat($(e, "border" + r[o] + "Width", n, !0)) || 0;
                        return i
                    },
                    se = function(e, t) {
                        if ("contain" === e || "auto" === e || "auto auto" === e) return e + " ";
                        (null == e || "" === e) && (e = "0 0");
                        var n, i = e.split(" "),
                            r = -1 !== e.indexOf("left") ? "0%" : -1 !== e.indexOf("right") ? "100%" : i[0],
                            o = -1 !== e.indexOf("top") ? "0%" : -1 !== e.indexOf("bottom") ? "100%" : i[1];
                        if (i.length > 3 && !t) {
                            for (i = e.split(", ").join(",").split(","), e = [], n = 0; n < i.length; n++) e.push(se(i[n]));
                            return e.join(",")
                        }
                        return null == o ? o = "center" === r ? "50%" : "0" : "center" === o && (o = "50%"), ("center" === r || isNaN(parseFloat(r)) && -1 === (r + "").indexOf("=")) && (r = "50%"), e = r + " " + o + (i.length > 2 ? " " + i[2] : ""), t && (t.oxp = -1 !== r.indexOf("%"), t.oyp = -1 !== o.indexOf("%"), t.oxr = "=" === r.charAt(1), t.oyr = "=" === o.charAt(1), t.ox = parseFloat(r.replace(w, "")), t.oy = parseFloat(o.replace(w, "")), t.v = e), t || e
                    },
                    ae = function(e, t) {
                        return "function" == typeof e && (e = e(y, m)), "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) : parseFloat(e) - parseFloat(t) || 0
                    },
                    le = function(e, t) {
                        return "function" == typeof e && (e = e(y, m)), null == e ? t : "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) + t : parseFloat(e) || 0
                    },
                    ue = function(e, t, n, i) {
                        var r, o, s, a, l, u = 1e-6;
                        return "function" == typeof e && (e = e(y, m)), null == e ? a = t : "number" == typeof e ? a = e : (r = 360, o = e.split("_"), l = "=" === e.charAt(1), s = (l ? parseInt(e.charAt(0) + "1", 10) * parseFloat(o[0].substr(2)) : parseFloat(o[0])) * (-1 === e.indexOf("rad") ? 1 : j) - (l ? 0 : t), o.length && (i && (i[n] = t + s), -1 !== e.indexOf("short") && (s %= r, s !== s % (r / 2) && (s = 0 > s ? s + r : s - r)), -1 !== e.indexOf("_cw") && 0 > s ? s = (s + 9999999999 * r) % r - (s / r | 0) * r : -1 !== e.indexOf("ccw") && s > 0 && (s = (s - 9999999999 * r) % r - (s / r | 0) * r)), a = t + s), u > a && a > -u && (a = 0), a
                    },
                    ce = {
                        aqua: [0, 255, 255],
                        lime: [0, 255, 0],
                        silver: [192, 192, 192],
                        black: [0, 0, 0],
                        maroon: [128, 0, 0],
                        teal: [0, 128, 128],
                        blue: [0, 0, 255],
                        navy: [0, 0, 128],
                        white: [255, 255, 255],
                        fuchsia: [255, 0, 255],
                        olive: [128, 128, 0],
                        yellow: [255, 255, 0],
                        orange: [255, 165, 0],
                        gray: [128, 128, 128],
                        purple: [128, 0, 128],
                        green: [0, 128, 0],
                        red: [255, 0, 0],
                        pink: [255, 192, 203],
                        cyan: [0, 255, 255],
                        transparent: [255, 255, 255, 0]
                    },
                    he = function(e, t, n) {
                        return e = 0 > e ? e + 1 : e > 1 ? e - 1 : e, 255 * (1 > 6 * e ? t + (n - t) * e * 6 : .5 > e ? n : 2 > 3 * e ? t + (n - t) * (2 / 3 - e) * 6 : t) + .5 | 0
                    },
                    fe = s.parseColor = function(e, t) {
                        var n, i, r, o, s, a, l, u, c, h, f;
                        if (e)
                            if ("number" == typeof e) n = [e >> 16, e >> 8 & 255, 255 & e];
                            else {
                                if ("," === e.charAt(e.length - 1) && (e = e.substr(0, e.length - 1)), ce[e]) n = ce[e];
                                else if ("#" === e.charAt(0)) 4 === e.length && (i = e.charAt(1), r = e.charAt(2), o = e.charAt(3), e = "#" + i + i + r + r + o + o), e = parseInt(e.substr(1), 16), n = [e >> 16, e >> 8 & 255, 255 & e];
                                else if ("hsl" === e.substr(0, 3))
                                    if (n = f = e.match(v), t) {
                                        if (-1 !== e.indexOf("=")) return e.match(_)
                                    } else s = Number(n[0]) % 360 / 360, a = Number(n[1]) / 100, l = Number(n[2]) / 100, r = .5 >= l ? l * (a + 1) : l + a - l * a, i = 2 * l - r, n.length > 3 && (n[3] = Number(e[3])), n[0] = he(s + 1 / 3, i, r), n[1] = he(s, i, r), n[2] = he(s - 1 / 3, i, r);
                                else n = e.match(v) || ce.transparent;
                                n[0] = Number(n[0]), n[1] = Number(n[1]), n[2] = Number(n[2]), n.length > 3 && (n[3] = Number(n[3]))
                            }
                        else n = ce.black;
                        return t && !f && (i = n[0] / 255, r = n[1] / 255, o = n[2] / 255, u = Math.max(i, r, o), c = Math.min(i, r, o), l = (u + c) / 2, u === c ? s = a = 0 : (h = u - c, a = l > .5 ? h / (2 - u - c) : h / (u + c), s = u === i ? (r - o) / h + (o > r ? 6 : 0) : u === r ? (o - i) / h + 2 : (i - r) / h + 4, s *= 60), n[0] = s + .5 | 0, n[1] = 100 * a + .5 | 0, n[2] = 100 * l + .5 | 0), n
                    },
                    pe = function(e, t) {
                        var n, i, r, o = e.match(de) || [],
                            s = 0,
                            a = o.length ? "" : e;
                        for (n = 0; n < o.length; n++) i = o[n], r = e.substr(s, e.indexOf(i, s) - s), s += r.length + i.length, i = fe(i, t), 3 === i.length && i.push(1), a += r + (t ? "hsla(" + i[0] + "," + i[1] + "%," + i[2] + "%," + i[3] : "rgba(" + i.join(",")) + ")";
                        return a + e.substr(s)
                    },
                    de = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
                for (u in ce) de += "|" + u + "\\b";
                de = new RegExp(de + ")", "gi"), s.colorStringFilter = function(e) {
                    var t, n = e[0] + e[1];
                    de.test(n) && (t = -1 !== n.indexOf("hsl(") || -1 !== n.indexOf("hsla("), e[0] = pe(e[0], t), e[1] = pe(e[1], t)), de.lastIndex = 0
                }, t.defaultStringFilter || (t.defaultStringFilter = s.colorStringFilter);
                var ge = function(e, t, n, i) {
                        if (null == e) return function(e) {
                            return e
                        };
                        var r, o = t ? (e.match(de) || [""])[0] : "",
                            s = e.split(o).join("").match(x) || [],
                            a = e.substr(0, e.indexOf(s[0])),
                            l = ")" === e.charAt(e.length - 1) ? ")" : "",
                            u = -1 !== e.indexOf(" ") ? " " : ",",
                            c = s.length,
                            h = c > 0 ? s[0].replace(v, "") : "";
                        return c ? r = t ? function(e) {
                            var t, f, p, d;
                            if ("number" == typeof e) e += h;
                            else if (i && R.test(e)) {
                                for (d = e.replace(R, "|").split("|"), p = 0; p < d.length; p++) d[p] = r(d[p]);
                                return d.join(",")
                            }
                            if (t = (e.match(de) || [o])[0], f = e.split(t).join("").match(x) || [], p = f.length, c > p--)
                                for (; ++p < c;) f[p] = n ? f[(p - 1) / 2 | 0] : s[p];
                            return a + f.join(u) + u + t + l + (-1 !== e.indexOf("inset") ? " inset" : "")
                        } : function(e) {
                            var t, o, f;
                            if ("number" == typeof e) e += h;
                            else if (i && R.test(e)) {
                                for (o = e.replace(R, "|").split("|"), f = 0; f < o.length; f++) o[f] = r(o[f]);
                                return o.join(",")
                            }
                            if (t = e.match(x) || [], f = t.length, c > f--)
                                for (; ++f < c;) t[f] = n ? t[(f - 1) / 2 | 0] : s[f];
                            return a + t.join(u) + l
                        } : function(e) {
                            return e
                        }
                    },
                    me = function(e) {
                        return e = e.split(","),
                            function(t, n, i, r, o, s, a) {
                                var l, u = (n + "").split(" ");
                                for (a = {}, l = 0; 4 > l; l++) a[e[l]] = u[l] = u[l] || u[(l - 1) / 2 >> 0];
                                return r.parse(t, a, o, s)
                            }
                    },
                    ye = (Y._setPluginRatio = function(e) {
                        this.plugin.setRatio(e);
                        for (var t, n, i, r, o, s = this.data, a = s.proxy, l = s.firstMPT, u = 1e-6; l;) t = a[l.v], l.r ? t = Math.round(t) : u > t && t > -u && (t = 0), l.t[l.p] = t, l = l._next;
                        if (s.autoRotate && (s.autoRotate.rotation = s.mod ? s.mod(a.rotation, this.t) : a.rotation), 1 === e || 0 === e)
                            for (l = s.firstMPT, o = 1 === e ? "e" : "b"; l;) {
                                if (n = l.t, n.type) {
                                    if (1 === n.type) {
                                        for (r = n.xs0 + n.s + n.xs1, i = 1; i < n.l; i++) r += n["xn" + i] + n["xs" + (i + 1)];
                                        n[o] = r
                                    }
                                } else n[o] = n.s + n.xs0;
                                l = l._next
                            }
                    }, function(e, t, n, i, r) {
                        this.t = e, this.p = t, this.v = n, this.r = r, i && (i._prev = this, this._next = i)
                    }),
                    ve = (Y._parseToProxy = function(e, t, n, i, r, o) {
                        var s, a, l, u, c, h = i,
                            f = {},
                            p = {},
                            d = n._transform,
                            g = X;
                        for (n._transform = null, X = t, i = c = n.parse(e, t, i, r), X = g, o && (n._transform = d, h && (h._prev = null, h._prev && (h._prev._next = null))); i && i !== h;) {
                            if (i.type <= 1 && (a = i.p, p[a] = i.s + i.c, f[a] = i.s, o || (u = new ye(i, "s", a, u, i.r), i.c = 0), 1 === i.type))
                                for (s = i.l; --s > 0;) l = "xn" + s, a = i.p + "_" + l, p[a] = i.data[l], f[a] = i[l], o || (u = new ye(i, l, a, u, i.rxp[l]));
                            i = i._next
                        }
                        return {
                            proxy: f,
                            end: p,
                            firstMPT: u,
                            pt: c
                        }
                    }, Y.CSSPropTween = function(e, t, i, r, s, a, l, u, c, h, f) {
                        this.t = e, this.p = t, this.s = i, this.c = r, this.n = l || t, e instanceof ve || o.push(this.n), this.r = u, this.type = a || 0, c && (this.pr = c, n = !0), this.b = void 0 === h ? i : h, this.e = void 0 === f ? i + r : f, s && (this._next = s, s._prev = this)
                    }),
                    _e = function(e, t, n, i, r, o) {
                        var s = new ve(e, t, n, i - n, r, -1, o);
                        return s.b = n, s.e = s.xs0 = i, s
                    },
                    xe = s.parseComplex = function(e, t, n, i, r, o, a, l, u, h) {
                        n = n || o || "", "function" == typeof i && (i = i(y, m)), a = new ve(e, t, 0, 0, a, h ? 2 : 1, null, !1, l, n, i), i += "", r && de.test(i + n) && (i = [n, i], s.colorStringFilter(i), n = i[0], i = i[1]);
                        var f, p, d, g, x, w, T, b, S, k, P, C, O, E = n.split(", ").join(",").split(" "),
                            M = i.split(", ").join(",").split(" "),
                            A = E.length,
                            N = c !== !1;
                        for ((-1 !== i.indexOf(",") || -1 !== n.indexOf(",")) && (E = E.join(" ").replace(R, ", ").split(" "), M = M.join(" ").replace(R, ", ").split(" "), A = E.length), A !== M.length && (E = (o || "").split(" "), A = E.length), a.plugin = u, a.setRatio = h, de.lastIndex = 0, f = 0; A > f; f++)
                            if (g = E[f], x = M[f], b = parseFloat(g), b || 0 === b) a.appendXtra("", b, ae(x, b), x.replace(_, ""), N && -1 !== x.indexOf("px"), !0);
                            else if (r && de.test(g)) C = x.indexOf(")") + 1, C = ")" + (C ? x.substr(C) : ""), O = -1 !== x.indexOf("hsl") && W, g = fe(g, O), x = fe(x, O), S = g.length + x.length > 6, S && !W && 0 === x[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(M[f]).join("transparent")) : (W || (S = !1), O ? a.appendXtra(S ? "hsla(" : "hsl(", g[0], ae(x[0], g[0]), ",", !1, !0).appendXtra("", g[1], ae(x[1], g[1]), "%,", !1).appendXtra("", g[2], ae(x[2], g[2]), S ? "%," : "%" + C, !1) : a.appendXtra(S ? "rgba(" : "rgb(", g[0], x[0] - g[0], ",", !0, !0).appendXtra("", g[1], x[1] - g[1], ",", !0).appendXtra("", g[2], x[2] - g[2], S ? "," : C, !0), S && (g = g.length < 4 ? 1 : g[3], a.appendXtra("", g, (x.length < 4 ? 1 : x[3]) - g, C, !1))), de.lastIndex = 0;
                        else if (w = g.match(v)) {
                            if (T = x.match(_), !T || T.length !== w.length) return a;
                            for (d = 0, p = 0; p < w.length; p++) P = w[p], k = g.indexOf(P, d), a.appendXtra(g.substr(d, k - d), Number(P), ae(T[p], P), "", N && "px" === g.substr(k + P.length, 2), 0 === p), d = k + P.length;
                            a["xs" + a.l] += g.substr(d)
                        } else a["xs" + a.l] += a.l || a["xs" + a.l] ? " " + x : x;
                        if (-1 !== i.indexOf("=") && a.data) {
                            for (C = a.xs0 + a.data.s, f = 1; f < a.l; f++) C += a["xs" + f] + a.data["xn" + f];
                            a.e = C + a["xs" + f]
                        }
                        return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a
                    },
                    we = 9;
                for (u = ve.prototype, u.l = u.pr = 0; --we > 0;) u["xn" + we] = 0, u["xs" + we] = "";
                u.xs0 = "", u._next = u._prev = u.xfirst = u.data = u.plugin = u.setRatio = u.rxp = null, u.appendXtra = function(e, t, n, i, r, o) {
                    var s = this,
                        a = s.l;
                    return s["xs" + a] += o && (a || s["xs" + a]) ? " " + e : e || "", n || 0 === a || s.plugin ? (s.l++, s.type = s.setRatio ? 2 : 1, s["xs" + s.l] = i || "", a > 0 ? (s.data["xn" + a] = t + n, s.rxp["xn" + a] = r, s["xn" + a] = t, s.plugin || (s.xfirst = new ve(s, "xn" + a, t, n, s.xfirst || s, 0, s.n, r, s.pr), s.xfirst.xs0 = 0), s) : (s.data = {
                        s: t + n
                    }, s.rxp = {}, s.s = t, s.c = n, s.r = r, s)) : (s["xs" + a] += t + (i || ""), s)
                };
                var Te = function(e, t) {
                        t = t || {}, this.p = t.prefix ? Z(e) || e : e, l[e] = l[this.p] = this, this.format = t.formatter || ge(t.defaultValue, t.color, t.collapsible, t.multi), t.parser && (this.parse = t.parser), this.clrs = t.color, this.multi = t.multi, this.keyword = t.keyword, this.dflt = t.defaultValue, this.pr = t.priority || 0
                    },
                    be = Y._registerComplexSpecialProp = function(e, t, n) {
                        "object" != typeof t && (t = {
                            parser: n
                        });
                        var i, r, o = e.split(","),
                            s = t.defaultValue;
                        for (n = n || [s], i = 0; i < o.length; i++) t.prefix = 0 === i && t.prefix, t.defaultValue = n[i] || s, r = new Te(o[i], t)
                    },
                    Se = Y._registerPluginProp = function(e) {
                        if (!l[e]) {
                            var t = e.charAt(0).toUpperCase() + e.substr(1) + "Plugin";
                            be(e, {
                                parser: function(e, n, i, r, o, s, u) {
                                    var c = a.com.greensock.plugins[t];
                                    return c ? (c._cssRegister(), l[i].parse(e, n, i, r, o, s, u)) : (G("Error: " + t + " js file not loaded."), o)
                                }
                            })
                        }
                    };
                u = Te.prototype, u.parseComplex = function(e, t, n, i, r, o) {
                    var s, a, l, u, c, h, f = this.keyword;
                    if (this.multi && (R.test(n) || R.test(t) ? (a = t.replace(R, "|").split("|"), l = n.replace(R, "|").split("|")) : f && (a = [t], l = [n])), l) {
                        for (u = l.length > a.length ? l.length : a.length, s = 0; u > s; s++) t = a[s] = a[s] || this.dflt, n = l[s] = l[s] || this.dflt, f && (c = t.indexOf(f), h = n.indexOf(f), c !== h && (-1 === h ? a[s] = a[s].split(f).join("") : -1 === c && (a[s] += " " + f)));
                        t = a.join(", "), n = l.join(", ")
                    }
                    return xe(e, this.p, t, n, this.clrs, this.dflt, i, this.pr, r, o)
                }, u.parse = function(e, t, n, i, o, s, a) {
                    return this.parseComplex(e.style, this.format($(e, this.p, r, !1, this.dflt)), this.format(t), o, s)
                }, s.registerSpecialProp = function(e, t, n) {
                    be(e, {
                        parser: function(e, i, r, o, s, a, l) {
                            var u = new ve(e, r, 0, 0, s, 2, r, !1, n);
                            return u.plugin = a, u.setRatio = t(e, i, o._tween, r), u
                        },
                        priority: n
                    })
                }, s.useSVGTransformAttr = f || p;
                var ke, Pe = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                    Ce = Z("transform"),
                    Oe = U + "transform",
                    Ee = Z("transformOrigin"),
                    Me = null !== Z("perspective"),
                    Ae = Y.Transform = function() {
                        this.perspective = parseFloat(s.defaultTransformPerspective) || 0, this.force3D = !(s.defaultForce3D === !1 || !Me) && (s.defaultForce3D || "auto")
                    },
                    Ne = window.SVGElement,
                    De = function(e, t, n) {
                        var i, r = B.createElementNS("http://www.w3.org/2000/svg", e),
                            o = /([a-z])([A-Z])/g;
                        for (i in n) r.setAttributeNS(null, i.replace(o, "$1-$2").toLowerCase(), n[i]);
                        return t.appendChild(r), r
                    },
                    Re = B.documentElement,
                    Le = function() {
                        var e, t, n, i = g || /Android/i.test(H) && !window.chrome;
                        return B.createElementNS && !i && (e = De("svg", Re), t = De("rect", e, {
                            width: 100,
                            height: 50,
                            x: 100
                        }), n = t.getBoundingClientRect().width, t.style[Ee] = "50% 50%", t.style[Ce] = "scaleX(0.5)", i = n === t.getBoundingClientRect().width && !(p && Me), Re.removeChild(e)), i
                    }(),
                    Fe = function(e, t, n, i, r, o) {
                        var a, l, u, c, h, f, p, d, g, m, y, v, _, x, w = e._gsTransform,
                            T = Ie(e, !0);
                        w && (_ = w.xOrigin, x = w.yOrigin), (!i || (a = i.split(" ")).length < 2) && (p = e.getBBox(), t = se(t).split(" "), a = [(-1 !== t[0].indexOf("%") ? parseFloat(t[0]) / 100 * p.width : parseFloat(t[0])) + p.x, (-1 !== t[1].indexOf("%") ? parseFloat(t[1]) / 100 * p.height : parseFloat(t[1])) + p.y]), n.xOrigin = c = parseFloat(a[0]), n.yOrigin = h = parseFloat(a[1]), i && T !== Be && (f = T[0], p = T[1], d = T[2], g = T[3], m = T[4], y = T[5], v = f * g - p * d, l = c * (g / v) + h * (-d / v) + (d * y - g * m) / v, u = c * (-p / v) + h * (f / v) - (f * y - p * m) / v, c = n.xOrigin = a[0] = l, h = n.yOrigin = a[1] = u), w && (o && (n.xOffset = w.xOffset, n.yOffset = w.yOffset, w = n), r || r !== !1 && s.defaultSmoothOrigin !== !1 ? (l = c - _, u = h - x, w.xOffset += l * T[0] + u * T[2] - l, w.yOffset += l * T[1] + u * T[3] - u) : w.xOffset = w.yOffset = 0), o || e.setAttribute("data-svg-origin", a.join(" "))
                    },
                    je = function(e) {
                        try {
                            return e.getBBox()
                        } catch (e) {}
                    },
                    Xe = function(e) {
                        return !!(Ne && e.getBBox && e.getCTM && je(e) && (!e.parentNode || e.parentNode.getBBox && e.parentNode.getCTM))
                    },
                    Be = [1, 0, 0, 1, 0, 0],
                    Ie = function(e, t) {
                        var n, i, r, o, s, a, l = e._gsTransform || new Ae,
                            u = 1e5,
                            c = e.style;
                        if (Ce ? i = $(e, Oe, null, !0) : e.currentStyle && (i = e.currentStyle.filter.match(N), i = i && 4 === i.length ? [i[0].substr(4), Number(i[2].substr(4)), Number(i[1].substr(4)), i[3].substr(4), l.x || 0, l.y || 0].join(",") : ""), n = !i || "none" === i || "matrix(1, 0, 0, 1, 0, 0)" === i, n && Ce && ((a = "none" === K(e).display) || !e.parentNode) && (a && (o = c.display, c.display = "block"), e.parentNode || (s = 1, Re.appendChild(e)), i = $(e, Oe, null, !0), n = !i || "none" === i || "matrix(1, 0, 0, 1, 0, 0)" === i, o ? c.display = o : a && He(c, "display"), s && Re.removeChild(e)), (l.svg || e.getBBox && Xe(e)) && (n && -1 !== (c[Ce] + "").indexOf("matrix") && (i = c[Ce], n = 0), r = e.getAttribute("transform"), n && r && (-1 !== r.indexOf("matrix") ? (i = r, n = 0) : -1 !== r.indexOf("translate") && (i = "matrix(1,0,0,1," + r.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", n = 0))), n) return Be;
                        for (r = (i || "").match(v) || [], we = r.length; --we > -1;) o = Number(r[we]), r[we] = (s = o - (o |= 0)) ? (s * u + (0 > s ? -.5 : .5) | 0) / u + o : o;
                        return t && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r
                    },
                    qe = Y.getTransform = function(e, n, i, r) {
                        if (e._gsTransform && i && !r) return e._gsTransform;
                        var o, a, l, u, c, h, f = i ? e._gsTransform || new Ae : new Ae,
                            p = f.scaleX < 0,
                            d = 2e-5,
                            g = 1e5,
                            m = Me ? parseFloat($(e, Ee, n, !1, "0 0 0").split(" ")[2]) || f.zOrigin || 0 : 0,
                            y = parseFloat(s.defaultTransformPerspective) || 0;
                        if (f.svg = !(!e.getBBox || !Xe(e)), f.svg && (Fe(e, $(e, Ee, n, !1, "50% 50%") + "", f, e.getAttribute("data-svg-origin")), ke = s.useSVGTransformAttr || Le), o = Ie(e), o !== Be) {
                            if (16 === o.length) {
                                var v, _, x, w, T, b = o[0],
                                    S = o[1],
                                    k = o[2],
                                    P = o[3],
                                    C = o[4],
                                    O = o[5],
                                    E = o[6],
                                    M = o[7],
                                    A = o[8],
                                    N = o[9],
                                    D = o[10],
                                    R = o[12],
                                    L = o[13],
                                    F = o[14],
                                    X = o[11],
                                    B = Math.atan2(E, D);
                                f.zOrigin && (F = -f.zOrigin, R = A * F - o[12], L = N * F - o[13], F = D * F + f.zOrigin - o[14]), f.rotationX = B * j, B && (w = Math.cos(-B), T = Math.sin(-B), v = C * w + A * T, _ = O * w + N * T, x = E * w + D * T, A = C * -T + A * w, N = O * -T + N * w, D = E * -T + D * w, X = M * -T + X * w, C = v, O = _, E = x), B = Math.atan2(-k, D), f.rotationY = B * j, B && (w = Math.cos(-B), T = Math.sin(-B), v = b * w - A * T, _ = S * w - N * T, x = k * w - D * T, N = S * T + N * w, D = k * T + D * w, X = P * T + X * w, b = v, S = _, k = x), B = Math.atan2(S, b), f.rotation = B * j, B && (w = Math.cos(-B), T = Math.sin(-B), b = b * w + C * T, _ = S * w + O * T, O = S * -T + O * w, E = k * -T + E * w, S = _), f.rotationX && Math.abs(f.rotationX) + Math.abs(f.rotation) > 359.9 && (f.rotationX = f.rotation = 0, f.rotationY = 180 - f.rotationY), f.scaleX = (Math.sqrt(b * b + S * S) * g + .5 | 0) / g, f.scaleY = (Math.sqrt(O * O + N * N) * g + .5 | 0) / g, f.scaleZ = (Math.sqrt(E * E + D * D) * g + .5 | 0) / g, f.rotationX || f.rotationY ? f.skewX = 0 : (f.skewX = C || O ? Math.atan2(C, O) * j + f.rotation : f.skewX || 0, Math.abs(f.skewX) > 90 && Math.abs(f.skewX) < 270 && (p ? (f.scaleX *= -1, f.skewX += f.rotation <= 0 ? 180 : -180, f.rotation += f.rotation <= 0 ? 180 : -180) : (f.scaleY *= -1, f.skewX += f.skewX <= 0 ? 180 : -180))), f.perspective = X ? 1 / (0 > X ? -X : X) : 0, f.x = R, f.y = L, f.z = F, f.svg && (f.x -= f.xOrigin - (f.xOrigin * b - f.yOrigin * C), f.y -= f.yOrigin - (f.yOrigin * S - f.xOrigin * O))
                            } else if (!Me || r || !o.length || f.x !== o[4] || f.y !== o[5] || !f.rotationX && !f.rotationY) {
                                var I = o.length >= 6,
                                    q = I ? o[0] : 1,
                                    z = o[1] || 0,
                                    Y = o[2] || 0,
                                    H = I ? o[3] : 1;
                                f.x = o[4] || 0, f.y = o[5] || 0, l = Math.sqrt(q * q + z * z), u = Math.sqrt(H * H + Y * Y), c = q || z ? Math.atan2(z, q) * j : f.rotation || 0, h = Y || H ? Math.atan2(Y, H) * j + c : f.skewX || 0, Math.abs(h) > 90 && Math.abs(h) < 270 && (p ? (l *= -1, h += 0 >= c ? 180 : -180, c += 0 >= c ? 180 : -180) : (u *= -1, h += 0 >= h ? 180 : -180)), f.scaleX = l, f.scaleY = u, f.rotation = c, f.skewX = h, Me && (f.rotationX = f.rotationY = f.z = 0, f.perspective = y, f.scaleZ = 1), f.svg && (f.x -= f.xOrigin - (f.xOrigin * q + f.yOrigin * Y), f.y -= f.yOrigin - (f.xOrigin * z + f.yOrigin * H))
                            }
                            f.zOrigin = m;
                            for (a in f) f[a] < d && f[a] > -d && (f[a] = 0)
                        }
                        return i && (e._gsTransform = f, f.svg && (ke && e.style[Ce] ? t.delayedCall(.001, function() {
                            He(e.style, Ce)
                        }) : !ke && e.getAttribute("transform") && t.delayedCall(.001, function() {
                            e.removeAttribute("transform")
                        }))), f
                    },
                    ze = function(e) {
                        var t, n, i = this.data,
                            r = -i.rotation * F,
                            o = r + i.skewX * F,
                            s = 1e5,
                            a = (Math.cos(r) * i.scaleX * s | 0) / s,
                            l = (Math.sin(r) * i.scaleX * s | 0) / s,
                            u = (Math.sin(o) * -i.scaleY * s | 0) / s,
                            c = (Math.cos(o) * i.scaleY * s | 0) / s,
                            h = this.t.style,
                            f = this.t.currentStyle;
                        if (f) {
                            n = l, l = -u, u = -n, t = f.filter, h.filter = "";
                            var p, d, m = this.t.offsetWidth,
                                y = this.t.offsetHeight,
                                v = "absolute" !== f.position,
                                _ = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + l + ", M21=" + u + ", M22=" + c,
                                x = i.x + m * i.xPercent / 100,
                                w = i.y + y * i.yPercent / 100;
                            if (null != i.ox && (p = (i.oxp ? m * i.ox * .01 : i.ox) - m / 2, d = (i.oyp ? y * i.oy * .01 : i.oy) - y / 2, x += p - (p * a + d * l), w += d - (p * u + d * c)), v ? (p = m / 2, d = y / 2, _ += ", Dx=" + (p - (p * a + d * l) + x) + ", Dy=" + (d - (p * u + d * c) + w) + ")") : _ += ", sizingMethod='auto expand')", -1 !== t.indexOf("DXImageTransform.Microsoft.Matrix(") ? h.filter = t.replace(D, _) : h.filter = _ + " " + t, (0 === e || 1 === e) && 1 === a && 0 === l && 0 === u && 1 === c && (v && -1 === _.indexOf("Dx=0, Dy=0") || b.test(t) && 100 !== parseFloat(RegExp.$1) || -1 === t.indexOf(t.indexOf("Alpha")) && h.removeAttribute("filter")), !v) {
                                var S, k, P, C = 8 > g ? 1 : -1;
                                for (p = i.ieOffsetX || 0, d = i.ieOffsetY || 0, i.ieOffsetX = Math.round((m - ((0 > a ? -a : a) * m + (0 > l ? -l : l) * y)) / 2 + x), i.ieOffsetY = Math.round((y - ((0 > c ? -c : c) * y + (0 > u ? -u : u) * m)) / 2 + w), we = 0; 4 > we; we++) k = re[we], S = f[k], n = -1 !== S.indexOf("px") ? parseFloat(S) : J(this.t, k, parseFloat(S), S.replace(T, "")) || 0, P = n !== i[k] ? 2 > we ? -i.ieOffsetX : -i.ieOffsetY : 2 > we ? p - i.ieOffsetX : d - i.ieOffsetY, h[k] = (i[k] = Math.round(n - P * (0 === we || 2 === we ? 1 : C))) + "px"
                            }
                        }
                    },
                    $e = Y.set3DTransformRatio = Y.setTransformRatio = function(e) {
                        var t, n, i, r, o, s, a, l, u, c, h, f, d, g, m, y, v, _, x, w, T, b, S, k = this.data,
                            P = this.t.style,
                            C = k.rotation,
                            O = k.rotationX,
                            E = k.rotationY,
                            M = k.scaleX,
                            A = k.scaleY,
                            N = k.scaleZ,
                            D = k.x,
                            R = k.y,
                            L = k.z,
                            j = k.svg,
                            X = k.perspective,
                            B = k.force3D;
                        if (((1 === e || 0 === e) && "auto" === B && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !B) && !L && !X && !E && !O && 1 === N || ke && j || !Me) return void(C || k.skewX || j ? (C *= F, b = k.skewX * F, S = 1e5, t = Math.cos(C) * M, r = Math.sin(C) * M, n = Math.sin(C - b) * -A, o = Math.cos(C - b) * A, b && "simple" === k.skewType && (v = Math.tan(b - k.skewY * F), v = Math.sqrt(1 + v * v), n *= v, o *= v, k.skewY && (v = Math.tan(k.skewY * F), v = Math.sqrt(1 + v * v), t *= v, r *= v)), j && (D += k.xOrigin - (k.xOrigin * t + k.yOrigin * n) + k.xOffset, R += k.yOrigin - (k.xOrigin * r + k.yOrigin * o) + k.yOffset, ke && (k.xPercent || k.yPercent) && (g = this.t.getBBox(), D += .01 * k.xPercent * g.width, R += .01 * k.yPercent * g.height), g = 1e-6, g > D && D > -g && (D = 0), g > R && R > -g && (R = 0)), x = (t * S | 0) / S + "," + (r * S | 0) / S + "," + (n * S | 0) / S + "," + (o * S | 0) / S + "," + D + "," + R + ")", j && ke ? this.t.setAttribute("transform", "matrix(" + x) : P[Ce] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix(" : "matrix(") + x) : P[Ce] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix(" : "matrix(") + M + ",0,0," + A + "," + D + "," + R + ")");
                        if (p && (g = 1e-4, g > M && M > -g && (M = N = 2e-5), g > A && A > -g && (A = N = 2e-5), !X || k.z || k.rotationX || k.rotationY || (X = 0)), C || k.skewX) C *= F, m = t = Math.cos(C), y = r = Math.sin(C), k.skewX && (C -= k.skewX * F, m = Math.cos(C), y = Math.sin(C), "simple" === k.skewType && (v = Math.tan((k.skewX - k.skewY) * F), v = Math.sqrt(1 + v * v), m *= v, y *= v, k.skewY && (v = Math.tan(k.skewY * F), v = Math.sqrt(1 + v * v), t *= v, r *= v))), n = -y, o = m;
                        else {
                            if (!(E || O || 1 !== N || X || j)) return void(P[Ce] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) translate3d(" : "translate3d(") + D + "px," + R + "px," + L + "px)" + (1 !== M || 1 !== A ? " scale(" + M + "," + A + ")" : ""));
                            t = o = 1, n = r = 0
                        }
                        u = 1, i = s = a = l = c = h = 0, f = X ? -1 / X : 0, d = k.zOrigin, g = 1e-6, w = ",", T = "0", C = E * F, C && (m = Math.cos(C), y = Math.sin(C), a = -y, c = f * -y, i = t * y, s = r * y, u = m, f *= m, t *= m, r *= m), C = O * F, C && (m = Math.cos(C), y = Math.sin(C), v = n * m + i * y, _ = o * m + s * y, l = u * y, h = f * y, i = n * -y + i * m, s = o * -y + s * m, u *= m, f *= m, n = v, o = _), 1 !== N && (i *= N, s *= N, u *= N, f *= N), 1 !== A && (n *= A, o *= A, l *= A, h *= A), 1 !== M && (t *= M, r *= M, a *= M, c *= M), (d || j) && (d && (D += i * -d, R += s * -d, L += u * -d + d), j && (D += k.xOrigin - (k.xOrigin * t + k.yOrigin * n) + k.xOffset, R += k.yOrigin - (k.xOrigin * r + k.yOrigin * o) + k.yOffset), g > D && D > -g && (D = T), g > R && R > -g && (R = T), g > L && L > -g && (L = 0)), x = k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix3d(" : "matrix3d(", x += (g > t && t > -g ? T : t) + w + (g > r && r > -g ? T : r) + w + (g > a && a > -g ? T : a), x += w + (g > c && c > -g ? T : c) + w + (g > n && n > -g ? T : n) + w + (g > o && o > -g ? T : o), O || E || 1 !== N ? (x += w + (g > l && l > -g ? T : l) + w + (g > h && h > -g ? T : h) + w + (g > i && i > -g ? T : i), x += w + (g > s && s > -g ? T : s) + w + (g > u && u > -g ? T : u) + w + (g > f && f > -g ? T : f) + w) : x += ",0,0,0,0,1,0,", x += D + w + R + w + L + w + (X ? 1 + -L / X : 1) + ")", P[Ce] = x
                    };
                u = Ae.prototype, u.x = u.y = u.z = u.skewX = u.skewY = u.rotation = u.rotationX = u.rotationY = u.zOrigin = u.xPercent = u.yPercent = u.xOffset = u.yOffset = 0, u.scaleX = u.scaleY = u.scaleZ = 1, be("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                    parser: function(e, t, n, i, o, a, l) {
                        if (i._lastParsedTransform === l) return o;
                        i._lastParsedTransform = l;
                        var u;
                        "function" == typeof l[n] && (u = l[n], l[n] = t);
                        var c, h, f, p, d, g, v, _, x, w = e._gsTransform,
                            T = e.style,
                            b = 1e-6,
                            S = Pe.length,
                            k = l,
                            P = {},
                            C = "transformOrigin",
                            O = qe(e, r, !0, k.parseTransform),
                            E = k.transform && ("function" == typeof k.transform ? k.transform(y, m) : k.transform);
                        if (i._transform = O, E && "string" == typeof E && Ce) h = q.style, h[Ce] = E, h.display = "block", h.position = "absolute", B.body.appendChild(q), c = qe(q, null, !1), O.svg && (g = O.xOrigin, v = O.yOrigin, c.x -= O.xOffset, c.y -= O.yOffset, (k.transformOrigin || k.svgOrigin) && (E = {}, Fe(e, se(k.transformOrigin), E, k.svgOrigin, k.smoothOrigin, !0), g = E.xOrigin, v = E.yOrigin, c.x -= E.xOffset - O.xOffset, c.y -= E.yOffset - O.yOffset), (g || v) && (_ = Ie(q, !0), c.x -= g - (g * _[0] + v * _[2]), c.y -= v - (g * _[1] + v * _[3]))), B.body.removeChild(q), c.perspective || (c.perspective = O.perspective), null != k.xPercent && (c.xPercent = le(k.xPercent, O.xPercent)), null != k.yPercent && (c.yPercent = le(k.yPercent, O.yPercent));
                        else if ("object" == typeof k) {
                            if (c = {
                                    scaleX: le(null != k.scaleX ? k.scaleX : k.scale, O.scaleX),
                                    scaleY: le(null != k.scaleY ? k.scaleY : k.scale, O.scaleY),
                                    scaleZ: le(k.scaleZ, O.scaleZ),
                                    x: le(k.x, O.x),
                                    y: le(k.y, O.y),
                                    z: le(k.z, O.z),
                                    xPercent: le(k.xPercent, O.xPercent),
                                    yPercent: le(k.yPercent, O.yPercent),
                                    perspective: le(k.transformPerspective, O.perspective)
                                }, d = k.directionalRotation, null != d)
                                if ("object" == typeof d)
                                    for (h in d) k[h] = d[h];
                                else k.rotation = d;
                            "string" == typeof k.x && -1 !== k.x.indexOf("%") && (c.x = 0, c.xPercent = le(k.x, O.xPercent)), "string" == typeof k.y && -1 !== k.y.indexOf("%") && (c.y = 0, c.yPercent = le(k.y, O.yPercent)), c.rotation = ue("rotation" in k ? k.rotation : "shortRotation" in k ? k.shortRotation + "_short" : "rotationZ" in k ? k.rotationZ : O.rotation - O.skewY, O.rotation - O.skewY, "rotation", P), Me && (c.rotationX = ue("rotationX" in k ? k.rotationX : "shortRotationX" in k ? k.shortRotationX + "_short" : O.rotationX || 0, O.rotationX, "rotationX", P), c.rotationY = ue("rotationY" in k ? k.rotationY : "shortRotationY" in k ? k.shortRotationY + "_short" : O.rotationY || 0, O.rotationY, "rotationY", P)), c.skewX = ue(k.skewX, O.skewX - O.skewY), (c.skewY = ue(k.skewY, O.skewY)) && (c.skewX += c.skewY, c.rotation += c.skewY)
                        }
                        for (Me && null != k.force3D && (O.force3D = k.force3D, p = !0), O.skewType = k.skewType || O.skewType || s.defaultSkewType, f = O.force3D || O.z || O.rotationX || O.rotationY || c.z || c.rotationX || c.rotationY || c.perspective, f || null == k.scale || (c.scaleZ = 1); --S > -1;) x = Pe[S], E = c[x] - O[x], (E > b || -b > E || null != k[x] || null != X[x]) && (p = !0,
                            o = new ve(O, x, O[x], E, o), x in P && (o.e = P[x]), o.xs0 = 0, o.plugin = a, i._overwriteProps.push(o.n));
                        return E = k.transformOrigin, O.svg && (E || k.svgOrigin) && (g = O.xOffset, v = O.yOffset, Fe(e, se(E), c, k.svgOrigin, k.smoothOrigin), o = _e(O, "xOrigin", (w ? O : c).xOrigin, c.xOrigin, o, C), o = _e(O, "yOrigin", (w ? O : c).yOrigin, c.yOrigin, o, C), (g !== O.xOffset || v !== O.yOffset) && (o = _e(O, "xOffset", w ? g : O.xOffset, O.xOffset, o, C), o = _e(O, "yOffset", w ? v : O.yOffset, O.yOffset, o, C)), E = ke ? null : "0px 0px"), (E || Me && f && O.zOrigin) && (Ce ? (p = !0, x = Ee, E = (E || $(e, x, r, !1, "50% 50%")) + "", o = new ve(T, x, 0, 0, o, -1, C), o.b = T[x], o.plugin = a, Me ? (h = O.zOrigin, E = E.split(" "), O.zOrigin = (E.length > 2 && (0 === h || "0px" !== E[2]) ? parseFloat(E[2]) : h) || 0, o.xs0 = o.e = E[0] + " " + (E[1] || "50%") + " 0px", o = new ve(O, "zOrigin", 0, 0, o, -1, o.n), o.b = h, o.xs0 = o.e = O.zOrigin) : o.xs0 = o.e = E) : se(E + "", O)), p && (i._transformType = O.svg && ke || !f && 3 !== this._transformType ? 2 : 3), u && (l[n] = u), o
                    },
                    prefix: !0
                }), be("boxShadow", {
                    defaultValue: "0px 0px 0px 0px #999",
                    prefix: !0,
                    color: !0,
                    multi: !0,
                    keyword: "inset"
                }), be("borderRadius", {
                    defaultValue: "0px",
                    parser: function(e, t, n, o, s, a) {
                        t = this.format(t);
                        var l, u, c, h, f, p, d, g, m, y, v, _, x, w, T, b, S = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                            k = e.style;
                        for (m = parseFloat(e.offsetWidth), y = parseFloat(e.offsetHeight), l = t.split(" "), u = 0; u < S.length; u++) this.p.indexOf("border") && (S[u] = Z(S[u])), f = h = $(e, S[u], r, !1, "0px"), -1 !== f.indexOf(" ") && (h = f.split(" "), f = h[0], h = h[1]), p = c = l[u], d = parseFloat(f), _ = f.substr((d + "").length), x = "=" === p.charAt(1), x ? (g = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), g *= parseFloat(p), v = p.substr((g + "").length - (0 > g ? 1 : 0)) || "") : (g = parseFloat(p), v = p.substr((g + "").length)), "" === v && (v = i[n] || _), v !== _ && (w = J(e, "borderLeft", d, _), T = J(e, "borderTop", d, _), "%" === v ? (f = w / m * 100 + "%", h = T / y * 100 + "%") : "em" === v ? (b = J(e, "borderLeft", 1, "em"), f = w / b + "em", h = T / b + "em") : (f = w + "px", h = T + "px"), x && (p = parseFloat(f) + g + v, c = parseFloat(h) + g + v)), s = xe(k, S[u], f + " " + h, p + " " + c, !1, "0px", s);
                        return s
                    },
                    prefix: !0,
                    formatter: ge("0px 0px 0px 0px", !1, !0)
                }), be("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                    defaultValue: "0px",
                    parser: function(e, t, n, i, o, s) {
                        return xe(e.style, n, this.format($(e, n, r, !1, "0px 0px")), this.format(t), !1, "0px", o)
                    },
                    prefix: !0,
                    formatter: ge("0px 0px", !1, !0)
                }), be("backgroundPosition", {
                    defaultValue: "0 0",
                    parser: function(e, t, n, i, o, s) {
                        var a, l, u, c, h, f, p = "background-position",
                            d = r || K(e, null),
                            m = this.format((d ? g ? d.getPropertyValue(p + "-x") + " " + d.getPropertyValue(p + "-y") : d.getPropertyValue(p) : e.currentStyle.backgroundPositionX + " " + e.currentStyle.backgroundPositionY) || "0 0"),
                            y = this.format(t);
                        if (-1 !== m.indexOf("%") != (-1 !== y.indexOf("%")) && y.split(",").length < 2 && (f = $(e, "backgroundImage").replace(E, ""), f && "none" !== f)) {
                            for (a = m.split(" "), l = y.split(" "), z.setAttribute("src", f), u = 2; --u > -1;) m = a[u], c = -1 !== m.indexOf("%"), c !== (-1 !== l[u].indexOf("%")) && (h = 0 === u ? e.offsetWidth - z.width : e.offsetHeight - z.height, a[u] = c ? parseFloat(m) / 100 * h + "px" : parseFloat(m) / h * 100 + "%");
                            m = a.join(" ")
                        }
                        return this.parseComplex(e.style, m, y, o, s)
                    },
                    formatter: se
                }), be("backgroundSize", {
                    defaultValue: "0 0",
                    formatter: function(e) {
                        return e += "", se(-1 === e.indexOf(" ") ? e + " " + e : e)
                    }
                }), be("perspective", {
                    defaultValue: "0px",
                    prefix: !0
                }), be("perspectiveOrigin", {
                    defaultValue: "50% 50%",
                    prefix: !0
                }), be("transformStyle", {
                    prefix: !0
                }), be("backfaceVisibility", {
                    prefix: !0
                }), be("userSelect", {
                    prefix: !0
                }), be("margin", {
                    parser: me("marginTop,marginRight,marginBottom,marginLeft")
                }), be("padding", {
                    parser: me("paddingTop,paddingRight,paddingBottom,paddingLeft")
                }), be("clip", {
                    defaultValue: "rect(0px,0px,0px,0px)",
                    parser: function(e, t, n, i, o, s) {
                        var a, l, u;
                        return 9 > g ? (l = e.currentStyle, u = 8 > g ? " " : ",", a = "rect(" + l.clipTop + u + l.clipRight + u + l.clipBottom + u + l.clipLeft + ")", t = this.format(t).split(",").join(u)) : (a = this.format($(e, this.p, r, !1, this.dflt)), t = this.format(t)), this.parseComplex(e.style, a, t, o, s)
                    }
                }), be("textShadow", {
                    defaultValue: "0px 0px 0px #999",
                    color: !0,
                    multi: !0
                }), be("autoRound,strictUnits", {
                    parser: function(e, t, n, i, r) {
                        return r
                    }
                }), be("border", {
                    defaultValue: "0px solid #000",
                    parser: function(e, t, n, i, o, s) {
                        var a = $(e, "borderTopWidth", r, !1, "0px"),
                            l = this.format(t).split(" "),
                            u = l[0].replace(T, "");
                        return "px" !== u && (a = parseFloat(a) / J(e, "borderTopWidth", 1, u) + u), this.parseComplex(e.style, this.format(a + " " + $(e, "borderTopStyle", r, !1, "solid") + " " + $(e, "borderTopColor", r, !1, "#000")), l.join(" "), o, s)
                    },
                    color: !0,
                    formatter: function(e) {
                        var t = e.split(" ");
                        return t[0] + " " + (t[1] || "solid") + " " + (e.match(de) || ["#000"])[0]
                    }
                }), be("borderWidth", {
                    parser: me("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                }), be("float,cssFloat,styleFloat", {
                    parser: function(e, t, n, i, r, o) {
                        var s = e.style,
                            a = "cssFloat" in s ? "cssFloat" : "styleFloat";
                        return new ve(s, a, 0, 0, r, -1, n, !1, 0, s[a], t)
                    }
                });
                var Ye = function(e) {
                    var t, n = this.t,
                        i = n.filter || $(this.data, "filter") || "",
                        r = this.s + this.c * e | 0;
                    100 === r && (-1 === i.indexOf("atrix(") && -1 === i.indexOf("radient(") && -1 === i.indexOf("oader(") ? (n.removeAttribute("filter"), t = !$(this.data, "filter")) : (n.filter = i.replace(k, ""), t = !0)), t || (this.xn1 && (n.filter = i = i || "alpha(opacity=" + r + ")"), -1 === i.indexOf("pacity") ? 0 === r && this.xn1 || (n.filter = i + " alpha(opacity=" + r + ")") : n.filter = i.replace(b, "opacity=" + r))
                };
                be("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function(e, t, n, i, o, s) {
                        var a = parseFloat($(e, "opacity", r, !1, "1")),
                            l = e.style,
                            u = "autoAlpha" === n;
                        return "string" == typeof t && "=" === t.charAt(1) && (t = ("-" === t.charAt(0) ? -1 : 1) * parseFloat(t.substr(2)) + a), u && 1 === a && "hidden" === $(e, "visibility", r) && 0 !== t && (a = 0), W ? o = new ve(l, "opacity", a, t - a, o) : (o = new ve(l, "opacity", 100 * a, 100 * (t - a), o), o.xn1 = u ? 1 : 0, l.zoom = 1, o.type = 2, o.b = "alpha(opacity=" + o.s + ")", o.e = "alpha(opacity=" + (o.s + o.c) + ")", o.data = e, o.plugin = s, o.setRatio = Ye), u && (o = new ve(l, "visibility", 0, 0, o, -1, null, !1, 0, 0 !== a ? "inherit" : "hidden", 0 === t ? "hidden" : "inherit"), o.xs0 = "inherit", i._overwriteProps.push(o.n), i._overwriteProps.push(n)), o
                    }
                });
                var He = function(e, t) {
                        t && (e.removeProperty ? (("ms" === t.substr(0, 2) || "webkit" === t.substr(0, 6)) && (t = "-" + t), e.removeProperty(t.replace(C, "-$1").toLowerCase())) : e.removeAttribute(t))
                    },
                    We = function(e) {
                        if (this.t._gsClassPT = this, 1 === e || 0 === e) {
                            this.t.setAttribute("class", 0 === e ? this.b : this.e);
                            for (var t = this.data, n = this.t.style; t;) t.v ? n[t.p] = t.v : He(n, t.p), t = t._next;
                            1 === e && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                        } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                    };
                be("className", {
                    parser: function(e, t, i, o, s, a, l) {
                        var u, c, h, f, p, d = e.getAttribute("class") || "",
                            g = e.style.cssText;
                        if (s = o._classNamePT = new ve(e, i, 0, 0, s, 2), s.setRatio = We, s.pr = -11, n = !0, s.b = d, c = te(e, r), h = e._gsClassPT) {
                            for (f = {}, p = h.data; p;) f[p.p] = 1, p = p._next;
                            h.setRatio(1)
                        }
                        return e._gsClassPT = s, s.e = "=" !== t.charAt(1) ? t : d.replace(new RegExp("(?:\\s|^)" + t.substr(2) + "(?![\\w-])"), "") + ("+" === t.charAt(0) ? " " + t.substr(2) : ""), e.setAttribute("class", s.e), u = ne(e, c, te(e), l, f), e.setAttribute("class", d), s.data = u.firstMPT, e.style.cssText = g, s = s.xfirst = o.parse(e, u.difs, s, a)
                    }
                });
                var Ve = function(e) {
                    if ((1 === e || 0 === e) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                        var t, n, i, r, o, s = this.t.style,
                            a = l.transform.parse;
                        if ("all" === this.e) s.cssText = "", r = !0;
                        else
                            for (t = this.e.split(" ").join("").split(","), i = t.length; --i > -1;) n = t[i], l[n] && (l[n].parse === a ? r = !0 : n = "transformOrigin" === n ? Ee : l[n].p), He(s, n);
                        r && (He(s, Ce), o = this.t._gsTransform, o && (o.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
                    }
                };
                for (be("clearProps", {
                        parser: function(e, t, i, r, o) {
                            return o = new ve(e, i, 0, 0, o, 2), o.setRatio = Ve, o.e = t, o.pr = -10, o.data = r._tween, n = !0, o
                        }
                    }), u = "bezier,throwProps,physicsProps,physics2D".split(","), we = u.length; we--;) Se(u[we]);
                u = s.prototype, u._firstPT = u._lastParsedTransform = u._transform = null, u._onInitTween = function(e, t, a, u) {
                    if (!e.nodeType) return !1;
                    this._target = m = e, this._tween = a, this._vars = t, y = u, c = t.autoRound, n = !1, i = t.suffixMap || s.suffixMap, r = K(e, ""), o = this._overwriteProps;
                    var p, g, v, _, x, w, T, b, k, P = e.style;
                    if (h && "" === P.zIndex && (p = $(e, "zIndex", r), ("auto" === p || "" === p) && this._addLazySet(P, "zIndex", 0)), "string" == typeof t && (_ = P.cssText, p = te(e, r), P.cssText = _ + ";" + t, p = ne(e, p, te(e)).difs, !W && S.test(t) && (p.opacity = parseFloat(RegExp.$1)), t = p, P.cssText = _), t.className ? this._firstPT = g = l.className.parse(e, t.className, "className", this, null, null, t) : this._firstPT = g = this.parse(e, t, null), this._transformType) {
                        for (k = 3 === this._transformType, Ce ? f && (h = !0, "" === P.zIndex && (T = $(e, "zIndex", r), ("auto" === T || "" === T) && this._addLazySet(P, "zIndex", 0)), d && this._addLazySet(P, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (k ? "visible" : "hidden"))) : P.zoom = 1, v = g; v && v._next;) v = v._next;
                        b = new ve(e, "transform", 0, 0, null, 2), this._linkCSSP(b, null, v), b.setRatio = Ce ? $e : ze, b.data = this._transform || qe(e, r, !0), b.tween = a, b.pr = -1, o.pop()
                    }
                    if (n) {
                        for (; g;) {
                            for (w = g._next, v = _; v && v.pr > g.pr;) v = v._next;
                            (g._prev = v ? v._prev : x) ? g._prev._next = g: _ = g, (g._next = v) ? v._prev = g : x = g, g = w
                        }
                        this._firstPT = _
                    }
                    return !0
                }, u.parse = function(e, t, n, o) {
                    var s, a, u, h, f, p, d, g, v, _, x = e.style;
                    for (s in t) p = t[s], "function" == typeof p && (p = p(y, m)), a = l[s], a ? n = a.parse(e, p, s, this, n, o, t) : (f = $(e, s, r) + "", v = "string" == typeof p, "color" === s || "fill" === s || "stroke" === s || -1 !== s.indexOf("Color") || v && P.test(p) ? (v || (p = fe(p), p = (p.length > 3 ? "rgba(" : "rgb(") + p.join(",") + ")"), n = xe(x, s, f, p, !0, "transparent", n, 0, o)) : v && L.test(p) ? n = xe(x, s, f, p, !0, null, n, 0, o) : (u = parseFloat(f), d = u || 0 === u ? f.substr((u + "").length) : "", ("" === f || "auto" === f) && ("width" === s || "height" === s ? (u = oe(e, s, r), d = "px") : "left" === s || "top" === s ? (u = ee(e, s, r), d = "px") : (u = "opacity" !== s ? 0 : 1, d = "")), _ = v && "=" === p.charAt(1), _ ? (h = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), h *= parseFloat(p), g = p.replace(T, "")) : (h = parseFloat(p), g = v ? p.replace(T, "") : ""), "" === g && (g = s in i ? i[s] : d), p = h || 0 === h ? (_ ? h + u : h) + g : t[s], d !== g && "" !== g && (h || 0 === h) && u && (u = J(e, s, u, d), "%" === g ? (u /= J(e, s, 100, "%") / 100, t.strictUnits !== !0 && (f = u + "%")) : "em" === g || "rem" === g || "vw" === g || "vh" === g ? u /= J(e, s, 1, g) : "px" !== g && (h = J(e, s, h, g), g = "px"), _ && (h || 0 === h) && (p = h + u + g)), _ && (h += u), !u && 0 !== u || !h && 0 !== h ? void 0 !== x[s] && (p || p + "" != "NaN" && null != p) ? (n = new ve(x, s, h || u || 0, 0, n, -1, s, !1, 0, f, p), n.xs0 = "none" !== p || "display" !== s && -1 === s.indexOf("Style") ? p : f) : G("invalid " + s + " tween value: " + t[s]) : (n = new ve(x, s, u, h - u, n, 0, s, c !== !1 && ("px" === g || "zIndex" === s), 0, f, p), n.xs0 = g))), o && n && !n.plugin && (n.plugin = o);
                    return n
                }, u.setRatio = function(e) {
                    var t, n, i, r = this._firstPT,
                        o = 1e-6;
                    if (1 !== e || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (e || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                            for (; r;) {
                                if (t = r.c * e + r.s, r.r ? t = Math.round(t) : o > t && t > -o && (t = 0), r.type)
                                    if (1 === r.type)
                                        if (i = r.l, 2 === i) r.t[r.p] = r.xs0 + t + r.xs1 + r.xn1 + r.xs2;
                                        else if (3 === i) r.t[r.p] = r.xs0 + t + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                                else if (4 === i) r.t[r.p] = r.xs0 + t + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                                else if (5 === i) r.t[r.p] = r.xs0 + t + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                                else {
                                    for (n = r.xs0 + t + r.xs1, i = 1; i < r.l; i++) n += r["xn" + i] + r["xs" + (i + 1)];
                                    r.t[r.p] = n
                                } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(e);
                                else r.t[r.p] = t + r.xs0;
                                r = r._next
                            } else
                                for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(e), r = r._next;
                        else
                            for (; r;) {
                                if (2 !== r.type)
                                    if (r.r && -1 !== r.type)
                                        if (t = Math.round(r.s + r.c), r.type) {
                                            if (1 === r.type) {
                                                for (i = r.l, n = r.xs0 + t + r.xs1, i = 1; i < r.l; i++) n += r["xn" + i] + r["xs" + (i + 1)];
                                                r.t[r.p] = n
                                            }
                                        } else r.t[r.p] = t + r.xs0;
                                else r.t[r.p] = r.e;
                                else r.setRatio(e);
                                r = r._next
                            }
                }, u._enableTransforms = function(e) {
                    this._transform = this._transform || qe(this._target, r, !0), this._transformType = this._transform.svg && ke || !e && 3 !== this._transformType ? 2 : 3
                };
                var Ge = function(e) {
                    this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
                };
                u._addLazySet = function(e, t, n) {
                    var i = this._firstPT = new ve(e, t, 0, 0, this._firstPT, 2);
                    i.e = n, i.setRatio = Ge, i.data = this
                }, u._linkCSSP = function(e, t, n, i) {
                    return e && (t && (t._prev = e), e._next && (e._next._prev = e._prev), e._prev ? e._prev._next = e._next : this._firstPT === e && (this._firstPT = e._next, i = !0), n ? n._next = e : i || null !== this._firstPT || (this._firstPT = e), e._next = t, e._prev = n), e
                }, u._mod = function(e) {
                    for (var t = this._firstPT; t;) "function" == typeof e[t.p] && e[t.p] === Math.round && (t.r = 1), t = t._next
                }, u._kill = function(t) {
                    var n, i, r, o = t;
                    if (t.autoAlpha || t.alpha) {
                        o = {};
                        for (i in t) o[i] = t[i];
                        o.opacity = 1, o.autoAlpha && (o.visibility = 1)
                    }
                    for (t.className && (n = this._classNamePT) && (r = n.xfirst, r && r._prev ? this._linkCSSP(r._prev, n._next, r._prev._prev) : r === this._firstPT && (this._firstPT = n._next), n._next && this._linkCSSP(n._next, n._next._next, r._prev), this._classNamePT = null), n = this._firstPT; n;) n.plugin && n.plugin !== i && n.plugin._kill && (n.plugin._kill(t), i = n.plugin), n = n._next;
                    return e.prototype._kill.call(this, o)
                };
                var Ue = function(e, t, n) {
                    var i, r, o, s;
                    if (e.slice)
                        for (r = e.length; --r > -1;) Ue(e[r], t, n);
                    else
                        for (i = e.childNodes, r = i.length; --r > -1;) o = i[r], s = o.type, o.style && (t.push(te(o)), n && n.push(o)), 1 !== s && 9 !== s && 11 !== s || !o.childNodes.length || Ue(o, t, n)
                };
                return s.cascadeTo = function(e, n, i) {
                    var r, o, s, a, l = t.to(e, n, i),
                        u = [l],
                        c = [],
                        h = [],
                        f = [],
                        p = t._internals.reservedProps;
                    for (e = l._targets || l.target, Ue(e, c, f), l.render(n, !0, !0), Ue(e, h), l.render(0, !0, !0), l._enabled(!0), r = f.length; --r > -1;)
                        if (o = ne(f[r], c[r], h[r]), o.firstMPT) {
                            o = o.difs;
                            for (s in i) p[s] && (o[s] = i[s]);
                            a = {};
                            for (s in o) a[s] = c[r][s];
                            u.push(t.fromTo(f[r], n, a, o))
                        }
                    return u
                }, e.activate([s]), s
            }, !0),
            function() {
                var e = _gsScope._gsDefine.plugin({
                        propName: "roundProps",
                        version: "1.6.0",
                        priority: -1,
                        API: 2,
                        init: function(e, t, n) {
                            return this._tween = n, !0
                        }
                    }),
                    t = function(e) {
                        for (; e;) e.f || e.blob || (e.m = Math.round), e = e._next
                    },
                    n = e.prototype;
                n._onInitAllProps = function() {
                    for (var e, n, i, r = this._tween, o = r.vars.roundProps.join ? r.vars.roundProps : r.vars.roundProps.split(","), s = o.length, a = {}, l = r._propLookup.roundProps; --s > -1;) a[o[s]] = Math.round;
                    for (s = o.length; --s > -1;)
                        for (e = o[s], n = r._firstPT; n;) i = n._next, n.pg ? n.t._mod(a) : n.n === e && (2 === n.f && n.t ? t(n.t._firstPT) : (this._add(n.t, e, n.s, n.c), i && (i._prev = n._prev), n._prev ? n._prev._next = i : r._firstPT === n && (r._firstPT = i), n._next = n._prev = null, r._propLookup[e] = l)), n = i;
                    return !1
                }, n._add = function(e, t, n, i) {
                    this._addTween(e, t, n, n + i, t, Math.round), this._overwriteProps.push(t)
                }
            }(),
            function() {
                _gsScope._gsDefine.plugin({
                    propName: "attr",
                    API: 2,
                    version: "0.6.0",
                    init: function(e, t, n, i) {
                        var r, o;
                        if ("function" != typeof e.setAttribute) return !1;
                        for (r in t) o = t[r], "function" == typeof o && (o = o(i, e)), this._addTween(e, "setAttribute", e.getAttribute(r) + "", o + "", r, !1, r), this._overwriteProps.push(r);
                        return !0
                    }
                })
            }(), _gsScope._gsDefine.plugin({
                propName: "directionalRotation",
                version: "0.3.0",
                API: 2,
                init: function(e, t, n, i) {
                    "object" != typeof t && (t = {
                        rotation: t
                    }), this.finals = {};
                    var r, o, s, a, l, u, c = t.useRadians === !0 ? 2 * Math.PI : 360,
                        h = 1e-6;
                    for (r in t) "useRadians" !== r && (a = t[r], "function" == typeof a && (a = a(i, e)), u = (a + "").split("_"), o = u[0], s = parseFloat("function" != typeof e[r] ? e[r] : e[r.indexOf("set") || "function" != typeof e["get" + r.substr(3)] ? r : "get" + r.substr(3)]()), a = this.finals[r] = "string" == typeof o && "=" === o.charAt(1) ? s + parseInt(o.charAt(0) + "1", 10) * Number(o.substr(2)) : Number(o) || 0, l = a - s, u.length && (o = u.join("_"), -1 !== o.indexOf("short") && (l %= c, l !== l % (c / 2) && (l = 0 > l ? l + c : l - c)), -1 !== o.indexOf("_cw") && 0 > l ? l = (l + 9999999999 * c) % c - (l / c | 0) * c : -1 !== o.indexOf("ccw") && l > 0 && (l = (l - 9999999999 * c) % c - (l / c | 0) * c)), (l > h || -h > l) && (this._addTween(e, r, s, s + l, r), this._overwriteProps.push(r)));
                    return !0
                },
                set: function(e) {
                    var t;
                    if (1 !== e) this._super.setRatio.call(this, e);
                    else
                        for (t = this._firstPT; t;) t.f ? t.t[t.p](this.finals[t.p]) : t.t[t.p] = this.finals[t.p], t = t._next
                }
            })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(e) {
                var t, n, i, r = _gsScope.GreenSockGlobals || _gsScope,
                    o = r.com.greensock,
                    s = 2 * Math.PI,
                    a = Math.PI / 2,
                    l = o._class,
                    u = function(t, n) {
                        var i = l("easing." + t, function() {}, !0),
                            r = i.prototype = new e;
                        return r.constructor = i, r.getRatio = n, i
                    },
                    c = e.register || function() {},
                    h = function(e, t, n, i, r) {
                        var o = l("easing." + e, {
                            easeOut: new t,
                            easeIn: new n,
                            easeInOut: new i
                        }, !0);
                        return c(o, e), o
                    },
                    f = function(e, t, n) {
                        this.t = e, this.v = t, n && (this.next = n, n.prev = this, this.c = n.v - t, this.gap = n.t - e)
                    },
                    p = function(t, n) {
                        var i = l("easing." + t, function(e) {
                                this._p1 = e || 0 === e ? e : 1.70158, this._p2 = 1.525 * this._p1
                            }, !0),
                            r = i.prototype = new e;
                        return r.constructor = i, r.getRatio = n, r.config = function(e) {
                            return new i(e)
                        }, i
                    },
                    d = h("Back", p("BackOut", function(e) {
                        return (e -= 1) * e * ((this._p1 + 1) * e + this._p1) + 1
                    }), p("BackIn", function(e) {
                        return e * e * ((this._p1 + 1) * e - this._p1)
                    }), p("BackInOut", function(e) {
                        return (e *= 2) < 1 ? .5 * e * e * ((this._p2 + 1) * e - this._p2) : .5 * ((e -= 2) * e * ((this._p2 + 1) * e + this._p2) + 2)
                    })),
                    g = l("easing.SlowMo", function(e, t, n) {
                        t = t || 0 === t ? t : .7, null == e ? e = .7 : e > 1 && (e = 1), this._p = 1 !== e ? t : 0, this._p1 = (1 - e) / 2, this._p2 = e, this._p3 = this._p1 + this._p2, this._calcEnd = n === !0
                    }, !0),
                    m = g.prototype = new e;
                return m.constructor = g, m.getRatio = function(e) {
                    var t = e + (.5 - e) * this._p;
                    return e < this._p1 ? this._calcEnd ? 1 - (e = 1 - e / this._p1) * e : t - (e = 1 - e / this._p1) * e * e * e * t : e > this._p3 ? this._calcEnd ? 1 - (e = (e - this._p3) / this._p1) * e : t + (e - t) * (e = (e - this._p3) / this._p1) * e * e * e : this._calcEnd ? 1 : t
                }, g.ease = new g(.7, .7), m.config = g.config = function(e, t, n) {
                    return new g(e, t, n)
                }, t = l("easing.SteppedEase", function(e) {
                    e = e || 1, this._p1 = 1 / e, this._p2 = e + 1
                }, !0), m = t.prototype = new e, m.constructor = t, m.getRatio = function(e) {
                    return 0 > e ? e = 0 : e >= 1 && (e = .999999999), (this._p2 * e >> 0) * this._p1
                }, m.config = t.config = function(e) {
                    return new t(e)
                }, n = l("easing.RoughEase", function(t) {
                    t = t || {};
                    for (var n, i, r, o, s, a, l = t.taper || "none", u = [], c = 0, h = 0 | (t.points || 20), p = h, d = t.randomize !== !1, g = t.clamp === !0, m = t.template instanceof e ? t.template : null, y = "number" == typeof t.strength ? .4 * t.strength : .4; --p > -1;) n = d ? Math.random() : 1 / h * p, i = m ? m.getRatio(n) : n, "none" === l ? r = y : "out" === l ? (o = 1 - n, r = o * o * y) : "in" === l ? r = n * n * y : .5 > n ? (o = 2 * n, r = o * o * .5 * y) : (o = 2 * (1 - n), r = o * o * .5 * y), d ? i += Math.random() * r - .5 * r : p % 2 ? i += .5 * r : i -= .5 * r, g && (i > 1 ? i = 1 : 0 > i && (i = 0)), u[c++] = {
                        x: n,
                        y: i
                    };
                    for (u.sort(function(e, t) {
                            return e.x - t.x
                        }), a = new f(1, 1, null), p = h; --p > -1;) s = u[p], a = new f(s.x, s.y, a);
                    this._prev = new f(0, 0, 0 !== a.t ? a : a.next)
                }, !0), m = n.prototype = new e, m.constructor = n, m.getRatio = function(e) {
                    var t = this._prev;
                    if (e > t.t) {
                        for (; t.next && e >= t.t;) t = t.next;
                        t = t.prev
                    } else
                        for (; t.prev && e <= t.t;) t = t.prev;
                    return this._prev = t, t.v + (e - t.t) / t.gap * t.c
                }, m.config = function(e) {
                    return new n(e)
                }, n.ease = new n, h("Bounce", u("BounceOut", function(e) {
                    return 1 / 2.75 > e ? 7.5625 * e * e : 2 / 2.75 > e ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : 2.5 / 2.75 > e ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
                }), u("BounceIn", function(e) {
                    return (e = 1 - e) < 1 / 2.75 ? 1 - 7.5625 * e * e : 2 / 2.75 > e ? 1 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : 2.5 / 2.75 > e ? 1 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 1 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
                }), u("BounceInOut", function(e) {
                    var t = .5 > e;
                    return e = t ? 1 - 2 * e : 2 * e - 1, e = 1 / 2.75 > e ? 7.5625 * e * e : 2 / 2.75 > e ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : 2.5 / 2.75 > e ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375, t ? .5 * (1 - e) : .5 * e + .5
                })), h("Circ", u("CircOut", function(e) {
                    return Math.sqrt(1 - (e -= 1) * e)
                }), u("CircIn", function(e) {
                    return -(Math.sqrt(1 - e * e) - 1)
                }), u("CircInOut", function(e) {
                    return (e *= 2) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
                })), i = function(t, n, i) {
                    var r = l("easing." + t, function(e, t) {
                            this._p1 = e >= 1 ? e : 1, this._p2 = (t || i) / (1 > e ? e : 1), this._p3 = this._p2 / s * (Math.asin(1 / this._p1) || 0), this._p2 = s / this._p2
                        }, !0),
                        o = r.prototype = new e;
                    return o.constructor = r, o.getRatio = n, o.config = function(e, t) {
                        return new r(e, t)
                    }, r
                }, h("Elastic", i("ElasticOut", function(e) {
                    return this._p1 * Math.pow(2, -10 * e) * Math.sin((e - this._p3) * this._p2) + 1
                }, .3), i("ElasticIn", function(e) {
                    return -(this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2))
                }, .3), i("ElasticInOut", function(e) {
                    return (e *= 2) < 1 ? -.5 * (this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2) * .5 + 1
                }, .45)), h("Expo", u("ExpoOut", function(e) {
                    return 1 - Math.pow(2, -10 * e)
                }), u("ExpoIn", function(e) {
                    return Math.pow(2, 10 * (e - 1)) - .001
                }), u("ExpoInOut", function(e) {
                    return (e *= 2) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
                })), h("Sine", u("SineOut", function(e) {
                    return Math.sin(e * a)
                }), u("SineIn", function(e) {
                    return -Math.cos(e * a) + 1
                }), u("SineInOut", function(e) {
                    return -.5 * (Math.cos(Math.PI * e) - 1)
                })), l("easing.EaseLookup", {
                    find: function(t) {
                        return e.map[t]
                    }
                }, !0), c(r.SlowMo, "SlowMo", "ease,"), c(n, "RoughEase", "ease,"), c(t, "SteppedEase", "ease,"), d
            }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(e, t) {
        "use strict";
        var n = {},
            i = e.GreenSockGlobals = e.GreenSockGlobals || e;
        if (!i.TweenLite) {
            var r, o, s, a, l, u = function(e) {
                    var t, n = e.split("."),
                        r = i;
                    for (t = 0; t < n.length; t++) r[n[t]] = r = r[n[t]] || {};
                    return r
                },
                c = u("com.greensock"),
                h = 1e-10,
                f = function(e) {
                    var t, n = [],
                        i = e.length;
                    for (t = 0; t !== i; n.push(e[t++]));
                    return n
                },
                p = function() {},
                d = function() {
                    var e = Object.prototype.toString,
                        t = e.call([]);
                    return function(n) {
                        return null != n && (n instanceof Array || "object" == typeof n && !!n.push && e.call(n) === t)
                    }
                }(),
                g = {},
                m = function(r, o, s, a) {
                    this.sc = g[r] ? g[r].sc : [], g[r] = this, this.gsClass = null, this.func = s;
                    var l = [];
                    this.check = function(c) {
                        for (var h, f, p, d, y, v = o.length, _ = v; --v > -1;)(h = g[o[v]] || new m(o[v], [])).gsClass ? (l[v] = h.gsClass, _--) : c && h.sc.push(this);
                        if (0 === _ && s) {
                            if (f = ("com.greensock." + r).split("."), p = f.pop(), d = u(f.join("."))[p] = this.gsClass = s.apply(s, l), a)
                                if (i[p] = n[p] = d, y = "undefined" != typeof module && module.exports, !y && "function" == typeof define && define.amd) define((e.GreenSockAMDPath ? e.GreenSockAMDPath + "/" : "") + r.split(".").pop(), [], function() {
                                    return d
                                });
                                else if (y)
                                if (r === t) {
                                    module.exports = n[t] = d;
                                    for (v in n) d[v] = n[v]
                                } else n[t] && (n[t][p] = d);
                            for (v = 0; v < this.sc.length; v++) this.sc[v].check()
                        }
                    }, this.check(!0)
                },
                y = e._gsDefine = function(e, t, n, i) {
                    return new m(e, t, n, i)
                },
                v = c._class = function(e, t, n) {
                    return t = t || function() {}, y(e, [], function() {
                        return t
                    }, n), t
                };
            y.globals = i;
            var _ = [0, 0, 1, 1],
                x = v("easing.Ease", function(e, t, n, i) {
                    this._func = e, this._type = n || 0, this._power = i || 0, this._params = t ? _.concat(t) : _
                }, !0),
                w = x.map = {},
                T = x.register = function(e, t, n, i) {
                    for (var r, o, s, a, l = t.split(","), u = l.length, h = (n || "easeIn,easeOut,easeInOut").split(","); --u > -1;)
                        for (o = l[u], r = i ? v("easing." + o, null, !0) : c.easing[o] || {}, s = h.length; --s > -1;) a = h[s], w[o + "." + a] = w[a + o] = r[a] = e.getRatio ? e : e[a] || new e
                };
            for (s = x.prototype, s._calcEnd = !1, s.getRatio = function(e) {
                    if (this._func) return this._params[0] = e, this._func.apply(null, this._params);
                    var t = this._type,
                        n = this._power,
                        i = 1 === t ? 1 - e : 2 === t ? e : .5 > e ? 2 * e : 2 * (1 - e);
                    return 1 === n ? i *= i : 2 === n ? i *= i * i : 3 === n ? i *= i * i * i : 4 === n && (i *= i * i * i * i), 1 === t ? 1 - i : 2 === t ? i : .5 > e ? i / 2 : 1 - i / 2
                }, r = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], o = r.length; --o > -1;) s = r[o] + ",Power" + o, T(new x(null, null, 1, o), s, "easeOut", !0), T(new x(null, null, 2, o), s, "easeIn" + (0 === o ? ",easeNone" : "")), T(new x(null, null, 3, o), s, "easeInOut");
            w.linear = c.easing.Linear.easeIn, w.swing = c.easing.Quad.easeInOut;
            var b = v("events.EventDispatcher", function(e) {
                this._listeners = {}, this._eventTarget = e || this
            });
            s = b.prototype, s.addEventListener = function(e, t, n, i, r) {
                r = r || 0;
                var o, s, u = this._listeners[e],
                    c = 0;
                for (this !== a || l || a.wake(), null == u && (this._listeners[e] = u = []), s = u.length; --s > -1;) o = u[s], o.c === t && o.s === n ? u.splice(s, 1) : 0 === c && o.pr < r && (c = s + 1);
                u.splice(c, 0, {
                    c: t,
                    s: n,
                    up: i,
                    pr: r
                })
            }, s.removeEventListener = function(e, t) {
                var n, i = this._listeners[e];
                if (i)
                    for (n = i.length; --n > -1;)
                        if (i[n].c === t) return void i.splice(n, 1)
            }, s.dispatchEvent = function(e) {
                var t, n, i, r = this._listeners[e];
                if (r)
                    for (t = r.length, t > 1 && (r = r.slice(0)), n = this._eventTarget; --t > -1;) i = r[t], i && (i.up ? i.c.call(i.s || n, {
                        type: e,
                        target: n
                    }) : i.c.call(i.s || n))
            };
            var S = e.requestAnimationFrame,
                k = e.cancelAnimationFrame,
                P = Date.now || function() {
                    return (new Date).getTime()
                },
                C = P();
            for (r = ["ms", "moz", "webkit", "o"], o = r.length; --o > -1 && !S;) S = e[r[o] + "RequestAnimationFrame"], k = e[r[o] + "CancelAnimationFrame"] || e[r[o] + "CancelRequestAnimationFrame"];
            v("Ticker", function(e, t) {
                var n, i, r, o, s, u = this,
                    c = P(),
                    f = !(t === !1 || !S) && "auto",
                    d = 500,
                    g = 33,
                    m = "tick",
                    y = function(e) {
                        var t, a, l = P() - C;
                        l > d && (c += l - g), C += l, u.time = (C - c) / 1e3, t = u.time - s, (!n || t > 0 || e === !0) && (u.frame++, s += t + (t >= o ? .004 : o - t), a = !0), e !== !0 && (r = i(y)), a && u.dispatchEvent(m)
                    };
                b.call(u), u.time = u.frame = 0, u.tick = function() {
                    y(!0)
                }, u.lagSmoothing = function(e, t) {
                    d = e || 1 / h, g = Math.min(t, d, 0)
                }, u.sleep = function() {
                    null != r && (f && k ? k(r) : clearTimeout(r), i = p, r = null, u === a && (l = !1))
                }, u.wake = function(e) {
                    null !== r ? u.sleep() : e ? c += -C + (C = P()) : u.frame > 10 && (C = P() - d + 5), i = 0 === n ? p : f && S ? S : function(e) {
                        return setTimeout(e, 1e3 * (s - u.time) + 1 | 0)
                    }, u === a && (l = !0), y(2)
                }, u.fps = function(e) {
                    return arguments.length ? (n = e, o = 1 / (n || 60), s = this.time + o, void u.wake()) : n
                }, u.useRAF = function(e) {
                    return arguments.length ? (u.sleep(), f = e, void u.fps(n)) : f
                }, u.fps(e), setTimeout(function() {
                    "auto" === f && u.frame < 5 && "hidden" !== document.visibilityState && u.useRAF(!1)
                }, 1500)
            }), s = c.Ticker.prototype = new c.events.EventDispatcher, s.constructor = c.Ticker;
            var O = v("core.Animation", function(e, t) {
                if (this.vars = t = t || {}, this._duration = this._totalDuration = e || 0, this._delay = Number(t.delay) || 0, this._timeScale = 1, this._active = t.immediateRender === !0, this.data = t.data, this._reversed = t.reversed === !0, G) {
                    l || a.wake();
                    var n = this.vars.useFrames ? V : G;
                    n.add(this, n._time), this.vars.paused && this.paused(!0)
                }
            });
            a = O.ticker = new c.Ticker, s = O.prototype, s._dirty = s._gc = s._initted = s._paused = !1, s._totalTime = s._time = 0, s._rawPrevTime = -1, s._next = s._last = s._onUpdate = s._timeline = s.timeline = null, s._paused = !1;
            var E = function() {
                l && P() - C > 2e3 && a.wake(), setTimeout(E, 2e3)
            };
            E(), s.play = function(e, t) {
                return null != e && this.seek(e, t), this.reversed(!1).paused(!1)
            }, s.pause = function(e, t) {
                return null != e && this.seek(e, t), this.paused(!0)
            }, s.resume = function(e, t) {
                return null != e && this.seek(e, t), this.paused(!1)
            }, s.seek = function(e, t) {
                return this.totalTime(Number(e), t !== !1)
            }, s.restart = function(e, t) {
                return this.reversed(!1).paused(!1).totalTime(e ? -this._delay : 0, t !== !1, !0)
            }, s.reverse = function(e, t) {
                return null != e && this.seek(e || this.totalDuration(), t), this.reversed(!0).paused(!1)
            }, s.render = function(e, t, n) {}, s.invalidate = function() {
                return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
            }, s.isActive = function() {
                var e, t = this._timeline,
                    n = this._startTime;
                return !t || !this._gc && !this._paused && t.isActive() && (e = t.rawTime()) >= n && e < n + this.totalDuration() / this._timeScale
            }, s._enabled = function(e, t) {
                return l || a.wake(), this._gc = !e, this._active = this.isActive(), t !== !0 && (e && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !e && this.timeline && this._timeline._remove(this, !0)), !1
            }, s._kill = function(e, t) {
                return this._enabled(!1, !1)
            }, s.kill = function(e, t) {
                return this._kill(e, t), this
            }, s._uncache = function(e) {
                for (var t = e ? this : this.timeline; t;) t._dirty = !0, t = t.timeline;
                return this
            }, s._swapSelfInParams = function(e) {
                for (var t = e.length, n = e.concat(); --t > -1;) "{self}" === e[t] && (n[t] = this);
                return n
            }, s._callback = function(e) {
                var t = this.vars,
                    n = t[e],
                    i = t[e + "Params"],
                    r = t[e + "Scope"] || t.callbackScope || this,
                    o = i ? i.length : 0;
                switch (o) {
                    case 0:
                        n.call(r);
                        break;
                    case 1:
                        n.call(r, i[0]);
                        break;
                    case 2:
                        n.call(r, i[0], i[1]);
                        break;
                    default:
                        n.apply(r, i)
                }
            }, s.eventCallback = function(e, t, n, i) {
                if ("on" === (e || "").substr(0, 2)) {
                    var r = this.vars;
                    if (1 === arguments.length) return r[e];
                    null == t ? delete r[e] : (r[e] = t, r[e + "Params"] = d(n) && -1 !== n.join("").indexOf("{self}") ? this._swapSelfInParams(n) : n, r[e + "Scope"] = i), "onUpdate" === e && (this._onUpdate = t)
                }
                return this
            }, s.delay = function(e) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + e - this._delay), this._delay = e, this) : this._delay
            }, s.duration = function(e) {
                return arguments.length ? (this._duration = this._totalDuration = e, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== e && this.totalTime(this._totalTime * (e / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, s.totalDuration = function(e) {
                return this._dirty = !1, arguments.length ? this.duration(e) : this._totalDuration
            }, s.time = function(e, t) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(e > this._duration ? this._duration : e, t)) : this._time
            }, s.totalTime = function(e, t, n) {
                if (l || a.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (0 > e && !n && (e += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var i = this._totalDuration,
                            r = this._timeline;
                        if (e > i && !n && (e = i), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? i - e : e) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
                            for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== e || 0 === this._duration) && (R.length && Q(), this.render(e, t, !1), R.length && Q())
                }
                return this
            }, s.progress = s.totalProgress = function(e, t) {
                var n = this.duration();
                return arguments.length ? this.totalTime(n * e, t) : n ? this._time / n : this.ratio
            }, s.startTime = function(e) {
                return arguments.length ? (e !== this._startTime && (this._startTime = e, this.timeline && this.timeline._sortChildren && this.timeline.add(this, e - this._delay)), this) : this._startTime
            }, s.endTime = function(e) {
                return this._startTime + (0 != e ? this.totalDuration() : this.duration()) / this._timeScale
            }, s.timeScale = function(e) {
                if (!arguments.length) return this._timeScale;
                if (e = e || h, this._timeline && this._timeline.smoothChildTiming) {
                    var t = this._pauseTime,
                        n = t || 0 === t ? t : this._timeline.totalTime();
                    this._startTime = n - (n - this._startTime) * this._timeScale / e
                }
                return this._timeScale = e, this._uncache(!1)
            }, s.reversed = function(e) {
                return arguments.length ? (e != this._reversed && (this._reversed = e, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
            }, s.paused = function(e) {
                if (!arguments.length) return this._paused;
                var t, n, i = this._timeline;
                return e != this._paused && i && (l || e || a.wake(), t = i.rawTime(), n = t - this._pauseTime, !e && i.smoothChildTiming && (this._startTime += n, this._uncache(!1)), this._pauseTime = e ? t : null, this._paused = e, this._active = this.isActive(), !e && 0 !== n && this._initted && this.duration() && (t = i.smoothChildTiming ? this._totalTime : (t - this._startTime) / this._timeScale, this.render(t, t === this._totalTime, !0))), this._gc && !e && this._enabled(!0, !1), this
            };
            var M = v("core.SimpleTimeline", function(e) {
                O.call(this, 0, e), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            s = M.prototype = new O, s.constructor = M, s.kill()._gc = !1, s._first = s._last = s._recent = null, s._sortChildren = !1, s.add = s.insert = function(e, t, n, i) {
                var r, o;
                if (e._startTime = Number(t || 0) + e._delay, e._paused && this !== e._timeline && (e._pauseTime = e._startTime + (this.rawTime() - e._startTime) / e._timeScale), e.timeline && e.timeline._remove(e, !0), e.timeline = e._timeline = this, e._gc && e._enabled(!0, !0), r = this._last, this._sortChildren)
                    for (o = e._startTime; r && r._startTime > o;) r = r._prev;
                return r ? (e._next = r._next, r._next = e) : (e._next = this._first, this._first = e), e._next ? e._next._prev = e : this._last = e, e._prev = r, this._recent = e, this._timeline && this._uncache(!0), this
            }, s._remove = function(e, t) {
                return e.timeline === this && (t || e._enabled(!1, !0), e._prev ? e._prev._next = e._next : this._first === e && (this._first = e._next), e._next ? e._next._prev = e._prev : this._last === e && (this._last = e._prev), e._next = e._prev = e.timeline = null, e === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
            }, s.render = function(e, t, n) {
                var i, r = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = e; r;) i = r._next, (r._active || e >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) * r._timeScale, t, n) : r.render((e - r._startTime) * r._timeScale, t, n)), r = i
            }, s.rawTime = function() {
                return l || a.wake(), this._totalTime
            };
            var A = v("TweenLite", function(t, n, i) {
                    if (O.call(this, n, i), this.render = A.prototype.render, null == t) throw "Cannot tween a null target.";
                    this.target = t = "string" != typeof t ? t : A.selector(t) || t;
                    var r, o, s, a = t.jquery || t.length && t !== e && t[0] && (t[0] === e || t[0].nodeType && t[0].style && !t.nodeType),
                        l = this.vars.overwrite;
                    if (this._overwrite = l = null == l ? W[A.defaultOverwrite] : "number" == typeof l ? l >> 0 : W[l], (a || t instanceof Array || t.push && d(t)) && "number" != typeof t[0])
                        for (this._targets = s = f(t), this._propLookup = [], this._siblings = [], r = 0; r < s.length; r++) o = s[r], o ? "string" != typeof o ? o.length && o !== e && o[0] && (o[0] === e || o[0].nodeType && o[0].style && !o.nodeType) ? (s.splice(r--, 1), this._targets = s = s.concat(f(o))) : (this._siblings[r] = Z(o, this, !1), 1 === l && this._siblings[r].length > 1 && $(o, this, null, 1, this._siblings[r])) : (o = s[r--] = A.selector(o), "string" == typeof o && s.splice(r + 1, 1)) : s.splice(r--, 1);
                    else this._propLookup = {}, this._siblings = Z(t, this, !1), 1 === l && this._siblings.length > 1 && $(t, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === n && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -h, this.render(Math.min(0, -this._delay)))
                }, !0),
                N = function(t) {
                    return t && t.length && t !== e && t[0] && (t[0] === e || t[0].nodeType && t[0].style && !t.nodeType);
                },
                D = function(e, t) {
                    var n, i = {};
                    for (n in e) H[n] || n in t && "transform" !== n && "x" !== n && "y" !== n && "width" !== n && "height" !== n && "className" !== n && "border" !== n || !(!q[n] || q[n] && q[n]._autoCSS) || (i[n] = e[n], delete e[n]);
                    e.css = i
                };
            s = A.prototype = new O, s.constructor = A, s.kill()._gc = !1, s.ratio = 0, s._firstPT = s._targets = s._overwrittenProps = s._startAt = null, s._notifyPluginsOfEnabled = s._lazy = !1, A.version = "1.19.0", A.defaultEase = s._ease = new x(null, null, 1, 1), A.defaultOverwrite = "auto", A.ticker = a, A.autoSleep = 120, A.lagSmoothing = function(e, t) {
                a.lagSmoothing(e, t)
            }, A.selector = e.$ || e.jQuery || function(t) {
                var n = e.$ || e.jQuery;
                return n ? (A.selector = n, n(t)) : "undefined" == typeof document ? t : document.querySelectorAll ? document.querySelectorAll(t) : document.getElementById("#" === t.charAt(0) ? t.substr(1) : t)
            };
            var R = [],
                L = {},
                F = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                j = function(e) {
                    for (var t, n = this._firstPT, i = 1e-6; n;) t = n.blob ? e ? this.join("") : this.start : n.c * e + n.s, n.m ? t = n.m(t, this._target || n.t) : i > t && t > -i && (t = 0), n.f ? n.fp ? n.t[n.p](n.fp, t) : n.t[n.p](t) : n.t[n.p] = t, n = n._next
                },
                X = function(e, t, n, i) {
                    var r, o, s, a, l, u, c, h = [e, t],
                        f = 0,
                        p = "",
                        d = 0;
                    for (h.start = e, n && (n(h), e = h[0], t = h[1]), h.length = 0, r = e.match(F) || [], o = t.match(F) || [], i && (i._next = null, i.blob = 1, h._firstPT = h._applyPT = i), l = o.length, a = 0; l > a; a++) c = o[a], u = t.substr(f, t.indexOf(c, f) - f), p += u || !a ? u : ",", f += u.length, d ? d = (d + 1) % 5 : "rgba(" === u.substr(-5) && (d = 1), c === r[a] || r.length <= a ? p += c : (p && (h.push(p), p = ""), s = parseFloat(r[a]), h.push(s), h._firstPT = {
                        _next: h._firstPT,
                        t: h,
                        p: h.length - 1,
                        s: s,
                        c: ("=" === c.charAt(1) ? parseInt(c.charAt(0) + "1", 10) * parseFloat(c.substr(2)) : parseFloat(c) - s) || 0,
                        f: 0,
                        m: d && 4 > d ? Math.round : 0
                    }), f += c.length;
                    return p += t.substr(f), p && h.push(p), h.setRatio = j, h
                },
                B = function(e, t, n, i, r, o, s, a, l) {
                    "function" == typeof i && (i = i(l || 0, e));
                    var u, c, h = "get" === n ? e[t] : n,
                        f = typeof e[t],
                        p = "string" == typeof i && "=" === i.charAt(1),
                        d = {
                            t: e,
                            p: t,
                            s: h,
                            f: "function" === f,
                            pg: 0,
                            n: r || t,
                            m: o ? "function" == typeof o ? o : Math.round : 0,
                            pr: 0,
                            c: p ? parseInt(i.charAt(0) + "1", 10) * parseFloat(i.substr(2)) : parseFloat(i) - h || 0
                        };
                    return "number" !== f && ("function" === f && "get" === n && (c = t.indexOf("set") || "function" != typeof e["get" + t.substr(3)] ? t : "get" + t.substr(3), d.s = h = s ? e[c](s) : e[c]()), "string" == typeof h && (s || isNaN(h)) ? (d.fp = s, u = X(h, i, a || A.defaultStringFilter, d), d = {
                        t: u,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: 2,
                        pg: 0,
                        n: r || t,
                        pr: 0,
                        m: 0
                    }) : p || (d.s = parseFloat(h), d.c = parseFloat(i) - d.s || 0)), d.c ? ((d._next = this._firstPT) && (d._next._prev = d), this._firstPT = d, d) : void 0
                },
                I = A._internals = {
                    isArray: d,
                    isSelector: N,
                    lazyTweens: R,
                    blobDif: X
                },
                q = A._plugins = {},
                z = I.tweenLookup = {},
                Y = 0,
                H = I.reservedProps = {
                    ease: 1,
                    delay: 1,
                    overwrite: 1,
                    onComplete: 1,
                    onCompleteParams: 1,
                    onCompleteScope: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    startAt: 1,
                    onUpdate: 1,
                    onUpdateParams: 1,
                    onUpdateScope: 1,
                    onStart: 1,
                    onStartParams: 1,
                    onStartScope: 1,
                    onReverseComplete: 1,
                    onReverseCompleteParams: 1,
                    onReverseCompleteScope: 1,
                    onRepeat: 1,
                    onRepeatParams: 1,
                    onRepeatScope: 1,
                    easeParams: 1,
                    yoyo: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    data: 1,
                    paused: 1,
                    reversed: 1,
                    autoCSS: 1,
                    lazy: 1,
                    onOverwrite: 1,
                    callbackScope: 1,
                    stringFilter: 1,
                    id: 1
                },
                W = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    true: 1,
                    false: 0
                },
                V = O._rootFramesTimeline = new M,
                G = O._rootTimeline = new M,
                U = 30,
                Q = I.lazyRender = function() {
                    var e, t = R.length;
                    for (L = {}; --t > -1;) e = R[t], e && e._lazy !== !1 && (e.render(e._lazy[0], e._lazy[1], !0), e._lazy = !1);
                    R.length = 0
                };
            G._startTime = a.time, V._startTime = a.frame, G._active = V._active = !0, setTimeout(Q, 1), O._updateRoot = A.render = function() {
                var e, t, n;
                if (R.length && Q(), G.render((a.time - G._startTime) * G._timeScale, !1, !1), V.render((a.frame - V._startTime) * V._timeScale, !1, !1), R.length && Q(), a.frame >= U) {
                    U = a.frame + (parseInt(A.autoSleep, 10) || 120);
                    for (n in z) {
                        for (t = z[n].tweens, e = t.length; --e > -1;) t[e]._gc && t.splice(e, 1);
                        0 === t.length && delete z[n]
                    }
                    if (n = G._first, (!n || n._paused) && A.autoSleep && !V._first && 1 === a._listeners.tick.length) {
                        for (; n && n._paused;) n = n._next;
                        n || a.sleep()
                    }
                }
            }, a.addEventListener("tick", O._updateRoot);
            var Z = function(e, t, n) {
                    var i, r, o = e._gsTweenID;
                    if (z[o || (e._gsTweenID = o = "t" + Y++)] || (z[o] = {
                            target: e,
                            tweens: []
                        }), t && (i = z[o].tweens, i[r = i.length] = t, n))
                        for (; --r > -1;) i[r] === t && i.splice(r, 1);
                    return z[o].tweens
                },
                K = function(e, t, n, i) {
                    var r, o, s = e.vars.onOverwrite;
                    return s && (r = s(e, t, n, i)), s = A.onOverwrite, s && (o = s(e, t, n, i)), r !== !1 && o !== !1
                },
                $ = function(e, t, n, i, r) {
                    var o, s, a, l;
                    if (1 === i || i >= 4) {
                        for (l = r.length, o = 0; l > o; o++)
                            if ((a = r[o]) !== t) a._gc || a._kill(null, e, t) && (s = !0);
                            else if (5 === i) break;
                        return s
                    }
                    var u, c = t._startTime + h,
                        f = [],
                        p = 0,
                        d = 0 === t._duration;
                    for (o = r.length; --o > -1;)(a = r[o]) === t || a._gc || a._paused || (a._timeline !== t._timeline ? (u = u || J(t, 0, d), 0 === J(a, u, d) && (f[p++] = a)) : a._startTime <= c && a._startTime + a.totalDuration() / a._timeScale > c && ((d || !a._initted) && c - a._startTime <= 2e-10 || (f[p++] = a)));
                    for (o = p; --o > -1;)
                        if (a = f[o], 2 === i && a._kill(n, e, t) && (s = !0), 2 !== i || !a._firstPT && a._initted) {
                            if (2 !== i && !K(a, t)) continue;
                            a._enabled(!1, !1) && (s = !0)
                        }
                    return s
                },
                J = function(e, t, n) {
                    for (var i = e._timeline, r = i._timeScale, o = e._startTime; i._timeline;) {
                        if (o += i._startTime, r *= i._timeScale, i._paused) return -100;
                        i = i._timeline
                    }
                    return o /= r, o > t ? o - t : n && o === t || !e._initted && 2 * h > o - t ? h : (o += e.totalDuration() / e._timeScale / r) > t + h ? 0 : o - t - h
                };
            s._init = function() {
                var e, t, n, i, r, o, s = this.vars,
                    a = this._overwrittenProps,
                    l = this._duration,
                    u = !!s.immediateRender,
                    c = s.ease;
                if (s.startAt) {
                    this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {};
                    for (i in s.startAt) r[i] = s.startAt[i];
                    if (r.overwrite = !1, r.immediateRender = !0, r.lazy = u && s.lazy !== !1, r.startAt = r.delay = null, this._startAt = A.to(this.target, 0, r), u)
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== l) return
                } else if (s.runBackwards && 0 !== l)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                    else {
                        0 !== this._time && (u = !1), n = {};
                        for (i in s) H[i] && "autoCSS" !== i || (n[i] = s[i]);
                        if (n.overwrite = 0, n.data = "isFromStart", n.lazy = u && s.lazy !== !1, n.immediateRender = u, this._startAt = A.to(this.target, 0, n), u) {
                            if (0 === this._time) return
                        } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                    }
                if (this._ease = c = c ? c instanceof x ? c : "function" == typeof c ? new x(c, s.easeParams) : w[c] || A.defaultEase : A.defaultEase, s.easeParams instanceof Array && c.config && (this._ease = c.config.apply(c, s.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (o = this._targets.length, e = 0; o > e; e++) this._initProps(this._targets[e], this._propLookup[e] = {}, this._siblings[e], a ? a[e] : null, e) && (t = !0);
                else t = this._initProps(this.target, this._propLookup, this._siblings, a, 0);
                if (t && A._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), s.runBackwards)
                    for (n = this._firstPT; n;) n.s += n.c, n.c = -n.c, n = n._next;
                this._onUpdate = s.onUpdate, this._initted = !0
            }, s._initProps = function(t, n, i, r, o) {
                var s, a, l, u, c, h;
                if (null == t) return !1;
                L[t._gsTweenID] && Q(), this.vars.css || t.style && t !== e && t.nodeType && q.css && this.vars.autoCSS !== !1 && D(this.vars, t);
                for (s in this.vars)
                    if (h = this.vars[s], H[s]) h && (h instanceof Array || h.push && d(h)) && -1 !== h.join("").indexOf("{self}") && (this.vars[s] = h = this._swapSelfInParams(h, this));
                    else if (q[s] && (u = new q[s])._onInitTween(t, this.vars[s], this, o)) {
                    for (this._firstPT = c = {
                            _next: this._firstPT,
                            t: u,
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: 1,
                            n: s,
                            pg: 1,
                            pr: u._priority,
                            m: 0
                        }, a = u._overwriteProps.length; --a > -1;) n[u._overwriteProps[a]] = this._firstPT;
                    (u._priority || u._onInitAllProps) && (l = !0), (u._onDisable || u._onEnable) && (this._notifyPluginsOfEnabled = !0), c._next && (c._next._prev = c)
                } else n[s] = B.call(this, t, s, "get", h, s, 0, null, this.vars.stringFilter, o);
                return r && this._kill(r, t) ? this._initProps(t, n, i, r, o) : this._overwrite > 1 && this._firstPT && i.length > 1 && $(t, this, n, this._overwrite, i) ? (this._kill(n, t), this._initProps(t, n, i, r, o)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (L[t._gsTweenID] = !0), l)
            }, s.render = function(e, t, n) {
                var i, r, o, s, a = this._time,
                    l = this._duration,
                    u = this._rawPrevTime;
                if (e >= l - 1e-7) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (i = !0, r = "onComplete", n = n || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || n) && (this._startTime === this._timeline._duration && (e = 0), (0 > u || 0 >= e && e >= -1e-7 || u === h && "isPause" !== this.data) && u !== e && (n = !0, u > h && (r = "onReverseComplete")), this._rawPrevTime = s = !t || e || u === e ? e : h);
                else if (1e-7 > e) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === l && u > 0) && (r = "onReverseComplete", i = this._reversed), 0 > e && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || n) && (u >= 0 && (u !== h || "isPause" !== this.data) && (n = !0), this._rawPrevTime = s = !t || e || u === e ? e : h)), this._initted || (n = !0);
                else if (this._totalTime = this._time = e, this._easeType) {
                    var c = e / l,
                        f = this._easeType,
                        p = this._easePower;
                    (1 === f || 3 === f && c >= .5) && (c = 1 - c), 3 === f && (c *= 2), 1 === p ? c *= c : 2 === p ? c *= c * c : 3 === p ? c *= c * c * c : 4 === p && (c *= c * c * c * c), 1 === f ? this.ratio = 1 - c : 2 === f ? this.ratio = c : .5 > e / l ? this.ratio = c / 2 : this.ratio = 1 - c / 2
                } else this.ratio = this._ease.getRatio(e / l);
                if (this._time !== a || n) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!n && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = a, this._rawPrevTime = u, R.push(this), void(this._lazy = [e, t]);
                        this._time && !i ? this.ratio = this._ease.getRatio(this._time / l) : i && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== a && e >= 0 && (this._active = !0), 0 === a && (this._startAt && (e >= 0 ? this._startAt.render(e, t, n) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (t || this._callback("onStart"))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
                    this._onUpdate && (0 > e && this._startAt && e !== -1e-4 && this._startAt.render(e, t, n), t || (this._time !== a || i || n) && this._callback("onUpdate")), r && (!this._gc || n) && (0 > e && this._startAt && !this._onUpdate && e !== -1e-4 && this._startAt.render(e, t, n), i && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[r] && this._callback(r), 0 === l && this._rawPrevTime === h && s !== h && (this._rawPrevTime = 0))
                }
            }, s._kill = function(e, t, n) {
                if ("all" === e && (e = null), null == e && (null == t || t === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                t = "string" != typeof t ? t || this._targets || this.target : A.selector(t) || t;
                var i, r, o, s, a, l, u, c, h, f = n && this._time && n._startTime === this._startTime && this._timeline === n._timeline;
                if ((d(t) || N(t)) && "number" != typeof t[0])
                    for (i = t.length; --i > -1;) this._kill(e, t[i], n) && (l = !0);
                else {
                    if (this._targets) {
                        for (i = this._targets.length; --i > -1;)
                            if (t === this._targets[i]) {
                                a = this._propLookup[i] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[i] = e ? this._overwrittenProps[i] || {} : "all";
                                break
                            }
                    } else {
                        if (t !== this.target) return !1;
                        a = this._propLookup, r = this._overwrittenProps = e ? this._overwrittenProps || {} : "all"
                    }
                    if (a) {
                        if (u = e || a, c = e !== r && "all" !== r && e !== a && ("object" != typeof e || !e._tempKill), n && (A.onOverwrite || this.vars.onOverwrite)) {
                            for (o in u) a[o] && (h || (h = []), h.push(o));
                            if ((h || !e) && !K(this, n, t, h)) return !1
                        }
                        for (o in u)(s = a[o]) && (f && (s.f ? s.t[s.p](s.s) : s.t[s.p] = s.s, l = !0), s.pg && s.t._kill(u) && (l = !0), s.pg && 0 !== s.t._overwriteProps.length || (s._prev ? s._prev._next = s._next : s === this._firstPT && (this._firstPT = s._next), s._next && (s._next._prev = s._prev), s._next = s._prev = null), delete a[o]), c && (r[o] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
                }
                return l
            }, s.invalidate = function() {
                return this._notifyPluginsOfEnabled && A._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], O.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -h, this.render(Math.min(0, -this._delay))), this
            }, s._enabled = function(e, t) {
                if (l || a.wake(), e && this._gc) {
                    var n, i = this._targets;
                    if (i)
                        for (n = i.length; --n > -1;) this._siblings[n] = Z(i[n], this, !0);
                    else this._siblings = Z(this.target, this, !0)
                }
                return O.prototype._enabled.call(this, e, t), !(!this._notifyPluginsOfEnabled || !this._firstPT) && A._onPluginEvent(e ? "_onEnable" : "_onDisable", this)
            }, A.to = function(e, t, n) {
                return new A(e, t, n)
            }, A.from = function(e, t, n) {
                return n.runBackwards = !0, n.immediateRender = 0 != n.immediateRender, new A(e, t, n)
            }, A.fromTo = function(e, t, n, i) {
                return i.startAt = n, i.immediateRender = 0 != i.immediateRender && 0 != n.immediateRender, new A(e, t, i)
            }, A.delayedCall = function(e, t, n, i, r) {
                return new A(t, 0, {
                    delay: e,
                    onComplete: t,
                    onCompleteParams: n,
                    callbackScope: i,
                    onReverseComplete: t,
                    onReverseCompleteParams: n,
                    immediateRender: !1,
                    lazy: !1,
                    useFrames: r,
                    overwrite: 0
                })
            }, A.set = function(e, t) {
                return new A(e, 0, t)
            }, A.getTweensOf = function(e, t) {
                if (null == e) return [];
                e = "string" != typeof e ? e : A.selector(e) || e;
                var n, i, r, o;
                if ((d(e) || N(e)) && "number" != typeof e[0]) {
                    for (n = e.length, i = []; --n > -1;) i = i.concat(A.getTweensOf(e[n], t));
                    for (n = i.length; --n > -1;)
                        for (o = i[n], r = n; --r > -1;) o === i[r] && i.splice(n, 1)
                } else
                    for (i = Z(e).concat(), n = i.length; --n > -1;)(i[n]._gc || t && !i[n].isActive()) && i.splice(n, 1);
                return i
            }, A.killTweensOf = A.killDelayedCallsTo = function(e, t, n) {
                "object" == typeof t && (n = t, t = !1);
                for (var i = A.getTweensOf(e, t), r = i.length; --r > -1;) i[r]._kill(n, e)
            };
            var ee = v("plugins.TweenPlugin", function(e, t) {
                this._overwriteProps = (e || "").split(","), this._propName = this._overwriteProps[0], this._priority = t || 0, this._super = ee.prototype
            }, !0);
            if (s = ee.prototype, ee.version = "1.19.0", ee.API = 2, s._firstPT = null, s._addTween = B, s.setRatio = j, s._kill = function(e) {
                    var t, n = this._overwriteProps,
                        i = this._firstPT;
                    if (null != e[this._propName]) this._overwriteProps = [];
                    else
                        for (t = n.length; --t > -1;) null != e[n[t]] && n.splice(t, 1);
                    for (; i;) null != e[i.n] && (i._next && (i._next._prev = i._prev), i._prev ? (i._prev._next = i._next, i._prev = null) : this._firstPT === i && (this._firstPT = i._next)), i = i._next;
                    return !1
                }, s._mod = s._roundProps = function(e) {
                    for (var t, n = this._firstPT; n;) t = e[this._propName] || null != n.n && e[n.n.split(this._propName + "_").join("")], t && "function" == typeof t && (2 === n.f ? n.t._applyPT.m = t : n.m = t), n = n._next
                }, A._onPluginEvent = function(e, t) {
                    var n, i, r, o, s, a = t._firstPT;
                    if ("_onInitAllProps" === e) {
                        for (; a;) {
                            for (s = a._next, i = r; i && i.pr > a.pr;) i = i._next;
                            (a._prev = i ? i._prev : o) ? a._prev._next = a: r = a, (a._next = i) ? i._prev = a : o = a, a = s
                        }
                        a = t._firstPT = r
                    }
                    for (; a;) a.pg && "function" == typeof a.t[e] && a.t[e]() && (n = !0), a = a._next;
                    return n
                }, ee.activate = function(e) {
                    for (var t = e.length; --t > -1;) e[t].API === ee.API && (q[(new e[t])._propName] = e[t]);
                    return !0
                }, y.plugin = function(e) {
                    if (!(e && e.propName && e.init && e.API)) throw "illegal plugin definition.";
                    var t, n = e.propName,
                        i = e.priority || 0,
                        r = e.overwriteProps,
                        o = {
                            init: "_onInitTween",
                            set: "setRatio",
                            kill: "_kill",
                            round: "_mod",
                            mod: "_mod",
                            initAll: "_onInitAllProps"
                        },
                        s = v("plugins." + n.charAt(0).toUpperCase() + n.substr(1) + "Plugin", function() {
                            ee.call(this, n, i), this._overwriteProps = r || []
                        }, e.global === !0),
                        a = s.prototype = new ee(n);
                    a.constructor = s, s.API = e.API;
                    for (t in o) "function" == typeof e[t] && (a[o[t]] = e[t]);
                    return s.version = e.version, ee.activate([s]), s
                }, r = e._gsQueue) {
                for (o = 0; o < r.length; o++) r[o]();
                for (s in g) g[s].func || e.console.log("GSAP encountered missing dependency: " + s)
            }
            l = !1
        }
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax"), ! function(e, t) {
        "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.ScrollMagic = t()
    }(this, function() {
        "use strict";
        var e = function() {};
        e.version = "2.0.5", window.addEventListener("mousewheel", function() {});
        var t = "data-scrollmagic-pin-spacer";
        e.Controller = function(i) {
            var o, s, a = "ScrollMagic.Controller",
                l = "FORWARD",
                u = "REVERSE",
                c = "PAUSED",
                h = n.defaults,
                f = this,
                p = r.extend({}, h, i),
                d = [],
                g = !1,
                m = 0,
                y = c,
                v = !0,
                _ = 0,
                x = !0,
                w = function() {
                    for (var e in p) h.hasOwnProperty(e) || delete p[e];
                    if (p.container = r.get.elements(p.container)[0], !p.container) throw a + " init failed.";
                    v = p.container === window || p.container === document.body || !document.body.contains(p.container), v && (p.container = window), _ = S(), p.container.addEventListener("resize", O), p.container.addEventListener("scroll", O), p.refreshInterval = parseInt(p.refreshInterval) || h.refreshInterval, T()
                },
                T = function() {
                    p.refreshInterval > 0 && (s = window.setTimeout(E, p.refreshInterval))
                },
                b = function() {
                    return p.vertical ? r.get.scrollTop(p.container) : r.get.scrollLeft(p.container)
                },
                S = function() {
                    return p.vertical ? r.get.height(p.container) : r.get.width(p.container)
                },
                k = this._setScrollPos = function(e) {
                    p.vertical ? v ? window.scrollTo(r.get.scrollLeft(), e) : p.container.scrollTop = e : v ? window.scrollTo(e, r.get.scrollTop()) : p.container.scrollLeft = e
                },
                P = function() {
                    if (x && g) {
                        var e = r.type.Array(g) ? g : d.slice(0);
                        g = !1;
                        var t = m;
                        m = f.scrollPos();
                        var n = m - t;
                        0 !== n && (y = n > 0 ? l : u), y === u && e.reverse(), e.forEach(function(e) {
                            e.update(!0)
                        })
                    }
                },
                C = function() {
                    o = r.rAF(P)
                },
                O = function(e) {
                    "resize" == e.type && (_ = S(), y = c), g !== !0 && (g = !0, C())
                },
                E = function() {
                    if (!v && _ != S()) {
                        var e;
                        try {
                            e = new Event("resize", {
                                bubbles: !1,
                                cancelable: !1
                            })
                        } catch (t) {
                            e = document.createEvent("Event"), e.initEvent("resize", !1, !1)
                        }
                        p.container.dispatchEvent(e)
                    }
                    d.forEach(function(e) {
                        e.refresh()
                    }), T()
                };
            this._options = p;
            var M = function(e) {
                if (e.length <= 1) return e;
                var t = e.slice(0);
                return t.sort(function(e, t) {
                    return e.scrollOffset() > t.scrollOffset() ? 1 : -1
                }), t
            };
            return this.addScene = function(t) {
                if (r.type.Array(t)) t.forEach(function(e) {
                    f.addScene(e)
                });
                else if (t instanceof e.Scene)
                    if (t.controller() !== f) t.addTo(f);
                    else if (d.indexOf(t) < 0) {
                    d.push(t), d = M(d), t.on("shift.controller_sort", function() {
                        d = M(d)
                    });
                    for (var n in p.globalSceneOptions) t[n] && t[n].call(t, p.globalSceneOptions[n])
                }
                return f
            }, this.removeScene = function(e) {
                if (r.type.Array(e)) e.forEach(function(e) {
                    f.removeScene(e)
                });
                else {
                    var t = d.indexOf(e);
                    t > -1 && (e.off("shift.controller_sort"), d.splice(t, 1), e.remove())
                }
                return f
            }, this.updateScene = function(t, n) {
                return r.type.Array(t) ? t.forEach(function(e) {
                    f.updateScene(e, n)
                }) : n ? t.update(!0) : g !== !0 && t instanceof e.Scene && (g = g || [], -1 == g.indexOf(t) && g.push(t), g = M(g), C()), f
            }, this.update = function(e) {
                return O({
                    type: "resize"
                }), e && P(), f
            }, this.scrollTo = function(n, i) {
                if (r.type.Number(n)) k.call(p.container, n, i);
                else if (n instanceof e.Scene) n.controller() === f && f.scrollTo(n.scrollOffset(), i);
                else if (r.type.Function(n)) k = n;
                else {
                    var o = r.get.elements(n)[0];
                    if (o) {
                        for (; o.parentNode.hasAttribute(t);) o = o.parentNode;
                        var s = p.vertical ? "top" : "left",
                            a = r.get.offset(p.container),
                            l = r.get.offset(o);
                        v || (a[s] -= f.scrollPos()), f.scrollTo(l[s] - a[s], i)
                    }
                }
                return f
            }, this.scrollPos = function(e) {
                return arguments.length ? (r.type.Function(e) && (b = e), f) : b.call(f)
            }, this.info = function(e) {
                var t = {
                    size: _,
                    vertical: p.vertical,
                    scrollPos: m,
                    scrollDirection: y,
                    container: p.container,
                    isDocument: v
                };
                return arguments.length ? void 0 !== t[e] ? t[e] : void 0 : t
            }, this.loglevel = function() {
                return f
            }, this.enabled = function(e) {
                return arguments.length ? (x != e && (x = !!e, f.updateScene(d, !0)), f) : x
            }, this.destroy = function(e) {
                window.clearTimeout(s);
                for (var t = d.length; t--;) d[t].destroy(e);
                return p.container.removeEventListener("resize", O), p.container.removeEventListener("scroll", O), r.cAF(o), null
            }, w(), f
        };
        var n = {
            defaults: {
                container: window,
                vertical: !0,
                globalSceneOptions: {},
                loglevel: 2,
                refreshInterval: 100
            }
        };
        e.Controller.addOption = function(e, t) {
            n.defaults[e] = t
        }, e.Controller.extend = function(t) {
            var n = this;
            e.Controller = function() {
                return n.apply(this, arguments), this.$super = r.extend({}, this), t.apply(this, arguments) || this
            }, r.extend(e.Controller, n), e.Controller.prototype = n.prototype, e.Controller.prototype.constructor = e.Controller
        }, e.Scene = function(n) {
            var o, s, a = "BEFORE",
                l = "DURING",
                u = "AFTER",
                c = i.defaults,
                h = this,
                f = r.extend({}, c, n),
                p = a,
                d = 0,
                g = {
                    start: 0,
                    end: 0
                },
                m = 0,
                y = !0,
                v = function() {
                    for (var e in f) c.hasOwnProperty(e) || delete f[e];
                    for (var t in c) C(t);
                    k()
                },
                _ = {};
            this.on = function(e, t) {
                return r.type.Function(t) && (e = e.trim().split(" "), e.forEach(function(e) {
                    var n = e.split("."),
                        i = n[0],
                        r = n[1];
                    "*" != i && (_[i] || (_[i] = []), _[i].push({
                        namespace: r || "",
                        callback: t
                    }))
                })), h
            }, this.off = function(e, t) {
                return e ? (e = e.trim().split(" "), e.forEach(function(e) {
                    var n = e.split("."),
                        i = n[0],
                        r = n[1] || "",
                        o = "*" === i ? Object.keys(_) : [i];
                    o.forEach(function(e) {
                        for (var n = _[e] || [], i = n.length; i--;) {
                            var o = n[i];
                            !o || r !== o.namespace && "*" !== r || t && t != o.callback || n.splice(i, 1)
                        }
                        n.length || delete _[e]
                    })
                }), h) : h
            }, this.trigger = function(t, n) {
                if (t) {
                    var i = t.trim().split("."),
                        r = i[0],
                        o = i[1],
                        s = _[r];
                    s && s.forEach(function(t) {
                        o && o !== t.namespace || t.callback.call(h, new e.Event(r, t.namespace, h, n))
                    })
                }
                return h
            }, h.on("change.internal", function(e) {
                "loglevel" !== e.what && "tweenChanges" !== e.what && ("triggerElement" === e.what ? T() : "reverse" === e.what && h.update())
            }).on("shift.internal", function() {
                x(), h.update()
            }), this.addTo = function(t) {
                return t instanceof e.Controller && s != t && (s && s.removeScene(h), s = t, k(), w(!0), T(!0), x(), s.info("container").addEventListener("resize", b), t.addScene(h), h.trigger("add", {
                    controller: s
                }), h.update()), h
            }, this.enabled = function(e) {
                return arguments.length ? (y != e && (y = !!e, h.update(!0)), h) : y
            }, this.remove = function() {
                if (s) {
                    s.info("container").removeEventListener("resize", b);
                    var e = s;
                    s = void 0, e.removeScene(h), h.trigger("remove")
                }
                return h
            }, this.destroy = function(e) {
                return h.trigger("destroy", {
                    reset: e
                }), h.remove(), h.off("*.*"), null
            }, this.update = function(e) {
                if (s)
                    if (e)
                        if (s.enabled() && y) {
                            var t, n = s.info("scrollPos");
                            t = f.duration > 0 ? (n - g.start) / (g.end - g.start) : n >= g.start ? 1 : 0, h.trigger("update", {
                                startPos: g.start,
                                endPos: g.end,
                                scrollPos: n
                            }), h.progress(t)
                        } else O && p === l && M(!0);
                else s.updateScene(h, !1);
                return h
            }, this.refresh = function() {
                return w(), T(), h
            }, this.progress = function(e) {
                if (arguments.length) {
                    var t = !1,
                        n = p,
                        i = s ? s.info("scrollDirection") : "PAUSED",
                        r = f.reverse || e >= d;
                    if (0 === f.duration ? (t = d != e, d = 1 > e && r ? 0 : 1, p = 0 === d ? a : l) : 0 > e && p !== a && r ? (d = 0, p = a, t = !0) : e >= 0 && 1 > e && r ? (d = e, p = l, t = !0) : e >= 1 && p !== u ? (d = 1, p = u, t = !0) : p !== l || r || M(), t) {
                        var o = {
                                progress: d,
                                state: p,
                                scrollDirection: i
                            },
                            c = p != n,
                            g = function(e) {
                                h.trigger(e, o)
                            };
                        c && n !== l && (g("enter"), g(n === a ? "start" : "end")), g("progress"), c && p !== l && (g(p === a ? "start" : "end"), g("leave"))
                    }
                    return h
                }
                return d
            };
            var x = function() {
                    g = {
                        start: m + f.offset
                    }, s && f.triggerElement && (g.start -= s.info("size") * f.triggerHook), g.end = g.start + f.duration
                },
                w = function(e) {
                    if (o) {
                        var t = "duration";
                        P(t, o.call(h)) && !e && (h.trigger("change", {
                            what: t,
                            newval: f[t]
                        }), h.trigger("shift", {
                            reason: t
                        }))
                    }
                },
                T = function(e) {
                    var n = 0,
                        i = f.triggerElement;
                    if (s && i) {
                        for (var o = s.info(), a = r.get.offset(o.container), l = o.vertical ? "top" : "left"; i.parentNode.hasAttribute(t);) i = i.parentNode;
                        var u = r.get.offset(i);
                        o.isDocument || (a[l] -= s.scrollPos()), n = u[l] - a[l]
                    }
                    var c = n != m;
                    m = n, c && !e && h.trigger("shift", {
                        reason: "triggerElementPosition"
                    })
                },
                b = function() {
                    f.triggerHook > 0 && h.trigger("shift", {
                        reason: "containerResize"
                    })
                },
                S = r.extend(i.validate, {
                    duration: function(e) {
                        if (r.type.String(e) && e.match(/^(\.|\d)*\d+%$/)) {
                            var t = parseFloat(e) / 100;
                            e = function() {
                                return s ? s.info("size") * t : 0
                            }
                        }
                        if (r.type.Function(e)) {
                            o = e;
                            try {
                                e = parseFloat(o())
                            } catch (t) {
                                e = -1
                            }
                        }
                        if (e = parseFloat(e), !r.type.Number(e) || 0 > e) throw o ? (o = void 0, 0) : 0;
                        return e
                    }
                }),
                k = function(e) {
                    e = arguments.length ? [e] : Object.keys(S), e.forEach(function(e) {
                        var t;
                        if (S[e]) try {
                            t = S[e](f[e])
                        } catch (n) {
                            t = c[e]
                        } finally {
                            f[e] = t
                        }
                    })
                },
                P = function(e, t) {
                    var n = !1,
                        i = f[e];
                    return f[e] != t && (f[e] = t, k(e), n = i != f[e]), n
                },
                C = function(e) {
                    h[e] || (h[e] = function(t) {
                        return arguments.length ? ("duration" === e && (o = void 0), P(e, t) && (h.trigger("change", {
                            what: e,
                            newval: f[e]
                        }), i.shifts.indexOf(e) > -1 && h.trigger("shift", {
                            reason: e
                        })), h) : f[e]
                    })
                };
            this.controller = function() {
                return s
            }, this.state = function() {
                return p
            }, this.scrollOffset = function() {
                return g.start
            }, this.triggerPosition = function() {
                var e = f.offset;
                return s && (e += f.triggerElement ? m : s.info("size") * h.triggerHook()), e
            };
            var O, E;
            h.on("shift.internal", function(e) {
                var t = "duration" === e.reason;
                (p === u && t || p === l && 0 === f.duration) && M(), t && A()
            }).on("progress.internal", function() {
                M()
            }).on("add.internal", function() {
                A()
            }).on("destroy.internal", function(e) {
                h.removePin(e.reset)
            });
            var M = function(e) {
                    if (O && s) {
                        var t = s.info(),
                            n = E.spacer.firstChild;
                        if (e || p !== l) {
                            var i = {
                                    position: E.inFlow ? "relative" : "absolute",
                                    top: 0,
                                    left: 0
                                },
                                o = r.css(n, "position") != i.position;
                            E.pushFollowers ? f.duration > 0 && (p === u && 0 === parseFloat(r.css(E.spacer, "padding-top")) ? o = !0 : p === a && 0 === parseFloat(r.css(E.spacer, "padding-bottom")) && (o = !0)) : i[t.vertical ? "top" : "left"] = f.duration * d, r.css(n, i), o && A()
                        } else {
                            "fixed" != r.css(n, "position") && (r.css(n, {
                                position: "fixed"
                            }), A());
                            var c = r.get.offset(E.spacer, !0),
                                h = f.reverse || 0 === f.duration ? t.scrollPos - g.start : Math.round(d * f.duration * 10) / 10;
                            c[t.vertical ? "top" : "left"] += h, r.css(E.spacer.firstChild, {
                                top: c.top,
                                left: c.left
                            })
                        }
                    }
                },
                A = function() {
                    if (O && s && E.inFlow) {
                        var e = p === l,
                            t = s.info("vertical"),
                            n = E.spacer.firstChild,
                            i = r.isMarginCollapseType(r.css(E.spacer, "display")),
                            o = {};
                        E.relSize.width || E.relSize.autoFullWidth ? e ? r.css(O, {
                            width: r.get.width(E.spacer)
                        }) : r.css(O, {
                            width: "100%"
                        }) : (o["min-width"] = r.get.width(t ? O : n, !0, !0), o.width = e ? o["min-width"] : "auto"), E.relSize.height ? e ? r.css(O, {
                            height: r.get.height(E.spacer) - (E.pushFollowers ? f.duration : 0)
                        }) : r.css(O, {
                            height: "100%"
                        }) : (o["min-height"] = r.get.height(t ? n : O, !0, !i), o.height = e ? o["min-height"] : "auto"), E.pushFollowers && (o["padding" + (t ? "Top" : "Left")] = f.duration * d, o["padding" + (t ? "Bottom" : "Right")] = f.duration * (1 - d)), r.css(E.spacer, o)
                    }
                },
                N = function() {
                    s && O && p === l && !s.info("isDocument") && M()
                },
                D = function() {
                    s && O && p === l && ((E.relSize.width || E.relSize.autoFullWidth) && r.get.width(window) != r.get.width(E.spacer.parentNode) || E.relSize.height && r.get.height(window) != r.get.height(E.spacer.parentNode)) && A()
                },
                R = function(e) {
                    s && O && p === l && !s.info("isDocument") && (e.preventDefault(), s._setScrollPos(s.info("scrollPos") - ((e.wheelDelta || e[s.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || 30 * -e.detail)))
                };
            this.setPin = function(e, n) {
                var i = {
                    pushFollowers: !0,
                    spacerClass: "scrollmagic-pin-spacer"
                };
                if (n = r.extend({}, i, n), e = r.get.elements(e)[0], !e) return h;
                if ("fixed" === r.css(e, "position")) return h;
                if (O) {
                    if (O === e) return h;
                    h.removePin()
                }
                O = e;
                var o = O.parentNode.style.display,
                    s = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
                O.parentNode.style.display = "none";
                var a = "absolute" != r.css(O, "position"),
                    l = r.css(O, s.concat(["display"])),
                    u = r.css(O, ["width", "height"]);
                O.parentNode.style.display = o, !a && n.pushFollowers && (n.pushFollowers = !1);
                var c = O.parentNode.insertBefore(document.createElement("div"), O),
                    f = r.extend(l, {
                        position: a ? "relative" : "absolute",
                        boxSizing: "content-box",
                        mozBoxSizing: "content-box",
                        webkitBoxSizing: "content-box"
                    });
                if (a || r.extend(f, r.css(O, ["width", "height"])), r.css(c, f), c.setAttribute(t, ""), r.addClass(c, n.spacerClass), E = {
                        spacer: c,
                        relSize: {
                            width: "%" === u.width.slice(-1),
                            height: "%" === u.height.slice(-1),
                            autoFullWidth: "auto" === u.width && a && r.isMarginCollapseType(l.display)
                        },
                        pushFollowers: n.pushFollowers,
                        inFlow: a
                    }, !O.___origStyle) {
                    O.___origStyle = {};
                    var p = O.style,
                        d = s.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]);
                    d.forEach(function(e) {
                        O.___origStyle[e] = p[e] || ""
                    })
                }
                return E.relSize.width && r.css(c, {
                    width: u.width
                }), E.relSize.height && r.css(c, {
                    height: u.height
                }), c.appendChild(O), r.css(O, {
                    position: a ? "relative" : "absolute",
                    margin: "auto",
                    top: "auto",
                    left: "auto",
                    bottom: "auto",
                    right: "auto"
                }), (E.relSize.width || E.relSize.autoFullWidth) && r.css(O, {
                    boxSizing: "border-box",
                    mozBoxSizing: "border-box",
                    webkitBoxSizing: "border-box"
                }), window.addEventListener("scroll", N), window.addEventListener("resize", N), window.addEventListener("resize", D), O.addEventListener("mousewheel", R), O.addEventListener("DOMMouseScroll", R), M(), h
            }, this.removePin = function(e) {
                if (O) {
                    if (p === l && M(!0), e || !s) {
                        var n = E.spacer.firstChild;
                        if (n.hasAttribute(t)) {
                            var i = E.spacer.style,
                                o = ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
                            margins = {}, o.forEach(function(e) {
                                margins[e] = i[e] || ""
                            }), r.css(n, margins)
                        }
                        E.spacer.parentNode.insertBefore(n, E.spacer), E.spacer.parentNode.removeChild(E.spacer), O.parentNode.hasAttribute(t) || (r.css(O, O.___origStyle), delete O.___origStyle)
                    }
                    window.removeEventListener("scroll", N), window.removeEventListener("resize", N), window.removeEventListener("resize", D), O.removeEventListener("mousewheel", R), O.removeEventListener("DOMMouseScroll", R), O = void 0
                }
                return h
            };
            var L, F = [];
            return h.on("destroy.internal", function(e) {
                h.removeClassToggle(e.reset)
            }), this.setClassToggle = function(e, t) {
                var n = r.get.elements(e);
                return 0 !== n.length && r.type.String(t) ? (F.length > 0 && h.removeClassToggle(), L = t, F = n, h.on("enter.internal_class leave.internal_class", function(e) {
                    var t = "enter" === e.type ? r.addClass : r.removeClass;
                    F.forEach(function(e) {
                        t(e, L)
                    })
                }), h) : h
            }, this.removeClassToggle = function(e) {
                return e && F.forEach(function(e) {
                    r.removeClass(e, L)
                }), h.off("start.internal_class end.internal_class"), L = void 0, F = [], h
            }, v(), h
        };
        var i = {
            defaults: {
                duration: 0,
                offset: 0,
                triggerElement: void 0,
                triggerHook: .5,
                reverse: !0,
                loglevel: 2
            },
            validate: {
                offset: function(e) {
                    if (e = parseFloat(e), !r.type.Number(e)) throw 0;
                    return e
                },
                triggerElement: function(e) {
                    if (e = e || void 0) {
                        var t = r.get.elements(e)[0];
                        if (!t) throw 0;
                        e = t
                    }
                    return e
                },
                triggerHook: function(e) {
                    var t = {
                        onCenter: .5,
                        onEnter: 1,
                        onLeave: 0
                    };
                    if (r.type.Number(e)) e = Math.max(0, Math.min(parseFloat(e), 1));
                    else {
                        if (!(e in t)) throw 0;
                        e = t[e]
                    }
                    return e
                },
                reverse: function(e) {
                    return !!e
                }
            },
            shifts: ["duration", "offset", "triggerHook"]
        };
        e.Scene.addOption = function(e, t, n, r) {
            e in i.defaults || (i.defaults[e] = t, i.validate[e] = n, r && i.shifts.push(e))
        }, e.Scene.extend = function(t) {
            var n = this;
            e.Scene = function() {
                return n.apply(this, arguments), this.$super = r.extend({}, this), t.apply(this, arguments) || this
            }, r.extend(e.Scene, n), e.Scene.prototype = n.prototype, e.Scene.prototype.constructor = e.Scene
        }, e.Event = function(e, t, n, i) {
            i = i || {};
            for (var r in i) this[r] = i[r];
            return this.type = e, this.target = this.currentTarget = n, this.namespace = t || "", this.timeStamp = this.timestamp = Date.now(), this
        };
        var r = e._util = function(e) {
            var t, n = {},
                i = function(e) {
                    return parseFloat(e) || 0
                },
                r = function(t) {
                    return t.currentStyle ? t.currentStyle : e.getComputedStyle(t)
                },
                o = function(t, n, o, s) {
                    if (n = n === document ? e : n, n === e) s = !1;
                    else if (!h.DomElement(n)) return 0;
                    t = t.charAt(0).toUpperCase() + t.substr(1).toLowerCase();
                    var a = (o ? n["offset" + t] || n["outer" + t] : n["client" + t] || n["inner" + t]) || 0;
                    if (o && s) {
                        var l = r(n);
                        a += "Height" === t ? i(l.marginTop) + i(l.marginBottom) : i(l.marginLeft) + i(l.marginRight)
                    }
                    return a
                },
                s = function(e) {
                    return e.replace(/^[^a-z]+([a-z])/g, "$1").replace(/-([a-z])/g, function(e) {
                        return e[1].toUpperCase()
                    })
                };
            n.extend = function(e) {
                for (e = e || {}, t = 1; t < arguments.length; t++)
                    if (arguments[t])
                        for (var n in arguments[t]) arguments[t].hasOwnProperty(n) && (e[n] = arguments[t][n]);
                return e
            }, n.isMarginCollapseType = function(e) {
                return ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(e) > -1
            };
            var a = 0,
                l = ["ms", "moz", "webkit", "o"],
                u = e.requestAnimationFrame,
                c = e.cancelAnimationFrame;
            for (t = 0; !u && t < l.length; ++t) u = e[l[t] + "RequestAnimationFrame"], c = e[l[t] + "CancelAnimationFrame"] || e[l[t] + "CancelRequestAnimationFrame"];
            u || (u = function(t) {
                var n = (new Date).getTime(),
                    i = Math.max(0, 16 - (n - a)),
                    r = e.setTimeout(function() {
                        t(n + i)
                    }, i);
                return a = n + i, r
            }), c || (c = function(t) {
                e.clearTimeout(t)
            }), n.rAF = u.bind(e), n.cAF = c.bind(e);
            var h = n.type = function(e) {
                return Object.prototype.toString.call(e).replace(/^\[object (.+)\]$/, "$1").toLowerCase()
            };
            h.String = function(e) {
                return "string" === h(e)
            }, h.Function = function(e) {
                return "function" === h(e)
            }, h.Array = function(e) {
                return Array.isArray(e)
            }, h.Number = function(e) {
                return !h.Array(e) && e - parseFloat(e) + 1 >= 0
            }, h.DomElement = function(e) {
                return "object" == typeof HTMLElement ? e instanceof HTMLElement : e && "object" == typeof e && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName
            };
            var f = n.get = {};
            return f.elements = function(t) {
                var n = [];
                if (h.String(t)) try {
                    t = document.querySelectorAll(t)
                } catch (e) {
                    return n
                }
                if ("nodelist" === h(t) || h.Array(t))
                    for (var i = 0, r = n.length = t.length; r > i; i++) {
                        var o = t[i];
                        n[i] = h.DomElement(o) ? o : f.elements(o)
                    } else(h.DomElement(t) || t === document || t === e) && (n = [t]);
                return n
            }, f.scrollTop = function(t) {
                return t && "number" == typeof t.scrollTop ? t.scrollTop : e.pageYOffset || 0
            }, f.scrollLeft = function(t) {
                return t && "number" == typeof t.scrollLeft ? t.scrollLeft : e.pageXOffset || 0
            }, f.width = function(e, t, n) {
                return o("width", e, t, n)
            }, f.height = function(e, t, n) {
                return o("height", e, t, n)
            }, f.offset = function(e, t) {
                var n = {
                    top: 0,
                    left: 0
                };
                if (e && e.getBoundingClientRect) {
                    var i = e.getBoundingClientRect();
                    n.top = i.top, n.left = i.left, t || (n.top += f.scrollTop(), n.left += f.scrollLeft())
                }
                return n
            }, n.addClass = function(e, t) {
                t && (e.classList ? e.classList.add(t) : e.className += " " + t)
            }, n.removeClass = function(e, t) {
                t && (e.classList ? e.classList.remove(t) : e.className = e.className.replace(RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " "))
            }, n.css = function(e, t) {
                if (h.String(t)) return r(e)[s(t)];
                if (h.Array(t)) {
                    var n = {},
                        i = r(e);
                    return t.forEach(function(e) {
                        n[e] = i[s(e)]
                    }), n
                }
                for (var o in t) {
                    var a = t[o];
                    a == parseFloat(a) && (a += "px"), e.style[s(o)] = a
                }
            }, n
        }(window || {});
        return e
    }), ! function(e, t) {
        "function" == typeof define && define.amd ? define(["ScrollMagic", "TweenMax", "TimelineMax"], t) : "object" == typeof exports ? (require("gsap"), t(require("scrollmagic"), TweenMax, TimelineMax)) : t(e.ScrollMagic || e.jQuery && e.jQuery.ScrollMagic, e.TweenMax || e.TweenLite, e.TimelineMax || e.TimelineLite)
    }(this, function(e, t, n) {
        "use strict";
        e.Scene.addOption("tweenChanges", !1, function(e) {
            return !!e
        }), e.Scene.extend(function() {
            var e, i = this;
            i.on("progress.plugin_gsap", function() {
                r()
            }), i.on("destroy.plugin_gsap", function(e) {
                i.removeTween(e.reset)
            });
            var r = function() {
                if (e) {
                    var t = i.progress(),
                        n = i.state();
                    e.repeat && -1 === e.repeat() ? "DURING" === n && e.paused() ? e.play() : "DURING" === n || e.paused() || e.pause() : t != e.progress() && (0 === i.duration() ? t > 0 ? e.play() : e.reverse() : i.tweenChanges() && e.tweenTo ? e.tweenTo(t * e.duration()) : e.progress(t).pause())
                }
            };
            i.setTween = function(o, s, a) {
                var l;
                arguments.length > 1 && (arguments.length < 3 && (a = s, s = 1), o = t.to(o, s, a));
                try {
                    l = n ? new n({
                        smoothChildTiming: !0
                    }).add(o) : o, l.pause()
                } catch (e) {
                    return i
                }
                return e && i.removeTween(), e = l, o.repeat && -1 === o.repeat() && (e.repeat(-1), e.yoyo(o.yoyo())), r(), i
            }, i.removeTween = function(t) {
                return e && (t && e.progress(0).pause(), e.kill(), e = void 0), i
            }
        })
    });
/*!
 * VERSION: 0.14.8
 * DATE: 2016-07-18
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * Requires TweenLite and CSSPlugin version 1.17.0 or later (TweenMax contains both TweenLite and CSSPlugin). ThrowPropsPlugin is required for momentum-based continuation of movement after the mouse/touch is released (ThrowPropsPlugin is a membership benefit of Club GreenSock - http://greensock.com/club/).
 *
 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("utils.Draggable", ["events.EventDispatcher", "TweenLite", "plugins.CSSPlugin"], function(e, t, n) {
            var i, r, o, s, a, l, u, c, h, f = {
                    css: {}
                },
                p = {
                    css: {}
                },
                d = {
                    css: {}
                },
                g = {
                    css: {}
                },
                m = _gsScope._gsDefine.globals,
                y = {},
                v = document,
                _ = v.documentElement || {},
                x = function(e) {
                    return v.createElementNS ? v.createElementNS("http://www.w3.org/1999/xhtml", e) : v.createElement(e)
                },
                w = x("div"),
                T = [],
                b = function() {
                    return !1
                },
                S = 180 / Math.PI,
                k = 999999999999999,
                P = Date.now || function() {
                    return (new Date).getTime()
                },
                C = !(v.addEventListener || !v.all),
                O = v.createElement("div"),
                E = [],
                M = {},
                A = 0,
                N = /^(?:a|input|textarea|button|select)$/i,
                D = 0,
                R = -1 !== navigator.userAgent.toLowerCase().indexOf("android"),
                L = 0,
                F = {},
                j = {},
                X = function(e) {
                    if ("string" == typeof e && (e = t.selector(e)), !e || e.nodeType) return [e];
                    var n, i = [],
                        r = e.length;
                    for (n = 0; n !== r; i.push(e[n++]));
                    return i
                },
                B = function(e) {
                    var t, n = {};
                    for (t in e) n[t] = e[t];
                    return n
                },
                I = function() {
                    for (var e = E.length; --e > -1;) E[e]()
                },
                q = function(e) {
                    E.push(e), 1 === E.length && t.ticker.addEventListener("tick", I, this, !1, 1)
                },
                z = function(e) {
                    for (var n = E.length; --n > -1;) E[n] === e && E.splice(n, 1);
                    t.to(Y, 0, {
                        overwrite: "all",
                        delay: 15,
                        onComplete: Y
                    })
                },
                Y = function() {
                    E.length || t.ticker.removeEventListener("tick", I)
                },
                H = function(e, t) {
                    var n;
                    for (n in t) void 0 === e[n] && (e[n] = t[n]);
                    return e
                },
                W = function() {
                    return null != window.pageYOffset ? window.pageYOffset : null != v.scrollTop ? v.scrollTop : _.scrollTop || v.body.scrollTop || 0
                },
                V = function() {
                    return null != window.pageXOffset ? window.pageXOffset : null != v.scrollLeft ? v.scrollLeft : _.scrollLeft || v.body.scrollLeft || 0
                },
                G = function(e, t) {
                    Re(e, "scroll", t), Q(e.parentNode) || G(e.parentNode, t)
                },
                U = function(e, t) {
                    Le(e, "scroll", t), Q(e.parentNode) || U(e.parentNode, t)
                },
                Q = function(e) {
                    return !(e && e !== _ && e !== v && e !== v.body && e !== window && e.nodeType && e.parentNode)
                },
                Z = function(e, t) {
                    var n = "x" === t ? "Width" : "Height",
                        i = "scroll" + n,
                        r = "client" + n,
                        o = v.body;
                    return Math.max(0, Q(e) ? Math.max(_[i], o[i]) - (window["inner" + n] || _[r] || o[r]) : e[i] - e[r])
                },
                K = function(e) {
                    var t = Q(e),
                        n = Z(e, "x"),
                        i = Z(e, "y");
                    t ? e = j : K(e.parentNode), e._gsMaxScrollX = n, e._gsMaxScrollY = i, e._gsScrollX = e.scrollLeft || 0, e._gsScrollY = e.scrollTop || 0
                },
                $ = function(e, t) {
                    return e = e || window.event, y.pageX = e.clientX + v.body.scrollLeft + _.scrollLeft, y.pageY = e.clientY + v.body.scrollTop + _.scrollTop, t && (e.returnValue = !1), y
                },
                J = function(e) {
                    return e ? ("string" == typeof e && (e = t.selector(e)), e.length && e !== window && e[0] && e[0].style && !e.nodeType && (e = e[0]), e === window || e.nodeType && e.style ? e : null) : e
                },
                ee = function(e, t) {
                    var n, r, o, s = e.style;
                    if (void 0 === s[t]) {
                        for (o = ["O", "Moz", "ms", "Ms", "Webkit"], r = 5, n = t.charAt(0).toUpperCase() + t.substr(1); --r > -1 && void 0 === s[o[r] + n];);
                        if (0 > r) return "";
                        i = 3 === r ? "ms" : o[r], t = i + n
                    }
                    return t
                },
                te = function(e, t, n) {
                    var i = e.style;
                    i && (void 0 === i[t] && (t = ee(e, t)), null == n ? i.removeProperty ? i.removeProperty(t.replace(/([A-Z])/g, "-$1").toLowerCase()) : i.removeAttribute(t) : void 0 !== i[t] && (i[t] = n))
                },
                ne = v.defaultView ? v.defaultView.getComputedStyle : b,
                ie = /(?:Left|Right|Width)/i,
                re = /(?:\d|\-|\+|=|#|\.)*/g,
                oe = function(e, t, n, i, r) {
                    if ("px" === i || !i) return n;
                    if ("auto" === i || !n) return 0;
                    var o, s = ie.test(t),
                        a = e,
                        l = w.style,
                        u = 0 > n;
                    return u && (n = -n), "%" === i && -1 !== t.indexOf("border") ? o = n / 100 * (s ? e.clientWidth : e.clientHeight) : (l.cssText = "border:0 solid red;position:" + ae(e, "position", !0) + ";line-height:0;", "%" !== i && a.appendChild ? l[s ? "borderLeftWidth" : "borderTopWidth"] = n + i : (a = e.parentNode || v.body, l[s ? "width" : "height"] = n + i), a.appendChild(w), o = parseFloat(w[s ? "offsetWidth" : "offsetHeight"]), a.removeChild(w), 0 !== o || r || (o = oe(e, t, n, i, !0))), u ? -o : o
                },
                se = function(e, t) {
                    if ("absolute" !== ae(e, "position", !0)) return 0;
                    var n = "left" === t ? "Left" : "Top",
                        i = ae(e, "margin" + n, !0);
                    return e["offset" + n] - (oe(e, t, parseFloat(i), (i + "").replace(re, "")) || 0)
                },
                ae = function(e, t, n) {
                    var i, r = (e._gsTransform || {})[t];
                    return r || 0 === r ? r : (e.style[t] ? r = e.style[t] : (i = ne(e)) ? (r = i.getPropertyValue(t.replace(/([A-Z])/g, "-$1").toLowerCase()), r = r || i.length ? r : i[t]) : e.currentStyle && (r = e.currentStyle[t]), "auto" !== r || "top" !== t && "left" !== t || (r = se(e, t)), n ? r : parseFloat(r) || 0)
                },
                le = function(e, t, n) {
                    var i = e.vars,
                        r = i[n],
                        o = e._listeners[t];
                    "function" == typeof r && r.apply(i[n + "Scope"] || i.callbackScope || e, i[n + "Params"] || [e.pointerEvent]), o && e.dispatchEvent(t)
                },
                ue = function(e, t) {
                    var n, i, r, o = J(e);
                    return o ? Ee(o, t) : void 0 !== e.left ? (r = be(t), {
                        left: e.left - r.x,
                        top: e.top - r.y,
                        width: e.width,
                        height: e.height
                    }) : (i = e.min || e.minX || e.minRotation || 0, n = e.min || e.minY || 0, {
                        left: i,
                        top: n,
                        width: (e.max || e.maxX || e.maxRotation || 0) - i,
                        height: (e.max || e.maxY || 0) - n
                    })
                },
                ce = function() {
                    if (!v.createElementNS) return s = 0, void(a = !1);
                    var e, t, n, i, r = x("div"),
                        o = v.createElementNS("http://www.w3.org/2000/svg", "svg"),
                        h = x("div"),
                        f = r.style,
                        p = v.body || _;
                    v.body && pe && (f.position = "absolute", p.appendChild(h), h.appendChild(r), i = r.offsetParent, h.style[pe] = "rotate(1deg)", c = r.offsetParent === i, h.style.position = "absolute", f.height = "10px", i = r.offsetTop, h.style.border = "5px solid red", u = i !== r.offsetTop, p.removeChild(h)), f = o.style, o.setAttributeNS(null, "width", "400px"), o.setAttributeNS(null, "height", "400px"), o.setAttributeNS(null, "viewBox", "0 0 400 400"), f.display = "block", f.boxSizing = "border-box", f.border = "0px solid red", f.transform = "none", r.style.cssText = "width:100px;height:100px;overflow:scroll;-ms-overflow-style:none;", p.appendChild(r), r.appendChild(o), n = o.createSVGPoint().matrixTransform(o.getScreenCTM()), t = n.y, r.scrollTop = 100, n.x = n.y = 0, n = n.matrixTransform(o.getScreenCTM()), l = t - n.y < 100.1 ? 0 : t - n.y - 150, r.removeChild(o), p.removeChild(r), p.appendChild(o), e = o.getScreenCTM(), t = e.e, f.border = "50px solid red", e = o.getScreenCTM(), 0 === t && 0 === e.e && 0 === e.f && 1 === e.a ? (s = 1, a = !0) : (s = t !== e.e ? 1 : 0, a = 1 !== e.a), p.removeChild(o)
                },
                he = "" !== ee(w, "perspective"),
                fe = ee(w, "transformOrigin").replace(/^ms/g, "Ms").replace(/([A-Z])/g, "-$1").toLowerCase(),
                pe = ee(w, "transform"),
                de = pe.replace(/^ms/g, "Ms").replace(/([A-Z])/g, "-$1").toLowerCase(),
                ge = {},
                me = {},
                ye = window.SVGElement,
                ve = function(e) {
                    return !!(ye && "function" == typeof e.getBBox && e.getCTM && (!e.parentNode || e.parentNode.getBBox && e.parentNode.getCTM))
                },
                _e = (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(navigator.userAgent) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(navigator.userAgent)) && parseFloat(RegExp.$1) < 11,
                xe = [],
                we = [],
                Te = function(e) {
                    if (!e.getBoundingClientRect || !e.parentNode || !pe) return {
                        offsetTop: 0,
                        offsetLeft: 0,
                        scaleX: 1,
                        scaleY: 1,
                        offsetParent: _
                    };
                    if (Ye.cacheSVGData !== !1 && e._gsCache && e._gsCache.lastUpdate === t.ticker.frame) return e._gsCache;
                    var n, i, r, o, u, c, h, f, p, d, g, m, y = e,
                        x = Se(e);
                    if (x.lastUpdate = t.ticker.frame, e.getBBox && !x.isSVGRoot) {
                        for (y = e.parentNode, n = e.getBBox(); y && "svg" !== (y.nodeName + "").toLowerCase();) y = y.parentNode;
                        return o = Te(y), x.offsetTop = n.y * o.scaleY, x.offsetLeft = n.x * o.scaleX, x.scaleX = o.scaleX, x.scaleY = o.scaleY, x.offsetParent = y || _, x
                    }
                    for (r = x.offsetParent, r === v.body && (r = _), we.length = xe.length = 0; y && (u = ae(y, pe, !0), "matrix(1, 0, 0, 1, 0, 0)" !== u && "none" !== u && "translate3d(0px, 0px, 0px)" !== u && (we.push(y), xe.push(y.style[pe]), y.style[pe] = "none"), y !== r);) y = y.parentNode;
                    for (i = r.getBoundingClientRect(), u = e.getScreenCTM(), f = e.createSVGPoint(), h = f.matrixTransform(u), f.x = f.y = 10, f = f.matrixTransform(u), x.scaleX = (f.x - h.x) / 10, x.scaleY = (f.y - h.y) / 10, void 0 === s && ce(), x.borderBox && !a && e.getAttribute("width") && (o = ne(e) || {}, p = parseFloat(o.borderLeftWidth) + parseFloat(o.borderRightWidth) || 0, d = parseFloat(o.borderTopWidth) + parseFloat(o.borderBottomWidth) || 0, g = parseFloat(o.width) || 0, m = parseFloat(o.height) || 0, x.scaleX *= (g - p) / g, x.scaleY *= (m - d) / m), l ? (n = e.getBoundingClientRect(), x.offsetLeft = n.left - i.left, x.offsetTop = n.top - i.top) : (x.offsetLeft = h.x - i.left, x.offsetTop = h.y - i.top), x.offsetParent = r, c = we.length; --c > -1;) we[c].style[pe] = xe[c];
                    return x
                },
                be = function(e, n) {
                    if (n = n || {}, !e || e === _ || !e.parentNode || e === window) return {
                        x: 0,
                        y: 0
                    };
                    var i = ne(e),
                        r = fe && i ? i.getPropertyValue(fe) : "50% 50%",
                        o = r.split(" "),
                        s = -1 !== r.indexOf("left") ? "0%" : -1 !== r.indexOf("right") ? "100%" : o[0],
                        a = -1 !== r.indexOf("top") ? "0%" : -1 !== r.indexOf("bottom") ? "100%" : o[1];
                    return ("center" === a || null == a) && (a = "50%"), ("center" === s || isNaN(parseFloat(s))) && (s = "50%"), e.getBBox && ve(e) ? (e._gsTransform || (t.set(e, {
                        x: "+=0",
                        overwrite: !1
                    }), void 0 === e._gsTransform.xOrigin && console.log("Draggable requires at least GSAP 1.17.0")), r = e.getBBox(), n.x = e._gsTransform.xOrigin - r.x, n.y = e._gsTransform.yOrigin - r.y) : (e.getBBox && -1 !== (s + a).indexOf("%") && (e = e.getBBox(), e = {
                        offsetWidth: e.width,
                        offsetHeight: e.height
                    }), n.x = -1 !== s.indexOf("%") ? e.offsetWidth * parseFloat(s) / 100 : parseFloat(s), n.y = -1 !== a.indexOf("%") ? e.offsetHeight * parseFloat(a) / 100 : parseFloat(a)), n
                },
                Se = function(e) {
                    if (Ye.cacheSVGData !== !1 && e._gsCache && e._gsCache.lastUpdate === t.ticker.frame) return e._gsCache;
                    var n, i = e._gsCache = e._gsCache || {},
                        r = ne(e),
                        o = e.getBBox && ve(e),
                        s = "svg" === (e.nodeName + "").toLowerCase();
                    if (i.isSVG = o, i.isSVGRoot = s, i.borderBox = "border-box" === r.boxSizing, i.computedStyle = r, s) n = e.parentNode || _, n.insertBefore(w, e), i.offsetParent = w.offsetParent || _, n.removeChild(w);
                    else if (o) {
                        for (n = e.parentNode; n && "svg" !== (n.nodeName + "").toLowerCase();) n = n.parentNode;
                        i.offsetParent = n
                    } else i.offsetParent = e.offsetParent;
                    return i
                },
                ke = function(e, t, n, i) {
                    if (e === window || !e || !e.style || !e.parentNode) return [1, 0, 0, 1, 0, 0];
                    var r, o, a, l, h, f, p, d, g, m, y, x, w, T, b = e._gsCache || Se(e),
                        S = e.parentNode,
                        k = S._gsCache || Se(S),
                        P = b.computedStyle,
                        C = b.isSVG ? k.offsetParent : S.offsetParent;
                    return r = b.isSVG && -1 !== (e.style[pe] + "").indexOf("matrix") ? e.style[pe] : P ? P.getPropertyValue(de) : e.currentStyle ? e.currentStyle[pe] : "1,0,0,1,0,0", e.getBBox && -1 !== (e.getAttribute("transform") + "").indexOf("matrix") && (r = e.getAttribute("transform")), r = (r + "").match(/(?:\-|\.|\b)(\d|\.|e\-)+/g) || [1, 0, 0, 1, 0, 0], r.length > 6 && (r = [r[0], r[1], r[4], r[5], r[12], r[13]]), i ? r[4] = r[5] = 0 : b.isSVG && (h = e._gsTransform) && (h.xOrigin || h.yOrigin) && (r[0] = parseFloat(r[0]), r[1] = parseFloat(r[1]), r[2] = parseFloat(r[2]), r[3] = parseFloat(r[3]), r[4] = parseFloat(r[4]) - (h.xOrigin - (h.xOrigin * r[0] + h.yOrigin * r[2])), r[5] = parseFloat(r[5]) - (h.yOrigin - (h.xOrigin * r[1] + h.yOrigin * r[3]))), t && (void 0 === s && ce(), a = b.isSVG || b.isSVGRoot ? Te(e) : e, b.isSVG ? (l = e.getBBox(), m = k.isSVGRoot ? {
                        x: 0,
                        y: 0
                    } : S.getBBox(), a = {
                        offsetLeft: l.x - m.x,
                        offsetTop: l.y - m.y,
                        offsetParent: b.offsetParent
                    }) : b.isSVGRoot ? (y = parseInt(P.borderTopWidth, 10) || 0, x = parseInt(P.borderLeftWidth, 10) || 0, w = (r[0] - s) * x + r[2] * y, T = r[1] * x + (r[3] - s) * y, f = t.x, p = t.y, d = f - (f * r[0] + p * r[2]), g = p - (f * r[1] + p * r[3]), r[4] = parseFloat(r[4]) + d, r[5] = parseFloat(r[5]) + g, t.x -= d, t.y -= g, f = a.scaleX, p = a.scaleY, t.x *= f, t.y *= p, r[0] *= f, r[1] *= p, r[2] *= f, r[3] *= p, _e || (t.x += w, t.y += T)) : !u && e.offsetParent && (t.x += parseInt(ae(e.offsetParent, "borderLeftWidth"), 10) || 0, t.y += parseInt(ae(e.offsetParent, "borderTopWidth"), 10) || 0), o = S === _ || S === v.body, r[4] = Number(r[4]) + t.x + (a.offsetLeft || 0) - n.x - (o ? 0 : S.scrollLeft || 0), r[5] = Number(r[5]) + t.y + (a.offsetTop || 0) - n.y - (o ? 0 : S.scrollTop || 0), S && "fixed" === ae(e, "position", P) && (r[4] += V(), r[5] += W()), !S || S === _ || C !== a.offsetParent || k.isSVG || c && "100100" !== ke(S).join("") || (a = k.isSVGRoot ? Te(S) : S, r[4] -= a.offsetLeft || 0, r[5] -= a.offsetTop || 0, u || !k.offsetParent || b.isSVG || b.isSVGRoot || (r[4] -= parseInt(ae(k.offsetParent, "borderLeftWidth"), 10) || 0, r[5] -= parseInt(ae(k.offsetParent, "borderTopWidth"), 10) || 0))), r
                },
                Pe = function(e, t) {
                    if (!e || e === window || !e.parentNode) return [1, 0, 0, 1, 0, 0];
                    for (var n, i, r, o, s, a, l, u, c = be(e, ge), h = be(e.parentNode, me), f = ke(e, c, h);
                        (e = e.parentNode) && e.parentNode && e !== _;) c = h, h = be(e.parentNode, c === ge ? me : ge), l = ke(e, c, h), n = f[0], i = f[1], r = f[2], o = f[3], s = f[4], a = f[5], f[0] = n * l[0] + i * l[2], f[1] = n * l[1] + i * l[3], f[2] = r * l[0] + o * l[2], f[3] = r * l[1] + o * l[3], f[4] = s * l[0] + a * l[2] + l[4], f[5] = s * l[1] + a * l[3] + l[5];
                    return t && (n = f[0], i = f[1], r = f[2], o = f[3], s = f[4], a = f[5], u = n * o - i * r, f[0] = o / u, f[1] = -i / u, f[2] = -r / u, f[3] = n / u, f[4] = (r * a - o * s) / u, f[5] = -(n * a - i * s) / u), f
                },
                Ce = function(e, t, n, i, r) {
                    e = J(e);
                    var o = Pe(e, !1, r),
                        s = t.x,
                        a = t.y;
                    return n && (be(e, t), s -= t.x, a -= t.y), i = i === !0 ? t : i || {}, i.x = s * o[0] + a * o[2] + o[4], i.y = s * o[1] + a * o[3] + o[5], i
                },
                Oe = function(e, t, n) {
                    var i = e.x * t[0] + e.y * t[2] + t[4],
                        r = e.x * t[1] + e.y * t[3] + t[5];
                    return e.x = i * n[0] + r * n[2] + n[4], e.y = i * n[1] + r * n[3] + n[5], e
                },
                Ee = function(e, t, n) {
                    if (!(e = J(e))) return null;
                    t = J(t);
                    var i, r, o, s, a, l, u, c, h, f, p, d, g, m, y, x, w, T, b, S, k, P, O = e.getBBox && ve(e);
                    if (e === window) s = W(), r = V(), o = r + (_.clientWidth || e.innerWidth || v.body.clientWidth || 0), a = s + ((e.innerHeight || 0) - 20 < _.clientHeight ? _.clientHeight : e.innerHeight || v.body.clientHeight || 0);
                    else {
                        if (void 0 === t || t === window) return e.getBoundingClientRect();
                        i = be(e), r = -i.x, s = -i.y, O ? (d = e.getBBox(), g = d.width, m = d.height) : "svg" !== (e.nodeName + "").toLowerCase() && e.offsetWidth ? (g = e.offsetWidth, m = e.offsetHeight) : (k = ne(e), g = parseFloat(k.width), m = parseFloat(k.height)), o = r + g, a = s + m, "svg" !== e.nodeName.toLowerCase() || C || (y = Te(e), P = y.computedStyle || {}, T = (e.getAttribute("viewBox") || "0 0").split(" "), b = parseFloat(T[0]), S = parseFloat(T[1]), x = parseFloat(P.borderLeftWidth) || 0, w = parseFloat(P.borderTopWidth) || 0, o -= g - (g - x) / y.scaleX - b, a -= m - (m - w) / y.scaleY - S, r -= x / y.scaleX - b, s -= w / y.scaleY - S, k && (o += (parseFloat(P.borderRightWidth) + x) / y.scaleX, a += (w + parseFloat(P.borderBottomWidth)) / y.scaleY))
                    }
                    return e === t ? {
                        left: r,
                        top: s,
                        width: o - r,
                        height: a - s
                    } : (l = Pe(e), u = Pe(t, !0), c = Oe({
                        x: r,
                        y: s
                    }, l, u), h = Oe({
                        x: o,
                        y: s
                    }, l, u), f = Oe({
                        x: o,
                        y: a
                    }, l, u), p = Oe({
                        x: r,
                        y: a
                    }, l, u), r = Math.min(c.x, h.x, f.x, p.x), s = Math.min(c.y, h.y, f.y, p.y), F.x = F.y = 0, n && be(t, F), {
                        left: r + F.x,
                        top: s + F.y,
                        width: Math.max(c.x, h.x, f.x, p.x) - r,
                        height: Math.max(c.y, h.y, f.y, p.y) - s
                    })
                },
                Me = function(e) {
                    return !!(e && e.length && e[0] && (e[0].nodeType && e[0].style && !e.nodeType || e[0].length && e[0][0]))
                },
                Ae = function(e) {
                    var t, n, i, r = [],
                        o = e.length;
                    for (t = 0; o > t; t++)
                        if (n = e[t], Me(n))
                            for (i = n.length, i = 0; i < n.length; i++) r.push(n[i]);
                        else n && 0 !== n.length && r.push(n);
                    return r
                },
                Ne = "ontouchstart" in _ && "orientation" in window,
                De = function(e) {
                    for (var t = e.split(","), n = (void 0 !== w.onpointerdown ? "pointerdown,pointermove,pointerup,pointercancel" : void 0 !== w.onmspointerdown ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel" : e).split(","), i = {}, r = 8; --r > -1;) i[t[r]] = n[r], i[n[r]] = t[r];
                    return i
                }("touchstart,touchmove,touchend,touchcancel"),
                Re = function(e, t, n, i) {
                    e.addEventListener ? e.addEventListener(De[t] || t, n, i) : e.attachEvent && e.attachEvent("on" + t, n)
                },
                Le = function(e, t, n) {
                    e.removeEventListener ? e.removeEventListener(De[t] || t, n) : e.detachEvent && e.detachEvent("on" + t, n)
                },
                Fe = function(e, t) {
                    for (var n = e.length; --n > -1;)
                        if (e[n].identifier === t) return !0;
                    return !1
                },
                je = function(e) {
                    r = e.touches && D < e.touches.length, Le(e.target, "touchend", je)
                },
                Xe = function(e) {
                    r = e.touches && D < e.touches.length, Re(e.target, "touchend", je)
                },
                Be = function(e, t, n, i, r, o) {
                    var s, a, l, u = {};
                    if (t)
                        if (1 !== r && t instanceof Array) {
                            for (u.end = s = [], l = t.length, a = 0; l > a; a++) s[a] = t[a] * r;
                            n += 1.1, i -= 1.1
                        } else "function" == typeof t ? u.end = function(n) {
                            return t.call(e, n) * r
                        } : u.end = t;
                    return (n || 0 === n) && (u.max = n), (i || 0 === i) && (u.min = i), o && (u.velocity = 0), u
                },
                Ie = function(e) {
                    var t;
                    return !(!e || !e.getAttribute || "BODY" === e.nodeName) && (!("true" !== (t = e.getAttribute("data-clickable")) && ("false" === t || !e.onclick && !N.test(e.nodeName + "") && "true" !== e.getAttribute("contentEditable"))) || Ie(e.parentNode))
                },
                qe = function(e, t) {
                    for (var n, i = e.length; --i > -1;) n = e[i], n.ondragstart = n.onselectstart = t ? null : b, te(n, "userSelect", t ? "text" : "none")
                },
                ze = function() {
                    var e, t = v.createElement("div"),
                        n = v.createElement("div"),
                        i = n.style,
                        r = v.body || w;
                    return i.display = "inline-block", i.position = "relative", t.style.cssText = n.innerHTML = "width:90px; height:40px; padding:10px; overflow:auto; visibility: hidden", t.appendChild(n), r.appendChild(t), h = n.offsetHeight + 18 > t.scrollHeight, i.width = "100%", pe || (i.paddingRight = "500px", e = t.scrollLeft = t.scrollWidth - t.clientWidth, i.left = "-90px", e = e !== t.scrollLeft), r.removeChild(t), e
                }(),
                $e = function(e, n) {
                    e = J(e), n = n || {};
                    var i, r, o, s, a, l, u = v.createElement("div"),
                        c = u.style,
                        f = e.firstChild,
                        p = 0,
                        d = 0,
                        g = e.scrollTop,
                        m = e.scrollLeft,
                        y = e.scrollWidth,
                        _ = e.scrollHeight,
                        x = 0,
                        w = 0,
                        T = 0;
                    he && n.force3D !== !1 ? (a = "translate3d(", l = "px,0px)") : pe && (a = "translate(", l = "px)"), this.scrollTop = function(e, t) {
                        return arguments.length ? void this.top(-e, t) : -this.top()
                    }, this.scrollLeft = function(e, t) {
                        return arguments.length ? void this.left(-e, t) : -this.left()
                    }, this.left = function(i, r) {
                        if (!arguments.length) return -(e.scrollLeft + d);
                        var o = e.scrollLeft - m,
                            s = d;
                        return (o > 2 || -2 > o) && !r ? (m = e.scrollLeft, t.killTweensOf(this, !0, {
                            left: 1,
                            scrollLeft: 1
                        }), this.left(-m), void(n.onKill && n.onKill())) : (i = -i, 0 > i ? (d = i - .5 | 0, i = 0) : i > w ? (d = i - w | 0, i = w) : d = 0, (d || s) && (a ? this._suspendTransforms || (c[pe] = a + -d + "px," + -p + l) : c.left = -d + "px", ze && d + x >= 0 && (c.paddingRight = d + x + "px")), e.scrollLeft = 0 | i, void(m = e.scrollLeft))
                    }, this.top = function(i, r) {
                        if (!arguments.length) return -(e.scrollTop + p);
                        var o = e.scrollTop - g,
                            s = p;
                        return (o > 2 || -2 > o) && !r ? (g = e.scrollTop, t.killTweensOf(this, !0, {
                            top: 1,
                            scrollTop: 1
                        }), this.top(-g), void(n.onKill && n.onKill())) : (i = -i, 0 > i ? (p = i - .5 | 0, i = 0) : i > T ? (p = i - T | 0, i = T) : p = 0, (p || s) && (a ? this._suspendTransforms || (c[pe] = a + -d + "px," + -p + l) : c.top = -p + "px"), e.scrollTop = 0 | i, void(g = e.scrollTop))
                    }, this.maxScrollTop = function() {
                        return T
                    }, this.maxScrollLeft = function() {
                        return w
                    }, this.disable = function() {
                        for (f = u.firstChild; f;) s = f.nextSibling, e.appendChild(f), f = s;
                        e === u.parentNode && e.removeChild(u)
                    }, this.enable = function() {
                        if (f = e.firstChild, f !== u) {
                            for (; f;) s = f.nextSibling, u.appendChild(f), f = s;
                            e.appendChild(u), this.calibrate()
                        }
                    }, this.calibrate = function(t) {
                        var n, s, a = e.clientWidth === i;
                        g = e.scrollTop, m = e.scrollLeft, (!a || e.clientHeight !== r || u.offsetHeight !== o || y !== e.scrollWidth || _ !== e.scrollHeight || t) && ((p || d) && (n = this.left(), s = this.top(), this.left(-e.scrollLeft), this.top(-e.scrollTop)), (!a || t) && (c.display = "block", c.width = "auto", c.paddingRight = "0px", x = Math.max(0, e.scrollWidth - e.clientWidth), x && (x += ae(e, "paddingLeft") + (h ? ae(e, "paddingRight") : 0))), c.display = "inline-block", c.position = "relative", c.overflow = "visible", c.verticalAlign = "top", c.width = "100%", c.paddingRight = x + "px", h && (c.paddingBottom = ae(e, "paddingBottom", !0)), C && (c.zoom = "1"), i = e.clientWidth, r = e.clientHeight, y = e.scrollWidth, _ = e.scrollHeight, w = e.scrollWidth - i, T = e.scrollHeight - r, o = u.offsetHeight, c.display = "block", (n || s) && (this.left(n), this.top(s)))
                    }, this.content = u, this.element = e, this._suspendTransforms = !1, this.enable()
                },
                Ye = function(i, s) {
                    e.call(this, i), i = J(i), o || (o = m.com.greensock.plugins.ThrowPropsPlugin), this.vars = s = B(s || {}), this.target = i, this.x = this.y = this.rotation = 0, this.dragResistance = parseFloat(s.dragResistance) || 0, this.edgeResistance = isNaN(s.edgeResistance) ? 1 : parseFloat(s.edgeResistance) || 0, this.lockAxis = s.lockAxis, this.autoScroll = s.autoScroll || 0, this.lockedAxis = null, this.allowEventDefault = !!s.allowEventDefault;
                    var a, l, u, c, h, y, x, w, b, E, N, F, I, Y, W, V, Z, ee, ne, ie, re, oe, se, ce, he, fe, pe, de, ge, me, ye, ve, _e, xe = (s.type || (C ? "top,left" : "x,y")).toLowerCase(),
                        we = -1 !== xe.indexOf("x") || -1 !== xe.indexOf("y"),
                        Te = -1 !== xe.indexOf("rotation"),
                        be = Te ? "rotation" : we ? "x" : "left",
                        Se = we ? "y" : "top",
                        ke = -1 !== xe.indexOf("x") || -1 !== xe.indexOf("left") || "scroll" === xe,
                        Oe = -1 !== xe.indexOf("y") || -1 !== xe.indexOf("top") || "scroll" === xe,
                        Ee = s.minimumMovement || 2,
                        Me = this,
                        Ae = X(s.trigger || s.handle || i),
                        je = {},
                        ze = 0,
                        He = !1,
                        We = s.clickableTest || Ie,
                        Ve = 0,
                        Ue = function(e) {
                            if (Me.autoScroll && Me.isDragging && (He || ee)) {
                                var t, n, r, o, s, a, u, c, h = i,
                                    f = 15 * Me.autoScroll;
                                for (He = !1, j.scrollTop = null != window.pageYOffset ? window.pageYOffset : null != _.scrollTop ? _.scrollTop : v.body.scrollTop, j.scrollLeft = null != window.pageXOffset ? window.pageXOffset : null != _.scrollLeft ? _.scrollLeft : v.body.scrollLeft, o = Me.pointerX - j.scrollLeft, s = Me.pointerY - j.scrollTop; h && !n;) n = Q(h.parentNode), t = n ? j : h.parentNode, r = n ? {
                                    bottom: Math.max(_.clientHeight, window.innerHeight || 0),
                                    right: Math.max(_.clientWidth, window.innerWidth || 0),
                                    left: 0,
                                    top: 0
                                } : t.getBoundingClientRect(), a = u = 0, Oe && (c = t._gsMaxScrollY - t.scrollTop, 0 > c ? u = c : s > r.bottom - 40 && c ? (He = !0, u = Math.min(c, f * (1 - Math.max(0, r.bottom - s) / 40) | 0)) : s < r.top + 40 && t.scrollTop && (He = !0, u = -Math.min(t.scrollTop, f * (1 - Math.max(0, s - r.top) / 40) | 0)), u && (t.scrollTop += u)), ke && (c = t._gsMaxScrollX - t.scrollLeft, 0 > c ? a = c : o > r.right - 40 && c ? (He = !0, a = Math.min(c, f * (1 - Math.max(0, r.right - o) / 40) | 0)) : o < r.left + 40 && t.scrollLeft && (He = !0, a = -Math.min(t.scrollLeft, f * (1 - Math.max(0, o - r.left) / 40) | 0)), a && (t.scrollLeft += a)), n && (a || u) && (window.scrollTo(t.scrollLeft, t.scrollTop), lt(Me.pointerX + a, Me.pointerY + u)), h = t
                            }
                            if (ee) {
                                var p = Me.x,
                                    d = Me.y,
                                    g = 1e-6;
                                g > p && p > -g && (p = 0), g > d && d > -g && (d = 0), Te ? (de.data.rotation = Me.rotation = p, de.setRatio(1)) : l ? (Oe && l.top(d), ke && l.left(p)) : we ? (Oe && (de.data.y = d), ke && (de.data.x = p), de.setRatio(1)) : (Oe && (i.style.top = d + "px"), ke && (i.style.left = p + "px")), !w || e || ye || (ye = !0, le(Me, "drag", "onDrag"), ye = !1)
                            }
                            ee = !1
                        },
                        Qe = function(e, n) {
                            var r;
                            Me.x, Me.y, i._gsTransform || !we && !Te || t.set(i, {
                                x: "+=0",
                                overwrite: !1
                            }), we ? (Me.y = i._gsTransform.y, Me.x = i._gsTransform.x) : Te ? Me.x = Me.rotation = i._gsTransform.rotation : l ? (Me.y = l.top(), Me.x = l.left()) : (Me.y = parseInt(i.style.top, 10) || 0, Me.x = parseInt(i.style.left, 10) || 0), !ie && !re || n || (ie && (r = ie(Me.x), r !== Me.x && (Me.x = r, Te && (Me.rotation = r), ee = !0)), re && (r = re(Me.y), r !== Me.y && (Me.y = r), ee = !0)), ee && Ue(!0), e || le(Me, "throwupdate", "onThrowUpdate")
                        },
                        Ze = function() {
                            var e, t, n, r;
                            x = !1, l ? (l.calibrate(), Me.minX = E = -l.maxScrollLeft(), Me.minY = F = -l.maxScrollTop(), Me.maxX = b = Me.maxY = N = 0, x = !0) : s.bounds && (e = ue(s.bounds, i.parentNode), Te ? (Me.minX = E = e.left, Me.maxX = b = e.left + e.width, Me.minY = F = Me.maxY = N = 0) : void 0 !== s.bounds.maxX || void 0 !== s.bounds.maxY ? (e = s.bounds, Me.minX = E = e.minX, Me.minY = F = e.minY, Me.maxX = b = e.maxX, Me.maxY = N = e.maxY) : (t = ue(i, i.parentNode), Me.minX = E = ae(i, be) + e.left - t.left, Me.minY = F = ae(i, Se) + e.top - t.top, Me.maxX = b = E + (e.width - t.width), Me.maxY = N = F + (e.height - t.height)), E > b && (Me.minX = b, Me.maxX = b = E, E = Me.minX), F > N && (Me.minY = N, Me.maxY = N = F, F = Me.minY), Te && (Me.minRotation = E, Me.maxRotation = b), x = !0), s.liveSnap && (n = s.liveSnap === !0 ? s.snap || {} : s.liveSnap, r = n instanceof Array || "function" == typeof n, Te ? (ie = ot(r ? n : n.rotation, E, b, 1), re = null) : (ke && (ie = ot(r ? n : n.x || n.left || n.scrollLeft, E, b, l ? -1 : 1)), Oe && (re = ot(r ? n : n.y || n.top || n.scrollTop, F, N, l ? -1 : 1))))
                        },
                        Ke = function() {
                            Me.isThrowing = !1, le(Me, "throwcomplete", "onThrowComplete")
                        },
                        Je = function() {
                            Me.isThrowing = !1
                        },
                        et = function(e, t) {
                            var n, r, a, u;
                            e && o ? (e === !0 && (n = s.snap || {}, r = n instanceof Array || "function" == typeof n, e = {
                                resistance: (s.throwResistance || s.resistance || 1e3) / (Te ? 10 : 1)
                            }, Te ? e.rotation = Be(Me, r ? n : n.rotation, b, E, 1, t) : (ke && (e[be] = Be(Me, r ? n : n.x || n.left || n.scrollLeft, b, E, l ? -1 : 1, t || "x" === Me.lockedAxis)), Oe && (e[Se] = Be(Me, r ? n : n.y || n.top || n.scrollTop, N, F, l ? -1 : 1, t || "y" === Me.lockedAxis)))), Me.isThrowing = !0, u = isNaN(s.overshootTolerance) ? 1 === s.edgeResistance ? 0 : 1 - Me.edgeResistance + .2 : s.overshootTolerance, Me.tween = a = o.to(l || i, {
                                throwProps: e,
                                ease: s.ease || m.Power3.easeOut,
                                onComplete: Ke,
                                onOverwrite: Je,
                                onUpdate: s.fastMode ? le : Qe,
                                onUpdateParams: s.fastMode ? [Me, "onthrowupdate", "onThrowUpdate"] : T
                            }, isNaN(s.maxDuration) ? 2 : s.maxDuration, isNaN(s.minDuration) ? 0 === u ? 0 : .5 : s.minDuration, u), s.fastMode || (l && (l._suspendTransforms = !0), a.render(a.duration(), !0, !0), Qe(!0, !0), Me.endX = Me.x, Me.endY = Me.y, Te && (Me.endRotation = Me.x), a.play(0), Qe(!0, !0), l && (l._suspendTransforms = !1))) : x && Me.applyBounds()
                        },
                        tt = function(e) {
                            var t, n, r, o, s, a, l, h, f, p = ce || [1, 0, 0, 1, 0, 0];
                            ce = Pe(i.parentNode, !0), e && Me.isPressed && p.join(",") !== ce.join(",") && (t = p[0], n = p[1], r = p[2], o = p[3], s = p[4], a = p[5], l = t * o - n * r, h = u * (o / l) + c * (-r / l) + (r * a - o * s) / l, f = u * (-n / l) + c * (t / l) + -(t * a - n * s) / l, c = h * ce[1] + f * ce[3] + ce[5], u = h * ce[0] + f * ce[2] + ce[4]), ce[1] || ce[2] || 1 != ce[0] || 1 != ce[3] || 0 != ce[4] || 0 != ce[5] || (ce = null)
                        },
                        nt = function() {
                            var e = 1 - Me.edgeResistance;
                            tt(!1), ce && (u = Me.pointerX * ce[0] + Me.pointerY * ce[2] + ce[4], c = Me.pointerX * ce[1] + Me.pointerY * ce[3] + ce[5]), ee && (lt(Me.pointerX, Me.pointerY), Ue(!0)), l ? (Ze(), y = l.top(), h = l.left()) : (it() ? (Qe(!0, !0), Ze()) : Me.applyBounds(), Te ? (Z = Ce(i, {
                                x: 0,
                                y: 0
                            }), Qe(!0, !0), h = Me.x, y = Me.y = Math.atan2(Z.y - Me.pointerY, Me.pointerX - Z.x) * S) : (fe = i.parentNode ? i.parentNode.scrollTop || 0 : 0, pe = i.parentNode ? i.parentNode.scrollLeft || 0 : 0, y = ae(i, Se), h = ae(i, be))), x && e && (h > b ? h = b + (h - b) / e : E > h && (h = E - (E - h) / e), Te || (y > N ? y = N + (y - N) / e : F > y && (y = F - (F - y) / e)))
                        },
                        it = function() {
                            return Me.tween && Me.tween.isActive()
                        },
                        rt = function() {
                            !O.parentNode || it() || Me.isDragging || O.parentNode.removeChild(O)
                        },
                        ot = function(e, t, n, i) {
                            return "function" == typeof e ? function(r) {
                                var o = Me.isPressed ? 1 - Me.edgeResistance : 1;
                                return e.call(Me, r > n ? n + (r - n) * o : t > r ? t + (r - t) * o : r) * i
                            } : e instanceof Array ? function(i) {
                                for (var r, o, s = e.length, a = 0, l = k; --s > -1;) r = e[s], o = r - i, 0 > o && (o = -o), l > o && r >= t && n >= r && (a = s, l = o);
                                return e[a]
                            } : isNaN(e) ? function(e) {
                                return e
                            } : function() {
                                return e * i
                            }
                        },
                        st = function(e) {
                            var n;
                            if (!(!a || Me.isPressed || !e || ("mousedown" === e.type || "pointerdown" === e.type) && P() - Ve < 30 && De[Me.pointerEvent.type])) {
                                if (he = it(), Me.pointerEvent = e, De[e.type] ? (se = -1 !== e.type.indexOf("touch") ? e.currentTarget || e.target : v, Re(se, "touchend", ut), Re(se, "touchmove", at), Re(se, "touchcancel", ut), Re(v, "touchstart", Xe)) : (se = null, Re(v, "mousemove", at)), me = null, Re(v, "mouseup", ut), e && e.target && Re(e.target, "mouseup", ut), oe = We.call(Me, e.target) && !s.dragClickables) return Re(e.target, "change", ut), le(Me, "press", "onPress"), void qe(Ae, !0);
                                if (ge = !(!se || ke === Oe || l || Me.vars.allowNativeTouchScrolling === !1) && (ke ? "y" : "x"), C ? e = $(e, !0) : ge || Me.allowEventDefault || (e.preventDefault(), e.preventManipulation && e.preventManipulation()), e.changedTouches ? (e = W = e.changedTouches[0], V = e.identifier) : e.pointerId ? V = e.pointerId : W = V = null, D++, q(Ue), c = Me.pointerY = e.pageY, u = Me.pointerX = e.pageX, (ge || Me.autoScroll) && K(i.parentNode), i.parentNode && (l || Me.autoScroll && !Te && i.parentNode._gsMaxScrollX && !O.parentNode) && !i.getBBox && (O.style.width = i.parentNode.scrollWidth + "px", i.parentNode.appendChild(O)), nt(), Me.tween && Me.tween.kill(), Me.isThrowing = !1, t.killTweensOf(l || i, !0, je), l && t.killTweensOf(i, !0, {
                                        scrollTo: 1
                                    }), Me.tween = Me.lockedAxis = null, (s.zIndexBoost || !Te && !l && s.zIndexBoost !== !1) && (i.style.zIndex = Ye.zIndex++), Me.isPressed = !0, w = !(!s.onDrag && !Me._listeners.drag), !Te)
                                    for (n = Ae.length; --n > -1;) te(Ae[n], "cursor", s.cursor || "move");
                                le(Me, "press", "onPress")
                            }
                        },
                        at = function(e) {
                            var t, n, i, o, s = e;
                            if (a && !r && Me.isPressed && e) {
                                if (Me.pointerEvent = e, t = e.changedTouches) {
                                    if (e = t[0], e !== W && e.identifier !== V) {
                                        for (o = t.length; --o > -1 && (e = t[o]).identifier !== V;);
                                        if (0 > o) return
                                    }
                                } else if (e.pointerId && V && e.pointerId !== V) return;
                                if (C) e = $(e, !0);
                                else {
                                    if (se && ge && !me && (n = e.pageX, i = e.pageY, ce && (o = n * ce[0] + i * ce[2] + ce[4], i = n * ce[1] + i * ce[3] + ce[5], n = o), me = Math.abs(n - u) > Math.abs(i - c) && ke ? "x" : "y", Me.vars.lockAxisOnTouchScroll !== !1 && (Me.lockedAxis = "x" === me ? "y" : "x", "function" == typeof Me.vars.onLockAxis && Me.vars.onLockAxis.call(Me, s)), R && ge === me)) return void ut(s);
                                    Me.allowEventDefault || ge && (!me || ge === me) || s.cancelable === !1 || (s.preventDefault(), s.preventManipulation && s.preventManipulation())
                                }
                                Me.autoScroll && (He = !0), lt(e.pageX, e.pageY)
                            }
                        },
                        lt = function(e, t) {
                            var n, i, r, o, s, a, l = 1 - Me.dragResistance,
                                f = 1 - Me.edgeResistance;
                            Me.pointerX = e, Me.pointerY = t, Te ? (o = Math.atan2(Z.y - t, e - Z.x) * S, s = Me.y - o, Me.y = o, s > 180 ? y -= 360 : -180 > s && (y += 360), r = h + (y - o) * l) : (ce && (a = e * ce[0] + t * ce[2] + ce[4], t = e * ce[1] + t * ce[3] + ce[5], e = a), i = t - c, n = e - u, Ee > i && i > -Ee && (i = 0), Ee > n && n > -Ee && (n = 0), (Me.lockAxis || Me.lockedAxis) && (n || i) && (a = Me.lockedAxis, a || (Me.lockedAxis = a = ke && Math.abs(n) > Math.abs(i) ? "y" : Oe ? "x" : null, a && "function" == typeof Me.vars.onLockAxis && Me.vars.onLockAxis.call(Me, Me.pointerEvent)), "y" === a ? i = 0 : "x" === a && (n = 0)), r = h + n * l, o = y + i * l), ie || re ? (ie && (r = ie(r)), re && (o = re(o))) : x && (r > b ? r = b + (r - b) * f : E > r && (r = E + (r - E) * f), Te || (o > N ? o = N + (o - N) * f : F > o && (o = F + (o - F) * f))), Te || (r = Math.round(r), o = Math.round(o)), (Me.x !== r || Me.y !== o && !Te) && (Te ? Me.endRotation = Me.x = Me.endX = r : (Oe && (Me.y = Me.endY = o), ke && (Me.x = Me.endX = r)), ee = !0, !Me.isDragging && Me.isPressed && (Me.isDragging = !0, le(Me, "dragstart", "onDragStart")))
                        },
                        ut = function(e, n) {
                            if (a && Me.isPressed && (!e || null == V || n || !(e.pointerId && e.pointerId !== V || e.changedTouches && !Fe(e.changedTouches, V)))) {
                                Me.isPressed = !1;
                                var r, o, l, u, c, h = e,
                                    f = Me.isDragging,
                                    p = t.delayedCall(.001, rt);
                                if (se ? (Le(se, "touchend", ut), Le(se, "touchmove", at), Le(se, "touchcancel", ut), Le(v, "touchstart", Xe)) : Le(v, "mousemove", at), Le(v, "mouseup", ut), e && e.target && Le(e.target, "mouseup", ut), ee = !1, oe) return e && Le(e.target, "change", ut), qe(Ae, !1), le(Me, "release", "onRelease"), le(Me, "click", "onClick"), void(oe = !1);
                                if (z(Ue), !Te)
                                    for (o = Ae.length; --o > -1;) te(Ae[o], "cursor", s.cursor || "move");
                                if (f && (ze = L = P(), Me.isDragging = !1), D--, e) {
                                    if (C && (e = $(e, !1)), r = e.changedTouches, r && (e = r[0], e !== W && e.identifier !== V)) {
                                        for (o = r.length; --o > -1 && (e = r[o]).identifier !== V;);
                                        if (0 > o) return
                                    }
                                    Me.pointerEvent = h, Me.pointerX = e.pageX, Me.pointerY = e.pageY
                                }
                                return h && !f ? (he && (s.snap || s.bounds) && et(s.throwProps), le(Me, "release", "onRelease"), R && "touchmove" === h.type || (le(Me, "click", "onClick"), u = h.target || h.srcElement || i, Ve = P(), c = function() {
                                    Ve !== ve && Me.enabled() && !Me.isPressed && (u.click ? u.click() : v.createEvent && (l = v.createEvent("MouseEvents"), l.initMouseEvent("click", !0, !0, window, 1, Me.pointerEvent.screenX, Me.pointerEvent.screenY, Me.pointerX, Me.pointerY, !1, !1, !1, !1, 0, null), u.dispatchEvent(l)))
                                }, R || t.delayedCall(1e-5, c))) : (et(s.throwProps), C || Me.allowEventDefault || !h || !s.dragClickables && We.call(Me, h.target) || !f || ge && (!me || ge !== me) || h.cancelable === !1 || (h.preventDefault(), h.preventManipulation && h.preventManipulation()), le(Me, "release", "onRelease")), it() && p.duration(Me.tween.duration()), f && le(Me, "dragend", "onDragEnd"), !0
                            }
                        },
                        ct = function(e) {
                            if (e && Me.isDragging) {
                                var t = e.target || e.srcElement || i.parentNode,
                                    n = t.scrollLeft - t._gsScrollX,
                                    r = t.scrollTop - t._gsScrollY;
                                (n || r) && (ce ? (u -= n * ce[0] + r * ce[2], c -= r * ce[3] + n * ce[1]) : (u -= n, c -= r), t._gsScrollX += n, t._gsScrollY += r, lt(Me.pointerX, Me.pointerY))
                            }
                        },
                        ht = function(e) {
                            var t = P(),
                                n = 40 > t - Ve,
                                i = 40 > t - ze,
                                r = n && ve === Ve,
                                o = !!e.preventDefault,
                                s = n && _e === Ve,
                                a = e.isTrusted || null == e.isTrusted && n && r;
                            return o && (r || i && Me.vars.suppressClickOnDrag !== !1) && e.stopImmediatePropagation(), !n || r && a === s ? void((Me.isPressed || i || n) && (o ? a && e.detail && n || (e.preventDefault(), e.preventManipulation && e.preventManipulation()) : e.returnValue = !1)) : (a && r && (_e = Ve), void(ve = Ve))
                        };
                    ne = Ye.get(this.target), ne && ne.kill(), this.startDrag = function(e) {
                        st(e), Me.isDragging || (Me.isDragging = !0, le(Me, "dragstart", "onDragStart"))
                    }, this.drag = at, this.endDrag = function(e) {
                        ut(e, !0)
                    }, this.timeSinceDrag = function() {
                        return Me.isDragging ? 0 : (P() - ze) / 1e3
                    }, this.hitTest = function(e, t) {
                        return Ye.hitTest(Me.target, e, t)
                    }, this.getDirection = function(e, t) {
                        var n, i, r, s, a, l, u = "velocity" === e && o ? e : "object" != typeof e || Te ? "start" : "element";
                        return "element" === u && (a = Ge(Me.target), l = Ge(e)), n = "start" === u ? Me.x - h : "velocity" === u ? o.getVelocity(this.target, be) : a.left + a.width / 2 - (l.left + l.width / 2), Te ? 0 > n ? "counter-clockwise" : "clockwise" : (t = t || 2, i = "start" === u ? Me.y - y : "velocity" === u ? o.getVelocity(this.target, Se) : a.top + a.height / 2 - (l.top + l.height / 2), r = Math.abs(n / i), s = 1 / t > r ? "" : 0 > n ? "left" : "right", t > r && ("" !== s && (s += "-"), s += 0 > i ? "up" : "down"), s)
                    }, this.applyBounds = function(e) {
                        var t, n, r, o, a, l;
                        if (e && s.bounds !== e) return s.bounds = e, Me.update(!0);
                        if (Qe(!0), Ze(), x) {
                            if (t = Me.x, n = Me.y, t > b ? t = b : E > t && (t = E), n > N ? n = N : F > n && (n = F), (Me.x !== t || Me.y !== n) && (r = !0, Me.x = Me.endX = t, Te ? Me.endRotation = t : Me.y = Me.endY = n, ee = !0, Ue(!0), Me.autoScroll && !Me.isDragging))
                                for (K(i.parentNode), o = i, j.scrollTop = null != window.pageYOffset ? window.pageYOffset : null != _.scrollTop ? _.scrollTop : v.body.scrollTop, j.scrollLeft = null != window.pageXOffset ? window.pageXOffset : null != _.scrollLeft ? _.scrollLeft : v.body.scrollLeft; o && !l;) l = Q(o.parentNode), a = l ? j : o.parentNode, Oe && a.scrollTop > a._gsMaxScrollY && (a.scrollTop = a._gsMaxScrollY), ke && a.scrollLeft > a._gsMaxScrollX && (a.scrollLeft = a._gsMaxScrollX), o = a;
                            Me.isThrowing && (r || Me.endX > b || Me.endX < E || Me.endY > N || Me.endY < F) && et(s.throwProps, r)
                        }
                        return Me
                    }, this.update = function(e, t, n) {
                        var r = Me.x,
                            o = Me.y;
                        return tt(!t), e ? Me.applyBounds() : (ee && n && Ue(!0), Qe(!0)), t && (lt(Me.pointerX, Me.pointerY), ee && Ue(!0)), Me.isPressed && !t && (ke && Math.abs(r - Me.x) > .01 || Oe && Math.abs(o - Me.y) > .01 && !Te) && nt(), Me.autoScroll && (K(i.parentNode), He = Me.isDragging, Ue(!0)), Me.autoScroll && (U(i, ct), G(i, ct)), Me
                    }, this.enable = function(e) {
                        var r, u, c;
                        if ("soft" !== e) {
                            for (u = Ae.length; --u > -1;) c = Ae[u], Re(c, "mousedown", st), Re(c, "touchstart", st), Re(c, "click", ht, !0), Te || te(c, "cursor", s.cursor || "move"), te(c, "touchCallout", "none"), te(c, "touchAction", ke === Oe || l ? "none" : ke ? "pan-y" : "pan-x");
                            qe(Ae, !1)
                        }
                        return G(i, ct), a = !0, o && "soft" !== e && o.track(l || i, we ? "x,y" : Te ? "rotation" : "top,left"), l && l.enable(), i._gsDragID = r = "d" + A++, M[r] = this, l && (l.element._gsDragID = r), t.set(i, {
                            x: "+=0",
                            overwrite: !1
                        }), de = {
                            t: i,
                            data: C ? Y : i._gsTransform,
                            tween: {},
                            setRatio: C ? function() {
                                t.set(i, I)
                            } : n._internals.setTransformRatio || n._internals.set3DTransformRatio
                        }, nt(), Me.update(!0), Me
                    }, this.disable = function(e) {
                        var t, n, r = Me.isDragging;
                        if (!Te)
                            for (t = Ae.length; --t > -1;) te(Ae[t], "cursor", null);
                        if ("soft" !== e) {
                            for (t = Ae.length; --t > -1;) n = Ae[t], te(n, "touchCallout", null), te(n, "touchAction", null), Le(n, "mousedown", st), Le(n, "touchstart", st),
                                Le(n, "click", ht);
                            qe(Ae, !0), se && (Le(se, "touchcancel", ut), Le(se, "touchend", ut), Le(se, "touchmove", at)), Le(v, "mouseup", ut), Le(v, "mousemove", at)
                        }
                        return U(i, ct), a = !1, o && "soft" !== e && o.untrack(l || i, we ? "x,y" : Te ? "rotation" : "top,left"), l && l.disable(), z(Ue), Me.isDragging = Me.isPressed = oe = !1, r && le(Me, "dragend", "onDragEnd"), Me
                    }, this.enabled = function(e, t) {
                        return arguments.length ? e ? Me.enable(t) : Me.disable(t) : a
                    }, this.kill = function() {
                        return Me.isThrowing = !1, t.killTweensOf(l || i, !0, je), Me.disable(), delete M[i._gsDragID], Me
                    }, -1 !== xe.indexOf("scroll") && (l = this.scrollProxy = new $e(i, H({
                        onKill: function() {
                            Me.isPressed && ut(null)
                        }
                    }, s)), i.style.overflowY = Oe && !Ne ? "auto" : "hidden", i.style.overflowX = ke && !Ne ? "auto" : "hidden", i = l.content), s.force3D !== !1 && t.set(i, {
                        force3D: !0
                    }), Te ? je.rotation = 1 : (ke && (je[be] = 1), Oe && (je[Se] = 1)), Te ? (I = g, Y = I.css, I.overwrite = !1) : we && (I = ke && Oe ? f : ke ? p : d, Y = I.css, I.overwrite = !1), this.enable()
                },
                He = Ye.prototype = new e;
            He.constructor = Ye, He.pointerX = He.pointerY = 0, He.isDragging = He.isPressed = !1, Ye.version = "0.14.8", Ye.zIndex = 1e3, Re(v, "touchcancel", function() {}), Re(v, "contextmenu", function(e) {
                var t;
                for (t in M) M[t].isPressed && M[t].endDrag()
            }), Ye.create = function(e, n) {
                "string" == typeof e && (e = t.selector(e));
                for (var i = e && 0 !== e.length ? Me(e) ? Ae(e) : [e] : [], r = i.length; --r > -1;) i[r] = new Ye(i[r], n);
                return i
            }, Ye.get = function(e) {
                return M[(J(e) || {})._gsDragID]
            }, Ye.timeSinceDrag = function() {
                return (P() - L) / 1e3
            };
            var We = {},
                Ve = function(e) {
                    var t, n, i = 0,
                        r = 0;
                    for (e = J(e), t = e.offsetWidth, n = e.offsetHeight; e;) i += e.offsetTop, r += e.offsetLeft, e = e.offsetParent;
                    return {
                        top: i,
                        left: r,
                        width: t,
                        height: n
                    }
                },
                Ge = function(e, t) {
                    if (e === window) return We.left = We.top = 0, We.width = We.right = _.clientWidth || e.innerWidth || v.body.clientWidth || 0, We.height = We.bottom = (e.innerHeight || 0) - 20 < _.clientHeight ? _.clientHeight : e.innerHeight || v.body.clientHeight || 0, We;
                    var n = e.pageX !== t ? {
                        left: e.pageX - V(),
                        top: e.pageY - W(),
                        right: e.pageX - V() + 1,
                        bottom: e.pageY - W() + 1
                    } : e.nodeType || e.left === t || e.top === t ? C ? Ve(e) : J(e).getBoundingClientRect() : e;
                    return n.right === t && n.width !== t ? (n.right = n.left + n.width, n.bottom = n.top + n.height) : n.width === t && (n = {
                        width: n.right - n.left,
                        height: n.bottom - n.top,
                        right: n.right,
                        left: n.left,
                        bottom: n.bottom,
                        top: n.top
                    }), n
                };
            return Ye.hitTest = function(e, t, n) {
                if (e === t) return !1;
                var i, r, o, s = Ge(e),
                    a = Ge(t),
                    l = a.left > s.right || a.right < s.left || a.top > s.bottom || a.bottom < s.top;
                return l || !n ? !l : (o = -1 !== (n + "").indexOf("%"), n = parseFloat(n) || 0, i = {
                    left: Math.max(s.left, a.left),
                    top: Math.max(s.top, a.top)
                }, i.width = Math.min(s.right, a.right) - i.left, i.height = Math.min(s.bottom, a.bottom) - i.top, !(i.width < 0 || i.height < 0) && (o ? (n *= .01, r = i.width * i.height, r >= s.width * s.height * n || r >= a.width * a.height * n) : i.width > n && i.height > n))
            }, O.style.cssText = "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;", Ye
        }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(e) {
        "use strict";
        var t = function() {
            return (_gsScope.GreenSockGlobals || _gsScope)[e]
        };
        "function" == typeof define && define.amd ? define(["TweenLite", "CSSPlugin"], t) : "undefined" != typeof module && module.exports && (require("../TweenLite.js"), require("../plugins/CSSPlugin.js"), module.exports = t())
    }("Draggable");
/*!
 * VERSION: 0.10.0
 * DATE: 2016-07-12
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
 * ThrowPropsPlugin is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("plugins.ThrowPropsPlugin", ["plugins.TweenPlugin", "TweenLite", "easing.Ease", "utils.VelocityTracker"], function(e, t, n, i) {
            var r, o, s, a, l = function(t, n) {
                    e.call(this, "throwProps"), this._overwriteProps.length = 0
                },
                u = 999999999999999,
                c = 1e-10,
                h = _gsScope._gsDefine.globals,
                f = !1,
                p = {
                    x: 1,
                    y: 1,
                    z: 2,
                    scale: 1,
                    scaleX: 1,
                    scaleY: 1,
                    rotation: 1,
                    rotationZ: 1,
                    rotationX: 2,
                    rotationY: 2,
                    skewX: 1,
                    skewY: 1,
                    xPercent: 1,
                    yPercent: 1
                },
                d = function(e, t, n, i) {
                    for (var r, o, s = t.length, a = 0, l = u; --s > -1;) r = t[s], o = r - e, 0 > o && (o = -o), l > o && r >= i && n >= r && (a = s, l = o);
                    return t[a]
                },
                g = function(e, t, n, i) {
                    if ("auto" === e.end) return e;
                    n = isNaN(n) ? u : n, i = isNaN(i) ? -u : i;
                    var r = "function" == typeof e.end ? e.end(t) : e.end instanceof Array ? d(t, e.end, n, i) : Number(e.end);
                    return r > n ? r = n : i > r && (r = i), {
                        max: r,
                        min: r,
                        unitFactor: e.unitFactor
                    }
                },
                m = function(e, t, n) {
                    for (var i in t) void 0 === e[i] && i !== n && (e[i] = t[i]);
                    return e
                },
                y = l.calculateChange = function(e, i, r, o) {
                    null == o && (o = .05);
                    var s = i instanceof n ? i : i ? new n(i) : t.defaultEase;
                    return r * o * e / s.getRatio(o)
                },
                v = l.calculateDuration = function(e, i, r, o, s) {
                    s = s || .05;
                    var a = o instanceof n ? o : o ? new n(o) : t.defaultEase;
                    return Math.abs((i - e) * a.getRatio(s) / r / s)
                },
                _ = l.calculateTweenDuration = function(e, r, o, s, a, u) {
                    if ("string" == typeof e && (e = t.selector(e)), !e) return 0;
                    null == o && (o = 10), null == s && (s = .2), null == a && (a = 1), e.length && (e = e[0] || e);
                    var h, p, d, _, x, w, T, b, S, k, P = 0,
                        C = 9999999999,
                        O = r.throwProps || r,
                        E = r.ease instanceof n ? r.ease : r.ease ? new n(r.ease) : t.defaultEase,
                        M = isNaN(O.checkpoint) ? .05 : Number(O.checkpoint),
                        A = isNaN(O.resistance) ? l.defaultResistance : Number(O.resistance);
                    for (h in O) "resistance" !== h && "checkpoint" !== h && "preventOvershoot" !== h && (p = O[h], "object" != typeof p && (S = S || i.getByTarget(e), S && S.isTrackingProp(h) ? p = "number" == typeof p ? {
                        velocity: p
                    } : {
                        velocity: S.getVelocity(h)
                    } : (_ = Number(p) || 0, d = _ * A > 0 ? _ / A : _ / -A)), "object" == typeof p && (void 0 !== p.velocity && "number" == typeof p.velocity ? _ = Number(p.velocity) || 0 : (S = S || i.getByTarget(e), _ = S && S.isTrackingProp(h) ? S.getVelocity(h) : 0), x = isNaN(p.resistance) ? A : Number(p.resistance), d = _ * x > 0 ? _ / x : _ / -x, w = "function" == typeof e[h] ? e[h.indexOf("set") || "function" != typeof e["get" + h.substr(3)] ? h : "get" + h.substr(3)]() : e[h] || 0, T = w + y(_, E, d, M), void 0 !== p.end && (p = g(p, T, p.max, p.min), (u || f) && (O[h] = m(p, O[h], "end"))), void 0 !== p.max && T > Number(p.max) + c ? (k = p.unitFactor || l.defaultUnitFactors[h] || 1, b = w > p.max && p.min !== p.max || _ * k > -15 && 45 > _ * k ? s + .1 * (o - s) : v(w, p.max, _, E, M), C > b + a && (C = b + a)) : void 0 !== p.min && T < Number(p.min) - c && (k = p.unitFactor || l.defaultUnitFactors[h] || 1, b = w < p.min && p.min !== p.max || _ * k > -45 && 15 > _ * k ? s + .1 * (o - s) : v(w, p.min, _, E, M), C > b + a && (C = b + a)), b > P && (P = b)), d > P && (P = d));
                    return P > C && (P = C), P > o ? o : s > P ? s : P
                },
                x = l.prototype = new e("throwProps");
            return x.constructor = l, l.version = "0.10.0", l.API = 2, l._autoCSS = !0, l.defaultResistance = 100, l.defaultUnitFactors = {
                time: 1e3,
                totalTime: 1e3
            }, l.track = function(e, t, n) {
                return i.track(e, t, n)
            }, l.untrack = function(e, t) {
                i.untrack(e, t)
            }, l.isTracking = function(e, t) {
                return i.isTracking(e, t)
            }, l.getVelocity = function(e, t) {
                var n = i.getByTarget(e);
                return n ? n.getVelocity(t) : NaN
            }, l._cssRegister = function() {
                var e = h.com.greensock.plugins.CSSPlugin;
                if (e) {
                    var t = e._internals,
                        n = t._parseToProxy,
                        s = t._setPluginRatio,
                        a = t.CSSPropTween;
                    t._registerComplexSpecialProp("throwProps", {
                        parser: function(e, t, u, c, h, f) {
                            f = new l;
                            var d, g, m, y, v, _ = {},
                                x = {},
                                w = {},
                                T = {},
                                b = {},
                                S = {};
                            o = {};
                            for (m in t) "resistance" !== m && "preventOvershoot" !== m && (g = t[m], "object" == typeof g ? (void 0 !== g.velocity && "number" == typeof g.velocity ? _[m] = Number(g.velocity) || 0 : (v = v || i.getByTarget(e), _[m] = v && v.isTrackingProp(m) ? v.getVelocity(m) : 0), void 0 !== g.end && (T[m] = g.end), void 0 !== g.min && (x[m] = g.min), void 0 !== g.max && (w[m] = g.max), g.preventOvershoot && (S[m] = !0), void 0 !== g.resistance && (d = !0, b[m] = g.resistance)) : "number" == typeof g ? _[m] = g : (v = v || i.getByTarget(e), v && v.isTrackingProp(m) ? _[m] = v.getVelocity(m) : _[m] = g || 0), p[m] && c._enableTransforms(2 === p[m]));
                            y = n(e, _, c, h, f), r = y.proxy, _ = y.end;
                            for (m in r) o[m] = {
                                velocity: _[m],
                                min: x[m],
                                max: w[m],
                                end: T[m],
                                resistance: b[m],
                                preventOvershoot: S[m]
                            };
                            return null != t.resistance && (o.resistance = t.resistance), t.preventOvershoot && (o.preventOvershoot = !0), h = new a(e, "throwProps", 0, 0, y.pt, 2), c._overwriteProps.pop(), h.plugin = f, h.setRatio = s, h.data = y, f._onInitTween(r, o, c._tween), h
                        }
                    })
                }
            }, l.to = function(e, n, i, l, u) {
                n.throwProps || (n = {
                    throwProps: n
                }), 0 === u && (n.throwProps.preventOvershoot = !0), f = !0;
                var c = new t(e, l || 1, n);
                return c.render(0, !0, !0), c.vars.css ? (c.duration(_(r, {
                    throwProps: o,
                    ease: n.ease
                }, i, l, u)), c._delay && !c.vars.immediateRender ? c.invalidate() : s._onInitTween(r, a, c), f = !1, c) : (c.kill(), c = new t(e, _(e, n, i, l, u), n), f = !1, c)
            }, x._onInitTween = function(e, t, n, r) {
                this.target = e, this._props = [], s = this, a = t;
                var o, l, u, c, h, p, d, v, _, x = n._ease,
                    w = isNaN(t.checkpoint) ? .05 : Number(t.checkpoint),
                    T = n._duration,
                    b = t.preventOvershoot,
                    S = 0;
                for (o in t)
                    if ("resistance" !== o && "checkpoint" !== o && "preventOvershoot" !== o) {
                        if (l = t[o], "function" == typeof l && (l = l(r, e)), "number" == typeof l) h = Number(l) || 0;
                        else if ("object" != typeof l || isNaN(l.velocity)) {
                            if (_ = _ || i.getByTarget(e), !_ || !_.isTrackingProp(o)) throw "ERROR: No velocity was defined in the throwProps tween of " + e + " property: " + o;
                            h = _.getVelocity(o)
                        } else h = Number(l.velocity);
                        p = y(h, x, T, w), v = 0, c = "function" == typeof e[o], u = c ? e[o.indexOf("set") || "function" != typeof e["get" + o.substr(3)] ? o : "get" + o.substr(3)]() : e[o], "object" == typeof l && (d = u + p, void 0 !== l.end && (l = g(l, d, l.max, l.min), f && (t[o] = m(l, t[o], "end"))), void 0 !== l.max && Number(l.max) < d ? b || l.preventOvershoot ? p = l.max - u : v = l.max - u - p : void 0 !== l.min && Number(l.min) > d && (b || l.preventOvershoot ? p = l.min - u : v = l.min - u - p)), this._overwriteProps[S] = o, this._props[S++] = {
                            p: o,
                            s: u,
                            c1: p,
                            c2: v,
                            f: c,
                            r: !1
                        }
                    }
                return !0
            }, x._kill = function(t) {
                for (var n = this._props.length; --n > -1;) null != t[this._props[n].p] && this._props.splice(n, 1);
                return e.prototype._kill.call(this, t)
            }, x._mod = function(e) {
                for (var t, n = this._props, i = n.length; --i > -1;) t = e[n[i].p] || e.throwProps, "function" == typeof t && (n[i].m = t)
            }, x.setRatio = function(e) {
                for (var t, n, i = this._props.length; --i > -1;) t = this._props[i], n = t.s + t.c1 * e + t.c2 * e * e, t.m ? n = t.m(n, this.target) : 1 === e && (n = (1e4 * n + (0 > n ? -.5 : .5) | 0) / 1e4), t.f ? this.target[t.p](n) : this.target[t.p] = n
            }, e.activate([l]), l
        }, !0), _gsScope._gsDefine("utils.VelocityTracker", ["TweenLite"], function(e) {
            var t, n, i, r, o = /([A-Z])/g,
                s = {},
                a = {
                    x: 1,
                    y: 1,
                    z: 2,
                    scale: 1,
                    scaleX: 1,
                    scaleY: 1,
                    rotation: 1,
                    rotationZ: 1,
                    rotationX: 2,
                    rotationY: 2,
                    skewX: 1,
                    skewY: 1,
                    xPercent: 1,
                    yPercent: 1
                },
                l = document.defaultView ? document.defaultView.getComputedStyle : function() {},
                u = function(e, t, n) {
                    var i = (e._gsTransform || s)[t];
                    return i || 0 === i ? i : (e.style[t] ? i = e.style[t] : (n = n || l(e, null)) ? i = n[t] || n.getPropertyValue(t) || n.getPropertyValue(t.replace(o, "-$1").toLowerCase()) : e.currentStyle && (i = e.currentStyle[t]), parseFloat(i) || 0)
                },
                c = e.ticker,
                h = function(e, t, n) {
                    this.p = e, this.f = t, this.v1 = this.v2 = 0, this.t1 = this.t2 = c.time, this.css = !1, this.type = "", this._prev = null, n && (this._next = n, n._prev = this)
                },
                f = function() {
                    var e, n, o = t,
                        s = c.time;
                    if (s - i >= .03)
                        for (r = i, i = s; o;) {
                            for (n = o._firstVP; n;) e = n.css ? u(o.target, n.p) : n.f ? o.target[n.p]() : o.target[n.p], (e !== n.v1 || s - n.t1 > .15) && (n.v2 = n.v1, n.v1 = e, n.t2 = n.t1, n.t1 = s), n = n._next;
                            o = o._next
                        }
                },
                p = function(e) {
                    this._lookup = {}, this.target = e, this.elem = !(!e.style || !e.nodeType), n || (c.addEventListener("tick", f, null, !1, -100), i = r = c.time, n = !0), t && (this._next = t, t._prev = this), t = this
                },
                d = p.getByTarget = function(e) {
                    for (var n = t; n;) {
                        if (n.target === e) return n;
                        n = n._next
                    }
                },
                g = p.prototype;
            return g.addProp = function(t, n) {
                if (!this._lookup[t]) {
                    var i = this.target,
                        r = "function" == typeof i[t],
                        o = r ? this._altProp(t) : t,
                        s = this._firstVP;
                    this._firstVP = this._lookup[t] = this._lookup[o] = s = new h(o !== t && 0 === t.indexOf("set") ? o : t, r, s), s.css = this.elem && (void 0 !== this.target.style[s.p] || a[s.p]), s.css && a[s.p] && !i._gsTransform && e.set(i, {
                        x: "+=0",
                        overwrite: !1
                    }), s.type = n || s.css && 0 === t.indexOf("rotation") ? "deg" : "", s.v1 = s.v2 = s.css ? u(i, s.p) : r ? i[s.p]() : i[s.p]
                }
            }, g.removeProp = function(e) {
                var t = this._lookup[e];
                t && (t._prev ? t._prev._next = t._next : t === this._firstVP && (this._firstVP = t._next), t._next && (t._next._prev = t._prev), this._lookup[e] = 0, t.f && (this._lookup[this._altProp(e)] = 0))
            }, g.isTrackingProp = function(e) {
                return this._lookup[e] instanceof h
            }, g.getVelocity = function(e) {
                var t, n, i, r = this._lookup[e],
                    o = this.target;
                if (!r) throw "The velocity of " + e + " is not being tracked.";
                return t = r.css ? u(o, r.p) : r.f ? o[r.p]() : o[r.p], n = t - r.v2, ("rad" === r.type || "deg" === r.type) && (i = "rad" === r.type ? 2 * Math.PI : 360, n %= i, n !== n % (i / 2) && (n = 0 > n ? n + i : n - i)), n / (c.time - r.t2)
            }, g._altProp = function(e) {
                var t = e.substr(0, 3),
                    n = ("get" === t ? "set" : "set" === t ? "get" : t) + e.substr(3);
                return "function" == typeof this.target[n] ? n : e
            }, p.getByTarget = function(n) {
                var i = t;
                for ("string" == typeof n && (n = e.selector(n)), n.length && n !== window && n[0] && n[0].style && !n.nodeType && (n = n[0]); i;) {
                    if (i.target === n) return i;
                    i = i._next
                }
            }, p.track = function(e, t, n) {
                var i = d(e),
                    r = t.split(","),
                    o = r.length;
                for (n = (n || "").split(","), i || (i = new p(e)); --o > -1;) i.addProp(r[o], n[o] || n[0]);
                return i
            }, p.untrack = function(e, n) {
                var i = d(e),
                    r = (n || "").split(","),
                    o = r.length;
                if (i) {
                    for (; --o > -1;) i.removeProp(r[o]);
                    i._firstVP && n || (i._prev ? i._prev._next = i._next : i === t && (t = i._next), i._next && (i._next._prev = i._prev))
                }
            }, p.isTracking = function(e, t) {
                var n = d(e);
                return !!n && (!(t || !n._firstVP) || n.isTrackingProp(t))
            }, p
        }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(e) {
        "use strict";
        var t = function() {
            return (_gsScope.GreenSockGlobals || _gsScope)[e]
        };
        "function" == typeof define && define.amd ? define(["TweenLite"], t) : "undefined" != typeof module && module.exports && (require("../TweenLite.js"), module.exports = t())
    }("ThrowPropsPlugin");
/*!
 * VERSION: 0.1.1
 * DATE: 2016-08-16
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
 * DrawSVGPlugin is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";

        function e(e, t, n, i, r, o) {
            return n = (parseFloat(n) - parseFloat(e)) * r, i = (parseFloat(i) - parseFloat(t)) * o, Math.sqrt(n * n + i * i)
        }

        function t(e) {
            return "string" != typeof e && e.nodeType || (e = _gsScope.TweenLite.selector(e), e.length && (e = e[0])), e
        }

        function n(e, t, n) {
            var i, r, o = e.indexOf(" ");
            return -1 === o ? (i = void 0 !== n ? n + "" : e, r = e) : (i = e.substr(0, o), r = e.substr(o + 1)), i = -1 !== i.indexOf("%") ? parseFloat(i) / 100 * t : parseFloat(i), r = -1 !== r.indexOf("%") ? parseFloat(r) / 100 * t : parseFloat(r), i > r ? [r, i] : [i, r]
        }

        function i(n) {
            if (!n) return 0;
            n = t(n);
            var i, r, o, s, l, u, c, h = n.tagName.toLowerCase(),
                f = 1,
                p = 1;
            if ("non-scaling-stroke" === n.getAttribute("vector-effect") && (p = n.getScreenCTM(), f = p.a, p = p.d), "path" === h) {
                s = n.style.strokeDasharray, n.style.strokeDasharray = "none", i = n.getTotalLength() || 0, f !== p && console.log("Warning: <path> length cannot be measured accurately when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."), i *= (f + p) / 2;
                try {
                    r = n.getBBox()
                } catch (e) {}
                n.style.strokeDasharray = s
            } else if ("rect" === h) i = 2 * n.getAttribute("width") * f + 2 * n.getAttribute("height") * p;
            else if ("line" === h) i = e(n.getAttribute("x1"), n.getAttribute("y1"), n.getAttribute("x2"), n.getAttribute("y2"), f, p);
            else if ("polyline" === h || "polygon" === h)
                for (o = n.getAttribute("points").match(a) || [], "polygon" === h && o.push(o[0], o[1]), i = 0, l = 2; l < o.length; l += 2) i += e(o[l - 2], o[l - 1], o[l], o[l + 1], f, p) || 0;
            else("circle" === h || "ellipse" === h) && (u = parseFloat(n.getAttribute("circle" === h ? "r" : "rx")) * f, c = parseFloat(n.getAttribute("circle" === h ? "r" : "ry")) * p, i = Math.PI * (3 * (u + c) - Math.sqrt((3 * u + c) * (u + 3 * c))));
            return i || 0
        }

        function r(e, n) {
            if (!e) return [0, 0];
            e = t(e), n = n || i(e) + 1;
            var r = s(e),
                o = r.strokeDasharray || "",
                a = parseFloat(r.strokeDashoffset),
                l = o.indexOf(",");
            return 0 > l && (l = o.indexOf(" ")), o = 0 > l ? n : parseFloat(o.substr(0, l)) || 1e-5, o > n && (o = n), [Math.max(0, -a), Math.max(0, o - a)]
        }
        var o, s = document.defaultView ? document.defaultView.getComputedStyle : function() {},
            a = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi;
        o = _gsScope._gsDefine.plugin({
            propName: "drawSVG",
            API: 2,
            version: "0.1.1",
            global: !0,
            overwriteProps: ["drawSVG"],
            init: function(e, t, o, s) {
                if (!e.getBBox) return !1;
                var a, l, u, c = i(e) + 1;
                return this._style = e.style, "function" == typeof t && (t = t(s, e)), t === !0 || "true" === t ? t = "0 100%" : t ? -1 === (t + "").indexOf(" ") && (t = "0 " + t) : t = "0 0", a = r(e, c), l = n(t, c, a[0]), this._length = c + 10, 0 === a[0] && 0 === l[0] ? (u = Math.max(1e-5, l[1] - c), this._dash = c + u, this._offset = c - a[1] + u, this._addTween(this, "_offset", this._offset, c - l[1] + u, "drawSVG")) : (this._dash = a[1] - a[0] || 1e-6, this._offset = -a[0], this._addTween(this, "_dash", this._dash, l[1] - l[0] || 1e-5, "drawSVG"), this._addTween(this, "_offset", this._offset, -l[0], "drawSVG")), !0
            },
            set: function(e) {
                this._firstPT && (this._super.setRatio.call(this, e), this._style.strokeDashoffset = this._offset, 1 === e || 0 === e ? this._style.strokeDasharray = this._offset < .001 && this._length - this._dash <= 10 ? "none" : this._offset === this._dash ? "0px, 999999px" : this._dash + "px," + this._length + "px" : this._style.strokeDasharray = this._dash + "px," + this._length + "px")
            }
        }), o.getLength = i, o.getPosition = r
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(e) {
        "use strict";
        var t = function() {
            return (_gsScope.GreenSockGlobals || _gsScope)[e]
        };
        "function" == typeof define && define.amd ? define(["TweenLite"], t) : "undefined" != typeof module && module.exports && (require("../TweenLite.js"), module.exports = t())
    }("DrawSVGPlugin");
/*!
 * VERSION: 0.6.4
 * DATE: 2016-07-08
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("plugins.CSSRulePlugin", ["plugins.TweenPlugin", "TweenLite", "plugins.CSSPlugin"], function(e, t, n) {
            var i = function() {
                    e.call(this, "cssRule"), this._overwriteProps.length = 0
                },
                r = window.document,
                o = n.prototype.setRatio,
                s = i.prototype = new n;
            return s._propName = "cssRule", s.constructor = i, i.version = "0.6.4", i.API = 2, i.getRule = function(e) {
                var t, n, i, o, s = r.all ? "rules" : "cssRules",
                    a = r.styleSheets,
                    l = a.length,
                    u = ":" === e.charAt(0);
                for (e = (u ? "" : ",") + e.toLowerCase() + ",", u && (o = []); --l > -1;) {
                    try {
                        if (n = a[l][s], !n) continue;
                        t = n.length
                    } catch (e) {
                        console.log(e);
                        continue
                    }
                    for (; --t > -1;)
                        if (i = n[t], i.selectorText && -1 !== ("," + i.selectorText.split("::").join(":").toLowerCase() + ",").indexOf(e)) {
                            if (!u) return i.style;
                            o.push(i.style)
                        }
                }
                return o
            }, s._onInitTween = function(e, t, i) {
                if (void 0 === e.cssText) return !1;
                var o = e._gsProxy = e._gsProxy || r.createElement("div");
                return this._ss = e, this._proxy = o.style, o.style.cssText = e.cssText, n.prototype._onInitTween.call(this, o, t, i), !0
            }, s.setRatio = function(e) {
                o.call(this, e), this._ss.cssText = this._proxy.cssText
            }, e.activate([i]), i
        }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(e) {
        "use strict";
        var t = function() {
            return (_gsScope.GreenSockGlobals || _gsScope)[e]
        };
        "function" == typeof define && define.amd ? define(["TweenLite"], t) : "undefined" != typeof module && module.exports && (require("../TweenLite.js"), module.exports = t())
    }("CSSRulePlugin");
/*!
 * VERSION: 1.8.0
 * DATE: 2016-07-09
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        var e = document.documentElement,
            t = window,
            n = function(n, i) {
                var r = "x" === i ? "Width" : "Height",
                    o = "scroll" + r,
                    s = "client" + r,
                    a = document.body;
                return n === t || n === e || n === a ? Math.max(e[o], a[o]) - (t["inner" + r] || e[s] || a[s]) : n[o] - n["offset" + r]
            },
            i = function(e) {
                return "string" == typeof e && (e = TweenLite.selector(e)), e.length && e !== t && e[0] && e[0].style && !e.nodeType && (e = e[0]), e === t || e.nodeType && e.style ? e : null
            },
            r = function(n, i) {
                var r = "scroll" + ("x" === i ? "Left" : "Top");
                return n === t && (null != n.pageXOffset ? r = "page" + i.toUpperCase() + "Offset" : n = null != e[r] ? e : document.body),
                    function() {
                        return n[r]
                    }
            },
            o = function(n, o) {
                var s = i(n).getBoundingClientRect(),
                    a = !o || o === t || o === document.body,
                    l = (a ? e : o).getBoundingClientRect(),
                    u = {
                        x: s.left - l.left,
                        y: s.top - l.top
                    };
                return !a && o && (u.x += r(o, "x")(), u.y += r(o, "y")()), u
            },
            s = function(e, t, i) {
                var r = typeof e;
                return "number" === r || "string" === r && "=" === e.charAt(1) ? e : "max" === e ? n(t, i) : Math.min(n(t, i), o(e, t)[i])
            },
            a = _gsScope._gsDefine.plugin({
                propName: "scrollTo",
                API: 2,
                version: "1.8.0",
                init: function(e, n, i) {
                    return this._wdw = e === t, this._target = e, this._tween = i, "object" != typeof n ? (n = {
                        y: n
                    }, "string" == typeof n.y && "max" !== n.y && "=" !== n.y.charAt(1) && (n.x = n.y)) : n.nodeType && (n = {
                        y: n,
                        x: n
                    }), this.vars = n, this._autoKill = n.autoKill !== !1, this.getX = r(e, "x"), this.getY = r(e, "y"), this.x = this.xPrev = this.getX(), this.y = this.yPrev = this.getY(), null != n.x ? (this._addTween(this, "x", this.x, s(n.x, e, "x") - (n.offsetX || 0), "scrollTo_x", !0), this._overwriteProps.push("scrollTo_x")) : this.skipX = !0, null != n.y ? (this._addTween(this, "y", this.y, s(n.y, e, "y") - (n.offsetY || 0), "scrollTo_y", !0), this._overwriteProps.push("scrollTo_y")) : this.skipY = !0, !0
                },
                set: function(e) {
                    this._super.setRatio.call(this, e);
                    var i = this._wdw || !this.skipX ? this.getX() : this.xPrev,
                        r = this._wdw || !this.skipY ? this.getY() : this.yPrev,
                        o = r - this.yPrev,
                        s = i - this.xPrev,
                        l = a.autoKillThreshold;
                    this.x < 0 && (this.x = 0), this.y < 0 && (this.y = 0), this._autoKill && (!this.skipX && (s > l || -l > s) && i < n(this._target, "x") && (this.skipX = !0), !this.skipY && (o > l || -l > o) && r < n(this._target, "y") && (this.skipY = !0), this.skipX && this.skipY && (this._tween.kill(), this.vars.onAutoKill && this.vars.onAutoKill.apply(this.vars.onAutoKillScope || this._tween, this.vars.onAutoKillParams || []))), this._wdw ? t.scrollTo(this.skipX ? i : this.x, this.skipY ? r : this.y) : (this.skipY || (this._target.scrollTop = this.y), this.skipX || (this._target.scrollLeft = this.x)), this.xPrev = this.x, this.yPrev = this.y
                }
            }),
            l = a.prototype;
        a.max = n, a.getOffset = o, a.autoKillThreshold = 7, l._kill = function(e) {
            return e.scrollTo_x && (this.skipX = !0), e.scrollTo_y && (this.skipY = !0), this._super._kill.call(this, e)
        }
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(e) {
        "use strict";
        var t = function() {
            return (_gsScope.GreenSockGlobals || _gsScope)[e]
        };
        "function" == typeof define && define.amd ? define(["TweenLite"], t) : "undefined" != typeof module && module.exports && (require("../TweenLite.js"), module.exports = t())
    }("ScrollToPlugin");
/*!
 * VERSION: 0.5.6
 * DATE: 2016-10-28
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
 * SplitText is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
! function(e) {
    "use strict";
    var t = e.GreenSockGlobals || e,
        n = function(e) {
            var n, i = e.split("."),
                r = t;
            for (n = 0; n < i.length; n++) r[i[n]] = r = r[i[n]] || {};
            return r
        },
        i = n("com.greensock.utils"),
        r = function(e) {
            var t = e.nodeType,
                n = "";
            if (1 === t || 9 === t || 11 === t) {
                if ("string" == typeof e.textContent) return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling) n += r(e)
            } else if (3 === t || 4 === t) return e.nodeValue;
            return n
        },
        o = document,
        s = o.defaultView ? o.defaultView.getComputedStyle : function() {},
        a = /([A-Z])/g,
        l = function(e, t, n, i) {
            var r;
            return (n = n || s(e, null)) ? (e = n.getPropertyValue(t.replace(a, "-$1").toLowerCase()), r = e || n.length ? e : n[t]) : e.currentStyle && (n = e.currentStyle, r = n[t]), i ? r : parseInt(r, 10) || 0
        },
        u = function(e) {
            return !!(e.length && e[0] && (e[0].nodeType && e[0].style && !e.nodeType || e[0].length && e[0][0]))
        },
        c = function(e) {
            var t, n, i, r = [],
                o = e.length;
            for (t = 0; o > t; t++)
                if (n = e[t], u(n))
                    for (i = n.length, i = 0; i < n.length; i++) r.push(n[i]);
                else r.push(n);
            return r
        },
        h = /(?:\r|\n|\t\t)/g,
        f = /(?:\s\s+)/g,
        p = 55296,
        d = 56319,
        g = 56320,
        m = 127462,
        y = 127487,
        v = 127995,
        _ = 127999,
        x = function(e) {
            return (e.charCodeAt(0) - p << 10) + (e.charCodeAt(1) - g) + 65536
        },
        w = o.all && !o.addEventListener,
        T = " style='position:relative;display:inline-block;" + (w ? "*display:inline;*zoom:1;'" : "'"),
        b = function(e, t) {
            e = e || "";
            var n = -1 !== e.indexOf("++"),
                i = 1;
            return n && (e = e.split("++").join("")),
                function() {
                    return "<" + t + T + (e ? " class='" + e + (n ? i++ : "") + "'>" : ">")
                }
        },
        S = i.SplitText = t.SplitText = function(e, t) {
            if ("string" == typeof e && (e = S.selector(e)), !e) throw "cannot split a null element.";
            this.elements = u(e) ? c(e) : [e], this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = t || {}, this.split(t)
        },
        k = function(e, t, n) {
            var i = e.nodeType;
            if (1 === i || 9 === i || 11 === i)
                for (e = e.firstChild; e; e = e.nextSibling) k(e, t, n);
            else(3 === i || 4 === i) && (e.nodeValue = e.nodeValue.split(t).join(n))
        },
        P = function(e, t) {
            for (var n = t.length; --n > -1;) e.push(t[n])
        },
        C = function(e) {
            var t, n = [],
                i = e.length;
            for (t = 0; t !== i; n.push(e[t++]));
            return n
        },
        O = function(e, t, n) {
            for (var i; e && e !== t;) {
                if (i = e._next || e.nextSibling) return i.textContent.charAt(0) === n;
                e = e.parentNode || e._parent
            }
            return !1
        },
        E = function(e) {
            var t, n, i = C(e.childNodes),
                r = i.length;
            for (t = 0; r > t; t++) n = i[t], n._isSplit ? E(n) : (t && 3 === n.previousSibling.nodeType ? n.previousSibling.nodeValue += 3 === n.nodeType ? n.nodeValue : n.firstChild.nodeValue : 3 !== n.nodeType && e.insertBefore(n.firstChild, n), e.removeChild(n))
        },
        M = function(e, t, n, i, r, a, u) {
            var c, h, f, p, d, g, m, y, v, _, x, w, T = s(e),
                b = l(e, "paddingLeft", T),
                S = -999,
                C = l(e, "borderBottomWidth", T) + l(e, "borderTopWidth", T),
                M = l(e, "borderLeftWidth", T) + l(e, "borderRightWidth", T),
                A = l(e, "paddingTop", T) + l(e, "paddingBottom", T),
                N = l(e, "paddingLeft", T) + l(e, "paddingRight", T),
                D = .2 * l(e, "fontSize"),
                R = l(e, "textAlign", T, !0),
                L = [],
                F = [],
                j = [],
                X = t.wordDelimiter || " ",
                B = t.span ? "span" : "div",
                I = t.type || t.split || "chars,words,lines",
                q = r && -1 !== I.indexOf("lines") ? [] : null,
                z = -1 !== I.indexOf("words"),
                Y = -1 !== I.indexOf("chars"),
                H = "absolute" === t.position || t.absolute === !0,
                W = t.linesClass,
                V = -1 !== (W || "").indexOf("++");
            for (q && 1 === e.children.length && e.children[0]._isSplit && (e = e.children[0]), V && (W = W.split("++").join("")), h = e.getElementsByTagName("*"), f = h.length, d = [], c = 0; f > c; c++) d[c] = h[c];
            if (q || H)
                for (c = 0; f > c; c++) p = d[c], g = p.parentNode === e, (g || H || Y && !z) && (w = p.offsetTop, q && g && Math.abs(w - S) > D && "BR" !== p.nodeName && (m = [], q.push(m), S = w), H && (p._x = p.offsetLeft, p._y = w, p._w = p.offsetWidth, p._h = p.offsetHeight), q && ((p._isSplit && g || !Y && g || z && g || !z && p.parentNode.parentNode === e && !p.parentNode._isSplit) && (m.push(p), p._x -= b, O(p, e, X) && (p._wordEnd = !0)), "BR" === p.nodeName && p.nextSibling && "BR" === p.nextSibling.nodeName && q.push([])));
            for (c = 0; f > c; c++) p = d[c], g = p.parentNode === e, "BR" !== p.nodeName ? (H && (v = p.style, z || g || (p._x += p.parentNode._x, p._y += p.parentNode._y), v.left = p._x + "px", v.top = p._y + "px", v.position = "absolute", v.display = "block", v.width = p._w + 1 + "px", v.height = p._h + "px"), !z && Y ? p._isSplit ? (p._next = p.nextSibling, p.parentNode.appendChild(p)) : p.parentNode._isSplit ? (p._parent = p.parentNode, !p.previousSibling && p.firstChild && (p.firstChild._isFirst = !0), p._next = p.nextSibling && p.nextSibling._isFirst ? null : p.nextSibling, p.parentNode.removeChild(p), d.splice(c--, 1), f--) : g || (w = !p.nextSibling && O(p.parentNode, e, X), p.parentNode._parent && p.parentNode._parent.appendChild(p), w && p.parentNode.appendChild(o.createTextNode(" ")), t.span && (p.style.display = "inline"), L.push(p)) : p.parentNode._isSplit && !p._isSplit && "" !== p.innerHTML ? F.push(p) : Y && !p._isSplit && (t.span && (p.style.display = "inline"), L.push(p))) : q || H ? (e.removeChild(p), d.splice(c--, 1), f--) : z || e.appendChild(p);
            if (q) {
                for (H && (_ = o.createElement(B), e.appendChild(_), x = _.offsetWidth + "px", w = _.offsetParent === e ? 0 : e.offsetLeft, e.removeChild(_)), v = e.style.cssText, e.style.cssText = "display:none;"; e.firstChild;) e.removeChild(e.firstChild);
                for (y = " " === X && (!H || !z && !Y), c = 0; c < q.length; c++) {
                    for (m = q[c], _ = o.createElement(B), _.style.cssText = "display:block;text-align:" + R + ";position:" + (H ? "absolute;" : "relative;"), W && (_.className = W + (V ? c + 1 : "")), j.push(_), f = m.length, h = 0; f > h; h++) "BR" !== m[h].nodeName && (p = m[h], _.appendChild(p), y && p._wordEnd && _.appendChild(o.createTextNode(" ")), H && (0 === h && (_.style.top = p._y + "px", _.style.left = b + w + "px"), p.style.top = "0px", w && (p.style.left = p._x - w + "px")));
                    0 === f ? _.innerHTML = "&nbsp;" : z || Y || (E(_), k(_, String.fromCharCode(160), " ")), H && (_.style.width = x, _.style.height = p._h + "px"), e.appendChild(_)
                }
                e.style.cssText = v
            }
            H && (u > e.clientHeight && (e.style.height = u - A + "px", e.clientHeight < u && (e.style.height = u + C + "px")), a > e.clientWidth && (e.style.width = a - N + "px", e.clientWidth < a && (e.style.width = a + M + "px"))), P(n, L), P(i, F), P(r, j)
        },
        A = function(e, t, n, i) {
            var s, a, l, u, c, g, w, T, b, S = t.span ? "span" : "div",
                P = t.type || t.split || "chars,words,lines",
                C = (-1 !== P.indexOf("words"), -1 !== P.indexOf("chars")),
                O = "absolute" === t.position || t.absolute === !0,
                E = t.wordDelimiter || " ",
                M = " " !== E ? "" : O ? "&#173; " : " ",
                A = t.span ? "</span>" : "</div>",
                N = !0,
                D = o.createElement("div"),
                R = e.parentNode;
            for (R.insertBefore(D, e), D.textContent = e.nodeValue, R.removeChild(e), e = D, s = r(e), w = -1 !== s.indexOf("<"), t.reduceWhiteSpace !== !1 && (s = s.replace(f, " ").replace(h, "")), w && (s = s.split("<").join("{{LT}}")), c = s.length, a = (" " === s.charAt(0) ? M : "") + n(), l = 0; c > l; l++)
                if (g = s.charAt(l), g === E && s.charAt(l - 1) !== E && l) {
                    for (a += N ? A : "", N = !1; s.charAt(l + 1) === E;) a += M, l++;
                    l === c - 1 ? a += M : ")" !== s.charAt(l + 1) && (a += M + n(), N = !0)
                } else "{" === g && "{{LT}}" === s.substr(l, 6) ? (a += C ? i() + "{{LT}}</" + S + ">" : "{{LT}}", l += 5) : g.charCodeAt(0) >= p && g.charCodeAt(0) <= d || s.charCodeAt(l + 1) >= 65024 && s.charCodeAt(l + 1) <= 65039 ? (T = x(s.substr(l, 2)), b = x(s.substr(l + 2, 2)), u = T >= m && y >= T && b >= m && y >= b || b >= v && _ >= b ? 4 : 2, a += C && " " !== g ? i() + s.substr(l, u) + "</" + S + ">" : s.substr(l, u), l += u - 1) : a += C && " " !== g ? i() + g + "</" + S + ">" : g;
            e.outerHTML = a + (N ? A : ""), w && k(R, "{{LT}}", "<")
        },
        N = function(e, t, n, i) {
            var r, o, s = C(e.childNodes),
                a = s.length,
                u = "absolute" === t.position || t.absolute === !0;
            if (3 !== e.nodeType || a > 1) {
                for (t.absolute = !1, r = 0; a > r; r++) o = s[r], (3 !== o.nodeType || /\S+/.test(o.nodeValue)) && (u && 3 !== o.nodeType && "inline" === l(o, "display", null, !0) && (o.style.display = "inline-block", o.style.position = "relative"), o._isSplit = !0, N(o, t, n, i));
                return t.absolute = u, void(e._isSplit = !0)
            }
            A(e, t, n, i)
        },
        D = S.prototype;
    D.split = function(e) {
        this.isSplit && this.revert(), this.vars = e = e || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
        for (var t, n, i, r = this.elements.length, o = e.span ? "span" : "div", s = ("absolute" === e.position || e.absolute === !0, b(e.wordsClass, o)), a = b(e.charsClass, o); --r > -1;) i = this.elements[r], this._originals[r] = i.innerHTML, t = i.clientHeight, n = i.clientWidth, N(i, e, s, a), M(i, e, this.chars, this.words, this.lines, n, t);
        return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this
    }, D.revert = function() {
        if (!this._originals) throw "revert() call wasn't scoped properly.";
        for (var e = this._originals.length; --e > -1;) this.elements[e].innerHTML = this._originals[e];
        return this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this
    }, S.selector = e.$ || e.jQuery || function(t) {
        var n = e.$ || e.jQuery;
        return n ? (S.selector = n, n(t)) : "undefined" == typeof document ? t : document.querySelectorAll ? document.querySelectorAll(t) : document.getElementById("#" === t.charAt(0) ? t.substr(1) : t)
    }, S.version = "0.5.6"
}(_gsScope),
function(e) {
    "use strict";
    var t = function() {
        return (_gsScope.GreenSockGlobals || _gsScope)[e]
    };
    "function" == typeof define && define.amd ? define([], t) : "undefined" != typeof module && module.exports && (module.exports = t())
}("SplitText"),
function(e, t, n, i, r, o, s) {
    e.GoogleAnalyticsObject = r, e[r] = e[r] || function() {
        (e[r].q = e[r].q || []).push(arguments)
    }, e[r].l = 1 * new Date, o = t.createElement(n), s = t.getElementsByTagName(n)[0], o.async = 1, o.src = i, s.parentNode.insertBefore(o, s)
}(window, document, "script", "https://www.google-analytics.com/analytics.js", "ga"), ga("create", "UA-21270303-1", "auto"), ga("require", "GTM-TFJFV59"), ga("send", "pageview"), window.onload = function() {
    setTimeout(function() {
        window.scrollTo(0, 0)
    }, 0)
}, isTouchDevice() ? $("#spotlight").css("visibility", "hidden") : $("#spotlight").css("visibility", "visible"), paceOptions = {
    ajax: !1,
    document: !1,
    eventLag: !1,
    elements: {
        selectors: [".container"]
    }
};
var rulelink1 = CSSRulePlugin.getRule(".link-main a:before"),
    rulelink2 = CSSRulePlugin.getRule(".link-sec a:before");


$(document).ready(function() {
    function e() {
        $("#wrapper").empty(), $("#wrapper-outer").removeClass("home"), $("#wrapper").append($("#holder-newpage").html()), $("#holder-newpage").empty(), window.scrollTo(0, 0), c(), u(), a()
    }

    function t(t) {
        var n = t.attr("href");
        $.ajax({
            type: "GET",
            url: n
        }).done(function(i) {
            window.history.pushState("", null, n);
            var r = $(i).find("#wrapper").html();
            $("#holder-newpage").append(r), TweenMax.to(".pace-progress", 0, {
                backgroundColor: "#212121"
            });
            var o = new TimelineMax({
                onComplete: e
            });
            o.add(TweenMax.to(".pace", 0, {
                display: "none",
                visibility: "hidden",
                opacity: 0
            })).add(TweenMax.to(".pace-progress", 0, {
                display: "none",
                visibility: "hidden",
                opacity: 0
            })).add(TweenMax.to(".pace-placeholder", 0, {
                display: "none",
                visibility: "hidden",
                opacity: 0
            })).add(TweenMax.to(t.closest(".project-container"), 0, {
                zIndex: 99999
            })).add(TweenMax.to(t.find(".card-title"), .5, {
                opacity: 0,
                x: 0,
                ease: Expo.easeOut
            })).add(TweenMax.to(t.find(".card-year"), .5, {
                opacity: 0,
                rotation: "0deg",
                x: 50,
                y: 50,
                ease: Expo.easeOut
            }), "=-0.45").add(TweenMax.to(t.find(".card-role"), .5, {
                opacity: 0,
                x: -50,
                ease: Expo.easeOut
            }), "=-0.45").add(TweenMax.to(t.find(".card-project"), .5, {
                opacity: 0,
                x: 120,
                ease: Expo.easeOut
            }), "=-0.45").add(TweenMax.to(t.find(".card-line"), .5, {
                opacity: 0,
                x: -90,
                y: -35,
                rotation: "45deg",
                ease: Expo.easeOut
            }), "=-0.45").add(TweenMax.to(t.find(".card-bg"), .35, {
                scale: 12,
                force3D: !0
            }))
        })
    }

    function n(t) {
        var n = t.attr("href");
        $.ajax({
            type: "GET",
            url: n
        }).done(function(i) {
            window.history.pushState("", null, n);
            var r = $(i).find("#wrapper").html();
            $("#holder-newpage").append(r), TweenMax.to("body, html", 0, {
                overflow: "hidden"
            }), TweenMax.to(".pace-progress", 0, {
                backgroundColor: "#212121"
            });
            var o = new TimelineMax({
                onComplete: e
            });
            o.add(TweenMax.to(".pace", 0, {
                display: "none",
                visibility: "hidden",
                opacity: 0
            })).add(TweenMax.to(".pace-progress", 0, {
                display: "none",
                visibility: "hidden",
                opacity: 0
            })).add(TweenMax.to(".pace-placeholder", 0, {
                display: "none",
                visibility: "hidden",
                opacity: 0
            })).add(TweenMax.to(t.find(".project"), 0, {
                zIndex: 99999
            })).add(TweenMax.to(t.find(".project"), 2, {
                scaleX: 12
            })).add(TweenMax.to(t.find(".project"), 2, {
                scaleY: 25
            }), "=-1.35")
        })
    }

    function i(t) {
        var n = t.attr("href");
        $.ajax({
            type: "GET",
            url: n
        }).done(function(i) {
            window.history.pushState("", null, n);
            var r = $(i).find("#wrapper").html();
            $("#holder-newpage").append(r);
            var o = new TimelineMax({
                onComplete: e
            });
            o.add(TweenMax.to(".pace", 0, {
                display: "none",
                visibility: "hidden",
                opacity: 0
            })).add(TweenMax.to(".pace-progress", 0, {
                display: "none",
                visibility: "hidden",
                opacity: 0
            })).add(TweenMax.to(".pace-placeholder", 0, {
                display: "none",
                visibility: "hidden",
                opacity: 0
            })).add(TweenMax.to(t.find(".project"), 0, {
                zIndex: 99999
            })).add(TweenMax.to(t.find(".project"), 2, {
                scaleX: 12
            })).add(TweenMax.to(t.find(".project"), 2, {
                scaleY: 25
            }), "=-1.35")
        })
    }

    function r(e) {
        e.indexOf("portfolio") != -1 ? ($("#wrapper-outer").addClass("home"), u(!0), c(), a()) : e.indexOf("starbucks") == -1 && e.indexOf("withings") == -1 && e.indexOf("linkedin") == -1 && e.indexOf("facebook") == -1 && e.indexOf("freebies") == -1 || ($("#wrapper-outer").removeClass("home"), u(), c(), a())
    }

    function o(e) {
        $("#wrapper").empty(), $("#wrapper").append($("#holder-newpage").html()), $("#holder-newpage").empty(), window.scrollTo(0, 0), r(e)
    }

    function s(e) {
        return e.hasClass("portfolio-item") ? "portfolio" : e.hasClass("previous-item") ? "previous" : e.hasClass("next-item") ? "next" : e.hasClass("anchor-link") ? "anchor" : void 0
    }

    function a() {
        $("a").unbind("click").bind("click", function(e) {
            if ("portfolio" == s($(this))) e.preventDefault(), t($(this));
            else if ("previous" == s($(this))) e.preventDefault(), n($(this));
            else if ("next" == s($(this))) e.preventDefault(), i($(this));
            else if ("anchor" == s($(this))) {
                e.preventDefault();
                var r = $(this).attr("href"),
                    o = $(r).offset().top;
                TweenMax.to(window, 1.25, {
                    scrollTo: {
                        y: o
                    },
                    ease: Expo.easeOut
                })
            }
        })
    }

    function l() {
        TweenMax.to("body, html", 0, {
            overflow: "hidden"
        }), TweenMax.to(".eleven", .5, {
            delay: .5,
            opacity: 1,
            y: 0,
            skewX: 0,
            ease: Expo.easeOut
        }), TweenMax.to(".seventeen", .5, {
            delay: .6,
            opacity: 1,
            y: 0,
            skewX: 0,
            ease: Expo.easeOut
        }), TweenMax.to(".pace-placeholder", 0, {
            visibility: "visible"
        }), TweenMax.to(introText, 0, {
            opacity: 0,
            y: 80,
            skewX: "15deg",
            ease: Expo.easeOut
        }), TweenMax.to(secondaryText, 0, {
            opacity: 0,
            y: 20,
            skewX: "15deg",
            ease: Expo.easeOut
        }), TweenMax.to(".letter", 0, {
            drawSVG: "0% 0%"
        }), TweenMax.to(".letter-b", 0, {
            drawSVG: "0% 0%"
        }), TweenMax.to(".letter-top-bar", 0, {
            drawSVG: "0% 0%"
        });
        var e = new TimelineMax({});
        e.add(TweenMax.to(".cover", 1, {
            delay: 1,
            x: "100%",
            ease: Expo.easeOut
        })).add(TweenMax.to(".eleven", .35, {
            opacity: 0,
            y: "100%",
            ease: Expo.easeOut
        })).add(TweenMax.to(".seventeen", .35, {
            opacity: 0,
            y: "-100%",
            ease: Expo.easeOut
        }), "=-0.25").add(TweenMax.to(".pace-placeholder", .2, {
            clip: "rect(0px, 80px, 6px, 80px)",
            ease: Expo.easeOut
        }), "=-0.5").add(TweenMax.to(".typo-intro", 1, {
            opacity: 1,
            scale: 1,
            ease: Expo.easeOut
        })).add(TweenMax.staggerTo(".bg-line", .55, {
            y: 0,
            ease: Expo.easeOut
        }, .2), "=-1").add(TweenMax.to("#spotlight", 1, {
            opacity: .05,
            scale: 1,
            ease: Expo.easeOut
        }), "=-7.25").add(TweenMax.staggerTo(".letter", .35, {
            drawSVG: "0 100%",
            ease: Expo.easeOut
        }, .12), "=-7").add(TweenMax.to(".letter-b", .55, {
            drawSVG: "0 100%",
            ease: Expo.easeOut
        }), "=-5.5").add(TweenMax.from(".art-direction", .55, {
            y: "100%",
            opacity: 0,
            ease: Expo.easeOut
        }), "=-5.25").add(TweenMax.to(".signature", .55, {
            delay: .5,
            clip: "rect(0px, 320px, 150px, 320px)",
            ease: Expo.easeOut
        }), "=-4.5").add(TweenMax.to(".art-direction", .55, {
            y: "-100%",
            opacity: 0,
            ease: Expo.easeOut
        }), "=-4").add(TweenMax.to(".letter-b", .55, {
            y: "100%",
            opacity: 0,
            ease: Expo.easeOut
        }), "=-4").add(TweenMax.to(".eleven, .seventeen, .pace-placeholder", .1, {
            visibility: "hidden"
        })).add(TweenMax.to("body, html", 1, {
            overflowY: "visible"
        })).add(TweenMax.to("body, html", 1, {
            overflowX: "hidden"
        }), "=-1").add(TweenMax.to(".signature", .1, {
            display: "none"
        }), "=-1").add(TweenMax.to(".signature-b", .1, {
            display: "none"
        }), "=-1").add(TweenMax.to(".art-direction", .1, {
            display: "none"
        }), "=-1").add(TweenMax.to(".loading-year", .1, {
            display: "none"
        }), "=-1").add(TweenMax.to(".pace-placeholder", .1, {
            display: "none"
        }), "=-1").add(TweenMax.staggerTo(introText, .8, {
            opacity: 1,
            y: 0,
            skewX: "0deg",
            ease: Expo.easeOut
        }, .025), "=-4.5").add(TweenMax.staggerTo(secondaryText, .8, {
            opacity: 1,
            y: 0,
            skewX: "0deg",
            ease: Expo.easeOut
        }, .05), "=-3").add(TweenMax.to(rulelink1, .1, {
            cssRule: {
                opacity: 1
            }
        }), "=-3").add(TweenMax.to(rulelink2, .1, {
            cssRule: {
                opacity: 1
            }
        }), "=-3").add(TweenMax.to(".line-scroll-down-container", .2, {
            opacity: 1
        }), "=-3.75").add(TweenMax.to(".vertical-text", .8, {
            opacity: 1,
            y: "0%",
            skewX: "0deg",
            ease: Expo.easeOut
        }), "=-2").add(TweenMax.staggerTo("nav a", .8, {
            opacity: 1,
            y: 0,
            skewX: "0deg",
            ease: Expo.easeOut
        }, .2), "=-2").add(TweenMax.to(".email", .8, {
            opacity: 1,
            y: 0,
            skewX: "0deg",
            ease: Expo.easeOut
        }, .2), "=-1.8").add(TweenMax.to(".top-bar", .8, {
            opacity: 1,
            y: 0,
            skewX: "0",
            ease: Expo.easeOut
        }, .2), "=-1.8").add(TweenMax.staggerTo(".letter-top-bar", 1, {
            drawSVG: "0 100%",
            ease: Expo.easeOut
        }, .25), "=-1.8")
    }

    function u(e) {
        if ($("#wrapper-outer").hasClass("home")) mySplitText = new SplitText(".intro-main", {
            type: "words"
        }), introText = mySplitText.words, newSplitText = new SplitText(".intro-secondary", {
            type: "words"
        }), secondaryText = newSplitText.words, "undefined" != typeof e ? l() : Pace.on("done", function() {
            l()
        });
        else {
            mySplitText = new SplitText(".intro-main", {
                type: "words"
            }), introText = mySplitText.words, newSplitText = new SplitText(".intro-secondary", {
                type: "words"
            }), secondaryText = newSplitText.words, TweenMax.to(introText, 0, {
                opacity: 0,
                y: 80,
                skewX: "15deg",
                ease: Expo.easeOut
            }), TweenMax.to(secondaryText, 0, {
                opacity: 0,
                y: 20,
                skewX: "15deg",
                ease: Expo.easeOut
            }), TweenMax.to(".pace-progress", 0, {
                backgroundColor: "#212121"
            });
            var t = new TimelineMax({});
            t.add(TweenMax.to(".cover-new", 1, {
                delay: .5,
                y: "-100%",
                ease: Expo.easeOut
            }), "=-0.1").add(TweenMax.to("body, html", 0, {
                overflow: "hidden"
            })).add(TweenMax.to("#spotlight", 1, {
                opacity: .05,
                scale: 1,
                ease: Expo.easeOut
            }), "=-1").add(TweenMax.staggerTo(".bg-line", .8, {
                y: 0,
                ease: Expo.easeOut
            }, .025)).add(TweenMax.staggerTo(introText, .8, {
                opacity: 1,
                y: 0,
                skewX: "0deg",
                ease: Expo.easeOut
            }, .025)).add(TweenMax.staggerTo(secondaryText, .8, {
                opacity: 1,
                y: 0,
                skewX: "0deg",
                ease: Expo.easeOut
            }, .05)).add(TweenMax.to(rulelink1, .1, {
                cssRule: {
                    opacity: 1
                }
            }), "=-1").add(TweenMax.to(rulelink2, .1, {
                cssRule: {
                    opacity: 1
                }
            }), "=-1").add(TweenMax.to(".typo-intro", 1, {
                opacity: 1,
                scale: 1,
                ease: Expo.easeOut
            }), "=-3.5").add(TweenMax.to(".line-scroll-down-container", .2, {
                opacity: 1
            }), "=-2.25").add(TweenMax.to("body, html", 1, {
                overflowY: "visible"
            })).add(TweenMax.to("body, html", 1, {
                overflowX: "hidden"
            }), "=-1").add(TweenMax.to(".vertical-text", .8, {
                opacity: 1,
                y: "0%",
                skewX: "0deg",
                ease: Expo.easeOut
            }), "=-2").add(TweenMax.to(".top-bar", .8, {
                opacity: 1,
                y: 0,
                skewX: "0",
                ease: Expo.easeOut
            }, .2), "=-1.8").add(TweenMax.staggerTo(".letter-top-bar", 1, {
                drawSVG: "0 100%",
                ease: Expo.easeOut
            }, .25), "=-1.8").add(TweenMax.to("#project", .75, {
                height: "70vh",
                ease: Expo.easeOut
            }), "=-1.7")
        }
    }

    function c() {
        function e(e) {
            TweenMax.to("#spotlight", .55, {
                css: {
                    left: e.pageX,
                    top: e.pageY
                },
                ease: SlowMo.easeIn
            })
        }

        function t() {
            Draggable.create(".draggable-box", {
                bounds: h,
                edgeResistance: .65,
                type: "x",
                throwProps: !0,
                autoScroll: !0,
                throwProps: !0
            })
        }
        var n = new TimelineMax({
            repeat: -1
        });
        n.add(TweenMax.to(".line-scroll-down", 0, {
            y: "-100%"
        })).add(TweenMax.to(".line-scroll-down", 1, {
            delay: .5,
            y: "100%",
            ease: Expo.easeOut
        }));
        var i = new TimelineMax({
            repeat: -1,
            delay: 0
        });
        i.add(TweenMax.set(".line-inside", {
            x: "-100%",
            opacity: 1
        })).add(TweenMax.staggerTo(".line-inside", 1, {
            x: "100%",
            opacity: 1,
            ease: Expo.easeOut
        }, .2)).add(TweenMax.set(".line-inside", {
            opacity: 1
        })).add(TweenMax.staggerTo(".line-inside", 1, {
            x: "-100%",
            opacity: 1,
            ease: Expo.easeOut
        }, .2));
        var r = new ScrollMagic.Controller;
        $("#portfolio").each(function() {
            var e = new TimelineMax;
            e.to($(this).find(".typo-portfolio"), 1, {
                opacity: 1,
                y: 0,
                scale: 1,
                ease: Expo.easeOut
            });
            var t = new ScrollMagic.Scene({
                triggerElement: this,
                duration: 0,
                offset: "0"
            }).addTo(r).setTween(e)
        }), $(".project-container").each(function() {
            var e = new TimelineMax;
            e.from($(this).find(".left-side"), .75, {
                opacity: 0,
                x: "-100%",
                y: "100%",
                skewX: "-15deg",
                ease: Expo.easeOut
            }).from($(this).find(".right-side"), .75, {
                opacity: 0,
                x: "100%",
                y: "100%",
                skewX: "15deg",
                ease: Expo.easeOut
            }, "=-0.75").from($(this).find(".card-title"), .75, {
                opacity: 0,
                x: "100%",
                y: "100%",
                skewX: "15deg",
                ease: Expo.easeOut
            }, "=-0.75").from($(this).find(".card-project"), .75, {
                opacity: 0,
                x: "100%",
                y: "100%",
                skewX: "15deg",
                ease: Expo.easeOut
            }, "=-0.75").from($(this).find(".card-line"), .75, {
                opacity: 0,
                x: "-100%",
                y: "100%",
                skewX: "-15deg",
                ease: Expo.easeOut
            }, "=-0.7").from($(this).find(".card-year"), .75, {
                opacity: 0,
                x: "-100%",
                y: "500%",
                skewX: "-15deg",
                ease: Expo.easeOut
            }, "=-0.7").from($(this).find(".card-role"), .75, {
                opacity: 0,
                x: "-100%",
                y: "100%",
                skewX: "-15deg",
                ease: Expo.easeOut
            }, "=-0.65");
            var t = new ScrollMagic.Scene({
                triggerElement: this,
                duration: 0,
                offset: "-200%"
            }).addTo(r).setTween(e)
        }), $(".awards-link").each(function() {
            var e = new TimelineMax;
            e.from($(this).find(".awards-name"), .75, {
                opacity: 0,
                x: "-100%",
                y: "100%",
                skewX: "-15deg",
                ease: Expo.easeOut
            }).from($(this).find(".awards-date"), .75, {
                opacity: 0,
                x: "100%",
                y: "100%",
                skewX: "15deg",
                ease: Expo.easeOut
            }, "=-0.75").from($(this).find(".awards-name-after"), .1, {
                opacity: 0
            }, "=-0.7").from($(this).find(".awards-date-after"), .1, {
                opacity: 0
            }, "=-0.7").from($(this).find(".awards-background"), .1, {
                opacity: 0
            }, "=-0.7");
            var t = new ScrollMagic.Scene({
                triggerElement: this,
                duration: 0,
                offset: "-200%"
            }).addTo(r).setTween(e)
        }), $(".awards-container").each(function() {
            var e = new TimelineMax;
            e.from($(this).find(".awards-title"), .75, {
                opacity: 0,
                x: "-100%",
                y: "100%",
                skewX: "-15deg",
                ease: Expo.easeOut
            }).to($(this).find(".typo-awards"), 1, {
                opacity: 1,
                scale: 1,
                ease: Expo.easeOut
            }, "=-0.75");
            var t = new ScrollMagic.Scene({
                triggerElement: this,
                duration: 0,
                offset: "-350%"
            }).addTo(r).setTween(e)
        });
        var o = new TimelineMax;
        o.from("#history .history-title", .75, {
            opacity: 0,
            y: "100%",
            skewX: "-15deg",
            ease: Expo.easeOut
        }).to("#history .typo-history", 1, {
            opacity: 1,
            scale: 1,
            ease: Expo.easeOut
        }, "=-0.75").from("#history .drag-me", .75, {
            opacity: 0,
            scale: .7,
            ease: Expo.easeOut
        }, "=-0.55").staggerFrom("#history .year-container", .75, {
            opacity: 0,
            y: "100%",
            skewX: "-15deg",
            ease: Expo.easeOut
        }, .25, "=-0.55");
        var s = new ScrollMagic.Scene({
                triggerElement: "#history",
                duration: 0,
                offset: "0%"
            }).addTo(r).setTween(o),
            a = new TimelineMax;
        a.to("#contacts .letter-footer", 0, {
            drawSVG: "0% 0%"
        }).to("#contacts .typo-contacts", 1, {
            opacity: 1,
            scale: 1,
            ease: Expo.easeOut
        }).to("#contacts .contacts-main", .75, {
            opacity: 1,
            y: 0,
            skewX: "0deg",
            ease: Expo.easeOut
        }, "=-1").to("#contacts .contacts-secondary", .75, {
            opacity: 1,
            y: 0,
            skewX: "0deg",
            ease: Expo.easeOut
        }, "=-1").to("#contacts .vertical-text-new", .75, {
            opacity: 1,
            y: 0,
            x: 0,
            rotate: "90deg",
            skewX: "0deg",
            ease: Expo.easeOut
        }, "=-0.75").staggerTo("#contacts .letter-footer", .55, {
            drawSVG: "0 100%",
            ease: Expo.easeOut
        }, .12, "=-0.75");
        var l = new ScrollMagic.Scene({
                triggerElement: "#contacts",
                duration: 0,
                offset: "-35%"
            }).addTo(r).setTween(a),
            u = new TimelineMax;
        u.from("#next .next-title", .75, {
            opacity: 0,
            y: "100%",
            skewX: "-15deg",
            ease: Expo.easeOut
        }).to("#next .typo-portfolio", 1, {
            opacity: 1,
            scale: 1,
            ease: Expo.easeOut
        }, "=-0.75").from("#next .prev-title-folio", .55, {
            x: "-100%",
            ease: Expo.easeOut
        }, "=-0.75").from("#next .next-title-folio", .55, {
            x: "100%",
            ease: Expo.easeOut
        }, "=-0.55");
        var c = new ScrollMagic.Scene({
            triggerElement: "#next",
            duration: 0,
            offset: "0%"
        }).addTo(r).setTween(u);
        $(".card").on("mouseenter", function() {
            var e = new TimelineMax({});
            e.add(TweenMax.to($(this).find(".card-bg"), .4, {
                scale: 1.1,
                skewX: "5deg",
                skewY: "-5deg",
                boxShadow: "0px 20px 32px 0px #D7D7D7",
                ease: Expo.easeOut
            })).add(TweenMax.to($(this).find(".card-title"), .4, {
                x: 50,
                ease: Expo.easeOut
            }), "=-0.4").add(TweenMax.to($(this).find(".card-year"), .4, {
                rotation: "0deg",
                x: 50,
                y: 50,
                ease: Expo.easeOut
            }), "=-0.4").add(TweenMax.to($(this).find(".card-role"), .4, {
                x: -50,
                ease: Expo.easeOut
            }), "=-0.4").add(TweenMax.to($(this).find(".card-project"), .4, {
                x: 120,
                ease: Expo.easeOut
            }), "=-0.375").add(TweenMax.to($(this).find(".card-line"), .35, {
                x: -90,
                y: -35,
                rotation: "45deg",
                ease: Expo.easeOut
            }), "=-0.4")
        }).on("mouseleave", function() {
            var e = new TimelineMax({});
            e.add(TweenMax.to($(this).find(".card-bg"), .25, {
                scale: 1,
                skewX: "0deg",
                skewY: "0deg",
                boxShadow: "0px 0px 0px 0px #ccc",
                ease: Expo.easeOut
            })).add(TweenMax.to($(this).find(".card-title"), .25, {
                x: 0,
                ease: Expo.easeOut
            }), "=-0.25").add(TweenMax.to($(this).find(".card-project"), .25, {
                x: 0,
                ease: Expo.easeOut
            }), "=-0.25").add(TweenMax.to($(this).find(".card-year"), .25, {
                rotation: "-90deg",
                x: 0,
                y: 0,
                ease: Expo.easeOut
            }), "=-0.25").add(TweenMax.to($(this).find(".card-role"), .25, {
                x: 0,
                ease: Expo.easeOut
            }), "=-0.25").add(TweenMax.to($(this).find(".card-line"), .25, {
                x: 0,
                y: 0,
                rotation: "0deg",
                ease: Expo.easeOut
            }), "=-0.25")
        }), $(".awards-link").on("mouseenter", function() {
            var e = new TimelineMax({});
            e.add(TweenMax.to($(this).find(".awards-name"), .35, {
                y: "100%",
                ease: Expo.easeOut
            })).add(TweenMax.to($(this).find(".awards-date"), .35, {
                y: "100%",
                ease: Expo.easeOut
            }), "=-0.35").add(TweenMax.to($(this).find(".awards-background"), .35, {
                y: "0%",
                scaleX: 1,
                ease: Expo.easeOut
            }), "=-0.35").add(TweenMax.to($(this).find(".awards-name-after"), .35, {
                y: "0%",
                ease: Expo.easeOut
            }), "=-0.325").add(TweenMax.to($(this).find(".awards-date-after"), .35, {
                y: "0%",
                ease: Expo.easeOut
            }), "=-0.30")
        }).on("mouseleave", function() {
            var e = new TimelineMax;
            e.add(TweenMax.to($(this).find(".awards-name"), .35, {
                y: "0%",
                ease: Expo.easeOut
            })).add(TweenMax.to($(this).find(".awards-date"), .35, {
                y: "0%",
                ease: Expo.easeOut
            }), "=-0.35").add(TweenMax.to($(this).find(".awards-background"), .35, {
                y: "-100%",
                scaleX: .75,
                ease: Expo.easeOut
            }), "=-0.35").add(TweenMax.to($(this).find(".awards-name-after"), .35, {
                y: "-100%",
                ease: Expo.easeOut
            }), "=-0.325").add(TweenMax.to($(this).find(".awards-date-after"), .35, {
                y: "100%",
                ease: Expo.easeOut
            }), "=-0.30")
        }), $(".project-next-prev-container").on("mouseenter", function() {
            var e = new TimelineMax({});
            e.add(TweenMax.to($(this).find(".prev-project"), .35, {
                x: "-30%",
                ease: Expo.easeOut
            })).add(TweenMax.to($(this).find(".next-project"), .35, {
                x: "30%",
                ease: Expo.easeOut
            }), "=-0.35").add(TweenMax.to($(this).find(".prev-title-folio"), .35, {
                x: "-120%",
                ease: Expo.easeOut
            }), "=-0.35").add(TweenMax.to($(this).find(".next-title-folio"), .35, {
                x: "120%",
                ease: Expo.easeOut
            }), "=-0.35").add(TweenMax.to($(this).find(".prev-subtitle-folio"), .35, {
                x: "-5%",
                ease: Expo.easeOut
            }), "=-0.15").add(TweenMax.to($(this).find(".next-subtitle-folio"), .35, {
                x: "5%",
                ease: Expo.easeOut
            }), "=-0.35")
        }).on("mouseleave", function() {
            var e = new TimelineMax({});
            e.add(TweenMax.to($(this).find(".prev-project"), .35, {
                x: "-100%",
                ease: Expo.easeOut
            })).add(TweenMax.to($(this).find(".next-project"), .35, {
                x: "100%",
                ease: Expo.easeOut
            }), "=-0.35").add(TweenMax.to($(this).find(".prev-title-folio"), .35, {
                x: "-35%",
                ease: Expo.easeOut
            }), "=-0.35").add(TweenMax.to($(this).find(".next-title-folio"), .35, {
                x: "35%",
                ease: Expo.easeOut
            }), "=-0.35").add(TweenMax.to($(this).find(".prev-subtitle-folio"), .35, {
                x: "-120%",
                ease: Expo.easeOut
            }), "=-0.35").add(TweenMax.to($(this).find(".next-subtitle-folio"), .35, {
                x: "120%",
                ease: Expo.easeOut
            }), "=-0.35")
        }), $(window).on("mousemove", e);
        var h = $("#draggable-container");
        t()
    }
    window.onpopstate = function(e) {
        var t = window.location.href;
        $.ajax({
            type: "GET",
            url: t
        }).done(function(e) {
            var n = $(e).find("#wrapper").html();
            $("#holder-newpage").append(n), o(t)
        })
    }, c(), u(), a()
});