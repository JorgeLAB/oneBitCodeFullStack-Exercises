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
	console.log(neos);
}

loadNeos();