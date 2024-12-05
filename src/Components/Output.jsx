import React, { useEffect, useState } from 'react'
import { executeCode } from './api';
import { loadPyodide } from 'pyodide';

const Output = ({editorRef, language}) => {
    const [output, setOutput] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const [pyodide, setPyodide] = useState(null);

    useEffect(() => {
      const loadPyodideInstance = async () => {
        const pyodideInstance = await loadPyodide({
          indexURL: "https://cdn.jsdelivr.net/pyodide/v0.23.2/full/"
        });
        await pyodideInstance.loadPackage(['numpy', 'matplotlib']);
        setPyodide(pyodideInstance)
      };
      loadPyodideInstance();
    },[]);

    const runCode = async () => {
      const sourceCode = editorRef.current.getValue();
      if (!sourceCode) return;
      try {
        setIsLoading(true);
        const { run: result } = await executeCode(language, sourceCode);
        setOutput(result.output.split("\n"));
        result.stderr ? setIsError(true) : setIsError(false);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    
  return (
    <div>
      <p className='pb-2'>Output:</p>
      <button onClick={runCode} isLoading={isLoading} className="px-4 py-2 text-white bg-teal-600 rounded hover:bg-teal-700 mb-4">Run Code</button>
      <div className='p-2 border rounded h-3/4'>
        {output ? output.map((line, i) => <p key={i}>{line}</p>) : "Click 'Run Code' to see the output here"}
      </div>
    </div>
  )
}

export default Output
