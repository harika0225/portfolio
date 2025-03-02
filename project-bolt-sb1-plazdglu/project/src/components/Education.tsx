import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      id: 1,
      degree: 'B.Tech in Information Technology ',
      institution: 'Sasi Institute Of Technology And Engineering',
      location: 'Tadepalligudem, Andhra Pradesh',
      period: '2019 - 2023',
      description: 'Graduated with honors. Coursework included Data Structures, Algorithms, Web Development, Database Systems, and Software Engineering.',
      achievements: [
        'Secured 1st prize in PROJECT EXPO conducted in Techno Cultural Fest Anveshana (2023), organized by Sasi Institute of Technology & Engineering'
      ]
    },
    {
      id: 2,
      degree: 'Intermediate in MPC',
      institution: 'Narayana Junior College',
      location: 'Bhimavaram, Andhra Pradesh',
      period: '2017 - 2019',
      description: 'Participated in various extracurricular activities including Math Team.',
      achievements: [
        'Mathematics',
        'English (First language)',
        'IIT Training'
      ]
    },
    {
      id: 3,
      degree: 'High School Diploma',
      institution: 'Gurazada Vidya Nikithan E.M High School',
      location: 'Ganapavaram, Andhra Pradesh',
      period: '2016 - 2017',
      description: 'Participated in various extracurricular activities including the Computer Science Club and Math Team.',
      achievements: [
        'Mathematics',
        'English (First language)',
        'Remaining Standard Subjects'
      ]
    }
  ];

  const certifications = [
    {
      id: 1,
      name: 'UI/UX Certification',
      issuer: 'Great Learning',
      date: 'June 2022'
    },
    {
      id: 2,
      name: 'Saleforce Developer',
      issuer: 'Smart Intern',
      date: 'March 2023'
    },
    {
      id: 3,
      name: 'R Programming',
      issuer: 'Skillup',
      date: 'July 2022'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Education & Certifications</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            My academic background and professional certifications
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
            <GraduationCap className="text-indigo-600 mr-2" size={24} />
            Education
          </h3>
          
          <div className="space-y-10 mb-16">
            {education.map((item) => (
              <div key={item.id} className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-gray-800 mb-1">{item.degree}</h4>
                <h5 className="text-lg font-medium text-indigo-600 mb-3">{item.institution}</h5>
                
                <div className="flex flex-wrap gap-4 mb-4 text-gray-600">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    <span>{item.period}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-1" />
                    <span>{item.location}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{item.description}</p>
                
                <div>
                  <h6 className="font-semibold text-gray-700 mb-2">Key Achievements:</h6>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {item.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
            <GraduationCap className="text-indigo-600 mr-2" size={24} />
            Certifications
          </h3>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert) => (
                <div key={cert.id} className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-bold text-gray-800">{cert.name}</h4>
                  <p className="text-indigo-600">{cert.issuer}</p>
                  <p className="text-gray-600 text-sm">{cert.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;