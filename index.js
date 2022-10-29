let dropDowns = document.querySelectorAll(".dropdown")

for (let i = 0; i < dropDowns.length; i++) {
  dropDowns[i].addEventListener('click', (e) => {
    if (dropDowns[i].classList.contains('closed')) {
      dropDowns[i].classList.remove('closed')
    } else {
      dropDowns[i].classList.add('closed')
    }
   })
  console.log(dropDowns[i])
}
//console.log({dropDowns})
