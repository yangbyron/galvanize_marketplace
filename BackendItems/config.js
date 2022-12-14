module.exports = {
    dev: {
        connectionString: 'postgresql://postgres:docker@localhost:5432/items_db',
        port: '4000'
    },
    production: {
        connectionString: process.env.POSTGRES_CONNECTION_STRING + '?ssl=true',
        port: process.env.PORT
    }
}