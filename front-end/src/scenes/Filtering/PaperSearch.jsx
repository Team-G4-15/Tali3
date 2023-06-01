import React, { useState } from "react";
import {
    Box,
    Button,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from "@mui/material";

function PaperSearch() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [keywords, setKeywords] = useState("");
    const [level, setlevel] = useState("");
    const [field, setfield] = useState("");
    const [language, setLanguage] = useState("");
    const [DOI, setDOI] = useState("");
    const [publishDate, setPublishDate] = useState("");
    const [placeOfCreation, setPlaceOfCreation] = useState("");
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

    const handlefieldChange = (event) => {
        setfield(event.target.value);
    };

    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
    };

    const handlelevelChange = (event) => {
        setlevel(event.target.value);
    };

    const handleDOIChange = (event) => {
        setDOI(event.target.value);
    };

    const handlePublishDateChange = (event) => {
        setPublishDate(event.target.value);
    };

    const handlePlaceOfCreationChange = (event) => {
        setPlaceOfCreation(event.target.value);
    };

    const handleSearchSubmit = async () => {
        let url = "https://www.googleapis.com/s/v1Paper/volumes?";

        if (title) {
            url += `intitle:${title}&`;
        }

        if (author) {
            url += `inauthor:${author}&`;
        }

        if (keywords) {
            url += `q=${keywords}&`;
        }

        if (level) {
            url += `subject:${level}&`;
        }

        if (language) {
            url += `langRestrict=${language}&`;
        }

        if (field) {
            url += `inpublisher:${field}&`;
        }

        if (DOI) {
            url += `DOI:${DOI}&`;
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
        <div
            className="search-popup-container"
            style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                border: "2px solid #6200EE",
                padding: "20px",
            }}
        >
            <h2 style={{ color: "orange" }}>Search for Papers</h2>
            <Box
                className="search-input-container"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    width: "100%",
                }}
            >
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
                    value={DOI}
                    onChange={handleDOIChange}
                    placeholder="DOI"
                    sx={{ gridColumn: "span 4" }}
                />
                <InputLabel>Publish Date</InputLabel>
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
                    <MenuItem value="Primary Research Article">
                        Primary Research Article
                    </MenuItem>
                    <MenuItem value="Review Article">Review Article</MenuItem>
                    <MenuItem value="Conference Paper">
                        Conference Paper
                    </MenuItem>
                    <MenuItem value="Technical Report">
                        Technical Report
                    </MenuItem>
                    <MenuItem value="Dissertation or Thesis">
                        Dissertation or Thesis
                    </MenuItem>
                    <MenuItem value="Preprint">Preprint</MenuItem>
                    <MenuItem value="Editorial or Opinion Article">
                        Editorial or Opinion Article
                    </MenuItem>
                    <MenuItem value="Letter to the Editor">
                        Letter to the Editor
                    </MenuItem>
                    <MenuItem value="Book Chapter">Book Chapter</MenuItem>
                    <MenuItem value="Case Study">Case Study</MenuItem>
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
                    value={field}
                    onChange={handlefieldChange}
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
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSearchSubmit}
                    style={{ backgroundColor: "#6200EE", color: "white" }}
                >
                    Search
                </Button>
            </Box>
            <Box className="search-results-container">
                {searchResults.map((paper) => (
                    <Box key={paper.id} className="search-result">
                        <h3>{paper.volumeInfo.title}</h3>
                        <p>{paper.volumeInfo.authors?.join(", ")}</p>
                    </Box>
                ))}
            </Box>
        </div>
    );
}

export default PaperSearch;
