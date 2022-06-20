(function(){
	"use strict";

	let planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
	let planetsArray = planetsString.split('|');

	/**
	 * TODO:
	 * Convert planetsString to an array, and save it in a variable named
	 * planetsArray.
	 * console.log planetsArray to check your work
	 */
	// console.log(planetsArray);
	console.log(planetsArray);

	/**
	 * TODO:
	 * Create a string with <br> tags between each planet. console.log() your
	 * results. Why might this be useful?
	 *- Because when combining it into HTML it will translate smoothly?
	 * BONUS:
	 * Create another string that would display your planets in an unordered
	 * list. You will need an opening AND closing <ul> tags around the entire
	 * string, and <li> tags around each planet.
	 */
	let planetsString2 = "<br>Mercury</br><br>Venus</br><br>Earth</br><br>Mars</br><br>Jupiter</br><br>Saturn</br><br>Uranus</br><br>Neptune</br>";

    console.log(planetsString2);

    let planetsString3 = "<ul> <li>Mercury</li><li>Venus</li><li>Earth</li><li>Mars</li><li>Jupiter</li><li>Saturn</li><li>Uranus</li><li>Neptune</li> </ul>";

    console.log(planetsString3);

})();