/*jshint esversion: 6 */
"use strict";

exports.create = function (name) {
    return {
        name: name,
        log: function () {
            console.log(this.name);
        }
    };
};
