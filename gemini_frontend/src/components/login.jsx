import { Link } from "react-router-dom"

function Login(){
    return (
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 border-3 border-indigo-500">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Gemini System Login</h2>
        
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
              className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
            />
          </div>

          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition-colors">
            Login
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          Don't have an account? 
          <Link to="/register" className="text-indigo-600 hover:text-indigo-500 font-medium"> Register</Link>
        </div>
      </div>
    )
}

export default Login