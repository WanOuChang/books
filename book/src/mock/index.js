import Mock from "mockjs";
import banner from "./banner.json";
import data from "./data.json";

Mock.mock("/api/banner", {
    "list": banner
})

Mock.mock("/api/classify", {
    "list": data,
})