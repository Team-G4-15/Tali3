import React, { useState } from 'react';
import {
Box,
Button,
InputLabel,
MenuItem,
Select,
TextField,
useMediaQuery,
} from '@mui/material';

function PeriodicalSearch() {
const [title, setTitle] = useState('');
const [author, setAuthor] = useState('');
const [keywords, setKeywords] = useState('');
const [type, setType] = useState('');
const [language, setLanguage] = useState('');
const [publisher, setPublisher] = useState('');
const [issn, setIssn] = useState('');
const [frequency, setFrequency] = useState('');
const [placeOfPublication, setPlaceOfPublication] = useState('');
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

const handlePublisherChange = (event) => {
setPublisher(event.target.value);
};

const handleIssnChange = (event) => {
setIssn(event.target.value);
};

const handleFrequencyChange = (event) => {
setFrequency(event.target.value);
};

const handlePlaceOfPublicationChange = (event) => {
setPlaceOfPublication(event.target.value);
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

if (publisher) {
  url += `inpublisher:${publisher}&`;
}

if (issn) {
  url += `issn:${issn}&`;
}

if (frequency) {
  url += `frequency:${frequency}&`;
}

if (placeOfPublication) {
  url += `inpublisher:${placeOfPublication}&`;
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
<h2 style={{color: 'orange'}}>Search for Periodicals</h2>
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
    <TextField
      variant="filled"
      type="text"
      value={placeOfPublication}
      onChange={handlePlaceOfPublicationChange}
      placeholder="Place of publication"
      sx={{ gridColumn: "span 4" }}
    />
    <TextField
      fullWidth
      variant="filled"
      type="text"
      value={publisher}
      onChange={handlePublisherChange}
      placeholder="Publisher"
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
      <MenuItem value="Academic">Academic</MenuItem>
      <MenuItem value="Art">Art</MenuItem>
      <MenuItem value="Business">Business</MenuItem>
      <MenuItem value="Fashion">Fashion</MenuItem>
      <MenuItem value="Film">Film</MenuItem>
      <MenuItem value="Gaming">Gaming</MenuItem>
      <MenuItem value="Health">Health</MenuItem>
      <MenuItem value="History">History</MenuItem>
      <MenuItem value="Literature">Literature</MenuItem>
      <MenuItem value="Music">Music</MenuItem>
      <MenuItem value="News">News</MenuItem>
      <MenuItem value="Politics">Politics</MenuItem>
      <MenuItem value="Science">Science</MenuItem>
      <MenuItem value="Sports">Sports</MenuItem>
      <MenuItem value="Technology">Technology</MenuItem>
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
      <MenuItem value="es">Spanish</MenuItem>
      <MenuItem value="de">German</MenuItem>
      <MenuItem value="it">Italian</MenuItem>
      <MenuItem value="pt">Portuguese</MenuItem>
      <MenuItem value="zh">Chinese</MenuItem>
      <MenuItem value="ja">Japanese</MenuItem>
      <MenuItem value="ko">Korean</MenuItem>
      <MenuItem value="ar">Arabic</MenuItem>
      <MenuItem value="ru">Russian</MenuItem>
      <MenuItem value="hi">Hindi</MenuItem>
      <MenuItem value="bn">Bengali</MenuItem>
      <MenuItem value="pa">Punjabi</MenuItem>
      <MenuItem value="mr">Marathi</MenuItem>
      <MenuItem value="ta">Tamil</MenuItem>
      <MenuItem value="te">Telugu</MenuItem>
      <MenuItem value="gu">Gujarati</MenuItem>
    </Select>
    <Button variant="contained" color="primary" onClick={handleSearchSubmit} style={{backgroundColor: '#6200EE', color: 'white'}}>
      Search
    </Button>
  </Box>
  <Box style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
    {searchResults.map((result) => (
      <div key={result.id}>
        <h3>{result.volumeInfo.title}</h3>
        <p>{result.volumeInfo.authors?.join(', ')}</p>
      </div>
    ))}
  </Box>
</div>
);
}

export default PeriodicalSearch;