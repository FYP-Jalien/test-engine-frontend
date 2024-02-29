import {
  Box,
  IconButton,
  Paper,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import StopCircleIcon from "@mui/icons-material/StopCircle";
import TestInformation from "../components/test-details";
import { useEffect, useState } from "react";

export type TestDetails = {
  name: string;
  description: string;
  constraint: string;
};

export default function TestSuite() {
  const [allTestDetails, setAllTestDetails] = useState<TestDetails[]>([]);

  useEffect(() => {
    setAllTestDetails([
      {
        name: "test1",
        description: "test1 description",
        constraint: "test1 constraint",
      },
    ]);
  }, []);
  return (
    <Box>
      <Typography variant="body2" fontSize={36} fontWeight="bold">
        Test Suite
      </Typography>

      <Stack direction="row" sx={{ mt: 2 }} spacing={1}>
        <Typography fontSize={20}>Test Status:</Typography>
        <Typography fontSize={20} color="green" fontWeight={800}>
          Ready
        </Typography>
      </Stack>

      <Box sx={{ mt: 2 }} />
      <Stack direction="row">
        <Tooltip title="Start the test process">
          <IconButton>
            <PlayCircleFilledWhiteIcon fontSize="large" color="success" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Stop the test process">
          <IconButton
            disabled={true}
            onClick={() => {
              console.log("disabled");
            }}
          >
            <StopCircleIcon fontSize="large" color="error" />
          </IconButton>
        </Tooltip>
      </Stack>
      <Paper sx={{ width: 800, height: 300, pt: 8, mt: 1 }} elevation={0}>
        <Typography variant="body2">No any logs found</Typography>
      </Paper>
      <Box sx={{ mt: 2 }} />
      <TestInformation allTestDetails={allTestDetails} />
    </Box>
  );
}
