import { motion } from "framer-motion";

export default function About() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-16 text-gray-200 overflow-hidden">

      {/* ================= HEADER ================= */}
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2 }}
        className="text-center mb-12"
      >
        <motion.h1
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="text-5xl mb-4 text-gray-400 font-semibold"
        >
          Our Company
        </motion.h1>
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-200 max-w-2xl mx-auto"
        >
          Driving innovation, performance, and the future of mobility.
        </motion.p>
      </motion.div>

      {/* ================= HERO IMAGE ================= */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative mb-14"
      >
        <img
          src="logo/logo.png"
          alt="BMW Showroom"
          className="rounded-2xl shadow-lg w-full object-cover h-[400px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent rounded-2xl" />
      </motion.div>

      {/* ================= HERITAGE ================= */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.3 }}
        className="space-y-6"
      >
        <motion.h2
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="text-3xl font-semibold text-white border-l-4 border-blue-500 pl-4"
        >
          Our Heritage
        </motion.h2>
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="text-gray-200 leading-relaxed"
        >
          Today’s car industry is powered by innovation from brands like <strong>BMW</strong>, <strong>Ford</strong>, and <strong>Tesla</strong>. BMW stands out for its luxury design and precision engineering, delivering performance and comfort in every drive. Ford, one of the oldest automakers, continues to build reliable and powerful vehicles like the <em>Mustang</em> and <em>F-150</em>. Meanwhile, Tesla leads the shift toward electric mobility, blending technology and sustainability.
        </motion.p>
        <motion.blockquote
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="border-l-4 border-gray-400 pl-4 italic text-gray-600 bg-gray-50/10 rounded-lg py-3 px-4 backdrop-blur-sm"
        >
          “The modern car market is full of innovation and style.” — BMW impresses drivers with models like the <strong>BMW X5</strong> and <strong>BMW i8</strong>.
        </motion.blockquote>
      </motion.section>

      {/* ================= CORE VALUES / MISSION ================= */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-16 text-center"
      >
        <motion.h2 variants={fadeUp} className="text-3xl font-semibold text-white mb-10 border-l-4 border-blue-500 pl-4">
          Our Mission & Values
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Innovation", desc: "Pushing automotive technology forward." },
            { title: "Quality", desc: "Delivering premium performance and reliability." },
            { title: "Sustainability", desc: "Commitment to eco-friendly mobility." },
          ].map((value, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:scale-105 transition transform"
            >
              <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
              <p className="text-gray-300">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ================= MILESTONES / TIMELINE ================= */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-16"
      >
        <motion.h2
          variants={fadeUp}
          className="text-3xl font-semibold text-white border-l-4 border-blue-500 pl-4 mb-10"
        >
          Our Milestones
        </motion.h2>
        <div className="relative border-l-2 border-blue-500 ml-8">
          {[
            { year: 1980, desc: "Company founded with a vision to innovate." },
            { year: 1990, desc: "First international showroom opened." },
            { year: 2005, desc: "Expanded to electric vehicle research." },
            { year: 2020, desc: "Launched the luxury hybrid line." },
          ].map((item, index) => (
            <motion.div key={index} variants={fadeUp} className="mb-8 ml-4 relative">
              <div className="absolute -left-6 w-4 h-4 bg-blue-500 rounded-full top-1.5" />
              <h4 className="text-lg font-semibold text-white">{item.year}</h4>
              <p className="text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ================= TEAM ================= */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.2 }}
        className="py-16 space-y-10"
      >
        <motion.h2
          variants={fadeUp}
          className="text-3xl font-semibold text-white border-l-4 border-blue-500 pl-4"
        >
          Meet Our Team
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { name: "Mao ChanPha", role: "Lead Engineer", img: "/team/alex.png" },
            { name: "Prum Settemun", role: "Design Director", img: "/team/sophia.png" },
            { name: "Theang Vireak", role: "Product Manager", img: "/team/mark.png" },
          ].map((member, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="bg-gray-800 rounded-2xl p-6 text-center hover:scale-105 transition transform shadow-lg"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-white">{member.name}</h3>
              <p className="text-gray-400">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ================= AWARDS / RECOGNITION ================= */}
      <motion.section className="py-16 px-6 text-center">
        <motion.h2 variants={fadeUp} className="text-3xl font-semibold text-white mb-10 border-l-4 border-blue-500 pl-4">
          Awards & Recognition
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-8">
          {["award1.png", "award2.png", "award3.png", "award4.png"].map((logo, index) => (
            <motion.img
              key={index}
              src={`/awards/${logo}`}
              className="h-20 object-contain grayscale hover:grayscale-0 transition"
              variants={fadeUp}
            />
          ))}
        </div>
      </motion.section>

      {/* ================= SIGNATURE / FOOTER ================= */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-14 text-center"
      >
        <p className="text-gray-500 text-sm">
          © 2025 DriveVision Motors. All rights reserved.
        </p>
      </motion.div>
    </div>
  );
}
