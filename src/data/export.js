import {blogList1 } from "@/data/local_data.js";
import { blogList2 } from "@/data/web_data.js";
let local = false;
const blogList = local ? blogList1 :blogList2
export { blogList }