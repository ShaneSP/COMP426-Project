
class Player < ApplicationRecord
  after_initialize :defaults

  def defaults
    unless persisted?
      self.tournamentsWon||=0
      self.tournamentsPlayed||=0
      self.gamesPlayed||=0
      self.gamesWon||=0
    end
  end
end
