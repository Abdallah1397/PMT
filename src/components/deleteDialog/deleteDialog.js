import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  LinearProgress,
} from "@mui/material";
import './deleteDialog.css';

const DeleteDialog = (props) => {
  return (
    <Dialog open={props.open} onClose={props.onClose} fullWidth>
      {props.isLoading && <LinearProgress color="error" />}
      <DialogTitle>
        Are you sure to delete
        <strong className="userNameColor">{props.username}</strong> ?
      </DialogTitle>
      <DialogActions>
        <Button onClick={props.onClose} color="primary" className="fontWeight" >
          Close
        </Button>
        <Button onClick={props.onDelete} color="error" className="fontWeight">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteDialog;
