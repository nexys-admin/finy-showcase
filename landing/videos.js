import React from "../_snowpack/pkg/react.js";
import Vimeo from "./vimeo.js";
const VideosAndText = [
  {title: "Onboarding", videoId: 561867939},
  {title: "Onboarding #2", videoId: 561869509},
  {
    title: "Onboarding #3",
    text: "accounting - account fuction types",
    videoId: 561870292
  },
  {title: "Regus", videoId: 560990229},
  {title: "Byjuno", videoId: 560807962},
  {title: "Reconciliation", videoId: 573976726}
];
const videoIdToSrc = (videoId) => `https://player.vimeo.com/video/${videoId}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`;
export default () => /* @__PURE__ */ React.createElement("div", {
  className: "p-12 bg-white h-200"
}, /* @__PURE__ */ React.createElement("div", {
  className: "grid grid-cols-2 gap-4"
}, VideosAndText.map((v, i) => {
  const T = /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", {
    className: "mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
  }, v.title));
  const V = /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Vimeo, {
    src: videoIdToSrc(v.videoId)
  }));
  if (i % 2 === 0) {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, T, V);
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, V, T);
})));