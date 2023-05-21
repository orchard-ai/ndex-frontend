export interface NotionAuthRequest {
    temp_code: string
    notion_client_id: string
    notion_secret: string
}

export interface GoogleTokenRequest {
    temp_code: string
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

export enum Scope {
    Gmail = 'https://www.googleapis.com/auth/gmail.readonly',
    Calendar = 'https://www.googleapis.com/auth/calendar.readonly',
    Drive = 'https://www.googleapis.com/auth/drive.readonly',
    Notion = 'notion',
    // For google auth purposes
    UserInfo = 'https://www.googleapis.com/auth/userinfo.email',
    openId = 'openid'
}

export interface Integration {
    email: string
    oauth_provider_id: string | null
    platform: IntegrationPlatform
    scopes: string[],
}

export interface IntegrationTempCode {
    temp_code: string
    platform: IntegrationPlatform,
}

export interface AddIntegrationRequest extends Integration {
    email: string,
    access_token: string,
    extra: string
}

export interface IndexRequest {
    platform: IntegrationPlatform,
    email: string,
    scope: Scope
}