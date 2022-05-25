import {combineReducers, createStore} from "redux"
import { userReduser} from "./usersAndPosts/UeserAndPostRedux"

let store=combineReducers({
  users:userReduser,
 
})  

export const useStore=createStore(store);