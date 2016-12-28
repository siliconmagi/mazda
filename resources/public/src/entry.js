import * as AmazonCognitoIdentity from 'amazon-cognito-identity-js';
import config from './config';

console.log('entry online');

const poolData = {
  UserPoolId: config.UserPoolId,
  ClientId: config.ClientId,
};
const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

const attributeList = [];

const dataEmail = {
  Name: 'email',
  Value: 'siliconmagi@yandex.com',
};

// const dataPhoneNumber = {
  // Name: 'phone_number',
  // Value: '+15555555555',
// };
const attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(dataEmail);
// const attributePhoneNumber = new AmazonCognitoIdentity.CognitoUserAttribute(dataPhoneNumber);

attributeList.push(attributeEmail);
// attributeList.push(attributePhoneNumber);

userPool.signUp('demo1', 'P*12assword', attributeList, null, (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const cognitoUser = result.user;
  console.log('user name is $cognitoUser.getUsername()');
});
