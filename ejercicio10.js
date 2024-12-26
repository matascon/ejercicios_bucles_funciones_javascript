const capitals = {
  Spain: 'Madrid',
  France: 'Paris',
  Italy: 'Rome',
  Germany: 'Berlin',
  Portugal: 'Lisbon',
  Poland: 'Warsaw',
  Greece: 'Athens',
  Austria: 'Vienna',
  Hungary: 'Budapest',
  Ireland: 'Dublin'
};

function getCapital(country) {
	let capital = null;
	
	if (capitals[country]) {
		capital = capitals[country];
	} else {
		console.log('Insert a valid value');
	}
	return capital
}

let country = 'France'

console.log('Capital of ' + country + ' is: ' + getCapital(country));