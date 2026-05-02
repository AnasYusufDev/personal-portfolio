export default function Resume() {
  return (
    <div className="min-h-screen bg-white px-8 py-6">

      {/* Nav */}
      <nav className="flex justify-between items-center mb-16">
        <span className="font-medium tracking-widest uppercase">Anas Yusuf</span>
        <div className="flex gap-10">
          <a href="/" className="text-gray-800 font-medium hover:text-blue-600">Home</a>
          <a href="/resume" className="text-blue-600 font-medium">Résumé</a>
          <a href="/contact" className="text-gray-800 font-medium hover:text-blue-600">Contact</a>
        </div>
      </nav>

      {/* Titel */}
      <h1 className="text-5xl font-bold mb-12">Résumé</h1>

      {/* Skills */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">💼 Skills</h2>
        <hr className="mb-8" />
        <div className="grid grid-cols-3 gap-8">
          <div>
            <p className="font-bold mb-4">Backend:</p>
            <div className="flex flex-wrap gap-2">
              {[".NET", "C#", "Azure", "MSSQL", "PostgreSQL", "Docker", "Entity Framework"].map(skill => (
                <span key={skill} className="border border-gray-200 px-3 py-1 rounded text-sm">{skill}</span>
              ))}
            </div>
          </div>
          <div>
            <p className="font-bold mb-4">Frontend:</p>
            <div className="flex flex-wrap gap-2">
              {["Javascript", "React", "Angular", "Typescript", "HTML", "CSS"].map(skill => (
                <span key={skill} className="border border-gray-200 px-3 py-1 rounded text-sm">{skill}</span>
              ))}
            </div>
          </div>
          <div>
            <p className="font-bold mb-4">Other:</p>
            <div className="flex flex-wrap gap-2">
              {["Unit Testing", "Domain Driven Design", "Continuous Integration"].map(skill => (
                <span key={skill} className="border border-gray-200 px-3 py-1 rounded text-sm">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section>
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">💼 Professional Experience</h2>
        <hr className="mb-8" />
      </section>

    </div>
  );
}