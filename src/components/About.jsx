import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-gray-100 p-8 mt-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">A Propos de moi</h2>
        <p className="text-lg"><span lang="fr">
            <strong>Etudiant</strong> en première année en Master e-services à Lille, j'ai toujours été passionné par la programmation. 
            <br/>
            J'ai commencé la programmation jeune avec les concours <strong>Algoréa</strong> ainsi que <strong>Prologin</strong> qui initient bien à la programmation et en 2023 j'ai participé au <strong>Hackathon Exolegend</strong> (concours Robotique en C++).
            <br/>
            J'ai déjà eu l'occasion de réaliser plusieurs stages en entreprise dont 1 spécialement en développement logiciel dans l'entreprise <strong><a class="site" href="https://ianord.fr" target="_blank">IANord</a></strong> où j'ai pu participer au développement de nombreuses features d'une de leurs applications. 
            <br/>
            J'ai de plus créé différents projets personnels afin de continuer à m'exercer durant mon temps libre. Vous pouvez aller les consulter dans l'onglet <strong><a class="site" href="Projects.html">Projets</a></strong></span></p>
      </div>
    </section>
  );
};

export default About;
