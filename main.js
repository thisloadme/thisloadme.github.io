function majuImage () {
	const target = document.getElementsByClassName('image-target')
	const active = document.getElementsByClassName('image-target d-block')
	if (target[0] === active[0]) {
		target[0].classList.add("d-none")
		target[0].classList.remove("d-block")
		target[1].classList.add("d-block")
		target[1].classList.remove("d-none")
	}
}

function mundurImage () {
	const target = document.getElementsByClassName('image-target')
	const active = document.getElementsByClassName('image-target d-block')
	if (target[1] === active[0]) {
		target[1].classList.add("d-none")
		target[1].classList.remove("d-block")
		target[0].classList.add("d-block")
		target[0].classList.remove("d-none")
	}
}