import { NOTION_CLIENT_ID, NOTION_SECRET } from "utils/constants";
import {
    AddIntegrationRequest,
    NotionAuthRequest,
    UserAuthRequest,
    IndexRequest
} from "./models";

const baseUrl = 'http://localhost:3001';

enum apiRoutes {
    userSignup = '/user/signup',
    userLogin = '/user/login',
    notionAccessToken = '/notion/obtain_access_token',
    userIntegrations = '/user/integrations',
    addIntegrationToUser = '/user/add_integration',
    notionIndex = '/notion/index',
}

const method = {
	POST: 'POST',
	GET: 'GET',
	PUT: 'PUT'
};

const getRoute = (api: apiRoutes) => {
    return baseUrl + api;
};

const isStatusOk = (status: number) => {
    return status === 200;
};

// USER SIGNUP
const signupUser = async(signupRequest: UserAuthRequest) => {
    try {
        const response = await fetch(getRoute(apiRoutes.userSignup), {
            method: method.POST,
            body: JSON.stringify(signupRequest),
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if(!isStatusOk(response.status)) {
            throw new Error('Trouble signing up.');
        }

        const data = await response.json();
        return data;
    } catch {
        throw new Error('Something went wrong while signing up.');
    }
};

// USER LOGIN
const signinUser = async(loginRequest: UserAuthRequest) => {
    try {
        const response = await fetch(getRoute(apiRoutes.userLogin), {
            method: method.POST,
            body: JSON.stringify(loginRequest),
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if(!isStatusOk(response.status)) {
            throw new Error('Trouble logging in.');
        }

        const data = await response.json();
        return data;
    } catch {
        throw new Error('Something went wrong while signing in.');
    }
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

// ADD INTEGRATION FOR USER
const addIntegrationForUser = async(ndexToken: string, request: AddIntegrationRequest) => {
    const response = await fetch(getRoute(apiRoutes.addIntegrationToUser), {
        method: method.POST,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${ndexToken}`
        },
        body: JSON.stringify(request),
    })
        .then(response => response.json())
        .catch(err => console.log(err));

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

// INDEX NOTION
const indexNotion = async(ndexToken: string, request: IndexRequest) => {
    try {
        const response = await fetch(getRoute(apiRoutes.notionIndex), {
            method: method.POST,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${ndexToken}`
            },
            body: JSON.stringify(request),
        });

        if(!isStatusOk(response.status)) {
            throw new Error('Trouble while indexing Notion.');
        }

        const data = await response.json();
        return data;
    } catch {
        throw new Error('Something went wrong while indexing Notion.');
    }
}

export {
    signupUser,
    signinUser,
    fetchNotionAccessToken,
    getUserIntegrations,
    addIntegrationForUser,
    indexNotion
};