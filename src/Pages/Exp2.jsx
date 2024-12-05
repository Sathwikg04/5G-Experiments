import React from 'react'
import CodeEditor from '../Components/CodeEditor';
import { Link } from 'react-router-dom';

const Exp2 = () => {
    const codeSnippet = `
import numpy as np
import matplotlib.pyplot as plt

def mmwave_propagation_simulation(environment="Urban", frequency=28, distance=100, loss_type="Path Loss"):
    frequency_hz = frequency * 1e9  # Convert GHz to Hz
    if loss_type == "Path Loss":
        distances = np.linspace(1, distance, 100)
        if environment == "Urban":
            path_loss = 32.4 + 20 * np.log10(distances) + 20 * np.log10(frequency_hz / 1e9)
        elif environment == "Indoor":
            path_loss = 20 * np.log10(distances) + 20 * np.log10(frequency_hz / 1e9) + 20
        plt.plot(distances, path_loss, '-o')
        plt.xlabel("Distance (m)")
        plt.ylabel("Path Loss (dB)")
        plt.title("Path Loss over Distance")
    
    plt.grid(True)
    plt.show()

# Example usage:
mmwave_propagation_simulation(environment="Urban", frequency=28, distance=100)
    `;

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
                <h1 className="text-3xl font-bold text-gray-800 mb-4">mmWave Propagation Simulation</h1>

                <p className="text-lg text-gray-700 mb-6">
                    Models the propagation characteristics of millimeter-wave signals, considering factors like path loss, blockages, and reflection in different environments.
                </p>
            </div>
            <CodeEditor codeSnippet={codeSnippet} />
        </div>
    );
}

export default Exp2
