
function Education({ school, setSchool, studyTitle, setStudyTitle, studyDate, setStudyDate, schoolStartDate, setSchoolStartDate, schoolEndDate, setSchoolEndDate, isEditing }) {
    return (
      <div className="border-b mb-4">
         <h3 className="text-center text-lg font-bold mb-4">Education</h3>

        <label className='block mb-2'>School name:</label>
        <input required className="input-style border rounded p-2 mb-3 bg-gray-100" type="text" value={school} onChange={(e) => setSchool(e.target.value)} disabled={!isEditing} />
        <label className='block mb-2'>Title of Study</label>
        <input  required className="input-style border rounded p-2 mb-3 bg-gray-100" type="text" value={studyTitle} onChange={(e) => setStudyTitle(e.target.value)} disabled={!isEditing} />
        <label required className='block mb-2' >Start Date</label>
        <input  required className="input-style border rounded p-2 mb-3 bg-gray-100"  type="date" value={schoolStartDate} onChange={(e) => setSchoolStartDate(e.target.value)} disabled={!isEditing} />
        <label className='block mb-2' >End Date</label>
        <input className="input-style border rounded p-2 mb-3 bg-gray-100"  type="date" value={schoolEndDate} onChange={(e) => setSchoolEndDate(e.target.value)} disabled={!isEditing} />
      </div>
    )
  }

  export default Education