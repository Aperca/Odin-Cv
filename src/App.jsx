import { useState } from 'react';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import PracticalExp from './components/PracticalExp';
import html2pdf from 'html2pdf.js';
import { MailIcon, LocationMarkerIcon, PhoneIcon } from '@heroicons/react/solid';

export default function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');

  const [isEditing, setIsEditing] = useState(true);

  const [showGeneral, setShowGeneral] = useState(true);
  const [showEducation, setShowEducation] = useState(false);
  const [showExperience, setShowExperience] = useState(false);
  // State for Education and Experience sections
  const [school, setSchool] = useState("");
  const [studyTitle, setStudyTitle] = useState("");
  const [schoolStartDate, setSchoolStartDate] = useState("");
  const [schoolEndDate, setSchoolEndDate] = useState("");

  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleToggleSection = (section) => {
    if (section === 'general') setShowGeneral(!showGeneral);
    if (section === 'education') setShowEducation(!showEducation);
    if (section === 'experience') setShowExperience(!showExperience);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleDownload = () => {
    const element = document.getElementById('preview-section');
    html2pdf().from(element).save('MyCV.pdf');
  };


  return (
    <div className="flex space-x-4 p-4">
      {/* Form Section */}
      <div className="w-1/2 overflow-y-auto bg-gray-100 max-h-screen pr-4 p-6 rounded">
        <h2 className="font-bold text-2xl text-center mb-4">CV Builder</h2>
      
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* General Information Section */}
          <div className="mb-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => handleToggleSection('general')}
            >
              <h3 className="section-title">Personal Information</h3>
              <span>{showGeneral ? '▲' : '▼'}</span>
            </div>
            {showGeneral && (
              <GeneralInfo
                name={name} setName={setName}
                email={email} setEmail={setEmail}
                phone={phone} setPhone={setPhone}
                location={location} setLocation={setLocation}
                isEditing={isEditing}
              />
            )}
          </div>

          {/* Education Section */}
          <div className="mb-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => handleToggleSection('education')}
            >
              <h3 className="section-title">Education</h3>
              <span>{showEducation ? '▲' : '▼'}</span>
            </div>
            {showEducation && (
              <Education
                school={school} setSchool={setSchool}
                studyTitle={studyTitle} setStudyTitle={setStudyTitle}
                schoolStartDate={schoolStartDate} setSchoolStartDate={setSchoolStartDate}
                schoolEndDate={schoolEndDate} setSchoolEndDate={setSchoolEndDate}
                isEditing={isEditing}
              />
            )}
          </div>
              
          {/* Professional Experience Section */}
          <div className="mb-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => handleToggleSection('experience')}
            >
              <h3 className="section-title">Professional Experience</h3>
              <span>{showExperience ? '▲' : '▼'}</span>
            </div>
            {showExperience && (
              <PracticalExp
                company={company} setCompany={setCompany}
                position={position} setPosition={setPosition}
                responsibilities={responsibilities} setResponsibilities={setResponsibilities}
                startDate={startDate} setStartDate={setStartDate}
                endDate={endDate} setEndDate={setEndDate}
                isEditing={isEditing}
              />
            )}
          </div>
          
          {/* Form Buttons */}
          <div className="mt-4">
            {isEditing ? (
              <button type="submit" className="bg-blue-500 hover:shadow-sm text-white py-2 px-3 rounded">Submit</button>
            ) : (
              <button type="button" onClick={handleEdit} className="bg-yellow-500 text-white py-2 px-4 rounded">Edit</button>
            )}
          </div>
        </form>
      </div>

      {/* Preview Section */}
      <div className="w-1/2 border-l p-6 pl-10 bg-gray-50 flex flex-col">
    
          <div id="preview-section" className="bg-gray-100 p-6 rounded-lg flex-grow">
          <h3 className="text-center font-bold text-3xl mb-6 text-blue-800">{name}</h3>
          <div className="flex flex-col md:flex-row justify-center gap-6 text-lg text-gray-700 mb-6">
            <p className="flex items-center gap-2"><MailIcon className="w-5 h-5 text-gray-600" /> {email}</p>
            <p className="flex items-center gap-2"><PhoneIcon className="w-5 h-5 text-gray-600" /> {phone}</p>
            <p className="flex items-center gap-2"><LocationMarkerIcon className="w-5 h-5 text-gray-600" /> {location}</p>
          </div>

            <div className="my-6 shadow-lg p-4 rounded-md border">
              <h3 className="text-lg mb-2 text-blue-800 font-semibold">Education</h3>
              <p className="font-medium">{school}</p>
              <p>{studyTitle}</p>
              <p>{`Start Date: ${schoolStartDate} - End Date: ${schoolEndDate}`}</p>
            </div>

            <div className="my-6 shadow-lg p-4 rounded-md border">
              <h4 className="text-lg font-semibold text-blue-800">Professional Experience</h4>
              <p className="font-medium">{company}</p>
              <p>{position}</p>
              <p>{`Start Date: ${startDate} - End Date: ${endDate}`}</p>
              <p>{responsibilities}</p>
            </div>
          </div>
      
        
        {/* Download CV Button */}
          <button
            onClick={handleDownload}
            className="bg-gray-500 text-white py-2 px-4 rounded mt-4 self-end"
          >
            Download CV
          </button>
  
      </div>
    </div>
  );
}
