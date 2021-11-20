// // // window.fetch('https://api.covidtracking.com/v1/states/current.json')
// // // .then(e=>e.json()
// // // .then(y=>console.log(y)));


// let searchInput = document.getElementById('search');
// let templete = document.getElementById('temp');
// searchInput.addEventListener('keyup',e =>{
// if(e.key==='Enter'){
// let searchText = e.target.value;
// searchGitUser(searchText);
// }
// })


// async function searchGitUser(searchValue){
//     //let URL=" https://api.covidtracking.com";
// let URL = 'https://api.covid19api.com/country';
// // let URL = 'https://api.covidtracking.com/v1/states/current.json';
// let DATA = await window.fetch(`${URL}/${searchValue}`);
// let JSON = await DATA.json();
// let {Date,Country,Confirmed,CountryCode,totaldeaths,Deaths,Active,ID} = JSON[JSON.length-1];
// // let {date,state,positive} = JSON;

// templete.innerHTML =`
// <main>
// <div>

// <h1 class="userName"> ${Country}<i class="fas fa-share-alt"></i></h1>
// <p class="user">Deaths<br>${Deaths}</p>
// <p class="user">Id<br>${ID}</p>

// </div>
// <div>
// <h1 class="userName1">Date<br>${Date}</h1>
// <h1 class="userName1">Positive<br> ${Confirmed}</h1>
// </div>
// <div>
// <h1 class="userName2">Active<br>${Active}</h1>
// <h1 class="userName2">CountryCode<br> ${CountryCode}</h1>
// </div>

// </main>
// `

// // templete.innerHTML =`
// // <main>
// // <div>

// // <h3 class="userName">date: ${date}</h3>
// // <p class="userName">state: ${state}</p>
// // <p class="userName">Positive: ${positive}</p>

// // </div>
// // </main>
// // `
// }





let searchInput = document.getElementById('search');
let templete = document.getElementById('templete');
searchInput.addEventListener('keyup',e =>{
    if(e.key==='Enter'){
        let searchText = e.target.value;
        searchGitUser(searchText);
    }
})
async function searchGitUser(searchValue){
    let URL = 'https://api.covid19api.com/country';
    let DATA = await window.fetch(`${URL}/${searchValue}`);
    let JSON = await DATA.json();
    let {Deaths,Country,Confirmed,Active,Recovered,Date,CountryCode} = JSON[666];
templete.innerHTML =`
<main>
    <section class="main">
    <div class="covid">
       <h1 class="country">${Country} </h1>
      
    </div>
    
        
    <div class="pos">
    <h1 class="positive">${Confirmed}</h1>
    <p class="positive1">Positive Cases</p>
    </div>
       
    <div class="neg">
        <h1 class="Deaths">${Deaths}</h1>
        <p class="Deaths1">Deaths</p>
    
    </div>
    </section>
    <section class="second"> 
    <div class="active">
        <h1 class="Active1">${Active}</h1>
        <p class="Active">Active Cases</p>
    </div> 
    <div class="recover">
        <h1 class="recovered1">${Recovered}</h1>
        <p class="recovered">Recovered</p>
    </div> 

    <div class="po">
    <h1 class="positiv">${Confirmed}</h1>
    <p class="positiv1">Positive Cases</p>
    </div>

    </section>
    <section class="third"> 
    <div class="active">
        <h1 class="Active1">${CountryCode}</h1>
        <p class="Active">CountryCode</p>
    </div> 
    <div class="recover">
        <h1 class="recovered1">${Date}</h1>
        <p class="recovered">Date</p>
    </div>
    <div class="po">
    <h1 class="positiv">${Deaths}</h1>
    <p class="positiv1">Deaths</p>
    </div>

    </section>
   
</main>`
}


