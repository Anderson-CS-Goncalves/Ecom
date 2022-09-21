import { applyMiddleware, legacy_createStore } from "@reduxjs/toolkit";
import rootReducer from "./modules/rootReducer";
import thunk from "redux-thunk";

export default store = legacy_createStore(rootReducer, applyMiddleware(thunk));