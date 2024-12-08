import React, { useEffect, useRef, useState } from 'react'
import { Editor } from '@monaco-editor/react'
import LanguageSelector from './LanguageSelector';
import Output from './Output';
import { CODE_SNIPPETS, DEFAULT } from '../constants';

const CodeEditor = () => {
  const editorRef = useRef();
  const [value, setValue] = useState('');
  const [language, setLanguage] = useState('python');

  const pathname = window.location.pathname;
  const [, id] = pathname.split('/');

  useEffect(() => {
    setValue(CODE_SNIPPETS[id]);
  },[])

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  }

  const onSelect = (language) => {
    setLanguage(language);
    switch (language) {
      case 'python':
        setValue(CODE_SNIPPETS[id])
        break;
      default:
        setValue(DEFAULT[language])
        break;
    } 
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
            defaultLanguage='python'
            defaultValue={value}
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
