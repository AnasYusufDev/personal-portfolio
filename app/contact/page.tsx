"use client";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="min-h-screen bg-white px-8 py-6">

      {/* Nav */}
      <nav className="flex justify-between items-center mb-16">
        <span className="font-medium tracking-widest uppercase">Anas Yusuf</span>
        <div className="flex gap-10">
          <a href="/" className="text-gray-800 font-medium hover:text-blue-600">Home</a>
          <a href="/resume" className="text-gray-800 font-medium hover:text-blue-600">Résumé</a>
          <a href="/contact" className="text-blue-600 font-medium">Contact</a>
        </div>
      </nav>

      {/* Titel */}
      <h1 className="text-5xl font-bold mb-12">Contact Me</h1>

      {/* Form */}
      <div className="flex flex-col gap-4 max-w-full">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-gray-200 rounded-xl px-6 py-4 text-gray-500 outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-200 rounded-xl px-6 py-4 text-gray-500 outline-none"
        />
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={8}
          className="w-full border border-gray-200 rounded-xl px-6 py-4 text-gray-500 outline-none resize-none"
        />
        <button className="w-full bg-gray-700 text-white font-semibold py-4 rounded-xl hover:bg-gray-900">
          Send Message
        </button>
      </div>

    </div>
  );
}