export default function Types() {
  const Types = [
    "Advertising Forms",
    "Alumni Forms",
    "Animal Shelter Forms",
    "Banking Forms",
    "Business Forms",
    "Charity Forms",
    "Church Forms",
    "Customer Service Forms",
    "E-commerce Forms",
    "Education Forms",
    "Entertainment Forms",
    "Gaming Forms",
    "Healthcare Forms",
    "Human Resources Forms",
    "IT Forms",
    "Insurance Forms",
    "Marketing Forms",
    "Photography Forms",
    "Real Estate Forms",
    "SEO Forms",
    "Salon Forms",
    "Services Forms",
    "Sports Forms",
    "Summer Camps Forms",
    "Veterinary Service Forms",
    "Web Design Forms",
    "Veterinary Service Forms",
    "Web Design Forms",
    "Insurance Forms",
    "Marketing Forms",
    "Photography Forms",
    "Real Estate Forms",
    "SEO Forms",
    "Salon Forms",
    "Services Forms",
    "Sports Forms",
    "Summer Camps Forms",
    "Veterinary Service Forms",
    "Web Design Forms",
    "Veterinary Service Forms",
    "Web Design Forms",
    "Services Forms",
    "Sports Forms",
    "Summer Camps Forms",
    "Veterinary Service Forms",
    "Web Design Forms",
    "Veterinary Service Forms",
    "Web Design Forms",
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-10 border-t border-gray-200 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">All Types</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-4 gap-x-6 text-sm text-gray-700">
        {Types.map((industry, index) => (
          <a
            key={index}
            href="#"
            className="hover:underline hover:text-blue-600 transition-colors duration-200"
          >
            {industry}
          </a>
        ))}
      </div>
    </section>
  );
}
