var Ei = Object.defineProperty,
  Ti = Object.defineProperties;
var Si = Object.getOwnPropertyDescriptors;
var ve = Object.getOwnPropertySymbols;
var Ai = Object.prototype.hasOwnProperty,
  ki = Object.prototype.propertyIsEnumerable;
var dt = Math.pow,
  we = (a, t, e) =>
    t in a
      ? Ei(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e })
      : (a[t] = e),
  X = (a, t) => {
    for (var e in t || (t = {})) Ai.call(t, e) && we(a, e, t[e]);
    if (ve) for (var e of ve(t)) ki.call(t, e) && we(a, e, t[e]);
    return a;
  },
  at = (a, t) => Ti(a, Si(t));
var _t = (a, t, e) =>
  new Promise((i, n) => {
    var r = c => {
        try {
          o(e.next(c));
        } catch (h) {
          n(h);
        }
      },
      s = c => {
        try {
          o(e.throw(c));
        } catch (h) {
          n(h);
        }
      },
      o = c => (c.done ? i(c.value) : Promise.resolve(c.value).then(r, s));
    o((e = e.apply(a, t)).next());
  });
import { d as Ri } from "./dayjs.min-CQm-uH6z.js";
import {
  u as Oi,
  _ as Ii
} from "./index.vue_vue_type_script_setup_true_lang-CltuDK7x.js";
import {
  c as V,
  o as $,
  j,
  m as Li,
  d as Kt,
  b as k,
  i as U,
  r as z,
  D as Et,
  G as Xe,
  al as _i,
  Z as Ni,
  u as Qt,
  am as Pi,
  T as Bi,
  ao as zi,
  aB as Yi,
  aY as ji,
  aZ as Hi,
  a_ as Wi,
  h as Y,
  a$ as Ui,
  a4 as $i,
  V as Ge,
  aq as Fe,
  e as Yt,
  w as be,
  p as Vi,
  k as ye,
  t as Nt,
  b0 as Xi,
  aO as Gi,
  a as $t,
  S as Fi,
  aa as Pt,
  ab as qi,
  aP as Vt,
  aD as yt,
  az as Zi,
  b1 as Ki,
  ai as xe,
  b2 as Qi,
  b3 as Ji,
  b4 as ta,
  b5 as ea,
  F as ia,
  a0 as aa
} from "./index-DeFtvjuQ.js";
import { u as Xt } from "./user-DNtD0Fqa.js";
import "./index-ttNqQHi_.js";
import "./index.vue_vue_type_script_setup_true_lang-BxAzyghC.js";
const Jt = (a, t) => a.push.apply(a, t),
  wt = a => a.sort((t, e) => t.i - e.i || t.j - e.j),
  Me = a => {
    const t = {};
    let e = 1;
    return (
      a.forEach(i => {
        ((t[i] = e), (e += 1));
      }),
      t
    );
  };
var ra = {
  4: [
    [1, 2],
    [2, 3]
  ],
  5: [
    [1, 3],
    [2, 3],
    [2, 4]
  ],
  6: [
    [1, 2],
    [2, 4],
    [4, 5]
  ],
  7: [
    [1, 3],
    [2, 3],
    [4, 5],
    [4, 6]
  ],
  8: [
    [2, 4],
    [4, 6]
  ]
};
const De = 2050,
  Ce = 1e3,
  na = ra,
  sa = 10,
  oa = 1e4,
  qe = 10,
  Ze = 50,
  Ke = 20,
  Qe = /^[A-Z\xbf-\xdf][^A-Z\xbf-\xdf]+$/,
  ca = /^[^A-Z\xbf-\xdf]+[A-Z\xbf-\xdf]$/,
  ha = /^[A-Z\xbf-\xdf]+$/,
  Je = /^[^a-z\xdf-\xff]+$/,
  la = /^[a-z\xdf-\xff]+$/,
  ua = /^[^A-Z\xbf-\xdf]+$/,
  da = /[a-z\xdf-\xff]/,
  fa = /[A-Z\xbf-\xdf]/,
  pa = /[^A-Za-z\xbf-\xdf]/gi,
  ga = /^\d+$/,
  ue = new Date().getFullYear(),
  ma = { recentYear: /19\d\d|200\d|201\d|202\d/g },
  ti = [" ", ",", ";", ":", "|", "/", "\\", "_", ".", "-"],
  va = ti.length;
class wa {
  match({ password: t }) {
    const e = [
        ...this.getMatchesWithoutSeparator(t),
        ...this.getMatchesWithSeparator(t)
      ],
      i = this.filterNoise(e);
    return wt(i);
  }
  getMatchesWithSeparator(t) {
    const e = [],
      i = /^(\d{1,4})([\s/\\_.-])(\d{1,2})\2(\d{1,4})$/;
    for (let n = 0; n <= Math.abs(t.length - 6); n += 1)
      for (let r = n + 5; r <= n + 9 && !(r >= t.length); r += 1) {
        const s = t.slice(n, +r + 1 || 9e9),
          o = i.exec(s);
        if (o != null) {
          const c = this.mapIntegersToDayMonthYear([
            parseInt(o[1], 10),
            parseInt(o[3], 10),
            parseInt(o[4], 10)
          ]);
          c != null &&
            e.push({
              pattern: "date",
              token: s,
              i: n,
              j: r,
              separator: o[2],
              year: c.year,
              month: c.month,
              day: c.day
            });
        }
      }
    return e;
  }
  getMatchesWithoutSeparator(t) {
    const e = [],
      i = /^\d{4,8}$/,
      n = r => Math.abs(r.year - ue);
    for (let r = 0; r <= Math.abs(t.length - 4); r += 1)
      for (let s = r + 3; s <= r + 7 && !(s >= t.length); s += 1) {
        const o = t.slice(r, +s + 1 || 9e9);
        if (i.exec(o)) {
          const c = [],
            h = o.length;
          if (
            (na[h].forEach(([u, d]) => {
              const g = this.mapIntegersToDayMonthYear([
                parseInt(o.slice(0, u), 10),
                parseInt(o.slice(u, d), 10),
                parseInt(o.slice(d), 10)
              ]);
              g != null && c.push(g);
            }),
            c.length > 0)
          ) {
            let u = c[0],
              d = n(c[0]);
            (c.slice(1).forEach(g => {
              const p = n(g);
              p < d && ((u = g), (d = p));
            }),
              e.push({
                pattern: "date",
                token: o,
                i: r,
                j: s,
                separator: "",
                year: u.year,
                month: u.month,
                day: u.day
              }));
          }
        }
      }
    return e;
  }
  filterNoise(t) {
    return t.filter(e => {
      let i = !1;
      const n = t.length;
      for (let r = 0; r < n; r += 1) {
        const s = t[r];
        if (e !== s && s.i <= e.i && s.j >= e.j) {
          i = !0;
          break;
        }
      }
      return !i;
    });
  }
  mapIntegersToDayMonthYear(t) {
    if (t[1] > 31 || t[1] <= 0) return null;
    let e = 0,
      i = 0,
      n = 0;
    for (let r = 0, s = t.length; r < s; r += 1) {
      const o = t[r];
      if ((o > 99 && o < Ce) || o > De) return null;
      (o > 31 && (i += 1), o > 12 && (e += 1), o <= 0 && (n += 1));
    }
    return i >= 2 || e === 3 || n >= 2 ? null : this.getDayMonth(t);
  }
  getDayMonth(t) {
    const e = [
        [t[2], t.slice(0, 2)],
        [t[0], t.slice(1, 3)]
      ],
      i = e.length;
    for (let n = 0; n < i; n += 1) {
      const [r, s] = e[n];
      if (Ce <= r && r <= De) {
        const o = this.mapIntegersToDayMonth(s);
        return o != null ? { year: r, month: o.month, day: o.day } : null;
      }
    }
    for (let n = 0; n < i; n += 1) {
      const [r, s] = e[n],
        o = this.mapIntegersToDayMonth(s);
      if (o != null)
        return { year: this.twoToFourDigitYear(r), month: o.month, day: o.day };
    }
    return null;
  }
  mapIntegersToDayMonth(t) {
    const e = [t, t.slice().reverse()];
    for (let i = 0; i < e.length; i += 1) {
      const n = e[i],
        r = n[0],
        s = n[1];
      if (r >= 1 && r <= 31 && s >= 1 && s <= 12) return { day: r, month: s };
    }
    return null;
  }
  twoToFourDigitYear(t) {
    return t > 99 ? t : t > 50 ? t + 1900 : t + 2e3;
  }
}
const it = new Uint32Array(65536),
  ba = (a, t) => {
    const e = a.length,
      i = t.length,
      n = 1 << (e - 1);
    let r = -1,
      s = 0,
      o = e,
      c = e;
    for (; c--; ) it[a.charCodeAt(c)] |= 1 << c;
    for (c = 0; c < i; c++) {
      let h = it[t.charCodeAt(c)];
      const l = h | s;
      ((h |= ((h & r) + r) ^ r),
        (s |= ~(h | r)),
        (r &= h),
        s & n && o++,
        r & n && o--,
        (s = (s << 1) | 1),
        (r = (r << 1) | ~(l | s)),
        (s &= l));
    }
    for (c = e; c--; ) it[a.charCodeAt(c)] = 0;
    return o;
  },
  ya = (a, t) => {
    const e = t.length,
      i = a.length,
      n = [],
      r = [],
      s = Math.ceil(e / 32),
      o = Math.ceil(i / 32);
    for (let p = 0; p < s; p++) ((r[p] = -1), (n[p] = 0));
    let c = 0;
    for (; c < o - 1; c++) {
      let p = 0,
        b = -1;
      const v = c * 32,
        C = Math.min(32, i) + v;
      for (let w = v; w < C; w++) it[a.charCodeAt(w)] |= 1 << w;
      for (let w = 0; w < e; w++) {
        const M = it[t.charCodeAt(w)],
          _ = (r[(w / 32) | 0] >>> w) & 1,
          O = (n[(w / 32) | 0] >>> w) & 1,
          f = M | p,
          D = ((((M | O) & b) + b) ^ b) | M | O;
        let R = p | ~(D | b),
          I = b & D;
        ((R >>> 31) ^ _ && (r[(w / 32) | 0] ^= 1 << w),
          (I >>> 31) ^ O && (n[(w / 32) | 0] ^= 1 << w),
          (R = (R << 1) | _),
          (I = (I << 1) | O),
          (b = I | ~(f | R)),
          (p = R & f));
      }
      for (let w = v; w < C; w++) it[a.charCodeAt(w)] = 0;
    }
    let h = 0,
      l = -1;
    const u = c * 32,
      d = Math.min(32, i - u) + u;
    for (let p = u; p < d; p++) it[a.charCodeAt(p)] |= 1 << p;
    let g = i;
    for (let p = 0; p < e; p++) {
      const b = it[t.charCodeAt(p)],
        v = (r[(p / 32) | 0] >>> p) & 1,
        C = (n[(p / 32) | 0] >>> p) & 1,
        w = b | h,
        M = ((((b | C) & l) + l) ^ l) | b | C;
      let _ = h | ~(M | l),
        O = l & M;
      ((g += (_ >>> (i - 1)) & 1),
        (g -= (O >>> (i - 1)) & 1),
        (_ >>> 31) ^ v && (r[(p / 32) | 0] ^= 1 << p),
        (O >>> 31) ^ C && (n[(p / 32) | 0] ^= 1 << p),
        (_ = (_ << 1) | v),
        (O = (O << 1) | C),
        (l = O | ~(w | _)),
        (h = _ & w));
    }
    for (let p = u; p < d; p++) it[a.charCodeAt(p)] = 0;
    return g;
  },
  xa = (a, t) => {
    if (a.length < t.length) {
      const e = t;
      ((t = a), (a = e));
    }
    return t.length === 0 ? a.length : a.length <= 32 ? ba(a, t) : ya(a, t);
  },
  Ma = (a, t, e) => {
    const i = a.length <= t.length,
      n = a.length <= e;
    return i || n ? Math.ceil(a.length / 4) : e;
  },
  Da = (a, t, e) => {
    let i = 0;
    const n = Object.keys(t).find(r => {
      const s = Ma(a, r, e);
      if (Math.abs(a.length - r.length) > s) return !1;
      const o = xa(a, r),
        c = o <= s;
      return (c && (i = o), c);
    });
    return n ? { levenshteinDistance: i, levenshteinDistanceEntry: n } : {};
  };
var Ee = {
    a: ["4", "@"],
    b: ["8"],
    c: ["(", "{", "[", "<"],
    d: ["6", "|)"],
    e: ["3"],
    f: ["#"],
    g: ["6", "9", "&"],
    h: ["#", "|-|"],
    i: ["1", "!", "|"],
    k: ["<", "|<"],
    l: ["!", "1", "|", "7"],
    m: ["^^", "nn", "2n", "/\\\\/\\\\"],
    n: ["//"],
    o: ["0", "()"],
    q: ["9"],
    u: ["|_|"],
    s: ["$", "5"],
    t: ["+", "7"],
    v: ["<", ">", "/"],
    w: ["^/", "uu", "vv", "2u", "2v", "\\\\/\\\\/"],
    x: ["%", "><"],
    z: ["2"]
  },
  Gt = {
    warnings: {
      straightRow: "straightRow",
      keyPattern: "keyPattern",
      simpleRepeat: "simpleRepeat",
      extendedRepeat: "extendedRepeat",
      sequences: "sequences",
      recentYears: "recentYears",
      dates: "dates",
      topTen: "topTen",
      topHundred: "topHundred",
      common: "common",
      similarToCommon: "similarToCommon",
      wordByItself: "wordByItself",
      namesByThemselves: "namesByThemselves",
      commonNames: "commonNames",
      userInputs: "userInputs",
      pwned: "pwned"
    },
    suggestions: {
      l33t: "l33t",
      reverseWords: "reverseWords",
      allUppercase: "allUppercase",
      capitalization: "capitalization",
      dates: "dates",
      recentYears: "recentYears",
      associatedYears: "associatedYears",
      sequences: "sequences",
      repeated: "repeated",
      longerKeyboardPattern: "longerKeyboardPattern",
      anotherWord: "anotherWord",
      useWords: "useWords",
      noNeed: "noNeed",
      pwned: "pwned"
    },
    timeEstimation: {
      ltSecond: "ltSecond",
      second: "second",
      seconds: "seconds",
      minute: "minute",
      minutes: "minutes",
      hour: "hour",
      hours: "hours",
      day: "day",
      days: "days",
      month: "month",
      months: "months",
      year: "year",
      years: "years",
      centuries: "centuries"
    }
  };
