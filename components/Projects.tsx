'use client';

import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { allProjects } from '@/data/projects';
import { motion } from 'framer-motion';

export default function Projects() {
  const router = useRouter();
  const displayedProjects = allProjects.slice(0, 6);

  return (
    <section id="projects" className="py-20 sm:py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-24"
        >
          <p className="text-black/40 mb-3 font-mono uppercase tracking-[0.3em] text-xs">Selection</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-black font-sans tracking-tight">Recent Projects</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
                  {project?.app_link !== '' && (
                    <a
                      href={project?.app_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-3 border-2 border-black text-black rounded-full font-bold hover:bg-black hover:text-white transition-all text-xs uppercase tracking-widest flex items-center justify-center gap-2"
                    >
                      <ExternalLink size={16} />
                      Visit Site
                    </a>
                  )}
                  <div className="flex gap-3">
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

        {/* Browse All Button - Bottom Center */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 sm:mt-24 flex justify-center"
        >
          <Link
            href="/projects"
            className="px-10 py-4 bg-black text-white rounded-full font-bold hover:bg-white hover:text-black border-2 border-black transition-all text-xs uppercase tracking-[0.2em] flex items-center gap-3 shadow-xl hover:shadow-none"
          >
            <span>Browse All Projects</span>
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
