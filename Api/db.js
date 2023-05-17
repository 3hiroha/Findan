import mysql from "mysql";
const mariadb = require('mariadb');
export const db = mariadb.createConnection({
    host:"server2.bsthun.com",
    user:"lab_iagoa",
    port:"6105",
    password:"yeQPdqrbuGjKaSDP",
    database:"lab_blank01_i3ensf",
});