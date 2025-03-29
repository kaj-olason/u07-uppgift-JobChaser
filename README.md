# Job Chaser

En webbapplikation som hämtar jobbannonser från ett API. Där användare kan välja från dropdown på aningen jobb-kategori eller anstälningsform. Du kan även göra sökning med fri text.
Det finns även en inloggningssida samt en skapa-konto sida, men validerfade fält.
Appen kan växla mellan dark- och light mode med knapptryckning på en sol- respektive måne-ikon.
Det är även en viss animering både på inloggnings- och skapa-konto sidorna och även vid fetchning av jobbannonser.

## Styrkor & svagheter

Jag är rätt nöjd med min lösning av dark-mode. Fick lära mig att det fanns en "dark" i tailwind och använda mig utav det.
Jag är glad också hur jag fick till animeringen i listningen av jobb, där var det en utmaning att få en efter en att animera, men jag löste det!

Jag upplever fetchning från APIn går lite långsamt, en förbättringspotental skulle kunna vara att bygga in funktionalitet där du endast fetchar 20-30 åt gången.
Jag hade även med hämtning av företagens respektive loggo, men det gick för långsamt att fetcha då. Själv den koden finns kvar men bort-kommiterad.

## Preview

Du kan se min job chaser sajt på [följande sida](https://u07-uppgift-job-chaser.vercel.app/)

## Frågor & Svar (teoretiska uppgiften)

### Vecka 1
**Allmänt om ramverket React: Hur/Varför uppkom det? Vad är centralt i React?**  
React uppkom 2011 av företaget Meta som utvecklade Facebook feed med detta komponents-baserande javascript bibliotek. 2012 inplementerades det även på Instagram och 2013 släpptes det som open scource. React är dels uppbyggt på Single-Page Applications (SPAs), vilket gör att webbsidor behöver inte laddas om som det gamla traditionella sättet att bygga webbsidor på. React är dessutom såkallat komponentbaserat, där stil, funktionallitet och struktur lever samman i en komponent (pusselbit), vilket gör att det blir mycket lättare att återanvända kod och funktion.

**Vad är JSX?**  
Det är ett syntax-tillägg till javascript, som gör det möjligt att ha både uppmärkning och logik i samma komponentsfil i React.

**Vad är en komponent?**  
Stil, funktionallitet och struktur lever samman i en komponents-fil (pusselbit), vilket gör att det blir mycket lättare att återanvända kod och funktion.

**Vad är props?**  
Man komunisererar data mellan react componenter via props.

**Vad menas med one-way-dataflow?**  
Det menas att data i react applikation födar bara åt ett håll, från förälder komponent till barn komponent.

**Hur kan man använda sig av konditionell rendering i React?**  
Konditionell rendering i react fungerar på samma sätt som vilkor i javascript. Du kan använda t.ex if-sats i javascript och renderar komponent beroende av ett state i applikationen.

**Vad menas med en återanvändbar komponent?**  
Det är en stylad, strukturerad och funktionsmässig "pusselbit" som du kan återanvända hur många gånger du vill i en webbaplikation.
