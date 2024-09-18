"use strict";

const build = require("@microsoft/sp-build-web");
const path = require("path");
build.addSuppression(
  `Warning - [sass] The local CSS class 'ms-Grid' is not camelCase and will not be type-safe.`,
);
build.configureWebpack.mergeConfig({
  additionalConfiguration: (generatedConfiguration) => {
    generatedConfiguration.resolve.alias = {
      // components folder
      "@components": path.resolve(__dirname, "./lib/components"),
      "@": path.resolve(__dirname, "./lib"),
    };
    return generatedConfiguration;
  },
});

var getTasks = build.rig.getTasks;
build.rig.getTasks = function () {
  var result = getTasks.call(build.rig);

  result.set("serve", result.get("serve-deprecated"));

  return result;
};

/* fast-serve */
const { addFastServe } = require("spfx-fast-serve-helpers");
addFastServe(build);
/* end of fast-serve */

// TailwindCSS
const postcss = require("gulp-postcss");
const atimport = require("postcss-import");
const tailwind = require("tailwindcss");

const tailwindcss = build.subTask(
  "tailwindcss",
  function (gulp, buildOptions, done) {
    gulp
      .src("./src/global.css")
      .pipe(
        postcss({ to: "./src/output.css" }, [
          atimport(),
          tailwind("./tailwind.config.js"),
        ]),
      )
      .pipe(gulp.dest("assets/dist"));
    done();
  },
);
build.rig.addPreBuildTask(tailwindcss);
// end TailwindCSS

build.initialize(require("gulp"));
