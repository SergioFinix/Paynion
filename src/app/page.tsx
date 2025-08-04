import Image from "next/image";
import StartGroupPaymentButton from "../components/StartGroupPaymentButton";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="w-full max-w-xl flex flex-col items-center gap-6 rounded-2xl shadow-xl p-8 mt-12">
        <Image src="/logo.svg" alt="Paynion Logo" width={80} height={80} className="mb-2" />
        <h1 className="text-3xl font-bold text-indigo-700 text-center">Welcome to Paynion!</h1>
        <p className="text-gray-700 text-center text-lg">
          Easily split group bills and pay your share in seconds.<br/>
          Perfect for restaurants, events, and any occasion where sharing expenses is needed.
        </p>
        <ul className="text-gray-600 text-left text-base list-disc pl-5 w-full">
          <li>1. Create or join a group payment by scanning a QR code.</li>
          <li>2. Select what you consumed or add your own items.</li>
          <li>3. Pay your share with your favorite Web3 wallet.</li>
        </ul>
        <StartGroupPaymentButton />
      </div>
    </div>
  );
}
