/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 1");

let dog = "Pippo";
let num = 10;
let varBool = false;
let cat = null;
let prova;
let provaNotANumber = "ciao";

console.log("Esiste la variabile di tipo stringa, dove al suo inteno può essere contenuto del testo, il contenuto della variabile dog è: ", dog);
// console.log(dog);

console.log("La variabile numerica è un tipo di variabile numerico, può contenere una cifra numerica, in questo caso il contenuto di num è: ", num);
// console.log(num);

console.log("Esiste un tipo di varibile chiamata Booleana, dove al suo interno possiamo avere solo due tipi di dati, vero o falso, in questo caso, il contenuto della variabile varBool è: ", varBool);

console.log("Esiste un tipo di variabile a cui possiamo assegnare il valore NULL che identifica che al momento è una variabile vuota, quindi il contenuto della variabile cat è: ", cat);

console.log("Un tipo di variabile può essere anche vuota, senza contenuto, quindi in questo caso il risultato della variabile prova risulta essere: ", prova);

console.log("Esiste un tipo di variabile chiamata Not a Number data da un'operazione matematica, come ad esempio dalla sottrazione di un numero 12 e una variabile a cui abbiamo assegnato il contenuto di una stringa, quindi il risultato della sottrazione tra questi due sarà: ", 12 - provaNotANumber);

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const myName = "Francesco";

console.log("Esercizio 2, contenuto variabile myName: ", myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 3");
console.log("Risultato della somma di 12 + 20: ", 12 + 20);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x = 12;

console.log("Esercizio 4, variabile x: ", x);


/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

try {
  myName = "Ricciardi";
} catch (err) {
  console.log(err);
}
console.log(" Esercizio 5. myName con un il construtto costante, se proviamo a cambiare il contenuto, sarà: ", myName);

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 6. Sottrazione tra 4 e la variabile x: ", 4 - x);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1 = "john"
let name2 = "John"

console.log("Esercizio 7. risultato uguaglianza tra name1 e name2: ", name1 == name2);

console.log("EXTRA ", name2.toLowerCase() === name1);

// EXTRA RICETTA
console.log("Extra ricetta");

let caroteQnt = 80;
let zucchinaBiancaQnt = 50; //
let saleFinoQnt = 10;
let sedanoQnt = 60;
let fagioliQnt = 50; //
let olioQnt = 50;
let cavolfioreQnt = 900; // diviso
let rosmarinoQnt = 10;
let cipolleQnt = 160 // diviso
let patataQnt = 130;     // divisa
let pomodoriRamatiQnt = 120;
let zuccaQnt = 8000; // divisa
let porroQnt = 300;   //diviso
let piselliniQnt = 200;

const carote = "carote";
const zucchinaBianca = "Zucchine bianche";
const saleFino = "Sale fino";
const sedano = "Sedano";
const fagioli = "Fagioli";
const olio = "Qlio extra vergine di Oliva";
const cavolFiore = "Cavol Fiore";
const rosmarino = "Rosmarino";
const cipolle = "Cipolle Rosse";
const patata = "Patate";
const pomodori = "Pomodori Ramati";
const zucca = "Zucca";
const porro = "Porro";
const pisellini = "Pisellini";

let piatto = 0;

console.log("Ingredienti e quantitavo in grammi per il Minestrone di verdure");
console.log("Lavare la",zucca ,"e usatene ", zuccaQnt - 7750,"grammi");
console.log("Lavate e spuntate le", zucchinaBianca, "e usatene", zucchinaBiancaQnt * 3,"grammi e", cavolfioreQnt, "grammi di", cavolFiore);
console.log("Successivamente sfogliate il", porro, "con", porroQnt, "grammi.");
console.log("Prendete le", patata, "con", patataQnt * 3, "grammi.");
console.log("Procedete con i", pomodori, "riduceteli a cubetti e usatene", pomodoriRamatiQnt,"grammi.");
console.log("Spuntate e pelate le", carote, "con",caroteQnt, "grammi, e tritate finemente anche i", sedanoQnt, "grammi di", sedano);
console.log("Per finire legate con uno spago i rametti di", rosmarino ,"con le foglie di alloro per creare un mazzetto aromatico");
console.log("In una pentola capiente munita di coperchio versatel'", olio, "e in fine il", porro, "e",cipolle);
console.log("aggiungere",saleFinoQnt, "di",saleFino, "e i ",fagioli, "e i",piselliniQnt, "grammi di", pisellini);

console.log("In fine la quantità iniziale del piatto", piatto, "verrà a pesare", zuccaQnt - 7750 + zucchinaBiancaQnt * 3 + cavolfioreQnt / 3 + porroQnt + patataQnt * 3 + pomodoriRamatiQnt + caroteQnt + sedanoQnt +rosmarinoQnt + olioQnt + cipolleQnt / 2 + saleFinoQnt + fagioliQnt + piselliniQnt, "grammi");
