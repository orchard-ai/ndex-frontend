import axios from "axios"

const URL = "typesense url here"

export const getSearch = async (search: string) => {
  const { data } = await axios.get(URL, {
    params: {
      search,
    },
  })
  return data
}

// Should only appear in dev environment
export const handleConnectBackend = (setIsLoading: any) => {
  console.log("Starting backend connection.")
  setIsLoading(true)
  axios
    .get("http://localhost:3001/notion/search_notion")
    .then((res) => {
      console.log("Finished notion search. Starting creating typesense schema.")
      return axios.get(
        "http://localhost:3001/typesense/create_typesense_schema"
      )
    })
    .then((res) => {
      console.log("Finished creating typesense schema. Starting indexing.")
      return axios.get("http://localhost:3001/typesense/batch_index")
    })
    .then((res) => {
      console.log("Finished backend connection. Successful!")
      setIsLoading(false)
      alert("Finished backend connection. Successful!")
    })
    .catch((err) => {
      alert("There was an error attemping to connect to the backend")
      console.log(err)
      setIsLoading(false)
    })
}
