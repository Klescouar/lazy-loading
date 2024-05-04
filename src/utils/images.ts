export const IMAGE_URL =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWs7k22OfnXtPjDMhGs1i2svWVASQSYrb_cUNGpU--Ow&s";

export const generateImageUrlArray = () => {
  return Array.from({ length: 50 }, () => IMAGE_URL);
};
