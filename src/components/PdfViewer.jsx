import PropTypes from 'prop-types';

function PdfViewer({ pdfSrc }) {
  return (
    <>
      <div>
        <iframe src={pdfSrc} width='100%' height='1000px'></iframe>
      </div>
    </>
  );
}

PdfViewer.propTypes = {
  pdfSrc: PropTypes.string.isRequired,
};

export default PdfViewer;
