typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
let Cn = !1, Va = !1;
function Ba() {
  Cn = !0;
}
Ba();
const Xa = 1, Ya = 2, Wa = 16, Ga = 2, Ka = 4, Za = 8, Ja = 1, Qa = 2, nt = Symbol(), ja = "http://www.w3.org/1999/xhtml", yo = !1;
var Br = Array.isArray, ts = Array.prototype.indexOf, Xr = Array.from, hr = Object.defineProperty, Sn = Object.getOwnPropertyDescriptor, wo = Object.getOwnPropertyDescriptors, ns = Object.prototype, es = Array.prototype, Yr = Object.getPrototypeOf, wi = Object.isExtensible;
function rs(t) {
  return t();
}
function pr(t) {
  for (var n = 0; n < t.length; n++)
    t[n]();
}
function is() {
  var t, n, e = new Promise((r, i) => {
    t = r, n = i;
  });
  return { promise: e, resolve: t, reject: n };
}
const vt = 2, Wr = 4, We = 8, $n = 16, Yt = 32, cn = 64, xo = 128, xt = 256, Me = 512, et = 1024, Et = 2048, Wt = 4096, At = 8192, hn = 16384, Gr = 32768, Kr = 65536, xi = 1 << 17, os = 1 << 18, Zr = 1 << 19, Eo = 1 << 20, vr = 1 << 21, Jr = 1 << 22, en = 1 << 23, rn = Symbol("$state"), as = Symbol("legacy props"), Qr = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}();
function ss() {
  throw new Error("https://svelte.dev/e/await_outside_boundary");
}
function us(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function ls() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function fs(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function cs() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function hs(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function ps() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function vs(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function ds() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function _s() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function gs() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let ms = !1;
function So(t) {
  return t === this.v;
}
function ys(t, n) {
  return t != t ? n == n : t !== n || t !== null && typeof t == "object" || typeof t == "function";
}
function bo(t) {
  return !ys(t, this.v);
}
let K = null;
function Ne(t) {
  K = t;
}
function jr(t, n = !1, e) {
  K = {
    p: K,
    c: null,
    e: null,
    s: t,
    x: null,
    l: Cn && !n ? { s: null, u: null, $: [] } : null
  };
}
function ti(t) {
  var n = (
    /** @type {ComponentContext} */
    K
  ), e = n.e;
  if (e !== null) {
    n.e = null;
    for (var r of e)
      zo(r);
  }
  return K = n.p, /** @type {T} */
  {};
}
function On() {
  return !Cn || K !== null && K.l === null;
}
const ws = /* @__PURE__ */ new WeakMap();
function xs(t) {
  var n = H;
  if (n === null)
    return V.f |= en, t;
  if ((n.f & Gr) === 0) {
    if ((n.f & xo) === 0)
      throw !n.parent && t instanceof Error && Mo(t), t;
    n.b.error(t);
  } else
    ni(t, n);
}
function ni(t, n) {
  for (; n !== null; ) {
    if ((n.f & xo) !== 0)
      try {
        n.b.error(t);
        return;
      } catch (e) {
        t = e;
      }
    n = n.parent;
  }
  throw t instanceof Error && Mo(t), t;
}
function Mo(t) {
  const n = ws.get(t);
  n && (hr(t, "message", {
    value: n.message
  }), hr(t, "stack", {
    value: n.stack
  }));
}
let Ae = [];
function Es() {
  var t = Ae;
  Ae = [], pr(t);
}
function No(t) {
  Ae.length === 0 && queueMicrotask(Es), Ae.push(t);
}
function Ss() {
  for (var t = (
    /** @type {Effect} */
    H.b
  ); t !== null && !t.has_pending_snippet(); )
    t = t.parent;
  return t === null && ss(), t;
}
// @__NO_SIDE_EFFECTS__
function ei(t) {
  var n = vt | Et, e = V !== null && (V.f & vt) !== 0 ? (
    /** @type {Derived} */
    V
  ) : null;
  return H === null || e !== null && (e.f & xt) !== 0 ? n |= xt : H.f |= Zr, {
    ctx: K,
    deps: null,
    effects: null,
    equals: So,
    f: n,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      nt
    ),
    wv: 0,
    parent: e ?? H,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function bs(t, n) {
  let e = (
    /** @type {Effect | null} */
    H
  );
  e === null && ls();
  var r = (
    /** @type {Boundary} */
    e.b
  ), i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), o = Zn(
    /** @type {V} */
    nt
  ), a = null, s = !V;
  return Us(() => {
    try {
      var u = t();
    } catch (p) {
      u = Promise.reject(p);
    }
    var f = () => u;
    i = a?.then(f, f) ?? Promise.resolve(u), a = i;
    var l = (
      /** @type {Batch} */
      G
    ), h = r.pending;
    s && (r.update_pending_count(1), h || l.increment());
    const c = (p, v = void 0) => {
      a = null, h || l.activate(), v ? v !== Qr && (o.f |= en, Te(o, v)) : ((o.f & en) !== 0 && (o.f ^= en), Te(o, p)), s && (r.update_pending_count(-1), h || l.decrement()), To();
    };
    if (i.then(c, (p) => c(null, p || "unknown")), l)
      return () => {
        queueMicrotask(() => l.neuter());
      };
  }), new Promise((u) => {
    function f(l) {
      function h() {
        l === i ? u(o) : f(i);
      }
      l.then(h, h);
    }
    f(i);
  });
}
// @__NO_SIDE_EFFECTS__
function ri(t) {
  const n = /* @__PURE__ */ ei(t);
  return n.equals = bo, n;
}
function Ao(t) {
  var n = t.effects;
  if (n !== null) {
    t.effects = null;
    for (var e = 0; e < n.length; e += 1)
      Bt(
        /** @type {Effect} */
        n[e]
      );
  }
}
function Ms(t) {
  for (var n = t.parent; n !== null; ) {
    if ((n.f & vt) === 0)
      return (
        /** @type {Effect} */
        n
      );
    n = n.parent;
  }
  return null;
}
function ii(t) {
  var n, e = H;
  Qt(Ms(t));
  try {
    Ao(t), n = Wo(t);
  } finally {
    Qt(e);
  }
  return n;
}
function ko(t) {
  var n = ii(t);
  if (t.equals(n) || (t.v = n, t.wv = Xo()), !pn)
    if (Nn !== null)
      Nn.set(t, t.v);
    else {
      var e = (Zt || (t.f & xt) !== 0) && t.deps !== null ? Wt : et;
      st(t, e);
    }
}
function Ns(t, n, e) {
  const r = On() ? ei : ri;
  if (n.length === 0) {
    e(t.map(r));
    return;
  }
  var i = G, o = (
    /** @type {Effect} */
    H
  ), a = As(), s = Ss();
  Promise.all(n.map((u) => /* @__PURE__ */ bs(u))).then((u) => {
    i?.activate(), a();
    try {
      e([...t.map(r), ...u]);
    } catch (f) {
      (o.f & hn) === 0 && ni(f, o);
    }
    i?.deactivate(), To();
  }).catch((u) => {
    s.error(u);
  });
}
function As() {
  var t = H, n = V, e = K;
  return function() {
    Qt(t), $t(n), Ne(e);
  };
}
function To() {
  Qt(null), $t(null), Ne(null);
}
const Ln = /* @__PURE__ */ new Set();
let G = null, ye = null, Nn = null, Ei = /* @__PURE__ */ new Set(), ke = [];
function Io() {
  const t = (
    /** @type {() => void} */
    ke.shift()
  );
  ke.length > 0 && queueMicrotask(Io), t();
}
let Kn = [], oi = null, dr = !1;
class An {
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
  #e = [];
  /**
   * The same as `#async_effects`, but for effects inside a newly-created
   * `<svelte:boundary>` — these do not prevent the batch from committing
   * @type {Effect[]}
   */
  #a = [];
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
  #n = [];
  /**
   * Block effects, which may need to re-run on subsequent flushes
   * in order to update internal sources (e.g. each block items)
   * @type {Effect[]}
   */
  #s = [];
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
  process(n) {
    Kn = [], ye = null;
    var e = null;
    if (Ln.size > 1) {
      e = /* @__PURE__ */ new Map(), Nn = /* @__PURE__ */ new Map();
      for (const [o, a] of this.current)
        e.set(o, { v: o.v, wv: o.wv }), o.v = a;
      for (const o of Ln)
        if (o !== this)
          for (const [a, s] of o.#i)
            e.has(a) || (e.set(a, { v: a.v, wv: a.wv }), a.v = s);
    }
    for (const o of n)
      this.#v(o);
    if (this.#e.length === 0 && this.#t === 0) {
      this.#p();
      var r = this.#r, i = this.#n;
      this.#r = [], this.#n = [], this.#s = [], ye = G, G = null, Si(r), Si(i), G === null ? G = this : Ln.delete(this), this.#l?.resolve();
    } else
      this.#u(this.#r), this.#u(this.#n), this.#u(this.#s);
    if (e) {
      for (const [o, { v: a, wv: s }] of e)
        o.wv <= s && (o.v = a);
      Nn = null;
    }
    for (const o of this.#e)
      an(o);
    for (const o of this.#a)
      an(o);
    this.#e = [], this.#a = [];
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   */
  #v(n) {
    n.f ^= et;
    for (var e = n.first; e !== null; ) {
      var r = e.f, i = (r & (Yt | cn)) !== 0, o = i && (r & et) !== 0, a = o || (r & At) !== 0 || this.skipped_effects.has(e);
      if (!a && e.fn !== null) {
        if (i)
          e.f ^= et;
        else if ((r & Wr) !== 0)
          this.#n.push(e);
        else if ((r & et) === 0)
          if ((r & Jr) !== 0) {
            var s = e.b?.pending ? this.#a : this.#e;
            s.push(e);
          } else se(e) && ((e.f & $n) !== 0 && this.#s.push(e), an(e));
        var u = e.first;
        if (u !== null) {
          e = u;
          continue;
        }
      }
      var f = e.parent;
      for (e = e.next; e === null && f !== null; )
        e = f.next, f = f.parent;
    }
  }
  /**
   * @param {Effect[]} effects
   */
  #u(n) {
    for (const e of n)
      ((e.f & Et) !== 0 ? this.#c : this.#h).push(e), st(e, et);
    n.length = 0;
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(n, e) {
    this.#i.has(n) || this.#i.set(n, e), this.current.set(n, n.v);
  }
  activate() {
    G = this;
  }
  deactivate() {
    G = null, ye = null;
    for (const n of Ei)
      if (Ei.delete(n), n(), G !== null)
        break;
  }
  neuter() {
    this.#f = !0;
  }
  flush() {
    Kn.length > 0 ? ks() : this.#p(), G === this && (this.#t === 0 && Ln.delete(this), this.deactivate());
  }
  /**
   * Append and remove branches to/from the DOM
   */
  #p() {
    if (!this.#f)
      for (const n of this.#o)
        n();
    this.#o.clear();
  }
  increment() {
    this.#t += 1;
  }
  decrement() {
    if (this.#t -= 1, this.#t === 0) {
      for (const n of this.#c)
        st(n, Et), kn(n);
      for (const n of this.#h)
        st(n, Wt), kn(n);
      this.#r = [], this.#n = [], this.flush();
    } else
      this.deactivate();
  }
  /** @param {() => void} fn */
  add_callback(n) {
    this.#o.add(n);
  }
  settled() {
    return (this.#l ??= is()).promise;
  }
  static ensure() {
    if (G === null) {
      const n = G = new An();
      Ln.add(G), An.enqueue(() => {
        G === n && n.flush();
      });
    }
    return G;
  }
  /** @param {() => void} task */
  static enqueue(n) {
    ke.length === 0 && queueMicrotask(Io), ke.unshift(n);
  }
}
function ks() {
  var t = bn;
  dr = !0;
  try {
    var n = 0;
    for (Ni(!0); Kn.length > 0; ) {
      var e = An.ensure();
      if (n++ > 1e3) {
        var r, i;
        Ts();
      }
      e.process(Kn), Jt.clear();
    }
  } finally {
    dr = !1, Ni(t), oi = null;
  }
}
function Ts() {
  try {
    ps();
  } catch (t) {
    ni(t, oi);
  }
}
let tn = null;
function Si(t) {
  var n = t.length;
  if (n !== 0) {
    for (var e = 0; e < n; ) {
      var r = t[e++];
      if ((r.f & (hn | At)) === 0 && se(r) && (tn = [], an(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? Uo(r) : r.fn = null), tn.length > 0)) {
        Jt.clear();
        for (const i of tn)
          an(i);
        tn = [];
      }
    }
    tn = null;
  }
}
function kn(t) {
  for (var n = oi = t; n.parent !== null; ) {
    n = n.parent;
    var e = n.f;
    if (dr && n === H && (e & $n) !== 0)
      return;
    if ((e & (cn | Yt)) !== 0) {
      if ((e & et) === 0) return;
      n.f ^= et;
    }
  }
  Kn.push(n);
}
const Jt = /* @__PURE__ */ new Map();
function Zn(t, n) {
  var e = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: So,
    rv: 0,
    wv: 0
  };
  return e;
}
// @__NO_SIDE_EFFECTS__
function Gt(t, n) {
  const e = Zn(t);
  return Bs(e), e;
}
// @__NO_SIDE_EFFECTS__
function Ut(t, n = !1, e = !0) {
  const r = Zn(t);
  return n || (r.equals = bo), Cn && e && K !== null && K.l !== null && (K.l.s ??= []).push(r), r;
}
function F(t, n, e = !1) {
  V !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!It || (V.f & xi) !== 0) && On() && (V.f & (vt | $n | Jr | xi)) !== 0 && !Vt?.includes(t) && gs();
  let r = e ? wn(n) : n;
  return Te(t, r);
}
function Te(t, n) {
  if (!t.equals(n)) {
    var e = t.v;
    pn ? Jt.set(t, n) : Jt.set(t, e), t.v = n;
    var r = An.ensure();
    r.capture(t, e), (t.f & vt) !== 0 && ((t.f & Et) !== 0 && ii(
      /** @type {Derived} */
      t
    ), st(t, (t.f & xt) === 0 ? et : Wt)), t.wv = Xo(), Ro(t, Et), On() && H !== null && (H.f & et) !== 0 && (H.f & (Yt | cn)) === 0 && (gt === null ? Xs([t]) : gt.push(t));
  }
  return n;
}
function nr(t) {
  F(t, t.v + 1);
}
function Ro(t, n) {
  var e = t.reactions;
  if (e !== null)
    for (var r = On(), i = e.length, o = 0; o < i; o++) {
      var a = e[o], s = a.f;
      if (!(!r && a === H)) {
        var u = (s & Et) === 0;
        u && st(a, n), (s & vt) !== 0 ? Ro(
          /** @type {Derived} */
          a,
          Wt
        ) : u && ((s & $n) !== 0 && tn !== null && tn.push(
          /** @type {Effect} */
          a
        ), kn(
          /** @type {Effect} */
          a
        ));
      }
    }
}
function wn(t) {
  if (typeof t != "object" || t === null || rn in t)
    return t;
  const n = Yr(t);
  if (n !== ns && n !== es)
    return t;
  var e = /* @__PURE__ */ new Map(), r = Br(t), i = /* @__PURE__ */ Gt(0), o = on, a = (s) => {
    if (on === o)
      return s();
    var u = V, f = on;
    $t(null), ki(o);
    var l = s();
    return $t(u), ki(f), l;
  };
  return r && e.set("length", /* @__PURE__ */ Gt(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(s, u, f) {
        (!("value" in f) || f.configurable === !1 || f.enumerable === !1 || f.writable === !1) && ds();
        var l = e.get(u);
        return l === void 0 ? l = a(() => {
          var h = /* @__PURE__ */ Gt(f.value);
          return e.set(u, h), h;
        }) : F(l, f.value, !0), !0;
      },
      deleteProperty(s, u) {
        var f = e.get(u);
        if (f === void 0) {
          if (u in s) {
            const l = a(() => /* @__PURE__ */ Gt(nt));
            e.set(u, l), nr(i);
          }
        } else
          F(f, nt), nr(i);
        return !0;
      },
      get(s, u, f) {
        if (u === rn)
          return t;
        var l = e.get(u), h = u in s;
        if (l === void 0 && (!h || Sn(s, u)?.writable) && (l = a(() => {
          var p = wn(h ? s[u] : nt), v = /* @__PURE__ */ Gt(p);
          return v;
        }), e.set(u, l)), l !== void 0) {
          var c = R(l);
          return c === nt ? void 0 : c;
        }
        return Reflect.get(s, u, f);
      },
      getOwnPropertyDescriptor(s, u) {
        var f = Reflect.getOwnPropertyDescriptor(s, u);
        if (f && "value" in f) {
          var l = e.get(u);
          l && (f.value = R(l));
        } else if (f === void 0) {
          var h = e.get(u), c = h?.v;
          if (h !== void 0 && c !== nt)
            return {
              enumerable: !0,
              configurable: !0,
              value: c,
              writable: !0
            };
        }
        return f;
      },
      has(s, u) {
        if (u === rn)
          return !0;
        var f = e.get(u), l = f !== void 0 && f.v !== nt || Reflect.has(s, u);
        if (f !== void 0 || H !== null && (!l || Sn(s, u)?.writable)) {
          f === void 0 && (f = a(() => {
            var c = l ? wn(s[u]) : nt, p = /* @__PURE__ */ Gt(c);
            return p;
          }), e.set(u, f));
          var h = R(f);
          if (h === nt)
            return !1;
        }
        return l;
      },
      set(s, u, f, l) {
        var h = e.get(u), c = u in s;
        if (r && u === "length")
          for (var p = f; p < /** @type {Source<number>} */
          h.v; p += 1) {
            var v = e.get(p + "");
            v !== void 0 ? F(v, nt) : p in s && (v = a(() => /* @__PURE__ */ Gt(nt)), e.set(p + "", v));
          }
        if (h === void 0)
          (!c || Sn(s, u)?.writable) && (h = a(() => /* @__PURE__ */ Gt(void 0)), F(h, wn(f)), e.set(u, h));
        else {
          c = h.v !== nt;
          var m = a(() => wn(f));
          F(h, m);
        }
        var w = Reflect.getOwnPropertyDescriptor(s, u);
        if (w?.set && w.set.call(l, f), !c) {
          if (r && typeof u == "string") {
            var x = (
              /** @type {Source<number>} */
              e.get("length")
            ), y = Number(u);
            Number.isInteger(y) && y >= x.v && F(x, y + 1);
          }
          nr(i);
        }
        return !0;
      },
      ownKeys(s) {
        R(i);
        var u = Reflect.ownKeys(s).filter((h) => {
          var c = e.get(h);
          return c === void 0 || c.v !== nt;
        });
        for (var [f, l] of e)
          l.v !== nt && !(f in s) && u.push(f);
        return u;
      },
      setPrototypeOf() {
        _s();
      }
    }
  );
}
var bi, Po, Co, $o;
function Is() {
  if (bi === void 0) {
    bi = window, Po = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, n = Node.prototype, e = Text.prototype;
    Co = Sn(n, "firstChild").get, $o = Sn(n, "nextSibling").get, wi(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), wi(e) && (e.__t = void 0);
  }
}
function Dn(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function Ie(t) {
  return Co.call(t);
}
// @__NO_SIDE_EFFECTS__
function Ge(t) {
  return $o.call(t);
}
function j(t, n) {
  return /* @__PURE__ */ Ie(t);
}
function _r(t, n) {
  {
    var e = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Ie(
        /** @type {Node} */
        t
      )
    );
    return e instanceof Comment && e.data === "" ? /* @__PURE__ */ Ge(e) : e;
  }
}
function rt(t, n = 1, e = !1) {
  let r = t;
  for (; n--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ Ge(r);
  return r;
}
function Rs(t) {
  t.textContent = "";
}
function Oo() {
  return !1;
}
let Mi = !1;
function Ps() {
  Mi || (Mi = !0, document.addEventListener(
    "reset",
    (t) => {
      Promise.resolve().then(() => {
        if (!t.defaultPrevented)
          for (
            const n of
            /**@type {HTMLFormElement} */
            t.target.elements
          )
            n.__on_r?.();
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possiblity of stopPropagation)
    { capture: !0 }
  ));
}
function Ke(t) {
  var n = V, e = H;
  $t(null), Qt(null);
  try {
    return t();
  } finally {
    $t(n), Qt(e);
  }
}
function Cs(t, n, e, r = e) {
  t.addEventListener(n, () => Ke(e));
  const i = t.__on_r;
  i ? t.__on_r = () => {
    i(), r(!0);
  } : t.__on_r = () => r(!0), Ps();
}
function Do(t) {
  H === null && V === null && hs(), V !== null && (V.f & xt) !== 0 && H === null && cs(), pn && fs();
}
function $s(t, n) {
  var e = n.last;
  e === null ? n.last = n.first = t : (e.next = t, t.prev = e, n.last = t);
}
function Ot(t, n, e, r = !0) {
  var i = H;
  i !== null && (i.f & At) !== 0 && (t |= At);
  var o = {
    ctx: K,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: t | Et,
    first: null,
    fn: n,
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
  if (e)
    try {
      an(o), o.f |= Gr;
    } catch (u) {
      throw Bt(o), u;
    }
  else n !== null && kn(o);
  var a = e && o.deps === null && o.first === null && o.nodes_start === null && o.teardown === null && (o.f & Zr) === 0;
  if (!a && r && (i !== null && $s(o, i), V !== null && (V.f & vt) !== 0 && (t & cn) === 0)) {
    var s = (
      /** @type {Derived} */
      V
    );
    (s.effects ??= []).push(o);
  }
  return o;
}
function Os(t) {
  const n = Ot(We, null, !1);
  return st(n, et), n.teardown = t, n;
}
function gr(t) {
  Do();
  var n = (
    /** @type {Effect} */
    H.f
  ), e = !V && (n & Yt) !== 0 && (n & Gr) === 0;
  if (e) {
    var r = (
      /** @type {ComponentContext} */
      K
    );
    (r.e ??= []).push(t);
  } else
    return zo(t);
}
function zo(t) {
  return Ot(Wr | Eo, t, !1);
}
function Ds(t) {
  return Do(), Ot(We | Eo, t, !0);
}
function zs(t) {
  An.ensure();
  const n = Ot(cn, t, !0);
  return (e = {}) => new Promise((r) => {
    e.outro ? ai(n, () => {
      Bt(n), r(void 0);
    }) : (Bt(n), r(void 0));
  });
}
function Ls(t) {
  return Ot(Wr, t, !1);
}
function qs(t, n) {
  var e = (
    /** @type {ComponentContextLegacy} */
    K
  ), r = { effect: null, ran: !1, deps: t };
  e.l.$.push(r), r.effect = Ze(() => {
    t(), !r.ran && (r.ran = !0, it(n));
  });
}
function Fs() {
  var t = (
    /** @type {ComponentContextLegacy} */
    K
  );
  Ze(() => {
    for (var n of t.l.$) {
      n.deps();
      var e = n.effect;
      (e.f & et) !== 0 && st(e, Wt), se(e) && an(e), n.ran = !1;
    }
  });
}
function Us(t) {
  return Ot(Jr | Zr, t, !0);
}
function Ze(t, n = 0) {
  return Ot(We | n, t, !0);
}
function gn(t, n = [], e = []) {
  Ns(n, e, (r) => {
    Ot(We, () => t(...r.map(R)), !0);
  });
}
function Lo(t, n = 0) {
  var e = Ot($n | n, t, !0);
  return e;
}
function Jn(t, n = !0) {
  return Ot(Yt, t, !0, n);
}
function qo(t) {
  var n = t.teardown;
  if (n !== null) {
    const e = pn, r = V;
    Ai(!0), $t(null);
    try {
      n.call(null);
    } finally {
      Ai(e), $t(r);
    }
  }
}
function Fo(t, n = !1) {
  var e = t.first;
  for (t.first = t.last = null; e !== null; ) {
    const i = e.ac;
    i !== null && Ke(() => {
      i.abort(Qr);
    });
    var r = e.next;
    (e.f & cn) !== 0 ? e.parent = null : Bt(e, n), e = r;
  }
}
function Hs(t) {
  for (var n = t.first; n !== null; ) {
    var e = n.next;
    (n.f & Yt) === 0 && Bt(n), n = e;
  }
}
function Bt(t, n = !0) {
  var e = !1;
  (n || (t.f & os) !== 0) && t.nodes_start !== null && t.nodes_end !== null && (Vs(
    t.nodes_start,
    /** @type {TemplateNode} */
    t.nodes_end
  ), e = !0), Fo(t, n && !e), Re(t, 0), st(t, hn);
  var r = t.transitions;
  if (r !== null)
    for (const o of r)
      o.stop();
  qo(t);
  var i = t.parent;
  i !== null && i.first !== null && Uo(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = t.ac = null;
}
function Vs(t, n) {
  for (; t !== null; ) {
    var e = t === n ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ge(t)
    );
    t.remove(), t = e;
  }
}
function Uo(t) {
  var n = t.parent, e = t.prev, r = t.next;
  e !== null && (e.next = r), r !== null && (r.prev = e), n !== null && (n.first === t && (n.first = r), n.last === t && (n.last = e));
}
function ai(t, n) {
  var e = [];
  si(t, e, !0), Ho(e, () => {
    Bt(t), n && n();
  });
}
function Ho(t, n) {
  var e = t.length;
  if (e > 0) {
    var r = () => --e || n();
    for (var i of t)
      i.out(r);
  } else
    n();
}
function si(t, n, e) {
  if ((t.f & At) === 0) {
    if (t.f ^= At, t.transitions !== null)
      for (const a of t.transitions)
        (a.is_global || e) && n.push(a);
    for (var r = t.first; r !== null; ) {
      var i = r.next, o = (r.f & Kr) !== 0 || (r.f & Yt) !== 0;
      si(r, n, o ? e : !1), r = i;
    }
  }
}
function ui(t) {
  Vo(t, !0);
}
function Vo(t, n) {
  if ((t.f & At) !== 0) {
    t.f ^= At, (t.f & et) === 0 && (st(t, Et), kn(t));
    for (var e = t.first; e !== null; ) {
      var r = e.next, i = (e.f & Kr) !== 0 || (e.f & Yt) !== 0;
      Vo(e, i ? n : !1), e = r;
    }
    if (t.transitions !== null)
      for (const o of t.transitions)
        (o.is_global || n) && o.in();
  }
}
let bn = !1;
function Ni(t) {
  bn = t;
}
let pn = !1;
function Ai(t) {
  pn = t;
}
let V = null, It = !1;
function $t(t) {
  V = t;
}
let H = null;
function Qt(t) {
  H = t;
}
let Vt = null;
function Bs(t) {
  V !== null && (Vt === null ? Vt = [t] : Vt.push(t));
}
let ot = null, ht = 0, gt = null;
function Xs(t) {
  gt = t;
}
let Bo = 1, Qn = 0, on = Qn;
function ki(t) {
  on = t;
}
let Zt = !1;
function Xo() {
  return ++Bo;
}
function se(t) {
  var n = t.f;
  if ((n & Et) !== 0)
    return !0;
  if ((n & Wt) !== 0) {
    var e = t.deps, r = (n & xt) !== 0;
    if (e !== null) {
      var i, o, a = (n & Me) !== 0, s = r && H !== null && !Zt, u = e.length;
      if ((a || s) && (H === null || (H.f & hn) === 0)) {
        var f = (
          /** @type {Derived} */
          t
        ), l = f.parent;
        for (i = 0; i < u; i++)
          o = e[i], (a || !o?.reactions?.includes(f)) && (o.reactions ??= []).push(f);
        a && (f.f ^= Me), s && l !== null && (l.f & xt) === 0 && (f.f ^= xt);
      }
      for (i = 0; i < u; i++)
        if (o = e[i], se(
          /** @type {Derived} */
          o
        ) && ko(
          /** @type {Derived} */
          o
        ), o.wv > t.wv)
          return !0;
    }
    (!r || H !== null && !Zt) && st(t, et);
  }
  return !1;
}
function Yo(t, n, e = !0) {
  var r = t.reactions;
  if (r !== null && !Vt?.includes(t))
    for (var i = 0; i < r.length; i++) {
      var o = r[i];
      (o.f & vt) !== 0 ? Yo(
        /** @type {Derived} */
        o,
        n,
        !1
      ) : n === o && (e ? st(o, Et) : (o.f & et) !== 0 && st(o, Wt), kn(
        /** @type {Effect} */
        o
      ));
    }
}
function Wo(t) {
  var n = ot, e = ht, r = gt, i = V, o = Zt, a = Vt, s = K, u = It, f = on, l = t.f;
  ot = /** @type {null | Value[]} */
  null, ht = 0, gt = null, Zt = (l & xt) !== 0 && (It || !bn || V === null), V = (l & (Yt | cn)) === 0 ? t : null, Vt = null, Ne(t.ctx), It = !1, on = ++Qn, t.ac !== null && (Ke(() => {
    t.ac.abort(Qr);
  }), t.ac = null);
  try {
    t.f |= vr;
    var h = (
      /** @type {Function} */
      t.fn
    ), c = h(), p = t.deps;
    if (ot !== null) {
      var v;
      if (Re(t, ht), p !== null && ht > 0)
        for (p.length = ht + ot.length, v = 0; v < ot.length; v++)
          p[ht + v] = ot[v];
      else
        t.deps = p = ot;
      if (!Zt || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      (l & vt) !== 0 && /** @type {import('#client').Derived} */
      t.reactions !== null)
        for (v = ht; v < p.length; v++)
          (p[v].reactions ??= []).push(t);
    } else p !== null && ht < p.length && (Re(t, ht), p.length = ht);
    if (On() && gt !== null && !It && p !== null && (t.f & (vt | Wt | Et)) === 0)
      for (v = 0; v < /** @type {Source[]} */
      gt.length; v++)
        Yo(
          gt[v],
          /** @type {Effect} */
          t
        );
    return i !== null && i !== t && (Qn++, gt !== null && (r === null ? r = gt : r.push(.../** @type {Source[]} */
    gt))), (t.f & en) !== 0 && (t.f ^= en), c;
  } catch (m) {
    return xs(m);
  } finally {
    t.f ^= vr, ot = n, ht = e, gt = r, V = i, Zt = o, Vt = a, Ne(s), It = u, on = f;
  }
}
function Ys(t, n) {
  let e = n.reactions;
  if (e !== null) {
    var r = ts.call(e, t);
    if (r !== -1) {
      var i = e.length - 1;
      i === 0 ? e = n.reactions = null : (e[r] = e[i], e.pop());
    }
  }
  e === null && (n.f & vt) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ot === null || !ot.includes(n)) && (st(n, Wt), (n.f & (xt | Me)) === 0 && (n.f ^= Me), Ao(
    /** @type {Derived} **/
    n
  ), Re(
    /** @type {Derived} **/
    n,
    0
  ));
}
function Re(t, n) {
  var e = t.deps;
  if (e !== null)
    for (var r = n; r < e.length; r++)
      Ys(t, e[r]);
}
function an(t) {
  var n = t.f;
  if ((n & hn) === 0) {
    st(t, et);
    var e = H, r = bn;
    H = t, bn = !0;
    try {
      (n & $n) !== 0 ? Hs(t) : Fo(t), qo(t);
      var i = Wo(t);
      t.teardown = typeof i == "function" ? i : null, t.wv = Bo;
      var o;
      yo && Va && (t.f & Et) !== 0 && t.deps;
    } finally {
      bn = r, H = e;
    }
  }
}
function R(t) {
  var n = t.f, e = (n & vt) !== 0;
  if (V !== null && !It) {
    var r = H !== null && (H.f & hn) !== 0;
    if (!r && !Vt?.includes(t)) {
      var i = V.deps;
      if ((V.f & vr) !== 0)
        t.rv < Qn && (t.rv = Qn, ot === null && i !== null && i[ht] === t ? ht++ : ot === null ? ot = [t] : (!Zt || !ot.includes(t)) && ot.push(t));
      else {
        (V.deps ??= []).push(t);
        var o = t.reactions;
        o === null ? t.reactions = [V] : o.includes(V) || o.push(V);
      }
    }
  } else if (e && /** @type {Derived} */
  t.deps === null && /** @type {Derived} */
  t.effects === null) {
    var a = (
      /** @type {Derived} */
      t
    ), s = a.parent;
    s !== null && (s.f & xt) === 0 && (a.f ^= xt);
  }
  if (pn) {
    if (Jt.has(t))
      return Jt.get(t);
    if (e) {
      a = /** @type {Derived} */
      t;
      var u = a.v;
      return ((a.f & et) === 0 && a.reactions !== null || Go(a)) && (u = ii(a)), Jt.set(a, u), u;
    }
  } else if (e) {
    if (a = /** @type {Derived} */
    t, Nn?.has(a))
      return Nn.get(a);
    se(a) && ko(a);
  }
  if ((t.f & en) !== 0)
    throw t.v;
  return t.v;
}
function Go(t) {
  if (t.v === nt) return !0;
  if (t.deps === null) return !1;
  for (const n of t.deps)
    if (Jt.has(n) || (n.f & vt) !== 0 && Go(
      /** @type {Derived} */
      n
    ))
      return !0;
  return !1;
}
function it(t) {
  var n = It;
  try {
    return It = !0, t();
  } finally {
    It = n;
  }
}
const Ws = -7169;
function st(t, n) {
  t.f = t.f & Ws | n;
}
function Ko(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if (rn in t)
      mr(t);
    else if (!Array.isArray(t))
      for (let n in t) {
        const e = t[n];
        typeof e == "object" && e && rn in e && mr(e);
      }
  }
}
function mr(t, n = /* @__PURE__ */ new Set()) {
  if (typeof t == "object" && t !== null && // We don't want to traverse DOM elements
  !(t instanceof EventTarget) && !n.has(t)) {
    n.add(t), t instanceof Date && t.getTime();
    for (let r in t)
      try {
        mr(t[r], n);
      } catch {
      }
    const e = Yr(t);
    if (e !== Object.prototype && e !== Array.prototype && e !== Map.prototype && e !== Set.prototype && e !== Date.prototype) {
      const r = wo(e);
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
const Gs = /* @__PURE__ */ new Set(), Ti = /* @__PURE__ */ new Set();
function Ks(t, n, e, r = {}) {
  function i(o) {
    if (r.capture || Un.call(n, o), !o.cancelBubble)
      return Ke(() => e?.call(this, o));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? No(() => {
    n.addEventListener(t, i, r);
  }) : n.addEventListener(t, i, r), i;
}
function qt(t, n, e, r, i) {
  var o = { capture: r, passive: i }, a = Ks(t, n, e, o);
  (n === document.body || // @ts-ignore
  n === window || // @ts-ignore
  n === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  n instanceof HTMLMediaElement) && Os(() => {
    n.removeEventListener(t, a, o);
  });
}
let Ii = null;
function Un(t) {
  var n = this, e = (
    /** @type {Node} */
    n.ownerDocument
  ), r = t.type, i = t.composedPath?.() || [], o = (
    /** @type {null | Element} */
    i[0] || t.target
  );
  Ii = t;
  var a = 0, s = Ii === t && t.__root;
  if (s) {
    var u = i.indexOf(s);
    if (u !== -1 && (n === document || n === /** @type {any} */
    window)) {
      t.__root = n;
      return;
    }
    var f = i.indexOf(n);
    if (f === -1)
      return;
    u <= f && (a = u);
  }
  if (o = /** @type {Element} */
  i[a] || t.target, o !== n) {
    hr(t, "currentTarget", {
      configurable: !0,
      get() {
        return o || e;
      }
    });
    var l = V, h = H;
    $t(null), Qt(null);
    try {
      for (var c, p = []; o !== null; ) {
        var v = o.assignedSlot || o.parentNode || /** @type {any} */
        o.host || null;
        try {
          var m = o["__" + r];
          if (m != null && (!/** @type {any} */
          o.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === o))
            if (Br(m)) {
              var [w, ...x] = m;
              w.apply(o, [t, ...x]);
            } else
              m.call(o, t);
        } catch (y) {
          c ? p.push(y) : c = y;
        }
        if (t.cancelBubble || v === n || v === null)
          break;
        o = v;
      }
      if (c) {
        for (let y of p)
          queueMicrotask(() => {
            throw y;
          });
        throw c;
      }
    } finally {
      t.__root = n, delete t.currentTarget, $t(l), Qt(h);
    }
  }
}
function Zs(t) {
  var n = document.createElement("template");
  return n.innerHTML = t.replaceAll("<!>", "<!---->"), n.content;
}
function Pe(t, n) {
  var e = (
    /** @type {Effect} */
    H
  );
  e.nodes_start === null && (e.nodes_start = t, e.nodes_end = n);
}
// @__NO_SIDE_EFFECTS__
function Dt(t, n) {
  var e = (n & Ja) !== 0, r = (n & Qa) !== 0, i, o = !t.startsWith("<!>");
  return () => {
    i === void 0 && (i = Zs(o ? t : "<!>" + t), e || (i = /** @type {Node} */
    /* @__PURE__ */ Ie(i)));
    var a = (
      /** @type {TemplateNode} */
      r || Po ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (e) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ie(a)
      ), u = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      Pe(s, u);
    } else
      Pe(a, a);
    return a;
  };
}
function Js(t = "") {
  {
    var n = Dn(t + "");
    return Pe(n, n), n;
  }
}
function Qs() {
  var t = document.createDocumentFragment(), n = document.createComment(""), e = Dn();
  return t.append(n, e), Pe(n, e), t;
}
function mt(t, n) {
  t !== null && t.before(
    /** @type {Node} */
    n
  );
}
const js = ["touchstart", "touchmove"];
function tu(t) {
  return js.includes(t);
}
function mn(t, n) {
  var e = n == null ? "" : typeof n == "object" ? n + "" : n;
  e !== (t.__t ??= t.nodeValue) && (t.__t = e, t.nodeValue = e + "");
}
function nu(t, n) {
  return eu(t, n);
}
const _n = /* @__PURE__ */ new Map();
function eu(t, { target: n, anchor: e, props: r = {}, events: i, context: o, intro: a = !0 }) {
  Is();
  var s = /* @__PURE__ */ new Set(), u = (h) => {
    for (var c = 0; c < h.length; c++) {
      var p = h[c];
      if (!s.has(p)) {
        s.add(p);
        var v = tu(p);
        n.addEventListener(p, Un, { passive: v });
        var m = _n.get(p);
        m === void 0 ? (document.addEventListener(p, Un, { passive: v }), _n.set(p, 1)) : _n.set(p, m + 1);
      }
    }
  };
  u(Xr(Gs)), Ti.add(u);
  var f = void 0, l = zs(() => {
    var h = e ?? n.appendChild(Dn());
    return Jn(() => {
      if (o) {
        jr({});
        var c = (
          /** @type {ComponentContext} */
          K
        );
        c.c = o;
      }
      i && (r.$$events = i), f = t(h, r) || {}, o && ti();
    }), () => {
      for (var c of s) {
        n.removeEventListener(c, Un);
        var p = (
          /** @type {number} */
          _n.get(c)
        );
        --p === 0 ? (document.removeEventListener(c, Un), _n.delete(c)) : _n.set(c, p);
      }
      Ti.delete(u), h !== e && h.parentNode?.removeChild(h);
    };
  });
  return yr.set(f, l), f;
}
let yr = /* @__PURE__ */ new WeakMap();
function ru(t, n) {
  const e = yr.get(t);
  return e ? (yr.delete(t), e(n)) : Promise.resolve();
}
function Zo(t) {
  K === null && us(), Cn && K.l !== null ? iu(K).m.push(t) : gr(() => {
    const n = it(t);
    if (typeof n == "function") return (
      /** @type {() => void} */
      n
    );
  });
}
function iu(t) {
  var n = (
    /** @type {ComponentContextLegacy} */
    t.l
  );
  return n.u ??= { a: [], b: [], m: [] };
}
function xn(t, n, e = !1) {
  var r = t, i = null, o = null, a = nt, s = e ? Kr : 0, u = !1;
  const f = (p, v = !0) => {
    u = !0, c(v, p);
  };
  var l = null;
  function h() {
    l !== null && (l.lastChild.remove(), r.before(l), l = null);
    var p = a ? i : o, v = a ? o : i;
    p && ui(p), v && ai(v, () => {
      a ? o = null : i = null;
    });
  }
  const c = (p, v) => {
    if (a !== (a = p)) {
      var m = Oo(), w = r;
      if (m && (l = document.createDocumentFragment(), l.append(w = Dn())), a ? i ??= v && Jn(() => v(w)) : o ??= v && Jn(() => v(w)), m) {
        var x = (
          /** @type {Batch} */
          G
        ), y = a ? i : o, S = a ? o : i;
        y && x.skipped_effects.delete(y), S && x.skipped_effects.add(S), x.add_callback(h);
      } else
        h();
    }
  };
  Lo(() => {
    u = !1, n(f), u || c(null, null);
  }, s);
}
function ou(t, n) {
  return n;
}
function au(t, n, e) {
  for (var r = t.items, i = [], o = n.length, a = 0; a < o; a++)
    si(n[a].e, i, !0);
  var s = o > 0 && i.length === 0 && e !== null;
  if (s) {
    var u = (
      /** @type {Element} */
      /** @type {Element} */
      e.parentNode
    );
    Rs(u), u.append(
      /** @type {Element} */
      e
    ), r.clear(), Tt(t, n[0].prev, n[o - 1].next);
  }
  Ho(i, () => {
    for (var f = 0; f < o; f++) {
      var l = n[f];
      s || (r.delete(l.k), Tt(t, l.prev, l.next)), Bt(l.e, !s);
    }
  });
}
function su(t, n, e, r, i, o = null) {
  var a = t, s = { flags: n, items: /* @__PURE__ */ new Map(), first: null };
  {
    var u = (
      /** @type {Element} */
      t
    );
    a = u.appendChild(Dn());
  }
  var f = null, l = !1, h = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ ri(() => {
    var w = e();
    return Br(w) ? w : w == null ? [] : Xr(w);
  }), p, v;
  function m() {
    uu(
      v,
      p,
      s,
      h,
      a,
      i,
      n,
      r,
      e
    ), o !== null && (p.length === 0 ? f ? ui(f) : f = Jn(() => o(a)) : f !== null && ai(f, () => {
      f = null;
    }));
  }
  Lo(() => {
    v ??= /** @type {Effect} */
    H, p = /** @type {V[]} */
    R(c);
    var w = p.length;
    if (!(l && w === 0)) {
      l = w === 0;
      var x, y, S, b;
      if (Oo()) {
        var I = /* @__PURE__ */ new Set(), P = (
          /** @type {Batch} */
          G
        );
        for (y = 0; y < w; y += 1) {
          S = p[y], b = r(S, y);
          var z = s.items.get(b) ?? h.get(b);
          z ? Jo(z, S, y) : (x = Qo(
            null,
            s,
            null,
            null,
            S,
            b,
            y,
            i,
            n,
            e,
            !0
          ), h.set(b, x)), I.add(b);
        }
        for (const [O, $] of s.items)
          I.has(O) || P.skipped_effects.add($.e);
        P.add_callback(m);
      } else
        m();
      R(c);
    }
  });
}
function uu(t, n, e, r, i, o, a, s, u) {
  var f = n.length, l = e.items, h = e.first, c = h, p, v = null, m = [], w = [], x, y, S, b;
  for (b = 0; b < f; b += 1) {
    if (x = n[b], y = s(x, b), S = l.get(y), S === void 0) {
      var I = r.get(y);
      if (I !== void 0) {
        r.delete(y), l.set(y, I);
        var P = v ? v.next : c;
        Tt(e, v, I), Tt(e, I, P), er(I, P, i), v = I;
      } else {
        var z = c ? (
          /** @type {TemplateNode} */
          c.e.nodes_start
        ) : i;
        v = Qo(
          z,
          e,
          v,
          v === null ? e.first : v.next,
          x,
          y,
          b,
          o,
          a,
          u
        );
      }
      l.set(y, v), m = [], w = [], c = v.next;
      continue;
    }
    if (Jo(S, x, b), (S.e.f & At) !== 0 && ui(S.e), S !== c) {
      if (p !== void 0 && p.has(S)) {
        if (m.length < w.length) {
          var O = w[0], $;
          v = O.prev;
          var q = m[0], N = m[m.length - 1];
          for ($ = 0; $ < m.length; $ += 1)
            er(m[$], O, i);
          for ($ = 0; $ < w.length; $ += 1)
            p.delete(w[$]);
          Tt(e, q.prev, N.next), Tt(e, v, q), Tt(e, N, O), c = O, v = N, b -= 1, m = [], w = [];
        } else
          p.delete(S), er(S, c, i), Tt(e, S.prev, S.next), Tt(e, S, v === null ? e.first : v.next), Tt(e, v, S), v = S;
        continue;
      }
      for (m = [], w = []; c !== null && c.k !== y; )
        (c.e.f & At) === 0 && (p ??= /* @__PURE__ */ new Set()).add(c), w.push(c), c = c.next;
      if (c === null)
        continue;
      S = c;
    }
    m.push(S), v = S, c = S.next;
  }
  if (c !== null || p !== void 0) {
    for (var T = p === void 0 ? [] : Xr(p); c !== null; )
      (c.e.f & At) === 0 && T.push(c), c = c.next;
    var C = T.length;
    if (C > 0) {
      var d = f === 0 ? i : null;
      au(e, T, d);
    }
  }
  t.first = e.first && e.first.e, t.last = v && v.e;
  for (var _ of r.values())
    Bt(_.e);
  r.clear();
}
function Jo(t, n, e, r) {
  Te(t.v, n), t.i = e;
}
function Qo(t, n, e, r, i, o, a, s, u, f, l) {
  var h = (u & Xa) !== 0, c = (u & Wa) === 0, p = h ? c ? /* @__PURE__ */ Ut(i, !1, !1) : Zn(i) : i, v = (u & Ya) === 0 ? a : Zn(a), m = {
    i: v,
    v: p,
    k: o,
    a: null,
    // @ts-expect-error
    e: null,
    prev: e,
    next: r
  };
  try {
    if (t === null) {
      var w = document.createDocumentFragment();
      w.append(t = Dn());
    }
    return m.e = Jn(() => s(
      /** @type {Node} */
      t,
      p,
      v,
      f
    ), ms), m.e.prev = e && e.e, m.e.next = r && r.e, e === null ? l || (n.first = m) : (e.next = m, e.e.next = m.e), r !== null && (r.prev = m, r.e.prev = m.e), m;
  } finally {
  }
}
function er(t, n, e) {
  for (var r = t.next ? (
    /** @type {TemplateNode} */
    t.next.e.nodes_start
  ) : e, i = n ? (
    /** @type {TemplateNode} */
    n.e.nodes_start
  ) : e, o = (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ); o !== null && o !== r; ) {
    var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ge(o)
    );
    i.before(o), o = a;
  }
}
function Tt(t, n, e) {
  n === null ? t.first = e : (n.next = e, n.e.next = e && e.e), e !== null && (e.prev = n, e.e.prev = n && n.e);
}
const lu = Symbol("is custom element"), fu = Symbol("is html");
function Ri(t, n, e, r) {
  var i = cu(t);
  i[n] !== (i[n] = e) && (e == null ? t.removeAttribute(n) : typeof e != "string" && hu(t).includes(n) ? t[n] = e : t.setAttribute(n, e));
}
function cu(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    t.__attributes ??= {
      [lu]: t.nodeName.includes("-"),
      [fu]: t.namespaceURI === ja
    }
  );
}
var Pi = /* @__PURE__ */ new Map();
function hu(t) {
  var n = Pi.get(t.nodeName);
  if (n) return n;
  Pi.set(t.nodeName, n = []);
  for (var e, r = t, i = Element.prototype; i !== r; ) {
    e = wo(r);
    for (var o in e)
      e[o].set && n.push(o);
    r = Yr(r);
  }
  return n;
}
function pu(t, n, e = n) {
  var r = On(), i = /* @__PURE__ */ new WeakSet();
  Cs(t, "input", (o) => {
    var a = o ? t.defaultValue : t.value;
    if (a = rr(t) ? ir(a) : a, e(a), G !== null && i.add(G), r && a !== (a = n())) {
      var s = t.selectionStart, u = t.selectionEnd;
      t.value = a ?? "", u !== null && (t.selectionStart = s, t.selectionEnd = Math.min(u, t.value.length));
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  it(n) == null && t.value && (e(rr(t) ? ir(t.value) : t.value), G !== null && i.add(G)), Ze(() => {
    var o = n();
    if (t === document.activeElement) {
      var a = (
        /** @type {Batch} */
        ye ?? G
      );
      if (i.has(a))
        return;
    }
    rr(t) && o === ir(t.value) || t.type === "date" && !o && !t.value || o !== t.value && (t.value = o ?? "");
  });
}
function rr(t) {
  var n = t.type;
  return n === "number" || n === "range";
}
function ir(t) {
  return t === "" ? null : +t;
}
function Ci(t, n) {
  return t === n || t?.[rn] === n;
}
function vu(t = {}, n, e, r) {
  return Ls(() => {
    var i, o;
    return Ze(() => {
      i = o, o = [], it(() => {
        t !== e(...o) && (n(t, ...o), i && Ci(e(...i), t) && n(null, ...i));
      });
    }), () => {
      No(() => {
        o && Ci(e(...o), t) && n(null, ...o);
      });
    };
  }), t;
}
function jo(t = !1) {
  const n = (
    /** @type {ComponentContextLegacy} */
    K
  ), e = n.l.u;
  if (!e) return;
  let r = () => Ko(n.s);
  if (t) {
    let i = 0, o = (
      /** @type {Record<string, any>} */
      {}
    );
    const a = /* @__PURE__ */ ei(() => {
      let s = !1;
      const u = n.s;
      for (const f in u)
        u[f] !== o[f] && (o[f] = u[f], s = !0);
      return s && i++, i;
    });
    r = () => R(a);
  }
  e.b.length && Ds(() => {
    $i(n, r), pr(e.b);
  }), gr(() => {
    const i = it(() => e.m.map(rs));
    return () => {
      for (const o of i)
        typeof o == "function" && o();
    };
  }), e.a.length && gr(() => {
    $i(n, r), pr(e.a);
  });
}
function $i(t, n) {
  if (t.l.s)
    for (const e of t.l.s) R(e);
  n();
}
let fe = !1;
function du(t) {
  var n = fe;
  try {
    return fe = !1, [t(), fe];
  } finally {
    fe = n;
  }
}
function _u(t, n, e, r) {
  var i = !Cn || (e & Ga) !== 0, o = (e & Za) !== 0, a = (
    /** @type {V} */
    r
  ), s = !0, u = () => (s && (s = !1, a = /** @type {V} */
  r), a), f;
  {
    var l = rn in t || as in t;
    f = Sn(t, n)?.set ?? (l && n in t ? (y) => t[n] = y : void 0);
  }
  var h, c = !1;
  [h, c] = du(() => (
    /** @type {V} */
    t[n]
  )), h === void 0 && r !== void 0 && (h = u(), f && (i && vs(), f(h)));
  var p;
  if (i ? p = () => {
    var y = (
      /** @type {V} */
      t[n]
    );
    return y === void 0 ? u() : (s = !0, y);
  } : p = () => {
    var y = (
      /** @type {V} */
      t[n]
    );
    return y !== void 0 && (a = /** @type {V} */
    void 0), y === void 0 ? a : y;
  }, i && (e & Ka) === 0)
    return p;
  if (f) {
    var v = t.$$legacy;
    return (
      /** @type {() => V} */
      (function(y, S) {
        return arguments.length > 0 ? ((!i || !S || v || c) && f(S ? p() : y), y) : p();
      })
    );
  }
  var m = !1, w = /* @__PURE__ */ ri(() => (m = !1, p()));
  R(w);
  var x = (
    /** @type {Effect} */
    H
  );
  return (
    /** @type {() => V} */
    (function(y, S) {
      if (arguments.length > 0) {
        const b = S ? R(w) : i && o ? wn(y) : y;
        return F(w, b), m = !0, a !== void 0 && (a = b), y;
      }
      return pn && m || (x.f & hn) !== 0 ? w.v : R(w);
    })
  );
}
class un {
  constructor() {
    this._partials = new Float64Array(32), this._n = 0;
  }
  add(n) {
    const e = this._partials;
    let r = 0;
    for (let i = 0; i < this._n && i < 32; i++) {
      const o = e[i], a = n + o, s = Math.abs(n) < Math.abs(o) ? n - (a - o) : o - (a - n);
      s && (e[r++] = s), n = a;
    }
    return e[r] = n, this._n = r + 1, this;
  }
  valueOf() {
    const n = this._partials;
    let e = this._n, r, i, o, a = 0;
    if (e > 0) {
      for (a = n[--e]; e > 0 && (r = a, i = n[--e], a = r + i, o = i - (a - r), !o); )
        ;
      e > 0 && (o < 0 && n[e - 1] < 0 || o > 0 && n[e - 1] > 0) && (i = o * 2, r = a + i, i == r - a && (a = r));
    }
    return a;
  }
}
function* gu(t) {
  for (const n of t)
    yield* n;
}
function ta(t) {
  return Array.from(gu(t));
}
var mu = { value: () => {
} };
function li() {
  for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
    if (!(r = arguments[t] + "") || r in e || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new we(e);
}
function we(t) {
  this._ = t;
}
function yu(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !n.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
we.prototype = li.prototype = {
  constructor: we,
  on: function(t, n) {
    var e = this._, r = yu(t + "", e), i, o = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++o < a; ) if ((i = (t = r[o]).type) && (i = wu(e[i], t.name))) return i;
      return;
    }
    if (n != null && typeof n != "function") throw new Error("invalid callback: " + n);
    for (; ++o < a; )
      if (i = (t = r[o]).type) e[i] = Oi(e[i], t.name, n);
      else if (n == null) for (i in e) e[i] = Oi(e[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n) t[e] = n[e].slice();
    return new we(t);
  },
  call: function(t, n) {
    if ((i = arguments.length - 2) > 0) for (var e = new Array(i), r = 0, i, o; r < i; ++r) e[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (o = this._[t], r = 0, i = o.length; r < i; ++r) o[r].value.apply(n, e);
  },
  apply: function(t, n, e) {
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, o = r.length; i < o; ++i) r[i].value.apply(n, e);
  }
};
function wu(t, n) {
  for (var e = 0, r = t.length, i; e < r; ++e)
    if ((i = t[e]).name === n)
      return i.value;
}
function Oi(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      t[r] = mu, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var wr = "http://www.w3.org/1999/xhtml";
const Di = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: wr,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Je(t) {
  var n = t += "", e = n.indexOf(":");
  return e >= 0 && (n = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)), Di.hasOwnProperty(n) ? { space: Di[n], local: t } : t;
}
function xu(t) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === wr && n.documentElement.namespaceURI === wr ? n.createElement(t) : n.createElementNS(e, t);
  };
}
function Eu(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function na(t) {
  var n = Je(t);
  return (n.local ? Eu : xu)(n);
}
function Su() {
}
function fi(t) {
  return t == null ? Su : function() {
    return this.querySelector(t);
  };
}
function bu(t) {
  typeof t != "function" && (t = fi(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = new Array(a), u, f, l = 0; l < a; ++l)
      (u = o[l]) && (f = t.call(u, u.__data__, l, o)) && ("__data__" in u && (f.__data__ = u.__data__), s[l] = f);
  return new dt(r, this._parents);
}
function Mu(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function Nu() {
  return [];
}
function ea(t) {
  return t == null ? Nu : function() {
    return this.querySelectorAll(t);
  };
}
function Au(t) {
  return function() {
    return Mu(t.apply(this, arguments));
  };
}
function ku(t) {
  typeof t == "function" ? t = Au(t) : t = ea(t);
  for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o)
    for (var a = n[o], s = a.length, u, f = 0; f < s; ++f)
      (u = a[f]) && (r.push(t.call(u, u.__data__, f, a)), i.push(u));
  return new dt(r, i);
}
function ra(t) {
  return function() {
    return this.matches(t);
  };
}
function ia(t) {
  return function(n) {
    return n.matches(t);
  };
}
var Tu = Array.prototype.find;
function Iu(t) {
  return function() {
    return Tu.call(this.children, t);
  };
}
function Ru() {
  return this.firstElementChild;
}
function Pu(t) {
  return this.select(t == null ? Ru : Iu(typeof t == "function" ? t : ia(t)));
}
var Cu = Array.prototype.filter;
function $u() {
  return Array.from(this.children);
}
function Ou(t) {
  return function() {
    return Cu.call(this.children, t);
  };
}
function Du(t) {
  return this.selectAll(t == null ? $u : Ou(typeof t == "function" ? t : ia(t)));
}
function zu(t) {
  typeof t != "function" && (t = ra(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = [], u, f = 0; f < a; ++f)
      (u = o[f]) && t.call(u, u.__data__, f, o) && s.push(u);
  return new dt(r, this._parents);
}
function oa(t) {
  return new Array(t.length);
}
function Lu() {
  return new dt(this._enter || this._groups.map(oa), this._parents);
}
function Ce(t, n) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
}
Ce.prototype = {
  constructor: Ce,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, n) {
    return this._parent.insertBefore(t, n);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function qu(t) {
  return function() {
    return t;
  };
}
function Fu(t, n, e, r, i, o) {
  for (var a = 0, s, u = n.length, f = o.length; a < f; ++a)
    (s = n[a]) ? (s.__data__ = o[a], r[a] = s) : e[a] = new Ce(t, o[a]);
  for (; a < u; ++a)
    (s = n[a]) && (i[a] = s);
}
function Uu(t, n, e, r, i, o, a) {
  var s, u, f = /* @__PURE__ */ new Map(), l = n.length, h = o.length, c = new Array(l), p;
  for (s = 0; s < l; ++s)
    (u = n[s]) && (c[s] = p = a.call(u, u.__data__, s, n) + "", f.has(p) ? i[s] = u : f.set(p, u));
  for (s = 0; s < h; ++s)
    p = a.call(t, o[s], s, o) + "", (u = f.get(p)) ? (r[s] = u, u.__data__ = o[s], f.delete(p)) : e[s] = new Ce(t, o[s]);
  for (s = 0; s < l; ++s)
    (u = n[s]) && f.get(c[s]) === u && (i[s] = u);
}
function Hu(t) {
  return t.__data__;
}
function Vu(t, n) {
  if (!arguments.length) return Array.from(this, Hu);
  var e = n ? Uu : Fu, r = this._parents, i = this._groups;
  typeof t != "function" && (t = qu(t));
  for (var o = i.length, a = new Array(o), s = new Array(o), u = new Array(o), f = 0; f < o; ++f) {
    var l = r[f], h = i[f], c = h.length, p = Bu(t.call(l, l && l.__data__, f, r)), v = p.length, m = s[f] = new Array(v), w = a[f] = new Array(v), x = u[f] = new Array(c);
    e(l, h, m, w, x, p, n);
    for (var y = 0, S = 0, b, I; y < v; ++y)
      if (b = m[y]) {
        for (y >= S && (S = y + 1); !(I = w[S]) && ++S < v; ) ;
        b._next = I || null;
      }
  }
  return a = new dt(a, r), a._enter = s, a._exit = u, a;
}
function Bu(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Xu() {
  return new dt(this._exit || this._groups.map(oa), this._parents);
}
function Yu(t, n, e) {
  var r = this.enter(), i = this, o = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), n != null && (i = n(i), i && (i = i.selection())), e == null ? o.remove() : e(o), r && i ? r.merge(i).order() : i;
}
function Wu(t) {
  for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, o = r.length, a = Math.min(i, o), s = new Array(i), u = 0; u < a; ++u)
    for (var f = e[u], l = r[u], h = f.length, c = s[u] = new Array(h), p, v = 0; v < h; ++v)
      (p = f[v] || l[v]) && (c[v] = p);
  for (; u < i; ++u)
    s[u] = e[u];
  return new dt(s, this._parents);
}
function Gu() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var r = t[n], i = r.length - 1, o = r[i], a; --i >= 0; )
      (a = r[i]) && (o && a.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(a, o), o = a);
  return this;
}
function Ku(t) {
  t || (t = Zu);
  function n(h, c) {
    return h && c ? t(h.__data__, c.__data__) : !h - !c;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
    for (var a = e[o], s = a.length, u = i[o] = new Array(s), f, l = 0; l < s; ++l)
      (f = a[l]) && (u[l] = f);
    u.sort(n);
  }
  return new dt(i, this._parents).order();
}
function Zu(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function Ju() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function Qu() {
  return Array.from(this);
}
function ju() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
      var a = r[i];
      if (a) return a;
    }
  return null;
}
function tl() {
  let t = 0;
  for (const n of this) ++t;
  return t;
}
function nl() {
  return !this.node();
}
function el(t) {
  for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
    for (var i = n[e], o = 0, a = i.length, s; o < a; ++o)
      (s = i[o]) && t.call(s, s.__data__, o, i);
  return this;
}
function rl(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function il(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function ol(t, n) {
  return function() {
    this.setAttribute(t, n);
  };
}
function al(t, n) {
  return function() {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function sl(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function ul(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
  };
}
function ll(t, n) {
  var e = Je(t);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((n == null ? e.local ? il : rl : typeof n == "function" ? e.local ? ul : sl : e.local ? al : ol)(e, n));
}
function aa(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function fl(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function cl(t, n, e) {
  return function() {
    this.style.setProperty(t, n, e);
  };
}
function hl(t, n, e) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
  };
}
function pl(t, n, e) {
  return arguments.length > 1 ? this.each((n == null ? fl : typeof n == "function" ? hl : cl)(t, n, e ?? "")) : Tn(this.node(), t);
}
function Tn(t, n) {
  return t.style.getPropertyValue(n) || aa(t).getComputedStyle(t, null).getPropertyValue(n);
}
function vl(t) {
  return function() {
    delete this[t];
  };
}
function dl(t, n) {
  return function() {
    this[t] = n;
  };
}
function _l(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? delete this[t] : this[t] = e;
  };
}
function gl(t, n) {
  return arguments.length > 1 ? this.each((n == null ? vl : typeof n == "function" ? _l : dl)(t, n)) : this.node()[t];
}
function sa(t) {
  return t.trim().split(/^|\s+/);
}
function ci(t) {
  return t.classList || new ua(t);
}
function ua(t) {
  this._node = t, this._names = sa(t.getAttribute("class") || "");
}
ua.prototype = {
  add: function(t) {
    var n = this._names.indexOf(t);
    n < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var n = this._names.indexOf(t);
    n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function la(t, n) {
  for (var e = ci(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
}
function fa(t, n) {
  for (var e = ci(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
}
function ml(t) {
  return function() {
    la(this, t);
  };
}
function yl(t) {
  return function() {
    fa(this, t);
  };
}
function wl(t, n) {
  return function() {
    (n.apply(this, arguments) ? la : fa)(this, t);
  };
}
function xl(t, n) {
  var e = sa(t + "");
  if (arguments.length < 2) {
    for (var r = ci(this.node()), i = -1, o = e.length; ++i < o; ) if (!r.contains(e[i])) return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? wl : n ? ml : yl)(e, n));
}
function El() {
  this.textContent = "";
}
function Sl(t) {
  return function() {
    this.textContent = t;
  };
}
function bl(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.textContent = n ?? "";
  };
}
function Ml(t) {
  return arguments.length ? this.each(t == null ? El : (typeof t == "function" ? bl : Sl)(t)) : this.node().textContent;
}
function Nl() {
  this.innerHTML = "";
}
function Al(t) {
  return function() {
    this.innerHTML = t;
  };
}
function kl(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.innerHTML = n ?? "";
  };
}
function Tl(t) {
  return arguments.length ? this.each(t == null ? Nl : (typeof t == "function" ? kl : Al)(t)) : this.node().innerHTML;
}
function Il() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Rl() {
  return this.each(Il);
}
function Pl() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Cl() {
  return this.each(Pl);
}
function $l(t) {
  var n = typeof t == "function" ? t : na(t);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function Ol() {
  return null;
}
function Dl(t, n) {
  var e = typeof t == "function" ? t : na(t), r = n == null ? Ol : typeof n == "function" ? n : fi(n);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function zl() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Ll() {
  return this.each(zl);
}
function ql() {
  var t = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function Fl() {
  var t = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function Ul(t) {
  return this.select(t ? Fl : ql);
}
function Hl(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function Vl(t) {
  return function(n) {
    t.call(this, n, this.__data__);
  };
}
function Bl(t) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var e = "", r = n.indexOf(".");
    return r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), { type: n, name: e };
  });
}
function Xl(t) {
  return function() {
    var n = this.__on;
    if (n) {
      for (var e = 0, r = -1, i = n.length, o; e < i; ++e)
        o = n[e], (!t.type || o.type === t.type) && o.name === t.name ? this.removeEventListener(o.type, o.listener, o.options) : n[++r] = o;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function Yl(t, n, e) {
  return function() {
    var r = this.__on, i, o = Vl(n);
    if (r) {
      for (var a = 0, s = r.length; a < s; ++a)
        if ((i = r[a]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = o, i.options = e), i.value = n;
          return;
        }
    }
    this.addEventListener(t.type, o, e), i = { type: t.type, name: t.name, value: n, listener: o, options: e }, r ? r.push(i) : this.__on = [i];
  };
}
function Wl(t, n, e) {
  var r = Bl(t + ""), i, o = r.length, a;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var u = 0, f = s.length, l; u < f; ++u)
        for (i = 0, l = s[u]; i < o; ++i)
          if ((a = r[i]).type === l.type && a.name === l.name)
            return l.value;
    }
    return;
  }
  for (s = n ? Yl : Xl, i = 0; i < o; ++i) this.each(s(r[i], n, e));
  return this;
}
function ca(t, n, e) {
  var r = aa(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
}
function Gl(t, n) {
  return function() {
    return ca(this, t, n);
  };
}
function Kl(t, n) {
  return function() {
    return ca(this, t, n.apply(this, arguments));
  };
}
function Zl(t, n) {
  return this.each((typeof n == "function" ? Kl : Gl)(t, n));
}
function* Jl() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length, a; i < o; ++i)
      (a = r[i]) && (yield a);
}
var ha = [null];
function dt(t, n) {
  this._groups = t, this._parents = n;
}
function ue() {
  return new dt([[document.documentElement]], ha);
}
function Ql() {
  return this;
}
dt.prototype = ue.prototype = {
  constructor: dt,
  select: bu,
  selectAll: ku,
  selectChild: Pu,
  selectChildren: Du,
  filter: zu,
  data: Vu,
  enter: Lu,
  exit: Xu,
  join: Yu,
  merge: Wu,
  selection: Ql,
  order: Gu,
  sort: Ku,
  call: Ju,
  nodes: Qu,
  node: ju,
  size: tl,
  empty: nl,
  each: el,
  attr: ll,
  style: pl,
  property: gl,
  classed: xl,
  text: Ml,
  html: Tl,
  raise: Rl,
  lower: Cl,
  append: $l,
  insert: Dl,
  remove: Ll,
  clone: Ul,
  datum: Hl,
  on: Wl,
  dispatch: Zl,
  [Symbol.iterator]: Jl
};
function at(t) {
  return typeof t == "string" ? new dt([[document.querySelector(t)]], [document.documentElement]) : new dt([[t]], ha);
}
function jl(t) {
  let n;
  for (; n = t.sourceEvent; ) t = n;
  return t;
}
function jt(t, n) {
  if (t = jl(t), n === void 0 && (n = t.currentTarget), n) {
    var e = n.ownerSVGElement || n;
    if (e.createSVGPoint) {
      var r = e.createSVGPoint();
      return r.x = t.clientX, r.y = t.clientY, r = r.matrixTransform(n.getScreenCTM().inverse()), [r.x, r.y];
    }
    if (n.getBoundingClientRect) {
      var i = n.getBoundingClientRect();
      return [t.clientX - i.left - n.clientLeft, t.clientY - i.top - n.clientTop];
    }
  }
  return [t.pageX, t.pageY];
}
const xr = { capture: !0, passive: !1 };
function Er(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function tf(t) {
  var n = t.document.documentElement, e = at(t).on("dragstart.drag", Er, xr);
  "onselectstart" in n ? e.on("selectstart.drag", Er, xr) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none");
}
function nf(t, n) {
  var e = t.document.documentElement, r = at(t).on("dragstart.drag", null);
  n && (r.on("click.drag", Er, xr), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect);
}
function hi(t, n, e) {
  t.prototype = n.prototype = e, e.constructor = t;
}
function pa(t, n) {
  var e = Object.create(t.prototype);
  for (var r in n) e[r] = n[r];
  return e;
}
function le() {
}
var jn = 0.7, $e = 1 / jn, Mn = "\\s*([+-]?\\d+)\\s*", te = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Ct = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", ef = /^#([0-9a-f]{3,8})$/, rf = new RegExp(`^rgb\\(${Mn},${Mn},${Mn}\\)$`), of = new RegExp(`^rgb\\(${Ct},${Ct},${Ct}\\)$`), af = new RegExp(`^rgba\\(${Mn},${Mn},${Mn},${te}\\)$`), sf = new RegExp(`^rgba\\(${Ct},${Ct},${Ct},${te}\\)$`), uf = new RegExp(`^hsl\\(${te},${Ct},${Ct}\\)$`), lf = new RegExp(`^hsla\\(${te},${Ct},${Ct},${te}\\)$`), zi = {
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
hi(le, ne, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Li,
  // Deprecated! Use color.formatHex.
  formatHex: Li,
  formatHex8: ff,
  formatHsl: cf,
  formatRgb: qi,
  toString: qi
});
function Li() {
  return this.rgb().formatHex();
}
function ff() {
  return this.rgb().formatHex8();
}
function cf() {
  return va(this).formatHsl();
}
function qi() {
  return this.rgb().formatRgb();
}
function ne(t) {
  var n, e;
  return t = (t + "").trim().toLowerCase(), (n = ef.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? Fi(n) : e === 3 ? new ut(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? ce(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? ce(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = rf.exec(t)) ? new ut(n[1], n[2], n[3], 1) : (n = of.exec(t)) ? new ut(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = af.exec(t)) ? ce(n[1], n[2], n[3], n[4]) : (n = sf.exec(t)) ? ce(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = uf.exec(t)) ? Vi(n[1], n[2] / 100, n[3] / 100, 1) : (n = lf.exec(t)) ? Vi(n[1], n[2] / 100, n[3] / 100, n[4]) : zi.hasOwnProperty(t) ? Fi(zi[t]) : t === "transparent" ? new ut(NaN, NaN, NaN, 0) : null;
}
function Fi(t) {
  return new ut(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function ce(t, n, e, r) {
  return r <= 0 && (t = n = e = NaN), new ut(t, n, e, r);
}
function hf(t) {
  return t instanceof le || (t = ne(t)), t ? (t = t.rgb(), new ut(t.r, t.g, t.b, t.opacity)) : new ut();
}
function Sr(t, n, e, r) {
  return arguments.length === 1 ? hf(t) : new ut(t, n, e, r ?? 1);
}
function ut(t, n, e, r) {
  this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
}
hi(ut, Sr, pa(le, {
  brighter(t) {
    return t = t == null ? $e : Math.pow($e, t), new ut(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? jn : Math.pow(jn, t), new ut(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new ut(sn(this.r), sn(this.g), sn(this.b), Oe(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Ui,
  // Deprecated! Use color.formatHex.
  formatHex: Ui,
  formatHex8: pf,
  formatRgb: Hi,
  toString: Hi
}));
function Ui() {
  return `#${nn(this.r)}${nn(this.g)}${nn(this.b)}`;
}
function pf() {
  return `#${nn(this.r)}${nn(this.g)}${nn(this.b)}${nn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Hi() {
  const t = Oe(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${sn(this.r)}, ${sn(this.g)}, ${sn(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function Oe(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function sn(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function nn(t) {
  return t = sn(t), (t < 16 ? "0" : "") + t.toString(16);
}
function Vi(t, n, e, r) {
  return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new Nt(t, n, e, r);
}
function va(t) {
  if (t instanceof Nt) return new Nt(t.h, t.s, t.l, t.opacity);
  if (t instanceof le || (t = ne(t)), !t) return new Nt();
  if (t instanceof Nt) return t;
  t = t.rgb();
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), o = Math.max(n, e, r), a = NaN, s = o - i, u = (o + i) / 2;
  return s ? (n === o ? a = (e - r) / s + (e < r) * 6 : e === o ? a = (r - n) / s + 2 : a = (n - e) / s + 4, s /= u < 0.5 ? o + i : 2 - o - i, a *= 60) : s = u > 0 && u < 1 ? 0 : a, new Nt(a, s, u, t.opacity);
}
function vf(t, n, e, r) {
  return arguments.length === 1 ? va(t) : new Nt(t, n, e, r ?? 1);
}
function Nt(t, n, e, r) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
}
hi(Nt, vf, pa(le, {
  brighter(t) {
    return t = t == null ? $e : Math.pow($e, t), new Nt(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? jn : Math.pow(jn, t), new Nt(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * n, i = 2 * e - r;
    return new ut(
      or(t >= 240 ? t - 240 : t + 120, i, r),
      or(t, i, r),
      or(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new Nt(Bi(this.h), he(this.s), he(this.l), Oe(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = Oe(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${Bi(this.h)}, ${he(this.s) * 100}%, ${he(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function Bi(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function he(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function or(t, n, e) {
  return (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) * 255;
}
const da = (t) => () => t;
function df(t, n) {
  return function(e) {
    return t + e * n;
  };
}
function _f(t, n, e) {
  return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function(r) {
    return Math.pow(t + r * n, e);
  };
}
function gf(t) {
  return (t = +t) == 1 ? _a : function(n, e) {
    return e - n ? _f(n, e, t) : da(isNaN(n) ? e : n);
  };
}
function _a(t, n) {
  var e = n - t;
  return e ? df(t, e) : da(isNaN(t) ? n : t);
}
const Xi = (function t(n) {
  var e = gf(n);
  function r(i, o) {
    var a = e((i = Sr(i)).r, (o = Sr(o)).r), s = e(i.g, o.g), u = e(i.b, o.b), f = _a(i.opacity, o.opacity);
    return function(l) {
      return i.r = a(l), i.g = s(l), i.b = u(l), i.opacity = f(l), i + "";
    };
  }
  return r.gamma = t, r;
})(1);
function Kt(t, n) {
  return t = +t, n = +n, function(e) {
    return t * (1 - e) + n * e;
  };
}
var br = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, ar = new RegExp(br.source, "g");
function mf(t) {
  return function() {
    return t;
  };
}
function yf(t) {
  return function(n) {
    return t(n) + "";
  };
}
function wf(t, n) {
  var e = br.lastIndex = ar.lastIndex = 0, r, i, o, a = -1, s = [], u = [];
  for (t = t + "", n = n + ""; (r = br.exec(t)) && (i = ar.exec(n)); )
    (o = i.index) > e && (o = n.slice(e, o), s[a] ? s[a] += o : s[++a] = o), (r = r[0]) === (i = i[0]) ? s[a] ? s[a] += i : s[++a] = i : (s[++a] = null, u.push({ i: a, x: Kt(r, i) })), e = ar.lastIndex;
  return e < n.length && (o = n.slice(e), s[a] ? s[a] += o : s[++a] = o), s.length < 2 ? u[0] ? yf(u[0].x) : mf(n) : (n = u.length, function(f) {
    for (var l = 0, h; l < n; ++l) s[(h = u[l]).i] = h.x(f);
    return s.join("");
  });
}
var Yi = 180 / Math.PI, Mr = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function ga(t, n, e, r, i, o) {
  var a, s, u;
  return (a = Math.sqrt(t * t + n * n)) && (t /= a, n /= a), (u = t * e + n * r) && (e -= t * u, r -= n * u), (s = Math.sqrt(e * e + r * r)) && (e /= s, r /= s, u /= s), t * r < n * e && (t = -t, n = -n, u = -u, a = -a), {
    translateX: i,
    translateY: o,
    rotate: Math.atan2(n, t) * Yi,
    skewX: Math.atan(u) * Yi,
    scaleX: a,
    scaleY: s
  };
}
var pe;
function xf(t) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return n.isIdentity ? Mr : ga(n.a, n.b, n.c, n.d, n.e, n.f);
}
function Ef(t) {
  return t == null || (pe || (pe = document.createElementNS("http://www.w3.org/2000/svg", "g")), pe.setAttribute("transform", t), !(t = pe.transform.baseVal.consolidate())) ? Mr : (t = t.matrix, ga(t.a, t.b, t.c, t.d, t.e, t.f));
}
function ma(t, n, e, r) {
  function i(f) {
    return f.length ? f.pop() + " " : "";
  }
  function o(f, l, h, c, p, v) {
    if (f !== h || l !== c) {
      var m = p.push("translate(", null, n, null, e);
      v.push({ i: m - 4, x: Kt(f, h) }, { i: m - 2, x: Kt(l, c) });
    } else (h || c) && p.push("translate(" + h + n + c + e);
  }
  function a(f, l, h, c) {
    f !== l ? (f - l > 180 ? l += 360 : l - f > 180 && (f += 360), c.push({ i: h.push(i(h) + "rotate(", null, r) - 2, x: Kt(f, l) })) : l && h.push(i(h) + "rotate(" + l + r);
  }
  function s(f, l, h, c) {
    f !== l ? c.push({ i: h.push(i(h) + "skewX(", null, r) - 2, x: Kt(f, l) }) : l && h.push(i(h) + "skewX(" + l + r);
  }
  function u(f, l, h, c, p, v) {
    if (f !== h || l !== c) {
      var m = p.push(i(p) + "scale(", null, ",", null, ")");
      v.push({ i: m - 4, x: Kt(f, h) }, { i: m - 2, x: Kt(l, c) });
    } else (h !== 1 || c !== 1) && p.push(i(p) + "scale(" + h + "," + c + ")");
  }
  return function(f, l) {
    var h = [], c = [];
    return f = t(f), l = t(l), o(f.translateX, f.translateY, l.translateX, l.translateY, h, c), a(f.rotate, l.rotate, h, c), s(f.skewX, l.skewX, h, c), u(f.scaleX, f.scaleY, l.scaleX, l.scaleY, h, c), f = l = null, function(p) {
      for (var v = -1, m = c.length, w; ++v < m; ) h[(w = c[v]).i] = w.x(p);
      return h.join("");
    };
  };
}
var Sf = ma(xf, "px, ", "px)", "deg)"), bf = ma(Ef, ", ", ")", ")"), Mf = 1e-12;
function Wi(t) {
  return ((t = Math.exp(t)) + 1 / t) / 2;
}
function Nf(t) {
  return ((t = Math.exp(t)) - 1 / t) / 2;
}
function Af(t) {
  return ((t = Math.exp(2 * t)) - 1) / (t + 1);
}
const kf = (function t(n, e, r) {
  function i(o, a) {
    var s = o[0], u = o[1], f = o[2], l = a[0], h = a[1], c = a[2], p = l - s, v = h - u, m = p * p + v * v, w, x;
    if (m < Mf)
      x = Math.log(c / f) / n, w = function(z) {
        return [
          s + z * p,
          u + z * v,
          f * Math.exp(n * z * x)
        ];
      };
    else {
      var y = Math.sqrt(m), S = (c * c - f * f + r * m) / (2 * f * e * y), b = (c * c - f * f - r * m) / (2 * c * e * y), I = Math.log(Math.sqrt(S * S + 1) - S), P = Math.log(Math.sqrt(b * b + 1) - b);
      x = (P - I) / n, w = function(z) {
        var O = z * x, $ = Wi(I), q = f / (e * y) * ($ * Af(n * O + I) - Nf(I));
        return [
          s + q * p,
          u + q * v,
          f * $ / Wi(n * O + I)
        ];
      };
    }
    return w.duration = x * 1e3 * n / Math.SQRT2, w;
  }
  return i.rho = function(o) {
    var a = Math.max(1e-3, +o), s = a * a, u = s * s;
    return t(a, s, u);
  }, i;
})(Math.SQRT2, 2, 4);
var In = 0, Hn = 0, qn = 0, ya = 1e3, De, Vn, ze = 0, ln = 0, Qe = 0, ee = typeof performance == "object" && performance.now ? performance : Date, wa = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function pi() {
  return ln || (wa(Tf), ln = ee.now() + Qe);
}
function Tf() {
  ln = 0;
}
function Le() {
  this._call = this._time = this._next = null;
}
Le.prototype = xa.prototype = {
  constructor: Le,
  restart: function(t, n, e) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    e = (e == null ? pi() : +e) + (n == null ? 0 : +n), !this._next && Vn !== this && (Vn ? Vn._next = this : De = this, Vn = this), this._call = t, this._time = e, Nr();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Nr());
  }
};
function xa(t, n, e) {
  var r = new Le();
  return r.restart(t, n, e), r;
}
function If() {
  pi(), ++In;
  for (var t = De, n; t; )
    (n = ln - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --In;
}
function Gi() {
  ln = (ze = ee.now()) + Qe, In = Hn = 0;
  try {
    If();
  } finally {
    In = 0, Pf(), ln = 0;
  }
}
function Rf() {
  var t = ee.now(), n = t - ze;
  n > ya && (Qe -= n, ze = t);
}
function Pf() {
  for (var t, n = De, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : De = e);
  Vn = t, Nr(r);
}
function Nr(t) {
  if (!In) {
    Hn && (Hn = clearTimeout(Hn));
    var n = t - ln;
    n > 24 ? (t < 1 / 0 && (Hn = setTimeout(Gi, t - ee.now() - Qe)), qn && (qn = clearInterval(qn))) : (qn || (ze = ee.now(), qn = setInterval(Rf, ya)), In = 1, wa(Gi));
  }
}
function Ki(t, n, e) {
  var r = new Le();
  return n = n == null ? 0 : +n, r.restart((i) => {
    r.stop(), t(i + n);
  }, n, e), r;
}
var Cf = li("start", "end", "cancel", "interrupt"), $f = [], Ea = 0, Zi = 1, Ar = 2, xe = 3, Ji = 4, kr = 5, Ee = 6;
function je(t, n, e, r, i, o) {
  var a = t.__transition;
  if (!a) t.__transition = {};
  else if (e in a) return;
  Of(t, e, {
    name: n,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: Cf,
    tween: $f,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: Ea
  });
}
function vi(t, n) {
  var e = kt(t, n);
  if (e.state > Ea) throw new Error("too late; already scheduled");
  return e;
}
function zt(t, n) {
  var e = kt(t, n);
  if (e.state > xe) throw new Error("too late; already running");
  return e;
}
function kt(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n])) throw new Error("transition not found");
  return e;
}
function Of(t, n, e) {
  var r = t.__transition, i;
  r[n] = e, e.timer = xa(o, 0, e.time);
  function o(f) {
    e.state = Zi, e.timer.restart(a, e.delay, e.time), e.delay <= f && a(f - e.delay);
  }
  function a(f) {
    var l, h, c, p;
    if (e.state !== Zi) return u();
    for (l in r)
      if (p = r[l], p.name === e.name) {
        if (p.state === xe) return Ki(a);
        p.state === Ji ? (p.state = Ee, p.timer.stop(), p.on.call("interrupt", t, t.__data__, p.index, p.group), delete r[l]) : +l < n && (p.state = Ee, p.timer.stop(), p.on.call("cancel", t, t.__data__, p.index, p.group), delete r[l]);
      }
    if (Ki(function() {
      e.state === xe && (e.state = Ji, e.timer.restart(s, e.delay, e.time), s(f));
    }), e.state = Ar, e.on.call("start", t, t.__data__, e.index, e.group), e.state === Ar) {
      for (e.state = xe, i = new Array(c = e.tween.length), l = 0, h = -1; l < c; ++l)
        (p = e.tween[l].value.call(t, t.__data__, e.index, e.group)) && (i[++h] = p);
      i.length = h + 1;
    }
  }
  function s(f) {
    for (var l = f < e.duration ? e.ease.call(null, f / e.duration) : (e.timer.restart(u), e.state = kr, 1), h = -1, c = i.length; ++h < c; )
      i[h].call(t, l);
    e.state === kr && (e.on.call("end", t, t.__data__, e.index, e.group), u());
  }
  function u() {
    e.state = Ee, e.timer.stop(), delete r[n];
    for (var f in r) return;
    delete t.__transition;
  }
}
function Se(t, n) {
  var e = t.__transition, r, i, o = !0, a;
  if (e) {
    n = n == null ? null : n + "";
    for (a in e) {
      if ((r = e[a]).name !== n) {
        o = !1;
        continue;
      }
      i = r.state > Ar && r.state < kr, r.state = Ee, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete e[a];
    }
    o && delete t.__transition;
  }
}
function Df(t) {
  return this.each(function() {
    Se(this, t);
  });
}
function zf(t, n) {
  var e, r;
  return function() {
    var i = zt(this, t), o = i.tween;
    if (o !== e) {
      r = e = o;
      for (var a = 0, s = r.length; a < s; ++a)
        if (r[a].name === n) {
          r = r.slice(), r.splice(a, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function Lf(t, n, e) {
  var r, i;
  if (typeof e != "function") throw new Error();
  return function() {
    var o = zt(this, t), a = o.tween;
    if (a !== r) {
      i = (r = a).slice();
      for (var s = { name: n, value: e }, u = 0, f = i.length; u < f; ++u)
        if (i[u].name === n) {
          i[u] = s;
          break;
        }
      u === f && i.push(s);
    }
    o.tween = i;
  };
}
function qf(t, n) {
  var e = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = kt(this.node(), e).tween, i = 0, o = r.length, a; i < o; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((n == null ? zf : Lf)(e, t, n));
}
function di(t, n, e) {
  var r = t._id;
  return t.each(function() {
    var i = zt(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return kt(i, r).value[n];
  };
}
function Sa(t, n) {
  var e;
  return (typeof n == "number" ? Kt : n instanceof ne ? Xi : (e = ne(n)) ? (n = e, Xi) : wf)(t, n);
}
function Ff(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Uf(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Hf(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttribute(t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function Vf(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttributeNS(t.space, t.local);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function Bf(t, n, e) {
  var r, i, o;
  return function() {
    var a, s = e(this), u;
    return s == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), u = s + "", a === u ? null : a === r && u === i ? o : (i = u, o = n(r = a, s)));
  };
}
function Xf(t, n, e) {
  var r, i, o;
  return function() {
    var a, s = e(this), u;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), u = s + "", a === u ? null : a === r && u === i ? o : (i = u, o = n(r = a, s)));
  };
}
function Yf(t, n) {
  var e = Je(t), r = e === "transform" ? bf : Sa;
  return this.attrTween(t, typeof n == "function" ? (e.local ? Xf : Bf)(e, r, di(this, "attr." + t, n)) : n == null ? (e.local ? Uf : Ff)(e) : (e.local ? Vf : Hf)(e, r, n));
}
function Wf(t, n) {
  return function(e) {
    this.setAttribute(t, n.call(this, e));
  };
}
function Gf(t, n) {
  return function(e) {
    this.setAttributeNS(t.space, t.local, n.call(this, e));
  };
}
function Kf(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && Gf(t, o)), e;
  }
  return i._value = n, i;
}
function Zf(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && Wf(t, o)), e;
  }
  return i._value = n, i;
}
function Jf(t, n) {
  var e = "attr." + t;
  if (arguments.length < 2) return (e = this.tween(e)) && e._value;
  if (n == null) return this.tween(e, null);
  if (typeof n != "function") throw new Error();
  var r = Je(t);
  return this.tween(e, (r.local ? Kf : Zf)(r, n));
}
function Qf(t, n) {
  return function() {
    vi(this, t).delay = +n.apply(this, arguments);
  };
}
function jf(t, n) {
  return n = +n, function() {
    vi(this, t).delay = n;
  };
}
function tc(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Qf : jf)(n, t)) : kt(this.node(), n).delay;
}
function nc(t, n) {
  return function() {
    zt(this, t).duration = +n.apply(this, arguments);
  };
}
function ec(t, n) {
  return n = +n, function() {
    zt(this, t).duration = n;
  };
}
function rc(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? nc : ec)(n, t)) : kt(this.node(), n).duration;
}
function ic(t, n) {
  if (typeof n != "function") throw new Error();
  return function() {
    zt(this, t).ease = n;
  };
}
function oc(t) {
  var n = this._id;
  return arguments.length ? this.each(ic(n, t)) : kt(this.node(), n).ease;
}
function ac(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    if (typeof e != "function") throw new Error();
    zt(this, t).ease = e;
  };
}
function sc(t) {
  if (typeof t != "function") throw new Error();
  return this.each(ac(this._id, t));
}
function uc(t) {
  typeof t != "function" && (t = ra(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = [], u, f = 0; f < a; ++f)
      (u = o[f]) && t.call(u, u.__data__, f, o) && s.push(u);
  return new Xt(r, this._parents, this._name, this._id);
}
function lc(t) {
  if (t._id !== this._id) throw new Error();
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), a = new Array(r), s = 0; s < o; ++s)
    for (var u = n[s], f = e[s], l = u.length, h = a[s] = new Array(l), c, p = 0; p < l; ++p)
      (c = u[p] || f[p]) && (h[p] = c);
  for (; s < r; ++s)
    a[s] = n[s];
  return new Xt(a, this._parents, this._name, this._id);
}
function fc(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function cc(t, n, e) {
  var r, i, o = fc(n) ? vi : zt;
  return function() {
    var a = o(this, t), s = a.on;
    s !== r && (i = (r = s).copy()).on(n, e), a.on = i;
  };
}
function hc(t, n) {
  var e = this._id;
  return arguments.length < 2 ? kt(this.node(), e).on.on(t) : this.each(cc(e, t, n));
}
function pc(t) {
  return function() {
    var n = this.parentNode;
    for (var e in this.__transition) if (+e !== t) return;
    n && n.removeChild(this);
  };
}
function vc() {
  return this.on("end.remove", pc(this._id));
}
function dc(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = fi(t));
  for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
    for (var s = r[a], u = s.length, f = o[a] = new Array(u), l, h, c = 0; c < u; ++c)
      (l = s[c]) && (h = t.call(l, l.__data__, c, s)) && ("__data__" in l && (h.__data__ = l.__data__), f[c] = h, je(f[c], n, e, c, f, kt(l, e)));
  return new Xt(o, this._parents, n, e);
}
function _c(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = ea(t));
  for (var r = this._groups, i = r.length, o = [], a = [], s = 0; s < i; ++s)
    for (var u = r[s], f = u.length, l, h = 0; h < f; ++h)
      if (l = u[h]) {
        for (var c = t.call(l, l.__data__, h, u), p, v = kt(l, e), m = 0, w = c.length; m < w; ++m)
          (p = c[m]) && je(p, n, e, m, c, v);
        o.push(c), a.push(l);
      }
  return new Xt(o, a, n, e);
}
var gc = ue.prototype.constructor;
function mc() {
  return new gc(this._groups, this._parents);
}
function yc(t, n) {
  var e, r, i;
  return function() {
    var o = Tn(this, t), a = (this.style.removeProperty(t), Tn(this, t));
    return o === a ? null : o === e && a === r ? i : i = n(e = o, r = a);
  };
}
function ba(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function wc(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = Tn(this, t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function xc(t, n, e) {
  var r, i, o;
  return function() {
    var a = Tn(this, t), s = e(this), u = s + "";
    return s == null && (u = s = (this.style.removeProperty(t), Tn(this, t))), a === u ? null : a === r && u === i ? o : (i = u, o = n(r = a, s));
  };
}
function Ec(t, n) {
  var e, r, i, o = "style." + n, a = "end." + o, s;
  return function() {
    var u = zt(this, t), f = u.on, l = u.value[o] == null ? s || (s = ba(n)) : void 0;
    (f !== e || i !== l) && (r = (e = f).copy()).on(a, i = l), u.on = r;
  };
}
function Sc(t, n, e) {
  var r = (t += "") == "transform" ? Sf : Sa;
  return n == null ? this.styleTween(t, yc(t, r)).on("end.style." + t, ba(t)) : typeof n == "function" ? this.styleTween(t, xc(t, r, di(this, "style." + t, n))).each(Ec(this._id, t)) : this.styleTween(t, wc(t, r, n), e).on("end.style." + t, null);
}
function bc(t, n, e) {
  return function(r) {
    this.style.setProperty(t, n.call(this, r), e);
  };
}
function Mc(t, n, e) {
  var r, i;
  function o() {
    var a = n.apply(this, arguments);
    return a !== i && (r = (i = a) && bc(t, a, e)), r;
  }
  return o._value = n, o;
}
function Nc(t, n, e) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (n == null) return this.tween(r, null);
  if (typeof n != "function") throw new Error();
  return this.tween(r, Mc(t, n, e ?? ""));
}
function Ac(t) {
  return function() {
    this.textContent = t;
  };
}
function kc(t) {
  return function() {
    var n = t(this);
    this.textContent = n ?? "";
  };
}
function Tc(t) {
  return this.tween("text", typeof t == "function" ? kc(di(this, "text", t)) : Ac(t == null ? "" : t + ""));
}
function Ic(t) {
  return function(n) {
    this.textContent = t.call(this, n);
  };
}
function Rc(t) {
  var n, e;
  function r() {
    var i = t.apply(this, arguments);
    return i !== e && (n = (e = i) && Ic(i)), n;
  }
  return r._value = t, r;
}
function Pc(t) {
  var n = "text";
  if (arguments.length < 1) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  return this.tween(n, Rc(t));
}
function Cc() {
  for (var t = this._name, n = this._id, e = Ma(), r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, u, f = 0; f < s; ++f)
      if (u = a[f]) {
        var l = kt(u, n);
        je(u, t, e, f, a, {
          time: l.time + l.delay + l.duration,
          delay: 0,
          duration: l.duration,
          ease: l.ease
        });
      }
  return new Xt(r, this._parents, t, e);
}
function $c() {
  var t, n, e = this, r = e._id, i = e.size();
  return new Promise(function(o, a) {
    var s = { value: a }, u = { value: function() {
      --i === 0 && o();
    } };
    e.each(function() {
      var f = zt(this, r), l = f.on;
      l !== t && (n = (t = l).copy(), n._.cancel.push(s), n._.interrupt.push(s), n._.end.push(u)), f.on = n;
    }), i === 0 && o();
  });
}
var Oc = 0;
function Xt(t, n, e, r) {
  this._groups = t, this._parents = n, this._name = e, this._id = r;
}
function Ma() {
  return ++Oc;
}
var Lt = ue.prototype;
Xt.prototype = {
  constructor: Xt,
  select: dc,
  selectAll: _c,
  selectChild: Lt.selectChild,
  selectChildren: Lt.selectChildren,
  filter: uc,
  merge: lc,
  selection: mc,
  transition: Cc,
  call: Lt.call,
  nodes: Lt.nodes,
  node: Lt.node,
  size: Lt.size,
  empty: Lt.empty,
  each: Lt.each,
  on: hc,
  attr: Yf,
  attrTween: Jf,
  style: Sc,
  styleTween: Nc,
  text: Tc,
  textTween: Pc,
  remove: vc,
  tween: qf,
  delay: tc,
  duration: rc,
  ease: oc,
  easeVarying: sc,
  end: $c,
  [Symbol.iterator]: Lt[Symbol.iterator]
};
function Dc(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var zc = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Dc
};
function Lc(t, n) {
  for (var e; !(e = t.__transition) || !(e = e[n]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${n} not found`);
  return e;
}
function qc(t) {
  var n, e;
  t instanceof Xt ? (n = t._id, t = t._name) : (n = Ma(), (e = zc).time = pi(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, u, f = 0; f < s; ++f)
      (u = a[f]) && je(u, t, n, f, a, e || Lc(u, n));
  return new Xt(r, this._parents, t, n);
}
ue.prototype.interrupt = Df;
ue.prototype.transition = qc;
var X = 1e-6, U = Math.PI, lt = U / 2, Qi = U / 4, _t = U * 2, pt = 180 / U, tt = U / 180, W = Math.abs, Na = Math.atan, re = Math.atan2, Z = Math.cos, Fc = Math.exp, Uc = Math.log, J = Math.sin, Hc = Math.sign || function(t) {
  return t > 0 ? 1 : t < 0 ? -1 : 0;
}, vn = Math.sqrt, Vc = Math.tan;
function Bc(t) {
  return t > 1 ? 0 : t < -1 ? U : Math.acos(t);
}
function ie(t) {
  return t > 1 ? lt : t < -1 ? -lt : Math.asin(t);
}
function wt() {
}
function qe(t, n) {
  t && to.hasOwnProperty(t.type) && to[t.type](t, n);
}
var ji = {
  Feature: function(t, n) {
    qe(t.geometry, n);
  },
  FeatureCollection: function(t, n) {
    for (var e = t.features, r = -1, i = e.length; ++r < i; ) qe(e[r].geometry, n);
  }
}, to = {
  Sphere: function(t, n) {
    n.sphere();
  },
  Point: function(t, n) {
    t = t.coordinates, n.point(t[0], t[1], t[2]);
  },
  MultiPoint: function(t, n) {
    for (var e = t.coordinates, r = -1, i = e.length; ++r < i; ) t = e[r], n.point(t[0], t[1], t[2]);
  },
  LineString: function(t, n) {
    Tr(t.coordinates, n, 0);
  },
  MultiLineString: function(t, n) {
    for (var e = t.coordinates, r = -1, i = e.length; ++r < i; ) Tr(e[r], n, 0);
  },
  Polygon: function(t, n) {
    no(t.coordinates, n);
  },
  MultiPolygon: function(t, n) {
    for (var e = t.coordinates, r = -1, i = e.length; ++r < i; ) no(e[r], n);
  },
  GeometryCollection: function(t, n) {
    for (var e = t.geometries, r = -1, i = e.length; ++r < i; ) qe(e[r], n);
  }
};
function Tr(t, n, e) {
  var r = -1, i = t.length - e, o;
  for (n.lineStart(); ++r < i; ) o = t[r], n.point(o[0], o[1], o[2]);
  n.lineEnd();
}
function no(t, n) {
  var e = -1, r = t.length;
  for (n.polygonStart(); ++e < r; ) Tr(t[e], n, 1);
  n.polygonEnd();
}
function yn(t, n) {
  t && ji.hasOwnProperty(t.type) ? ji[t.type](t, n) : qe(t, n);
}
function Ir(t) {
  return [re(t[1], t[0]), ie(t[2])];
}
function Rn(t) {
  var n = t[0], e = t[1], r = Z(e);
  return [r * Z(n), r * J(n), J(e)];
}
function ve(t, n) {
  return t[0] * n[0] + t[1] * n[1] + t[2] * n[2];
}
function Fe(t, n) {
  return [t[1] * n[2] - t[2] * n[1], t[2] * n[0] - t[0] * n[2], t[0] * n[1] - t[1] * n[0]];
}
function sr(t, n) {
  t[0] += n[0], t[1] += n[1], t[2] += n[2];
}
function de(t, n) {
  return [t[0] * n, t[1] * n, t[2] * n];
}
function Rr(t) {
  var n = vn(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
  t[0] /= n, t[1] /= n, t[2] /= n;
}
function Pr(t, n) {
  function e(r, i) {
    return r = t(r, i), n(r[0], r[1]);
  }
  return t.invert && n.invert && (e.invert = function(r, i) {
    return r = n.invert(r, i), r && t.invert(r[0], r[1]);
  }), e;
}
function Cr(t, n) {
  return W(t) > U && (t -= Math.round(t / _t) * _t), [t, n];
}
Cr.invert = Cr;
function Aa(t, n, e) {
  return (t %= _t) ? n || e ? Pr(ro(t), io(n, e)) : ro(t) : n || e ? io(n, e) : Cr;
}
function eo(t) {
  return function(n, e) {
    return n += t, W(n) > U && (n -= Math.round(n / _t) * _t), [n, e];
  };
}
function ro(t) {
  var n = eo(t);
  return n.invert = eo(-t), n;
}
function io(t, n) {
  var e = Z(t), r = J(t), i = Z(n), o = J(n);
  function a(s, u) {
    var f = Z(u), l = Z(s) * f, h = J(s) * f, c = J(u), p = c * e + l * r;
    return [
      re(h * i - p * o, l * e - c * r),
      ie(p * i + h * o)
    ];
  }
  return a.invert = function(s, u) {
    var f = Z(u), l = Z(s) * f, h = J(s) * f, c = J(u), p = c * i - h * o;
    return [
      re(h * i + c * o, l * e + p * r),
      ie(p * e - l * r)
    ];
  }, a;
}
function Xc(t) {
  t = Aa(t[0] * tt, t[1] * tt, t.length > 2 ? t[2] * tt : 0);
  function n(e) {
    return e = t(e[0] * tt, e[1] * tt), e[0] *= pt, e[1] *= pt, e;
  }
  return n.invert = function(e) {
    return e = t.invert(e[0] * tt, e[1] * tt), e[0] *= pt, e[1] *= pt, e;
  }, n;
}
function Yc(t, n, e, r, i, o) {
  if (e) {
    var a = Z(n), s = J(n), u = r * e;
    i == null ? (i = n + r * _t, o = n - u / 2) : (i = oo(a, i), o = oo(a, o), (r > 0 ? i < o : i > o) && (i += r * _t));
    for (var f, l = i; r > 0 ? l > o : l < o; l -= u)
      f = Ir([a, -s * Z(l), -s * J(l)]), t.point(f[0], f[1]);
  }
}
function oo(t, n) {
  n = Rn(n), n[0] -= t, Rr(n);
  var e = Bc(-n[1]);
  return ((-n[2] < 0 ? -e : e) + _t - X) % _t;
}
function ka() {
  var t = [], n;
  return {
    point: function(e, r, i) {
      n.push([e, r, i]);
    },
    lineStart: function() {
      t.push(n = []);
    },
    lineEnd: wt,
    rejoin: function() {
      t.length > 1 && t.push(t.pop().concat(t.shift()));
    },
    result: function() {
      var e = t;
      return t = [], n = null, e;
    }
  };
}
function be(t, n) {
  return W(t[0] - n[0]) < X && W(t[1] - n[1]) < X;
}
function _e(t, n, e, r) {
  this.x = t, this.z = n, this.o = e, this.e = r, this.v = !1, this.n = this.p = null;
}
function Ta(t, n, e, r, i) {
  var o = [], a = [], s, u;
  if (t.forEach(function(v) {
    if (!((m = v.length - 1) <= 0)) {
      var m, w = v[0], x = v[m], y;
      if (be(w, x)) {
        if (!w[2] && !x[2]) {
          for (i.lineStart(), s = 0; s < m; ++s) i.point((w = v[s])[0], w[1]);
          i.lineEnd();
          return;
        }
        x[0] += 2 * X;
      }
      o.push(y = new _e(w, v, null, !0)), a.push(y.o = new _e(w, null, y, !1)), o.push(y = new _e(x, v, null, !1)), a.push(y.o = new _e(x, null, y, !0));
    }
  }), !!o.length) {
    for (a.sort(n), ao(o), ao(a), s = 0, u = a.length; s < u; ++s)
      a[s].e = e = !e;
    for (var f = o[0], l, h; ; ) {
      for (var c = f, p = !0; c.v; ) if ((c = c.n) === f) return;
      l = c.z, i.lineStart();
      do {
        if (c.v = c.o.v = !0, c.e) {
          if (p)
            for (s = 0, u = l.length; s < u; ++s) i.point((h = l[s])[0], h[1]);
          else
            r(c.x, c.n.x, 1, i);
          c = c.n;
        } else {
          if (p)
            for (l = c.p.z, s = l.length - 1; s >= 0; --s) i.point((h = l[s])[0], h[1]);
          else
            r(c.x, c.p.x, -1, i);
          c = c.p;
        }
        c = c.o, l = c.z, p = !p;
      } while (!c.v);
      i.lineEnd();
    }
  }
}
function ao(t) {
  if (n = t.length) {
    for (var n, e = 0, r = t[0], i; ++e < n; )
      r.n = i = t[e], i.p = r, r = i;
    r.n = i = t[0], i.p = r;
  }
}
function ur(t) {
  return W(t[0]) <= U ? t[0] : Hc(t[0]) * ((W(t[0]) + U) % _t - U);
}
function Wc(t, n) {
  var e = ur(n), r = n[1], i = J(r), o = [J(e), -Z(e), 0], a = 0, s = 0, u = new un();
  i === 1 ? r = lt + X : i === -1 && (r = -lt - X);
  for (var f = 0, l = t.length; f < l; ++f)
    if (c = (h = t[f]).length)
      for (var h, c, p = h[c - 1], v = ur(p), m = p[1] / 2 + Qi, w = J(m), x = Z(m), y = 0; y < c; ++y, v = b, w = P, x = z, p = S) {
        var S = h[y], b = ur(S), I = S[1] / 2 + Qi, P = J(I), z = Z(I), O = b - v, $ = O >= 0 ? 1 : -1, q = $ * O, N = q > U, T = w * P;
        if (u.add(re(T * $ * J(q), x * z + T * Z(q))), a += N ? O + $ * _t : O, N ^ v >= e ^ b >= e) {
          var C = Fe(Rn(p), Rn(S));
          Rr(C);
          var d = Fe(o, C);
          Rr(d);
          var _ = (N ^ O >= 0 ? -1 : 1) * ie(d[2]);
          (r > _ || r === _ && (C[0] || C[1])) && (s += N ^ O >= 0 ? 1 : -1);
        }
      }
  return (a < -X || a < X && u < -1e-12) ^ s & 1;
}
function Ia(t, n, e, r) {
  return function(i) {
    var o = n(i), a = ka(), s = n(a), u = !1, f, l, h, c = {
      point: p,
      lineStart: m,
      lineEnd: w,
      polygonStart: function() {
        c.point = x, c.lineStart = y, c.lineEnd = S, l = [], f = [];
      },
      polygonEnd: function() {
        c.point = p, c.lineStart = m, c.lineEnd = w, l = ta(l);
        var b = Wc(f, r);
        l.length ? (u || (i.polygonStart(), u = !0), Ta(l, Kc, b, e, i)) : b && (u || (i.polygonStart(), u = !0), i.lineStart(), e(null, null, 1, i), i.lineEnd()), u && (i.polygonEnd(), u = !1), l = f = null;
      },
      sphere: function() {
        i.polygonStart(), i.lineStart(), e(null, null, 1, i), i.lineEnd(), i.polygonEnd();
      }
    };
    function p(b, I) {
      t(b, I) && i.point(b, I);
    }
    function v(b, I) {
      o.point(b, I);
    }
    function m() {
      c.point = v, o.lineStart();
    }
    function w() {
      c.point = p, o.lineEnd();
    }
    function x(b, I) {
      h.push([b, I]), s.point(b, I);
    }
    function y() {
      s.lineStart(), h = [];
    }
    function S() {
      x(h[0][0], h[0][1]), s.lineEnd();
      var b = s.clean(), I = a.result(), P, z = I.length, O, $, q;
      if (h.pop(), f.push(h), h = null, !!z) {
        if (b & 1) {
          if ($ = I[0], (O = $.length - 1) > 0) {
            for (u || (i.polygonStart(), u = !0), i.lineStart(), P = 0; P < O; ++P) i.point((q = $[P])[0], q[1]);
            i.lineEnd();
          }
          return;
        }
        z > 1 && b & 2 && I.push(I.pop().concat(I.shift())), l.push(I.filter(Gc));
      }
    }
    return c;
  };
}
function Gc(t) {
  return t.length > 1;
}
function Kc(t, n) {
  return ((t = t.x)[0] < 0 ? t[1] - lt - X : lt - t[1]) - ((n = n.x)[0] < 0 ? n[1] - lt - X : lt - n[1]);
}
const so = Ia(
  function() {
    return !0;
  },
  Zc,
  Qc,
  [-U, -lt]
);
function Zc(t) {
  var n = NaN, e = NaN, r = NaN, i;
  return {
    lineStart: function() {
      t.lineStart(), i = 1;
    },
    point: function(o, a) {
      var s = o > 0 ? U : -U, u = W(o - n);
      W(u - U) < X ? (t.point(n, e = (e + a) / 2 > 0 ? lt : -lt), t.point(r, e), t.lineEnd(), t.lineStart(), t.point(s, e), t.point(o, e), i = 0) : r !== s && u >= U && (W(n - r) < X && (n -= r * X), W(o - s) < X && (o -= s * X), e = Jc(n, e, o, a), t.point(r, e), t.lineEnd(), t.lineStart(), t.point(s, e), i = 0), t.point(n = o, e = a), r = s;
    },
    lineEnd: function() {
      t.lineEnd(), n = e = NaN;
    },
    clean: function() {
      return 2 - i;
    }
  };
}
function Jc(t, n, e, r) {
  var i, o, a = J(t - e);
  return W(a) > X ? Na((J(n) * (o = Z(r)) * J(e) - J(r) * (i = Z(n)) * J(t)) / (i * o * a)) : (n + r) / 2;
}
function Qc(t, n, e, r) {
  var i;
  if (t == null)
    i = e * lt, r.point(-U, i), r.point(0, i), r.point(U, i), r.point(U, 0), r.point(U, -i), r.point(0, -i), r.point(-U, -i), r.point(-U, 0), r.point(-U, i);
  else if (W(t[0] - n[0]) > X) {
    var o = t[0] < n[0] ? U : -U;
    i = e * o / 2, r.point(-o, i), r.point(0, i), r.point(o, i);
  } else
    r.point(n[0], n[1]);
}
function jc(t) {
  var n = Z(t), e = 2 * tt, r = n > 0, i = W(n) > X;
  function o(l, h, c, p) {
    Yc(p, t, e, c, l, h);
  }
  function a(l, h) {
    return Z(l) * Z(h) > n;
  }
  function s(l) {
    var h, c, p, v, m;
    return {
      lineStart: function() {
        v = p = !1, m = 1;
      },
      point: function(w, x) {
        var y = [w, x], S, b = a(w, x), I = r ? b ? 0 : f(w, x) : b ? f(w + (w < 0 ? U : -U), x) : 0;
        if (!h && (v = p = b) && l.lineStart(), b !== p && (S = u(h, y), (!S || be(h, S) || be(y, S)) && (y[2] = 1)), b !== p)
          m = 0, b ? (l.lineStart(), S = u(y, h), l.point(S[0], S[1])) : (S = u(h, y), l.point(S[0], S[1], 2), l.lineEnd()), h = S;
        else if (i && h && r ^ b) {
          var P;
          !(I & c) && (P = u(y, h, !0)) && (m = 0, r ? (l.lineStart(), l.point(P[0][0], P[0][1]), l.point(P[1][0], P[1][1]), l.lineEnd()) : (l.point(P[1][0], P[1][1]), l.lineEnd(), l.lineStart(), l.point(P[0][0], P[0][1], 3)));
        }
        b && (!h || !be(h, y)) && l.point(y[0], y[1]), h = y, p = b, c = I;
      },
      lineEnd: function() {
        p && l.lineEnd(), h = null;
      },
      // Rejoin first and last segments if there were intersections and the first
      // and last points were visible.
      clean: function() {
        return m | (v && p) << 1;
      }
    };
  }
  function u(l, h, c) {
    var p = Rn(l), v = Rn(h), m = [1, 0, 0], w = Fe(p, v), x = ve(w, w), y = w[0], S = x - y * y;
    if (!S) return !c && l;
    var b = n * x / S, I = -n * y / S, P = Fe(m, w), z = de(m, b), O = de(w, I);
    sr(z, O);
    var $ = P, q = ve(z, $), N = ve($, $), T = q * q - N * (ve(z, z) - 1);
    if (!(T < 0)) {
      var C = vn(T), d = de($, (-q - C) / N);
      if (sr(d, z), d = Ir(d), !c) return d;
      var _ = l[0], g = h[0], E = l[1], M = h[1], k;
      g < _ && (k = _, _ = g, g = k);
      var A = g - _, D = W(A - U) < X, L = D || A < X;
      if (!D && M < E && (k = E, E = M, M = k), L ? D ? E + M > 0 ^ d[1] < (W(d[0] - _) < X ? E : M) : E <= d[1] && d[1] <= M : A > U ^ (_ <= d[0] && d[0] <= g)) {
        var Y = de($, (-q + C) / N);
        return sr(Y, z), [d, Ir(Y)];
      }
    }
  }
  function f(l, h) {
    var c = r ? t : U - t, p = 0;
    return l < -c ? p |= 1 : l > c && (p |= 2), h < -c ? p |= 4 : h > c && (p |= 8), p;
  }
  return Ia(a, s, o, r ? [0, -t] : [-U, t - U]);
}
function th(t, n, e, r, i, o) {
  var a = t[0], s = t[1], u = n[0], f = n[1], l = 0, h = 1, c = u - a, p = f - s, v;
  if (v = e - a, !(!c && v > 0)) {
    if (v /= c, c < 0) {
      if (v < l) return;
      v < h && (h = v);
    } else if (c > 0) {
      if (v > h) return;
      v > l && (l = v);
    }
    if (v = i - a, !(!c && v < 0)) {
      if (v /= c, c < 0) {
        if (v > h) return;
        v > l && (l = v);
      } else if (c > 0) {
        if (v < l) return;
        v < h && (h = v);
      }
      if (v = r - s, !(!p && v > 0)) {
        if (v /= p, p < 0) {
          if (v < l) return;
          v < h && (h = v);
        } else if (p > 0) {
          if (v > h) return;
          v > l && (l = v);
        }
        if (v = o - s, !(!p && v < 0)) {
          if (v /= p, p < 0) {
            if (v > h) return;
            v > l && (l = v);
          } else if (p > 0) {
            if (v < l) return;
            v < h && (h = v);
          }
          return l > 0 && (t[0] = a + l * c, t[1] = s + l * p), h < 1 && (n[0] = a + h * c, n[1] = s + h * p), !0;
        }
      }
    }
  }
}
var Bn = 1e9, ge = -Bn;
function nh(t, n, e, r) {
  function i(f, l) {
    return t <= f && f <= e && n <= l && l <= r;
  }
  function o(f, l, h, c) {
    var p = 0, v = 0;
    if (f == null || (p = a(f, h)) !== (v = a(l, h)) || u(f, l) < 0 ^ h > 0)
      do
        c.point(p === 0 || p === 3 ? t : e, p > 1 ? r : n);
      while ((p = (p + h + 4) % 4) !== v);
    else
      c.point(l[0], l[1]);
  }
  function a(f, l) {
    return W(f[0] - t) < X ? l > 0 ? 0 : 3 : W(f[0] - e) < X ? l > 0 ? 2 : 1 : W(f[1] - n) < X ? l > 0 ? 1 : 0 : l > 0 ? 3 : 2;
  }
  function s(f, l) {
    return u(f.x, l.x);
  }
  function u(f, l) {
    var h = a(f, 1), c = a(l, 1);
    return h !== c ? h - c : h === 0 ? l[1] - f[1] : h === 1 ? f[0] - l[0] : h === 2 ? f[1] - l[1] : l[0] - f[0];
  }
  return function(f) {
    var l = f, h = ka(), c, p, v, m, w, x, y, S, b, I, P, z = {
      point: O,
      lineStart: T,
      lineEnd: C,
      polygonStart: q,
      polygonEnd: N
    };
    function O(_, g) {
      i(_, g) && l.point(_, g);
    }
    function $() {
      for (var _ = 0, g = 0, E = p.length; g < E; ++g)
        for (var M = p[g], k = 1, A = M.length, D = M[0], L, Y, B = D[0], Q = D[1]; k < A; ++k)
          L = B, Y = Q, D = M[k], B = D[0], Q = D[1], Y <= r ? Q > r && (B - L) * (r - Y) > (Q - Y) * (t - L) && ++_ : Q <= r && (B - L) * (r - Y) < (Q - Y) * (t - L) && --_;
      return _;
    }
    function q() {
      l = h, c = [], p = [], P = !0;
    }
    function N() {
      var _ = $(), g = P && _, E = (c = ta(c)).length;
      (g || E) && (f.polygonStart(), g && (f.lineStart(), o(null, null, 1, f), f.lineEnd()), E && Ta(c, s, _, o, f), f.polygonEnd()), l = f, c = p = v = null;
    }
    function T() {
      z.point = d, p && p.push(v = []), I = !0, b = !1, y = S = NaN;
    }
    function C() {
      c && (d(m, w), x && b && h.rejoin(), c.push(h.result())), z.point = O, b && l.lineEnd();
    }
    function d(_, g) {
      var E = i(_, g);
      if (p && v.push([_, g]), I)
        m = _, w = g, x = E, I = !1, E && (l.lineStart(), l.point(_, g));
      else if (E && b) l.point(_, g);
      else {
        var M = [y = Math.max(ge, Math.min(Bn, y)), S = Math.max(ge, Math.min(Bn, S))], k = [_ = Math.max(ge, Math.min(Bn, _)), g = Math.max(ge, Math.min(Bn, g))];
        th(M, k, t, n, e, r) ? (b || (l.lineStart(), l.point(M[0], M[1])), l.point(k[0], k[1]), E || l.lineEnd(), P = !1) : E && (l.lineStart(), l.point(_, g), P = !1);
      }
      y = _, S = g, b = E;
    }
    return z;
  };
}
const $r = (t) => t;
var lr = new un(), Or = new un(), Ra, Pa, Dr, zr, Ft = {
  point: wt,
  lineStart: wt,
  lineEnd: wt,
  polygonStart: function() {
    Ft.lineStart = eh, Ft.lineEnd = ih;
  },
  polygonEnd: function() {
    Ft.lineStart = Ft.lineEnd = Ft.point = wt, lr.add(W(Or)), Or = new un();
  },
  result: function() {
    var t = lr / 2;
    return lr = new un(), t;
  }
};
function eh() {
  Ft.point = rh;
}
function rh(t, n) {
  Ft.point = Ca, Ra = Dr = t, Pa = zr = n;
}
function Ca(t, n) {
  Or.add(zr * t - Dr * n), Dr = t, zr = n;
}
function ih() {
  Ca(Ra, Pa);
}
var Pn = 1 / 0, Ue = Pn, oe = -Pn, He = oe, Ve = {
  point: oh,
  lineStart: wt,
  lineEnd: wt,
  polygonStart: wt,
  polygonEnd: wt,
  result: function() {
    var t = [[Pn, Ue], [oe, He]];
    return oe = He = -(Ue = Pn = 1 / 0), t;
  }
};
function oh(t, n) {
  t < Pn && (Pn = t), t > oe && (oe = t), n < Ue && (Ue = n), n > He && (He = n);
}
var Lr = 0, qr = 0, Xn = 0, Be = 0, Xe = 0, En = 0, Fr = 0, Ur = 0, Yn = 0, $a, Oa, Rt, Pt, yt = {
  point: fn,
  lineStart: uo,
  lineEnd: lo,
  polygonStart: function() {
    yt.lineStart = uh, yt.lineEnd = lh;
  },
  polygonEnd: function() {
    yt.point = fn, yt.lineStart = uo, yt.lineEnd = lo;
  },
  result: function() {
    var t = Yn ? [Fr / Yn, Ur / Yn] : En ? [Be / En, Xe / En] : Xn ? [Lr / Xn, qr / Xn] : [NaN, NaN];
    return Lr = qr = Xn = Be = Xe = En = Fr = Ur = Yn = 0, t;
  }
};
function fn(t, n) {
  Lr += t, qr += n, ++Xn;
}
function uo() {
  yt.point = ah;
}
function ah(t, n) {
  yt.point = sh, fn(Rt = t, Pt = n);
}
function sh(t, n) {
  var e = t - Rt, r = n - Pt, i = vn(e * e + r * r);
  Be += i * (Rt + t) / 2, Xe += i * (Pt + n) / 2, En += i, fn(Rt = t, Pt = n);
}
function lo() {
  yt.point = fn;
}
function uh() {
  yt.point = fh;
}
function lh() {
  Da($a, Oa);
}
function fh(t, n) {
  yt.point = Da, fn($a = Rt = t, Oa = Pt = n);
}
function Da(t, n) {
  var e = t - Rt, r = n - Pt, i = vn(e * e + r * r);
  Be += i * (Rt + t) / 2, Xe += i * (Pt + n) / 2, En += i, i = Pt * t - Rt * n, Fr += i * (Rt + t), Ur += i * (Pt + n), Yn += i * 3, fn(Rt = t, Pt = n);
}
function za(t) {
  this._context = t;
}
za.prototype = {
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
  point: function(t, n) {
    switch (this._point) {
      case 0: {
        this._context.moveTo(t, n), this._point = 1;
        break;
      }
      case 1: {
        this._context.lineTo(t, n);
        break;
      }
      default: {
        this._context.moveTo(t + this._radius, n), this._context.arc(t, n, this._radius, 0, _t);
        break;
      }
    }
  },
  result: wt
};
var Hr = new un(), fr, La, qa, Wn, Gn, ae = {
  point: wt,
  lineStart: function() {
    ae.point = ch;
  },
  lineEnd: function() {
    fr && Fa(La, qa), ae.point = wt;
  },
  polygonStart: function() {
    fr = !0;
  },
  polygonEnd: function() {
    fr = null;
  },
  result: function() {
    var t = +Hr;
    return Hr = new un(), t;
  }
};
function ch(t, n) {
  ae.point = Fa, La = Wn = t, qa = Gn = n;
}
function Fa(t, n) {
  Wn -= t, Gn -= n, Hr.add(vn(Wn * Wn + Gn * Gn)), Wn = t, Gn = n;
}
let fo, Ye, co, ho;
class po {
  constructor(n) {
    this._append = n == null ? Ua : hh(n), this._radius = 4.5, this._ = "";
  }
  pointRadius(n) {
    return this._radius = +n, this;
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
  point(n, e) {
    switch (this._point) {
      case 0: {
        this._append`M${n},${e}`, this._point = 1;
        break;
      }
      case 1: {
        this._append`L${n},${e}`;
        break;
      }
      default: {
        if (this._append`M${n},${e}`, this._radius !== co || this._append !== Ye) {
          const r = this._radius, i = this._;
          this._ = "", this._append`m0,${r}a${r},${r} 0 1,1 0,${-2 * r}a${r},${r} 0 1,1 0,${2 * r}z`, co = r, Ye = this._append, ho = this._, this._ = i;
        }
        this._ += ho;
        break;
      }
    }
  }
  result() {
    const n = this._;
    return this._ = "", n.length ? n : null;
  }
}
function Ua(t) {
  let n = 1;
  this._ += t[0];
  for (const e = t.length; n < e; ++n)
    this._ += arguments[n] + t[n];
}
function hh(t) {
  const n = Math.floor(t);
  if (!(n >= 0)) throw new RangeError(`invalid digits: ${t}`);
  if (n > 15) return Ua;
  if (n !== fo) {
    const e = 10 ** n;
    fo = n, Ye = function(i) {
      let o = 1;
      this._ += i[0];
      for (const a = i.length; o < a; ++o)
        this._ += Math.round(arguments[o] * e) / e + i[o];
    };
  }
  return Ye;
}
function ph(t, n) {
  let e = 3, r = 4.5, i, o;
  function a(s) {
    return s && (typeof r == "function" && o.pointRadius(+r.apply(this, arguments)), yn(s, i(o))), o.result();
  }
  return a.area = function(s) {
    return yn(s, i(Ft)), Ft.result();
  }, a.measure = function(s) {
    return yn(s, i(ae)), ae.result();
  }, a.bounds = function(s) {
    return yn(s, i(Ve)), Ve.result();
  }, a.centroid = function(s) {
    return yn(s, i(yt)), yt.result();
  }, a.projection = function(s) {
    return arguments.length ? (i = s == null ? (t = null, $r) : (t = s).stream, a) : t;
  }, a.context = function(s) {
    return arguments.length ? (o = s == null ? (n = null, new po(e)) : new za(n = s), typeof r != "function" && o.pointRadius(r), a) : n;
  }, a.pointRadius = function(s) {
    return arguments.length ? (r = typeof s == "function" ? s : (o.pointRadius(+s), +s), a) : r;
  }, a.digits = function(s) {
    if (!arguments.length) return e;
    if (s == null) e = null;
    else {
      const u = Math.floor(s);
      if (!(u >= 0)) throw new RangeError(`invalid digits: ${s}`);
      e = u;
    }
    return n === null && (o = new po(e)), a;
  }, a.projection(t).digits(e).context(n);
}
function _i(t) {
  return function(n) {
    var e = new Vr();
    for (var r in t) e[r] = t[r];
    return e.stream = n, e;
  };
}
function Vr() {
}
Vr.prototype = {
  constructor: Vr,
  point: function(t, n) {
    this.stream.point(t, n);
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
function gi(t, n, e) {
  var r = t.clipExtent && t.clipExtent();
  return t.scale(150).translate([0, 0]), r != null && t.clipExtent(null), yn(e, t.stream(Ve)), n(Ve.result()), r != null && t.clipExtent(r), t;
}
function Ha(t, n, e) {
  return gi(t, function(r) {
    var i = n[1][0] - n[0][0], o = n[1][1] - n[0][1], a = Math.min(i / (r[1][0] - r[0][0]), o / (r[1][1] - r[0][1])), s = +n[0][0] + (i - a * (r[1][0] + r[0][0])) / 2, u = +n[0][1] + (o - a * (r[1][1] + r[0][1])) / 2;
    t.scale(150 * a).translate([s, u]);
  }, e);
}
function vh(t, n, e) {
  return Ha(t, [[0, 0], n], e);
}
function dh(t, n, e) {
  return gi(t, function(r) {
    var i = +n, o = i / (r[1][0] - r[0][0]), a = (i - o * (r[1][0] + r[0][0])) / 2, s = -o * r[0][1];
    t.scale(150 * o).translate([a, s]);
  }, e);
}
function _h(t, n, e) {
  return gi(t, function(r) {
    var i = +n, o = i / (r[1][1] - r[0][1]), a = -o * r[0][0], s = (i - o * (r[1][1] + r[0][1])) / 2;
    t.scale(150 * o).translate([a, s]);
  }, e);
}
var vo = 16, gh = Z(30 * tt);
function _o(t, n) {
  return +n ? yh(t, n) : mh(t);
}
function mh(t) {
  return _i({
    point: function(n, e) {
      n = t(n, e), this.stream.point(n[0], n[1]);
    }
  });
}
function yh(t, n) {
  function e(r, i, o, a, s, u, f, l, h, c, p, v, m, w) {
    var x = f - r, y = l - i, S = x * x + y * y;
    if (S > 4 * n && m--) {
      var b = a + c, I = s + p, P = u + v, z = vn(b * b + I * I + P * P), O = ie(P /= z), $ = W(W(P) - 1) < X || W(o - h) < X ? (o + h) / 2 : re(I, b), q = t($, O), N = q[0], T = q[1], C = N - r, d = T - i, _ = y * C - x * d;
      (_ * _ / S > n || W((x * C + y * d) / S - 0.5) > 0.3 || a * c + s * p + u * v < gh) && (e(r, i, o, a, s, u, N, T, $, b /= z, I /= z, P, m, w), w.point(N, T), e(N, T, $, b, I, P, f, l, h, c, p, v, m, w));
    }
  }
  return function(r) {
    var i, o, a, s, u, f, l, h, c, p, v, m, w = {
      point: x,
      lineStart: y,
      lineEnd: b,
      polygonStart: function() {
        r.polygonStart(), w.lineStart = I;
      },
      polygonEnd: function() {
        r.polygonEnd(), w.lineStart = y;
      }
    };
    function x(O, $) {
      O = t(O, $), r.point(O[0], O[1]);
    }
    function y() {
      h = NaN, w.point = S, r.lineStart();
    }
    function S(O, $) {
      var q = Rn([O, $]), N = t(O, $);
      e(h, c, l, p, v, m, h = N[0], c = N[1], l = O, p = q[0], v = q[1], m = q[2], vo, r), r.point(h, c);
    }
    function b() {
      w.point = x, r.lineEnd();
    }
    function I() {
      y(), w.point = P, w.lineEnd = z;
    }
    function P(O, $) {
      S(i = O, $), o = h, a = c, s = p, u = v, f = m, w.point = S;
    }
    function z() {
      e(h, c, l, p, v, m, o, a, i, s, u, f, vo, r), w.lineEnd = b, b();
    }
    return w;
  };
}
var wh = _i({
  point: function(t, n) {
    this.stream.point(t * tt, n * tt);
  }
});
function xh(t) {
  return _i({
    point: function(n, e) {
      var r = t(n, e);
      return this.stream.point(r[0], r[1]);
    }
  });
}
function Eh(t, n, e, r, i) {
  function o(a, s) {
    return a *= r, s *= i, [n + t * a, e - t * s];
  }
  return o.invert = function(a, s) {
    return [(a - n) / t * r, (e - s) / t * i];
  }, o;
}
function go(t, n, e, r, i, o) {
  if (!o) return Eh(t, n, e, r, i);
  var a = Z(o), s = J(o), u = a * t, f = s * t, l = a / t, h = s / t, c = (s * e - a * n) / t, p = (s * n + a * e) / t;
  function v(m, w) {
    return m *= r, w *= i, [u * m - f * w + n, e - f * m - u * w];
  }
  return v.invert = function(m, w) {
    return [r * (l * m - h * w + c), i * (p - h * m - l * w)];
  }, v;
}
function Sh(t) {
  return bh(function() {
    return t;
  })();
}
function bh(t) {
  var n, e = 150, r = 480, i = 250, o = 0, a = 0, s = 0, u = 0, f = 0, l, h = 0, c = 1, p = 1, v = null, m = so, w = null, x, y, S, b = $r, I = 0.5, P, z, O, $, q;
  function N(_) {
    return O(_[0] * tt, _[1] * tt);
  }
  function T(_) {
    return _ = O.invert(_[0], _[1]), _ && [_[0] * pt, _[1] * pt];
  }
  N.stream = function(_) {
    return $ && q === _ ? $ : $ = wh(xh(l)(m(P(b(q = _)))));
  }, N.preclip = function(_) {
    return arguments.length ? (m = _, v = void 0, d()) : m;
  }, N.postclip = function(_) {
    return arguments.length ? (b = _, w = x = y = S = null, d()) : b;
  }, N.clipAngle = function(_) {
    return arguments.length ? (m = +_ ? jc(v = _ * tt) : (v = null, so), d()) : v * pt;
  }, N.clipExtent = function(_) {
    return arguments.length ? (b = _ == null ? (w = x = y = S = null, $r) : nh(w = +_[0][0], x = +_[0][1], y = +_[1][0], S = +_[1][1]), d()) : w == null ? null : [[w, x], [y, S]];
  }, N.scale = function(_) {
    return arguments.length ? (e = +_, C()) : e;
  }, N.translate = function(_) {
    return arguments.length ? (r = +_[0], i = +_[1], C()) : [r, i];
  }, N.center = function(_) {
    return arguments.length ? (o = _[0] % 360 * tt, a = _[1] % 360 * tt, C()) : [o * pt, a * pt];
  }, N.rotate = function(_) {
    return arguments.length ? (s = _[0] % 360 * tt, u = _[1] % 360 * tt, f = _.length > 2 ? _[2] % 360 * tt : 0, C()) : [s * pt, u * pt, f * pt];
  }, N.angle = function(_) {
    return arguments.length ? (h = _ % 360 * tt, C()) : h * pt;
  }, N.reflectX = function(_) {
    return arguments.length ? (c = _ ? -1 : 1, C()) : c < 0;
  }, N.reflectY = function(_) {
    return arguments.length ? (p = _ ? -1 : 1, C()) : p < 0;
  }, N.precision = function(_) {
    return arguments.length ? (P = _o(z, I = _ * _), d()) : vn(I);
  }, N.fitExtent = function(_, g) {
    return Ha(N, _, g);
  }, N.fitSize = function(_, g) {
    return vh(N, _, g);
  }, N.fitWidth = function(_, g) {
    return dh(N, _, g);
  }, N.fitHeight = function(_, g) {
    return _h(N, _, g);
  };
  function C() {
    var _ = go(e, 0, 0, c, p, h).apply(null, n(o, a)), g = go(e, r - _[0], i - _[1], c, p, h);
    return l = Aa(s, u, f), z = Pr(n, g), O = Pr(l, z), P = _o(z, I), d();
  }
  function d() {
    return $ = q = null, N;
  }
  return function() {
    return n = t.apply(this, arguments), N.invert = n.invert && T, C();
  };
}
function mi(t, n) {
  return [t, Uc(Vc((lt + n) / 2))];
}
mi.invert = function(t, n) {
  return [t, 2 * Na(Fc(n)) - lt];
};
function Mh() {
  return Nh(mi).scale(961 / _t);
}
function Nh(t) {
  var n = Sh(t), e = n.center, r = n.scale, i = n.translate, o = n.clipExtent, a = null, s, u, f;
  n.scale = function(h) {
    return arguments.length ? (r(h), l()) : r();
  }, n.translate = function(h) {
    return arguments.length ? (i(h), l()) : i();
  }, n.center = function(h) {
    return arguments.length ? (e(h), l()) : e();
  }, n.clipExtent = function(h) {
    return arguments.length ? (h == null ? a = s = u = f = null : (a = +h[0][0], s = +h[0][1], u = +h[1][0], f = +h[1][1]), l()) : a == null ? null : [[a, s], [u, f]];
  };
  function l() {
    var h = U * r(), c = n(Xc(n.rotate()).invert([0, 0]));
    return o(a == null ? [[c[0] - h, c[1] - h], [c[0] + h, c[1] + h]] : t === mi ? [[Math.max(c[0] - h, a), s], [Math.min(c[0] + h, u), f]] : [[a, Math.max(c[1] - h, s)], [u, Math.min(c[1] + h, f)]]);
  }
  return l();
}
const me = (t) => () => t;
function Ah(t, {
  sourceEvent: n,
  target: e,
  transform: r,
  dispatch: i
}) {
  Object.defineProperties(this, {
    type: { value: t, enumerable: !0, configurable: !0 },
    sourceEvent: { value: n, enumerable: !0, configurable: !0 },
    target: { value: e, enumerable: !0, configurable: !0 },
    transform: { value: r, enumerable: !0, configurable: !0 },
    _: { value: i }
  });
}
function Ht(t, n, e) {
  this.k = t, this.x = n, this.y = e;
}
Ht.prototype = {
  constructor: Ht,
  scale: function(t) {
    return t === 1 ? this : new Ht(this.k * t, this.x, this.y);
  },
  translate: function(t, n) {
    return t === 0 & n === 0 ? this : new Ht(this.k, this.x + this.k * t, this.y + this.k * n);
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
var yi = new Ht(1, 0, 0);
Ht.prototype;
function cr(t) {
  t.stopImmediatePropagation();
}
function Fn(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function kh(t) {
  return (!t.ctrlKey || t.type === "wheel") && !t.button;
}
function Th() {
  var t = this;
  return t instanceof SVGElement ? (t = t.ownerSVGElement || t, t.hasAttribute("viewBox") ? (t = t.viewBox.baseVal, [[t.x, t.y], [t.x + t.width, t.y + t.height]]) : [[0, 0], [t.width.baseVal.value, t.height.baseVal.value]]) : [[0, 0], [t.clientWidth, t.clientHeight]];
}
function mo() {
  return this.__zoom || yi;
}
function Ih(t) {
  return -t.deltaY * (t.deltaMode === 1 ? 0.05 : t.deltaMode ? 1 : 2e-3) * (t.ctrlKey ? 10 : 1);
}
function Rh() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Ph(t, n, e) {
  var r = t.invertX(n[0][0]) - e[0][0], i = t.invertX(n[1][0]) - e[1][0], o = t.invertY(n[0][1]) - e[0][1], a = t.invertY(n[1][1]) - e[1][1];
  return t.translate(
    i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i),
    a > o ? (o + a) / 2 : Math.min(0, o) || Math.max(0, a)
  );
}
function Ch() {
  var t = kh, n = Th, e = Ph, r = Ih, i = Rh, o = [0, 1 / 0], a = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], s = 250, u = kf, f = li("start", "zoom", "end"), l, h, c, p = 500, v = 150, m = 0, w = 10;
  function x(d) {
    d.property("__zoom", mo).on("wheel.zoom", O, { passive: !1 }).on("mousedown.zoom", $).on("dblclick.zoom", q).filter(i).on("touchstart.zoom", N).on("touchmove.zoom", T).on("touchend.zoom touchcancel.zoom", C).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  x.transform = function(d, _, g, E) {
    var M = d.selection ? d.selection() : d;
    M.property("__zoom", mo), d !== M ? I(d, _, g, E) : M.interrupt().each(function() {
      P(this, arguments).event(E).start().zoom(null, typeof _ == "function" ? _.apply(this, arguments) : _).end();
    });
  }, x.scaleBy = function(d, _, g, E) {
    x.scaleTo(d, function() {
      var M = this.__zoom.k, k = typeof _ == "function" ? _.apply(this, arguments) : _;
      return M * k;
    }, g, E);
  }, x.scaleTo = function(d, _, g, E) {
    x.transform(d, function() {
      var M = n.apply(this, arguments), k = this.__zoom, A = g == null ? b(M) : typeof g == "function" ? g.apply(this, arguments) : g, D = k.invert(A), L = typeof _ == "function" ? _.apply(this, arguments) : _;
      return e(S(y(k, L), A, D), M, a);
    }, g, E);
  }, x.translateBy = function(d, _, g, E) {
    x.transform(d, function() {
      return e(this.__zoom.translate(
        typeof _ == "function" ? _.apply(this, arguments) : _,
        typeof g == "function" ? g.apply(this, arguments) : g
      ), n.apply(this, arguments), a);
    }, null, E);
  }, x.translateTo = function(d, _, g, E, M) {
    x.transform(d, function() {
      var k = n.apply(this, arguments), A = this.__zoom, D = E == null ? b(k) : typeof E == "function" ? E.apply(this, arguments) : E;
      return e(yi.translate(D[0], D[1]).scale(A.k).translate(
        typeof _ == "function" ? -_.apply(this, arguments) : -_,
        typeof g == "function" ? -g.apply(this, arguments) : -g
      ), k, a);
    }, E, M);
  };
  function y(d, _) {
    return _ = Math.max(o[0], Math.min(o[1], _)), _ === d.k ? d : new Ht(_, d.x, d.y);
  }
  function S(d, _, g) {
    var E = _[0] - g[0] * d.k, M = _[1] - g[1] * d.k;
    return E === d.x && M === d.y ? d : new Ht(d.k, E, M);
  }
  function b(d) {
    return [(+d[0][0] + +d[1][0]) / 2, (+d[0][1] + +d[1][1]) / 2];
  }
  function I(d, _, g, E) {
    d.on("start.zoom", function() {
      P(this, arguments).event(E).start();
    }).on("interrupt.zoom end.zoom", function() {
      P(this, arguments).event(E).end();
    }).tween("zoom", function() {
      var M = this, k = arguments, A = P(M, k).event(E), D = n.apply(M, k), L = g == null ? b(D) : typeof g == "function" ? g.apply(M, k) : g, Y = Math.max(D[1][0] - D[0][0], D[1][1] - D[0][1]), B = M.__zoom, Q = typeof _ == "function" ? _.apply(M, k) : _, St = u(B.invert(L).concat(Y / B.k), Q.invert(L).concat(Y / Q.k));
      return function(ft) {
        if (ft === 1) ft = Q;
        else {
          var bt = St(ft), zn = Y / bt[2];
          ft = new Ht(zn, L[0] - bt[0] * zn, L[1] - bt[1] * zn);
        }
        A.zoom(null, ft);
      };
    });
  }
  function P(d, _, g) {
    return !g && d.__zooming || new z(d, _);
  }
  function z(d, _) {
    this.that = d, this.args = _, this.active = 0, this.sourceEvent = null, this.extent = n.apply(d, _), this.taps = 0;
  }
  z.prototype = {
    event: function(d) {
      return d && (this.sourceEvent = d), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(d, _) {
      return this.mouse && d !== "mouse" && (this.mouse[1] = _.invert(this.mouse[0])), this.touch0 && d !== "touch" && (this.touch0[1] = _.invert(this.touch0[0])), this.touch1 && d !== "touch" && (this.touch1[1] = _.invert(this.touch1[0])), this.that.__zoom = _, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(d) {
      var _ = at(this.that).datum();
      f.call(
        d,
        this.that,
        new Ah(d, {
          sourceEvent: this.sourceEvent,
          target: x,
          transform: this.that.__zoom,
          dispatch: f
        }),
        _
      );
    }
  };
  function O(d, ..._) {
    if (!t.apply(this, arguments)) return;
    var g = P(this, _).event(d), E = this.__zoom, M = Math.max(o[0], Math.min(o[1], E.k * Math.pow(2, r.apply(this, arguments)))), k = jt(d);
    if (g.wheel)
      (g.mouse[0][0] !== k[0] || g.mouse[0][1] !== k[1]) && (g.mouse[1] = E.invert(g.mouse[0] = k)), clearTimeout(g.wheel);
    else {
      if (E.k === M) return;
      g.mouse = [k, E.invert(k)], Se(this), g.start();
    }
    Fn(d), g.wheel = setTimeout(A, v), g.zoom("mouse", e(S(y(E, M), g.mouse[0], g.mouse[1]), g.extent, a));
    function A() {
      g.wheel = null, g.end();
    }
  }
  function $(d, ..._) {
    if (c || !t.apply(this, arguments)) return;
    var g = d.currentTarget, E = P(this, _, !0).event(d), M = at(d.view).on("mousemove.zoom", L, !0).on("mouseup.zoom", Y, !0), k = jt(d, g), A = d.clientX, D = d.clientY;
    tf(d.view), cr(d), E.mouse = [k, this.__zoom.invert(k)], Se(this), E.start();
    function L(B) {
      if (Fn(B), !E.moved) {
        var Q = B.clientX - A, St = B.clientY - D;
        E.moved = Q * Q + St * St > m;
      }
      E.event(B).zoom("mouse", e(S(E.that.__zoom, E.mouse[0] = jt(B, g), E.mouse[1]), E.extent, a));
    }
    function Y(B) {
      M.on("mousemove.zoom mouseup.zoom", null), nf(B.view, E.moved), Fn(B), E.event(B).end();
    }
  }
  function q(d, ..._) {
    if (t.apply(this, arguments)) {
      var g = this.__zoom, E = jt(d.changedTouches ? d.changedTouches[0] : d, this), M = g.invert(E), k = g.k * (d.shiftKey ? 0.5 : 2), A = e(S(y(g, k), E, M), n.apply(this, _), a);
      Fn(d), s > 0 ? at(this).transition().duration(s).call(I, A, E, d) : at(this).call(x.transform, A, E, d);
    }
  }
  function N(d, ..._) {
    if (t.apply(this, arguments)) {
      var g = d.touches, E = g.length, M = P(this, _, d.changedTouches.length === E).event(d), k, A, D, L;
      for (cr(d), A = 0; A < E; ++A)
        D = g[A], L = jt(D, this), L = [L, this.__zoom.invert(L), D.identifier], M.touch0 ? !M.touch1 && M.touch0[2] !== L[2] && (M.touch1 = L, M.taps = 0) : (M.touch0 = L, k = !0, M.taps = 1 + !!l);
      l && (l = clearTimeout(l)), k && (M.taps < 2 && (h = L[0], l = setTimeout(function() {
        l = null;
      }, p)), Se(this), M.start());
    }
  }
  function T(d, ..._) {
    if (this.__zooming) {
      var g = P(this, _).event(d), E = d.changedTouches, M = E.length, k, A, D, L;
      for (Fn(d), k = 0; k < M; ++k)
        A = E[k], D = jt(A, this), g.touch0 && g.touch0[2] === A.identifier ? g.touch0[0] = D : g.touch1 && g.touch1[2] === A.identifier && (g.touch1[0] = D);
      if (A = g.that.__zoom, g.touch1) {
        var Y = g.touch0[0], B = g.touch0[1], Q = g.touch1[0], St = g.touch1[1], ft = (ft = Q[0] - Y[0]) * ft + (ft = Q[1] - Y[1]) * ft, bt = (bt = St[0] - B[0]) * bt + (bt = St[1] - B[1]) * bt;
        A = y(A, Math.sqrt(ft / bt)), D = [(Y[0] + Q[0]) / 2, (Y[1] + Q[1]) / 2], L = [(B[0] + St[0]) / 2, (B[1] + St[1]) / 2];
      } else if (g.touch0) D = g.touch0[0], L = g.touch0[1];
      else return;
      g.zoom("touch", e(S(A, D, L), g.extent, a));
    }
  }
  function C(d, ..._) {
    if (this.__zooming) {
      var g = P(this, _).event(d), E = d.changedTouches, M = E.length, k, A;
      for (cr(d), c && clearTimeout(c), c = setTimeout(function() {
        c = null;
      }, p), k = 0; k < M; ++k)
        A = E[k], g.touch0 && g.touch0[2] === A.identifier ? delete g.touch0 : g.touch1 && g.touch1[2] === A.identifier && delete g.touch1;
      if (g.touch1 && !g.touch0 && (g.touch0 = g.touch1, delete g.touch1), g.touch0) g.touch0[1] = this.__zoom.invert(g.touch0[0]);
      else if (g.end(), g.taps === 2 && (A = jt(A, this), Math.hypot(h[0] - A[0], h[1] - A[1]) < w)) {
        var D = at(this).on("dblclick.zoom");
        D && D.apply(this, arguments);
      }
    }
  }
  return x.wheelDelta = function(d) {
    return arguments.length ? (r = typeof d == "function" ? d : me(+d), x) : r;
  }, x.filter = function(d) {
    return arguments.length ? (t = typeof d == "function" ? d : me(!!d), x) : t;
  }, x.touchable = function(d) {
    return arguments.length ? (i = typeof d == "function" ? d : me(!!d), x) : i;
  }, x.extent = function(d) {
    return arguments.length ? (n = typeof d == "function" ? d : me([[+d[0][0], +d[0][1]], [+d[1][0], +d[1][1]]]), x) : n;
  }, x.scaleExtent = function(d) {
    return arguments.length ? (o[0] = +d[0], o[1] = +d[1], x) : [o[0], o[1]];
  }, x.translateExtent = function(d) {
    return arguments.length ? (a[0][0] = +d[0][0], a[1][0] = +d[1][0], a[0][1] = +d[0][1], a[1][1] = +d[1][1], x) : [[a[0][0], a[0][1]], [a[1][0], a[1][1]]];
  }, x.constrain = function(d) {
    return arguments.length ? (e = d, x) : e;
  }, x.duration = function(d) {
    return arguments.length ? (s = +d, x) : s;
  }, x.interpolate = function(d) {
    return arguments.length ? (u = d, x) : u;
  }, x.on = function() {
    var d = f.on.apply(f, arguments);
    return d === f ? x : d;
  }, x.clickDistance = function(d) {
    return arguments.length ? (m = (d = +d) * d, x) : Math.sqrt(m);
  }, x.tapDistance = function(d) {
    return arguments.length ? (w = +d, x) : w;
  }, x;
}
var $h = /* @__PURE__ */ Dt('<div class="loading svelte-gouuy3"><p>Carregando mapa interativo...</p> <p>Isso pode demorar alguns segundos devido ao tamanho do arquivo.</p></div>'), Oh = /* @__PURE__ */ Dt('<div class="error svelte-gouuy3"><p> </p></div>'), Dh = /* @__PURE__ */ Dt('<div class="interactive-map-container svelte-gouuy3"><!> <div class="map-wrapper svelte-gouuy3"></div> <div class="zoom-controls svelte-gouuy3"><button class="zoom-btn svelte-gouuy3">+</button> <button class="zoom-btn svelte-gouuy3">−</button> <button class="zoom-btn svelte-gouuy3">⌂</button></div> <div class="legend-container svelte-gouuy3"><div class="legend-item svelte-gouuy3"><div class="legend-color color-beige svelte-gouuy3"></div> <span>Sem RAI e sem portal</span></div> <div class="legend-item svelte-gouuy3"><div class="legend-color color-light-purple-gray svelte-gouuy3"></div> <span>Município com Responsável de Acesso à Informação</span></div> <div class="legend-item svelte-gouuy3"><div class="legend-color color-red svelte-gouuy3"></div> <span>Município com RAI e Portal de Dados Abertos</span></div> <div class="legend-item svelte-gouuy3"><div class="legend-color color-orange svelte-gouuy3"></div> <span>Município com Portal de Dados Abertos e sem RAI</span></div></div></div>');
function zh(t, n) {
  jr(n, !1);
  let e = /* @__PURE__ */ Ut(), r = [], i = null, o = /* @__PURE__ */ Ut(!0), a = /* @__PURE__ */ Ut(null), s = /* @__PURE__ */ Ut(null), u = null, f = _u(n, "selectedMunicipio", 8, ""), l = !1;
  Zo(() => {
    l || h();
  });
  async function h() {
    if (!l)
      try {
        const N = await fetch("./static/municipios.csv");
        if (!N.ok)
          throw new Error(`Erro ao carregar CSV: ${N.status}`);
        const C = (await N.text()).split(`
`), d = C[0].split(";");
        r = C.slice(1).map((E) => {
          const M = E.split(";"), k = {};
          return d.forEach((A, D) => {
            k[A] = M[D];
          }), k;
        }).filter((E) => E.MUNICIPIO).reduce(
          (E, M) => (E[M.MUNICIPIO] = M, E),
          {}
        ), console.log("CSV carregado com", Object.keys(r).length, "municípios"), console.log("Exemplos de municípios no CSV:", Object.keys(r).slice(0, 5)), console.log("Primeiros 5 municípios do CSV:", Object.keys(r).slice(0, 5).map((E) => ({ nome: E, dados: r[E] })));
        const g = await fetch("./static/PortugalM.geojson");
        if (!g.ok)
          throw new Error(`Erro ao carregar GeoJSON: ${g.status}`);
        i = await g.json(), c(), F(o, !1), l = !0;
      } catch (N) {
        console.error("Erro ao carregar dados:", N), F(a, N.message), F(o, !1);
      }
  }
  function c() {
    if (!i || !R(e))
      return;
    const N = 800, T = 500;
    at(R(e)).selectAll("*").remove();
    const C = at(R(e)).append("svg").attr("width", "100%").attr("height", "100%").attr("viewBox", `0 0 ${N} ${T}`).style("background", "transparent").style("cursor", "grab"), d = Ch().scaleExtent([1, 8]).on("zoom", (_) => {
      C.selectAll("path").attr("transform", _.transform);
    });
    C.call(d), u = d;
    try {
      const _ = Mh().center([-11, 39.2]).scale(6500).translate([N / 2 - 350, T / 2]), g = ph().projection(_), E = at("body").append("div").attr("id", "map-tooltip").style("position", "absolute").style("background", "rgba(0, 0, 0, 0.8)").style("color", "white").style("padding", "8px 12px").style("border-radius", "4px").style("font-size", "12px").style("font-family", "'Bai Jamjuree', sans-serif").style("pointer-events", "none").style("z-index", "1000").style("opacity", "0").style("transition", "opacity 0.2s");
      F(s, C.selectAll("path").data(i.features).enter().append("path").attr("d", g).attr("fill", (M) => {
        const k = M.properties.NAME_2, A = r[k];
        return (M.properties.NAME_2 === "Évora" || M.properties.NAME_2 === "Lisboa" || M.properties.NAME_2 === "Porto") && (console.log("Município:", M.properties.NAME_2, "Dados encontrados:", A), A && console.log("RAI:", A.RAI, "PORTAL:", A.PORTAL)), A && A.RAI?.trim().toUpperCase() === "SIM" && A.PORTAL && A.PORTAL.trim() !== "NAO" && A.PORTAL.trim().startsWith("http") ? "#c44c49" : A && A.RAI?.trim().toUpperCase() === "SIM" ? "rgb(191, 170, 234)" : A && A.PORTAL && A.PORTAL.trim() !== "NAO" && A.PORTAL.trim().startsWith("http") ? "#de866b" : A ? "#f8f1e7" : "#E0E0E0";
      }).attr("stroke", "#de6e4c").attr("stroke-width", "0.5").style("cursor", "pointer").style("opacity", "1").style("transition", "opacity 0.3s").on("mouseover", function(M, k) {
        at(this).attr("stroke", "#000").attr("stroke-width", "1.5").style("filter", "brightness(1.1)");
        const A = k.properties.NAME_2 || k.properties.name || "Desconhecido", D = r[A];
        let L = `<strong>${A}</strong>`;
        if (D) {
          const Y = D.RAI?.trim().toUpperCase() === "SIM" ? "Sim" : "Não";
          L += `<br/>RAI: ${Y}`;
          const B = D.PORTAL?.trim();
          B && B !== "NAO" && B.startsWith("http") ? L += `<br/>Portal: <a href="${B}" target="_blank">${B}</a>` : L += "<br/>Portal: Não", D.DISTRITO && (L += `<br/>Distrito: ${D.DISTRITO}`);
        } else
          L += "<br/><em>Sem dados disponíveis</em>";
        E.style("opacity", "1").html(L).style("left", M.pageX + 10 + "px").style("top", M.pageY - 10 + "px");
      }).on("mousemove", function(M) {
        E.style("left", M.pageX + 10 + "px").style("top", M.pageY - 10 + "px");
      }).on("mouseout", function(M, k) {
        const A = r[k.properties.NAME_2 || k.properties.name];
        at(this).attr("stroke", "#de6e4c").attr("stroke-width", "0.5").style("filter", "none"), E.style("opacity", "0");
      }).on("click", function(M, k) {
        const A = k.properties.NAME_2 || k.properties.name;
        console.log("Clicou em:", A);
      })), console.log("Mapa criado com sucesso!");
    } catch (_) {
      console.error("Erro ao criar mapa:", _), F(a, _.message);
    }
  }
  function p(N) {
    return N.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }
  function v(N) {
    if (!R(s))
      return;
    if (!N || N.trim() === "") {
      R(s).style("opacity", "1");
      return;
    }
    const T = p(N.toLowerCase().trim());
    R(s).style("opacity", (C) => {
      const d = C.properties.NAME_2 || C.properties.name || "";
      return p(d).includes(T) ? "1" : "0.2";
    });
  }
  function m() {
    u && at(R(e)).select("svg").transition().duration(300).call(u.scaleBy, 1.5);
  }
  function w() {
    u && at(R(e)).select("svg").transition().duration(300).call(u.scaleBy, 1 / 1.5);
  }
  function x() {
    u && at(R(e)).select("svg").transition().duration(300).call(u.transform, yi);
  }
  qs(() => (Ko(f()), R(s)), () => {
    f() !== void 0 && R(s) && (console.log("selectedMunicipio mudou:", f()), v(f()));
  }), Fs(), jo();
  var y = Dh(), S = j(y);
  {
    var b = (N) => {
      var T = $h();
      mt(N, T);
    }, I = (N) => {
      var T = Qs(), C = _r(T);
      {
        var d = (_) => {
          var g = Oh(), E = j(g), M = j(E);
          gn(() => mn(M, `Erro ao carregar o mapa: ${R(a) ?? ""}`)), mt(_, g);
        };
        xn(
          C,
          (_) => {
            R(a) && _(d);
          },
          !0
        );
      }
      mt(N, T);
    };
    xn(S, (N) => {
      R(o) ? N(b) : N(I, !1);
    });
  }
  var P = rt(S, 2);
  vu(P, (N) => F(e, N), () => R(e));
  var z = rt(P, 2), O = j(z), $ = rt(O, 2), q = rt($, 2);
  qt("click", O, m), qt("click", $, w), qt("click", q, x), mt(t, y), ti();
}
var Lh = /* @__PURE__ */ Dt('<li class="svelte-1kq6r5w"> </li>'), qh = /* @__PURE__ */ Dt('<ul class="sugestoes svelte-1kq6r5w"></ul>'), Fh = /* @__PURE__ */ Dt('Há um responsável de acesso à informação no município. Para pedidos de acesso a documentos administrativos, envie um email com a solicitação para <span class="email-destaque svelte-1kq6r5w"> </span>', 1), Uh = /* @__PURE__ */ Dt('Não há um responsável de acesso à informação no município. Para saber mais informação aceda a <a target="_blank"> </a>', 1), Hh = /* @__PURE__ */ Dt('<a target="_blank"> </a>'), Vh = /* @__PURE__ */ Dt('<div class="result-container svelte-1kq6r5w"><h3 class="svelte-1kq6r5w"> </h3> <table class="result-table svelte-1kq6r5w"><thead><tr class="svelte-1kq6r5w"><th class="svelte-1kq6r5w">RAI</th><th class="svelte-1kq6r5w">Portal</th><th class="svelte-1kq6r5w">Shapefiles</th></tr></thead><tbody><tr class="svelte-1kq6r5w"><td class="svelte-1kq6r5w"><!></td><td class="svelte-1kq6r5w"><!></td><td class="svelte-1kq6r5w"><button class="download-btn svelte-1kq6r5w"><svg class="download-icon svelte-1kq6r5w" width="32" height="32" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g stroke="#333" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none"><line x1="50" y1="15" x2="50" y2="55"></line><polyline points="35,40 50,55 65,40"></polyline></g><g stroke="#333" stroke-width="6" stroke-linecap="square" stroke-linejoin="miter" fill="none"><path d="M20 65 L20 80 L80 80 L80 65"></path></g></svg> <span class="download-text svelte-1kq6r5w">Download <strong>Shapefile</strong> do Município</span></button> <div class="shapefile-info svelte-1kq6r5w">Shapefile disponível, use para contar histórias locais.</div></td></tr></tbody></table> <button class="clear-btn svelte-1kq6r5w">Selecionar outro município</button></div>'), Bh = /* @__PURE__ */ Dt('<div class="dashboard-container svelte-1kq6r5w"><div class="search-section svelte-1kq6r5w"><h2 class="svelte-1kq6r5w">Dados nos municípios</h2> <div class="search-input-container svelte-1kq6r5w"><input type="text" placeholder="Nome do município..." class="search-input svelte-1kq6r5w"/> <button class="search-btn svelte-1kq6r5w">Pesquisar</button></div> <!> <!></div> <div class="map-section svelte-1kq6r5w"><!></div></div>');
function Xh(t, n) {
  jr(n, !1);
  let e = /* @__PURE__ */ Ut(""), r = [], i = /* @__PURE__ */ Ut(null), o = "", a = /* @__PURE__ */ Ut([]), s = /* @__PURE__ */ Ut(""), u = !1;
  Zo(() => {
    u || f();
  });
  async function f() {
    if (!u)
      try {
        const T = await fetch("./static/municipios.csv");
        if (!T.ok) {
          o = "Erro ao carregar dados dos municípios";
          return;
        }
        const d = (await T.text()).split(`
`), _ = d[0].split(";");
        r = d.slice(1).map((g) => {
          const E = g.split(";"), M = {};
          return _.forEach((k, A) => {
            M[k] = E[A];
          }), M;
        }).filter((g) => g.MUNICIPIO), u = !0, console.log("Dados carregados:", r.length);
      } catch (T) {
        console.error("Erro ao carregar dados:", T), o = "Erro ao carregar dados";
      }
  }
  function l(T) {
    F(e, T), F(
      i,
      null
      // Limpa resultado anterior
    ), F(a, []), h(), F(s, T);
  }
  function h() {
    if (R(e).trim()) {
      const T = p(R(e));
      F(i, r.find((C) => p(C.MUNICIPIO || "") === T)), R(i) ? F(s, R(i).MUNICIPIO) : F(
        s,
        T
        // Mantém o destaque parcial
      ), F(a, []);
    } else
      F(s, ""), F(i, null), F(a, []);
  }
  function c(T) {
    T.key === "Enter" && h();
  }
  function p(T) {
    return T.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }
  function v(T) {
    return `${T}.zip`;
  }
  function m(T) {
    const C = v(T), d = `./static/shapefiles/${C}`, _ = document.createElement("a");
    _.href = d, _.download = C, _.target = "_blank", fetch(d, { method: "HEAD" }).then((g) => {
      g.ok ? _.click() : alert("Shapefile não disponível para este município.");
    }).catch(() => {
      alert("Shapefile não disponível para este município.");
    });
  }
  function w() {
    if (R(i) && F(i, null), R(e).length > 0 && r.length > 0) {
      const T = p(R(e));
      F(a, r.filter((C) => {
        const d = C.MUNICIPIO || "";
        return p(d).includes(T);
      }).sort((C, d) => {
        const _ = p(C.MUNICIPIO || "").startsWith(T), g = p(d.MUNICIPIO || "").startsWith(T);
        return _ && !g ? -1 : !_ && g ? 1 : (C.MUNICIPIO || "").localeCompare(d.MUNICIPIO || "");
      }).slice(0, 10)), F(
        s,
        T
        // Usa o termo de busca para destacar
      );
    } else
      F(a, []), F(
        s,
        ""
        // Limpa o destaque no mapa
      );
  }
  jo();
  var x = Bh(), y = j(x), S = rt(j(y), 2), b = j(S), I = rt(b, 2), P = rt(S, 2);
  {
    var z = (T) => {
      var C = qh();
      su(C, 5, () => R(a), ou, (d, _) => {
        var g = Lh(), E = j(g);
        gn(() => mn(E, (R(_), it(() => R(_).MUNICIPIO)))), qt("click", g, () => l(R(_).MUNICIPIO)), mt(d, g);
      }), mt(T, C);
    };
    xn(P, (T) => {
      R(a), it(() => R(a).length > 0) && T(z);
    });
  }
  var O = rt(P, 2);
  {
    var $ = (T) => {
      var C = Vh(), d = j(C), _ = j(d), g = rt(d, 2), E = rt(j(g)), M = j(E), k = j(M), A = j(k);
      {
        var D = (ct) => {
          var Mt = Fh(), dn = rt(_r(Mt)), tr = j(dn);
          gn(() => mn(tr, (R(i), it(() => R(i).RAI_Email)))), mt(ct, Mt);
        }, L = (ct) => {
          var Mt = Uh(), dn = rt(_r(Mt)), tr = j(dn);
          gn(() => {
            Ri(dn, "href", (R(i), it(() => R(i).Website))), mn(tr, (R(i), it(() => R(i).Website)));
          }), mt(ct, Mt);
        };
        xn(A, (ct) => {
          R(i), it(() => R(i).RAI?.toLowerCase() === "sim") ? ct(D) : ct(L, !1);
        });
      }
      var Y = rt(k), B = j(Y);
      {
        var Q = (ct) => {
          var Mt = Hh(), dn = j(Mt);
          gn(() => {
            Ri(Mt, "href", (R(i), it(() => R(i).PORTAL))), mn(dn, (R(i), it(() => R(i).PORTAL)));
          }), mt(ct, Mt);
        }, St = (ct) => {
          var Mt = Js("Não há registos de portal de dados abertos no município indicado.");
          mt(ct, Mt);
        };
        xn(B, (ct) => {
          R(i), it(() => R(i).PORTAL && R(i).PORTAL.toLowerCase() !== "nao" && R(i).PORTAL.toLowerCase() !== "não") ? ct(Q) : ct(St, !1);
        });
      }
      var ft = rt(Y), bt = j(ft), zn = rt(g, 2);
      gn(() => mn(_, (R(i), it(() => R(i).MUNICIPIO)))), qt("click", bt, () => m(R(i).MUNICIPIO)), qt("click", zn, () => {
        F(i, null), F(e, ""), F(s, "");
      }), mt(T, C);
    };
    xn(O, (T) => {
      R(i) && T($);
    });
  }
  var q = rt(y, 2), N = j(q);
  zh(N, {
    get selectedMunicipio() {
      return R(s);
    }
  }), pu(b, () => R(e), (T) => F(e, T)), qt("input", b, w), qt("keydown", b, c), qt("click", I, h), mt(t, x), ti();
}
class Yh {
  constructor(n) {
    this.options = n, this.app = null, this.init();
  }
  init() {
    try {
      if (!this.options.target)
        throw new Error("Target element não encontrado");
      document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => {
        this.createApp();
      }) : setTimeout(() => {
        this.createApp();
      }, 200);
    } catch (n) {
      throw console.error("Erro ao inicializar widget:", n), n;
    }
  }
  createApp() {
    try {
      if (!this.options.target || !this.options.target.parentNode)
        throw new Error("Target element não encontrado ou removido");
      this.app = nu(Xh, {
        target: this.options.target,
        props: this.options.props || {}
      }), console.log("Widget inicializado com sucesso");
    } catch (n) {
      throw console.error("Erro ao criar app Svelte:", n), n;
    }
  }
  destroy() {
    if (this.app) {
      try {
        ru(this.app);
      } catch (n) {
        console.error("Erro ao destruir widget:", n);
      }
      this.app = null;
    }
  }
}
typeof window < "u" && (window.DadosWidget = Yh);
export {
  Yh as default
};
//# sourceMappingURL=dados-widget.js.map