class St {
  constructor(t = []) {
    ((this.parents = t), (this.children = new Map()));
  }
  addSub(t, ...e) {
    const i = t.charAt(0);
    this.children.has(i) || this.children.set(i, new St([...this.parents, i]));
    let n = this.children.get(i);
    for (let r = 1; r < t.length; r += 1) {
      const s = t.charAt(r);
      (n.hasChild(s) || n.addChild(s), (n = n.getChild(s)));
    }
    return ((n.subs = (n.subs || []).concat(e)), this);
  }
  getChild(t) {
    return this.children.get(t);
  }
  isTerminal() {
    return !!this.subs;
  }
  addChild(t) {
    this.hasChild(t) || this.children.set(t, new St([...this.parents, t]));
  }
  hasChild(t) {
    return this.children.has(t);
  }
}
var Te = (a, t) => (
  Object.entries(a).forEach(([e, i]) => {
    i.forEach(n => {
      t.addSub(n, e);
    });
  }),
  t
);
class Ca {
  constructor() {
    ((this.matchers = {}),
      (this.l33tTable = Ee),
      (this.trieNodeRoot = Te(Ee, new St())),
      (this.dictionary = { userInputs: [] }),
      (this.rankedDictionaries = {}),
      (this.rankedDictionariesMaxWordSize = {}),
      (this.translations = Gt),
      (this.graphs = {}),
      (this.useLevenshteinDistance = !1),
      (this.levenshteinThreshold = 2),
      (this.l33tMaxSubstitutions = 100),
      (this.maxLength = 256),
      this.setRankedDictionaries());
  }
  setOptions(t = {}) {
    (t.l33tTable &&
      ((this.l33tTable = t.l33tTable),
      (this.trieNodeRoot = Te(t.l33tTable, new St()))),
      t.dictionary &&
        ((this.dictionary = t.dictionary), this.setRankedDictionaries()),
      t.translations && this.setTranslations(t.translations),
      t.graphs && (this.graphs = t.graphs),
      t.useLevenshteinDistance !== void 0 &&
        (this.useLevenshteinDistance = t.useLevenshteinDistance),
      t.levenshteinThreshold !== void 0 &&
        (this.levenshteinThreshold = t.levenshteinThreshold),
      t.l33tMaxSubstitutions !== void 0 &&
        (this.l33tMaxSubstitutions = t.l33tMaxSubstitutions),
      t.maxLength !== void 0 && (this.maxLength = t.maxLength));
  }
  setTranslations(t) {
    if (this.checkCustomTranslations(t)) this.translations = t;
    else throw new Error("Invalid translations object fallback to keys");
  }
  checkCustomTranslations(t) {
    let e = !0;
    return (
      Object.keys(Gt).forEach(i => {
        if (i in t) {
          const n = i;
          Object.keys(Gt[n]).forEach(r => {
            r in t[n] || (e = !1);
          });
        } else e = !1;
      }),
      e
    );
  }
  setRankedDictionaries() {
    const t = {},
      e = {};
    (Object.keys(this.dictionary).forEach(i => {
      ((t[i] = Me(this.dictionary[i])),
        (e[i] = this.getRankedDictionariesMaxWordSize(this.dictionary[i])));
    }),
      (this.rankedDictionaries = t),
      (this.rankedDictionariesMaxWordSize = e));
  }
  getRankedDictionariesMaxWordSize(t) {
    const e = t.map(i =>
      typeof i != "string" ? i.toString().length : i.length
    );
    return e.length === 0 ? 0 : e.reduce((i, n) => Math.max(i, n), -1 / 0);
  }
  buildSanitizedRankedDictionary(t) {
    const e = [];
    return (
      t.forEach(i => {
        const n = typeof i;
        (n === "string" || n === "number" || n === "boolean") &&
          e.push(i.toString().toLowerCase());
      }),
      Me(e)
    );
  }
  extendUserInputsDictionary(t) {
    this.dictionary.userInputs || (this.dictionary.userInputs = []);
    const e = [...this.dictionary.userInputs, ...t];
    ((this.rankedDictionaries.userInputs =
      this.buildSanitizedRankedDictionary(e)),
      (this.rankedDictionariesMaxWordSize.userInputs =
        this.getRankedDictionariesMaxWordSize(e)));
  }
  addMatcher(t, e) {
    this.matchers[t]
      ? console.info(`Matcher ${t} already exists`)
      : (this.matchers[t] = e);
  }
}
const y = new Ca();
class Ea {
  constructor(t) {
    this.defaultMatch = t;
  }
  match({ password: t }) {
    const e = t.split("").reverse().join("");
    return this.defaultMatch({ password: e }).map(i =>
      at(X({}, i), {
        token: i.token.split("").reverse().join(""),
        reversed: !0,
        i: t.length - 1 - i.j,
        j: t.length - 1 - i.i
      })
    );
  }
}
class Ta {
  constructor({ substr: t, limit: e, trieRoot: i }) {
    ((this.buffer = []),
      (this.finalPasswords = []),
      (this.substr = t),
      (this.limit = e),
      (this.trieRoot = i));
  }
  getAllPossibleSubsAtIndex(t) {
    const e = [];
    let i = this.trieRoot;
    for (let n = t; n < this.substr.length; n += 1) {
      const r = this.substr.charAt(n);
      if (((i = i.getChild(r)), !i)) break;
      e.push(i);
    }
    return e;
  }
  helper({
    onlyFullSub: t,
    isFullSub: e,
    index: i,
    subIndex: n,
    changes: r,
    lastSubLetter: s,
    consecutiveSubCount: o
  }) {
    if (this.finalPasswords.length >= this.limit) return;
    if (i === this.substr.length) {
      t === e &&
        this.finalPasswords.push({
          password: this.buffer.join(""),
          changes: r
        });
      return;
    }
    const c = [...this.getAllPossibleSubsAtIndex(i)];
    let h = !1;
    for (let l = i + c.length - 1; l >= i; l -= 1) {
      const u = c[l - i];
      if (u.isTerminal()) {
        if (s === u.parents.join("") && o >= 3) continue;
        h = !0;
        const d = u.subs;
        for (const g of d) {
          this.buffer.push(g);
          const p = r.concat({
            i: n,
            letter: g,
            substitution: u.parents.join("")
          });
          if (
            (this.helper({
              onlyFullSub: t,
              isFullSub: e,
              index: l + 1,
              subIndex: n + g.length,
              changes: p,
              lastSubLetter: u.parents.join(""),
              consecutiveSubCount: s === u.parents.join("") ? o + 1 : 1
            }),
            this.buffer.pop(),
            this.finalPasswords.length >= this.limit)
          )
            return;
        }
      }
    }
    if (!t || !h) {
      const l = this.substr.charAt(i);
      (this.buffer.push(l),
        this.helper({
          onlyFullSub: t,
          isFullSub: e && !h,
          index: i + 1,
          subIndex: n + 1,
          changes: r,
          lastSubLetter: s,
          consecutiveSubCount: o
        }),
        this.buffer.pop());
    }
  }
  getAll() {
    return (
      this.helper({
        onlyFullSub: !0,
        isFullSub: !0,
        index: 0,
        subIndex: 0,
        changes: [],
        lastSubLetter: void 0,
        consecutiveSubCount: 0
      }),
      this.helper({
        onlyFullSub: !1,
        isFullSub: !0,
        index: 0,
        subIndex: 0,
        changes: [],
        lastSubLetter: void 0,
        consecutiveSubCount: 0
      }),
      this.finalPasswords
    );
  }
}
const Sa = (a, t, e) => new Ta({ substr: a, limit: t, trieRoot: e }).getAll(),
  Aa = (a, t, e) => {
    const n = a.changes
        .filter(h => h.i < t)
        .reduce((h, l) => h - l.letter.length + l.substitution.length, t),
      r = a.changes.filter(h => h.i >= t && h.i <= e),
      s = r.reduce(
        (h, l) => h - l.letter.length + l.substitution.length,
        e - t + n
      ),
      o = [],
      c = [];
    return (
      r.forEach(h => {
        o.findIndex(
          u => u.letter === h.letter && u.substitution === h.substitution
        ) < 0 &&
          (o.push({ letter: h.letter, substitution: h.substitution }),
          c.push(`${h.substitution} -> ${h.letter}`));
      }),
      { i: n, j: s, subs: o, subDisplay: c.join(", ") }
    );
  };
class ka {
  constructor(t) {
    this.defaultMatch = t;
  }
  isAlreadyIncluded(t, e) {
    return t.some(i =>
      Object.entries(i).every(([n, r]) => n === "subs" || r === e[n])
    );
  }
  match({ password: t }) {
    const e = [],
      i = Sa(t, y.l33tMaxSubstitutions, y.trieNodeRoot);
    let n = !1,
      r = !0;
    return (
      i.forEach(s => {
        if (n) return;
        const o = this.defaultMatch({
          password: s.password,
          useLevenshtein: r
        });
        ((r = !1),
          o.forEach(c => {
            n || (n = c.i === 0 && c.j === t.length - 1);
            const h = Aa(s, c.i, c.j),
              l = t.slice(h.i, +h.j + 1 || 9e9),
              u = X(at(X({}, c), { l33t: !0, token: l }), h),
              d = this.isAlreadyIncluded(e, u);
            l.toLowerCase() !== c.matchedWord && !d && e.push(u);
          }));
      }),
      e.filter(s => s.token.length > 1)
    );
  }
}
class Ra {
  constructor() {
    ((this.l33t = new ka(this.defaultMatch)),
      (this.reverse = new Ea(this.defaultMatch)));
  }
  match({ password: t }) {
    const e = [
      ...this.defaultMatch({ password: t }),
      ...this.reverse.match({ password: t }),
      ...this.l33t.match({ password: t })
    ];
    return wt(e);
  }
  defaultMatch({ password: t, useLevenshtein: e = !0 }) {
    const i = [],
      n = t.length,
      r = t.toLowerCase();
    return (
      Object.keys(y.rankedDictionaries).forEach(s => {
        const o = y.rankedDictionaries[s],
          c = y.rankedDictionariesMaxWordSize[s],
          h = Math.min(c, n);
        for (let l = 0; l < n; l += 1) {
          const u = Math.min(l + h, n);
          for (let d = l; d < u; d += 1) {
            const g = r.slice(l, +d + 1 || 9e9),
              p = g in o;
            let b = {};
            const v = l === 0 && d === n - 1;
            y.useLevenshteinDistance &&
              v &&
              !p &&
              e &&
              (b = Da(g, o, y.levenshteinThreshold));
            const C = Object.keys(b).length !== 0;
            if (p || C) {
              const w = C ? b.levenshteinDistanceEntry : g,
                M = o[w];
              i.push(
                X(
                  {
                    pattern: "dictionary",
                    i: l,
                    j: d,
                    token: t.slice(l, +d + 1 || 9e9),
                    matchedWord: g,
                    rank: M,
                    dictionaryName: s,
                    reversed: !1,
                    l33t: !1
                  },
                  b
                )
              );
            }
          }
        }
      }),
      i
    );
  }
}
class Oa {
  match({ password: t, regexes: e = ma }) {
    const i = [];
    return (
      Object.keys(e).forEach(n => {
        const r = e[n];
        r.lastIndex = 0;
        let s;
        for (; (s = r.exec(t)); )
          if (s) {
            const o = s[0];
            i.push({
              pattern: "regex",
              token: o,
              i: s.index,
              j: s.index + s[0].length - 1,
              regexName: n,
              regexMatch: s
            });
          }
      }),
      wt(i)
    );
  }
}
var lt = {
    nCk(a, t) {
      let e = a;
      if (t > e) return 0;
      if (t === 0) return 1;
      let i = 1;
      for (let n = 1; n <= t; n += 1) ((i *= e), (i /= n), (e -= 1));
      return i;
    },
    log10(a) {
      return a === 0 ? 0 : Math.log(a) / Math.log(10);
    },
    log2(a) {
      return Math.log(a) / Math.log(2);
    },
    factorial(a) {
      let t = 1;
      for (let e = 2; e <= a; e += 1) t *= e;
      return t;
    }
  },
  Ia = ({ token: a }) => {
    let t = dt(sa, a.length);
    t === Number.POSITIVE_INFINITY && (t = Number.MAX_VALUE);
    let e;
    return (a.length === 1 ? (e = qe + 1) : (e = Ze + 1), Math.max(t, e));
  },
  La = ({ year: a, separator: t }) => {
    let i = Math.max(Math.abs(a - ue), Ke) * 365;
    return (t && (i *= 4), i);
  };
const _a = a => {
  const t = a.split(""),
    e = t.filter(s => s.match(fa)).length,
    i = t.filter(s => s.match(da)).length;
  let n = 0;
  const r = Math.min(e, i);
  for (let s = 1; s <= r; s += 1) n += lt.nCk(e + i, s);
  return n;
};
var Na = a => {
  const t = a.replace(pa, "");
  if (t.match(ua) || t.toLowerCase() === t) return 1;
  const e = [Qe, ca, Je],
    i = e.length;
  for (let n = 0; n < i; n += 1) {
    const r = e[n];
    if (t.match(r)) return 2;
  }
  return _a(t);
};
const Se = (a, t) => {
    let e = 0,
      i = a.indexOf(t);
    for (; i >= 0; ) ((e += 1), (i = a.indexOf(t, i + t.length)));
    return e;
  },
  Pa = ({ sub: a, token: t }) => {
    const e = t.toLowerCase(),
      i = Se(e, a.substitution),
      n = Se(e, a.letter);
    return { subbedCount: i, unsubbedCount: n };
  };
var Ba = ({ l33t: a, subs: t, token: e }) => {
    if (!a) return 1;
    let i = 1;
    return (
      t.forEach(n => {
        const { subbedCount: r, unsubbedCount: s } = Pa({ sub: n, token: e });
        if (r === 0 || s === 0) i *= 2;
        else {
          const o = Math.min(s, r);
          let c = 0;
          for (let h = 1; h <= o; h += 1) c += lt.nCk(s + r, h);
          i *= c;
        }
      }),
      i
    );
  },
  za = ({
    rank: a,
    reversed: t,
    l33t: e,
    subs: i,
    token: n,
    dictionaryName: r
  }) => {
    const s = a,
      o = Na(n),
      c = Ba({ l33t: e, subs: i, token: n }),
      h = (t && 2) || 1;
    let l;
    return (
      r === "diceware" ? (l = dt(6, 5) / 2) : (l = s * o * c * h),
      {
        baseGuesses: s,
        uppercaseVariations: o,
        l33tVariations: c,
        calculation: l
      }
    );
  },
  Ya = ({ regexName: a, regexMatch: t, token: e }) => {
    const i = {
      alphaLower: 26,
      alphaUpper: 26,
      alpha: 52,
      alphanumeric: 62,
      digits: 10,
      symbols: 33
    };
    if (a in i) return dt(i[a], e.length);
    switch (a) {
      case "recentYear":
        return Math.max(Math.abs(parseInt(t[0], 10) - ue), Ke);
    }
    return 0;
  },
  ja = ({ baseGuesses: a, repeatCount: t }) => a * t,
  Ha = ({ token: a, ascending: t }) => {
    const e = a.charAt(0);
    let i = 0;
    return (
      ["a", "A", "z", "Z", "0", "1", "9"].includes(e)
        ? (i = 4)
        : e.match(/\d/)
          ? (i = 10)
          : (i = 26),
      t || (i *= 2),
      i * a.length
    );
  };
const Wa = a => {
    let t = 0;
    return (
      Object.keys(a).forEach(e => {
        const i = a[e];
        t += i.filter(n => !!n).length;
      }),
      (t /= Object.entries(a).length),
      t
    );
  },
  Ua = ({ token: a, graph: t, turns: e }) => {
    const i = Object.keys(y.graphs[t]).length,
      n = Wa(y.graphs[t]);
    let r = 0;
    const s = a.length;
    for (let o = 2; o <= s; o += 1) {
      const c = Math.min(e, o - 1);
      for (let h = 1; h <= c; h += 1) r += lt.nCk(o - 1, h - 1) * i * dt(n, h);
    }
    return r;
  };
var $a = ({ graph: a, token: t, shiftedCount: e, turns: i }) => {
    let n = Ua({ token: t, graph: a, turns: i });
    if (e) {
      const r = t.length - e;
      if (e === 0 || r === 0) n *= 2;
      else {
        let s = 0;
        for (let o = 1; o <= Math.min(e, r); o += 1) s += lt.nCk(e + r, o);
        n *= s;
      }
    }
    return Math.round(n);
  },
  Va = () => va;
const Xa = (a, t) => {
    let e = 1;
    return (
      a.token.length < t.length && (a.token.length === 1 ? (e = qe) : (e = Ze)),
      e
    );
  },
  Ae = {
    bruteforce: Ia,
    date: La,
    dictionary: za,
    regex: Ya,
    repeat: ja,
    sequence: Ha,
    spatial: $a,
    separator: Va
  },
  Ga = (a, t) =>
    Ae[a]
      ? Ae[a](t)
      : y.matchers[a] && "scoring" in y.matchers[a]
        ? y.matchers[a].scoring(t)
        : 0;
