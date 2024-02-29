import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { TestDetails } from "../../pages/test-suite";

interface ITestDetailsProps {
  allTestDetails: TestDetails[];
}

export default function TestInformation(props: ITestDetailsProps) {
  const { allTestDetails } = props;
  return (
    <TableContainer component={Paper} elevation={0}>
      <Table sx={{ minWidth: 800 }} aria-label="simple table">
        <TableHead sx={{ bgcolor: "#EBFFEB" }}>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Constraint</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allTestDetails.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.description}</TableCell>
              <TableCell align="center">{row.constraint}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
