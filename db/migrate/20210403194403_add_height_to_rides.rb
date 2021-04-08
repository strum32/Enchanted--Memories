class AddHeightToRides < ActiveRecord::Migration[6.1]
  def change
    add_column :rides, :height, :string
  end
end
