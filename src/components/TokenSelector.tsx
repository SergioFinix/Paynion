"use client";
import Image from "next/image";
import { useState } from "react";

const tokens = [
  { value: "usdt", label: "USDT", logo: "/tokens/usdt.svg" },
  { value: "usdc", label: "USDC", logo: "/tokens/usdc.svg" },
  { value: "eth", label: "ETH", logo: "/tokens/eth.svg" },
];

export default function TokenSelector({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const [open, setOpen] = useState(false);
  const selected = tokens.find(t => t.value === value);

  return (
    <div className="relative">
      <button
        type="button"
        className="w-full flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        onClick={() => setOpen(!open)}
      >
        {selected ? (
          <>
            <Image src={selected.logo} alt={selected.label} width={24} height={24} />
            <span>{selected.label}</span>
          </>
        ) : (
          <span className="text-gray-400">Select token</span>
        )}
        <span className="ml-auto">▼</span>
      </button>
      {open && (
        <div className="absolute z-10 mt-2 w-full bg-white border rounded-lg shadow-lg">
          {tokens.map(t => (
            <button
              key={t.value}
              type="button"
              className="flex items-center gap-2 w-full px-4 py-2 hover:bg-indigo-50"
              onClick={() => {
                onChange(t.value);
                setOpen(false);
              }}
            >
              <Image src={t.logo} alt={t.label} width={24} height={24} />
              <span>{t.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}