import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'
import { User, RefreshCw } from 'lucide-react'

const Login: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(false)
  const [isFlipped, setIsFlipped] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (email: string, password: string) => {
    setIsAnimating(true)
    // Simulate login process
    setTimeout(() => {
      setIsAnimating(false)
      // Set authentication status
      localStorage.setItem('isAuthenticated', 'true')
      navigate('/')
    }, 2000)
  }

  const handleRegister = (email: string, password: string) => {
    setIsAnimating(true)
    // Simulate registration process
    setTimeout(() => {
      setIsAnimating(false)
      setIsFlipped(false) // Flip back to login after successful registration
    }, 2000)
  }

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-animated">
      <div className={`flip-card ${isFlipped ? 'flipped' : ''}`}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className={`bg-white bg-opacity-90 backdrop-blur-md rounded-lg shadow-xl p-8 w-full max-w-md transform transition-all duration-500 ${isAnimating ? 'scale-105' : 'scale-100'}`}>
              <div className="flex justify-center mb-8">
                <User size={48} className="text-indigo-600" />
              </div>
              <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Welcome Back</h1>
              <LoginForm onSubmit={handleSubmit} isLoading={isAnimating} />
              <p className="mt-4 text-center text-sm text-gray-600">
                Don't have an account?{' '}
                <button
                  onClick={handleFlip}
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Register here
                </button>
              </p>
            </div>
          </div>
          <div className="flip-card-back">
            <div className={`bg-white bg-opacity-90 backdrop-blur-md rounded-lg shadow-xl p-8 w-full max-w-md transform transition-all duration-500 ${isAnimating ? 'scale-105' : 'scale-100'}`}>
              <div className="flex justify-center mb-8">
                <User size={48} className="text-indigo-600" />
              </div>
              <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Create Account</h1>
              <RegisterForm onSubmit={handleRegister} isLoading={isAnimating} />
              <p className="mt-4 text-center text-sm text-gray-600">
                Already have an account?{' '}
                <button
                  onClick={handleFlip}
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Login here
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={handleFlip}
        className="absolute top-4 right-4 bg-white bg-opacity-20 backdrop-blur-md rounded-full p-2 text-white hover:bg-opacity-30 transition-all duration-300"
        aria-label="Flip card"
      >
        <RefreshCw size={24} />
      </button>
    </div>
  )
}

export default Login