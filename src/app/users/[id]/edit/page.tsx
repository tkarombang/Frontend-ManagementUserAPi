"use client";

import { editUser, fetchUserById } from "@/services/userServices";
import { FormUserData } from "@/types/userData";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { Alert, Box, Button, CircularProgress, FormControl, FormControlLabel, FormLabel, Grid, Paper, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function EditUserPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const userId = Number(params.id);
  const [formEditData, setFormEditData] = useState<FormUserData>({
    nama: "",
    email: "",
    nomorTelepon: "",
    statusAktif: true,
    departemen: "",
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const userData = await fetchUserById(userId);
        setFormEditData({
          nama: userData.nama,
          email: userData.email,
          nomorTelepon: userData.nomorTelepon,
          statusAktif: userData.statusAktif,
          departemen: userData.departemen,
        });
      } catch (error) {
        setError("Gagal Load Data User");
      } finally {
        setLoading(false);
      }
    };
    if (userId) {
      getUserData();
    }
  }, [userId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormEditData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormEditData((prevData) => ({ ...prevData, statusAktif: e.target.value === "true" }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const updatedUser = await editUser(userId, formEditData);
      setSuccess(`User "${updatedUser.nama}" Berhasil Diedit`);
      setTimeout(() => {
        router.push("/users");
      }, 2000);
    } catch (error) {
      setError("Gagal Melakukan Edit, Coba Lagi..");
    } finally {
      setLoading(false);
    }
  };
  return (
    <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
      <Paper sx={{ p: 4, width: "100%", maxWidth: 600 }}>
        <Typography variant="h5" component="h1" gutterBottom>
          Edit User
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
            <Grid size={12}>
              <TextField fullWidth label="Nama" name="nama" value={formEditData.nama} onChange={handleChange} required />
            </Grid>
            <Grid size={12}>
              <TextField fullWidth label="Email" name="email" type="email" value={formEditData.email} onChange={handleChange} required />
            </Grid>
            <Grid size={12}>
              <TextField fullWidth label="No. Hp" name="noHp" value={formEditData.nomorTelepon} onChange={handleChange} required />
            </Grid>
            <Grid size={12}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Status</FormLabel>
                <RadioGroup row name="statusAktif" value={formEditData.statusAktif.toString()} onChange={handleStatusChange}>
                  <FormControlLabel value="true" control={<Radio />} label="Aktif" />
                  <FormControlLabel value="false" control={<Radio />} label="Non-aktif" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid size={12}>
              <TextField fullWidth label="Departemen" name="departemen" value={formEditData.departemen} onChange={handleChange} required />
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
                {loading ? <CircularProgress size={24} /> : "Update User"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
}
