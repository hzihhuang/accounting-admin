import { defineFakeRoute } from "vite-plugin-fake-server/client";

export default defineFakeRoute([
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
