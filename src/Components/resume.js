import React from 'react';
import PDF from 'react-pdf-js-infinite';
import MuradZalovResume from '../Static/MuradZalovResume.pdf'
 
export default class MyPdfViewer extends React.Component {
 
  render() {
    return (
      <div>
        <PDF file={MuradZalovResume} scale={1.5} />
      </div>
    )
  }
}