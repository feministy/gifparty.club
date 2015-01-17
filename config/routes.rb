Rails.application.routes.draw do
  resources :gifs

  resources :users

  resources :categories
end
