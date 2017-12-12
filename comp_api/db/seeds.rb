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
  }, {
  ## ID 9
  summoner_name: "TwoMoreSeconds",
  first_name: "Pusheen",
  last_name: "Birthday",
  password: "pad4lyfe"
  }, {
  ## ID 10
  summoner_name: "toss'EmUp",
  first_name: "Wendy",
  last_name: "TiltForever",
  password: "WaterBottlesCoefficient"
  }, {
  ## ID 11
  summoner_name: "Manlier_You",
  first_name: "Leona",
  last_name: "SunShield",
  password: "3ngag3th33n3my"
  }, {
  ## ID 12
  summoner_name: "No More Heals",
  first_name: "Soraka",
  last_name: "Bananananananana",
  password: "stop_asking_me"
  }, {
  ## ID 13
  summoner_name: "FPS Banana",
  first_name: "Mercy",
  last_name: "Overwatch",
  password: "MLGfivemanres"
  }, {
  ## ID 14
  summoner_name: "LVL_9001",
  first_name: "Naruto",
  last_name: "References",
  password: "aaaaaaaaaaaAAAAAAAAAAAAAAHHHHHHHHHHHHHHHHHHHH"
  }, {
  ## ID 15
  summoner_name: "SPRINGisBETTER",
  first_name: "Spring",
  last_name: "Sprung",
  password: "physics_traumatized"
  }, {
  ## ID 16
  summoner_name: "D.VA STREAMS",
  first_name: "D.VA",
  last_name: "Anne's Laptop",
  password: "cedric_don't_look"
  }, {
  ## ID 17
  summoner_name: "natural_water",
  first_name: "Fake",
  last_name: "Deer Park",
  password: "iPr0m1s3imBETTER"
  }, {
  ## ID 18
  summoner_name: "FAST_FOOD",
  first_name: "McDonald",
  last_name: "Heart Attack",
  password: "ITwasntME"
  }, {
  ## ID 19
  summoner_name: "Inspiration",
  first_name: "Laptop",
  last_name: "Chargers",
  password: "thisISgettingOLD"
  }, {
  ## ID 20
  summoner_name: "boostedAF",
  first_name: "Adding",
  last_name: "Lines",
  password: "github_stats_matter"
  }, {
  ## ID 21
  summoner_name: "MetaJokes",
  first_name: "FirstName",
  last_name: "LastName",
  password: "Password"
  }, {
  ## ID 22
  summoner_name: "Five.Five",
  first_name: "Hearts",
  last_name: "Tespa BOTTLE",
  password: "riggedDrawings"
  }, {
  ## ID 23
  summoner_name: "HalfwayThere",
  first_name: "EXP",
  last_name: "Bar",
  password: "eugenes300dollarchair"
  }, {
  ## ID 24
  summoner_name: "Order Shakes",
  first_name: "Crew",
  last_name: "Swag",
  password: "comp426@unc"
  }, {
  ## ID 25
  summoner_name: "Definition",
  first_name: "AMX",
  last_name: "Board",
  password: "i_am_broken"
}])

Tournament.create!([{
  ## ID 1
  tournament_winner_id: 0,
  tournament_name: "Welcome Back Tournament",
  player_id: 1
  }, {
  ## ID 2
  tournament_winner_id: 0,
  tournament_name: "Defense of the of Legends",
  player_id: 1
}])

Team.create!([{
  ## ID 1
  team_name: "TORCH IT UP",
  tournament_id: 1,
  seed: 1
  }, {
  ## ID 2
  team_name: "Cool or Cold?",
  tournament_id: 1,
  seed: 2
  }, {
  ## ID 3
  team_name: "Humus",
  tournament_id: 1,
  seed: 3
  }, {
    ## ID 4
  team_name: "Human alien monster thing",
  tournament_id: 1,
  seed: 4
  }, {
  ## ID 5
  team_name: "Artists Unite",
  tournament_id: 1,
  seed: 5
  }, {
  ## ID 6
  team_name: "Hearthstone Legendaries",
  tournament_id: 1,
  seed: 6
  }, {
  ## ID 7
  team_name: "Fancy Hair",
  tournament_id: 1,
  seed: 7
  }, {
  ## ID 8
  team_name: "Super Tall",
  tournament_id: 1,
  seed: 8
  }, {
  ## ID 9
  team_name: "Minecrafters",
  tournament_id: 2,
  seed: 1
  }, {
  ## ID 10
  team_name: "Last Place",
  tournament_id: 1,
  seed: 9
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
