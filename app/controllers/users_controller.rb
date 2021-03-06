class UsersController < ApplicationController
  before_action :set_user

  # GET /users/1
  def show
    permission_denied unless is_owner?
    @gif = Gif.new
    @categories = Category.all
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_user
    @user = User.friendly.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def user_params
    params.require(:user).permit(:name, :slug)
  end
end
