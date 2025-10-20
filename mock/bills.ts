import { defineFakeRoute } from "vite-plugin-fake-server/client";

export default defineFakeRoute([
  // 用户管理
  {
    url: "/bills",
    method: "post",
    response: ({}) => {
      const list = [
        {
          id: 1,
          nickname: "小铭",
          tag: 0,
          type: 0,
          amount: 100,
          remark: "吃饭",
          time: 1605456000000,
          createTime: 1605456000000
        },
        {
          id: 2,
          nickname: "小张",
          tag: 3,
          type: 1,
          amount: 100,
          remark: "火车票",
          time: 1605456000200,
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
