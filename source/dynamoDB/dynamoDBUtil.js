let AWS = require('aws-sdk');
const {S3_BUCKET_REGION} = require('../util/constants');

let docClient = new AWS.DynamoDB.DocumentClient({
  accessKeyId:"AKIARPHHN4JZ3AKIYB6I",
  secretAccessKey:"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",
  region:S3_BUCKET_REGION
});

const table = "userVerificationTesting";

const SECONDS_IN_MINUTE = 60 ;

<<<<<<< HEAD
const addEntry = async function(email,token){
=======
export const addEntry = async function(email,token){
>>>>>>> 20061006b21fd8509ccf4f06572e32d719b66613
  const secondsSinceEpoch = Math.round(Date.now() / 1000);
  const expirationTime = secondsSinceEpoch + 5 * SECONDS_IN_MINUTE;
  console.log(expirationTime);
  var params = {
    TableName: table,
    Item: {
      "email" : email,
      "token" : token,
      "ttl": expirationTime
    }
  };
  return await docClient.put(params); 
}

<<<<<<< HEAD
const getEntry = async function(email,token){
=======
export const getEntry = async function(email,token){
>>>>>>> 20061006b21fd8509ccf4f06572e32d719b66613
  var params = {
    TableName: table,
    Item: {
      "email" : email,
      "token" : token
    }
  };

  return await docClient.get(params); 
}
<<<<<<< HEAD
module.exports = {
  addEntry,
  getEntry
}
=======
>>>>>>> 20061006b21fd8509ccf4f06572e32d719b66613
