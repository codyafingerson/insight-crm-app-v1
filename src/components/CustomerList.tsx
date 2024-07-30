'user client';
import { type CustomerDocument } from '@/models/Customer';
import { useState, useEffect } from 'react';

export default function CustomerList() {
    const [customers, setCustomers] = useState<CustomerDocument[]>([]);

    useEffect(() => {}, []);


  return (
    <div>CustomerList</div>
  )
}