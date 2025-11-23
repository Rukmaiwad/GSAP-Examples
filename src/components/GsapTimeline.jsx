import React, { useRef } from "react";

export default function GsapTimeline() {
  const boxRef = useRef(null);

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white px-8 py-12">
      {/* TITLE */}
      <h1 className="text-4xl font-bold mb-8">GsapTimeline</h1>

      {/* PARAGRAPH 1 */}
      <p className="text-gray-300 leading-7 mb-6">
        The{" "}
        <span className="text-orange-400 font-medium">gsap.timeline()</span> method is
        used to create a timeline that allows you to manage multiple animations in a
        controlled sequence.
      </p>

      {/* PARAGRAPH 2 */}
      <p className="text-gray-300 leading-7 mb-6">
        A{" "}
        <span className="text-orange-400 font-medium">timeline</span> helps you control
        when animations start, how long they last, and how they overlap. This makes it
        perfect for building complex animation sequences without manually calculating
        delays.
      </p>

      {/* PARAGRAPH 3 */}
      <p className="text-gray-300 leading-7 mb-10">
        Read more about the{" "}
        <a
          href="https://gsap.com/docs/v3/GSAP/Timeline/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 underline"
        >
          gsap.timeline()
        </a>{" "}
        method.
      </p>

      {/* DEMO BOX */}
      <div className="mt-16 flex justify-start">
        <div
          ref={boxRef}
          className="w-32 h-32 bg-pink-500 rounded-xl"
        ></div>
      </div>
    </div>
  );
}