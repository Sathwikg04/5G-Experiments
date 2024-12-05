import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='min-h-screen p-8'>
      <header className="text-center mb-8 py-24">
        <p className="text-6xl font-bold text-teal-600">EC402 Assignment</p>
        <div className="mt-4">
          <div className="text-xl font-medium text-gray-700">Gujjarlapudi Sathwik</div>
        </div>
      </header>
      <h1 className="text-4xl font-semibold mb-6">Part-A</h1>

      <div className="grid grid-cols-3 gap-4 p-4">
        <Link to="/Exp1" className="px-4 py-2 text-white bg-teal-600 rounded hover:bg-teal-700 flex items-center justify-center">
          Exp1
        </Link>
        <Link to="/Exp2" className="px-4 py-2 text-white bg-teal-600 rounded hover:bg-teal-700 flex items-center justify-center">
          Exp2
        </Link>
        <Link to="/Exp3" className="px-4 py-2 text-white bg-teal-600 rounded hover:bg-teal-700 flex items-center justify-center">
          Exp3
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-4 p-4">
        <Link to="/Exp4" className="px-4 py-2 text-white bg-teal-600 rounded hover:bg-teal-700 flex items-center justify-center">
          Exp4
        </Link>
        <Link to="/Exp5" className="px-4 py-2 text-white bg-teal-600 rounded hover:bg-teal-700 flex items-center justify-center">
          Exp5
        </Link>
      </div>
    </div>
  )
}

export default Home