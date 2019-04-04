const companies = [
	{ name: 'Company One', category: 'Finance', start: 1981, end: 2003 },
	{ name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
	{ name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
	{ name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
	{ name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
	{ name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
	{ name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
	{ name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
	{ name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 }
];

const ages = [ 33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32 ];

const name = [ 'M', 'i', 'c', 'h', 'h', 'a', 'e', 'l' ];

// standard for loop

// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

// forEach    /* better way to loop through and array */

//  companies.forEach(function(company) {
//      console.log(company.category);
//  });

/* es6 arrow function forEach */
//  companies.forEach(company => {
//      console.log(company.start);

console.log(...new Set(ages.sort()));
//  });

companies.forEach((letter) => {
	console.log(letter);
});

// FILTER

/* Get 21 and older */

/* using for loop and if statement */
// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
//     if(ages[i]>= 21) {
//         canDrink.push(ages[i]);
//     }
// }

// const canDrink = ages.filter(function(age) {
//     if(age >= 21) {
//         return true;
//     }
// })
// console.log(canDrink);

/* es6 arrow function filter */
// const canDrink = ages.filter(age => age >= 21);
// console.log(canDrink);

/* Filter retail companies */

// const retailCompanies = companies.filter(function(company) {
//     if(company.category === 'Retail') {
//         return true;
//     }
// })

/* es6 arrow function */
// const retailCompanies = companies.filter(company => company.category === 'Retail');
//  console.log(retailCompanies);

/* Get 80's companies */

// const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));
// console.log(eightiesCompanies)

// Get companies that lasted 10 years or more

// const lastedTenYears = companies.filter(company => (company.end - company.start >= 10));
// console.log(lastedTenYears);

// map

// Create array of company names
// const companyNames = companies.map(function(company) {
//     return company.name;
// });
// console.log(companyNames);

/* Test map */

// const testMap = companies.map(function (company) {
//     return `${company.name} [${company.start} ${company.end}]`;
// });

// const testMap = companies.map(
//   company => `${company.name} [${company.start} - ${company.end}]`
// );

// console.log(testMap);

// const nameMap = name.map(
//     letters => `${letters.name}`
// );
// console.log(nameMap);

/* age map */
// const ageMap = ages
// .map(age => Math.sqrt(age))
// .map(age => age * 2);

// console.log(ageMap);

// sort
/* sort companies by start years */

// const sortedCompanies = companies.sort(function(c1, c2) {
//     if(c1.start > c2.start) {
//         return 1;
//     } else {
//         return -1;
//     }
// });

// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
// console.log(sortedCompanies);

/* sort ages */
// const sortAges = ages.sort((a, b) => a - b);
// console.log(sortAges);

// reduce

// let ageSum = 0;
// for (let i = 0; i < age.length; i++) {
//   ageSum += ages[i];
// }

// const ageSum = ages.reduce((total, age) => total + age, 0)

/* get total years for all companies */

// const totalYears = companies.reduce(function(total, company) {
//   return total + (company.end - company.start);
// }, 0);

// console.log(totalYears);
