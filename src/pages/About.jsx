export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 text-gray-800">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Our Company
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Driving innovation, performance, and the future of mobility.
        </p>
      </div>

      {/* Hero Image */}
      <div className="relative mb-14">
        <img
          src="logo/logo.png"
          alt="BMW Showroom"
          className="rounded-2xl shadow-lg w-full object-cover h-[400px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent rounded-2xl" />
      </div>

      {/* Heritage Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-gray-900 border-l-4 border-blue-500 pl-4">
          Our Heritage
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Today’s car industry is powered by innovation from brands like{" "}
          <strong>BMW</strong>, <strong>Ford</strong>, and{" "}
          <strong>Tesla</strong>. BMW stands out for its luxury design and
          precision engineering, delivering performance and comfort in every
          drive. Ford, one of the oldest automakers, continues to build
          reliable and powerful vehicles like the <em>Mustang</em> and{" "}
          <em>F-150</em>. Meanwhile, Tesla leads the shift toward electric
          mobility, blending technology and sustainability. Together, these
          brands represent the future of driving — where style, strength, and
          innovation meet.
        </p>

        <blockquote className="border-l-4 border-gray-400 pl-4 italic text-gray-600 bg-gray-50 rounded-lg py-3 px-4">
          “The modern car market is full of innovation and style.” — BMW impresses
          drivers with models like the <strong>BMW X5</strong> and{" "}
          <strong>BMW i8</strong>.
        </blockquote>

        <p className="text-gray-700 leading-relaxed">
          Ten years later, a young engineer named <strong>Alex Turner</strong>{" "}
          walked through the doors of BMW’s headquarters and became captivated
          by the brand’s passion for innovation and performance from the very
          first test drive. After joining the company in 1982, his journey took
          him down a different road — one that would inspire new ideas in
          automotive design. During a trip to Germany in 1983, Alex experienced
          the art of precision engineering and the spirit of driving that
          defined European car culture. That moment sparked a vision that would
          help shape the future of BMW and the modern driving experience.
        </p>
      </section>

      {/* Signature / Footer */}
      <div className="mt-14 text-center">
        <p className="text-gray-500 text-sm">
          © 2025 DriveVision Motors. All rights reserved.
        </p>
      </div>
    </div>
  );
}