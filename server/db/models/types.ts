export interface TChirps {
    id: Number,
    userid: Number,
    content: String,
    location: String,
    created_at: Date
}

export interface TUsers {
    id: Number,
    username: String,
    password: String,
    email: String,
    created_at: Date
}