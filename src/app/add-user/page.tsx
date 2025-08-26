"use client";

import { FormUserData } from "@/types/userData";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { FormControl, FormControlLabel, FormLabel, InputLabel } from "@mui/material";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { createNewUser } from "@/services/userServices";
import router from "next/router";

export default function AddUserPage() {
  const [formData, setFormData] = useState<FormUserData>({
    nama: "",
    email: "",
    nomorTelepon: "",
    statusAktif: true,
    departemen: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({ ...prevData, status: e.target.value === "true" }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const newUser = await createNewUser(formData);
      setSuccess(`User Baru "${newUser.nama}" Berhasil Ditambahkan`);
      setTimeout(() => {
        router.push("/user");
      }, 2000);
    } catch (error) {}
  };

  return (
    <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
      <Paper sx={{ p: 4, width: "100%", maxWidth: 600 }}>
        <Typography variant="h5" component="h1" gutterBottom sx={{ marginBottom: "2rem" }}>
          Tambah User Baru
        </Typography>

        {success && (
          <Alert severity="success" sx={{ mb: 2 }}>
            {success}
          </Alert>
        )}
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid size={12} sx={{ borderColor: "#D3DAD9" }}>
              <TextField fullWidth label="Nama" name="nama" value={formData.nama} onChange={handleChange} required />
            </Grid>
            <Grid size={12}>
              <TextField fullWidth label="Email" name="email" type="email" value={formData.email} onChange={handleChange} required />
            </Grid>
            <Grid size={12}>
              <TextField fullWidth label="No. Hp" name="nomorTelepon" value={formData.nomorTelepon} onChange={handleChange} required />
            </Grid>
            <Grid size={12} sx={{ m: 1, miniWidth: 80 }}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Status</FormLabel>
                <RadioGroup row name="statusAktif" value={formData.statusAktif.toString()} onChange={handleStatusChange}>
                  <FormControlLabel value="true" control={<Radio />} label="aktif" />
                  <FormControlLabel value="false" control={<Radio />} label="Non-Aktif" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid size={12}>
              <TextField fullWidth label="Departemen" name="departemen" value={formData.departemen} onChange={handleChange} required />
            </Grid>
            <Grid size={12}>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: "#37353E",
                  color: "#715A5A",
                  "&:hover": {
                    backgroundColor: "#44444E",
                    color: "#D3DAD9",
                  },
                }}
                fullWidth
                disabled={loading}
              >
                {loading ? <CircularProgress size={24} /> : "Add User"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
}
