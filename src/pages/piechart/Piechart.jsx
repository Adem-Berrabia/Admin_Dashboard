/* eslint-disable no-unused-vars */
import { Box, useTheme } from "@mui/material";
import Pie from "./Pie";
import Header from "../../components/Header";

export default function Piechart() {
  const theme = useTheme();
  return (
    <Box>
      <Header title="Pie Chart" subTitle="Simple Pie Chart" />
      <Pie />
    </Box>
  );
}
