function submit() {
    let count = 0;
    let text = document.getElementById("input").value;
    if (text.length === 0) {
        document.getElementById("input").placeholder = " must be number";
        return;
    }
    for (let i = 0; i < text.length; i++) {
        if (text.charAt(i) >= 0 && text.charAt(i) <= 9) {
            count++;
        } else {
            let temp = document.getElementById("input");
            temp.value = "";
            temp.placeholder.style.color = 'red';
            temp.placeholder = "must be numbers";
        }
    }
    if (count === text.length) {
        document.getElementById("game").click();
    }
}