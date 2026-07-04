const Review = require("../models/review");
const Listing = require("../models/listing");

module.exports.createReview = async (req, res) => {
    let listing = await Listing.findById(req.params.id).populate("reviews");
    let newReview = new Review(req.body.review);

    
    const incomingComment = newReview.comment.trim().toLowerCase();

    
    if (listing.reviews.length > 0) {
        const lastReview = listing.reviews[listing.reviews.length - 1];
        const lastComment = lastReview.comment.trim().toLowerCase();

        if (incomingComment === lastComment) {
            req.flash("error", "Duplicate comment detected! Please write a unique review.");
            return res.redirect(`/listings/${listing._id}`);
        }
    }

    
    newReview.author = req.user._id;
    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();

    req.flash("success", "Review created successfully!");
    res.redirect(`/listings/${listing._id}`);
};

module.exports.deleteReview = async (req, res) => {
    let { id, reviewId } = req.params;

    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", "A review Deleted !");
    res.redirect(`/listings/${id}`);
};