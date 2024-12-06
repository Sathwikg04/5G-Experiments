import React, { useState } from 'react'
import { LANGUAGE_VERSIONS } from '../constants'

const languages = Object.entries(LANGUAGE_VERSIONS)

const LanguageSelector = ({ language, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <p className='p-2'>Language:</p>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="px-4 py-2 w-32 text-white bg-teal-600 rounded hover:bg-teal-700"
            >
                {language}
            </button>

            {isOpen && (
                <div className="absolute mt-2 bg-slate-700 border rounded shadow-lg w-48">
                    {languages.map(([lang, version]) => (
                        <div
                            key={lang}
                            className="px-4 py-2 cursor-pointer hover:bg-slate-400 flex justify-between"
                            onClick={() => { onSelect(lang); setIsOpen(false); }}
                        >
                            <span>{lang}</span>
                            <span className="text-gray-500 text-sm">{version}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default LanguageSelector
