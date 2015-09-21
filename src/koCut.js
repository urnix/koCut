(function () {
    'use strict';

    angular.module('koCut', []).
        filter('cut', function () {
            return function (value, max, wordwise, tail) {
                max = parseInt(max, 10);
                if (!value || !max || value.length <= max) {
                    return value;
                }

                value = value.substr(0, max);
                if (wordwise) {
                    var lastspace = value.lastIndexOf(' ');
                    if (lastspace !== -1) {
                        value = value.substr(0, lastspace);
                    }
                }

                if (!tail) {
                    tail = wordwise ? ' \u2026' : '\u2026';
                }
                return value + tail;
            }
        });

})();
