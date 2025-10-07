

const UserLogin = () => {
  return (
    <div className='p-7'>
      <form className='text-black'>
        <h3 className='text-xl mb-2'>What's your email</h3>
        <input 
            required 
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base' 
            type="email"
            placeholder='email@example.com' 
        />
        
        
        <h3 className='text-xl mb-2' >Enter password</h3>
        <input 
        className='bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base' 
        required type="password" 
        placeholder='password' 
        />
        
     
        <button 
        className=' mb-7 rounded px-4 py-2 w-full text-lg text-white bg-black' 
        >
        Login
        </button>
        
      </form>
      
    </div>
  )
}

export default UserLogin
