import { IntegrationPlatform, Scope } from "api/models";
import { getSourceIcon } from "components/common/PlatformIcon";

export const APP_NAME = "ndex";
export const TYPESENSE_PORT = 8108;
export const SEARCH_COLOR = "#f3f3ef";
// Notion OAuth Docs: https://developers.notion.com/docs/authorization#step-1-navigate-the-user-to-the-integrations-authorization-url
const NOTION_OAUTH_URL = "https://api.notion.com/v1/oauth/authorize";
export const NOTION_CLIENT_ID = import.meta.env.VITE_NOTION_CLIENT_ID;
export const NOTION_SECRET = import.meta.env.VITE_NOTION_CLIENT_SECRET;
export const NOTION_FULL_OAUTH_URL = `${NOTION_OAUTH_URL}?owner=user&client_id=${NOTION_CLIENT_ID}&redirect_uri=https://app.ndex.gg/notion-access-redirect&response_type=code`;

// Google OAuth Docs: https://developers.google.com/identity/openid-connect/openid-connect#libraries
export const GOOGLE_CLIENT_ID = import.meta.env.VITE_CLIENT_ID;

export const GOOGLE_GMAIL_OAUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${GOOGLE_CLIENT_ID}&scope=openid%20email%20${Scope.Gmail}&redirect_uri=https://app.ndex.gg/google-access-redirect&access_type=offline`;
export const GOOGLE_GCAL_OAUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${GOOGLE_CLIENT_ID}&scope=openid%20email%20${Scope.Calendar}&redirect_uri=https://app.ndex.gg/google-access-redirect&access_type=offline`;
export const GOOGLE_DRIVE_OAUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${GOOGLE_CLIENT_ID}&scope=openid%20email%20${Scope.Drive}&redirect_uri=https://app.ndex.gg/google-access-redirect&access_type=offline`;

export const ROUTES = {
  AUTHENTICATE: "/authenticate",
  SEARCH: "/search",
  ADD_FIRST_CONNECTION: "/add-first-connection",
  SETTINGS: "/settings/:tab", // NEVER USE THIS ONE. USE ONE OF THE SETTINGS ROUTES BELOW
  SETTINGS_ACCOUNT: "/settings/account",
  SETTINGS_CONNECTIONS: "/settings/connections",
  NOTION_REDIRECT: "/notion-access-redirect",
  GOOGLE_REDIRECT: "/google-access-redirect",
};

export const connections = [
  {
    id: 1,
    platform: IntegrationPlatform.Notion,
    name: "Notion",
    description: "Search across all of your Notion pages and databases with ndex",
    href: NOTION_FULL_OAUTH_URL,
    icon: getSourceIcon("notion"),
    alt: "Notion Icon",
    detailedDescription: "Index all your Notion notes, tasks, etc.",
    scope: Scope.Notion,
  },
  {
    id: 2,
    platform: IntegrationPlatform.Google,
    name: "Gmail",
    description: "Team communication",
    href: GOOGLE_GMAIL_OAUTH_URL,
    icon: getSourceIcon("gmail"),
    alt: "Gmail Icon",
    detailedDescription:
      "Index your emails, messages, and important documents from Google Gmail!",
    scope: Scope.Gmail,
  },
  {
    id: 3,
    platform: IntegrationPlatform.Google,
    name: "Google Calendar",
    description: "Your timely events!",
    href: GOOGLE_GCAL_OAUTH_URL,
    icon: getSourceIcon("g-calendar"),
    alt: "Google Calendar Icon",
    detailedDescription: "Index your calendar events from Google Calendar!",
    scope: Scope.Calendar,
  },
  {
    id: 4,
    platform: IntegrationPlatform.Google,
    name: "Google Drive",
    description: "All your files and documents",
    href: GOOGLE_DRIVE_OAUTH_URL,
    icon: getSourceIcon("g-drive"),
    alt: "Google Drive Icon",
    detailedDescription: "Index your files from Google Drive!",
    scope: Scope.Drive,
  },
  // {
  //   id: 3,
  //   name: "GitHub",
  //   description: "Code and collaboration",
  //   href: "#",
  //   icon: "https://tailwindui.com/img/logos/github-logo.svg",
  //   alt: "GitHub Icon",
  //   bgColor: "bg-gray-100 text-gray-800",
  // },
  // {
  //   id: 4,
  //   name: "Twitter",
  //   description: "Social media",
  //   href: "#",
  //   icon: "https://tailwindui.com/img/logos/twitter-logo.svg",
  //   alt: "Twitter Icon",
  //   bgColor: "bg-gray-100 text-gray-800",
  // },
];
