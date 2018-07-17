//全てのReducersを総括する　パッケージ必要

import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import events from './events'


export default combineReducers({ events, form })
//今回は状態を管理するのは１つだけ
