// buttons bar update func
const btnBar = document.querySelector('#btns-bar')

const updateButtonsBar = () => {
  btnBar.innerHTML = "";
  localObj = localStorage.getItem("rawesForms"); 
  if (localObj) {
    localObj = JSON.parse(localObj)
    localObj.forEach(dataSet => {
      const date = dataSet[0]; 
      if (date) { //doesn't create button for set without date
        btnBar.innerHTML += `
      <button class="dataset-btn" data-date="${date}">${date}</button>`
      }
    })
  }
}
updateButtonsBar(); 

btnBar.addEventListener('click', (event) => {
  let date = event.target.getAttribute('data-date');
  if (date) {
    getPieChartNumServices(date)
    getPieChartValServices(date)
  }
})
