class AddOpenToRides < ActiveRecord::Migration[6.1]
  def change
    add_column :rides, :open, :string
  end
end
