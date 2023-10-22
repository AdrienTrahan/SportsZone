import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef, ɵCodegenComponentFactoryResolver } from '@angular/core';
import { ModalController, LoadingController, AlertController } from '@ionic/angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { DomSanitizer } from '@angular/platform-browser';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview/ngx';
import { call } from 'src/app/functions/call';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';
import { get } from 'src/app/functions/storage';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-join-team',
  templateUrl: './join-team.page.html',
  styleUrls: ['./join-team.page.scss'],
})
export class JoinTeamPage implements OnInit {
  height = 0;
  keyboardUp = true;
  url = "";
  playerId = "";
  mustGoBack = false;
  coach = false;
  @ViewChild('canvas') canvas: ElementRef;
  @ViewChild('urlInput') urlInput: ElementRef;
  constructor(private translate: TranslateService, public alertController: AlertController, private modal: ModalController, private qrScanner: QRScanner, private cameraPreview: CameraPreview, private sanitizer: DomSanitizer, private cd: ChangeDetectorRef, public loadingController: LoadingController, private route: ActivatedRoute) {
    this.route.queryParams.subscribe((queryParams) => {
      if (queryParams && queryParams.playerId){
        this.playerId = queryParams.playerId;

      }else{
        this.coach = true;
      }
    })
  }

  ngOnInit() {
  }
  back(){
    this.modal.dismiss();
  }
  
  async ionViewDidEnter(){
    if (this.mustGoBack){
      this.back();
      this.mustGoBack = false;
      return;
    }
    const cameraPreviewOpts: CameraPreviewOptions = {
      x: 50,
      y: 150,
      width: (this.canvas.nativeElement.getBoundingClientRect().width - 100),
      height: Math.min(this.canvas.nativeElement.getBoundingClientRect().height - 350, 300),
      camera: 'rear',
      tapPhoto: true,
      previewDrag: true,
      toBack: true,
      alpha: 1
    }
    this.height = Math.min(this.canvas.nativeElement.getBoundingClientRect().height - 250, 300);
    this.cameraPreview.startCamera(cameraPreviewOpts).then((res) => {
      this.keyboardUp = false;
      this.startScanning();
    }).catch((err) => {
      this.keyboardUp = false;
      this.startScanning();
    });
  }
  ionViewWillLeave(){
    this.cameraPreview.stopCamera();
  }
  ionViewDidLeave(){
    this.cameraPreview.stopCamera();
    this.cameraPreview.hide()
  }
  async joinTeam(){
    let loading = await this.presentLoading();
    this.cameraPreview.stopCamera();
    this.cameraPreview.hide();
    let params = this.getParams(this.url);
    if (!this.url.includes(".")){
      params["teamId"] = this.url.split("-")[0];
      params["invitecode"] = this.url.split("-")[1];
    }
    params["playerId"] = this.playerId;
    params["token"] = await get("token");
    
    if (this.coach){
      let response : any = await call("http://127.0.0.1:3000/api/joinPending", params);
      try{
        if (response == "done"){
          const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: this.translate.instant("ALERTS.5.TITLE"),
            message: this.translate.instant("ALERTS.5.MESSAGE"),
            buttons: [this.translate.instant("ALERTS.5.BUTTONS.0")]
          });
          this.modal.dismiss();
          alert.present();
        }
      }catch(error){
      }
      loading.dismiss();
    }else{
      let response : any = await call("http://127.0.0.1:3000/api/joinTeam", params);
      try{
        response = JSON.parse(response);
        if (response.id){
          this.modal.dismiss(response);
        }else{
          throw response;
        }
      }catch(error){
  
      }
      loading.dismiss();
    }
    loading.dismiss();
  }
  getParams(url) {
    var params = {};
    var parser = document.createElement('a');
    parser.href = url;
    var query = parser.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');
      params[pair[0]] = decodeURIComponent(pair[1]);
    }
    return params;
  };
  startScanning(){
    this.qrScanner.prepare().then((status: QRScannerStatus) => {
      if (status.authorized) {
        let scanSub = this.qrScanner.scan().subscribe((text: string) => {
          this.url = text;
          this.joinTeam();
          this.qrScanner.hide();
          scanSub.unsubscribe();
        });

      } 
    }).catch((e: any) => console.log('Error is', e));
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: this.translate.instant("ALERTS.13.MESSAGE"),
    });
    await loading.present();
    return loading;
  }
}

