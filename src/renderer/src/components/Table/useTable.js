import {useState} from "react";

const useTable = () => {
  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const rows = document.querySelectorAll(".lab-list-table tbody tr");

    rows.forEach(row => {
      row.style.display = row.textContent.toLowerCase().includes(searchTerm) ? "" : "none";
    });
  };

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [pdfUrl, setPdfUrl] = useState("");

  const showPdfPreview = (url) => {
    setPdfUrl(url);
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
    setPdfUrl("");
  };

  return {
    handleSearch,
    isModalVisible,
    pdfUrl,
    showPdfPreview,
    handleModalClose
  }
}

export default useTable
