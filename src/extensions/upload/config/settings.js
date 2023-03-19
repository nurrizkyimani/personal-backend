module.exports = ({ env }) => ({
  provider: "google-cloud-storage",
  providerOptions: {
    serviceAccount: env("GCS_SERVICE_ACCOUNT"),
    bucketName: env("GCS_BUCKET_NAME"),
    baseUrl: `https://storage.googleapis.com/${env(GCS_BUCKET_NAME)}`,
  },
});
