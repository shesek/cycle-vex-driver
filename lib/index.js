'use strict';

var _rxjs = require('rxjs');

var _vexJs = require('vex-js');

var _vexJs2 = _interopRequireDefault(_vexJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vexJs2.default.registerPlugin(require('vex-dialog'));

module.exports = function () {
  var defaultOpt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function (open$) {
    return _rxjs.Observable.from(open$).subscribe(function (opt) {
      return _vexJs2.default.dialog[opt.method](Object.assign({}, defaultOpt, opt));
    });
  };
};