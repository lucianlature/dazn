"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require("whatwg-fetch");

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ApiClient = function () {
    function ApiClient(_ref) {
        var BASE_URI = _ref.BASE_URI,
            IMAGES_URI = _ref.IMAGES_URI;

        _classCallCheck(this, ApiClient);

        this.base_uri = BASE_URI;
        this.images_uri = IMAGES_URI;
    }

    _createClass(ApiClient, [{
        key: "fetch",
        value: function () {
            var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee(_ref3) {
                var _this = this;

                var searchTerm = _ref3.searchTerm;
                var query, response, data;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                query = this.base_uri + "&query=" + searchTerm;
                                _context.next = 3;
                                return window.fetch(query, {
                                    headers: {
                                        "Content-Type": "application/json"
                                    }
                                });

                            case 3:
                                response = _context.sent;
                                _context.next = 6;
                                return response.json();

                            case 6:
                                data = _context.sent;

                                data.results.forEach(function (item) {
                                    item.image = _this.getImage({ size: 'w500', file: item.poster_path });
                                });

                                return _context.abrupt("return", data);

                            case 9:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function fetch(_x) {
                return _ref2.apply(this, arguments);
            }

            return fetch;
        }()
    }, {
        key: "getImage",
        value: function getImage(options) {
            return "" + this.images_uri + options.size + "/" + options.file;
        }
    }]);

    return ApiClient;
}();

exports.default = ApiClient;