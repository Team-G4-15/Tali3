import React, {
    useEffect,
    useContext,
    useState,
    useRef,
    useLayoutEffect,
} from "react";
import {
    Box,
    Button,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    FormGroup,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";

import Pagination from "@mui/material/Pagination";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import { axiosClient } from "../../utilities/axiosClient";
import { AppHeightContext } from "../../contexts/AppHeight";

function SearchPage() {
    const [DOI, setDOI] = useState("");
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [keywords, setKeywords] = useState("");
    const [type, setField] = useState("");
    const [language, setLanguage] = useState("");
    const [vendor, setVendor] = useState("");
    const [isbn, setIsbn] = useState("");
    const [edition, setEdition] = useState("");
    const [publishDate, setPublishDate] = useState("");
    const [placeOfCreation, setPlaceOfCreation] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [level, setlevel] = useState("");
    const [typei, settype] = useState("");
    const [selectedField, setSelectedField] = useState("");
    const [issn, setIssn] = useState("");
    const [frequency, setFrequency] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedBook, setSelectedBook] = useState(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const ref = useRef();
    const { setHeight } = useContext(AppHeightContext);

    useLayoutEffect(() => {
        //setHeightState(ref.current.offsetHeight);
        setHeight(ref.current.offsetHeight + 120);
        console.log(ref.current.offsetHeight);
    }, []);

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
    const handleFieldChange = (event) => {
        alert(event.target);
        setSelectedField(event.target.checked);
    };
    const handletypeChange = (event) => {
        settype(event.target.value);
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

    const handleSearchSubmit = () => {
        let url = "?";

        if (title) {
            url += `intitle=${title}&`;
        }

        if (author) {
            url += `inauthor=${author}&`;
        }

        if (keywords) {
            url += `q=${keywords}&`;
        }

        if (DOI) {
            url += `q=DOI=${DOI}&`;
        }

        if (type) {
            url += `subject=${type}&`;
        }

        if (language) {
            url += `langRestrict=${language}&`;
        }
        if (level) {
            url += `subject=${level}&`;
        }
        if (vendor) {
            url += `inpublisher=${vendor}&`;
        }

        if (isbn) {
            url += `isbn=${isbn}&`;
        }

        if (edition) {
            url += `edition=${edition}&`;
        }

        if (publishDate) {
            url += `publishedDate=${publishDate}&`;
        }

        if (placeOfCreation) {
            url += `inpublisher=${placeOfCreation}&`;
        }
        if (issn) {
            url += `issn=${issn}&`;
        }

        if (frequency) {
            url += `frequency=${frequency}&`;
        }
        axiosClient
            .get("/books/search" + url)
            .then((res) => {})
            .catch((err) => console.log(err));
    };
    const handlePageChange = (event, page) => {
        setCurrentPage(page);
    };

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
                <p>Author= {book.author}</p>
                <p>ISBN= {book.isbn}</p>
                {/* Include other book details */}
                <button onClick={onClose}>Close</button>
            </div>
        );
    }

    const [feilds, setFields] = useState([]);
    const [publisher, setPublisher] = useState([]);
    const [languages, setLanguages] = useState([]);
    const [vendors, setVendors] = useState([]);

    useEffect(() => {
        //axiosClient.get("/books").then((response) => {
        //    setFilteredRows(response.data);
        //});
        axiosClient.get("/languages").then((response) => {
            setLanguages(response.data);
        });
        axiosClient.get("/vendors").then((response) => {
            setVendors(response.data);
        });
        axiosClient.get("/fields").then((response) => {
            setFields(response.data);
        });
        axiosClient.get("/authors").then((response) => {
            setPublisher(response.data);
        });
    }, []);
    return (
        <div
            ref={ref}
            className="search-popup-container"
            style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px",
            }}
        >
            ref={ref}
            <h2 style={{ color: "orange" }}>Advanced Search</h2>
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
                ></FormGroup>
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
                    <InputLabel id="type-label">Field</InputLabel>
                    <Select
                        labelId="type-label"
                        id="type"
                        value={type}
                        onChange={handletypeChange}
                        displayEmpty
                        sx={{ gridColumn: "span 4" }}
                    >
                        {feilds.map((e) => {
                            return (
                                <MenuItem value={e.field_name}>
                                    {e.field_name}
                                </MenuItem>
                            );
                        })}
                    </Select>
                </>

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
                        value={DOI}
                        onChange={handleDOIChange}
                        placeholder="DOI"
                        sx={{ gridColumn: "span 4" }}
                    />
                </>

                <InputLabel id="type-label">Author</InputLabel>
                <Select
                    labelId="type-label"
                    id="type"
                    value={type}
                    onChange={handletypeChange}
                    displayEmpty
                    sx={{ gridColumn: "span 4" }}
                >
                    {publisher.map((e) => {
                        return (
                            <MenuItem value={e.author_id}>
                                {e.author_name}
                            </MenuItem>
                        );
                    })}
                </Select>

                <InputLabel>Publish Date</InputLabel>
                <TextField
                    variant="filled"
                    type="date"
                    value={publishDate}
                    onChange={handlePublishDateChange}
                    placeholder="Publication date"
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
                    {languages.map((e) => {
                        return (
                            <MenuItem value={e.language_code}>{e.lan}</MenuItem>
                        );
                    })}
                </Select>
                <InputLabel id="vendor-label">Vendor</InputLabel>
                <Select
                    labelId="vendor-label"
                    id="vendor"
                    value={vendor}
                    onChange={handleVendorChange}
                    displayEmpty
                    sx={{ gridColumn: "span 4" }}
                >
                    {
                        (vendors.map = (e) => {
                            return (
                                <MenuItem value={e.vendor_id}>
                                    {e.vendor_name}
                                </MenuItem>
                            );
                        })
                    }
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
                {searchResults.length > 0 && (
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Title</TableCell>
                                    <TableCell>Authors</TableCell>
                                    <TableCell>Field</TableCell>
                                    <TableCell>Language</TableCell>
                                    <TableCell>ISBN</TableCell>
                                    <TableCell>Edition</TableCell>
                                    <TableCell>Publish Date</TableCell>
                                    <TableCell>Vendor</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {currentItems.map((book) => (
                                    <TableRow
                                        key={book.id}
                                        onClick={() => handleBookClick(book)}
                                    >
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
                                        <TableCell>
                                            {book.volumeInfo.vendor}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                )}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: 2,
                    }}
                >
                    <Pagination
                        count={Math.ceil(searchResults.length / itemsPerPage)}
                        page={currentPage}
                        onChange={handlePageChange}
                        color="primary"
                    />
                </Box>
            </Box>
            <Dialog
                open={selectedBook != null}
                onClose={() => setSelectedBook(null)}
                sx={{ display: "flex", justifyContent: "center" }}
            >
                <DialogTitle>Book Details</DialogTitle>
                <DialogContent>
                    {selectedBook && (
                        <DialogContentText>
                            Title= {selectedBook.title}
                            <br />
                            <br />
                            Authors= {selectedBook.authors}
                            <br />
                            <br />
                            Field= {selectedBook.type}
                            <br />
                            <br />
                            Language= {selectedBook.language}
                            <br />
                            <br />
                            ISBN= {selectedBook.isbn}
                            <br />
                            <br />
                            Edition= {selectedBook.edition}
                            <br />
                            <br />
                            Publish Date= {selectedBook.publishDate}
                            <br />
                            <br />
                            Vendor= {selectedBook.vendor}
                            <br />
                            <br />
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
