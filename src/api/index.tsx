import { NOTION_CLIENT_ID, NOTION_SECRET } from "utils/constants";
import { NotionAuthRequest, UserAuthRequest } from "./models";

const baseUrl = 'http://localhost:3001';

enum apiRoutes {
    userSignup = '/user/signup',
    userLogin = '/user/login',
    notionAccessToken = '/notion/obtain_access_token',
    userIntegrations = '/user/integrations'
}

const method = {
	POST: 'POST',
	GET: 'GET',
	PUT: 'PUT'
};

const getRoute = (api: apiRoutes) => {
    return baseUrl + api;
};

// USER SIGNUP
const signupUser = async(signupRequest: UserAuthRequest) => {
    const response = await fetch(getRoute(apiRoutes.userSignup), {
        method: method.POST,
        body: JSON.stringify(signupRequest),
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(response => response.json())
        .catch(err => { throw new Error('Error creating user'); }); // gonna need to handle this

    return response;
};

// USER LOGIN
const signinUser = async(loginRequest: UserAuthRequest) => {
    const response = await fetch(getRoute(apiRoutes.userLogin), {
        method: method.POST,
        body: JSON.stringify(loginRequest),
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(response => response.json())
        .catch(err => { throw new Error('Error logging in user'); }); // gonna need to handle this

    return response;
};

// NOTION ACCESS TOKEN
const fetchNotionAccessToken = async(tempCode: string) => {
    const requestBody = {
        temp_code: tempCode,
        notion_client_id: NOTION_CLIENT_ID,
        notion_secret: NOTION_SECRET
    } as NotionAuthRequest;

    const response = await fetch(getRoute(apiRoutes.notionAccessToken), {
        method: method.POST,
        body: JSON.stringify(requestBody),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => response.json())
        .catch(err => { throw new Error('Error fetching availability'); }); // gonna need to handle this

    return response;
};

// GET USER INTEGRATIONS
const getUserIntegrations = async(ndexToken: string) => {
    const response = await fetch(getRoute(apiRoutes.userIntegrations), {
        method: method.GET,
        headers: {
            'Authorization': `Bearer ${ndexToken}`
        }
    })
        .then(response => response.json())
        .catch(err => { throw new Error('Error fetching user integrations'); });

    return response
};

export {
    signupUser,
    signinUser,
    fetchNotionAccessToken,
    getUserIntegrations
};