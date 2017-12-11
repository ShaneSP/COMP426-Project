class Player < ApplicationRecord
    after_initialize    :defaults

    ##Relationships
    has_many        :players_and_teams
    has_many        :tournaments
    has_many        :teams,             :through => :players_and_teams,   :source => :teams
    has_many        :games,             :through => :teams

    def defaults
        unless persisted?
            self.tournaments_won||=0
            self.tournaments_played||=0
            self.games_won||=0
            self.games_played||=0
        end
    end
end
