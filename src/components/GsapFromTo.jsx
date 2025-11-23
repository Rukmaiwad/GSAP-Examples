import React, {  useRef } from "react";

export default function GsapFromTo() {
  const boxRef = useRef(null);

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white px-8 py-12">
      {/* PAGE TITLE */}
      <h1 className="text-4xl font-bold mb-8">GsapFromTo</h1>

      {/* PARAGRAPH 1 */}
      <p className="text-gray-300 leading-7 mb-6">
        The{" "}
        <span className="text-orange-400 font-medium">gsap.fromTo()</span> method is used
        to animate elements from a new state to a new state.
      </p>

      {/* PARAGRAPH 2 */}
      <p className="text-gray-300 leading-7 mb-6">
        The{" "}
        <span className="text-orange-400 font-medium">gsap.fromTo()</span> method is
        similar to the{" "}
        <span className="text-orange-400 font-medium">gsap.from()</span> and{" "}
        <span className="text-orange-400 font-medium">gsap.to()</span> methods, but the
        difference is that the{" "}
        <span className="text-orange-400 font-medium">gsap.fromTo()</span> method
        animates elements from a new state to a new state, while the{" "}
        <span className="text-orange-400 font-medium">gsap.from()</span> method animates
        elements from a new state to their current state, and the{" "}
        <span className="text-orange-400 font-medium">gsap.to()</span> method animates
        elements from their current state to a new state.
      </p>

      {/* READ MORE */}
      <p className="text-gray-300 leading-7 mb-10">
        Read more about the{" "}
        <a
          href="https://gsap.com/docs/v3/GSAP/gsap.fromTo/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 underline"
        >
          gsap.fromTo()
        </a>{" "}
        method.
      </p>

      {/* DEMO BOX */}
      <div className="mt-16 flex justify-start">
        <div
          ref={boxRef}
          className="w-32 h-32 bg-purple-500 rounded-xl"
        ></div>
      </div>
    </div>
  );
}