import { 
    SET_BLOG,
    UPDATE_BLOG,
    DELETE_BLOG, 
    blog as blogInterface, 
    DELETE_ALL_BLOGS } from '../actions/blogAction'

interface action {type:string, payload?:any}

const initialState = {
    blogs: []
}

interface updatedBlog {
    id:number,
    title:string, 
    body:string, 
    headerImg:string, 
    uri:string, 
    category:string, 
    description:string, 
    render:boolean
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

    case UPDATE_BLOG: {
        const { blog } = action.payload
        const newBlog = blog[0] 
        let newBlogs = state.blogs.map((b:updatedBlog)=> {
            if (b.id !== newBlog.id) {
                console.log(b.id, newBlog.id)
                return b
            } else {
                return ({
                    ...state,
                    title: newBlog.title,
                    body: newBlog.body,
                    description: newBlog.description,
                    uri: newBlog.uri,
                    category: newBlog.category,
                    headerImg: newBlog.headerImg,
                    render: newBlog.render
                })
            }
        })

        return {
            ...state,
            blogs: newBlogs
        }
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
 
     case DELETE_ALL_BLOGS: {
        return {
            ...state,
            blogs: []
        }
    }
        
    default:
    	return state
    } 
}
