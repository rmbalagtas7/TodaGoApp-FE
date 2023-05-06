import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private loadingCtrl: LoadingController, private router: Router) { }

  async onClick() {
    const loading = await this.loadingCtrl.create({
      duration: 3000,
    });

    loading.present();


  }

}
