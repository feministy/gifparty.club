Rails.application.routes.draw do
  resources :gifs

  resources :users, only: :show

  resources :categories
end
