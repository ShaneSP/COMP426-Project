class CreateGames < ActiveRecord::Migration[5.1]
  def change
    create_table :games do |t|
      t.integer :blueTeamID
      t.integer :redTeamID
      t.integer :tournament_id #Tournament that the game is a part of
      t.integer :gameWinner

      t.timestamps
    end
  end
end
