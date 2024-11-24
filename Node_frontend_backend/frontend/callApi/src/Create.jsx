import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
    Button,
    Container,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from '@mui/material';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const Create = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/allRecords');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:5000/delete/${id}`);
            const filteredData = data.filter((item) => item._id !== id);
            setData(filteredData);
            alert(response.data.message);
        } catch (error) {
            console.error('Error deleting data:', error);
        }
    };

    // Function to export data to Excel
    const exportToExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(data); // Convert JSON data to sheet format
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Data");
        XLSX.writeFile(workbook, "data_export.xlsx"); // Export the file
    };

    // Function to export data to PDF
    const exportToPDF = () => {
        const doc = new jsPDF();
        doc.text("Exported Data", 20, 10); // Title in the PDF
        doc.autoTable({
            head: [['Name', 'Age', 'Address', 'Gender']],
            body: data.map(item => [item.name, item.age, item.address, item.gender]), // Map the data
        });
        doc.save("data_export.pdf"); // Save the PDF
    };

    return (
        <Container>
            <Button component={Link} to="/" variant="contained" color="success" sx={{ marginY: 3 }}>
                Home
            </Button>
            <Typography variant="h4" component="h1" gutterBottom>
                Fetched Data
            </Typography>
            <Button variant="contained" color="primary" onClick={exportToExcel} sx={{ marginY: 2 }}>
                Export to Excel
            </Button>
            <Button variant="contained" color="secondary" onClick={exportToPDF} sx={{ marginY: 2, marginLeft: 2 }}>
                Export to PDF
            </Button>

            {data.length > 0 ? (
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Age</TableCell>
                                <TableCell>Address</TableCell>
                                <TableCell>Gender</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.age}</TableCell>
                                    <TableCell>{item.address}</TableCell>
                                    <TableCell>{item.gender}</TableCell>
                                    <TableCell>
                                        <Button
                                            component={Link}
                                            to={`/update/${item._id}`}
                                            variant="contained"
                                            color="primary"
                                            size="small"
                                        >
                                            Edit
                                        </Button>
                                        <Button
                                            onClick={() => handleDelete(item._id)}
                                            variant="contained"
                                            color="error"
                                            size="small"
                                            sx={{ marginLeft: 2 }}
                                        >
                                            Delete
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            ) : (
                <Typography variant="body1">No data found</Typography>
            )}
        </Container>
    );
};

export default Create;
