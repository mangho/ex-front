import localData from "@/data/local_data.js";
import webData from "@/data/web_data.js";
let local = false;
const data = local ? localData : webData
export default data