class Password {
  
  genStrong () {
    let pass =
      'abcdefghijklmnopqrstvwuxyz1425639870!@#*%&ABCDEFGHIKLMNOPQRSTUVWXZY'
    let word = ''
    for (let i = 0; i <= 15; i++) {
      let c = Math.floor(Math.random() * pass.length)
      word += pass[c]
    }
    console.log(word)
    return word
  }
  genWeak () {
    let pass =
      'abcdefghijklmnopqrstvwuxyz1425639870!@#*%&ABCDEFGHIKLMNOPQRSTUVWXZY'
    let word = ''
    for (let i = 0; i <= 8; i++) {
      let c = Math.floor(Math.random() * pass.length)
      word += pass[c]
    }
    console.log(word)
    return word
  }
  genVeryStrong () {
    let pass =
      'abcdefghijklmnopqrstvwuxyz1425639870!@#*%&ABCDEFGHIKLMNOPQRSTUVWXZY'
    let word = ''
    for (let i = 0; i <= 25; i++) {
      let c = Math.floor(Math.random() * pass.length)
      word += pass[c]
    }
    console.log(word)
    return word
  }
  genVVStrong () {
    let pass =
      'abcdefEFGHIg!@#*%hijklmnopqrs!@#*%tEFGHIvwuxyz1425639870!@#*%&ABCDEFGHIKLMN!@#*%OPQRSTUVWXZY'
    let word = ''
    for (let i = 0; i <= 49; i++) {
      let c = Math.floor(Math.random() * pass.length)
      word += pass[c]
    }
    console.log(word)
    return word
  }
}
let a = new Password()
let b = new Password()
let c = new Password()
let d = new Password()
// console.log(f)
// f.genStrong()
// f.genWeak()
// f.genVeryStrong()
// console.log(passlel);
function vvs () {
  return document.getElementById('sp').textContent = a.genVVStrong()
}
function sp () {
    return document.getElementById('sp').textContent = b.genStrong()
}
function wp () {
    return document.getElementById('sp').textContent = c.genWeak()
}
function vs () {
    return  document.getElementById('sp').textContent = d.genVeryStrong()
}
function myFunction() {
    // Get the text field
    var copyText = document.getElementById('sp').innerHTML;
  
    // Select the text field
    // copyText.select();
    // copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText);
    // navigator.clipboard.writeText(text)
    // Alert the copied text
    // alert("Copied the text: " + copyText.value);
  } 
  