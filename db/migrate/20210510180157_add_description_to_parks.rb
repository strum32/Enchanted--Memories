class AddDescriptionToParks < ActiveRecord::Migration[6.1]
  def change
    add_column :parks, :description, :string
  end
end
