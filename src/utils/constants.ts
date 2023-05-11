import { IntegrationPlatform } from "api/models"
import { getSourceIcon } from "components/common/PlatformIcon"

export const APP_NAME = "ndex"
export const TYPESENSE_PORT = 8108
export const SEARCH_COLOR = "#f3f3ef"
// Notion OAuth Docs: https://developers.notion.com/docs/authorization#step-1-navigate-the-user-to-the-integrations-authorization-url
const NOTION_OAUTH_URL = import.meta.env.VITE_NOTION_OAUTH_URL
const NOTION_REDIRECT_URI = import.meta.env.VITE_NOTION_REDIRECT_URI
export const NOTION_CLIENT_ID = import.meta.env.VITE_NOTION_CLIENT_ID
export const NOTION_SECRET = import.meta.env.VITE_NOTION_CLIENT_SECRET
export const NOTION_FULL_OAUTH_URL = `${NOTION_OAUTH_URL}?owner=user&client_id=${NOTION_CLIENT_ID}&redirect_uri=${NOTION_REDIRECT_URI}&response_type=code`

export const ROUTES = {
  AUTHENTICATE: '/authenticate',
  SEARCH: '/search',
  ADD_FIRST_CONNECTION: '/add-first-connection',
  SETTINGS: '/settings/:tab', // NEVER USE THIS ONE. USE ONE OF THE SETTINGS ROUTES BELOW
  SETTINGS_ACCOUNT: '/settings/account',
  SETTINGS_CONNECTIONS: '/settings/connections',
  NOTION_REDIRECT: '/notion-access-redirect'
};

export enum GoogleScopes {
  Gmail = 'https://www.googleapis.com/auth/gmail.readonly',
  Calendar = 'https://www.googleapis.com/auth/calendar.readonly',
  Drive = 'https://www.googleapis.com/auth/drive.readonly'
}

export const connections = [
  {
    id: 1,
    platform: IntegrationPlatform.Notion,
    name: "Notion",
    description: "Search across all of your Notion pages and databases with ndex",
    href: NOTION_FULL_OAUTH_URL,
    icon: getSourceIcon("notion"),
    alt: "Notion Icon",
    detailedDescription: "Index all your Notion notes, tasks, etc."
  },
  {
    id: 2,
    platform: IntegrationPlatform.Google,
    name: "Gmail",
    description: "Team communication",
    href: "#",
    icon: getSourceIcon("gmail"),
    alt: "Gmail Icon",
    detailedDescription: "Index your emails, messages, and important documents from Google Gmail!"
  },
  {
    id: 3,
    name: "Google Calendar",
    description: "Your timely events!",
    href: "#",
    icon: getSourceIcon("g-calendar"),
    alt: "Google Calendar Icon",
    detailedDescription: "Index your events your calendar events from Google Calendar!"
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
]
