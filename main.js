const submitBtn = document.querySelector('.interactive-card__button')
const ratingItem = document.querySelectorAll('.interactive-card__rating-item')
const ratingValue = document.querySelector('.rating-value')

const thankyouCard = document.querySelector('.thankyou-card')
const interactiveCard = document.querySelector('.interactive-card')
console.log(thankyouCard);


ratingItem.forEach((item, index) => {
    item.onclick = function() {
        document.querySelector('.interactive-card__rating-item.active').classList.remove('active')
        this.classList.add('active')
        ratingValue.innerHTML = this.textContent
    }
})

submitBtn.onclick = function() {
    thankyouCard.classList.add('show-card')
    interactiveCard.style.display = "none"
}