var Fa = (a, t) => {
  const e = {};
  if ("guesses" in a && a.guesses != null) return a;
  const i = Xa(a, t),
    n = Ga(a.pattern, a);
  let r = 0;
  typeof n == "number"
    ? (r = n)
    : a.pattern === "dictionary" &&
      ((r = n.calculation),
      (e.baseGuesses = n.baseGuesses),
      (e.uppercaseVariations = n.uppercaseVariations),
      (e.l33tVariations = n.l33tVariations));
  const s = Math.max(r, i);
  return at(X(X({}, a), e), { guesses: s, guessesLog10: lt.log10(s) });
};
const Z = {
  password: "",
  optimal: {},
  excludeAdditive: !1,
  separatorRegex: void 0,
  fillArray(a, t) {
    const e = [];
    for (let i = 0; i < a; i += 1) {
      let n = [];
      (t === "object" && (n = {}), e.push(n));
    }
    return e;
  },
  makeBruteforceMatch(a, t) {
    return {
      pattern: "bruteforce",
      token: this.password.slice(a, +t + 1 || 9e9),
      i: a,
      j: t
    };
  },
  update(a, t) {
    const e = a.j,
      i = Fa(a, this.password);
    let n = i.guesses;
    t > 1 && (n *= this.optimal.pi[i.i - 1][t - 1]);
    let r = lt.factorial(t) * n;
    this.excludeAdditive || (r += dt(oa, t - 1));
    let s = !1;
    (Object.keys(this.optimal.g[e]).forEach(o => {
      const c = this.optimal.g[e][o];
      parseInt(o, 10) <= t && c <= r && (s = !0);
    }),
      s ||
        ((this.optimal.g[e][t] = r),
        (this.optimal.m[e][t] = i),
        (this.optimal.pi[e][t] = n)));
  },
  bruteforceUpdate(a) {
    let t = this.makeBruteforceMatch(0, a);
    this.update(t, 1);
    for (let e = 1; e <= a; e += 1) {
      t = this.makeBruteforceMatch(e, a);
      const i = this.optimal.m[e - 1];
      Object.keys(i).forEach(n => {
        i[n].pattern !== "bruteforce" && this.update(t, parseInt(n, 10) + 1);
      });
    }
  },
  unwind(a) {
    const t = [];
    let e = a - 1,
      i = 0,
      n = 1 / 0;
    const r = this.optimal.g[e];
    for (
      r &&
      Object.keys(r).forEach(s => {
        const o = r[s];
        o < n && ((i = parseInt(s, 10)), (n = o));
      });
      e >= 0;

    ) {
      const s = this.optimal.m[e][i];
      (t.unshift(s), (e = s.i - 1), (i -= 1));
    }
    return t;
  }
};
var te = {
  mostGuessableMatchSequence(a, t, e = !1) {
    ((Z.password = a), (Z.excludeAdditive = e));
    const i = a.length;
    let n = Z.fillArray(i, "array");
    (t.forEach(c => {
      n[c.j].push(c);
    }),
      (n = n.map(c => c.sort((h, l) => h.i - l.i))),
      (Z.optimal = {
        m: Z.fillArray(i, "object"),
        pi: Z.fillArray(i, "object"),
        g: Z.fillArray(i, "object")
      }));
    for (let c = 0; c < i; c += 1)
      (n[c].forEach(h => {
        h.i > 0
          ? Object.keys(Z.optimal.m[h.i - 1]).forEach(l => {
              Z.update(h, parseInt(l, 10) + 1);
            })
          : Z.update(h, 1);
      }),
        Z.bruteforceUpdate(c));
    const r = Z.unwind(i),
      s = r.length,
      o = this.getGuesses(a, s);
    return { password: a, guesses: o, guessesLog10: lt.log10(o), sequence: r };
  },
  getGuesses(a, t) {
    const e = a.length;
    let i = 0;
    return (a.length === 0 ? (i = 1) : (i = Z.optimal.g[e - 1][t]), i);
  }
};
class qa {
  match({ password: t, omniMatch: e }) {
    const i = [];
    let n = 0;
    for (; n < t.length; ) {
      const s = this.getGreedyMatch(t, n),
        o = this.getLazyMatch(t, n);
      if (s == null) break;
      const { match: c, baseToken: h } = this.setMatchToken(s, o);
      if (c) {
        const l = c.index + c[0].length - 1,
          u = this.getBaseGuesses(h, e);
        (i.push(this.normalizeMatch(h, l, c, u)), (n = l + 1));
      }
    }
    return i.some(s => s instanceof Promise) ? Promise.all(i) : i;
  }
  normalizeMatch(t, e, i, n) {
    const r = {
      pattern: "repeat",
      i: i.index,
      j: e,
      token: i[0],
      baseToken: t,
      baseGuesses: 0,
      repeatCount: i[0].length / t.length
    };
    return n instanceof Promise
      ? n.then(s => at(X({}, r), { baseGuesses: s }))
      : at(X({}, r), { baseGuesses: n });
  }
  getGreedyMatch(t, e) {
    const i = /(.+)\1+/g;
    return ((i.lastIndex = e), i.exec(t));
  }
  getLazyMatch(t, e) {
    const i = /(.+?)\1+/g;
    return ((i.lastIndex = e), i.exec(t));
  }
  setMatchToken(t, e) {
    const i = /^(.+?)\1+$/;
    let n,
      r = "";
    if (e && t[0].length > e[0].length) {
      n = t;
      const s = i.exec(n[0]);
      s && (r = s[1]);
    } else ((n = e), n && (r = n[1]));
    return { match: n, baseToken: r };
  }
  getBaseGuesses(t, e) {
    const i = e.match(t);
    return i instanceof Promise
      ? i.then(r => te.mostGuessableMatchSequence(t, r).guesses)
      : te.mostGuessableMatchSequence(t, i).guesses;
  }
}
class Za {
  constructor() {
    this.MAX_DELTA = 5;
  }
  match({ password: t }) {
    const e = [];
    if (t.length === 1) return [];
    let i = 0,
      n = null;
    const r = t.length;
    for (let s = 1; s < r; s += 1) {
      const o = t.charCodeAt(s) - t.charCodeAt(s - 1);
      if ((n == null && (n = o), o !== n)) {
        const c = s - 1;
        (this.update({ i, j: c, delta: n, password: t, result: e }),
          (i = c),
          (n = o));
      }
    }
    return (this.update({ i, j: r - 1, delta: n, password: t, result: e }), e);
  }
  update({ i: t, j: e, delta: i, password: n, result: r }) {
    if (e - t > 1 || Math.abs(i) === 1) {
      const s = Math.abs(i);
      if (s > 0 && s <= this.MAX_DELTA) {
        const o = n.slice(t, +e + 1 || 9e9),
          { sequenceName: c, sequenceSpace: h } = this.getSequence(o);
        return r.push({
          pattern: "sequence",
          i: t,
          j: e,
          token: n.slice(t, +e + 1 || 9e9),
          sequenceName: c,
          sequenceSpace: h,
          ascending: i > 0
        });
      }
    }
    return null;
  }
  getSequence(t) {
    let e = "unicode",
      i = 26;
    return (
      la.test(t)
        ? ((e = "lower"), (i = 26))
        : ha.test(t)
          ? ((e = "upper"), (i = 26))
          : ga.test(t) && ((e = "digits"), (i = 10)),
      { sequenceName: e, sequenceSpace: i }
    );
  }
}
class Ka {
  constructor() {
    this.SHIFTED_RX = /[~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?]/;
  }
  match({ password: t }) {
    const e = [];
    return (
      Object.keys(y.graphs).forEach(i => {
        const n = y.graphs[i];
        Jt(e, this.helper(t, n, i));
      }),
      wt(e)
    );
  }
  checkIfShifted(t, e, i) {
    return !t.includes("keypad") && this.SHIFTED_RX.test(e.charAt(i)) ? 1 : 0;
  }
  helper(t, e, i) {
    let n;
    const r = [];
    let s = 0;
    const o = t.length;
    for (; s < o - 1; ) {
      let c = s + 1,
        h = null,
        l = 0;
      for (n = this.checkIfShifted(i, t, s); ; ) {
        const u = t.charAt(c - 1),
          d = e[u] || [];
        let g = !1,
          p = -1,
          b = -1;
        if (c < o) {
          const v = t.charAt(c),
            C = d.length;
          for (let w = 0; w < C; w += 1) {
            const M = d[w];
            if (((b += 1), M)) {
              const _ = M.indexOf(v);
              if (_ !== -1) {
                ((g = !0),
                  (p = b),
                  _ === 1 && (n += 1),
                  h !== p && ((l += 1), (h = p)));
                break;
              }
            }
          }
        }
        if (g) c += 1;
        else {
          (c - s > 2 &&
            r.push({
              pattern: "spatial",
              i: s,
              j: c - 1,
              token: t.slice(s, c),
              graph: i,
              turns: l,
              shiftedCount: n
            }),
            (s = c));
          break;
        }
      }
    }
    return r;
  }
}
const Qa = new RegExp(`[${ti.join("")}]`);
class jt {
  static getMostUsedSeparatorChar(t) {
    const e = [
      ...t
        .split("")
        .filter(n => Qa.test(n))
        .reduce((n, r) => {
          const s = n.get(r);
          return (s ? n.set(r, s + 1) : n.set(r, 1), n);
        }, new Map())
        .entries()
    ].sort(([n, r], [s, o]) => o - r);
    if (!e.length) return;
    const i = e[0];
    if (!(i[1] < 2)) return i[0];
  }
  static getSeparatorRegex(t) {
    return new RegExp(
      `([^${t}
])(${t})(?!${t})`,
      "g"
    );
  }
  match({ password: t }) {
    const e = [];
    if (t.length === 0) return e;
    const i = jt.getMostUsedSeparatorChar(t);
    if (i === void 0) return e;
    const n = jt.getSeparatorRegex(i);
    for (const r of t.matchAll(n)) {
      if (r.index === void 0) continue;
      const s = r.index + 1;
      e.push({ pattern: "separator", token: i, i: s, j: s });
    }
    return e;
  }
}
class Ja {
  constructor() {
    this.matchers = {
      date: wa,
      dictionary: Ra,
      regex: Oa,
      repeat: qa,
      sequence: Za,
      spatial: Ka,
      separator: jt
    };
  }
  match(t) {
    const e = [],
      i = [];
    return (
      [...Object.keys(this.matchers), ...Object.keys(y.matchers)].forEach(r => {
        if (!this.matchers[r] && !y.matchers[r]) return;
        const s = this.matchers[r] ? this.matchers[r] : y.matchers[r].Matching,
          c = new s().match({ password: t, omniMatch: this });
        c instanceof Promise
          ? (c.then(h => {
              Jt(e, h);
            }),
            i.push(c))
          : Jt(e, c);
      }),
      i.length > 0
        ? new Promise((r, s) => {
            Promise.all(i)
              .then(() => {
                r(wt(e));
              })
              .catch(o => {
                s(o);
              });
          })
        : wt(e)
    );
  }
}
const ei = 1,
  ii = ei * 60,
  ai = ii * 60,
  ri = ai * 24,
  ni = ri * 31,
  si = ni * 12,
  tr = si * 100,
  Ft = {
    second: ei,
    minute: ii,
    hour: ai,
    day: ri,
    month: ni,
    year: si,
    century: tr
  };
class er {
  translate(t, e) {
    let i = t;
    e !== void 0 && e !== 1 && (i += "s");
    const { timeEstimation: n } = y.translations;
    return n[i].replace("{base}", `${e}`);
  }
  estimateAttackTimes(t) {
    const e = {
        onlineThrottling100PerHour: t / 0.027777777777777776,
        onlineNoThrottling10PerSecond: t / 10,
        offlineSlowHashing1e4PerSecond: t / 1e4,
        offlineFastHashing1e10PerSecond: t / 1e10
      },
      i = {
        onlineThrottling100PerHour: "",
        onlineNoThrottling10PerSecond: "",
        offlineSlowHashing1e4PerSecond: "",
        offlineFastHashing1e10PerSecond: ""
      };
    return (
      Object.keys(e).forEach(n => {
        const r = e[n];
        i[n] = this.displayTime(r);
      }),
      {
        crackTimesSeconds: e,
        crackTimesDisplay: i,
        score: this.guessesToScore(t)
      }
    );
  }
  guessesToScore(t) {
    return t < 1005
      ? 0
      : t < 1000005
        ? 1
        : t < 100000005
          ? 2
          : t < 1e10 + 5
            ? 3
            : 4;
  }
  displayTime(t) {
    let e = "centuries",
      i;
    const n = Object.keys(Ft),
      r = n.findIndex(s => t < Ft[s]);
    return (
      r > -1 &&
        ((e = n[r - 1]),
        r !== 0 ? (i = Math.round(t / Ft[e])) : (e = "ltSecond")),
      this.translate(e, i)
    );
  }
}
var ir = () => null,
  ar = () => ({
    warning: y.translations.warnings.dates,
    suggestions: [y.translations.suggestions.dates]
  });
const rr = (a, t) => {
    let e = null;
    return (
      t && !a.l33t && !a.reversed
        ? a.rank <= 10
          ? (e = y.translations.warnings.topTen)
          : a.rank <= 100
            ? (e = y.translations.warnings.topHundred)
            : (e = y.translations.warnings.common)
        : a.guessesLog10 <= 4 && (e = y.translations.warnings.similarToCommon),
      e
    );
  },
  nr = (a, t) => {
    let e = null;
    return (t && (e = y.translations.warnings.wordByItself), e);
  },
  sr = (a, t) =>
    t
      ? y.translations.warnings.namesByThemselves
      : y.translations.warnings.commonNames,
  or = (a, t) => {
    let e = null;
    const i = a.dictionaryName,
      n = i === "lastnames" || i.toLowerCase().includes("firstnames");
    return (
      i === "passwords"
        ? (e = rr(a, t))
        : i.includes("wikipedia")
          ? (e = nr(a, t))
          : n
            ? (e = sr(a, t))
            : i === "userInputs" && (e = y.translations.warnings.userInputs),
      e
    );
  };
var cr = (a, t) => {
    const e = or(a, t),
      i = [],
      n = a.token;
    return (
      n.match(Qe)
        ? i.push(y.translations.suggestions.capitalization)
        : n.match(Je) &&
          n.toLowerCase() !== n &&
          i.push(y.translations.suggestions.allUppercase),
      a.reversed &&
        a.token.length >= 4 &&
        i.push(y.translations.suggestions.reverseWords),
      a.l33t && i.push(y.translations.suggestions.l33t),
      { warning: e, suggestions: i }
    );
  },
  hr = a =>
    a.regexName === "recentYear"
      ? {
          warning: y.translations.warnings.recentYears,
          suggestions: [
            y.translations.suggestions.recentYears,
            y.translations.suggestions.associatedYears
          ]
        }
      : { warning: null, suggestions: [] },
  lr = a => {
    let t = y.translations.warnings.extendedRepeat;
    return (
      a.baseToken.length === 1 && (t = y.translations.warnings.simpleRepeat),
      { warning: t, suggestions: [y.translations.suggestions.repeated] }
    );
  },
  ur = () => ({
    warning: y.translations.warnings.sequences,
    suggestions: [y.translations.suggestions.sequences]
  }),
  dr = a => {
    let t = y.translations.warnings.keyPattern;
    return (
      a.turns === 1 && (t = y.translations.warnings.straightRow),
      {
        warning: t,
        suggestions: [y.translations.suggestions.longerKeyboardPattern]
      }
    );
  },
  fr = () => null;
const ke = { warning: null, suggestions: [] };
class pr {
  constructor() {
    ((this.matchers = {
      bruteforce: ir,
      date: ar,
      dictionary: cr,
      regex: hr,
      repeat: lr,
      sequence: ur,
      spatial: dr,
      separator: fr
    }),
      (this.defaultFeedback = { warning: null, suggestions: [] }),
      this.setDefaultSuggestions());
  }
  setDefaultSuggestions() {
    this.defaultFeedback.suggestions.push(
      y.translations.suggestions.useWords,
      y.translations.suggestions.noNeed
    );
  }
  getFeedback(t, e) {
    if (e.length === 0) return this.defaultFeedback;
    if (t > 2) return ke;
    const i = y.translations.suggestions.anotherWord,
      n = this.getLongestMatch(e);
    let r = this.getMatchFeedback(n, e.length === 1);
    return (
      r != null
        ? r.suggestions.unshift(i)
        : (r = { warning: null, suggestions: [i] }),
      r
    );
  }
  getLongestMatch(t) {
    let e = t[0];
    return (
      t.slice(1).forEach(n => {
        n.token.length > e.token.length && (e = n);
      }),
      e
    );
  }
  getMatchFeedback(t, e) {
    return this.matchers[t.pattern]
      ? this.matchers[t.pattern](t, e)
      : y.matchers[t.pattern] && "feedback" in y.matchers[t.pattern]
        ? y.matchers[t.pattern].feedback(t, e)
        : ke;
  }
}
const oi = () => new Date().getTime(),
  gr = (a, t, e) => {
    const i = new pr(),
      n = new er(),
      r = te.mostGuessableMatchSequence(t, a),
      s = oi() - e,
      o = n.estimateAttackTimes(r.guesses);
    return at(X(X({ calcTime: s }, r), o), {
      feedback: i.getFeedback(o.score, r.sequence)
    });
  },
  mr = (a, t) => new Ja().match(a),
  vr = (a, t) => {
    const e = oi(),
      i = mr(a);
    if (i instanceof Promise)
      throw new Error(
        "You are using a Promised matcher, please use `zxcvbnAsync` for it."
      );
    return gr(i, a, e);
  };
