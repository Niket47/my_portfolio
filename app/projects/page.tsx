'use client';

import { Github, ExternalLink, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { allProjects } from '@/data/projects';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function ProjectsPage() {
  const router = useRouter();
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <section className="py-24 sm:py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 sm:mb-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-black/40 hover:text-black transition-colors font-mono uppercase tracking-widest text-xs mb-6"
              >
                <ArrowLeft size={14} />
                <span>Back to Home</span>
              </Link>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-black font-sans tracking-tight">All Projects</h1>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-black/40 text-sm sm:text-base max-w-md font-mono"
            >
              A comprehensive showcase of my work, ranging from full-stack web applications to complex mobile solutions.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {allProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => router.push(`/projects/${project.slug}`)}
                className="group border border-black/10 rounded-[2rem] overflow-hidden flex flex-col cursor-pointer hover:border-black transition-all duration-500 bg-white shadow-sm hover:shadow-2xl"
              >
                {/* Project Image Container */}
                <div className={`aspect-[4/3] relative overflow-hidden flex items-center justify-center ${project.isLogo ? 'bg-white p-12' : 'bg-black/5'}`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className={project.isLogo ? 'object-contain' : 'object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out'}
                  />
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <span className="text-white font-bold text-sm uppercase tracking-widest border-2 border-white px-6 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      View Case Study
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="text-[10px] font-mono uppercase tracking-wider text-black/40 bg-black/5 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-black font-sans mb-6 tracking-tight group-hover:text-black/70 transition-colors">
                    {project.title}
                  </h3>

                  {/* Buttons */}
                  <div className="flex flex-col gap-3 mt-auto" onClick={(e) => e.stopPropagation()}>
                    <button
                      onClick={() => router.push(`/projects/${project.slug}`)}
                      className="w-full px-4 py-3 bg-black text-white border-2 border-black rounded-xl font-bold hover:bg-white hover:text-black transition-all text-center text-[10px] uppercase tracking-widest flex items-center justify-center gap-2"
                    >
                      Case Study
                    </button>
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-3 bg-white border border-black text-black font-bold rounded-xl hover:bg-black hover:text-white transition-all text-center text-[10px] uppercase tracking-widest flex items-center justify-center gap-2"
                      >
                        <Github size={14} />
                        Github
                      </a>
                      {project.live !== '#' && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 px-4 py-3 bg-white border border-black text-black font-bold rounded-xl hover:bg-black hover:text-white transition-all text-center text-[10px] uppercase tracking-widest flex items-center justify-center gap-2"
                        >
                          <ExternalLink size={14} />
                          Visit
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
