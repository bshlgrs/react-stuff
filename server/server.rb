require 'sinatra'
require "sinatra/json"
require_relative "file_tree.rb"

# set :port, 80
# set :bind, '0.0.0.0'

get '/' do
  File.read("./server/public/index.html")
  # `pwd`
end

get '/files' do
  json notes: FileTree.make_file_tree("./notes")
end

get '/hi' do
  "Hello World!"
end

