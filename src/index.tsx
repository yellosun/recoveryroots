import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import history from './history'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers/rootReducer'
import { setUser } from './actions/userAction'
import { setBlog } from './actions/blogAction'
import { getUsers, checkToken, getBlogs } from './fetch'

const store = createStore(
	rootReducer,
	(window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()	
)


checkToken()
.then(user => {	
	if (user) {
		store.dispatch(setUser(user))
		return user
	}
})
.then(user=> getBlogs(user.id))
.then(r=> {
	if (r) {
		r.forEach((blog:any)=> store.dispatch(setBlog(blog)))
	}
})

ReactDOM.render(
	<Provider store={store}>
		<App 
		/>
	</Provider>, 
	document.getElementById('root')
)
serviceWorker.unregister()
