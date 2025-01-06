import React from 'react';
import useListAgent from "./useListAgent";
import Table from "../../../components/Table/Table.component";
import PagesHeading from "../../../components/PagesHeading/PagesHeading.component";
const ListAgents = () => {
  const {
    data,
    error,
    isLoading,
    isError,
    tableHeaders,
    tableData
  } = useListAgent()

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>No agents found</div>;
  }

  console.log(data)

  return (
    <div>
      <PagesHeading
        heading={"Agents"}
      />
      <Table
        tableHeaders={tableHeaders}
        tableData={tableData}
      />
    </div>
  );
};

export default ListAgents;
