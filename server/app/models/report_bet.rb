class ReportBet < ApplicationRecord
  belongs_to :account
  belongs_to :bet
end
