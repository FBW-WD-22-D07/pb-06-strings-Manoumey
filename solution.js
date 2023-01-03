
//1-Deklariere eine Variable namens  mit dem Wert "I can walk in the park all day!". Gib das Wort //"park" auf der Konsole aus.

let parkWalkStr = "I can walk in the park all day!";

console.log(parkWalkStr.substr(18, 4));
console.log(parkWalkStr.slice(18, 22));
console.log(parkWalkStr.substring(18, 22));

//2-Deklariere eine Variable namens helloStr mit dem Wert "Hello World". Wandle den Wert in Großbuchstaben um und gib den umgewandelten Wert auf der Konsole aus.

let helloStr = "Hello World";
let helloStrGroß = helloStr.toUpperCase();
console.log(helloStrGroß);

//3-Deklariere eine weitere Variable namens earthlingsStr mit dem Wert "Hello Earthling". Wandle d+-en Wert in Kleinbuchstaben um und gib den umgewandelten Wert in der Konsole aus.

let earthlingsStr = "Hello Earthling";
let earthlingsStrKlein = earthlingsStr.toLowerCase();
console.log(earthlingsStrKlein);

//4-Deklariere eine Variable namens jsStr mit dem Wert "JavaScript". Verwende eine String-Methode, um die Zeichen "aSc" aus deiner Variable auszugeben.

let jsStr = "JavaScript";
console.log(jsStr.substring(3, 6));
console.log(jsStr.slice(3, 6));
console.log(jsStr.substr(3, 3));

//5-Deklariere eine Variable namens niceShoesStr mit dem Wert "nice shoes". Prüfe mit einer String-Methode, ob der Satz "nice shoes" die Buchstaben l oder n enthält. Gib das Ergebnis jeder Prüfung auf der Konsole aus.

let niceShoesStr = "nice shoes";
console.log(niceShoesStr.indexOf("l"));
console.log(niceShoesStr.includes("l"));

console.log(niceShoesStr.indexOf("n"));
console.log(niceShoesStr.includes("n"));

//6-Erstelle eine Variable namens oldStr und weise ihr ein Wort deiner Wahl als Wert zu. Erstelle eine weitere Variable mit dem Namen newStr und weise ihr als Wert den Wert von oldStr zu, wobei das erste Zeichen der Zeichenkette vorne und hinten hinzugefügt wird, z.B.: Bananen => BBananenB

let oldStr = "Auto";
let newStr = (`${oldStr[0]}${oldStr}${oldStr[0]}`);
console.log(newStr);

//7-Erstelle eine Variable mit dem Namen scritcherStr und weise ihr ein Wort deiner Wahl mit mindestens 3 Zeichen als Wert zu. Erstelle eine weitere Variable mit dem Namen lastThreeChars und benutze eine String-Methode, um die letzten 3 Zeichen von scritcherStr zu erhalten und sie als Wert der neuen Variable zuzuweisen. Füge den Wert von lastThreeChars an den Anfang und das Ende von scritcherStr hinzu und gib das Ergebnis auf der Konsole aus, erwartete Ausgabe: Scritch => tchScritchtch

let scritcherStr = "Tasche";
let lastThreeChars = scritcherStr.slice(scritcherStr.length - 3, scritcherStr.length);
console.log(lastThreeChars);
console.log(`${lastThreeChars}${scritcherStr}${lastThreeChars}`);



//8-Erstelle eine Variable namens boogieNightsStr und weise ihr ein Wort deiner Wahl mit mindestens 2 Zeichen als Wert zu. Tausche die Stellen des ersten und letzten Buchstabens und gib das Ergebnis auf der Konsole aus, erwartete Ausgabe: BoogieWoogie => eoogieWoogiB

let boogieNightsStr="Kuchen";
const Anfang=boogieNightsStr[0];
const Ende=boogieNightsStr[boogieNightsStr.length-1];
let boogieNightsStrAnfang=boogieNightsStr.replace(boogieNightsStr[boogieNightsStr.length-1],Anfang);
let boogieNightsStrAnfangEnde=boogieNightsStrAnfang.replace(boogieNightsStrAnfang[0], Ende);
console.log(boogieNightsStrAnfangEnde);

//9-Erstelle 3 Variablen mit den Namen firstName, city und job und weise ihnen String-Werte zu, d.h. `const firstName = "Maria"; const city = "Berlin", usw. Gib mit Hilfe der Variablen und der String-Interpolation einen Satz auf der Konsole aus, z. B.: "Mein Name ist Maria. Ich wohne in Berlin und bin Lehrerin".

//10-Deklariere eine Variable namens foxStr und weise ihr den Wert "the quick brown fox" zu (alles in Kleinbuchstaben). Schreibe den ersten Buchstaben der Zeichenkette groß. Gib das Ergebnis auf der Konsole aus.




