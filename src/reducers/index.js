//全てのReducersを総括する　パッケージ必要

import { combineReducers } from 'redux'
import events from './events'


export default combineReducers({ events })
//今回は状態を管理するのは１つだけ
