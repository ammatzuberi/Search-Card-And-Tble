// persons = [
//   {
//     id: 325326,
//     firstname: "Dan",
//     lastname: "Tiger",
//     image: src = "https://i.pinimg.com/originals/0f/0c/d7/0f0cd73dc7f30831cea0d5e0f64bca7e.jpg",
//     age: 21,
//     gender: "Male",
//     hobbie: ["Football", "Reading"],
//     nationality: "switzerland"
//   },
//   {
//     id: 325326,
//     firstname: "Fan",
//     lastname: "Tiger",
//     image: src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSMw_Xx5dO6Ms_AfZTaTDdCCudCrL_WYiMOQ&usqp=CAU",
//     age: 30,
//     gender: "Male",
//     hobbie: ["Football", "Reading"],
//     nationality: "america"
//   },
//   {
//     id: 325330,
//     firstname: "Frank",
//     lastname: "Lion",
//     image: src = "https://media.istockphoto.com/photos/portrait-of-a-real-crying-man-picture-id646876580?k=20&m=646876580&s=612x612&w=0&h=Un8dFNb0ekAczRUVgv4nZPoON6vfxb1oeX7MM3X1W7g= ",
//     age: 43,
//     gender: "male",
//     hobbie: ["walking", "basketball"],
//     nationality: "germany"
//   },
//   {
//     id: 325334,
//     firstname: "Bilal",
//     lastname: "Zakki",
//     image: src = "https://loveshayariimages.in/wp-content/uploads/2021/10/Men-Whatsapp-Dp-Profile-Images-wallpaper-download.jpg",
//     age: 15,
//     gender: "male",
//     hobbie: ["swimming", "walking"],
//     nationality: "pakistan"
//   },

// ]
function myFunction() {
  location.href = "index.html";
}

// var Name= document.getElementById("Name2").value.trim();
// var Image_id= document.getElementById("Image_id").value.trim();
// var Age_id= document.getElementById("age_enter").value.trim();
// var gender_enter= document.getElementById("gender_enter").value.trim();
// var nationality_enter= document.getElementById("nationality_enter").value.trim();

// const e = document.getElementById("button");
// e.addEventListener("click", search);

// const show = document.getElementById("button");
// show.addEventListener("click",show );

// function search3(){
//   var NameInput= document.getElementById("Name2").value;




// // //check local storage data  ...
// // var Forminfo=JSON.parse(localStorage.getItem("Data")); 


// // if(! Forminfo){

// // NameInput.value=Forminfo.Name;
// // Image_idInput.value=Forminfo.Image_id;
// // NameInAge_idInputput.value=Forminfo.Age_id;
// // gender_enterInput.value=Forminfo.gender_enter;
// // nationality_enterInput.value=Forminfo.nationality_enter;
// // }







// document
// .getElementById("form_id")
// .addEventListener("submit", function(event){

//   event.preventDefault();

// //get the values
// var Name= document.getElementById("Name2").value.trim();
// var Image_id= document.getElementById("Image_id").value.trim();
// var Age_id= document.getElementById("age_enter").value.trim();
// var gender_enter= document.getElementById("gender_enter").value.trim();
// var nationality_enter= document.getElementById("nationality_enter").value.trim();

// //if the value is valid

// if( !Name || !Image_id || !Age_id|| !gender_enter || !nationality_enter){
//   return;
// }

// // save to the  local Stroge.... 

// var Forminfo={
//   Name:Name, 
//   Image_id:Image_id,
//   Age_id:Age_id,
//   gender_enter:gender_enter,
//   nationality_enter:nationality_enter


// };
// localStorage.setItem("Data", JSON.stringify(Forminfo))

// localStorage.setItem("ENRTY_2", JSON.stringify(Forminfo))

// localStorage.setItem("ENRTY_3", JSON.stringify(Forminfo))

// console.log('Name2', Name) 
// console.log('Image_id', Image_id) 
// console.log('age_enter', Age_id) 
// console.log('gender_enter', gender_enter) 
// console.log('nationality_enter', nationality_enter) 



// document.getElementById('Name').innerHTML=localStorage.getItem('Name');
// console.log(Name)


// });
// }




// const searchfun = () => {
//   let filter = document.getElementById('filterjson').value.toUpperCase();
//   let search = document.getElementById('mySearch').value
//   for (var i = 0; i < userdata.length; i++) {
//     console.log(i)



//   }
// }

// var btnnn = document.getElementById("myCheckbox");
// btnnn.addEventListener('click', function () {
//   if (isopen) {
//     show();
//   }
//   else {
//     showcard();
//   }


// }, false);

