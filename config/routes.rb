Rails.application.routes.draw do
  resources :gifs, only: [:new, :create]
  resources :sessions, only: [:new, :create, :destroy]
  resources :users, only: :show
  resources :categories, only: [:index]

  # custom route for fancy path
  get ':id' => 'categories#show', as: 'category'

  root 'pages#index'
end
