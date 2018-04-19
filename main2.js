/**
 * declare and initialise an  array of objects that would contain the values of the form 
 */
var contacts = [];


var form = document.getElementById("contactForm");
var nameList = document.getElementById("nameField");
var contactDetails = document.getElementById("details");
var submitBtn = document.getElementById("btn");
/**
 * set the two lists display to none
 */
nameList.style.display = "none";
contactDetails.style.display = "none";

function addContact(){
    var contact = new Object();
    contact.name = document.getElementById("contactName").value;
    contact.phone = document.getElementById("phoneNo").value;
    contact.email = document.getElementById("eMail").value;
    
    var contactSize = contacts.length;
   // contacts[contactSize] = contact;
   contacts.push(contact);
    //console.log(contacts[0].name);
    
    if(contact.name!==""&&contact.phone!==""&&contact.email!==""){
        //var nameList = document.getElementById("nameField");
        nameList.style.display = "block";

        // output = "";
        // contacts.forEach((contact) => {

        //     output += "<li class='list-group-item font-weight-light' id='list'>"+"<h4 id='initName'>"+
        //                                                          contact.name+"</h4>"+
        //                                                          "<i class='fa fa-edit text-info' id='edit' ></i>"+
        //                                                          "&nbsp;&nbsp;&nbsp;&nbsp;"+
        //                                                          "<i class='fa fa-trash text-danger' id='delete'></i>"+
                                                                
        //                                                          "</li>";
        // })

        //document.getElementById("nameField").innerHTML = output;
        for (var i= contacts.length - 1; i < contacts.length; i++){
          // var data =  contacts[i];
          
         // console.log(contacts[i].name);
           document.getElementById("nameField").insertAdjacentHTML("beforeend","<li class='list-group-item font-weight-light' id="+i+">"+"<h4 id='initName'>"+
                                                            contacts[i].name+"</h4>"+
                                                            "<i class='fa fa-edit text-info' id='edit' ></i>"+
                                                            "&nbsp;&nbsp;&nbsp;&nbsp;"+
                                                            "<i class='fa fa-trash text-danger' id='delete'></i>"+
                                                            
                                                            "</li>")
        }
        
    }
}

submitBtn.addEventListener("click", function(event){
    event.preventDefault();
    addContact();
    //console.log(nameList);
    form.reset();
});

/**
 * gets the index of the object
 *  with prop of name defined
 *  as the value of the text
 * content
 */
// function getIndex(){
   
// }


//var listI = document.getElementById("list");
/**
 * this section handles the eventlistener for getting the details of a contact
 */
nameList.addEventListener("click", function(event){
    event.preventDefault();
    var initName = document.querySelector("#initName");
    //console.log(initName.getAttribute("id"));
    var edit = document.querySelector("#edit");
    var trash = document.querySelector("#delete");
    var newList = document.querySelector(".newList");
    var newName = document.querySelector("#newName");
    var newPhone = document.querySelector("#newPhone");
    var newEmail = document.querySelector("#newEmail");
   
    //console.log(event.target.id)
   if(event.target.id===initName.getAttribute("id")){
    var newId = event.target.parentElement.id;
    function getDetails(person){
        // console.log(this)
         //console.log(event.currentTarget)
         //console.log(event.target.nodeName)
         //console.log(event.target.textContent)
         var  newName = event.target.textContent; 
        // console.log(newName);
       return  person.name === newName;
     
     }
    var objHolder = contacts.find(getDetails);
    //console.log(objHolder);
    contactDetails.style.display = "block";
     contactDetails.insertAdjacentHTML("beforeend", "<li class='list-group-item font-weight-light newList ' id="+newId+" >"+
                                                         "<h4 id='newName' >"+objHolder.name+"</h4>"+
                                                         "<h5 id='newPhone'>"+objHolder.phone+"</h5>"+
                                                         "<h6 id='newEmail' >"+objHolder.email+"</h6>"+
                                                         "</li>" )
                                                      //   console.log(contactDetails)
   }
       
     
   else  if(event.target.id===trash.getAttribute("id")){
        //console.log(event.target.parentElement.id)
        event.target.parentNode.remove();
      
        //console.log()
        contacts.splice(event.target.parentElement.id, 1);
        //console.log(contactDetails.id)
        //console.log(newList.id)
        if(newList.getAttribute("id") ===event.target.parentElement.id){
            newList.remove();
        }
        
    }
    else if(event.target.id===edit.getAttribute("id")){
        // console.log(event.target.id)
        // console.log(edit.getAttribute("id"))
        //event.target.parentElement.contentEditable = "true";
        if(newList.getAttribute("id")===event.target.parentElement.id){
            // console.log(newName.textContent)
            // console.log(newPhone.textContent)
            // console.log(newEmail.textContent)
            
           
          var tobeEditd =  contacts[newList.getAttribute("id")];
         console.log(tobeEditd);
           document.getElementById("contactName").value = tobeEditd.name; 
           document.getElementById("phoneNo").value = tobeEditd.phone;
           document.getElementById("eMail").value = tobeEditd.email;
           submitBtn.textContent = "Update"; 

           submitBtn.addEventListener("click", function(event){
               event.preventDefault();
               var editedContact = new Object();
               editedContact.name = document.getElementById("contactName").value;
               editedContact.phone = document.getElementById("phoneNo").value;
               editedContact.email = document.getElementById("eMail").value;
         if (editedContact.name!==""&&editedContact.phone!==""&&editedContact.email!==""){
           console.log(contacts)
          console.log(editedContact)
          console.log(newList.getAttribute("id"))
           contacts.splice(newList.getAttribute("id"),1,editedContact);
           console.log(contacts[newList.getAttribute("id")])
         }
         console.log(contacts)
           
           });
           

           //contacts.splice(newList.getAttribute("id"),1,editedContact);
           

        }
    }
    
  
});



