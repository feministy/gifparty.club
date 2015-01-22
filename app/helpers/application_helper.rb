module ApplicationHelper
  def current_user
    @current_user ||= session[:current_user_id] && User.find(session[:current_user_id])
  end

  def is_owner?
    current_user.id == @user.id
  end

  def error
    flash[:error]
  end
end
