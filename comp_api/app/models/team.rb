class Team < ApplicationRecord
    ## Relationships
    belongs_to      :tournament
    has_many        :games
    has_many        :players_and_teams
end
