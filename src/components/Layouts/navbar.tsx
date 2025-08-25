"use client";
import { Navbar, NavbarBrand, NavbarToggle, NavbarCollapse, NavbarLink } from "flowbite-react";

export default function NavbarPage() {
  return (
    <Navbar style={{ backgroundColor: "#37353e" }} className="py-4 px-2">
      <NavbarBrand href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">User Management</span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="/home">Home</NavbarLink>
        <NavbarLink href="/users">User List</NavbarLink>
        <NavbarLink href="/add-user">Add User</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
