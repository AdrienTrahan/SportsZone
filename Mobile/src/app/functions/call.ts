import { HttpClient } from '@angular/common/http';
import { serialize } from './serializer';
import { get, remove } from './storage';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';


export async function call(url, object): Promise<string>{
    let response = await new Promise((resolve) => { 
        let request = new XMLHttpRequest();
        request.onreadystatechange = function() {
            if (request.readyState == 4 && request.status == 200){
                resolve(request.responseText);
            }else{
                setTimeout(() => {
                    resolve("error")
                }, 1000)
            }
        }
        let complete = url;
        if (object != {}){
            complete += "?" + serialize(object);
        }

        request.open("GET", complete);
        if (object.token){
            console.log(object.token);
            
            request.setRequestHeader("Auth", object.token);
            delete object.token;
        }
        request.send();
    });
    return response as string;
}
export async function post(url, object): Promise<string>{
    let response = await new Promise((resolve) => { 
        let request = new XMLHttpRequest();
        request.onreadystatechange = function() {
            if (request.readyState == 4 && request.status == 200){
                resolve(request.responseText);
            }
        }
        request.open("POST", url + "?" + serialize(object));

        if (object.token){
            request.setRequestHeader("auth", object.token);
            delete object.token;
        }
        request.send(null);
    });
    return response as string;
}
    
export async function upload(url, imagePath, object, http, transfer): Promise<string>{
    let response = await new Promise(async (resolve) => { 
        if (imagePath == ""){
            let result = await post(url, object);
            resolve(result)
        }else{
            const fileTransfer: FileTransferObject = transfer.create();
            const uploadOpts: FileUploadOptions = {
                fileKey: 'image',
                httpMethod:'POST',
                fileName: new Date().getTime() + Math.random() + Math.random() + ".jpg",
                chunkedMode: false,
            };
            if (object.token){
                uploadOpts.headers = {auth: object.token};
                delete object.token;
            }
            fileTransfer.upload(imagePath, url + "?" + serialize(object), uploadOpts).then((data) => {
                if (data.response){
                    resolve(data.response);
                }
            }, (err) => {
                resolve(err);
            });
        }
    });
    return response as string;
}

export async function logout(){
    let token = await get("token");
    await call("http://127.0.0.1:3000/api/logout", {token: token});
    await remove("token");
    await remove("role");
}