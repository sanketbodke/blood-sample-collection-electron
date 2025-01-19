import React from "react";
import { Modal } from "antd";

const PdfPreview = ({ isVisible, pdfUrl, onClose }) => {
  return (
    <Modal
      title="PDF Preview"
      open={isVisible}
      onCancel={onClose}
      footer={null}
      width={800}
    >
      {pdfUrl ? (
        <div style={{ height: "70vh", overflow: "hidden" }}>
          <iframe
            src={`${pdfUrl}/&embedded=true`}
            title="Report"
            style={{
              width: "100%",
              height: "100%",
              border: "none",
            }}
          />
        </div>
      ) : (
        <p>No PDF available.</p>
      )}
    </Modal>
  );
};

export default PdfPreview;
