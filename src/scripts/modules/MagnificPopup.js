import $ from 'jquery';

class MagnificPopup {
	constructor() {
		this.els = $(".magnific");
		this.initPopup();
	}

	initPopup() {
		this.els.each(function(){
			$(this).magnificPopup({
				delegate: 'a',
				type:'image',
				gallery: {
					enabled: true
				}
			});
		})
	}

}

export default MagnificPopup;
