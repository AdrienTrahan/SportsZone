import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy, NgZone, ApplicationRef, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { get, set } from 'src/app/functions/storage';
import { call, post, upload } from 'src/app/functions/call';
import io from 'socket.io-client';
import { Observable } from 'rxjs';
import Zone from 'zone.js/dist/zone';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject} from '@ionic-native/file-transfer/ngx';
import { HttpClient } from '@angular/common/http';
import { TeamPage } from '../team/controller/team.page';
import { Capacitor } from '@capacitor/core';
import { FilePath } from '@ionic-native/file-path/ngx';
import { PreviewAnyFile } from '@ionic-native/preview-any-file/ngx';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { File } from '@ionic-native/file/ngx';
import { AlertController, PopoverController, Platform} from '@ionic/angular';
import { SavepopoverComponent } from 'src/app/components/savepopover/savepopover.component';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Base64ToGallery, Base64ToGalleryOptions } from '@ionic-native/base64-to-gallery/ngx';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss']
})
export class MessagesPage implements OnInit {
  @ViewChild('refresh', {static: false}) refresh: ElementRef;
  @ViewChild('textInput') textInput: ElementRef;
  @ViewChild('scrollView') private scrollView: ElementRef;
  buttonState = false;
  mediaUpload : any = {};
  end = false;
  convoId;
  loadingMessages = true;
  messagesExpanding = false;
  static conversationInfo : any = {};
  inputText = "";
  socket = io('http://127.0.0.1:3000');
  messages : any = [];
  messagesCount = 0;
  userId = "";
  inputHeight = 42;
  alias = TeamPage;
  joinedRoom = false;
  messagesAlias = MessagesPage.conversationInfo;
  constructor(private translate: TranslateService, private router: Router, private clipboard: Clipboard, private base64ToGallery: Base64ToGallery, private platform: Platform, private androidPermissions: AndroidPermissions, private alertController: AlertController, private popoverController: PopoverController,private file: File, private sanitizer: DomSanitizer, private previewAnyFile: PreviewAnyFile, private fileChooser: FileChooser, private zone: NgZone, private route: ActivatedRoute, private cd: ChangeDetectorRef, private app: ApplicationRef, private http: HttpClient, private transfer: FileTransfer, private filePath: FilePath) {
    this.mediaUpload.dataUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.mediaUpload.data);
    this.route.queryParams.subscribe(async (queryParams) => {
      this.convoId = queryParams.convoId;
    })
  }
  
  async sendMessage(){
    this.buttonState = true;
    if (!this.mediaUpload.data){
      this.socket.emit("sendMessage", {text: this.inputText})
      this.buttonState = false;
      this.inputText = "";
      this.textInput.nativeElement.style.height = "42px";
    }else{
      let token = await get("token");
      let object = {
        token: token,
        extension: "." + this.mediaUpload.trueFilePath.split("/")[this.mediaUpload.trueFilePath.split("/").length - 1].split('.').pop(),
        id: this.alias.teamInfo.id,
        convoId: this.convoId,
        playerId: this.alias.teamInfo.playerId
      };
      if (!this.alias.teamInfo.playerId){
        delete object.playerId;
      }
      let result : any = await upload('http://127.0.0.1:3000/api/sendFile', this.mediaUpload.trueFilePath, object, this.http, this.transfer);
      this.buttonState = false;
      
      result = JSON.parse(result);
      try{
        if (result.path){
          
          this.sendMedia(result.path);
        }else if (result.error){
          const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: this.translate.instant("ALERTS.6.TITLE"),
            message: this.translate.instant("ALERTS.6.MESSAGE", {error: result.error}),
            buttons: [this.translate.instant("ALERTS.6.BUTTONS.0")]
          });
      
          await alert.present();
        }
      }catch{}

      this.mediaUpload = {};
      
    }
  }
  sendMedia(path){
    this.socket.emit("sendMessage", {media: path})
    this.inputText = "";
    this.textInput.nativeElement.style.height = "42px";
  }
  async ngOnInit() {
    let token = await get("token");
    this.userId = token.split("-")[0];
    if (await get("messages." + this.convoId + ".convoInfo")){
      MessagesPage.conversationInfo = await get("messages." + this.convoId + ".convoInfo");
      this.messagesAlias = MessagesPage.conversationInfo;
      if (!MessagesPage.conversationInfo.title){
        if (MessagesPage.conversationInfo.participants.length > 2){
          MessagesPage.conversationInfo.title = MessagesPage.conversationInfo.participants.map(function(elem){
            return elem.first;
          }).join(", ");
        }else{
          MessagesPage.conversationInfo.title = MessagesPage.conversationInfo.participants.map(function(elem){
            return elem.first + " " + elem.last;
          }).join(", ");
        }
      }
    }
    if (await get("messages." + this.convoId + ".messages")){
      this.messages = await get("messages." + this.convoId + ".messages");
      for (var i = 0; i < this.messages.length; i++){
        if (this.messages[i].type == "media" && this.messages[i].mediaType == "image"){
          this.messages[i].dataUrl = await get("image.message." + this.messages[i].id);
        }
        
      }
      this.cd.detectChanges();
      this.refresh.nativeElement.click();
      this.scrollToBottom();
    }
    await this.load();
    await this.waitForMessages();
  }
  scrollViewScrolled(){
    if (this.scrollView.nativeElement.scrollTop < 100 && !this.messagesExpanding && !this.end){
      this.messagesExpanding = true;
      this.loadingMessages = true;
      this.loadBulkMessages(false, this.messages.length);
    }
  }

  async waitForMessages(){
    this.socket.on('receiveMessage', (message) => {
        this.messages.push(message);
        this.scanMessages();
        this.cd.detectChanges();
        this.refresh.nativeElement.click();
        this.scrollToBottom();
        set("messages." + MessagesPage.conversationInfo.id + ".messages", this.messages.slice(this.messages.length - 15, this.messages.length));
        for (var i = 0; i < this.messages.slice(this.messages.length - 15, this.messages.length).length; i++){
          let j = parseInt(i + "");
          if (this.messages.slice(this.messages.length - 15, this.messages.length)[j].type == "media" && this.messages.slice(this.messages.length - 15, this.messages.length)[j].mediaType == "image"){
            toDataURL(this.messages.slice(this.messages.length - 15, this.messages.length)[j].data, (base64) => {
              set("image.message." + this.messages.slice(this.messages.length - 15, this.messages.length)[j].id , base64);
            })
          }
        }
    });
  }
  ngOnChanges(){
  }
  ngAfterViewInit() {
    this.scrollToBottom();
    this.scrollView.nativeElement.onscroll = () => {
      this.scrollViewScrolled();
    };
  } 
  scrollToBottom(): void {
    try{
        this.scrollView.nativeElement.scrollTop = this.scrollView.nativeElement.scrollHeight;
    }catch(err){
    }                 
  }
  async loadMessages(messages, firstTime){
    if (firstTime){
      this.messages = [];
    }
    for (var i = 0; i < messages.length; i++){
      this.messages.unshift(messages[i]);
    }
    this.scanMessages();
    this.cd.detectChanges();
    this.refresh.nativeElement.click();
    set("messages." + MessagesPage.conversationInfo.id + ".messages", this.messages.slice(this.messages.length - 15, this.messages.length));
    for (var i = 0; i < this.messages.slice(this.messages.length - 15, this.messages.length).length; i++){
      let j = parseInt(i + "");
      if (this.messages.slice(this.messages.length - 15, this.messages.length)[j].type == "media" && this.messages.slice(this.messages.length - 15, this.messages.length)[j].mediaType == "image"){
        toDataURL(this.messages.slice(this.messages.length - 15, this.messages.length)[j].data, (base64) => {
          set("image.message." + this.messages.slice(this.messages.length - 15, this.messages.length)[j].id , base64);
        })
      }
    }
    if (firstTime){
      this.scrollToBottom();
    }
  }
  scanMessages(){
    for (var i = 0; i < this.messages.length; i++){
      if (this.messages[i].type == "media"){
        let imagesExtension = ["jpg", "jpeg", "png"];
        let videosExtension = ["mp4", "avi", "mkv", "mov", "m4a", "m4b"];
        let documentsExtension = ["docx", "ppt", "xlsx", "pdf"];
        let extension = this.messages[i].data.split(".")[this.messages[i].data.split(".").length - 1];
        if (imagesExtension.includes(extension)){
          this.messages[i].mediaType = "image";
          this.messages[i].mediaClass = "imageBubble";
        }else if (videosExtension.includes(extension)){
          this.messages[i].mediaType = "video";
          this.messages[i].mediaClass = "videoBubble";
        }else if (documentsExtension.includes(extension)){
          this.messages[i].mediaType = "document";
          this.messages[i].mediaClass = "documentBubble";
        }
        this.messages[i].dataUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.messages[i].data);
      }
      if ((this.messages.length - 1 == i || this.messages[i].userInfo.id != this.messages[i + 1].userInfo.id) && this.userId != this.messages[i].userInfo.id && MessagesPage.conversationInfo.participants.length > 1){
        this.messages[i].author = this.cap(this.messages[i].userInfo.first) + " " + this.cap(this.messages[i].userInfo.last);
      }else{
        this.messages[i].author = undefined;
      }
    }
  }
  async load(){
    await this.getConvoInfo();
    let token = await get("token");
    this.userId = token.split("-")[0];
    this.loadBulkMessages(true, 0);
    this.socket.emit("joinRoom", {room: MessagesPage.conversationInfo.socket, token: token});
    this.socket.on('joined', () => {
      this.joinedRoom = true;
      this.scrollToBottom();
    });
  }
  async loadBulkMessages(firstTime, index){
    let token = await get("token");
    let result = await call("http://127.0.0.1:3000/api/loadBulkMessages", {room: MessagesPage.conversationInfo.socket, token: token, index: index});
    try{
      let messages = JSON.parse(result);
      if (messages == "end"){
        if (!firstTime){
          this.end = true;
        }
        this.loadingMessages = false;
        this.messagesExpanding = false;
        return;
      }
      
      this.loadMessages(messages, firstTime);
      this.loadingMessages = false;
      this.messagesExpanding = false;
    }catch{}
  }
  async getConvoInfo(){
    let token = await get("token");
    let obj : any = {token: token, convoId: this.convoId};
    let result : any= await call("http://127.0.0.1:3000/api/getConversation", obj);
    try{
      result = JSON.parse(result);
      if (result.error){throw result.error;};
      MessagesPage.conversationInfo = result;
      this.messagesAlias = MessagesPage.conversationInfo;
      set("messages." + MessagesPage.conversationInfo.id + ".convoInfo", MessagesPage.conversationInfo);
      if (!MessagesPage.conversationInfo.title){
        if (MessagesPage.conversationInfo.participants.length > 2){
          MessagesPage.conversationInfo.title = MessagesPage.conversationInfo.participants.map(function(elem){
            return elem.first;
          }).join(", ");
        }else{
          MessagesPage.conversationInfo.title = MessagesPage.conversationInfo.participants.map(function(elem){
            return elem.first + " " + elem.last;
          }).join(", ");
        }
        MessagesPage.conversationInfo.inventedTitle = true;
      }
      this.messagesAlias = MessagesPage.conversationInfo;
    }catch(error){
    }
  }
  loadData(event) {
      // event.target.disabled = true;
  }
  async showDocumentPicker(){
    this.fileChooser.open()
    .then(async (uri) => {
      this.filePath.resolveNativePath(uri).then(async (path) => {
              this.mediaUpload.trueFilePath = path;
              this.mediaUpload.data = Capacitor.convertFileSrc(path);
              this.mediaUpload.dataUrl = this.sanitizer.bypassSecurityTrustResourceUrl(path);
              let imagesExtension = ["jpg", "jpeg", "png"];
              let videosExtension = ["mp4", "avi", "mkv", "mov", "m4a", "m4b"];
              let documentsExtension = ["docx", "ppt", "xlsx", "pdf"];
              let extension = path.split(".")[path.split(".").length - 1];
              this.mediaUpload.type = "media";
              if (imagesExtension.includes(extension)){
                this.mediaUpload.mediaClass = "imageBubble";
              }else if (videosExtension.includes(extension)){
                this.mediaUpload.mediaClass = "videoBubble";
              }else if (documentsExtension.includes(extension)){
                this.mediaUpload.mediaClass = "documentBubble";
              }
          
        })
      })
  }
  showMediaPreview(index: Number){
    const url = this.messages[index as any].data;
    const fileTransfer: FileTransferObject = this.transfer.create();
    fileTransfer.download(url, this.file.dataDirectory + 'file.pdf').then((entry) => {
      console.log('download complete: ' + entry.toURL());
    }, (error) => {
      // handle error
    });
    this.previewAnyFile.preview(this.messages[index as any].data)
    .then((res: any) => console.log(res))
    .catch((error: any) => console.error(error));
  }
  destroyMedia(){
    this.mediaUpload = {};
  }
  public mouseup() {
    for (var i = 0; i < this.messages.length; i++){
      if (this.messages[i as any].longPressTimer) {
        clearTimeout(this.messages[i as any].longPressTimer);
        this.messages[i as any].longPressTimer = null;
      }
    }

  }

  public mousedown(index: Number, ev: any) {
    this.messages[index as any].longPressTimer = setTimeout(async () => {
      this.messages[index as any].longPressTimer = null;
      if ((this.messages[index as any].type == "media" && this.messages[index as any].mediaType == "image") || (this.messages[index as any].type == "text")){
        let options = [];
        if ((this.messages[index as any].type == "media" && this.messages[index as any].mediaType == "image")){
          options.push("save")
        }else if ((this.messages[index as any].type == "text")){
          options.push("copy")
        }
        const popover = await this.popoverController.create({
          component: SavepopoverComponent,
          cssClass: 'my-custom-class',
          event: ev,
          translucent: true,
          componentProps: {options: options}
        });
        popover.present()
        popover.onDidDismiss().then(async (data) => {
          if (data.data && data.data.save == true){
            let options : Base64ToGalleryOptions = {prefix: '_img', mediaScanner:true};
            let base64 = await originalBase64(this.messages[index as any].data);
            
            this.base64ToGallery.base64ToGallery(base64 as any, options).then(
              res => console.log('Saved image to gallery ', res),
              err => console.log('Error saving image to gallery ', err)
            );
          }
          if (data.data && data.data.copy == true){
            this.clipboard.copy(this.messages[index as any].data);
          }
        })
      }
    }, 500);
  }
  goToBottom(i){
    if (this.messages.length - i < 15 && this.scrollView.nativeElement.scrollHeight - (this.scrollView.nativeElement.scrollTop + this.scrollView.nativeElement.clientHeight) < 400){
      this.scrollToBottom();
    }
    if (this.scrollView.nativeElement.scrollHeight - (this.scrollView.nativeElement.scrollTop + this.scrollView.nativeElement.clientHeight) < 400){
      this.scrollToBottom()
    }
  }
  cap(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }
  goToInfo(){
    this.router.navigateByUrl("/info")
  }
}

