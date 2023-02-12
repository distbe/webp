import { S as SvelteComponent, i as init, s as safe_not_equal, D as create_slot, k as element, q as text, a as space, l as claim_element, m as children, r as claim_text, h as detach, c as claim_space, n as attr, E as src_url_equal, b as insert_hydration, F as append_hydration, G as update_slot_base, H as get_all_dirty_from_scope, I as get_slot_changes, f as transition_in, t as transition_out } from "../../chunks/index-bea779ca.js";
const app = "";
const logo = "" + new URL("../../assets/logo-ec8219a6.svg", import.meta.url).href;
const _layout_svelte_svelte_type_style_lang = "";
function create_fragment(ctx) {
  let div4;
  let header;
  let div0;
  let a0;
  let t0;
  let t1;
  let main;
  let t2;
  let footer;
  let div3;
  let div2;
  let a1;
  let img;
  let img_src_value;
  let t3;
  let div1;
  let t4;
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[1].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[0],
    null
  );
  return {
    c() {
      div4 = element("div");
      header = element("header");
      div0 = element("div");
      a0 = element("a");
      t0 = text("WebP Converter");
      t1 = space();
      main = element("main");
      if (default_slot)
        default_slot.c();
      t2 = space();
      footer = element("footer");
      div3 = element("div");
      div2 = element("div");
      a1 = element("a");
      img = element("img");
      t3 = space();
      div1 = element("div");
      t4 = text("© 2023");
      this.h();
    },
    l(nodes) {
      div4 = claim_element(nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      header = claim_element(div4_nodes, "HEADER", { class: true });
      var header_nodes = children(header);
      div0 = claim_element(header_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      a0 = claim_element(div0_nodes, "A", { href: true, class: true });
      var a0_nodes = children(a0);
      t0 = claim_text(a0_nodes, "WebP Converter");
      a0_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      header_nodes.forEach(detach);
      t1 = claim_space(div4_nodes);
      main = claim_element(div4_nodes, "MAIN", { class: true });
      var main_nodes = children(main);
      if (default_slot)
        default_slot.l(main_nodes);
      main_nodes.forEach(detach);
      t2 = claim_space(div4_nodes);
      footer = claim_element(div4_nodes, "FOOTER", {});
      var footer_nodes = children(footer);
      div3 = claim_element(footer_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      a1 = claim_element(div2_nodes, "A", { href: true, target: true, rel: true });
      var a1_nodes = children(a1);
      img = claim_element(a1_nodes, "IMG", { src: true, alt: true, class: true });
      a1_nodes.forEach(detach);
      t3 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      t4 = claim_text(div1_nodes, "© 2023");
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      footer_nodes.forEach(detach);
      div4_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a0, "href", "/");
      attr(a0, "class", "brand svelte-1fxqgvx");
      attr(div0, "class", "w-full container px-2 mx-auto flex justify-between");
      attr(header, "class", "sticky py-4 flex-none");
      attr(main, "class", "flex-1");
      if (!src_url_equal(img.src, img_src_value = logo))
        attr(img, "src", img_src_value);
      attr(img, "alt", "dist.be");
      attr(img, "class", "w-[54px] h-[24px]");
      attr(a1, "href", "https://github.com/distbe");
      attr(a1, "target", "_blank");
      attr(a1, "rel", "noopener noreferrer");
      attr(div1, "class", "text-white font-light text-sm text-opacity-75");
      attr(div2, "class", "flex items-center gap-x-1");
      attr(div3, "class", "container mx-auto px-4 flex justify-center py-2");
      attr(div4, "class", "flex flex-col min-h-screen h-px");
    },
    m(target, anchor) {
      insert_hydration(target, div4, anchor);
      append_hydration(div4, header);
      append_hydration(header, div0);
      append_hydration(div0, a0);
      append_hydration(a0, t0);
      append_hydration(div4, t1);
      append_hydration(div4, main);
      if (default_slot) {
        default_slot.m(main, null);
      }
      append_hydration(div4, t2);
      append_hydration(div4, footer);
      append_hydration(footer, div3);
      append_hydration(div3, div2);
      append_hydration(div2, a1);
      append_hydration(a1, img);
      append_hydration(div2, t3);
      append_hydration(div2, div1);
      append_hydration(div1, t4);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        1)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[0],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[0]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[0],
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
        detach(div4);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  $$self.$$set = ($$props2) => {
    if ("$$scope" in $$props2)
      $$invalidate(0, $$scope = $$props2.$$scope);
  };
  return [$$scope, slots];
}
class Layout extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export {
  Layout as default
};
