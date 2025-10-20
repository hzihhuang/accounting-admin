import { defineFakeRoute } from "vite-plugin-fake-server/client";

export default defineFakeRoute([
  {
    url: "/tags",
    method: "get",
    response: ({}) => {
      const list = [
        {
          id: 1,
          name: "购物",
          description: "",
          createTime: 1605456000000
        },
        {
          id: 2,
          name: "交通",
          description: "",
          createTime: 1605456000000
        }
      ];
      return {
        success: true,
        data: list
      };
    }
  },
  {
    url: "/types",
    method: "get",
    response: ({}) => {
      const list = [
        {
          id: 1,
          name: "支出",
          description: "",
          createTime: 1605456000000
        },
        {
          id: 2,
          name: "收入",
          description: "",
          createTime: 1605456000000
        }
      ];
      return {
        success: true,
        data: list
      };
    }
  }
]);
