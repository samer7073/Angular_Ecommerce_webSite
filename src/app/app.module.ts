import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import {NgForm} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client/client.component';
import { AjouterProduitComponent } from './ajouter_produit/ajouter-produit/ajouter-produit.component';
import { FormsModule } from '@angular/forms';
import { AjouterClientComponent } from './ajouterClient/ajouter-client/ajouter-client.component';
import { HeaderComponent } from './header/header/header.component';
import { AffichierProduitComponent } from './affichierProduit/affichier-produit/affichier-produit.component';
import { AffichierProduitAdminComponent } from './admin/affichier-produit-admin/affichier-produit-admin.component';
import { EditerProduitComponent } from './admin/editerProduit/editer-produit/editer-produit.component';
import { AffichierClientAdminComponent } from './admin/affichierClientAdmin/affichier-client-admin/affichier-client-admin.component';
import { EditerClientAdminComponent } from './admin/editerClientAdmin/editer-client-admin/editer-client-admin.component';
import { ConnecterComponent } from './connecter/connecter/connecter.component';
import { CommandeComponent } from './commande/commande/commande.component';
import { AffichierCommandeAdminComponent } from './admin/affichierCommandeAdmin/affichier-commande-admin/affichier-commande-admin.component';
import { HeaderAdminComponent } from './admin/headerAdmin/header-admin/header-admin.component';
import { EditCommandeComponent } from './admin/editCommande/edit-commande/edit-commande.component';
import { LoginAdminComponent } from './admin/loginAdmin/login-admin/login-admin.component';
import { ContactComponent } from './contact/contact.component';
import { ObliermotpasseComponent } from './obliermotpasse/obliermotpasse.component';
import { AjouterAdminComponent } from './ajouter-admin/ajouter-admin.component';
import { AffichierAdminComponent } from './affichier-admin/affichier-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    AjouterProduitComponent,
    AjouterClientComponent,
    HeaderComponent,
    AffichierProduitComponent,
    AffichierProduitAdminComponent,
    EditerProduitComponent,
    AffichierClientAdminComponent,
    EditerClientAdminComponent,
    ConnecterComponent,
    CommandeComponent,
    AffichierCommandeAdminComponent,
    HeaderAdminComponent,
    EditCommandeComponent,
    LoginAdminComponent,
    ContactComponent,
    ObliermotpasseComponent,
    AjouterAdminComponent,
    AffichierAdminComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
