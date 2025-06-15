import React, { useState, useCallback } from 'react';
import { generateVideoScriptPrompt, generateImageCreationPrompt } from './services/geminiService';
import { LoadingSpinner } from './components/LoadingSpinner';
import { ModernAiIcon } from './components/icons'; // Changed to ModernAiIcon

type PromptType = 'video' | 'image';

const App: React.FC = () => {
  const [userInput, setUserInput] = useState<string>('');
  const [generatedPrompt, setGeneratedPrompt] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [promptType, setPromptType] = useState<PromptType>('video');

  const handleGeneratePrompt = useCallback(async () => {
    if (!userInput.trim()) {
      setError(`Please enter a ${promptType === 'video' ? 'video idea or topic' : 'concept for an image'}.`);
      return;
    }
    setIsLoading(true);
    setError(null);
    setGeneratedPrompt('');
    try {
      let script: string;
      if (promptType === 'video') {
        script = await generateVideoScriptPrompt(userInput);
      } else {
        script = await generateImageCreationPrompt(userInput);
      }
      setGeneratedPrompt(script);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred.');
      }
    } finally {
      setIsLoading(false);
    }
  }, [userInput, promptType]);

  const promptTypeConfig = {
    video: {
      label: "Enter your video idea or topic:",
      placeholder: "e.g., 'a documentary about space travel', 'a comedy sketch about a talking cat', 'a tutorial for a new software'",
      buttonText: "Spark Video Idea!",
      outputTitle: "Generated Video Prompt:"
    },
    image: {
      label: "Describe the image concept you want a prompt for:",
      placeholder: "e.g., 'a heroic knight on a mountain top', 'a futuristic city with flying cars', 'a cute avatar with cat ears'",
      buttonText: "Spark Image Prompt!",
      outputTitle: "Generated Image Prompt:"
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-gray-100 flex flex-col items-center p-4 sm:p-6 lg:p-8 selection:bg-red-500 selection:text-white">
      <header className="mb-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-white flex items-center justify-center">
          <ModernAiIcon className="w-10 h-10 inline-block mr-2 text-red-500" /> {/* Changed to ModernAiIcon and styled */}
          ImagiBot
        </h1>
        <p className="text-slate-400 mt-2 text-lg">Your AI assistant for creative video and image prompts! ✨</p>
      </header>

      <div className="w-full max-w-2xl">
        <div className="mb-6 flex justify-center">
          <div className="inline-flex rounded-md shadow-sm bg-slate-700 p-1" role="group">
            <button
              type="button"
              onClick={() => setPromptType('video')}
              aria-pressed={promptType === 'video'}
              className={`px-6 py-2 text-sm font-medium rounded-l-md transition-colors duration-150 ease-in-out focus:z-10 focus:ring-2 focus:ring-red-500 focus:outline-none ${
                promptType === 'video' ? 'bg-red-600 text-white' : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
              }`}
            >
              Video Prompt
            </button>
            <button
              type="button"
              onClick={() => setPromptType('image')}
              aria-pressed={promptType === 'image'}
              className={`px-6 py-2 text-sm font-medium rounded-r-md transition-colors duration-150 ease-in-out focus:z-10 focus:ring-2 focus:ring-red-500 focus:outline-none ${
                promptType === 'image' ? 'bg-red-600 text-white' : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
              }`}
            >
              Image Prompt
            </button>
          </div>
        </div>

        <main className="w-full bg-slate-800 p-6 sm:p-8 rounded-xl shadow-2xl border border-slate-700">
          <div className="mb-6">
            <label htmlFor="userInput" className="block text-lg font-semibold mb-2 text-red-400">
              {promptTypeConfig[promptType].label}
            </label>
            <textarea
              id="userInput"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder={promptTypeConfig[promptType].placeholder}
              rows={4}
              className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg text-gray-100 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors duration-150 placeholder-slate-500"
              disabled={isLoading}
            />
          </div>

          <button
            onClick={handleGeneratePrompt}
            disabled={isLoading}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg text-lg transform hover:scale-105 transition-all duration-150 ease-in-out shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            aria-label={isLoading ? 'Generating prompt' : promptTypeConfig[promptType].buttonText}
          >
            {isLoading ? (
              <>
                <LoadingSpinner />
                Generating...
              </>
            ) : (
              promptTypeConfig[promptType].buttonText
            )}
          </button>

          {error && (
            <div role="alert" aria-live="assertive" className="mt-6 p-4 bg-red-900 border border-red-700 text-red-300 rounded-lg">
              <p className="font-semibold">Error:</p>
              <p>{error}</p>
            </div>
          )}

          {generatedPrompt && !error && (
            <div className="mt-8 pt-6 border-t border-slate-700">
              <h2 className="text-2xl font-semibold mb-4 text-red-400">{promptTypeConfig[promptType].outputTitle}</h2>
              <div className="p-4 bg-slate-700 rounded-lg whitespace-pre-wrap text-gray-200 max-h-[50vh] overflow-y-auto custom-scrollbar">
                {generatedPrompt}
              </div>
            </div>
          )}
        </main>
      </div>
      
      <footer className="mt-12 text-center text-slate-500 text-sm">
        <p>Powered by Gemini AI. For Creators.</p>
        <p>&copy; {new Date().getFullYear()} ImagiBot. All rights reserved (not really, it's a demo!)</p>
      </footer>
    </div>
  );
};

export default App;