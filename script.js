const menutoggle = document.getElementById('menu-toggle')
const menuclose = document.getElementById('menu-close')
const menu = document.querySelector('.menu')
const ShortenerLinkInput = document.querySelector('.ShortenerInput')
const ShortenerLinkButton = document.querySelector('.ShortenerButton')
const Display = document.querySelector('.shortener-links')


menutoggle.addEventListener('click', () =>{
    menu.classList.toggle('animate')
})

menuclose.addEventListener('click', () =>{
    menu.classList.toggle('animate')
})

ShortenerLinkButton.addEventListener('click', () =>{
    CreateShortLinkDisplay(Display)
})


async function url_Encorder(){
  try{
   const ShortenerLinkInputValue = ShortenerLinkInput.value
   const url_Shotener = await fetch(`https://api.shrtco.de/v2/shorten?url=${ShortenerLinkInputValue}`)
   const urlData = await url_Shotener.json()
   LinkEncurter = await urlData.result.short_link
  }
  catch{
    alert('Link Invalido')
  }
}

async function CreateShortLinkDisplay(DisplayChange){
    await url_Encorder()

    return DisplayChange.innerHTML = `<span> 
    <div> 
    <p>${LinkEncurter}</p> 
    <button onclick="copyToClipboard()">Copy</button> 
    </div> 
    </span>`
}


function copyToClipboard(){
    const PopUPCopyButton = document.querySelector('.shortener-links p')
    navigator.clipboard.writeText(PopUPCopyButton.innerHTML)
}