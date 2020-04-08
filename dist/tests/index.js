"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("file-loader?name=[name].[ext]!../node_modules/qunit/qunit/qunit.css");
require("file-loader?name=[name].[ext]!./index.html");
const qunit_1 = require("qunit");
require("./combinators-test");
require("./multi-test");
require("./reader/index");
qunit_1.config.autostart = true;
qunit_1.config.urlConfig.push({
    id: "logging",
    label: "Enable logging",
});
qunit_1.dump.maxDepth = 25;
