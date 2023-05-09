export function HandleSearchChanges(
    value,
    searchState,
    field,
    filteredRows,
    mockDataContacts,
    setSearchState,
    setFilteredRows
) {
    const options = { ...searchState, [field]: value };
    let newfilteredRows;
    //let result = SearchHelper(searchState, field);

    newfilteredRows = mockDataContacts.filter(function (row) {
        let isRowMatch = true;

        for (const fieldItem in row) {
            if (
                fieldItem in options &&
                options[fieldItem] !== "" &&
                value !== ""
            ) {
                if (fieldItem !== "isbn") {
                    isRowMatch =
                        isRowMatch &&
                        String(row[fieldItem])
                            .toLowerCase()
                            .includes(options[fieldItem].toLowerCase());
                } else {
                    isRowMatch =
                        isRowMatch &&
                        String(row[fieldItem])
                            .toLowerCase()
                            .startsWith(options[fieldItem].toLowerCase());
                }
            }
        }
        return isRowMatch;
    });

    setSearchState(options);

    setFilteredRows(newfilteredRows);
}
