'use client';
import { useState, useEffect } from 'react';
import Link from "next/link";
import { OrderProgress, PaymentStatus } from '@prisma/client';

interface Order {
  id: number;
  orderNumber: string;
  totalAmount: Float32Array;
  createdAt: Date;
  orderProgress: OrderProgress;
  paymentStatus: PaymentStatus;
  address: {
    firstName: string;
    lastName: string;
  } | null;
}

const Orders = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [filter, setFilter] = useState<string>('ALL');

  useEffect(() => {
    fetchOrders();
  }, [filter]);

  const fetchOrders = async () => {
    try {
      const response = await fetch(`/api/orders${filter !== 'ALL' ? `?status=${filter}` : ''}`);
      const data = await response.json();
      setOrders(data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  const getStatusColor = (status: OrderProgress, paymentStatus: PaymentStatus) => {
    if (paymentStatus === 'PAID') return 'bg-[#219653]/[0.08] text-[#219653]';
    if (paymentStatus === 'PENDING') return 'bg-[#FFA70B]/[0.08] text-[#FFA70B]';
    return 'bg-[#D34053]/[0.08] text-[#D34053]';
  };

  return (
    <>
      <div className="relative z-10 rounded-[10px] bg-white shadow-1 mb-4 px-4 py-4 md:px-6 2xl:px-7 flex items-center justify-start flex-wrap">
        {Object.values(OrderProgress).map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`mr-4 py-3 px-7 rounded-sm ${
              filter === status ? 'bg-[#14AE5C] text-[#FFFFFF]' : 'bg-[#f1f1f1] hover:bg-[#14AE5C] hover:text-[#FFFFFF]'
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      <div className="rounded-[10px] border border-stroke bg-white p-4 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card sm:p-7">
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-[#F7F9FC] text-left dark:bg-dark-2">
                <th className="min-w-[220px] px-4 py-4 font-medium text-dark xl:pl-7">Order ID</th>
                <th className="min-w-[220px] px-4 py-4 font-medium text-dark xl:pl-7">Name</th>
                <th className="min-w-[150px] px-4 py-4 font-medium text-dark">Order date</th>
                <th className="min-w-[120px] px-4 py-4 font-medium text-dark">Status</th>
                <th className="px-4 py-4 text-right font-medium text-dark xl:pr-7">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={order.id}>
                  <td className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7 ${
                    index === orders.length - 1 ? "border-b-0" : "border-b"
                  }`}>
                    <p className="mt-[3px] text-body-sm font-medium">{order.orderNumber}</p>
                  </td>
                  <td className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7 ${
                    index === orders.length - 1 ? "border-b-0" : "border-b"
                  }`}>
                    <h5 className="text-dark">
                      {order.address ? `${order.address.firstName} ${order.address.lastName}` : 'N/A'}
                    </h5>
                  </td>
                  <td className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${
                    index === orders.length - 1 ? "border-b-0" : "border-b"
                  }`}>
                    <p className="text-dark">
                      {new Date(order.createdAt).toLocaleDateString()}
                    </p>
                  </td>
                  <td className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${
                    index === orders.length - 1 ? "border-b-0" : "border-b"
                  }`}>
                    <p className={`inline-flex rounded-full px-3.5 py-1 text-body-sm font-medium ${
                      getStatusColor(order.orderProgress, order.paymentStatus)
                    }`}>
                      {order.orderProgress}
                    </p>
                  </td>
                  <td className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pr-7 ${
                    index === orders.length - 1 ? "border-b-0" : "border-b"
                  }`}>
                    <div className="flex items-center justify-end space-x-3.5">
                      <Link href={`/Orders/Order-Detail/${order.id}`} className="hover:text-primary">
                        <svg className="fill-current hover:fill-[#14AE5C]" width="20" height="20" viewBox="0 0 20 20">
                          <path fillRule="evenodd" clipRule="evenodd" d="M9.99935 6.87492C8.27346 6.87492 6.87435 8.27403 6.87435 9.99992C6.87435 11.7258 8.27346 13.1249 9.99935 13.1249C11.7252 13.1249 13.1243 11.7258 13.1243 9.99992C13.1243 8.27403 11.7252 6.87492 9.99935 6.87492ZM8.12435 9.99992C8.12435 8.96438 8.96382 8.12492 9.99935 8.12492C11.0349 8.12492 11.8743 8.96438 11.8743 9.99992C11.8743 11.0355 11.0349 11.8749 9.99935 11.8749C8.96382 11.8749 8.12435 11.0355 8.12435 9.99992Z"/>
                        </svg>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Orders;