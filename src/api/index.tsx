import { NOTION_CLIENT_ID, NOTION_SECRET } from "utils/constants";
import { NotionAuthRequest, UserSignupRequest } from "./models";

const baseUrl = 'http://localhost:3001';

enum apiRoutes {
    userSignup = '/user/signup',
    notionAccessToken = '/notion/obtain_access_token',
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
const signupUser = async(signupRequest: UserSignupRequest) => {
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

export {
    signupUser,
    fetchNotionAccessToken
};