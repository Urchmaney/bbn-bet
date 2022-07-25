class BetsController < ApplicationController
  before_action :load_account

  def create
    bet = @account.bets.new(bet_params)
    if bet.save
      render json: { account: @account }, status: :ok
    else
      render json: bet.errors, status: :unprocessable_entity
    end
  end

  private

  def bet_params
    params.require(:bet).permit(
      :title, :description, :stake_amount, :status, bet_events_attributes: [
        :title, { bet_event_options_attributes: [:title] }
      ]
    )
  end
end
