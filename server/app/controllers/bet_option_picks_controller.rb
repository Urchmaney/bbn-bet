class BetOptionPicksController < ApplicationController
  before_action :load_account, :load_bet_event

  def create
    pick = @account.bet_option_picks.new(bet_option_pick_params.merge(@bet_event))
    if pick.save
      render json: { account: @account }, status: :ok
    else
      render json: bet.errors, status: :unprocessable_entity
    end
  end

  private

  def bet_option_pick_params
    params.require(:bet_option_pick).permit(:bet_event_id, :bet_event_option_id)
  end

  def load_bet_event
    @bet_event = BetEvent.find(params['bet_event_id'])
  end
end