/*!
 * Cropper.js v1.6.2
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2024-04-21T07:43:05.335Z
 */ function Re(a, t) {
  var e = Object.keys(a);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(a);
    (t &&
      (i = i.filter(function (n) {
        return Object.getOwnPropertyDescriptor(a, n).enumerable;
      })),
      e.push.apply(e, i));
  }
  return e;
}
function ci(a) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Re(Object(e), !0).forEach(function (i) {
          xr(a, i, e[i]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(e))
        : Re(Object(e)).forEach(function (i) {
            Object.defineProperty(a, i, Object.getOwnPropertyDescriptor(e, i));
          });
  }
  return a;
}
function wr(a, t) {
  if (typeof a != "object" || !a) return a;
  var e = a[Symbol.toPrimitive];
  if (e !== void 0) {
    var i = e.call(a, t);
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(a);
}
function hi(a) {
  var t = wr(a, "string");
  return typeof t == "symbol" ? t : t + "";
}
function ee(a) {
  "@babel/helpers - typeof";
  return (
    (ee =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    ee(a)
  );
}
function br(a, t) {
  if (!(a instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Oe(a, t) {
  for (var e = 0; e < t.length; e++) {
    var i = t[e];
    ((i.enumerable = i.enumerable || !1),
      (i.configurable = !0),
      "value" in i && (i.writable = !0),
      Object.defineProperty(a, hi(i.key), i));
  }
}
function yr(a, t, e) {
  return (
    t && Oe(a.prototype, t),
    e && Oe(a, e),
    Object.defineProperty(a, "prototype", { writable: !1 }),
    a
  );
}
function xr(a, t, e) {
  return (
    (t = hi(t)),
    t in a
      ? Object.defineProperty(a, t, {
          value: e,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (a[t] = e),
    a
  );
}
function li(a) {
  return Mr(a) || Dr(a) || Cr(a) || Er();
}
function Mr(a) {
  if (Array.isArray(a)) return ie(a);
}
function Dr(a) {
  if (
    (typeof Symbol != "undefined" && a[Symbol.iterator] != null) ||
    a["@@iterator"] != null
  )
    return Array.from(a);
}
function Cr(a, t) {
  if (a) {
    if (typeof a == "string") return ie(a, t);
    var e = Object.prototype.toString.call(a).slice(8, -1);
    if (
      (e === "Object" && a.constructor && (e = a.constructor.name),
      e === "Map" || e === "Set")
    )
      return Array.from(a);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
      return ie(a, t);
  }
}
function ie(a, t) {
  (t == null || t > a.length) && (t = a.length);
  for (var e = 0, i = new Array(t); e < t; e++) i[e] = a[e];
  return i;
}
function Er() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Wt = typeof window != "undefined" && typeof window.document != "undefined",
  et = Wt ? window : {},
  de =
    Wt && et.document.documentElement
      ? "ontouchstart" in et.document.documentElement
      : !1,
  fe = Wt ? "PointerEvent" in et : !1,
  P = "cropper",
  pe = "all",
  ui = "crop",
  di = "move",
  fi = "zoom",
  ot = "e",
  ct = "w",
  ft = "s",
  rt = "n",
  xt = "ne",
  Mt = "nw",
  Dt = "se",
  Ct = "sw",
  ae = "".concat(P, "-crop"),
  Ie = "".concat(P, "-disabled"),
  F = "".concat(P, "-hidden"),
  Le = "".concat(P, "-hide"),
  Tr = "".concat(P, "-invisible"),
  Ht = "".concat(P, "-modal"),
  re = "".concat(P, "-move"),
  At = "".concat(P, "Action"),
  Bt = "".concat(P, "Preview"),
  ge = "crop",
  pi = "move",
  gi = "none",
  ne = "crop",
  se = "cropend",
  oe = "cropmove",
  ce = "cropstart",
  _e = "dblclick",
  Sr = de ? "touchstart" : "mousedown",
  Ar = de ? "touchmove" : "mousemove",
  kr = de ? "touchend touchcancel" : "mouseup",
  Ne = fe ? "pointerdown" : Sr,
  Pe = fe ? "pointermove" : Ar,
  Be = fe ? "pointerup pointercancel" : kr,
  ze = "ready",
  Ye = "resize",
  je = "wheel",
  he = "zoom",
  He = "image/jpeg",
  Rr = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/,
  Or = /^data:/,
  Ir = /^data:image\/jpeg;base64,/,
  Lr = /^img|canvas$/i,
  mi = 200,
  vi = 100,
  We = {
    viewMode: 0,
    dragMode: ge,
    initialAspectRatio: NaN,
    aspectRatio: NaN,
    data: null,
    preview: "",
    responsive: !0,
    restore: !0,
    checkCrossOrigin: !0,
    checkOrientation: !0,
    modal: !0,
    guides: !0,
    center: !0,
    highlight: !0,
    background: !0,
    autoCrop: !0,
    autoCropArea: 0.8,
    movable: !0,
    rotatable: !0,
    scalable: !0,
    zoomable: !0,
    zoomOnTouch: !0,
    zoomOnWheel: !0,
    wheelZoomRatio: 0.1,
    cropBoxMovable: !0,
    cropBoxResizable: !0,
    toggleDragModeOnDblclick: !0,
    minCanvasWidth: 0,
    minCanvasHeight: 0,
    minCropBoxWidth: 0,
    minCropBoxHeight: 0,
    minContainerWidth: mi,
    minContainerHeight: vi,
    ready: null,
    cropstart: null,
    cropmove: null,
    cropend: null,
    crop: null,
    zoom: null
  },
  _r =
    '<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>',
  Nr = Number.isNaN || et.isNaN;
function E(a) {
  return typeof a == "number" && !Nr(a);
}
var Ue = function (t) {
  return t > 0 && t < 1 / 0;
};
function qt(a) {
  return typeof a == "undefined";
}
function ht(a) {
  return ee(a) === "object" && a !== null;
}
var Pr = Object.prototype.hasOwnProperty;
function pt(a) {
  if (!ht(a)) return !1;
  try {
    var t = a.constructor,
      e = t.prototype;
    return t && e && Pr.call(e, "isPrototypeOf");
  } catch (i) {
    return !1;
  }
}
function G(a) {
  return typeof a == "function";
}
var Br = Array.prototype.slice;
function wi(a) {
  return Array.from ? Array.from(a) : Br.call(a);
}
function H(a, t) {
  return (
    a &&
      G(t) &&
      (Array.isArray(a) || E(a.length)
        ? wi(a).forEach(function (e, i) {
            t.call(a, e, i, a);
          })
        : ht(a) &&
          Object.keys(a).forEach(function (e) {
            t.call(a, a[e], e, a);
          })),
    a
  );
}
var B =
    Object.assign ||
    function (t) {
      for (
        var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), n = 1;
        n < e;
        n++
      )
        i[n - 1] = arguments[n];
      return (
        ht(t) &&
          i.length > 0 &&
          i.forEach(function (r) {
            ht(r) &&
              Object.keys(r).forEach(function (s) {
                t[s] = r[s];
              });
          }),
        t
      );
    },
  zr = /\.\d*(?:0|9){12}\d*$/;
function mt(a) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e11;
  return zr.test(a) ? Math.round(a * t) / t : a;
}
var Yr = /^width|height|left|top|marginLeft|marginTop$/;
function nt(a, t) {
  var e = a.style;
  H(t, function (i, n) {
    (Yr.test(n) && E(i) && (i = "".concat(i, "px")), (e[n] = i));
  });
}
function jr(a, t) {
  return a.classList ? a.classList.contains(t) : a.className.indexOf(t) > -1;
}
function W(a, t) {
  if (t) {
    if (E(a.length)) {
      H(a, function (i) {
        W(i, t);
      });
      return;
    }
    if (a.classList) {
      a.classList.add(t);
      return;
    }
    var e = a.className.trim();
    e
      ? e.indexOf(t) < 0 && (a.className = "".concat(e, " ").concat(t))
      : (a.className = t);
  }
}
function tt(a, t) {
  if (t) {
    if (E(a.length)) {
      H(a, function (e) {
        tt(e, t);
      });
      return;
    }
    if (a.classList) {
      a.classList.remove(t);
      return;
    }
    a.className.indexOf(t) >= 0 && (a.className = a.className.replace(t, ""));
  }
}
function gt(a, t, e) {
  if (t) {
    if (E(a.length)) {
      H(a, function (i) {
        gt(i, t, e);
      });
      return;
    }
    e ? W(a, t) : tt(a, t);
  }
}
var Hr = /([a-z\d])([A-Z])/g;
function me(a) {
  return a.replace(Hr, "$1-$2").toLowerCase();
}
function le(a, t) {
  return ht(a[t])
    ? a[t]
    : a.dataset
      ? a.dataset[t]
      : a.getAttribute("data-".concat(me(t)));
}
function kt(a, t, e) {
  ht(e)
    ? (a[t] = e)
    : a.dataset
      ? (a.dataset[t] = e)
      : a.setAttribute("data-".concat(me(t)), e);
}
function Wr(a, t) {
  if (ht(a[t]))
    try {
      delete a[t];
    } catch (e) {
      a[t] = void 0;
    }
  else if (a.dataset)
    try {
      delete a.dataset[t];
    } catch (e) {
      a.dataset[t] = void 0;
    }
  else a.removeAttribute("data-".concat(me(t)));
}
var bi = /\s\s*/,
  yi = (function () {
    var a = !1;
    if (Wt) {
      var t = !1,
        e = function () {},
        i = Object.defineProperty({}, "once", {
          get: function () {
            return ((a = !0), t);
          },
          set: function (r) {
            t = r;
          }
        });
      (et.addEventListener("test", e, i), et.removeEventListener("test", e, i));
    }
    return a;
  })();
function J(a, t, e) {
  var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
    n = e;
  t.trim()
    .split(bi)
    .forEach(function (r) {
      if (!yi) {
        var s = a.listeners;
        s &&
          s[r] &&
          s[r][e] &&
          ((n = s[r][e]),
          delete s[r][e],
          Object.keys(s[r]).length === 0 && delete s[r],
          Object.keys(s).length === 0 && delete a.listeners);
      }
      a.removeEventListener(r, n, i);
    });
}
function K(a, t, e) {
  var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
    n = e;
  t.trim()
    .split(bi)
    .forEach(function (r) {
      if (i.once && !yi) {
        var s = a.listeners,
          o = s === void 0 ? {} : s;
        ((n = function () {
          (delete o[r][e], a.removeEventListener(r, n, i));
          for (var h = arguments.length, l = new Array(h), u = 0; u < h; u++)
            l[u] = arguments[u];
          e.apply(a, l);
        }),
          o[r] || (o[r] = {}),
          o[r][e] && a.removeEventListener(r, o[r][e], i),
          (o[r][e] = n),
          (a.listeners = o));
      }
      a.addEventListener(r, n, i);
    });
}
function vt(a, t, e) {
  var i;
  return (
    G(Event) && G(CustomEvent)
      ? (i = new CustomEvent(t, { detail: e, bubbles: !0, cancelable: !0 }))
      : ((i = document.createEvent("CustomEvent")),
        i.initCustomEvent(t, !0, !0, e)),
    a.dispatchEvent(i)
  );
}
function xi(a) {
  var t = a.getBoundingClientRect();
  return {
    left: t.left + (window.pageXOffset - document.documentElement.clientLeft),
    top: t.top + (window.pageYOffset - document.documentElement.clientTop)
  };
}
var Zt = et.location,
  Ur = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;
function $e(a) {
  var t = a.match(Ur);
  return (
    t !== null &&
    (t[1] !== Zt.protocol || t[2] !== Zt.hostname || t[3] !== Zt.port)
  );
}
function Ve(a) {
  var t = "timestamp=".concat(new Date().getTime());
  return a + (a.indexOf("?") === -1 ? "?" : "&") + t;
}
function Tt(a) {
  var t = a.rotate,
    e = a.scaleX,
    i = a.scaleY,
    n = a.translateX,
    r = a.translateY,
    s = [];
  (E(n) && n !== 0 && s.push("translateX(".concat(n, "px)")),
    E(r) && r !== 0 && s.push("translateY(".concat(r, "px)")),
    E(t) && t !== 0 && s.push("rotate(".concat(t, "deg)")),
    E(e) && e !== 1 && s.push("scaleX(".concat(e, ")")),
    E(i) && i !== 1 && s.push("scaleY(".concat(i, ")")));
  var o = s.length ? s.join(" ") : "none";
  return { WebkitTransform: o, msTransform: o, transform: o };
}
function $r(a) {
  var t = ci({}, a),
    e = 0;
  return (
    H(a, function (i, n) {
      (delete t[n],
        H(t, function (r) {
          var s = Math.abs(i.startX - r.startX),
            o = Math.abs(i.startY - r.startY),
            c = Math.abs(i.endX - r.endX),
            h = Math.abs(i.endY - r.endY),
            l = Math.sqrt(s * s + o * o),
            u = Math.sqrt(c * c + h * h),
            d = (u - l) / l;
          Math.abs(d) > Math.abs(e) && (e = d);
        }));
    }),
    e
  );
}
function zt(a, t) {
  var e = a.pageX,
    i = a.pageY,
    n = { endX: e, endY: i };
  return t ? n : ci({ startX: e, startY: i }, n);
}
function Vr(a) {
  var t = 0,
    e = 0,
    i = 0;
  return (
    H(a, function (n) {
      var r = n.startX,
        s = n.startY;
      ((t += r), (e += s), (i += 1));
    }),
    (t /= i),
    (e /= i),
    { pageX: t, pageY: e }
  );
}
function st(a) {
  var t = a.aspectRatio,
    e = a.height,
    i = a.width,
    n =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : "contain",
    r = Ue(i),
    s = Ue(e);
  if (r && s) {
    var o = e * t;
    (n === "contain" && o > i) || (n === "cover" && o < i)
      ? (e = i / t)
      : (i = e * t);
  } else r ? (e = i / t) : s && (i = e * t);
  return { width: i, height: e };
}
function Xr(a) {
  var t = a.width,
    e = a.height,
    i = a.degree;
  if (((i = Math.abs(i) % 180), i === 90)) return { width: e, height: t };
  var n = ((i % 90) * Math.PI) / 180,
    r = Math.sin(n),
    s = Math.cos(n),
    o = t * s + e * r,
    c = t * r + e * s;
  return i > 90 ? { width: c, height: o } : { width: o, height: c };
}
function Gr(a, t, e, i) {
  var n = t.aspectRatio,
    r = t.naturalWidth,
    s = t.naturalHeight,
    o = t.rotate,
    c = o === void 0 ? 0 : o,
    h = t.scaleX,
    l = h === void 0 ? 1 : h,
    u = t.scaleY,
    d = u === void 0 ? 1 : u,
    g = e.aspectRatio,
    p = e.naturalWidth,
    b = e.naturalHeight,
    v = i.fillColor,
    C = v === void 0 ? "transparent" : v,
    w = i.imageSmoothingEnabled,
    M = w === void 0 ? !0 : w,
    _ = i.imageSmoothingQuality,
    O = _ === void 0 ? "low" : _,
    f = i.maxWidth,
    D = f === void 0 ? 1 / 0 : f,
    R = i.maxHeight,
    I = R === void 0 ? 1 / 0 : R,
    T = i.minWidth,
    S = T === void 0 ? 0 : T,
    A = i.minHeight,
    N = A === void 0 ? 0 : A,
    L = document.createElement("canvas"),
    m = L.getContext("2d"),
    x = st({ aspectRatio: g, width: D, height: I }),
    q = st({ aspectRatio: g, width: S, height: N }, "cover"),
    Q = Math.min(x.width, Math.max(q.width, p)),
    ut = Math.min(x.height, Math.max(q.height, b)),
    bt = st({ aspectRatio: n, width: D, height: I }),
    Rt = st({ aspectRatio: n, width: S, height: N }, "cover"),
    Ot = Math.min(bt.width, Math.max(Rt.width, r)),
    It = Math.min(bt.height, Math.max(Rt.height, s)),
    Ut = [-Ot / 2, -It / 2, Ot, It];
  return (
    (L.width = mt(Q)),
    (L.height = mt(ut)),
    (m.fillStyle = C),
    m.fillRect(0, 0, Q, ut),
    m.save(),
    m.translate(Q / 2, ut / 2),
    m.rotate((c * Math.PI) / 180),
    m.scale(l, d),
    (m.imageSmoothingEnabled = M),
    (m.imageSmoothingQuality = O),
    m.drawImage.apply(
      m,
      [a].concat(
        li(
          Ut.map(function (Lt) {
            return Math.floor(mt(Lt));
          })
        )
      )
    ),
    m.restore(),
    L
  );
}
var Mi = String.fromCharCode;
function Fr(a, t, e) {
  var i = "";
  e += t;
  for (var n = t; n < e; n += 1) i += Mi(a.getUint8(n));
  return i;
}
var qr = /^data:.*,/;
function Zr(a) {
  var t = a.replace(qr, ""),
    e = atob(t),
    i = new ArrayBuffer(e.length),
    n = new Uint8Array(i);
  return (
    H(n, function (r, s) {
      n[s] = e.charCodeAt(s);
    }),
    i
  );
}
function Kr(a, t) {
  for (var e = [], i = 8192, n = new Uint8Array(a); n.length > 0; )
    (e.push(Mi.apply(null, wi(n.subarray(0, i)))), (n = n.subarray(i)));
  return "data:".concat(t, ";base64,").concat(btoa(e.join("")));
}
function Qr(a) {
  var t = new DataView(a),
    e;
  try {
    var i, n, r;
    if (t.getUint8(0) === 255 && t.getUint8(1) === 216)
      for (var s = t.byteLength, o = 2; o + 1 < s; ) {
        if (t.getUint8(o) === 255 && t.getUint8(o + 1) === 225) {
          n = o;
          break;
        }
        o += 1;
      }
    if (n) {
      var c = n + 4,
        h = n + 10;
      if (Fr(t, c, 4) === "Exif") {
        var l = t.getUint16(h);
        if (
          ((i = l === 18761),
          (i || l === 19789) && t.getUint16(h + 2, i) === 42)
        ) {
          var u = t.getUint32(h + 4, i);
          u >= 8 && (r = h + u);
        }
      }
    }
    if (r) {
      var d = t.getUint16(r, i),
        g,
        p;
      for (p = 0; p < d; p += 1)
        if (((g = r + p * 12 + 2), t.getUint16(g, i) === 274)) {
          ((g += 8), (e = t.getUint16(g, i)), t.setUint16(g, 1, i));
          break;
        }
    }
  } catch (b) {
    e = 1;
  }
  return e;
}
function Jr(a) {
  var t = 0,
    e = 1,
    i = 1;
  switch (a) {
    case 2:
      e = -1;
      break;
    case 3:
      t = -180;
      break;
    case 4:
      i = -1;
      break;
    case 5:
      ((t = 90), (i = -1));
      break;
    case 6:
      t = 90;
      break;
    case 7:
      ((t = 90), (e = -1));
      break;
    case 8:
      t = -90;
      break;
  }
  return { rotate: t, scaleX: e, scaleY: i };
}
var tn = {
    render: function () {
      (this.initContainer(),
        this.initCanvas(),
        this.initCropBox(),
        this.renderCanvas(),
        this.cropped && this.renderCropBox());
    },
    initContainer: function () {
      var t = this.element,
        e = this.options,
        i = this.container,
        n = this.cropper,
        r = Number(e.minContainerWidth),
        s = Number(e.minContainerHeight);
      (W(n, F), tt(t, F));
      var o = {
        width: Math.max(i.offsetWidth, r >= 0 ? r : mi),
        height: Math.max(i.offsetHeight, s >= 0 ? s : vi)
      };
      ((this.containerData = o),
        nt(n, { width: o.width, height: o.height }),
        W(t, F),
        tt(n, F));
    },
    initCanvas: function () {
      var t = this.containerData,
        e = this.imageData,
        i = this.options.viewMode,
        n = Math.abs(e.rotate) % 180 === 90,
        r = n ? e.naturalHeight : e.naturalWidth,
        s = n ? e.naturalWidth : e.naturalHeight,
        o = r / s,
        c = t.width,
        h = t.height;
      t.height * o > t.width
        ? i === 3
          ? (c = t.height * o)
          : (h = t.width / o)
        : i === 3
          ? (h = t.width / o)
          : (c = t.height * o);
      var l = {
        aspectRatio: o,
        naturalWidth: r,
        naturalHeight: s,
        width: c,
        height: h
      };
      ((this.canvasData = l),
        (this.limited = i === 1 || i === 2),
        this.limitCanvas(!0, !0),
        (l.width = Math.min(Math.max(l.width, l.minWidth), l.maxWidth)),
        (l.height = Math.min(Math.max(l.height, l.minHeight), l.maxHeight)),
        (l.left = (t.width - l.width) / 2),
        (l.top = (t.height - l.height) / 2),
        (l.oldLeft = l.left),
        (l.oldTop = l.top),
        (this.initialCanvasData = B({}, l)));
    },
    limitCanvas: function (t, e) {
      var i = this.options,
        n = this.containerData,
        r = this.canvasData,
        s = this.cropBoxData,
        o = i.viewMode,
        c = r.aspectRatio,
        h = this.cropped && s;
      if (t) {
        var l = Number(i.minCanvasWidth) || 0,
          u = Number(i.minCanvasHeight) || 0;
        o > 1
          ? ((l = Math.max(l, n.width)),
            (u = Math.max(u, n.height)),
            o === 3 && (u * c > l ? (l = u * c) : (u = l / c)))
          : o > 0 &&
            (l
              ? (l = Math.max(l, h ? s.width : 0))
              : u
                ? (u = Math.max(u, h ? s.height : 0))
                : h &&
                  ((l = s.width),
                  (u = s.height),
                  u * c > l ? (l = u * c) : (u = l / c)));
        var d = st({ aspectRatio: c, width: l, height: u });
        ((l = d.width),
          (u = d.height),
          (r.minWidth = l),
          (r.minHeight = u),
          (r.maxWidth = 1 / 0),
          (r.maxHeight = 1 / 0));
      }
      if (e)
        if (o > (h ? 0 : 1)) {
          var g = n.width - r.width,
            p = n.height - r.height;
          ((r.minLeft = Math.min(0, g)),
            (r.minTop = Math.min(0, p)),
            (r.maxLeft = Math.max(0, g)),
            (r.maxTop = Math.max(0, p)),
            h &&
              this.limited &&
              ((r.minLeft = Math.min(s.left, s.left + (s.width - r.width))),
              (r.minTop = Math.min(s.top, s.top + (s.height - r.height))),
              (r.maxLeft = s.left),
              (r.maxTop = s.top),
              o === 2 &&
                (r.width >= n.width &&
                  ((r.minLeft = Math.min(0, g)), (r.maxLeft = Math.max(0, g))),
                r.height >= n.height &&
                  ((r.minTop = Math.min(0, p)), (r.maxTop = Math.max(0, p))))));
        } else
          ((r.minLeft = -r.width),
            (r.minTop = -r.height),
            (r.maxLeft = n.width),
            (r.maxTop = n.height));
    },
    renderCanvas: function (t, e) {
      var i = this.canvasData,
        n = this.imageData;
      if (e) {
        var r = Xr({
            width: n.naturalWidth * Math.abs(n.scaleX || 1),
            height: n.naturalHeight * Math.abs(n.scaleY || 1),
            degree: n.rotate || 0
          }),
          s = r.width,
          o = r.height,
          c = i.width * (s / i.naturalWidth),
          h = i.height * (o / i.naturalHeight);
        ((i.left -= (c - i.width) / 2),
          (i.top -= (h - i.height) / 2),
          (i.width = c),
          (i.height = h),
          (i.aspectRatio = s / o),
          (i.naturalWidth = s),
          (i.naturalHeight = o),
          this.limitCanvas(!0, !1));
      }
      ((i.width > i.maxWidth || i.width < i.minWidth) && (i.left = i.oldLeft),
        (i.height > i.maxHeight || i.height < i.minHeight) &&
          (i.top = i.oldTop),
        (i.width = Math.min(Math.max(i.width, i.minWidth), i.maxWidth)),
        (i.height = Math.min(Math.max(i.height, i.minHeight), i.maxHeight)),
        this.limitCanvas(!1, !0),
        (i.left = Math.min(Math.max(i.left, i.minLeft), i.maxLeft)),
        (i.top = Math.min(Math.max(i.top, i.minTop), i.maxTop)),
        (i.oldLeft = i.left),
        (i.oldTop = i.top),
        nt(
          this.canvas,
          B(
            { width: i.width, height: i.height },
            Tt({ translateX: i.left, translateY: i.top })
          )
        ),
        this.renderImage(t),
        this.cropped && this.limited && this.limitCropBox(!0, !0));
    },
    renderImage: function (t) {
      var e = this.canvasData,
        i = this.imageData,
        n = i.naturalWidth * (e.width / e.naturalWidth),
        r = i.naturalHeight * (e.height / e.naturalHeight);
      (B(i, {
        width: n,
        height: r,
        left: (e.width - n) / 2,
        top: (e.height - r) / 2
      }),
        nt(
          this.image,
          B(
            { width: i.width, height: i.height },
            Tt(B({ translateX: i.left, translateY: i.top }, i))
          )
        ),
        t && this.output());
    },
    initCropBox: function () {
      var t = this.options,
        e = this.canvasData,
        i = t.aspectRatio || t.initialAspectRatio,
        n = Number(t.autoCropArea) || 0.8,
        r = { width: e.width, height: e.height };
      (i &&
        (e.height * i > e.width
          ? (r.height = r.width / i)
          : (r.width = r.height * i)),
        (this.cropBoxData = r),
        this.limitCropBox(!0, !0),
        (r.width = Math.min(Math.max(r.width, r.minWidth), r.maxWidth)),
        (r.height = Math.min(Math.max(r.height, r.minHeight), r.maxHeight)),
        (r.width = Math.max(r.minWidth, r.width * n)),
        (r.height = Math.max(r.minHeight, r.height * n)),
        (r.left = e.left + (e.width - r.width) / 2),
        (r.top = e.top + (e.height - r.height) / 2),
        (r.oldLeft = r.left),
        (r.oldTop = r.top),
        (this.initialCropBoxData = B({}, r)));
    },
    limitCropBox: function (t, e) {
      var i = this.options,
        n = this.containerData,
        r = this.canvasData,
        s = this.cropBoxData,
        o = this.limited,
        c = i.aspectRatio;
      if (t) {
        var h = Number(i.minCropBoxWidth) || 0,
          l = Number(i.minCropBoxHeight) || 0,
          u = o
            ? Math.min(n.width, r.width, r.width + r.left, n.width - r.left)
            : n.width,
          d = o
            ? Math.min(n.height, r.height, r.height + r.top, n.height - r.top)
            : n.height;
        ((h = Math.min(h, n.width)),
          (l = Math.min(l, n.height)),
          c &&
            (h && l
              ? l * c > h
                ? (l = h / c)
                : (h = l * c)
              : h
                ? (l = h / c)
                : l && (h = l * c),
            d * c > u ? (d = u / c) : (u = d * c)),
          (s.minWidth = Math.min(h, u)),
          (s.minHeight = Math.min(l, d)),
          (s.maxWidth = u),
          (s.maxHeight = d));
      }
      e &&
        (o
          ? ((s.minLeft = Math.max(0, r.left)),
            (s.minTop = Math.max(0, r.top)),
            (s.maxLeft = Math.min(n.width, r.left + r.width) - s.width),
            (s.maxTop = Math.min(n.height, r.top + r.height) - s.height))
          : ((s.minLeft = 0),
            (s.minTop = 0),
            (s.maxLeft = n.width - s.width),
            (s.maxTop = n.height - s.height)));
    },
    renderCropBox: function () {
      var t = this.options,
        e = this.containerData,
        i = this.cropBoxData;
      ((i.width > i.maxWidth || i.width < i.minWidth) && (i.left = i.oldLeft),
        (i.height > i.maxHeight || i.height < i.minHeight) &&
          (i.top = i.oldTop),
        (i.width = Math.min(Math.max(i.width, i.minWidth), i.maxWidth)),
        (i.height = Math.min(Math.max(i.height, i.minHeight), i.maxHeight)),
        this.limitCropBox(!1, !0),
        (i.left = Math.min(Math.max(i.left, i.minLeft), i.maxLeft)),
        (i.top = Math.min(Math.max(i.top, i.minTop), i.maxTop)),
        (i.oldLeft = i.left),
        (i.oldTop = i.top),
        t.movable &&
          t.cropBoxMovable &&
          kt(
            this.face,
            At,
            i.width >= e.width && i.height >= e.height ? di : pe
          ),
        nt(
          this.cropBox,
          B(
            { width: i.width, height: i.height },
            Tt({ translateX: i.left, translateY: i.top })
          )
        ),
        this.cropped && this.limited && this.limitCanvas(!0, !0),
        this.disabled || this.output());
    },
    output: function () {
      (this.preview(), vt(this.element, ne, this.getData()));
    }
  },
  en = {
    initPreview: function () {
      var t = this.element,
        e = this.crossOrigin,
        i = this.options.preview,
        n = e ? this.crossOriginUrl : this.url,
        r = t.alt || "The image to preview",
        s = document.createElement("img");
      if (
        (e && (s.crossOrigin = e),
        (s.src = n),
        (s.alt = r),
        this.viewBox.appendChild(s),
        (this.viewBoxImage = s),
        !!i)
      ) {
        var o = i;
        (typeof i == "string"
          ? (o = t.ownerDocument.querySelectorAll(i))
          : i.querySelector && (o = [i]),
          (this.previews = o),
          H(o, function (c) {
            var h = document.createElement("img");
            (kt(c, Bt, {
              width: c.offsetWidth,
              height: c.offsetHeight,
              html: c.innerHTML
            }),
              e && (h.crossOrigin = e),
              (h.src = n),
              (h.alt = r),
              (h.style.cssText =
                'display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"'),
              (c.innerHTML = ""),
              c.appendChild(h));
          }));
      }
    },
    resetPreview: function () {
      H(this.previews, function (t) {
        var e = le(t, Bt);
        (nt(t, { width: e.width, height: e.height }),
          (t.innerHTML = e.html),
          Wr(t, Bt));
      });
    },
    preview: function () {
      var t = this.imageData,
        e = this.canvasData,
        i = this.cropBoxData,
        n = i.width,
        r = i.height,
        s = t.width,
        o = t.height,
        c = i.left - e.left - t.left,
        h = i.top - e.top - t.top;
      !this.cropped ||
        this.disabled ||
        (nt(
          this.viewBoxImage,
          B(
            { width: s, height: o },
            Tt(B({ translateX: -c, translateY: -h }, t))
          )
        ),
        H(this.previews, function (l) {
          var u = le(l, Bt),
            d = u.width,
            g = u.height,
            p = d,
            b = g,
            v = 1;
          (n && ((v = d / n), (b = r * v)),
            r && b > g && ((v = g / r), (p = n * v), (b = g)),
            nt(l, { width: p, height: b }),
            nt(
              l.getElementsByTagName("img")[0],
              B(
                { width: s * v, height: o * v },
                Tt(B({ translateX: -c * v, translateY: -h * v }, t))
              )
            ));
        }));
    }
  },
  an = {
    bind: function () {
      var t = this.element,
        e = this.options,
        i = this.cropper;
      (G(e.cropstart) && K(t, ce, e.cropstart),
        G(e.cropmove) && K(t, oe, e.cropmove),
        G(e.cropend) && K(t, se, e.cropend),
        G(e.crop) && K(t, ne, e.crop),
        G(e.zoom) && K(t, he, e.zoom),
        K(i, Ne, (this.onCropStart = this.cropStart.bind(this))),
        e.zoomable &&
          e.zoomOnWheel &&
          K(i, je, (this.onWheel = this.wheel.bind(this)), {
            passive: !1,
            capture: !0
          }),
        e.toggleDragModeOnDblclick &&
          K(i, _e, (this.onDblclick = this.dblclick.bind(this))),
        K(t.ownerDocument, Pe, (this.onCropMove = this.cropMove.bind(this))),
        K(t.ownerDocument, Be, (this.onCropEnd = this.cropEnd.bind(this))),
        e.responsive &&
          K(window, Ye, (this.onResize = this.resize.bind(this))));
    },
    unbind: function () {
      var t = this.element,
        e = this.options,
        i = this.cropper;
      (G(e.cropstart) && J(t, ce, e.cropstart),
        G(e.cropmove) && J(t, oe, e.cropmove),
        G(e.cropend) && J(t, se, e.cropend),
        G(e.crop) && J(t, ne, e.crop),
        G(e.zoom) && J(t, he, e.zoom),
        J(i, Ne, this.onCropStart),
        e.zoomable &&
          e.zoomOnWheel &&
          J(i, je, this.onWheel, { passive: !1, capture: !0 }),
        e.toggleDragModeOnDblclick && J(i, _e, this.onDblclick),
        J(t.ownerDocument, Pe, this.onCropMove),
        J(t.ownerDocument, Be, this.onCropEnd),
        e.responsive && J(window, Ye, this.onResize));
    }
  },
  rn = {
    resize: function () {
      if (!this.disabled) {
        var t = this.options,
          e = this.container,
          i = this.containerData,
          n = e.offsetWidth / i.width,
          r = e.offsetHeight / i.height,
          s = Math.abs(n - 1) > Math.abs(r - 1) ? n : r;
        if (s !== 1) {
          var o, c;
          (t.restore &&
            ((o = this.getCanvasData()), (c = this.getCropBoxData())),
            this.render(),
            t.restore &&
              (this.setCanvasData(
                H(o, function (h, l) {
                  o[l] = h * s;
                })
              ),
              this.setCropBoxData(
                H(c, function (h, l) {
                  c[l] = h * s;
                })
              )));
        }
      }
    },
    dblclick: function () {
      this.disabled ||
        this.options.dragMode === gi ||
        this.setDragMode(jr(this.dragBox, ae) ? pi : ge);
    },
    wheel: function (t) {
      var e = this,
        i = Number(this.options.wheelZoomRatio) || 0.1,
        n = 1;
      this.disabled ||
        (t.preventDefault(),
        !this.wheeling &&
          ((this.wheeling = !0),
          setTimeout(function () {
            e.wheeling = !1;
          }, 50),
          t.deltaY
            ? (n = t.deltaY > 0 ? 1 : -1)
            : t.wheelDelta
              ? (n = -t.wheelDelta / 120)
              : t.detail && (n = t.detail > 0 ? 1 : -1),
          this.zoom(-n * i, t)));
    },
    cropStart: function (t) {
      var e = t.buttons,
        i = t.button;
      if (
        !(
          this.disabled ||
          ((t.type === "mousedown" ||
            (t.type === "pointerdown" && t.pointerType === "mouse")) &&
            ((E(e) && e !== 1) || (E(i) && i !== 0) || t.ctrlKey))
        )
      ) {
        var n = this.options,
          r = this.pointers,
          s;
        (t.changedTouches
          ? H(t.changedTouches, function (o) {
              r[o.identifier] = zt(o);
            })
          : (r[t.pointerId || 0] = zt(t)),
          Object.keys(r).length > 1 && n.zoomable && n.zoomOnTouch
            ? (s = fi)
            : (s = le(t.target, At)),
          Rr.test(s) &&
            vt(this.element, ce, { originalEvent: t, action: s }) !== !1 &&
            (t.preventDefault(),
            (this.action = s),
            (this.cropping = !1),
            s === ui && ((this.cropping = !0), W(this.dragBox, Ht))));
      }
    },
    cropMove: function (t) {
      var e = this.action;
      if (!(this.disabled || !e)) {
        var i = this.pointers;
        (t.preventDefault(),
          vt(this.element, oe, { originalEvent: t, action: e }) !== !1 &&
            (t.changedTouches
              ? H(t.changedTouches, function (n) {
                  B(i[n.identifier] || {}, zt(n, !0));
                })
              : B(i[t.pointerId || 0] || {}, zt(t, !0)),
            this.change(t)));
      }
    },
    cropEnd: function (t) {
      if (!this.disabled) {
        var e = this.action,
          i = this.pointers;
        (t.changedTouches
          ? H(t.changedTouches, function (n) {
              delete i[n.identifier];
            })
          : delete i[t.pointerId || 0],
          e &&
            (t.preventDefault(),
            Object.keys(i).length || (this.action = ""),
            this.cropping &&
              ((this.cropping = !1),
              gt(this.dragBox, Ht, this.cropped && this.options.modal)),
            vt(this.element, se, { originalEvent: t, action: e })));
      }
    }
  },
  nn = {
    change: function (t) {
      var e = this.options,
        i = this.canvasData,
        n = this.containerData,
        r = this.cropBoxData,
        s = this.pointers,
        o = this.action,
        c = e.aspectRatio,
        h = r.left,
        l = r.top,
        u = r.width,
        d = r.height,
        g = h + u,
        p = l + d,
        b = 0,
        v = 0,
        C = n.width,
        w = n.height,
        M = !0,
        _;
      (!c && t.shiftKey && (c = u && d ? u / d : 1),
        this.limited &&
          ((b = r.minLeft),
          (v = r.minTop),
          (C = b + Math.min(n.width, i.width, i.left + i.width)),
          (w = v + Math.min(n.height, i.height, i.top + i.height))));
      var O = s[Object.keys(s)[0]],
        f = { x: O.endX - O.startX, y: O.endY - O.startY },
        D = function (I) {
          switch (I) {
            case ot:
              g + f.x > C && (f.x = C - g);
              break;
            case ct:
              h + f.x < b && (f.x = b - h);
              break;
            case rt:
              l + f.y < v && (f.y = v - l);
              break;
            case ft:
              p + f.y > w && (f.y = w - p);
              break;
          }
        };
      switch (o) {
        case pe:
          ((h += f.x), (l += f.y));
          break;
        case ot:
          if (f.x >= 0 && (g >= C || (c && (l <= v || p >= w)))) {
            M = !1;
            break;
          }
          (D(ot),
            (u += f.x),
            u < 0 && ((o = ct), (u = -u), (h -= u)),
            c && ((d = u / c), (l += (r.height - d) / 2)));
          break;
        case rt:
          if (f.y <= 0 && (l <= v || (c && (h <= b || g >= C)))) {
            M = !1;
            break;
          }
          (D(rt),
            (d -= f.y),
            (l += f.y),
            d < 0 && ((o = ft), (d = -d), (l -= d)),
            c && ((u = d * c), (h += (r.width - u) / 2)));
          break;
        case ct:
          if (f.x <= 0 && (h <= b || (c && (l <= v || p >= w)))) {
            M = !1;
            break;
          }
          (D(ct),
            (u -= f.x),
            (h += f.x),
            u < 0 && ((o = ot), (u = -u), (h -= u)),
            c && ((d = u / c), (l += (r.height - d) / 2)));
          break;
        case ft:
          if (f.y >= 0 && (p >= w || (c && (h <= b || g >= C)))) {
            M = !1;
            break;
          }
          (D(ft),
            (d += f.y),
            d < 0 && ((o = rt), (d = -d), (l -= d)),
            c && ((u = d * c), (h += (r.width - u) / 2)));
          break;
        case xt:
          if (c) {
            if (f.y <= 0 && (l <= v || g >= C)) {
              M = !1;
              break;
            }
            (D(rt), (d -= f.y), (l += f.y), (u = d * c));
          } else
            (D(rt),
              D(ot),
              f.x >= 0
                ? g < C
                  ? (u += f.x)
                  : f.y <= 0 && l <= v && (M = !1)
                : (u += f.x),
              f.y <= 0
                ? l > v && ((d -= f.y), (l += f.y))
                : ((d -= f.y), (l += f.y)));
          u < 0 && d < 0
            ? ((o = Ct), (d = -d), (u = -u), (l -= d), (h -= u))
            : u < 0
              ? ((o = Mt), (u = -u), (h -= u))
              : d < 0 && ((o = Dt), (d = -d), (l -= d));
          break;
        case Mt:
          if (c) {
            if (f.y <= 0 && (l <= v || h <= b)) {
              M = !1;
              break;
            }
            (D(rt), (d -= f.y), (l += f.y), (u = d * c), (h += r.width - u));
          } else
            (D(rt),
              D(ct),
              f.x <= 0
                ? h > b
                  ? ((u -= f.x), (h += f.x))
                  : f.y <= 0 && l <= v && (M = !1)
                : ((u -= f.x), (h += f.x)),
              f.y <= 0
                ? l > v && ((d -= f.y), (l += f.y))
                : ((d -= f.y), (l += f.y)));
          u < 0 && d < 0
            ? ((o = Dt), (d = -d), (u = -u), (l -= d), (h -= u))
            : u < 0
              ? ((o = xt), (u = -u), (h -= u))
              : d < 0 && ((o = Ct), (d = -d), (l -= d));
          break;
        case Ct:
          if (c) {
            if (f.x <= 0 && (h <= b || p >= w)) {
              M = !1;
              break;
            }
            (D(ct), (u -= f.x), (h += f.x), (d = u / c));
          } else
            (D(ft),
              D(ct),
              f.x <= 0
                ? h > b
                  ? ((u -= f.x), (h += f.x))
                  : f.y >= 0 && p >= w && (M = !1)
                : ((u -= f.x), (h += f.x)),
              f.y >= 0 ? p < w && (d += f.y) : (d += f.y));
          u < 0 && d < 0
            ? ((o = xt), (d = -d), (u = -u), (l -= d), (h -= u))
            : u < 0
              ? ((o = Dt), (u = -u), (h -= u))
              : d < 0 && ((o = Mt), (d = -d), (l -= d));
          break;
        case Dt:
          if (c) {
            if (f.x >= 0 && (g >= C || p >= w)) {
              M = !1;
              break;
            }
            (D(ot), (u += f.x), (d = u / c));
          } else
            (D(ft),
              D(ot),
              f.x >= 0
                ? g < C
                  ? (u += f.x)
                  : f.y >= 0 && p >= w && (M = !1)
                : (u += f.x),
              f.y >= 0 ? p < w && (d += f.y) : (d += f.y));
          u < 0 && d < 0
            ? ((o = Mt), (d = -d), (u = -u), (l -= d), (h -= u))
            : u < 0
              ? ((o = Ct), (u = -u), (h -= u))
              : d < 0 && ((o = xt), (d = -d), (l -= d));
          break;
        case di:
          (this.move(f.x, f.y), (M = !1));
          break;
        case fi:
          (this.zoom($r(s), t), (M = !1));
          break;
        case ui:
          if (!f.x || !f.y) {
            M = !1;
            break;
          }
          ((_ = xi(this.cropper)),
            (h = O.startX - _.left),
            (l = O.startY - _.top),
            (u = r.minWidth),
            (d = r.minHeight),
            f.x > 0
              ? (o = f.y > 0 ? Dt : xt)
              : f.x < 0 && ((h -= u), (o = f.y > 0 ? Ct : Mt)),
            f.y < 0 && (l -= d),
            this.cropped ||
              (tt(this.cropBox, F),
              (this.cropped = !0),
              this.limited && this.limitCropBox(!0, !0)));
          break;
      }
      (M &&
        ((r.width = u),
        (r.height = d),
        (r.left = h),
        (r.top = l),
        (this.action = o),
        this.renderCropBox()),
        H(s, function (R) {
          ((R.startX = R.endX), (R.startY = R.endY));
        }));
    }
  },
  sn = {
    crop: function () {
      return (
        this.ready &&
          !this.cropped &&
          !this.disabled &&
          ((this.cropped = !0),
          this.limitCropBox(!0, !0),
          this.options.modal && W(this.dragBox, Ht),
          tt(this.cropBox, F),
          this.setCropBoxData(this.initialCropBoxData)),
        this
      );
    },
    reset: function () {
      return (
        this.ready &&
          !this.disabled &&
          ((this.imageData = B({}, this.initialImageData)),
          (this.canvasData = B({}, this.initialCanvasData)),
          (this.cropBoxData = B({}, this.initialCropBoxData)),
          this.renderCanvas(),
          this.cropped && this.renderCropBox()),
        this
      );
    },
    clear: function () {
      return (
        this.cropped &&
          !this.disabled &&
          (B(this.cropBoxData, { left: 0, top: 0, width: 0, height: 0 }),
          (this.cropped = !1),
          this.renderCropBox(),
          this.limitCanvas(!0, !0),
          this.renderCanvas(),
          tt(this.dragBox, Ht),
          W(this.cropBox, F)),
        this
      );
    },
    replace: function (t) {
      var e =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      return (
        !this.disabled &&
          t &&
          (this.isImg && (this.element.src = t),
          e
            ? ((this.url = t),
              (this.image.src = t),
              this.ready &&
                ((this.viewBoxImage.src = t),
                H(this.previews, function (i) {
                  i.getElementsByTagName("img")[0].src = t;
                })))
            : (this.isImg && (this.replaced = !0),
              (this.options.data = null),
              this.uncreate(),
              this.load(t))),
        this
      );
    },
    enable: function () {
      return (
        this.ready &&
          this.disabled &&
          ((this.disabled = !1), tt(this.cropper, Ie)),
        this
      );
    },
    disable: function () {
      return (
        this.ready &&
          !this.disabled &&
          ((this.disabled = !0), W(this.cropper, Ie)),
        this
      );
    },
    destroy: function () {
      var t = this.element;
      return t[P]
        ? ((t[P] = void 0),
          this.isImg && this.replaced && (t.src = this.originalUrl),
          this.uncreate(),
          this)
        : this;
    },
    move: function (t) {
      var e =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t,
        i = this.canvasData,
        n = i.left,
        r = i.top;
      return this.moveTo(qt(t) ? t : n + Number(t), qt(e) ? e : r + Number(e));
    },
    moveTo: function (t) {
      var e =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t,
        i = this.canvasData,
        n = !1;
      return (
        (t = Number(t)),
        (e = Number(e)),
        this.ready &&
          !this.disabled &&
          this.options.movable &&
          (E(t) && ((i.left = t), (n = !0)),
          E(e) && ((i.top = e), (n = !0)),
          n && this.renderCanvas(!0)),
        this
      );
    },
    zoom: function (t, e) {
      var i = this.canvasData;
      return (
        (t = Number(t)),
        t < 0 ? (t = 1 / (1 - t)) : (t = 1 + t),
        this.zoomTo((i.width * t) / i.naturalWidth, null, e)
      );
    },
    zoomTo: function (t, e, i) {
      var n = this.options,
        r = this.canvasData,
        s = r.width,
        o = r.height,
        c = r.naturalWidth,
        h = r.naturalHeight;
      if (
        ((t = Number(t)), t >= 0 && this.ready && !this.disabled && n.zoomable)
      ) {
        var l = c * t,
          u = h * t;
        if (
          vt(this.element, he, {
            ratio: t,
            oldRatio: s / c,
            originalEvent: i
          }) === !1
        )
          return this;
        if (i) {
          var d = this.pointers,
            g = xi(this.cropper),
            p =
              d && Object.keys(d).length
                ? Vr(d)
                : { pageX: i.pageX, pageY: i.pageY };
          ((r.left -= (l - s) * ((p.pageX - g.left - r.left) / s)),
            (r.top -= (u - o) * ((p.pageY - g.top - r.top) / o)));
        } else
          pt(e) && E(e.x) && E(e.y)
            ? ((r.left -= (l - s) * ((e.x - r.left) / s)),
              (r.top -= (u - o) * ((e.y - r.top) / o)))
            : ((r.left -= (l - s) / 2), (r.top -= (u - o) / 2));
        ((r.width = l), (r.height = u), this.renderCanvas(!0));
      }
      return this;
    },
    rotate: function (t) {
      return this.rotateTo((this.imageData.rotate || 0) + Number(t));
    },
    rotateTo: function (t) {
      return (
        (t = Number(t)),
        E(t) &&
          this.ready &&
          !this.disabled &&
          this.options.rotatable &&
          ((this.imageData.rotate = t % 360), this.renderCanvas(!0, !0)),
        this
      );
    },
    scaleX: function (t) {
      var e = this.imageData.scaleY;
      return this.scale(t, E(e) ? e : 1);
    },
    scaleY: function (t) {
      var e = this.imageData.scaleX;
      return this.scale(E(e) ? e : 1, t);
    },
    scale: function (t) {
      var e =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t,
        i = this.imageData,
        n = !1;
      return (
        (t = Number(t)),
        (e = Number(e)),
        this.ready &&
          !this.disabled &&
          this.options.scalable &&
          (E(t) && ((i.scaleX = t), (n = !0)),
          E(e) && ((i.scaleY = e), (n = !0)),
          n && this.renderCanvas(!0, !0)),
        this
      );
    },
    getData: function () {
      var t =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1,
        e = this.options,
        i = this.imageData,
        n = this.canvasData,
        r = this.cropBoxData,
        s;
      if (this.ready && this.cropped) {
        s = {
          x: r.left - n.left,
          y: r.top - n.top,
          width: r.width,
          height: r.height
        };
        var o = i.width / i.naturalWidth;
        if (
          (H(s, function (l, u) {
            s[u] = l / o;
          }),
          t)
        ) {
          var c = Math.round(s.y + s.height),
            h = Math.round(s.x + s.width);
          ((s.x = Math.round(s.x)),
            (s.y = Math.round(s.y)),
            (s.width = h - s.x),
            (s.height = c - s.y));
        }
      } else s = { x: 0, y: 0, width: 0, height: 0 };
      return (
        e.rotatable && (s.rotate = i.rotate || 0),
        e.scalable && ((s.scaleX = i.scaleX || 1), (s.scaleY = i.scaleY || 1)),
        s
      );
    },
    setData: function (t) {
      var e = this.options,
        i = this.imageData,
        n = this.canvasData,
        r = {};
      if (this.ready && !this.disabled && pt(t)) {
        var s = !1;
        (e.rotatable &&
          E(t.rotate) &&
          t.rotate !== i.rotate &&
          ((i.rotate = t.rotate), (s = !0)),
          e.scalable &&
            (E(t.scaleX) &&
              t.scaleX !== i.scaleX &&
              ((i.scaleX = t.scaleX), (s = !0)),
            E(t.scaleY) &&
              t.scaleY !== i.scaleY &&
              ((i.scaleY = t.scaleY), (s = !0))),
          s && this.renderCanvas(!0, !0));
        var o = i.width / i.naturalWidth;
        (E(t.x) && (r.left = t.x * o + n.left),
          E(t.y) && (r.top = t.y * o + n.top),
          E(t.width) && (r.width = t.width * o),
          E(t.height) && (r.height = t.height * o),
          this.setCropBoxData(r));
      }
      return this;
    },
    getContainerData: function () {
      return this.ready ? B({}, this.containerData) : {};
    },
    getImageData: function () {
      return this.sized ? B({}, this.imageData) : {};
    },
    getCanvasData: function () {
      var t = this.canvasData,
        e = {};
      return (
        this.ready &&
          H(
            ["left", "top", "width", "height", "naturalWidth", "naturalHeight"],
            function (i) {
              e[i] = t[i];
            }
          ),
        e
      );
    },
    setCanvasData: function (t) {
      var e = this.canvasData,
        i = e.aspectRatio;
      return (
        this.ready &&
          !this.disabled &&
          pt(t) &&
          (E(t.left) && (e.left = t.left),
          E(t.top) && (e.top = t.top),
          E(t.width)
            ? ((e.width = t.width), (e.height = t.width / i))
            : E(t.height) && ((e.height = t.height), (e.width = t.height * i)),
          this.renderCanvas(!0)),
        this
      );
    },
    getCropBoxData: function () {
      var t = this.cropBoxData,
        e;
      return (
        this.ready &&
          this.cropped &&
          (e = { left: t.left, top: t.top, width: t.width, height: t.height }),
        e || {}
      );
    },
    setCropBoxData: function (t) {
      var e = this.cropBoxData,
        i = this.options.aspectRatio,
        n,
        r;
      return (
        this.ready &&
          this.cropped &&
          !this.disabled &&
          pt(t) &&
          (E(t.left) && (e.left = t.left),
          E(t.top) && (e.top = t.top),
          E(t.width) && t.width !== e.width && ((n = !0), (e.width = t.width)),
          E(t.height) &&
            t.height !== e.height &&
            ((r = !0), (e.height = t.height)),
          i && (n ? (e.height = e.width / i) : r && (e.width = e.height * i)),
          this.renderCropBox()),
        this
      );
    },
    getCroppedCanvas: function () {
      var t =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      if (!this.ready || !window.HTMLCanvasElement) return null;
      var e = this.canvasData,
        i = Gr(this.image, this.imageData, e, t);
      if (!this.cropped) return i;
      var n = this.getData(t.rounded),
        r = n.x,
        s = n.y,
        o = n.width,
        c = n.height,
        h = i.width / Math.floor(e.naturalWidth);
      h !== 1 && ((r *= h), (s *= h), (o *= h), (c *= h));
      var l = o / c,
        u = st({
          aspectRatio: l,
          width: t.maxWidth || 1 / 0,
          height: t.maxHeight || 1 / 0
        }),
        d = st(
          { aspectRatio: l, width: t.minWidth || 0, height: t.minHeight || 0 },
          "cover"
        ),
        g = st({
          aspectRatio: l,
          width: t.width || (h !== 1 ? i.width : o),
          height: t.height || (h !== 1 ? i.height : c)
        }),
        p = g.width,
        b = g.height;
      ((p = Math.min(u.width, Math.max(d.width, p))),
        (b = Math.min(u.height, Math.max(d.height, b))));
      var v = document.createElement("canvas"),
        C = v.getContext("2d");
      ((v.width = mt(p)),
        (v.height = mt(b)),
        (C.fillStyle = t.fillColor || "transparent"),
        C.fillRect(0, 0, p, b));
      var w = t.imageSmoothingEnabled,
        M = w === void 0 ? !0 : w,
        _ = t.imageSmoothingQuality;
      ((C.imageSmoothingEnabled = M), _ && (C.imageSmoothingQuality = _));
      var O = i.width,
        f = i.height,
        D = r,
        R = s,
        I,
        T,
        S,
        A,
        N,
        L;
      (D <= -o || D > O
        ? ((D = 0), (I = 0), (S = 0), (N = 0))
        : D <= 0
          ? ((S = -D), (D = 0), (I = Math.min(O, o + D)), (N = I))
          : D <= O && ((S = 0), (I = Math.min(o, O - D)), (N = I)),
        I <= 0 || R <= -c || R > f
          ? ((R = 0), (T = 0), (A = 0), (L = 0))
          : R <= 0
            ? ((A = -R), (R = 0), (T = Math.min(f, c + R)), (L = T))
            : R <= f && ((A = 0), (T = Math.min(c, f - R)), (L = T)));
      var m = [D, R, I, T];
      if (N > 0 && L > 0) {
        var x = p / o;
        m.push(S * x, A * x, N * x, L * x);
      }
      return (
        C.drawImage.apply(
          C,
          [i].concat(
            li(
              m.map(function (q) {
                return Math.floor(mt(q));
              })
            )
          )
        ),
        v
      );
    },
    setAspectRatio: function (t) {
      var e = this.options;
      return (
        !this.disabled &&
          !qt(t) &&
          ((e.aspectRatio = Math.max(0, t) || NaN),
          this.ready &&
            (this.initCropBox(), this.cropped && this.renderCropBox())),
        this
      );
    },
    setDragMode: function (t) {
      var e = this.options,
        i = this.dragBox,
        n = this.face;
      if (this.ready && !this.disabled) {
        var r = t === ge,
          s = e.movable && t === pi;
        ((t = r || s ? t : gi),
          (e.dragMode = t),
          kt(i, At, t),
          gt(i, ae, r),
          gt(i, re, s),
          e.cropBoxMovable || (kt(n, At, t), gt(n, ae, r), gt(n, re, s)));
      }
      return this;
    }
  },
  on = et.Cropper,
  Di = (function () {
    function a(t) {
      var e =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if ((br(this, a), !t || !Lr.test(t.tagName)))
        throw new Error(
          "The first argument is required and must be an <img> or <canvas> element."
        );
      ((this.element = t),
        (this.options = B({}, We, pt(e) && e)),
        (this.cropped = !1),
        (this.disabled = !1),
        (this.pointers = {}),
        (this.ready = !1),
        (this.reloading = !1),
        (this.replaced = !1),
        (this.sized = !1),
        (this.sizing = !1),
        this.init());
    }
    return yr(
      a,
      [
        {
          key: "init",
          value: function () {
            var e = this.element,
              i = e.tagName.toLowerCase(),
              n;
            if (!e[P]) {
              if (((e[P] = this), i === "img")) {
                if (
                  ((this.isImg = !0),
                  (n = e.getAttribute("src") || ""),
                  (this.originalUrl = n),
                  !n)
                )
                  return;
                n = e.src;
              } else
                i === "canvas" &&
                  window.HTMLCanvasElement &&
                  (n = e.toDataURL());
              this.load(n);
            }
          }
        },
        {
          key: "load",
          value: function (e) {
            var i = this;
            if (e) {
              ((this.url = e), (this.imageData = {}));
              var n = this.element,
                r = this.options;
              if (
                (!r.rotatable && !r.scalable && (r.checkOrientation = !1),
                !r.checkOrientation || !window.ArrayBuffer)
              ) {
                this.clone();
                return;
              }
              if (Or.test(e)) {
                Ir.test(e) ? this.read(Zr(e)) : this.clone();
                return;
              }
              var s = new XMLHttpRequest(),
                o = this.clone.bind(this);
              ((this.reloading = !0),
                (this.xhr = s),
                (s.onabort = o),
                (s.onerror = o),
                (s.ontimeout = o),
                (s.onprogress = function () {
                  s.getResponseHeader("content-type") !== He && s.abort();
                }),
                (s.onload = function () {
                  i.read(s.response);
                }),
                (s.onloadend = function () {
                  ((i.reloading = !1), (i.xhr = null));
                }),
                r.checkCrossOrigin && $e(e) && n.crossOrigin && (e = Ve(e)),
                s.open("GET", e, !0),
                (s.responseType = "arraybuffer"),
                (s.withCredentials = n.crossOrigin === "use-credentials"),
                s.send());
            }
          }
        },
        {
          key: "read",
          value: function (e) {
            var i = this.options,
              n = this.imageData,
              r = Qr(e),
              s = 0,
              o = 1,
              c = 1;
            if (r > 1) {
              this.url = Kr(e, He);
              var h = Jr(r);
              ((s = h.rotate), (o = h.scaleX), (c = h.scaleY));
            }
            (i.rotatable && (n.rotate = s),
              i.scalable && ((n.scaleX = o), (n.scaleY = c)),
              this.clone());
          }
        },
        {
          key: "clone",
          value: function () {
            var e = this.element,
              i = this.url,
              n = e.crossOrigin,
              r = i;
            (this.options.checkCrossOrigin &&
              $e(i) &&
              (n || (n = "anonymous"), (r = Ve(i))),
              (this.crossOrigin = n),
              (this.crossOriginUrl = r));
            var s = document.createElement("img");
            (n && (s.crossOrigin = n),
              (s.src = r || i),
              (s.alt = e.alt || "The image to crop"),
              (this.image = s),
              (s.onload = this.start.bind(this)),
              (s.onerror = this.stop.bind(this)),
              W(s, Le),
              e.parentNode.insertBefore(s, e.nextSibling));
          }
        },
        {
          key: "start",
          value: function () {
            var e = this,
              i = this.image;
            ((i.onload = null), (i.onerror = null), (this.sizing = !0));
            var n =
                et.navigator &&
                /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(
                  et.navigator.userAgent
                ),
              r = function (h, l) {
                (B(e.imageData, {
                  naturalWidth: h,
                  naturalHeight: l,
                  aspectRatio: h / l
                }),
                  (e.initialImageData = B({}, e.imageData)),
                  (e.sizing = !1),
                  (e.sized = !0),
                  e.build());
              };
            if (i.naturalWidth && !n) {
              r(i.naturalWidth, i.naturalHeight);
              return;
            }
            var s = document.createElement("img"),
              o = document.body || document.documentElement;
            ((this.sizingImage = s),
              (s.onload = function () {
                (r(s.width, s.height), n || o.removeChild(s));
              }),
              (s.src = i.src),
              n ||
                ((s.style.cssText =
                  "left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;"),
                o.appendChild(s)));
          }
        },
        {
          key: "stop",
          value: function () {
            var e = this.image;
            ((e.onload = null),
              (e.onerror = null),
              e.parentNode.removeChild(e),
              (this.image = null));
          }
        },
        {
          key: "build",
          value: function () {
            if (!(!this.sized || this.ready)) {
              var e = this.element,
                i = this.options,
                n = this.image,
                r = e.parentNode,
                s = document.createElement("div");
              s.innerHTML = _r;
              var o = s.querySelector(".".concat(P, "-container")),
                c = o.querySelector(".".concat(P, "-canvas")),
                h = o.querySelector(".".concat(P, "-drag-box")),
                l = o.querySelector(".".concat(P, "-crop-box")),
                u = l.querySelector(".".concat(P, "-face"));
              ((this.container = r),
                (this.cropper = o),
                (this.canvas = c),
                (this.dragBox = h),
                (this.cropBox = l),
                (this.viewBox = o.querySelector(".".concat(P, "-view-box"))),
                (this.face = u),
                c.appendChild(n),
                W(e, F),
                r.insertBefore(o, e.nextSibling),
                tt(n, Le),
                this.initPreview(),
                this.bind(),
                (i.initialAspectRatio =
                  Math.max(0, i.initialAspectRatio) || NaN),
                (i.aspectRatio = Math.max(0, i.aspectRatio) || NaN),
                (i.viewMode =
                  Math.max(0, Math.min(3, Math.round(i.viewMode))) || 0),
                W(l, F),
                i.guides ||
                  W(l.getElementsByClassName("".concat(P, "-dashed")), F),
                i.center ||
                  W(l.getElementsByClassName("".concat(P, "-center")), F),
                i.background && W(o, "".concat(P, "-bg")),
                i.highlight || W(u, Tr),
                i.cropBoxMovable && (W(u, re), kt(u, At, pe)),
                i.cropBoxResizable ||
                  (W(l.getElementsByClassName("".concat(P, "-line")), F),
                  W(l.getElementsByClassName("".concat(P, "-point")), F)),
                this.render(),
                (this.ready = !0),
                this.setDragMode(i.dragMode),
                i.autoCrop && this.crop(),
                this.setData(i.data),
                G(i.ready) && K(e, ze, i.ready, { once: !0 }),
                vt(e, ze));
            }
          }
        },
        {
          key: "unbuild",
          value: function () {
            if (this.ready) {
              ((this.ready = !1), this.unbind(), this.resetPreview());
              var e = this.cropper.parentNode;
              (e && e.removeChild(this.cropper), tt(this.element, F));
            }
          }
        },
        {
          key: "uncreate",
          value: function () {
            this.ready
              ? (this.unbuild(), (this.ready = !1), (this.cropped = !1))
              : this.sizing
                ? ((this.sizingImage.onload = null),
                  (this.sizing = !1),
                  (this.sized = !1))
                : this.reloading
                  ? ((this.xhr.onabort = null), this.xhr.abort())
                  : this.image && this.stop();
          }
        }
      ],
      [
        {
          key: "noConflict",
          value: function () {
            return ((window.Cropper = on), a);
          }
        },
        {
          key: "setDefaults",
          value: function (e) {
            B(We, pt(e) && e);
          }
        }
      ]
    );
  })();
B(Di.prototype, tn, en, an, rn, nn, sn);
const cn = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 1024 1024"
};
function hn(a, t) {
  return (
    $(),
    V(
      "svg",
      cn,
      t[0] ||
        (t[0] = [
          j(
            "path",
            {
              fill: "currentColor",
              d: "M168 504.2c1-43.7 10-86.1 26.9-126 17.3-41 42.1-77.7 73.7-109.4S337 212.3 378 195c42.4-17.9 87.4-27 133.9-27s91.5 9.1 133.8 27A341.5 341.5 0 0 1 755 268.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 0 0 3 14.1l175.7 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c0-6.7-7.7-10.5-12.9-6.3l-56.4 44.1C765.8 155.1 646.2 92 511.8 92 282.7 92 96.3 275.6 92 503.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8m756 7.8h-60c-4.4 0-7.9 3.5-8 7.8-1 43.7-10 86.1-26.9 126-17.3 41-42.1 77.8-73.7 109.4A342.45 342.45 0 0 1 512.1 856a342.24 342.24 0 0 1-243.2-100.8c-9.9-9.9-19.2-20.4-27.8-31.4l60.2-47a8 8 0 0 0-3-14.1l-175.7-43c-5-1.2-9.9 2.6-9.9 7.7l-.7 181c0 6.7 7.7 10.5 12.9 6.3l56.4-44.1C258.2 868.9 377.8 932 512.2 932c229.2 0 415.5-183.7 419.8-411.8a8 8 0 0 0-8-8.2"
            },
            null,
            -1
          )
        ])
    )
  );
}
const ln = { render: hn },
  un = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "32",
    height: "32",
    viewBox: "0 0 1024 1024"
  };
function dn(a, t) {
  return (
    $(),
    V(
      "svg",
      un,
      t[0] ||
        (t[0] = [
          j(
            "path",
            {
              fill: "currentColor",
              d: "M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 0 0-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13M878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8"
            },
            null,
            -1
          )
        ])
    )
  );
}
const fn = { render: dn },
  pn = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "32",
    height: "32",
    class: "icon",
    viewBox: "0 0 1024 1024"
  };
function gn(a, t) {
  return (
    $(),
    V(
      "svg",
      pn,
      t[0] ||
        (t[0] = [
          j(
            "path",
            {
              d: "m296.992 216.992-272 272L3.008 512l21.984 23.008 272 272 46.016-46.016L126.016 544h772L680.992 760.992l46.016 46.016 272-272L1020.992 512l-21.984-23.008-272-272-46.048 46.048L898.016 480h-772l216.96-216.992z"
            },
            null,
            -1
          )
        ])
    )
  );
}
const mn = { render: gn },
  vn = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "32",
    height: "32",
    class: "icon",
    viewBox: "0 0 1024 1024"
  };
function wn(a, t) {
  return (
    $(),
    V(
      "svg",
      vn,
      t[0] ||
        (t[0] = [
          j(
            "path",
            {
              d: "m512 67.008-23.008 21.984-256 256 46.048 46.048L480 190.016v644L279.008 632.96l-46.048 46.08 256 256 23.008 21.984 23.008-21.984 256-256-46.016-46.016L544 834.016v-644l200.992 200.96 46.016-45.984-256-256z"
            },
            null,
            -1
          )
        ])
    )
  );
}
const bn = { render: wn },
  yn = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "32",
    height: "32",
    viewBox: "0 0 1024 1024"
  };
