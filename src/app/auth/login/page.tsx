"use client";

import { Box, Button, Divider, Grid, Stack, TextField, Checkbox, FormGroup, FormControlLabel } from "@mui/material";
import React from "react";

export default function LoginPage() {
  return (
    <>
      <Divider sx={{ mt: "8rem", display: "flex", justifyContent: "center" }}>
        <div>
        </div>
        <Stack
        
        sx={{ minHeight: "300px", minWidth: "600px", backgroundColor: '#eee', pb: '2rem', display: 'grid', justifyContent: 'center', pt: '1.5rem' }}
        spacing={5}
        >
          <Box>
          <h1>Login Page</h1>

          </Box>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
              display: "grid",
            }}
            noValidate
            autoComplete="off"
            >
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
              
              />
             <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Keep me login" />
             </FormGroup>
              <Box>
              <Button variant="contained" sx={{minWidth: "100%"}}>Login</Button>
    
              </Box>
          </Box>
        </Stack>
      </Divider>
    </>
  );
}