function toDataURL(url, callback) {
  let image;
    image = new Image();
    image.crossOrigin = 'Anonymous';
    image.addEventListener('load', function() {
        let canvas = document.createElement('canvas');
        let context = canvas.getContext('2d');
        let maxSize = 150;
        let ratio = image.width / image.height;
        if (ratio < 1){
          canvas.width = ratio * maxSize;
          canvas.height = maxSize;
          context.drawImage(image, 0, 0, image.width, image.height, 0, 0, ratio * maxSize, maxSize);
        }else{
          canvas.width = maxSize;
          canvas.height = ratio * maxSize;
          context.drawImage(image, 0, 0, image.width, image.height, 0, 0, maxSize, ratio * maxSize);
        }

        try {
          callback(canvas.toDataURL('image/png'));
        } catch (err) {
        }
    });
    image.src = url;
    
}
async function originalBase64(url) {
  return new Promise((resolve) => {
    let image;
    image = new Image();
    image.crossOrigin = 'Anonymous';
    image.addEventListener('load', function() {
        let canvas = document.createElement('canvas');
        let context = canvas.getContext('2d');
        canvas.width = image.width;
        canvas.height = image.height;
        context.drawImage(image, 0, 0, image.width, image.height, 0, 0, image.width, image.height);
        try {
          resolve(canvas.toDataURL('image/png'));
        } catch (err) {
        }
    });
    image.src = url;
  })
}