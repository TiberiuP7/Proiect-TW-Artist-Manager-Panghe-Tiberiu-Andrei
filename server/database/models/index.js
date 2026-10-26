const ArtistFavorit = require("./ArtistFavorit");
const User = require("./User");

User.hasMany(ArtistFavorit, {
    foreignKey: 'userId'
});
ArtistFavorit.belongsTo(User, {
    foreignKey: 'userId'
});

module.exports = { User, ArtistFavorit };