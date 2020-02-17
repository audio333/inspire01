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

				var currentModal = this.lastChild;
				currentModal.classList.add('visible');
				self.bgOverlay.style.display = "block";
				self.bodyEl.classList.add('hide-scroll');
			});
		});

		// CLOSE
		this.modalClose.forEach(function(close){
			close.addEventListener('click', function(e){
				e.preventDefault();
				e.stopPropagation();
				// Modal
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
	}

}

export default ProductModal;
