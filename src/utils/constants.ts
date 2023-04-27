import { getSourceIcon } from "components/common/PlatformIcon"

export const APP_NAME = "ndex"
export const TYPESENSE_PORT = 8108
export const SEARCH_COLOR = "#f3f3ef"
// Notion OAuth Docs: https://developers.notion.com/docs/authorization#step-1-navigate-the-user-to-the-integrations-authorization-url
const NOTION_OAUTH_URL = import.meta.env.VITE_NOTION_OAUTH_URL
const NOTION_CLIENT_ID = import.meta.env.VITE_NOTION_CLIENT_ID
const NOTION_REDIRECT_URI = import.meta.env.VITE_NOTION_REDIRECT_URI
export const NOTION_FULL_OAUTH_URL = `${NOTION_OAUTH_URL}?owner=user&client_id=${NOTION_CLIENT_ID}&redirect_uri=${NOTION_REDIRECT_URI}&response_type=code`
export const connections = [
  {
    id: 1,
    name: "Notion",
    description: "All your work in one place",
    href: NOTION_FULL_OAUTH_URL,
    icon: getSourceIcon("notion"),
    alt: "Notion Icon",
    bgColor: "bg-[#3B3A45]",
    detailedDescription: "Index all your notions notes, tasks, etc."
  },
  {
    id: 2,
    name: "Gmail",
    description: "Team communication",
    href: "#",
    icon: getSourceIcon("gmail"),
    alt: "Gmail Icon",
    bgColor: "bg-[#3B3A45]",
    detailedDescription: "Index your events (Google Calendar), your emails (Gmail), or all your documents (Google Drive)."
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
