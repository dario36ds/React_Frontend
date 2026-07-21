import { Alert } from "@mui/material";

function ErrorMessage({ message }) {
  return (
    <Alert severity="error" sx={{ my: 3 }}>
      {message}
    </Alert>
  );
}

export default ErrorMessage;