function xn(a, t) {
  return (
    $(),
    V(
      "svg",
      yn,
      t[0] ||
        (t[0] = [
          j(
            "path",
            {
              fill: "currentColor",
              d: "M868 545.5 536.1 163a31.96 31.96 0 0 0-48.3 0L156 545.5a7.97 7.97 0 0 0 6 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2"
            },
            null,
            -1
          )
        ])
    )
  );
}
const Mn = { render: xn },
  Dn = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "32",
    height: "32",
    class: "icon",
    viewBox: "0 0 1024 1024"
  };
function Cn(a, t) {
  return (
    $(),
    V(
      "svg",
      Dn,
      t[0] ||
        (t[0] = [
          Li(
            '<path d="M956.8 988.8H585.6c-16 0-25.6-9.6-25.6-28.8V576c0-16 9.6-28.8 25.6-28.8h371.2c16 0 25.6 9.6 25.6 28.8v384c0 16-9.6 28.8-25.6 28.8M608 937.6h326.4V598.4H608zm-121.6 44.8C262.4 982.4 144 848 144 595.2c0-19.2 9.6-28.8 25.6-28.8s25.6 12.8 25.6 28.8c0 220.8 96 326.4 288 326.4 16 0 25.6 12.8 25.6 28.8s-6.4 32-22.4 32"></path><path d="M262.4 694.4c-6.4 0-9.6-3.2-16-6.4L160 601.6c-9.6-9.6-9.6-22.4 0-28.8s22.4-9.6 28.8 0l86.4 86.4c9.6 9.6 9.6 22.4 0 28.8-3.2 3.2-6.4 6.4-12.8 6.4"></path><path d="M86.4 694.4c-6.4 0-9.6-3.2-16-6.4-9.6-9.6-9.6-22.4 0-28.8l86.4-86.4c9.6-9.6 22.4-9.6 28.8 0 9.6 9.6 9.6 22.4 0 28.8L99.2 688c-3.2 3.2-6.4 6.4-12.8 6.4m790.4-249.6c-16 0-28.8-12.8-28.8-32 0-224-99.2-336-300.8-336-16 0-28.8-12.8-28.8-32s9.6-32 28.8-32c233.6 0 355.2 137.6 355.2 396.8 0 22.4-9.6 35.2-25.6 35.2"></path><path d="M876.8 448c-6.4 0-9.6-3.2-16-6.4l-86.4-86.4c-9.6-9.6-9.6-22.4 0-28.8s22.4-9.6 28.8 0l86.4 86.4c9.6 9.6 9.6 22.4 0 28.8 0 3.2-6.4 6.4-12.8 6.4"></path><path d="M876.8 448c-6.4 0-9.6-3.2-16-6.4-9.6-9.6-9.6-22.4 0-28.8l86.4-86.4c9.6-9.6 22.4-9.6 28.8 0s9.6 22.4 0 28.8l-86.4 86.4c-3.2 3.2-6.4 6.4-12.8 6.4M288 524.8C156.8 524.8 48 416 48 278.4S156.8 35.2 288 35.2 528 144 528 281.6 419.2 524.8 288 524.8m-3.2-432c-99.2 0-179.2 83.2-179.2 185.6S185.6 464 284.8 464 464 380.8 464 278.4 384 92.8 284.8 92.8"></path>',
            5
          )
        ])
    )
  );
}
const En = { render: Cn },
  Tn = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "32",
    height: "32",
    viewBox: "0 0 1024 1024"
  };
