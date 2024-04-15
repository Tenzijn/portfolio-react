import { Worker, Viewer } from '@react-pdf-viewer/core';

function Cv() {
  return (
    <Worker workerUrl='https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js'>
      <div
        style={{
          border: '1px solid rgba(0, 0, 0, 0.3)',
          height: '750px',
        }}
      >
        <Viewer fileUrl='/TenzinKunchokCV.pdf' />
      </div>
    </Worker>
  );
}

export default Cv;
