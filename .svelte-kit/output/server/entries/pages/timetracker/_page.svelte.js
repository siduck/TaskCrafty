import { c as create_ssr_component, b as add_attribute, d as escape, a as subscribe, v as validate_component, f as set_store_value, e as each } from "../../../chunks/ssr.js";
import { B as Button } from "../../../chunks/button.js";
import { t as timerLength, a as timeInSec } from "../../../chunks/store.js";
const RadialProgress = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { progress = 0 } = $$props;
  let { size = 150 } = $$props;
  let { activeStroke = { color: "blue", width: 10, class: "" } } = $$props;
  let { inactiveStroke = { color: "lightgray", width: 10, class: "" } } = $$props;
  let { text = { value: "", class: "" } } = $$props;
  if ($$props.progress === void 0 && $$bindings.progress && progress !== void 0)
    $$bindings.progress(progress);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.activeStroke === void 0 && $$bindings.activeStroke && activeStroke !== void 0)
    $$bindings.activeStroke(activeStroke);
  if ($$props.inactiveStroke === void 0 && $$bindings.inactiveStroke && inactiveStroke !== void 0)
    $$bindings.inactiveStroke(inactiveStroke);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  return `<svg${add_attribute("viewBox", `0 0 ${size} ${size}`, 0)}${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} class="[&_radialStrokeOff]:!stroke-pink"><circle${add_attribute("cx", size / 2, 0)}${add_attribute("cy", size / 2, 0)}${add_attribute("r", size / 2 - 10, 0)}${add_attribute("stroke", inactiveStroke.color, 0)}${add_attribute("stroke-width", inactiveStroke.width, 0)} fill="transparent"${add_attribute("class", inactiveStroke.class, 0)}></circle><circle${add_attribute("cx", size / 2, 0)}${add_attribute("cy", size / 2, 0)}${add_attribute("r", size / 2 - 10, 0)}${add_attribute("stroke", activeStroke.color, 0)}${add_attribute("stroke-width", activeStroke.width, 0)} fill="transparent"${add_attribute("stroke-dasharray", 2 * Math.PI * (size / 2 - 10), 0)}${add_attribute("stroke-dashoffset", 2 * Math.PI * (size / 2 - 10) * (1 - progress / 100), 0)}${add_attribute("class", activeStroke.class, 0)}></circle><text${add_attribute("x", size / 2, 0)}${add_attribute("y", size / 2, 0)} text-anchor="middle" dominant-baseline="middle"${add_attribute("class", text.class, 0)}>${escape(text.value)}</text></svg>`;
});
const prependZero = (n) => n < 10 ? "0" + n.toString() : n;
const genTimerText = (timeInSec2) => {
  const min = Math.floor(timeInSec2 / 60);
  const secs = timeInSec2 % 60;
  return prependZero(min) + " : " + prependZero(secs);
};
const timerSound = "https://freesound.org/data/previews/536/536420_4921277-lq.mp3";
const RadialBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let timerText;
  let progress;
  let pauseBtn;
  let $timerLength, $$unsubscribe_timerLength;
  let $timeInSec, $$unsubscribe_timeInSec;
  $$unsubscribe_timerLength = subscribe(timerLength, (value) => $timerLength = value);
  $$unsubscribe_timeInSec = subscribe(timeInSec, (value) => $timeInSec = value);
  let timerInterval;
  let timerAudioEl;
  const onComplete = () => {
    clearInterval(timerInterval);
    timerAudioEl.volume = 0.2;
    timerAudioEl.play();
    pauseBtn = false;
  };
  const updateTime = () => {
    if ($timeInSec <= 0) {
      onComplete();
      return;
    }
    set_store_value(timeInSec, $timeInSec = $timeInSec - 1, $timeInSec);
  };
  const run = () => {
    if ($timeInSec == 0)
      set_store_value(timeInSec, $timeInSec = $timerLength * 60, $timeInSec);
    timerInterval = setInterval(updateTime, 1e3);
  };
  const stop = (type) => {
    clearInterval(timerInterval);
    if (type == "isReset") {
      set_store_value(timeInSec, $timeInSec = $timerLength * 60, $timeInSec);
      pauseBtn = false;
    }
  };
  timerText = genTimerText($timeInSec);
  progress = 100 - $timeInSec / ($timerLength * 60) * 100;
  pauseBtn = false;
  $$unsubscribe_timerLength();
  $$unsubscribe_timeInSec();
  return `<grid p10 h="fit" class="gap10"><div bg="slate50" class="p4 rounded-full w-fit mx-auto">${validate_component(RadialProgress, "RadialProgress").$$render(
    $$result,
    {
      progress,
      size: 260,
      activeStroke: { class: "stroke-blue-5", width: 13 },
      inactiveStroke: { class: "stroke-slate-2", width: 8 },
      text: { value: timerText, class: "text-4xl" }
    },
    {},
    {}
  )}</div> <flex gap3 mx="auto">${validate_component(Button, "Btn").$$render(
    $$result,
    {
      icon: pauseBtn ? "i-ic:round-pause" : "i-ion:play",
      class: "p4 rounded-full btglass",
      bg: pauseBtn ? "red4" : "blue5",
      onClick: () => {
        pauseBtn = !pauseBtn;
        pauseBtn ? run() : stop("isPause");
      },
      hover: "!bg-slate6"
    },
    {},
    {}
  )} ${validate_component(Button, "Btn").$$render(
    $$result,
    {
      icon: "i-solar:restart-bold-duotone",
      onClick: () => stop("isReset"),
      bg: "",
      text: "Reset",
      rounded: "full"
    },
    {},
    {}
  )}</flex> <audio${add_attribute("src", timerSound, 0)}${add_attribute("this", timerAudioEl, 0)}></audio></grid>`;
});
const Timer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $timeInSec, $$unsubscribe_timeInSec;
  let $timerLength, $$unsubscribe_timerLength;
  $$unsubscribe_timeInSec = subscribe(timeInSec, (value) => $timeInSec = value);
  $$unsubscribe_timerLength = subscribe(timerLength, (value) => $timerLength = value);
  let clickedSwitcherLabel = "pomodoro";
  let timerBreaks = [
    {
      name: "Pomodoro",
      val: "pomodoro",
      icon: "i-icon-park-outline:tomato",
      length: 25
    },
    {
      name: "Short Break",
      val: "custom",
      length: 5
    }
  ];
  const setTimerMode = (name, length) => {
    clickedSwitcherLabel = name, set_store_value(timerLength, $timerLength = length, $timerLength);
    set_store_value(timeInSec, $timeInSec = length * 60, $timeInSec);
  };
  $$unsubscribe_timeInSec();
  $$unsubscribe_timerLength();
  return `<grid class="bg-slate-1 p5"> <div m="auto" bg="white" class="curved"> <flex gap3 class="bg-black p3 shadow-md" rounded="xl">${each(timerBreaks, (item) => {
    return `${validate_component(Button, "Btn").$$render(
      $$result,
      {
        text: item.name,
        icon: item.icon,
        hover: "bg-slate7",
        class: `${clickedSwitcherLabel === item.val ? "bg-white text-black hover:text-white" : ""}`,
        onClick: () => setTimerMode(item.val, item.length),
        w: "full"
      },
      {},
      {}
    )}`;
  })}</flex> ${validate_component(RadialBar, "RadialBar").$$render($$result, {}, {}, {})}</div></grid>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Timer, "Timer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
