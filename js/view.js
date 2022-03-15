//For accessibility, return key = click
document.onkeydown = function (e) {
    if (e.key === "Enter") {
        document.activeElement.click();
    }
};


//To close the banner
const banner = document.querySelector(".container__banner");
const bannerCloseBtn = document.querySelector(".banner__close-button");
bannerCloseBtn.addEventListener("click", () => {
    banner.style.display = "none";
})


//To make the first main container appear/disappear
const firstSwitch = document.querySelector("#first-switch");
const firstOptionContainer = document.querySelector(".js-container__first-option");

firstSwitch.addEventListener("change", () => {
    firstOptionContainer.classList.toggle("hidden");
})


//To make the dropdown select appear/disappear
const dropdownBtn = document.querySelector("#btn__dropdown");
const selectOptions = document.querySelector(".select__options");

dropdownBtn.addEventListener("change", () => {
    selectOptions.classList.toggle("hidden");
})


//To make the images selectable
const selectImages = document.querySelectorAll(".select__image");
const selectedImage = document.querySelector(".select__image--selected");

for (let image of selectImages) {
    image.addEventListener("click", function () {
        let imageUrl = this.getAttribute("src");
        selectedImage.setAttribute("src", imageUrl);
        selectOptions.classList.toggle("hidden");
        dropdownBtn.checked = false;
    })
}


//To show/hide the IAB warning
const iabInput = document.querySelector("#iab-transparency-consent");
const warningBanner = document.querySelector(".container__iab-warning");

iabInput.addEventListener("change", () => {
    if (iabInput.checked == true) {
        warningBanner.style.display = "flex";
    } else if (iabInput.checked == false) {
        warningBanner.style.display = "none";
    }
})


//To make the second main container appear/disappear
const secondSwitch = document.querySelector("#second-switch");
const secondOptionContainer = document.querySelector(".js-container__second-option");

secondSwitch.addEventListener("change", () => {
    secondOptionContainer.classList.toggle("hidden");
})