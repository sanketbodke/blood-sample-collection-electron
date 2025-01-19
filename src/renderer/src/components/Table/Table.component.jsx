import React from 'react';
import {
  TableContainer,
  TableStyle,
  TableHeader,
  TableRow,
  SearchAndButtonContainer,
  ActionButton,
  TableDataContainer, PreviewReportButton
} from "./table.styled";
import Button from "../Button/Button.component";
import { Link } from "react-router-dom";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import useTable from "./useTable";
import useListAgent from "../../pages/agent/listAgents/useListAgent";
import useListAppointment from "../../pages/patientAppointments/listAppointment/useListAppointment";
import PdfPreview from "../PdfPreview/PdfPreview.component";
const Table = ({ tableHeaders, tableData, dataFor }) => {
  const {
    handleSearch,
    isModalVisible,
    pdfUrl,
    showPdfPreview,
    handleModalClose
  } = useTable()

  const {
    handleDelete
  } = useListAgent()

  const {
    handleAppointmentDelete
  } = useListAppointment()

  return (
    <TableContainer>
      <SearchAndButtonContainer>
        {dataFor === "listAgents" ? (
          <>
            <input type="text" placeholder="Search Agent" onChange={handleSearch}/>
            <Button ActionLink="agents/new" ButtonText="Create Agent"/>
          </>
        ) : dataFor === "listAppointments" ?(
          <>
            <input type="text" placeholder="Search Appointment" onChange={handleSearch}/>
            <Button ActionLink="patient/appointments/new" ButtonText="Schedule Appointment"/>
          </>
        ) : dataFor === "listSamples" ?(
          <input type="text" placeholder="Search Samples" onChange={handleSearch}/>
        ): <></>}
      </SearchAndButtonContainer>
      <TableDataContainer>
        <TableStyle className="lab-list-table">
          <thead>
          <tr>
            {tableHeaders.map((header, index) => (
              <TableHeader key={index}>{header}</TableHeader>
            ))}
          </tr>
          </thead>
          <tbody>
          {dataFor === "listAgents" ? (
            <>
              {tableData.map((agent, index) => (
                <TableRow key={index}>
                  <td>{agent.name}</td>
                  <td>{agent.email}</td>
                  <td>{agent.phone}</td>
                  <td>
                    {agent.address
                      ? `${agent.address.street}, ${agent.address.city}, ${agent.address.zip}`
                      : "Address not available"}
                  </td>
                  <ActionButton>
                    <Link to={`/agents/edit/${agent.id}`}>
                      <EditOutlined />
                    </Link>
                    <DeleteOutlined onClick={() => handleDelete(agent.id)} />
                  </ActionButton>
                </TableRow>
              ))}
            </>
          ) : dataFor === "listAppointments" ? (
            <>
              {tableData.map((appointment, key) => (
                <TableRow key={key}>
                  <td>{appointment.id}</td>
                  <td>{appointment.agent.name}</td>
                  <td>{appointment.appointment_time}</td>
                  <td>{appointment.test_type}</td>
                  <td>{appointment.status}</td>
                  <td>{appointment.collection_location}</td>
                  <td>{appointment.note}</td>
                  <td>
                    <PreviewReportButton
                      onClick={() => showPdfPreview(appointment.user?.report_url) || "Report Not Yet Generated"}
                    >
                      View
                    </PreviewReportButton>
                  </td>
                  <ActionButton>
                    <Link to={`/patient/appointments/edit/${appointment.id}`}>
                      <EditOutlined/>
                    </Link>
                    <DeleteOutlined onClick={() => handleAppointmentDelete(appointment.id)}/>
                  </ActionButton>
                </TableRow>
              ))}
            </>
          ) : dataFor === "listSamples" ? (
            <>
              {tableData?.map((appointment, key) => (
                <TableRow key={key}>
                  <td>{appointment.id}</td>
                  <td>{appointment.agent.name}</td>
                  <td>{appointment.user.user_id}</td>
                  <td>{appointment.user.first_name} {appointment.user.last_name}</td>
                  <td>{appointment.appointment_time}</td>
                  <td>{appointment.test_type}</td>
                  <td>{appointment.status}</td>
                  <td>{appointment.collection_location}</td>
                  <td>{appointment.note}</td>
                  <td>
                    <PreviewReportButton
                      onClick={() => showPdfPreview(appointment.user?.report_url)}
                    >
                      View
                    </PreviewReportButton>
                  </td>
                  <ActionButton>
                    <Link to={`/patient/samples/edit/${appointment.id}`}>
                      <EditOutlined/>
                    </Link>
                  </ActionButton>
                </TableRow>
              ))}
            </>
          ) : <p><p>No data available</p></p>}
          </tbody>
        </TableStyle>
      </TableDataContainer>
      <PdfPreview
        isVisible={isModalVisible}
        pdfUrl={pdfUrl}
        onClose={handleModalClose}
      />
    </TableContainer>
  );
};

export default Table;
