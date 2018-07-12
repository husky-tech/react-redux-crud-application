//全てのReducersを総括する　パッケージ必要

import { combineReducers } from 'redux'
import count from './count'




export default combineReducers({ count })
//今回は状態を管理するのは１つだけ
