# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

players = Player.create!([{
  ## ID 1
  summoner_name: "Silver Bunny",
  first_name: "Richard",
  last_name: "Lang",
  password: "qwerqwer"
  }, {
  ## ID 2
  summoner_name: "Cielka",
  first_name: "Anne",
  last_name: "Chao",
  password: "b3stART15Tna"
  }, {
  ## ID 3
  summoner_name: "KingSizeMattress",
  first_name: "Shane",
  last_name: "Steele-Pardue",
  password: "minecraftMASTER2345"
  }, {
  ## ID 4
  summoner_name: "JoeTheCat",
  first_name: "Joe",
  last_name: "Plever",
  password: "h34rthst0neGOD"
  }, {
  ## ID 5
  summoner_name: "MyDigitalTournament",
  first_name: "Chris",
  last_name: "Burgess",
  password: "RuBy_IS-A_g00dLANGUAGE"
  }, {
  ## ID 6
  summoner_name: "Evil Overlord",
  first_name: "Sriganesh",
  last_name: "Gopal",
  password: "#rollingInDiamonds"
  }, {
  ## ID 7
  summoner_name: "FancyChristmasHat",
  first_name: "Rees",
  last_name: "Braam",
  password: "dudeThatGun$ucks"
  }, {
  ## ID 8
  summoner_name: "SavioroftheTeam",
  first_name: "Max",
  last_name: "FriendFriend",
  password: "databases_god"
}])

Tournament.create!([{
  ## ID 1
  tournament_winner_id: 0,
  tournament_name: "first tournament",
  player_id: 1
  }, {
  ## ID 2
  tournament_winner_id: 0,
  tournament_name: "Defense of the of Legends",
  player_id: 1
}])

Team.create!([{
  ## ID 1
  team_name: "human torch",
  tournament_id: 1,
  seed: 1
  }, {
  ## ID 2
  team_name: "human iceburg",
  tournament_id: 1,
  seed: 2
  }, {
  ## ID 3
  team_name: "Minecrafters",
  tournament_id: 2,
  seed: 1
}])

PlayersAndTeam.create!([{
  player_id: 1,
  team_id: 1
  }, {
  player_id: 2,
  team_id: 1
  }, {
  player_id: 3,
  team_id: 2
  }, {
  player_id: 1,
  team_id: 3
  }, {
  player_id: 3,
  team_id: 3
  }, {
  player_id: 6,
  team_id: 3
}])
