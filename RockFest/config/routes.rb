Rails.application.routes.draw do

  get '/signup' => 'users#new'
  
  resources :concerts, only: [:new, :create, :index, :show, :edit, :destroy] do
  	collection do
  		get 'library'
  	end
  end

  resources :users, only: [:new, :create]

end
