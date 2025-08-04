"use client";
import { useRouter } from "next/navigation";

export default function StartGroupPaymentButton() {
  const router = useRouter();
  return (
    <button
      className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors text-lg shadow-md"
      onClick={() => router.push("/create-group-payment")}
    >
      Start group payment
    </button>
  );
}