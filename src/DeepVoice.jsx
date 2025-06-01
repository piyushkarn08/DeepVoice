import React, { useState } from "react";
import "./App.css";

function App() {
  const [tab, setTab] = useState("download");

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f1f3f6] via-[#e6eaf1] to-[#dee3ec] text-[#111827] p-8 font-sans">
      <div className="max-w-5xl mx-auto">
        {/* Replaced text with logo */}
        <div className="flex justify-center mb-4">
          <img
            src="/deepvoice-logo.png"
            alt="DeepVoice Logo"
            className="h-24 md:h-32 object-contain"
          />
        </div>

        <p className="text-center text-xl mb-12">
          Empowering people with multilingual support and breaking language barriers
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-center">
          <button onClick={() => setTab("download")} className="bg-white/60 text-black py-2 rounded-lg hover:bg-white transition">
            Download Code
          </button>
          <button onClick={() => setTab("documentation")} className="bg-white/60 text-black py-2 rounded-lg hover:bg-white transition">
            Documentation
          </button>
          <button onClick={() => setTab("contact")} className="bg-white/60 text-black py-2 rounded-lg hover:bg-white transition">
            Contact/About
          </button>
        </div>

        {tab === "download" && (
          <section className="bg-white/70 p-6 rounded-xl shadow-xl">
            <h2 className="text-3xl font-semibold mb-4">Download Trial Version</h2>
            <a
              href="/downloads/trial-version-0.1-eng-to-tel.py"
              download
              className="text-blue-600 hover:text-blue-800 underline block mb-2"
            >
              ▶ Trial Version 0.1 - Eng to Tel
            </a>
            <a
              href="/downloads/requirements.txt"
              download
              className="text-blue-600 hover:text-blue-800 underline block"
            >
              📦 Download Requirements File
            </a>
          </section>
        )}

        {tab === "documentation" && (
          <section className="bg-white/70 p-6 rounded-xl shadow-xl">
            <h2 className="text-3xl font-semibold mb-4">How to Use DeepVoice</h2>
            <ol className="list-decimal list-inside space-y-2 mb-4">
              <li>Download the Python script from the download tab.</li>
              <li>Run it in Python (install dependencies like whisper, gTTS, transformers, TTS).</li>
              <li>Provide an English audio file as input.</li>
              <li>The script transcribes, translates, and outputs a Telugu audio file.</li>
              <li>More information: download the Documentation file.</li>
            </ol>
            <a
              href="/downloads/translator_documentation.txt"
              download
              className="text-blue-600 hover:text-blue-800 underline"
            >
              📄 Download Detailed Documentation (TXT)
            </a>
          </section>
        )}

        {tab === "contact" && (
          <section className="bg-white/70 p-6 rounded-xl shadow-xl">
            <h2 className="text-3xl font-semibold mb-4">Contact / About Me</h2>
            <p>
              Hello! I'm Piyush Karn, the founder of DeepVoice, a platform dedicated to helping people overcome language barriers using Python and AI.<br />
              Feel free to reach out to me for feedback, collaborations, or just to connect!<br /><br />
              📧 <strong>Email:</strong> <a href="mailto:karnp8530@gmail.com" className="text-blue-600 underline">karnp8530@gmail.com</a>
            </p>
          </section>
        )}
      </div>
    </main>
  );
}

export default App;
