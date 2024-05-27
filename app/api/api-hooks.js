import { useEffect, useState } from 'react'
import { getNormalizedGamesDataByCategory } from './api-utils'

export const useGetDataByCategory = (endpoint, category) => {
  const [data, setData] = useState(null)
  useEffect(() => {
    async function fetchData() {
      const response = await getNormalizedGamesDataByCategory(endpoint, category)
      if (isResponseOk(response)) {
        setData(response.data)
      } else {
        setData(null)
      }
    }
    fetchData()
  }, )
  return data
}
