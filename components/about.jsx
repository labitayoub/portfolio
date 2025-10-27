import React from 'react';
import { 
  User, Calendar, MapPin, Phone, Mail, Briefcase, GraduationCap, Building2, Code, Award
} from 'lucide-react';

const About = () => {
  const personalInfo = {
    name: "Labit Ayoub - Développeur Mern Stack",
    location: "Casa, MAROC",
    phone: "+212 622 734 781",
    email: "ayoub.labite@gmail.com",
    freelance: "Disponible",
  };

  const experiences = [
    {
      title: "Développeur Full Stack",
      location: "Devstratech, Casablanca",
      period: "Juillet 2025 - Septembre 2025",
      description: "Développement full-stack des projets ATS et LMS, incluant la conception d'API RESTful avec Laravel et la création d'interfaces dynamiques en React.js. Réalisation d'interfaces modernes et responsives à l'aide de MUI et Tailwind CSS, avec conteneurisation des applications via Docker et gestion du code source sur Git/GitHub."
    },
    {
      title: "Agent Administratif et Financier",
      location: "Citibank Maghreb, Casablanca",
      period: "Décembre 2022 - Février 2024",
      description: "Supervision des opérations bancaires, suivi et contrôle pour conformité et sécurité. Gestion des produits bancaires et rapprochement back-office/front-office."
    },
    {
      title: "Chargé de Portefeuille",
      location: "Fondation Arrawaj (Microfinance)",
      period: "2021 - 2022",
      description: "Gestion et octroi de crédits, fidélisation et développement du portefeuille clients."
    },
    {
      title: "Assistant Administratif et Financier",
      location: "Ste MAZALU BEST, El Jadida",
      period: "Janvier 2021 - Décembre 2021",
      description: "Contrôle et enregistrement des factures, mise en paiement fournisseurs, classement et archivage des dossiers comptables et financiers."
    }
  ];

  const formations = [
    {
      title: "Développement Web Full Stack",
      location: "YouCode (UM6P), Yousoufia",
      period: "2024 - Présent",
      description: "Développement Web Full Stack"
    },
    {
      title: "Licence Fondamentale en Sciences Économiques et Gestion",
      location: "Faculté Polydisciplinaire de Khouribga",
      period: "2019",
      description: "Formation en sciences économiques et gestion."
    }
  ];

  const certifications = [
    {
      title: "Developing Front-End Apps with React",
      location: "IBM / Coursera",
      period: "2025",
      description: "Certification en développement d'applications front-end avec React."
    },
    {
      title: "Introduction to Cloud Computing",
      location: "IBM / Coursera",
      period: "2024",
      description: "Certification d'introduction au Cloud Computing."
    }
  ];

  const technicalSkills = [
    // Backend
    "Express.js", "PHP", "Laravel", "Node.js",
    // Frontend
    "React.js", "MUI", "Tailwind CSS", "Bootstrap", "JavaScript", "HTML/CSS",
    // Bases de données
    "MySQL", "PostgreSQL", "MongoDB",
    // Méthodologies
    "Agile (Scrum)",
    // Outils
    "Git/GitHub", "Docker", "XAMPP", "Figma",
    // Gestion de projet
    "Jira", "Notion", "Trello"
  ];

  return (
    <div className="w-full min-h-screen flex flex-col px-4 sm:px-6 lg:px-16 xl:px-24 py-6 lg:py-10">
      <div className="flex items-center justify-center lg:justify-start mb-8 lg:mb-10">
        <span className="text-2xl lg:text-3xl font-semibold">À Propos</span>
        <div className="w-24 sm:w-32 lg:w-40 h-1 ml-4 lg:ml-6 rounded-full bg-gradient-to-r from-accent to-primary"></div>
      </div>

      {/* Résumé Professionnel */}
      <div className="bg-secondary/50 rounded-xl p-5 lg:p-6 shadow-lg mb-6 lg:mb-8 bg-gradient-to-t from-backdrop-blur-md to-transparent backdrop-blur-md">
        <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
          Je suis Développeur Mern Stack
        </p>
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
            <Building2 className="w-5 h-5 text-accent mr-3" />
            <h2 className="text-lg lg:text-xl font-semibold">Expérience, Formation & Certifications</h2>
          </div>
          <div className="space-y-6">
            {/* Expériences */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <Briefcase className="w-5 h-5 text-accent mr-2" />
                <h3 className="text-base font-semibold">Expériences</h3>
              </div>
              {experiences.map((item, index) => (
                <div key={index} className="group relative bg-secondary rounded-xl p-4 lg:p-5 shadow-md hover:bg-secondary/80 hover:bg-gray-800 transition-colors cursor-pointer mb-4">
                  <h3 className="font-semibold text-base lg:text-lg mb-2">{item.title}</h3>
                  <div className="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-96 transition-all duration-300 overflow-hidden">
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

            {/* Formations */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <GraduationCap className="w-5 h-5 text-accent mr-2" />
                <h3 className="text-base font-semibold">Formations</h3>
              </div>
              {formations.map((item, index) => (
                <div key={index} className="group relative bg-secondary rounded-xl p-4 lg:p-5 shadow-md hover:bg-secondary/80 hover:bg-gray-800 transition-colors cursor-pointer mb-4">
                  <h3 className="font-semibold text-base lg:text-lg mb-2">{item.title}</h3>
                  <div className="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-96 transition-all duration-300 overflow-hidden">
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

            {/* Certifications */}
            <div>
              <div className="flex items-center mb-4">
                <Award className="w-5 h-5 text-accent mr-2" />
                <h3 className="text-base font-semibold">Certifications</h3>
              </div>
              {certifications.map((item, index) => (
                <div key={index} className="group relative bg-secondary rounded-xl p-4 lg:p-5 shadow-md hover:bg-secondary/80 hover:bg-gray-800 transition-colors cursor-pointer mb-4">
                  <h3 className="font-semibold text-base lg:text-lg mb-2">{item.title}</h3>
                  <div className="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-96 transition-all duration-300 overflow-hidden">
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
    </div>
  );
};

export default About;
