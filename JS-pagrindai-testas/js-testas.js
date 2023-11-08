/*
1. Sukurkite funkciją, kuri paverstų eurus į dolerius.
Sugeneruokite atsitiktinį skaičių (eurų sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
doleriais.
*/
let kursas = 1.0661
let eurai =0
function euraiDoleriai(){
  let doleriai= (eurai * kursas).toFixed(2)
   return doleriai
}
eurai = Math.floor(Math.random() * 1000 +1 )

console.log(`${eurai} EUR bus ${euraiDoleriai()} USD`)

/*
2. Sukurkite funkciją, kuri paverstų dolerius į eurus.
Sugeneruokite atsitiktinį skaičių (dolerių sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
eurais.
*/
let doleriai = 0
function doleriaiEurai(){
    eurai = (doleriai/kursas).toFixed(2)
    return eurai 
}
doleriai = Math.floor(Math.random() * 1000 +1 )

console.log(`${doleriai} USD bus ${doleriaiEurai()} EUR`)

/*
3. Parašykite programą, kuri suskaičiuotų žmogaus BMI (body
mass index), kai yra žinomas žmogaus ūgis ir svoris. 
BMI formulė: žmogaus svoris (kg) padalintas iš ūgio metrais kvadratu. 
Pvz. svoris = 80kg, ūgis = 1.8 m. 
BMI = 80 / 1.8**2 = 24.69
Viršsvoris = BMI > 25
Normalu = 18.5 <= BMI < 25
Per mažas svoris = BMI < 18.5
*/
 let weight = 58
 let height = 1.68
 function bodyMassIndex(kilos, meters){
    let bmi = (
        kilos/meters**2).toFixed(2)
    if(bmi<25 && bmi >=18.5){
        console.log(`jusu BMI lygus:${bmi}, Jusu svoris normalus`)
    } else if(bmi< 18.5){
        console.log(`jusu BMI lygus:${bmi}, Jusu svoris per mazas`) 
    } else{
        console.log(`jusu BMI lygus:${bmi}, Jus turit virssvori`)
    }
 }
  bodyMassIndex(weight,height)


/*
4. Parašykite programą, kuri iš duoto žmogaus amžiaus metais
pasakytų kiek tai yra sekundėmis, minutėmis, valandomis,
dienomis.
*/
let amzius = 40
function skaiciuokle(){
    let dienos =amzius *365
    if(amzius>=4){
        dienos= amzius *365 + amzius/4 
    }
      //kas 4 metai buna viena diena daugiau
    let valandos =dienos *24
    let minutes = valandos *60
    let sekundes = minutes *60

    console.log(`${amzius} metai yra: ${dienos} dienos,
            ${valandos} valandos,
            ${minutes} minutes,
            ${sekundes} sekundes.`)
}
skaiciuokle()


/*
5. Parašykite programą, kuri konvertuos termometro
duomenis iš Farenheito į Celsijų, ir atvirkščiai.
°C = 5/9 · (°F – 32).
*/

let laipsniai = Math.round(Math.random()*100)// sis kintamasis, galetu panaudoti reiksme gauta is input elemento

function farToCel(){
    let laipsniaiC =5/9 *(laipsniai -32)
    console.log(`${laipsniai} °F lygu ${laipsniaiC.toFixed(1)} °C`)
}
farToCel()

function celToFar(){
    let laipsniaiF = laipsniai * 9/5 +32
    console.log(`${laipsniai} °C lygu ${laipsniaiF.toFixed(1)} °F`)
}
celToFar()

/*
6. Sukurkite kodą, kuris išspausdins į konsolę
1-2-3-4-5-6-7-8-9-10 vienoje eilutėje. Prieš vienetą ir po
dešimties neturėtų būti brūkšniuko.
*/

let arr =[]
for(let i = 1; i <=10 ; i++){
        arr.push(i)
    
}console.log(arr.join('-')
)

/*
7. Panaudokite for ciklus, kad sukurtumėte tokį vaizdą konsolėje.
*
**
***
****
*****
*/
let stars = ['*']
for(let i =1; i<=5;i ++){
    console.log(stars.join(''))
    stars.push('*')
}

/*
8. Parašykite kodą, kuris apskaičiuos kiek liko dienų iki Kalėdų.
*/
let siandien = new Date()
let chrsitmas = new Date('December 25 2023 00:00')

let timeLeft = chrsitmas - siandien
let days = Math.floor(timeLeft/86400000)

if(days<10){
    days = days.toString().padStart(2,'0')
}
console.log(`Iki Kaledu liko: ${days} dienos`)

/*cia kodas jei reiktu zinot tiksliau kiek liko laiko, parasius koda buvo gaila istrint :)

let hours = Math.floor((timeLeft % 86400000)/3600000)

let mins = Math.floor((timeLeft % 86400000 %3600000) / 60000)

let secs = Math.floor((timeLeft % 86400000 %3600000  %60000)/1000)
console.log(timeLeft,days,hours,mins,secs)

if(hours < 10) {
    hours = hours.toString().padStart(2,'0')
 }

 if(mins < 10) {
    mins = mins.toString().padStart(2,'0')
 }

if(secs < 10) {
    secs = secs.toString().padStart(2,'0')
}
*/



/*
9. Parašykite kodą, kuris apjungia masyvo duomenis į vieną
tekstinę eilutę. Turėtumėte gauti tokį rezultatą:
Tomas,Dainius,Paulius,Jonas
Tomas+Dainius+Paulius+Jonas
*/
let zmones = ['Tomas','Dainius','Paulius','Jonas']
console.log(zmones.join(',')+'\n'+zmones.join('+'))


/*
10. Parašykite kodą, kuris sugeneruos dvylikos simbolių
slaptažodį. Slaptažodyje privalo būti bent po vieną: didžioji raidė,
mažoji raidė, skaičius, specialusis simbolis. Visi slaptažodžio
simboliai privalo būti atsitiktiniai ir atsitiktine tvarka.
*/
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]
let passwordLength = 12
let password = []
/* creatPassword funkcija sukuria atsitiktini slaptazodi is 12 charakteriu*/
function creatPassword(){
    for(let i = 1; i<=passwordLength; i++){

        let randomChar = Math.floor(Math.random() * characters.length)
        password.push(characters[randomChar])
    }

}

let capitals =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
let lowerCases =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
let numbers =[ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let specialChar = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
        "/"]


   while(true){
        creatPassword()
        if(password.some((char)=>capitals.includes(char)) && password.some((char) => lowerCases.includes(char)) && password.some((char)=>numbers.includes(char)) && password.some((char)=>specialChar.includes(char))){
            
              console.log(password.join("")) 
              break   
        } 

  }

