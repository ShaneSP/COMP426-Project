class CreateGames < ActiveRecord::Migration[5.1]
  def change
    create_table :games do |t|
      t.integer :blue_team_id
      t.integer :red_team_id
      t.integer :tournament_id #Tournament that the game is a part of
      t.integer :game_winner

      t.timestamps
    end
  end
end
