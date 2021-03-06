import { combineReducers } from 'redux'
import * as counter from '@/pages/example/redux/reducer'
import * as IndexReducers from '@/pages/index/redux/reducer'
import * as categoryReducers from '@/pages/category/redux/reducer'

export default combineReducers({
  ...counter,
  ...IndexReducers,
  ...categoryReducers
})
