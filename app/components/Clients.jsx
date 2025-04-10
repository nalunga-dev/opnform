"use client";

const formTemplates = [
  {
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MjIwOTV8MHwxfHNlYXJjaHwyfHxjaGFyaXR5JTIwZXZlbnQlMjByZWdpc3RyYXRpb258ZW58MHx8fHwxNjk0MTgyMjEzfDA&ixlib=rb-4.0.3&q=80&w=600",
    title: "Legal Petition Form Template",
    description:
      "Streamline the process of creating and submitting legal petitions with our easy-to-use template.",
    tags: ["Petition Forms +1", "Business Forms +2"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MjIwOTV8MHwxfHNlYXJjaHw3fHxzcG9uc29yc2hpcCUyMGV2ZW50fGVufDB8fHx8MTY5NDE4MjI2NXww&ixlib=rb-4.0.3&q=80&w=600",
    title: "Environmental Petition Form Template",
    description:
      "Use this Environmental Petition Form to gather support and signatures for your cause.",
    tags: ["Petition Forms", "Charity Forms +2"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MjIwOTV8MHwxfHNlYXJjaHwxfHxlcXVpcG1lbnQlMjBtYWludGVuYW5jZXxlbnwwfHx8fDE2OTQxODE4OTN8MA&ixlib=rb-4.0.3&q=80&w=600",
    title: "Political Petition Form Template",
    description:
      "Collect signatures and support for your political cause efficiently with this form.",
    tags: ["Petition Forms +2", "Charity Forms +2"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1623354582128-d8e232a8649e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MjIwOTV8MHwxfHNlYXJjaHwyfHxncmFudCUyMGFwcGxpY2F0aW9ufGVufDB8fHx8MTY5NDE4MjMxMXww&ixlib=rb-4.0.3&q=80&w=600",
    title: "DISC Survey Form Template",
    description:
      "Capture insightful personality traits with our DISC survey form, designed for easy analysis.",
    tags: ["Survey Templates +2", "Human Resources Forms +2"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MjIwOTV8MHwxfHNlYXJjaHwyfHxjaGFyaXR5JTIwZXZlbnQlMjByZWdpc3RyYXRpb258ZW58MHx8fHwxNjk0MTgyMjEzfDA&ixlib=rb-4.0.3&q=80&w=600",
    title: "Legal Petition Form Template",
    description:
      "Streamline the process of creating and submitting legal petitions with our easy-to-use template.",
    tags: ["Petition Forms +1", "Business Forms +2"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MjIwOTV8MHwxfHNlYXJjaHw3fHxzcG9uc29yc2hpcCUyMGV2ZW50fGVufDB8fHx8MTY5NDE4MjI2NXww&ixlib=rb-4.0.3&q=80&w=600",
    title: "Environmental Petition Form Template",
    description:
      "Use this Environmental Petition Form to gather support and signatures for your cause.",
    tags: ["Petition Forms", "Charity Forms +2"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MjIwOTV8MHwxfHNlYXJjaHwxfHxlcXVpcG1lbnQlMjBtYWludGVuYW5jZXxlbnwwfHx8fDE2OTQxODE4OTN8MA&ixlib=rb-4.0.3&q=80&w=600",
    title: "Political Petition Form Template",
    description:
      "Collect signatures and support for your political cause efficiently with this form.",
    tags: ["Petition Forms +2", "Charity Forms +2"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1623354582128-d8e232a8649e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MjIwOTV8MHwxfHNlYXJjaHwyfHxncmFudCUyMGFwcGxpY2F0aW9ufGVufDB8fHx8MTY5NDE4MjMxMXww&ixlib=rb-4.0.3&q=80&w=600",
    title: "DISC Survey Form Template",
    description:
      "Capture insightful personality traits with our DISC survey form, designed for easy analysis.",
    tags: ["Survey Templates +2", "Human Resources Forms +2"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MjIwOTV8MHwxfHNlYXJjaHwyfHxjaGFyaXR5JTIwZXZlbnQlMjByZWdpc3RyYXRpb258ZW58MHx8fHwxNjk0MTgyMjEzfDA&ixlib=rb-4.0.3&q=80&w=600",
    title: "Legal Petition Form Template",
    description:
      "Streamline the process of creating and submitting legal petitions with our easy-to-use template.",
    tags: ["Petition Forms +1", "Business Forms +2"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MjIwOTV8MHwxfHNlYXJjaHw3fHxzcG9uc29yc2hpcCUyMGV2ZW50fGVufDB8fHx8MTY5NDE4MjI2NXww&ixlib=rb-4.0.3&q=80&w=600",
    title: "Environmental Petition Form Template",
    description:
      "Use this Environmental Petition Form to gather support and signatures for your cause.",
    tags: ["Petition Forms", "Charity Forms +2"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MjIwOTV8MHwxfHNlYXJjaHwxfHxlcXVpcG1lbnQlMjBtYWludGVuYW5jZXxlbnwwfHx8fDE2OTQxODE4OTN8MA&ixlib=rb-4.0.3&q=80&w=600",
    title: "Political Petition Form Template",
    description:
      "Collect signatures and support for your political cause efficiently with this form.",
    tags: ["Petition Forms +2", "Charity Forms +2"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1623354582128-d8e232a8649e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MjIwOTV8MHwxfHNlYXJjaHwyfHxncmFudCUyMGFwcGxpY2F0aW9ufGVufDB8fHx8MTY5NDE4MjMxMXww&ixlib=rb-4.0.3&q=80&w=600",
    title: "DISC Survey Form Template",
    description:
      "Capture insightful personality traits with our DISC survey form, designed for easy analysis.",
    tags: ["Survey Templates +2", "Human Resources Forms +2"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MjIwOTV8MHwxfHNlYXJjaHwyfHxjaGFyaXR5JTIwZXZlbnQlMjByZWdpc3RyYXRpb258ZW58MHx8fHwxNjk0MTgyMjEzfDA&ixlib=rb-4.0.3&q=80&w=600",
    title: "Legal Petition Form Template",
    description:
      "Streamline the process of creating and submitting legal petitions with our easy-to-use template.",
    tags: ["Petition Forms +1", "Business Forms +2"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MjIwOTV8MHwxfHNlYXJjaHw3fHxzcG9uc29yc2hpcCUyMGV2ZW50fGVufDB8fHx8MTY5NDE4MjI2NXww&ixlib=rb-4.0.3&q=80&w=600",
    title: "Environmental Petition Form Template",
    description:
      "Use this Environmental Petition Form to gather support and signatures for your cause.",
    tags: ["Petition Forms", "Charity Forms +2"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MjIwOTV8MHwxfHNlYXJjaHwxfHxlcXVpcG1lbnQlMjBtYWludGVuYW5jZXxlbnwwfHx8fDE2OTQxODE4OTN8MA&ixlib=rb-4.0.3&q=80&w=600",
    title: "Political Petition Form Template",
    description:
      "Collect signatures and support for your political cause efficiently with this form.",
    tags: ["Petition Forms +2", "Charity Forms +2"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1623354582128-d8e232a8649e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MjIwOTV8MHwxfHNlYXJjaHwyfHxncmFudCUyMGFwcGxpY2F0aW9ufGVufDB8fHx8MTY5NDE4MjMxMXww&ixlib=rb-4.0.3&q=80&w=600",
    title: "DISC Survey Form Template",
    description:
      "Capture insightful personality traits with our DISC survey form, designed for easy analysis.",
    tags: ["Survey Templates +2", "Human Resources Forms +2"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MjIwOTV8MHwxfHNlYXJjaHwyfHxjaGFyaXR5JTIwZXZlbnQlMjByZWdpc3RyYXRpb258ZW58MHx8fHwxNjk0MTgyMjEzfDA&ixlib=rb-4.0.3&q=80&w=600",
    title: "Legal Petition Form Template",
    description:
      "Streamline the process of creating and submitting legal petitions with our easy-to-use template.",
    tags: ["Petition Forms +1", "Business Forms +2"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MjIwOTV8MHwxfHNlYXJjaHw3fHxzcG9uc29yc2hpcCUyMGV2ZW50fGVufDB8fHx8MTY5NDE4MjI2NXww&ixlib=rb-4.0.3&q=80&w=600",
    title: "Environmental Petition Form Template",
    description:
      "Use this Environmental Petition Form to gather support and signatures for your cause.",
    tags: ["Petition Forms", "Charity Forms +2"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MjIwOTV8MHwxfHNlYXJjaHwxfHxlcXVpcG1lbnQlMjBtYWludGVuYW5jZXxlbnwwfHx8fDE2OTQxODE4OTN8MA&ixlib=rb-4.0.3&q=80&w=600",
    title: "Political Petition Form Template",
    description:
      "Collect signatures and support for your political cause efficiently with this form.",
    tags: ["Petition Forms +2", "Charity Forms +2"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1623354582128-d8e232a8649e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MjIwOTV8MHwxfHNlYXJjaHwyfHxncmFudCUyMGFwcGxpY2F0aW9ufGVufDB8fHx8MTY5NDE4MjMxMXww&ixlib=rb-4.0.3&q=80&w=600",
    title: "DISC Survey Form Template",
    description:
      "Capture insightful personality traits with our DISC survey form, designed for easy analysis.",
    tags: ["Survey Templates +2", "Human Resources Forms +2"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MjIwOTV8MHwxfHNlYXJjaHwyfHxjaGFyaXR5JTIwZXZlbnQlMjByZWdpc3RyYXRpb258ZW58MHx8fHwxNjk0MTgyMjEzfDA&ixlib=rb-4.0.3&q=80&w=600",
    title: "Legal Petition Form Template",
    description:
      "Streamline the process of creating and submitting legal petitions with our easy-to-use template.",
    tags: ["Petition Forms +1", "Business Forms +2"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MjIwOTV8MHwxfHNlYXJjaHw3fHxzcG9uc29yc2hpcCUyMGV2ZW50fGVufDB8fHx8MTY5NDE4MjI2NXww&ixlib=rb-4.0.3&q=80&w=600",
    title: "Environmental Petition Form Template",
    description:
      "Use this Environmental Petition Form to gather support and signatures for your cause.",
    tags: ["Petition Forms", "Charity Forms +2"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MjIwOTV8MHwxfHNlYXJjaHwxfHxlcXVpcG1lbnQlMjBtYWludGVuYW5jZXxlbnwwfHx8fDE2OTQxODE4OTN8MA&ixlib=rb-4.0.3&q=80&w=600",
    title: "Political Petition Form Template",
    description:
      "Collect signatures and support for your political cause efficiently with this form.",
    tags: ["Petition Forms +2", "Charity Forms +2"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1623354582128-d8e232a8649e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MjIwOTV8MHwxfHNlYXJjaHwyfHxncmFudCUyMGFwcGxpY2F0aW9ufGVufDB8fHx8MTY5NDE4MjMxMXww&ixlib=rb-4.0.3&q=80&w=600",
    title: "DISC Survey Form Template",
    description:
      "Capture insightful personality traits with our DISC survey form, designed for easy analysis.",
    tags: ["Survey Templates +2", "Human Resources Forms +2"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MjIwOTV8MHwxfHNlYXJjaHwyfHxjaGFyaXR5JTIwZXZlbnQlMjByZWdpc3RyYXRpb258ZW58MHx8fHwxNjk0MTgyMjEzfDA&ixlib=rb-4.0.3&q=80&w=600",
    title: "Legal Petition Form Template",
    description:
      "Streamline the process of creating and submitting legal petitions with our easy-to-use template.",
    tags: ["Petition Forms +1", "Business Forms +2"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MjIwOTV8MHwxfHNlYXJjaHw3fHxzcG9uc29yc2hpcCUyMGV2ZW50fGVufDB8fHx8MTY5NDE4MjI2NXww&ixlib=rb-4.0.3&q=80&w=600",
    title: "Environmental Petition Form Template",
    description:
      "Use this Environmental Petition Form to gather support and signatures for your cause.",
    tags: ["Petition Forms", "Charity Forms +2"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MjIwOTV8MHwxfHNlYXJjaHwxfHxlcXVpcG1lbnQlMjBtYWludGVuYW5jZXxlbnwwfHx8fDE2OTQxODE4OTN8MA&ixlib=rb-4.0.3&q=80&w=600",
    title: "Political Petition Form Template",
    description:
      "Collect signatures and support for your political cause efficiently with this form.",
    tags: ["Petition Forms +2", "Charity Forms +2"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1623354582128-d8e232a8649e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MjIwOTV8MHwxfHNlYXJjaHwyfHxncmFudCUyMGFwcGxpY2F0aW9ufGVufDB8fHx8MTY5NDE4MjMxMXww&ixlib=rb-4.0.3&q=80&w=600",
    title: "DISC Survey Form Template",
    description:
      "Capture insightful personality traits with our DISC survey form, designed for easy analysis.",
    tags: ["Survey Templates +2", "Human Resources Forms +2"],
  },
];

export default function Clients() {
  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mt-8 mb-17 max-w-4xl mx-auto grid gap-7 grid-cols-1 sm:grid-cols-3">
        <select className="border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>All Types</option>
        </select>

        <select className="border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>All Industries</option>
        </select>

        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {formTemplates.map((template, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={template.image}
              alt={template.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold line-clamp-1 text-gray-900">
                {template.title}
              </h3>
              <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                {template.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {template.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 text-blue-600 text-sm font-medium px-3 py-1 rounded-full border border-blue-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
