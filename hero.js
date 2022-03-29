/*
Hero Generator

Pseudocode

Variables

adjectives
heroes
powers

adjectives
hero
power
message
idx
adjIdx
heroIdx
powerIdx

PROCEDURE

SET adjective, heroes, powers

SET adj FROM adjectives
SET hero FROM heroes
SET power FROM powers
SET message to "The {adj} {hero} can {power}"

DISPLAY message
OUTPUT message
*/

var adjectives = [
    'Strong', 
    'Brave', 
    'Powerful', 
    'Wonderful', 
    'Smart',
    'Moe Man',
    'Whip Flash'
];

var heroes = [
    'Crane',
    'Lizardman',
    'Poison Ivy',
    'Elastic Woman',
    'Blast Burst'
];

var powers = [
    'has super strenght',
    'can scale walls',
    'can make poisons',
    'can stretch their whole body',
    'can create shockwaves'
];

// powers[2] => 'leap curbs in a single bound'
// powers[1 + 1] => 'leap curbs in a single bound;
// var foo = 2;
// powers[foo] => 'leap curbs in a single bound'

//var idx;

var adjIdx = Math.floor(Math.random() * adjectives.length);
var heroIdx = Math.floor(Math.random() * heroes.length);
var powerIdx = Math.floor(Math.random() * powers.length);


//Math.floor(Math.random())

//console.log(Math.floor(2.456));

//console.log(Math.random());

var adj, hero, power;

adj = adjectives[adjIdx];
hero = heroes[heroIdx];
power = powers[powerIdx];

//var message = 'The' + adj + '' + hero + 'can' + power;

//String template literal
var message = `The ${adj} ${hero} and ${power}.`
console.log(message);

/*
Build a randmizer of your choose

*/