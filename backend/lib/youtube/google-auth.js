const {google} = require('googleapis');

const auth = () => {
    const gauth = new google.auth.GoogleAuth({
        keyfile: "credentials.json",
        scopes: "https://www.googleapis.com/auth/youtube"
    })
    
    console.log('inside auth')
    console.log(gauth)

    return gauth
}

module.exports = {auth}