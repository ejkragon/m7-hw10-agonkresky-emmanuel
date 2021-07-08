// acquire references to page elements
var nameSpan = document.querySelector('span')
var formEl = document.querySelector('form')
var clear = document.querySelector('#clear')
var textarea = document.querySelector('textarea')

// Retrieve name and note content from cookies and localstorage
// Then apply them to elements on the page
// YOUR CODE HERE
var nameArea = nameSpan.textContent
document.cookie = nameArea
nameSpan.textContent = nameArea

var notesArea = localStorage.getItem('notes')

formEl.onsubmit = function(e) {
  // prevents form submission
  e.preventDefault()
  // save name element's content to cookies
  // save textarea's content to localstorage
  // YOUR CODE HERE
  var nameArea = document.cookie
  nameSpan.textContent = nameArea
  var nameArea = document.getElementById('span').textContent=nameArea
  //need js to write over span element
  console.log(nameArea)

  notesArea = textarea.value
  localStorage.setItem('notes', notesArea)
  // formEl.textContent = notesArea
  console.log(notesArea)



  // triggers thumbs up animation
  this.elements.save.classList.add('emoji')
}

clear.onclick = function() {
  // Clear textarea's value
  // Clear localstorage's content
  // YOUR CODE HERE
  formEl.innerHTML = ""
  localStorage.setItem("notes","")


  // triggers thumbs up animation
  this.classList.add('emoji')
}

// this code allows repeated thumbs up animations
function endThumbsUp() {
  this.classList.remove('emoji')
}

formEl.elements.save.onanimationend = endThumbsUp
clear.onanimationend = endThumbsUp