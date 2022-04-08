let currentTime = moment().format("dddd, MMM DD , YYYY - LT")
let currentHour = moment().format("HH");
let taskArray = [];
let nineAMtaskTime = document.querySelector("#nineAmTask");
let tenAMtaskTime = document.querySelector("#tenAmTask");
let elevenAMtaskTime = document.querySelector("#elevenAmTask");
let twelvePMtaskTime = document.querySelector("#twelvePmTask");
let onePMtaskTime = document.querySelector("#onePmTask");
let twoPMtaskTime = document.querySelector("#twoPmTask");
let ThreePMtaskTime = document.querySelector("#threePmTask");
let fourPMtaskTime = document.querySelector("#fourPmTask");
let fivePMtaskTime = document.querySelector("#fivePmTask");
let saveBtnEl = $(".saveBtn")

document.querySelector("#time").textContent = currentTime;
setTheBackground(nineAMtaskTime, "AM");
setTheBackground(tenAMtaskTime, "AM");
setTheBackground(elevenAMtaskTime, "AM");
setTheBackground(twelvePMtaskTime, "AM");
setTheBackground(onePMtaskTime, "PM");
setTheBackground(twoPMtaskTime, "PM");
setTheBackground(ThreePMtaskTime, "PM");
setTheBackground(fourPMtaskTime, "PM");
setTheBackground(fivePMtaskTime, "PM");

if (JSON.parse(localStorage.getItem("Work-Day-Scheduler")) === null) {
    localStorage.setItem("Work-Day-Scheduler", JSON.stringify(taskArray));
}
// get the informationfrom local array
taskArray = JSON.parse(localStorage.getItem("Work-Day-Scheduler"))
reloadTasks();

// set the background color based on the time of the day
function setTheBackground(tasktimeEl, AMPM) {
    let tTime = 0
    if (AMPM === "AM") {

        tTime = parseInt(tasktimeEl.getAttribute("name"));
    }
    else {

        tTime = parseInt(tasktimeEl.getAttribute("name")) + 12;
    }
    //future
    if (tTime > currentHour) {
        tasktimeEl.classList.add("future")
    }
    // Present time
    else if (tTime === currentHour) {
        tasktimeEl.classList.add("present")
    }
    // Past time
    else {
        tasktimeEl.classList.add("past")
    }

}
// save button click
saveBtnEl.on("click", function (event) {
    event.preventDefault();

    let descriptionEl = $(event.target).prev().val();
    let descriptionID = $(this).prev().attr("id")

    let task = {
        id: descriptionID,
        discript: descriptionEl.trim(),
    }
    taskArray.push(task);
    localStorage.setItem("Work-Day-Scheduler", JSON.stringify(taskArray))

})

// load thw information from local storage
function reloadTasks() {
    for (let i = 0; i < taskArray.length; i++) {
        $("#" + taskArray[i].id).val(taskArray[i].discript)
    }
}
