export default {
  path: "/users",
  redirect: "/users/index",
  meta: {
    icon: "solar:user-bold",
    title: "用户管理",
    rank: 1
  },
  children: [
    {
      path: "/users/index",
      name: "users",
      component: () => import("@/views/users/index.vue"),
      meta: {
        title: "用户管理"
      }
    }
  ]
} satisfies RouteConfigsTable;
