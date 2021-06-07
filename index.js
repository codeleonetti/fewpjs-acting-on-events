// Your code here
let dodger = document.getElementById('dodger');

function moveDodgerLeft(){
    let leftNumbers = dodger.style.left.replace("px", " ");
    let left = parseInt(leftNumbers, 10);
    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}
document.addEventListener("key down", function(e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    }
    if (e.key === "ArrowRight") {
        moveDodgeRight();
    }
});

function moveDodgerRight() {
    let rightNumbers = dodger.style.right.replace("px", " ");
    let right = parseInt(rightNumbers, 10);
    if (right > 180) {
        dodger.style.right = `${right + 1}px`;
    }
}
dodger.style.backgroundColor = "#FF69b4";
//console.log(dodger.style.left);
//console.log(dodger.style.bottom);
 dodger.style.bottom = "0px"

// document.addEventListener("keydown", function(e) {
//     console.log(e.key === "ArrowLeft")
//     {
//         let leftNumbers = dodger.style.left.replace("px", "");
//         let left = parseInt(leftNumbers, 10);
//         dodger.style.left = `${left - 1}px`;
//     }
// });
