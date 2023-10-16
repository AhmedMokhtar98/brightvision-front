import { createStore, applyMiddleware,compose} from "redux";
import reducers from './reducers';
import  reduxThunk  from "redux-thunk";

const enhnacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, enhnacer(applyMiddleware(reduxThunk)))


export default store