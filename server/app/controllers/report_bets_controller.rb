class ReportBetsController < ApplicationController
  before_action :load_account, :load_bet

  def create
    report_bet = ReportBet.new(report_bet_params.merge({ account: @account, bet: @bet }))
    if report_bet.save
      render json: { report: report_bet }, status: :created
    else
      render json: report_bet.errors, status: :unprocessable_entity
    end
  end

  private

  def load_bet
    @bet = Bet.find(params[:bet_id])
  end

  def report_bet_params
    params.require(:report).permit(:reason)
  end
end
