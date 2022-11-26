let url = "https://date.nager.at/api/v3/publicholidays/2017/AT"
let response = fetch(url)
response.then((v) => {
  return v.json()
}).then((contest) => {
  console.log(contest)
  ihtml = ""
  for (item in contest) {
    console.log(contest[item])
    ihtml += `
    <div class="card" style="width: 18rem;">
    
      <div class="card-body">
        <h5 class="card-title">${contest[item].localName}</h5>
        <p class="card-text">Date is ${contest[item].date} </br> Name is ${contest[item].name} </br> Country is ${contest[item].countryCode}          </p>
      </div>
    </div>
    `
  }
  cardContainer.innerHTML = ihtml
})


