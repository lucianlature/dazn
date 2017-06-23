'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = require('./utils');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MovieRowTemplate = function () {
	function MovieRowTemplate() {
		_classCallCheck(this, MovieRowTemplate);
	}

	_createClass(MovieRowTemplate, [{
		key: 'moviesList',

		/**
   * Format the contents of a movies list.
   *
   * @param {ItemList} items Object containing keys you want to find in the template to replace.
   * @returns {!string} Contents for a movie list
   *
   * @example
   * view.show({
   *	id: 1,
   *	title: "Hello World",
   * })
   */
		value: function moviesList(movies) {
			return movies.reduce(function (a, movie) {
				return a + ('\n<li data-id="' + movie.id + '" class="animated fadeInRight">\n  <label>' + (0, _utils.escapeForHTML)(movie.title) + '</label>\n  <img class="center-block img-responsive" width="120px" height="160px" src="' + movie.image + '" />\n  <div class="overview">\n    <span><strong>Release Date: </strong>' + movie.release_date + '</span>\n    <p>' + movie.overview + '<p>\n  </div>\n</li>');
			}, '');
		}
	}]);

	return MovieRowTemplate;
}();

exports.default = MovieRowTemplate;