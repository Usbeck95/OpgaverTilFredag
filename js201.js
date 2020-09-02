var a = Number(prompt('Enter a year')); //spørger bruger om et år
function leapYear(a) // laver en funktion med navnet leapyear og som tager parameteren a
{
  return ((a % 4 == 0) && (a % 100 != 0)) || (a % 400 == 0);
}

console.log(leapYear(a)); // kalder på funktionen i consolen og her sendes værdien af parametren som en argument til funktionen.
