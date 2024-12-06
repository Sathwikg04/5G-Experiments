import React, { useRef, useState } from 'react'
import { Editor } from '@monaco-editor/react'
import LanguageSelector from './LanguageSelector';
import Output from './Output';

const CodeEditor = ({ codeSnippet }) => {
  const editorRef = useRef();
  const [value, setValue] = useState('');
  const [language, setLanguage] = useState('python');

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  }

  const onSelect = (language) => {
    setLanguage(language);
  }

  return (<div className="flex flex-row h-screen">
    <div className="w-1/2 p-4 shadow-md border-r">
      <div className="rounded-lg p-4 border h-full">
        <div className="mb-4 z-10 relative">
          <LanguageSelector language={language} onSelect={onSelect} />
        </div>
        <div className="rounded-lg overflow-hidden border">
          <Editor
            height="75vh"
            theme="vs-dark"
            defaultLanguage="python"
            defaultValue={codeSnippet}
            onMount={onMount}
            value={value}
            onChange={(value) => setValue(value)}
          />
        </div>
      </div>
    </div>

    <div className="w-1/2 p-4 shadow-md">
      <div className="rounded-lg p-4 border h-full">
        <Output editorRef={editorRef} language={language} />
      </div>
    </div>
  </div>)
}

export default CodeEditor
