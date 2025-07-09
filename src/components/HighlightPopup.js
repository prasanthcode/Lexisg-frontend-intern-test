import React, { useEffect, useRef } from "react";

const HighlightPopup = ({ onClose }) => {
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center p-4">
      <div
        ref={popupRef}
        className="bg-gray-900 text-white rounded-2xl shadow-2xl max-w-6xl w-full h-[90vh] flex flex-col overflow-hidden relative border border-gray-700"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-400 hover:text-white text-2xl font-bold"
        >
          &times;
        </button>

        <div className="px-6 py-4 border-b border-gray-700 text-lg font-semibold">
          PDF Viewer – Legal Document
        </div>

        <div className="flex-1 overflow-hidden">
          <iframe
            src="/sample.pdf"
            title="PDF Viewer"
            className="w-full h-full"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default HighlightPopup;
