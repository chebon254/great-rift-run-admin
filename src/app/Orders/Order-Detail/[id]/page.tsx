import OrderDetails from './OrderDetails';

export default async function OrderDetailsPage({ params }: { params: { id: string } }) {
  // Ensure params are resolved asynchronously
  const { id } = params;
  return <OrderDetails id={id} />;
}
