// 该文件专门用于暴露一个store对象，整个应用只有一个store对象
import { legacy_createStore, applyMiddleware } from 'redux'
import reducer from "./reducer";
// 引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk'
// 引入redux-devtools-extension
import { composeWithDevTools } from 'redux-devtools-extension'

// const store = legacy_createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))
const store = legacy_createStore(reducer,applyMiddleware(thunk))

export default store