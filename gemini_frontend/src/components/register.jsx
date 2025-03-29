import background from '../assets/background.webp'
import { Select } from '@headlessui/react'
import { Link } from "react-router-dom"

function Register(){
    return(
        <div style={{background: `url(${background})`}} className="min-h-screen flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 pt-4 border-3 border-indigo-500">
            <Link to="/"
                className="inline-flex items-start pr-3 py-1.5 rounded-md text-indigo-500 hover:bg-indigo-50">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18">
                    </path>
                </svg>
            </Link>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Register</h2>
        
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
            <input 
              type="text" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input 
              type="password" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
            <input 
              type="password" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Select Role</label>
              <Select className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all">
              <option value="administrator">Administrator</option>
              <option value="astronomer">Astronomer</option>
              <option value="telescope_operator">Telescope Operator</option>
              <option value="science_observer">Science Observer</option>
              <option value="support">Support</option>
            </Select>
          </div>

          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition-colors">
            Register
          </button>
        </form>
        </div>
        </div>
    )
}

export default Register