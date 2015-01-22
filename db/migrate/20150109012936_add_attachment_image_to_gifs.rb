class AddAttachmentImageToGifs < ActiveRecord::Migration
  def self.up
    change_table :gifs do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :gifs, :image
  end
end
