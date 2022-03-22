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

const myFunction = async () => {
    
    try {
        let result = ""
        result = await showMessageLater("Hello5")
        console.log(result);
        result = await showMessageLater("Hello6")
        console.log(result);
        result = await showMessageLater("Hello7")
        console.log(result);
        result = await showMessageLater("Hello")
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
myFunction()

