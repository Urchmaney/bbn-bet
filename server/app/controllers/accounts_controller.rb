class AccountsController < ApplicationController
  def create
    account = Account.new(account_params)
    if account.save
      render json: { account: account, token: encode_account_detail(account) }, status: :created
    else
      render json: account.errors, status: :unprocessable_entity
    end
  end

  def login
    account = Account.find_by(username: params[:username])
    if account.present? && account.authenticate(params[:password])
      render json: { token: encode_account_detail(account) }, status: :ok
    else
      render json: 'Wrong username or password.', status: :bad_request
    end
  end

  private

  def account_params
    params.require(:account).permit(:username, :password)
  end

  def encode_account_detail(account)
    JWT.encode({ account_id: account.id }, Rails.application.secrets.secret_key_base, 'HS256')
  end
end
