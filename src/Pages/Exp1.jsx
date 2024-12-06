import React from 'react'
import CodeEditor from '../Components/CodeEditor';
import { Link } from 'react-router-dom';

const Exp1 = () => {
    const codeSnippet = `import numpy as np
import matplotlib.pyplot as plt
    
def network_slicing_performance(slice_type="eMBB", metric_type="Throughput", traffic_start=10, traffic_end=100):
    traffic_load = np.arange(traffic_start, traffic_end + 1, 10)
        
    if slice_type == "eMBB":
        base, factor = [1000, 50, 100], [0.5, 150, 20]
    elif slice_type == "URLLC":
        base, factor = [200, 10, 99], [0.2, 30, 1]
    elif slice_type == "mMTC":
        base, factor = [50, 100, 95], [0.1, 200, 5]
    else:
        raise ValueError("Unknown slice type")
        
    if metric_type == "Throughput":
        performance = base[0] * (1 - (traffic_load / 100) * factor[0])
        ylabel = "Throughput (Mbps)"
    elif metric_type == "Latency":
        performance = base[1] + (traffic_load / 100) * factor[1]
        ylabel = "Latency (ms)"
    elif metric_type == "Connection Success Rate":
        performance = base[2] - (traffic_load / 100) * factor[2]
        ylabel = "Connection Success Rate (%)"
    else:
        raise ValueError("Unknown metric type")
        
    plt.plot(traffic_load, performance, '-o')
    plt.title(f"{slice_type} Performance under Traffic Load")
    plt.xlabel("Traffic Load (%)")
    plt.ylabel(ylabel)
    plt.grid(True)
    plt.show()
    
# Example usage:
network_slicing_performance(slice_type="eMBB", metric_type="Throughput")
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
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Network Slicing Performance</h1>

                <p className="text-lg text-gray-700 mb-6">
                    Simulates the behavior of network slices under varying traffic loads, focusing on performance metrics like throughput, latency, and reliability.
                </p>
            </div>
            <CodeEditor codeSnippet={codeSnippet} />
        </div>
    );
}

export default Exp1
