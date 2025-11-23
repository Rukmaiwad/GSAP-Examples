import { Link } from "react-router-dom";

const topics = [
  {
    id: 1,
    title: "GSAP To",
    desc: "The to() method is used to animate a single element from a starting state to an ending state.",
    link: "/gsap/to"
  },
  {
    id: 2,
    title: "GSAP From",
    desc: "The from() method is used to animate a single element from an ending state to a starting state.",
    link: "/gsap/from"
  },
  {
    id: 3,
    title: "GSAP FromTo",
    desc: "The fromTo() method is used to animate a single element from a starting state to an ending state and vice versa.",
    link: "/gsap/fromto"
  },
  {
    id: 4,
    title: "GSAP Timeline",
    desc: "The timeline() method is used to create a timeline to manage multiple animations.",
    link: "/gsap/timeline"
  },
  {
    id: 5,
    title: "GSAP Stagger",
    desc: "The stagger() method is used to animate multiple elements with a stagger effect.",
    link: "/gsap/stagger"
  },
  {
    id: 6,
    title: "GSAP ScrollTrigger",
    desc: "The ScrollTrigger plugin is used to trigger animations based on the scroll position.",
    link: "/gsap/scrolltrigger"
  },
  {
    id: 7,
    title: "GSAP Text",
    desc: "Learn how to animate text with GSAP.",
    link: "/gsap/text"
  }
];

export default function GSAPList() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white px-8 py-12">
      <h1 className="text-4xl font-bold mb-10">GSAP Animations</h1>

      <div className="space-y-8">
        {topics.map((t) => (
          <Link to={t.link} key={t.id}>
            <div className="border-b border-gray-700 pb-5 hover:bg-[#141414] rounded-xl transition-all p-4 cursor-pointer">
              <h2 className="text-xl font-semibold text-blue-400">
                {t.id}. {t.title}
              </h2>
              <p className="text-gray-400 mt-1">{t.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}