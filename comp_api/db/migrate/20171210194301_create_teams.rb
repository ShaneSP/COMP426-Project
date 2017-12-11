class CreateTeams < ActiveRecord::Migration[5.1]
  def change
    create_table :teams do |t|
      t.string :team_name
      t.integer :tournament_id #Tournament Organizer's ID
      t.integer :games_won
      t.integer :games_played
      t.integer :seed

      t.timestamps
    end
  end
end
