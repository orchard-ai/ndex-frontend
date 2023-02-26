import TypesenseInstantSearchAdapter from "typesense-instantsearch-adapter"
import { PORT } from "utils/constants"

export const typesenseInstantSearchAdapter = new TypesenseInstantSearchAdapter({
  server: {
    apiKey: "xyz",
    nodes: [
      {
        host: "localhost",
        port: PORT,
        protocol: "http",
      },
    ],
  },
  additionalSearchParameters: {
    query_by: "title,contents",
    query_by_weights: "4,2",
  },
})
