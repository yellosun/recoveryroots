export const SET_BLOG:string = 'SET_BLOG'
export const UPDATE_BLOG:string = 'UPDATE_BLOG'
export const DELETE_BLOG:string = 'DELETE_BLOG'
export const DELETE_ALL_BLOGS:string = 'DELETE_ALL_BLOGS'

export interface blog {
	id:number,
	title:string, 
	body:string, 
	description:string,
	headerImg:string,
	uri:string,
	category:string,
	render:boolean,
	createdAt:Date
}

export function setBlog(blog:blog) {
    return {
        type: SET_BLOG,
        payload: { blog }
    }
}

export function updateBlog(blog:number) {
    return {
        type: UPDATE_BLOG,
        payload: { blog }
    }
}

export function deleteBlog(id:number) {
    return {
        type: DELETE_BLOG,
        payload: { id }
    }
}

export function deleteAllBlogs(blog:any) {
    return {
        type: DELETE_ALL_BLOGS,
        payload: { blog }
    }
}