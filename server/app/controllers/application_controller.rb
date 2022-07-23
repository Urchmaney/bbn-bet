class ApplicationController < ActionController::API

  private

  def load_account
    account_id = decode_auth_token(params[:auth_token])[:account_id]
    @account = Account.find(account_id)
  end

  def decode_auth_token(token)
    JWT.decode(token, Rails.application.secrets.secret_key_base)[0]
  end
end
