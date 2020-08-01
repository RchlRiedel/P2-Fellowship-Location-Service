import { Pool } from 'pg'
//entrypoint for all of the database files
// things/ config that all database files need to be completed

//build a connection pool
//a secret is any value you don't want to share with the public
export const connectionPool:Pool = new Pool({
    host: process.env['LB_Host'],// the public ip address of you sql instance
    user: process.env['P2_User'],//user on your database ( probably postgres)
    password: process.env['P2_Password'],//password
    database: process.env['P2_Database'],//name of database
    port:5432,// the database's port
    max:5//maximum number of connections
})