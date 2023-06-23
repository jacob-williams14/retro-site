import React from 'react'
import './FileArea.css'
import useSanityFetchData from '../../api/useSanityFetchData'
import File from './File/File'

export default function FileArea() {
  //todo: retrieve data from sanity
  const {data, loading} = useSanityFetchData('files')

  //need onClick Handler
  return (
    <div className='fileArea'>
      {loading ? (<p>Loading...</p>) : (data.map((file, index) => {
        return (
          <File file={file} key={index} />
        )
      }))}
    </div>
  )
}
