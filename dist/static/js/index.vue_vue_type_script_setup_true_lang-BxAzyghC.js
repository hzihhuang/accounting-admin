var d = (t, c, e) =>
  new Promise((r, a) => {
    var l = o => {
        try {
          s(e.next(o));
        } catch (u) {
          a(u);
        }
      },
      n = o => {
        try {
          s(e.throw(o));
        } catch (u) {
          a(u);
        }
      },
      s = o => (o.done ? r(o.value) : Promise.resolve(o.value).then(l, n));
    s((e = e.apply(t, c)).next());
  });
import {
  d as m,
  aR as f,
  aQ as i,
  r as _,
  e as p,
  p as h,
  o as v,
  w as x,
  b as R
} from "./index-DeFtvjuQ.js";
const g = m({
  __name: "index",
  props: f(
    {
      url: {
        default:
          "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"
      }
    },
    { modelValue: {}, modelModifiers: {} }
  ),
  emits: ["update:modelValue"],
  setup(t) {
    const c = i(t, "modelValue"),
      e = _(t.url),
      r = a =>
        d(null, null, function* () {
          try {
            const l = a.file;
            ((c.value = l), (e.value = URL.createObjectURL(l)), a.onSuccess());
          } catch (l) {
            a.onError(l);
          }
        });
    return (a, l) => {
      const n = p("el-avatar"),
        s = p("el-upload");
      return (
        v(),
        h(
          s,
          { class: "avatar-uploader", "http-request": r, "show-file-list": !1 },
          {
            default: x(() => [
              R(n, { size: 136, shape: "square", src: e.value }, null, 8, [
                "src"
              ])
            ]),
            _: 1
          }
        )
      );
    };
  }
});
export { g as _ };
