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
import api from "../api/api";
import { toast } from "react-toastify";

export type TestDetails = {
  id: string;
  name: string;
  status: string;
  level: string;
  message: string;
};

export default function TestSuite() {
  const [allTestDetails, setAllTestDetails] = useState<TestDetails[]>([]);
  // const [testSuitePID, setTestSuitePID] = useState(null);

  // Starting thee test suite.
  const handleStart = async () => {
    try {
      await api.get("/tests/");
      // setTestSuitePID(response.data["pid"]);
      toast.info("Starting the test suite.");
    } catch (error) {
      console.log(error);
      toast.error("Starting test suite faild.");
    }
  };

  const getTestSummary = async () => {
    try {
      const response = await api.get("/tests/summary");
      setAllTestDetails(response.data);
      console.log(response.data);
    } catch (error) {
      console.log("Error getting the test summary", error);
      toast.error("Error getting the test summary");
    }
  };

  const handleStop = async () => {
    // if (!testSuitePID) {
    //   toast.info("Test suite is not running at the moment.");
    //   return;
    // }
    // try {
    //   await api.get(`tests/stop/${testSuitePID}`);
    //   toast.success("Successfully killed the test suite process.");
    // } catch (error) {
    //   console.log("Errors stoping the test suite", error);
    // }
  };

  useEffect(() => {
    const intervalId = setInterval(getTestSummary, 1000);

    // Cleanup function to clear the interval on unmount
    return () => clearInterval(intervalId);
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
          <IconButton onClick={handleStart}>
            <PlayCircleFilledWhiteIcon fontSize="large" color="success" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Stop the test process">
          <IconButton onClick={handleStop}>
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
