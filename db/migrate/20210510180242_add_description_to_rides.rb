class AddDescriptionToRides < ActiveRecord::Migration[6.1]
  def change
    add_column :rides, :description, :string
  end
end
