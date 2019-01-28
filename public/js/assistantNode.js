const assistantButton = document.querySelector('#assistantButton');
const output = document.querySelector('#output');

assistantButton.addEventListener('click',()=>{
    fetch('/testAssistant')
        .then(data => data.json())
        .then((resp) =>{
            console.log(resp);
            output.innerHTML= resp;
            // buildCharacter(resp);
            // main.innerHTML = " ";

            createCharacter(resp);
        })
});