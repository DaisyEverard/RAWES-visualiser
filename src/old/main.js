const provisioning = document.querySelector('#provisioning-table')
const regulating = document.querySelector('#regulating-table')
const cultural = document.querySelector('#cultural-table')
const supporting = document.querySelector('#supporting-table')
const allTables = document.querySelectorAll('table')
const proBody = provisioning.querySelector('tbody'); 
const regBody = regulating.querySelector('tbody'); 
const culBody = cultural.querySelector('tbody'); 
const supBody = supporting.querySelector('tbody'); 

// add initial rows
provisioningArray.forEach((item) => {proBody.innerHTML += rowSetup(item, 'provisioning');})
regulatingArray.forEach((item) => {regBody.innerHTML += rowSetup(item, 'regulating')})
culturalArray.forEach((item) => {culBody.innerHTML += rowSetup(item, 'cultural')})
supportingArray.forEach((item) => {supBody.innerHTML += rowSetup(item, 'supporting')})

// add/remove row button functionality
mainTab.addEventListener('click', (event) => {
    let row = event.target.parentNode.parentNode.parentNode;
    let table = row.parentNode.parentNode.getAttribute('data-table'); 
    if (event.target.getAttribute('class') === 'new-row') {
      event.preventDefault(); 
      let newRowContent = document.createElement('tr');
      newRowContent.innerHTML = `<th>
      <textarea></textarea>
    </th>
    <td class="minus-minus">
      <input type='radio' value=-1 data-name='' data-table='${table}'>
    </td>
    <td class="minus">
      <input type='radio' value=-0.5 data-name='' data-table='${table}'>
    </td>
    <td class="zero">
      <input type='radio' value=0 data-name='' data-table='${table}'>
    </td>
    <td class="plus">
      <input type='radio' value=0.5 data-name='' data-table='${table}'>
    </td>
    <td class="plus-plus">
      <input type='radio' value=1 data-name='' data-table='${table}'> 
      <div>
        <button class="new-row">+</button>
        <button class="delete-row">-</button>
      </div>
    </td>`

    // set textarea input to name attribute
    let newRow  = row.parentNode.insertBefore(newRowContent, row);
    newRow.addEventListener('keyup', () => {
        let text = newRow.querySelector('textarea')
        let newName = text.value.replace(/\W/g, '-').toLowerCase();
        let radioArray = newRow.querySelectorAll('input'); 
        radioArray.forEach(item => {
          item.setAttribute('data-name', newName);
        }) 
    })
  } else if (event.target.getAttribute('class') === 'delete-row') {
    row.remove(); 
} else {
  return; 
}
})

// on submit (store info)
let submitBtn = $('#submit-button');

submitBtn.on('click', (event) => {
  event.preventDefault(); 
  let formArray = []
  let checkedBoxes = $('input:checked', '#rawes-data');
  checkedBoxes = checkedBoxes.toArray();
  checkedBoxes.forEach(box => {
    let boxObj = {}
    boxObj.name = box.getAttribute('data-name')
    boxObj.serviceType = box.getAttribute('data-table')
    boxObj.value = box['value']
    formArray.push(boxObj)
  })
  const date = $('#form-date').val(); // get date entered
  $('#form-date').val(""); //empty date input
  formArray.unshift(date);

  $('[type="radio"]').prop( "checked", false ); //uncheck all inputs

  // set new form to local storage
  if (formArray.length > 1) {
    let local = localStorage.getItem("rawesForms") 
  if (local) {
    local = JSON.parse(local);
    console.log(local) 
    local.push(formArray)
    localStorage.setItem("rawesForms", JSON.stringify(local));
  } else {
    local = [formArray];
    localStorage.setItem("rawesForms", JSON.stringify(local))
  }
  }

  updateButtonsBar();
  getPieChartNumServices(date)
  getPieChartValServices(date)
})