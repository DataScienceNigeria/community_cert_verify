"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {getAdminUsers, DeleteAdminUsers} from "@/lib/manipulateTables" 
import { User } from "@/types/students"
import { Button } from './ui/button';

const CertificateTable = () => {
  const [admins, setAdmins] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('id');
  const [order, setOrder] = useState('asc');
  const [AdminsToDisplayAfterFilter, setAdminsToDisplayAfterFilter] = useState<User[]>([]);


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
      const response = await getAdminUsers();
      setAdmins(response  as User[] || [])
      console.log(response)
      setTotalPages(Math.ceil((response?.length || 0) / limit));
    } catch (error) {
      setError('Failed to fetch data');
      console.error(error);
    }
    setLoading(false);
  };


  // Implement the filter by the filter state when the filter state changes either direction
  useEffect(() => {
    const filteredAdmins = admins.filter(admin => {
      return Object.values(admin).some(value => {
        if (typeof value === 'string') {
          return value.toLowerCase().includes(filter.toLowerCase());
        }
        return false;
      });
    });
    setTotalPages(Math.ceil(filteredAdmins.length / limit));
    setAdmins(filteredAdmins);
  }, [filter]);
  
  


  // Fetch data when the component mounts and set the page to 1
  useEffect(() => {
    setPage(1);
    setLimit(10);
    fetchData();
  }, []);

  // Implement the sorting when the sort state changes either direction
  useEffect(() => {
    const certToDisplay = admins.slice((page - 1) * limit, page * limit);
    setAdminsToDisplayAfterFilter(certToDisplay);
  }, [page, admins, limit]);


  // Implement the sorting when the sort state changes either direction
  const handleDelete = async (id: string) => {
    try {
      const result = await DeleteAdminUsers(id);
      console.log(result)
      setAdmins(admins.filter(admin => admin.id !== id));
    } catch (error) {
      console.log(error)
      setError('Failed to delete certificate');
      console.error(error);
    }
  };

  // Implement the sorting when the sort state changes either direction
  const handleUpdate = async (id: string, updatedData: User) => {
    try {
      const response = await axios.put(`/api/admin_manipulate/${id}`, updatedData);
      setAdmins(admins.map(admin => admin.id === id ? response.data.result : admin));
    } catch (error) {
      setError('Failed to update certificate');
      console.error(error);
    }
  };


  const toggleSort = (column: any) => {
    /*
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
          console.log(e.target.value);
        }}

        placeholder="Filter by name, email, etc..."
      />
      <table>
        <thead>
          <tr>
            <th onClick={() => toggleSort('id')}>Id</th>
            <th onClick={() => toggleSort('email')}>Email</th>
            <th onClick={() => toggleSort('name')}>Name</th>
            <th onClick={() => toggleSort('role')}>Role</th>
            <th className='border bg-gray-100'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {loading ? <tr><td colSpan={7}>Loading...</td></tr> : AdminsToDisplayAfterFilter?.map(admin => (
            <tr key={admin.id}>
              <td>{admin.id}</td>
              <td>{admin.email}</td>
              <td>{admin.name}</td>
              <td>{admin.role}</td>
              <td className='md:space-x-4'>
                <Button onClick={() => handleDelete(admin.id)} variant="destructive">Delete</Button>
                <Button onClick={() => handleUpdate(admin.id, { ...admin, name: 'Updated Name' })} variant="default">Update</Button>
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
