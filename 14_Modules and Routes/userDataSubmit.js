
const queryString = require('querystring')

function userDataSubmit(req,res){

    let dataBody = [];

        req.on('data', (chunk) => {
            dataBody.push(chunk);
        });

         req.on('end', () => {
                    let rawData = Buffer.concat(dataBody).toString();
                    let readabledata = queryString.parse(rawData);
        
                    let app = "My name is " + readabledata.name +
                              " and my password is " + readabledata.password;

                              console.log(app)
         })

    res.write("form successfully submit")
}

module.exports = userDataSubmit;