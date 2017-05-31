/*
 * Copyright 2017 Teppo Kurki <teppo.kurki@iki.fi>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const debug = require("debug")("signalk-server:interfaces:charts");

const pathPrefix = "/signalk";
const versionPrefix = "/v1";
const apiPathPrefix = pathPrefix + versionPrefix + "/api/";

module.exports = function(app) {
  const api = {};

  api.start = function() {
    debug("Starting charts interface");
    app.get(apiPathPrefix + "resources/charts", (req, res, next) => {
        res.json({result: "seems to work"})
    });
  };

  api.stop = function() {};

  return api;
};