//3status // 1. éppen vmi történik 2. aztán folytatólagosan tudjuk használni

/* const showMessageLater = (msg) => {
    setTimeout( () => {
        return msg
    }, 3000)
}

console.log(showMessageLater("Hello")); //azért undefined, mert a settimeout miatt nem várja meg*/

//A fenti helyett
//Rejectt érdemes használni a hibák miatt
const showMessageLater = (msg) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            if (msg === "Hello") {
                return reject("Something went wrong")
            }
            return resolve(msg)
        }, 2000)
    })
}
//Indítsd a függvényt
showMessageLater("Hello2").then( (result) => {
    console.log(result);
    showMessageLater("Hello3").then( (result) => {
        console.log(result);
        showMessageLater("Hello4").then( (result) => {
            console.log(result);
        })
    })
}).catch( (err) => {
    console.log(err);
})