function Sn(a, t) {
  return (
    $(),
    V(
      "svg",
      Tn,
      t[0] ||
        (t[0] = [
          j(
            "path",
            {
              fill: "currentColor",
              d: "M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0 0 48.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2"
            },
            null,
            -1
          )
        ])
    )
  );
}
const An = { render: Sn },
  kn = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "32",
    height: "32",
    viewBox: "0 0 1024 1024"
  };
function Rn(a, t) {
  return (
    $(),
    V(
      "svg",
      kn,
      t[0] ||
        (t[0] = [
          j(
            "path",
            {
              fill: "currentColor",
              d: "M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 0 0 0 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8"
            },
            null,
            -1
          )
        ])
    )
  );
}
const On = { render: Rn },
  In = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "32",
    height: "32",
    viewBox: "0 0 1024 1024"
  };
function Ln(a, t) {
  return (
    $(),
    V(
      "svg",
      In,
      t[0] ||
        (t[0] = [
          j(
            "path",
            {
              fill: "currentColor",
              d: "M505.7 661a8 8 0 0 0 12.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8"
            },
            null,
            -1
          )
        ])
    )
  );
}
const _n = { render: Ln },
  Nn = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "32",
    height: "32",
    viewBox: "0 0 1024 1024"
  };
function Pn(a, t) {
  return (
    $(),
    V(
      "svg",
      Nn,
      t[0] ||
        (t[0] = [
          j(
            "path",
            {
              fill: "currentColor",
              d: "M869 487.8 491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4"
            },
            null,
            -1
          )
        ])
    )
  );
}
const Bn = { render: Pn },
  zn = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "32",
    height: "32",
    viewBox: "0 0 1024 1024"
  };
