export default {
  path: "/analysis",
  redirect: "/analysis/trend",
  meta: {
    icon: "hugeicons:analysis-text-link",
    title: "统计分析",
    rank: 4
  },
  children: [
    {
      path: "/analysis/payment",
      name: "收支统计",
      component: () => import("@/views/analysis/payment.vue"),
      meta: {
        title: "收支统计"
      }
    },
    {
      path: "/analysis/trend",
      name: "趋势分析",
      component: () => import("@/views/analysis/trend.vue"),
      meta: {
        title: "趋势分析"
      }
    },
    {
      path: "/analysis/category",
      name: "分类占比",
      component: () => import("@/views/analysis/category.vue"),
      meta: {
        title: "分类占比"
      }
    }
  ]
} satisfies RouteConfigsTable;
