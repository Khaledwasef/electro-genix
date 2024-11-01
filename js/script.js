const menu = document.getElementById("menu");
const action = document.getElementById("action");
let play = true;

// الاستماع للنقر على زر القائمة لفتح/إغلاق القائمة
menu.addEventListener("click", (event) => {
    event.stopPropagation(); // منع الحدث من الوصول إلى مستمع الوثيقة
    hundleMenu();
});

// الاستماع للنقر في أي مكان في المستند لإغلاق القائمة إذا كان النقر خارجها
document.addEventListener("click", (event) => {
    if (!menu.contains(event.target) && !action.contains(event.target)) {
        closeMenu();
    }
});

// الاستماع للنقر على أي رابط بداخل القائمة لإغلاقها
const links = action.querySelectorAll("a"); // جميع الروابط بداخل القائمة
links.forEach(link => {
    link.addEventListener("click", () => {
        closeMenu(); // إغلاق القائمة عند النقر على الرابط
    });
});

function hundleMenu() {
    menu.classList.toggle("is-active");
    action.classList.toggle("is-active");
}

function closeMenu() {
    menu.classList.remove("is-active");
    action.classList.remove("is-active");
}


AOS.init();

let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function () {
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
    play= false;
    setTimeout(() => {
        play = true;
    }, 10000);
})

prev.addEventListener('click', function () {
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
    play = false;
    setTimeout(() => {
        play = true;
    }, 10000);
})


setInterval(() => {
    if (play) {
        let items = document.querySelectorAll('.item')
        document.querySelector('.slide').appendChild(items[0])
    }
}, 2000);





