const TopDesign_PostSchema = new Schema({
    id: Number,
    User_id: Number,
    content: String,
    image_url: String,
    active: Boolean,
    timestamp: Date,
    Theme_id: Number
});