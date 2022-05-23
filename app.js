//const firstname = 'Babayan'
//const lastname = prompt('write your name')
//alert(firstname + '  ' + lastname );

const nowyear = 2022
const birthyear = 2005
const age = nowyear - birthyear

console.log(age);

const courseStatus = 'pending'
if (courseStatus === 'ready') {
 console.log('kurs uje gatov n ego mojno proxodit')
} else if (courseStatus === 'pending') {
 console.log('kurs poka naxoditsa v procese razrabotki')
}

const isReady = true
if(isReady === true) {

 console.log('vso gatovo')
}

function calculateAge(year) {
 return 2022 - year
} 

console.log(calculateAge(1937))

