import React from 'react';
import { 
  User, Calendar, MapPin, Phone, Mail, Briefcase, GraduationCap, Building2, Code, Award
} from 'lucide-react';

const About = () => {
  const personalInfo = {
    name: "Labit Ayoub - Développeur Mern Stack",
    location: "Casablanca, MAROC",
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
      <div className="bg-secondary/50 rounded-xl p-5 lg:p-6 shadow-lg mb-6 lg:mb-8 border border-accent/20">
        <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
          Je suis Développeur Full Stack passionné par la création d&apos;applications web modernes et performantes. Mon expertise couvre tout le cycle de développement, du front-end au back-end, avec une attention particulière à la qualité du code et à l&apos;expérience utilisateur.
        </p>
      </div>

      <div className="bg-secondary/50 rounded-xl p-5 lg:p-6 shadow-lg mb-6 lg:mb-8 border border-accent/20">
        <div className="flex items-center mb-5 pb-4 border-b border-accent/30">
          <User className="w-6 h-6 text-accent mr-3" />
          <h2 className="text-xl lg:text-2xl font-bold text-white">Informations Personnelles</h2>
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
        
        <div className="lg:col-span-1 flex flex-col">
          <div className="bg-secondary/50 rounded-xl p-5 lg:p-6 shadow-lg h-full border border-accent/20">
            <div className="flex items-center mb-5 pb-4 border-b border-accent/30">
              <Code className="w-6 h-6 text-accent mr-3" />
              <h3 className="text-xl lg:text-2xl font-bold text-white">Compétences Techniques</h3>
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

        <div className="lg:col-span-2 flex flex-col bg-secondary/50 rounded-xl p-5 lg:p-6 xl:p-7 shadow-lg border border-accent/20">
          <div className="flex items-center mb-6 pb-4 border-b border-accent/30">
            <Building2 className="w-6 h-6 text-accent mr-3" />
            <h2 className="text-xl lg:text-2xl font-bold text-white">Expérience, Formation & Certifications</h2>
          </div>
          <div className="space-y-6">
            {/* Expériences */}
            <div className="mb-10">
              <div className="flex items-center mb-6">
                <div className="flex items-center gap-3 px-4 py-2 bg-accent/10 rounded-lg border border-accent/30">
                  <Briefcase className="w-5 h-5 text-accent" />
                  <h3 className="text-lg lg:text-xl font-bold text-accent">Expériences Professionnelles</h3>
                </div>
              </div>
              {experiences.map((item, index) => (
                <div key={index} className="relative bg-secondary/70 rounded-xl p-5 lg:p-6 shadow-lg hover:shadow-xl border border-accent/20 hover:border-accent/40 transition-all duration-300 mb-5 group">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 transition-colors">
                      <Briefcase className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg lg:text-xl text-white mb-3">{item.title}</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm lg:text-base">
                          <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                          <span className="text-gray-400">{item.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm lg:text-base">
                          <Calendar className="w-4 h-4 text-accent flex-shrink-0" />
                          <span className="text-accent font-semibold">{item.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pl-16">
                    <p className="text-sm lg:text-base text-gray-300 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Formations */}
            <div className="mb-10">
              <div className="flex items-center mb-6">
                <div className="flex items-center gap-3 px-4 py-2 bg-accent/10 rounded-lg border border-accent/30">
                  <GraduationCap className="w-5 h-5 text-accent" />
                  <h3 className="text-lg lg:text-xl font-bold text-accent">Formations Académiques</h3>
                </div>
              </div>
              {formations.map((item, index) => (
                <div key={index} className="relative bg-secondary/70 rounded-xl p-5 lg:p-6 shadow-lg hover:shadow-xl border border-accent/20 hover:border-accent/40 transition-all duration-300 mb-5 group">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 transition-colors">
                      <GraduationCap className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg lg:text-xl text-white mb-3">{item.title}</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm lg:text-base">
                          <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                          <span className="text-gray-400">{item.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm lg:text-base">
                          <Calendar className="w-4 h-4 text-accent flex-shrink-0" />
                          <span className="text-accent font-semibold">{item.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pl-16">
                    <p className="text-sm lg:text-base text-gray-300 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center mb-6">
                <div className="flex items-center gap-3 px-4 py-2 bg-accent/10 rounded-lg border border-accent/30">
                  <Award className="w-5 h-5 text-accent" />
                  <h3 className="text-lg lg:text-xl font-bold text-accent">Certifications</h3>
                </div>
              </div>
              {certifications.map((item, index) => (
                <div key={index} className="relative bg-secondary/70 rounded-xl p-5 lg:p-6 shadow-lg hover:shadow-xl border border-accent/20 hover:border-accent/40 transition-all duration-300 mb-5 group">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 transition-colors">
                      <Award className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg lg:text-xl text-white mb-3">{item.title}</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm lg:text-base">
                          <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                          <span className="text-gray-400">{item.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm lg:text-base">
                          <Calendar className="w-4 h-4 text-accent flex-shrink-0" />
                          <span className="text-accent font-semibold">{item.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pl-16">
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
