class Gif < ActiveRecord::Base
  belongs_to :user
  belongs_to :category
  has_attached_file :image,
                    :storage => :s3,
                    :styles => { :thumb => "200x200>", :large => "500x500>" },
                    :s3_credentials => {bucket: "gifpartyclub", access_key_id: ENV['AWS_GIFPARTY_PAPERCLIP_ACCESS'], secret_access_key: ENV['AWS_GIFPARTY_PAPERCLIP_SECRET']}
  process_in_background :image
  validates_presence_of :user, :category
  validates :image, :attachment_presence => true
  validates_attachment_content_type :image, :content_type => ["image/gif"]
end
