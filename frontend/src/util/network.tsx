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
