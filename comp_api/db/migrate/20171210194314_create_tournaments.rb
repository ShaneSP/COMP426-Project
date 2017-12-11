class CreateTournaments < ActiveRecord::Migration[5.1]
  def change
    create_table :tournaments do |t|
      t.integer :tournament_winner_id
      t.string :tournament_name
      t.integer :player_id #Tournament that the team is participating in

      t.timestamps
    end
  end
end
