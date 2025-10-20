export default {
  path: "/bills",
  redirect: "/bills/index",
  meta: {
    icon: "solar:user-bold",
    title: "账单管理",
    rank: 2
  },
  children: [
    {
      path: "/bills/index",
      name: "bills",
      component: () => import("@/views/bills/index.vue"),
      meta: {
        title: "账单管理"
      }
    }
  ]
} satisfies RouteConfigsTable;
