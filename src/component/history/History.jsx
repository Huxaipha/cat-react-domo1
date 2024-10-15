import React from 'react';
import HeartBMP from '../../assets/images/HeartBPM.svg';
import temperature from '../../assets/images/temperature.svg';
import respiratoryrate from '../../assets/images/respiratoryrate.svg';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import ArrowUp from '../../assets/images/ArrowUp.svg';
import ArrowDown from '../../assets/images/ArrowDown.svg';
import DiagnosticList from '../diagnosticList/DiagnosticList';

// Blood Pressure Data for Chart
const data = [
  { month: 'Oct 2023', systolic: 130, diastolic: 85 },
  { month: 'Nov 2023', systolic: 150, diastolic: 90 },
  { month: 'Dec 2023', systolic: 160, diastolic: 100 },
  { month: 'Jan 2024', systolic: 145, diastolic: 95 },
  { month: 'Feb 2024', systolic: 130, diastolic: 80 },
  { month: 'Mar 2024', systolic: 160, diastolic: 78 },
];

// Blood Pressure Chart Component
const BloodPressureChart = () => {
  return (
    <div className="relative bg-white p-6 rounded-lg shadow-lg">
      {/* Title at the top, aligned to the left */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-start">Blood Pressure</h3>
        <select className="border bg-white text-sm rounded-md p-1">
          <option>Last 6 months</option>
        </select>
      </div>

      {/* Chart container */}
      <div className="relative bg-[#F4F0FE] p-6 rounded-lg shadow-inner flex">
        {/* Responsive Container for the chart */}
        <ResponsiveContainer width={420} height={187}>
          <LineChart data={data}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="systolic" stroke="#FF6B8A" dot={{ r: 5 }} />
            <Line type="monotone" dataKey="diastolic" stroke="#7551E9" dot={{ r: 5 }} />
          </LineChart>
        </ResponsiveContainer>

        {/* Systolic and Diastolic values aligned to the right of the chart */}
        <div className="ml-8 flex flex-col justify-center ">
          <div className="mb-4">
            <h4 className="text-sm text-gray-600">Systolic</h4>
            <p className="text-2xl font-bold text-pink-500">160</p>
            {/* Arrow and Text aligned */}
            <div className="flex items-center space-x-2">
              <img src={ArrowUp} alt="Arrow Up" />
              <p className="text-sm text-gray-500">Higher than Average</p>
            </div>
          </div>
          <div>
            <h4 className="text-sm text-gray-600">Diastolic</h4>
            <p className="text-2xl font-bold text-purple-500">78</p>
            {/* Arrow and Text aligned */}
            <div className="flex items-center space-x-2">
              <img src={ArrowDown} alt="Arrow Down" />
              <p className="text-sm text-gray-500">Lower than Average</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// History Component
const History = () => {
  return (
    <>
    <div className="bg-white rounded-lg shadow-lg w-[766px] h-auto mx-auto flex flex-col">
      {/* Blood Pressure Section */}
      <div className="mb-6 flex-1">
        <h2 className="text-lg font-semibold mb-4">Diagnosis History</h2>

        {/* Blood Pressure Chart */}
        <div className="bg-white p-0 rounded-lg mb-4">
          <BloodPressureChart />
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {/* Respiratory Rate */}
          <div className="bg-[#E0F3FA] p-4 rounded-lg shadow-md w-full flex flex-col justify-between">
            <img className="w-[96px] h-[96px]" src={respiratoryrate} alt="Respiratory Rate Icon" />
            <div className="w-full rounded-b-md flex flex-col items-start">
              <h4 className="text-md font-semibold mb-0">Respiratory Rate</h4>
              <p className="text-2xl font-bold text-blue-500 mb-0">20 bpm</p>
              <div className="flex items-center space-x-2">
                <p className="text-sm text-gray-500">Normal</p>
              </div>
            </div>
          </div>

          {/* Temperature */}
          <div className="bg-[#FFE6E9] p-4 rounded-lg shadow-md w-full flex flex-col justify-between">
            <img className="w-[96px] h-[96px]" src={temperature} alt="Temperature Icon" />
            <div className="w-full rounded-b-md flex flex-col items-start">
              <h4 className="text-md font-semibold mb-0">Temperature</h4>
              <p className="text-2xl font-bold text-red-500 mb-0">98.6°F</p>
              <div className="flex items-center space-x-2">
                <p className="text-sm text-gray-500">Normal</p>
              </div>
            </div>
          </div>

          {/* Heart Rate */}
          <div className="bg-[#FFE6F1] p-4 rounded-lg shadow-md w-full flex flex-col justify-between">
            <img className="w-[96px] h-[96px]" src={HeartBMP} alt="Heart Rate Icon" />
            <div className="w-full rounded-b-md flex flex-col items-start">
              <h4 className="text-md font-semibold mb-0">Heart Rate</h4>
              <p className="text-2xl font-bold text-pink-500 mb-0">78 bpm</p>
              <div className="flex items-center space-x-2">
                <img src={ArrowDown} alt="Arrow Down" />
                <p className="text-sm text-gray-500">Lower than Average</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  {/* Diagnostic List in a Separate Container */}
  <div className=" mt-6 p-4 rounded-lg " style={{ width: '766px', height: '349px' }}>
        <DiagnosticList />
       </div>
       
    </>
  );
};

export default History;


// // History Component
// const History = () => 
//   return (
//     <>
//     <div className="bg-white rounded-lg shadow-lg w-[766px] h-[673px] mx-auto p-6">
//       {/* Blood Pressure Section */}
//       <div className="mb-6">
//         <h2 className="text-lg font-semibold mb-4">Diagnosis History</h2>

//         {/* Blood Pressure Chart */}
//         <div className="bg-white p-0 rounded-lg mb-4"> {/* Remove padding to blend with the parent */}
//           <BloodPressureChart />
//         </div>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//         {/* Respiratory Rate */}
//         <div className="bg-[#E0F3FA] p-4 rounded-lg shadow-md w-[228px] h-[224px] flex flex-col justify-between">
//           <img className="w-[96px] h-[96px]" src={respiratoryrate} alt="Respiratory Rate Icon" />
//           <div className="w-full rounded-b-md flex flex-col items-start">
//             <h4 className="text-md font-semibold mb-0">Respiratory Rate</h4>
//             <p className="text-2xl font-bold text-blue-500 mb-0">20 bpm</p>
//             <div className="flex items-center space-x-2">
//               <p className="text-sm text-gray-500">Normal</p>
//             </div>
//           </div>
//         </div>

//         {/* Temperature */}
//         <div className="bg-[#FFE6E9] p-4 rounded-lg shadow-md w-[228px] h-[224px] flex flex-col justify-between">
//           <img className="w-[96px] h-[96px]" src={temperature} alt="Temperature Icon" />
//           <div className="w-full rounded-b-md flex flex-col items-start">
//             <h4 className="text-md font-semibold mb-0">Temperature</h4>
//             <p className="text-2xl font-bold text-red-500 mb-0">98.6°F</p>
//             <div className="flex items-center space-x-2">
//               <p className="text-sm text-gray-500">Normal</p>
//             </div>
//           </div>
//         </div>

//         {/* Heart Rate */}
//         <div className="bg-[#FFE6F1] p-4 rounded-lg shadow-md w-[228px] h-[224px] flex flex-col justify-between">
//           <img className="w-[96px] h-[96px]" src={HeartBMP} alt="Heart Rate Icon" />
//           <div className="w-full rounded-b-md flex flex-col items-start">
//             <h4 className="text-md font-semibold mb-0">Heart Rate</h4>
//             <p className="text-2xl font-bold text-pink-500 mb-0">78 bpm</p>
//             <div className="flex items-center space-x-2">
//               <img src={ArrowDown} alt="Arrow Down" />
//               <p className="text-sm text-gray-500">Lower than Average</p>
//             </div>
//           </div>
//         </div>
//       </div>
      
//     </div>
//     <div className="overflow-x-auto overflow-y-auto bg-white rounded-lg shadow" style={{ width: '766px', height: '349px' }}>
//         <DiagnosticList />
//       </div>
//     </>
//   );
// };

// export default History;





// import React from 'react';
// import HeartBMP from '../../assets/images/HeartBPM.svg'
// import temperature  from '../../assets/images/temperature.svg'
// import respiratoryrate  from '../../assets/images/respiratoryrate.svg'

// const History = () => {
//   return (
//     <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-[766px] h-[673px] mx-auto">
//       {/* Blood Pressure Section */}
//       <div className="bg-white p-6 rounded-lg shadow-md mb-6">
//         <h2 className="text-lg font-semibold mb-4">Diagnosis History</h2>
//         <div className="flex justify-between items-center mb-4">
//           <h3 className="text-xl font-semibold">Blood Pressure</h3>
//           <div className="text-sm text-gray-500">Last 6 months</div>
//         </div>

//         {/* Chart Placeholder */}
//         <div className="bg-purple-50 p-6 rounded-lg mb-4">
//           <div className="flex justify-between">
//             <div>
//               <h4 className="text-sm text-gray-600">Systolic</h4>
//               <p className="text-2xl font-bold text-purple-500">160</p>
//               <p className="text-sm text-gray-500">Higher than Average</p>
//             </div>
//             <div>
//               <h4 className="text-sm text-gray-600">Diastolic</h4>
//               <p className="text-2xl font-bold text-purple-500">78</p>
//               <p className="text-sm text-gray-500">Lower than Average</p>
//             </div>
//           </div>
//           {/* Graph would be here */}
//           <div className="mt-4 h-32 bg-gray-200 rounded-lg">
//             {/* Chart goes here */}
//           </div>
//         </div>
//       </div>

//       {/* Stats Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//         {/* Respiratory Rate */}
//         <div className="bg-blue-50 p-4 rounded-lg shadow-md">
//           <div className="flex items-center mb-2">
//             <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
//                 <img className='w-6 h-6 text-blue-500' src="{respiratoryrate}" alt="heart" />
//               {/* Icon */}
//               {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10a4 4 0 00-1 7.92V21a1 1 0 001 1h16a1 1 0 001-1v-3.08A4 4 0 0021 10H3z" />
//               </svg> */}
//             </div>
//             <h4 className="ml-2 text-md font-semibold">Respiratory Rate</h4>
//           </div>
//           <p className="text-2xl font-bold text-blue-500">20 bpm</p>
//           <p className="text-sm text-gray-500">Normal</p>
//         </div>

//         {/* Temperature */}
//         <div className="bg-red-50 p-4 rounded-lg shadow-md">
//           <div className="flex items-center mb-2">
//             <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
//                 <img className='className="w-6 h-6 text-red-500' src="temperature" alt="tem" />
//               {/* Icon */}
//               {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9a3 3 0 016 0v7a3 3 0 01-6 0V9z" />
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 9V5a2 2 0 114 0v4m1 7a1 1 0 00-2 0" />
//               </svg> */}
//             </div>
//             <h4 className="ml-2 text-md font-semibold">Temperature</h4>
//           </div>
//           <p className="text-2xl font-bold text-red-500">98.6°F</p>
//           <p className="text-sm text-gray-500">Normal</p>
//         </div>

//         {/* Heart Rate */}
//         <div className="bg-pink-50 p-4 rounded-lg shadow-md">
//           <div className="flex items-center mb-2">
//             <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
//                 <img className='w-6 h-6 text-pink-500' src="{HeartBPM}" alt="heart" />
//               {/* Icon */}
//               {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 13l-7 7-7-7" />
//               </svg> */}
//             </div>
//             <h4 className="ml-2 text-md font-semibold">Heart Rate</h4>
//           </div>
//           <p className="text-2xl font-bold text-pink-500">78 bpm</p>
//           <p className="text-sm text-gray-500">Lower than Average</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default History;
