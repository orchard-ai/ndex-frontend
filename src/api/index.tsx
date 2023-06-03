import { NOTION_CLIENT_ID, NOTION_SECRET } from "utils/constants";
import {
  AddIntegrationRequest,
  NotionAuthRequest,
  UserAuthRequest,
  IntegrationPlatform,
  IndexRequest,
  GoogleTokenRequest,
  Scope,
} from "./models";

const baseUrl = "http://localhost:3001";

enum apiRoutes {
  userSignup = "/user/signup",
  userLogin = "/user/login",
  notionAccessToken = "/notion/obtain_access_token",
  googleAccessToken = "/google/obtain_access_token",
  userIntegrations = "/user/integrations",
  userEmail = "/user/get_email",
  addIntegrationToUser = "/user/add_integration",
  notionIndex = "/notion/index",
  gmailIndex = "/google/index_gmail",
  gcalIndex = "/google/index_calendar",
  gdriveIndex = "/google/index_drive",
}

const method = {
  POST: "POST",
  GET: "GET",
  PUT: "PUT",
};

const getRoute = (api: apiRoutes) => {
  return baseUrl + api;
};

const isStatusOk = (status: number) => {
  return status === 200;
};

// USER SIGNUP
const signupUser = async (signupRequest: UserAuthRequest) => {
  try {
    const response = await fetch(getRoute(apiRoutes.userSignup), {
      method: method.POST,
      body: JSON.stringify(signupRequest),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!isStatusOk(response.status)) {
      throw new Error("Trouble signing up.");
    }

    const data = await response.json();
    return data;
  } catch {
    throw new Error("Something went wrong while signing up.");
  }
};

// USER LOGIN
const signinUser = async (loginRequest: UserAuthRequest) => {
  try {
    const response = await fetch(getRoute(apiRoutes.userLogin), {
      method: method.POST,
      body: JSON.stringify(loginRequest),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!isStatusOk(response.status)) {
      throw new Error("Trouble logging in.");
    }

    const data = await response.json();
    return data;
  } catch {
    throw new Error("Something went wrong while signing in.");
  }
};

const getUserEmail = async (ndexToken: string) => {
  const response = await fetch(getRoute(apiRoutes.userEmail), {
    method: method.GET,
    headers: {
      Authorization: `Bearer ${ndexToken}`,
    },
  })
    .then((response) => response.json())
    .catch((err) => {
      throw new Error("Error fetching user integrations");
    });

  return response;
};

// NOTION ACCESS TOKEN
const fetchNotionAccessToken = async (tempCode: string) => {
  const requestBody = {
    temp_code: tempCode,
    notion_client_id: NOTION_CLIENT_ID,
    notion_secret: NOTION_SECRET,
  } as NotionAuthRequest;

  const response = await fetch(getRoute(apiRoutes.notionAccessToken), {
    method: method.POST,
    body: JSON.stringify(requestBody),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((err) => {
      throw new Error("Error fetching availability");
    }); // gonna need to handle this

  return response;
};

// GOOGLE ACCESS TOKEN
const obtainGoogleAccessToken = async (tempCode: string) => {
  const requestBody = {
    temp_code: tempCode,
  } as GoogleTokenRequest;

  try {
    const response = await fetch(getRoute(apiRoutes.googleAccessToken), {
      method: method.POST,
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    return data;
  } catch {
    throw new Error("Something went wrong while obtain Google access token.");
  }
};

// ADD INTEGRATION FOR USER
const addIntegrationForUser = async (
  ndexToken: string,
  request: AddIntegrationRequest
) => {
  const response = await fetch(getRoute(apiRoutes.addIntegrationToUser), {
    method: method.POST,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${ndexToken}`,
    },
    body: JSON.stringify(request),
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));

  return response;
};

// GET USER INTEGRATIONS
const getUserIntegrations = async (ndexToken: string) => {
  const response = await fetch(getRoute(apiRoutes.userIntegrations), {
    method: method.GET,
    headers: {
      Authorization: `Bearer ${ndexToken}`,
    },
  })
    .then((response) => response.json())
    .catch((err) => {
      throw new Error("Error fetching user integrations");
    });

  return response;
};

// INDEXING
const indexAccount = async (ndexToken: string, request: IndexRequest) => {
  const getIndexRoute = (p: IntegrationPlatform, s: Scope) => {
    switch (p) {
      case IntegrationPlatform.Notion: {
        return getRoute(apiRoutes.notionIndex);
      }
      case IntegrationPlatform.Google: {
        return getIndexRouteByScope(s);
      }
    }

    throw new Error("No platform found");
  };

  const getIndexRouteByScope = (s: Scope) => {
    switch (s) {
      case Scope.Gmail: {
        return getRoute(apiRoutes.gmailIndex);
      }
      case Scope.Calendar: {
        return getRoute(apiRoutes.gcalIndex);
      }
      case Scope.Drive: {
        return getRoute(apiRoutes.gdriveIndex);
      }
    }

    throw new Error("No scope found");
  };

  const { platform, email, scope } = request;

  try {
    const indexingRoute = getIndexRoute(platform, scope);

    const response = await fetch(indexingRoute, {
      method: method.POST,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ndexToken}`,
      },
      body: JSON.stringify({
        email: email,
      }),
    });

    if (!isStatusOk(response.status)) {
      throw new Error(`Trouble while indexing ${platform}.${scope}`);
    }

    const data = await response.json();
    return data;
  } catch {
    throw new Error(`Something went wrong while indexing ${platform}.${scope}`);
  }
};

export {
  signupUser,
  signinUser,
  fetchNotionAccessToken,
  obtainGoogleAccessToken,
  getUserIntegrations,
  getUserEmail,
  addIntegrationForUser,
  indexAccount,
};
