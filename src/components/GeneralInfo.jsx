function GeneralInfo({ name, setName, email, setEmail, phone, setPhone, isEditing }) {
    return (
      < div className="border-b mb-4">
        <h3 className="text-center font-bold text-lg mb-4">Personal Information</h3>
        <label className='block mb-2'>Full Name</label>
        <input className='input-style border rounded p-2 mb-3 bg-gray-100'
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={!isEditing}
        />
        <label className='block mb-2'>Email</label>
        <input 
          type="email" className='input-style border rounded p-2 mb-3 bg-gray-100'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={!isEditing}
        />
        <label className="block mb-2">Phone Number</label>
        <input
          type="tel" className='input-style border rounded p-2 mb-3 bg-gray-100 '
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          disabled={!isEditing}
        />
      </div>
    )
  }

  export default GeneralInfo