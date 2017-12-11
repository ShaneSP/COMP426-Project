class Team < ApplicationRecord
    after_initialize    :defaults

    ## Relationships
    belongs_to      :tournament
    has_many        :games
    has_many        :players_and_teams

    def defaults
        unless persisted?
            self.games_won||=0
            self.games_played||=0
        end
    end
end
