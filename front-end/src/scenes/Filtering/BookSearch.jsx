import React, { useState } from "react";
import {
    Box,
    Button,
    InputLabel,
    Select,
    TextField,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";

function BookSearch() {
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
            <h2 style={{ color: "orange" }}>Search for Books</h2>
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
                <InputLabel id="type-label">Type</InputLabel>
                <Select
                    labelId="type-label"
                    id="type"
                    value={type}
                    onChange={handleTypeChange}
                    displayEmpty
                    sx={{ gridColumn: "span 4" }}
                ></Select>
                <InputLabel id="language-label">Language</InputLabel>
                <Select
                    labelId="language-label"
                    id="language"
                    value={language}
                    onChange={handleLanguageChange}
                    displayEmpty
                    sx={{ gridColumn: "span 4" }}
                ></Select>
                <InputLabel id="field-label">Field</InputLabel>
                <Select
                    labelId="field-label"
                    id="field"
                    value={vendor}
                    onChange={handleVendorChange}
                    displayEmpty
                    sx={{ gridColumn: "span 4" }}
                ></Select>
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
                                    <TableCell>Place Of creation</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {searchResults.map((book) => (
                                    <TableRow key={book.id}>
                                        <TableCell>
                                            {book.volumeInfo.title}
                                        </TableCell>
                                        <TableCell>
                                            {book.volumeInfo.authors}
                                        </TableCell>
                                        <TableCell>
                                            {book.volumeInfo.type}
                                        </TableCell>
                                        <TableCell>
                                            {book.volumeInfo.language}
                                        </TableCell>
                                        <TableCell>
                                            {book.volumeInfo.isbn}
                                        </TableCell>
                                        <TableCell>
                                            {book.volumeInfo.edition}
                                        </TableCell>
                                        <TableCell>
                                            {book.volumeInfo.publishDate}
                                        </TableCell>
                                        <TableCell>
                                            {book.volumeInfo.placeOfCreation}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                )}
            </Box>
        </div>
    );
}

export default BookSearch;
