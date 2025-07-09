import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import HighlightPopup from './components/HighlightPopup';

function App() {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [highlightText, setHighlightText] = useState('');
  const chatEndRef = useRef(null);
  const inputRef = useRef(null);

  const handleQuerySubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    const userMessage = { type: 'user', text: query };
    setMessages((prev) => [...prev, userMessage]);
    setQuery('');
    setLoading(true);

    setTimeout(() => {
      const simulatedResponse = {
        type: 'bot',
        answer:
          'Yes, under Section 166 of the Motor Vehicles Act, 1988, the claimants are entitled to an addition for future prospects even when the deceased was self-employed and aged 54–55 years at the time of the accident. In Dani Devi v. Pritam Singh, the Court held that 10% of the deceased’s annual income should be added as future prospects.',
        citations: [
          {
            text:
              'as the age of the deceased at the time of accident was held to be about 54-55 years by the learned Tribunal, being self-employed, as such, 10% of annual income should have been awarded on account of future prospects.',
            source: 'Dani_Devi_v_Pritam_Singh.pdf',
            link: 'sample.pdf'
          }
        ]
      };
      setMessages((prev) => [...prev, simulatedResponse]);
      setLoading(false);
    }, 1500);
  };

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleQuerySubmit(e);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-gray-100 items-center">
      <div className="w-full md:w-1/2 flex flex-col h-full">

        <div className="px-4 py-4 text-center text-xl font-semibold text-green-300 border-b border-gray-700">
          Legal Chat Assistant
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex gap-2 ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.type === 'bot' && (
                <svg
                className="w-10 h-10 rounded-full"
              
              fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M21.9,11.553l-3-6a.846.846,0,0,0-.164-.225A.987.987,0,0,0,18,5H13V3a1,1,0,0,0-2,0V5H6a.987.987,0,0,0-.731.328.846.846,0,0,0-.164.225l-3,6a.982.982,0,0,0-.1.447H2a4,4,0,0,0,8,0H9.99a.982.982,0,0,0-.1-.447L7.618,7H11V20H6a1,1,0,0,0,0,2H18a1,1,0,0,0,0-2H13V7h3.382l-2.277,4.553a.982.982,0,0,0-.1.447H14a4,4,0,0,0,8,0h-.01A.982.982,0,0,0,21.9,11.553ZM7.882,12H4.118L6,8.236Zm8.236,0L18,8.236,19.882,12Z"></path></g></svg>
        
              )}
              <div
                className={`max-w-sm px-4 py-3 text-sm rounded-2xl shadow ${
                  msg.type === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 text-gray-100'
                }`}
              >
                {msg.type === 'bot' ? (
                  <>
                    <p>{msg.answer}</p>
                    {msg.citations.map((citation, i) => (
                      <div key={i} className="mt-3 text-xs">
                        <a
                          href={citation.link}
                          className="text-green-300 underline"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Citation: "{citation.text}" – {citation.source}
                        </a>
                        <button
                          className="mt-1 ml-2 px-3 py-1 bg-gray-600 hover:bg-gray-500 rounded text-white text-xs"
                          onClick={() => {
                            setHighlightText(citation.text);
                            setShowPopup(true);
                          }}
                        >
                          View in PDF
                        </button>
                      </div>
                    ))}
                  </>
                ) : (
                  msg.text
                )}
              </div>
              {msg.type === 'user' && (
              
                <svg className="w-10 h-10 rounded-full" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 7C9.65685 7 11 5.65685 11 4C11 2.34315 9.65685 1 8 1C6.34315 1 5 2.34315 5 4C5 5.65685 6.34315 7 8 7Z" fill="#ffffff"></path> <path d="M14 12C14 10.3431 12.6569 9 11 9H5C3.34315 9 2 10.3431 2 12V15H14V12Z" fill="#ffffff"></path> </g></svg>
              )}
            </div>
          ))}
          {loading && (
            <div className="flex gap-2">
            
              <svg
                className="w-10 h-10 rounded-full"
              
              fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M21.9,11.553l-3-6a.846.846,0,0,0-.164-.225A.987.987,0,0,0,18,5H13V3a1,1,0,0,0-2,0V5H6a.987.987,0,0,0-.731.328.846.846,0,0,0-.164.225l-3,6a.982.982,0,0,0-.1.447H2a4,4,0,0,0,8,0H9.99a.982.982,0,0,0-.1-.447L7.618,7H11V20H6a1,1,0,0,0,0,2H18a1,1,0,0,0,0-2H13V7h3.382l-2.277,4.553a.982.982,0,0,0-.1.447H14a4,4,0,0,0,8,0h-.01A.982.982,0,0,0,21.9,11.553ZM7.882,12H4.118L6,8.236Zm8.236,0L18,8.236,19.882,12Z"></path></g></svg>
              <div className="bg-gray-700 px-4 py-2 rounded-2xl text-sm">
                Generating answer...
              </div>
            </div>
          )}
          <div ref={chatEndRef}></div>
        </div>

        <form
          onSubmit={handleQuerySubmit}
          className="border-t border-gray-800 bg-gray-800 p-4 flex gap-3"
        >
          <textarea
            ref={inputRef}
            className="flex-grow resize-none border border-gray-700 rounded-lg bg-gray-900 text-gray-200 p-2 text-sm"
            rows={2}
            placeholder="Ask your legal question..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            type="submit"
            disabled={loading || !query.trim()}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm transition duration-200"
          >
            {loading ? '...' : 'Send'}
          </button>
        </form>
      </div>

      {showPopup && (
        <HighlightPopup
          onClose={() => setShowPopup(false)}
          highlightText={highlightText}
        />
      )}
    </div>
  );
}

export default App;
