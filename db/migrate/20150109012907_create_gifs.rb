class CreateGifs < ActiveRecord::Migration
  def change
    create_table :gifs do |t|
      t.references :user, index: true
      t.references :category, index: true

      t.timestamps
    end
  end
end
