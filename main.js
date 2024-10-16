// js code for A2

// array to store month and site visits
let siteVisits = [
    {month: "April", visitors: 4523},
    {month: "May", visitors: 3242},
    {month: "June", visitors: 1235},
    {month: "July", visitors: 7189},
    {month: "August", visitors: 9599},
    {month: "September", visitors: 2341},
]

let visits = document.querySelector("#visits")

// dynamically creating table body contents and adding it to html
siteVisits.forEach((e) => {
  
    let row = document.createElement("tr");

    let month = document.createElement("td");
    month.textContent = e.month;

    let visitors = document.createElement("td");
    visitors.textContent = e.visitors;

    row.appendChild(month);
    row.appendChild(visitors);

    visits.appendChild(row);
})

// accepting and revoking cookies

const footer = document.querySelector("#footer");

function acceptCookies() {
    const acceptCookies = document.querySelector("#acceptCookies"); 

    acceptCookies.addEventListener('click', (e) => {

        e.preventDefault(); 

        footer.innerHTML = 'cookies were accepted. would you like to revoke? <a href="#" id="revokeCookies">revoke cookies</a>';

        revokeCookies(); 
    });
}

function revokeCookies() {

    const revokeCookies = document.querySelector("#revokeCookies"); 

    revokeCookies.addEventListener('click', (e) => {
        e.preventDefault(); 

        footer.innerHTML = 'to provide the best experience, we use cookies. click "accept cookies" to consent. <a href="#" id="acceptCookies">accept cookies</a>';
        
        acceptCookies(); 
    });
}

// initial call to accept cookies function so that it can cycle through when cilcked
acceptCookies();

