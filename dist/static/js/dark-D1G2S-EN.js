var G = (t, e, a) =>
  new Promise((o, u) => {
    var p = n => {
        try {
          h(a.next(n));
        } catch (d) {
          u(d);
        }
      },
      S = n => {
        try {
          h(a.throw(n));
        } catch (d) {
          u(d);
        }
      },
      h = n => (n.done ? o(n.value) : Promise.resolve(n.value).then(p, S));
    h((a = a.apply(t, e)).next());
  });
import {
  ag as P,
  D as y,
  aE as Y,
  P as W,
  x as Z,
  y as $,
  B as M,
  z as T,
  C as z,
  aa as ee,
  r as x,
  aF as te,
  J as N,
  aG as q,
  aH as oe,
  aI as ae,
  aJ as re,
  q as se,
  aK as le,
  aL as ne,
  Q as ue,
  a2 as ie,
  E as ce,
  I as he,
  N as de,
  av as E,
  aM as me,
  a0 as _,
  c as V,
  o as j,
  j as A
} from "./index-DeFtvjuQ.js";
import { u as B } from "./epTheme-C-t4O6JT.js";
import { u as pe } from "./user-DNtD0Fqa.js";
function ge() {
  const { $storage: t, $config: e } = P(),
    a = () => {
      var p, S, h, n, d, v, w, b, g, C, s, l, c, m, i;
      (Y().multiTagsCache && (!t.tags || t.tags.length === 0) && (t.tags = W),
        t.layout ||
          (t.layout = {
            layout:
              (p = e == null ? void 0 : e.Layout) != null ? p : "vertical",
            theme: (S = e == null ? void 0 : e.Theme) != null ? S : "light",
            darkMode: (h = e == null ? void 0 : e.DarkMode) != null ? h : !1,
            sidebarStatus:
              (n = e == null ? void 0 : e.SidebarStatus) != null ? n : !0,
            epThemeColor:
              (d = e == null ? void 0 : e.EpThemeColor) != null ? d : "#409EFF",
            themeColor:
              (v = e == null ? void 0 : e.Theme) != null ? v : "light",
            overallStyle:
              (w = e == null ? void 0 : e.OverallStyle) != null ? w : "light"
          }),
        t.configure ||
          (t.configure = {
            grey: (b = e == null ? void 0 : e.Grey) != null ? b : !1,
            weak: (g = e == null ? void 0 : e.Weak) != null ? g : !1,
            hideTabs: (C = e == null ? void 0 : e.HideTabs) != null ? C : !1,
            hideFooter: (s = e.HideFooter) != null ? s : !0,
            showLogo: (l = e == null ? void 0 : e.ShowLogo) != null ? l : !0,
            showModel:
              (c = e == null ? void 0 : e.ShowModel) != null ? c : "smart",
            multiTagsCache:
              (m = e == null ? void 0 : e.MultiTagsCache) != null ? m : !1,
            stretch: (i = e == null ? void 0 : e.Stretch) != null ? i : !1
          }));
    },
    o = y(() => (t == null ? void 0 : t.layout.layout)),
    u = y(() => t.layout);
  return { layout: o, layoutTheme: u, initStorage: a };
}
const fe = Z("pure-app", {
  state: () => {
    var t, e, a, o;
    return {
      sidebar: {
        opened:
          (e =
            (t = M().getItem(`${z()}layout`)) == null
              ? void 0
              : t.sidebarStatus) != null
            ? e
            : T().SidebarStatus,
        withoutAnimation: !1,
        isClickCollapse: !1
      },
      layout:
        (o = (a = M().getItem(`${z()}layout`)) == null ? void 0 : a.layout) !=
        null
          ? o
          : T().Layout,
      device: ee() ? "mobile" : "desktop",
      viewportSize: {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      }
    };
  },
  getters: {
    getSidebarStatus(t) {
      return t.sidebar.opened;
    },
    getDevice(t) {
      return t.device;
    },
    getViewportWidth(t) {
      return t.viewportSize.width;
    },
    getViewportHeight(t) {
      return t.viewportSize.height;
    }
  },
  actions: {
    TOGGLE_SIDEBAR(t, e) {
      const a = M().getItem(`${z()}layout`);
      (t && e
        ? ((this.sidebar.withoutAnimation = !0),
          (this.sidebar.opened = !0),
          (a.sidebarStatus = !0))
        : !t && e
          ? ((this.sidebar.withoutAnimation = !0),
            (this.sidebar.opened = !1),
            (a.sidebarStatus = !1))
          : !t &&
            !e &&
            ((this.sidebar.withoutAnimation = !1),
            (this.sidebar.opened = !this.sidebar.opened),
            (this.sidebar.isClickCollapse = !this.sidebar.opened),
            (a.sidebarStatus = this.sidebar.opened)),
        M().setItem(`${z()}layout`, a));
    },
    toggleSideBar(t, e) {
      return G(this, null, function* () {
        yield this.TOGGLE_SIDEBAR(t, e);
      });
    },
    toggleDevice(t) {
      this.device = t;
    },
    setLayout(t) {
      this.layout = t;
    },
    setViewportSize(t) {
      this.viewportSize = t;
    }
  }
});
function J() {
  return fe($);
}
function Le() {
  var g, C;
  const { layoutTheme: t, layout: e } = ge(),
    a = x([
      { color: "#ffffff", themeColor: "light" },
      { color: "#1b2a47", themeColor: "default" },
      { color: "#722ed1", themeColor: "saucePurple" },
      { color: "#eb2f96", themeColor: "pink" },
      { color: "#f5222d", themeColor: "dusk" },
      { color: "#fa541c", themeColor: "volcano" },
      { color: "#13c2c2", themeColor: "mingQing" },
      { color: "#52c41a", themeColor: "auroraGreen" }
    ]),
    { $storage: o } = P(),
    u = x((g = o == null ? void 0 : o.layout) == null ? void 0 : g.darkMode),
    p = x(
      (C = o == null ? void 0 : o.layout) == null ? void 0 : C.overallStyle
    ),
    S = document.documentElement;
  function h(s, l, c) {
    const m = c || document.body;
    let { className: i } = m;
    ((i = i.replace(l, "").trim()), (m.className = s ? `${i} ${l}` : i));
  }
  function n(s = (c => ((c = T().Theme) != null ? c : "light"))(), l = !0) {
    var i, L;
    ((t.value.theme = s),
      document.documentElement.setAttribute("data-theme", s));
    const m = o.layout.themeColor;
    if (
      ((o.layout = {
        layout: e.value,
        theme: s,
        darkMode: u.value,
        sidebarStatus: (i = o.layout) == null ? void 0 : i.sidebarStatus,
        epThemeColor: (L = o.layout) == null ? void 0 : L.epThemeColor,
        themeColor: l ? s : m,
        overallStyle: p.value
      }),
      s === "default" || s === "light")
    )
      v(T().EpThemeColor);
    else {
      const H = a.value.find(I => I.themeColor === s);
      v(H.color);
    }
  }
  function d(s, l, c) {
    document.documentElement.style.setProperty(
      `--el-color-primary-${s}-${l}`,
      u.value ? ae(c, l / 10) : re(c, l / 10)
    );
  }
  const v = s => {
    (B().setEpThemeColor(s),
      document.documentElement.style.setProperty("--el-color-primary", s));
    for (let l = 1; l <= 2; l++) d("dark", l, s);
    for (let l = 1; l <= 9; l++) d("light", l, s);
  };
  function w(s) {
    ((p.value = s),
      B().epTheme === "light" && u.value
        ? n("default", !1)
        : n(B().epTheme, !1),
      u.value
        ? document.documentElement.classList.add("dark")
        : (o.layout.themeColor === "light" && n("light", !1),
          document.documentElement.classList.remove("dark")));
  }
  function b() {
    (te(), M().clear());
    const {
      Grey: s,
      Weak: l,
      MultiTagsCache: c,
      EpThemeColor: m,
      Layout: i
    } = T();
    (J().setLayout(i),
      v(m),
      N().multiTagsCacheChange(c),
      h(s, "html-grey", document.querySelector("html")),
      h(l, "html-weakness", document.querySelector("html")),
      q.push("/login"),
      N().handleTags("equal", [...W]),
      oe());
  }
  return {
    body: S,
    dataTheme: u,
    overallStyle: p,
    layoutTheme: t,
    themeColors: a,
    onReset: b,
    toggleClass: h,
    dataThemeChange: w,
    setEpThemeColor: v,
    setLayoutThemeColor: n
  };
}
function ye(t) {
  return {
    all: (t = t || new Map()),
    on: function (e, a) {
      var o = t.get(e);
      o ? o.push(a) : t.set(e, [a]);
    },
    off: function (e, a) {
      var o = t.get(e);
      o && (a ? o.splice(o.indexOf(a) >>> 0, 1) : t.set(e, []));
    },
    emit: function (e, a) {
      var o = t.get(e);
      (o &&
        o.slice().map(function (u) {
          u(a);
        }),
        (o = t.get("*")) &&
          o.slice().map(function (u) {
            u(e, a);
          }));
    }
  };
}
const O = ye(),
  ve =
    "The current routing configuration is incorrect, please check the configuration";
