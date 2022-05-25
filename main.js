const submitBtn = document.querySelector('.interactive-card__button')
const ratingItem = document.querySelectorAll('.interactive-card__rating-item')
const ratingValue = document.querySelector('.rating-value')

const thankyouCard = document.querySelector('.thankyou-card')
const interactiveCard = document.querySelector('.interactive-card')


ratingItem.forEach((item, index) => {
    item.onclick = function(e) {
        const targetRating = e.target.closest('.interactive-card__rating-item')
        console.log(targetRating);
        ratingItem.forEach(item => {
            if(targetRating === item) {
                item.classList.toggle('active')
            } else {
                item.classList.remove('active')
            }
        })
        ratingValue.innerHTML = this.textContent
    }
})

submitBtn.onclick = function() {
    thankyouCard.classList.add('show-card')
    interactiveCard.style.display = "none"
}
