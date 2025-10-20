export default {
  path: "/category",
  redirect: "/category/list",
  meta: {
    icon: "solar:user-bold",
    title: "分类管理",
    rank: 3
  },
  children: [
    {
      path: "/category/list",
      name: "分类管理",
      component: () => import("@/views/category/list.vue"),
      meta: {
        title: "分类管理"
      }
    }
  ]
} satisfies RouteConfigsTable;
