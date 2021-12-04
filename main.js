let modal = document.querySelector('#image-modal');
let image = document.querySelectorAll('.img img');
let imageModal = document.querySelector('#imgModal')
let close = document.querySelector('.close');

for (let i = 0; i < image.length; i++) {
	image[i].addEventListener('click', (e) => {
		modal.style.display = 'block';
		imageModal.src = e.target.src
		console.log(e.target.src)
	})
}

/* clicking the x button closes the modal window */

close.addEventListener('click', ()=>{
	modal.style.display = 'none';
})

/* clicking the modal window closes it */

modal.addEventListener('click', (e)=>{
	e.stopPropagation()
	modal.style.display = 'none';
})

/* clicking the image doesn't close the modal window */

imageModal.addEventListener('click', (e) =>{
	e.stopPropagation()
})

