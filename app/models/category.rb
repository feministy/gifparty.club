class Category < ActiveRecord::Base
  has_many :gifs

  validates_presence_of :name
end
