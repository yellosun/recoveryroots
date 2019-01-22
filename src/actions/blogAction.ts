export const SET_BLOG:string = 'SET_BLOG'

interface blog {
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