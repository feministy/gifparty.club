class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.string :slug
      t.string :email
      t.string :password_digest
      t.timestamps
    end
    add_index :users, :slug, unique: true
  end
end
