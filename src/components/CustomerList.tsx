'use client';
import { useEffect, useState } from 'react';

interface Customer {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  companyName?: string;
  companyAddress?: string;
  companyPhoneNumber?: string;
  orders?: string[];
  notes?: string[];
}

export default function CustomerList() {
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await fetch('/api/customer');
        if (!response.ok) {
          throw new Error('Failed to fetch customers');
        }
        const data: Customer[] = await response.json();
        setCustomers(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCustomers();
  }, []);

  return (
    <div>
      <h1>Customer List</h1>
      {customers.length > 0 ? (
        <ul>
          {customers.map((customer) => (
            <li key={customer._id}>
              {customer.firstName} {customer.lastName}
            </li>
          ))}
        </ul>
      ) : (
        <p>No customers found.</p>
      )}
    </div>
  );
}