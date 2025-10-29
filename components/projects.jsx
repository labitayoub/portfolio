import React from 'react'
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiMongodb, SiExpress, SiRedux, SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";
import Image from 'next/image';

const Projects = () => {
  // Projects data
  const projectsData = [
    {
      id: 1,
      title: "Gestion Scolaire V2",
  description: "Application de gestion scolaire dynamique avec système d&apos;authentification sécurisé par jeton. Permet aux utilisateurs d&apos;effectuer des opérations CRUD complètes (ajout, suppression, mise à jour) sur les données. Développée avec Node.js, Express et MongoDB, utilisant Redux pour une gestion optimisée de l&apos;état.",
      image: "/gestion-vid.mp4",
      isVideo: true,
      technologies: [
        { name: "React", icon: FaReact },
        { name: "Node.js", icon: FaNodeJs },
        { name: "MongoDB", icon: SiMongodb },
        { name: "Express", icon: SiExpress },
        { name: "Redux", icon: SiRedux }
      ],
      githubUrl: "https://github.com/LabitAyoub/gestion-scolaire-v2",
      liveUrl: "https://gestion-scolaire-demo.com"
    },
    {
      id: 2,
      title: "Portfolio Personnel",
      description: "Portfolio moderne et entièrement responsive développé avec Next.js et Tailwind CSS. Interface épurée avec des animations fluides, optimisation SEO avancée et design adaptatif pour tous les appareils.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop&crop=entropy&auto=format&q=60",
      isVideo: false,
      technologies: [
        { name: "Next.js", icon: SiNextdotjs },
        { name: "Tailwind", icon: SiTailwindcss },
        { name: "TypeScript", icon: SiTypescript }
      ],
      githubUrl: "https://github.com/LabitAyoub/Portfolio",
      liveUrl: ""
    },
    {
      id: 3,
      title: "Plateforme E-commerce",
  description: "Plateforme e-commerce complète et robuste incluant la gestion avancée des produits, panier d&apos;achat intelligent, système de paiement sécurisé et tableau de bord administrateur complet pour la gestion des commandes.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=entropy&auto=format&q=60",
      isVideo: false,
      technologies: [
        { name: "React", icon: FaReact },
        { name: "Node.js", icon: FaNodeJs },
        { name: "MongoDB", icon: SiMongodb }
      ],
      githubUrl: "#",
      liveUrl: ""
    }
  ];

  return (
    <div className='w-full overflow-x-hidden px-4 sm:px-6 lg:px-16 xl:px-24 pb-28'>
      {/* Section Header - matching About component style */}
      <div className='flex items-center mb-8 lg:mb-10'>
        <span className='inline text-xl font-semibold'>Projets</span>
        <div className='w-32 h-1 ml-4 rounded-full bg-gradient-to-r from-accent to-primary'></div>
      </div>

      {/* Projects Grid */}
      <div className='w-full min-w-0'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8'>
          {projectsData.map((project) => (
            <div key={project.id} className='group h-full min-w-0 bg-gradient-to-t from-backdrop-blur-md to-transparent backdrop-blur-md'>
              {/* Project Card */}
              <div className='bg-transparent rounded-[20px] overflow-hidden transition-all duration-300 hover:transform hover:scale-105 shadow-blue h-full flex flex-col w-full'>
                {/* Image/Video Container */}
                <div className='relative h-[200px] sm:h-[250px] rounded-[20px] overflow-hidden mb-4 flex-shrink-0'>
                  {project.isVideo ? (
                    <video 
                      loop 
                      autoPlay 
                      muted 
                      playsInline
                      className='w-full h-full object-cover rounded-[20px]'
                    >
                      <source src={project.image} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <Image 
                      src={project.image} 
                      alt={project.title}
                      width={600}
                      height={400}
                      className='w-full h-full object-cover rounded-[20px]'
                    />
                  )}
                  
                  {/* Hover Overlay */}
                  <div className='absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[20px] flex items-center justify-center'>
                    <div className='flex space-x-4'>
                      {project.githubUrl && project.githubUrl !== "#" && (
                        <a 
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className='w-12 h-12 bg-accent text-primary rounded-full flex items-center justify-center hover:bg-accent-hover transition-colors duration-200'
                        >
                          <FaGithub className='w-5 h-5' />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className='w-12 h-12 bg-white text-primary rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-200'
                        >
                          <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                            <path fillRule='evenodd' d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z' clipRule='evenodd'></path>
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className='px-4 pb-2 flex-grow flex flex-col min-w-0 w-full'>
                  <h3 className='text-white text-lg sm:text-xl font-bold mb-2 break-words'>{project.title}</h3>
                  <p className='text-gray-400 text-xs sm:text-sm mb-4 leading-relaxed line-clamp-3 flex-grow break-words'>{project.description}</p>
                  
                  {/* Technologies */}
                  <div className='flex flex-wrap gap-2 sm:gap-3 mb-4 overflow-hidden w-full'>
                    {project.technologies.map((tech, index) => (
                      <div key={index} className='flex items-center space-x-1 sm:space-x-2 flex-shrink-0 min-w-0'>
                        <span className='text-white text-xs sm:text-sm truncate'>{tech.name}</span>
                        <tech.icon className='text-accent text-base sm:text-lg flex-shrink-0' />
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className='flex flex-col sm:flex-row gap-2 sm:gap-3 mt-auto min-w-0 w-full'>
                    {project.githubUrl && project.githubUrl !== "#" && (
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='flex items-center justify-center space-x-2 px-4 py-2 border border-accent text-accent rounded-lg hover:bg-accent hover:text-primary transition-all duration-200 text-sm'
                      >
                        <FaGithub className='w-4 h-4' />
                        <span>Code</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='flex items-center justify-center space-x-2 px-4 py-2 bg-accent text-primary rounded-lg hover:bg-accent-hover transition-all duration-200 text-sm'
                      >
                        <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                          <path fillRule='evenodd' d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z' clipRule='evenodd'></path>
                        </svg>
                        <span>Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects