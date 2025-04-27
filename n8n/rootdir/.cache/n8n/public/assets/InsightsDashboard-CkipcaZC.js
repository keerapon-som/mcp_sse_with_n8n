const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/InsightsPaywall-BoFT-Ik-.js","assets/index-CN4JmOoA.js","assets/index-DwKuVkBg.css","assets/InsightsPaywall-CE5W3W4m.css","assets/InsightsChartTotal-BodC7Sun.js","assets/chartjs.utils-B5AYF7KA.js","assets/InsightsSummary-C-_stVav.js","assets/InsightsSummary-FixbpmPJ.css","assets/index-DpLYcjet.js","assets/InsightsChartFailed-Buf2QmpB.js","assets/InsightsChartFailureRate-DHs26Nrr.js","assets/InsightsChartTimeSaved-Bjicuurm.js","assets/InsightsChartAverageRuntime-B_W8xSC9.js","assets/InsightsTableWorkflows-DvkAMkT2.js","assets/InsightsTableWorkflows-Blv_GPUj.css"])))=>i.map(i=>d[i]);
import { d as defineComponent, gr as useInsightsStore, q as computed, bZ as defineAsyncComponent, r as ref, I as watch, h as resolveComponent, i as createElementBlock, g as openBlock, k as createBaseVNode, j as createVNode, w as withCtx, l as createTextVNode, t as toDisplayString, m as unref, c as useI18n, e as createBlock, f as createCommentVNode, n as normalizeClass, b2 as resolveDynamicComponent, aq as __vitePreload, _ as _export_sfc } from "./index-CN4JmOoA.js";
import { I as InsightsSummary } from "./InsightsSummary-C-_stVav.js";
const _hoisted_1 = { key: 1 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "InsightsDashboard",
  props: {
    insightType: {}
  },
  setup(__props) {
    const InsightsPaywall = defineAsyncComponent(
      async () => await __vitePreload(() => import("./InsightsPaywall-BoFT-Ik-.js"), true ? __vite__mapDeps([0,1,2,3]) : void 0)
    );
    const InsightsChartTotal = defineAsyncComponent(
      async () => await __vitePreload(() => import("./InsightsChartTotal-BodC7Sun.js"), true ? __vite__mapDeps([4,1,2,5,6,7,8]) : void 0)
    );
    const InsightsChartFailed = defineAsyncComponent(
      async () => await __vitePreload(() => import("./InsightsChartFailed-Buf2QmpB.js"), true ? __vite__mapDeps([9,1,2,5,6,7,8]) : void 0)
    );
    const InsightsChartFailureRate = defineAsyncComponent(
      async () => await __vitePreload(() => import("./InsightsChartFailureRate-DHs26Nrr.js"), true ? __vite__mapDeps([10,1,2,5,6,7,8]) : void 0)
    );
    const InsightsChartTimeSaved = defineAsyncComponent(
      async () => await __vitePreload(() => import("./InsightsChartTimeSaved-Bjicuurm.js"), true ? __vite__mapDeps([11,1,2,5,6,7,8]) : void 0)
    );
    const InsightsChartAverageRuntime = defineAsyncComponent(
      async () => await __vitePreload(() => import("./InsightsChartAverageRuntime-B_W8xSC9.js"), true ? __vite__mapDeps([12,1,2,5,6,7,8]) : void 0)
    );
    const InsightsTableWorkflows = defineAsyncComponent(
      async () => await __vitePreload(() => import("./InsightsTableWorkflows-DvkAMkT2.js"), true ? __vite__mapDeps([13,1,2,6,7,14]) : void 0)
    );
    const props = __props;
    const i18n = useI18n();
    const insightsStore = useInsightsStore();
    const chartComponents = computed(() => ({
      total: InsightsChartTotal,
      failed: InsightsChartFailed,
      failureRate: InsightsChartFailureRate,
      timeSaved: InsightsChartTimeSaved,
      averageRunTime: InsightsChartAverageRuntime
    }));
    const transformFilter = ({ id, desc }) => {
      const key = id;
      const order = desc ? "desc" : "asc";
      return `${key}:${order}`;
    };
    const fetchPaginatedTableData = ({
      page = 0,
      itemsPerPage = 20,
      sortBy
    }) => {
      const skip = page * itemsPerPage;
      const take = itemsPerPage;
      const sortKey = sortBy.length ? transformFilter(sortBy[0]) : void 0;
      void insightsStore.table.execute(0, {
        skip,
        take,
        sortBy: sortKey
      });
    };
    const sortTableBy = ref([{ id: props.insightType, desc: true }]);
    watch(
      () => props.insightType,
      () => {
        sortTableBy.value = [{ id: props.insightType, desc: true }];
        if (insightsStore.isSummaryEnabled) {
          void insightsStore.summary.execute();
        }
        if (insightsStore.isDashboardEnabled) {
          void insightsStore.charts.execute();
          fetchPaginatedTableData({ sortBy: sortTableBy.value });
        }
      },
      {
        immediate: true
      }
    );
    return (_ctx, _cache) => {
      const _component_N8nHeading = resolveComponent("N8nHeading");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.insightsView)
      }, [
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.insightsContainer)
        }, [
          createVNode(_component_N8nHeading, {
            bold: "",
            tag: "h2",
            size: "xlarge"
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(i18n).baseText("insights.dashboard.title")), 1)
            ]),
            _: 1
          }),
          createBaseVNode("div", null, [
            unref(insightsStore).isSummaryEnabled ? (openBlock(), createBlock(InsightsSummary, {
              key: 0,
              summary: unref(insightsStore).summary.state,
              loading: unref(insightsStore).summary.isLoading,
              class: normalizeClass(_ctx.$style.insightsBanner)
            }, null, 8, ["summary", "loading", "class"])) : createCommentVNode("", true),
            createBaseVNode("div", {
              class: normalizeClass(_ctx.$style.insightsContent)
            }, [
              !unref(insightsStore).isDashboardEnabled ? (openBlock(), createBlock(unref(InsightsPaywall), {
                key: 0,
                "data-test-id": "insights-dashboard-unlicensed"
              })) : (openBlock(), createElementBlock("div", _hoisted_1, [
                createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.insightsChartWrapper)
                }, [
                  unref(insightsStore).charts.isLoading ? (openBlock(), createElementBlock("div", {
                    key: 0,
                    class: normalizeClass(_ctx.$style.chartLoader)
                  }, [
                    _cache[1] || (_cache[1] = createBaseVNode("svg", {
                      width: "22",
                      height: "22",
                      viewBox: "0 0 22 22",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg"
                    }, [
                      createBaseVNode("path", {
                        d: "M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C11.6293 1 12.245 1.05813 12.8421 1.16931",
                        stroke: "currentColor",
                        "stroke-width": "2"
                      })
                    ], -1)),
                    createTextVNode(" " + toDisplayString(unref(i18n).baseText("insights.chart.loading")), 1)
                  ], 2)) : (openBlock(), createBlock(resolveDynamicComponent(chartComponents.value[props.insightType]), {
                    key: 1,
                    type: props.insightType,
                    data: unref(insightsStore).charts.state
                  }, null, 8, ["type", "data"]))
                ], 2),
                createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.insightsTableWrapper)
                }, [
                  createVNode(unref(InsightsTableWorkflows), {
                    "sort-by": sortTableBy.value,
                    "onUpdate:sortBy": _cache[0] || (_cache[0] = ($event) => sortTableBy.value = $event),
                    data: unref(insightsStore).table.state,
                    loading: unref(insightsStore).table.isLoading,
                    "onUpdate:options": fetchPaginatedTableData
                  }, null, 8, ["sort-by", "data", "loading"])
                ], 2)
              ]))
            ], 2)
          ])
        ], 2)
      ], 2);
    };
  }
});
const insightsView = "_insightsView_1j6u6_123";
const insightsContainer = "_insightsContainer_1j6u6_131";
const insightsBanner = "_insightsBanner_1j6u6_138";
const insightsContent = "_insightsContent_1j6u6_146";
const insightsChartWrapper = "_insightsChartWrapper_1j6u6_155";
const insightsTableWrapper = "_insightsTableWrapper_1j6u6_160";
const chartLoader = "_chartLoader_1j6u6_164";
const style0 = {
  insightsView,
  insightsContainer,
  insightsBanner,
  insightsContent,
  insightsChartWrapper,
  insightsTableWrapper,
  chartLoader
};
const cssModules = {
  "$style": style0
};
const InsightsDashboard = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  InsightsDashboard as default
};
