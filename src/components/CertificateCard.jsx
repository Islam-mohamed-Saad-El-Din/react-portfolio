function CertificateCard({ certificate }) {
  if (!certificate) {
    return null;
  }

  return (
    <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-xl border border-slate-800 hover:-translate-y-2 hover:shadow-cyan-500/30 transition-all duration-300 flex flex-col h-full">

      {/* Certificate Image */}
      <div className="w-full h-48 sm:h-56 overflow-hidden bg-slate-800 relative">
        <img
          src={certificate.image}
          alt={certificate.title}
          className="w-full h-full object-cover hover:scale-105 transition duration-500 block"
          onError={(e) => {
            // صورة بديلة في حال عدم تحميل الرابط الرئيسي
            e.target.src = "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=800&auto=format&fit=crop";
          }}
        />
      </div>

      {/* Certificate Content */}
      <div className="p-6 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-2xl font-bold text-cyan-400 mb-3">
            {certificate.title}
          </h3>

          <p className="text-gray-400 leading-7 mb-5">
            {certificate.description}
          </p>
        </div>

        {certificate.issuer && (
          <p className="text-gray-300 mt-auto pt-2">
            <span className="text-cyan-400 font-semibold">
              Issued by:
            </span>{" "}
            {certificate.issuer}
          </p>
        )}

      </div>
    </div>
  );
}

export default CertificateCard;