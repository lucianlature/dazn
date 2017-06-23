'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = require('./utils');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AppView = function () {
    function AppView(template) {
        _classCallCheck(this, AppView);

        this.template = template;
        this.$moviesList = (0, _utils.qs)('.movie-list');
        this.$main = (0, _utils.qs)('.main');
        this.$search = (0, _utils.qs)('.search-movie');

        this._cbs = {};

        this.initEvents();
    }

    /**
    * Populate the movies list with a list of movies.
    *
    * @param {MovieList} movies Array of movies to display
    */


    _createClass(AppView, [{
        key: 'showMovies',
        value: function showMovies(movies) {
            this.$moviesList.innerHTML = this.template.moviesList(movies);

            if (movies.length) {
                this.$main.style.display = 'block';
            }
        }
    }, {
        key: 'initEvents',
        value: function initEvents() {
            var _this = this;

            (0, _utils.$on)(this.$search, 'change', function (_ref) {
                var target = _ref.target;

                var search = target.value.trim();
                _this._cbs.search.call(null, search);
            });
        }
    }, {
        key: 'onSearch',
        value: function onSearch(cb) {
            this._registerCallback('search', cb);
        }
    }, {
        key: '_registerCallback',
        value: function _registerCallback(name, cb) {
            this._cbs[name] = cb;
        }
    }]);

    return AppView;
}();

exports.default = AppView;