import { defineFakeRoute } from "vite-plugin-fake-server/client";

export default defineFakeRoute([
  {
    url: "/types",
    method: "get",
    response: ({}) => {
      const list = [
        {
          id: 1,
          name: "expenses",
          remark: "",
          createTime: 1605456000000
        },
        {
          id: 2,
          name: "income",
          remark: "",
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
