import {
  Box,
  Typography,
  Stack,
  IconButton,
  Tooltip,
  Paper,
} from "@mui/material";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import StopCircleIcon from "@mui/icons-material/StopCircle";
import ContainerDetails, {
  ContainerData,
} from "../components/container-details";
import { useEffect, useState } from "react";
import RefreshIcon from "@mui/icons-material/Refresh";
import api from "../api/api";

export type ExecutionStatus = {
  type: "waiting" | "ready" | "running" | "stopped";
  message: string;
};

export default function ReplicaTests() {
  const [containerData, setContainerData] = useState<ContainerData[]>([]);
  const [executionStatus, setExecutionStatus] = useState<ExecutionStatus>({
    type: "waiting",
    message: "Ready for execution",
  });

  const handleRefresh = async () => {
    try {
      const response = await api.get("/container/status");
      setContainerData(response.data["container_information"]);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setExecutionStatus({ type: "waiting", message: "Ready for execution" });
  }, []);

  return (
    <Box
      margin={0}
      display={"flex"}
      flexDirection="column"
      justifyContent="start"
      alignItems="start"
      width={"100%"}
      maxWidth={1200}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
      >
        <Typography variant="body2" fontSize={36} fontWeight="bold">
          JAliEn Replica Test Engine
        </Typography>
      </Stack>

      <Stack direction="row" sx={{ mt: 2 }} spacing={1}>
        <Typography fontSize={20}>Container Status:</Typography>
        <Typography fontSize={20} color="green" fontWeight={800}>
          {executionStatus.message}
        </Typography>
      </Stack>
      <Box sx={{ mt: 2 }} />
      <Stack direction="row">
        <Tooltip title="Start the containers">
          <IconButton disabled={executionStatus.type === "running"}>
            <PlayCircleFilledWhiteIcon
              fontSize="large"
              color={
                executionStatus.type === "running" ? "disabled" : "success"
              }
            />
          </IconButton>
        </Tooltip>
        <Tooltip title="Stop the containers">
          <IconButton
            disabled={
              executionStatus.type === "waiting" ||
              executionStatus.type === "ready" ||
              executionStatus.type === "stopped"
            }
          >
            <StopCircleIcon
              fontSize="large"
              color={
                executionStatus.type === "waiting" ||
                executionStatus.type === "ready" ||
                executionStatus.type === "stopped"
                  ? "disabled"
                  : "error"
              }
            />
          </IconButton>
        </Tooltip>
        <Tooltip title="Refresh">
          <IconButton onClick={handleRefresh}>
            <RefreshIcon fontSize="large" />
          </IconButton>
        </Tooltip>
      </Stack>

      <Box sx={{ mt: 2 }} />
      <Stack direction="row">
        <Typography
          variant="body2"
          fontSize={20}
          fontWeight={800}
          marginRight={4}
        >
          Container Status
        </Typography>
      </Stack>

      <Box sx={{ mt: 2 }} />
      <ContainerDetails data={containerData} />
      <Box sx={{ mt: 2 }} />
      <Typography variant="body2" fontSize={20} fontWeight={800}>
        Container Logs
      </Typography>
      <Box sx={{ mt: 1 }} />
      <Paper sx={{ width: 900, minHeight: 200 }} elevation={0}>
        <Typography
          variant="body2"
          fontSize={16}
          fontWeight={400}
          sx={{ p: 10 }}
        >
          No logs available
        </Typography>
      </Paper>
    </Box>
  );
}
