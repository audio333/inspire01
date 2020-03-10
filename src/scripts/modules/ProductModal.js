import counterUp from 'counterup2';

class ProductModal {
	constructor() {
		console.log('product modal init');
		this.links = document.querySelectorAll('.product-card__links li');
		this.modals = document.querySelectorAll('.product-modal');
		this.modalClose = document.querySelectorAll('.product-modal__close');
		this.images = document.querySelectorAll('.product-modal__img');
		this.bgOverlay = document.querySelector('.bg-overlay');
		this.bodyEl = document.body;

		this.events();
	}

	events() {
		const self = this;

		// OPEN
		this.links.forEach(function(link) {
			link.addEventListener('click', function(e) {
				e.preventDefault();

				// MODAL
				var currentModal = this.nextSibling.querySelector('.product-modal');
				currentModal.classList.add('visible');

				self.bgOverlay.style.display = "block";
				self.bodyEl.classList.add('hide-scroll');

				// Counter Up
				var motor = link.nextSibling.querySelector('#motor');
				counterUp(motor, {
					duration: 1000,
					delay: 16
				});

				var maxSpeed = link.nextSibling.querySelector('#maxSpeed');
				counterUp(maxSpeed, {
					duration: 1000,
					delay: 16
				});

				var maxRange = link.nextSibling.querySelector('#maxRange');
				counterUp(maxRange, {
					duration: 1000,
					delay: 16
				});
			});
		});

		// CLOSE
		this.modalClose.forEach(function(close){
			close.addEventListener('click', function(e){
				e.preventDefault();
				e.stopPropagation();

				// MODAL
				self.modals.forEach(modal => {
					if(modal.classList.contains('visible')) {
						modal.classList.remove('visible');
					}
				});
				self.bgOverlay.style.display = "none";
				self.bodyEl.classList.remove('hide-scroll');

				// var currentClose = this.parentElement;
				// currentClose.classList.remove("visible");
			});
		});

		self.bgOverlay.addEventListener('click', this.closeModal.bind(this));
	}

	closeModal() {
		this.modals.forEach(modal => {
			if(modal.classList.contains('visible')) {
				modal.classList.remove('visible');
			}
		});
		this.bgOverlay.style.display = "none";
		this.bodyEl.classList.remove('hide-scroll');
	}

}

export default ProductModal;
