export default function MyPrograms() {
  const programs = [
    { id: 0, title: "Basic Frontend" },
    { id: 1, title: "Advanced Frontend" },
    { id: 2, title: "Backend" },
  ];
  return (
    <div>
      <h2 className="font-bold text-4xl mb-8">Programs</h2>
      <ul>
        {programs.map((program) => (
          <li
            key={program.id}
            className="p-2 m-2 rounded-2xl shadow bg-gray-100"
          >
            {program.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
