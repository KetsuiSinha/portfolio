import React from 'react';
import { Download, Mail, Brain, Database, Code, Cpu } from 'lucide-react';

export default function AboutMe() {
  const skills = [
    {
      category: "Machine Learning",
      items: ["TensorFlow", "PyTorch", "Scikit-learn", "Neural Networks", "Computer Vision", "NLP"],
      icon: <Brain className="w-6 h-6 text-gray-400" />
    },
    {
      category: "Data Science",
      items: ["Python", "Pandas", "NumPy", "Data Visualization", "Statistical Analysis"],
      icon: <Database className="w-6 h-6 text-gray-400" />
    },
    {
      category: "Web Development",
      items: ["React", "Node.js", "JavaScript", "HTML/CSS", "REST APIs"],
      icon: <Code className="w-6 h-6 text-gray-400" />
    },
    {
      category: "Tools & Technologies",
      items: ["Git", "AWS", "Jupyter", "VS Code"],
      icon: <Cpu className="w-6 h-6 text-gray-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 full-width">
      {/* Hero Section */}
      <section className="relative pt-16">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
        </div>
        
        <div className="min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-32">
            <div className="text-center">
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-300 mb-6">
                Machine Learning Engineer
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Passionate about transforming data into intelligent solutions
              </p>
              <div className="mt-8 flex justify-center gap-4">
              <a 
  href="/public/resume.pdf" 
  download="My_Resume.pdf"
  className="rounded-md bg-gray-600 px-5 py-2 text-sm font-semibold text-white shadow-lg hover:bg-gray-500 transition-all duration-300"
>
  Download Resume
</a>
<button 
            onClick={() => window.dispatchEvent(new Event('navigateToContact'))} 
            className="rounded-md bg-gray-600 px-5 py-2 text-sm font-semibold text-white shadow-lg hover:bg-gray-500 transition-all duration-300"
          >
            Contact Me
          </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-8 backdrop-blur-xl">
            <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
            <div className="space-y-6 text-gray-300">
              <p className="text-lg">
                I am an aspiring Machine Learning Engineer and Web Developer with a strong passion for Data Science. 
                With hands-on experience in building and applying machine learning algorithms to solve real-world problems, 
                I am committed to advancing my skills in AI and data analytics.
              </p>
              <p className="text-lg">
                I actively seek opportunities to work on innovative projects that leverage cutting-edge technologies 
                to deliver impactful solutions. My goal is to contribute to the evolving tech landscape while 
                continuously expanding my expertise in machine learning, data science, and software development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <div key={skill.category} className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-xl">
                <div className="flex items-center gap-3 mb-4">
                  {skill.icon}
                  <h3 className="text-xl font-semibold text-white">{skill.category}</h3>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="text-gray-400">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}