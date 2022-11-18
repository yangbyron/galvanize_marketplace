module.exports = {
    
    dev:{
        connectionString:'postgresql://postgres:mysecretpassword@localhost:5432/user_db',
        PORT:3001
    },
    production:{
        connectionString: process.env.POSTGRESQL + '?ssl=true',
        PORT:process.env.PORT
    }
}