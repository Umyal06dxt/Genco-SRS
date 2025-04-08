import Authors from '@/components/AboutUser';
import { GradientButton } from '@/components/GradBtn';
import Navbar from '@/components/Navbar';
import { GridPattern } from "@/components/ui/grid-pattern";
import { motion } from 'framer-motion';
import { ArrowRight, History, ScanLine, ShieldCheck, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } }
  };

  const slideUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const featureVariant = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      scale: 1.03,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  };

  const historyItemVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <motion.div
      className="min-h-screen flex flex-col relative bg-background"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      {/* Grid Pattern Background */}
      <GridPattern
        width={20}
        height={20}
        x={-1}
        y={-1}
        className="absolute inset-0 [mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] pointer-events-none"
      />

      <Navbar />

      <main className="flex-1 container mx-auto px-4 pt-12 md:pt-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            variants={slideUp}
          >
            <motion.span
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              IEEE Standards Compliant
            </motion.span>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 tracking-tight leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Software Requirements <motion.span
                className="text-primary"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.4 }}
              >Specification</motion.span>
            </motion.h1>

            <motion.p
              className="text-xl text-foreground/70 max-w-3xl mx-auto mb-10 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Leveraging AI-Driven Emotion Recognition and Adaptive Learning Pathways to Create Highly Personalized and Responsive Educational Experiences for Enhanced Student Engagement and Achievement
            </motion.p>



            <Link to="/srs-document">
              <GradientButton>View SRS Document</GradientButton>
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform inline-block dark:text-black text-white" />
            </Link>


            <Link to="/test-cases">
              <GradientButton variant="variant">
                Test Cases
              </GradientButton>
            </Link>


          </motion.div>

          {/* Hero Image */}
          <motion.div
            className="w-full max-w-3xl mx-auto -mb-5 p-10"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            {/* <Spline scene="https://prod.spline.design/Lb9DSCXew1UBetFK/scene.splinecode" /> */}
          </motion.div>

          {/* Bento Grid Section - Features and Target Audience */}
          <section id="features">
            <motion.h2
              className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Key Features & <span className="text-primary">Target Audience</span>
            </motion.h2>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
              variants={staggerChildren}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Main Feature */}
              <motion.div
                className="col-span-1 md:col-span-2 row-span-2 bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20 rounded-3xl p-8 shadow-lg border border-border transition-all duration-300"
                variants={featureVariant}
                whileHover="hover"
              >
                <div className="h-full flex flex-col">
                  <motion.div
                    className="mb-4 p-3 bg-background rounded-full w-fit shadow-sm"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <ShieldCheck className="w-6 h-6 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Purpose</h3>
                  <p className="text-foreground/80 mb-6">
                    The purpose of this Software Requirements Specification (SRS) document is to provide a
                    comprehensive overview of GENCO, an AI-powered educational platform that enhances
                    learning experiences through interactive, AI-driven, and community-supported tools. This
                    document outlines the functional and non-functional requirements, system architecture,
                    and design constraints to guide the development team.
                  </p>
                  <motion.div
                    className="mt-auto flex flex-wrap gap-3"
                    variants={staggerChildren}
                  >
                    <motion.span
                      className="px-3 py-2 bg-background/70 rounded-full text-sm font-medium text-primary"
                      variants={featureVariant}
                      whileHover={{ scale: 1.05 }}
                    >
                      Standards-Compliant
                    </motion.span>
                    <motion.span
                      className="px-3 py-2 bg-background/70 rounded-full text-sm font-medium text-primary"
                      variants={featureVariant}
                      whileHover={{ scale: 1.05 }}
                    >
                      Structured Format
                    </motion.span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Feature Tile 1 */}
              <motion.div
                className="bg-gradient-to-br from-emerald-500/5 to-emerald-500/10 dark:from-emerald-500/10 dark:to-emerald-500/20 rounded-3xl p-6 shadow-lg border border-border transition-all duration-300"
                variants={featureVariant}
                whileHover="hover"
              >
                <motion.div
                  className="mb-4 p-2.5 bg-background rounded-full w-fit shadow-sm"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <User className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </motion.div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">Intended Audience</h3>
                <p className="text-foreground/80">
                  • Developers
                  • Project Managers
                  • Investors
                  • Researchers
                </p>
              </motion.div>

              {/* Feature Tile 2 */}
              <motion.div
                className="bg-gradient-to-br from-amber-500/5 to-amber-500/10 dark:from-amber-500/10 dark:to-amber-500/20 rounded-3xl p-6 shadow-lg border border-border transition-all duration-300"
                variants={featureVariant}
                whileHover="hover"
              >
                <motion.div
                  className="mb-4 p-2.5 bg-background rounded-full w-fit shadow-sm"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <ScanLine className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                </motion.div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">Document Conventions</h3>
                <p className="text-foreground/80">
                  This document follows the IEEE Std 830-1998 standard for Software Requirements
                  Specifications.
                </p>
              </motion.div>
            </motion.div>

            {/* Feature Tile 3 */}
            <motion.div
              className="bg-gradient-to-br from-rose-500/5 to-rose-500/10 dark:from-rose-500/10 dark:to-rose-500/20 min-w-full -mt-6 rounded-3xl p-6 shadow-lg border border-border transition-all duration-300"
              variants={featureVariant}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
            >
              <motion.div
                className="mb-4 p-2.5 bg-background rounded-full w-fit shadow-sm"
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <ShieldCheck className="w-5 h-5 text-rose-600 dark:text-rose-400" />
              </motion.div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Core Features</h3>

              <motion.div
                className="mt-auto flex flex-wrap gap-3"
                variants={staggerChildren}
              >
                <motion.span
                  className="px-3 py-2 bg-background/70 rounded-full text-sm font-medium text-primary"
                  variants={featureVariant}
                  whileHover={{ scale: 1.05 }}
                >
                  Emotion-Supported AI
                </motion.span>
                <motion.span
                  className="px-3 py-2 bg-background/70 rounded-full text-sm font-medium text-primary"
                  variants={featureVariant}
                  whileHover={{ scale: 1.05 }}
                >
                  Dynamic Quizzes
                </motion.span>
                <motion.span
                  className="px-3 py-2 bg-background/70 rounded-full text-sm font-medium text-primary"
                  variants={featureVariant}
                  whileHover={{ scale: 1.05 }}
                >
                  Interactive Community
                </motion.span>
                <motion.span
                  className="px-3 py-2 bg-background/70 rounded-full text-sm font-medium text-primary"
                  variants={featureVariant}
                  whileHover={{ scale: 1.05 }}
                >
                  Smart Flashcards
                </motion.span>
                <motion.span
                  className="px-3 py-2 bg-background/70 rounded-full text-sm font-medium text-primary"
                  variants={featureVariant}
                  whileHover={{ scale: 1.05 }}
                >
                  Stress Detection
                </motion.span>
                <motion.span
                  className="px-3 py-2 bg-background/70 rounded-full text-sm font-medium text-primary"
                  variants={featureVariant}
                  whileHover={{ scale: 1.05 }}
                >
                  Gamified Learning
                </motion.span>
                <motion.span
                  className="px-3 py-2 bg-background/70 rounded-full text-sm font-medium text-primary"
                  variants={featureVariant}
                  whileHover={{ scale: 1.05 }}
                >
                  Personalized Study Plans
                </motion.span>
                <motion.span
                  className="px-3 py-2 bg-background/70 rounded-full text-sm font-medium text-primary"
                  variants={featureVariant}
                  whileHover={{ scale: 1.05 }}
                >
                  AI-Generated Notes
                </motion.span>
                <motion.span
                  className="px-3 py-2 bg-background/70 rounded-full text-sm font-medium text-primary"
                  variants={featureVariant}
                  whileHover={{ scale: 1.05 }}
                >
                  Memory-Boosting Tools
                </motion.span>
              </motion.div>






            </motion.div>
          </section>

          {/* Author Sections */}

          <Authors />

          {/* Change History Section */}
          <section className="py-14 border-t border-border">
            <motion.h2
              className="text-2xl md:text-3xl font-bold text-center text-foreground mb-10 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary">Change</span> History
            </motion.h2>

            <div className="max-w-3xl mx-auto">
              <motion.div
                className="relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerChildren}
              >
                <div className="absolute left-9 top-0 bottom-0 w-0.5 bg-primary/20"></div>

                {[
                  //  Todo: Make proper update logs
                  { version: "1.2", date: "T.B.D.", changes: "Review and Changes" },
                  { version: "1.1", date: "April 7, 2025", changes: "Test Cases Added" },
                  { version: "1.0", date: "March 5, 2025", changes: "Initial release of the SRS document" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="relative flex items-start mb-10"
                    variants={historyItemVariant}
                  >
                    <motion.div
                      className="absolute left-4 transform -translate-x-1/2 w-10 h-10 rounded-full bg-background border-4 border-primary/30 shadow-md flex items-center justify-center z-10"
                      whileHover={{
                        scale: 1.2,
                        borderColor: "rgba(var(--primary), 0.7)"
                      }}
                      transition={{ type: "spring", stiffness: 100, damping: 15 }}
                    >
                      <History className="w-5 h-5 text-primary" />
                    </motion.div>
                    <motion.div
                      className="ml-16 bg-background rounded-xl p-6 shadow-md border border-border w-full"
                      whileHover={{
                        y: -5,
                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                        borderColor: "rgba(var(--primary), 0.3)"
                      }}
                      transition={{ type: "spring", stiffness: 100, damping: 15 }}
                    >
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="text-lg font-semibold text-foreground">Version {item.version}</h3>
                        <span className="text-sm text-foreground/50">{item.date}</span>
                      </div>
                      <p className="text-foreground/70">{item.changes}</p>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        </div>
      </main>

      <motion.footer
        className="border-t border-border py-10 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center text-foreground/60 text-sm">
            <p className="font-medium mb-1">Software Requirements Specification Document</p>
            <p>Based on IEEE Standards for Software Engineering</p>
          </div>
        </div>
      </motion.footer>
    </motion.div>
  );
};

export default Index;
