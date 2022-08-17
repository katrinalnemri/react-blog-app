import * as request from "./requestService";

const url = 'http://localhost:3030/data/shoes';

export const getAll = () => request.get(url);

//export const getAuthorPosts = (userId) => request.get(`${url}?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);

export const getOne = (postId) => request.get(`${url}/${postId}`);

export const create = (postData) => request.post(url, postData);

export const edit = (postId, postData) => request.put(`${url}/${postId}`, postData);

export const remove = (postId) => request.del(`${url}/${postId}`);
