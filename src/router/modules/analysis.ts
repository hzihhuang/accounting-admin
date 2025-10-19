export default {
  path: "/analysis",
  redirect: "/analysis/trend",
  meta: {
    icon: "hugeicons:analysis-text-link",
    title: "财务分析",
    rank: 3
  },
  children: [
    {
      path: "/analysis/trend",
      name: "收支趋势",
      component: () => import("@/views/analysis/trend.vue"),
      meta: {
        title: "收支趋势"
      }
    },
    {
      path: "/analysis/ranking",
      name: "类别排行",
      component: () => import("@/views/analysis/ranking.vue"),
      meta: {
        title: "类别排行"
      }
    },
    {
      path: "/analysis/insight",
      name: "消费洞察",
      component: () => import("@/views/analysis/insight.vue"),
      meta: {
        title: "消费洞察"
      }
    }
  ]
} satisfies RouteConfigsTable;
