class Player < ApplicationRecord
    after_initialize    :defaults

    ##Relationships
    has_many        :teams
    has_many        :tournaments
    has_many        :games,          :through => :teams

    def defaults
        unless persisted?
            self.tournamentsWon||=0
            self.tournamentsPlayed||=0
            self.gamesWon||=0
            self.gamesPlayed||=0
        end
    end
end
