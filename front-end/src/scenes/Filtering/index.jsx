import React, { useState, useContext, useRef, useLayoutEffect } from "react";
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
    Collapse,
} from "@mui/material";
import ArticleIcon from "@mui/icons-material/Article";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import { AppHeightContext } from "../../contexts/AppHeight";
import Header from "../../components/Header";

function SearchPage() {
    const [DOI, setDOI] = useState("");
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [keywords, setKeywords] = useState("");
    const [type, setType] = useState("");
    const [language, setLanguage] = useState("");
    const [vendor, setVendor] = useState("");
    const [isbn, setIsbn] = useState("");
    const [edition, setEdition] = useState("");
    const [publishDate, setPublishDate] = useState("");
    const [placeOfCreation, setPlaceOfCreation] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [level, setlevel] = useState("");
    const [typei, settype] = useState("");
    const [selectedType, setSelectedType] = useState("");
    const [issn, setIssn] = useState("");
    const [frequency, setFrequency] = useState("");

    const { setHeight } = useContext(AppHeightContext);
    const ref = useRef(null);

    useLayoutEffect(() => {
        setHeight(ref.current.offsetHeight + 120);
        console.log(ref.current.offsetHeight);
    }, []);

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
        setSelectedType(event.target.value);
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
        let url = "https://www.googleapis.com/books/v1/volumes?";

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
            url += `DOI:${DOI}&`;
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
        url += `maxResults=10`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            setSearchResults(data.items || []);
        } catch (error) {
            console.error(error);
        }
    };
    const [bookSelected, setBookSelected] = useState(false);
    const [paperSelected, setPaperSelected] = useState(false);
    const [periodicalSelected, setPeriodicalSelected] = useState(false);

    return (
        <Box
            className="search-popup-container"
            sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px",
            }}
            ref={ref}
        >
                <Header
                    title="Tali3's Advanced Search"
                />
            <Box
                className="search-input-container"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    width: "100%",
                }}
            >
                <FormGroup
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        gap: "10%",
                        padding: "10px",
                    }}
                >
                    <FormControlLabel
                        control={
                            <Checkbox
                                id="type"
                                value="Book"
                                onChange={() => {
                                    setBookSelected((previous) => !previous);
                                    handleTypeChange();
                                }}
                                icon={<MenuBookIcon />}
                                checkedIcon={<MenuBookIcon />}
                            />
                        }
                        label="Book"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                id="type"
                                value="Periodical"
                                onChange={() => {
                                    setPeriodicalSelected(
                                        (previous) => !previous
                                    );
                                    handleTypeChange();
                                }}
                                icon={<ImportContactsIcon />}
                                checkedIcon={<ImportContactsIcon />}
                            />
                        }
                        label="Periodical"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                id="type"
                                value="Paper"
                                onChange={() => {
                                    setPaperSelected((previous) => !previous);
                                    handleTypeChange();
                                }}
                                icon={<ArticleIcon />}
                                checkedIcon={<ArticleIcon />}
                            />
                        }
                        label="Research Paper"
                    />
                </FormGroup>
                <TextField
                    fullWidth
                    label="Title"
                    variant="filled"
                    type="text"
                    value={title}
                    onChange={handleTitleChange}
                    sx={{ gridColumn: "span 4" }}
                />
                <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    value={author}
                    onChange={handleAuthorChange}
                    label="Author"
                    sx={{ gridColumn: "span 4" }}
                />
                <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    value={keywords}
                    onChange={handleKeywordsChange}
                    label="Keywords"
                    sx={{ gridColumn: "span 4" }}
                />
                <Collapse
                    in={
                        (bookSelected &&
                            !paperSelected &&
                            !periodicalSelected) ||
                        (!paperSelected && !periodicalSelected && !bookSelected)
                    }
                >
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "20px",
                        }}
                    >
                        <TextField
                            variant="filled"
                            type="text"
                            value={isbn}
                            onChange={handleIsbnChange}
                            label="ISBN"
                            sx={{ gridColumn: "span 2" }}
                        />
                        <TextField
                            variant="filled"
                            type="text"
                            value={edition}
                            onChange={handleEditionChange}
                            label="Edition"
                            sx={{ gridColumn: "span 2" }}
                        />
                        <InputLabel id="type-label">Type</InputLabel>
                        <Select
                            labelId="type-label"
                            id="type"
                            value={type}
                            onChange={handletypeChange}
                            displayEmpty
                            sx={{ gridColumn: "span 2" }}
                        >
                            <MenuItem value="">All types</MenuItem>
                            <MenuItem value="Art">Art</MenuItem>
                            <MenuItem value="Biography">Biography</MenuItem>
                            <MenuItem value="Business">Business</MenuItem>
                            <MenuItem value="Comics">Comics</MenuItem>
                            <MenuItem value="Cookbooks">Cookbooks</MenuItem>
                            <MenuItem value="Crafts">Crafts</MenuItem>
                            <MenuItem value="Education">Education</MenuItem>
                            <MenuItem value="Entertainment">
                                Entertainment
                            </MenuItem>
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
                    </div>
                </Collapse>

                <Collapse
                    in={!paperSelected && !periodicalSelected && !bookSelected}
                >
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "20px",
                        }}
                    >
                        <TextField
                            variant="filled"
                            type="text"
                            value={issn}
                            onChange={handleIssnChange}
                            label="ISSN"
                            sx={{ gridColumn: "span 4" }}
                        />
                        <TextField
                            variant="filled"
                            type="text"
                            value={frequency}
                            onChange={handleFrequencyChange}
                            label="Frequency"
                            sx={{ gridColumn: "span 4" }}
                        />
                    </div>
                </Collapse>

                <Collapse
                    in={
                        (!periodicalSelected && !bookSelected) ||
                        (paperSelected && !periodicalSelected && !bookSelected)
                    }
                >
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "20px",
                        }}
                    >
                        <TextField
                            variant="filled"
                            type="text"
                            value={DOI}
                            onChange={handleDOIChange}
                            label="DOI"
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
                            <MenuItem value="Review Article">
                                Review Article
                            </MenuItem>
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
                            <MenuItem value="Book Chapter">
                                Book Chapter
                            </MenuItem>
                            <MenuItem value="Case Study">Case Study</MenuItem>
                        </Select>
                    </div>
                </Collapse>

                <InputLabel>Publish Date</InputLabel>
                <TextField
                    variant="filled"
                    type="date"
                    value={publishDate}
                    onChange={handlePublishDateChange}
                    sx={{ gridColumn: "span 4" }}
                />
                <TextField
                    variant="filled"
                    type="text"
                    value={placeOfCreation}
                    onChange={handlePlaceOfCreationChange}
                    label="Place of creation"
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
                {searchResults.map((book) => (
                    <Box key={book.id} className="search-result">
                        <h3>{book.volumeInfo.title}</h3>
                        <p>{book.volumeInfo.authors?.join(", ")}</p>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}

export default SearchPage;
