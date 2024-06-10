const mongoose = require("mongoose");
require("dotenv").config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

mongoose
  .connect(
    `mongodb+srv://${username}:${password}@pixel-renaissance-db.ko8ugc7.mongodb.net/reviews?retryWrites=true&w=majority&appName=pixel-renaissance-db`
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log("Error connecting to MongoDB", error));

const reviewSchema = new mongoose.Schema(
  {
    reviewer: String,
    content: String,
    rating: Number,
    item: String,
    image: String,
  },
  { collection: "reviews" }
);

// Models Review class using review schema
const Review = mongoose.model("Review", reviewSchema);

const createReview = async (val) => {
  const review = new Review({
    reviewer: val.reviewer,
    content: val.content,
    rating: val.rating,
    item: val.item,
    image: val.image,
  });
  const result = await review.save();
  console.log(result);
};

/* let reviews = [
  {
    reviewer: "Testing env file",
    content: "Testing env environment variables",
    rating: 5,
    item: "Pixel Renaissance Stickers",
  },
]; */

let reviews = [
  {
    reviewer: "Loren Isles",
    content: "These worked so well with my phone case!",
    rating: 4.5,
    item: "Pixel Renaissance Stickers",
    image: "/reviews/def-pic.png",
  },
  {
    reviewer: "Makayla Brown",
    content:
      "I really liked these stickers, but I think it would be better with more designs rather than just the logo.",
    rating: 4.5,
    item: "Pixel Renaissance Stickers",
    image: "/reviews/def-pic.png",
  },
  {
    reviewer: "Aubrey Lewis",
    content:
      "The stickers are so pretty! I wished they would come in smaller sizes though.",
    rating: 4.0,
    item: "Pixel Renaissance Stickers",
    image: "/reviews/def-pic.png",
  },
  {
    reviewer: "Katie Dupree",
    content:
      "This mug is so durable! I dropped this like 3 times and it didn't break",
    rating: 5,
    item: "Pixel Renaissance Mug",
    image: "/reviews/def-pic.png",
  },
  {
    reviewer: "Sasha Vox",
    content:
      "This pin could be larger, but it works with my lanyard so it's not too bad",
    rating: 4,
    item: "Pixel Renaissance Pin",
    image: "/reviews/def-pic.png",
  },
];

// Added each review to MongoDB reviews collection
reviews.forEach((review) => createReview(review));
