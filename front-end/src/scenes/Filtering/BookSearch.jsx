import React, { useState } from 'react';
import {
  Box,
  Button,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';

function  BookSearch() {
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
    setType(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleVendorChange = (event) => {
    setVendor(event.target.value);
  };

  const handleIsbnChange = (event) => {
    setIsbn(event.target.value);
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

    if (type) {
      url += `subject:${type}&`;
    }

    if (language) {
      url += `langRestrict=${language}&`;
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

    url += `maxResults=10`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      setSearchResults(data.items || []);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="search-popup-container" style={{width:"100%", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: '2px solid #6200EE', padding: '20px'}}>
      <h2 style={{color: 'orange'}}>Search for Books</h2>
      <Box className="search-input-container" style={{display: 'flex', flexDirection: 'column', gap: '20px',width:"100%"}}>

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
        <InputLabel id="type-label">Type</InputLabel>
        <Select
          labelId="type-label"
          id="type"
          value={type}
          onChange={handleTypeChange}
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
        {searchResults.map((book) => (
          <Box key={book.id} className="search-result">
            <h3>{book.volumeInfo.title}</h3>
            <p>{book.volumeInfo.authors?.join(', ')}</p>
          </Box>
        ))}
      </Box>
    </div>
  );
}

export default BookSearch;