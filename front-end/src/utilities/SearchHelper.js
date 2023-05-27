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
    //console.log(newfilteredRows);
    setSearchState(options);
    setFilteredRows(newfilteredRows);
}
