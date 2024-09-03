"use strict";

exports.default = void 0;
var _index = require("./validation/index.js");
var _identityMapAuthenticatedState = require("../constants/identityMapAuthenticatedState.js");
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var _default = exports.default = (0, _index.mapOfValues)((0, _index.arrayOf)((0, _index.objectOf)({
  authenticatedState: (0, _index.enumOf)(_identityMapAuthenticatedState.AMBIGUOUS, _identityMapAuthenticatedState.AUTHENTICATED, _identityMapAuthenticatedState.LOGGED_OUT),
  id: (0, _index.string)(),
  namespace: (0, _index.objectOf)({
    code: (0, _index.string)()
  }).noUnknownFields(),
  primary: (0, _index.boolean)(),
  xid: (0, _index.string)()
}).noUnknownFields()).required());