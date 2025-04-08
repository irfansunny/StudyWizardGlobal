const Stats = () => {
  const stats = [
    { value: "5000+", label: "Students Placed" },
    { value: "98%", label: "Visa Success Rate" },
    { value: "100+", label: "University Partners" },
    { value: "15+", label: "Years Experience" }
  ];

  return (
    <section className="bg-white py-12 border-t border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl font-bold text-primary">{stat.value}</p>
              <p className="text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
