class PlayersAndTeam < ApplicationRecord
  ##Relationships
  belongs_to        :player
  belongs_to        :team
end
