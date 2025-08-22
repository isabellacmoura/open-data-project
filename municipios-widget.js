import Jt from "papaparse";
import * as H from "d3";
const Fr = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(Fr);
let Le = !1, Ur = !1;
function jr() {
  Le = !0;
}
jr();
const zr = 1, Br = 2, Wr = 16, Vr = 2, $r = 4, Hr = 8, Yr = 1, Gr = 2, L = Symbol(), Kr = "http://www.w3.org/1999/xhtml", Xt = !1;
var kt = Array.isArray, Jr = Array.prototype.indexOf, Zt = Array.from, ht = Object.defineProperty, Je = Object.getOwnPropertyDescriptor, Qt = Object.getOwnPropertyDescriptors, Xr = Object.prototype, Zr = Array.prototype, At = Object.getPrototypeOf;
function Qr(e) {
  return e();
}
function mt(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function en() {
  var e, t, r = new Promise((n, s) => {
    e = n, t = s;
  });
  return { promise: r, resolve: e, reject: t };
}
const $ = 2, It = 4, at = 8, De = 16, ue = 32, Fe = 64, er = 128, K = 256, Ze = 512, D = 1024, J = 2048, fe = 4096, Q = 8192, Ie = 16384, xt = 32768, Mt = 65536, Ft = 1 << 17, tn = 1 << 18, Pt = 1 << 19, tr = 1 << 20, gt = 1 << 21, St = 1 << 22, be = 1 << 23, Ee = Symbol("$state"), rn = Symbol("legacy props"), Tt = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}();
function nn() {
  throw new Error("https://svelte.dev/e/await_outside_boundary");
}
function sn(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function ln() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function an(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function on() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function un(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function fn() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function cn(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function vn() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function dn() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function _n() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let pn = !1;
function rr(e) {
  return e === this.v;
}
function hn(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function nr(e) {
  return !hn(e, this.v);
}
let R = null;
function Qe(e) {
  R = e;
}
function sr(e, t = !1, r) {
  R = {
    p: R,
    c: null,
    e: null,
    s: e,
    x: null,
    l: Le && !t ? { s: null, u: null, $: [] } : null
  };
}
function ir(e) {
  var t = (
    /** @type {ComponentContext} */
    R
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      pr(n);
  }
  return R = t.p, /** @type {T} */
  {};
}
function Ue() {
  return !Le || R !== null && R.l === null;
}
const mn = /* @__PURE__ */ new WeakMap();
function gn(e) {
  var t = E;
  if (t === null)
    return A.f |= be, e;
  if ((t.f & xt) === 0) {
    if ((t.f & er) === 0)
      throw !t.parent && e instanceof Error && lr(e), e;
    t.b.error(e);
  } else
    Ot(e, t);
}
function Ot(e, t) {
  for (; t !== null; ) {
    if ((t.f & er) !== 0)
      try {
        t.b.error(e);
        return;
      } catch (r) {
        e = r;
      }
    t = t.parent;
  }
  throw e instanceof Error && lr(e), e;
}
function lr(e) {
  const t = mn.get(e);
  t && (ht(e, "message", {
    value: t.message
  }), ht(e, "stack", {
    value: t.stack
  }));
}
let et = [];
function wn() {
  var e = et;
  et = [], mt(e);
}
function ar(e) {
  et.length === 0 && queueMicrotask(wn), et.push(e);
}
function yn() {
  for (var e = (
    /** @type {Effect} */
    E.b
  ); e !== null && !e.has_pending_snippet(); )
    e = e.parent;
  return e === null && nn(), e;
}
// @__NO_SIDE_EFFECTS__
function Nt(e) {
  var t = $ | J, r = A !== null && (A.f & $) !== 0 ? (
    /** @type {Derived} */
    A
  ) : null;
  return E === null || r !== null && (r.f & K) !== 0 ? t |= K : E.f |= Pt, {
    ctx: R,
    deps: null,
    effects: null,
    equals: rr,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      L
    ),
    wv: 0,
    parent: r ?? E,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function bn(e, t) {
  let r = (
    /** @type {Effect | null} */
    E
  );
  r === null && ln();
  var n = (
    /** @type {Boundary} */
    r.b
  ), s = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = We(
    /** @type {V} */
    L
  ), l = null, u = !A;
  return Un(() => {
    try {
      var a = e();
    } catch (v) {
      a = Promise.reject(v);
    }
    var o = () => a;
    s = l?.then(o, o) ?? Promise.resolve(a), l = s;
    var c = (
      /** @type {Batch} */
      O
    ), _ = n.pending;
    u && (n.update_pending_count(1), _ || c.increment());
    const d = (v, f = void 0) => {
      l = null, _ || c.activate(), f ? f !== Tt && (i.f |= be, rt(i, f)) : ((i.f & be) !== 0 && (i.f ^= be), rt(i, v)), u && (n.update_pending_count(-1), _ || c.decrement()), fr();
    };
    if (s.then(d, (v) => d(null, v || "unknown")), c)
      return () => {
        queueMicrotask(() => c.neuter());
      };
  }), new Promise((a) => {
    function o(c) {
      function _() {
        c === s ? a(i) : o(s);
      }
      c.then(_, _);
    }
    o(s);
  });
}
// @__NO_SIDE_EFFECTS__
function Rt(e) {
  const t = /* @__PURE__ */ Nt(e);
  return t.equals = nr, t;
}
function or(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      xe(
        /** @type {Effect} */
        t[r]
      );
  }
}
function En(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & $) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function Ct(e) {
  var t, r = E;
  me(En(e));
  try {
    or(e), t = xr(e);
  } finally {
    me(r);
  }
  return t;
}
function ur(e) {
  var t = Ct(e);
  if (e.equals(t) || (e.v = t, e.wv = Ar()), !Me)
    if (Ce !== null)
      Ce.set(e, e.v);
    else {
      var r = (pe || (e.f & K) !== 0) && e.deps !== null ? fe : D;
      j(e, r);
    }
}
function kn(e, t, r) {
  const n = Ue() ? Nt : Rt;
  if (t.length === 0) {
    r(e.map(n));
    return;
  }
  var s = O, i = (
    /** @type {Effect} */
    E
  ), l = An(), u = yn();
  Promise.all(t.map((a) => /* @__PURE__ */ bn(a))).then((a) => {
    s?.activate(), l();
    try {
      r([...e.map(n), ...a]);
    } catch (o) {
      (i.f & Ie) === 0 && Ot(o, i);
    }
    s?.deactivate(), fr();
  }).catch((a) => {
    u.error(a);
  });
}
function An() {
  var e = E, t = A, r = R;
  return function() {
    me(e), se(t), Qe(r);
  };
}
function fr() {
  me(null), se(null), Qe(null);
}
const je = /* @__PURE__ */ new Set();
let O = null, Xe = null, Ce = null, Ut = /* @__PURE__ */ new Set(), tt = [];
function cr() {
  const e = (
    /** @type {() => void} */
    tt.shift()
  );
  tt.length > 0 && queueMicrotask(cr), e();
}
let ze = [], qt = null, wt = !1;
class Be {
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
  #s = /* @__PURE__ */ new Map();
  /**
   * When the batch is committed (and the DOM is updated), we need to remove old branches
   * and append new ones by calling the functions added inside (if/each/key/etc) blocks
   * @type {Set<() => void>}
   */
  #i = /* @__PURE__ */ new Set();
  /**
   * The number of async effects that are currently in flight
   */
  #e = 0;
  /**
   * A deferred that resolves when the batch is committed, used with `settled()`
   * TODO replace with Promise.withResolvers once supported widely enough
   * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
   */
  #u = null;
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
  #r = [];
  /**
   * The same as `#async_effects`, but for effects inside a newly-created
   * `<svelte:boundary>` — these do not prevent the batch from committing
   * @type {Effect[]}
   */
  #l = [];
  /**
   * Template effects and `$effect.pre` effects, which run when
   * a batch is committed
   * @type {Effect[]}
   */
  #n = [];
  /**
   * The same as `#render_effects`, but for `$effect` (which runs after)
   * @type {Effect[]}
   */
  #t = [];
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
  #v = [];
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
  process(t) {
    ze = [], Xe = null;
    var r = null;
    if (je.size > 1) {
      r = /* @__PURE__ */ new Map(), Ce = /* @__PURE__ */ new Map();
      for (const [i, l] of this.current)
        r.set(i, { v: i.v, wv: i.wv }), i.v = l;
      for (const i of je)
        if (i !== this)
          for (const [l, u] of i.#s)
            r.has(l) || (r.set(l, { v: l.v, wv: l.wv }), l.v = u);
    }
    for (const i of t)
      this.#_(i);
    if (this.#r.length === 0 && this.#e === 0) {
      this.#d();
      var n = this.#n, s = this.#t;
      this.#n = [], this.#t = [], this.#a = [], Xe = O, O = null, jt(n), jt(s), O === null ? O = this : je.delete(this), this.#u?.resolve();
    } else
      this.#o(this.#n), this.#o(this.#t), this.#o(this.#a);
    if (r) {
      for (const [i, { v: l, wv: u }] of r)
        i.wv <= u && (i.v = l);
      Ce = null;
    }
    for (const i of this.#r)
      Ae(i);
    for (const i of this.#l)
      Ae(i);
    this.#r = [], this.#l = [];
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   */
  #_(t) {
    t.f ^= D;
    for (var r = t.first; r !== null; ) {
      var n = r.f, s = (n & (ue | Fe)) !== 0, i = s && (n & D) !== 0, l = i || (n & Q) !== 0 || this.skipped_effects.has(r);
      if (!l && r.fn !== null) {
        if (s)
          r.f ^= D;
        else if ((n & It) !== 0)
          this.#t.push(r);
        else if ((n & D) === 0)
          if ((n & St) !== 0) {
            var u = r.b?.pending ? this.#l : this.#r;
            u.push(r);
          } else He(r) && ((r.f & De) !== 0 && this.#a.push(r), Ae(r));
        var a = r.first;
        if (a !== null) {
          r = a;
          continue;
        }
      }
      var o = r.parent;
      for (r = r.next; r === null && o !== null; )
        r = o.next, o = o.parent;
    }
  }
  /**
   * @param {Effect[]} effects
   */
  #o(t) {
    for (const r of t)
      ((r.f & J) !== 0 ? this.#c : this.#v).push(r), j(r, D);
    t.length = 0;
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(t, r) {
    this.#s.has(t) || this.#s.set(t, r), this.current.set(t, t.v);
  }
  activate() {
    O = this;
  }
  deactivate() {
    O = null, Xe = null;
    for (const t of Ut)
      if (Ut.delete(t), t(), O !== null)
        break;
  }
  neuter() {
    this.#f = !0;
  }
  flush() {
    ze.length > 0 ? In() : this.#d(), O === this && (this.#e === 0 && je.delete(this), this.deactivate());
  }
  /**
   * Append and remove branches to/from the DOM
   */
  #d() {
    if (!this.#f)
      for (const t of this.#i)
        t();
    this.#i.clear();
  }
  increment() {
    this.#e += 1;
  }
  decrement() {
    if (this.#e -= 1, this.#e === 0) {
      for (const t of this.#c)
        j(t, J), qe(t);
      for (const t of this.#v)
        j(t, fe), qe(t);
      this.#n = [], this.#t = [], this.flush();
    } else
      this.deactivate();
  }
  /** @param {() => void} fn */
  add_callback(t) {
    this.#i.add(t);
  }
  settled() {
    return (this.#u ??= en()).promise;
  }
  static ensure() {
    if (O === null) {
      const t = O = new Be();
      je.add(O), Be.enqueue(() => {
        O === t && t.flush();
      });
    }
    return O;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    tt.length === 0 && queueMicrotask(cr), tt.unshift(t);
  }
}
function In() {
  var e = Re;
  wt = !0;
  try {
    var t = 0;
    for (Bt(!0); ze.length > 0; ) {
      var r = Be.ensure();
      if (t++ > 1e3) {
        var n, s;
        xn();
      }
      r.process(ze), he.clear();
    }
  } finally {
    wt = !1, Bt(e), qt = null;
  }
}
function xn() {
  try {
    fn();
  } catch (e) {
    Ot(e, qt);
  }
}
let ye = null;
function jt(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (Ie | Q)) === 0 && He(n) && (ye = [], Ae(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null && n.ac === null ? wr(n) : n.fn = null), ye.length > 0)) {
        he.clear();
        for (const s of ye)
          Ae(s);
        ye = [];
      }
    }
    ye = null;
  }
}
function qe(e) {
  for (var t = qt = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if (wt && t === E && (r & De) !== 0)
      return;
    if ((r & (Fe | ue)) !== 0) {
      if ((r & D) === 0) return;
      t.f ^= D;
    }
  }
  ze.push(t);
}
const he = /* @__PURE__ */ new Map();
function We(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: rr,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function de(e, t) {
  const r = We(e);
  return Bn(r), r;
}
// @__NO_SIDE_EFFECTS__
function _e(e, t = !1, r = !0) {
  const n = We(e);
  return t || (n.equals = nr), Le && r && R !== null && R.l !== null && (R.l.s ??= []).push(n), n;
}
function k(e, t, r = !1) {
  A !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!ne || (A.f & Ft) !== 0) && Ue() && (A.f & ($ | De | St | Ft)) !== 0 && !oe?.includes(e) && _n();
  let n = r ? Oe(t) : t;
  return rt(e, n);
}
function rt(e, t) {
  if (!e.equals(t)) {
    var r = e.v;
    Me ? he.set(e, t) : he.set(e, r), e.v = t;
    var n = Be.ensure();
    n.capture(e, r), (e.f & $) !== 0 && ((e.f & J) !== 0 && Ct(
      /** @type {Derived} */
      e
    ), j(e, (e.f & K) === 0 ? D : fe)), e.wv = Ar(), vr(e, J), Ue() && E !== null && (E.f & D) !== 0 && (E.f & (ue | Fe)) === 0 && (Y === null ? Wn([e]) : Y.push(e));
  }
  return t;
}
function vt(e) {
  k(e, e.v + 1);
}
function vr(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var n = Ue(), s = r.length, i = 0; i < s; i++) {
      var l = r[i], u = l.f;
      if (!(!n && l === E)) {
        var a = (u & J) === 0;
        a && j(l, t), (u & $) !== 0 ? vr(
          /** @type {Derived} */
          l,
          fe
        ) : a && ((u & De) !== 0 && ye !== null && ye.push(
          /** @type {Effect} */
          l
        ), qe(
          /** @type {Effect} */
          l
        ));
      }
    }
}
function Oe(e) {
  if (typeof e != "object" || e === null || Ee in e)
    return e;
  const t = At(e);
  if (t !== Xr && t !== Zr)
    return e;
  var r = /* @__PURE__ */ new Map(), n = kt(e), s = /* @__PURE__ */ de(0), i = ke, l = (u) => {
    if (ke === i)
      return u();
    var a = A, o = ke;
    se(null), Vt(i);
    var c = u();
    return se(a), Vt(o), c;
  };
  return n && r.set("length", /* @__PURE__ */ de(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(u, a, o) {
        (!("value" in o) || o.configurable === !1 || o.enumerable === !1 || o.writable === !1) && vn();
        var c = r.get(a);
        return c === void 0 ? c = l(() => {
          var _ = /* @__PURE__ */ de(o.value);
          return r.set(a, _), _;
        }) : k(c, o.value, !0), !0;
      },
      deleteProperty(u, a) {
        var o = r.get(a);
        if (o === void 0) {
          if (a in u) {
            const c = l(() => /* @__PURE__ */ de(L));
            r.set(a, c), vt(s);
          }
        } else
          k(o, L), vt(s);
        return !0;
      },
      get(u, a, o) {
        if (a === Ee)
          return e;
        var c = r.get(a), _ = a in u;
        if (c === void 0 && (!_ || Je(u, a)?.writable) && (c = l(() => {
          var v = Oe(_ ? u[a] : L), f = /* @__PURE__ */ de(v);
          return f;
        }), r.set(a, c)), c !== void 0) {
          var d = h(c);
          return d === L ? void 0 : d;
        }
        return Reflect.get(u, a, o);
      },
      getOwnPropertyDescriptor(u, a) {
        var o = Reflect.getOwnPropertyDescriptor(u, a);
        if (o && "value" in o) {
          var c = r.get(a);
          c && (o.value = h(c));
        } else if (o === void 0) {
          var _ = r.get(a), d = _?.v;
          if (_ !== void 0 && d !== L)
            return {
              enumerable: !0,
              configurable: !0,
              value: d,
              writable: !0
            };
        }
        return o;
      },
      has(u, a) {
        if (a === Ee)
          return !0;
        var o = r.get(a), c = o !== void 0 && o.v !== L || Reflect.has(u, a);
        if (o !== void 0 || E !== null && (!c || Je(u, a)?.writable)) {
          o === void 0 && (o = l(() => {
            var d = c ? Oe(u[a]) : L, v = /* @__PURE__ */ de(d);
            return v;
          }), r.set(a, o));
          var _ = h(o);
          if (_ === L)
            return !1;
        }
        return c;
      },
      set(u, a, o, c) {
        var _ = r.get(a), d = a in u;
        if (n && a === "length")
          for (var v = o; v < /** @type {Source<number>} */
          _.v; v += 1) {
            var f = r.get(v + "");
            f !== void 0 ? k(f, L) : v in u && (f = l(() => /* @__PURE__ */ de(L)), r.set(v + "", f));
          }
        if (_ === void 0)
          (!d || Je(u, a)?.writable) && (_ = l(() => /* @__PURE__ */ de(void 0)), k(_, Oe(o)), r.set(a, _));
        else {
          d = _.v !== L;
          var g = l(() => Oe(o));
          k(_, g);
        }
        var w = Reflect.getOwnPropertyDescriptor(u, a);
        if (w?.set && w.set.call(c, o), !d) {
          if (n && typeof a == "string") {
            var P = (
              /** @type {Source<number>} */
              r.get("length")
            ), p = Number(a);
            Number.isInteger(p) && p >= P.v && k(P, p + 1);
          }
          vt(s);
        }
        return !0;
      },
      ownKeys(u) {
        h(s);
        var a = Reflect.ownKeys(u).filter((_) => {
          var d = r.get(_);
          return d === void 0 || d.v !== L;
        });
        for (var [o, c] of r)
          c.v !== L && !(o in u) && a.push(o);
        return a;
      },
      setPrototypeOf() {
        dn();
      }
    }
  );
}
var Mn, Pn, Sn;
function $e(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function nt(e) {
  return Pn.call(e);
}
// @__NO_SIDE_EFFECTS__
function ot(e) {
  return Sn.call(e);
}
function C(e, t) {
  return /* @__PURE__ */ nt(e);
}
function yt(e, t) {
  {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ nt(
        /** @type {Node} */
        e
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ ot(r) : r;
  }
}
function F(e, t = 1, r = !1) {
  let n = e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ ot(n);
  return n;
}
function Tn(e) {
  e.textContent = "";
}
function dr() {
  return !1;
}
let zt = !1;
function On() {
  zt || (zt = !0, document.addEventListener(
    "reset",
    (e) => {
      Promise.resolve().then(() => {
        if (!e.defaultPrevented)
          for (
            const t of
            /**@type {HTMLFormElement} */
            e.target.elements
          )
            t.__on_r?.();
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possiblity of stopPropagation)
    { capture: !0 }
  ));
}
function ut(e) {
  var t = A, r = E;
  se(null), me(null);
  try {
    return e();
  } finally {
    se(t), me(r);
  }
}
function Nn(e, t, r, n = r) {
  e.addEventListener(t, () => ut(r));
  const s = e.__on_r;
  s ? e.__on_r = () => {
    s(), n(!0);
  } : e.__on_r = () => n(!0), On();
}
function _r(e) {
  E === null && A === null && un(), A !== null && (A.f & K) !== 0 && E === null && on(), Me && an();
}
function Rn(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function ce(e, t, r, n = !0) {
  var s = E;
  s !== null && (s.f & Q) !== 0 && (e |= Q);
  var i = {
    ctx: R,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | J,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: s,
    b: s && s.b,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0,
    ac: null
  };
  if (r)
    try {
      Ae(i), i.f |= xt;
    } catch (a) {
      throw xe(i), a;
    }
  else t !== null && qe(i);
  var l = r && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & Pt) === 0;
  if (!l && n && (s !== null && Rn(i, s), A !== null && (A.f & $) !== 0 && (e & Fe) === 0)) {
    var u = (
      /** @type {Derived} */
      A
    );
    (u.effects ??= []).push(i);
  }
  return i;
}
function Cn(e) {
  const t = ce(at, null, !1);
  return j(t, D), t.teardown = e, t;
}
function bt(e) {
  _r();
  var t = (
    /** @type {Effect} */
    E.f
  ), r = !A && (t & ue) !== 0 && (t & xt) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      R
    );
    (n.e ??= []).push(e);
  } else
    return pr(e);
}
function pr(e) {
  return ce(It | tr, e, !1);
}
function qn(e) {
  return _r(), ce(at | tr, e, !0);
}
function Ln(e) {
  return ce(It, e, !1);
}
function Dn(e, t) {
  var r = (
    /** @type {ComponentContextLegacy} */
    R
  ), n = { effect: null, ran: !1, deps: e };
  r.l.$.push(n), n.effect = ft(() => {
    e(), !n.ran && (n.ran = !0, Ye(t));
  });
}
function Fn() {
  var e = (
    /** @type {ComponentContextLegacy} */
    R
  );
  ft(() => {
    for (var t of e.l.$) {
      t.deps();
      var r = t.effect;
      (r.f & D) !== 0 && j(r, fe), He(r) && Ae(r), t.ran = !1;
    }
  });
}
function Un(e) {
  return ce(St | Pt, e, !0);
}
function ft(e, t = 0) {
  return ce(at | t, e, !0);
}
function Se(e, t = [], r = []) {
  kn(t, r, (n) => {
    ce(at, () => e(...n.map(h)), !0);
  });
}
function hr(e, t = 0) {
  var r = ce(De | t, e, !0);
  return r;
}
function st(e, t = !0) {
  return ce(ue, e, !0, t);
}
function mr(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Me, n = A;
    Wt(!0), se(null);
    try {
      t.call(null);
    } finally {
      Wt(r), se(n);
    }
  }
}
function gr(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const s = r.ac;
    s !== null && ut(() => {
      s.abort(Tt);
    });
    var n = r.next;
    (r.f & Fe) !== 0 ? r.parent = null : xe(r, t), r = n;
  }
}
function jn(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & ue) === 0 && xe(t), t = r;
  }
}
function xe(e, t = !0) {
  var r = !1;
  (t || (e.f & tn) !== 0) && e.nodes_start !== null && e.nodes_end !== null && (zn(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), r = !0), gr(e, t && !r), it(e, 0), j(e, Ie);
  var n = e.transitions;
  if (n !== null)
    for (const i of n)
      i.stop();
  mr(e);
  var s = e.parent;
  s !== null && s.first !== null && wr(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = e.ac = null;
}
function zn(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ot(e)
    );
    e.remove(), e = r;
  }
}
function wr(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function yr(e, t) {
  var r = [];
  Lt(e, r, !0), br(r, () => {
    xe(e), t && t();
  });
}
function br(e, t) {
  var r = e.length;
  if (r > 0) {
    var n = () => --r || t();
    for (var s of e)
      s.out(n);
  } else
    t();
}
function Lt(e, t, r) {
  if ((e.f & Q) === 0) {
    if (e.f ^= Q, e.transitions !== null)
      for (const l of e.transitions)
        (l.is_global || r) && t.push(l);
    for (var n = e.first; n !== null; ) {
      var s = n.next, i = (n.f & Mt) !== 0 || (n.f & ue) !== 0;
      Lt(n, t, i ? r : !1), n = s;
    }
  }
}
function Dt(e) {
  Er(e, !0);
}
function Er(e, t) {
  if ((e.f & Q) !== 0) {
    e.f ^= Q, (e.f & D) === 0 && (j(e, J), qe(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, s = (r.f & Mt) !== 0 || (r.f & ue) !== 0;
      Er(r, s ? t : !1), r = n;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
let Re = !1;
function Bt(e) {
  Re = e;
}
let Me = !1;
function Wt(e) {
  Me = e;
}
let A = null, ne = !1;
function se(e) {
  A = e;
}
let E = null;
function me(e) {
  E = e;
}
let oe = null;
function Bn(e) {
  A !== null && (oe === null ? oe = [e] : oe.push(e));
}
let U = null, V = 0, Y = null;
function Wn(e) {
  Y = e;
}
let kr = 1, Ve = 0, ke = Ve;
function Vt(e) {
  ke = e;
}
let pe = !1;
function Ar() {
  return ++kr;
}
function He(e) {
  var t = e.f;
  if ((t & J) !== 0)
    return !0;
  if ((t & fe) !== 0) {
    var r = e.deps, n = (t & K) !== 0;
    if (r !== null) {
      var s, i, l = (t & Ze) !== 0, u = n && E !== null && !pe, a = r.length;
      if ((l || u) && (E === null || (E.f & Ie) === 0)) {
        var o = (
          /** @type {Derived} */
          e
        ), c = o.parent;
        for (s = 0; s < a; s++)
          i = r[s], (l || !i?.reactions?.includes(o)) && (i.reactions ??= []).push(o);
        l && (o.f ^= Ze), u && c !== null && (c.f & K) === 0 && (o.f ^= K);
      }
      for (s = 0; s < a; s++)
        if (i = r[s], He(
          /** @type {Derived} */
          i
        ) && ur(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
    }
    (!n || E !== null && !pe) && j(e, D);
  }
  return !1;
}
function Ir(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !oe?.includes(e))
    for (var s = 0; s < n.length; s++) {
      var i = n[s];
      (i.f & $) !== 0 ? Ir(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (r ? j(i, J) : (i.f & D) !== 0 && j(i, fe), qe(
        /** @type {Effect} */
        i
      ));
    }
}
function xr(e) {
  var t = U, r = V, n = Y, s = A, i = pe, l = oe, u = R, a = ne, o = ke, c = e.f;
  U = /** @type {null | Value[]} */
  null, V = 0, Y = null, pe = (c & K) !== 0 && (ne || !Re || A === null), A = (c & (ue | Fe)) === 0 ? e : null, oe = null, Qe(e.ctx), ne = !1, ke = ++Ve, e.ac !== null && (ut(() => {
    e.ac.abort(Tt);
  }), e.ac = null);
  try {
    e.f |= gt;
    var _ = (
      /** @type {Function} */
      e.fn
    ), d = _(), v = e.deps;
    if (U !== null) {
      var f;
      if (it(e, V), v !== null && V > 0)
        for (v.length = V + U.length, f = 0; f < U.length; f++)
          v[V + f] = U[f];
      else
        e.deps = v = U;
      if (!pe || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      (c & $) !== 0 && /** @type {import('#client').Derived} */
      e.reactions !== null)
        for (f = V; f < v.length; f++)
          (v[f].reactions ??= []).push(e);
    } else v !== null && V < v.length && (it(e, V), v.length = V);
    if (Ue() && Y !== null && !ne && v !== null && (e.f & ($ | fe | J)) === 0)
      for (f = 0; f < /** @type {Source[]} */
      Y.length; f++)
        Ir(
          Y[f],
          /** @type {Effect} */
          e
        );
    return s !== null && s !== e && (Ve++, Y !== null && (n === null ? n = Y : n.push(.../** @type {Source[]} */
    Y))), (e.f & be) !== 0 && (e.f ^= be), d;
  } catch (g) {
    return gn(g);
  } finally {
    e.f ^= gt, U = t, V = r, Y = n, A = s, pe = i, oe = l, Qe(u), ne = a, ke = o;
  }
}
function Vn(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = Jr.call(r, e);
    if (n !== -1) {
      var s = r.length - 1;
      s === 0 ? r = t.reactions = null : (r[n] = r[s], r.pop());
    }
  }
  r === null && (t.f & $) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (U === null || !U.includes(t)) && (j(t, fe), (t.f & (K | Ze)) === 0 && (t.f ^= Ze), or(
    /** @type {Derived} **/
    t
  ), it(
    /** @type {Derived} **/
    t,
    0
  ));
}
function it(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      Vn(e, r[n]);
}
function Ae(e) {
  var t = e.f;
  if ((t & Ie) === 0) {
    j(e, D);
    var r = E, n = Re;
    E = e, Re = !0;
    try {
      (t & De) !== 0 ? jn(e) : gr(e), mr(e);
      var s = xr(e);
      e.teardown = typeof s == "function" ? s : null, e.wv = kr;
      var i;
      Xt && Ur && (e.f & J) !== 0 && e.deps;
    } finally {
      Re = n, E = r;
    }
  }
}
function h(e) {
  var t = e.f, r = (t & $) !== 0;
  if (A !== null && !ne) {
    var n = E !== null && (E.f & Ie) !== 0;
    if (!n && !oe?.includes(e)) {
      var s = A.deps;
      if ((A.f & gt) !== 0)
        e.rv < Ve && (e.rv = Ve, U === null && s !== null && s[V] === e ? V++ : U === null ? U = [e] : (!pe || !U.includes(e)) && U.push(e));
      else {
        (A.deps ??= []).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [A] : i.includes(A) || i.push(A);
      }
    }
  } else if (r && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var l = (
      /** @type {Derived} */
      e
    ), u = l.parent;
    u !== null && (u.f & K) === 0 && (l.f ^= K);
  }
  if (Me) {
    if (he.has(e))
      return he.get(e);
    if (r) {
      l = /** @type {Derived} */
      e;
      var a = l.v;
      return ((l.f & D) === 0 && l.reactions !== null || Mr(l)) && (a = Ct(l)), he.set(l, a), a;
    }
  } else if (r) {
    if (l = /** @type {Derived} */
    e, Ce?.has(l))
      return Ce.get(l);
    He(l) && ur(l);
  }
  if ((e.f & be) !== 0)
    throw e.v;
  return e.v;
}
function Mr(e) {
  if (e.v === L) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (he.has(t) || (t.f & $) !== 0 && Mr(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function Ye(e) {
  var t = ne;
  try {
    return ne = !0, e();
  } finally {
    ne = t;
  }
}
const $n = -7169;
function j(e, t) {
  e.f = e.f & $n | t;
}
function Pr(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (Ee in e)
      Et(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const r = e[t];
        typeof r == "object" && r && Ee in r && Et(r);
      }
  }
}
function Et(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let n in e)
      try {
        Et(e[n], t);
      } catch {
      }
    const r = At(e);
    if (r !== Object.prototype && r !== Array.prototype && r !== Map.prototype && r !== Set.prototype && r !== Date.prototype) {
      const n = Qt(r);
      for (let s in n) {
        const i = n[s].get;
        if (i)
          try {
            i.call(e);
          } catch {
          }
      }
    }
  }
}
function Hn(e, t, r, n = {}) {
  function s(i) {
    if (n.capture || Yn.call(t, i), !i.cancelBubble)
      return ut(() => r?.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? ar(() => {
    t.addEventListener(e, s, n);
  }) : t.addEventListener(e, s, n), s;
}
function ae(e, t, r, n, s) {
  var i = { capture: n, passive: s }, l = Hn(e, t, r, i);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && Cn(() => {
    t.removeEventListener(e, l, i);
  });
}
let $t = null;
function Yn(e) {
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, s = e.composedPath?.() || [], i = (
    /** @type {null | Element} */
    s[0] || e.target
  );
  $t = e;
  var l = 0, u = $t === e && e.__root;
  if (u) {
    var a = s.indexOf(u);
    if (a !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var o = s.indexOf(t);
    if (o === -1)
      return;
    a <= o && (l = a);
  }
  if (i = /** @type {Element} */
  s[l] || e.target, i !== t) {
    ht(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || r;
      }
    });
    var c = A, _ = E;
    se(null), me(null);
    try {
      for (var d, v = []; i !== null; ) {
        var f = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var g = i["__" + n];
          if (g != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i))
            if (kt(g)) {
              var [w, ...P] = g;
              w.apply(i, [e, ...P]);
            } else
              g.call(i, e);
        } catch (p) {
          d ? v.push(p) : d = p;
        }
        if (e.cancelBubble || f === t || f === null)
          break;
        i = f;
      }
      if (d) {
        for (let p of v)
          queueMicrotask(() => {
            throw p;
          });
        throw d;
      }
    } finally {
      e.__root = t, delete e.currentTarget, se(c), me(_);
    }
  }
}
function Gn(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function lt(e, t) {
  var r = (
    /** @type {Effect} */
    E
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function ie(e, t) {
  var r = (t & Yr) !== 0, n = (t & Gr) !== 0, s, i = !e.startsWith("<!>");
  return () => {
    s === void 0 && (s = Gn(i ? e : "<!>" + e), r || (s = /** @type {Node} */
    /* @__PURE__ */ nt(s)));
    var l = (
      /** @type {TemplateNode} */
      n || Mn ? document.importNode(s, !0) : s.cloneNode(!0)
    );
    if (r) {
      var u = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ nt(l)
      ), a = (
        /** @type {TemplateNode} */
        l.lastChild
      );
      lt(u, a);
    } else
      lt(l, l);
    return l;
  };
}
function Kn(e = "") {
  {
    var t = $e(e + "");
    return lt(t, t), t;
  }
}
function Jn() {
  var e = document.createDocumentFragment(), t = document.createComment(""), r = $e();
  return e.append(t, r), lt(t, r), e;
}
function G(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function Te(e, t) {
  var r = t == null ? "" : typeof t == "object" ? t + "" : t;
  r !== (e.__t ??= e.nodeValue) && (e.__t = r, e.nodeValue = r + "");
}
function Sr(e) {
  R === null && sn(), Le && R.l !== null ? Xn(R).m.push(e) : bt(() => {
    const t = Ye(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Xn(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ??= { a: [], b: [], m: [] };
}
function Ne(e, t, r = !1) {
  var n = e, s = null, i = null, l = L, u = r ? Mt : 0, a = !1;
  const o = (v, f = !0) => {
    a = !0, d(f, v);
  };
  var c = null;
  function _() {
    c !== null && (c.lastChild.remove(), n.before(c), c = null);
    var v = l ? s : i, f = l ? i : s;
    v && Dt(v), f && yr(f, () => {
      l ? i = null : s = null;
    });
  }
  const d = (v, f) => {
    if (l !== (l = v)) {
      var g = dr(), w = n;
      if (g && (c = document.createDocumentFragment(), c.append(w = $e())), l ? s ??= f && st(() => f(w)) : i ??= f && st(() => f(w)), g) {
        var P = (
          /** @type {Batch} */
          O
        ), p = l ? s : i, b = l ? i : s;
        p && P.skipped_effects.delete(p), b && P.skipped_effects.add(b), P.add_callback(_);
      } else
        _();
    }
  };
  hr(() => {
    a = !1, t(o), a || d(null, null);
  }, u);
}
function Zn(e, t) {
  return t;
}
function Qn(e, t, r) {
  for (var n = e.items, s = [], i = t.length, l = 0; l < i; l++)
    Lt(t[l].e, s, !0);
  var u = i > 0 && s.length === 0 && r !== null;
  if (u) {
    var a = (
      /** @type {Element} */
      /** @type {Element} */
      r.parentNode
    );
    Tn(a), a.append(
      /** @type {Element} */
      r
    ), n.clear(), re(e, t[0].prev, t[i - 1].next);
  }
  br(s, () => {
    for (var o = 0; o < i; o++) {
      var c = t[o];
      u || (n.delete(c.k), re(e, c.prev, c.next)), xe(c.e, !u);
    }
  });
}
function es(e, t, r, n, s, i = null) {
  var l = e, u = { flags: t, items: /* @__PURE__ */ new Map(), first: null };
  {
    var a = (
      /** @type {Element} */
      e
    );
    l = a.appendChild($e());
  }
  var o = null, c = !1, _ = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ Rt(() => {
    var w = r();
    return kt(w) ? w : w == null ? [] : Zt(w);
  }), v, f;
  function g() {
    ts(
      f,
      v,
      u,
      _,
      l,
      s,
      t,
      n,
      r
    ), i !== null && (v.length === 0 ? o ? Dt(o) : o = st(() => i(l)) : o !== null && yr(o, () => {
      o = null;
    }));
  }
  hr(() => {
    f ??= /** @type {Effect} */
    E, v = /** @type {V[]} */
    h(d);
    var w = v.length;
    if (!(c && w === 0)) {
      c = w === 0;
      var P, p, b, S;
      if (dr()) {
        var z = /* @__PURE__ */ new Set(), ee = (
          /** @type {Batch} */
          O
        );
        for (p = 0; p < w; p += 1) {
          b = v[p], S = n(b, p);
          var le = u.items.get(S) ?? _.get(S);
          le ? Tr(le, b, p) : (P = Or(
            null,
            u,
            null,
            null,
            b,
            S,
            p,
            s,
            t,
            r,
            !0
          ), _.set(S, P)), z.add(S);
        }
        for (const [te, y] of u.items)
          z.has(te) || ee.skipped_effects.add(y.e);
        ee.add_callback(g);
      } else
        g();
      h(d);
    }
  });
}
function ts(e, t, r, n, s, i, l, u, a) {
  var o = t.length, c = r.items, _ = r.first, d = _, v, f = null, g = [], w = [], P, p, b, S;
  for (S = 0; S < o; S += 1) {
    if (P = t[S], p = u(P, S), b = c.get(p), b === void 0) {
      var z = n.get(p);
      if (z !== void 0) {
        n.delete(p), c.set(p, z);
        var ee = f ? f.next : d;
        re(r, f, z), re(r, z, ee), dt(z, ee, s), f = z;
      } else {
        var le = d ? (
          /** @type {TemplateNode} */
          d.e.nodes_start
        ) : s;
        f = Or(
          le,
          r,
          f,
          f === null ? r.first : f.next,
          P,
          p,
          S,
          i,
          l,
          a
        );
      }
      c.set(p, f), g = [], w = [], d = f.next;
      continue;
    }
    if (Tr(b, P, S), (b.e.f & Q) !== 0 && Dt(b.e), b !== d) {
      if (v !== void 0 && v.has(b)) {
        if (g.length < w.length) {
          var te = w[0], y;
          f = te.prev;
          var m = g[0], I = g[g.length - 1];
          for (y = 0; y < g.length; y += 1)
            dt(g[y], te, s);
          for (y = 0; y < w.length; y += 1)
            v.delete(w[y]);
          re(r, m.prev, I.next), re(r, f, m), re(r, I, te), d = te, f = I, S -= 1, g = [], w = [];
        } else
          v.delete(b), dt(b, d, s), re(r, b.prev, b.next), re(r, b, f === null ? r.first : f.next), re(r, f, b), f = b;
        continue;
      }
      for (g = [], w = []; d !== null && d.k !== p; )
        (d.e.f & Q) === 0 && (v ??= /* @__PURE__ */ new Set()).add(d), w.push(d), d = d.next;
      if (d === null)
        continue;
      b = d;
    }
    g.push(b), f = b, d = b.next;
  }
  if (d !== null || v !== void 0) {
    for (var M = v === void 0 ? [] : Zt(v); d !== null; )
      (d.e.f & Q) === 0 && M.push(d), d = d.next;
    var x = M.length;
    if (x > 0) {
      var N = o === 0 ? s : null;
      Qn(r, M, N);
    }
  }
  e.first = r.first && r.first.e, e.last = f && f.e;
  for (var X of n.values())
    xe(X.e);
  n.clear();
}
function Tr(e, t, r, n) {
  rt(e.v, t), e.i = r;
}
function Or(e, t, r, n, s, i, l, u, a, o, c) {
  var _ = (a & zr) !== 0, d = (a & Wr) === 0, v = _ ? d ? /* @__PURE__ */ _e(s, !1, !1) : We(s) : s, f = (a & Br) === 0 ? l : We(l), g = {
    i: f,
    v,
    k: i,
    a: null,
    // @ts-expect-error
    e: null,
    prev: r,
    next: n
  };
  try {
    if (e === null) {
      var w = document.createDocumentFragment();
      w.append(e = $e());
    }
    return g.e = st(() => u(
      /** @type {Node} */
      e,
      v,
      f,
      o
    ), pn), g.e.prev = r && r.e, g.e.next = n && n.e, r === null ? c || (t.first = g) : (r.next = g, r.e.next = g.e), n !== null && (n.prev = g, n.e.prev = g.e), g;
  } finally {
  }
}
function dt(e, t, r) {
  for (var n = e.next ? (
    /** @type {TemplateNode} */
    e.next.e.nodes_start
  ) : r, s = t ? (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ) : r, i = (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ); i !== null && i !== n; ) {
    var l = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ot(i)
    );
    s.before(i), i = l;
  }
}
function re(e, t, r) {
  t === null ? e.first = r : (t.next = r, t.e.next = r && r.e), r !== null && (r.prev = t, r.e.prev = t && t.e);
}
const rs = Symbol("is custom element"), ns = Symbol("is html");
function Ht(e, t, r, n) {
  var s = ss(e);
  s[t] !== (s[t] = r) && (r == null ? e.removeAttribute(t) : typeof r != "string" && is(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function ss(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ??= {
      [rs]: e.nodeName.includes("-"),
      [ns]: e.namespaceURI === Kr
    }
  );
}
var Yt = /* @__PURE__ */ new Map();
function is(e) {
  var t = Yt.get(e.nodeName);
  if (t) return t;
  Yt.set(e.nodeName, t = []);
  for (var r, n = e, s = Element.prototype; s !== n; ) {
    r = Qt(n);
    for (var i in r)
      r[i].set && t.push(i);
    n = At(n);
  }
  return t;
}
function ls(e, t, r = t) {
  var n = Ue(), s = /* @__PURE__ */ new WeakSet();
  Nn(e, "input", (i) => {
    var l = i ? e.defaultValue : e.value;
    if (l = _t(e) ? pt(l) : l, r(l), O !== null && s.add(O), n && l !== (l = t())) {
      var u = e.selectionStart, a = e.selectionEnd;
      e.value = l ?? "", a !== null && (e.selectionStart = u, e.selectionEnd = Math.min(a, e.value.length));
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Ye(t) == null && e.value && (r(_t(e) ? pt(e.value) : e.value), O !== null && s.add(O)), ft(() => {
    var i = t();
    if (e === document.activeElement) {
      var l = (
        /** @type {Batch} */
        Xe ?? O
      );
      if (s.has(l))
        return;
    }
    _t(e) && i === pt(e.value) || e.type === "date" && !i && !e.value || i !== e.value && (e.value = i ?? "");
  });
}
function _t(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function pt(e) {
  return e === "" ? null : +e;
}
function Gt(e, t) {
  return e === t || e?.[Ee] === t;
}
function as(e = {}, t, r, n) {
  return Ln(() => {
    var s, i;
    return ft(() => {
      s = i, i = [], Ye(() => {
        e !== r(...i) && (t(e, ...i), s && Gt(r(...s), e) && t(null, ...s));
      });
    }), () => {
      ar(() => {
        i && Gt(r(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function Nr(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    R
  ), r = t.l.u;
  if (!r) return;
  let n = () => Pr(t.s);
  if (e) {
    let s = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const l = /* @__PURE__ */ Nt(() => {
      let u = !1;
      const a = t.s;
      for (const o in a)
        a[o] !== i[o] && (i[o] = a[o], u = !0);
      return u && s++, s;
    });
    n = () => h(l);
  }
  r.b.length && qn(() => {
    Kt(t, n), mt(r.b);
  }), bt(() => {
    const s = Ye(() => r.m.map(Qr));
    return () => {
      for (const i of s)
        typeof i == "function" && i();
    };
  }), r.a.length && bt(() => {
    Kt(t, n), mt(r.a);
  });
}
function Kt(e, t) {
  if (e.l.s)
    for (const r of e.l.s) h(r);
  t();
}
let Ke = !1;
function os(e) {
  var t = Ke;
  try {
    return Ke = !1, [e(), Ke];
  } finally {
    Ke = t;
  }
}
function us(e, t, r, n) {
  var s = !Le || (r & Vr) !== 0, i = (r & Hr) !== 0, l = (
    /** @type {V} */
    n
  ), u = !0, a = () => (u && (u = !1, l = /** @type {V} */
  n), l), o;
  {
    var c = Ee in e || rn in e;
    o = Je(e, t)?.set ?? (c && t in e ? (p) => e[t] = p : void 0);
  }
  var _, d = !1;
  [_, d] = os(() => (
    /** @type {V} */
    e[t]
  )), _ === void 0 && n !== void 0 && (_ = a(), o && (s && cn(), o(_)));
  var v;
  if (s ? v = () => {
    var p = (
      /** @type {V} */
      e[t]
    );
    return p === void 0 ? a() : (u = !0, p);
  } : v = () => {
    var p = (
      /** @type {V} */
      e[t]
    );
    return p !== void 0 && (l = /** @type {V} */
    void 0), p === void 0 ? l : p;
  }, s && (r & $r) === 0)
    return v;
  if (o) {
    var f = e.$$legacy;
    return (
      /** @type {() => V} */
      (function(p, b) {
        return arguments.length > 0 ? ((!s || !b || f || d) && o(b ? v() : p), p) : v();
      })
    );
  }
  var g = !1, w = /* @__PURE__ */ Rt(() => (g = !1, v()));
  h(w);
  var P = (
    /** @type {Effect} */
    E
  );
  return (
    /** @type {() => V} */
    (function(p, b) {
      if (arguments.length > 0) {
        const S = b ? h(w) : s && i ? Oe(p) : p;
        return k(w, S), g = !0, l !== void 0 && (l = S), p;
      }
      return Me && g || (P.f & Ie) !== 0 ? w.v : h(w);
    })
  );
}
var fs = /* @__PURE__ */ ie('<div class="loading svelte-gouuy3"><p>Carregando mapa interativo...</p> <p>Isso pode demorar alguns segundos devido ao tamanho do arquivo.</p></div>'), cs = /* @__PURE__ */ ie('<div class="error svelte-gouuy3"><p> </p></div>'), vs = /* @__PURE__ */ ie('<div class="interactive-map-container svelte-gouuy3"><!> <div class="map-wrapper svelte-gouuy3"></div> <div class="zoom-controls svelte-gouuy3"><button class="zoom-btn svelte-gouuy3">+</button> <button class="zoom-btn svelte-gouuy3">−</button> <button class="zoom-btn svelte-gouuy3">⌂</button></div> <div class="legend-container svelte-gouuy3"><div class="legend-item svelte-gouuy3"><div class="legend-color color-beige svelte-gouuy3"></div> <span>Sem RAI e sem portal</span></div> <div class="legend-item svelte-gouuy3"><div class="legend-color color-light-purple-gray svelte-gouuy3"></div> <span>Município com Responsável de Acesso à Informação</span></div> <div class="legend-item svelte-gouuy3"><div class="legend-color color-red svelte-gouuy3"></div> <span>Município com RAI e Portal de Dados Abertos</span></div> <div class="legend-item svelte-gouuy3"><div class="legend-color color-orange svelte-gouuy3"></div> <span>Município com Portal de Dados Abertos e sem RAI</span></div></div></div>');
function ds(e, t) {
  sr(t, !1);
  let r = /* @__PURE__ */ _e(), n = [], s = null, i = /* @__PURE__ */ _e(!0), l = /* @__PURE__ */ _e(null), u = null, a = null, o = us(t, "selectedMunicipio", 8, "");
  Sr(async () => {
    try {
      const y = await fetch("/municipios.csv");
      if (!y.ok)
        throw new Error(`Erro ao carregar CSV: ${y.status}`);
      const m = await y.text();
      n = Jt.parse(m, { header: !0, delimiter: ";" }).data.reduce(
        (x, N) => (x[N.MUNICIPIO] = N, x),
        {}
      ), console.log("CSV carregado com", Object.keys(n).length, "municípios"), console.log("Exemplos de municípios no CSV:", Object.keys(n).slice(0, 5)), console.log("Primeiros 5 municípios do CSV:", Object.keys(n).slice(0, 5).map((x) => ({ nome: x, dados: n[x] })));
      const M = await fetch("/PortugalM.geojson");
      if (!M.ok)
        throw new Error(`Erro ao carregar GeoJSON: ${M.status}`);
      s = await M.json(), c(), k(i, !1);
    } catch (y) {
      console.error("Erro ao carregar dados:", y), k(l, y.message), k(i, !1);
    }
  });
  function c() {
    if (!s || !h(r))
      return;
    const y = 800, m = 500;
    H.select(h(r)).selectAll("*").remove();
    const I = H.select(h(r)).append("svg").attr("width", "100%").attr("height", "100%").attr("viewBox", `0 0 ${y} ${m}`).style("background", "transparent").style("cursor", "grab"), M = H.zoom().scaleExtent([1, 8]).on("zoom", (x) => {
      I.selectAll("path").attr("transform", x.transform);
    });
    I.call(M), a = M;
    try {
      const x = H.geoMercator().center([-11, 39.2]).scale(6500).translate([y / 2 - 350, m / 2]), N = H.geoPath().projection(x), X = H.select("body").append("div").attr("id", "map-tooltip").style("position", "absolute").style("background", "rgba(0, 0, 0, 0.8)").style("color", "white").style("padding", "8px 12px").style("border-radius", "4px").style("font-size", "12px").style("font-family", "'Bai Jamjuree', sans-serif").style("pointer-events", "none").style("z-index", "1000").style("opacity", "0").style("transition", "opacity 0.2s");
      u = I.selectAll("path").data(s.features).enter().append("path").attr("d", N).attr("fill", (q) => {
        const B = q.properties.NAME_2, T = n[B];
        return (q.properties.NAME_2 === "Évora" || q.properties.NAME_2 === "Lisboa" || q.properties.NAME_2 === "Porto") && (console.log("Município:", q.properties.NAME_2, "Dados encontrados:", T), T && console.log("RAI:", T.RAI, "PORTAL:", T.PORTAL)), T && T.RAI?.trim().toUpperCase() === "SIM" && T.PORTAL && T.PORTAL.trim() !== "NAO" && T.PORTAL.trim().startsWith("http") ? "#c44c49" : T && T.RAI?.trim().toUpperCase() === "SIM" ? "rgb(191, 170, 234)" : T && T.PORTAL && T.PORTAL.trim() !== "NAO" && T.PORTAL.trim().startsWith("http") ? "#de866b" : T ? "#f8f1e7" : "#E0E0E0";
      }).attr("stroke", "#de6e4c").attr("stroke-width", "0.5").style("cursor", "pointer").style("opacity", "1").style("transition", "opacity 0.3s").on("mouseover", function(q, B) {
        H.select(this).attr("stroke", "#000").attr("stroke-width", "1.5").style("filter", "brightness(1.1)");
        const T = B.properties.NAME_2 || B.properties.name || "Desconhecido", ge = n[T];
        let ve = `<strong>${T}</strong>`;
        if (ge) {
          const Ge = ge.RAI?.trim().toUpperCase() === "SIM" ? "Sim" : "Não";
          ve += `<br/>RAI: ${Ge}`;
          const we = ge.PORTAL?.trim();
          we && we !== "NAO" && we.startsWith("http") ? ve += `<br/>Portal: <a href="${we}" target="_blank">${we}</a>` : ve += "<br/>Portal: Não", ge.DISTRITO && (ve += `<br/>Distrito: ${ge.DISTRITO}`);
        } else
          ve += "<br/><em>Sem dados disponíveis</em>";
        X.style("opacity", "1").html(ve).style("left", q.pageX + 10 + "px").style("top", q.pageY - 10 + "px");
      }).on("mousemove", function(q) {
        X.style("left", q.pageX + 10 + "px").style("top", q.pageY - 10 + "px");
      }).on("mouseout", function(q, B) {
        const T = n[B.properties.NAME_2 || B.properties.name];
        H.select(this).attr("stroke", "#de6e4c").attr("stroke-width", "0.5").style("filter", "none"), X.style("opacity", "0");
      }).on("click", function(q, B) {
        const T = B.properties.NAME_2 || B.properties.name;
        console.log("Clicou em:", T);
      }), console.log("Mapa criado com sucesso!");
    } catch (x) {
      console.error("Erro ao criar mapa:", x), k(l, x.message);
    }
  }
  function _(y) {
    return y.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }
  function d(y) {
    if (!u)
      return;
    if (!y || y.trim() === "") {
      u.style("opacity", "1");
      return;
    }
    const m = _(y.toLowerCase().trim());
    u.style("opacity", (I) => {
      const M = I.properties.NAME_2 || I.properties.name || "";
      return _(M).includes(m) ? "1" : "0.2";
    });
  }
  function v() {
    a && H.select(h(r)).select("svg").transition().duration(300).call(a.scaleBy, 1.5);
  }
  function f() {
    a && H.select(h(r)).select("svg").transition().duration(300).call(a.scaleBy, 1 / 1.5);
  }
  function g() {
    a && H.select(h(r)).select("svg").transition().duration(300).call(a.transform, H.zoomIdentity);
  }
  Dn(() => Pr(o()), () => {
    console.log("selectedMunicipio mudou:", o()), o() !== void 0 && d(o());
  }), Fn(), Nr();
  var w = vs(), P = C(w);
  {
    var p = (y) => {
      var m = fs();
      G(y, m);
    }, b = (y) => {
      var m = Jn(), I = yt(m);
      {
        var M = (x) => {
          var N = cs(), X = C(N), q = C(X);
          Se(() => Te(q, `Erro ao carregar o mapa: ${h(l) ?? ""}`)), G(x, N);
        };
        Ne(
          I,
          (x) => {
            h(l) && x(M);
          },
          !0
        );
      }
      G(y, m);
    };
    Ne(P, (y) => {
      h(i) ? y(p) : y(b, !1);
    });
  }
  var S = F(P, 2);
  as(S, (y) => k(r, y), () => h(r));
  var z = F(S, 2), ee = C(z), le = F(ee, 2), te = F(le, 2);
  ae("click", ee, v), ae("click", le, f), ae("click", te, g), G(e, w), ir();
}
var _s = /* @__PURE__ */ ie('<li class="svelte-1kq6r5w"> </li>'), ps = /* @__PURE__ */ ie('<ul class="sugestoes svelte-1kq6r5w"></ul>'), hs = /* @__PURE__ */ ie('Há um responsável de acesso à informação no município. Para pedidos de acesso a documentos administrativos, envie um email com a solicitação para <span class="email-destaque svelte-1kq6r5w"> </span>', 1), ms = /* @__PURE__ */ ie('Não há um responsável de acesso à informação no município. Para saber mais informação aceda a <a target="_blank"> </a>', 1), gs = /* @__PURE__ */ ie('<a target="_blank"> </a>'), ws = /* @__PURE__ */ ie('<div class="result-container svelte-1kq6r5w"><h3 class="svelte-1kq6r5w"> </h3> <table class="result-table svelte-1kq6r5w"><thead><tr class="svelte-1kq6r5w"><th class="svelte-1kq6r5w">RAI</th><th class="svelte-1kq6r5w">Portal</th><th class="svelte-1kq6r5w">Shapefiles</th></tr></thead><tbody><tr class="svelte-1kq6r5w"><td class="svelte-1kq6r5w"><!></td><td class="svelte-1kq6r5w"><!></td><td class="svelte-1kq6r5w"><button class="download-btn svelte-1kq6r5w"><svg class="download-icon svelte-1kq6r5w" width="32" height="32" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g stroke="#333" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none"><line x1="50" y1="15" x2="50" y2="55"></line><polyline points="35,40 50,55 65,40"></polyline></g><g stroke="#333" stroke-width="6" stroke-linecap="square" stroke-linejoin="miter" fill="none"><path d="M20 65 L20 80 L80 80 L80 65"></path></g></svg> <span class="download-text svelte-1kq6r5w">Download <strong>Shapefile</strong> do Município</span></button> <div class="shapefile-info svelte-1kq6r5w">Shapefile disponível, use para contar histórias locais.</div></td></tr></tbody></table> <button class="clear-btn svelte-1kq6r5w">Selecionar outro município</button></div>'), ys = /* @__PURE__ */ ie('<div class="dashboard-container svelte-1kq6r5w"><div class="search-section svelte-1kq6r5w"><h2 class="svelte-1kq6r5w">Dados nos municípios</h2> <div class="search-input-container svelte-1kq6r5w"><input type="text" placeholder="Nome do município..." class="search-input svelte-1kq6r5w"/> <button class="search-btn svelte-1kq6r5w">Pesquisar</button></div> <!> <!></div> <div class="map-section svelte-1kq6r5w"><!></div></div>');
function ks(e, t) {
  sr(t, !1);
  let r = /* @__PURE__ */ _e(""), n = [], s = /* @__PURE__ */ _e(null), i = "", l = /* @__PURE__ */ _e([]), u = /* @__PURE__ */ _e("");
  Sr(async () => {
    try {
      const m = await fetch("/municipios.csv");
      if (!m.ok) {
        i = "Erro ao carregar dados dos municípios";
        return;
      }
      const I = await m.text();
      Jt.parse(I, {
        header: !0,
        skipEmptyLines: !0,
        complete: (M) => {
          n = M.data;
        },
        error: () => {
          i = "Erro ao processar dados dos municípios";
        }
      });
    } catch {
      i = "Erro ao carregar dados";
    }
  });
  function a(m) {
    k(r, m), k(
      s,
      null
      // Limpa resultado anterior
    ), k(l, []), o(), k(u, m);
  }
  function o() {
    if (h(r).trim()) {
      const m = _(h(r));
      k(s, n.find((I) => _(I.MUNICIPIO || "") === m)), h(s) ? k(u, h(s).MUNICIPIO) : k(
        u,
        m
        // Mantém o destaque parcial
      ), k(l, []);
    } else
      k(u, ""), k(s, null), k(l, []);
  }
  function c(m) {
    m.key === "Enter" && o();
  }
  function _(m) {
    return m.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }
  function d(m) {
    return `${m}.zip`;
  }
  function v(m) {
    const I = d(m), M = `/shapefiles/${I}`, x = document.createElement("a");
    x.href = M, x.download = I, x.target = "_blank", fetch(M, { method: "HEAD" }).then((N) => {
      N.ok ? x.click() : alert("Shapefile não disponível para este município.");
    }).catch(() => {
      alert("Shapefile não disponível para este município.");
    });
  }
  function f() {
    if (h(s) && k(s, null), h(r).length > 0 && n.length > 0) {
      const m = _(h(r));
      k(l, n.filter((I) => {
        const M = I.MUNICIPIO || "";
        return _(M).includes(m);
      }).sort((I, M) => {
        const x = _(I.MUNICIPIO || "").startsWith(m), N = _(M.MUNICIPIO || "").startsWith(m);
        return x && !N ? -1 : !x && N ? 1 : (I.MUNICIPIO || "").localeCompare(M.MUNICIPIO || "");
      }).slice(0, 10)), k(
        u,
        m
        // Usa o termo de busca para destacar
      );
    } else
      k(l, []), k(
        u,
        ""
        // Limpa o destaque no mapa
      );
  }
  Nr();
  var g = ys(), w = C(g), P = F(C(w), 2), p = C(P), b = F(p, 2), S = F(P, 2);
  {
    var z = (m) => {
      var I = ps();
      es(I, 5, () => h(l), Zn, (M, x) => {
        var N = _s(), X = C(N);
        Se(() => Te(X, h(x).MUNICIPIO)), ae("click", N, () => a(h(x).MUNICIPIO)), G(M, N);
      }), G(m, I);
    };
    Ne(S, (m) => {
      h(l).length > 0 && m(z);
    });
  }
  var ee = F(S, 2);
  {
    var le = (m) => {
      var I = ws(), M = C(I), x = C(M), N = F(M, 2), X = F(C(N)), q = C(X), B = C(q), T = C(B);
      {
        var ge = (W) => {
          var Z = hs(), Pe = F(yt(Z)), ct = C(Pe);
          Se(() => Te(ct, h(s).RAI_Email)), G(W, Z);
        }, ve = (W) => {
          var Z = ms(), Pe = F(yt(Z)), ct = C(Pe);
          Se(() => {
            Ht(Pe, "href", h(s).Website), Te(ct, h(s).Website);
          }), G(W, Z);
        };
        Ne(T, (W) => {
          h(s).RAI?.toLowerCase() === "sim" ? W(ge) : W(ve, !1);
        });
      }
      var Ge = F(B), we = C(Ge);
      {
        var Rr = (W) => {
          var Z = gs(), Pe = C(Z);
          Se(() => {
            Ht(Z, "href", h(s).PORTAL), Te(Pe, h(s).PORTAL);
          }), G(W, Z);
        }, Cr = (W) => {
          var Z = Kn("Não há registos de portal de dados abertos no município indicado.");
          G(W, Z);
        };
        Ne(we, (W) => {
          h(s).PORTAL && h(s).PORTAL.toLowerCase() !== "nao" && h(s).PORTAL.toLowerCase() !== "não" ? W(Rr) : W(Cr, !1);
        });
      }
      var qr = F(Ge), Lr = C(qr), Dr = F(N, 2);
      Se(() => Te(x, h(s).MUNICIPIO)), ae("click", Lr, () => v(h(s).MUNICIPIO)), ae("click", Dr, () => {
        k(s, null), k(r, ""), k(u, "");
      }), G(m, I);
    };
    Ne(ee, (m) => {
      h(s) && m(le);
    });
  }
  var te = F(w, 2), y = C(te);
  ds(y, {
    get selectedMunicipio() {
      return h(u);
    }
  }), ls(p, () => h(r), (m) => k(r, m)), ae("input", p, f), ae("keydown", p, c), ae("click", b, o), G(e, g), ir();
}
export {
  ks as default
};
