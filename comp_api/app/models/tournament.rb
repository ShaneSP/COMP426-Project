class Tournament < ApplicationRecord
    ## Relationships
    belongs_to      :player
    has_many        :teams
    has_many        :games
    has_many        :players,        :through => :teams

end
