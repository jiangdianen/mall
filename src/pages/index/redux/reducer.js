import { handleActions } from 'redux-actions'
import * as types from './action-types'

export const courseList = handleActions({
  [types.GET_COURSE] (state, action) {
    console.log(action.payload, '222')
    const data = action.payload.data
    return {
      ...state,
      ...data
    }
  }
}, {
  total: 0,
  items: []
})

export const categorys = handleActions({
  [types.GET_CATEGORY] (state, action) {
    const data = action.payload.data
    return [...data]
  }
}, [])

export const recommend = handleActions({
  [types.GET_RECOMMEND] (state, action) {
    const data = action.payload.data
    return [...data]
  }
}, [])
