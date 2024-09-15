import { Paper, Stack, Typography, useTheme } from "@mui/material";
import Pie from "../../pages/piechart/Pie";
// @ts-ignore
import Bar from "../../pages/barchat/Bar";
import Geo from "../../pages/geography/Geo";

export default function Row3() {
  const theme = useTheme();

  return (
    <Stack direction={"row"} gap={1} flexWrap={"wrap"} mt={3}>
      <Paper sx={{ flexGrow: 1, minWidth: "400px", width: "28%" }}>
        <Typography
          variant="h6"
          sx={{ padding: "30px 30px 0 30px" }}
          fontWeight="600"
          color={theme.palette.secondary.main}
        >
          Campaign
        </Typography>
        <Pie isDashboard={true} />
        <Typography variant="h6" align="center" sx={{ mt: "15px" }}>
          $48,352 revenue generated
        </Typography>
        <Typography variant="body2" align="center" pb={3} px={0.7}>
          Includes extra misc expenditures and costs
        </Typography>
      </Paper>

      <Paper sx={{ flexGrow: 1, minWidth: "400px", width: "33%" }}>
        <Typography
          variant="h6"
          sx={{ padding: "30px 30px 0 30px" }}
          fontWeight="600"
          color={theme.palette.secondary.main}
        >
          Sales Quantity
        </Typography>
        <Bar isDahboard />
      </Paper>
      <Paper sx={{ flexGrow: 1, minWidth: "400px", width: "33%" }}>
        <Typography
          variant="h6"
          sx={{ padding: "30px 30px 0 30px" }}
          fontWeight="600"
          color={theme.palette.secondary.main}
        >
          Geography
        </Typography>
        <Geo isDahboard={true} />
      </Paper>
    </Stack>
  );
}
