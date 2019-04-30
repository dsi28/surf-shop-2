const mongoose = require('mongoose'),
Review = require('./review');

const PostSchema = new mongoose.Schema({
    title: String,
    price: String,
    desc: String,
    images: String,
    location: String,
    coordinates: [Number],
    rating: Number,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    reviews: [
        {
            type:  mongoose.Schema.Types.ObjectId,
            ref: 'Review'
        }
    ]
});

PostSchema.pre('remove', async function(){
    await Review.remove({
        _id: {
            $in: this.reviews
        }
    });
});

PostSchema.methods.getRating = function(){
    let rating = 0;
    if(this.reviews && this.reviews.length){
        for (const review of this.reviews) {
            rating += review.rating;
        }
        this.rating = Math.round((ratingsTotal/ this.reviews.length)*10)/10;
    }else{
        this.rating = rating;
    }
};

module.exports = mongoose.model('Post', PostSchema);