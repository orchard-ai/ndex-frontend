export interface NotionAuthRequest {
    temp_code: string
    notion_client_id: string
    notion_secret: string
}

export interface UserAuthRequest {
    email: string
    oauth_provider_id: string | null
    oauth_access_token: string | null
    password: string | null
    account_type: AccountType
}

export enum AccountType {
    Credentials = 0,
    Google = 1,
    Apple = 2,
}

export enum FetchState {
    Idle,
    Pending,
    Complete,
    Failed,
}

export enum IntegrationPlatform {
    File = 0,
    Notion = 1,
    Google = 2,
    Discord = 3,
    Slack = 4,
}

export interface Integration {
    email: string
    oauth_provider_id: string | null
    platform: IntegrationPlatform
    scopes: string[],
}

export interface IntegrationTempCode {
    temp_code: string
    scopes: string[]
    platform: IntegrationPlatform
}

export interface AddIntegrationRequest extends Integration {
    email: string,
    access_token: string,
    extras: string
}