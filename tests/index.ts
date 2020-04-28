import "file-loader?name=[name].[ext]!../node_modules/qunit/qunit/qunit.css";
import "file-loader?name=[name].[ext]!./index.html";
import { config, dump } from "qunit";
import "./combinators-test";
import "./multi-test";
import "./reader/index";
import "./shape-test";
import "./parser-shape-test";

config.autostart = true;
config.urlConfig.push({
  id: "logging",
  label: "Enable logging",
});
dump.maxDepth = 25;
