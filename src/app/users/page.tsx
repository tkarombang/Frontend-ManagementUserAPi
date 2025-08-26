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
import TablePagination from "@mui/material/TablePagination";
import { Alert, Box, CircularProgress } from "@mui/material";

export default function UserListPage() {
  const [selected, setSelected] = React.useState<readonly number[]>([]);
  const { users, loading, error, fetchUsers, deleteUsers } = useUserStore();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

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

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleDelete = async () => {
    await deleteUsers(selected as readonly number[]);
    setSelected([]);
  };

  const isSelected = (id: number) => selected.indexOf(id) !== -1;
  const visibleUsers = users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  console.log(page * rowsPerPage);
  console.log(page * rowsPerPage + rowsPerPage);

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (users.length === 0) {
    return (
      <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
        <Alert severity="warning" sx={{ width: "80%" }}>
          Data Kosong. Silakan tambahkan pengguna baru. klik <strong>Add User</strong>
        </Alert>
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

  return (
    <div className="container m-auto mt-10">
      <UserTableToolbar numSelected={selected.length} onDelete={handleDelete} />
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
            {visibleUsers.map((row) => {
              const isUserSelected = isSelected(row.id);
              const statusText = row.statusAktif ? "aktif" : "Non-aktif";
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
                    {statusText}
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
      <TablePagination rowsPerPageOptions={[5, 10, 25]} component="div" count={users.length} rowsPerPage={rowsPerPage} page={page} onPageChange={handleChangePage} onRowsPerPageChange={handleChangeRowsPerPage} />
    </div>
  );
}
