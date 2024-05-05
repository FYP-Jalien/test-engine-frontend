import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";

export type ContainerData = {
  container_name: string;
  image: string;
  uptime: string;
  status: string;
};

export interface IContainerDetailsProps {
  data: ContainerData[];
}

export default function ContainerDetails(props: IContainerDetailsProps) {
  const { data } = props;
  return (
    <TableContainer component={Paper} elevation={0}>
      <Table sx={{ minWidth: 800 }} aria-label="simple table">
        <TableHead sx={{ bgcolor: "#EBFFEB" }}>
          <TableRow>
            <TableCell>Container ID</TableCell>
            <TableCell align="right">Image</TableCell>
            <TableCell align="right">Uptime</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Bash Shell</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.container_name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.container_name}
              </TableCell>
              <TableCell align="right">{row.image}</TableCell>
              <TableCell align="right">{row.uptime}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">
                <Button variant="contained">Open</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
