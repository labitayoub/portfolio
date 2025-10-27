import React from 'react';
import { 
  User, Calendar, MapPin, Phone, Mail, Briefcase, GraduationCap, Building2, Code 
} from 'lucide-react';

const About = () => {
  const personalInfo = {
    name: "Labit Ayoub",
    location: "Casa, MAROC",
    phone: "+212 622 734 781",
    email: "ayoub.labite@gmail.com",
    freelance: "Disponible",
  };

  const educationalInfo = [
    
    {
      type: "formation",
      title: "Baccalauréat",
      location: "Lycée Ibnou Sina Guelmim, Guelmim",
      period: "Septembre 2017",
      description: "Obtention du diplôme du baccalauréat avec mention."
    },
    {
      type: "formation",
      title: "Technicien Agent Technique de Vente (ATV)",
      location: 'ISTA NTIC "OFPPT", Guelmim',
      period: "Septembre 2018 - Août 2020",
      description: "Formation en techniques de vente, conseil client, gestion commerciale et suivi de la clientèle."
    },
    {
      type: "formation",
      title: "Technicien Spécialisé en Commerce (TSC)",
      location: 'ISTA NTIC "OFPPT", Guelmim',
      period: "Mars 2022 - Mai 2022",
      description: "Spécialisation en e-commerce, techniques web, marketing digital, gestion de projets et innovation numérique."
    },
    {
      type: "formation",
      title: "Développement Web",
      location: '"AjiCode Agency", Agadir',
      period: "Septembre 2022 - Mai 2023",
      description: "Formation complète en développement web : concepts web, design, développement, JavaScript, C, PHP et stack MERN."
    },
    {
      type: "stage",
      title: "Stage de Développement Full Stack",
      location: "InoveTeam Agency, Casablanca",
      period: "Juin 2024 - Août 2024",
      description: "Développement de solutions web en utilisant Vtiger, React.js et PHP pour optimiser les processus métier."
    },
    {
      type: "formation",
      title: "Développeur et Concepteur d'Applications Web et Mobile",
      location: 'YouCode | UM6P, El Youssofia',
      period: "Septembre 2024 - En cours",
      description: "Formation intensive en développement d'applications web et mobiles avec les technologies modernes."
    }
  ];

  const technicalSkills = [
    "C Language", "HTML/CSS", "JavaScript (ES6+)", "Tailwind CSS", "Bootstrap","Figma",
    "React.js", "Node.js", "MongoDB", "Next.js", "MySQL", "REST API", "PHP", "Laravel", "SQL", "Docker"
  ];

  return (
    <div className="w-full min-h-screen flex flex-col px-4 sm:px-6 lg:px-16 xl:px-24 py-6 lg:py-10">
      <div className="flex items-center justify-center lg:justify-start mb-8 lg:mb-10">
        <span className="text-2xl lg:text-3xl font-semibold">À Propos</span>
        <div className="w-24 sm:w-32 lg:w-40 h-1 ml-4 lg:ml-6 rounded-full bg-gradient-to-r from-accent to-primary"></div>
      </div>

      <div className="bg-secondary/50 rounded-xl p-5 lg:p-6 shadow-lg mb-6 lg:mb-8 bg-gradient-to-t from-backdrop-blur-md to-transparent backdrop-blur-md">
        <div className="flex items-center mb-5">
          <User className="w-5 h-5 text-accent mr-3" />
          <h2 className="text-lg lg:text-xl font-semibold">Informations Personnelles</h2>
        </div>
        <div className="flex flex-wrap items-center gap-4 lg:gap-6">
          {Object.entries(personalInfo).map(([key, value], index) => (
            <div key={index} className="flex items-center gap-2">
              {key === "name" && <User className="w-4 h-4 text-accent flex-shrink-0" />}
              {key === "location" && <MapPin className="w-4 h-4 text-accent flex-shrink-0" />}
              {key === "phone" && <Phone className="w-4 h-4 text-accent flex-shrink-0" />}
              {key === "email" && <Mail className="w-4 h-4 text-accent flex-shrink-0" />}
              {key === "freelance" && <Briefcase className="w-4 h-4 text-accent flex-shrink-0" />}
              <p className="font-medium text-sm lg:text-base whitespace-nowrap">{value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        
        <div className="lg:col-span-1 flex flex-col bg-gradient-to-t from-backdrop-blur-md to-transparent backdrop-blur-md">
          <div className="bg-secondary/50 rounded-xl p-5 lg:p-6 shadow-lg h-full">
            <div className="flex items-center mb-5">
              <Code className="w-5 h-5 text-accent mr-3" />
              <h3 className="text-lg lg:text-xl font-semibold">Compétences Techniques</h3>
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="flex items-center gap-2 p-2.5 lg:p-3 rounded-lg hover:bg-accent/10 transition-colors ">
                  <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                  <span className="text-xs lg:text-sm font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 flex flex-col bg-secondary/50 rounded-xl p-5 lg:p-6 xl:p-7 shadow-lg bg-gradient-to-t from-backdrop-blur-md to-transparent backdrop-blur-md">
          <div className="flex items-center mb-6">
            <GraduationCap className="w-5 h-5 text-accent mr-3" />
            <h2 className="text-lg lg:text-xl font-semibold">Formation & Expérience</h2>
          </div>
          <div className="space-y-6">
            {educationalInfo.slice().reverse().map((item, index) => (
              <div key={index} className="group relative bg-secondary rounded-xl p-4 lg:p-5 shadow-md hover:bg-secondary/80 hover:bg-gray-800 transition-colors cursor-pointer ">
                {/* Title + Badge */}
                <div className="flex items-center justify-between">
                  
                  <h3 className="font-semibold text-base lg:text-lg">{item.title}</h3>
                  <span className={`px-3 py-1.5 lg:px-4 lg:py-2 rounded-full text-sm font-medium flex-shrink-0 bg-accent/20 text-accent}`}>
                    {item.type === 'formation' ? 'Formation' : 'Stage'}
                  </span>
                </div>
                {/* Hidden Details until hover */}
                <div className="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-96 transition-all duration-300 overflow-hidden mt-2">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <p className="text-gray-400 text-sm lg:text-base">{item.location}</p>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-400 text-sm lg:text-base font-medium">{item.period}</span>
                  </div>
                  <p className="text-sm lg:text-base text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
