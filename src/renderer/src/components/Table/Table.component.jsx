import React from 'react';
import {
  TableContainer,
  TableStyle,
  TableHeader,
  TableRow,
  SearchAndButtonContainer,
  ActionButton
} from "./table.styled";
import Button from "../Button/Button.component";
import { Link } from "react-router-dom";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import useTable from "./useTable";
import useListAgent from "../../pages/agent/listAgents/useListAgent";

const Table = ({ tableHeaders, tableData }) => {
  const {
    handleSearch
  } = useTable()

  const {
    handleDelete
  } = useListAgent()

  return (
    <TableContainer>
      <SearchAndButtonContainer>
        <input type="text" placeholder="Search Agent" onChange={handleSearch} />
        <Button ActionLink="agents/new" ButtonText="Create Agent" />
      </SearchAndButtonContainer>
      <TableStyle className="lab-list-table">
        <thead>
        <tr>
          {tableHeaders.map((header, index) => (
            <TableHeader key={index}>{header}</TableHeader>
          ))}
        </tr>
        </thead>
        <tbody>
        {tableData.map((agent, index) => (
          <TableRow key={index}>
            <td>{agent.name}</td>
            <td>{agent.email}</td>
            <td>{agent.phone}</td>
            <td>{agent.address.street}, {agent.address.city}, {agent.address.zip}</td>
            <ActionButton>
              <Link to={`/agents/edit/${agent.id}`}><EditOutlined /></Link>
              <DeleteOutlined onClick={() => handleDelete(agent.id)} />
            </ActionButton>
          </TableRow>
        ))}
        </tbody>
      </TableStyle>
    </TableContainer>
  );
};

export default Table;
