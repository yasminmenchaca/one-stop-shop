const aws = require('aws-sdk');

const deleteFile = (key) => {
    const s3 = new aws.S3({
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: 'us-east-1',
    });

    s3.deleteObject(
        {
            Bucket: 'onestopshop-images',
            Key: key,
        },
        function (err, data) {
            if (err) {
                throw err;
            }
        }
    );
};

exports.deleteFile = deleteFile;