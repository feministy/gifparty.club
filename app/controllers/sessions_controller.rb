class SessionsController < ApplicationController
  include SessionsHelper

  def new
    @user = User.new
  end

  def create
    @current_user = User.find_by_name(params[:name])
    if @current_user && @current_user.authenticate(params[:password])
      create_session
      redirect_to @current_user
    else
      redirect_to new_session_path
    end
  end

  def destroy
    destroy_session
    redirect_to new_session_path
  end

  private
  def session_params
    params.require(:admin).permit(:name, :password)
  end
end
