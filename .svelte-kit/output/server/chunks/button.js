import { c as create_ssr_component, h as compute_rest_props, l as spread, o as escape_object, b as add_attribute, d as escape } from "./ssr.js";
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["text", "icon", "iconPos", "onClick"]);
  let { text = "" } = $$props;
  let { icon = "" } = $$props;
  let { iconPos = "left" } = $$props;
  let { onClick = () => {
  } } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.iconPos === void 0 && $$bindings.iconPos && iconPos !== void 0)
    $$bindings.iconPos(iconPos);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  return `<button${spread([escape_object($$restProps)], {})}>${iconPos === "left" ? `<div${add_attribute("class", icon, 0)}></div>` : ``} ${text ? `${escape(text)}` : ``} ${iconPos === "right" ? `<div${add_attribute("class", icon, 0)}></div>` : ``} ${slots.default ? slots.default({}) : ``}</button>`;
});
export {
  Button as B
};
