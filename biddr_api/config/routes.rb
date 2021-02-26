Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root "welcome#index"

  resources :users, only: [:new, :create]

  resource :session, only: [:new, :create, :destroy]

  resources :auctions do
    resources :bids, shallow: true, only: :create
  end

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :auctions
      resource :session, only: [:create, :destroy]
      resource :users, only: [:create] do
        get :current, on: :collection
      end
    end
  end
end
