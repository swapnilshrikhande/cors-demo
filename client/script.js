
/*fetch("http://localhost:3000/data")
    .then(res => res.json())
    .then(data => console.log(data));
*/

fetch( "http://localhost:3000/data",{
    method:"PUT",
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify({"data":"Some data"}),
    credentials: 'include'
})
.then(res => res.json())
.then(data => console.log(data));
