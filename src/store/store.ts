import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {mainReducer} from "./MainReducer";
import { methodReducer } from './MethodReducer';

const rootReducer = combineReducers({
    main: mainReducer,
    methods: methodReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;
