export interface NotionAuthRequest {
    temp_code: string
    notion_client_id: string
    notion_secret: string
}

export interface UserAuthRequest {
    email: string
    oauth_provider_id: string | undefined
    oauth_access_token: string | undefined
    password: string | undefined
    account_type: AccountType
}

export enum AccountType {
    Credentials = 0,
    Google = 1,
    Apple = 2,
}