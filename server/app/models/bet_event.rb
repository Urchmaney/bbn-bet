class BetEvent < ApplicationRecord
  validates :title, presence: true
  belongs_to :bet
  has_many :bet_event_options

  accepts_nested_attributes_for :bet_event_options
end
