"use client";
import { IconButton, Toolbar, Tooltip, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function UserTableToolbar({ numSelected }: { numSelected: number }) {
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) => (theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.08)" : "rgba(255, 255, 255, 0.08)"),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography sx={{ flex: "1 1 100%" }} color="inherit" variant="subtitle1" component="div">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography sx={{ flex: "1 1 100%" }} variant="h6" id="tableTitle" component="div">
          Daftar Pengguna
        </Typography>
      )}
      {numSelected > 0 && (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}
