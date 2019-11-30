import { Component, OnInit } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-social-share',
  templateUrl: './social-share.component.html',
  styleUrls: ['./social-share.component.scss'],
})
export class SocialShareComponent implements OnInit {

  constructor(private socialSharing: SocialSharing) { }

  ngOnInit() {}



shareViaEmail(){
  this.socialSharing.canShareViaEmail().then(() => {
    // Sharing via email is possible
    console.log('yes')

  }).catch(() => {
    // Sharing via email is not possible
    console.log('no')

  });
  
  // Share via email
  this.socialSharing.shareViaEmail('Body', 'Subject', ['']).then(() => {
    // Success!
  }).catch(() => {
    // Error!
  });
}

shareViaFacebook(){
  this.socialSharing.canShareVia('facebook').then(() => {
    // Sharing via email is possible
  }).catch(() => {
    // Sharing via email is not possible
  });
  
  // Share via email
  this.socialSharing.shareViaFacebook('foo' ).then(() => {
    // Success!
  }).catch(() => {
    // Error!
  });
}

shareViaTwitter(){
  this.socialSharing.canShareVia('twitter').then(() => {
    // Sharing via email is possible
  }).catch(() => {
    // Sharing via email is not possible
  });
  
  // Share via email
  this.socialSharing.shareViaTwitter('foo' ).then(() => {
    // Success!
  }).catch(() => {
    // Error!
  });
}

shareViaSMS(){
  this.socialSharing.canShareVia('sms').then(() => {
    // Sharing via email is possible
    console.log('yes')
  }).catch(() => {
    // Sharing via email is not possible
    console.log('no')
  });
  
  // Share via email
  this.socialSharing.shareViaSMS('foo' , '').then(() => {
    // Success!
  }).catch(() => {
    // Error!
  });
}

}


