// NPM - Node Package Manager
// CDN - Content Delivery Network
// states in react are basically different things we store in our local browser
// in angular we have angular state management
// JSON- JavaScript Object Notation ------> for storing objects , delimeter is comma by default


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
    tasklist : [],
};

// THIS IS OUR BACKUP STORAGE , FIRST STORAGE IS LOCAL BROWSER
// state.Tasklist , is how we can access it



// DOM operations
const taskContents= document.querySelector(".task__contents");
// this is for the card displayed on UI

const taskModal= document.querySelector(".task__modal__body");
// this is when we need to display that card content on click of OPEN TASK
// LARGE MODAL DISPLAY


// console.log(taskContents);
// console.log(taskModal);



// HTML STARTING INSIDE JS SO WE USE -----> ``
const htmlTaskContent = ({id , title , description , type , url}) => 
// template for card on the screen


//the sign after arrow function was for writing html in js
//id is used as unique so we need id and key  , id is id , but since we are using html part in css 
//we need to write the dollar sign before the id and enclose it in curly braces to write JS in html
// here we are in JS file but writing HTML so inside HTML we need to write $ to write JS code inside HTML
// outer card jiske andar card header , body aur footer hoga
// name element is used to reference an object in javascript
// ab hum name id bar baar likh rahe h grouping k liye cause bahut cards h


`    
 

<div class="col-md-6 col-lg-4 mt-3 " id=${id} key=${id}> 
    

    <div class = "card shadow-sm task__card">
    

        <div class = "card-header d-flex justify-content-end task__card__header">
            <button type="button" class="btn btn-outline-info mr-1.5" name=${id}>
                
                <i class="fas fa-pencil-alt name=${id}"></i>
                 
            </button>

            <button  type="button" class="btn btn-outline-danger mr-1.5" name=${id}>
                <i class="fas fa-trash name=${id}"></i>
            </button>
        </div>


        <div class= "card-body">
            ${url &&
               ` <img width ="100%" src=${url} alt = "card image" class="card-img-top md-3 rounded-lg" />   `
            }

            <h4 class="card-title  task__card__title">${title}</h4>

            <p class='description trim-3-lines text-muted'>${description}</p>

            <div class='tags text-white d-flex flex-wrap'>
             <span> class='badge bg-primary m-1'${type}</span>
           </div>
        </div>


        <div class="card-footer">
            <button type="button" class="btn btn-outline-primary float-right" data-bs-toggle="modal" data-bs-target="#showTask">Open Task
            </button>
        </div>

    </div>

</div>

`;

// HTML of TASK CONTENT IS TILL HERE


//  Modal Body on >> Clk of Open Task
// since its a function it will return something so let it return the whole body
const htmlmodalContent = ({id  , title  , description , url}) => {
    // normal curly brackets can also be used instead of ``
    const date = new Date(parseInt(id));
    return `
    
    <div id=${id}>
        ${url &&
            `<img width='100%' src=${url} alt='Card Image' class='img-fluid place__holder__image mb-3' />`
            //    ` <img width ="100%" src=${url} alt = "card image" class="img-fluid place_holder_image mb-3"></img>   `
        }

        <strong class="text-muted text-sm">Created on : ${date.toDateString()}</strong>

        <h2 class="my-3">${title}</h2>

        <p class='text-muted'>${description}</p>

    </div>
    `
    ;
};
// *****************************************************************************************************************

// WE USED DATE AS AN ID BECAUSE 

// console.log(Date.now());
//  1681676093852

// console.log(Date.now());
//  1681676096277

// console.log(Date.now());
//  1681676097933

// BECAUSE SEE EVERY SECOND WE HAVE A NEW NUMBER 
// IT WILL ALWATS BE UNIQUE

// *****************************************************************************************************************




// storing data on local browser for faster access than the Array which fetches API (when we will use it so usse fast h )
const updateLocalStorage = () => {
    localStorage.setItem(
        "task" ,
        // name of the storage is TASK
        JSON.stringify({
            tasks: state.tasklist,
            // key should always be in string format
            // here we convert json format to string 
        })
    );
};


