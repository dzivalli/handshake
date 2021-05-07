Rails.application.routes.draw do
  root to: 'home#index'

  resources :chirps, only: [:index, :create] do
    post 'upvote', to: 'votes#upvote'
    post 'downvote', to: 'votes#downvote'
  end
end
