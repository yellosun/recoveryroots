import { SET_BLOG } from '../actions/blogAction'

interface action {type:string, payload?:any}

const initialState = {
    blogs: []
}

export function blogReducer(state:any = initialState, action:action) {
    switch (action.type) {

    case SET_BLOG:
        const { blog } = action.payload
        return {
            ...state,
            blogs: [
                ...state.blogs, 
                {
                    id: blog.id,
                    title: blog.title,
                    body: blog.body,
                    description: blog.description,
                    uri: blog.uri,
                    category: blog.category,
                    headerImg: blog.headerImg,
                    render: blog.render,
                    createdAt: blog.createdAt
                }
            ]
        }
        
    default:
    	return state
    } 
}
