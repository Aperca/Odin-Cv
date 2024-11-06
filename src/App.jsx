import { useState } from 'react';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import PracticalExp from './components/PracticalExp';


export default function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const[location, setLocation]= useState('');

  const [isEditing, setIsEditing] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [showGeneral, setShowGeneral] = useState(true);
  const [showEducation, setShowEducation] = useState(false);
  const [showExperience, setShowExperience] = useState(false);

  const handleToggleSection = (section) => {
    if (section === 'general') setShowGeneral(!showGeneral);
    if (section === 'education') setShowEducation(!showEducation);
    if (section === 'experience') setShowExperience(!showExperience);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    setSubmitted(true);
  };

  const handleEdit = () => {
    setIsEditing(true);
    setSubmitted(false);
  };

  const [school, setSchool] = useState("");
  const [studyTitle, setStudyTitle] = useState("");
  const [studyDate, setStudyDate] = useState("");
  const [schoolStartDate, setSchoolStartDate] = useState("");
  const [schoolEndDate, setSchoolEndDate] = useState("");

  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  return (
    
    <div className='flex space-x-4 p-4'>
      <div className='w-1/2 overflow-y-auto max-h-screen pr-4 bg-white p-6 rounded shadow-lg  '>
        <h2 className='font-bold text-2xl text-center mb-4'>CV Builder</h2>
        
        <form onSubmit={handleSubmit} className='space-y-6'>
          {/* General Information Section */}
          <div className='mb-4'>
            <div className='flex justify-between items-center'>
              <h3 className='section-title'>Personal Information</h3>
              <button type='button' onClick={() => handleToggleSection('general')}>
                {showGeneral ?  '▲': '▼'}
              </button>
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
          <div className='mb-4'>
            <div className='flex justify-between items-center'>
              <h3 className='section-title'>Education</h3>
              <button type='button' onClick={() => handleToggleSection('education')}>
                {showEducation ? '▼' : '▲'}
              </button>
            </div>
            {showEducation && (
              <Education 
                school={school} setSchool={setSchool}
                studyTitle={studyTitle} setStudyTitle={setStudyTitle}
                studyDate={studyDate} setStudyDate={setStudyDate}
                schoolStartDate={schoolStartDate} setSchoolStartDate={setSchoolStartDate}
                schoolEndDate={schoolEndDate} setSchoolEndDate={setSchoolEndDate}
                isEditing={isEditing}
              />
            )}
          </div>

          {/* Professional Experience Section */}
          <div className='mb-4'>
            <div className='flex justify-between items-center'>
              <h3 className='section-title'>Professional Experience</h3>
              <button type='button' onClick={() => handleToggleSection('experience')}>
                {showExperience ? '▼' : '▲'}
              </button>
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



         <div className="mt-4">
            {isEditing ? (
              <button type='submit' className='bg-blue-500 hover:shadow-sm text-white py-2 px-3 rounded'>Submit</button>
            ) : (
              <button type='button' onClick={handleEdit} className='bg-yellow-500 text-white py-2 px-4 rounded'>Edit</button>
            )}
          </div>
        </form>
      </div>

      <>
        {submitted && (
          <div className="w-1/2 border-l p-6">
            <h3 className='text-center'>Preview</h3>
            <h3 className='text-center font-bold text-3xl mb-6'>{name}</h3>
            
             <div className=' flex justify-center gap-4 text-lg text-center mb-2 '>
              <p className='text-lg'>{email}</p>
              <p className='text-lg'> {phone}</p>
              <p className='text-lg'>{location}</p>
            </div>

            <div className='my-4'>
              <h3 className='text-xl mb-2 text-center font-bold '>Education</h3>
              <p className='font-medium'> {school}</p>
              <p>{studyTitle}</p>
              <p>{`Start Date: ${schoolStartDate} - End Date: ${schoolEndDate}`}</p>
            </div>
            

            <div>
              <h3 className='text-xl mb-2 text-center font-bold '>Education</h3>
              <p className='font-medium'> {company}</p>
              <p> {position}</p>
              <p>{`Start Date: ${startDate} - End Date: ${endDate}`}</p>
              <p> {responsibilities}</p>
            </div>
          </div>
        )}
      </>
    </div>
  )
}
