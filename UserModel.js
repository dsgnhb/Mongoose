const UserSchema = new Schema({
    id: Number,
    username: String,
    discriminator: Number,
    avatar_url: String,
    Rank_id: Number,
    created_at: Date
});