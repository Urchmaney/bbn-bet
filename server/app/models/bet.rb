class Bet < ApplicationRecord
  validates :title, :status, presence: true
  belongs_to :account
  has_many :bet_events
  enum status: { open: 1, closed: 2, completed: 3 }

  accepts_nested_attributes_for :bet_events
end
