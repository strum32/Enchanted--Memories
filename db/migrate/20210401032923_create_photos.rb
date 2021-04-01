class CreatePhotos < ActiveRecord::Migration[6.1]
  def change
    create_table :photos do |t|
      t.string :title
      t.references :user, null: false, foreign_key: true
      t.string :img_url

      t.timestamps
    end
  end
end
