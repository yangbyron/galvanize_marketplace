module.exports = {
    dev: {
        connectionString: 'postgres://postgres:mysecretpassword@localhost:5432/items_db',
        port: '4000'
    },
    production: {
        connectionString: process.env.POSTGRES_CONNECTION_STRING + '?ssl=true',
        port: process.env.PORT
    }
}