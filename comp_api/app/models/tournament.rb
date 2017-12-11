class Tournament < ApplicationRecord
    after_initialize    :defaults

    ## Relationships
    belongs_to      :player
    has_many        :teams
    has_many        :games
    has_many        :players,        :through => :teams

    def defaults
        unless persisted?
            self.tournament_winner_id||=0
            self.fen||=""
        end
    end
end
