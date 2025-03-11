let deportista = {
    nombre : 'NM',
    energia : 100,
    experiencia : 10,
    entrenarHoras : function (horas) {
        this.energia -= horas * 5,
        console.log(this.energia)
        this.experiencia += horas * 2
        console.log(this.experiencia)
    }
}

console.log("ANTES DE COMENZAR ENTRENAMIENTO")
console.log("DEPORTISTA ENERGIA: " +deportista.energia)
console.log("DEPORTISTA EXPERIENCIA: " +deportista.experiencia)
console.log("ENTRENANDO")
deportista.entrenarHoras(5);
console.log("FIN DE ENTRENAMIENTO" )
console.log("DEPORTISTA ENERGIA: " +deportista.energia)
console.log("DEPORTISTA EXPERIENCIA: " +deportista.experiencia)
