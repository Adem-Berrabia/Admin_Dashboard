import { Box, Typography, useTheme } from "@mui/material";

// eslint-disable-next-line react/prop-types
export default function Header({ title, subTitle,isDashborad =false }) {
  const theme = useTheme();

  return (
    <Box mb={isDashborad ? 0 : 3}>
      <Typography
        variant="h5"
        sx={{ color: theme.palette.info.light, fontWeight: "bold" }}
      >
        {title}
      </Typography>
      <Typography variant="body1">{subTitle}</Typography>
    </Box>
  );
}
