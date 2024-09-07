import PropTypes from 'prop-types';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
import { Button } from "@/components/ui/button"
import { useState } from 'react';
  
function Display({transactions,setTransactions}){

  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const rowsPerPage = 6; // Number of rows per page
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = transactions.slice(indexOfFirstRow, indexOfLastRow);

  function deleteTransaction(index) {
    setTransactions(d => d.filter((_, i) => i !== index));
  }

  function handlePageChange(pageNumber) {
    setCurrentPage(pageNumber);
  }

// Calculate the total number of pages
const totalPages = Math.ceil(transactions.length / rowsPerPage);
return (
  <div>
      <Table>
      <TableHeader>
      <TableRow>
          <TableHead className="w-[50px]"></TableHead>
          <TableHead className="w-[300px]">Name</TableHead>
          <TableHead className="w-[150px]">Category</TableHead>
          <TableHead>Type</TableHead>
          <TableHead className="w-[150px]">Date</TableHead>
          <TableHead className="text-right">Amount</TableHead>
      </TableRow>
      </TableHeader>
      <TableBody>
          {currentRows.map((element, index) => (
            <TableRow
              key={index}
              style={{ color: element.type === "Expense" ? "red" : "green" }}
            >
              <TableCell>
                <Button variant="destructive" onClick={() => deleteTransaction(indexOfFirstRow + index)}>
                  Delete
                </Button>
              </TableCell>
              <TableCell className="font-medium">{element.name}</TableCell>
              <TableCell>{element.category}</TableCell>
              <TableCell>{element.type}</TableCell>
              <TableCell>{element.date}</TableCell>
              <TableCell className="text-right">${element.cost}</TableCell>
            </TableRow>
          ))}
        </TableBody>
    </Table>
    <div className="flex justify-between items-center mt-4">
    <Button
      variant="outline"
      onClick={() => handlePageChange(currentPage - 1)}
      disabled={currentPage === 1}
    >
      Previous
    </Button>
    <span>Page {currentPage} of {totalPages}</span>
    <Button
      variant="outline"
      onClick={() => handlePageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
    >
      Next
    </Button>
  </div>
  </div>
    )
}

Display.propTypes = {
    transactions : PropTypes.array,
    setTransactions: PropTypes.func.isRequired,
}

export default Display