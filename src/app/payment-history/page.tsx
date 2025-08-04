import PaymentHistory from "../../components/PaymentHistory";
import StartGroupPaymentButton from "../../components/StartGroupPaymentButton";

export default function PaymentHistoryPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="w-full max-w-xl flex flex-col gap-6 rounded-2xl shadow-xl p-8 mt-12">
        <StartGroupPaymentButton />
        <PaymentHistory />
      </div>
    </div>
  );
}