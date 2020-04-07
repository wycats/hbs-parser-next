import "file-loader?name=[name].[ext]!../node_modules/qunit/qunit/qunit.css";
import "file-loader?name=[name].[ext]!./index.html";
import { config, dump } from "qunit";
import "./combinators-test";
import "./multi-test";
import "./reader/index";

config.autostart = true;
config.urlConfig.push({
  id: "logging",
  label: "Enable logging",
});
dump.maxDepth = 25;
