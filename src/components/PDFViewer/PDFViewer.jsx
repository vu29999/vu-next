

'use client';

import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import './PDFViewer.css';

import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import { useEffect, useRef } from 'react';

const PDFViewer01 = ({ fileUrl }) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  useEffect(() => {
    const viewer = document.querySelector('.rpv-core__viewer');
    if (viewer) viewer.classList.add('rpv-core__viewer--dark');
  }, []);
  return (
    <div style={{ height: '750px' }} className="plu-wrap">
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
        <Viewer fileUrl={fileUrl} plugins={[defaultLayoutPluginInstance]} />
      </Worker>
    </div>
  );
};

export default PDFViewer01;


// import React from 'react';
// import { PDFViewer, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// const styles = StyleSheet.create({
//   page: { padding: 30 },
//   section: { margin: 10, padding: 10, fontSize: 14 }
// });

// const PDFViewer01 = () => (
//   <PDFViewer width="100%" height="600">
//     <Document>
//       <Page size="A4" style={styles.page}>
//         <View style={styles.section}>
//           <Text>Xin chào từ React PDF!</Text> <Text>Xin chào từ React PDF!</Text>
//         </View>
//       </Page><Page size="A4" style={styles.page}>
//         <View style={styles.section}>
//           <Text>Xin chào từ React PDF!</Text> <Text>Xin chào từ React PDF!</Text>
//         </View>
//       </Page>
//     </Document>
//   </PDFViewer>
// );

// export default PDFViewer01;


// 'use client';

// import { useState } from 'react';
// import { Document, Page, pdfjs } from 'react-pdf';
// import 'react-pdf/dist/Page/AnnotationLayer.css';
// import 'react-pdf/dist/Page/TextLayer.css';

// pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';

// interface PDFViewerProps {
//   fileUrl: string;
// }

// const PDFViewer: React.FC<PDFViewerProps> = ({ fileUrl }) => {
//   const [numPages, setNumPages] = useState<number | null>(null);

//   const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
//     setNumPages(numPages);
//   };

//   return (
//     <div>
//       <Document
//         file={fileUrl}
//         onLoadSuccess={onDocumentLoadSuccess}
//         onLoadError={(error) => console.error('Load PDF error:', error)}
//       >
//         {Array.from(new Array(numPages || 0), (_, index) => (
//           <Page key={`page_${index + 1}`} pageNumber={index + 1} />
//         ))}
//       </Document>
//     </div>
//   );
// };

// export default PDFViewer;
