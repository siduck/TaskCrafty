<script lang="ts">
  interface strokeTypes {
    color?: string;
    width: number;
    class: string;
  }

  export let progress: number = 0;
  export let size: number = 150;
  export let activeStroke: strokeTypes = {
    color: "blue",
    width: 10,
    class: "",
  };
  export let inactiveStroke: strokeTypes = {
    color: "lightgray",
    width: 10,
    class: "",
  };
  export let text: string;
</script>

<svg
  viewBox={`0 0 ${size} ${size}`}
  width={size}
  height={size}
  class="[&_radialStrokeOff]:!stroke-pink"
>
  <circle
    cx={size / 2}
    cy={size / 2}
    r={size / 2 - 10}
    stroke={inactiveStroke.color}
    stroke-width={inactiveStroke.width}
    fill="transparent"
    class={inactiveStroke.class}
  />
  <circle
    cx={size / 2}
    cy={size / 2}
    r={size / 2 - 10}
    stroke={activeStroke.color}
    stroke-width={activeStroke.width}
    fill="transparent"
    stroke-dasharray={2 * Math.PI * (size / 2 - 10)}
    stroke-dashoffset={2 * Math.PI * (size / 2 - 10) * (1 - progress / 100)}
    class={activeStroke.class}
  />
  <text
    x={size / 2}
    y={size / 2}
    text-anchor="middle"
    dominant-baseline="middle"
  >
    {text}
  </text>
</svg>
