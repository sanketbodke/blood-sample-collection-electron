import PagesHeading from "../../../components/PagesHeading/PagesHeading.component";
import Table from "../../../components/Table/Table.component"
import useListAppointment from "./useListAppointment";
const ListAppointment = () => {

  const {
    tableHeaders,
    data,
    error,
    isLoading,
    isError
  } = useListAppointment()

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching appointments: {error.message}</div>;

  console.log(data)
  return (
    <div>
      <PagesHeading
        heading="Appointments"
      />
      <Table
        tableHeaders={tableHeaders}
        tableData={data}
        dataFor="listAppointments"
      />
    </div>
  );
};

export default ListAppointment;
