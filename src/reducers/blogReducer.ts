import { SET_BLOG, DELETE_BLOG, blog as blogInterface } from '../actions/blogAction'

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

    case DELETE_BLOG:
        const { id } = action.payload
        let cleansedBlogs = state.blogs.filter((b:blogInterface)=> {
            if(b.id !== id) return b
        })
        return {
            ...state,
            blogs: cleansedBlogs
        }
 
        
    default:
    	return state
    } 
}
