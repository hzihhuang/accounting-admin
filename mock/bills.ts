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
          category: {
            id: 1,
            img: "https://avatars.githubusercontent.com/u/44761321",
            name: "购物",
            type: "expenses",
            remark: "",
            createTime: 1605456000000
          },
          type: {
            id: 1,
            name: "expenses",
            remark: "",
            createTime: 1605456000000
          },
          price: 100,
          remark: "买零食",
          time: 1605456000000,
          createTime: 1605456000000
        },
        {
          id: 2,
          nickname: "小张",
          category: {
            id: 2,
            img: "https://avatars.githubusercontent.com/u/44761321",
            name: "交通",
            type: "expenses",
            remark: "",
            createTime: 1605456000000
          },
          type: {
            id: 1,
            name: "expenses",
            remark: "",
            createTime: 1605456000000
          },
          price: 2,
          remark: "公交车",
          time: 1605456000200,
          createTime: 1605456000000
        },
        {
          id: 3,
          nickname: "小何",
          category: {
            id: 5,
            img: "https://avatars.githubusercontent.com/u/44761321",
            name: "理财",
            type: "expenses",
            remark: "",
            createTime: 1605456000000
          },
          type: {
            id: 2,
            name: "income",
            remark: "",
            createTime: 1605456000000
          },
          price: 11150,
          remark: "年终奖",
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
