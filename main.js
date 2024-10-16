// js code for A2

// part 1 - site visits and dynamically adding it to page

let siteVisits = [
    {month: "April", visitors: 4523},
    {month: "May", visitors: 3242},
    {month: "June", visitors: 1235},
    {month: "July", visitors: 7189},
    {month: "August", visitors: 9599},
    {month: "September", visitors: 2341},
]

const visits = document.querySelector("#visits")

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

// part 2 - accepting and revoking cookies

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

// initial call to the accept cookies function so that the user can cycle thru accept/revoke 
acceptCookies();


// part 3 - high contrast + toggle on/off

const site = document.querySelector("#homepage"); 
const toggle = document.querySelector("#contrast");


function highContrast() {
    toggle.textContent = 'Revert';

    site.style.background = "#d9e4ff";
    site.style.fontSize = "larger";
    site.style.padding = "30px";
    site.style.lineHeight = "2";
    site.style.letterSpacing = "1.5px";
}

function removeContrast() {
    toggle.textContent = 'High-Contrast';
    site.removeAttribute('style');
}

toggle.addEventListener('click', (e) => {

    // if user clicks high contrast, change site to high contrast
    if (e.target.textContent == 'High-Contrast') {
        highContrast();
    }
    // if user wants to revert, remove all styling elements 
    else if (e.target.textContent == 'Revert') {
        removeContrast();
    }
    
});

// part 4 – keyboard shortcut for high contrast

document.addEventListener('keydown', (e) => {
    
    if ((e.ctrlKey && (e.key === 'a' || e.key === 'A'))
        && toggle.textContent == 'High-Contrast') {
        highContrast();
    }
    else if ((e.ctrlKey && (e.key === 'a' || e.key === 'A'))
        && toggle.textContent == 'Revert') {
        removeContrast();
    }
});