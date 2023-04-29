export interface NotionAuthRequest {
    temp_code: string
    notion_client_id: string
    notion_secret: string
}

export interface UserSignupRequest {
    email: string
    oauthProviderId: string
    oauthAccessToken: string
    password: string
    accountType: AccountType
}

export enum AccountType {
    Credentials,
    Google,
    Apple,
}