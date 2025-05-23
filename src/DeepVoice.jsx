import React, { useState } from "react";
import "./App.css";

function App() {
  const [tab, setTab] = useState("download");  // <-- state variable for tab

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white p-8 font-sans">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-4 text-center drop-shadow-xl">DeepVoice</h1>
        <p className="text-center text-xl mb-12">
          Empowering people with multilingual support and breaking language barriers
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-center">
          <button onClick={() => setTab("download")} className="bg-white/10 py-2 rounded-lg">Download Code</button>
          <button onClick={() => setTab("documentation")} className="bg-white/10 py-2 rounded-lg">Documentation</button>
          <button onClick={() => setTab("contact")} className="bg-white/10 py-2 rounded-lg">Contact/About</button>
        </div>

        {tab === "download" && (
          <section className="bg-white/10 p-6 rounded-xl shadow-xl">
            <h2 className="text-3xl font-semibold mb-4">Download Trial Version</h2>
            <a
              href="/downloads/trial-version-0.1-eng-to-tel.py"
              download
              className="text-blue-300 hover:text-blue-500 underline"
            >
              Trial Version 0.1 - Eng to Tel
            </a>
          </section>
        )}

        {tab === "documentation" && (
  <section className="bg-white/10 p-6 rounded-xl shadow-xl">
    <h2 className="text-3xl font-semibold mb-4">How to Use DeepVoice</h2>
    <ol className="list-decimal list-inside space-y-2 mb-4">
      <li>Download the Python script from the download tab.</li>
      <li>Run it in Python (install dependencies like whisper, gTTS, transformers, TTS).</li>
      <li>Provide an English audio file as input.</li>
      <li>The script transcribes, translates, and outputs a Telugu audio file.</li>
    </ol>
    <a
      href="/downloads/translator_documentation.txt"
      download
      className="text-blue-300 hover:text-blue-500 underline"
    >
      📄 Download Detailed Documentation (TXT)
    </a>
  </section>
)}


        {tab === "contact" && (
          <section className="bg-white/10 p-6 rounded-xl shadow-xl">
            <h2 className="text-3xl font-semibold mb-4">Contact / About Me</h2>
            <p>
              Hello! I'm Piyush Karn, the founder of DeepVoice, a platform dedicated to helping people overcome language barriers using Python and AI.
              Feel free to reach out to me for feedback, collaborations, or just to connect!
              Email: karnp8530@gmail.com
            </p>
          </section>
        )}
      </div>
    </main>
  );
}

export default App;
