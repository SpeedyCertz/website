/*const cloudinary = require("cloudinary").v2;

async function getCloudinaryImageURLs() {
  cloudinary.config({
    cloud_name: process.env.cloudinary_name,
    api_key: process.env.cloudinary_api_key,
    api_secret: process.env.cloudinary_secret,
  });

  const result = await cloudinary.search
    .expression("folder:merit-preload")
    .sort_by("public_id", "desc")
    .max_results(10)
    .execute();

  const imageUrls = result.resources.map((resource) =>
    cloudinary.url(resource.public_id, { secure: true })
  );

  return imageUrls;
}

export { getCloudinaryImageURLs }*/