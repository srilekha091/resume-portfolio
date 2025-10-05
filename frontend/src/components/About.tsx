import { motion } from "framer-motion";
import {
  FaReact,
  FaPython,
  FaDatabase,
  FaAws,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGraduationCap,
  FaBriefcase,
} from "react-icons/fa";
import {
  SiTypescript,
  SiDotnet,
  SiPostgresql,
  SiTailwindcss,
  SiRedux,
  SiJest,
} from "react-icons/si";
import { IconType } from "react-icons";

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center"
      >
        About Me
      </motion.h1>

      {/* About Content */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="space-y-6 text-lg text-gray-700 leading-relaxed"
      >
        <p>
          Hi, I’m <span className="font-semibold">Srilekha Palleboyina</span>, a{" "}
          <span className="font-semibold">Full Stack Developer</span> with over{" "}
          <span className="font-semibold">5 years of experience</span> building
          scalable, accessible, and user-friendly web applications. I specialize
          in{" "}
          <span className="font-semibold">
            React, TypeScript, C#, .NET, and PostgreSQL
          </span>
          , and I enjoy creating solutions that improve efficiency, engagement,
          and productivity.
        </p>

        <p>
          At <span className="font-semibold">A Place for Mom</span>, I developed
          and maintained SPAs that streamlined advisor workflows, reduced
          onboarding time by 2 weeks, and cut customer data search time by 35%.
          I also engineered automated compliance workflows using{" "}
          <span className="font-semibold">AWS Lambda & S3</span>, saving the
          legal team 20+ hours per month. My contributions consistently improved
          internal customer satisfaction scores year-over-year.
        </p>

        <p>
          Previously, at{" "}
          <span className="font-semibold">Tempered Networks</span>, I rebuilt
          the company’s website with Angular, modernizing the UI, enhancing
          speed, and improving engagement with real-time updates via RESTful
          APIs.
        </p>

        <p>
          Beyond coding, I enjoy mentoring junior engineers, leading code
          reviews, and collaborating across teams to bring ideas from concept to
          production. I hold an{" "}
          <span className="font-semibold">
            MS in Computer Engineering (UTSA)
          </span>{" "}
          and a{" "}
          <span className="font-semibold">
            BE in Electronics & Communication Engineering (JNTU, India)
          </span>
          . Recently, I also earned the{" "}
          <span className="font-semibold">
            Meta Front-End Developer Professional Certificate (2024)
          </span>
          , sharpening my expertise in modern frontend practices.
        </p>

        <p>
          I’m passionate about{" "}
          <span className="font-semibold">
            building intuitive UIs, optimizing backend systems, and exploring
            AI-driven features
          </span>{" "}
          to push the boundaries of what web apps can do.
        </p>
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-16"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center">
          <Skill icon={FaReact} label="React" />
          <Skill icon={SiTypescript} label="TypeScript" />
          <Skill icon={SiTailwindcss} label="TailwindCSS" />
          <Skill icon={FaPython} label="Python" />
          <Skill icon={SiDotnet} label=".NET / C#" />
          <Skill icon={SiPostgresql} label="PostgreSQL" />
          <Skill icon={FaAws} label="AWS" />
          <Skill icon={FaDatabase} label="SQL Server" />
          <Skill icon={SiRedux} label="Redux" />
          <Skill icon={SiJest} label="Testing (Jest)" />
          <Skill icon={FaHtml5} label="HTML5" />
          <Skill icon={FaCss3Alt} label="CSS3" />
          <Skill icon={FaGitAlt} label="Git" />
        </div>
      </motion.div>

      {/* Timeline Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mt-20"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-10 text-center">
          My Journey
        </h2>

        <div className="relative border-l-2 border-gray-300 pl-6 space-y-10">
          {/* Work Experience */}
          <TimelineItem
            icon={FaBriefcase}
            title="Full Stack Developer"
            subtitle="A Place for Mom, Seattle, WA"
            date="2019 - Present"
            description="Developed SPAs with React & TypeScript, integrated .NET backend with PostgreSQL, and automated compliance workflows using AWS Lambda & S3."
          />

          <TimelineItem
            icon={FaBriefcase}
            title="Web Developer"
            subtitle="Tempered Networks, Seattle, WA"
            date="2018 - 2019"
            description="Rebuilt company website with Angular & REST APIs, improving performance and engagement."
          />

          {/* Education */}
          <TimelineItem
            icon={FaGraduationCap}
            title="MS in Computer Engineering"
            subtitle="University of Texas at San Antonio, TX"
            date="2016 - 2018"
            description="Focused on software engineering, web technologies, and systems design."
          />

          <TimelineItem
            icon={FaGraduationCap}
            title="BE in Electronics & Communication"
            subtitle="JNTU, India"
            date="2012 - 2016"
            description="Undergraduate degree with a focus on electronics and foundational computer science."
          />
        </div>
      </motion.div>
    </div>
  );
}

/* ---------- Helper Components ---------- */

// ✅ Skill Card (Type-safe for react-icons)
interface SkillProps {
  icon: IconType;
  label: string;
}

const Skill: React.FC<SkillProps> = ({ icon: Icon, label }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-lg transition"
    >
      {Icon && <Icon className="text-4xl mb-2" />} {/* Safe JSX usage */}
      <p className="font-medium text-gray-700">{label}</p>
    </motion.div>
  );
};

// ✅ Timeline Item (reusable, typed)
interface TimelineProps {
  icon: IconType;
  title: string;
  subtitle: string;
  date: string;
  description: string;
}

const TimelineItem: React.FC<TimelineProps> = ({
  icon: Icon,
  title,
  subtitle,
  date,
  description,
}) => {
  return (
    <motion.div whileHover={{ scale: 1.02 }} className="relative pl-10">
      <div className="absolute -left-6 top-1 flex items-center justify-center w-10 h-10 bg-white border-2 border-gray-300 rounded-full">
        {Icon && <Icon className="text-blue-600" />}
      </div>
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      <span className="text-gray-600 font-medium">{subtitle}</span>
      <p className="text-sm text-gray-500">{date}</p>
      <p className="mt-2 text-gray-700">{description}</p>
    </motion.div>
  );
};
