export const APP_NAME = "ndex";
export const TYPESENSE_PORT = 8108;
export const SEARCH_COLOR = "#f3f3ef";
// Notion OAuth Docs: https://developers.notion.com/docs/authorization#step-1-navigate-the-user-to-the-integrations-authorization-url
export const NOTION_AUTH_URL = `https://api.notion.com/v1/oauth/authorize?
client_id=${import.meta.env.VITE_NOTION_CLIENT_ID}&
redirect_uri=${import.meta.env.VITE_NOTION_REDIRECT_URI}&
owner=user&
response_type=code`;