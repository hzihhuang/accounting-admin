export default {
  path: "/data",
  redirect: "/data/record",
  meta: {
    icon: "bxs:data",
    title: "账本管理",
    rank: 2
  },
  children: [
    {
      path: "/data/record",
      name: "流水记录",
      component: () => import("@/views/data/record.vue"),
      meta: {
        title: "流水记录"
      }
    },
    {
      path: "/data/manage",
      name: "类别管理",
      component: () => import("@/views/data/manage.vue"),
      meta: {
        title: "类别管理"
      }
    }
  ]
} satisfies RouteConfigsTable;
