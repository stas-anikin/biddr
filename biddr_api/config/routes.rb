Rails.application.routes.draw do
  root "welcome#index"

  resources :users, only: [:new, :create]

  resource :session, only: [:new, :create, :destroy]

  resources :auctions do
    resources :bids, shallow: true, only: :create
  end
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :auctions do
        resources :bids, only: [:create, :destroy, :index, :show]
        resources :publishings, only: :create
        resources :reservings, only: :create
      end
      resource :session, only: [:create, :destroy]
      resources :users, shallow: true, only: [:create, :new, :show, :index] do
        get :current, on: :collection
      end
    end
  end
end
namespace :api, defaults: { format: :json } do
  namespace :v1 do
    resources :auctions do
      resources :bids, only:[:create]
    end
    
    resource :session, only: [:create, :destroy]
    delete('/sign_out', to: 'sessions#destroy')
    resources :users, only: [:create]
    get('/current_user', to: 'sessions#get_current_user')
  end
end