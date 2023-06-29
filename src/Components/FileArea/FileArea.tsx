import React from 'react';
import './FileArea.css';
import useSanityFetchData from '../../api/useSanityFetchData';
import File from './File/File';
import { DesktopFile } from '@/Typings/typings';

export default function FileArea() {
  const { data, loading } = useSanityFetchData('files');

  //need onClick Handler
  return (
    <div className="fileArea">
      {!loading && data !== null ? (
        data.map((file: DesktopFile, index: number) => {
          return <File file={file} key={index} />;
        })
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
