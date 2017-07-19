import { Observable as Obs } from 'rxjs'
import vex from 'vex-js'

vex.registerPlugin(require('vex-dialog'))

module.exports = (defaultOpt={}) => open$ =>
  Obs.from(open$).subscribe(opt => vex.dialog[opt.method](Object.assign({}, defaultOpt, opt)))
