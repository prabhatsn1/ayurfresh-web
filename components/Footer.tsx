"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        py: 4,
        textAlign: "center",
        mt: "auto",
      }}
    >
      <Typography variant="body2" color="text.secondary">
        &copy; {new Date().getFullYear()} AyurFresh. All rights reserved.
      </Typography>
    </Box>
  );
}
