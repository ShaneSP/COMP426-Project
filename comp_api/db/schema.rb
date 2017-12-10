# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20171210194314) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "games", force: :cascade do |t|
    t.integer "blueTeamID"
    t.integer "redTeamID"
    t.integer "tournamentID"
    t.integer "gameWinner"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "players", force: :cascade do |t|
    t.string "firstName"
    t.string "lastName"
    t.string "summonerName"
    t.string "password"
    t.integer "tournamentsPlayed"
    t.integer "tournamentsWon"
    t.integer "gamesPlayed"
    t.integer "gamesWon"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "teams", force: :cascade do |t|
    t.string "teamName"
    t.integer "playerOneID"
    t.integer "playerTwoID"
    t.integer "playerThreeID"
    t.integer "playerFourID"
    t.integer "playerFiveID"
    t.integer "tournamentPlayedID"
    t.integer "gamesWon"
    t.integer "gamesPlayed"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "tournaments", force: :cascade do |t|
    t.integer "tournamentWinnerID"
    t.string "tournamentName"
    t.integer "tournamentOrganizerID"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
