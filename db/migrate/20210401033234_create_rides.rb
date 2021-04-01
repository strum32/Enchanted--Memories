class CreateRides < ActiveRecord::Migration[6.1]
  def change
    create_table :rides do |t|
      t.string :name
      t.references :park, null: false, foreign_key: true
      t.string :img_url

      t.timestamps
    end
  end
end
