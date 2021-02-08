const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes(){
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
        //getBoundingClientRect method returns a DOMRect (describes the size and position of a rectangle) object providing information about the size of an element and its position relative to the viewport
        const boxTop = box.getBoundingClientRect().top;

        if(boxTop < triggerBottom) {
            box.classList.add('show')
        }else{
            box.classList.remove('show');
        }
    })
}