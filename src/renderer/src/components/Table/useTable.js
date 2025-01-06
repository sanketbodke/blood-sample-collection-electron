const useTable = () => {
  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const rows = document.querySelectorAll(".lab-list-table tbody tr");

    rows.forEach(row => {
      row.style.display = row.textContent.toLowerCase().includes(searchTerm) ? "" : "none";
    });
  };

  return {
    handleSearch
  }
}

export default useTable
