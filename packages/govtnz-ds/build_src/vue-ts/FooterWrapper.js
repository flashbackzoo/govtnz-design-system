import Vue from "vue";

export default Vue.extend({
  functional: true, // no internal state
  props: { children: { required: false, default: "Content..." } },
  computed: {},
  render: new Function(
    'with(this){return _c(\'footer\',{staticClass:"g-footer-wrapper"},[_t("default")],2)}'
  )
});
