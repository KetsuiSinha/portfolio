import React from 'react';
import { Download, Mail, Brain, Database, Code, Cpu } from 'lucide-react';

export default function AboutMe() {
  const skills = [
    {
      category: "Machine Learning",
      items: ["TensorFlow", "PyTorch", "Scikit-learn", "Neural Networks", "Computer Vision", "NLP"],
      icon: <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
    },
    {
      category: "Data Science",
      items: ["Python", "Pandas", "NumPy", "Data Visualization", "Statistical Analysis"],
      icon: <Database className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
    },
    {
      category: "Web Development",
      items: ["React", "Node.js", "JavaScript", "HTML/CSS", "REST APIs"],
      icon: <Code className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
    },
    {
      category: "Tools & Technologies",
      items: ["Git", "AWS", "Jupyter", "VS Code"],
      icon: <Cpu className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
    }
  ];

  return (
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl min-h-screen bg-gray-900 w-full">
      {/* Hero Section (Further Raised to Show More of About Me) */}
      <section className="relative pt-2 sm:pt-8">
  <div className="min-h-[55vh] flex items-center">
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-300 mb-3 sm:mb-5">
          Machine Learning Engineer
        </h1>
        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto px-4">
          Passionate about transforming data into intelligent solutions
        </p>
        <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4">
          <a 
            href="https://portfolio-d24a.onrender.com/download" 
            className="rounded-md bg-gray-600 px-4 sm:px-5 py-2 text-sm font-semibold text-white shadow-lg hover:bg-gray-500 transition-all duration-300 w-full sm:w-auto"
          >
            Download Resume
          </a>
          <button 
            onClick={() => window.dispatchEvent(new Event('navigateToContact'))} 
            className="rounded-md bg-gray-600 px-4 sm:px-5 py-2 text-sm font-semibold text-white shadow-lg hover:bg-gray-500 transition-all duration-300 w-full sm:w-auto"
          >
            Contact Me
          </button>
        </div>
      </div>
    </div>
  </div>
</section>




      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 lg:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-4 sm:p-6 lg:p-8 backdrop-blur-xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">About Me</h2>
            <div className="space-y-4 sm:space-y-6 text-gray-300">
              <p className="text-base sm:text-lg">
                I am an aspiring Machine Learning Engineer and Web Developer with a strong passion for Data Science. 
                With hands-on experience in building and applying machine learning algorithms to solve real-world problems, 
                I am committed to advancing my skills in AI and data analytics.
              </p>
              <p className="text-base sm:text-lg">
                I actively seek opportunities to work on innovative projects that leverage cutting-edge technologies 
                to deliver impactful solutions. My goal is to contribute to the evolving tech landscape while 
                continuously expanding my expertise in machine learning, data science, and software development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-12">Skills & Expertise</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {skills.map((skill) => (
              <div 
                key={skill.category} 
                className="rounded-xl border border-gray-800 bg-gray-900/50 p-4 sm:p-6 backdrop-blur-xl transition-transform duration-300 hover:scale-105"
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  {skill.icon}
                  <h3 className="text-lg sm:text-xl font-semibold text-white">{skill.category}</h3>
                </div>
                <ul className="space-y-1 sm:space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="text-sm sm:text-base text-gray-400">{item}</li>
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
