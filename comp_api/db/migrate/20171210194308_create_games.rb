class CreateGames < ActiveRecord::Migration[5.1]
  def change
    create_table :games do |t|
      t.integer :blueTeamID
      t.integer :redTeamID
      t.integer :tournamentID
      t.integer :gameWinner

      t.timestamps
    end
  end
end
