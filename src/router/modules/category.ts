export default {
  path: "/category",
  redirect: "/category/list",
  meta: {
    icon: "flowbite:tag-solid",
    title: "分类管理",
    rank: 3
  },
  children: [
    {
      path: "/category/list",
      name: "category",
      component: () => import("@/views/category/list.vue"),
      meta: {
        title: "分类管理"
      }
    }
  ]
} satisfies RouteConfigsTable;
