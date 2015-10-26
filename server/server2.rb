require 'webrick'

server = WEBrick::HTTPServer.new :Port => 8000
server.mount_proc '/' do |req, res|
  res.body = "Hello, world! #{req.path} #{req.request_method} #{req.body}"
end

trap('INT') { server.stop } # stop server with Ctrl-C
server.start