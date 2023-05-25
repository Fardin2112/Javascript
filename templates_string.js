// template strings/literals

const recipient = "James"

// Refactor the email string to use template strings
const email = "Hey " + recipient + "! How is it going? Cheers Per"
const email1 = `
    hey ${recipient} ! How is it going? Cheers per1 
`

console.log(email)
console.log(email1)