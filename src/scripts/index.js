// 3rd party packages from NPM
// Some useful npm packages: https://getflywheel.com/layout/best-javascript-libraries-frameworks-2020/#libraries
import $ from 'jquery';
import jQueryBridget from 'jquery-bridget';
import Masonry from 'masonry-layout';
import slick from 'slick-carousel';
// import lightbox from 'lightbox2';
import popup from 'magnific-popup';

// CSS
import '../styles/main.scss';
import '@fortawesome/fontawesome-free/css/all.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import 'lightbox2/src/css/lightbox.css';
import 'magnific-popup/src/css/main.scss';

// Our modules / classes
import Menu from './modules/Menu';
// import Menu from './modules/Menu2';
import ProductModal from './modules/ProductModal';
import ScrollToTop from './modules/ScrollToTop';
import ScrollReveal from './modules/ScrollReveal';
// import MobileMenu from './modules/MobileMenu';
import TestimonialSlider from './modules/TestimonialSlider';
// import Lightbox from './modules/Lightbox';
import MagnificPopup from './modules/MagnificPopup';

// Instantiate a new object using our modules/classes
var menu = new Menu();
var productModal = new ProductModal();
var scrollToTop = new ScrollToTop();
var scrollReveal = new ScrollReveal();
// var mobileMenu = new MobileMenu();
// var heroSlider = new HeroSlider();
// var lightbox2 = new Lightbox();
var magnificPopup = new MagnificPopup();
var testimonialSlider = new TestimonialSlider();


// var elem = document.querySelector('.grid');
// var msnry = new Masonry(elem, {
// 	itemSelector: '.grid-item',
// 	columnWidth: '.grid-sizer',
// 	percentPosition: true,
// 	gutter: '.gutter-sizer',
// 	horizontalOrder: true,
// 	stagger: 30
// });

// jQueryBridget('masonry', Masonry, $);
// var msnry = new Masonry('.grid', {});
// $('.grid').masonry({
// 	columnWidth: 200,
// });


