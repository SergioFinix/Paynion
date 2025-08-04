"use client";
import { useRef, useState } from "react";
import NetworkSelector from "../../components/NetworkSelector";
import TokenSelector from "../../components/TokenSelector";
import CameraModal from "../../components/CameraModal";

export default function CreateGroupPayment() {
  const cameraInputRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [network, setNetwork] = useState("");
  const [token, setToken] = useState("");
  const [cameraOpen, setCameraOpen] = useState(false);
  const [ticketImage, setTicketImage] = useState<string | null>(null);

  const handleCameraClick = () => {
    setCameraOpen(true);
  };

  const handleFileUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <CameraModal open={cameraOpen} onClose={() => setCameraOpen(false)} onCapture={setTicketImage} />
      <div className="w-full max-w-xl flex flex-col gap-6 rounded-2xl shadow-xl p-8 mt-12">
        <h2 className="text-2xl font-bold text-indigo-700 text-center mb-2">Create Group Payment</h2>
        <form className="flex flex-col gap-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Event name</label>
            <input type="text" placeholder="e.g. Dinner with friends" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Total amount</label>
            <input type="number" min="0" step="0.01" placeholder="$0.00" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Upload ticket</label>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={handleCameraClick}
                className="flex-1 px-4 py-3 rounded-lg border-2 border-dashed border-gray-300 hover:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-colors text-gray-600 hover:text-indigo-600"
              >
                📷 Camera
              </button>
              <button
                type="button"
                onClick={handleFileUploadClick}
                className="flex-1 px-4 py-3 rounded-lg border-2 border-dashed border-gray-300 hover:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-colors text-gray-600 hover:text-indigo-600"
              >
                📁 Gallery
              </button>
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  const reader = new FileReader();
                  reader.onload = (ev) => setTicketImage(ev.target?.result as string);
                  reader.readAsDataURL(e.target.files[0]);
                }
              }}
            />
            {ticketImage && (
              <img src={ticketImage} alt="Ticket preview" className="mt-3 rounded-lg border w-full max-w-xs mx-auto" />
            )}
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
            <span>or</span>
            <button type="button" className="underline text-indigo-600 hover:text-indigo-800">Add items manually</button>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Network</label>
            <NetworkSelector value={network} onChange={setNetwork} />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Token</label>
            <TokenSelector value={token} onChange={setToken} />
          </div>
          <button type="submit" className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors text-lg shadow-md">
            Generate QR
          </button>
        </form>
      </div>
    </div>
  );
}