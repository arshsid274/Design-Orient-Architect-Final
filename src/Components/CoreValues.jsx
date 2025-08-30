import { Lightbulb, Leaf, Users, Home } from "lucide-react";

function CoreValues() {
  const values = [
    {
      icon: <Lightbulb size={28} className="text-[#c6a47e]" />,
      title: "Innovation",
      description:
        "We constantly push creative boundaries to deliver forward-thinking, timeless designs.",
    },
    {
      icon: <Leaf size={28} className="text-[#c6a47e]" />,
      title: "Sustainability",
      description:
        "Eco-conscious design is at the core of every project—maximizing natural light and using local, sustainable materials.",
    },
    {
      icon: <Users size={28} className="text-[#c6a47e]" />,
      title: "Client-Centric",
      description:
        "We believe great architecture starts with listening. Each project is shaped by your story and aspirations.",
    },
    {
      icon: <Home size={28} className="text-[#c6a47e]" />,
      title: "Function & Form",
      description:
        "We merge usability with aesthetic elegance to design spaces that live as beautifully as they look.",
    },
  ];

  return (
    <section className="bg-[#111111] text-white py-20 px-6 md:px-12 xl:px-[120px]">
      <h2 className="text-2xl md:text-3xl text-center font-bold mb-12">
        Core Values That Shape Every Space
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {values.map((value, idx) => (
          <div
            key={idx}
            className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6 shadow hover:shadow-md transition-shadow"
          >
            <div className="mb-4">{value.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
            <p className="text-sm text-gray-400">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CoreValues;
