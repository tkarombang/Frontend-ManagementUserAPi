import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(nama: string, email: string, nomorTelepon: string, status: boolean, departemen: string) {
  return { nama, email, nomorTelepon, status, departemen };
}

const rows = [
  createData("Muhammad", "muh@gmail.com", "0876412334", true, "IT"),
  createData("Az", "az@gmail.com", "0876412334", false, "SE"),
  createData("War", "war@gmail.com", "0876412334", true, "Web"),
  createData("Anas", "nas@gmail.com", "0876412334", false, "QA"),
];

export default function UserListPage() {
  return (
    <div className="container m-auto mt-10">
      <h1 className="text-center mb-2 text-2xl font-semibold">Daftar Pengguna</h1>
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
            {rows.map((row) => (
              <TableRow
                key={row.nama}
                sx={{
                  "&:last-child td, &:last-child th": {
                    border: 0,
                  },
                }}
              >
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
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
