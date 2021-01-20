import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, PopoverController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { File } from '@ionic-native/file/ngx';
import { Crop } from '@ionic-native/crop/ngx';
import { Base64 } from '@ionic-native/base64/ngx';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RolepopoverComponent } from './components/rolepopover/rolepopover.component';
import { NativePageTransitions } from '@ionic-native/native-page-transitions/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { Device } from '@ionic-native/device/ngx';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { PreviewAnyFile } from '@ionic-native/preview-any-file/ngx';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { pipe } from 'rxjs';
import { TranslateModule, TranslateLoader, TranslatePipe } from '@ngx-translate/core';
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { SafePipe } from 'safe-pipe/lib/safe-pipe.pipe';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';
import { SmallplayerComponent } from './components/smallplayer/smallplayer.component';
import { LanguageService } from "./services/language.service";
import { registerLocaleData } from '@angular/common';
console.log(LanguageService.localLanguage);


export function createTranslateLoader(http: HttpClient){
  return new TranslateHttpLoader(http, "assets/lang/", ".json");
}

@NgModule({
  declarations: [AppComponent, RolepopoverComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, BrowserAnimationsModule, HttpClientModule, TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [HttpClient]
    }
  })],
  providers: [
    StatusBar,
    SplashScreen,
    Crop,
    File,
    HttpClient,
    Device,
    Base64,
    FileTransfer,
    Clipboard,
    NativePageTransitions,
    SocialSharing,
    QRScanner,
    CameraPreview,
    Geolocation,
    CallNumber,
    EmailComposer,
    FileChooser,
    FilePath,
    PreviewAnyFile,
    Pipe,
    FileOpener,
    Base64ToGallery,
    AndroidPermissions,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

