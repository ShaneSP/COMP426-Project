class CreateGames < ActiveRecord::Migration[5.1]
  def change
    create_table :games do |t|
      t.integer :blue_team_id
      t.integer :red_team_id
      t.integer :tournament_id #Tournament that the game is a part of
      t.integer :game_winner_id
      t.integer :round
      t.boolean :final_round

      t.timestamps
    end
  end
end
