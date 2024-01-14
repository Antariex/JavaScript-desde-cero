// Social Media Profile

// 1. User information
const username = 'antariex'
const fullName = 'Ariel Antequiera'
const age = 37
const isStudent = true

// 2. Address
const address = {
  street: 'Arenales 2774',
  city: 'Buenos Aires',
  state: 'CABA',
  zipCode: 1425
}

// 3. Hobbies
const hobbies = ['Coding', 'Reading', 'Cycling']

// 4. Generating personalized bio
const personalizedBio = `Hi, I'm ${fullName}.
I'm ${age} years old.
I live in ${address.city}.
I love ${hobbies.join(', ')}.
Follow me for coding adventures!`

// 5. Print the user profile and bio
console.log(personalizedBio)
