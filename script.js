let burger_btn = document.getElementById("burger_btn")
let header = document.getElementById("headerId")
let container = document.getElementById("containerId")


burger_btn.addEventListener("click", () => {
    document.getElementById("sidebar_id").classList.remove("sidebar_closed")
    document.getElementById("header_popup_btnId").classList.add("header_popup_btn_closed")
    setTimeout(() => {
        document.getElementById("body").classList.add("block_scroll")
    }, 0)
})

document.getElementById("containerId").addEventListener("click", () =>{
    if(document.getElementById("body").classList.contains("block_scroll")){
        document.getElementById("sidebar_id").classList.add("sidebar_closed")
        document.getElementById("body").classList.remove("block_scroll")
        document.getElementById("header_popup_btnId").classList.remove("header_popup_btn_closed")
    }
})









