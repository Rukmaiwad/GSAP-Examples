import { BrowserRouter, Routes, Route } from "react-router-dom";
import GSAPList from "./GSAPList";
import GsapTo from "./components/GsapTo";
import GsapFrom from "./components/GsapFrom";
import GsapFromTo from "./components/GsapFromTo";
import GsapTimeline from "./components/GsapTimeline";
import { GsapScrollTrigger, GsapStagger, GsapText } from "./components/Gsap";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GSAPList />} />

        {/* Pages */}
        <Route path="/gsap/to" element={<GsapTo/>} />
        <Route path="/gsap/from" element={<GsapFrom />} />
        <Route path="/gsap/fromto" element={<GsapFromTo/>} />
        <Route path="/gsap/timeline" element={<GsapTimeline/>} />
        <Route path="/gsap/stagger" element={<GsapStagger/>} />
        <Route path="/gsap/scrolltrigger" element={<GsapScrollTrigger />} />
        <Route path="/gsap/text" element={<GsapText />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;