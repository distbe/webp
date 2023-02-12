import { _ as __vitePreload } from "../../chunks/preload-helper-f8376bb0.js";
import { S as SvelteComponent, i as init, s as safe_not_equal, D as create_slot, k as element, q as text, a as space, l as claim_element, m as children, r as claim_text, h as detach, c as claim_space, n as attr, K as toggle_class, b as insert_hydration, F as append_hydration, u as set_data, G as update_slot_base, H as get_all_dirty_from_scope, I as get_slot_changes, f as transition_in, t as transition_out, L as listen, M as prevent_default, N as stop_propagation, C as noop, O as run_all, o as onMount, P as svg_element, Q as claim_svg_element, v as binding_callbacks, R as set_input_value, T as to_number, U as add_render_callback, V as select_option, W as destroy_each, X as select_value, Y as bind, x as create_component, e as empty, Z as head_selector, y as claim_component, z as mount_component, _ as add_flush_callback, A as destroy_component, $ as bubble } from "../../chunks/index-bea779ca.js";
const Card_svelte_svelte_type_style_lang = "";
function create_if_block$2(ctx) {
  let button;
  let t_value = (
    /*on*/
    ctx[0] ? "On" : "Off"
  );
  let t;
  let mounted;
  let dispose;
  return {
    c() {
      button = element("button");
      t = text(t_value);
      this.h();
    },
    l(nodes) {
      button = claim_element(nodes, "BUTTON", { class: true });
      var button_nodes = children(button);
      t = claim_text(button_nodes, t_value);
      button_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(button, "class", "card__toggle svelte-use2lp");
    },
    m(target, anchor) {
      insert_hydration(target, button, anchor);
      append_hydration(button, t);
      if (!mounted) {
        dispose = listen(button, "click", prevent_default(
          /*toggle*/
          ctx[4]
        ));
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty & /*on*/
      1 && t_value !== (t_value = /*on*/
      ctx2[0] ? "On" : "Off"))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(button);
      mounted = false;
      dispose();
    }
  };
}
function create_fragment$5(ctx) {
  let div1;
  let dvi;
  let h3;
  let t0;
  let t1;
  let t2;
  let div0;
  let current;
  let if_block = !/*disabled*/
  ctx[1] && create_if_block$2(ctx);
  const default_slot_template = (
    /*#slots*/
    ctx[6].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[5],
    null
  );
  return {
    c() {
      div1 = element("div");
      dvi = element("dvi");
      h3 = element("h3");
      t0 = text(
        /*title*/
        ctx[2]
      );
      t1 = space();
      if (if_block)
        if_block.c();
      t2 = space();
      div0 = element("div");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      dvi = claim_element(div1_nodes, "DVI", { class: true });
      var dvi_nodes = children(dvi);
      h3 = claim_element(dvi_nodes, "H3", { class: true });
      var h3_nodes = children(h3);
      t0 = claim_text(
        h3_nodes,
        /*title*/
        ctx[2]
      );
      h3_nodes.forEach(detach);
      t1 = claim_space(dvi_nodes);
      if (if_block)
        if_block.l(dvi_nodes);
      dvi_nodes.forEach(detach);
      t2 = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      if (default_slot)
        default_slot.l(div0_nodes);
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(h3, "class", "card__title svelte-use2lp");
      attr(dvi, "class", "card__header svelte-use2lp");
      attr(div0, "class", "card__body");
      attr(div1, "class", "card svelte-use2lp");
      toggle_class(
        div1,
        "card--on",
        /*on*/
        ctx[0]
      );
      toggle_class(div1, "card--off", !/*on*/
      ctx[0]);
      toggle_class(
        div1,
        "card--color1",
        /*color*/
        ctx[3] === 1
      );
      toggle_class(
        div1,
        "card--color2",
        /*color*/
        ctx[3] === 2
      );
      toggle_class(
        div1,
        "card--color3",
        /*color*/
        ctx[3] === 3
      );
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, dvi);
      append_hydration(dvi, h3);
      append_hydration(h3, t0);
      append_hydration(dvi, t1);
      if (if_block)
        if_block.m(dvi, null);
      append_hydration(div1, t2);
      append_hydration(div1, div0);
      if (default_slot) {
        default_slot.m(div0, null);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (!current || dirty & /*title*/
      4)
        set_data(
          t0,
          /*title*/
          ctx2[2]
        );
      if (!/*disabled*/
      ctx2[1]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block$2(ctx2);
          if_block.c();
          if_block.m(dvi, null);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        32)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[5],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[5]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[5],
              dirty,
              null
            ),
            null
          );
        }
      }
      if (!current || dirty & /*on*/
      1) {
        toggle_class(
          div1,
          "card--on",
          /*on*/
          ctx2[0]
        );
      }
      if (!current || dirty & /*on*/
      1) {
        toggle_class(div1, "card--off", !/*on*/
        ctx2[0]);
      }
      if (!current || dirty & /*color*/
      8) {
        toggle_class(
          div1,
          "card--color1",
          /*color*/
          ctx2[3] === 1
        );
      }
      if (!current || dirty & /*color*/
      8) {
        toggle_class(
          div1,
          "card--color2",
          /*color*/
          ctx2[3] === 2
        );
      }
      if (!current || dirty & /*color*/
      8) {
        toggle_class(
          div1,
          "card--color3",
          /*color*/
          ctx2[3] === 3
        );
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div1);
      if (if_block)
        if_block.d();
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function instance$5($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { disabled = false } = $$props;
  let { on = false } = $$props;
  let { title } = $$props;
  let { color = 1 } = $$props;
  function toggle() {
    if (disabled) {
      return;
    }
    $$invalidate(0, on = !on);
  }
  $$self.$$set = ($$props2) => {
    if ("disabled" in $$props2)
      $$invalidate(1, disabled = $$props2.disabled);
    if ("on" in $$props2)
      $$invalidate(0, on = $$props2.on);
    if ("title" in $$props2)
      $$invalidate(2, title = $$props2.title);
    if ("color" in $$props2)
      $$invalidate(3, color = $$props2.color);
    if ("$$scope" in $$props2)
      $$invalidate(5, $$scope = $$props2.$$scope);
  };
  return [on, disabled, title, color, toggle, $$scope, slots];
}
class Card extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$5, create_fragment$5, safe_not_equal, { disabled: 1, on: 0, title: 2, color: 3 });
  }
}
const InputGroup_svelte_svelte_type_style_lang = "";
function create_fragment$4(ctx) {
  let div1;
  let div0;
  let t0;
  let t1;
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[2].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[1],
    null
  );
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      t0 = text(
        /*label*/
        ctx[0]
      );
      t1 = space();
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      t0 = claim_text(
        div0_nodes,
        /*label*/
        ctx[0]
      );
      div0_nodes.forEach(detach);
      t1 = claim_space(div1_nodes);
      if (default_slot)
        default_slot.l(div1_nodes);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "input-group__label svelte-1h09w72");
      attr(div1, "class", "input-group svelte-1h09w72");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, div0);
      append_hydration(div0, t0);
      append_hydration(div1, t1);
      if (default_slot) {
        default_slot.m(div1, null);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (!current || dirty & /*label*/
      1)
        set_data(
          t0,
          /*label*/
          ctx2[0]
        );
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        2)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[1],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[1]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[1],
              dirty,
              null
            ),
            null
          );
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div1);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function instance$4($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { label } = $$props;
  $$self.$$set = ($$props2) => {
    if ("label" in $$props2)
      $$invalidate(0, label = $$props2.label);
    if ("$$scope" in $$props2)
      $$invalidate(1, $$scope = $$props2.$$scope);
  };
  return [label, $$scope, slots];
}
class InputGroup extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$4, create_fragment$4, safe_not_equal, { label: 0 });
  }
}
const InputKnob_svelte_svelte_type_style_lang = "";
function create_if_block$1(ctx) {
  let svg;
  let circle;
  return {
    c() {
      svg = svg_element("svg");
      circle = svg_element("circle");
      this.h();
    },
    l(nodes) {
      svg = claim_svg_element(nodes, "svg", {
        width: true,
        height: true,
        class: true,
        viewBox: true
      });
      var svg_nodes = children(svg);
      circle = claim_svg_element(svg_nodes, "circle", {
        cx: true,
        cy: true,
        r: true,
        "stroke-width": true,
        fill: true,
        transform: true,
        "stroke-dasharray": true,
        "stroke-dashoffset": true
      });
      children(circle).forEach(detach);
      svg_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(circle, "cx", "50");
      attr(circle, "cy", "50");
      attr(circle, "r", "48.5");
      attr(circle, "stroke-width", "3");
      attr(circle, "fill", "transparent");
      attr(circle, "transform", "rotate(90 50 50)");
      attr(
        circle,
        "stroke-dasharray",
        /*controlDashArray*/
        ctx[2]
      );
      attr(
        circle,
        "stroke-dashoffset",
        /*controlDashOffset*/
        ctx[3]
      );
      attr(
        svg,
        "width",
        /*controlSize*/
        ctx[1]
      );
      attr(
        svg,
        "height",
        /*controlSize*/
        ctx[1]
      );
      attr(svg, "class", "stroke-current text-blue");
      attr(svg, "viewBox", "0 0 100 100");
    },
    m(target, anchor) {
      insert_hydration(target, svg, anchor);
      append_hydration(svg, circle);
    },
    p(ctx2, dirty) {
      if (dirty & /*controlDashArray*/
      4) {
        attr(
          circle,
          "stroke-dasharray",
          /*controlDashArray*/
          ctx2[2]
        );
      }
      if (dirty & /*controlDashOffset*/
      8) {
        attr(
          circle,
          "stroke-dashoffset",
          /*controlDashOffset*/
          ctx2[3]
        );
      }
      if (dirty & /*controlSize*/
      2) {
        attr(
          svg,
          "width",
          /*controlSize*/
          ctx2[1]
        );
      }
      if (dirty & /*controlSize*/
      2) {
        attr(
          svg,
          "height",
          /*controlSize*/
          ctx2[1]
        );
      }
    },
    d(detaching) {
      if (detaching)
        detach(svg);
    }
  };
}
function create_fragment$3(ctx) {
  let div1;
  let div0;
  let mounted;
  let dispose;
  let if_block = (
    /*controlSize*/
    ctx[1] > 0 && create_if_block$1(ctx)
  );
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      if (if_block)
        if_block.c();
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      if (if_block)
        if_block.l(div0_nodes);
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "input-knob_controlElem svelte-ypzlcc");
      attr(div1, "class", "input-knob svelte-ypzlcc");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, div0);
      if (if_block)
        if_block.m(div0, null);
      ctx[11](div0);
      if (!mounted) {
        dispose = [
          listen(div0, "wheel", stop_propagation(prevent_default(
            /*onWheel*/
            ctx[4]
          ))),
          listen(div0, "mousedown", prevent_default(
            /*onMouseDown*/
            ctx[5]
          )),
          listen(div0, "touchstart", prevent_default(
            /*onTouchStart*/
            ctx[6]
          ))
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (
        /*controlSize*/
        ctx2[1] > 0
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block$1(ctx2);
          if_block.c();
          if_block.m(div0, null);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div1);
      if (if_block)
        if_block.d();
      ctx[11](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$3($$self, $$props, $$invalidate) {
  let { value = null } = $$props;
  let { min } = $$props;
  let { max } = $$props;
  let { step = null } = $$props;
  let { controlElem = null } = $$props;
  let { controlSize = 0 } = $$props;
  let { controlDashArray = "" } = $$props;
  let { controlDashOffset = 0 } = $$props;
  onMount(() => {
    const rect = controlElem == null ? void 0 : controlElem.getBoundingClientRect();
    if (!rect) {
      return;
    }
    $$invalidate(1, controlSize = Math.min(rect.width, rect.height));
  });
  function setValue(v) {
    if (v === null) {
      return null;
    }
    v = Math.min(Math.max(v, min), max);
    if (step !== null) {
      const offset = min ?? 0;
      v = Math.round((v - offset) / step) * step + offset;
    }
    $$invalidate(7, value = v);
  }
  const D = 2 * Math.PI * 48.5;
  function setControlDash(v) {
    v = v ?? 0;
    const range = max - min;
    const ratio = range === 0 ? 0 : (v - min) / range;
    $$invalidate(2, controlDashArray = `${D * ratio} ${D * (1 - ratio)}`);
  }
  function onWheel(e) {
    if (e.deltaY) {
      $$invalidate(7, value = (value ?? min) + (e.deltaY > 0 ? 1 : -1) * (step ?? 1));
    }
  }
  function onMouseDown() {
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  }
  function onMouseMove(e) {
    const { left, top, width, height } = controlElem.getBoundingClientRect();
    const x = left + width / 2 - e.clientX;
    const y = top + height / 2 - e.clientY;
    $$invalidate(7, value = (Math.atan2(-x, y) / (2 * Math.PI) + 0.5) * (max - min) + min);
  }
  function onMouseUp(e) {
    e.preventDefault();
    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("mouseup", onMouseUp);
  }
  function onTouchStart() {
    window.addEventListener("touchmove", onTouchMove);
    window.addEventListener("touchend", onTouchEnd);
  }
  function onTouchMove(e) {
    if (e.touches.length == 1) {
      const { left, top, width, height } = controlElem.getBoundingClientRect();
      const x = left + width / 2 - e.touches[0].clientX;
      const y = top + height / 2 - e.touches[0].clientY;
      $$invalidate(7, value = (Math.atan2(-x, y) / (2 * Math.PI) + 0.5) * (max - min) + min);
    }
  }
  function onTouchEnd(e) {
    e.preventDefault();
    window.removeEventListener("touchmove", onTouchMove);
    window.removeEventListener("touchend", onTouchEnd);
  }
  function div0_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      controlElem = $$value;
      $$invalidate(0, controlElem);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("value" in $$props2)
      $$invalidate(7, value = $$props2.value);
    if ("min" in $$props2)
      $$invalidate(8, min = $$props2.min);
    if ("max" in $$props2)
      $$invalidate(9, max = $$props2.max);
    if ("step" in $$props2)
      $$invalidate(10, step = $$props2.step);
    if ("controlElem" in $$props2)
      $$invalidate(0, controlElem = $$props2.controlElem);
    if ("controlSize" in $$props2)
      $$invalidate(1, controlSize = $$props2.controlSize);
    if ("controlDashArray" in $$props2)
      $$invalidate(2, controlDashArray = $$props2.controlDashArray);
    if ("controlDashOffset" in $$props2)
      $$invalidate(3, controlDashOffset = $$props2.controlDashOffset);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*value*/
    128) {
      {
        setValue(value);
        setControlDash(value);
      }
    }
  };
  return [
    controlElem,
    controlSize,
    controlDashArray,
    controlDashOffset,
    onWheel,
    onMouseDown,
    onTouchStart,
    value,
    min,
    max,
    step,
    div0_binding
  ];
}
class InputKnob extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$3, create_fragment$3, safe_not_equal, {
      value: 7,
      min: 8,
      max: 9,
      step: 10,
      controlElem: 0,
      controlSize: 1,
      controlDashArray: 2,
      controlDashOffset: 3
    });
  }
}
const InputNumber_svelte_svelte_type_style_lang = "";
function create_fragment$2(ctx) {
  let input;
  let mounted;
  let dispose;
  return {
    c() {
      input = element("input");
      this.h();
    },
    l(nodes) {
      input = claim_element(nodes, "INPUT", {
        type: true,
        class: true,
        min: true,
        max: true,
        step: true
      });
      this.h();
    },
    h() {
      attr(input, "type", "number");
      attr(input, "class", "input-number svelte-122uc7s");
      attr(
        input,
        "min",
        /*min*/
        ctx[1]
      );
      attr(
        input,
        "max",
        /*max*/
        ctx[2]
      );
      attr(
        input,
        "step",
        /*step*/
        ctx[3]
      );
    },
    m(target, anchor) {
      insert_hydration(target, input, anchor);
      set_input_value(
        input,
        /*value*/
        ctx[0]
      );
      if (!mounted) {
        dispose = listen(
          input,
          "input",
          /*input_input_handler*/
          ctx[4]
        );
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & /*min*/
      2) {
        attr(
          input,
          "min",
          /*min*/
          ctx2[1]
        );
      }
      if (dirty & /*max*/
      4) {
        attr(
          input,
          "max",
          /*max*/
          ctx2[2]
        );
      }
      if (dirty & /*step*/
      8) {
        attr(
          input,
          "step",
          /*step*/
          ctx2[3]
        );
      }
      if (dirty & /*value*/
      1 && to_number(input.value) !== /*value*/
      ctx2[0]) {
        set_input_value(
          input,
          /*value*/
          ctx2[0]
        );
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(input);
      mounted = false;
      dispose();
    }
  };
}
function instance$2($$self, $$props, $$invalidate) {
  let { value = null } = $$props;
  let { min = null } = $$props;
  let { max = null } = $$props;
  let { step = null } = $$props;
  function setValue(v) {
    if (v === null) {
      return null;
    }
    v = Math.min(Math.max(v, min ?? -Infinity), max ?? Infinity);
    if (step !== null) {
      const offset = min ?? 0;
      v = Math.round((v - offset) / step) * step + offset;
    }
    return v;
  }
  function input_input_handler() {
    value = to_number(this.value);
    $$invalidate(0, value);
  }
  $$self.$$set = ($$props2) => {
    if ("value" in $$props2)
      $$invalidate(0, value = $$props2.value);
    if ("min" in $$props2)
      $$invalidate(1, min = $$props2.min);
    if ("max" in $$props2)
      $$invalidate(2, max = $$props2.max);
    if ("step" in $$props2)
      $$invalidate(3, step = $$props2.step);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*value*/
    1) {
      $$invalidate(0, value = setValue(value));
    }
  };
  return [value, min, max, step, input_input_handler];
}
class InputNumber extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$2, create_fragment$2, safe_not_equal, { value: 0, min: 1, max: 2, step: 3 });
  }
}
const InputSelect_svelte_svelte_type_style_lang = "";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[4] = list[i];
  return child_ctx;
}
function create_each_block(ctx) {
  let option;
  let t_value = (
    /*option*/
    ctx[4].label + ""
  );
  let t;
  let option_value_value;
  return {
    c() {
      option = element("option");
      t = text(t_value);
      this.h();
    },
    l(nodes) {
      option = claim_element(nodes, "OPTION", {});
      var option_nodes = children(option);
      t = claim_text(option_nodes, t_value);
      option_nodes.forEach(detach);
      this.h();
    },
    h() {
      option.__value = option_value_value = /*option*/
      ctx[4].value;
      option.value = option.__value;
    },
    m(target, anchor) {
      insert_hydration(target, option, anchor);
      append_hydration(option, t);
    },
    p(ctx2, dirty) {
      if (dirty & /*innerOptions*/
      2 && t_value !== (t_value = /*option*/
      ctx2[4].label + ""))
        set_data(t, t_value);
      if (dirty & /*innerOptions*/
      2 && option_value_value !== (option_value_value = /*option*/
      ctx2[4].value)) {
        option.__value = option_value_value;
        option.value = option.__value;
      }
    },
    d(detaching) {
      if (detaching)
        detach(option);
    }
  };
}
function create_fragment$1(ctx) {
  let select;
  let mounted;
  let dispose;
  let each_value = (
    /*innerOptions*/
    ctx[1]
  );
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  return {
    c() {
      select = element("select");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l(nodes) {
      select = claim_element(nodes, "SELECT", { class: true });
      var select_nodes = children(select);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(select_nodes);
      }
      select_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(select, "class", "input-select svelte-1eoujzt");
      if (
        /*value*/
        ctx[0] === void 0
      )
        add_render_callback(() => (
          /*select_change_handler*/
          ctx[3].call(select)
        ));
    },
    m(target, anchor) {
      insert_hydration(target, select, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(select, null);
      }
      select_option(
        select,
        /*value*/
        ctx[0]
      );
      if (!mounted) {
        dispose = listen(
          select,
          "change",
          /*select_change_handler*/
          ctx[3]
        );
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & /*innerOptions*/
      2) {
        each_value = /*innerOptions*/
        ctx2[1];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(select, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
      if (dirty & /*value, innerOptions*/
      3) {
        select_option(
          select,
          /*value*/
          ctx2[0]
        );
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(select);
      destroy_each(each_blocks, detaching);
      mounted = false;
      dispose();
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let innerOptions;
  let { value = null } = $$props;
  let { options = [] } = $$props;
  function select_change_handler() {
    value = select_value(this);
    $$invalidate(0, value);
    $$invalidate(1, innerOptions), $$invalidate(2, options);
  }
  $$self.$$set = ($$props2) => {
    if ("value" in $$props2)
      $$invalidate(0, value = $$props2.value);
    if ("options" in $$props2)
      $$invalidate(2, options = $$props2.options);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*options*/
    4) {
      $$invalidate(1, innerOptions = options.map((option) => {
        if (typeof option === "string") {
          return { label: option, value: option };
        }
        return option;
      }));
    }
  };
  return [value, innerOptions, options, select_change_handler];
}
class InputSelect extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, { value: 0, options: 2 });
  }
}
function download(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  document.body.appendChild(a);
  a.href = url;
  a.download = filename;
  a.click();
  setTimeout(() => {
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  }, 0);
}
let vipsPromise = null;
function loadVips() {
  if (vipsPromise) {
    return vipsPromise;
  }
  vipsPromise = (async () => {
    const Vips = await __vitePreload(() => import(
      // @ts-ignore
      // 'wasm-vips'
      "/node_modules/wasm-vips/lib/vips-es6.js"
    ), true ? [] : void 0, import.meta.url).then((m) => m.default);
    return await Vips();
  })();
  return vipsPromise;
}
function resize(vips, im, size, fit) {
  const imageSize = [im.width, im.height];
  const [hshrink, vshrink] = shrink(imageSize, size, fit);
  im = im.resize(1 / hshrink, {
    vscale: 1 / vshrink,
    kernel: "lanczos3"
  });
  if (fit === "Contain") {
    imageSize[0] = im.width;
    imageSize[1] = im.height;
    const [left, top] = embed(imageSize, size);
    const width = Math.max(imageSize[0], size[0]);
    const height = Math.max(imageSize[1], size[1]);
    if (!im.hasAlpha()) {
      const alphaBand = vips.Image.newMatrix(...imageSize).newFromImage(255).cast(im.format);
      im = im.bandjoin(alphaBand);
    }
    im = im.embed(left, top, width, height, {
      extend: "background",
      background: Array.from({ length: im.bands }).fill(0)
    });
  } else if (fit == "Cover") {
    imageSize[0] = im.width;
    imageSize[1] = im.height;
    const [left, top] = crop(imageSize, size);
    const width = Math.min(imageSize[0], size[0]);
    const height = Math.min(imageSize[1], size[1]);
    im = im.extractArea(left, top, width, height);
  }
  return im;
}
function shrink([width, height], [targetWidth, targetHeight], fit) {
  let hShrink = 1;
  let vShrink = 1;
  if (targetWidth > 0 && targetHeight > 0) {
    hShrink = width / targetWidth;
    vShrink = height / targetHeight;
    switch (fit) {
      case "Cover":
      case "Outside":
        if (hShrink < vShrink) {
          vShrink = hShrink;
        } else {
          hShrink = vShrink;
        }
        break;
      case "Contain":
      case "Inside":
        if (hShrink > vShrink) {
          vShrink = hShrink;
        } else {
          hShrink = vShrink;
        }
        break;
    }
  } else if (targetWidth > 0) {
    hShrink = width / targetWidth;
    if (fit !== "Fill") {
      vShrink = hShrink;
    }
  } else if (targetHeight > 0) {
    vShrink = height / targetHeight;
    if (fit !== "Fill") {
      hShrink = vShrink;
    }
  }
  hShrink = Math.min(hShrink, width);
  vShrink = Math.min(vShrink, height);
  return [hShrink, vShrink];
}
function crop([width, height], [targetWidth, targetHeight]) {
  return [
    ~~((width - targetWidth + 1) / 2),
    ~~((height - targetHeight + 1) / 2)
  ];
}
function embed([width, height], [targetWidth, targetHeight]) {
  return [
    ~~((targetWidth - width) / 2),
    ~~((targetHeight - height) / 2)
  ];
}
const _page_svelte_svelte_type_style_lang = "";
function create_default_slot_7(ctx) {
  let div1;
  let inputnumber;
  let updating_value;
  let t;
  let div0;
  let inputknob;
  let updating_value_1;
  let current;
  function inputnumber_value_binding(value) {
    ctx[13](value);
  }
  let inputnumber_props = { max: 100, min: 0, step: 1 };
  if (
    /*inputQuality*/
    ctx[2] !== void 0
  ) {
    inputnumber_props.value = /*inputQuality*/
    ctx[2];
  }
  inputnumber = new InputNumber({ props: inputnumber_props });
  binding_callbacks.push(() => bind(inputnumber, "value", inputnumber_value_binding));
  function inputknob_value_binding(value) {
    ctx[14](value);
  }
  let inputknob_props = { max: 100, min: 0 };
  if (
    /*inputQuality*/
    ctx[2] !== void 0
  ) {
    inputknob_props.value = /*inputQuality*/
    ctx[2];
  }
  inputknob = new InputKnob({ props: inputknob_props });
  binding_callbacks.push(() => bind(inputknob, "value", inputknob_value_binding));
  return {
    c() {
      div1 = element("div");
      create_component(inputnumber.$$.fragment);
      t = space();
      div0 = element("div");
      create_component(inputknob.$$.fragment);
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      claim_component(inputnumber.$$.fragment, div1_nodes);
      t = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      claim_component(inputknob.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "w-28 mx-auto");
      attr(div1, "class", "space-y-4");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      mount_component(inputnumber, div1, null);
      append_hydration(div1, t);
      append_hydration(div1, div0);
      mount_component(inputknob, div0, null);
      current = true;
    },
    p(ctx2, dirty) {
      const inputnumber_changes = {};
      if (!updating_value && dirty & /*inputQuality*/
      4) {
        updating_value = true;
        inputnumber_changes.value = /*inputQuality*/
        ctx2[2];
        add_flush_callback(() => updating_value = false);
      }
      inputnumber.$set(inputnumber_changes);
      const inputknob_changes = {};
      if (!updating_value_1 && dirty & /*inputQuality*/
      4) {
        updating_value_1 = true;
        inputknob_changes.value = /*inputQuality*/
        ctx2[2];
        add_flush_callback(() => updating_value_1 = false);
      }
      inputknob.$set(inputknob_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(inputnumber.$$.fragment, local);
      transition_in(inputknob.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(inputnumber.$$.fragment, local);
      transition_out(inputknob.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div1);
      destroy_component(inputnumber);
      destroy_component(inputknob);
    }
  };
}
function create_default_slot_6(ctx) {
  let inputgroup;
  let current;
  inputgroup = new InputGroup({
    props: {
      label: "Quality",
      $$slots: { default: [create_default_slot_7] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(inputgroup.$$.fragment);
    },
    l(nodes) {
      claim_component(inputgroup.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(inputgroup, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const inputgroup_changes = {};
      if (dirty & /*$$scope, inputQuality*/
      33554436) {
        inputgroup_changes.$$scope = { dirty, ctx: ctx2 };
      }
      inputgroup.$set(inputgroup_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(inputgroup.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(inputgroup.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(inputgroup, detaching);
    }
  };
}
function create_default_slot_5(ctx) {
  let inputnumber;
  let updating_value;
  let current;
  function inputnumber_value_binding_1(value) {
    ctx[15](value);
  }
  let inputnumber_props = { min: 0, step: 1 };
  if (
    /*inputWidth*/
    ctx[3] !== void 0
  ) {
    inputnumber_props.value = /*inputWidth*/
    ctx[3];
  }
  inputnumber = new InputNumber({ props: inputnumber_props });
  binding_callbacks.push(() => bind(inputnumber, "value", inputnumber_value_binding_1));
  return {
    c() {
      create_component(inputnumber.$$.fragment);
    },
    l(nodes) {
      claim_component(inputnumber.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(inputnumber, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const inputnumber_changes = {};
      if (!updating_value && dirty & /*inputWidth*/
      8) {
        updating_value = true;
        inputnumber_changes.value = /*inputWidth*/
        ctx2[3];
        add_flush_callback(() => updating_value = false);
      }
      inputnumber.$set(inputnumber_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(inputnumber.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(inputnumber.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(inputnumber, detaching);
    }
  };
}
function create_default_slot_4(ctx) {
  let inputnumber;
  let updating_value;
  let current;
  function inputnumber_value_binding_2(value) {
    ctx[16](value);
  }
  let inputnumber_props = { min: 0, step: 1 };
  if (
    /*inputHeight*/
    ctx[4] !== void 0
  ) {
    inputnumber_props.value = /*inputHeight*/
    ctx[4];
  }
  inputnumber = new InputNumber({ props: inputnumber_props });
  binding_callbacks.push(() => bind(inputnumber, "value", inputnumber_value_binding_2));
  return {
    c() {
      create_component(inputnumber.$$.fragment);
    },
    l(nodes) {
      claim_component(inputnumber.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(inputnumber, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const inputnumber_changes = {};
      if (!updating_value && dirty & /*inputHeight*/
      16) {
        updating_value = true;
        inputnumber_changes.value = /*inputHeight*/
        ctx2[4];
        add_flush_callback(() => updating_value = false);
      }
      inputnumber.$set(inputnumber_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(inputnumber.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(inputnumber.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(inputnumber, detaching);
    }
  };
}
function create_default_slot_3(ctx) {
  let inputselect;
  let updating_value;
  let current;
  function inputselect_value_binding(value) {
    ctx[17](value);
  }
  let inputselect_props = {
    options: ["Contain", "Cover", "Fill", "Inside", "Outside"]
  };
  if (
    /*inputFit*/
    ctx[5] !== void 0
  ) {
    inputselect_props.value = /*inputFit*/
    ctx[5];
  }
  inputselect = new InputSelect({ props: inputselect_props });
  binding_callbacks.push(() => bind(inputselect, "value", inputselect_value_binding));
  return {
    c() {
      create_component(inputselect.$$.fragment);
    },
    l(nodes) {
      claim_component(inputselect.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(inputselect, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const inputselect_changes = {};
      if (!updating_value && dirty & /*inputFit*/
      32) {
        updating_value = true;
        inputselect_changes.value = /*inputFit*/
        ctx2[5];
        add_flush_callback(() => updating_value = false);
      }
      inputselect.$set(inputselect_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(inputselect.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(inputselect.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(inputselect, detaching);
    }
  };
}
function create_default_slot_2(ctx) {
  let div;
  let inputgroup0;
  let t0;
  let inputgroup1;
  let t1;
  let inputgroup2;
  let current;
  inputgroup0 = new InputGroup({
    props: {
      label: "Width",
      $$slots: { default: [create_default_slot_5] },
      $$scope: { ctx }
    }
  });
  inputgroup1 = new InputGroup({
    props: {
      label: "Height",
      $$slots: { default: [create_default_slot_4] },
      $$scope: { ctx }
    }
  });
  inputgroup2 = new InputGroup({
    props: {
      label: "Fit",
      $$slots: { default: [create_default_slot_3] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      div = element("div");
      create_component(inputgroup0.$$.fragment);
      t0 = space();
      create_component(inputgroup1.$$.fragment);
      t1 = space();
      create_component(inputgroup2.$$.fragment);
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(inputgroup0.$$.fragment, div_nodes);
      t0 = claim_space(div_nodes);
      claim_component(inputgroup1.$$.fragment, div_nodes);
      t1 = claim_space(div_nodes);
      claim_component(inputgroup2.$$.fragment, div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "space-y-2");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      mount_component(inputgroup0, div, null);
      append_hydration(div, t0);
      mount_component(inputgroup1, div, null);
      append_hydration(div, t1);
      mount_component(inputgroup2, div, null);
      current = true;
    },
    p(ctx2, dirty) {
      const inputgroup0_changes = {};
      if (dirty & /*$$scope, inputWidth*/
      33554440) {
        inputgroup0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      inputgroup0.$set(inputgroup0_changes);
      const inputgroup1_changes = {};
      if (dirty & /*$$scope, inputHeight*/
      33554448) {
        inputgroup1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      inputgroup1.$set(inputgroup1_changes);
      const inputgroup2_changes = {};
      if (dirty & /*$$scope, inputFit*/
      33554464) {
        inputgroup2_changes.$$scope = { dirty, ctx: ctx2 };
      }
      inputgroup2.$set(inputgroup2_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(inputgroup0.$$.fragment, local);
      transition_in(inputgroup1.$$.fragment, local);
      transition_in(inputgroup2.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(inputgroup0.$$.fragment, local);
      transition_out(inputgroup1.$$.fragment, local);
      transition_out(inputgroup2.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(inputgroup0);
      destroy_component(inputgroup1);
      destroy_component(inputgroup2);
    }
  };
}
function create_default_slot_1(ctx) {
  let inputnumber;
  let updating_value;
  let current;
  function inputnumber_value_binding_3(value) {
    ctx[19](value);
  }
  let inputnumber_props = { min: 0 };
  if (
    /*inputScale*/
    ctx[6] !== void 0
  ) {
    inputnumber_props.value = /*inputScale*/
    ctx[6];
  }
  inputnumber = new InputNumber({ props: inputnumber_props });
  binding_callbacks.push(() => bind(inputnumber, "value", inputnumber_value_binding_3));
  return {
    c() {
      create_component(inputnumber.$$.fragment);
    },
    l(nodes) {
      claim_component(inputnumber.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(inputnumber, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const inputnumber_changes = {};
      if (!updating_value && dirty & /*inputScale*/
      64) {
        updating_value = true;
        inputnumber_changes.value = /*inputScale*/
        ctx2[6];
        add_flush_callback(() => updating_value = false);
      }
      inputnumber.$set(inputnumber_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(inputnumber.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(inputnumber.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(inputnumber, detaching);
    }
  };
}
function create_default_slot(ctx) {
  let div;
  let inputgroup;
  let current;
  inputgroup = new InputGroup({
    props: {
      label: "Scale",
      $$slots: { default: [create_default_slot_1] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      div = element("div");
      create_component(inputgroup.$$.fragment);
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(inputgroup.$$.fragment, div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "space-y-2");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      mount_component(inputgroup, div, null);
      current = true;
    },
    p(ctx2, dirty) {
      const inputgroup_changes = {};
      if (dirty & /*$$scope, inputScale*/
      33554496) {
        inputgroup_changes.$$scope = { dirty, ctx: ctx2 };
      }
      inputgroup.$set(inputgroup_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(inputgroup.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(inputgroup.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(inputgroup);
    }
  };
}
function create_if_block(ctx) {
  let div;
  let mounted;
  let dispose;
  return {
    c() {
      div = element("div");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      children(div).forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "fixed inset-0 border-4 border-blue flex items-center justify-center bg-black bg-opacity-50");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if (!mounted) {
        dispose = [
          listen(div, "dragover", stop_propagation(prevent_default(
            /*dragover_handler*/
            ctx[12]
          ))),
          listen(div, "dragleave", stop_propagation(prevent_default(
            /*onDragLeave*/
            ctx[9]
          ))),
          listen(div, "drop", stop_propagation(prevent_default(
            /*onDrop*/
            ctx[11]
          )))
        ];
        mounted = true;
      }
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(div);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_fragment(ctx) {
  let meta0;
  let link0;
  let link1;
  let link2;
  let link3;
  let link4;
  let link5;
  let link6;
  let link7;
  let link8;
  let link9;
  let link10;
  let link11;
  let link12;
  let link13;
  let meta1;
  let meta2;
  let meta3;
  let t0;
  let t1;
  let div5;
  let section0;
  let div1;
  let div0;
  let card0;
  let t2;
  let card1;
  let updating_on;
  let t3;
  let card2;
  let updating_on_1;
  let t4;
  let section1;
  let div4;
  let div2;
  let t5;
  let t6;
  let div3;
  let button;
  let t7;
  let t8;
  let if_block_anchor;
  let current;
  let mounted;
  let dispose;
  card0 = new Card({
    props: {
      title: "Quality",
      on: true,
      disabled: true,
      $$slots: { default: [create_default_slot_6] },
      $$scope: { ctx }
    }
  });
  function card1_on_binding(value) {
    ctx[18](value);
  }
  let card1_props = {
    title: "Size",
    color: 2,
    $$slots: { default: [create_default_slot_2] },
    $$scope: { ctx }
  };
  if (
    /*onSize*/
    ctx[0] !== void 0
  ) {
    card1_props.on = /*onSize*/
    ctx[0];
  }
  card1 = new Card({ props: card1_props });
  binding_callbacks.push(() => bind(card1, "on", card1_on_binding));
  function card2_on_binding(value) {
    ctx[20](value);
  }
  let card2_props = {
    title: "Scale",
    color: 3,
    $$slots: { default: [create_default_slot] },
    $$scope: { ctx }
  };
  if (
    /*onScale*/
    ctx[1] !== void 0
  ) {
    card2_props.on = /*onScale*/
    ctx[1];
  }
  card2 = new Card({ props: card2_props });
  binding_callbacks.push(() => bind(card2, "on", card2_on_binding));
  let if_block = (
    /*isDragging*/
    ctx[7] && create_if_block(ctx)
  );
  return {
    c() {
      meta0 = element("meta");
      link0 = element("link");
      link1 = element("link");
      link2 = element("link");
      link3 = element("link");
      link4 = element("link");
      link5 = element("link");
      link6 = element("link");
      link7 = element("link");
      link8 = element("link");
      link9 = element("link");
      link10 = element("link");
      link11 = element("link");
      link12 = element("link");
      link13 = element("link");
      meta1 = element("meta");
      meta2 = element("meta");
      meta3 = element("meta");
      t0 = space();
      t1 = space();
      div5 = element("div");
      section0 = element("section");
      div1 = element("div");
      div0 = element("div");
      create_component(card0.$$.fragment);
      t2 = space();
      create_component(card1.$$.fragment);
      t3 = space();
      create_component(card2.$$.fragment);
      t4 = space();
      section1 = element("section");
      div4 = element("div");
      div2 = element("div");
      t5 = text("Drop your images here to start!");
      t6 = space();
      div3 = element("div");
      button = element("button");
      t7 = text("or Click to Upload Images");
      t8 = space();
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
      this.h();
    },
    l(nodes) {
      const head_nodes = head_selector("svelte-thsy8v", document.head);
      meta0 = claim_element(head_nodes, "META", { name: true, content: true });
      link0 = claim_element(head_nodes, "LINK", { rel: true, sizes: true, href: true });
      link1 = claim_element(head_nodes, "LINK", { rel: true, sizes: true, href: true });
      link2 = claim_element(head_nodes, "LINK", { rel: true, sizes: true, href: true });
      link3 = claim_element(head_nodes, "LINK", { rel: true, sizes: true, href: true });
      link4 = claim_element(head_nodes, "LINK", { rel: true, sizes: true, href: true });
      link5 = claim_element(head_nodes, "LINK", { rel: true, sizes: true, href: true });
      link6 = claim_element(head_nodes, "LINK", { rel: true, sizes: true, href: true });
      link7 = claim_element(head_nodes, "LINK", { rel: true, sizes: true, href: true });
      link8 = claim_element(head_nodes, "LINK", { rel: true, sizes: true, href: true });
      link9 = claim_element(head_nodes, "LINK", {
        rel: true,
        type: true,
        sizes: true,
        href: true
      });
      link10 = claim_element(head_nodes, "LINK", {
        rel: true,
        type: true,
        sizes: true,
        href: true
      });
      link11 = claim_element(head_nodes, "LINK", {
        rel: true,
        type: true,
        sizes: true,
        href: true
      });
      link12 = claim_element(head_nodes, "LINK", {
        rel: true,
        type: true,
        sizes: true,
        href: true
      });
      link13 = claim_element(head_nodes, "LINK", { rel: true, href: true });
      meta1 = claim_element(head_nodes, "META", { name: true, content: true });
      meta2 = claim_element(head_nodes, "META", { name: true, content: true });
      meta3 = claim_element(head_nodes, "META", { name: true, content: true });
      head_nodes.forEach(detach);
      t0 = claim_space(nodes);
      t1 = claim_space(nodes);
      div5 = claim_element(nodes, "DIV", { class: true });
      var div5_nodes = children(div5);
      section0 = claim_element(div5_nodes, "SECTION", {});
      var section0_nodes = children(section0);
      div1 = claim_element(section0_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      claim_component(card0.$$.fragment, div0_nodes);
      t2 = claim_space(div0_nodes);
      claim_component(card1.$$.fragment, div0_nodes);
      t3 = claim_space(div0_nodes);
      claim_component(card2.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      section0_nodes.forEach(detach);
      t4 = claim_space(div5_nodes);
      section1 = claim_element(div5_nodes, "SECTION", { class: true });
      var section1_nodes = children(section1);
      div4 = claim_element(section1_nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      div2 = claim_element(div4_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      t5 = claim_text(div2_nodes, "Drop your images here to start!");
      div2_nodes.forEach(detach);
      t6 = claim_space(div4_nodes);
      div3 = claim_element(div4_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      button = claim_element(div3_nodes, "BUTTON", { class: true });
      var button_nodes = children(button);
      t7 = claim_text(button_nodes, "or Click to Upload Images");
      button_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      div4_nodes.forEach(detach);
      section1_nodes.forEach(detach);
      div5_nodes.forEach(detach);
      t8 = claim_space(nodes);
      if (if_block)
        if_block.l(nodes);
      if_block_anchor = empty();
      this.h();
    },
    h() {
      document.title = "WebP converter by dist.be";
      attr(meta0, "name", "description");
      attr(meta0, "content", "Convert Images to WebP for Faster Loading and Better User Experience. Start Optimizing Today!");
      attr(link0, "rel", "apple-touch-icon");
      attr(link0, "sizes", "57x57");
      attr(link0, "href", "/apple-icon-57x57.png");
      attr(link1, "rel", "apple-touch-icon");
      attr(link1, "sizes", "60x60");
      attr(link1, "href", "/apple-icon-60x60.png");
      attr(link2, "rel", "apple-touch-icon");
      attr(link2, "sizes", "72x72");
      attr(link2, "href", "/apple-icon-72x72.png");
      attr(link3, "rel", "apple-touch-icon");
      attr(link3, "sizes", "76x76");
      attr(link3, "href", "/apple-icon-76x76.png");
      attr(link4, "rel", "apple-touch-icon");
      attr(link4, "sizes", "114x114");
      attr(link4, "href", "/apple-icon-114x114.png");
      attr(link5, "rel", "apple-touch-icon");
      attr(link5, "sizes", "120x120");
      attr(link5, "href", "/apple-icon-120x120.png");
      attr(link6, "rel", "apple-touch-icon");
      attr(link6, "sizes", "144x144");
      attr(link6, "href", "/apple-icon-144x144.png");
      attr(link7, "rel", "apple-touch-icon");
      attr(link7, "sizes", "152x152");
      attr(link7, "href", "/apple-icon-152x152.png");
      attr(link8, "rel", "apple-touch-icon");
      attr(link8, "sizes", "180x180");
      attr(link8, "href", "/apple-icon-180x180.png");
      attr(link9, "rel", "icon");
      attr(link9, "type", "image/png");
      attr(link9, "sizes", "192x192");
      attr(link9, "href", "/android-icon-192x192.png");
      attr(link10, "rel", "icon");
      attr(link10, "type", "image/png");
      attr(link10, "sizes", "32x32");
      attr(link10, "href", "/favicon-32x32.png");
      attr(link11, "rel", "icon");
      attr(link11, "type", "image/png");
      attr(link11, "sizes", "96x96");
      attr(link11, "href", "/favicon-96x96.png");
      attr(link12, "rel", "icon");
      attr(link12, "type", "image/png");
      attr(link12, "sizes", "16x16");
      attr(link12, "href", "/favicon-16x16.png");
      attr(link13, "rel", "manifest");
      attr(link13, "href", "/manifest.json");
      attr(meta1, "name", "msapplication-TileColor");
      attr(meta1, "content", "#ffffff");
      attr(meta2, "name", "msapplication-TileImage");
      attr(meta2, "content", "/ms-icon-144x144.png");
      attr(meta3, "name", "theme-color");
      attr(meta3, "content", "#ffffff");
      attr(div0, "class", "flex gap-8 items-center justify-center");
      attr(div1, "class", "container mx-auto px-4");
      attr(div2, "class", "text-white font-light text-center");
      attr(button, "class", "text-white font-light text-center text-sm underline");
      attr(div3, "class", "text-center");
      attr(div4, "class", "dropzone space-y-1 svelte-1hi61xe");
      attr(section1, "class", "flex-1 flex items-center justify-center");
      attr(div5, "class", "flex flex-col h-full gap-y-6");
    },
    m(target, anchor) {
      append_hydration(document.head, meta0);
      append_hydration(document.head, link0);
      append_hydration(document.head, link1);
      append_hydration(document.head, link2);
      append_hydration(document.head, link3);
      append_hydration(document.head, link4);
      append_hydration(document.head, link5);
      append_hydration(document.head, link6);
      append_hydration(document.head, link7);
      append_hydration(document.head, link8);
      append_hydration(document.head, link9);
      append_hydration(document.head, link10);
      append_hydration(document.head, link11);
      append_hydration(document.head, link12);
      append_hydration(document.head, link13);
      append_hydration(document.head, meta1);
      append_hydration(document.head, meta2);
      append_hydration(document.head, meta3);
      insert_hydration(target, t0, anchor);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, div5, anchor);
      append_hydration(div5, section0);
      append_hydration(section0, div1);
      append_hydration(div1, div0);
      mount_component(card0, div0, null);
      append_hydration(div0, t2);
      mount_component(card1, div0, null);
      append_hydration(div0, t3);
      mount_component(card2, div0, null);
      append_hydration(div5, t4);
      append_hydration(div5, section1);
      append_hydration(section1, div4);
      append_hydration(div4, div2);
      append_hydration(div2, t5);
      append_hydration(div4, t6);
      append_hydration(div4, div3);
      append_hydration(div3, button);
      append_hydration(button, t7);
      insert_hydration(target, t8, anchor);
      if (if_block)
        if_block.m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
      if (!mounted) {
        dispose = [
          listen(document.body, "dragenter", stop_propagation(prevent_default(
            /*onDragEnter*/
            ctx[8]
          ))),
          listen(
            button,
            "click",
            /*onClickUpload*/
            ctx[10]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      const card0_changes = {};
      if (dirty & /*$$scope, inputQuality*/
      33554436) {
        card0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      card0.$set(card0_changes);
      const card1_changes = {};
      if (dirty & /*$$scope, inputFit, inputHeight, inputWidth*/
      33554488) {
        card1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      if (!updating_on && dirty & /*onSize*/
      1) {
        updating_on = true;
        card1_changes.on = /*onSize*/
        ctx2[0];
        add_flush_callback(() => updating_on = false);
      }
      card1.$set(card1_changes);
      const card2_changes = {};
      if (dirty & /*$$scope, inputScale*/
      33554496) {
        card2_changes.$$scope = { dirty, ctx: ctx2 };
      }
      if (!updating_on_1 && dirty & /*onScale*/
      2) {
        updating_on_1 = true;
        card2_changes.on = /*onScale*/
        ctx2[1];
        add_flush_callback(() => updating_on_1 = false);
      }
      card2.$set(card2_changes);
      if (
        /*isDragging*/
        ctx2[7]
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block(ctx2);
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(card0.$$.fragment, local);
      transition_in(card1.$$.fragment, local);
      transition_in(card2.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(card0.$$.fragment, local);
      transition_out(card1.$$.fragment, local);
      transition_out(card2.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      detach(meta0);
      detach(link0);
      detach(link1);
      detach(link2);
      detach(link3);
      detach(link4);
      detach(link5);
      detach(link6);
      detach(link7);
      detach(link8);
      detach(link9);
      detach(link10);
      detach(link11);
      detach(link12);
      detach(link13);
      detach(meta1);
      detach(meta2);
      detach(meta3);
      if (detaching)
        detach(t0);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(div5);
      destroy_component(card0);
      destroy_component(card1);
      destroy_component(card2);
      if (detaching)
        detach(t8);
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let isDragging;
  let inputQuality = 100;
  let onSize = false;
  let inputWidth = null;
  let inputHeight = null;
  let inputFit = "Cover";
  let onScale = false;
  let inputScale = 1;
  function toggledOnSize(onSize2) {
    if (onSize2 && onScale) {
      $$invalidate(1, onScale = false);
    }
  }
  function toggledOnScale(onScale2) {
    if (onScale2 && onSize) {
      $$invalidate(0, onSize = false);
    }
  }
  function onDragEnter(e) {
    $$invalidate(7, isDragging = true);
  }
  function onDragLeave(e) {
    $$invalidate(7, isDragging = false);
  }
  async function onClickUpload() {
    const fileDialog = await __vitePreload(() => import("../../chunks/file-dialog.min-2f0a7f89.js").then((n) => n.f), true ? [] : void 0, import.meta.url).then((m) => m.default);
    const files = await fileDialog({ accept: "image/*", multiple: true });
    await transform([...files]);
  }
  async function onDrop(e) {
    var _a;
    $$invalidate(7, isDragging = false);
    await transform([...((_a = e.dataTransfer) == null ? void 0 : _a.files) ?? []]);
  }
  async function transform(files) {
    if (files.length === 0) {
      return;
    }
    const vips = await loadVips();
    const zip = files.length > 1 ? await __vitePreload(() => import("../../chunks/jszip.min-e4871d4f.js").then((n) => n.j), true ? [] : void 0, import.meta.url).then((m) => new m.default()) : null;
    const filenames = /* @__PURE__ */ new Set();
    for (const [fileIndex, file] of files.entries()) {
      fileIndex / files.length;
      let im = vips.Image.newFromBuffer(await file.arrayBuffer(), file.name);
      if (onSize && (inputWidth || inputHeight)) {
        im = resize(vips, im, [inputWidth ?? 0, inputHeight ?? 0], inputFit);
      } else if (onScale && inputScale) {
        im = im.resize(inputScale, {});
      }
      const quality = ~~inputQuality;
      const buffer = await im.writeToBuffer(`.webp[Q=${quality}]`);
      const blob = new Blob([buffer], { type: "image/webp" });
      const filename = file.name.replace(/\.[^/.]+$/, "");
      if (files.length === 1) {
        download(blob, `${filename}.webp`);
        return;
      } else {
        let newFilename = filename;
        let i = 1;
        while (filenames.has(newFilename)) {
          newFilename = `${filename} (${i})`;
          i++;
        }
        zip.file(`${newFilename}.webp`, blob);
      }
    }
    if (zip) {
      const blob = await zip.generateAsync({ type: "blob" });
      download(blob, "images.zip");
    }
  }
  function dragover_handler(event) {
    bubble.call(this, $$self, event);
  }
  function inputnumber_value_binding(value) {
    inputQuality = value;
    $$invalidate(2, inputQuality);
  }
  function inputknob_value_binding(value) {
    inputQuality = value;
    $$invalidate(2, inputQuality);
  }
  function inputnumber_value_binding_1(value) {
    inputWidth = value;
    $$invalidate(3, inputWidth);
  }
  function inputnumber_value_binding_2(value) {
    inputHeight = value;
    $$invalidate(4, inputHeight);
  }
  function inputselect_value_binding(value) {
    inputFit = value;
    $$invalidate(5, inputFit);
  }
  function card1_on_binding(value) {
    onSize = value;
    $$invalidate(0, onSize);
  }
  function inputnumber_value_binding_3(value) {
    inputScale = value;
    $$invalidate(6, inputScale);
  }
  function card2_on_binding(value) {
    onScale = value;
    $$invalidate(1, onScale);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*onSize*/
    1) {
      toggledOnSize(onSize);
    }
    if ($$self.$$.dirty & /*onScale*/
    2) {
      toggledOnScale(onScale);
    }
  };
  $$invalidate(7, isDragging = false);
  return [
    onSize,
    onScale,
    inputQuality,
    inputWidth,
    inputHeight,
    inputFit,
    inputScale,
    isDragging,
    onDragEnter,
    onDragLeave,
    onClickUpload,
    onDrop,
    dragover_handler,
    inputnumber_value_binding,
    inputknob_value_binding,
    inputnumber_value_binding_1,
    inputnumber_value_binding_2,
    inputselect_value_binding,
    card1_on_binding,
    inputnumber_value_binding_3,
    card2_on_binding
  ];
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export {
  Page as default
};
