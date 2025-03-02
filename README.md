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
