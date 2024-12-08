import React, { useEffect, useState } from 'react'
import { executeCode } from './api';
import { loadPyodide } from 'pyodide';

const Output = ({ editorRef, language }) => {
  const [output, setOutput] = useState(null);
  const [isError, setIsError] = useState(false);

  const [pyodide, setPyodide] = useState(null);
  const [plotSrc, setPlotSrc] = useState(null);

  useEffect(() => {
    const loadPyodideInstance = async () => {
      const pyodideInstance = await loadPyodide({
        indexURL: "https://cdn.jsdelivr.net/pyodide/v0.26.4/full"
      });
      await pyodideInstance.loadPackage(['numpy', 'matplotlib']);
      setPyodide(pyodideInstance)
    };
    loadPyodideInstance();
    setPlotSrc(null);
  }, []);

  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;
    try {
      if (pyodide && language==='python') {
        try {
          const fullCode = `
import io
import base64

# Run user code
${sourceCode}

# Save the plot to a buffer
buf = io.BytesIO()
plt.savefig(buf, format='png')
buf.seek(0)
# Encode the plot to base64
base64_image = base64.b64encode(buf.getvalue()).decode('utf-8')
plt.close()
base64_image
      `;
          const result = await pyodide.runPythonAsync(fullCode);
          setPlotSrc(`data:image/png;base64,${result}`);
        } catch (error) {
          setPlotSrc(null);
        }
      } else {
        const { run: result } = await executeCode(language, sourceCode);
        setOutput(result.output.split("\n"));
        result.stderr ? setIsError(true) : setIsError(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <p className='pb-2'>Output:</p>
      <button onClick={runCode} className="px-4 py-2 w-32 text-white bg-teal-600 rounded hover:bg-teal-700 mb-4">Run Code</button>
      <div className='p-2 border rounded h-3/4'>
        {output ? (<>
          {output.map((line, i) => <p key={i}>{line}</p>)}
        </>) : (plotSrc ? (<>
          {<div className="p-4">
            <img src={plotSrc} alt="Plot" className="max-w-full border rounded" />
          </div>}
        </>) : (<>
          {"Click 'Run Code' to see the output here"}
        </>))}
      </div>
    </div>
  )
}

export default Output
