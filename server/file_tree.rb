class FileTree
  def self.make_file_tree(root)
    entries = Dir.entries(root) - [".", ".."]
    files = {}
    folders = {}
    entries.each do |entry|
      filename = root + "/" + entry
      if File.directory?(filename)
        folders[entry] = FileTree.make_file_tree(filename)
      else
        files[entry] = File.read(filename)
      end
    end

    {files: files, folders: folders}
  end
end
