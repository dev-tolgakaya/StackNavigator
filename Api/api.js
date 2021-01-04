import axios from "axios";

export const api_url = "http://localhost:4000";

export async function posts() {
    return await axios.get(api_url + "/posts");
}

export async function postSave(data){
    return await axios.post(api_url+ "/posts",data);
}
