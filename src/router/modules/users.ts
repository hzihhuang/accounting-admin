export default {
  path: "/users",
  redirect: "/users/list",
  meta: {
    icon: "solar:user-bold",
    title: "用户管理",
    rank: 1
  },
  children: [
    {
      path: "/users/list",
      name: "users",
      component: () => import("@/views/users/index.vue"),
      meta: {
        title: "用户管理"
      }
    }
  ]
} satisfies RouteConfigsTable;
