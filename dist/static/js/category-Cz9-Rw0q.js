import { aO as e } from "./index-DeFtvjuQ.js";
const a = t => e.request("post", "/web/tags", { data: t }),
  r = t => e.request("get", "/web/tags", { params: t }),
  o = t => e.request("delete", `/web/tags/${t}`),
  g = t => e.request("post", "/web/tags/batch", { data: { ids: t } });
export { g as a, a as b, o as d, r as g };
