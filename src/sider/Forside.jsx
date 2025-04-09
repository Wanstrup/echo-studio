import React, { useState, useEffect } from 'react';

// Light mode images
import image1Light from '../assets/bil9.webp';
import image2Light from '../assets/bil10.webp';
import image3Light from '../assets/bil6.webp';
import image4Light from '../assets/image002.gif';

// Dark mode images - replace these with your actual dark mode image paths
import image1Dark from '../assets/bil1.webp';  // Replace with your actual dark image
import image2Dark from '../assets/bil2.webp'; // Replace with your actual dark image
import image3Dark from '../assets/bil3.webp';  // Replace with your actual dark image
import image4Dark from '../assets/image002.gif'; // Replace with your actual dark image

import Slideshow from '../komponenter/Slideshow';
import './Forside.css';

function Main() {
  const [isDarkMode, setIsDarkMode] = useState(
    document.body.classList.contains('dark-mode')
  );
  
  // Listen for changes to the body class
  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.body.classList.contains('dark-mode'));
    };
    
    // Initial check
    checkDarkMode();
    
    // Set up a MutationObserver to watch for changes to the body's class list
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'class'
        ) {
          checkDarkMode();
        }
      });
    });
    
    observer.observe(document.body, { attributes: true });
    
    // Clean up observer on component unmount
    return () => observer.disconnect();
  }, []);
  
  // Select images based on current theme
  const image1 = isDarkMode ? image1Dark : image1Light;
  const image2 = isDarkMode ? image2Dark : image2Light;
  const image3 = isDarkMode ? image3Dark : image3Light;
  const image4 = isDarkMode ? image4Dark : image4Light;

  return (
    <main className="hvorforos-content">
      <h1>Echo Studio</h1>

      {/* Første sektion: Tekst først, billede efter (på mobil) */}
      <section className="grid-section section-first">
        <div className="text-content">
          <h2>Hvad er et bæredygtigt webdesign?</h2>
          <p>
          Hos Echo Studio fokuserer vi på at skabe digitale løsninger, der forener funktionalitet, æstetik og ansvarlige teknologivalg. Vi optimerer kode, implementerer energieffektive teknologier og anvender hurtigere billedformater som WebP for at reducere ressourcetrækket og minimere CO₂-aftryk – uden at gå på kompromis med brugeroplevelsen eller designet.
          </p>
          <p>
          Vores tilgang sikrer, at hjemmesider er både langtidsholdbare og effektive, samtidig med at de leverer en stærk visuel identitet. Ved at optimere serverløsninger og vælge teknologier, der er mindre belastende, skaber vi digitale produkter, der ikke kun fungerer optimalt, men også tager hensyn til den digitale miljøpåvirkning.
          </p>
        </div>
        <div className="image-content">
          <img src={image1} alt="Ekspertise og erfaring" />
        </div>
      </section>

      {/* Remaining sections with updated image references */}
      <section className="grid-section section-second">
        <div className="image-content">
          <img src={image2} alt="Innovative løsninger" />
        </div>
        <div className="text-content">
          <h2>Hvorfor er det vigtigt?</h2>
          <p>
          I en tid med stigende digitalisering er det afgørende at overveje den energi og de ressourcer, der bruges til at drive online indhold. Hjemmesider bruger store mængder energi, og uden ansvarlige valg kan deres miljøpåvirkning blive betydelig. Ved at vælge ansvarligt design kan vi reducere CO₂-aftrykket og bidrage til en mere skånsom fremtid, samtidig med at vi sikrer en effektiv og positiv brugeroplevelse.
          </p>
        </div>
      </section>

      <section className="grid-section section-third">
        <div className="text-content">
          <h2>Hvilke tiltag vælger vi og hvorfor fokuserer vi på det?</h2>

          <h3 className="pros">Pros:</h3>
          <ul>
            <li>Effektiv kodeoptimering → Hurtigere loadtider og lavere energiforbrug.</li>
            <li>Billedoptimering (WebP, SVG) → Reducerer filstørrelser uden kvalitetstab.</li>
            <li>Strømlinet serverløsning → Mindsker unødigt ressourceforbrug.</li>
            <li>SEO-optimering → Forbedrer synlighed og brugeroplevelse.</li>
            <li>Skræddersyet webdesign → Visuelt stærke løsninger uden skadelige kompromiser.</li>
            <li>Brugervenlig navigation → Forbedrer interaktion og tilgængelighed.</li>
            <li>Gennemsigtig kommunikation → Vi viser både fordele og begrænsninger, så brugeren kan træffe informerede valg.</li>
          </ul>

          <h3 className="cons">Cons:</h3>
          <ul>
            <li>Begrænset brug af tunge animationer & videoer → Vi optimerer visuelt indhold, men kan ikke altid undgå tunge elementer, hvis de understøtter brugeroplevelsen.</li>
            <li>Green hosting er ikke en universalløsning → Vi vælger servere ud fra en helhedsvurdering, hvor ydeevne og bæredygtighed balanceres.</li>
            <li>Mere tid til udvikling af optimerede løsninger → Nogle tekniske tiltag kræver ekstra udviklingstid, men det resulterer i mere langtidsholdbare websites.</li>
            <li>Ikke alle tredjepartsværktøjer er optimerede → Vi vælger de mest effektive integrationer, men nogle eksterne systemer kan være tunge at køre.</li>
          </ul>
        </div>
        <div className="image-content">
          <img src={image3} alt="Kundefokus og resultater" />
        </div>
      </section>

      <section className="grid-section section-fourth">
        <img src={image4} alt="Echo Badge" className="full-width-gif" />
        <div className="text-content">
          <h2>Echo Studio Badge</h2>
          <p>Hos Echo Studio designer vi ikke bare flotte og funktionelle websites – vi tænker også på miljøet. Derfor tilbyder vi vores "Bæredygtigt Webdesign"-badge til alle de virksomheder, vi samarbejder med. Badget viser jeres kunder, at I har valgt en website, der er designet med omtanke for miljøet. Det betyder, at jeres website er optimeret til lavere energiforbrug, hurtigere indlæsningstider og mere bæredygtige digitale løsninger. Ved at integrere vores badge på jeres website sender I et klart signal om, at I tager ansvar for en grønnere digital fremtid – og inspirerer andre til at gøre det samme. </p>
          <p>Vil I have en hjemmeside, der ikke bare ser godt ud, men også gør en forskel? Kontakt os i dag, og lad os skabe en bæredygtig løsning sammen!</p>
        </div>
      </section>

      <section className="slideshow-section">
        <h2>Vores cases</h2>
        <Slideshow />
      </section>
    </main>
  );
}

export default Main;