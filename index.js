document.addEventListener("click", e => {
    console.log("Button clicked");
    let handle ;
    if(e.target.matches(".handle")) {
        handle = e.target
    } else {
        handle = e.target.closest(".handle")
    }
    if(handle != null) onHandleClick(handle)
})

window.addEventListener("resize", (e) => {

})

function calculateProgressBar(progressBar) {
    progressBar.innerHTML = ""
    const slider = progressBar.closest(".row")
        .querySelector(".slider")
    const itemCount = slider.children.length
    const itemsPerScreen = parseInt( 
        getComputedStyle(slider).getPropertyValue
        ("--items-per-screen")
    )

    const sliderIndex = parseInt(
        getComputedStyle(slider).getPropertyValue
        ("--slider-index")
    )
    
    const progressbarItemCount = Math.ceil(itemsPerScreen / itemCount);
    console.log(progressbarItemCount,"progress-itemsprogress-itemsprogress-");
    console.log(itemsPerScreen)
    for(let i=0; i < progressbarItemCount; i++) {
        const barItem = document.createElement("div")
        barItem.classList.add("progresss-items")
        if(i == sliderIndex) {
            barItem.classList.add("active")
        }
        progressBar.append(barItem)
    }
}

function onHandleClick(handle) {
    console.log("onHandleClick");
    const slider = handle.closest(".container").querySelector(".slider")
    sliderIndex = parseInt(getComputedStyle(slider).getPropertyValue("--slider-index"))
    console.log(slider)
    if(handle.classList.contains("left-handle")) {
        console.log("handle left-Button")
        slider.style.setProperty("--slider-index", sliderIndex - 1)
    }
    if(handle.classList.contains("right-handle")) {
        console.log("handle right-Button")
        slider.style.setProperty("--slider-index", sliderIndex + 1)
    }
}