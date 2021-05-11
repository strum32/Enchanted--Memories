class AddSubParkToRides < ActiveRecord::Migration[6.1]
  def change
    add_column :rides, :subpark, :string
  end
end
