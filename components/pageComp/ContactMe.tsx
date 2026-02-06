"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Mail, User, MessageSquare, ArrowRight } from "lucide-react";
import { BorderBeam } from "../ui/BorderBeam";

export function ContactSection() {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ email: "dsdsd", message: "dssds" });
    console.log("heeeeeer", formData);

    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <span className="text-sm font-medium text-blue-400 uppercase tracking-wider">
            Get in Touch
          </span>
          <h2 className="mt-2 text-4xl sm:text-5xl font-bold text-white">
            Let&apos;s Work{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Together
            </span>
          </h2>
          <p className="mt-4 text-zinc-400 max-w-xl mx-auto">
            Have a project in mind or just want to chat? Drop me a message and
            I&apos;ll get back to you as soon as possible.
          </p>
        </motion.div>

        {/* Contact Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative">
          {/* Border Beam Container */}
          <div className="relative rounded-3xl bg-zinc-900/50 backdrop-blur-sm p-1">
            <div className="relative rounded-3xl bg-zinc-950/80 p-8 sm:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Input */}
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="w-5 h-5 text-zinc-500 group-focus-within:text-blue-400 transition-colors" />
                  </div>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="your@email.com"
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-zinc-900/50 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                  />
                  <input type="password" className="hidden" />
                </div>

                {/* Message Textarea */}
                <div className="relative group">
                  <div className="absolute top-4 left-4 pointer-events-none">
                    <MessageSquare className="w-5 h-5 text-zinc-500 group-focus-within:text-blue-400 transition-colors" />
                  </div>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell me about your project..."
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-zinc-900/50 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  onSubmit={handleSubmit}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative w-full flex items-center justify-center gap-3 py-4 px-8 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed">
                  {/* Shine effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                    />
                  ) : isSubmitted ? (
                    <>
                      <span>Message Sent!</span>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                        <span className="text-blue-500 text-xs">✓</span>
                      </motion.div>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </motion.button>
              </form>

              {/* Alternative Contact */}
              <div className="mt-8 pt-8 border-t border-zinc-800 text-center">
                <p className="text-zinc-500 text-sm mb-4">
                  Or reach me directly at
                </p>
                <a
                  href="mailto:omarchabira7@gmail.com"
                  className="inline-flex items-center gap-2 text-zinc-300 hover:text-white transition-colors group">
                  <span className="text-lg font-medium">
                    omarchabira7@gmail.com
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
          <BorderBeam duration={8} size={100} />
        </motion.div>
      </div>
    </section>
  );
}

export default ContactSection;
