function createGrid(columns, rows){
    var grid = document.createElement('div');
    grid.className = 'grid';

    for (var col = 0; col < columns; ++col) {
        var column = document.createElement('div'); // create column
        column.className = 'column';
        for (var r = 0; r < rows; ++r) {
            var row = document.createElement('div'); // create row
            row.className = 'row';
            row.textContent = col + '-' +r; // set text
            column.appendChild(row); // append row in column
        }
        grid.appendChild(column); // append column inside grid
    }
    document.body.appendChild(grid);
}