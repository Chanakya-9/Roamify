const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");


const MONGO_URL = "mongodb://127.0.0.1:27017/roamify";

main()
    .then(async () => {
        console.log("connected to DB");
        await initDB();
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {

    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {

    await Listing.deleteMany({});
    await Review.deleteMany({});
    console.log("Old listings and spam reviews cleared successfully!");

    const sampleOwnerId = "698b2c6e99c3945b49d85cdf";


    for (let item of initData.data) {
        let newListing = new Listing({
            title: item.title,
            description: item.description,
            image: item.image,
            price: item.price,
            location: item.location,
            country: item.country,
            owner: sampleOwnerId,
            reviews: []
        });


        if (item.sampleReviews && item.sampleReviews.length > 0) {
            for (let rev of item.sampleReviews) {
                let newReview = new Review({
                    rating: rev.rating,
                    comment: rev.comment,
                    author: sampleOwnerId
                });


                await newReview.save();


                newListing.reviews.push(newReview._id);
            }
        }


        await newListing.save();
    }

    console.log("Database has been cleanly seeded with pristine listings and customized structured reviews!");
    mongoose.connection.close();
};