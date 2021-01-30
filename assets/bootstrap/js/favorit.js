const inpKey = document.getElementById("inpKey");
const inpVal = document.getElementById("inpVal");
const input = document.getElementById("input");

input.onclick = function() {
    const key = inpKey.value;
    const val = inpVal.value;

    if (key && val) {
        localStorage.setItem(key, val);
        location.reload();
    }
}

const inpKey2 = document.getElementById("inpKey2");
const inpVal2 = document.getElementById("inpVal2");
const input2 = document.getElementById("input2");

input2.onclick = function() {
    const key = inpKey2.value;
    const val = inpVal2.value;

    if (key && val) {
        localStorage.setItem(key, val);
        location.reload();
    }
}

const inpKey3 = document.getElementById("inpKey3");
const inpVal3 = document.getElementById("inpVal3");
const input3 = document.getElementById("input3");

input3.onclick = function() {
    const key = inpKey3.value;
    const val = inpVal3.value;

    if (key && val) {
        localStorage.setItem(key, val);
        location.reload();
    }
}