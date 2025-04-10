export default function Question() {
  const Questions = [
    {
      title: "Is there a free version of OpnForm available?",
      description:
        "Yes, OpnForm offers a free version with access to 99% of features,  including unlimited forms, submissions, fields, and more. Our goal  is to provide robust functionality for all users without limitation",
    },
    {
      title: "Is there a free version of OpnForm available?",
      description:
        "Yes, OpnForm offers a free version with access to 99% of features,  including unlimited forms, submissions, fields, and more. Our goal  is to provide robust functionality for all users without limitation",
    },
    {
      title: "Is there a free version of OpnForm available?",
      description:
        "Yes, OpnForm offers a free version with access to 99% of features,  including unlimited forms, submissions, fields, and more. Our goal  is to provide robust functionality for all users without limitation",
    },
    {
      title: "Is there a free version of OpnForm available?",
      description:
        "Yes, OpnForm offers a free version with access to 99% of features,  including unlimited forms, submissions, fields, and more. Our goal  is to provide robust functionality for all users without limitation",
    },
    {
      title: "Is there a free version of OpnForm available?",
      description:
        "Yes, OpnForm offers a free version with access to 99% of features,  including unlimited forms, submissions, fields, and more. Our goal  is to provide robust functionality for all users without limitation",
    },
    {
      title: "Is there a free version of OpnForm available?",
      description:
        "Yes, OpnForm offers a free version with access to 99% of features,  including unlimited forms, submissions, fields, and more. Our goal  is to provide robust functionality for all users without limitation",
    },
  ];

  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-4xl text-blue-500 font-bold mb-4">
            Got any question?
          </h2>
          <p className="font-bold  text-gray-900">
            We've compiled a list of the most common questions we get asked.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {Questions.map((Question, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-x-4 p-4 rounded-lg "
            >
              <div className="flex  text-blue-600 text-1xl font-bold">
                {Question.title}
              </div>

              <span className="font-bold  text-sm text-gray-900">
                {Question.description}
              </span>
            </div>
          ))}
        </div>
        <p className="text-black  text-center">
          Didn't find the answer?{" "}
          <span className="text-blue-600"> Contact us</span>
        </p>
      </div>
    </section>
  );
}
