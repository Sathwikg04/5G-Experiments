import React from 'react'
import CodeEditor from '../Components/CodeEditor';
import { Link } from 'react-router-dom';

const Exp4 = () => {
  const codeSnippet = `
import numpy as np
import matplotlib.pyplot as plt

def beamforming_simulation(snr_db=10, num_antennas=64, num_users=8, plot_type="Users"):
    snr = 10**(snr_db / 10)
    if plot_type == "Users":
        users = np.arange(1, num_users + 1)
        analog_perf = snr / np.sqrt(users)
        digital_perf = snr / (users + 1)
        hybrid_perf = snr / (np.sqrt(users) + 1)
        plt.plot(users, analog_perf, '-o', label="Analog")
        plt.plot(users, digital_perf, '-x', label="Digital")
        plt.plot(users, hybrid_perf, '-s', label="Hybrid")
        plt.xlabel("Number of Users")
    elif plot_type == "Antennas":
        antennas = np.arange(1, num_antennas + 1)
        analog_perf = snr * antennas / np.sqrt(num_users)
        digital_perf = snr * antennas / (num_users + 1)
        hybrid_perf = snr * antennas / (np.sqrt(num_users) + 1)
        plt.plot(antennas, analog_perf, '-o', label="Analog")
        plt.plot(antennas, digital_perf, '-x', label="Digital")
        plt.plot(antennas, hybrid_perf, '-s', label="Hybrid")
        plt.xlabel("Number of Antennas")
    
    plt.ylabel("Performance")
    plt.legend()
    plt.grid(True)
    plt.title(f"Beamforming Performance vs. {plot_type}")
    plt.show()

# Example usage:
beamforming_simulation(snr_db=10, num_antennas=64, num_users=8, plot_type="Users")
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
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Beamforming Algorithm Simulation</h1>

        <p className="text-lg text-gray-700 mb-6">
          Simulates the efficiency of beamforming techniques in enhancing signal quality and coverage by directing energy toward specific users or regions.
        </p>
      </div>
      <CodeEditor codeSnippet={codeSnippet} />
    </div>
  );
}

export default Exp4
