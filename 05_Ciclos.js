/*
//while
while (condition) {
    
}

//for
for (let index = 0; index < array.length; index++) {
    const element = array[index];
}
*/

//for in
var persona = {
    nombre: "Jhony",
    apellido: "Hurtado",
    viajes: ["",""]
}
for (const key in persona) {
    console.log(persona[key])
}