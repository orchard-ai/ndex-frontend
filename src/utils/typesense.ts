import TypesenseInstantSearchAdapter from "typesense-instantsearch-adapter"
import { TYPESENSE_PORT } from "utils/constants"

export const typesenseInstantSearchAdapter = new TypesenseInstantSearchAdapter({
  server: {
    apiKey: import.meta.env.VITE_TYPESENSE_API,
    nodes: [
      {
        host: "localhost",
        port: TYPESENSE_PORT,
        protocol: "http",
      },
    ],
  },
  additionalSearchParameters: {
    query_by: "title,contents",
    query_by_weights: "4,2",
  },
})
