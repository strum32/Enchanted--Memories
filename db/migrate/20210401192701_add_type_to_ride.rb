class AddTypeToRide < ActiveRecord::Migration[6.1]
  def change
    add_column :rides, :type, :string
  end
end
