export default {
  path: "/users",
  redirect: "/users/list",
  meta: {
    icon: "solar:user-bold",
    title: "用户中心",
    rank: 1
  },
  children: [
    {
      path: "/users/list",
      name: "用户列表",
      component: () => import("@/views/users/list.vue"),
      meta: {
        title: "用户列表"
      }
    },
    {
      path: "/users/analyze",
      name: "用户分析",
      component: () => import("@/views/users/analyze.vue"),
      meta: {
        title: "用户分析"
      }
    }
  ]
} satisfies RouteConfigsTable;
