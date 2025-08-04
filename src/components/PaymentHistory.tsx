"use client";
import { useState } from "react";
import PaymentCard from "./PaymentCard";

const paidByMe = [
  {
    id: "1",
    event: "Dinner at Luigi's",
    date: "2024-06-01",
    amount: 120.5,
    participants: 4,
    status: "Completed",
  },
  {
    id: "2",
    event: "Birthday Party",
    date: "2024-05-20",
    amount: 200,
    participants: 6,
    status: "Completed",
  },
];

const iOwe = [
  {
    id: "3",
    event: "Brunch at Café",
    date: "2024-06-10",
    amount: 35.75,
    participants: 3,
    status: "Pending",
  },
];

export default function PaymentHistory() {
  const [tab, setTab] = useState<'paid' | 'owe'>('paid');
  return (
    <div className="bg-white/80 rounded-2xl shadow-xl p-6 flex flex-col gap-6 mt-8">
      <h2 className="text-xl font-bold text-indigo-700 text-center mb-2">Payment History</h2>
      <div className="flex justify-center gap-2 mb-4">
        <button
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${tab === 'paid' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-indigo-700'}`}
          onClick={() => setTab('paid')}
        >
          Paid by me
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${tab === 'owe' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-indigo-700'}`}
          onClick={() => setTab('owe')}
        >
          I owe
        </button>
      </div>
      <div>
        {tab === 'paid' && (
          paidByMe.length > 0 ? (
            <div className="flex flex-col gap-4">
              {paidByMe.map((p) => (
                <PaymentCard key={p.id} payment={p} />
              ))}
            </div>
          ) : (
            <div className="text-gray-400 text-center py-8">No payments yet.</div>
          )
        )}
        {tab === 'owe' && (
          iOwe.length > 0 ? (
            <div className="flex flex-col gap-4">
              {iOwe.map((p) => (
                <PaymentCard key={p.id} payment={p} />
              ))}
            </div>
          ) : (
            <div className="text-gray-400 text-center py-8">You don’t owe anything.</div>
          )
        )}
      </div>
    </div>
  );
}