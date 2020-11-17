class API::V1::BusinessesController < ApplicationController

   def index
        @business = Business.all 
   end 


end