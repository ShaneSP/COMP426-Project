class CreateTournaments < ActiveRecord::Migration[5.1]
  def change
    create_table :tournaments do |t|
      t.integer :tournamentWinnerID
      t.string :tournamentName
      t.integer :player_id #this is the organizer ID

      t.timestamps
    end
  end
end
