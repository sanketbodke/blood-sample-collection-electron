import React from 'react';
import usePatientSamples from "./usePatientSamples"
import PagesHeading from "../../../components/PagesHeading/PagesHeading.component";
import Table from "../../../components/Table/Table.component";
const PatientSamples = () => {
  const {
    data,
    error,
    isLoading,
    isError,
    tableHeaders
  } = usePatientSamples()

  console.log(data)
  return (
    <div>
      <PagesHeading
        heading="Patient Samples"
      />
      <Table
        tableHeaders={tableHeaders}
        tableData={data}
        dataFor="listSamples"
      />
    </div>
  );
};

export default PatientSamples;
