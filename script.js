let currentTime=moment().format("dddd, MMM DD , YYYY - LT")
let currentHour=moment().format("HH");
// let currentHour=15;
let nineAMtaskTime=document.querySelector("#nineAmTask");
let tenAMtaskTime=document.querySelector("#tenAmTask");
let elevenAMtaskTime=document.querySelector("#elevenAmTask");
let twelvePMtaskTime=document.querySelector("#twelvePmTask");
let onePMtaskTime=document.querySelector("#onePmTask");
let twoPMtaskTime=document.querySelector("#twoPmTask");
let ThreePMtaskTime=document.querySelector("#threePmTask");
let fourPMtaskTime=document.querySelector("#fourPmTask");
let fivePMtaskTime=document.querySelector("#fivePmTask");
let saveBtnEl=$(".tasks")
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

saveBtnEl.on("click",".saveBtn",function(event){
    event.preventDefault();
    let element=event.target;
//    let descriptionEl= element.querySelector(".description");
   $('input[type="text"]').val()
    // let descriptionEl= $(event.target).attr('data-letter');

    console.log(event.target)
    // console.log( $('textarea[type="text"]').val())
    console.log( $('textarea[type="text"]').attr("name"))
    
    let saghar =$(event.target).attr('data-textarea-id');
    console.log(saghar );
    let descrip=$("#"+saghar)
    console.log("#"+saghar)
    console.log($("#"+saghar).val())

    // $(event.target).attr('data-letter'));
})