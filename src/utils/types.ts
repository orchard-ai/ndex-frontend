import { IntegrationPlatform } from "api/models"

export type Hit = {
  contents: string
  created_time: number
  id: string
  last_edited_time: number
  platform: string
  title: string
  type: string
  url: string
  _highlightResult: HightlightedResult
}

export interface HightlightedResult {
  contents: Contents
  created_time: Contents
  id: Contents
  last_edited_time: Contents
  platform: Contents
  title: Contents
  type: Contents
  url: Contents
}

export interface Contents {
  value: string
  matchLevel: string
  matchedWords: string[]
}

export type User = {
  clientId: string
  name: string
  email: string
}

export type Account = {
  email: string
}

export type Connection = {
    id: number,
    name: string,
    platform: IntegrationPlatform,
    description: string,
    href: string,
    icon: string,
    alt: string,
    detailedDescription: string
}
