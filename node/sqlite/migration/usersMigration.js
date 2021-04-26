const userMigration = `
		user_id VARCHAR(50),
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  email VARCHAR(50),
  gender VARCHAR(50),
  ip_address VARCHAR(50)
`;

module.exports = userMigration;
