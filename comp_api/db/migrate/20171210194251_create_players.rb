class CreatePlayers < ActiveRecord::Migration[5.1]
  def change
    create_table :players do |t|
      t.string :first_name
      t.string :last_name
      t.string :summoner_name
      t.string :password
      t.integer :tournaments_played
      t.integer :tournaments_won
      t.integer :games_played
      t.integer :games_won

      t.timestamps
    end
  end
end
