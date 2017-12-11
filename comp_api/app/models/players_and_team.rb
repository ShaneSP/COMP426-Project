class PlayersAndTeam < ApplicationRecord
  ##Relationships
  belongs_to        :players
  belongs_to        :teams
end
