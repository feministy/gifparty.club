module SessionsHelper
  def create_session
    session[:current_user_id] = @current_user.id
  end

  def destroy_session
    session[:current_user_id] = nil
    @current_user = nil
  end
end
