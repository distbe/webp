import { _ as __vitePreload } from "../../chunks/preload-helper-f8376bb0.js";
import { J as assign, K as now, L as loop, M as identity, S as SvelteComponent, i as init, s as safe_not_equal, k as element, q as text, a as space, l as claim_element, m as children, r as claim_text, h as detach, c as claim_space, n as attr, b as insert_hydration, H as append_hydration, u as set_data, C as noop, e as empty, N as toggle_class, O as listen, f as transition_in, g as group_outros, t as transition_out, d as check_outros, v as binding_callbacks, P as bind, x as create_component, y as claim_component, z as mount_component, Q as add_flush_callback, A as destroy_component, D as create_slot, E as update_slot_base, F as get_all_dirty_from_scope, G as get_slot_changes, R as set_input_value, T as to_number, U as add_render_callback, V as select_option, W as destroy_each, X as select_value, Y as src_url_equal, Z as stop_propagation, _ as prevent_default, I as component_subscribe, o as onMount, $ as run_all, a0 as bubble } from "../../chunks/index-31b80213.js";
import { w as writable } from "../../chunks/index-fc865e59.js";
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function get_interpolator(a, b) {
  if (a === b || a !== a)
    return () => a;
  const type = typeof a;
  if (type !== typeof b || Array.isArray(a) !== Array.isArray(b)) {
    throw new Error("Cannot interpolate values of different type");
  }
  if (Array.isArray(a)) {
    const arr = b.map((bi, i) => {
      return get_interpolator(a[i], bi);
    });
    return (t) => arr.map((fn) => fn(t));
  }
  if (type === "object") {
    if (!a || !b)
      throw new Error("Object cannot be null");
    if (is_date(a) && is_date(b)) {
      a = a.getTime();
      b = b.getTime();
      const delta = b - a;
      return (t) => new Date(a + t * delta);
    }
    const keys = Object.keys(b);
    const interpolators = {};
    keys.forEach((key) => {
      interpolators[key] = get_interpolator(a[key], b[key]);
    });
    return (t) => {
      const result = {};
      keys.forEach((key) => {
        result[key] = interpolators[key](t);
      });
      return result;
    };
  }
  if (type === "number") {
    const delta = b - a;
    return (t) => a + t * delta;
  }
  throw new Error(`Cannot interpolate ${type} values`);
}
function tweened(value, defaults = {}) {
  const store = writable(value);
  let task;
  let target_value = value;
  function set(new_value, opts) {
    if (value == null) {
      store.set(value = new_value);
      return Promise.resolve();
    }
    target_value = new_value;
    let previous_task = task;
    let started = false;
    let { delay = 0, duration = 400, easing = identity, interpolate = get_interpolator } = assign(assign({}, defaults), opts);
    if (duration === 0) {
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      store.set(value = target_value);
      return Promise.resolve();
    }
    const start = now() + delay;
    let fn;
    task = loop((now2) => {
      if (now2 < start)
        return true;
      if (!started) {
        fn = interpolate(value, new_value);
        if (typeof duration === "function")
          duration = duration(value, new_value);
        started = true;
      }
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      const elapsed = now2 - start;
      if (elapsed > duration) {
        store.set(value = new_value);
        return false;
      }
      store.set(value = fn(easing(elapsed / duration)));
      return true;
    });
    return task.promise;
  }
  return {
    set,
    update: (fn, opts) => set(fn(target_value, value), opts),
    subscribe: store.subscribe
  };
}
const Result_svelte_svelte_type_style_lang = "";
function create_else_block$1(ctx) {
  let td0;
  let t0_value = formatBytes(
    /*beforeSize*/
    ctx[2]
  ) + "";
  let t0;
  let t1;
  let td1;
  let t2;
  let t3;
  let td2;
  let t4_value = formatBytes(
    /*afterSize*/
    ctx[3]
  ) + "";
  let t4;
  let t5;
  let if_block_anchor;
  function select_block_type_1(ctx2, dirty) {
    if (
      /*rate*/
      ctx2[4] !== null
    )
      return create_if_block_1$2;
    return create_else_block_1;
  }
  let current_block_type = select_block_type_1(ctx);
  let if_block = current_block_type(ctx);
  return {
    c() {
      td0 = element("td");
      t0 = text(t0_value);
      t1 = space();
      td1 = element("td");
      t2 = text("→");
      t3 = space();
      td2 = element("td");
      t4 = text(t4_value);
      t5 = space();
      if_block.c();
      if_block_anchor = empty();
      this.h();
    },
    l(nodes) {
      td0 = claim_element(nodes, "TD", { class: true });
      var td0_nodes = children(td0);
      t0 = claim_text(td0_nodes, t0_value);
      td0_nodes.forEach(detach);
      t1 = claim_space(nodes);
      td1 = claim_element(nodes, "TD", {});
      var td1_nodes = children(td1);
      t2 = claim_text(td1_nodes, "→");
      td1_nodes.forEach(detach);
      t3 = claim_space(nodes);
      td2 = claim_element(nodes, "TD", { class: true });
      var td2_nodes = children(td2);
      t4 = claim_text(td2_nodes, t4_value);
      td2_nodes.forEach(detach);
      t5 = claim_space(nodes);
      if_block.l(nodes);
      if_block_anchor = empty();
      this.h();
    },
    h() {
      attr(td0, "class", "result__size svelte-1wh6mo4");
      attr(td2, "class", "result__size svelte-1wh6mo4");
    },
    m(target, anchor) {
      insert_hydration(target, td0, anchor);
      append_hydration(td0, t0);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, td1, anchor);
      append_hydration(td1, t2);
      insert_hydration(target, t3, anchor);
      insert_hydration(target, td2, anchor);
      append_hydration(td2, t4);
      insert_hydration(target, t5, anchor);
      if_block.m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*beforeSize*/
      4 && t0_value !== (t0_value = formatBytes(
        /*beforeSize*/
        ctx2[2]
      ) + ""))
        set_data(t0, t0_value);
      if (dirty & /*afterSize*/
      8 && t4_value !== (t4_value = formatBytes(
        /*afterSize*/
        ctx2[3]
      ) + ""))
        set_data(t4, t4_value);
      if (current_block_type === (current_block_type = select_block_type_1(ctx2)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      }
    },
    d(detaching) {
      if (detaching)
        detach(td0);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(td1);
      if (detaching)
        detach(t3);
      if (detaching)
        detach(td2);
      if (detaching)
        detach(t5);
      if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_if_block$2(ctx) {
  let td;
  let t;
  return {
    c() {
      td = element("td");
      t = text(
        /*error*/
        ctx[1]
      );
      this.h();
    },
    l(nodes) {
      td = claim_element(nodes, "TD", { class: true, colspan: true });
      var td_nodes = children(td);
      t = claim_text(
        td_nodes,
        /*error*/
        ctx[1]
      );
      td_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(td, "class", "result__error svelte-1wh6mo4");
      attr(td, "colspan", "4");
    },
    m(target, anchor) {
      insert_hydration(target, td, anchor);
      append_hydration(td, t);
    },
    p(ctx2, dirty) {
      if (dirty & /*error*/
      2)
        set_data(
          t,
          /*error*/
          ctx2[1]
        );
    },
    d(detaching) {
      if (detaching)
        detach(td);
    }
  };
}
function create_else_block_1(ctx) {
  let td;
  return {
    c() {
      td = element("td");
    },
    l(nodes) {
      td = claim_element(nodes, "TD", {});
      children(td).forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, td, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(td);
    }
  };
}
function create_if_block_1$2(ctx) {
  let td;
  let t0;
  let t1_value = (
    /*rate*/
    ctx[4].toFixed(2) + ""
  );
  let t1;
  let t2;
  return {
    c() {
      td = element("td");
      t0 = text("(");
      t1 = text(t1_value);
      t2 = text("%)");
      this.h();
    },
    l(nodes) {
      td = claim_element(nodes, "TD", { class: true });
      var td_nodes = children(td);
      t0 = claim_text(td_nodes, "(");
      t1 = claim_text(td_nodes, t1_value);
      t2 = claim_text(td_nodes, "%)");
      td_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(td, "class", "result__rate svelte-1wh6mo4");
      toggle_class(
        td,
        "result--good",
        /*rate*/
        ctx[4] > 0
      );
      toggle_class(
        td,
        "result--bad",
        /*rate*/
        ctx[4] <= 0 && /*rate*/
        ctx[4] > -0.5
      );
      toggle_class(
        td,
        "result--worse",
        /*rate*/
        ctx[4] <= -0.5
      );
    },
    m(target, anchor) {
      insert_hydration(target, td, anchor);
      append_hydration(td, t0);
      append_hydration(td, t1);
      append_hydration(td, t2);
    },
    p(ctx2, dirty) {
      if (dirty & /*rate*/
      16 && t1_value !== (t1_value = /*rate*/
      ctx2[4].toFixed(2) + ""))
        set_data(t1, t1_value);
      if (dirty & /*rate*/
      16) {
        toggle_class(
          td,
          "result--good",
          /*rate*/
          ctx2[4] > 0
        );
      }
      if (dirty & /*rate*/
      16) {
        toggle_class(
          td,
          "result--bad",
          /*rate*/
          ctx2[4] <= 0 && /*rate*/
          ctx2[4] > -0.5
        );
      }
      if (dirty & /*rate*/
      16) {
        toggle_class(
          td,
          "result--worse",
          /*rate*/
          ctx2[4] <= -0.5
        );
      }
    },
    d(detaching) {
      if (detaching)
        detach(td);
    }
  };
}
function create_fragment$6(ctx) {
  let tr;
  let td;
  let t0_value = trimSlash(
    /*filename*/
    ctx[0]
  ) + "";
  let t0;
  let t1;
  function select_block_type(ctx2, dirty) {
    if (
      /*error*/
      ctx2[1]
    )
      return create_if_block$2;
    return create_else_block$1;
  }
  let current_block_type = select_block_type(ctx);
  let if_block = current_block_type(ctx);
  return {
    c() {
      tr = element("tr");
      td = element("td");
      t0 = text(t0_value);
      t1 = space();
      if_block.c();
      this.h();
    },
    l(nodes) {
      tr = claim_element(nodes, "TR", { class: true });
      var tr_nodes = children(tr);
      td = claim_element(tr_nodes, "TD", { class: true });
      var td_nodes = children(td);
      t0 = claim_text(td_nodes, t0_value);
      td_nodes.forEach(detach);
      t1 = claim_space(tr_nodes);
      if_block.l(tr_nodes);
      tr_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(td, "class", "result__filename svelte-1wh6mo4");
      attr(tr, "class", "result svelte-1wh6mo4");
    },
    m(target, anchor) {
      insert_hydration(target, tr, anchor);
      append_hydration(tr, td);
      append_hydration(td, t0);
      append_hydration(tr, t1);
      if_block.m(tr, null);
    },
    p(ctx2, [dirty]) {
      if (dirty & /*filename*/
      1 && t0_value !== (t0_value = trimSlash(
        /*filename*/
        ctx2[0]
      ) + ""))
        set_data(t0, t0_value);
      if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(tr, null);
        }
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(tr);
      if_block.d();
    }
  };
}
function formatBytes(size) {
  if (size === 0)
    return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  const i = Math.floor(Math.log(size) / Math.log(k));
  return parseFloat((size / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}
function trimSlash(filename2) {
  return filename2.replace(/^\/+/, "");
}
function instance$6($$self, $$props, $$invalidate) {
  let rate;
  let { filename } = $$props;
  let { error = null } = $$props;
  let { beforeSize } = $$props;
  let { afterSize } = $$props;
  $$self.$$set = ($$props2) => {
    if ("filename" in $$props2)
      $$invalidate(0, filename = $$props2.filename);
    if ("error" in $$props2)
      $$invalidate(1, error = $$props2.error);
    if ("beforeSize" in $$props2)
      $$invalidate(2, beforeSize = $$props2.beforeSize);
    if ("afterSize" in $$props2)
      $$invalidate(3, afterSize = $$props2.afterSize);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*beforeSize, afterSize*/
    12) {
      $$invalidate(4, rate = beforeSize === 0 ? null : (1 - afterSize / beforeSize) * 100);
    }
  };
  return [filename, error, beforeSize, afterSize, rate];
}
class Result extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$6, create_fragment$6, safe_not_equal, {
      filename: 0,
      error: 1,
      beforeSize: 2,
      afterSize: 3
    });
  }
}
const InputSwitch_svelte_svelte_type_style_lang = "";
function create_fragment$5(ctx) {
  let div1;
  let div0;
  let mounted;
  let dispose;
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      children(div0).forEach(detach);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "input-switch__control svelte-g8v6up");
      attr(div1, "class", "input-switch svelte-g8v6up");
      toggle_class(
        div1,
        "input-switch--on",
        /*value*/
        ctx[0]
      );
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, div0);
      if (!mounted) {
        dispose = listen(
          div1,
          "click",
          /*onClick*/
          ctx[1]
        );
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & /*value*/
      1) {
        toggle_class(
          div1,
          "input-switch--on",
          /*value*/
          ctx2[0]
        );
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div1);
      mounted = false;
      dispose();
    }
  };
}
function instance$5($$self, $$props, $$invalidate) {
  let { value = false } = $$props;
  function onClick() {
    $$invalidate(0, value = !value);
  }
  $$self.$$set = ($$props2) => {
    if ("value" in $$props2)
      $$invalidate(0, value = $$props2.value);
  };
  return [value, onClick];
}
class InputSwitch extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$5, create_fragment$5, safe_not_equal, { value: 0 });
  }
}
const Card_svelte_svelte_type_style_lang = "";
function create_if_block_1$1(ctx) {
  let inputswitch;
  let updating_value;
  let current;
  function inputswitch_value_binding(value) {
    ctx[5](value);
  }
  let inputswitch_props = {};
  if (
    /*on*/
    ctx[0] !== void 0
  ) {
    inputswitch_props.value = /*on*/
    ctx[0];
  }
  inputswitch = new InputSwitch({ props: inputswitch_props });
  binding_callbacks.push(() => bind(inputswitch, "value", inputswitch_value_binding));
  return {
    c() {
      create_component(inputswitch.$$.fragment);
    },
    l(nodes) {
      claim_component(inputswitch.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(inputswitch, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const inputswitch_changes = {};
      if (!updating_value && dirty & /*on*/
      1) {
        updating_value = true;
        inputswitch_changes.value = /*on*/
        ctx2[0];
        add_flush_callback(() => updating_value = false);
      }
      inputswitch.$set(inputswitch_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(inputswitch.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(inputswitch.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(inputswitch, detaching);
    }
  };
}
function create_if_block$1(ctx) {
  let div;
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[4].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[3],
    null
  );
  return {
    c() {
      div = element("div");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      if (default_slot)
        default_slot.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "card__body svelte-1allh55");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if (default_slot) {
        default_slot.m(div, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        8)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[3],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[3]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[3],
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
        detach(div);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function create_fragment$4(ctx) {
  let div;
  let dvi;
  let h3;
  let t0;
  let t1;
  let t2;
  let current;
  let if_block0 = !/*disabled*/
  ctx[1] && create_if_block_1$1(ctx);
  let if_block1 = (
    /*on*/
    ctx[0] && create_if_block$1(ctx)
  );
  return {
    c() {
      div = element("div");
      dvi = element("dvi");
      h3 = element("h3");
      t0 = text(
        /*title*/
        ctx[2]
      );
      t1 = space();
      if (if_block0)
        if_block0.c();
      t2 = space();
      if (if_block1)
        if_block1.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      dvi = claim_element(div_nodes, "DVI", { class: true });
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
      if (if_block0)
        if_block0.l(dvi_nodes);
      dvi_nodes.forEach(detach);
      t2 = claim_space(div_nodes);
      if (if_block1)
        if_block1.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(h3, "class", "card__title svelte-1allh55");
      attr(dvi, "class", "card__header svelte-1allh55");
      attr(div, "class", "card svelte-1allh55");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, dvi);
      append_hydration(dvi, h3);
      append_hydration(h3, t0);
      append_hydration(dvi, t1);
      if (if_block0)
        if_block0.m(dvi, null);
      append_hydration(div, t2);
      if (if_block1)
        if_block1.m(div, null);
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
        if (if_block0) {
          if_block0.p(ctx2, dirty);
          if (dirty & /*disabled*/
          2) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_1$1(ctx2);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(dvi, null);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }
      if (
        /*on*/
        ctx2[0]
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty & /*on*/
          1) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block$1(ctx2);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(div, null);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block0);
      transition_in(if_block1);
      current = true;
    },
    o(local) {
      transition_out(if_block0);
      transition_out(if_block1);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (if_block0)
        if_block0.d();
      if (if_block1)
        if_block1.d();
    }
  };
}
function instance$4($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { disabled = false } = $$props;
  let { on = false } = $$props;
  let { title } = $$props;
  function inputswitch_value_binding(value) {
    on = value;
    $$invalidate(0, on);
  }
  $$self.$$set = ($$props2) => {
    if ("disabled" in $$props2)
      $$invalidate(1, disabled = $$props2.disabled);
    if ("on" in $$props2)
      $$invalidate(0, on = $$props2.on);
    if ("title" in $$props2)
      $$invalidate(2, title = $$props2.title);
    if ("$$scope" in $$props2)
      $$invalidate(3, $$scope = $$props2.$$scope);
  };
  return [on, disabled, title, $$scope, slots, inputswitch_value_binding];
}
class Card extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$4, create_fragment$4, safe_not_equal, { disabled: 1, on: 0, title: 2 });
  }
}
const InputGroup_svelte_svelte_type_style_lang = "";
function create_fragment$3(ctx) {
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
      attr(div0, "class", "input-group__label svelte-hk8el4");
      attr(div1, "class", "input-group svelte-hk8el4");
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
function instance$3($$self, $$props, $$invalidate) {
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
    init(this, options, instance$3, create_fragment$3, safe_not_equal, { label: 0 });
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
      attr(input, "class", "input-number svelte-16knh58");
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
function get_each_context$1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[4] = list[i];
  return child_ctx;
}
function create_each_block$1(ctx) {
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
    each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
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
      attr(select, "class", "input-select svelte-m1cv8l");
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
          const child_ctx = get_each_context$1(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block$1(child_ctx);
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
  const moduleUrl = "/vips/vips-es6.js";
  if (vipsPromise) {
    return vipsPromise;
  }
  vipsPromise = (async () => {
    const Vips = await __vitePreload(() => import(moduleUrl), true ? [] : void 0, import.meta.url).then((m) => m.default);
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
const logo = "" + new URL("../../assets/logo-ec8219a6.svg", import.meta.url).href;
function isFileBufferError(result) {
  return "error" in result;
}
const isAvailableWebkitGetAsEntry = typeof DataTransferItem !== "undefined" && "webkitGetAsEntry" in DataTransferItem.prototype;
function isDirectoryEntry(entry) {
  return entry.isDirectory;
}
function isFileEntry(entry) {
  return entry.isFile;
}
async function traverseEntries(entries) {
  return Promise.all(entries.map((entry) => {
    if (!entry) {
      return Promise.resolve([]);
    }
    if (isDirectoryEntry(entry)) {
      return new Promise((resolve) => {
        const reader = entry.createReader();
        reader.readEntries((entries2) => {
          resolve(traverseEntries(entries2));
        });
      });
    }
    if (isFileEntry(entry)) {
      return new Promise((resolve) => {
        entry.file(async (f) => {
          resolve({
            name: entry.fullPath,
            type: f.type,
            size: f.size,
            buffer: await f.arrayBuffer()
          });
        });
      });
    }
    return Promise.resolve({
      name: entry.fullPath,
      error: new Error("Unknown entry type")
    });
  })).then((e) => e.flat());
}
async function dataTransferToBuffers(transfer) {
  if (!transfer) {
    return [];
  }
  if (!isAvailableWebkitGetAsEntry) {
    return await Promise.all([...transfer.files].map(async (file) => {
      try {
        const buffer = await file.arrayBuffer();
        return {
          name: file.name,
          type: file.type,
          size: file.size,
          buffer
        };
      } catch (e) {
        return {
          name: file.name,
          error: e
        };
      }
    }));
  }
  return await traverseEntries([...transfer.items].map((item) => item.webkitGetAsEntry()));
}
function svgImageSize(svg) {
  var _a, _b;
  const width = (_a = svg.match(/width="(\d+)"/)) == null ? void 0 : _a[1];
  const height = (_b = svg.match(/height="(\d+)"/)) == null ? void 0 : _b[1];
  if (!width || !height) {
    const match = svg.match(/viewBox="0 0 (\d+) (\d+)"/);
    if (match) {
      return { width: +match[1], height: +match[2] };
    }
  }
  return { width: width ? +width : 0, height: height ? +height : 0 };
}
async function svgToBlob(file) {
  const svg = await file.text();
  const { width, height } = svgImageSize(svg);
  const url = await new Promise((resolve) => {
    const image = new Image();
    const xml = window.btoa(unescape(encodeURIComponent(svg)));
    image.src = "data:image/svg+xml;base64," + xml;
    image.onload = function() {
      const canvas = document.createElement("canvas");
      canvas.width = width ?? 640;
      canvas.height = height ?? 480;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.drawImage(image, 0, 0, width ?? 640, height ?? 480);
      }
      resolve(canvas.toDataURL("image/png"));
    };
  });
  const parts = url.split(";base64,");
  const raw = window.atob(parts[1]);
  const rawLength = raw.length;
  const uInt8Array = new Uint8Array(rawLength);
  for (let i = 0; i < rawLength; ++i) {
    uInt8Array[i] = raw.charCodeAt(i);
  }
  return new Blob([uInt8Array], { type: "image/png" });
}
function hasMessage(e) {
  return typeof e === "object" && e !== null && "message" in e;
}
function errorToErrorMessage(e) {
  if (typeof e === "string") {
    return e;
  }
  if (e instanceof Error) {
    return e.message;
  }
  return "Unknown error";
}
async function transformFileBuffer(vips, files, options, onProgress) {
  if (files.length === 0) {
    return [];
  }
  onProgress(0);
  const results = [];
  for (const [fileIndex, file] of files.entries()) {
    onProgress(fileIndex / files.length);
    if (isFileBufferError(file)) {
      results.push({
        filename: file.name,
        size: 0,
        error: errorToErrorMessage(file.error),
        blob: null
      });
      continue;
    }
    try {
      let input;
      if (file.type === "image/svg+xml") {
        input = await svgToBlob(new Blob([file.buffer])).then((b) => b.arrayBuffer());
      } else {
        input = await file.buffer;
      }
      let im = vips.Image.newFromBuffer(input, file.name);
      if ((options.width || options.height) && options.fit) {
        im = resize(vips, im, [options.width ?? 0, options.height ?? 0], options.fit);
      } else if (options.scale) {
        im = im.resize(options.scale, {});
      }
      const buffer = await im.writeToBuffer(".webp", {
        Q: ~~options.quality
        // to int
      });
      const blob = new Blob([buffer], { type: "image/webp" });
      results.push({
        filename: file.name,
        size: file.size,
        error: null,
        blob
      });
    } catch (e) {
      let errorMessage = null;
      if (hasMessage(e) && e.message.includes("unable to load from buffer")) {
        errorMessage = "Unsupported image format!";
      } else {
        errorMessage = errorToErrorMessage(e);
      }
      results.push({
        filename: file.name,
        size: file.size,
        error: errorMessage,
        blob: null
      });
    }
  }
  onProgress(1);
  return results;
}
const _page_svelte_svelte_type_style_lang = "";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[32] = list[i][0];
  child_ctx[33] = list[i][1];
  child_ctx[34] = list[i][2];
  child_ctx[35] = list[i][3];
  return child_ctx;
}
function create_default_slot_7(ctx) {
  let div;
  let inputnumber;
  let updating_value;
  let current;
  function inputnumber_value_binding(value) {
    ctx[18](value);
  }
  let inputnumber_props = { max: 100, min: 0, step: 1 };
  if (
    /*inputQuality*/
    ctx[0] !== void 0
  ) {
    inputnumber_props.value = /*inputQuality*/
    ctx[0];
  }
  inputnumber = new InputNumber({ props: inputnumber_props });
  binding_callbacks.push(() => bind(inputnumber, "value", inputnumber_value_binding));
  return {
    c() {
      div = element("div");
      create_component(inputnumber.$$.fragment);
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(inputnumber.$$.fragment, div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "space-y-4");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      mount_component(inputnumber, div, null);
      current = true;
    },
    p(ctx2, dirty) {
      const inputnumber_changes = {};
      if (!updating_value && dirty[0] & /*inputQuality*/
      1) {
        updating_value = true;
        inputnumber_changes.value = /*inputQuality*/
        ctx2[0];
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
      if (detaching)
        detach(div);
      destroy_component(inputnumber);
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
      if (dirty[0] & /*inputQuality*/
      1 | dirty[1] & /*$$scope*/
      128) {
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
    ctx[19](value);
  }
  let inputnumber_props = { min: 0, step: 1 };
  if (
    /*inputWidth*/
    ctx[2] !== void 0
  ) {
    inputnumber_props.value = /*inputWidth*/
    ctx[2];
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
      if (!updating_value && dirty[0] & /*inputWidth*/
      4) {
        updating_value = true;
        inputnumber_changes.value = /*inputWidth*/
        ctx2[2];
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
    ctx[20](value);
  }
  let inputnumber_props = { min: 0, step: 1 };
  if (
    /*inputHeight*/
    ctx[3] !== void 0
  ) {
    inputnumber_props.value = /*inputHeight*/
    ctx[3];
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
      if (!updating_value && dirty[0] & /*inputHeight*/
      8) {
        updating_value = true;
        inputnumber_changes.value = /*inputHeight*/
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
function create_default_slot_3(ctx) {
  let inputselect;
  let updating_value;
  let current;
  function inputselect_value_binding(value) {
    ctx[21](value);
  }
  let inputselect_props = {
    options: ["Cover", "Contain", "Fill", "Inside", "Outside"]
  };
  if (
    /*inputFit*/
    ctx[4] !== void 0
  ) {
    inputselect_props.value = /*inputFit*/
    ctx[4];
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
      if (!updating_value && dirty[0] & /*inputFit*/
      16) {
        updating_value = true;
        inputselect_changes.value = /*inputFit*/
        ctx2[4];
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
      attr(div, "class", "space-y-3");
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
      if (dirty[0] & /*inputWidth*/
      4 | dirty[1] & /*$$scope*/
      128) {
        inputgroup0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      inputgroup0.$set(inputgroup0_changes);
      const inputgroup1_changes = {};
      if (dirty[0] & /*inputHeight*/
      8 | dirty[1] & /*$$scope*/
      128) {
        inputgroup1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      inputgroup1.$set(inputgroup1_changes);
      const inputgroup2_changes = {};
      if (dirty[0] & /*inputFit*/
      16 | dirty[1] & /*$$scope*/
      128) {
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
    ctx[23](value);
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
      if (!updating_value && dirty[0] & /*inputScale*/
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
      if (dirty[0] & /*inputScale*/
      64 | dirty[1] & /*$$scope*/
      128) {
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
function create_else_block(ctx) {
  let div5;
  let t0;
  let div4;
  let div2;
  let div0;
  let t1;
  let t2;
  let div1;
  let button;
  let t3;
  let t4;
  let div3;
  let t5;
  let current;
  let mounted;
  let dispose;
  let if_block = (
    /*results*/
    ctx[9] && create_if_block_2(ctx)
  );
  return {
    c() {
      div5 = element("div");
      if (if_block)
        if_block.c();
      t0 = space();
      div4 = element("div");
      div2 = element("div");
      div0 = element("div");
      t1 = text("Drop your images here!");
      t2 = space();
      div1 = element("div");
      button = element("button");
      t3 = text("or click to upload images");
      t4 = space();
      div3 = element("div");
      t5 = text("Supports JPG, PNG, GIF, TIFF, WEBP, SVG.");
      this.h();
    },
    l(nodes) {
      div5 = claim_element(nodes, "DIV", { class: true });
      var div5_nodes = children(div5);
      if (if_block)
        if_block.l(div5_nodes);
      t0 = claim_space(div5_nodes);
      div4 = claim_element(div5_nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      div2 = claim_element(div4_nodes, "DIV", {});
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      t1 = claim_text(div0_nodes, "Drop your images here!");
      div0_nodes.forEach(detach);
      t2 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      button = claim_element(div1_nodes, "BUTTON", { class: true });
      var button_nodes = children(button);
      t3 = claim_text(button_nodes, "or click to upload images");
      button_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      t4 = claim_space(div4_nodes);
      div3 = claim_element(div4_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      t5 = claim_text(div3_nodes, "Supports JPG, PNG, GIF, TIFF, WEBP, SVG.");
      div3_nodes.forEach(detach);
      div4_nodes.forEach(detach);
      div5_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "text-white text-opacity-75 font-light text-center text-2xl");
      attr(button, "class", "text-white font-light text-sm underline leading-tight");
      attr(div1, "class", "text-center");
      attr(div3, "class", "text-white font-light text-center text-sm text-opacity-70");
      attr(div4, "class", "space-y-3");
      attr(div5, "class", "dropzone space-y-4 svelte-17n85hh");
    },
    m(target, anchor) {
      insert_hydration(target, div5, anchor);
      if (if_block)
        if_block.m(div5, null);
      append_hydration(div5, t0);
      append_hydration(div5, div4);
      append_hydration(div4, div2);
      append_hydration(div2, div0);
      append_hydration(div0, t1);
      append_hydration(div2, t2);
      append_hydration(div2, div1);
      append_hydration(div1, button);
      append_hydration(button, t3);
      append_hydration(div4, t4);
      append_hydration(div4, div3);
      append_hydration(div3, t5);
      current = true;
      if (!mounted) {
        dispose = listen(
          button,
          "click",
          /*onClickUpload*/
          ctx[15]
        );
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (
        /*results*/
        ctx2[9]
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty[0] & /*results*/
          512) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block_2(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(div5, t0);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div5);
      if (if_block)
        if_block.d();
      mounted = false;
      dispose();
    }
  };
}
function create_if_block_1(ctx) {
  let div2;
  let div0;
  let t0;
  let t1;
  let div1;
  let t2_value = (
    /*$progress*/
    (ctx[10] * 100).toFixed(2) + ""
  );
  let t2;
  let t3;
  return {
    c() {
      div2 = element("div");
      div0 = element("div");
      t0 = text("Converting...");
      t1 = space();
      div1 = element("div");
      t2 = text(t2_value);
      t3 = text("%");
      this.h();
    },
    l(nodes) {
      div2 = claim_element(nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", {});
      var div0_nodes = children(div0);
      t0 = claim_text(div0_nodes, "Converting...");
      div0_nodes.forEach(detach);
      t1 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      t2 = claim_text(div1_nodes, t2_value);
      t3 = claim_text(div1_nodes, "%");
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div1, "class", "text-2xl");
      attr(div2, "class", "text-white font-light text-center");
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
      append_hydration(div2, div0);
      append_hydration(div0, t0);
      append_hydration(div2, t1);
      append_hydration(div2, div1);
      append_hydration(div1, t2);
      append_hydration(div1, t3);
    },
    p(ctx2, dirty) {
      if (dirty[0] & /*$progress*/
      1024 && t2_value !== (t2_value = /*$progress*/
      (ctx2[10] * 100).toFixed(2) + ""))
        set_data(t2, t2_value);
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div2);
    }
  };
}
function create_if_block_2(ctx) {
  let div1;
  let div0;
  let t0;
  let t1;
  let table;
  let current;
  let each_value = (
    /*results*/
    ctx[9]
  );
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      t0 = text("Done!");
      t1 = space();
      table = element("table");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      t0 = claim_text(div0_nodes, "Done!");
      div0_nodes.forEach(detach);
      t1 = claim_space(div1_nodes);
      table = claim_element(div1_nodes, "TABLE", {});
      var table_nodes = children(table);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(table_nodes);
      }
      table_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "text-white text-center");
      attr(div1, "class", "space-y-1");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, div0);
      append_hydration(div0, t0);
      append_hydration(div1, t1);
      append_hydration(div1, table);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(table, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty[0] & /*results*/
      512) {
        each_value = /*results*/
        ctx2[9];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(table, null);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div1);
      destroy_each(each_blocks, detaching);
    }
  };
}
function create_each_block(ctx) {
  let result;
  let current;
  result = new Result({
    props: {
      filename: (
        /*filename*/
        ctx[32]
      ),
      error: (
        /*error*/
        ctx[33]
      ),
      beforeSize: (
        /*beforeSize*/
        ctx[34]
      ),
      afterSize: (
        /*afterSize*/
        ctx[35]
      )
    }
  });
  return {
    c() {
      create_component(result.$$.fragment);
    },
    l(nodes) {
      claim_component(result.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(result, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const result_changes = {};
      if (dirty[0] & /*results*/
      512)
        result_changes.filename = /*filename*/
        ctx2[32];
      if (dirty[0] & /*results*/
      512)
        result_changes.error = /*error*/
        ctx2[33];
      if (dirty[0] & /*results*/
      512)
        result_changes.beforeSize = /*beforeSize*/
        ctx2[34];
      if (dirty[0] & /*results*/
      512)
        result_changes.afterSize = /*afterSize*/
        ctx2[35];
      result.$set(result_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(result.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(result.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(result, detaching);
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
            ctx[17]
          ))),
          listen(div, "dragleave", stop_propagation(prevent_default(
            /*onDragLeave*/
            ctx[14]
          ))),
          listen(div, "drop", stop_propagation(prevent_default(
            /*onDrop*/
            ctx[16]
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
  let t0;
  let div4;
  let aside;
  let div1;
  let div0;
  let card0;
  let t1;
  let card1;
  let updating_on;
  let t2;
  let card2;
  let updating_on_1;
  let t3;
  let main;
  let section;
  let current_block_type_index;
  let if_block0;
  let t4;
  let footer;
  let div3;
  let a;
  let img;
  let img_src_value;
  let t5;
  let div2;
  let t6;
  let t7;
  let t8;
  let if_block1_anchor;
  let current;
  let mounted;
  let dispose;
  card0 = new Card({
    props: {
      title: "Settings",
      on: true,
      disabled: true,
      $$slots: { default: [create_default_slot_6] },
      $$scope: { ctx }
    }
  });
  function card1_on_binding(value) {
    ctx[22](value);
  }
  let card1_props = {
    title: "Size",
    $$slots: { default: [create_default_slot_2] },
    $$scope: { ctx }
  };
  if (
    /*onSize*/
    ctx[1] !== void 0
  ) {
    card1_props.on = /*onSize*/
    ctx[1];
  }
  card1 = new Card({ props: card1_props });
  binding_callbacks.push(() => bind(card1, "on", card1_on_binding));
  function card2_on_binding(value) {
    ctx[24](value);
  }
  let card2_props = {
    title: "Scale",
    $$slots: { default: [create_default_slot] },
    $$scope: { ctx }
  };
  if (
    /*onScale*/
    ctx[5] !== void 0
  ) {
    card2_props.on = /*onScale*/
    ctx[5];
  }
  card2 = new Card({ props: card2_props });
  binding_callbacks.push(() => bind(card2, "on", card2_on_binding));
  const if_block_creators = [create_if_block_1, create_else_block];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (
      /*loading*/
      ctx2[8]
    )
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  let if_block1 = (
    /*isDragging*/
    ctx[7] && create_if_block(ctx)
  );
  return {
    c() {
      t0 = space();
      div4 = element("div");
      aside = element("aside");
      div1 = element("div");
      div0 = element("div");
      create_component(card0.$$.fragment);
      t1 = space();
      create_component(card1.$$.fragment);
      t2 = space();
      create_component(card2.$$.fragment);
      t3 = space();
      main = element("main");
      section = element("section");
      if_block0.c();
      t4 = space();
      footer = element("footer");
      div3 = element("div");
      a = element("a");
      img = element("img");
      t5 = space();
      div2 = element("div");
      t6 = text("v");
      t7 = text(
        /*version*/
        ctx[11]
      );
      t8 = space();
      if (if_block1)
        if_block1.c();
      if_block1_anchor = empty();
      this.h();
    },
    l(nodes) {
      t0 = claim_space(nodes);
      div4 = claim_element(nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      aside = claim_element(div4_nodes, "ASIDE", { class: true });
      var aside_nodes = children(aside);
      div1 = claim_element(aside_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      claim_component(card0.$$.fragment, div0_nodes);
      t1 = claim_space(div0_nodes);
      claim_component(card1.$$.fragment, div0_nodes);
      t2 = claim_space(div0_nodes);
      claim_component(card2.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      aside_nodes.forEach(detach);
      t3 = claim_space(div4_nodes);
      main = claim_element(div4_nodes, "MAIN", { class: true });
      var main_nodes = children(main);
      section = claim_element(main_nodes, "SECTION", { class: true });
      var section_nodes = children(section);
      if_block0.l(section_nodes);
      section_nodes.forEach(detach);
      t4 = claim_space(main_nodes);
      footer = claim_element(main_nodes, "FOOTER", { class: true });
      var footer_nodes = children(footer);
      div3 = claim_element(footer_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      a = claim_element(div3_nodes, "A", { href: true, target: true, rel: true });
      var a_nodes = children(a);
      img = claim_element(a_nodes, "IMG", { src: true, alt: true, class: true });
      a_nodes.forEach(detach);
      t5 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      t6 = claim_text(div2_nodes, "v");
      t7 = claim_text(
        div2_nodes,
        /*version*/
        ctx[11]
      );
      div2_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      footer_nodes.forEach(detach);
      main_nodes.forEach(detach);
      div4_nodes.forEach(detach);
      t8 = claim_space(nodes);
      if (if_block1)
        if_block1.l(nodes);
      if_block1_anchor = empty();
      this.h();
    },
    h() {
      attr(div0, "class", "");
      attr(div1, "class", "flex-1");
      attr(aside, "class", "basis-[320px] flex-grow-0 flex-shrink-0 bg-[#151E2C] flex flex-col max-md:basis-[0] max-lg:basis-[240px]");
      attr(section, "class", "flex-1 flex items-center justify-center");
      if (!src_url_equal(img.src, img_src_value = logo))
        attr(img, "src", img_src_value);
      attr(img, "alt", "dist.be");
      attr(img, "class", "w-[54px] h-[24px]");
      attr(a, "href", "https://github.com/distbe");
      attr(a, "target", "_blank");
      attr(a, "rel", "noopener noreferrer");
      attr(div2, "class", "text-sm text-white text-opacity-30");
      attr(div3, "class", "absolute right-0 bottom-0 py-2 px-3 flex items-center gap-x-2");
      attr(footer, "class", "relative");
      attr(main, "class", "flex-1 flex-col flex max-md:flex-[300px] max-md:flex-shrink-0 px-4");
      attr(div4, "class", "flex h-full max-md:flex-col");
    },
    m(target, anchor) {
      insert_hydration(target, t0, anchor);
      insert_hydration(target, div4, anchor);
      append_hydration(div4, aside);
      append_hydration(aside, div1);
      append_hydration(div1, div0);
      mount_component(card0, div0, null);
      append_hydration(div0, t1);
      mount_component(card1, div0, null);
      append_hydration(div0, t2);
      mount_component(card2, div0, null);
      append_hydration(div4, t3);
      append_hydration(div4, main);
      append_hydration(main, section);
      if_blocks[current_block_type_index].m(section, null);
      append_hydration(main, t4);
      append_hydration(main, footer);
      append_hydration(footer, div3);
      append_hydration(div3, a);
      append_hydration(a, img);
      append_hydration(div3, t5);
      append_hydration(div3, div2);
      append_hydration(div2, t6);
      append_hydration(div2, t7);
      insert_hydration(target, t8, anchor);
      if (if_block1)
        if_block1.m(target, anchor);
      insert_hydration(target, if_block1_anchor, anchor);
      current = true;
      if (!mounted) {
        dispose = listen(document.body, "dragenter", stop_propagation(prevent_default(
          /*onDragEnter*/
          ctx[13]
        )));
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      const card0_changes = {};
      if (dirty[0] & /*inputQuality*/
      1 | dirty[1] & /*$$scope*/
      128) {
        card0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      card0.$set(card0_changes);
      const card1_changes = {};
      if (dirty[0] & /*inputFit, inputHeight, inputWidth*/
      28 | dirty[1] & /*$$scope*/
      128) {
        card1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      if (!updating_on && dirty[0] & /*onSize*/
      2) {
        updating_on = true;
        card1_changes.on = /*onSize*/
        ctx2[1];
        add_flush_callback(() => updating_on = false);
      }
      card1.$set(card1_changes);
      const card2_changes = {};
      if (dirty[0] & /*inputScale*/
      64 | dirty[1] & /*$$scope*/
      128) {
        card2_changes.$$scope = { dirty, ctx: ctx2 };
      }
      if (!updating_on_1 && dirty[0] & /*onScale*/
      32) {
        updating_on_1 = true;
        card2_changes.on = /*onScale*/
        ctx2[5];
        add_flush_callback(() => updating_on_1 = false);
      }
      card2.$set(card2_changes);
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block0 = if_blocks[current_block_type_index];
        if (!if_block0) {
          if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block0.c();
        } else {
          if_block0.p(ctx2, dirty);
        }
        transition_in(if_block0, 1);
        if_block0.m(section, null);
      }
      if (
        /*isDragging*/
        ctx2[7]
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
        } else {
          if_block1 = create_if_block(ctx2);
          if_block1.c();
          if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(card0.$$.fragment, local);
      transition_in(card1.$$.fragment, local);
      transition_in(card2.$$.fragment, local);
      transition_in(if_block0);
      current = true;
    },
    o(local) {
      transition_out(card0.$$.fragment, local);
      transition_out(card1.$$.fragment, local);
      transition_out(card2.$$.fragment, local);
      transition_out(if_block0);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(t0);
      if (detaching)
        detach(div4);
      destroy_component(card0);
      destroy_component(card1);
      destroy_component(card2);
      if_blocks[current_block_type_index].d();
      if (detaching)
        detach(t8);
      if (if_block1)
        if_block1.d(detaching);
      if (detaching)
        detach(if_block1_anchor);
      mounted = false;
      dispose();
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let $progress;
  const version = "0.3.2";
  let mounted = false;
  let isDragging = false;
  let loading = false;
  let progress = tweened(0);
  component_subscribe($$self, progress, (value) => $$invalidate(10, $progress = value));
  let results = null;
  let inputQuality = null;
  let onSize = false;
  let inputWidth = null;
  let inputHeight = null;
  let inputFit = "Cover";
  let onScale = false;
  let inputScale = 1;
  onMount(() => {
    const state = localStorage.getItem("state");
    if (state) {
      try {
        const parsed = JSON.parse(state);
        $$invalidate(0, inputQuality = parsed.inputQuality);
        $$invalidate(1, onSize = parsed.onSize);
        if (parsed.onSize) {
          $$invalidate(2, inputWidth = parsed.inputWidth);
          $$invalidate(3, inputHeight = parsed.inputHeight);
        }
        $$invalidate(4, inputFit = parsed.inputFit);
        $$invalidate(5, onScale = parsed.onScale);
        $$invalidate(6, inputScale = parsed.inputScale);
      } catch {
      }
    }
    $$invalidate(0, inputQuality = inputQuality ?? 100);
    mounted = true;
  });
  function saveState(state) {
    if (!mounted)
      return;
    localStorage.setItem("state", JSON.stringify(state));
  }
  function toggledOnSize(onSize2) {
    if (!mounted)
      return;
    if (onSize2 && onScale) {
      $$invalidate(5, onScale = false);
    }
  }
  function toggledOnScale(onScale2) {
    if (!mounted)
      return;
    if (onScale2 && onSize) {
      $$invalidate(1, onSize = false);
    }
  }
  function onInputSize(width, height) {
    if (!mounted)
      return;
    if ((width || height) && !onSize) {
      $$invalidate(1, onSize = true);
      toggledOnSize(onSize);
    }
  }
  function onInputScale(scale) {
    if (!mounted)
      return;
    if (scale && !onScale) {
      $$invalidate(5, onScale = true);
      toggledOnScale(onScale);
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
    if (files.length === 0) {
      return;
    }
    const buffers = await Promise.all([...files].map(async (f) => {
      return {
        name: f.name,
        size: f.size,
        type: f.type,
        buffer: await f.arrayBuffer()
      };
    }));
    await transform(buffers);
  }
  async function onDrop(e) {
    $$invalidate(7, isDragging = false);
    transform(await dataTransferToBuffers(e.dataTransfer));
  }
  async function transform(files) {
    if (files.length === 0) {
      return;
    }
    $$invalidate(8, loading = true);
    const vips = await loadVips();
    const transformResults = await transformFileBuffer(
      vips,
      files,
      {
        quality: inputQuality ?? 100,
        width: onSize ? inputWidth : null,
        height: onSize ? inputHeight : null,
        fit: onSize ? inputFit : null,
        scale: onScale ? inputScale : null
      },
      (p) => {
        progress.set(p);
      }
    );
    $$invalidate(9, results = transformResults.map((r) => {
      var _a;
      return [r.filename, r.error, r.size, ((_a = r.blob) == null ? void 0 : _a.size) ?? 0];
    }));
    $$invalidate(8, loading = false);
    if (transformResults.length === 1 && transformResults[0].blob) {
      const basename = transformResults[0].filename.replace(/\.[^/.]+$/, "");
      download(transformResults[0].blob, `${basename}.webp`);
      return;
    }
    const zip = await __vitePreload(() => import("../../chunks/jszip.min-e4871d4f.js").then((n) => n.j), true ? [] : void 0, import.meta.url).then((m) => new m.default());
    const filenames = /* @__PURE__ */ new Set();
    for (const { blob: blob2, filename } of transformResults) {
      if (!blob2) {
        continue;
      }
      const basename = filename.replace(/\.[^/.]+$/, "");
      let newFilename = basename;
      let i = 1;
      while (filenames.has(newFilename)) {
        newFilename = `${basename} (${i})`;
        i++;
      }
      filenames.add(newFilename);
      zip.file(`${newFilename}.webp`, blob2);
    }
    if (filenames.size === 0) {
      return;
    }
    const blob = await zip.generateAsync({ type: "blob" });
    download(blob, "images.zip");
  }
  function dragover_handler(event) {
    bubble.call(this, $$self, event);
  }
  function inputnumber_value_binding(value) {
    inputQuality = value;
    $$invalidate(0, inputQuality);
  }
  function inputnumber_value_binding_1(value) {
    inputWidth = value;
    $$invalidate(2, inputWidth);
  }
  function inputnumber_value_binding_2(value) {
    inputHeight = value;
    $$invalidate(3, inputHeight);
  }
  function inputselect_value_binding(value) {
    inputFit = value;
    $$invalidate(4, inputFit);
  }
  function card1_on_binding(value) {
    onSize = value;
    $$invalidate(1, onSize);
  }
  function inputnumber_value_binding_3(value) {
    inputScale = value;
    $$invalidate(6, inputScale);
  }
  function card2_on_binding(value) {
    onScale = value;
    $$invalidate(5, onScale);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty[0] & /*onSize*/
    2) {
      toggledOnSize(onSize);
    }
    if ($$self.$$.dirty[0] & /*inputWidth, inputHeight*/
    12) {
      onInputSize(inputWidth, inputHeight);
    }
    if ($$self.$$.dirty[0] & /*onScale*/
    32) {
      toggledOnScale(onScale);
    }
    if ($$self.$$.dirty[0] & /*inputScale*/
    64) {
      onInputScale(inputScale);
    }
    if ($$self.$$.dirty[0] & /*inputQuality, onSize, inputWidth, inputHeight, inputFit, onScale, inputScale*/
    127) {
      saveState({
        inputQuality,
        onSize,
        inputWidth,
        inputHeight,
        inputFit,
        onScale,
        inputScale
      });
    }
  };
  return [
    inputQuality,
    onSize,
    inputWidth,
    inputHeight,
    inputFit,
    onScale,
    inputScale,
    isDragging,
    loading,
    results,
    $progress,
    version,
    progress,
    onDragEnter,
    onDragLeave,
    onClickUpload,
    onDrop,
    dragover_handler,
    inputnumber_value_binding,
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
    init(this, options, instance, create_fragment, safe_not_equal, {}, null, [-1, -1]);
  }
}
export {
  Page as default
};
