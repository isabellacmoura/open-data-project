typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
let Xe = !1, ia = !1;
function oa() {
  Xe = !0;
}
oa();
const sa = 1, aa = 2, ua = 16, la = 2, fa = 4, ca = 8, ha = 1, pa = 2, vt = Symbol(), da = "http://www.w3.org/1999/xhtml", Co = !1;
var ai = Array.isArray, va = Array.prototype.indexOf, Oo = Array.from, Nr = Object.defineProperty, Pn = Object.getOwnPropertyDescriptor, Po = Object.getOwnPropertyDescriptors, _a = Object.prototype, ga = Array.prototype, ui = Object.getPrototypeOf;
function ma(t) {
  return t();
}
function Ir(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function ya() {
  var t, e, n = new Promise((r, i) => {
    t = r, e = i;
  });
  return { promise: n, resolve: t, reject: e };
}
const At = 2, li = 4, cr = 8, Ye = 16, ie = 32, We = 64, Do = 128, Pt = 256, Hn = 512, _t = 1024, Dt = 2048, oe = 4096, zt = 8192, ke = 16384, fi = 32768, ci = 65536, Di = 1 << 17, wa = 1 << 18, hi = 1 << 19, $o = 1 << 20, Cr = 1 << 21, pi = 1 << 22, ge = 1 << 23, me = Symbol("$state"), xa = Symbol("legacy props"), di = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}();
function Ea() {
  throw new Error("https://svelte.dev/e/await_outside_boundary");
}
function ba(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Sa() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function ka(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Ra() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Aa(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Ma() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Ta(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Na() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ia() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Ca() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let Oa = !1;
function Lo(t) {
  return t === this.v;
}
function Pa(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function zo(t) {
  return !Pa(t, this.v);
}
let ft = null;
function Bn(t) {
  ft = t;
}
function qo(t, e = !1, n) {
  ft = {
    p: ft,
    c: null,
    e: null,
    s: t,
    x: null,
    l: Xe && !e ? { s: null, u: null, $: [] } : null
  };
}
function Fo(t) {
  var e = (
    /** @type {ComponentContext} */
    ft
  ), n = e.e;
  if (n !== null) {
    e.e = null;
    for (var r of n)
      Zo(r);
  }
  return ft = e.p, /** @type {T} */
  {};
}
function Ke() {
  return !Xe || ft !== null && ft.l === null;
}
const Da = /* @__PURE__ */ new WeakMap();
function $a(t) {
  var e = G;
  if (e === null)
    return Q.f |= ge, t;
  if ((e.f & fi) === 0) {
    if ((e.f & Do) === 0)
      throw !e.parent && t instanceof Error && Uo(t), t;
    e.b.error(t);
  } else
    vi(t, e);
}
function vi(t, e) {
  for (; e !== null; ) {
    if ((e.f & Do) !== 0)
      try {
        e.b.error(t);
        return;
      } catch (n) {
        t = n;
      }
    e = e.parent;
  }
  throw t instanceof Error && Uo(t), t;
}
function Uo(t) {
  const e = Da.get(t);
  e && (Nr(t, "message", {
    value: e.message
  }), Nr(t, "stack", {
    value: e.stack
  }));
}
let Vn = [];
function La() {
  var t = Vn;
  Vn = [], Ir(t);
}
function Ho(t) {
  Vn.length === 0 && queueMicrotask(La), Vn.push(t);
}
function za() {
  for (var t = (
    /** @type {Effect} */
    G.b
  ); t !== null && !t.has_pending_snippet(); )
    t = t.parent;
  return t === null && Ea(), t;
}
// @__NO_SIDE_EFFECTS__
function _i(t) {
  var e = At | Dt, n = Q !== null && (Q.f & At) !== 0 ? (
    /** @type {Derived} */
    Q
  ) : null;
  return G === null || n !== null && (n.f & Pt) !== 0 ? e |= Pt : G.f |= hi, {
    ctx: ft,
    deps: null,
    effects: null,
    equals: Lo,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      vt
    ),
    wv: 0,
    parent: n ?? G,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function qa(t, e) {
  let n = (
    /** @type {Effect | null} */
    G
  );
  n === null && Sa();
  var r = (
    /** @type {Boundary} */
    n.b
  ), i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), o = fn(
    /** @type {V} */
    vt
  ), s = null, a = !Q;
  return ru(() => {
    try {
      var f = t();
    } catch (v) {
      f = Promise.reject(v);
    }
    var u = () => f;
    i = s?.then(u, u) ?? Promise.resolve(f), s = i;
    var l = (
      /** @type {Batch} */
      at
    ), c = r.pending;
    a && (r.update_pending_count(1), c || l.increment());
    const h = (v, g = void 0) => {
      s = null, c || l.activate(), g ? g !== di && (o.f |= ge, Yn(o, g)) : ((o.f & ge) !== 0 && (o.f ^= ge), Yn(o, v)), a && (r.update_pending_count(-1), c || l.decrement()), Xo();
    };
    if (i.then(h, (v) => h(null, v || "unknown")), l)
      return () => {
        queueMicrotask(() => l.neuter());
      };
  }), new Promise((f) => {
    function u(l) {
      function c() {
        l === i ? f(o) : u(i);
      }
      l.then(c, c);
    }
    u(i);
  });
}
// @__NO_SIDE_EFFECTS__
function gi(t) {
  const e = /* @__PURE__ */ _i(t);
  return e.equals = zo, e;
}
function Bo(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var n = 0; n < e.length; n += 1)
      Re(
        /** @type {Effect} */
        e[n]
      );
  }
}
function Fa(t) {
  for (var e = t.parent; e !== null; ) {
    if ((e.f & At) === 0)
      return (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function mi(t) {
  var e, n = G;
  pe(Fa(t));
  try {
    Bo(t), e = as(t);
  } finally {
    pe(n);
  }
  return e;
}
function Vo(t) {
  var e = mi(t);
  if (t.equals(e) || (t.v = e, t.wv = os()), !Ae)
    if (qe !== null)
      qe.set(t, t.v);
    else {
      var n = (ce || (t.f & Pt) !== 0) && t.deps !== null ? oe : _t;
      xt(t, n);
    }
}
function Ua(t, e, n) {
  const r = Ke() ? _i : gi;
  if (e.length === 0) {
    n(t.map(r));
    return;
  }
  var i = at, o = (
    /** @type {Effect} */
    G
  ), s = Ha(), a = za();
  Promise.all(e.map((f) => /* @__PURE__ */ qa(f))).then((f) => {
    i?.activate(), s();
    try {
      n([...t.map(r), ...f]);
    } catch (u) {
      (o.f & ke) === 0 && vi(u, o);
    }
    i?.deactivate(), Xo();
  }).catch((f) => {
    a.error(f);
  });
}
function Ha() {
  var t = G, e = Q, n = ft;
  return function() {
    pe(t), Kt(e), Bn(n);
  };
}
function Xo() {
  pe(null), Kt(null), Bn(null);
}
const Qe = /* @__PURE__ */ new Set();
let at = null, Dn = null, qe = null, $i = /* @__PURE__ */ new Set(), Xn = [];
function Yo() {
  const t = (
    /** @type {() => void} */
    Xn.shift()
  );
  Xn.length > 0 && queueMicrotask(Yo), t();
}
let un = [], yi = null, Or = !1;
class ln {
  /**
   * The current values of any sources that are updated in this batch
   * They keys of this map are identical to `this.#previous`
   * @type {Map<Source, any>}
   */
  current = /* @__PURE__ */ new Map();
  /**
   * The values of any sources that are updated in this batch _before_ those updates took place.
   * They keys of this map are identical to `this.#current`
   * @type {Map<Source, any>}
   */
  #i = /* @__PURE__ */ new Map();
  /**
   * When the batch is committed (and the DOM is updated), we need to remove old branches
   * and append new ones by calling the functions added inside (if/each/key/etc) blocks
   * @type {Set<() => void>}
   */
  #o = /* @__PURE__ */ new Set();
  /**
   * The number of async effects that are currently in flight
   */
  #t = 0;
  /**
   * A deferred that resolves when the batch is committed, used with `settled()`
   * TODO replace with Promise.withResolvers once supported widely enough
   * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
   */
  #l = null;
  /**
   * True if an async effect inside this batch resolved and
   * its parent branch was already deleted
   */
  #f = !1;
  /**
   * Async effects (created inside `async_derived`) encountered during processing.
   * These run after the rest of the batch has updated, since they should
   * always have the latest values
   * @type {Effect[]}
   */
  #n = [];
  /**
   * The same as `#async_effects`, but for effects inside a newly-created
   * `<svelte:boundary>` — these do not prevent the batch from committing
   * @type {Effect[]}
   */
  #s = [];
  /**
   * Template effects and `$effect.pre` effects, which run when
   * a batch is committed
   * @type {Effect[]}
   */
  #r = [];
  /**
   * The same as `#render_effects`, but for `$effect` (which runs after)
   * @type {Effect[]}
   */
  #e = [];
  /**
   * Block effects, which may need to re-run on subsequent flushes
   * in order to update internal sources (e.g. each block items)
   * @type {Effect[]}
   */
  #a = [];
  /**
   * Deferred effects (which run after async work has completed) that are DIRTY
   * @type {Effect[]}
   */
  #c = [];
  /**
   * Deferred effects that are MAYBE_DIRTY
   * @type {Effect[]}
   */
  #h = [];
  /**
   * A set of branches that still exist, but will be destroyed when this batch
   * is committed — we skip over these during `process`
   * @type {Set<Effect>}
   */
  skipped_effects = /* @__PURE__ */ new Set();
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(e) {
    un = [], Dn = null;
    var n = null;
    if (Qe.size > 1) {
      n = /* @__PURE__ */ new Map(), qe = /* @__PURE__ */ new Map();
      for (const [o, s] of this.current)
        n.set(o, { v: o.v, wv: o.wv }), o.v = s;
      for (const o of Qe)
        if (o !== this)
          for (const [s, a] of o.#i)
            n.has(s) || (n.set(s, { v: s.v, wv: s.wv }), s.v = a);
    }
    for (const o of e)
      this.#d(o);
    if (this.#n.length === 0 && this.#t === 0) {
      this.#p();
      var r = this.#r, i = this.#e;
      this.#r = [], this.#e = [], this.#a = [], Dn = at, at = null, Li(r), Li(i), at === null ? at = this : Qe.delete(this), this.#l?.resolve();
    } else
      this.#u(this.#r), this.#u(this.#e), this.#u(this.#a);
    if (n) {
      for (const [o, { v: s, wv: a }] of n)
        o.wv <= a && (o.v = s);
      qe = null;
    }
    for (const o of this.#n)
      we(o);
    for (const o of this.#s)
      we(o);
    this.#n = [], this.#s = [];
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   */
  #d(e) {
    e.f ^= _t;
    for (var n = e.first; n !== null; ) {
      var r = n.f, i = (r & (ie | We)) !== 0, o = i && (r & _t) !== 0, s = o || (r & zt) !== 0 || this.skipped_effects.has(n);
      if (!s && n.fn !== null) {
        if (i)
          n.f ^= _t;
        else if ((r & li) !== 0)
          this.#e.push(n);
        else if ((r & _t) === 0)
          if ((r & pi) !== 0) {
            var a = n.b?.pending ? this.#s : this.#n;
            a.push(n);
          } else xn(n) && ((n.f & Ye) !== 0 && this.#a.push(n), we(n));
        var f = n.first;
        if (f !== null) {
          n = f;
          continue;
        }
      }
      var u = n.parent;
      for (n = n.next; n === null && u !== null; )
        n = u.next, u = u.parent;
    }
  }
  /**
   * @param {Effect[]} effects
   */
  #u(e) {
    for (const n of e)
      ((n.f & Dt) !== 0 ? this.#c : this.#h).push(n), xt(n, _t);
    e.length = 0;
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, n) {
    this.#i.has(e) || this.#i.set(e, n), this.current.set(e, e.v);
  }
  activate() {
    at = this;
  }
  deactivate() {
    at = null, Dn = null;
    for (const e of $i)
      if ($i.delete(e), e(), at !== null)
        break;
  }
  neuter() {
    this.#f = !0;
  }
  flush() {
    un.length > 0 ? Ba() : this.#p(), at === this && (this.#t === 0 && Qe.delete(this), this.deactivate());
  }
  /**
   * Append and remove branches to/from the DOM
   */
  #p() {
    if (!this.#f)
      for (const e of this.#o)
        e();
    this.#o.clear();
  }
  increment() {
    this.#t += 1;
  }
  decrement() {
    if (this.#t -= 1, this.#t === 0) {
      for (const e of this.#c)
        xt(e, Dt), Fe(e);
      for (const e of this.#h)
        xt(e, oe), Fe(e);
      this.#r = [], this.#e = [], this.flush();
    } else
      this.deactivate();
  }
  /** @param {() => void} fn */
  add_callback(e) {
    this.#o.add(e);
  }
  settled() {
    return (this.#l ??= ya()).promise;
  }
  static ensure() {
    if (at === null) {
      const e = at = new ln();
      Qe.add(at), ln.enqueue(() => {
        at === e && e.flush();
      });
    }
    return at;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    Xn.length === 0 && queueMicrotask(Yo), Xn.unshift(e);
  }
}
function Ba() {
  var t = Le;
  Or = !0;
  try {
    var e = 0;
    for (qi(!0); un.length > 0; ) {
      var n = ln.ensure();
      if (e++ > 1e3) {
        var r, i;
        Va();
      }
      n.process(un), he.clear();
    }
  } finally {
    Or = !1, qi(t), yi = null;
  }
}
function Va() {
  try {
    Ma();
  } catch (t) {
    vi(t, yi);
  }
}
let ve = null;
function Li(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; ) {
      var r = t[n++];
      if ((r.f & (ke | zt)) === 0 && xn(r) && (ve = [], we(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? ts(r) : r.fn = null), ve.length > 0)) {
        he.clear();
        for (const i of ve)
          we(i);
        ve = [];
      }
    }
    ve = null;
  }
}
function Fe(t) {
  for (var e = yi = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (Or && e === G && (n & Ye) !== 0)
      return;
    if ((n & (We | ie)) !== 0) {
      if ((n & _t) === 0) return;
      e.f ^= _t;
    }
  }
  un.push(e);
}
const he = /* @__PURE__ */ new Map();
function fn(t, e) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: Lo,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function ue(t, e) {
  const n = fn(t);
  return su(n), n;
}
// @__NO_SIDE_EFFECTS__
function fe(t, e = !1, n = !0) {
  const r = fn(t);
  return e || (r.equals = zo), Xe && n && ft !== null && ft.l !== null && (ft.l.s ??= []).push(r), r;
}
function Z(t, e, n = !1) {
  Q !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Vt || (Q.f & Di) !== 0) && Ke() && (Q.f & (At | Ye | pi | Di)) !== 0 && !ne?.includes(t) && Ca();
  let r = n ? Pe(e) : e;
  return Yn(t, r);
}
function Yn(t, e) {
  if (!t.equals(e)) {
    var n = t.v;
    Ae ? he.set(t, e) : he.set(t, n), t.v = e;
    var r = ln.ensure();
    r.capture(t, n), (t.f & At) !== 0 && ((t.f & Dt) !== 0 && mi(
      /** @type {Derived} */
      t
    ), xt(t, (t.f & Pt) === 0 ? _t : oe)), t.wv = os(), Wo(t, Dt), Ke() && G !== null && (G.f & _t) !== 0 && (G.f & (ie | We)) === 0 && (Nt === null ? au([t]) : Nt.push(t));
  }
  return e;
}
function yr(t) {
  Z(t, t.v + 1);
}
function Wo(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = Ke(), i = n.length, o = 0; o < i; o++) {
      var s = n[o], a = s.f;
      if (!(!r && s === G)) {
        var f = (a & Dt) === 0;
        f && xt(s, e), (a & At) !== 0 ? Wo(
          /** @type {Derived} */
          s,
          oe
        ) : f && ((a & Ye) !== 0 && ve !== null && ve.push(
          /** @type {Effect} */
          s
        ), Fe(
          /** @type {Effect} */
          s
        ));
      }
    }
}
function Pe(t) {
  if (typeof t != "object" || t === null || me in t)
    return t;
  const e = ui(t);
  if (e !== _a && e !== ga)
    return t;
  var n = /* @__PURE__ */ new Map(), r = ai(t), i = /* @__PURE__ */ ue(0), o = ye, s = (a) => {
    if (ye === o)
      return a();
    var f = Q, u = ye;
    Kt(null), Ui(o);
    var l = a();
    return Kt(f), Ui(u), l;
  };
  return r && n.set("length", /* @__PURE__ */ ue(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(a, f, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && Na();
        var l = n.get(f);
        return l === void 0 ? l = s(() => {
          var c = /* @__PURE__ */ ue(u.value);
          return n.set(f, c), c;
        }) : Z(l, u.value, !0), !0;
      },
      deleteProperty(a, f) {
        var u = n.get(f);
        if (u === void 0) {
          if (f in a) {
            const l = s(() => /* @__PURE__ */ ue(vt));
            n.set(f, l), yr(i);
          }
        } else
          Z(u, vt), yr(i);
        return !0;
      },
      get(a, f, u) {
        if (f === me)
          return t;
        var l = n.get(f), c = f in a;
        if (l === void 0 && (!c || Pn(a, f)?.writable) && (l = s(() => {
          var v = Pe(c ? a[f] : vt), g = /* @__PURE__ */ ue(v);
          return g;
        }), n.set(f, l)), l !== void 0) {
          var h = B(l);
          return h === vt ? void 0 : h;
        }
        return Reflect.get(a, f, u);
      },
      getOwnPropertyDescriptor(a, f) {
        var u = Reflect.getOwnPropertyDescriptor(a, f);
        if (u && "value" in u) {
          var l = n.get(f);
          l && (u.value = B(l));
        } else if (u === void 0) {
          var c = n.get(f), h = c?.v;
          if (c !== void 0 && h !== vt)
            return {
              enumerable: !0,
              configurable: !0,
              value: h,
              writable: !0
            };
        }
        return u;
      },
      has(a, f) {
        if (f === me)
          return !0;
        var u = n.get(f), l = u !== void 0 && u.v !== vt || Reflect.has(a, f);
        if (u !== void 0 || G !== null && (!l || Pn(a, f)?.writable)) {
          u === void 0 && (u = s(() => {
            var h = l ? Pe(a[f]) : vt, v = /* @__PURE__ */ ue(h);
            return v;
          }), n.set(f, u));
          var c = B(u);
          if (c === vt)
            return !1;
        }
        return l;
      },
      set(a, f, u, l) {
        var c = n.get(f), h = f in a;
        if (r && f === "length")
          for (var v = u; v < /** @type {Source<number>} */
          c.v; v += 1) {
            var g = n.get(v + "");
            g !== void 0 ? Z(g, vt) : v in a && (g = s(() => /* @__PURE__ */ ue(vt)), n.set(v + "", g));
          }
        if (c === void 0)
          (!h || Pn(a, f)?.writable) && (c = s(() => /* @__PURE__ */ ue(void 0)), Z(c, Pe(u)), n.set(f, c));
        else {
          h = c.v !== vt;
          var k = s(() => Pe(u));
          Z(c, k);
        }
        var b = Reflect.getOwnPropertyDescriptor(a, f);
        if (b?.set && b.set.call(l, u), !h) {
          if (r && typeof f == "string") {
            var R = (
              /** @type {Source<number>} */
              n.get("length")
            ), S = Number(f);
            Number.isInteger(S) && S >= R.v && Z(R, S + 1);
          }
          yr(i);
        }
        return !0;
      },
      ownKeys(a) {
        B(i);
        var f = Reflect.ownKeys(a).filter((c) => {
          var h = n.get(c);
          return h === void 0 || h.v !== vt;
        });
        for (var [u, l] of n)
          l.v !== vt && !(u in a) && f.push(u);
        return f;
      },
      setPrototypeOf() {
        Ia();
      }
    }
  );
}
var Xa, Ya, Wa;
function wn(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function Wn(t) {
  return Ya.call(t);
}
// @__NO_SIDE_EFFECTS__
function hr(t) {
  return Wa.call(t);
}
function ct(t, e) {
  return /* @__PURE__ */ Wn(t);
}
function Pr(t, e) {
  {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Wn(
        /** @type {Node} */
        t
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ hr(n) : n;
  }
}
function mt(t, e = 1, n = !1) {
  let r = t;
  for (; e--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ hr(r);
  return r;
}
function Ka(t) {
  t.textContent = "";
}
function Ko() {
  return !1;
}
let zi = !1;
function Ga() {
  zi || (zi = !0, document.addEventListener(
    "reset",
    (t) => {
      Promise.resolve().then(() => {
        if (!t.defaultPrevented)
          for (
            const e of
            /**@type {HTMLFormElement} */
            t.target.elements
          )
            e.__on_r?.();
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possiblity of stopPropagation)
    { capture: !0 }
  ));
}
function pr(t) {
  var e = Q, n = G;
  Kt(null), pe(null);
  try {
    return t();
  } finally {
    Kt(e), pe(n);
  }
}
function Za(t, e, n, r = n) {
  t.addEventListener(e, () => pr(n));
  const i = t.__on_r;
  i ? t.__on_r = () => {
    i(), r(!0);
  } : t.__on_r = () => r(!0), Ga();
}
function Go(t) {
  G === null && Q === null && Aa(), Q !== null && (Q.f & Pt) !== 0 && G === null && Ra(), Ae && ka();
}
function Qa(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function se(t, e, n, r = !0) {
  var i = G;
  i !== null && (i.f & zt) !== 0 && (t |= zt);
  var o = {
    ctx: ft,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: t | Dt,
    first: null,
    fn: e,
    last: null,
    next: null,
    parent: i,
    b: i && i.b,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0,
    ac: null
  };
  if (n)
    try {
      we(o), o.f |= fi;
    } catch (f) {
      throw Re(o), f;
    }
  else e !== null && Fe(o);
  var s = n && o.deps === null && o.first === null && o.nodes_start === null && o.teardown === null && (o.f & hi) === 0;
  if (!s && r && (i !== null && Qa(o, i), Q !== null && (Q.f & At) !== 0 && (t & We) === 0)) {
    var a = (
      /** @type {Derived} */
      Q
    );
    (a.effects ??= []).push(o);
  }
  return o;
}
function Ja(t) {
  const e = se(cr, null, !1);
  return xt(e, _t), e.teardown = t, e;
}
function Dr(t) {
  Go();
  var e = (
    /** @type {Effect} */
    G.f
  ), n = !Q && (e & ie) !== 0 && (e & fi) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      ft
    );
    (r.e ??= []).push(t);
  } else
    return Zo(t);
}
function Zo(t) {
  return se(li | $o, t, !1);
}
function ja(t) {
  return Go(), se(cr | $o, t, !0);
}
function tu(t) {
  return se(li, t, !1);
}
function eu(t, e) {
  var n = (
    /** @type {ComponentContextLegacy} */
    ft
  ), r = { effect: null, ran: !1, deps: t };
  n.l.$.push(r), r.effect = dr(() => {
    t(), !r.ran && (r.ran = !0, En(e));
  });
}
function nu() {
  var t = (
    /** @type {ComponentContextLegacy} */
    ft
  );
  dr(() => {
    for (var e of t.l.$) {
      e.deps();
      var n = e.effect;
      (n.f & _t) !== 0 && xt(n, oe), xn(n) && we(n), e.ran = !1;
    }
  });
}
function ru(t) {
  return se(pi | hi, t, !0);
}
function dr(t, e = 0) {
  return se(cr | e, t, !0);
}
function Ie(t, e = [], n = []) {
  Ua(e, n, (r) => {
    se(cr, () => t(...r.map(B)), !0);
  });
}
function Qo(t, e = 0) {
  var n = se(Ye | e, t, !0);
  return n;
}
function Kn(t, e = !0) {
  return se(ie, t, !0, e);
}
function Jo(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = Ae, r = Q;
    Fi(!0), Kt(null);
    try {
      e.call(null);
    } finally {
      Fi(n), Kt(r);
    }
  }
}
function jo(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && pr(() => {
      i.abort(di);
    });
    var r = n.next;
    (n.f & We) !== 0 ? n.parent = null : Re(n, e), n = r;
  }
}
function iu(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    (e.f & ie) === 0 && Re(e), e = n;
  }
}
function Re(t, e = !0) {
  var n = !1;
  (e || (t.f & wa) !== 0) && t.nodes_start !== null && t.nodes_end !== null && (ou(
    t.nodes_start,
    /** @type {TemplateNode} */
    t.nodes_end
  ), n = !0), jo(t, e && !n), Gn(t, 0), xt(t, ke);
  var r = t.transitions;
  if (r !== null)
    for (const o of r)
      o.stop();
  Jo(t);
  var i = t.parent;
  i !== null && i.first !== null && ts(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = t.ac = null;
}
function ou(t, e) {
  for (; t !== null; ) {
    var n = t === e ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ hr(t)
    );
    t.remove(), t = n;
  }
}
function ts(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function es(t, e) {
  var n = [];
  wi(t, n, !0), ns(n, () => {
    Re(t), e && e();
  });
}
function ns(t, e) {
  var n = t.length;
  if (n > 0) {
    var r = () => --n || e();
    for (var i of t)
      i.out(r);
  } else
    e();
}
function wi(t, e, n) {
  if ((t.f & zt) === 0) {
    if (t.f ^= zt, t.transitions !== null)
      for (const s of t.transitions)
        (s.is_global || n) && e.push(s);
    for (var r = t.first; r !== null; ) {
      var i = r.next, o = (r.f & ci) !== 0 || (r.f & ie) !== 0;
      wi(r, e, o ? n : !1), r = i;
    }
  }
}
function xi(t) {
  rs(t, !0);
}
function rs(t, e) {
  if ((t.f & zt) !== 0) {
    t.f ^= zt, (t.f & _t) === 0 && (xt(t, Dt), Fe(t));
    for (var n = t.first; n !== null; ) {
      var r = n.next, i = (n.f & ci) !== 0 || (n.f & ie) !== 0;
      rs(n, i ? e : !1), n = r;
    }
    if (t.transitions !== null)
      for (const o of t.transitions)
        (o.is_global || e) && o.in();
  }
}
let Le = !1;
function qi(t) {
  Le = t;
}
let Ae = !1;
function Fi(t) {
  Ae = t;
}
let Q = null, Vt = !1;
function Kt(t) {
  Q = t;
}
let G = null;
function pe(t) {
  G = t;
}
let ne = null;
function su(t) {
  Q !== null && (ne === null ? ne = [t] : ne.push(t));
}
let yt = null, kt = 0, Nt = null;
function au(t) {
  Nt = t;
}
let is = 1, cn = 0, ye = cn;
function Ui(t) {
  ye = t;
}
let ce = !1;
function os() {
  return ++is;
}
function xn(t) {
  var e = t.f;
  if ((e & Dt) !== 0)
    return !0;
  if ((e & oe) !== 0) {
    var n = t.deps, r = (e & Pt) !== 0;
    if (n !== null) {
      var i, o, s = (e & Hn) !== 0, a = r && G !== null && !ce, f = n.length;
      if ((s || a) && (G === null || (G.f & ke) === 0)) {
        var u = (
          /** @type {Derived} */
          t
        ), l = u.parent;
        for (i = 0; i < f; i++)
          o = n[i], (s || !o?.reactions?.includes(u)) && (o.reactions ??= []).push(u);
        s && (u.f ^= Hn), a && l !== null && (l.f & Pt) === 0 && (u.f ^= Pt);
      }
      for (i = 0; i < f; i++)
        if (o = n[i], xn(
          /** @type {Derived} */
          o
        ) && Vo(
          /** @type {Derived} */
          o
        ), o.wv > t.wv)
          return !0;
    }
    (!r || G !== null && !ce) && xt(t, _t);
  }
  return !1;
}
function ss(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null && !ne?.includes(t))
    for (var i = 0; i < r.length; i++) {
      var o = r[i];
      (o.f & At) !== 0 ? ss(
        /** @type {Derived} */
        o,
        e,
        !1
      ) : e === o && (n ? xt(o, Dt) : (o.f & _t) !== 0 && xt(o, oe), Fe(
        /** @type {Effect} */
        o
      ));
    }
}
function as(t) {
  var e = yt, n = kt, r = Nt, i = Q, o = ce, s = ne, a = ft, f = Vt, u = ye, l = t.f;
  yt = /** @type {null | Value[]} */
  null, kt = 0, Nt = null, ce = (l & Pt) !== 0 && (Vt || !Le || Q === null), Q = (l & (ie | We)) === 0 ? t : null, ne = null, Bn(t.ctx), Vt = !1, ye = ++cn, t.ac !== null && (pr(() => {
    t.ac.abort(di);
  }), t.ac = null);
  try {
    t.f |= Cr;
    var c = (
      /** @type {Function} */
      t.fn
    ), h = c(), v = t.deps;
    if (yt !== null) {
      var g;
      if (Gn(t, kt), v !== null && kt > 0)
        for (v.length = kt + yt.length, g = 0; g < yt.length; g++)
          v[kt + g] = yt[g];
      else
        t.deps = v = yt;
      if (!ce || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      (l & At) !== 0 && /** @type {import('#client').Derived} */
      t.reactions !== null)
        for (g = kt; g < v.length; g++)
          (v[g].reactions ??= []).push(t);
    } else v !== null && kt < v.length && (Gn(t, kt), v.length = kt);
    if (Ke() && Nt !== null && !Vt && v !== null && (t.f & (At | oe | Dt)) === 0)
      for (g = 0; g < /** @type {Source[]} */
      Nt.length; g++)
        ss(
          Nt[g],
          /** @type {Effect} */
          t
        );
    return i !== null && i !== t && (cn++, Nt !== null && (r === null ? r = Nt : r.push(.../** @type {Source[]} */
    Nt))), (t.f & ge) !== 0 && (t.f ^= ge), h;
  } catch (k) {
    return $a(k);
  } finally {
    t.f ^= Cr, yt = e, kt = n, Nt = r, Q = i, ce = o, ne = s, Bn(a), Vt = f, ye = u;
  }
}
function uu(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = va.call(n, t);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = e.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  n === null && (e.f & At) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (yt === null || !yt.includes(e)) && (xt(e, oe), (e.f & (Pt | Hn)) === 0 && (e.f ^= Hn), Bo(
    /** @type {Derived} **/
    e
  ), Gn(
    /** @type {Derived} **/
    e,
    0
  ));
}
function Gn(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++)
      uu(t, n[r]);
}
function we(t) {
  var e = t.f;
  if ((e & ke) === 0) {
    xt(t, _t);
    var n = G, r = Le;
    G = t, Le = !0;
    try {
      (e & Ye) !== 0 ? iu(t) : jo(t), Jo(t);
      var i = as(t);
      t.teardown = typeof i == "function" ? i : null, t.wv = is;
      var o;
      Co && ia && (t.f & Dt) !== 0 && t.deps;
    } finally {
      Le = r, G = n;
    }
  }
}
function B(t) {
  var e = t.f, n = (e & At) !== 0;
  if (Q !== null && !Vt) {
    var r = G !== null && (G.f & ke) !== 0;
    if (!r && !ne?.includes(t)) {
      var i = Q.deps;
      if ((Q.f & Cr) !== 0)
        t.rv < cn && (t.rv = cn, yt === null && i !== null && i[kt] === t ? kt++ : yt === null ? yt = [t] : (!ce || !yt.includes(t)) && yt.push(t));
      else {
        (Q.deps ??= []).push(t);
        var o = t.reactions;
        o === null ? t.reactions = [Q] : o.includes(Q) || o.push(Q);
      }
    }
  } else if (n && /** @type {Derived} */
  t.deps === null && /** @type {Derived} */
  t.effects === null) {
    var s = (
      /** @type {Derived} */
      t
    ), a = s.parent;
    a !== null && (a.f & Pt) === 0 && (s.f ^= Pt);
  }
  if (Ae) {
    if (he.has(t))
      return he.get(t);
    if (n) {
      s = /** @type {Derived} */
      t;
      var f = s.v;
      return ((s.f & _t) === 0 && s.reactions !== null || us(s)) && (f = mi(s)), he.set(s, f), f;
    }
  } else if (n) {
    if (s = /** @type {Derived} */
    t, qe?.has(s))
      return qe.get(s);
    xn(s) && Vo(s);
  }
  if ((t.f & ge) !== 0)
    throw t.v;
  return t.v;
}
function us(t) {
  if (t.v === vt) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (he.has(e) || (e.f & At) !== 0 && us(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function En(t) {
  var e = Vt;
  try {
    return Vt = !0, t();
  } finally {
    Vt = e;
  }
}
const lu = -7169;
function xt(t, e) {
  t.f = t.f & lu | e;
}
function ls(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if (me in t)
      $r(t);
    else if (!Array.isArray(t))
      for (let e in t) {
        const n = t[e];
        typeof n == "object" && n && me in n && $r(n);
      }
  }
}
function $r(t, e = /* @__PURE__ */ new Set()) {
  if (typeof t == "object" && t !== null && // We don't want to traverse DOM elements
  !(t instanceof EventTarget) && !e.has(t)) {
    e.add(t), t instanceof Date && t.getTime();
    for (let r in t)
      try {
        $r(t[r], e);
      } catch {
      }
    const n = ui(t);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = Po(n);
      for (let i in r) {
        const o = r[i].get;
        if (o)
          try {
            o.call(t);
          } catch {
          }
      }
    }
  }
}
function fu(t, e, n, r = {}) {
  function i(o) {
    if (r.capture || cu.call(e, o), !o.cancelBubble)
      return pr(() => n?.call(this, o));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? Ho(() => {
    e.addEventListener(t, i, r);
  }) : e.addEventListener(t, i, r), i;
}
function jt(t, e, n, r, i) {
  var o = { capture: r, passive: i }, s = fu(t, e, n, o);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && Ja(() => {
    e.removeEventListener(t, s, o);
  });
}
let Hi = null;
function cu(t) {
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, i = t.composedPath?.() || [], o = (
    /** @type {null | Element} */
    i[0] || t.target
  );
  Hi = t;
  var s = 0, a = Hi === t && t.__root;
  if (a) {
    var f = i.indexOf(a);
    if (f !== -1 && (e === document || e === /** @type {any} */
    window)) {
      t.__root = e;
      return;
    }
    var u = i.indexOf(e);
    if (u === -1)
      return;
    f <= u && (s = f);
  }
  if (o = /** @type {Element} */
  i[s] || t.target, o !== e) {
    Nr(t, "currentTarget", {
      configurable: !0,
      get() {
        return o || n;
      }
    });
    var l = Q, c = G;
    Kt(null), pe(null);
    try {
      for (var h, v = []; o !== null; ) {
        var g = o.assignedSlot || o.parentNode || /** @type {any} */
        o.host || null;
        try {
          var k = o["__" + r];
          if (k != null && (!/** @type {any} */
          o.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === o))
            if (ai(k)) {
              var [b, ...R] = k;
              b.apply(o, [t, ...R]);
            } else
              k.call(o, t);
        } catch (S) {
          h ? v.push(S) : h = S;
        }
        if (t.cancelBubble || g === e || g === null)
          break;
        o = g;
      }
      if (h) {
        for (let S of v)
          queueMicrotask(() => {
            throw S;
          });
        throw h;
      }
    } finally {
      t.__root = e, delete t.currentTarget, Kt(l), pe(c);
    }
  }
}
function hu(t) {
  var e = document.createElement("template");
  return e.innerHTML = t.replaceAll("<!>", "<!---->"), e.content;
}
function Zn(t, e) {
  var n = (
    /** @type {Effect} */
    G
  );
  n.nodes_start === null && (n.nodes_start = t, n.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function Gt(t, e) {
  var n = (e & ha) !== 0, r = (e & pa) !== 0, i, o = !t.startsWith("<!>");
  return () => {
    i === void 0 && (i = hu(o ? t : "<!>" + t), n || (i = /** @type {Node} */
    /* @__PURE__ */ Wn(i)));
    var s = (
      /** @type {TemplateNode} */
      r || Xa ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Wn(s)
      ), f = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      Zn(a, f);
    } else
      Zn(s, s);
    return s;
  };
}
function pu(t = "") {
  {
    var e = wn(t + "");
    return Zn(e, e), e;
  }
}
function du() {
  var t = document.createDocumentFragment(), e = document.createComment(""), n = wn();
  return t.append(e, n), Zn(e, n), t;
}
function It(t, e) {
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
function Ce(t, e) {
  var n = e == null ? "" : typeof e == "object" ? e + "" : e;
  n !== (t.__t ??= t.nodeValue) && (t.__t = n, t.nodeValue = n + "");
}
function fs(t) {
  ft === null && ba(), Xe && ft.l !== null ? vu(ft).m.push(t) : Dr(() => {
    const e = En(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function vu(t) {
  var e = (
    /** @type {ComponentContextLegacy} */
    t.l
  );
  return e.u ??= { a: [], b: [], m: [] };
}
function De(t, e, n = !1) {
  var r = t, i = null, o = null, s = vt, a = n ? ci : 0, f = !1;
  const u = (v, g = !0) => {
    f = !0, h(g, v);
  };
  var l = null;
  function c() {
    l !== null && (l.lastChild.remove(), r.before(l), l = null);
    var v = s ? i : o, g = s ? o : i;
    v && xi(v), g && es(g, () => {
      s ? o = null : i = null;
    });
  }
  const h = (v, g) => {
    if (s !== (s = v)) {
      var k = Ko(), b = r;
      if (k && (l = document.createDocumentFragment(), l.append(b = wn())), s ? i ??= g && Kn(() => g(b)) : o ??= g && Kn(() => g(b)), k) {
        var R = (
          /** @type {Batch} */
          at
        ), S = s ? i : o, N = s ? o : i;
        S && R.skipped_effects.delete(S), N && R.skipped_effects.add(N), R.add_callback(c);
      } else
        c();
    }
  };
  Qo(() => {
    f = !1, e(u), f || h(null, null);
  }, a);
}
function _u(t, e) {
  return e;
}
function gu(t, e, n) {
  for (var r = t.items, i = [], o = e.length, s = 0; s < o; s++)
    wi(e[s].e, i, !0);
  var a = o > 0 && i.length === 0 && n !== null;
  if (a) {
    var f = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    Ka(f), f.append(
      /** @type {Element} */
      n
    ), r.clear(), Bt(t, e[0].prev, e[o - 1].next);
  }
  ns(i, () => {
    for (var u = 0; u < o; u++) {
      var l = e[u];
      a || (r.delete(l.k), Bt(t, l.prev, l.next)), Re(l.e, !a);
    }
  });
}
function mu(t, e, n, r, i, o = null) {
  var s = t, a = { flags: e, items: /* @__PURE__ */ new Map(), first: null };
  {
    var f = (
      /** @type {Element} */
      t
    );
    s = f.appendChild(wn());
  }
  var u = null, l = !1, c = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ gi(() => {
    var b = n();
    return ai(b) ? b : b == null ? [] : Oo(b);
  }), v, g;
  function k() {
    yu(
      g,
      v,
      a,
      c,
      s,
      i,
      e,
      r,
      n
    ), o !== null && (v.length === 0 ? u ? xi(u) : u = Kn(() => o(s)) : u !== null && es(u, () => {
      u = null;
    }));
  }
  Qo(() => {
    g ??= /** @type {Effect} */
    G, v = /** @type {V[]} */
    B(h);
    var b = v.length;
    if (!(l && b === 0)) {
      l = b === 0;
      var R, S, N, C;
      if (Ko()) {
        var z = /* @__PURE__ */ new Set(), L = (
          /** @type {Batch} */
          at
        );
        for (S = 0; S < b; S += 1) {
          N = v[S], C = r(N, S);
          var D = a.items.get(C) ?? c.get(C);
          D ? cs(D, N, S) : (R = hs(
            null,
            a,
            null,
            null,
            N,
            C,
            S,
            i,
            e,
            n,
            !0
          ), c.set(C, R)), z.add(C);
        }
        for (const [d, p] of a.items)
          z.has(d) || L.skipped_effects.add(p.e);
        L.add_callback(k);
      } else
        k();
      B(h);
    }
  });
}
function yu(t, e, n, r, i, o, s, a, f) {
  var u = e.length, l = n.items, c = n.first, h = c, v, g = null, k = [], b = [], R, S, N, C;
  for (C = 0; C < u; C += 1) {
    if (R = e[C], S = a(R, C), N = l.get(S), N === void 0) {
      var z = r.get(S);
      if (z !== void 0) {
        r.delete(S), l.set(S, z);
        var L = g ? g.next : h;
        Bt(n, g, z), Bt(n, z, L), wr(z, L, i), g = z;
      } else {
        var D = h ? (
          /** @type {TemplateNode} */
          h.e.nodes_start
        ) : i;
        g = hs(
          D,
          n,
          g,
          g === null ? n.first : g.next,
          R,
          S,
          C,
          o,
          s,
          f
        );
      }
      l.set(S, g), k = [], b = [], h = g.next;
      continue;
    }
    if (cs(N, R, C), (N.e.f & zt) !== 0 && xi(N.e), N !== h) {
      if (v !== void 0 && v.has(N)) {
        if (k.length < b.length) {
          var d = b[0], p;
          g = d.prev;
          var m = k[0], x = k[k.length - 1];
          for (p = 0; p < k.length; p += 1)
            wr(k[p], d, i);
          for (p = 0; p < b.length; p += 1)
            v.delete(b[p]);
          Bt(n, m.prev, x.next), Bt(n, g, m), Bt(n, x, d), h = d, g = x, C -= 1, k = [], b = [];
        } else
          v.delete(N), wr(N, h, i), Bt(n, N.prev, N.next), Bt(n, N, g === null ? n.first : g.next), Bt(n, g, N), g = N;
        continue;
      }
      for (k = [], b = []; h !== null && h.k !== S; )
        (h.e.f & zt) === 0 && (v ??= /* @__PURE__ */ new Set()).add(h), b.push(h), h = h.next;
      if (h === null)
        continue;
      N = h;
    }
    k.push(N), g = N, h = N.next;
  }
  if (h !== null || v !== void 0) {
    for (var A = v === void 0 ? [] : Oo(v); h !== null; )
      (h.e.f & zt) === 0 && A.push(h), h = h.next;
    var I = A.length;
    if (I > 0) {
      var _ = u === 0 ? i : null;
      gu(n, A, _);
    }
  }
  t.first = n.first && n.first.e, t.last = g && g.e;
  for (var y of r.values())
    Re(y.e);
  r.clear();
}
function cs(t, e, n, r) {
  Yn(t.v, e), t.i = n;
}
function hs(t, e, n, r, i, o, s, a, f, u, l) {
  var c = (f & sa) !== 0, h = (f & ua) === 0, v = c ? h ? /* @__PURE__ */ fe(i, !1, !1) : fn(i) : i, g = (f & aa) === 0 ? s : fn(s), k = {
    i: g,
    v,
    k: o,
    a: null,
    // @ts-expect-error
    e: null,
    prev: n,
    next: r
  };
  try {
    if (t === null) {
      var b = document.createDocumentFragment();
      b.append(t = wn());
    }
    return k.e = Kn(() => a(
      /** @type {Node} */
      t,
      v,
      g,
      u
    ), Oa), k.e.prev = n && n.e, k.e.next = r && r.e, n === null ? l || (e.first = k) : (n.next = k, n.e.next = k.e), r !== null && (r.prev = k, r.e.prev = k.e), k;
  } finally {
  }
}
function wr(t, e, n) {
  for (var r = t.next ? (
    /** @type {TemplateNode} */
    t.next.e.nodes_start
  ) : n, i = e ? (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ) : n, o = (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ); o !== null && o !== r; ) {
    var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ hr(o)
    );
    i.before(o), o = s;
  }
}
function Bt(t, e, n) {
  e === null ? t.first = n : (e.next = n, e.e.next = n && n.e), n !== null && (n.prev = e, n.e.prev = e && e.e);
}
const wu = Symbol("is custom element"), xu = Symbol("is html");
function Bi(t, e, n, r) {
  var i = Eu(t);
  i[e] !== (i[e] = n) && (n == null ? t.removeAttribute(e) : typeof n != "string" && bu(t).includes(e) ? t[e] = n : t.setAttribute(e, n));
}
function Eu(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    t.__attributes ??= {
      [wu]: t.nodeName.includes("-"),
      [xu]: t.namespaceURI === da
    }
  );
}
var Vi = /* @__PURE__ */ new Map();
function bu(t) {
  var e = Vi.get(t.nodeName);
  if (e) return e;
  Vi.set(t.nodeName, e = []);
  for (var n, r = t, i = Element.prototype; i !== r; ) {
    n = Po(r);
    for (var o in n)
      n[o].set && e.push(o);
    r = ui(r);
  }
  return e;
}
function Su(t, e, n = e) {
  var r = Ke(), i = /* @__PURE__ */ new WeakSet();
  Za(t, "input", (o) => {
    var s = o ? t.defaultValue : t.value;
    if (s = xr(t) ? Er(s) : s, n(s), at !== null && i.add(at), r && s !== (s = e())) {
      var a = t.selectionStart, f = t.selectionEnd;
      t.value = s ?? "", f !== null && (t.selectionStart = a, t.selectionEnd = Math.min(f, t.value.length));
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  En(e) == null && t.value && (n(xr(t) ? Er(t.value) : t.value), at !== null && i.add(at)), dr(() => {
    var o = e();
    if (t === document.activeElement) {
      var s = (
        /** @type {Batch} */
        Dn ?? at
      );
      if (i.has(s))
        return;
    }
    xr(t) && o === Er(t.value) || t.type === "date" && !o && !t.value || o !== t.value && (t.value = o ?? "");
  });
}
function xr(t) {
  var e = t.type;
  return e === "number" || e === "range";
}
function Er(t) {
  return t === "" ? null : +t;
}
function Xi(t, e) {
  return t === e || t?.[me] === e;
}
function ku(t = {}, e, n, r) {
  return tu(() => {
    var i, o;
    return dr(() => {
      i = o, o = [], En(() => {
        t !== n(...o) && (e(t, ...o), i && Xi(n(...i), t) && e(null, ...i));
      });
    }), () => {
      Ho(() => {
        o && Xi(n(...o), t) && e(null, ...o);
      });
    };
  }), t;
}
function ps(t = !1) {
  const e = (
    /** @type {ComponentContextLegacy} */
    ft
  ), n = e.l.u;
  if (!n) return;
  let r = () => ls(e.s);
  if (t) {
    let i = 0, o = (
      /** @type {Record<string, any>} */
      {}
    );
    const s = /* @__PURE__ */ _i(() => {
      let a = !1;
      const f = e.s;
      for (const u in f)
        f[u] !== o[u] && (o[u] = f[u], a = !0);
      return a && i++, i;
    });
    r = () => B(s);
  }
  n.b.length && ja(() => {
    Yi(e, r), Ir(n.b);
  }), Dr(() => {
    const i = En(() => n.m.map(ma));
    return () => {
      for (const o of i)
        typeof o == "function" && o();
    };
  }), n.a.length && Dr(() => {
    Yi(e, r), Ir(n.a);
  });
}
function Yi(t, e) {
  if (t.l.s)
    for (const n of t.l.s) B(n);
  e();
}
let kn = !1;
function Ru(t) {
  var e = kn;
  try {
    return kn = !1, [t(), kn];
  } finally {
    kn = e;
  }
}
function Au(t, e, n, r) {
  var i = !Xe || (n & la) !== 0, o = (n & ca) !== 0, s = (
    /** @type {V} */
    r
  ), a = !0, f = () => (a && (a = !1, s = /** @type {V} */
  r), s), u;
  {
    var l = me in t || xa in t;
    u = Pn(t, e)?.set ?? (l && e in t ? (S) => t[e] = S : void 0);
  }
  var c, h = !1;
  [c, h] = Ru(() => (
    /** @type {V} */
    t[e]
  )), c === void 0 && r !== void 0 && (c = f(), u && (i && Ta(), u(c)));
  var v;
  if (i ? v = () => {
    var S = (
      /** @type {V} */
      t[e]
    );
    return S === void 0 ? f() : (a = !0, S);
  } : v = () => {
    var S = (
      /** @type {V} */
      t[e]
    );
    return S !== void 0 && (s = /** @type {V} */
    void 0), S === void 0 ? s : S;
  }, i && (n & fa) === 0)
    return v;
  if (u) {
    var g = t.$$legacy;
    return (
      /** @type {() => V} */
      (function(S, N) {
        return arguments.length > 0 ? ((!i || !N || g || h) && u(N ? v() : S), S) : v();
      })
    );
  }
  var k = !1, b = /* @__PURE__ */ gi(() => (k = !1, v()));
  B(b);
  var R = (
    /** @type {Effect} */
    G
  );
  return (
    /** @type {() => V} */
    (function(S, N) {
      if (arguments.length > 0) {
        const C = N ? B(b) : i && o ? Pe(S) : S;
        return Z(b, C), k = !0, s !== void 0 && (s = C), S;
      }
      return Ae && k || (R.f & ke) !== 0 ? b.v : B(b);
    })
  );
}
function Mu(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var $n = { exports: {} };
/* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/
var Tu = $n.exports, Wi;
function Nu() {
  return Wi || (Wi = 1, (function(t, e) {
    ((n, r) => {
      t.exports = r();
    })(Tu, function n() {
      var r = typeof self < "u" ? self : typeof window < "u" ? window : r !== void 0 ? r : {}, i, o = !r.document && !!r.postMessage, s = r.IS_PAPA_WORKER || !1, a = {}, f = 0, u = {};
      function l(d) {
        this._handle = null, this._finished = !1, this._completed = !1, this._halted = !1, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = !0, this._completeResults = { data: [], errors: [], meta: {} }, (function(p) {
          var m = z(p);
          m.chunkSize = parseInt(m.chunkSize), p.step || p.chunk || (m.chunkSize = null), this._handle = new k(m), (this._handle.streamer = this)._config = m;
        }).call(this, d), this.parseChunk = function(p, m) {
          var x = parseInt(this._config.skipFirstNLines) || 0;
          if (this.isFirstChunk && 0 < x) {
            let I = this._config.newline;
            I || (A = this._config.quoteChar || '"', I = this._handle.guessLineEndings(p, A)), p = [...p.split(I).slice(x)].join(I);
          }
          this.isFirstChunk && D(this._config.beforeFirstChunk) && (A = this._config.beforeFirstChunk(p)) !== void 0 && (p = A), this.isFirstChunk = !1, this._halted = !1;
          var x = this._partialLine + p, A = (this._partialLine = "", this._handle.parse(x, this._baseIndex, !this._finished));
          if (!this._handle.paused() && !this._handle.aborted()) {
            if (p = A.meta.cursor, x = (this._finished || (this._partialLine = x.substring(p - this._baseIndex), this._baseIndex = p), A && A.data && (this._rowCount += A.data.length), this._finished || this._config.preview && this._rowCount >= this._config.preview), s) r.postMessage({ results: A, workerId: u.WORKER_ID, finished: x });
            else if (D(this._config.chunk) && !m) {
              if (this._config.chunk(A, this._handle), this._handle.paused() || this._handle.aborted()) return void (this._halted = !0);
              this._completeResults = A = void 0;
            }
            return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(A.data), this._completeResults.errors = this._completeResults.errors.concat(A.errors), this._completeResults.meta = A.meta), this._completed || !x || !D(this._config.complete) || A && A.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0), x || A && A.meta.paused || this._nextChunk(), A;
          }
          this._halted = !0;
        }, this._sendError = function(p) {
          D(this._config.error) ? this._config.error(p) : s && this._config.error && r.postMessage({ workerId: u.WORKER_ID, error: p, finished: !1 });
        };
      }
      function c(d) {
        var p;
        (d = d || {}).chunkSize || (d.chunkSize = u.RemoteChunkSize), l.call(this, d), this._nextChunk = o ? function() {
          this._readChunk(), this._chunkLoaded();
        } : function() {
          this._readChunk();
        }, this.stream = function(m) {
          this._input = m, this._nextChunk();
        }, this._readChunk = function() {
          if (this._finished) this._chunkLoaded();
          else {
            if (p = new XMLHttpRequest(), this._config.withCredentials && (p.withCredentials = this._config.withCredentials), o || (p.onload = L(this._chunkLoaded, this), p.onerror = L(this._chunkError, this)), p.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !o), this._config.downloadRequestHeaders) {
              var m, x = this._config.downloadRequestHeaders;
              for (m in x) p.setRequestHeader(m, x[m]);
            }
            var A;
            this._config.chunkSize && (A = this._start + this._config.chunkSize - 1, p.setRequestHeader("Range", "bytes=" + this._start + "-" + A));
            try {
              p.send(this._config.downloadRequestBody);
            } catch (I) {
              this._chunkError(I.message);
            }
            o && p.status === 0 && this._chunkError();
          }
        }, this._chunkLoaded = function() {
          p.readyState === 4 && (p.status < 200 || 400 <= p.status ? this._chunkError() : (this._start += this._config.chunkSize || p.responseText.length, this._finished = !this._config.chunkSize || this._start >= ((m) => (m = m.getResponseHeader("Content-Range")) !== null ? parseInt(m.substring(m.lastIndexOf("/") + 1)) : -1)(p), this.parseChunk(p.responseText)));
        }, this._chunkError = function(m) {
          m = p.statusText || m, this._sendError(new Error(m));
        };
      }
      function h(d) {
        (d = d || {}).chunkSize || (d.chunkSize = u.LocalChunkSize), l.call(this, d);
        var p, m, x = typeof FileReader < "u";
        this.stream = function(A) {
          this._input = A, m = A.slice || A.webkitSlice || A.mozSlice, x ? ((p = new FileReader()).onload = L(this._chunkLoaded, this), p.onerror = L(this._chunkError, this)) : p = new FileReaderSync(), this._nextChunk();
        }, this._nextChunk = function() {
          this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
        }, this._readChunk = function() {
          var A = this._input, I = (this._config.chunkSize && (I = Math.min(this._start + this._config.chunkSize, this._input.size), A = m.call(A, this._start, I)), p.readAsText(A, this._config.encoding));
          x || this._chunkLoaded({ target: { result: I } });
        }, this._chunkLoaded = function(A) {
          this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(A.target.result);
        }, this._chunkError = function() {
          this._sendError(p.error);
        };
      }
      function v(d) {
        var p;
        l.call(this, d = d || {}), this.stream = function(m) {
          return p = m, this._nextChunk();
        }, this._nextChunk = function() {
          var m, x;
          if (!this._finished) return m = this._config.chunkSize, p = m ? (x = p.substring(0, m), p.substring(m)) : (x = p, ""), this._finished = !p, this.parseChunk(x);
        };
      }
      function g(d) {
        l.call(this, d = d || {});
        var p = [], m = !0, x = !1;
        this.pause = function() {
          l.prototype.pause.apply(this, arguments), this._input.pause();
        }, this.resume = function() {
          l.prototype.resume.apply(this, arguments), this._input.resume();
        }, this.stream = function(A) {
          this._input = A, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError);
        }, this._checkIsFinished = function() {
          x && p.length === 1 && (this._finished = !0);
        }, this._nextChunk = function() {
          this._checkIsFinished(), p.length ? this.parseChunk(p.shift()) : m = !0;
        }, this._streamData = L(function(A) {
          try {
            p.push(typeof A == "string" ? A : A.toString(this._config.encoding)), m && (m = !1, this._checkIsFinished(), this.parseChunk(p.shift()));
          } catch (I) {
            this._streamError(I);
          }
        }, this), this._streamError = L(function(A) {
          this._streamCleanUp(), this._sendError(A);
        }, this), this._streamEnd = L(function() {
          this._streamCleanUp(), x = !0, this._streamData("");
        }, this), this._streamCleanUp = L(function() {
          this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError);
        }, this);
      }
      function k(d) {
        var p, m, x, A, I = Math.pow(2, 53), _ = -I, y = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, w = /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/, E = this, M = 0, T = 0, q = !1, O = !1, $ = [], P = { data: [], errors: [], meta: {} };
        function V(F) {
          return d.skipEmptyLines === "greedy" ? F.join("").trim() === "" : F.length === 1 && F[0].length === 0;
        }
        function X() {
          if (P && x && (et("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + u.DefaultDelimiter + "'"), x = !1), d.skipEmptyLines && (P.data = P.data.filter(function(U) {
            return !V(U);
          })), J()) {
            let U = function(st, pt) {
              D(d.transformHeader) && (st = d.transformHeader(st, pt)), $.push(st);
            };
            if (P) if (Array.isArray(P.data[0])) {
              for (var F = 0; J() && F < P.data.length; F++) P.data[F].forEach(U);
              P.data.splice(0, 1);
            } else P.data.forEach(U);
          }
          function H(U, st) {
            for (var pt = d.header ? {} : [], tt = 0; tt < U.length; tt++) {
              var nt = tt, W = U[tt], W = (($t, Y) => ((it) => (d.dynamicTypingFunction && d.dynamicTyping[it] === void 0 && (d.dynamicTyping[it] = d.dynamicTypingFunction(it)), (d.dynamicTyping[it] || d.dynamicTyping) === !0))($t) ? Y === "true" || Y === "TRUE" || Y !== "false" && Y !== "FALSE" && (((it) => {
                if (y.test(it) && (it = parseFloat(it), _ < it && it < I))
                  return 1;
              })(Y) ? parseFloat(Y) : w.test(Y) ? new Date(Y) : Y === "" ? null : Y) : Y)(nt = d.header ? tt >= $.length ? "__parsed_extra" : $[tt] : nt, W = d.transform ? d.transform(W, nt) : W);
              nt === "__parsed_extra" ? (pt[nt] = pt[nt] || [], pt[nt].push(W)) : pt[nt] = W;
            }
            return d.header && (tt > $.length ? et("FieldMismatch", "TooManyFields", "Too many fields: expected " + $.length + " fields but parsed " + tt, T + st) : tt < $.length && et("FieldMismatch", "TooFewFields", "Too few fields: expected " + $.length + " fields but parsed " + tt, T + st)), pt;
          }
          var j;
          P && (d.header || d.dynamicTyping || d.transform) && (j = 1, !P.data.length || Array.isArray(P.data[0]) ? (P.data = P.data.map(H), j = P.data.length) : P.data = H(P.data, 0), d.header && P.meta && (P.meta.fields = $), T += j);
        }
        function J() {
          return d.header && $.length === 0;
        }
        function et(F, H, j, U) {
          F = { type: F, code: H, message: j }, U !== void 0 && (F.row = U), P.errors.push(F);
        }
        D(d.step) && (A = d.step, d.step = function(F) {
          P = F, J() ? X() : (X(), P.data.length !== 0 && (M += F.data.length, d.preview && M > d.preview ? m.abort() : (P.data = P.data[0], A(P, E))));
        }), this.parse = function(F, H, j) {
          var U = d.quoteChar || '"', U = (d.newline || (d.newline = this.guessLineEndings(F, U)), x = !1, d.delimiter ? D(d.delimiter) && (d.delimiter = d.delimiter(F), P.meta.delimiter = d.delimiter) : ((U = ((st, pt, tt, nt, W) => {
            var $t, Y, it, ae;
            W = W || [",", "	", "|", ";", u.RECORD_SEP, u.UNIT_SEP];
            for (var Te = 0; Te < W.length; Te++) {
              for (var Ft, Ge = W[Te], gt = 0, Ut = 0, dt = 0, Et = (it = void 0, new R({ comments: nt, delimiter: Ge, newline: pt, preview: 10 }).parse(st)), Qt = 0; Qt < Et.data.length; Qt++) tt && V(Et.data[Qt]) ? dt++ : (Ft = Et.data[Qt].length, Ut += Ft, it === void 0 ? it = Ft : 0 < Ft && (gt += Math.abs(Ft - it), it = Ft));
              0 < Et.data.length && (Ut /= Et.data.length - dt), (Y === void 0 || gt <= Y) && (ae === void 0 || ae < Ut) && 1.99 < Ut && (Y = gt, $t = Ge, ae = Ut);
            }
            return { successful: !!(d.delimiter = $t), bestDelimiter: $t };
          })(F, d.newline, d.skipEmptyLines, d.comments, d.delimitersToGuess)).successful ? d.delimiter = U.bestDelimiter : (x = !0, d.delimiter = u.DefaultDelimiter), P.meta.delimiter = d.delimiter), z(d));
          return d.preview && d.header && U.preview++, p = F, m = new R(U), P = m.parse(p, H, j), X(), q ? { meta: { paused: !0 } } : P || { meta: { paused: !1 } };
        }, this.paused = function() {
          return q;
        }, this.pause = function() {
          q = !0, m.abort(), p = D(d.chunk) ? "" : p.substring(m.getCharIndex());
        }, this.resume = function() {
          E.streamer._halted ? (q = !1, E.streamer.parseChunk(p, !0)) : setTimeout(E.resume, 3);
        }, this.aborted = function() {
          return O;
        }, this.abort = function() {
          O = !0, m.abort(), P.meta.aborted = !0, D(d.complete) && d.complete(P), p = "";
        }, this.guessLineEndings = function(st, U) {
          st = st.substring(0, 1048576);
          var U = new RegExp(b(U) + "([^]*?)" + b(U), "gm"), j = (st = st.replace(U, "")).split("\r"), U = st.split(`
`), st = 1 < U.length && U[0].length < j[0].length;
          if (j.length === 1 || st) return `
`;
          for (var pt = 0, tt = 0; tt < j.length; tt++) j[tt][0] === `
` && pt++;
          return pt >= j.length / 2 ? `\r
` : "\r";
        };
      }
      function b(d) {
        return d.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
      function R(d) {
        var p = (d = d || {}).delimiter, m = d.newline, x = d.comments, A = d.step, I = d.preview, _ = d.fastMode, y = null, w = !1, E = d.quoteChar == null ? '"' : d.quoteChar, M = E;
        if (d.escapeChar !== void 0 && (M = d.escapeChar), (typeof p != "string" || -1 < u.BAD_DELIMITERS.indexOf(p)) && (p = ","), x === p) throw new Error("Comment character same as delimiter");
        x === !0 ? x = "#" : (typeof x != "string" || -1 < u.BAD_DELIMITERS.indexOf(x)) && (x = !1), m !== `
` && m !== "\r" && m !== `\r
` && (m = `
`);
        var T = 0, q = !1;
        this.parse = function(O, $, P) {
          if (typeof O != "string") throw new Error("Input must be a string");
          var V = O.length, X = p.length, J = m.length, et = x.length, F = D(A), H = [], j = [], U = [], st = T = 0;
          if (!O) return gt();
          if (_ || _ !== !1 && O.indexOf(E) === -1) {
            for (var pt = O.split(m), tt = 0; tt < pt.length; tt++) {
              if (U = pt[tt], T += U.length, tt !== pt.length - 1) T += m.length;
              else if (P) return gt();
              if (!x || U.substring(0, et) !== x) {
                if (F) {
                  if (H = [], ae(U.split(p)), Ut(), q) return gt();
                } else ae(U.split(p));
                if (I && I <= tt) return H = H.slice(0, I), gt(!0);
              }
            }
            return gt();
          }
          for (var nt = O.indexOf(p, T), W = O.indexOf(m, T), $t = new RegExp(b(M) + b(E), "g"), Y = O.indexOf(E, T); ; ) if (O[T] === E) for (Y = T, T++; ; ) {
            if ((Y = O.indexOf(E, Y + 1)) === -1) return P || j.push({ type: "Quotes", code: "MissingQuotes", message: "Quoted field unterminated", row: H.length, index: T }), Ft();
            if (Y === V - 1) return Ft(O.substring(T, Y).replace($t, E));
            if (E === M && O[Y + 1] === M) Y++;
            else if (E === M || Y === 0 || O[Y - 1] !== M) {
              nt !== -1 && nt < Y + 1 && (nt = O.indexOf(p, Y + 1));
              var it = Te((W = W !== -1 && W < Y + 1 ? O.indexOf(m, Y + 1) : W) === -1 ? nt : Math.min(nt, W));
              if (O.substr(Y + 1 + it, X) === p) {
                U.push(O.substring(T, Y).replace($t, E)), O[T = Y + 1 + it + X] !== E && (Y = O.indexOf(E, T)), nt = O.indexOf(p, T), W = O.indexOf(m, T);
                break;
              }
              if (it = Te(W), O.substring(Y + 1 + it, Y + 1 + it + J) === m) {
                if (U.push(O.substring(T, Y).replace($t, E)), Ge(Y + 1 + it + J), nt = O.indexOf(p, T), Y = O.indexOf(E, T), F && (Ut(), q)) return gt();
                if (I && H.length >= I) return gt(!0);
                break;
              }
              j.push({ type: "Quotes", code: "InvalidQuotes", message: "Trailing quote on quoted field is malformed", row: H.length, index: T }), Y++;
            }
          }
          else if (x && U.length === 0 && O.substring(T, T + et) === x) {
            if (W === -1) return gt();
            T = W + J, W = O.indexOf(m, T), nt = O.indexOf(p, T);
          } else if (nt !== -1 && (nt < W || W === -1)) U.push(O.substring(T, nt)), T = nt + X, nt = O.indexOf(p, T);
          else {
            if (W === -1) break;
            if (U.push(O.substring(T, W)), Ge(W + J), F && (Ut(), q)) return gt();
            if (I && H.length >= I) return gt(!0);
          }
          return Ft();
          function ae(dt) {
            H.push(dt), st = T;
          }
          function Te(dt) {
            var Et = 0;
            return Et = dt !== -1 && (dt = O.substring(Y + 1, dt)) && dt.trim() === "" ? dt.length : Et;
          }
          function Ft(dt) {
            return P || (dt === void 0 && (dt = O.substring(T)), U.push(dt), T = V, ae(U), F && Ut()), gt();
          }
          function Ge(dt) {
            T = dt, ae(U), U = [], W = O.indexOf(m, T);
          }
          function gt(dt) {
            if (d.header && !$ && H.length && !w) {
              var Et = H[0], Qt = /* @__PURE__ */ Object.create(null), mr = new Set(Et);
              let Oi = !1;
              for (let Ne = 0; Ne < Et.length; Ne++) {
                let Ht = Et[Ne];
                if (Qt[Ht = D(d.transformHeader) ? d.transformHeader(Ht, Ne) : Ht]) {
                  let Ze, Pi = Qt[Ht];
                  for (; Ze = Ht + "_" + Pi, Pi++, mr.has(Ze); ) ;
                  mr.add(Ze), Et[Ne] = Ze, Qt[Ht]++, Oi = !0, (y = y === null ? {} : y)[Ze] = Ht;
                } else Qt[Ht] = 1, Et[Ne] = Ht;
                mr.add(Ht);
              }
              Oi && console.warn("Duplicate headers found and renamed."), w = !0;
            }
            return { data: H, errors: j, meta: { delimiter: p, linebreak: m, aborted: q, truncated: !!dt, cursor: st + ($ || 0), renamedHeaders: y } };
          }
          function Ut() {
            A(gt()), H = [], j = [];
          }
        }, this.abort = function() {
          q = !0;
        }, this.getCharIndex = function() {
          return T;
        };
      }
      function S(d) {
        var p = d.data, m = a[p.workerId], x = !1;
        if (p.error) m.userError(p.error, p.file);
        else if (p.results && p.results.data) {
          var A = { abort: function() {
            x = !0, N(p.workerId, { data: [], errors: [], meta: { aborted: !0 } });
          }, pause: C, resume: C };
          if (D(m.userStep)) {
            for (var I = 0; I < p.results.data.length && (m.userStep({ data: p.results.data[I], errors: p.results.errors, meta: p.results.meta }, A), !x); I++) ;
            delete p.results;
          } else D(m.userChunk) && (m.userChunk(p.results, A, p.file), delete p.results);
        }
        p.finished && !x && N(p.workerId, p.results);
      }
      function N(d, p) {
        var m = a[d];
        D(m.userComplete) && m.userComplete(p), m.terminate(), delete a[d];
      }
      function C() {
        throw new Error("Not implemented.");
      }
      function z(d) {
        if (typeof d != "object" || d === null) return d;
        var p, m = Array.isArray(d) ? [] : {};
        for (p in d) m[p] = z(d[p]);
        return m;
      }
      function L(d, p) {
        return function() {
          d.apply(p, arguments);
        };
      }
      function D(d) {
        return typeof d == "function";
      }
      return u.parse = function(d, p) {
        var m = (p = p || {}).dynamicTyping || !1;
        if (D(m) && (p.dynamicTypingFunction = m, m = {}), p.dynamicTyping = m, p.transform = !!D(p.transform) && p.transform, !p.worker || !u.WORKERS_SUPPORTED) return m = null, u.NODE_STREAM_INPUT, typeof d == "string" ? (d = ((x) => x.charCodeAt(0) !== 65279 ? x : x.slice(1))(d), m = new (p.download ? c : v)(p)) : d.readable === !0 && D(d.read) && D(d.on) ? m = new g(p) : (r.File && d instanceof File || d instanceof Object) && (m = new h(p)), m.stream(d);
        (m = (() => {
          var x;
          return !!u.WORKERS_SUPPORTED && (x = (() => {
            var A = r.URL || r.webkitURL || null, I = n.toString();
            return u.BLOB_URL || (u.BLOB_URL = A.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ", "(", I, ")();"], { type: "text/javascript" })));
          })(), (x = new r.Worker(x)).onmessage = S, x.id = f++, a[x.id] = x);
        })()).userStep = p.step, m.userChunk = p.chunk, m.userComplete = p.complete, m.userError = p.error, p.step = D(p.step), p.chunk = D(p.chunk), p.complete = D(p.complete), p.error = D(p.error), delete p.worker, m.postMessage({ input: d, config: p, workerId: m.id });
      }, u.unparse = function(d, p) {
        var m = !1, x = !0, A = ",", I = `\r
`, _ = '"', y = _ + _, w = !1, E = null, M = !1, T = ((() => {
          if (typeof p == "object") {
            if (typeof p.delimiter != "string" || u.BAD_DELIMITERS.filter(function($) {
              return p.delimiter.indexOf($) !== -1;
            }).length || (A = p.delimiter), typeof p.quotes != "boolean" && typeof p.quotes != "function" && !Array.isArray(p.quotes) || (m = p.quotes), typeof p.skipEmptyLines != "boolean" && typeof p.skipEmptyLines != "string" || (w = p.skipEmptyLines), typeof p.newline == "string" && (I = p.newline), typeof p.quoteChar == "string" && (_ = p.quoteChar), typeof p.header == "boolean" && (x = p.header), Array.isArray(p.columns)) {
              if (p.columns.length === 0) throw new Error("Option columns is empty");
              E = p.columns;
            }
            p.escapeChar !== void 0 && (y = p.escapeChar + _), p.escapeFormulae instanceof RegExp ? M = p.escapeFormulae : typeof p.escapeFormulae == "boolean" && p.escapeFormulae && (M = /^[=+\-@\t\r].*$/);
          }
        })(), new RegExp(b(_), "g"));
        if (typeof d == "string" && (d = JSON.parse(d)), Array.isArray(d)) {
          if (!d.length || Array.isArray(d[0])) return q(null, d, w);
          if (typeof d[0] == "object") return q(E || Object.keys(d[0]), d, w);
        } else if (typeof d == "object") return typeof d.data == "string" && (d.data = JSON.parse(d.data)), Array.isArray(d.data) && (d.fields || (d.fields = d.meta && d.meta.fields || E), d.fields || (d.fields = Array.isArray(d.data[0]) ? d.fields : typeof d.data[0] == "object" ? Object.keys(d.data[0]) : []), Array.isArray(d.data[0]) || typeof d.data[0] == "object" || (d.data = [d.data])), q(d.fields || [], d.data || [], w);
        throw new Error("Unable to serialize unrecognized input");
        function q($, P, V) {
          var X = "", J = (typeof $ == "string" && ($ = JSON.parse($)), typeof P == "string" && (P = JSON.parse(P)), Array.isArray($) && 0 < $.length), et = !Array.isArray(P[0]);
          if (J && x) {
            for (var F = 0; F < $.length; F++) 0 < F && (X += A), X += O($[F], F);
            0 < P.length && (X += I);
          }
          for (var H = 0; H < P.length; H++) {
            var j = (J ? $ : P[H]).length, U = !1, st = J ? Object.keys(P[H]).length === 0 : P[H].length === 0;
            if (V && !J && (U = V === "greedy" ? P[H].join("").trim() === "" : P[H].length === 1 && P[H][0].length === 0), V === "greedy" && J) {
              for (var pt = [], tt = 0; tt < j; tt++) {
                var nt = et ? $[tt] : tt;
                pt.push(P[H][nt]);
              }
              U = pt.join("").trim() === "";
            }
            if (!U) {
              for (var W = 0; W < j; W++) {
                0 < W && !st && (X += A);
                var $t = J && et ? $[W] : W;
                X += O(P[H][$t], W);
              }
              H < P.length - 1 && (!V || 0 < j && !st) && (X += I);
            }
          }
          return X;
        }
        function O($, P) {
          var V, X;
          return $ == null ? "" : $.constructor === Date ? JSON.stringify($).slice(1, 25) : (X = !1, M && typeof $ == "string" && M.test($) && ($ = "'" + $, X = !0), V = $.toString().replace(T, y), (X = X || m === !0 || typeof m == "function" && m($, P) || Array.isArray(m) && m[P] || ((J, et) => {
            for (var F = 0; F < et.length; F++) if (-1 < J.indexOf(et[F])) return !0;
            return !1;
          })(V, u.BAD_DELIMITERS) || -1 < V.indexOf(A) || V.charAt(0) === " " || V.charAt(V.length - 1) === " ") ? _ + V + _ : V);
        }
      }, u.RECORD_SEP = "", u.UNIT_SEP = "", u.BYTE_ORDER_MARK = "\uFEFF", u.BAD_DELIMITERS = ["\r", `
`, '"', u.BYTE_ORDER_MARK], u.WORKERS_SUPPORTED = !o && !!r.Worker, u.NODE_STREAM_INPUT = 1, u.LocalChunkSize = 10485760, u.RemoteChunkSize = 5242880, u.DefaultDelimiter = ",", u.Parser = R, u.ParserHandle = k, u.NetworkStreamer = c, u.FileStreamer = h, u.StringStreamer = v, u.ReadableStreamStreamer = g, r.jQuery && ((i = r.jQuery).fn.parse = function(d) {
        var p = d.config || {}, m = [];
        return this.each(function(I) {
          if (!(i(this).prop("tagName").toUpperCase() === "INPUT" && i(this).attr("type").toLowerCase() === "file" && r.FileReader) || !this.files || this.files.length === 0) return !0;
          for (var _ = 0; _ < this.files.length; _++) m.push({ file: this.files[_], inputElem: this, instanceConfig: i.extend({}, p) });
        }), x(), this;
        function x() {
          if (m.length === 0) D(d.complete) && d.complete();
          else {
            var I, _, y, w, E = m[0];
            if (D(d.before)) {
              var M = d.before(E.file, E.inputElem);
              if (typeof M == "object") {
                if (M.action === "abort") return I = "AbortError", _ = E.file, y = E.inputElem, w = M.reason, void (D(d.error) && d.error({ name: I }, _, y, w));
                if (M.action === "skip") return void A();
                typeof M.config == "object" && (E.instanceConfig = i.extend(E.instanceConfig, M.config));
              } else if (M === "skip") return void A();
            }
            var T = E.instanceConfig.complete;
            E.instanceConfig.complete = function(q) {
              D(T) && T(q, E.file, E.inputElem), A();
            }, u.parse(E.file, E.instanceConfig);
          }
        }
        function A() {
          m.splice(0, 1), x();
        }
      }), s && (r.onmessage = function(d) {
        d = d.data, u.WORKER_ID === void 0 && d && (u.WORKER_ID = d.workerId), typeof d.input == "string" ? r.postMessage({ workerId: u.WORKER_ID, results: u.parse(d.input, d.config), finished: !0 }) : (r.File && d.input instanceof File || d.input instanceof Object) && (d = u.parse(d.input, d.config)) && r.postMessage({ workerId: u.WORKER_ID, results: d, finished: !0 });
      }), (c.prototype = Object.create(l.prototype)).constructor = c, (h.prototype = Object.create(l.prototype)).constructor = h, (v.prototype = Object.create(v.prototype)).constructor = v, (g.prototype = Object.create(l.prototype)).constructor = g, u;
    });
  })($n)), $n.exports;
}
var Iu = Nu();
const ds = /* @__PURE__ */ Mu(Iu);
class Ee {
  constructor() {
    this._partials = new Float64Array(32), this._n = 0;
  }
  add(e) {
    const n = this._partials;
    let r = 0;
    for (let i = 0; i < this._n && i < 32; i++) {
      const o = n[i], s = e + o, a = Math.abs(e) < Math.abs(o) ? e - (s - o) : o - (s - e);
      a && (n[r++] = a), e = s;
    }
    return n[r] = e, this._n = r + 1, this;
  }
  valueOf() {
    const e = this._partials;
    let n = this._n, r, i, o, s = 0;
    if (n > 0) {
      for (s = e[--n]; n > 0 && (r = s, i = e[--n], s = r + i, o = i - (s - r), !o); )
        ;
      n > 0 && (o < 0 && e[n - 1] < 0 || o > 0 && e[n - 1] > 0) && (i = o * 2, r = s + i, i == r - s && (s = r));
    }
    return s;
  }
}
function* Cu(t) {
  for (const e of t)
    yield* e;
}
function vs(t) {
  return Array.from(Cu(t));
}
var Ou = { value: () => {
} };
function Ei() {
  for (var t = 0, e = arguments.length, n = {}, r; t < e; ++t) {
    if (!(r = arguments[t] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new Ln(n);
}
function Ln(t) {
  this._ = t;
}
function Pu(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var r = "", i = n.indexOf(".");
    if (i >= 0 && (r = n.slice(i + 1), n = n.slice(0, i)), n && !e.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
Ln.prototype = Ei.prototype = {
  constructor: Ln,
  on: function(t, e) {
    var n = this._, r = Pu(t + "", n), i, o = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++o < s; ) if ((i = (t = r[o]).type) && (i = Du(n[i], t.name))) return i;
      return;
    }
    if (e != null && typeof e != "function") throw new Error("invalid callback: " + e);
    for (; ++o < s; )
      if (i = (t = r[o]).type) n[i] = Ki(n[i], t.name, e);
      else if (e == null) for (i in n) n[i] = Ki(n[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var n in e) t[n] = e[n].slice();
    return new Ln(t);
  },
  call: function(t, e) {
    if ((i = arguments.length - 2) > 0) for (var n = new Array(i), r = 0, i, o; r < i; ++r) n[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (o = this._[t], r = 0, i = o.length; r < i; ++r) o[r].value.apply(e, n);
  },
  apply: function(t, e, n) {
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, o = r.length; i < o; ++i) r[i].value.apply(e, n);
  }
};
function Du(t, e) {
  for (var n = 0, r = t.length, i; n < r; ++n)
    if ((i = t[n]).name === e)
      return i.value;
}
function Ki(t, e, n) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === e) {
      t[r] = Ou, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return n != null && t.push({ name: e, value: n }), t;
}
var Lr = "http://www.w3.org/1999/xhtml";
const Gi = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Lr,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function vr(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), Gi.hasOwnProperty(e) ? { space: Gi[e], local: t } : t;
}
function $u(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === Lr && e.documentElement.namespaceURI === Lr ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function Lu(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function _s(t) {
  var e = vr(t);
  return (e.local ? Lu : $u)(e);
}
function zu() {
}
function bi(t) {
  return t == null ? zu : function() {
    return this.querySelector(t);
  };
}
function qu(t) {
  typeof t != "function" && (t = bi(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var o = e[i], s = o.length, a = r[i] = new Array(s), f, u, l = 0; l < s; ++l)
      (f = o[l]) && (u = t.call(f, f.__data__, l, o)) && ("__data__" in f && (u.__data__ = f.__data__), a[l] = u);
  return new Mt(r, this._parents);
}
function Fu(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function Uu() {
  return [];
}
function gs(t) {
  return t == null ? Uu : function() {
    return this.querySelectorAll(t);
  };
}
function Hu(t) {
  return function() {
    return Fu(t.apply(this, arguments));
  };
}
function Bu(t) {
  typeof t == "function" ? t = Hu(t) : t = gs(t);
  for (var e = this._groups, n = e.length, r = [], i = [], o = 0; o < n; ++o)
    for (var s = e[o], a = s.length, f, u = 0; u < a; ++u)
      (f = s[u]) && (r.push(t.call(f, f.__data__, u, s)), i.push(f));
  return new Mt(r, i);
}
function ms(t) {
  return function() {
    return this.matches(t);
  };
}
function ys(t) {
  return function(e) {
    return e.matches(t);
  };
}
var Vu = Array.prototype.find;
function Xu(t) {
  return function() {
    return Vu.call(this.children, t);
  };
}
function Yu() {
  return this.firstElementChild;
}
function Wu(t) {
  return this.select(t == null ? Yu : Xu(typeof t == "function" ? t : ys(t)));
}
var Ku = Array.prototype.filter;
function Gu() {
  return Array.from(this.children);
}
function Zu(t) {
  return function() {
    return Ku.call(this.children, t);
  };
}
function Qu(t) {
  return this.selectAll(t == null ? Gu : Zu(typeof t == "function" ? t : ys(t)));
}
function Ju(t) {
  typeof t != "function" && (t = ms(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var o = e[i], s = o.length, a = r[i] = [], f, u = 0; u < s; ++u)
      (f = o[u]) && t.call(f, f.__data__, u, o) && a.push(f);
  return new Mt(r, this._parents);
}
function ws(t) {
  return new Array(t.length);
}
function ju() {
  return new Mt(this._enter || this._groups.map(ws), this._parents);
}
function Qn(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
Qn.prototype = {
  constructor: Qn,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, e) {
    return this._parent.insertBefore(t, e);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function tl(t) {
  return function() {
    return t;
  };
}
function el(t, e, n, r, i, o) {
  for (var s = 0, a, f = e.length, u = o.length; s < u; ++s)
    (a = e[s]) ? (a.__data__ = o[s], r[s] = a) : n[s] = new Qn(t, o[s]);
  for (; s < f; ++s)
    (a = e[s]) && (i[s] = a);
}
function nl(t, e, n, r, i, o, s) {
  var a, f, u = /* @__PURE__ */ new Map(), l = e.length, c = o.length, h = new Array(l), v;
  for (a = 0; a < l; ++a)
    (f = e[a]) && (h[a] = v = s.call(f, f.__data__, a, e) + "", u.has(v) ? i[a] = f : u.set(v, f));
  for (a = 0; a < c; ++a)
    v = s.call(t, o[a], a, o) + "", (f = u.get(v)) ? (r[a] = f, f.__data__ = o[a], u.delete(v)) : n[a] = new Qn(t, o[a]);
  for (a = 0; a < l; ++a)
    (f = e[a]) && u.get(h[a]) === f && (i[a] = f);
}
function rl(t) {
  return t.__data__;
}
function il(t, e) {
  if (!arguments.length) return Array.from(this, rl);
  var n = e ? nl : el, r = this._parents, i = this._groups;
  typeof t != "function" && (t = tl(t));
  for (var o = i.length, s = new Array(o), a = new Array(o), f = new Array(o), u = 0; u < o; ++u) {
    var l = r[u], c = i[u], h = c.length, v = ol(t.call(l, l && l.__data__, u, r)), g = v.length, k = a[u] = new Array(g), b = s[u] = new Array(g), R = f[u] = new Array(h);
    n(l, c, k, b, R, v, e);
    for (var S = 0, N = 0, C, z; S < g; ++S)
      if (C = k[S]) {
        for (S >= N && (N = S + 1); !(z = b[N]) && ++N < g; ) ;
        C._next = z || null;
      }
  }
  return s = new Mt(s, r), s._enter = a, s._exit = f, s;
}
function ol(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function sl() {
  return new Mt(this._exit || this._groups.map(ws), this._parents);
}
function al(t, e, n) {
  var r = this.enter(), i = this, o = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), e != null && (i = e(i), i && (i = i.selection())), n == null ? o.remove() : n(o), r && i ? r.merge(i).order() : i;
}
function ul(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, r = e._groups, i = n.length, o = r.length, s = Math.min(i, o), a = new Array(i), f = 0; f < s; ++f)
    for (var u = n[f], l = r[f], c = u.length, h = a[f] = new Array(c), v, g = 0; g < c; ++g)
      (v = u[g] || l[g]) && (h[g] = v);
  for (; f < i; ++f)
    a[f] = n[f];
  return new Mt(a, this._parents);
}
function ll() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var r = t[e], i = r.length - 1, o = r[i], s; --i >= 0; )
      (s = r[i]) && (o && s.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(s, o), o = s);
  return this;
}
function fl(t) {
  t || (t = cl);
  function e(c, h) {
    return c && h ? t(c.__data__, h.__data__) : !c - !h;
  }
  for (var n = this._groups, r = n.length, i = new Array(r), o = 0; o < r; ++o) {
    for (var s = n[o], a = s.length, f = i[o] = new Array(a), u, l = 0; l < a; ++l)
      (u = s[l]) && (f[l] = u);
    f.sort(e);
  }
  return new Mt(i, this._parents).order();
}
function cl(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function hl() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function pl() {
  return Array.from(this);
}
function dl() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, o = r.length; i < o; ++i) {
      var s = r[i];
      if (s) return s;
    }
  return null;
}
function vl() {
  let t = 0;
  for (const e of this) ++t;
  return t;
}
function _l() {
  return !this.node();
}
function gl(t) {
  for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
    for (var i = e[n], o = 0, s = i.length, a; o < s; ++o)
      (a = i[o]) && t.call(a, a.__data__, o, i);
  return this;
}
function ml(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function yl(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function wl(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function xl(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function El(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function bl(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function Sl(t, e) {
  var n = vr(t);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((e == null ? n.local ? yl : ml : typeof e == "function" ? n.local ? bl : El : n.local ? xl : wl)(n, e));
}
function xs(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function kl(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Rl(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function Al(t, e, n) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, n);
  };
}
function Ml(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? kl : typeof e == "function" ? Al : Rl)(t, e, n ?? "")) : Ue(this.node(), t);
}
function Ue(t, e) {
  return t.style.getPropertyValue(e) || xs(t).getComputedStyle(t, null).getPropertyValue(e);
}
function Tl(t) {
  return function() {
    delete this[t];
  };
}
function Nl(t, e) {
  return function() {
    this[t] = e;
  };
}
function Il(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function Cl(t, e) {
  return arguments.length > 1 ? this.each((e == null ? Tl : typeof e == "function" ? Il : Nl)(t, e)) : this.node()[t];
}
function Es(t) {
  return t.trim().split(/^|\s+/);
}
function Si(t) {
  return t.classList || new bs(t);
}
function bs(t) {
  this._node = t, this._names = Es(t.getAttribute("class") || "");
}
bs.prototype = {
  add: function(t) {
    var e = this._names.indexOf(t);
    e < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var e = this._names.indexOf(t);
    e >= 0 && (this._names.splice(e, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function Ss(t, e) {
  for (var n = Si(t), r = -1, i = e.length; ++r < i; ) n.add(e[r]);
}
function ks(t, e) {
  for (var n = Si(t), r = -1, i = e.length; ++r < i; ) n.remove(e[r]);
}
function Ol(t) {
  return function() {
    Ss(this, t);
  };
}
function Pl(t) {
  return function() {
    ks(this, t);
  };
}
function Dl(t, e) {
  return function() {
    (e.apply(this, arguments) ? Ss : ks)(this, t);
  };
}
function $l(t, e) {
  var n = Es(t + "");
  if (arguments.length < 2) {
    for (var r = Si(this.node()), i = -1, o = n.length; ++i < o; ) if (!r.contains(n[i])) return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? Dl : e ? Ol : Pl)(n, e));
}
function Ll() {
  this.textContent = "";
}
function zl(t) {
  return function() {
    this.textContent = t;
  };
}
function ql(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function Fl(t) {
  return arguments.length ? this.each(t == null ? Ll : (typeof t == "function" ? ql : zl)(t)) : this.node().textContent;
}
function Ul() {
  this.innerHTML = "";
}
function Hl(t) {
  return function() {
    this.innerHTML = t;
  };
}
function Bl(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function Vl(t) {
  return arguments.length ? this.each(t == null ? Ul : (typeof t == "function" ? Bl : Hl)(t)) : this.node().innerHTML;
}
function Xl() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Yl() {
  return this.each(Xl);
}
function Wl() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Kl() {
  return this.each(Wl);
}
function Gl(t) {
  var e = typeof t == "function" ? t : _s(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function Zl() {
  return null;
}
function Ql(t, e) {
  var n = typeof t == "function" ? t : _s(t), r = e == null ? Zl : typeof e == "function" ? e : bi(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Jl() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function jl() {
  return this.each(Jl);
}
function tf() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function ef() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function nf(t) {
  return this.select(t ? ef : tf);
}
function rf(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function of(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function sf(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", r = e.indexOf(".");
    return r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: n };
  });
}
function af(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, r = -1, i = e.length, o; n < i; ++n)
        o = e[n], (!t.type || o.type === t.type) && o.name === t.name ? this.removeEventListener(o.type, o.listener, o.options) : e[++r] = o;
      ++r ? e.length = r : delete this.__on;
    }
  };
}
function uf(t, e, n) {
  return function() {
    var r = this.__on, i, o = of(e);
    if (r) {
      for (var s = 0, a = r.length; s < a; ++s)
        if ((i = r[s]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = o, i.options = n), i.value = e;
          return;
        }
    }
    this.addEventListener(t.type, o, n), i = { type: t.type, name: t.name, value: e, listener: o, options: n }, r ? r.push(i) : this.__on = [i];
  };
}
function lf(t, e, n) {
  var r = sf(t + ""), i, o = r.length, s;
  if (arguments.length < 2) {
    var a = this.node().__on;
    if (a) {
      for (var f = 0, u = a.length, l; f < u; ++f)
        for (i = 0, l = a[f]; i < o; ++i)
          if ((s = r[i]).type === l.type && s.name === l.name)
            return l.value;
    }
    return;
  }
  for (a = e ? uf : af, i = 0; i < o; ++i) this.each(a(r[i], e, n));
  return this;
}
function Rs(t, e, n) {
  var r = xs(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(e, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(e, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(e, !1, !1)), t.dispatchEvent(i);
}
function ff(t, e) {
  return function() {
    return Rs(this, t, e);
  };
}
function cf(t, e) {
  return function() {
    return Rs(this, t, e.apply(this, arguments));
  };
}
function hf(t, e) {
  return this.each((typeof e == "function" ? cf : ff)(t, e));
}
function* pf() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, o = r.length, s; i < o; ++i)
      (s = r[i]) && (yield s);
}
var As = [null];
function Mt(t, e) {
  this._groups = t, this._parents = e;
}
function bn() {
  return new Mt([[document.documentElement]], As);
}
function df() {
  return this;
}
Mt.prototype = bn.prototype = {
  constructor: Mt,
  select: qu,
  selectAll: Bu,
  selectChild: Wu,
  selectChildren: Qu,
  filter: Ju,
  data: il,
  enter: ju,
  exit: sl,
  join: al,
  merge: ul,
  selection: df,
  order: ll,
  sort: fl,
  call: hl,
  nodes: pl,
  node: dl,
  size: vl,
  empty: _l,
  each: gl,
  attr: Sl,
  style: Ml,
  property: Cl,
  classed: $l,
  text: Fl,
  html: Vl,
  raise: Yl,
  lower: Kl,
  append: Gl,
  insert: Ql,
  remove: jl,
  clone: nf,
  datum: rf,
  on: lf,
  dispatch: hf,
  [Symbol.iterator]: pf
};
function wt(t) {
  return typeof t == "string" ? new Mt([[document.querySelector(t)]], [document.documentElement]) : new Mt([[t]], As);
}
function vf(t) {
  let e;
  for (; e = t.sourceEvent; ) t = e;
  return t;
}
function de(t, e) {
  if (t = vf(t), e === void 0 && (e = t.currentTarget), e) {
    var n = e.ownerSVGElement || e;
    if (n.createSVGPoint) {
      var r = n.createSVGPoint();
      return r.x = t.clientX, r.y = t.clientY, r = r.matrixTransform(e.getScreenCTM().inverse()), [r.x, r.y];
    }
    if (e.getBoundingClientRect) {
      var i = e.getBoundingClientRect();
      return [t.clientX - i.left - e.clientLeft, t.clientY - i.top - e.clientTop];
    }
  }
  return [t.pageX, t.pageY];
}
const zr = { capture: !0, passive: !1 };
function qr(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function _f(t) {
  var e = t.document.documentElement, n = wt(t).on("dragstart.drag", qr, zr);
  "onselectstart" in e ? n.on("selectstart.drag", qr, zr) : (e.__noselect = e.style.MozUserSelect, e.style.MozUserSelect = "none");
}
function gf(t, e) {
  var n = t.document.documentElement, r = wt(t).on("dragstart.drag", null);
  e && (r.on("click.drag", qr, zr), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
function ki(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function Ms(t, e) {
  var n = Object.create(t.prototype);
  for (var r in e) n[r] = e[r];
  return n;
}
function Sn() {
}
var hn = 0.7, Jn = 1 / hn, ze = "\\s*([+-]?\\d+)\\s*", pn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Wt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", mf = /^#([0-9a-f]{3,8})$/, yf = new RegExp(`^rgb\\(${ze},${ze},${ze}\\)$`), wf = new RegExp(`^rgb\\(${Wt},${Wt},${Wt}\\)$`), xf = new RegExp(`^rgba\\(${ze},${ze},${ze},${pn}\\)$`), Ef = new RegExp(`^rgba\\(${Wt},${Wt},${Wt},${pn}\\)$`), bf = new RegExp(`^hsl\\(${pn},${Wt},${Wt}\\)$`), Sf = new RegExp(`^hsla\\(${pn},${Wt},${Wt},${pn}\\)$`), Zi = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
ki(Sn, dn, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Qi,
  // Deprecated! Use color.formatHex.
  formatHex: Qi,
  formatHex8: kf,
  formatHsl: Rf,
  formatRgb: Ji,
  toString: Ji
});
function Qi() {
  return this.rgb().formatHex();
}
function kf() {
  return this.rgb().formatHex8();
}
function Rf() {
  return Ts(this).formatHsl();
}
function Ji() {
  return this.rgb().formatRgb();
}
function dn(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = mf.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? ji(e) : n === 3 ? new bt(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? Rn(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? Rn(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = yf.exec(t)) ? new bt(e[1], e[2], e[3], 1) : (e = wf.exec(t)) ? new bt(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = xf.exec(t)) ? Rn(e[1], e[2], e[3], e[4]) : (e = Ef.exec(t)) ? Rn(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = bf.exec(t)) ? no(e[1], e[2] / 100, e[3] / 100, 1) : (e = Sf.exec(t)) ? no(e[1], e[2] / 100, e[3] / 100, e[4]) : Zi.hasOwnProperty(t) ? ji(Zi[t]) : t === "transparent" ? new bt(NaN, NaN, NaN, 0) : null;
}
function ji(t) {
  return new bt(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Rn(t, e, n, r) {
  return r <= 0 && (t = e = n = NaN), new bt(t, e, n, r);
}
function Af(t) {
  return t instanceof Sn || (t = dn(t)), t ? (t = t.rgb(), new bt(t.r, t.g, t.b, t.opacity)) : new bt();
}
function Fr(t, e, n, r) {
  return arguments.length === 1 ? Af(t) : new bt(t, e, n, r ?? 1);
}
function bt(t, e, n, r) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
}
ki(bt, Fr, Ms(Sn, {
  brighter(t) {
    return t = t == null ? Jn : Math.pow(Jn, t), new bt(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? hn : Math.pow(hn, t), new bt(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new bt(xe(this.r), xe(this.g), xe(this.b), jn(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: to,
  // Deprecated! Use color.formatHex.
  formatHex: to,
  formatHex8: Mf,
  formatRgb: eo,
  toString: eo
}));
function to() {
  return `#${_e(this.r)}${_e(this.g)}${_e(this.b)}`;
}
function Mf() {
  return `#${_e(this.r)}${_e(this.g)}${_e(this.b)}${_e((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function eo() {
  const t = jn(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${xe(this.r)}, ${xe(this.g)}, ${xe(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function jn(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function xe(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function _e(t) {
  return t = xe(t), (t < 16 ? "0" : "") + t.toString(16);
}
function no(t, e, n, r) {
  return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new Lt(t, e, n, r);
}
function Ts(t) {
  if (t instanceof Lt) return new Lt(t.h, t.s, t.l, t.opacity);
  if (t instanceof Sn || (t = dn(t)), !t) return new Lt();
  if (t instanceof Lt) return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, r = t.b / 255, i = Math.min(e, n, r), o = Math.max(e, n, r), s = NaN, a = o - i, f = (o + i) / 2;
  return a ? (e === o ? s = (n - r) / a + (n < r) * 6 : n === o ? s = (r - e) / a + 2 : s = (e - n) / a + 4, a /= f < 0.5 ? o + i : 2 - o - i, s *= 60) : a = f > 0 && f < 1 ? 0 : s, new Lt(s, a, f, t.opacity);
}
function Tf(t, e, n, r) {
  return arguments.length === 1 ? Ts(t) : new Lt(t, e, n, r ?? 1);
}
function Lt(t, e, n, r) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
}
ki(Lt, Tf, Ms(Sn, {
  brighter(t) {
    return t = t == null ? Jn : Math.pow(Jn, t), new Lt(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? hn : Math.pow(hn, t), new Lt(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * e, i = 2 * n - r;
    return new bt(
      br(t >= 240 ? t - 240 : t + 120, i, r),
      br(t, i, r),
      br(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new Lt(ro(this.h), An(this.s), An(this.l), jn(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = jn(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${ro(this.h)}, ${An(this.s) * 100}%, ${An(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function ro(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function An(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function br(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const Ns = (t) => () => t;
function Nf(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function If(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(r) {
    return Math.pow(t + r * e, n);
  };
}
function Cf(t) {
  return (t = +t) == 1 ? Is : function(e, n) {
    return n - e ? If(e, n, t) : Ns(isNaN(e) ? n : e);
  };
}
function Is(t, e) {
  var n = e - t;
  return n ? Nf(t, n) : Ns(isNaN(t) ? e : t);
}
const io = (function t(e) {
  var n = Cf(e);
  function r(i, o) {
    var s = n((i = Fr(i)).r, (o = Fr(o)).r), a = n(i.g, o.g), f = n(i.b, o.b), u = Is(i.opacity, o.opacity);
    return function(l) {
      return i.r = s(l), i.g = a(l), i.b = f(l), i.opacity = u(l), i + "";
    };
  }
  return r.gamma = t, r;
})(1);
function le(t, e) {
  return t = +t, e = +e, function(n) {
    return t * (1 - n) + e * n;
  };
}
var Ur = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Sr = new RegExp(Ur.source, "g");
function Of(t) {
  return function() {
    return t;
  };
}
function Pf(t) {
  return function(e) {
    return t(e) + "";
  };
}
function Df(t, e) {
  var n = Ur.lastIndex = Sr.lastIndex = 0, r, i, o, s = -1, a = [], f = [];
  for (t = t + "", e = e + ""; (r = Ur.exec(t)) && (i = Sr.exec(e)); )
    (o = i.index) > n && (o = e.slice(n, o), a[s] ? a[s] += o : a[++s] = o), (r = r[0]) === (i = i[0]) ? a[s] ? a[s] += i : a[++s] = i : (a[++s] = null, f.push({ i: s, x: le(r, i) })), n = Sr.lastIndex;
  return n < e.length && (o = e.slice(n), a[s] ? a[s] += o : a[++s] = o), a.length < 2 ? f[0] ? Pf(f[0].x) : Of(e) : (e = f.length, function(u) {
    for (var l = 0, c; l < e; ++l) a[(c = f[l]).i] = c.x(u);
    return a.join("");
  });
}
var oo = 180 / Math.PI, Hr = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Cs(t, e, n, r, i, o) {
  var s, a, f;
  return (s = Math.sqrt(t * t + e * e)) && (t /= s, e /= s), (f = t * n + e * r) && (n -= t * f, r -= e * f), (a = Math.sqrt(n * n + r * r)) && (n /= a, r /= a, f /= a), t * r < e * n && (t = -t, e = -e, f = -f, s = -s), {
    translateX: i,
    translateY: o,
    rotate: Math.atan2(e, t) * oo,
    skewX: Math.atan(f) * oo,
    scaleX: s,
    scaleY: a
  };
}
var Mn;
function $f(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? Hr : Cs(e.a, e.b, e.c, e.d, e.e, e.f);
}
function Lf(t) {
  return t == null || (Mn || (Mn = document.createElementNS("http://www.w3.org/2000/svg", "g")), Mn.setAttribute("transform", t), !(t = Mn.transform.baseVal.consolidate())) ? Hr : (t = t.matrix, Cs(t.a, t.b, t.c, t.d, t.e, t.f));
}
function Os(t, e, n, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function o(u, l, c, h, v, g) {
    if (u !== c || l !== h) {
      var k = v.push("translate(", null, e, null, n);
      g.push({ i: k - 4, x: le(u, c) }, { i: k - 2, x: le(l, h) });
    } else (c || h) && v.push("translate(" + c + e + h + n);
  }
  function s(u, l, c, h) {
    u !== l ? (u - l > 180 ? l += 360 : l - u > 180 && (u += 360), h.push({ i: c.push(i(c) + "rotate(", null, r) - 2, x: le(u, l) })) : l && c.push(i(c) + "rotate(" + l + r);
  }
  function a(u, l, c, h) {
    u !== l ? h.push({ i: c.push(i(c) + "skewX(", null, r) - 2, x: le(u, l) }) : l && c.push(i(c) + "skewX(" + l + r);
  }
  function f(u, l, c, h, v, g) {
    if (u !== c || l !== h) {
      var k = v.push(i(v) + "scale(", null, ",", null, ")");
      g.push({ i: k - 4, x: le(u, c) }, { i: k - 2, x: le(l, h) });
    } else (c !== 1 || h !== 1) && v.push(i(v) + "scale(" + c + "," + h + ")");
  }
  return function(u, l) {
    var c = [], h = [];
    return u = t(u), l = t(l), o(u.translateX, u.translateY, l.translateX, l.translateY, c, h), s(u.rotate, l.rotate, c, h), a(u.skewX, l.skewX, c, h), f(u.scaleX, u.scaleY, l.scaleX, l.scaleY, c, h), u = l = null, function(v) {
      for (var g = -1, k = h.length, b; ++g < k; ) c[(b = h[g]).i] = b.x(v);
      return c.join("");
    };
  };
}
var zf = Os($f, "px, ", "px)", "deg)"), qf = Os(Lf, ", ", ")", ")"), Ff = 1e-12;
function so(t) {
  return ((t = Math.exp(t)) + 1 / t) / 2;
}
function Uf(t) {
  return ((t = Math.exp(t)) - 1 / t) / 2;
}
function Hf(t) {
  return ((t = Math.exp(2 * t)) - 1) / (t + 1);
}
const Bf = (function t(e, n, r) {
  function i(o, s) {
    var a = o[0], f = o[1], u = o[2], l = s[0], c = s[1], h = s[2], v = l - a, g = c - f, k = v * v + g * g, b, R;
    if (k < Ff)
      R = Math.log(h / u) / e, b = function(D) {
        return [
          a + D * v,
          f + D * g,
          u * Math.exp(e * D * R)
        ];
      };
    else {
      var S = Math.sqrt(k), N = (h * h - u * u + r * k) / (2 * u * n * S), C = (h * h - u * u - r * k) / (2 * h * n * S), z = Math.log(Math.sqrt(N * N + 1) - N), L = Math.log(Math.sqrt(C * C + 1) - C);
      R = (L - z) / e, b = function(D) {
        var d = D * R, p = so(z), m = u / (n * S) * (p * Hf(e * d + z) - Uf(z));
        return [
          a + m * v,
          f + m * g,
          u * p / so(e * d + z)
        ];
      };
    }
    return b.duration = R * 1e3 * e / Math.SQRT2, b;
  }
  return i.rho = function(o) {
    var s = Math.max(1e-3, +o), a = s * s, f = a * a;
    return t(s, a, f);
  }, i;
})(Math.SQRT2, 2, 4);
var He = 0, tn = 0, Je = 0, Ps = 1e3, tr, en, er = 0, be = 0, _r = 0, vn = typeof performance == "object" && performance.now ? performance : Date, Ds = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function Ri() {
  return be || (Ds(Vf), be = vn.now() + _r);
}
function Vf() {
  be = 0;
}
function nr() {
  this._call = this._time = this._next = null;
}
nr.prototype = $s.prototype = {
  constructor: nr,
  restart: function(t, e, n) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Ri() : +n) + (e == null ? 0 : +e), !this._next && en !== this && (en ? en._next = this : tr = this, en = this), this._call = t, this._time = n, Br();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Br());
  }
};
function $s(t, e, n) {
  var r = new nr();
  return r.restart(t, e, n), r;
}
function Xf() {
  Ri(), ++He;
  for (var t = tr, e; t; )
    (e = be - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --He;
}
function ao() {
  be = (er = vn.now()) + _r, He = tn = 0;
  try {
    Xf();
  } finally {
    He = 0, Wf(), be = 0;
  }
}
function Yf() {
  var t = vn.now(), e = t - er;
  e > Ps && (_r -= e, er = t);
}
function Wf() {
  for (var t, e = tr, n, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : tr = n);
  en = t, Br(r);
}
function Br(t) {
  if (!He) {
    tn && (tn = clearTimeout(tn));
    var e = t - be;
    e > 24 ? (t < 1 / 0 && (tn = setTimeout(ao, t - vn.now() - _r)), Je && (Je = clearInterval(Je))) : (Je || (er = vn.now(), Je = setInterval(Yf, Ps)), He = 1, Ds(ao));
  }
}
function uo(t, e, n) {
  var r = new nr();
  return e = e == null ? 0 : +e, r.restart((i) => {
    r.stop(), t(i + e);
  }, e, n), r;
}
var Kf = Ei("start", "end", "cancel", "interrupt"), Gf = [], Ls = 0, lo = 1, Vr = 2, zn = 3, fo = 4, Xr = 5, qn = 6;
function gr(t, e, n, r, i, o) {
  var s = t.__transition;
  if (!s) t.__transition = {};
  else if (n in s) return;
  Zf(t, n, {
    name: e,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: Kf,
    tween: Gf,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: Ls
  });
}
function Ai(t, e) {
  var n = qt(t, e);
  if (n.state > Ls) throw new Error("too late; already scheduled");
  return n;
}
function Zt(t, e) {
  var n = qt(t, e);
  if (n.state > zn) throw new Error("too late; already running");
  return n;
}
function qt(t, e) {
  var n = t.__transition;
  if (!n || !(n = n[e])) throw new Error("transition not found");
  return n;
}
function Zf(t, e, n) {
  var r = t.__transition, i;
  r[e] = n, n.timer = $s(o, 0, n.time);
  function o(u) {
    n.state = lo, n.timer.restart(s, n.delay, n.time), n.delay <= u && s(u - n.delay);
  }
  function s(u) {
    var l, c, h, v;
    if (n.state !== lo) return f();
    for (l in r)
      if (v = r[l], v.name === n.name) {
        if (v.state === zn) return uo(s);
        v.state === fo ? (v.state = qn, v.timer.stop(), v.on.call("interrupt", t, t.__data__, v.index, v.group), delete r[l]) : +l < e && (v.state = qn, v.timer.stop(), v.on.call("cancel", t, t.__data__, v.index, v.group), delete r[l]);
      }
    if (uo(function() {
      n.state === zn && (n.state = fo, n.timer.restart(a, n.delay, n.time), a(u));
    }), n.state = Vr, n.on.call("start", t, t.__data__, n.index, n.group), n.state === Vr) {
      for (n.state = zn, i = new Array(h = n.tween.length), l = 0, c = -1; l < h; ++l)
        (v = n.tween[l].value.call(t, t.__data__, n.index, n.group)) && (i[++c] = v);
      i.length = c + 1;
    }
  }
  function a(u) {
    for (var l = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(f), n.state = Xr, 1), c = -1, h = i.length; ++c < h; )
      i[c].call(t, l);
    n.state === Xr && (n.on.call("end", t, t.__data__, n.index, n.group), f());
  }
  function f() {
    n.state = qn, n.timer.stop(), delete r[e];
    for (var u in r) return;
    delete t.__transition;
  }
}
function Fn(t, e) {
  var n = t.__transition, r, i, o = !0, s;
  if (n) {
    e = e == null ? null : e + "";
    for (s in n) {
      if ((r = n[s]).name !== e) {
        o = !1;
        continue;
      }
      i = r.state > Vr && r.state < Xr, r.state = qn, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete n[s];
    }
    o && delete t.__transition;
  }
}
function Qf(t) {
  return this.each(function() {
    Fn(this, t);
  });
}
function Jf(t, e) {
  var n, r;
  return function() {
    var i = Zt(this, t), o = i.tween;
    if (o !== n) {
      r = n = o;
      for (var s = 0, a = r.length; s < a; ++s)
        if (r[s].name === e) {
          r = r.slice(), r.splice(s, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function jf(t, e, n) {
  var r, i;
  if (typeof n != "function") throw new Error();
  return function() {
    var o = Zt(this, t), s = o.tween;
    if (s !== r) {
      i = (r = s).slice();
      for (var a = { name: e, value: n }, f = 0, u = i.length; f < u; ++f)
        if (i[f].name === e) {
          i[f] = a;
          break;
        }
      f === u && i.push(a);
    }
    o.tween = i;
  };
}
function tc(t, e) {
  var n = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = qt(this.node(), n).tween, i = 0, o = r.length, s; i < o; ++i)
      if ((s = r[i]).name === t)
        return s.value;
    return null;
  }
  return this.each((e == null ? Jf : jf)(n, t, e));
}
function Mi(t, e, n) {
  var r = t._id;
  return t.each(function() {
    var i = Zt(this, r);
    (i.value || (i.value = {}))[e] = n.apply(this, arguments);
  }), function(i) {
    return qt(i, r).value[e];
  };
}
function zs(t, e) {
  var n;
  return (typeof e == "number" ? le : e instanceof dn ? io : (n = dn(e)) ? (e = n, io) : Df)(t, e);
}
function ec(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function nc(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function rc(t, e, n) {
  var r, i = n + "", o;
  return function() {
    var s = this.getAttribute(t);
    return s === i ? null : s === r ? o : o = e(r = s, n);
  };
}
function ic(t, e, n) {
  var r, i = n + "", o;
  return function() {
    var s = this.getAttributeNS(t.space, t.local);
    return s === i ? null : s === r ? o : o = e(r = s, n);
  };
}
function oc(t, e, n) {
  var r, i, o;
  return function() {
    var s, a = n(this), f;
    return a == null ? void this.removeAttribute(t) : (s = this.getAttribute(t), f = a + "", s === f ? null : s === r && f === i ? o : (i = f, o = e(r = s, a)));
  };
}
function sc(t, e, n) {
  var r, i, o;
  return function() {
    var s, a = n(this), f;
    return a == null ? void this.removeAttributeNS(t.space, t.local) : (s = this.getAttributeNS(t.space, t.local), f = a + "", s === f ? null : s === r && f === i ? o : (i = f, o = e(r = s, a)));
  };
}
function ac(t, e) {
  var n = vr(t), r = n === "transform" ? qf : zs;
  return this.attrTween(t, typeof e == "function" ? (n.local ? sc : oc)(n, r, Mi(this, "attr." + t, e)) : e == null ? (n.local ? nc : ec)(n) : (n.local ? ic : rc)(n, r, e));
}
function uc(t, e) {
  return function(n) {
    this.setAttribute(t, e.call(this, n));
  };
}
function lc(t, e) {
  return function(n) {
    this.setAttributeNS(t.space, t.local, e.call(this, n));
  };
}
function fc(t, e) {
  var n, r;
  function i() {
    var o = e.apply(this, arguments);
    return o !== r && (n = (r = o) && lc(t, o)), n;
  }
  return i._value = e, i;
}
function cc(t, e) {
  var n, r;
  function i() {
    var o = e.apply(this, arguments);
    return o !== r && (n = (r = o) && uc(t, o)), n;
  }
  return i._value = e, i;
}
function hc(t, e) {
  var n = "attr." + t;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (e == null) return this.tween(n, null);
  if (typeof e != "function") throw new Error();
  var r = vr(t);
  return this.tween(n, (r.local ? fc : cc)(r, e));
}
function pc(t, e) {
  return function() {
    Ai(this, t).delay = +e.apply(this, arguments);
  };
}
function dc(t, e) {
  return e = +e, function() {
    Ai(this, t).delay = e;
  };
}
function vc(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? pc : dc)(e, t)) : qt(this.node(), e).delay;
}
function _c(t, e) {
  return function() {
    Zt(this, t).duration = +e.apply(this, arguments);
  };
}
function gc(t, e) {
  return e = +e, function() {
    Zt(this, t).duration = e;
  };
}
function mc(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? _c : gc)(e, t)) : qt(this.node(), e).duration;
}
function yc(t, e) {
  if (typeof e != "function") throw new Error();
  return function() {
    Zt(this, t).ease = e;
  };
}
function wc(t) {
  var e = this._id;
  return arguments.length ? this.each(yc(e, t)) : qt(this.node(), e).ease;
}
function xc(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    Zt(this, t).ease = n;
  };
}
function Ec(t) {
  if (typeof t != "function") throw new Error();
  return this.each(xc(this._id, t));
}
function bc(t) {
  typeof t != "function" && (t = ms(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var o = e[i], s = o.length, a = r[i] = [], f, u = 0; u < s; ++u)
      (f = o[u]) && t.call(f, f.__data__, u, o) && a.push(f);
  return new re(r, this._parents, this._name, this._id);
}
function Sc(t) {
  if (t._id !== this._id) throw new Error();
  for (var e = this._groups, n = t._groups, r = e.length, i = n.length, o = Math.min(r, i), s = new Array(r), a = 0; a < o; ++a)
    for (var f = e[a], u = n[a], l = f.length, c = s[a] = new Array(l), h, v = 0; v < l; ++v)
      (h = f[v] || u[v]) && (c[v] = h);
  for (; a < r; ++a)
    s[a] = e[a];
  return new re(s, this._parents, this._name, this._id);
}
function kc(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var n = e.indexOf(".");
    return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
  });
}
function Rc(t, e, n) {
  var r, i, o = kc(e) ? Ai : Zt;
  return function() {
    var s = o(this, t), a = s.on;
    a !== r && (i = (r = a).copy()).on(e, n), s.on = i;
  };
}
function Ac(t, e) {
  var n = this._id;
  return arguments.length < 2 ? qt(this.node(), n).on.on(t) : this.each(Rc(n, t, e));
}
function Mc(t) {
  return function() {
    var e = this.parentNode;
    for (var n in this.__transition) if (+n !== t) return;
    e && e.removeChild(this);
  };
}
function Tc() {
  return this.on("end.remove", Mc(this._id));
}
function Nc(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = bi(t));
  for (var r = this._groups, i = r.length, o = new Array(i), s = 0; s < i; ++s)
    for (var a = r[s], f = a.length, u = o[s] = new Array(f), l, c, h = 0; h < f; ++h)
      (l = a[h]) && (c = t.call(l, l.__data__, h, a)) && ("__data__" in l && (c.__data__ = l.__data__), u[h] = c, gr(u[h], e, n, h, u, qt(l, n)));
  return new re(o, this._parents, e, n);
}
function Ic(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = gs(t));
  for (var r = this._groups, i = r.length, o = [], s = [], a = 0; a < i; ++a)
    for (var f = r[a], u = f.length, l, c = 0; c < u; ++c)
      if (l = f[c]) {
        for (var h = t.call(l, l.__data__, c, f), v, g = qt(l, n), k = 0, b = h.length; k < b; ++k)
          (v = h[k]) && gr(v, e, n, k, h, g);
        o.push(h), s.push(l);
      }
  return new re(o, s, e, n);
}
var Cc = bn.prototype.constructor;
function Oc() {
  return new Cc(this._groups, this._parents);
}
function Pc(t, e) {
  var n, r, i;
  return function() {
    var o = Ue(this, t), s = (this.style.removeProperty(t), Ue(this, t));
    return o === s ? null : o === n && s === r ? i : i = e(n = o, r = s);
  };
}
function qs(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Dc(t, e, n) {
  var r, i = n + "", o;
  return function() {
    var s = Ue(this, t);
    return s === i ? null : s === r ? o : o = e(r = s, n);
  };
}
function $c(t, e, n) {
  var r, i, o;
  return function() {
    var s = Ue(this, t), a = n(this), f = a + "";
    return a == null && (f = a = (this.style.removeProperty(t), Ue(this, t))), s === f ? null : s === r && f === i ? o : (i = f, o = e(r = s, a));
  };
}
function Lc(t, e) {
  var n, r, i, o = "style." + e, s = "end." + o, a;
  return function() {
    var f = Zt(this, t), u = f.on, l = f.value[o] == null ? a || (a = qs(e)) : void 0;
    (u !== n || i !== l) && (r = (n = u).copy()).on(s, i = l), f.on = r;
  };
}
function zc(t, e, n) {
  var r = (t += "") == "transform" ? zf : zs;
  return e == null ? this.styleTween(t, Pc(t, r)).on("end.style." + t, qs(t)) : typeof e == "function" ? this.styleTween(t, $c(t, r, Mi(this, "style." + t, e))).each(Lc(this._id, t)) : this.styleTween(t, Dc(t, r, e), n).on("end.style." + t, null);
}
function qc(t, e, n) {
  return function(r) {
    this.style.setProperty(t, e.call(this, r), n);
  };
}
function Fc(t, e, n) {
  var r, i;
  function o() {
    var s = e.apply(this, arguments);
    return s !== i && (r = (i = s) && qc(t, s, n)), r;
  }
  return o._value = e, o;
}
function Uc(t, e, n) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (e == null) return this.tween(r, null);
  if (typeof e != "function") throw new Error();
  return this.tween(r, Fc(t, e, n ?? ""));
}
function Hc(t) {
  return function() {
    this.textContent = t;
  };
}
function Bc(t) {
  return function() {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function Vc(t) {
  return this.tween("text", typeof t == "function" ? Bc(Mi(this, "text", t)) : Hc(t == null ? "" : t + ""));
}
function Xc(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function Yc(t) {
  var e, n;
  function r() {
    var i = t.apply(this, arguments);
    return i !== n && (e = (n = i) && Xc(i)), e;
  }
  return r._value = t, r;
}
function Wc(t) {
  var e = "text";
  if (arguments.length < 1) return (e = this.tween(e)) && e._value;
  if (t == null) return this.tween(e, null);
  if (typeof t != "function") throw new Error();
  return this.tween(e, Yc(t));
}
function Kc() {
  for (var t = this._name, e = this._id, n = Fs(), r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var s = r[o], a = s.length, f, u = 0; u < a; ++u)
      if (f = s[u]) {
        var l = qt(f, e);
        gr(f, t, n, u, s, {
          time: l.time + l.delay + l.duration,
          delay: 0,
          duration: l.duration,
          ease: l.ease
        });
      }
  return new re(r, this._parents, t, n);
}
function Gc() {
  var t, e, n = this, r = n._id, i = n.size();
  return new Promise(function(o, s) {
    var a = { value: s }, f = { value: function() {
      --i === 0 && o();
    } };
    n.each(function() {
      var u = Zt(this, r), l = u.on;
      l !== t && (e = (t = l).copy(), e._.cancel.push(a), e._.interrupt.push(a), e._.end.push(f)), u.on = e;
    }), i === 0 && o();
  });
}
var Zc = 0;
function re(t, e, n, r) {
  this._groups = t, this._parents = e, this._name = n, this._id = r;
}
function Fs() {
  return ++Zc;
}
var Jt = bn.prototype;
re.prototype = {
  constructor: re,
  select: Nc,
  selectAll: Ic,
  selectChild: Jt.selectChild,
  selectChildren: Jt.selectChildren,
  filter: bc,
  merge: Sc,
  selection: Oc,
  transition: Kc,
  call: Jt.call,
  nodes: Jt.nodes,
  node: Jt.node,
  size: Jt.size,
  empty: Jt.empty,
  each: Jt.each,
  on: Ac,
  attr: ac,
  attrTween: hc,
  style: zc,
  styleTween: Uc,
  text: Vc,
  textTween: Wc,
  remove: Tc,
  tween: tc,
  delay: vc,
  duration: mc,
  ease: wc,
  easeVarying: Ec,
  end: Gc,
  [Symbol.iterator]: Jt[Symbol.iterator]
};
function Qc(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Jc = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Qc
};
function jc(t, e) {
  for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return n;
}
function th(t) {
  var e, n;
  t instanceof re ? (e = t._id, t = t._name) : (e = Fs(), (n = Jc).time = Ri(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var s = r[o], a = s.length, f, u = 0; u < a; ++u)
      (f = s[u]) && gr(f, t, e, u, s, n || jc(f, e));
  return new re(r, this._parents, t, e);
}
bn.prototype.interrupt = Qf;
bn.prototype.transition = th;
var rt = 1e-6, K = Math.PI, St = K / 2, co = K / 4, Tt = K * 2, Rt = 180 / K, ht = K / 180, ot = Math.abs, Us = Math.atan, _n = Math.atan2, ut = Math.cos, eh = Math.exp, nh = Math.log, lt = Math.sin, rh = Math.sign || function(t) {
  return t > 0 ? 1 : t < 0 ? -1 : 0;
}, Me = Math.sqrt, ih = Math.tan;
function oh(t) {
  return t > 1 ? 0 : t < -1 ? K : Math.acos(t);
}
function gn(t) {
  return t > 1 ? St : t < -1 ? -St : Math.asin(t);
}
function Ot() {
}
function rr(t, e) {
  t && po.hasOwnProperty(t.type) && po[t.type](t, e);
}
var ho = {
  Feature: function(t, e) {
    rr(t.geometry, e);
  },
  FeatureCollection: function(t, e) {
    for (var n = t.features, r = -1, i = n.length; ++r < i; ) rr(n[r].geometry, e);
  }
}, po = {
  Sphere: function(t, e) {
    e.sphere();
  },
  Point: function(t, e) {
    t = t.coordinates, e.point(t[0], t[1], t[2]);
  },
  MultiPoint: function(t, e) {
    for (var n = t.coordinates, r = -1, i = n.length; ++r < i; ) t = n[r], e.point(t[0], t[1], t[2]);
  },
  LineString: function(t, e) {
    Yr(t.coordinates, e, 0);
  },
  MultiLineString: function(t, e) {
    for (var n = t.coordinates, r = -1, i = n.length; ++r < i; ) Yr(n[r], e, 0);
  },
  Polygon: function(t, e) {
    vo(t.coordinates, e);
  },
  MultiPolygon: function(t, e) {
    for (var n = t.coordinates, r = -1, i = n.length; ++r < i; ) vo(n[r], e);
  },
  GeometryCollection: function(t, e) {
    for (var n = t.geometries, r = -1, i = n.length; ++r < i; ) rr(n[r], e);
  }
};
function Yr(t, e, n) {
  var r = -1, i = t.length - n, o;
  for (e.lineStart(); ++r < i; ) o = t[r], e.point(o[0], o[1], o[2]);
  e.lineEnd();
}
function vo(t, e) {
  var n = -1, r = t.length;
  for (e.polygonStart(); ++n < r; ) Yr(t[n], e, 1);
  e.polygonEnd();
}
function Oe(t, e) {
  t && ho.hasOwnProperty(t.type) ? ho[t.type](t, e) : rr(t, e);
}
function Wr(t) {
  return [_n(t[1], t[0]), gn(t[2])];
}
function Be(t) {
  var e = t[0], n = t[1], r = ut(n);
  return [r * ut(e), r * lt(e), lt(n)];
}
function Tn(t, e) {
  return t[0] * e[0] + t[1] * e[1] + t[2] * e[2];
}
function ir(t, e) {
  return [t[1] * e[2] - t[2] * e[1], t[2] * e[0] - t[0] * e[2], t[0] * e[1] - t[1] * e[0]];
}
function kr(t, e) {
  t[0] += e[0], t[1] += e[1], t[2] += e[2];
}
function Nn(t, e) {
  return [t[0] * e, t[1] * e, t[2] * e];
}
function Kr(t) {
  var e = Me(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
  t[0] /= e, t[1] /= e, t[2] /= e;
}
function Gr(t, e) {
  function n(r, i) {
    return r = t(r, i), e(r[0], r[1]);
  }
  return t.invert && e.invert && (n.invert = function(r, i) {
    return r = e.invert(r, i), r && t.invert(r[0], r[1]);
  }), n;
}
function Zr(t, e) {
  return ot(t) > K && (t -= Math.round(t / Tt) * Tt), [t, e];
}
Zr.invert = Zr;
function Hs(t, e, n) {
  return (t %= Tt) ? e || n ? Gr(go(t), mo(e, n)) : go(t) : e || n ? mo(e, n) : Zr;
}
function _o(t) {
  return function(e, n) {
    return e += t, ot(e) > K && (e -= Math.round(e / Tt) * Tt), [e, n];
  };
}
function go(t) {
  var e = _o(t);
  return e.invert = _o(-t), e;
}
function mo(t, e) {
  var n = ut(t), r = lt(t), i = ut(e), o = lt(e);
  function s(a, f) {
    var u = ut(f), l = ut(a) * u, c = lt(a) * u, h = lt(f), v = h * n + l * r;
    return [
      _n(c * i - v * o, l * n - h * r),
      gn(v * i + c * o)
    ];
  }
  return s.invert = function(a, f) {
    var u = ut(f), l = ut(a) * u, c = lt(a) * u, h = lt(f), v = h * i - c * o;
    return [
      _n(c * i + h * o, l * n + v * r),
      gn(v * n - l * r)
    ];
  }, s;
}
function sh(t) {
  t = Hs(t[0] * ht, t[1] * ht, t.length > 2 ? t[2] * ht : 0);
  function e(n) {
    return n = t(n[0] * ht, n[1] * ht), n[0] *= Rt, n[1] *= Rt, n;
  }
  return e.invert = function(n) {
    return n = t.invert(n[0] * ht, n[1] * ht), n[0] *= Rt, n[1] *= Rt, n;
  }, e;
}
function ah(t, e, n, r, i, o) {
  if (n) {
    var s = ut(e), a = lt(e), f = r * n;
    i == null ? (i = e + r * Tt, o = e - f / 2) : (i = yo(s, i), o = yo(s, o), (r > 0 ? i < o : i > o) && (i += r * Tt));
    for (var u, l = i; r > 0 ? l > o : l < o; l -= f)
      u = Wr([s, -a * ut(l), -a * lt(l)]), t.point(u[0], u[1]);
  }
}
function yo(t, e) {
  e = Be(e), e[0] -= t, Kr(e);
  var n = oh(-e[1]);
  return ((-e[2] < 0 ? -n : n) + Tt - rt) % Tt;
}
function Bs() {
  var t = [], e;
  return {
    point: function(n, r, i) {
      e.push([n, r, i]);
    },
    lineStart: function() {
      t.push(e = []);
    },
    lineEnd: Ot,
    rejoin: function() {
      t.length > 1 && t.push(t.pop().concat(t.shift()));
    },
    result: function() {
      var n = t;
      return t = [], e = null, n;
    }
  };
}
function Un(t, e) {
  return ot(t[0] - e[0]) < rt && ot(t[1] - e[1]) < rt;
}
function In(t, e, n, r) {
  this.x = t, this.z = e, this.o = n, this.e = r, this.v = !1, this.n = this.p = null;
}
function Vs(t, e, n, r, i) {
  var o = [], s = [], a, f;
  if (t.forEach(function(g) {
    if (!((k = g.length - 1) <= 0)) {
      var k, b = g[0], R = g[k], S;
      if (Un(b, R)) {
        if (!b[2] && !R[2]) {
          for (i.lineStart(), a = 0; a < k; ++a) i.point((b = g[a])[0], b[1]);
          i.lineEnd();
          return;
        }
        R[0] += 2 * rt;
      }
      o.push(S = new In(b, g, null, !0)), s.push(S.o = new In(b, null, S, !1)), o.push(S = new In(R, g, null, !1)), s.push(S.o = new In(R, null, S, !0));
    }
  }), !!o.length) {
    for (s.sort(e), wo(o), wo(s), a = 0, f = s.length; a < f; ++a)
      s[a].e = n = !n;
    for (var u = o[0], l, c; ; ) {
      for (var h = u, v = !0; h.v; ) if ((h = h.n) === u) return;
      l = h.z, i.lineStart();
      do {
        if (h.v = h.o.v = !0, h.e) {
          if (v)
            for (a = 0, f = l.length; a < f; ++a) i.point((c = l[a])[0], c[1]);
          else
            r(h.x, h.n.x, 1, i);
          h = h.n;
        } else {
          if (v)
            for (l = h.p.z, a = l.length - 1; a >= 0; --a) i.point((c = l[a])[0], c[1]);
          else
            r(h.x, h.p.x, -1, i);
          h = h.p;
        }
        h = h.o, l = h.z, v = !v;
      } while (!h.v);
      i.lineEnd();
    }
  }
}
function wo(t) {
  if (e = t.length) {
    for (var e, n = 0, r = t[0], i; ++n < e; )
      r.n = i = t[n], i.p = r, r = i;
    r.n = i = t[0], i.p = r;
  }
}
function Rr(t) {
  return ot(t[0]) <= K ? t[0] : rh(t[0]) * ((ot(t[0]) + K) % Tt - K);
}
function uh(t, e) {
  var n = Rr(e), r = e[1], i = lt(r), o = [lt(n), -ut(n), 0], s = 0, a = 0, f = new Ee();
  i === 1 ? r = St + rt : i === -1 && (r = -St - rt);
  for (var u = 0, l = t.length; u < l; ++u)
    if (h = (c = t[u]).length)
      for (var c, h, v = c[h - 1], g = Rr(v), k = v[1] / 2 + co, b = lt(k), R = ut(k), S = 0; S < h; ++S, g = C, b = L, R = D, v = N) {
        var N = c[S], C = Rr(N), z = N[1] / 2 + co, L = lt(z), D = ut(z), d = C - g, p = d >= 0 ? 1 : -1, m = p * d, x = m > K, A = b * L;
        if (f.add(_n(A * p * lt(m), R * D + A * ut(m))), s += x ? d + p * Tt : d, x ^ g >= n ^ C >= n) {
          var I = ir(Be(v), Be(N));
          Kr(I);
          var _ = ir(o, I);
          Kr(_);
          var y = (x ^ d >= 0 ? -1 : 1) * gn(_[2]);
          (r > y || r === y && (I[0] || I[1])) && (a += x ^ d >= 0 ? 1 : -1);
        }
      }
  return (s < -rt || s < rt && f < -1e-12) ^ a & 1;
}
function Xs(t, e, n, r) {
  return function(i) {
    var o = e(i), s = Bs(), a = e(s), f = !1, u, l, c, h = {
      point: v,
      lineStart: k,
      lineEnd: b,
      polygonStart: function() {
        h.point = R, h.lineStart = S, h.lineEnd = N, l = [], u = [];
      },
      polygonEnd: function() {
        h.point = v, h.lineStart = k, h.lineEnd = b, l = vs(l);
        var C = uh(u, r);
        l.length ? (f || (i.polygonStart(), f = !0), Vs(l, fh, C, n, i)) : C && (f || (i.polygonStart(), f = !0), i.lineStart(), n(null, null, 1, i), i.lineEnd()), f && (i.polygonEnd(), f = !1), l = u = null;
      },
      sphere: function() {
        i.polygonStart(), i.lineStart(), n(null, null, 1, i), i.lineEnd(), i.polygonEnd();
      }
    };
    function v(C, z) {
      t(C, z) && i.point(C, z);
    }
    function g(C, z) {
      o.point(C, z);
    }
    function k() {
      h.point = g, o.lineStart();
    }
    function b() {
      h.point = v, o.lineEnd();
    }
    function R(C, z) {
      c.push([C, z]), a.point(C, z);
    }
    function S() {
      a.lineStart(), c = [];
    }
    function N() {
      R(c[0][0], c[0][1]), a.lineEnd();
      var C = a.clean(), z = s.result(), L, D = z.length, d, p, m;
      if (c.pop(), u.push(c), c = null, !!D) {
        if (C & 1) {
          if (p = z[0], (d = p.length - 1) > 0) {
            for (f || (i.polygonStart(), f = !0), i.lineStart(), L = 0; L < d; ++L) i.point((m = p[L])[0], m[1]);
            i.lineEnd();
          }
          return;
        }
        D > 1 && C & 2 && z.push(z.pop().concat(z.shift())), l.push(z.filter(lh));
      }
    }
    return h;
  };
}
function lh(t) {
  return t.length > 1;
}
function fh(t, e) {
  return ((t = t.x)[0] < 0 ? t[1] - St - rt : St - t[1]) - ((e = e.x)[0] < 0 ? e[1] - St - rt : St - e[1]);
}
const xo = Xs(
  function() {
    return !0;
  },
  ch,
  ph,
  [-K, -St]
);
function ch(t) {
  var e = NaN, n = NaN, r = NaN, i;
  return {
    lineStart: function() {
      t.lineStart(), i = 1;
    },
    point: function(o, s) {
      var a = o > 0 ? K : -K, f = ot(o - e);
      ot(f - K) < rt ? (t.point(e, n = (n + s) / 2 > 0 ? St : -St), t.point(r, n), t.lineEnd(), t.lineStart(), t.point(a, n), t.point(o, n), i = 0) : r !== a && f >= K && (ot(e - r) < rt && (e -= r * rt), ot(o - a) < rt && (o -= a * rt), n = hh(e, n, o, s), t.point(r, n), t.lineEnd(), t.lineStart(), t.point(a, n), i = 0), t.point(e = o, n = s), r = a;
    },
    lineEnd: function() {
      t.lineEnd(), e = n = NaN;
    },
    clean: function() {
      return 2 - i;
    }
  };
}
function hh(t, e, n, r) {
  var i, o, s = lt(t - n);
  return ot(s) > rt ? Us((lt(e) * (o = ut(r)) * lt(n) - lt(r) * (i = ut(e)) * lt(t)) / (i * o * s)) : (e + r) / 2;
}
function ph(t, e, n, r) {
  var i;
  if (t == null)
    i = n * St, r.point(-K, i), r.point(0, i), r.point(K, i), r.point(K, 0), r.point(K, -i), r.point(0, -i), r.point(-K, -i), r.point(-K, 0), r.point(-K, i);
  else if (ot(t[0] - e[0]) > rt) {
    var o = t[0] < e[0] ? K : -K;
    i = n * o / 2, r.point(-o, i), r.point(0, i), r.point(o, i);
  } else
    r.point(e[0], e[1]);
}
function dh(t) {
  var e = ut(t), n = 2 * ht, r = e > 0, i = ot(e) > rt;
  function o(l, c, h, v) {
    ah(v, t, n, h, l, c);
  }
  function s(l, c) {
    return ut(l) * ut(c) > e;
  }
  function a(l) {
    var c, h, v, g, k;
    return {
      lineStart: function() {
        g = v = !1, k = 1;
      },
      point: function(b, R) {
        var S = [b, R], N, C = s(b, R), z = r ? C ? 0 : u(b, R) : C ? u(b + (b < 0 ? K : -K), R) : 0;
        if (!c && (g = v = C) && l.lineStart(), C !== v && (N = f(c, S), (!N || Un(c, N) || Un(S, N)) && (S[2] = 1)), C !== v)
          k = 0, C ? (l.lineStart(), N = f(S, c), l.point(N[0], N[1])) : (N = f(c, S), l.point(N[0], N[1], 2), l.lineEnd()), c = N;
        else if (i && c && r ^ C) {
          var L;
          !(z & h) && (L = f(S, c, !0)) && (k = 0, r ? (l.lineStart(), l.point(L[0][0], L[0][1]), l.point(L[1][0], L[1][1]), l.lineEnd()) : (l.point(L[1][0], L[1][1]), l.lineEnd(), l.lineStart(), l.point(L[0][0], L[0][1], 3)));
        }
        C && (!c || !Un(c, S)) && l.point(S[0], S[1]), c = S, v = C, h = z;
      },
      lineEnd: function() {
        v && l.lineEnd(), c = null;
      },
      // Rejoin first and last segments if there were intersections and the first
      // and last points were visible.
      clean: function() {
        return k | (g && v) << 1;
      }
    };
  }
  function f(l, c, h) {
    var v = Be(l), g = Be(c), k = [1, 0, 0], b = ir(v, g), R = Tn(b, b), S = b[0], N = R - S * S;
    if (!N) return !h && l;
    var C = e * R / N, z = -e * S / N, L = ir(k, b), D = Nn(k, C), d = Nn(b, z);
    kr(D, d);
    var p = L, m = Tn(D, p), x = Tn(p, p), A = m * m - x * (Tn(D, D) - 1);
    if (!(A < 0)) {
      var I = Me(A), _ = Nn(p, (-m - I) / x);
      if (kr(_, D), _ = Wr(_), !h) return _;
      var y = l[0], w = c[0], E = l[1], M = c[1], T;
      w < y && (T = y, y = w, w = T);
      var q = w - y, O = ot(q - K) < rt, $ = O || q < rt;
      if (!O && M < E && (T = E, E = M, M = T), $ ? O ? E + M > 0 ^ _[1] < (ot(_[0] - y) < rt ? E : M) : E <= _[1] && _[1] <= M : q > K ^ (y <= _[0] && _[0] <= w)) {
        var P = Nn(p, (-m + I) / x);
        return kr(P, D), [_, Wr(P)];
      }
    }
  }
  function u(l, c) {
    var h = r ? t : K - t, v = 0;
    return l < -h ? v |= 1 : l > h && (v |= 2), c < -h ? v |= 4 : c > h && (v |= 8), v;
  }
  return Xs(s, a, o, r ? [0, -t] : [-K, t - K]);
}
function vh(t, e, n, r, i, o) {
  var s = t[0], a = t[1], f = e[0], u = e[1], l = 0, c = 1, h = f - s, v = u - a, g;
  if (g = n - s, !(!h && g > 0)) {
    if (g /= h, h < 0) {
      if (g < l) return;
      g < c && (c = g);
    } else if (h > 0) {
      if (g > c) return;
      g > l && (l = g);
    }
    if (g = i - s, !(!h && g < 0)) {
      if (g /= h, h < 0) {
        if (g > c) return;
        g > l && (l = g);
      } else if (h > 0) {
        if (g < l) return;
        g < c && (c = g);
      }
      if (g = r - a, !(!v && g > 0)) {
        if (g /= v, v < 0) {
          if (g < l) return;
          g < c && (c = g);
        } else if (v > 0) {
          if (g > c) return;
          g > l && (l = g);
        }
        if (g = o - a, !(!v && g < 0)) {
          if (g /= v, v < 0) {
            if (g > c) return;
            g > l && (l = g);
          } else if (v > 0) {
            if (g < l) return;
            g < c && (c = g);
          }
          return l > 0 && (t[0] = s + l * h, t[1] = a + l * v), c < 1 && (e[0] = s + c * h, e[1] = a + c * v), !0;
        }
      }
    }
  }
}
var nn = 1e9, Cn = -nn;
function _h(t, e, n, r) {
  function i(u, l) {
    return t <= u && u <= n && e <= l && l <= r;
  }
  function o(u, l, c, h) {
    var v = 0, g = 0;
    if (u == null || (v = s(u, c)) !== (g = s(l, c)) || f(u, l) < 0 ^ c > 0)
      do
        h.point(v === 0 || v === 3 ? t : n, v > 1 ? r : e);
      while ((v = (v + c + 4) % 4) !== g);
    else
      h.point(l[0], l[1]);
  }
  function s(u, l) {
    return ot(u[0] - t) < rt ? l > 0 ? 0 : 3 : ot(u[0] - n) < rt ? l > 0 ? 2 : 1 : ot(u[1] - e) < rt ? l > 0 ? 1 : 0 : l > 0 ? 3 : 2;
  }
  function a(u, l) {
    return f(u.x, l.x);
  }
  function f(u, l) {
    var c = s(u, 1), h = s(l, 1);
    return c !== h ? c - h : c === 0 ? l[1] - u[1] : c === 1 ? u[0] - l[0] : c === 2 ? u[1] - l[1] : l[0] - u[0];
  }
  return function(u) {
    var l = u, c = Bs(), h, v, g, k, b, R, S, N, C, z, L, D = {
      point: d,
      lineStart: A,
      lineEnd: I,
      polygonStart: m,
      polygonEnd: x
    };
    function d(y, w) {
      i(y, w) && l.point(y, w);
    }
    function p() {
      for (var y = 0, w = 0, E = v.length; w < E; ++w)
        for (var M = v[w], T = 1, q = M.length, O = M[0], $, P, V = O[0], X = O[1]; T < q; ++T)
          $ = V, P = X, O = M[T], V = O[0], X = O[1], P <= r ? X > r && (V - $) * (r - P) > (X - P) * (t - $) && ++y : X <= r && (V - $) * (r - P) < (X - P) * (t - $) && --y;
      return y;
    }
    function m() {
      l = c, h = [], v = [], L = !0;
    }
    function x() {
      var y = p(), w = L && y, E = (h = vs(h)).length;
      (w || E) && (u.polygonStart(), w && (u.lineStart(), o(null, null, 1, u), u.lineEnd()), E && Vs(h, a, y, o, u), u.polygonEnd()), l = u, h = v = g = null;
    }
    function A() {
      D.point = _, v && v.push(g = []), z = !0, C = !1, S = N = NaN;
    }
    function I() {
      h && (_(k, b), R && C && c.rejoin(), h.push(c.result())), D.point = d, C && l.lineEnd();
    }
    function _(y, w) {
      var E = i(y, w);
      if (v && g.push([y, w]), z)
        k = y, b = w, R = E, z = !1, E && (l.lineStart(), l.point(y, w));
      else if (E && C) l.point(y, w);
      else {
        var M = [S = Math.max(Cn, Math.min(nn, S)), N = Math.max(Cn, Math.min(nn, N))], T = [y = Math.max(Cn, Math.min(nn, y)), w = Math.max(Cn, Math.min(nn, w))];
        vh(M, T, t, e, n, r) ? (C || (l.lineStart(), l.point(M[0], M[1])), l.point(T[0], T[1]), E || l.lineEnd(), L = !1) : E && (l.lineStart(), l.point(y, w), L = !1);
      }
      S = y, N = w, C = E;
    }
    return D;
  };
}
const Qr = (t) => t;
var Ar = new Ee(), Jr = new Ee(), Ys, Ws, jr, ti, te = {
  point: Ot,
  lineStart: Ot,
  lineEnd: Ot,
  polygonStart: function() {
    te.lineStart = gh, te.lineEnd = yh;
  },
  polygonEnd: function() {
    te.lineStart = te.lineEnd = te.point = Ot, Ar.add(ot(Jr)), Jr = new Ee();
  },
  result: function() {
    var t = Ar / 2;
    return Ar = new Ee(), t;
  }
};
function gh() {
  te.point = mh;
}
function mh(t, e) {
  te.point = Ks, Ys = jr = t, Ws = ti = e;
}
function Ks(t, e) {
  Jr.add(ti * t - jr * e), jr = t, ti = e;
}
function yh() {
  Ks(Ys, Ws);
}
var Ve = 1 / 0, or = Ve, mn = -Ve, sr = mn, ar = {
  point: wh,
  lineStart: Ot,
  lineEnd: Ot,
  polygonStart: Ot,
  polygonEnd: Ot,
  result: function() {
    var t = [[Ve, or], [mn, sr]];
    return mn = sr = -(or = Ve = 1 / 0), t;
  }
};
function wh(t, e) {
  t < Ve && (Ve = t), t > mn && (mn = t), e < or && (or = e), e > sr && (sr = e);
}
var ei = 0, ni = 0, rn = 0, ur = 0, lr = 0, $e = 0, ri = 0, ii = 0, on = 0, Gs, Zs, Xt, Yt, Ct = {
  point: Se,
  lineStart: Eo,
  lineEnd: bo,
  polygonStart: function() {
    Ct.lineStart = bh, Ct.lineEnd = Sh;
  },
  polygonEnd: function() {
    Ct.point = Se, Ct.lineStart = Eo, Ct.lineEnd = bo;
  },
  result: function() {
    var t = on ? [ri / on, ii / on] : $e ? [ur / $e, lr / $e] : rn ? [ei / rn, ni / rn] : [NaN, NaN];
    return ei = ni = rn = ur = lr = $e = ri = ii = on = 0, t;
  }
};
function Se(t, e) {
  ei += t, ni += e, ++rn;
}
function Eo() {
  Ct.point = xh;
}
function xh(t, e) {
  Ct.point = Eh, Se(Xt = t, Yt = e);
}
function Eh(t, e) {
  var n = t - Xt, r = e - Yt, i = Me(n * n + r * r);
  ur += i * (Xt + t) / 2, lr += i * (Yt + e) / 2, $e += i, Se(Xt = t, Yt = e);
}
function bo() {
  Ct.point = Se;
}
function bh() {
  Ct.point = kh;
}
function Sh() {
  Qs(Gs, Zs);
}
function kh(t, e) {
  Ct.point = Qs, Se(Gs = Xt = t, Zs = Yt = e);
}
function Qs(t, e) {
  var n = t - Xt, r = e - Yt, i = Me(n * n + r * r);
  ur += i * (Xt + t) / 2, lr += i * (Yt + e) / 2, $e += i, i = Yt * t - Xt * e, ri += i * (Xt + t), ii += i * (Yt + e), on += i * 3, Se(Xt = t, Yt = e);
}
function Js(t) {
  this._context = t;
}
Js.prototype = {
  _radius: 4.5,
  pointRadius: function(t) {
    return this._radius = t, this;
  },
  polygonStart: function() {
    this._line = 0;
  },
  polygonEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    this._line === 0 && this._context.closePath(), this._point = NaN;
  },
  point: function(t, e) {
    switch (this._point) {
      case 0: {
        this._context.moveTo(t, e), this._point = 1;
        break;
      }
      case 1: {
        this._context.lineTo(t, e);
        break;
      }
      default: {
        this._context.moveTo(t + this._radius, e), this._context.arc(t, e, this._radius, 0, Tt);
        break;
      }
    }
  },
  result: Ot
};
var oi = new Ee(), Mr, js, ta, sn, an, yn = {
  point: Ot,
  lineStart: function() {
    yn.point = Rh;
  },
  lineEnd: function() {
    Mr && ea(js, ta), yn.point = Ot;
  },
  polygonStart: function() {
    Mr = !0;
  },
  polygonEnd: function() {
    Mr = null;
  },
  result: function() {
    var t = +oi;
    return oi = new Ee(), t;
  }
};
function Rh(t, e) {
  yn.point = ea, js = sn = t, ta = an = e;
}
function ea(t, e) {
  sn -= t, an -= e, oi.add(Me(sn * sn + an * an)), sn = t, an = e;
}
let So, fr, ko, Ro;
class Ao {
  constructor(e) {
    this._append = e == null ? na : Ah(e), this._radius = 4.5, this._ = "";
  }
  pointRadius(e) {
    return this._radius = +e, this;
  }
  polygonStart() {
    this._line = 0;
  }
  polygonEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    this._line === 0 && (this._ += "Z"), this._point = NaN;
  }
  point(e, n) {
    switch (this._point) {
      case 0: {
        this._append`M${e},${n}`, this._point = 1;
        break;
      }
      case 1: {
        this._append`L${e},${n}`;
        break;
      }
      default: {
        if (this._append`M${e},${n}`, this._radius !== ko || this._append !== fr) {
          const r = this._radius, i = this._;
          this._ = "", this._append`m0,${r}a${r},${r} 0 1,1 0,${-2 * r}a${r},${r} 0 1,1 0,${2 * r}z`, ko = r, fr = this._append, Ro = this._, this._ = i;
        }
        this._ += Ro;
        break;
      }
    }
  }
  result() {
    const e = this._;
    return this._ = "", e.length ? e : null;
  }
}
function na(t) {
  let e = 1;
  this._ += t[0];
  for (const n = t.length; e < n; ++e)
    this._ += arguments[e] + t[e];
}
function Ah(t) {
  const e = Math.floor(t);
  if (!(e >= 0)) throw new RangeError(`invalid digits: ${t}`);
  if (e > 15) return na;
  if (e !== So) {
    const n = 10 ** e;
    So = e, fr = function(i) {
      let o = 1;
      this._ += i[0];
      for (const s = i.length; o < s; ++o)
        this._ += Math.round(arguments[o] * n) / n + i[o];
    };
  }
  return fr;
}
function Mh(t, e) {
  let n = 3, r = 4.5, i, o;
  function s(a) {
    return a && (typeof r == "function" && o.pointRadius(+r.apply(this, arguments)), Oe(a, i(o))), o.result();
  }
  return s.area = function(a) {
    return Oe(a, i(te)), te.result();
  }, s.measure = function(a) {
    return Oe(a, i(yn)), yn.result();
  }, s.bounds = function(a) {
    return Oe(a, i(ar)), ar.result();
  }, s.centroid = function(a) {
    return Oe(a, i(Ct)), Ct.result();
  }, s.projection = function(a) {
    return arguments.length ? (i = a == null ? (t = null, Qr) : (t = a).stream, s) : t;
  }, s.context = function(a) {
    return arguments.length ? (o = a == null ? (e = null, new Ao(n)) : new Js(e = a), typeof r != "function" && o.pointRadius(r), s) : e;
  }, s.pointRadius = function(a) {
    return arguments.length ? (r = typeof a == "function" ? a : (o.pointRadius(+a), +a), s) : r;
  }, s.digits = function(a) {
    if (!arguments.length) return n;
    if (a == null) n = null;
    else {
      const f = Math.floor(a);
      if (!(f >= 0)) throw new RangeError(`invalid digits: ${a}`);
      n = f;
    }
    return e === null && (o = new Ao(n)), s;
  }, s.projection(t).digits(n).context(e);
}
function Ti(t) {
  return function(e) {
    var n = new si();
    for (var r in t) n[r] = t[r];
    return n.stream = e, n;
  };
}
function si() {
}
si.prototype = {
  constructor: si,
  point: function(t, e) {
    this.stream.point(t, e);
  },
  sphere: function() {
    this.stream.sphere();
  },
  lineStart: function() {
    this.stream.lineStart();
  },
  lineEnd: function() {
    this.stream.lineEnd();
  },
  polygonStart: function() {
    this.stream.polygonStart();
  },
  polygonEnd: function() {
    this.stream.polygonEnd();
  }
};
function Ni(t, e, n) {
  var r = t.clipExtent && t.clipExtent();
  return t.scale(150).translate([0, 0]), r != null && t.clipExtent(null), Oe(n, t.stream(ar)), e(ar.result()), r != null && t.clipExtent(r), t;
}
function ra(t, e, n) {
  return Ni(t, function(r) {
    var i = e[1][0] - e[0][0], o = e[1][1] - e[0][1], s = Math.min(i / (r[1][0] - r[0][0]), o / (r[1][1] - r[0][1])), a = +e[0][0] + (i - s * (r[1][0] + r[0][0])) / 2, f = +e[0][1] + (o - s * (r[1][1] + r[0][1])) / 2;
    t.scale(150 * s).translate([a, f]);
  }, n);
}
function Th(t, e, n) {
  return ra(t, [[0, 0], e], n);
}
function Nh(t, e, n) {
  return Ni(t, function(r) {
    var i = +e, o = i / (r[1][0] - r[0][0]), s = (i - o * (r[1][0] + r[0][0])) / 2, a = -o * r[0][1];
    t.scale(150 * o).translate([s, a]);
  }, n);
}
function Ih(t, e, n) {
  return Ni(t, function(r) {
    var i = +e, o = i / (r[1][1] - r[0][1]), s = -o * r[0][0], a = (i - o * (r[1][1] + r[0][1])) / 2;
    t.scale(150 * o).translate([s, a]);
  }, n);
}
var Mo = 16, Ch = ut(30 * ht);
function To(t, e) {
  return +e ? Ph(t, e) : Oh(t);
}
function Oh(t) {
  return Ti({
    point: function(e, n) {
      e = t(e, n), this.stream.point(e[0], e[1]);
    }
  });
}
function Ph(t, e) {
  function n(r, i, o, s, a, f, u, l, c, h, v, g, k, b) {
    var R = u - r, S = l - i, N = R * R + S * S;
    if (N > 4 * e && k--) {
      var C = s + h, z = a + v, L = f + g, D = Me(C * C + z * z + L * L), d = gn(L /= D), p = ot(ot(L) - 1) < rt || ot(o - c) < rt ? (o + c) / 2 : _n(z, C), m = t(p, d), x = m[0], A = m[1], I = x - r, _ = A - i, y = S * I - R * _;
      (y * y / N > e || ot((R * I + S * _) / N - 0.5) > 0.3 || s * h + a * v + f * g < Ch) && (n(r, i, o, s, a, f, x, A, p, C /= D, z /= D, L, k, b), b.point(x, A), n(x, A, p, C, z, L, u, l, c, h, v, g, k, b));
    }
  }
  return function(r) {
    var i, o, s, a, f, u, l, c, h, v, g, k, b = {
      point: R,
      lineStart: S,
      lineEnd: C,
      polygonStart: function() {
        r.polygonStart(), b.lineStart = z;
      },
      polygonEnd: function() {
        r.polygonEnd(), b.lineStart = S;
      }
    };
    function R(d, p) {
      d = t(d, p), r.point(d[0], d[1]);
    }
    function S() {
      c = NaN, b.point = N, r.lineStart();
    }
    function N(d, p) {
      var m = Be([d, p]), x = t(d, p);
      n(c, h, l, v, g, k, c = x[0], h = x[1], l = d, v = m[0], g = m[1], k = m[2], Mo, r), r.point(c, h);
    }
    function C() {
      b.point = R, r.lineEnd();
    }
    function z() {
      S(), b.point = L, b.lineEnd = D;
    }
    function L(d, p) {
      N(i = d, p), o = c, s = h, a = v, f = g, u = k, b.point = N;
    }
    function D() {
      n(c, h, l, v, g, k, o, s, i, a, f, u, Mo, r), b.lineEnd = C, C();
    }
    return b;
  };
}
var Dh = Ti({
  point: function(t, e) {
    this.stream.point(t * ht, e * ht);
  }
});
function $h(t) {
  return Ti({
    point: function(e, n) {
      var r = t(e, n);
      return this.stream.point(r[0], r[1]);
    }
  });
}
function Lh(t, e, n, r, i) {
  function o(s, a) {
    return s *= r, a *= i, [e + t * s, n - t * a];
  }
  return o.invert = function(s, a) {
    return [(s - e) / t * r, (n - a) / t * i];
  }, o;
}
function No(t, e, n, r, i, o) {
  if (!o) return Lh(t, e, n, r, i);
  var s = ut(o), a = lt(o), f = s * t, u = a * t, l = s / t, c = a / t, h = (a * n - s * e) / t, v = (a * e + s * n) / t;
  function g(k, b) {
    return k *= r, b *= i, [f * k - u * b + e, n - u * k - f * b];
  }
  return g.invert = function(k, b) {
    return [r * (l * k - c * b + h), i * (v - c * k - l * b)];
  }, g;
}
function zh(t) {
  return qh(function() {
    return t;
  })();
}
function qh(t) {
  var e, n = 150, r = 480, i = 250, o = 0, s = 0, a = 0, f = 0, u = 0, l, c = 0, h = 1, v = 1, g = null, k = xo, b = null, R, S, N, C = Qr, z = 0.5, L, D, d, p, m;
  function x(y) {
    return d(y[0] * ht, y[1] * ht);
  }
  function A(y) {
    return y = d.invert(y[0], y[1]), y && [y[0] * Rt, y[1] * Rt];
  }
  x.stream = function(y) {
    return p && m === y ? p : p = Dh($h(l)(k(L(C(m = y)))));
  }, x.preclip = function(y) {
    return arguments.length ? (k = y, g = void 0, _()) : k;
  }, x.postclip = function(y) {
    return arguments.length ? (C = y, b = R = S = N = null, _()) : C;
  }, x.clipAngle = function(y) {
    return arguments.length ? (k = +y ? dh(g = y * ht) : (g = null, xo), _()) : g * Rt;
  }, x.clipExtent = function(y) {
    return arguments.length ? (C = y == null ? (b = R = S = N = null, Qr) : _h(b = +y[0][0], R = +y[0][1], S = +y[1][0], N = +y[1][1]), _()) : b == null ? null : [[b, R], [S, N]];
  }, x.scale = function(y) {
    return arguments.length ? (n = +y, I()) : n;
  }, x.translate = function(y) {
    return arguments.length ? (r = +y[0], i = +y[1], I()) : [r, i];
  }, x.center = function(y) {
    return arguments.length ? (o = y[0] % 360 * ht, s = y[1] % 360 * ht, I()) : [o * Rt, s * Rt];
  }, x.rotate = function(y) {
    return arguments.length ? (a = y[0] % 360 * ht, f = y[1] % 360 * ht, u = y.length > 2 ? y[2] % 360 * ht : 0, I()) : [a * Rt, f * Rt, u * Rt];
  }, x.angle = function(y) {
    return arguments.length ? (c = y % 360 * ht, I()) : c * Rt;
  }, x.reflectX = function(y) {
    return arguments.length ? (h = y ? -1 : 1, I()) : h < 0;
  }, x.reflectY = function(y) {
    return arguments.length ? (v = y ? -1 : 1, I()) : v < 0;
  }, x.precision = function(y) {
    return arguments.length ? (L = To(D, z = y * y), _()) : Me(z);
  }, x.fitExtent = function(y, w) {
    return ra(x, y, w);
  }, x.fitSize = function(y, w) {
    return Th(x, y, w);
  }, x.fitWidth = function(y, w) {
    return Nh(x, y, w);
  }, x.fitHeight = function(y, w) {
    return Ih(x, y, w);
  };
  function I() {
    var y = No(n, 0, 0, h, v, c).apply(null, e(o, s)), w = No(n, r - y[0], i - y[1], h, v, c);
    return l = Hs(a, f, u), D = Gr(e, w), d = Gr(l, D), L = To(D, z), _();
  }
  function _() {
    return p = m = null, x;
  }
  return function() {
    return e = t.apply(this, arguments), x.invert = e.invert && A, I();
  };
}
function Ii(t, e) {
  return [t, nh(ih((St + e) / 2))];
}
Ii.invert = function(t, e) {
  return [t, 2 * Us(eh(e)) - St];
};
function Fh() {
  return Uh(Ii).scale(961 / Tt);
}
function Uh(t) {
  var e = zh(t), n = e.center, r = e.scale, i = e.translate, o = e.clipExtent, s = null, a, f, u;
  e.scale = function(c) {
    return arguments.length ? (r(c), l()) : r();
  }, e.translate = function(c) {
    return arguments.length ? (i(c), l()) : i();
  }, e.center = function(c) {
    return arguments.length ? (n(c), l()) : n();
  }, e.clipExtent = function(c) {
    return arguments.length ? (c == null ? s = a = f = u = null : (s = +c[0][0], a = +c[0][1], f = +c[1][0], u = +c[1][1]), l()) : s == null ? null : [[s, a], [f, u]];
  };
  function l() {
    var c = K * r(), h = e(sh(e.rotate()).invert([0, 0]));
    return o(s == null ? [[h[0] - c, h[1] - c], [h[0] + c, h[1] + c]] : t === Ii ? [[Math.max(h[0] - c, s), a], [Math.min(h[0] + c, f), u]] : [[s, Math.max(h[1] - c, a)], [f, Math.min(h[1] + c, u)]]);
  }
  return l();
}
const On = (t) => () => t;
function Hh(t, {
  sourceEvent: e,
  target: n,
  transform: r,
  dispatch: i
}) {
  Object.defineProperties(this, {
    type: { value: t, enumerable: !0, configurable: !0 },
    sourceEvent: { value: e, enumerable: !0, configurable: !0 },
    target: { value: n, enumerable: !0, configurable: !0 },
    transform: { value: r, enumerable: !0, configurable: !0 },
    _: { value: i }
  });
}
function ee(t, e, n) {
  this.k = t, this.x = e, this.y = n;
}
ee.prototype = {
  constructor: ee,
  scale: function(t) {
    return t === 1 ? this : new ee(this.k * t, this.x, this.y);
  },
  translate: function(t, e) {
    return t === 0 & e === 0 ? this : new ee(this.k, this.x + this.k * t, this.y + this.k * e);
  },
  apply: function(t) {
    return [t[0] * this.k + this.x, t[1] * this.k + this.y];
  },
  applyX: function(t) {
    return t * this.k + this.x;
  },
  applyY: function(t) {
    return t * this.k + this.y;
  },
  invert: function(t) {
    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
  },
  invertX: function(t) {
    return (t - this.x) / this.k;
  },
  invertY: function(t) {
    return (t - this.y) / this.k;
  },
  rescaleX: function(t) {
    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
  },
  rescaleY: function(t) {
    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
var Ci = new ee(1, 0, 0);
ee.prototype;
function Tr(t) {
  t.stopImmediatePropagation();
}
function je(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function Bh(t) {
  return (!t.ctrlKey || t.type === "wheel") && !t.button;
}
function Vh() {
  var t = this;
  return t instanceof SVGElement ? (t = t.ownerSVGElement || t, t.hasAttribute("viewBox") ? (t = t.viewBox.baseVal, [[t.x, t.y], [t.x + t.width, t.y + t.height]]) : [[0, 0], [t.width.baseVal.value, t.height.baseVal.value]]) : [[0, 0], [t.clientWidth, t.clientHeight]];
}
function Io() {
  return this.__zoom || Ci;
}
function Xh(t) {
  return -t.deltaY * (t.deltaMode === 1 ? 0.05 : t.deltaMode ? 1 : 2e-3) * (t.ctrlKey ? 10 : 1);
}
function Yh() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Wh(t, e, n) {
  var r = t.invertX(e[0][0]) - n[0][0], i = t.invertX(e[1][0]) - n[1][0], o = t.invertY(e[0][1]) - n[0][1], s = t.invertY(e[1][1]) - n[1][1];
  return t.translate(
    i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i),
    s > o ? (o + s) / 2 : Math.min(0, o) || Math.max(0, s)
  );
}
function Kh() {
  var t = Bh, e = Vh, n = Wh, r = Xh, i = Yh, o = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, f = Bf, u = Ei("start", "zoom", "end"), l, c, h, v = 500, g = 150, k = 0, b = 10;
  function R(_) {
    _.property("__zoom", Io).on("wheel.zoom", d, { passive: !1 }).on("mousedown.zoom", p).on("dblclick.zoom", m).filter(i).on("touchstart.zoom", x).on("touchmove.zoom", A).on("touchend.zoom touchcancel.zoom", I).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  R.transform = function(_, y, w, E) {
    var M = _.selection ? _.selection() : _;
    M.property("__zoom", Io), _ !== M ? z(_, y, w, E) : M.interrupt().each(function() {
      L(this, arguments).event(E).start().zoom(null, typeof y == "function" ? y.apply(this, arguments) : y).end();
    });
  }, R.scaleBy = function(_, y, w, E) {
    R.scaleTo(_, function() {
      var M = this.__zoom.k, T = typeof y == "function" ? y.apply(this, arguments) : y;
      return M * T;
    }, w, E);
  }, R.scaleTo = function(_, y, w, E) {
    R.transform(_, function() {
      var M = e.apply(this, arguments), T = this.__zoom, q = w == null ? C(M) : typeof w == "function" ? w.apply(this, arguments) : w, O = T.invert(q), $ = typeof y == "function" ? y.apply(this, arguments) : y;
      return n(N(S(T, $), q, O), M, s);
    }, w, E);
  }, R.translateBy = function(_, y, w, E) {
    R.transform(_, function() {
      return n(this.__zoom.translate(
        typeof y == "function" ? y.apply(this, arguments) : y,
        typeof w == "function" ? w.apply(this, arguments) : w
      ), e.apply(this, arguments), s);
    }, null, E);
  }, R.translateTo = function(_, y, w, E, M) {
    R.transform(_, function() {
      var T = e.apply(this, arguments), q = this.__zoom, O = E == null ? C(T) : typeof E == "function" ? E.apply(this, arguments) : E;
      return n(Ci.translate(O[0], O[1]).scale(q.k).translate(
        typeof y == "function" ? -y.apply(this, arguments) : -y,
        typeof w == "function" ? -w.apply(this, arguments) : -w
      ), T, s);
    }, E, M);
  };
  function S(_, y) {
    return y = Math.max(o[0], Math.min(o[1], y)), y === _.k ? _ : new ee(y, _.x, _.y);
  }
  function N(_, y, w) {
    var E = y[0] - w[0] * _.k, M = y[1] - w[1] * _.k;
    return E === _.x && M === _.y ? _ : new ee(_.k, E, M);
  }
  function C(_) {
    return [(+_[0][0] + +_[1][0]) / 2, (+_[0][1] + +_[1][1]) / 2];
  }
  function z(_, y, w, E) {
    _.on("start.zoom", function() {
      L(this, arguments).event(E).start();
    }).on("interrupt.zoom end.zoom", function() {
      L(this, arguments).event(E).end();
    }).tween("zoom", function() {
      var M = this, T = arguments, q = L(M, T).event(E), O = e.apply(M, T), $ = w == null ? C(O) : typeof w == "function" ? w.apply(M, T) : w, P = Math.max(O[1][0] - O[0][0], O[1][1] - O[0][1]), V = M.__zoom, X = typeof y == "function" ? y.apply(M, T) : y, J = f(V.invert($).concat(P / V.k), X.invert($).concat(P / X.k));
      return function(et) {
        if (et === 1) et = X;
        else {
          var F = J(et), H = P / F[2];
          et = new ee(H, $[0] - F[0] * H, $[1] - F[1] * H);
        }
        q.zoom(null, et);
      };
    });
  }
  function L(_, y, w) {
    return !w && _.__zooming || new D(_, y);
  }
  function D(_, y) {
    this.that = _, this.args = y, this.active = 0, this.sourceEvent = null, this.extent = e.apply(_, y), this.taps = 0;
  }
  D.prototype = {
    event: function(_) {
      return _ && (this.sourceEvent = _), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(_, y) {
      return this.mouse && _ !== "mouse" && (this.mouse[1] = y.invert(this.mouse[0])), this.touch0 && _ !== "touch" && (this.touch0[1] = y.invert(this.touch0[0])), this.touch1 && _ !== "touch" && (this.touch1[1] = y.invert(this.touch1[0])), this.that.__zoom = y, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(_) {
      var y = wt(this.that).datum();
      u.call(
        _,
        this.that,
        new Hh(_, {
          sourceEvent: this.sourceEvent,
          target: R,
          transform: this.that.__zoom,
          dispatch: u
        }),
        y
      );
    }
  };
  function d(_, ...y) {
    if (!t.apply(this, arguments)) return;
    var w = L(this, y).event(_), E = this.__zoom, M = Math.max(o[0], Math.min(o[1], E.k * Math.pow(2, r.apply(this, arguments)))), T = de(_);
    if (w.wheel)
      (w.mouse[0][0] !== T[0] || w.mouse[0][1] !== T[1]) && (w.mouse[1] = E.invert(w.mouse[0] = T)), clearTimeout(w.wheel);
    else {
      if (E.k === M) return;
      w.mouse = [T, E.invert(T)], Fn(this), w.start();
    }
    je(_), w.wheel = setTimeout(q, g), w.zoom("mouse", n(N(S(E, M), w.mouse[0], w.mouse[1]), w.extent, s));
    function q() {
      w.wheel = null, w.end();
    }
  }
  function p(_, ...y) {
    if (h || !t.apply(this, arguments)) return;
    var w = _.currentTarget, E = L(this, y, !0).event(_), M = wt(_.view).on("mousemove.zoom", $, !0).on("mouseup.zoom", P, !0), T = de(_, w), q = _.clientX, O = _.clientY;
    _f(_.view), Tr(_), E.mouse = [T, this.__zoom.invert(T)], Fn(this), E.start();
    function $(V) {
      if (je(V), !E.moved) {
        var X = V.clientX - q, J = V.clientY - O;
        E.moved = X * X + J * J > k;
      }
      E.event(V).zoom("mouse", n(N(E.that.__zoom, E.mouse[0] = de(V, w), E.mouse[1]), E.extent, s));
    }
    function P(V) {
      M.on("mousemove.zoom mouseup.zoom", null), gf(V.view, E.moved), je(V), E.event(V).end();
    }
  }
  function m(_, ...y) {
    if (t.apply(this, arguments)) {
      var w = this.__zoom, E = de(_.changedTouches ? _.changedTouches[0] : _, this), M = w.invert(E), T = w.k * (_.shiftKey ? 0.5 : 2), q = n(N(S(w, T), E, M), e.apply(this, y), s);
      je(_), a > 0 ? wt(this).transition().duration(a).call(z, q, E, _) : wt(this).call(R.transform, q, E, _);
    }
  }
  function x(_, ...y) {
    if (t.apply(this, arguments)) {
      var w = _.touches, E = w.length, M = L(this, y, _.changedTouches.length === E).event(_), T, q, O, $;
      for (Tr(_), q = 0; q < E; ++q)
        O = w[q], $ = de(O, this), $ = [$, this.__zoom.invert($), O.identifier], M.touch0 ? !M.touch1 && M.touch0[2] !== $[2] && (M.touch1 = $, M.taps = 0) : (M.touch0 = $, T = !0, M.taps = 1 + !!l);
      l && (l = clearTimeout(l)), T && (M.taps < 2 && (c = $[0], l = setTimeout(function() {
        l = null;
      }, v)), Fn(this), M.start());
    }
  }
  function A(_, ...y) {
    if (this.__zooming) {
      var w = L(this, y).event(_), E = _.changedTouches, M = E.length, T, q, O, $;
      for (je(_), T = 0; T < M; ++T)
        q = E[T], O = de(q, this), w.touch0 && w.touch0[2] === q.identifier ? w.touch0[0] = O : w.touch1 && w.touch1[2] === q.identifier && (w.touch1[0] = O);
      if (q = w.that.__zoom, w.touch1) {
        var P = w.touch0[0], V = w.touch0[1], X = w.touch1[0], J = w.touch1[1], et = (et = X[0] - P[0]) * et + (et = X[1] - P[1]) * et, F = (F = J[0] - V[0]) * F + (F = J[1] - V[1]) * F;
        q = S(q, Math.sqrt(et / F)), O = [(P[0] + X[0]) / 2, (P[1] + X[1]) / 2], $ = [(V[0] + J[0]) / 2, (V[1] + J[1]) / 2];
      } else if (w.touch0) O = w.touch0[0], $ = w.touch0[1];
      else return;
      w.zoom("touch", n(N(q, O, $), w.extent, s));
    }
  }
  function I(_, ...y) {
    if (this.__zooming) {
      var w = L(this, y).event(_), E = _.changedTouches, M = E.length, T, q;
      for (Tr(_), h && clearTimeout(h), h = setTimeout(function() {
        h = null;
      }, v), T = 0; T < M; ++T)
        q = E[T], w.touch0 && w.touch0[2] === q.identifier ? delete w.touch0 : w.touch1 && w.touch1[2] === q.identifier && delete w.touch1;
      if (w.touch1 && !w.touch0 && (w.touch0 = w.touch1, delete w.touch1), w.touch0) w.touch0[1] = this.__zoom.invert(w.touch0[0]);
      else if (w.end(), w.taps === 2 && (q = de(q, this), Math.hypot(c[0] - q[0], c[1] - q[1]) < b)) {
        var O = wt(this).on("dblclick.zoom");
        O && O.apply(this, arguments);
      }
    }
  }
  return R.wheelDelta = function(_) {
    return arguments.length ? (r = typeof _ == "function" ? _ : On(+_), R) : r;
  }, R.filter = function(_) {
    return arguments.length ? (t = typeof _ == "function" ? _ : On(!!_), R) : t;
  }, R.touchable = function(_) {
    return arguments.length ? (i = typeof _ == "function" ? _ : On(!!_), R) : i;
  }, R.extent = function(_) {
    return arguments.length ? (e = typeof _ == "function" ? _ : On([[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]]), R) : e;
  }, R.scaleExtent = function(_) {
    return arguments.length ? (o[0] = +_[0], o[1] = +_[1], R) : [o[0], o[1]];
  }, R.translateExtent = function(_) {
    return arguments.length ? (s[0][0] = +_[0][0], s[1][0] = +_[1][0], s[0][1] = +_[0][1], s[1][1] = +_[1][1], R) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, R.constrain = function(_) {
    return arguments.length ? (n = _, R) : n;
  }, R.duration = function(_) {
    return arguments.length ? (a = +_, R) : a;
  }, R.interpolate = function(_) {
    return arguments.length ? (f = _, R) : f;
  }, R.on = function() {
    var _ = u.on.apply(u, arguments);
    return _ === u ? R : _;
  }, R.clickDistance = function(_) {
    return arguments.length ? (k = (_ = +_) * _, R) : Math.sqrt(k);
  }, R.tapDistance = function(_) {
    return arguments.length ? (b = +_, R) : b;
  }, R;
}
var Gh = /* @__PURE__ */ Gt('<div class="loading svelte-gouuy3"><p>Carregando mapa interativo...</p> <p>Isso pode demorar alguns segundos devido ao tamanho do arquivo.</p></div>'), Zh = /* @__PURE__ */ Gt('<div class="error svelte-gouuy3"><p> </p></div>'), Qh = /* @__PURE__ */ Gt('<div class="interactive-map-container svelte-gouuy3"><!> <div class="map-wrapper svelte-gouuy3"></div> <div class="zoom-controls svelte-gouuy3"><button class="zoom-btn svelte-gouuy3">+</button> <button class="zoom-btn svelte-gouuy3">−</button> <button class="zoom-btn svelte-gouuy3">⌂</button></div> <div class="legend-container svelte-gouuy3"><div class="legend-item svelte-gouuy3"><div class="legend-color color-beige svelte-gouuy3"></div> <span>Sem RAI e sem portal</span></div> <div class="legend-item svelte-gouuy3"><div class="legend-color color-light-purple-gray svelte-gouuy3"></div> <span>Município com Responsável de Acesso à Informação</span></div> <div class="legend-item svelte-gouuy3"><div class="legend-color color-red svelte-gouuy3"></div> <span>Município com RAI e Portal de Dados Abertos</span></div> <div class="legend-item svelte-gouuy3"><div class="legend-color color-orange svelte-gouuy3"></div> <span>Município com Portal de Dados Abertos e sem RAI</span></div></div></div>');
function Jh(t, e) {
  qo(e, !1);
  let n = /* @__PURE__ */ fe(), r = [], i = null, o = /* @__PURE__ */ fe(!0), s = /* @__PURE__ */ fe(null), a = null, f = null, u = Au(e, "selectedMunicipio", 8, "");
  fs(async () => {
    try {
      const p = await fetch("/municipios.csv");
      if (!p.ok)
        throw new Error(`Erro ao carregar CSV: ${p.status}`);
      const m = await p.text();
      r = ds.parse(m, { header: !0, delimiter: ";" }).data.reduce(
        (I, _) => (I[_.MUNICIPIO] = _, I),
        {}
      ), console.log("CSV carregado com", Object.keys(r).length, "municípios"), console.log("Exemplos de municípios no CSV:", Object.keys(r).slice(0, 5)), console.log("Primeiros 5 municípios do CSV:", Object.keys(r).slice(0, 5).map((I) => ({ nome: I, dados: r[I] })));
      const A = await fetch("/PortugalM.geojson");
      if (!A.ok)
        throw new Error(`Erro ao carregar GeoJSON: ${A.status}`);
      i = await A.json(), l(), Z(o, !1);
    } catch (p) {
      console.error("Erro ao carregar dados:", p), Z(s, p.message), Z(o, !1);
    }
  });
  function l() {
    if (!i || !B(n))
      return;
    const p = 800, m = 500;
    wt(B(n)).selectAll("*").remove();
    const x = wt(B(n)).append("svg").attr("width", "100%").attr("height", "100%").attr("viewBox", `0 0 ${p} ${m}`).style("background", "transparent").style("cursor", "grab"), A = Kh().scaleExtent([1, 8]).on("zoom", (I) => {
      x.selectAll("path").attr("transform", I.transform);
    });
    x.call(A), f = A;
    try {
      const I = Fh().center([-11, 39.2]).scale(6500).translate([p / 2 - 350, m / 2]), _ = Mh().projection(I), y = wt("body").append("div").attr("id", "map-tooltip").style("position", "absolute").style("background", "rgba(0, 0, 0, 0.8)").style("color", "white").style("padding", "8px 12px").style("border-radius", "4px").style("font-size", "12px").style("font-family", "'Bai Jamjuree', sans-serif").style("pointer-events", "none").style("z-index", "1000").style("opacity", "0").style("transition", "opacity 0.2s");
      a = x.selectAll("path").data(i.features).enter().append("path").attr("d", _).attr("fill", (w) => {
        const E = w.properties.NAME_2, M = r[E];
        return (w.properties.NAME_2 === "Évora" || w.properties.NAME_2 === "Lisboa" || w.properties.NAME_2 === "Porto") && (console.log("Município:", w.properties.NAME_2, "Dados encontrados:", M), M && console.log("RAI:", M.RAI, "PORTAL:", M.PORTAL)), M && M.RAI?.trim().toUpperCase() === "SIM" && M.PORTAL && M.PORTAL.trim() !== "NAO" && M.PORTAL.trim().startsWith("http") ? "#c44c49" : M && M.RAI?.trim().toUpperCase() === "SIM" ? "rgb(191, 170, 234)" : M && M.PORTAL && M.PORTAL.trim() !== "NAO" && M.PORTAL.trim().startsWith("http") ? "#de866b" : M ? "#f8f1e7" : "#E0E0E0";
      }).attr("stroke", "#de6e4c").attr("stroke-width", "0.5").style("cursor", "pointer").style("opacity", "1").style("transition", "opacity 0.3s").on("mouseover", function(w, E) {
        wt(this).attr("stroke", "#000").attr("stroke-width", "1.5").style("filter", "brightness(1.1)");
        const M = E.properties.NAME_2 || E.properties.name || "Desconhecido", T = r[M];
        let q = `<strong>${M}</strong>`;
        if (T) {
          const O = T.RAI?.trim().toUpperCase() === "SIM" ? "Sim" : "Não";
          q += `<br/>RAI: ${O}`;
          const $ = T.PORTAL?.trim();
          $ && $ !== "NAO" && $.startsWith("http") ? q += `<br/>Portal: <a href="${$}" target="_blank">${$}</a>` : q += "<br/>Portal: Não", T.DISTRITO && (q += `<br/>Distrito: ${T.DISTRITO}`);
        } else
          q += "<br/><em>Sem dados disponíveis</em>";
        y.style("opacity", "1").html(q).style("left", w.pageX + 10 + "px").style("top", w.pageY - 10 + "px");
      }).on("mousemove", function(w) {
        y.style("left", w.pageX + 10 + "px").style("top", w.pageY - 10 + "px");
      }).on("mouseout", function(w, E) {
        const M = r[E.properties.NAME_2 || E.properties.name];
        wt(this).attr("stroke", "#de6e4c").attr("stroke-width", "0.5").style("filter", "none"), y.style("opacity", "0");
      }).on("click", function(w, E) {
        const M = E.properties.NAME_2 || E.properties.name;
        console.log("Clicou em:", M);
      }), console.log("Mapa criado com sucesso!");
    } catch (I) {
      console.error("Erro ao criar mapa:", I), Z(s, I.message);
    }
  }
  function c(p) {
    return p.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }
  function h(p) {
    if (!a)
      return;
    if (!p || p.trim() === "") {
      a.style("opacity", "1");
      return;
    }
    const m = c(p.toLowerCase().trim());
    a.style("opacity", (x) => {
      const A = x.properties.NAME_2 || x.properties.name || "";
      return c(A).includes(m) ? "1" : "0.2";
    });
  }
  function v() {
    f && wt(B(n)).select("svg").transition().duration(300).call(f.scaleBy, 1.5);
  }
  function g() {
    f && wt(B(n)).select("svg").transition().duration(300).call(f.scaleBy, 1 / 1.5);
  }
  function k() {
    f && wt(B(n)).select("svg").transition().duration(300).call(f.transform, Ci);
  }
  eu(() => ls(u()), () => {
    console.log("selectedMunicipio mudou:", u()), u() !== void 0 && h(u());
  }), nu(), ps();
  var b = Qh(), R = ct(b);
  {
    var S = (p) => {
      var m = Gh();
      It(p, m);
    }, N = (p) => {
      var m = du(), x = Pr(m);
      {
        var A = (I) => {
          var _ = Zh(), y = ct(_), w = ct(y);
          Ie(() => Ce(w, `Erro ao carregar o mapa: ${B(s) ?? ""}`)), It(I, _);
        };
        De(
          x,
          (I) => {
            B(s) && I(A);
          },
          !0
        );
      }
      It(p, m);
    };
    De(R, (p) => {
      B(o) ? p(S) : p(N, !1);
    });
  }
  var C = mt(R, 2);
  ku(C, (p) => Z(n, p), () => B(n));
  var z = mt(C, 2), L = ct(z), D = mt(L, 2), d = mt(D, 2);
  jt("click", L, v), jt("click", D, g), jt("click", d, k), It(t, b), Fo();
}
var jh = /* @__PURE__ */ Gt('<li class="svelte-1kq6r5w"> </li>'), tp = /* @__PURE__ */ Gt('<ul class="sugestoes svelte-1kq6r5w"></ul>'), ep = /* @__PURE__ */ Gt('Há um responsável de acesso à informação no município. Para pedidos de acesso a documentos administrativos, envie um email com a solicitação para <span class="email-destaque svelte-1kq6r5w"> </span>', 1), np = /* @__PURE__ */ Gt('Não há um responsável de acesso à informação no município. Para saber mais informação aceda a <a target="_blank"> </a>', 1), rp = /* @__PURE__ */ Gt('<a target="_blank"> </a>'), ip = /* @__PURE__ */ Gt('<div class="result-container svelte-1kq6r5w"><h3 class="svelte-1kq6r5w"> </h3> <table class="result-table svelte-1kq6r5w"><thead><tr class="svelte-1kq6r5w"><th class="svelte-1kq6r5w">RAI</th><th class="svelte-1kq6r5w">Portal</th><th class="svelte-1kq6r5w">Shapefiles</th></tr></thead><tbody><tr class="svelte-1kq6r5w"><td class="svelte-1kq6r5w"><!></td><td class="svelte-1kq6r5w"><!></td><td class="svelte-1kq6r5w"><button class="download-btn svelte-1kq6r5w"><svg class="download-icon svelte-1kq6r5w" width="32" height="32" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g stroke="#333" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none"><line x1="50" y1="15" x2="50" y2="55"></line><polyline points="35,40 50,55 65,40"></polyline></g><g stroke="#333" stroke-width="6" stroke-linecap="square" stroke-linejoin="miter" fill="none"><path d="M20 65 L20 80 L80 80 L80 65"></path></g></svg> <span class="download-text svelte-1kq6r5w">Download <strong>Shapefile</strong> do Município</span></button> <div class="shapefile-info svelte-1kq6r5w">Shapefile disponível, use para contar histórias locais.</div></td></tr></tbody></table> <button class="clear-btn svelte-1kq6r5w">Selecionar outro município</button></div>'), op = /* @__PURE__ */ Gt('<div class="dashboard-container svelte-1kq6r5w"><div class="search-section svelte-1kq6r5w"><h2 class="svelte-1kq6r5w">Dados nos municípios</h2> <div class="search-input-container svelte-1kq6r5w"><input type="text" placeholder="Nome do município..." class="search-input svelte-1kq6r5w"/> <button class="search-btn svelte-1kq6r5w">Pesquisar</button></div> <!> <!></div> <div class="map-section svelte-1kq6r5w"><!></div></div>');
function ap(t, e) {
  qo(e, !1);
  let n = /* @__PURE__ */ fe(""), r = [], i = /* @__PURE__ */ fe(null), o = "", s = /* @__PURE__ */ fe([]), a = /* @__PURE__ */ fe("");
  fs(async () => {
    try {
      const m = await fetch("/municipios.csv");
      if (!m.ok) {
        o = "Erro ao carregar dados dos municípios";
        return;
      }
      const x = await m.text();
      ds.parse(x, {
        header: !0,
        skipEmptyLines: !0,
        complete: (A) => {
          r = A.data;
        },
        error: () => {
          o = "Erro ao processar dados dos municípios";
        }
      });
    } catch {
      o = "Erro ao carregar dados";
    }
  });
  function f(m) {
    Z(n, m), Z(
      i,
      null
      // Limpa resultado anterior
    ), Z(s, []), u(), Z(a, m);
  }
  function u() {
    if (B(n).trim()) {
      const m = c(B(n));
      Z(i, r.find((x) => c(x.MUNICIPIO || "") === m)), B(i) ? Z(a, B(i).MUNICIPIO) : Z(
        a,
        m
        // Mantém o destaque parcial
      ), Z(s, []);
    } else
      Z(a, ""), Z(i, null), Z(s, []);
  }
  function l(m) {
    m.key === "Enter" && u();
  }
  function c(m) {
    return m.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }
  function h(m) {
    return `${m}.zip`;
  }
  function v(m) {
    const x = h(m), A = `/shapefiles/${x}`, I = document.createElement("a");
    I.href = A, I.download = x, I.target = "_blank", fetch(A, { method: "HEAD" }).then((_) => {
      _.ok ? I.click() : alert("Shapefile não disponível para este município.");
    }).catch(() => {
      alert("Shapefile não disponível para este município.");
    });
  }
  function g() {
    if (B(i) && Z(i, null), B(n).length > 0 && r.length > 0) {
      const m = c(B(n));
      Z(s, r.filter((x) => {
        const A = x.MUNICIPIO || "";
        return c(A).includes(m);
      }).sort((x, A) => {
        const I = c(x.MUNICIPIO || "").startsWith(m), _ = c(A.MUNICIPIO || "").startsWith(m);
        return I && !_ ? -1 : !I && _ ? 1 : (x.MUNICIPIO || "").localeCompare(A.MUNICIPIO || "");
      }).slice(0, 10)), Z(
        a,
        m
        // Usa o termo de busca para destacar
      );
    } else
      Z(s, []), Z(
        a,
        ""
        // Limpa o destaque no mapa
      );
  }
  ps();
  var k = op(), b = ct(k), R = mt(ct(b), 2), S = ct(R), N = mt(S, 2), C = mt(R, 2);
  {
    var z = (m) => {
      var x = tp();
      mu(x, 5, () => B(s), _u, (A, I) => {
        var _ = jh(), y = ct(_);
        Ie(() => Ce(y, B(I).MUNICIPIO)), jt("click", _, () => f(B(I).MUNICIPIO)), It(A, _);
      }), It(m, x);
    };
    De(C, (m) => {
      B(s).length > 0 && m(z);
    });
  }
  var L = mt(C, 2);
  {
    var D = (m) => {
      var x = ip(), A = ct(x), I = ct(A), _ = mt(A, 2), y = mt(ct(_)), w = ct(y), E = ct(w), M = ct(E);
      {
        var T = (F) => {
          var H = ep(), j = mt(Pr(H)), U = ct(j);
          Ie(() => Ce(U, B(i).RAI_Email)), It(F, H);
        }, q = (F) => {
          var H = np(), j = mt(Pr(H)), U = ct(j);
          Ie(() => {
            Bi(j, "href", B(i).Website), Ce(U, B(i).Website);
          }), It(F, H);
        };
        De(M, (F) => {
          B(i).RAI?.toLowerCase() === "sim" ? F(T) : F(q, !1);
        });
      }
      var O = mt(E), $ = ct(O);
      {
        var P = (F) => {
          var H = rp(), j = ct(H);
          Ie(() => {
            Bi(H, "href", B(i).PORTAL), Ce(j, B(i).PORTAL);
          }), It(F, H);
        }, V = (F) => {
          var H = pu("Não há registos de portal de dados abertos no município indicado.");
          It(F, H);
        };
        De($, (F) => {
          B(i).PORTAL && B(i).PORTAL.toLowerCase() !== "nao" && B(i).PORTAL.toLowerCase() !== "não" ? F(P) : F(V, !1);
        });
      }
      var X = mt(O), J = ct(X), et = mt(_, 2);
      Ie(() => Ce(I, B(i).MUNICIPIO)), jt("click", J, () => v(B(i).MUNICIPIO)), jt("click", et, () => {
        Z(i, null), Z(n, ""), Z(a, "");
      }), It(m, x);
    };
    De(L, (m) => {
      B(i) && m(D);
    });
  }
  var d = mt(b, 2), p = ct(d);
  Jh(p, {
    get selectedMunicipio() {
      return B(a);
    }
  }), Su(S, () => B(n), (m) => Z(n, m)), jt("input", S, g), jt("keydown", S, l), jt("click", N, u), It(t, k), Fo();
}
export {
  ap as default
};
