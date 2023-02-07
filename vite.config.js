import { defineConfig } from "vite";
import { chunkSplitPlugin } from "vite-plugin-chunk-split";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/dummy-graph/",
  plugins: [
    react()
//,
  //  chunkSplitPlugin({
    //  strategy: "single-vendor",
   //   customSplitting: {
     //   "apexchart-vendor": ["apexcharts"],
     //   "react-apexchart-vendor": ["react-apexcharts"],

     //   utils: [/src\/utils/],
  //    },
  //  }),
  ],
});
