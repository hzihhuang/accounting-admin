import { dayjs, cloneDeep, getRandomIntBetween } from "./utils";
import GroupLine from "~icons/ri/group-line";
import Bills from "~icons/mingcute/bill-line";
import Tags from "~icons/mdi/tag-outline";
import NewBill from "~icons/fluent/clock-bill-24-regular";

const days = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];

/** 需求人数、提问数量、解决数量、用户满意度 */
const chartData = [
  {
    icon: GroupLine,
    bgColor: "#effaff",
    color: "#41b6ff",
    duration: 2200,
    name: "总用户数",
    value: 36000,
    percent: "+88%",
    data: [2101, 5288, 4239, 4962, 6752, 5208, 7450] // 平滑折线图数据
  },
  {
    icon: Bills,
    bgColor: "#fff5f4",
    color: "#e85f33",
    duration: 1600,
    name: "账单总量",
    value: 16580,
    percent: "+70%",
    data: [2216, 1148, 1255, 788, 4821, 1973, 4379]
  },
  {
    icon: Tags,
    bgColor: "#eff8f4",
    color: "#26ce83",
    duration: 1500,
    name: "分类种类",
    value: 24,
    percent: "+99%",
    data: [861, 1002, 3195, 1715, 3666, 2415, 3645]
  },
  {
    icon: NewBill,
    bgColor: "#f6f4fe",
    color: "#7846e5",
    duration: 100,
    name: "今日新增账单",
    value: 100,
    percent: "+100%",
    data: [861, 1002, 3195, 1715, 3666, 2415, 3645]
  }
];

/** 分析概览 */
const barChartData = [
  {
    requireData: [2101, 5288, 4239, 4962, 6752, 5208, 7450],
    questionData: [2216, 1148, 1255, 1788, 4821, 1973, 4379]
  },
  {
    requireData: [2101, 3280, 4400, 4962, 5752, 6889, 7600],
    questionData: [2116, 3148, 3255, 3788, 4821, 4970, 5390]
  }
];

/** 解决概率 */
const progressData = [
  {
    week: "交通",
    percentage: 20,
    color: "#41b6ff"
  },
  {
    week: "餐饮",
    percentage: 15,
    color: "#41b6ff"
  },
  {
    week: "购物",
    percentage: 32,
    color: "#41b6ff"
  },
  {
    week: "旅行",
    percentage: 2,
    color: "#41b6ff"
  },
  {
    week: "住房",
    percentage: 15,
    color: "#26ce83"
  },
  {
    week: "宠物",
    percentage: 2,
    color: "#26ce83"
  },
  {
    week: "礼物",
    percentage: 3,
    color: "#26ce83"
  },
  {
    week: "长辈",
    percentage: 30,
    color: "#26ce83"
  }
].sort((a, b) => b.percentage - a.percentage);

/** 数据统计 */
const tableData = Array.from({ length: 30 }).map((_, index) => {
  return {
    id: index + 1,
    requiredNumber: getRandomIntBetween(13500, 19999),
    questionNumber: getRandomIntBetween(12600, 16999),
    resolveNumber: getRandomIntBetween(13500, 17999),
    satisfaction: getRandomIntBetween(95, 100),
    date: dayjs().subtract(index, "day").format("YYYY-MM-DD")
  };
});

/** 最新动态 */
const latestNewsData = cloneDeep(tableData)
  .slice(0, 14)
  .map((item, index) => {
    return Object.assign(item, {
      date: `${dayjs().subtract(index, "day").format("YYYY-MM-DD")} ${
        days[dayjs().subtract(index, "day").day()]
      }`
    });
  });

export { chartData, barChartData, progressData, tableData, latestNewsData };
