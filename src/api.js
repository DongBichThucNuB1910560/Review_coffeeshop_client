import axios from "axios";
const urlPost = '/api/post';

export default class API{
    static async getAllPost(){
        const res = await axios.get(urlPost);
        return res.data;
    }
    static async getPostById(id){
        const res = await axios.get(`${urlPost}/${id}`);
        return res.data;
    }
    static async addPost(post){
        const res = await axios.post(urlPost, post);
        return res.data;
    }
    static async updatePost(id, post){
        const res = await axios.patch(`${urlPost}/${id}`, post);
        return res.data;
    }
    static async deletePostById(id){
        const res = await axios.delete(`${urlPost}/${id}`);
        return res.data;
    }
}