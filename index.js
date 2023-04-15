// NPM - Node Package Manager
// CDN - Content Delivery Network
// states in react are basically different things we store in our local browser
// in angular we have angular state management
// JSON- JavaScript Object Notation for storing objects , delimeter is comma by default


// var state = {
//     // var state = {} this is how we create an object 
//     Tasklist : [
//         // tasklist : [] this is how we create an array 
//         {
//             // this is an object 
//             // TOTAL : object ---> array of objects 
//             imageUrl: "" , 
//             TaskTitle: "",
//             TaskType: "", 
//             TaskDesc: ""
//         } , 

//         // tasklist k 0 pe ye upar wali values store hongi 

//         {
//             // tasklist k 1 pe ye upar wali values store hongi
//             imageUrl: "" , 
//             TaskTitle: "",
//             TaskType: "", 
//             TaskDesc: ""
//         } , 

//         {
//             // tasklist k 2 pe ye upar wali values store hongi 
//             imageUrl: "" , 
//             TaskTitle: "",
//             TaskType: "", 
//             TaskDesc: ""
//         } , 

//         {
//             // tasklist k 3 pe ye upar wali values store hongi 
//             imageUrl: "" , 
//             TaskTitle: "",
//             TaskType: "", 
//             TaskDesc: ""
//         } , 

//         {
//             // tasklist k 4 pe ye upar wali values store hongi
//             imageUrl: "" , 
//             TaskTitle: "",
//             TaskType: "", 
//             TaskDesc: ""
//         }
//     ]
// } ;




// IF WRITING HTML WITHIN JS ----> USE ``
// IF WRITING JS WITHING HTML ---> USE $

const state = {
    Tasklist : []
};

// DOM operations
const taskcontents= document.querySelector(".task__contents");
// this is for the card displayed on UI
const taskmodal= document.querySelector(".task_modal_body");
// this is when we need to display that card content on click of OPEN TASK

// console.log(taskcontents);
// console.log(taskmodal);



// HTML STARTING INSIDE JS SO WE USE -----> ``
const htmlTaskContent = ({id , url , title , type , desc}) => 

`    
//the sign after arrow function was for writing html in js 

<div class="col-md-6 col-lg-4 mt-3 " id=${id}> 
    //id is used as unique so we need id and key  , id is id , but since we are using html part in css 
    //we need to write the dollar sign before the id and enclose it in curly braces to write JS in html
    // here we are in JS file but writing HTML so inside HTML we need to write $ to write JS code inside HTML

    <div class = "card shadow-sm task__card">
    // outer card jiske andar card header , body aur footer hoga

        <div class = "card-header d-flex justify-content-end task__card__header">
            <button  type="button" class="btn btn-outline-info mr-1.5" name=${id}>
                // name element is used to reference an object in javascript
                <i class="fas fa-pencil-alt" name=${id}></i>
                // ab hum name id bar baar likh rahe h grouping k liye cause bahut cards h 
            </button>

            <button  type="button" class="btn btn-outline-danger mr-1.5" name=${id}>
                <i class="fas fa-trash" name=${id}></i>
            </button>
        </div>


        <div class= "card-body">
            ${url &&
               ` <img width ="100%" src=${url} alt = "card image" class="card-img-top md-3 rounded-lg"></img>   `
            }

            <h4 class="card-title  task_card_title">${title}</h4>

            <p class="description trim-3-lines text-muted">${desc}</p>

            <div class="tags text-white d-flex flex-wrap ">
                <span class="badge text-bg-primary>${type}</span>
            </div>
        </div>


        <div class="card-footer">
            <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#openTask">Open Task</button>
        </div>

    </div>

</div>

`
// HTML of TASK CONTENT IS TILL HERE


const htmlmodalContent = ({id , url , title , type , desc}) => {
    // normal curly brackets can also be used instead of ``
    const date = new date(parseInt(id));
    return `
    // since its a function it will return something so let it return the whole body
    <div id=${id}>
        ${url &&
               ` <img width ="100%" src=${url} alt = "card image" class="img-fluid place_holder_image mb-3"></img>   `
        }

        <strong class="text-muted text-sm">Created on : ${date.toDateString()}</strong>

        <h2 class="my-3">${title}</h2>

        <p class="text-muted">${desc}</p>

    </div>
    `
}