function Yn(a, t) {
  return (
    $(),
    V(
      "svg",
      zn,
      t[0] ||
        (t[0] = [
          j(
            "path",
            {
              fill: "currentColor",
              d: "M672 418H144c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32m-44 402H188V494h440z"
            },
            null,
            -1
          ),
          j(
            "path",
            {
              fill: "currentColor",
              d: "M819.3 328.5c-78.8-100.7-196-153.6-314.6-154.2l-.2-64c0-6.5-7.6-10.1-12.6-6.1l-128 101c-4 3.1-3.9 9.1 0 12.3L492 318.6c5.1 4 12.7.4 12.6-6.1v-63.9c12.9.1 25.9.9 38.8 2.5 42.1 5.2 82.1 18.2 119 38.7 38.1 21.2 71.2 49.7 98.4 84.3 27.1 34.7 46.7 73.7 58.1 115.8 11 40.7 14 82.7 8.9 124.8-.7 5.4-1.4 10.8-2.4 16.1h74.9c14.8-103.6-11.3-213-81-302.3"
            },
            null,
            -1
          )
        ])
    )
  );
}
const jn = { render: Yn },
  Hn = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "32",
    height: "32",
    viewBox: "0 0 1024 1024"
  };
function Wn(a, t) {
  return (
    $(),
    V(
      "svg",
      Hn,
      t[0] ||
        (t[0] = [
          j(
            "path",
            {
              fill: "currentColor",
              d: "M637 443H519V309c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v134H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h118v134c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V519h118c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8m284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11M696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430"
            },
            null,
            -1
          )
        ])
    )
  );
}
const Un = { render: Wn },
  $n = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "32",
    height: "32",
    viewBox: "0 0 1024 1024"
  };
function Vn(a, t) {
  return (
    $(),
    V(
      "svg",
      $n,
      t[0] ||
        (t[0] = [
          j(
            "path",
            {
              fill: "currentColor",
              d: "M480.5 251.2c13-1.6 25.9-2.4 38.8-2.5v63.9c0 6.5 7.5 10.1 12.6 6.1L660 217.6c4-3.2 4-9.2 0-12.3l-128-101c-5.1-4-12.6-.4-12.6 6.1l-.2 64c-118.6.5-235.8 53.4-314.6 154.2-69.6 89.2-95.7 198.6-81.1 302.4h74.9c-.9-5.3-1.7-10.7-2.4-16.1-5.1-42.1-2.1-84.1 8.9-124.8 11.4-42.2 31-81.1 58.1-115.8 27.2-34.7 60.3-63.2 98.4-84.3 37-20.6 76.9-33.6 119.1-38.8"
            },
            null,
            -1
          ),
          j(
            "path",
            {
              fill: "currentColor",
              d: "M880 418H352c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32m-44 402H396V494h440z"
            },
            null,
            -1
          )
        ])
    )
  );
}
const Xn = { render: Vn },
  Gn = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "32",
    height: "32",
    viewBox: "0 0 1024 1024"
  };
