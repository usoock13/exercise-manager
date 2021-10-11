const AWS = require("aws-sdk");
const crypto = require("crypto");
// const nodemailer = require("nodemailer");
// const dotenv = require("dotenv");
// dotenv.config();

AWS.config.update({
    region: "ap-northeast-2",
    endpoint: "https://dynamodb.ap-northeast-2.amazonaws.com"
});

const docClient = new AWS.DynamoDB.DocumentClient();

export const InsertCounterItems = async (callback) => {
    const params = {
        TableName: "exermana-count",
        Items: {
            id: 1,
            name: "",
            counterArray: [],
            orderReverse: false
        }
    }
}

export const GetCounterItems = async (callback) => {
    const params = {
        TableName: "exermana-counter",
        KeyConditionExpression: "#author = :author",
        ExpressionAttributeNames: {
            "#author": "counter_author"
        },
        ExpressionAttributeValues: {
            ":author": "usoock"
        }
    }
    return docClient.query(params, callback);
}