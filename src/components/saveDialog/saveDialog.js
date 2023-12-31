import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  LinearProgress,
  DialogActions,
  Button,
  Alert,
} from "@mui/material";

const SaveDialog = (props) => {
  return (
    <Dialog open={props.open} fullWidth onClose={props.onClose}>
      {props.isLoading && <LinearProgress />}
      <DialogTitle>{props.title}</DialogTitle>
      <DialogContent>
        <div className="row">
          <div className="col-12 col-md-6 mt-2">
            <TextField
              label="Username"
              variant="outlined"
              size="small"
              fullWidth
              id="name"
              onChange={props.onChange}
              value={props.name}
            />
          </div>
          <div className="col-12 col-md-6 mt-2">
            <TextField
              label="Email"
              variant="outlined"
              size="small"
              fullWidth
              id="email"
              onChange={props.onChange}
              type="email"
              value={props.email}
            />
          </div>
          <div className="col-12 col-md-6 mt-2">
            <TextField
              label="Phone Number"
              variant="outlined"
              size="small"
              fullWidth
              id="phone"
              onChange={props.onChange}
              type="number"
              value={props.phone}
            />
          </div>
          <div className="col-12 col-md-6 mt-2">
            <TextField
              label="Age"
              variant="outlined"
              size="small"
              fullWidth
              id="age"
              onChange={props.onChange}
              value={props.age}
              type="number"
            />
          </div>
        </div>
        {/* Alerts */}
        {props.openedAlert ? (
          <div className="row mt-3">
            <div className="col">
              <Alert severity={props.alertType}>{props.alertMsg}</Alert>
            </div>
          </div>
        ) : null}
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose} color="error" className="fontWeight">
          Close
        </Button>
        <Button onClick={props.onClick} color="primary" className="fontWeight">
          {props.textButton}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SaveDialog;
