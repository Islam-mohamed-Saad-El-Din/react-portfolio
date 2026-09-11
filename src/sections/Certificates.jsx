import CertificateCard from "../components/CertificateCard";

const certificates = [
  {
    id: 1,
    title: "Frontend Development",
    issuer: "Online Course",
    description:
      "Certificate in Frontend Development covering HTML, CSS, JavaScript and modern web development.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
  },

  {
    id: 2,
    title: "React.js Development",
    issuer: "Online Course",
    description:
      "Certificate focused on building modern web applications using React.js.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop",
  },

  {
    id: 3,
    title: "Database & SQL",
    issuer: "Online Course",
    description:
      "Certificate covering database concepts, SQL queries and database management.",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=800&auto=format&fit=crop",
  },
];

function Certificates() {
  return (
    <section
      id="certificates"
      className="bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <h2 className="text-5xl font-bold text-center text-cyan-400 mb-6">
          Certificates
        </h2>

        <p className="text-center text-gray-400 mb-16">
          Courses and certifications that helped me improve my technical skills.
        </p>

        {/* Certificates */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {certificates.map((certificate) => (
            <CertificateCard
              key={certificate.id}
              certificate={certificate}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Certificates;