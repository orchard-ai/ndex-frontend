import { FetchState } from "api/models";

export const isFetchStatePending = (fetchStatus: FetchState): boolean => {
  return fetchStatus === FetchState.Pending;
};

export const isFetchStateFailed = (fetchStatus: FetchState): boolean => {
  return fetchStatus === FetchState.Failed;
};
