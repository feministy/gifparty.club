class ApplicationController < ActionController::Base
  include ApplicationHelper

  before_action :set_categories

  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def permission_denied
    render file: "public/401.html", status: :unauthorized
  end

  def uhoh
    render file: "public/500.html", status: :error
  end

  def set_categories
    @categories = Category.all
  end
end
