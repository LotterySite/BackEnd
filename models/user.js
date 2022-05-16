const User=mongoose.model("users",userSchema)
module.exports={
    userSchema,
    User
}