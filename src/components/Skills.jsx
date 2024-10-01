import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Node from "../assets/node.png";
import MongoDB from "../assets/mongo.png";

// Array of skill data
const skills = [
  { name: "HTML", img: HTML },
  { name: "CSS", img: CSS },
  { name: "JavaScript", img: JavaScript },
  { name: "React", img: ReactImg },
  { name: "GitHub", img: GitHub },
  { name: "Tailwind", img: Tailwind },
  { name: "Node.js", img: Node },
  { name: "MongoDB", img: MongoDB },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full min-h-screen bg-[#0a192f] text-gray-300 flex items-center justify-center px-6"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto  flex flex-col justify-center w-full h-full">
        {/* Title */}
        <header>
          <h2 className="text-xl font-bold inline border-b-2 border-blue-600">
            Skills
          </h2>
          <p className="py-4">
            These are the technologies I’ve worked with
          </p>
        </header>

        {/* Skill Icons */}
        <div className="grid grid-cols-2  gap-8 text-center  py-8 ">
          {skills.map((skill, index) => (
            <article
              key={index}
              className="shadow-md shadow-[#e5e7e8] hover:scale-110 transition-transform duration-500"
            >
              <img
                className="w-16 mx-auto pt-2"
                src={skill.img}
                alt={`${skill.name} icon`}
              />
              <p className="my-4 text-sm">{skill.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
