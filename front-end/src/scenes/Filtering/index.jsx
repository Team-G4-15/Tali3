import React, { useState } from 'react';
import {
  Box,
  Button,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  FormControlLabel,
  Checkbox,
  FormGroup,
   Table, TableBody, TableCell, TableContainer, TableHead, TableRow
} from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import Pagination from '@mui/material/Pagination';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';


function  SearchPage() {
    const [DOI, setDOI] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [keywords, setKeywords] = useState('');
  const [type, setType] = useState('');
  const [language, setLanguage] = useState('');
  const [vendor, setVendor] = useState('');
  const [isbn, setIsbn] = useState('');
  const [edition, setEdition] = useState('');
  const [publishDate, setPublishDate] = useState('');
  const [placeOfCreation, setPlaceOfCreation] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [level, setlevel] = useState('');
  const [typei, settype] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [issn, setIssn] = useState('');
  const [frequency, setFrequency] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedBook, setSelectedBook] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);


  const itemsPerPage = 10;

  const handleRowClick = (index) => {
    setSelectedBook(searchResults[index]);
  };

  const handleBookClick = (book) => {
    setSelectedBook(book);
    setIsPopupOpen(true);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleKeywordsChange = (event) => {
    setKeywords(event.target.value);
  };
  const handleTypeChange = (event) => {
    alert(event.target);
        setSelectedType(event.target.checked); 
        
  };
  const handletypeChange = (event) => {
    settype(event.target.value);
  };
  const handlelevelChange = (event) => {
    setlevel(event.target.value);
  };
  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleVendorChange = (event) => {
    setVendor(event.target.value);
  };
  const handleDOIChange = (event) => {
    setDOI(event.target.value);
  };
  const handleIsbnChange = (event) => {
    setIsbn(event.target.value);
  };
  const handleIssnChange = (event) => {
    setIssn(event.target.value);
    };
    
    const handleFrequencyChange = (event) => {
    setFrequency(event.target.value);
    };
  const handleEditionChange = (event) => {
    setEdition(event.target.value);
  };

  const handlePublishDateChange = (event) => {
    setPublishDate(event.target.value);
  };

  const handlePlaceOfCreationChange = (event) => {
    setPlaceOfCreation(event.target.value);
  };

  const handleSearchSubmit = async () => {
    let url = 'https://www.googleapis.com/books/v1/volumes?';

    if (title) {
      url += `intitle:${title}&`;
    }

    if (author) {
      url += `inauthor:${author}&`;
    }

    if (keywords) {
      url += `q=${keywords}&`;
    }

    if (DOI) {
        url +=  `q=DOI:${DOI}&`;
      }

    if (type) {
      url += `subject:${type}&`;
    }

    if (language) {
      url += `langRestrict=${language}&`;
    }
    if (level) {
        url += `subject:${level}&`;
      }
    if (vendor) {
      url += `inpublisher:${vendor}&`;
    }

    if (isbn) {
      url += `isbn:${isbn}&`;
    }

    if (edition) {
      url += `edition:${edition}&`;
    }

    if (publishDate) {
      url += `publishedDate:${publishDate}&`;
    }

    if (placeOfCreation) {
      url += `inpublisher:${placeOfCreation}&`;
    }
    if (issn) {
        url += `issn:${issn}&`;
      }
      
      if (frequency) {
        url += `frequency:${frequency}&`;
      }
    try {
      const response = await fetch(url);
      const data = await response.json();

      setSearchResults(data.items || []);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };


  const [bookSelected, setBookSelected] = useState(false);
  const [paperSelected, setPaperSelected] = useState(false);
  const [periodicalSelected, setPeriodicalSelected] = useState(false);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = searchResults.slice(indexOfFirstItem, indexOfLastItem);

  function BookDetailsDialog({ book, isOpen, onClose }) {
    if (!isOpen || !book) {
      return null;
    }

    return (
      // Your pop-up dialog content here
      <div>
        <h3>{book.title}</h3>
        <p>Author: {book.author}</p>
        <p>ISBN: {book.isbn}</p>
        {/* Include other book details */}
        <button onClick={onClose}>Close</button>
      </div>
    );
  }
  return (
    <div className="search-popup-container" style={{width:"100%", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px'}}>
      <h2 style={{color: 'orange'}}>Advanced Search</h2>
      <Box className="search-input-container" style={{display: 'flex', flexDirection: 'column', gap: '20px',width:"100%"}}>
      <FormGroup  style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          gap: '10%',
          padding: '10px',
        }}>
        <FormControlLabel
          control={
            <Checkbox
              value="Book"
              onChange={ () =>{
                setBookSelected((previous) =>  !previous );
                handleTypeChange();
              }  }
              icon={<MenuBookIcon />}
              checkedIcon={<MenuBookIcon />}
            />
          }
          label="Book"
        />
        <FormControlLabel
          control={
            <Checkbox
              value="Periodical"
              onChange={ () => {
                setPeriodicalSelected(previous => !previous);
                handleTypeChange();
              }
            }
                
              icon={<ImportContactsIcon />}
              checkedIcon={<ImportContactsIcon />}
            />
          }
          label="Periodical"
        />
        <FormControlLabel
          control={
            <Checkbox
              value="Paper"
              onChange={ () => {
                setPaperSelected(previous => !previous);
                handleTypeChange();
              }
                
              }
              icon={<ArticleIcon />}
              checkedIcon={<ArticleIcon />}
            />
          }
          label="Research Paper"
        />
      </FormGroup>
        <TextField
          fullWidth
          variant="filled"
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder="Title"
          sx={{ gridColumn: "span 4" }}
        />
        <TextField
          fullWidth
          variant="filled"
          type="text"
          value={author}
          onChange={handleAuthorChange}
          placeholder="Author"
          sx={{ gridColumn: "span 4" }}
        />
        <TextField
          fullWidth
          variant="filled"
          type="text"
          value={keywords}
          onChange={handleKeywordsChange}
          placeholder="Keywords"
          sx={{ gridColumn: "span 4" }}
        />
        {
        ((bookSelected && (!paperSelected && !periodicalSelected))||(!paperSelected && !periodicalSelected  && !bookSelected))  ?
        (
          <>
              <TextField
                variant="filled"
                type="text"
                value={isbn}
                onChange={handleIsbnChange}
                placeholder="ISBN"
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                variant="filled"
                type="text"
                value={edition}
                onChange={handleEditionChange}
                placeholder="Edition"
                sx={{ gridColumn: "span 4" }}
              />
              <InputLabel id="type-label">Type</InputLabel>
              <Select
                labelId="type-label"
                id="type"
                value={type}
                onChange={handletypeChange}
                displayEmpty
                sx={{ gridColumn: "span 4" }}
              >
                <MenuItem value="">All types</MenuItem>
                <MenuItem value="Art">Art</MenuItem>
                <MenuItem value="Biography">Biography</MenuItem>
                <MenuItem value="Business">Business</MenuItem>
                <MenuItem value="Comics">Comics</MenuItem>
                <MenuItem value="Cookbooks">Cookbooks</MenuItem>
                <MenuItem value="Crafts">Crafts</MenuItem>
                <MenuItem value="Education">Education</MenuItem>
                <MenuItem value="Entertainment">Entertainment</MenuItem>
                <MenuItem value="Health">Health</MenuItem>
                <MenuItem value="History">History</MenuItem>
                <MenuItem value="Horror">Horror</MenuItem>
                <MenuItem value="Kids">Kids</MenuItem>
                <MenuItem value="Memoir">Memoir</MenuItem>
                <MenuItem value="Mystery">Mystery</MenuItem>
                <MenuItem value="Philosophy">Philosophy</MenuItem>
                <MenuItem value="Poetry">Poetry</MenuItem>
                <MenuItem value="Politics">Politics</MenuItem>
                <MenuItem value="Religion">Religion</MenuItem>
                <MenuItem value="Romance">Romance</MenuItem>
                <MenuItem value="Science">Science</MenuItem>
                <MenuItem value="Self-Help">Self-Help</MenuItem>
                <MenuItem value="Sports">Sports</MenuItem>
                <MenuItem value="Thriller">Thriller</MenuItem>
                <MenuItem value="Travel">Travel</MenuItem>
              </Select>
        </>
        ):null}
        {
        
        ((periodicalSelected && (!paperSelected && !bookSelected ))||(!paperSelected && !periodicalSelected  && !bookSelected))  ? (
            <>
        <TextField
      variant="filled"
      type="text"
      value={issn}
      onChange={handleIssnChange}
      placeholder="ISSN"
      sx={{ gridColumn: "span 4" }}
    />
    <TextField
      variant="filled"
      type="text"
      value={frequency}
      onChange={handleFrequencyChange}
      placeholder="Frequency"
      sx={{ gridColumn: "span 4" }}
    />
    </>
    ):null}
    {
    ((paperSelected && (!periodicalSelected  && !bookSelected ))||(!paperSelected && !periodicalSelected  && !bookSelected))  ? (
          <>
        <TextField
          variant="filled"
          type="text"
          value={DOI}
          onChange={handleDOIChange}
          placeholder="DOI"
          sx={{ gridColumn: "span 4" }}
        />
        <InputLabel id="type-label">Level</InputLabel>
        <Select
          labelId="type-label"
          id="level"
          value={level}
          onChange={handlelevelChange}
          displayEmpty
          sx={{ gridColumn: "span 4" }}
        >
          <MenuItem value="">Levels</MenuItem>
          <MenuItem value="Primary Research Article">Primary Research Article</MenuItem>
          <MenuItem value="Review Article">Review Article</MenuItem>
          <MenuItem value="Conference Paper">Conference Paper</MenuItem>
          <MenuItem value="Technical Report">Technical Report</MenuItem>
          <MenuItem value="Dissertation or Thesis">Dissertation or Thesis</MenuItem>
          <MenuItem value="Preprint">Preprint</MenuItem>
          <MenuItem value="Editorial or Opinion Article">Editorial or Opinion Article</MenuItem>
          <MenuItem value="Letter to the Editor">Letter to the Editor</MenuItem>
          <MenuItem value="Book Chapter">Book Chapter</MenuItem>
          <MenuItem value="Case Study">Case Study</MenuItem>
        </Select>
        </>
        ):null}
         <InputLabel>
        Publish Date
        </InputLabel>
        <TextField
          variant="filled"
          type="date"
          value={publishDate}
          onChange={handlePublishDateChange}
          placeholder="Publication date"
          sx={{ gridColumn: "span 4" }}
        />
        <TextField
          variant="filled"
          type="text"
          value={placeOfCreation}
          onChange={handlePlaceOfCreationChange}
          placeholder="Place of creation"
          sx={{ gridColumn: "span 4" }}
        />
        
        <InputLabel id="language-label">Language</InputLabel>
        <Select
          labelId="language-label"
          id="language"
          value={language}
          onChange={handleLanguageChange}
          displayEmpty
          sx={{ gridColumn: "span 4" }}
        >
          <MenuItem value="">All languages</MenuItem>
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="fr">French</MenuItem>
          <MenuItem value="de">German</MenuItem>
          <MenuItem value="es">Spanish</MenuItem>
          <MenuItem value="it">Italian</MenuItem>
          <MenuItem value="nl">Dutch</MenuItem>
          <MenuItem value="ja">Japanese</MenuItem>
          <MenuItem value="ko">Korean</MenuItem>
          <MenuItem value="pt">Portuguese</MenuItem>
          <MenuItem value="ru">Russian</MenuItem>
          <MenuItem value="zh">Chinese</MenuItem>
        </Select>
        <InputLabel id="field-label">Field</InputLabel>
        <Select
          labelId="field-label"
          id="field"
          value={vendor}
          onChange={handleVendorChange}
          displayEmpty
          sx={{ gridColumn: "span 4" }}
        >
          <MenuItem value="">All fields</MenuItem>
          <MenuItem value="Technology">Technology</MenuItem>
          <MenuItem value="Science">Science</MenuItem>
          <MenuItem value="Engineering">Engineering</MenuItem>
          <MenuItem value="Mathematics">Mathematics</MenuItem>
          <MenuItem value="Medicine">Medicine</MenuItem>
          <MenuItem value="History">History</MenuItem>
          <MenuItem value="Psychology">Psychology</MenuItem>
          <MenuItem value="Philosophy">Philosophy</MenuItem>
          <MenuItem value="Religion">Religion</MenuItem>
          <MenuItem value="Literature">Literature</MenuItem>
          <MenuItem value="Art">Art</MenuItem>
          <MenuItem value="Music">Music</MenuItem>
          <MenuItem value="Film">Film</MenuItem>
          <MenuItem value="Sports">Sports</MenuItem>
          <MenuItem value="Games">Games</MenuItem>
        </Select>
            <Button variant="contained" color="primary" onClick={handleSearchSubmit} style={{backgroundColor: '#6200EE', color: 'white'}}>
                Search
                </Button>
      </Box>
      <Box className="search-results-container">
        {searchResults.length > 0 && (
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell>Authors</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>Language</TableCell>
                  <TableCell>ISBN</TableCell>
                  <TableCell>Edition</TableCell>
                  <TableCell>Publish Date</TableCell>
                  <TableCell>Vendor</TableCell>

                </TableRow>
              </TableHead>
              <TableBody>
                {currentItems.map((book) => (
                  <TableRow key={book.id} onClick={() => handleBookClick(book)}>
                    <TableCell>{book.volumeInfo.title}</TableCell>
                    <TableCell>{book.volumeInfo.authors}</TableCell>
                    <TableCell>{book.volumeInfo.type}</TableCell>
                    <TableCell>{book.volumeInfo.language}</TableCell>
                    <TableCell>{book.volumeInfo.isbn}</TableCell>
                    <TableCell>{book.volumeInfo.edition}</TableCell>
                    <TableCell>{book.volumeInfo.publishDate}</TableCell>
                    <TableCell>{book.volumeInfo.placeOfCreation}</TableCell>
                    <TableCell>{book.volumeInfo.vendor}</TableCell>

                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
          <Pagination
            count={Math.ceil(searchResults.length / itemsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
          />
        </Box>
      </Box>

      <Dialog open={selectedBook !== null} onClose={() => setSelectedBook(null)} sx={{ display: 'flex', justifyContent: 'center' }}>
        <DialogTitle>Book Details</DialogTitle>
        <DialogContent>
          {selectedBook && (
            <DialogContentText>
              Title: {selectedBook.title}<br /><br/>
              Authors: {selectedBook.authors}<br /><br />
              Type: {selectedBook.type}<br /><br />
              Language: {selectedBook.language}<br /><br />
              ISBN: {selectedBook.isbn}<br /><br />
              Edition: {selectedBook.edition}<br /><br />
              Publish Date: {selectedBook.publishDate}<br /><br />
              Vendor: {selectedBook.vendor}<br /><br />
            </DialogContentText>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setSelectedBook(null)}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
    
  );
}

export default SearchPage;