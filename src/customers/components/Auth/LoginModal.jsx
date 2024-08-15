// LoginModal.js
import React from "react";
import { Modal, Box } from "@mui/material";
import LoginForm from "./LoginForm"; // Adjust the import path as necessary

const LoginModal = ({ open, handleClose }) => {
  // const [openAuthModal, setOpenAuthModal] = useState(false);

  // const handleOpen = () => setOpenAuthModal(true);
  // const handleClose = () => setOpenAuthModal(false);
  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          width: 400,
          bgcolor: "background.paper",
          p: 4,
          mx: "auto",
          mt: "10vh",
          borderRadius: 2,
        }}
      >
        <h2>Login</h2>
        <LoginForm />
      </Box>
    </Modal>
  );
};

export default LoginModal;
