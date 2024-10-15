import React from 'react';
import Download from '../../assets/images/download.svg'; // Download icon (can be installed using `npm install react-icons`)

const Labresult = () => {
  // Dummy data for the lab results
  const labResults = [
    { name: 'Blood Tests', downloadable: true },
    { name: 'CT Scans', downloadable: true, highlighted: true }, // Highlighted row
    { name: 'Radiology Reports', downloadable: true },
    { name: 'X-Rays', downloadable: true },
    { name: 'Urine Test', downloadable: true },
  ];

  return (
    <div className="w-{367} h-{296px}  bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-bold text-gray-800 mb-4">Lab Results</h3>
      <div className="space-y-2 overflow-y-auto h-[200px] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 pr-2">
        {labResults.map((result, index) => (
          <div
            key={index}
            className={`flex justify-between items-center p-2 rounded-md ${
              result.highlighted ? 'bg-gray-100' : ''
            } hover:bg-gray-100 transition`}
          >
            <span className="text-gray-700">{result.name}</span>
            {result.downloadable && (
              <button className="text-gray-500 hover:text-gray-700">
                <img src={Download}
                 alt="icon"
                 className="h-5 w-5" />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Labresult;
