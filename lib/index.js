/*jslint browser: true, devel: true, node: true, ass: true, nomen: true, unparam: true, indent: 4 */

/**
 * @license
 * Copyright (c) 2015 The expand.js authors. All rights reserved.
 * This code may only be used under the BSD style license found at https://expandjs.github.io/LICENSE.txt
 * The complete set of authors may be found at https://expandjs.github.io/AUTHORS.txt
 * The complete set of contributors may be found at https://expandjs.github.io/CONTRIBUTORS.txt
 */
(function () {
    "use strict";

    // Vars
    var eventemitter3 = require('eventemitter3'),
        load          = require('xp-load'),
        XP            = load(require('expandjs'), 'XP');

    /*********************************************************************/

    /**
     * This class is used to provide event emitting functionalities.
     *
     * @class XPEmitter
     * @description This class is used to provide event emitting functionalities.
     */
    module.exports = new XP.Class('XPEmitter', {

        // EXTENDS
        extends: eventemitter3
    });

    /*********************************************************************/

    // Browserify
    XP.browserify(module.exports, 'XPEmitter');

}());