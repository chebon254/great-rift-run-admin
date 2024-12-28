// src/app/Orders/Order-Detail/[id]/page.tsx
import OrderDetails from './OrderDetails';

export default function OrderDetailsPage({ params }: { params: { id: string } }) {
  return <OrderDetails id={params.id} />;
}