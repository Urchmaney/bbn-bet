class BetOptionPicksController < ApplicationController
  before_action :load_account, :load_bet

  def create
    pick = @account.bet_option_picks.new(bet_option_pick_params.merge({ bet: @bet }))
    if pick.save
      render json: { account: @account }, status: :ok
    else
      render json: pick.errors, status: :unprocessable_entity
    end
  end

  private

  def bet_option_pick_params
    params.require(:bet_option_pick).permit(:bet_event_id, :bet_event_option_id)
  end

  def load_bet
    @bet = Bet.find(params['bet_id'])
  end
end
