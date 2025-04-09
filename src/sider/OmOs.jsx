// OmOs.js
import React from 'react';
import './OmOs.css';  // CSS fil til styling

const OmOs = () => {
  return (
    <section className="omOs-section">
      <div className="text-container">
        <h2>Om os - Drivkraft</h2>
        <p>
          Hos Echo Studio er vi drevet af en <span>passion</span> for at skabe digitale løsninger, der ikke kun ser godt ud, men som også er funktionelle, brugervenlige og ansvarlige overfor vores planet. Vores <span>mission</span> er at hjælpe virksomheder med at opbygge en stærk digital tilstedeværelse, der ikke bare formidler et budskab, men som også skaber et positivt aftryk på verden. Vi ønsker at sætte en ny standard for webdesign, der giver genlyd – som et ekko, der spreder sig og inspirerer andre til at vælge løsninger, der er mere skånsomme overfor ressourcerne.
        </p>
        <p>
          Vores rejse begyndte med et ønske om at kombinere æstetik med funktionalitet på en måde, der også tager ansvar for vores miljø. Vi har set et behov for digitale løsninger, der ikke kun er smarte og effektive, men også med omtanke for de ressourcer og energi, de kræver. Derfor besluttede vi at starte Echo Studio – et bureau, hvor vi kombinerer design, teknisk performance og omtanke for at skabe langtidsholdbare løsninger. Vores mål er at hjælpe vores kunder med at kommunikere deres værdier klart og effektivt, samtidig med at vi støtter dem i at træffe ansvarlige valg for deres digitale tilstedeværelse.
        </p>
        <p>
          Vores <span>vision</span> er ikke kun at skabe æstetiske websites, men at bygge løsninger, der kan være med til at forme en bedre fremtid for både virksomheder og planeten. Hos Echo Studio er vi stolte af at tilbyde skræddersyede websites, der tydeligt formidler vores kunders identitet og samtidig er ansvarlige valg for den digitale verden. Gennem tæt samarbejde, kreativitet og innovation hjælper vi vores kunder med at sikre, at deres budskaber ikke bare bliver set, men også husket og videreført på en måde, der giver værdi på lang sigt.
        </p>
      </div>
      <div className="image-container">
        <img src="src/assets/bil5.webp" alt="Om os billede" />
      </div>
    </section>
  );
};

export default OmOs;


