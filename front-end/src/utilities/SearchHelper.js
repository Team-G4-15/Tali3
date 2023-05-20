export function HandleSearchChanges(
    value,
    searchState,
    field,
    filteredRows,
    mockDataContacts,
    setSearchState,
    setFilteredRows
) {
    let options = { ...searchState, [field]: value };
    /*
    if (value === "") {
        options = { ...searchState };
        if (field in options) {
            // removing the field from the seach state
            delete options.field;
        }
    } else {
        options = { ...searchState, [field]: value };
    }*/

    //let result = SearchHelper(searchState, field);

    const newfilteredRows = mockDataContacts.filter(function (row) {
        let isRowMatch = true;

        for (const fieldItem in row) {
            if (fieldItem in options) {
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
