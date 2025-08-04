interface Payment {
  id: string;
  event: string;
  date: string;
  amount: number;
  participants: number;
  status: string;
}

export default function PaymentCard({ payment }: { payment: Payment }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-col gap-1 border border-gray-100">
      <div className="flex justify-between items-center">
        <span className="font-semibold text-indigo-700">{payment.event}</span>
        <span className="text-sm text-gray-400">{payment.date}</span>
      </div>
      <div className="flex justify-between items-center mt-1">
        <span className="text-gray-600 text-sm">Participants: {payment.participants}</span>
        <span className="text-lg font-bold text-indigo-600">${payment.amount.toFixed(2)}</span>
      </div>
      <span className={`text-xs mt-1 font-medium ${payment.status === "Completed" ? "text-green-600" : "text-yellow-600"}`}>{payment.status}</span>
    </div>
  );
}