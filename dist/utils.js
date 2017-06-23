'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * querySelector wrapper
 *
 * @param {string} selector Selector to query
 * @param {Element} [scope] Optional scope element for the selector
 */
var qs = exports.qs = function qs(selector, scope) {
  return (scope || document).querySelector(selector);
};

/**
 * addEventListener wrapper
 *
 * @param {Element|Window} target Target Element
 * @param {string} type Event name to bind to
 * @param {Function} callback Event callback
 * @param {boolean} [capture] Capture the event
 */
var $on = exports.$on = function $on(target, type, callback, capture) {
  target.addEventListener(type, callback, !!capture);
};

/**
 * Encode less-than and ampersand characters with entity codes to make user-
 * provided text safe to parse as HTML.
 *
 * @param {string} s String to escape
 *
 * @returns {string} String with unsafe characters escaped with entity codes
 */
var escapeForHTML = exports.escapeForHTML = function escapeForHTML(s) {
  return s.replace(/[&<]/g, function (c) {
    return c === '&' ? '&amp;' : '&lt;';
  });
};