/*jshint esversion: 6 */

// see http://www.datchley.name/promise-patterns-anti-patterns/

(function () {
    "use strict";

    let p1 = function () {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve("p1 OK ");
            }, 800);
        });
    };

    let p2 = function () {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve("p2 OK ");
            }, 200);
        });
    };

    let p3 = function () {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve("p3 OK ");
            }, 1200);
        });
    };

    let resCon = function (res) {
        console.log(`Consecutively resolved: ${res}`);
    };
    let resSim = function (res) {
        console.log(`Simultaneously resolved: ${res}`);
    };
    let resRace = function (res) {
        console.log(`Race resolved: ${res}`);
    };
    let rej = function (rej) {
        console.log(`resolved: ${rej}`);
    };

    /** Resolve consecutively - depend on each step **/
    p1()
        .then(p1)
        .then(p2)
        .then(p3)
        .then(resCon)
        .catch(rej);

    /** Resolve simultaneously - independant of each other **/
    Promise.all([p1(), p2(), p3()]).then(resSim).catch(rej);

    /** Resolve the first that resolves **/
    Promise.race([p1(), p2(), p3()]).then(resRace).catch(rej);

}());

