import "file-loader?name=[name].[ext]!./index.html";
import "file-loader?name=[name].[ext]!../node_modules/qunit/qunit/qunit.css";
import { module, test, config } from "qunit";
import { parse } from "hbs-parser-next";

import "./combinators-test";

config.autostart = true;
