/**
 * 複数のreducersを結合。
 * storeに食わせるreducerはindex.jsにcombineReducersを使ってまとめておく。
 * こうすることでcreateStoreに食わせるjsはこの1つで済む。
 */

import { combineReducers } from 'redux'
import todos from './todos'

const todoApp = combineReducers({ todos }) // todo reducersをcombineReducersに食わせて返す
export default todoApp
