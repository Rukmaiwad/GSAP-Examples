import{ useRef } from "react";


/*
  This file exports three React components that match the dark UI style
  used in your other pages: GsapStagger, GsapScrollTrigger, GsapText.

  Usage: import these components into your router and add routes:
    <Route path="/gsap/stagger" element={<GsapStagger />} />
    <Route path="/gsap/scrolltrigger" element={<GsapScrollTrigger />} />
    <Route path="/gsap/text" element={<GsapText />} />

  Notes:
  - One demo image (the screenshot you uploaded) is referenced via the local
    path included below. Your environment/tooling will transform this path
    into a proper URL when packaging or serving assets.
*/

const demoImagePath = "https://plus.unsplash.com/premium_photo-1754253677826-32cf289d143b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; // uploaded file path

export function GsapStagger() {
  const containerRef = useRef(null);

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">GsapStagger</h1>

      <p className="text-gray-300 leading-7 mb-6">
        The <span className="text-orange-400 font-medium">gsap.stagger()</span> (or the
        <span className="text-orange-400 font-medium"> stagger</span> property) lets you
        animate multiple elements with a small delay between each one.
      </p>

      <p className="text-gray-300 leading-7 mb-10">Try this demo:</p>

      <div
        ref={containerRef}
        className="grid grid-cols-6 gap-4 max-w-xl"
        role="presentation"
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="stagger-box w-14 h-14 bg-indigo-500 rounded-lg"
          ></div>
        ))}
      </div>
    </div>
  );
}

export function GsapScrollTrigger() {
  const leftBoxRef = useRef(null);
  const rightBoxRef = useRef(null);

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">GsapScrollTrigger</h1>

      <p className="text-gray-300 leading-7 mb-6">
        The <span className="text-orange-400 font-medium">ScrollTrigger</span> plugin
        triggers animations based on scroll position. Perfect for scroll-based reveals.
      </p>

      <p className="text-gray-300 leading-7 mb-10">
        Scroll down to see two boxes animate: one from the left, one from the right.
      </p>

      <div style={{ height: 300 }} /> {/* spacer */}

      {/* LEFT BOX */}
      <div
        ref={leftBoxRef}
        className="mx-auto max-w-2xl p-8 rounded-xl bg-green-600 shadow-lg mb-10"
      >
        <h3 className="text-xl font-semibold mb-2">Left-side Animation</h3>
        <p className="text-gray-300">This box animates in from the left.</p>
      </div>

      {/* RIGHT BOX */}
      <div
        ref={rightBoxRef}
        className="mx-auto max-w-2xl p-8 rounded-xl bg-blue-600 shadow-lg mb-10"
      >
        <h3 className="text-xl font-semibold mb-2">Right-side Animation</h3>
        <p className="text-gray-300">This box animates in from the right.</p>
      </div>

      <div style={{ height: 500 }} /> {/* spacer */}
    </div>
  );
}

export function GsapText() {
  const textRef = useRef(null);
  
  // split sentence into spans for a simple letter animation
  const sentence = "Animate text with GSAP.";

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">GsapText</h1>

      <p className="text-gray-300 leading-7 mb-6">
        You can animate text by splitting it into characters and animating each
        character with a small stagger between them.
      </p>

      <p className="text-gray-300 leading-7 mb-10">Demo:</p>

      <div ref={textRef} className="text-2xl font-medium tracking-wide">
        {Array.from(sentence).map((ch, i) => (
          <span
            key={i}
            className={`letter inline-block ${ch === ' ' ? 'mx-1' : ''}`}
            aria-hidden={ch === ' '}
          >
            {ch}
          </span>
        ))}
      </div>

      {/* include the uploaded demo image (local path will be transformed by your tooling) */}
      <img
        src={demoImagePath}
        alt="demo"
        className="w-28 h-28 rounded-lg mt-8"
      />
    </div>
  );
}

export default { GsapStagger, GsapScrollTrigger, GsapText };
