class BetOptionPick < ApplicationRecord
  belongs_to :bet
  belongs_to :account
  belongs_to :bet_event
  belongs_to :bet_event_option

  validates :account, uniqueness: { scope: [:bet, :bet_event, :bet_event_option] }
end
