Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  resources :accounts, only: [:create] do
    collection do
      post :login
    end
    
    resources :bets, only: [:create] do
      resources :bet_option_picks, only: [:create]
    end
  end
end
