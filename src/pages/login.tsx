import {
  Box,
  FormControl,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import "./../assets/css/pages/login.css";
import { Link, useNavigate } from "react-router-dom";
import {
  LoginSharp,
  LockSharp,
  EmailSharp,
  AlternateEmail,
  MailOutline,
  LockOpen,
  LockOutlined,
} from "@mui/icons-material";
import { ChangeEvent, SyntheticEvent, useState } from "react";
import { LoadingButton } from "@mui/lab";

interface Credential {
  email: string;
  password: string;
}

function Login() {
  const navigate = useNavigate();

  const [credential, setCredetial] = useState<Credential>({
    email: "admin@gmail.com",
    password: "123456",
  });

  const [loading, setLoading] = useState<boolean>(false);

  const handleLogin = async (e: SyntheticEvent) => {
    e.preventDefault();

    if (!credential.email || !credential.password) {
      return;
    }

    setLoading(true);

    navigate("/");
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "450px",
          background: "rgba(255, 255, 255, 1)",
          padding: "30px 60px",
          borderRadius: "16px",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h1"
          mb={2}
          sx={{
            fontSize: "2em",
            fontWeight: 500,
            color: "primary.main",
          }}
        >
          VibeTalk
        </Typography>
        <Typography
          variant="h2"
          mb={4}
          sx={{
            fontSize: "0.95em",
            color: "typography.dark",
          }}
        >
          Enter your email and password to login
        </Typography>

        <form onSubmit={handleLogin}>
          <FormControl sx={{ marginBottom: "20px" }} fullWidth>
            <TextField
              id="email"
              required
              variant="standard"
              label="Email"
              type="email"
              placeholder="Enter your email"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MailOutline />
                  </InputAdornment>
                ),
              }}
              value={credential.email}
              onInput={(e: ChangeEvent<HTMLInputElement>) =>
                setCredetial({
                  ...credential,
                  email: e.target.value,
                })
              }
            />
          </FormControl>
          <FormControl fullWidth sx={{ marginBottom: "20px" }}>
            <TextField
              id="password"
              required
              variant="standard"
              type="password"
              label="Password"
              placeholder="Enter your password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOutlined />
                  </InputAdornment>
                ),
              }}
              value={credential.password}
              onInput={(e: ChangeEvent<HTMLInputElement>) =>
                setCredetial({
                  ...credential,
                  password: e.target.value,
                })
              }
            />
          </FormControl>
          <FormControl fullWidth sx={{ marginTop: "20px" }}>
            <LoadingButton
              loading={loading}
              variant="contained"
              startIcon={<LoginSharp />}
              size="large"
              type="submit"
              onSubmit={handleLogin}
            >
              Login
            </LoadingButton>
          </FormControl>
        </form>

        <Typography
          variant="h2"
          mt={4}
          sx={{
            fontSize: "0.95em",
            color: "typography.dark",
          }}
        >
          Don't have an account? <Link to="/signup">Sign up</Link>
        </Typography>
      </Box>
    </Box>
  );
}

export default Login;
