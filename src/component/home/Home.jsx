import React, { useState, useEffect } from 'react';
import patientsData from '../json/PatientsData.json'; // Ensure the correct path
import searchIcon from '../../assets/images/search.svg'; // Ensure the icon path is correct
import { Image, Transformation } from 'cloudinary-react'; // Cloudinary for image handling
import moreicon from '../../assets/images/moreicon.svg'; // Ensure the icon path is correct
import History from '../history/History';
import Pcard from '../pcard/Pcard';

const Home = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    // Load patient data from JSON
    setPatients(patientsData);
  }, []);

  return (
    <>
      <div className="flex w-[1600px] h-[1195px] pt-16 rounded-lg shadow-lg bg-[#F6F7F8]">
        {/* Left Side: Patient List */}
        <div className="w-[367px] h-[1054px] rounded-lg shadow-lg bg-white p-4">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Patients</h2>
            <img className="h-6 w-6" src={searchIcon} alt="search" />
          </div>

          {/* Patient List */}
          <div className="overflow-y-auto h-[900px]">
            {patients.map((patient, index) => (
              <div
                key={index}
                className={`flex justify-between items-center p-4 rounded-lg ${patient.highlighted ? 'bg-green-100' : 'hover:bg-gray-100'} mb-2`}
              >
                <div className="flex items-center space-x-4">
                  {/* Cloudinary Image Rendering */}
                  <Image
                    cloudName="dfo4alc3w"
                    publicId={patient.image}  // Dynamic patient image from JSON
                    className="rounded-full w-10 h-10"
                  >
                    <Transformation crop="scale" width="200" />
                  </Image>
                  <div>
                    <p className="font-medium text-gray-800">{patient.name}</p>
                    <p className="text-sm text-gray-500">
                      {patient.gender}, {patient.age}
                    </p>
                  </div>
                </div>
                {/* Correctly referenced more icon */}
                <img className='text-gray-500 h-6 w-6' src={moreicon} alt="more" />
              </div>
            ))}
          </div>
        </div>

        {/* Centered History and Right Aligned Pcard */}
        <div className="flex flex-1 justify-center items-start space-x-4 p-4">
          <div className="flex-grow"> {/* Centered History */}
            <History />
          </div>
          <div className="flex-shrink-0"> {/* Right Aligned Pcard */}
            <Pcard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;


// {/* Middle: History component */}
// <div className="flex-grow mx-4">
// <History />
// </div>

// {/* Right Side: Pcard */}
// <div className="w-[367px] h-[740px]  p-6  fixed right-4 top-16">
// <Pcard />
// </div>





{/* Center: Placeholder for center content */}
      {/* <div className="flex-grow bg-gray-100 p-4">
        <h2 className="text-lg font-bold">Center Content</h2>
      </div> */}


{/* Right Side: Placeholder for right side content */}
      {/* <div className="w-[367px] bg-white p-4">
        <h2 className="text-lg font-bold">Right Side Content</h2>
      </div> */}
// import React from 'react';
// import { FiMoreVertical } from 'react-icons/fi'; // Icon for the more button
// import { FiSearch } from 'react-icons/fi'; // Icon for search

// const patients = [
//   { name: 'Emily Williams', gender: 'Female', age: 18 },
//   { name: 'Ryan Johnson', gender: 'Male', age: 45 },
//   { name: 'Brandon Mitchell', gender: 'Male', age: 36 },
//   { name: 'Jessica Taylor', gender: 'Female', age: 28, highlighted: true },
//   { name: 'Samantha Johnson', gender: 'Female', age: 56 },
//   { name: 'Ashley Martinez', gender: 'Female', age: 54 },
//   { name: 'Olivia Brown', gender: 'Female', age: 32 },
//   { name: 'Tyler Davis', gender: 'Male', age: 26 },
//   { name: 'Kevin Anderson', gender: 'Male', age: 30 },
//   { name: 'Dylan Thompson', gender: 'Male', age: 26 },
//   { name: 'Nathan Evans', gender: 'Male', age: 58 },
//   { name: 'Mike Nolan', gender: 'Male', age: 31 },
// ];

// const Home = () => {
//   return (
//     <div className="h-full p-4">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-lg font-bold">Patients</h2>
//         <FiSearch className="text-gray-500 h-6 w-6" />
//       </div>

//       {/* Patient List */}
//       <div className="overflow-y-auto h-full">
//         {patients.map((patient, index) => (
//           <div
//             key={index}
//             className={`flex justify-between items-center p-4 rounded-lg ${
//               patient.highlighted ? 'bg-green-100' : 'hover:bg-gray-100'
//             } mb-2`}
//           >
//             <div className="flex items-center space-x-4">
//               <img
//                 src={`https://via.placeholder.com/40`} // Placeholder for patient avatar
//                 alt={patient.name}
//                 className="rounded-full"
//               />
//               <div>
//                 <p className="font-medium text-gray-800">{patient.name}</p>
//                 <p className="text-sm text-gray-500">
//                   {patient.gender}, {patient.age}
//                 </p>
//               </div>
//             </div>
//             <FiMoreVertical className="text-gray-500 h-6 w-6" />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;