function ze() {
  var F, R;
  const t = he(),
    e = J(),
    a = se().options.routes,
    { isFullscreen: o, toggle: u } = le(),
    { wholeMenus: p } = ne(ue()),
    S =
      (R = (F = T()) == null ? void 0 : F.TooltipEffect) != null ? R : "light",
    h = y(() => ({
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      overflow: "hidden"
    })),
    n = y(() => {
      var r, f;
      return _((r = E()) == null ? void 0 : r.avatar)
        ? pe
        : (f = E()) == null
          ? void 0
          : f.avatar;
    }),
    d = y(() => {
      var r, f, k;
      return _((r = E()) == null ? void 0 : r.nickname)
        ? (f = E()) == null
          ? void 0
          : f.username
        : (k = E()) == null
          ? void 0
          : k.nickname;
    }),
    v = y(() => (d.value ? { marginRight: "10px" } : "")),
    w = y(() => !e.getSidebarStatus),
    b = y(() => e.getDevice),
    { $storage: g, $config: C } = P(),
    s = y(() => {
      var r;
      return (r = g == null ? void 0 : g.layout) == null ? void 0 : r.layout;
    }),
    l = y(() => C.Title);
  function c(r) {
    const f = T().Title;
    f ? (document.title = `${r.title} | ${f}`) : (document.title = r.title);
  }
  function m() {
    E().logOut();
  }
  function i() {
    var r;
    q.push((r = de()) == null ? void 0 : r.path);
  }
  function L() {
    O.emit("openPanel");
  }
  function H() {
    e.toggleSideBar();
  }
  function I(r) {
    r == null || r.handleResize();
  }
  function K(r) {
    var D;
    if (!r.children) return console.error(ve);
    const f = /^http(s?):\/\//,
      k = (D = r.children[0]) == null ? void 0 : D.path;
    return f.test(k) ? r.path + "/" + k : k;
  }
  function Q(r) {
    p.value.length === 0 || U(r) || O.emit("changLayoutRoute", r);
  }
  function U(r) {
    return me.includes(r);
  }
  function X() {
    return new URL("/logo.svg", import.meta.url).href;
  }
  return {
    route: t,
    title: l,
    device: b,
    layout: s,
    logout: m,
    routers: a,
    $storage: g,
    isFullscreen: o,
    Fullscreen: ce,
    ExitFullscreen: ie,
    toggle: u,
    backTopMenu: i,
    onPanel: L,
    getDivStyle: h,
    changeTitle: c,
    toggleSideBar: H,
    menuSelect: Q,
    handleResize: I,
    resolvePath: K,
    getLogo: X,
    isCollapse: w,
    pureApp: e,
    username: d,
    userAvatar: n,
    avatarsStyle: v,
    tooltipEffect: S
  };
}
const Se = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
};
function Ce(t, e) {
  return (
    j(),
    V(
      "svg",
      Se,
      e[0] ||
        (e[0] = [
          A("path", { fill: "none", d: "M0 0h24v24H0z" }, null, -1),
          A(
            "path",
            {
              d: "M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12M11 1h2v3h-2zm0 19h2v3h-2zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414zm2.121-14.85 1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414zM23 11v2h-3v-2zM4 11v2H1v-2z"
            },
            null,
            -1
          )
        ])
    )
  );
}
const Ae = { render: Ce },
  Te = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    viewBox: "0 0 24 24"
  };
function we(t, e) {
  return (
    j(),
    V(
      "svg",
      Te,
      e[0] ||
        (e[0] = [
          A("path", { fill: "none", d: "M0 0h24v24H0z" }, null, -1),
          A(
            "path",
            {
              d: "M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981"
            },
            null,
            -1
          )
        ])
    )
  );
}
const He = { render: we };
export { Le as a, J as b, He as c, Ae as d, O as e, ge as f, ze as u };
