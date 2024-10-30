import {useState} from 'react';

export default function App(){
  return(
    <>
      <div className='flex items-center justify-center'>

            <div id=''>
              <h2 className='text-4xl font-bold text-center '>CV Builder</h2>
              <section>
                <h2 className=''>General Information</h2>
                <form action="">
                  <label htmlFor="fname">First Name</label>
                  <input className='' type="text" placeholder='first name' />
                  <label htmlFor="lname">Last Name</label>
                  <input className='' type="text" placeholder='last name' />
                  <label htmlFor="email">Email</label>
                  <input className='' type="email"  />
                  <label htmlFor="pnum">Phone Number</label>
                  <input className='' type="number" />
                  <input type="submit" value="Submit"/>
                  <input type="button" value="Edit"/>
                </form>
              </section>

              <section>
                <form action="">
                  <h2>Educational experience</h2>
                </form>
              </section>

              <section>
                <form action="">
                  <h2>Practical experience</h2>
                </form>
              </section>
            </div>

            <div id='display'>

            </div>
      </div>
        
    </>
  )
}