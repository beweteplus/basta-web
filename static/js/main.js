import 'bootstrap-sass';

import { initFoodMenu } from "./fetchFood.js";
import { initScroll } from "./scrollUtil.js";

$(document).ready(() => {
	initFoodMenu();
	initScroll();
});
