import React, { useState } from "react";
import { Button, Dialog, DialogContent, DialogTitle, Box } from "@mui/material";
import BookSearch from "./BookSearch";
import PeriodicalSearch from "./PeriodicalsSearch";

const SearchPage = () => {
  const [open, setOpen] = useState(false);
  const [searchType, setSearchType] = useState("");

  const handleOpen = (type) => {
    setOpen(true);
    setSearchType(type);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh" >
      <Box m={1}>
        <Button variant="contained" color="primary" onClick={() => handleOpen("books")}>
          Search Books
        </Button>
        <Dialog open={open && searchType === "books"} onClose={handleClose} fullWidth>
          <DialogTitle>Search Books</DialogTitle>
          <DialogContent>
            <BookSearch onClose={handleClose} />
          </DialogContent>
        </Dialog>
      </Box>
      <Box m={1}>
        <Button variant="contained" color="secondary" onClick={() => handleOpen("papers")}>
          Search Papers
        </Button>
        <Dialog open={open && searchType === "papers"} onClose={handleClose} fullWidth>
          <DialogTitle>Search Papers</DialogTitle>
          <DialogContent>
            {/* <PaperSearch onClose={handleClose} /> */}
            <BookSearch onClose={handleClose} />
          </DialogContent>
        </Dialog>
      </Box>
      <Box m={1}>
        <Button variant="contained" color="info" onClick={() => handleOpen("periodicals")}>
          Search Periodicals
        </Button>
        <Dialog open={open && searchType === "periodicals"} onClose={handleClose} fullWidth>
          <DialogTitle>Search Periodicals</DialogTitle>
          <DialogContent>
            <PeriodicalSearch onClose={handleClose} />
          </DialogContent>
        </Dialog>
      </Box>
    </Box>
  );
};

export default SearchPage;