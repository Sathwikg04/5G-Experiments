export const LANGUAGE_VERSIONS = {
  python: "3.10.0",
  javascript: "18.15.0",
  typescript: "5.0.3",
  java: "15.0.2",
  csharp: "6.12.0",
  php: "8.2.3",
};

export const DEFAULT = {
  javascript: `\nconsole.log("Hello World in javascript");\n`,
  typescript: `\nconsole.log("Hello World in typescript");\n`,
  python: `\nprint("Hello World! in python")\n`,
  java: `\npublic class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello World in java");\n\t}\n}\n`,
  csharp:
    'using System;\n\nnamespace HelloWorld\n{\n\tclass Hello { \n\t\tstatic void Main(string[] args) {\n\t\t\tConsole.WriteLine("Hello World in C#");\n\t\t}\n\t}\n}\n',
  php: "<?php\n\necho 'Hello World in php';\n",
};

export const CODE_SNIPPETS = {
  Exp1: `import numpy as np
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
    `,
  Exp2: `import numpy as np
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
    `,
  Exp3: `import numpy as np
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

    `,
  Exp4: `import numpy as np
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
    `,
  Exp5: `import numpy as np
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
    `,
}