const dotenv = require("dotenv");
dotenv.config();

const envVars = Object.keys(process.env);

for (let i = 0; i < envVars.length; i++) {
  const key = envVars[i].toLowerCase(); //lowercase key
  const value = process.env[key];

  // export the environment variable with its value
  exports[key] = value;
}
