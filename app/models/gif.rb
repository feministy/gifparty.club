class Gif < ActiveRecord::Base
  belongs_to :user
  belongs_to :category

  has_attached_file :image,
                    :storange => :s3,
                    :s3_credentials => Proc.new{|a| a.instance.s3_credentials }

  def s3_credentials
    {
      bucket: "xxx",
      access_key_id: "xxx",
      secret_access_key: "xxx"
    }
  end
end
