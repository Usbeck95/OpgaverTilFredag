var cpr = Number(prompt('Indtast et CPR-nummer'));
function erlige(cpr) 
{
    return (cpr %2 == 0); // her regner den ud, om tallet man taster er lige eller ikke
}
    
console.log(erlige(cpr));