// loading intital data from local browser storage DISPLAYING THE LOCAL STORAGE
const loadInitialData = () => {
    const localStorageCopy = JSON.parse(localStorage.task);
    // here we will convert string back to JSON for display

    if (localStorageCopy) state.tasklist= localStorageCopy.tasks ;
        // copy content from local storage to our array for permanent backup storage
        // local browser storage gets deleted after reload

    state.tasklist.map((cardDate) => {
        taskContents.insertAdjacentHTML("beforeend" , htmlTaskContent(cardDate));
        // this is for adding some content before the end of the DOM , input beforeend aur kya input karna h htmltaskcontent 
        // kya content h vo , jo cardDate mai store hoga 
    });
};

// *****************************************************************************************************************************
//                                                  EXTRA KNOWLEDGE
// SPREAD OPERATOR

// CONSOLE EXAMPLE

// const obj = { name: "yash" , age:22 };
//      undefined
// console.log(obj);
//      {name: 'yash', age: 22}
// console.log({obj});
//      {obj: {…}}

// console.log({...obj});
//      {name: 'yash', age: 22} , now no problem because of ... (spread operator)

// console.log({obj , designation : "unemployed"});
//      {obj: {…}, designation: 'unemployed'} , we can also add new keys with the help of spread operator

// console.log({...obj , surname : "sehgal"});
//      {name: 'yash', age: 22, surname: 'sehgal'} , but it wont stay because we only consoled it 

// IF WE DEFINE OUR OBJECT AGAIN IN CONSOLE AS {OBJ} THEN IT SHOWS DOUBLE BRACKETS TO REMOVE THOSE WE USE ... OR SPREAD OPERATOR
// IT IS USED TO IDENTIFY OR GROUP THINGS EASILY 

// SUPPOSE WE HAVE 100 PENS OF DIFF COLORS INSIDE A JAR , WE CANT IDENTIFY EACH COLOR EASILY BUT IF WE
// SPREAD THOSE COLORS ON THE FLOOR THEN WE CAN UNDERSTAND EACH COLOR EASILY

// *******************************************************************************************************************************

// const obj = { name: "yash" , age:22 };

// console.log(obj);
//  {name: 'yash', age: 22}


// IF WE ENTER THE SAME KEY WITH THE UPDATED VALUE , A NEW KEY IS NOT MADE USSI MAI UPDATION HOJATI H AISE HE EDIT CHANGES PE 
// HUMARE MODAL MAI SEEDHA UPDATE HOJAYEGA AUR NAYI STORE HOJAYEGI

// console.log({...obj , age : 24});
//  {name: 'yash', age: 24}

// *******************************************************************************************************************************


// we have a save changes button so uske liye ye

// agr koi changes hue toh unko hum pehle yaha se get karenge
const handleSubmit = (event) => {
    // console.log("event triggered");
    const id = `${Date.now()}`;
    // humari jo id h vo ab date h kyunki harr sec ka hisab h toh unique h 
    const input = {
        url : document.getElementById("imageUrl").value ,
        title : document.getElementById("taskTitle").value , 
        type : document.getElementById("tags").value ,
        description: document.getElementById("taskDescription").value,
    };

    // if(input.title==="" || input.Tag==="" || input.TaskDes==="")
    // {
    //     return alert("Please Fill All The Necessary Details :)");
    // }

// changes get hogye toh ab unko UI pe dikhana bhi h ussi time before vo DOM khatam ho

taskContents.insertAdjacentHTML("beforeend" , htmlTaskContent({...input , id}));

// ab ye jo UI pe append kardiya h through SPREAD SELECTOR usko store bhi karna h array mai varna udd jayega

state.tasklist.push({...input , id});

// array mai save hogyi ab LOCAL SERVER KI BARI 
updateLocalStorage();

};