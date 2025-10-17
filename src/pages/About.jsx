import { motion } from "framer-motion";

export default function About() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-16 text-gray-200 overflow-hidden">
      {/* Header Section */}
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

      {/* Hero Image */}
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

      {/* Heritage Section */}
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
          Today’s car industry is powered by innovation from brands like{" "}
          <strong>BMW</strong>, <strong>Ford</strong>, and{" "}
          <strong>Tesla</strong>. BMW stands out for its luxury design and
          precision engineering, delivering performance and comfort in every
          drive. Ford, one of the oldest automakers, continues to build reliable
          and powerful vehicles like the <em>Mustang</em> and{" "}
          <em>F-150</em>. Meanwhile, Tesla leads the shift toward electric
          mobility, blending technology and sustainability. Together, these
          brands represent the future of driving — where style, strength, and
          innovation meet.
        </motion.p>

        <motion.blockquote
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="border-l-4 border-gray-400 pl-4 italic text-gray-600 bg-gray-50/10 rounded-lg py-3 px-4 backdrop-blur-sm"
        >
          “The modern car market is full of innovation and style.” — BMW
          impresses drivers with models like the <strong>BMW X5</strong> and{" "}
          <strong>BMW i8</strong>.
        </motion.blockquote>

        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="text-gray-200 leading-relaxed"
        >
          Ten years later, a young engineer named <strong>Alex Turner</strong>{" "}
          walked through the doors of BMW’s headquarters and became captivated
          by the brand’s passion for innovation and performance from the very
          first test drive. After joining the company in 1982, his journey took
          him down a different road — one that would inspire new ideas in
          automotive design. During a trip to Germany in 1983, Alex experienced
          the art of precision engineering and the spirit of driving that
          defined European car culture. That moment sparked a vision that would
          help shape the future of BMW and the modern driving experience.
        </motion.p>
      </motion.section>

      {/* Signature / Footer */}
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
