import React from "../_snowpack/pkg/react.js";
import {videosAndText, videosAndText2022} from "./data.js";
import VideoItem from "./video-item.js";
export default () => /* @__PURE__ */ React.createElement("div", {
  className: "p-12 bg-white h-200"
}, /* @__PURE__ */ React.createElement("div", {
  className: "grid grid-cols-2 gap-4"
}, videosAndText2022.map((v, i) => /* @__PURE__ */ React.createElement(VideoItem, {
  key: i,
  v,
  i
}))), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement("div", {
  className: "grid grid-cols-2 gap-4"
}, videosAndText.map((v, i) => /* @__PURE__ */ React.createElement(VideoItem, {
  key: i,
  v,
  i
}))));
