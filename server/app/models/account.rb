require 'bcrypt'

class Account < ApplicationRecord
  has_secure_password
  validates :username, presence: true, uniqueness: true
  validates :password, presence: true

  has_many :bets
  has_many :bet_option_picks
end