function search() {
  //  imaged();
  show();
  showcard();
  toggleCheck();
 


  // var name= localStorage.getItem('Name');

  // var x = document.getElementById('mySearch').value;
  // var y = document.getElementById('filterjson').value;
  // if(y=="Name"){

  // }
  // if (x == "nationality") {

  // }



  // //  document.getElementById('returnvalue').innerHTML= alert(x +"Data NOT Found Please Entre Correct Value")

  // let data_all = persons.filter(item =>
  //   item[y].toString().toLowerCase() == x.toString().toLowerCase()


  // );

  // let render_data = document.getElementById('all_cards');
  // render_data.innerHTML = " ";

  // for (var i = 0; i < persons.length; i++) {


  //   for (var key = 0; key < persons[i].hobbie.length; key++) {

  //     if (persons[i].hobbie[key].toLowerCase() == x.toLowerCase()) {
  //       // console.log(persons[i].hobbie[key])
  //       render_data.innerHTML += `
  //       <div class="card" >
  //         <div class="container">
  //             <img class ="image" src= ${persons[i].image}>
  //             <div class=" text">
  //             <h4> Name: ${persons[i].firstname} ${persons[i].lastname}</h4>
  //             <p>  Age: ${persons[i].age}</p>
  //             <p> Gender: ${persons[i].gender}</p>
  //             <p>Nationality: ${persons[i].nationality}</p>
  //          </div>
  //         </div>
  //     </div>
  //     `


  //     }

  //   }
  // }

  // for (var index = 0; index < data_all.length; index++) {

  //   render_data.innerHTML += `
  //         <div class="card">

  //           <div class="container">
  //           <img class ="image" src= ${data_all[index].image}>
  //      <div class=" text">
  //               <h4> Name: ${data_all[index].firstname} ${data_all[index].lastname}</h4>
  //               <p> Age: ${data_all[index].age}</p>          
  //               <p> Gender: ${data_all[index].gender}</p>
  //               <p>Nationality: ${data_all[index].nationality}</p>
  //               </div>

  //           </div>
  //       </div>
  //       `
  // }



}
function searchnation(){
  showNationality();
  showNationalityCard();
  toggleCheck();
}
function dynamicDropdownList() {
  var dropdownHTML = document.getElementById('dropdown');
  var x = document.getElementById("filterjson").value;

  let userdata = new Array();
  userdata = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []


  if (x == "Nationality") {
    document.getElementById('mySearch').style.display = "none";

    dropdownHTML += '<option value=""class ="Filter_data" >-- Select  Nationality --</option>'


    // var data = userdata.filter(userdata => {
    //   return us
    //   .map(userdata=userdata.Nationality)
    //   .indexOf(obj.Nationality) 
    // });
    // console.log(data)

    // const result = userdata.filter((thing, index, self) =>
    //   index === self.findIndex((t) => (
    //     t.Nationality === thing.Nationality
    //   ))
    // )

    // console.log(result)
    var _name2 = "";

    for (var i = 0; i < userdata.length; i++) {
      var name2 = userdata[i].Nationality;
      if (_name2 != name2) {
        // console.log(name2)
        dropdownHTML += '<option  class ="Filter_data" value="' + name2 + '"' + '">' + name2 + '</option>';
      }
      _name2 = name2;
    }
    // Load the dynamically created dropdown in container
    var container = document.getElementById("dropdown");
    container.innerHTML = dropdownHTML;

  }
  else {
    document.getElementById('mySearch').style.display = "block";
  };


  if (x != "Nationality") {
    document.getElementById('dropdown').style.display = "none";
    document.getElementById('buttonnation').style.display = "none";
    document.getElementById('button').style.display = "block";
  }
  else {
    document.getElementById('dropdown').style.display = "block";
    document.getElementById('buttonnation').style.display = "block";
    document.getElementById('button').style.display = "none";

  }
  
}
function showNationality() {

  let render_data = document.getElementById('all_table');
  render_data.innerHTML = " ";
  let nationvalue = document.getElementById('dropdown').value;
  let userdata = new Array();
  userdata = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
  console.log(nationvalue)



  var dataNAtionality = '';
  dataNAtionality = `
  <table class="header_table">
      <tr>
        <th>NAME</th>
        <th>AGE </th>
        <th>GENDER </th>
        <th>NATIONALITY </th>
      </tr>`


  for (var i = 0; i < userdata.length; i++) {

    var name = userdata[i].Nationality;
    // console.log(name)
    if (name == nationvalue) {


      dataNAtionality +=

        `   
    <tr class="tabledata"> 
      <td>${userdata[i].Name}</td>
      <td>${userdata[i].Age}</td>
      <td >${userdata[i].Gender}</td>
      <td>  ${userdata[i].Nationality}</td>
  
     
    </tr>`





    }


  }
  dataNAtionality += `</table>`;
  render_data.innerHTML = dataNAtionality
  return false;
}

