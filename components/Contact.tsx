'use client';

import { Mail, Linkedin, Phone } from 'lucide-react';
import { useEffect } from 'react';
import Cal, { getCalApi } from '@calcom/embed-react';
import { motion } from 'framer-motion';

export default function Contact() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: '30min' });
      cal('ui', {
        theme: 'light',
        hideEventTypeDetails: false,
        layout: 'month_view',
      });
    })();
  }, []);

  return (
    <section id="contact" className="py-20 sm:py-32 px-6 bg-black/[0.02]">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-24"
        >
          <p className="text-black/40 mb-3 font-mono uppercase tracking-[0.3em] text-xs">Let's Talk</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-black font-sans tracking-tight">Contact Me</h2>
        </motion.div>

        {/* Contact Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 sm:mb-24"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 lg:gap-16 flex-wrap">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center">
                <Mail size={20} />
              </div>
              <div>
                <h3 className="text-black font-bold font-sans uppercase tracking-widest text-xs mb-1">Email</h3>
                <a
                  href="mailto:dadyaniyaniket153@gmail.com"
                  className="text-black/60 hover:text-black transition-colors font-mono text-sm sm:text-base border-b border-black/10 hover:border-black"
                >
                  dadyaniyaniket153@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center">
                <Phone size={20} />
              </div>
              <div>
                <h3 className="text-black font-bold font-sans uppercase tracking-widest text-xs mb-1">Phone</h3>
                <a
                  href="tel:+919978892153"
                  className="text-black/60 hover:text-black transition-colors font-mono text-sm sm:text-base border-b border-black/10 hover:border-black"
                >
                  +91 9978892153
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center">
                <Linkedin size={20} />
              </div>
              <div>
                <h3 className="text-black font-bold font-sans uppercase tracking-widest text-xs mb-1">LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/niketdadhaniya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black/60 hover:text-black transition-colors font-mono text-sm sm:text-base border-b border-black/10 hover:border-black"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Cal.com Embed Section - Full Width Below */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full"
        >
          <div className="border border-black/10 rounded-[2.5rem] p-4 sm:p-8 md:p-12 overflow-hidden min-h-[600px] bg-white shadow-2xl">
            <Cal
              namespace="30min"
              calLink="niketdadhaniya"
              style={{ width: '100%', height: '100%', overflow: 'scroll' }}
              config={{
                layout: 'month_view',
                theme: 'light',
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
