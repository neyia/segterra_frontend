function Table(){
    const tableHeadCell = document.querySelectorAll('.table__head .table__cell');
    
    tableHeadCell.forEach((e) => {
        console.log(e.clientHeight);
    });
}

Table();