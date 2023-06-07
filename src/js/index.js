const text = document.querySelector(".text");
console.log(text)



const typeName = (value) => {
    const textArray = value.innerHTML.split('');
    
    value.innerHTML = "";

    textArray.forEach((letra, i) => {
        setTimeout(() => {
            value.innerHTML += letra;
        }, 110 * i)
    });
}

typeName(text);