function saveData() {

  // console.log(document.getElementById("Image").files[0].name)
  console.log(document.getElementById('Name').value)
  let name, age, gender, nationality, image, email, hobbie;
  name = document.getElementById("Name").value;
  age = document.getElementById("Age").value;
  image = document.getElementById("Image").files[0].name;
  gender = document.getElementById("Gender").value;
  nationality = document.getElementById("Nationality").value;
  email = document.getElementById("email").value;
  hobbie = document.getElementById("hobbie").value;

  let userdata = new Array();
  userdata.push(hobbie);
  console.log(userdata);
  userdata = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
  console.log(userdata)
  if (userdata.some((v) => { return v.email == email }
  )) {
    alert(" Data Already Found")


  }

  else {
    userdata.push({
      "Name": name,
      "Image": image,
      "email": email,
      "Age": age,
      "Gender": gender,
      "Nationality": nationality,
      "hobbie": hobbie


    })
    localStorage.setItem("users", JSON.stringify(userdata));
    alert('Data Saved');
    window.reload();

  }
  myFunction();

} 


function show() {

  var formcards = document.getElementById("all_table");
  formcards.innerHTML = " ";

  var x = document.getElementById('mySearch').value
  var y = document.getElementById('filterjson').value
  let userdata = new Array();
  userdata = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []

  console.log(userdata)
  var data = userdata.filter(item =>
    item[y].toUpperCase().includes(x.toUpperCase())
    // var searchThis = item[y].toUpperCase() 
    // var matchThis = x.toUpperCase() 
    // let result = searchThis.includes(matchThis);
    // // let result = item[y].toUpperCase() == x.toUpperCase()

    // console.log(result)
    // return result;



  );
  console.log(data)
  var drawTable = '';

  drawTable = `
  <table class="header_table">
      <tr>
        <th>NAME</th>
        <th>AGE </th>
        <th>GENDER </th>
        <th>NATIONALITY </th>
      
      </tr>`

  for (z = 0; z < data.length; z++) {
    // 
    drawTable +=

      `   
    <tr class="tabledata"> 
      <td>${data[z].Name}</td>
      <td>${data[z].Age}</td>
      <td >${data[z].Gender}</td>
      <td> ${data[z].Nationality}</td>
      <!--<td>
       <input type="button" id="buttoncard"  onclick="showcard()" class="cardbutton" value="Show Card">  
      </td>-->
     
    
    </tr>`

    // ` <div class="card">
    //                 <div class="container">
    //                 <img class ="image" src="./img/${data[z].Image}">
    //            <div class=" text">
    //                     <h4> Name: ${data[z].Name}  </h4>
    //                     <p> Age: ${data[z].Age}</p>          
    //                     <p> Gender: ${data[z].Gender}</p>
    //                     <p>Nationality: ${data[z].Nationality}</p>
    //                     </div>
    //                 </div>
    //     `
  }
  drawTable += `</table>`;
  formcards.innerHTML = drawTable
  return false;
}

function showcard() {

  var formcards = document.getElementById("all_cards");
  formcards.innerHTML = " ";
  isopen = false;

  var x = document.getElementById('mySearch').value
  var y = document.getElementById('filterjson').value
  let userdata = new Array();
  userdata = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []

  console.log(userdata)
  var data = userdata.filter(item =>
    item[y].toUpperCase().includes(x.toUpperCase())
    // var searchThis = item[y].toUpperCase() 
    // var matchThis = x.toUpperCase() 
    // let result = searchThis.includes(matchThis);
    // // let result = item[y].toUpperCase() == x.toUpperCase()

    // console.log(result)
    // return result;



  );
  console.log(data)


  for (z = 0; z < data.length; z++) {



    formcards.innerHTML +=
      ` <div class="card">
                    <div class="container" id="all_cards">
                    <img class ="image" src="./img/${data[z].Image}">
               <div class=" text">
                        <h4> Name: ${data[z].Name}  </h4>
                        <p> Age: ${data[z].Age}</p>          
                        <p> Gender: ${data[z].Gender}</p>
                        <p>Nationality: ${data[z].Nationality}</p>
                        </div>
                    </div>
        `
  }


  // function personCard(){
  //   var formcards = document.getElementById("all_cards");


}

function showNationalityCard() {



  let render_data = document.getElementById('all_cards');
  render_data.innerHTML = " ";
  let nationvalue = document.getElementById('dropdown').value;
  let userdata = new Array();
  userdata = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
  console.log(nationvalue)
  for (var i = 0; i < userdata.length; i++) {

    var name = userdata[i].Nationality;
    // console.log(name)
    if (name == nationvalue) {
      render_data.innerHTML += `
  <div class="card">
  <div class="container">
  <img class ="image" src="./img/${userdata[i].Image}">
<div class=" text">
      <h4> Name: ${userdata[i].Name}  </h4>
      <p> Age: ${userdata[i].Age}</p>          
      <p> Gender: ${userdata[i].Gender}</p>
      <p>Nationality: ${userdata[i].Nationality}</p>
      </div>

  </div>
    
`
    }
  }
}

function toggleCheck() {
  if (document.getElementById("myCheckbox").checked === true) {
    document.getElementById("all_table").style.display = "block";
    document.getElementById("all_cards").style.display = "none";
  } else {
    document.getElementById("all_cards").style.display = "block";
    document.getElementById("all_table").style.display = "none";
  }
}



