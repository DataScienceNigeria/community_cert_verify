"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {getCertificates} from "@/lib/manipulateTables" 
import { StudentsData } from "@/types/students"
import { revalidatePath } from 'next/cache';
import toast, { Toaster } from 'react-hot-toast';

const CertificateTable = () => {
  const [certificates, setCertificates] = useState<StudentsData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('certificateID');
  const [order, setOrder] = useState('asc');
  const [certificatesToDisplayAfterFilter, setcertificatesToDisplayAfterFilter] = useState<StudentsData[]>([]);


  // Pagination navigation of the table
  const paginationNavigation = (direction?: string) => {
    setPage(prevPage => {
      const newPage = direction === 'forward' ? prevPage + 1 : prevPage - 1;
      return newPage;
    });
  };

  // Fetch data from the API
  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await getCertificates();
      setCertificates(response || [])
      setTotalPages(Math.ceil((response?.length || 0) / limit));
    } catch (error) {
      setError('Failed to fetch data');
      console.error(error);
    }
    setLoading(false);
  };


  // Implement the filter by the filter state when the filter state changes either direction
  useEffect(() => {
    const filteredCertificates = certificates.filter(certificate => {
      return Object.values(certificate).some(value => {
        if (typeof value === 'string') {
          return value.toLowerCase().includes(filter.toLowerCase());
        }
        return false;
      });
    });
    setTotalPages(Math.ceil(filteredCertificates.length / limit));
    setCertificates(filteredCertificates);
  }, [filter]);
  
  


  // Fetch data when the component mounts and set the page to 1
  useEffect(() => {
    setPage(1);
    setLimit(10);
    fetchData();
  }, []);

  // Implement the sorting when the sort state changes either direction
  useEffect(() => {
    const certToDisplay = certificates.slice((page - 1) * limit, page * limit);
    setcertificatesToDisplayAfterFilter(certToDisplay);
  }, [page, certificates, limit]);


  const notifyDelete = (msg: string) => toast(msg);
  // Implement the sorting when the sort state changes either direction
  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`/api/certificate_manipulate/${id}`);
      setCertificates(certificates.filter(certificate => certificate.id !== id));
      notifyDelete("Certificate deleted successfully")
    } catch (error) {
      console.log(error)
      setError('Failed to delete certificate');
      console.error(error);
    }
  };

  // Implement the sorting when the sort state changes either direction
  const handleUpdate = async (id: string, updatedData: StudentsData) => {
    try {
      const response = await axios.put(`/api/certificate_manipulate/${id}`, updatedData);
      setCertificates
      (certificates.map(certificate => certificate.certificateID === id ? response.data.result : certificate));
    } catch (error) {
      setError('Failed to update certificate');
      console.error(error);
    }
  };


  const toggleSort = (column: any) => {
    /*
    This function will be called when a table header is clicked.
    It will toggle the sort order between 'asc' and 'desc' for the given column.
    */
    const newOrder = (sort === column && order === 'asc') ? 'desc' : 'asc';
    setSort(column);
    setOrder(newOrder);
  };



  return (
    <div>
      {error && <p className='p-2'>{error}</p>}
      <input
        type="text"
        className='p-2 mb-2 rounded-xl border w-1/3'
        value={filter}
        onChange={e => {
          setFilter(e.target.value);
          console.log(e.target.value)
        }}

        placeholder="Filter by name, email, etc..."
      />
      <table>
        <thead>
          <tr>
            <th onClick={() => toggleSort('certificateID')}>Certificate ID</th>
            <th onClick={() => toggleSort('studentID')}>Student ID</th>
            <th onClick={() => toggleSort('name')}>Name</th>
            <th onClick={() => toggleSort('email')}>Email</th>
            <th onClick={() => toggleSort('certificationName')}>Certification Name</th>
            <th onClick={() => toggleSort('issuedBy')}>Issued By</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {loading ? <tr><td colSpan={7}>Loading...</td></tr> : certificatesToDisplayAfterFilter?.map(certificate => (
            <tr key={certificate.id}>
              <td>{certificate.certificateID}</td>
              <td>{certificate.studentID}</td>
              <td>{certificate.name}</td>
              <td>{certificate.email}</td>
              <td>{certificate.certificationName}</td>
              <td>{certificate.issuedBy}</td>
              <td>
                <button onClick={() => handleDelete(certificate.id)}>Delete</button>
                <button onClick={() => handleUpdate(certificate.id, { ...certificate, name: 'Updated Name' })}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='my-4 flex space-x-4 items-center'>
        <button disabled={page <= 1} onClick={() => {paginationNavigation("backward")}} className='border p-2 cursor-pointer hover:bg-slate-100'>Previous</button>
        <span> Page {page} of {totalPages} </span>
        <button disabled={page >= totalPages} onClick={() => {paginationNavigation("forward")}} className='border p-2 cursor-pointer hover:bg-slate-100'>Next</button>
      </div>
    </div>
    
  );
};

export default CertificateTable;
