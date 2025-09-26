'use strict';

// write your code here
document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');

  if (!table) {
    return;
  }

  function cloneColumn(fromIndex, insertBeforeIndex) {
    const rows = Array.from(table.rows);

    rows.forEach((row) => {
      const cells = Array.from(row.cells);

      if (fromIndex < 0 || fromIndex >= cells.length) {
        return;
      }

      const fromCell = cells[fromIndex];
      const newCell = fromCell.cloneNode(true);
      const refCell = cells[insertBeforeIndex] || null;

      row.insertBefore(newCell, refCell);
    });
  }

  const firstRow = table.rows[0];

  if (firstRow) {
    const lastIndex = firstRow.cells.length - 1;
    const insertIndex = lastIndex;

    cloneColumn(1, insertIndex);
  }
});
