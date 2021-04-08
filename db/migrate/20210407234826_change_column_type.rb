class ChangeColumnType < ActiveRecord::Migration[6.1]
  def change
    rename_column :rides, :type, :category
  end
end
