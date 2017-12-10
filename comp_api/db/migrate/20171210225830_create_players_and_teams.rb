class CreatePlayersAndTeams < ActiveRecord::Migration[5.1]
  def change
    create_table :players_and_teams do |t|
      t.integer :player_id
      t.integer :team_id

      t.timestamps
    end
  end
end
