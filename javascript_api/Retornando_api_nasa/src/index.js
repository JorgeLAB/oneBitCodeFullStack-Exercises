import "core-js";
import "regenerator-runtime/runtime";

import Neo from "./neo.js";
import { getNeos } from './neo_service.js';

async function loadNeos(){
	let neos = [];
	let neosJSON = await getNeos();

	neosJSON.forEach(elem => {
		const minDiameter = elem["estimated_diameter"]["kilometers"]["estimated_diameter_min"];
		const maxDiameter = elem["estimated_diameter"]["kilometers"]["estimated_diameter_max"];

		const averageDiameter =  (maxDiameter + minDiameter) / 2;

		const newNeo = new Neo( elem["id"], elem["name"], averageDiameter, elem["is_sentry_object"]); 
	
		neos.push(newNeo);
	})
	renderNeo(neos);
}


function renderNeo(neos){
	const ulElement = document.getElementById("neos-list"); 

	neos.forEach(neo => {
		const liElement = document.createElement("li");
		const isSentry = neo.isSentry ? "Perigo de colisão" : "Sem perigo de colisão" ;
		const text = `${neo.id} | ${neo.name} | ${neo.averageEstimateDiameter} | ${neo.isSentry}`;
		liElement.innerText= text;
		ulElement.appendChild(liElement);
	})
} 

loadNeos();