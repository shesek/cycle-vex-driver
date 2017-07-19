import { Observable as Obs } from 'rxjs'
import vex from 'vex-js'

module.exports = (defaultOpt={}) => open$ => {
  let _vex = Obs.bindCallback((id, method, options, cb) =>
    vex.dialog[method](Object.assign({}, defaultOpt, options, { callback: value => cb({ id, value }) })))
  return Obs.from(open$).flatMap(opt => _vex(opt.id, opt.method || 'open', opt))
}
