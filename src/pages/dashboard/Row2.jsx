import {
  Box,
  Paper,
  Stack,
  Typography,
  useTheme,
  IconButton,
} from "@mui/material";
import Line from "../../pages/linechart/Line";
import { DownloadOutlined } from "@mui/icons-material";
import { Transactions } from "./data";

export default function Row2() {
  const theme = useTheme();
  return (
    <Stack direction={"row"} flexWrap={"wrap"} gap={1} mt={3}>
      <Paper sx={{ maxWidth: 900, flexGrow: 1.5,minWidth:"400px" }}>
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box>
            <Typography
              variant="h6"
              color={theme.palette.secondary.main}
              mb={1}
              mt={2}
              ml={4}
            >
              Revenue Generated
            </Typography>
            <Typography variant="body1" ml={4}>
              $59.342.32
            </Typography>
          </Box>
          <Box>
            <IconButton sx={{ mr: 3 }}>
              <DownloadOutlined />
            </IconButton>
          </Box>
        </Stack>
        <Line isDashboard={true} />
      </Paper>

      <Box
        sx={{
          overflow: "auto",
          minWidth: "250px",
          maxHeight: 380,
          flexGrow: 1,
        }}
      >
        <Paper>
          <Typography
            color={theme.palette.secondary.main}
            fontWeight={"bold"}
            p={1.2}
            variant="h6"
          >
            Recent Transactions
          </Typography>
        </Paper>
        {Transactions.map(() => {
          return (
            // eslint-disable-next-line react/jsx-key
            <Paper
              sx={{
                mt: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box p={1}>
                <Typography variant="body1" fontWeight="600">
                  01e4dsa
                </Typography>
                <Typography variant="body2">jhondoe</Typography>
              </Box>
              <Typography variant="body1">2024-09-14</Typography>
              <Typography
                variant="body2"
                borderRadius={1.4}
                p={1}
                bgcolor={theme.palette.error.main}
                color={theme.palette.getContrastText(theme.palette.error.main)}
              >
                $555
              </Typography>
            </Paper>
          );
        })}
      </Box>
    </Stack>
  );
}
