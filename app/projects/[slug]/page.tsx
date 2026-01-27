import { notFound } from 'next/navigation';
import { allProjects } from '@/data/projects';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft, Github, ExternalLink, Calendar, Layers } from 'lucide-react';
import Image from 'next/image';
import { readFileSync } from 'fs';
import { join } from 'path';

interface ProjectDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.slug,
  }));
}

async function getCaseStudyContent(slug: string): Promise<string> {
  try {
    const filePath = join(process.cwd(), 'content', 'projects', `${slug}.mdx`);
    return readFileSync(filePath, 'utf-8');
  } catch (error) {
    return '';
  }
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = allProjects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const caseStudyContent = await getCaseStudyContent(params.slug);

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-5xl">
          {/* Top Bar */}
          <div className="mb-12">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-black/40 hover:text-black transition-colors font-mono uppercase tracking-widest text-[10px]"
            >
              <ArrowLeft size={14} />
              <span>Back to Projects</span>
            </Link>
          </div>

          {/* Header Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-black font-sans tracking-tight mb-8">
                {project.title}
              </h1>

              <div className="flex flex-col gap-6">
                {project.timeframe && (
                  <div className="flex items-center gap-3 text-black/40 font-mono text-sm uppercase tracking-widest">
                    <Calendar size={16} />
                    <span>{project.timeframe}</span>
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-black/5 text-black/60 font-mono text-[10px] uppercase tracking-widest rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 mt-4">
                  {/* <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 bg-black text-white border-2 border-black rounded-full font-bold hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-widest"
                  >
                    <Github size={16} />
                    GitHub
                  </a> */}
                  {project.app_link !== '' && (
                    <a
                      href={project.app_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-3 border-2 border-black text-black rounded-full font-bold hover:bg-black hover:text-white transition-all text-xs uppercase tracking-widest flex items-center justify-center gap-2"
                    >
                      <ExternalLink size={16} />
                      Visit Site
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <p className="text-black/60 text-lg sm:text-xl leading-relaxed font-mono italic border-l-4 border-black/10 pl-8">
                {project.description}
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className={`aspect-[16/9] relative rounded-[2.5rem] overflow-hidden border border-black/10 mb-24 shadow-2xl ${project.isLogo ? 'bg-white p-20' : 'bg-black/5'}`}>
            <Image
              src={project.image}
              alt={project.title}
              fill
              className={project.isLogo ? 'object-contain' : 'object-cover'}
              priority
            />
          </div>

          {/* Content Section */}
          <div className="max-w-3xl mx-auto">
            {caseStudyContent ? (
              <div className="prose prose-neutral prose-lg max-w-none prose-headings:font-sans prose-headings:tracking-tight prose-headings:font-bold prose-p:font-mono prose-p:text-black/70 prose-strong:text-black prose-li:font-mono">
                {/* 
                  Note: In a real production app, we would use next-mdx-remote or contentlayer 
                  to properly render MDX. For now, we improve the display of the raw content.
                */}
                <div className="whitespace-pre-wrap leading-relaxed">
                  {caseStudyContent}
                </div>
              </div>
            ) : (
              <div className="text-center py-20 bg-black/[0.02] rounded-[2rem] border-2 border-dashed border-black/10">
                <Layers className="mx-auto text-black/10 mb-6" size={48} />
                <h2 className="text-2xl font-bold text-black/20 font-sans uppercase tracking-widest">Case Study Coming Soon</h2>
                <p className="text-black/20 font-mono mt-2">I am currently documenting the process for this project.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
