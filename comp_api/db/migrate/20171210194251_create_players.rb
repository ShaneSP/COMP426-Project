class CreatePlayers < ActiveRecord::Migration[5.1]
  def change
    create_table :players do |t|
      t.string :firstName
      t.string :lastName
      t.string :summonerName
      t.string :password
      t.integer :tournamentsPlayed
      t.integer :tournamentsWon
      t.integer :gamesPlayed
      t.integer :gamesWon

      t.timestamps
    end
  end
end
