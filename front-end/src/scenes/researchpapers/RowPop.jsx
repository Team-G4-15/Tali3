import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";

const RowPopup = ({ rowData, open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Row Data</DialogTitle>
      <DialogContent>
        <p>helo</p>
        
        <pre>{JSON.stringify(rowData, null, 2)}</pre>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default RowPopup;
