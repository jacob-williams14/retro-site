import {useEffect, useState} from 'react'
import {createClient} from '@sanity/client'

const client = createClient({
  projectId: 'f9plw9di',
  dataset: 'production',
  useCdn: true
})

const useSanityFetchData = (schemaType) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `*[_type == "${schemaType}"]`
        const result = await client.fetch(query)
        setData(result)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching Sanity data:', error)
      }
    }

    fetchData()
  }, [schemaType])

  return {data, loading}
}

export default useSanityFetchData