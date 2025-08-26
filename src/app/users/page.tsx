"use client";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import UserTableToolbar from "@/components/Table/userToolbar";
import Checkbox from "@mui/material/Checkbox";
import { useUserStore } from "@/stores/userStore";

export default function UserListPage() {
  const { users, loading, error, fetchUsers } = useUserStore();
  const [selected, setSelected] = React.useState<readonly number[]>([]);

  React.useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: readonly number[] = [];

    if (selectedIndex === -1) {
      // newSelected = newSelected.concat(selected, id);
      newSelected = [...selected, id];
      console.log("ID belum dipilih, menambahkannya:", newSelected);
    } else if (selectedIndex === 0) {
      // newSelected = newSelected.concat(selected.slice(1));
      newSelected = [...selected.slice(1)];
      console.log("ID di awal, menghapus ID pertama:", newSelected);
    } else if (selectedIndex === selected.length - 1) {
      // newSelected = newSelected.concat(selected.slice(0, -1));
      newSelected = [...selected.slice(0, -1)];
      console.log("ID di akhir, menghapus ID terakhir:", newSelected);
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
      console.log("ID di tengah, menghapus ID yang dipilih:", newSelected);
    }
    setSelected(newSelected);
  };

  const isSelected = (id: number) => selected.indexOf(id) !== -1;

  return (
    <div className="container m-auto mt-10">
      <UserTableToolbar numSelected={selected.length} />
      <TableContainer component={Paper}>
        <Table
          sx={{
            minWidth: 650,
            backgroundColor: "#44444E",
          }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox sx={{ color: "#715A5A" }} />
              </TableCell>
              <TableCell style={{ color: "#715A5A" }}>Nama</TableCell>
              <TableCell style={{ color: "#715A5A" }} align="right">
                Email
              </TableCell>
              <TableCell style={{ color: "#715A5A" }} align="right">
                No.Hp
              </TableCell>
              <TableCell style={{ color: "#715A5A" }} align="right">
                Status
              </TableCell>
              <TableCell style={{ color: "#715A5A" }} align="right">
                Departemen
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((row) => {
              const isUserSelected = isSelected(row.id);
              return (
                <TableRow
                  key={row.nama}
                  onClick={(event) => handleClick(event, row.id)}
                  role="checkbox"
                  selected={isUserSelected}
                  sx={{
                    "&:last-child td, &:last-child th": {
                      border: 0,
                    },
                  }}
                >
                  <TableCell padding="checkbox">
                    <Checkbox sx={{ color: "#715A5A" }} checked={isUserSelected} />
                  </TableCell>
                  <TableCell style={{ color: "#d3dad9" }} component="th" scope="row">
                    {row.nama}
                  </TableCell>
                  <TableCell style={{ color: "#d3dad9" }} align="right">
                    {row.email}
                  </TableCell>
                  <TableCell style={{ color: "#d3dad9" }} align="right">
                    {row.nomorTelepon}
                  </TableCell>
                  <TableCell style={{ color: "#d3dad9" }} align="right">
                    {row.status ? "Active" : "Inactive"}
                  </TableCell>
                  <TableCell style={{ color: "#d3dad9" }} align="right">
                    {row.departemen}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
