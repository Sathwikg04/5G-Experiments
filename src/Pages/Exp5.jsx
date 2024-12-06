import React from 'react'
import CodeEditor from '../Components/CodeEditor';
import { Link } from 'react-router-dom';

const Exp5 = () => {
    const codeSnippet = `import numpy as np
import matplotlib.pyplot as plt

def carrier_aggregation_simulation(bandwidth_per_carrier=20, num_carriers=3, spectral_efficiency=4, metric_type="Throughput"):
    bandwidth_per_carrier_hz = bandwidth_per_carrier * 1e6
    efficiency_factor = 0.9
    
    # Without Carrier Aggregation
    throughput_no_ca = bandwidth_per_carrier_hz * spectral_efficiency / 1e6
    efficiency_no_ca = throughput_no_ca / (bandwidth_per_carrier_hz / 1e6)
    
    # With Carrier Aggregation
    throughput_with_ca = sum(bandwidth_per_carrier_hz * spectral_efficiency * (efficiency_factor ** (i - 1)) for i in range(1, num_carriers + 1)) / 1e6
    efficiency_with_ca = throughput_with_ca / (bandwidth_per_carrier_hz * num_carriers / 1e6)
    
    if metric_type == "Throughput":
        values = [throughput_no_ca, throughput_with_ca]
        ylabel = "Throughput (Mbps)"
    elif metric_type == "Bandwidth Efficiency":
        values = [efficiency_no_ca, efficiency_with_ca]
        ylabel = "Bandwidth Efficiency (bps/Hz)"
    else:
        raise ValueError("Unknown metric type")
    
    plt.bar(["No CA", "With CA"], values)
    plt.ylabel(ylabel)
    plt.title(f"{metric_type} with and without Carrier Aggregation")
    plt.show()

# Example usage:
carrier_aggregation_simulation(bandwidth_per_carrier=20, num_carriers=3, spectral_efficiency=4, metric_type="Throughput")

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
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Carrier Aggregation Simulation</h1>

                <p className="text-lg text-gray-700 mb-6">
                    Analyzes the performance boost from combining multiple frequency bands, showcasing enhanced data rates and spectrum efficiency in multi-carrier networks.
                </p>
            </div>
            <CodeEditor codeSnippet={codeSnippet} />
        </div>
    );
}

export default Exp5
