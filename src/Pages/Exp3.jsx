import React from 'react'
import CodeEditor from '../Components/CodeEditor';
import { Link } from 'react-router-dom';

const Exp3 = () => {
  const codeSnippet = `
import numpy as np
import matplotlib.pyplot as plt

def mimo_capacity_simulation(snr_db=10, max_antennas=64, max_users=8, plot_type="Antennas"):
    snr = 10**(snr_db / 10)  # Convert SNR from dB to linear scale
    if plot_type == "Antennas":
        antennas = np.arange(1, max_antennas + 1)
        capacities = np.minimum(antennas, max_users) * np.log2(1 + antennas / np.minimum(antennas, max_users) * snr)
        plt.plot(antennas, capacities, '-o')
        plt.xlabel("Number of Antennas")
        plt.ylabel("Capacity (bps/Hz)")
        plt.title("Capacity vs. Number of Antennas")
    elif plot_type == "Users":
        users = np.arange(1, max_users + 1)
        capacities = np.minimum(max_antennas, users) * np.log2(1 + max_antennas / np.minimum(max_antennas, users) * snr)
        plt.plot(users, capacities, '-o')
        plt.xlabel("Number of Users")
        plt.ylabel("Capacity (bps/Hz)")
        plt.title("Capacity vs. Number of Users")
    
    plt.grid(True)
    plt.show()

# Example usage:
mimo_capacity_simulation(snr_db=10, max_antennas=64, max_users=8, plot_type="Antennas")

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
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Massive MIMO Capacity Simulation</h1>

        <p className="text-lg text-gray-700 mb-6">
          Evaluates the capacity improvement offered by massive MIMO systems under varying user loads and antenna configurations, demonstrating spatial multiplexing gains.
        </p>
      </div>
      <CodeEditor codeSnippet={codeSnippet} />
    </div>
  );
}

export default Exp3
