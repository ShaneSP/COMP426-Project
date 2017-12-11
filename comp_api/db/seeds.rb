# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

players = Player.create!([{
  summoner_name: "RichardBaybaay",
  first_name: "Richard",
  last_name: "Lang",
  password: "qwerqwer"
  }, {
  summoner_name: "Annenenenenene-chan",
  first_name: "Anne",
  last_name: "Chao",
  password: "b3stART15Tna"
  }, {
  summoner_name: "Big_Daddy_Shane",
  first_name: "Shane",
  last_name: "Steele-Pardue",
  password: "minecraftMASTER2345"
  }, {
  summoner_name: "JoeTheCat",
  first_name: "Joe",
  last_name: "Plever",
  password: "h34rthst0neGOD"
}])

Tournament.create!([{
  tournament_winner_id: 0,
  tournament_name: "first tournament",
  player_id: 1
}])

Team.create!([{
  team_name: "human torch",
  tournament_id: 1,
  games_won: 0,
  games_played: 0
  }, {
  team_name: "human iceburg",
  tournament_id: 1,
  games_won: 0,
  games_played: 0
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
}])
