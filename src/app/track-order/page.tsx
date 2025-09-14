export default function TrackOrderPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Track Your Order</h1>
      <div className="prose">
        <p>Track the status of your EcoNutrient order easily. Enter your order number and email address below to get real-time updates.</p>
        <h2>How to Track Your Order</h2>
        <ol>
          <li>Locate your order confirmation email, which contains your order number.</li>
          <li>Enter your order number and the email address used for the order in the form below.</li>
          <li>Click &#34;Track Order&#34; to view the current status.</li>
        </ol>
        <h2>Order Status Meanings</h2>
        <ul>
          <li><strong>Processing:</strong> Your order is being prepared for shipment.</li>
          <li><strong>Shipped:</strong> Your order has been dispatched and is on its way.</li>
          <li><strong>Delivered:</strong> Your order has been successfully delivered.</li>
        </ul>
        <h2>Need Help?</h2>
        <p>If you encounter any issues tracking your order or have questions, please contact our customer service at support@econutrient.com.</p>
      </div>
    </div>
  );
}
