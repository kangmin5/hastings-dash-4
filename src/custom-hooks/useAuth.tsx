import { useContext } from 'react'
import { AuthContext } from 'app/AuthContext'

export const useAuth = () => useContext(AuthContext)
