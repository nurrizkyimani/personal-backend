const path = require("path");

module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "@strapi-community/strapi-provider-upload-google-cloud-storage",
      providerOptions: {
        serviceAccount: env("GCS_SERVICE_ACCOUNT"),
        bucketName: env("GCS_BUCKET_NAME"),
        baseUrl: `https://storage.googleapis.com/${env("GCS_BUCKET_NAME")}`,
      },
    },
  },
});
