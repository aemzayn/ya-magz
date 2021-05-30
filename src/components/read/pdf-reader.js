import { useState } from "react"
import { Document, Page } from "react-pdf"

const PDFReader = ({ link }) => {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
  }

  if (!link) return null

  return (
    <div>
      <Document
        file={link}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={err => console.log(err)}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  )
}

export default PDFReader
