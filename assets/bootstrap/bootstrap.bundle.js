/*!
 * Bootstrap v5.1.3 (https://getbootstrap.com/)
 * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define(e)
    : ((t =
        "undefined" != typeof globalThis ? globalThis : t || self).bootstrap =
        e());
})(this, function () {
  "use strict";
  const t = "transitionend",
    e = (t) => {
      let e = t.getAttribute("data-bs-target");
      if (!e || "#" === e) {
        let i = t.getAttribute("href");
        if (!i || (!i.includes("#") && !i.startsWith("."))) return null;
        i.includes("#") && !i.startsWith("#") && (i = `#${i.split("#")[1]}`),
          (e = i && "#" !== i ? i.trim() : null);
      }
      return e;
    },
    i = (t) => {
      const i = e(t);
      return i && document.querySelector(i) ? i : null;
    },
    n = (t) => {
      const i = e(t);
      return i ? document.querySelector(i) : null;
    },
    s = (e) => {
      e.dispatchEvent(new Event(t));
    },
    o = (t) =>
      !(!t || "object" != typeof t) &&
      (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
    r = (t) =>
      o(t)
        ? t.jquery
          ? t[0]
          : t
        : "string" == typeof t && t.length > 0
        ? document.querySelector(t)
        : null,
    a = (t, e, i) => {
      Object.keys(i).forEach((n) => {
        const s = i[n],
          r = e[n],
          a =
            r && o(r)
              ? "element"
              : null == (l = r)
              ? `${l}`
              : {}.toString
                  .call(l)
                  .match(/\s([a-z]+)/i)[1]
                  .toLowerCase();
        var l;
        if (!new RegExp(s).test(a))
          throw new TypeError(
            `${t.toUpperCase()}: Option "${n}" provided type "${a}" but expected type "${s}".`
          );
      });
    },
    l = (t) =>
      !(!o(t) || 0 === t.getClientRects().length) &&
      "visible" === getComputedStyle(t).getPropertyValue("visibility"),
    c = (t) =>
      !t ||
      t.nodeType !== Node.ELEMENT_NODE ||
      !!t.classList.contains("disabled") ||
      (void 0 !== t.disabled
        ? t.disabled
        : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")),
    h = (t) => {
      if (!document.documentElement.attachShadow) return null;
      if ("function" == typeof t.getRootNode) {
        const e = t.getRootNode();
        return e instanceof ShadowRoot ? e : null;
      }
      return t instanceof ShadowRoot
        ? t
        : t.parentNode
        ? h(t.parentNode)
        : null;
    },
    d = () => {},
    u = (t) => {
      t.offsetHeight;
    },
    f = () => {
      const { jQuery: t } = window;
      return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null;
    },
    p = [],
    g = () => "rtl" === document.documentElement.dir,
    m = (t) => {
      var e;
      (e = () => {
        const e = f();
        if (e) {
          const i = t.NAME,
            n = e.fn[i];
          (e.fn[i] = t.jQueryInterface),
            (e.fn[i].Constructor = t),
            (e.fn[i].noConflict = () => ((e.fn[i] = n), t.jQueryInterface));
        }
      }),
        "loading" === document.readyState
          ? (p.length ||
              document.addEventListener("DOMContentLoaded", () => {
                p.forEach((t) => t());
              }),
            p.push(e))
          : e();
    },
    _ = (t) => {
      "function" == typeof t && t();
    },
    v = (e, i, n = !0) => {
      if (!n) return void _(e);
      const o =
        ((t) => {
          if (!t) return 0;
          let { transitionDuration: e, transitionDelay: i } =
            window.getComputedStyle(t);
          const n = Number.parseFloat(e),
            s = Number.parseFloat(i);
          return n || s
            ? ((e = e.split(",")[0]),
              (i = i.split(",")[0]),
              1e3 * (Number.parseFloat(e) + Number.parseFloat(i)))
            : 0;
        })(i) + 5;
      let r = !1;
      const a = ({ target: n }) => {
        n === i && ((r = !0), i.removeEventListener(t, a), _(e));
      };
      i.addEventListener(t, a),
        setTimeout(() => {
          r || s(i);
        }, o);
    },
    b = (t, e, i, n) => {
      let s = t.indexOf(e);
      if (-1 === s) return t[!i && n ? t.length - 1 : 0];
      const o = t.length;
      return (
        (s += i ? 1 : -1),
        n && (s = (s + o) % o),
        t[Math.max(0, Math.min(s, o - 1))]
      );
    },
    y = /[^.]*(?=\..*)\.|.*/,
    w = /\..*/,
    E = /::\d+$/,
    A = {};
  let T = 1;
  const O = { mouseenter: "mouseover", mouseleave: "mouseout" },
    C = /^(mouseenter|mouseleave)/i,
    k = new Set([
      "click",
      "dblclick",
      "mouseup",
      "mousedown",
      "contextmenu",
      "mousewheel",
      "DOMMouseScroll",
      "mouseover",
      "mouseout",
      "mousemove",
      "selectstart",
      "selectend",
      "keydown",
      "keypress",
      "keyup",
      "orientationchange",
      "touchstart",
      "touchmove",
      "touchend",
      "touchcancel",
      "pointerdown",
      "pointermove",
      "pointerup",
      "pointerleave",
      "pointercancel",
      "gesturestart",
      "gesturechange",
      "gestureend",
      "focus",
      "blur",
      "change",
      "reset",
      "select",
      "submit",
      "focusin",
      "focusout",
      "load",
      "unload",
      "beforeunload",
      "resize",
      "move",
      "DOMContentLoaded",
      "readystatechange",
      "error",
      "abort",
      "scroll",
    ]);
  function L(t, e) {
    return (e && `${e}::${T++}`) || t.uidEvent || T++;
  }
  function x(t) {
    const e = L(t);
    return (t.uidEvent = e), (A[e] = A[e] || {}), A[e];
  }
  function $(t, e, i = null) {
    const n = Object.keys(t);
    for (let s = 0, o = n.length; s < o; s++) {
      const o = t[n[s]];
      if (o.originalHandler === e && o.delegationSelector === i) return o;
    }
    return null;
  }
  function D(t, e, i) {
    const n = "string" == typeof e,
      s = n ? i : e;
    let o = I(t);
    return k.has(o) || (o = t), [n, s, o];
  }
  function S(t, e, i, n, s) {
    if ("string" != typeof e || !t) return;
    if ((i || ((i = n), (n = null)), C.test(e))) {
      const t = (t) =>
        function (e) {
          if (
            !e.relatedTarget ||
            (e.relatedTarget !== e.delegateTarget &&
              !e.delegateTarget.contains(e.relatedTarget))
          )
            return t.call(this, e);
        };
      n ? (n = t(n)) : (i = t(i));
    }
    const [o, r, a] = D(e, i, n),
      l = x(t),
      c = l[a] || (l[a] = {}),
      h = $(c, r, o ? i : null);
    if (h) return void (h.oneOff = h.oneOff && s);
    const d = L(r, e.replace(y, "")),
      u = o
        ? (function (t, e, i) {
            return function n(s) {
              const o = t.querySelectorAll(e);
              for (let { target: r } = s; r && r !== this; r = r.parentNode)
                for (let a = o.length; a--; )
                  if (o[a] === r)
                    return (
                      (s.delegateTarget = r),
                      n.oneOff && P.off(t, s.type, e, i),
                      i.apply(r, [s])
                    );
              return null;
            };
          })(t, i, n)
        : (function (t, e) {
            return function i(n) {
              return (
                (n.delegateTarget = t),
                i.oneOff && P.off(t, n.type, e),
                e.apply(t, [n])
              );
            };
          })(t, i);
    (u.delegationSelector = o ? i : null),
      (u.originalHandler = r),
      (u.oneOff = s),
      (u.uidEvent = d),
      (c[d] = u),
      t.addEventListener(a, u, o);
  }
  function N(t, e, i, n, s) {
    const o = $(e[i], n, s);
    o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent]);
  }
  function I(t) {
    return (t = t.replace(w, "")), O[t] || t;
  }
  const P = {
      on(t, e, i, n) {
        S(t, e, i, n, !1);
      },
      one(t, e, i, n) {
        S(t, e, i, n, !0);
      },
      off(t, e, i, n) {
        if ("string" != typeof e || !t) return;
        const [s, o, r] = D(e, i, n),
          a = r !== e,
          l = x(t),
          c = e.startsWith(".");
        if (void 0 !== o) {
          if (!l || !l[r]) return;
          return void N(t, l, r, o, s ? i : null);
        }
        c &&
          Object.keys(l).forEach((i) => {
            !(function (t, e, i, n) {
              const s = e[i] || {};
              Object.keys(s).forEach((o) => {
                if (o.includes(n)) {
                  const n = s[o];
                  N(t, e, i, n.originalHandler, n.delegationSelector);
                }
              });
            })(t, l, i, e.slice(1));
          });
        const h = l[r] || {};
        Object.keys(h).forEach((i) => {
          const n = i.replace(E, "");
          if (!a || e.includes(n)) {
            const e = h[i];
            N(t, l, r, e.originalHandler, e.delegationSelector);
          }
        });
      },
      trigger(t, e, i) {
        if ("string" != typeof e || !t) return null;
        const n = f(),
          s = I(e),
          o = e !== s,
          r = k.has(s);
        let a,
          l = !0,
          c = !0,
          h = !1,
          d = null;
        return (
          o &&
            n &&
            ((a = n.Event(e, i)),
            n(t).trigger(a),
            (l = !a.isPropagationStopped()),
            (c = !a.isImmediatePropagationStopped()),
            (h = a.isDefaultPrevented())),
          r
            ? ((d = document.createEvent("HTMLEvents")), d.initEvent(s, l, !0))
            : (d = new CustomEvent(e, { bubbles: l, cancelable: !0 })),
          void 0 !== i &&
            Object.keys(i).forEach((t) => {
              Object.defineProperty(d, t, { get: () => i[t] });
            }),
          h && d.preventDefault(),
          c && t.dispatchEvent(d),
          d.defaultPrevented && void 0 !== a && a.preventDefault(),
          d
        );
      },
    },
    j = new Map(),
    M = {
      set(t, e, i) {
        j.has(t) || j.set(t, new Map());
        const n = j.get(t);
        n.has(e) || 0 === n.size
          ? n.set(e, i)
          : console.error(
              `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
                Array.from(n.keys())[0]
              }.`
            );
      },
      get: (t, e) => (j.has(t) && j.get(t).get(e)) || null,
      remove(t, e) {
        if (!j.has(t)) return;
        const i = j.get(t);
        i.delete(e), 0 === i.size && j.delete(t);
      },
    };
  class H {
    constructor(t) {
      (t = r(t)) &&
        ((this._element = t),
        M.set(this._element, this.constructor.DATA_KEY, this));
    }
    dispose() {
      M.remove(this._element, this.constructor.DATA_KEY),
        P.off(this._element, this.constructor.EVENT_KEY),
        Object.getOwnPropertyNames(this).forEach((t) => {
          this[t] = null;
        });
    }
    _queueCallback(t, e, i = !0) {
      v(t, e, i);
    }
    static getInstance(t) {
      return M.get(r(t), this.DATA_KEY);
    }
    static getOrCreateInstance(t, e = {}) {
      return (
        this.getInstance(t) || new this(t, "object" == typeof e ? e : null)
      );
    }
    static get VERSION() {
      return "5.1.3";
    }
    static get NAME() {
      throw new Error(
        'You have to implement the static method "NAME", for each component!'
      );
    }
    static get DATA_KEY() {
      return `bs.${this.NAME}`;
    }
    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`;
    }
  }
  const B = (t, e = "hide") => {
      const i = `click.dismiss${t.EVENT_KEY}`,
        s = t.NAME;
      P.on(document, i, `[data-bs-dismiss="${s}"]`, function (i) {
        if (
          (["A", "AREA"].includes(this.tagName) && i.preventDefault(), c(this))
        )
          return;
        const o = n(this) || this.closest(`.${s}`);
        t.getOrCreateInstance(o)[e]();
      });
    },
    R = ".bs.alert",
    W = `close${R}`,
    z = `closed${R}`;
  class q extends H {
    static get NAME() {
      return "alert";
    }
    close() {
      if (P.trigger(this._element, W).defaultPrevented) return;
      this._element.classList.remove("show");
      const t = this._element.classList.contains("fade");
      this._queueCallback(() => this._destroyElement(), this._element, t);
    }
    _destroyElement() {
      this._element.remove(), P.trigger(this._element, z), this.dispose();
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = q.getOrCreateInstance(this);
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
            throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  }
  B(q, "close"), m(q);
  const F = '[data-bs-toggle="button"]';
  class U extends H {
    static get NAME() {
      return "button";
    }
    toggle() {
      this._element.setAttribute(
        "aria-pressed",
        this._element.classList.toggle("active")
      );
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = U.getOrCreateInstance(this);
        "toggle" === t && e[t]();
      });
    }
  }
  function V(t) {
    return (
      "true" === t ||
      ("false" !== t &&
        (t === Number(t).toString()
          ? Number(t)
          : "" === t || "null" === t
          ? null
          : t))
    );
  }
  function K(t) {
    return t.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
  }
  P.on(document, "click.bs.button.data-api", F, (t) => {
    t.preventDefault();
    const e = t.target.closest(F);
    U.getOrCreateInstance(e).toggle();
  }),
    m(U);
  const X = {
      setDataAttribute(t, e, i) {
        t.setAttribute(`data-bs-${K(e)}`, i);
      },
      removeDataAttribute(t, e) {
        t.removeAttribute(`data-bs-${K(e)}`);
      },
      getDataAttributes(t) {
        if (!t) return {};
        const e = {};
        return (
          Object.keys(t.dataset)
            .filter((t) => t.startsWith("bs"))
            .forEach((i) => {
              let n = i.replace(/^bs/, "");
              (n = n.charAt(0).toLowerCase() + n.slice(1, n.length)),
                (e[n] = V(t.dataset[i]));
            }),
          e
        );
      },
      getDataAttribute: (t, e) => V(t.getAttribute(`data-bs-${K(e)}`)),
      offset(t) {
        const e = t.getBoundingClientRect();
        return {
          top: e.top + window.pageYOffset,
          left: e.left + window.pageXOffset,
        };
      },
      position: (t) => ({ top: t.offsetTop, left: t.offsetLeft }),
    },
    Y = {
      find: (t, e = document.documentElement) =>
        [].concat(...Element.prototype.querySelectorAll.call(e, t)),
      findOne: (t, e = document.documentElement) =>
        Element.prototype.querySelector.call(e, t),
      children: (t, e) => [].concat(...t.children).filter((t) => t.matches(e)),
      parents(t, e) {
        const i = [];
        let n = t.parentNode;
        for (; n && n.nodeType === Node.ELEMENT_NODE && 3 !== n.nodeType; )
          n.matches(e) && i.push(n), (n = n.parentNode);
        return i;
      },
      prev(t, e) {
        let i = t.previousElementSibling;
        for (; i; ) {
          if (i.matches(e)) return [i];
          i = i.previousElementSibling;
        }
        return [];
      },
      next(t, e) {
        let i = t.nextElementSibling;
        for (; i; ) {
          if (i.matches(e)) return [i];
          i = i.nextElementSibling;
        }
        return [];
      },
      focusableChildren(t) {
        const e = [
          "a",
          "button",
          "input",
          "textarea",
          "select",
          "details",
          "[tabindex]",
          '[contenteditable="true"]',
        ]
          .map((t) => `${t}:not([tabindex^="-"])`)
          .join(", ");
        return this.find(e, t).filter((t) => !c(t) && l(t));
      },
    },
    Q = "carousel",
    G = ".bs.carousel",
    Z = ".data-api",
    J = {
      interval: 5e3,
      keyboard: !0,
      slide: !1,
      pause: "hover",
      wrap: !0,
      touch: !0,
    },
    tt = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      slide: "(boolean|string)",
      pause: "(string|boolean)",
      wrap: "boolean",
      touch: "boolean",
    },
    et = "next",
    it = "prev",
    nt = "left",
    st = "right",
    ot = { ArrowLeft: st, ArrowRight: nt },
    rt = `slide${G}`,
    at = `slid${G}`,
    lt = `keydown${G}`,
    ct = `mouseenter${G}`,
    ht = `mouseleave${G}`,
    dt = `touchstart${G}`,
    ut = `touchmove${G}`,
    ft = `touchend${G}`,
    pt = `pointerdown${G}`,
    gt = `pointerup${G}`,
    mt = `dragstart${G}`,
    _t = `load${G}${Z}`,
    vt = `click${G}${Z}`,
    bt = "active",
    yt = ".active.carousel-item";
  class wt extends H {
    constructor(t, e) {
      super(t),
        (this._items = null),
        (this._interval = null),
        (this._activeElement = null),
        (this._isPaused = !1),
        (this._isSliding = !1),
        (this.touchTimeout = null),
        (this.touchStartX = 0),
        (this.touchDeltaX = 0),
        (this._config = this._getConfig(e)),
        (this._indicatorsElement = Y.findOne(
          ".carousel-indicators",
          this._element
        )),
        (this._touchSupported =
          "ontouchstart" in document.documentElement ||
          navigator.maxTouchPoints > 0),
        (this._pointerEvent = Boolean(window.PointerEvent)),
        this._addEventListeners();
    }
    static get Default() {
      return J;
    }
    static get NAME() {
      return Q;
    }
    next() {
      this._slide(et);
    }
    nextWhenVisible() {
      !document.hidden && l(this._element) && this.next();
    }
    prev() {
      this._slide(it);
    }
    pause(t) {
      t || (this._isPaused = !0),
        Y.findOne(".carousel-item-next, .carousel-item-prev", this._element) &&
          (s(this._element), this.cycle(!0)),
        clearInterval(this._interval),
        (this._interval = null);
    }
    cycle(t) {
      t || (this._isPaused = !1),
        this._interval &&
          (clearInterval(this._interval), (this._interval = null)),
        this._config &&
          this._config.interval &&
          !this._isPaused &&
          (this._updateInterval(),
          (this._interval = setInterval(
            (document.visibilityState ? this.nextWhenVisible : this.next).bind(
              this
            ),
            this._config.interval
          )));
    }
    to(t) {
      this._activeElement = Y.findOne(yt, this._element);
      const e = this._getItemIndex(this._activeElement);
      if (t > this._items.length - 1 || t < 0) return;
      if (this._isSliding)
        return void P.one(this._element, at, () => this.to(t));
      if (e === t) return this.pause(), void this.cycle();
      const i = t > e ? et : it;
      this._slide(i, this._items[t]);
    }
    _getConfig(t) {
      return (
        (t = {
          ...J,
          ...X.getDataAttributes(this._element),
          ...("object" == typeof t ? t : {}),
        }),
        a(Q, t, tt),
        t
      );
    }
    _handleSwipe() {
      const t = Math.abs(this.touchDeltaX);
      if (t <= 40) return;
      const e = t / this.touchDeltaX;
      (this.touchDeltaX = 0), e && this._slide(e > 0 ? st : nt);
    }
    _addEventListeners() {
      this._config.keyboard && P.on(this._element, lt, (t) => this._keydown(t)),
        "hover" === this._config.pause &&
          (P.on(this._element, ct, (t) => this.pause(t)),
          P.on(this._element, ht, (t) => this.cycle(t))),
        this._config.touch &&
          this._touchSupported &&
          this._addTouchEventListeners();
    }
    _addTouchEventListeners() {
      const t = (t) =>
          this._pointerEvent &&
          ("pen" === t.pointerType || "touch" === t.pointerType),
        e = (e) => {
          t(e)
            ? (this.touchStartX = e.clientX)
            : this._pointerEvent || (this.touchStartX = e.touches[0].clientX);
        },
        i = (t) => {
          this.touchDeltaX =
            t.touches && t.touches.length > 1
              ? 0
              : t.touches[0].clientX - this.touchStartX;
        },
        n = (e) => {
          t(e) && (this.touchDeltaX = e.clientX - this.touchStartX),
            this._handleSwipe(),
            "hover" === this._config.pause &&
              (this.pause(),
              this.touchTimeout && clearTimeout(this.touchTimeout),
              (this.touchTimeout = setTimeout(
                (t) => this.cycle(t),
                500 + this._config.interval
              )));
        };
      Y.find(".carousel-item img", this._element).forEach((t) => {
        P.on(t, mt, (t) => t.preventDefault());
      }),
        this._pointerEvent
          ? (P.on(this._element, pt, (t) => e(t)),
            P.on(this._element, gt, (t) => n(t)),
            this._element.classList.add("pointer-event"))
          : (P.on(this._element, dt, (t) => e(t)),
            P.on(this._element, ut, (t) => i(t)),
            P.on(this._element, ft, (t) => n(t)));
    }
    _keydown(t) {
      if (/input|textarea/i.test(t.target.tagName)) return;
      const e = ot[t.key];
      e && (t.preventDefault(), this._slide(e));
    }
    _getItemIndex(t) {
      return (
        (this._items =
          t && t.parentNode ? Y.find(".carousel-item", t.parentNode) : []),
        this._items.indexOf(t)
      );
    }
    _getItemByOrder(t, e) {
      const i = t === et;
      return b(this._items, e, i, this._config.wrap);
    }
    _triggerSlideEvent(t, e) {
      const i = this._getItemIndex(t),
        n = this._getItemIndex(Y.findOne(yt, this._element));
      return P.trigger(this._element, rt, {
        relatedTarget: t,
        direction: e,
        from: n,
        to: i,
      });
    }
    _setActiveIndicatorElement(t) {
      if (this._indicatorsElement) {
        const e = Y.findOne(".active", this._indicatorsElement);
        e.classList.remove(bt), e.removeAttribute("aria-current");
        const i = Y.find("[data-bs-target]", this._indicatorsElement);
        for (let e = 0; e < i.length; e++)
          if (
            Number.parseInt(i[e].getAttribute("data-bs-slide-to"), 10) ===
            this._getItemIndex(t)
          ) {
            i[e].classList.add(bt), i[e].setAttribute("aria-current", "true");
            break;
          }
      }
    }
    _updateInterval() {
      const t = this._activeElement || Y.findOne(yt, this._element);
      if (!t) return;
      const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
      e
        ? ((this._config.defaultInterval =
            this._config.defaultInterval || this._config.interval),
          (this._config.interval = e))
        : (this._config.interval =
            this._config.defaultInterval || this._config.interval);
    }
    _slide(t, e) {
      const i = this._directionToOrder(t),
        n = Y.findOne(yt, this._element),
        s = this._getItemIndex(n),
        o = e || this._getItemByOrder(i, n),
        r = this._getItemIndex(o),
        a = Boolean(this._interval),
        l = i === et,
        c = l ? "carousel-item-start" : "carousel-item-end",
        h = l ? "carousel-item-next" : "carousel-item-prev",
        d = this._orderToDirection(i);
      if (o && o.classList.contains(bt)) return void (this._isSliding = !1);
      if (this._isSliding) return;
      if (this._triggerSlideEvent(o, d).defaultPrevented) return;
      if (!n || !o) return;
      (this._isSliding = !0),
        a && this.pause(),
        this._setActiveIndicatorElement(o),
        (this._activeElement = o);
      const f = () => {
        P.trigger(this._element, at, {
          relatedTarget: o,
          direction: d,
          from: s,
          to: r,
        });
      };
      if (this._element.classList.contains("slide")) {
        o.classList.add(h), u(o), n.classList.add(c), o.classList.add(c);
        const t = () => {
          o.classList.remove(c, h),
            o.classList.add(bt),
            n.classList.remove(bt, h, c),
            (this._isSliding = !1),
            setTimeout(f, 0);
        };
        this._queueCallback(t, n, !0);
      } else n.classList.remove(bt), o.classList.add(bt), (this._isSliding = !1), f();
      a && this.cycle();
    }
    _directionToOrder(t) {
      return [st, nt].includes(t)
        ? g()
          ? t === nt
            ? it
            : et
          : t === nt
          ? et
          : it
        : t;
    }
    _orderToDirection(t) {
      return [et, it].includes(t)
        ? g()
          ? t === it
            ? nt
            : st
          : t === it
          ? st
          : nt
        : t;
    }
    static carouselInterface(t, e) {
      const i = wt.getOrCreateInstance(t, e);
      let { _config: n } = i;
      "object" == typeof e && (n = { ...n, ...e });
      const s = "string" == typeof e ? e : n.slide;
      if ("number" == typeof e) i.to(e);
      else if ("string" == typeof s) {
        if (void 0 === i[s]) throw new TypeError(`No method named "${s}"`);
        i[s]();
      } else n.interval && n.ride && (i.pause(), i.cycle());
    }
    static jQueryInterface(t) {
      return this.each(function () {
        wt.carouselInterface(this, t);
      });
    }
    static dataApiClickHandler(t) {
      const e = n(this);
      if (!e || !e.classList.contains("carousel")) return;
      const i = { ...X.getDataAttributes(e), ...X.getDataAttributes(this) },
        s = this.getAttribute("data-bs-slide-to");
      s && (i.interval = !1),
        wt.carouselInterface(e, i),
        s && wt.getInstance(e).to(s),
        t.preventDefault();
    }
  }
  P.on(
    document,
    vt,
    "[data-bs-slide], [data-bs-slide-to]",
    wt.dataApiClickHandler
  ),
    P.on(window, _t, () => {
      const t = Y.find('[data-bs-ride="carousel"]');
      for (let e = 0, i = t.length; e < i; e++)
        wt.carouselInterface(t[e], wt.getInstance(t[e]));
    }),
    m(wt);
  const Et = "collapse",
    At = "bs.collapse",
    Tt = `.${At}`,
    Ot = { toggle: !0, parent: null },
    Ct = { toggle: "boolean", parent: "(null|element)" },
    kt = `show${Tt}`,
    Lt = `shown${Tt}`,
    xt = `hide${Tt}`,
    $t = `hidden${Tt}`,
    Dt = `click${Tt}.data-api`,
    St = "show",
    Nt = "collapse",
    It = "collapsing",
    Pt = "collapsed",
    jt = `:scope .${Nt} .${Nt}`,
    Mt = '[data-bs-toggle="collapse"]';
  class Ht extends H {
    constructor(t, e) {
      super(t),
        (this._isTransitioning = !1),
        (this._config = this._getConfig(e)),
        (this._triggerArray = []);
      const n = Y.find(Mt);
      for (let t = 0, e = n.length; t < e; t++) {
        const e = n[t],
          s = i(e),
          o = Y.find(s).filter((t) => t === this._element);
        null !== s &&
          o.length &&
          ((this._selector = s), this._triggerArray.push(e));
      }
      this._initializeChildren(),
        this._config.parent ||
          this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
        this._config.toggle && this.toggle();
    }
    static get Default() {
      return Ot;
    }
    static get NAME() {
      return Et;
    }
    toggle() {
      this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (this._isTransitioning || this._isShown()) return;
      let t,
        e = [];
      if (this._config.parent) {
        const t = Y.find(jt, this._config.parent);
        e = Y.find(
          ".collapse.show, .collapse.collapsing",
          this._config.parent
        ).filter((e) => !t.includes(e));
      }
      const i = Y.findOne(this._selector);
      if (e.length) {
        const n = e.find((t) => i !== t);
        if (((t = n ? Ht.getInstance(n) : null), t && t._isTransitioning))
          return;
      }
      if (P.trigger(this._element, kt).defaultPrevented) return;
      e.forEach((e) => {
        i !== e && Ht.getOrCreateInstance(e, { toggle: !1 }).hide(),
          t || M.set(e, At, null);
      });
      const n = this._getDimension();
      this._element.classList.remove(Nt),
        this._element.classList.add(It),
        (this._element.style[n] = 0),
        this._addAriaAndCollapsedClass(this._triggerArray, !0),
        (this._isTransitioning = !0);
      const s = `scroll${n[0].toUpperCase() + n.slice(1)}`;
      this._queueCallback(
        () => {
          (this._isTransitioning = !1),
            this._element.classList.remove(It),
            this._element.classList.add(Nt, St),
            (this._element.style[n] = ""),
            P.trigger(this._element, Lt);
        },
        this._element,
        !0
      ),
        (this._element.style[n] = `${this._element[s]}px`);
    }
    hide() {
      if (this._isTransitioning || !this._isShown()) return;
      if (P.trigger(this._element, xt).defaultPrevented) return;
      const t = this._getDimension();
      (this._element.style[t] = `${
        this._element.getBoundingClientRect()[t]
      }px`),
        u(this._element),
        this._element.classList.add(It),
        this._element.classList.remove(Nt, St);
      const e = this._triggerArray.length;
      for (let t = 0; t < e; t++) {
        const e = this._triggerArray[t],
          i = n(e);
        i && !this._isShown(i) && this._addAriaAndCollapsedClass([e], !1);
      }
      this._isTransitioning = !0;
      (this._element.style[t] = ""),
        this._queueCallback(
          () => {
            (this._isTransitioning = !1),
              this._element.classList.remove(It),
              this._element.classList.add(Nt),
              P.trigger(this._element, $t);
          },
          this._element,
          !0
        );
    }
    _isShown(t = this._element) {
      return t.classList.contains(St);
    }
    _getConfig(t) {
      return (
        ((t = { ...Ot, ...X.getDataAttributes(this._element), ...t }).toggle =
          Boolean(t.toggle)),
        (t.parent = r(t.parent)),
        a(Et, t, Ct),
        t
      );
    }
    _getDimension() {
      return this._element.classList.contains("collapse-horizontal")
        ? "width"
        : "height";
    }
    _initializeChildren() {
      if (!this._config.parent) return;
      const t = Y.find(jt, this._config.parent);
      Y.find(Mt, this._config.parent)
        .filter((e) => !t.includes(e))
        .forEach((t) => {
          const e = n(t);
          e && this._addAriaAndCollapsedClass([t], this._isShown(e));
        });
    }
    _addAriaAndCollapsedClass(t, e) {
      t.length &&
        t.forEach((t) => {
          e ? t.classList.remove(Pt) : t.classList.add(Pt),
            t.setAttribute("aria-expanded", e);
        });
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = {};
        "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1);
        const i = Ht.getOrCreateInstance(this, e);
        if ("string" == typeof t) {
          if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
          i[t]();
        }
      });
    }
  }
  P.on(document, Dt, Mt, function (t) {
    ("A" === t.target.tagName ||
      (t.delegateTarget && "A" === t.delegateTarget.tagName)) &&
      t.preventDefault();
    const e = i(this);
    Y.find(e).forEach((t) => {
      Ht.getOrCreateInstance(t, { toggle: !1 }).toggle();
    });
  }),
    m(Ht);
  var Bt = "top",
    Rt = "bottom",
    Wt = "right",
    zt = "left",
    qt = "auto",
    Ft = [Bt, Rt, Wt, zt],
    Ut = "start",
    Vt = "end",
    Kt = "clippingParents",
    Xt = "viewport",
    Yt = "popper",
    Qt = "reference",
    Gt = Ft.reduce(function (t, e) {
      return t.concat([e + "-" + Ut, e + "-" + Vt]);
    }, []),
    Zt = [].concat(Ft, [qt]).reduce(function (t, e) {
      return t.concat([e, e + "-" + Ut, e + "-" + Vt]);
    }, []),
    Jt = "beforeRead",
    te = "read",
    ee = "afterRead",
    ie = "beforeMain",
    ne = "main",
    se = "afterMain",
    oe = "beforeWrite",
    re = "write",
    ae = "afterWrite",
    le = [Jt, te, ee, ie, ne, se, oe, re, ae];
  function ce(t) {
    return t ? (t.nodeName || "").toLowerCase() : null;
  }
  function he(t) {
    if (null == t) return window;
    if ("[object Window]" !== t.toString()) {
      var e = t.ownerDocument;
      return (e && e.defaultView) || window;
    }
    return t;
  }
  function de(t) {
    return t instanceof he(t).Element || t instanceof Element;
  }
  function ue(t) {
    return t instanceof he(t).HTMLElement || t instanceof HTMLElement;
  }
  function fe(t) {
    return (
      "undefined" != typeof ShadowRoot &&
      (t instanceof he(t).ShadowRoot || t instanceof ShadowRoot)
    );
  }
  const pe = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: function (t) {
      var e = t.state;
      Object.keys(e.elements).forEach(function (t) {
        var i = e.styles[t] || {},
          n = e.attributes[t] || {},
          s = e.elements[t];
        ue(s) &&
          ce(s) &&
          (Object.assign(s.style, i),
          Object.keys(n).forEach(function (t) {
            var e = n[t];
            !1 === e
              ? s.removeAttribute(t)
              : s.setAttribute(t, !0 === e ? "" : e);
          }));
      });
    },
    effect: function (t) {
      var e = t.state,
        i = {
          popper: {
            position: e.options.strategy,
            left: "0",
            top: "0",
            margin: "0",
          },
          arrow: { position: "absolute" },
          reference: {},
        };
      return (
        Object.assign(e.elements.popper.style, i.popper),
        (e.styles = i),
        e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow),
        function () {
          Object.keys(e.elements).forEach(function (t) {
            var n = e.elements[t],
              s = e.attributes[t] || {},
              o = Object.keys(
                e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]
              ).reduce(function (t, e) {
                return (t[e] = ""), t;
              }, {});
            ue(n) &&
              ce(n) &&
              (Object.assign(n.style, o),
              Object.keys(s).forEach(function (t) {
                n.removeAttribute(t);
              }));
          });
        }
      );
    },
    requires: ["computeStyles"],
  };
  function ge(t) {
    return t.split("-")[0];
  }
  function me(t, e) {
    var i = t.getBoundingClientRect();
    return {
      width: i.width / 1,
      height: i.height / 1,
      top: i.top / 1,
      right: i.right / 1,
      bottom: i.bottom / 1,
      left: i.left / 1,
      x: i.left / 1,
      y: i.top / 1,
    };
  }
  function _e(t) {
    var e = me(t),
      i = t.offsetWidth,
      n = t.offsetHeight;
    return (
      Math.abs(e.width - i) <= 1 && (i = e.width),
      Math.abs(e.height - n) <= 1 && (n = e.height),
      { x: t.offsetLeft, y: t.offsetTop, width: i, height: n }
    );
  }
  function ve(t, e) {
    var i = e.getRootNode && e.getRootNode();
    if (t.contains(e)) return !0;
    if (i && fe(i)) {
      var n = e;
      do {
        if (n && t.isSameNode(n)) return !0;
        n = n.parentNode || n.host;
      } while (n);
    }
    return !1;
  }
  function be(t) {
    return he(t).getComputedStyle(t);
  }
  function ye(t) {
    return ["table", "td", "th"].indexOf(ce(t)) >= 0;
  }
  function we(t) {
    return (
      (de(t) ? t.ownerDocument : t.document) || window.document
    ).documentElement;
  }
  function Ee(t) {
    return "html" === ce(t)
      ? t
      : t.assignedSlot || t.parentNode || (fe(t) ? t.host : null) || we(t);
  }
  function Ae(t) {
    return ue(t) && "fixed" !== be(t).position ? t.offsetParent : null;
  }
  function Te(t) {
    for (var e = he(t), i = Ae(t); i && ye(i) && "static" === be(i).position; )
      i = Ae(i);
    return i &&
      ("html" === ce(i) || ("body" === ce(i) && "static" === be(i).position))
      ? e
      : i ||
          (function (t) {
            var e = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
            if (
              -1 !== navigator.userAgent.indexOf("Trident") &&
              ue(t) &&
              "fixed" === be(t).position
            )
              return null;
            for (
              var i = Ee(t);
              ue(i) && ["html", "body"].indexOf(ce(i)) < 0;

            ) {
              var n = be(i);
              if (
                "none" !== n.transform ||
                "none" !== n.perspective ||
                "paint" === n.contain ||
                -1 !== ["transform", "perspective"].indexOf(n.willChange) ||
                (e && "filter" === n.willChange) ||
                (e && n.filter && "none" !== n.filter)
              )
                return i;
              i = i.parentNode;
            }
            return null;
          })(t) ||
          e;
  }
  function Oe(t) {
    return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
  }
  var Ce = Math.max,
    ke = Math.min,
    Le = Math.round;
  function xe(t, e, i) {
    return Ce(t, ke(e, i));
  }
  function $e(t) {
    return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, t);
  }
  function De(t, e) {
    return e.reduce(function (e, i) {
      return (e[i] = t), e;
    }, {});
  }
  const Se = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: function (t) {
      var e,
        i = t.state,
        n = t.name,
        s = t.options,
        o = i.elements.arrow,
        r = i.modifiersData.popperOffsets,
        a = ge(i.placement),
        l = Oe(a),
        c = [zt, Wt].indexOf(a) >= 0 ? "height" : "width";
      if (o && r) {
        var h = (function (t, e) {
            return $e(
              "number" !=
                typeof (t =
                  "function" == typeof t
                    ? t(Object.assign({}, e.rects, { placement: e.placement }))
                    : t)
                ? t
                : De(t, Ft)
            );
          })(s.padding, i),
          d = _e(o),
          u = "y" === l ? Bt : zt,
          f = "y" === l ? Rt : Wt,
          p =
            i.rects.reference[c] +
            i.rects.reference[l] -
            r[l] -
            i.rects.popper[c],
          g = r[l] - i.rects.reference[l],
          m = Te(o),
          _ = m ? ("y" === l ? m.clientHeight || 0 : m.clientWidth || 0) : 0,
          v = p / 2 - g / 2,
          b = h[u],
          y = _ - d[c] - h[f],
          w = _ / 2 - d[c] / 2 + v,
          E = xe(b, w, y),
          A = l;
        i.modifiersData[n] = (((e = {})[A] = E), (e.centerOffset = E - w), e);
      }
    },
    effect: function (t) {
      var e = t.state,
        i = t.options.element,
        n = void 0 === i ? "[data-popper-arrow]" : i;
      null != n &&
        ("string" != typeof n || (n = e.elements.popper.querySelector(n))) &&
        ve(e.elements.popper, n) &&
        (e.elements.arrow = n);
    },
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"],
  };
  function Ne(t) {
    return t.split("-")[1];
  }
  var Ie = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
  function Pe(t) {
    var e,
      i = t.popper,
      n = t.popperRect,
      s = t.placement,
      o = t.variation,
      r = t.offsets,
      a = t.position,
      l = t.gpuAcceleration,
      c = t.adaptive,
      h = t.roundOffsets,
      d =
        !0 === h
          ? (function (t) {
              var e = t.x,
                i = t.y,
                n = window.devicePixelRatio || 1;
              return { x: Le(Le(e * n) / n) || 0, y: Le(Le(i * n) / n) || 0 };
            })(r)
          : "function" == typeof h
          ? h(r)
          : r,
      u = d.x,
      f = void 0 === u ? 0 : u,
      p = d.y,
      g = void 0 === p ? 0 : p,
      m = r.hasOwnProperty("x"),
      _ = r.hasOwnProperty("y"),
      v = zt,
      b = Bt,
      y = window;
    if (c) {
      var w = Te(i),
        E = "clientHeight",
        A = "clientWidth";
      w === he(i) &&
        "static" !== be((w = we(i))).position &&
        "absolute" === a &&
        ((E = "scrollHeight"), (A = "scrollWidth")),
        (s !== Bt && ((s !== zt && s !== Wt) || o !== Vt)) ||
          ((b = Rt), (g -= w[E] - n.height), (g *= l ? 1 : -1)),
        (s !== zt && ((s !== Bt && s !== Rt) || o !== Vt)) ||
          ((v = Wt), (f -= w[A] - n.width), (f *= l ? 1 : -1));
    }
    var T,
      O = Object.assign({ position: a }, c && Ie);
    return l
      ? Object.assign(
          {},
          O,
          (((T = {})[b] = _ ? "0" : ""),
          (T[v] = m ? "0" : ""),
          (T.transform =
            (y.devicePixelRatio || 1) <= 1
              ? "translate(" + f + "px, " + g + "px)"
              : "translate3d(" + f + "px, " + g + "px, 0)"),
          T)
        )
      : Object.assign(
          {},
          O,
          (((e = {})[b] = _ ? g + "px" : ""),
          (e[v] = m ? f + "px" : ""),
          (e.transform = ""),
          e)
        );
  }
  const je = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: function (t) {
      var e = t.state,
        i = t.options,
        n = i.gpuAcceleration,
        s = void 0 === n || n,
        o = i.adaptive,
        r = void 0 === o || o,
        a = i.roundOffsets,
        l = void 0 === a || a,
        c = {
          placement: ge(e.placement),
          variation: Ne(e.placement),
          popper: e.elements.popper,
          popperRect: e.rects.popper,
          gpuAcceleration: s,
        };
      null != e.modifiersData.popperOffsets &&
        (e.styles.popper = Object.assign(
          {},
          e.styles.popper,
          Pe(
            Object.assign({}, c, {
              offsets: e.modifiersData.popperOffsets,
              position: e.options.strategy,
              adaptive: r,
              roundOffsets: l,
            })
          )
        )),
        null != e.modifiersData.arrow &&
          (e.styles.arrow = Object.assign(
            {},
            e.styles.arrow,
            Pe(
              Object.assign({}, c, {
                offsets: e.modifiersData.arrow,
                position: "absolute",
                adaptive: !1,
                roundOffsets: l,
              })
            )
          )),
        (e.attributes.popper = Object.assign({}, e.attributes.popper, {
          "data-popper-placement": e.placement,
        }));
    },
    data: {},
  };
  var Me = { passive: !0 };
  const He = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function () {},
    effect: function (t) {
      var e = t.state,
        i = t.instance,
        n = t.options,
        s = n.scroll,
        o = void 0 === s || s,
        r = n.resize,
        a = void 0 === r || r,
        l = he(e.elements.popper),
        c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
      return (
        o &&
          c.forEach(function (t) {
            t.addEventListener("scroll", i.update, Me);
          }),
        a && l.addEventListener("resize", i.update, Me),
        function () {
          o &&
            c.forEach(function (t) {
              t.removeEventListener("scroll", i.update, Me);
            }),
            a && l.removeEventListener("resize", i.update, Me);
        }
      );
    },
    data: {},
  };
  var Be = { left: "right", right: "left", bottom: "top", top: "bottom" };
  function Re(t) {
    return t.replace(/left|right|bottom|top/g, function (t) {
      return Be[t];
    });
  }
  var We = { start: "end", end: "start" };
  function ze(t) {
    return t.replace(/start|end/g, function (t) {
      return We[t];
    });
  }
  function qe(t) {
    var e = he(t);
    return { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
  }
  function Fe(t) {
    return me(we(t)).left + qe(t).scrollLeft;
  }
  function Ue(t) {
    var e = be(t),
      i = e.overflow,
      n = e.overflowX,
      s = e.overflowY;
    return /auto|scroll|overlay|hidden/.test(i + s + n);
  }
  function Ve(t) {
    return ["html", "body", "#document"].indexOf(ce(t)) >= 0
      ? t.ownerDocument.body
      : ue(t) && Ue(t)
      ? t
      : Ve(Ee(t));
  }
  function Ke(t, e) {
    var i;
    void 0 === e && (e = []);
    var n = Ve(t),
      s = n === (null == (i = t.ownerDocument) ? void 0 : i.body),
      o = he(n),
      r = s ? [o].concat(o.visualViewport || [], Ue(n) ? n : []) : n,
      a = e.concat(r);
    return s ? a : a.concat(Ke(Ee(r)));
  }
  function Xe(t) {
    return Object.assign({}, t, {
      left: t.x,
      top: t.y,
      right: t.x + t.width,
      bottom: t.y + t.height,
    });
  }
  function Ye(t, e) {
    return e === Xt
      ? Xe(
          (function (t) {
            var e = he(t),
              i = we(t),
              n = e.visualViewport,
              s = i.clientWidth,
              o = i.clientHeight,
              r = 0,
              a = 0;
            return (
              n &&
                ((s = n.width),
                (o = n.height),
                /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
                  ((r = n.offsetLeft), (a = n.offsetTop))),
              { width: s, height: o, x: r + Fe(t), y: a }
            );
          })(t)
        )
      : ue(e)
      ? (function (t) {
          var e = me(t);
          return (
            (e.top = e.top + t.clientTop),
            (e.left = e.left + t.clientLeft),
            (e.bottom = e.top + t.clientHeight),
            (e.right = e.left + t.clientWidth),
            (e.width = t.clientWidth),
            (e.height = t.clientHeight),
            (e.x = e.left),
            (e.y = e.top),
            e
          );
        })(e)
      : Xe(
          (function (t) {
            var e,
              i = we(t),
              n = qe(t),
              s = null == (e = t.ownerDocument) ? void 0 : e.body,
              o = Ce(
                i.scrollWidth,
                i.clientWidth,
                s ? s.scrollWidth : 0,
                s ? s.clientWidth : 0
              ),
              r = Ce(
                i.scrollHeight,
                i.clientHeight,
                s ? s.scrollHeight : 0,
                s ? s.clientHeight : 0
              ),
              a = -n.scrollLeft + Fe(t),
              l = -n.scrollTop;
            return (
              "rtl" === be(s || i).direction &&
                (a += Ce(i.clientWidth, s ? s.clientWidth : 0) - o),
              { width: o, height: r, x: a, y: l }
            );
          })(we(t))
        );
  }
  function Qe(t, e, i) {
    var n =
        "clippingParents" === e
          ? (function (t) {
              var e = Ke(Ee(t)),
                i =
                  ["absolute", "fixed"].indexOf(be(t).position) >= 0 && ue(t)
                    ? Te(t)
                    : t;
              return de(i)
                ? e.filter(function (t) {
                    return de(t) && ve(t, i) && "body" !== ce(t);
                  })
                : [];
            })(t)
          : [].concat(e),
      s = [].concat(n, [i]),
      o = s[0],
      r = s.reduce(function (e, i) {
        var n = Ye(t, i);
        return (
          (e.top = Ce(n.top, e.top)),
          (e.right = ke(n.right, e.right)),
          (e.bottom = ke(n.bottom, e.bottom)),
          (e.left = Ce(n.left, e.left)),
          e
        );
      }, Ye(t, o));
    return (
      (r.width = r.right - r.left),
      (r.height = r.bottom - r.top),
      (r.x = r.left),
      (r.y = r.top),
      r
    );
  }
  function Ge(t) {
    var e,
      i = t.reference,
      n = t.element,
      s = t.placement,
      o = s ? ge(s) : null,
      r = s ? Ne(s) : null,
      a = i.x + i.width / 2 - n.width / 2,
      l = i.y + i.height / 2 - n.height / 2;
    switch (o) {
      case Bt:
        e = { x: a, y: i.y - n.height };
        break;
      case Rt:
        e = { x: a, y: i.y + i.height };
        break;
      case Wt:
        e = { x: i.x + i.width, y: l };
        break;
      case zt:
        e = { x: i.x - n.width, y: l };
        break;
      default:
        e = { x: i.x, y: i.y };
    }
    var c = o ? Oe(o) : null;
    if (null != c) {
      var h = "y" === c ? "height" : "width";
      switch (r) {
        case Ut:
          e[c] = e[c] - (i[h] / 2 - n[h] / 2);
          break;
        case Vt:
          e[c] = e[c] + (i[h] / 2 - n[h] / 2);
      }
    }
    return e;
  }
  function Ze(t, e) {
    void 0 === e && (e = {});
    var i = e,
      n = i.placement,
      s = void 0 === n ? t.placement : n,
      o = i.boundary,
      r = void 0 === o ? Kt : o,
      a = i.rootBoundary,
      l = void 0 === a ? Xt : a,
      c = i.elementContext,
      h = void 0 === c ? Yt : c,
      d = i.altBoundary,
      u = void 0 !== d && d,
      f = i.padding,
      p = void 0 === f ? 0 : f,
      g = $e("number" != typeof p ? p : De(p, Ft)),
      m = h === Yt ? Qt : Yt,
      _ = t.rects.popper,
      v = t.elements[u ? m : h],
      b = Qe(de(v) ? v : v.contextElement || we(t.elements.popper), r, l),
      y = me(t.elements.reference),
      w = Ge({ reference: y, element: _, strategy: "absolute", placement: s }),
      E = Xe(Object.assign({}, _, w)),
      A = h === Yt ? E : y,
      T = {
        top: b.top - A.top + g.top,
        bottom: A.bottom - b.bottom + g.bottom,
        left: b.left - A.left + g.left,
        right: A.right - b.right + g.right,
      },
      O = t.modifiersData.offset;
    if (h === Yt && O) {
      var C = O[s];
      Object.keys(T).forEach(function (t) {
        var e = [Wt, Rt].indexOf(t) >= 0 ? 1 : -1,
          i = [Bt, Rt].indexOf(t) >= 0 ? "y" : "x";
        T[t] += C[i] * e;
      });
    }
    return T;
  }
  function Je(t, e) {
    void 0 === e && (e = {});
    var i = e,
      n = i.placement,
      s = i.boundary,
      o = i.rootBoundary,
      r = i.padding,
      a = i.flipVariations,
      l = i.allowedAutoPlacements,
      c = void 0 === l ? Zt : l,
      h = Ne(n),
      d = h
        ? a
          ? Gt
          : Gt.filter(function (t) {
              return Ne(t) === h;
            })
        : Ft,
      u = d.filter(function (t) {
        return c.indexOf(t) >= 0;
      });
    0 === u.length && (u = d);
    var f = u.reduce(function (e, i) {
      return (
        (e[i] = Ze(t, {
          placement: i,
          boundary: s,
          rootBoundary: o,
          padding: r,
        })[ge(i)]),
        e
      );
    }, {});
    return Object.keys(f).sort(function (t, e) {
      return f[t] - f[e];
    });
  }
  const ti = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: function (t) {
      var e = t.state,
        i = t.options,
        n = t.name;
      if (!e.modifiersData[n]._skip) {
        for (
          var s = i.mainAxis,
            o = void 0 === s || s,
            r = i.altAxis,
            a = void 0 === r || r,
            l = i.fallbackPlacements,
            c = i.padding,
            h = i.boundary,
            d = i.rootBoundary,
            u = i.altBoundary,
            f = i.flipVariations,
            p = void 0 === f || f,
            g = i.allowedAutoPlacements,
            m = e.options.placement,
            _ = ge(m),
            v =
              l ||
              (_ === m || !p
                ? [Re(m)]
                : (function (t) {
                    if (ge(t) === qt) return [];
                    var e = Re(t);
                    return [ze(t), e, ze(e)];
                  })(m)),
            b = [m].concat(v).reduce(function (t, i) {
              return t.concat(
                ge(i) === qt
                  ? Je(e, {
                      placement: i,
                      boundary: h,
                      rootBoundary: d,
                      padding: c,
                      flipVariations: p,
                      allowedAutoPlacements: g,
                    })
                  : i
              );
            }, []),
            y = e.rects.reference,
            w = e.rects.popper,
            E = new Map(),
            A = !0,
            T = b[0],
            O = 0;
          O < b.length;
          O++
        ) {
          var C = b[O],
            k = ge(C),
            L = Ne(C) === Ut,
            x = [Bt, Rt].indexOf(k) >= 0,
            $ = x ? "width" : "height",
            D = Ze(e, {
              placement: C,
              boundary: h,
              rootBoundary: d,
              altBoundary: u,
              padding: c,
            }),
            S = x ? (L ? Wt : zt) : L ? Rt : Bt;
          y[$] > w[$] && (S = Re(S));
          var N = Re(S),
            I = [];
          if (
            (o && I.push(D[k] <= 0),
            a && I.push(D[S] <= 0, D[N] <= 0),
            I.every(function (t) {
              return t;
            }))
          ) {
            (T = C), (A = !1);
            break;
          }
          E.set(C, I);
        }
        if (A)
          for (
            var P = function (t) {
                var e = b.find(function (e) {
                  var i = E.get(e);
                  if (i)
                    return i.slice(0, t).every(function (t) {
                      return t;
                    });
                });
                if (e) return (T = e), "break";
              },
              j = p ? 3 : 1;
            j > 0;
            j--
          ) {
            if ("break" === P(j)) break;
          }
        e.placement !== T &&
          ((e.modifiersData[n]._skip = !0), (e.placement = T), (e.reset = !0));
      }
    },
    requiresIfExists: ["offset"],
    data: { _skip: !1 },
  };
  function ei(t, e, i) {
    return (
      void 0 === i && (i = { x: 0, y: 0 }),
      {
        top: t.top - e.height - i.y,
        right: t.right - e.width + i.x,
        bottom: t.bottom - e.height + i.y,
        left: t.left - e.width - i.x,
      }
    );
  }
  function ii(t) {
    return [Bt, Wt, Rt, zt].some(function (e) {
      return t[e] >= 0;
    });
  }
  const ni = {
    name: "hide",
    enabled: !0,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: function (t) {
      var e = t.state,
        i = t.name,
        n = e.rects.reference,
        s = e.rects.popper,
        o = e.modifiersData.preventOverflow,
        r = Ze(e, { elementContext: "reference" }),
        a = Ze(e, { altBoundary: !0 }),
        l = ei(r, n),
        c = ei(a, s, o),
        h = ii(l),
        d = ii(c);
      (e.modifiersData[i] = {
        referenceClippingOffsets: l,
        popperEscapeOffsets: c,
        isReferenceHidden: h,
        hasPopperEscaped: d,
      }),
        (e.attributes.popper = Object.assign({}, e.attributes.popper, {
          "data-popper-reference-hidden": h,
          "data-popper-escaped": d,
        }));
    },
  };
  const si = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: function (t) {
      var e = t.state,
        i = t.options,
        n = t.name,
        s = i.offset,
        o = void 0 === s ? [0, 0] : s,
        r = Zt.reduce(function (t, i) {
          return (
            (t[i] = (function (t, e, i) {
              var n = ge(t),
                s = [zt, Bt].indexOf(n) >= 0 ? -1 : 1,
                o =
                  "function" == typeof i
                    ? i(Object.assign({}, e, { placement: t }))
                    : i,
                r = o[0],
                a = o[1];
              return (
                (r = r || 0),
                (a = (a || 0) * s),
                [zt, Wt].indexOf(n) >= 0 ? { x: a, y: r } : { x: r, y: a }
              );
            })(i, e.rects, o)),
            t
          );
        }, {}),
        a = r[e.placement],
        l = a.x,
        c = a.y;
      null != e.modifiersData.popperOffsets &&
        ((e.modifiersData.popperOffsets.x += l),
        (e.modifiersData.popperOffsets.y += c)),
        (e.modifiersData[n] = r);
    },
  };
  const oi = {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: function (t) {
      var e = t.state,
        i = t.name;
      e.modifiersData[i] = Ge({
        reference: e.rects.reference,
        element: e.rects.popper,
        strategy: "absolute",
        placement: e.placement,
      });
    },
    data: {},
  };
  const ri = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: function (t) {
      var e = t.state,
        i = t.options,
        n = t.name,
        s = i.mainAxis,
        o = void 0 === s || s,
        r = i.altAxis,
        a = void 0 !== r && r,
        l = i.boundary,
        c = i.rootBoundary,
        h = i.altBoundary,
        d = i.padding,
        u = i.tether,
        f = void 0 === u || u,
        p = i.tetherOffset,
        g = void 0 === p ? 0 : p,
        m = Ze(e, { boundary: l, rootBoundary: c, padding: d, altBoundary: h }),
        _ = ge(e.placement),
        v = Ne(e.placement),
        b = !v,
        y = Oe(_),
        w = "x" === y ? "y" : "x",
        E = e.modifiersData.popperOffsets,
        A = e.rects.reference,
        T = e.rects.popper,
        O =
          "function" == typeof g
            ? g(Object.assign({}, e.rects, { placement: e.placement }))
            : g,
        C = { x: 0, y: 0 };
      if (E) {
        if (o || a) {
          var k = "y" === y ? Bt : zt,
            L = "y" === y ? Rt : Wt,
            x = "y" === y ? "height" : "width",
            $ = E[y],
            D = E[y] + m[k],
            S = E[y] - m[L],
            N = f ? -T[x] / 2 : 0,
            I = v === Ut ? A[x] : T[x],
            P = v === Ut ? -T[x] : -A[x],
            j = e.elements.arrow,
            M = f && j ? _e(j) : { width: 0, height: 0 },
            H = e.modifiersData["arrow#persistent"]
              ? e.modifiersData["arrow#persistent"].padding
              : { top: 0, right: 0, bottom: 0, left: 0 },
            B = H[k],
            R = H[L],
            W = xe(0, A[x], M[x]),
            z = b ? A[x] / 2 - N - W - B - O : I - W - B - O,
            q = b ? -A[x] / 2 + N + W + R + O : P + W + R + O,
            F = e.elements.arrow && Te(e.elements.arrow),
            U = F ? ("y" === y ? F.clientTop || 0 : F.clientLeft || 0) : 0,
            V = e.modifiersData.offset
              ? e.modifiersData.offset[e.placement][y]
              : 0,
            K = E[y] + z - V - U,
            X = E[y] + q - V;
          if (o) {
            var Y = xe(f ? ke(D, K) : D, $, f ? Ce(S, X) : S);
            (E[y] = Y), (C[y] = Y - $);
          }
          if (a) {
            var Q = "x" === y ? Bt : zt,
              G = "x" === y ? Rt : Wt,
              Z = E[w],
              J = Z + m[Q],
              tt = Z - m[G],
              et = xe(f ? ke(J, K) : J, Z, f ? Ce(tt, X) : tt);
            (E[w] = et), (C[w] = et - Z);
          }
        }
        e.modifiersData[n] = C;
      }
    },
    requiresIfExists: ["offset"],
  };
  function ai(t, e, i) {
    void 0 === i && (i = !1);
    var n = ue(e);
    ue(e) &&
      (function (t) {
        var e = t.getBoundingClientRect(),
          i = e.width / t.offsetWidth || 1,
          n = e.height / t.offsetHeight || 1;
      })(e);
    var s,
      o,
      r = we(e),
      a = me(t),
      l = { scrollLeft: 0, scrollTop: 0 },
      c = { x: 0, y: 0 };
    return (
      (n || (!n && !i)) &&
        (("body" !== ce(e) || Ue(r)) &&
          (l =
            (s = e) !== he(s) && ue(s)
              ? { scrollLeft: (o = s).scrollLeft, scrollTop: o.scrollTop }
              : qe(s)),
        ue(e)
          ? (((c = me(e)).x += e.clientLeft), (c.y += e.clientTop))
          : r && (c.x = Fe(r))),
      {
        x: a.left + l.scrollLeft - c.x,
        y: a.top + l.scrollTop - c.y,
        width: a.width,
        height: a.height,
      }
    );
  }
  function li(t) {
    var e = new Map(),
      i = new Set(),
      n = [];
    function s(t) {
      i.add(t.name),
        []
          .concat(t.requires || [], t.requiresIfExists || [])
          .forEach(function (t) {
            if (!i.has(t)) {
              var n = e.get(t);
              n && s(n);
            }
          }),
        n.push(t);
    }
    return (
      t.forEach(function (t) {
        e.set(t.name, t);
      }),
      t.forEach(function (t) {
        i.has(t.name) || s(t);
      }),
      n
    );
  }
  var ci = { placement: "bottom", modifiers: [], strategy: "absolute" };
  function hi() {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
      e[i] = arguments[i];
    return !e.some(function (t) {
      return !(t && "function" == typeof t.getBoundingClientRect);
    });
  }
  function di(t) {
    void 0 === t && (t = {});
    var e = t,
      i = e.defaultModifiers,
      n = void 0 === i ? [] : i,
      s = e.defaultOptions,
      o = void 0 === s ? ci : s;
    return function (t, e, i) {
      void 0 === i && (i = o);
      var s,
        r,
        a = {
          placement: "bottom",
          orderedModifiers: [],
          options: Object.assign({}, ci, o),
          modifiersData: {},
          elements: { reference: t, popper: e },
          attributes: {},
          styles: {},
        },
        l = [],
        c = !1,
        h = {
          state: a,
          setOptions: function (i) {
            var s = "function" == typeof i ? i(a.options) : i;
            d(),
              (a.options = Object.assign({}, o, a.options, s)),
              (a.scrollParents = {
                reference: de(t)
                  ? Ke(t)
                  : t.contextElement
                  ? Ke(t.contextElement)
                  : [],
                popper: Ke(e),
              });
            var r,
              c,
              u = (function (t) {
                var e = li(t);
                return le.reduce(function (t, i) {
                  return t.concat(
                    e.filter(function (t) {
                      return t.phase === i;
                    })
                  );
                }, []);
              })(
                ((r = [].concat(n, a.options.modifiers)),
                (c = r.reduce(function (t, e) {
                  var i = t[e.name];
                  return (
                    (t[e.name] = i
                      ? Object.assign({}, i, e, {
                          options: Object.assign({}, i.options, e.options),
                          data: Object.assign({}, i.data, e.data),
                        })
                      : e),
                    t
                  );
                }, {})),
                Object.keys(c).map(function (t) {
                  return c[t];
                }))
              );
            return (
              (a.orderedModifiers = u.filter(function (t) {
                return t.enabled;
              })),
              a.orderedModifiers.forEach(function (t) {
                var e = t.name,
                  i = t.options,
                  n = void 0 === i ? {} : i,
                  s = t.effect;
                if ("function" == typeof s) {
                  var o = s({ state: a, name: e, instance: h, options: n }),
                    r = function () {};
                  l.push(o || r);
                }
              }),
              h.update()
            );
          },
          forceUpdate: function () {
            if (!c) {
              var t = a.elements,
                e = t.reference,
                i = t.popper;
              if (hi(e, i)) {
                (a.rects = {
                  reference: ai(e, Te(i), "fixed" === a.options.strategy),
                  popper: _e(i),
                }),
                  (a.reset = !1),
                  (a.placement = a.options.placement),
                  a.orderedModifiers.forEach(function (t) {
                    return (a.modifiersData[t.name] = Object.assign(
                      {},
                      t.data
                    ));
                  });
                for (var n = 0; n < a.orderedModifiers.length; n++)
                  if (!0 !== a.reset) {
                    var s = a.orderedModifiers[n],
                      o = s.fn,
                      r = s.options,
                      l = void 0 === r ? {} : r,
                      d = s.name;
                    "function" == typeof o &&
                      (a =
                        o({ state: a, options: l, name: d, instance: h }) || a);
                  } else (a.reset = !1), (n = -1);
              }
            }
          },
          update:
            ((s = function () {
              return new Promise(function (t) {
                h.forceUpdate(), t(a);
              });
            }),
            function () {
              return (
                r ||
                  (r = new Promise(function (t) {
                    Promise.resolve().then(function () {
                      (r = void 0), t(s());
                    });
                  })),
                r
              );
            }),
          destroy: function () {
            d(), (c = !0);
          },
        };
      if (!hi(t, e)) return h;
      function d() {
        l.forEach(function (t) {
          return t();
        }),
          (l = []);
      }
      return (
        h.setOptions(i).then(function (t) {
          !c && i.onFirstUpdate && i.onFirstUpdate(t);
        }),
        h
      );
    };
  }
  var ui = di(),
    fi = di({ defaultModifiers: [He, oi, je, pe] }),
    pi = di({ defaultModifiers: [He, oi, je, pe, si, ti, ri, Se, ni] });
  const gi = Object.freeze({
      __proto__: null,
      popperGenerator: di,
      detectOverflow: Ze,
      createPopperBase: ui,
      createPopper: pi,
      createPopperLite: fi,
      top: Bt,
      bottom: Rt,
      right: Wt,
      left: zt,
      auto: qt,
      basePlacements: Ft,
      start: Ut,
      end: Vt,
      clippingParents: Kt,
      viewport: Xt,
      popper: Yt,
      reference: Qt,
      variationPlacements: Gt,
      placements: Zt,
      beforeRead: Jt,
      read: te,
      afterRead: ee,
      beforeMain: ie,
      main: ne,
      afterMain: se,
      beforeWrite: oe,
      write: re,
      afterWrite: ae,
      modifierPhases: le,
      applyStyles: pe,
      arrow: Se,
      computeStyles: je,
      eventListeners: He,
      flip: ti,
      hide: ni,
      offset: si,
      popperOffsets: oi,
      preventOverflow: ri,
    }),
    mi = "dropdown",
    _i = ".bs.dropdown",
    vi = ".data-api",
    bi = "Escape",
    yi = "Space",
    wi = "ArrowUp",
    Ei = "ArrowDown",
    Ai = new RegExp(`${wi}|${Ei}|${bi}`),
    Ti = `hide${_i}`,
    Oi = `hidden${_i}`,
    Ci = `show${_i}`,
    ki = `shown${_i}`,
    Li = `click${_i}${vi}`,
    xi = `keydown${_i}${vi}`,
    $i = `keyup${_i}${vi}`,
    Di = "show",
    Si = '[data-bs-toggle="dropdown"]',
    Ni = ".dropdown-menu",
    Ii = g() ? "top-end" : "top-start",
    Pi = g() ? "top-start" : "top-end",
    ji = g() ? "bottom-end" : "bottom-start",
    Mi = g() ? "bottom-start" : "bottom-end",
    Hi = g() ? "left-start" : "right-start",
    Bi = g() ? "right-start" : "left-start",
    Ri = {
      offset: [0, 2],
      boundary: "clippingParents",
      reference: "toggle",
      display: "dynamic",
      popperConfig: null,
      autoClose: !0,
    },
    Wi = {
      offset: "(array|string|function)",
      boundary: "(string|element)",
      reference: "(string|element|object)",
      display: "string",
      popperConfig: "(null|object|function)",
      autoClose: "(boolean|string)",
    };
  class zi extends H {
    constructor(t, e) {
      super(t),
        (this._popper = null),
        (this._config = this._getConfig(e)),
        (this._menu = this._getMenuElement()),
        (this._inNavbar = this._detectNavbar());
    }
    static get Default() {
      return Ri;
    }
    static get DefaultType() {
      return Wi;
    }
    static get NAME() {
      return mi;
    }
    toggle() {
      return this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (c(this._element) || this._isShown(this._menu)) return;
      const t = { relatedTarget: this._element };
      if (P.trigger(this._element, Ci, t).defaultPrevented) return;
      const e = zi.getParentFromElement(this._element);
      this._inNavbar
        ? X.setDataAttribute(this._menu, "popper", "none")
        : this._createPopper(e),
        "ontouchstart" in document.documentElement &&
          !e.closest(".navbar-nav") &&
          []
            .concat(...document.body.children)
            .forEach((t) => P.on(t, "mouseover", d)),
        this._element.focus(),
        this._element.setAttribute("aria-expanded", !0),
        this._menu.classList.add(Di),
        this._element.classList.add(Di),
        P.trigger(this._element, ki, t);
    }
    hide() {
      if (c(this._element) || !this._isShown(this._menu)) return;
      const t = { relatedTarget: this._element };
      this._completeHide(t);
    }
    dispose() {
      this._popper && this._popper.destroy(), super.dispose();
    }
    update() {
      (this._inNavbar = this._detectNavbar()),
        this._popper && this._popper.update();
    }
    _completeHide(t) {
      P.trigger(this._element, Ti, t).defaultPrevented ||
        ("ontouchstart" in document.documentElement &&
          []
            .concat(...document.body.children)
            .forEach((t) => P.off(t, "mouseover", d)),
        this._popper && this._popper.destroy(),
        this._menu.classList.remove(Di),
        this._element.classList.remove(Di),
        this._element.setAttribute("aria-expanded", "false"),
        X.removeDataAttribute(this._menu, "popper"),
        P.trigger(this._element, Oi, t));
    }
    _getConfig(t) {
      if (
        ((t = {
          ...this.constructor.Default,
          ...X.getDataAttributes(this._element),
          ...t,
        }),
        a(mi, t, this.constructor.DefaultType),
        "object" == typeof t.reference &&
          !o(t.reference) &&
          "function" != typeof t.reference.getBoundingClientRect)
      )
        throw new TypeError(
          `${mi.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
        );
      return t;
    }
    _createPopper(t) {
      if (void 0 === gi)
        throw new TypeError(
          "Bootstrap's dropdowns require Popper (https://popper.js.org)"
        );
      let e = this._element;
      "parent" === this._config.reference
        ? (e = t)
        : o(this._config.reference)
        ? (e = r(this._config.reference))
        : "object" == typeof this._config.reference &&
          (e = this._config.reference);
      const i = this._getPopperConfig(),
        n = i.modifiers.find(
          (t) => "applyStyles" === t.name && !1 === t.enabled
        );
      (this._popper = pi(e, this._menu, i)),
        n && X.setDataAttribute(this._menu, "popper", "static");
    }
    _isShown(t = this._element) {
      return t.classList.contains(Di);
    }
    _getMenuElement() {
      return Y.next(this._element, Ni)[0];
    }
    _getPlacement() {
      const t = this._element.parentNode;
      if (t.classList.contains("dropend")) return Hi;
      if (t.classList.contains("dropstart")) return Bi;
      const e =
        "end" ===
        getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
      return t.classList.contains("dropup") ? (e ? Pi : Ii) : e ? Mi : ji;
    }
    _detectNavbar() {
      return null !== this._element.closest(".navbar");
    }
    _getOffset() {
      const { offset: t } = this._config;
      return "string" == typeof t
        ? t.split(",").map((t) => Number.parseInt(t, 10))
        : "function" == typeof t
        ? (e) => t(e, this._element)
        : t;
    }
    _getPopperConfig() {
      const t = {
        placement: this._getPlacement(),
        modifiers: [
          {
            name: "preventOverflow",
            options: { boundary: this._config.boundary },
          },
          { name: "offset", options: { offset: this._getOffset() } },
        ],
      };
      return (
        "static" === this._config.display &&
          (t.modifiers = [{ name: "applyStyles", enabled: !1 }]),
        {
          ...t,
          ...("function" == typeof this._config.popperConfig
            ? this._config.popperConfig(t)
            : this._config.popperConfig),
        }
      );
    }
    _selectMenuItem({ key: t, target: e }) {
      const i = Y.find(
        ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
        this._menu
      ).filter(l);
      i.length && b(i, e, t === Ei, !i.includes(e)).focus();
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = zi.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
    static clearMenus(t) {
      if (t && (2 === t.button || ("keyup" === t.type && "Tab" !== t.key)))
        return;
      const e = Y.find(Si);
      for (let i = 0, n = e.length; i < n; i++) {
        const n = zi.getInstance(e[i]);
        if (!n || !1 === n._config.autoClose) continue;
        if (!n._isShown()) continue;
        const s = { relatedTarget: n._element };
        if (t) {
          const e = t.composedPath(),
            i = e.includes(n._menu);
          if (
            e.includes(n._element) ||
            ("inside" === n._config.autoClose && !i) ||
            ("outside" === n._config.autoClose && i)
          )
            continue;
          if (
            n._menu.contains(t.target) &&
            (("keyup" === t.type && "Tab" === t.key) ||
              /input|select|option|textarea|form/i.test(t.target.tagName))
          )
            continue;
          "click" === t.type && (s.clickEvent = t);
        }
        n._completeHide(s);
      }
    }
    static getParentFromElement(t) {
      return n(t) || t.parentNode;
    }
    static dataApiKeydownHandler(t) {
      if (
        /input|textarea/i.test(t.target.tagName)
          ? t.key === yi ||
            (t.key !== bi &&
              ((t.key !== Ei && t.key !== wi) || t.target.closest(Ni)))
          : !Ai.test(t.key)
      )
        return;
      const e = this.classList.contains(Di);
      if (!e && t.key === bi) return;
      if ((t.preventDefault(), t.stopPropagation(), c(this))) return;
      const i = this.matches(Si) ? this : Y.prev(this, Si)[0],
        n = zi.getOrCreateInstance(i);
      if (t.key !== bi)
        return t.key === wi || t.key === Ei
          ? (e || n.show(), void n._selectMenuItem(t))
          : void ((e && t.key !== yi) || zi.clearMenus());
      n.hide();
    }
  }
  P.on(document, xi, Si, zi.dataApiKeydownHandler),
    P.on(document, xi, Ni, zi.dataApiKeydownHandler),
    P.on(document, Li, zi.clearMenus),
    P.on(document, $i, zi.clearMenus),
    P.on(document, Li, Si, function (t) {
      t.preventDefault(), zi.getOrCreateInstance(this).toggle();
    }),
    m(zi);
  const qi = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
    Fi = ".sticky-top";
  class Ui {
    constructor() {
      this._element = document.body;
    }
    getWidth() {
      const t = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - t);
    }
    hide() {
      const t = this.getWidth();
      this._disableOverFlow(),
        this._setElementAttributes(this._element, "paddingRight", (e) => e + t),
        this._setElementAttributes(qi, "paddingRight", (e) => e + t),
        this._setElementAttributes(Fi, "marginRight", (e) => e - t);
    }
    _disableOverFlow() {
      this._saveInitialAttribute(this._element, "overflow"),
        (this._element.style.overflow = "hidden");
    }
    _setElementAttributes(t, e, i) {
      const n = this.getWidth();
      this._applyManipulationCallback(t, (t) => {
        if (t !== this._element && window.innerWidth > t.clientWidth + n)
          return;
        this._saveInitialAttribute(t, e);
        const s = window.getComputedStyle(t)[e];
        t.style[e] = `${i(Number.parseFloat(s))}px`;
      });
    }
    reset() {
      this._resetElementAttributes(this._element, "overflow"),
        this._resetElementAttributes(this._element, "paddingRight"),
        this._resetElementAttributes(qi, "paddingRight"),
        this._resetElementAttributes(Fi, "marginRight");
    }
    _saveInitialAttribute(t, e) {
      const i = t.style[e];
      i && X.setDataAttribute(t, e, i);
    }
    _resetElementAttributes(t, e) {
      this._applyManipulationCallback(t, (t) => {
        const i = X.getDataAttribute(t, e);
        void 0 === i
          ? t.style.removeProperty(e)
          : (X.removeDataAttribute(t, e), (t.style[e] = i));
      });
    }
    _applyManipulationCallback(t, e) {
      o(t) ? e(t) : Y.find(t, this._element).forEach(e);
    }
    isOverflowing() {
      return this.getWidth() > 0;
    }
  }
  const Vi = {
      className: "modal-backdrop",
      isVisible: !0,
      isAnimated: !1,
      rootElement: "body",
      clickCallback: null,
    },
    Ki = {
      className: "string",
      isVisible: "boolean",
      isAnimated: "boolean",
      rootElement: "(element|string)",
      clickCallback: "(function|null)",
    },
    Xi = "backdrop",
    Yi = "show",
    Qi = `mousedown.bs.${Xi}`;
  class Gi {
    constructor(t) {
      (this._config = this._getConfig(t)),
        (this._isAppended = !1),
        (this._element = null);
    }
    show(t) {
      this._config.isVisible
        ? (this._append(),
          this._config.isAnimated && u(this._getElement()),
          this._getElement().classList.add(Yi),
          this._emulateAnimation(() => {
            _(t);
          }))
        : _(t);
    }
    hide(t) {
      this._config.isVisible
        ? (this._getElement().classList.remove(Yi),
          this._emulateAnimation(() => {
            this.dispose(), _(t);
          }))
        : _(t);
    }
    _getElement() {
      if (!this._element) {
        const t = document.createElement("div");
        (t.className = this._config.className),
          this._config.isAnimated && t.classList.add("fade"),
          (this._element = t);
      }
      return this._element;
    }
    _getConfig(t) {
      return (
        ((t = { ...Vi, ...("object" == typeof t ? t : {}) }).rootElement = r(
          t.rootElement
        )),
        a(Xi, t, Ki),
        t
      );
    }
    _append() {
      this._isAppended ||
        (this._config.rootElement.append(this._getElement()),
        P.on(this._getElement(), Qi, () => {
          _(this._config.clickCallback);
        }),
        (this._isAppended = !0));
    }
    dispose() {
      this._isAppended &&
        (P.off(this._element, Qi),
        this._element.remove(),
        (this._isAppended = !1));
    }
    _emulateAnimation(t) {
      v(t, this._getElement(), this._config.isAnimated);
    }
  }
  const Zi = { trapElement: null, autofocus: !0 },
    Ji = { trapElement: "element", autofocus: "boolean" },
    tn = ".bs.focustrap",
    en = `focusin${tn}`,
    nn = `keydown.tab${tn}`,
    sn = "backward";
  class on {
    constructor(t) {
      (this._config = this._getConfig(t)),
        (this._isActive = !1),
        (this._lastTabNavDirection = null);
    }
    activate() {
      const { trapElement: t, autofocus: e } = this._config;
      this._isActive ||
        (e && t.focus(),
        P.off(document, tn),
        P.on(document, en, (t) => this._handleFocusin(t)),
        P.on(document, nn, (t) => this._handleKeydown(t)),
        (this._isActive = !0));
    }
    deactivate() {
      this._isActive && ((this._isActive = !1), P.off(document, tn));
    }
    _handleFocusin(t) {
      const { target: e } = t,
        { trapElement: i } = this._config;
      if (e === document || e === i || i.contains(e)) return;
      const n = Y.focusableChildren(i);
      0 === n.length
        ? i.focus()
        : this._lastTabNavDirection === sn
        ? n[n.length - 1].focus()
        : n[0].focus();
    }
    _handleKeydown(t) {
      "Tab" === t.key &&
        (this._lastTabNavDirection = t.shiftKey ? sn : "forward");
    }
    _getConfig(t) {
      return (
        (t = { ...Zi, ...("object" == typeof t ? t : {}) }),
        a("focustrap", t, Ji),
        t
      );
    }
  }
  const rn = "modal",
    an = ".bs.modal",
    ln = "Escape",
    cn = { backdrop: !0, keyboard: !0, focus: !0 },
    hn = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      focus: "boolean",
    },
    dn = `hide${an}`,
    un = `hidePrevented${an}`,
    fn = `hidden${an}`,
    pn = `show${an}`,
    gn = `shown${an}`,
    mn = `resize${an}`,
    _n = `click.dismiss${an}`,
    vn = `keydown.dismiss${an}`,
    bn = `mouseup.dismiss${an}`,
    yn = `mousedown.dismiss${an}`,
    wn = `click${an}.data-api`,
    En = "modal-open",
    An = "show",
    Tn = "modal-static";
  class On extends H {
    constructor(t, e) {
      super(t),
        (this._config = this._getConfig(e)),
        (this._dialog = Y.findOne(".modal-dialog", this._element)),
        (this._backdrop = this._initializeBackDrop()),
        (this._focustrap = this._initializeFocusTrap()),
        (this._isShown = !1),
        (this._ignoreBackdropClick = !1),
        (this._isTransitioning = !1),
        (this._scrollBar = new Ui());
    }
    static get Default() {
      return cn;
    }
    static get NAME() {
      return rn;
    }
    toggle(t) {
      return this._isShown ? this.hide() : this.show(t);
    }
    show(t) {
      if (this._isShown || this._isTransitioning) return;
      P.trigger(this._element, pn, { relatedTarget: t }).defaultPrevented ||
        ((this._isShown = !0),
        this._isAnimated() && (this._isTransitioning = !0),
        this._scrollBar.hide(),
        document.body.classList.add(En),
        this._adjustDialog(),
        this._setEscapeEvent(),
        this._setResizeEvent(),
        P.on(this._dialog, yn, () => {
          P.one(this._element, bn, (t) => {
            t.target === this._element && (this._ignoreBackdropClick = !0);
          });
        }),
        this._showBackdrop(() => this._showElement(t)));
    }
    hide() {
      if (!this._isShown || this._isTransitioning) return;
      if (P.trigger(this._element, dn).defaultPrevented) return;
      this._isShown = !1;
      const t = this._isAnimated();
      t && (this._isTransitioning = !0),
        this._setEscapeEvent(),
        this._setResizeEvent(),
        this._focustrap.deactivate(),
        this._element.classList.remove(An),
        P.off(this._element, _n),
        P.off(this._dialog, yn),
        this._queueCallback(() => this._hideModal(), this._element, t);
    }
    dispose() {
      [window, this._dialog].forEach((t) => P.off(t, an)),
        this._backdrop.dispose(),
        this._focustrap.deactivate(),
        super.dispose();
    }
    handleUpdate() {
      this._adjustDialog();
    }
    _initializeBackDrop() {
      return new Gi({
        isVisible: Boolean(this._config.backdrop),
        isAnimated: this._isAnimated(),
      });
    }
    _initializeFocusTrap() {
      return new on({ trapElement: this._element });
    }
    _getConfig(t) {
      return (
        (t = {
          ...cn,
          ...X.getDataAttributes(this._element),
          ...("object" == typeof t ? t : {}),
        }),
        a(rn, t, hn),
        t
      );
    }
    _showElement(t) {
      const e = this._isAnimated(),
        i = Y.findOne(".modal-body", this._dialog);
      (this._element.parentNode &&
        this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
        document.body.append(this._element),
        (this._element.style.display = "block"),
        this._element.removeAttribute("aria-hidden"),
        this._element.setAttribute("aria-modal", !0),
        this._element.setAttribute("role", "dialog"),
        (this._element.scrollTop = 0),
        i && (i.scrollTop = 0),
        e && u(this._element),
        this._element.classList.add(An);
      this._queueCallback(
        () => {
          this._config.focus && this._focustrap.activate(),
            (this._isTransitioning = !1),
            P.trigger(this._element, gn, { relatedTarget: t });
        },
        this._dialog,
        e
      );
    }
    _setEscapeEvent() {
      this._isShown
        ? P.on(this._element, vn, (t) => {
            this._config.keyboard && t.key === ln
              ? (t.preventDefault(), this.hide())
              : this._config.keyboard ||
                t.key !== ln ||
                this._triggerBackdropTransition();
          })
        : P.off(this._element, vn);
    }
    _setResizeEvent() {
      this._isShown
        ? P.on(window, mn, () => this._adjustDialog())
        : P.off(window, mn);
    }
    _hideModal() {
      (this._element.style.display = "none"),
        this._element.setAttribute("aria-hidden", !0),
        this._element.removeAttribute("aria-modal"),
        this._element.removeAttribute("role"),
        (this._isTransitioning = !1),
        this._backdrop.hide(() => {
          document.body.classList.remove(En),
            this._resetAdjustments(),
            this._scrollBar.reset(),
            P.trigger(this._element, fn);
        });
    }
    _showBackdrop(t) {
      P.on(this._element, _n, (t) => {
        this._ignoreBackdropClick
          ? (this._ignoreBackdropClick = !1)
          : t.target === t.currentTarget &&
            (!0 === this._config.backdrop
              ? this.hide()
              : "static" === this._config.backdrop &&
                this._triggerBackdropTransition());
      }),
        this._backdrop.show(t);
    }
    _isAnimated() {
      return this._element.classList.contains("fade");
    }
    _triggerBackdropTransition() {
      if (P.trigger(this._element, un).defaultPrevented) return;
      const { classList: t, scrollHeight: e, style: i } = this._element,
        n = e > document.documentElement.clientHeight;
      (!n && "hidden" === i.overflowY) ||
        t.contains(Tn) ||
        (n || (i.overflowY = "hidden"),
        t.add(Tn),
        this._queueCallback(() => {
          t.remove(Tn),
            n ||
              this._queueCallback(() => {
                i.overflowY = "";
              }, this._dialog);
        }, this._dialog),
        this._element.focus());
    }
    _adjustDialog() {
      const t =
          this._element.scrollHeight > document.documentElement.clientHeight,
        e = this._scrollBar.getWidth(),
        i = e > 0;
      ((!i && t && !g()) || (i && !t && g())) &&
        (this._element.style.paddingLeft = `${e}px`),
        ((i && !t && !g()) || (!i && t && g())) &&
          (this._element.style.paddingRight = `${e}px`);
    }
    _resetAdjustments() {
      (this._element.style.paddingLeft = ""),
        (this._element.style.paddingRight = "");
    }
    static jQueryInterface(t, e) {
      return this.each(function () {
        const i = On.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
          i[t](e);
        }
      });
    }
  }
  P.on(document, wn, '[data-bs-toggle="modal"]', function (t) {
    const e = n(this);
    ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
      P.one(e, pn, (t) => {
        t.defaultPrevented ||
          P.one(e, fn, () => {
            l(this) && this.focus();
          });
      });
    const i = Y.findOne(".modal.show");
    i && On.getInstance(i).hide();
    On.getOrCreateInstance(e).toggle(this);
  }),
    B(On),
    m(On);
  const Cn = "offcanvas",
    kn = ".bs.offcanvas",
    Ln = ".data-api",
    xn = `load${kn}${Ln}`,
    $n = { backdrop: !0, keyboard: !0, scroll: !1 },
    Dn = { backdrop: "boolean", keyboard: "boolean", scroll: "boolean" },
    Sn = "show",
    Nn = ".offcanvas.show",
    In = `show${kn}`,
    Pn = `shown${kn}`,
    jn = `hide${kn}`,
    Mn = `hidden${kn}`,
    Hn = `click${kn}${Ln}`,
    Bn = `keydown.dismiss${kn}`;
  class Rn extends H {
    constructor(t, e) {
      super(t),
        (this._config = this._getConfig(e)),
        (this._isShown = !1),
        (this._backdrop = this._initializeBackDrop()),
        (this._focustrap = this._initializeFocusTrap()),
        this._addEventListeners();
    }
    static get NAME() {
      return Cn;
    }
    static get Default() {
      return $n;
    }
    toggle(t) {
      return this._isShown ? this.hide() : this.show(t);
    }
    show(t) {
      if (this._isShown) return;
      if (P.trigger(this._element, In, { relatedTarget: t }).defaultPrevented)
        return;
      (this._isShown = !0),
        (this._element.style.visibility = "visible"),
        this._backdrop.show(),
        this._config.scroll || new Ui().hide(),
        this._element.removeAttribute("aria-hidden"),
        this._element.setAttribute("aria-modal", !0),
        this._element.setAttribute("role", "dialog"),
        this._element.classList.add(Sn);
      this._queueCallback(
        () => {
          this._config.scroll || this._focustrap.activate(),
            P.trigger(this._element, Pn, { relatedTarget: t });
        },
        this._element,
        !0
      );
    }
    hide() {
      if (!this._isShown) return;
      if (P.trigger(this._element, jn).defaultPrevented) return;
      this._focustrap.deactivate(),
        this._element.blur(),
        (this._isShown = !1),
        this._element.classList.remove(Sn),
        this._backdrop.hide();
      this._queueCallback(
        () => {
          this._element.setAttribute("aria-hidden", !0),
            this._element.removeAttribute("aria-modal"),
            this._element.removeAttribute("role"),
            (this._element.style.visibility = "hidden"),
            this._config.scroll || new Ui().reset(),
            P.trigger(this._element, Mn);
        },
        this._element,
        !0
      );
    }
    dispose() {
      this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
    }
    _getConfig(t) {
      return (
        (t = {
          ...$n,
          ...X.getDataAttributes(this._element),
          ...("object" == typeof t ? t : {}),
        }),
        a(Cn, t, Dn),
        t
      );
    }
    _initializeBackDrop() {
      return new Gi({
        className: "offcanvas-backdrop",
        isVisible: this._config.backdrop,
        isAnimated: !0,
        rootElement: this._element.parentNode,
        clickCallback: () => this.hide(),
      });
    }
    _initializeFocusTrap() {
      return new on({ trapElement: this._element });
    }
    _addEventListeners() {
      P.on(this._element, Bn, (t) => {
        this._config.keyboard && "Escape" === t.key && this.hide();
      });
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = Rn.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
            throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  }
  P.on(document, Hn, '[data-bs-toggle="offcanvas"]', function (t) {
    const e = n(this);
    if ((["A", "AREA"].includes(this.tagName) && t.preventDefault(), c(this)))
      return;
    P.one(e, Mn, () => {
      l(this) && this.focus();
    });
    const i = Y.findOne(Nn);
    i && i !== e && Rn.getInstance(i).hide();
    Rn.getOrCreateInstance(e).toggle(this);
  }),
    P.on(window, xn, () =>
      Y.find(Nn).forEach((t) => Rn.getOrCreateInstance(t).show())
    ),
    B(Rn),
    m(Rn);
  const Wn = new Set([
      "background",
      "cite",
      "href",
      "itemtype",
      "longdesc",
      "poster",
      "src",
      "xlink:href",
    ]),
    zn = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
    qn =
      /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
    Fn = (t, e) => {
      const i = t.nodeName.toLowerCase();
      if (e.includes(i))
        return (
          !Wn.has(i) || Boolean(zn.test(t.nodeValue) || qn.test(t.nodeValue))
        );
      const n = e.filter((t) => t instanceof RegExp);
      for (let t = 0, e = n.length; t < e; t++) if (n[t].test(i)) return !0;
      return !1;
    },
    Un = {
      "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
      a: ["target", "href", "title", "rel"],
      area: [],
      b: [],
      br: [],
      col: [],
      code: [],
      div: [],
      em: [],
      hr: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      i: [],
      img: ["src", "srcset", "alt", "title", "width", "height"],
      li: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      u: [],
      ul: [],
    };
  function Vn(t, e, i) {
    if (!t.length) return t;
    if (i && "function" == typeof i) return i(t);
    const n = new window.DOMParser().parseFromString(t, "text/html"),
      s = [].concat(...n.body.querySelectorAll("*"));
    for (let t = 0, i = s.length; t < i; t++) {
      const i = s[t],
        n = i.nodeName.toLowerCase();
      if (!Object.keys(e).includes(n)) {
        i.remove();
        continue;
      }
      const o = [].concat(...i.attributes),
        r = [].concat(e["*"] || [], e[n] || []);
      o.forEach((t) => {
        Fn(t, r) || i.removeAttribute(t.nodeName);
      });
    }
    return n.body.innerHTML;
  }
  const Kn = "tooltip",
    Xn = ".bs.tooltip",
    Yn = new Set(["sanitize", "allowList", "sanitizeFn"]),
    Qn = {
      animation: "boolean",
      template: "string",
      title: "(string|element|function)",
      trigger: "string",
      delay: "(number|object)",
      html: "boolean",
      selector: "(string|boolean)",
      placement: "(string|function)",
      offset: "(array|string|function)",
      container: "(string|element|boolean)",
      fallbackPlacements: "array",
      boundary: "(string|element)",
      customClass: "(string|function)",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      allowList: "object",
      popperConfig: "(null|object|function)",
    },
    Gn = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: g() ? "left" : "right",
      BOTTOM: "bottom",
      LEFT: g() ? "right" : "left",
    },
    Zn = {
      animation: !0,
      template:
        '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: "hover focus",
      title: "",
      delay: 0,
      html: !1,
      selector: !1,
      placement: "top",
      offset: [0, 0],
      container: !1,
      fallbackPlacements: ["top", "right", "bottom", "left"],
      boundary: "clippingParents",
      customClass: "",
      sanitize: !0,
      sanitizeFn: null,
      allowList: Un,
      popperConfig: null,
    },
    Jn = {
      HIDE: `hide${Xn}`,
      HIDDEN: `hidden${Xn}`,
      SHOW: `show${Xn}`,
      SHOWN: `shown${Xn}`,
      INSERTED: `inserted${Xn}`,
      CLICK: `click${Xn}`,
      FOCUSIN: `focusin${Xn}`,
      FOCUSOUT: `focusout${Xn}`,
      MOUSEENTER: `mouseenter${Xn}`,
      MOUSELEAVE: `mouseleave${Xn}`,
    },
    ts = "fade",
    es = "show",
    is = "show",
    ns = "out",
    ss = ".tooltip-inner",
    os = ".modal",
    rs = "hide.bs.modal",
    as = "hover",
    ls = "focus";
  class cs extends H {
    constructor(t, e) {
      if (void 0 === gi)
        throw new TypeError(
          "Bootstrap's tooltips require Popper (https://popper.js.org)"
        );
      super(t),
        (this._isEnabled = !0),
        (this._timeout = 0),
        (this._hoverState = ""),
        (this._activeTrigger = {}),
        (this._popper = null),
        (this._config = this._getConfig(e)),
        (this.tip = null),
        this._setListeners();
    }
    static get Default() {
      return Zn;
    }
    static get NAME() {
      return Kn;
    }
    static get Event() {
      return Jn;
    }
    static get DefaultType() {
      return Qn;
    }
    enable() {
      this._isEnabled = !0;
    }
    disable() {
      this._isEnabled = !1;
    }
    toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }
    toggle(t) {
      if (this._isEnabled)
        if (t) {
          const e = this._initializeOnDelegatedTarget(t);
          (e._activeTrigger.click = !e._activeTrigger.click),
            e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e);
        } else {
          if (this.getTipElement().classList.contains(es))
            return void this._leave(null, this);
          this._enter(null, this);
        }
    }
    dispose() {
      clearTimeout(this._timeout),
        P.off(this._element.closest(os), rs, this._hideModalHandler),
        this.tip && this.tip.remove(),
        this._disposePopper(),
        super.dispose();
    }
    show() {
      if ("none" === this._element.style.display)
        throw new Error("Please use show on visible elements");
      if (!this.isWithContent() || !this._isEnabled) return;
      const t = P.trigger(this._element, this.constructor.Event.SHOW),
        e = h(this._element),
        i =
          null === e
            ? this._element.ownerDocument.documentElement.contains(
                this._element
              )
            : e.contains(this._element);
      if (t.defaultPrevented || !i) return;
      "tooltip" === this.constructor.NAME &&
        this.tip &&
        this.getTitle() !== this.tip.querySelector(ss).innerHTML &&
        (this._disposePopper(), this.tip.remove(), (this.tip = null));
      const n = this.getTipElement(),
        s = ((t) => {
          do {
            t += Math.floor(1e6 * Math.random());
          } while (document.getElementById(t));
          return t;
        })(this.constructor.NAME);
      n.setAttribute("id", s),
        this._element.setAttribute("aria-describedby", s),
        this._config.animation && n.classList.add(ts);
      const o =
          "function" == typeof this._config.placement
            ? this._config.placement.call(this, n, this._element)
            : this._config.placement,
        r = this._getAttachment(o);
      this._addAttachmentClass(r);
      const { container: a } = this._config;
      M.set(n, this.constructor.DATA_KEY, this),
        this._element.ownerDocument.documentElement.contains(this.tip) ||
          (a.append(n),
          P.trigger(this._element, this.constructor.Event.INSERTED)),
        this._popper
          ? this._popper.update()
          : (this._popper = pi(this._element, n, this._getPopperConfig(r))),
        n.classList.add(es);
      const l = this._resolvePossibleFunction(this._config.customClass);
      l && n.classList.add(...l.split(" ")),
        "ontouchstart" in document.documentElement &&
          [].concat(...document.body.children).forEach((t) => {
            P.on(t, "mouseover", d);
          });
      const c = this.tip.classList.contains(ts);
      this._queueCallback(
        () => {
          const t = this._hoverState;
          (this._hoverState = null),
            P.trigger(this._element, this.constructor.Event.SHOWN),
            t === ns && this._leave(null, this);
        },
        this.tip,
        c
      );
    }
    hide() {
      if (!this._popper) return;
      const t = this.getTipElement();
      if (
        P.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented
      )
        return;
      t.classList.remove(es),
        "ontouchstart" in document.documentElement &&
          []
            .concat(...document.body.children)
            .forEach((t) => P.off(t, "mouseover", d)),
        (this._activeTrigger.click = !1),
        (this._activeTrigger[ls] = !1),
        (this._activeTrigger[as] = !1);
      const e = this.tip.classList.contains(ts);
      this._queueCallback(
        () => {
          this._isWithActiveTrigger() ||
            (this._hoverState !== is && t.remove(),
            this._cleanTipClass(),
            this._element.removeAttribute("aria-describedby"),
            P.trigger(this._element, this.constructor.Event.HIDDEN),
            this._disposePopper());
        },
        this.tip,
        e
      ),
        (this._hoverState = "");
    }
    update() {
      null !== this._popper && this._popper.update();
    }
    isWithContent() {
      return Boolean(this.getTitle());
    }
    getTipElement() {
      if (this.tip) return this.tip;
      const t = document.createElement("div");
      t.innerHTML = this._config.template;
      const e = t.children[0];
      return (
        this.setContent(e), e.classList.remove(ts, es), (this.tip = e), this.tip
      );
    }
    setContent(t) {
      this._sanitizeAndSetContent(t, this.getTitle(), ss);
    }
    _sanitizeAndSetContent(t, e, i) {
      const n = Y.findOne(i, t);
      e || !n ? this.setElementContent(n, e) : n.remove();
    }
    setElementContent(t, e) {
      if (null !== t)
        return o(e)
          ? ((e = r(e)),
            void (this._config.html
              ? e.parentNode !== t && ((t.innerHTML = ""), t.append(e))
              : (t.textContent = e.textContent)))
          : void (this._config.html
              ? (this._config.sanitize &&
                  (e = Vn(e, this._config.allowList, this._config.sanitizeFn)),
                (t.innerHTML = e))
              : (t.textContent = e));
    }
    getTitle() {
      const t =
        this._element.getAttribute("data-bs-original-title") ||
        this._config.title;
      return this._resolvePossibleFunction(t);
    }
    updateAttachment(t) {
      return "right" === t ? "end" : "left" === t ? "start" : t;
    }
    _initializeOnDelegatedTarget(t, e) {
      return (
        e ||
        this.constructor.getOrCreateInstance(
          t.delegateTarget,
          this._getDelegateConfig()
        )
      );
    }
    _getOffset() {
      const { offset: t } = this._config;
      return "string" == typeof t
        ? t.split(",").map((t) => Number.parseInt(t, 10))
        : "function" == typeof t
        ? (e) => t(e, this._element)
        : t;
    }
    _resolvePossibleFunction(t) {
      return "function" == typeof t ? t.call(this._element) : t;
    }
    _getPopperConfig(t) {
      const e = {
        placement: t,
        modifiers: [
          {
            name: "flip",
            options: { fallbackPlacements: this._config.fallbackPlacements },
          },
          { name: "offset", options: { offset: this._getOffset() } },
          {
            name: "preventOverflow",
            options: { boundary: this._config.boundary },
          },
          {
            name: "arrow",
            options: { element: `.${this.constructor.NAME}-arrow` },
          },
          {
            name: "onChange",
            enabled: !0,
            phase: "afterWrite",
            fn: (t) => this._handlePopperPlacementChange(t),
          },
        ],
        onFirstUpdate: (t) => {
          t.options.placement !== t.placement &&
            this._handlePopperPlacementChange(t);
        },
      };
      return {
        ...e,
        ...("function" == typeof this._config.popperConfig
          ? this._config.popperConfig(e)
          : this._config.popperConfig),
      };
    }
    _addAttachmentClass(t) {
      this.getTipElement().classList.add(
        `${this._getBasicClassPrefix()}-${this.updateAttachment(t)}`
      );
    }
    _getAttachment(t) {
      return Gn[t.toUpperCase()];
    }
    _setListeners() {
      this._config.trigger.split(" ").forEach((t) => {
        if ("click" === t)
          P.on(
            this._element,
            this.constructor.Event.CLICK,
            this._config.selector,
            (t) => this.toggle(t)
          );
        else if ("manual" !== t) {
          const e =
              t === as
                ? this.constructor.Event.MOUSEENTER
                : this.constructor.Event.FOCUSIN,
            i =
              t === as
                ? this.constructor.Event.MOUSELEAVE
                : this.constructor.Event.FOCUSOUT;
          P.on(this._element, e, this._config.selector, (t) => this._enter(t)),
            P.on(this._element, i, this._config.selector, (t) =>
              this._leave(t)
            );
        }
      }),
        (this._hideModalHandler = () => {
          this._element && this.hide();
        }),
        P.on(this._element.closest(os), rs, this._hideModalHandler),
        this._config.selector
          ? (this._config = {
              ...this._config,
              trigger: "manual",
              selector: "",
            })
          : this._fixTitle();
    }
    _fixTitle() {
      const t = this._element.getAttribute("title"),
        e = typeof this._element.getAttribute("data-bs-original-title");
      (t || "string" !== e) &&
        (this._element.setAttribute("data-bs-original-title", t || ""),
        !t ||
          this._element.getAttribute("aria-label") ||
          this._element.textContent ||
          this._element.setAttribute("aria-label", t),
        this._element.setAttribute("title", ""));
    }
    _enter(t, e) {
      (e = this._initializeOnDelegatedTarget(t, e)),
        t && (e._activeTrigger["focusin" === t.type ? ls : as] = !0),
        e.getTipElement().classList.contains(es) || e._hoverState === is
          ? (e._hoverState = is)
          : (clearTimeout(e._timeout),
            (e._hoverState = is),
            e._config.delay && e._config.delay.show
              ? (e._timeout = setTimeout(() => {
                  e._hoverState === is && e.show();
                }, e._config.delay.show))
              : e.show());
    }
    _leave(t, e) {
      (e = this._initializeOnDelegatedTarget(t, e)),
        t &&
          (e._activeTrigger["focusout" === t.type ? ls : as] =
            e._element.contains(t.relatedTarget)),
        e._isWithActiveTrigger() ||
          (clearTimeout(e._timeout),
          (e._hoverState = ns),
          e._config.delay && e._config.delay.hide
            ? (e._timeout = setTimeout(() => {
                e._hoverState === ns && e.hide();
              }, e._config.delay.hide))
            : e.hide());
    }
    _isWithActiveTrigger() {
      for (const t in this._activeTrigger)
        if (this._activeTrigger[t]) return !0;
      return !1;
    }
    _getConfig(t) {
      const e = X.getDataAttributes(this._element);
      return (
        Object.keys(e).forEach((t) => {
          Yn.has(t) && delete e[t];
        }),
        ((t = {
          ...this.constructor.Default,
          ...e,
          ...("object" == typeof t && t ? t : {}),
        }).container = !1 === t.container ? document.body : r(t.container)),
        "number" == typeof t.delay &&
          (t.delay = { show: t.delay, hide: t.delay }),
        "number" == typeof t.title && (t.title = t.title.toString()),
        "number" == typeof t.content && (t.content = t.content.toString()),
        a(Kn, t, this.constructor.DefaultType),
        t.sanitize && (t.template = Vn(t.template, t.allowList, t.sanitizeFn)),
        t
      );
    }
    _getDelegateConfig() {
      const t = {};
      for (const e in this._config)
        this.constructor.Default[e] !== this._config[e] &&
          (t[e] = this._config[e]);
      return t;
    }
    _cleanTipClass() {
      const t = this.getTipElement(),
        e = new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`, "g"),
        i = t.getAttribute("class").match(e);
      null !== i &&
        i.length > 0 &&
        i.map((t) => t.trim()).forEach((e) => t.classList.remove(e));
    }
    _getBasicClassPrefix() {
      return "bs-tooltip";
    }
    _handlePopperPlacementChange(t) {
      const { state: e } = t;
      e &&
        ((this.tip = e.elements.popper),
        this._cleanTipClass(),
        this._addAttachmentClass(this._getAttachment(e.placement)));
    }
    _disposePopper() {
      this._popper && (this._popper.destroy(), (this._popper = null));
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = cs.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  m(cs);
  const hs = ".bs.popover",
    ds = {
      ...cs.Default,
      placement: "right",
      offset: [0, 8],
      trigger: "click",
      content: "",
      template:
        '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    },
    us = { ...cs.DefaultType, content: "(string|element|function)" },
    fs = {
      HIDE: `hide${hs}`,
      HIDDEN: `hidden${hs}`,
      SHOW: `show${hs}`,
      SHOWN: `shown${hs}`,
      INSERTED: `inserted${hs}`,
      CLICK: `click${hs}`,
      FOCUSIN: `focusin${hs}`,
      FOCUSOUT: `focusout${hs}`,
      MOUSEENTER: `mouseenter${hs}`,
      MOUSELEAVE: `mouseleave${hs}`,
    };
  class ps extends cs {
    static get Default() {
      return ds;
    }
    static get NAME() {
      return "popover";
    }
    static get Event() {
      return fs;
    }
    static get DefaultType() {
      return us;
    }
    isWithContent() {
      return this.getTitle() || this._getContent();
    }
    setContent(t) {
      this._sanitizeAndSetContent(t, this.getTitle(), ".popover-header"),
        this._sanitizeAndSetContent(t, this._getContent(), ".popover-body");
    }
    _getContent() {
      return this._resolvePossibleFunction(this._config.content);
    }
    _getBasicClassPrefix() {
      return "bs-popover";
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = ps.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  m(ps);
  const gs = "scrollspy",
    ms = ".bs.scrollspy",
    _s = { offset: 10, method: "auto", target: "" },
    vs = { offset: "number", method: "string", target: "(string|element)" },
    bs = `activate${ms}`,
    ys = `scroll${ms}`,
    ws = `load${ms}.data-api`,
    Es = "dropdown-item",
    As = "active",
    Ts = ".nav-link",
    Os = ".list-group-item",
    Cs = `${Ts}, ${Os}, .${Es}`,
    ks = "position";
  class Ls extends H {
    constructor(t, e) {
      super(t),
        (this._scrollElement =
          "BODY" === this._element.tagName ? window : this._element),
        (this._config = this._getConfig(e)),
        (this._offsets = []),
        (this._targets = []),
        (this._activeTarget = null),
        (this._scrollHeight = 0),
        P.on(this._scrollElement, ys, () => this._process()),
        this.refresh(),
        this._process();
    }
    static get Default() {
      return _s;
    }
    static get NAME() {
      return gs;
    }
    refresh() {
      const t =
          this._scrollElement === this._scrollElement.window ? "offset" : ks,
        e = "auto" === this._config.method ? t : this._config.method,
        n = e === ks ? this._getScrollTop() : 0;
      (this._offsets = []),
        (this._targets = []),
        (this._scrollHeight = this._getScrollHeight());
      Y.find(Cs, this._config.target)
        .map((t) => {
          const s = i(t),
            o = s ? Y.findOne(s) : null;
          if (o) {
            const t = o.getBoundingClientRect();
            if (t.width || t.height) return [X[e](o).top + n, s];
          }
          return null;
        })
        .filter((t) => t)
        .sort((t, e) => t[0] - e[0])
        .forEach((t) => {
          this._offsets.push(t[0]), this._targets.push(t[1]);
        });
    }
    dispose() {
      P.off(this._scrollElement, ms), super.dispose();
    }
    _getConfig(t) {
      return (
        ((t = {
          ..._s,
          ...X.getDataAttributes(this._element),
          ...("object" == typeof t && t ? t : {}),
        }).target = r(t.target) || document.documentElement),
        a(gs, t, vs),
        t
      );
    }
    _getScrollTop() {
      return this._scrollElement === window
        ? this._scrollElement.pageYOffset
        : this._scrollElement.scrollTop;
    }
    _getScrollHeight() {
      return (
        this._scrollElement.scrollHeight ||
        Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight
        )
      );
    }
    _getOffsetHeight() {
      return this._scrollElement === window
        ? window.innerHeight
        : this._scrollElement.getBoundingClientRect().height;
    }
    _process() {
      const t = this._getScrollTop() + this._config.offset,
        e = this._getScrollHeight(),
        i = this._config.offset + e - this._getOffsetHeight();
      if ((this._scrollHeight !== e && this.refresh(), t >= i)) {
        const t = this._targets[this._targets.length - 1];
        this._activeTarget !== t && this._activate(t);
      } else {
        if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0)
          return (this._activeTarget = null), void this._clear();
        for (let e = this._offsets.length; e--; ) {
          this._activeTarget !== this._targets[e] &&
            t >= this._offsets[e] &&
            (void 0 === this._offsets[e + 1] || t < this._offsets[e + 1]) &&
            this._activate(this._targets[e]);
        }
      }
    }
    _activate(t) {
      (this._activeTarget = t), this._clear();
      const e = Cs.split(",").map(
          (e) => `${e}[data-bs-target="${t}"],${e}[href="${t}"]`
        ),
        i = Y.findOne(e.join(","), this._config.target);
      i.classList.add(As),
        i.classList.contains(Es)
          ? Y.findOne(".dropdown-toggle", i.closest(".dropdown")).classList.add(
              As
            )
          : Y.parents(i, ".nav, .list-group").forEach((t) => {
              Y.prev(t, `${Ts}, ${Os}`).forEach((t) => t.classList.add(As)),
                Y.prev(t, ".nav-item").forEach((t) => {
                  Y.children(t, Ts).forEach((t) => t.classList.add(As));
                });
            }),
        P.trigger(this._scrollElement, bs, { relatedTarget: t });
    }
    _clear() {
      Y.find(Cs, this._config.target)
        .filter((t) => t.classList.contains(As))
        .forEach((t) => t.classList.remove(As));
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = Ls.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  P.on(window, ws, () => {
    Y.find('[data-bs-spy="scroll"]').forEach((t) => new Ls(t));
  }),
    m(Ls);
  const xs = ".bs.tab",
    $s = `hide${xs}`,
    Ds = `hidden${xs}`,
    Ss = `show${xs}`,
    Ns = `shown${xs}`,
    Is = `click${xs}.data-api`,
    Ps = "active",
    js = "fade",
    Ms = "show",
    Hs = ".active",
    Bs = ":scope > li > .active";
  class Rs extends H {
    static get NAME() {
      return "tab";
    }
    show() {
      if (
        this._element.parentNode &&
        this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
        this._element.classList.contains(Ps)
      )
        return;
      let t;
      const e = n(this._element),
        i = this._element.closest(".nav, .list-group");
      if (i) {
        const e = "UL" === i.nodeName || "OL" === i.nodeName ? Bs : Hs;
        (t = Y.find(e, i)), (t = t[t.length - 1]);
      }
      const s = t ? P.trigger(t, $s, { relatedTarget: this._element }) : null;
      if (
        P.trigger(this._element, Ss, { relatedTarget: t }).defaultPrevented ||
        (null !== s && s.defaultPrevented)
      )
        return;
      this._activate(this._element, i);
      const o = () => {
        P.trigger(t, Ds, { relatedTarget: this._element }),
          P.trigger(this._element, Ns, { relatedTarget: t });
      };
      e ? this._activate(e, e.parentNode, o) : o();
    }
    _activate(t, e, i) {
      const n = (
          !e || ("UL" !== e.nodeName && "OL" !== e.nodeName)
            ? Y.children(e, Hs)
            : Y.find(Bs, e)
        )[0],
        s = i && n && n.classList.contains(js),
        o = () => this._transitionComplete(t, n, i);
      n && s ? (n.classList.remove(Ms), this._queueCallback(o, t, !0)) : o();
    }
    _transitionComplete(t, e, i) {
      if (e) {
        e.classList.remove(Ps);
        const t = Y.findOne(":scope > .dropdown-menu .active", e.parentNode);
        t && t.classList.remove(Ps),
          "tab" === e.getAttribute("role") &&
            e.setAttribute("aria-selected", !1);
      }
      t.classList.add(Ps),
        "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0),
        u(t),
        t.classList.contains(js) && t.classList.add(Ms);
      let n = t.parentNode;
      if (
        (n && "LI" === n.nodeName && (n = n.parentNode),
        n && n.classList.contains("dropdown-menu"))
      ) {
        const e = t.closest(".dropdown");
        e && Y.find(".dropdown-toggle", e).forEach((t) => t.classList.add(Ps)),
          t.setAttribute("aria-expanded", !0);
      }
      i && i();
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = Rs.getOrCreateInstance(this);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  P.on(
    document,
    Is,
    '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
    function (t) {
      if ((["A", "AREA"].includes(this.tagName) && t.preventDefault(), c(this)))
        return;
      Rs.getOrCreateInstance(this).show();
    }
  ),
    m(Rs);
  const Ws = "toast",
    zs = ".bs.toast",
    qs = `mouseover${zs}`,
    Fs = `mouseout${zs}`,
    Us = `focusin${zs}`,
    Vs = `focusout${zs}`,
    Ks = `hide${zs}`,
    Xs = `hidden${zs}`,
    Ys = `show${zs}`,
    Qs = `shown${zs}`,
    Gs = "hide",
    Zs = "show",
    Js = "showing",
    to = { animation: "boolean", autohide: "boolean", delay: "number" },
    eo = { animation: !0, autohide: !0, delay: 5e3 };
  class io extends H {
    constructor(t, e) {
      super(t),
        (this._config = this._getConfig(e)),
        (this._timeout = null),
        (this._hasMouseInteraction = !1),
        (this._hasKeyboardInteraction = !1),
        this._setListeners();
    }
    static get DefaultType() {
      return to;
    }
    static get Default() {
      return eo;
    }
    static get NAME() {
      return Ws;
    }
    show() {
      if (P.trigger(this._element, Ys).defaultPrevented) return;
      this._clearTimeout(),
        this._config.animation && this._element.classList.add("fade");
      this._element.classList.remove(Gs),
        u(this._element),
        this._element.classList.add(Zs),
        this._element.classList.add(Js),
        this._queueCallback(
          () => {
            this._element.classList.remove(Js),
              P.trigger(this._element, Qs),
              this._maybeScheduleHide();
          },
          this._element,
          this._config.animation
        );
    }
    hide() {
      if (!this._element.classList.contains(Zs)) return;
      if (P.trigger(this._element, Ks).defaultPrevented) return;
      this._element.classList.add(Js),
        this._queueCallback(
          () => {
            this._element.classList.add(Gs),
              this._element.classList.remove(Js),
              this._element.classList.remove(Zs),
              P.trigger(this._element, Xs);
          },
          this._element,
          this._config.animation
        );
    }
    dispose() {
      this._clearTimeout(),
        this._element.classList.contains(Zs) &&
          this._element.classList.remove(Zs),
        super.dispose();
    }
    _getConfig(t) {
      return (
        (t = {
          ...eo,
          ...X.getDataAttributes(this._element),
          ...("object" == typeof t && t ? t : {}),
        }),
        a(Ws, t, this.constructor.DefaultType),
        t
      );
    }
    _maybeScheduleHide() {
      this._config.autohide &&
        (this._hasMouseInteraction ||
          this._hasKeyboardInteraction ||
          (this._timeout = setTimeout(() => {
            this.hide();
          }, this._config.delay)));
    }
    _onInteraction(t, e) {
      switch (t.type) {
        case "mouseover":
        case "mouseout":
          this._hasMouseInteraction = e;
          break;
        case "focusin":
        case "focusout":
          this._hasKeyboardInteraction = e;
      }
      if (e) return void this._clearTimeout();
      const i = t.relatedTarget;
      this._element === i ||
        this._element.contains(i) ||
        this._maybeScheduleHide();
    }
    _setListeners() {
      P.on(this._element, qs, (t) => this._onInteraction(t, !0)),
        P.on(this._element, Fs, (t) => this._onInteraction(t, !1)),
        P.on(this._element, Us, (t) => this._onInteraction(t, !0)),
        P.on(this._element, Vs, (t) => this._onInteraction(t, !1));
    }
    _clearTimeout() {
      clearTimeout(this._timeout), (this._timeout = null);
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = io.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  }
  B(io), m(io);
  return {
    Alert: q,
    Button: U,
    Carousel: wt,
    Collapse: Ht,
    Dropdown: zi,
    Modal: On,
    Offcanvas: Rn,
    Popover: ps,
    ScrollSpy: Ls,
    Tab: Rs,
    Toast: io,
    Tooltip: cs,
  };
});
