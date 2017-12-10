class Team < ApplicationRecord
    ## Relationships
    belongs_to      :tournament
    has_many        :games
end
