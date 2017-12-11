class Game < ApplicationRecord
    after_initialize    :defaults

    ## Relationships
    belongs_to      :tournament

    def defaults
        unless persisted?
            self.game_winner_id||=0
            self.final_round||=false
        end
    end
end
