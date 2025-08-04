"use client";
import { useEffect, useRef, useState } from "react";

export default function CameraModal({ open, onClose, onCapture }: {
  open: boolean;
  onClose: () => void;
  onCapture: (img: string) => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    if (open) {
      navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } })
        .then(s => {
          setStream(s);
          if (videoRef.current) {
            videoRef.current.srcObject = s;
          }
        });
    } else {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
        setStream(null);
      }
      setPreview(null);
    }
    // Cleanup on unmount
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
    // eslint-disable-next-line
  }, [open]);

  const handleCapture = () => {
    if (!videoRef.current || !canvasRef.current) return;
    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;
    ctx.drawImage(videoRef.current, 0, 0, 320, 240);
    const dataUrl = canvasRef.current.toDataURL("image/png");
    setPreview(dataUrl);
  };

  const handleAccept = () => {
    if (preview) {
      onCapture(preview);
      onClose();
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center gap-4 w-full max-w-xs relative">
        <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-2xl" onClick={onClose}>&times;</button>
        <h3 className="text-lg font-bold text-indigo-700 mb-2">Take a photo</h3>
        {!preview ? (
          <>
            <video ref={videoRef} width={320} height={240} autoPlay playsInline className="rounded-lg border" />
            <button
              className="mt-2 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-xl transition-colors text-base shadow-md"
              onClick={handleCapture}
              type="button"
            >
              Capture
            </button>
          </>
        ) : (
          <>
            <canvas ref={canvasRef} width={320} height={240} className="rounded-lg border mb-2" style={{ display: "none" }} />
            <img src={preview} alt="Preview" className="rounded-lg border mb-2" width={320} height={240} />
            <div className="flex gap-2 w-full">
              <button
                className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-xl transition-colors text-base shadow-md"
                onClick={handleAccept}
                type="button"
              >
                Accept
              </button>
              <button
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-xl transition-colors text-base shadow-md"
                onClick={() => setPreview(null)}
                type="button"
              >
                Retake
              </button>
            </div>
          </>
        )}
        <canvas ref={canvasRef} width={320} height={240} style={{ display: "none" }} />
      </div>
    </div>
  );
}