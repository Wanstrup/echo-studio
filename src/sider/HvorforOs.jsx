import React from 'react';
import './HvorforOs.css';

const HvorforOs = () => {
  return (
    <div className="why-us-container">
      <section className="why-us-section">
        <h2>404: Spild af ressourcer not found</h2>
        <p>
          Bæredygtigt webdesign lyder måske teknisk og tørt – men hos os er det alt andet end kedeligt! Vi ser det som en kreativ udfordring at skabe smukke, lynhurtige og brugervenlige hjemmesider, der samtidig gør en forskel. For os handler det ikke kun om at minimere CO₂-aftryk, men også om at optimere brugeroplevelsen, fjerne unødvendigt fyld og gøre webdesign enkelt, elegant og effektivt. Vi skaber hjemmesider, der ikke kun ser godt ud, men som også fungerer problemfrit – både for dine besøgende og for miljøet.
        </p>
      </section>

      <section className="why-us-section">
        <h2>CTRL + ALT + DELETE dårligt webdesign</h2>
        <p>
          Der findes mange webbureauer derude, men vi tør godt sige, at vi skiller os ud. Vi er ikke bare en flok kodere, vi er kreative problemløsere, der elsker at nørde design, funktionalitet og brugeroplevelser. Vi forstår, at en hjemmeside ikke bare er en digital platform – det er din virksomheds ansigt udadtil. Derfor sørger vi for, at den afspejler din identitet ned til mindste detalje. Hvad gør vi anderledes? Vi holder tingene simple. Ingen tunge systemer, der gør din side langsom. Ingen overflødige features, du aldrig bruger. Kun gennemtænkt design og funktionalitet, der giver mening. Vi udvikler hjemmesider, der er nemme at vedligeholde, lette at navigere og bygget til at præstere – uanset om du er en nystartet virksomhed eller en etableret spiller, der vil skille sig ud i mængden.
        </p>
      </section>

      <section className="why-us-section last-section">
        <h2>Din hjemmeside, din rejse – vi er med hele vejen</h2>
        <p>
          Vi ved, at valget af en ny hjemmeside er en proces, og derfor står vi klar til at guide dig hele vejen. Din brugerrejse hos os starter med en erkendelse af, at din nuværende hjemmeside enten mangler eller kan optimeres i en mere bæredygtig retning. Herfra tager vi en dialog om dine behov og ønsker, så vi kan skræddersy en løsning, der passer til din virksomhed. I udviklingsfasen kombinerer vi æstetik og performance, hvor vi skaber et let, hurtigt og veldesignet website. Når din hjemmeside er færdig, hjælper vi med implementering af brandingelementer, herunder vores bæredygtighedsbadge, så din digitale identitet bliver stærkere. Efter lanceringen stopper vores samarbejde ikke – vi tilbyder løbende vedligeholdelse og optimering, så din hjemmeside fortsat forbliver hurtig, sikker og bæredygtig.
        </p>
      </section>

      {/* Sektion for billede */}
      <section className="image-section">
        <img src="/src/assets/image001.webp" alt="Personlig Service" />
      </section>
    </div>
  );
};

export default HvorforOs;
