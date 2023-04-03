console.log("To run the server");
const mysql = require('mysql2/promise');

// create the connection to database
mysql://umqb3pxisp5y2r36:EKhSTCtQMMUVvkVOo91O@bctgqeg9rvhwwryr4boa-mysql.services.clever-cloud.com:3306/bctgqeg9rvhwwryr4boa

const connection = mysql.createConnection({
  host: 'bctgqeg9rvhwwryr4boa-mysql.services.clever-cloud.com',
  user: 'umqb3pxisp5y2r36',
  database: 'bctgqeg9rvhwwryr4boa',
  password:"EKhSTCtQMMUVvkVOo91O"
}).then(async()=>{
  const [rows, fields] = await connection.execute('show databases');
  console.log(rows)
});
