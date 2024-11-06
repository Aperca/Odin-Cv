function PracticalExp({ company, setCompany, position, setPosition, responsibilities, setResponsibilities, startDate, setStartDate, endDate, setEndDate, isEditing }) {
    return (
      <div className="border-b mb-44">
        <h3 className="text-center text-lg  mb-4">Professional Experience</h3>

        <label className='block mb-2' >Company Name:</label>
        <input className="border rounded p-2 mb-3 input-style border rounded p-2 mb-3 bg-gray-100" type="text" value={company} onChange={(e) => setCompany(e.target.value)} disabled={!isEditing} />
        <label className='block mb-2' >Position Title</label>
        <input className="border rounded p-2 mb-3 bg-gray-100 input-style" type="text" value={position} onChange={(e) => setPosition(e.target.value)} disabled={!isEditing} />
        <label className='block mb-2' >Main Responsibilities</label>
        <textarea className="border rounded p-2 mb-3 bg-gray-100 input-style"
          value={responsibilities} onChange={(e) => setResponsibilities(e.target.value)} disabled={!isEditing}
        />
        <label className='block mb-2' >Start Date</label>
        <input className="border rounded p-2 mb-3 bg-gray-100 input-style" type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} disabled={!isEditing} />
        <label className='block mb-2' >End Date</label>
        <input className="border rounded p-2 mb-3 bg-gray-100 input-style" type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} disabled={!isEditing} />
      </div>
    )
  }
export default PracticalExp  