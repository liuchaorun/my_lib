const config = {
    db: {
        database: 'postgres',
        username: 'postgres',
        password: 'postgres',
        host: '127.0.0.1',
        port: 5432
    },
    // host:'47.95.232.254',
    // remote_password:'678123',
    // host_password:'afpEduction03'
};

if (process.env.NODE_ENV === 'development') {
    config.db.host = '127.0.0.1';
}

module.exports = config;