class Gif < ActiveRecord::Base
  belongs_to :user
  belongs_to :category

  has_attached_file :image,
                    :storange => :s3,
                    :s3_credentials => Proc.new{|a| a.instance.s3_credentials }

  def s3_credentials
    {
      bucket: "gifpartyclub",
      access_key_id: ENV['AWS_GIFPARTY_PAPERCLIP_ACCESS'],
      secret_access_key: ENV['AWS_GIFPARTY_PAPERCLIP_SECRET']
    }
  end
end
