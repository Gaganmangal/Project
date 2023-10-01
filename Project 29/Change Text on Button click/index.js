const text = document.querySelector('h1');
const button = document.querySelector('button');

button.addEventListener('click',()=>{
    if(text.innerText === 'The most affordable learning platform'){
        text.innerText = "PW Skills"
    }
    else{
        text.innerText = "The most affordable learning platform"
    }
})
// console.log(text);