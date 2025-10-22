import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CaptainSignup = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    const [vehicleColor, setVehicleColor] = useState('')
    const [vehiclePlate, setVehiclePlate] = useState('')
    const [vehicleCapacity, setVehicleCapacity] = useState('')
    const [vehicleType, setVehicleType] = useState('')

    const { captain, setCaptain } = React.useContext(CaptainDataContext)

    const submitHandler = async (e) => {
        e.preventDefault()

        const captainData = {
            fullname: {
                firstName: firstName,
                lastName: lastName
            },
            email: email,
            password: password,
            phoneNumber: phoneNumber,
            vehicle: {
                color: vehicleColor,
                plate: vehiclePlate,
                capacity: vehicleCapacity,
                vehicleType: vehicleType
            }
        }

        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)

            if (response.status === 201) {
                const data = response.data
                setCaptain(data.captain)
                localStorage.setItem('token', data.token)
                navigate('/CaptainHome')
            }

            // Clear form
            setEmail('')
            setPassword('')
            setFirstName('')
            setLastName('')
            setPhoneNumber('')
            setVehicleColor('')
            setVehiclePlate('')
            setVehicleCapacity('')
            setVehicleType('')
        } catch (error) {
            console.error('Error signing up captain:', error)
            alert(error.response?.data?.message || 'Failed to create captain account')
        }
    }

    return (
        <div className='h-screen flex flex-col justify-between'>
            <div className='p-5 flex-1 overflow-hidden'>
                <div>
                    <Link to="/">
                        <img className='w-16 mb-1' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="Logo" />
                    </Link>
                    <form onSubmit={submitHandler}>
                        <h3 className='text-lg font-semibold mb-2'>Create Your Captain Account</h3>

                        <h3 className='text-sm font-medium mb-1'>What's your name</h3>
                        <div className='flex gap-3 mb-2'>
                            <input
                                required
                                className='bg-[#eeeeee] w-1/2 rounded px-3 py-1.5 border text-base placeholder:text-sm'
                                type="text"
                                placeholder='First name'
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            <input
                                required
                                className='bg-[#eeeeee] w-1/2 rounded px-3 py-1.5 border text-base placeholder:text-sm'
                                type="text"
                                placeholder='Last name'
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>

                        <h3 className='text-sm font-medium mb-1'>What's your email</h3>
                        <input
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='bg-[#eeeeee] mb-2 rounded px-3 py-1.5 border w-full text-base placeholder:text-sm'
                            type="email"
                            placeholder='email@example.com'
                        />

                        <h3 className='text-sm font-medium mb-1'>Enter Password</h3>
                        <input
                            className='bg-[#eeeeee] mb-2 rounded px-3 py-1.5 border w-full text-base placeholder:text-sm'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            type="password"
                            placeholder='password'
                        />

                        <h3 className='text-sm font-medium mb-1'>Phone Number</h3>
                        <input
                            className='bg-[#eeeeee] mb-2 rounded px-3 py-1.5 border w-full text-base placeholder:text-sm'
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required
                            type="tel"
                            pattern="[0-9]{10}"
                            placeholder='1234567890'
                        />

                        <div className='border-t border-gray-300 my-2'></div>

                        <h3 className='text-sm font-semibold mb-1'>Vehicle Information</h3>
                        
                        <div className='flex gap-3 mb-2'>
                            <input
                                required
                                className='bg-[#eeeeee] w-1/2 rounded px-3 py-1.5 border text-base placeholder:text-sm'
                                type="text"
                                placeholder='Vehicle Color'
                                value={vehicleColor}
                                onChange={(e) => setVehicleColor(e.target.value)}
                            />
                            <input
                                required
                                className='bg-[#eeeeee] w-1/2 rounded px-3 py-1.5 border text-base placeholder:text-sm'
                                type="text"
                                placeholder='Vehicle Plate'
                                value={vehiclePlate}
                                onChange={(e) => setVehiclePlate(e.target.value)}
                            />
                        </div>

                        <div className='flex gap-3 mb-2'>
                            <input
                                required
                                className='bg-[#eeeeee] w-1/2 rounded px-3 py-1.5 border text-base placeholder:text-sm'
                                type="number"
                                min="1"
                                max="10"
                                placeholder='Vehicle Capacity'
                                value={vehicleCapacity}
                                onChange={(e) => setVehicleCapacity(e.target.value)}
                            />
                            <select
                                required
                                className='bg-[#eeeeee] w-1/2 rounded px-3 py-1.5 border text-base text-gray-700'
                                value={vehicleType}
                                onChange={(e) => setVehicleType(e.target.value)}
                            >
                                <option value="" disabled>Select Vehicle Type</option>
                                <option value="car">Car</option>
                                <option value="auto">Auto</option>
                                <option value="motorcycle">Motorcycle</option>
                            </select>
                        </div>

                        <button
                            type='submit'
                            className='bg-[#111] text-white font-semibold mb-1 rounded px-4 py-2 w-full text-base hover:bg-[#333] transition-colors'
                        >Create Captain account</button>

                    </form>
                    <p className='text-center text-sm'>Already have an account? <Link to='/CaptainLogin' className='text-blue-600'>Login here</Link></p>
                </div>
            </div>
            <div className='p-5 pt-2'>
                <p className='text-[10px] leading-tight text-gray-600'>
                    This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service apply</span>.
                </p>
            </div>
        </div>
    )
}

export default CaptainSignup;
