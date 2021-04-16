const axios = require('axios')
const cowsay = require('cowsay')

const main = async () => {
    const phrase = await axios.post('http://devstark-cow-say.herokuapp.com/get', {data: process.argv[2]}).then(r => r.data.data)
    console.log(cowsay.say({text: phrase}))
}

main()