"use strict";

exports.default = void 0;
var _index = require("../../../utils/index.js");
var _index2 = require("../../../utils/validation/index.js");
/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
/**
 * Verifies user provided event options.
 * @param {*} options The user event options to validate
 * @returns {*} Validated options
 */
var _default = exports.default = (0, _index2.objectOf)({
  url: (0, _index2.string)().required().nonEmpty(),
  edgeConfigOverrides: _index.validateConfigOverride
}).required().noUnknownFields();