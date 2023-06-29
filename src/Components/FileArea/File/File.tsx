import React from 'react';
import './File.css';
import { FileProps } from '@/Typings/typings';
import { urlFor } from '../../../Utils/fetchImage';

const File = (props: FileProps) => {
  return (
    <div className="fileContainer">
      <div className="desktopImage">
        <img
          src={urlFor(props.file.image).url()}
          height="100%"
          width="100%"
          alt={''}
        />
      </div>
      <div className="fileName">{props.file.filename}</div>
    </div>
  );
};

export default File;
