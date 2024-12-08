import React from 'react'
import CodeEditor from '../Components/CodeEditor';
import { Link } from 'react-router-dom';

const Exp4 = () => {
  return (
    <div className="min-h-screen p-8">
      <div className="mb-6">
        <Link
          to="/"
          className="w-32 px-4 py-2 text-lg font-medium text-white bg-teal-600 rounded-lg hover:bg-teal-700 flex items-center justify-center transition-all shadow-md"
        >
          Back
        </Link>
      </div>
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Beamforming Algorithm Simulation</h1>

        <p className="text-lg text-gray-700 mb-6">
          Simulates the efficiency of beamforming techniques in enhancing signal quality and coverage by directing energy toward specific users or regions.
        </p>
      </div>
      <CodeEditor />
    </div>
  );
}

export default Exp4
