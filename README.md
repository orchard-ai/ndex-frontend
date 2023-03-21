# ndex-frontend

- React project created using `create vite app`.

# How to run

1. Clone repo
2. `npm install`
3. Create a `.env` file in the root folder.
  - Put the following environment variables in:
  ```
  VITE_TYPESENSE_API=xyz
  VITE_CLIENT_ID=
  ```
  - Get the client id by signing into orchardlabs.team@gmail.com (ask Pan for password), and going to the [Google Console](https://console.cloud.google.com/apis/credentials).
3. `npm run dev`
4. If Google OAuth is not working, change the URL prefix from `127.0.0.1` to `localhost`.
5. If this is your first time running it, navigate to the Settings page and click on "Connect Backend" to index the integrations' data. You will need the backend and the Typesense docker running for this.

## Dependencies
- Tailwindcss
- DaisyUI
- HeadlessUI
- React Router v6
- For full list, see `package.json`
