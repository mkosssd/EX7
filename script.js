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
    var copyText = document.getElementById('sp').innerHTML;
  
    
    navigator.clipboard.writeText(copyText);
    
  } 
  