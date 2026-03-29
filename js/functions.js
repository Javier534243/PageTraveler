export function dqs(sel) {
  return document.querySelector(sel);
}

export function checkFocus(input) {
    const inp = dqs(input)
    inp.addEventListener("click", function() {
        inp.type = "date"
})
}

export function checkblur(input) {
    const inp = dqs(input)
    inp.addEventListener("blur", function() {
        if(!inp.value.trim()) {
            inp.type = "text"
    }
})
}