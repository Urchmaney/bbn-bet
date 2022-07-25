class BetEventOption < ApplicationRecord
  validates :title, presence: true
  belongs_to :bet_event
end