function Fn(a, t) {
  return (
    $(),
    V(
      "svg",
      Gn,
      t[0] ||
        (t[0] = [
          j(
            "path",
            {
              fill: "currentColor",
              d: "M637 443H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h312c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8m284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11M696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430"
            },
            null,
            -1
          )
        ])
    )
  );
}
const qn = { render: Fn },
  Zn = {
    aspectRatio: 1,
    zoomable: !0,
    zoomOnTouch: !0,
    zoomOnWheel: !0,
    cropBoxMovable: !0,
    cropBoxResizable: !0,
    toggleDragModeOnDblclick: !0,
    autoCrop: !0,
    background: !0,
    highlight: !0,
    center: !0,
    responsive: !0,
    restore: !0,
    checkCrossOrigin: !0,
    checkOrientation: !0,
    scalable: !0,
    modal: !0,
    guides: !0,
    movable: !0,
    rotatable: !0
  },
  Kn = {
    src: { type: String, required: !0 },
    alt: { type: String },
    circled: { type: Boolean, default: !1 },
    isClose: { type: Boolean, default: !0 },
    realTimePreview: { type: Boolean, default: !0 },
    height: { type: [String, Number], default: "360px" },
    crossorigin: { type: String, default: void 0 },
    imageStyle: { type: Object, default: () => ({}) },
    options: { type: Object, default: () => ({}) }
  },
  Qn = Kt({
    name: "ReCropper",
    props: Kn,
    setup(a, { attrs: t, emit: e }) {
      const i = z(),
        n = z(),
        r = z(),
        s = z(a.circled),
        o = z(a.isClose),
        c = z(a.src),
        h = z(!1),
        l = z();
      let u = 1,
        d = 1;
      const g = Pi(M, 80),
        p = Et(() => X({ height: a.height, maxWidth: "100%" }, a.imageStyle)),
        b = Et(() => [t.class, { "re-circled": s.value }]),
        v = Et(() => [
          "p-[6px]",
          "h-[30px]",
          "w-[30px]",
          "outline-hidden",
          "rounded-[4px]",
          "cursor-pointer",
          "hover:bg-[rgba(0,0,0,0.06)]"
        ]),
        C = Et(() => ({ height: `${a.height}`.replace(/px/, "") + "px" }));
      (Xe(w),
        _i(() => {
          var T;
          ((T = r.value) == null || T.destroy(),
            (h.value = !1),
            (r.value = null),
            (l.value = ""),
            (u = 1),
            (d = 1));
        }),
        Ni(i, () => f("reset")));
      function w() {
        return _t(this, null, function* () {
          const T = Qt(n);
          T &&
            (r.value = new Di(
              T,
              X(
                at(X({}, Zn), {
                  ready: () => {
                    ((h.value = !0),
                      M(),
                      Bi(400).then(() => e("readied", r.value)));
                  },
                  crop() {
                    g();
                  },
                  zoom() {
                    g();
                  },
                  cropmove() {
                    g();
                  }
                }),
                a.options
              )
            ));
        });
      }
      function M() {
        a.realTimePreview && _();
      }
      function _() {
        if (!r.value) return;
        (s.value ? O() : r.value.getCroppedCanvas()).toBlob(S => {
          if (!S) return;
          const A = new FileReader();
          (A.readAsDataURL(S),
            (A.onloadend = N => {
              var L;
              !((L = N.target) != null && L.result) ||
                !S ||
                ((l.value = N.target.result),
                e("cropper", {
                  base64: N.target.result,
                  blob: S,
                  info: X({ size: S.size }, r.value.getData())
                }));
            }),
            (A.onerror = () => {
              e("error");
            }));
        });
      }
      function O() {
        const T = r.value.getCroppedCanvas(),
          S = document.createElement("canvas"),
          A = S.getContext("2d"),
          N = T.width,
          L = T.height;
        return (
          (S.width = N),
          (S.height = L),
          (A.imageSmoothingEnabled = !0),
          A.drawImage(T, 0, 0, N, L),
          (A.globalCompositeOperation = "destination-in"),
          A.beginPath(),
          A.arc(N / 2, L / 2, Math.min(N, L) / 2, 0, 2 * Math.PI, !0),
          A.fill(),
          S
        );
      }
      function f(T, S) {
        var A, N, L, m;
        (T === "scaleX" && (u = S = u === -1 ? 1 : -1),
          T === "scaleY" && (d = S = d === -1 ? 1 : -1),
          S && $i(S)
            ? (N = (A = r.value) == null ? void 0 : A[T]) == null ||
              N.call(A, ...S)
            : (m = (L = r.value) == null ? void 0 : L[T]) == null ||
              m.call(L, S));
      }
      function D(T) {
        const S = new FileReader();
        return (
          S.readAsDataURL(T),
          (c.value = ""),
          (S.onload = A => {
            var N;
            c.value = (N = A.target) == null ? void 0 : N.result;
          }),
          (S.onloadend = () => {
            w();
          }),
          !1
        );
      }
      const R = Kt({
        directives: { tippy: Hi, longpress: ji },
        setup() {
          return () =>
            k("div", { class: "flex flex-wrap w-[60px] justify-between" }, [
              k(
                Wi,
                { accept: "image/*", "show-file-list": !1, "before-upload": D },
                {
                  default: () => [
                    U(k(fn, { class: v.value }, null), [
                      [Y("tippy"), { content: "上传", placement: "left-start" }]
                    ])
                  ]
                }
              ),
              U(
                k(
                  _n,
                  {
                    class: v.value,
                    onClick: () => Ui(l.value, "cropping.png")
                  },
                  null
                ),
                [[Y("tippy"), { content: "下载", placement: "right-start" }]]
              ),
              U(
                k(
                  En,
                  {
                    class: v.value,
                    onClick: () => {
                      ((s.value = !s.value), M());
                    }
                  },
                  null
                ),
                [
                  [
                    Y("tippy"),
                    { content: "圆形、矩形裁剪", placement: "left-start" }
                  ]
                ]
              ),
              U(k(ln, { class: v.value, onClick: () => f("reset") }, null), [
                [Y("tippy"), { content: "重置", placement: "right-start" }]
              ]),
              U(k(Mn, { class: v.value }, null), [
                [
                  Y("tippy"),
                  { content: "上移（可长按）", placement: "left-start" }
                ],
                [Y("longpress"), () => f("move", [0, -10]), "0:100"]
              ]),
              U(k(An, { class: v.value }, null), [
                [
                  Y("tippy"),
                  { content: "下移（可长按）", placement: "right-start" }
                ],
                [Y("longpress"), () => f("move", [0, 10]), "0:100"]
              ]),
              U(k(On, { class: v.value }, null), [
                [
                  Y("tippy"),
                  { content: "左移（可长按）", placement: "left-start" }
                ],
                [Y("longpress"), () => f("move", [-10, 0]), "0:100"]
              ]),
              U(k(Bn, { class: v.value }, null), [
                [
                  Y("tippy"),
                  { content: "右移（可长按）", placement: "right-start" }
                ],
                [Y("longpress"), () => f("move", [10, 0]), "0:100"]
              ]),
              U(
                k(mn, { class: v.value, onClick: () => f("scaleX", -1) }, null),
                [[Y("tippy"), { content: "水平翻转", placement: "left-start" }]]
              ),
              U(
                k(bn, { class: v.value, onClick: () => f("scaleY", -1) }, null),
                [
                  [
                    Y("tippy"),
                    { content: "垂直翻转", placement: "right-start" }
                  ]
                ]
              ),
              U(
                k(
                  jn,
                  { class: v.value, onClick: () => f("rotate", -45) },
                  null
                ),
                [
                  [
                    Y("tippy"),
                    { content: "逆时针旋转", placement: "left-start" }
                  ]
                ]
              ),
              U(
                k(Xn, { class: v.value, onClick: () => f("rotate", 45) }, null),
                [
                  [
                    Y("tippy"),
                    { content: "顺时针旋转", placement: "right-start" }
                  ]
                ]
              ),
              U(k(Un, { class: v.value }, null), [
                [
                  Y("tippy"),
                  { content: "放大（可长按）", placement: "left-start" }
                ],
                [Y("longpress"), () => f("zoom", 0.1), "0:100"]
              ]),
              U(k(qn, { class: v.value }, null), [
                [
                  Y("tippy"),
                  { content: "缩小（可长按）", placement: "right-start" }
                ],
                [Y("longpress"), () => f("zoom", -0.1), "0:100"]
              ])
            ]);
        }
      });
      function I(T) {
        T.preventDefault();
        const {
          show: S,
          setProps: A,
          destroy: N,
          state: L
        } = zi(i, {
          content: R,
          arrow: !1,
          theme: "light",
          trigger: "manual",
          interactive: !0,
          appendTo: "parent",
          placement: "bottom-end"
        });
        if (
          (A({
            getReferenceClientRect: () => ({
              width: 0,
              height: 0,
              top: T.clientY,
              bottom: T.clientY,
              left: T.clientX,
              right: T.clientX
            })
          }),
          S(),
          o.value)
        ) {
          if (!L.value.isShown && !L.value.isVisible) return;
          Yi(i, "click", N);
        }
      }
      return {
        inSrc: c,
        props: a,
        imgElRef: n,
        tippyElRef: i,
        getClass: b,
        getWrapperStyle: C,
        getImageStyle: p,
        isReady: h,
        croppered: _,
        onContextmenu: I
      };
    },
    render() {
      const {
          inSrc: a,
          isReady: t,
          getClass: e,
          getImageStyle: i,
          onContextmenu: n,
          getWrapperStyle: r
        } = this,
        { alt: s, crossorigin: o } = this.props;
      return a
        ? k(
            "div",
            { ref: "tippyElRef", class: e, style: r, onContextmenu: c => n(c) },
            [
              U(
                k(
                  "img",
                  { ref: "imgElRef", style: i, src: a, alt: s, crossorigin: o },
                  null
                ),
                [[Ge, t]]
              )
            ]
          )
        : null;
    }
  }),
  Jn = Fe(Qn),
  ts = { "element-loading-background": "transparent" },
  es = { class: "w-[18vw]" },
  is = { class: "mt-1 text-center" },
  as = { class: "flex flex-wrap justify-center items-center text-center" },
  rs = { key: 1, class: "mt-1" },
  ns = Kt({
    name: "ReCropperPreview",
    __name: "index",
    props: { imgSrc: String },
    emits: ["cropper"],
    setup(a, { expose: t, emit: e }) {
      const i = e,
        n = z(),
        r = z(),
        s = z(),
        o = z(!1),
        c = z("");
      function h({ base64: u, blob: d, info: g }) {
        ((n.value = g),
          (c.value = u),
          i("cropper", { base64: u, blob: d, info: g }));
      }
      function l() {
        r.value.hide();
      }
      return (
        t({ hidePopover: l }),
        (u, d) => {
          const g = Yt("el-image"),
            p = Yt("el-popover"),
            b = Y("loading");
          return U(
            ($(),
            V("div", ts, [
              k(
                p,
                {
                  ref_key: "popoverRef",
                  ref: r,
                  visible: o.value,
                  placement: "right",
                  width: "18vw"
                },
                {
                  reference: be(() => [
                    j("div", es, [
                      k(
                        Qt(Jn),
                        {
                          ref_key: "refCropper",
                          ref: s,
                          src: a.imgSrc,
                          circled: "",
                          onCropper: h,
                          onReadied: d[0] || (d[0] = v => (o.value = !0))
                        },
                        null,
                        8,
                        ["src"]
                      ),
                      U(
                        j(
                          "p",
                          is,
                          " 温馨提示：右键上方裁剪区可开启功能菜单 ",
                          512
                        ),
                        [[Ge, o.value]]
                      )
                    ])
                  ]),
                  default: be(() => [
                    j("div", as, [
                      c.value
                        ? ($(),
                          Vi(
                            g,
                            {
                              key: 0,
                              src: c.value,
                              "preview-src-list": Array.of(c.value),
                              fit: "cover"
                            },
                            null,
                            8,
                            ["src", "preview-src-list"]
                          ))
                        : ye("", !0),
                      n.value
                        ? ($(),
                          V("div", rs, [
                            j(
                              "p",
                              null,
                              " 图像大小：" +
                                Nt(parseInt(n.value.width)) +
                                " × " +
                                Nt(parseInt(n.value.height)) +
                                "像素 ",
                              1
                            ),
                            j(
                              "p",
                              null,
                              " 文件大小：" +
                                Nt(Qt(Xi)(n.value.size)) +
                                "（" +
                                Nt(n.value.size) +
                                " 字节） ",
                              1
                            )
                          ]))
                        : ye("", !0)
                    ])
                  ]),
                  _: 1
                },
                8,
                ["visible"]
              )
            ])),
            [[b, !o.value]]
          );
        }
      );
    }
  }),
  ss = Fe(ns),
  os = a => Gi.request("post", "/users", { data: a });
function gs(a) {
  const t = $t({ status: "", nickname: "" }),
    e = z(),
    i = z(),
    n = z([]),
    r = z(!0),
    s = z(),
    o = z({}),
    { switchStyle: c } = Oi(),
    h = z([]),
    l = z(0),
    u = $t({ total: 0, pageSize: 10, currentPage: 1, background: !0 }),
    d = [
      {
        label: "勾选列",
        type: "selection",
        fixed: "left",
        reserveSelection: !0
      },
      { label: "用户ID", prop: "id", width: 90 },
      {
        label: "用户头像",
        prop: "avatar",
        cellRenderer: ({ row: m }) =>
          k(
            Yt("el-image"),
            {
              fit: "cover",
              "preview-teleported": !0,
              src: m.avatar || Xt,
              "preview-src-list": Array.of(m.avatar || Xt),
              class: "w-[24px] h-[24px] rounded-full align-middle"
            },
            null
          ),
        width: 90
      },
      { label: "用户昵称", prop: "nickname", minWidth: 130 },
      { label: "账单数量", prop: "billsTotal", minWidth: 130 },
      { label: "总收入", prop: "revenueTotal", minWidth: 130 },
      { label: "总支出", prop: "expenditureTotal", minWidth: 130 },
      {
        label: "状态",
        prop: "status",
        minWidth: 90,
        cellRenderer: m => {
          var x;
          return k(
            Yt("el-switch"),
            {
              size: m.props.size === "small" ? "small" : "default",
              loading: (x = o.value[m.index]) == null ? void 0 : x.loading,
              modelValue: m.row.status,
              "onUpdate:modelValue": q => (m.row.status = q),
              "active-value": 1,
              "inactive-value": 0,
              "active-text": "已启用",
              "inactive-text": "已停用",
              "inline-prompt": !0,
              style: c.value,
              onChange: () => v(m)
            },
            null
          );
        }
      },
      {
        label: "创建时间",
        minWidth: 90,
        prop: "createTime",
        formatter: ({ createTime: m }) => Ri(m).format("YYYY-MM-DD HH:mm:ss")
      },
      { label: "操作", fixed: "right", width: 180, slot: "operation" }
    ],
    g = $t({ newPwd: "" }),
    p = [
      { color: "#e74242", text: "非常弱" },
      { color: "#EFBD47", text: "弱" },
      { color: "#ffa500", text: "一般" },
      { color: "#1bbf1b", text: "强" },
      { color: "#008000", text: "非常强" }
    ],
    b = z();
  function v({ row: m, index: x }) {
    Ki.confirm(
      `确认要<strong>${m.status === 0 ? "停用" : "启用"}</strong><strong style='color:var(--el-color-primary)'>${m.nickname}</strong>用户吗?`,
      "系统提示",
      {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        dangerouslyUseHTMLString: !0,
        draggable: !0
      }
    )
      .then(() => {
        ((o.value[x] = Object.assign({}, o.value[x], { loading: !0 })),
          setTimeout(() => {
            ((o.value[x] = Object.assign({}, o.value[x], { loading: !1 })),
              yt("已成功修改用户状态", { type: "success" }));
          }, 300));
      })
      .catch(() => {
        m.status === 0 ? (m.status = 1) : (m.status = 0);
      });
  }
  const C = Et(() => [
    "h-[20px]!",
    "reset-margin",
    "text-gray-500!",
    "dark:text-white!",
    "dark:hover:text-primary!"
  ]);
  function w(m) {
    (yt(`您删除了用户ID为${m.id}的这条数据`, { type: "success" }), I());
  }
  function M(m) {}
  function _(m) {}
  function O(m) {
    ((l.value = m.length), a.value.setAdaptive());
  }
  function f() {
    ((l.value = 0), a.value.getTableRef().clearSelection());
  }
  function D() {
    const m = a.value.getTableRef().getSelectionRows();
    (yt(`已删除用户ID为 ${Zi(m, "id")} 的数据`, { type: "success" }),
      a.value.getTableRef().clearSelection(),
      I());
  }
  function R(m) {}
  function I() {
    return _t(this, null, function* () {
      r.value = !0;
      const { data: m } = yield os(qi(t));
      ((n.value = m.list),
        (u.total = m.total),
        (u.pageSize = m.pageSize),
        (u.currentPage = m.currentPage),
        setTimeout(() => {
          r.value = !1;
        }, 500));
    });
  }
  const T = m => {
    m && (m.resetFields(), I());
  };
  function S(m = "新增", x) {
    var q, Q, ut, bt;
    Vt({
      title: `${m}用户`,
      props: {
        formInline: {
          title: m,
          nickname: (q = x == null ? void 0 : x.nickname) != null ? q : "",
          password: (Q = x == null ? void 0 : x.password) != null ? Q : "",
          status: (ut = x == null ? void 0 : x.status) != null ? ut : 1,
          remark: (bt = x == null ? void 0 : x.remark) != null ? bt : ""
        }
      },
      width: "46%",
      draggable: !0,
      fullscreen: Pt(),
      fullscreenIcon: !0,
      closeOnClickModal: !1,
      contentRenderer: () => xe(Ii, { ref: e, formInline: null }),
      beforeSure: (Rt, { options: Ot }) => {
        const It = e.value.getRef(),
          Ut = Ot.props.formInline;
        function Lt() {
          (yt(`您${m}了用户名称为${Ut.nickname}的这条数据`, {
            type: "success"
          }),
            Rt(),
            I());
        }
        It.validate(Ci => {
          Ci && Lt();
        });
      }
    });
  }
  const A = z();
  function N(m) {
    Vt({
      title: "裁剪、上传头像",
      width: "40%",
      closeOnClickModal: !1,
      fullscreen: Pt(),
      contentRenderer: () =>
        xe(ss, {
          ref: A,
          imgSrc: m.avatar || Xt,
          onCropper: x => (s.value = x)
        }),
      beforeSure: x => {
        (x(), I());
      },
      closeCallBack: () => A.value.hidePopover()
    });
  }
  Fi(g, ({ newPwd: m }) => (b.value = aa(m) ? -1 : vr(m).score));
  function L(m) {
    Vt({
      title: `重置 ${m.nickname} 用户的密码`,
      width: "30%",
      draggable: !0,
      closeOnClickModal: !1,
      fullscreen: Pt(),
      contentRenderer: () =>
        k(ia, null, [
          k(
            Qi,
            { ref: i, model: g },
            {
              default: () => [
                k(
                  Ji,
                  {
                    prop: "newPwd",
                    rules: [
                      { required: !0, message: "请输入新密码", trigger: "blur" }
                    ]
                  },
                  {
                    default: () => [
                      k(
                        ta,
                        {
                          clearable: !0,
                          "show-password": !0,
                          type: "password",
                          modelValue: g.newPwd,
                          "onUpdate:modelValue": x => (g.newPwd = x),
                          placeholder: "请输入新密码"
                        },
                        null
                      )
                    ]
                  }
                )
              ]
            }
          ),
          k("div", { class: "my-4 flex" }, [
            p.map(({ color: x, text: q }, Q) =>
              k(
                "div",
                {
                  class: "w-[19vw]",
                  style: { marginLeft: Q !== 0 ? "4px" : 0 }
                },
                [
                  k(
                    ea,
                    {
                      striped: !0,
                      "striped-flow": !0,
                      duration: b.value === Q ? 6 : 0,
                      percentage: b.value >= Q ? 100 : 0,
                      color: x,
                      "stroke-width": 10,
                      "show-text": !1
                    },
                    null
                  ),
                  k(
                    "p",
                    {
                      class: "text-center",
                      style: { color: b.value === Q ? x : "" }
                    },
                    [q]
                  )
                ]
              )
            )
          ])
        ]),
      closeCallBack: () => (g.newPwd = ""),
      beforeSure: x => {
        i.value.validate(q => {
          q &&
            (yt(`已成功重置 ${m.nickname} 用户的密码`, { type: "success" }),
            x(),
            I());
        });
      }
    });
  }
  return (
    Xe(() =>
      _t(null, null, function* () {
        I();
      })
    ),
    {
      form: t,
      loading: r,
      columns: d,
      dataList: n,
      treeData: h,
      selectedNum: l,
      pagination: u,
      buttonClass: C,
      deviceDetection: Pt,
      onSearch: I,
      resetForm: T,
      onbatchDel: D,
      openDialog: S,
      handleUpdate: R,
      handleDelete: w,
      handleUpload: N,
      handleReset: L,
      handleSizeChange: M,
      onSelectionCancel: f,
      handleCurrentChange: _,
      handleSelectionChange: O
    }
  );
}
export { gs as useUser };
