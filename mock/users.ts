import { defineFakeRoute } from "vite-plugin-fake-server/client";

export default defineFakeRoute([
  // 用户管理
  {
    url: "/users",
    method: "post",
    response: ({}) => {
      const list = [
        {
          id: 1,
          avatar: "https://avatars.githubusercontent.com/u/44761321",
          nickname: "小铭",
          billsTotal: 30,
          revenueTotal: 2233,
          expenditureTotal: 1000,
          status: 1,
          remark: "管理员",
          createTime: 1605456000000
        },
        {
          id: 2,
          avatar: "https://avatars.githubusercontent.com/u/52823142",
          nickname: "小林",
          billsTotal: 50,
          revenueTotal: 5433,
          expenditureTotal: 2000,
          status: 1,
          remark: "普通用户",
          createTime: 1605456000000
        }
      ];
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
