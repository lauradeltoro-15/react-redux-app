import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';



const configureStore = inictialState => {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools

    return createStore(
        rootReducer,
        inictialState,
        composeEnhancers(applyMiddleware(reduxImmutableStateInvariant()))
    );
}
export default configureStore;