import React from "react";
import { FileUpload } from 'primereact/fileupload';
import { Button } from "primereact/button";
export default function UploadReport(){
    return(
        <div className="block w-8 ml-auto mr-auto">
        <p className="text-xl mt-8 text-center">Please provide the Imaging Study</p>
        <div className="card">
            <FileUpload  name="demo[]" url={'/api/upload'} multiple accept="image/*" maxFileSize={1000000} emptyTemplate={<p className=" h-6rem m-0">Drag and drop files to here to upload.</p>} />
        </div>
        <div className="w-full flex mt-4">
           <Button label="Save" raised className="w-2 "/>
           <Button label="Cancel" raised severity="danger" className="w-2 ml-3 mr-4"/>
           </div>
        </div>
    )
}