import "core-js";
import "regenerator-runtime/runtime";
import Sentry from "./sentry";
import getSentry from "./sentry_service";

async function loadSentry(){
	const arrSentry = []
	const collisionObjects = await getSentry()

	collisionObjects.forEach( sentry => {
		const sentryCollidion = new Sentry(sentry.sentryId, sentry.fullname, sentry.year_range_min, sentry.year_range_max); 
		arrSentry.push(sentryCollidion); 
	})
	 renderSentries(arrSentry);
}


function renderSentries(sentries){
		
	sentries.forEach( (collisionObjects) => {
		const olElement = document.getElementById("list_sentry");
		const liElement = document.createElement("li");
		const text = `${collisionObjects['sentryId']} | ${collisionObjects['name']}: risco de colisão entre: ${collisionObjects['minYearSentry']} e ${collisionObjects['minYearSentry']}`;
		
		liElement.innerText = text;
		olElement.appendChild(liElement);
		}
	)
}

loadSentry()