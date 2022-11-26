let url = "https://holidayapi.com/v1/holidays?pretty&country=IN&year=2021&key=c6004512-69b5-448c-8d50-2d09b25e4114"
let response = fetch(url)
response.then((v) => {
  return v.json()
}).then((contest) => {
  console.log(contest)
  
   let tab = 
        `<tr>
      
      <th scope="col">Holiday</th>
      <th scope="col">Date</th>
      <th scope="col">Country</th>
    </tr>`;
  for (item in contest.holidays) {
    console.log(contest.holidays[item])
    tab += `<tr> 
    <td>${contest.holidays[item].name} </td>
    <td>${contest.holidays[item].date}</td>
    <td>${contest.holidays[item].country}</td> 
             
</tr>`;
    
  }
  employee.innerHTML = tab
})
