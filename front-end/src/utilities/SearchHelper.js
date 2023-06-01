export function HandleSearchChanges(
    value,
    searchState,
    field,
    filteredRows,
    initialRows,
    setSearchState,
    setFilteredRows
) {
    let options = { ...searchState, [field]: value };

    const newfilteredRows = initialRows.filter(function (row) {
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
export function HandleSearchChangesRp(
    value,
    searchState,
    field,
    filteredRows,
    setSearchState,
    initialRows,
    setFilteredRows
) {
    let options = { ...searchState, [field]: value };

    const newfilteredRows = initialRows.filter(function (row) {
        let isRowMatch = true;
        for (const fieldItem in row) {
            if (fieldItem in options) {
                if (fieldItem !== "doi") {
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
    console.log(newfilteredRows);
    setSearchState(options);

    setFilteredRows(newfilteredRows);
}
