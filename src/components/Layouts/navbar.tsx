"use client";

import { AppBar, Box, Button, Drawer, IconButton, List, ListItem, ListItemText, Toolbar, Typography } from "@mui/material";
import { Menu } from "@mui/icons-material";
("@mui/icons-material");
import Link from "next/link";
import { useState } from "react";

export default function NavbarPage() {
  const [burgerOpen, setBurgerOpen] = useState<boolean>(false);

  const handleDrawerToggle = (): void => {
    setBurgerOpen(!burgerOpen);
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "User List", href: "/users" },
    { name: "Add Users", href: "/add-user" },
  ];

  const drawer = (
    <List onClick={handleDrawerToggle}>
      {navItems.map((item) => (
        <ListItem
          key={item.name}
          component={Link}
          href={item.href}
          sx={{
            color: "#37353e",
            fontSize: "1.2rem",
            "&:hover": {
              backgroundColor: "#37353e",
              color: "#d3dad9",
            },
          }}
        >
          <ListItemText primary={item.name} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <AppBar position="static" sx={{ backgroundColor: "#37353e" }}>
      <Toolbar className="container m-auto">
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            color: "#715A5A",
          }}
        >
          User Management
        </Typography>

        <Box
          sx={{
            color: "#715A5A",
            width: "16rem",
            justifyContent: "space-between",
            justifyItems: "center",
            display: {
              xs: "none",
              sm: "flex",
            },
          }}
        >
          <Button
            color="inherit"
            component={Link}
            sx={{
              width: "5rem",
              "&:hover": {
                color: "#d3dad9",
                backgroundColor: "#26252b",
              },
            }}
            href="/"
          >
            Home
          </Button>
          <Button
            color="inherit"
            component={Link}
            sx={{
              "&:hover": {
                color: "#d3dad9",
                backgroundColor: "#26252b",
              },
            }}
            href="/users"
          >
            User List
          </Button>
          <Button
            color="inherit"
            component={Link}
            sx={{
              "&:hover": {
                color: "#d3dad9",
                backgroundColor: "#26252b",
              },
            }}
            href="/add-user"
          >
            Add User
          </Button>
        </Box>

        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerToggle}
          sx={{
            display: {
              sm: "none",
              color: "#d3dad9",
            },
          }}
        >
          <Menu />
        </IconButton>

        <Drawer
          anchor="right"
          open={burgerOpen}
          onClose={handleDrawerToggle}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 240,
              backgroundColor: "#d3dad9",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}
