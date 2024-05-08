import {
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Typography,
} from "@mui/material";
import { TestDetails } from "../../pages/test-suite";
import { useState } from "react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface ITestDetailsProps {
  allTestDetails: TestDetails[];
}

export default function TestInformation(props: ITestDetailsProps) {
  const { allTestDetails } = props;
  const [open, setOpen] = useState(false);
  const [clickedDescription, setClickedDescription] = useState("");
  return (
    <TableContainer component={Paper} elevation={0}>
      <Table sx={{ minWidth: 800 }} aria-label="simple table">
        <TableHead sx={{ bgcolor: "#EBFFEB" }}>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">Level</TableCell>
            <TableCell align="center">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allTestDetails.map((row) => (
            <TableRow
              key={row.name}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                cursor: "pointer",
              }}
              onClick={() => {
                setClickedDescription(row.message);
                setOpen(true);
              }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.level}</TableCell>
              <TableCell align="center">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Modal
        open={open}
        onClose={() => {
          console.log("closing");
          setOpen(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Details about the test
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {clickedDescription}
          </Typography>
        </Box>
      </Modal>
    </TableContainer>
  );
}
