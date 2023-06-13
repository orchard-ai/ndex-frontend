# ndex-frontend

React project created using [create vite app](https://vitejs.dev/).

# Dev Environment Setup

1. Clone repo
2. Make sure you are on `staging` branch.
3. `yarn install`
4. Create a `.env` file in the root folder.

- Put the following environment variables in:

```
VITE_TYPESENSE_API=
VITE_CLIENT_ID=
VITE_NOTION_CLIENT_ID=
VITE_NOTION_CLIENT_SECRET=
VITE_GOOGLE_API_KEY=
VITE_GOOGLE_CLIENT_SECRET=
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


# Development and deployment

## Development process
Use PRs against the `staging` branch for all development. The process should look like the following:

1. Create a feature or personal dev branch that is up-to-date with `staging`.
2. Make commits on the new branch.
3. Push the branch to remote: `git push origin branch-name`.
4. On Github open a new PR.
5. Merge changes once approvals and checks are met.
6. This will trigger a new deployment to the `staging` website. See next section.

Whenever needed, or once in a while, `staging` will be merged into `main` to update the production app with new features.

## AWS Amplify
Currently we have 2 deployments on AWS Amplify:

- `main` branch, which is the actual app: https://app.ndex.gg
- `staging` branch, for development: https://staging.d37uzuop9pghwd.amplifyapp.com/

CI/CD is enabled, so any new commit will trigger a new deployment.
