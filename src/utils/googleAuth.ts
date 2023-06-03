import { CredentialResponse } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

export const decodeGoogleCredential = (
  credentialResponse: CredentialResponse
) => {
  if (credentialResponse.credential) {
    return jwt_decode(credentialResponse.credential);
  }

  return null;
};
