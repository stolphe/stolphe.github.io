// Main consts

const fileInput = document.querySelector(".file-input"),
filterOptions = document.querySelector(".filter button")
previewImg = document.querySelector(".preview-img img");
chooseImgBtn = document.querySelector(".choose-img");
const loadImage = () => {
    let file = fileInput.files[0]; // getting user selected file
    if(!file) return;
    previewImg.src = URL.createObjectURL(file);
    previewImg.addEventListener("load", () => {
        document.querySelector(".container").classList.remove("disabel");
    });
}

filterOptions.forEach(option => {
    option.addEventListener("click", () => {
        document.querySelector(".filter .active").classList.remove("active");
        option.classList.add(active);
    });
});


chooseImgBtn.addEventListener("click", () => fileInput.click());
fileInput.addEventListener("change", loadImage);
