define('mip-2345statistics',function () {
    var customElem = require('customElement').create();
    require('http://union2.50bang.org/js/tianqi');
    return customElem;
});
require(["mip-2345statistics"], function(hotcity) {
    MIP.registerMipElement('mip-2345statistics', 2345statistics);
});