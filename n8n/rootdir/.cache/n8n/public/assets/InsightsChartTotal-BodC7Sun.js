import { d as defineComponent, gg as useCssVar, q as computed, fa as dateformat, i1 as DATE_FORMAT_MASK, c as useI18n, e as createBlock, g as openBlock, m as unref } from "./index-CN4JmOoA.js";
import { g as generateBarChartOptions } from "./chartjs.utils-B5AYF7KA.js";
import { B as Bar } from "./index-DpLYcjet.js";
import "./InsightsSummary-C-_stVav.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "InsightsChartTotal",
  props: {
    data: {},
    type: {}
  },
  setup(__props) {
    const props = __props;
    const i18n = useI18n();
    const colorPrimary = useCssVar("--color-primary", document.body);
    const chartOptions = computed(
      () => generateBarChartOptions({
        plugins: {
          tooltip: {
            itemSort: (a) => a.dataset.label === i18n.baseText("insights.chart.succeeded") ? -1 : 1
          }
        }
      })
    );
    const chartData = computed(() => {
      const labels = [];
      const succeededData = [];
      const failedData = [];
      for (const entry of props.data) {
        labels.push(dateformat(entry.date, DATE_FORMAT_MASK));
        succeededData.push(entry.values.succeeded);
        failedData.push(entry.values.failed);
      }
      return {
        labels,
        datasets: [
          {
            label: i18n.baseText("insights.chart.failed"),
            data: failedData,
            backgroundColor: colorPrimary.value
          },
          {
            label: i18n.baseText("insights.chart.succeeded"),
            data: succeededData,
            backgroundColor: "#3E999F"
          }
        ]
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Bar), {
        data: chartData.value,
        options: chartOptions.value
      }, null, 8, ["data", "options"]);
    };
  }
});
export {
  _sfc_main as default
};
