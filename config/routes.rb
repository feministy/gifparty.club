Rails.application.routes.draw do
  resources :sessions, only: [:new, :create, :destroy]
  resources :users, only: :show
  resources :categories, only: [:index]
  resources :gifs, only: [:new, :create]

  # custom route for fancy path
  get ':id' => 'categories#show', as: 'category'
end
