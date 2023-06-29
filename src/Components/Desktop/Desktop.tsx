import React from 'react';
import ContentArea from '../ContentArea/ContentArea';
import FileArea from '../FileArea/FileArea';
import './Desktop.css';

export default function Desktop() {
  return (
    <div className="homepage">
      <FileArea />
      <ContentArea />
    </div>
  );
}
