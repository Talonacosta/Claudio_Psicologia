

const LandingPage = () => {
  return (
    <div>
       <header className="bg-white p-4 text-black">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold">Claudio Framone</h1>
          <h2 className="text-lg">Psicólogo / Psicoterapeuta / Hipnólogo </h2>
          <h3>CRP 04-14648</h3>
        </div>
      </header>
      <main className="container mx-auto py-8">
        <section>
          <h2 className="text-2xl font-semibold">Sobre mim</h2>
          <p className="text-gray-700">
            Sou um psicólogo clínico experiente, dedicado a ajudar meus
            pacientes a alcançarem seu bem-estar mental.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold">
            Serviços Especializados que realizo:
          </h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Atendimento Pscológo para pessoas e grupos;</li>
            <li>Aconselhamento Psicológico;</li>
            <li>Avaliação Psicológico; </li>
            <li>Psicoterapia Breve;</li>
            <li>Tratamentos com Hipinose;</li>
            <li>Consultoria em recusrsos Humanos;</li>
            <li>Mediação de Comflitos;</li>
            <li>ADQ - Atendimento Domiciliar Qualificado;</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold">
            Atendimento Mediante agendamento prévio no consultório ou em
            domicilio.
          </h2>
         
          <h3>
            Para agendar uma consulta ou obter mais informações, entre em
            contato por:
          </h3>
          <ul className="list-disc list-inside text-gray-700">
          <li>(31) 991066-0339</li>
          <li>(31) 98977-8347</li>
          <li>e-mail claudioframone@.com</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
