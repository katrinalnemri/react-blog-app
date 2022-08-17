import * as request from "./requestService";

const url = 'http://localhost:3030/users';

export const login = (email, password) => 
    request.post(`${url}/login`, { email, password });


export const logout = async (accessToken) => {
    try {
        const response = await fetch(`${url}/logout`, {
            headers: {
                'X-Authorization': accessToken
            }
        });

        return response;
    } catch (error) {
        console.log(error);
    }
};

export const register = (email, password) =>
    request.post(`${url}/register`, {email, password});
