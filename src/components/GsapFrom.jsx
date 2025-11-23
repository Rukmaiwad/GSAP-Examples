import React, { useRef } from "react";

export default function GsapFrom() {
  const boxRef = useRef(null);

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">GsapFrom</h1>

      <p className="text-gray-300 leading-7 mb-6">
        The <span className="text-orange-400 font-medium">gsap.from()</span> method is
        used to animate elements from a new state to their current state.
      </p>

      <p className="text-gray-300 leading-7 mb-6">
        The <span className="text-orange-400 font-medium">gsap.from()</span> method is
        similar to the <span className="text-orange-400 font-medium">gsap.to()</span>{" "}
        method, but the difference is that the{" "}
        <span className="text-orange-400 font-medium">gsap.from()</span> method animates
        elements from a new state to their current state, while the{" "}
        <span className="text-orange-400 font-medium">gsap.to()</span> method animates
        elements from their current state to a new state.
      </p>

      <p className="text-gray-300 leading-7 mb-10">
        Read more about the{" "}
        <a
          href="https://gsap.com/docs/v3/GSAP/gsap.from/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 underline"
        >
          gsap.from()
        </a>{" "}
        method.
      </p>

      {/* Demo Box */}
      <div className="w-32 h-32 rounded-xl bg-green-500 relative" ref={boxRef}></div>

    </div>
  );
}