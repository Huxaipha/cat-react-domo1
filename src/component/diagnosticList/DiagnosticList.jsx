import React from 'react';

const DiagnosticList = () => {
  const diagnostics = [
    {
      problem: 'Hypertension',
      description: 'Chronic high blood pressure',
      status: 'Under Observation',
    },
    {
      problem: 'Type 2 Diabetes',
      description: 'Insulin resistance and elevated blood sugar',
      status: 'Cured',
    },
    {
      problem: 'Asthma',
      description: 'Recurrent episodes of bronchial constriction',
      status: 'Inactive',
    },
    // Add more rows as needed
  ];

  return (
    <div className="bg-white rounded-lg shadow-md w-[766px] h-[349px] p-4 mx-auto mb-4"> {/* Set the width to 766px and height to 349px */}
      <h2 className="text-lg font-bold mb-4">Diagnostic List</h2>
      <div className="space-y-2 overflow-y-auto h-[200px] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 pr-2">
        <table className="table-auto w-full text-left">
          <thead className="bg-gray-100 text-gray-600 text-sm uppercase font-medium">
            <tr>
              <th className="p-4">Problem/Diagnosis</th>
              <th className="p-4">Description</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            {diagnostics.map((diagnostic, index) => (
              <tr key={index} className="border-b">
                <td className="p-4">{diagnostic.problem}</td>
                <td className="p-4">{diagnostic.description}</td>
                <td className="p-4">
                  <span
                    className={`px-2 py-1 rounded-full text-sm ${
                      diagnostic.status === 'Cured'
                        ? 'bg-green-100 text-green-800'
                        : diagnostic.status === 'Under Observation'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {diagnostic.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DiagnosticList;
