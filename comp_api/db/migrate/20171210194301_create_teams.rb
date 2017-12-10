class CreateTeams < ActiveRecord::Migration[5.1]
  def change
    create_table :teams do |t|
      t.string :teamName
      t.integer :playerOneID
      t.integer :playerTwoID
      t.integer :playerThreeID
      t.integer :playerFourID
      t.integer :playerFiveID
      t.integer :tournamentPlayedID
      t.integer :gamesWon
      t.integer :gamesPlayed

      t.timestamps
    end
  end
end
