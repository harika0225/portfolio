import React from 'react';

const Skills = () => {
  const technicalSkills = [
    { name: 'HTML', percentage: 90 },
    { name: 'CSS', percentage: 85 },
    { name: 'JavaScript', percentage: 80 },
    { name: 'React.js', percentage: 75 },
    { name: 'Python', percentage: 70 },
    { name: 'Java', percentage: 75 },
    { name: 'SQL', percentage: 65 },
    { name: 'DBMS', percentage: 80 },
    { name: 'AWS Cloud Computing', percentage: 85 },
  ];
  
  const softSkills = [
    { name: 'Problem Solving', percentage: 85 },
    { name: 'Communication', percentage: 80 },
    { name: 'Teamwork', percentage: 90 },
    { name: 'Time Management', percentage: 75 },
    { name: 'Adaptability', percentage: 85 },
    { name: 'Creativity', percentage: 80 },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Here are some of the skills I've acquired through my education and projects
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-gray-600">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-indigo-600 h-2.5 rounded-full" 
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Soft Skills</h3>
            <div className="space-y-6">
              {softSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-gray-600">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-indigo-600 h-2.5 rounded-full" 
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Git', 'VS Code',  'Webpack',  'GitHub', 'Apex'].map((tool) => (
              <span 
                key={tool}
                className="px-4 py-2 bg-white rounded-full shadow-md text-gray-700 font-medium"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;