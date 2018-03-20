/*1521560373,,JIT Construction: v3737592,cs_CZ*/

/**
 * Copyright (c) 2017-present, Facebook, Inc. All rights reserved.
 *
 * You are hereby granted a non-exclusive, worldwide, royalty-free license to use,
 * copy, modify, and distribute this software in source code or binary form for use
 * in connection with the web services and APIs provided by Facebook.
 *
 * As with any software that integrates with the Facebook platform, your use of
 * this software is subject to the Facebook Platform Policy
 * [http://developers.facebook.com/policy/]. This copyright notice shall be
 * included in all copies or substantial portions of the software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
try {
    window.FB || (function (window, fb_fif_window) {
        var apply = Function.prototype.apply;
        function bindContext(fn, thisArg) {
            return function _sdkBound() {
                return apply.call(fn, thisArg, arguments);
            };
        }
        var global = {__type: 'JS_SDK_SANDBOX', window: window, document: window.document};
        var sandboxWhitelist = ['setTimeout', 'setInterval', 'clearTimeout', 'clearInterval'];
        for (var i = 0; i < sandboxWhitelist.length; i++) {
            global[sandboxWhitelist[i]] = bindContext(window[sandboxWhitelist[i]], window);
        }
        (function () {
            var self = window;
            var __DEV__ = 0;
            function emptyFunction() {
            }
            var __transform_includes = {};
            var __annotator, __bodyWrapper;
            var __w, __t;
            var undefined;
            var __p;
            with (this) {
                (function () {
                    var a = {}, b = function b(i, j) {
                        if (!i && !j) return null;
                        var k = {};
                        if (typeof i !== "undefined") k.type = i;
                        if (typeof j !== "undefined") k.signature = j;
                        return k
                    }, c = function c(i, j) {
                        return b(i && /^[A-Z]/.test(i) ? i : undefined, j && (j.params && j.params.length || j.returns) ? "function(" + (j.params ? j.params.map(function (k) {
                            return /\?/.test(k) ? "?" + k.replace("?", "") : k
                        }).join(",") : "") + ")" + (j.returns ? ":" + j.returns : "") : undefined)
                    }, d = function d(i, j, k) {
                        return i
                    }, e = function e(i, j, k) {
                        if ("sourcemeta" in __transform_includes) i.__SMmeta = j;
                        if ("typechecks" in __transform_includes) {
                            var l = c(j ? j.name : undefined, k);
                            if (l) __w(i, l)
                        }
                        return i
                    }, f = function f(i, j, k) {
                        return k.apply(i, j)
                    }, g = function g(i, j, k, l) {
                        if (l && l.params) __t.apply(i, l.params);
                        var m = k.apply(i, j);
                        if (l && l.returns) __t([m, l.returns]);
                        return m
                    }, h = function h(i, j, k, l, m) {
                        if (m) {
                            if (!m.callId) m.callId = m.module + ":" + (m.line || 0) + ":" + (m.column || 0);
                            var n = m.callId;
                            a[n] = (a[n] || 0) + 1
                        }
                        return k.apply(i, j)
                    };
                    if (typeof __transform_includes === "undefined") {
                        __annotator = d;
                        __bodyWrapper = f
                    } else {
                        __annotator = e;
                        if ("codeusage" in __transform_includes) {
                            __annotator = d;
                            __bodyWrapper = h;
                            __bodyWrapper.getCodeUsage = function () {
                                return a
                            };
                            __bodyWrapper.clearCodeUsage = function () {
                                a = {}
                            }
                        } else if ("typechecks" in __transform_includes) __bodyWrapper = g; else __bodyWrapper = f
                    }
                })();
                __t = function (a) {
                    return a[0]
                };
                __w = function (a) {
                    return a
                };
                var require, __d;
                (function (a) {
                    var b = {}, c = {}, d = ["global", "require", "requireDynamic", "requireLazy", "module", "exports"];
                    require = function (e, f) {
                        if (Object.prototype.hasOwnProperty.call(c, e)) return c[e];
                        if (!Object.prototype.hasOwnProperty.call(b, e)) {
                            if (f) return null;
                            throw new Error("Module " + e + " has not been defined")
                        }
                        var g = b[e], h = g.deps, i = g.factory.length, j, k = [];
                        for (var l = 0; l < i; l++) {
                            switch (h[l]) {
                                case"module":
                                    j = g;
                                    break;
                                case"exports":
                                    j = g.exports;
                                    break;
                                case"global":
                                    j = a;
                                    break;
                                case"require":
                                    j = require;
                                    break;
                                case"requireDynamic":
                                    j = null;
                                    break;
                                case"requireLazy":
                                    j = null;
                                    break;
                                default:
                                    j = require.call(null, h[l])
                            }
                            k.push(j)
                        }
                        g.factory.apply(a, k);
                        c[e] = g.exports;
                        return g.exports
                    };
                    __d = function (e, f, g, h) {
                        if (typeof g == "function") {
                            b[e] = {factory: g, deps: d.concat(f), exports: {}};
                            if (h === 3) require.call(null, e)
                        } else c[e] = g
                    }
                })(this);
                __d("ES5Array", [], (function a(b, c, d, e, f, g) {
                    var h = {};
                    h.isArray = function (i) {
                        return Object.prototype.toString.call(i) == "[object Array]"
                    };
                    f.exports = h
                }), null);
                __d("ES5ArrayPrototype", [], (function a(b, c, d, e, f, g) {
                    __p && __p();
                    var h = {};
                    h.map = function (i, j) {
                        if (typeof i != "function") throw new TypeError();
                        var k = void 0, l = this.length, m = new Array(l);
                        for (k = 0; k < l; ++k) if (k in this) m[k] = i.call(j, this[k], k, this);
                        return m
                    };
                    h.forEach = function (i, j) {
                        h.map.call(this, i, j)
                    };
                    h.filter = function (i, j) {
                        __p && __p();
                        if (typeof i != "function") throw new TypeError();
                        var k = void 0, l = void 0, m = this.length, n = [];
                        for (k = 0; k < m; ++k) if (k in this) {
                            l = this[k];
                            if (i.call(j, l, k, this)) n.push(l)
                        }
                        return n
                    };
                    h.every = function (i, j) {
                        if (typeof i != "function") throw new TypeError();
                        var k = new Object(this), l = k.length;
                        for (var m = 0; m < l; m++) if (m in k) if (!i.call(j, k[m], m, k)) return false;
                        return true
                    };
                    h.some = function (i, j) {
                        if (typeof i != "function") throw new TypeError();
                        var k = new Object(this), l = k.length;
                        for (var m = 0; m < l; m++) if (m in k) if (i.call(j, k[m], m, k)) return true;
                        return false
                    };
                    h.indexOf = function (i, j) {
                        var k = this.length;
                        j |= 0;
                        if (j < 0) j += k;
                        for (; j < k; j++) if (j in this && this[j] === i) return j;
                        return -1
                    };
                    f.exports = h
                }), null);
                __d("ES5Date", [], (function a(b, c, d, e, f, g) {
                    var h = {};
                    h.now = function () {
                        return new Date().getTime()
                    };
                    f.exports = h
                }), null);
                __d("ES5FunctionPrototype", [], (function a(b, c, d, e, f, g) {
                    __p && __p();
                    var h = {};
                    h.bind = function (i) {
                        if (typeof this != "function") throw new TypeError("Bind must be called on a function");
                        var j = this, k = Array.prototype.slice.call(arguments, 1);

                        function l() {
                            return j.apply(i, k.concat(Array.prototype.slice.call(arguments)))
                        }

                        l.displayName = "bound:" + (j.displayName || j.name || "(?)");
                        l.toString = function m() {
                            return "bound: " + j
                        };
                        return l
                    };
                    f.exports = h
                }), null);
                __d("ie8DontEnum", [], (function a(b, c, d, e, f, g) {
                    var h = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "prototypeIsEnumerable", "constructor"],
                        i = {}.hasOwnProperty, j = function j() {
                        };
                    if ({toString: true}.propertyIsEnumerable("toString")) j = function j(k, l) {
                        for (var m = 0; m < h.length; m++) {
                            var n = h[m];
                            if (i.call(k, n)) l(n)
                        }
                    };
                    f.exports = j
                }), null);
                __d("ES5Object", ["ie8DontEnum"], (function a(b, c, d, e, f, g, h) {
                    __p && __p();
                    var i = {}.hasOwnProperty, j = {};

                    function k() {
                    }

                    j.create = function (l) {
                        var m = typeof l;
                        if (m != "object" && m != "function") throw new TypeError("Object prototype may only be a Object or null");
                        k.prototype = l;
                        return new k()
                    };
                    j.keys = function (l) {
                        __p && __p();
                        var m = typeof l;
                        if (m != "object" && m != "function" || l === null) throw new TypeError("Object.keys called on non-object");
                        var n = [];
                        for (var o in l) if (i.call(l, o)) n.push(o);
                        h(l, function (p) {
                            return n.push(p)
                        });
                        return n
                    };
                    j.freeze = function (l) {
                        return l
                    };
                    j.isFrozen = function () {
                        return false
                    };
                    j.seal = function (l) {
                        return l
                    };
                    f.exports = j
                }), null);
                __d("ES5StringPrototype", [], (function a(b, c, d, e, f, g) {
                    __p && __p();
                    var h = {};
                    h.trim = function () {
                        if (this == null) throw new TypeError("String.prototype.trim called on null or undefined");
                        return String.prototype.replace.call(this, /^\s+|\s+$/g, "")
                    };
                    h.startsWith = function (i) {
                        var j = String(this);
                        if (this == null) throw new TypeError("String.prototype.startsWith called on null or undefined");
                        var k = arguments.length > 1 ? Number(arguments[1]) : 0;
                        if (isNaN(k)) k = 0;
                        var l = Math.min(Math.max(k, 0), j.length);
                        return j.indexOf(String(i), k) == l
                    };
                    h.endsWith = function (i) {
                        __p && __p();
                        var j = String(this);
                        if (this == null) throw new TypeError("String.prototype.endsWith called on null or undefined");
                        var k = j.length, l = String(i), m = arguments.length > 1 ? Number(arguments[1]) : k;
                        if (isNaN(m)) m = 0;
                        var n = Math.min(Math.max(m, 0), k), o = n - l.length;
                        if (o < 0) return false;
                        return j.lastIndexOf(l, o) == o
                    };
                    h.includes = function (i) {
                        if (this == null) throw new TypeError("String.prototype.contains called on null or undefined");
                        var j = String(this), k = arguments.length > 1 ? Number(arguments[1]) : 0;
                        if (isNaN(k)) k = 0;
                        return j.indexOf(String(i), k) != -1
                    };
                    h.contains = h.includes;
                    h.repeat = function (i) {
                        __p && __p();
                        if (this == null) throw new TypeError("String.prototype.repeat called on null or undefined");
                        var j = String(this), k = i ? Number(i) : 0;
                        if (isNaN(k)) k = 0;
                        if (k < 0 || k === Infinity) throw RangeError();
                        if (k === 1) return j;
                        if (k === 0) return "";
                        var l = "";
                        while (k) {
                            if (k & 1) l += j;
                            if (k >>= 1) j += j
                        }
                        return l
                    };
                    f.exports = h
                }), null);
                __d("ES6Array", [], (function a(b, c, d, e, f, g) {
                    "use strict";
                    __p && __p();
                    var h = {
                        from: function i(j) {
                            __p && __p();
                            if (j == null) throw new TypeError("Object is null or undefined");
                            var k = arguments[1], l = arguments[2], m = this, n = Object(j),
                                o = typeof Symbol === "function" ? typeof Symbol === "function" ? Symbol.iterator : "@@iterator" : "@@iterator",
                                p = typeof k === "function", q = typeof n[o] === "function", r = 0, s = void 0,
                                t = void 0;
                            if (q) {
                                s = typeof m === "function" ? new m() : [];
                                var u = n[o](), v = void 0;
                                while (!(v = u.next()).done) {
                                    t = v.value;
                                    if (p) t = k.call(l, t, r);
                                    s[r] = t;
                                    r += 1
                                }
                                s.length = r;
                                return s
                            }
                            var w = n.length;
                            if (isNaN(w) || w < 0) w = 0;
                            s = typeof m === "function" ? new m(w) : new Array(w);
                            while (r < w) {
                                t = n[r];
                                if (p) t = k.call(l, t, r);
                                s[r] = t;
                                r += 1
                            }
                            s.length = r;
                            return s
                        }
                    };
                    f.exports = h
                }), null);
                __d("ES6ArrayPrototype", [], (function a(b, c, d, e, f, g) {
                    __p && __p();
                    var h = {
                        find: function i(j, k) {
                            if (this == null) throw new TypeError("Array.prototype.find called on null or undefined");
                            if (typeof j !== "function") throw new TypeError("predicate must be a function");
                            var l = h.findIndex.call(this, j, k);
                            return l === -1 ? void 0 : this[l]
                        }, findIndex: function i(j, k) {
                            if (this == null) throw new TypeError("Array.prototype.findIndex called on null or undefined");
                            if (typeof j !== "function") throw new TypeError("predicate must be a function");
                            var l = Object(this), m = l.length >>> 0;
                            for (var n = 0; n < m; n++) if (j.call(k, l[n], n, l)) return n;
                            return -1
                        }, fill: function i(j) {
                            if (this == null) throw new TypeError("Array.prototype.fill called on null or undefined");
                            var k = Object(this), l = k.length >>> 0, m = arguments[1], n = m >> 0,
                                o = n < 0 ? Math.max(l + n, 0) : Math.min(n, l), p = arguments[2],
                                q = p === undefined ? l : p >> 0, r = q < 0 ? Math.max(l + q, 0) : Math.min(q, l);
                            while (o < r) {
                                k[o] = j;
                                o++
                            }
                            return k
                        }
                    };
                    f.exports = h
                }), null);
                __d("ES6DatePrototype", [], (function a(b, c, d, e, f, g) {
                    function h(j) {
                        return (j < 10 ? "0" : "") + j
                    }

                    var i = {
                        toISOString: function j() {
                            if (!isFinite(this)) throw new Error("Invalid time value");
                            var k = this.getUTCFullYear();
                            k = (k < 0 ? "-" : k > 9999 ? "+" : "") + ("00000" + Math.abs(k)).slice(0 <= k && k <= 9999 ? -4 : -6);
                            return k + "-" + h(this.getUTCMonth() + 1) + "-" + h(this.getUTCDate()) + "T" + h(this.getUTCHours()) + ":" + h(this.getUTCMinutes()) + ":" + h(this.getUTCSeconds()) + "." + (this.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z"
                        }
                    };
                    f.exports = i
                }), null);
                __d("ES6Number", [], (function a(b, c, d, e, f, g) {
                    __p && __p();
                    var h = Math.pow(2, -52), i = Math.pow(2, 53) - 1, j = -1 * i, k = {
                        isFinite: function (l) {
                            function m(n) {
                                return l.apply(this, arguments)
                            }

                            m.toString = function () {
                                return l.toString()
                            };
                            return m
                        }(function (l) {
                            return typeof l == "number" && isFinite(l)
                        }), isNaN: function (l) {
                            function m(n) {
                                return l.apply(this, arguments)
                            }

                            m.toString = function () {
                                return l.toString()
                            };
                            return m
                        }(function (l) {
                            return typeof l == "number" && isNaN(l)
                        }), isInteger: function l(m) {
                            return this.isFinite(m) && Math.floor(m) === m
                        }, isSafeInteger: function l(m) {
                            return this.isFinite(m) && m >= this.MIN_SAFE_INTEGER && m <= this.MAX_SAFE_INTEGER && Math.floor(m) === m
                        }, EPSILON: h, MAX_SAFE_INTEGER: i, MIN_SAFE_INTEGER: j
                    };
                    f.exports = k
                }), null);
                __d("ES6Object", ["ie8DontEnum"], (function a(b, c, d, e, f, g, h) {
                    __p && __p();
                    var i = {}.hasOwnProperty, j = {
                        assign: function k(l) {
                            __p && __p();
                            if (l == null) throw new TypeError("Object.assign target cannot be null or undefined");
                            l = Object(l);
                            for (var m = arguments.length, n = Array(m > 1 ? m - 1 : 0), o = 1; o < m; o++) n[o - 1] = arguments[o];
                            for (var p = 0; p < n.length; p++) {
                                var q = n[p];
                                if (q == null) continue;
                                q = Object(q);
                                for (var r in q) if (i.call(q, r)) l[r] = q[r];
                                h(q, function (r) {
                                    return l[r] = q[r]
                                })
                            }
                            return l
                        }, is: function k(l, m) {
                            if (l === m) return l !== 0 || 1 / l === 1 / m; else return l !== l && m !== m
                        }
                    };
                    f.exports = j
                }), null);
                __d("ES7ArrayPrototype", ["ES5ArrayPrototype", "ES5Array"], (function a(b, c, d, e, f, g, h, i) {
                    __p && __p();
                    var j = h.indexOf, k = i.isArray;

                    function l(p) {
                        return Math.min(Math.max(m(p), 0), Number.MAX_SAFE_INTEGER)
                    }

                    function m(p) {
                        var q = Number(p);
                        return isFinite(q) && q !== 0 ? n(q) * Math.floor(Math.abs(q)) : q
                    }

                    function n(p) {
                        return p >= 0 ? 1 : -1
                    }

                    var o = {
                        includes: function p(q) {
                            "use strict";
                            __p && __p();
                            if (q !== undefined && k(this) && !(typeof q === "number" && isNaN(q))) return j.apply(this, arguments) !== -1;
                            var r = Object(this), s = r.length ? l(r.length) : 0;
                            if (s === 0) return false;
                            var t = arguments.length > 1 ? m(arguments[1]) : 0, u = t < 0 ? Math.max(s + t, 0) : t,
                                v = isNaN(q) && typeof q === "number";
                            while (u < s) {
                                var w = r[u];
                                if (w === q || typeof w === "number" && v && isNaN(w)) return true;
                                u++
                            }
                            return false
                        }
                    };
                    f.exports = o
                }), null);
                __d("ES7Object", ["ie8DontEnum"], (function a(b, c, d, e, f, g, h) {
                    __p && __p();
                    var i = {}.hasOwnProperty, j = {};
                    j.entries = function (k) {
                        if (k == null) throw new TypeError("Object.entries called on non-object");
                        var l = [];
                        for (var m in k) if (i.call(k, m)) l.push([m, k[m]]);
                        h(k, function (n) {
                            return l.push([n, k[n]])
                        });
                        return l
                    };
                    j.values = function (k) {
                        if (k == null) throw new TypeError("Object.values called on non-object");
                        var l = [];
                        for (var m in k) if (i.call(k, m)) l.push(k[m]);
                        h(k, function (n) {
                            return l.push(k[n])
                        });
                        return l
                    };
                    f.exports = j
                }), null);
                __d("ES7StringPrototype", [], (function a(b, c, d, e, f, g) {
                    var h = {};
                    h.trimLeft = function () {
                        return this.replace(/^\s+/, "")
                    };
                    h.trimRight = function () {
                        return this.replace(/\s+$/, "")
                    };
                    f.exports = h
                }), null);
                /**
                 * License: https://www.facebook.com/legal/license/feHxB3UzKXp/
                 */
                __d("json3-3.3.2", [], (function aa(ba, ca, da, ea, fa, a) {
                    "use strict";
                    __p && __p();
                    var b = {}, c = {exports: b}, d;

                    function ga() {
                        __p && __p();
                        (function () {
                            __p && __p();
                            var e = typeof d === "function" && d.amd, f = {"function": true, object: true},
                                g = f[typeof b] && b && !b.nodeType && b, h = f[typeof window] && window || this,
                                i = g && f[typeof c] && c && !c.nodeType && typeof ba == "object" && ba;
                            if (i && (i.global === i || i.window === i || i.self === i)) h = i;

                            function j(m, a) {
                                __p && __p();
                                m || (m = h.Object());
                                a || (a = h.Object());
                                var ma = m.Number || h.Number, na = m.String || h.String, oa = m.Object || h.Object,
                                    n = m.Date || h.Date, pa = m.SyntaxError || h.SyntaxError,
                                    qa = m.TypeError || h.TypeError, ra = m.Math || h.Math, k = m.JSON || h.JSON;
                                if (typeof k == "object" && k) {
                                    a.stringify = k.stringify;
                                    a.parse = k.parse
                                }
                                var sa = oa.prototype, o = sa.toString, p, q, r, s = new n(-3509827334573292);
                                try {
                                    s = s.getUTCFullYear() == -109252 && s.getUTCMonth() === 0 && s.getUTCDate() === 1 && s.getUTCHours() == 10 && s.getUTCMinutes() == 37 && s.getUTCSeconds() == 6 && s.getUTCMilliseconds() == 708
                                } catch (t) {
                                }

                                function u(J) {
                                    __p && __p();
                                    if (u[J] !== r) return u[J];
                                    var K;
                                    if (J == "bug-string-char-index") K = "a"[0] != "a"; else if (J == "json") K = u("json-stringify") && u("json-parse"); else {
                                        var L, M = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                                        if (J == "json-stringify") {
                                            var N = a.stringify, O = typeof N == "function" && s;
                                            if (O) {
                                                (L = function () {
                                                    return 1
                                                }).toJSON = L;
                                                try {
                                                    O = N(0) === "0" && N(new ma()) === "0" && N(new na()) == '""' && N(o) === r && N(r) === r && N() === r && N(L) === "1" && N([L]) == "[1]" && N([r]) == "[null]" && N(null) == "null" && N([r, o, null]) == "[null,null,null]" && N({a: [L, true, false, null, "\0\b\n\f\r\t"]}) == M && N(null, L) === "1" && N([1, 2], null, 1) == "[\n 1,\n 2\n]" && N(new n(-864e13)) == '"-271821-04-20T00:00:00.000Z"' && N(new n(864e13)) == '"+275760-09-13T00:00:00.000Z"' && N(new n(-621987552e5)) == '"-000001-01-01T00:00:00.000Z"' && N(new n(-1)) == '"1969-12-31T23:59:59.999Z"'
                                                } catch (t) {
                                                    O = false
                                                }
                                            }
                                            K = O
                                        }
                                        if (J == "json-parse") {
                                            var P = a.parse;
                                            if (typeof P == "function") try {
                                                if (P("0") === 0 && !P(false)) {
                                                    L = P(M);
                                                    var Q = L.a.length == 5 && L.a[0] === 1;
                                                    if (Q) {
                                                        try {
                                                            Q = !P('"\t"')
                                                        } catch (t) {
                                                        }
                                                        if (Q) try {
                                                            Q = P("01") !== 1
                                                        } catch (t) {
                                                        }
                                                        if (Q) try {
                                                            Q = P("1.") !== 1
                                                        } catch (t) {
                                                        }
                                                    }
                                                }
                                            } catch (t) {
                                                Q = false
                                            }
                                            K = Q
                                        }
                                    }
                                    return u[J] = !!K
                                }

                                if (!u("json")) {
                                    var v = "[object Function]", ta = "[object Date]", w = "[object Number]",
                                        x = "[object String]", y = "[object Array]", ua = "[object Boolean]",
                                        z = u("bug-string-char-index");
                                    if (!s) var A = ra.floor,
                                        va = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                                        B = function (J, K) {
                                            return va[K] + 365 * (J - 1970) + A((J - 1969 + (K = +(K > 1))) / 4) - A((J - 1901 + K) / 100) + A((J - 1601 + K) / 400)
                                        };
                                    if (!(p = sa.hasOwnProperty)) p = function (J) {
                                        __p && __p();
                                        var K = {}, L;
                                        if ((K.__proto__ = null, K.__proto__ = {toString: 1}, K).toString != o) p = function (J) {
                                            var M = this.__proto__, N = J in (this.__proto__ = null, this);
                                            this.__proto__ = M;
                                            return N
                                        }; else {
                                            L = K.constructor;
                                            p = function (J) {
                                                var M = (this.constructor || L).prototype;
                                                return J in this && !(J in M && this[J] === M[J])
                                            }
                                        }
                                        K = null;
                                        return p.call(this, J)
                                    };
                                    q = function (J, K) {
                                        __p && __p();
                                        var L = 0, M, N, O;
                                        (M = function () {
                                            this.valueOf = 0
                                        }).prototype.valueOf = 0;
                                        N = new M();
                                        for (O in N) if (p.call(N, O)) L++;
                                        M = N = null;
                                        if (!L) {
                                            N = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
                                            q = function (J, K) {
                                                var P = o.call(J) == v, O, Q,
                                                    R = !P && typeof J.constructor != "function" && f[typeof J.hasOwnProperty] && J.hasOwnProperty || p;
                                                for (O in J) if (!(P && O == "prototype") && R.call(J, O)) K(O);
                                                for (Q = N.length; O = N[--Q]; R.call(J, O) && K(O)) ;
                                            }
                                        } else if (L == 2) q = function (J, K) {
                                            var N = {}, P = o.call(J) == v, O;
                                            for (O in J) if (!(P && O == "prototype") && !p.call(N, O) && (N[O] = 1) && p.call(J, O)) K(O)
                                        }; else q = function (J, K) {
                                            var P = o.call(J) == v, O, Q;
                                            for (O in J) if (!(P && O == "prototype") && p.call(J, O) && !(Q = O === "constructor")) K(O);
                                            if (Q || p.call(J, O = "constructor")) K(O)
                                        };
                                        return q(J, K)
                                    };
                                    if (!u("json-stringify")) {
                                        var wa = {
                                            92: "\\\\",
                                            34: '\\"',
                                            8: "\\b",
                                            12: "\\f",
                                            10: "\\n",
                                            13: "\\r",
                                            9: "\\t"
                                        }, xa = "000000", C = function (J, K) {
                                            return (xa + (K || 0)).slice(-J)
                                        }, ya = "\\u00", za = function (J) {
                                            __p && __p();
                                            var K = '"', L = 0, M = J.length, N = !z || M > 10,
                                                O = N && (z ? J.split("") : J);
                                            for (; L < M; L++) {
                                                var P = J.charCodeAt(L);
                                                switch (P) {
                                                    case 8:
                                                    case 9:
                                                    case 10:
                                                    case 12:
                                                    case 13:
                                                    case 34:
                                                    case 92:
                                                        K += wa[P];
                                                        break;
                                                    default:
                                                        if (P < 32) {
                                                            K += ya + C(2, P.toString(16));
                                                            break
                                                        }
                                                        K += N ? O[L] : J.charAt(L)
                                                }
                                            }
                                            return K + '"'
                                        }, D = function (J, K, L, M, N, O, P) {
                                            __p && __p();
                                            var Q, R, S, T, U, V, W, Ea, Fa, Ga, X, Y, Z, $, Ha, Ia;
                                            try {
                                                Q = K[J]
                                            } catch (t) {
                                            }
                                            if (typeof Q == "object" && Q) {
                                                R = o.call(Q);
                                                if (R == ta && !p.call(Q, "toJSON")) if (Q > -1 / 0 && Q < 1 / 0) {
                                                    if (B) {
                                                        U = A(Q / 864e5);
                                                        for (S = A(U / 365.2425) + 1970 - 1; B(S + 1, 0) <= U; S++) ;
                                                        for (T = A((U - B(S, 0)) / 30.42); B(S, T + 1) <= U; T++) ;
                                                        U = 1 + U - B(S, T);
                                                        V = (Q % 864e5 + 864e5) % 864e5;
                                                        W = A(V / 36e5) % 24;
                                                        Ea = A(V / 6e4) % 60;
                                                        Fa = A(V / 1e3) % 60;
                                                        Ga = V % 1e3
                                                    } else {
                                                        S = Q.getUTCFullYear();
                                                        T = Q.getUTCMonth();
                                                        U = Q.getUTCDate();
                                                        W = Q.getUTCHours();
                                                        Ea = Q.getUTCMinutes();
                                                        Fa = Q.getUTCSeconds();
                                                        Ga = Q.getUTCMilliseconds()
                                                    }
                                                    Q = (S <= 0 || S >= 1e4 ? (S < 0 ? "-" : "+") + C(6, S < 0 ? -S : S) : C(4, S)) + "-" + C(2, T + 1) + "-" + C(2, U) + "T" + C(2, W) + ":" + C(2, Ea) + ":" + C(2, Fa) + "." + C(3, Ga) + "Z"
                                                } else Q = null; else if (typeof Q.toJSON == "function" && (R != w && R != x && R != y || p.call(Q, "toJSON"))) Q = Q.toJSON(J)
                                            }
                                            if (L) Q = L.call(K, J, Q);
                                            if (Q === null) return "null";
                                            R = o.call(Q);
                                            if (R == ua) return "" + Q; else if (R == w) return Q > -1 / 0 && Q < 1 / 0 ? "" + Q : "null"; else if (R == x) return za("" + Q);
                                            if (typeof Q == "object") {
                                                for ($ = P.length; $--;) if (P[$] === Q) throw qa();
                                                P.push(Q);
                                                X = [];
                                                Ha = O;
                                                O += N;
                                                if (R == y) {
                                                    for (Z = 0, $ = Q.length; Z < $; Z++) {
                                                        Y = D(Z, Q, L, M, N, O, P);
                                                        X.push(Y === r ? "null" : Y)
                                                    }
                                                    Ia = X.length ? N ? "[\n" + O + X.join(",\n" + O) + "\n" + Ha + "]" : "[" + X.join(",") + "]" : "[]"
                                                } else {
                                                    q(M || Q, function (J) {
                                                        var Y = D(J, Q, L, M, N, O, P);
                                                        if (Y !== r) X.push(za(J) + ":" + (N ? " " : "") + Y)
                                                    });
                                                    Ia = X.length ? N ? "{\n" + O + X.join(",\n" + O) + "\n" + Ha + "}" : "{" + X.join(",") + "}" : "{}"
                                                }
                                                P.pop();
                                                return Ia
                                            }
                                        };
                                        a.stringify = function (J, K, L) {
                                            __p && __p();
                                            var M, N, O, P;
                                            if (f[typeof K] && K) if ((P = o.call(K)) == v) N = K; else if (P == y) {
                                                O = {};
                                                for (var Q = 0, R = K.length, S; Q < R; S = K[Q++], (P = o.call(S), P == x || P == w) && (O[S] = 1)) ;
                                            }
                                            if (L) if ((P = o.call(L)) == w) {
                                                if ((L -= L % 1) > 0) for (M = "", L > 10 && (L = 10); M.length < L; M += " ") ;
                                            } else if (P == x) M = L.length <= 10 ? L : L.slice(0, 10);
                                            return D("", (S = {}, S[""] = J, S), N, O, M, "", [])
                                        }
                                    }
                                    if (!u("json-parse")) {
                                        var Aa = na.fromCharCode, Ba = {
                                            92: "\\",
                                            34: '"',
                                            47: "/",
                                            98: "\b",
                                            116: "\t",
                                            110: "\n",
                                            102: "\f",
                                            114: "\r"
                                        }, E, F, G = function () {
                                            E = F = null;
                                            throw pa()
                                        }, H = function () {
                                            __p && __p();
                                            var J = F, K = J.length, L, M, N, O, P;
                                            while (E < K) {
                                                P = J.charCodeAt(E);
                                                switch (P) {
                                                    case 9:
                                                    case 10:
                                                    case 13:
                                                    case 32:
                                                        E++;
                                                        break;
                                                    case 123:
                                                    case 125:
                                                    case 91:
                                                    case 93:
                                                    case 58:
                                                    case 44:
                                                        L = z ? J.charAt(E) : J[E];
                                                        E++;
                                                        return L;
                                                    case 34:
                                                        for (L = "@", E++; E < K;) {
                                                            P = J.charCodeAt(E);
                                                            if (P < 32) G(); else if (P == 92) {
                                                                P = J.charCodeAt(++E);
                                                                switch (P) {
                                                                    case 92:
                                                                    case 34:
                                                                    case 47:
                                                                    case 98:
                                                                    case 116:
                                                                    case 110:
                                                                    case 102:
                                                                    case 114:
                                                                        L += Ba[P];
                                                                        E++;
                                                                        break;
                                                                    case 117:
                                                                        M = ++E;
                                                                        for (N = E + 4; E < N; E++) {
                                                                            P = J.charCodeAt(E);
                                                                            if (!(P >= 48 && P <= 57 || P >= 97 && P <= 102 || P >= 65 && P <= 70)) G()
                                                                        }
                                                                        L += Aa("0x" + J.slice(M, E));
                                                                        break;
                                                                    default:
                                                                        G()
                                                                }
                                                            } else {
                                                                if (P == 34) break;
                                                                P = J.charCodeAt(E);
                                                                M = E;
                                                                while (P >= 32 && P != 92 && P != 34) P = J.charCodeAt(++E);
                                                                L += J.slice(M, E)
                                                            }
                                                        }
                                                        if (J.charCodeAt(E) == 34) {
                                                            E++;
                                                            return L
                                                        }
                                                        G();
                                                    default:
                                                        M = E;
                                                        if (P == 45) {
                                                            O = true;
                                                            P = J.charCodeAt(++E)
                                                        }
                                                        if (P >= 48 && P <= 57) {
                                                            if (P == 48 && (P = J.charCodeAt(E + 1), P >= 48 && P <= 57)) G();
                                                            O = false;
                                                            for (; E < K && (P = J.charCodeAt(E), P >= 48 && P <= 57); E++) ;
                                                            if (J.charCodeAt(E) == 46) {
                                                                N = ++E;
                                                                for (; N < K && (P = J.charCodeAt(N), P >= 48 && P <= 57); N++) ;
                                                                if (N == E) G();
                                                                E = N
                                                            }
                                                            P = J.charCodeAt(E);
                                                            if (P == 101 || P == 69) {
                                                                P = J.charCodeAt(++E);
                                                                if (P == 43 || P == 45) E++;
                                                                for (N = E; N < K && (P = J.charCodeAt(N), P >= 48 && P <= 57); N++) ;
                                                                if (N == E) G();
                                                                E = N
                                                            }
                                                            return +J.slice(M, E)
                                                        }
                                                        if (O) G();
                                                        if (J.slice(E, E + 4) == "true") {
                                                            E += 4;
                                                            return true
                                                        } else if (J.slice(E, E + 5) == "false") {
                                                            E += 5;
                                                            return false
                                                        } else if (J.slice(E, E + 4) == "null") {
                                                            E += 4;
                                                            return null
                                                        }
                                                        G()
                                                }
                                            }
                                            return "$"
                                        }, I = function (J) {
                                            __p && __p();
                                            var K, L;
                                            if (J == "$") G();
                                            if (typeof J == "string") {
                                                if ((z ? J.charAt(0) : J[0]) == "@") return J.slice(1);
                                                if (J == "[") {
                                                    K = [];
                                                    for (; ; L || (L = true)) {
                                                        J = H();
                                                        if (J == "]") break;
                                                        if (L) if (J == ",") {
                                                            J = H();
                                                            if (J == "]") G()
                                                        } else G();
                                                        if (J == ",") G();
                                                        K.push(I(J))
                                                    }
                                                    return K
                                                } else if (J == "{") {
                                                    K = {};
                                                    for (; ; L || (L = true)) {
                                                        J = H();
                                                        if (J == "}") break;
                                                        if (L) if (J == ",") {
                                                            J = H();
                                                            if (J == "}") G()
                                                        } else G();
                                                        if (J == "," || typeof J != "string" || (z ? J.charAt(0) : J[0]) != "@" || H() != ":") G();
                                                        K[J.slice(1)] = I(H())
                                                    }
                                                    return K
                                                }
                                                G()
                                            }
                                            return J
                                        }, Ca = function (J, K, L) {
                                            var M = Da(J, K, L);
                                            if (M === r) delete J[K]; else J[K] = M
                                        }, Da = function (J, K, L) {
                                            var M = J[K], N;
                                            if (typeof M == "object" && M) if (o.call(M) == y) for (N = M.length; N--;) Ca(M, N, L); else q(M, function (K) {
                                                Ca(M, K, L)
                                            });
                                            return L.call(J, K, M)
                                        };
                                        a.parse = function (J, K) {
                                            var L, M;
                                            E = 0;
                                            F = "" + J;
                                            L = I(H());
                                            if (H() != "$") G();
                                            E = F = null;
                                            return K && o.call(K) == v ? Da((M = {}, M[""] = L, M), "", K) : L
                                        }
                                    }
                                }
                                a.runInContext = j;
                                return a
                            }

                            if (g && !e) j(h, g); else {
                                var k = h.JSON, ka = h.JSON3, la = false, l = j(h, h.JSON3 = {
                                    noConflict: function () {
                                        if (!la) {
                                            la = true;
                                            h.JSON = k;
                                            h.JSON3 = ka;
                                            k = ka = null
                                        }
                                        return l
                                    }
                                });
                                h.JSON = {parse: l.parse, stringify: l.stringify}
                            }
                            if (e) d(function () {
                                return l
                            })
                        }).call(this)
                    }

                    var ha = false, ia = function () {
                        if (!ha) {
                            ha = true;
                            ga()
                        }
                        return c.exports
                    }, ja = function (e) {
                        switch (e) {
                            case undefined:
                                return ia()
                        }
                    };
                    fa.exports = ja
                }), null);
                __d("json3", ["json3-3.3.2"], (function a(b, c, d, e, f, g) {
                    f.exports = c("json3-3.3.2")()
                }), null);
                __d("ES", ["json3", "ES5ArrayPrototype", "ES5FunctionPrototype", "ES5StringPrototype", "ES5Array", "ES5Object", "ES5Date", "ES6Array", "ES6Object", "ES6ArrayPrototype", "ES6DatePrototype", "ES6Number", "ES7StringPrototype", "ES7Object", "ES7ArrayPrototype"], (function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v) {
                    __p && __p();
                    var w = {}.toString, x = {"JSON.stringify": h.stringify, "JSON.parse": h.parse}, y = {
                            "Array.prototype": i,
                            "Function.prototype": j,
                            "String.prototype": k,
                            Object: m,
                            Array: l,
                            Date: n
                        }, z = {Object: p, "Array.prototype": q, "Date.prototype": r, Number: s, Array: o},
                        A = {Object: u, "String.prototype": t, "Array.prototype": v};

                    function B(D) {
                        __p && __p();
                        for (var E in D) {
                            if (!Object.prototype.hasOwnProperty.call(D, E)) continue;
                            var F = D[E], G = E.split(".");
                            if (G.length === 2) {
                                var H = G[0], I = G[1];
                                if (!H || !I || !window[H] || !window[H][I]) {
                                    var J = H ? window[H] : "-", K = H && window[H] && I ? window[H][I] : "-";
                                    throw new Error("Unexpected state (t11975770): " + (H + ", " + I + ", " + J + ", " + K + ", " + E))
                                }
                            }
                            var L = G.length === 2 ? window[G[0]][G[1]] : window[E];
                            for (var M in F) {
                                if (!Object.prototype.hasOwnProperty.call(F, M)) continue;
                                if (typeof F[M] !== "function") {
                                    x[E + "." + M] = F[M];
                                    continue
                                }
                                var N = L[M];
                                x[E + "." + M] = N && /\{\s+\[native code\]\s\}/.test(N) ? N : F[M]
                            }
                        }
                    }

                    B(y);
                    B(z);
                    B(A);

                    function C(D, E, F) {
                        var G = F ? w.call(D).slice(8, -1) + ".prototype" : D, H = x[G + "." + E] || D[E];
                        if (typeof H === "function") {
                            for (var I = arguments.length, J = Array(I > 3 ? I - 3 : 0), K = 3; K < I; K++) J[K - 3] = arguments[K];
                            return H.apply(D, J)
                        } else if (H) return H;
                        throw new Error("Polyfill " + G + " does not have implementation of " + E)
                    }

                    f.exports = C
                }), null);
                __d("ES5FunctionPrototype", [], (function a(b, c, d, e, f, g) {
                    __p && __p();
                    var h = {};
                    h.bind = function (i) {
                        if (typeof this != "function") throw new TypeError("Bind must be called on a function");
                        var j = this, k = Array.prototype.slice.call(arguments, 1);

                        function l() {
                            return j.apply(i, k.concat(Array.prototype.slice.call(arguments)))
                        }

                        l.displayName = "bound:" + (j.displayName || j.name || "(?)");
                        l.toString = function m() {
                            return "bound: " + j
                        };
                        return l
                    };
                    f.exports = h
                }), null);
                __d("ie8DontEnum", [], (function a(b, c, d, e, f, g) {
                    var h = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "prototypeIsEnumerable", "constructor"],
                        i = {}.hasOwnProperty, j = function j() {
                        };
                    if ({toString: true}.propertyIsEnumerable("toString")) j = function j(k, l) {
                        for (var m = 0; m < h.length; m++) {
                            var n = h[m];
                            if (i.call(k, n)) l(n)
                        }
                    };
                    f.exports = j
                }), null);
                __d("ES5Object", ["ie8DontEnum"], (function a(b, c, d, e, f, g, h) {
                    __p && __p();
                    var i = {}.hasOwnProperty, j = {};

                    function k() {
                    }

                    j.create = function (l) {
                        var m = typeof l;
                        if (m != "object" && m != "function") throw new TypeError("Object prototype may only be a Object or null");
                        k.prototype = l;
                        return new k()
                    };
                    j.keys = function (l) {
                        __p && __p();
                        var m = typeof l;
                        if (m != "object" && m != "function" || l === null) throw new TypeError("Object.keys called on non-object");
                        var n = [];
                        for (var o in l) if (i.call(l, o)) n.push(o);
                        h(l, function (p) {
                            return n.push(p)
                        });
                        return n
                    };
                    j.freeze = function (l) {
                        return l
                    };
                    j.isFrozen = function () {
                        return false
                    };
                    j.seal = function (l) {
                        return l
                    };
                    f.exports = j
                }), null);
                __d("ES6Object", ["ie8DontEnum"], (function a(b, c, d, e, f, g, h) {
                    __p && __p();
                    var i = {}.hasOwnProperty, j = {
                        assign: function k(l) {
                            __p && __p();
                            if (l == null) throw new TypeError("Object.assign target cannot be null or undefined");
                            l = Object(l);
                            for (var m = arguments.length, n = Array(m > 1 ? m - 1 : 0), o = 1; o < m; o++) n[o - 1] = arguments[o];
                            for (var p = 0; p < n.length; p++) {
                                var q = n[p];
                                if (q == null) continue;
                                q = Object(q);
                                for (var r in q) if (i.call(q, r)) l[r] = q[r];
                                h(q, function (r) {
                                    return l[r] = q[r]
                                })
                            }
                            return l
                        }, is: function k(l, m) {
                            if (l === m) return l !== 0 || 1 / l === 1 / m; else return l !== l && m !== m
                        }
                    };
                    f.exports = j
                }), null);
                __d("sdk.babelHelpers", ["ES5FunctionPrototype", "ES5Object", "ES6Object"], (function a(b, c, d, e, f, g, h, i, j) {
                    __p && __p();
                    var k = {}, l = Object.prototype.hasOwnProperty;
                    k.inherits = function (m, n) {
                        j.assign(m, n);
                        m.prototype = i.create(n && n.prototype);
                        m.prototype.constructor = m;
                        m.__superConstructor__ = n;
                        return n
                    };
                    k._extends = j.assign;
                    k["extends"] = k._extends;
                    k.objectWithoutProperties = function (m, n) {
                        var o = {};
                        for (var p in m) {
                            if (!l.call(m, p) || n.indexOf(p) >= 0) continue;
                            o[p] = m[p]
                        }
                        return o
                    };
                    k.taggedTemplateLiteralLoose = function (m, n) {
                        m.raw = n;
                        return m
                    };
                    k.bind = h.bind;
                    f.exports = k
                }), null);
                var ES = require('ES');
                var babelHelpers = require('sdk.babelHelpers');
                (function (a, b) {
                    var c = "keys", d = "values", e = "entries", f = function () {
                        var l = h(Array), m = void 0;
                        if (!l) m = function () {
                            function m(n, o) {
                                "use strict";
                                this.$ArrayIterator1 = n;
                                this.$ArrayIterator2 = o;
                                this.$ArrayIterator3 = 0
                            }

                            m.prototype.next = function () {
                                "use strict";
                                if (this.$ArrayIterator1 == null) return {value: b, done: true};
                                var n = this.$ArrayIterator1, o = this.$ArrayIterator1.length, p = this.$ArrayIterator3,
                                    q = this.$ArrayIterator2;
                                if (p >= o) {
                                    this.$ArrayIterator1 = b;
                                    return {value: b, done: true}
                                }
                                this.$ArrayIterator3 = p + 1;
                                if (q === c) return {value: p, done: false}; else if (q === d) return {
                                    value: n[p],
                                    done: false
                                }; else if (q === e) return {value: [p, n[p]], done: false}
                            };
                            m.prototype[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] = function () {
                                "use strict";
                                return this
                            };
                            return m
                        }();
                        return {
                            keys: l ? function (n) {
                                return n.keys()
                            } : function (n) {
                                return new m(n, c)
                            }, values: l ? function (n) {
                                return n.values()
                            } : function (n) {
                                return new m(n, d)
                            }, entries: l ? function (n) {
                                return n.entries()
                            } : function (n) {
                                return new m(n, e)
                            }
                        }
                    }(), g = function () {
                        var l = h(String), m = void 0;
                        if (!l) m = function () {
                            function m(n) {
                                "use strict";
                                this.$StringIterator1 = n;
                                this.$StringIterator2 = 0
                            }

                            m.prototype.next = function () {
                                "use strict";
                                if (this.$StringIterator1 == null) return {value: b, done: true};
                                var n = this.$StringIterator2, o = this.$StringIterator1, p = o.length;
                                if (n >= p) {
                                    this.$StringIterator1 = b;
                                    return {value: b, done: true}
                                }
                                var q = void 0, r = o.charCodeAt(n);
                                if (r < 55296 || r > 56319 || n + 1 === p) q = o[n]; else {
                                    var s = o.charCodeAt(n + 1);
                                    if (s < 56320 || s > 57343) q = o[n]; else q = o[n] + o[n + 1]
                                }
                                this.$StringIterator2 = n + q.length;
                                return {value: q, done: false}
                            };
                            m.prototype[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] = function () {
                                "use strict";
                                return this
                            };
                            return m
                        }();
                        return {
                            keys: function n() {
                                throw TypeError("Strings default iterator doesn't implement keys.")
                            }, values: l ? function (n) {
                                return n[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]()
                            } : function (n) {
                                return new m(n)
                            }, entries: function n() {
                                throw TypeError("Strings default iterator doesn't implement entries.")
                            }
                        }
                    }();

                    function h(l) {
                        return typeof l.prototype[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] === "function" && typeof l.prototype.values === "function" && typeof l.prototype.keys === "function" && typeof l.prototype.entries === "function"
                    }

                    function i(l, m) {
                        "use strict";
                        this.$ObjectIterator1 = l;
                        this.$ObjectIterator2 = m;
                        this.$ObjectIterator3 = ES("Object", "keys", false, l);
                        this.$ObjectIterator4 = 0
                    }

                    i.prototype.next = function () {
                        "use strict";
                        var l = this.$ObjectIterator3.length, m = this.$ObjectIterator4, n = this.$ObjectIterator2,
                            o = this.$ObjectIterator3[m];
                        if (m >= l) {
                            this.$ObjectIterator1 = b;
                            return {value: b, done: true}
                        }
                        this.$ObjectIterator4 = m + 1;
                        if (n === c) return {
                            value: o,
                            done: false
                        }; else if (n === d) return {
                            value: this.$ObjectIterator1[o],
                            done: false
                        }; else if (n === e) return {value: [o, this.$ObjectIterator1[o]], done: false}
                    };
                    i.prototype[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] = function () {
                        "use strict";
                        return this
                    };
                    var j = {
                        keys: function l(m) {
                            return new i(m, c)
                        }, values: function l(m) {
                            return new i(m, d)
                        }, entries: function l(m) {
                            return new i(m, e)
                        }
                    };

                    function k(l, m) {
                        if (typeof l === "string") return g[m || d](l); else if (ES("Array", "isArray", false, l)) return f[m || d](l); else if (l[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]) return l[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); else return j[m || e](l)
                    }

                    ES("Object", "assign", false, k, {
                        KIND_KEYS: c,
                        KIND_VALUES: d,
                        KIND_ENTRIES: e,
                        keys: function l(m) {
                            return k(m, c)
                        },
                        values: function l(m) {
                            return k(m, d)
                        },
                        entries: function l(m) {
                            return k(m, e)
                        },
                        generic: j.entries
                    });
                    a.FB_enumerate = k
                })(typeof global === "undefined" ? this : global);
                (function (a, b) {
                    var c = a.window || a;

                    function d() {
                        return "f" + (Math.random() * (1 << 30)).toString(16).replace(".", "")
                    }

                    function e(j) {
                        var k = j ? j.ownerDocument || j : document, l = k.defaultView || c;
                        return !!(j && (typeof l.Node === "function" ? j instanceof l.Node : typeof j === "object" && typeof j.nodeType === "number" && typeof j.nodeName === "string"))
                    }

                    function f(j) {
                        var k = c[j];
                        if (k == null) return true;
                        if (typeof c.Symbol !== "function") return true;
                        var l = k.prototype;
                        return k == null || typeof k !== "function" || typeof l.clear !== "function" || new k().size !== 0 || typeof l.keys !== "function" || typeof l.forEach !== "function"
                    }

                    var g = a.FB_enumerate, h = function () {
                        if (!f("Map")) return c.Map;
                        var j = "key", k = "value", l = "key+value", m = "$map_", n = void 0, o = "IE_HASH_";

                        function h(A) {
                            "use strict";
                            if (!t(this)) throw new TypeError("Wrong map object type.");
                            s(this);
                            if (A != null) {
                                var B = g(A), C = void 0;
                                while (!(C = B.next()).done) {
                                    if (!t(C.value)) throw new TypeError("Expected iterable items to be pair objects.");
                                    this.set(C.value[0], C.value[1])
                                }
                            }
                        }

                        h.prototype.clear = function () {
                            "use strict";
                            s(this)
                        };
                        h.prototype.has = function (A) {
                            "use strict";
                            var B = q(this, A);
                            return !!(B != null && this._mapData[B])
                        };
                        h.prototype.set = function (A, B) {
                            "use strict";
                            var C = q(this, A);
                            if (C != null && this._mapData[C]) this._mapData[C][1] = B; else {
                                C = this._mapData.push([A, B]) - 1;
                                r(this, A, C);
                                this.size += 1
                            }
                            return this
                        };
                        h.prototype.get = function (A) {
                            "use strict";
                            var B = q(this, A);
                            if (B == null) return b; else return this._mapData[B][1]
                        };
                        h.prototype["delete"] = function (A) {
                            "use strict";
                            var B = q(this, A);
                            if (B != null && this._mapData[B]) {
                                r(this, A, b);
                                this._mapData[B] = b;
                                this.size -= 1;
                                return true
                            } else return false
                        };
                        h.prototype.entries = function () {
                            "use strict";
                            return new p(this, l)
                        };
                        h.prototype.keys = function () {
                            "use strict";
                            return new p(this, j)
                        };
                        h.prototype.values = function () {
                            "use strict";
                            return new p(this, k)
                        };
                        h.prototype.forEach = function (A, B) {
                            "use strict";
                            if (typeof A !== "function") throw new TypeError("Callback must be callable.");
                            var C = ES(A, "bind", true, B || b), D = this._mapData;
                            for (var E = 0; E < D.length; E++) {
                                var F = D[E];
                                if (F != null) C(F[1], F[0], this)
                            }
                        };
                        h.prototype[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] = function () {
                            "use strict";
                            return this.entries()
                        };

                        function p(A, B) {
                            "use strict";
                            if (!(t(A) && A._mapData)) throw new TypeError("Object is not a map.");
                            if (ES([j, l, k], "indexOf", true, B) === -1) throw new Error("Invalid iteration kind.");
                            this._map = A;
                            this._nextIndex = 0;
                            this._kind = B
                        }

                        p.prototype.next = function () {
                            "use strict";
                            if (!this instanceof h) throw new TypeError("Expected to be called on a MapIterator.");
                            var A = this._map, B = this._nextIndex, C = this._kind;
                            if (A == null) return u(b, true);
                            var D = A._mapData;
                            while (B < D.length) {
                                var E = D[B];
                                B += 1;
                                this._nextIndex = B;
                                if (E) if (C === j) return u(E[0], false); else if (C === k) return u(E[1], false); else if (C) return u(E, false)
                            }
                            this._map = b;
                            return u(b, true)
                        };
                        p.prototype[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] = function () {
                            "use strict";
                            return this
                        };

                        function q(A, B) {
                            if (t(B)) {
                                var C = y(B);
                                return C ? A._objectIndex[C] : b
                            } else {
                                var D = m + B;
                                if (typeof B === "string") return A._stringIndex[D]; else return A._otherIndex[D]
                            }
                        }

                        function r(A, B, C) {
                            var D = C == null;
                            if (t(B)) {
                                var E = y(B);
                                if (!E) E = z(B);
                                if (D) delete A._objectIndex[E]; else A._objectIndex[E] = C
                            } else {
                                var F = m + B;
                                if (typeof B === "string") if (D) delete A._stringIndex[F]; else A._stringIndex[F] = C; else if (D) delete A._otherIndex[F]; else A._otherIndex[F] = C
                            }
                        }

                        function s(A) {
                            A._mapData = [];
                            A._objectIndex = {};
                            A._stringIndex = {};
                            A._otherIndex = {};
                            A.size = 0
                        }

                        function t(A) {
                            return A != null && (typeof A === "object" || typeof A === "function")
                        }

                        function u(A, B) {
                            return {value: A, done: B}
                        }

                        h.__isES5 = function () {
                            try {
                                Object.defineProperty({}, "__.$#x", {});
                                return true
                            } catch (A) {
                                return false
                            }
                        }();

                        function v(A) {
                            if (!h.__isES5 || !Object.isExtensible) return true; else return Object.isExtensible(A)
                        }

                        function w(A) {
                            var B = void 0;
                            switch (A.nodeType) {
                                case 1:
                                    B = A.uniqueID;
                                    break;
                                case 9:
                                    B = A.documentElement.uniqueID;
                                    break;
                                default:
                                    return null
                            }
                            if (B) return o + B; else return null
                        }

                        var x = d();

                        function y(A) {
                            if (A[x]) return A[x]; else if (!h.__isES5 && A.propertyIsEnumerable && A.propertyIsEnumerable[x]) return A.propertyIsEnumerable[x]; else if (!h.__isES5 && e(A) && w(A)) return w(A); else if (!h.__isES5 && A[x]) return A[x]
                        }

                        var z = function () {
                            var A = Object.prototype.propertyIsEnumerable, B = 0;
                            return function z(C) {
                                if (v(C)) {
                                    B += 1;
                                    if (h.__isES5) Object.defineProperty(C, x, {
                                        enumerable: false,
                                        writable: false,
                                        configurable: false,
                                        value: B
                                    }); else if (C.propertyIsEnumerable) {
                                        C.propertyIsEnumerable = function () {
                                            return A.apply(this, arguments)
                                        };
                                        C.propertyIsEnumerable[x] = B
                                    } else if (e(C)) C[x] = B; else throw new Error("Unable to set a non-enumerable property on object.");
                                    return B
                                } else throw new Error("Non-extensible objects are not allowed as keys.")
                            }
                        }();
                        return __annotator(h, {name: "Map"})
                    }(), i = function () {
                        if (!f("Set")) return c.Set;

                        function i(k) {
                            "use strict";
                            if (this == null || typeof this !== "object" && typeof this !== "function") throw new TypeError("Wrong set object type.");
                            j(this);
                            if (k != null) {
                                var l = g(k), m = void 0;
                                while (!(m = l.next()).done) this.add(m.value)
                            }
                        }

                        i.prototype.add = function (k) {
                            "use strict";
                            this._map.set(k, k);
                            this.size = this._map.size;
                            return this
                        };
                        i.prototype.clear = function () {
                            "use strict";
                            j(this)
                        };
                        i.prototype["delete"] = function (k) {
                            "use strict";
                            var l = this._map["delete"](k);
                            this.size = this._map.size;
                            return l
                        };
                        i.prototype.entries = function () {
                            "use strict";
                            return this._map.entries()
                        };
                        i.prototype.forEach = function (k) {
                            "use strict";
                            var l = arguments[1], m = this._map.keys(), n = void 0;
                            while (!(n = m.next()).done) k.call(l, n.value, n.value, this)
                        };
                        i.prototype.has = function (k) {
                            "use strict";
                            return this._map.has(k)
                        };
                        i.prototype.values = function () {
                            "use strict";
                            return this._map.values()
                        };
                        i.prototype.keys = function () {
                            "use strict";
                            return this.values()
                        };
                        i.prototype[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] = function () {
                            "use strict";
                            return this.values()
                        };

                        function j(k) {
                            k._map = new h();
                            k.size = k._map.size
                        }

                        return __annotator(i, {name: "Set"})
                    }();
                    a.Map = h;
                    a.Set = i
                })(typeof global === "undefined" ? this : global);
                __d("UrlMapConfig", [], {
                    "www": "www.facebook.com",
                    "m": "m.facebook.com",
                    "connect": "connect.facebook.net",
                    "business": "business.facebook.com",
                    "api_https": "api.facebook.com",
                    "api_read_https": "api-read.facebook.com",
                    "graph_https": "graph.facebook.com",
                    "an_https": "an.facebook.com",
                    "fbcdn_http": "static.xx.fbcdn.net",
                    "fbcdn_https": "static.xx.fbcdn.net",
                    "cdn_http": "staticxx.facebook.com",
                    "cdn_https": "staticxx.facebook.com"
                });
                __d("JSSDKRuntimeConfig", [], {
                    "locale": "cs_CZ",
                    "rtl": false,
                    "revision": "3737592",
                    "sdkurl": "http:\/\/connect.facebook.net\/cs_CZ\/sdk.js",
                    "sdkns": "FB"
                });
                __d("JSSDKConfig", [], {
                    "bustCache": true,
                    "tagCountLogRate": 0.01,
                    "errorHandling": {"rate": 4},
                    "usePluginPipe": true,
                    "features": {
                        "dialog_resize_refactor": true,
                        "one_comment_controller": true,
                        "allow_non_canvas_app_events": false,
                        "event_subscriptions_log": {"rate": 0.01, "value": 10000},
                        "prefer_cors_as_transport": {"rate": 100},
                        "should_force_single_dialog_instance": true,
                        "js_sdk_force_status_on_load": true,
                        "js_sdk_mbasic_share_plugin_init": true,
                        "kill_fragment": true,
                        "xfbml_profile_pic_server": true,
                        "error_handling": {"rate": 4},
                        "e2e_ping_tracking": {"rate": 1.0e-6},
                        "getloginstatus_tracking": {"rate": 0.001},
                        "xd_timeout": {"rate": 4, "value": 30000},
                        "use_bundle": true,
                        "launch_payment_dialog_via_pac": {"rate": 100},
                        "plugin_tags_blacklist": ["recommendations_bar", "registration", "activity", "recommendations", "facepile"],
                        "should_log_response_error": true
                    },
                    "api": {
                        "mode": "warn",
                        "whitelist": ["AppEvents", "AppEvents.EventNames", "AppEvents.ParameterNames", "AppEvents.activateApp", "AppEvents.logEvent", "AppEvents.logPageView", "AppEvents.logPurchase", "AppEvents.setUserID", "AppEvents.getUserID", "AppEvents.clearUserID", "AppEvents.updateUserProperties", "Canvas", "Canvas.Prefetcher", "Canvas.Prefetcher.addStaticResource", "Canvas.Prefetcher.setCollectionMode", "Canvas.getPageInfo", "Canvas.hideFlashElement", "Canvas.scrollTo", "Canvas.setAutoGrow", "Canvas.setDoneLoading", "Canvas.setSize", "Canvas.setUrlHandler", "Canvas.showFlashElement", "Canvas.startTimer", "Canvas.stopTimer", "Event", "Event.subscribe", "Event.unsubscribe", "Music.flashCallback", "Music.init", "Music.send", "Payment", "Payment.cancelFlow", "Payment.continueFlow", "Payment.init", "Payment.lockForProcessing", "Payment.parse", "Payment.setSize", "Payment.unlockForProcessing", "ThirdPartyProvider", "ThirdPartyProvider.init", "ThirdPartyProvider.sendData", "UA", "UA.nativeApp", "XFBML", "XFBML.RecommendationsBar", "XFBML.RecommendationsBar.markRead", "XFBML.parse", "addFriend", "api", "getAccessToken", "getAuthResponse", "getLoginStatus", "getUserID", "init", "login", "logout", "publish", "share", "ui", "AppEvents.setAppVersion", "AppEvents.getAppVersion", "AppEvents.clearAppVersion", "RankingService.hidePlugin", "RankingService.showPlugin"]
                    },
                    "initSitevars": {
                        "enableMobileComments": 1,
                        "iframePermissions": {
                            "read_stream": false,
                            "manage_mailbox": false,
                            "manage_friendlists": false,
                            "read_mailbox": false,
                            "publish_checkins": true,
                            "status_update": true,
                            "photo_upload": true,
                            "video_upload": true,
                            "sms": false,
                            "create_event": true,
                            "rsvp_event": true,
                            "offline_access": true,
                            "email": true,
                            "xmpp_login": false,
                            "create_note": true,
                            "share_item": true,
                            "export_stream": false,
                            "publish_stream": true,
                            "publish_likes": true,
                            "ads_management": false,
                            "contact_email": true,
                            "access_private_data": false,
                            "read_insights": false,
                            "read_requests": false,
                            "read_friendlists": true,
                            "manage_pages": false,
                            "physical_login": false,
                            "manage_groups": false,
                            "read_deals": false
                        }
                    }
                });
                __d("JSSDKXDConfig", [], {
                    "XdUrl": "\/connect\/xd_arbiter.php?version=42",
                    "XdBundleUrl": "\/connect\/xd_arbiter\/r\/Ms1VZf1Vg1J.js?version=42",
                    "Flash": {"path": "https:\/\/connect.facebook.net\/rsrc.php\/v2\/yW\/r\/yOZN1vHw3Z_.swf"},
                    "useCdn": true
                });
                __d("JSSDKCssConfig", [], {
                    "rules": ".fb_hidden{position:absolute;top:-10000px;z-index:10001}.fb_reposition{overflow:hidden;position:relative}.fb_invisible{display:none}.fb_reset{background:none;border:0;border-spacing:0;color:#000;cursor:auto;direction:ltr;font-family:\"lucida grande\", tahoma, verdana, arial, sans-serif;font-size:11px;font-style:normal;font-variant:normal;font-weight:normal;letter-spacing:normal;line-height:1;margin:0;overflow:visible;padding:0;text-align:left;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;visibility:visible;white-space:normal;word-spacing:normal}.fb_reset>div{overflow:hidden}.fb_link img{border:none}\u0040keyframes fb_transform{from{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}.fb_animate{animation:fb_transform .3s forwards}\n.fb_dialog{background:rgba(82, 82, 82, .7);position:absolute;top:-10000px;z-index:10001}.fb_reset .fb_dialog_legacy{overflow:visible}.fb_dialog_advanced{padding:10px;border-radius:8px}.fb_dialog_content{background:#fff;color:#333}.fb_dialog_close_icon{background:url(https:\/\/static.xx.fbcdn.net\/rsrc.php\/v3\/yq\/r\/IE9JII6Z1Ys.png) no-repeat scroll 0 0 transparent;cursor:pointer;display:block;height:15px;position:absolute;right:18px;top:17px;width:15px}.fb_dialog_mobile .fb_dialog_close_icon{top:5px;left:5px;right:auto}.fb_dialog_padding{background-color:transparent;position:absolute;width:1px;z-index:-1}.fb_dialog_close_icon:hover{background:url(https:\/\/static.xx.fbcdn.net\/rsrc.php\/v3\/yq\/r\/IE9JII6Z1Ys.png) no-repeat scroll 0 -15px transparent}.fb_dialog_close_icon:active{background:url(https:\/\/static.xx.fbcdn.net\/rsrc.php\/v3\/yq\/r\/IE9JII6Z1Ys.png) no-repeat scroll 0 -30px transparent}.fb_dialog_loader{background-color:#f6f7f9;border:1px solid #606060;font-size:24px;padding:20px}.fb_dialog_top_left,.fb_dialog_top_right,.fb_dialog_bottom_left,.fb_dialog_bottom_right{height:10px;width:10px;overflow:hidden;position:absolute}.fb_dialog_top_left{background:url(https:\/\/static.xx.fbcdn.net\/rsrc.php\/v3\/ye\/r\/8YeTNIlTZjm.png) no-repeat 0 0;left:-10px;top:-10px}.fb_dialog_top_right{background:url(https:\/\/static.xx.fbcdn.net\/rsrc.php\/v3\/ye\/r\/8YeTNIlTZjm.png) no-repeat 0 -10px;right:-10px;top:-10px}.fb_dialog_bottom_left{background:url(https:\/\/static.xx.fbcdn.net\/rsrc.php\/v3\/ye\/r\/8YeTNIlTZjm.png) no-repeat 0 -20px;bottom:-10px;left:-10px}.fb_dialog_bottom_right{background:url(https:\/\/static.xx.fbcdn.net\/rsrc.php\/v3\/ye\/r\/8YeTNIlTZjm.png) no-repeat 0 -30px;right:-10px;bottom:-10px}.fb_dialog_vert_left,.fb_dialog_vert_right,.fb_dialog_horiz_top,.fb_dialog_horiz_bottom{position:absolute;background:#525252;filter:alpha(opacity=70);opacity:.7}.fb_dialog_vert_left,.fb_dialog_vert_right{width:10px;height:100\u0025}.fb_dialog_vert_left{margin-left:-10px}.fb_dialog_vert_right{right:0;margin-right:-10px}.fb_dialog_horiz_top,.fb_dialog_horiz_bottom{width:100\u0025;height:10px}.fb_dialog_horiz_top{margin-top:-10px}.fb_dialog_horiz_bottom{bottom:0;margin-bottom:-10px}.fb_dialog_iframe{line-height:0}.fb_dialog_content .dialog_title{background:#6d84b4;border:1px solid #365899;color:#fff;font-size:14px;font-weight:bold;margin:0}.fb_dialog_content .dialog_title>span{background:url(https:\/\/static.xx.fbcdn.net\/rsrc.php\/v3\/yd\/r\/Cou7n-nqK52.gif) no-repeat 5px 50\u0025;float:left;padding:5px 0 7px 26px}body.fb_hidden{-webkit-transform:none;height:100\u0025;margin:0;overflow:visible;position:absolute;top:-10000px;left:0;width:100\u0025}.fb_dialog.fb_dialog_mobile.loading{background:url(https:\/\/static.xx.fbcdn.net\/rsrc.php\/v3\/ya\/r\/3rhSv5V8j3o.gif) white no-repeat 50\u0025 50\u0025;min-height:100\u0025;min-width:100\u0025;overflow:hidden;position:absolute;top:0;z-index:10001}.fb_dialog.fb_dialog_mobile.loading.centered{width:auto;height:auto;min-height:initial;min-width:initial;background:none}.fb_dialog.fb_dialog_mobile.loading.centered #fb_dialog_loader_spinner{width:100\u0025}.fb_dialog.fb_dialog_mobile.loading.centered .fb_dialog_content{background:none}.loading.centered #fb_dialog_loader_close{color:#fff;display:block;padding-top:20px;clear:both;font-size:18px}#fb-root #fb_dialog_ipad_overlay{background:rgba(0, 0, 0, .45);position:absolute;bottom:0;left:0;right:0;top:0;width:100\u0025;min-height:100\u0025;z-index:10000}#fb-root #fb_dialog_ipad_overlay.hidden{display:none}.fb_dialog.fb_dialog_mobile.loading iframe{visibility:hidden}.fb_dialog_content .dialog_header{-webkit-box-shadow:white 0 1px 1px -1px inset;background:-webkit-gradient(linear, 0\u0025 0\u0025, 0\u0025 100\u0025, from(#738ABA), to(#2C4987));border-bottom:1px solid;border-color:#1d4088;color:#fff;font:14px Helvetica, sans-serif;font-weight:bold;text-overflow:ellipsis;text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0;vertical-align:middle;white-space:nowrap}.fb_dialog_content .dialog_header table{-webkit-font-smoothing:subpixel-antialiased;height:43px;width:100\u0025}.fb_dialog_content .dialog_header td.header_left{font-size:12px;padding-left:5px;vertical-align:middle;width:60px}.fb_dialog_content .dialog_header td.header_right{font-size:12px;padding-right:5px;vertical-align:middle;width:60px}.fb_dialog_content .touchable_button{background:-webkit-gradient(linear, 0\u0025 0\u0025, 0\u0025 100\u0025, from(#4966A6), color-stop(.5, #355492), to(#2A4887));border:1px solid #29487d;-webkit-background-clip:padding-box;-webkit-border-radius:3px;-webkit-box-shadow:rgba(0, 0, 0, .117188) 0 1px 1px inset, rgba(255, 255, 255, .167969) 0 1px 0;display:inline-block;margin-top:3px;max-width:85px;line-height:18px;padding:4px 12px;position:relative}.fb_dialog_content .dialog_header .touchable_button input{border:none;background:none;color:#fff;font:12px Helvetica, sans-serif;font-weight:bold;margin:2px -12px;padding:2px 6px 3px 6px;text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0}.fb_dialog_content .dialog_header .header_center{color:#fff;font-size:16px;font-weight:bold;line-height:18px;text-align:center;vertical-align:middle}.fb_dialog_content .dialog_content{background:url(https:\/\/static.xx.fbcdn.net\/rsrc.php\/v3\/y9\/r\/jKEcVPZFk-2.gif) no-repeat 50\u0025 50\u0025;border:1px solid #555;border-bottom:0;border-top:0;height:150px}.fb_dialog_content .dialog_footer{background:#f6f7f9;border:1px solid #555;border-top-color:#ccc;height:40px}#fb_dialog_loader_close{float:left}.fb_dialog.fb_dialog_mobile .fb_dialog_close_button{text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0}.fb_dialog.fb_dialog_mobile .fb_dialog_close_icon{visibility:hidden}#fb_dialog_loader_spinner{animation:rotateSpinner 1.2s linear infinite;background-color:transparent;background-image:url(https:\/\/static.xx.fbcdn.net\/rsrc.php\/v3\/yD\/r\/t-wz8gw1xG1.png);background-repeat:no-repeat;background-position:50\u0025 50\u0025;height:24px;width:24px}\u0040keyframes rotateSpinner{0\u0025{transform:rotate(0deg)}100\u0025{transform:rotate(360deg)}}\n.fb_iframe_widget{display:inline-block;position:relative}.fb_iframe_widget span{display:inline-block;position:relative;text-align:justify}.fb_iframe_widget iframe{position:absolute}.fb_iframe_widget_fluid_desktop,.fb_iframe_widget_fluid_desktop span,.fb_iframe_widget_fluid_desktop iframe{max-width:100\u0025}.fb_iframe_widget_fluid_desktop iframe{min-width:220px;position:relative}.fb_iframe_widget_lift{z-index:1}.fb_hide_iframes iframe{position:relative;left:-10000px}.fb_iframe_widget_loader{position:relative;display:inline-block}.fb_iframe_widget_fluid{display:inline}.fb_iframe_widget_fluid span{width:100\u0025}.fb_iframe_widget_loader iframe{min-height:32px;z-index:2;zoom:1}.fb_iframe_widget_loader .FB_Loader{background:url(https:\/\/static.xx.fbcdn.net\/rsrc.php\/v3\/y9\/r\/jKEcVPZFk-2.gif) no-repeat;height:32px;width:32px;margin-left:-16px;position:absolute;left:50\u0025;z-index:4}\n.fb_customer_chat_bounce_in{animation-duration:250ms;animation-name:fb_bounce_in}.fb_customer_chat_bounce_out{animation-duration:250ms;animation-name:fb_fade_out}.fb_invisible_flow{display:inherit;height:0;overflow-x:hidden;width:0}.fb_mobile_overlay_active{height:100\u0025;overflow:hidden;position:fixed;width:100\u0025}\u0040keyframes fb_fade_out{from{opacity:1}to{opacity:0}}\u0040keyframes fb_bounce_in{0\u0025{opacity:0;transform:scale(.8, .8);transform-origin:100\u0025 100\u0025}10\u0025{opacity:.1}20\u0025{opacity:.2}30\u0025{opacity:.3}40\u0025{opacity:.4}50\u0025{opacity:.5}60\u0025{opacity:.6}70\u0025{opacity:.7}80\u0025{opacity:.8;transform:scale(1.03, 1.03)}90{opacity:.9}100\u0025{opacity:1;transform:scale(1, 1)}}",
                    "components": ["css:fb.css.base", "css:fb.css.dialog", "css:fb.css.iframewidget", "css:fb.css.customer_chat_plugin_iframe"]
                });
                __d("ApiClientConfig", [], {"FlashRequest": {"swfUrl": "https:\/\/connect.facebook.net\/rsrc.php\/v2\/yd\/r\/mxzow1Sdmxr.swf"}});
                __d("JSSDKCanvasPrefetcherConfig", [], {
                    "blacklist": [144959615576466, 768691303149786, 320528941393723],
                    "sampleRate": 500
                });
                __d("DOMWrapper", [], (function a(b, c, d, e, f, g) {
                    var h, i, j = {
                        setRoot: function k(l) {
                            h = l
                        }, getRoot: function k() {
                            return h || document.body
                        }, setWindow: function k(l) {
                            i = l
                        }, getWindow: function k() {
                            return i || self
                        }
                    };
                    f.exports = j
                }), null);
                __d("dotAccess", [], (function a(b, c, d, e, f, g) {
                    function h(i, j, k) {
                        var l = j.split(".");
                        do {
                            var m = l.shift();
                            i = i[m] || k && (i[m] = {})
                        } while (l.length && i);
                        return i
                    }

                    f.exports = h
                }), null);
                __d("guid", [], (function a(b, c, d, e, f, g) {
                    function h() {
                        return "f" + (Math.random() * (1 << 30)).toString(16).replace(".", "")
                    }

                    f.exports = h
                }), 18);
                __d("wrapFunction", [], (function a(b, c, d, e, f, g) {
                    var h = {}, i = function i(j, k, l) {
                        return function () {
                            var m = k in h ? h[k](j, l) : j;
                            for (var n = arguments.length, o = Array(n), p = 0; p < n; p++) o[p] = arguments[p];
                            return m.apply(this, o)
                        }
                    };
                    i.setWrapper = function (j, k) {
                        h[k] = j
                    };
                    f.exports = i
                }), null);
                __d("GlobalCallback", ["DOMWrapper", "dotAccess", "guid", "wrapFunction"], (function a(b, c, d, e, f, g, h, i, j, k) {
                    __p && __p();
                    var l, m, n = {
                        setPrefix: function o(p) {
                            l = i(h.getWindow(), p, true);
                            m = p
                        }, create: function o(p, q) {
                            if (!l) this.setPrefix("__globalCallbacks");
                            var r = j();
                            l[r] = k(p, "entry", q || "GlobalCallback");
                            return m + "." + r
                        }, remove: function o(p) {
                            var q = p.substring(m.length + 1);
                            delete l[q]
                        }
                    };
                    f.exports = n
                }), null);
                __d("sprintf", [], (function a(b, c, d, e, f, g) {
                    function h(i) {
                        for (var j = arguments.length, k = Array(j > 1 ? j - 1 : 0), l = 1; l < j; l++) k[l - 1] = arguments[l];
                        var m = 0;
                        return i.replace(/%s/g, function () {
                            return String(k[m++])
                        })
                    }

                    f.exports = h
                }), null);
                __d("Log", ["sprintf"], (function a(b, c, d, e, f, g, h) {
                    var i = {DEBUG: 3, INFO: 2, WARNING: 1, ERROR: 0};

                    function j(l, m) {
                        var n = Array.prototype.slice.call(arguments, 2), o = h.apply(null, n), p = window.console;
                        if (p && k.level >= m) p[l in p ? l : "log"](o)
                    }

                    var k = {
                        level: -1,
                        Level: i,
                        debug: ES(j, "bind", true, null, "debug", i.DEBUG),
                        info: ES(j, "bind", true, null, "info", i.INFO),
                        warn: ES(j, "bind", true, null, "warn", i.WARNING),
                        error: ES(j, "bind", true, null, "error", i.ERROR)
                    };
                    f.exports = k
                }), null);
                __d("ObservableMixin", [], (function a(b, c, d, e, f, g) {
                    __p && __p();

                    function h() {
                        this.__observableEvents = {}
                    }

                    h.prototype = {
                        inform: function i(j) {
                            __p && __p();
                            var k = Array.prototype.slice.call(arguments, 1),
                                l = Array.prototype.slice.call(this.getSubscribers(j));
                            for (var m = 0; m < l.length; m++) {
                                if (l[m] === null) continue;
                                try {
                                    l[m].apply(this, k)
                                } catch (n) {
                                    setTimeout(function () {
                                        throw n
                                    }, 0)
                                }
                            }
                            return this
                        }, getSubscribers: function i(j) {
                            return this.__observableEvents[j] || (this.__observableEvents[j] = [])
                        }, clearSubscribers: function i(j) {
                            if (j) this.__observableEvents[j] = [];
                            return this
                        }, clearAllSubscribers: function i() {
                            this.__observableEvents = {};
                            return this
                        }, subscribe: function i(j, k) {
                            var l = this.getSubscribers(j);
                            l.push(k);
                            return this
                        }, unsubscribe: function i(j, k) {
                            var l = this.getSubscribers(j);
                            for (var m = 0; m < l.length; m++) if (l[m] === k) {
                                l.splice(m, 1);
                                break
                            }
                            return this
                        }, monitor: function i(j, k) {
                            if (!k()) {
                                var i = ES(function (l) {
                                    if (k.apply(k, arguments)) this.unsubscribe(j, i)
                                }, "bind", true, this);
                                this.subscribe(j, i)
                            }
                            return this
                        }
                    };
                    f.exports = h
                }), null);
                __d("UrlMap", ["UrlMapConfig"], (function a(b, c, d, e, f, g, h) {
                    __p && __p();
                    var i = {
                        resolve: function j(k, l) {
                            var m = typeof l == "undefined" ? location.protocol.replace(":", "") : l ? "https" : "http";
                            if (k in h) return m + "://" + h[k];
                            if (typeof l == "undefined" && k + "_" + m in h) return m + "://" + h[k + "_" + m];
                            if (l !== true && k + "_http" in h) return "http://" + h[k + "_http"];
                            if (l !== false && k + "_https" in h) return "https://" + h[k + "_https"]
                        }
                    };
                    f.exports = i
                }), null);
                __d("QueryString", [], (function a(b, c, d, e, f, g) {
                    __p && __p();

                    function h(l) {
                        __p && __p();
                        var m = [];
                        ES(ES("Object", "keys", false, l).sort(), "forEach", true, function (n) {
                            var o = l[n];
                            if (typeof o === "undefined") return;
                            if (o === null) {
                                m.push(n);
                                return
                            }
                            m.push(encodeURIComponent(n) + "=" + encodeURIComponent(o))
                        });
                        return m.join("&")
                    }

                    function i(l, m) {
                        __p && __p();
                        var n = {};
                        if (l === "") return n;
                        var o = l.split("&");
                        for (var p = 0; p < o.length; p++) {
                            var q = o[p].split("=", 2), r = decodeURIComponent(q[0]);
                            if (m && Object.prototype.hasOwnProperty.call(n, r)) throw new URIError("Duplicate key: " + r);
                            n[r] = q.length === 2 ? decodeURIComponent(q[1]) : null
                        }
                        return n
                    }

                    function j(l, m) {
                        return l + (ES(l, "indexOf", true, "?") !== -1 ? "&" : "?") + (typeof m === "string" ? m : k.encode(m))
                    }

                    var k = {encode: h, decode: i, appendToUrl: j};
                    f.exports = k
                }), null);
                __d("ManagedError", [], (function a(b, c, d, e, f, g) {
                    function h(i, j) {
                        Error.prototype.constructor.call(this, i);
                        this.message = i;
                        this.innerError = j
                    }

                    h.prototype = new Error();
                    h.prototype.constructor = h;
                    f.exports = h
                }), null);
                __d("AssertionError", ["ManagedError"], (function a(b, c, d, e, f, g, h) {
                    function i(j) {
                        h.prototype.constructor.apply(this, arguments)
                    }

                    i.prototype = new h();
                    i.prototype.constructor = i;
                    f.exports = i
                }), null);
                __d("Assert", ["AssertionError", "sprintf"], (function a(b, c, d, e, f, g, h, i) {
                    __p && __p();

                    function j(o, p) {
                        if (typeof o !== "boolean" || !o) throw new h(p);
                        return o
                    }

                    function k(o, p, q) {
                        __p && __p();
                        var r;
                        if (p === undefined) r = "undefined"; else if (p === null) r = "null"; else {
                            var s = Object.prototype.toString.call(p);
                            r = /\s(\w*)/.exec(s)[1].toLowerCase()
                        }
                        j(ES(o, "indexOf", true, r) !== -1, q || i("Expression is of type %s, not %s", r, o));
                        return p
                    }

                    function l(o, p, q) {
                        j(p instanceof o, q || "Expression not instance of type");
                        return p
                    }

                    function m(o, p) {
                        n["is" + o] = p;
                        n["maybe" + o] = function (q, r) {
                            if (q != null) p(q, r)
                        }
                    }

                    var n = {
                        isInstanceOf: l, isTrue: j, isTruthy: function o(p, q) {
                            return j(!!p, q)
                        }, type: k, define: function o(p, q) {
                            p = p.substring(0, 1).toUpperCase() + p.substring(1).toLowerCase();
                            m(p, function (r, s) {
                                j(q(r), s)
                            })
                        }
                    };
                    ES(["Array", "Boolean", "Date", "Function", "Null", "Number", "Object", "Regexp", "String", "Undefined"], "forEach", true, function (o) {
                        m(o, ES(k, "bind", true, null, o.toLowerCase()))
                    });
                    f.exports = n
                }), null);
                __d("Type", ["Assert"], (function a(b, c, d, e, f, g, h) {
                    __p && __p();

                    function i() {
                        var m = this.__mixins;
                        if (m) for (var n = 0; n < m.length; n++) m[n].apply(this, arguments)
                    }

                    function j(m, n) {
                        if (n instanceof m) return true;
                        if (n instanceof i) for (var o = 0; o < n.__mixins.length; o++) if (n.__mixins[o] == m) return true;
                        return false
                    }

                    function k(m, n) {
                        __p && __p();
                        var o = m.prototype;
                        if (!ES("Array", "isArray", false, n)) n = [n];
                        for (var p = 0; p < n.length; p++) {
                            var q = n[p];
                            if (typeof q == "function") {
                                o.__mixins.push(q);
                                q = q.prototype
                            }
                            ES(ES("Object", "keys", false, q), "forEach", true, function (r) {
                                o[r] = q[r]
                            })
                        }
                    }

                    function l(m, n, o) {
                        __p && __p();
                        var p = n && Object.prototype.hasOwnProperty.call(n, "constructor") ? n.constructor : function () {
                            this.parent.apply(this, arguments)
                        };
                        h.isFunction(p);
                        if (m && m.prototype instanceof i === false) throw new Error("parent type does not inherit from Type");
                        m = m || i;

                        function q() {
                        }

                        q.prototype = m.prototype;
                        p.prototype = new q();
                        if (n) ES("Object", "assign", false, p.prototype, n);
                        p.prototype.constructor = p;
                        p.parent = m;
                        p.prototype.__mixins = m.prototype.__mixins ? Array.prototype.slice.call(m.prototype.__mixins) : [];
                        if (o) k(p, o);
                        p.prototype.parent = function () {
                            this.parent = m.prototype.parent;
                            m.apply(this, arguments)
                        };
                        p.prototype.parentCall = function (r) {
                            return m.prototype[r].apply(this, Array.prototype.slice.call(arguments, 1))
                        };
                        p.extend = function (n, o) {
                            return l(this, n, o)
                        };
                        return p
                    }

                    ES("Object", "assign", false, i.prototype, {
                        instanceOf: function m(n) {
                            return j(n, this)
                        }
                    });
                    ES("Object", "assign", false, i, {
                        extend: function m(n, o) {
                            return typeof n === "function" ? l.apply(null, arguments) : l(null, n, o)
                        }, instanceOf: j
                    });
                    f.exports = i
                }), null);
                __d("sdk.Model", ["Type", "ObservableMixin"], (function a(b, c, d, e, f, g, h, i) {
                    __p && __p();
                    var j = h.extend({
                        constructor: function k(l) {
                            __p && __p();
                            this.parent();
                            var m = {}, n = this;
                            ES(ES("Object", "keys", false, l), "forEach", true, function (o) {
                                m[o] = l[o];
                                n["set" + o] = function (p) {
                                    if (p === m[o]) return this;
                                    m[o] = p;
                                    n.inform(o + ".change", p);
                                    return n
                                };
                                n["get" + o] = function () {
                                    return m[o]
                                }
                            })
                        }
                    }, i);
                    f.exports = j
                }), null);
                __d("sdk.Runtime", ["sdk.Model", "JSSDKRuntimeConfig"], (function a(b, c, d, e, f, g, h, i) {
                    __p && __p();
                    var j = {UNKNOWN: 0, PAGETAB: 1, CANVAS: 2, PLATFORM: 4}, k = new h({
                        AccessToken: "",
                        AutoLogAppEvents: false,
                        ClientID: "",
                        CookieUserID: "",
                        Environment: j.UNKNOWN,
                        Initialized: false,
                        IsVersioned: false,
                        KidDirectedSite: undefined,
                        Locale: i.locale,
                        LoggedIntoFacebook: undefined,
                        LoginStatus: undefined,
                        Revision: i.revision,
                        Rtl: i.rtl,
                        Scope: undefined,
                        SDKUrl: i.sdkurl,
                        SDKNS: i.sdkns,
                        Secure: undefined,
                        UseCookie: false,
                        UserID: "",
                        Version: undefined
                    });
                    ES("Object", "assign", false, k, {
                        ENVIRONMENTS: j, isEnvironment: function l(m) {
                            var n = this.getEnvironment();
                            return (m | n) === n
                        }, isCanvasEnvironment: function l() {
                            return this.isEnvironment(j.CANVAS) || this.isEnvironment(j.PAGETAB)
                        }
                    });
                    (function () {
                        var l = /app_runner/.test(window.name) ? j.PAGETAB : /iframe_canvas/.test(window.name) ? j.CANVAS : j.UNKNOWN;
                        if ((l | j.PAGETAB) === l) l |= j.CANVAS;
                        k.setEnvironment(l)
                    })();
                    f.exports = k
                }), null);
                __d("sdk.Cookie", ["QueryString", "sdk.Runtime"], (function a(b, c, d, e, f, g, h, i) {
                    __p && __p();
                    var j = null;

                    function k(n, o, p) {
                        n = n + i.getClientID();
                        var q = j && j !== ".";
                        if (q) {
                            document.cookie = n + "=; expires=Wed, 04 Feb 2004 08:00:00 GMT;";
                            document.cookie = n + "=; expires=Wed, 04 Feb 2004 08:00:00 GMT;domain=" + location.hostname + ";"
                        }
                        var r = new Date(p).toGMTString();
                        document.cookie = n + "=" + o + (o && p === 0 ? "" : "; expires=" + r) + "; path=/" + (q ? "; domain=" + j : "")
                    }

                    function l(n) {
                        n = n + i.getClientID();
                        var o = new RegExp("\\b" + n + "=([^;]*)\\b");
                        return o.test(document.cookie) ? RegExp.$1 : null
                    }

                    var m = {
                        setDomain: function n(o) {
                            j = o;
                            var p = h.encode({base_domain: j && j !== "." ? j : ""}), q = new Date();
                            q.setFullYear(q.getFullYear() + 1);
                            k("fbm_", p, q.getTime())
                        }, getDomain: function n() {
                            return j
                        }, loadMeta: function n() {
                            var o = l("fbm_");
                            if (o) {
                                var p = h.decode(o);
                                if (!j) j = p.base_domain;
                                return p
                            }
                        }, loadSignedRequest: function n() {
                            return l("fbsr_")
                        }, setSignedRequestCookie: function n(o, p) {
                            if (!o) throw new Error("Value passed to Cookie.setSignedRequestCookie was empty.");
                            k("fbsr_", o, p)
                        }, clearSignedRequestCookie: function n() {
                            k("fbsr_", "", 0)
                        }, setRaw: k, getRaw: l
                    };
                    f.exports = m
                }), null);
                __d("Miny", [], (function a(b, c, d, e, f, g) {
                    __p && __p();
                    var h = "Miny1", i = "wxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_".split(""), j = {
                        encode: function k(l) {
                            __p && __p();
                            if (/^$|[~\\]|__proto__/.test(l)) return l;
                            var m = l.match(/\w+|\W+/g), n, o = ES("Object", "create", false, null);
                            for (n = 0; n < m.length; n++) o[m[n]] = (o[m[n]] || 0) + 1;
                            var p = ES("Object", "keys", false, o);
                            p.sort(function (s, t) {
                                return o[t] - o[s]
                            });
                            for (n = 0; n < p.length; n++) {
                                var q = (n - n % 32) / 32;
                                o[p[n]] = q ? q.toString(32) + i[n % 32] : i[n % 32]
                            }
                            var r = "";
                            for (n = 0; n < m.length; n++) r += o[m[n]];
                            p.unshift(h, p.length);
                            p.push(r);
                            return p.join("~")
                        }
                    };
                    f.exports = j
                }), null);
                __d("sdk.UA", [], (function a(b, c, d, e, f, g) {
                    __p && __p();
                    var h = navigator.userAgent, i = {
                            iphone: /\b(iPhone|iP[ao]d)/.test(h),
                            ipad: /\b(iP[ao]d)/.test(h),
                            android: /Android/i.test(h),
                            nativeApp: /FBAN\/\w+;/i.test(h),
                            nativeAndroidApp: /FB_IAB\/\w+;/i.test(h),
                            nativeInstagramApp: /Instagram/i.test(h)
                        }, j = /Mobile/i.test(h),
                        k = {ie: "", firefox: "", chrome: "", webkit: "", osx: "", edge: "", operaMini: "", ucWeb: ""},
                        l = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(h);
                    if (l) {
                        k.ie = l[1] ? parseFloat(l[1]) : l[4] ? parseFloat(l[4]) : "";
                        k.firefox = l[2] || "";
                        k.webkit = l[3] || "";
                        if (l[3]) {
                            var m = /(?:Chrome\/(\d+\.\d+))/.exec(h);
                            k.chrome = m ? m[1] : "";
                            var n = /(?:Edge\/(\d+\.\d+))/.exec(h);
                            k.edge = n ? n[1] : ""
                        }
                    }
                    var o = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(h);
                    if (o) k.osx = o[1];
                    var p = /(?:Opera Mini\/(\d+(?:\.\d+)?))/.exec(h);
                    if (p) k.operaMini = p[1];
                    var q = /(?:UCWEB\/(\d+(?:\.\d+))?)/.exec(h);
                    if (q) k.ucWeb = q[1] || "2.0";

                    function r(t) {
                        return ES(t.split("."), "map", true, function (u) {
                            return parseFloat(u)
                        })
                    }

                    var s = {};
                    ES(ES("Object", "keys", false, k), "map", true, function (t) {
                        s[t] = function () {
                            return parseFloat(k[t])
                        };
                        s[t].getVersionParts = function () {
                            return r(k[t])
                        }
                    });
                    ES(ES("Object", "keys", false, i), "map", true, function (t) {
                        s[t] = function () {
                            return i[t]
                        }
                    });
                    s.mobile = function () {
                        return i.iphone || i.ipad || i.android || j
                    };
                    s.mTouch = function () {
                        return i.android || i.iphone || i.ipad
                    };
                    s.facebookInAppBrowser = function () {
                        return i.nativeApp || i.nativeAndroidApp
                    };
                    s.inAppBrowser = function () {
                        return i.nativeApp || i.nativeAndroidApp || i.nativeInstagramApp
                    };
                    s.mBasic = function () {
                        return !!(k.ucWeb || k.operaMini)
                    };
                    f.exports = s
                }), null);
                __d("getBlankIframeSrc", ["sdk.UA"], (function a(b, c, d, e, f, g, h) {
                    function i() {
                        return h.ie() < 10 ? "javascript:false" : "about:blank"
                    }

                    f.exports = i
                }), null);
                __d("insertIframe", ["GlobalCallback", "getBlankIframeSrc", "guid"], (function a(b, c, d, e, f, g, h, i, j) {
                    __p && __p();

                    function k(l) {
                        __p && __p();
                        l.id = l.id || j();
                        l.name = l.name || j();
                        var m = false, n = false, o = function o() {
                            if (m && !n) {
                                n = true;
                                l.onload && l.onload(l.root.firstChild)
                            }
                        }, p = h.create(o);
                        if (document.attachEvent) {
                            var q = '<iframe id="' + l.id + '" name="' + l.name + '"' + (l.title ? ' title="' + l.title + '"' : "") + (l.className ? ' class="' + l.className + '"' : "") + ' style="border:none;' + (l.width ? "width:" + l.width + "px;" : "") + (l.height ? "height:" + l.height + "px;" : "") + '" src="' + i() + '" frameborder="0" scrolling="no" allowtransparency="true" onload="' + p + '()"></iframe>';
                            l.root.innerHTML = '<iframe src="' + i() + '" frameborder="0" scrolling="no" style="height:1px"></iframe>';
                            m = true;
                            setTimeout(function () {
                                l.root.innerHTML = q;
                                l.root.firstChild.src = l.url;
                                l.onInsert && l.onInsert(l.root.firstChild)
                            }, 0)
                        } else {
                            var r = document.createElement("iframe");
                            r.id = l.id;
                            r.name = l.name;
                            r.onload = o;
                            r.scrolling = "no";
                            r.style.border = "none";
                            r.style.overflow = "hidden";
                            if (l.title) r.title = l.title;
                            if (l.className) r.className = l.className;
                            if (l.height !== undefined) r.style.height = l.height + "px";
                            if (l.width !== undefined) if (l.width == "100%") r.style.width = l.width; else r.style.width = l.width + "px";
                            l.root.appendChild(r);
                            m = true;
                            r.src = l.url;
                            l.onInsert && l.onInsert(r)
                        }
                    }

                    f.exports = k
                }), null);
                __d("sdk.domReady", ["sdk.Runtime"], (function a(b, c, d, e, f, g, h) {
                    __p && __p();
                    var i, j = "readyState" in document ? /loaded|complete/.test(document.readyState) : !!document.body;

                    function k() {
                        if (!i) return;
                        var n;
                        while (n = i.shift()) n();
                        i = null
                    }

                    function l(n) {
                        if (i) {
                            i.push(n);
                        } else n()
                    }

                    if (!j) {
                        i = [];
                        if (document.addEventListener) {
                            document.addEventListener("DOMContentLoaded", k, false);
                            window.addEventListener("load", k, false)
                        } else if (document.attachEvent) {
                            document.attachEvent("onreadystatechange", k);
                            window.attachEvent("onload", k)
                        }
                        if (document.documentElement.doScroll && window == window.top) {
                            var m = function m() {
                                try {
                                    h.getRtl() ? document.documentElement.doScroll("right") : document.documentElement.doScroll("left")
                                } catch (n) {
                                    setTimeout(m, 0);
                                    return
                                }
                                k()
                            };
                            m()
                        }
                    }
                    f.exports = l
                }), 3);
                __d("sdk.Content", ["Log", "sdk.UA", "sdk.domReady"], (function a(b, c, d, e, f, g, h, i, j) {
                    __p && __p();
                    var k, l, m = {
                        append: function n(o, p) {
                            __p && __p();
                            if (!p) if (!k) {
                                k = p = document.getElementById("fb-root");
                                if (!p) {
                                    h.warn('The "fb-root" div has not been created, auto-creating');
                                    k = p = document.createElement("div");
                                    p.id = "fb-root";
                                    if (i.ie() || !document.body) j(function () {
                                        document.body.appendChild(p)
                                    }); else document.body.appendChild(p)
                                }
                                p.className += " fb_reset"
                            } else p = k;
                            if (typeof o == "string") {
                                var q = document.createElement("div");
                                p.appendChild(q).innerHTML = o;
                                return q
                            } else return p.appendChild(o)
                        }, appendHidden: function n(o) {
                            if (!l) {
                                var l = document.createElement("div"), p = l.style;
                                p.position = "absolute";
                                p.top = "-10000px";
                                p.width = p.height = 0;
                                l = m.append(l)
                            }
                            return m.append(o, l)
                        }, submitToTarget: function n(o, p) {
                            __p && __p();
                            var q = document.createElement("form");
                            q.action = o.url;
                            q.target = o.target;
                            q.method = p ? "GET" : "POST";
                            m.appendHidden(q);
                            for (var r in o.params) if (Object.prototype.hasOwnProperty.call(o.params, r)) {
                                var s = o.params[r];
                                if (s !== null && s !== undefined) {
                                    var t = document.createElement("input");
                                    t.name = r;
                                    t.value = s;
                                    q.appendChild(t)
                                }
                            }
                            q.submit();
                            q.parentNode.removeChild(q)
                        }
                    };
                    f.exports = m
                }), null);
                __d("sdk.Impressions", ["sdk.Content", "Miny", "QueryString", "sdk.Runtime", "UrlMap", "getBlankIframeSrc", "guid", "insertIframe"], (function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
                    __p && __p();

                    function p(r) {
                        __p && __p();
                        var s = k.getClientID();
                        if (!r.api_key && s) r.api_key = s;
                        r.kid_directed_site = k.getKidDirectedSite();
                        var t = l.resolve("www", true) + "/impression.php/" + n() + "/", u = j.appendToUrl(t, r);
                        if (u.length > 2e3) if (r.payload && typeof r.payload === "string") {
                            var v = i.encode(r.payload);
                            if (v && v.length < r.payload.length) {
                                r.payload = v;
                                u = j.appendToUrl(t, r)
                            }
                        }
                        if (u.length <= 2e3) {
                            var w = new Image();
                            w.src = u
                        } else {
                            var x = n(), y = h.appendHidden("");
                            o({
                                url: m(), root: y, name: x, className: "fb_hidden fb_invisible", onload: function z() {
                                    y.parentNode.removeChild(y)
                                }
                            });
                            h.submitToTarget({url: t, target: x, params: r})
                        }
                    }

                    var q = {
                        log: function r(s, t) {
                            if (!t.source) t.source = "jssdk";
                            p({lid: s, payload: ES("JSON", "stringify", false, t)})
                        }, impression: p
                    };
                    f.exports = q
                }), null);
                __d("sdk.Scribe", ["QueryString", "sdk.Runtime", "UrlMap"], (function a(b, c, d, e, f, g, h, i, j) {
                    function k(m, n) {
                        if (typeof n.extra == "object") n.extra.revision = i.getRevision();
                        new Image().src = h.appendToUrl(j.resolve("www", true) + "/common/scribe_endpoint.php", {
                            c: m,
                            m: ES("JSON", "stringify", false, n)
                        })
                    }

                    var l = {log: k};
                    f.exports = l
                }), null);
                __d("Base64", [], (function a(b, c, d, e, f, g) {
                    __p && __p();
                    var h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

                    function i(m) {
                        m = m.charCodeAt(0) << 16 | m.charCodeAt(1) << 8 | m.charCodeAt(2);
                        return String.fromCharCode(h.charCodeAt(m >>> 18), h.charCodeAt(m >>> 12 & 63), h.charCodeAt(m >>> 6 & 63), h.charCodeAt(m & 63))
                    }

                    var j = ">___?456789:;<=_______\0\x01\x02\x03\x04\x05\x06\x07\b\t\n\v\f\r\x0e\x0f\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19______\x1a\x1b\x1c\x1d\x1e\x1f !\"#$%&'()*+,-./0123";

                    function k(m) {
                        m = j.charCodeAt(m.charCodeAt(0) - 43) << 18 | j.charCodeAt(m.charCodeAt(1) - 43) << 12 | j.charCodeAt(m.charCodeAt(2) - 43) << 6 | j.charCodeAt(m.charCodeAt(3) - 43);
                        return String.fromCharCode(m >>> 16, m >>> 8 & 255, m & 255)
                    }

                    var l = {
                        encode: function m(n) {
                            n = unescape(encodeURI(n));
                            var o = (n.length + 2) % 3;
                            n = (n + "\0\0".slice(o)).replace(/[\s\S]{3}/g, i);
                            return n.slice(0, n.length + o - 2) + "==".slice(o)
                        }, decode: function m(n) {
                            n = n.replace(/[^A-Za-z0-9+\/]/g, "");
                            var o = n.length + 3 & 3;
                            n = (n + "AAA".slice(o)).replace(/..../g, k);
                            n = n.slice(0, n.length + o - 3);
                            try {
                                return decodeURIComponent(escape(n))
                            } catch (p) {
                                throw new Error("Not valid UTF-8")
                            }
                        }, encodeObject: function m(n) {
                            return l.encode(ES("JSON", "stringify", false, n))
                        }, decodeObject: function m(n) {
                            return ES("JSON", "parse", false, l.decode(n))
                        }, encodeNums: function m(n) {
                            return String.fromCharCode.apply(String, ES(n, "map", true, function (o) {
                                return h.charCodeAt((o | -(o > 63)) & -(o > 0) & 63)
                            }))
                        }
                    };
                    f.exports = l
                }), null);
                __d("sdk.SignedRequest", ["Base64"], (function a(b, c, d, e, f, g, h) {
                    function i(k) {
                        if (!k) return null;
                        var l = k.split(".", 2)[1].replace(/\-/g, "+").replace(/\_/g, "/");
                        return h.decodeObject(l)
                    }

                    var j = {parse: i};
                    f.exports = j
                }), null);
                __d("URIRFC3986", [], (function a(b, c, d, e, f, g) {
                    __p && __p();
                    var h = new RegExp("^([^:/?#]+:)?(//([^\\\\/?#@]*@)?(\\[[A-Fa-f0-9:.]+\\]|[^\\/?#:]*)(:[0-9]*)?)?([^?#]*)(\\?[^#]*)?(#.*)?"),
                        i = {
                            parse: function j(k) {
                                __p && __p();
                                if (ES(k, "trim", true) === "") return null;
                                var l = k.match(h);
                                if (l == null) return null;
                                var m = {};
                                m.uri = l[0] ? l[0] : null;
                                m.scheme = l[1] ? l[1].substr(0, l[1].length - 1) : null;
                                m.authority = l[2] ? l[2].substr(2) : null;
                                m.userinfo = l[3] ? l[3].substr(0, l[3].length - 1) : null;
                                m.host = l[2] ? l[4] : null;
                                m.port = l[5] ? l[5].substr(1) ? parseInt(l[5].substr(1), 10) : null : null;
                                m.path = l[6] ? l[6] : null;
                                m.query = l[7] ? l[7].substr(1) : null;
                                m.fragment = l[8] ? l[8].substr(1) : null;
                                m.isGenericURI = m.authority === null && !!m.scheme;
                                return m
                            }
                        };
                    f.exports = i
                }), 18);
                __d("createObjectFrom", [], (function a(b, c, d, e, f, g) {
                    __p && __p();

                    function h(i, j) {
                        if (j === undefined) return h(i, true);
                        var k = {};
                        if (ES("Array", "isArray", false, j)) for (var l = i.length - 1; l >= 0; l--) k[i[l]] = j[l]; else for (var m = i.length - 1; m >= 0; m--) k[i[m]] = j;
                        return k
                    }

                    f.exports = h
                }), 18);
                __d("URISchemes", ["createObjectFrom"], (function a(b, c, d, e, f, g, h) {
                    var i = h(["blob", "cmms", "fb", "fba", "fbatwork", "fb-ama", "fb-workchat", "fb-messenger", "fb-messenger-public", "fb-messenger-group-thread", "fb-page-messages", "fb-pma", "fbcf", "fbconnect", "fbinternal", "fbmobilehome", "fbrpc", "file", "ftp", "http", "https", "mailto", "ms-app", "intent", "itms", "itms-apps", "itms-services", "market", "svn+ssh", "fbstaging", "tel", "sms", "pebblejs", "sftp", "whatsapp", "moments", "flash", "fblite", "chrome-extension", "webcal", "fb124024574287414", "fb124024574287414rc", "fb124024574287414master", "fb1576585912599779", "fb929757330408142", "designpack", "fbpixelcloud", "fbapi20130214", "fb1196383223757595", "tbauth", "oculus", "oculus.store", "skype", "callto"]),
                        j = {
                            isAllowed: function k(l) {
                                if (!l) return true;
                                return Object.prototype.hasOwnProperty.call(i, l.toLowerCase())
                            }
                        };
                    f.exports = j
                }), 18);
                __d("eprintf", [], (function a(b, c, d, e, f, g) {
                    __p && __p();

                    function h(i) {
                        for (var j = arguments.length, k = Array(j > 1 ? j - 1 : 0), l = 1; l < j; l++) k[l - 1] = arguments[l];
                        var m = ES(k, "map", true, function (p) {
                            return String(p)
                        }), n = i.split("%s").length - 1;
                        if (n !== m.length) return h("eprintf args number mismatch: %s", ES("JSON", "stringify", false, [i].concat(m)));
                        var o = 0;
                        return i.replace(/%s/g, function () {
                            return String(m[o++])
                        })
                    }

                    f.exports = h
                }), null);
                __d("ex", ["eprintf"], (function a(b, c, d, e, f, g, h) {
                    __p && __p();

                    function i(j) {
                        for (var k = arguments.length, l = Array(k > 1 ? k - 1 : 0), m = 1; m < k; m++) l[m - 1] = arguments[m];
                        var n = ES(l, "map", true, function (p) {
                            return String(p)
                        }), o = j.split("%s").length - 1;
                        if (o !== n.length) return i("ex args number mismatch: %s", ES("JSON", "stringify", false, [j].concat(n)));
                        return i._prefix + ES("JSON", "stringify", false, [j].concat(n)) + i._suffix
                    }

                    i._prefix = "<![EX[";
                    i._suffix = "]]>";
                    f.exports = i
                }), null);
                __d("invariant", ["ex", "sprintf"], (function a(b, c, d, e, f, g, h, i) {
                    "use strict";
                    __p && __p();
                    var j = h;

                    function k(l, m) {
                        __p && __p();
                        if (!l) {
                            var n = void 0;
                            if (m === undefined) n = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."); else {
                                for (var o = arguments.length, p = Array(o > 2 ? o - 2 : 0), q = 2; q < o; q++) p[q - 2] = arguments[q];
                                n = new Error(j.apply(undefined, [m].concat(p)));
                                n.name = "Invariant Violation";
                                n.messageWithParams = [m].concat(p)
                            }
                            n.framesToPop = 1;
                            throw n
                        }
                    }

                    f.exports = k
                }), null);
                __d("setHostSubdomain", [], (function a(b, c, d, e, f, g) {
                    function h(i, j) {
                        var k = i.split(".");
                        if (k.length < 3) k.unshift(j); else k[0] = j;
                        return k.join(".")
                    }

                    f.exports = h
                }), null);
                __d("URIBase", ["URIRFC3986", "URISchemes", "ex", "invariant", "setHostSubdomain"], (function a(b, c, d, e, f, g, h, i, j, k, l) {
                    __p && __p();
                    var m = new RegExp("[\\x00-\\x2c\\x2f\\x3b-\\x40\\x5c\\x5e\\x60\\x7b-\\x7f\\uFDD0-\\uFDEF\\uFFF0-\\uFFFF\\u2047\\u2048\\uFE56\\uFE5F\\uFF03\\uFF0F\\uFF1F]"),
                        n = new RegExp("^(?:[^/]*:|[\\x00-\\x1f]*/[\\x00-\\x1f]*/)");

                    function o(r, s, t, u) {
                        __p && __p();
                        if (!s) return true;
                        if (s instanceof q) {
                            r.setProtocol(s.getProtocol());
                            r.setDomain(s.getDomain());
                            r.setPort(s.getPort());
                            r.setPath(s.getPath());
                            r.setQueryData(u.deserialize(u.serialize(s.getQueryData())));
                            r.setFragment(s.getFragment());
                            r.setIsGeneric(s.getIsGeneric());
                            r.setForceFragmentSeparator(s.getForceFragmentSeparator());
                            return true
                        }
                        s = ES(s.toString(), "trim", true);
                        var v = h.parse(s) || {fragment: null, scheme: null};
                        if (!t && !i.isAllowed(v.scheme)) return false;
                        r.setProtocol(v.scheme || "");
                        if (!t && m.test(v.host || "")) return false;
                        r.setDomain(v.host || "");
                        r.setPort(v.port || "");
                        r.setPath(v.path || "");
                        if (t) r.setQueryData(u.deserialize(v.query || "") || {}); else try {
                            r.setQueryData(u.deserialize(v.query || "") || {})
                        } catch (w) {
                            return false
                        }
                        r.setFragment(v.fragment || "");
                        if (v.fragment === "") r.setForceFragmentSeparator(true);
                        r.setIsGeneric(v.isGenericURI || false);
                        if (v.userinfo !== null) if (t) throw new Error(j("URI.parse: invalid URI (userinfo is not allowed in a URI): %s", r.toString())); else return false;
                        if (!r.getDomain() && ES(r.getPath(), "indexOf", true, "\\") !== -1) if (t) throw new Error(j("URI.parse: invalid URI (no domain but multiple back-slashes): %s", r.toString())); else return false;
                        if (!r.getProtocol() && n.test(s)) if (t) throw new Error(j("URI.parse: invalid URI (unsafe protocol-relative URLs): %s", r.toString())); else return false;
                        if (r.getDomain() && r.getPath() && !ES(r.getPath(), "startsWith", true, "/")) if (t) throw new Error(j("URI.parse: invalid URI (domain and path where path lacks leading slash): %s", r.toString())); else return false;
                        return true
                    }

                    var p = [];
                    q.tryParse = function (r, s) {
                        "use strict";
                        var t = new q(null, s);
                        return o(t, r, false, s) ? t : null
                    };
                    q.isValid = function (r, s) {
                        "use strict";
                        return !!q.tryParse(r, s)
                    };

                    function q(r, s) {
                        "use strict";
                        __p && __p();
                        s || k(0);
                        this.$URIBase9 = s;
                        this.$URIBase7 = "";
                        this.$URIBase1 = "";
                        this.$URIBase6 = "";
                        this.$URIBase5 = "";
                        this.$URIBase3 = "";
                        this.$URIBase4 = false;
                        this.$URIBase8 = {};
                        this.$URIBase2 = false;
                        o(this, r, true, s)
                    }

                    q.prototype.setProtocol = function (r) {
                        "use strict";
                        i.isAllowed(r) || k(0);
                        this.$URIBase7 = r;
                        return this
                    };
                    q.prototype.getProtocol = function () {
                        "use strict";
                        return (this.$URIBase7 || "").toLowerCase()
                    };
                    q.prototype.setSecure = function (r) {
                        "use strict";
                        return this.setProtocol(r ? "https" : "http")
                    };
                    q.prototype.isSecure = function () {
                        "use strict";
                        return this.getProtocol() === "https"
                    };
                    q.prototype.setDomain = function (r) {
                        "use strict";
                        if (m.test(r)) throw new Error(j("URI.setDomain: unsafe domain specified: %s for url %s", r, this.toString()));
                        this.$URIBase1 = r;
                        return this
                    };
                    q.prototype.getDomain = function () {
                        "use strict";
                        return this.$URIBase1
                    };
                    q.prototype.setPort = function (r) {
                        "use strict";
                        this.$URIBase6 = r;
                        return this
                    };
                    q.prototype.getPort = function () {
                        "use strict";
                        return this.$URIBase6
                    };
                    q.prototype.setPath = function (r) {
                        "use strict";
                        this.$URIBase5 = r;
                        return this
                    };
                    q.prototype.getPath = function () {
                        "use strict";
                        return this.$URIBase5
                    };
                    q.prototype.addQueryData = function (r, s) {
                        "use strict";
                        if (Object.prototype.toString.call(r) === "[object Object]") ES("Object", "assign", false, this.$URIBase8, r); else this.$URIBase8[r] = s;
                        return this
                    };
                    q.prototype.setQueryData = function (r) {
                        "use strict";
                        this.$URIBase8 = r;
                        return this
                    };
                    q.prototype.getQueryData = function () {
                        "use strict";
                        return this.$URIBase8
                    };
                    q.prototype.removeQueryData = function (r) {
                        "use strict";
                        if (!ES("Array", "isArray", false, r)) r = [r];
                        for (var s = 0, t = r.length; s < t; ++s) delete this.$URIBase8[r[s]];
                        return this
                    };
                    q.prototype.setFragment = function (r) {
                        "use strict";
                        this.$URIBase3 = r;
                        this.setForceFragmentSeparator(false);
                        return this
                    };
                    q.prototype.getFragment = function () {
                        "use strict";
                        return this.$URIBase3
                    };
                    q.prototype.setForceFragmentSeparator = function (r) {
                        "use strict";
                        this.$URIBase2 = r;
                        return this
                    };
                    q.prototype.getForceFragmentSeparator = function () {
                        "use strict";
                        return this.$URIBase2
                    };
                    q.prototype.setIsGeneric = function (r) {
                        "use strict";
                        this.$URIBase4 = r;
                        return this
                    };
                    q.prototype.getIsGeneric = function () {
                        "use strict";
                        return this.$URIBase4
                    };
                    q.prototype.isEmpty = function () {
                        "use strict";
                        return !(this.getPath() || this.getProtocol() || this.getDomain() || this.getPort() || ES("Object", "keys", false, this.getQueryData()).length > 0 || this.getFragment())
                    };
                    q.prototype.toString = function () {
                        "use strict";
                        var r = this;
                        for (var s = 0; s < p.length; s++) r = p[s](r);
                        return r.$URIBase10()
                    };
                    q.prototype.$URIBase10 = function () {
                        "use strict";
                        __p && __p();
                        var r = "", s = this.getProtocol();
                        if (s) r += s + ":" + (this.getIsGeneric() ? "" : "//");
                        var t = this.getDomain();
                        if (t) r += t;
                        var u = this.getPort();
                        if (u) r += ":" + u;
                        var v = this.getPath();
                        if (v) r += v; else if (r) r += "/";
                        var w = this.$URIBase9.serialize(this.getQueryData());
                        if (w) r += "?" + w;
                        var x = this.getFragment();
                        if (x) r += "#" + x; else if (this.getForceFragmentSeparator()) r += "#";
                        return r
                    };
                    q.registerFilter = function (r) {
                        "use strict";
                        p.push(r)
                    };
                    q.prototype.getOrigin = function () {
                        "use strict";
                        var r = this.getPort();
                        return this.getProtocol() + "://" + this.getDomain() + (r ? ":" + r : "")
                    };
                    q.prototype.getQualifiedURIBase = function () {
                        "use strict";
                        return new q(this, this.$URIBase9).qualify()
                    };
                    q.prototype.qualify = function () {
                        "use strict";
                        if (!this.getDomain()) {
                            var r = new q(window.location.href, this.$URIBase9);
                            this.setProtocol(r.getProtocol()).setDomain(r.getDomain()).setPort(r.getPort())
                        }
                        return this
                    };
                    q.prototype.setSubdomain = function (r) {
                        "use strict";
                        var s = this.qualify().getDomain();
                        return this.setDomain(l(s, r))
                    };
                    q.prototype.getSubdomain = function () {
                        "use strict";
                        if (!this.getDomain()) return "";
                        var r = this.getDomain().split(".");
                        if (r.length <= 2) return ""; else return r[0]
                    };
                    f.exports = q
                }), null);
                __d("sdk.URI", ["Assert", "QueryString", "URIBase"], (function a(b, c, d, e, f, g, h, i, j) {
                    __p && __p();
                    var k, l, m = /\.facebook\.com$/, n = {
                        serialize: function p(q) {
                            return q ? i.encode(q) : ""
                        }, deserialize: function p(q) {
                            return q ? i.decode(q) : {}
                        }
                    };
                    k = babelHelpers.inherits(o, j);
                    l = k && k.prototype;

                    function o(p) {
                        "use strict";
                        h.isString(p, "The passed argument was of invalid type.");
                        l.constructor.call(this, p, n)
                    }

                    o.prototype.isFacebookURI = function () {
                        "use strict";
                        return m.test(this.getDomain())
                    };
                    o.prototype.valueOf = function () {
                        "use strict";
                        return this.toString()
                    };
                    o.isValidURI = function (p) {
                        "use strict";
                        return j.isValid(p, n)
                    };
                    f.exports = o
                }), null);
                __d("Queue", [], (function a(b, c, d, e, f, g) {
                    __p && __p();
                    var h = {};

                    function i(j) {
                        "use strict";
                        this._opts = babelHelpers["extends"]({interval: 0, processor: null}, j);
                        this._queue = [];
                        this._stopped = true
                    }

                    i.prototype._dispatch = function (j) {
                        "use strict";
                        __p && __p();
                        if (this._stopped || this._queue.length === 0) return;
                        if (!this._opts.processor) {
                            this._stopped = true;
                            throw new Error("No processor available")
                        }
                        if (this._opts.interval) {
                            this._opts.processor.call(this, this._queue.shift());
                            this._timeout = setTimeout(ES(this._dispatch, "bind", true, this), this._opts.interval)
                        } else while (this._queue.length) this._opts.processor.call(this, this._queue.shift())
                    };
                    i.prototype.enqueue = function (j) {
                        "use strict";
                        if (this._opts.processor && !this._stopped) this._opts.processor.call(this, j); else this._queue.push(j);
                        return this
                    };
                    i.prototype.start = function (j) {
                        "use strict";
                        if (j) this._opts.processor = j;
                        this._stopped = false;
                        this._dispatch();
                        return this
                    };
                    i.prototype.isStarted = function () {
                        "use strict";
                        return !this._stopped
                    };
                    i.prototype.dispatch = function () {
                        "use strict";
                        this._dispatch(true)
                    };
                    i.prototype.stop = function (j) {
                        "use strict";
                        this._stopped = true;
                        if (j) clearTimeout(this._timeout);
                        return this
                    };
                    i.prototype.merge = function (j, k) {
                        "use strict";
                        this._queue[k ? "unshift" : "push"].apply(this._queue, j._queue);
                        j._queue = [];
                        this._dispatch();
                        return this
                    };
                    i.prototype.getLength = function () {
                        "use strict";
                        return this._queue.length
                    };
                    i.get = function (j, k) {
                        "use strict";
                        var l;
                        if (j in h) l = h[j]; else l = h[j] = new i(k);
                        return l
                    };
                    i.exists = function (j) {
                        "use strict";
                        return j in h
                    };
                    i.remove = function (j) {
                        "use strict";
                        return delete h[j]
                    };
                    f.exports = i
                }), null);
                __d("emptyFunction", [], (function a(b, c, d, e, f, g) {
                    __p && __p();

                    function h(j) {
                        return function () {
                            return j
                        }
                    }

                    var i = function i() {
                    };
                    i.thatReturns = h;
                    i.thatReturnsFalse = h(false);
                    i.thatReturnsTrue = h(true);
                    i.thatReturnsNull = h(null);
                    i.thatReturnsThis = function () {
                        return this
                    };
                    i.thatReturnsArgument = function (j) {
                        return j
                    };
                    f.exports = i
                }), null);
                __d("DOMEventListener", ["emptyFunction", "invariant", "wrapFunction"], (function a(b, c, d, e, f, g, h, i, j) {
                    __p && __p();
                    var k = false;
                    try {
                        var l = Object.defineProperty({}, "passive", {
                            get: function q() {
                                k = true
                            }
                        });
                        window.addEventListener("test", null, l)
                    } catch (m) {
                    }
                    var n = void 0, o = void 0;
                    if (window.addEventListener) {
                        n = function q(r, s, t) {
                            var u = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];
                            t.wrapper = j(t, "entry", "DOMEventListener.add " + s);
                            r.addEventListener(s, t.wrapper, k ? u : false)
                        };
                        o = function q(r, s, t) {
                            var u = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];
                            r.removeEventListener(s, t.wrapper, k ? u : false)
                        }
                    } else if (window.attachEvent) {
                        n = function q(r, s, t) {
                            t.wrapper = j(t, "entry", "DOMEventListener.add " + s);
                            r.attachEvent || i(0);
                            r.attachEvent("on" + s, t.wrapper)
                        };
                        o = function q(r, s, t) {
                            r.detachEvent || i(0);
                            r.detachEvent("on" + s, t.wrapper)
                        }
                    } else o = n = h;
                    var p = {
                        add: function q(r, s, t) {
                            var u = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];
                            n(r, s, t, u);
                            return {
                                remove: function v() {
                                    o(r, s, t, u)
                                }
                            }
                        }, remove: o
                    };
                    f.exports = p
                }), 18);
                __d("UserAgent_DEPRECATED", [], (function a(b, c, d, e, f, g) {
                    __p && __p();
                    var h = false, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w;

                    function x() {
                        __p && __p();
                        if (h) return;
                        h = true;
                        var z = navigator.userAgent,
                            A = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(z),
                            B = /(Mac OS X)|(Windows)|(Linux)/.exec(z);
                        t = /\b(iPhone|iP[ao]d)/.exec(z);
                        u = /\b(iP[ao]d)/.exec(z);
                        r = /Android/i.exec(z);
                        v = /FBAN\/\w+;/i.exec(z);
                        w = /Mobile/i.exec(z);
                        s = !!/Win64/.exec(z);
                        if (A) {
                            i = A[1] ? parseFloat(A[1]) : A[5] ? parseFloat(A[5]) : NaN;
                            if (i && document && document.documentMode) i = document.documentMode;
                            var C = /(?:Trident\/(\d+.\d+))/.exec(z);
                            n = C ? parseFloat(C[1]) + 4 : i;
                            j = A[2] ? parseFloat(A[2]) : NaN;
                            k = A[3] ? parseFloat(A[3]) : NaN;
                            l = A[4] ? parseFloat(A[4]) : NaN;
                            if (l) {
                                A = /(?:Chrome\/(\d+\.\d+))/.exec(z);
                                m = A && A[1] ? parseFloat(A[1]) : NaN
                            } else m = NaN
                        } else i = j = k = m = l = NaN;
                        if (B) {
                            if (B[1]) {
                                var D = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(z);
                                o = D ? parseFloat(D[1].replace("_", ".")) : true
                            } else o = false;
                            p = !!B[2];
                            q = !!B[3]
                        } else o = p = q = false
                    }

                    var y = {
                        ie: function z() {
                            return x() || i
                        }, ieCompatibilityMode: function z() {
                            return x() || n > i
                        }, ie64: function z() {
                            return y.ie() && s
                        }, firefox: function z() {
                            return x() || j
                        }, opera: function z() {
                            return x() || k
                        }, webkit: function z() {
                            return x() || l
                        }, safari: function z() {
                            return y.webkit()
                        }, chrome: function z() {
                            return x() || m
                        }, windows: function z() {
                            return x() || p
                        }, osx: function z() {
                            return x() || o
                        }, linux: function z() {
                            return x() || q
                        }, iphone: function z() {
                            return x() || t
                        }, mobile: function z() {
                            return x() || t || u || r || w
                        }, nativeApp: function z() {
                            return x() || v
                        }, android: function z() {
                            return x() || r
                        }, ipad: function z() {
                            return x() || u
                        }
                    };
                    f.exports = y
                }), 18);
                __d("htmlSpecialChars", [], (function a(b, c, d, e, f, g) {
                    __p && __p();
                    var h = /&/g, i = /</g, j = />/g, k = /\"/g, l = /\'/g;

                    function m(n) {
                        if (typeof n == "undefined" || n === null || !n.toString) return "";
                        if (n === false) return "0"; else if (n === true) return "1";
                        return n.toString().replace(h, "&amp;").replace(k, "&quot;").replace(l, "&#039;").replace(i, "&lt;").replace(j, "&gt;")
                    }

                    f.exports = m
                }), null);
                __d("Flash", ["DOMEventListener", "DOMWrapper", "QueryString", "UserAgent_DEPRECATED", "guid", "htmlSpecialChars"], (function a(b, c, d, e, f, g, h, i, j, k, l, m) {
                    __p && __p();
                    var n = {}, o, p = i.getWindow().document;

                    function q(v) {
                        var w = p.getElementById(v);
                        if (w) w.parentNode.removeChild(w);
                        delete n[v]
                    }

                    function r() {
                        for (var v in n) if (Object.prototype.hasOwnProperty.call(n, v)) q(v)
                    }

                    function s(v) {
                        return v.replace(/\d+/g, function (w) {
                            return "000".substring(w.length) + w
                        })
                    }

                    function t(v) {
                        if (!o) {
                            if (k.ie() >= 9) h.add(window, "unload", r);
                            o = true
                        }
                        n[v] = v
                    }

                    var u = {
                        embed: function v(w, x, y, z) {
                            __p && __p();
                            var A = l();
                            w = m(w).replace(/&amp;/g, "&");
                            y = babelHelpers["extends"]({allowscriptaccess: "always", flashvars: z, movie: w}, y);
                            if (typeof y.flashvars == "object") y.flashvars = j.encode(y.flashvars);
                            var B = [];
                            for (var C in y) if (Object.prototype.hasOwnProperty.call(y, C) && y[C]) B.push('<param name="' + m(C) + '" value="' + m(y[C]) + '">');
                            var D = x.appendChild(p.createElement("span")),
                                E = "<object " + (k.ie() ? 'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" ' : 'type="application/x-shockwave-flash"') + 'data="' + w + '" ' + (y.height ? 'height="' + y.height + '" ' : "") + (y.width ? 'width="' + y.width + '" ' : "") + 'id="' + A + '">' + B.join("") + "</object>";
                            D.innerHTML = E;
                            var F = D.firstChild;
                            t(A);
                            return F
                        }, remove: q, getVersion: function v() {
                            __p && __p();
                            var w = "Shockwave Flash", x = "application/x-shockwave-flash",
                                y = "ShockwaveFlash.ShockwaveFlash", z;
                            if (navigator.plugins && typeof navigator.plugins[w] == "object") {
                                var A = navigator.plugins[w].description;
                                if (A && navigator.mimeTypes && navigator.mimeTypes[x] && navigator.mimeTypes[x].enabledPlugin) z = A.match(/\d+/g)
                            }
                            if (!z) try {
                                z = new ActiveXObject(y).GetVariable("$version").match(/(\d+),(\d+),(\d+),(\d+)/);
                                z = Array.prototype.slice.call(z, 1)
                            } catch (B) {
                            }
                            return z
                        }, getVersionString: function v() {
                            var w = u.getVersion();
                            return w ? w.join(".") : ""
                        }, checkMinVersion: function v(w) {
                            var x = u.getVersion();
                            if (!x) return false;
                            return s(x.join(".")) >= s(w)
                        }, isAvailable: function v() {
                            return !!u.getVersion()
                        }
                    };
                    f.exports = u
                }), null);
                __d("XDM", ["DOMEventListener", "DOMWrapper", "emptyFunction", "Flash", "GlobalCallback", "guid", "Log", "UserAgent_DEPRECATED", "wrapFunction"], (function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
                    __p && __p();
                    var q = {}, r = {transports: []}, s = i.getWindow();

                    function t(w) {
                        var x = {}, y = w.length, z = r.transports;
                        while (y--) x[w[y]] = 1;
                        y = z.length;
                        while (y--) {
                            var A = z[y], B = q[A];
                            if (!x[A] && B.isAvailable()) return A
                        }
                    }

                    var u = {
                        register: function w(x, y) {
                            n.debug("Registering %s as XDM provider", x);
                            r.transports.push(x);
                            q[x] = y
                        }, create: function w(x) {
                            __p && __p();
                            if (!x.whenReady && !x.onMessage) {
                                n.error("An instance without whenReady or onMessage makes no sense");
                                throw new Error("An instance without whenReady or onMessage makes no sense")
                            }
                            if (!x.channel) {
                                n.warn("Missing channel name, selecting at random");
                                x.channel = m()
                            }
                            if (!x.whenReady) x.whenReady = j;
                            if (!x.onMessage) x.onMessage = j;
                            var y = x.transport || t(x.blacklist || []), z = q[y];
                            if (z && z.isAvailable()) {
                                n.debug("%s is available", y);
                                z.init(x);
                                return y
                            }
                        }
                    };
                    u.register("flash", function () {
                        __p && __p();
                        var w = false, x, y = false, z = 15e3, A;
                        return {
                            isAvailable: function B() {
                                return k.checkMinVersion("8.0.24")
                            }, init: function B(C) {
                                __p && __p();
                                n.debug("init flash: " + C.channel);
                                var D = {
                                    send: function G(H, I, J, K) {
                                        n.debug("sending to: %s (%s)", I, K);
                                        x.postMessage(H, I, K)
                                    }
                                };
                                if (w) {
                                    C.whenReady(D);
                                    return
                                }
                                var E = C.root.appendChild(s.document.createElement("div")), F = l.create(function () {
                                    __p && __p();
                                    l.remove(F);
                                    clearTimeout(A);
                                    n.info("xdm.swf called the callback");
                                    var G = l.create(function (H, I) {
                                        H = decodeURIComponent(H);
                                        I = decodeURIComponent(I);
                                        n.debug("received message %s from %s", H, I);
                                        C.onMessage(H, I)
                                    }, "xdm.swf:onMessage");
                                    x.init(C.channel, G);
                                    C.whenReady(D)
                                }, "xdm.swf:load");
                                x = k.embed(C.flashUrl, E, null, {
                                    protocol: location.protocol.replace(":", ""),
                                    host: location.host,
                                    callback: F,
                                    log: y
                                });
                                A = setTimeout(function () {
                                    n.warn("The Flash component did not load within %s ms - verify that the container is not set to hidden or invisible using CSS as this will cause some browsers to not load the components", z)
                                }, z);
                                w = true
                            }
                        }
                    }());
                    var v = /\.facebook\.com(\/|$)/;
                    u.register("postmessage", function () {
                        __p && __p();
                        var w = false;
                        return {
                            isAvailable: function x() {
                                return !!s.postMessage
                            }, init: function x(y) {
                                __p && __p();
                                n.debug("init postMessage: " + y.channel);
                                var z = "_FB_" + y.channel, A = {
                                    send: function B(C, D, E, F) {
                                        __p && __p();
                                        if (s === E) {
                                            n.error("Invalid windowref, equal to window (self)");
                                            throw new Error()
                                        }
                                        n.debug("sending to: %s (%s)", D, F);
                                        var B = function B() {
                                            E.postMessage("_FB_" + F + C, D)
                                        };
                                        if (o.ie() == 8 || o.ieCompatibilityMode()) setTimeout(B, 0); else B()
                                    }
                                };
                                if (w) {
                                    y.whenReady(A);
                                    return
                                }
                                h.add(s, "message", p(function (event) {
                                    __p && __p();
                                    var B = event.data, C = event.origin || "native";
                                    if (!/^(https?:\/\/|native$)/.test(C)) {
                                        n.debug("Received message from invalid origin type: %s", C);
                                        return
                                    }
                                    if (C !== "native" && !(v.test(location.hostname) || v.test(event.origin))) return;
                                    if (typeof B != "string") {
                                        n.warn("Received message of type %s from %s, expected a string", typeof B, C);
                                        return
                                    }
                                    n.debug("received message %s from %s", B, C);
                                    if (B.substring(0, z.length) == z) B = B.substring(z.length);
                                    y.onMessage(B, C)
                                }, "entry", "onMessage"));
                                y.whenReady(A);
                                w = true
                            }
                        }
                    }());
                    f.exports = u
                }), null);
                __d("isFacebookURI", [], (function a(b, c, d, e, f, g) {
                    __p && __p();
                    var h = null, i = ["http", "https"];

                    function j(k) {
                        if (!h) h = new RegExp("(^|\\.)facebook\\.com$", "i");
                        if (k.isEmpty() && k.toString() !== "#") return false;
                        if (!k.getDomain() && !k.getProtocol()) return true;
                        return ES(i, "indexOf", true, k.getProtocol()) !== -1 && h.test(k.getDomain())
                    }

                    j.setRegex = function (k) {
                        h = k
                    };
                    f.exports = j
                }), null);
                __d("sdk.Event", [], (function a(b, c, d, e, f, g) {
                    __p && __p();
                    var h = {
                        SUBSCRIBE: "event.subscribe", UNSUBSCRIBE: "event.unsubscribe", subscribers: function i() {
                            if (!this._subscribersMap) this._subscribersMap = {};
                            return this._subscribersMap
                        }, subscribe: function i(j, k) {
                            var l = this.subscribers();
                            if (!l[j]) l[j] = [k]; else if (ES(l[j], "indexOf", true, k) == -1) l[j].push(k);
                            if (j != this.SUBSCRIBE && j != this.UNSUBSCRIBE) this.fire(this.SUBSCRIBE, j, l[j])
                        }, unsubscribe: function i(j, k) {
                            var l = this.subscribers()[j];
                            if (l) ES(l, "forEach", true, function (m, n) {
                                if (m == k) l.splice(n, 1)
                            });
                            if (j != this.SUBSCRIBE && j != this.UNSUBSCRIBE) this.fire(this.UNSUBSCRIBE, j, l)
                        }, monitor: function i(j, k) {
                            if (!k()) {
                                var l = this, m = function m() {
                                    if (k.apply(k, arguments)) l.unsubscribe(j, m)
                                };
                                this.subscribe(j, m)
                            }
                        }, clear: function i(j) {
                            delete this.subscribers()[j]
                        }, fire: function i(j) {
                            var k = Array.prototype.slice.call(arguments, 1), l = this.subscribers()[j];
                            if (l) ES(l, "forEach", true, function (m) {
                                if (m) m.apply(this, k)
                            })
                        }
                    };
                    f.exports = h
                }), null);
                __d("JSONRPC", ["Log"], (function a(b, c, d, e, f, g, h) {
                    __p && __p();

                    function i(j) {
                        "use strict";
                        this.$JSONRPC1 = 0;
                        this.$JSONRPC2 = {};
                        this.remote = ES(function (k) {
                            this.$JSONRPC3 = k;
                            return this.remote
                        }, "bind", true, this);
                        this.local = {};
                        this.$JSONRPC4 = j
                    }

                    i.prototype.stub = function (j) {
                        "use strict";
                        __p && __p();
                        this.remote[j] = ES(function () {
                            var k = {jsonrpc: "2.0", method: j};
                            for (var l = arguments.length, m = Array(l), n = 0; n < l; n++) m[n] = arguments[n];
                            if (typeof m[m.length - 1] == "function") {
                                k.id = ++this.$JSONRPC1;
                                this.$JSONRPC2[k.id] = m.pop()
                            }
                            k.params = m;
                            this.$JSONRPC4(ES("JSON", "stringify", false, k), this.$JSONRPC3 || {method: j})
                        }, "bind", true, this)
                    };
                    i.prototype.read = function (j, k) {
                        "use strict";
                        __p && __p();
                        var l = ES("JSON", "parse", false, j), m = l.id;
                        if (!l.method) {
                            if (!this.$JSONRPC2[m]) {
                                h.warn("Could not find callback %s", m);
                                return
                            }
                            var n = this.$JSONRPC2[m];
                            delete this.$JSONRPC2[m];
                            delete l.id;
                            delete l.jsonrpc;
                            n(l);
                            return
                        }
                        var o = this, p = this.local[l.method], q;
                        if (m) q = function q(t, u) {
                            var v = {jsonrpc: "2.0", id: m};
                            v[t] = u;
                            setTimeout(function () {
                                o.$JSONRPC4(ES("JSON", "stringify", false, v), k)
                            }, 0)
                        }; else q = function q() {
                        };
                        if (!p) {
                            h.error('Method "%s" has not been defined', l.method);
                            q("error", {code: -32601, message: "Method not found", data: l.method});
                            return
                        }
                        l.params.push(ES(q, "bind", true, null, "result"));
                        l.params.push(ES(q, "bind", true, null, "error"));
                        try {
                            var r = p.apply(k || null, l.params);
                            if (typeof r !== "undefined") q("result", r)
                        } catch (s) {
                            h.error("Invokation of RPC method %s resulted in the error: %s", l.method, s.message);
                            q("error", {code: -32603, message: "Internal error", data: s.message})
                        }
                    };
                    f.exports = i
                }), null);
                __d("sdk.RPC", ["Assert", "JSONRPC", "Queue"], (function a(b, c, d, e, f, g, h, i, j) {
                    var k = new j(), l = new i(function (n) {
                        k.enqueue(n)
                    }), m = {
                        local: l.local,
                        remote: l.remote,
                        stub: ES(l.stub, "bind", true, l),
                        setInQueue: function n(o) {
                            h.isInstanceOf(j, o);
                            o.start(function (p) {
                                l.read(p)
                            })
                        },
                        getOutQueue: function n() {
                            return k
                        }
                    };
                    f.exports = m
                }), null);
                __d("hasNamePropertyBug", ["guid", "UserAgent_DEPRECATED"], (function a(b, c, d, e, f, g, h, i) {
                    __p && __p();
                    var j = i.ie() ? undefined : false;

                    function k() {
                        var m = document.createElement("form"), n = m.appendChild(document.createElement("input"));
                        n.name = h();
                        j = n !== m.elements[n.name];
                        m = n = null;
                        return j
                    }

                    function l() {
                        return typeof j === "undefined" ? k() : j
                    }

                    f.exports = l
                }), null);
                __d("isNumberLike", [], (function a(b, c, d, e, f, g) {
                    function h(i) {
                        return !isNaN(parseFloat(i)) && isFinite(i)
                    }

                    f.exports = h
                }), null);
                __d("sdk.createIframe", ["DOMEventListener", "getBlankIframeSrc", "guid", "hasNamePropertyBug", "isNumberLike"], (function a(b, c, d, e, f, g, h, i, j, k, l) {
                    __p && __p();

                    function m(n) {
                        __p && __p();
                        n = ES("Object", "assign", false, {}, n);
                        var o, p = n.name || j(), q = n.root, r = n.style || {border: "none"}, s = n.url, t = n.onload,
                            u = n.onerror;
                        if (k()) o = document.createElement('<iframe name="' + p + '"/>'); else {
                            o = document.createElement("iframe");
                            o.name = p
                        }
                        delete n.style;
                        delete n.name;
                        delete n.url;
                        delete n.root;
                        delete n.onload;
                        delete n.onerror;
                        var v = ES("Object", "assign", false, {
                            frameBorder: 0,
                            allowTransparency: true,
                            allowFullscreen: true,
                            scrolling: "no"
                        }, n);
                        if (v.width && l(v.width)) o.width = v.width + "px";
                        if (v.height && l(v.height)) o.height = v.height + "px";
                        delete v.height;
                        delete v.width;
                        for (var w in v) if (Object.prototype.hasOwnProperty.call(v, w)) o.setAttribute(w, v[w]);
                        ES("Object", "assign", false, o.style, r);
                        o.src = i();
                        q.appendChild(o);
                        if (t) var x = h.add(o, "load", function () {
                            x.remove();
                            t()
                        });
                        if (u) var y = h.add(o, "error", function () {
                            y.remove();
                            u()
                        });
                        o.src = s;
                        return o
                    }

                    f.exports = m
                }), null);
                __d("sdk.FeatureFunctor", ["invariant"], (function a(b, c, d, e, f, g, h) {
                    __p && __p();

                    function i(k, l, m) {
                        if (k.features && l in k.features) {
                            var n = k.features[l];
                            if (typeof n === "object" && typeof n.rate === "number") if (n.rate && Math.random() * 100 <= n.rate) return n.value || true; else return n.value ? null : false; else return n
                        }
                        return m
                    }

                    function j(k) {
                        return function (l, m) {
                            arguments.length >= 2 || h(0);
                            return i(k, l, m)
                        }
                    }

                    f.exports = {create: j}
                }), null);
                __d("sdk.feature", ["sdk.FeatureFunctor", "JSSDKConfig"], (function a(b, c, d, e, f, g, h, i) {
                    f.exports = h.create(i)
                }), null);
                __d("sdk.XD", ["sdk.Content", "sdk.Event", "Log", "QueryString", "Queue", "sdk.RPC", "sdk.Runtime", "sdk.Scribe", "sdk.URI", "UrlMap", "JSSDKXDConfig", "XDM", "isFacebookURI", "sdk.createIframe", "sdk.feature", "guid"], (function a(b, c, d, e, f, aa, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v) {
                    __p && __p();
                    var w = new k(), x = new k(), y = new k(), z, A, B = v(), C = q.useCdn ? "cdn" : "www",
                        D = u("use_bundle", false) ? q.XdBundleUrl : q.XdUrl, E = p.resolve(C, false) + D,
                        F = p.resolve(C, true) + D, G = function G() {
                            if ("origin" in location) if (location.origin && location.origin !== "null") return location.origin; else if (window !== window.parent) try {
                                var U = parent.location.origin;
                                if (U && U !== "null") return U
                            } catch (V) {
                            }
                            return location.protocol + "//" + location.host
                        }, H = v(), I = G(), J, K = false, L = "Facebook Cross Domain Communication Frame", M = {},
                        N = new k();
                    l.setInQueue(N);

                    function O(U) {
                        i.info("Remote XD can talk to facebook.com (%s)", U);
                        m.setEnvironment(U === "canvas" ? m.ENVIRONMENTS.CANVAS : m.ENVIRONMENTS.PAGETAB)
                    }

                    function P(U, V) {
                        __p && __p();
                        if (!V) {
                            i.error("No senderOrigin");
                            throw new Error()
                        }
                        var W = /^https?/.exec(V)[0];
                        switch (U.xd_action) {
                            case"proxy_ready":
                                var X, Y;
                                if (W == "https") {
                                    X = y;
                                    Y = A;
                                    m.setLoggedIntoFacebook(U.logged_in === "true")
                                } else {
                                    X = x;
                                    Y = z
                                }
                                if (U.registered) {
                                    O(U.registered);
                                    w = X.merge(w)
                                }
                                i.info("Proxy ready, starting queue %s containing %s messages", W + "ProxyQueue", X.getLength());
                                X.start(function (U) {
                                    J.send(typeof U === "string" ? U : j.encode(U), V, Y.contentWindow, H + "_" + W)
                                });
                                break;
                            case"plugin_ready":
                                i.info("Plugin %s ready, protocol: %s", U.name, W);
                                M[U.name] = {protocol: W};
                                if (k.exists(U.name)) {
                                    var Z = k.get(U.name);
                                    i.debug("Enqueuing %s messages for %s in %s", Z.getLength(), U.name, W + "ProxyQueue");
                                    (W == "https" ? y : x).merge(Z)
                                }
                                break
                        }
                        if (U.data) Q(U.data, V)
                    }

                    function Q(U, V) {
                        __p && __p();
                        if (V && V !== "native" && !s(new o(V))) return;
                        if (typeof U == "string") {
                            if (/^FB_RPC:/.test(U)) {
                                N.enqueue(U.substring(7));
                                return
                            }
                            if (U.substring(0, 1) == "{") try {
                                U = ES("JSON", "parse", false, U)
                            } catch (W) {
                                i.warn("Failed to decode %s as JSON", U);
                                return
                            } else U = j.decode(U)
                        }
                        if (!V) if (U.xd_sig == B) V = U.xd_origin;
                        if (U.xd_action) {
                            P(U, V);
                            return
                        }
                        if (U.access_token) m.setSecure(/^https/.test(I));
                        if (U.cb) {
                            var X = T._callbacks[U.cb];
                            if (!T._forever[U.cb]) delete T._callbacks[U.cb];
                            if (X) X(U)
                        }
                    }

                    function R(U, V) {
                        __p && __p();
                        if (U == "facebook") {
                            V.relation = "parent.parent";
                            w.enqueue(V)
                        } else {
                            V.relation = 'parent.frames["' + U + '"]';
                            var W = M[U];
                            if (W) {
                                i.debug("Enqueuing message for plugin %s in %s", U, W.protocol + "ProxyQueue");
                                (W.protocol == "https" ? y : x).enqueue(V)
                            } else {
                                i.debug("Buffering message for plugin %s", U);
                                k.get(U).enqueue(V)
                            }
                        }
                    }

                    l.getOutQueue().start(function (U) {
                        R("facebook", "FB_RPC:" + U)
                    });

                    function S(U) {
                        __p && __p();
                        if (K) return;
                        var V = g.appendHidden(document.createElement("div")), W = r.create({
                            blacklist: null,
                            root: V,
                            channel: H,
                            flashUrl: q.Flash.path,
                            whenReady: function X(Y) {
                                J = Y;
                                var Z = {channel: H, origin: I, transport: W, xd_name: U}, $ = "#" + j.encode(Z);
                                if (m.getSecure() !== true) z = t({
                                    url: E + $,
                                    name: "fb_xdm_frame_http",
                                    id: "fb_xdm_frame_http",
                                    root: V,
                                    "aria-hidden": true,
                                    title: L,
                                    tabindex: -1
                                });
                                A = t({
                                    url: F + $,
                                    name: "fb_xdm_frame_https",
                                    id: "fb_xdm_frame_https",
                                    root: V,
                                    "aria-hidden": true,
                                    title: L,
                                    tabindex: -1
                                })
                            },
                            onMessage: Q
                        });
                        if (!W) n.log("jssdk_error", {
                            appId: m.getClientID(),
                            error: "XD_TRANSPORT",
                            extra: {message: "Failed to create a valid transport"}
                        });
                        K = true
                    }

                    var T = {
                        rpc: l,
                        _callbacks: {},
                        _forever: {},
                        _channel: H,
                        _origin: I,
                        onMessage: Q,
                        recv: Q,
                        init: S,
                        sendToFacebook: R,
                        inform: function U(V, W, X, Y) {
                            R("facebook", {
                                method: V,
                                params: ES("JSON", "stringify", false, W || {}),
                                behavior: Y || "p",
                                relation: X
                            })
                        },
                        handler: function U(V, W, X, Y) {
                            var Z = "#" + j.encode({
                                cb: this.registerCallback(V, X, Y),
                                origin: I + "/" + H,
                                domain: location.hostname,
                                relation: W || "opener"
                            });
                            return (location.protocol == "https:" ? F : E) + Z
                        },
                        registerCallback: function U(V, W, X) {
                            X = X || v();
                            if (W) T._forever[X] = true;
                            T._callbacks[X] = V;
                            return X
                        },
                        getXDArbiterURL: function U(V) {
                            return V ? F : E
                        }
                    };
                    h.subscribe("init:post", function (U) {
                        S(U.xdProxyName);
                        var V = u("xd_timeout", false);
                        if (V) setTimeout(function () {
                            var W = A && !!z == x.isStarted() && !!A == y.isStarted();
                            if (!W) n.log("jssdk_error", {
                                appId: m.getClientID(),
                                error: "XD_INITIALIZATION",
                                extra: {message: "Failed to initialize in " + V + "ms"}
                            })
                        }, V)
                    });
                    f.exports = T
                }), null);
                __d("sdk.getContextType", ["sdk.Runtime", "sdk.UA"], (function a(b, c, d, e, f, g, h, i) {
                    function j() {
                        if (i.nativeApp()) return 3;
                        if (i.mobile()) return 2;
                        if (h.isEnvironment(h.ENVIRONMENTS.CANVAS)) return 5;
                        return 1
                    }

                    f.exports = j
                }), null);
                __d("sdk.Auth", ["sdk.Cookie", "sdk.createIframe", "DOMWrapper", "sdk.feature", "sdk.getContextType", "guid", "sdk.Impressions", "Log", "ObservableMixin", "sdk.Runtime", "sdk.Scribe", "sdk.SignedRequest", "UrlMap", "sdk.URI", "sdk.XD"], (function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v) {
                    __p && __p();
                    var w = "fblo_", x = 365 * 24 * 60 * 60 * 1e3, y, z, A = new p();

                    function B(J, K) {
                        __p && __p();
                        var L = q.getUserID(), M = "";
                        if (J) if (J.userID) M = J.userID; else if (J.signedRequest) {
                            var N = s.parse(J.signedRequest);
                            if (N && N.user_id) M = N.user_id
                        }
                        var O = q.getLoginStatus(),
                            P = O === "unknown" && J || q.getUseCookie() && q.getCookieUserID() !== M, Q = L && !J,
                            R = J && L && L != M, S = J != y, T = K != (O || "unknown");
                        q.setLoginStatus(K);
                        q.setAccessToken(J && J.accessToken || null);
                        q.setUserID(M);
                        y = J;
                        var U = {authResponse: J, status: K};
                        if (Q || R) A.inform("logout", U);
                        if (P || R) A.inform("login", U);
                        if (S) A.inform("authresponse.change", U);
                        if (T) A.inform("status.change", U);
                        return U
                    }

                    function C() {
                        return y
                    }

                    function D(J, K, L) {
                        __p && __p();
                        return function (M) {
                            __p && __p();
                            var N;
                            if (M && M.access_token) {
                                var O = s.parse(M.signed_request);
                                K = {
                                    accessToken: M.access_token,
                                    userID: O.user_id,
                                    expiresIn: parseInt(M.expires_in, 10),
                                    signedRequest: M.signed_request
                                };
                                if (M.granted_scopes) K.grantedScopes = M.granted_scopes;
                                if (q.getUseCookie()) {
                                    var P = K.expiresIn === 0 ? 0 : ES("Date", "now", false) + K.expiresIn * 1e3,
                                        Q = h.getDomain();
                                    if (!Q && M.base_domain) h.setDomain("." + M.base_domain);
                                    h.setSignedRequestCookie(M.signed_request, P);
                                    E()
                                }
                                N = "connected";
                                B(K, N)
                            } else if (L === "logout" || L === "login_status") {
                                if (M.error && M.error === "not_authorized") N = "not_authorized"; else N = "unknown";
                                B(null, N);
                                if (q.getUseCookie()) h.clearSignedRequestCookie();
                                if (L === "logout") {
                                    F();
                                    r.log("jssdk_error", {
                                        appId: q.getClientID(),
                                        error: "PLATFORM_AUTH_LOGOUT",
                                        extra: {args: {fblo: true}}
                                    })
                                }
                            }
                            if (M && M.https == 1) q.setSecure(true);
                            if (J) J({authResponse: K, status: q.getLoginStatus()});
                            return K
                        }
                    }

                    function E() {
                        if (q.getUseCookie()) h.setRaw(w, "", 0)
                    }

                    function F() {
                        if (q.getUseCookie()) h.setRaw(w, "y", ES("Date", "now", false) + x)
                    }

                    function G(J) {
                        __p && __p();
                        var K, L = ES("Date", "now", false);
                        if (z) {
                            clearTimeout(z);
                            z = null
                        }
                        var M = h.getRaw(w) === "y";
                        if (k("getloginstatus_tracking", true)) r.log("jssdk_error", {
                            appId: q.getClientID(),
                            error: "PLATFORM_AUTH_GETLOGINSTATUS",
                            extra: {args: {fblo: M}}
                        });
                        if (M) {
                            var N = "unknown";
                            B(null, N);
                            if (J) J({authResponse: null, status: N});
                            return
                        }
                        var O = D(J, y, "login_status"),
                            P = new u(t.resolve("www", true) + "/connect/ping").setQueryData({
                                client_id: q.getClientID(),
                                response_type: "token,signed_request,code",
                                domain: location.hostname,
                                origin: l(),
                                redirect_uri: v.handler(function (Q) {
                                    if (k("e2e_ping_tracking", true)) {
                                        var R = {init: L, close: ES("Date", "now", false), method: "ping"};
                                        o.debug("e2e: %s", ES("JSON", "stringify", false, R));
                                        n.log(114, {payload: R})
                                    }
                                    K.parentNode.removeChild(K);
                                    if (O(Q)) z = setTimeout(function () {
                                        G(function () {
                                        })
                                    }, 12e5)
                                }, "parent"),
                                sdk: "joey",
                                kid_directed_site: q.getKidDirectedSite()
                            });
                        K = i({root: j.getRoot(), name: m(), url: P.toString(), style: {display: "none"}})
                    }

                    var H;

                    function I(J, K) {
                        __p && __p();
                        if (!q.getClientID()) {
                            o.warn("FB.getLoginStatus() called before calling FB.init().");
                            return
                        }
                        if (J) if (!K && H == "loaded") {
                            J({status: q.getLoginStatus(), authResponse: C()});
                            return
                        } else A.subscribe("FB.loginStatus", J);
                        if (!K && H == "loading") return;
                        H = "loading";
                        var L = function L(M) {
                            H = "loaded";
                            A.inform("FB.loginStatus", M);
                            A.clearSubscribers("FB.loginStatus")
                        };
                        G(L)
                    }

                    ES("Object", "assign", false, A, {
                        removeLogoutState: E,
                        getLoginStatus: I,
                        fetchLoginStatus: G,
                        setAuthResponse: B,
                        getAuthResponse: C,
                        parseSignedRequest: s.parse,
                        xdResponseWrapper: D
                    });
                    f.exports = A
                }), null);
                __d("sdk.DOM", ["Assert", "sdk.UA", "sdk.domReady"], (function a(b, c, d, e, f, g, h, i, j) {
                    __p && __p();
                    var k = {};

                    function l(z, A) {
                        var B = z.getAttribute(A) || z.getAttribute(A.replace(/_/g, "-")) || z.getAttribute(A.replace(/-/g, "_")) || z.getAttribute(A.replace(/-/g, "")) || z.getAttribute(A.replace(/_/g, "")) || z.getAttribute("data-" + A) || z.getAttribute("data-" + A.replace(/_/g, "-")) || z.getAttribute("data-" + A.replace(/-/g, "_")) || z.getAttribute("data-" + A.replace(/-/g, "")) || z.getAttribute("data-" + A.replace(/_/g, ""));
                        return B ? String(B) : null
                    }

                    function m(z, A) {
                        var B = l(z, A);
                        return B ? /^(true|1|yes|on)$/.test(B) : null
                    }

                    function n(z, A) {
                        h.isTruthy(z, "element not specified");
                        h.isString(A);
                        try {
                            return String(z[A])
                        } catch (B) {
                            throw new Error("Could not read property " + A + " : " + B.message)
                        }
                    }

                    function o(z, A) {
                        h.isTruthy(z, "element not specified");
                        h.isString(A);
                        try {
                            z.innerHTML = A
                        } catch (B) {
                            throw new Error("Could not set innerHTML : " + B.message)
                        }
                    }

                    function p(z, A) {
                        h.isTruthy(z, "element not specified");
                        h.isString(A);
                        var B = " " + n(z, "className") + " ";
                        return ES(B, "indexOf", true, " " + A + " ") >= 0
                    }

                    function q(z, A) {
                        h.isTruthy(z, "element not specified");
                        h.isString(A);
                        if (!p(z, A)) z.className = n(z, "className") + " " + A
                    }

                    function r(z, A) {
                        h.isTruthy(z, "element not specified");
                        h.isString(A);
                        var B = new RegExp("\\s*" + A, "g");
                        z.className = ES(n(z, "className").replace(B, ""), "trim", true)
                    }

                    function s(z, A, B) {
                        __p && __p();
                        h.isString(z);
                        A = A || document.body;
                        B = B || "*";
                        if (A.querySelectorAll) return ES("Array", "from", false, A.querySelectorAll(B + "." + z));
                        var C = A.getElementsByTagName(B), D = [];
                        for (var E = 0, F = C.length; E < F; E++) if (p(C[E], z)) D[D.length] = C[E];
                        return D
                    }

                    function t(z, A) {
                        h.isTruthy(z, "element not specified");
                        h.isString(A);
                        A = A.replace(/-(\w)/g, function (D, E) {
                            return E.toUpperCase()
                        });
                        var B = z.currentStyle || document.defaultView.getComputedStyle(z, null), C = B[A];
                        if (/backgroundPosition?/.test(A) && /top|left/.test(C)) C = "0%";
                        return C
                    }

                    function u(z, A, B) {
                        h.isTruthy(z, "element not specified");
                        h.isString(A);
                        A = A.replace(/-(\w)/g, function (C, D) {
                            return D.toUpperCase()
                        });
                        z.style[A] = B
                    }

                    function v(z, A) {
                        __p && __p();
                        var B = true;
                        for (var C = 0, D; D = A[C++];) if (!(D in k)) {
                            B = false;
                            k[D] = true
                        }
                        if (B) return;
                        if (i.ie() < 11) try {
                            document.createStyleSheet().cssText = z
                        } catch (E) {
                            if (document.styleSheets[0]) document.styleSheets[0].cssText += z
                        } else {
                            var F = document.createElement("style");
                            F.type = "text/css";
                            F.textContent = z;
                            document.getElementsByTagName("head")[0].appendChild(F)
                        }
                    }

                    function w() {
                        var z = document.documentElement && document.compatMode == "CSS1Compat" ? document.documentElement : document.body;
                        return {
                            scrollTop: z.scrollTop || document.body.scrollTop,
                            scrollLeft: z.scrollLeft || document.body.scrollLeft,
                            width: window.innerWidth ? window.innerWidth : z.clientWidth,
                            height: window.innerHeight ? window.innerHeight : z.clientHeight
                        }
                    }

                    function x(z) {
                        h.isTruthy(z, "element not specified");
                        var A = 0, B = 0;
                        do {
                            A += z.offsetLeft;
                            B += z.offsetTop
                        } while (z = z.offsetParent);
                        return {x: A, y: B}
                    }

                    var y = {
                        containsCss: p,
                        addCss: q,
                        removeCss: r,
                        getByClass: s,
                        getStyle: t,
                        setStyle: u,
                        getAttr: l,
                        getBoolAttr: m,
                        getProp: n,
                        html: o,
                        addCssRules: v,
                        getViewportInfo: w,
                        getPosition: x,
                        ready: j
                    };
                    f.exports = y
                }), null);
                __d("normalizeError", ["sdk.UA"], (function a(b, c, d, e, f, g, h) {
                    __p && __p();

                    function i(j) {
                        __p && __p();
                        var k = {
                            line: j.lineNumber || j.line,
                            message: j.message,
                            name: j.name,
                            script: j.fileName || j.sourceURL || j.script,
                            stack: j.stackTrace || j.stack
                        };
                        k._originalError = j;
                        var l = /([\w:\.\/]+\.js):(\d+)/.exec(j.stack);
                        if (h.chrome() && l) {
                            k.script = l[1];
                            k.line = parseInt(l[2], 10)
                        }
                        for (var m in k) k[m] == null && delete k[m];
                        return k
                    }

                    f.exports = i
                }), null);
                __d("sdk.ErrorHandler", ["ManagedError", "normalizeError", "wrapFunction"], (function a(b, c, d, e, f, g, h, i, j) {
                    __p && __p();

                    function k(l, m) {
                        __p && __p();
                        var n = "";

                        function o(t) {
                            var u = t._originalError;
                            delete t._originalError;
                            m(t);
                            throw u
                        }

                        function p(t, u) {
                            __p && __p();
                            return function () {
                                __p && __p();
                                if (!l) return t.apply(this, arguments);
                                try {
                                    n = u;
                                    return t.apply(this, arguments)
                                } catch (v) {
                                    if (v instanceof h) throw v;
                                    var w = i(v);
                                    w.entry = u;
                                    var x = ES(Array.prototype.slice.call(arguments), "map", true, function (y) {
                                        var z = Object.prototype.toString.call(y);
                                        return /^\[object (String|Number|Boolean|Object|Date)\]$/.test(z) ? y : y.toString()
                                    });
                                    w.args = ES("JSON", "stringify", false, x).substring(0, 200);
                                    o(w)
                                } finally {
                                    n = ""
                                }
                            }
                        }

                        function q(t) {
                            if (!t.__wrapper) t.__wrapper = function () {
                                try {
                                    return t.apply(this, arguments)
                                } catch (u) {
                                    window.setTimeout(function () {
                                        throw u
                                    }, 0);
                                    return false
                                }
                            };
                            return t.__wrapper
                        }

                        function r(t) {
                            try {
                                return t && t.callee && t.callee.caller ? t.callee.caller.name : ""
                            } catch (u) {
                                return ""
                            }
                        }

                        function s(t, u) {
                            return function (v, w) {
                                var x = u + ":" + (n || "[global]") + ":" + (v.name || "[anonymous]" + r(arguments));
                                return t(j(v, "entry", x), w)
                            }
                        }

                        if (l) {
                            setTimeout = s(setTimeout, "setTimeout");
                            setInterval = s(setInterval, "setInterval");
                            j.setWrapper(p, "entry")
                        }
                        return {guard: p, unguard: q}
                    }

                    f.exports = {create: k}
                }), null);
                __d("sdk.ErrorHandling", ["sdk.ErrorHandler", "sdk.Runtime", "sdk.Scribe", "sdk.feature"], (function a(b, c, d, e, f, g, h, i, j, k) {
                    var l = k("error_handling", false);
                    f.exports = h.create(l, function (m) {
                        j.log("jssdk_error", {appId: i.getClientID(), error: m.name || m.message, extra: m})
                    })
                }), null);
                __d("sdk.Insights", ["sdk.Impressions"], (function a(b, c, d, e, f, g, h) {
                    var i = {
                        TYPE: {NOTICE: "notice", WARNING: "warn", ERROR: "error"},
                        CATEGORY: {DEPRECATED: "deprecated", APIERROR: "apierror"},
                        log: function j(k, l, m) {
                            var n = {source: "jssdk", type: k, category: l, payload: m};
                            h.log(113, n)
                        },
                        impression: h.impression
                    };
                    f.exports = i
                }), null);
                __d("FB", ["sdk.Auth", "JSSDKCssConfig", "dotAccess", "sdk.domReady", "sdk.DOM", "sdk.ErrorHandling", "sdk.Content", "DOMWrapper", "GlobalCallback", "sdk.Insights", "Log", "sdk.Runtime", "sdk.Scribe", "JSSDKConfig"], (function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u) {
                    __p && __p();
                    var v = void 0, w = void 0, x = j(u, "api.mode"), y = {};
                    v = window.FB = {};
                    var z = {};
                    r.level = 0;
                    p.setPrefix("FB.__globalCallbacks");
                    var A = document.createElement("div");
                    o.setRoot(A);
                    k(function () {
                        r.info("domReady");
                        n.appendHidden(A);
                        if (i.rules) l.addCssRules(i.rules, i.components)
                    });
                    s.subscribe("AccessToken.change", function (D) {
                        if (!D && s.getLoginStatus() === "connected") h.getLoginStatus(null, true)
                    });
                    if (j(u, "api.whitelist.length")) {
                        w = {};
                        ES(u.api.whitelist, "forEach", true, function (D) {
                            w[D] = 1
                        })
                    }

                    function B(D, E, F, G) {
                        __p && __p();
                        var H;
                        if (/^_/.test(F)) H = "hide"; else if (w && !w[E]) H = x;
                        switch (H) {
                            case"hide":
                                return;
                            case"stub":
                                return function () {
                                    r.warn("The method FB.%s has been removed from the JS SDK.", E)
                                };
                            default:
                                return m.guard(function () {
                                    __p && __p();
                                    if (H === "warn") {
                                        r.warn("The method FB.%s is not officially supported by Facebook and access to it will soon be removed.", E);
                                        if (!Object.prototype.hasOwnProperty.call(y, E)) {
                                            q.log(q.TYPE.WARNING, q.CATEGORY.DEPRECATED, "FB." + E);
                                            t.log("jssdk_error", {
                                                appId: s.getClientID(),
                                                error: "Private method used",
                                                extra: {args: E}
                                            });
                                            y[E] = true
                                        }
                                    }

                                    function I(O) {
                                        if (ES("Array", "isArray", false, O)) return ES(O, "map", true, I);
                                        if (O && typeof O === "object" && O.__wrapped) return O.__wrapped;
                                        return typeof O === "function" && /^function/.test(O.toString()) ? m.unguard(O) : O
                                    }

                                    var J = ES(Array.prototype.slice.call(arguments), "map", true, I),
                                        K = D.apply(G, J), L, M = true;
                                    if (K && typeof K === "object") {
                                        L = ES("Object", "create", false, K);
                                        L.__wrapped = K;
                                        for (var F in K) {
                                            var N = K[F];
                                            if (typeof N !== "function" || F === "constructor") continue;
                                            M = false;
                                            L[F] = B(N, E + ":" + F, F, K)
                                        }
                                    }
                                    if (!M) return L;
                                    return M ? K : L
                                }, E)
                        }
                    }

                    function C(D, E) {
                        __p && __p();
                        var F = D ? j(v, D, true) : v;
                        ES(ES("Object", "keys", false, E), "forEach", true, function (G) {
                            __p && __p();
                            var H = E[G];
                            if (typeof H === "function") {
                                var I = (D ? D + "." : "") + G, J = B(H, I, G, E);
                                if (J) F[G] = J
                            } else if (typeof H === "object" || typeof H === "number") {
                                I = (D ? D + "." : "") + G;
                                if (w && w[I]) F[G] = H
                            }
                        })
                    }

                    s.setSecure(function () {
                        var D = /iframe_canvas|app_runner/.test(window.name), E = /dialog/.test(window.name);
                        if (location.protocol == "https:" && (window == top || !(D || E))) return true;
                        if (/_fb_https?/.test(window.name)) return ES(window.name, "indexOf", true, "_fb_https") != -1
                    }());
                    ES("Object", "assign", false, z, {provide: C});
                    f.exports = z
                }), null);
                __d("ArgumentError", ["ManagedError"], (function a(b, c, d, e, f, g, h) {
                    function i(j, k) {
                        h.prototype.constructor.apply(this, arguments)
                    }

                    i.prototype = new h();
                    i.prototype.constructor = i;
                    f.exports = i
                }), null);
                __d("flattenObject", [], (function a(b, c, d, e, f, g) {
                    __p && __p();

                    function h(i) {
                        __p && __p();
                        var j = {};
                        for (var k in i) if (Object.prototype.hasOwnProperty.call(i, k)) {
                            var l = i[k];
                            if (null === l || undefined === l)else
                            if (typeof l == "string") j[k] = l; else j[k] = ES("JSON", "stringify", false, l)
                        }
                        return j
                    }

                    f.exports = h
                }), null);
                __d("ApiClientUtils", ["ArgumentError", "Assert", "Log", "sdk.URI", "flattenObject", "sprintf"], (function a(b, c, d, e, f, g, h, i, j, k, l, m) {
                    __p && __p();
                    var n = {get: true, post: true, "delete": true, put: true};

                    function o(p) {
                        __p && __p();
                        var q = p.shift();
                        i.isString(q, "Invalid path");
                        if (!/^https?/.test(q) && q.charAt(0) !== "/") q = "/" + q;
                        var r, s = {};
                        try {
                            r = new k(q)
                        } catch (t) {
                            throw new h(t.message, t)
                        }
                        ES(p, "forEach", true, function (x) {
                            return s[typeof x] = x
                        });
                        var u = (s.string || "get").toLowerCase();
                        i.isTrue(Object.prototype.hasOwnProperty.call(n, u), m("Invalid method passed to ApiClient: %s", u));
                        var v = s["function"];
                        if (!v) j.warn("No callback passed to the ApiClient");
                        if (s.object) r.addQueryData(l(s.object));
                        var w = r.getQueryData();
                        w.method = u;
                        return {uri: r, callback: v, params: w}
                    }

                    f.exports = {parseCallDataFromArgs: o}
                }), null);
                __d("errorCode", [], (function a(b, c, d, e, f, g) {
                    "use strict";

                    function h(i) {
                        throw new Error('errorCode("' + i + '"): This should not happen. Oh noes!')
                    }

                    f.exports = h
                }), null);
                __d("sdk.safelyParseResponse", ["errorCode"], (function a(b, c, d, e, f, g, h) {
                    "use strict";
                    __p && __p();
                    var i = function i(l, m) {
                        return k
                    };

                    function j(l) {
                        try {
                            return l === null ? k : ES("JSON", "parse", false, l)
                        } catch (m) {
                            return i(m, l)
                        }
                    }

                    var k = {
                        error: {
                            code: 1,
                            error_subcode: 1357046,
                            message: "Received Invalid JSON reply.",
                            type: "http"
                        }
                    };
                    j.ERROR = k;
                    j.setErrorHandler = function (l) {
                        i = l
                    };
                    f.exports = j
                }), null);
                __d("ApiBatcher", ["ApiClientUtils", "QueryString", "invariant", "sdk.safelyParseResponse"], (function a(b, c, d, e, f, g, h, i, j, k) {
                    "use strict";
                    __p && __p();
                    var l = 50, m = 105440539523;

                    function n(o, p) {
                        this.$ApiBatcher1 = [];
                        this.$ApiBatcher2 = [];
                        this.$ApiBatcher4 = null;
                        this.executeRequest = o;
                        this.$ApiBatcher3 = p
                    }

                    n.prototype.scheduleBatchCall = function () {
                        __p && __p();
                        for (var o = arguments.length, p = Array(o), q = 0; q < o; q++) p[q] = arguments[q];
                        var r = n.prepareBatchParams(p), s = r.body, t = r.callback, u = r.method, v = r.relative_url,
                            w = {method: u, relative_url: v};
                        if (s) w.body = s;
                        this.$ApiBatcher1.push(w);
                        this.$ApiBatcher2.push(t);
                        if (this.$ApiBatcher1.length == l) {
                            if (this.$ApiBatcher4) clearTimeout(this.$ApiBatcher4);
                            this.$ApiBatcher5()
                        } else if (!this.$ApiBatcher4) this.$ApiBatcher4 = setTimeout(ES(function () {
                            this.$ApiBatcher5()
                        }, "bind", true, this), 0)
                    };
                    n.prepareBatchParams = function (o) {
                        var p = h.parseCallDataFromArgs(o), q = p.uri, r = p.callback, s = p.params.method, t,
                            u = q.removeQueryData("method").toString();
                        if (s.toLowerCase() == "post") {
                            t = i.encode(q.getQueryData());
                            u = q.setQueryData({}).toString()
                        }
                        return {body: t, callback: r, method: s, relative_url: u}
                    };
                    n.prototype.$ApiBatcher5 = function () {
                        __p && __p();
                        this.$ApiBatcher1.length > 0 || j(0);
                        this.$ApiBatcher1.length === this.$ApiBatcher2.length || j(0);
                        var o = this.$ApiBatcher1, p = this.$ApiBatcher2;
                        this.$ApiBatcher1 = [];
                        this.$ApiBatcher2 = [];
                        this.$ApiBatcher4 = null;
                        if (o.length === 1) {
                            var q = o[0], r = p[0], s = q.body ? i.decode(q.body) : null;
                            this.executeRequest(q.relative_url, q.method, s, r);
                            return
                        }
                        this.executeRequest("/", "POST", {
                            batch: o,
                            include_headers: false,
                            batch_app_id: this.$ApiBatcher3 || m
                        }, function (t) {
                            if (ES("Array", "isArray", false, t)) ES(t, "forEach", true, function (u, v) {
                                p[v](k(u && u.body))
                            }); else ES(p, "forEach", true, function (r) {
                                return r({error: {message: "Fatal: batch call failed."}})
                            })
                        })
                    };
                    f.exports = n
                }), null);
                __d("RequestConstants", ["errorCode"], (function a(b, c, d, e, f, g, h) {
                    var i = {
                        code: 1,
                        error_subcode: 1357045,
                        message: "unknown error (empty response)",
                        type: "http",
                        status: 0
                    };
                    f.exports = {PARSE_ERROR_TEMPLATE: i}
                }), null);
                __d("CORSRequest", ["wrapFunction", "QueryString", "RequestConstants", "sdk.safelyParseResponse"], (function a(b, c, d, e, f, g, h, i, j, k) {
                    __p && __p();

                    function l(o, p) {
                        __p && __p();
                        if (!self.XMLHttpRequest) return null;
                        var q = new XMLHttpRequest(), r = function r() {
                        };
                        if ("withCredentials" in q) {
                            q.open(o, p, true);
                            q.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
                        } else if (self.XDomainRequest) {
                            q = new XDomainRequest();
                            try {
                                q.open(o, p);
                                q.onprogress = q.ontimeout = r
                            } catch (s) {
                                return null
                            }
                        } else return null;
                        var t = {
                            send: function w(x) {
                                q.send(x)
                            }
                        }, u = h(function () {
                            u = r;
                            if ("onload" in t) t.onload(q)
                        }, "entry", "XMLHttpRequest:load"), v = h(function () {
                            v = r;
                            if ("onerror" in t) t.onerror(q)
                        }, "entry", "XMLHttpRequest:error");
                        q.onload = function () {
                            u()
                        };
                        q.onerror = function () {
                            v()
                        };
                        q.onreadystatechange = function () {
                            if (q.readyState == 4) if (q.status == 200) u(); else v()
                        };
                        return t
                    }

                    function m(o, p, q, r) {
                        __p && __p();
                        q.suppress_http_code = 1;
                        var s = i.encode(q);
                        if (p != "post") {
                            o = i.appendToUrl(o, s);
                            s = ""
                        }
                        var t = l(p, o);
                        if (!t) return false;
                        t.onload = function (u) {
                            r(k(u.responseText))
                        };
                        t.onerror = function (u) {
                            if (u.responseText) r(k(u.responseText)); else r({error: babelHelpers["extends"]({}, j.PARSE_ERROR_TEMPLATE, {status: u.status})})
                        };
                        t.send(s);
                        return true
                    }

                    var n = {execute: m};
                    f.exports = n
                }), null);
                __d("GraphBatchConstants", [], (function a(b, c, d, e, f, g) {
                    f.exports = ES("Object", "freeze", false, {FLUSH_DELIMITER: "\r\n"})
                }), null);
                __d("ChunkedRequest", ["GraphBatchConstants", "QueryString", "RequestConstants", "sdk.safelyParseResponse", "wrapFunction"], (function a(b, c, d, e, f, g, h, i, j, k, l) {
                    __p && __p();
                    var m = "{}";

                    function n() {
                        var r = arguments.length <= 0 || arguments[0] === undefined ? h.FLUSH_DELIMITER : arguments[0];
                        "use strict";
                        this.offset = 0;
                        this.delimiter = h.FLUSH_DELIMITER;
                        this.delimiter = r
                    }

                    n.prototype.parse = function (r) {
                        __p && __p();
                        var s = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
                        "use strict";
                        var t = [], u = r.substring(this.offset), v = 0, w = ES(u, "indexOf", true, this.delimiter, v);
                        if (w === 0) {
                            v = this.delimiter.length;
                            w = ES(u, "indexOf", true, this.delimiter, v)
                        }
                        while (w > -1) {
                            var x = u.substring(v, w);
                            if (x) t.push(x);
                            v = w + this.delimiter.length;
                            w = ES(u, "indexOf", true, this.delimiter, v)
                        }
                        this.offset += v;
                        if (s && u && w === -1) {
                            var y = r.substring(this.offset);
                            t.push(y)
                        }
                        return t
                    };

                    function o(r, s) {
                        __p && __p();
                        if (!self.XMLHttpRequest) return null;
                        var t = new XMLHttpRequest();
                        if (!("withCredentials" in t)) return null;
                        t.open(r, s, true);
                        t.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                        var u = new n(), v = {
                            send: function y(z) {
                                t.send(z)
                            }
                        }, w = l(function (y, z) {
                            if (v.onchunk) {
                                var A = u.parse(y);
                                ES(A, "forEach", true, function (B) {
                                    return v.onchunk(B, z)
                                });
                                if (z) v.onchunk(m, z)
                            }
                        }, "entry", "XMLHttpRequest:onchunk"), x = l(function () {
                            if (v.onerror) v.onerror(t)
                        }, "entry", "XMLHttpRequest:error");
                        t.onerror = x;
                        t.onreadystatechange = function () {
                            if (t.readyState == 4) if (t.status === 200) w(t.responseText, true); else x(); else if (t.readyState == 3) w(t.responseText, false)
                        };
                        return v
                    }

                    function p(r, s, t, u) {
                        __p && __p();
                        t.suppress_http_code = 1;
                        var v = i.encode(t);
                        if (s != "post") {
                            r = i.appendToUrl(r, v);
                            v = ""
                        }
                        var w = o(s, r);
                        if (!w) return false;
                        w.onchunk = function (x, y) {
                            u(k(x), y)
                        };
                        w.onerror = function (x) {
                            if (x.responseText) u(k(x.responseText)); else u({error: babelHelpers["extends"]({}, j.PARSE_ERROR_TEMPLATE, {status: x.status})})
                        };
                        w.send(v);
                        return true
                    }

                    var q = {execute: p};
                    f.exports = q
                }), null);
                __d("FlashRequest", ["DOMWrapper", "Flash", "GlobalCallback", "QueryString", "Queue"], (function a(b, c, d, e, f, g, h, i, j, k, l) {
                    __p && __p();
                    var m, n = {}, o, p;

                    function q() {
                        __p && __p();
                        if (!o) throw new Error("swfUrl has not been set");
                        var t = j.create(function () {
                            m.start(function (v) {
                                var w = p.execute(v.method, v.url, v.body);
                                if (!w) throw new Error("Could create request");
                                n[w] = v.callback
                            })
                        }), u = j.create(function (v, w, x) {
                            var y;
                            try {
                                y = ES("JSON", "parse", false, decodeURIComponent(x))
                            } catch (z) {
                                y = {error: {type: "SyntaxError", message: z.message, status: w, raw: x}}
                            }
                            n[v](y);
                            delete n[v]
                        });
                        p = i.embed(o, h.getRoot(), null, {log: false, initCallback: t, requestCallback: u})
                    }

                    function r(t, u, v, w) {
                        __p && __p();
                        v.suppress_http_code = 1;
                        if (!v.method) v.method = u;
                        var x = k.encode(v);
                        if (u === "get" && t.length + x.length < 2e3) {
                            t = k.appendToUrl(t, x);
                            x = ""
                        } else u = "post";
                        if (!m) {
                            if (!i.isAvailable()) return false;
                            m = new l();
                            q()
                        }
                        m.enqueue({method: u, url: t, body: x, callback: w});
                        return true
                    }

                    var s = {
                        setSwfUrl: function t(u) {
                            o = u
                        }, execute: r
                    };
                    f.exports = s
                }), null);
                __d("JSONPRequest", ["DOMWrapper", "GlobalCallback", "QueryString"], (function a(b, c, d, e, f, g, h, i, j) {
                    __p && __p();
                    var k = 2e3, l = false;

                    function m(p, q, r, s) {
                        __p && __p();
                        var t = document.createElement("script"), u = function w(x) {
                            u = function w() {
                            };
                            i.remove(r.callback);
                            s(x);
                            t.parentNode.removeChild(t)
                        };
                        r.callback = i.create(u);
                        if (!r.method) r.method = q;
                        p = j.appendToUrl(p, r);
                        if (!l && p.length > k) {
                            i.remove(r.callback);
                            return false
                        }
                        t.onerror = function () {
                            u({error: {type: "http", message: "unknown error"}})
                        };
                        var v = function v() {
                            setTimeout(function () {
                                u({error: {type: "http", message: "unknown error"}})
                            }, 0)
                        };
                        if (t.addEventListener) t.addEventListener("load", v, false); else t.onreadystatechange = function () {
                            if (/loaded|complete/.test(this.readyState)) v()
                        };
                        t.src = p;
                        h.getRoot().appendChild(t);
                        return true
                    }

                    function n() {
                        l = true
                    }

                    var o = {execute: m, ignoreMaxQuerystringLength: n, MAX_QUERYSTRING_LENGTH: k};
                    f.exports = o
                }), null);
                __d("ApiClient", ["ApiBatcher", "ApiClientUtils", "Assert", "ChunkedRequest", "CORSRequest", "FlashRequest", "flattenObject", "JSONPRequest", "Log", "ObservableMixin", "QueryString", "UrlMap", "ApiClientConfig"], (function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t) {
                    __p && __p();
                    var u, v, w, x = o.MAX_QUERYSTRING_LENGTH, y = {
                        fql_query: true,
                        fql_multiquery: true,
                        friends_get: true,
                        notifications_get: true,
                        stream_get: true,
                        users_getinfo: true
                    }, z = ["cors", "jsonp", "flash"], A = 0, B = [], C = 0, D = 0, E;

                    function F(M, N, O, P) {
                        __p && __p();
                        var Q = C !== 0 && A >= C;
                        if (Q) {
                            B.push(function () {
                                return F(M, N, O, P)
                            });
                            K.inform("request.queued", M, N, O);
                            return
                        }
                        A++;
                        if (w) O = ES("Object", "assign", false, {}, w, O);
                        O.pretty = O.pretty || 0;
                        O = n(O);
                        var R = {jsonp: o, cors: l, flash: m, chunked: k}, S = {}, T = O.access_token || u;
                        if (T) S.access_token = T;
                        var U = ES("Object", "keys", false, S);
                        if (U.length > 0) {
                            M = r.appendToUrl(M, S);
                            ES(U, "forEach", true, function (Z) {
                                return delete O[Z]
                            })
                        }
                        var V;
                        if (O.transport) {
                            V = [O.transport];
                            delete O.transport
                        } else V = z;
                        for (var W = 0; W < V.length; W++) {
                            var X = R[V[W]], Y = ES("Object", "assign", false, {}, O);
                            if (X.execute(M, N, Y, P)) return
                        }
                        P({error: {type: "no-transport", message: "Could not find a usable transport for request"}})
                    }

                    function G(M, N, O, P, Q, R, S, T) {
                        __p && __p();
                        if (P.transport && P.transport === "chunked" && T === false) {
                            M(S, false);
                            return
                        }
                        if (S && S.error) K.inform("request.error", N, O, P, S, ES("Date", "now", false) - Q, R);
                        K.inform("request.complete", N, O, P, S, ES("Date", "now", false) - Q, R);
                        A--;
                        if (M) M(S);
                        var U = B.length > 0 && A < C;
                        if (U) {
                            var V = B.shift();
                            V()
                        }
                    }

                    function H() {
                        for (var M = arguments.length, N = Array(M), O = 0; O < M; O++) N[O] = arguments[O];
                        var P = i.parseCallDataFromArgs(N), Q = P.uri, R = P.callback, S = P.params, T = S.method;
                        if (L(Q, T)) T = "post";
                        var U = Q.getProtocol() && Q.getDomain() ? Q.setQueryData({}).toString() : s.resolve("graph") + Q.getPath(),
                            V = D++;
                        K.inform("request.prepare", U, S, V);
                        F(U, T == "get" ? "get" : "post", S, ES(G, "bind", true, null, R, Q.getPath(), T, S, ES("Date", "now", false), V))
                    }

                    function I() {
                        var M;
                        if (!E) E = new h(H, v);
                        (M = E).scheduleBatchCall.apply(M, arguments)
                    }

                    function J(M, N) {
                        j.isObject(M);
                        j.isString(M.method, "method missing");
                        if (!N) p.warn("No callback passed to the ApiClient");
                        var O = M.method.toLowerCase().replace(".", "_");
                        M.format = "json-strings";
                        M.api_key = v;
                        var P = O in y ? "api_read" : "api", Q = s.resolve(P) + "/restserver.php", R = D++,
                            S = ES(G, "bind", true, null, N, "/restserver.php", "get", M, ES("Date", "now", false), R);
                        F(Q, "get", M, S)
                    }

                    var K = ES("Object", "assign", false, new q(), {
                        setAccessToken: function M(N) {
                            u = N
                        }, setAccessTokenForClientID: function M(N, O) {
                            if (!(u && v && v !== O)) u = N
                        }, getAccessToken: function M() {
                            return u
                        }, setClientID: function M(N) {
                            v = N
                        }, setDefaultParams: function M(N) {
                            w = N
                        }, setDefaultTransports: function M(N) {
                            z = N
                        }, setMaxConcurrentRequests: function M(N) {
                            C = N
                        }, getCurrentlyExecutingRequestCount: function M() {
                            return A
                        }, getQueuedRequestCount: function M() {
                            return B.length
                        }, rest: J, graph: H, scheduleBatchCall: I, prepareBatchParams: h.prepareBatchParams
                    });

                    function L(M, N) {
                        return M.toString().length > x && N === "get"
                    }

                    m.setSwfUrl(t.FlashRequest.swfUrl);
                    f.exports = K
                }), null);
                __d("sdk.PlatformVersioning", ["sdk.Runtime", "ManagedError"], (function a(b, c, d, e, f, g, h, i) {
                    var j = /^v\d+\.\d\d?$/, k = {
                        REGEX: j, assertVersionIsSet: function l() {
                            if (!h.getVersion()) throw new i("init not called with valid version")
                        }, assertValidVersion: function l(m) {
                            if (!j.test(m)) throw new i("invalid version specified")
                        }
                    };
                    f.exports = k
                }), null);
                __d("sdk.api", ["ApiClient", "sdk.PlatformVersioning", "sdk.Runtime", "sdk.Scribe", "sdk.URI", "sdk.feature"], (function a(b, c, d, e, f, g, h, i, j, k, l, m) {
                    __p && __p();
                    var n = m("should_log_response_error", false), o;
                    j.subscribe("ClientID.change", function (q) {
                        return h.setClientID(q)
                    });
                    j.subscribe("AccessToken.change", function (q) {
                        o = q;
                        h.setAccessToken(q)
                    });
                    h.setDefaultParams({sdk: "joey"});
                    h.subscribe("request.complete", function (q, r, s, t) {
                        __p && __p();
                        var u = false;
                        if (t && typeof t == "object") if (t.error) {
                            if (t.error == "invalid_token" || t.error.type == "OAuthException" && t.error.code == 190) u = true
                        } else if (t.error_code) if (t.error_code == "190") u = true;
                        if (u && o === j.getAccessToken()) j.setAccessToken(null)
                    });
                    h.subscribe("request.complete", function (q, r, s, t) {
                        if ((q == "/me/permissions" && r === "delete" || q == "/restserver.php" && s.method == "Auth.revokeAuthorization") && t === true) j.setAccessToken(null)
                    });
                    h.subscribe("request.error", function (q, r, s, t) {
                        if (n && t.error.type === "http") k.log("jssdk_error", {
                            appId: j.getClientID(),
                            error: "transport",
                            extra: {name: "transport", message: ES("JSON", "stringify", false, t.error)}
                        })
                    });

                    function p(q) {
                        __p && __p();
                        if (typeof q === "string") if (j.getIsVersioned()) {
                            i.assertVersionIsSet();
                            if (!/https?/.test(q) && q.charAt(0) !== "/") q = "/" + q;
                            q = new l(q).setDomain(null).setProtocol(null).toString();
                            if (!i.REGEX.test(q.substring(1, ES(q, "indexOf", true, "/", 1)))) q = "/" + j.getVersion() + q;
                            var r = [q].concat(Array.prototype.slice.call(arguments, 1));
                            h.graph.apply(h, r)
                        } else h.graph.apply(h, arguments); else h.rest.apply(h, arguments)
                    }

                    f.exports = p
                }), null);
                __d("legacy:fb.api", ["FB", "sdk.api"], (function a(b, c, d, e, f, g, h, i) {
                    h.provide("", {api: i})
                }), 3);
                __d("AppUserPropertyAPIBuiltinField", [], (function a(b, c, d, e, f, g) {
                    f.exports = {
                        GENDER: "$gender",
                        CITY: "$city",
                        STATE: "$state",
                        ZIPCODE: "$zipcode",
                        COUNTRY: "$country",
                        LANGUAGE: "$language",
                        CURRENCY: "$currency",
                        INSTALL_SOURCE: "$install_source",
                        USER_TYPE: "$user_type",
                        ACCOUNT_CREATED_TIME: "$account_created_time"
                    }
                }), null);
                __d("FBEventsParamList", [], (function a(b, c, d, e, f, g) {
                    "use strict";
                    __p && __p();
                    var h = "deep", i = "shallow";

                    function j() {
                        this.list = []
                    }

                    j.prototype = {
                        append: function l(m, n) {
                            this._append(encodeURIComponent(m), n, h)
                        }, _append: function l(m, n, o) {
                            if (Object(n) !== n) this._appendPrimitive(m, n); else if (o === h) this._appendObject(m, n); else this._appendPrimitive(m, k(n))
                        }, _appendPrimitive: function l(m, n) {
                            if (n != null) this.list.push([m, n])
                        }, _appendObject: function l(m, n) {
                            for (var o in n) if (Object.prototype.hasOwnProperty.call(n, o)) {
                                var p = m + "[" + encodeURIComponent(o) + "]";
                                this._append(p, n[o], i)
                            }
                        }, each: function l(m) {
                            var n = this.list;
                            for (var o = 0, p = n.length; o < p; o++) m(n[o][0], n[o][1])
                        }, toQueryString: function l() {
                            var m = [];
                            this.each(function (n, o) {
                                m.push(n + "=" + encodeURIComponent(o))
                            });
                            return m.join("&")
                        }
                    };

                    function k(l) {
                        if (typeof JSON === "undefined" || JSON === null || !ES("JSON", "stringify", false)) return Object.prototype.toString.call(l); else return ES("JSON", "stringify", false, l)
                    }

                    f.exports = j
                }), null);
                __d("FBEventsUtils", [], (function a(b, c, d, e, f, g) {
                    "use strict";
                    __p && __p();
                    var h = "console", i = "error", j = "Facebook Pixel Error", k = "Facebook Pixel Warning",
                        l = "warn", m = Object.prototype.toString, n = !("addEventListener" in document),
                        o = function o() {
                        }, p = window[h] || {}, q = window.postMessage || o;

                    function r(w) {
                        return m.call(w) === "[object Array]"
                    }

                    function s(w) {
                        q({action: "FB_LOG", logType: j, logMessage: w}, "*");
                        if (i in p) p[i](j + ": " + w)
                    }

                    function t(w) {
                        q({action: "FB_LOG", logType: k, logMessage: w}, "*");
                        if (l in p) p[l](k + ": " + w)
                    }

                    function u(w, x, y) {
                        x = n ? "on" + x : x;
                        var z = n ? "attachEvent" : "addEventListener", A = n ? "detachEvent" : "removeEventListener",
                            B = function B() {
                                w[A](x, B, false);
                                y()
                            };
                        w[z](x, B, false)
                    }

                    function v(w, x, y) {
                        var z = w[x];
                        w[x] = function () {
                            var A = z.apply(this, arguments);
                            y.apply(this, arguments);
                            return A
                        }
                    }

                    g.isArray = r;
                    g.logError = s;
                    g.logWarning = t;
                    g.listenOnce = u;
                    g.injectMethod = v
                }), null);
                __d("FBPixelEndpoint", ["FBEventsParamList", "FBEventsUtils"], (function a(b, c, d, e, f, g, h, i) {
                    "use strict";
                    __p && __p();
                    var j = "https://www.facebook.com/tr/", k = location.href, l = window.top !== window,
                        m = document.referrer;

                    function n(s, t, u, v) {
                        __p && __p();
                        v = v || {};
                        var w = new h();
                        w.append("id", s);
                        w.append("ev", t);
                        w.append("dl", k);
                        w.append("rl", m);
                        w.append("if", l);
                        w.append("ts", new Date().valueOf());
                        w.append("cd", u);
                        w.append("sw", window.screen.width);
                        w.append("sh", window.screen.height);
                        for (var x in v) w.append(x, v[x]);
                        return w
                    }

                    function o(s, t, u, v) {
                        var w = n(s, t, u, v), x = w.toQueryString();
                        if (2048 > (j + "?" + x).length) p(j, x); else q(j, w)
                    }

                    function p(s, t) {
                        var u = new Image();
                        u.src = s + "?" + t
                    }

                    function q(s, t) {
                        __p && __p();
                        var u = "fb" + Math.random().toString().replace(".", ""), v = document.createElement("form");
                        v.method = "post";
                        v.action = s;
                        v.target = u;
                        v.acceptCharset = "utf-8";
                        v.style.display = "none";
                        var w = !!(window.attachEvent && !window.addEventListener),
                            x = w ? '<iframe name="' + u + '">' : "iframe", y = document.createElement(x);
                        y.src = "javascript:false";
                        y.id = u;
                        y.name = u;
                        v.appendChild(y);
                        i.listenOnce(y, "load", function () {
                            t.each(function (u, z) {
                                var A = document.createElement("input");
                                A.name = u;
                                A.value = z;
                                v.appendChild(A)
                            });
                            i.listenOnce(y, "load", function () {
                                v.parentNode.removeChild(v)
                            });
                            v.submit()
                        });
                        document.body.appendChild(v)
                    }

                    var r = {sendEvent: o};
                    f.exports = r
                }), null);
                __d("FBAppEvents", ["ApiClient", "FBPixelEndpoint"], (function a(b, c, d, e, f, g, h, i) {
                    "use strict";
                    __p && __p();

                    function j(l, m, n, o, p) {
                        var q = {};
                        if (o != null) q.vts = o.toString();
                        if (p != null) q.at = p;
                        i.sendEvent(l.toString(), m, n, q)
                    }

                    function k(l, m, n, o) {
                        var p = "/" + m + "/user_properties", q = {data: [{user_unique_id: l, custom_data: n}]};
                        h.graph(p, "post", q, o)
                    }

                    f.exports = {logEvent: j, updateUserProperties: k}
                }), null);
                __d("sdk.AppEvents", ["AppUserPropertyAPIBuiltinField", "Assert", "sdk.Event", "sdk.Impressions", "sdk.Model", "sdk.Runtime", "FBAppEvents", "sdk.Auth"], (function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
                    __p && __p();
                    var p = ES("Object", "freeze", false, {
                            COMPLETED_REGISTRATION: "fb_mobile_complete_registration",
                            VIEWED_CONTENT: "fb_mobile_content_view",
                            SEARCHED: "fb_mobile_search",
                            RATED: "fb_mobile_rate",
                            COMPLETED_TUTORIAL: "fb_mobile_tutorial_completion",
                            ADDED_TO_CART: "fb_mobile_add_to_cart",
                            ADDED_TO_WISHLIST: "fb_mobile_add_to_wishlist",
                            INITIATED_CHECKOUT: "fb_mobile_initiated_checkout",
                            ADDED_PAYMENT_INFO: "fb_mobile_add_payment_info",
                            ACHIEVED_LEVEL: "fb_mobile_level_achieved",
                            UNLOCKED_ACHIEVEMENT: "fb_mobile_achievement_unlocked",
                            PAGE_VIEW: "fb_page_view",
                            SPENT_CREDITS: "fb_mobile_spent_credits"
                        }), q = ES("Object", "freeze", false, {
                            ACTIVATED_APP: "fb_mobile_activate_app",
                            PURCHASED: "fb_mobile_purchase"
                        }), r = ES("Object", "freeze", false, {
                            APP_USER_ID: "_app_user_id",
                            APP_VERSION: "_appVersion",
                            CURRENCY: "fb_currency",
                            REGISTRATION_METHOD: "fb_registration_method",
                            CONTENT_TYPE: "fb_content_type",
                            CONTENT_ID: "fb_content_id",
                            SEARCH_STRING: "fb_search_string",
                            SUCCESS: "fb_success",
                            MAX_RATING_VALUE: "fb_max_rating_value",
                            PAYMENT_INFO_AVAILABLE: "fb_payment_info_available",
                            NUM_ITEMS: "fb_num_items",
                            LEVEL: "fb_level",
                            DESCRIPTION: "fb_description"
                        }), s = /^[0-9a-zA-Z_][0-9a-zA-Z _-]{0,39}$/, t = 40, u = s, v = t, w = 100, x = 100, y = 100,
                        z = 100, A = ES("Object", "values", false, h), B = new l({UserID: "", Version: ""});

                    function C(T, U, V, W) {
                        var X = {ae: 1, ev: U, vts: V, canvas: 1};
                        if (W) X.cd = W;
                        k.impression({api_key: T, payload: ES("JSON", "stringify", false, X)})
                    }

                    function D(T, U, V, W) {
                        var X = o.getAuthResponse(), Y = X && X.accessToken ? X.accessToken : null;
                        n.logEvent(T, U, W || {}, V, Y)
                    }

                    function E(T, U, V, W) {
                        __p && __p();
                        F(U);
                        var X = B.getUserID();
                        if (X !== "") {
                            W = W || {};
                            W[r.APP_USER_ID] = X
                        }
                        var Y = B.getVersion();
                        if (Y !== "") {
                            W = W || {};
                            W[r.APP_VERSION] = Y
                        }
                        if (m.isCanvasEnvironment()) C(T, U, V, W); else D(T, U, V, W)
                    }

                    function F(T) {
                        i.isTrue(s.test(T), "Invalid event name: " + T + ". It must be between 1 and " + t + " characters, and must be contain only alphanumerics, _, - or spaces, starting with alphanumeric or _.")
                    }

                    function G(T, U, V, W) {
                        var X = {};
                        X[r.CURRENCY] = V;
                        E(T, q.PURCHASED, U, babelHelpers["extends"]({}, W, X))
                    }

                    function H(T) {
                        E(T, q.ACTIVATED_APP)
                    }

                    function I(T) {
                        E(T, p.PAGE_VIEW)
                    }

                    function J(T) {
                        i.isTrue(T.length !== 0, "User ID must be set before updateUserProperties can be called.");
                        i.isTrue(T.length <= w, "Invalid user ID: " + T + ". It must be no longer than " + w + " characters.")
                    }

                    function K(T) {
                        J(T);
                        B.setUserID(T)
                    }

                    function L() {
                        return B.getUserID()
                    }

                    function M() {
                        B.setUserID("")
                    }

                    function N(T) {
                        i.isTrue(T.length <= x, "Invalid app version: " + T + ". It must be no longer than " + x + " characters.")
                    }

                    function O(T) {
                        N(T);
                        B.setVersion(T)
                    }

                    function P() {
                        return B.getVersion()
                    }

                    function Q() {
                        B.setVersion("")
                    }

                    function R(T) {
                        i.isTrue(ES("Object", "keys", false, T).length <= y, "The total number of user properties cannot exceed " + y + ".");
                        for (var U in T) {
                            i.isTrue(u.test(U) || ES(A, "includes", true, U), "Invalid user properties key name: " + U + ". It must be between 1 and " + v + " characters, and must contain only alphanumerics, _, - or spaces, starting with alphanumeric or _. Or, it must be a pre-defined user property");
                            i.isTrue(T[U].toString().length <= z, "Invalid user properties value: " + T[U] + ". It must be no longer than " + z + " characters.")
                        }
                    }

                    function S(T, U, V) {
                        var W = L();
                        J(W);
                        R(U);
                        n.updateUserProperties(W, T, U, V)
                    }

                    j.subscribe("init:post", function (T) {
                        if (m.getClientID()) {
                            if (T.autoLogAppEvents !== undefined) {
                                i.isBoolean(T.autoLogAppEvents, "Type of property autoLogAppEvents must be boolean");
                                m.setAutoLogAppEvents(T.autoLogAppEvents)
                            }
                            if (m.getAutoLogAppEvents()) I(m.getClientID())
                        }
                    });
                    f.exports = {
                        activateApp: H,
                        logEvent: E,
                        logPurchase: G,
                        logPageView: I,
                        assertValidEventName: F,
                        EventNames: p,
                        ParameterNames: r,
                        assertValidUserID: J,
                        setUserID: K,
                        getUserID: L,
                        clearUserID: M,
                        assertValidUserProperties: R,
                        updateUserProperties: S,
                        setAppVersion: O,
                        getAppVersion: P,
                        clearAppVersion: Q,
                        assertValidAppVersion: N
                    }
                }), null);
                __d("legacy:fb.appevents", ["Assert", "sdk.AppEvents", "FB", "sdk.Runtime"], (function a(b, c, d, e, f, g, h, i, j, k) {
                    __p && __p();

                    function l() {
                        var m = k.getClientID();
                        h.isTrue(m !== null && m.length > 0, "You need to call FB.init() with App ID first.");
                        return m
                    }

                    j.provide("AppEvents", {
                        logEvent: function m(n, o, p) {
                            i.logEvent(l(), n, o, p)
                        }, logPurchase: function m(n, o, p) {
                            i.logPurchase(l(), n, o, p)
                        }, activateApp: function m() {
                            i.activateApp(l())
                        }, logPageView: function m() {
                            i.logPageView(l())
                        }, setUserID: function m(n) {
                            i.setUserID(n)
                        }, getUserID: function m() {
                            return i.getUserID()
                        }, clearUserID: function m() {
                            i.clearUserID()
                        }, updateUserProperties: function m(n, o) {
                            i.updateUserProperties(l(), n, o)
                        }, setAppVersion: function m(n) {
                            i.setAppVersion(n)
                        }, getAppVersion: function m() {
                            return i.getAppVersion()
                        }, clearAppVersion: function m() {
                            i.clearAppVersion()
                        }, EventNames: i.EventNames, ParameterNames: i.ParameterNames
                    })
                }), 3);
                __d("resolveURI", [], (function a(b, c, d, e, f, g) {
                    function h(i) {
                        if (!i) return window.location.href;
                        i = i.replace(/&/g, "&amp;").replace(/\"/g, "&quot;");
                        var j = document.createElement("div");
                        j.innerHTML = '<a href="' + i + '"></a>';
                        return j.firstChild.href
                    }

                    f.exports = h
                }), null);
                __d("sdk.Canvas.Environment", ["sdk.RPC"], (function a(b, c, d, e, f, g, h) {
                    function i(l) {
                        h.remote.getPageInfo(function (m) {
                            l(m.result)
                        })
                    }

                    function j(l, m) {
                        h.remote.scrollTo({x: l || 0, y: m || 0})
                    }

                    h.stub("getPageInfo");
                    h.stub("scrollTo");
                    var k = {getPageInfo: i, scrollTo: j};
                    f.exports = k
                }), null);
                __d("sdk.DialogUtils", ["sdk.Content", "sdk.DOM", "DOMEventListener", "sdk.UA", "sdk.feature"], (function a(b, c, d, e, f, g, h, i, j, k, l) {
                    "use strict";
                    __p && __p();
                    var m = {
                        isOrientationPotrait: function n() {
                            return window.innerWidth < window.innerHeight
                        }, addDoubleClickAction: function n(o, p, q) {
                            var r = null;
                            return j.add(o, "click", function () {
                                if (r !== null) {
                                    clearTimeout(r);
                                    r = null;
                                    p()
                                }
                                r = setTimeout(function () {
                                    r = null
                                }, q)
                            })
                        }, addIdleDesktopAction: function n(o, p, q) {
                            var r = void 0, event = void 0, s = function s() {
                                r = setTimeout(p, q)
                            };
                            s();
                            return j.add(o, "mouseenter", function () {
                                clearTimeout(r);
                                if (!event) event = j.add(o, "mouseleave", function () {
                                    s()
                                })
                            })
                        }, addMobileOrientationChangeAction: function n(o) {
                            if (!k.mobile()) return null;
                            var event = "onorientationchange" in window ? "orientationchange" : "resize",
                                p = function p(q) {
                                    return setTimeout(function (q) {
                                        return o(q)
                                    }, 50)
                                };
                            return j.add(window, event, p)
                        }, applyScreenDimensions: function n(o) {
                            if (o == null) return;
                            var p = i.getViewportInfo();
                            o.style.minHeight = p.height || p.width ? p.height + "px" : "";
                            o.style.top = p.scrollTop ? p.scrollTop + "px" : ""
                        }, setDialogPositionToCenter: function n(o, p, q) {
                            __p && __p();
                            var r = function r(B) {
                                    return typeof B === "number" ? B : parseInt(B, 10)
                                }, s = i.getViewportInfo(), t = r(o.offsetWidth), u = r(o.offsetHeight),
                                v = s.scrollLeft + (s.width - t) / 2, w = (s.height - u) / 2.5;
                            if (v < w) w = v;
                            var x = s.height - u - w, y = (s.height - u) / 2;
                            if (q) y = q.scrollTop - q.offsetTop + (q.clientHeight - u) / 2;
                            if (y < w) y = w; else if (y > x) y = x;
                            y += s.scrollTop;
                            if (k.mobile()) {
                                var z = 100;
                                if (p) {
                                    z += (s.height - u) / 2;
                                    i.addCss(document.body, "fb_reposition")
                                } else {
                                    i.addCss(document.body, "fb_hidden");
                                    if (l("dialog_resize_refactor", false)) document.body.style.width = "auto";
                                    y = 1e4
                                }
                                var A = i.getByClass("fb_dialog_padding", o);
                                if (A.length) A[0].style.height = z + "px"
                            }
                            o.style.left = (v > 0 ? v : 0) + "px";
                            o.style.top = (y > 0 ? y : 0) + "px"
                        }, setDialogPositionToTop: function n(o, p, q) {
                            this.setDialogPositionToCenter(o, p, q);
                            var r = i.getViewportInfo(), s = r.scrollTop + (r.height - o.offsetHeight) * .05;
                            i.setStyle(o, "top", s + "px")
                        }, setupNewDarkOverlay: function n() {
                            var o = document.createElement("div");
                            o.setAttribute("id", "fb_dialog_ipad_overlay");
                            this.applyScreenDimensions(o);
                            return o
                        }, setupNewDialog: function n(o) {
                            __p && __p();
                            o = o || {};
                            var p = document.createElement("div"), q = o, r = q.onClose;
                            if (o.closeIcon && r) {
                                var s = document.createElement("a");
                                s.className = "fb_dialog_close_icon";
                                j.add(s, "click", r);
                                p.appendChild(s)
                            }
                            var t = "fb_dialog";
                            t += " " + (o.classes || "");
                            t += k.mobile() ? " fb_dialog_mobile" : " fb_dialog_advanced";
                            p.className = t;
                            if (o.width) {
                                var u = parseInt(o.width, 10);
                                if (!isNaN(u)) p.style.width = u + "px"
                            }
                            var v = document.createElement("div");
                            if (o.content) h.append(o.content, v);
                            v.className = "fb_dialog_content";
                            p.appendChild(v);
                            if (k.mobile()) {
                                var w = document.createElement("div");
                                w.className = "fb_dialog_padding";
                                p.appendChild(w)
                            }
                            return {dialogElement: p, contentRoot: v}
                        }, onDialogHideCleanup: function n(o) {
                            var p = document.body;
                            if (o) i.removeCss(p, "fb_reposition"); else i.removeCss(p, "fb_hidden")
                        }
                    };
                    f.exports = m
                }), null);
                __d("sdk.fbt", [], (function a(b, c, d, e, f, g) {
                    var h = {
                        _: function i(j) {
                            return typeof j === "string" ? j : j[0]
                        }
                    };
                    f.exports = h
                }), null);
                __d("sdk.Dialog", ["sdk.Canvas.Environment", "sdk.Content", "sdk.DialogUtils", "sdk.DOM", "DOMEventListener", "ObservableMixin", "sdk.Runtime", "Type", "sdk.UA", "sdk.fbt", "sdk.feature"], (function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r) {
                    __p && __p();
                    var s = 30, t = 590, u = 500, v = 240, w = 575;

                    function x() {
                        if (r("dialog_resize_refactor", false)) {
                            var A = k.getViewportInfo();
                            if (A.height && A.width) return {width: Math.min(A.width, u), height: Math.min(A.height, t)}
                        }
                        return null
                    }

                    var y = o.extend({
                        constructor: function y(A, B) {
                            __p && __p();
                            this.parent();
                            this.id = A;
                            this.display = B;
                            this._e2e = {};
                            if (!z._dialogs) {
                                z._dialogs = {};
                                z._addOrientationHandler()
                            }
                            z._dialogs[A] = this;
                            this.trackEvent("init")
                        }, trackEvent: function A(B, C) {
                            if (this._e2e[B]) return this;
                            this._e2e[B] = C || ES("Date", "now", false);
                            if (B == "close") this.inform("e2e:end", this._e2e);
                            return this
                        }, trackEvents: function A(B) {
                            if (typeof B === "string") B = ES("JSON", "parse", false, B);
                            for (var C in B) if (Object.prototype.hasOwnProperty.call(B, C)) this.trackEvent(C, B[C]);
                            return this
                        }
                    }, m), z = {
                        newInstance: function A(B, C) {
                            return new y(B, C)
                        },
                        _dialogs: null,
                        _lastYOffset: 0,
                        _overlayListeners: [],
                        _loaderEl: null,
                        _overlayEl: null,
                        _stack: [],
                        _active: null,
                        _forceTabletStyle: null,
                        _closeOnOverlayTap: null,
                        _positionDialogAtTopWhenPortrait: null,
                        get: function A(B) {
                            return z._dialogs[B]
                        },
                        _findRoot: function A(B) {
                            while (B) {
                                if (k.containsCss(B, "fb_dialog")) return B;
                                B = B.parentNode
                            }
                        },
                        _createWWWLoader: function A(B) {
                            B = B ? B : 460;
                            return z.create({
                                content: '<div class="dialog_title">  <a id="fb_dialog_loader_close">    <div class="fb_dialog_close_icon"></div>  </a>  <span>Facebook</span>  <div style="clear:both;"></div></div><div class="dialog_content"></div><div class="dialog_footer"></div>',
                                width: B
                            })
                        },
                        _createMobileLoader: function A() {
                            var B;
                            if (p.nativeApp()) B = '<div class="dialog_header"></div>'; else if (z.isTabletStyle()) B = '<div class="overlayLoader"><div id="fb_dialog_loader_spinner"></div><a id="fb_dialog_loader_close" href="#">' + q._("Zru\u0161it") + "</a></div>"; else B = '<div class="dialog_header"><table>  <tbody>    <tr>      <td class="header_left">        <label class="touchable_button">          <input type="submit" value="' + q._("Zru\u0161it") + '"            id="fb_dialog_loader_close"/>        </label>      </td>      <td class="header_center">        <div>         ' + q._("Na\u010d\u00edt\u00e1n\u00ed\u2026") + '        </div>      </td>      <td class="header_right">      </td>    </tr>  </tbody></table></div>';
                            return z.create({classes: "loading" + (z.isTabletStyle() ? " centered" : ""), content: B})
                        },
                        _setDialogOverlayStyle: function A() {
                            j.applyScreenDimensions(z._overlayEl)
                        },
                        _showTabletOverlay: function A(B) {
                            __p && __p();
                            if (!z.isTabletStyle()) return;
                            if (!z._overlayEl) {
                                z._overlayEl = j.setupNewDarkOverlay();
                                i.append(z._overlayEl, null)
                            }
                            if (z._closeOnOverlayTap) {
                                var C = j.addDoubleClickAction(z._overlayEl, ES(B, "bind", true, this), 5e3);
                                z._overlayListeners.push(C)
                            }
                            z._overlayEl.className = ""
                        },
                        _hideTabletOverlay: function A() {
                            if (z.isTabletStyle()) {
                                z._overlayEl.className = "hidden";
                                ES(z._overlayListeners, "forEach", true, function (B) {
                                    return B.remove()
                                });
                                z._overlayListeners = []
                            }
                        },
                        showLoader: function A(B, C) {
                            __p && __p();
                            if (!B) B = function B() {
                            };
                            var D = function D() {
                                z._hideLoader();
                                j.onDialogHideCleanup(z.isTabletStyle());
                                z._hideTabletOverlay();
                                B()
                            };
                            z._showTabletOverlay(D);
                            if (!z._loaderEl) z._loaderEl = z._findRoot(p.mobile() ? z._createMobileLoader() : z._createWWWLoader(C));
                            var E = document.getElementById("fb_dialog_loader_close");
                            if (E) {
                                k.removeCss(E, "fb_hidden");
                                var F = l.add(E, "click", D);
                                z._overlayListeners.push(F)
                            }
                            z._makeActive(z._loaderEl)
                        },
                        setCloseOnOverlayTap: function A(B) {
                            z._closeOnOverlayTap = !!B
                        },
                        setPositionDialogAtTopWhenPortrait: function A(B) {
                            z._positionDialogAtTopWhenPortrait = !!B
                        },
                        _hideLoader: function A() {
                            if (z._loaderEl && z._loaderEl == z._active) z._loaderEl.style.top = "-10000px"
                        },
                        _makeActive: function A(B) {
                            z._setDialogSizes();
                            z._lowerActive();
                            z._active = B;
                            if (n.isEnvironment(n.ENVIRONMENTS.CANVAS)) h.getPageInfo(function (C) {
                                z._centerActive(C)
                            });
                            z._centerActive()
                        },
                        _lowerActive: function A() {
                            if (!z._active) return;
                            z._active.style.top = "-10000px";
                            z._active = null
                        },
                        _removeStacked: function A(B) {
                            z._stack = ES(z._stack, "filter", true, function (C) {
                                return C != B
                            })
                        },
                        _centerActive: function A(B) {
                            var C = z._active;
                            if (!C) return;
                            if (z._positionDialogAtTopWhenPortrait && j.isOrientationPotrait()) j.setDialogPositionToTop(C, z.isTabletStyle(), B); else j.setDialogPositionToCenter(C, z.isTabletStyle(), B)
                        },
                        _setDialogSizes: function A() {
                            __p && __p();
                            var B = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];
                            if (!p.mobile()) return;
                            for (var C in z._dialogs) if (Object.prototype.hasOwnProperty.call(z._dialogs, C)) {
                                var D = document.getElementById(C);
                                if (D) {
                                    D.style.width = z.getDefaultSize().width + "px";
                                    if (!B) D.style.height = z.getDefaultSize().height + "px"
                                }
                            }
                        },
                        getDefaultSize: function A() {
                            __p && __p();
                            if (p.mobile()) {
                                var B = x();
                                if (B) {
                                    if (k.getViewportInfo().width <= B.width) B.width = k.getViewportInfo().width - s;
                                    if (k.getViewportInfo().height <= B.height) B.height = k.getViewportInfo().height - s;
                                    return B
                                }
                                if (p.ipad()) return {width: u, height: t};
                                if (p.android()) return {width: screen.availWidth, height: screen.availHeight}; else {
                                    var C = window.innerWidth, D = window.innerHeight, E = C / D > 1.2;
                                    return {width: C, height: Math.max(D, E ? screen.width : screen.height)}
                                }
                            }
                            return {width: w, height: v}
                        },
                        _handleOrientationChange: function A() {
                            __p && __p();
                            var B = r("dialog_resize_refactor", false) ? k.getViewportInfo().width : screen.availWidth;
                            z._availScreenWidth = B;
                            if (z.isTabletStyle()) {
                                z._setDialogSizes(true);
                                z._centerActive();
                                z._setDialogOverlayStyle()
                            } else {
                                var C = z.getDefaultSize().width;
                                for (var D in z._dialogs) if (Object.prototype.hasOwnProperty.call(z._dialogs, D)) {
                                    var E = document.getElementById(D);
                                    if (E) E.style.width = C + "px"
                                }
                            }
                        },
                        _addOrientationHandler: function A() {
                            if (!p.mobile()) return null;
                            z._availScreenWidth = r("dialog_resize_refactor", false) ? k.getViewportInfo().width : screen.availWidth;
                            j.addMobileOrientationChangeAction(z._handleOrientationChange)
                        },
                        create: function A(B) {
                            var C = j.setupNewDialog(B);
                            i.append(C.dialogElement);
                            if (B.visible) z.show(C.dialogElement);
                            if (typeof B.styles === "object") ES("Object", "assign", false, C.dialogElement.style, B.styles);
                            return C.contentRoot
                        },
                        show: function A(B) {
                            var C = z._findRoot(B);
                            if (C) {
                                z._removeStacked(C);
                                z._hideLoader();
                                z._makeActive(C);
                                z._stack.push(C);
                                if ("fbCallID" in B) z.get(B.fbCallID).inform("iframe_show").trackEvent("show")
                            }
                        },
                        hide: function A(B) {
                            var C = z._findRoot(B);
                            z._hideLoader();
                            if (C == z._active) {
                                z._lowerActive();
                                j.onDialogHideCleanup(z.isTabletStyle());
                                z._hideTabletOverlay();
                                if ("fbCallID" in B) z.get(B.fbCallID).inform("iframe_hide").trackEvent("hide")
                            }
                        },
                        remove: function A(B) {
                            __p && __p();
                            B = z._findRoot(B);
                            if (B) {
                                var C = z._active == B;
                                z._removeStacked(B);
                                if (C) {
                                    z._hideLoader();
                                    if (z._stack.length > 0) z.show(z._stack.pop()); else {
                                        z._lowerActive();
                                        j.onDialogHideCleanup(z.isTabletStyle());
                                        z._hideTabletOverlay()
                                    }
                                } else if (z._active === null && z._stack.length > 0) z.show(z._stack.pop());
                                setTimeout(function () {
                                    B.parentNode.removeChild(B)
                                }, 3e3)
                            }
                        },
                        isActive: function A(B) {
                            var C = z._findRoot(B);
                            return C && C === z._active
                        },
                        setForceTabletStyle: function A(B) {
                            z._forceTabletStyle = !!B
                        },
                        isTabletStyle: function A() {
                            __p && __p();
                            var B;
                            if (!p.mobile()) return false;
                            if (z._forceTabletStyle) return true;
                            if (r("dialog_resize_refactor", false)) {
                                var C = x();
                                B = C && (C.height >= t || C.width >= u)
                            } else B = !!p.ipad();
                            return B
                        }
                    };
                    f.exports = z
                }), null);
                __d("sdk.NativeExtensions", ["Log", "sdk.UA", "sdk.domReady", "DOMEventListener"], (function a(b, c, d, e, f, g, h, i, j, k) {
                    __p && __p();
                    var l = "fbNativeExtensionsReady";

                    function m() {
                        if (window._FBSdkExtensions && window._FBSdkExtensions.jsonRPC && window._FBSdkExtensions.initializeCallbackHandler && window._FBSdkExtensions.supportsDialog) return window._FBSdkExtensions;
                        return null
                    }

                    var n = {
                        onReady: function o(p) {
                            __p && __p();
                            if (!i.facebookInAppBrowser()) {
                                h.error("FB.NativeExtensions.onReady only works when the page is rendered in a WebView of the native Facebook app.");
                                return
                            }
                            var q = m();
                            if (q) {
                                p(q);
                                return
                            }
                            var r = false, s = function s() {
                                if (r) return;
                                r = true;
                                p(m());
                                k.remove(window, l, s)
                            };
                            j(s);
                            k.add(window, l, s)
                        }
                    };
                    f.exports = n
                }), null);
                __d("sdk.Extensions", ["JSONRPC", "Queue", "sdk.UA", "sdk.NativeExtensions"], (function a(b, c, d, e, f, g, h, i, j, k) {
                    "use strict";
                    __p && __p();
                    var l = new i(), m = new h(function (p) {
                        l.enqueue(p)
                    }), n = new i();
                    n.start(function (p) {
                        m.read(p)
                    });
                    var o = null;
                    if (j.facebookInAppBrowser()) k.onReady(function (p) {
                        __p && __p();
                        var q;
                        o = p;
                        if (p) (function () {
                            var r = p;
                            window._FBBrowserCallbackHandler = function (s) {
                                n.enqueue(ES("JSON", "stringify", false, s))
                            };
                            r.initializeCallbackHandler(ES("JSON", "stringify", false, {name: "_FBBrowserCallbackHandler"}));
                            l.start(function (s) {
                                r.jsonRPC(s)
                            })
                        })()
                    });
                    f.exports = {
                        local: m.local,
                        remote: m.remote,
                        stub: ES(m.stub, "bind", true, m),
                        supportsDialog: function p(q) {
                            if (o) return o.supportsDialog(q);
                            return false
                        }
                    }
                }), null);
                __d("sdk.Frictionless", ["sdk.Auth", "sdk.api", "sdk.Event", "sdk.Dialog"], (function a(b, c, d, e, f, g, h, i, j, k) {
                    __p && __p();
                    var l = {
                        _allowedRecipients: {}, _useFrictionless: false, _updateRecipients: function m() {
                            l._allowedRecipients = {};
                            i("/me/apprequestformerrecipients", function (n) {
                                if (!n || n.error) return;
                                ES(n.data, "forEach", true, function (o) {
                                    l._allowedRecipients[o.recipient_id] = true
                                })
                            })
                        }, init: function m() {
                            l._useFrictionless = true;
                            h.getLoginStatus(function (n) {
                                if (n.status == "connected") l._updateRecipients()
                            });
                            j.subscribe("auth.login", function (n) {
                                if (n.authResponse) l._updateRecipients()
                            })
                        }, _processRequestResponse: function m(n, o) {
                            __p && __p();
                            return function (p) {
                                __p && __p();
                                var q = p && p.updated_frictionless;
                                if (l._useFrictionless && q) l._updateRecipients();
                                if (p) {
                                    if (!o && p.frictionless) {
                                        k._hideLoader();
                                        k._restoreBodyPosition();
                                        k._hideIPadOverlay()
                                    }
                                    delete p.frictionless;
                                    delete p.updated_frictionless
                                }
                                n && n(p)
                            }
                        }, isAllowed: function m(n) {
                            __p && __p();
                            if (!n) return false;
                            if (typeof n === "number") return n in l._allowedRecipients;
                            if (typeof n === "string") n = n.split(",");
                            n = ES(n, "map", true, function (q) {
                                return ES(String(q), "trim", true)
                            });
                            var o = true, p = false;
                            ES(n, "forEach", true, function (q) {
                                o = o && q in l._allowedRecipients;
                                p = true
                            });
                            return o && p
                        }
                    };
                    j.subscribe("init:post", function (m) {
                        if (m.frictionlessRequests) l.init()
                    });
                    f.exports = l
                }), null);
                __d("sdk.Native", ["Log", "sdk.UA"], (function a(b, c, d, e, f, g, h, i) {
                    __p && __p();
                    var j = "fbNativeReady", k = {
                        onready: function l(m) {
                            __p && __p();
                            if (!i.nativeApp()) {
                                h.error("FB.Native.onready only works when the page is rendered in a WebView of the native Facebook app. Test if this is the case calling FB.UA.nativeApp()");
                                return
                            }
                            if (window.__fbNative && !this.nativeReady) ES("Object", "assign", false, this, window.__fbNative);
                            if (this.nativeReady) m(); else {
                                var n = function n(o) {
                                    window.removeEventListener(j, n);
                                    this.onready(m)
                                };
                                window.addEventListener(j, n, false)
                            }
                        }
                    };
                    f.exports = k
                }), null);
                __d("sdk.openMessenger", ["sdk.UA"], (function a(b, c, d, e, f, g, h) {
                    "use strict";
                    __p && __p();
                    var i = "https://itunes.apple.com/us/app/messenger/id454638411",
                        j = "https://play.google.com/store/apps/details?id=com.facebook.orca", k = 3e3;

                    function l(m) {
                        __p && __p();
                        var n = void 0, o = void 0, p = m.link, q = m.app_id;
                        if (h.android()) {
                            n = "intent://share/#Intent;package=com.facebook.orca;scheme=fb-messenger;S.android.intent.extra.TEXT=" + encodeURIComponent(p) + ";S.trigger=send_plugin;";
                            if (q) n += "S.platform_app_id=" + encodeURIComponent(q) + ";";
                            n += "end";
                            o = j
                        } else {
                            n = "fb-messenger://share?link=" + encodeURIComponent(p);
                            if (q) n += "&app_id=" + encodeURIComponent(q);
                            o = i
                        }
                        setTimeout(function () {
                            window.location.href = o
                        }, k);
                        window.location.href = n
                    }

                    f.exports = l
                }), null);
                __d("sdk.UIServer", ["sdk.Auth", "sdk.Extensions", "sdk.Content", "sdk.DOM", "sdk.Dialog", "sdk.Event", "sdk.Frictionless", "Log", "sdk.Native", "QueryString", "sdk.RPC", "sdk.Runtime", "JSSDKConfig", "sdk.UA", "UrlMap", "sdk.XD", "createObjectFrom", "sdk.feature", "sdk.fbt", "flattenObject", "sdk.getContextType", "guid", "insertIframe", "sdk.openMessenger", "resolveURI"], (function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F) {
                    __p && __p();
                    var G = {
                        transform: function N(O) {
                            if (O.params.display === "touch" && M.canIframe(O.params) && window.postMessage) {
                                O.params.channel = M._xdChannelHandler(O.id, "parent");
                                if (!u.nativeApp()) O.params.in_iframe = 1;
                                return O
                            } else return M.genericTransform(O)
                        }, getXdRelation: function N(O) {
                            var P = O.display;
                            if (P === "touch" && window.postMessage && O.in_iframe) return "parent";
                            return M.getXdRelation(O)
                        }
                    };

                    function H(N) {
                        return N.method == "permissions.oauth" || N.method == "permissions.request" || N.method == "oauth"
                    }

                    var I = {
                        "stream.share": {
                            size: {width: 670, height: 340},
                            url: "sharer.php",
                            transform: function N(O) {
                                if (!O.params.u) O.params.u = window.location.toString();
                                O.params.display = "popup";
                                return O
                            }
                        },
                        apprequests: {
                            transform: function N(O) {
                                __p && __p();
                                O = G.transform(O);
                                O.params.frictionless = n && n._useFrictionless;
                                if (O.params.frictionless) {
                                    if (n.isAllowed(O.params.to)) {
                                        O.params.display = "iframe";
                                        O.params.in_iframe = true;
                                        O.hideLoader = true
                                    }
                                    O.cb = n._processRequestResponse(O.cb, O.hideLoader)
                                }
                                O.closeIcon = false;
                                return O
                            }, getXdRelation: G.getXdRelation
                        },
                        "permissions.oauth": {
                            url: "dialog/oauth",
                            size: {width: u.mobile() ? null : 475, height: u.mobile() ? null : 183},
                            transform: function N(O) {
                                __p && __p();
                                if (!s.getClientID()) {
                                    o.error("FB.login() called before FB.init().");
                                    return
                                }
                                if (h.getAuthResponse() && !O.params.scope && !O.params.auth_type) {
                                    o.error("FB.login() called when user is already connected.");
                                    O.cb && O.cb({status: s.getLoginStatus(), authResponse: h.getAuthResponse()});
                                    return
                                }
                                var P = O.cb, Q = O.id;
                                delete O.cb;
                                var R = O.params.auth_type === "reauthenticate",
                                    S = ES("Object", "keys", false, ES("Object", "assign", false, O.params.response_type ? x(O.params.response_type.split(",")) : {}, {
                                        token: true,
                                        signed_request: true
                                    })).join(",");
                                if (O.params.display === "async") {
                                    ES("Object", "assign", false, O.params, {
                                        client_id: s.getClientID(),
                                        origin: B(),
                                        response_type: S,
                                        domain: location.hostname
                                    });
                                    O.cb = h.xdResponseWrapper(P, h.getAuthResponse(), "permissions.oauth")
                                } else {
                                    if (R) M._xdNextHandler(function (T) {
                                        P({authResponse: null, status: "not_authorized"})
                                    }, Q, "opener", true);
                                    ES("Object", "assign", false, O.params, {
                                        client_id: s.getClientID(),
                                        redirect_uri: F(M.xdHandler(P, Q, "opener", h.getAuthResponse(), "permissions.oauth", !R)),
                                        origin: B(),
                                        response_type: S,
                                        domain: location.hostname
                                    })
                                }
                                return O
                            }
                        },
                        "auth.logout": {
                            url: "logout.php", transform: function N(O) {
                                if (!s.getClientID()) o.error("FB.logout() called before calling FB.init()."); else if (!h.getAuthResponse()) o.error("FB.logout() called without an access token."); else {
                                    O.params.next = M.xdHandler(O.cb, O.id, "parent", h.getAuthResponse(), "logout", true);
                                    return O
                                }
                            }
                        },
                        "login.status": {
                            url: "dialog/oauth", transform: function N(O) {
                                var P = O.cb, Q = O.id;
                                delete O.cb;
                                ES("Object", "assign", false, O.params, {
                                    client_id: s.getClientID(),
                                    redirect_uri: M.xdHandler(P, Q, "parent", h.getAuthResponse(), "login_status", true),
                                    origin: B(),
                                    response_type: "token,signed_request,code",
                                    domain: location.hostname
                                });
                                return O
                            }
                        },
                        pay: {size: {width: 555, height: 120}, connectDisplay: "popup"},
                        live_broadcast: {
                            transform: function N(O) {
                                if (O.params.phase === "create") O.size = {width: 480, height: 280};
                                if (O.params.phase === "publish") O.size = {width: 772, height: 540};
                                return O
                            }, require_access_token: true
                        },
                        boost: {
                            transform: function N(O) {
                                O.size = {width: 960, height: 760};
                                O.params.display = "popup";
                                return O
                            }
                        }
                    }, J = {};

                    function K(N, O) {
                        J[O] = true;
                        return function (P) {
                            delete J[O];
                            N(P)
                        }
                    }

                    function L(N) {
                        if (!y("should_force_single_dialog_instance", true)) return false;
                        var O = N.method.toLowerCase();
                        if (O === "pay" && N.display === "async") return true;
                        return false
                    }

                    var M = {
                        Methods: I,
                        _loadedNodes: {},
                        _defaultCb: {},
                        _resultToken: '"xxRESULTTOKENxx"',
                        genericTransform: function N(O) {
                            if (O.params.display == "dialog" || O.params.display == "iframe") ES("Object", "assign", false, O.params, {
                                display: "iframe",
                                channel: M._xdChannelHandler(O.id, "parent.parent")
                            }, true);
                            return O
                        },
                        checkOauthDisplay: function N(O) {
                            var P = O.scope || O.perms || s.getScope();
                            if (!P) return O.display;
                            var Q = P.split(/\s|,/g);
                            for (var R = 0; R < Q.length; R++) if (!t.initSitevars.iframePermissions[ES(Q[R], "trim", true)]) return "popup";
                            return O.display
                        },
                        prepareCall: function N(O, P) {
                            __p && __p();
                            var Q = O.method.toLowerCase(),
                                R = Object.prototype.hasOwnProperty.call(M.Methods, Q) ? ES("Object", "assign", false, {}, M.Methods[Q]) : {},
                                S = C(), T = s.getSecure() || Q !== "auth.status" && Q != "login.status";
                            ES("Object", "assign", false, O, {
                                app_id: s.getClientID(),
                                locale: s.getLocale(),
                                sdk: "joey",
                                access_token: T && s.getAccessToken() || undefined
                            });
                            if (Q === "share" || Q === "share_open_graph") {
                                O.mobile_iframe = u.mobile() && (O.mobile_iframe || O.iframe_test);
                                if (O.mobile_iframe) R = ES("Object", "assign", false, {}, G)
                            }
                            O.display = M.getDisplayMode(R, O);
                            if (!R.url) R.url = "dialog/" + Q;
                            if ((R.url == "dialog/oauth" || R.url == "dialog/permissions.request") && (O.display == "iframe" || O.display == "touch" && O.in_iframe)) O.display = M.checkOauthDisplay(O);
                            if (O.display == "popup" && !R.require_access_token) delete O.access_token;
                            if (s.getIsVersioned() && R.url.substring(0, 7) === "dialog/") R.url = O.version + "/" + R.url;
                            if (L(O)) {
                                if (J[Q]) {
                                    var U = 'Dialog "' + Q + '" is trying to run more than once.';
                                    o.warn(U);
                                    P({error_code: -100, error_message: U});
                                    return
                                }
                                P = K(P, Q)
                            }
                            var V = {
                                cb: P,
                                id: S,
                                size: R.size || M.getDefaultSize(),
                                url: v.resolve(O.display == "touch" ? "m" : "www", T) + "/" + R.url,
                                params: O,
                                name: Q,
                                dialog: l.newInstance(S, O.display)
                            }, W = R.transform ? R.transform : M.genericTransform;
                            if (W) {
                                V = W(V);
                                if (!V) return
                            }
                            if (O.display === "touch" && O.in_iframe) V.params.parent_height = window.innerHeight;
                            var X = R.getXdRelation || M.getXdRelation, Y = X(V.params);
                            if (!(V.id in M._defaultCb) && !("next" in V.params) && !("redirect_uri" in V.params)) V.params.next = M._xdResult(V.cb, V.id, Y, true);
                            if (Y === "parent" || Y === "opener") ES("Object", "assign", false, V.params, {channel_url: M._xdChannelHandler(S, Y === "parent" ? "parent.parent" : "opener")}, true);
                            V = M.prepareParams(V);
                            return V
                        },
                        prepareParams: function N(O) {
                            __p && __p();
                            if (O.params.display !== "async") delete O.params.method;
                            O.params.kid_directed_site = s.getKidDirectedSite() || O.params.kid_directed_site;
                            O.params = A(O.params);
                            var P = q.encode(O.params);
                            if (!u.nativeApp() && M.urlTooLongForIE(O.url + "?" + P)) O.post = true; else if (P) O.url += "?" + P;
                            return O
                        },
                        urlTooLongForIE: function N(O) {
                            return u.ie() && u.ie() <= 8 && O.length > 2048
                        },
                        getDisplayMode: function N(O, P) {
                            __p && __p();
                            if (P.display === "hidden" || P.display === "none" || P.display === "native") return P.display;
                            var Q = s.isEnvironment(s.ENVIRONMENTS.CANVAS) || s.isEnvironment(s.ENVIRONMENTS.PAGETAB);
                            if (Q && !P.display) return "async";
                            if (H(P) && i.supportsDialog("oauth")) return "async";
                            if (u.mobile() || P.display === "touch") return "touch";
                            if (P.display == "iframe" || P.display == "dialog") if (!M.canIframe(P)) {
                                o.error('"dialog" mode can only be used when the user is connected.');
                                return "popup"
                            }
                            if (O.connectDisplay && !Q) return O.connectDisplay;
                            return P.display || (M.canIframe(P) ? "dialog" : "popup")
                        },
                        canIframe: function N(O) {
                            if (s.getAccessToken()) return true;
                            if (u.mobile() && s.getLoggedIntoFacebook()) return !!O.mobile_iframe;
                            return false
                        },
                        getXdRelation: function N(O) {
                            var P = O.display;
                            if (P === "popup" || P === "touch") return "opener";
                            if (P === "dialog" || P === "iframe" || P === "hidden" || P === "none") return "parent";
                            if (P === "async") return "parent.frames[" + window.name + "]"
                        },
                        popup: function N(O) {
                            __p && __p();
                            var P = typeof window.screenX != "undefined" ? window.screenX : window.screenLeft,
                                Q = typeof window.screenY != "undefined" ? window.screenY : window.screenTop,
                                R = typeof window.outerWidth != "undefined" ? window.outerWidth : document.documentElement.clientWidth,
                                S = typeof window.outerHeight != "undefined" ? window.outerHeight : document.documentElement.clientHeight - 22,
                                T = u.mobile() ? null : O.size.width, U = u.mobile() ? null : O.size.height,
                                V = P < 0 ? window.screen.width + P : P, W = parseInt(V + (R - T) / 2, 10),
                                X = parseInt(Q + (S - U) / 2.5, 10), Y = [];
                            if (T !== null) Y.push("width=" + T);
                            if (U !== null) Y.push("height=" + U);
                            Y.push("left=" + W);
                            Y.push("top=" + X);
                            Y.push("scrollbars=1");
                            if (O.name == "permissions.request" || O.name == "permissions.oauth") {
                                Y.push("toolbar=0");
                                if (!u.chrome() || u.chrome() < 59) Y.push("location=1")
                            }
                            Y = Y.join(",");
                            var N;
                            if (O.post) {
                                N = window.open("about:blank", O.id, Y);
                                if (N) {
                                    M.setLoadedNode(O, N, "popup");
                                    j.submitToTarget({url: O.url, target: O.id, params: O.params})
                                }
                            } else {
                                N = window.open(O.url, O.id, Y);
                                if (N) M.setLoadedNode(O, N, "popup")
                            }
                            if (!N) return;
                            if (O.id in M._defaultCb) M._popupMonitor()
                        },
                        setLoadedNode: function N(O, P, Q) {
                            if (Q === "iframe") P.fbCallID = O.id;
                            P = {node: P, type: Q, fbCallID: O.id};
                            M._loadedNodes[O.id] = P
                        },
                        getLoadedNode: function N(O) {
                            var P = typeof O == "object" ? O.id : O, Q = M._loadedNodes[P];
                            return Q ? Q.node : null
                        },
                        hidden: function N(O) {
                            O.className = "FB_UI_Hidden";
                            O.root = j.appendHidden("");
                            M._insertIframe(O)
                        },
                        iframe: function N(O) {
                            __p && __p();
                            O.className = "FB_UI_Dialog";
                            if (O.params.mobile_iframe) {
                                l.setForceTabletStyle(true);
                                l.setCloseOnOverlayTap(true);
                                l.setPositionDialogAtTopWhenPortrait(true)
                            }
                            var P = function P() {
                                var R = ES("JSON", "stringify", false, {
                                    error_code: 4201,
                                    error_message: z._("User canceled the Dialog flow")
                                });
                                M._triggerDefault(O.id, R)
                            }, Q = {
                                onClose: P,
                                closeIcon: O.closeIcon === undefined ? true : O.closeIcon,
                                classes: l.isTabletStyle() ? "centered" : ""
                            };
                            if (O.params.mobile_iframe) Q.styles = {"border-radius": "8px"};
                            O.root = l.create(Q);
                            if (!O.hideLoader) l.showLoader(P, O.size.width);
                            k.addCss(O.root, "fb_dialog_iframe");
                            M._insertIframe(O)
                        },
                        touch: function N(O) {
                            __p && __p();
                            if (O.params && O.params.in_iframe) if (O.ui_created) l.showLoader(function () {
                                M._triggerDefault(O.id, null)
                            }, 0); else M.iframe(O); else if (u.nativeApp() && !O.ui_created) {
                                O.frame = O.id;
                                p.onready(function () {
                                    M.setLoadedNode(O, p.open(O.url + "#cb=" + O.frameName), "native")
                                });
                                M._popupMonitor()
                            } else if (!O.ui_created) M.popup(O)
                        },
                        async: function N(O) {
                            __p && __p();
                            O.params.redirect_uri = location.protocol + "//" + location.host + location.pathname;
                            delete O.params.access_token;
                            var P = function P(Q) {
                                var R = Q.result;
                                if (R && R.e2e) {
                                    var S = l.get(O.id);
                                    S.trackEvents(R.e2e);
                                    S.trackEvent("close");
                                    delete R.e2e
                                }
                                O.cb(R)
                            };
                            if (H(O.params) && i.supportsDialog("oauth")) {
                                O.params.method = "oauth";
                                O.params.redirect_uri = O.params.next;
                                i.remote.showDialog(O.params, P)
                            } else r.remote.showDialog(O.params, P)
                        },
                        "native": function N(O) {
                            E(O.params)
                        },
                        getDefaultSize: function N() {
                            return l.getDefaultSize()
                        },
                        _insertIframe: function N(O) {
                            M._loadedNodes[O.id] = false;
                            var P = function P(Q) {
                                if (O.id in M._loadedNodes) M.setLoadedNode(O, Q, "iframe")
                            };
                            if (O.post) D({
                                url: "about:blank",
                                root: O.root,
                                className: O.className,
                                width: O.size.width,
                                height: O.size.height,
                                id: O.id,
                                onInsert: P,
                                onload: function Q(R) {
                                    j.submitToTarget({url: O.url, target: R.name, params: O.params})
                                }
                            }); else D({
                                url: O.url,
                                root: O.root,
                                className: O.className,
                                width: O.size.width,
                                height: O.size.height,
                                id: O.id,
                                name: O.frameName,
                                onInsert: P
                            })
                        },
                        _handleResizeMessage: function N(O, P) {
                            __p && __p();
                            var Q = M.getLoadedNode(O);
                            if (!Q) return;
                            if (P.height) Q.style.height = P.height + "px";
                            if (P.width) Q.style.width = P.width + "px";
                            w.inform("resize.ack", P || {}, "parent.frames[" + Q.name + "]");
                            if (!l.isActive(Q)) l.show(Q); else l._centerActive()
                        },
                        _triggerDefault: function N(O, P) {
                            var Q = {frame: O};
                            if (P) Q.result = P;
                            M._xdRecv(Q, M._defaultCb[O] || function () {
                            })
                        },
                        _popupMonitor: function N() {
                            __p && __p();
                            var O;
                            for (var P in M._loadedNodes) if (Object.prototype.hasOwnProperty.call(M._loadedNodes, P) && P in M._defaultCb) {
                                var Q = M._loadedNodes[P];
                                if (Q.type != "popup" && Q.type != "native") continue;
                                var R = Q.node;
                                try {
                                    if (R.closed) M._triggerDefault(P, null); else O = true
                                } catch (S) {
                                }
                            }
                            if (O && !M._popupInterval) M._popupInterval = setInterval(M._popupMonitor, 100); else if (!O && M._popupInterval) {
                                clearInterval(M._popupInterval);
                                M._popupInterval = null
                            }
                        },
                        _xdChannelHandler: function N(O, P) {
                            __p && __p();
                            return w.handler(function (Q) {
                                __p && __p();
                                var R = M.getLoadedNode(O);
                                if (!R) return;
                                if (Q.type == "resize") M._handleResizeMessage(O, Q); else if (Q.type == "hide") l.hide(R); else if (Q.type == "rendered") {
                                    var S = l._findRoot(R);
                                    l.show(S)
                                } else if (Q.type == "fireevent") m.fire(Q.event, Q)
                            }, P, true, null)
                        },
                        _xdNextHandler: function N(O, P, Q, R) {
                            if (R) M._defaultCb[P] = O;
                            return w.handler(function (S) {
                                M._xdRecv(S, O)
                            }, Q) + "&frame=" + P
                        },
                        _xdRecv: function N(O, P) {
                            __p && __p();
                            var Q = M.getLoadedNode(O.frame);
                            if (Q) if (Q.close) try {
                                Q.close();
                                if (/iPhone.*Version\/(5|6)/.test(navigator.userAgent) && RegExp.$1 !== "5") window.focus();
                                M._popupCount--
                            } catch (R) {
                            } else if (k.containsCss(Q, "FB_UI_Hidden")) setTimeout(function () {
                                Q.parentNode.parentNode.removeChild(Q.parentNode)
                            }, 3e3); else if (k.containsCss(Q, "FB_UI_Dialog")) l.remove(Q);
                            delete M._loadedNodes[O.frame];
                            delete M._defaultCb[O.frame];
                            if (O.e2e) {
                                var S = l.get(O.frame);
                                S.trackEvents(O.e2e);
                                S.trackEvent("close");
                                delete O.e2e
                            }
                            P(O)
                        },
                        _xdResult: function N(O, P, Q, R) {
                            return M._xdNextHandler(function (S) {
                                O && O(S.result && S.result != M._resultToken && ES("JSON", "parse", false, S.result))
                            }, P, Q, R) + "&result=" + encodeURIComponent(M._resultToken)
                        },
                        xdHandler: function N(O, P, Q, R, S, T) {
                            return M._xdNextHandler(h.xdResponseWrapper(O, R, S), P, Q, T)
                        }
                    };
                    i.stub("showDialog");
                    r.stub("showDialog");
                    f.exports = M
                }), null);
                __d("sdk.ui", ["Assert", "sdk.Impressions", "Log", "sdk.PlatformVersioning", "sdk.Runtime", "sdk.UIServer", "sdk.feature"], (function a(b, c, d, e, f, g, h, i, j, k, l, m, n) {
                    __p && __p();

                    function o(p, q) {
                        __p && __p();
                        h.isObject(p);
                        h.maybeFunction(q);
                        if (l.getIsVersioned()) {
                            k.assertVersionIsSet();
                            if (p.version) k.assertValidVersion(p.version); else p.version = l.getVersion()
                        }
                        p = ES("Object", "assign", false, {}, p);
                        if (!p.method) {
                            j.error('"method" is a required parameter for FB.ui().');
                            return null
                        }
                        if (p.method == "pay.prompt") p.method = "pay";
                        var r = p.method;
                        if (p.redirect_uri) {
                            j.warn("When using FB.ui, you should not specify a redirect_uri.");
                            delete p.redirect_uri
                        }
                        if ((r == "permissions.request" || r == "permissions.oauth") && (p.display == "iframe" || p.display == "dialog")) p.display = m.checkOauthDisplay(p);
                        if (p.display === "native" && r !== "send") {
                            j.error('display type "native" not supported');
                            return null
                        }
                        var s = n("e2e_tracking", true);
                        if (s) p.e2e = {};
                        var t = m.prepareCall(p, q || function () {
                        });
                        if (!t) return null;
                        var u = t.params.display;
                        if (u === "dialog") u = "iframe"; else if (u === "none") u = "hidden";
                        var v = m[u];
                        if (!v) {
                            j.error('"display" must be one of "popup", "dialog", "iframe", "touch", "async", "hidden", or "none"');
                            return null
                        }
                        if (s) t.dialog.subscribe("e2e:end", function (w) {
                            w.method = r;
                            w.display = u;
                            j.debug("e2e: %s", ES("JSON", "stringify", false, w));
                            i.log(114, {payload: w})
                        });
                        v(t);
                        return t.dialog
                    }

                    f.exports = o
                }), null);
                __d("legacy:fb.auth", ["sdk.Auth", "sdk.Cookie", "sdk.Event", "FB", "Log", "sdk.Runtime", "sdk.SignedRequest", "sdk.ui"], (function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
                    __p && __p();
                    k.provide("", {
                        getLoginStatus: function p() {
                            return h.getLoginStatus.apply(h, arguments)
                        }, getAuthResponse: function p() {
                            return h.getAuthResponse()
                        }, getAccessToken: function p() {
                            return m.getAccessToken() || null
                        }, getUserID: function p() {
                            return m.getUserID() || m.getCookieUserID()
                        }, login: function p(q, r) {
                            if (r && r.perms && !r.scope) {
                                r.scope = r.perms;
                                delete r.perms;
                                l.warn("OAuth2 specification states that 'perms' should now be called 'scope'.  Please update.")
                            }
                            var s = m.isEnvironment(m.ENVIRONMENTS.CANVAS) || m.isEnvironment(m.ENVIRONMENTS.PAGETAB);
                            o(babelHelpers["extends"]({
                                method: "permissions.oauth",
                                display: s ? "async" : "popup",
                                domain: location.hostname
                            }, r || {}), q)
                        }, logout: function p(q) {
                            o({method: "auth.logout", display: "hidden"}, q)
                        }
                    });
                    h.subscribe("logout", ES(j.fire, "bind", true, j, "auth.logout"));
                    h.subscribe("login", ES(j.fire, "bind", true, j, "auth.login"));
                    h.subscribe("authresponse.change", ES(j.fire, "bind", true, j, "auth.authResponseChange"));
                    h.subscribe("status.change", ES(j.fire, "bind", true, j, "auth.statusChange"));
                    j.subscribe("init:post", function (p) {
                        __p && __p();
                        if (p.status) h.getLoginStatus();
                        if (m.getClientID()) if (p.authResponse) h.setAuthResponse(p.authResponse, "connected"); else if (m.getUseCookie()) {
                            var q = i.loadSignedRequest(), r;
                            if (q) {
                                try {
                                    r = n.parse(q)
                                } catch (s) {
                                    i.clearSignedRequestCookie()
                                }
                                if (r && r.user_id) m.setCookieUserID(r.user_id)
                            }
                            i.loadMeta()
                        }
                    })
                }), 3);
                __d("sdk.Canvas.IframeHandling", ["DOMWrapper", "sdk.RPC"], (function a(b, c, d, e, f, g, h, i) {
                    __p && __p();
                    var j = null, k;

                    function l() {
                        var p = h.getWindow().document, q = p.body, r = p.documentElement, s = Math.max(q.offsetTop, 0),
                            t = Math.max(r.offsetTop, 0), u = q.scrollHeight + s, v = q.offsetHeight + s,
                            w = r.scrollHeight + t, x = r.offsetHeight + t;
                        return Math.max(u, v, w, x)
                    }

                    function m(p) {
                        __p && __p();
                        if (typeof p != "object") p = {};
                        var q = 0, r = 0;
                        if (!p.height) {
                            p.height = l();
                            q = 16;
                            r = 4
                        }
                        if (!p.frame) p.frame = window.name || "iframe_canvas";
                        if (k) {
                            var s = k.height, t = p.height - s;
                            if (t <= r && t >= -q) return false
                        }
                        k = p;
                        i.remote.setSize(p);
                        return true
                    }

                    function n(p, q) {
                        __p && __p();
                        if (q === undefined && typeof p === "number") {
                            q = p;
                            p = true
                        }
                        if (p || p === undefined) {
                            if (j === null) j = setInterval(function () {
                                m()
                            }, q || 100);
                            m()
                        } else if (j !== null) {
                            clearInterval(j);
                            j = null
                        }
                    }

                    i.stub("setSize");
                    var o = {setSize: m, setAutoGrow: n};
                    f.exports = o
                }), null);
                __d("sdk.Canvas.Navigation", ["sdk.RPC"], (function a(b, c, d, e, f, g, h) {
                    function i(k) {
                        h.local.navigate = function (l) {
                            k({path: l})
                        };
                        h.remote.setNavigationEnabled(true)
                    }

                    h.stub("setNavigationEnabled");
                    var j = {setUrlHandler: i};
                    f.exports = j
                }), null);
                __d("sdk.Canvas.Plugin", ["Log", "sdk.RPC", "sdk.Runtime", "sdk.UA", "sdk.api"], (function a(b, c, d, e, f, g, h, i, j, k, l) {
                    __p && __p();
                    var m = "CLSID:D27CDB6E-AE6D-11CF-96B8-444553540000",
                        n = "CLSID:444785F1-DE89-4295-863A-D46C3A781394", o = null,
                        p = k.osx() && k.osx.getVersionParts(),
                        q = !(p && p[0] > 10 && p[1] > 10 && (k.chrome() >= 31 || k.webkit() >= 537.71 || k.firefox() >= 25));

                    function r(B) {
                        B._hideunity_savedstyle = {};
                        B._hideunity_savedstyle.left = B.style.left;
                        B._hideunity_savedstyle.position = B.style.position;
                        B._hideunity_savedstyle.width = B.style.width;
                        B._hideunity_savedstyle.height = B.style.height;
                        B.style.left = "-10000px";
                        B.style.position = "absolute";
                        B.style.width = "1px";
                        B.style.height = "1px"
                    }

                    function s(B) {
                        if (B._hideunity_savedstyle) {
                            B.style.left = B._hideunity_savedstyle.left;
                            B.style.position = B._hideunity_savedstyle.position;
                            B.style.width = B._hideunity_savedstyle.width;
                            B.style.height = B._hideunity_savedstyle.height
                        }
                    }

                    function t(B) {
                        B._old_visibility = B.style.visibility;
                        B.style.visibility = "hidden"
                    }

                    function u(B) {
                        B.style.visibility = B._old_visibility || "";
                        delete B._old_visibility
                    }

                    function v(B) {
                        __p && __p();
                        var C = B.type ? B.type.toLowerCase() : null,
                            D = C === "application/x-shockwave-flash" || B.classid && B.classid.toUpperCase() == m;
                        if (!D) return false;
                        var E = /opaque|transparent/i;
                        if (E.test(B.getAttribute("wmode"))) return false;
                        for (var F = 0; F < B.childNodes.length; F++) {
                            var G = B.childNodes[F];
                            if (/param/i.test(G.nodeName) && /wmode/i.test(G.name) && E.test(G.value)) return false
                        }
                        return true
                    }

                    function w(B) {
                        var C = B.type ? B.type.toLowerCase() : null;
                        return C === "application/vnd.unity" || B.classid && B.classid.toUpperCase() == n
                    }

                    function x(B) {
                        __p && __p();
                        var C = ES("Array", "from", false, window.document.getElementsByTagName("object"));
                        C = C.concat(ES("Array", "from", false, window.document.getElementsByTagName("embed")));
                        var D = false, E = false;
                        ES(C, "forEach", true, function (G) {
                            __p && __p();
                            var H = v(G), I = q && w(G);
                            if (!H && !I) return;
                            D = D || H;
                            E = E || I;
                            var J = function J() {
                                if (B.state === "opened") if (H) t(G); else r(G); else if (H) u(G); else s(G)
                            };
                            if (o) {
                                h.info("Calling developer specified callback");
                                var K = {state: B.state, elem: G};
                                o(K);
                                setTimeout(J, 200)
                            } else J()
                        });
                        if (Math.random() <= 1 / 1e3) {
                            var F = {unity: E, flash: D};
                            l(j.getClientID() + "/occludespopups", "post", F)
                        }
                    }

                    i.local.hidePluginObjects = function () {
                        h.info("hidePluginObjects called");
                        x({state: "opened"})
                    };
                    i.local.showPluginObjects = function () {
                        h.info("showPluginObjects called");
                        x({state: "closed"})
                    };
                    i.local.showFlashObjects = i.local.showPluginObjects;
                    i.local.hideFlashObjects = i.local.hidePluginObjects;

                    function y() {
                        t();
                        r()
                    }

                    function z() {
                        u();
                        s()
                    }

                    var A = {
                        _setHidePluginCallback: function B(C) {
                            o = C
                        }, hidePluginElement: y, showPluginElement: z
                    };
                    f.exports = A
                }), null);
                __d("sdk.Canvas.Tti", ["sdk.RPC", "sdk.Runtime"], (function a(b, c, d, e, f, g, h, i) {
                    __p && __p();

                    function j(o, p) {
                        var q = {appId: i.getClientID(), time: ES("Date", "now", false), name: p}, r = [q];
                        if (o) r.push(function (s) {
                            o(s.result)
                        });
                        h.remote.logTtiMessage.apply(null, r)
                    }

                    function k() {
                        j(null, "StartIframeAppTtiTimer")
                    }

                    function l(o) {
                        j(o, "StopIframeAppTtiTimer")
                    }

                    function m(o) {
                        j(o, "RecordIframeAppTti")
                    }

                    h.stub("logTtiMessage");
                    var n = {setDoneLoading: m, startTimer: k, stopTimer: l};
                    f.exports = n
                }), null);
                __d("legacy:fb.canvas", ["Assert", "sdk.Canvas.Environment", "sdk.Event", "FB", "sdk.Canvas.IframeHandling", "sdk.Canvas.Navigation", "sdk.Canvas.Plugin", "sdk.RPC", "sdk.Runtime", "sdk.Canvas.Tti"], (function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q) {
                    __p && __p();
                    k.provide("Canvas", {
                        setSize: function r(s) {
                            h.maybeObject(s, "Invalid argument");
                            return l.setSize.apply(null, arguments)
                        }, setAutoGrow: function r() {
                            return l.setAutoGrow.apply(null, arguments)
                        }, getPageInfo: function r(s) {
                            h.isFunction(s, "Invalid argument");
                            return i.getPageInfo.apply(null, arguments)
                        }, scrollTo: function r(s, t) {
                            h.maybeNumber(s, "Invalid argument");
                            h.maybeNumber(t, "Invalid argument");
                            return i.scrollTo.apply(null, arguments)
                        }, setDoneLoading: function r(s) {
                            h.maybeFunction(s, "Invalid argument");
                            return q.setDoneLoading.apply(null, arguments)
                        }, startTimer: function r() {
                            return q.startTimer.apply(null, arguments)
                        }, stopTimer: function r(s) {
                            h.maybeFunction(s, "Invalid argument");
                            return q.stopTimer.apply(null, arguments)
                        }, getHash: function r(s) {
                            h.isFunction(s, "Invalid argument");
                            return m.getHash.apply(null, arguments)
                        }, setHash: function r(s) {
                            h.isString(s, "Invalid argument");
                            return m.setHash.apply(null, arguments)
                        }, setUrlHandler: function r(s) {
                            h.isFunction(s, "Invalid argument");
                            return m.setUrlHandler.apply(null, arguments)
                        }
                    });
                    o.local.fireEvent = ES(j.fire, "bind", true, j);
                    j.subscribe("init:post", function (r) {
                        if (p.isEnvironment(p.ENVIRONMENTS.CANVAS)) {
                            h.isTrue(!r.hideFlashCallback || !r.hidePluginCallback, "cannot specify deprecated hideFlashCallback and new hidePluginCallback");
                            n._setHidePluginCallback(r.hidePluginCallback || r.hideFlashCallback)
                        }
                    })
                }), 3);
                __d("legacy:fb.canvas.plugin", ["FB", "sdk.Canvas.Plugin"], (function a(b, c, d, e, f, g, h, i) {
                    h.provide("Canvas.Plugin", i)
                }), 3);
                __d("sdk.Canvas.Prefetcher", ["JSSDKCanvasPrefetcherConfig", "sdk.Runtime", "sdk.api"], (function a(b, c, d, e, f, g, h, i, j) {
                    __p && __p();
                    var k = {AUTOMATIC: 0, MANUAL: 1}, l = h.sampleRate, m = h.blacklist, n = k.AUTOMATIC, o = [];

                    function p() {
                        __p && __p();
                        var u = {object: "data", link: "href", script: "src"};
                        if (n == k.AUTOMATIC) ES(ES("Object", "keys", false, u), "forEach", true, function (v) {
                            var w = u[v];
                            ES(ES("Array", "from", false, document.getElementsByTagName(v)), "forEach", true, function (x) {
                                if (x[w]) o.push(x[w])
                            })
                        });
                        if (o.length === 0) return;
                        j(i.getClientID() + "/staticresources", "post", {
                            urls: ES("JSON", "stringify", false, o),
                            is_https: location.protocol === "https:"
                        });
                        o = []
                    }

                    function q() {
                        if (!i.isEnvironment(i.ENVIRONMENTS.CANVAS) || !i.getClientID() || !l) return;
                        if (Math.random() > 1 / l || m == "*" || ~ES(m, "indexOf", true, i.getClientID())) return;
                        setTimeout(p, 3e4)
                    }

                    function r(u) {
                        n = u
                    }

                    function s(u) {
                        o.push(u)
                    }

                    var t = {
                        COLLECT_AUTOMATIC: k.AUTOMATIC,
                        COLLECT_MANUAL: k.MANUAL,
                        addStaticResource: s,
                        setCollectionMode: r,
                        _maybeSample: q
                    };
                    f.exports = t
                }), null);
                __d("legacy:fb.canvas.prefetcher", ["FB", "sdk.Canvas.Prefetcher", "sdk.Event", "sdk.Runtime"], (function a(b, c, d, e, f, g, h, i, j, k) {
                    h.provide("Canvas.Prefetcher", i);
                    j.subscribe("init:post", function (l) {
                        if (k.isEnvironment(k.ENVIRONMENTS.CANVAS)) i._maybeSample()
                    })
                }), 3);
                __d("legacy:fb.canvas.presence", ["sdk.RPC", "sdk.Event"], (function a(b, c, d, e, f, g, h, i) {
                    __p && __p();
                    i.subscribe(i.SUBSCRIBE, j);
                    i.subscribe(i.UNSUBSCRIBE, k);
                    h.stub("useFriendsOnline");

                    function j(l, m) {
                        if (l != "canvas.friendsOnlineUpdated") return;
                        if (m.length === 1) h.remote.useFriendsOnline(true)
                    }

                    function k(l, m) {
                        if (l != "canvas.friendsOnlineUpdated") return;
                        if (m.length === 0) h.remote.useFriendsOnline(false)
                    }
                }), 3);
                __d("legacy:fb.canvas.syncrequests", ["sdk.RPC", "sdk.Event"], (function a(b, c, d, e, f, g, h, i) {
                    h.stub("initPendingSyncRequests");

                    function j(k, l) {
                        if (k != "canvas.syncRequestUpdated") return;
                        h.remote.initPendingSyncRequests();
                        i.unsubscribe(i.SUBSCRIBE, j)
                    }

                    i.subscribe(i.SUBSCRIBE, j)
                }), 3);
                __d("legacy:fb.event", ["FB", "sdk.Event", "sdk.Runtime", "sdk.Scribe", "sdk.feature"], (function a(b, c, d, e, f, g, h, i, j, k, l) {
                    __p && __p();
                    var m = [], n = null, o = l("event_subscriptions_log", false);
                    h.provide("Event", {
                        subscribe: function p(q, r) {
                            if (o) {
                                m.push(q);
                                if (!n) n = setTimeout(function () {
                                    k.log("jssdk_error", {
                                        appId: j.getClientID(),
                                        error: "EVENT_SUBSCRIPTIONS_LOG",
                                        extra: {
                                            line: 0,
                                            name: "EVENT_SUBSCRIPTIONS_LOG",
                                            script: "N/A",
                                            stack: "N/A",
                                            message: m.sort().join(",")
                                        }
                                    });
                                    m.length = 0;
                                    n = null
                                }, o)
                            }
                            return i.subscribe(q, r)
                        }, unsubscribe: ES(i.unsubscribe, "bind", true, i)
                    })
                }), 3);
                __d("legacy:fb.frictionless", ["FB", "sdk.Frictionless"], (function a(b, c, d, e, f, g, h, i) {
                    h.provide("Frictionless", i)
                }), 3);
                __d("sdk.MBasicInitializer", ["sdk.DOM", "sdk.Runtime", "sdk.UA", "sdk.URI", "UrlMap", "sdk.fbt", "sdk.feature"], (function a(b, c, d, e, f, g, h, i, j, k, l, m, n) {
                    __p && __p();
                    var o = function o() {
                        __p && __p();

                        function q(r) {
                            __p && __p();
                            if (!r) return;
                            var s = r.parentNode;
                            if (!s) return;
                            var t = h.getAttr(r, "href") || window.location.href, u = new k(l.resolve("m"));
                            u.setPath("/dialog/share");
                            u.addQueryData("href", encodeURI(t));
                            u.addQueryData("app_id", i.getClientID());
                            u.addQueryData("mbasic_link", 1);
                            var v = document.createElement("a");
                            v.style = "display:inline-block; zoom:1;";
                            v.textContent = m._("Sd\u00edlet na Facebooku");
                            v.setAttribute("href", u.toString());
                            v.setAttribute("target", "_blank");
                            s.insertBefore(v, r);
                            s.removeChild(r)
                        }

                        if (!n("js_sdk_mbasic_share_plugin_init", false)) return;
                        ES(ES("Array", "from", false, document.getElementsByTagName("fb:share-button")), "forEach", true, function (r) {
                            return q(r)
                        });
                        ES(ES("Array", "from", false, document.getElementsByClassName("fb-share-button")), "forEach", true, function (r) {
                            return q(r)
                        })
                    };

                    function p() {
                        if (!j.mBasic()) return;
                        o()
                    }

                    f.exports = {init: p}
                }), null);
                __d("sdk.init", ["sdk.Cookie", "sdk.ErrorHandling", "sdk.Event", "sdk.Impressions", "Log", "ManagedError", "sdk.MBasicInitializer", "sdk.PlatformVersioning", "QueryString", "sdk.Runtime", "sdk.UA", "sdk.URI", "sdk.feature"], (function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t) {
                    __p && __p();

                    function u(w) {
                        var x = typeof w === "number" && w > 0 || typeof w === "string" && /^[0-9a-f]{21,}$|^[0-9]{1,21}$/.test(w);
                        if (x) return w.toString();
                        l.warn("Invalid App Id: Must be a number or numeric string representing the application id.");
                        return null
                    }

                    function v(w) {
                        __p && __p();
                        if (q.getInitialized()) l.warn("FB.init has already been called - this could indicate a problem");
                        if (q.getIsVersioned()) {
                            if (Object.prototype.toString.call(w) !== "[object Object]") throw new m("Invalid argument");
                            if (w.authResponse) l.warn("Setting authResponse is not supported");
                            if (!w.version) w.version = new s(location.href).getQueryData().sdk_version;
                            o.assertValidVersion(w.version);
                            q.setVersion(w.version)
                        } else {
                            if (/number|string/.test(typeof w)) {
                                l.warn("FB.init called with invalid parameters");
                                w = {apiKey: w}
                            }
                            w = ES("Object", "assign", false, {status: true}, w || {})
                        }
                        var x = u(w.appId || w.apiKey);
                        if (x !== null) q.setClientID(x);
                        if ("scope" in w) q.setScope(w.scope);
                        if (w.cookie) {
                            q.setUseCookie(true);
                            if (typeof w.cookie === "string") h.setDomain(w.cookie)
                        }
                        if (w.kidDirectedSite) q.setKidDirectedSite(true);
                        if (w.autoLogAppEvents === "1" || w.autoLogAppEvents === "true") w.autoLogAppEvents = true;
                        q.setInitialized(true);
                        if (t("js_sdk_impression_on_load", true)) k.log(115, {});
                        if (r.mBasic()) n.init();
                        j.fire("init:post", w)
                    }

                    setTimeout(function () {
                        __p && __p();
                        var w = /(connect\.facebook\.net|\.facebook\.com\/assets.php).*?#(.*)/;
                        ES(ES("Array", "from", false, fb_fif_window.document.getElementsByTagName("script")), "forEach", true, function (x) {
                            __p && __p();
                            if (x.src) {
                                var y = w.exec(x.src);
                                if (y) {
                                    var z = p.decode(y[2]);
                                    for (var A in z) if (Object.prototype.hasOwnProperty.call(z, A)) {
                                        var B = z[A];
                                        if (B == "0") z[A] = 0
                                    }
                                    v(z)
                                }
                            }
                        });
                        if (window.fbAsyncInit && !window.fbAsyncInit.hasRun) {
                            j.fire("init:asyncstart");
                            window.fbAsyncInit.hasRun = true;
                            i.unguard(window.fbAsyncInit)()
                        }
                    }, 0);
                    f.exports = v
                }), null);
                __d("legacy:fb.init", ["FB", "sdk.init"], (function a(b, c, d, e, f, g, h, i) {
                    h.provide("", {init: i})
                }), 3);
                __d("sdk.Time", ["Log", "sdk.Impressions", "sdk.Runtime", "sdk.feature"], (function a(b, c, d, e, f, g, h, i, j, k) {
                    "use strict";
                    __p && __p();
                    var l = window.performance, m = l && "now" in l && "getEntriesByName" in l,
                        n = k("log_perf", false), o = void 0, p = {};

                    function q() {
                        __p && __p();
                        var s = l.getEntriesByName(j.getSDKUrl())[0];
                        if (s) {
                            p.fetchTime = parseInt(s.duration, 10);
                            if ("transferSize" in s) p.transferSize = parseInt(s.transferSize, 10);
                            h.debug("sdkperf: it took %s ms and %s bytes to load %s", parseInt(s.duration, 10), parseInt(s.transferSize, 10), j.getSDKUrl());
                            o = s.startTime;
                            p.ns = j.getSDKNS();
                            if (n) setTimeout(function () {
                                i.log(116, p)
                            }, 1e4)
                        }
                    }

                    var r = {
                        log: function s(t) {
                            if (!m || !n) return;
                            if (!o) q();
                            if (o) {
                                p[t] = parseInt(l.now() - o, 10);
                                h.debug("sdkperf: %s logged after %s ms", t, p[t])
                            }
                        }
                    };
                    f.exports = r
                }), null);
                __d("legacy:fb.time", ["sdk.Event", "sdk.Time"], (function a(b, c, d, e, f, g, h, i) {
                    "use strict";
                    h.subscribe("init:post", function () {
                        i.log("init")
                    });
                    h.subscribe("init:asyncstart", function () {
                        i.log("asyncstart")
                    })
                }), 3);
                __d("legacy:fb.ui", ["FB", "sdk.ui"], (function a(b, c, d, e, f, g, h, i) {
                    h.provide("", {ui: i})
                }), 3);
                __d("legacy:fb.versioned-sdk", ["sdk.Runtime"], (function a(b, c, d, e, f, g, h) {
                    h.setIsVersioned(true)
                }), 3);
                __d("runOnce", [], (function a(b, c, d, e, f, g) {
                    function h(i) {
                        var j, k;
                        return function () {
                            if (!j) {
                                j = true;
                                k = i()
                            }
                            return k
                        }
                    }

                    f.exports = h
                }), null);
                __d("XFBML", ["Assert", "sdk.DOM", "Log", "ObservableMixin", "sdk.UA", "runOnce"], (function a(b, c, d, e, f, g, h, i, j, k, l, m) {
                    __p && __p();
                    var n = {}, o = {}, p = 0, q = new k();

                    function r(y, z) {
                        return ES(y[z] + "", "trim", true)
                    }

                    function s(y) {
                        return y.scopeName ? y.scopeName + ":" + y.nodeName : ""
                    }

                    function t(y) {
                        return n[r(y, "nodeName").toLowerCase()] || n[s(y).toLowerCase()]
                    }

                    function u(y) {
                        var z = ES(r(y, "className").split(/\s+/), "filter", true, function (A) {
                            return Object.prototype.hasOwnProperty.call(o, A)
                        });
                        if (z.length === 0) return undefined;
                        if (y.getAttribute("fb-xfbml-state") || !y.childNodes || y.childNodes.length === 0 || y.childNodes.length === 1 && y.childNodes[0].nodeType === 3 || y.children.length === 1 && r(y.children[0], "className") === "fb-xfbml-parse-ignore") return o[z[0]]
                    }

                    function v(y) {
                        var z = {};
                        ES(ES("Array", "from", false, y.attributes), "forEach", true, function (A) {
                            z[r(A, "name")] = r(A, "value")
                        });
                        return z
                    }

                    function w(y, z, A) {
                        var B = document.createElement("div");
                        i.addCss(y, z + "-" + A);
                        ES(ES("Array", "from", false, y.childNodes), "forEach", true, function (C) {
                            B.appendChild(C)
                        });
                        ES(ES("Array", "from", false, y.attributes), "forEach", true, function (C) {
                            B.setAttribute(C.name, C.value)
                        });
                        y.parentNode.replaceChild(B, y);
                        return B
                    }

                    function x(y, z, A) {
                        __p && __p();
                        h.isTrue(y && y.nodeType && y.nodeType === 1 && !!y.getElementsByTagName, "Invalid DOM node passed to FB.XFBML.parse()");
                        h.isFunction(z, "Invalid callback passed to FB.XFBML.parse()");
                        var B = ++p;
                        j.info("XFBML Parsing Start %s", B);
                        var C = 1, D = 0, E = function E() {
                            C--;
                            if (C === 0) {
                                j.info("XFBML Parsing Finish %s, %s tags found", B, D);
                                z();
                                q.inform("render", B, D)
                            }
                            h.isTrue(C >= 0, "onrender() has been called too many times")
                        };
                        ES(ES("Array", "from", false, y.getElementsByTagName("*")), "forEach", true, function (G) {
                            __p && __p();
                            if (!A && G.getAttribute("fb-xfbml-state")) return;
                            if (G.nodeType !== 1) return;
                            var H = t(G) || u(G);
                            if (!H) return;
                            if (l.ie() < 9 && G.scopeName) G = w(G, H.xmlns, H.localName);
                            C++;
                            D++;
                            var I = new H.ctor(G, H.xmlns, H.localName, v(G));
                            I.subscribe("render", m(function () {
                                G.setAttribute("fb-xfbml-state", "rendered");
                                E()
                            }));
                            var J = function J() {
                                if (G.getAttribute("fb-xfbml-state") == "parsed") q.subscribe("render.queue", J); else {
                                    G.setAttribute("fb-xfbml-state", "parsed");
                                    I.process()
                                }
                            };
                            J()
                        });
                        q.inform("parse", B, D);
                        var F = 3e4;
                        setTimeout(function () {
                            if (C > 0) j.warn("%s tags failed to render in %s ms", C, F)
                        }, F);
                        E()
                    }

                    q.subscribe("render", function () {
                        var y = q.getSubscribers("render.queue");
                        q.clearSubscribers("render.queue");
                        ES(y, "forEach", true, function (z) {
                            z()
                        })
                    });
                    ES("Object", "assign", false, q, {
                        registerTag: function y(z) {
                            var A = z.xmlns + ":" + z.localName;
                            h.isUndefined(n[A], A + " already registered");
                            n[A] = z;
                            o[z.xmlns + "-" + z.localName] = z
                        }, parse: function y(z, A) {
                            x(z || document.body, A || function () {
                            }, true)
                        }, parseNew: function y() {
                            x(document.body, function () {
                            }, false)
                        }
                    });
                    f.exports = q
                }), null);
                __d("legacy:fb.xfbml", ["Assert", "sdk.Event", "FB", "XFBML", "sdk.domReady", "sdk.feature", "wrapFunction"], (function a(b, c, d, e, f, g, h, i, j, k, l, m, n) {
                    __p && __p();
                    j.provide("XFBML", {
                        parse: function p(q) {
                            h.maybeXfbml(q, "Invalid argument");
                            if (q && q.nodeType === 9) q = q.body;
                            return k.parse.apply(null, arguments)
                        }
                    });
                    k.subscribe("parse", ES(i.fire, "bind", true, i, "xfbml.parse"));
                    k.subscribe("render", ES(i.fire, "bind", true, i, "xfbml.render"));
                    i.subscribe("init:post", function (p) {
                        if (p.xfbml) setTimeout(n(ES(l, "bind", true, null, k.parse), "entry", "init:post:xfbml.parse"), 0)
                    });
                    h.define("Xfbml", function (p) {
                        return (p.nodeType === 1 || p.nodeType === 9) && typeof p.nodeName === "string"
                    });
                    try {
                        if (document.namespaces && !document.namespaces.item.fb) document.namespaces.add("fb")
                    } catch (o) {
                    }
                }), 3);
                __d("IframePlugin", ["sdk.Auth", "sdk.DOM", "sdk.Event", "Log", "ObservableMixin", "sdk.PlatformVersioning", "QueryString", "sdk.Runtime", "Type", "sdk.UA", "sdk.URI", "UrlMap", "sdk.XD", "sdk.createIframe", "sdk.feature", "guid", "resolveURI"], (function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x) {
                    __p && __p();
                    var y = {
                        skin: "string",
                        font: "string",
                        width: "string",
                        height: "px",
                        ref: "string",
                        color_scheme: "string"
                    };

                    function z(H, I, J) {
                        if (I || I === 0) if (I === "100%") H.style.width = "100%"; else H.style.width = I + "px";
                        if (J || J === 0) H.style.height = J + "px"
                    }

                    function A(H) {
                        return function (I) {
                            var J = {width: I.width, height: I.height, pluginID: H};
                            j.fire("xfbml.resize", J)
                        }
                    }

                    var B = {
                        string: function H(I) {
                            return I
                        }, bool: function H(I) {
                            return I ? /^(?:true|1|yes|on)$/i.test(I) : undefined
                        }, url: function H(I) {
                            return x(I)
                        }, url_maybe: function H(I) {
                            return I ? x(I) : I
                        }, hostname: function H(I) {
                            return I || window.location.hostname
                        }, px: function H(I) {
                            return /^(\d+)(?:px)?$/.test(I) ? parseInt(RegExp.$1, 10) : undefined
                        }, text: function H(I) {
                            return I
                        }
                    };

                    function C(H, I) {
                        var J = H[I] || H[I.replace(/_/g, "-")] || H[I.replace(/_/g, "")] || H["data-" + I] || H["data-" + I.replace(/_/g, "-")] || H["data-" + I.replace(/_/g, "")] || undefined;
                        return J
                    }

                    function D(H, I, J, K) {
                        ES(ES("Object", "keys", false, H), "forEach", true, function (L) {
                            if (H[L] == "text" && !J[L]) {
                                J[L] = I.textContent || I.innerText || "";
                                I.setAttribute(L, J[L])
                            }
                            K[L] = B[H[L]](C(J, L))
                        })
                    }

                    function E(H) {
                        if (H === "100%") return "100%";
                        return H || H === "0" || H === 0 ? parseInt(H, 10) : undefined
                    }

                    function F(H) {
                        if (H) z(H, 0, 0)
                    }

                    var G = p.extend({
                        constructor: function H(I, J, K, L) {
                            __p && __p();
                            this.parent();
                            K = K.replace(/-/g, "_");
                            var M = C(L, "plugin_id");
                            this.subscribe("xd.resize", A(M));
                            this.subscribe("xd.resize.flow", A(M));
                            this.subscribe("xd.resize.flow", ES(function (R) {
                                ES("Object", "assign", false, this._iframeOptions.root.style, {
                                    verticalAlign: "bottom",
                                    overflow: ""
                                });
                                z(this._iframeOptions.root, E(R.width), E(R.height));
                                this.updateLift();
                                clearTimeout(this._timeoutID)
                            }, "bind", true, this));
                            this.subscribe("xd.resize", ES(function (R) {
                                ES("Object", "assign", false, this._iframeOptions.root.style, {
                                    verticalAlign: "bottom",
                                    overflow: ""
                                });
                                z(this._iframeOptions.root, E(R.width), E(R.height));
                                z(this._iframe, E(R.width), E(R.height));
                                this._isIframeResized = true;
                                this.updateLift();
                                clearTimeout(this._timeoutID)
                            }, "bind", true, this));
                            this.subscribe("xd.resize.iframe", ES(function (R) {
                                if (R.reposition === "true" && v("reposition_iframe", false)) this.reposition(E(R.width));
                                z(this._iframe, E(R.width), E(R.height));
                                this._isIframeResized = true;
                                this.updateLift();
                                clearTimeout(this._timeoutID)
                            }, "bind", true, this));
                            this.subscribe("xd.sdk_event", function (R) {
                                var S = ES("JSON", "parse", false, R.data);
                                S.pluginID = M;
                                j.fire(R.event, S, I)
                            });
                            var N = s.resolve("www", true) + "/plugins/" + K + ".php?", O = {};
                            D(this.getParams(), I, L, O);
                            D(y, I, L, O);
                            ES("Object", "assign", false, O, {
                                app_id: o.getClientID(),
                                locale: o.getLocale(),
                                sdk: "joey",
                                kid_directed_site: o.getKidDirectedSite(),
                                channel: t.handler(ES(function (R) {
                                    return this.inform("xd." + R.type, R)
                                }, "bind", true, this), "parent.parent", true)
                            });
                            if (this.shouldIgnoreWidth()) O.width = void 0;
                            O.container_width = I.offsetWidth;
                            i.addCss(I, "fb_iframe_widget");
                            var P = w();
                            this.subscribe("xd.verify", function (R) {
                                t.sendToFacebook(P, {
                                    method: "xd/verify",
                                    params: ES("JSON", "stringify", false, R.token)
                                })
                            });
                            this.subscribe("xd.refreshLoginStatus", ES(function () {
                                h.removeLogoutState();
                                h.getLoginStatus(ES(this.inform, "bind", true, this, "login.status"), true)
                            }, "bind", true, this));
                            var Q = document.createElement("span");
                            ES("Object", "assign", false, Q.style, {
                                verticalAlign: "top",
                                width: "0px",
                                height: "0px",
                                overflow: "hidden"
                            });
                            this._element = I;
                            this._ns = J;
                            this._tag = K;
                            this._params = O;
                            this._config = this.getConfig();
                            this._iframeOptions = {
                                root: Q,
                                url: N + n.encode(O),
                                name: P,
                                width: this._config.mobile_fullsize && q.mobile() ? void 0 : O.width || 1e3,
                                height: O.height || 1e3,
                                style: {border: "none", visibility: "hidden"},
                                title: this._ns + ":" + this._tag + " Facebook Social Plugin",
                                onload: ES(function () {
                                    return this.inform("render")
                                }, "bind", true, this),
                                onerror: ES(function () {
                                    return F(this._iframe)
                                }, "bind", true, this)
                            };
                            if (this.isFluid() && O.width !== "auto") {
                                i.addCss(this._element, "fb_iframe_widget_fluid_desktop");
                                if (!O.width && this._config.full_width) {
                                    this._element.style.width = "100%";
                                    this._iframeOptions.root.style.width = "100%";
                                    this._iframeOptions.style.width = "100%";
                                    this._params.container_width = this._element.offsetWidth;
                                    this._iframeOptions.url = N + n.encode(this._params)
                                }
                            }
                        }, shouldIgnoreWidth: function H() {
                            return q.mobile() && this.getConfig().mobile_fullsize
                        }, useInlineHeightForMobile: function H() {
                            return true
                        }, process: function H() {
                            __p && __p();
                            if (o.getIsVersioned()) {
                                m.assertVersionIsSet();
                                var I = new r(this._iframeOptions.url);
                                this._iframeOptions.url = I.setPath("/" + o.getVersion() + I.getPath()).toString()
                            }
                            var J = ES("Object", "assign", false, {}, this._params);
                            delete J.channel;
                            var K = n.encode(J);
                            if (this._element.getAttribute("fb-iframe-plugin-query") == K) {
                                k.info("Skipping render: %s:%s %s", this._ns, this._tag, K);
                                this.inform("render");
                                return
                            }
                            this._element.setAttribute("fb-iframe-plugin-query", K);
                            this.subscribe("render", ES(function () {
                                this._iframe.style.visibility = "visible";
                                if (!this._isIframeResized) F(this._iframe)
                            }, "bind", true, this));
                            while (this._element.firstChild) this._element.removeChild(this._element.firstChild);
                            this._element.appendChild(this._iframeOptions.root);
                            var L = q.mobile() ? 120 : 45;
                            this._timeoutID = setTimeout(ES(function () {
                                F(this._iframe);
                                k.warn("%s:%s failed to resize in %ss", this._ns, this._tag, L)
                            }, "bind", true, this), L * 1e3);
                            this._iframe = u(this._iframeOptions);
                            if (q.mobile() || J.width === "auto") {
                                if (this.useInlineHeightForMobile()) i.addCss(this._element, "fb_iframe_widget_fluid");
                                if (!this._iframeOptions.width) {
                                    ES("Object", "assign", false, this._element.style, {
                                        display: "block",
                                        width: "100%",
                                        height: "auto"
                                    });
                                    ES("Object", "assign", false, this._iframeOptions.root.style, {
                                        width: "100%",
                                        height: "auto"
                                    });
                                    var M = {height: "auto", position: "static", width: "100%"};
                                    if (q.iphone() || q.ipad()) ES("Object", "assign", false, M, {
                                        width: "220px",
                                        "min-width": "100%"
                                    });
                                    ES("Object", "assign", false, this._iframe.style, M)
                                }
                            }
                        }, getConfig: function H() {
                            return {}
                        }, isFluid: function H() {
                            var I = this.getConfig();
                            return I.fluid
                        }, reposition: function H(I) {
                            __p && __p();
                            var J = i.getPosition(this._iframe).x, K = i.getViewportInfo().width,
                                L = parseInt(i.getStyle(this._iframe, "width"), 10), M = {};
                            if (J + I > K && J > I) {
                                this._iframe.style.left = parseInt(i.getStyle(this._iframe, "width"), 10) - I + "px";
                                this._isRepositioned = true;
                                M.type = "reposition"
                            } else if (this._isRepositioned && L - I !== 0) {
                                this._iframe.style.left = "0px";
                                this._isRepositioned = false;
                                M.type = "restore"
                            } else return;
                            t.sendToFacebook(this._iframe.name, {
                                method: "xd/reposition",
                                params: ES("JSON", "stringify", false, M)
                            })
                        }, updateLift: function H() {
                            var I = this._iframe.style.width === this._iframeOptions.root.style.width && this._iframe.style.height === this._iframeOptions.root.style.height;
                            i[I ? "removeCss" : "addCss"](this._iframe, "fb_iframe_widget_lift")
                        }
                    }, l);
                    G.getVal = C;
                    G.withParams = function (H, I) {
                        return G.extend({
                            getParams: function J() {
                                return H
                            }, getConfig: function J() {
                                return I ? I : {}
                            }
                        })
                    };
                    f.exports = G
                }), null);
                __d("PluginConfig", ["sdk.feature"], (function a(b, c, d, e, f, g, h) {
                    var i = {
                        comment_embed: {mobile_fullsize: true},
                        messengerpreconfirmation: {mobile_fullsize: true},
                        messengeraccountconfirmation: {mobile_fullsize: true},
                        messengerbusinesslink: {mobile_fullsize: true},
                        messengertoggle: {mobile_fullsize: true},
                        messengermessageus: {mobile_fullsize: true},
                        post: {fluid: h("fluid_embed", false), mobile_fullsize: true},
                        send_to_messenger: {mobile_fullsize: true}
                    };
                    f.exports = i
                }), null);
                __d("PluginAttrTypes", [], (function a(b, c, d, e, f, g) {
                    "use strict";
                    var h = {string: "string", bool: "bool", url: "url"};
                    f.exports = h
                }), null);
                __d("PluginTags", ["PluginAttrTypes"], (function a(b, c, d, e, f, g, h) {
                    var i = {
                        comment_embed: {href: h.url, include_parent: h.bool},
                        composer: {action_type: h.string, action_properties: h.string},
                        create_event_button: {},
                        group: {
                            href: h.url,
                            show_social_context: h.bool,
                            show_group_info: h.bool,
                            show_metadata: h.bool
                        },
                        like: {
                            href: h.url,
                            layout: h.string,
                            show_faces: h.bool,
                            share: h.bool,
                            action: h.string,
                            send: h.bool,
                            size: h.string
                        },
                        like_box: {
                            href: h.string,
                            show_faces: h.bool,
                            header: h.bool,
                            stream: h.bool,
                            force_wall: h.bool,
                            show_border: h.bool,
                            id: h.string,
                            connections: h.string,
                            profile_id: h.string,
                            name: h.string
                        },
                        page: {
                            href: h.string,
                            hide_cta: h.bool,
                            hide_cover: h.bool,
                            small_header: h.bool,
                            adapt_container_width: h.bool,
                            show_facepile: h.bool,
                            show_posts: h.bool,
                            tabs: h.string
                        },
                        messenger_checkbox: {
                            messenger_app_id: h.string,
                            page_id: h.string,
                            pixel_id: h.string,
                            prechecked: h.bool,
                            allow_login: h.bool,
                            size: h.string,
                            origin: h.string,
                            user_ref: h.string,
                            identity_match: h.string,
                            center_align: h.bool
                        },
                        messengerpreconfirmation: {messenger_app_id: h.string, page_id: h.string},
                        messengeraccountconfirmation: {messenger_app_id: h.string, page_id: h.string, state: h.string},
                        messengerbusinesslink: {messenger_app_id: h.string, page_id: h.string, state: h.string},
                        messengertoggle: {
                            messenger_app_id: h.string,
                            page_id: h.string,
                            token: h.string,
                            psid: h.string
                        },
                        messengermessageus: {
                            messenger_app_id: h.string,
                            page_id: h.string,
                            color: h.string,
                            size: h.string
                        },
                        send_to_messenger: {
                            messenger_app_id: h.string,
                            page_id: h.string,
                            color: h.string,
                            size: h.string,
                            enforce_login: h.bool,
                            identity_match: h.string,
                            origin: h.string
                        },
                        page_events: {href: h.url},
                        post: {href: h.url, show_text: h.bool},
                        profile_pic: {
                            uid: h.string,
                            linked: h.bool,
                            href: h.string,
                            size: h.string,
                            facebook_logo: h.bool
                        },
                        send_to_mobile: {max_rows: h.string, show_faces: h.bool, size: h.string}
                    }, j = {subscribe: "follow", fan: "like_box", likebox: "like_box"};
                    ES(ES("Object", "keys", false, j), "forEach", true, function (k) {
                        i[k] = i[j[k]]
                    });
                    f.exports = i
                }), null);
                __d("sdk.Arbiter", [], (function a(b, c, d, e, f, g) {
                    var h = {BEHAVIOR_EVENT: "e", BEHAVIOR_PERSISTENT: "p", BEHAVIOR_STATE: "s"};
                    f.exports = h
                }), null);
                __d("sdk.XFBML.Element", ["sdk.DOM", "Type", "ObservableMixin"], (function a(b, c, d, e, f, g, h, i, j) {
                    __p && __p();
                    var k = i.extend({
                        constructor: function l(m) {
                            this.parent();
                            this.dom = m
                        }, fire: function l() {
                            this.inform.apply(this, arguments)
                        }, getAttribute: function l(m, n, o) {
                            var p = h.getAttr(this.dom, m);
                            return p ? o ? o(p) : p : n
                        }, _getBoolAttribute: function l(m, n) {
                            var o = h.getBoolAttr(this.dom, m);
                            return o === null ? n : o
                        }, _getPxAttribute: function l(m, n) {
                            return this.getAttribute(m, n, function (o) {
                                var p = parseInt(o, 10);
                                return isNaN(p) ? n : p
                            })
                        }, _getLengthAttribute: function l(m, n) {
                            return this.getAttribute(m, n, function (o) {
                                if (o === "100%" || o === "auto") return o;
                                var p = parseInt(o, 10);
                                return isNaN(p) ? n : p
                            })
                        }, _getAttributeFromList: function l(m, n, o) {
                            return this.getAttribute(m, n, function (p) {
                                p = p.toLowerCase();
                                return ES(o, "indexOf", true, p) > -1 ? p : n
                            })
                        }, isValid: function l() {
                            for (var m = this.dom; m; m = m.parentNode) if (m == document.body) return true
                        }, clear: function l() {
                            h.html(this.dom, "")
                        }
                    }, j);
                    f.exports = k
                }), null);
                __d("sdk.XFBML.IframeWidget", ["sdk.Arbiter", "sdk.Auth", "sdk.Content", "sdk.DOM", "sdk.Event", "sdk.XFBML.Element", "guid", "insertIframe", "QueryString", "sdk.Runtime", "sdk.ui", "UrlMap", "sdk.XD"], (function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t) {
                    __p && __p();
                    var u = m.extend({
                        _iframeName: null,
                        _showLoader: true,
                        _refreshOnAuthChange: false,
                        _allowReProcess: false,
                        _fetchPreCachedLoader: false,
                        _visibleAfter: "load",
                        _widgetPipeEnabled: false,
                        _borderReset: false,
                        _repositioned: false,
                        getUrlBits: function w() {
                            throw new Error("Inheriting class needs to implement getUrlBits().")
                        },
                        setupAndValidate: function w() {
                            return true
                        },
                        oneTimeSetup: function w() {
                        },
                        getSize: function w() {
                        },
                        getIframeName: function w() {
                            return this._iframeName
                        },
                        getIframeTitle: function w() {
                            return "Facebook Social Plugin"
                        },
                        getChannelUrl: function w() {
                            if (!this._channelUrl) {
                                var x = this;
                                this._channelUrl = t.handler(function (y) {
                                    x.fire("xd." + y.type, y)
                                }, "parent.parent", true)
                            }
                            return this._channelUrl
                        },
                        getIframeNode: function w() {
                            return this.dom.getElementsByTagName("iframe")[0]
                        },
                        arbiterInform: function w(event, x, y) {
                            t.sendToFacebook(this.getIframeName(), {
                                method: event,
                                params: ES("JSON", "stringify", false, x || {}),
                                behavior: y || h.BEHAVIOR_PERSISTENT
                            })
                        },
                        _arbiterInform: function w(event, x, y) {
                            var z = 'parent.frames["' + this.getIframeNode().name + '"]';
                            t.inform(event, x, z, y)
                        },
                        getDefaultWebDomain: function w() {
                            return s.resolve("www")
                        },
                        process: function w(x) {
                            __p && __p();
                            if (this._done) {
                                if (!this._allowReProcess && !x) return;
                                this.clear()
                            } else this._oneTimeSetup();
                            this._done = true;
                            this._iframeName = this.getIframeName() || this._iframeName || n();
                            if (!this.setupAndValidate()) {
                                this.fire("render");
                                return
                            }
                            if (this._showLoader) this._addLoader();
                            k.addCss(this.dom, "fb_iframe_widget");
                            if (this._visibleAfter != "immediate") k.addCss(this.dom, "fb_hide_iframes"); else this.subscribe("iframe.onload", ES(this.fire, "bind", true, this, "render"));
                            var y = this.getSize() || {}, z = this.getFullyQualifiedURL();
                            if (y.width == "100%") k.addCss(this.dom, "fb_iframe_widget_fluid");
                            this.clear();
                            o({
                                url: z,
                                root: this.dom.appendChild(document.createElement("span")),
                                name: this._iframeName,
                                title: this.getIframeTitle(),
                                className: q.getRtl() ? "fb_rtl" : "fb_ltr",
                                height: y.height,
                                width: y.width,
                                onload: ES(this.fire, "bind", true, this, "iframe.onload")
                            });
                            this._resizeFlow(y);
                            this.loaded = false;
                            this.subscribe("iframe.onload", ES(function () {
                                this.loaded = true;
                                if (!this._isResizeHandled) k.addCss(this.dom, "fb_hide_iframes")
                            }, "bind", true, this))
                        },
                        generateWidgetPipeIframeName: function w() {
                            v++;
                            return "fb_iframe_" + v
                        },
                        getFullyQualifiedURL: function w() {
                            __p && __p();
                            var x = this._getURL();
                            x += "?" + p.encode(this._getQS());
                            if (x.length > 2e3) {
                                x = "about:blank";
                                var y = ES(function () {
                                    this._postRequest();
                                    this.unsubscribe("iframe.onload", y)
                                }, "bind", true, this);
                                this.subscribe("iframe.onload", y)
                            }
                            return x
                        },
                        _getWidgetPipeShell: function w() {
                            return s.resolve("www") + "/common/widget_pipe_shell.php"
                        },
                        _oneTimeSetup: function w() {
                            __p && __p();
                            this.subscribe("xd.resize", ES(this._handleResizeMsg, "bind", true, this));
                            this.subscribe("xd.resize", ES(this._bubbleResizeEvent, "bind", true, this));
                            this.subscribe("xd.resize.iframe", ES(this._resizeIframe, "bind", true, this));
                            this.subscribe("xd.resize.flow", ES(this._resizeFlow, "bind", true, this));
                            this.subscribe("xd.resize.flow", ES(this._bubbleResizeEvent, "bind", true, this));
                            this.subscribe("xd.refreshLoginStatus", function () {
                                i.getLoginStatus(function () {
                                }, true)
                            });
                            this.subscribe("xd.logout", function () {
                                r({method: "auth.logout", display: "hidden"}, function () {
                                })
                            });
                            if (this._refreshOnAuthChange) this._setupAuthRefresh();
                            if (this._visibleAfter == "load") this.subscribe("iframe.onload", ES(this._makeVisible, "bind", true, this));
                            this.subscribe("xd.verify", ES(function (x) {
                                this.arbiterInform("xd/verify", x.token)
                            }, "bind", true, this));
                            this.oneTimeSetup()
                        },
                        _makeVisible: function w() {
                            this._removeLoader();
                            k.removeCss(this.dom, "fb_hide_iframes");
                            this.fire("render")
                        },
                        _setupAuthRefresh: function w() {
                            i.getLoginStatus(ES(function (x) {
                                var y = x.status;
                                l.subscribe("auth.statusChange", ES(function (x) {
                                    if (!this.isValid()) return;
                                    if (y == "unknown" || x.status == "unknown") this.process(true);
                                    y = x.status
                                }, "bind", true, this))
                            }, "bind", true, this))
                        },
                        _handleResizeMsg: function w(x) {
                            __p && __p();
                            if (!this.isValid()) return;
                            this._resizeIframe(x);
                            this._resizeFlow(x);
                            if (!this._borderReset) {
                                this.getIframeNode().style.border = "none";
                                this._borderReset = true
                            }
                            this._isResizeHandled = true;
                            this._makeVisible()
                        },
                        _bubbleResizeEvent: function w(x) {
                            var y = {height: x.height, width: x.width, pluginID: this.getAttribute("plugin-id")};
                            l.fire("xfbml.resize", y)
                        },
                        _resizeIframe: function w(x) {
                            var y = this.getIframeNode();
                            if (x.reposition === "true") this._repositionIframe(x);
                            x.height && (y.style.height = x.height + "px");
                            x.width && (y.style.width = x.width + "px")
                        },
                        _resizeFlow: function w(x) {
                            var y = this.dom.getElementsByTagName("span")[0];
                            x.height && (y.style.height = x.height + "px");
                            x.width && (y.style.width = x.width + "px")
                        },
                        _repositionIframe: function w(x) {
                            __p && __p();
                            var y = this.getIframeNode(), z = parseInt(k.getStyle(y, "width"), 10),
                                A = k.getPosition(y).x, B = k.getViewportInfo().width, C = parseInt(x.width, 10);
                            if (A + C > B && A > C) {
                                y.style.left = z - C + "px";
                                this.arbiterInform("xd/reposition", {type: "horizontal"});
                                this._repositioned = true
                            } else if (this._repositioned) {
                                y.style.left = "0px";
                                this.arbiterInform("xd/reposition", {type: "restore"});
                                this._repositioned = false
                            }
                        },
                        _addLoader: function w() {
                            if (!this._loaderDiv) {
                                k.addCss(this.dom, "fb_iframe_widget_loader");
                                this._loaderDiv = document.createElement("div");
                                this._loaderDiv.className = "FB_Loader";
                                this.dom.appendChild(this._loaderDiv)
                            }
                        },
                        _removeLoader: function w() {
                            if (this._loaderDiv) {
                                k.removeCss(this.dom, "fb_iframe_widget_loader");
                                if (this._loaderDiv.parentNode) this._loaderDiv.parentNode.removeChild(this._loaderDiv);
                                this._loaderDiv = null
                            }
                        },
                        _getQS: function w() {
                            return ES("Object", "assign", false, {
                                api_key: q.getClientID(),
                                locale: q.getLocale(),
                                sdk: "joey",
                                kid_directed_site: q.getKidDirectedSite(),
                                ref: this.getAttribute("ref")
                            }, this.getUrlBits().params)
                        },
                        _getURL: function w() {
                            var x = this.getDefaultWebDomain(), y = "";
                            return x + "/plugins/" + y + this.getUrlBits().name + ".php"
                        },
                        _postRequest: function w() {
                            j.submitToTarget({
                                url: this._getURL(),
                                target: this.getIframeNode().name,
                                params: this._getQS()
                            })
                        }
                    }), v = 0;
                    f.exports = u
                }), null);
                __d("sdk.XFBML.Comments", ["sdk.Event", "sdk.XFBML.IframeWidget", "QueryString", "sdk.Runtime", "JSSDKConfig", "sdk.UA", "UrlMap"], (function a(b, c, d, e, f, g, h, i, j, k, l, m, n) {
                    __p && __p();
                    var o = 320, p = i.extend({
                        _visibleAfter: "immediate",
                        _refreshOnAuthChange: true,
                        setupAndValidate: function q() {
                            __p && __p();
                            var r = {
                                channel_url: this.getChannelUrl(),
                                colorscheme: this.getAttribute("colorscheme"),
                                skin: this.getAttribute("skin"),
                                numposts: this.getAttribute("num-posts", 10),
                                width: this._getLengthAttribute("width"),
                                href: this.getAttribute("href"),
                                permalink: this.getAttribute("permalink"),
                                publish_feed: this.getAttribute("publish_feed"),
                                order_by: this.getAttribute("order_by"),
                                mobile: this._getBoolAttribute("mobile"),
                                version: this.getAttribute("version")
                            };
                            if (!r.width && !r.permalink) r.width = 550;
                            if (l.initSitevars.enableMobileComments && m.mobile() && r.mobile !== false) r.mobile = true;
                            if (!r.skin) r.skin = r.colorscheme;
                            if (!r.href) {
                                r.migrated = this.getAttribute("migrated");
                                r.xid = this.getAttribute("xid");
                                r.title = this.getAttribute("title", document.title);
                                r.url = this.getAttribute("url", document.URL);
                                r.quiet = this.getAttribute("quiet");
                                r.reverse = this.getAttribute("reverse");
                                r.simple = this.getAttribute("simple");
                                r.css = this.getAttribute("css");
                                r.notify = this.getAttribute("notify");
                                if (!r.xid) {
                                    var s = ES(document.URL, "indexOf", true, "#");
                                    if (s > 0) r.xid = encodeURIComponent(document.URL.substring(0, s)); else r.xid = encodeURIComponent(document.URL)
                                }
                                if (r.migrated) r.href = n.resolve("www") + "/plugins/comments_v1.php?app_id=" + k.getClientID() + "&xid=" + encodeURIComponent(r.xid) + "&url=" + encodeURIComponent(r.url)
                            } else {
                                var t = this.getAttribute("fb_comment_id");
                                if (!t) {
                                    t = j.decode(document.URL.substring(ES(document.URL, "indexOf", true, "?") + 1)).fb_comment_id;
                                    if (t && ES(t, "indexOf", true, "#") > 0) t = t.substring(0, ES(t, "indexOf", true, "#"))
                                }
                                if (t) {
                                    r.fb_comment_id = t;
                                    this.subscribe("render", ES(function () {
                                        if (!window.location.hash) window.location.hash = this.getIframeNode().id
                                    }, "bind", true, this))
                                }
                            }
                            if (!r.version) r.version = k.getVersion();
                            this._attr = r;
                            return true
                        },
                        oneTimeSetup: function q() {
                            this.subscribe("xd.sdk_event", function (r) {
                                h.fire(r.event, ES("JSON", "parse", false, r.data))
                            })
                        },
                        getSize: function q() {
                            if (!this._attr.permalink) return {
                                width: this._attr.mobile || this._attr.width === "auto" || this._attr.width === "100%" ? "100%" : Math.max(this._attr.width, o),
                                height: 100
                            }
                        },
                        getUrlBits: function q() {
                            return {name: "comments", params: this._attr}
                        },
                        getDefaultWebDomain: function q() {
                            return n.resolve("www", true)
                        }
                    });
                    f.exports = p
                }), null);
                __d("sdk.XFBML.CommentsCount", ["ApiClient", "sdk.DOM", "sdk.XFBML.Element", "sprintf"], (function a(b, c, d, e, f, g, h, i, j, k) {
                    __p && __p();
                    var l = j.extend({
                        process: function m() {
                            i.addCss(this.dom, "fb_comments_count_zero");
                            var n = this.getAttribute("href", window.location.href);
                            h.scheduleBatchCall("/v2.1/" + encodeURIComponent(n), {fields: "share"}, ES(function (o) {
                                var p = o.share && o.share.comment_count || 0;
                                i.html(this.dom, k('<span class="fb_comments_count">%s</span>', p));
                                if (p > 0) i.removeCss(this.dom, "fb_comments_count_zero");
                                this.fire("render")
                            }, "bind", true, this))
                        }
                    });
                    f.exports = l
                }), null);
                __d("sdk.DocumentTitle", [], (function a(b, c, d, e, f, g) {
                    __p && __p();
                    var h = document.title, i = null, j = 1500, k = null, l = false;

                    function m() {
                        if (i) if (!l) n(i); else o(); else {
                            clearInterval(k);
                            k = null;
                            o()
                        }
                    }

                    function n(q) {
                        document.title = q;
                        l = true
                    }

                    function o() {
                        p.set(h);
                        l = false
                    }

                    var p = {
                        get: function q() {
                            return h
                        }, set: function q(r) {
                            document.title = r
                        }, blink: function q(r) {
                            i = r;
                            if (k === null) k = setInterval(m, j);
                            return {
                                stop: function s() {
                                    i = null
                                }
                            }
                        }
                    };
                    f.exports = p
                }), null);
                __d("sdk.XFBML.CustomerChat", ["sdk.Content", "sdk.DialogUtils", "sdk.DocumentTitle", "sdk.DOM", "DOMEventListener", "sdk.Event", "IframePlugin", "QueryString", "sdk.XD", "sdk.createIframe"], (function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q) {
                    "use strict";
                    __p && __p();
                    var r = ["animationend", "mozAnimationEnd", "MSAnimationEnd", "oAnimationEnd", "webkitAnimationEnd"],
                        s = null, t = 0, u = 0, v = n.extend({
                            constructor: function A(B, C, D, E) {
                                __p && __p();
                                k.addCss(B, "fb_invisible_flow");
                                B && B.parentNode && B.parentNode.removeChild(B);
                                h.append(B);
                                this.parent(B, C, D, E);
                                this._iframeOptions.title = "";
                                m.fire("livechatplugin:loaded");
                                this.subscribe("xd.liveChatPluginGetBubbleIframe", ES(function (F) {
                                    this._bubbleDialog = this._setupNewIframeDialog(F.fromIframe, ES("JSON", "parse", false, F.isHTTPS));
                                    h.append(this._bubbleDialog);
                                    this.subscribe("xd.liveChatPluginShowBubbleIframe", ES(function (F) {
                                        k.setStyle(this._bubbleDialog, "display", "inline");
                                        if (ES("JSON", "parse", false, F.showBadge)) this._setBubbleBadgeStyle()
                                    }, "bind", true, this))
                                }, "bind", true, this));
                                this.subscribe("xd.liveChatPluginPrepareDesktopAnchorIframe", ES(function (F) {
                                    if (this._iframe) {
                                        this._iframe.setAttribute("data-testid", "dialog_iframe");
                                        ES("Object", "assign", false, this._iframe.style, {
                                            borderRadius: "9pt",
                                            bottom: "72pt",
                                            boxShadow: "0 3pt 12pt rgba(0, 0, 0, 0.15)",
                                            maxHeight: ES("JSON", "parse", false, F.dialogHidden) ? "0" : "100%",
                                            padding: "0",
                                            position: "fixed",
                                            right: "18pt",
                                            top: "auto",
                                            width: "270pt",
                                            zIndex: "2147483647"
                                        });
                                        if (ES("JSON", "parse", false, F.chatStarted)) ES("Object", "assign", false, this._iframe.style, {height: "360pt"})
                                    }
                                }, "bind", true, this));
                                this.subscribe("xd.liveChatPluginPrepareMobileAnchorIframe", ES(function (F) {
                                    __p && __p();
                                    if (this._iframe) {
                                        this._iframe.setAttribute("data-testid", "dialog_iframe");
                                        ES("Object", "assign", false, this._iframe.style, {
                                            maxHeight: ES("JSON", "parse", false, F.dialogHidden) ? "0" : "100%",
                                            padding: "0",
                                            position: "fixed",
                                            zIndex: "2147483647"
                                        });
                                        if (ES("JSON", "parse", false, F.chatStarted)) {
                                            ES("Object", "assign", false, this._iframe.style, {
                                                height: "100%",
                                                right: "0",
                                                top: "0",
                                                width: "100%"
                                            });
                                            if (!ES("JSON", "parse", false, F.dialogHidden)) w()
                                        } else ES("Object", "assign", false, this._iframe.style, {
                                            borderRadius: "9pt",
                                            bottom: "72pt",
                                            boxShadow: "0 3pt 12pt rgba(0, 0, 0, 0.15)",
                                            right: "12pt",
                                            top: "auto",
                                            width: "270pt"
                                        })
                                    }
                                }, "bind", true, this));
                                this.subscribe("xd.liveChatPluginResizeAnchorIframe", ES(function (F) {
                                    this._iframe && k.setStyle(this._iframe, "height", ES("JSON", "parse", false, F.height) + "px")
                                }, "bind", true, this));
                                this.subscribe("xd.liveChatPluginExpandDesktopDialogIframe", ES(function (F) {
                                    this._iframe && k.setStyle(this._iframe, "height", "360pt")
                                }, "bind", true, this));
                                this.subscribe("xd.liveChatPluginExpandMobileDialogIframe", ES(function (F) {
                                    if (this._iframe) {
                                        k.setStyle(this._iframe, "border-radius", "0");
                                        k.setStyle(this._iframe, "height", "100%");
                                        k.setStyle(this._iframe, "right", "0");
                                        k.setStyle(this._iframe, "top", "0");
                                        k.setStyle(this._iframe, "width", "100%")
                                    }
                                    w()
                                }, "bind", true, this));
                                this.subscribe("xd.liveChatPluginShowDialogIframe", ES(function (F) {
                                    y(this._iframe, ES("JSON", "parse", false, F.chatStarted), ES("JSON", "parse", false, F.isMobile))
                                }, "bind", true, this));
                                this.subscribe("xd.liveChatPluginHideDialogIframe", ES(function (F) {
                                    z(this._iframe, ES("JSON", "parse", false, F.chatStarted), ES("JSON", "parse", false, F.isMobile))
                                }, "bind", true, this));
                                this.subscribe("xd.liveChatPluginResetShadow", ES(function (F) {
                                    if (ES("JSON", "parse", false, F.resetShadow) && this._bubbleDialog) {
                                        k.setStyle(this._bubbleDialog, "boxShadow", "0px 3px 12px rgba(0, 0, 0, 0.15)");
                                        k.setStyle(this._bubbleDialog, "borderRadius", "50%")
                                    } else if (ES("JSON", "parse", false, F.dialogHidden)) this._setBubbleBadgeStyle()
                                }, "bind", true, this));
                                this.subscribe("xd.liveChatPluginUpdatePageTitle", ES(function (F) {
                                    if (!s && F.titleText) {
                                        s = j.blink(F.titleText);
                                        l.add(window, "focus", ES(function (G) {
                                            this._stopBlinking()
                                        }, "bind", true, this))
                                    } else if (s && !F.titleText) this._stopBlinking()
                                }, "bind", true, this));
                                m.subscribe("livechatplugin:loaded", ES(function () {
                                    B && B.parentNode && B.parentNode.removeChild(B);
                                    this._bubbleDialog && this._bubbleDialog.parentNode && this._bubbleDialog.parentNode.removeChild(this._bubbleDialog)
                                }, "bind", true, this))
                            }, _setupNewIframeDialog: function A(B, C) {
                                var D = "#" + o.encode({forIframe: B}), E = i.setupNewDialog();
                                k.setStyle(E.contentRoot, "background", "none");
                                q({
                                    url: p.getXDArbiterURL(C) + D,
                                    name: "blank_" + this._iframeOptions.name,
                                    root: E.contentRoot,
                                    tabindex: -1,
                                    width: 60,
                                    "data-testid": "bubble_iframe"
                                });
                                ES("Object", "assign", false, E.dialogElement.style, {
                                    background: "none",
                                    borderRadius: "50%",
                                    bottom: "18pt",
                                    boxShadow: "0px 3px 12px rgba(0, 0, 0, 0.15)",
                                    display: "none",
                                    height: "45pt",
                                    padding: "0",
                                    position: "fixed",
                                    right: "18pt",
                                    top: "auto",
                                    width: "45pt",
                                    zIndex: "2147483646"
                                });
                                return E.dialogElement
                            }, _setBubbleBadgeStyle: function A() {
                                if (this._bubbleDialog) {
                                    k.setStyle(this._bubbleDialog, "boxShadow", "-5px 4px 14px rgba(0, 0, 0, 0.15)");
                                    k.setStyle(this._bubbleDialog, "borderRadius", "50% 0% 50% 50%")
                                }
                            }, _stopBlinking: function A() {
                                if (s) {
                                    s.stop();
                                    s = null
                                }
                            }, getParams: function A() {
                                return {
                                    greeting_dialog_display: "string",
                                    greeting_dialog_delay: "string",
                                    logged_in_greeting: "string",
                                    logged_out_greeting: "string",
                                    minimized: "bool",
                                    page_id: "string",
                                    theme_color: "string"
                                }
                            }
                        });

                    function w() {
                        t = window.pageXOffset !== undefined ? window.pageXOffset : document.documentElement && document.documentElement.scrollLeft;
                        u = window.pageYOffset !== undefined ? window.pageYOffset : document.documentElement && document.documentElement.scrollTop;
                        k.addCss(document.body, "fb_mobile_overlay_active")
                    }

                    function x() {
                        k.removeCss(document.body, "fb_mobile_overlay_active");
                        window.scrollTo(t, u)
                    }

                    function y(A, B, C) {
                        if (!A) return;
                        if (C && B) w();
                        k.removeCss(A, "fb_customer_chat_bounce_out");
                        k.addCss(A, "fb_customer_chat_bounce_in");
                        k.setStyle(A, "maxHeight", "100%")
                    }

                    function z(A, B, C) {
                        __p && __p();
                        var D = A;
                        if (!D) return;
                        var z = function z(E) {
                            if (E.animationName === "fb_fade_out") {
                                k.setStyle(D, "maxHeight", "0");
                                ES(r, "forEach", true, function (event) {
                                    l.remove(D, event, z)
                                })
                            }
                        };
                        if (C && B) x();
                        k.removeCss(D, "fb_customer_chat_bounce_in");
                        k.addCss(D, "fb_customer_chat_bounce_out");
                        ES(r, "forEach", true, function (event) {
                            l.add(D, event, z)
                        })
                    }

                    f.exports = v
                }), null);
                __d("safeEval", [], (function a(b, c, d, e, f, g) {
                    function h(i, j) {
                        if (i === null || typeof i === "undefined") return;
                        if (typeof i !== "string") return i;
                        if (/^\w+$/.test(i) && typeof window[i] === "function") return window[i].apply(null, j || []);
                        return Function('return eval("' + i.replace(/\"/g, '\\"') + '");').apply(null, j || [])
                    }

                    f.exports = h
                }), null);
                __d("sdk.Helper", ["sdk.ErrorHandling", "sdk.Event", "UrlMap", "safeEval", "sprintf"], (function a(b, c, d, e, f, g, h, i, j, k, l) {
                    __p && __p();
                    var m = {
                        isUser: function n(o) {
                            return o < 22e8 || o >= 1e14 && o <= 100099999989999 || o >= 89e12 && o <= 89999999999999 || o >= 6000001e7 && o <= 60000019999999
                        }, upperCaseFirstChar: function n(o) {
                            if (o.length > 0) return o.substr(0, 1).toUpperCase() + o.substr(1); else return o
                        }, getProfileLink: function n(o, p, q) {
                            if (!q && o) q = l("%s/profile.php?id=%s", j.resolve("www"), o.uid || o.id);
                            if (q) p = l('<a class="fb_link" href="%s">%s</a>', q, p);
                            return p
                        }, invokeHandler: function n(o, p, q) {
                            if (o) if (typeof o === "string") h.unguard(k)(o, q); else if (o.apply) h.unguard(o).apply(p, q || [])
                        }, fireEvent: function n(o, p) {
                            var q = p._attr.href;
                            p.fire(o, q);
                            i.fire(o, q, p)
                        }, executeFunctionByName: function n(o) {
                            var p = Array.prototype.slice.call(arguments, 1), q = o.split("."), r = q.pop(), s = window;
                            for (var t = 0; t < q.length; t++) s = s[q[t]];
                            return s[r].apply(this, p)
                        }
                    };
                    f.exports = m
                }), null);
                __d("sdk.XFBML.LoginButton", ["sdk.Helper", "IframePlugin", "Log", "sdk.ui", "sdk.XD"], (function a(b, c, d, e, f, g, h, i, j, k, l) {
                    __p && __p();
                    var m = i.extend({
                        constructor: function n(o, p, q, r) {
                            __p && __p();
                            this.parent(o, p, q, r);
                            var s = i.getVal(r, "on_login"), t = null, u = this._iframeOptions.name;
                            if (s) {
                                t = function t(v) {
                                    if (v.error_code) {
                                        j.debug("Plugin Return Error (%s): %s", v.error_code, v.error_message || v.error_description);
                                        return
                                    }
                                    h.invokeHandler(s, null, [v])
                                };
                                this.subscribe("login.status", t)
                            }
                            this.subscribe("xd.login_button_dialog_open", function (v) {
                                k(ES("JSON", "parse", false, v.params), function (w) {
                                    h.invokeHandler(t, null, [w]);
                                    l.sendToFacebook(u, {
                                        method: "loginReload",
                                        params: ES("JSON", "stringify", false, w)
                                    })
                                })
                            })
                        }, shouldIgnoreWidth: function n() {
                            return false
                        }, getParams: function n() {
                            return {
                                scope: "string",
                                perms: "string",
                                size: "string",
                                login_text: "text",
                                show_faces: "bool",
                                max_rows: "string",
                                show_login_face: "bool",
                                show_login_numbers: "bool",
                                registration_url: "url_maybe",
                                auto_logout_link: "bool",
                                one_click: "bool",
                                show_banner: "bool",
                                auth_type: "string",
                                default_audience: "string",
                                use_continue_as: "bool",
                                button_type: "string",
                                width: "px",
                                height: "px"
                            }
                        }
                    });
                    f.exports = m
                }), null);
                __d("escapeHTML", [], (function a(b, c, d, e, f, g) {
                    var h = /[&<>\"\'\/]/g,
                        i = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;", "/": "&#x2F;"};

                    function j(k) {
                        return k.replace(h, function (l) {
                            return i[l]
                        })
                    }

                    f.exports = j
                }), null);
                __d("sdk.XFBML.Name", ["ApiClient", "escapeHTML", "sdk.Event", "sdk.XFBML.Element", "sdk.Helper", "Log", "sdk.Runtime"], (function a(b, c, d, e, f, g, h, i, j, k, l, m, n) {
                    __p && __p();
                    var o = {}.hasOwnProperty, p = k.extend({
                        process: function q() {
                            __p && __p();
                            ES("Object", "assign", false, this, {
                                _uid: this.getAttribute("uid"),
                                _firstnameonly: this._getBoolAttribute("first-name-only"),
                                _lastnameonly: this._getBoolAttribute("last-name-only"),
                                _possessive: this._getBoolAttribute("possessive"),
                                _reflexive: this._getBoolAttribute("reflexive"),
                                _objective: this._getBoolAttribute("objective"),
                                _linked: this._getBoolAttribute("linked", true),
                                _subjectId: this.getAttribute("subject-id")
                            });
                            if (!this._uid) {
                                m.error('"uid" is a required attribute for <fb:name>');
                                this.fire("render");
                                return
                            }
                            var r = [];
                            if (this._firstnameonly) r.push("first_name"); else if (this._lastnameonly) r.push("last_name"); else r.push("name");
                            if (this._subjectId) {
                                r.push("gender");
                                if (this._subjectId == n.getUserID()) this._reflexive = true
                            }
                            j.monitor("auth.statusChange", ES(function () {
                                __p && __p();
                                if (!this.isValid()) {
                                    this.fire("render");
                                    return true
                                }
                                if (!this._uid || this._uid == "loggedinuser") this._uid = n.getUserID();
                                if (!this._uid) return;
                                h.scheduleBatchCall("/v1.0/" + this._uid, {fields: r.join(",")}, ES(function (s) {
                                    if (o.call(s, "error")) {
                                        m.warn("The name is not found for ID: " + this._uid);
                                        return
                                    }
                                    if (this._subjectId == this._uid) this._renderPronoun(s); else this._renderOther(s);
                                    this.fire("render")
                                }, "bind", true, this))
                            }, "bind", true, this))
                        }, _renderPronoun: function q(r) {
                            __p && __p();
                            var s = "", t = this._objective;
                            if (this._subjectId) {
                                t = true;
                                if (this._subjectId === this._uid) this._reflexive = true
                            }
                            if (this._uid == n.getUserID() && this._getBoolAttribute("use-you", true)) if (this._possessive) if (this._reflexive) s = "your own"; else s = "your"; else if (this._reflexive) s = "yourself"; else s = "you"; else switch (r.gender) {
                                case"male":
                                    if (this._possessive) s = this._reflexive ? "his own" : "his"; else if (this._reflexive) s = "himself"; else if (t) s = "him"; else s = "he";
                                    break;
                                case"female":
                                    if (this._possessive) s = this._reflexive ? "her own" : "her"; else if (this._reflexive) s = "herself"; else if (t) s = "her"; else s = "she";
                                    break;
                                default:
                                    if (this._getBoolAttribute("use-they", true)) if (this._possessive) if (this._reflexive) s = "their own"; else s = "their"; else if (this._reflexive) s = "themselves"; else if (t) s = "them"; else s = "they"; else if (this._possessive) if (this._reflexive) s = "his/her own"; else s = "his/her"; else if (this._reflexive) s = "himself/herself"; else if (t) s = "him/her"; else s = "he/she";
                                    break
                            }
                            if (this._getBoolAttribute("capitalize", false)) s = l.upperCaseFirstChar(s);
                            this.dom.innerHTML = s
                        }, _renderOther: function q(r) {
                            __p && __p();
                            var s = "", t = "";
                            if (this._uid == n.getUserID() && this._getBoolAttribute("use-you", true)) if (this._reflexive) if (this._possessive) s = "your own"; else s = "yourself"; else if (this._possessive) s = "your"; else s = "you"; else if (r) {
                                if (null === r.first_name) r.first_name = "";
                                if (null === r.last_name) r.last_name = "";
                                if (this._firstnameonly && r.first_name !== undefined) s = i(r.first_name); else if (this._lastnameonly && r.last_name !== undefined) s = i(r.last_name);
                                if (!s) s = i(r.name);
                                if (s !== "" && this._possessive) s += "'s"
                            }
                            if (!s) s = i(this.getAttribute("if-cant-see", "Facebook User"));
                            if (s) {
                                if (this._getBoolAttribute("capitalize", false)) s = l.upperCaseFirstChar(s);
                                if (r && this._linked) t = l.getProfileLink(r, s, this.getAttribute("href", null)); else t = s
                            }
                            this.dom.innerHTML = t
                        }
                    });
                    f.exports = p
                }), null);
                __d("UnicodeUtils", ["invariant"], (function a(b, c, d, e, f, g, h) {
                    "use strict";
                    __p && __p();
                    var i = 55296, j = 56319, k = 56320, l = 57343, m = /[\uD800-\uDFFF]/;

                    function n(w) {
                        return i <= w && w <= l
                    }

                    function o(w, x) {
                        0 <= x && x < w.length || h(0);
                        if (x + 1 === w.length) return false;
                        var y = w.charCodeAt(x), z = w.charCodeAt(x + 1);
                        return i <= y && y <= j && k <= z && z <= l
                    }

                    function p(w) {
                        return m.test(w)
                    }

                    function q(w, x) {
                        return 1 + n(w.charCodeAt(x))
                    }

                    function r(w) {
                        if (!p(w)) return w.length;
                        var x = 0;
                        for (var y = 0; y < w.length; y += q(w, y)) x++;
                        return x
                    }

                    function s(w, x, y) {
                        __p && __p();
                        x = x || 0;
                        y = y === undefined ? Infinity : y || 0;
                        if (!p(w)) return w.substr(x, y);
                        var z = w.length;
                        if (z <= 0 || x > z || y <= 0) return "";
                        var A = 0;
                        if (x > 0) {
                            for (; x > 0 && A < z; x--) A += q(w, A);
                            if (A >= z) return ""
                        } else if (x < 0) {
                            for (A = z; x < 0 && 0 < A; x++) A -= q(w, A - 1);
                            if (A < 0) A = 0
                        }
                        var B = z;
                        if (y < z) for (B = A; y > 0 && B < z; y--) B += q(w, B);
                        return w.substring(A, B)
                    }

                    function t(w, x, y) {
                        x = x || 0;
                        y = y === undefined ? Infinity : y || 0;
                        if (x < 0) x = 0;
                        if (y < 0) y = 0;
                        var z = Math.abs(y - x);
                        x = x < y ? x : y;
                        return s(w, x, z)
                    }

                    function u(w) {
                        var x = [];
                        for (var y = 0; y < w.length; y += q(w, y)) x.push(w.codePointAt(y));
                        return x
                    }

                    var v = {
                        getCodePoints: u,
                        getUTF16Length: q,
                        hasSurrogateUnit: p,
                        isCodeUnitInSurrogateRange: n,
                        isSurrogatePair: o,
                        strlen: r,
                        substring: t,
                        substr: s
                    };
                    f.exports = v
                }), null);
                __d("isNode", [], (function a(b, c, d, e, f, g) {
                    function h(i) {
                        var j = i ? i.ownerDocument || i : document, k = j.defaultView || window;
                        return !!(i && (typeof k.Node === "function" ? i instanceof k.Node : typeof i === "object" && typeof i.nodeType === "number" && typeof i.nodeName === "string"))
                    }

                    f.exports = h
                }), 18);
                __d("isTextNode", ["isNode"], (function a(b, c, d, e, f, g, h) {
                    function i(j) {
                        return h(j) && j.nodeType == 3
                    }

                    f.exports = i
                }), 18);
                __d("containsNode", ["isTextNode"], (function a(b, c, d, e, f, g, h) {
                    __p && __p();

                    function i(j, k) {
                        __p && __p();
                        if (!j || !k) return false; else if (j === k) return true; else if (h(j)) return false; else if (h(k)) return i(j, k.parentNode); else if ("contains" in j) return ES(j, "contains", true, k); else if (j.compareDocumentPosition) return !!(j.compareDocumentPosition(k) & 16); else return false
                    }

                    f.exports = i
                }), 18);
                __d("sdk.XFBML.Quote", ["sdk.DOM", "DOMEventListener", "IframePlugin", "UnicodeUtils", "sdk.UA", "sdk.XD", "containsNode", "sdk.feature"], (function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
                    "use strict";
                    __p && __p();
                    var p = "fb-quotable", q = 155, r = 70, s = "", t = null, u = [], v = false, w = null,
                        x = l.mobile();

                    function y(D) {
                        var E = D.getRangeAt(0), F = E.startContainer;
                        return F.nodeType === 3 ? F.parentNode : F
                    }

                    function z(D) {
                        __p && __p();
                        if (!document.getSelection || x) return;
                        var E = document.getSelection();
                        if (E.rangeCount === 0) {
                            B();
                            return
                        }
                        var F = u.length;
                        B();
                        if (F) {
                            var G = false;
                            for (var H = 0; H < F; H++) if (n(u[H], E.focusNode)) {
                                G = true;
                                break
                            }
                            if (!G) return
                        }
                        s = E.toString();
                        if (s === "") {
                            B();
                            return
                        }
                        s = ES(s.toString().replace(/\s+/g, " "), "trim", true);
                        var I = Number(o("sharequotelimit", 500));
                        if (k.strlen(s) > I) s = k.substr(s, 0, I - 3) + "..."; else s = k.substr(s, 0, I);
                        if (!v && w) {
                            y(E).appendChild(w);
                            var J = A(E);
                            w.style.left = J.x + "px";
                            w.style.top = J.y + "px"
                        }
                    }

                    function A(D) {
                        __p && __p();
                        var E = w && w.offsetWidth, F = E ? w.offsetHeight : r, G = E ? w.offsetWidth : q,
                            H = D.getRangeAt(0), I = document.createElement("span"), J = document.createElement("span"),
                            K = document.createRange();
                        K.setStart(H.startContainer, H.startOffset);
                        K.insertNode(I);
                        var L = document.createRange();
                        L.setStart(H.endContainer, H.endOffset);
                        L.insertNode(J);
                        var M = I.offsetTop - F, N = I.offsetLeft + (J.offsetLeft - I.offsetLeft) / 2 - G / 2;
                        I.parentNode.removeChild(I);
                        J.parentNode.removeChild(J);
                        return {x: N, y: M}
                    }

                    function B() {
                        s = "";
                        if (!v && w) w.style.left = "-9999px"
                    }

                    var C = j.extend({
                        constructor: function D(E, F, G, H) {
                            __p && __p();
                            if (t) return t;
                            this.parent(E, F, G, H);
                            v = h.getAttr(E, "layout") === "button";
                            w = E;
                            w.style.position = "absolute";
                            w.style.display = "";
                            i.add(document, "keyup", z);
                            i.add(document, "mouseup", z);
                            this.subscribe("xd.getTextSelection", ES(function () {
                                m.sendToFacebook(this._iframeOptions.name, {
                                    method: "setTextSelection",
                                    params: ES("JSON", "stringify", false, {text: s})
                                });
                                B()
                            }, "bind", true, this));
                            u = ES(ES("Array", "from", false, document.getElementsByTagName("*")), "filter", true, function (I) {
                                return I.nodeName.toLowerCase() === "article" || h.containsCss(I, p)
                            });
                            B();
                            t = this;
                            return t
                        }, getParams: function D() {
                            return {href: "url", layout: "string"}
                        }
                    });
                    f.exports = C
                }), null);
                __d("sdk.XFBML.Save", ["sdk.Content", "sdk.DialogUtils", "sdk.DOM", "sdk.Event", "IframePlugin", "QueryString", "sdk.UA", "sdk.XD", "sdk.createIframe"], (function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
                    "use strict";
                    __p && __p();
                    var q = void 0, r = l.extend({
                        constructor: function s(t, u, v, w) {
                            __p && __p();
                            this.parent(t, u, v, w);
                            var x = n.mobile();
                            this.subscribe("xd.savePluginGetBlankIframe", ES(function (y) {
                                __p && __p();
                                var z = void 0, A = void 0, B = void 0, C = function C(H) {
                                    if (H) j.removeCss(H, "fb_invisible")
                                }, D = function D(H) {
                                    if (H) j.addCss(H, "fb_invisible")
                                };
                                if (x) {
                                    z = i.setupNewDarkOverlay();
                                    D(z);
                                    h.append(z);
                                    i.addDoubleClickAction(z, function () {
                                        return ES(B, "forEach", true, D)
                                    }, 5e3)
                                }
                                A = this.setupNewIframeDialog(ES("JSON", "parse", false, y.data), y.fromIframe, ES("JSON", "parse", false, y.isHTTPS));
                                D(A);
                                h.append(A);
                                B = [A, z];
                                var E = function E() {
                                    ES(B, "forEach", true, D);
                                    i.onDialogHideCleanup(x);
                                    clearInterval(q)
                                }, F = void 0;
                                this.subscribe("xd.savePluginShowIframe", ES(function () {
                                    k.fire("savePlugin:hideDialog");
                                    ES(B, "forEach", true, C);
                                    this.positionOnScreen(A, z);
                                    if (!x && !F) F = i.addIdleDesktopAction(A, E, 7e3)
                                }, "bind", true, this));
                                this.subscribe("xd.savePluginHideIframe", function () {
                                    return E()
                                });
                                k.subscribe("savePlugin:hideDialog", function () {
                                    return E()
                                });
                                var G = setInterval(function () {
                                    var H = document.getElementsByName(y.fromIframe);
                                    if (H.length === 0) {
                                        clearInterval(G);
                                        E();
                                        ES(B, "forEach", true, function (t) {
                                            t && t.parentNode.removeChild(t)
                                        })
                                    }
                                }, 500)
                            }, "bind", true, this))
                        }, positionOnScreen: function s(t, u) {
                            __p && __p();
                            var v, w = n.mobile();
                            if (w) (function () {
                                var x = function x(t, u) {
                                    if (u != null) i.setDialogPositionToCenter(u, w);
                                    i.setDialogPositionToCenter(t, w)
                                };
                                x(t, u);
                                i.addMobileOrientationChangeAction(function (y) {
                                    x(t, u)
                                });
                                q = setInterval(function () {
                                    return x(t, u)
                                }, 100)
                            })(); else {
                                j.setStyle(t, "position", "fixed");
                                j.setStyle(t, "top", "20px");
                                j.setStyle(t, "right", "20px")
                            }
                        }, setupNewIframeDialog: function s(t, u, v) {
                            __p && __p();
                            var w = "#" + m.encode({forIframe: u}), x = i.setupNewDialog();
                            p({
                                url: o.getXDArbiterURL(v) + w,
                                name: "blank_" + this._iframeOptions.name,
                                root: x.contentRoot,
                                tabindex: -1
                            });
                            j.addCss(x.contentRoot, "fb_dialog_iframe");
                            ES("Object", "assign", false, x.dialogElement.style, t.style || {});
                            j.setStyle(x.dialogElement, "width", t.width + "px");
                            j.setStyle(x.dialogElement, "height", t.height + "px");
                            ES(t.classList, "forEach", true, function (y) {
                                return j.addCss(x.dialogElement, y)
                            });
                            j.removeCss(x.dialogElement, "fb_dialog_advanced");
                            return x.dialogElement
                        }, getParams: function s() {
                            return {uri: "url", url_category: "string", size: "string"}
                        }
                    });
                    f.exports = r
                }), null);
                __d("sdk.XFBML.ShareButton", ["IframePlugin", "sdk.UA", "sdk.ui"], (function a(b, c, d, e, f, g, h, i, j) {
                    "use strict";
                    var k = h.extend({
                        constructor: function l(m, n, o, p) {
                            this.parent(m, n, o, p);
                            this.subscribe("xd.shareTriggerMobileIframe", function (q) {
                                var r = ES("JSON", "parse", false, q.data);
                                j({method: "share", href: r.href, mobile_iframe: i.mobile()})
                            })
                        }, getParams: function l() {
                            return {
                                href: "url",
                                layout: "string",
                                mobile_iframe: "bool",
                                type: "string",
                                size: "string"
                            }
                        }
                    });
                    f.exports = k
                }), null);
                __d("sdk.XFBML.Video", ["Assert", "sdk.Event", "IframePlugin", "ObservableMixin", "sdk.XD"], (function a(b, c, d, e, f, g, h, i, j, k, l) {
                    __p && __p();

                    function m(p) {
                        "use strict";
                        this.$VideoCache1 = p.isMuted;
                        this.$VideoCache2 = p.volume;
                        this.$VideoCache3 = p.timePosition;
                        this.$VideoCache4 = p.duration
                    }

                    m.prototype.update = function (p) {
                        "use strict";
                        if (p.isMuted !== undefined) this.$VideoCache1 = p.isMuted;
                        if (p.volume !== undefined) this.$VideoCache2 = p.volume;
                        if (p.timePosition !== undefined) this.$VideoCache3 = p.timePosition;
                        if (p.duration !== undefined) this.$VideoCache4 = p.duration
                    };
                    m.prototype.isMuted = function () {
                        "use strict";
                        return this.$VideoCache1
                    };
                    m.prototype.getVolume = function () {
                        "use strict";
                        return this.$VideoCache1 ? 0 : this.$VideoCache2
                    };
                    m.prototype.getCurrentPosition = function () {
                        "use strict";
                        return this.$VideoCache3
                    };
                    m.prototype.getDuration = function () {
                        "use strict";
                        return this.$VideoCache4
                    };

                    function n(p, q, r) {
                        "use strict";
                        this.$VideoController1 = p;
                        this.$VideoController2 = q;
                        this.$VideoController3 = r
                    }

                    n.prototype.play = function () {
                        "use strict";
                        l.sendToFacebook(this.$VideoController1, {
                            method: "play",
                            params: ES("JSON", "stringify", false, {})
                        })
                    };
                    n.prototype.pause = function () {
                        "use strict";
                        l.sendToFacebook(this.$VideoController1, {
                            method: "pause",
                            params: ES("JSON", "stringify", false, {})
                        })
                    };
                    n.prototype.seek = function (p) {
                        "use strict";
                        h.isNumber(p, "Invalid argument");
                        l.sendToFacebook(this.$VideoController1, {
                            method: "seek",
                            params: ES("JSON", "stringify", false, {target: p})
                        })
                    };
                    n.prototype.mute = function () {
                        "use strict";
                        l.sendToFacebook(this.$VideoController1, {
                            method: "mute",
                            params: ES("JSON", "stringify", false, {})
                        })
                    };
                    n.prototype.unmute = function () {
                        "use strict";
                        l.sendToFacebook(this.$VideoController1, {
                            method: "unmute",
                            params: ES("JSON", "stringify", false, {})
                        })
                    };
                    n.prototype.setVolume = function (p) {
                        "use strict";
                        h.isNumber(p, "Invalid argument");
                        l.sendToFacebook(this.$VideoController1, {
                            method: "setVolume",
                            params: ES("JSON", "stringify", false, {volume: p})
                        })
                    };
                    n.prototype.isMuted = function () {
                        "use strict";
                        return this.$VideoController3.isMuted()
                    };
                    n.prototype.getVolume = function () {
                        "use strict";
                        return this.$VideoController3.getVolume()
                    };
                    n.prototype.getCurrentPosition = function () {
                        "use strict";
                        return this.$VideoController3.getCurrentPosition()
                    };
                    n.prototype.getDuration = function () {
                        "use strict";
                        return this.$VideoController3.getDuration()
                    };
                    n.prototype.subscribe = function (event, p) {
                        "use strict";
                        h.isString(event, "Invalid argument");
                        h.isFunction(p, "Invalid argument");
                        this.$VideoController2.subscribe(event, p);
                        return {
                            release: ES(function () {
                                this.$VideoController2.unsubscribe(event, p)
                            }, "bind", true, this)
                        }
                    };
                    var o = j.extend({
                        constructor: function p(q, r, s, t) {
                            __p && __p();
                            this.parent(q, r, s, t);
                            this._videoController = null;
                            this._sharedObservable = null;
                            this._sharedVideoCache = null;
                            this.subscribe("xd.onVideoAPIReady", function (u) {
                                this._sharedObservable = new k();
                                this._sharedVideoCache = new m(ES("JSON", "parse", false, u.data));
                                this._videoController = new n(this._iframeOptions.name, this._sharedObservable, this._sharedVideoCache);
                                i.fire("xfbml.ready", {type: "video", id: t.id, instance: this._videoController})
                            });
                            this.subscribe("xd.stateChange", function (u) {
                                this._sharedObservable.inform(u.state)
                            });
                            this.subscribe("xd.cachedStateUpdateRequest", function (u) {
                                this._sharedVideoCache.update(ES("JSON", "parse", false, u.data))
                            })
                        }, getParams: function p() {
                            return {
                                allowfullscreen: "bool",
                                autoplay: "bool",
                                controls: "bool",
                                href: "url",
                                show_captions: "bool",
                                show_text: "bool"
                            }
                        }, getConfig: function p() {
                            return {fluid: true, full_width: true}
                        }
                    });
                    f.exports = o
                }), null);
                __d("legacy:fb.xfbml.plugins", ["IframePlugin", "PluginConfig", "PluginTags", "XFBML", "sdk.feature", "sdk.XFBML.CustomerChat", "sdk.XFBML.Comments", "sdk.XFBML.CommentsCount", "sdk.XFBML.LoginButton", "sdk.XFBML.Name", "sdk.XFBML.Quote", "sdk.XFBML.Save", "sdk.XFBML.ShareButton", "sdk.XFBML.Video"], (function a(b, c, d, e, f, g, h, i, j, k, l) {
                    var m = {
                        customerchat: c("sdk.XFBML.CustomerChat"),
                        comments: c("sdk.XFBML.Comments"),
                        comments_count: c("sdk.XFBML.CommentsCount"),
                        login_button: c("sdk.XFBML.LoginButton"),
                        name: c("sdk.XFBML.Name"),
                        quote: c("sdk.XFBML.Quote"),
                        save: c("sdk.XFBML.Save"),
                        share_button: c("sdk.XFBML.ShareButton"),
                        video: c("sdk.XFBML.Video")
                    }, n = l("plugin_tags_blacklist", []);
                    ES(ES("Object", "keys", false, j), "forEach", true, function (o) {
                        if (ES(n, "indexOf", true, o) !== -1) return;
                        k.registerTag({xmlns: "fb", localName: o.replace(/_/g, "-"), ctor: h.withParams(j[o], i[o])})
                    });
                    ES(ES("Object", "keys", false, m), "forEach", true, function (o) {
                        if (ES(n, "indexOf", true, o) !== -1) return;
                        k.registerTag({xmlns: "fb", localName: o.replace(/_/g, "-"), ctor: m[o]})
                    })
                }), 3);
            }
        }).call(global);
    })(window.inDapIF ? parent.window : window, window);
} catch (e) {
    new Image().src = "http:\/\/www.facebook.com\/" + 'common/scribe_endpoint.php?c=jssdk_error&m=' + encodeURIComponent('{"error":"LOAD", "extra": {"name":"' + e.name + '","line":"' + (e.lineNumber || e.line) + '","script":"' + (e.fileName || e.sourceURL || e.script) + '","stack":"' + (e.stackTrace || e.stack) + '","revision":"3737592","namespace":"FB","message":"' + e.message + '"}}');
}