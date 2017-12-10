class CreateTournaments < ActiveRecord::Migration[5.1]
  def change
    create_table :tournaments do |t|
      t.integer :tournamentWinnerID
      t.string :tournamentName
      t.integer :tournamentOrganizerID

      t.timestamps
    end
  end
end
