'use client';

import Image from 'next/image';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  category: string[];
  image: string;
  description: string;
  startDate: string;
  endDate: string;
}

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects: Project[] = [
    { id: 1, title: 'Minitry Of Health - Formulary', category: ['Android','Design','Ios','Mobile App'], image: '/images/portfolio/moh.PNG', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", startDate: '2023-01-10', endDate: '2023-02-15' },
    { id: 2, title: 'Skoolify', category: ['Android','Design','Ios'], image: '/images/portfolio/skoolify.jpg', description: 'Crafted a vibrant brand identity with gradient-based design for a modern look.', startDate: '2023-03-01', endDate: '2023-04-20' },
    { id: 3, title: 'Spplycity', category: ['Development'], image: '/images/portfolio/spplucity.jpg', description: 'Designed an intuitive UI for a data-driven dashboard, optimizing user experience.', startDate: '2023-05-05', endDate: '2023-06-30' },
    { id: 4, title: 'Saztex', category: ['Development'], image: '/images/portfolio/saztex.jpg', description: 'Built a scalable online store with seamless navigation and secure checkout.', startDate: '2023-07-10', endDate: '2023-09-25' },
    { id: 5, title: 'Joyages', category: ['Design','Development'], image: '/images/portfolio/joyages.jpg', description: 'Developed a secure mobile banking app with real-time transaction tracking.', startDate: '2023-10-01', endDate: '2023-12-15' },
    { id: 6, title: 'Icmap Hybrid App', category: ['Mobile App'], image: '/images/portfolio/icma.jpg', description: 'Created a sleek portfolio site showcasing creative work with responsive design.', startDate: '2024-01-05', endDate: '2024-02-28' },
    { id: 7, title: 'Career Vision App', category: ['Design','Mobile App'], image: '/images/portfolio/career.jpg', description: 'Engineered a social platform with engaging features for seamless user interaction.', startDate: '2024-03-10', endDate: '2024-05-20' },
    { id: 8, title: 'Ahsan Ul Uloom', category: ['Design','Mobile App'], image: '/images/portfolio/portfolio-Ahsan-Ul-Uloom.jpg', description: 'Designed a cohesive brand kit with logos, typography, and color schemes.', startDate: '2024-06-01', endDate: '2024-07-15' },
    { id: 9, title: 'Mosque Finder', category: ['Design','Mobile App'], image: '/images/portfolio/portfolio-find.jpg', description: "Revamped a legacy app's UI/UX for improved usability and modern aesthetics.", startDate: '2024-08-01', endDate: '2024-09-30' },
    { id: 10, title: 'Red Dot Media', category: ['Design','Development'], image: '/images/portfolio/Red-Dot-Media-500x353.PNG', description: 'Built an interactive e-learning platform with robust course management.', startDate: '2024-10-10', endDate: '2024-12-20' },
    { id: 11, title: 'Elite Estates', category: ['Branding','Design','Development'], image: '/images/portfolio/elite.PNG', description: 'Developed a fitness app with real-time activity tracking and goal setting.', startDate: '2025-01-05', endDate: '2025-03-15' },
    { id: 12, title: 'Paperless Technology', category: ['Design','Development'], image: '/images/portfolio/paperless.png', description: 'Created a professional brand identity for a corporate client with a global reach.', startDate: '2025-04-01', endDate: '2025-05-30' },
    { id: 13, title: 'Eet App', category: ['Design','Development','Mobile App'], image: '/images/portfolio/eetapp-screen-1-500x364.png', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", startDate: '2023-01-10', endDate: '2023-02-15' },
    { id: 14, title: 'Skycomex', category: ['Development'], image: '/images/portfolio/skycom.png', description: 'Crafted a vibrant brand identity with gradient-based design for a modern look.', startDate: '2023-03-01', endDate: '2023-04-20' },
    { id: 15, title: 'Just Gps Tracking', category: ['Development'], image: '/images/portfolio/Just-GPS-Tracking-400x500.png', description: 'Designed an intuitive UI for a data-driven dashboard, optimizing user experience.', startDate: '2023-05-05', endDate: '2023-06-30' },
    { id: 16, title: 'Respocare International', category: ['Development'], image: '/images/portfolio/respocare-297x500.png', description: 'Built a scalable online store with seamless navigation and secure checkout.', startDate: '2023-07-10', endDate: '2023-09-25' },
    { id: 17, title: 'Kenyans Come Home', category: ['Development'], image: '/images/portfolio/Kenyans-Come-Home-376x500.Png', description: 'Developed a secure mobile banking app with real-time transaction tracking.', startDate: '2023-10-01', endDate: '2023-12-15' },
    { id: 18, title: 'Dubuzz', category: ['Development'], image: '/images/portfolio/dubuzz-dubuzz-500x349.png', description: 'Created a sleek portfolio site showcasing creative work with responsive design.', startDate: '2024-01-05', endDate: '2024-02-28' },
    { id: 19, title: 'The Star Enterprises', category: ['Development'], image: '/images/portfolio/Star-Enterprises-338x500.png', description: 'Engineered a social platform with engaging features for seamless user interaction.', startDate: '2024-03-10', endDate: '2024-05-20' },
    { id: 20, title: 'General Food Trading', category: ['Development'], image: '/images/portfolio/General-Food-Trading-500x349.png', description: 'Designed a cohesive brand kit with logos, typography, and color schemes.', startDate: '2024-06-01', endDate: '2024-07-15' },
    { id: 21, title: 'Lifeguard Aquastics', category: ['Development'], image: '/images/portfolio/Lifegard-Aquatics-371x500.png', description: "Revamped a legacy app's UI/UX for improved usability and modern aesthetics.", startDate: '2024-08-01', endDate: '2024-09-30' },
    { id: 22, title: 'Momentum Beauty', category: ['Development'], image: '/images/portfolio/Untitled-1-300x243.png', description: 'Built an interactive e-learning platform with robust course management.', startDate: '2024-10-10', endDate: '2024-12-20' },
    { id: 23, title: 'Build Up', category: ['Design','Development'], image: '/images/portfolio/Build-UP-500x359.png', description: 'Developed a fitness app with real-time activity tracking and goal setting.', startDate: '2025-01-05', endDate: '2025-03-15' },
    { id: 24, title: 'Dream Of The Sea', category: ['Branding'], image: '/images/portfolio/Dreams-of-the-Sea-500x359.png', description: 'Created a professional brand identity for a corporate client with a global reach.', startDate: '2025-04-01', endDate: '2025-05-30' },
  ];

  const carouselImages = [
    '/images/portfolio/image-1.jpg',
    '/images/portfolio/image-2.jpg',
    '/images/portfolio/image-3.jpg',
    '/images/portfolio/image-4.jpg',
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((project) =>project.category.includes(activeFilter));

  const handleShowMore = () => {
    setVisibleProjects((prev) => Math.min(prev + 6, filteredProjects.length));
  };

  const handleShowLess = () => {
    setVisibleProjects((prev) => Math.max(prev - 6, 6));
  };

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedProject(null);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <>
      <div>
        <Navbar />
        <main className="min-h-screen bg-white dark:bg-dark pt-[56px] sm:pt-[64px] lg:pt-[80px] fadeIn">
          <section id="projects" className="pt-14 sm:pt-20 lg:pt-[130px] fadeIn">
            <div className="container mx-auto px-4 xl:container">
              {/* Section Title */}
              <div className="wow fadeInUp relative mx-auto mb-12 pt-6 text-center md:mb-20 lg:pt-16" data-wow-delay=".2s">
          <span className="title"> PORTFOLIO </span>
                <h2 className="font-heading text-dark mb-5 text-3xl font-semibold sm:text-4xl md:text-[50px] md:leading-[60px] dark:text-white">
                  Explore Our Latest Projects
                </h2>
              </div>
              {/* Category Filter */}
              <div className="mb-16 flex items-center justify-center overflow-x-auto pb-2 space-x-2">
                {['All', 'Android', 'Branding', 'Design', 'Development','Ios','Mobile App'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`font-heading text-dark px-6 py-2 text-base whitespace-nowrap rounded-md transition-all duration-200 ${
                      activeFilter === cat
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 dark:bg-gray-800 dark:text-white hover:bg-primary hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              {/* Projects Flexbox */}
              <div className="flex flex-wrap gap-6 justify-center">
                {filteredProjects.slice(0, visibleProjects).map((project, index) => (
                  <div
                  key={project.id}
                  className="wow fadeInUp group relative overflow-hidden rounded-lg bg-white dark:bg-dark border border-gray-200 dark:border-gray-600 shadow-lg p-4 md:p-6 max-w-[400px] flex-1 min-w-[300px] lg:flex-none lg:w-[calc(33.333%-1.5rem)] cursor-pointer"
                  data-wow-delay={`.${2 + index * 0.05}s`}
                  onClick={() => openModal(project)}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={267}
                    className="w-full h-[267px] object-cover aspect-[3/2] transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute bottom-6 left-6 flex w-[calc(100%-48px)] items-center justify-between rounded-md bg-black/30 px-4 py-3 backdrop-blur-md opacity-0 transition-all duration-300 group-hover:opacity-100 sm:left-8 sm:px-6 sm:py-4 lg:left-6 lg:px-6 lg:py-4 xl:px-6">
                    <div className="border-r border-gray-300/30 pr-4 sm:pr-5 lg:pr-4 xl:pr-5">
                      <h3 className="font-heading text-base font-semibold text-white sm:text-xl lg:text-base xl:text-xl">{project.title}</h3>
                      <p className="text-sm text-gray-300 sm:text-base lg:text-sm xl:text-base">{project.category[0] || 'Uncategorized'}</p> {/* Show only the first category */}
                    </div>
                    <div className="pl-4 sm:pl-5 lg:pr-4 xl:pl-5">
                      <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-primary transition-colors duration-300">
                        <svg width="20" height="20" viewBox="0 0 20 20" className="fill-current">
                          <path d="M13.4767 9.16689L9.00671 4.69689L10.185 3.51855L16.6667 10.0002L10.185 16.4819L9.00671 15.3036L13.4767 10.8336H3.33337V9.16689H13.4767Z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                ))}
              </div>
              {/* Show More/Show Less Buttons */}
              {filteredProjects.length > 6 && (visibleProjects < filteredProjects.length || visibleProjects > 6) && (
                <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:space-x-4">
                  {visibleProjects < filteredProjects.length && (
                    <button
                      onClick={handleShowMore}
                      className="submit-button bg-primary hover:bg-primary/90 font-heading text-white text-base px-6 py-4 rounded-md transition-all duration-200"
                    >
                      Show More Projects
                    </button>
                  )}
                  {visibleProjects > 6 && (
                    <button
                      onClick={handleShowLess}
                      className="submit-button bg-primary hover:bg-primary/90 font-heading text-white text-base px-6 py-4 rounded-md transition-all duration-200"
                    >
                      Show Less Projects
                    </button>
                  )}
                </div>
              )}
            </div>
          </section>
        </main>
        <div className="h-8" />
        <Footer />
      </div>
      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[10000] flex items-start justify-center bg-black/60 backdrop-blur-md py-8 overflow-y-auto" onClick={closeModal}>
          <div
            className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-[90vw] md:max-w-3xl p-8 md:p-12"
            style={{ animation: 'fadeInUp 0.5s ease-out forwards' }}
            onClick={(e) => e.stopPropagation()}
          >
            <style jsx>{`
              @keyframes fadeInUp {
                from {
                  opacity: 0;
                  transform: translateY(20px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
              .date-badge {
                border: 2px solid #3b82f6;
                border-radius: 0.75rem;
                padding: 0.5rem 1rem;
                font-size: 0.9rem;
                font-weight: 600;
                color: #3b82f6;
                background-color: transparent;
                transition: all 0.3s ease;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
              }
              .dark .date-badge {
                border-color: #93c5fd;
                color: #93c5fd;
                background-color: rgba(255, 255, 255, 0.05);
              }
              .date-badge:hover {
                transform: translateY(-2px);
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
              }
              .carousel-button {
                background: linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7));
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
                transition: all 0.3s ease;
              }
              .dark .carousel-button {
                background: linear-gradient(145deg, rgba(55, 65, 81, 0.9), rgba(55, 65, 81, 0.7));
              }
              .carousel-button:hover {
                transform: scale(1.1);
                box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
                background: #3b82f6;
              }
              .dark .carousel-button:hover {
                background: #93c5fd;
              }
              .text-content {
                max-height: 40vh;
                overflow-y: auto;
                overflow-x: hidden;
                padding-right: 1rem;
                margin-right: 0.5rem;
                box-sizing: content-box;
              }
              .text-content::-webkit-scrollbar {
                width: 6px;
              }
              .text-content::-webkit-scrollbar-track {
                background: #f1f5f9;
                border-radius: 8px;
                margin: 0.5rem 0;
                box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.1);
              }
              .dark .text-content::-webkit-scrollbar-track {
                background: #1f2937;
                box-shadow: inset 0 0 4px rgba(255, 255, 255, 0.1);
              }
              .text-content::-webkit-scrollbar-thumb {
                background: linear-gradient(180deg, #3b82f6, #2563eb);
                border-radius: 8px;
                border: 1px solid #f1f5f9;
              }
              .dark .text-content::-webkit-scrollbar-thumb {
                background: linear-gradient(180deg, #93c5fd, #60a5fa);
                border: 1px solid #1f2937;
              }
              .text-content::-webkit-scrollbar-thumb:hover {
                background: linear-gradient(180deg, #2563eb, #1e40af);
              }
              .dark .text-content::-webkit-scrollbar-thumb:hover {
                background: linear-gradient(180deg, #60a5fa, #3b82f6);
              }
            `}</style>
            {/* <button
              onClick={closeModal}
              className="absolute top-4 right-4 close-button text-white p-3 rounded-full transition-all duration-300"
              aria-label="Close modal"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" className="fill-current">
                <path d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59 7.11 5.7a.996.996 0 1 0-1.41 1.41L10.59 12l5.89 5.89a.996.996 0 1 0 1.41-1.41L12 10.59l4.89-4.89a.996.996 0 0 0 0-1.41z" />
              </svg>
            </button> */}
            <div className="space-y-8">
              <div className="relative group">
                <Image
                  src={carouselImages[currentImageIndex]}
                  alt={`${selectedProject.title} carousel image`}
                  width={800}
                  height={533}
                  className="w-full h-[400px] md:h-[500px] object-cover rounded-xl shadow-lg transition-transform duration-500 group-hover:scale-105"
                />
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 carousel-button rounded-full p-3 transition-all duration-300"
                  aria-label="Previous image"
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" className="fill-current text-black dark:text-black">
                    <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z" />
                  </svg>
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 carousel-button rounded-full p-3 transition-all duration-300"
                  aria-label="Next image"
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" className="fill-current text-black dark:text-black">
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
                  </svg>
                </button>
              </div>
              <div className="text-content text-center space-y-6">
                <div className="flex flex-col items-center justify-center gap-6">
                  <h3 className="font-heading text-dark dark:text-white text-2xl md:text-3xl font-bold tracking-tight">{selectedProject.title}</h3>
                  <div className="flex items-center gap-6 flex-wrap justify-center">
                    <div className="flex items-center gap-4">
                      <span
                        className="text-gray-700 dark:text-gray-200 text-sm font-semibold"
                        style={{ color: typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#e5e7eb' : '#374151' }}
                      >
                        Start:
                      </span>
                      <span className="date-badge">{selectedProject.startDate}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span
                        className="text-gray-700 dark:text-gray-200 text-sm font-semibold"
                        style={{ color: typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#e5e7eb' : '#374151' }}
                      >
                        End:
                      </span>
                      <span className="date-badge">{selectedProject.endDate}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">{selectedProject.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}