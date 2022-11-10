"use strict";

var get_file = function get_file(url, el) {
  var doc = fetch(url).then(function (response) {
    return response.text();
  }).then(function (html) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(html);
    return doc;
  })["catch"](function (err) {
    console.warn(err);
  });
  el.innerHTML = doc.querySelector('pre');
  console.log('dsadas');
};