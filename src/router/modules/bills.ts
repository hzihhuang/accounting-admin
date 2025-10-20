export default {
  path: "/bills",
  redirect: "/bills/list",
  meta: {
    icon: "solar:user-bold",
    title: "账单管理",
    rank: 2
  },
  children: [
    {
      path: "/bills/list",
      name: "bills",
      component: () => import("@/views/bills/index.vue"),
      meta: {
        title: "账单管理"
      }
    }
  ]
} satisfies RouteConfigsTable;
