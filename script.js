let currentTime=moment().format("dddd, MMM DD , YYYY - LT")
let currentHour=moment().format("HH");
let taskArray=[];
let nineAMtaskTime=document.querySelector("#nineAmTask");
let tenAMtaskTime=document.querySelector("#tenAmTask");
let elevenAMtaskTime=document.querySelector("#elevenAmTask");
let twelvePMtaskTime=document.querySelector("#twelvePmTask");
let onePMtaskTime=document.querySelector("#onePmTask");
let twoPMtaskTime=document.querySelector("#twoPmTask");
let ThreePMtaskTime=document.querySelector("#threePmTask");
let fourPMtaskTime=document.querySelector("#fourPmTask");
let fivePMtaskTime=document.querySelector("#fivePmTask");
let saveBtnEl=$(".saveBtn")
// $("#time").text(currentTime);

document.querySelector("#time").textContent=currentTime;
setTheBackground(nineAMtaskTime,"AM");
setTheBackground(tenAMtaskTime,"AM");
setTheBackground(elevenAMtaskTime,"AM");
setTheBackground(twelvePMtaskTime,"AM");
setTheBackground(onePMtaskTime,"PM");
setTheBackground(twoPMtaskTime,"PM");
setTheBackground(ThreePMtaskTime,"PM");
setTheBackground(fourPMtaskTime,"PM");
setTheBackground(fivePMtaskTime,"PM");
if(JSON.parse(localStorage.getItem("Work-Day-Scheduler")) === null){
    console.log(taskArray)
    localStorage.setItem("Work-Day-Scheduler", JSON.stringify(taskArray));
}

taskArray=JSON.parse(localStorage.getItem("Work-Day-Scheduler"))
reloadTasks();
function setTheBackground(tasktimeEl,AMPM){
    let tTime=0
    if(AMPM==="AM"){

         tTime= parseInt(tasktimeEl.getAttribute("name"));
    }
    else{

         tTime= parseInt(tasktimeEl.getAttribute("name"))+12;
    }
    //future
    if(tTime>currentHour){
        tasktimeEl.classList.add("future")
        console.log("bozorgrta");
    }
    // Present time
    else if(tTime == currentHour){
        tasktimeEl.classList.add("present")
        console.log("mosavi");
    }
    // Past time
    else {
        tasktimeEl.classList.add("past")
    }

}

saveBtnEl.on("click",function(event){
    event.preventDefault();
    
    let descriptionEl =$(event.target).prev().val();
    let descriptionID=$(this).prev().attr("id")
    let task={
        id: descriptionID,
        discript: descriptionEl.trim(),
    }
taskArray.push(task);
localStorage.setItem("Work-Day-Scheduler",JSON.stringify(taskArray))

})

function reloadTasks(){
    for(let i=0;i<taskArray.length; i++){
        // $("#fourPmTask").val("hiii")
        $("#"+taskArray[i].id).val(taskArray[i].discript)
    }
}
