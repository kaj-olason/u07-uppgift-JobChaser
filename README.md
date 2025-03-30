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

### Vecka 2  
**Vad är state i React?**  
Det är ett sätt att lagra data som kan ändras över tid och påverkar hur komponenten renderas.  

**Vad är det för skillnad mellan state och props?**  
State är data som är dynamisk och kan ändra över tid beroende på interaktionen i applikationen, medans props är data som är flyttbar mellan koponenter.  

**Vad menas med en kontrollerad komponent i React?**  
State-baserad komponent. T.ex använder du gärna useState i ett formulär input, för att på så vis få full kontroll över inmatningen.  

**Vad är en callback handler?**  
I javascript är callback function en funktion som används som ett argument i en annan funktion. I react skulle en callback kunna vara en funtion som uppdaterar ett state i useState().  

**Vad menas med "lifting state up"?**  
Ibland behöver två eller flera child komponenter samma data från parent komponenten, så istället för att skapa individuella state i varje koponent så "lyfter" man istället state till parent komponenten och skickar ned datan som props till child komponenterna.  

**Vad är syftet med useEffect-hook i React?**  
Syfter med useEffect i react är att hantera sidoeffecteri funktionella komponenter. Som att hämnta API eller sätta timers functionalitet. kod i useEffect körs efter att komponenten har renderats.  

**Vad är syftet kring den s.k dependency-arrayen i useEffect?**  
Sytet är att kontrollera när en viss effekt skall köras. Med tom array körs effekten endast en gång, när komponenten först mountas. Utan array körs useEffekt varje gång komponenten renderas, vilket blir ganska "dyrt".  

### Vecka 3  
**Vilka fördelar finns det med att använda NextJS? Nackdelar?**  
**Förelarna** med NextJS är exempelvis att plattformen har ett inbyggt route fil-system, vilket är både gynnssamt för API samt navigering. NextJS är gynnsam för att bygga upp en fullstack application och hela applikationen kan sedan hostas hos Vercel. 
**Nackdelarna** är att NextJS är ganska komplext, så det kan ta lite tid att lära sig för nybörjare. Viss funktionalitet i NextJS är låst till Vercel, på så vis kan det vara begränsat. NextJS är under ganska så intensiv utveckling, därför kan det krävas tid för att uppdatera sig.  

**Vad menas med Routing? På vilket sätt löser NextJS Routing v.s "vanliga React"?**  
Routing tar hand om navigeringen i en Singel Page Application (SPA). "Vanlig" react behöver externt bibliotek för att hantera routing, vanligt vis React Routing. Detta är redan inbakat i NextJS fil-struktur.  

**Vad menas med Reacts ekosystem? Nämn några viktiga bibliotek i Reacts ekosystem?**
React ekosystem syftar man på verktyg, bibliotek och ramverk som ofta används tillsammans med react. Några vanliga är **React Router** som tar hand om navigeringen i react. **Redux** som ger komponenter tillgång till data globalt. **React Hook Form** som hantera formulär på ett smidigt sätt. **NextJS** som är ett ramverk till att bygga webbapplikationer i react.  

**Vad är syftet med useContext? Vilket problem med props löser den?**
Syftet med useContext är att är att ge komponenter tillgång till delad data, utan att behöva skicka props manuelt genom varje koponentnivå som kallas för "props drilling".  

### Vecka 4  
**Vad är Redux Toolkit?**  
Redux Toolkit är ett samling vertyg som gör det smidigare och enklare att handskas med Redux. Redux kan kräva mycket boilerplate-kod, redux-toolkit redicerar detta och gör det enklare. Det blir mindre och renare kod.  

**När, i vilka situationer vill man använda Redux Toolkit?**  
Man använder Redux Toolkit när man bygger en react-baserad applikation och har behov av ett mer organiserat, förutsägbart och skalbart sätt att hantera global state. Där state management blir för koplext för useState eller useContext.
