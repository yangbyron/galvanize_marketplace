module.exports = {
    
    dev:{
        connectionString:'postgres://postgres:postgrespw@localhost:55000/user_db',
        PORT:3001
    },
    production:{
        connectionString: process.env.POSTGRESQL + '?ssl=true',
        PORT:process.env.PORT
    }
}