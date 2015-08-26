class AddConcertDetails < ActiveRecord::Migration
  def change
  	add_column :concerts, :band, :string
  	add_column :concerts, :city, :string
  	add_column :concerts, :venue, :string
  	add_column :concerts, :date, :string
  	add_column :concerts, :price, :float
  	add_column :concerts, :description, :string
  end
end
