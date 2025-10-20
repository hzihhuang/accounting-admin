import { defineFakeRoute } from "vite-plugin-fake-server/client";

export default defineFakeRoute([
  {
    url: "/category",
    method: "get",
    response: ({}) => {
      const list = [
        {
          id: 1,
          img: "https://avatars.githubusercontent.com/u/44761321",
          name: "购物",
          type: "expenses",
          remark: "",
          createTime: 1605456000000
        },
        {
          id: 2,
          img: "https://avatars.githubusercontent.com/u/44761321",
          name: "交通",
          type: "expenses",
          remark: "",
          createTime: 1605456000000
        },
        {
          id: 3,
          img: "https://avatars.githubusercontent.com/u/44761321",
          name: "工资",
          type: "income",
          remark: "",
          createTime: 1605456000000
        },
        {
          id: 4,
          img: "https://avatars.githubusercontent.com/u/44761321",
          name: "理财",
          type: "expenses",
          remark: "",
          createTime: 1605456000000
        },
        {
          id: 5,
          img: "https://avatars.githubusercontent.com/u/44761321",
          name: "理财",
          type: "income",
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
