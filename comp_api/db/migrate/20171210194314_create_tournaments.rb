class CreateTournaments < ActiveRecord::Migration[5.1]
  def change
    create_table :tournaments do |t|
      t.integer :tournamentWinnerID
      t.string :tournamentName
      t.integer :player_id #Tournament that the team is participating in

      t.timestamps
    end
  end
end
