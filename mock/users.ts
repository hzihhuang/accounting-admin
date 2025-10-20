import { defineFakeRoute } from "vite-plugin-fake-server/client";

export default defineFakeRoute([
  // 用户管理
  {
    url: "/users",
    method: "post",
    response: ({ body }) => {
      let list = [
        {
          avatar: "https://avatars.githubusercontent.com/u/44761321",
          username: "admin",
          nickname: "小铭",
          billsTotal: 30,
          revenueTotal: 2233,
          expenditureTotal: 1000,
          id: 1,
          status: 1,
          remark: "管理员",
          createTime: 1605456000000
        },
        {
          avatar: "https://avatars.githubusercontent.com/u/52823142",
          username: "common",
          nickname: "小林",
          billsTotal: 50,
          revenueTotal: 5433,
          expenditureTotal: 2000,
          id: 2,
          status: 1,
          remark: "普通用户",
          createTime: 1605456000000
        }
      ];
      list = list.filter(item => item.username.includes(body?.username));
      list = list.filter(item =>
        String(item.status).includes(String(body?.status))
      );
      return {
        success: true,
        data: {
          list,
          total: list.length, // 总条目数
          pageSize: 10, // 每页显示条目个数
          currentPage: 1 // 当前页数
        }
      };
    }
  }
]);
