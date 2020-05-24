# Hangman

I denna övning ska vi bygga spelet "Hänga gubbe". Övningen är uppdelad i flera småuppgifter som i sin tur blir det komplette spelet. Mer om spelet och reglerna hittar ni på: [https://sv.wikipedia.org/wiki/H%C3%A4nga_gubbe](https://sv.wikipedia.org/wiki/H%C3%A4nga_gubbe)


# Övning 1

I videoklippen har vi lärt oss hur man importera react ifrån CDN. Nu ska vi lära oss hur man brukar göra det på de "vanliga" sätter

### Yarn

Öppna upp terminalen och kör `yarn create react-app namnet-på-din-app`

### NPM

Öppna upp terminalen och kör `npm init react-app namnet-på-din-app`

---
 1. Efter installation så navigera in i er nya mapp
 2. Öppna upp projektet i Visual Studio Code
 3. Undersök innehållet och vad för filer du har fått
 4. Starta igång projektet med att skriva `npm run start` i terminalen

# Övning 2

Ladda ner bilden nedan och lägg den som bakgrundsbild för **App.js** komponenten.

[Bild](https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/61f7685f-47e5-49a0-b5cb-ca6b8cab4228/drok89-a7a2a550-ba87-40a6-9701-b635550d55b3.jpg)



# Övning 3

Skapa en rubrik med innehållet **"Hänga gubbe"**.  Skapa sedan en paragraf och beskriv kortfattat hur spelet fungerar. 

# Övning 4

Importera denna font (https://fonts.googleapis.com/css?family=Coming+Soon) och lägg den som font-family i din `index.css` fil. 

# Övning 5
Skapa en mapp som heter images och lägg till bilden nedan i mappen. Importera sedan bilden i `App.js` och lägg en vit kant runt om bilden. Resultatet ska vara enligt bilden nedan


[Bild att ladda ner](https://ibb.co/stm1kZS)
[Resultat](https://ibb.co/Yj8TJdg)

# Övning 6
Rita ut de horisontella strecken. Tänk på ett ord och sedan hårdkoda ut strecken baserat på ordets längd. Resultatet ska bli enligt bilden nedan. 

Lägg även till en ny paragraf under strecken med texten **"Antal gissningar: 0"**

[Resultat](https://ibb.co/bB7fkFx)

# Övning 7
Skapa nu en knapp som ser ut enligt följande ([Knapp](https://ibb.co/FWTQc54))

Knappens färger är följande: 
  

      #ffc107
      #ff9800

*Tips: Använd er av box-shadow & background*

Lägg sedan ut knappen under paragrafen. Resultatet ska bli så här ([Bild](https://ibb.co/pP6fMb1))

# Övning 8 
Skapa nu en knapp för varje bokstav i alfabetet (a-ö). Hårdkoda inte in 29 knapar utan använd dig av metoder/tekniker som vi har lärt oss under videoklippen. 

*Tips: Använd map funktioner från ES6
Extra tips: Undersök split funktionen*

Så här ska det ungefär se ut ([Bild](https://ibb.co/cYvXXW2))

# Övning 9
Just nu händer inget när man trycker på knapparna. Lös en funktion som gör att den trycka knappen blir inaktiv samt att färgen ändras till `(#bdbdbd)`

Ska se ut så här ([Bild](https://ibb.co/82MJWFX))

# Övning 10
Skapa nu en knapp under bokstäverna och låt den ha värdet **"Återställ"**. Lägg även till en funktion ifall man trycker på knappen så ska alla inaktiva knappar i alfabetet bli aktiva igen. 


# Övning 11

 1. Skapa en ny fil som heter **words.js**. Lägg in några slumpgenerade
    ord i en array. Bygg sedan en funktion som returnera ett av orden
    ifrån arrayen. 
    
 2. Importera sedan in denna fil i vår **App.js** fil och ersätt ditt
    hårdkodade ord du gjorde i *övning 6* med ordet som funktionen
    returnerar. Antal horisontella streck ska också stämma överens med
    ordets längd.
    
 3. När man trycker på "återställ"-knappen så ska ett nytt ord väljas.
