export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-28 bg-gradient-to-b from-zinc-900 to-black overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_60%)]"></div>

        <div className="relative z-10 max-w-4xl">
        <img
  src="/foto1.jpg"
  alt="Valentino"
  className="w-40 h-40 mx-auto rounded-full border-4 border-zinc-700 object-cover shadow-2xl mb-8"
/>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Valentino <span className="text-zinc-400">Ostapow</span>
          </h1>

          <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed max-w-3xl mx-auto mb-8">
            Estudiante de Técnico Superior en Programación • Programador Full Stack •
            Apasionado por el desarrollo web y nuevas tecnologías.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Node.js",
              "C#",
              "SQL",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-zinc-900 border border-zinc-700 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Sobre mí</h2>

            <p className="text-zinc-300 text-lg leading-relaxed mb-5">
              Soy estudiante de la carrera Técnico Superior en Programación y me
              apasiona crear aplicaciones modernas y funcionales.
            </p>

            <p className="text-zinc-400 leading-relaxed">
              Siempre estoy aprendiendo nuevas herramientas y mejorando mis
              habilidades como desarrollador.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
              <h3 className="text-2xl font-bold mb-2">Frontend</h3>
              <p className="text-zinc-400 text-sm">
                React, HTML, CSS y JavaScript.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
              <h3 className="text-2xl font-bold mb-2">Backend</h3>
              <p className="text-zinc-400 text-sm">
                Node.js y APIs REST.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 bg-zinc-950">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-6">Mi objetivo</h2>

    <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl mx-auto mb-14">
      Busco seguir creciendo como desarrollador, aprender nuevas tecnologías
      y participar en proyectos que me permitan mejorar profesionalmente.
    </p>

    <div className="grid md:grid-cols-3 gap-6">
      <div className="bg-black border border-zinc-800 rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition duration-300">
        <h3 className="text-2xl font-semibold mb-4">Desarrollo Web</h3>

        <p className="text-zinc-400 leading-relaxed text-sm">
          Creación de páginas y aplicaciones modernas con foco en diseño,
          rendimiento y experiencia de usuario.
        </p>
      </div>

      <div className="bg-black border border-zinc-800 rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition duration-300">
        <h3 className="text-2xl font-semibold mb-4">Backend & APIs</h3>

        <p className="text-zinc-400 leading-relaxed text-sm">
          Desarrollo de servidores, APIs REST y lógica de negocio utilizando
          tecnologías modernas.
        </p>
      </div>

      <div className="bg-black border border-zinc-800 rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition duration-300">
        <h3 className="text-2xl font-semibold mb-4">Aprendizaje Constante</h3>

        <p className="text-zinc-400 leading-relaxed text-sm">
          Siempre explorando nuevas herramientas y buenas prácticas para
          mejorar como desarrollador.
        </p>
      </div>
    </div>
  </div>
</section>
      <section className="px-6 py-24 max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-6">Contacto</h2>

        <div className="grid md:grid-cols-3 gap-5">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
            <h3 className="font-semibold text-xl mb-2">Email</h3>
            <p className="text-zinc-400">ostavalen@gmail.com</p>
          </div>

         <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
  <h3 className="font-semibold text-xl mb-2">LinkedIn</h3>

  <a
    href="https://www.linkedin.com/in/valentino-ostapow-688435260/"
    target="_blank"
    className="text-zinc-400 hover:text-white transition break-all"
  >
    linkedin.com/in/valentino-ostapow-688435260/
  </a>
</div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
  <h3 className="font-semibold text-xl mb-2">WhatsApp</h3>

  <a
    href="https://wa.me/541155727465"
    target="_blank"
    className="text-zinc-400 hover:text-white transition"
  >
    +54 11 5572 7465
  </a>
</div>
        </div>
      </section>

      <footer className="border-t border-zinc-900 py-8 text-center text-zinc-500 text-sm">
        © 2026 Valentino Ostapow • Portfolio Web
      </footer>
    </div>
  )
}