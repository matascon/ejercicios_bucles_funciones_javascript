const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' }
];

function findMutantByPower(mutants, power) {
	const foundMutants = [];

	for (const mutant of mutants) {
		if (mutant.power === power) {
			foundMutants.push(mutant.name);
		}
	}
	if (!foundMutants.length) {
		return 'Mutants with the power ' + power + ' have not been found';
	}
	return 'The following mutants with the power of ' + power + ' have been found: ' + foundMutants;
}

console.log(findMutantByPower(mutants, 'shape-shifting'));