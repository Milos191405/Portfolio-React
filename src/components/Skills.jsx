import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Node from "../assets/node.png";
import MongoDB from "../assets/mongo.png";
import Redux from "../assets/redux.png";
import Bootstrap from "../assets/bootstrap.png";

// Array of skill data
const skills = [
  { name: "HTML", img: HTML },
  { name: "CSS", img: CSS },
  { name:"Bootstrap", img: Bootstrap },
  { name: "JavaScript", img: JavaScript },
  { name: "React", img: ReactImg },
  { name: "GitHub", img: GitHub },
  { name: "Tailwind", img: Tailwind },
  { name: "Node.js", img: Node },
  { name: "MongoDB", img: MongoDB },
  { name: "Redux", img: Redux },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full min-h-screen bg-[#0a192f] text-gray-300 flex items-center justify-center px-6 "
    >
      {/* Container */}
      <div className="max-w-[1000px] md:max-w-[700px] xl:max-w-[1200px] mx-auto  flex flex-col justify-center w-full h-full  md:mx-auto">
        {/* Title */}
        <header>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold inline border-b-2 border-blue-600">
            Skills
          </h2>
          <p className="py-4 md:text-lg xl:text-2xl">
            These are the technologies I’ve worked with
          </p>
        </header>

        {/* Skill Icons */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4  gap-8 text-center  py-8 ">
          {skills.map((skill, index) => (
            <article
              key={index}
              className="shadow-md shadow-[#e5e7e8] hover:scale-110 transition-transform duration-500"
            >
              <img
                className="w-16 xl:w-20 mx-auto pt-2 xl:pt-5"
                src={skill.img}
                alt={`${skill.name} icon`}
              />
              <p className="my-4 text-sm xl:text-lg">{skill.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
