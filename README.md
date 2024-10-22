# ndex-frontend

- React project created using [create vite app](https://vitejs.dev/).

# Dev Environment Setup

1. Clone repo
2. `yarn install`
3. Create a `.env` file in the root folder.

- Put the following environment variables in:

```
VITE_TYPESENSE_API=xyz
VITE_CLIENT_ID=
VITE_NOTION_CLIENT_ID=
VITE_NOTION_CLIENT_SECRET=
VITE_NOTION_REDIRECT_URI=http://localhost:5173/notion-access-redirect
VITE_NOTION_OAUTH_URL=https://api.notion.com/v1/oauth/authorize
```

- Get the client id by signing into orchardlabs.team@gmail.com (ask Pan for password), and going to the [Google Console](https://console.cloud.google.com/apis/credentials).
- Get Notion client ID by signing into orchardlabs.team@gmail.com on Notion. Navigate to `Settings & members > Connections > Develop or manage integrations` (or go to [https://www.notion.so/my-integrations](https://www.notion.so/my-integrations)).
- Get Notion client secret in the [Google Console](https://console.cloud.google.com/apis/credentials).

3. `yarn run dev`
4. If Google OAuth is not working, change the URL prefix from `127.0.0.1` to `localhost`.
5. If this is your first time running it, navigate to the Settings page and click on "Connect Backend" to index the integrations' data. You will need the backend and the Typesense docker running for this.

## Dev testing

- To avoid having to create an account (and obtaining a token to access private routes), you can set the `initial state` in `src/store/user/userAuthSlice.tsx` for `token` to be non-null. This will grant you access to all private routes.

## Dependencies

- Tailwindcss
- DaisyUI
- HeadlessUI
- React Router v6
- For full list, see [package.json](https://github.com/orchard-ai/ndex-frontend/blob/main/package.json)

## Linter

This project uses ESLint. In the root of this project, run

```
npx eslint .
```

to see all style warnings and errors.
