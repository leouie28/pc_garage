<?php
    function saveImage($file, $directory) 
    {
        $image = $file;
        $image_originalname = $image->getClientOriginalName();
        $image_newName = time(). '.' . $image_originalname;
        $path = $image->storeAs($directory, $image_newName);
        return $path;


        // $image = $file;
        // $image_originalname = $image->getClientOriginalName();
        // $image_newName = time(). '.' . $image_originalname;
        // $file->move($directory,$image_newName);
        // return $image_newName;
    }

    function imageUploader($file, $path)
    {
        $folder = public_path($path);

        if (empty($file)) return '';

        if (!file_exists($folder)) {
            mkdir($folder, 0777, true);
        }

        $name = time().'.' . explode('/', explode(':', substr($file, 0, strpos($file, ';')))[1])[1];
        $success = Image::make($file)
            ->save($folder.$name);

        if ($success) return '/'.$path.$name;
        return null;
    }

    function removeFile($path){
        $path = public_path($path);
        File::delete($path);
    }

?>