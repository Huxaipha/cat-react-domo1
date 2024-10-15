import React from 'react';
import Layer2 from '../../assets/images/Layer2.png';
import Birthicon from '../../assets/images/BirthIcon.svg';
import Femaleicon from '../../assets/images/FemaleIcon.svg';
import Phoneicon from '../../assets/images/PhoneIcon.svg';
import Insuranceicon from '../../assets/images/InsuranceIcon.svg';
import Labresult from '../result/Labresult';

const Pcard = () => {
  return (
    <>
      <div className="bg-white rounded-lg shadow-lg p-6" style={{ width: '367px', height: '740px' }}>
        {/* Profile Image */}
        <div className="flex justify-center mb-4">
          <img
            src={Layer2} // Use actual patient image here
            alt="Patient Profile"
            className="rounded-full w-28 h-28 object-cover"
          />
        </div>

        {/* Patient Info */}
        <div className="text-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Jessica Taylor</h2>
        </div>

        {/* Details */}
        <div className="text-sm text-gray-600 space-y-3">
          <div className="flex items-start space-x-2"> {/* Change to items-start to align items at the start */}
            <img src={Birthicon} alt="icon" />
            <div>
              <p>Date of Birth:</p>
              <span className="font-medium">August 23, 1996</span> {/* Positioned below the p tag */}
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <img src={Femaleicon} alt="icon" />
            <div>
              <p>Gender:</p>
              <span className="font-medium">Female</span>
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <img src={Phoneicon} alt="icon" />
            <div>
              <p>Contact Info:</p>
              <span className="font-medium">(415) 555-1234</span>
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <img src={Phoneicon} alt="icon" />
            <div>
              <p>Emergency Contacts:</p>
              <span className="font-medium">(415) 555-5678</span>
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <img src={Insuranceicon} alt="icon" />
            <div>
              <p>Insurance Provider:</p>
              <span className="font-medium">Sunrise Health Assurance</span>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="mt-6">
          <button className="w-full py-2 text-white bg-green-500 rounded-lg hover:bg-green-600">
            Show All Information
          </button>
        </div>
      </div>
      <div className="mt-4"> {/* Adjust margin-top to control spacing */}
        <Labresult />
      </div>
    </>
  );
};

export default Pcard;
