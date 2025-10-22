
import React, {useContext, useEffect, useState} from 'react'
import { UserDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const UserProtectWrapper = ({ children }) => {
  const token = localStorage.getItem('token')
  const navigate = useNavigate()
  const {user, setUser} = useContext(UserDataContext)
  const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
      if (!token) {
        navigate('/UserLogin')
      }

      axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
      })

      .then((res)=>{
        if (res.status === 200){
            setUser(res.data.user)
            setIsLoading(false)
        }
      })

      .catch((err)=>{
        localStorage.removeItem('token')
        setIsLoading(false)
        navigate('/UserLogin')
      })
    }, [token, navigate, setUser])


    if (isLoading){
        return (
            <div>Loading...</div>
        )
    }

  return (<>{children}</>)
}

export default UserProtectWrapper;